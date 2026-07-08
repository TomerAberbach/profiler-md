# C/C++

C and C++ profiling uses [gperftools](https://github.com/gperftools/gperftools),
[Valgrind's Callgrind](https://valgrind.org/docs/manual/cl-manual.html), or
[systing](https://github.com/josefbacik/systing).

## CPU profiling

Periodically samples the call stack. Useful for finding CPU hot spots.

Link with `-lprofiler`:

```sh
gcc -O2 -Wl,--no-as-needed -lprofiler -o program program.c    # C
g++ -O2 -Wl,--no-as-needed -lprofiler -o program program.cpp  # C++
```

### CLI

```sh
# Generate a CPU profile
CPUPROFILE=cpu.prof ./program

# Convert to pprof protobuf format
pprof --proto ./program cpu.prof > cpu.pprof
```

#### Environment variables

| Variable               | Default | Description                                                                      |
| ---------------------- | ------- | -------------------------------------------------------------------------------- |
| `CPUPROFILE`           | —       | Output filename; profiling is enabled when set                                   |
| `CPUPROFILE_FREQUENCY` | `100`   | Samples per second                                                               |
| `CPUPROFILE_REALTIME`  | —       | Use wall-clock time (`ITIMER_REAL`) instead of CPU time (`ITIMER_PROF`) when set |
| `CPUPROFILESIGNAL`     | —       | Signal number to toggle profiling on/off at runtime                              |

### Programmatic API

```c
#include <gperftools/profiler.h>

ProfilerStart("cpu.prof");

// Code to profile...

ProfilerFlush(); // optional: flush buffered samples mid-run
ProfilerStop();
```

## Memory profiling

Periodically dumps the live heap, capturing allocation stack traces. Useful for
finding memory leaks and allocation hot spots.

Link with `-ltcmalloc`:

```sh
gcc -O2 -Wl,--no-as-needed -ltcmalloc -o program program.c    # C
g++ -O2 -Wl,--no-as-needed -ltcmalloc -o program program.cpp  # C++
```

### CLI

```sh
# Generate heap profiles (written as <prefix>.0000.heap, .0001.heap, …)
HEAPPROFILE=heap.prof ./program

# Convert a heap profile to pprof protobuf format
pprof --proto ./program heap.prof.0001.heap > heap.pprof
```

#### Environment variables

| Variable                           | Default      | Description                                                                                   |
| ---------------------------------- | ------------ | --------------------------------------------------------------------------------------------- |
| `HEAPPROFILE`                      | —            | Output filename prefix; heap profiling is enabled when set                                    |
| `HEAP_PROFILE_ALLOCATION_INTERVAL` | `1073741824` | Dump a profile after every this many bytes allocated (default 1 GB)                           |
| `HEAP_PROFILE_INUSE_INTERVAL`      | `104857600`  | Dump a profile each time the in-use high-water mark grows by this many bytes (default 100 MB) |
| `HEAP_PROFILE_TIME_INTERVAL`       | `0`          | Dump a profile every this many seconds (disabled by default)                                  |
| `HEAPPROFILESIGNAL`                | —            | Signal number to dump a profile on demand                                                     |
| `HEAP_PROFILE_MMAP`                | `false`      | Also profile `mmap`/`mremap`/`sbrk` calls                                                     |
| `HEAP_PROFILE_ONLY_MMAP`           | `false`      | Profile only `mmap`/`mremap`/`sbrk`; skip `malloc`/`new`                                      |

### Programmatic API

```c
#include <gperftools/heap-profiler.h>

HeapProfilerStart("heap.prof");

// Code to profile...

HeapProfilerDump("checkpoint"); // optional mid-run profile dump
HeapProfilerStop();
```

## Callgrind profiling

Runs the program under Valgrind's Callgrind, which counts every executed
instruction and records the call graph. Exact instead of sampled, but runs the
program ~20–100× slower. Linux and other Valgrind platforms only.

Build with debug info so functions resolve to source files and lines:

```sh
gcc -O2 -g -o program program.c    # C
g++ -O2 -g -o program program.cpp  # C++
```

### CLI

```sh
# Profile, writing the callgrind format directly
valgrind --tool=callgrind --callgrind-out-file=program.callgrind ./program

# Optional: also simulate CPU caches and branch prediction
valgrind --tool=callgrind --cache-sim=yes --branch-sim=yes \
  --callgrind-out-file=program.callgrind ./program
```

#### Flags

| Flag                   | Default            | Description                                                             |
| ---------------------- | ------------------ | ----------------------------------------------------------------------- |
| `--callgrind-out-file` | `callgrind.out.%p` | Output filename (`%p` expands to the PID)                               |
| `--cache-sim`          | `no`               | Also count simulated cache hits/misses                                  |
| `--branch-sim`         | `no`               | Also count branch mispredictions                                        |
| `--dump-instr`         | `no`               | Record costs per instruction instead of per line                        |
| `--separate-threads`   | `no`               | Write one profile per thread                                            |
| `--instr-atstart`      | `yes`              | Set to `no` to skip startup, then toggle with `callgrind_control -i on` |

## Heap checking

Compares the heap state before and after a region of code to detect memory
leaks. Useful for confirming a code path frees everything it allocates.

Link with `-ltcmalloc`:

```sh
gcc -O2 -Wl,--no-as-needed -ltcmalloc -o program program.c    # C
g++ -O2 -Wl,--no-as-needed -ltcmalloc -o program program.cpp  # C++
```

### CLI

```sh
# Report leaks at program exit
HEAPCHECK=normal ./program

# Also report still-reachable allocations at exit
HEAPCHECK=strict ./program

# Most aggressive: report all live allocations at exit
HEAPCHECK=draconian ./program
```

#### Environment variables

| Variable    | Default | Description                                                                          |
| ----------- | ------- | ------------------------------------------------------------------------------------ |
| `HEAPCHECK` | —       | Leak-checking mode (`minimal`, `normal`, `strict`, or `draconian`); enabled when set |

### Programmatic API

```c
#include <gperftools/heap-checker.h>

HeapLeakChecker checker("my_check");

// Code to check...

if (!checker.NoLeaks()) abort(); // fails if any net allocation leaked
```

## System profiling

[systing](https://github.com/josefbacik/systing) is a Linux eBPF profiler that
samples on-CPU stacks and records a stack each time a thread sleeps, across user
and kernel code. It needs root (BPF) and a kernel with BTF
(`/sys/kernel/btf/vmlinux`).

```sh
# Record a command (and its children) for 30 seconds
sudo systing --duration 30 --output profile.systing -- ./program args

# Or attach to a running process
sudo systing --duration 30 --output profile.systing --pid <pid>
```

Build what you profile with frame pointers so systing's unwinder can walk the
stack, and with symbols for readable frames:

```sh
gcc -O2 -g -fno-omit-frame-pointer -o program program.c
```

### CLI flags

| Flag                              | Default    | Description                                                        |
| --------------------------------- | ---------- | ------------------------------------------------------------------ |
| `--duration`                      | —          | Recording duration in seconds                                      |
| `--output`                        | `trace.pb` | Output path; `.systing` selects the profile export this tool reads |
| `--sample-freq`                   | `1000`     | CPU stack-sampling rate in Hz                                      |
| `--no-sleep-stack-traces`         | off        | Skip uninterruptible-sleep stacks                                  |
| `--no-interruptible-stack-traces` | off        | Skip interruptible-sleep stacks                                    |

## Tips

### Symbols

gperftools symbolizes addresses from the binary's and its shared libraries'
symbol tables, so build and link what you profile with symbols (`-g`, not
stripped). If the hot code lives in a stripped shared library, statically link
an unstripped build instead.

### Linking

Modern toolchains link with `--as-needed` by default, which drops
`-lprofiler`/`-ltcmalloc` when your program references no symbol from them,
exactly the case when you enable profiling through environment variables instead
of the programmatic API. Force the link with `-Wl,--no-as-needed`, or preload
the library at runtime with `LD_PRELOAD`. The programmatic API (`ProfilerStart`,
etc.) references the symbols, so plain `-lprofiler`/`-ltcmalloc` works there.

### Converting

`pprof --proto` requires the Go `pprof`. gperftools's bundled Perl
`pprof`/`google-pprof` has no protobuf output.

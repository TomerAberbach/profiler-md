# C/C++

C and C++ profiling uses [gperftools](https://github.com/gperftools/gperftools).

> **macOS:** gperftools' CPU profiler does not work on macOS, so capture inside
> a Linux container (e.g. `docker run --platform linux/arm64`). You don't need
> to recompile a dynamically linked binary — preload the profiler library and
> set `CPUPROFILE`:
>
> ```sh
> CPUPROFILE=cpu.prof LD_PRELOAD=$(gcc -print-file-name=libprofiler.so) ./program
> pprof --proto ./program cpu.prof > cpu.pprof
> ```
>
> Convert with the Go `pprof` CLI (`go install github.com/google/pprof@latest`,
> which needs a recent Go toolchain), distinct from gperftools' bundled Perl
> `pprof`.

> **Symbols:** gperftools symbolizes addresses from the binary's (and its shared
> libraries') symbol tables, so build/link what you profile with symbols (`-g`,
> not stripped). Profiling a stripped binary — most distro packages are stripped
> — gives wrong names, because each address maps to the nearest exported symbol
> (e.g. zstd compression frames showing up as `pthread_condattr_setpshared`). If
> the hot code lives in a stripped shared library, statically link an unstripped
> build of it instead.

> **Linking:** modern toolchains link with `--as-needed` by default, which
> _silently drops_ `-lprofiler`/`-ltcmalloc` when your program references no
> symbol from them — exactly the case when you enable profiling through the
> environment variables below instead of the programmatic API, leaving you with
> no profile at all. Force the link with `-Wl,--no-as-needed` (as the examples
> do), or preload the library at runtime with `LD_PRELOAD` (see the macOS note).
> The programmatic API (`ProfilerStart`, etc.) references the symbols, so plain
> `-lprofiler`/`-ltcmalloc` suffices there.

> **Converting:** `pprof --proto` requires the Go `pprof`
> (`go install github.com/google/pprof@latest`); gperftools' bundled Perl
> `pprof`/`google-pprof` has no protobuf output.

## CPU profiling

Periodically samples the call stack. Useful for finding CPU hot spots.

Link with `-lprofiler` (see the linking note above):

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

Link with `-ltcmalloc` (see the linking note above):

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

## Heap checking

Compares the heap state before and after a region of code to detect memory
leaks. Useful for confirming that a code path frees everything it allocates.

Link with `-ltcmalloc` (see the linking note above):

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

if (!checker.NoLeaks()) abort(); // fails if any net allocations were not freed
```

# C/C++

C and C++ profiling uses [gperftools](https://github.com/gperftools/gperftools).

## CPU profiling

Periodically samples the call stack. Useful for finding CPU hot spots.

Link with `-lprofiler`:

```sh
gcc -O2 -lprofiler -o program program.c    # C
g++ -O2 -lprofiler -o program program.cpp  # C++
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
gcc -O2 -ltcmalloc -o program program.c    # C
g++ -O2 -ltcmalloc -o program program.cpp  # C++
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

Link with `-ltcmalloc`:

```sh
gcc -O2 -ltcmalloc -o program program.c    # C
g++ -O2 -ltcmalloc -o program program.cpp  # C++
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

# Zig

Zig profiling uses [gperftools](https://github.com/gperftools/gperftools), whose
CPU profiler and tcmalloc heap profiler attach to any dynamically linked native
program, or [Linux `perf`](https://perfwiki.github.io/main/), which samples the
program from the kernel.

## CPU profiling

Periodically samples the call stack. Useful for finding CPU hot spots.

Link libc dynamically so the profiler can be preloaded, and keep frame pointers
so its unwinder can walk the stack:

```sh
zig build-exe -O ReleaseSafe -fno-omit-frame-pointer -lc program.zig
```

### CLI

```sh
# Generate a CPU profile
CPUPROFILE=cpu.prof LD_PRELOAD=/usr/lib/x86_64-linux-gnu/libprofiler.so ./program

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

Declare the C entry points and link `-lprofiler`:

```zig
extern fn ProfilerStart(fname: [*:0]const u8) c_int;
extern fn ProfilerStop() void;

_ = ProfilerStart("cpu.prof");

// Code to profile...

ProfilerStop();
```

```sh
zig build-exe -O ReleaseSafe -fno-omit-frame-pointer -lc -lprofiler program.zig
```

## Memory profiling

Periodically dumps the live heap, capturing allocation stack traces. Useful for
finding memory leaks and allocation hot spots.

Allocate through `std.heap.c_allocator`, which routes every allocation to
`malloc` and so to tcmalloc:

```zig
const gpa = std.heap.c_allocator;
```

### CLI

```sh
# Generate heap profiles (written as <prefix>.0000.heap, .0001.heap, …)
HEAPPROFILE=heap.prof LD_PRELOAD=/usr/lib/x86_64-linux-gnu/libtcmalloc.so ./program

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

## Linux perf profiling

[Linux `perf`](https://perfwiki.github.io/main/) samples any native program
through the kernel's `perf_event` counters, across user and kernel code, and
writes `perf.data` itself. It needs a Linux kernel and a
`/proc/sys/kernel/perf_event_paranoid` low enough to permit sampling (`1` or
below for kernel stacks).

Build with frame pointers so perf's unwinder can walk the stack:

```sh
zig build-exe -O ReleaseSafe -fno-omit-frame-pointer program.zig
```

```sh
# Sample a command at 999 Hz, recording call chains
perf record -F 999 -g -o perf.data -- ./program args

# Or sample a running process for 30 seconds
perf record -F 999 -g -o perf.data --pid <pid> -- sleep 30
```

### CLI flags

| Flag           | Default     | Description                                                          |
| -------------- | ----------- | -------------------------------------------------------------------- |
| `-F`           | `4000`      | Samples per second                                                   |
| `-e`           | `cycles`    | Event to sample (`cpu-clock` where no hardware counter is available) |
| `-g`           | off         | Record call chains                                                   |
| `--call-graph` | `fp`        | How to unwind: `fp`, `dwarf` (larger files), or `lbr`                |
| `-o`           | `perf.data` | Output path                                                          |
| `-a`           | off         | Sample every CPU on the system rather than one command               |

A `perf.data` file holds addresses rather than function names. See
`profiler-md --help perf` for how frames are named and how to symbolize them.

## Tips

### Linking

`LD_PRELOAD` requires a dynamic loader, and a Zig program without libc is
statically linked. Pass `-lc` to link glibc dynamically, or link
`-lprofiler`/`-ltcmalloc` and call the profiler's C API instead.

### Symbols

gperftools symbolizes addresses from the binary's symbol table, so profile a
build that keeps its symbols. `-O ReleaseSafe` and `-O ReleaseFast` keep them;
`--strip` and `-fstrip` remove them.

### Optimization

`-O Debug` frames are easy to read, but the timings differ from a release
build's. Profile `-O ReleaseSafe` or `-O ReleaseFast`, and expect inlining to
attribute some samples to the caller.

### Converting

`pprof --proto` requires the Go `pprof`. gperftools's bundled Perl
`pprof`/`google-pprof` has no protobuf output.

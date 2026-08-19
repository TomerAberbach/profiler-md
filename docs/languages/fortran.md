# Fortran

Fortran profiling uses [gperftools](https://github.com/gperftools/gperftools),
whose CPU profiler and tcmalloc heap profiler attach to any dynamically linked
native program, including one built by `gfortran`, `ifx`, or `flang`.

## CPU profiling

Periodically samples the call stack. Useful for finding CPU hot spots.

Keep frame pointers so the profiler's unwinder can walk the stack, and debug
info so its frames contain source locations:

```sh
gfortran -O2 -g -fno-omit-frame-pointer -o program program.f90
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
| `CPUPROFILE`           | —       | Output filename that enables profiling when set                                  |
| `CPUPROFILE_FREQUENCY` | `100`   | Samples per second                                                               |
| `CPUPROFILE_REALTIME`  | —       | Use wall-clock time (`ITIMER_REAL`) instead of CPU time (`ITIMER_PROF`) when set |
| `CPUPROFILESIGNAL`     | —       | Signal number to toggle profiling on/off at runtime                              |

### Programmatic API

Declare the C entry points through `iso_c_binding` and link `-lprofiler`:

```fortran
use iso_c_binding, only: c_char, c_int, c_null_char
interface
   function profiler_start(filename) bind(C, name='ProfilerStart')
      import :: c_char, c_int
      character(kind=c_char), intent(in) :: filename(*)
      integer(c_int) :: profiler_start
   end function
   subroutine profiler_stop() bind(C, name='ProfilerStop')
   end subroutine
end interface

if (profiler_start('cpu.prof'//c_null_char) == 0) error stop 'ProfilerStart failed'

! Code to profile...

call profiler_stop()
```

```sh
gfortran -O2 -g -fno-omit-frame-pointer -Wl,--no-as-needed -lprofiler \
  -o program program.f90
```

## Memory profiling

Periodically dumps the live heap, capturing allocation stack traces. Useful for
finding memory leaks and allocation hot spots.

`allocate` and the temporaries the compiler creates for allocatable and
automatic arrays go through `malloc`, so tcmalloc records them.

### CLI

```sh
# Generate heap profiles (written as <prefix>.0001.heap, .0002.heap, …)
HEAPPROFILE=heap.prof LD_PRELOAD=/usr/lib/x86_64-linux-gnu/libtcmalloc.so ./program

# Convert a heap profile to pprof protobuf format
pprof --proto ./program heap.prof.0001.heap > heap.pprof
```

#### Environment variables

| Variable                           | Default      | Description                                                                                   |
| ---------------------------------- | ------------ | --------------------------------------------------------------------------------------------- |
| `HEAPPROFILE`                      | —            | Output filename prefix that enables heap profiling when set                                   |
| `HEAP_PROFILE_ALLOCATION_INTERVAL` | `1073741824` | Dump a profile after every this many bytes allocated (default 1 GB)                           |
| `HEAP_PROFILE_INUSE_INTERVAL`      | `104857600`  | Dump a profile each time the in-use high-water mark grows by this many bytes (default 100 MB) |
| `HEAP_PROFILE_TIME_INTERVAL`       | `0`          | Dump a profile every this many seconds (disabled by default)                                  |
| `HEAPPROFILESIGNAL`                | —            | Signal number to dump a profile on demand                                                     |
| `HEAP_PROFILE_MMAP`                | `false`      | Also profile `mmap`/`mremap`/`sbrk` calls                                                     |

### Programmatic API

Declare the C entry points and link `-ltcmalloc`:

```fortran
use iso_c_binding, only: c_char, c_null_char
interface
   subroutine heap_profiler_start(prefix) bind(C, name='HeapProfilerStart')
      import :: c_char
      character(kind=c_char), intent(in) :: prefix(*)
   end subroutine
   subroutine heap_profiler_stop() bind(C, name='HeapProfilerStop')
   end subroutine
end interface

call heap_profiler_start('heap.prof'//c_null_char)

! Code to profile...

call heap_profiler_stop()
```

## Tips

### Names

`gfortran` mangles a module procedure to `__<module>_MOD_<procedure>` and a
free-standing procedure to `<procedure>_`. The program body appears as `MAIN__`.
A procedure the compiler specialized or partly inlined gets a suffix such as
`.part.0` or `.constprop.0`.

### Optimization

`-O0` frames are easy to read, but the timings differ from a release build's.
Profile the `-O2` or `-O3` build you ship, and expect inlining to attribute some
samples to the caller.

### Threads

An OpenMP program runs its worker threads in the same process, so the profile
covers all of them. Set `OMP_NUM_THREADS=1` to profile the serial path first,
because a parallel region spreads one hot loop across every worker's stack.

### Converting

`pprof --proto` requires the Go `pprof`. gperftools stopped shipping a `pprof`
of its own in 2.17, and the Perl `pprof`/`google-pprof` that earlier releases
and the distro packages built from them install has no protobuf output.

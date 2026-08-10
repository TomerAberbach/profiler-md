# Swift

Swift profiling on Linux uses
[gperftools](https://github.com/gperftools/gperftools), whose CPU profiler and
tcmalloc heap profiler attach to any dynamically linked native program. Swift
allocates class instances and buffers through `malloc`, so tcmalloc records
them.

## CPU profiling

Periodically samples the call stack. Useful for finding CPU hot spots.

Build with debug info so frames resolve to source files and lines, and link
`-lprofiler` with `--as-needed` disabled, because the linker would otherwise
drop a library the program references no symbol from:

```sh
# A single file
swiftc -O -g program.swift -o program -Xlinker --no-as-needed -Xlinker -lprofiler

# A SwiftPM package
swift build -c release -Xswiftc -g -Xlinker --no-as-needed -Xlinker -lprofiler
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

Declare gperftools' C entry points with `@_silgen_name` and link `-lprofiler`:

```swift
@_silgen_name("ProfilerStart")
func ProfilerStart(_ path: UnsafePointer<CChar>) -> Int32
@_silgen_name("ProfilerStop")
func ProfilerStop()

_ = "cpu.prof".withCString { ProfilerStart($0) }

// Code to profile...

ProfilerStop()
```

## Memory profiling

Periodically dumps the live heap, capturing allocation stack traces. Useful for
finding memory leaks and allocation hot spots.

Link `-ltcmalloc` the same way:

```sh
swiftc -O -g program.swift -o program -Xlinker --no-as-needed -Xlinker -ltcmalloc
```

### CLI

```sh
# Generate heap profiles (written as <prefix>.0001.heap, .0002.heap, …)
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

## Tips

### Demangling

gperftools reads names from the binary's symbol table, where Swift names are
mangled (`$s11SwiftParser5LexerO6CursorV7advance2ifS2bs7UnicodeO6ScalarVXE_tF`).
`swift demangle` rewrites the mangled names in any text it reads, so pipe the
Markdown through it:

```sh
profiler-md cpu.pprof | swift demangle
```

`--simplified` drops module names and implicit `self` types, turning the name
above into `Lexer.Cursor.advance(if:)`.

### Preloading

`LD_PRELOAD` activates the profiler in a program that was linked without it:

```sh
CPUPROFILE=cpu.prof LD_PRELOAD=/usr/lib/x86_64-linux-gnu/libprofiler.so ./program
HEAPPROFILE=heap.prof LD_PRELOAD=/usr/lib/x86_64-linux-gnu/libtcmalloc.so ./program
```

### Symbols

SwiftPM statically links a package and its dependencies into the executable, so
one binary contains their symbols. The Swift runtime (`libswiftCore.so` and the
rest of `/usr/lib/swift/linux`) stays dynamic. `pprof` needs those libraries
present to symbolize frames inside them.

### Optimization

`-Onone` frames are easy to read, but the timings differ from a release build's.
Profile `-O`, and expect inlining and generic specialization to attribute some
samples to the caller or to a specialized copy of the callee.

### Converting

`pprof --proto` requires the Go `pprof`. gperftools's bundled Perl
`pprof`/`google-pprof` has no protobuf output.

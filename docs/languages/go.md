# Go

Go supports pprof natively via the
[`runtime/pprof`](https://pkg.go.dev/runtime/pprof) package and the
[`net/http/pprof`](https://pkg.go.dev/net/http/pprof) HTTP handler.

## CPU profiling

Periodically samples the call stack. Useful for finding CPU hot spots.

Samples at 100 Hz by default. Call `runtime.SetCPUProfileRate(hz)` before
starting a profile to change the rate.

### CLI

```sh
# Via HTTP endpoint (add `import _ "net/http/pprof"` to your program)
curl -o cpu.pprof 'http://localhost:6060/debug/pprof/profile?seconds=30'

# Via go test
go test -cpuprofile=cpu.pprof -bench=BenchmarkFoo ./...
```

### Programmatic API

```go
import (
  "os"
  "runtime/pprof"
)

f, _ := os.Create("cpu.pprof")
pprof.StartCPUProfile(f)
defer pprof.StopCPUProfile()

// Code to profile...
```

## Memory profiling

Heap profiles come in two variants:

- **heap** (`inuse_space` / `inuse_objects`): live allocations at each sample;
  useful for finding memory leaks
- **allocs** (`alloc_space` / `alloc_objects`): all allocations since program
  start; useful for finding allocation hot spots

`runtime.MemProfileRate` controls sampling granularity (default: one sample per
512 KB allocated). Set to `1` to capture every allocation (expensive):

```go
runtime.MemProfileRate = 1
```

### CLI

```sh
# Live heap (inuse)
curl -o heap.pprof 'http://localhost:6060/debug/pprof/heap'

# All allocations since start
curl -o allocs.pprof 'http://localhost:6060/debug/pprof/allocs'

# Via go test (uses alloc_space by default)
go test -memprofile=mem.pprof -bench=BenchmarkFoo ./...
```

### Programmatic API

```go
import (
  "os"
  "runtime"
  "runtime/pprof"
)

runtime.GC() // Flush pending samples before writing the profile

// Live heap
f, _ := os.Create("heap.pprof")
pprof.WriteHeapProfile(f)

// All allocations
f, _ := os.Create("allocs.pprof")
pprof.Lookup("allocs").WriteTo(f, 0)
```

## Goroutine profiling

Captures stack traces of all current goroutines. Useful for diagnosing goroutine
leaks or deadlocks.

### CLI

```sh
# Full stack traces (debug=2 gives text output, debug=0 gives pprof binary)
curl -o goroutine.pprof 'http://localhost:6060/debug/pprof/goroutine'

# Human-readable text dump
curl 'http://localhost:6060/debug/pprof/goroutine?debug=2'
```

### Programmatic API

```go
f, _ := os.Create("goroutine.pprof")
pprof.Lookup("goroutine").WriteTo(f, 0)
```

## Goroutine leak profiling

Captures stack traces of leaked goroutines: goroutines blocked on a channel,
mutex, or other concurrency primitive that no runnable goroutine can reach.
Requires Go 1.27, though Go 1.26 supports it behind
`GOEXPERIMENT=goroutineleakprofile`. Writing the profile first runs a garbage
collection cycle that detects the leaks.

### CLI

```sh
curl -o goroutineleak.pprof 'http://localhost:6060/debug/pprof/goroutineleak'
```

### Programmatic API

```go
f, _ := os.Create("goroutineleak.pprof")
pprof.Lookup("goroutineleak").WriteTo(f, 0)
```

## Block profiling

Captures stack traces that led to blocking on synchronization primitives
(channel ops, `sync.Mutex`, `sync.RWMutex`, `sync.WaitGroup`, etc.). Useful for
diagnosing synchronization bottlenecks.

Disabled by default. Call `runtime.SetBlockProfileRate(rate)` in your program
before the code to profile. This applies whether you collect via HTTP or the
programmatic API. Rate is in nanoseconds: `1` captures every blocking event;
higher values sample less.

```go
runtime.SetBlockProfileRate(1)
```

### CLI

```sh
# Via HTTP endpoint
curl -o block.pprof 'http://localhost:6060/debug/pprof/block'

# Via go test
go test -blockprofile=block.pprof -bench=BenchmarkFoo ./...
```

### Programmatic API

```go
f, _ := os.Create("block.pprof")
pprof.Lookup("block").WriteTo(f, 0)
```

## Mutex profiling

Captures stack traces of goroutines holding a contended mutex when another
goroutine tries to acquire it. Useful for finding lock contention hot spots.

Disabled by default. Call `runtime.SetMutexProfileFraction(rate)` in your
program before the code to profile. This applies whether you collect via HTTP or
the programmatic API. `1` captures every contended event; `n` samples roughly
`1/n` events.

```go
runtime.SetMutexProfileFraction(1)
```

### CLI

```sh
curl -o mutex.pprof 'http://localhost:6060/debug/pprof/mutex'

go test -mutexprofile=mutex.pprof -bench=BenchmarkFoo ./...
```

### Programmatic API

```go
f, _ := os.Create("mutex.pprof")
pprof.Lookup("mutex").WriteTo(f, 0)
```

## Thread creation profiling

Captures stack traces that create new OS threads. Useful for diagnosing
unexpected thread proliferation.

### CLI

```sh
curl -o threadcreate.pprof 'http://localhost:6060/debug/pprof/threadcreate'
```

### Programmatic API

```go
f, _ := os.Create("threadcreate.pprof")
pprof.Lookup("threadcreate").WriteTo(f, 0)
```

## Tips

Build with `-trimpath` (e.g. `go test -trimpath ...`) so locations are
package-relative (`encoding/json/encode.go`) instead of absolute build paths.

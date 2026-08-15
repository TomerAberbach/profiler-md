package main

import (
	"encoding/json"
	"fmt"
	"os"
	"path/filepath"
	"runtime"
	"runtime/pprof"
	"sync"
)

// Parses and re-serializes the real document many times across a few
// goroutines, with lock contention so the block/mutex/goroutine profiles are
// non-empty.
func workload(data []byte) {
	// Tuned for the ~600 KB assets/shared/twitter.json: enough parses for plenty
	// of samples while keeping the run short.
	const iterations = 400
	var mu sync.Mutex
	var wg sync.WaitGroup
	shared := 0
	for w := 0; w < 4; w++ {
		wg.Add(1)
		go func() {
			defer wg.Done()
			for i := 0; i < iterations/4; i++ {
				var v any
				if err := json.Unmarshal(data, &v); err != nil {
					panic(err)
				}
				b, err := json.Marshal(v)
				if err != nil {
					panic(err)
				}
				mu.Lock()
				shared += len(b)
				mu.Unlock()
			}
		}()
	}
	wg.Wait()
	runtime.KeepAlive(shared)
}

// The senders that lose the race to the unbuffered channel block forever.
// Nothing references the channel once this returns, so the runtime's goroutine
// leak detection reports them.
func leakWorkers(data []byte) int {
	var v any
	if err := json.Unmarshal(data, &v); err != nil {
		panic(err)
	}
	results := make(chan int)
	for w := 0; w < 4; w++ {
		go func() {
			b, err := json.Marshal(v)
			if err != nil {
				panic(err)
			}
			results <- len(b)
		}()
	}
	return <-results
}

func writeProfile(dir, name string) {
	p := pprof.Lookup(name)
	if p == nil {
		panic("unknown profile: " + name)
	}
	f, err := os.Create(filepath.Join(dir, name+".pprof"))
	if err != nil {
		panic(err)
	}
	defer f.Close()
	if err := p.WriteTo(f, 0); err != nil {
		panic(err)
	}
}

func main() {
	if len(os.Args) != 3 {
		fmt.Fprintln(os.Stderr, "usage: profile <out-dir> <json-file>")
		os.Exit(2)
	}
	dir := os.Args[1]
	data, err := os.ReadFile(os.Args[2])
	if err != nil {
		panic(err)
	}

	// Enable block and mutex sampling before running the workload.
	runtime.SetBlockProfileRate(1)
	runtime.SetMutexProfileFraction(1)
	runtime.MemProfileRate = 4096

	// CPU profile spans the workload.
	cpu, err := os.Create(filepath.Join(dir, "cpu.pprof"))
	if err != nil {
		panic(err)
	}
	if err := pprof.StartCPUProfile(cpu); err != nil {
		panic(err)
	}
	workload(data)
	runtime.KeepAlive(leakWorkers(data))
	pprof.StopCPUProfile()
	cpu.Close()

	runtime.GC()

	// Predefined profiles. "heap" reports in-use memory; "allocs" reports total
	// allocations (heap-alloc). "goroutineleak" runs a leak-detecting GC cycle
	// itself before writing.
	for _, name := range []string{"heap", "allocs", "goroutine", "goroutineleak", "block", "mutex", "threadcreate"} {
		writeProfile(dir, name)
	}
}

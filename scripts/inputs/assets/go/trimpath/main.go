package main

import (
	"fmt"
	"os"
	"runtime"
	"runtime/pprof"

	"github.com/tomeraberbach/profiler-md-workload/internal/work"
)

func main() {
	if len(os.Args) != 3 {
		fmt.Fprintln(os.Stderr, "usage: workload <out-file> <json-file>")
		os.Exit(2)
	}
	data, err := os.ReadFile(os.Args[2])
	if err != nil {
		panic(err)
	}

	cpu, err := os.Create(os.Args[1])
	if err != nil {
		panic(err)
	}
	if err := pprof.StartCPUProfile(cpu); err != nil {
		panic(err)
	}
	runtime.KeepAlive(work.Run(data))
	pprof.StopCPUProfile()
	cpu.Close()
}

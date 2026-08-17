# Haskell

Haskell profiling uses GHC's built-in
[cost-centre profiler](https://downloads.haskell.org/ghc/latest/docs/users_guide/profiling.html),
which writes a JSON report (`+RTS -pj`) and an eventlog (`+RTS -l`). A cost
centre is an annotation on a binding that the runtime attributes time and
allocation to.

## Wall-clock profiling

Periodically samples the cost-centre stack. The timer runs on real time and
samples every capability whether or not it is running Haskell, so the time a
program spends blocked is attributed to the built-in `IDLE` cost centre. The
runtime also counts every byte the program allocates per cost-centre stack and
every time it enters one, and the JSON report includes both counts. The eventlog
omits them.

GHC inserts cost centres only into modules compiled with `-prof`, so compile
every library the program links with `-prof` too:

```sh
# cabal, which rebuilds the dependencies with profiling as well
cabal build --enable-profiling

# stack
stack build --profile

# ghc directly
ghc -O2 -prof -fprof-auto-top -rtsopts Main.hs
```

### Cost centres

Annotating every binding costs time and prevents optimizations, so GHC inserts
only the cost centres one of these flags specifies. Add `{-# SCC "name" #-}` in
the source to annotate an expression by hand.

| Flag                     | Description                                                                         |
| ------------------------ | ----------------------------------------------------------------------------------- |
| `-fprof-auto`            | A cost centre for every binding, including local ones                               |
| `-fprof-auto-top`        | A cost centre for every top-level binding                                           |
| `-fprof-auto-exported`   | A cost centre for every exported binding                                            |
| `-fprof-auto-calls`      | A cost centre at every call site, required for `-xc` stack traces                   |
| `-fprof-late`            | A cost centre for every top-level binding, inserted after optimization (GHC ≥ 9.4)  |
| `-fprof-late-overloaded` | A cost centre for every overloaded top-level binding, inserted after optimization   |
| `-fno-prof-auto`         | No automatic cost centres, keeping only the `{-# SCC #-}` annotations in the source |

Cabal picks the flag from `--profiling-detail`, which defaults to
`exported-functions` for a library and `toplevel-functions` for an executable.
Pass a GHC flag directly with `--ghc-options=-fprof-late`.

`-fprof-auto` and its variants insert their cost centres before optimization, so
the optimizer cannot inline or fuse the annotated code. The profiled program
then runs code a release build never runs. `-fprof-late` annotates the optimized
program instead, at the cost of names the compiler generated (`$wgo1`, `main2`)
in place of the source's.

### CLI

```sh
# The JSON report, written to Main.prof
cabal run --enable-profiling my-program -- +RTS -pj -RTS

# The JSON report and the eventlog, from one run
./Main +RTS -pj -l-au -RTS
```

Prefer the JSON report, which contains the allocation totals as well as the
ticks. Use the eventlog when the program already records one, or when marking
phases with `Debug.Trace.traceEventIO` to profile a run in parts.

An eventlog contains cost-centre samples only when the time profiler runs, which
`-pj` turns on alongside the JSON report. `-p` turns it on too, but writes the
text report, which is for reading by hand, so profiler-md rejects it.

#### RTS options

| Option | Default | Description                                                          |
| ------ | ------- | -------------------------------------------------------------------- |
| `-p`   | —       | Write a time and allocation report to `<program>.prof`               |
| `-P`   | —       | As `-p`, plus per-cost-centre tick and byte counts                   |
| `-pj`  | —       | Write the report as JSON                                             |
| `-l`   | —       | Write an eventlog to `<program>.eventlog`                            |
| `-ol`  | —       | The eventlog's path                                                  |
| `-V`   | `0.001` | Seconds between samples, and the resolution of every other RTS timer |
| `-xc`  | —       | Print the cost-centre stack on every exception                       |

`-l` takes the event classes to log. `-l-au` turns them all off and turns user
events back on, so the scheduler and heap events stay out of a log recorded for
its cost-centre samples.

## Tips

### Garbage collection

The runtime's collector reports as the `GC` cost centre. Read its share of the
ticks first, because a Haskell program that allocates heavily spends much of its
time collecting. Cutting the allocation the profile attributes to the program's
own cost centres also cuts the collector's share.

### Runtime cost centres

The runtime's own cost centres (`MAIN`, `CAF`, `GC`) have no source location.

### Boot libraries

A library compiled without `-prof` gets no cost centres, so the profile
attributes its time to the nearest annotated caller. A default GHC install ships
`base` and the other boot libraries that way, while
`cabal build --enable-profiling` and `stack build --profile` rebuild every
dependency with cost centres.

### Packages

A cost centre's source span is relative to the package GHC compiled the module
from, and the report names no package, so profiler-md counts a dependency's cost
centres as the program's own code rather than as `third-party`.

### Overhead

Time the profiled build against a plain one before treating the profile's
numbers as a release build's. Profiling adds a word to every closure and
prevents some optimizations, so a program that allocates heavily can run several
times slower.

### Benchmarks

GHC floats a benchmark loop's body out of the loop when it doesn't depend on the
iteration, so the run measures a single iteration. Vary the input per iteration,
or force the result with `Control.DeepSeq.deepseq`.

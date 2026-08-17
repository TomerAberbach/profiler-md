# GHC JSON profile

The GHC JSON profile is the machine-readable report
[GHC](https://downloads.haskell.org/ghc/latest/docs/users_guide/profiling.html)'s
runtime writes for a program compiled with `-prof` and run with `+RTS -pj`. It
contains the same measurements as the text report `+RTS -p` writes.

The report is a table of the program's cost centres, each a binding GHC
annotated, and a tree of cost-centre stacks. A node contains the costs of that
stack alone, excluding the stacks extending it: the ticks the profiler sampled,
the bytes the program allocated, and the times it entered the stack.

Ticks and allocation are measured differently, so each converts to its own
profile. A tick is one sample of the time profile, taken every millisecond by
default. The tick timer runs on real time and samples every capability whether
or not it is running Haskell, so the time profile measures wall time and
attributes the ticks sampled while the program had no work to the built-in
`IDLE` cost centre.

The runtime counts bytes and entries exactly, and counts them independently: a
cost-centre stack the program entered no times still allocates, and one it
entered many times may allocate nothing. The allocation profile therefore
reports both as measured quantities and states no rate.

It supports a single report per file.

Files use the `.prof` extension, named after the program as `<program>.prof`,
the same name the runtime uses for the text report.

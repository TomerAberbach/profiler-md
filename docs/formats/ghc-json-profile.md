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
default. The tick timer samples every capability whether or not it is running
Haskell, so the time profile measures wall time and attributes the idle ticks to
the built-in `IDLE` cost centre. The runtime counts bytes and entries exactly
and independently, so the allocation profile reports both as measured quantities
and states no rate.

It supports multiple metrics per profile and a single report per file.

Files use the `.prof` extension, named after the program as `<program>.prof`.

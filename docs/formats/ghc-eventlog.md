# GHC eventlog

The binary event stream
[GHC](https://downloads.haskell.org/ghc/latest/docs/users_guide/eventlog-formats.html)'s
runtime writes for a program run with `+RTS -l`, recording what the runtime did
and when: garbage collections and thread scheduling. A program compiled with
`-prof` and run with `+RTS -p` adds one cost-centre sample per tick.

A log opens with a header declaring every event type the runtime can write, each
with its payload size, so a reader skips the events it does not handle, whatever
version wrote them. The events follow, in the order they happened: the
cost-centre definitions the runtime writes at startup, then the samples
referencing them.

The samples are the cost-centre stacks the profiler observed, so the log
converts to the time profile they record. It omits the allocation totals the
JSON report contains.

It supports a single metric per profile and a single profile per file.

Files use the `.eventlog` extension.

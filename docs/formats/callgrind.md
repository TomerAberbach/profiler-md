# Callgrind

Callgrind is the plain-text call graph profiling format written by
[Valgrind](https://valgrind.org)'s
[Callgrind](https://valgrind.org/docs/manual/cl-manual.html) tool. It is
upward-compatible with Cachegrind's `cachegrind.out` output.
`callgrind_annotate` and KCachegrind/QCachegrind read it, and other profilers
(e.g. rbspy, R's proftools) emit it too.

A header declares the cost events (`events:`, e.g. `Ir` for instructions
executed, cache misses under simulation) and position columns (`positions:`).
The body attributes per-line costs to functions (`fl=`/`fn=` specs followed by
cost lines) and records each call's count and inclusive cost (`cfn=`/`calls=`),
with optional name and subposition compression.

It stores a weighted call graph instead of call stacks, so the output shows
per-function and per-line self costs, each function's callers and callees with
the recorded call counts and inclusive costs, and totals computed as a
function's self cost plus its outgoing calls' inclusive costs. Calls within a
recursion cycle re-count the same work, so totals exclude them and understate
the function the cycle is entered through. Those calls still appear as callers
and callees, whose percentages can exceed 100%. A function that appears only as
a call target, with no cost lines of its own, has no self cost.

It supports arbitrary metric units, multiple metrics per call graph, and a
single call graph per file.

Files have no standard extension. `callgrind.out.<pid>` and `.callgrind` are
common. The optional first line `# callgrind format` identifies the format.

# Callgrind

Callgrind is the plain-text call graph profiling format written by
[Valgrind](https://valgrind.org)'s
[Callgrind](https://valgrind.org/docs/manual/cl-manual.html) tool.
`callgrind_annotate` and KCachegrind/QCachegrind read it, and other profilers
(e.g. rbspy, R's proftools) emit it too.

A header declares the cost events (`events:`, e.g. `Ir` for instructions
executed) and position columns (`positions:`). The body attributes per-line
costs to functions (`fl=`/`fn=` specs followed by cost lines) and records each
call's count and inclusive cost (`cfn=`/`calls=`).

It stores a weighted call graph instead of call stacks, so the output shows
per-function and per-line self costs plus each function's callers and callees
with their recorded call counts and inclusive costs. A function's total is its
self cost plus its outgoing calls' inclusive costs. It excludes the calls within
a recursion cycle, which re-count the same work. Those calls still appear as
callers and callees, so their percentages can exceed 100%.

It supports arbitrary metric units, multiple metrics per call graph, and a
single call graph per file.

Files have no standard extension. `callgrind.out.<pid>` and `.callgrind` are
common.

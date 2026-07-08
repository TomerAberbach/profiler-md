# Callgrind

Callgrind is the plain-text call-graph profiling format written by
[Valgrind](https://valgrind.org)'s
[Callgrind](https://valgrind.org/docs/manual/cl-manual.html) tool
(`callgrind.out.<pid>`), upward-compatible with Cachegrind's `cachegrind.out`
output and read by `callgrind_annotate` and KCachegrind/QCachegrind. Other
profilers (e.g. rbspy, R's proftools) emit it too.

A header declares the cost events (`events:`, e.g. `Ir` for instructions
executed, cache misses under simulation) and position columns (`positions:`).
The body attributes per-line costs to functions (`fl=`/`fn=` specs followed by
cost lines) and records each call's target and inclusive cost (`cfn=`/`calls=`),
with optional name and subposition compression.

The format stores a weighted call graph, which doesn't uniquely determine call
stacks, so stacks are reconstructed by assuming each function splits its cost
among its callees in the same proportions everywhere it's called. Self costs,
per-line costs, and overall totals are exact; call stacks and total (inclusive)
costs are estimates.

Files have no standard extension; `callgrind.out.<pid>` and `.callgrind` are
common. The optional first line `# callgrind format` marks the format.

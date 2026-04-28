# Speedscope

Speedscope is a JSON profiling format used by
[speedscope.app](https://www.speedscope.app), a flame graph visualizer. Each
profile within a file has a type: `sampled` (call stacks at points in time) or
`evented` (frame open/close timestamps).

It supports arbitrary metric units, a single metric per profile, and multiple
profiles in a single file.

Files use the `.speedscope.json` extension.

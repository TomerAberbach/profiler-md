# Speedscope

Speedscope is a JSON profiling format used by
[speedscope.app](https://www.speedscope.app), a flame graph visualizer.

Each profile within a file has a type: `sampled` (call stacks at points in time)
or `evented` (frame open/close timestamps).

It supports one metric per profile, measured in one of six units (nanoseconds,
microseconds, milliseconds, seconds, bytes, or none), and multiple profiles per
file.

Files use the `.speedscope.json` extension.

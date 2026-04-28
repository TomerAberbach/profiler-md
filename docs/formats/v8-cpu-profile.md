# V8 CPU profile

The V8 CPU profile is a JSON format produced by the
[V8 JavaScript engine's sampling profiler](https://v8.dev/docs/profile).

It stores both a call tree (nodes) and a sequence of timed samples. The call
tree enables accurate self-time attribution even from a sparse sample stream,
unlike formats that store only raw stacks.

It supports a single microsecond metric per profile and a single profile per
file.

Files use the `.cpuprofile` extension.

# V8 CPU profile

The V8 CPU profile is a JSON format produced by the
[V8 JavaScript engine's sampling profiler](https://v8.dev/docs/profile).

It stores a call tree (nodes) and the sequence of samples taken from it, each
sample with the microseconds elapsed since the one before it. A profile
therefore states how long every sample stood for, rather than leaving its reader
to derive that from a nominal sampling rate.

It supports a single microsecond metric per profile and a single profile per
file.

Files use the `.cpuprofile` extension.

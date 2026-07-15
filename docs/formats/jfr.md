# JFR

[JFR](https://openjdk.org/jeps/328) (Java Flight Recorder) is the JVM's native
binary profiling format, written by the JDK's built-in
[Flight Recorder](https://docs.oracle.com/en/java/javase/21/jfapi/) and
[async-profiler](https://github.com/async-profiler/async-profiler).

A recording splits into self-contained chunks of LEB128 varint-encoded events.
One recording can mix event kinds, so it converts to one profile per kind:
CPU/wall sampling measured by sample count, heap and native memory allocation
sampling measured by allocated bytes, and lock contention measured by blocked
time.

It supports a single metric per profile and multiple profiles per file.

Files use the `.jfr` extension.

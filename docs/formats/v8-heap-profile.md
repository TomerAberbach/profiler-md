# V8 heap profile

The V8 heap profile is a JSON format produced by
[V8's sampling heap profiler](https://v8.dev/docs/profile). Node.js and Chrome
DevTools generate it.

It stores an allocation call tree whose nodes each state the bytes allocated at
that call site, and a sequence of samples referencing those nodes.

Heap profiles sample allocations, unlike heap snapshots, which capture all live
objects at a point in time. That makes them useful for finding allocation
hotspots rather than diagnosing what is live in memory.

It supports a single byte metric per profile and a single profile per file.

Files use the `.heapprofile` extension.

# V8 heap profile

The V8 heap profile is a JSON format written by
[V8's sampling heap profiler](https://v8.dev/docs/profile), which Node.js and
Chrome DevTools run.

It stores an allocation call tree whose nodes each state the bytes allocated at
that call site, and a sequence of samples referencing those nodes.

Its samples are allocations, so it converts to a call stack profile of where the
program allocated rather than what the heap holds.

It supports a single byte metric per profile and a single profile per file.

Files use the `.heapprofile` extension.

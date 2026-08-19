# JSC heap snapshot

The
[JSC heap snapshot](https://webkit.org/blog/6425/memory-debugging-with-web-inspector)
is a JSON format produced by JavaScriptCore, the JavaScript engine of Safari and
WebKit, that captures the full live object graph at a point in time.

A snapshot is a flat integer array of node records (an id, a self size, a class
name, and flags marking VM-internal instances) and a flat integer array of edge
records (the two nodes it connects, a type, and a name), alongside the string
tables the class and edge names index into.

Snapshots show what objects exist in memory, unlike heap profiles, which sample
allocations. That makes them useful for diagnosing memory leaks rather than
allocation hotspots.

Files use the `.json` extension and contain `"type": "Inspector"` and a
`"version"`: `3` in current WebKit and in Bun's `generateHeapSnapshot("jsc")`,
and `2` in the older Safari releases that wrote the previous revision.

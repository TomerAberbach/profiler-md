# JSC heap snapshot

The
[JSC heap snapshot](https://webkit.org/blog/6425/memory-debugging-with-web-inspector)
is a JSON format produced by JavaScriptCore, the engine powering Safari and
WebKit, that captures the full live object graph at a point in time.

Unlike heap profiles, which sample allocations, snapshots show what objects
currently exist in memory. This is useful for diagnosing memory leaks rather
than allocation hotspots.

Files use the `.json` extension and contain `"type": "Inspector"` and a
`"version"` of `2` (Safari/JSC) or `3` (Bun's `generateHeapSnapshot("jsc")`).

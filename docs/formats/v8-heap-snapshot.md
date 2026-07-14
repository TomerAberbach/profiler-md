# V8 heap snapshot

The V8 heap snapshot is a JSON format produced by the V8 JavaScript engine's
heap profiler that captures the full live object graph at a point in time.

Unlike heap profiles, which sample allocations, snapshots show what objects
currently exist in memory. This is useful for diagnosing memory leaks rather
than allocation hotspots.

Files use the `.heapsnapshot` extension.

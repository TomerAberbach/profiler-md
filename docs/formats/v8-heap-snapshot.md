# V8 heap snapshot

The V8 heap snapshot is a JSON format produced by the V8 JavaScript engine's
heap profiler that captures the full live object graph at a point in time.

A snapshot is a `meta` object declaring the layout of the records that follow,
flat integer arrays of node and edge records, a strings table the node and edge
names index into, and a flat array of the source locations of the functions and
objects the nodes stand for.

Snapshots show what objects exist in memory, unlike heap profiles, which sample
allocations. That makes them useful for diagnosing memory leaks rather than
allocation hotspots.

Files use the `.heapsnapshot` extension.

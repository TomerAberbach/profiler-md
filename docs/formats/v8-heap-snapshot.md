# V8 heap snapshot

The V8 heap snapshot is a JSON format written by the V8 JavaScript engine's heap
profiler that captures the full live object graph at a point in time.

A heap snapshot is a `meta` object declaring the layout of the records that
follow, flat integer arrays of node and edge records, a strings table the node
and edge names index into, and a flat array of the source locations of the
functions and objects the nodes stand for.

It converts to a heap snapshot, which shows what the heap holds rather than
where allocation happens.

It supports a single heap snapshot per file.

Files use the `.heapsnapshot` extension.

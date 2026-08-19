# memray

The capture file [memray](https://github.com/bloomberg/memray), Bloomberg's
Python memory profiler, writes for its own reporters to read.

A capture is a binary stream of records describing a program's allocations: the
code objects its functions belong to, each thread's frame pushes and pops, and
every allocation and deallocation with its address, size, and allocator. A
capture written with `--aggregate` states each stack's peak and leaked totals
instead of every allocation. `memray run` compresses either one with LZ4, which
this tool decompresses itself.

A capture contains no totals, so both measures come from replaying the stream:
peak memory from the allocations live at the moment total memory was highest,
and leaked memory from those still live at the end. `memray flamegraph` and
`memray flamegraph --leaks` report those measures. The measures count different
allocations, so a capture converts to a profile each. Because memray records
every allocation, the output states bytes per allocation rather than a sampling
rate.

This tool skips native frames, recorded by `memray run --native`, because
resolving them means symbolizing instruction pointers against the binaries the
traced process ran. A capture recorded with them still converts, showing its
Python frames.

It supports a single byte metric per profile and multiple profiles per file.

Files use the `.bin` extension. This tool reads capture versions 12 and 13,
written by memray 1.19 and 1.20. In version 13 the header ends with the traced
process's module search paths, and the records are encoded as in version 12.

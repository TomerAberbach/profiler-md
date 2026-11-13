# memray

A memray capture is the file that [memray](https://github.com/bloomberg/memray),
Bloomberg's Python memory profiler, writes for its own reporters to read.

A capture is a binary stream of records describing a program's allocations: the
code objects its functions belong to, each thread's frame pushes and pops, and
every allocation and deallocation with its address, size, and allocator. A
capture written with `--aggregate` states each stack's peak and leaked totals
instead of every allocation. `memray run` compresses either one with LZ4, which
this tool decompresses itself.

A capture written without `--aggregate` contains no totals, so both measures
come from replaying the stream: peak memory from the allocations live at the
moment total memory was highest, and leaked memory from those still live at the
end. `memray flamegraph` and `memray flamegraph --leaks` report those measures.
The measures count different allocations, so a capture converts to a profile
each. Because memray records every allocation, the output states its rate as
bytes per allocation rather than per sample.

It supports a single byte metric per profile and multiple profiles per file.

Files use the `.bin` extension. This tool reads capture versions 12 and 13,
written by memray 1.19 and 1.20. In version 13 the header ends with the traced
process's module search paths, and the records are encoded as in version 12.

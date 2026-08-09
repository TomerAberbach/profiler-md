# memray

The capture file [memray](https://github.com/bloomberg/memray), Bloomberg's
Python memory profiler, writes for its own reporters to read.

A capture is a binary stream of records describing a program's allocations: the
code objects its functions belong to, each thread's frame pushes and pops, and
every allocation and deallocation with its address, size, and allocator. It
contains no totals, so both measures come from replaying the stream: peak memory
from the allocations live at the moment total memory was highest, and leaked
memory from those still live at the end. This is what `memray flamegraph` and
`memray flamegraph --leaks` report.

The measures count different allocations, so a capture converts to a profile
each, counting each stack's allocations under that measure. Because memray
records every allocation, the output states bytes per allocation rather than a
sampling rate.

A capture written with `--aggregate` states each stack's peak and leaked totals
instead of every allocation, and converts to the same profile without the
replay. `memray run` compresses either one with LZ4, which this tool
decompresses itself.

Native frames, recorded by `memray run --native`, are skipped: resolving them
means symbolizing instruction pointers against the binaries the traced process
ran. A capture recorded with them still converts, showing its Python frames.

Only capture version 12 is supported, which memray 1.19 and later write.

Files use the `.bin` extension.

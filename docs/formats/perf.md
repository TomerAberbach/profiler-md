# perf.data

The binary file [Linux `perf`](https://perfwiki.github.io/main/) writes: the
on-disk form of the kernel's own `perf_event` records, specified by the kernel's
[`perf.data` file format documentation](https://github.com/torvalds/linux/blob/master/tools/perf/Documentation/perf.data-file-format.txt)
and
[`perf_event.h`](https://github.com/torvalds/linux/blob/master/include/uapi/linux/perf_event.h).
Android's
[simpleperf](https://android.googlesource.com/platform/system/extras/+/refs/heads/main/simpleperf/doc/README.md)
records the same layout, with extra feature sections of its own.

A header names the recorded events and how they were sampled, a data section
holds the records the kernel produced (samples carrying an instruction pointer,
a call chain, a thread, and how many event units the sample stands for, plus the
memory mappings each process made), and feature sections hold the metadata
`perf` collected about the machine.

Each recorded event becomes its own profile, measured in the units its period
counts: nanoseconds for the `cpu-clock` and `task-clock` software events, and
the counted event otherwise (cycles, instructions, page faults).

It supports a single metric per profile and multiple profiles per file.

Files use the `perf.data` name and extension, optionally gzipped as
`perf.data.gz`.

## Addresses instead of function names

A `perf.data` file holds no symbol tables. `perf report` reads the recorded
program and its shared libraries off the machine that recorded them, so a file
alone resolves an address no further than the mapped file it fell in. Every
frame is therefore one address, named by its offset into that file and located
at the file's path, the same form `perf script` prints for a frame it cannot
symbolize. An address in memory a program obtained without a file (an `//anon`
mapping) is located at that name and categorized as JIT code.

Resolve an offset against the same build with `addr2line`:

```sh
addr2line -fCe ./program 0x5f800
```

The offset is file-relative rather than the address the code ran at, so it is
the same across runs of the same build, and a diff of two recordings pairs the
addresses that moved. A kernel frame's offset is from the start of the kernel's
text (`_text`), which the kernel randomizes on every boot, so it too pairs
across boots. Resolve one against the matching `vmlinux` by adding the address
of `_text` from its `System.map`, or from `/proc/kallsyms` on the recording
machine.

For function names in the output, symbolize while converting instead: pipe
`perf script` through FlameGraph's `stackcollapse-perf.pl` and pass the
collapsed stacks, which this tool also reads.

```sh
perf script -i perf.data | stackcollapse-perf.pl > profile.collapsed
```

## Recordings this tool reads

Record with `perf record -g`, which `profiler-md --help c` and
`profiler-md --help zig` cover. This tool reads only the call chains the kernel
walked, so it rejects a file recorded with `--call-graph dwarf`. That option
leaves the chain holding one user-space frame and copies the rest of the stack
into every sample for `perf report` to unwind. This tool also leaves
`--call-graph lbr` branch histories unread. simpleperf's `record -g` unwinds
that copy while recording and writes the frames into the chain, so this tool
reads its files. On arm64, `perf report` adds one caller below the innermost
frame by unwinding the sampled link register, so a stack there can name a caller
this tool leaves out.

It also rejects, with the reason, a file recorded with `perf record -z`
(compressed), streamed to a pipe (`perf record -o -`), or written on a machine
of the opposite byte order.

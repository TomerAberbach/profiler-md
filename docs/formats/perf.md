# perf.data

`perf.data` is the binary file [Linux `perf`](https://perfwiki.github.io/main/)
writes. It is the on-disk form of the kernel's `perf_event` records, specified
by the kernel's
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

Each recorded event converts to its own profile, measured in the units its
period counts: nanoseconds for the `cpu-clock` and `task-clock` software events,
and the counted event otherwise (cycles, instructions, page faults).

It supports a single metric per profile and multiple profiles per file.

Files use the `perf.data` name and extension, optionally gzipped as
`perf.data.gz`.

## Addresses instead of function names

`perf` records no symbol tables for the programs it samples, because
`perf report` reads the recorded program and its shared libraries off the
machine that recorded them. This tool reads no symbol tables, so it resolves an
address no further than the mapped file it fell in. Every frame is one address,
named by its offset into that file and located at the file's path, the same form
`perf script` prints for a frame it cannot symbolize. An address in memory a
program obtained without a file (an `//anon` mapping) is located at that name
and categorized as JIT code.

Resolve an offset against the same build with `addr2line`:

```sh
addr2line -fCe ./program 0x5f800
```

A caller's offset is its return address in a `perf` recording but inside the
call instruction in a simpleperf one, so subtract 1 from a `perf` caller's
offset to resolve the line of the call.

The offset is file-relative rather than the address the code ran at, so it is
the same across runs of the same build, and a diff of two recordings pairs the
addresses that moved. A kernel frame's offset is from the symbol that follows
`[kernel.kallsyms]` in the name of the recording's kernel mapping, `_text` or
`_stext`. `perf script --show-mmap-events` prints that mapping. The kernel
randomizes that symbol's address on every boot, so the offset too pairs across
boots. Resolve one against the matching `vmlinux` by adding the symbol's address
from its `System.map`, or from `/proc/kallsyms` on the recording machine.

For function names in the output, symbolize while converting instead: pipe
`perf script` through FlameGraph's `stackcollapse-perf.pl` and pass the
collapsed stacks, which this tool also reads.

```sh
perf script -i perf.data | stackcollapse-perf.pl > profile.collapsed
```

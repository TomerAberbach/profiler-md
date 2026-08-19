# systing profile export

The line-oriented profile export written by
[systing](https://github.com/josefbacik/systing), a Linux eBPF system profiler,
specified by its
[`docs/PROFILE_EXPORT_FORMAT.md`](https://github.com/josefbacik/systing/blob/main/docs/PROFILE_EXPORT_FORMAT.md).
`systing-util convert trace.duckdb --output profile.systing` writes one from an
existing trace database.

An export opens with a JSON header line describing the recording (sampling event
and period, event-type legend, system info), followed by one JSON array per
record: interned frames, interned leaf-first stacks, and per-thread sample
counts. Frames mix kernel, native user, and Python code, marked by systing's own
labels (`[kernel]`, `[gvisor:*]`, `[jit:*]`). The labels determine
categorization.

A recording samples on-CPU execution and takes a stack each time a thread
sleeps, so it converts to up to three profiles: CPU (measured in time for
`cpu-clock` sampling, cycles for `cpu-cycles`), uninterruptible sleep, and
interruptible sleep (both measured in sleep occurrences). Sleep stacks are taken
at the context switch, so they always end in the kernel's scheduler internals:
self costs fall on scheduler frames, and the total costs show which callers
slept.

It supports a single metric per profile and multiple profiles per file.

Files use the `.systing` extension, optionally gzipped as `.systing.gz`.

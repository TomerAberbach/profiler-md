# systing profile export

The line-oriented profile export written by
[systing](https://github.com/josefbacik/systing), a Linux eBPF system profiler:
a JSON header line describing the recording (sampling event and period,
event-type legend, system info), then one JSON array per record: interned
frames, interned leaf-first stacks, and per-thread sample counts. systing's
[`docs/PROFILE_EXPORT_FORMAT.md`](https://github.com/josefbacik/systing/blob/main/docs/PROFILE_EXPORT_FORMAT.md)
specifies the format.

A recording samples on-CPU execution and takes a stack each time a thread
sleeps, so it converts to up to three profiles: CPU (measured in time for
`cpu-clock` sampling, cycles for `cpu-cycles`), uninterruptible sleep, and
interruptible sleep (both measured in sleep occurrences). Stacks mix kernel,
native user, and Python frames; systing's frame markers (`[kernel]`,
`[gvisor:*]`, `[jit:*]` label modules) determine categorization. Sleep stacks
are taken at the context switch, so they always end in the kernel's scheduler
internals: self costs accumulate on scheduler frames, and the total costs show
which callers slept.

Produce it with `systing --output profile.systing -- <command>`, or from an
existing trace database with
`systing-util convert trace.duckdb --output profile.systing`.

Files use the `.systing` extension, optionally gzipped as `.systing.gz`.

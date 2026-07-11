# systing profile export

The line-oriented profile export written by
[systing](https://github.com/josefbacik/systing), a Linux eBPF system profiler:
a JSON header line describing the recording (sampling event and period,
event-type legend, system info), then one JSON array per record — interned
frames, interned leaf-first stacks, and per-thread sample tallies. The format is
specified in systing's `docs/PROFILE_EXPORT_FORMAT.md`.

A recording samples on-CPU execution and takes a stack each time a thread enters
a sleep state, so it converts to up to three profiles: CPU (measured in time for
`cpu-clock` sampling, cycles for `cpu-cycles`), uninterruptible sleep, and
interruptible sleep (both measured in sleep occurrences). Stacks blend kernel,
native user, and Python frames; systing's frame vocabulary (`[kernel]`,
`[gvisor:*]`, `[jit:*]` label modules) drives categorization. Sleep stacks end
in the kernel's scheduler internals by construction — the stack is taken at the
context switch — so their self costs land on scheduler frames; the total costs
tell the story.

Produce it with `systing --output profile.systing -- <command>`, or from an
existing trace database with
`systing-util convert trace.duckdb --output profile.systing`.

Files use the `.systing` extension, optionally gzipped as `.systing.gz`.

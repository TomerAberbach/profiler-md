# Language docs

- A top-level section is what the profile measures (e.g. `## CPU profiling`,
  `## Memory profiling`), opening with what it records and what it is useful
  for. A tool is never a top-level section: `## perf profiling` states what
  wrote the profile, and `## CPU profiling` what it measured. The test: two
  tools that sample the same thing by different mechanisms (e.g. a kernel
  counter and an interval timer) share a section
- Where a section covers one tool, nest its `### CLI` and `### Programmatic API`
  directly. Where it covers several, give each a `### <tool>` subsection and
  nest `#### CLI` and `#### Programmatic API` under it
- Put a `#### Flags` or `#### Environment variables` table under the `### CLI`
  that uses it. Where the tool has a `### <tool>` subsection instead, move its
  table to a `## <tool> CLI flags` section after the last section that uses the
  tool

# Docs

- Leave out anything that changes neither what the reader does nor how they read
  the output, such as how the package implements a behavior
- Where a profiler setting affects how well a profile converts, name the setting
  to use or avoid and say why, in one sentence
- NEVER state what the tool doesn't support (e.g. a rejected flag, an unread
  record type, a skipped frame). File an issue for it instead. The error or
  warning reports it at runtime, and a doc statement goes stale once the tool
  supports it

## Format docs

- State what the format records, what it converts to, and how to read it. Leave
  out everything else (e.g. how the parser reads a record). Compare the doc's
  length with the other format docs

## Language docs

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

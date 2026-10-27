# Formats

## Project structure

```
formats
├── index.ts              # profileToMd and diffProfiles: buffers the input, then parses or detects, aggregates, and formats
├── record-tally.ts       # Rejects an input with no records and something tallied, and otherwise warns per reason
├── compression.ts        # Strips gzip, LZ4, and brotli through the `#compression` runtime (compression.node.ts or compression.web.ts per bundle)
├── **/<name>/            # One per format, top-level (e.g. collapsed) or nested in a subdirectory (e.g. v8/cpu-profile)
│   ├── matches.ts        # Cheap auto-detection check for the format
│   ├── parse.ts          # Parses input into a modality's parsed type (a parse/ directory when it spans files, e.g. perf/parse/)
│   └── index.ts          # Exports the format's spec
└── testing.ts            # Test-only utilities for running a format spec and reading example inputs
```

## Errors

- A format spec's `parse` throws a `FormatParseError` stating the reason alone,
  and the conversion pipeline prefixes the format's ID. Write `matches` to
  accept anything of the format, including a version or variant the parser
  rejects, so auto-detection reports that reason instead of an undetectable
  input
- Write `matches` to recognize the format's canonical structure (a magic number,
  a header, a well-formed first record), and reject an input whose structure it
  doesn't recognize, even one the parser would convert by skipping malformed
  records. The parser skips a malformed record only in an input already detected
  or specified as the format. A `matches` that looks past malformed records
  detects unrelated inputs as the format, most of all a format without a magic
  number (e.g. collapsed)
- Throw a `FormatParseError` for every violation the parser identifies. The
  pipeline reports any other error from `parse` or a parsed input's lazy
  iterable as `<format>: failed to parse the input`, which the CLI marks as a
  possible parser bug. Any error after `parse` is a bug
- Wrap a third-party decoder's error (e.g. `JSON.parse`) in a `FormatParseError`
  at its call site. The parser cannot check anything before decoding succeeds,
  so a decoding failure is the input's, however the decoder reports it

## Parsing

- Cast untyped profile data to typed data for performance. Add a check to a
  parser only where, without it, the conversion would:
  - Lose its place: read past the end of the input or of the enclosing record,
    loop on a length the remaining bytes can't hold, or read a record by the
    wrong layout because the value that selects the layout (an encoding, a
    variant, an allocator) is unknown. Throw, or call
    `recordTally.endsBefore(...)` where the parser keeps what it read
  - Drop a record, or replace a record or reference with a default, including
    through a lookup that misses (e.g. a sample referencing a missing node, or a
    sample past the end of a parallel array such as `timeDeltas`). Call
    `recordTally.skipped(...)`
  - Throw after `parse` returns: in a lazy iterable, after auto-detection has
    moved on (check that `samples` is an array), or in formatting, which the
    pipeline reports as a bug (check that a sample has a `timeDeltas` entry)
- Where a check fails on one record and the records after it are readable, skip
  that record with `recordTally.skipped(...)` instead of throwing, even when the
  check prevents a crash after `parse` returns. The pipeline already rejects an
  input whose every record was skipped. Throw only when the parser lost its
  place, or when every record depends on the failed value (e.g. a missing
  `tick_interval`, an unsupported heap snapshot type). The test: if the failed
  value belongs to one sample, frame, node, or edge, skip
- NEVER check anything else: a field's type, presence, or range, the order of
  records, or agreement between two fields, when the parser reads the value as
  the input states it. Such an input converts to whatever Markdown its values
  produce. An error the unchecked value throws inside `parse` is already
  reported as unusable input, so NEVER add a check for a nicer message. The
  test: delete the check. If the bad value then throws inside `parse` or shows
  up in the output as the input stated it, the check was validation
- Parse a specified format to its specification, accepting every shape the
  specification allows. Add handling for a shape the specification forbids only
  when an input contains it, and name the origin that writes it in a comment
- Where a parser skips a record the specification forbids (e.g. a sample
  referencing a missing node) or a record of a part of the specification the
  parser doesn't support (e.g. an event type or string encoding outside those it
  reads), or reaches the end of an input cut short, record it on the
  `recordTally` argument of `parse` (`recordTally.skipped(...)`,
  `recordTally.endsBefore(...)`). NEVER record a record the parser reads
- Tally a skip in the loop that already reads the record, either in `parse` or
  in a parsed input's lazy iterable, by calling `recordTally.skipped(...)` at
  the skip. Where a loop skips most of the records it reads (e.g. every record
  of an unsupported type), count them in a local integer and record the total
  once after the loop. NEVER add a pass over the input only to tally it
- NEVER index into a plain object with profile-derived strings (e.g. frame
  names): keys like `toString` or `constructor` resolve to `Object.prototype`
  members. Use a `Map`

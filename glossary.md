# Glossary

This glossary is primarily for our code. For external domain objects (e.g.
parsed representations of format-specific types), defer to their canonical
naming. Prose can also use aliases for explanations that would otherwise be
ambiguous.

| Term                 | Definition                                                                                  | Aliases to avoid       |
| -------------------- | ------------------------------------------------------------------------------------------- | ---------------------- |
| **Input**            | A profiler output passed to the tool; qualified by pipeline stage (raw, parsed, aggregated) | file, fixture, payload |
| **Format**           | A supported input type (e.g. V8 CPU profile)                                                | —                      |
| **Converter**        | A format's registered logic: detection plus parsing of its input to the uniform parsed form | parser, plugin         |
| **Modality**         | A data structure a format captures (e.g. heap snapshot)                                     | shape, kind            |
| **Sampling profile** | The modality produced by sampling a program's call stack at regular intervals               | profile, snapshot      |
| **Heap snapshot**    | The modality produced by capturing the program's state at a single point in time            | snapshot, profile      |
| **Origin**           | The registered profiler tool or runtime that wrote an input (e.g. async-profiler)           | source, emitter, tool  |
| **Language**         | A programming language whose profilers emit a format                                        | runtime                |

## Conversion pipeline

| Term                | Definition                                                                                   | Aliases to avoid    |
| ------------------- | -------------------------------------------------------------------------------------------- | ------------------- |
| **Parse**           | Convert raw input bytes to a parsed input                                                    | decode, deserialize |
| **Detect**          | Infer an input's format or origin when the user doesn't specify one                          | sniff, guess        |
| **Marker entry**    | An entry carrying evidence unique to an origin; the unit of detection                        | signature, evidence |
| **Origin hint**     | Format metadata identifying the writer, set by a parser when entries carry no marker         | —                   |
| **Entry**           | A name + location pair; the unit of filtering and categorization                             | record              |
| **Category**        | A classification of an entity in an input                                                    | type, group         |
| **Fallback origin** | The origin a format resolves to when no specific origin matches any entry                    | default origin      |
| **Normalize**       | An origin's rewrite of a raw stack frame (split packed names, fix lines, drop pseudo-frames) | clean, fix up       |
| **Aggregate**       | Accumulate data from a input into an aggregated form                                         | summarize           |
| **Format**          | Convert an aggregated input to Markdown output                                               | render              |

### Formatting

| Term                | Definition                                                                                     | Aliases to avoid |
| ------------------- | ---------------------------------------------------------------------------------------------- | ---------------- |
| **Synthetic entry** | A profiler-invented entry (e.g. `(root)`, `(garbage collector)`) that exists in no source file | fake, artificial |
| **Measure**         | A quantity a section ranks and tabulates by: a metric, or the sample count when there is none  | metric, value    |
| **Top N**           | The per-ranking display count; a truncation limit, not a synonym for hottest/largest           | —                |

## Code location

| Term               | Definition                                                                             | Aliases to avoid |
| ------------------ | -------------------------------------------------------------------------------------- | ---------------- |
| **Location**       | A URL to the source file defining a function, with an optional 1-based line and column | position, path   |
| **File reference** | An absolute URL or a relative file path, before resolution to a `URL`                  | path             |
| **Source map**     | A mapping from generated-file positions to original source positions                   | —                |

## Sampling profile

| Term               | Definition                                                                              | Aliases to avoid      |
| ------------------ | --------------------------------------------------------------------------------------- | --------------------- |
| **Sample**         | A single observation: a set of metric values plus the call stack active at that instant | observation, event    |
| **Metric**         | A measured dimension with a unit: time, size, or a custom count (e.g. instructions)     | dimension, value type |
| **Value**          | A numeric measurement for one metric, summed across matching samples                    | measurement           |
| **Sampling rate**  | The average metric value per sample, computed as total value ÷ total sample count       | sampling interval     |
| **Self**           | Accumulated only from samples taken directly in a function's body, excluding callees    | exclusive             |
| **Total**          | Accumulated from samples taken anywhere in a function's body or its transitive callees  | inclusive, cumulative |
| **Executing line** | The line a frame was at when sampled, not its function's definition line                | sampled line          |
| **Hottest**        | Describes the most sampled entities in a sampling profile                               | top                   |

### Functions and call stacks

| Term             | Definition                                                                                        | Aliases to avoid        |
| ---------------- | ------------------------------------------------------------------------------------------------- | ----------------------- |
| **Function**     | A unique function, identified by name and location, aggregating all samples that touched it       | node, call frame        |
| **Call stack**   | A unique callee-to-caller sequence of functions, aggregating all samples with that exact sequence | stack                   |
| **Stack frame**  | A function's position within a specific call stack                                                | call frame              |
| **Pseudo-frame** | A profiler-inserted stack entry that is not a function, dropped during normalization              | scaffolding, wrapper    |
| **Caller**       | The function one step closer to the root in a call stack                                          | parent                  |
| **Callee**       | The function one step closer to the leaf in a call stack                                          | child                   |
| **Leaf frame**   | The first frame in a call stack (callee-to-caller order); the function executing at sample time   | top frame, bottom frame |
| **Root frame**   | The last frame in a call stack (callee-to-caller order); the outermost caller                     | top frame, bottom frame |
| **Frame pair**   | An adjacent caller–callee pairing within a call stack; the unit of caller/callee attribution      | edge, call edge         |

## Heap snapshot

| Term              | Definition                                                                                        | Aliases to avoid            |
| ----------------- | ------------------------------------------------------------------------------------------------- | --------------------------- |
| **Node**          | A vertex in a heap snapshot                                                                       | object                      |
| **Edge**          | A directed reference from one node to another                                                     | reference, pointer          |
| **Ordinal**       | A node's dense sequential index, used to address nodes in typed-array structures                  | id, index                   |
| **GC root**       | The synthetic node from which all reachable nodes are retained                                    | root node                   |
| **Dominator**     | A node that lies on every path from the GC root to another node                                   | —                           |
| **Self size**     | Bytes allocated directly for a node, not counting referenced nodes                                | size, shallow size          |
| **Retained size** | Bytes that would be freed if a node and all nodes it exclusively dominates were garbage collected | size, deep size, total size |
| **Retainer path** | The dominator-guided chain of edges from a node back toward the GC root                           | retention path, chain       |
| **Internal node** | A VM bookkeeping node that never points to user code, trimmed from retainer paths                 | hidden node                 |
| **Entity**        | A named aggregated unit of a heap snapshot (e.g. constructor)                                     | entry, object               |
| **Instance**      | One heap object of a constructor; instances sharing a retainer path form an instance group        | object, occurrence          |
| **Retained node** | A node a closure or instance exclusively dominates, ranked by self size in output                 | retained object             |
| **Largest**       | Describes the entities with the highest size in a heap snapshot                                   | top, hottest                |

## Diffing

| Term            | Definition                                                                       | Aliases to avoid    |
| --------------- | -------------------------------------------------------------------------------- | ------------------- |
| **Diff**        | A comparison of two same-modality inputs, pairing entities across sides          | comparison, delta   |
| **Base**        | The side a diff compares from                                                    | before, old, left   |
| **Current**     | The side a diff compares to                                                      | after, new, right   |
| **Entry match** | Normalized name and location overrides an entry's match key is built from        | match normalization |
| **Match key**   | The normalized name + location key that pairs an entry across a diff's two sides | id, entry key       |
| **Regression**  | A diffed entity whose measure worsened from base to current                      | increase            |
| **Improvement** | A diffed entity whose measure improved from base to current                      | progression         |

## Examples and inputs

| Term         | Definition                                                                   | Aliases to avoid |
| ------------ | ---------------------------------------------------------------------------- | ---------------- |
| **Example**  | A committed input in `examples/input/` with its generated Markdown output    | fixture          |
| **Variant**  | An example's role in diff coverage: `base`, `current`, or `diff`             | mode             |
| **Workload** | The runnable program a `scripts/inputs/` script profiles to produce an input | benchmark        |

## Relationships

- A **language** spans multiple **origins**, and an **origin** may emit multiple
  **formats**
- Every tool or runtime that writes inputs is its own **origin**, always;
  origins sharing runtime conventions share helper modules, never a registered
  spec
- An **origin** with no **marker entries** still registers; its inputs resolve
  to the **fallback origin** unless the user specifies the origin
- A **sampling profile** contains many **samples**
- A **sample** has one **call stack** and one **value** per **metric**
- A **call stack** is an ordered list of **frames** and each **frame** is a
  **function**
- A **function**'s **self** **values** come from **samples** where it is the
  leaf **frame** and its **total** **values** include all **samples** where it
  appears anywhere in the **call stack**
- A **sampling profile** with no **metrics** still has one **measure**: its
  sample count
- A **heap snapshot** contains **nodes** connected by **edges**
- A **node**'s **retained size** is computed via the **dominator** graph
- An **entity** aggregates one or more **nodes**; a constructor **entity**'s
  nodes are its **instances**
- A **diff** pairs each **base** entity with a **current** entity by **match
  key**; an unpaired entity is new or removed

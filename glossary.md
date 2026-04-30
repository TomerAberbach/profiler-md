# Glossary

This glossary is primarily for code. It's okay for prose to use aliases for
explanations that would otherwise be ambiguous.

| Term        | Definition                                            | Aliases to avoid |
| ----------- | ----------------------------------------------------- | ---------------- |
| **Format**  | A supported profile file type (e.g. the pprof format) | —                |
| **Profile** | A profiling session's output                          | snapshot         |

## Conversion pipeline

| Term          | Definition                                                | Aliases to avoid    |
| ------------- | --------------------------------------------------------- | ------------------- |
| **Parse**     | Convert raw profile bytes to a typed representation       | decode, deserialize |
| **Aggregate** | Accumulate data from a profile into an aggregated profile | summarize           |
| **Render**    | Convert an aggregated profile to Markdown output          | format              |

### Rendering

| Term         | Definition                                                                        | Aliases to avoid |
| ------------ | --------------------------------------------------------------------------------- | ---------------- |
| **Category** | A classification of an entity in a profile                                        | type, group      |
| **Entry**    | A name + location pair that is the unit of filtering and categorization decisions | record           |
| **Top-N**    | The N entities ranked highest by a given metric value                             | hottest          |

## Sampling

| Term                 | Definition                                                                                                | Aliases to avoid      |
| -------------------- | --------------------------------------------------------------------------------------------------------- | --------------------- |
| **Sampling profile** | A profile produced by sampling a program's call stack at regular intervals                                | profile, snapshot     |
| **Sample**           | A single observation: a set of metric values plus the call stack active at that instant                   | observation, event    |
| **Metric**           | A dimension being measured, expressed as a dimension (time or size) with a unit (e.g. nanoseconds, bytes) | dimension, value type |
| **Value**            | An accumulated numeric measurement for one metric, summed across matching samples                         | measurement           |
| **Sampling rate**    | The average metric value per sample, computed as total value ÷ total sample count                         | sampling interval     |
| **Self**             | Accumulated only from samples taken directly in a function's body, excluding callees                      | exclusive             |
| **Total**            | Accumulated from samples taken anywhere in a function's body or any of its transitive callees             | inclusive, cumulative |

## Snapshotting

| Term                 | Definition                                                                                        | Aliases to avoid            |
| -------------------- | ------------------------------------------------------------------------------------------------- | --------------------------- |
| **Snapshot profile** | A profile produced by capturing the program's state at a single point in time                     | profile, snapshot           |
| **Node**             | A vertex in a heap snapshot profile                                                               | object                      |
| **Edge**             | A directed reference from one node to another                                                     | reference, pointer          |
| **Self size**        | Bytes allocated directly for a node, not counting referenced nodes                                | size                        |
| **Retained size**    | Bytes that would be freed if a node and all nodes it exclusively dominates were garbage collected | size, deep size, total size |
| **Dominator**        | A node that lies on every path from the GC root to another node                                   | —                           |

## Functions and call stacks

| Term           | Definition                                                                                        | Aliases to avoid        |
| -------------- | ------------------------------------------------------------------------------------------------- | ----------------------- |
| **Function**   | A unique function, identified by name and location, aggregating all samples that touched it       | node, call frame        |
| **Call stack** | A unique callee-to-caller sequence of functions, aggregating all samples with that exact sequence | stack                   |
| **Frame**      | A function's slot within a specific call stack                                                    | call frame, stack frame |
| **Caller**     | The function one step closer to the root in a call stack                                          | parent                  |
| **Callee**     | The function one step closer to the leaf in a call stack                                          | child                   |
| **Leaf frame** | The first frame in a call stack (callee-to-caller order); the function executing at sample time   | top frame, bottom frame |
| **Root frame** | The last frame in a call stack (callee-to-caller order); the outermost caller                     | top frame, bottom frame |

## Code location

| Term               | Definition                                                                                            | Aliases to avoid |
| ------------------ | ----------------------------------------------------------------------------------------------------- | ---------------- |
| **Location**       | A URL pointing to a source file where a function is defined, with an optional 1-based line and column | position, path   |
| **File reference** | Either an absolute URL or a relative file path, before resolution to a `URL`                          | path             |
| **Source map**     | A mapping from generated-file positions to original source positions                                  | —                |

## Relationships

- A **sampling profile** is aggregated using the **samples** in a **profile**
- A **sample** has one **value** per **metric** and references a **call stack**
- A **call stack** is an ordered list of **frames**; each **frame** is a
  **function**
- A **function**'s **self** **values** come from **samples** where it is the
  leaf **frame**; its **total** **values** include all **samples** where it
  appears anywhere in the **call stack**
- A **snapshot profile** contains **nodes** connected by **edges**; **retained
  size** is computed via the **dominator** graph

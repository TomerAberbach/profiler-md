# Glossary

This glossary is primarily for our code. For external domain objects (e.g.
parsed representations of format-specific types), defer to their canonical
naming. Prose can also use aliases for explanations that would otherwise be
ambiguous.

| Term         | Definition                                                                 | Aliases to avoid |
| ------------ | -------------------------------------------------------------------------- | ---------------- |
| **Format**   | A supported profile or snapshot file type                                  | —                |
| **Profile**  | A file produced by sampling a program's call stack at regular intervals    | snapshot         |
| **Snapshot** | A file produced by capturing the program's state at a single point in time | profile          |

## Conversion pipeline

| Term          | Definition                                                         | Aliases to avoid    |
| ------------- | ------------------------------------------------------------------ | ------------------- |
| **Parse**     | Convert raw profile or snapshot bytes to a typed representation    | decode, deserialize |
| **Aggregate** | Accumulate data from a profile or snapshot into an aggregated form | summarize           |
| **Format**    | Convert an aggregated profile or snapshot to Markdown output       | render              |

### Formatting

| Term         | Definition                                                                        | Aliases to avoid |
| ------------ | --------------------------------------------------------------------------------- | ---------------- |
| **Category** | A classification of an entity in a profile or snapshot                            | type, group      |
| **Entry**    | A name + location pair that is the unit of filtering and categorization decisions | record           |

## Profile

| Term              | Definition                                                                                                | Aliases to avoid      |
| ----------------- | --------------------------------------------------------------------------------------------------------- | --------------------- |
| **Sample**        | A single observation: a set of metric values plus the call stack active at that instant                   | observation, event    |
| **Metric**        | A dimension being measured, expressed as a dimension (time or size) with a unit (e.g. nanoseconds, bytes) | dimension, value type |
| **Value**         | An accumulated numeric measurement for one metric, summed across matching samples                         | measurement           |
| **Sampling rate** | The average metric value per sample, computed as total value ÷ total sample count                         | sampling interval     |
| **Self**          | Accumulated only from samples taken directly in a function's body, excluding callees                      | exclusive             |
| **Total**         | Accumulated from samples taken anywhere in a function's body or any of its transitive callees             | inclusive, cumulative |
| **Hottest**       | Used to describe the most sampled entities in a profile                                                   | top                   |

## Snapshot

| Term              | Definition                                                                                        | Aliases to avoid            |
| ----------------- | ------------------------------------------------------------------------------------------------- | --------------------------- |
| **Node**          | A vertex in a heap snapshot                                                                       | object                      |
| **Edge**          | A directed reference from one node to another                                                     | reference, pointer          |
| **Self size**     | Bytes allocated directly for a node, not counting referenced nodes                                | size                        |
| **Retained size** | Bytes that would be freed if a node and all nodes it exclusively dominates were garbage collected | size, deep size, total size |
| **Dominator**     | A node that lies on every path from the GC root to another node                                   | —                           |
| **Largest**       | Used to describe the entities with the highest size in a snapshot                                 | top                         |

## Functions and call stacks

| Term            | Definition                                                                                        | Aliases to avoid        |
| --------------- | ------------------------------------------------------------------------------------------------- | ----------------------- |
| **Function**    | A unique function, identified by name and location, aggregating all samples that touched it       | node, call frame        |
| **Call stack**  | A unique callee-to-caller sequence of functions, aggregating all samples with that exact sequence | stack                   |
| **Stack frame** | A function's slot within a specific call stack                                                    | call frame              |
| **Caller**      | The function one step closer to the root in a call stack                                          | parent                  |
| **Callee**      | The function one step closer to the leaf in a call stack                                          | child                   |
| **Leaf frame**  | The first frame in a call stack (callee-to-caller order); the function executing at sample time   | top frame, bottom frame |
| **Root frame**  | The last frame in a call stack (callee-to-caller order); the outermost caller                     | top frame, bottom frame |

## Code location

| Term               | Definition                                                                                            | Aliases to avoid |
| ------------------ | ----------------------------------------------------------------------------------------------------- | ---------------- |
| **Location**       | A URL pointing to a source file where a function is defined, with an optional 1-based line and column | position, path   |
| **File reference** | Either an absolute URL or a relative file path, before resolution to a `URL`                          | path             |
| **Source map**     | A mapping from generated-file positions to original source positions                                  | —                |

## Relationships

- A **profile** contains many **samples**
- A **sample** has one **call stack** and one **value** per **metric**
- A **call stack** is an ordered list of **frames** and each **frame** is a
  **function**
- A **function**'s **self** **values** come from **samples** where it is the
  leaf **frame** and its **total** **values** include all **samples** where it
  appears anywhere in the **call stack**
- A **snapshot** contains **nodes** connected by **edges**
- A **node**'s **retained size** is computed via the **dominator** graph

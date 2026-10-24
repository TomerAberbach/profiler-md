# Glossary

This glossary is primarily for our code. For external domain objects (e.g.
parsed representations of format-specific types), defer to their canonical
naming. Prose can also use aliases for explanations that would otherwise be
ambiguous. User-facing text may use "profile" as the general word for an input
of any modality.

| Term                   | Definition                                                                                   | Aliases to avoid                                   |
| ---------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------- |
| **Input**              | A profiler output passed to the tool; qualified by pipeline stage (raw, parsed, aggregated)  | file, fixture, payload, capture, sub-profile       |
| **Format**             | A supported input type (e.g. V8 CPU profile)                                                 | —                                                  |
| **Specification**      | The published document defining a format (e.g. pprof's `profile.proto`)                      | spec                                               |
| **Spec**               | A format's, origin's, or modality's registered definition, looked up by its ID               | converter, plugin                                  |
| **Modality**           | A data structure a format captures (e.g. heap snapshot)                                      | shape, kind                                        |
| **Call stack profile** | The modality whose records each carry a whole call stack, however the profiler produced them | sampling profile (as the modality's name), profile |
| **Call graph**         | The modality produced by recording per-function costs and caller→callee arcs                 | profile                                            |
| **Heap snapshot**      | The modality produced by capturing the program's state at a single point in time             | snapshot, profile                                  |
| **Trace**              | The modality whose records are timed events and gauge readings, in the order they happened   | timeline, log, profile                             |
| **Origin**             | The registered profiler tool or runtime that wrote an input (e.g. async-profiler)            | source, emitter, tool, producer, recorder          |
| **Canonical origin**   | The origin whose definition of a format the format's other origins write to match            | reference origin                                   |
| **Markerless origin**  | An origin whose inputs contain no marker entry                                               | unmarked origin                                    |
| **Language**           | A programming language whose profilers emit a format                                         | runtime                                            |
| **Language alias**     | A language ID (e.g. `cpp`, `kotlin`) that resolves to a primary language's formats and docs  | sub-language                                       |

## Conversion pipeline

| Term                | Definition                                                                                                               | Aliases to avoid              |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------ | ----------------------------- |
| **Decode**          | Convert raw bytes to a generic value (JSON, protobuf) or strip their compression before a parser reads them              | —                             |
| **Parse**           | Convert raw input bytes to a parsed input                                                                                | deserialize                   |
| **Record**          | A unit of a format's input a parser reads (e.g. a V8 CPU profile sample, a collapsed line)                               | row, item                     |
| **Record tally**    | A parse's count of the records it skipped and of what is missing from the end of its input                               | skip count                    |
| **Rejection**       | A format's failure to parse an input it was specified for or recognized during detection                                 | refusal                       |
| **Placeholder**     | A value a profiler writes in a frame field to mean the information is unknown                                            | sentinel, dummy               |
| **Detect**          | Infer an input's format or origin when the user doesn't specify one                                                      | sniff, guess                  |
| **Marker entry**    | An entry carrying evidence unique to an origin; the unit of detection                                                    | signature, signal             |
| **Origin hint**     | Format metadata identifying the writer, set by a parser when entries carry no marker                                     | —                             |
| **Origin evidence** | What detection resolved an input's origin by: a specified origin, a marker entry, an origin hint, or the fallback origin | forced origin (for specified) |
| **Entry**           | A name + location pair; the unit of filtering                                                                            | —                             |
| **Category**        | A classification of an entity in an input, drawn from a closed set per entity type                                       | type, group                   |
| **Fallback origin** | The origin a format resolves to when no specific origin matches any entry                                                | default origin                |
| **Normalize**       | An origin's rewrite of a raw stack frame (split packed names, move misfiled positions, drop pseudo-frames)               | clean, fix up                 |
| **Aggregate**       | Combine data from an input into an aggregated form                                                                       | accumulate, summarize         |
| **Format (verb)**   | Convert an aggregated input to Markdown output                                                                           | render, rendering             |

### Formatting

| Term                    | Definition                                                                                                      | Aliases to avoid                    |
| ----------------------- | --------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| **Entity**              | A named aggregated unit a ranking shows: a function, a heap snapshot constructor or string, or an event         | aggregated node                     |
| **Instance**            | One of the individual things an entity aggregates: a node of a constructor or function, or one span of an event | object, occurrence                  |
| **Ranking**             | A list of entities ordered by one measure, shown as tables truncated to the top N                               | leaderboard                         |
| **Profile section**     | The Markdown section, under one H1 heading, for one parsed input                                                | —                                   |
| **Entity section**      | A heading over a ranking's rows, naming them with the ranking's direction                                       | —                                   |
| **Partition**           | A heading over a subset of a ranking's rows (e.g. a category subsection, `Regressions`)                         | —                                   |
| **Breakdown**           | A table under an entity's heading that splits its value by lines, callers, callees, or retainer paths           | —                                   |
| **Synthetic entry**     | A profiler-invented entry (e.g. `(root)`, `(garbage collector)`) that exists in no source file                  | fake, artificial, sentinel function |
| **Measure**             | A quantity a section ranks and tabulates by: a metric, or the count when there is none                          | metric, value                       |
| **Top N**               | The per-ranking display count; a truncation limit, not a synonym for hottest/largest                            | top entry count                     |
| **Category share**      | A category's part of the summed self values of the entries a ranking shows                                      | coverage, weight                    |
| **Category subsection** | A ranking of one category's own entries, repeating its ranking within that category                             | category section                    |

## Code location

| Term                            | Definition                                                                                                 | Aliases to avoid               |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------- | ------------------------------ |
| **Location**                    | A source reference identifying a function, with an optional 1-based line and column                        | position, path                 |
| **Source reference**            | A file reference or a logical reference                                                                    | path, source                   |
| **Unresolved source reference** | A source reference as the parser records it, before resolution                                             | —                              |
| **Position**                    | A 1-based line and optional column within a referenced source                                              | —                              |
| **Definition position**         | The position where a function is defined; part of its identity                                             | start line                     |
| **Executing position**          | The position a frame was at when recorded, never part of identity; its line is the executing line          | sampled line, sampled position |
| **Call site**                   | The position in the caller where a function was called; part of its identity only under a call-site origin | invocation site                |
| **File reference**              | An absolute URL or a relative file path                                                                    | path                           |
| **Logical reference**           | A named class, module, namespace, assembly, or library                                                     | path, file, logical source     |
| **Name location**               | The file reference a URL-shaped entity or retainer name parses as, shown in place of the name              | name URL                       |
| **Base URL**                    | The URL or directory relative to which the Markdown shows file references                                  | root, cwd                      |
| **Source map**                  | A mapping from generated-file positions to original source positions                                       | —                              |

## Costs and functions

| Term                      | Definition                                                                                                | Aliases to avoid                 |
| ------------------------- | --------------------------------------------------------------------------------------------------------- | -------------------------------- |
| **Metric**                | A measured dimension with a unit: time, size, or a count (e.g. instructions)                              | dimension, value type, measures  |
| **Improvement direction** | Which direction of change in a metric's value is an improvement: a decrease, an increase, or unknown      | polarity, goodness               |
| **Value**                 | A numeric measurement for one metric, summed across the observations or costs it aggregates               | measurement, weight              |
| **Self**                  | Aggregated from a function's body, excluding its callees                                                  | exclusive, direction             |
| **Total**                 | Aggregated from a function's body and its transitive callees                                              | inclusive, cumulative, direction |
| **Function**              | A unique function, identified by name and location, aggregating every observation or cost recorded for it | node, call frame, function node  |
| **Caller**                | A function that calls another                                                                             | parent                           |
| **Callee**                | A function another calls                                                                                  | child                            |
| **Neighbor**              | A function's caller or callee, measured over the frame pairs or arcs it shares with that function         | adjacent function, relative      |
| **Hottest**               | Describes the entities with the highest measure in a call stack profile or call graph                     | top                              |

## Call stack profile

| Term                      | Definition                                                                                          | Aliases to avoid                                         |
| ------------------------- | --------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| **Observation**           | A call stack, a value per metric, and how many occurrences it stands for                            | sample, event, record                                    |
| **Stackless observation** | An observation with an empty call stack, attributed to one shared anonymous function                | —                                                        |
| **Count metric**          | What one unit of a profile's count measures: a sample, an entry, an allocated object, a microsecond | unit, count unit                                         |
| **Rate**                  | The average metric value per counted unit, computed as total value ÷ total count                    | sampling rate, sampling interval (for the computed rate) |

### Call stacks

| Term                  | Definition                                                                                                               | Aliases to avoid             |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------ | ---------------------------- |
| **Call stack**        | A unique callee-to-caller sequence of functions, aggregating all observations with that exact sequence                   | stack                        |
| **Call tree**         | A format's tree of nodes in which each node stands for the call stack from the root to it                                | —                            |
| **Frame record**      | A parser's record of one function reference, its name and positions, which observations and functions reference by index | frame universe               |
| **Stack frame**       | A function's position within a specific call stack                                                                       | call frame                   |
| **Pseudo-frame**      | A profiler-inserted stack entry that is not a function, dropped during normalization                                     | scaffolding, wrapper         |
| **Hidden frame**      | A stack frame whose function the entry filter hides, shown as `…` between shown frames                                   | elided frame                 |
| **Common call stack** | The longest run of root-side callers shared by every complete call stack a ranking shows, printed once above its table   | shared suffix, common prefix |
| **Leaf frame**        | The first frame in a call stack (callee-to-caller order); the function executing when it was recorded                    | top frame, bottom frame      |
| **Root frame**        | The last frame in a call stack (callee-to-caller order); the outermost caller                                            | top frame, bottom frame      |
| **Frame pair**        | An adjacent caller–callee pairing within a call stack; the unit of caller/callee attribution                             | edge, call edge              |

## Call graph

| Term                     | Definition                                                                         | Aliases to avoid |
| ------------------------ | ---------------------------------------------------------------------------------- | ---------------- |
| **Arc**                  | A directed caller→callee record of the calls' count and total cost                 | edge, call       |
| **Call count**           | The number of calls an arc records, or 0 when the format records none              | —                |
| **Recursion cycle**      | A strongly connected component of the parsed call graph                            | —                |
| **Runtime-inserted arc** | An arc an origin marks as coming from the runtime rather than the profiled program | —                |

## Heap snapshot

| Term                    | Definition                                                                                                                                          | Aliases to avoid                        |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------- |
| **Node**                | A vertex in a heap snapshot                                                                                                                         | object                                  |
| **Edge**                | A directed link from one node to another                                                                                                            | reference, pointer                      |
| **Any-element edge**    | A retainer path edge, formatted `[]`, standing for any element of an array                                                                          | wildcard element                        |
| **Ordinal**             | A node's dense sequential index, used to address nodes in typed-array structures                                                                    | id, index                               |
| **Declared type**       | A type name a format records for a node, which the origin maps to a category                                                                        | raw type, type name                     |
| **GC root**             | The synthetic node from which all reachable nodes are retained                                                                                      | root node, root                         |
| **Dominator**           | A node that lies on every path from the GC root to another node                                                                                     | —                                       |
| **Self size**           | Bytes allocated directly for a node, not counting referenced nodes                                                                                  | size, shallow size                      |
| **Retained size**       | Bytes that would be freed if a node and all nodes it exclusively dominates were garbage collected                                                   | size, deep size, total size (of a node) |
| **Held size**           | The summed self size of every node in a heap snapshot                                                                                               | total size                              |
| **Retainer path**       | The dominator-guided chain of steps from a node back toward the GC root, or toward one of its dominators                                            | retention path, chain                   |
| **Retainer hop**        | A node's immediate dominator and the dominator's edge to it, before internal nodes are trimmed                                                      | link, parent                            |
| **Retainer**            | The node at the other end of a retainer path step's edge, one hop toward the GC root                                                                | —                                       |
| **Several retainers**   | A retainer path step whose retainer holds no edge to the node, which it retains through the node's several retainers, formatted `←(several paths)–` | indirect retention                      |
| **Internal node**       | A VM bookkeeping node that never points to user code, trimmed from retainer paths                                                                   | hidden node                             |
| **Outermost instance**  | An instance that no other instance of the same set dominates                                                                                        | root instance, top instance             |
| **Instance group**      | A constructor's instances that share a retainer path                                                                                                | —                                       |
| **Retained node**       | A node an instance exclusively dominates                                                                                                            | retained object                         |
| **Retained node group** | A function's retained nodes that share a name, a category, a location, and a retainer path within the instance retaining them                       | —                                       |
| **Retainer group**      | One side's nodes of an entity that share a retainer path, summed into one diff row                                                                  | —                                       |
| **Largest**             | Describes the entities with the highest size in a heap snapshot                                                                                     | top, hottest                            |

## Trace

| Term                  | Definition                                                                                                  | Aliases to avoid                |
| --------------------- | ----------------------------------------------------------------------------------------------------------- | ------------------------------- |
| **Event**             | A span or an instant. As an entity, every span or every instant sharing a name                              | record, entry                   |
| **Span**              | A named event with a duration                                                                               | slice, interval, duration event |
| **Async span**        | A span of an operation that runs across threads and overlaps others, timed by the time that elapsed         | async event                     |
| **Instant**           | A named event at a moment, with no duration                                                                 | mark, point event               |
| **Gauge**             | A named quantity whose level the input records over time                                                    | counter, series                 |
| **Reading**           | One recorded value of a gauge                                                                               | sample, point                   |
| **Argument**          | A key and a value a format records on an event, before the origin turns it into an attribute or a reading   | arg, parameter                  |
| **Parent**            | The span another span is nested directly in                                                                 | caller, enclosing span          |
| **Child**             | A span nested directly in another                                                                           | callee, nested span             |
| **Attribute**         | A key and a value on an event: a string, or an amount                                                       | tag, label                      |
| **Amount**            | A numeric attribute value stating how much of something an event consumed or produced, summed across events | —                               |
| **Declared category** | A category name a format records for an event, which the origin maps to a category                          | raw category                    |
| **Thread**            | The thread an event was recorded on, named with its process where a trace records several processes         | track, lane                     |
| **Elapsed time**      | The time from an async span's start to its end                                                              | wall time                       |
| **CPU time**          | The time a thread spent executing during a span, where the input records it                                 | thread time                     |
| **Untimed**           | Describes a span with no duration or a reading with no time, which counts but adds to no time measure       | unended, open                   |
| **Most frequent**     | Describes the instants with the highest count in a trace                                                    | top, hottest                    |
| **Longest**           | Describes the spans with the highest time in a trace                                                        | top, hottest                    |

## Diffing

| Term            | Definition                                                                                                                 | Aliases to avoid                 |
| --------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------- |
| **Diff**        | A comparison of two same-modality inputs, pairing entities across sides                                                    | comparison, delta (for the diff) |
| **Side**        | The base or the current half of a diff, or the workload run that produces it                                               | role                             |
| **Base**        | The side a diff compares from                                                                                              | before, old, left                |
| **Current**     | The side a diff compares to                                                                                                | after, new, right                |
| **Entry match** | The name and location overrides an entry's match key is built from, with identifiers that differ per run or build stripped | match normalization              |
| **Match key**   | The key, built from an entry's entry match, that pairs the entry across a diff's sides                                     | id, entry key, normalized key    |
| **Own key**     | The key built from an entry's own name and location, ignoring its entry match                                              | raw key                          |
| **Anchor**      | An entry that is the only one with its match key on each side, whose offset pairs its file's unpaired entries              | —                                |
| **Offset**      | A paired position's current position minus its base position                                                               | displacement, shift              |
| **Delta**       | A diffed entity's current value minus its base value                                                                       | difference                       |
| **Change**      | A diffed entity's delta relative to its base value, or `new` or `removed` for an unpaired entity                           | —                                |
| **Regression**  | A diffed entity whose measure moved against its metric's improvement direction                                             | increase                         |
| **Improvement** | A diffed entity whose measure moved along its metric's improvement direction                                               | progression                      |

## CLI

| Term          | Definition                                                                                             | Aliases to avoid |
| ------------- | ------------------------------------------------------------------------------------------------------ | ---------------- |
| **Flag rule** | A regex or `REGEX=VALUE` value of a repeatable CLI flag, which the CLI compiles into a function option | rule             |

## Examples and inputs

| Term              | Definition                                                                                                                                 | Aliases to avoid    |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------- |
| **Example**       | The committed inputs in `examples/input/` that share a language, origin, and configuration, one per variant, with their generated Markdown | fixture             |
| **Variant**       | An example input's side, `base` or `current`, or the `diff` of the two                                                                     | mode, role          |
| **Configuration** | The optional example filename part naming the profiler settings an input was recorded with (e.g. `cpu`, `alloc`)                           | config, mode, setup |
| **Example pair**  | A committed base example input and current example input whose filenames differ only in their variant                                      | diff pair           |
| **Workload**      | The runnable program a `scripts/inputs/` script profiles to produce an input                                                               | benchmark           |
| **Capture**       | One profiler run over a workload that writes one input                                                                                     | recording           |

## Diff matching evaluation

| Term                 | Definition                                                                                                              | Aliases to avoid      |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------- | --------------------- |
| **Ground truth**     | The known counterpart of each base entity, against which the evaluation scores a diff's pairing                         | expected pairing      |
| **Counterpart**      | The current entity the ground truth records as a base entity's pair                                                     | expected entity       |
| **Same code**        | Ground truth for an example pair whose workload runs one version on both sides                                          | —                     |
| **Version change**   | Ground truth for an example pair whose workload runs consecutive releases of an upgraded project                        | upgrade               |
| **Synthetic edit**   | A seeded edit to one source reference of the current side that moves its positions to known places                      | random edit, mutation |
| **Upgraded project** | A project whose version a workload script pins per side                                                                 | —                     |
| **Version pin**      | A workload script's per-side version of an upgraded project                                                             | pin variable          |
| **File diff**        | A source file's line diff, or a minified file's character diff, between an upgraded project's base and current versions | diff                  |
| **Position map**     | A function from a base position to its current position, or to nothing when the position was deleted or is unknown      | —                     |

## Relationships

- A **language** spans one or more **origins**, and an **origin** emits one or
  more **formats**
- Every tool or runtime that writes **inputs** is its own **origin**, always;
  **origins** sharing runtime conventions share helper modules, never a
  registered **spec**
- A **format** follows exactly one **specification** and registers exactly one
  **spec**
- A **format**'s **fallback origin** is its **canonical origin**, or `unknown`
  when it has none
- A **markerless origin** still registers. Its **inputs** resolve to the
  **fallback origin** unless an **origin hint** identifies it or the user
  specifies it
- **Origin evidence** is exactly one of a specified **origin**, one or more
  **marker entries**, an **origin hint**, or the **fallback origin**
- A raw **input** is **decoded**, then **parsed** to one or more parsed
  **inputs**, each **formatted** as its own **profile section**
- A **parse** has exactly one **record tally**. The pipeline rejects an
  **input** with no **records** and something tallied, and otherwise warns per
  reason
- **Detection** collects one **rejection** per **format** that recognized the
  **input** but failed to **parse** it
- A **call stack profile** contains zero or more **observations**
- An **observation** has exactly one **call stack** and one **value** per
  **metric**
- A **call stack** is an ordered list of **frames** and each **frame** is a
  **function**
- A parsed **input**'s **observations** or **functions** reference **frame
  records** by index. A parser flattens a **call tree** into **call stacks**
- **Call stacks** that differ only in **hidden frames** merge into one row
- A **call stack profile** and a **call graph** aggregate **functions** with
  **self** and **total** **values** per **metric**, deriving them from
  **observations** in one and from recorded costs in the other
- A **call stack profile** with no **metrics** still has one **measure**: its
  count, measured by its **count metric**
- A **call stack profile** whose **count metric** measures a quantity formats
  its counts as that quantity and states no **rate**, because a quantity has no
  unit to state a **rate** per
- A **call graph** contains **functions** connected by **arcs**. It has at least
  one **metric** because it counts nothing to fall back on
- **Totals** exclude **arcs** inside a **recursion cycle**, and cycle detection
  ignores **runtime-inserted arcs**
- A **heap snapshot** contains **nodes** connected by **edges**
- A **node**'s **retained size** is computed via the **dominator** graph
- A **heap snapshot** **node**'s or **retainer**'s **entry** `id` is its
  **ordinal**
- A **retainer path** keeps one step per **retainer hop**, except trailing hops
  through **internal nodes**
- A heap snapshot **entity** aggregates one or more **nodes**. A constructor or
  function **entity**'s **nodes** are its **instances**, and a string **entity**
  is exactly one **node**
- An **entity**'s **retained size** and **retained nodes** come from its
  **outermost instances** only
- A **ranking** shows **entities** under an **entity section**, split into
  **partitions**, with **breakdowns** under each **entity**
- A **diff** merges each **side**'s **entities** that share a **match key**,
  then pairs each **base** **entity** with at most one **current** **entity**,
  first by **own key** and then by **match key**. An unpaired **entity** is new
  or removed
- A **retainer group** is an **instance group** or a **retained node group**
- A **diff** pairs an **entity**'s **retainer groups** across its **sides** by
  **retainer path**, and pairs **retained node groups** by their **nodes**'
  **match key** too
- A diffed **entity** reports exactly one **delta** and one **change** per
  **measure**
- A **metric** states its **improvement direction**, by which a **diff** ranks
  its **regressions** and **improvements**. A **diff** of a **metric** whose
  direction is unknown ranks increases and decreases instead
- A **trace** contains **events** and **readings**. An **event** is exactly one
  of a **span** or an **instant**
- A **span** is nested in at most one other **span**, its **parent**, only where
  the input states the nesting or its **format**'s **spans** nest by
  construction within one **thread**
- A **span**'s **self** time is its time less that of its **children**, and its
  **total** time is its own. An **async span** has **elapsed time** and neither
- **Spans** sharing a name are one **entity**, as are **instants** sharing a
  name. An **async span** and a **span** on a **thread** sharing a name are two
- A span **entity**'s **spans** are its **instances**, each with its own start
  and time
- A **gauge** has one or more **readings**, and **readings** sharing a name are
  one **gauge**
- An **argument** becomes at most one of an **attribute** or a **reading**. An
  **argument** left holding a string becomes an **attribute**
- An **attribute**'s value is a string or an **amount**. A level is a
  **gauge**'s **reading**, because levels do not sum
- A **diff** pairs **events** by **match key**, **attribute** values by key and
  value, **threads** by name, and **gauges** by name
- An **example** has exactly one **language**, one **origin**, and an optional
  **configuration**. An **example pair** produces exactly one `diff` **variant**
- Each committed **input** comes from exactly one **capture** of a **workload**
- **Ground truth** is one of **same code**, **version change**, or **synthetic
  edits**, and contains a **position map** per **example pair**

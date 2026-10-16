# Origins

## Project structure

```
origins
├── <runtime>.ts          # A runtime's, toolchain's, or OS's conventions shared across origins (e.g. jvm.ts, linux.ts)
├── native.ts             # Match rules every native profiler applies, from each compiled language's conventions
├── specs/
│   ├── <name>.ts         # One file per origin (e.g. node, node-pprof, jdk)
│   └── index.ts          # Exports originSpecs in detection-priority order
└── index.ts              # Origin registry and derived detector
```

## Matching

- Where a profiler writes an identifier that differs per run into an entry's
  name or location (a runtime address, a random ID), strip it in the origin's
  `matchEntry`, built with `matchEntryFromRules`. Keep the part that identifies
  the entity (`Foo$$Lambda` of `Foo$$Lambda.0x00000070011868b8`). Verify the
  identifier differs per run from the profiler's source or an example pair,
  never from its shape alone
- Strip an identifier that differs per build (a Nix store hash) only where the
  rest of the name or path identifies the entity across builds
- Keep a number the compiler assigns to distinct functions (`func1`, `dgm$598`)
  and an unsymbolized address, because stripping either gives distinct functions
  one match key
- Record in the rule's doc comment which entities share a match key once it
  strips the identifier. The diff pairs them in order
- Drop a pseudo-frame (`[tid=16387]`) in `normalizeStackFrame`, never by
  matching it
- `src/origins/index.test.ts` fails when an unpaired base key and an unpaired
  current key differ only by an address or a hex ID. It cannot tell a decimal ID
  from a compiler's numbering, so read a new input's unpaired rows for one

## Categorizing

- `FunctionCategory` is a closed set. Add a category only when the distinction
  it names exists across languages and its name states what it means without
  knowing which profiler wrote the input. One naming a stack position
  (`below main`) or an engine (`v8 api`) fails both
- Categorize from what the profiler states, never from what it omits. `stdlib`
  requires positive evidence that the code is the language's or runtime's own
  library: a path, module specifier, namespace, or package prefix. A frame the
  profiler attributed to no source file is `native`, and one it could not
  identify is `unknown`, so keep that distinction wherever a profiler draws it
- `compiler` is the runtime producing executable code, and `jit` a frame
  executing code the runtime generated. A named activity takes precedence over
  `jit`, so a garbage collection write barrier compiled inline is
  `garbage-collector`
- Match on a name alone only behind a guard that excludes the profiled program's
  own code, and state it: a JavaScript engine locates every function the program
  defines, so a missing location is that guard
- Write a rule only for a shape a committed input contains. Measure one matching
  a long tail of symbols, and record what it matches and misses in its doc
  comment (e.g. `HOTSPOT_COMPILER` in `src/origins/jvm.ts`)
- `src/origins/categorize.test.ts` contains the cross-origin invariants, and
  `src/categories.test.ts` requires an example to emit every category, or a
  listed reason why nothing reaches it

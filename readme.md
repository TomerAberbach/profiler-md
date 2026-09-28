<div align="center">
  <img src="assets/logo.svg" alt="Markdown flame logo" width="250" />
</div>

<h1 align="center">
  profiler-md
</h1>

<div align="center">
  <a href="https://npmjs.org/package/profiler-md">
    <img src="https://badgen.net/npm/v/profiler-md" alt="version" />
  </a>
  <a href="https://github.com/TomerAberbach/profiler-md/actions/workflows/ci.yml">
    <img src="https://github.com/TomerAberbach/profiler-md/actions/workflows/ci.yml/badge.svg?branch=main" alt="CI" />
  </a>
  <a href="https://github.com/sponsors/TomerAberbach">
    <img src="https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&color=%23fe8e86" alt="Sponsor" />
  </a>
</div>

<div align="center">
  Converts performance profiles to human and LLM friendly Markdown.
</div>

<div align="center">
  <a href="#demo">Demo</a> •
  <a href="#features">Features</a> •
  <a href="#install">Install</a> •
  <a href="#usage">Usage</a> •
  <a href="#skill">Skill</a> •
  <a href="#languages-and-formats">Languages and formats</a>
</div>

> [!NOTE]
>
> This package is in **beta** and I'm excited for you to try it! Share
> suggestions, bug reports, and feature requests by
> [filing an issue](https://github.com/TomerAberbach/profiler-md/issues/new).

## Demo

<div align="center">
  <img src="assets/demo.gif" alt="Converting and diffing CPU profiles in the terminal" />
</div>

<!-- prettier-ignore-start -->

<!-- EXAMPLE_OUTPUT START -->

```md
# CPU profile

Took 2.52s over 2,680 samples (943.9µs per sample).

| Category           |     % |    Time | Samples |
| ------------------ | ----: | ------: | ------: |
| Third-party        | 88.3% |   2.23s |   2,443 |
| Garbage collector  |  7.1% | 179.5ms |     148 |
| Standard library   |  3.9% |  98.8ms |      72 |
| Native             |  0.6% |  15.0ms |      15 |
| Ours               | <0.1% |   1.3ms |       1 |
| Regular expression | <0.1% |   1.3ms |       1 |

## Hottest functions

### Self time

Functions ranked by time spent directly in the function body, excluding callees.

|    % |    Time | Samples | Function                        | Location                                             |
| ---: | ------: | ------: | ------------------------------- | ---------------------------------------------------- |
| 7.1% | 179.5ms |     148 | `(garbage collector)`           | `<unknown>`                                          |
| 2.8% |  71.5ms |      72 | `isRelatedTo`                   | `node_modules/typescript/lib/typescript.js:63813:27` |
| 2.7% |  69.2ms |      55 | `wrapSafe`                      | `node:internal/modules/cjs/loader:1671:18`           |
| 2.7% |  68.8ms |      64 | `recursiveTypeRelatedTo`        | `node_modules/typescript/lib/typescript.js:64383:38` |
| 1.7% |  43.5ms |      45 | `instantiateTypeWorker`         | `node_modules/typescript/lib/typescript.js:62354:35` |
…
```

<!-- EXAMPLE_OUTPUT END -->

<!-- prettier-ignore-end -->

The output continues with the hottest functions by total time, the hottest call
stacks, and per-line, caller, and callee detail. See the
[full output](examples/output/javascript.node.base.cpuprofile.md), or
[`examples/output/`](examples/output) for heap snapshots and diffs.

## Features

- **Polyglot:**
  [profile, call graph, and heap snapshot formats](#languages-and-formats)
  across many languages
- **Profile analysis:** sampling rates, category breakdowns, and the hottest
  functions, call stacks, lines, callers, and callees
- **Heap analysis:** self and
  [dominator](<https://en.wikipedia.org/wiki/Dominator_(graph_theory)>)-based
  retained sizes, retainer paths, and the largest constructors and strings
- **Multi-profile inputs:** one `all` JFR recording becomes CPU, allocation, and
  lock contention profiles
- **Diffing:** ranked regressions and improvements between two profiles or two
  heap snapshots, across formats and profilers
- **Source maps:** resolves minified and transpiled locations back to original
  sources
- **Zero config:** auto-detects the format and profiler
- **Configurable:** top entry counts, base URLs, categorization, filtering, and
  diff matching
- **CLI and API:** a command line and a fully-typed API with sync and async
  variants ([API docs](docs/api.md))
- **Self-documenting:** `--help <language>` and `--help <format>` explain how to
  generate and read each profile type
- **Agent-ready:** ships a [skill](#skill) that guides an agent through
  profiling and optimizing your code

## Install

```sh
# npm
$ npm i -g profiler-md

# Homebrew
$ brew install tomeraberbach/tap/profiler-md
```

<details>
<summary>Shell completions (optional)</summary>

```sh
# Bash (Linux)
$ profiler-md --completion bash > ~/.local/share/bash-completion/completions/profiler-md

# Bash (macOS/Homebrew)
$ profiler-md --completion bash > $(brew --prefix)/etc/bash_completion.d/profiler-md

# Fish
$ profiler-md --completion fish > ~/.config/fish/completions/profiler-md.fish

# Zsh
$ profiler-md --completion zsh > ~/.zfunc/_profiler-md

# PowerShell
$ profiler-md --completion pwsh >> $PROFILE.CurrentUserCurrentHost
```

</details>

## Usage

### CLI

<!-- CLI_EXAMPLES START -->

```sh
# Convert a profile, paged and syntax highlighted
$ profiler-md profile.cpuprofile

# Diff two profiles or two heap snapshots
$ profiler-md base.cpuprofile current.cpuprofile

# Write the Markdown to a file
$ profiler-md profile.pb.gz -o profile.md

# Read a profile from stdin
$ node --cpu-prof app.js && cat *.cpuprofile | profiler-md

# Show how to profile a language
$ profiler-md --help python
```

<!-- CLI_EXAMPLES END -->

<details>
<summary>All flags</summary>

<!-- prettier-ignore-start -->

<!-- CLI_HELP START -->

```sh
$ profiler-md --help
Converts performance profiles to human and LLM friendly Markdown.

Usage: profiler-md [OPTIONS] [FILE]
       profiler-md [OPTIONS] BASE CURRENT
       profiler-md --help [TOPIC]

Examples:
  # Convert a profile, paged and syntax highlighted
  $ profiler-md profile.cpuprofile

  # Diff two profiles or two heap snapshots
  $ profiler-md base.cpuprofile current.cpuprofile

  # Write the Markdown to a file
  $ profiler-md profile.pb.gz -o profile.md

  # Read a profile from stdin
  $ node --cpu-prof app.js && cat *.cpuprofile | profiler-md

  # Show how to profile a language
  $ profiler-md --help python

  FILE                                Profile to convert (default: stdin)
  BASE                                Base profile to diff
  CURRENT                             Current profile to diff against the base

Output:
  -o, --output FILE                   Output file (default: - for stdout)
  --log-level LEVEL                   Verbosity of diagnostics printed to 
                                      stderr, overriding $PROFILER_MD_LOG
                                       (default: warn)
  --no-pager                          Disable stdout paging (default: auto)
  --color, --no-color                 Enable or disable ANSI syntax 
                                      highlighting (default: auto)

Input:
  -f, --format FORMAT                 Input profile format (default: auto)
  -r, --origin ORIGIN                 Input profile origin (default: auto)
  --source-maps GLOB                  Source maps (JSON or inline) to apply to 
                                      locations (repeatable)
  --base-url STRING                   Base URL or path to show paths relative 
                                      to, or auto for their common ancestor 
                                      (default: cwd)

Ranking:
  --top-n N                           Entries to show per ranking, including 
                                      category subsections (default: 20)
  --min-category-share FRACTION       Share of a profile a category needs for 
                                      its own subsection, from 0 to 1 (default: 
                                      0.01)

Filtering:
  --category REGEX=CATEGORY           Categorize functions whose name or 
                                      location matches REGEX as CATEGORY, first 
                                      rule winning (repeatable)
  --hide REGEX                        Hide entries whose name or location 
                                      matches REGEX, still counting hidden 
                                      entries in totals (repeatable)
  --show REGEX                        Show only entries whose name or location 
                                      matches REGEX, still counting hidden 
                                      entries in totals (repeatable)
  --hide-category CATEGORY            Hide entries of CATEGORY, still counting 
                                      hidden entries in totals (repeatable)
  --show-category CATEGORY            Show only entries of CATEGORY, still 
                                      counting hidden entries in totals 
                                      (repeatable)

Diffing:
  --match-name REGEX=REPLACEMENT      Rewrite names matching REGEX to 
                                      REPLACEMENT when pairing diffed entries 
                                      (repeatable)
  --match-location REGEX=REPLACEMENT  Rewrite locations (URL, path, or logical 
                                      name) matching REGEX to REPLACEMENT when 
                                      pairing diffed entries (repeatable)

Help:
  -h, --help [TOPIC]                  Show this help message or topic docs
  --version                           Show the version
  --completion SHELL                  Print a completion script for SHELL 
                                      (bash, fish, nu, pwsh, or zsh)

Formats:
  callgrind, collapsed, ghc-eventlog, ghc-json-profile, hprof, jfr,
  jsc-heap-snapshot, memray, perf, pprof, speedscope, systing, v8-cpu-profile,
  v8-heap-profile, v8-heap-snapshot, webkit-timeline-recording

Origins:
  async-profiler, bun, chrome, deno, dotnet-trace, eflambe, excimer, ghc, go,
  gperftools, jdk, memray, nix, node, node-pprof, perf, pprof-jl, pprof-rs,
  profile-jl, py-spy, pyinstrument, rbspy, safari, simpleperf, systing, tachyon,
  unknown, valgrind

Function categories:
  ours, third-party, stdlib, native, unknown, garbage-collector, compiler, jit,
  regexp, kernel, idle

Heap snapshot categories:
  object, array, string, concatenated-string, sliced-string, function, code,
  regexp, number, big-number, symbol, native, object-shape, internal, synthetic,
  unknown

Languages:
  c/cpp, csharp/fsharp, elixir/erlang, fortran, go, haskell, java/kotlin/groovy,
  javascript/typescript, julia, nix, php, python, ruby, rust, swift, zig

Docs: https://github.com/TomerAberbach/profiler-md
Bugs: https://github.com/TomerAberbach/profiler-md/issues
```

<!-- CLI_HELP END -->

<!-- prettier-ignore-end -->

</details>

### API

```js
import { openAsBlob } from 'node:fs'
import { diffProfilesAsync, profileToMdAsync } from 'profiler-md'

// Convert a profile or heap snapshot. The format and origin are auto-detected
console.log(await profileToMdAsync(await openAsBlob(`example.cpuprofile`)))

// Diff two profiles or two heap snapshots
console.log(
  await diffProfilesAsync(
    await openAsBlob(`base.cpuprofile`),
    await openAsBlob(`current.cpuprofile`),
  ),
)
```

See the [API docs](docs/api.md) for sync variants, explicit formats and origins,
and configuration callbacks.

## Skill

Use the [`profiler-md` skill](./skills/profile-optimize/SKILL.md) to have an
agent profile and optimize your code:

```sh
$ npx skills add TomerAberbach/profiler-md --skill profile-optimize
```

See [skills.sh](https://skills.sh/docs) for more info.

Fun fact: the skill has profiled and optimized `profiler-md` itself!

## Languages and formats

Each language lists only the formats its own tools generate. Third-party tools
convert others. Click a language for how to profile it, and a format for how to
generate and read it.

<!-- prettier-ignore-start -->

<!-- LANGUAGE_MATRIX START -->

<table>
<tr>
<td align="center" width="25%"><br /><a href="docs/languages/c.md"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/c/c-original.svg" alt="C" width="40" height="40" /> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/cplusplus/cplusplus-original.svg" alt="C++" width="40" height="40" /><br /><b>C⁠/⁠C++</b></a><br /><sub><a href="docs/formats/callgrind.md">Callgrind</a> · <a href="docs/formats/perf.md">perf.data</a> · <a href="docs/formats/pprof.md">pprof</a> · <a href="docs/formats/systing.md">systing</a></sub><br /><br /></td>
<td align="center" width="25%"><br /><a href="docs/languages/csharp.md"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/csharp/csharp-original.svg" alt="C#" width="40" height="40" /> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/fsharp/fsharp-original.svg" alt="F#" width="40" height="40" /><br /><b>C#⁠/⁠F#</b></a><br /><sub><a href="docs/formats/speedscope.md">Speedscope</a></sub><br /><br /></td>
<td align="center" width="25%"><br /><a href="docs/languages/elixir.md"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/elixir/elixir-original.svg" alt="Elixir" width="40" height="40" /> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/erlang/erlang-original.svg" alt="Erlang" width="40" height="40" /><br /><b>Elixir⁠/⁠Erlang</b></a><br /><sub><a href="docs/formats/collapsed.md">Collapsed stacks</a></sub><br /><br /></td>
<td align="center" width="25%"><br /><a href="docs/languages/fortran.md"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/fortran/fortran-original.svg" alt="Fortran" width="40" height="40" /><br /><b>Fortran</b></a><br /><sub><a href="docs/formats/pprof.md">pprof</a></sub><br /><br /></td>
</tr>
<tr>
<td align="center" width="25%"><br /><a href="docs/languages/go.md"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/go/go-original.svg" alt="Go" width="40" height="40" /><br /><b>Go</b></a><br /><sub><a href="docs/formats/pprof.md">pprof</a></sub><br /><br /></td>
<td align="center" width="25%"><br /><a href="docs/languages/haskell.md"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/haskell/haskell-original.svg" alt="Haskell" width="40" height="40" /><br /><b>Haskell</b></a><br /><sub><a href="docs/formats/ghc-eventlog.md">GHC eventlog</a> · <a href="docs/formats/ghc-json-profile.md">GHC JSON profile</a></sub><br /><br /></td>
<td align="center" width="25%"><br /><a href="docs/languages/java.md"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/java/java-original.svg" alt="Java" width="40" height="40" /> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/kotlin/kotlin-original.svg" alt="Kotlin" width="40" height="40" /> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/groovy/groovy-original.svg" alt="Groovy" width="40" height="40" /><br /><b>Java⁠/⁠Kotlin⁠/⁠Groovy</b></a><br /><sub><a href="docs/formats/collapsed.md">Collapsed stacks</a> · <a href="docs/formats/hprof.md">HPROF</a> · <a href="docs/formats/jfr.md">JFR</a></sub><br /><br /></td>
<td align="center" width="25%"><br /><a href="docs/languages/javascript.md"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/javascript/javascript-original.svg" alt="JavaScript" width="40" height="40" /> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/typescript/typescript-original.svg" alt="TypeScript" width="40" height="40" /><br /><b>JavaScript⁠/⁠TypeScript</b></a><br /><sub><a href="docs/formats/jsc-heap-snapshot.md">JSC heap snapshot</a> · <a href="docs/formats/pprof.md">pprof</a> · <a href="docs/formats/v8-cpu-profile.md">V8 CPU profile</a> · <a href="docs/formats/v8-heap-profile.md">V8 heap profile</a> · <a href="docs/formats/v8-heap-snapshot.md">V8 heap snapshot</a> · <a href="docs/formats/webkit-timeline-recording.md">WebKit timeline recording</a></sub><br /><br /></td>
</tr>
<tr>
<td align="center" width="25%"><br /><a href="docs/languages/julia.md"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/julia/julia-original.svg" alt="Julia" width="40" height="40" /><br /><b>Julia</b></a><br /><sub><a href="docs/formats/pprof.md">pprof</a> · <a href="docs/formats/v8-heap-snapshot.md">V8 heap snapshot</a></sub><br /><br /></td>
<td align="center" width="25%"><br /><a href="docs/languages/nix.md"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/nixos/nixos-original.svg" alt="Nix" width="40" height="40" /><br /><b>Nix</b></a><br /><sub><a href="docs/formats/collapsed.md">Collapsed stacks</a></sub><br /><br /></td>
<td align="center" width="25%"><br /><a href="docs/languages/php.md"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/php/php-original.svg" alt="PHP" width="40" height="40" /><br /><b>PHP</b></a><br /><sub><a href="docs/formats/collapsed.md">Collapsed stacks</a> · <a href="docs/formats/speedscope.md">Speedscope</a></sub><br /><br /></td>
<td align="center" width="25%"><br /><a href="docs/languages/python.md"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/python/python-original.svg" alt="Python" width="40" height="40" /><br /><b>Python</b></a><br /><sub><a href="docs/formats/collapsed.md">Collapsed stacks</a> · <a href="docs/formats/memray.md">memray</a> · <a href="docs/formats/speedscope.md">Speedscope</a> · <a href="docs/formats/systing.md">systing</a></sub><br /><br /></td>
</tr>
<tr>
<td align="center" width="25%"><br /><a href="docs/languages/ruby.md"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/ruby/ruby-original.svg" alt="Ruby" width="40" height="40" /><br /><b>Ruby</b></a><br /><sub><a href="docs/formats/callgrind.md">Callgrind</a> · <a href="docs/formats/collapsed.md">Collapsed stacks</a> · <a href="docs/formats/pprof.md">pprof</a> · <a href="docs/formats/speedscope.md">Speedscope</a></sub><br /><br /></td>
<td align="center" width="25%"><br /><a href="docs/languages/rust.md"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/rust/rust-original.svg" alt="Rust" width="40" height="40" /><br /><b>Rust</b></a><br /><sub><a href="docs/formats/pprof.md">pprof</a> · <a href="docs/formats/systing.md">systing</a></sub><br /><br /></td>
<td align="center" width="25%"><br /><a href="docs/languages/swift.md"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/swift/swift-original.svg" alt="Swift" width="40" height="40" /><br /><b>Swift</b></a><br /><sub><a href="docs/formats/pprof.md">pprof</a></sub><br /><br /></td>
<td align="center" width="25%"><br /><a href="docs/languages/zig.md"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/zig/zig-original.svg" alt="Zig" width="40" height="40" /><br /><b>Zig</b></a><br /><sub><a href="docs/formats/perf.md">perf.data</a> · <a href="docs/formats/pprof.md">pprof</a></sub><br /><br /></td>
</tr>
</table>

### Examples

Each example links to the Markdown for a base profile, a current profile, and
the diff between them.

<details>
<summary><b>Browse 130 examples</b></summary>
<br />
<table>
<thead>
<tr><th>Language</th><th>Profile</th><th>Format</th><th>Markdown</th></tr>
</thead>
<tbody>
<tr><td rowspan="9" align="center"><a href="docs/languages/c.md"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/c/c-original.svg" alt="C" width="32" height="32" /> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/cplusplus/cplusplus-original.svg" alt="C++" width="32" height="32" /><br /><sub><b>C⁠/⁠C++</b></sub></a></td><td>C Valgrind</td><td><a href="docs/formats/callgrind.md">Callgrind</a></td><td><a href="examples/output/c.valgrind.base.callgrind.md">base</a>&nbsp;·&nbsp;<a href="examples/output/c.valgrind.current.callgrind.md">current</a>&nbsp;·&nbsp;<a href="examples/output/c.valgrind.diff.callgrind.md">diff</a></td></tr>
<tr><td>C perf CPU</td><td><a href="docs/formats/perf.md">perf.data</a></td><td><a href="examples/output/c.perf.cpu.base.perf.data.md">base</a>&nbsp;·&nbsp;<a href="examples/output/c.perf.cpu.current.perf.data.md">current</a>&nbsp;·&nbsp;<a href="examples/output/c.perf.cpu.diff.perf.data.md">diff</a></td></tr>
<tr><td>C simpleperf CPU</td><td><a href="docs/formats/perf.md">perf.data</a></td><td><a href="examples/output/c.simpleperf.cpu.base.perf.data.md">base</a>&nbsp;·&nbsp;<a href="examples/output/c.simpleperf.cpu.current.perf.data.md">current</a>&nbsp;·&nbsp;<a href="examples/output/c.simpleperf.cpu.diff.perf.data.md">diff</a></td></tr>
<tr><td>C++ perf CPU</td><td><a href="docs/formats/perf.md">perf.data</a></td><td><a href="examples/output/cpp.perf.cpu.base.perf.data.md">base</a>&nbsp;·&nbsp;<a href="examples/output/cpp.perf.cpu.current.perf.data.md">current</a>&nbsp;·&nbsp;<a href="examples/output/cpp.perf.cpu.diff.perf.data.md">diff</a></td></tr>
<tr><td>C gperftools CPU</td><td><a href="docs/formats/pprof.md">pprof</a></td><td><a href="examples/output/c.gperftools.cpu.base.pprof.md">base</a>&nbsp;·&nbsp;<a href="examples/output/c.gperftools.cpu.current.pprof.md">current</a>&nbsp;·&nbsp;<a href="examples/output/c.gperftools.cpu.diff.pprof.md">diff</a></td></tr>
<tr><td>C gperftools heap</td><td><a href="docs/formats/pprof.md">pprof</a></td><td><a href="examples/output/c.gperftools.heap.base.pprof.md">base</a>&nbsp;·&nbsp;<a href="examples/output/c.gperftools.heap.current.pprof.md">current</a>&nbsp;·&nbsp;<a href="examples/output/c.gperftools.heap.diff.pprof.md">diff</a></td></tr>
<tr><td>C++ gperftools CPU</td><td><a href="docs/formats/pprof.md">pprof</a></td><td><a href="examples/output/cpp.gperftools.cpu.base.pprof.md">base</a>&nbsp;·&nbsp;<a href="examples/output/cpp.gperftools.cpu.current.pprof.md">current</a>&nbsp;·&nbsp;<a href="examples/output/cpp.gperftools.cpu.diff.pprof.md">diff</a></td></tr>
<tr><td>C++ gperftools heap</td><td><a href="docs/formats/pprof.md">pprof</a></td><td><a href="examples/output/cpp.gperftools.heap.base.pprof.md">base</a>&nbsp;·&nbsp;<a href="examples/output/cpp.gperftools.heap.current.pprof.md">current</a>&nbsp;·&nbsp;<a href="examples/output/cpp.gperftools.heap.diff.pprof.md">diff</a></td></tr>
<tr><td>C systing CPU</td><td><a href="docs/formats/systing.md">systing</a></td><td><a href="examples/output/c.systing.cpu.base.systing.md">base</a>&nbsp;·&nbsp;<a href="examples/output/c.systing.cpu.current.systing.md">current</a>&nbsp;·&nbsp;<a href="examples/output/c.systing.cpu.diff.systing.md">diff</a></td></tr>
<tr><td rowspan="2" align="center"><a href="docs/languages/csharp.md"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/csharp/csharp-original.svg" alt="C#" width="32" height="32" /> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/fsharp/fsharp-original.svg" alt="F#" width="32" height="32" /><br /><sub><b>C#⁠/⁠F#</b></sub></a></td><td>C# dotnet-trace</td><td><a href="docs/formats/speedscope.md">Speedscope</a></td><td><a href="examples/output/csharp.dotnet-trace.base.speedscope.json.md">base</a>&nbsp;·&nbsp;<a href="examples/output/csharp.dotnet-trace.current.speedscope.json.md">current</a>&nbsp;·&nbsp;<a href="examples/output/csharp.dotnet-trace.diff.speedscope.json.md">diff</a></td></tr>
<tr><td>F# dotnet-trace</td><td><a href="docs/formats/speedscope.md">Speedscope</a></td><td><a href="examples/output/fsharp.dotnet-trace.base.speedscope.json.md">base</a>&nbsp;·&nbsp;<a href="examples/output/fsharp.dotnet-trace.current.speedscope.json.md">current</a>&nbsp;·&nbsp;<a href="examples/output/fsharp.dotnet-trace.diff.speedscope.json.md">diff</a></td></tr>
<tr><td rowspan="2" align="center"><a href="docs/languages/elixir.md"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/elixir/elixir-original.svg" alt="Elixir" width="32" height="32" /> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/erlang/erlang-original.svg" alt="Erlang" width="32" height="32" /><br /><sub><b>Elixir⁠/⁠Erlang</b></sub></a></td><td>Elixir eflambe wall</td><td><a href="docs/formats/collapsed.md">Collapsed stacks</a></td><td><a href="examples/output/elixir.eflambe.wall.base.collapsed.md">base</a>&nbsp;·&nbsp;<a href="examples/output/elixir.eflambe.wall.current.collapsed.md">current</a>&nbsp;·&nbsp;<a href="examples/output/elixir.eflambe.wall.diff.collapsed.md">diff</a></td></tr>
<tr><td>Erlang eflambe wall</td><td><a href="docs/formats/collapsed.md">Collapsed stacks</a></td><td><a href="examples/output/erlang.eflambe.wall.base.collapsed.md">base</a>&nbsp;·&nbsp;<a href="examples/output/erlang.eflambe.wall.current.collapsed.md">current</a>&nbsp;·&nbsp;<a href="examples/output/erlang.eflambe.wall.diff.collapsed.md">diff</a></td></tr>
<tr><td rowspan="2" align="center"><a href="docs/languages/fortran.md"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/fortran/fortran-original.svg" alt="Fortran" width="32" height="32" /><br /><sub><b>Fortran</b></sub></a></td><td>gperftools CPU</td><td><a href="docs/formats/pprof.md">pprof</a></td><td><a href="examples/output/fortran.gperftools.cpu.base.pprof.md">base</a>&nbsp;·&nbsp;<a href="examples/output/fortran.gperftools.cpu.current.pprof.md">current</a>&nbsp;·&nbsp;<a href="examples/output/fortran.gperftools.cpu.diff.pprof.md">diff</a></td></tr>
<tr><td>gperftools heap</td><td><a href="docs/formats/pprof.md">pprof</a></td><td><a href="examples/output/fortran.gperftools.heap.base.pprof.md">base</a>&nbsp;·&nbsp;<a href="examples/output/fortran.gperftools.heap.current.pprof.md">current</a>&nbsp;·&nbsp;<a href="examples/output/fortran.gperftools.heap.diff.pprof.md">diff</a></td></tr>
<tr><td rowspan="9" align="center"><a href="docs/languages/go.md"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/go/go-original.svg" alt="Go" width="32" height="32" /><br /><sub><b>Go</b></sub></a></td><td>pprof block</td><td><a href="docs/formats/pprof.md">pprof</a></td><td><a href="examples/output/go.go.block.base.pprof.md">base</a>&nbsp;·&nbsp;<a href="examples/output/go.go.block.current.pprof.md">current</a>&nbsp;·&nbsp;<a href="examples/output/go.go.block.diff.pprof.md">diff</a></td></tr>
<tr><td>pprof CPU</td><td><a href="docs/formats/pprof.md">pprof</a></td><td><a href="examples/output/go.go.cpu.base.pprof.md">base</a>&nbsp;·&nbsp;<a href="examples/output/go.go.cpu.current.pprof.md">current</a>&nbsp;·&nbsp;<a href="examples/output/go.go.cpu.diff.pprof.md">diff</a></td></tr>
<tr><td>pprof CPU (-trimpath)</td><td><a href="docs/formats/pprof.md">pprof</a></td><td><a href="examples/output/go.go.cpu-trimpath.base.pprof.md">base</a>&nbsp;·&nbsp;<a href="examples/output/go.go.cpu-trimpath.current.pprof.md">current</a>&nbsp;·&nbsp;<a href="examples/output/go.go.cpu-trimpath.diff.pprof.md">diff</a></td></tr>
<tr><td>pprof goroutine</td><td><a href="docs/formats/pprof.md">pprof</a></td><td><a href="examples/output/go.go.goroutine.base.pprof.md">base</a>&nbsp;·&nbsp;<a href="examples/output/go.go.goroutine.current.pprof.md">current</a>&nbsp;·&nbsp;<a href="examples/output/go.go.goroutine.diff.pprof.md">diff</a></td></tr>
<tr><td>pprof goroutine leak</td><td><a href="docs/formats/pprof.md">pprof</a></td><td><a href="examples/output/go.go.goroutineleak.base.pprof.md">base</a>&nbsp;·&nbsp;<a href="examples/output/go.go.goroutineleak.current.pprof.md">current</a>&nbsp;·&nbsp;<a href="examples/output/go.go.goroutineleak.diff.pprof.md">diff</a></td></tr>
<tr><td>pprof heap</td><td><a href="docs/formats/pprof.md">pprof</a></td><td><a href="examples/output/go.go.heap.base.pprof.md">base</a>&nbsp;·&nbsp;<a href="examples/output/go.go.heap.current.pprof.md">current</a>&nbsp;·&nbsp;<a href="examples/output/go.go.heap.diff.pprof.md">diff</a></td></tr>
<tr><td>pprof heap-alloc</td><td><a href="docs/formats/pprof.md">pprof</a></td><td><a href="examples/output/go.go.heap-alloc.base.pprof.md">base</a>&nbsp;·&nbsp;<a href="examples/output/go.go.heap-alloc.current.pprof.md">current</a>&nbsp;·&nbsp;<a href="examples/output/go.go.heap-alloc.diff.pprof.md">diff</a></td></tr>
<tr><td>pprof mutex</td><td><a href="docs/formats/pprof.md">pprof</a></td><td><a href="examples/output/go.go.mutex.base.pprof.md">base</a>&nbsp;·&nbsp;<a href="examples/output/go.go.mutex.current.pprof.md">current</a>&nbsp;·&nbsp;<a href="examples/output/go.go.mutex.diff.pprof.md">diff</a></td></tr>
<tr><td>pprof threadcreate</td><td><a href="docs/formats/pprof.md">pprof</a></td><td><a href="examples/output/go.go.threadcreate.base.pprof.md">base</a>&nbsp;·&nbsp;<a href="examples/output/go.go.threadcreate.current.pprof.md">current</a>&nbsp;·&nbsp;<a href="examples/output/go.go.threadcreate.diff.pprof.md">diff</a></td></tr>
<tr><td rowspan="2" align="center"><a href="docs/languages/haskell.md"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/haskell/haskell-original.svg" alt="Haskell" width="32" height="32" /><br /><sub><b>Haskell</b></sub></a></td><td>GHC</td><td><a href="docs/formats/ghc-eventlog.md">GHC eventlog</a></td><td><a href="examples/output/haskell.ghc.base.eventlog.md">base</a>&nbsp;·&nbsp;<a href="examples/output/haskell.ghc.current.eventlog.md">current</a>&nbsp;·&nbsp;<a href="examples/output/haskell.ghc.diff.eventlog.md">diff</a></td></tr>
<tr><td>GHC</td><td><a href="docs/formats/ghc-json-profile.md">GHC JSON profile</a></td><td><a href="examples/output/haskell.ghc.base.prof.json.md">base</a>&nbsp;·&nbsp;<a href="examples/output/haskell.ghc.current.prof.json.md">current</a>&nbsp;·&nbsp;<a href="examples/output/haskell.ghc.diff.prof.json.md">diff</a></td></tr>
<tr><td rowspan="52" align="center"><a href="docs/languages/java.md"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/java/java-original.svg" alt="Java" width="32" height="32" /> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/kotlin/kotlin-original.svg" alt="Kotlin" width="32" height="32" /> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/groovy/groovy-original.svg" alt="Groovy" width="32" height="32" /><br /><sub><b>Java⁠/⁠Kotlin⁠/⁠Groovy</b></sub></a></td><td>Groovy async-profiler alloc</td><td><a href="docs/formats/collapsed.md">Collapsed stacks</a></td><td><a href="examples/output/groovy.async-profiler.alloc.base.collapsed.md">base</a>&nbsp;·&nbsp;<a href="examples/output/groovy.async-profiler.alloc.current.collapsed.md">current</a>&nbsp;·&nbsp;<a href="examples/output/groovy.async-profiler.alloc.diff.collapsed.md">diff</a></td></tr>
<tr><td>Groovy async-profiler alloc (dot)</td><td><a href="docs/formats/collapsed.md">Collapsed stacks</a></td><td><a href="examples/output/groovy.async-profiler.alloc-dot.base.collapsed.md">base</a>&nbsp;·&nbsp;<a href="examples/output/groovy.async-profiler.alloc-dot.current.collapsed.md">current</a>&nbsp;·&nbsp;<a href="examples/output/groovy.async-profiler.alloc-dot.diff.collapsed.md">diff</a></td></tr>
<tr><td>Groovy async-profiler CPU</td><td><a href="docs/formats/collapsed.md">Collapsed stacks</a></td><td><a href="examples/output/groovy.async-profiler.cpu.base.collapsed.md">base</a>&nbsp;·&nbsp;<a href="examples/output/groovy.async-profiler.cpu.current.collapsed.md">current</a>&nbsp;·&nbsp;<a href="examples/output/groovy.async-profiler.cpu.diff.collapsed.md">diff</a></td></tr>
<tr><td>Groovy async-profiler CPU (dot)</td><td><a href="docs/formats/collapsed.md">Collapsed stacks</a></td><td><a href="examples/output/groovy.async-profiler.cpu-dot.base.collapsed.md">base</a>&nbsp;·&nbsp;<a href="examples/output/groovy.async-profiler.cpu-dot.current.collapsed.md">current</a>&nbsp;·&nbsp;<a href="examples/output/groovy.async-profiler.cpu-dot.diff.collapsed.md">diff</a></td></tr>
<tr><td>Groovy async-profiler CPU (threads, ann, sig)</td><td><a href="docs/formats/collapsed.md">Collapsed stacks</a></td><td><a href="examples/output/groovy.async-profiler.cpu-threads-ann-sig.base.collapsed.md">base</a>&nbsp;·&nbsp;<a href="examples/output/groovy.async-profiler.cpu-threads-ann-sig.current.collapsed.md">current</a>&nbsp;·&nbsp;<a href="examples/output/groovy.async-profiler.cpu-threads-ann-sig.diff.collapsed.md">diff</a></td></tr>
<tr><td>Java async-profiler alloc</td><td><a href="docs/formats/collapsed.md">Collapsed stacks</a></td><td><a href="examples/output/java.async-profiler.alloc.base.collapsed.md">base</a>&nbsp;·&nbsp;<a href="examples/output/java.async-profiler.alloc.current.collapsed.md">current</a>&nbsp;·&nbsp;<a href="examples/output/java.async-profiler.alloc.diff.collapsed.md">diff</a></td></tr>
<tr><td>Java async-profiler alloc (dot)</td><td><a href="docs/formats/collapsed.md">Collapsed stacks</a></td><td><a href="examples/output/java.async-profiler.alloc-dot.base.collapsed.md">base</a>&nbsp;·&nbsp;<a href="examples/output/java.async-profiler.alloc-dot.current.collapsed.md">current</a>&nbsp;·&nbsp;<a href="examples/output/java.async-profiler.alloc-dot.diff.collapsed.md">diff</a></td></tr>
<tr><td>Java async-profiler CPU</td><td><a href="docs/formats/collapsed.md">Collapsed stacks</a></td><td><a href="examples/output/java.async-profiler.cpu.base.collapsed.md">base</a>&nbsp;·&nbsp;<a href="examples/output/java.async-profiler.cpu.current.collapsed.md">current</a>&nbsp;·&nbsp;<a href="examples/output/java.async-profiler.cpu.diff.collapsed.md">diff</a></td></tr>
<tr><td>Java async-profiler CPU (dot)</td><td><a href="docs/formats/collapsed.md">Collapsed stacks</a></td><td><a href="examples/output/java.async-profiler.cpu-dot.base.collapsed.md">base</a>&nbsp;·&nbsp;<a href="examples/output/java.async-profiler.cpu-dot.current.collapsed.md">current</a>&nbsp;·&nbsp;<a href="examples/output/java.async-profiler.cpu-dot.diff.collapsed.md">diff</a></td></tr>
<tr><td>Java async-profiler CPU (threads, ann, sig)</td><td><a href="docs/formats/collapsed.md">Collapsed stacks</a></td><td><a href="examples/output/java.async-profiler.cpu-threads-ann-sig.base.collapsed.md">base</a>&nbsp;·&nbsp;<a href="examples/output/java.async-profiler.cpu-threads-ann-sig.current.collapsed.md">current</a>&nbsp;·&nbsp;<a href="examples/output/java.async-profiler.cpu-threads-ann-sig.diff.collapsed.md">diff</a></td></tr>
<tr><td>Kotlin async-profiler alloc</td><td><a href="docs/formats/collapsed.md">Collapsed stacks</a></td><td><a href="examples/output/kotlin.async-profiler.alloc.base.collapsed.md">base</a>&nbsp;·&nbsp;<a href="examples/output/kotlin.async-profiler.alloc.current.collapsed.md">current</a>&nbsp;·&nbsp;<a href="examples/output/kotlin.async-profiler.alloc.diff.collapsed.md">diff</a></td></tr>
<tr><td>Kotlin async-profiler alloc (dot)</td><td><a href="docs/formats/collapsed.md">Collapsed stacks</a></td><td><a href="examples/output/kotlin.async-profiler.alloc-dot.base.collapsed.md">base</a>&nbsp;·&nbsp;<a href="examples/output/kotlin.async-profiler.alloc-dot.current.collapsed.md">current</a>&nbsp;·&nbsp;<a href="examples/output/kotlin.async-profiler.alloc-dot.diff.collapsed.md">diff</a></td></tr>
<tr><td>Kotlin async-profiler CPU</td><td><a href="docs/formats/collapsed.md">Collapsed stacks</a></td><td><a href="examples/output/kotlin.async-profiler.cpu.base.collapsed.md">base</a>&nbsp;·&nbsp;<a href="examples/output/kotlin.async-profiler.cpu.current.collapsed.md">current</a>&nbsp;·&nbsp;<a href="examples/output/kotlin.async-profiler.cpu.diff.collapsed.md">diff</a></td></tr>
<tr><td>Kotlin async-profiler CPU (dot)</td><td><a href="docs/formats/collapsed.md">Collapsed stacks</a></td><td><a href="examples/output/kotlin.async-profiler.cpu-dot.base.collapsed.md">base</a>&nbsp;·&nbsp;<a href="examples/output/kotlin.async-profiler.cpu-dot.current.collapsed.md">current</a>&nbsp;·&nbsp;<a href="examples/output/kotlin.async-profiler.cpu-dot.diff.collapsed.md">diff</a></td></tr>
<tr><td>Kotlin async-profiler CPU (threads, ann, sig)</td><td><a href="docs/formats/collapsed.md">Collapsed stacks</a></td><td><a href="examples/output/kotlin.async-profiler.cpu-threads-ann-sig.base.collapsed.md">base</a>&nbsp;·&nbsp;<a href="examples/output/kotlin.async-profiler.cpu-threads-ann-sig.current.collapsed.md">current</a>&nbsp;·&nbsp;<a href="examples/output/kotlin.async-profiler.cpu-threads-ann-sig.diff.collapsed.md">diff</a></td></tr>
<tr><td>Java JDK</td><td><a href="docs/formats/hprof.md">HPROF</a></td><td><a href="examples/output/java.jdk.base.hprof.md">base</a>&nbsp;·&nbsp;<a href="examples/output/java.jdk.current.hprof.md">current</a>&nbsp;·&nbsp;<a href="examples/output/java.jdk.diff.hprof.md">diff</a></td></tr>
<tr><td>Groovy async-profiler all</td><td><a href="docs/formats/jfr.md">JFR</a></td><td><a href="examples/output/groovy.async-profiler.all.base.jfr.md">base</a>&nbsp;·&nbsp;<a href="examples/output/groovy.async-profiler.all.current.jfr.md">current</a>&nbsp;·&nbsp;<a href="examples/output/groovy.async-profiler.all.diff.jfr.md">diff</a></td></tr>
<tr><td>Groovy async-profiler alloc</td><td><a href="docs/formats/jfr.md">JFR</a></td><td><a href="examples/output/groovy.async-profiler.alloc.base.jfr.md">base</a>&nbsp;·&nbsp;<a href="examples/output/groovy.async-profiler.alloc.current.jfr.md">current</a>&nbsp;·&nbsp;<a href="examples/output/groovy.async-profiler.alloc.diff.jfr.md">diff</a></td></tr>
<tr><td>Groovy async-profiler CPU</td><td><a href="docs/formats/jfr.md">JFR</a></td><td><a href="examples/output/groovy.async-profiler.cpu.base.jfr.md">base</a>&nbsp;·&nbsp;<a href="examples/output/groovy.async-profiler.cpu.current.jfr.md">current</a>&nbsp;·&nbsp;<a href="examples/output/groovy.async-profiler.cpu.diff.jfr.md">diff</a></td></tr>
<tr><td>Groovy async-profiler live</td><td><a href="docs/formats/jfr.md">JFR</a></td><td><a href="examples/output/groovy.async-profiler.live.base.jfr.md">base</a>&nbsp;·&nbsp;<a href="examples/output/groovy.async-profiler.live.current.jfr.md">current</a>&nbsp;·&nbsp;<a href="examples/output/groovy.async-profiler.live.diff.jfr.md">diff</a></td></tr>
<tr><td>Groovy async-profiler lock</td><td><a href="docs/formats/jfr.md">JFR</a></td><td><a href="examples/output/groovy.async-profiler.lock.base.jfr.md">base</a>&nbsp;·&nbsp;<a href="examples/output/groovy.async-profiler.lock.current.jfr.md">current</a>&nbsp;·&nbsp;<a href="examples/output/groovy.async-profiler.lock.diff.jfr.md">diff</a></td></tr>
<tr><td>Groovy async-profiler nativemem</td><td><a href="docs/formats/jfr.md">JFR</a></td><td><a href="examples/output/groovy.async-profiler.nativemem.base.jfr.md">base</a>&nbsp;·&nbsp;<a href="examples/output/groovy.async-profiler.nativemem.current.jfr.md">current</a>&nbsp;·&nbsp;<a href="examples/output/groovy.async-profiler.nativemem.diff.jfr.md">diff</a></td></tr>
<tr><td>Groovy async-profiler wall</td><td><a href="docs/formats/jfr.md">JFR</a></td><td><a href="examples/output/groovy.async-profiler.wall.base.jfr.md">base</a>&nbsp;·&nbsp;<a href="examples/output/groovy.async-profiler.wall.current.jfr.md">current</a>&nbsp;·&nbsp;<a href="examples/output/groovy.async-profiler.wall.diff.jfr.md">diff</a></td></tr>
<tr><td>Groovy JDK all</td><td><a href="docs/formats/jfr.md">JFR</a></td><td><a href="examples/output/groovy.jdk.all.base.jfr.md">base</a>&nbsp;·&nbsp;<a href="examples/output/groovy.jdk.all.current.jfr.md">current</a>&nbsp;·&nbsp;<a href="examples/output/groovy.jdk.all.diff.jfr.md">diff</a></td></tr>
<tr><td>Groovy JDK alloc</td><td><a href="docs/formats/jfr.md">JFR</a></td><td><a href="examples/output/groovy.jdk.alloc.base.jfr.md">base</a>&nbsp;·&nbsp;<a href="examples/output/groovy.jdk.alloc.current.jfr.md">current</a>&nbsp;·&nbsp;<a href="examples/output/groovy.jdk.alloc.diff.jfr.md">diff</a></td></tr>
<tr><td>Groovy JDK CPU</td><td><a href="docs/formats/jfr.md">JFR</a></td><td><a href="examples/output/groovy.jdk.cpu.base.jfr.md">base</a>&nbsp;·&nbsp;<a href="examples/output/groovy.jdk.cpu.current.jfr.md">current</a>&nbsp;·&nbsp;<a href="examples/output/groovy.jdk.cpu.diff.jfr.md">diff</a></td></tr>
<tr><td>Groovy JDK live</td><td><a href="docs/formats/jfr.md">JFR</a></td><td><a href="examples/output/groovy.jdk.live.base.jfr.md">base</a>&nbsp;·&nbsp;<a href="examples/output/groovy.jdk.live.current.jfr.md">current</a>&nbsp;·&nbsp;<a href="examples/output/groovy.jdk.live.diff.jfr.md">diff</a></td></tr>
<tr><td>Groovy JDK lock</td><td><a href="docs/formats/jfr.md">JFR</a></td><td><a href="examples/output/groovy.jdk.lock.base.jfr.md">base</a>&nbsp;·&nbsp;<a href="examples/output/groovy.jdk.lock.current.jfr.md">current</a>&nbsp;·&nbsp;<a href="examples/output/groovy.jdk.lock.diff.jfr.md">diff</a></td></tr>
<tr><td>Java async-profiler all</td><td><a href="docs/formats/jfr.md">JFR</a></td><td><a href="examples/output/java.async-profiler.all.base.jfr.md">base</a>&nbsp;·&nbsp;<a href="examples/output/java.async-profiler.all.current.jfr.md">current</a>&nbsp;·&nbsp;<a href="examples/output/java.async-profiler.all.diff.jfr.md">diff</a></td></tr>
<tr><td>Java async-profiler alloc</td><td><a href="docs/formats/jfr.md">JFR</a></td><td><a href="examples/output/java.async-profiler.alloc.base.jfr.md">base</a>&nbsp;·&nbsp;<a href="examples/output/java.async-profiler.alloc.current.jfr.md">current</a>&nbsp;·&nbsp;<a href="examples/output/java.async-profiler.alloc.diff.jfr.md">diff</a></td></tr>
<tr><td>Java async-profiler CPU</td><td><a href="docs/formats/jfr.md">JFR</a></td><td><a href="examples/output/java.async-profiler.cpu.base.jfr.md">base</a>&nbsp;·&nbsp;<a href="examples/output/java.async-profiler.cpu.current.jfr.md">current</a>&nbsp;·&nbsp;<a href="examples/output/java.async-profiler.cpu.diff.jfr.md">diff</a></td></tr>
<tr><td>Java async-profiler live</td><td><a href="docs/formats/jfr.md">JFR</a></td><td><a href="examples/output/java.async-profiler.live.base.jfr.md">base</a>&nbsp;·&nbsp;<a href="examples/output/java.async-profiler.live.current.jfr.md">current</a>&nbsp;·&nbsp;<a href="examples/output/java.async-profiler.live.diff.jfr.md">diff</a></td></tr>
<tr><td>Java async-profiler lock</td><td><a href="docs/formats/jfr.md">JFR</a></td><td><a href="examples/output/java.async-profiler.lock.base.jfr.md">base</a>&nbsp;·&nbsp;<a href="examples/output/java.async-profiler.lock.current.jfr.md">current</a>&nbsp;·&nbsp;<a href="examples/output/java.async-profiler.lock.diff.jfr.md">diff</a></td></tr>
<tr><td>Java async-profiler nativemem</td><td><a href="docs/formats/jfr.md">JFR</a></td><td><a href="examples/output/java.async-profiler.nativemem.base.jfr.md">base</a>&nbsp;·&nbsp;<a href="examples/output/java.async-profiler.nativemem.current.jfr.md">current</a>&nbsp;·&nbsp;<a href="examples/output/java.async-profiler.nativemem.diff.jfr.md">diff</a></td></tr>
<tr><td>Java async-profiler wall</td><td><a href="docs/formats/jfr.md">JFR</a></td><td><a href="examples/output/java.async-profiler.wall.base.jfr.md">base</a>&nbsp;·&nbsp;<a href="examples/output/java.async-profiler.wall.current.jfr.md">current</a>&nbsp;·&nbsp;<a href="examples/output/java.async-profiler.wall.diff.jfr.md">diff</a></td></tr>
<tr><td>Java JDK all</td><td><a href="docs/formats/jfr.md">JFR</a></td><td><a href="examples/output/java.jdk.all.base.jfr.md">base</a>&nbsp;·&nbsp;<a href="examples/output/java.jdk.all.current.jfr.md">current</a>&nbsp;·&nbsp;<a href="examples/output/java.jdk.all.diff.jfr.md">diff</a></td></tr>
<tr><td>Java JDK alloc</td><td><a href="docs/formats/jfr.md">JFR</a></td><td><a href="examples/output/java.jdk.alloc.base.jfr.md">base</a>&nbsp;·&nbsp;<a href="examples/output/java.jdk.alloc.current.jfr.md">current</a>&nbsp;·&nbsp;<a href="examples/output/java.jdk.alloc.diff.jfr.md">diff</a></td></tr>
<tr><td>Java JDK CPU</td><td><a href="docs/formats/jfr.md">JFR</a></td><td><a href="examples/output/java.jdk.cpu.base.jfr.md">base</a>&nbsp;·&nbsp;<a href="examples/output/java.jdk.cpu.current.jfr.md">current</a>&nbsp;·&nbsp;<a href="examples/output/java.jdk.cpu.diff.jfr.md">diff</a></td></tr>
<tr><td>Java JDK live</td><td><a href="docs/formats/jfr.md">JFR</a></td><td><a href="examples/output/java.jdk.live.base.jfr.md">base</a>&nbsp;·&nbsp;<a href="examples/output/java.jdk.live.current.jfr.md">current</a>&nbsp;·&nbsp;<a href="examples/output/java.jdk.live.diff.jfr.md">diff</a></td></tr>
<tr><td>Java JDK lock</td><td><a href="docs/formats/jfr.md">JFR</a></td><td><a href="examples/output/java.jdk.lock.base.jfr.md">base</a>&nbsp;·&nbsp;<a href="examples/output/java.jdk.lock.current.jfr.md">current</a>&nbsp;·&nbsp;<a href="examples/output/java.jdk.lock.diff.jfr.md">diff</a></td></tr>
<tr><td>Kotlin async-profiler all</td><td><a href="docs/formats/jfr.md">JFR</a></td><td><a href="examples/output/kotlin.async-profiler.all.base.jfr.md">base</a>&nbsp;·&nbsp;<a href="examples/output/kotlin.async-profiler.all.current.jfr.md">current</a>&nbsp;·&nbsp;<a href="examples/output/kotlin.async-profiler.all.diff.jfr.md">diff</a></td></tr>
<tr><td>Kotlin async-profiler alloc</td><td><a href="docs/formats/jfr.md">JFR</a></td><td><a href="examples/output/kotlin.async-profiler.alloc.base.jfr.md">base</a>&nbsp;·&nbsp;<a href="examples/output/kotlin.async-profiler.alloc.current.jfr.md">current</a>&nbsp;·&nbsp;<a href="examples/output/kotlin.async-profiler.alloc.diff.jfr.md">diff</a></td></tr>
<tr><td>Kotlin async-profiler CPU</td><td><a href="docs/formats/jfr.md">JFR</a></td><td><a href="examples/output/kotlin.async-profiler.cpu.base.jfr.md">base</a>&nbsp;·&nbsp;<a href="examples/output/kotlin.async-profiler.cpu.current.jfr.md">current</a>&nbsp;·&nbsp;<a href="examples/output/kotlin.async-profiler.cpu.diff.jfr.md">diff</a></td></tr>
<tr><td>Kotlin async-profiler live</td><td><a href="docs/formats/jfr.md">JFR</a></td><td><a href="examples/output/kotlin.async-profiler.live.base.jfr.md">base</a>&nbsp;·&nbsp;<a href="examples/output/kotlin.async-profiler.live.current.jfr.md">current</a>&nbsp;·&nbsp;<a href="examples/output/kotlin.async-profiler.live.diff.jfr.md">diff</a></td></tr>
<tr><td>Kotlin async-profiler lock</td><td><a href="docs/formats/jfr.md">JFR</a></td><td><a href="examples/output/kotlin.async-profiler.lock.base.jfr.md">base</a>&nbsp;·&nbsp;<a href="examples/output/kotlin.async-profiler.lock.current.jfr.md">current</a>&nbsp;·&nbsp;<a href="examples/output/kotlin.async-profiler.lock.diff.jfr.md">diff</a></td></tr>
<tr><td>Kotlin async-profiler nativemem</td><td><a href="docs/formats/jfr.md">JFR</a></td><td><a href="examples/output/kotlin.async-profiler.nativemem.base.jfr.md">base</a>&nbsp;·&nbsp;<a href="examples/output/kotlin.async-profiler.nativemem.current.jfr.md">current</a>&nbsp;·&nbsp;<a href="examples/output/kotlin.async-profiler.nativemem.diff.jfr.md">diff</a></td></tr>
<tr><td>Kotlin async-profiler wall</td><td><a href="docs/formats/jfr.md">JFR</a></td><td><a href="examples/output/kotlin.async-profiler.wall.base.jfr.md">base</a>&nbsp;·&nbsp;<a href="examples/output/kotlin.async-profiler.wall.current.jfr.md">current</a>&nbsp;·&nbsp;<a href="examples/output/kotlin.async-profiler.wall.diff.jfr.md">diff</a></td></tr>
<tr><td>Kotlin JDK all</td><td><a href="docs/formats/jfr.md">JFR</a></td><td><a href="examples/output/kotlin.jdk.all.base.jfr.md">base</a>&nbsp;·&nbsp;<a href="examples/output/kotlin.jdk.all.current.jfr.md">current</a>&nbsp;·&nbsp;<a href="examples/output/kotlin.jdk.all.diff.jfr.md">diff</a></td></tr>
<tr><td>Kotlin JDK alloc</td><td><a href="docs/formats/jfr.md">JFR</a></td><td><a href="examples/output/kotlin.jdk.alloc.base.jfr.md">base</a>&nbsp;·&nbsp;<a href="examples/output/kotlin.jdk.alloc.current.jfr.md">current</a>&nbsp;·&nbsp;<a href="examples/output/kotlin.jdk.alloc.diff.jfr.md">diff</a></td></tr>
<tr><td>Kotlin JDK CPU</td><td><a href="docs/formats/jfr.md">JFR</a></td><td><a href="examples/output/kotlin.jdk.cpu.base.jfr.md">base</a>&nbsp;·&nbsp;<a href="examples/output/kotlin.jdk.cpu.current.jfr.md">current</a>&nbsp;·&nbsp;<a href="examples/output/kotlin.jdk.cpu.diff.jfr.md">diff</a></td></tr>
<tr><td>Kotlin JDK live</td><td><a href="docs/formats/jfr.md">JFR</a></td><td><a href="examples/output/kotlin.jdk.live.base.jfr.md">base</a>&nbsp;·&nbsp;<a href="examples/output/kotlin.jdk.live.current.jfr.md">current</a>&nbsp;·&nbsp;<a href="examples/output/kotlin.jdk.live.diff.jfr.md">diff</a></td></tr>
<tr><td>Kotlin JDK lock</td><td><a href="docs/formats/jfr.md">JFR</a></td><td><a href="examples/output/kotlin.jdk.lock.base.jfr.md">base</a>&nbsp;·&nbsp;<a href="examples/output/kotlin.jdk.lock.current.jfr.md">current</a>&nbsp;·&nbsp;<a href="examples/output/kotlin.jdk.lock.diff.jfr.md">diff</a></td></tr>
<tr><td rowspan="17" align="center"><a href="docs/languages/javascript.md"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/javascript/javascript-original.svg" alt="JavaScript" width="32" height="32" /> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/typescript/typescript-original.svg" alt="TypeScript" width="32" height="32" /><br /><sub><b>JavaScript⁠/⁠TypeScript</b></sub></a></td><td>JavaScript Bun</td><td><a href="docs/formats/jsc-heap-snapshot.md">JSC heap snapshot</a></td><td><a href="examples/output/javascript.bun.base.jsc-heap-snapshot.json.md">base</a>&nbsp;·&nbsp;<a href="examples/output/javascript.bun.current.jsc-heap-snapshot.json.md">current</a>&nbsp;·&nbsp;<a href="examples/output/javascript.bun.diff.jsc-heap-snapshot.json.md">diff</a></td></tr>
<tr><td>JavaScript Safari</td><td><a href="docs/formats/jsc-heap-snapshot.md">JSC heap snapshot</a></td><td><a href="examples/output/javascript.safari.base.jsc-heap-snapshot.json.md">base</a>&nbsp;·&nbsp;<a href="examples/output/javascript.safari.current.jsc-heap-snapshot.json.md">current</a>&nbsp;·&nbsp;<a href="examples/output/javascript.safari.diff.jsc-heap-snapshot.json.md">diff</a></td></tr>
<tr><td>JavaScript node-pprof CPU</td><td><a href="docs/formats/pprof.md">pprof</a></td><td><a href="examples/output/javascript.node-pprof.cpu.base.pprof.md">base</a>&nbsp;·&nbsp;<a href="examples/output/javascript.node-pprof.cpu.current.pprof.md">current</a>&nbsp;·&nbsp;<a href="examples/output/javascript.node-pprof.cpu.diff.pprof.md">diff</a></td></tr>
<tr><td>JavaScript node-pprof CPU (line numbers)</td><td><a href="docs/formats/pprof.md">pprof</a></td><td><a href="examples/output/javascript.node-pprof.cpu-lines.base.pprof.md">base</a>&nbsp;·&nbsp;<a href="examples/output/javascript.node-pprof.cpu-lines.current.pprof.md">current</a>&nbsp;·&nbsp;<a href="examples/output/javascript.node-pprof.cpu-lines.diff.pprof.md">diff</a></td></tr>
<tr><td>JavaScript node-pprof heap</td><td><a href="docs/formats/pprof.md">pprof</a></td><td><a href="examples/output/javascript.node-pprof.heap.base.pprof.md">base</a>&nbsp;·&nbsp;<a href="examples/output/javascript.node-pprof.heap.current.pprof.md">current</a>&nbsp;·&nbsp;<a href="examples/output/javascript.node-pprof.heap.diff.pprof.md">diff</a></td></tr>
<tr><td>JavaScript Bun</td><td><a href="docs/formats/v8-cpu-profile.md">V8 CPU profile</a></td><td><a href="examples/output/javascript.bun.base.cpuprofile.md">base</a>&nbsp;·&nbsp;<a href="examples/output/javascript.bun.current.cpuprofile.md">current</a>&nbsp;·&nbsp;<a href="examples/output/javascript.bun.diff.cpuprofile.md">diff</a></td></tr>
<tr><td>JavaScript Chrome</td><td><a href="docs/formats/v8-cpu-profile.md">V8 CPU profile</a></td><td><a href="examples/output/javascript.chrome.base.cpuprofile.md">base</a>&nbsp;·&nbsp;<a href="examples/output/javascript.chrome.current.cpuprofile.md">current</a>&nbsp;·&nbsp;<a href="examples/output/javascript.chrome.diff.cpuprofile.md">diff</a></td></tr>
<tr><td>JavaScript Deno</td><td><a href="docs/formats/v8-cpu-profile.md">V8 CPU profile</a></td><td><a href="examples/output/javascript.deno.base.cpuprofile.md">base</a>&nbsp;·&nbsp;<a href="examples/output/javascript.deno.current.cpuprofile.md">current</a>&nbsp;·&nbsp;<a href="examples/output/javascript.deno.diff.cpuprofile.md">diff</a></td></tr>
<tr><td>JavaScript Node.js</td><td><a href="docs/formats/v8-cpu-profile.md">V8 CPU profile</a></td><td><a href="examples/output/javascript.node.base.cpuprofile.md">base</a>&nbsp;·&nbsp;<a href="examples/output/javascript.node.current.cpuprofile.md">current</a>&nbsp;·&nbsp;<a href="examples/output/javascript.node.diff.cpuprofile.md">diff</a></td></tr>
<tr><td>JavaScript Chrome</td><td><a href="docs/formats/v8-heap-profile.md">V8 heap profile</a></td><td><a href="examples/output/javascript.chrome.base.heapprofile.md">base</a>&nbsp;·&nbsp;<a href="examples/output/javascript.chrome.current.heapprofile.md">current</a>&nbsp;·&nbsp;<a href="examples/output/javascript.chrome.diff.heapprofile.md">diff</a></td></tr>
<tr><td>JavaScript Node.js</td><td><a href="docs/formats/v8-heap-profile.md">V8 heap profile</a></td><td><a href="examples/output/javascript.node.base.heapprofile.md">base</a>&nbsp;·&nbsp;<a href="examples/output/javascript.node.current.heapprofile.md">current</a>&nbsp;·&nbsp;<a href="examples/output/javascript.node.diff.heapprofile.md">diff</a></td></tr>
<tr><td>JavaScript Node.js all allocations</td><td><a href="docs/formats/v8-heap-profile.md">V8 heap profile</a></td><td><a href="examples/output/javascript.node.all-allocations.base.heapprofile.md">base</a>&nbsp;·&nbsp;<a href="examples/output/javascript.node.all-allocations.current.heapprofile.md">current</a>&nbsp;·&nbsp;<a href="examples/output/javascript.node.all-allocations.diff.heapprofile.md">diff</a></td></tr>
<tr><td>JavaScript Bun</td><td><a href="docs/formats/v8-heap-snapshot.md">V8 heap snapshot</a></td><td><a href="examples/output/javascript.bun.base.heapsnapshot.md">base</a>&nbsp;·&nbsp;<a href="examples/output/javascript.bun.current.heapsnapshot.md">current</a>&nbsp;·&nbsp;<a href="examples/output/javascript.bun.diff.heapsnapshot.md">diff</a></td></tr>
<tr><td>JavaScript Chrome</td><td><a href="docs/formats/v8-heap-snapshot.md">V8 heap snapshot</a></td><td><a href="examples/output/javascript.chrome.base.heapsnapshot.md">base</a>&nbsp;·&nbsp;<a href="examples/output/javascript.chrome.current.heapsnapshot.md">current</a>&nbsp;·&nbsp;<a href="examples/output/javascript.chrome.diff.heapsnapshot.md">diff</a></td></tr>
<tr><td>JavaScript Node.js</td><td><a href="docs/formats/v8-heap-snapshot.md">V8 heap snapshot</a></td><td><a href="examples/output/javascript.node.base.heapsnapshot.md">base</a>&nbsp;·&nbsp;<a href="examples/output/javascript.node.current.heapsnapshot.md">current</a>&nbsp;·&nbsp;<a href="examples/output/javascript.node.diff.heapsnapshot.md">diff</a></td></tr>
<tr><td>JavaScript Safari 17</td><td><a href="docs/formats/webkit-timeline-recording.md">WebKit timeline recording</a></td><td><a href="examples/output/javascript.safari.17.base.webkit-timeline-recording.json.md">base</a>&nbsp;·&nbsp;<a href="examples/output/javascript.safari.17.current.webkit-timeline-recording.json.md">current</a>&nbsp;·&nbsp;<a href="examples/output/javascript.safari.17.diff.webkit-timeline-recording.json.md">diff</a></td></tr>
<tr><td>JavaScript Safari 26</td><td><a href="docs/formats/webkit-timeline-recording.md">WebKit timeline recording</a></td><td><a href="examples/output/javascript.safari.26.base.webkit-timeline-recording.json.md">base</a>&nbsp;·&nbsp;<a href="examples/output/javascript.safari.26.current.webkit-timeline-recording.json.md">current</a>&nbsp;·&nbsp;<a href="examples/output/javascript.safari.26.diff.webkit-timeline-recording.json.md">diff</a></td></tr>
<tr><td rowspan="4" align="center"><a href="docs/languages/julia.md"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/julia/julia-original.svg" alt="Julia" width="32" height="32" /><br /><sub><b>Julia</b></sub></a></td><td>pprof-jl alloc</td><td><a href="docs/formats/pprof.md">pprof</a></td><td><a href="examples/output/julia.pprof-jl.alloc.base.pprof.md">base</a>&nbsp;·&nbsp;<a href="examples/output/julia.pprof-jl.alloc.current.pprof.md">current</a>&nbsp;·&nbsp;<a href="examples/output/julia.pprof-jl.alloc.diff.pprof.md">diff</a></td></tr>
<tr><td>pprof-jl CPU</td><td><a href="docs/formats/pprof.md">pprof</a></td><td><a href="examples/output/julia.pprof-jl.cpu.base.pprof.md">base</a>&nbsp;·&nbsp;<a href="examples/output/julia.pprof-jl.cpu.current.pprof.md">current</a>&nbsp;·&nbsp;<a href="examples/output/julia.pprof-jl.cpu.diff.pprof.md">diff</a></td></tr>
<tr><td>pprof-jl wall</td><td><a href="docs/formats/pprof.md">pprof</a></td><td><a href="examples/output/julia.pprof-jl.wall.base.pprof.md">base</a>&nbsp;·&nbsp;<a href="examples/output/julia.pprof-jl.wall.current.pprof.md">current</a>&nbsp;·&nbsp;<a href="examples/output/julia.pprof-jl.wall.diff.pprof.md">diff</a></td></tr>
<tr><td>Profile</td><td><a href="docs/formats/v8-heap-snapshot.md">V8 heap snapshot</a></td><td><a href="examples/output/julia.profile-jl.base.heapsnapshot.md">base</a>&nbsp;·&nbsp;<a href="examples/output/julia.profile-jl.current.heapsnapshot.md">current</a>&nbsp;·&nbsp;<a href="examples/output/julia.profile-jl.diff.heapsnapshot.md">diff</a></td></tr>
<tr><td rowspan="1" align="center"><a href="docs/languages/nix.md"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/nixos/nixos-original.svg" alt="Nix" width="32" height="32" /><br /><sub><b>Nix</b></sub></a></td><td>Nix</td><td><a href="docs/formats/collapsed.md">Collapsed stacks</a></td><td><a href="examples/output/nix.nix.base.collapsed.md">base</a>&nbsp;·&nbsp;<a href="examples/output/nix.nix.current.collapsed.md">current</a>&nbsp;·&nbsp;<a href="examples/output/nix.nix.diff.collapsed.md">diff</a></td></tr>
<tr><td rowspan="2" align="center"><a href="docs/languages/php.md"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/php/php-original.svg" alt="PHP" width="32" height="32" /><br /><sub><b>PHP</b></sub></a></td><td>Excimer wall</td><td><a href="docs/formats/collapsed.md">Collapsed stacks</a></td><td><a href="examples/output/php.excimer.wall.base.collapsed.md">base</a>&nbsp;·&nbsp;<a href="examples/output/php.excimer.wall.current.collapsed.md">current</a>&nbsp;·&nbsp;<a href="examples/output/php.excimer.wall.diff.collapsed.md">diff</a></td></tr>
<tr><td>Excimer wall</td><td><a href="docs/formats/speedscope.md">Speedscope</a></td><td><a href="examples/output/php.excimer.wall.base.speedscope.json.md">base</a>&nbsp;·&nbsp;<a href="examples/output/php.excimer.wall.current.speedscope.json.md">current</a>&nbsp;·&nbsp;<a href="examples/output/php.excimer.wall.diff.speedscope.json.md">diff</a></td></tr>
<tr><td rowspan="18" align="center"><a href="docs/languages/python.md"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/python/python-original.svg" alt="Python" width="32" height="32" /><br /><sub><b>Python</b></sub></a></td><td>py-spy CPU</td><td><a href="docs/formats/collapsed.md">Collapsed stacks</a></td><td><a href="examples/output/python.py-spy.cpu.base.collapsed.md">base</a>&nbsp;·&nbsp;<a href="examples/output/python.py-spy.cpu.current.collapsed.md">current</a>&nbsp;·&nbsp;<a href="examples/output/python.py-spy.cpu.diff.collapsed.md">diff</a></td></tr>
<tr><td>py-spy function</td><td><a href="docs/formats/collapsed.md">Collapsed stacks</a></td><td><a href="examples/output/python.py-spy.function.base.collapsed.md">base</a>&nbsp;·&nbsp;<a href="examples/output/python.py-spy.function.current.collapsed.md">current</a>&nbsp;·&nbsp;<a href="examples/output/python.py-spy.function.diff.collapsed.md">diff</a></td></tr>
<tr><td>py-spy native</td><td><a href="docs/formats/collapsed.md">Collapsed stacks</a></td><td><a href="examples/output/python.py-spy.native.base.collapsed.md">base</a>&nbsp;·&nbsp;<a href="examples/output/python.py-spy.native.current.collapsed.md">current</a>&nbsp;·&nbsp;<a href="examples/output/python.py-spy.native.diff.collapsed.md">diff</a></td></tr>
<tr><td>py-spy wall</td><td><a href="docs/formats/collapsed.md">Collapsed stacks</a></td><td><a href="examples/output/python.py-spy.wall.base.collapsed.md">base</a>&nbsp;·&nbsp;<a href="examples/output/python.py-spy.wall.current.collapsed.md">current</a>&nbsp;·&nbsp;<a href="examples/output/python.py-spy.wall.diff.collapsed.md">diff</a></td></tr>
<tr><td>tachyon all threads</td><td><a href="docs/formats/collapsed.md">Collapsed stacks</a></td><td><a href="examples/output/python.tachyon.all-threads.base.collapsed.md">base</a>&nbsp;·&nbsp;<a href="examples/output/python.tachyon.all-threads.current.collapsed.md">current</a>&nbsp;·&nbsp;<a href="examples/output/python.tachyon.all-threads.diff.collapsed.md">diff</a></td></tr>
<tr><td>tachyon CPU</td><td><a href="docs/formats/collapsed.md">Collapsed stacks</a></td><td><a href="examples/output/python.tachyon.cpu.base.collapsed.md">base</a>&nbsp;·&nbsp;<a href="examples/output/python.tachyon.cpu.current.collapsed.md">current</a>&nbsp;·&nbsp;<a href="examples/output/python.tachyon.cpu.diff.collapsed.md">diff</a></td></tr>
<tr><td>tachyon exception</td><td><a href="docs/formats/collapsed.md">Collapsed stacks</a></td><td><a href="examples/output/python.tachyon.exception.base.collapsed.md">base</a>&nbsp;·&nbsp;<a href="examples/output/python.tachyon.exception.current.collapsed.md">current</a>&nbsp;·&nbsp;<a href="examples/output/python.tachyon.exception.diff.collapsed.md">diff</a></td></tr>
<tr><td>tachyon GIL</td><td><a href="docs/formats/collapsed.md">Collapsed stacks</a></td><td><a href="examples/output/python.tachyon.gil.base.collapsed.md">base</a>&nbsp;·&nbsp;<a href="examples/output/python.tachyon.gil.current.collapsed.md">current</a>&nbsp;·&nbsp;<a href="examples/output/python.tachyon.gil.diff.collapsed.md">diff</a></td></tr>
<tr><td>tachyon native</td><td><a href="docs/formats/collapsed.md">Collapsed stacks</a></td><td><a href="examples/output/python.tachyon.native.base.collapsed.md">base</a>&nbsp;·&nbsp;<a href="examples/output/python.tachyon.native.current.collapsed.md">current</a>&nbsp;·&nbsp;<a href="examples/output/python.tachyon.native.diff.collapsed.md">diff</a></td></tr>
<tr><td>tachyon wall</td><td><a href="docs/formats/collapsed.md">Collapsed stacks</a></td><td><a href="examples/output/python.tachyon.wall.base.collapsed.md">base</a>&nbsp;·&nbsp;<a href="examples/output/python.tachyon.wall.current.collapsed.md">current</a>&nbsp;·&nbsp;<a href="examples/output/python.tachyon.wall.diff.collapsed.md">diff</a></td></tr>
<tr><td>memray</td><td><a href="docs/formats/memray.md">memray</a></td><td><a href="examples/output/python.memray.base.memray.bin.md">base</a>&nbsp;·&nbsp;<a href="examples/output/python.memray.current.memray.bin.md">current</a>&nbsp;·&nbsp;<a href="examples/output/python.memray.diff.memray.bin.md">diff</a></td></tr>
<tr><td>memray aggregated</td><td><a href="docs/formats/memray.md">memray</a></td><td><a href="examples/output/python.memray.aggregated.base.memray.bin.md">base</a>&nbsp;·&nbsp;<a href="examples/output/python.memray.aggregated.current.memray.bin.md">current</a>&nbsp;·&nbsp;<a href="examples/output/python.memray.aggregated.diff.memray.bin.md">diff</a></td></tr>
<tr><td>memray native</td><td><a href="docs/formats/memray.md">memray</a></td><td><a href="examples/output/python.memray.native.base.memray.bin.md">base</a>&nbsp;·&nbsp;<a href="examples/output/python.memray.native.current.memray.bin.md">current</a>&nbsp;·&nbsp;<a href="examples/output/python.memray.native.diff.memray.bin.md">diff</a></td></tr>
<tr><td>memray v13</td><td><a href="docs/formats/memray.md">memray</a></td><td><a href="examples/output/python.memray.v13.base.memray.bin.md">base</a>&nbsp;·&nbsp;<a href="examples/output/python.memray.v13.current.memray.bin.md">current</a>&nbsp;·&nbsp;<a href="examples/output/python.memray.v13.diff.memray.bin.md">diff</a></td></tr>
<tr><td>py-spy CPU</td><td><a href="docs/formats/speedscope.md">Speedscope</a></td><td><a href="examples/output/python.py-spy.cpu.base.speedscope.json.md">base</a>&nbsp;·&nbsp;<a href="examples/output/python.py-spy.cpu.current.speedscope.json.md">current</a>&nbsp;·&nbsp;<a href="examples/output/python.py-spy.cpu.diff.speedscope.json.md">diff</a></td></tr>
<tr><td>py-spy function</td><td><a href="docs/formats/speedscope.md">Speedscope</a></td><td><a href="examples/output/python.py-spy.function.base.speedscope.json.md">base</a>&nbsp;·&nbsp;<a href="examples/output/python.py-spy.function.current.speedscope.json.md">current</a>&nbsp;·&nbsp;<a href="examples/output/python.py-spy.function.diff.speedscope.json.md">diff</a></td></tr>
<tr><td>py-spy native</td><td><a href="docs/formats/speedscope.md">Speedscope</a></td><td><a href="examples/output/python.py-spy.native.base.speedscope.json.md">base</a>&nbsp;·&nbsp;<a href="examples/output/python.py-spy.native.current.speedscope.json.md">current</a>&nbsp;·&nbsp;<a href="examples/output/python.py-spy.native.diff.speedscope.json.md">diff</a></td></tr>
<tr><td>pyinstrument</td><td><a href="docs/formats/speedscope.md">Speedscope</a></td><td><a href="examples/output/python.pyinstrument.base.speedscope.json.md">base</a>&nbsp;·&nbsp;<a href="examples/output/python.pyinstrument.current.speedscope.json.md">current</a>&nbsp;·&nbsp;<a href="examples/output/python.pyinstrument.diff.speedscope.json.md">diff</a></td></tr>
<tr><td rowspan="4" align="center"><a href="docs/languages/ruby.md"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/ruby/ruby-original.svg" alt="Ruby" width="32" height="32" /><br /><sub><b>Ruby</b></sub></a></td><td>rbspy CPU</td><td><a href="docs/formats/callgrind.md">Callgrind</a></td><td><a href="examples/output/ruby.rbspy.cpu.base.callgrind.md">base</a>&nbsp;·&nbsp;<a href="examples/output/ruby.rbspy.cpu.current.callgrind.md">current</a>&nbsp;·&nbsp;<a href="examples/output/ruby.rbspy.cpu.diff.callgrind.md">diff</a></td></tr>
<tr><td>rbspy CPU</td><td><a href="docs/formats/collapsed.md">Collapsed stacks</a></td><td><a href="examples/output/ruby.rbspy.cpu.base.collapsed.md">base</a>&nbsp;·&nbsp;<a href="examples/output/ruby.rbspy.cpu.current.collapsed.md">current</a>&nbsp;·&nbsp;<a href="examples/output/ruby.rbspy.cpu.diff.collapsed.md">diff</a></td></tr>
<tr><td>rbspy CPU</td><td><a href="docs/formats/pprof.md">pprof</a></td><td><a href="examples/output/ruby.rbspy.cpu.base.pprof.md">base</a>&nbsp;·&nbsp;<a href="examples/output/ruby.rbspy.cpu.current.pprof.md">current</a>&nbsp;·&nbsp;<a href="examples/output/ruby.rbspy.cpu.diff.pprof.md">diff</a></td></tr>
<tr><td>rbspy CPU</td><td><a href="docs/formats/speedscope.md">Speedscope</a></td><td><a href="examples/output/ruby.rbspy.cpu.base.speedscope.json.md">base</a>&nbsp;·&nbsp;<a href="examples/output/ruby.rbspy.cpu.current.speedscope.json.md">current</a>&nbsp;·&nbsp;<a href="examples/output/ruby.rbspy.cpu.diff.speedscope.json.md">diff</a></td></tr>
<tr><td rowspan="1" align="center"><a href="docs/languages/rust.md"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/rust/rust-original.svg" alt="Rust" width="32" height="32" /><br /><sub><b>Rust</b></sub></a></td><td>pprof-rs CPU</td><td><a href="docs/formats/pprof.md">pprof</a></td><td><a href="examples/output/rust.pprof-rs.cpu.base.pprof.md">base</a>&nbsp;·&nbsp;<a href="examples/output/rust.pprof-rs.cpu.current.pprof.md">current</a>&nbsp;·&nbsp;<a href="examples/output/rust.pprof-rs.cpu.diff.pprof.md">diff</a></td></tr>
<tr><td rowspan="2" align="center"><a href="docs/languages/swift.md"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/swift/swift-original.svg" alt="Swift" width="32" height="32" /><br /><sub><b>Swift</b></sub></a></td><td>gperftools CPU</td><td><a href="docs/formats/pprof.md">pprof</a></td><td><a href="examples/output/swift.gperftools.cpu.base.pprof.md">base</a>&nbsp;·&nbsp;<a href="examples/output/swift.gperftools.cpu.current.pprof.md">current</a>&nbsp;·&nbsp;<a href="examples/output/swift.gperftools.cpu.diff.pprof.md">diff</a></td></tr>
<tr><td>gperftools heap</td><td><a href="docs/formats/pprof.md">pprof</a></td><td><a href="examples/output/swift.gperftools.heap.base.pprof.md">base</a>&nbsp;·&nbsp;<a href="examples/output/swift.gperftools.heap.current.pprof.md">current</a>&nbsp;·&nbsp;<a href="examples/output/swift.gperftools.heap.diff.pprof.md">diff</a></td></tr>
<tr><td rowspan="3" align="center"><a href="docs/languages/zig.md"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/zig/zig-original.svg" alt="Zig" width="32" height="32" /><br /><sub><b>Zig</b></sub></a></td><td>perf CPU</td><td><a href="docs/formats/perf.md">perf.data</a></td><td><a href="examples/output/zig.perf.cpu.base.perf.data.md">base</a>&nbsp;·&nbsp;<a href="examples/output/zig.perf.cpu.current.perf.data.md">current</a>&nbsp;·&nbsp;<a href="examples/output/zig.perf.cpu.diff.perf.data.md">diff</a></td></tr>
<tr><td>gperftools CPU</td><td><a href="docs/formats/pprof.md">pprof</a></td><td><a href="examples/output/zig.gperftools.cpu.base.pprof.md">base</a>&nbsp;·&nbsp;<a href="examples/output/zig.gperftools.cpu.current.pprof.md">current</a>&nbsp;·&nbsp;<a href="examples/output/zig.gperftools.cpu.diff.pprof.md">diff</a></td></tr>
<tr><td>gperftools heap</td><td><a href="docs/formats/pprof.md">pprof</a></td><td><a href="examples/output/zig.gperftools.heap.base.pprof.md">base</a>&nbsp;·&nbsp;<a href="examples/output/zig.gperftools.heap.current.pprof.md">current</a>&nbsp;·&nbsp;<a href="examples/output/zig.gperftools.heap.diff.pprof.md">diff</a></td></tr>
</tbody>
</table>
</details>

<!-- LANGUAGE_MATRIX END -->

<!-- prettier-ignore-end -->

## Contributing

Stars are always welcome!

For bugs and feature requests,
[create an issue](https://github.com/TomerAberbach/profiler-md/issues/new).

## License

[MIT](https://github.com/TomerAberbach/profiler-md/blob/main/license) ©
[Tomer Aberbach](https://github.com/TomerAberbach)

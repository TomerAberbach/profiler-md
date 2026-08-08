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

The output covers category breakdowns, the hottest functions by self and total
time with per-line, caller, and callee detail, and the hottest call stacks; see
the [full output](examples/output/javascript.node.base.cpuprofile.md).
[`examples/output/`](examples/output) has more, including heap snapshots and
diffs.

## Features

- **Polyglot:** supports
  [profile and heap snapshot formats](#languages-and-formats) across many
  languages
- **Profile analysis:** sampling rates, category breakdowns, and the hottest
  functions and call stacks by whatever was sampled (time, allocations, locks…)
- **Heap analysis:** self and
  [dominator](<https://en.wikipedia.org/wiki/Dominator_(graph_theory)>)-based
  retained sizes, retainer paths, and the largest constructors, closures, and
  strings
- **Diffing:** ranked regressions and improvements between two profiles or two
  heap snapshots, ignoring run-varying identifiers like build hashes
- **Source maps:** resolves minified and transpiled locations back to original
  sources
- **Zero config:** auto-detects the format and profiler, decompresses
  gzip/brotli, and reads from stdin
- **Fast:** streaming parsing and specialized data structures convert large
  profiles quickly
- **Configurable:** top entry counts, base URLs, categorization, filtering, and
  diff matching, with overridable defaults ([API docs](docs/api.md))
- **CLI and API:** use the command line or a fully-typed API with sync and async
  variants
- **Readable in the terminal:** ANSI syntax highlighting with heat-map coloring
  and automatic paging
- **Self-documenting:** `--help <language>` and `--help <format>` explain how to
  generate and understand each profile type
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

<!-- prettier-ignore-start -->

<!-- CLI_HELP START -->

```sh
$ profiler-md --help
Usage: profiler-md [(-h/--help [TOPIC])] [-f/--format FORMAT] [-r/--origin
       ORIGIN] [-o/--output FILE] [--top-n N] [--base-url STRING] [--source-maps
       GLOB...] [--match REGEX=REPLACEMENT...] [--third-party GLOB...] [
       --no-pager] [--color/--no-color] ([FILE] | BASE CURRENT)

Converts performance profiles to human and LLM friendly Markdown.

  -h, --help [TOPIC]          Show this help message or topic docs
  -f, --format FORMAT         Input profile format (default: auto)
  -r, --origin ORIGIN         Input profile origin (default: auto)
  -o, --output FILE           Output file (default: - for stdout)
  --top-n N                   Top entries to show (default: 20)
  --base-url STRING           Base URL or path to show paths relative to, or 
                              "auto" to infer the common ancestor directory 
                              (default: cwd)
  --source-maps GLOB          Source maps (JSON or inline) to apply to profile 
                              locations (repeatable)
  --match REGEX=REPLACEMENT   Treat locations matching REGEX as REPLACEMENT 
                              when matching entries across diffed profiles 
                              (repeatable)
  --third-party GLOB          Additional URLs or paths to consider third-party 
                              (repeatable)
  --no-pager                  Disable stdout paging (default: auto)
  --color, --no-color         Enable or disable ANSI syntax highlighting 
                              (default: auto)
  FILE                        Profile to convert (default: stdin)
  BASE                        Base profile to diff
  CURRENT                     Current profile to diff against the base

Formats: callgrind, collapsed, jfr, jsc-heap-snapshot, pprof, speedscope, systing, v8-cpu-profile, v8-heap-profile, v8-heap-snapshot, webkit-timeline-recording
Origins: async-profiler, bun, chrome, deno, dotnet-trace, eflambe, excimer, go, gperftools, jdk, node, node-pprof, pprof-jl, pprof-rs, profile-jl, py-spy, rbspy, safari, systing, tachyon, unknown, valgrind
Languages: c/cpp, csharp/fsharp, elixir/erlang, fortran, go, java/kotlin/groovy, javascript/typescript, julia, php, python, ruby, rust, zig
```

<!-- CLI_HELP END -->

<!-- prettier-ignore-end -->

### API

```js
import { openAsBlob } from 'node:fs'
import { diffProfilesAsync, profileToMdAsync } from 'profiler-md'

// Convert a profile or heap snapshot; format and origin are auto-detected
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

A language lists only the formats its ecosystem's tools natively generate;
third-party tools can often convert others.

<!-- prettier-ignore-start -->

<!-- LANGUAGE_MATRIX START -->

<table>
<thead>
<tr><th>Language</th><th>Formats</th></tr>
</thead>
<tbody>
<tr>
<td><a href="docs/languages/c.md">C⁠/⁠C++</a></td>
<td>
<details><summary><a href="docs/formats/callgrind.md">Callgrind</a></summary><ul><li>C Valgrind (<a href="examples/output/c.valgrind.base.callgrind.md">base</a>, <a href="examples/output/c.valgrind.current.callgrind.md">current</a>, <a href="examples/output/c.valgrind.diff.callgrind.md">diff</a>)</li></ul></details>
<details><summary><a href="docs/formats/pprof.md">pprof</a></summary><ul><li>C gperftools CPU (<a href="examples/output/c.gperftools.cpu.base.pprof.md">base</a>, <a href="examples/output/c.gperftools.cpu.current.pprof.md">current</a>, <a href="examples/output/c.gperftools.cpu.diff.pprof.md">diff</a>)</li><li>C gperftools heap (<a href="examples/output/c.gperftools.heap.base.pprof.md">base</a>, <a href="examples/output/c.gperftools.heap.current.pprof.md">current</a>, <a href="examples/output/c.gperftools.heap.diff.pprof.md">diff</a>)</li><li>C++ gperftools CPU (<a href="examples/output/cpp.gperftools.cpu.base.pprof.md">base</a>, <a href="examples/output/cpp.gperftools.cpu.current.pprof.md">current</a>, <a href="examples/output/cpp.gperftools.cpu.diff.pprof.md">diff</a>)</li><li>C++ gperftools heap (<a href="examples/output/cpp.gperftools.heap.base.pprof.md">base</a>, <a href="examples/output/cpp.gperftools.heap.current.pprof.md">current</a>, <a href="examples/output/cpp.gperftools.heap.diff.pprof.md">diff</a>)</li></ul></details>
<details><summary><a href="docs/formats/systing.md">systing</a></summary><ul><li>C systing CPU (<a href="examples/output/c.systing.cpu.base.systing.md">base</a>, <a href="examples/output/c.systing.cpu.current.systing.md">current</a>, <a href="examples/output/c.systing.cpu.diff.systing.md">diff</a>)</li></ul></details>
</td>
</tr>
<tr>
<td><a href="docs/languages/csharp.md">C#⁠/⁠F#</a></td>
<td>
<details><summary><a href="docs/formats/speedscope.md">Speedscope</a></summary><ul><li>C# dotnet-trace (<a href="examples/output/csharp.dotnet-trace.base.speedscope.json.md">base</a>, <a href="examples/output/csharp.dotnet-trace.current.speedscope.json.md">current</a>, <a href="examples/output/csharp.dotnet-trace.diff.speedscope.json.md">diff</a>)</li><li>F# dotnet-trace (<a href="examples/output/fsharp.dotnet-trace.base.speedscope.json.md">base</a>, <a href="examples/output/fsharp.dotnet-trace.current.speedscope.json.md">current</a>, <a href="examples/output/fsharp.dotnet-trace.diff.speedscope.json.md">diff</a>)</li></ul></details>
</td>
</tr>
<tr>
<td><a href="docs/languages/elixir.md">Elixir⁠/⁠Erlang</a></td>
<td>
<details><summary><a href="docs/formats/collapsed.md">Collapsed stacks</a></summary><ul><li>Elixir eflambe CPU (<a href="examples/output/elixir.eflambe.cpu.base.collapsed.md">base</a>, <a href="examples/output/elixir.eflambe.cpu.current.collapsed.md">current</a>, <a href="examples/output/elixir.eflambe.cpu.diff.collapsed.md">diff</a>)</li><li>Erlang eflambe CPU (<a href="examples/output/erlang.eflambe.cpu.base.collapsed.md">base</a>, <a href="examples/output/erlang.eflambe.cpu.current.collapsed.md">current</a>, <a href="examples/output/erlang.eflambe.cpu.diff.collapsed.md">diff</a>)</li></ul></details>
</td>
</tr>
<tr>
<td><a href="docs/languages/fortran.md">Fortran</a></td>
<td>
<details><summary><a href="docs/formats/pprof.md">pprof</a></summary><ul><li>Fortran gperftools CPU (<a href="examples/output/fortran.gperftools.cpu.base.pprof.md">base</a>, <a href="examples/output/fortran.gperftools.cpu.current.pprof.md">current</a>, <a href="examples/output/fortran.gperftools.cpu.diff.pprof.md">diff</a>)</li><li>Fortran gperftools heap (<a href="examples/output/fortran.gperftools.heap.base.pprof.md">base</a>, <a href="examples/output/fortran.gperftools.heap.current.pprof.md">current</a>, <a href="examples/output/fortran.gperftools.heap.diff.pprof.md">diff</a>)</li></ul></details>
</td>
</tr>
<tr>
<td><a href="docs/languages/go.md">Go</a></td>
<td>
<details><summary><a href="docs/formats/pprof.md">pprof</a></summary><ul><li>Go pprof block (<a href="examples/output/go.go.block.base.pprof.md">base</a>, <a href="examples/output/go.go.block.current.pprof.md">current</a>, <a href="examples/output/go.go.block.diff.pprof.md">diff</a>)</li><li>Go pprof CPU (<a href="examples/output/go.go.cpu.base.pprof.md">base</a>, <a href="examples/output/go.go.cpu.current.pprof.md">current</a>, <a href="examples/output/go.go.cpu.diff.pprof.md">diff</a>)</li><li>Go pprof goroutine (<a href="examples/output/go.go.goroutine.base.pprof.md">base</a>, <a href="examples/output/go.go.goroutine.current.pprof.md">current</a>, <a href="examples/output/go.go.goroutine.diff.pprof.md">diff</a>)</li><li>Go pprof heap (<a href="examples/output/go.go.heap.base.pprof.md">base</a>, <a href="examples/output/go.go.heap.current.pprof.md">current</a>, <a href="examples/output/go.go.heap.diff.pprof.md">diff</a>)</li><li>Go pprof heap-alloc (<a href="examples/output/go.go.heap-alloc.base.pprof.md">base</a>, <a href="examples/output/go.go.heap-alloc.current.pprof.md">current</a>, <a href="examples/output/go.go.heap-alloc.diff.pprof.md">diff</a>)</li><li>Go pprof mutex (<a href="examples/output/go.go.mutex.base.pprof.md">base</a>, <a href="examples/output/go.go.mutex.current.pprof.md">current</a>, <a href="examples/output/go.go.mutex.diff.pprof.md">diff</a>)</li><li>Go pprof threadcreate (<a href="examples/output/go.go.threadcreate.base.pprof.md">base</a>, <a href="examples/output/go.go.threadcreate.current.pprof.md">current</a>, <a href="examples/output/go.go.threadcreate.diff.pprof.md">diff</a>)</li></ul></details>
</td>
</tr>
<tr>
<td><a href="docs/languages/java.md">Java⁠/⁠Kotlin⁠/⁠Groovy</a></td>
<td>
<details><summary><a href="docs/formats/collapsed.md">Collapsed stacks</a></summary><ul><li>Groovy async-profiler CPU (<a href="examples/output/groovy.async-profiler.cpu.base.collapsed.md">base</a>, <a href="examples/output/groovy.async-profiler.cpu.current.collapsed.md">current</a>, <a href="examples/output/groovy.async-profiler.cpu.diff.collapsed.md">diff</a>)</li><li>Java async-profiler CPU (<a href="examples/output/java.async-profiler.cpu.base.collapsed.md">base</a>, <a href="examples/output/java.async-profiler.cpu.current.collapsed.md">current</a>, <a href="examples/output/java.async-profiler.cpu.diff.collapsed.md">diff</a>)</li><li>Kotlin async-profiler CPU (<a href="examples/output/kotlin.async-profiler.cpu.base.collapsed.md">base</a>, <a href="examples/output/kotlin.async-profiler.cpu.current.collapsed.md">current</a>, <a href="examples/output/kotlin.async-profiler.cpu.diff.collapsed.md">diff</a>)</li></ul></details>
<details><summary><a href="docs/formats/jfr.md">JFR</a></summary><ul><li>Groovy async-profiler all (<a href="examples/output/groovy.async-profiler.all.base.jfr.md">base</a>, <a href="examples/output/groovy.async-profiler.all.current.jfr.md">current</a>, <a href="examples/output/groovy.async-profiler.all.diff.jfr.md">diff</a>)</li><li>Groovy async-profiler alloc (<a href="examples/output/groovy.async-profiler.alloc.base.jfr.md">base</a>, <a href="examples/output/groovy.async-profiler.alloc.current.jfr.md">current</a>, <a href="examples/output/groovy.async-profiler.alloc.diff.jfr.md">diff</a>)</li><li>Groovy async-profiler CPU (<a href="examples/output/groovy.async-profiler.cpu.base.jfr.md">base</a>, <a href="examples/output/groovy.async-profiler.cpu.current.jfr.md">current</a>, <a href="examples/output/groovy.async-profiler.cpu.diff.jfr.md">diff</a>)</li><li>Groovy async-profiler live (<a href="examples/output/groovy.async-profiler.live.base.jfr.md">base</a>, <a href="examples/output/groovy.async-profiler.live.current.jfr.md">current</a>, <a href="examples/output/groovy.async-profiler.live.diff.jfr.md">diff</a>)</li><li>Groovy async-profiler lock (<a href="examples/output/groovy.async-profiler.lock.base.jfr.md">base</a>, <a href="examples/output/groovy.async-profiler.lock.current.jfr.md">current</a>, <a href="examples/output/groovy.async-profiler.lock.diff.jfr.md">diff</a>)</li><li>Groovy async-profiler nativemem (<a href="examples/output/groovy.async-profiler.nativemem.base.jfr.md">base</a>, <a href="examples/output/groovy.async-profiler.nativemem.current.jfr.md">current</a>, <a href="examples/output/groovy.async-profiler.nativemem.diff.jfr.md">diff</a>)</li><li>Groovy async-profiler wall (<a href="examples/output/groovy.async-profiler.wall.base.jfr.md">base</a>, <a href="examples/output/groovy.async-profiler.wall.current.jfr.md">current</a>, <a href="examples/output/groovy.async-profiler.wall.diff.jfr.md">diff</a>)</li><li>Groovy JDK all (<a href="examples/output/groovy.jdk.all.base.jfr.md">base</a>, <a href="examples/output/groovy.jdk.all.current.jfr.md">current</a>, <a href="examples/output/groovy.jdk.all.diff.jfr.md">diff</a>)</li><li>Groovy JDK alloc (<a href="examples/output/groovy.jdk.alloc.base.jfr.md">base</a>, <a href="examples/output/groovy.jdk.alloc.current.jfr.md">current</a>, <a href="examples/output/groovy.jdk.alloc.diff.jfr.md">diff</a>)</li><li>Groovy JDK CPU (<a href="examples/output/groovy.jdk.cpu.base.jfr.md">base</a>, <a href="examples/output/groovy.jdk.cpu.current.jfr.md">current</a>, <a href="examples/output/groovy.jdk.cpu.diff.jfr.md">diff</a>)</li><li>Groovy JDK live (<a href="examples/output/groovy.jdk.live.base.jfr.md">base</a>, <a href="examples/output/groovy.jdk.live.current.jfr.md">current</a>, <a href="examples/output/groovy.jdk.live.diff.jfr.md">diff</a>)</li><li>Groovy JDK lock (<a href="examples/output/groovy.jdk.lock.base.jfr.md">base</a>, <a href="examples/output/groovy.jdk.lock.current.jfr.md">current</a>, <a href="examples/output/groovy.jdk.lock.diff.jfr.md">diff</a>)</li><li>Java async-profiler all (<a href="examples/output/java.async-profiler.all.base.jfr.md">base</a>, <a href="examples/output/java.async-profiler.all.current.jfr.md">current</a>, <a href="examples/output/java.async-profiler.all.diff.jfr.md">diff</a>)</li><li>Java async-profiler alloc (<a href="examples/output/java.async-profiler.alloc.base.jfr.md">base</a>, <a href="examples/output/java.async-profiler.alloc.current.jfr.md">current</a>, <a href="examples/output/java.async-profiler.alloc.diff.jfr.md">diff</a>)</li><li>Java async-profiler CPU (<a href="examples/output/java.async-profiler.cpu.base.jfr.md">base</a>, <a href="examples/output/java.async-profiler.cpu.current.jfr.md">current</a>, <a href="examples/output/java.async-profiler.cpu.diff.jfr.md">diff</a>)</li><li>Java async-profiler live (<a href="examples/output/java.async-profiler.live.base.jfr.md">base</a>, <a href="examples/output/java.async-profiler.live.current.jfr.md">current</a>, <a href="examples/output/java.async-profiler.live.diff.jfr.md">diff</a>)</li><li>Java async-profiler lock (<a href="examples/output/java.async-profiler.lock.base.jfr.md">base</a>, <a href="examples/output/java.async-profiler.lock.current.jfr.md">current</a>, <a href="examples/output/java.async-profiler.lock.diff.jfr.md">diff</a>)</li><li>Java async-profiler nativemem (<a href="examples/output/java.async-profiler.nativemem.base.jfr.md">base</a>, <a href="examples/output/java.async-profiler.nativemem.current.jfr.md">current</a>, <a href="examples/output/java.async-profiler.nativemem.diff.jfr.md">diff</a>)</li><li>Java async-profiler wall (<a href="examples/output/java.async-profiler.wall.base.jfr.md">base</a>, <a href="examples/output/java.async-profiler.wall.current.jfr.md">current</a>, <a href="examples/output/java.async-profiler.wall.diff.jfr.md">diff</a>)</li><li>Java JDK all (<a href="examples/output/java.jdk.all.base.jfr.md">base</a>, <a href="examples/output/java.jdk.all.current.jfr.md">current</a>, <a href="examples/output/java.jdk.all.diff.jfr.md">diff</a>)</li><li>Java JDK alloc (<a href="examples/output/java.jdk.alloc.base.jfr.md">base</a>, <a href="examples/output/java.jdk.alloc.current.jfr.md">current</a>, <a href="examples/output/java.jdk.alloc.diff.jfr.md">diff</a>)</li><li>Java JDK CPU (<a href="examples/output/java.jdk.cpu.base.jfr.md">base</a>, <a href="examples/output/java.jdk.cpu.current.jfr.md">current</a>, <a href="examples/output/java.jdk.cpu.diff.jfr.md">diff</a>)</li><li>Java JDK live (<a href="examples/output/java.jdk.live.base.jfr.md">base</a>, <a href="examples/output/java.jdk.live.current.jfr.md">current</a>, <a href="examples/output/java.jdk.live.diff.jfr.md">diff</a>)</li><li>Java JDK lock (<a href="examples/output/java.jdk.lock.base.jfr.md">base</a>, <a href="examples/output/java.jdk.lock.current.jfr.md">current</a>, <a href="examples/output/java.jdk.lock.diff.jfr.md">diff</a>)</li><li>Kotlin async-profiler all (<a href="examples/output/kotlin.async-profiler.all.base.jfr.md">base</a>, <a href="examples/output/kotlin.async-profiler.all.current.jfr.md">current</a>, <a href="examples/output/kotlin.async-profiler.all.diff.jfr.md">diff</a>)</li><li>Kotlin async-profiler alloc (<a href="examples/output/kotlin.async-profiler.alloc.base.jfr.md">base</a>, <a href="examples/output/kotlin.async-profiler.alloc.current.jfr.md">current</a>, <a href="examples/output/kotlin.async-profiler.alloc.diff.jfr.md">diff</a>)</li><li>Kotlin async-profiler CPU (<a href="examples/output/kotlin.async-profiler.cpu.base.jfr.md">base</a>, <a href="examples/output/kotlin.async-profiler.cpu.current.jfr.md">current</a>, <a href="examples/output/kotlin.async-profiler.cpu.diff.jfr.md">diff</a>)</li><li>Kotlin async-profiler live (<a href="examples/output/kotlin.async-profiler.live.base.jfr.md">base</a>, <a href="examples/output/kotlin.async-profiler.live.current.jfr.md">current</a>, <a href="examples/output/kotlin.async-profiler.live.diff.jfr.md">diff</a>)</li><li>Kotlin async-profiler lock (<a href="examples/output/kotlin.async-profiler.lock.base.jfr.md">base</a>, <a href="examples/output/kotlin.async-profiler.lock.current.jfr.md">current</a>, <a href="examples/output/kotlin.async-profiler.lock.diff.jfr.md">diff</a>)</li><li>Kotlin async-profiler nativemem (<a href="examples/output/kotlin.async-profiler.nativemem.base.jfr.md">base</a>, <a href="examples/output/kotlin.async-profiler.nativemem.current.jfr.md">current</a>, <a href="examples/output/kotlin.async-profiler.nativemem.diff.jfr.md">diff</a>)</li><li>Kotlin async-profiler wall (<a href="examples/output/kotlin.async-profiler.wall.base.jfr.md">base</a>, <a href="examples/output/kotlin.async-profiler.wall.current.jfr.md">current</a>, <a href="examples/output/kotlin.async-profiler.wall.diff.jfr.md">diff</a>)</li><li>Kotlin JDK all (<a href="examples/output/kotlin.jdk.all.base.jfr.md">base</a>, <a href="examples/output/kotlin.jdk.all.current.jfr.md">current</a>, <a href="examples/output/kotlin.jdk.all.diff.jfr.md">diff</a>)</li><li>Kotlin JDK alloc (<a href="examples/output/kotlin.jdk.alloc.base.jfr.md">base</a>, <a href="examples/output/kotlin.jdk.alloc.current.jfr.md">current</a>, <a href="examples/output/kotlin.jdk.alloc.diff.jfr.md">diff</a>)</li><li>Kotlin JDK CPU (<a href="examples/output/kotlin.jdk.cpu.base.jfr.md">base</a>, <a href="examples/output/kotlin.jdk.cpu.current.jfr.md">current</a>, <a href="examples/output/kotlin.jdk.cpu.diff.jfr.md">diff</a>)</li><li>Kotlin JDK live (<a href="examples/output/kotlin.jdk.live.base.jfr.md">base</a>, <a href="examples/output/kotlin.jdk.live.current.jfr.md">current</a>, <a href="examples/output/kotlin.jdk.live.diff.jfr.md">diff</a>)</li><li>Kotlin JDK lock (<a href="examples/output/kotlin.jdk.lock.base.jfr.md">base</a>, <a href="examples/output/kotlin.jdk.lock.current.jfr.md">current</a>, <a href="examples/output/kotlin.jdk.lock.diff.jfr.md">diff</a>)</li></ul></details>
</td>
</tr>
<tr>
<td><a href="docs/languages/javascript.md">JavaScript⁠/⁠TypeScript</a></td>
<td>
<details><summary><a href="docs/formats/jsc-heap-snapshot.md">JSC heap snapshot</a></summary><ul><li>JavaScript Bun (<a href="examples/output/javascript.bun.base.jsc-heap-snapshot.json.md">base</a>, <a href="examples/output/javascript.bun.current.jsc-heap-snapshot.json.md">current</a>, <a href="examples/output/javascript.bun.diff.jsc-heap-snapshot.json.md">diff</a>)</li><li>JavaScript Safari (<a href="examples/output/javascript.safari.base.jsc-heap-snapshot.json.md">base</a>, <a href="examples/output/javascript.safari.current.jsc-heap-snapshot.json.md">current</a>, <a href="examples/output/javascript.safari.diff.jsc-heap-snapshot.json.md">diff</a>)</li></ul></details>
<details><summary><a href="docs/formats/pprof.md">pprof</a></summary><ul><li>JavaScript node-pprof CPU (<a href="examples/output/javascript.node-pprof.cpu.base.pprof.md">base</a>, <a href="examples/output/javascript.node-pprof.cpu.current.pprof.md">current</a>, <a href="examples/output/javascript.node-pprof.cpu.diff.pprof.md">diff</a>)</li><li>JavaScript node-pprof heap (<a href="examples/output/javascript.node-pprof.heap.base.pprof.md">base</a>, <a href="examples/output/javascript.node-pprof.heap.current.pprof.md">current</a>, <a href="examples/output/javascript.node-pprof.heap.diff.pprof.md">diff</a>)</li></ul></details>
<details><summary><a href="docs/formats/v8-cpu-profile.md">V8 CPU profile</a></summary><ul><li>JavaScript Bun (<a href="examples/output/javascript.bun.base.cpuprofile.md">base</a>, <a href="examples/output/javascript.bun.current.cpuprofile.md">current</a>, <a href="examples/output/javascript.bun.diff.cpuprofile.md">diff</a>)</li><li>JavaScript Chrome (<a href="examples/output/javascript.chrome.base.cpuprofile.md">base</a>, <a href="examples/output/javascript.chrome.current.cpuprofile.md">current</a>, <a href="examples/output/javascript.chrome.diff.cpuprofile.md">diff</a>)</li><li>JavaScript Deno (<a href="examples/output/javascript.deno.base.cpuprofile.md">base</a>, <a href="examples/output/javascript.deno.current.cpuprofile.md">current</a>, <a href="examples/output/javascript.deno.diff.cpuprofile.md">diff</a>)</li><li>JavaScript Node.js (<a href="examples/output/javascript.node.base.cpuprofile.md">base</a>, <a href="examples/output/javascript.node.current.cpuprofile.md">current</a>, <a href="examples/output/javascript.node.diff.cpuprofile.md">diff</a>)</li></ul></details>
<details><summary><a href="docs/formats/v8-heap-profile.md">V8 heap profile</a></summary><ul><li>JavaScript Chrome (<a href="examples/output/javascript.chrome.base.heapprofile.md">base</a>, <a href="examples/output/javascript.chrome.current.heapprofile.md">current</a>, <a href="examples/output/javascript.chrome.diff.heapprofile.md">diff</a>)</li><li>JavaScript Node.js (<a href="examples/output/javascript.node.base.heapprofile.md">base</a>, <a href="examples/output/javascript.node.current.heapprofile.md">current</a>, <a href="examples/output/javascript.node.diff.heapprofile.md">diff</a>)</li></ul></details>
<details><summary><a href="docs/formats/v8-heap-snapshot.md">V8 heap snapshot</a></summary><ul><li>JavaScript Bun (<a href="examples/output/javascript.bun.base.heapsnapshot.md">base</a>, <a href="examples/output/javascript.bun.current.heapsnapshot.md">current</a>, <a href="examples/output/javascript.bun.diff.heapsnapshot.md">diff</a>)</li><li>JavaScript Chrome (<a href="examples/output/javascript.chrome.base.heapsnapshot.md">base</a>, <a href="examples/output/javascript.chrome.current.heapsnapshot.md">current</a>, <a href="examples/output/javascript.chrome.diff.heapsnapshot.md">diff</a>)</li><li>JavaScript Node.js (<a href="examples/output/javascript.node.base.heapsnapshot.md">base</a>, <a href="examples/output/javascript.node.current.heapsnapshot.md">current</a>, <a href="examples/output/javascript.node.diff.heapsnapshot.md">diff</a>)</li></ul></details>
<details><summary><a href="docs/formats/webkit-timeline-recording.md">WebKit timeline recording</a></summary><ul><li>JavaScript Safari (<a href="examples/output/javascript.safari.base.webkit-timeline-recording.json.md">base</a>, <a href="examples/output/javascript.safari.current.webkit-timeline-recording.json.md">current</a>, <a href="examples/output/javascript.safari.diff.webkit-timeline-recording.json.md">diff</a>)</li></ul></details>
</td>
</tr>
<tr>
<td><a href="docs/languages/julia.md">Julia</a></td>
<td>
<details><summary><a href="docs/formats/pprof.md">pprof</a></summary><ul><li>Julia pprof-jl alloc (<a href="examples/output/julia.pprof-jl.alloc.base.pprof.md">base</a>, <a href="examples/output/julia.pprof-jl.alloc.current.pprof.md">current</a>, <a href="examples/output/julia.pprof-jl.alloc.diff.pprof.md">diff</a>)</li><li>Julia pprof-jl CPU (<a href="examples/output/julia.pprof-jl.cpu.base.pprof.md">base</a>, <a href="examples/output/julia.pprof-jl.cpu.current.pprof.md">current</a>, <a href="examples/output/julia.pprof-jl.cpu.diff.pprof.md">diff</a>)</li><li>Julia pprof-jl wall (<a href="examples/output/julia.pprof-jl.wall.base.pprof.md">base</a>, <a href="examples/output/julia.pprof-jl.wall.current.pprof.md">current</a>, <a href="examples/output/julia.pprof-jl.wall.diff.pprof.md">diff</a>)</li></ul></details>
<details><summary><a href="docs/formats/v8-heap-snapshot.md">V8 heap snapshot</a></summary><ul><li>Julia Profile (<a href="examples/output/julia.profile-jl.base.heapsnapshot.md">base</a>, <a href="examples/output/julia.profile-jl.current.heapsnapshot.md">current</a>, <a href="examples/output/julia.profile-jl.diff.heapsnapshot.md">diff</a>)</li></ul></details>
</td>
</tr>
<tr>
<td><a href="docs/languages/php.md">PHP</a></td>
<td>
<details><summary><a href="docs/formats/speedscope.md">Speedscope</a></summary><ul><li>PHP Excimer wall (<a href="examples/output/php.excimer.wall.base.speedscope.json.md">base</a>, <a href="examples/output/php.excimer.wall.current.speedscope.json.md">current</a>, <a href="examples/output/php.excimer.wall.diff.speedscope.json.md">diff</a>)</li></ul></details>
</td>
</tr>
<tr>
<td><a href="docs/languages/python.md">Python</a></td>
<td>
<details><summary><a href="docs/formats/collapsed.md">Collapsed stacks</a></summary><ul><li>Python py-spy CPU (<a href="examples/output/python.py-spy.cpu.base.collapsed.md">base</a>, <a href="examples/output/python.py-spy.cpu.current.collapsed.md">current</a>, <a href="examples/output/python.py-spy.cpu.diff.collapsed.md">diff</a>)</li><li>Python py-spy wall (<a href="examples/output/python.py-spy.wall.base.collapsed.md">base</a>, <a href="examples/output/python.py-spy.wall.current.collapsed.md">current</a>, <a href="examples/output/python.py-spy.wall.diff.collapsed.md">diff</a>)</li></ul></details>
<details><summary><a href="docs/formats/speedscope.md">Speedscope</a></summary><ul><li>Python py-spy CPU (<a href="examples/output/python.py-spy.cpu.base.speedscope.json.md">base</a>, <a href="examples/output/python.py-spy.cpu.current.speedscope.json.md">current</a>, <a href="examples/output/python.py-spy.cpu.diff.speedscope.json.md">diff</a>)</li></ul></details>
<div><a href="docs/formats/systing.md">systing</a></div>
</td>
</tr>
<tr>
<td><a href="docs/languages/ruby.md">Ruby</a></td>
<td>
<details><summary><a href="docs/formats/callgrind.md">Callgrind</a></summary><ul><li>Ruby rbspy CPU (<a href="examples/output/ruby.rbspy.cpu.base.callgrind.md">base</a>, <a href="examples/output/ruby.rbspy.cpu.current.callgrind.md">current</a>, <a href="examples/output/ruby.rbspy.cpu.diff.callgrind.md">diff</a>)</li></ul></details>
<details><summary><a href="docs/formats/collapsed.md">Collapsed stacks</a></summary><ul><li>Ruby rbspy CPU (<a href="examples/output/ruby.rbspy.cpu.base.collapsed.md">base</a>, <a href="examples/output/ruby.rbspy.cpu.current.collapsed.md">current</a>, <a href="examples/output/ruby.rbspy.cpu.diff.collapsed.md">diff</a>)</li></ul></details>
<details><summary><a href="docs/formats/pprof.md">pprof</a></summary><ul><li>Ruby rbspy CPU (<a href="examples/output/ruby.rbspy.cpu.base.pprof.md">base</a>, <a href="examples/output/ruby.rbspy.cpu.current.pprof.md">current</a>, <a href="examples/output/ruby.rbspy.cpu.diff.pprof.md">diff</a>)</li></ul></details>
<details><summary><a href="docs/formats/speedscope.md">Speedscope</a></summary><ul><li>Ruby rbspy CPU (<a href="examples/output/ruby.rbspy.cpu.base.speedscope.json.md">base</a>, <a href="examples/output/ruby.rbspy.cpu.current.speedscope.json.md">current</a>, <a href="examples/output/ruby.rbspy.cpu.diff.speedscope.json.md">diff</a>)</li></ul></details>
</td>
</tr>
<tr>
<td><a href="docs/languages/rust.md">Rust</a></td>
<td>
<details><summary><a href="docs/formats/pprof.md">pprof</a></summary><ul><li>Rust pprof-rs CPU (<a href="examples/output/rust.pprof-rs.cpu.base.pprof.md">base</a>, <a href="examples/output/rust.pprof-rs.cpu.current.pprof.md">current</a>, <a href="examples/output/rust.pprof-rs.cpu.diff.pprof.md">diff</a>)</li></ul></details>
<div><a href="docs/formats/systing.md">systing</a></div>
</td>
</tr>
<tr>
<td><a href="docs/languages/zig.md">Zig</a></td>
<td>
<details><summary><a href="docs/formats/pprof.md">pprof</a></summary><ul><li>Zig gperftools CPU (<a href="examples/output/zig.gperftools.cpu.base.pprof.md">base</a>, <a href="examples/output/zig.gperftools.cpu.current.pprof.md">current</a>, <a href="examples/output/zig.gperftools.cpu.diff.pprof.md">diff</a>)</li><li>Zig gperftools heap (<a href="examples/output/zig.gperftools.heap.base.pprof.md">base</a>, <a href="examples/output/zig.gperftools.heap.current.pprof.md">current</a>, <a href="examples/output/zig.gperftools.heap.diff.pprof.md">diff</a>)</li></ul></details>
</td>
</tr>
</tbody>
</table>

<!-- LANGUAGE_MATRIX END -->

<!-- prettier-ignore-end -->

## Contributing

Stars are always welcome!

For bugs and feature requests,
[create an issue](https://github.com/TomerAberbach/profiler-md/issues/new).

## License

[MIT](https://github.com/TomerAberbach/profiler-md/blob/main/license) ©
[Tomer Aberbach](https://github.com/TomerAberbach)

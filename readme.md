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

> [!NOTE]
>
> This package is in **beta** and I'm excited for you to try it!
>
> I'd love your feedback! Share suggestions, bug reports, feature requests, or
> other thoughts by
> [filing an issue](https://github.com/TomerAberbach/profiler-md/issues/new).

## Features

- **Polyglot:** supports many profile and heap snapshot formats across many
  languages
- **Diffing:** compare two profiles or two heap snapshots to see what changed
- **Heap analysis:** reports self and retained size with dominator-based
  retention for heap snapshots
- **Source maps:** resolves minified and transpiled locations back to original
  sources
- **Zero config:** auto-detects the format, transparently decompresses
  gzip/brotli, and reads from stdin
- **Readable in the terminal:** ANSI syntax highlighting with heat-map coloring
  and automatic paging
- **Configurable:** control the number of top entries shown, working directory
  for relative paths, third-party detection, and entry filtering
- **CLI and API:** use it from the command line or programmatically

## Languages and formats

We list a format for a language only if its ecosystem's tools natively generate
it. Third-party tools can often convert others, though.

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
<div><a href="docs/formats/pprof.md">pprof</a>:<ul><li>C CPU (<a href="examples/output/c.gperftools.cpu.base.pprof.md">base</a>, <a href="examples/output/c.gperftools.cpu.current.pprof.md">current</a>, <a href="examples/output/c.gperftools.cpu.diff.pprof.md">diff</a>)</li><li>C Heap (<a href="examples/output/c.gperftools.heap.base.pprof.md">base</a>, <a href="examples/output/c.gperftools.heap.current.pprof.md">current</a>, <a href="examples/output/c.gperftools.heap.diff.pprof.md">diff</a>)</li><li>C++ CPU (<a href="examples/output/cpp.gperftools.cpu.base.pprof.md">base</a>, <a href="examples/output/cpp.gperftools.cpu.current.pprof.md">current</a>, <a href="examples/output/cpp.gperftools.cpu.diff.pprof.md">diff</a>)</li><li>C++ Heap (<a href="examples/output/cpp.gperftools.heap.base.pprof.md">base</a>, <a href="examples/output/cpp.gperftools.heap.current.pprof.md">current</a>, <a href="examples/output/cpp.gperftools.heap.diff.pprof.md">diff</a>)</li></ul></div>
<div><a href="docs/formats/systing.md">systing profile export</a>: <a href="examples/output/c.systing.cpu.base.systing.md">base</a>, <a href="examples/output/c.systing.cpu.current.systing.md">current</a>, <a href="examples/output/c.systing.cpu.diff.systing.md">diff</a></div>
</td>
</tr>
<tr>
<td><a href="docs/languages/csharp.md">C#⁠/⁠F#</a></td>
<td>
<div><a href="docs/formats/speedscope.md">Speedscope</a>:<ul><li>C# (<a href="examples/output/csharp.dotnet-trace.base.speedscope.json.md">base</a>, <a href="examples/output/csharp.dotnet-trace.current.speedscope.json.md">current</a>, <a href="examples/output/csharp.dotnet-trace.diff.speedscope.json.md">diff</a>)</li><li>F# (<a href="examples/output/fsharp.dotnet-trace.base.speedscope.json.md">base</a>, <a href="examples/output/fsharp.dotnet-trace.current.speedscope.json.md">current</a>, <a href="examples/output/fsharp.dotnet-trace.diff.speedscope.json.md">diff</a>)</li></ul></div>
</td>
</tr>
<tr>
<td><a href="docs/languages/elixir.md">Elixir⁠/⁠Erlang</a></td>
<td>
<div><a href="docs/formats/collapsed.md">Collapsed stacks</a>:<ul><li>Elixir (<a href="examples/output/elixir.eflambe.cpu.base.collapsed.md">base</a>, <a href="examples/output/elixir.eflambe.cpu.current.collapsed.md">current</a>, <a href="examples/output/elixir.eflambe.cpu.diff.collapsed.md">diff</a>)</li><li>Erlang (<a href="examples/output/erlang.eflambe.cpu.base.collapsed.md">base</a>, <a href="examples/output/erlang.eflambe.cpu.current.collapsed.md">current</a>, <a href="examples/output/erlang.eflambe.cpu.diff.collapsed.md">diff</a>)</li></ul></div>
</td>
</tr>
<tr>
<td><a href="docs/languages/go.md">Go</a></td>
<td>
<div><a href="docs/formats/pprof.md">pprof</a>:<ul><li>Block (<a href="examples/output/go.pprof.block.base.pprof.md">base</a>, <a href="examples/output/go.pprof.block.current.pprof.md">current</a>, <a href="examples/output/go.pprof.block.diff.pprof.md">diff</a>)</li><li>CPU (<a href="examples/output/go.pprof.cpu.base.pprof.md">base</a>, <a href="examples/output/go.pprof.cpu.current.pprof.md">current</a>, <a href="examples/output/go.pprof.cpu.diff.pprof.md">diff</a>)</li><li>Goroutine (<a href="examples/output/go.pprof.goroutine.base.pprof.md">base</a>, <a href="examples/output/go.pprof.goroutine.current.pprof.md">current</a>, <a href="examples/output/go.pprof.goroutine.diff.pprof.md">diff</a>)</li><li>Heap (<a href="examples/output/go.pprof.heap.base.pprof.md">base</a>, <a href="examples/output/go.pprof.heap.current.pprof.md">current</a>, <a href="examples/output/go.pprof.heap.diff.pprof.md">diff</a>)</li><li>Heap allocations (<a href="examples/output/go.pprof.heap-alloc.base.pprof.md">base</a>, <a href="examples/output/go.pprof.heap-alloc.current.pprof.md">current</a>, <a href="examples/output/go.pprof.heap-alloc.diff.pprof.md">diff</a>)</li><li>Mutex (<a href="examples/output/go.pprof.mutex.base.pprof.md">base</a>, <a href="examples/output/go.pprof.mutex.current.pprof.md">current</a>, <a href="examples/output/go.pprof.mutex.diff.pprof.md">diff</a>)</li><li>Thread creation (<a href="examples/output/go.pprof.threadcreate.base.pprof.md">base</a>, <a href="examples/output/go.pprof.threadcreate.current.pprof.md">current</a>, <a href="examples/output/go.pprof.threadcreate.diff.pprof.md">diff</a>)</li></ul></div>
</td>
</tr>
<tr>
<td><a href="docs/languages/java.md">Java⁠/⁠Kotlin</a></td>
<td>
<div><a href="docs/formats/jfr.md">JFR</a>:<ul><li>Java async-profiler All (<a href="examples/output/java.async-profiler.all.base.jfr.md">base</a>, <a href="examples/output/java.async-profiler.all.current.jfr.md">current</a>, <a href="examples/output/java.async-profiler.all.diff.jfr.md">diff</a>)</li><li>Java async-profiler Allocations (<a href="examples/output/java.async-profiler.alloc.base.jfr.md">base</a>, <a href="examples/output/java.async-profiler.alloc.current.jfr.md">current</a>, <a href="examples/output/java.async-profiler.alloc.diff.jfr.md">diff</a>)</li><li>Java async-profiler CPU (<a href="examples/output/java.async-profiler.cpu.base.jfr.md">base</a>, <a href="examples/output/java.async-profiler.cpu.current.jfr.md">current</a>, <a href="examples/output/java.async-profiler.cpu.diff.jfr.md">diff</a>)</li><li>Java async-profiler Live (<a href="examples/output/java.async-profiler.live.base.jfr.md">base</a>, <a href="examples/output/java.async-profiler.live.current.jfr.md">current</a>, <a href="examples/output/java.async-profiler.live.diff.jfr.md">diff</a>)</li><li>Java async-profiler Lock (<a href="examples/output/java.async-profiler.lock.base.jfr.md">base</a>, <a href="examples/output/java.async-profiler.lock.current.jfr.md">current</a>, <a href="examples/output/java.async-profiler.lock.diff.jfr.md">diff</a>)</li><li>Java async-profiler Native memory (<a href="examples/output/java.async-profiler.nativemem.base.jfr.md">base</a>, <a href="examples/output/java.async-profiler.nativemem.current.jfr.md">current</a>, <a href="examples/output/java.async-profiler.nativemem.diff.jfr.md">diff</a>)</li><li>Java async-profiler Wall (<a href="examples/output/java.async-profiler.wall.base.jfr.md">base</a>, <a href="examples/output/java.async-profiler.wall.current.jfr.md">current</a>, <a href="examples/output/java.async-profiler.wall.diff.jfr.md">diff</a>)</li><li>Java JDK All (<a href="examples/output/java.jdk.all.base.jfr.md">base</a>, <a href="examples/output/java.jdk.all.current.jfr.md">current</a>, <a href="examples/output/java.jdk.all.diff.jfr.md">diff</a>)</li><li>Java JDK Allocations (<a href="examples/output/java.jdk.alloc.base.jfr.md">base</a>, <a href="examples/output/java.jdk.alloc.current.jfr.md">current</a>, <a href="examples/output/java.jdk.alloc.diff.jfr.md">diff</a>)</li><li>Java JDK CPU (<a href="examples/output/java.jdk.cpu.base.jfr.md">base</a>, <a href="examples/output/java.jdk.cpu.current.jfr.md">current</a>, <a href="examples/output/java.jdk.cpu.diff.jfr.md">diff</a>)</li><li>Java JDK Live (<a href="examples/output/java.jdk.live.base.jfr.md">base</a>, <a href="examples/output/java.jdk.live.current.jfr.md">current</a>, <a href="examples/output/java.jdk.live.diff.jfr.md">diff</a>)</li><li>Java JDK Lock (<a href="examples/output/java.jdk.lock.base.jfr.md">base</a>, <a href="examples/output/java.jdk.lock.current.jfr.md">current</a>, <a href="examples/output/java.jdk.lock.diff.jfr.md">diff</a>)</li><li>Kotlin async-profiler All (<a href="examples/output/kotlin.async-profiler.all.base.jfr.md">base</a>, <a href="examples/output/kotlin.async-profiler.all.current.jfr.md">current</a>, <a href="examples/output/kotlin.async-profiler.all.diff.jfr.md">diff</a>)</li><li>Kotlin async-profiler Allocations (<a href="examples/output/kotlin.async-profiler.alloc.base.jfr.md">base</a>, <a href="examples/output/kotlin.async-profiler.alloc.current.jfr.md">current</a>, <a href="examples/output/kotlin.async-profiler.alloc.diff.jfr.md">diff</a>)</li><li>Kotlin async-profiler CPU (<a href="examples/output/kotlin.async-profiler.cpu.base.jfr.md">base</a>, <a href="examples/output/kotlin.async-profiler.cpu.current.jfr.md">current</a>, <a href="examples/output/kotlin.async-profiler.cpu.diff.jfr.md">diff</a>)</li><li>Kotlin async-profiler Live (<a href="examples/output/kotlin.async-profiler.live.base.jfr.md">base</a>, <a href="examples/output/kotlin.async-profiler.live.current.jfr.md">current</a>, <a href="examples/output/kotlin.async-profiler.live.diff.jfr.md">diff</a>)</li><li>Kotlin async-profiler Lock (<a href="examples/output/kotlin.async-profiler.lock.base.jfr.md">base</a>, <a href="examples/output/kotlin.async-profiler.lock.current.jfr.md">current</a>, <a href="examples/output/kotlin.async-profiler.lock.diff.jfr.md">diff</a>)</li><li>Kotlin async-profiler Native memory (<a href="examples/output/kotlin.async-profiler.nativemem.base.jfr.md">base</a>, <a href="examples/output/kotlin.async-profiler.nativemem.current.jfr.md">current</a>, <a href="examples/output/kotlin.async-profiler.nativemem.diff.jfr.md">diff</a>)</li><li>Kotlin async-profiler Wall (<a href="examples/output/kotlin.async-profiler.wall.base.jfr.md">base</a>, <a href="examples/output/kotlin.async-profiler.wall.current.jfr.md">current</a>, <a href="examples/output/kotlin.async-profiler.wall.diff.jfr.md">diff</a>)</li><li>Kotlin JDK All (<a href="examples/output/kotlin.jdk.all.base.jfr.md">base</a>, <a href="examples/output/kotlin.jdk.all.current.jfr.md">current</a>, <a href="examples/output/kotlin.jdk.all.diff.jfr.md">diff</a>)</li><li>Kotlin JDK Allocations (<a href="examples/output/kotlin.jdk.alloc.base.jfr.md">base</a>, <a href="examples/output/kotlin.jdk.alloc.current.jfr.md">current</a>, <a href="examples/output/kotlin.jdk.alloc.diff.jfr.md">diff</a>)</li><li>Kotlin JDK CPU (<a href="examples/output/kotlin.jdk.cpu.base.jfr.md">base</a>, <a href="examples/output/kotlin.jdk.cpu.current.jfr.md">current</a>, <a href="examples/output/kotlin.jdk.cpu.diff.jfr.md">diff</a>)</li><li>Kotlin JDK Live (<a href="examples/output/kotlin.jdk.live.base.jfr.md">base</a>, <a href="examples/output/kotlin.jdk.live.current.jfr.md">current</a>, <a href="examples/output/kotlin.jdk.live.diff.jfr.md">diff</a>)</li><li>Kotlin JDK Lock (<a href="examples/output/kotlin.jdk.lock.base.jfr.md">base</a>, <a href="examples/output/kotlin.jdk.lock.current.jfr.md">current</a>, <a href="examples/output/kotlin.jdk.lock.diff.jfr.md">diff</a>)</li></ul></div>
<div><a href="docs/formats/collapsed.md">Collapsed stacks</a>:<ul><li>Java (<a href="examples/output/java.async-profiler.cpu.base.collapsed.md">base</a>, <a href="examples/output/java.async-profiler.cpu.current.collapsed.md">current</a>, <a href="examples/output/java.async-profiler.cpu.diff.collapsed.md">diff</a>)</li><li>Kotlin (<a href="examples/output/kotlin.async-profiler.cpu.base.collapsed.md">base</a>, <a href="examples/output/kotlin.async-profiler.cpu.current.collapsed.md">current</a>, <a href="examples/output/kotlin.async-profiler.cpu.diff.collapsed.md">diff</a>)</li></ul></div>
</td>
</tr>
<tr>
<td><a href="docs/languages/javascript.md">JavaScript⁠/⁠TypeScript</a></td>
<td>
<div><a href="docs/formats/jsc-heap-snapshot.md">JSC heap snapshot</a>: <a href="examples/output/javascript.bun.base.jsc-heap-snapshot.json.md">base</a>, <a href="examples/output/javascript.bun.current.jsc-heap-snapshot.json.md">current</a>, <a href="examples/output/javascript.bun.diff.jsc-heap-snapshot.json.md">diff</a></div>
<div><a href="docs/formats/pprof.md">pprof</a>:<ul><li>CPU (<a href="examples/output/javascript.pprof.cpu.base.pprof.md">base</a>, <a href="examples/output/javascript.pprof.cpu.current.pprof.md">current</a>, <a href="examples/output/javascript.pprof.cpu.diff.pprof.md">diff</a>)</li><li>Heap (<a href="examples/output/javascript.pprof.heap.base.pprof.md">base</a>, <a href="examples/output/javascript.pprof.heap.current.pprof.md">current</a>, <a href="examples/output/javascript.pprof.heap.diff.pprof.md">diff</a>)</li></ul></div>
<div><a href="docs/formats/v8-cpu-profile.md">V8 CPU profile</a>:<ul><li>Bun (<a href="examples/output/javascript.bun.base.cpuprofile.md">base</a>, <a href="examples/output/javascript.bun.current.cpuprofile.md">current</a>, <a href="examples/output/javascript.bun.diff.cpuprofile.md">diff</a>)</li><li>Chrome (<a href="examples/output/javascript.chrome.base.cpuprofile.md">base</a>, <a href="examples/output/javascript.chrome.current.cpuprofile.md">current</a>, <a href="examples/output/javascript.chrome.diff.cpuprofile.md">diff</a>)</li><li>Deno (<a href="examples/output/javascript.deno.base.cpuprofile.md">base</a>, <a href="examples/output/javascript.deno.current.cpuprofile.md">current</a>, <a href="examples/output/javascript.deno.diff.cpuprofile.md">diff</a>)</li><li>Node.js (<a href="examples/output/javascript.node.base.cpuprofile.md">base</a>, <a href="examples/output/javascript.node.current.cpuprofile.md">current</a>, <a href="examples/output/javascript.node.diff.cpuprofile.md">diff</a>)</li></ul></div>
<div><a href="docs/formats/v8-heap-profile.md">V8 heap profile</a>:<ul><li>Chrome (<a href="examples/output/javascript.chrome.base.heapprofile.md">base</a>, <a href="examples/output/javascript.chrome.current.heapprofile.md">current</a>, <a href="examples/output/javascript.chrome.diff.heapprofile.md">diff</a>)</li><li>Node.js (<a href="examples/output/javascript.node.base.heapprofile.md">base</a>, <a href="examples/output/javascript.node.current.heapprofile.md">current</a>, <a href="examples/output/javascript.node.diff.heapprofile.md">diff</a>)</li></ul></div>
<div><a href="docs/formats/v8-heap-snapshot.md">V8 heap snapshot</a>:<ul><li>Bun (<a href="examples/output/javascript.bun.base.heapsnapshot.md">base</a>, <a href="examples/output/javascript.bun.current.heapsnapshot.md">current</a>, <a href="examples/output/javascript.bun.diff.heapsnapshot.md">diff</a>)</li><li>Chrome (<a href="examples/output/javascript.chrome.base.heapsnapshot.md">base</a>, <a href="examples/output/javascript.chrome.current.heapsnapshot.md">current</a>, <a href="examples/output/javascript.chrome.diff.heapsnapshot.md">diff</a>)</li><li>Node.js (<a href="examples/output/javascript.node.base.heapsnapshot.md">base</a>, <a href="examples/output/javascript.node.current.heapsnapshot.md">current</a>, <a href="examples/output/javascript.node.diff.heapsnapshot.md">diff</a>)</li></ul></div>
<div><a href="docs/formats/webkit-timeline-recording.md">WebKit timeline recording</a>: <a href="examples/output/javascript.safari.base.webkit-timeline-recording.json.md">base</a>, <a href="examples/output/javascript.safari.current.webkit-timeline-recording.json.md">current</a>, <a href="examples/output/javascript.safari.diff.webkit-timeline-recording.json.md">diff</a></div>
</td>
</tr>
<tr>
<td><a href="docs/languages/julia.md">Julia</a></td>
<td>
<div><a href="docs/formats/pprof.md">pprof</a>:<ul><li>Allocations (<a href="examples/output/julia.pprof-jl.alloc.base.pprof.md">base</a>, <a href="examples/output/julia.pprof-jl.alloc.current.pprof.md">current</a>, <a href="examples/output/julia.pprof-jl.alloc.diff.pprof.md">diff</a>)</li><li>CPU (<a href="examples/output/julia.pprof-jl.cpu.base.pprof.md">base</a>, <a href="examples/output/julia.pprof-jl.cpu.current.pprof.md">current</a>, <a href="examples/output/julia.pprof-jl.cpu.diff.pprof.md">diff</a>)</li></ul></div>
</td>
</tr>
<tr>
<td><a href="docs/languages/php.md">PHP</a></td>
<td>
<div><a href="docs/formats/speedscope.md">Speedscope</a>: <a href="examples/output/php.excimer.wall.base.speedscope.json.md">base</a>, <a href="examples/output/php.excimer.wall.current.speedscope.json.md">current</a>, <a href="examples/output/php.excimer.wall.diff.speedscope.json.md">diff</a></div>
</td>
</tr>
<tr>
<td><a href="docs/languages/python.md">Python</a></td>
<td>
<div><a href="docs/formats/collapsed.md">Collapsed stacks</a>:<ul><li>CPU (<a href="examples/output/python.py-spy.cpu.base.collapsed.md">base</a>, <a href="examples/output/python.py-spy.cpu.current.collapsed.md">current</a>, <a href="examples/output/python.py-spy.cpu.diff.collapsed.md">diff</a>)</li><li>Wall (<a href="examples/output/python.py-spy.wall.base.collapsed.md">base</a>, <a href="examples/output/python.py-spy.wall.current.collapsed.md">current</a>, <a href="examples/output/python.py-spy.wall.diff.collapsed.md">diff</a>)</li></ul></div>
<div><a href="docs/formats/speedscope.md">Speedscope</a>: <a href="examples/output/python.py-spy.cpu.base.speedscope.json.md">base</a>, <a href="examples/output/python.py-spy.cpu.current.speedscope.json.md">current</a>, <a href="examples/output/python.py-spy.cpu.diff.speedscope.json.md">diff</a></div>
<div><a href="docs/formats/systing.md">systing profile export</a></div>
</td>
</tr>
<tr>
<td><a href="docs/languages/ruby.md">Ruby</a></td>
<td>
<div><a href="docs/formats/collapsed.md">Collapsed stacks</a>: <a href="examples/output/ruby.rbspy.cpu.base.collapsed.md">base</a>, <a href="examples/output/ruby.rbspy.cpu.current.collapsed.md">current</a>, <a href="examples/output/ruby.rbspy.cpu.diff.collapsed.md">diff</a></div>
<div><a href="docs/formats/pprof.md">pprof</a>: <a href="examples/output/ruby.rbspy.cpu.base.pprof.md">base</a>, <a href="examples/output/ruby.rbspy.cpu.current.pprof.md">current</a>, <a href="examples/output/ruby.rbspy.cpu.diff.pprof.md">diff</a></div>
<div><a href="docs/formats/speedscope.md">Speedscope</a>: <a href="examples/output/ruby.rbspy.cpu.base.speedscope.json.md">base</a>, <a href="examples/output/ruby.rbspy.cpu.current.speedscope.json.md">current</a>, <a href="examples/output/ruby.rbspy.cpu.diff.speedscope.json.md">diff</a></div>
</td>
</tr>
<tr>
<td><a href="docs/languages/rust.md">Rust</a></td>
<td>
<div><a href="docs/formats/pprof.md">pprof</a>: <a href="examples/output/rust.pprof-rs.cpu.base.pprof.md">base</a>, <a href="examples/output/rust.pprof-rs.cpu.current.pprof.md">current</a>, <a href="examples/output/rust.pprof-rs.cpu.diff.pprof.md">diff</a></div>
<div><a href="docs/formats/systing.md">systing profile export</a></div>
</td>
</tr>
</tbody>
</table>

<!-- LANGUAGE_MATRIX END -->

<!-- prettier-ignore-end -->

## Install

```sh
$ npm i -g profiler-md
```

## Usage

### CLI

<!-- prettier-ignore-start -->

<!-- CLI_HELP START -->

```sh
$ profiler-md --help
Usage: profiler-md [(-h/--help [TOPIC])] [-f/--format FORMAT] [-r/--origin
       ORIGIN] [-o/--output FILE] [--top-n N] [--base-url STRING] [--source-maps
       GLOB...] [--match REGEX=REPLACEMENT...] [--third-party GLOB...] [
       --no-pager] [(--color | --no-color)] ([FILE] | BASE CURRENT)

Converts performance profiles to human and LLM friendly Markdown.

  -h, --help [TOPIC]          Show this help message or topic docs
  -f, --format FORMAT         Input profile format (default: auto)
  -r, --origin ORIGIN         Input profile origin (default: auto)
  -o, --output FILE           Output file (default: - for stdout)
  --top-n N                   Number of top entries to show (default: 20)
  --base-url STRING           Base URL or path to show paths relative to, or 
                              "auto" to infer the profiled files' common 
                              ancestor directory (default: cwd)
  --source-maps GLOB          Source maps (JSON or inline) to apply to profile 
                              locations (repeatable)
  --match REGEX=REPLACEMENT   Treat locations matching REGEX as REPLACEMENT 
                              when matching entries across diffed profiles 
                              (repeatable)
  --third-party GLOB          Additional URLs or paths to consider third-party 
                              (repeatable)
  --no-pager                  Disable stdout output paging (default: auto)
  --color                     Enable or disable ANSI syntax highlighting 
                              (default: auto)
  --no-color                
  FILE                        Profile to convert (reads from stdin if omitted)
  BASE                        Base profile to diff
  CURRENT                     Current profile to diff against the base

Formats: collapsed, jfr, jsc-heap-snapshot, pprof, speedscope, systing, v8-cpu-profile, v8-heap-profile, v8-heap-snapshot, webkit-timeline-recording
Origins: beam, bun, deno, dotnet-trace, go, jvm, node, node-pprof, pprof-jl, pprof-rs, py-spy, rbspy, safari, systing, tachyon, unknown
Languages: c/cpp, csharp/fsharp, elixir/erlang, go, java/kotlin, javascript/typescript, julia, php, python, ruby, rust
```

<!-- CLI_HELP END -->

<!-- prettier-ignore-end -->

### API

```js
import { openAsBlob, readFileSync } from 'node:fs'
import {
  defaultCategorizeEntries,
  defaultMatchEntry,
  defaultShowEntry,
  diffProfiles,
  diffProfilesAsync,
  profileToMd,
  profileToMdAsync,
} from 'profiler-md'

// Auto-detect format and origin (async)
console.log(await profileToMdAsync(await openAsBlob(`example.cpuprofile`)))
console.log(await profileToMdAsync(await openAsBlob(`example.pprof`)))

// Explicit format
console.log(
  await profileToMdAsync({
    data: await openAsBlob(`example.pprof`),
    format: `pprof`,
  }),
)
// Explicit origin
console.log(
  await profileToMdAsync({
    data: await openAsBlob(`example.cpuprofile`),
    origin: `deno`,
  }),
)

// Synchronous usage (auto-detect)
console.log(profileToMd(readFileSync(`example.cpuprofile`, `utf8`)))
console.log(profileToMd(readFileSync(`example.pprof`)))

// Synchronous usage with explicit format and origin
console.log(
  profileToMd({
    data: readFileSync(`example.pprof`),
    format: `pprof`,
    origin: `node-pprof`,
  }),
)

// Diff two profiles or two heap snapshots (async, auto-detect)
console.log(
  await diffProfilesAsync(
    await openAsBlob(`base.cpuprofile`),
    await openAsBlob(`current.cpuprofile`),
  ),
)
console.log(
  await diffProfilesAsync(
    await openAsBlob(`base.heapsnapshot`),
    await openAsBlob(`current.heapsnapshot`),
  ),
)

// Synchronous diff with explicit format
console.log(
  diffProfiles(
    { data: readFileSync(`base.pprof`), format: `pprof` },
    { data: readFileSync(`current.pprof`), format: `pprof` },
  ),
)

// Complex usage
const options = {
  // Show top 10 functions instead of the default 20.
  topN: 10,
  // Make paths relative to a custom base URL or directory, or pass `auto` to
  // infer the profiled files' common ancestor directory.
  baseURL: `/path/to/project`,
  matchEntry: entry => {
    if (entry.location?.url.pathname.includes(`/bundle.`)) {
      // Match bundled entries when diffing by name only, ignoring
      // content-hashed filenames.
      return { name: entry.name }
    }
    return defaultMatchEntry(entry)
  },
  categorizeEntries: (entries, context) => {
    const categories = defaultCategorizeEntries(entries, context)
    return entries.map((entry, index) =>
      // Treat an additional vendor directory as third-party.
      entry.location?.url?.pathname.includes(`/vendor/`)
        ? `third-party`
        : categories[index],
    )
  },
  showEntry: entry =>
    defaultShowEntry(entry) &&
    // Exclude entries from a specific file.
    !entry.location?.includes(`/path/to/project/src/noisy`),
}
console.log(await profileToMdAsync(await openAsBlob(`example.pprof`), options))
console.log(
  await profileToMdAsync(await openAsBlob(`example.cpuprofile`), options),
)

// The same options also apply to diffs. `matchEntry` only takes effect here,
// where it controls which entries are considered the same across the two sides.
console.log(
  await diffProfilesAsync(
    await openAsBlob(`base.pprof`),
    await openAsBlob(`current.pprof`),
    options,
  ),
)
```

## Shell completions

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

## Skills

Use the [`profiler-md` skill](./skills/profile-optimize/SKILL.md) to have an
agent profile and optimize your code:

```sh
$ npx skills add TomerAberbach/profiler-md --skill profile-optimize
```

See [skills.sh](https://skills.sh/docs) for more info.

Fun fact: the skill has profiled and optimized `profiler-md` itself!

## Contributing

Stars are always welcome!

For bugs and feature requests,
[please create an issue](https://github.com/TomerAberbach/profiler-md/issues/new).

## License

[MIT](https://github.com/TomerAberbach/profiler-md/blob/main/license) ©
[Tomer Aberbach](https://github.com/TomerAberbach)

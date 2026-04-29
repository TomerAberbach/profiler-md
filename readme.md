<h1 align="center">
  profiler-md
</h1>

<div align="center">
  <a href="https://npmjs.org/package/profiler-md">
    <img src="https://badgen.net/npm/v/profiler-md" alt="version" />
  </a>
  <a href="https://github.com/TomerAberbach/profiler-md/actions">
    <img src="https://github.com/TomerAberbach/profiler-md/workflows/CI/badge.svg" alt="CI" />
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
> This package is in a **beta** state and I'm excited for you to try it out!
>
> I'd love your feedback! Share any suggestions, bug reports, feature requests,
> or general thoughts by
> [filing an issue](https://github.com/TomerAberbach/profiler-md/issues/new).

## Features

- **Multi-format:** supports [pprof](https://github.com/google/pprof),
  [Speedscope](https://github.com/jlfwong/speedscope),
  [V8 CPU profiles](https://nodejs.org/api/cli.html#cpu-prof),
  [V8 heap profiles](https://nodejs.org/api/cli.html#--heap-prof), and
  [V8 heap snapshots](https://nodejs.org/api/cli.html#heapsnapshot-near-heap-limitmax-count)
- **Multi-language:** JS/TS via V8 formats (Node.js, Bun, Deno); Go, Python,
  Rust, Java, and more via pprof and Speedscope
- **Configurable:** control the number of top entries shown, working directory
  for relative paths, third-party detection, and entry filtering
- **CLI and API:** usable on the command-line or programmatically

## Languages and formats

<!-- LANGUAGE_MATRIX START -->

| Language                                                                              | Formats                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [C](docs/languages/c.md)/[C++](docs/languages/cpp.md)                                 | [pprof](docs/formats/pprof.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [Go](docs/languages/go.md)                                                            | [pprof](docs/formats/pprof.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [Java](docs/languages/java.md)/[Kotlin](docs/languages/kotlin.md)                     | [pprof](docs/formats/pprof.md), [Speedscope](docs/formats/speedscope.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| [JavaScript](docs/languages/javascript.md)/[TypeScript](docs/languages/typescript.md) | [V8 CPU profile](docs/formats/v8-cpu-profile.md) (examples: [Node.js](examples/node.cpuprofile.md), [Deno](examples/deno.cpuprofile.md), [Bun](examples/bun.cpuprofile.md)), [V8 heap profile](docs/formats/v8-heap-profile.md) (examples: [Node.js](examples/node.heapprofile.md)), [V8 heap snapshot](docs/formats/v8-heap-snapshot.md) (examples: [Node.js](examples/node.heapsnapshot.md)), [pprof](docs/formats/pprof.md) (examples: [Node.js](examples/node.pprof.md)), [Speedscope](docs/formats/speedscope.md) (examples: [Node.js](examples/node.speedscope.json.md)) |
| [PHP](docs/languages/php.md)                                                          | [Speedscope](docs/formats/speedscope.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| [Python](docs/languages/python.md)                                                    | [pprof](docs/formats/pprof.md), [Speedscope](docs/formats/speedscope.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| [Ruby](docs/languages/ruby.md)                                                        | [Speedscope](docs/formats/speedscope.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| [Rust](docs/languages/rust.md)                                                        | [pprof](docs/formats/pprof.md) (examples: [1](examples/rust1.pprof.md), [2](examples/rust2.pprof.md)), [Speedscope](docs/formats/speedscope.md)                                                                                                                                                                                                                                                                                                                                                                                                                                |

<!-- LANGUAGE_MATRIX END -->

## Install

```sh
$ npm i profiler-md
```

## Usage

### CLI

<!-- CLI_HELP START -->

```sh
$ profiler-md --help

  Converts performance profiles to human and LLM friendly Markdown.

  Usage: profiler-md [options] [file]
         profiler-md --help [format|language]

  Options:
    -f, --format <format> Profile format, auto-detected from content if omitted
    -o, --output <file>   Output file (default: - for stdout)
    --top-n <n>           Number of top entries to show (default: 20)
    --cwd <path>          Working directory for relative file paths in output
    --third-party <glob>  Mark URLs matching this glob as third-party
                          (repeatable; default: node_modules)
    --source-maps <glob>  Apply source maps matching this glob to profile
                          locations; files may be source map JSON or contain
                          inline source map comments (repeatable)
    --help [format|language] Show this help message or topic docs

  Formats: speedscope, v8-cpu-profile, v8-heap-profile, v8-heap-snapshot, pprof
  Languages: c, cpp, go, java, kotlin, javascript, typescript, php, python, ruby, rust
```

<!-- CLI_HELP END -->

### API

```js
import { readFile } from 'node:fs/promises'
import {
  defaultIncludeEntry,
  defaultIsThirdPartyEntry,
  pprofToMd,
  speedscopeProfileToMd,
  v8CpuProfileToMd,
  v8HeapProfileToMd,
  v8HeapSnapshotToMd,
} from 'profiler-md'

const pprofData = await readFile(`example.pprof`)
const speedscopeProfileData = await readFile(`example.speedscope.json`)
const v8CpuProfileData = await readFile(`example.cpuprofile`)
const v8HeapProfileData = await readFile(`example.heapprofile`)
const v8HeapSnapshotData = await readFile(`example.heapsnapshot`)

// Basic usage
console.log(pprofToMd(pprofData))
console.log(speedscopeProfileToMd(speedscopeProfileData))
console.log(v8CpuProfileToMd(v8CpuProfileData))
console.log(v8HeapProfileToMd(v8HeapProfileData))
console.log(v8HeapSnapshotToMd(v8HeapSnapshotData))

// Complex usage
const options = {
  // Show top 10 functions instead of the default 20.
  topN: 10,
  // Make paths relative to a custom directory.
  cwd: `/path/to/project`,
  isThirdPartyEntry: entry =>
    defaultIsThirdPartyEntry(entry) ||
    // Treat an additional vendor directory as third-party.
    !!entry.location?.url.pathname.includes(`/vendor/`),
  includeEntry: entry =>
    defaultIncludeEntry(entry) &&
    // Exclude entries from a specific file.
    !entry.location?.includes(`/path/to/project/src/noisy`),
}
console.log(pprofToMd(pprofData, options))
console.log(speedscopeProfileToMd(speedscopeProfileData, options))
console.log(v8CpuProfileToMd(v8CpuProfileData, options))
console.log(v8HeapProfileToMd(v8HeapProfileData, options))
console.log(v8HeapSnapshotToMd(v8HeapSnapshotData, options))
```

## Skills

Use this `profiler-md` skill to have an agent profile and optimize your code:

```sh
$ npx skills add TomerAberbach/profiler-md --skill profile-optimize
```

See [skills.sh](https://skills.sh/docs) for more info.

Fun fact: the skill has been used to profile and optimize `profiler-md` using
itself!

## Contributing

Stars are always welcome!

For bugs and feature requests,
[please create an issue](https://github.com/TomerAberbach/profiler-md/issues/new).

## License

[MIT](https://github.com/TomerAberbach/profiler-md/blob/main/license) ©
[Tomer Aberbach](https://github.com/TomerAberbach)

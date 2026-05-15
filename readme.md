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
> This package is in a **beta** state and I'm excited for you to try it out!
>
> I'd love your feedback! Share any suggestions, bug reports, feature requests,
> or general thoughts by
> [filing an issue](https://github.com/TomerAberbach/profiler-md/issues/new).

## Features

- **Polyglot:** supports many formats across many languages
- **Configurable:** control the number of top entries shown, working directory
  for relative paths, third-party detection, and entry filtering
- **CLI and API:** usable on the command-line or programmatically

## Languages and formats

<!-- LANGUAGE_MATRIX START -->

| Language                                                                              | Formats                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [C](docs/languages/c.md)/[C++](docs/languages/cpp.md)                                 | [pprof](docs/formats/pprof.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [Go](docs/languages/go.md)                                                            | [pprof](docs/formats/pprof.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [Java](docs/languages/java.md)/[Kotlin](docs/languages/kotlin.md)                     | [pprof](docs/formats/pprof.md), [Speedscope](docs/formats/speedscope.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [JavaScript](docs/languages/javascript.md)/[TypeScript](docs/languages/typescript.md) | [JSC heap snapshot](docs/formats/jsc-heap-snapshot.md) ([Safari](examples/jsc-heap-snapshot.json.md)), [pprof](docs/formats/pprof.md) ([Node.js](examples/node.pprof.md)), [Speedscope](docs/formats/speedscope.md) ([Node.js](examples/node.speedscope.json.md)), [V8 CPU profile](docs/formats/v8-cpu-profile.md) ([Node.js](examples/node.cpuprofile.md), [Deno](examples/deno.cpuprofile.md), [Bun](examples/bun.cpuprofile.md)), [V8 heap profile](docs/formats/v8-heap-profile.md) ([Node.js](examples/node.heapprofile.md)), [V8 heap snapshot](docs/formats/v8-heap-snapshot.md) ([Node.js](examples/node.heapsnapshot.md)), [WebKit timeline recording](docs/formats/webkit-timeline-recording.md) ([example](examples/webkit-timeline-recording.json.md)) |
| [PHP](docs/languages/php.md)                                                          | [Speedscope](docs/formats/speedscope.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [Python](docs/languages/python.md)                                                    | [pprof](docs/formats/pprof.md), [Speedscope](docs/formats/speedscope.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [Ruby](docs/languages/ruby.md)                                                        | [Speedscope](docs/formats/speedscope.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [Rust](docs/languages/rust.md)                                                        | [pprof](docs/formats/pprof.md) ([example](examples/rust.pprof.md)), [Speedscope](docs/formats/speedscope.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |

<!-- LANGUAGE_MATRIX END -->

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
Usage: profiler-md [(-h/--help [TOPIC])] [-f/--format FORMAT] [-o/--output FILE]
       [--top-n N] [--cwd PATH] [--third-party GLOB...] [--source-maps GLOB...]
       [--no-pager] [(--color | --no-color)] [FILE]

Converts performance profiles to human and LLM friendly Markdown.

  -h, --help [TOPIC]          Show this help message or topic docs
  -f, --format FORMAT         Input profile format (default: auto)
  -o, --output FILE           Output file (default: - for stdout)
  --top-n N                   Number of top entries to show (default: 20)
  --cwd PATH                  Directory to show paths relative to (default: cwd)
  --third-party GLOB          Additional URLs to consider third-party 
                              (repeatable)
  --source-maps GLOB          Source maps (JSON or inline) to apply to profile 
                              locations (repeatable)
  --no-pager                  Disable stdout output paging (default: auto)
  --color                     Enable or disable ANSI syntax highlighting 
                              (default: auto)
  --no-color                
  FILE                        Profile file to convert (reads from stdin if 
                              omitted)

Formats: jsc-heap-snapshot, pprof, speedscope, v8-cpu-profile, v8-heap-profile, v8-heap-snapshot, webkit-timeline-recording
Languages: c, cpp, go, java, kotlin, javascript, typescript, php, python, ruby, rust
```

<!-- CLI_HELP END -->

<!-- prettier-ignore-end -->

### API

```js
import { openAsBlob } from 'node:fs'
import {
  defaultCategorizeEntry,
  defaultShowEntry,
  pprofToMd,
  pprofToMdAsync,
  speedscopeProfileToMd,
  speedscopeProfileToMdAsync,
  v8CpuProfileToMd,
  v8CpuProfileToMdAsync,
  v8HeapProfileToMd,
  v8HeapProfileToMdAsync,
  v8HeapSnapshotToMd,
  v8HeapSnapshotToMdAsync,
  webkitTimelineRecordingToMd,
  webkitTimelineRecordingToMdAsync,
} from 'profiler-md'

// Basic usage
console.log(await pprofToMdAsync(await openAsBlob(`example.pprof`)))
console.log(
  await speedscopeProfileToMdAsync(await openAsBlob(`example.speedscope.json`)),
)
console.log(await v8CpuProfileToMdAsync(await openAsBlob(`example.cpuprofile`)))
console.log(
  await v8HeapProfileToMdAsync(await openAsBlob(`example.heapprofile`)),
)
console.log(
  await v8HeapSnapshotToMdAsync(await openAsBlob(`example.heapsnapshot`)),
)
console.log(
  await webkitTimelineRecordingToMdAsync(
    await openAsBlob(`example.webkit-timeline-recording.json`),
  ),
)

// Complex usage
const options = {
  // Show top 10 functions instead of the default 20.
  topN: 10,
  // Make paths relative to a custom directory.
  cwd: `/path/to/project`,
  categorizeEntry: entry => {
    if (entry.location?.url.pathname.includes(`/vendor/`)) {
      // Treat an additional vendor directory as third-party.
      return `third-party`
    }
    return defaultCategorizeEntry(entry)
  },
  showEntry: entry =>
    defaultShowEntry(entry) &&
    // Exclude entries from a specific file.
    !entry.location?.includes(`/path/to/project/src/noisy`),
}
console.log(await pprofToMdAsync(await openAsBlob(`example.pprof`), options))
console.log(
  await speedscopeProfileToMdAsync(
    await openAsBlob(`example.speedscope.json`),
    options,
  ),
)
console.log(
  await v8CpuProfileToMdAsync(await openAsBlob(`example.cpuprofile`), options),
)
console.log(
  await v8HeapProfileToMdAsync(
    await openAsBlob(`example.heapprofile`),
    options,
  ),
)
console.log(
  await v8HeapSnapshotToMdAsync(
    await openAsBlob(`example.heapsnapshot`),
    options,
  ),
)
console.log(
  await webkitTimelineRecordingToMdAsync(
    await openAsBlob(`example.webkit-timeline-recording.json`),
    options,
  ),
)

// Synchronous usage
console.log(pprofToMd(pprofData))
console.log(speedscopeProfileToMd(speedscopeProfileData))
console.log(v8CpuProfileToMd(v8CpuProfileData))
console.log(v8HeapProfileToMd(v8HeapProfileData))
console.log(v8HeapSnapshotToMd(v8HeapSnapshotData))
console.log(webkitTimelineRecordingToMd(webkitTimelineRecordingData))
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

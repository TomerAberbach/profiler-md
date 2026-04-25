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

- **Auto-detection:** infers profile type automatically
- **Configurable:** control the number of top entries shown, working directory
  for relative paths, and third-party URL detection
- **CLI and API:** usable on the command-line or programmatically

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

  Options:
    -t, --type <type>     Profile type, auto-detected from content if omitted
                          [speedscope|v8-cpu-profile|v8-heap-profile|v8-heap-snapshot|pprof]
    -o, --output <file>   Output file (default: - for stdout)
    --top-n <n>           Number of top entries to show (default: 20)
    --cwd <path>          Working directory for relative file paths in output
    --third-party <glob>  Mark URLs matching this glob as third-party
                          (repeatable; default: node_modules)
    --help                Show this help message
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

## Contributing

Stars are always welcome!

For bugs and feature requests,
[please create an issue](https://github.com/TomerAberbach/profiler-md/issues/new).

## License

[MIT](https://github.com/TomerAberbach/profiler-md/blob/main/license) ©
[Tomer Aberbach](https://github.com/TomerAberbach)

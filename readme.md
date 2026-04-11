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
    -t, --type <type>     Profile type (auto-detected from file extension by default)
    -o, --output <file>   Output file (default: - for stdout)
    --top-n <n>           Number of top entries to show (default: 20)
    --cwd <path>          Working directory for relative file paths in output
    --third-party <glob>  Mark URLs matching this glob as third-party (repeatable; default: node_modules)
    --help                Show this help message

  Supported profile types:
    *.cpuprofile -> v8-cpu
    *.heapprofile -> v8-heap
```

<!-- CLI_HELP END -->

### API

```js
import { readFile } from 'node:fs/promises'
import {
  defaultIncludeCallFrame,
  defaultIsThirdPartyURL,
  v8CpuProfileToMd,
  v8HeapProfileToMd,
} from 'profiler-md'

const cpuText = await readFile(`profile.cpuprofile`, `utf8`)
const heapText = await readFile(`profile.heapprofile`, `utf8`)

// Basic usage
console.log(v8CpuProfileToMd(cpuText))
console.log(v8HeapProfileToMd(heapText))

// Complex usage
const options = {
  // Show top 10 functions instead of the default 20.
  topN: 10,
  // Make paths relative to a custom directory.
  cwd: `/path/to/project`,
  isThirdPartyURL: url =>
    defaultIsThirdPartyURL(url) ||
    // Treat an additional vendor directory as third-party.
    url.pathname.includes(`/vendor/`),
  includeCallFrame: callFrame =>
    defaultIncludeCallFrame(callFrame) &&
    // Exclude frames from a specific file.
    callFrame.url?.pathname !== `/path/to/project/src/noisy.js`,
}
console.log(v8CpuProfileToMd(cpuText, options))
console.log(v8HeapProfileToMd(heapText, options))
```

## Contributing

Stars are always welcome!

For bugs and feature requests,
[please create an issue](https://github.com/TomerAberbach/profiler-md/issues/new).

## License

[MIT](https://github.com/TomerAberbach/profiler-md/blob/main/license) ©
[Tomer Aberbach](https://github.com/TomerAberbach)

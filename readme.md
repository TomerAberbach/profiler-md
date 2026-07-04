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

<!-- LANGUAGE_MATRIX START -->

| Language                                                                                | Formats                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [C](docs/languages/c.md)⁠/⁠[C++](docs/languages/cpp.md)                                 | [pprof](docs/formats/pprof.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [C#](docs/languages/csharp.md)⁠/⁠[F#](docs/languages/fsharp.md)                         | [Speedscope](docs/formats/speedscope.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [Elixir](docs/languages/elixir.md)⁠/⁠[Erlang](docs/languages/erlang.md)                 | [Collapsed stacks](docs/formats/collapsed.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [Go](docs/languages/go.md)                                                              | [pprof](docs/formats/pprof.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [Java](docs/languages/java.md)⁠/⁠[Kotlin](docs/languages/kotlin.md)                     | [JFR](docs/formats/jfr.md) ([Java](examples/java.jdk.jfr.md))<br>[Collapsed stacks](docs/formats/collapsed.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [JavaScript](docs/languages/javascript.md)⁠/⁠[TypeScript](docs/languages/typescript.md) | [JSC heap snapshot](docs/formats/jsc-heap-snapshot.md) ([Safari](examples/jsc-heap-snapshot.base.json.md), [Safari diff](examples/jsc-heap-snapshot.diff.json.md))<br>[pprof](docs/formats/pprof.md) ([Node.js](examples/node.pprof.md))<br>[V8 CPU profile](docs/formats/v8-cpu-profile.md) ([Node.js](examples/node.base.cpuprofile.md), [Node.js diff](examples/node.diff.cpuprofile.md), [Deno](examples/deno.cpuprofile.md), [Bun](examples/bun.cpuprofile.md))<br>[V8 heap profile](docs/formats/v8-heap-profile.md) ([Node.js](examples/node.heapprofile.md))<br>[V8 heap snapshot](docs/formats/v8-heap-snapshot.md) ([Node.js](examples/node.heapsnapshot.md))<br>[WebKit timeline recording](docs/formats/webkit-timeline-recording.md) ([example](examples/webkit-timeline-recording.json.md)) |
| [Julia](docs/languages/julia.md)                                                        | [pprof](docs/formats/pprof.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [PHP](docs/languages/php.md)                                                            | [Speedscope](docs/formats/speedscope.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [Python](docs/languages/python.md)                                                      | [Collapsed stacks](docs/formats/collapsed.md) ([Tachyon](examples/python.base.collapsed.md), [Tachyon diff](examples/python.diff.collapsed.md))<br>[pprof](docs/formats/pprof.md)<br>[Speedscope](docs/formats/speedscope.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [Ruby](docs/languages/ruby.md)                                                          | [Speedscope](docs/formats/speedscope.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [Rust](docs/languages/rust.md)                                                          | [pprof](docs/formats/pprof.md) ([base](examples/rust.base.pprof.md), [diff](examples/rust.diff.pprof.md))                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |

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
  --base-url STRING           Base URL or path to show paths relative to 
                              (default: cwd)
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

Formats: collapsed, jfr, jsc-heap-snapshot, pprof, speedscope, v8-cpu-profile, v8-heap-profile, v8-heap-snapshot, webkit-timeline-recording
Origins: deno, bun, node, node-pprof, pprof-rs, py-spy, tachyon, jvm, dotnet-trace, beam, rbspy, safari, unknown
Languages: c, cpp, csharp, fsharp, elixir, erlang, go, java, kotlin, javascript, typescript, julia, php, python, ruby, rust
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
  // Make paths relative to a custom base URL or directory.
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

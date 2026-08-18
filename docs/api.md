# API

The API accepts the same inputs and options as the CLI: pass a profile (or two,
to diff) and get Markdown back. Every function has a sync and an async variant.
The async variants accept a `Blob`, so large profiles stream instead of loading
into memory.

## Converting

The API auto-detects the format and origin by default:

```js
import { openAsBlob, readFileSync } from 'node:fs'
import { profileToMd, profileToMdAsync } from 'profiler-md'

// Async (streams the input)
console.log(await profileToMdAsync(await openAsBlob(`example.cpuprofile`)))
console.log(await profileToMdAsync(await openAsBlob(`example.pprof`)))

// Sync
console.log(profileToMd(readFileSync(`example.cpuprofile`, `utf8`)))
console.log(profileToMd(readFileSync(`example.pprof`)))
```

Pass an object to specify the format or origin explicitly:

```js
console.log(
  await profileToMdAsync({
    data: await openAsBlob(`example.pprof`),
    format: `pprof`,
  }),
)
console.log(
  await profileToMdAsync({
    data: await openAsBlob(`example.cpuprofile`),
    origin: `deno`,
  }),
)
console.log(
  profileToMd({
    data: readFileSync(`example.pprof`),
    format: `pprof`,
    origin: `node-pprof`,
  }),
)
```

## Diffing

Diff two profiles or two heap snapshots:

```js
import { openAsBlob, readFileSync } from 'node:fs'
import { diffProfiles, diffProfilesAsync } from 'profiler-md'

// Async, auto-detect
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

// Sync, explicit format
console.log(
  diffProfiles(
    { data: readFileSync(`base.pprof`), format: `pprof` },
    { data: readFileSync(`current.pprof`), format: `pprof` },
  ),
)
```

## Options

All functions take an options object as their last argument. The default for
each callback option is exported so a custom callback can build on it:

```js
import { openAsBlob } from 'node:fs'
import {
  defaultCategorizeFunctions,
  defaultMatchEntry,
  defaultShowEntry,
  diffProfilesAsync,
  profileToMdAsync,
} from 'profiler-md'

const options = {
  // Show the top 10 functions of each ranking instead of the default 20.
  topN: 10,
  // Break a ranking down by category, one subsection per category accounting
  // for at least 5% of the shown functions instead of the default 1%. Pass 0 to
  // break down every category.
  minCategoryShare: 0.05,
  // Make paths relative to a custom base URL or directory, or pass `auto` to
  // infer the profiled files' common ancestor directory.
  baseURL: `/path/to/project`,
  // Receive the conversion's diagnostics: at `warn`, an option or input that
  // had no effect; at `info`, each decision made on your behalf; and at
  // `debug`, the reasoning behind each decision. Only defined methods are
  // called, so `console` qualifies. Set `logLevel`, which defaults to `none`,
  // to receive any message.
  logger: console,
  logLevel: `info`,
  matchEntry: (entry, context) => {
    if (entry.location?.url?.pathname.includes(`/bundle.`)) {
      // Match bundled entries when diffing by name only, ignoring
      // content-hashed filenames.
      return { name: entry.name }
    }
    return defaultMatchEntry(entry, context)
  },
  categorizeFunctions: (entries, context) => {
    const categories = defaultCategorizeFunctions(entries, context)
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
    !entry.location?.url?.pathname.includes(`/path/to/project/src/noisy`),
}
console.log(await profileToMdAsync(await openAsBlob(`example.pprof`), options))

// The same options apply to diffs. `matchEntry` takes effect only here, where
// it controls which entries count as the same across the two sides.
console.log(
  await diffProfilesAsync(
    await openAsBlob(`base.pprof`),
    await openAsBlob(`current.pprof`),
    options,
  ),
)
```

# JavaScript

JavaScript profiling uses the profilers built into Node.js, Deno, Bun, Chrome
DevTools, and Safari's Web Inspector, which capture CPU profiles, heap profiles,
and heap snapshots in the V8 and JavaScriptCore formats.

## CPU profiling

Periodically samples the call stack. Useful for finding CPU hot spots.

### CLI

```sh
# Node.js
node --cpu-prof script.js

# Deno
deno run --cpu-prof script.ts

# Bun (output was incorrect before v1.3.13)
bun --cpu-prof script.ts
```

#### Flags

| Flag                       | Default   | Description                          |
| -------------------------- | --------- | ------------------------------------ |
| `--cpu-prof`               | —         | Write a CPU profile on exit when set |
| `--cpu-prof-interval=<µs>` | `1000`    | Sampling interval in microseconds    |
| `--cpu-prof-dir=<dir>`     | `.`       | Directory for the profile            |
| `--cpu-prof-name=<name>`   | see below | Filename for the profile             |

Node.js names the profile
`CPU.<yyyymmdd>.<hhmmss>.<pid>.<tid>.<seq>.cpuprofile`, and Deno and Bun name it
`CPU.<timestamp>.<pid>.cpuprofile`.

### Programmatic API

Profile a section of code rather than the whole process:

```js
import { writeFileSync } from 'node:fs'
import { Session } from 'node:inspector/promises'

const session = new Session()
session.connect()
await session.post(`Profiler.enable`)
await session.post(`Profiler.setSamplingInterval`, { interval: 100 })
await session.post(`Profiler.start`)

// Code to profile...

const { profile } = await session.post(`Profiler.stop`)
writeFileSync(`cpu.cpuprofile`, JSON.stringify(profile))
```

## Memory profiling

Samples heap allocations by stack trace. Useful for finding allocation hot spots
and reducing GC pressure.

`bun --heap-prof` generates a V8 heap _snapshot_ on exit, not a heap _profile_.
Deno has no equivalent.

The profiler reports only the sampled objects still alive when the profile is
written, so a workload that frees most of what it allocates leaves few samples.
`HeapProfiler.startSampling` takes `includeObjectsCollectedByMajorGC` and
`includeObjectsCollectedByMinorGC`, which keep the objects a major or a minor
garbage collection freed. Set both to profile allocation hot spots, and leave
them off to profile what stays in memory. `--heap-prof` sets neither and has no
flag for them, so use the programmatic API to set them.

### CLI

```sh
# Node.js
node --heap-prof script.js
```

#### Flags

| Flag                           | Default   | Description                                 |
| ------------------------------ | --------- | ------------------------------------------- |
| `--heap-prof`                  | —         | Write a heap profile on exit when set       |
| `--heap-prof-interval=<bytes>` | `524288`  | Sampling interval in bytes (default 512 KB) |
| `--heap-prof-dir=<dir>`        | `.`       | Directory for the profile                   |
| `--heap-prof-name=<name>`      | see below | Filename for the profile                    |

Node.js names the profile
`Heap.<yyyymmdd>.<hhmmss>.<pid>.<tid>.<seq>.heapprofile`.

### Programmatic API

```js
import { writeFileSync } from 'node:fs'
import { Session } from 'node:inspector/promises'

const session = new Session()
session.connect()
await session.post(`HeapProfiler.enable`)
await session.post(`HeapProfiler.startSampling`, {
  samplingInterval: 524_288,
  includeObjectsCollectedByMajorGC: true,
  includeObjectsCollectedByMinorGC: true,
})

// Code to profile...

const { profile } = await session.post(`HeapProfiler.stopSampling`)
writeFileSync(`heap.heapprofile`, JSON.stringify(profile))
```

## Heap snapshots

Captures a snapshot of all live objects on the heap. Useful for diagnosing
memory leaks.

### CLI

```sh
# Trigger on OOM
node --heapsnapshot-near-heap-limit=1 script.js

# Trigger on signal
node --heapsnapshot-signal=SIGUSR2 script.js  # then: kill -USR2 <pid>

# Bun (on exit)
bun --heap-prof script.ts
```

#### Node.js flags

| Flag                                 | Default | Description                                                |
| ------------------------------------ | ------- | ---------------------------------------------------------- |
| `--heapsnapshot-near-heap-limit=<n>` | —       | Write up to n snapshots when the heap approaches its limit |
| `--heapsnapshot-signal=<signal>`     | —       | Signal that triggers a snapshot on demand (e.g. `SIGUSR2`) |

#### Bun flags

| Flag                      | Default | Description                            |
| ------------------------- | ------- | -------------------------------------- |
| `--heap-prof`             | —       | Write a heap snapshot on exit when set |
| `--heap-prof-dir=<dir>`   | `.`     | Directory for the snapshot             |
| `--heap-prof-name=<name>` | —       | Filename for the snapshot              |

### Programmatic API

`node:v8`'s `writeHeapSnapshot` writes a V8-format snapshot and works in
Node.js, Deno, and Bun:

```js
import { writeHeapSnapshot } from 'node:v8'

// Code to capture...
writeHeapSnapshot(`heap.heapsnapshot`)
```

Bun also offers
[`Bun.generateHeapSnapshot()`](https://bun.com/reference/bun/generateHeapSnapshot),
which emits both heap snapshot formats, selectable by argument:

```js
import { generateHeapSnapshot } from 'bun'

const jsc = generateHeapSnapshot() // Or generateHeapSnapshot(`jsc`)
await Bun.write(`heap.json`, JSON.stringify(jsc))

const v8 = generateHeapSnapshot(`v8`)
await Bun.write(`heap.heapsnapshot`, v8)
```

## pprof

Node.js can also emit [pprof](https://github.com/google/pprof) profiles via the
[`@datadog/pprof`](https://www.npmjs.com/package/@datadog/pprof) package, which
profiles a section of code rather than the whole process.

### CPU profiling

Samples wall-clock time across all threads. Useful for finding CPU hot spots and
time spent waiting.

```js
import { writeFile } from 'node:fs/promises'
import { encode, time } from '@datadog/pprof'

const profile = await time.profile({ durationMillis: 10_000 })
await writeFile(`cpu.pb.gz`, await encode(profile))

// Aggregate at the line level instead of the function level
const byLine = await time.profile({ durationMillis: 10_000, lineNumbers: true })
await writeFile(`cpu-lines.pb.gz`, await encode(byLine))
```

### Memory profiling

Samples heap allocations by stack trace. Useful for finding allocation hot spots
and reducing GC pressure.

```js
import { writeFile } from 'node:fs/promises'
import { encode, heap } from '@datadog/pprof'

heap.start(512 * 1024, 64) // Sampling interval in bytes, max stack depth

// Code to profile...

await writeFile(`heap.pb.gz`, await encode(await heap.profile()))
```

## Chrome DevTools

Chrome DevTools can profile JavaScript running in the browser or connected to
Node.js or Deno via `--inspect`. The panels and workflow are identical.

### Connecting

**In the browser:** open DevTools with ⌥⌘I (macOS) or Ctrl+Shift+I
(Windows/Linux).

**Via `--inspect` (Node.js, Deno):** start the process with the inspector
enabled, then open `chrome://inspect` in Chrome and click **Open dedicated
DevTools for Node**.

```sh
# Node.js (default port 9229)
node --inspect script.js

# Deno (default port 9229)
deno run --inspect script.ts
```

#### Flags (all runtimes)

| Flag                           | Description                                                 |
| ------------------------------ | ----------------------------------------------------------- |
| `--inspect[=<host:port>]`      | Start the inspector and run the code immediately            |
| `--inspect-wait[=<host:port>]` | Wait for a debugger to attach before running                |
| `--inspect-brk[=<host:port>]`  | Wait for a debugger to attach, then break on the first line |

### CPU profiling

Open the **Performance** panel and click **Record**. Stop recording when done.

### Heap allocation profiling

Open the **Memory** panel, select **Allocation sampling**, and click **Start**.
Stop when done to see allocation hot spots by call stack.

### Heap snapshots

Open the **Memory** panel, select **Heap snapshot**, and click **Take
snapshot**.

## debug.bun.sh

Bun's inspector speaks the WebKit Inspector Protocol rather than V8's, so it
connects through [debug.bun.sh](https://debug.bun.sh) instead of Chrome
DevTools. Start the process with `--inspect` and open the URL printed to stderr.

```sh
# Bun (auto-assigned port)
bun --inspect script.ts
```

## Safari Web Inspector

Safari's Web Inspector records a timeline that combines CPU sampling, browser
activity, and optionally memory readings and heap allocations, all exported as a
single file.

### Connecting

Open the Web Inspector with **Develop → Show Web Inspector** (or ⌥⌘I).

### Recording

1. Click the **Timelines** tab.
2. Enable the instruments: **JavaScript & Events** (always), and optionally
   **Memory** and **JavaScript Allocations**.
3. Click **Start Recording** (or ⌘R).
4. Reproduce the scenario to profile.
5. Click **Stop Recording**.
6. Click the **Export** button (arrow icon) and save as a `.json` file.

### Heap snapshots

Open the **Memory** panel, select **Heap Snapshot**, and click **Take
Snapshot**.

#### Programmatic API

`console.takeHeapSnapshot()` is a non-standard WebKit extension that takes a
heap snapshot from JavaScript and adds it to the **Memory** panel:

```js
console.takeHeapSnapshot()
```

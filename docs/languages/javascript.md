# JavaScript

Profiling JavaScript works across Node.js, Deno, Bun, and Chrome via V8 CPU
profiles, V8 heap profiles, and V8 heap snapshots.

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

| Flag                       | Default                            | Description                                   |
| -------------------------- | ---------------------------------- | --------------------------------------------- |
| `--cpu-prof`               | —                                  | Write a CPU profile on exit; enabled when set |
| `--cpu-prof-interval=<µs>` | `1000`                             | Sampling interval in microseconds             |
| `--cpu-prof-dir=<dir>`     | `.`                                | Directory to write the profile to             |
| `--cpu-prof-name=<name>`   | `CPU.<timestamp>.<pid>.cpuprofile` | Filename for the profile                      |

### Programmatic API

Profile a specific section of code rather than the whole process:

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

`bun --heap-prof` generates a heap _snapshot_ on exit, not a heap _profile_.
Deno has no equivalent.

### CLI

```sh
# Node.js
node --heap-prof script.js
```

#### Flags

| Flag                           | Default  | Description                                    |
| ------------------------------ | -------- | ---------------------------------------------- |
| `--heap-prof`                  | —        | Write a heap profile on exit; enabled when set |
| `--heap-prof-interval=<bytes>` | `524288` | Sampling interval in bytes (default 512 KB)    |
| `--heap-prof-dir=<dir>`        | `.`      | Directory to write the profile to              |
| `--heap-prof-name=<name>`      | —        | Filename for the profile                       |

### Programmatic API

```js
import { writeFileSync } from 'node:fs'
import { Session } from 'node:inspector/promises'

const session = new Session()
session.connect()
await session.post(`HeapProfiler.enable`)
await session.post(`HeapProfiler.startSamplingHeapProfiler`, {
  samplingInterval: 524_288,
})

// Code to profile...

const { profile } = await session.post(`HeapProfiler.stopSamplingHeapProfiler`)
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
node --heapsnapshot-signal=USR2 script.js  # then: kill -USR2 <pid>

# Bun (on exit)
bun --heap-prof script.ts
```

#### Node.js flags

| Flag                                 | Default | Description                                                |
| ------------------------------------ | ------- | ---------------------------------------------------------- |
| `--heapsnapshot-near-heap-limit=<n>` | —       | Write up to n snapshots when the heap approaches its limit |
| `--heapsnapshot-signal=<signal>`     | —       | Signal that triggers a snapshot on demand (e.g. `USR2`)    |

#### Bun flags

| Flag                      | Default | Description                                     |
| ------------------------- | ------- | ----------------------------------------------- |
| `--heap-prof`             | —       | Write a heap snapshot on exit; enabled when set |
| `--heap-prof-dir=<dir>`   | `.`     | Directory to write the snapshot to              |
| `--heap-prof-name=<name>` | —       | Filename for the snapshot                       |

### Programmatic API

```js
import { writeHeapSnapshot } from 'node:v8'

// Code to capture...
writeHeapSnapshot(`heap.heapsnapshot`)
```

## Chrome DevTools

Chrome DevTools can profile JavaScript running in the browser or connected to
Node.js, Deno, or Bun via `--inspect`. The panels and workflow are the same in
both cases.

### Connecting

**In the browser:** open DevTools with ⌥⌘I (macOS) or Ctrl+Shift+I
(Windows/Linux).

**Via `--inspect` (Node.js, Deno, Bun):** start the process with the inspector
enabled, then open `chrome://inspect` in Chrome and click **Open dedicated
DevTools for Node**. For Bun, open the URL printed to stderr in
[debug.bun.sh](https://debug.bun.sh) — Bun uses the WebKit Inspector Protocol
rather than V8's.

```sh
# Node.js (default port 9229)
node --inspect script.js

# Deno (default port 9229)
deno run --inspect script.ts

# Bun (auto-assigned port)
bun --inspect script.ts
```

#### Flags (all runtimes)

| Flag                           | Description                                                 |
| ------------------------------ | ----------------------------------------------------------- |
| `--inspect[=<host:port>]`      | Start the inspector; code runs immediately                  |
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

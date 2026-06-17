# JFR event types — JDK 21 & async-profiler

> Comprehensive research reference compiled for **profiler-md** (TypeScript JFR
> → Markdown converter). Combines: (a) multi-source web research with
> adversarial verification (19 sources, 83 candidate claims, 25 verified by
> 3-vote panels); (b) full catalog extraction from canonical sources — OpenJDK
> `jdk21u` `metadata.xml` + `bestsolution-at` jfr-doc (all 183 JDK 21 events),
> async-profiler `JfrReader.java` + `event/*.java` + `ProfilingModes.md`, and
> the JFR binary format from OpenJDK HotSpot source + Morling's writeup. Date:
> 2026-06-21.

## Contents

1. [Executive summary & framing for profiler-md](#1-executive-summary--framing-for-profiler-md)
2. [Verified corrections (refuted claims)](#2-verified-corrections-refuted-claims)
3. [JFR binary file format structure](#3-jfr-binary-file-format-structure)
4. [Constant-pool / metadata types](#4-constant-pool--metadata-types)
5. [Complete JDK 21 event catalog (all 183)](#5-complete-jdk-21-event-catalog-all-183-events)
6. [async-profiler — complete JFR event handling](#6-async-profiler--complete-jfr-event-handling)
7. [jdk.CPUTimeSample / JEP 509 (JDK 25+)](#7-jdkcputimesample--jep-509-jdk-25)
8. [GraalVM Native Image supported events](#8-graalvm-native-image-supported-events)
9. [Coverage vs. the current converter](#9-coverage-vs-the-current-converter)
10. [Recommended gaps to consider](#10-recommended-gaps-to-consider)
11. [Sources](#11-sources)

---

## 1. Executive summary & framing for profiler-md

JFR is a stream of **events**, but only a minority carry a `stackTrace` field
(58 of 183 in JDK 21) — and an even smaller subset are _sampling_ events with a
meaningful per-sample weight worth aggregating into a flame-graph-style profile.
The bulk of JFR's event types are single-point telemetry (JVM config, GC phases,
OS metrics) with no aggregatable sample value.

The reliable way to decide "aggregate this" is a **curated event-name → kind +
weight allowlist** (which the converter already uses) — **not** the mere
presence of a `stackTrace` field, because config/class events (e.g.
`jdk.ClassLoad`, `jdk.ActiveRecording`) can carry stacks yet are not sample
events.

**Events that carry both a stack trace and an aggregatable weight** (the
profiler-md target set), at a glance:

| Category          | Events                                                                                                                                               | Weight           |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- |
| CPU/exec sampling | `jdk.ExecutionSample`, `jdk.NativeMethodSample`, `jdk.CPUTimeSample` (JDK 25+), `profiler.WallClockSample`                                           | sample count     |
| Allocation        | `jdk.ObjectAllocationSample`, `jdk.ObjectAllocationInNewTLAB`, `jdk.ObjectAllocationOutsideTLAB`, `jdk.AllocationRequiringGC`, `profiler.LiveObject` | bytes            |
| Native memory     | `profiler.Malloc` (+ `profiler.Free`)                                                                                                                | bytes            |
| Locks/blocking    | `jdk.JavaMonitorEnter`, `jdk.JavaMonitorWait`, `jdk.ThreadPark`, `jdk.ThreadSleep`, `profiler.NativeLock`                                            | duration (ns)    |
| I/O               | `jdk.FileRead`, `jdk.FileWrite`, `jdk.SocketRead`, `jdk.SocketWrite`                                                                                 | duration + bytes |
| Method tracing    | `jdk.MethodTrace`, `profiler.Span`                                                                                                                   | duration         |

---

## 2. Verified corrections (refuted claims)

Two plausible-sounding claims were **refuted** by the verification panels:

1. **`jdk.ExecutionSample` period.** A claim that it is `period="everyChunk"`
   was refuted in the research pass (1–2). Nuance from the full catalog
   extraction: in `metadata.xml` the _periodic_ registration is `everyChunk`,
   but the effective behavior is the sampler thread emitting on a configurable
   wall interval (e.g. 10–20 ms). Treat it as a periodic sampler, not a
   once-per-chunk event.
2. **Config/class events are not a "carries a useful stack" group.** A claim
   that `ActiveRecording`, `ActiveSetting`, `ClassLoad`, `ClassDefine`,
   `RedefineClasses`, `RetransformClasses` should be aggregated because they
   have stacks was refuted (0–3). Several do carry `stackTrace="true"`, but they
   are not sample events — do not aggregate by the `stackTrace` flag alone.

---

## 3. JFR binary file format structure

> Sourced from Gunnar Morling's writeup + OpenJDK HotSpot `jfrChunkWriter.cpp` /
> `jfrChunk.cpp` / `jfrTypes.hpp`. **JFR has no official spec** — it is an
> OpenJDK implementation detail; the only stable contract is the JFR API. Values
> below are version-specific (current format = **2.1**).

### 3.1 High-level

- **Recordings are organized in chunks** — self-contained containers of events +
  all metadata needed to interpret them. There is no content besides chunks;
  concatenating chunk files yields a valid recording. Split with
  `jfr disassemble --output <dir> recording.jfr`.
- **Default chunk size 12 MB** (`-XX:FlightRecorderOptions:maxchunksize=1MB` to
  override). Smaller chunks repeat metadata + constant pools, increasing size.
- **Self-descriptive:** each chunk's metadata describes the structure of its
  events, all referenced types, and attributes (via `@Label`, `@Description`,
  `@Timestamp`, units). A consumer can parse events without prior knowledge.
- **Space-efficient:** integers use **LEB128** variable-length encoding; a
  **constant pool** stores repeatedly referenced objects (strings, stack traces,
  class/method names); each usage stores only the pool **index**.
  - Strings of length **16–128 are stored in the constant pool**; all others as
    raw value (no control offered).
  - `jdk.OldObjectSample` caution: bug JDK-8277919 could bloat the constant pool
    (fixed in 17.0.3 / 18).
- **Row-based:** events stored sequentially; a boolean consumes a full byte.
- **Compression:** JMC reader transparently unpacks GZip/ZIP/LZ4; the `jfr`
  utility and the JDK writer do **not** produce/handle compressed recordings.
- Realtime event streaming supported since Java 14.

### 3.2 Chunk header — exact byte layout (`HEADER_SIZE = 68`, big-endian)

| Field                | Offset | Size    | Value / meaning                                                    |
| -------------------- | ------ | ------- | ------------------------------------------------------------------ |
| Magic                | 0      | 4       | `"FLR"` + NUL (`0x464c5200`)                                       |
| Major version        | 4      | 2 (u2)  | `2`                                                                |
| Minor version        | 6      | 2 (u2)  | `1` → format **2.1**                                               |
| Chunk size           | 8      | 8 (i64) | total chunk byte size (backfilled)                                 |
| Constant pool offset | 16     | 8 (i64) | offset of **last** checkpoint event                                |
| Metadata offset      | 24     | 8 (i64) | offset of **last** metadata event                                  |
| Start nanos          | 32     | 8 (i64) | chunk start (epoch ns)                                             |
| Duration nanos       | 40     | 8 (i64) | chunk duration ns                                                  |
| Start ticks          | 48     | 8 (i64) | chunk start in monotonic ticks                                     |
| CPU frequency        | 56     | 8 (i64) | ticks per second (ticks↔time conversion)                           |
| Generation           | 64     | 1 (u1)  | per-flush counter; `COMPLETE`(0) when final; `GUARD` while writing |
| (pad)                | 65     | 1       | —                                                                  |
| Flags                | 66     | 2 (u2)  | bit 0 = CompressedIntegers (LEB128); bit 1 = Final                 |

- Time conversion:
  `nanos = chunkStartNanos + (ticks − chunkStartTicks) × 1e9 / ticksPerSec`.
- async-profiler's reader uses the same 68-byte header; supports versions
  `0x20000`–`0x2ffff`; `BUFFER_SIZE = 2 MiB`; chunk boundary detected when event
  `type == 'L'` and the int at position equals the chunk signature.

### 3.3 Reserved event type IDs

```
EVENT_METADATA   = 0   // metadata event (schema)
EVENT_CHECKPOINT = 1   // checkpoint (constant pool) event
```

All other type IDs are real event types defined in the metadata.

### 3.4 Event encoding (row-based, self-describing)

- Each event: **size** (LEB128) → **type id** (LEB128) → field values laid out
  per the metadata description for that type.
- Field encodings: integers as LEB128 var-ints; booleans as 1 byte;
  constant-pool-backed values (methods, classes, symbols, stack traces, threads)
  as a single LEB128 pool index; strings raw (length-prefixed) or pool
  reference.

### 3.5 Metadata event (id 0)

Declares every event type and referenced type with their fields (name + type,
possibly constant-pool-backed), plus annotations (`@Label`, `@Description`,
`@Timestamp`, units). Uses an internal string table (names stored once,
referenced by index). The chunk header's metadata offset points to the last
metadata event.

### 3.6 Checkpoint / constant pool events (id 1)

- Deduplicate repeatedly referenced data; events store only a pool **index**.
- **Backward chaining:** header's constant pool offset points to the _last_
  checkpoint; each stores a **delta** to the previous, forming a backward-linked
  chain.
- Checkpoint types: `GENERIC=0`, `FLUSH=1`, `HEADER=2`, `STATICS=4`,
  `THREADS=8`.
- Buffer kinds: `JFR_GLOBAL=0`, `JFR_THREADLOCAL=1`,
  `JFR_VIRTUAL_THREADLOCAL=2`.

### 3.7 String encoding tags (async-profiler `getString`)

`0`=null, `1`=empty, `2`=constant-pool ref (varlong → `strings`), `3`=UTF-8
bytes, `4`=char array (varint count, each char varint), `5`=ISO-8859-1 bytes.
Varint/varlong are LEB128 (7 bits/byte, high bit = continue; varlong special-
cases the 9th byte for the top 8 bits).

---

## 4. Constant-pool / metadata types

These are constant-pool referenced _types_ (not events) a parser must resolve to
decode stacks. ✅ = already resolved by the converter.

| Type                                     | Holds                                                   | Notes                                        |
| ---------------------------------------- | ------------------------------------------------------- | -------------------------------------------- |
| `jdk.types.StackTrace` ✅                | ordered list of frames                                  | per frame: method ref, line, bci, frame type |
| `jdk.types.StackFrame` ✅                | method ref + bci + line + FrameType                     |                                              |
| `jdk.types.Method` ✅                    | declaring class + name + signature + modifiers + hidden |                                              |
| `jdk.types.Symbol` ✅                    | symbol bytes                                            | encoding byte must be 3                      |
| `jdk.types.FrameType`                    | enum: Interpreted, JIT-compiled, Inlined, Native, …     | resolved as enum pool                        |
| `jdk.types.Class` / `java.lang.Class`    | id, loader, name, package, modifiers                    |                                              |
| `jdk.types.ClassLoader`                  |                                                         |                                              |
| `jdk.types.Package` / `jdk.types.Module` |                                                         |                                              |
| `java.lang.Thread`                       | os name, os thread id, java name, java thread id        |                                              |
| `jdk.types.ThreadState` / `ThreadGroup`  | enum / group                                            |                                              |
| `java.lang.String`                       | string pool                                             |                                              |
| `jdk.types.ChunkHeader`                  | (skipped: `CHUNK_HEADER_SIZE + 3` bytes)                |                                              |

**Frame location encoding (async-profiler):**
`locations[i] = line << 16 | (bci & 0xffff)`.

---

## 5. Complete JDK 21 event catalog (all 183 events)

> Cross-checked: `bestsolution-at.github.io/jfr-doc/openjdk-21.html` (HTTP 200,
> 183 `jdk.*` anchors) and OpenJDK `jdk21u` `metadata.xml` (154 non-internal
> hotspot events) + `src/jdk.jfr/.../events/*.java` annotations (29 Java-side
> mirror events). **ST** = carries a stack trace. **Kind:** `instant` =
> single-point; `duration` = start+end timespan; `periodic (everyChunk)` =
> sampled per chunk; `periodic (endChunk)` = config/metadata snapshot at chunk
> end. `stackTrace`/`period` are authoritative from `metadata.xml` / Java
> annotations (not the HTML field table). **Bold** key fields are weight/size/
> duration/bytes/count candidates for aggregation. ✅ = handled by the
> converter.

### 5.1 Execution / CPU / Profiling

| Event                         | Description                                                 | ST    | Kind                  | Key fields                                      |
| ----------------------------- | ----------------------------------------------------------- | ----- | --------------------- | ----------------------------------------------- |
| `jdk.ExecutionSample` ✅      | Snapshot of a thread's state (core method profiler sampler) | true  | periodic (everyChunk) | sampledThread, stackTrace, state                |
| `jdk.NativeMethodSample` ✅   | Thread state while executing native code                    | true  | periodic (everyChunk) | sampledThread, stackTrace, state                |
| `jdk.CPULoad`                 | Recent CPU usage of the JVM process                         | false | periodic (everyChunk) | jvmUser, jvmSystem, machineTotal                |
| `jdk.ThreadCPULoad`           | Per-thread CPU load                                         | false | periodic (everyChunk) | user, system                                    |
| `jdk.ThreadContextSwitchRate` | Thread context switch rate                                  | false | periodic (everyChunk) | switchRate                                      |
| `jdk.CPUInformation`          | Processor characteristics                                   | false | periodic (endChunk)   | cpu, description, sockets, cores, hwThreads     |
| `jdk.CPUTimeStampCounter`     | CPU time-stamp counter / (RD)TSC info                       | false | periodic (endChunk)   | fastTimeEnabled, osFrequency, fastTimeFrequency |

### 5.2 Allocation / Memory

| Event                                | Description                                    | ST    | Kind                  | Key fields                                             |
| ------------------------------------ | ---------------------------------------------- | ----- | --------------------- | ------------------------------------------------------ |
| `jdk.ObjectAllocationSample` ✅      | Sampled object allocation (throttled)          | true  | instant               | objectClass, **weight**                                |
| `jdk.ObjectAllocationInNewTLAB` ✅   | Allocation that created a new TLAB             | true  | instant               | objectClass, **allocationSize**, **tlabSize**          |
| `jdk.ObjectAllocationOutsideTLAB` ✅ | Allocation done outside any TLAB               | true  | instant               | objectClass, **allocationSize**                        |
| `jdk.OldObjectSample`                | Potential memory leak (live old object sample) | true  | instant               | duration (cutoff), object, allocationTime              |
| `jdk.NativeMemoryUsage`              | Native memory usage per type                   | false | periodic (everyChunk) | type, reserved, committed                              |
| `jdk.NativeMemoryUsageTotal`         | Total native memory usage                      | false | periodic (everyChunk) | reserved, committed                                    |
| `jdk.PhysicalMemory`                 | OS physical memory                             | false | periodic (everyChunk) | **totalSize**, **usedSize**                            |
| `jdk.ResidentSetSize`                | Resident set size (RSS)                        | false | periodic (everyChunk) | **size**, peak                                         |
| `jdk.DirectBufferStatistics`         | java.nio direct buffer stats                   | false | periodic (everyChunk) | maxCapacity, **count**, totalCapacity, memoryUsed      |
| `jdk.MetaspaceSummary`               | Metaspace usage summary                        | false | instant               | gcId, when, metaspace, dataSpace, classSpace           |
| `jdk.MetaspaceGCThreshold`           | Metaspace GC threshold change                  | false | instant               | **oldValue**, newValue, updater                        |
| `jdk.MetaspaceAllocationFailure`     | Metaspace allocation failure                   | true  | instant               | classLoader, hiddenClassLoader, **size**, metadataType |
| `jdk.MetaspaceOOM`                   | Metaspace out-of-memory                        | true  | instant               | classLoader, **size**, metadataType                    |
| `jdk.MetaspaceChunkFreeListSummary`  | Metaspace chunk free-list summary              | false | instant               | gcId, when, metadataType                               |

### 5.3 Garbage Collection — collectors / pauses / phases

| Event                              | Description                                  | ST    | Kind     | Key fields                                                         |
| ---------------------------------- | -------------------------------------------- | ----- | -------- | ------------------------------------------------------------------ |
| `jdk.GarbageCollection`            | A GC performed by the JVM                    | false | duration | **duration**, gcId, **name**, **cause**, sumOfPauses, longestPause |
| `jdk.YoungGarbageCollection`       | Extra info for young GCs                     | false | duration | duration, gcId, tenuringThreshold                                  |
| `jdk.OldGarbageCollection`         | Extra info for old GCs                       | false | duration | duration, gcId                                                     |
| `jdk.ParallelOldGarbageCollection` | Extra info for Parallel Old GCs              | false | duration | duration, gcId, densePrefix                                        |
| `jdk.G1GarbageCollection`          | Extra info for G1 young GCs                  | false | duration | duration, gcId, type                                               |
| `jdk.SystemGC`                     | Explicit `System.gc()` call                  | true  | duration | duration, invokedConcurrent                                        |
| `jdk.GCPhasePause`                 | GC pause phase                               | false | duration | duration, gcId, **name**                                           |
| `jdk.GCPhasePauseLevel1`           | GC pause phase, nesting level 1              | false | duration | duration, gcId, name                                               |
| `jdk.GCPhasePauseLevel2`           | GC pause phase, nesting level 2              | false | duration | duration, gcId, name                                               |
| `jdk.GCPhasePauseLevel3`           | GC pause phase, nesting level 3              | false | duration | duration, gcId, name                                               |
| `jdk.GCPhasePauseLevel4`           | GC pause phase, nesting level 4              | false | duration | duration, gcId, name                                               |
| `jdk.GCPhaseConcurrent`            | Concurrent GC phase                          | false | duration | duration, gcId, name                                               |
| `jdk.GCPhaseConcurrentLevel1`      | Concurrent GC phase, level 1                 | false | duration | duration, gcId, name                                               |
| `jdk.GCPhaseConcurrentLevel2`      | Concurrent GC phase, level 2                 | false | duration | duration, gcId, name                                               |
| `jdk.GCPhaseParallel`              | GC phase for a parallel worker               | false | duration | duration, gcId, gcWorkerId, name                                   |
| `jdk.GCCPUTime`                    | GC CPU time (G1/Parallel/Serial)             | false | instant  | gcId, userTime, systemTime, realTime                               |
| `jdk.GCReferenceStatistics`        | Count of processed references during GC      | false | instant  | gcId, type, **count**                                              |
| `jdk.GCLocker`                     | GC locker (JNI critical section delaying GC) | true  | duration | duration, lockCount, stallCount                                    |

### 5.4 GC — heap / configuration / summaries

| Event                              | Description                     | ST    | Kind                  | Key fields                                                |
| ---------------------------------- | ------------------------------- | ----- | --------------------- | --------------------------------------------------------- |
| `jdk.GCHeapSummary`                | Heap summary before/after GC    | false | instant               | gcId, **when**, **heapUsed**, heapSpace                   |
| `jdk.GCHeapMemoryUsage`            | GC heap memory usage            | false | periodic (everyChunk) | used, committed, max                                      |
| `jdk.GCHeapMemoryPoolUsage`        | Per-pool GC heap memory usage   | false | periodic (everyChunk) | **name**, used, committed, max                            |
| `jdk.PSHeapSummary`                | Parallel Scavenge heap summary  | false | instant               | gcId, when, oldSpace, youngSpace                          |
| `jdk.G1HeapSummary`                | G1 heap summary                 | false | instant               | gcId, when, edenUsedSize, edenTotalSize, survivorUsedSize |
| `jdk.GCConfiguration`              | Garbage collector configuration | false | periodic (endChunk)   | youngCollector, oldCollector, parallelGCThreads           |
| `jdk.GCHeapConfiguration`          | Heap configuration              | false | periodic (endChunk)   | minSize, maxSize, initialSize, usesCompressedOops         |
| `jdk.GCSurvivorConfiguration`      | Survivor space configuration    | false | periodic (endChunk)   | maxTenuringThreshold, initialTenuringThreshold            |
| `jdk.GCTLABConfiguration`          | TLAB configuration              | false | periodic (endChunk)   | usesTLABs, minTLABSize, tlabRefillWasteLimit              |
| `jdk.YoungGenerationConfiguration` | Young generation configuration  | false | periodic (endChunk)   | minSize, maxSize, newRatio                                |

### 5.5 GC — detailed / promotion / IHOP / regions

| Event                             | Description                          | ST    | Kind                  | Key fields                                           |
| --------------------------------- | ------------------------------------ | ----- | --------------------- | ---------------------------------------------------- |
| `jdk.AllocationRequiringGC`       | An allocation that triggered a GC    | true  | instant               | gcId, **size**                                       |
| `jdk.TenuringDistribution`        | Tenuring (age) distribution          | false | instant               | gcId, age, **size**                                  |
| `jdk.PromoteObjectInNewPLAB`      | Object promoted into a new PLAB      | false | instant               | gcId, objectClass, objectSize, tenuringAge, plabSize |
| `jdk.PromoteObjectOutsidePLAB`    | Object promoted directly to heap     | false | instant               | gcId, objectClass, objectSize, tenuringAge           |
| `jdk.PromotionFailed`             | Object promotion failed              | false | instant               | gcId, promotionFailed                                |
| `jdk.EvacuationFailed`            | Object evacuation failed             | false | instant               | gcId, evacuationFailed                               |
| `jdk.EvacuationInformation`       | Evacuation info for a collection set | false | instant               | gcId, cSetRegions, cSetUsedBefore, cSetUsedAfter     |
| `jdk.ConcurrentModeFailure`       | CMS concurrent mode failure          | false | instant               | gcId                                                 |
| `jdk.G1MMU`                       | G1 minimum mutator utilization       | false | instant               | gcId, timeSlice, gcTime, pauseTarget                 |
| `jdk.G1BasicIHOP`                 | Basic IHOP statistics                | false | instant               | gcId, threshold, targetOccupancy, currentOccupancy   |
| `jdk.G1AdaptiveIHOP`              | Adaptive IHOP statistics             | false | instant               | gcId, threshold, internalPredictedMarkLength         |
| `jdk.G1EvacuationYoungStatistics` | G1 young-gen evacuation memory stats | false | instant               | statistics                                           |
| `jdk.G1EvacuationOldStatistics`   | G1 old-gen evacuation memory stats   | false | instant               | statistics                                           |
| `jdk.G1HeapRegionInformation`     | Info about a G1 heap region          | false | periodic (everyChunk) | index, type, start, used                             |
| `jdk.G1HeapRegionTypeChange`      | A G1 region changed type             | false | instant               | index, from, to, start, used                         |
| `jdk.ObjectCount`                 | Object count by class (periodic)     | false | periodic (everyChunk) | gcId, objectClass, **count**, **totalSize**          |
| `jdk.ObjectCountAfterGC`          | Object count by class after GC       | false | instant               | gcId, objectClass, **count**, **totalSize**          |

### 5.6 GC — ZGC

| Event                         | Description                           | ST    | Kind     | Key fields                                    |
| ----------------------------- | ------------------------------------- | ----- | -------- | --------------------------------------------- |
| `jdk.ZYoungGarbageCollection` | ZGC young collection info             | false | duration | duration, gcId, tenuringThreshold             |
| `jdk.ZOldGarbageCollection`   | ZGC old collection info               | false | duration | duration, gcId                                |
| `jdk.ZAllocationStall`        | Time waiting for memory               | true  | duration | duration, type, **size**                      |
| `jdk.ZPageAllocation`         | Allocation of a ZPage                 | true  | duration | duration, type, **size**, flushed, committed  |
| `jdk.ZRelocationSet`          | ZGC relocation set                    | false | duration | duration, total, empty, relocate              |
| `jdk.ZRelocationSetGroup`     | ZGC relocation set group              | false | duration | duration, name, candidatePages, candidateSize |
| `jdk.ZUncommit`               | ZGC uncommitting of memory            | false | duration | duration, uncommitted                         |
| `jdk.ZUnmap`                  | ZGC unmapping of memory               | false | duration | duration, unmapped                            |
| `jdk.ZStatisticsCounter`      | ZGC statistics counter (experimental) | false | duration | duration, id, increment, **value**            |
| `jdk.ZStatisticsSampler`      | ZGC statistics sampler (experimental) | false | duration | duration, id, **value**                       |
| `jdk.ZThreadPhase`            | ZGC thread phase (experimental)       | false | duration | duration, gcId, **name**                      |

### 5.7 GC — Shenandoah

| Event                                 | Description                         | ST    | Kind                  | Key fields                   |
| ------------------------------------- | ----------------------------------- | ----- | --------------------- | ---------------------------- |
| `jdk.ShenandoahHeapRegionInformation` | Info about a Shenandoah heap region | false | periodic (everyChunk) | index, state, start, used    |
| `jdk.ShenandoahHeapRegionStateChange` | A Shenandoah region changed state   | false | instant               | index, from, to, start, used |

### 5.8 Locks / Monitors / Threads

| Event                            | Description                               | ST    | Kind                  | Key fields                                                               |
| -------------------------------- | ----------------------------------------- | ----- | --------------------- | ------------------------------------------------------------------------ |
| `jdk.JavaMonitorEnter` ✅        | Thread blocked entering a Java monitor    | true  | duration              | duration, **monitorClass**, previousOwner, **address**                   |
| `jdk.JavaMonitorWait`            | Thread waiting on a Java monitor          | true  | duration              | duration, **monitorClass**, notifier, **timeout**, timedOut, **address** |
| `jdk.JavaMonitorInflate`         | Java monitor inflated                     | true  | duration              | duration, **monitorClass**, **address**, **cause**                       |
| `jdk.ThreadPark` ✅              | Thread parked (`LockSupport.park`)        | true  | duration              | duration, parkedClass, **timeout**, until, **address**                   |
| `jdk.ThreadSleep`                | Thread sleeping (`Thread.sleep`)          | true  | duration              | duration, time                                                           |
| `jdk.ThreadStart`                | Java thread started                       | true  | instant               | thread, parentThread                                                     |
| `jdk.ThreadEnd`                  | Java thread ended                         | false | instant               | thread                                                                   |
| `jdk.ThreadAllocationStatistics` | Per-thread allocation statistics          | false | periodic (everyChunk) | allocated, thread                                                        |
| `jdk.JavaThreadStatistics`       | Aggregate Java thread statistics          | false | periodic (everyChunk) | activeCount, daemonCount, accumulatedCount, peakCount                    |
| `jdk.VirtualThreadStart`         | Virtual thread started                    | true  | instant               | javaThreadId                                                             |
| `jdk.VirtualThreadEnd`           | Virtual thread ended                      | true  | instant               | javaThreadId                                                             |
| `jdk.VirtualThreadPinned`        | Virtual thread pinned to carrier          | true  | duration              | duration                                                                 |
| `jdk.VirtualThreadSubmitFailed`  | Failed to submit a virtual thread task    | true  | instant               | javaThreadId, exceptionMessage                                           |
| `jdk.ReservedStackActivation`    | Reserved stack area activated on overflow | true  | instant               | method                                                                   |

### 5.9 I/O (file / socket / network)

| Event                    | Description                          | ST    | Kind                  | Key fields                                                                     |
| ------------------------ | ------------------------------------ | ----- | --------------------- | ------------------------------------------------------------------------------ |
| `jdk.FileRead`           | Reading data from a file             | true  | duration              | duration, path, **bytesRead**, endOfFile                                       |
| `jdk.FileWrite`          | Writing data to a file               | true  | duration              | duration, path, **bytesWritten**                                               |
| `jdk.FileForce`          | Force file updates to disk (`fsync`) | true  | duration              | duration, path, metaData                                                       |
| `jdk.SocketRead`         | Reading data from a socket           | true  | duration              | duration, host, **address**, **port**, **timeout**, **bytesRead**, endOfStream |
| `jdk.SocketWrite`        | Writing data to a socket             | true  | duration              | duration, host, **address**, **port**, **bytesWritten**                        |
| `jdk.NetworkUtilization` | Network interface utilization        | false | periodic (everyChunk) | networkInterface, readRate, writeRate                                          |

### 5.10 Class loading / classes / modules

| Event                        | Description                          | ST    | Kind                  | Key fields                                                        |
| ---------------------------- | ------------------------------------ | ----- | --------------------- | ----------------------------------------------------------------- |
| `jdk.ClassLoad`              | A class was loaded                   | true  | duration              | duration, loadedClass, definingClassLoader, initiatingClassLoader |
| `jdk.ClassDefine`            | A class was defined                  | true  | instant               | definedClass, definingClassLoader                                 |
| `jdk.ClassUnload`            | A class was unloaded                 | false | instant               | unloadedClass, definingClassLoader                                |
| `jdk.ClassRedefinition`      | A class was redefined                | false | instant               | redefinedClass, classModificationCount, redefinitionId            |
| `jdk.RedefineClasses`        | `RedefineClasses` JVMTI operation    | true  | duration              | duration, classCount, redefinitionId                              |
| `jdk.RetransformClasses`     | `RetransformClasses` JVMTI operation | true  | duration              | duration, classCount, redefinitionId                              |
| `jdk.ClassLoadingStatistics` | Aggregate class loading statistics   | false | periodic (everyChunk) | loadedClassCount, unloadedClassCount                              |
| `jdk.ClassLoaderStatistics`  | Per-classloader statistics           | false | periodic (everyChunk) | classLoader, parentClassLoader, classCount, chunkSize, blockSize  |
| `jdk.ModuleRequire`          | A module `requires` dependency edge  | false | periodic (everyChunk) | source, requiredModule                                            |
| `jdk.ModuleExport`           | A module export edge                 | false | periodic (everyChunk) | exportedPackage, targetModule                                     |

### 5.11 Compiler / JIT / code cache

| Event                        | Description                                 | ST    | Kind                  | Key fields                                                                          |
| ---------------------------- | ------------------------------------------- | ----- | --------------------- | ----------------------------------------------------------------------------------- |
| `jdk.Compilation`            | Result of a method compilation attempt      | false | duration              | duration, method, **compileLevel**, **succeded**, isOsr, codeSize, **inlinedBytes** |
| `jdk.CompilationFailure`     | A JIT compilation failed                    | false | instant               | failureMessage, compileId                                                           |
| `jdk.CompilerPhase`          | A phase of the compilation process          | false | duration              | duration, phase, compileId, phaseLevel                                              |
| `jdk.CompilerInlining`       | Result of a method inlining attempt         | false | instant               | compileId, caller, callee, **succeeded**, **message**, bci                          |
| `jdk.Deoptimization`         | Uncommon trap that may deoptimize a method  | true  | instant               | compileId, method, reason, action, bci                                              |
| `jdk.JITRestart`             | JIT compilers restarted after being stopped | false | instant               | freedMemory, codeCacheMaxCapacity                                                   |
| `jdk.CompilerStatistics`     | Aggregate compiler statistics               | false | periodic (everyChunk) | compileCount, bailoutCount, invalidatedCount, nmethodsSize                          |
| `jdk.CompilerConfiguration`  | Compiler configuration                      | false | periodic (endChunk)   | threadCount, tieredCompilation                                                      |
| `jdk.CodeCacheFull`          | A code heap is full                         | false | instant               | codeBlobType, startAddress, fullCount                                               |
| `jdk.CodeCacheStatistics`    | Code cache statistics                       | false | periodic (everyChunk) | codeBlobType, startAddress, reservedTopAddress, fullCount                           |
| `jdk.CodeCacheConfiguration` | Code cache configuration                    | false | periodic (endChunk)   | initialSize, reservedSize, nonNMethodSize, profiledSize                             |

### 5.12 JVM internals — runtime / safepoints / continuations / flags

| Event                               | Description                               | ST    | Kind                  | Key fields                                                          |
| ----------------------------------- | ----------------------------------------- | ----- | --------------------- | ------------------------------------------------------------------- |
| `jdk.ExecuteVMOperation`            | Execution of a VM operation               | false | duration              | duration, operation, safepoint, blocking, caller                    |
| `jdk.SafepointBegin`                | Safepoint begins                          | false | duration              | duration, safepointId, totalThreadCount                             |
| `jdk.SafepointStateSynchronization` | Synchronize thread run-state at safepoint | false | duration              | duration, safepointId, initialThreadCount, runningThreadCount       |
| `jdk.SafepointCleanup`              | Safepoint cleanup begins                  | false | duration              | duration, safepointId                                               |
| `jdk.SafepointCleanupTask`          | A specific safepoint cleanup task         | false | duration              | duration, safepointId, **name**                                     |
| `jdk.SafepointEnd`                  | Safepoint ends                            | false | duration              | duration, safepointId                                               |
| `jdk.ContinuationFreeze`            | `Continuation.yield()` invocation         | true  | duration              | duration, id, **size**                                              |
| `jdk.ContinuationThaw`              | `Continuation.run()` (resume)             | true  | duration              | duration, id, **size**                                              |
| `jdk.ContinuationFreezeFast`        | Fast-path continuation freeze             | false | instant               | id, **size**, allocate                                              |
| `jdk.ContinuationFreezeSlow`        | Slow-path continuation freeze             | false | instant               | id                                                                  |
| `jdk.ContinuationThawFast`          | Fast-path continuation thaw               | false | instant               | id, **size**, full                                                  |
| `jdk.ContinuationThawSlow`          | Slow-path continuation thaw               | false | instant               | id, full                                                            |
| `jdk.Shutdown`                      | JVM shutting down                         | true  | instant               | reason                                                              |
| `jdk.NativeLibrary`                 | A native library/image loaded             | false | periodic (everyChunk) | **name**, baseAddress, topAddress                                   |
| `jdk.ThreadDump`                    | Periodic textual thread dump              | false | periodic (everyChunk) | result                                                              |
| `jdk.SymbolTableStatistics`         | Symbol table statistics                   | false | periodic (everyChunk) | bucketCount, entryCount, totalFootprint                             |
| `jdk.StringTableStatistics`         | String table statistics                   | false | periodic (everyChunk) | bucketCount, entryCount, totalFootprint                             |
| `jdk.JVMInformation`                | JVM and application description           | false | periodic (endChunk)   | jvmName, jvmVersion, jvmArguments, javaArguments, jvmStartTime, pid |
| `jdk.InitialSystemProperty`         | A `-D` system property at JVM start       | false | periodic (endChunk)   | key, **value**                                                      |
| `jdk.IntFlag`                       | Int JVM flag value                        | false | periodic (endChunk)   | **name**, **value**, origin                                         |
| `jdk.UnsignedIntFlag`               | Unsigned int JVM flag value               | false | periodic (endChunk)   | name, value, origin                                                 |
| `jdk.LongFlag`                      | Long JVM flag value                       | false | periodic (endChunk)   | name, value, origin                                                 |
| `jdk.UnsignedLongFlag`              | Unsigned long JVM flag value              | false | periodic (endChunk)   | name, value, origin                                                 |
| `jdk.DoubleFlag`                    | Double JVM flag value                     | false | periodic (endChunk)   | name, value, origin                                                 |
| `jdk.BooleanFlag`                   | Boolean JVM flag value                    | false | periodic (endChunk)   | name, value, origin                                                 |
| `jdk.StringFlag`                    | String JVM flag value                     | false | periodic (endChunk)   | name, value, origin                                                 |
| `jdk.IntFlagChanged`                | Int JVM flag changed at runtime           | false | instant               | **name**, **oldValue**, newValue, origin                            |
| `jdk.UnsignedIntFlagChanged`        | Unsigned int flag changed                 | false | instant               | name, oldValue, newValue, origin                                    |
| `jdk.LongFlagChanged`               | Long flag changed                         | false | instant               | name, oldValue, newValue, origin                                    |
| `jdk.UnsignedLongFlagChanged`       | Unsigned long flag changed                | false | instant               | name, oldValue, newValue, origin                                    |
| `jdk.DoubleFlagChanged`             | Double flag changed                       | false | instant               | name, oldValue, newValue, origin                                    |
| `jdk.BooleanFlagChanged`            | Boolean flag changed                      | false | instant               | name, oldValue, newValue, origin                                    |
| `jdk.StringFlagChanged`             | String flag changed                       | false | instant               | name, oldValue, newValue, origin                                    |
| `jdk.FinalizerStatistics`           | Per-class finalizer statistics            | false | periodic (endChunk)   | finalizableClass, codeSource, objects, totalFinalizersRun           |

### 5.13 OS / system

| Event                            | Description                           | ST    | Kind                | Key fields              |
| -------------------------------- | ------------------------------------- | ----- | ------------------- | ----------------------- |
| `jdk.OSInformation`              | OS description (uname-like)           | false | periodic (endChunk) | osVersion               |
| `jdk.VirtualizationInformation`  | Virtualization technology description | false | periodic (endChunk) | **name**                |
| `jdk.InitialEnvironmentVariable` | Env variable at JVM startup           | false | periodic (endChunk) | key, **value**          |
| `jdk.SystemProcess`              | An OS process present on the system   | false | periodic (endChunk) | pid, commandLine        |
| `jdk.ProcessStart`               | An OS process was started             | true  | instant             | pid, directory, command |

### 5.14 Containers

| Event                        | Description                 | ST    | Kind                  | Key fields                                                      |
| ---------------------------- | --------------------------- | ----- | --------------------- | --------------------------------------------------------------- |
| `jdk.ContainerConfiguration` | Container config attributes | false | periodic (everyChunk) | containerType, cpuSlicePeriod, cpuQuota, cpuShares, memoryLimit |
| `jdk.ContainerCPUUsage`      | Container CPU usage         | false | periodic (everyChunk) | cpuTime, cpuUserTime, cpuSystemTime                             |
| `jdk.ContainerCPUThrottling` | Container CPU throttling    | false | periodic (everyChunk) | cpuElapsedSlices, cpuThrottledSlices, cpuThrottledTime          |
| `jdk.ContainerMemoryUsage`   | Container memory usage      | false | periodic (everyChunk) | memoryFailCount, memoryUsage, swapMemoryUsage                   |
| `jdk.ContainerIOUsage`       | Container I/O usage         | false | periodic (everyChunk) | serviceRequests, dataTransferred                                |

### 5.15 Diagnostics / agents

| Event                       | Description                                           | ST    | Kind                | Key fields                                                        |
| --------------------------- | ----------------------------------------------------- | ----- | ------------------- | ----------------------------------------------------------------- |
| `jdk.HeapDump`              | A Java heap dump was written                          | true  | duration            | duration, destination, **size**, gcBeforeDump, onOutOfMemoryError |
| `jdk.SyncOnValueBasedClass` | Synchronization on a value-based class (experimental) | true  | instant             | valueBasedClass                                                   |
| `jdk.JavaAgent`             | A Java instrumentation agent in use                   | false | periodic (endChunk) | **name**, options, dynamic, initializationTime                    |
| `jdk.NativeAgent`           | A native (JVMTI) agent in use                         | false | periodic (endChunk) | **name**, options, dynamic, initializationTime, path              |

### 5.16 Exceptions / errors

| Event                     | Description                                     | ST    | Kind                  | Key fields               |
| ------------------------- | ----------------------------------------------- | ----- | --------------------- | ------------------------ |
| `jdk.JavaExceptionThrow`  | A `java.lang.Exception` was created             | true  | instant               | **message**, thrownClass |
| `jdk.JavaErrorThrow`      | A `java.lang.Error` was created (OOMEs ignored) | true  | instant               | **message**, thrownClass |
| `jdk.ExceptionStatistics` | Count of `Throwable` objects created            | false | periodic (everyChunk) | throwables               |

### 5.17 Security

| Event                              | Description                                   | ST    | Kind                  | Key fields                                                       |
| ---------------------------------- | --------------------------------------------- | ----- | --------------------- | ---------------------------------------------------------------- |
| `jdk.TLSHandshake`                 | Parameters used in a TLS handshake            | true  | instant               | peerHost, peerPort, protocolVersion, cipherSuite, certificateId  |
| `jdk.X509Certificate`              | An X.509 certificate parsed by the JDK        | true  | instant               | algorithm, serialNumber, subject, issuer, keyType, certificateId |
| `jdk.X509Validation`               | Serial numbers of an X.509 trust chain        | true  | instant               | certificateId, certificatePosition, validationCounter            |
| `jdk.SecurityProviderService`      | `Provider.getInstance(type, algorithm)` calls | true  | instant               | type, algorithm, provider                                        |
| `jdk.SecurityPropertyModification` | A security property was modified              | true  | instant               | key, **value**                                                   |
| `jdk.InitialSecurityProperty`      | Initial security property values              | false | periodic (everyChunk) | key, **value**                                                   |

### 5.18 Serialization

| Event                 | Description                                       | ST   | Kind    | Key fields                                                                                                       |
| --------------------- | ------------------------------------------------- | ---- | ------- | ---------------------------------------------------------------------------------------------------------------- |
| `jdk.Deserialization` | Deserialization + ObjectInputFilter check results | true | instant | filterConfigured, filterStatus, type, **arrayLength**, objectReferences, **depth**, **bytesRead**, exceptionType |

### 5.19 Recording / Flight Recorder metadata

| Event                 | Description                                      | ST    | Kind     | Key fields                                                           |
| --------------------- | ------------------------------------------------ | ----- | -------- | -------------------------------------------------------------------- |
| `jdk.ActiveRecording` | An active flight recording                       | false | duration | duration, id, **name**, destination, maxAge, maxSize, recordingStart |
| `jdk.ActiveSetting`   | A recording setting in effect                    | false | instant  | duration, id, **name**, **value**                                    |
| `jdk.DumpReason`      | Who requested the recording and why              | false | instant  | reason, recordingId                                                  |
| `jdk.DataLoss`        | Buffer data could not be copied out (contention) | false | instant  | amount, total                                                        |
| `jdk.Flush`           | A recording chunk flush (experimental)           | false | duration | duration, flushId, elements, **size**                                |

### 5.20 Catalog summary

- **Total event types:** 183
- **Carry a stack trace (`stackTrace=true`):** 58
- **By kind:** instant 69 · duration 54 · periodic 60 (`everyChunk` = sampled
  per chunk; `endChunk` = config/metadata snapshots)
- **Experimental in JDK 21:** `SyncOnValueBasedClass`, `Continuation*`,
  `ZStatisticsCounter`, `ZStatisticsSampler`, `ZThreadPhase`, `Flush`
- **Collector-gated:** ZGC, Shenandoah, G1, Parallel, and CMS-era
  `ConcurrentModeFailure` events only emit under the matching collector.
- Every event also carries standard `startTime` (and `eventThread`/`stackTrace`
  where applicable). 154 events come from `metadata.xml`; 29 are Java-side
  mirror events (File/Socket I/O, security, X509, TLS, virtual threads,
  containers, deserialization, process start, exception/error throws, active
  recording/ setting) whose flags come from their Java
  `@StackTrace`/registration source.

---

## 6. async-profiler — complete JFR event handling

> From `src/converter/one/jfr/JfrReader.java` (canonical reader),
> `event/*.java`, and `docs/ProfilingModes.md` @ `master`. async-profiler writes
> JFR mixing a subset of standard `jdk.*` events with its own `profiler.*`
> custom events.

### 6.1 Event-type cache — every type `JfrReader` dispatches on

`cacheEventTypes()` resolves these per chunk (returns `-1` if absent):

| Reader field            | JFR type name                     | Std/Custom | Read method                                          |
| ----------------------- | --------------------------------- | ---------- | ---------------------------------------------------- |
| `executionSample`       | `jdk.ExecutionSample`             | standard   | `readExecutionSample(false)`                         |
| `nativeMethodSample`    | `jdk.NativeMethodSample`          | standard   | `readExecutionSample(false)`                         |
| `wallClockSample`       | `profiler.WallClockSample`        | custom     | `readExecutionSample(true)`                          |
| `allocationInNewTLAB`   | `jdk.ObjectAllocationInNewTLAB`   | standard   | `readAllocationSample(true)`                         |
| `allocationOutsideTLAB` | `jdk.ObjectAllocationOutsideTLAB` | standard   | `readAllocationSample(false)`                        |
| `allocationSample`      | `jdk.ObjectAllocationSample`      | standard   | `readAllocationSample(false)`                        |
| `liveObject`            | `profiler.LiveObject`             | custom     | `readLiveObject()`                                   |
| `span`                  | `profiler.Span`                   | custom     | `readSpan()`                                         |
| `methodTrace`           | `jdk.MethodTrace`                 | standard   | `readMethodTrace()`                                  |
| `monitorEnter`          | `jdk.JavaMonitorEnter`            | standard   | `readContendedLock(false)`                           |
| `threadPark`            | `jdk.ThreadPark`                  | standard   | `readContendedLock(true)`                            |
| `activeSetting`         | `jdk.ActiveSetting`               | standard   | `readActiveSetting()` (no Event; fills settings map) |
| `malloc`                | `profiler.Malloc`                 | custom     | `readMallocEvent(true)`                              |
| `free`                  | `profiler.Free`                   | custom     | `readMallocEvent(false)`                             |
| `cpuTimeSample`         | `jdk.CPUTimeSample`               | standard   | `readCPUTimeSample()`                                |
| `nativeLock`            | `profiler.NativeLock`             | custom     | `readNativeLockEvent()`                              |

Plus flag `hasWallTimeSpan` = true iff `profiler.WallClockSample` has a
`timeSpan` field. Reflectively-registered (via constructors in
`reachability-metadata.json`): `jdk.CPULoad`, `jdk.GCHeapSummary`,
`jdk.ObjectCount`, `jdk.ObjectCountAfterGC`, `profiler.ProcessSample`. More can
be registered at runtime via `registerEvent(name, eventClass)`.

### 6.2 Per-event decode + aggregation

Base `Event` fields (all): `time`, `tid`, `stackTraceId`. Defaults:
`classId()=0`, `samples()=1`, `value()=1`.

| Event                                                | Stack?          | Weight (`value()`)             | Group key (`sameGroup`) | Notable extra                                                                      |
| ---------------------------------------------------- | --------------- | ------------------------------ | ----------------------- | ---------------------------------------------------------------------------------- |
| `jdk.ExecutionSample` / `jdk.NativeMethodSample`     | `stackTraceId`  | `samples` (=1)                 | —                       | `threadState`                                                                      |
| `profiler.WallClockSample`                           | `stackTraceId`  | `samples` (real count, varint) | —                       | ignores trailing `timeSpan` varlong if present                                     |
| `jdk.CPUTimeSample`                                  | `stackTraceId`  | 1                              | —                       | reads+discards `failed`, `samplingPeriod`, `biased`; threadState = synthetic `254` |
| `jdk.ObjectAllocation{InNewTLAB,OutsideTLAB,Sample}` | `stackTraceId`  | `tlabSize ?: allocationSize`   | `classId` + tlab bucket | `objectClass`                                                                      |
| `profiler.LiveObject`                                | `stackTraceId`  | `allocationSize`               | `classId`               | `allocationTime`                                                                   |
| `jdk.JavaMonitorEnter` / `jdk.ThreadPark`            | `stackTraceId`  | `duration` (ns)                | `classId`               | park ignores timeout/until/address                                                 |
| `profiler.NativeLock`                                | `stackTraceId`  | `duration` (ns)                | —                       | `address`                                                                          |
| `profiler.Malloc` / `profiler.Free`                  | `stackTraceId`  | `size` (Free=0)                | —                       | `address` (match malloc↔free for `--leak`)                                         |
| `jdk.MethodTrace`                                    | `stackTraceId`  | `duration`                     | `method`                | extends IntervalEvent                                                              |
| `profiler.Span`                                      | **none** (id=0) | `duration`                     | `tag` (string)          | identity = tag                                                                     |
| `profiler.ProcessSample`                             | none (id=0)     | —                              | —                       | process resource metadata (pid, rss, cpu%, io…)                                    |
| `jdk.CPULoad`                                        | none            | —                              | —                       | jvmUser/jvmSystem/machineTotal                                                     |
| `jdk.GCHeapSummary`                                  | none            | —                              | —                       | committed/reserved/used                                                            |
| `jdk.ObjectCount` / `jdk.ObjectCountAfterGC`         | none            | —                              | —                       | gcId, classId, count, totalSize                                                    |

**Exact read orders** (for a parser): `ExecutionSample`: time, tid,
stackTraceId, threadState, samples. `AllocationSample`: time, tid, stackTraceId,
classId, allocationSize, (tlabSize if tlab). `ContendedLock`: time, duration,
tid, stackTraceId, classId, (timeout, until, address if park).
`NativeLockEvent`: time, duration, tid, stackTraceId, address. `MallocEvent`:
time, tid, stackTraceId, address, (size if malloc). `MethodTrace`: time,
duration, tid, stackTraceId, method. `SpanEvent`: startTime, duration, tid, tag.
`CPUTimeSample`: time, stackTraceId, tid, failed, samplingPeriod, biased.

### 6.3 Event class hierarchy

- `Event` → base.
  - `ExecutionSample` (threadState, samples; `CPU_TIME_SAMPLE=254`)
  - `AllocationSample` (classId, allocationSize, tlabSize)
  - `LiveObject` (classId, allocationSize, allocationTime)
  - `ContendedLock` (duration, classId)
  - `MallocEvent` (address, size)
  - `NativeLockEvent` (address, duration)
  - `IntervalEvent` (duration) → `MethodTrace` (method), `SpanEvent` (tag)
  - Reflective-only: `ProcessSample`, `CPULoad`, `GCHeapSummary`, `ObjectCount`

Non-event helpers: `EventAggregator`, `EventCollector`, `MallocLeakAggregator`.
There is no `WallClock.java` — wall samples decode into `ExecutionSample` via
`readExecutionSample(wall=true)`.

### 6.4 Profiling modes → JFR event mapping (`ProfilingModes.md`)

| Mode / option                                                                                                                                                                                                       | JFR event(s)                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| CPU (`-e cpu`, default), itimer/cpu-clock, perf events (`cycles`, `instructions`, `cache-misses`, `page-faults`, `context-switches`, PMU `rNNN`, tracepoints, kprobe/uprobe, `mem:`, native function `-e <symbol>`) | `jdk.ExecutionSample`                                                                                                                             |
| CPU-time (JDK sampler)                                                                                                                                                                                              | `jdk.CPUTimeSample` (→ ExecutionSample, threadState 254)                                                                                          |
| Allocation (`-e alloc`, `--alloc`)                                                                                                                                                                                  | `jdk.ObjectAllocationInNewTLAB`, `jdk.ObjectAllocationOutsideTLAB` (and `jdk.ObjectAllocationSample`); top frame = class, counter = heap pressure |
| Live objects (`-e live`, part of `--all`)                                                                                                                                                                           | `profiler.LiveObject`                                                                                                                             |
| Wall clock (`-e wall`, best with `-t`)                                                                                                                                                                              | `profiler.WallClockSample`                                                                                                                        |
| Lock — Java (`-e lock`, `--lock`)                                                                                                                                                                                   | `jdk.JavaMonitorEnter`, `jdk.ThreadPark`; counter = ns to enter                                                                                   |
| Native lock (`--nativelock`)                                                                                                                                                                                        | `profiler.NativeLock`; ns on pthread mutex/rwlock                                                                                                 |
| Native memory (`nativemem`, `--nativemem`, `--nofree`; `--leak`)                                                                                                                                                    | `profiler.Malloc`, `profiler.Free`                                                                                                                |
| Java method (`-e ClassName.methodName`) / latency                                                                                                                                                                   | `jdk.MethodTrace`                                                                                                                                 |
| Multiple events (`-e cpu,alloc,lock`)                                                                                                                                                                               | combination above — JFR is the only multi-event output format                                                                                     |
| `--all`                                                                                                                                                                                                             | cpu + wall + alloc + live + lock + nativemem together                                                                                             |

Auxiliary/metadata (no dedicated mode flag): `profiler.Span`,
`profiler.ProcessSample`, `jdk.CPULoad`, `jdk.GCHeapSummary`,
`jdk.ObjectCount`/`ObjectCountAfterGC`, `jdk.ActiveSetting`.

---

## 7. jdk.CPUTimeSample / JEP 509 (JDK 25+)

> **JEP 509: JFR CPU-Time Profiling (Experimental)** — delivered in **JDK 25**
> (not JDK 21). Linux only. Authors: Bachorík, Bechberger, Pressler.

- Uses the Linux CPU-timer mechanism to sample the stack of **every** thread
  running Java code at fixed intervals of **CPU time** (not elapsed time). Each
  sample → a `jdk.CPUTimeSample` event (**not enabled by default**).
- Similar to `jdk.ExecutionSample` but: samples by CPU-time, covers **native
  code** CPU (attributed to the calling Java method), samples all threads, and
  reports missed samples. Both can be collected simultaneously.
- Fixes execution-sampler deficiencies: misses native code, doesn't report
  missed samples, samples only a subset of threads.
- **Fields:** `startTime` (CPU time before stack walk), `eventThread`,
  `stackTrace` (null if walk failed), `samplingPeriod`, `biased` (safepoint bias
  possible).
- **Companion `jdk.CPUTimeSamplesLost`** (`lostSamples` field) — enabled by
  default but only emitted when `jdk.CPUTimeSample` is enabled.
- **Throttle:** `throttle=10ms` (per-thread CPU period) or `throttle=500/s`
  (overall rate, default). `profile.jfc` uses `10ms`.
- Both events are `@Experimental` but do **not** require
  `-XX:+UnlockExperimentalVMOptions`. Builds on JEP 518's cooperative sampling.
- Enable:
  `-XX:StartFlightRecording=jdk.CPUTimeSample#enabled=true,filename=profile.jfr`.
  View: `jfr view cpu-time-hot-methods profile.jfr`.

**Implication for profiler-md:** map `jdk.CPUTimeSample` into the `cpu` kind for
JDK 25+ forward-compat (async-profiler's reader already does this with synthetic
threadState 254). Not needed for JDK 21 inputs.

---

## 8. GraalVM Native Image supported events

> Build: `native-image --enable-monitoring=jfr App`. Run:
> `-XX:StartFlightRecording="filename=recording.jfr"`. A **reduced subset**:

```
jdk.ActiveRecording          jdk.ActiveSetting
jdk.AllocationRequiringGC[1]  jdk.ClassLoadingStatistics
jdk.ContainerCPUThrottling    jdk.ContainerCPUUsage
jdk.ContainerConfiguration    jdk.ContainerIOUsage
jdk.ContainerMemoryUsage      jdk.DataLoss
jdk.ExecutionSample           jdk.ExecuteVMOperation
jdk.GarbageCollection[1]      jdk.GCHeapSummary[1]
jdk.GCPhasePause[1]           jdk.GCPhasePauseLevel1..4[1]
jdk.InitialEnvironmentVariable jdk.InitialSystemProperty
jdk.JavaMonitorEnter          jdk.JavaMonitorInflate
jdk.JavaMonitorWait           jdk.JavaThreadStatistics
jdk.JVMInformation            jdk.NativeMemoryUsage[3]
jdk.NativeMemoryUsageTotal[3] jdk.NativeMemoryUsagePeak[3]
jdk.NativeMemoryUsageTotalPeak[3] jdk.ObjectAllocationSample[1]
jdk.ObjectAllocationInNewTLAB[1]  jdk.OldObjectSample[2]
jdk.OSInformation             jdk.PhysicalMemory
jdk.SafepointBegin            jdk.SafepointEnd
jdk.SocketRead                jdk.SocketWrite
jdk.SystemGC[1]               jdk.ThreadAllocationStatistics
jdk.ThreadCPULoad             jdk.ThreadEnd
jdk.ThreadPark                jdk.ThreadSleep
jdk.ThreadStart               jdk.VirtualThreadEnd
jdk.VirtualThreadPinned       jdk.VirtualThreadStart
```

- `[1]` Serial GC only (default in Native Image); `[2]` partial, Serial GC only;
  `[3]` only if Native Memory Tracking enabled.
- **Limitations:** no JFR on Windows yet; no stacktraces on _streamed_ events
  (snapshots retain them); `OldObjectSample` has no GC-root path; **file I/O and
  exception** events (bytecode-instrumented on HotSpot) are **not** available;
  remote JMX experimental; `jcmd` (`JFR.start/stop/check/dump`) needs build-time
  config.

**Implication:** the converter's existing CPU + alloc handling already covers
Native-Image JFR (it emits `jdk.ExecutionSample` + `jdk.ObjectAllocation*`).

---

## 9. Coverage vs. the current converter

The four kinds in `src/formats/jfr/parse.ts` (`cpu`, `alloc`, `nativemem`,
`lock`) already cover the high-value sampling set across HotSpot JDK 21,
async-profiler, and GraalVM Native Image.

Currently handled:

- **cpu**: `jdk.ExecutionSample`, `jdk.NativeMethodSample`,
  `profiler.WallClockSample`
- **alloc**: `jdk.ObjectAllocationSample`, `jdk.ObjectAllocationInNewTLAB`,
  `jdk.ObjectAllocationOutsideTLAB`
- **nativemem**: `profiler.Malloc` (with `profiler.Free` ignored)
- **lock**: `jdk.JavaMonitorEnter`, `jdk.ThreadPark`, `profiler.NativeLock`
- **constant pool**: `jdk.types.Symbol`, `jdk.types.Method`,
  `jdk.types.StackFrame`, `jdk.types.StackTrace`

Stack-carrying, aggregatable events **not** yet handled: `jdk.CPUTimeSample`,
`jdk.JavaMonitorWait`, `jdk.ThreadSleep`, `jdk.AllocationRequiringGC`,
`profiler.LiveObject`, `jdk.MethodTrace`, `profiler.Span`, and the I/O family
(`jdk.FileRead/Write`, `jdk.SocketRead/Write`).

---

## 10. Recommended gaps to consider

In rough priority order:

1. **`jdk.JavaMonitorWait`** + **`jdk.ThreadSleep`** → fold into `lock` (stack +
   duration; same shape as existing lock events; async-profiler also reads
   MonitorWait-adjacent paths). `ThreadSleep` is debatable noise. Cheapest win.
2. **`profiler.LiveObject`** → a retained / live-heap kind (async-profiler
   `--live` / `--all`); stack + `allocationSize`, survivors only.
3. **`jdk.CPUTimeSample`** → add to the `cpu` mapping for JDK 25+ forward-compat
   (synthetic threadState handled like async-profiler does).
4. **I/O family** (`jdk.SocketRead/Write`, `jdk.FileRead/Write`) → a new `io`
   kind if I/O attribution is desired; stack + duration/bytes.
5. **`jdk.MethodTrace`** / **`profiler.Span`** → method-tracing/latency kind
   (stack + duration; Span has no stack — identity is its `tag`).
6. **`jdk.AllocationRequiringGC`** → minor; alloc-with-GC-pressure.

**Caveat (verified):** do not decide "aggregate this" by the presence of a
`stackTrace` field alone — config/class events can carry stacks but are not
sample events. The reliable discriminator is the curated event-name →
kind/weight allowlist.

---

## 11. Sources

### Highest-quality / canonical

- **OpenJDK `jdk21u` `metadata.xml`** — per-event `stackTrace`/`period`/fields:
  <https://raw.githubusercontent.com/openjdk/jdk21u/master/src/hotspot/share/jfr/metadata/metadata.xml>
- **OpenJDK master `metadata.xml`**:
  <https://github.com/openjdk/jdk/blob/master/src/hotspot/share/jfr/metadata/metadata.xml>
- **async-profiler `JfrReader.java`** — exact event names + read orders:
  <https://github.com/async-profiler/async-profiler/blob/master/src/converter/one/jfr/JfrReader.java>
- **async-profiler `event/*.java`** — per-event field layouts (raw copies in
  `/tmp/jfrevents/` during research)
- **async-profiler `ProfilingModes.md`**:
  <https://github.com/async-profiler/async-profiler/blob/master/docs/ProfilingModes.md>
- **JEP 509** (`jdk.CPUTimeSample`): <https://openjdk.org/jeps/509>
- **GraalVM Native Image JFR**:
  <https://www.graalvm.org/latest/reference-manual/native-image/debugging-and-diagnostics/JFR/>
- **OpenJDK HotSpot** `jfrChunkWriter.cpp` / `jfrChunk.cpp` / `jfrTypes.hpp`
  (byte-level header, checkpoint, reserved IDs)
- **Oracle JDK 21 `jdk.jfr` API**:
  <https://docs.oracle.com/en/java/javase/21/docs/api/jdk.jfr/jdk/jfr/EventType.html>
  ·
  <https://docs.oracle.com/en/java/javase/21/docs/api/jdk.jfr/jdk/jfr/package-summary.html>

### Catalogs / secondary

- **bestsolution-at jfr-doc (JDK 21)** — browsable per-event catalog:
  <https://bestsolution-at.github.io/jfr-doc/openjdk-21.html> ·
  <https://bestsolution-at.github.io/jfr-doc/>
- **SAP jfrevents (JDK 21)**: <https://sap.github.io/jfrevents/21.html>
- **Erik Gahlin — JFR views**: <https://egahlin.github.io/2023/05/30/views.html>
- **JProfiler — JFR views**:
  <https://www.ej-technologies.com/resources/jprofiler/help/doc/jfr/jfrViews.html>

### Format / async-profiler write-ups

- **Morling — "JDK Flight Recorder file format"**:
  <https://www.morling.dev/blog/jdk-flight-recorder-file-format/>
- **Krzysztof Ślusarski — async-profiler manual**:
  <https://krzysztofslusarski.github.io/2022/12/12/async-manual.html>
- **DeepWiki — async-profiler JFR converter**:
  <https://deepwiki.com/grafana/async-profiler/6.3-jfr-converter>
- **async-profiler JfrVisualization.md**:
  <https://github.com/async-profiler/async-profiler/blob/master/docs/JfrVisualization.md>

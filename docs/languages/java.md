# Java/Kotlin/Groovy

Java, Kotlin, and Groovy profiling works with any JVM language, using
[Java Flight Recorder](https://docs.oracle.com/en/java/javase/21/jfapi/) (JFR),
built into the JDK since JDK 11, or
[async-profiler](https://github.com/async-profiler/async-profiler), which also
resolves native frames and works on older JDKs.

## CPU profiling

Periodically samples the call stack while on CPU. Useful for finding CPU hot
spots. Recorded as `jdk.ExecutionSample` events, plus `jdk.NativeMethodSample`
events for threads running native methods.

### Java Flight Recorder

```sh
java -XX:StartFlightRecording=filename=cpu.jfr,settings=none,+jdk.ExecutionSample#enabled=true,+jdk.ExecutionSample#period=10ms,+jdk.NativeMethodSample#enabled=true,+jdk.NativeMethodSample#period=10ms -jar app.jar
jfr summary cpu.jfr
```

### async-profiler

#### CLI

```sh
# Attach to a running JVM (the .jfr extension selects the JFR format)
asprof -e cpu -d 30 -f cpu.jfr <pid>

# Or write collapsed stacks
asprof -e cpu -d 30 -o collapsed -f cpu.collapsed <pid>
```

#### Programmatic API

Add `async-profiler` to your dependencies, then control it in-process. The
output format follows the file extension (`.jfr` or `.collapsed`), and `event`
selects the metric:

```java
import one.profiler.AsyncProfiler;

AsyncProfiler profiler = AsyncProfiler.getInstance();
profiler.execute("start,event=cpu,file=cpu.jfr");

// Code to profile...

profiler.execute("stop");
```

## Wall-clock profiling

Samples wall-clock time rather than CPU time, including time threads spend
waiting. Useful for I/O-bound or latency-sensitive code.

### Java Flight Recorder

JFR has no wall-clock sampler, so this metric is async-profiler only. JFR does
record specific waiting events, such as `jdk.ThreadPark`, through the lock
recipe below.

### async-profiler

```sh
asprof -e wall -d 30 -f wall.jfr <pid>
```

Recorded as `profiler.WallClockSample` events. To record wall-clock samples
alongside another event, pass the interval through `--wall` rather than
`-e wall`, which async-profiler rejects in combination with a second event:

```sh
asprof -e cpu --wall 100ms -d 30 -f combined.jfr <pid>
```

## Memory profiling

Samples memory allocations, in allocated bytes. async-profiler offers three
variants; JFR offers two:

- **heap allocations**: every heap allocation sampled since profiling started,
  useful for finding allocation hot spots and reducing GC pressure
- **live heap**: only allocations whose objects are still live at the end,
  useful for finding leaks
- **native memory**: off-heap `malloc`/`free`, useful for finding native leaks
  (async-profiler only)

### Java Flight Recorder

```sh
# Heap allocation hot spots (jdk.ObjectAllocationSample, JDK 16+)
java -XX:StartFlightRecording=filename=alloc.jfr,settings=none,+jdk.ObjectAllocationSample#enabled=true,+jdk.ObjectAllocationSample#throttle=150/s -jar app.jar

# Live objects, for leak finding (jdk.OldObjectSample)
java -XX:StartFlightRecording=filename=live.jfr,settings=none,+jdk.OldObjectSample#enabled=true,+jdk.OldObjectSample#stackTrace=true -jar app.jar
```

JFR's native memory tracking (`-XX:NativeMemoryTracking`) reports usage by
category rather than call-stack-attributed allocations, so native allocation
profiling is async-profiler only.

### async-profiler

```sh
# Heap allocation hot spots (jdk.ObjectAllocationInNewTLAB/OutsideTLAB)
asprof -e alloc -d 30 -f alloc.jfr <pid>

# Live objects only, for leak finding (profiler.LiveObject)
asprof -e alloc --live -d 30 -f live.jfr <pid>

# Off-heap native memory (profiler.Malloc/Free); --nofree skips free events
asprof -e nativemem -d 30 -f native.jfr <pid>
```

`--alloc <bytes>` and `--nativemem <bytes>` set the sampling interval for the
heap and native variants.

## Heap dumps

Captures every live object on the heap, with the references between them. Useful
for finding what a leak retains, which the allocation profiles above don't
record. The JVM writes the dump in the HPROF format.

### CLI

```sh
# Attach to a running JVM (live objects only, after a full GC)
jcmd <pid> GC.heap_dump -all=false heap.hprof

# Or with jmap
jmap -dump:live,format=b,file=heap.hprof <pid>
```

### On out of memory

```sh
java -XX:+HeapDumpOnOutOfMemoryError -XX:HeapDumpPath=heap.hprof -jar app.jar
```

#### Flags

| Flag                              | Default           | Description                                          |
| --------------------------------- | ----------------- | ---------------------------------------------------- |
| `-XX:+HeapDumpOnOutOfMemoryError` | off               | Dump the heap when the JVM throws `OutOfMemoryError` |
| `-XX:HeapDumpPath=<path>`         | working directory | File or directory the dump is written to             |

### Programmatic API

`HotSpotDiagnosticMXBean` dumps the heap from inside the process:

```java
import com.sun.management.HotSpotDiagnosticMXBean;
import java.lang.management.ManagementFactory;

HotSpotDiagnosticMXBean diagnostics = ManagementFactory.getPlatformMXBean(
    HotSpotDiagnosticMXBean.class);

// Code to capture...
diagnostics.dumpHeap("heap.hprof", /* live= */ true);
```

## Lock profiling

Samples contended monitor and `java.util.concurrent` locks. Useful for finding
lock contention hot spots. The sampled values are nanoseconds spent blocked.
Recorded as `jdk.JavaMonitorEnter` and `jdk.ThreadPark` events.

### Java Flight Recorder

```sh
java -XX:StartFlightRecording=filename=lock.jfr,settings=none,+jdk.JavaMonitorEnter#enabled=true,+jdk.JavaMonitorEnter#threshold=10ms,+jdk.ThreadPark#enabled=true,+jdk.ThreadPark#threshold=10ms -jar app.jar
```

### async-profiler

```sh
asprof -e lock -d 30 -f lock.jfr <pid>
```

Recorded as `profiler.NativeLock` events.

## Profiling all events

### Java Flight Recorder

The `profile` template records execution samples, allocations, locks, GC, and
many other JVM events at once. JFR rotates the recording into chunks as it
grows. `-XX:FlightRecorderOptions=maxchunksize=…` controls the threshold.

```sh
java -XX:StartFlightRecording=filename=all.jfr,settings=profile -jar app.jar
jfr summary all.jfr
```

### async-profiler

`--all` enables `cpu`, `wall`, `alloc`, `live`, `nativemem`, and `lock` at once.
Add `--nofree` to suppress the high-volume native `free` events, which otherwise
dominate the recording.

```sh
asprof --all --nofree -d 30 -f all.jfr <pid>
```

## async-profiler CLI flags

| Flag    | Default            | Description                                                  |
| ------- | ------------------ | ------------------------------------------------------------ |
| `-e`    | `cpu`              | Event to profile: `cpu`, `wall`, `alloc`, `lock`, and others |
| `-d`    | —                  | Duration in seconds                                          |
| `-o`    | the `-f` extension | Output format (`jfr`, `collapsed`, `flamegraph`, and others) |
| `-f`    | —                  | Output file path                                             |
| `-i`    | `10ms`             | Sampling interval (e.g. `-i 1ms` for 1000 Hz)                |
| `--all` | —                  | Enable cpu, wall, alloc, live, nativemem, and lock at once   |
| `<pid>` | —                  | Target JVM PID, `jps`, or the application name               |

`-o` overrides the format the `-f` filename's extension selects. A run with
neither writes a text summary.

## Tips

### Platforms

The default `cpu` event works on macOS, where it samples CPU time through a
timer. Hardware events such as `cache-misses` require Linux `perf_events`.

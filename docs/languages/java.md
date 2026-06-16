# Java/Kotlin

Java and Kotlin profiling uses
[async-profiler](https://github.com/async-profiler/async-profiler), a low
overhead sampling profiler that works with any JVM language.

## CPU profiling

Periodically samples the call stack. Useful for finding CPU hot spots.

### CLI

```sh
# Attach to a running process (collapsed format)
asprof -d 30 -f cpu.collapsed -o collapsed <pid>

# Attach to a running process (pprof format)
asprof -d 30 -f cpu.pprof <pid>

# Attach to a running process (speedscope format)
asprof -d 30 -f profile.speedscope -o speedscope <pid>

# Profile a command directly
asprof -d 30 -f cpu.pprof -- java -jar app.jar
```

### Programmatic API

Add `async-profiler` to your dependencies, then:

```java
import one.profiler.AsyncProfiler;

AsyncProfiler profiler = AsyncProfiler.getInstance();
profiler.execute("start,event=cpu,file=cpu.jfr");

// Code to profile...

profiler.execute("stop");
```

## Wall-clock profiling

Samples wall-clock time rather than CPU time. Useful for I/O-bound or
latency-sensitive code where threads spend time waiting.

### CLI

```sh
asprof -d 30 -e wall -f profile.pprof <pid>
```

### Programmatic API

```java
AsyncProfiler profiler = AsyncProfiler.getInstance();
profiler.execute("start,event=wall,file=profile.jfr");

// Code to profile...

profiler.execute("stop");
```

## Memory profiling

Samples heap allocations. Useful for finding allocation hot spots and reducing
GC pressure.

### CLI

```sh
# Attach to a running process (pprof format)
asprof -d 30 -e alloc -f mem.pprof <pid>

# Profile a command directly
asprof -d 30 -e alloc -f mem.pprof -- java -jar app.jar
```

### Programmatic API

```java
AsyncProfiler profiler = AsyncProfiler.getInstance();
profiler.execute("start,event=alloc,file=mem.jfr");

// Code to profile...

profiler.execute("stop");
```

## Lock profiling

Samples contended monitor locks (`synchronized`, `ReentrantLock`, and other
`java.util.concurrent` locks). Useful for finding lock contention hot spots.

### CLI

```sh
asprof -d 30 -e lock -f lock.pprof <pid>
```

### Programmatic API

```java
AsyncProfiler profiler = AsyncProfiler.getInstance();
profiler.execute("start,event=lock,file=lock.jfr");

// Code to profile...

profiler.execute("stop");
```

## CLI flags

| Flag                | Default | Description                                              |
| ------------------- | ------- | -------------------------------------------------------- |
| `-d` / `--duration` | —       | Duration in seconds                                      |
| `-e` / `--event`    | `cpu`   | Event to profile: `cpu`, `wall`, `alloc`, `lock`         |
| `-f` / `--file`     | —       | Output file path                                         |
| `-o` / `--output`   | `jfr`   | Output format: `collapsed`, `jfr`, `pprof`, `speedscope` |
| `-i` / `--interval` | `10ms`  | Sampling interval (e.g. `-i 1ms` for 1000 Hz)            |

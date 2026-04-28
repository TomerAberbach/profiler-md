# Python

Python profiling uses [py-spy](https://github.com/benford/py-spy), a sampling
profiler that attaches to a running process or wraps a script, and
[memray](https://github.com/bloomberg/memray) for memory profiling.

## CPU profiling

Periodically samples the call stack. Useful for finding CPU hot spots.

```sh
# pprof format (wrap a script)
py-spy record -f pprof -o cpu.pprof -- python script.py

# pprof format (attach to a running process)
py-spy record -f pprof -o cpu.pprof --pid <pid>

# Speedscope format
py-spy record -f speedscope -o profile.speedscope -- python script.py

# Include native extensions written in Cython or C
py-spy record -f pprof -o cpu.pprof --native -- python script.py
```

## Wall-clock profiling

Samples wall-clock time rather than CPU time. Useful for I/O-bound code where
threads spend time sleeping or waiting.

```sh
# Wrap a script
py-spy record -f pprof -o profile.pprof --idle -- python script.py

# Attach to a running process
py-spy record -f pprof -o profile.pprof --idle --pid <pid>
```

## Memory profiling

Tracks heap allocations. Useful for finding allocation hot spots and memory
leaks.

### CLI

```sh
# Record a memory profile (wrap a script)
memray run -o mem.bin script.py

# Attach to a running process
memray attach -o mem.bin <pid>

# Convert to pprof format
memray pprof mem.bin
```

### Programmatic API

```python
import memray

with memray.Tracker("mem.bin"):
    # Code to profile...
    pass
```

## Call stack dump

Captures the current call stacks of all threads in a running process. Useful for
diagnosing hangs, deadlocks, or unexpected blocking.

### CLI

```sh
# Dump call stacks of a running process (text output)
py-spy dump --pid <pid>

# Include local variables in each frame
py-spy dump --pid <pid> --locals
```

### Programmatic API

```python
import faulthandler

faulthandler.dump_traceback()  # all threads to stderr
```

## CLI flags

### `py-spy`

| Flag                | Default      | Description                                                |
| ------------------- | ------------ | ---------------------------------------------------------- |
| `-f` / `--format`   | `flamegraph` | Output format: `flamegraph`, `raw`, `speedscope`, `pprof`  |
| `-o` / `--output`   | —            | Output file path                                           |
| `-d` / `--duration` | —            | Duration in seconds (default: until program exits)         |
| `-r` / `--rate`     | `100`        | Sampling rate in Hz                                        |
| `--idle`            | off          | Include stack traces for idle (sleeping/waiting) threads   |
| `--native`          | off          | Profile native extensions written in Cython or C           |
| `--nonblocking`     | off          | Don't pause the process to collect samples (less accurate) |
| `--subprocesses`    | off          | Also profile subprocesses of the target                    |

### `memray`

| Flag                        | Default | Description                                         |
| --------------------------- | ------- | --------------------------------------------------- |
| `-o` / `--output`           | —       | Output file path                                    |
| `--native`                  | off     | Also capture native (C extension) stack frames      |
| `--follow-fork`             | off     | Also profile child processes after `fork()`         |
| `--aggregate`               | off     | Aggregate allocations to reduce output file size    |
| `--trace-python-allocators` | off     | Trace Python allocator calls for finer-grained data |

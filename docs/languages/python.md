# Python

Python profiling uses [py-spy](https://github.com/benfred/py-spy), a sampling
profiler that attaches to a running process or wraps a script.

py-spy natively writes **collapsed stacks** (its `raw` format) and
**Speedscope**. It does not write pprof, so pprof isn't listed.

On macOS py-spy needs to read another process's memory, which requires `sudo`
(for `task_for_pid`). On Linux it needs `CAP_SYS_PTRACE` (run as root or add the
capability); inside a container, run with `--cap-add=SYS_PTRACE`.

## CPU profiling

Periodically samples the call stack while threads are on CPU (idle threads are
excluded by default). Useful for finding CPU hot spots.

```sh
# Collapsed format (wrap a script)
sudo py-spy record -f raw -o cpu.collapsed -- python script.py

# Speedscope format (wrap a script)
sudo py-spy record -f speedscope -o cpu.speedscope.json -- python script.py

# Attach to a running process
sudo py-spy record -f raw -o cpu.collapsed --pid <pid>

# Include native extensions written in Cython or C
sudo py-spy record -f raw -o cpu.collapsed --native -- python script.py
```

## Wall-clock profiling

Includes idle (sleeping or waiting) threads so samples reflect wall-clock time
rather than CPU time. Useful for I/O-bound code.

```sh
sudo py-spy record -f raw -o wall.collapsed --idle -- python script.py
```

## Call stack dump

Captures the current call stacks of all threads in a running process. Useful for
diagnosing hangs, deadlocks, or unexpected blocking.

```sh
# Dump call stacks of a running process (text output)
sudo py-spy dump --pid <pid>

# Include local variables in each frame
sudo py-spy dump --pid <pid> --locals
```

## CLI flags

| Flag                | Default      | Description                                                |
| ------------------- | ------------ | ---------------------------------------------------------- |
| `-f` / `--format`   | `flamegraph` | Output format: `flamegraph`, `raw`, `speedscope`           |
| `-o` / `--output`   | —            | Output file path                                           |
| `-d` / `--duration` | —            | Duration in seconds (default: until program exits)         |
| `-r` / `--rate`     | `100`        | Sampling rate in Hz                                        |
| `--idle`            | off          | Include stack traces for idle (sleeping/waiting) threads   |
| `--native`          | off          | Profile native extensions written in Cython or C           |
| `--nonblocking`     | off          | Don't pause the process to collect samples (less accurate) |
| `--subprocesses`    | off          | Also profile subprocesses of the target                    |

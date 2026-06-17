# Ruby

Ruby profiling uses [rbspy](https://rbspy.github.io), a sampling profiler that
attaches to a running Ruby process. It natively writes **collapsed stacks**,
**pprof**, and **Speedscope**.

On macOS rbspy needs to read another process's memory, which requires `sudo`
(for `task_for_pid`). On Linux it needs `CAP_SYS_PTRACE` (run as root or add the
capability); inside a container, run with `--cap-add=SYS_PTRACE`.

## CPU profiling

Periodically samples the call stack. Useful for finding CPU hot spots.

### CLI

```sh
# Profile a command (speedscope format)
sudo rbspy record --format speedscope -o cpu.speedscope.json -- ruby script.rb

# Collapsed stacks
sudo rbspy record --format collapsed -o cpu.collapsed -- ruby script.rb

# pprof
sudo rbspy record --format pprof -o cpu.pprof -- ruby script.rb

# Attach to a running process
sudo rbspy record --format speedscope -o cpu.speedscope.json --pid <pid>

# Profile for a fixed duration
rbspy record --format speedscope -o profile.speedscope --duration 30 --pid <pid>

# Profile including child processes
rbspy record --format speedscope -o profile.speedscope --subprocesses --pid <pid>
```

## Snapshot

Captures a single stack trace from a running process. Useful for quickly
checking what a process is currently executing without starting a full
recording.

### CLI

```sh
rbspy snapshot --pid <pid>

# Don't pause the process while reading its stack
rbspy snapshot --nonblocking --pid <pid>
```

## CLI flags

| Flag                | Default      | Description                                                                                                |
| ------------------- | ------------ | ---------------------------------------------------------------------------------------------------------- |
| `-p` / `--pid`      | —            | PID of a running process to attach to                                                                      |
| `-d` / `--duration` | —            | Duration in seconds; records until Ctrl-C if omitted                                                       |
| `-r` / `--rate`     | `100`        | Samples per second                                                                                         |
| `-f` / `--format`   | `flamegraph` | Output format: `flamegraph`, `collapsed`, `pprof`, `speedscope`, `callgrind`, `summary`, `summary_by_line` |
| `-o` / `--file`     | —            | Output file path                                                                                           |
| `--subprocesses`    | —            | Also profile child processes                                                                               |
| `--nonblocking`     | —            | Don't pause the process while reading its stack (lower overhead, may miss frames)                          |

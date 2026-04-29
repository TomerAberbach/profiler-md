# Ruby

Ruby profiling uses [rbspy](https://rbspy.github.io), a sampling profiler that
attaches to a running Ruby process.

## CPU profiling

Periodically samples the call stack. Useful for finding CPU hot spots.

### CLI

```sh
# Profile a command (speedscope format)
rbspy record --format speedscope -o profile.speedscope -- ruby script.rb

# Attach to a running process
rbspy record --format speedscope -o profile.speedscope --pid <pid>

# Profile for a fixed duration
rbspy record --format speedscope -o profile.speedscope --duration 30 --pid <pid>

# Profile including child processes
rbspy record --format speedscope -o profile.speedscope --subprocesses --pid <pid>
```

## Memory profiling

Records RSS memory alongside call stack samples. Useful for correlating memory
growth with specific code paths.

### CLI

```sh
# Record CPU and memory together
rbspy record --memory --format speedscope -o profile.speedscope --pid <pid>

# Profile a command with memory tracking
rbspy record --memory --format speedscope -o profile.speedscope -- ruby script.rb
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

| Flag                | Default      | Description                                                                                            |
| ------------------- | ------------ | ------------------------------------------------------------------------------------------------------ |
| `-p` / `--pid`      | —            | PID of a running process to attach to                                                                  |
| `-d` / `--duration` | —            | Duration in seconds; records until Ctrl-C if omitted                                                   |
| `-r` / `--rate`     | `100`        | Samples per second                                                                                     |
| `-f` / `--format`   | `flamegraph` | Output format: `flamegraph`, `speedscope`, `callgrind`, `summary`, `summary_by_line`, `raw_call_stack` |
| `-o` / `--file`     | —            | Output file path                                                                                       |
| `-m` / `--memory`   | —            | Also record RSS memory usage alongside stack samples                                                   |
| `--subprocesses`    | —            | Also profile child processes                                                                           |
| `--nonblocking`     | —            | Don't pause the process while reading its stack (lower overhead, may miss frames)                      |

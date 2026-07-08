# Ruby

Ruby profiling uses [rbspy](https://rbspy.github.io), a sampling profiler that
attaches to a running Ruby process.

## CPU profiling

Periodically samples the call stack. Useful for finding CPU hot spots.

### CLI

```sh
# Profile a command (speedscope format)
rbspy record --format speedscope -o cpu.speedscope.json -- ruby script.rb

# Collapsed stacks
rbspy record --format collapsed -o cpu.collapsed -- ruby script.rb

# pprof
rbspy record --format pprof -o cpu.pprof -- ruby script.rb

# Callgrind
rbspy record --format callgrind -o cpu.callgrind -- ruby script.rb

# Attach to a running process
rbspy record --format speedscope -o cpu.speedscope.json --pid <pid>

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

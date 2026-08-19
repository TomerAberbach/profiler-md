# Ruby

Ruby profiling uses [rbspy](https://rbspy.github.io).

## CPU profiling

Periodically samples the call stack. Useful for finding CPU hot spots.

```sh
# Profile a command (speedscope format)
rbspy record --format speedscope --file cpu.speedscope.json -- ruby script.rb

# Collapsed stacks
rbspy record --format collapsed --file cpu.collapsed -- ruby script.rb

# pprof
rbspy record --format pprof --file cpu.pprof -- ruby script.rb

# Callgrind
rbspy record --format callgrind --file cpu.callgrind -- ruby script.rb

# Attach to a running process
rbspy record --format speedscope --file cpu.speedscope.json --pid <pid>

# Profile for a fixed duration
rbspy record --format speedscope --file cpu.speedscope.json --duration 30 --pid <pid>

# Profile including child processes
rbspy record --format speedscope --file cpu.speedscope.json --subprocesses --pid <pid>
```

## Call stack dump

Captures a single stack trace from a running process. Useful for quickly
checking what a process is executing without a full recording.

```sh
rbspy snapshot --pid <pid>

# Read the stack without pausing the process
rbspy snapshot --nonblocking --pid <pid>
```

## rbspy CLI flags

| Flag                | Default      | Description                                                                                                |
| ------------------- | ------------ | ---------------------------------------------------------------------------------------------------------- |
| `-p` / `--pid`      | —            | PID of a running process to attach to                                                                      |
| `-d` / `--duration` | —            | Duration in seconds, recording until Ctrl-C if omitted                                                     |
| `-r` / `--rate`     | `99`         | Samples per second                                                                                         |
| `-o` / `--format`   | `flamegraph` | Output format: `flamegraph`, `collapsed`, `pprof`, `speedscope`, `callgrind`, `summary`, `summary-by-line` |
| `-f` / `--file`     | —            | Output file path                                                                                           |
| `--subprocesses`    | —            | Also profile child processes                                                                               |
| `--nonblocking`     | —            | Read the stack without pausing the process (lower overhead, may miss frames)                               |

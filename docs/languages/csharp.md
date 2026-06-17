# C#/F#

.NET profiling (C#, F#, and other CLR languages) uses
[`dotnet-trace`](https://learn.microsoft.com/dotnet/core/diagnostics/dotnet-trace),
a cross-platform diagnostics tool that collects traces through the runtime's
EventPipe without a native profiler.

Install it as a global tool:

```sh
dotnet tool install --global dotnet-trace
```

The latest `dotnet-trace` needs a matching .NET runtime; if yours is older,
install a compatible version with `--version` (e.g. `--version 8.*`).

## CPU profiling

Periodically samples the call stack. Useful for finding CPU hot spots.

With no `--profile` or `--providers`, `dotnet-trace collect` enables the
`dotnet-common` and `dotnet-sampled-thread-time` profiles, sampling thread
stacks at roughly 100 Hz.

On macOS (and any non-Linux host) the `cpu-sampling` profile isn't available, so
sampling is wall-clock thread time: idle runtime threads show up under an
`UNMANAGED_CODE_TIME` frame. Keeping the workload busy across cores helps your
own code dominate.

For F#, `dotnet fsi script.fsx` runs the script in a child process, so tracing
`dotnet fsi` captures only the launcher. Trace the compiler directly instead —
e.g.
`dotnet-trace collect --format speedscope -- dotnet <sdk>/FSharp/fsc.dll script.fs --target:library -o out.dll`.

> **Launch mode deadlocks on `dotnet build`/`run`/`test`.**
> `dotnet-trace collect -- <cmd>` starts the child suspended on a diagnostic
> port and resumes only that first process; these commands spawn further .NET
> processes that inherit the port and hang waiting for a connection that never
> comes, so the collect stalls indefinitely after printing `Launching:` (no flag
> — `--disable-build-servers`, `-m:1` — avoids it). Trace a single-process app
> instead (`dotnet exec app.dll`), or attach to an already-running process with
> `--process-id`.

### CLI

```sh
# Attach to a running process, written directly as speedscope
dotnet-trace collect --process-id <pid> --format speedscope

# Launch and trace a command from startup (use `dotnet exec` so the dotnet CLI's
# own child processes aren't traced instead of your app)
dotnet-trace collect --format speedscope -- dotnet exec app.dll

# Attach for a fixed duration (dd:hh:mm:ss)
dotnet-trace collect --process-id <pid> --duration 00:00:00:30 --format speedscope

# Convert an existing .nettrace to speedscope
dotnet-trace convert trace.nettrace --format speedscope
```

#### Flags

| Flag                  | Default    | Description                                         |
| --------------------- | ---------- | --------------------------------------------------- |
| `-p` / `--process-id` | —          | PID of the process to trace                         |
| `-n` / `--name`       | —          | Name of the process to trace                        |
| `--duration`          | —          | Duration to run, in `dd:hh:mm:ss` format            |
| `-o` / `--output`     | `nettrace` | Output file path                                    |
| `--format`            | `nettrace` | Output format: `nettrace`, `speedscope`, `chromium` |
| `--profile`           | —          | Preset provider configuration (e.g. `gc-verbose`)   |
| `--providers`         | —          | Comma-separated EventPipe providers to enable       |

# C#/F#

.NET profiling (C#, F#, and other CLR languages) uses
[`dotnet-trace`](https://learn.microsoft.com/dotnet/core/diagnostics/dotnet-trace).

Install it as a global tool:

```sh
dotnet tool install --global dotnet-trace
```

The latest `dotnet-trace` needs a matching .NET runtime. If yours is older,
install a compatible version with `--version`.

## CPU profiling

Periodically samples the call stack. Useful for finding CPU hot spots.

With no `--profile` or `--providers`, `dotnet-trace collect` enables the
`dotnet-common` and `dotnet-sampled-thread-time` profiles, sampling thread
stacks at roughly 100 Hz.

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

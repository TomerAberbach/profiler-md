# Python

Python profiling uses [py-spy](https://github.com/benfred/py-spy), a sampling
profiler that attaches to a running process or wraps a script.

## CPU profiling

Periodically samples the call stack. Useful for finding CPU hot spots.

```sh
# Collapsed format (wrap a script)
py-spy record -f raw -o cpu.collapsed -- python script.py

# Speedscope format (wrap a script)
py-spy record -f speedscope -o cpu.speedscope.json -- python script.py

# Attach to a running process
py-spy record -f raw -o cpu.collapsed --pid <pid>

# Include native extensions written in Cython or C
py-spy record -f raw -o cpu.collapsed --native -- python script.py
```

## Wall-clock profiling

Samples wall-clock time rather than CPU time, including time threads spend
waiting. Useful for I/O-bound or latency-sensitive code.

```sh
py-spy record -f raw -o wall.collapsed --idle -- python script.py
```

## Call stack dump

Captures the current call stacks of all threads in a running process. Useful for
diagnosing hangs, deadlocks, or unexpected blocking.

```sh
# Dump call stacks of a running process (text output)
py-spy dump --pid <pid>

# Include local variables in each frame
py-spy dump --pid <pid> --locals
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

## System profiling (systing)

[systing](https://github.com/josefbacik/systing) is a Linux eBPF profiler that
samples on-CPU stacks and records a stack each time a thread sleeps. With
`--collect-pystacks` it walks CPython interpreter frames and blends them with
the native stack, so profiles show Python functions alongside the C and kernel
frames beneath them. It needs root (BPF) and a kernel with BTF
(`/sys/kernel/btf/vmlinux`).

```sh
# Record a Python program with blended Python + native stacks
sudo systing --duration 30 --collect-pystacks \
  --output profile.systing -- python3 script.py
```

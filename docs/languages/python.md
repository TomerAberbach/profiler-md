# Python

Python profiling uses [py-spy](https://github.com/benfred/py-spy),
[pyinstrument](https://github.com/joerick/pyinstrument),
[memray](https://github.com/bloomberg/memray), or
[systing](https://github.com/josefbacik/systing).

## CPU profiling

Periodically samples the call stack. Useful for finding CPU hot spots.

```sh
# Collapsed format (wrap a script)
py-spy record -f raw -o cpu.collapsed -- python script.py

# Speedscope format (wrap a script)
py-spy record -f speedscope -o cpu.speedscope.json -- python script.py

# Attach to a running process
py-spy record -f raw -o cpu.collapsed --pid <pid>

# Include native Cython or C extensions
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

| Flag                | Default      | Description                                              |
| ------------------- | ------------ | -------------------------------------------------------- |
| `-f` / `--format`   | `flamegraph` | Output format: `flamegraph`, `raw`, `speedscope`         |
| `-o` / `--output`   | —            | Output file path                                         |
| `-d` / `--duration` | —            | Duration in seconds (default: until program exits)       |
| `-r` / `--rate`     | `100`        | Sampling rate in Hz                                      |
| `--idle`            | off          | Include stack traces for idle (sleeping/waiting) threads |
| `--native`          | off          | Profile native Cython or C extensions                    |
| `--nonblocking`     | off          | Sample without pausing the process (less accurate)       |
| `--subprocesses`    | off          | Also profile subprocesses of the target                  |

## In-process wall-clock profiling

[pyinstrument](https://github.com/joerick/pyinstrument) samples the call stack
from inside the interpreter, so it needs no ptrace access and profiles
wall-clock time. Its speedscope renderer writes a format this tool reads.

```sh
# Profile a script
pyinstrument -r speedscope -o profile.speedscope.json script.py

# Profile a console script, such as the one an installed package provides
pyinstrument -r speedscope -o profile.speedscope.json "$(which black)" file.py

# Keep every frame instead of those above the 1% threshold
pyinstrument --show-all -r speedscope -o profile.speedscope.json script.py
```

Run a console script by its path rather than as `python -m package`. Under `-m`,
pyinstrument trims the leading `runpy` frames by descending into the first child
of each. That child is the import subtree rather than the module body, so the
export covers only the imports. `--show-all` can trim the run the same way.

By default the export keeps the frames above 1% of the total and folds the rest
into the self time of the frame that called them.

### pyinstrument CLI flags

| Flag                  | Default | Description                                                   |
| --------------------- | ------- | ------------------------------------------------------------- |
| `-r` / `--renderer`   | `text`  | Output format. `speedscope` writes the format this tool reads |
| `-o` / `--outfile`    | —       | Output file path                                              |
| `-m`                  | —       | Run a library module as a script                              |
| `-i` / `--interval`   | `0.001` | Minimum seconds between stack samples                         |
| `--show-all`          | off     | Keep every frame, including the standard library's            |
| `--hide`              | —       | Glob matching the file paths whose frames to hide             |
| `-t` / `--timeline`   | off     | Keep call ordering instead of condensing repeated calls       |
| `--use-timing-thread` | off     | Time the sampling interval on a separate thread               |

## Memory profiling

[memray](https://github.com/bloomberg/memray) traces every allocation the
interpreter makes, from inside the process, and records the Python call stack
each one came from. The capture shows where memory was held when the program's
memory use was highest, and what was never freed.

```sh
# Trace a script's allocations
memray run -o memory.bin script.py

# Trace a module, as `python -m` would run it
memray run -o memory.bin -m black file.py

# Keep per-stack totals only, for a much smaller capture of a long run
memray run --aggregate -o memory.bin script.py

# Attach to a running process
memray attach --duration 60 -o memory.bin <pid>
```

Tracing from inside the process makes the program run several times slower, so
profile a workload small enough to finish with tracing on.

### memray CLI flags

| Flag                        | Default | Description                                                        |
| --------------------------- | ------- | ------------------------------------------------------------------ |
| `-o` / `--output`           | —       | Output file path                                                   |
| `-f` / `--force`            | off     | Overwrite the output file if it exists                             |
| `--aggregate`               | off     | Record each stack's totals instead of every allocation             |
| `--native`                  | off     | Also record C/C++ frames, which this tool skips                    |
| `--trace-python-allocators` | off     | Record pymalloc's own allocations, not just the ones underneath it |
| `--follow-fork`             | off     | Also trace child processes, each into its own capture              |
| `--no-compress`             | off     | Write the capture uncompressed rather than LZ4 compressed          |

## System profiling

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

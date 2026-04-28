# PHP

PHP profiling uses [phpspy](https://github.com/adsr/phpspy), a low overhead
sampling profiler for PHP processes.

## CPU profiling

Periodically samples the call stack. Useful for finding CPU hot spots.

```sh
# Profile a command (speedscope format)
phpspy -d 30 --output-format=speedscope -f cpu.speedscope -- php script.php

# Attach to a running process (speedscope format)
phpspy -d 30 --output-format=speedscope --pid <pid> -f cpu.speedscope

# Attach to a running process (callgrind format, for KCachegrind)
phpspy -d 30 --output-format=callgrind --pid <pid> > cpu.callgrind
```

### Flags

| Flag                 | Default | Description                                                        |
| -------------------- | ------- | ------------------------------------------------------------------ |
| `--pid` / `-p`       | —       | PID of the PHP process to profile                                  |
| `--duration` / `-d`  | —       | Duration in seconds; profiles indefinitely when not set            |
| `--sleep-us` / `-s`  | `10000` | Sampling interval in microseconds                                  |
| `--num-samples`      | —       | Maximum number of samples to collect                               |
| `--max-depth` / `-l` | `64`    | Maximum stack frames per sample                                    |
| `--output-format`    | `raw`   | Output format: `raw`, `callgrind`, `speedscope`, `valgrind`, `rep` |
| `--output-file`      | stdout  | Write output to this file instead of stdout                        |

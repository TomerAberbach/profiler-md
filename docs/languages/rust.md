# Rust

Rust CPU profiling uses [pprof-rs](https://github.com/tikv/pprof-rs) or
[systing](https://github.com/josefbacik/systing).

## CPU profiling

Periodically samples the call stack. Useful for finding CPU hot spots.

Add to `Cargo.toml`:

```toml
[dependencies]
pprof = { version = "...", features = ["prost-codec", "frame-pointer"] }
```

The `frame-pointer` feature is required on macOS, because the default stack
unwinder crashes with SIGBUS.

```rust
use pprof::protos::Message;

let guard = pprof::ProfilerGuardBuilder::default()
    .frequency(1000)
    .build()?;

// Code to profile...

let mut buf = Vec::new();
guard.report().build()?.pprof()?.encode(&mut buf)?;
std::fs::write("cpu.pprof", &buf)?;
```

### `ProfilerGuardBuilder` options

| Method               | Default | Description                              |
| -------------------- | ------- | ---------------------------------------- |
| `.frequency(hz)`     | `99`    | Samples per second                       |
| `.blocklist(frames)` | `[]`    | Stack frames to exclude from the profile |

## System profiling

Samples on-CPU stacks and records a stack each time a thread sleeps, across user
and kernel code. Useful for costs outside the process: off-CPU waits, syscall
time, and contention across the whole node.

[systing](https://github.com/josefbacik/systing) is a Linux eBPF profiler. It
needs root (BPF) and a kernel with BTF (`/sys/kernel/btf/vmlinux`).

```sh
# Record a command (and its children) for 30 seconds
sudo systing --duration 30 --output profile.systing -- ./target/release/program
```

## Tips

### Frame pointers

A frame-pointer unwinder needs frame pointers, which Cargo release builds omit
by default. Force them on:

```sh
RUSTFLAGS="-C force-frame-pointers=yes" cargo build ...
```

### Symbols

Keep debug info for release builds so frames resolve to readable names:

```toml
# Cargo.toml
[profile.release]
debug = true
```

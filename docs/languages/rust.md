# Rust

Rust CPU profiling uses [pprof-rs](https://github.com/tikv/pprof-rs), a sampling
profiler that integrates directly into your binary.

## CPU profiling

Periodically samples the call stack. Useful for finding CPU hot spots.

Add to `Cargo.toml`:

```toml
[dependencies]
pprof = { version = "...", features = ["prost-codec", "frame-pointer"] }
```

The `frame-pointer` feature is required on macOS (the default stack unwinder
crashes with SIGBUS). Also add the following rustflag to make frame-pointer
unwinding reliable:

```sh
RUSTFLAGS="-C force-frame-pointers=yes" cargo build ...
```

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
| `.frequency(hz)`     | `100`   | Samples per second                       |
| `.blocklist(frames)` | `[]`    | Stack frames to exclude from the profile |

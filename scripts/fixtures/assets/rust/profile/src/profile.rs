use prost::Message;
use std::fs;
use std::process;

// Parse the real document and serialize it back, many times, so the CPU
// profiler has hot serde_json frames to sample.
fn workload(sample: &str) {
    // Tuned for the ~600 KB twitter.json: enough parses for plenty of samples
    // while keeping the run short.
    const ITERATIONS: usize = 2_000;
    let mut total: usize = 0;
    for _ in 0..ITERATIONS {
        let value: serde_json::Value = serde_json::from_str(sample).expect("parse JSON document");
        let serialized = serde_json::to_string(&value).expect("serialize document");
        total = total.wrapping_add(serialized.len());
    }
    // Defeat dead-code elimination so the workload isn't optimized away.
    std::hint::black_box(total);
}

fn main() {
    let args: Vec<String> = std::env::args().collect();
    if args.len() != 3 {
        eprintln!("usage: json_bench <out-file> <json-file>");
        process::exit(2);
    }
    let out = &args[1];
    let sample = fs::read_to_string(&args[2]).expect("read JSON input file");

    // Start sampling. A modest frequency keeps the capture small but non-empty.
    let guard = pprof::ProfilerGuardBuilder::default()
        .frequency(1000)
        // Skip libc/std internals from the call stacks for cleaner frames.
        .blocklist(&["libc", "libgcc", "pthread", "vdso"])
        .build()
        .expect("start profiler");

    workload(&sample);

    // Build the report once the workload is done. `guard.report().build()`
    // returns `Result<Report>` on pprof 0.13.
    let report = guard.report().build().expect("build report");

    // Convert to the pprof protobuf message and encode it to bytes. With the
    // `prost-codec` feature (see Cargo.toml) `Report::pprof()` returns a
    // `Result<pprof::protos::Profile>` whose `Profile` is a `prost::Message`,
    // so `.encode()` below comes from `use prost::Message`.
    let profile = report.pprof().expect("encode pprof report");

    let mut buf = Vec::new();
    profile
        .encode(&mut buf)
        .expect("encode pprof protobuf to bytes");

    fs::write(out, &buf).expect("write pprof output file");
}

#!/usr/bin/env bash

cd "$(dirname "$0")/../.." || exit 1
source scripts/fixtures/_common.sh

export CARGO_TARGET_DIR="$WORKDIR/cargo-target"
export CARGO_HOME="$WORKDIR/cargo-home"

profile_dir="$REPO/scripts/fixtures/assets/rust/profile"
json_input="$REPO/scripts/fixtures/assets/shared/twitter.json"
bin="$CARGO_TARGET_DIR/release/json_bench"

built=
build_profile() {
  [[ -n "$built" ]] && return 0
  notice "Building rust pprof-rs profile"
  cargo build --release --locked --manifest-path "$profile_dir/Cargo.toml"
  built=1
}

# capture_fn for emit: $1=out  $2=role
run_rust_profile() {
  local out=$1 role=$2
  build_profile
  notice "Profiling serde_json using pprof-rs ($role)"
  "$bin" "$out" "$json_input"
}

for role in base current; do
  out="$FIXTURES/rust.pprof-rs.cpu.$role.pprof"
  emit "$out" run_rust_profile "$role"
done

verify_pair "$FIXTURES/rust.pprof-rs.cpu.base.pprof" "$FIXTURES/rust.pprof-rs.cpu.current.pprof"

#!/usr/bin/env bash

cd "$(dirname "$0")/../.." || exit 1
source scripts/inputs/_common.sh

export CARGO_TARGET_DIR="$WORKDIR/cargo-target"
export CARGO_HOME="$WORKDIR/cargo-home"

profile_dir="$REPO/scripts/inputs/assets/rust/profile"
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
  fetch_twitter_json
  notice "Profiling serde_json using pprof-rs ($role)"
  "$bin" "$out" "$TWITTER_JSON"
}

for role in base current; do
  out="$GENERATED_INPUTS/rust.pprof-rs.cpu.$role.pprof"
  try emit "$out" run_rust_profile "$role"
done

verify_pairs

exit "$status"

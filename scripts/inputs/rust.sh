#!/usr/bin/env bash

cd "$(dirname "$0")/../.." || exit 1
source scripts/inputs/_common.sh

export CARGO_TARGET_DIR="$WORKDIR/cargo-target"
# The inputs record registry crates' paths under CARGO_HOME, so it is fixed
# like the crate's directory below.
export CARGO_HOME="/tmp/profiler-md-rust-cargo-home"

profile_dir="$REPO/scripts/inputs/assets/rust/profile"
bin="$CARGO_TARGET_DIR/release/json_bench"

# Base and current profile consecutive serde_json releases, so a diff compares
# two versions of the same code. The committed lockfile pins base's, and each
# side builds a copy of the crate in one directory, so both record the same
# paths. The directory is fixed rather than under WORKDIR, which mktemp names
# anew per run, so a side regenerated alone records the same paths as the
# other.
declare -A SERDE_JSON_VERSION=([base]="1.0.140" [current]="1.0.141")
project="/tmp/profiler-md-rust-profile"

built_side=
build_profile() {
  local side=$1
  [[ "$built_side" == "$side" ]] && return 0
  local version=${SERDE_JSON_VERSION[$side]}
  notice "Building rust pprof-rs profile (serde_json $version)"
  rm -rf "$project"
  cp -R "$profile_dir" "$project" || return 1
  sed -i.orig "s/^serde_json = \".*\"/serde_json = \"=$version\"/" \
    "$project/Cargo.toml" || return 1
  rm -f "$project/Cargo.toml.orig"
  cargo update --manifest-path "$project/Cargo.toml" \
    --package serde_json --precise "$version" || return 1
  cargo build --release --locked --manifest-path "$project/Cargo.toml" || return 1
  built_side=$side
}

# capture_fn for emit: $1=out  $2=side
run_rust_profile() {
  local out=$1 side=$2
  build_profile "$side" || return 1
  fetch_twitter_json
  notice "Profiling serde_json using pprof-rs ($side)"
  "$bin" "$out" "$TWITTER_JSON"
}

for side in base current; do
  out="$GENERATED_INPUTS/rust.pprof-rs.cpu.$side.pprof"
  try emit "$out" run_rust_profile "$side"
done

verify_pairs

exit "$status"

#!/usr/bin/env bash
# The Nix evaluator samples its own call stack when `--eval-profiler` is set, so
# the capture is the evaluation itself, run with the `nix` the dev shell pins.

cd "$(dirname "$0")/../.." || exit 1
source scripts/inputs/_common.sh

assets="$REPO/scripts/inputs/assets/nix"

# The nixpkgs revision the dev shell's flake.lock pins, so the evaluation reads
# the same source tree every run and the profile's store paths stay stable.
nixpkgs_rev() {
  jq -r .nodes.nixpkgs.locked.rev "$REPO/scripts/inputs/flake.lock"
}

# capture_fn for emit: $1=out  $2=role
#   Evaluates a NixOS system configuration's derivation, the evaluation that
#   `nixos-rebuild` runs, from the nixpkgs revision the dev shell pins.
#   Evaluating the full system closure exercises the module system, the stdenv
#   bootstrap, and the package set, so the samples fall in nixpkgs' own code.
record_eval() {
  local out=$1 role=$2 rev
  rev="$(nixpkgs_rev)" || return 1

  notice "Profiling a NixOS system evaluation with the Nix evaluator ($role)"

  local dir="$WORKDIR/nix-$role"
  mkdir -p "$dir" || return 1
  cp "$assets/configuration.nix" "$dir/configuration.nix" || return 1

  # The `flake:` lookup-path prefix requires the experimental features. Nothing
  # uses the derivation, so the command omits `--add-root` and discards the
  # warning about its absence.
  nix-instantiate \
    --extra-experimental-features 'nix-command flakes' \
    -I "nixpkgs=flake:github:NixOS/nixpkgs/$rev" \
    -I "nixos-config=$dir/configuration.nix" \
    '<nixpkgs/nixos>' -A system \
    --eval-profiler flamegraph \
    --eval-profile-file "$dir/eval.collapsed" \
    >/dev/null 2>"$dir/stderr.log" \
    || { cat "$dir/stderr.log" >&2; return 1; }

  # The evaluator creates the profile with mode 0660, unlike every other input.
  install -m 644 "$dir/eval.collapsed" "$out" || return 1
}

for role in base current; do
  try emit "$GENERATED_INPUTS/nix.nix.$role.collapsed" record_eval "$role"
done

verify_pairs

exit "$status"

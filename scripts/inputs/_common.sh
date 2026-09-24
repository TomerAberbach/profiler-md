#!/usr/bin/env bash

set -euo pipefail

# Pretty-print a path relative to the repo root.
rel() { echo "${1#"$REPO"/}"; }

# Writes to the controlling terminal, so a notice stays visible when
# generate-inputs redirects a workload script's output to a log file.
notice() {
  if { : >/dev/tty; } 2>/dev/null; then
    printf '  >> %s\n' "$*" >/dev/tty
  else
    printf '  >> %s\n' "$*" >&2
  fi
}

_docker_probe() {
  command -v docker >/dev/null 2>&1 || return 1
  if command -v timeout >/dev/null 2>&1; then
    timeout 15 docker info >/dev/null 2>&1
  else
    docker info >/dev/null 2>&1
  fi
}

# Blocks until the Docker daemon is reachable, prompting the user to start it.
ensure_docker() {
  _docker_probe && return 0

  if ! { : </dev/tty; } 2>/dev/null; then
    notice "Docker daemon not reachable and no terminal to prompt. Start Docker and re-run."
    exit 1
  fi

  while true; do
    notice "Docker daemon not reachable. Start Docker, then press Enter to retry."
    read -r _ </dev/tty || { notice "No input received. Start Docker and re-run."; exit 1; }
    if _docker_probe; then
      notice "Docker is up. Continuing."
      return 0
    fi
    notice "Still can't reach the Docker daemon. Give it a moment to finish starting, then retry."
  done
}

# fetch_asset <label> <url> <sha256> <dest>
#   Downloads a checksum-verified file unless <dest> already exists.
fetch_asset() {
  local label=$1 url=$2 sha256=$3 dest=$4 tmp
  [[ -f "$dest" ]] && return 0
  notice "Fetching $label"
  mkdir -p "$(dirname "$dest")" || return 1
  # Renaming into place only after the checksum passes keeps an interrupted
  # download from leaving a partial file the existence check would trust.
  tmp="$(mktemp "$dest.XXXXXX")" || return 1
  curl -fsSL "$url" -o "$tmp" \
    || { rm -f "$tmp"; echo "  FAILED to fetch: $url" >&2; return 1; }
  echo "$sha256  $tmp" | shasum -a 256 -c - >/dev/null \
    || { rm -f "$tmp"; echo "  CHECKSUM mismatch: $url" >&2; return 1; }
  mv "$tmp" "$dest" || return 1
}

# simdjson's twitter.json sample, a real Twitter API search response. The
# committed copy is reformatted, so its bytes differ from the fetched file's,
# though both parse to the same document.
TWITTER_JSON="$REPO/scripts/inputs/assets/shared/twitter.json"
TWITTER_JSON_URL="https://raw.githubusercontent.com/simdjson/simdjson/v3.10.1/jsonexamples/twitter.json"
TWITTER_JSON_SHA256="30721e496a8d73cfc50658923c34eb2c0fbe15ee6835005e43ee624d8dedf200"

fetch_twitter_json() {
  fetch_asset "simdjson twitter.json" \
    "$TWITTER_JSON_URL" "$TWITTER_JSON_SHA256" "$TWITTER_JSON"
}

DOCKER_IMAGE="debian:bookworm-slim"
DOCKER_PLATFORM="linux/arm64"

# docker_capture <out_dir> <container_script> [extra `docker run` args...]
#   Runs <container_script> under `bash -euo pipefail` in DOCKER_IMAGE with
#   <out_dir> bind-mounted at /out.
docker_capture() {
  local outdir=$1 script=$2
  shift 2
  docker run --rm --platform "$DOCKER_PLATFORM" \
    -v "$outdir:/out" \
    "$@" \
    "$DOCKER_IMAGE" \
    bash -euo pipefail -c "$script"
}

# Debian publishes the image's SHA-512 `3622c990…`. fetch_asset takes a
# SHA-256, so the one here is of the same bytes.
X86_64_VM_IMAGE_RELEASE="20260806-2562"
X86_64_VM_IMAGE="$REPO/scripts/inputs/assets/shared/debian-12-genericcloud-amd64-$X86_64_VM_IMAGE_RELEASE.qcow2"
X86_64_VM_IMAGE_URL="https://cloud.debian.org/images/cloud/bookworm/$X86_64_VM_IMAGE_RELEASE/debian-12-genericcloud-amd64-$X86_64_VM_IMAGE_RELEASE.qcow2"
X86_64_VM_IMAGE_SHA256="c80ccbf6989915e8b6b1aee15d5b019090b562cc4bc7d2bf96b06e2e1b6badb4"

# An ephemeral host with a throwaway key, so its host key is neither checked
# nor recorded.
_vm_ssh_options=(-q -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null)
_vm_pid=""
_vm_port=""
_vm_key=""

_vm_stop() {
  [[ -n "$_vm_pid" ]] || return 0
  kill "$_vm_pid" 2>/dev/null || true
  wait "$_vm_pid" 2>/dev/null || true
  _vm_pid=""
}

_vm_ssh() {
  ssh "${_vm_ssh_options[@]}" -i "$_vm_key" -p "$_vm_port" "prof@127.0.0.1" "$@"
}

_vm_start() {
  local dir="$WORKDIR/x86_64-vm" seed
  fetch_asset "Debian 12 x86_64 cloud image" \
    "$X86_64_VM_IMAGE_URL" "$X86_64_VM_IMAGE_SHA256" "$X86_64_VM_IMAGE" || return 1
  mkdir -p "$dir/seed" || return 1

  _vm_key="$dir/id_ed25519"
  ssh-keygen -q -t ed25519 -N "" -f "$_vm_key" || return 1
  printf 'instance-id: profiler-md\nlocal-hostname: profiler-md\n' >"$dir/seed/meta-data" || return 1
  printf '#cloud-config\nusers:\n  - name: prof\n    sudo: ALL=(ALL) NOPASSWD:ALL\n    shell: /bin/bash\n    ssh_authorized_keys:\n      - %s\n' \
    "$(cat "$_vm_key.pub")" >"$dir/seed/user-data" || return 1
  # The seed is a virtio disk labeled `cidata`, since the cloud kernel lacks a
  # driver for the emulated SATA CD-ROM.
  seed="$dir/seed.iso"
  mkisofs -quiet -output "$seed" -volid cidata -joliet -rock \
    "$dir/seed/user-data" "$dir/seed/meta-data" || return 1
  # The overlay disk keeps the cached image unchanged.
  qemu-img create -q -f qcow2 -b "$X86_64_VM_IMAGE" -F qcow2 "$dir/disk.qcow2" 8G || return 1

  _vm_port="$(python3 -c 'import socket; s = socket.socket(); s.bind(("127.0.0.1", 0)); print(s.getsockname()[1])')" || return 1
  notice "Booting the x86_64 VM (emulated, so slow)"
  # macOS lacks KVM, so TCG.
  qemu-system-x86_64 -machine q35 -accel tcg,thread=multi -cpu max -smp 4 -m 2048 \
    -drive "file=$dir/disk.qcow2,if=virtio" \
    -drive "file=$seed,if=virtio,format=raw,readonly=on" \
    -netdev "user,id=net,hostfwd=tcp:127.0.0.1:$_vm_port-:22" -device virtio-net-pci,netdev=net \
    -display none -monitor none -serial "file:$dir/console.log" >"$dir/qemu.log" 2>&1 &
  _vm_pid=$!

  local attempt
  for attempt in $(seq 1 60); do
    if _vm_ssh -o ConnectTimeout=3 true 2>/dev/null; then
      return 0
    fi
    if ! kill -0 "$_vm_pid" 2>/dev/null; then
      echo "  QEMU exited before SSH came up; see $(rel "$dir/qemu.log")" >&2
      _vm_pid=""
      return 1
    fi
    sleep 5
  done
  echo "  TIMED OUT waiting for SSH to the VM; see $(rel "$dir/console.log")" >&2
  _vm_stop
  return 1
}

# x86_64_vm_capture <out_dir> <guest_script> [VAR=value...]
#   Runs <guest_script> as root under `bash -euo pipefail` in an x86_64 Debian
#   VM. Copies <out_dir> to /out in the guest before the script and back after
#   it, and exports each VAR=value to the script.
#   A profiler that drops privileges runs the program it profiles as the SSH
#   user, so give that program world-readable inputs.
#   Full-system emulation is slow: budget minutes per capture, and sample at a
#   lower rate to keep the sample count comparable.
#
#   Boots one VM per generate-inputs run and reuses it across calls.
x86_64_vm_capture() {
  local outdir=$1 script=$2
  shift 2
  if [[ -z "$_vm_pid" ]]; then
    _vm_start || return 1
  fi

  local exports="" assignment
  for assignment in "$@"; do
    exports+="export $(printf '%q' "$assignment")"$'\n'
  done

  # The script is sent as a file, since a script read from stdin shares the
  # stream with every command it runs.
  printf '%s%s' "$exports" "$script" >"$WORKDIR/x86_64-vm/capture.sh" || return 1
  _vm_ssh "sudo rm -rf /out && sudo mkdir -p /out && sudo chown prof /out" || return 1
  scp "${_vm_ssh_options[@]}" -i "$_vm_key" -P "$_vm_port" -r \
    "$WORKDIR/x86_64-vm/capture.sh" "$outdir/." "prof@127.0.0.1:/out/" || return 1
  _vm_ssh "sudo bash -euo pipefail /out/capture.sh && sudo rm /out/capture.sh" || return 1
  scp "${_vm_ssh_options[@]}" -i "$_vm_key" -P "$_vm_port" -r "prof@127.0.0.1:/out/." "$outdir/" || return 1
}

# Returns 1 to skip an output that already exists.
should_generate() {
  local out=$1
  if [[ -f "$out" ]]; then
    echo "Skipping $(rel "$out")"
    return 1
  fi
  echo "Generating $(rel "$out")"
  return 0
}

cli() { node "$REPO/src/cli/index.ts" "$@"; }

# GitHub rejects files of 100 MB or more, so an oversized capture must fail at
# generation time, while the workload can still be shrunk.
MAX_INPUT_BYTES=$((100 * 1024 * 1024))

# Verifies a generated input converts to Markdown and contains nothing about
# the generating machine.
verify_generated_input() {
  local out=$1 bytes
  [[ -f "$out" ]] || { echo "  MISSING after capture: $(rel "$out")" >&2; return 1; }
  bytes="$(wc -c <"$out")" || return 1
  ((bytes < MAX_INPUT_BYTES)) \
    || { echo "  TOO LARGE ($((bytes)) bytes; GitHub's limit is 100 MB — shrink the workload): $(rel "$out")" >&2; return 1; }
  cli "$out" >/dev/null || { echo "  FAILED to convert: $(rel "$out")" >&2; return 1; }
  node "$REPO/scripts/check-input-privacy.ts" "$out" >/dev/null \
    || { echo "  CONTAINS data about this machine (see above; disable it in the profiler, or redact it): $(rel "$out")" >&2; return 1; }
  echo "Verified $(rel "$out")"
}

# Verifies a base/current pair diffs, skipping a pair with a missing half.
verify_pair() {
  local base=$1 current=$2
  [[ -f "$base" && -f "$current" ]] || return 0
  cli "$base" "$current" >/dev/null \
    || { echo "  FAILED to diff: $(rel "$base") <> $(rel "$current")" >&2; return 1; }
  echo "Verified diff $(rel "$base") <> $(rel "$current")"
}

# The base path of every input `emit` handled, captured or already present, so
# `verify_pairs` diffs every pair without callers re-listing paths.
_emitted_bases=()

# emit <out> <capture_fn> [args...]
#   Unless should_generate skips <out>, runs `capture_fn "$out" args...`,
#   which must write to "$out", then verifies the result.
emit() {
  local out=$1 fn=$2
  shift 2
  if should_generate "$out"; then
    "$fn" "$out" "$@" || return 1
    verify_generated_input "$out" || return 1
  fi
  case "$out" in *.base.*) _emitted_bases+=("$out") ;; esac
}

# Wrap each capture in `try`, so a failing capture sets `status`, which the
# script exits with, instead of aborting the script under set -e. A function
# `try` calls runs in a `||` context, where set -e is off, so guard each of its
# steps with `|| return 1`.
status=0
try() { "$@" || status=1; }

# Diffs every base/current pair `emit` handled.
verify_pairs() {
  local base
  for base in ${_emitted_bases[@]+"${_emitted_bases[@]}"}; do
    try verify_pair "$base" "${base/.base./.current.}"
  done
}

# A scratch directory for clones and builds.
WORKDIR="$(mktemp -d "${TMPDIR:-/tmp}/profiler-md-input-generation.XXXXXX")"
cleanup_workdir() { _vm_stop; rm -rf "$WORKDIR"; }
trap cleanup_workdir EXIT

# Without this trap, captures wrapped in `try` or in `for role` loops swallow
# Ctrl+C and SIGTERM and continue to the next capture. `exit` still runs
# cleanup_workdir.
trap 'exit 130' INT TERM

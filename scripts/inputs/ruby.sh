#!/usr/bin/env bash

cd "$(dirname "$0")/../.." || exit 1
source scripts/inputs/_common.sh

SINATRA_REPO="https://github.com/sinatra/sinatra"
SINATRA_TAG="v4.1.1"
RUBOCOP_VERSION="1.65.1"
RBSPY_VERSION="0.48.0"
RBSPY_URL="https://github.com/rbspy/rbspy/releases/download/v$RBSPY_VERSION/rbspy-aarch64-unknown-linux-musl.tar.gz"

EXTS=(speedscope.json collapsed pprof callgrind)

# Run the rbspy capture once per role in the container: record RuboCop linting a
# real Sinatra file, then re-render that one recording into all the formats
# (so they're consistent) into the mounted /out.
declare -A rundir=()
run_for_role() {
  local role=$1
  [[ -n "${rundir[$role]:-}" ]] && return 0
  local dir="$WORKDIR/ruby-$role"
  mkdir -p "$dir"

  notice "Profiling rubocop with rbspy ($role) in docker ($DOCKER_PLATFORM)"
  docker_capture "$dir" '
      export DEBIAN_FRONTEND=noninteractive

      apt-get update -qq
      apt-get install -y -qq --no-install-recommends \
        ruby ruby-dev build-essential git curl ca-certificates

      # rbspy is not in Debian; install the pinned linux/arm64 release binary.
      curl -fsSL "'"$RBSPY_URL"'" -o /tmp/rbspy.tgz
      tar -xzf /tmp/rbspy.tgz -C /tmp
      install -m755 \
        "$(find /tmp -maxdepth 1 -name "rbspy*" -type f -perm -u+x | head -1)" \
        /usr/local/bin/rbspy

      # Pinned RuboCop, with its launcher in /usr/local/bin so we can run it as a
      # plain `ruby <launcher>` process for rbspy to attach to.
      gem install rubocop --version "'"$RUBOCOP_VERSION"'" -N --bindir /usr/local/bin

      git clone --depth 1 --branch "'"$SINATRA_TAG"'" "'"$SINATRA_REPO"'" /src/sinatra
      target=/src/sinatra/lib/sinatra/base.rb

      # Sample RuboCop linting the real file. --force-default-config keeps the cop
      # set fixed and ignores the Sinatra repo .rubocop.yml (which requires
      # plugins); --fail-level fatal keeps the RuboCop exit code 0 despite offenses.
      rbspy record --silent \
        --raw-file /out/ruby.raw.gz \
        --format collapsed --file /out/ruby.collapsed \
        -- ruby /usr/local/bin/rubocop --force-default-config --fail-level fatal "$target"

      rbspy report --input /out/ruby.raw.gz --format speedscope --output /out/ruby.speedscope.json
      rbspy report --input /out/ruby.raw.gz --format pprof --output /out/ruby.pprof
      rbspy report --input /out/ruby.raw.gz --format callgrind --output /out/ruby.callgrind
    ' --cap-add SYS_PTRACE

  rundir[$role]=$dir
}

# capture_fn for emit: $1=out  $2=role  $3=ext (speedscope.json|collapsed|pprof|callgrind)
copy_ruby_profile() {
  local out=$1 role=$2 ext=$3
  run_for_role "$role"
  cp "${rundir[$role]}/ruby.$ext" "$out"
}

# These captures need a running Docker daemon.
ensure_docker

for role in base current; do
  for ext in "${EXTS[@]}"; do
    try emit "$GENERATED_INPUTS/ruby.rbspy.cpu.$role.$ext" copy_ruby_profile "$role" "$ext"
  done
done

verify_pairs

exit "$status"

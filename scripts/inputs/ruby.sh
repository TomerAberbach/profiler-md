#!/usr/bin/env bash

cd "$(dirname "$0")/../.." || exit 1
source scripts/inputs/_common.sh

# Debian bookworm ships Ruby 3.1, whose backtrace labels contain the method name
# alone. Ruby 3.4 qualifies each label with the method's owner, and rbspy
# records those labels, so the captures run on the official Ruby image instead.
DOCKER_IMAGE="ruby:3.4.10-slim-bookworm"

RAILS_VERSION="8.1.3.1"
RBSPY_VERSION="0.51.0"
RBSPY_URL="https://github.com/rbspy/rbspy/releases/download/v$RBSPY_VERSION/rbspy-aarch64-unknown-linux-musl.tar.gz"

# Seconds the workload serves requests for.
REQUEST_SECONDS=15

EXTS=(speedscope.json collapsed pprof callgrind)

assets="$REPO/scripts/inputs/assets/ruby"

# Run the rbspy capture once per role in the container, then re-render that one
# recording into every format into the mounted /out. A partial regeneration
# records again, so formats emitted by separate runs come from separate
# recordings.
declare -A rundir=()
run_for_role() {
  local role=$1
  [[ -n "${rundir[$role]:-}" ]] && return 0
  local dir="$WORKDIR/ruby-$role"
  mkdir -p "$dir" || return 1

  fetch_twitter_json || return 1
  cp "$assets"/* "$TWITTER_JSON" "$dir" || return 1

  notice "Profiling rails with rbspy ($role) in docker ($DOCKER_PLATFORM)"
  docker_capture "$dir" '
      export DEBIAN_FRONTEND=noninteractive

      # Debian lacks an rbspy package, so install the pinned linux/arm64 release
      # binary. Rails requires git to generate an app and a compiler for gems
      # without a prebuilt extension.
      apt-get update -qq
      apt-get install -y -qq --no-install-recommends \
        curl ca-certificates git build-essential
      curl -fsSL "$RBSPY_URL" -o /tmp/rbspy.tgz
      tar -xzf /tmp/rbspy.tgz -C /tmp
      install -m755 \
        "$(find /tmp -maxdepth 1 -name "rbspy*" -type f -perm -u+x | head -1)" \
        /usr/local/bin/rbspy

      # A minimal app has only the request stack: no database, asset pipeline,
      # or background jobs. Generate the app under /src so its frames
      # contain a source path rather than the mount the capture is written to.
      gem install rails --version "$RAILS_VERSION" -N
      mkdir -p /src
      cd /src
      rails new app --minimal --skip-active-record --skip-asset-pipeline \
        --skip-git --skip-test --skip-docker --skip-bundle
      cd app
      bundle install --quiet
      cp /out/statuses_controller.rb app/controllers/
      mkdir -p app/views/statuses
      cp /out/index.html.erb app/views/statuses/
      cp /out/routes.rb config/routes.rb
      cp /out/statuses.rb config/initializers/
      cp /out/twitter.json /out/profile.rb ./

      # Production mode renders like a deployed app: templates compile once and
      # the request log stays out of the profile.
      export RAILS_ENV=production SECRET_KEY_BASE_DUMMY=1 RAILS_LOG_LEVEL=warn
      rbspy record --silent \
        --raw-file /out/ruby.raw.gz \
        --format collapsed --file /out/ruby.collapsed \
        -- ruby profile.rb "$REQUEST_SECONDS"

      rbspy report --input /out/ruby.raw.gz --format speedscope --output /out/ruby.speedscope.json
      rbspy report --input /out/ruby.raw.gz --format pprof --output /out/ruby.pprof
      rbspy report --input /out/ruby.raw.gz --format callgrind --output /out/ruby.callgrind
    ' \
    --cap-add SYS_PTRACE \
    -e RBSPY_URL="$RBSPY_URL" \
    -e RAILS_VERSION="$RAILS_VERSION" \
    -e REQUEST_SECONDS="$REQUEST_SECONDS" || return 1

  rundir[$role]=$dir
}

# capture_fn for emit: $1=out  $2=role  $3=ext (speedscope.json|collapsed|pprof|callgrind)
copy_ruby_profile() {
  local out=$1 role=$2 ext=$3
  run_for_role "$role" || return 1
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

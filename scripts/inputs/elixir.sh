#!/usr/bin/env bash

cd "$(dirname "$0")/../.." || exit 1
source scripts/inputs/_common.sh

export MIX_HOME="$WORKDIR/mix"
export HEX_HOME="$WORKDIR/hex"

JASON_PIN="1.4.4"
EFLAMBE_PIN="0.3.1"

assets="$REPO/scripts/inputs/assets/elixir"

# Run a network command bounded by a timeout and retried. hex.pm connections
# occasionally stall on macOS. `</dev/null` keeps any prompt from blocking.
retry_net() {
  local n
  for n in 1 2 3; do
    if timeout 180 "$@" </dev/null; then
      return 0
    fi
    [[ $n -eq 3 ]] && { echo "  Network step kept stalling: $*" >&2; return 1; }
    notice "Stalled (attempt $n of 3). Retrying: $*"
  done
}

project_dir=""
setup_project() {
  [[ -n "$project_dir" ]] && return 0

  notice "Installing Hex and rebar"

  mkdir -p "$MIX_HOME" "$HEX_HOME"
  retry_net mix local.hex --force
  retry_net mix local.rebar --force

  notice "Creating mix project (jason $JASON_PIN, eflambe $EFLAMBE_PIN)"

  local dir="$WORKDIR/elixir-profile"
  mix new "$dir" --app profile >/dev/null </dev/null

  cat >"$dir/mix.exs" <<EOF
defmodule Profile.MixProject do
  use Mix.Project

  def project do
    [
      app: :profile,
      version: "0.1.0",
      elixir: "~> 1.14",
      deps: deps()
    ]
  end

  def application, do: [extra_applications: [:logger]]

  defp deps do
    [
      {:jason, "$JASON_PIN"},
      {:eflambe, "$EFLAMBE_PIN"}
    ]
  end
end
EOF

  cp "$assets/profile.ex" "$dir/lib/profile.ex"

  notice "Fetching and compiling deps"

  ( cd "$dir" && MIX_ENV=prod retry_net mix deps.get )
  ( cd "$dir" && MIX_ENV=prod mix compile </dev/null )

  project_dir="$dir"
}

# capture_fn for emit: $1=out  $2=role
record_eflambe() {
  local out=$1 role=$2
  setup_project
  fetch_twitter_json
  local dir="$project_dir"

  notice "Profiling jason using eflambe ($role)"

  local profile="$WORKDIR/elixir-$role-profile"
  rm -rf "$profile"
  mkdir -p "$profile"

  ( cd "$dir" && MIX_ENV=prod mix run -e '
      :ok = :application.ensure_started(:eflambe)
      doc = Profile.doc("'"$TWITTER_JSON"'")
      File.cd!("'"$profile"'", fn ->
        :eflambe.apply({Profile, :run, [doc]}, output_format: :brendan_gregg)
      end)
    ' </dev/null >/dev/null )

  local produced
  produced=$(find "$profile" -type f -name '*.bggg' -o -type f -name '*Profile*' 2>/dev/null | head -1)
  if [[ -z "$produced" ]]; then
    produced=$(find "$profile" -type f 2>/dev/null | head -1)
  fi
  [[ -n "$produced" ]] || { echo "  eflambe produced no output in $profile" >&2; return 1; }
  mv "$produced" "$out"
}

for role in base current; do
  try emit "$GENERATED_INPUTS/elixir.eflambe.cpu.$role.collapsed" record_eflambe "$role"
done

verify_pairs

exit "$status"

#!/usr/bin/env bash

cd "$(dirname "$0")/../.." || exit 1
source scripts/inputs/_common.sh

export MIX_HOME="$WORKDIR/mix"
export HEX_HOME="$WORKDIR/hex"

# Base and current profile consecutive jason releases, so a diff compares two
# versions of the same code.
declare -A JASON_PIN=([base]="1.4.4" [current]="1.4.5")
EFLAMBE_PIN="0.3.1"

assets="$REPO/scripts/inputs/assets/elixir"

# hex.pm connections occasionally stall on macOS, so retry a network command
# that times out. `</dev/null` keeps any prompt from blocking.
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

hex_installed=""
install_hex() {
  [[ -n "$hex_installed" ]] && return 0

  notice "Installing Hex and rebar"

  mkdir -p "$MIX_HOME" "$HEX_HOME"
  retry_net mix local.hex --force
  retry_net mix local.rebar --force

  hex_installed=1
}

# Each role creates its project in one directory, so both record the same
# paths.
project_dir="$WORKDIR/elixir-profile"
setup_project() {
  local role=$1
  install_hex || return 1

  notice "Creating mix project (jason ${JASON_PIN[$role]}, eflambe $EFLAMBE_PIN)"

  local dir="$project_dir"
  rm -rf "$dir"
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
      {:jason, "${JASON_PIN[$role]}"},
      {:eflambe, "$EFLAMBE_PIN"}
    ]
  end
end
EOF

  cp "$assets/profile.ex" "$dir/lib/profile.ex"

  notice "Fetching and compiling deps"

  ( cd "$dir" && MIX_ENV=prod retry_net mix deps.get )
  ( cd "$dir" && MIX_ENV=prod mix compile </dev/null )
}

# capture_fn for emit: $1=out  $2=role
record_eflambe() {
  local out=$1 role=$2
  setup_project "$role" || return 1
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
  try emit "$GENERATED_INPUTS/elixir.eflambe.wall.$role.collapsed" record_eflambe "$role"
done

verify_pairs

exit "$status"

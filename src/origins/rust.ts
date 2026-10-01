import type { EntryMatchRule } from './spec.ts'

/**
 * The `rustc/<40-hex commit hash>` path segment that Rust embeds in stdlib
 * source locations, e.g.
 * `/rustc/59807616e1fa2540724bfbac14d7976d7e4a3860/library/std/src/rt.rs`.
 */
export const RUSTC_COMMIT_HASH_PATH = `rustc/[0-9a-f]{40}`

// The rustc commit hash varies per toolchain build.
const RUSTC_HASH_REGEX = new RegExp(
  `(?<prefix>^|/)${RUSTC_COMMIT_HASH_PATH}(?=/)`,
  `u`,
)

// Cargo names a build script's output directory with a per-build hash and
// writes the output to its `out/` subdirectory, e.g.
// `build/web-compiler-274140d43750284c/out/parser.rs`.
// The `out/` lookahead keeps the rule from stripping unrelated
// `build/<name>-<16 hex>/` directories, such as some JS bundler outputs.
const CARGO_BUILD_HASH_REGEX =
  /(?<prefix>^|\/)(?<dir>build\/[^/]+)-[0-9a-f]{16}(?=\/out\/)/u

/**
 * The version of a registry crate's directory, e.g. the `-1.0.140` of
 * `<CARGO_HOME>/registry/src/index.crates.io-1949cf8c6b5b557f/serde_json-1.0.140/src/de.rs`,
 * with any pre-release or build suffix after it. The path without the version
 * identifies the file across versions, because Cargo extracts each version of
 * a crate to its own `<name>-<version>` directory.
 *
 * A build can link two semver-incompatible versions of one crate. Once the rule
 * strips the versions, their functions share a match key.
 */
const CARGO_REGISTRY_VERSION_REGEX =
  /(?<prefix>\/registry\/src\/[^/]+\/[A-Za-z][\w-]*?)-\d+\.\d+\.\d+[^/]*(?=\/)/u

export const RUST_LOCATION_MATCH_RULES: readonly EntryMatchRule[] = [
  [RUSTC_HASH_REGEX, `$<prefix>rustc`],
  [CARGO_BUILD_HASH_REGEX, `$<prefix>$<dir>`],
  [CARGO_REGISTRY_VERSION_REGEX, `$<prefix>`],
]

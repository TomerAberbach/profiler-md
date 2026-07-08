import type { DeepReadonly } from '../helpers/types.ts'
import { fileReferencePath } from '../location.ts'
import type { EntryCategory, ProfileEntry } from '../options.ts'
import { locationlessStdlibCategory } from './categorize.ts'
import type { OriginSpec } from './origin.ts'

export const pprofRsOriginSpec = {
  id: `pprof-rs`,
  formats: [`pprof`],
  matchesEntry: entry =>
    rustStdlibCategory(entry) !== undefined || isRustName(entry),
  categorize: entry =>
    rustStdlibCategory(entry) ??
    cargoRegistryCategory(entry) ??
    locationlessStdlibCategory(entry) ??
    `ours`,
} as const satisfies OriginSpec

/** Categorizes Rust standard-library (`std`/`core`/`alloc`) frames as `stdlib`. */
const rustStdlibCategory = ({
  location,
}: DeepReadonly<ProfileEntry>): EntryCategory | undefined =>
  location && RUST_STDLIB_PATH.test(fileReferencePath(location))
    ? `stdlib`
    : undefined

/**
 * The `rustc/<40-hex commit hash>` path segment that Rust embeds in stdlib
 * source locations, e.g.
 * `/rustc/59807616e1fa2540724bfbac14d7976d7e4a3860/library/std/src/rt.rs`.
 *
 * A source-string fragment (not a `RegExp`) so callers can splice it into a
 * larger pattern; shared with the source-map path normalization in
 * `../options.ts`, which collapses the same hash.
 */
export const RUSTC_COMMIT_HASH_PATH = `rustc/[0-9a-f]{40}`

/**
 * Rust stdlib sources come from the rustc build, under a `/rustc/` path bearing
 * the commit hash, or from a local rustup toolchain, under a
 * `/lib/rustlib/src/rust/` path.
 */
const RUST_STDLIB_PATH = new RegExp(
  `/${RUSTC_COMMIT_HASH_PATH}/|/lib/rustlib/src/rust/`,
  `u`,
)

/** Categorizes frames from Cargo's dependency registry as `third-party`. */
const cargoRegistryCategory = ({
  location,
}: DeepReadonly<ProfileEntry>): EntryCategory | undefined =>
  location && fileReferencePath(location).includes(`/registry/src/`)
    ? `third-party`
    : undefined

/** Whether the entry's name carries Rust's name-mangling syntax. */
const isRustName = ({ name }: DeepReadonly<ProfileEntry>): boolean =>
  name !== undefined &&
  (name.includes(`{{closure}}`) || /::\{closure#\d/u.test(name))

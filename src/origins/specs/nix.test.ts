import { describe, expect, test } from 'vitest'
import type { StackFrame } from '../../modalities/stack-frame.ts'
import type { ProfileEntry } from '../../options.ts'
import { absoluteEntry, determineOrigin, relativeEntry } from '../testing.ts'
import { nixOriginSpec } from './nix.ts'

const NIXPKGS = `/nix/store/j2r11kxv91yl5xqppy3vy84klwxjbz1i-source`

/** A frame as it looks after normalization: a call-site file location. */
const locatedEntry = (name: string | undefined, path: string): ProfileEntry =>
  path.startsWith(`/`)
    ? absoluteEntry(name ?? `(anonymous)`, `file://${path}`)
    : relativeEntry(name ?? `(anonymous)`, path)

describe(`detection`, () => {
  test.each([
    `${NIXPKGS}/lib/attrsets.nix:1623:11:binaryMerge`,
    `${NIXPKGS}/pkgs/stdenv/generic/make-derivation.nix:563:18`,
    `${NIXPKGS}/lib/fixed-points.nix:343:18:functor`,
    `«nix-internal»/derivation-internal.nix:50:17:primop getAttr`,
    `primop derivationStrict:hello-2.12.3`,
  ])(`detects the Nix evaluator by its %s frame`, name => {
    expect(
      determineOrigin({ format: `collapsed`, entries: [relativeEntry(name)] }),
    ).toBe(`nix`)
  })

  test(`does not detect it from another profiler's collapsed frame`, () => {
    expect(
      determineOrigin({
        format: `collapsed`,
        entries: [relativeEntry(`parse - /app/lib/foo.rb:12`)],
      }),
    ).not.toBe(`nix`)
  })
})

describe(`normalizeStackFrame`, () => {
  const { normalizeStackFrame } = nixOriginSpec

  test(`splits a named lambda into its name and call-site location`, () => {
    expect(
      normalizeStackFrame({
        name: `${NIXPKGS}/lib/attrsets.nix:1623:11:binaryMerge`,
      }),
    ).toEqual({
      name: `binaryMerge`,
      callSite: {
        type: `file`,
        urlOrPath: `${NIXPKGS}/lib/attrsets.nix`,
        position: { line: 1623, column: 11 },
      },
    })
  })

  test(`leaves an anonymous lambda nameless`, () => {
    expect(
      normalizeStackFrame({ name: `${NIXPKGS}/pkgs/stdenv/booter.nix:98:14` }),
    ).toEqual({
      name: undefined,
      callSite: {
        type: `file`,
        urlOrPath: `${NIXPKGS}/pkgs/stdenv/booter.nix`,
        position: { line: 98, column: 14 },
      },
    })
  })

  test(`keeps a builtin's whole name, including a derivation name`, () => {
    expect(
      normalizeStackFrame({
        name: `«nix-internal»/derivation-internal.nix:37:12:primop derivationStrict:hello-2.12.3`,
      }),
    ).toEqual({
      name: `primop derivationStrict:hello-2.12.3`,
      callSite: {
        type: `file`,
        urlOrPath: `«nix-internal»/derivation-internal.nix`,
        position: { line: 37, column: 12 },
      },
    })
  })

  test(`leaves a builtin with no call site unchanged`, () => {
    const input: StackFrame = { name: `primop getAttr` }
    expect(normalizeStackFrame(input)).toBe(input)
  })

  test(`drops the «none» placeholder position`, () => {
    expect(normalizeStackFrame({ name: `«none»:0` })).toEqual({
      name: undefined,
    })
  })

  test(`leaves an already-sourced frame unchanged`, () => {
    const input: StackFrame = {
      name: `binaryMerge`,
      definition: { type: `file`, urlOrPath: `${NIXPKGS}/lib/attrsets.nix` },
    }
    expect(normalizeStackFrame(input)).toBe(input)
  })
})

describe(`categorizeEntry`, () => {
  const { categorizeEntry } = nixOriginSpec

  test.each([
    locatedEntry(`primop getAttr`, `«nix-internal»/derivation-internal.nix`),
    locatedEntry(`primop import`, `${NIXPKGS}/pkgs/top-level/impure.nix`),
    locatedEntry(
      `primop derivationStrict:hello-2.12.3`,
      `«nix-internal»/derivation-internal.nix`,
    ),
    relativeEntry(`primop getAttr`),
  ])(`a builtin is native wherever it was called from ($name)`, entry => {
    expect(categorizeEntry(entry)).toBe(`native`)
  })

  test.each([
    locatedEntry(undefined, `«nix-internal»/derivation-internal.nix`),
    locatedEntry(undefined, `<nix/fetchurl.nix>`),
  ])(`the evaluator's embedded Nix code is stdlib ($location.path)`, entry => {
    expect(categorizeEntry(entry)).toBe(`stdlib`)
  })

  test.each([
    locatedEntry(`binaryMerge`, `${NIXPKGS}/lib/attrsets.nix`),
    locatedEntry(`functor`, `${NIXPKGS}/lib/fixed-points.nix`),
    locatedEntry(undefined, `/home/alice/dotfiles/flake.nix`),
  ])(`Nix code is ours ($location.url)`, entry => {
    expect(categorizeEntry(entry)).toBe(`ours`)
  })

  test(`a frame whose position the evaluator could not resolve is unknown`, () => {
    expect(categorizeEntry(relativeEntry(`(anonymous)`))).toBe(`unknown`)
    expect(categorizeEntry(relativeEntry(`functor`))).toBe(`unknown`)
  })
})

describe(`matchEntry`, () => {
  const { matchEntry } = nixOriginSpec

  test(`strips the store hash from a store path`, () => {
    expect(
      matchEntry(locatedEntry(`binaryMerge`, `${NIXPKGS}/lib/attrsets.nix`)),
    ).toEqual({ location: `file:///nix/store/source/lib/attrsets.nix` })
  })

  test(`leaves a path outside the store alone`, () => {
    expect(
      matchEntry(locatedEntry(undefined, `/home/alice/dotfiles/flake.nix`)),
    ).toBeUndefined()
  })
})

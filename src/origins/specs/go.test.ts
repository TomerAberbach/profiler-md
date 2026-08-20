import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { describe, expect, test } from 'vitest'
import { determineOrigin, relativeEntry } from '../testing.ts'
import { GO_STDLIB_PACKAGES, goOriginSpec } from './go.ts'

describe(`detection`, () => {
  test(`detects go by runtime frames located in a GOROOT source tree`, () => {
    expect(
      determineOrigin({
        format: `pprof`,
        entries: [
          relativeEntry(
            `runtime.usleep`,
            `../../nix/store/abc-go-1.26.3/share/go/src/runtime/sys_darwin.go`,
          ),
        ],
      }),
    ).toBe(`go`)
  })

  test(`detects go by runtime frames a -trimpath build leaves at their import path`, () => {
    expect(
      determineOrigin({
        format: `pprof`,
        entries: [relativeEntry(`runtime.usleep`, `runtime/sys_darwin.s`)],
      }),
    ).toBe(`go`)
  })

  // Another language's profiler may name a `runtime` module of its own, and a
  // pprof profile of it reaches the Go origin first.
  test.each([`src/runtime.ts`, `runtime/tick.rb`, `runtime/gc.jl`])(
    `a runtime-prefixed name at %s is not a Go marker`,
    path => {
      expect(
        determineOrigin({
          format: `pprof`,
          entries: [relativeEntry(`runtime.foo`, path)],
        }),
      ).toBe(`unknown`)
    },
  )
})

describe(`categorizeEntry`, () => {
  const { categorizeEntry } = goOriginSpec

  // The unlocated cases are runtime internals and bare linker symbols: runtime
  // assembly.
  test.each<[string, string | undefined]>([
    [
      `runtime.usleep`,
      `../../nix/store/abc-go-1.26.3/share/go/src/runtime/sys_darwin.go`,
    ],
    [
      `encoding/json.(*decodeState).value`,
      `../../nix/store/abc-go-1.26.3/share/go/src/encoding/json/decode.go`,
    ],
  ])(`the standard-library %s function is stdlib`, (name, path) => {
    expect(categorizeEntry(relativeEntry(name, path))).toBe(`stdlib`)
  })

  // Go compiles ahead of time with full symbol information, so a frame with no
  // location is a raw address the profiler never symbolized.
  test.each([`runtime.goexit`, `gosave_systemstack_switch`])(
    `the unsymbolized %s frame is native`,
    name => {
      expect(categorizeEntry(relativeEntry(name, undefined))).toBe(`native`)
    },
  )

  test(`domain-prefixed modules are third-party`, () => {
    expect(
      categorizeEntry(
        relativeEntry(
          `github.com/goccy/go-json.Marshal`,
          `/home/u/go/pkg/mod/github.com/goccy/go-json@v0.10.2/json.go`,
        ),
      ),
    ).toBe(`third-party`)
  })

  // `go mod vendor` copies a dependency into the profiled program's own
  // `vendor/` directory, keeping neither the module cache prefix nor the
  // `@version` segment.
  test(`a vendored module is third-party`, () => {
    expect(
      categorizeEntry(
        relativeEntry(
          `github.com/goccy/go-json.Marshal`,
          `/work/vendor/github.com/goccy/go-json/json.go`,
        ),
      ),
    ).toBe(`third-party`)
  })

  // The standard library vendors packages of its own, under import paths that
  // start with `vendor/`.
  test(`a package the standard library vendors is stdlib`, () => {
    expect(
      categorizeEntry(
        relativeEntry(
          `vendor/golang.org/x/net/dns/dnsmessage.(*Parser).Start`,
          `../../nix/store/abc-go-1.26.3/share/go/src/vendor/golang.org/x/net/dns/dnsmessage/message.go`,
        ),
      ),
    ).toBe(`stdlib`)
  })

  // A generic instantiation's type arguments contain import paths of their
  // own, after the package of the function they instantiate.
  test(`a generic instantiation is categorized by its own package`, () => {
    expect(
      categorizeEntry(
        relativeEntry(
          `slices.partitionCmpFunc[go.shape.struct { encoding/json.v reflect.Value }]`,
          `../../nix/store/abc-go-1.26.3/share/go/src/slices/zsortanyfunc.go`,
        ),
      ),
    ).toBe(`stdlib`)
  })

  // A domain-less package located outside GOROOT is the user's module, not a
  // standard-library package.
  test.each([
    [`main.parseWorkload`, `/work/profile.go`],
    [`mypkg.Work`, `/work/mypkg/work.go`],
  ])(`the %s function is ours`, (name, path) => {
    expect(categorizeEntry(relativeEntry(name, path))).toBe(`ours`)
  })

  // `-trimpath` strips the GOROOT and module cache prefixes, leaving each file
  // at its package's import path.
  describe(`-trimpath`, () => {
    test.each([
      [`runtime.usleep`, `runtime/sys_darwin.s`],
      [`encoding/json.(*decodeState).value`, `encoding/json/decode.go`],
      [`internal/runtime/maps.Get`, `internal/runtime/maps/map.go`],
    ])(`the standard-library %s function is stdlib`, (name, path) => {
      expect(categorizeEntry(relativeEntry(name, path))).toBe(`stdlib`)
    })

    test(`the collector is a garbage collector frame`, () => {
      expect(
        categorizeEntry(
          relativeEntry(`runtime.gcBgMarkWorker`, `runtime/mgc.go`),
        ),
      ).toBe(`garbage-collector`)
    })

    // Go inlines across packages and reports the inlined frame at the file it
    // was inlined into, so the location's package differs from the name's.
    test.each([
      [`runtime.mapassign_faststr`, `internal/runtime/maps/runtime_faststr.go`],
      [`reflect.typedmemmove`, `runtime/mbarrier.go`],
      [`internal/runtime/maps.typedmemmove`, `runtime/mbarrier.go`],
    ])(`the inlined standard-library %s function is stdlib`, (name, path) => {
      expect(categorizeEntry(relativeEntry(name, path))).toBe(`stdlib`)
    })

    // The runtime's assembly routines are bare linker symbols, so only their
    // location categorizes them.
    test.each([
      [`cmpbody`, `internal/bytealg/compare_arm64.s`, `stdlib`],
      [`aeshashbody`, `runtime/asm_arm64.s`, `stdlib`],
      [`myasm`, `github.com/example/subject/asm_arm64.s`, `ours`],
    ])(`the bare %s symbol is %s`, (name, path, category) => {
      expect(categorizeEntry(relativeEntry(name, path))).toBe(category)
    })

    test(`the collector inlined into another package is a garbage collector frame`, () => {
      expect(
        categorizeEntry(
          relativeEntry(
            `runtime.gcDrainMarkWorkerDedicated`,
            `runtime/mgcmark.go`,
          ),
        ),
      ).toBe(`garbage-collector`)
    })

    test(`a vendored module is third-party`, () => {
      expect(
        categorizeEntry(
          relativeEntry(
            `github.com/goccy/go-json.Marshal`,
            `github.com/example/subject/vendor/github.com/goccy/go-json/json.go`,
          ),
        ),
      ).toBe(`third-party`)
    })

    test(`a module cache @version segment is third-party`, () => {
      expect(
        categorizeEntry(
          relativeEntry(
            `github.com/goccy/go-json.Marshal`,
            `github.com/goccy/go-json@v0.10.3/json.go`,
          ),
        ),
      ).toBe(`third-party`)
    })

    // The profiled program's own module has no `@version`, so its
    // domain-prefixed packages are ours rather than a downloaded module's.
    test.each([
      [
        `github.com/example/subject/internal/work.Run`,
        `github.com/example/subject/internal/work/work.go`,
      ],
      [`main.main`, `github.com/example/subject/main.go`],
      [`mypkg.Work`, `mypkg/work.go`],
    ])(`the %s function is ours`, (name, path) => {
      expect(categorizeEntry(relativeEntry(name, path))).toBe(`ours`)
    })
  })
})

// Frames of a top-level standard-library package a later Go release adds
// would be categorized as the profiled program's own code. The list is pinned
// rather than read from an installed toolchain, since CI installs none.
describe(`GO_STDLIB_PACKAGES`, () => {
  test(`contains every top-level package of go list std`, () => {
    const packages = readFileSync(
      join(import.meta.dirname, `go-std-packages.txt`),
      `utf8`,
    )
      .split(`\n`)
      .filter(line => line !== `` && !line.startsWith(`#`))
      .map(importPath => importPath.split(`/`)[0]!)

    expect([...GO_STDLIB_PACKAGES].sort()).toStrictEqual(
      [...new Set(packages)].sort(),
    )
  })
})

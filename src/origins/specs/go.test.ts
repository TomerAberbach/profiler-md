import { describe, expect, test } from 'vitest'
import { determineOrigin, relativeEntry } from '../testing.ts'
import { goOriginSpec } from './go.ts'

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

  test(`a runtime-prefixed name outside a GOROOT tree is not a Go marker`, () => {
    expect(
      determineOrigin({
        format: `pprof`,
        entries: [relativeEntry(`runtime.foo`, `src/runtime.ts`)],
      }),
    ).toBe(`unknown`)
  })
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
    [`runtime.goexit`, undefined],
    [`gosave_systemstack_switch`, undefined],
  ])(`the standard-library %s function is stdlib`, (name, path) => {
    expect(categorizeEntry(relativeEntry(name, path))).toBe(`stdlib`)
  })

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

  // A domain-less package located outside GOROOT is the user's module, not a
  // standard-library package.
  test.each([
    [`main.parseWorkload`, `/work/profile.go`],
    [`mypkg.Work`, `/work/mypkg/work.go`],
  ])(`the %s function is ours`, (name, path) => {
    expect(categorizeEntry(relativeEntry(name, path))).toBe(`ours`)
  })
})

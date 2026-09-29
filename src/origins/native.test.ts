import { describe, expect, test } from 'vitest'
import { nativeMatchEntry } from './native.ts'
import { absoluteEntry } from './testing.ts'

describe(`nativeMatchEntry`, () => {
  test.each([
    [
      `a registry crate`,
      `file:///home/alice/.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/serde_json-1.0.140/src/de.rs`,
      `file:///home/alice/.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/serde_json/src/de.rs`,
    ],
    [
      `a registry crate with a pre-release version`,
      `file:///home/alice/.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/tokio-util-0.8.0-alpha.1/src/codec.rs`,
      `file:///home/alice/.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/tokio-util/src/codec.rs`,
    ],
    [
      `a Go module`,
      `file:///home/alice/go/pkg/mod/github.com/spf13/cobra@v1.9.1/command.go`,
      `file:///home/alice/go/pkg/mod/github.com/spf13/cobra/command.go`,
    ],
    [
      `a Go module at a pseudo-version`,
      `file:///home/alice/go/pkg/mod/golang.org/x/sys@v0.0.0-20240110193028-0dcbfd608b1e/unix/syscall.go`,
      `file:///home/alice/go/pkg/mod/golang.org/x/sys/unix/syscall.go`,
    ],
  ])(`strips the version of %s`, (_description, url, expected) => {
    expect(nativeMatchEntry(absoluteEntry(`f`, url))).toEqual({
      location: expected,
    })
  })

  test.each([
    [
      `a rustc commit`,
      `file:///rustc/${`a`.repeat(40)}/library/std/src/rt.rs`,
      `file:///rustc/library/std/src/rt.rs`,
    ],
    [
      `a Cargo build script`,
      `file:///app/target/release/build/web-compiler-${`a`.repeat(16)}/out/parser.rs`,
      `file:///app/target/release/build/web-compiler/out/parser.rs`,
    ],
  ])(`strips the hash of %s`, (_description, url, expected) => {
    expect(nativeMatchEntry(absoluteEntry(`f`, url))).toEqual({
      location: expected,
    })
  })

  test.each([
    [`a program's own source`, `file:///home/alice/app/src/main.rs`],
    [`a C library's source`, `file:///usr/src/zstd-1.5.6/lib/zstd.c`],
  ])(`leaves %s unchanged`, (_description, url) => {
    expect(nativeMatchEntry(absoluteEntry(`f`, url))).toBeUndefined()
  })
})

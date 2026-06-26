import { describe, expect, test } from 'vitest'
import type { ProfileEntry } from '../options.ts'
import { categorizeEntryForOrigin, origins } from './index.ts'
import type { Origin } from './index.ts'
import { jvmOriginSpec } from './jvm.ts'
import { pySpyOriginSpec } from './py-spy.ts'
import { unknownOriginSpec } from './unknown.ts'

const located = (url: string): ProfileEntry => ({
  id: 1,
  name: `f`,
  location: { type: `absolute`, url: new URL(url) },
})

const relative = (path: string): ProfileEntry => ({
  id: 1,
  name: `f`,
  location: { type: `relative`, path },
})

const named = (name: string): ProfileEntry => ({ id: 1, name })

describe(`every origin`, () => {
  test.each(origins)(`%s`, origin => {
    // A frame with no location is a runtime internal.
    expect(categorizeEntryForOrigin(named(`native`), origin)).toBe(`stdlib`)
    // A located project file is ours.
    expect(
      categorizeEntryForOrigin(located(`file:///app/src/index.ts`), origin),
    ).toBe(`ours`)
    expect(categorizeEntryForOrigin(relative(`src/index.ts`), origin)).toBe(
      `ours`,
    )
  })
})

describe(`synthetic frames (JavaScript runtimes)`, () => {
  const jsEngineOrigins: Origin[] = [`node`, `deno`, `bun`, `safari`]
  test.each(jsEngineOrigins)(`%s`, origin => {
    expect(categorizeEntryForOrigin(named(`(garbage collector)`), origin)).toBe(
      `garbage collector`,
    )
    expect(categorizeEntryForOrigin(named(`(idle)`), origin)).toBe(`idle`)
    // Anonymous functions are real frames, not synthetic ones.
    expect(
      categorizeEntryForOrigin(named(`(anonymous function)`), origin),
    ).toBe(`stdlib`)
  })
})

describe(`Node`, () => {
  test(`node: builtins are stdlib`, () => {
    expect(categorizeEntryForOrigin(located(`node:fs`), `node`)).toBe(`stdlib`)
    expect(
      categorizeEntryForOrigin(
        located(`node:internal/streams/readable`),
        `node`,
      ),
    ).toBe(`stdlib`)
  })

  test(`bun:/ext: specifiers are not treated as Node stdlib`, () => {
    expect(categorizeEntryForOrigin(located(`bun:sqlite`), `node`)).toBe(`ours`)
    expect(
      categorizeEntryForOrigin(located(`ext:core/01_core.js`), `node`),
    ).toBe(`ours`)
  })

  test(`node_modules/ is third-party`, () => {
    expect(
      categorizeEntryForOrigin(
        located(`file:///app/node_modules/x/index.js`),
        `node`,
      ),
    ).toBe(`third-party`)
  })

  test(`V8 regexp frames are regexp`, () => {
    expect(categorizeEntryForOrigin(named(`RegExp: /a/`), `node`)).toBe(
      `regexp`,
    )
  })

  test(`the pprof Garbage Collection frame is left to the node-pprof origin`, () => {
    // Node's native profiler never emits this label, so it isn't a category.
    expect(categorizeEntryForOrigin(named(`Garbage Collection`), `node`)).toBe(
      `stdlib`,
    )
  })
})

describe(`node-pprof`, () => {
  test(`the package's Garbage Collection frame is the garbage collector`, () => {
    expect(
      categorizeEntryForOrigin(named(`Garbage Collection`), `node-pprof`),
    ).toBe(`garbage collector`)
  })

  test(`node: builtins and node_modules/ share Node's conventions`, () => {
    expect(categorizeEntryForOrigin(located(`node:fs`), `node-pprof`)).toBe(
      `stdlib`,
    )
    expect(
      categorizeEntryForOrigin(
        located(`file:///app/node_modules/x/index.js`),
        `node-pprof`,
      ),
    ).toBe(`third-party`)
  })

  test(`no V8 synthetic or regexp frames`, () => {
    // The package uses its own labels, so these fall through to locationless.
    expect(
      categorizeEntryForOrigin(named(`(garbage collector)`), `node-pprof`),
    ).toBe(`stdlib`)
    expect(categorizeEntryForOrigin(named(`RegExp: /a/`), `node-pprof`)).toBe(
      `stdlib`,
    )
  })
})

describe(`Deno`, () => {
  test(`ext:, deno:, and node: specifiers are stdlib`, () => {
    expect(
      categorizeEntryForOrigin(located(`ext:core/01_core.js`), `deno`),
    ).toBe(`stdlib`)
    expect(categorizeEntryForOrigin(located(`deno:runtime`), `deno`)).toBe(
      `stdlib`,
    )
    expect(categorizeEntryForOrigin(located(`node:fs`), `deno`)).toBe(`stdlib`)
  })

  test(`npm: and jsr: specifiers are third-party`, () => {
    expect(categorizeEntryForOrigin(located(`npm:lodash`), `deno`)).toBe(
      `third-party`,
    )
    expect(categorizeEntryForOrigin(located(`jsr:@std/path`), `deno`)).toBe(
      `third-party`,
    )
  })

  test(`node_modules/ is third-party`, () => {
    expect(
      categorizeEntryForOrigin(
        located(`file:///app/node_modules/x/index.js`),
        `deno`,
      ),
    ).toBe(`third-party`)
  })

  test(`V8 regexp frames are regexp`, () => {
    expect(categorizeEntryForOrigin(named(`RegExp: /a/`), `deno`)).toBe(
      `regexp`,
    )
  })
})

describe(`Bun`, () => {
  test(`node: and bun: builtins are stdlib`, () => {
    expect(categorizeEntryForOrigin(located(`node:fs`), `bun`)).toBe(`stdlib`)
    expect(categorizeEntryForOrigin(located(`bun:sqlite`), `bun`)).toBe(
      `stdlib`,
    )
    expect(categorizeEntryForOrigin(located(`bun:ffi`), `bun`)).toBe(`stdlib`)
  })

  test(`node_modules/ is third-party`, () => {
    expect(
      categorizeEntryForOrigin(
        located(`file:///app/node_modules/x/index.js`),
        `bun`,
      ),
    ).toBe(`third-party`)
  })

  test(`RegExp: frames are not V8 regexp frames (Bun runs on JavaScriptCore)`, () => {
    // No location, so it falls through to the locationless heuristic.
    expect(categorizeEntryForOrigin(named(`RegExp: /a/`), `bun`)).toBe(`stdlib`)
  })
})

describe(`Safari`, () => {
  test(`injected WebKit internals are stdlib`, () => {
    expect(
      categorizeEntryForOrigin(relative(`__InjectedScript_1.js`), `safari`),
    ).toBe(`stdlib`)
  })

  test(`runtime-specific module schemes are not treated as Safari stdlib`, () => {
    expect(categorizeEntryForOrigin(located(`node:fs`), `safari`)).toBe(`ours`)
  })

  test(`node_modules/ is third-party (dev servers serve it over HTTP)`, () => {
    expect(
      categorizeEntryForOrigin(
        located(`file:///app/node_modules/x/index.js`),
        `safari`,
      ),
    ).toBe(`third-party`)
  })
})

describe(`pprof-rs`, () => {
  test(`rustc and rustup stdlib paths are stdlib`, () => {
    expect(
      categorizeEntryForOrigin(
        located(
          `file:///rustc/59807616e1fa2540724bfbac14d7976d7e4a3860/library/std/src/rt.rs`,
        ),
        `pprof-rs`,
      ),
    ).toBe(`stdlib`)
    expect(
      categorizeEntryForOrigin(
        located(
          `file:///home/u/.rustup/toolchains/stable/lib/rustlib/src/rust/library/core/src/ops/function.rs`,
        ),
        `pprof-rs`,
      ),
    ).toBe(`stdlib`)
  })

  test(`Cargo registry dependencies are third-party`, () => {
    expect(
      categorizeEntryForOrigin(
        located(
          `file:///home/u/.cargo/registry/src/index.crates.io-abc/lalrpop-0.20/src/lib.rs`,
        ),
        `pprof-rs`,
      ),
    ).toBe(`third-party`)
  })

  test(`project files are ours`, () => {
    expect(
      categorizeEntryForOrigin(
        located(`file:///app/compiler/src/main.rs`),
        `pprof-rs`,
      ),
    ).toBe(`ours`)
  })
})

describe(`py-spy`, () => {
  test(`frozen and interpreter stdlib modules are stdlib`, () => {
    expect(categorizeEntryForOrigin(relative(`<frozen runpy>`), `py-spy`)).toBe(
      `stdlib`,
    )
    expect(
      categorizeEntryForOrigin(
        located(`file:///usr/lib/python3.12/asyncio/base_events.py`),
        `py-spy`,
      ),
    ).toBe(`stdlib`)
  })

  test(`installed packages are third-party`, () => {
    expect(
      categorizeEntryForOrigin(
        located(`file:///app/.venv/lib/python3.12/site-packages/flask/app.py`),
        `py-spy`,
      ),
    ).toBe(`third-party`)
  })

  test(`project files are ours`, () => {
    expect(categorizeEntryForOrigin(relative(`script.py`), `py-spy`)).toBe(
      `ours`,
    )
  })
})

describe(`jvm`, () => {
  test(`standard-library and JDK-internal classes are stdlib`, () => {
    // The class is carried as the location.
    expect(
      categorizeEntryForOrigin(
        relative(`java.util.concurrent.ForkJoinPool`),
        `jvm`,
      ),
    ).toBe(`stdlib`)
    expect(
      categorizeEntryForOrigin(
        relative(`jdk.internal.ref.PhantomCleanable`),
        `jvm`,
      ),
    ).toBe(`stdlib`)
    expect(
      categorizeEntryForOrigin(relative(`sun.nio.ch.FileChannelImpl`), `jvm`),
    ).toBe(`stdlib`)
  })

  test(`native runtime libraries are stdlib`, () => {
    expect(categorizeEntryForOrigin(relative(`libjvm.dylib`), `jvm`)).toBe(
      `stdlib`,
    )
    expect(
      categorizeEntryForOrigin(relative(`libsystem_kernel.dylib`), `jvm`),
    ).toBe(`stdlib`)
    // A version suffix on the shared object is still a native library.
    expect(categorizeEntryForOrigin(relative(`libc.so.6`), `jvm`)).toBe(
      `stdlib`,
    )
  })

  test(`application classes are ours`, () => {
    expect(
      categorizeEntryForOrigin(
        relative(`org.renaissance.core.Launcher`),
        `jvm`,
      ),
    ).toBe(`ours`)
    // A package segment named like a native-library extension (`so`/`dll`/
    // `dylib`) must not be mistaken for a shared object: the extension only
    // counts at the end of the path.
    expect(
      categorizeEntryForOrigin(relative(`com.acme.so.Helper`), `jvm`),
    ).toBe(`ours`)
  })
})

describe(`unknown`, () => {
  test(`recognizes only synthetic frames and locationless internals`, () => {
    // The only conventions recognizable without identifying the runtime.
    expect(
      categorizeEntryForOrigin(named(`(garbage collector)`), `unknown`),
    ).toBe(`garbage collector`)
    expect(categorizeEntryForOrigin(named(`native`), `unknown`)).toBe(`stdlib`)
  })

  test(`applies no runtime-specific knowledge`, () => {
    // V8 regexp labels, node_modules, and module schemes all need a known
    // runtime. A `RegExp:` frame is `stdlib` only because it has no location,
    // not because the label is recognized.
    expect(categorizeEntryForOrigin(named(`RegExp: /a/`), `unknown`)).toBe(
      `stdlib`,
    )
    expect(
      categorizeEntryForOrigin(
        located(`file:///app/node_modules/x/index.js`),
        `unknown`,
      ),
    ).toBe(`ours`)
    expect(categorizeEntryForOrigin(located(`node:fs`), `unknown`)).toBe(`ours`)
    expect(
      categorizeEntryForOrigin(located(`ext:core/01_core.js`), `unknown`),
    ).toBe(`ours`)
  })
})

describe(`normalizeFrame`, () => {
  describe(`unknown (plain folded "file:func:line")`, () => {
    const { normalizeFrame } = unknownOriginSpec

    test(`extracts a basename:func:line location`, () => {
      expect(normalizeFrame({ name: `app.py:main:10` })).toEqual({
        name: `main`,
        location: { urlOrPath: `app.py`, line: 10 },
      })
    })

    test(`keeps a Windows drive-letter path whole instead of splitting on the drive colon`, () => {
      expect(normalizeFrame({ name: `C:\\proj\\app.py:run:10` })).toEqual({
        name: `run`,
        location: { urlOrPath: `C:\\proj\\app.py`, line: 10 },
      })
      expect(normalizeFrame({ name: `D:/proj/app.py:run:10` })).toEqual({
        name: `run`,
        location: { urlOrPath: `D:/proj/app.py`, line: 10 },
      })
    })

    test(`keeps a C++ namespaced function name intact`, () => {
      expect(normalizeFrame({ name: `file.cpp:Foo::bar:42` })).toEqual({
        name: `Foo::bar`,
        location: { urlOrPath: `file.cpp`, line: 42 },
      })
    })

    test(`treats a single-colon frame as a plain name`, () => {
      expect(normalizeFrame({ name: `tid:140234` })).toEqual({
        name: `tid:140234`,
      })
    })

    test(`leaves an already-located frame unchanged`, () => {
      const input = { name: `app.py:main:10`, location: { urlOrPath: `a.py` } }
      expect(normalizeFrame(input)).toBe(input)
    })
  })

  describe(`py-spy ("func (file:line)")`, () => {
    const { normalizeFrame } = pySpyOriginSpec

    test(`splits the trailing (file:line) into a location and sampled line`, () => {
      expect(normalizeFrame({ name: `parse (black/parsing.py:42)` })).toEqual({
        name: `parse`,
        location: { urlOrPath: `black/parsing.py` },
        line: 42,
      })
    })

    test(`keeps a frozen-module location intact`, () => {
      expect(
        normalizeFrame({
          name: `<module> (<frozen importlib._bootstrap>:1080)`,
        }),
      ).toEqual({
        name: `<module>`,
        location: { urlOrPath: `<frozen importlib._bootstrap>` },
        line: 1080,
      })
    })

    test(`leaves a thread frame unchanged`, () => {
      expect(normalizeFrame({ name: `tid:7` })).toEqual({ name: `tid:7` })
    })
  })

  describe(`jvm (async-profiler "Class/path.method")`, () => {
    const { normalizeFrame } = jvmOriginSpec

    test(`turns the slashed class into a dotted location`, () => {
      expect(normalizeFrame({ name: `java/util/HashMap.put` })).toEqual({
        name: `put`,
        location: { urlOrPath: `java.util.HashMap` },
      })
    })

    test(`handles a nested class and an <init> method`, () => {
      expect(
        normalizeFrame({ name: `java/lang/System$Logger$Level.valueOf` }),
      ).toEqual({
        name: `valueOf`,
        location: { urlOrPath: `java.lang.System$Logger$Level` },
      })
    })

    test(`leaves a native (no-slash) frame location-less`, () => {
      expect(normalizeFrame({ name: `Parker::park` })).toEqual({
        name: `Parker::park`,
      })
    })
  })
})

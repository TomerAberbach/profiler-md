import { describe, expect, test } from 'vitest'
import type { ProfileEntry } from '../options.ts'
import { categorizeEntryForOrigin, origins } from './index.ts'
import type { Origin } from './index.ts'
import { jvmOriginSpec } from './jvm.ts'
import { pySpyOriginSpec } from './py-spy.ts'
import { systingOriginSpec } from './systing.ts'
import { tachyonOriginSpec } from './tachyon.ts'

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
    expect(categorizeEntryForOrigin(named(`native`), origin)).toBeOneOf([
      `native`,
      `stdlib`,
    ])
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

  test(`internal: bundled runtime modules are stdlib`, () => {
    expect(
      categorizeEntryForOrigin(located(`internal:primordials`), `bun`),
    ).toBe(`stdlib`)
    expect(
      categorizeEntryForOrigin(located(`internal:fs/streams`), `bun`),
    ).toBe(`stdlib`)
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

describe(`tachyon`, () => {
  test(`shares py-spy's CPython categorization`, () => {
    expect(
      categorizeEntryForOrigin(relative(`<frozen runpy>`), `tachyon`),
    ).toBe(`stdlib`)
    expect(
      categorizeEntryForOrigin(
        located(`file:///usr/lib/python3.12/asyncio/base_events.py`),
        `tachyon`,
      ),
    ).toBe(`stdlib`)
    expect(
      categorizeEntryForOrigin(
        located(`file:///app/.venv/lib/python3.12/site-packages/flask/app.py`),
        `tachyon`,
      ),
    ).toBe(`third-party`)
    expect(categorizeEntryForOrigin(relative(`script.py`), `tachyon`)).toBe(
      `ours`,
    )
  })
})

describe(`go`, () => {
  const goEntry = (name: string, path?: string): ProfileEntry => ({
    id: 1,
    name,
    ...(path ? { location: { type: `relative` as const, path } } : {}),
  })

  test(`standard-library packages are stdlib`, () => {
    expect(
      categorizeEntryForOrigin(
        goEntry(
          `runtime.usleep`,
          `../../nix/store/abc-go-1.26.3/share/go/src/runtime/sys_darwin.go`,
        ),
        `go`,
      ),
    ).toBe(`stdlib`)
    expect(
      categorizeEntryForOrigin(
        goEntry(
          `encoding/json.(*decodeState).value`,
          `../../nix/store/abc-go-1.26.3/share/go/src/encoding/json/decode.go`,
        ),
        `go`,
      ),
    ).toBe(`stdlib`)
    // An unlocated runtime internal and a bare linker symbol are runtime
    // assembly.
    expect(categorizeEntryForOrigin(goEntry(`runtime.goexit`), `go`)).toBe(
      `stdlib`,
    )
    expect(
      categorizeEntryForOrigin(goEntry(`gosave_systemstack_switch`), `go`),
    ).toBe(`stdlib`)
  })

  test(`domain-prefixed modules are third-party`, () => {
    expect(
      categorizeEntryForOrigin(
        goEntry(
          `github.com/goccy/go-json.Marshal`,
          `/home/u/go/pkg/mod/github.com/goccy/go-json@v0.10.2/json.go`,
        ),
        `go`,
      ),
    ).toBe(`third-party`)
  })

  test(`the main package and local domain-less packages are ours`, () => {
    expect(
      categorizeEntryForOrigin(
        goEntry(`main.parseWorkload`, `/work/profile.go`),
        `go`,
      ),
    ).toBe(`ours`)
    // A domain-less package located outside GOROOT is the user's module, not
    // a standard-library package.
    expect(
      categorizeEntryForOrigin(
        goEntry(`mypkg.Work`, `/work/mypkg/work.go`),
        `go`,
      ),
    ).toBe(`ours`)
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
    expect(
      categorizeEntryForOrigin(
        relative(`com.sun.crypto.provider.AESCrypt`),
        `jvm`,
      ),
    ).toBe(`stdlib`)
  })

  test(`native shared libraries and bare modules are native`, () => {
    expect(categorizeEntryForOrigin(relative(`libjvm.dylib`), `jvm`)).toBe(
      `native`,
    )
    expect(
      categorizeEntryForOrigin(relative(`libsystem_kernel.dylib`), `jvm`),
    ).toBe(`native`)
    // A version suffix on the shared object is still a native library.
    expect(categorizeEntryForOrigin(relative(`libc.so.6`), `jvm`)).toBe(
      `native`,
    )
    // A wall profile's extension-less native module, distinguished from a
    // default-package class by the missing method signature.
    expect(
      categorizeEntryForOrigin(
        {
          id: 1,
          name: `__CFRunLoopRun`,
          location: { type: `relative`, path: `CoreFoundation` },
        },
        `jvm`,
      ),
    ).toBe(`native`)
    expect(
      categorizeEntryForOrigin(
        {
          id: 1,
          name: `main(String[])`,
          location: { type: `relative`, path: `Main` },
        },
        `jvm`,
      ),
    ).toBe(`ours`)
  })

  test(`Kotlin and Scala language runtimes are stdlib`, () => {
    expect(
      categorizeEntryForOrigin(
        relative(`kotlin.jvm.internal.Intrinsics`),
        `jvm`,
      ),
    ).toBe(`stdlib`)
    expect(
      categorizeEntryForOrigin(
        relative(`kotlinx.collections.immutable.PersistentList`),
        `jvm`,
      ),
    ).toBe(`stdlib`)
    expect(
      categorizeEntryForOrigin(relative(`scala.collection.SeqOps`), `jvm`),
    ).toBe(`stdlib`)
    // A class prefixed by but not inside a runtime package stays ours.
    expect(categorizeEntryForOrigin(relative(`kotlinfoo.Bar`), `jvm`)).toBe(
      `ours`,
    )
  })

  test(`HotSpot code stubs are jit and garbage collector`, () => {
    expect(categorizeEntryForOrigin(named(`vtable stub`), `jvm`)).toBe(`jit`)
    expect(categorizeEntryForOrigin(named(`itable stub`), `jvm`)).toBe(`jit`)
    expect(
      categorizeEntryForOrigin(named(`I2C/C2I adapters(0xba)`), `jvm`),
    ).toBe(`jit`)
    expect(categorizeEntryForOrigin(named(`zero_blocks`), `jvm`)).toBe(`jit`)
    expect(categorizeEntryForOrigin(named(`g1_post_barrier_slow`), `jvm`)).toBe(
      `garbage collector`,
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

describe(`pprof-jl`, () => {
  test(`categorizes by Julia install, depot, and native runtime paths`, () => {
    expect(
      categorizeEntryForOrigin(
        located(`file:///nix/store/x-julia-bin-1.12.6/share/julia/base/int.jl`),
        `pprof-jl`,
      ),
    ).toBe(`stdlib`)
    expect(
      categorizeEntryForOrigin(
        located(`file:///depot/packages/JSON3/abc12/src/write.jl`),
        `pprof-jl`,
      ),
    ).toBe(`third-party`)
    expect(
      categorizeEntryForOrigin(
        located(`file:///build/julia/src/interpreter.c`),
        `pprof-jl`,
      ),
    ).toBe(`native`)
    expect(categorizeEntryForOrigin(relative(`sys.dylib`), `pprof-jl`)).toBe(
      `native`,
    )
    expect(
      categorizeEntryForOrigin(
        located(`file:///work/scripts/profile.jl`),
        `pprof-jl`,
      ),
    ).toBe(`ours`)
  })
})

describe(`safari`, () => {
  test(`bundled accessory scripts are stdlib`, () => {
    // Safari's own scripts (autofill metadata etc.) run in the page as a bare
    // filename; page code always carries a full URL.
    expect(
      categorizeEntryForOrigin(relative(`FormMetadata.js`), `safari`),
    ).toBe(`stdlib`)
    expect(categorizeEntryForOrigin(relative(`assets/app.js`), `safari`)).toBe(
      `ours`,
    )
    expect(
      categorizeEntryForOrigin(located(`https://example.com/app.js`), `safari`),
    ).toBe(`ours`)
  })
})

describe(`systing`, () => {
  test(`bracketed label modules categorize by what they mark`, () => {
    // Normalization keeps systing's `name (module)` rendering for
    // source-less frames, so the label module is the category signal.
    expect(
      categorizeEntryForOrigin(named(`do_syscall_64 ([kernel])`), `systing`),
    ).toBe(`kernel`)
    expect(
      categorizeEntryForOrigin(
        named(`__vdso_clock_gettime ([vdso])`),
        `systing`,
      ),
    ).toBe(`kernel`)
    expect(
      categorizeEntryForOrigin(named(`unknown ([gvisor:runtime])`), `systing`),
    ).toBe(`sandbox`)
    expect(
      categorizeEntryForOrigin(named(`unknown ([gvisor:guest])`), `systing`),
    ).toBe(`sandbox`)
    expect(
      categorizeEntryForOrigin(named(`unknown ([jit:node])`), `systing`),
    ).toBe(`jit`)
  })

  test(`a located kernel frame keeps its label's category`, () => {
    // Kernel debuginfo symbolizes kernel frames with a source location; the
    // label survives normalization in the name and still marks the category.
    expect(
      categorizeEntryForOrigin(
        {
          id: 1,
          name: `handle_mm_fault ([kernel])`,
          location: { type: `relative`, path: `memory.c` },
        },
        `systing`,
      ),
    ).toBe(`kernel`)
  })

  test(`pystack frames follow the shared CPython path rules`, () => {
    expect(
      categorizeEntryForOrigin(
        located(
          `file:///opt/venv/lib/python3.11/site-packages/django/core/handlers/base.py`,
        ),
        `systing`,
      ),
    ).toBe(`third-party`)
    expect(
      categorizeEntryForOrigin(
        located(
          `file:///root/.pyenv/versions/3.11.4/lib/python3.11/json/decoder.py`,
        ),
        `systing`,
      ),
    ).toBe(`stdlib`)
    expect(
      categorizeEntryForOrigin(
        relative(`<frozen importlib._bootstrap>`),
        `systing`,
      ),
    ).toBe(`stdlib`)
  })

  test(`unresolved and library frames without sources are native, not stdlib`, () => {
    // A system profiler samples plenty of app code with no debug info, so a
    // missing source location doesn't imply a runtime internal.
    expect(
      categorizeEntryForOrigin(named(`unknown ([exited])`), `systing`),
    ).toBe(`native`)
    expect(
      categorizeEntryForOrigin(named(`memcpy (libc.so.6)`), `systing`),
    ).toBe(`native`)
    expect(categorizeEntryForOrigin(named(`0x7f95bfdb6e12`), `systing`)).toBe(
      `native`,
    )
  })

  test(`located frames follow the shared source rules`, () => {
    expect(
      categorizeEntryForOrigin(
        located(`file:///usr/include/c++/12/bits/basic_string.tcc`),
        `systing`,
      ),
    ).toBe(`stdlib`)
    expect(categorizeEntryForOrigin(relative(`nested.c`), `systing`)).toBe(
      `ours`,
    )
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

  test(`parenthesized closure names are not synthetic frame labels`, () => {
    // Julia closure frames are fully parenthesized; their fragments must not
    // be promoted to category names.
    expect(
      categorizeEntryForOrigin(
        named(
          `(::JSON3.var"#defaultminimum##2#defaultminimum##3")(::Pair{Symbol, Any})`,
        ),
        `unknown`,
      ),
    ).toBe(`stdlib`)
  })

  test(`recognizes OS system directories as stdlib`, () => {
    expect(
      categorizeEntryForOrigin(
        located(`file:///usr/include/c++/12/bits/basic_string.tcc`),
        `unknown`,
      ),
    ).toBe(`stdlib`)
    expect(
      categorizeEntryForOrigin(
        located(`file:///usr/lib/x86_64-linux-gnu/libc.so.6`),
        `unknown`,
      ),
    ).toBe(`stdlib`)
    // A project directory merely named like a system one stays ours.
    expect(
      categorizeEntryForOrigin(
        located(`file:///home/u/app/usr/include/x.h`),
        `unknown`,
      ),
    ).toBe(`ours`)
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
  describe(`py-spy ("func (file:line)")`, () => {
    const { normalizeFrame } = pySpyOriginSpec

    test(`splits the trailing (file:line) into a location and sampled line`, () => {
      expect(
        normalizeFrame({ name: `parse (black/parsing.py:42)` }, `collapsed`),
      ).toEqual({
        name: `parse`,
        location: { urlOrPath: `black/parsing.py` },
        line: 42,
      })
    })

    test(`keeps a frozen-module location intact`, () => {
      expect(
        normalizeFrame(
          { name: `<module> (<frozen importlib._bootstrap>:1080)` },
          `collapsed`,
        ),
      ).toEqual({
        name: `<module>`,
        location: { urlOrPath: `<frozen importlib._bootstrap>` },
        line: 1080,
      })
    })

    test(`leaves a thread frame unchanged`, () => {
      expect(normalizeFrame({ name: `tid:7` }, `collapsed`)).toEqual({
        name: `tid:7`,
      })
    })

    test(`reinterprets a located speedscope frame's line as the executing line`, () => {
      // Py-spy's speedscope export emits one frame per sampled line; the line
      // must feed the line breakdown rather than the function's identity.
      expect(
        normalizeFrame(
          {
            name: `parse`,
            location: { urlOrPath: `black/parsing.py`, line: 42 },
          },
          `speedscope`,
        ),
      ).toEqual({
        name: `parse`,
        location: { urlOrPath: `black/parsing.py` },
        line: 42,
      })
    })
  })

  describe(`tachyon ("file:func:line")`, () => {
    const { normalizeFrame } = tachyonOriginSpec

    test(`splits a file:func:line frame, keeping the line as the executing line`, () => {
      // The line stays out of the location so a function sampled at several
      // lines aggregates as one, with the lines feeding the per-line breakdown.
      expect(normalizeFrame({ name: `script.py:fib:4` })).toEqual({
        name: `fib`,
        location: { urlOrPath: `script.py` },
        line: 4,
      })
    })

    test(`keeps a Windows drive-letter path whole instead of splitting on the drive colon`, () => {
      expect(normalizeFrame({ name: `C:\\proj\\app.py:run:10` })).toEqual({
        name: `run`,
        location: { urlOrPath: `C:\\proj\\app.py` },
        line: 10,
      })
      expect(normalizeFrame({ name: `D:/proj/app.py:run:10` })).toEqual({
        name: `run`,
        location: { urlOrPath: `D:/proj/app.py` },
        line: 10,
      })
    })

    test(`keeps a C++ namespaced function name intact`, () => {
      expect(normalizeFrame({ name: `file.cpp:Foo::bar:42` })).toEqual({
        name: `Foo::bar`,
        location: { urlOrPath: `file.cpp` },
        line: 42,
      })
    })

    test(`leaves a single-colon thread frame as a plain name`, () => {
      expect(normalizeFrame({ name: `tid:15522692` })).toEqual({
        name: `tid:15522692`,
      })
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

  describe(`systing ("name (module [file:line]) <0xaddr>")`, () => {
    const { normalizeFrame } = systingOriginSpec

    test(`splits a located frame, dropping the module and address`, () => {
      expect(
        normalizeFrame({
          name: `gamma_spin (nested [nested.c:9]) <0x56475007017d>`,
        }),
      ).toEqual({
        name: `gamma_spin`,
        location: { urlOrPath: `nested.c` },
        line: 9,
      })
      expect(
        normalizeFrame({ name: `read_config (app [config.c]) <0x1234>` }),
      ).toEqual({
        name: `read_config`,
        location: { urlOrPath: `config.c` },
        line: undefined,
      })
    })

    test(`keeps a bracketed label module alongside a source location`, () => {
      // The label is the category signal, so it survives even when kernel
      // debuginfo gives the frame a source location.
      expect(
        normalizeFrame({
          name: `handle_mm_fault ([kernel] [memory.c:5432]) <0xffffffff96e00123>`,
        }),
      ).toEqual({
        name: `handle_mm_fault ([kernel])`,
        location: { urlOrPath: `memory.c` },
        line: 5432,
      })
    })

    test(`keeps the module, minus the address, for source-less frames`, () => {
      // The address would fragment one function into an entry per sampled
      // address; the module distinguishes same-named symbols across binaries
      // and carries the label category signal.
      expect(
        normalizeFrame({ name: `memcpy (libc.so.6) <0x7f89613aa28b>` }),
      ).toEqual({ name: `memcpy (libc.so.6)` })
      expect(
        normalizeFrame({
          name: `do_syscall_64 ([kernel]) <0xffffffff9fca7238>`,
        }),
      ).toEqual({ name: `do_syscall_64 ([kernel])` })
    })

    test(`keeps function names containing parentheses intact`, () => {
      expect(
        normalizeFrame({
          name: `std::vector<int>::push_back(int&&) (app [vector.h:123]) <0x1>`,
        }),
      ).toEqual({
        name: `std::vector<int>::push_back(int&&)`,
        location: { urlOrPath: `vector.h` },
        line: 123,
      })
    })

    test(`splits a Python frame's location`, () => {
      expect(
        normalizeFrame({ name: `handle_request (python) [server.py:88]` }),
      ).toEqual({
        name: `handle_request`,
        location: { urlOrPath: `server.py` },
        line: 88,
      })
    })

    test(`leaves unpacked frames untouched`, () => {
      expect(normalizeFrame({ name: `0x7f95bfdb6e12` })).toEqual({
        name: `0x7f95bfdb6e12`,
      })
      expect(
        normalizeFrame({ name: `located`, location: { urlOrPath: `a.c` } }),
      ).toEqual({ name: `located`, location: { urlOrPath: `a.c` } })
    })
  })
})

import { describe, expect, test } from 'vitest'
import type { EntryCategory } from '../../options.ts'
import { absoluteEntry, determineOrigin, relativeEntry } from '../testing.ts'
import { systingOriginSpec } from './systing.ts'

describe(`detection`, () => {
  test(`resolves to systing when no entries match any origin`, () => {
    expect(determineOrigin({ format: `systing`, entries: [] })).toBe(`systing`)
  })

  // Native frames: `name (module [file:line]) <0xaddr>` with the location
  // optional and the module possibly a bracketed label.
  test.each([
    `gamma_spin (nested [nested.c:9]) <0x56475007017d>`,
    `__libc_start_main (libc.so.6) <0x7f89613aa28b>`,
    `do_syscall_64 ([kernel]) <0xffffffff9fca7238>`,
    `unknown ([gvisor:runtime]) <0x7f0000001000>`,
  ])(`the address-suffixed %s frame is a marker`, name => {
    expect(systingOriginSpec.isMarkerEntry(relativeEntry(name))).toBe(true)
  })

  // Signals any profiler could produce, or lookalike packings missing the
  // address suffix, aren't systing evidence.
  test.each([
    `compute`,
    `work (app)`,
    `handle_request (python) [server.py:88]`,
    `0x7f95bfdb6e12`,
    `(garbage collector)`,
  ])(`the address-less %s frame is not a marker`, name => {
    expect(systingOriginSpec.isMarkerEntry(relativeEntry(name))).toBe(false)
  })
})

describe(`normalizeStackFrame`, () => {
  const { normalizeStackFrame } = systingOriginSpec

  test(`splits a located frame, dropping the module and address`, () => {
    expect(
      normalizeStackFrame({
        name: `gamma_spin (nested [nested.c:9]) <0x56475007017d>`,
      }),
    ).toEqual({
      name: `gamma_spin`,
      location: { urlOrPath: `nested.c` },
      line: 9,
    })
  })

  test(`splits a line-less located frame`, () => {
    expect(
      normalizeStackFrame({ name: `read_config (app [config.c]) <0x1234>` }),
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
      normalizeStackFrame({
        name: `handle_mm_fault ([kernel] [memory.c:5432]) <0xffffffff96e00123>`,
      }),
    ).toEqual({
      name: `handle_mm_fault ([kernel])`,
      location: { urlOrPath: `memory.c` },
      line: 5432,
    })
  })

  // The address would fragment one function into an entry per sampled
  // address; the module distinguishes same-named symbols across binaries
  // and carries the label category signal.
  test.each([
    [`memcpy (libc.so.6) <0x7f89613aa28b>`, `memcpy (libc.so.6)`],
    [
      `do_syscall_64 ([kernel]) <0xffffffff9fca7238>`,
      `do_syscall_64 ([kernel])`,
    ],
  ])(
    `keeps the module, minus the address, for the source-less %s frame`,
    (name, expected) => {
      expect(normalizeStackFrame({ name })).toEqual({ name: expected })
    },
  )

  test(`keeps function names containing parentheses intact`, () => {
    expect(
      normalizeStackFrame({
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
      normalizeStackFrame({ name: `handle_request (python) [server.py:88]` }),
    ).toEqual({
      name: `handle_request`,
      location: { urlOrPath: `server.py` },
      line: 88,
    })
  })

  test(`leaves an unpacked frame untouched`, () => {
    expect(normalizeStackFrame({ name: `0x7f95bfdb6e12` })).toEqual({
      name: `0x7f95bfdb6e12`,
    })
  })

  test(`leaves an already-located frame untouched`, () => {
    expect(
      normalizeStackFrame({ name: `located`, location: { urlOrPath: `a.c` } }),
    ).toEqual({ name: `located`, location: { urlOrPath: `a.c` } })
  })
})

describe(`categorizeEntry`, () => {
  const { categorizeEntry } = systingOriginSpec

  // Normalization keeps systing's `name (module)` rendering for source-less
  // frames, so the label module is the category signal.
  test.each<[string, EntryCategory]>([
    [`do_syscall_64 ([kernel])`, `kernel`],
    [`__vdso_clock_gettime ([vdso])`, `kernel`],
    [`unknown ([gvisor:runtime])`, `sandbox`],
    [`unknown ([gvisor:guest])`, `sandbox`],
    [`unknown ([jit:node])`, `jit`],
  ])(`the %s label module marks %s`, (name, expected) => {
    expect(categorizeEntry(relativeEntry(name))).toBe(expected)
  })

  test(`a located kernel frame keeps its label's category`, () => {
    // Kernel debuginfo symbolizes kernel frames with a source location; the
    // label survives normalization in the name and still marks the category.
    expect(
      categorizeEntry(relativeEntry(`handle_mm_fault ([kernel])`, `memory.c`)),
    ).toBe(`kernel`)
  })

  // Pystack frames follow the shared CPython path rules.
  test.each<[string, EntryCategory]>([
    [
      `file:///opt/venv/lib/python3.11/site-packages/django/core/handlers/base.py`,
      `third-party`,
    ],
    [
      `file:///root/.pyenv/versions/3.11.4/lib/python3.11/json/decoder.py`,
      `stdlib`,
    ],
  ])(`the pystack source %s is %s`, (url, expected) => {
    expect(categorizeEntry(absoluteEntry(`f`, url))).toBe(expected)
  })

  test(`a frozen bootstrap pystack module is stdlib`, () => {
    expect(
      categorizeEntry(relativeEntry(`f`, `<frozen importlib._bootstrap>`)),
    ).toBe(`stdlib`)
  })

  // A system profiler samples plenty of app code with no debug info, so a
  // missing source location doesn't imply a runtime internal.
  test.each([`unknown ([exited])`, `memcpy (libc.so.6)`, `0x7f95bfdb6e12`])(
    `the source-less %s frame is native, not stdlib`,
    name => {
      expect(categorizeEntry(relativeEntry(name))).toBe(`native`)
    },
  )

  test(`a Zig toolchain source is stdlib`, () => {
    expect(
      categorizeEntry(
        absoluteEntry(`mem.copyForwards`, `file:///opt/zig/lib/std/mem.zig`),
      ),
    ).toBe(`stdlib`)
  })

  test(`a system-directory source is stdlib`, () => {
    expect(
      categorizeEntry(
        absoluteEntry(`f`, `file:///usr/include/c++/12/bits/basic_string.tcc`),
      ),
    ).toBe(`stdlib`)
  })

  test(`a project source is ours`, () => {
    expect(categorizeEntry(relativeEntry(`f`, `nested.c`))).toBe(`ours`)
  })
})

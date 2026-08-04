import { describe, expect, test } from 'vitest'
import type { Format } from '../../formats/registry.ts'
import type { ProfileEntry } from '../../options.ts'
import { determineOrigin, relativeEntry } from '../testing.ts'
import { rbspyOriginSpec } from './rbspy.ts'

const located = (name: string, path: string): ProfileEntry => ({
  id: 1,
  name,
  location: { type: `relative`, path },
})

const named = (name: string): ProfileEntry => ({ id: 1, name })

describe(`detection`, () => {
  // A ` - file:line` method frame and a `[c function]` native frame.
  test.each([
    `parse - /app/lib/foo.rb:12`,
    `(unknown) [c function] - (unknown)`,
  ])(`detects rbspy by its %s collapsed frame`, name => {
    expect(
      determineOrigin({
        format: `collapsed`,
        entries: [relativeEntry(name)],
      }),
    ).toBe(`rbspy`)
  })

  test.each<[Format, string]>([
    [`pprof`, `(unknown) [c function]`],
    [`speedscope`, `<top (required)>`],
    [`pprof`, `<main>`],
  ])(`detects rbspy in %s by its bare %s marker frame`, (format, name) => {
    expect(determineOrigin({ format, entries: [relativeEntry(name)] })).toBe(
      `rbspy`,
    )
  })
})

describe(`normalizeStackFrame`, () => {
  const { normalizeStackFrame } = rbspyOriginSpec

  test(`splits a method's trailing file:line off the name`, () => {
    expect(
      normalizeStackFrame({ name: `parse - /app/lib/foo.rb:12` }, `collapsed`),
    ).toEqual({
      name: `parse`,
      location: { urlOrPath: `/app/lib/foo.rb` },
      line: 12,
    })
  })

  test(`splits on the last " - " so a <module:Name> method stays intact`, () => {
    // The internal colon of `<module:AST>` must not be mistaken for the
    // file/line separator, which previously corrupted the name and path.
    expect(
      normalizeStackFrame(
        {
          name: `<module:AST> - /var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser.rb:28`,
        },
        `collapsed`,
      ),
    ).toEqual({
      name: `<module:AST>`,
      location: {
        urlOrPath: `/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser.rb`,
      },
      line: 28,
    })
  })

  test(`a native frame keeps its name and stays location-less`, () => {
    expect(
      normalizeStackFrame(
        { name: `(unknown) [c function] - (unknown)` },
        `collapsed`,
      ),
    ).toEqual({ name: `(unknown) [c function]` })
  })

  test(`leaves a frame without a separator unchanged`, () => {
    expect(normalizeStackFrame({ name: `<main>` }, `collapsed`)).toEqual({
      name: `<main>`,
    })
  })

  test(`reinterprets a located speedscope frame's line as the executing line`, () => {
    // Rbspy's speedscope export emits one frame per sampled line; the line
    // must feed the line breakdown rather than the function's identity.
    expect(
      normalizeStackFrame(
        { name: `parse`, location: { urlOrPath: `/app/lib/foo.rb`, line: 12 } },
        `speedscope`,
      ),
    ).toEqual({
      name: `parse`,
      location: { urlOrPath: `/app/lib/foo.rb` },
      line: 12,
    })
  })

  test(`leaves a located pprof frame's definition line in place`, () => {
    // Pprof's `Function.start_line` is a genuine definition line.
    const input = {
      name: `parse`,
      location: { urlOrPath: `/app/lib/foo.rb`, line: 12 },
    }
    expect(normalizeStackFrame(input, `pprof`)).toBe(input)
  })

  test(`leaves a located speedscope frame without a line unchanged`, () => {
    const input = { name: `parse - x`, location: { urlOrPath: `x.rb` } }
    expect(normalizeStackFrame(input, `speedscope`)).toBe(input)
  })
})

describe(`categorizeEntry`, () => {
  const { categorizeEntry } = rbspyOriginSpec

  test(`installed gems are third-party`, () => {
    expect(
      categorizeEntry(
        located(
          `parse`,
          `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli.rb`,
        ),
      ),
    ).toBe(`third-party`)
  })

  test.each([
    [`accept`, `/usr/lib/ruby/3.1.0/psych/visitors/visitor.rb`],
    [`activate`, `/usr/lib/ruby/vendor_ruby/rubygems.rb`],
  ])(`the standard-library %s method at %s is stdlib`, (name, path) => {
    expect(categorizeEntry(located(name, path))).toBe(`stdlib`)
  })

  test(`native [c function] frames are stdlib`, () => {
    expect(categorizeEntry(named(`(unknown) [c function]`))).toBe(`stdlib`)
  })

  test(`application code is ours`, () => {
    expect(categorizeEntry(located(`<main>`, `/usr/local/bin/rubocop`))).toBe(
      `ours`,
    )
  })
})

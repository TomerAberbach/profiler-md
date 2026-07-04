import { describe, expect, test } from 'vitest'
import type { ProfileEntry } from '../options.ts'
import { rbspyOriginSpec } from './rbspy.ts'

const { normalizeFrame } = rbspyOriginSpec

const located = (name: string, path: string): ProfileEntry => ({
  id: 1,
  name,
  location: { type: `relative`, path },
})

const named = (name: string): ProfileEntry => ({ id: 1, name })

describe(`normalizeFrame`, () => {
  test(`splits a method's trailing file:line off the name`, () => {
    expect(
      normalizeFrame({ name: `parse - /app/lib/foo.rb:12` }, `collapsed`),
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
      normalizeFrame(
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
      normalizeFrame(
        { name: `(unknown) [c function] - (unknown)` },
        `collapsed`,
      ),
    ).toEqual({ name: `(unknown) [c function]` })
  })

  test(`leaves a frame without a separator unchanged`, () => {
    expect(normalizeFrame({ name: `<main>` }, `collapsed`)).toEqual({
      name: `<main>`,
    })
  })

  test(`reinterprets a located speedscope frame's line as the executing line`, () => {
    // Rbspy's speedscope export emits one frame per sampled line; the line
    // must feed the line breakdown rather than the function's identity.
    expect(
      normalizeFrame(
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
    expect(normalizeFrame(input, `pprof`)).toBe(input)
  })

  test(`leaves a located speedscope frame without a line unchanged`, () => {
    const input = { name: `parse - x`, location: { urlOrPath: `x.rb` } }
    expect(normalizeFrame(input, `speedscope`)).toBe(input)
  })
})

describe(`categorize`, () => {
  const { categorize } = rbspyOriginSpec

  test(`installed gems are third-party`, () => {
    expect(
      categorize(
        located(
          `parse`,
          `/var/lib/gems/3.1.0/gems/rubocop-1.65.1/lib/rubocop/cli.rb`,
        ),
      ),
    ).toBe(`third-party`)
  })

  test(`the Ruby standard library is stdlib`, () => {
    expect(
      categorize(
        located(`accept`, `/usr/lib/ruby/3.1.0/psych/visitors/visitor.rb`),
      ),
    ).toBe(`stdlib`)
    expect(
      categorize(located(`activate`, `/usr/lib/ruby/vendor_ruby/rubygems.rb`)),
    ).toBe(`stdlib`)
  })

  test(`native [c function] frames are stdlib`, () => {
    expect(categorize(named(`(unknown) [c function]`))).toBe(`stdlib`)
  })

  test(`application code is ours`, () => {
    expect(categorize(located(`<main>`, `/usr/local/bin/rubocop`))).toBe(`ours`)
  })
})

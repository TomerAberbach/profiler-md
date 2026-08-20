import { describe, expect, test } from 'vitest'
import type { Format } from '../../formats/registry.ts'
import type { StackFrame } from '../../modalities/stack-frame.ts'
import type { ProfileEntry } from '../../options.ts'
import { matchEntryForOrigin } from '../index.ts'
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
    [`callgrind`, `(unknown) [c function]`],
  ])(`detects rbspy in %s by its bare %s marker frame`, (format, name) => {
    expect(determineOrigin({ format, entries: [relativeEntry(name)] })).toBe(
      `rbspy`,
    )
  })

  test(`detected in a markerless callgrind export via the creator hint`, () => {
    // A pure-Ruby capture has no `[c function]` frame, so the callgrind
    // parser's `creator: rbspy` origin hint is the evidence.
    expect(
      determineOrigin({
        format: `callgrind`,
        entries: [relativeEntry(`realtime`)],
        hint: `rbspy`,
      }),
    ).toBe(`rbspy`)
  })
})

describe(`normalizeStackFrame`, () => {
  const { normalizeStackFrame } = rbspyOriginSpec

  test(`splits a method's trailing file:line off the name`, () => {
    expect(
      normalizeStackFrame({ name: `parse - /app/lib/foo.rb:12` }, `collapsed`),
    ).toEqual({
      name: `parse`,
      location: { type: `file`, urlOrPath: `/app/lib/foo.rb` },
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
        type: `file`,
        urlOrPath: `/var/lib/gems/3.1.0/gems/parser-3.3.11.1/lib/parser.rb`,
      },
      line: 28,
    })
  })

  test(`drops the placeholder path of an unresolved C function`, () => {
    expect(
      normalizeStackFrame(
        { name: `(unknown) [c function] - (unknown)` },
        `collapsed`,
      ),
    ).toEqual({ name: `(unknown) [c function]` })
  })

  test(`drops the placeholder absolute path but keeps the executing line`, () => {
    expect(
      normalizeStackFrame(
        { name: `<internal:gem_prelude> - unknown:16` },
        `collapsed`,
      ),
    ).toEqual({ name: `<internal:gem_prelude>`, line: 16 })
  })

  test(`drops a placeholder path a located format reports separately`, () => {
    expect(
      normalizeStackFrame(
        {
          name: `(unknown) [c function]`,
          location: { type: `file`, urlOrPath: `(unknown)` },
        },
        `pprof`,
      ),
    ).toEqual({ name: `(unknown) [c function]` })
  })

  test(`drops a placeholder speedscope path`, () => {
    expect(
      normalizeStackFrame(
        {
          name: `(unknown) [c function]`,
          location: { type: `file`, urlOrPath: `(unknown)` },
        },
        `speedscope`,
      ),
    ).toEqual({ name: `(unknown) [c function]` })
  })

  test(`keeps an internal Ruby source path`, () => {
    const input: StackFrame = {
      name: `<internal:gem_prelude>`,
      location: { type: `file`, urlOrPath: `<internal:gem_prelude>` },
    }
    expect(normalizeStackFrame(input, `pprof`)).toBe(input)
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
        {
          name: `parse`,
          location: { type: `file`, urlOrPath: `/app/lib/foo.rb`, line: 12 },
        },
        `speedscope`,
      ),
    ).toEqual({
      name: `parse`,
      location: { type: `file`, urlOrPath: `/app/lib/foo.rb` },
      line: 12,
    })
  })

  test(`leaves a located pprof frame's definition line in place`, () => {
    // Pprof's `Function.start_line` is a genuine definition line.
    const input: StackFrame = {
      name: `parse`,
      location: { type: `file`, urlOrPath: `/app/lib/foo.rb`, line: 12 },
    }
    expect(normalizeStackFrame(input, `pprof`)).toBe(input)
  })

  test(`leaves a located speedscope frame without a line unchanged`, () => {
    const input: StackFrame = {
      name: `parse - x`,
      location: { type: `file`, urlOrPath: `x.rb` },
    }
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
    [`tap`, `<internal:kernel>`],
  ])(`the standard-library %s method at %s is stdlib`, (name, path) => {
    expect(categorizeEntry(located(name, path))).toBe(`stdlib`)
  })

  test(`native [c function] frames are native`, () => {
    expect(categorizeEntry(named(`(unknown) [c function]`))).toBe(`native`)
  })

  test(`application code is ours`, () => {
    expect(categorizeEntry(located(`<main>`, `/usr/local/bin/rubocop`))).toBe(
      `ours`,
    )
  })
})

describe(`matchEntry`, () => {
  test.each([
    [`an anonymous class`, `#<Class:0xffff758f5f00>#call`, `#<Class>#call`],
    [`an anonymous module`, `#<Module:0xffff758f67c0>#call`, `#<Module>#call`],
    [
      `a singleton method's receiver`,
      `#<Object:0xffff777ffd38>.call`,
      `#<Object>.call`,
    ],
  ])(`strips the heap address of %s`, (_description, name, expected) => {
    expect(
      matchEntryForOrigin(located(name, `/app/lib/foo.rb`), `rbspy`),
    ).toEqual({ name: expected })
  })

  test.each([
    [
      `a positive hash`,
      `#<Class:0xffff7d4c56f8>#_app_views_statuses_index_html_erb__1413656015224407105_3112`,
      `#<Class>#_app_views_statuses_index_html_erb`,
    ],
    [
      `a negative hash`,
      `#<Class:0xffff7d4c56f8>#_app_views_layouts_application_html_erb___77754931906950248_3144`,
      `#<Class>#_app_views_layouts_application_html_erb`,
    ],
    [
      `an owner-less label`,
      `_app_views_statuses_index_html_erb__1413656015224407105_3112`,
      `_app_views_statuses_index_html_erb`,
    ],
    [
      `a block`,
      `block in _app_views_statuses_index_html_erb___2193380913002583348_3112`,
      `block in _app_views_statuses_index_html_erb`,
    ],
  ])(
    `strips the hash and object id of a compiled template with %s`,
    (_description, name, expected) => {
      expect(matchEntryForOrigin(named(name), `rbspy`)).toEqual({
        name: expected,
      })
    },
  )

  test.each([
    [`a constant-named owner`, `Gem::Specification.each_spec`],
    [`a method name ending in digits`, `Digest::SHA2#update_1_2`],
  ])(`%s matches by its own name`, (_description, name) => {
    expect(
      matchEntryForOrigin(located(name, `/app/lib/foo.rb`), `rbspy`),
    ).toBeUndefined()
  })
})

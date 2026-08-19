import { describe, expect, test } from 'vitest'
import { determineOrigin, logicalEntry, relativeEntry } from '../testing.ts'
import { excimerOriginSpec } from './excimer.ts'

describe(`detection`, () => {
  test.each([`collapsed`, `speedscope`] as const)(
    `detects excimer by its closure frame in %s`,
    format => {
      expect(
        determineOrigin({
          format,
          entries: [relativeEntry(`{closure:/var/www/includes/Hooks.php(42)}`)],
        }),
      ).toBe(`excimer`)
    },
  )

  test(`detects excimer by the exporter origin hint`, () => {
    expect(
      determineOrigin({
        format: `speedscope`,
        hint: `excimer`,
        entries: [relativeEntry(`run`, `/var/www/index.php`)],
      }),
    ).toBe(`excimer`)
  })

  test(`an unmarked speedscope input falls back past excimer`, () => {
    expect(
      determineOrigin({
        format: `speedscope`,
        entries: [relativeEntry(`run`, `/var/www/index.php`)],
      }),
    ).toBe(`unknown`)
  })

  // PHP 8.4 names a closure `{closure:/var/www/includes/Hooks.php:42}`, a name
  // another PHP profiler can report without Excimer writing it.
  test(`PHP's own closure name is not an excimer marker`, () => {
    expect(
      determineOrigin({
        format: `collapsed`,
        entries: [relativeEntry(`{closure:/var/www/includes/Hooks.php:42}`)],
      }),
    ).toBe(`unknown`)
  })
})

describe(`normalizeStackFrame`, () => {
  const { normalizeStackFrame } = excimerOriginSpec

  test(`a closure becomes its file and definition line`, () => {
    expect(
      normalizeStackFrame({
        name: `{closure:/var/www/includes/Hooks.php(42)}`,
      }),
    ).toEqual({
      location: {
        type: `file`,
        urlOrPath: `/var/www/includes/Hooks.php`,
        line: 42,
      },
    })
  })

  // Speedscope contains the closure's file but no line, and the packed name
  // repeats the file, so the packed form is read there too.
  test(`a located closure becomes its file and definition line`, () => {
    expect(
      normalizeStackFrame({
        name: `{closure:/var/www/includes/Hooks.php(42)}`,
        location: { type: `file`, urlOrPath: `/var/www/includes/Hooks.php` },
      }),
    ).toEqual({
      location: {
        type: `file`,
        urlOrPath: `/var/www/includes/Hooks.php`,
        line: 42,
      },
    })
  })

  test(`a file-scope frame becomes its file`, () => {
    expect(normalizeStackFrame({ name: `/var/www/index.php` })).toEqual({
      location: { type: `file`, urlOrPath: `/var/www/index.php` },
    })
  })

  test(`a method's declaring class becomes its location`, () => {
    expect(normalizeStackFrame({ name: `MediaWiki\\Setup::run` })).toEqual({
      name: `run`,
      location: { type: `logical`, name: `MediaWiki\\Setup` },
    })
  })

  test(`a global function keeps its name and stays location-less`, () => {
    expect(normalizeStackFrame({ name: `wfArrayToCgi` })).toEqual({
      name: `wfArrayToCgi`,
    })
  })

  // A speedscope frame reports the file separately, so the class stays in the
  // name.
  test(`a located method keeps its declaring class in its name`, () => {
    const frame = {
      name: `MediaWiki\\Setup::run`,
      location: { type: `file`, urlOrPath: `/var/www/includes/Setup.php` },
    } as const
    expect(normalizeStackFrame(frame)).toEqual(frame)
  })
})

describe(`categorizeEntry`, () => {
  const { categorizeEntry } = excimerOriginSpec

  test(`an application source file is ours`, () => {
    expect(categorizeEntry(relativeEntry(`run`, `/var/www/index.php`))).toBe(
      `ours`,
    )
  })

  test(`a Composer dependency is third-party`, () => {
    expect(
      categorizeEntry(
        relativeEntry(
          `request`,
          `/var/www/vendor/guzzlehttp/guzzle/src/Client.php`,
        ),
      ),
    ).toBe(`third-party`)
  })

  // Excimer records user PHP code alone, so a collapsed frame named by its
  // declaring class rather than a file is still the program's own code.
  test(`a class-located frame is ours`, () => {
    expect(categorizeEntry(logicalEntry(`run`, `MediaWiki\\Setup`))).toBe(
      `ours`,
    )
  })

  // Excimer records no compiled code, so a global function whose file the
  // collapsed format left out is unknown rather than native.
  test(`a location-less frame is unknown`, () => {
    expect(categorizeEntry(relativeEntry(`wfArrayToCgi`))).toBe(`unknown`)
  })
})

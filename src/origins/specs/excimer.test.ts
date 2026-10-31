import { describe, expect, test } from 'vitest'
import { collapsedFormatSpec } from '../../formats/collapsed/index.ts'
import { makeCollapsed } from '../../formats/collapsed/testing.ts'
import { convertBytesToMd } from '../../formats/testing.ts'
import { diffProfiles } from '../../index.ts'
import {
  callStackTables,
  callTreeLines,
  selfSamplesTables,
} from '../../modalities/call-stack-profile/testing.ts'
import { normalizeProfileToMdOptions } from '../../options.ts'
import {
  openingParagraphs,
  paragraphsUnderTitle,
  summaryLines,
} from '../../testing.ts'
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

  test.each([`collapsed`, `speedscope`] as const)(
    `detects excimer by its file-scope frame in %s`,
    format => {
      expect(
        determineOrigin({
          format,
          entries: [relativeEntry(`/var/www/index.php`)],
        }),
      ).toBe(`excimer`)
    },
  )

  test(`detects excimer by its truncation frame`, () => {
    expect(
      determineOrigin({
        format: `collapsed`,
        entries: [relativeEntry(`excimer_truncated`)],
      }),
    ).toBe(`excimer`)
  })

  test(`a file-scope path without the .php extension is not an excimer marker`, () => {
    expect(
      determineOrigin({
        format: `collapsed`,
        entries: [relativeEntry(`/var/www/artisan`)],
      }),
    ).toBe(`unknown`)
  })

  test(`detects excimer by the exporter origin hint`, () => {
    expect(
      determineOrigin({
        format: `speedscope`,
        hint: `Excimer`,
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
    ).toStrictEqual({
      definition: {
        type: `file`,
        urlOrPath: `/var/www/includes/Hooks.php`,
        position: { line: 42 },
      },
    })
  })

  // Speedscope contains the closure's file but no line, and the packed name
  // repeats the file, so the packed form is read there too.
  test(`a located closure becomes its file and definition line`, () => {
    expect(
      normalizeStackFrame({
        name: `{closure:/var/www/includes/Hooks.php(42)}`,
        definition: { type: `file`, urlOrPath: `/var/www/includes/Hooks.php` },
      }),
    ).toStrictEqual({
      definition: {
        type: `file`,
        urlOrPath: `/var/www/includes/Hooks.php`,
        position: { line: 42 },
      },
    })
  })

  test(`a file-scope frame becomes its file`, () => {
    expect(normalizeStackFrame({ name: `/var/www/index.php` })).toStrictEqual({
      definition: { type: `file`, urlOrPath: `/var/www/index.php` },
    })
  })

  test(`a method's declaring class becomes its location`, () => {
    expect(
      normalizeStackFrame({ name: String.raw`MediaWiki\Setup::run` }),
    ).toStrictEqual({
      name: `run`,
      definition: { type: `logical`, name: String.raw`MediaWiki\Setup` },
    })
  })

  test(`a namespaced function's namespace becomes its location`, () => {
    expect(
      normalizeStackFrame({ name: String.raw`App\Report\pad_rows` }),
    ).toStrictEqual({
      name: `pad_rows`,
      definition: { type: `logical`, name: String.raw`App\Report` },
    })
  })

  test(`a global function keeps its name and stays location-less`, () => {
    expect(normalizeStackFrame({ name: `wfArrayToCgi` })).toStrictEqual({
      name: `wfArrayToCgi`,
    })
  })

  // A speedscope frame reports the file separately, so the class stays in the
  // name.
  test(`a located method keeps its declaring class in its name`, () => {
    const frame = {
      name: String.raw`MediaWiki\Setup::run`,
      definition: { type: `file`, urlOrPath: `/var/www/includes/Setup.php` },
    } as const
    expect(normalizeStackFrame(frame)).toStrictEqual(frame)
  })
})

describe(`truncation`, () => {
  const convertLines = (lines: string[]): string =>
    convertBytesToMd(
      collapsedFormatSpec,
      makeCollapsed(lines),
      normalizeProfileToMdOptions({ baseURL: `/var/www` }),
    )

  test(`draws the stacks Excimer truncated under a line of their own`, () => {
    const md = convertLines([
      String.raw`/var/www/index.php;App\Report::render;pad_rows 3`,
      String.raw`excimer_truncated;App\Report::render;pad_rows 1`,
    ])

    expect(callTreeLines(md)).toStrictEqual([
      [
        `├── 3 samples (75.0%) (anonymous) at ./index.php`,
        String.raw`│   └── 3 samples (75.0%) render at App\Report`,
        `│       └── 3 samples (75.0%, self 100.0% globally) pad_rows`,
        `└── 1 sample (25.0%) truncated`,
        String.raw`    └── 1 sample (25.0%) render at App\Report`,
        `        └── 1 sample (25.0%) pad_rows`,
      ],
    ])
  })

  test(`states the share of the stacks Excimer truncated and marks them`, () => {
    const md = convertLines([
      String.raw`/var/www/index.php;App\Report::render;pad_rows 3`,
      String.raw`excimer_truncated;App\Report::render;pad_rows 1`,
    ])

    expect(paragraphsUnderTitle(md)).toStrictEqual([
      `Collected 4 samples.`,
      `Paths starting with \`./\` or \`../\` are relative to \`/var/www/\`.`,
      `Call stacks missing their outermost callers account for 25.0% of the samples collected.`,
      `\`truncated\` stands for missing outermost callers.`,
    ])
    expect(openingParagraphs(md, `Hottest call stacks`)).toStrictEqual([
      `Call stacks with the most samples collected in their leaf frame.`,
    ])
    expect(callStackTables(md)).toStrictEqual([
      [
        {
          '%': `75.0%`,
          Samples: `3`,
          'Call stack': String.raw`pad_rows ← render (App\Report) ← (anonymous) (./index.php)`,
        },
        {
          '%': `25.0%`,
          Samples: `1`,
          'Call stack': String.raw`pad_rows ← render (App\Report) ← truncated`,
        },
      ],
    ])
  })
  test(`keeps a truncated call stack's callers out of the common call stack`, () => {
    const md = convertLines([
      String.raw`/var/www/index.php;App\Report::render;pad_rows 3`,
      String.raw`/var/www/index.php;App\Report::render;format_cell 2`,
      String.raw`excimer_truncated;App\Report::render;pad_rows 1`,
    ])

    expect(md).toContain(
      `Common call stack: \`render\` (\`App\\Report\`) ← \`(anonymous)\` (\`./index.php\`)`,
    )
    expect(callStackTables(md)).toStrictEqual([
      [
        { '%': `50.0%`, Samples: `3`, 'Call stack': `pad_rows` },
        { '%': `33.3%`, Samples: `2`, 'Call stack': `format_cell` },
        {
          '%': `16.7%`,
          Samples: `1`,
          'Call stack': String.raw`pad_rows ← render (App\Report) ← truncated`,
        },
      ],
    ])
  })

  test(`finds no common call stack among truncated call stacks`, () => {
    const md = convertLines([
      String.raw`excimer_truncated;App\Report::render;pad_rows 3`,
      String.raw`excimer_truncated;App\Report::render;format_cell 1`,
    ])

    expect(md).not.toContain(`Common call stack`)
    expect(callStackTables(md)).toStrictEqual([
      [
        {
          '%': `75.0%`,
          Samples: `3`,
          'Call stack': String.raw`pad_rows ← render (App\Report) ← truncated`,
        },
        {
          '%': `25.0%`,
          Samples: `1`,
          'Call stack': String.raw`format_cell ← render (App\Report) ← truncated`,
        },
      ],
    ])
  })

  test(`shows a truncated call stack of one frame`, () => {
    const md = convertLines([`excimer_truncated;pad_rows 1`])

    expect(callStackTables(md)).toStrictEqual([
      [
        {
          '%': `100.0%`,
          Samples: `1`,
          'Call stack': `pad_rows ← truncated`,
        },
      ],
    ])
  })

  test(`keeps a marker with no frame below it as a frame`, () => {
    const md = convertLines([`excimer_truncated 2`, `/var/www/index.php;run 1`])

    expect(summaryLines(md)).toStrictEqual([`Collected 3 samples.`])
    expect(selfSamplesTables(md)).toStrictEqual([
      [
        {
          '%': `66.7%`,
          Samples: `2`,
          Function: `excimer_truncated`,
          Location: `<unknown>`,
        },
        { '%': `33.3%`, Samples: `1`, Function: `run`, Location: `<unknown>` },
      ],
    ])
  })

  test(`states both sides' shares in a diff where either side truncated`, () => {
    const md = diffProfiles(
      {
        data: makeCollapsed([
          String.raw`/var/www/index.php;App\Report::render;pad_rows 4`,
        ]),
        format: `collapsed`,
        origin: `excimer`,
      },
      {
        data: makeCollapsed([
          String.raw`/var/www/index.php;App\Report::render;pad_rows 3`,
          String.raw`excimer_truncated;App\Report::render;pad_rows 1`,
        ]),
        format: `collapsed`,
        origin: `excimer`,
      },
      { baseURL: `/var/www` },
    )

    expect(paragraphsUnderTitle(md)).toStrictEqual([
      `Collected 4 samples.`,
      `Paths starting with \`./\` or \`../\` are relative to \`/var/www/\`.`,
      `Call stacks missing their outermost callers account for 0.0% → 25.0% of the samples collected.`,
      `\`truncated\` stands for missing outermost callers.`,
    ])
  })

  test(`states no share in a diff where neither side truncated`, () => {
    const data = makeCollapsed([
      String.raw`/var/www/index.php;App\Report::render;pad_rows 4`,
    ])

    const md = diffProfiles(
      { data, format: `collapsed`, origin: `excimer` },
      { data, format: `collapsed`, origin: `excimer` },
      { baseURL: `/var/www` },
    )

    expect(paragraphsUnderTitle(md)).toStrictEqual([
      `Collected 4 samples.`,
      `Paths starting with \`./\` or \`../\` are relative to \`/var/www/\`.`,
    ])
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

  // Excimer records user PHP code alone, so a collapsed frame located by its
  // declaring class or namespace rather than a file is still the program's own
  // code.
  test(`a class-located frame is ours`, () => {
    expect(
      categorizeEntry(logicalEntry(`run`, String.raw`MediaWiki\Setup`)),
    ).toBe(`ours`)
  })

  // Excimer records no compiled code, so a global function whose file the
  // collapsed format left out is unknown rather than native.
  test(`a location-less frame is unknown`, () => {
    expect(categorizeEntry(relativeEntry(`wfArrayToCgi`))).toBe(`unknown`)
  })
})

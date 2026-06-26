import { describe, expect, test } from 'vitest'
import { normalizeProfileToMdOptions } from '../../options.ts'
import { chunk, streamOf } from '../../testing/bytes.ts'
import {
  calleesTables,
  categoryTables,
  linesTables,
  profileTitles,
  selfSamplesTables,
  summaryLines,
  totalSamplesTables,
} from '../../testing/markdown.ts'
import { convertToMd, convertToMdAsync } from '../testing/convert.ts'
import { collapsedConverter } from './index.ts'
import { parseCollapsed } from './parse.ts'
import { makeCollapsed } from './testing.ts'

const matches = (bytes: Uint8Array): boolean =>
  collapsedConverter.matches(collapsedConverter.parse(bytes))

describe(`matches`, () => {
  test(`accepts a valid collapsed buffer`, () => {
    expect(matches(makeCollapsed([`main;work 1`]))).toBe(true)
  })

  test(`parse rejects non-UTF-8 bytes`, () => {
    expect(() => parseCollapsed(new Uint8Array([0xff, 0xfe, 0x00]))).toThrow()
  })

  test(`parse rejects lines lacking a trailing count`, () => {
    expect(() => parseCollapsed(makeCollapsed([`name,count`, `a,1`]))).toThrow()
  })

  test(`parse rejects a line whose space-separated count is non-numeric`, () => {
    expect(() => parseCollapsed(makeCollapsed([`main work`]))).toThrow()
  })

  test(`rejects collapsed-shaped text containing a NUL byte`, () => {
    // Valid UTF-8, so it parses leniently (a user could force it), but a NUL
    // betrays binary input, so detection rejects it.
    const bytes = makeCollapsed([`main;wo\u0000rk 1`])

    expect(() => parseCollapsed(bytes)).not.toThrow()
    expect(matches(bytes)).toBe(false)
  })

  test(`rejects empty input rather than claiming it as an empty profile`, () => {
    expect(matches(new Uint8Array(0))).toBe(false)
  })

  test(`rejects comment-only and blank input`, () => {
    expect(matches(makeCollapsed([`# a comment`, ``]))).toBe(false)
  })
})

describe(`parse`, () => {
  test(`strips extra separator whitespace before the count`, () => {
    // A count padded with multiple spaces must not leave a trailing space on
    // the leaf frame, which would split it into a distinct function.
    expect(parseCollapsed(makeCollapsed([`a;b  42`])).stacks).toEqual([
      { frames: [`a`, `b`], count: 42 },
    ])
  })

  test(`accepts a stackless sample with an empty stack before the count`, () => {
    // A line that is only a count (with the empty stack preceding the space)
    // is a stackless sample rather than a line missing its count. It carries no
    // frames so the aggregator attributes it to an anonymous function.
    expect(parseCollapsed(makeCollapsed([` 42`])).stacks).toEqual([
      { frames: [], count: 42 },
    ])
  })
})

describe(`convert`, () => {
  test(`plain folded "file:func:line" stacks: reversal and locations`, () => {
    // A plain folded stack carries no profiler fingerprint, so it resolves to
    // the `unknown` origin, whose `normalizeFrame` parses the `file:func:line`
    // tachyon shape. The duplicate `work` stack sums to 10.
    const md = convertToMd(
      collapsedConverter,
      makeCollapsed([
        `app.py:main:10;app.py:work:20 6`,
        `app.py:main:10;app.py:work:20 4`,
        `app.py:main:10 5`,
      ]),
      normalizeProfileToMdOptions({ baseURL: `/`, showEntry: () => true }),
    )

    // Collapsed stacks have no metric, so the profile is ranked by sample count
    // alone with no redundant value column.
    expect(profileTitles(md)).toEqual([`Sampling profile`])
    expect(summaryLines(md)).toEqual([`Collected 15 samples.`])

    // `work` is the hottest self (leaf of the reversed stack) with the summed
    // count; the `file:func:line` definition line stays in the location.
    expect(selfSamplesTables(md)).toEqual([
      [
        {
          '%': `66.7%`,
          Samples: `10`,
          Function: `work`,
          Location: `app.py:20`,
        },
        {
          '%': `33.3%`,
          Samples: `5`,
          Function: `main`,
          Location: `app.py:10`,
        },
      ],
    ])

    expect(totalSamplesTables(md)).toEqual([
      [
        {
          '%': `100.0%`,
          Samples: `15`,
          Function: `main`,
          Location: `app.py:10`,
        },
        {
          '%': `66.7%`,
          Samples: `10`,
          Function: `work`,
          Location: `app.py:20`,
        },
      ],
    ])

    // The callee count sums occurrences across both `work` stacks (6 + 4),
    // verifying the summed sample count propagates through callee metrics.
    expect(calleesTables(md, `main`)).toEqual([
      [{ '%': `66.7%`, Samples: `10`, Callee: `work`, Location: `app.py:20` }],
    ])
  })

  test(`py-spy "func (file:line)" stacks: location split and per-line breakdown`, () => {
    // Py-spy carries the sampled line separately from the function's file, so
    // `work` sampled at lines 20 and 22 stays one function (file `app.py`) with
    // a two-line breakdown rather than two functions.
    const md = convertToMd(
      collapsedConverter,
      makeCollapsed([
        `main (app.py:10);work (app.py:20) 6`,
        `main (app.py:10);work (app.py:22) 4`,
        `main (app.py:10) 5`,
      ]),
      normalizeProfileToMdOptions({ baseURL: `/`, showEntry: () => true }),
    )

    expect(summaryLines(md)).toEqual([`Collected 15 samples.`])
    expect(categoryTables(md)).toEqual([
      [{ Category: `ours`, '%': `100.0%`, Samples: `15` }],
    ])
    expect(selfSamplesTables(md)).toEqual([
      [
        { '%': `66.7%`, Samples: `10`, Function: `work`, Location: `app.py` },
        { '%': `33.3%`, Samples: `5`, Function: `main`, Location: `app.py` },
      ],
    ])
    expect(linesTables(md, `work`)).toEqual([
      [
        { '%': `60.0%`, Samples: `6`, Location: `app.py:20` },
        { '%': `40.0%`, Samples: `4`, Location: `app.py:22` },
      ],
    ])
  })

  test(`rbspy "method - file:line" stacks: gems and stdlib categorization`, () => {
    // Rbspy splits the method off the trailing `file:line`; gems are
    // third-party and the interpreter's own library is stdlib.
    const md = convertToMd(
      collapsedConverter,
      makeCollapsed([
        `<main> - /usr/local/bin/app:3;run - /var/lib/gems/3.1.0/gems/rack-3.0.0/lib/rack.rb:40 6`,
        `<main> - /usr/local/bin/app:3;parse - /usr/lib/ruby/3.1.0/json.rb:12 4`,
      ]),
      normalizeProfileToMdOptions({ baseURL: `/`, showEntry: () => true }),
    )

    expect(summaryLines(md)).toEqual([`Collected 10 samples.`])
    expect(categoryTables(md)).toEqual([
      [
        { Category: `third-party`, '%': `60.0%`, Samples: `6` },
        { Category: `stdlib`, '%': `40.0%`, Samples: `4` },
      ],
    ])
    expect(selfSamplesTables(md)).toEqual([
      [
        {
          '%': `60.0%`,
          Samples: `6`,
          Function: `run`,
          Location: `var/lib/gems/3.1.0/gems/rack-3.0.0/lib/rack.rb`,
        },
        {
          '%': `40.0%`,
          Samples: `4`,
          Function: `parse`,
          Location: `usr/lib/ruby/3.1.0/json.rb`,
        },
      ],
    ])
  })

  test(`BEAM "module:function/arity" stacks: module as location`, () => {
    // Eflambe's frames carry no file; the module stands in for the location.
    // OTP and Elixir-core modules are stdlib while a hex dependency is ours.
    const md = convertToMd(
      collapsedConverter,
      makeCollapsed([
        `<0.94.0>;eflambe:apply/2;Elixir.Profile:run/1;Elixir.Enum:reduce/3 6`,
        `<0.94.0>;eflambe:apply/2;Elixir.Profile:run/1;Elixir.Jason:encode!/1 4`,
      ]),
      normalizeProfileToMdOptions({ baseURL: `/`, showEntry: () => true }),
    )

    expect(summaryLines(md)).toEqual([`Collected 10 samples.`])
    expect(categoryTables(md)).toEqual([
      [
        { Category: `stdlib`, '%': `60.0%`, Samples: `6` },
        { Category: `ours`, '%': `40.0%`, Samples: `4` },
      ],
    ])
    expect(selfSamplesTables(md)).toEqual([
      [
        {
          '%': `60.0%`,
          Samples: `6`,
          Function: `Elixir.Enum:reduce/3`,
          Location: `Elixir.Enum`,
        },
        {
          '%': `40.0%`,
          Samples: `4`,
          Function: `Elixir.Jason:encode!/1`,
          Location: `Elixir.Jason`,
        },
      ],
    ])
  })

  test(`async-profiler "Class/path.method" stacks: dotted class location`, () => {
    // Async-profiler names a Java frame `package/Class.method`; the class
    // becomes a dotted location and JVM packages are stdlib while app code is
    // ours.
    const md = convertToMd(
      collapsedConverter,
      makeCollapsed([
        `start_thread;java/lang/Thread.run;com/ex/App.work;java/util/HashMap.put 6`,
        `start_thread;java/lang/Thread.run;com/ex/App.work 4`,
      ]),
      normalizeProfileToMdOptions({ baseURL: `/`, showEntry: () => true }),
    )

    expect(summaryLines(md)).toEqual([`Collected 10 samples.`])
    expect(categoryTables(md)).toEqual([
      [
        { Category: `stdlib`, '%': `60.0%`, Samples: `6` },
        { Category: `ours`, '%': `40.0%`, Samples: `4` },
      ],
    ])
    expect(selfSamplesTables(md)).toEqual([
      [
        {
          '%': `60.0%`,
          Samples: `6`,
          Function: `put`,
          Location: `java.util.HashMap`,
        },
        {
          '%': `40.0%`,
          Samples: `4`,
          Function: `work`,
          Location: `com.ex.App`,
        },
      ],
    ])
  })

  test(`a stackless sample is counted and rendered as an anonymous function`, () => {
    // A line with an empty stack before the count contributes to the total
    // sample count and surfaces as an `(anonymous)` self function.
    const md = convertToMd(
      collapsedConverter,
      makeCollapsed([`main;work 6`, ` 4`]),
      normalizeProfileToMdOptions({ baseURL: `/`, showEntry: () => true }),
    )

    expect(summaryLines(md)).toEqual([`Collected 10 samples.`])
    expect(selfSamplesTables(md)).toEqual([
      [
        {
          '%': `60.0%`,
          Samples: `6`,
          Function: `work`,
          Location: `<unknown>`,
        },
        {
          '%': `40.0%`,
          Samples: `4`,
          Function: `(anonymous)`,
          Location: `<unknown>`,
        },
      ],
    ])
  })

  test(`bare frames without a location render as a name only`, () => {
    const md = convertToMd(
      collapsedConverter,
      makeCollapsed([`outer;inner 3`]),
      normalizeProfileToMdOptions({ baseURL: `/`, showEntry: () => true }),
    )

    expect(selfSamplesTables(md)).toEqual([
      [
        {
          '%': `100.0%`,
          Samples: `3`,
          Function: `inner`,
          Location: `<unknown>`,
        },
      ],
    ])
  })
})

describe(`convertAsync`, () => {
  const options = normalizeProfileToMdOptions({
    baseURL: `/`,
    showEntry: () => true,
  })
  const bytes = makeCollapsed([
    `app.py:main:10;app.py:work:20 6`,
    `app.py:main:10;app.py:work:20 4`,
    `app.py:main:10 5`,
  ])
  const expected = convertToMd(collapsedConverter, bytes, options)

  test(`streaming parse matches sync conversion`, async () => {
    expect(
      await convertToMdAsync(collapsedConverter, streamOf(bytes), options),
    ).toBe(expected)
  })

  test(`streaming parse matches sync conversion across a mid-line chunk boundary`, async () => {
    // A 7-byte chunk size splits frames and counts across stream chunks,
    // exercising the line carry buffer.
    expect(
      await convertToMdAsync(
        collapsedConverter,
        streamOf(...chunk(bytes, 7)),
        options,
      ),
    ).toBe(expected)
  })
})

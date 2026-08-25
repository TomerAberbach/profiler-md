import { describe, expect, test } from 'vitest'
import { concatUint8Arrays } from '../../helpers/bytes.ts'
import { chunk, streamOf } from '../../helpers/testing.ts'
import {
  selfSamplesTables,
  selfTimeTables,
  totalSamplesTables,
} from '../../modalities/call-stack-profile/testing.ts'
import { normalizeProfileToMdOptions } from '../../options.ts'
import {
  calleesTables,
  categoryTables,
  linesTables,
  profileTitles,
  summaryLines,
} from '../../testing.ts'
import { convertBytesToMd, convertToMdAsync } from '../testing.ts'
import { collapsedConverter } from './index.ts'
import { parseCollapsed } from './parse.ts'
import { makeCollapsed } from './testing.ts'

const encodeUtf8 = (text: string): Uint8Array => new TextEncoder().encode(text)

// `py-spy` reads the profiled process's memory while it keeps running, so a
// `--nonblocking` sample can contain invalid bytes.
const invalidByteCollapsed = concatUint8Arrays([
  encodeUtf8(`main (app.py:10);wo`),
  new Uint8Array([0xff]),
  encodeUtf8(`rk (app.py:20) 6\nmain (app.py:10) 4\n`),
])

describe(`matches`, () => {
  test(`accepts a valid collapsed buffer`, () => {
    expect(collapsedConverter.matches(makeCollapsed([`main;work 1`]))).toBe(
      true,
    )
  })

  test(`accepts a buffer whose frame name contains an invalid UTF-8 byte`, () => {
    expect(collapsedConverter.matches(invalidByteCollapsed)).toBe(true)
  })

  test(`parse rejects lines lacking a trailing count`, () => {
    expect(() => parseCollapsed(makeCollapsed([`name,count`, `a,1`]))).toThrow()
  })

  test(`parse rejects a line whose space-separated count is non-numeric`, () => {
    expect(() => parseCollapsed(makeCollapsed([`main work`]))).toThrow()
  })

  test(`rejects collapsed-shaped text containing a NUL byte`, () => {
    // Valid UTF-8, so it parses leniently (a user could force it), but a NUL
    // reveals binary input, so detection rejects it.
    const bytes = makeCollapsed([`main;wo\u0000rk 1`])

    expect(() => parseCollapsed(bytes)).not.toThrow()
    expect(collapsedConverter.matches(bytes)).toBe(false)
  })

  test(`rejects empty input rather than claiming it as an empty profile`, () => {
    expect(collapsedConverter.matches(new Uint8Array(0))).toBe(false)
  })

  test(`rejects comment-only and blank input`, () => {
    expect(collapsedConverter.matches(makeCollapsed([`# a comment`, ``]))).toBe(
      false,
    )
  })
})

describe(`convert`, () => {
  test(`tachyon "file:func:line" stacks: reversal and locations`, () => {
    // The `tid:` root frame marks the profile as tachyon. Its `normalizeStackFrame`
    // drops that frame as a pseudo-frame and splits the `file:func:line` shape,
    // keeping the packed line as the executing line. The duplicate `work` stack
    // sums to 10.
    const md = convertBytesToMd(
      collapsedConverter,
      makeCollapsed([
        `tid:1;app.py:main:10;app.py:work:20 6`,
        `tid:1;app.py:main:10;app.py:work:20 4`,
        `tid:1;app.py:main:10 5`,
      ]),
      normalizeProfileToMdOptions({ baseURL: `/`, showEntry: () => true }),
    )

    // Collapsed stacks have no metric, so the profile is ranked by sample count
    // alone with no redundant value column.
    expect(profileTitles(md)).toEqual([`Sampling profile`])
    expect(summaryLines(md)).toEqual([`Collected 15 samples.`])

    // `work` is the hottest self (leaf of the reversed stack) with the summed
    // count; the packed line is the executing line, so it stays out of the
    // location and feeds the per-line breakdown instead.
    expect(selfSamplesTables(md)).toEqual([
      [
        {
          '%': `66.7%`,
          Samples: `10`,
          Function: `work`,
          Location: `app.py`,
        },
        {
          '%': `33.3%`,
          Samples: `5`,
          Function: `main`,
          Location: `app.py`,
        },
      ],
    ])

    expect(totalSamplesTables(md)).toEqual([
      [
        {
          '%': `100.0%`,
          Samples: `15`,
          Function: `main`,
          Location: `app.py`,
        },
        {
          '%': `66.7%`,
          Samples: `10`,
          Function: `work`,
          Location: `app.py`,
        },
      ],
    ])

    // The callee count sums occurrences across both `work` stacks (6 + 4),
    // verifying the summed sample count propagates through callee metrics.
    expect(calleesTables(md, `main`)).toEqual([
      [{ '%': `66.7%`, Samples: `10`, Callee: `work`, Location: `app.py` }],
    ])
  })

  test(`marker-free "file:func:line" stacks stay raw under the unknown origin`, () => {
    // Without a tachyon marker the generic `file:func:line` shape isn't
    // trusted, so frame names stay whole and location-less.
    const md = convertBytesToMd(
      collapsedConverter,
      makeCollapsed([`app.py:main:10;app.py:work:20 6`, `app.py:main:10 4`]),
      normalizeProfileToMdOptions({ baseURL: `/`, showEntry: () => true }),
    )

    expect(selfSamplesTables(md)).toEqual([
      [
        {
          '%': `60.0%`,
          Samples: `6`,
          Function: `app.py:work:20`,
          Location: `<unknown>`,
        },
        {
          '%': `40.0%`,
          Samples: `4`,
          Function: `app.py:main:10`,
          Location: `<unknown>`,
        },
      ],
    ])
  })

  test(`py-spy "func (file:line)" stacks: location split and per-line breakdown`, () => {
    // Py-spy carries the sampled line separately from the function's file, so
    // `work` sampled at lines 20 and 22 stays one function (file `app.py`) with
    // a two-line breakdown rather than two functions.
    const md = convertBytesToMd(
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
      [{ Category: `Ours`, '%': `100.0%`, Samples: `15` }],
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

  test(`an invalid UTF-8 byte in a frame name becomes a replacement character`, () => {
    const md = convertBytesToMd(
      collapsedConverter,
      invalidByteCollapsed,
      normalizeProfileToMdOptions({ baseURL: `/`, showEntry: () => true }),
    )

    expect(selfSamplesTables(md)).toEqual([
      [
        {
          '%': `60.0%`,
          Samples: `6`,
          Function: `wo\uFFFDrk`,
          Location: `app.py`,
        },
        { '%': `40.0%`, Samples: `4`, Function: `main`, Location: `app.py` },
      ],
    ])
  })

  test(`rbspy "method - file:line" stacks: gems and stdlib categorization`, () => {
    // Rbspy splits the method off the trailing `file:line`; gems are
    // third-party and the interpreter's own library is stdlib.
    const md = convertBytesToMd(
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
        { Category: `Third-party`, '%': `60.0%`, Samples: `6` },
        { Category: `Standard library`, '%': `40.0%`, Samples: `4` },
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
    const md = convertBytesToMd(
      collapsedConverter,
      makeCollapsed([
        `<0.94.0>;eflambe:apply/2;Elixir.Profile:run/1;Elixir.Enum:reduce/3 6`,
        `<0.94.0>;eflambe:apply/2;Elixir.Profile:run/1;Elixir.Jason:encode!/1 4`,
      ]),
      normalizeProfileToMdOptions({ baseURL: `/`, showEntry: () => true }),
    )

    // The counts are microseconds of eflambe's traced wall time, not samples.
    expect(summaryLines(md)).toEqual([`Took 10.0µs.`])
    expect(categoryTables(md)).toEqual([
      [
        { Category: `Standard library`, '%': `60.0%`, Time: `6.0µs` },
        { Category: `Ours`, '%': `40.0%`, Time: `4.0µs` },
      ],
    ])
    expect(selfTimeTables(md)).toEqual([
      [
        {
          '%': `60.0%`,
          Time: `6.0µs`,
          Function: `reduce/3`,
          Location: `Enum`,
        },
        {
          '%': `40.0%`,
          Time: `4.0µs`,
          Function: `encode!/1`,
          Location: `Jason`,
        },
      ],
    ])
  })

  test(`async-profiler "Class/path.method" stacks: dotted class location`, () => {
    // Async-profiler names a Java frame `package/Class.method`; the class
    // becomes a dotted location and JVM packages are stdlib while app code is
    // ours.
    const md = convertBytesToMd(
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
        { Category: `Standard library`, '%': `60.0%`, Samples: `6` },
        { Category: `Ours`, '%': `40.0%`, Samples: `4` },
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

  test(`a stackless sample is counted and formatted as an anonymous function`, () => {
    // A line with an empty stack before the count contributes to the total
    // sample count and surfaces as an `(anonymous)` self function.
    const md = convertBytesToMd(
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

  test(`bare frames without a location are formatted as a name only`, () => {
    const md = convertBytesToMd(
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

  test(`strips extra separator whitespace before the count`, () => {
    // A count padded with multiple spaces must not leave a trailing space on
    // the leaf frame `b`, which would format it as a distinct `b ` function.
    const md = convertBytesToMd(
      collapsedConverter,
      makeCollapsed([`a;b  42`]),
      normalizeProfileToMdOptions({ baseURL: `/`, showEntry: () => true }),
    )

    expect(selfSamplesTables(md)).toEqual([
      [
        {
          '%': `100.0%`,
          Samples: `42`,
          Function: `b`,
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
    `tid:1;app.py:main:10;app.py:work:20 6`,
    `tid:1;app.py:main:10;app.py:work:20 4`,
    `tid:1;app.py:main:10 5`,
  ])
  const expected = convertBytesToMd(collapsedConverter, bytes, options)

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

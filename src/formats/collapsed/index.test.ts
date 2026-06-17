import { describe, expect, test } from 'vitest'
import { normalizeProfileToMdOptions } from '../../options.ts'
import {
  calleesTables,
  profileTitles,
  selfSamplesTables,
  summaryLines,
  totalSamplesTables,
} from '../../testing/markdown.ts'
import { convertToMd } from '../testing/convert.ts'
import { collapsedConverter } from './index.ts'
import { parseCollapsed, parseFrame } from './parse.ts'
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
    // is a stackless sample rather than a line missing its count.
    expect(parseCollapsed(makeCollapsed([` 42`])).stacks).toEqual([
      { frames: [``], count: 42 },
    ])
  })
})

describe(`parseFrame`, () => {
  test(`extracts a basename:func:line location`, () => {
    expect(parseFrame(`app.py:main:10`)).toEqual({
      name: `main`,
      location: { urlOrPath: `app.py`, line: 10 },
    })
  })

  test(`keeps a Windows drive-letter path whole instead of splitting on the drive colon`, () => {
    expect(parseFrame(`C:\\proj\\app.py:run:10`)).toEqual({
      name: `run`,
      location: { urlOrPath: `C:\\proj\\app.py`, line: 10 },
    })
    expect(parseFrame(`D:/proj/app.py:run:10`)).toEqual({
      name: `run`,
      location: { urlOrPath: `D:/proj/app.py`, line: 10 },
    })
  })

  test(`keeps a C++ namespaced function name intact`, () => {
    expect(parseFrame(`file.cpp:Foo::bar:42`)).toEqual({
      name: `Foo::bar`,
      location: { urlOrPath: `file.cpp`, line: 42 },
    })
  })

  test(`treats a single-colon frame as a plain name`, () => {
    expect(parseFrame(`tid:140234`)).toEqual({ name: `tid:140234` })
  })
})

describe(`convert`, () => {
  test(`Python-shaped stacks: reversal, locations, and plain frames`, () => {
    // Root-to-leaf stacks with a leading synthetic `tid:N` frame and
    // `basename:func:line` frames. The duplicate `work` stack sums to 10.
    const md = convertToMd(
      collapsedConverter,
      makeCollapsed([
        `tid:7;app.py:main:10;app.py:work:20 6`,
        `tid:7;app.py:main:10;app.py:work:20 4`,
        `tid:7;app.py:main:10 5`,
      ]),
      normalizeProfileToMdOptions({ baseURL: `/`, showEntry: () => true }),
    )

    // Collapsed stacks have no metric, so the profile is ranked by sample count
    // alone with no redundant value column.
    expect(profileTitles(md)).toEqual([`Sampling profile`])
    expect(summaryLines(md)).toEqual([`Collected 15 samples.`])

    // `work` is the hottest self (leaf of the reversed stack) with the summed
    // count; `basename:func:line` frames yield a `Location`.
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

    // The leading `tid:7` frame is kept as an ordinary root frame with only a
    // name (no location).
    expect(totalSamplesTables(md)).toEqual([
      [
        {
          '%': `100.0%`,
          Samples: `15`,
          Function: `main`,
          Location: `app.py:10`,
        },
        {
          '%': `100.0%`,
          Samples: `15`,
          Function: `tid:7`,
          Location: `<unknown>`,
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

import { describe, expect, test } from 'vitest'
import { mdastToMarkdown } from '../../helpers/markdown.ts'
import {
  categoryTables,
  improvementsTables,
  profileTitles,
  regressionsTables,
  resolveProfileToMdOptions,
  summaryLines,
} from '../../testing.ts'
import { determineMetric, MEGABYTES, MICROSECONDS } from '../metric.ts'
import { diffAggregatedSamplingProfiles } from './diff.ts'
import { formatSamplingProfile, formatSamplingProfileDiff } from './format.ts'
import {
  callStackTables,
  makeAggregatedSamplingProfile,
  totalTimeTables,
} from './testing.ts'

const defaultOptions = resolveProfileToMdOptions({ baseURL: `/project` })

/**
 * The note explaining the ellipsis, shown only when a displayed call stack
 * contains a hidden frame.
 */
const ELLIPSIS_NOTE = `\`…\` stands for frames the entry filter hides.`

/** The gperftools in-use metric, all zeros when nothing was live at dump time. */
const RETAINED_BYTES = determineMetric({ name: `inuse_space`, unit: `bytes` })

describe(`formatSamplingProfile`, () => {
  test(`omits zero-valued call stacks from the hottest call stacks table`, () => {
    const profile = makeAggregatedSamplingProfile(
      [MICROSECONDS],
      [
        {
          name: `hotLeaf`,
          url: `file:///project/src/a.ts`,
          selfSampleCount: 5,
          selfValues: [300],
          stack: [0, 1],
        },
        {
          name: `hotCaller`,
          url: `file:///project/src/b.ts`,
          selfSampleCount: 0,
          selfValues: [0],
        },
        {
          name: `coldLeaf`,
          url: `file:///project/src/c.ts`,
          selfSampleCount: 5,
          selfValues: [0],
          stack: [2, 3],
        },
        {
          name: `coldCaller`,
          url: `file:///project/src/d.ts`,
          selfSampleCount: 0,
          selfValues: [0],
        },
      ],
    )

    const md = mdastToMarkdown(formatSamplingProfile(profile, defaultOptions))

    expect(callStackTables(md)).toEqual([
      [
        {
          '%': `100.0%`,
          Time: `0.3ms`,
          Samples: `5`,
          'Call stack': `hotLeaf (src/a.ts) ← hotCaller (src/b.ts)`,
        },
      ],
    ])
  })

  test(`shows an external function directly called by ours even when it has no self samples`, () => {
    // Main (ours) → extMid (stdlib, never a leaf) → extLeaf (stdlib). The
    // default filter hides external implementation details (extLeaf, called
    // only by stdlib) but must keep extMid: it's the external API surface ours
    // code calls directly, even though it has zero self samples.
    const profile = makeAggregatedSamplingProfile(
      [MICROSECONDS],
      [
        {
          name: `extLeaf`,
          selfSampleCount: 5,
          selfValues: [300],
          stack: [0, 1, 2],
        },
        { name: `extMid`, selfSampleCount: 0, selfValues: [0] },
        {
          name: `main`,
          url: `file:///project/src/main.ts`,
          selfSampleCount: 0,
          selfValues: [0],
        },
      ],
    )

    const md = mdastToMarkdown(formatSamplingProfile(profile, defaultOptions))

    expect(totalTimeTables(md)).toEqual([
      [
        {
          '%': `100.0%`,
          Time: `0.3ms`,
          Samples: `5`,
          Function: `extMid`,
          Location: `<unknown>`,
        },
        {
          '%': `100.0%`,
          Time: `0.3ms`,
          Samples: `5`,
          Function: `main`,
          Location: `src/main.ts`,
        },
      ],
    ])
    expect(md).not.toContain(`extLeaf`)
  })

  test(`merges call stacks that differ only in hidden frames into one row`, () => {
    // Two stacks share the visible suffix extApi ← main but end in different
    // hidden stdlib leaves. Without merging they'd render as two identical
    // rows, each carrying only its own slice of the value.
    const profile = makeAggregatedSamplingProfile(
      [MICROSECONDS],
      [
        {
          name: `extLeafA`,
          selfSampleCount: 3,
          selfValues: [180],
          stack: [0, 2, 3],
        },
        {
          name: `extLeafB`,
          selfSampleCount: 2,
          selfValues: [120],
          stack: [1, 2, 3],
        },
        { name: `extApi`, selfSampleCount: 0, selfValues: [0] },
        {
          name: `main`,
          url: `file:///project/src/main.ts`,
          selfSampleCount: 0,
          selfValues: [0],
        },
      ],
    )

    const md = mdastToMarkdown(formatSamplingProfile(profile, defaultOptions))

    expect(callStackTables(md)).toEqual([
      [
        {
          '%': `100.0%`,
          Time: `0.3ms`,
          Samples: `5`,
          'Call stack': `extApi ← main (src/main.ts)`,
        },
      ],
    ])
  })

  test(`marks hidden frames between two shown frames with an ellipsis`, () => {
    const profile = makeAggregatedSamplingProfile(
      [MICROSECONDS],
      [
        {
          name: `funcA`,
          url: `file:///project/src/a.ts`,
          selfSampleCount: 5,
          selfValues: [300],
          stack: [0, 1, 2],
        },
        {
          name: `funcB`,
          url: `file:///project/src/b.ts`,
          selfSampleCount: 0,
          selfValues: [0],
        },
        {
          name: `funcC`,
          url: `file:///project/src/c.ts`,
          selfSampleCount: 0,
          selfValues: [0],
        },
      ],
    )
    const options = resolveProfileToMdOptions({
      baseURL: `/project`,
      showEntry: entry => entry.name !== `funcB`,
    })

    const md = mdastToMarkdown(formatSamplingProfile(profile, options))

    expect(callStackTables(md)).toEqual([
      [
        {
          '%': `100.0%`,
          Time: `0.3ms`,
          Samples: `5`,
          'Call stack': `funcA (src/a.ts) ← … ← funcC (src/c.ts)`,
        },
      ],
    ])
    expect(md).toContain(ELLIPSIS_NOTE)
  })

  test(`ends a row with an ellipsis when hidden frames precede the common call stack`, () => {
    // One stack reaches funcC through a hidden frame and the other calls it
    // directly, so the ellipsis prints on the row instead of in the common
    // call stack.
    const profile = makeAggregatedSamplingProfile(
      [MICROSECONDS],
      [
        {
          name: `funcA`,
          url: `file:///project/src/a.ts`,
          selfSampleCount: 6,
          selfValues: [360],
          stack: [0, 1, 2],
        },
        {
          name: `hiddenMid`,
          url: `file:///project/src/mid.ts`,
          selfSampleCount: 0,
          selfValues: [0],
        },
        {
          name: `funcC`,
          url: `file:///project/src/c.ts`,
          selfSampleCount: 0,
          selfValues: [0],
        },
        {
          name: `funcB`,
          url: `file:///project/src/b.ts`,
          selfSampleCount: 3,
          selfValues: [180],
          stack: [3, 2],
        },
      ],
    )
    const options = resolveProfileToMdOptions({
      baseURL: `/project`,
      showEntry: entry => !entry.name?.startsWith(`hidden`),
    })

    const md = mdastToMarkdown(formatSamplingProfile(profile, options))

    expect(md).toContain(`Common call stack: \`funcC\` (\`src/c.ts\`)`)
    expect(callStackTables(md)).toEqual([
      [
        {
          '%': `66.7%`,
          Time: `0.4ms`,
          Samples: `6`,
          'Call stack': `funcA (src/a.ts) ← …`,
        },
        {
          '%': `33.3%`,
          Time: `0.2ms`,
          Samples: `3`,
          'Call stack': `funcB (src/b.ts)`,
        },
      ],
    ])
    expect(md).toContain(ELLIPSIS_NOTE)
  })

  test(`shortens a location across an ellipsis`, () => {
    const profile = makeAggregatedSamplingProfile(
      [MICROSECONDS],
      [
        {
          name: `funcA`,
          url: `file:///project/src/a.ts`,
          line: 10,
          selfSampleCount: 5,
          selfValues: [300],
          stack: [0, 1, 2],
        },
        {
          name: `funcB`,
          url: `file:///project/src/b.ts`,
          selfSampleCount: 0,
          selfValues: [0],
        },
        {
          name: `funcC`,
          url: `file:///project/src/a.ts`,
          line: 42,
          selfSampleCount: 0,
          selfValues: [0],
        },
      ],
    )
    const options = resolveProfileToMdOptions({
      baseURL: `/project`,
      showEntry: entry => entry.name !== `funcB`,
    })

    const md = mdastToMarkdown(formatSamplingProfile(profile, options))

    expect(callStackTables(md)).toEqual([
      [
        {
          '%': `100.0%`,
          Time: `0.3ms`,
          Samples: `5`,
          'Call stack': `funcA (src/a.ts:10) ← … ← funcC (42)`,
        },
      ],
    ])
  })

  test(`drops hidden frames below the leaf and above the root without an ellipsis`, () => {
    const profile = makeAggregatedSamplingProfile(
      [MICROSECONDS],
      [
        {
          name: `hiddenLeaf`,
          url: `file:///project/src/leaf.ts`,
          selfSampleCount: 5,
          selfValues: [300],
          stack: [0, 1, 2, 3],
        },
        {
          name: `funcA`,
          url: `file:///project/src/a.ts`,
          selfSampleCount: 0,
          selfValues: [0],
        },
        {
          name: `funcB`,
          url: `file:///project/src/b.ts`,
          selfSampleCount: 0,
          selfValues: [0],
        },
        {
          name: `hiddenRoot`,
          url: `file:///project/src/root.ts`,
          selfSampleCount: 0,
          selfValues: [0],
        },
      ],
    )
    const options = resolveProfileToMdOptions({
      baseURL: `/project`,
      showEntry: entry => !entry.name?.startsWith(`hidden`),
    })

    const md = mdastToMarkdown(formatSamplingProfile(profile, options))

    expect(callStackTables(md)).toEqual([
      [
        {
          '%': `100.0%`,
          Time: `0.3ms`,
          Samples: `5`,
          'Call stack': `funcA (src/a.ts) ← funcB (src/b.ts)`,
        },
      ],
    ])
    expect(md).not.toContain(ELLIPSIS_NOTE)
  })

  test(`shows all functions when the default filter would hide every one`, () => {
    // A profile sampled entirely inside external code, with no frame of ours
    // anywhere (e.g. a runtime dump or a lock profile parked in the JDK). The
    // default filter would hide everything, emptying the body, so it is
    // disabled with a note instead.
    const profile = makeAggregatedSamplingProfile(
      [MICROSECONDS],
      [
        {
          name: `extLeaf`,
          selfSampleCount: 5,
          selfValues: [300],
          stack: [0, 1],
        },
        { name: `extRoot`, selfSampleCount: 0, selfValues: [0] },
      ],
    )

    const md = mdastToMarkdown(formatSamplingProfile(profile, defaultOptions))

    expect(md).toContain(
      `The entry filter hides every sampled function, so all functions are shown.`,
    )
    expect(callStackTables(md)).toEqual([
      [
        {
          '%': `100.0%`,
          Time: `0.3ms`,
          Samples: `5`,
          'Call stack': `extLeaf ← extRoot`,
        },
      ],
    ])
  })

  test(`shows all functions when a custom showEntry would hide every one`, () => {
    const profile = makeAggregatedSamplingProfile(
      [MICROSECONDS],
      [
        { name: `funcA`, selfSampleCount: 5, selfValues: [300], stack: [0, 1] },
        { name: `funcB`, selfSampleCount: 0, selfValues: [0] },
      ],
    )
    const options = resolveProfileToMdOptions({
      baseURL: `/project`,
      showEntry: () => false,
    })

    const md = mdastToMarkdown(formatSamplingProfile(profile, options))

    expect(md).toContain(
      `The entry filter hides every sampled function, so all functions are shown.`,
    )
    expect(callStackTables(md)).toEqual([
      [
        {
          '%': `100.0%`,
          Time: `0.3ms`,
          Samples: `5`,
          'Call stack': `funcA ← funcB`,
        },
      ],
    ])
  })

  test(`notes a metric with no recorded values in place of its sections`, () => {
    const profile = makeAggregatedSamplingProfile(
      [MICROSECONDS, RETAINED_BYTES],
      [
        {
          name: `funcA`,
          url: `file:///project/src/a.ts`,
          selfSampleCount: 5,
          selfValues: [300, 0],
        },
      ],
    )

    const md = mdastToMarkdown(formatSamplingProfile(profile, defaultOptions))

    expect(md).toMatch(/^## CPU$/mu)
    expect(md).toContain(`## Retained heap\n\nNo bytes retained in any sample.`)
  })

  test(`notes a single metric with no recorded values in place of all sections`, () => {
    const profile = makeAggregatedSamplingProfile(
      [RETAINED_BYTES],
      [
        {
          name: `funcA`,
          url: `file:///project/src/a.ts`,
          selfSampleCount: 5,
          selfValues: [0],
        },
      ],
    )

    const md = mdastToMarkdown(formatSamplingProfile(profile, defaultOptions))

    expect(md).toContain(`No bytes retained in any sample.`)
    expect(md).not.toContain(`Hottest`)
  })
})

describe(`formatSamplingProfileDiff`, () => {
  test(`produces expected title`, () => {
    const base = makeAggregatedSamplingProfile(
      [MICROSECONDS],
      [
        {
          name: `funcA`,
          url: `file:///project/src/a.ts`,
          selfSampleCount: 5,
          selfValues: [100],
        },
      ],
    )
    const current = makeAggregatedSamplingProfile(
      [MICROSECONDS],
      [
        {
          name: `funcA`,
          url: `file:///project/src/a.ts`,
          selfSampleCount: 10,
          selfValues: [200],
        },
      ],
    )

    const diff = diffAggregatedSamplingProfiles(base, current, defaultOptions)
    const md = mdastToMarkdown(formatSamplingProfileDiff(diff, defaultOptions))

    expect(profileTitles(md)).toEqual([`CPU profile diff`])
  })

  test(`includes base and current summary lines`, () => {
    const base = makeAggregatedSamplingProfile(
      [MICROSECONDS],
      [
        {
          name: `funcA`,
          url: `file:///project/src/a.ts`,
          selfSampleCount: 5,
          selfValues: [100],
        },
      ],
    )
    const current = makeAggregatedSamplingProfile(
      [MICROSECONDS],
      [
        {
          name: `funcA`,
          url: `file:///project/src/a.ts`,
          selfSampleCount: 10,
          selfValues: [200],
        },
      ],
    )

    const diff = diffAggregatedSamplingProfiles(base, current, defaultOptions)
    const md = mdastToMarkdown(formatSamplingProfileDiff(diff, defaultOptions))

    const lines = summaryLines(md)
    expect(lines).toHaveLength(1)
    expect(lines[0]).toMatch(/^Took/u)
    expect(lines[0]).toMatch(/→/u)
  })

  test(`includes category table with delta and change`, () => {
    const base = makeAggregatedSamplingProfile(
      [MICROSECONDS],
      [
        {
          name: `funcA`,
          url: `file:///project/src/a.ts`,
          selfSampleCount: 5,
          selfValues: [100],
        },
      ],
    )
    const current = makeAggregatedSamplingProfile(
      [MICROSECONDS],
      [
        {
          name: `funcA`,
          url: `file:///project/src/a.ts`,
          selfSampleCount: 10,
          selfValues: [200],
        },
      ],
    )

    const diff = diffAggregatedSamplingProfiles(base, current, defaultOptions)
    const md = mdastToMarkdown(formatSamplingProfileDiff(diff, defaultOptions))

    expect(categoryTables(md)).toEqual([
      [
        {
          Category: `ours`,
          Change: `+100.0%`,
          Delta: `+0.10ms`,
          '%': `100.0%`,
          Time: `0.1ms → 0.2ms`,
          Samples: `5 → 10`,
        },
      ],
    ])
  })

  test(`lists regressions and improvements per direction`, () => {
    const base = makeAggregatedSamplingProfile(
      [MICROSECONDS],
      [
        {
          name: `funcA`,
          url: `file:///project/src/a.ts`,
          line: 10,
          selfSampleCount: 5,
          selfValues: [100],
        },
        {
          name: `funcB`,
          url: `file:///project/src/b.ts`,
          line: 20,
          selfSampleCount: 3,
          selfValues: [60],
        },
      ],
    )
    const current = makeAggregatedSamplingProfile(
      [MICROSECONDS],
      [
        {
          name: `funcA`,
          url: `file:///project/src/a.ts`,
          line: 10,
          selfSampleCount: 10,
          selfValues: [200],
        },
        {
          name: `funcC`,
          url: `file:///project/src/c.ts`,
          line: 30,
          selfSampleCount: 2,
          selfValues: [40],
        },
      ],
    )

    const diff = diffAggregatedSamplingProfiles(base, current, defaultOptions)
    const md = mdastToMarkdown(formatSamplingProfileDiff(diff, defaultOptions))

    // FuncA grew (regression); funcC is new (regression); funcB was removed
    // (improvement). funcA and funcB are leaves, so self and total match.
    const expectedRegressions = [
      {
        Change: `+100.0%`,
        Delta: `+0.10ms`,
        '%': `62.5% → 83.3%`,
        Time: `0.1ms → 0.2ms`,
        Samples: `5 → 10`,
        Function: `funcA`,
        Location: `src/a.ts:10`,
      },
      {
        Change: `new`,
        Delta: `+0.04ms`,
        '%': `0.0% → 16.7%`,
        Time: `0ms → 40.0µs`,
        Samples: `0 → 2`,
        Function: `funcC`,
        Location: `src/c.ts:30`,
      },
    ]
    const expectedImprovements = [
      {
        Change: `removed`,
        Delta: `-0.06ms`,
        '%': `37.5% → 0.0%`,
        Time: `0.1ms → 0ms`,
        Samples: `3 → 0`,
        Function: `funcB`,
        Location: `src/b.ts:20`,
      },
    ]

    expect(regressionsTables(md, `Self time`)).toEqual([expectedRegressions])
    expect(improvementsTables(md, `Self time`)).toEqual([expectedImprovements])
    expect(regressionsTables(md, `Total time`)).toEqual([expectedRegressions])
    expect(improvementsTables(md, `Total time`)).toEqual([expectedImprovements])
  })

  test(`omits functions hidden by showEntry without hiding functions from the other profile`, () => {
    // FuncB exists only in the base profile and funcC only in the current
    // profile, so they have the same profile-local function ID; hiding funcB
    // must not hide funcC.
    const base = makeAggregatedSamplingProfile(
      [MICROSECONDS],
      [
        {
          name: `funcA`,
          url: `file:///project/src/a.ts`,
          line: 10,
          selfSampleCount: 5,
          selfValues: [100],
        },
        {
          name: `funcB`,
          url: `file:///project/src/b.ts`,
          line: 20,
          selfSampleCount: 3,
          selfValues: [60],
        },
      ],
    )
    const current = makeAggregatedSamplingProfile(
      [MICROSECONDS],
      [
        {
          name: `funcA`,
          url: `file:///project/src/a.ts`,
          line: 10,
          selfSampleCount: 10,
          selfValues: [200],
        },
        {
          name: `funcC`,
          url: `file:///project/src/c.ts`,
          line: 30,
          selfSampleCount: 2,
          selfValues: [40],
        },
      ],
    )
    const options = resolveProfileToMdOptions({
      baseURL: `/project`,
      showEntry: entry => entry.name !== `funcB`,
    })

    const diff = diffAggregatedSamplingProfiles(base, current, defaultOptions)
    const md = mdastToMarkdown(formatSamplingProfileDiff(diff, options))

    expect(md).not.toContain(`funcB`)
    expect(regressionsTables(md, `Self time`)).toEqual([
      [
        {
          Change: `+100.0%`,
          Delta: `+0.10ms`,
          '%': `62.5% → 83.3%`,
          Time: `0.1ms → 0.2ms`,
          Samples: `5 → 10`,
          Function: `funcA`,
          Location: `src/a.ts:10`,
        },
        {
          Change: `new`,
          Delta: `+0.04ms`,
          '%': `0.0% → 16.7%`,
          Time: `0ms → 40.0µs`,
          Samples: `0 → 2`,
          Function: `funcC`,
          Location: `src/c.ts:30`,
        },
      ],
    ])
    expect(improvementsTables(md, `Self time`)).toEqual([])
  })

  test(`notes that each function section is unchanged when nothing changed`, () => {
    const profile = makeAggregatedSamplingProfile(
      [MICROSECONDS],
      [
        {
          name: `funcA`,
          url: `file:///project/src/a.ts`,
          line: 10,
          selfSampleCount: 5,
          selfValues: [100],
        },
      ],
    )

    const diff = diffAggregatedSamplingProfiles(
      profile,
      profile,
      defaultOptions,
    )
    const md = mdastToMarkdown(formatSamplingProfileDiff(diff, defaultOptions))

    // The unchanged total reads as a measurement, so it omits the change suffix
    // a zero delta would otherwise produce.
    expect(summaryLines(md)).toEqual([
      `Took 0.1ms over 5 samples (20.0µs per sample).`,
    ])

    // The sections are still formatted, with a note in place of empty tables so
    // the output doesn't look broken.
    expect(md).toMatch(/^## Hottest functions$/mu)
    expect(regressionsTables(md, `Self time`)).toEqual([])
    expect(improvementsTables(md, `Self time`)).toEqual([])
    expect(md).toContain(
      `No function differed in time spent directly in the function body, excluding callees.`,
    )
    expect(md).toContain(
      `No function differed in total time spent in the function and all its callees.`,
    )

    // The category table is still formatted with a zero delta.
    expect(categoryTables(md)).toEqual([
      [
        {
          Category: `ours`,
          Change: `0.0%`,
          Delta: `0ms`,
          '%': `100.0%`,
          Time: `0.1ms`,
          Samples: `5`,
        },
      ],
    ])
  })

  test(`omits each function section a non-diff profile would omit instead of noting it`, () => {
    const profile = makeAggregatedSamplingProfile(
      [MICROSECONDS],
      [
        {
          name: `funcA`,
          url: `file:///project/src/a.ts`,
          line: 10,
          selfSampleCount: 5,
          selfValues: [100],
        },
        {
          name: `funcB`,
          url: `file:///project/src/b.ts`,
          line: 10,
          selfSampleCount: 5,
          selfValues: [0],
        },
      ],
    )
    // Hiding the only active function leaves nothing to rank while funcB
    // keeps the filter from emptying the whole profile, so a non-diff profile
    // would omit the function sections entirely.
    const options = resolveProfileToMdOptions({
      baseURL: `/project`,
      showEntry: entry => entry.name !== `funcA`,
    })

    const diff = diffAggregatedSamplingProfiles(
      profile,
      profile,
      defaultOptions,
    )
    const md = mdastToMarkdown(formatSamplingProfileDiff(diff, options))

    expect(md).not.toMatch(/^## Hottest functions$/mu)
    expect(md).not.toContain(`No function differed`)
  })

  test(`notes the unchanged metric while detailing the changed one in a multi-metric diff`, () => {
    const base = makeAggregatedSamplingProfile(
      [MICROSECONDS, MEGABYTES],
      [
        {
          name: `funcA`,
          url: `file:///project/src/a.ts`,
          line: 10,
          selfSampleCount: 5,
          selfValues: [100, 100],
        },
      ],
    )
    // Only the CPU metric changes; the heap metric is identical on both sides.
    const current = makeAggregatedSamplingProfile(
      [MICROSECONDS, MEGABYTES],
      [
        {
          name: `funcA`,
          url: `file:///project/src/a.ts`,
          line: 10,
          selfSampleCount: 5,
          selfValues: [200, 100],
        },
      ],
    )

    const diff = diffAggregatedSamplingProfiles(base, current, defaultOptions)
    const md = mdastToMarkdown(formatSamplingProfileDiff(diff, defaultOptions))

    expect(md).toMatch(/^## CPU$/mu)
    expect(md).toMatch(/^## Heap$/mu)
    expect(regressionsTables(md, `Self time`)).not.toEqual([])
    expect(md).toContain(
      `No function differed in bytes allocated directly in the function body, excluding callees.`,
    )
    expect(md).toContain(
      `No function differed in total bytes allocated in the function and all its callees.`,
    )
  })

  test(`notes a metric with no recorded values on either side in place of its sections`, () => {
    const base = makeAggregatedSamplingProfile(
      [MICROSECONDS, RETAINED_BYTES],
      [
        {
          name: `funcA`,
          url: `file:///project/src/a.ts`,
          selfSampleCount: 5,
          selfValues: [100, 0],
        },
      ],
    )
    const current = makeAggregatedSamplingProfile(
      [MICROSECONDS, RETAINED_BYTES],
      [
        {
          name: `funcA`,
          url: `file:///project/src/a.ts`,
          selfSampleCount: 5,
          selfValues: [200, 0],
        },
      ],
    )

    const diff = diffAggregatedSamplingProfiles(base, current, defaultOptions)
    const md = mdastToMarkdown(formatSamplingProfileDiff(diff, defaultOptions))

    expect(md).toMatch(/^## CPU$/mu)
    expect(md).toContain(`## Retained heap\n\nNo bytes retained in any sample.`)
    expect(md).not.toContain(`No function differed in bytes retained`)
  })

  test(`omits a metric's heading when hidden entries leave it without sections`, () => {
    const profile = makeAggregatedSamplingProfile(
      [MICROSECONDS, MEGABYTES],
      [
        {
          name: `funcA`,
          url: `file:///project/src/a.ts`,
          selfSampleCount: 5,
          selfValues: [100, 100],
        },
        {
          name: `funcB`,
          url: `file:///project/src/b.ts`,
          selfSampleCount: 5,
          selfValues: [0, 100],
        },
      ],
    )
    // Hiding funcA leaves the CPU metric with no active shown function, so
    // its heading should not dangle without sections, while the heap metric
    // still renders via funcB.
    const options = resolveProfileToMdOptions({
      baseURL: `/project`,
      showEntry: entry => entry.name !== `funcA`,
    })

    const diff = diffAggregatedSamplingProfiles(
      profile,
      profile,
      defaultOptions,
    )
    const md = mdastToMarkdown(formatSamplingProfileDiff(diff, options))

    expect(md).not.toMatch(/^## CPU$/mu)
    expect(md).toMatch(/^## Heap$/mu)
  })
})

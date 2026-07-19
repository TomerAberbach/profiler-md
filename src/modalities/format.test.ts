import { describe, expect, test } from 'vitest'
import {
  admitDiffEntriesForCoverage,
  admitEntriesForCoverage,
} from './format.ts'

type Entry = {
  name: string
  self: number
  shown?: boolean
  admissible?: boolean
}

const admit = (entries: Entry[], coverageTarget: number, topN = 20) =>
  admitEntriesForCoverage(entries, {
    isShown: entry => entry.shown ?? false,
    isAdmissible: entry => entry.admissible ?? true,
    selfValueOf: entry => entry.self,
    coverageTarget,
    topN,
  })

describe(`admitEntriesForCoverage`, () => {
  test(`returns undefined when shown entries already cover the target`, () => {
    const entries: Entry[] = [
      { name: `shown`, self: 80, shown: true },
      { name: `hidden`, self: 20 },
    ]

    expect(admit(entries, 0.75)).toBeUndefined()
  })

  test(`returns undefined when the target is zero`, () => {
    const entries: Entry[] = [{ name: `hidden`, self: 100 }]

    expect(admit(entries, 0)).toBeUndefined()
  })

  test(`returns undefined when the entries have no self value`, () => {
    const entries: Entry[] = [{ name: `hidden`, self: 0 }]

    expect(admit(entries, 0.75)).toBeUndefined()
  })

  test(`admits the largest hidden entries first until the target is met`, () => {
    const entries: Entry[] = [
      { name: `shown`, self: 10, shown: true },
      { name: `small`, self: 20 },
      { name: `large`, self: 50 },
      { name: `medium`, self: 30 },
    ]

    const relaxation = admit(entries, 0.75)

    expect(relaxation).toStrictEqual({
      coverage: 10 / 110,
      admitted: [
        { name: `large`, self: 50 },
        { name: `medium`, self: 30 },
      ],
    })
  })

  test(`falls back to inadmissible entries when no admissible entry exists`, () => {
    const entries: Entry[] = [
      { name: `shown`, self: 10, shown: true },
      { name: `synthetic`, self: 90, admissible: false },
    ]

    const relaxation = admit(entries, 0.75)

    expect(relaxation).toStrictEqual({
      coverage: 0.1,
      admitted: [{ name: `synthetic`, self: 90, admissible: false }],
    })
  })

  test(`admits inadmissible entries only once every admissible one is`, () => {
    const entries: Entry[] = [
      { name: `hidden`, self: 10 },
      { name: `synthetic`, self: 90, admissible: false },
    ]

    const relaxation = admit(entries, 0.75)

    expect(relaxation).toStrictEqual({
      coverage: 0,
      admitted: [
        { name: `hidden`, self: 10 },
        { name: `synthetic`, self: 90, admissible: false },
      ],
    })
  })

  test(`never admits entries with a zero self value`, () => {
    const entries: Entry[] = [
      { name: `active`, self: 10 },
      { name: `inactive`, self: 0 },
    ]

    const relaxation = admit(entries, 0.75)

    expect(relaxation).toStrictEqual({
      coverage: 0,
      admitted: [{ name: `active`, self: 10 }],
    })
  })

  test(`returns undefined when a self value is not a number`, () => {
    // A NaN self value makes the total NaN, so every threshold comparison
    // is false and nothing can be admitted.
    const entries: Entry[] = [
      { name: `shown`, self: Number.NaN, shown: true },
      { name: `hidden`, self: 5 },
    ]

    expect(admit(entries, 0.75)).toBeUndefined()
  })

  test(`stops admitting at the first candidate below the fold`, () => {
    // With topN = 3 and two shown entries outranking it, only one hidden
    // entry fits above the fold, even though coverage is still short.
    const entries: Entry[] = [
      { name: `shown1`, self: 50, shown: true },
      { name: `shown2`, self: 40, shown: true },
      { name: `hidden1`, self: 30 },
      { name: `hidden2`, self: 20 },
    ]

    const relaxation = admit(entries, 1, 3)

    expect(relaxation).toStrictEqual({
      coverage: 90 / 140,
      admitted: [{ name: `hidden1`, self: 30 }],
    })
  })

  test(`admits a hidden entry that outranks shown entries within the fold`, () => {
    const entries: Entry[] = [
      { name: `shown1`, self: 10, shown: true },
      { name: `shown2`, self: 5, shown: true },
      { name: `huge`, self: 85 },
    ]

    const relaxation = admit(entries, 0.9, 2)

    expect(relaxation).toStrictEqual({
      coverage: 0.15,
      admitted: [{ name: `huge`, self: 85 }],
    })
  })

  test(`returns undefined when every hidden entry falls below the fold`, () => {
    const entries: Entry[] = [
      { name: `shown1`, self: 30, shown: true },
      { name: `shown2`, self: 25, shown: true },
      { name: `hidden`, self: 20 },
    ]

    expect(admit(entries, 1, 2)).toBeUndefined()
  })
})

type Pair = {
  name: string
  baseSelf: number
  currentSelf: number
  shown?: boolean
  admissible?: boolean
}

const admitDiff = (pairs: Pair[], coverageTarget: number, topN = 20) =>
  admitDiffEntriesForCoverage(pairs, {
    isShown: pair => pair.shown ?? false,
    isAdmissible: pair => pair.admissible ?? true,
    baseSelfValueOf: pair => pair.baseSelf,
    currentSelfValueOf: pair => pair.currentSelf,
    coverageTarget,
    topN,
  })

describe(`admitDiffEntriesForCoverage`, () => {
  test(`returns undefined when both sides cover the target`, () => {
    const pairs: Pair[] = [
      { name: `shown`, baseSelf: 80, currentSelf: 90, shown: true },
      { name: `hidden`, baseSelf: 20, currentSelf: 10 },
    ]

    expect(admitDiff(pairs, 0.75)).toBeUndefined()
  })

  test(`returns undefined when both sides have no self value`, () => {
    const pairs: Pair[] = [{ name: `hidden`, baseSelf: 0, currentSelf: 0 }]

    expect(admitDiff(pairs, 0.75)).toBeUndefined()
  })

  test(`keeps admitting until both sides reach the target`, () => {
    // `baseHeavy` alone satisfies the base side, but the current side still
    // falls short, so `currentHeavy` is admitted too.
    const pairs: Pair[] = [
      { name: `shown`, baseSelf: 10, currentSelf: 10, shown: true },
      { name: `baseHeavy`, baseSelf: 80, currentSelf: 10 },
      { name: `currentHeavy`, baseSelf: 5, currentSelf: 70 },
    ]

    const relaxation = admitDiff(pairs, 0.75)

    expect(relaxation).toStrictEqual({
      coverage: 10 / 95,
      admitted: [
        { name: `baseHeavy`, baseSelf: 80, currentSelf: 10 },
        { name: `currentHeavy`, baseSelf: 5, currentSelf: 70 },
      ],
    })
  })

  test(`ranks pairs by their larger short-side share`, () => {
    // `currentHeavy` has the smaller base share but the larger single-side
    // share, so it is admitted first.
    const pairs: Pair[] = [
      { name: `shown`, baseSelf: 20, currentSelf: 20, shown: true },
      { name: `baseHeavy`, baseSelf: 50, currentSelf: 10 },
      { name: `currentHeavy`, baseSelf: 30, currentSelf: 70 },
    ]

    const relaxation = admitDiff(pairs, 0.75)

    expect(relaxation).toStrictEqual({
      coverage: 0.2,
      admitted: [
        { name: `currentHeavy`, baseSelf: 30, currentSelf: 70 },
        { name: `baseHeavy`, baseSelf: 50, currentSelf: 10 },
      ],
    })
  })

  test(`stops admitting for a side that reaches the target mid-admission`, () => {
    // After `baseHeavy1` covers the base side, `baseHeavy2` can no longer
    // raise any short side's coverage, so the current-heavy pairs are
    // admitted instead despite their smaller pre-admission shares.
    const pairs: Pair[] = [
      { name: `shown`, baseSelf: 40, currentSelf: 0, shown: true },
      { name: `baseHeavy1`, baseSelf: 35, currentSelf: 0 },
      { name: `baseHeavy2`, baseSelf: 25, currentSelf: 0 },
      { name: `currentHeavy1`, baseSelf: 0, currentSelf: 24 },
      { name: `currentHeavy2`, baseSelf: 0, currentSelf: 23 },
      { name: `currentHeavy3`, baseSelf: 0, currentSelf: 22 },
      { name: `currentHeavy4`, baseSelf: 0, currentSelf: 21 },
      { name: `currentHeavy5`, baseSelf: 0, currentSelf: 20 },
    ]

    const relaxation = admitDiff(pairs, 0.5)

    expect(relaxation).toStrictEqual({
      coverage: 0,
      admitted: [
        { name: `baseHeavy1`, baseSelf: 35, currentSelf: 0 },
        { name: `currentHeavy1`, baseSelf: 0, currentSelf: 24 },
        { name: `currentHeavy2`, baseSelf: 0, currentSelf: 23 },
        { name: `currentHeavy3`, baseSelf: 0, currentSelf: 22 },
      ],
    })
  })

  test(`never admits a pair significant only on a covered side`, () => {
    // The base side already covers the target, so admitting `baseOnly` cannot
    // raise the current side's coverage and it stays hidden despite its share
    // of the base side.
    const pairs: Pair[] = [
      { name: `shown`, baseSelf: 80, currentSelf: 10, shown: true },
      { name: `baseOnly`, baseSelf: 15, currentSelf: 0 },
      { name: `currentOnly`, baseSelf: 5, currentSelf: 70 },
    ]

    const relaxation = admitDiff(pairs, 0.75)

    expect(relaxation).toStrictEqual({
      coverage: 0.125,
      admitted: [{ name: `currentOnly`, baseSelf: 5, currentSelf: 70 }],
    })
  })

  test(`falls back to inadmissible pairs when no admissible pair exists`, () => {
    const pairs: Pair[] = [
      { name: `shown`, baseSelf: 10, currentSelf: 10, shown: true },
      { name: `synthetic`, baseSelf: 90, currentSelf: 90, admissible: false },
    ]

    const relaxation = admitDiff(pairs, 0.75)

    expect(relaxation).toStrictEqual({
      coverage: 0.1,
      admitted: [
        { name: `synthetic`, baseSelf: 90, currentSelf: 90, admissible: false },
      ],
    })
  })

  test(`treats a side with no self value as fully covered`, () => {
    const pairs: Pair[] = [
      { name: `shown`, baseSelf: 0, currentSelf: 80, shown: true },
      { name: `hidden`, baseSelf: 0, currentSelf: 20 },
    ]

    expect(admitDiff(pairs, 0.75)).toBeUndefined()
  })

  test(`reports the minimum coverage of the covered sides`, () => {
    const pairs: Pair[] = [
      { name: `shown`, baseSelf: 50, currentSelf: 20, shown: true },
      { name: `hidden`, baseSelf: 50, currentSelf: 80 },
    ]

    const relaxation = admitDiff(pairs, 0.75)

    expect(relaxation).toStrictEqual({
      coverage: 0.2,
      admitted: [{ name: `hidden`, baseSelf: 50, currentSelf: 80 }],
    })
  })

  test(`admits at most topN pairs`, () => {
    const pairs: Pair[] = [
      { name: `hidden1`, baseSelf: 30, currentSelf: 30 },
      { name: `hidden2`, baseSelf: 20, currentSelf: 20 },
      { name: `hidden3`, baseSelf: 10, currentSelf: 10 },
    ]

    const relaxation = admitDiff(pairs, 1, 2)

    expect(relaxation).toStrictEqual({
      coverage: 0,
      admitted: [
        { name: `hidden1`, baseSelf: 30, currentSelf: 30 },
        { name: `hidden2`, baseSelf: 20, currentSelf: 20 },
      ],
    })
  })
})

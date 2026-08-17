import { describe, expect, test } from 'vitest'
import {
  selfSizeTables,
  selfTimeTables,
} from '../../../modalities/call-stack-profile/testing.ts'
import { normalizeProfileToMdOptions } from '../../../options.ts'
import {
  callersTables,
  profileTitles,
  rankingTables,
  summaryLines,
} from '../../../testing.ts'
import { convertJsonToMd } from '../../testing.ts'
import { ghcJsonProfileConverter } from './index.ts'
import { parseGhcJsonProfile } from './parse.ts'
import {
  makeGhcCostCentre,
  makeGhcJsonProfile,
  makeGhcProfileNode,
} from './testing.ts'

const options = () => normalizeProfileToMdOptions({ baseURL: `/project` })

const COST_CENTRES = [
  makeGhcCostCentre({
    id: 1,
    label: `main`,
    module: `Main`,
    src_loc: `app/Main.hs:12:1-4`,
  }),
  makeGhcCostCentre({
    id: 2,
    label: `parse`,
    module: `Parse`,
    src_loc: `src/Parse.hs:(20,1)-(28,17)`,
  }),
  makeGhcCostCentre({
    id: 3,
    label: `render`,
    module: `Render`,
    src_loc: `src/Render.hs:8:1-6`,
  }),
]

// The profiler sampled `main`'s callees, never `main` itself.
const profile = () =>
  makeGhcJsonProfile({
    costCentres: COST_CENTRES,
    profile: makeGhcProfileNode({
      id: 1,
      entries: 1,
      children: [
        makeGhcProfileNode({ id: 2, entries: 4, ticks: 3, alloc: 800 }),
        makeGhcProfileNode({ id: 3, entries: 2, ticks: 1, alloc: 200 }),
      ],
    }),
  })

describe(`matches`, () => {
  test(`accepts a profile`, () => {
    expect(ghcJsonProfileConverter.matches(profile())).toBe(true)
  })

  test(`rejects null`, () => {
    expect(ghcJsonProfileConverter.matches(null)).toBe(false)
  })

  test(`rejects a profile missing its cost centres`, () => {
    expect(
      ghcJsonProfileConverter.matches({ total_ticks: 1, profile: {} }),
    ).toBe(false)
  })

  test(`rejects a profile missing its tree`, () => {
    expect(
      ghcJsonProfileConverter.matches({ total_ticks: 1, cost_centres: [] }),
    ).toBe(false)
  })

  test(`rejects a profile whose tree is an array`, () => {
    expect(
      ghcJsonProfileConverter.matches({
        total_ticks: 1,
        cost_centres: [],
        profile: [],
      }),
    ).toBe(false)
  })
})

describe(`parse`, () => {
  test(`rejects a tree referencing a cost centre the profile never defined`, () => {
    expect(() =>
      parseGhcJsonProfile(
        makeGhcJsonProfile({
          costCentres: [],
          profile: makeGhcProfileNode({ id: 7, ticks: 1 }),
        }),
      ),
    ).toThrow(`cost-centre stack references undefined cost centre 7`)
  })
})

describe(`convert`, () => {
  test(`separates the ticks the profiler sampled from the allocation it counted`, () => {
    const md = convertJsonToMd(ghcJsonProfileConverter, profile(), options())

    expect(profileTitles(md)).toEqual([
      `Wall time profile`,
      `Allocated heap and entries profile`,
    ])
    // Four ticks at the 1 ms interval, and the bytes and entries the runtime
    // counted, each summed as it counted them.
    expect(summaryLines(md)).toEqual([
      `Took 4.0ms over 4 samples (1.0ms per sample).`,
      `Allocated 1000\u00A0B and recorded 7 entries.`,
    ])
  })

  test(`attributes each cost-centre stack's ticks to its innermost cost centre`, () => {
    const md = convertJsonToMd(ghcJsonProfileConverter, profile(), options())

    expect(selfTimeTables(md)).toEqual([
      [
        {
          '%': `75.0%`,
          Time: `3.0ms`,
          Samples: `3`,
          Function: `Parse.parse`,
          Location: `src/Parse.hs:20:1`,
        },
        {
          '%': `25.0%`,
          Time: `1.0ms`,
          Samples: `1`,
          Function: `Render.render`,
          Location: `src/Render.hs:8:1`,
        },
      ],
    ])
    // A node holds the costs of the stack from the root down to it, so its
    // caller is the node above it in the tree.
    expect(callersTables(md, `Parse.parse`)).toEqual([
      [
        {
          '%': `100.0%`,
          Time: `3.0ms`,
          Samples: `3`,
          Caller: `Main.main`,
          Location: `app/Main.hs:12:1`,
        },
      ],
    ])
  })

  test(`attributes allocation to a cost-centre stack the profiler never sampled`, () => {
    const md = convertJsonToMd(
      ghcJsonProfileConverter,
      makeGhcJsonProfile({
        costCentres: COST_CENTRES,
        profile: makeGhcProfileNode({
          id: 1,
          entries: 1,
          children: [
            makeGhcProfileNode({ id: 2, entries: 4, ticks: 3, alloc: 800 }),
            // Allocating without ever being sampled is the common case: the
            // runtime counts every allocation and samples ticks.
            makeGhcProfileNode({ id: 3, entries: 2, alloc: 200 }),
          ],
        }),
      }),
      options(),
    )

    expect(selfSizeTables(md, `Allocated heap`)).toEqual([
      [
        {
          '%': `80.0%`,
          Size: `800 B`,
          Function: `Parse.parse`,
          Location: `src/Parse.hs:20:1`,
        },
        {
          '%': `20.0%`,
          Size: `200 B`,
          Function: `Render.render`,
          Location: `src/Render.hs:8:1`,
        },
      ],
    ])
  })

  test(`attributes allocation to a cost-centre stack the program entered no times`, () => {
    const md = convertJsonToMd(
      ghcJsonProfileConverter,
      makeGhcJsonProfile({
        costCentres: COST_CENTRES,
        profile: makeGhcProfileNode({
          id: 1,
          entries: 1,
          children: [
            makeGhcProfileNode({ id: 2, entries: 4, ticks: 3, alloc: 800 }),
            // A stack the runtime allocated in without counting an entry into
            // it, as it does for a constant applicative form.
            makeGhcProfileNode({ id: 3, ticks: 1, alloc: 200 }),
          ],
        }),
      }),
      options(),
    )

    expect(summaryLines(md)).toEqual([
      `Took 4.0ms over 4 samples (1.0ms per sample).`,
      `Allocated 1000\u00A0B and recorded 5 entries.`,
    ])
    expect(selfSizeTables(md, `Allocated heap`)).toEqual([
      [
        {
          '%': `80.0%`,
          Size: `800 B`,
          Function: `Parse.parse`,
          Location: `src/Parse.hs:20:1`,
        },
        {
          '%': `20.0%`,
          Size: `200 B`,
          Function: `Render.render`,
          Location: `src/Render.hs:8:1`,
        },
      ],
    ])
  })

  test(`counts entries into a cost-centre stack that allocated nothing`, () => {
    const md = convertJsonToMd(
      ghcJsonProfileConverter,
      makeGhcJsonProfile({
        costCentres: COST_CENTRES,
        profile: makeGhcProfileNode({
          id: 1,
          entries: 1,
          children: [
            makeGhcProfileNode({ id: 2, entries: 4, ticks: 3, alloc: 800 }),
            makeGhcProfileNode({ id: 3, entries: 2, ticks: 1 }),
          ],
        }),
      }),
      options(),
    )

    expect(rankingTables(md, `Entries`, `Self entries`)).toEqual([
      [
        {
          '%': `57.1%`,
          Entries: `4`,
          Function: `Parse.parse`,
          Location: `src/Parse.hs:20:1`,
        },
        {
          '%': `28.6%`,
          Entries: `2`,
          Function: `Render.render`,
          Location: `src/Render.hs:8:1`,
        },
        {
          '%': `14.3%`,
          Entries: `1`,
          Function: `Main.main`,
          Location: `app/Main.hs:12:1`,
        },
      ],
    ])
  })

  test(`locates a cost centre at the position its source span starts`, () => {
    const md = convertJsonToMd(
      ghcJsonProfileConverter,
      makeGhcJsonProfile({
        costCentres: [
          makeGhcCostCentre({ id: 1, label: `main`, module: `Main` }),
          makeGhcCostCentre({
            id: 2,
            label: `alexScan`,
            module: `Lexer`,
            // GHC compiles a generated source as readily as a `.hs` one.
            src_loc: `dist/build/Lexer.x:(40,1)-(52,9)`,
          }),
          // The runtime's own cost centres have no source, so they are located
          // nowhere rather than at the placeholder GHC writes.
          makeGhcCostCentre({
            id: 3,
            label: `GC`,
            module: `GC`,
            src_loc: `<built-in>`,
          }),
        ],
        profile: makeGhcProfileNode({
          id: 1,
          children: [
            makeGhcProfileNode({ id: 2, entries: 1, ticks: 3, alloc: 300 }),
            makeGhcProfileNode({ id: 3, entries: 1, ticks: 1, alloc: 100 }),
          ],
        }),
      }),
      options(),
    )

    expect(selfTimeTables(md)).toEqual([
      [
        {
          '%': `75.0%`,
          Time: `3.0ms`,
          Samples: `3`,
          Function: `Lexer.alexScan`,
          Location: `dist/build/Lexer.x:40:1`,
        },
        {
          '%': `25.0%`,
          Time: `1.0ms`,
          Samples: `1`,
          Function: `GC.GC`,
          Location: `<unknown>`,
        },
      ],
    ])
  })

  test(`a tree deeper than the call stack limit parses`, () => {
    // The walk is iterative, so a program whose recursion the profiler
    // followed cannot overflow the stack.
    const depth = 200_000
    let node = makeGhcProfileNode({ id: 1, ticks: 1 })
    for (let remaining = depth; remaining > 0; remaining--) {
      node = makeGhcProfileNode({ id: 1, children: [node] })
    }

    const [timeProfile] = parseGhcJsonProfile(
      makeGhcJsonProfile({
        costCentres: [
          makeGhcCostCentre({ id: 1, label: `loop`, module: `Main` }),
        ],
        profile: node,
      }),
    )

    expect([...timeProfile!.observations]).toEqual([
      {
        id: depth,
        values: [1000],
        frameIndices: Array.from({ length: depth + 1 }, () => 0),
        count: 1,
      },
    ])
  })
})

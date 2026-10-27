import { describe, expect, test } from 'vitest'
import { BYTES_METRIC } from '../modalities/metrics.ts'
import type { TraceInstant, TraceSpan } from '../modalities/trace/type.ts'
import {
  normalizeV8TraceEvent,
  v8TraceEventCategory,
} from './v8-trace-events.ts'

const GC_CATEGORIES = [`devtools.timeline`, `disabled-by-default-v8.gc`]

describe(`v8TraceEventCategory`, () => {
  test.each([
    `V8.GC_SCAVENGER_SCAVENGE`,
    `V8.GC_MC_INCREMENTAL`,
    `V8.GC_HEAP_PROLOGUE`,
  ])(`the collector scope %s is a pause`, name => {
    expect(
      v8TraceEventCategory({ name, declaredCategories: GC_CATEGORIES }),
    ).toBe(`garbage-collection-pause`)
  })

  test.each([
    `V8.GC_SCAVENGER_BACKGROUND_SCAVENGE_PARALLEL`,
    `V8.GC_MC_BACKGROUND_MARKING`,
    `V8.GC_BACKGROUND_UNPARK`,
  ])(`the helper thread scope %s is collection beside the program`, name => {
    expect(
      v8TraceEventCategory({ name, declaredCategories: GC_CATEGORIES }),
    ).toBe(`garbage-collection`)
  })

  test.each([
    `Major concurrent marking rescheduled`,
    `Parallel scavenge started`,
    `Sweeper::ConcurrentMajorSweeper Finished`,
  ])(`the collector job event %s is collection beside the program`, name => {
    expect(
      v8TraceEventCategory({ name, declaredCategories: GC_CATEGORIES }),
    ).toBe(`garbage-collection`)
  })

  test.each([`V8.GCScavenger`, `V8.GCFinalizeMC`, `V8.GCIncrementalMarking`])(
    `the top-level collector event %s is a pause`,
    name => {
      expect(v8TraceEventCategory({ name, declaredCategories: [`v8`] })).toBe(
        `garbage-collection-pause`,
      )
    },
  )

  test(`a deoptimization is compilation`, () => {
    expect(
      v8TraceEventCategory({
        name: `V8.DeoptimizeCode`,
        declaredCategories: [`v8`],
      }),
    ).toBe(`compilation`)
  })

  test(`an event of the v8.execute category is script`, () => {
    expect(
      v8TraceEventCategory({
        name: `RunMicrotasks`,
        declaredCategories: [`v8.execute`],
      }),
    ).toBe(`script`)
  })

  test(`an event V8 does not write has no category`, () => {
    expect(
      v8TraceEventCategory({
        name: `V8.DeserializeIsolate`,
        declaredCategories: [`v8`],
      }),
    ).toBeUndefined()
    expect(
      v8TraceEventCategory({
        name: `fs.sync.read`,
        declaredCategories: [`node`, `node.fs`],
      }),
    ).toBeUndefined()
    expect(v8TraceEventCategory({ name: `V8.GC_SCAVENGER` })).toBeUndefined()
  })
})

describe(`normalizeV8TraceEvent`, () => {
  const collection = (name: string): TraceSpan => ({
    type: `span`,
    name,
    start: 1000,
    duration: 500,
    thread: 0,
    declaredCategories: [`devtools.timeline`, `v8`],
    arguments: {
      type: `allocation failure`,
      usedHeapSizeBefore: 5000,
      usedHeapSizeAfter: 3000,
    },
  })

  test.each([`MinorGC`, `MajorGC`])(
    `%s becomes a collection pause with its cause, reclaimed bytes, and heap readings`,
    name => {
      const span = collection(name)

      expect(normalizeV8TraceEvent(span)).toStrictEqual({
        event: {
          ...span,
          arguments: {},
          category: `garbage-collection-pause`,
          attributes: [
            { key: `cause`, value: `allocation failure` },
            { key: `reclaimed`, value: { amount: 2000, metric: BYTES_METRIC } },
          ],
        },
        readings: [
          {
            type: `reading`,
            gauge: `Heap used before collection`,
            thread: 0,
            metric: BYTES_METRIC,
            time: 1000,
            value: 5000,
          },
          {
            type: `reading`,
            gauge: `Heap used after collection`,
            thread: 0,
            metric: BYTES_METRIC,
            time: 1500,
            value: 3000,
          },
        ],
      })
    },
  )

  test(`a collection the heap grew during reclaimed nothing`, () => {
    const span = collection(`MinorGC`)

    expect(
      normalizeV8TraceEvent({
        ...span,
        arguments: { usedHeapSizeBefore: 3000, usedHeapSizeAfter: 5000 },
      }),
    ).toMatchObject({
      event: {
        attributes: [
          { key: `reclaimed`, value: { amount: 0, metric: BYTES_METRIC } },
        ],
      },
    })
  })

  test(`a collection stating no heap size or cause records neither`, () => {
    const span: TraceSpan = { type: `span`, name: `MinorGC`, start: 0 }

    expect(normalizeV8TraceEvent(span)).toStrictEqual({
      event: {
        ...span,
        arguments: {},
        category: `garbage-collection-pause`,
        attributes: [],
      },
      readings: [],
    })
  })

  test(`an untimed collection's readings are untimed`, () => {
    const { start, duration, ...untimed } = collection(`MinorGC`)

    expect(normalizeV8TraceEvent(untimed)).toMatchObject({
      readings: [
        { gauge: `Heap used before collection`, time: undefined },
        { gauge: `Heap used after collection`, time: undefined },
      ],
    })
  })

  test(`the heap statistics instant loses its JSON document argument`, () => {
    const instant: TraceInstant = {
      type: `instant`,
      name: `V8.GC_Heap_Stats`,
      time: 0,
      arguments: { stats: `{"isolate":"0x148018000"}`, other: `kept` },
    }

    expect(normalizeV8TraceEvent(instant)).toStrictEqual({
      ...instant,
      arguments: { other: `kept` },
    })
  })

  test(`any other event is returned unchanged`, () => {
    const span: TraceSpan = {
      type: `span`,
      name: `V8.GCScavenger`,
      start: 0,
      duration: 1,
      attributes: [{ key: `type`, value: `x` }],
    }
    const instant: TraceInstant = { type: `instant`, name: `MinorGC`, time: 0 }

    expect(normalizeV8TraceEvent(span)).toBe(span)
    // Only a span is a collection.
    expect(normalizeV8TraceEvent(instant)).toBe(instant)
  })
})

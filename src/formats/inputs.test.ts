import { describe, expect, test, vi } from 'vitest'
import { parseExampleFilename } from '../cli/examples.ts'
import { callTreeViolations } from '../modalities/call-stack-profile/testing.ts'
import { expectLogs } from '../testing.ts'
import {
  diffProfiles,
  diffProfilesAsync,
  formatToSpec,
  profileToMd,
  profileToMdAsync,
} from './index.ts'
import {
  detectionLogs,
  injectedFormat,
  injectedInputs,
  readInput,
  smallestInput,
} from './testing.ts'

vi.setConfig({ testTimeout: 125_000 })

const format = injectedFormat()

const inputSets = {
  json: new Set<string>(),
  binary: new Set<string>(),
}
// `current` is a near-identical re-run of `base`, so taking `base` alone keeps
// the auto-detect and diff matrix small.
for (const filename of injectedInputs()) {
  if (parseExampleFilename(filename).variant === `base`) {
    inputSets[formatToSpec[format].type].add(filename)
  }
}

const jsonInputs = [...inputSets.json]
const binaryInputs = [...inputSets.binary]
const allInputs = [...jsonInputs, ...binaryInputs]

// The inputs the input-type matrix converts.
// Reading bytes handed to the pipeline as a string, a `Blob`, or a stream
// happens before the format's parser runs and is the same for every format. The matrix
// takes the project's smallest input because converting every committed one
// would run gigabytes through the pipeline several times over.
const smallestJsonInput = smallestInput(jsonInputs)
const smallestBinaryInput = smallestInput(binaryInputs)
const smallestAnyInput = smallestInput(allInputs)

// These regexes check only that the format was detected and conversion ran end
// to end.
const MARKDOWN_REGEX = /^(?:# |No profiles were recorded\.)/u
const MARKDOWN_DIFF_REGEX = /^(?:# .*diff|No profiles were recorded\.)/iu

// Converting an input is the most expensive step, so the call tree
// invariants are checked on the Markdown this test converts.
test.each(allInputs)(
  `profileToMd auto-detects %s and draws well-formed call trees`,
  filename => {
    const md = profileToMd(readInput(filename), { baseURL: null })

    expect(md).toMatch(MARKDOWN_REGEX)
    expectLogs(detectionLogs(filename, md))
    expect(callTreeViolations(md)).toStrictEqual([])
  },
)

test.each(smallestJsonInput)(
  `profileToMd converts %s from a string`,
  filename => {
    const md = profileToMd(readInput(filename).toString(`utf8`), {
      baseURL: null,
    })

    expect(md).toMatch(MARKDOWN_REGEX)
    expectLogs(detectionLogs(filename, md))
  },
)

test.each(smallestBinaryInput)(
  `profileToMd converts %s from a one-shot Iterable<Uint8Array>`,
  filename => {
    const bytes = new Uint8Array(readInput(filename))
    const iterable = (function* () {
      yield bytes
    })()

    const md = profileToMd(iterable, { baseURL: null })

    expect(md).toMatch(MARKDOWN_REGEX)
    expectLogs(detectionLogs(filename, md))
  },
)

describe.each(smallestAnyInput)(
  `profileToMdAsync auto-detects %s`,
  filename => {
    const content = readInput(filename)

    test(`from Blob`, async () => {
      const blob = new Blob([content])

      const md = await profileToMdAsync(blob, { baseURL: null })

      expect(md).toMatch(MARKDOWN_REGEX)
      expectLogs(detectionLogs(filename, md))
    })

    test(`from ReadableStream`, async () => {
      const stream = new ReadableStream<Uint8Array>({
        start(controller) {
          controller.enqueue(content)
          controller.close()
        },
      })

      const md = await profileToMdAsync(stream, { baseURL: null })

      expect(md).toMatch(MARKDOWN_REGEX)
      expectLogs(detectionLogs(filename, md))
    })
  },
)

test.each(allInputs)(
  `diffProfiles auto-detects %s and produces zero deltas against itself`,
  filename => {
    const content = readInput(filename)

    const md = diffProfiles(content, content, { baseURL: null })

    expect(md).toMatch(MARKDOWN_DIFF_REGEX)
    // No regressions or improvements when diffing an input against itself.
    expect(md).not.toMatch(/Regressions|Improvements/u)
    expectLogs([...detectionLogs(filename, md), ...detectionLogs(filename, md)])
  },
)

test.each(smallestAnyInput)(
  `diffProfilesAsync diffs %s Blob inputs`,
  async filename => {
    const content = readInput(filename)

    const md = await diffProfilesAsync(
      new Blob([content]),
      new Blob([content]),
      { baseURL: null },
    )

    expect(md).toMatch(MARKDOWN_DIFF_REGEX)
    expectLogs([...detectionLogs(filename, md), ...detectionLogs(filename, md)])
  },
)

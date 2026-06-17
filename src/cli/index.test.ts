import { spawn } from 'node:child_process'
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import fs from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { brotliCompressSync, gzipSync } from 'node:zlib'
import { describe, expect, test } from 'vitest'
import { fixturePath } from '../testing/fixtures.ts'

// A fixture converts to a Markdown heading, or — for a valid capture with no
// samples (e.g. a lock profile that saw no contention) — the no-data message.
const MARKDOWN_OR_NO_DATA = /^(?:# |No profiling data found\.)/u

describe.concurrent.each(await fs.readdir(fixturePath()))(`%s`, filename => {
  const path = fixturePath(filename)
  const fileContent = readFileSync(path)

  test(`outputs markdown from a ${filename} file`, async () => {
    const { status, stdout } = await runCli([path])

    expect(status).toBe(0)
    expect(stdout).toMatch(MARKDOWN_OR_NO_DATA)
  })

  test(`reads from stdin and auto-detects format`, async () => {
    const { status, stdout } = await runCli([], fileContent)

    expect(status).toBe(0)
    expect(stdout).toMatch(MARKDOWN_OR_NO_DATA)
  })

  test.each([`--output`, `-o`])(
    `writes output to a file with %s`,
    async flag => {
      const tempPath = join(
        mkdtempSync(join(tmpdir(), `profiler-md-`)),
        `out.md`,
      )

      const { status, stdout } = await runCli([path, flag, tempPath])

      expect(status).toBe(0)
      expect(stdout).toBe(``)
      expect(readFileSync(tempPath, `utf8`)).toMatch(MARKDOWN_OR_NO_DATA)

      rmSync(tempPath, { recursive: true })
    },
  )

  test(`--base-url makes file paths relative to the given directory`, async () => {
    // The fixtures were captured under random nix temp dirs, so their frame
    // paths live under /private/tmp; relativizing to it should strip the prefix.
    const baseURL = `/private/tmp`

    const { stdout } = await runCli([path, `--base-url`, baseURL])

    expect(stdout).not.toContain(baseURL)
  })

  test(`--base-url resolves relative paths`, async () => {
    const [{ stdout: absolute }, { stdout: relative }] = await Promise.all([
      runCli([path, `--base-url`, process.cwd()]),
      runCli([path, `--base-url`, `.`]),
    ])

    expect(relative).toBe(absolute)
  })
})

// These flag behaviors are format-agnostic, so they're checked once against a
// representative profile that has plenty of located `ours` functions rather
// than per fixture (some real fixtures are locationless or have few entries).
describe(`CLI flag behavior`, () => {
  const path = fixturePath(`javascript.node.base.cpuprofile`)

  test(`--top-n limits the number of entries shown`, async () => {
    const [{ stdout: top1 }, { stdout: top5 }] = await Promise.all([
      runCli([path, `--top-n`, `1`]),
      runCli([path, `--top-n`, `5`]),
    ])

    expect(top1.length).toBeLessThan(top5.length)
  })

  test(`--third-party changes which paths are considered third-party`, async () => {
    const { stdout } = await runCli([path, `--third-party`, `**`])

    expect(stdout).not.toContain(`ours`)
  })
})

describe.each([
  { compression: `gzip`, compress: gzipSync, ext: `.gz` },
  { compression: `brotli`, compress: brotliCompressSync, ext: `.br` },
])(`$compression decompression`, ({ compression, compress, ext }) => {
  const raw = readFileSync(fixturePath(`javascript.node.base.cpuprofile`))
  const compressed = compress(raw)
  const expectedMarkdown = /^# CPU profile/u

  test(`auto-decompresses a ${compression} file`, async () => {
    const dir = mkdtempSync(join(tmpdir(), `profiler-md-`))
    const path = join(dir, `javascript.node.base.cpuprofile${ext}`)
    writeFileSync(path, compressed)

    const { status, stdout } = await runCli([path])

    expect(status).toBe(0)
    expect(stdout).toMatch(expectedMarkdown)

    rmSync(dir, { recursive: true })
  })

  test.skipIf(compression === `brotli`)(
    `auto-decompresses ${compression} from stdin`,
    async () => {
      const { status, stdout } = await runCli([], compressed)

      expect(status).toBe(0)
      expect(stdout).toMatch(expectedMarkdown)
    },
  )
})

test(`--source-maps applies source maps to profile locations`, async () => {
  const dir = mkdtempSync(join(tmpdir(), `profiler-md-`))
  const sourceMapPath = join(dir, `tsc-workload.mjs.map`)
  // Maps the `typeCheckProject` frame in the node CPU profile fixture
  // (tsc-workload.mjs line 2 col 32, 0-based) to /mapped/original.ts line 1
  // col 0.
  const mappings = `${`;`.repeat(2)}gCAAA`
  writeFileSync(
    sourceMapPath,
    JSON.stringify({
      version: 3,
      file: `file:///private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs`,
      sources: [`/mapped/original.ts`],
      names: [],
      mappings,
    }),
  )

  const { status, stdout } = await runCli([
    fixturePath(`javascript.node.base.cpuprofile`),
    `--source-maps`,
    `${dir}/*.map`,
  ])

  expect(status).toBe(0)
  expect(stdout).toContain(`/mapped/original.ts`)
  expect(stdout).not.toContain(dir)

  rmSync(dir, { recursive: true })
})

test(`--source-maps applies inline source maps from files`, async () => {
  const dir = mkdtempSync(join(tmpdir(), `profiler-md-`))
  // Maps the `typeCheckProject` frame in the node CPU profile fixture
  // (tsc-workload.mjs line 2 col 32, 0-based) to /mapped/original.ts line 1
  // col 0.
  const mappings = `${`;`.repeat(2)}gCAAA`
  const sourceMap = JSON.stringify({
    version: 3,
    file: `file:///private/tmp/nix-shell.RhDkiq/profiler-md-fixtures.0q5jPY/zod/tsc-workload.mjs`,
    sources: [`/mapped/original.ts`],
    names: [],
    mappings,
  })
  const base64 = Buffer.from(sourceMap).toString(`base64`)
  const jsPath = join(dir, `index.js`)
  writeFileSync(
    jsPath,
    `var x = 1;\n//# sourceMappingURL=data:application/json;base64,${base64}\n`,
  )

  const { status, stdout } = await runCli([
    fixturePath(`javascript.node.base.cpuprofile`),
    `--source-maps`,
    `${dir}/*.js`,
  ])

  expect(status).toBe(0)
  expect(stdout).toContain(`/mapped/original.ts`)

  rmSync(dir, { recursive: true })
})

test(`--match changes how entries match across diffed profiles`, async () => {
  // Collapsing every location to `x` must not break self-diff matching: every
  // entry still matches its counterpart, so there are no deltas.
  const { status, stdout } = await runCli([
    fixturePath(`javascript.node.base.cpuprofile`),
    fixturePath(`javascript.node.base.cpuprofile`),
    `--match`,
    `.+=x`,
  ])

  expect(status).toBe(0)
  expect(stdout).not.toMatch(/Regressions|Progressions/u)
})

test.each([
  {
    scenario: `two profiles`,
    baseFixture: `javascript.node.base.cpuprofile`,
    currentFixture: `javascript.bun.base.cpuprofile`,
  },
  {
    scenario: `two heap snapshots`,
    baseFixture: `javascript.node.base.heapsnapshot`,
    currentFixture: `javascript.node.base.heapsnapshot`,
  },
])(
  `diffs $scenario passed as positional arguments`,
  async ({ baseFixture, currentFixture }) => {
    const { status, stdout } = await runCli([
      fixturePath(baseFixture),
      fixturePath(currentFixture),
    ])

    expect(status).toBe(0)
    expect(stdout).toMatch(/^# .* diff\n/u)
  },
)

test.each([
  {
    scenario: `stdin with unrecognizable content`,
    args: [],
    input: `{}`,
    expectedStderr: `Could not detect profile format`,
    expectedStatus: 1,
  },
  {
    scenario: `unknown --format value`,
    args: [`--format`, `unknown-type`],
    expectedStderr: `"unknown-type"`,
    expectedStatus: 2,
  },
  {
    scenario: `nonexistent file`,
    args: [`nonexistent.cpuprofile`],
    expectedStderr: `Unable to open file as blob`,
    expectedStatus: 1,
  },
  {
    scenario: `unknown flag`,
    args: [`--unknown-flag`],
    expectedStderr: `--unknown-flag`,
    expectedStatus: 2,
  },
  {
    scenario: `diffing a profile against a heap snapshot`,
    args: [
      fixturePath(`javascript.node.base.cpuprofile`),
      fixturePath(`javascript.node.base.heapsnapshot`),
    ],
    expectedStderr: `cannot diff a profile against a snapshot`,
    expectedStatus: 1,
  },
  {
    scenario: `--match without an equals sign`,
    args: [
      fixturePath(`javascript.node.base.cpuprofile`),
      `--match`,
      `no-equals-sign`,
    ],
    expectedStderr: `expected REGEX=REPLACEMENT`,
    expectedStatus: 2,
  },
  {
    scenario: `--match with an invalid regex`,
    args: [fixturePath(`javascript.node.base.cpuprofile`), `--match`, `[=x`],
    expectedStderr: `Invalid --match regex`,
    expectedStatus: 2,
  },
  {
    scenario: `more than two positional arguments`,
    args: [
      fixturePath(`javascript.node.base.cpuprofile`),
      fixturePath(`javascript.bun.base.cpuprofile`),
      fixturePath(`javascript.deno.base.cpuprofile`),
    ],
    expectedStderr: `cannot be used together`,
    expectedStatus: 2,
  },
])(
  `errors on $scenario`,
  async ({ args, input, expectedStderr, expectedStatus }) => {
    const { status, stderr } = await runCli(args, input)

    expect(status).toBe(expectedStatus)
    expect(stderr).toContain(expectedStderr)
  },
)

const runCli = (args: string[], input?: string | Uint8Array) =>
  new Promise<{ status: number | null; stdout: string; stderr: string }>(
    (resolve, reject) => {
      const child = spawn(process.execPath, [cliPath, ...args])

      const stdout: Buffer[] = []
      const stderr: Buffer[] = []
      child.stdout.on(`data`, (chunk: Buffer) => stdout.push(chunk))
      child.stderr.on(`data`, (chunk: Buffer) => stderr.push(chunk))
      child.on(`error`, reject)
      child.on(`close`, status =>
        resolve({
          status,
          stdout: Buffer.concat(stdout).toString(`utf8`),
          stderr: Buffer.concat(stderr).toString(`utf8`),
        }),
      )

      child.stdin.end(input)
    },
  )

const cliPath = join(import.meta.dirname, `index.ts`)

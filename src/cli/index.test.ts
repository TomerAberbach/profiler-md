import { spawn } from 'node:child_process'
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import fs from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { brotliCompressSync, gzipSync } from 'node:zlib'
import { expect, test } from 'vitest'
import { fixturePath } from '../testing/fixtures.ts'

test.concurrent.each(await fs.readdir(fixturePath()))(
  `outputs markdown from a %s file`,
  async filename => {
    const { status, stdout } = await runCli([fixturePath(filename)])

    expect(status).toBe(0)
    expect(stdout).toMatch(/^# /u)
  },
)

// A sample fixture is enough to exercise these general flags.
const cpuProfilePath = fixturePath(`node.base.cpuprofile`)
const cpuProfileContent = readFileSync(cpuProfilePath)

test.concurrent(`reads from stdin and auto-detects format`, async () => {
  const { status, stdout } = await runCli([], cpuProfileContent)

  expect(status).toBe(0)
  expect(stdout).toMatch(/^# /u)
})

test.concurrent.each([`--output`, `-o`])(
  `writes output to a file with %s`,
  async flag => {
    const tempPath = join(mkdtempSync(join(tmpdir(), `profiler-md-`)), `out.md`)

    const { status, stdout } = await runCli([cpuProfilePath, flag, tempPath])

    expect(status).toBe(0)
    expect(stdout).toBe(``)
    expect(readFileSync(tempPath, `utf8`)).toMatch(/^# /u)

    rmSync(tempPath, { recursive: true })
  },
)

test.concurrent(`--top-n limits the number of entries shown`, async () => {
  const [{ stdout: top1 }, { stdout: top5 }] = await Promise.all([
    runCli([cpuProfilePath, `--top-n`, `1`]),
    runCli([cpuProfilePath, `--top-n`, `5`]),
  ])

  expect(top1.length).toBeLessThan(top5.length)
})

test.concurrent(
  `--base-url makes file paths relative to the given directory`,
  async () => {
    const baseURL = `/Users/tomer/Documents/work/code`

    const { stdout } = await runCli([cpuProfilePath, `--base-url`, baseURL])

    expect(stdout).not.toContain(baseURL)
  },
)

test.concurrent(`--base-url resolves relative paths`, async () => {
  const [{ stdout: absolute }, { stdout: relative }] = await Promise.all([
    runCli([cpuProfilePath, `--base-url`, process.cwd()]),
    runCli([cpuProfilePath, `--base-url`, `.`]),
  ])

  expect(relative).toBe(absolute)
})

test.concurrent(
  `--third-party changes which paths are considered third-party`,
  async () => {
    const { stdout } = await runCli([cpuProfilePath, `--third-party`, `**`])

    expect(stdout).not.toContain(`ours`)
  },
)

const expectedCpuProfileMarkdown = /^# CPU profile/u

test.concurrent.each([
  { compression: `gzip`, compress: gzipSync, ext: `.gz` },
  { compression: `brotli`, compress: brotliCompressSync, ext: `.br` },
])(`auto-decompresses a $compression file`, async ({ compress, ext }) => {
  const dir = mkdtempSync(join(tmpdir(), `profiler-md-`))
  const path = join(dir, `node.base.cpuprofile${ext}`)
  writeFileSync(path, compress(cpuProfileContent))

  const { status, stdout } = await runCli([path])

  expect(status).toBe(0)
  expect(stdout).toMatch(expectedCpuProfileMarkdown)

  rmSync(dir, { recursive: true })
})

// Only gzip is detectable from stdin, where there is no extension, since it has
// a magic-number header and brotli does not.
test.concurrent(`auto-decompresses gzip from stdin`, async () => {
  const { status, stdout } = await runCli([], gzipSync(cpuProfileContent))

  expect(status).toBe(0)
  expect(stdout).toMatch(expectedCpuProfileMarkdown)
})

test.concurrent(
  `--source-maps applies source maps to profile locations`,
  async () => {
    const dir = mkdtempSync(join(tmpdir(), `profiler-md-`))
    const sourceMapPath = join(dir, `index.ts.map`)
    // Maps file:///.../uneval/src/index.ts line 204 col 25 (0-based) to
    // /mapped/original.ts line 1 col 0.
    const mappings = `${`;`.repeat(204)}yBAAA`
    writeFileSync(
      sourceMapPath,
      JSON.stringify({
        version: 3,
        file: `file:///Users/tomer/Documents/work/code/uneval/src/index.ts`,
        sources: [`/mapped/original.ts`],
        names: [],
        mappings,
      }),
    )

    const { status, stdout } = await runCli([
      fixturePath(`node.base.cpuprofile`),
      `--source-maps`,
      `${dir}/*.map`,
    ])

    expect(status).toBe(0)
    expect(stdout).toContain(`/mapped/original.ts`)
    expect(stdout).not.toContain(dir)

    rmSync(dir, { recursive: true })
  },
)

test.concurrent(
  `--source-maps applies inline source maps from files`,
  async () => {
    const dir = mkdtempSync(join(tmpdir(), `profiler-md-`))
    // Maps file:///.../uneval/src/index.ts line 204 col 25 (0-based) to
    // /mapped/original.ts line 1 col 0.
    const mappings = `${`;`.repeat(204)}yBAAA`
    const sourceMap = JSON.stringify({
      version: 3,
      file: `file:///Users/tomer/Documents/work/code/uneval/src/index.ts`,
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
      fixturePath(`node.base.cpuprofile`),
      `--source-maps`,
      `${dir}/*.js`,
    ])

    expect(status).toBe(0)
    expect(stdout).toContain(`/mapped/original.ts`)

    rmSync(dir, { recursive: true })
  },
)

test.concurrent(
  `--match changes how entries match across diffed profiles`,
  async () => {
    // Collapsing every location to `x` must not break self-diff matching: every
    // entry still matches its counterpart, so there are no deltas.
    const { status, stdout } = await runCli([
      fixturePath(`node.base.cpuprofile`),
      fixturePath(`node.base.cpuprofile`),
      `--match`,
      `.+=x`,
    ])

    expect(status).toBe(0)
    expect(stdout).not.toMatch(/Regressions|Progressions/u)
  },
)

test.concurrent.each([
  {
    scenario: `two profiles`,
    baseFixture: `node.base.cpuprofile`,
    currentFixture: `bun.cpuprofile`,
  },
  {
    scenario: `two heap snapshots`,
    baseFixture: `node.heapsnapshot`,
    currentFixture: `node.heapsnapshot`,
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

test.concurrent.each([
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
      fixturePath(`node.base.cpuprofile`),
      fixturePath(`node.heapsnapshot`),
    ],
    expectedStderr: `cannot diff a profile against a snapshot`,
    expectedStatus: 1,
  },
  {
    scenario: `--match without an equals sign`,
    args: [fixturePath(`node.base.cpuprofile`), `--match`, `no-equals-sign`],
    expectedStderr: `expected REGEX=REPLACEMENT`,
    expectedStatus: 2,
  },
  {
    scenario: `--match with an invalid regex`,
    args: [fixturePath(`node.base.cpuprofile`), `--match`, `[=x`],
    expectedStderr: `Invalid --match regex`,
    expectedStatus: 2,
  },
  {
    scenario: `more than two positional arguments`,
    args: [
      fixturePath(`node.base.cpuprofile`),
      fixturePath(`bun.cpuprofile`),
      fixturePath(`deno.cpuprofile`),
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

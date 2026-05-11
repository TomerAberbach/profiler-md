import { spawn } from 'node:child_process'
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import fs from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { brotliCompressSync, gzipSync } from 'node:zlib'
import { describe, expect, test } from 'vitest'
import { fixturePath } from '../testing/fixtures.ts'

describe.concurrent.each(await fs.readdir(fixturePath()))(`%s`, filename => {
  const path = fixturePath(filename)
  const fileContent = readFileSync(path)

  test(`outputs markdown from a ${filename} file`, async () => {
    const { status, stdout } = await runCli([path])

    expect(status).toBe(0)
    expect(stdout).toMatch(/^# /u)
  })

  test(`reads from stdin and auto-detects format`, async () => {
    const { status, stdout } = await runCli([], fileContent)

    expect(status).toBe(0)
    expect(stdout).toMatch(/^# /u)
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
      expect(readFileSync(tempPath, `utf8`)).toMatch(/^# /u)

      rmSync(tempPath, { recursive: true })
    },
  )

  test(`--top-n limits the number of entries shown`, async () => {
    const [{ stdout: top1 }, { stdout: top5 }] = await Promise.all([
      runCli([path, `--top-n`, `1`]),
      runCli([path, `--top-n`, `5`]),
    ])

    expect(top1.length).toBeLessThan(top5.length)
  })

  test(`--cwd makes file paths relative to the given directory`, async () => {
    const cwd = `/Users/tomer/Documents/work/code`

    const { stdout } = await runCli([path, `--cwd`, cwd])

    expect(stdout).not.toContain(cwd)
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
  const raw = readFileSync(fixturePath(`node.cpuprofile`))
  const compressed = compress(raw)
  const expectedMarkdown = /^# CPU profile/u

  test(`auto-decompresses a ${compression} file`, async () => {
    const dir = mkdtempSync(join(tmpdir(), `profiler-md-`))
    const path = join(dir, `node.cpuprofile${ext}`)
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
  const sourceMapPath = join(dir, `index.ts.map`)
  // Maps file:///.../uneval/src/index.ts line 204 col 25 (0-based) to
  // /mapped/original.ts line 1 col 0.
  const mappings = `${`;`.repeat(203)}yBAAA`
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
    fixturePath(`node.cpuprofile`),
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
  // Maps file:///.../uneval/src/index.ts line 204 col 25 (0-based) to
  // /mapped/original.ts line 1 col 0.
  const mappings = `${`;`.repeat(203)}yBAAA`
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
    fixturePath(`node.cpuprofile`),
    `--source-maps`,
    `${dir}/*.js`,
  ])

  expect(status).toBe(0)
  expect(stdout).toContain(`/mapped/original.ts`)

  rmSync(dir, { recursive: true })
})

test.each([
  {
    scenario: `stdin with unrecognizable content`,
    args: [],
    input: `{}`,
    expectedStderr: `could not detect profile format from content`,
    expectedStatus: 2,
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

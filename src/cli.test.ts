import { spawnSync } from 'node:child_process'
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { brotliCompressSync, gzipSync } from 'node:zlib'
import { describe, expect, test } from 'vitest'
import { fixturePath } from './testing/fixtures.ts'

describe.each([
  {
    type: `pprof`,
    filename: `node.pprof`,
    expectedMarkdown: /^# CPU profile/u,
  },
  {
    type: `speedscope`,
    filename: `node.speedscope.json`,
    expectedMarkdown: /^# CPU profile/u,
  },
  {
    type: `v8-cpu-profile`,
    filename: `node.cpuprofile`,
    expectedMarkdown: /^# CPU profile/u,
  },
  {
    type: `v8-heap-profile`,
    filename: `node.heapprofile`,
    expectedMarkdown: /^# Heap profile/u,
  },
  {
    type: `v8-heap-snapshot`,
    filename: `node.heapsnapshot`,
    expectedMarkdown: /^# Heap snapshot/u,
  },
])(`$type`, ({ type, filename, expectedMarkdown }) => {
  const path = fixturePath(filename)
  const fileContent = readFileSync(path)

  test(`outputs markdown from a ${filename} file`, () => {
    const { status, stdout } = runCli([path])

    expect(status).toBe(0)
    expect(stdout).toMatch(expectedMarkdown)
  })

  test.each([`--type`, `-t`])(`reads from stdin when %s is given`, flag => {
    const { status, stdout } = runCli([flag, type], fileContent)

    expect(status).toBe(0)
    expect(stdout).toMatch(expectedMarkdown)
  })

  test(`reads from stdin and auto-detects format`, () => {
    const { status, stdout } = runCli([], fileContent)

    expect(status).toBe(0)
    expect(stdout).toMatch(expectedMarkdown)
  })

  test.each([`--output`, `-o`])(`writes output to a file with %s`, flag => {
    const tempPath = join(mkdtempSync(join(tmpdir(), `profiler-md-`)), `out.md`)

    const { status, stdout } = runCli([path, flag, tempPath])

    expect(status).toBe(0)
    expect(stdout).toBe(``)
    expect(readFileSync(tempPath, `utf8`)).toMatch(expectedMarkdown)

    rmSync(tempPath, { recursive: true })
  })

  test(`--top-n limits the number of entries shown`, () => {
    const { stdout: top1 } = runCli([path, `--top-n`, `1`])
    const { stdout: top5 } = runCli([path, `--top-n`, `5`])

    expect(top1.length).toBeLessThan(top5.length)
  })

  test(`--cwd makes file paths relative to the given directory`, () => {
    const cwd = `/Users/tomer/Documents/work/code`

    const { stdout: withoutCwd } = runCli([path])
    const { stdout: withCwd } = runCli([path, `--cwd`, cwd])

    expect(withoutCwd).toContain(cwd)
    expect(withCwd).not.toContain(cwd)
  })

  test.skipIf(type === `v8-heap-snapshot`)(
    `--third-party changes which paths are considered third-party`,
    () => {
      const { stdout: withDefaultThirdParty } = runCli([path])
      const { stdout: withCustomThirdParty } = runCli([
        path,
        `--third-party`,
        `**`,
      ])

      expect(withDefaultThirdParty).toContain(`ours`)
      expect(withCustomThirdParty).not.toContain(`ours`)
    },
  )
})

describe.each([
  { compression: `gzip`, compress: gzipSync, ext: `.gz` },
  { compression: `brotli`, compress: brotliCompressSync, ext: `.br` },
])(`$compression decompression`, ({ compression, compress, ext }) => {
  const raw = readFileSync(fixturePath(`node.cpuprofile`))
  const compressed = compress(raw)
  const expectedMarkdown = /^# CPU profile/u

  test(`auto-decompresses a ${compression} file`, () => {
    const dir = mkdtempSync(join(tmpdir(), `profiler-md-`))
    const path = join(dir, `node.cpuprofile${ext}`)
    writeFileSync(path, compressed)

    const { status, stdout } = runCli([path])

    expect(status).toBe(0)
    expect(stdout).toMatch(expectedMarkdown)

    rmSync(dir, { recursive: true })
  })

  test.skipIf(compression === `brotli`)(
    `auto-decompresses ${compression} from stdin`,
    () => {
      const { status, stdout } = runCli([], compressed)

      expect(status).toBe(0)
      expect(stdout).toMatch(expectedMarkdown)
    },
  )
})

test(`--source-maps applies source maps to profile locations`, () => {
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

  const { status, stdout } = runCli([
    fixturePath(`node.cpuprofile`),
    `--source-maps`,
    `${dir}/*.map`,
  ])

  expect(status).toBe(0)
  expect(stdout).toContain(`/mapped/original.ts`)
  expect(stdout).not.toContain(dir)

  rmSync(dir, { recursive: true })
})

test(`--source-maps applies inline source maps from files`, () => {
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

  const { status, stdout } = runCli([
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
    scenario: `unknown --type value`,
    args: [`--type`, `unknown-type`],
    expectedStderr: `unknown profile type "unknown-type"`,
    expectedStatus: 2,
  },
  {
    scenario: `nonexistent file`,
    args: [`nonexistent.cpuprofile`],
    expectedStderr: `ENOENT`,
    expectedStatus: 1,
  },
  {
    scenario: `unknown flag`,
    args: [`--unknown-flag`],
    expectedStderr: `Unknown flag`,
    expectedStatus: 2,
  },
])(`errors on $scenario`, ({ args, input, expectedStderr, expectedStatus }) => {
  const { status, stderr } = runCli(args, input)

  expect(status).toBe(expectedStatus)
  expect(stderr).toContain(expectedStderr)
})

const runCli = (args: string[], input?: string | Uint8Array) =>
  spawnSync(process.execPath, [cliPath, ...args], { encoding: `utf8`, input })

const cliPath = join(import.meta.dirname, `cli.ts`)

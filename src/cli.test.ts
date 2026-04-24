import { spawnSync } from 'node:child_process'
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { brotliCompressSync, gzipSync } from 'node:zlib'
import { describe, expect, test } from 'vitest'
import { fixturePath } from './testing/fixtures.ts'

describe.each([
  {
    type: `v8-cpu-profile`,
    filename: `example.cpuprofile`,
    expectedMarkdown: /^# CPU profile/u,
  },
  {
    type: `v8-heap-profile`,
    filename: `example.heapprofile`,
    expectedMarkdown: /^# Heap profile/u,
  },
  {
    type: `v8-heap-snapshot`,
    filename: `example.heapsnapshot`,
    expectedMarkdown: /^# Heap snapshot/u,
  },
  {
    type: `pprof`,
    filename: `example.pprof`,
    expectedMarkdown: /^# CPU profile/u,
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
  const raw = readFileSync(fixturePath(`example.cpuprofile`))
  const compressed = compress(raw)
  const expectedMarkdown = /^# CPU profile/u

  test(`auto-decompresses a ${compression} file`, () => {
    const dir = mkdtempSync(join(tmpdir(), `profiler-md-`))
    const path = join(dir, `example.cpuprofile${ext}`)
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

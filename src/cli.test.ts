import { spawnSync } from 'node:child_process'
import { mkdtempSync, readFileSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { expect, test } from 'vitest'

const cliPath = join(import.meta.dirname, `cli.ts`)
const v8CpuProfilePath = join(
  import.meta.dirname,
  `fixtures/example.cpuprofile`,
)

const runCli = (args: string[], input?: string) =>
  spawnSync(process.execPath, [cliPath, ...args], { encoding: `utf8`, input })

test(`outputs markdown from a .cpuprofile file`, () => {
  const { status, stdout } = runCli([v8CpuProfilePath])

  expect(status).toBe(0)
  expect(stdout).toMatch(/^# CPU Profile/u)
})

test.each([`--type`, `-t`])(`reads from stdin when %s is given`, flag => {
  const input = readFileSync(v8CpuProfilePath, `utf8`)

  const { status, stdout } = runCli([flag, `v8-cpu`], input)

  expect(status).toBe(0)
  expect(stdout).toMatch(/^# CPU Profile/u)
})

test.each([`--output`, `-o`])(`writes output to a file with %s`, flag => {
  const tempPath = join(mkdtempSync(join(tmpdir(), `profiler-md-`)), `out.md`)

  const { status, stdout } = runCli([v8CpuProfilePath, flag, tempPath])

  expect(status).toBe(0)
  expect(stdout).toBe(``)
  expect(readFileSync(tempPath, `utf8`)).toMatch(/^# CPU Profile/u)
  rmSync(tempPath, { recursive: true })
})

test(`--top-n limits the number of entries shown`, () => {
  const { stdout: top1 } = runCli([v8CpuProfilePath, `--top-n`, `1`])
  const { stdout: top5 } = runCli([v8CpuProfilePath, `--top-n`, `5`])

  expect(top1.length).toBeLessThan(top5.length)
})

test(`--cwd makes file paths relative to the given directory`, () => {
  const cwd = `/Users/tomer/Documents/work/code/uneval`

  const { stdout: withoutCwd } = runCli([v8CpuProfilePath])
  const { stdout: withCwd } = runCli([v8CpuProfilePath, `--cwd`, cwd])

  expect(withoutCwd).toContain(`${cwd}/src/index.ts`)
  expect(withCwd).not.toContain(`${cwd}/src/index.ts`)
  expect(withCwd).toContain(`src/index.ts`)
})

test(`--third-party changes which paths are considered third-party`, () => {
  const { stdout: withDefaultThirdParty } = runCli([v8CpuProfilePath])
  const { stdout: withCustomThirdParty } = runCli([
    v8CpuProfilePath,
    `--third-party`,
    `**`,
  ])

  expect(withDefaultThirdParty).toContain(`ours`)
  expect(withCustomThirdParty).not.toContain(`ours`)
})

test.each([
  {
    scenario: `stdin without --type`,
    args: [],
    expectedStderr: `--type is required`,
    expectedStatus: 2,
  },
  {
    scenario: `unknown --type value`,
    args: [`--type`, `unknown-type`],
    expectedStderr: `unknown profile type "unknown-type"`,
    expectedStatus: 2,
  },
  {
    scenario: `unrecognized file extension`,
    args: [`file.unknown`],
    expectedStderr: `unrecognized file extension ".unknown"`,
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
])(`errors on $scenario`, ({ args, expectedStderr, expectedStatus }) => {
  const { status, stderr } = runCli(args)

  expect(status).toBe(expectedStatus)
  expect(stderr).toContain(expectedStderr)
})

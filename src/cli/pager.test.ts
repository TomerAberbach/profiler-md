import { mkdtemp, readFile, rm, writeFile } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { afterAll, afterEach, beforeAll, expect, test, vi } from 'vitest'
import { normalizeLogger } from '../logger.ts'
import { expectLogs } from '../testing.ts'
import type { Output } from './output.ts'
import { openPager } from './pager.ts'

let dir: string

beforeAll(async () => {
  dir = await mkdtemp(join(tmpdir(), `profiler-md-pager-`))
})

afterEach(() => {
  vi.unstubAllEnvs()
  vi.restoreAllMocks()
})

afterAll(() => rm(dir, { recursive: true }))

const page = async (text: string): Promise<string[]> => {
  const fallback = recordingOutput()

  const output = await openPager(fallback, normalizeLogger({}, `none`))
  expect(output).not.toBeNull()
  await output!.write(text)

  return fallback.texts
}

// Runs the script through `sh` instead of executing it, because Linux refuses
// to execute a file that a child forked by a concurrent test's spawn still
// holds open for writing (ETXTBSY).
const pagerScript = async (name: string, body: string): Promise<string> => {
  const path = join(dir, name)
  await writeFile(path, `${body}\n`)
  return `sh ${path}`
}

const recordingOutput = (): Output & { texts: string[] } => {
  const texts: string[] = []
  return {
    texts,
    write: text => {
      texts.push(text)
      return Promise.resolve()
    },
  }
}

test(`passes the output to the pager and writes nothing else`, async () => {
  const received = join(dir, `received.txt`)
  vi.stubEnv(`PAGER`, await pagerScript(`cat-pager`, `cat > "${received}"`))

  const fallback = await page(`# Hello\n`)

  await expect(readFile(received, `utf8`)).resolves.toBe(`# Hello\n`)
  expect(fallback).toStrictEqual([])
  expectLogs([])
})

test(`defaults LESS to case-insensitive search and keeps the user's LESS`, async () => {
  const received = join(dir, `less.txt`)
  vi.stubEnv(
    `PAGER`,
    await pagerScript(
      `less-pager`,
      `printf '%s' "$LESS" > "${received}"; cat > /dev/null`,
    ),
  )

  vi.stubEnv(`LESS`, undefined)
  await page(``)
  await expect(readFile(received, `utf8`)).resolves.toBe(`FIRSX -#6`)

  vi.stubEnv(`LESS`, `R`)
  await page(``)
  await expect(readFile(received, `utf8`)).resolves.toBe(`R`)
})

test(`falls back to the output and warns when the pager exits non-zero`, async () => {
  vi.stubEnv(`PAGER`, `false`)

  const fallback = await page(`# Hello\n`)

  expect(fallback).toStrictEqual([`# Hello\n`])
  expectLogs([
    `warn: pager false exited with a non-zero status, got: 1\n  hint: set PAGER to another pager, or pass --no-pager`,
  ])
})

test(`keeps the output in the pager when the user quits it early`, async () => {
  // Quitting `less` closes its stdin before the write finishes, and exits 0.
  vi.stubEnv(`PAGER`, await pagerScript(`quit-pager`, `exit 0`))

  const fallback = await page(`# Hello\n`.repeat(100_000))

  expect(fallback).toStrictEqual([])
  expectLogs([])
})

test(`ignores SIGINT while the pager runs and restores it after`, async () => {
  const listenersBefore = process.listenerCount(`SIGINT`)
  const gate = join(dir, `gate`)
  vi.stubEnv(
    `PAGER`,
    await pagerScript(
      `waiting-pager`,
      `cat > /dev/null; while [ ! -e "${gate}" ]; do sleep 0.05; done`,
    ),
  )
  const output = await openPager(recordingOutput(), normalizeLogger({}, `none`))

  const writePromise = output!.write(`# Hello\n`)
  await vi.waitFor(() =>
    expect(process.listenerCount(`SIGINT`)).toBe(listenersBefore + 1),
  )
  await writeFile(gate, ``)
  await writePromise

  expect(process.listenerCount(`SIGINT`)).toBe(listenersBefore)
})

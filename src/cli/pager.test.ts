import { chmod, mkdtemp, readFile, rm, writeFile } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { afterAll, afterEach, beforeAll, expect, test, vi } from 'vitest'
import type { Output } from './output.ts'
import { openPager } from './pager.ts'

let dir: string

beforeAll(async () => {
  dir = await mkdtemp(join(tmpdir(), `profiler-md-pager-`))
})

afterAll(() => rm(dir, { recursive: true }))

afterEach(() => {
  vi.unstubAllEnvs()
  vi.restoreAllMocks()
})

const pagerScript = async (name: string, body: string): Promise<string> => {
  const path = join(dir, name)
  await writeFile(path, `#!/bin/sh\n${body}\n`)
  await chmod(path, 0o755)
  return path
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

const page = async (
  text: string,
): Promise<{ fallback: string[]; stderr: string }> => {
  const fallback = recordingOutput()
  let stderr = ``
  vi.spyOn(process.stderr, `write`).mockImplementation(chunk => {
    stderr += String(chunk)
    return true
  })

  const output = await openPager(fallback)
  expect(output).not.toBeNull()
  await output!.write(text)

  return { fallback: fallback.texts, stderr }
}

test(`passes the output to the pager and writes nothing else`, async () => {
  const received = join(dir, `received.txt`)
  vi.stubEnv(`PAGER`, await pagerScript(`cat-pager`, `cat > "${received}"`))

  const { fallback, stderr } = await page(`# Hello\n`)

  expect(await readFile(received, `utf8`)).toBe(`# Hello\n`)
  expect(fallback).toEqual([])
  expect(stderr).toBe(``)
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
  expect(await readFile(received, `utf8`)).toBe(`FIRSX -#6`)

  vi.stubEnv(`LESS`, `R`)
  await page(``)
  expect(await readFile(received, `utf8`)).toBe(`R`)
})

test(`falls back to the output and warns when the pager exits non-zero`, async () => {
  vi.stubEnv(`PAGER`, `false`)

  const { fallback, stderr } = await page(`# Hello\n`)

  expect(fallback).toEqual([`# Hello\n`])
  expect(stderr).toBe(`warning: pager exited with status 1\n`)
})

test(`keeps the output in the pager when the user quits it early`, async () => {
  // Quitting `less` closes its stdin before the write finishes, and exits 0.
  vi.stubEnv(`PAGER`, await pagerScript(`quit-pager`, `exit 0`))

  const { fallback, stderr } = await page(`# Hello\n`.repeat(100_000))

  expect(fallback).toEqual([])
  expect(stderr).toBe(``)
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
  const output = await openPager(recordingOutput())

  const writePromise = output!.write(`# Hello\n`)
  await vi.waitFor(() =>
    expect(process.listenerCount(`SIGINT`)).toBe(listenersBefore + 1),
  )
  await writeFile(gate, ``)
  await writePromise

  expect(process.listenerCount(`SIGINT`)).toBe(listenersBefore)
})

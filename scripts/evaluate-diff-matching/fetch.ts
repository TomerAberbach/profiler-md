import { execFileSync } from 'node:child_process'
import {
  existsSync,
  mkdirSync,
  readFileSync,
  renameSync,
  rmSync,
} from 'node:fs'
import { join } from 'node:path'
import { CACHE_DIRECTORY } from './cache.ts'

/** A file to fetch: a URL, or a member of the tarball at a URL. */
export type Download = { url: string; member?: string }

/** Downloads every URL not yet cached, in parallel. */
export const prefetch = (urls: Iterable<string>): void => {
  const pending = [...new Set(urls)].filter(url => !existsSync(cachePath(url)))
  if (pending.length === 0) {
    return
  }
  mkdirSync(CACHE_DIRECTORY, { recursive: true })
  const partialPath = (url: string) => `${cachePath(url)}.partial`
  try {
    execFileSync(`curl`, [
      `-fsSL`,
      `--retry`,
      `5`,
      // The script runs outside the input generation shell, so it uses the
      // host's curl. macOS's curl (8.7) treats an HTTP/2 error response as a
      // receive error, which `--retry` alone skips.
      `--retry-all-errors`,
      `--parallel`,
      `--parallel-max`,
      `16`,
      ...pending.flatMap(url => [`-o`, partialPath(url), url]),
    ])
  } catch (error: unknown) {
    for (const url of pending) {
      rmSync(partialPath(url), { force: true })
    }
    throw error
  }
  for (const url of pending) {
    renameSync(partialPath(url), cachePath(url))
  }
}

/** Reads a download, fetching it first when it is not cached. */
export const readDownload = ({ url, member }: Download): string => {
  prefetch([url])
  return member === undefined
    ? readFileSync(cachePath(url), `utf8`)
    : execFileSync(`tar`, [`-xzOf`, cachePath(url), member], {
        encoding: `utf8`,
        maxBuffer: 1 << 30,
      })
}

const cachePath = (url: string): string =>
  join(CACHE_DIRECTORY, encodeURIComponent(url))

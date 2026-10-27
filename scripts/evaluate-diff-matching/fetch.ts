import { execFileSync } from 'node:child_process'
import {
  existsSync,
  mkdirSync,
  readFileSync,
  renameSync,
  rmSync,
  writeFileSync,
} from 'node:fs'
import { join } from 'node:path'
import { CACHE_DIRECTORY } from './cache.ts'

/** A file to fetch: a URL, or a member of the tarball at a URL. */
export type Download = { url: string; member?: string }

/**
 * Reads a download, fetching it first when it is not cached. Returns
 * `undefined` when its URL responded 404 or its tarball has no such member.
 */
export const readDownload = ({ url, member }: Download): string | undefined => {
  prefetch([url])
  if (existsSync(missingPath(url))) {
    return undefined
  }
  if (member === undefined) {
    return readFileSync(cachePath(url), `utf8`)
  }
  const memberPath = join(extractedPath(url), member)
  return existsSync(memberPath) ? readFileSync(memberPath, `utf8`) : undefined
}

/**
 * Downloads every URL not yet cached, in parallel. A URL that responds 404
 * is cached as missing, so a file a version lacks reads as `undefined`.
 */
export const prefetch = (urls: Iterable<string>): void => {
  const pending = [...new Set(urls)].filter(
    url => !existsSync(cachePath(url)) && !existsSync(missingPath(url)),
  )
  if (pending.length === 0) {
    return
  }
  mkdirSync(CACHE_DIRECTORY, { recursive: true })
  const partialPath = (url: string) => `${cachePath(url)}.partial`
  const removePartials = () => {
    for (const url of pending) {
      rmSync(partialPath(url), { force: true })
    }
  }
  let statuses: string
  try {
    statuses = execFileSync(
      `curl`,
      [
        `-sSL`,
        `--retry`,
        `5`,
        // The script runs outside the input generation shell, so it uses the
        // host's curl. macOS's curl (8.7) treats an HTTP/2 error response as a
        // receive error, which `--retry` alone skips.
        `--retry-all-errors`,
        `--parallel`,
        `--parallel-max`,
        `16`,
        `--write-out`,
        String.raw`%{http_code} %{url}\n`,
        ...pending.flatMap(url => [`-o`, partialPath(url), url]),
      ],
      { encoding: `utf8` },
    )
  } catch (error: unknown) {
    removePartials()
    throw error
  }

  const urlToStatus = new Map(
    statuses
      .trim()
      .split(`\n`)
      .map(line => {
        const separator = line.indexOf(` `)
        return [line.slice(separator + 1), line.slice(0, separator)] as const
      }),
  )
  const failed = pending.filter(url => {
    const status = urlToStatus.get(url)
    return status !== `200` && status !== `404`
  })
  if (failed.length > 0) {
    removePartials()
    throw new Error(
      `downloading failed, got: ${failed.map(url => `${urlToStatus.get(url)} ${url}`).join(`, `)}`,
    )
  }
  for (const url of pending) {
    if (urlToStatus.get(url) === `404`) {
      rmSync(partialPath(url))
      writeFileSync(missingPath(url), ``)
    } else {
      renameSync(partialPath(url), cachePath(url))
    }
  }
}

const missingPath = (url: string): string => `${cachePath(url)}.missing`

const extractedPath = (url: string): string => {
  const directory = `${cachePath(url)}.extracted`
  if (!existsSync(directory)) {
    const partial = `${directory}.partial`
    rmSync(partial, { force: true, recursive: true })
    mkdirSync(partial)
    execFileSync(`tar`, [`-xzf`, cachePath(url), `-C`, partial])
    renameSync(partial, directory)
  }
  return directory
}

const cachePath = (url: string): string =>
  join(CACHE_DIRECTORY, encodeURIComponent(url))

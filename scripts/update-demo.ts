import { execFileSync } from 'node:child_process'
import { createHash } from 'node:crypto'
import { readFileSync, writeFileSync } from 'node:fs'
import { formatBytes } from '../src/helpers/format.ts'

const check = process.argv.includes(`--check`)

const tapePath = `assets/demo.tape`
const gifPath = `assets/demo.gif`

const fail = (message: string): never => {
  process.stderr.write(`${message}\n`)
  process.exit(1)
}

const commandPattern = /^Type "profiler-md(?<args>[^"]*)"$/gmu

// The tape wraps each typed command in double quotes, so an argument can only
// quote spaces with single quotes.
const argumentPattern = /'(?<quoted>[^']*)'|(?<bare>\S+)/gu

const parseArguments = (args: string): string[] =>
  [...args.matchAll(argumentPattern)].map(
    match => match.groups!.quoted ?? match.groups!.bare!,
  )

// Recording the gif requires vhs, which CI lacks, so `--check` instead verifies
// a digest of what the recording captures: the tape and each typed command's
// output. A change to the CLI, its highlighting, or the converted example
// inputs changes the digest.
const computeDigest = (): string => {
  const tape = readFileSync(tapePath)
  const hash = createHash(`sha256`).update(tape)

  const commands = [...tape.toString(`utf8`).matchAll(commandPattern)].map(
    match => match.groups!.args!.trim(),
  )
  if (commands.length === 0) {
    fail(
      `${tapePath} types no \`profiler-md\` commands to include in the digest.`,
    )
  }

  for (const command of commands) {
    const stdout = execFileSync(
      `node`,
      [`src/cli/index.ts`, ...parseArguments(command)],
      {
        env: { ...process.env, FORCE_COLOR: `3` },
        maxBuffer: 64 * 1024 * 1024,
      },
    )
    hash.update(command).update(stdout)
  }

  return hash.digest(`hex`)
}

const digestPrefix = `profiler-md-demo:`
const digestLength = 64

// A GIF comment extension: `0x21 0xFE`, data sub-blocks, then a `0x00`
// terminator. Decoders skip it, so an embedded digest leaves rendering
// unchanged.
const embedDigest = (gif: Buffer, digest: string): Buffer => {
  if (gif.at(-1) !== 0x3b) {
    fail(`${gifPath} does not end with a GIF trailer byte.`)
  }

  const comment = Buffer.from(`${digestPrefix}${digest}`, `ascii`)
  return Buffer.concat([
    gif.subarray(0, -1),
    Buffer.from([0x21, 0xfe, comment.length]),
    comment,
    Buffer.from([0x00, 0x3b]),
  ])
}

const readEmbeddedDigest = (gif: Buffer): string => {
  const index = gif.lastIndexOf(digestPrefix, undefined, `ascii`)
  if (index === -1) {
    fail(
      `${gifPath} has no digest. Run \`pnpm update-demo\` to record and embed one.`,
    )
  }

  const start = index + digestPrefix.length
  const digest = gif.subarray(start, start + digestLength).toString(`ascii`)
  if (!/^[\da-f]{64}$/u.test(digest)) {
    fail(`${gifPath} has a malformed digest.`)
  }

  return digest
}

if (check) {
  const digest = computeDigest()
  const embedded = readEmbeddedDigest(readFileSync(gifPath))
  if (embedded !== digest) {
    fail(
      `${gifPath} is out of date. Run \`pnpm update-demo\` to fix.\n` +
        `  embedded: ${embedded}\n  expected: ${digest}`,
    )
  }

  process.stderr.write(`${gifPath} matches ${tapePath} (${digest}).\n`)
} else {
  execFileSync(`vhs`, [tapePath], { stdio: `inherit` })

  const recordedSize = readFileSync(gifPath).length
  // Optimize before embedding the digest, and strip comments so that no
  // earlier digest remains alongside the one embedded below.
  execFileSync(
    `gifsicle`,
    [
      `--optimize=3`,
      `--lossy=80`,
      `--colors`,
      `128`,
      `--no-comments`,
      `--batch`,
      gifPath,
    ],
    { stdio: `inherit` },
  )

  const gif = readFileSync(gifPath)
  writeFileSync(gifPath, embedDigest(gif, computeDigest()))
  process.stderr.write(
    `Recorded ${gifPath} and embedded its digest ` +
      `(${formatBytes(recordedSize)} → ${formatBytes(gif.length)}).\n`,
  )
}

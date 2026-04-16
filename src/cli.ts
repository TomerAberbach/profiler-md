import { createWriteStream } from 'node:fs'
import { readFile } from 'node:fs/promises'
import { extname } from 'node:path'
import type { Writable } from 'node:stream'
import meow from 'meow'
import picomatch from 'picomatch'
import {
  defaultIsThirdPartyURL,
  v8CpuProfileToMd,
  v8HeapProfileToMd,
  v8HeapSnapshotToMd,
} from './index.ts'
import type { V8ProfileToMdOptions } from './index.ts'

type ProfileConverter = {
  type: string
  convert: (data: string | Buffer, options: V8ProfileToMdOptions) => string
}

const extensionToProfileConverter = new Map<string, ProfileConverter>([
  [`.cpuprofile`, { type: `v8-cpu-profile`, convert: v8CpuProfileToMd }],
  [`.heapprofile`, { type: `v8-heap-profile`, convert: v8HeapProfileToMd }],
  [`.heapsnapshot`, { type: `v8-heap-snapshot`, convert: v8HeapSnapshotToMd }],
])

const profileTypeToConverter = new Map(
  Array.from(extensionToProfileConverter.values(), profileConverter => [
    profileConverter.type,
    profileConverter,
  ]),
)

const cli = meow(
  `
  Usage: profiler-md [options] [file]

  Options:
    -t, --type <type>     Profile type (auto-detected from file extension by default)
    -o, --output <file>   Output file (default: - for stdout)
    --top-n <n>           Number of top entries to show (default: 20)
    --cwd <path>          Working directory for relative file paths in output
    --third-party <glob>  Mark URLs matching this glob as third-party (repeatable; default: node_modules)
    --help                Show this help message

  Supported profile types:
${Array.from(
  extensionToProfileConverter,
  ([extension, { type }]) => `    *${extension} -> ${type}`,
).join(`\n`)}
`,
  {
    importMeta: import.meta,
    allowUnknownFlags: false,
    flags: {
      type: { type: `string`, shortFlag: `t` },
      output: { type: `string`, shortFlag: `o`, default: `-` },
      topN: { type: `number` },
      cwd: { type: `string` },
      thirdParty: { type: `string`, isMultiple: true, default: [] as string[] },
    },
  },
)

try {
  const {
    input: [filePath],
    flags: { output: outputPath, type: profileType, topN, cwd, thirdParty },
  } = cli

  let profileConverter: ProfileConverter | undefined
  if (profileType !== undefined) {
    profileConverter = profileTypeToConverter.get(profileType)
    if (!profileConverter) {
      process.stderr.write(
        `error: unknown profile type "${profileType}"\nRun with --help to see supported types.\n`,
      )
      process.exit(2)
    }
  } else if (filePath) {
    const extension = extname(filePath)
    profileConverter = extensionToProfileConverter.get(extension)
    if (!profileConverter) {
      process.stderr.write(
        `error: unrecognized file extension "${extension}"\nUse --type to specify the profile type, or run with --help to see supported types.\n`,
      )
      process.exit(2)
    }
  } else if (process.stdin.isTTY) {
    cli.showHelp(0)
    process.exit(0)
  } else {
    process.stderr.write(
      `error: --type is required when reading from stdin\nRun with --help to see supported types.\n`,
    )
    process.exit(2)
  }

  let data: Buffer
  if (filePath) {
    try {
      data = await readFile(filePath)
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error)
      process.stderr.write(`error: ${message}\n`)
      process.exit(1)
    }
  } else {
    data = Buffer.concat(await Array.fromAsync(process.stdin))
  }

  const thirdPartyMatchers = thirdParty.map(glob =>
    picomatch(glob, { dot: true }),
  )
  const markdown = profileConverter.convert(data, {
    topN,
    cwd,
    isThirdPartyURL:
      thirdPartyMatchers.length > 0
        ? url =>
            defaultIsThirdPartyURL(url) ||
            thirdPartyMatchers.some(match => match(url.pathname))
        : undefined,
  })

  let output: Writable
  if (outputPath === `-`) {
    output = process.stdout
  } else {
    output = createWriteStream(outputPath)
    await new Promise<void>((resolve, reject) => {
      output.once(`open`, () => resolve()).once(`error`, reject)
    })
  }

  await new Promise<void>((resolve, reject) => {
    output.write(markdown, error => {
      if (error) {
        reject(error)
      } else if (output === process.stdout) {
        resolve()
      } else {
        output.end(resolve)
      }
    })
  })
} catch (error) {
  if (error instanceof Error) {
    process.stderr.write(`error: ${error.message}\n`)
    if (error.stack) {
      process.stderr.write(`${error.stack}\n`)
    }
  } else {
    process.stderr.write(`error: ${String(error)}\n`)
  }
  process.exit(1)
}

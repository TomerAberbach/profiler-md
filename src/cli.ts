import { createWriteStream } from 'node:fs'
import { readFile } from 'node:fs/promises'
import type { Writable } from 'node:stream'
import { promisify } from 'node:util'
import { brotliDecompress, gunzip } from 'node:zlib'
import meow from 'meow'
import picomatch from 'picomatch'
import {
  detectPprof,
  detectPythonProfile,
  detectSpeedscopeProfile,
  detectV8CpuProfile,
  detectV8HeapProfile,
  detectV8HeapSnapshot,
  pprofToMd,
  pprofToMdInternal,
  pythonProfileToMd,
  pythonProfileToMdInternal,
  speedscopeProfileToMd,
  speedscopeProfileToMdInternal,
  v8CpuProfileToMd,
  v8CpuProfileToMdInternal,
  v8HeapProfileToMd,
  v8HeapProfileToMdInternal,
  v8HeapSnapshotToMd,
  v8HeapSnapshotToMdInternal,
} from './formats/index.ts'
import type { Pprof } from './formats/pprof/parse.ts'
import type { PythonProfile } from './formats/python-profile/parse.ts'
import type { SpeedscopeProfile } from './formats/speedscope/parse.ts'
import type { V8CpuProfile } from './formats/v8/cpu-profile/parse.ts'
import type { V8HeapProfile } from './formats/v8/heap-profile/parse.ts'
import type { V8HeapSnapshot } from './formats/v8/heap-snapshot/parse.ts'
import { parseJson } from './helpers/json.ts'
import { defaultIsThirdPartyEntry } from './index.ts'
import type { ProfileToMdOptions } from './index.ts'

type JsonProfileConverter<Parsed> = {
  type: string
  detect: (json: unknown) => Parsed | undefined
  toMdInternal: (parsed: Parsed, options: ProfileToMdOptions) => string
  toMd: (data: Uint8Array, options: ProfileToMdOptions) => string
}

type BinaryProfileConverter<Parsed> = {
  type: string
  detect: (data: Uint8Array) => Parsed | undefined
  toMdInternal: (parsed: Parsed, options: ProfileToMdOptions) => string
  toMd: (data: Uint8Array, options: ProfileToMdOptions) => string
}

const jsonProfileConverters: JsonProfileConverter<any>[] = [
  {
    type: `speedscope`,
    detect: detectSpeedscopeProfile,
    toMdInternal: speedscopeProfileToMdInternal,
    toMd: speedscopeProfileToMd,
  } satisfies JsonProfileConverter<SpeedscopeProfile>,
  {
    type: `v8-cpu-profile`,
    detect: detectV8CpuProfile,
    toMdInternal: v8CpuProfileToMdInternal,
    toMd: v8CpuProfileToMd,
  } satisfies JsonProfileConverter<V8CpuProfile>,
  {
    type: `v8-heap-profile`,
    detect: detectV8HeapProfile,
    toMdInternal: v8HeapProfileToMdInternal,
    toMd: v8HeapProfileToMd,
  } satisfies JsonProfileConverter<V8HeapProfile>,
  {
    type: `v8-heap-snapshot`,
    detect: detectV8HeapSnapshot,
    toMdInternal: v8HeapSnapshotToMdInternal,
    toMd: v8HeapSnapshotToMd,
  } satisfies JsonProfileConverter<V8HeapSnapshot>,
]
const binaryProfileConverters: BinaryProfileConverter<any>[] = [
  {
    type: `pprof`,
    detect: detectPprof,
    toMdInternal: pprofToMdInternal,
    toMd: pprofToMd,
  } satisfies BinaryProfileConverter<Pprof>,
  {
    type: `python-profile`,
    detect: detectPythonProfile,
    toMdInternal: pythonProfileToMdInternal,
    toMd: pythonProfileToMd,
  } satisfies BinaryProfileConverter<PythonProfile>,
]
const profileConverters = [...jsonProfileConverters, ...binaryProfileConverters]

const cli = meow(
  `
  Usage: profiler-md [options] [file]

  Options:
    -t, --type <type>     Profile type, auto-detected from content if omitted
                          [${profileConverters.map(({ type }) => type).join(`|`)}]
    -o, --output <file>   Output file (default: - for stdout)
    --top-n <n>           Number of top entries to show (default: 20)
    --cwd <path>          Working directory for relative file paths in output
    --third-party <glob>  Mark URLs matching this glob as third-party
                          (repeatable; default: node_modules)
    --help                Show this help message
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

const gunzipAsync = promisify(gunzip)
const brotliDecompressAsync = promisify(brotliDecompress)

const decompressData = async (
  data: Uint8Array,
  filePath?: string,
): Promise<Uint8Array> => {
  if (filePath?.endsWith(`.br`)) {
    return brotliDecompressAsync(data)
  }
  if (data[0] === 0x1f && data[1] === 0x8b) {
    return gunzipAsync(data)
  }
  return data
}

try {
  const {
    input: [filePath],
    flags: { output: outputPath, type: profileType, topN, cwd, thirdParty },
  } = cli

  let forcedProfileConverter:
    | JsonProfileConverter<any>
    | BinaryProfileConverter<any>
    | undefined
  if (profileType !== undefined) {
    forcedProfileConverter = profileConverters.find(
      format => format.type === profileType,
    )
    if (!forcedProfileConverter) {
      process.stderr.write(
        `error: unknown profile type "${profileType}"\nRun with --help to see supported types.\n`,
      )
      process.exit(2)
    }
  } else if (!filePath && process.stdin.isTTY) {
    cli.showHelp(0)
    process.exit(0)
  }

  let data: Uint8Array
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

  try {
    data = await decompressData(data, filePath)
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error)
    process.stderr.write(`error: failed to decompress input: ${message}\n`)
    process.exit(1)
  }

  const thirdPartyMatchers = thirdParty.map(glob =>
    picomatch(glob, { dot: true }),
  )
  const options: ProfileToMdOptions = {
    topN,
    cwd,
    isThirdPartyEntry:
      thirdPartyMatchers.length > 0
        ? entry =>
            defaultIsThirdPartyEntry(entry) ||
            (!!entry.location &&
              thirdPartyMatchers.some(match =>
                match(entry.location!.url.pathname),
              ))
        : undefined,
  }

  let markdown: string | undefined
  if (forcedProfileConverter) {
    markdown = forcedProfileConverter.toMd(data, options)
  } else {
    let json: unknown
    try {
      json = parseJson(data)
    } catch {}
    if (json === undefined) {
      for (const converter of binaryProfileConverters) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const parsed = converter.detect(data)
        if (parsed !== undefined) {
          markdown = converter.toMdInternal(parsed, options)
          break
        }
      }
    } else {
      for (const converter of jsonProfileConverters) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const parsed = converter.detect(json)
        if (parsed !== undefined) {
          markdown = converter.toMdInternal(parsed, options)
          break
        }
      }
    }

    if (markdown === undefined) {
      process.stderr.write(
        `error: could not detect profile format from content\nUse --type to specify the format, or run with --help to see supported types.\n`,
      )
      process.exit(2)
    }
  }

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

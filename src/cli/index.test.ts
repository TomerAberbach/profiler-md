import { execFile, spawn } from 'node:child_process'
import { createWriteStream } from 'node:fs'
import { chmod, mkdtemp, open, readFile, rm, writeFile } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { promisify } from 'node:util'
import { brotliCompress, gzip } from 'node:zlib'
import { expect, test, vi } from 'vitest'
import packageJson from '../../package.json' with { type: 'json' }
import {
  injectedFormat,
  injectedInputs,
  inputPath,
  smallestInput,
} from '../formats/testing.ts'
import {
  crashingV8CpuProfile,
  lazilyCrashingV8CpuProfile,
} from '../formats/v8/cpu-profile/testing.ts'
import { languageExtensionToPrimary } from './languages.ts'

// Each test spawns the CLI in a subprocess, which can outlast the default 5s.
vi.setConfig({ testTimeout: 125_000 })

const format = injectedFormat()
const inputFilenames = injectedInputs()

// A valid capture with no samples (e.g. a lock profile that saw no contention)
// converts to the no-data message
const MARKDOWN_OR_NO_DATA = /^(?:# |No profiling data found\.)/u

const gzipAsync = promisify(gzip)
const brotliCompressAsync = promisify(brotliCompress)
const execFileAsync = promisify(execFile)

const isGzipped = async (filename: string): Promise<boolean> => {
  const magic = Buffer.alloc(2)
  const file = await open(inputPath(filename), `r`)
  try {
    await file.read(magic, 0, 2, 0)
  } finally {
    await file.close()
  }
  return magic[0] === 0x1f && magic[1] === 0x8b
}

/**
 * The inputs the CLI converts: the smallest of each compression scheme the
 * project's inputs use. Reading a file and decompressing its bytes is
 * format-agnostic work the CLI does itself. Below that is the API, which the
 * format and origin suites already run over every committed input, so spawning
 * the CLI for each one would repeat gigabytes of conversion in a subprocess.
 */
const gzippedInputs = await Promise.all(inputFilenames.map(isGzipped))
const cliInputFilenames = [true, false].flatMap(gzipped =>
  smallestInput(
    inputFilenames.filter((_, index) => gzippedInputs[index] === gzipped),
  ),
)

// Registered conditionally because the `unit` project receives no inputs.
if (cliInputFilenames.length > 0) {
  test.concurrent.each(cliInputFilenames)(
    `outputs markdown from a %s file`,
    async filename => {
      const { status, stdout } = await runCli([inputPath(filename)])

      expect(status).toBe(0)
      expect(stdout).toMatch(MARKDOWN_OR_NO_DATA)
    },
  )
}

// The remaining tests name the inputs they use, which live in one format's
// projects, so they run in the `unit` project alone.
if (format === undefined) {
  // One input is enough to exercise these general flags.
  const cpuProfilePath = inputPath(`javascript.node.base.cpuprofile`)
  const cpuProfileContent = await readFile(cpuProfilePath)
  // The generated file the `typeCheckProject` frame is in, at the temporary
  // path the input was generated under, which a regeneration changes.
  const tscWorkloadUrl = (
    JSON.parse(cpuProfileContent.toString()) as {
      nodes: { callFrame: { url: string } }[]
    }
  ).nodes.find(node => node.callFrame.url.endsWith(`/tsc-workload.mjs`))!
    .callFrame.url
  // Maps the `typeCheckProject` frame (tsc-workload.mjs line 2 col 32,
  // 0-based) to /mapped/original.ts line 1 col 0
  const typeCheckProjectMappings = `${`;`.repeat(2)}gCAAA`
  const expectedCpuProfileMarkdown = /^# CPU profile/u

  test.concurrent(
    `--version prints the version to stdout and no logo without a TTY`,
    async () => {
      const { status, stdout, stderr } = await runCli([`--version`])

      expect(status).toBe(0)
      expect(stdout).toBe(`${packageJson.version}\n`)
      expect(stderr).toBe(``)
    },
  )

  test.concurrent(
    `--help fits COLUMNS and leads with the synopsis and examples`,
    async () => {
      const { status, stdout, stderr } = await runCli([`--help`], undefined, {
        COLUMNS: `80`,
      })

      expect(status).toBe(0)
      expect(stderr).toBe(``)
      expect(stdout).toMatch(
        /^Converts [^\n]+\n\nUsage: profiler-md \[OPTIONS\] \[FILE\]\n {7}profiler-md \[OPTIONS\] BASE CURRENT\n {7}profiler-md --help \[TOPIC\]\n\nExamples:\n/u,
      )
      expect(stdout.split(`\n`).filter(line => line.length > 80)).toEqual([])
    },
  )

  test.concurrent(
    `the synopsis and a --help pointer follow an invocation error`,
    async () => {
      const { status, stderr } = await runCli([`--unknown-flag`])

      expect(status).toBe(2)
      expect(stderr).toBe(
        `error: unexpected option or argument: "--unknown-flag"\n\nUsage: profiler-md [OPTIONS] [FILE]\n       profiler-md [OPTIONS] BASE CURRENT\n       profiler-md --help [TOPIC]\n\nRun \`profiler-md --help\` for every flag.\n`,
      )
    },
  )

  test.concurrent(`reads from stdin and auto-detects format`, async () => {
    const { status, stdout } = await runCli([], cpuProfileContent)

    expect(status).toBe(0)
    expect(stdout).toMatch(/^# /u)
  })

  test.concurrent(
    `--format auto and --origin auto detect the format and origin`,
    async () => {
      const { status, stdout } = await runCli(
        [`--format`, `auto`, `--origin`, `auto`],
        cpuProfileContent,
      )

      expect(status).toBe(0)
      expect(stdout).toMatch(expectedCpuProfileMarkdown)
    },
  )

  test.concurrent.each([`-`, `/dev/stdin`, `/dev/fd/0`])(
    `reads a piped profile from %s`,
    async path => {
      const { status, stdout } = await runCli([path], cpuProfileContent)

      expect(status).toBe(0)
      expect(stdout).toMatch(expectedCpuProfileMarkdown)
    },
  )

  test.concurrent(`reads a profile from a named pipe`, async () => {
    const dir = await mkdtemp(join(tmpdir(), `profiler-md-`))
    const pipePath = join(dir, `javascript.node.base.cpuprofile`)
    await execFileAsync(`mkfifo`, [pipePath])

    // Opening the pipe for writing resolves once the CLI opens it for reading,
    // so start the CLI first.
    const cliPromise = runCli([pipePath])
    const writer = createWriteStream(pipePath)
    // A failed CLI run leaves the pipe unread, so the write fails with
    // `EPIPE`. The assertions below report that failure.
    writer.on(`error`, () => {})
    writer.end(cpuProfileContent)
    const { status, stdout } = await cliPromise

    expect(status).toBe(0)
    expect(stdout).toMatch(expectedCpuProfileMarkdown)

    await rm(dir, { recursive: true })
  })

  test.concurrent(
    `exits without an error when the reader closes the pipe early`,
    async () => {
      // The Markdown exceeds the pipe buffer, so the CLI's write is still in
      // flight when `head` reads its line and exits.
      const reader = spawn(`head`, [`-n`, `1`], {
        stdio: [`pipe`, `pipe`, `inherit`],
      })
      const child = spawn(process.execPath, [cliPath, cpuProfilePath], {
        stdio: [`ignore`, reader.stdin, `pipe`],
        env: { ...process.env, NODE_COMPILE_CACHE: compileCachePath },
      })
      // Closing the parent's handle before the CLI exits would close the
      // inherited descriptor too, so `head` reaches EOF only once the CLI
      // exits.
      child.on(`close`, () => reader.stdin.end())

      const stderr: Buffer[] = []
      child.stderr.on(`data`, (chunk: Buffer) => stderr.push(chunk))
      const readerStdout: Buffer[] = []
      reader.stdout.on(`data`, (chunk: Buffer) => readerStdout.push(chunk))
      const [status] = await Promise.all([
        new Promise<number | null>((resolve, reject) => {
          child.on(`error`, reject)
          child.on(`close`, resolve)
        }),
        new Promise((resolve, reject) => {
          reader.on(`error`, reject)
          reader.on(`close`, resolve)
        }),
      ])

      expect(Buffer.concat(stderr).toString(`utf8`)).toBe(``)
      expect(status).toBe(0)
      expect(Buffer.concat(readerStdout).toString(`utf8`)).toBe(
        `# CPU profile\n`,
      )
    },
  )

  test.concurrent.each([`--output`, `-o`])(
    `writes output to a file with %s`,
    async flag => {
      const tempPath = join(
        await mkdtemp(join(tmpdir(), `profiler-md-`)),
        `out.md`,
      )

      const { status, stdout } = await runCli([cpuProfilePath, flag, tempPath])

      expect(status).toBe(0)
      expect(stdout).toBe(``)
      expect(await readFile(tempPath, `utf8`)).toMatch(/^# /u)

      await rm(tempPath, { recursive: true })
    },
  )

  test.concurrent.each([
    {
      scenario: `a path in a nonexistent directory`,
      path: (dir: string) => join(dir, `nonexistent`, `out.md`),
      expectedReason: `no such directory`,
    },
    {
      scenario: `a directory`,
      path: (dir: string) => dir,
      expectedReason: `is a directory`,
    },
  ])(`errors on --output to $scenario`, async ({ path, expectedReason }) => {
    const dir = await mkdtemp(join(tmpdir(), `profiler-md-`))
    const outputPath = path(dir)

    const { status, stdout, stderr } = await runCli([
      cpuProfilePath,
      `--output`,
      outputPath,
    ])

    expect(status).toBe(1)
    expect(stdout).toBe(``)
    expect(stderr).toMatch(
      new RegExp(
        `^error: cannot write ${outputPath}: ${expectedReason}(?:\\n  caused by: E[A-Z]+: .*)?\\n$`,
        `u`,
      ),
    )

    await rm(dir, { recursive: true })
  })

  test.concurrent(
    `checks the --output path before converting the input`,
    async () => {
      const dir = await mkdtemp(join(tmpdir(), `profiler-md-`))
      const outputPath = join(dir, `nonexistent`, `out.md`)

      const { status, stdout, stderr } = await runCli(
        [`--output`, outputPath],
        `not a profile`,
      )

      expect(status).toBe(1)
      expect(stdout).toBe(``)
      expect(stderr).toMatch(
        new RegExp(
          `^error: cannot write ${outputPath}: no such directory\\n  caused by: ENOENT: `,
          `u`,
        ),
      )

      await rm(dir, { recursive: true })
    },
  )

  // Root reads a file regardless of its mode.
  test
    .skipIf(process.getuid?.() === 0)
    .concurrent(`errors on an unreadable file`, async () => {
      const dir = await mkdtemp(join(tmpdir(), `profiler-md-`))
      const unreadablePath = join(dir, `unreadable.cpuprofile`)
      await writeFile(unreadablePath, cpuProfileContent)
      await chmod(unreadablePath, 0o000)

      const { status, stderr } = await runCli([unreadablePath])

      expect(status).toBe(1)
      expect(stderr).toMatch(
        new RegExp(
          `^error: cannot read ${unreadablePath}: permission denied\\n  caused by: EACCES: `,
          `u`,
        ),
      )

      await rm(dir, { recursive: true, force: true })
    })

  test.concurrent(`--top-n limits the number of entries shown`, async () => {
    const [{ stdout: top1 }, { stdout: top5 }] = await Promise.all([
      runCli([cpuProfilePath, `--top-n`, `1`]),
      runCli([cpuProfilePath, `--top-n`, `5`]),
    ])

    expect(top1.length).toBeLessThan(top5.length)
  })

  test.concurrent(
    `--min-category-share limits which categories get a subsection`,
    async () => {
      const [{ stdout: everyCategory }, { stdout: noCategory }] =
        await Promise.all([
          runCli([cpuProfilePath, `--min-category-share`, `0`]),
          runCli([cpuProfilePath, `--min-category-share`, `1`]),
        ])

      expect(everyCategory.length).toBeGreaterThan(noCategory.length)
    },
  )

  test.concurrent(
    `--base-url makes file paths relative to the given directory`,
    async () => {
      // The inputs were generated under random nix temporary directories in
      // /private/tmp
      const baseURL = `/private/tmp`

      const { stdout } = await runCli([cpuProfilePath, `--base-url`, baseURL])

      expect(stdout).not.toContain(baseURL)
    },
  )

  test.concurrent(
    `--base-url auto makes file paths relative to their inferred common ancestor`,
    async () => {
      // The input's workload code is under this directory on the machine that
      // generated it
      const profiledProjectDirectory = `/Users/tomer/Documents/work/code`

      const { status, stdout } = await runCli([
        cpuProfilePath,
        `--base-url`,
        `auto`,
      ])

      expect(status).toBe(0)
      expect(stdout).toMatch(/^# /u)
      expect(stdout).not.toContain(profiledProjectDirectory)
    },
  )

  test.concurrent(`--base-url resolves relative paths`, async () => {
    const [{ stdout: absolute }, { stdout: relative }] = await Promise.all([
      runCli([cpuProfilePath, `--base-url`, process.cwd()]),
      runCli([cpuProfilePath, `--base-url`, `.`]),
    ])

    expect(relative).toBe(absolute)
  })

  test.concurrent(
    `--category assigns matching functions a category, the first matching rule taking precedence`,
    async () => {
      const [{ stdout: ours }, { stdout: native }] = await Promise.all([
        runCli([
          cpuProfilePath,
          `--category`,
          `node_modules=ours`,
          `--category`,
          `node_modules=native`,
        ]),
        runCli([
          cpuProfilePath,
          `--category`,
          `node_modules=native`,
          `--category`,
          `node_modules=ours`,
        ]),
      ])

      expect(ours).not.toContain(`Third-party`)
      expect(native).not.toContain(`Third-party`)
      expect(ours).not.toBe(native)
    },
  )

  test.concurrent(`--category matches names as well as locations`, async () => {
    const { stdout } = await runCli([
      cpuProfilePath,
      `--category`,
      `^\\(garbage collector\\)$=ours`,
    ])

    expect(stdout).not.toContain(`Garbage collector`)
  })

  test.concurrent(
    `--hide hides matching entries and keeps totals`,
    async () => {
      const [{ stdout: unfiltered }, { stdout: filtered }] = await Promise.all([
        runCli([cpuProfilePath]),
        runCli([cpuProfilePath, `--hide`, `recursiveTypeRelatedTo`]),
      ])

      expect(unfiltered).toContain(`recursiveTypeRelatedTo`)
      expect(filtered).not.toContain(`recursiveTypeRelatedTo`)
      expect(filtered.split(`\n`)[2]).toBe(unfiltered.split(`\n`)[2])
    },
  )

  test.concurrent(`--show shows only matching entries`, async () => {
    const { stdout } = await runCli([cpuProfilePath, `--show`, `^wrapSafe$`])

    expect(stdout).toContain(`wrapSafe`)
    expect(stdout).not.toContain(`recursiveTypeRelatedTo`)
  })

  test.concurrent(`--hide matches a location's URL`, async () => {
    const [{ stdout: unfiltered }, { stdout: filtered }] = await Promise.all([
      runCli([cpuProfilePath]),
      runCli([cpuProfilePath, `--hide`, `^file:///`]),
    ])

    expect(unfiltered).toContain(`typescript.js`)
    expect(filtered).not.toContain(`typescript.js`)
  })

  test.concurrent(`--hide overrides --show`, async () => {
    const [{ stdout: both }, { stdout: none }] = await Promise.all([
      runCli([cpuProfilePath, `--show`, `wrapSafe`, `--hide`, `wrapSafe`]),
      // A regex nothing matches, so every entry is hidden.
      runCli([cpuProfilePath, `--show`, `x^`]),
    ])

    expect(both).toBe(none)
  })

  test.concurrent(`--hide-category hides entries of the category`, async () => {
    const { stdout } = await runCli([
      cpuProfilePath,
      `--hide-category`,
      `garbage-collector`,
    ])

    expect(stdout).not.toContain(`\`(garbage collector)\``)
  })

  test.concurrent(
    `--show-category shows only entries of the category`,
    async () => {
      const { stdout } = await runCli([
        cpuProfilePath,
        `--show-category`,
        `stdlib`,
      ])

      expect(stdout).toContain(`wrapSafe`)
      expect(stdout).not.toContain(`recursiveTypeRelatedTo`)
    },
  )

  test.concurrent(
    `--hide-category hides a heap snapshot's functions`,
    async () => {
      const { stdout } = await runCli([
        inputPath(`javascript.node.base.heapsnapshot`),
        `--hide-category`,
        `function`,
      ])

      expect(stdout).toContain(`## Largest constructors`)
      expect(stdout).not.toContain(`## Largest functions`)
    },
  )

  test.concurrent(
    `--hide-category applies after --category rules`,
    async () => {
      const { stdout } = await runCli([
        cpuProfilePath,
        `--category`,
        `node_modules=native`,
        `--hide-category`,
        `native`,
      ])

      expect(stdout).not.toContain(`recursiveTypeRelatedTo`)
    },
  )

  test.concurrent.each(
    [...languageExtensionToPrimary].map(([extension, language]) => ({
      extension,
      language,
    })),
  )(
    `--help $extension prints the $language docs`,
    async ({ extension, language }) => {
      const [extensionHelp, languageHelp] = await Promise.all([
        runCli([`--help`, extension]),
        runCli([`--help`, language]),
      ])

      expect(extensionHelp.status).toBe(0)
      expect(extensionHelp.stdout).toBe(languageHelp.stdout)
    },
  )

  test.concurrent.each([
    { compression: `gzip`, compress: gzipAsync, ext: `.gz` },
    { compression: `brotli`, compress: brotliCompressAsync, ext: `.br` },
  ])(`auto-decompresses a $compression file`, async ({ compress, ext }) => {
    const dir = await mkdtemp(join(tmpdir(), `profiler-md-`))
    const path = join(dir, `javascript.node.base.cpuprofile${ext}`)
    await writeFile(path, await compress(cpuProfileContent))

    const { status, stdout } = await runCli([path])

    expect(status).toBe(0)
    expect(stdout).toMatch(expectedCpuProfileMarkdown)

    await rm(dir, { recursive: true })
  })

  test.concurrent.each([
    { compression: `gzip`, compress: gzipAsync },
    { compression: `brotli`, compress: brotliCompressAsync },
  ])(`auto-decompresses $compression from stdin`, async ({ compress }) => {
    const { status, stdout } = await runCli(
      [],
      await compress(cpuProfileContent),
    )

    expect(status).toBe(0)
    expect(stdout).toMatch(expectedCpuProfileMarkdown)
  })

  test.concurrent(
    `--source-maps applies source maps to profile locations`,
    async () => {
      const dir = await mkdtemp(join(tmpdir(), `profiler-md-`))
      const sourceMapPath = join(dir, `tsc-workload.mjs.map`)
      await writeFile(
        sourceMapPath,
        JSON.stringify({
          version: 3,
          file: tscWorkloadUrl,
          sources: [`/mapped/original.ts`],
          names: [],
          mappings: typeCheckProjectMappings,
        }),
      )

      const { status, stdout } = await runCli([
        cpuProfilePath,
        `--source-maps`,
        `${dir}/*.map`,
      ])

      expect(status).toBe(0)
      expect(stdout).toContain(`/mapped/original.ts`)
      expect(stdout).not.toContain(dir)

      await rm(dir, { recursive: true })
    },
  )

  test.concurrent(
    `--source-maps warns about a glob matching no file`,
    async () => {
      const { status, stderr } = await runCli([
        cpuProfilePath,
        `--source-maps`,
        `/nonexistent/*.map`,
      ])

      expect(status).toBe(0)
      expect(stderr).toBe(
        `warning: --source-maps matched no file, got: /nonexistent/*.map\n`,
      )
    },
  )

  test.concurrent(
    `--source-maps warns about a source map matching no generated file`,
    async () => {
      const dir = await mkdtemp(join(tmpdir(), `profiler-md-`))
      await writeFile(
        join(dir, `other.js.map`),
        JSON.stringify({
          version: 3,
          file: `/nowhere/other.js`,
          sources: [`/mapped/original.ts`],
          names: [],
          mappings: `AAAA`,
        }),
      )

      const { status, stderr } = await runCli([
        cpuProfilePath,
        `--source-maps`,
        `${dir}/*.map`,
      ])

      expect(status).toBe(0)
      expect(stderr).toMatch(
        /^warning: source map for file:\/\/\/nowhere\/other\.js matched none of the profile's generated files: .*\n$/u,
      )

      await rm(dir, { recursive: true })
    },
  )

  test.concurrent(
    `prints nothing to stderr by default on success`,
    async () => {
      const { status, stderr } = await runCli([cpuProfilePath])

      expect(status).toBe(0)
      expect(stderr).toBe(``)
    },
  )

  test.concurrent.each([
    { scenario: `--log-level info`, args: [`--log-level`, `info`], env: {} },
    {
      scenario: `PROFILER_MD_LOG=info`,
      args: [],
      env: { PROFILER_MD_LOG: `info` },
    },
    {
      scenario: `--log-level info over PROFILER_MD_LOG=none`,
      args: [`--log-level`, `info`],
      env: { PROFILER_MD_LOG: `none` },
    },
  ])(
    `$scenario prints the format and origin to stderr`,
    async ({ args, env }) => {
      const { status, stdout, stderr } = await runCli(
        [cpuProfilePath, ...args],
        undefined,
        env,
      )

      expect(status).toBe(0)
      expect(stdout).toMatch(MARKDOWN_OR_NO_DATA)
      expect(stderr).toMatch(
        /^info: detected format: .+\ninfo: (?:detected|fallback) origin: .+\n$/u,
      )
    },
  )

  test.concurrent(
    `an unrecognized PROFILER_MD_LOG warns and defaults to warn`,
    async () => {
      const { status, stdout, stderr } = await runCli(
        [cpuProfilePath],
        undefined,
        { PROFILER_MD_LOG: `loud` },
      )

      expect(status).toBe(0)
      expect(stdout).toMatch(MARKDOWN_OR_NO_DATA)
      expect(stderr).toBe(
        `warning: ignoring $PROFILER_MD_LOG, which is not a log level: expected one of none, error, warn, info, debug, got: loud\n`,
      )
    },
  )

  test.concurrent(`an empty PROFILER_MD_LOG is unset`, async () => {
    const { status, stderr } = await runCli([cpuProfilePath], undefined, {
      PROFILER_MD_LOG: ``,
    })

    expect(status).toBe(0)
    expect(stderr).toBe(``)
  })

  test.concurrent(
    `--log-level none silences the unrecognized PROFILER_MD_LOG warning`,
    async () => {
      const { status, stderr } = await runCli(
        [cpuProfilePath, `--log-level`, `none`],
        undefined,
        { PROFILER_MD_LOG: `loud` },
      )

      expect(status).toBe(0)
      expect(stderr).toBe(``)
    },
  )

  test.concurrent(`--log-level none silences errors`, async () => {
    const { status, stderr } = await runCli([
      `/nonexistent.cpuprofile`,
      `--log-level`,
      `none`,
    ])

    expect(status).toBe(1)
    expect(stderr).toBe(``)
  })

  test.concurrent(
    `--source-maps applies inline source maps from files`,
    async () => {
      const dir = await mkdtemp(join(tmpdir(), `profiler-md-`))
      const sourceMap = JSON.stringify({
        version: 3,
        file: tscWorkloadUrl,
        sources: [`/mapped/original.ts`],
        names: [],
        mappings: typeCheckProjectMappings,
      })
      const base64 = Buffer.from(sourceMap).toString(`base64`)
      const jsPath = join(dir, `index.js`)
      await writeFile(
        jsPath,
        `var x = 1;\n//# sourceMappingURL=data:application/json;base64,${base64}\n`,
      )

      const { status, stdout } = await runCli([
        cpuProfilePath,
        `--source-maps`,
        `${dir}/*.js`,
      ])

      expect(status).toBe(0)
      expect(stdout).toContain(`/mapped/original.ts`)

      await rm(dir, { recursive: true })
    },
  )

  test.concurrent.each([`--match-name`, `--match-location`])(
    `%s changes how entries pair across diffed profiles`,
    async flag => {
      // Collapsing every name or location to `x` must not break self-diff
      // matching: every entry still matches its counterpart, so there are no
      // deltas.
      const { status, stdout } = await runCli([
        cpuProfilePath,
        cpuProfilePath,
        flag,
        `.+=x`,
      ])

      expect(status).toBe(0)
      expect(stdout).not.toMatch(/Regressions|Improvements/u)
    },
  )

  test.concurrent.each([
    {
      scenario: `two profiles`,
      baseInput: `javascript.node.base.cpuprofile`,
      currentInput: `javascript.bun.base.cpuprofile`,
    },
    {
      scenario: `two heap snapshots`,
      baseInput: `javascript.node.base.heapsnapshot`,
      currentInput: `javascript.node.base.heapsnapshot`,
    },
  ])(
    `diffs $scenario passed as positional arguments`,
    async ({ baseInput, currentInput }) => {
      const { status, stdout } = await runCli([
        inputPath(baseInput),
        inputPath(currentInput),
      ])

      expect(status).toBe(0)
      expect(stdout).toMatch(/^# .* diff\n/u)
    },
  )

  test.concurrent(
    `errors on a --source-maps file that is not a source map`,
    async () => {
      const dir = await mkdtemp(join(tmpdir(), `profiler-md-`))
      const sourceMapPath = join(dir, `garbage.map`)
      await writeFile(sourceMapPath, `garbage\n`)

      const { status, stderr } = await runCli([
        cpuProfilePath,
        `--source-maps`,
        sourceMapPath,
      ])

      expect(status).toBe(1)
      expect(stderr).toMatch(
        new RegExp(
          `^error: cannot parse source map ${sourceMapPath}\\n  caused by: `,
          `u`,
        ),
      )

      await rm(dir, { recursive: true })
    },
  )

  test.concurrent.each([
    {
      scenario: `under an explicit format`,
      args: [`--format`, `v8-cpu-profile`],
      input: crashingV8CpuProfile,
    },
    {
      scenario: `under auto-detection`,
      args: [],
      input: crashingV8CpuProfile,
    },
    {
      scenario: `lazily, under an explicit format`,
      args: [`--format`, `v8-cpu-profile`],
      input: lazilyCrashingV8CpuProfile,
    },
    {
      scenario: `lazily, under auto-detection`,
      args: [],
      input: lazilyCrashingV8CpuProfile,
    },
  ])(
    `reports an input that crashes a parser as unusable, with a bug report caveat, $scenario`,
    async ({ args, input }) => {
      const { status, stderr } = await runCli(args, input)

      expect(status).toBe(1)
      const [errorLine, causeLine, ...caveatLines] = stderr.split(`\n`)
      expect(errorLine).toBe(
        `error: stdin: v8-cpu-profile: failed to parse the input`,
      )
      expect(causeLine).toMatch(/^ {2}caused by: /u)
      const traceLines = caveatLines.splice(3)
      expect(caveatLines).toEqual([
        `If the input opens in its profiler, report this as a bug in ${packageJson.name}:`,
        `${packageJson.bugs.url}/new`,
        `Include the command you ran, the input if you can share it, and this trace:`,
      ])
      expect(traceLines[0]).toMatch(/^TypeError: /u)
      expect(
        traceLines.slice(1, -1).every(line => line.startsWith(`    at `)),
      ).toBe(true)
      expect(traceLines.at(-1)).toBe(``)
    },
  )

  test.concurrent(
    `lists each format's reason under a detection several formats rejected`,
    async () => {
      // Passes Speedscope's and the V8 CPU profile's `matches` prefilters, and
      // fails their parses.
      const almostBoth = JSON.stringify({
        $schema: `https://www.speedscope.app/file-format-schema.json`,
        shared: {},
        profiles: [],
        nodes: [{ id: 1, callFrame: null }],
        timeDeltas: [1],
      })

      const { status, stderr } = await runCli([], almostBoth)

      expect(status).toBe(1)
      expect(stderr.split(`\n`).slice(0, 5)).toEqual([
        `error: stdin: could not detect the profile format, rejected by speedscope and v8-cpu-profile`,
        `  speedscope: failed to parse the input`,
        `    caused by: Cannot read properties of undefined (reading 'map')`,
        `  v8-cpu-profile: failed to parse the input`,
        `    caused by: Cannot destructure property 'functionName' of 'callFrame' as it is null.`,
      ])
    },
  )

  test.concurrent(
    `reports a classified rejection without a bug report caveat`,
    async () => {
      const { status, stderr } = await runCli(
        [`--format`, `collapsed`],
        `funcA;funcB`,
      )

      expect(status).toBe(1)
      expect(stderr).toBe(`error: stdin: collapsed: missing sample count\n`)
    },
  )

  test.concurrent.each([
    {
      scenario: `stdin with unrecognizable content`,
      args: [],
      input: `{}`,
      expectedStderr: `could not detect the profile format`,
      expectedStatus: 1,
    },
    {
      scenario: `stdin with a truncated JSON profile`,
      args: [],
      input: `{"nodes": [`,
      expectedStderr: `the input reads as JSON but is invalid JSON\n  caused by: `,
      expectedStatus: 1,
    },
    {
      scenario: `stdin with invalid JSON under an explicit JSON format`,
      args: [`--format`, `v8-cpu-profile`],
      input: `garbage\n`,
      expectedStderr: `error: stdin: v8-cpu-profile: invalid JSON\n  caused by: `,
      expectedStatus: 1,
    },
    {
      scenario: `a JSON file under --format pprof`,
      args: [`--format`, `pprof`, inputPath(`javascript.node.base.cpuprofile`)],
      expectedStderr: `error: ${inputPath(`javascript.node.base.cpuprofile`)}: pprof: invalid protobuf encoding\n  caused by: `,
      expectedStatus: 1,
    },
    {
      scenario: `stdin with an unsupported systing export`,
      args: [],
      input: `{"systing_profile_export": 2}\n`,
      expectedStderr: `systing: unsupported version 2, expected 1`,
      expectedStatus: 1,
    },
    {
      scenario: `unknown --format value`,
      args: [`--format`, `unknown-type`],
      expectedStderr: `error: \`-f\`/\`--format\`: expected auto or a format listed by --help, got: "unknown-type"\n\n`,
      expectedStatus: 2,
    },
    {
      scenario: `misspelled --format value`,
      args: [`--format`, `jf`],
      expectedStderr: `got: "jf"\n  hint: did you mean "jfr"?\n`,
      expectedStatus: 2,
    },
    {
      scenario: `misspelled --help topic`,
      args: [`--help`, `javascrpt`],
      expectedStderr: `got: "javascrpt"\n  hint: did you mean "javascript"?\n`,
      expectedStatus: 2,
    },
    {
      scenario: `--help topic near only a file extension alias`,
      args: [`--help`, `hh`],
      expectedStderr: `got: "hh"\n\n`,
      expectedStatus: 2,
    },
    {
      scenario: `unknown --log-level value`,
      args: [`--log-level`, `verbose`],
      expectedStderr: `expected one of none, error, warn, info, debug, got: "verbose"\n\n`,
      expectedStatus: 2,
    },
    {
      scenario: `a value attached to --color`,
      args: [`--color=yes`],
      expectedStderr: `error: \`--color\`: expected no value, got: "yes"\n`,
      expectedStatus: 2,
    },
    {
      scenario: `a value attached to --no-pager`,
      args: [`--no-pager=1`],
      expectedStderr: `error: \`--no-pager\`: expected no value, got: "1"\n`,
      expectedStatus: 2,
    },
    {
      scenario: `empty --base-url`,
      args: [`--base-url`, ``],
      expectedStderr: `expected a URL or path, got: ""`,
      expectedStatus: 2,
    },
    {
      scenario: `empty --source-maps glob`,
      args: [`--source-maps`, ``],
      expectedStderr: `expected a glob, got: ""`,
      expectedStatus: 2,
    },
    {
      scenario: `empty --output path`,
      args: [`--output`, ``],
      expectedStderr: `expected a file path, got: ""`,
      expectedStatus: 2,
    },
    {
      scenario: `nonexistent file`,
      args: [`nonexistent.cpuprofile`],
      expectedStderr: `cannot read nonexistent.cpuprofile: no such file`,
      expectedStatus: 1,
    },
    {
      scenario: `directory instead of a file`,
      args: [inputPath()],
      expectedStderr: `is a directory`,
      expectedStatus: 1,
    },
    {
      scenario: `unknown flag`,
      args: [`--unknown-flag`],
      expectedStderr: `--unknown-flag`,
      expectedStatus: 2,
    },
    {
      scenario: `diffing a profile against a heap snapshot`,
      args: [
        inputPath(`javascript.node.base.cpuprofile`),
        inputPath(`javascript.node.base.heapsnapshot`),
      ],
      expectedStderr: `cannot diff a call stack profile against a heap snapshot`,
      expectedStatus: 1,
    },
    {
      scenario: `a negative --top-n`,
      args: [inputPath(`javascript.node.base.cpuprofile`), `--top-n`, `-1`],
      expectedStderr: `expected an integer of at least 0, got: "-1"`,
      expectedStatus: 2,
    },
    {
      scenario: `a fractional --top-n`,
      args: [inputPath(`javascript.node.base.cpuprofile`), `--top-n`, `1.5`],
      expectedStderr: `expected an integer of at least 0, got: "1.5"`,
      expectedStatus: 2,
    },
    {
      scenario: `a --top-n beyond the safe integer range`,
      args: [
        inputPath(`javascript.node.base.cpuprofile`),
        `--top-n`,
        `99999999999999999999`,
      ],
      expectedStderr: `expected an integer of at least 0, got: "99999999999999999999"`,
      expectedStatus: 2,
    },
    {
      scenario: `a --min-category-share above 1 in exponent notation`,
      args: [
        inputPath(`javascript.node.base.cpuprofile`),
        `--min-category-share`,
        `1e1`,
      ],
      expectedStderr: `expected a number from 0 to 1, got: "1e1"`,
      expectedStatus: 2,
    },
    {
      scenario: `a --min-category-share above 1`,
      args: [
        inputPath(`javascript.node.base.cpuprofile`),
        `--min-category-share`,
        `2`,
      ],
      expectedStderr: `expected a number from 0 to 1, got: "2"`,
      expectedStatus: 2,
    },
    {
      scenario: `--match-location without an equals sign`,
      args: [
        inputPath(`javascript.node.base.cpuprofile`),
        `--match-location`,
        `no-equals-sign`,
      ],
      expectedStderr: `expected REGEX=REPLACEMENT`,
      expectedStatus: 2,
    },
    {
      scenario: `--match-name with an invalid regex`,
      args: [
        inputPath(`javascript.node.base.cpuprofile`),
        `--match-name`,
        `[=x`,
      ],
      expectedStderr: `expected a valid regex`,
      expectedStatus: 2,
    },
    {
      scenario: `--category without an equals sign`,
      args: [inputPath(`javascript.node.base.cpuprofile`), `--category`, `x`],
      expectedStderr: `expected REGEX=CATEGORY`,
      expectedStatus: 2,
    },
    {
      scenario: `--category with an unknown category`,
      args: [
        inputPath(`javascript.node.base.cpuprofile`),
        `--category`,
        `x=our`,
      ],
      expectedStderr: `expected a function category listed by --help, got: "our"\n  hint: did you mean "ours"?`,
      expectedStatus: 2,
    },
    {
      scenario: `--hide with an invalid regex`,
      args: [inputPath(`javascript.node.base.cpuprofile`), `--hide`, `[`],
      expectedStderr: `expected a valid regex`,
      expectedStatus: 2,
    },
    {
      scenario: `--hide-category with an unknown category`,
      args: [
        inputPath(`javascript.node.base.cpuprofile`),
        `--hide-category`,
        `nope`,
      ],
      expectedStderr: `expected a category listed by --help, got: "nope"`,
      expectedStatus: 2,
    },
    {
      scenario: `more than two positional arguments`,
      args: [
        inputPath(`javascript.node.base.cpuprofile`),
        inputPath(`javascript.bun.base.cpuprofile`),
        inputPath(`javascript.deno.base.cpuprofile`),
      ],
      expectedStderr: `cannot be used together`,
      expectedStatus: 2,
    },
  ])(
    `errors on $scenario`,
    async ({ args, input, expectedStderr, expectedStatus }) => {
      const { status, stderr } = await runCli(args, input)

      expect(status).toBe(expectedStatus)
      expect(stderr).toContain(expectedStderr)
    },
  )
}

const runCli = (
  args: string[],
  input?: string | Uint8Array,
  env: NodeJS.ProcessEnv = {},
) =>
  new Promise<{ status: number | null; stdout: string; stderr: string }>(
    (resolve, reject) => {
      const child = spawn(process.execPath, [cliPath, ...args], {
        // Reuse compiled bytecode across the many spawned CLI processes,
        // roughly halving each one's startup.
        env: {
          ...process.env,
          // The developer's shell must not set the log level under test
          PROFILER_MD_LOG: undefined,
          NODE_COMPILE_CACHE: compileCachePath,
          ...env,
        },
      })

      const stdout: Buffer[] = []
      const stderr: Buffer[] = []
      child.stdout.on(`data`, (chunk: Buffer) => stdout.push(chunk))
      child.stderr.on(`data`, (chunk: Buffer) => stderr.push(chunk))
      child.on(`error`, reject)
      child.on(`close`, status =>
        resolve({
          status,
          stdout: Buffer.concat(stdout).toString(`utf8`),
          stderr: Buffer.concat(stderr).toString(`utf8`),
        }),
      )

      // A failed CLI run leaves stdin unread, so the write fails with
      // `EPIPE`. The assertions in each test report that failure.
      child.stdin.on(`error`, () => {})
      child.stdin.end(input)
    },
  )

const cliPath = join(import.meta.dirname, `index.ts`)

const compileCachePath = join(
  import.meta.dirname,
  `../../node_modules/.cache/node-compile-cache`,
)

import { mkdir, rm, symlink } from 'node:fs/promises'
import { join } from 'node:path'
import { build } from 'tsdown'
import type { TestProject } from 'vitest/node'
import { testCliDirectory } from './testing.ts'

/**
 * Bundles the CLI for the tests that spawn it, and rebuilds it before each
 * watch mode rerun. Node.js 22 strips the types of every TypeScript module on
 * every start, with no compile cache, so a spawned bundle starts several times
 * faster than the source.
 */
const setup = async (project: TestProject): Promise<void> => {
  await buildTestCli()
  project.onTestsRerun(buildTestCli)
}

export default setup

const buildTestCli = async (): Promise<void> => {
  await rm(testCliDirectory, { recursive: true, force: true })
  await mkdir(testCliDirectory, { recursive: true })
  // The CLI reads its help topics from `../../docs/`, relative to its module.
  await symlink(join(root, `docs`), join(testCliDirectory, `docs`))
  await build({
    config: false,
    cwd: root,
    entry: [join(root, `src/cli/index.ts`)],
    outDir: join(testCliDirectory, `dist/cli`),
    platform: `node`,
    dts: false,
    logLevel: `silent`,
  })
}

const root = join(import.meta.dirname, `../..`)

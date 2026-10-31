import { availableParallelism } from 'node:os'
import { join } from 'node:path'
import { Worker } from 'node:worker_threads'
import type { ExampleResult, ExampleTask } from './worker.ts'

/**
 * Measures how often an example that failed `pnpm check-examples` in CI fails
 * again, by replaying the examples its worker converted before it on fresh
 * workers, then checking it. Rounds run on as many workers at a time as the
 * check runs, so background compilation competes for the same cores.
 *
 * Takes the number of rounds as its argument.
 */

const rounds = Number(process.argv[2] ?? 24)

const FAILED_EXAMPLE = `cpp.clang.diff.trace-event.json`

// The examples the failed example's worker converted before it, in order, in
// https://github.com/TomerAberbach/profiler-md/actions/runs/41155323818/job/124400729595
const HISTORY = [
  `javascript.safari.26.diff.webkit-timeline-recording.json`,
  `java.async-profiler.alloc.diff.collapsed`,
  `javascript.safari.26.base.webkit-timeline-recording.json`,
  `groovy.async-profiler.alloc.diff.collapsed`,
  `java.jdk.current.hprof`,
  `julia.profile-jl.current.heapsnapshot`,
  `groovy.jdk.cpu.diff.jfr`,
  `groovy.async-profiler.alloc-dot.base.collapsed`,
  `java.async-profiler.cpu-dot.diff.collapsed`,
  `javascript.node.all-allocations.base.heapprofile`,
  `java.async-profiler.cpu.diff.collapsed`,
  `groovy.async-profiler.live.diff.jfr`,
  `groovy.jdk.cpu.current.jfr`,
  `groovy.jdk.alloc.base.jfr`,
  `javascript.node.base.trace-event.json`,
  `javascript.node.current.trace-event.json`,
  `javascript.node.base.cpuprofile`,
  `javascript.node.current.cpuprofile`,
  `groovy.async-profiler.cpu-threads-ann-sig.base.collapsed`,
  `groovy.async-profiler.all.current.jfr`,
  `julia.pprof-jl.cpu.diff.pprof`,
  `kotlin.async-profiler.cpu-threads-ann-sig.base.collapsed`,
  `kotlin.async-profiler.cpu-threads-ann-sig.current.collapsed`,
  `javascript.node.current.heapsnapshot`,
  `java.async-profiler.all.base.jfr`,
  `kotlin.async-profiler.nativemem.base.jfr`,
  `nix.nix.base.collapsed`,
  `java.jdk.all.diff.jfr`,
  `java.async-profiler.live.base.jfr`,
  `kotlin.async-profiler.alloc.current.collapsed`,
  `kotlin.async-profiler.alloc-dot.base.collapsed`,
  `groovy.async-profiler.cpu.diff.jfr`,
  `kotlin.jdk.lock.diff.jfr`,
  `ruby.rbspy.cpu.base.collapsed`,
  `julia.pprof-jl.cpu.base.pprof`,
]

const runRounds = async (): Promise<number> => {
  let nextRound = 0
  let failedRounds = 0
  await Promise.all(
    Array.from(
      { length: Math.min(availableParallelism(), rounds) },
      async () => {
        while (nextRound < rounds) {
          const round = ++nextRound
          if (await runRound(round)) {
            failedRounds++
          }
        }
      },
    ),
  )
  return failedRounds
}

/** Returns whether the failed example failed again. */
const runRound = async (round: number): Promise<boolean> => {
  const worker = new Worker(new URL(`worker.ts`, import.meta.url), {
    workerData: { check: true },
  })
  try {
    for (const exampleName of [...HISTORY, FAILED_EXAMPLE]) {
      const { failure } = await convert(worker, taskOf(exampleName))
      if (failure !== undefined) {
        process.stderr.write(
          `round ${round}: ${exampleName} failed:\n${failure}\n`,
        )
        return exampleName === FAILED_EXAMPLE
      }
    }
    process.stderr.write(`round ${round}: up to date\n`)
    return false
  } finally {
    await worker.terminate()
  }
}

const taskOf = (exampleName: string): ExampleTask => ({
  exampleName,
  inputPaths: (exampleName.includes(`.diff.`)
    ? [
        exampleName.replace(`.diff.`, `.base.`),
        exampleName.replace(`.diff.`, `.current.`),
      ]
    : [exampleName]
  ).map(filename => join(`examples/input`, filename)),
})

const convert = (worker: Worker, task: ExampleTask): Promise<ExampleResult> =>
  new Promise((resolve, reject) => {
    worker.once(`message`, (result: ExampleResult) => {
      worker.off(`error`, reject)
      resolve(result)
    })
    worker.once(`error`, reject)
    worker.postMessage(task)
  })

const failedRounds = await runRounds()
process.stdout.write(
  `${FAILED_EXAMPLE} failed ${failedRounds} of ${rounds} rounds on Node.js ${process.version} ${process.execArgv.join(` `)}\n`,
)

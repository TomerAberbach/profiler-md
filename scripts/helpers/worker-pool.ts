import { availableParallelism } from 'node:os'
import type { Worker } from 'node:worker_threads'

type PoolOptions<Task, Result> = {
  createWorker: () => Worker
  tasks: Task[]
  onResult: (result: Result, task: Task) => boolean
}

/**
 * Sends each task to the next idle worker, in order, and passes each result to
 * `onResult` as it arrives. Stops once `onResult` returns `false`.
 */
export const runOnWorkers = async <Task, Result>({
  createWorker,
  tasks,
  onResult,
}: PoolOptions<Task, Result>): Promise<void> => {
  const workers = Array.from(
    { length: Math.min(availableParallelism(), tasks.length) },
    createWorker,
  )
  try {
    await dispatch(workers, { tasks, onResult })
  } finally {
    await Promise.all(workers.map(worker => worker.terminate()))
  }
}

const dispatch = <Task, Result>(
  workers: Worker[],
  { tasks, onResult }: Pick<PoolOptions<Task, Result>, `tasks` | `onResult`>,
): Promise<void> => {
  let nextIndex = 0
  let done = 0
  let stopped = false
  return new Promise((resolve, reject) => {
    if (tasks.length === 0) {
      resolve()
    }
    for (const worker of workers) {
      let task: Task
      const sendNext = (): void => {
        if (nextIndex < tasks.length) {
          task = tasks[nextIndex]!
          nextIndex++
          worker.postMessage(task)
        } else if (done === tasks.length) {
          resolve()
        }
      }

      worker.on(`message`, (result: Result) => {
        if (stopped) {
          return
        }

        done++
        if (onResult(result, task)) {
          sendNext()
        } else {
          stopped = true
          resolve()
        }
      })
      worker.on(`error`, reject)
      sendNext()
    }
  })
}

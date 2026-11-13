/** Wraps a function so it runs on the first call and does nothing after. */
export const once = (fn: () => void): (() => void) => {
  let hasRun = false
  return () => {
    if (!hasRun) {
      hasRun = true
      fn()
    }
  }
}

/**
 * A limit on the units of work a computation spends, which stops the
 * computation partway once it spends more.
 */
export class WorkBudget {
  readonly #limit: number
  #spent = 0

  public constructor(limit: number) {
    this.#limit = limit
  }

  /** Whether a computation spent more than the limit. */
  public get isExhausted(): boolean {
    return this.#spent > this.#limit
  }

  /**
   * Adds to the spent work, and stops the computation {@link run} is running
   * once the spent work exceeds the limit.
   */
  public spend(work: number): void {
    this.#spent += work
    if (this.#spent > this.#limit) {
      throw new WorkBudgetExhaustedError()
    }
  }

  /**
   * Runs the computation unless the budget is exhausted, and returns whether it
   * finished. A computation the budget stops keeps the effects it had.
   */
  public run(compute: () => void): boolean {
    if (this.isExhausted) {
      return false
    }
    try {
      compute()
      return true
    } catch (error) {
      if (error instanceof WorkBudgetExhaustedError) {
        return false
      }
      throw error
    }
  }
}

class WorkBudgetExhaustedError extends Error {
  public constructor() {
    super(`work budget exhausted outside WorkBudget.run`)
    this.name = `WorkBudgetExhaustedError`
  }
}

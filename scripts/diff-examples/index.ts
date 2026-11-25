/**
 * Summarizes how commits change the example outputs, so a reviewer reads each
 * kind of change once instead of every changed line.
 *
 * Usage:
 * - `pnpm diff-examples` reports the working copy's commit
 * - `pnpm diff-examples <revisions>` reports each commit of a jj revset, or of
 *   a git range without jj
 */

import { formatReports } from './report.ts'
import type { CommitReport } from './report.ts'
import { currentRevision, readCommits } from './repository.ts'
import { summarizeChanges } from './summary.ts'

const [revisions = currentRevision] = process.argv.slice(2)
const reports: CommitReport[] = []
for (const { outputs, ...commit } of readCommits(revisions)) {
  reports.push({ ...commit, summary: summarizeChanges(outputs) })
}
console.log(
  formatReports(reports, { pullRequestURL: process.env.PULL_REQUEST_URL }),
)

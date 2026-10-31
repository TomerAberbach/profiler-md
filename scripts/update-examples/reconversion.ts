/**
 * Describes how converting an out-of-date example again compares with its
 * first conversion and its committed output.
 */
export const describeReconversion = ({
  again,
  first,
  committed,
}: {
  again: string
  first: string
  committed: string
}): string => {
  if (again === committed) {
    return `up to date`
  }
  return again === first
    ? `out of date the same way`
    : `out of date differently`
}

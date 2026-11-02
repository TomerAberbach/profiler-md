import type { FormattingProfileToMdOptions } from '../../options.ts'
import { functionNameColumns, measureColumns } from '../function/index.ts'
import type { FunctionMeasureRow, MeasureColumns } from '../function/index.ts'
import type { Metric } from '../metric.ts'
import type { Table } from '../table.ts'

/** The columns of a Callers or Callees table. */
export const arcColumns = (
  measure: MeasureColumns,
  entity: `Caller` | `Callee`,
  callCountMetric: Metric | null,
  options: FormattingProfileToMdOptions,
): Table<FunctionMeasureRow> => [
  ...measureColumns({ ...measure, countMetric: callCountMetric }),
  ...functionNameColumns(entity, options),
]

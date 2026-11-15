import type { FormattingProfileToMdOptions } from '../../options.ts'
import { functionNameColumns, measureColumns } from '../function/index.ts'
import type { FunctionMeasureRow, MeasureColumns } from '../function/index.ts'
import { countCell } from '../table.ts'
import type { Column, Table } from '../table.ts'

/** An arc's row, whose `func` is the arc's other endpoint. */
export type ArcRow = FunctionMeasureRow & { callCount: number }

/** The columns of a Callers or Callees table. */
export const arcColumns = (
  measure: MeasureColumns,
  entity: `Caller` | `Callee`,
  options: FormattingProfileToMdOptions,
): Table<ArcRow> => [
  ...measureColumns(measure),
  {
    header: { content: `Calls`, align: `right` },
    cellOf: row => countCell(row.callCount),
  } satisfies Column<ArcRow>,
  ...functionNameColumns(entity, options),
]

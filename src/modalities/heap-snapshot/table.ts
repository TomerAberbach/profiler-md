import { formatSourceLocation } from '../../location.ts'
import type { FileReference, SourceLocation } from '../../location.ts'
import type { FormattingProfileToMdOptions } from '../../options.ts'
import { formatCategory } from '../format.ts'
import {
  bytesCell,
  codeCell,
  countCell,
  percentCell,
  textCell,
} from '../table.ts'
import type { Table } from '../table.ts'
import type { HeapSnapshotNodeCategory } from './type.ts'

export type LabeledEntity = {
  name?: string
  nameLocation?: FileReference
  location?: SourceLocation
}

/**
 * An entity's displayed name: its URL-shaped name formatted relative to the
 * base URL when it has one, and its raw name otherwise.
 */
export const displayName = (
  entity: { name?: string; nameLocation?: FileReference },
  options: FormattingProfileToMdOptions,
): string | undefined =>
  entity.nameLocation
    ? formatSourceLocation(entity.nameLocation, options)
    : entity.name

type SizeRow = {
  /** The row's size in bytes. */
  size: number

  /** The total the row's `%` is computed against. */
  total: number
}

const sizeColumns = (sizeLabel: string): Table<SizeRow> => [
  {
    header: { content: `%`, align: `right` },
    changeDeltaBefore: true,
    cellOf: row => percentCell(row.total ? row.size / row.total : 0),
  },
  {
    header: { content: sizeLabel, align: `right` },
    primary: true,
    cellOf: row => bytesCell(row.size),
  },
]

const entityColumns = (
  nameLabel: string,
  hasLocation: boolean,
  options: FormattingProfileToMdOptions,
): Table<{ entity: LabeledEntity }> => [
  {
    header: nameLabel,
    cellOf: row =>
      // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
      codeCell(displayName(row.entity, options) || `(unknown)`),
  },
  ...(hasLocation
    ? [
        {
          header: `Location`,
          cellOf: (row: { entity: LabeledEntity }) =>
            codeCell(formatSourceLocation(row.entity.location, options)),
        },
      ]
    : []),
]

/** A category's row on one side. */
export type CategoryRow = SizeRow & {
  category: HeapSnapshotNodeCategory
  nodeCount: number
}

/** The columns of the overall largest node categories table. */
export const categoryColumns: Table<CategoryRow> = [
  {
    header: `Category`,
    cellOf: row => textCell(formatCategory(row.category)),
  },
  ...sizeColumns(`Size`),
  {
    header: { content: `Nodes`, align: `right` },
    cellOf: row => countCell(row.nodeCount),
  },
]

/** A constructor's row on one side. */
export type ConstructorRow = SizeRow & {
  entity: LabeledEntity
  instanceCount: number
}

/** The columns of the largest constructors table. */
export const constructorColumns = (
  hasLocation: boolean,
  options: FormattingProfileToMdOptions,
): Table<ConstructorRow> => [
  ...sizeColumns(`Size`),
  {
    header: { content: `Instances`, align: `right` },
    cellOf: row => countCell(row.instanceCount),
  },
  ...entityColumns(`Constructor`, hasLocation, options),
]

/** An instance group's row. */
export type InstanceRow = SizeRow & {
  instanceCount: number
  retainerPath: string
}

/** The columns of the largest instance groups table. */
export const instanceColumns: Table<InstanceRow> = [
  ...sizeColumns(`Size`),
  {
    header: { content: `Instances`, align: `right` },
    cellOf: row => countCell(row.instanceCount),
  },
  { header: `Path`, cellOf: row => codeCell(row.retainerPath) },
]

/** A function's row on one side. */
export type FunctionRow = SizeRow & {
  entity: LabeledEntity
  instanceCount: number
  pathCount: number
  examplePath: string
}

/** The columns of the largest functions table. */
export const functionColumns = (
  hasLocation: boolean,
  options: FormattingProfileToMdOptions,
): Table<FunctionRow> => [
  ...sizeColumns(`Retained`),
  {
    header: { content: `Instances`, align: `right` },
    cellOf: row => countCell(row.instanceCount),
  },
  {
    header: { content: `Paths`, align: `right` },
    cellOf: row => countCell(row.pathCount),
  },
  ...entityColumns(`Name`, hasLocation, options),
  { header: `Example path`, cellOf: row => codeCell(row.examplePath) },
]

/** A node's row within a retained or strings table. */
export type NodeRow = SizeRow & {
  name?: string
  path: string
}

/** The columns of a function's largest retained nodes table. */
export const retainedColumns: Table<NodeRow> = [
  ...sizeColumns(`Self`),
  {
    header: `Name`,
    cellOf: row =>
      // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
      codeCell(row.name || `(unknown)`),
  },
  { header: `Path`, cellOf: row => codeCell(row.path) },
]

/** The columns of the largest strings table. */
export const stringColumns = (hasValues: boolean): Table<NodeRow> => [
  ...sizeColumns(`Size`),
  ...(hasValues
    ? [
        {
          header: `Value`,
          cellOf: (row: NodeRow) => codeCell(row.name ?? `(unknown)`),
        },
      ]
    : []),
  { header: `Path`, cellOf: row => codeCell(row.path) },
]

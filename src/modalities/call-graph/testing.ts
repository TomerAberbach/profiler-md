import { allTablesAfterHeading, parseMd } from '../../helpers/testing.ts'
import type { Table } from '../../helpers/testing.ts'

export const selfValuesTables = (md: string, columnNoun: string): Table[] =>
  allTablesAfterHeading(parseMd(md), `Self ${columnNoun}`)

export const totalValuesTables = (md: string, columnNoun: string): Table[] =>
  allTablesAfterHeading(parseMd(md), `Total ${columnNoun}`)

import {
  Function,
  Location,
  Profile,
  Sample,
  StringTable,
  ValueType,
} from 'pprof-format'

export const makePprof = ({
  valueTypes = [{ type: `cpu`, unit: `nanoseconds` }],
  functions,
  locations,
  samples,
}: {
  valueTypes?: { type: string; unit: string }[]
  functions: {
    id: number
    name: string
    systemName?: string
    filename?: string
    startLine?: number
  }[]
  locations: { id: number; lines: { functionId: number; line: number }[] }[]
  samples: { locationIds: number[]; values: number[] }[]
}): Uint8Array => {
  const stringTable = new StringTable()
  const stringIndex = (string: string) => BigInt(stringTable.dedup(string))

  const profile = new Profile({
    stringTable,
    sampleType: valueTypes.map(
      ({ type, unit }) =>
        new ValueType({ type: stringIndex(type), unit: stringIndex(unit) }),
    ),
    function: functions.map(
      ({ id, name, systemName = ``, filename = ``, startLine = 0 }) =>
        new Function({
          id: BigInt(id),
          name: stringIndex(name),
          systemName: stringIndex(systemName),
          filename: stringIndex(filename),
          startLine: BigInt(startLine),
        }),
    ),
    location: locations.map(
      ({ id, lines }) =>
        new Location({
          id: BigInt(id),
          line: lines.map(({ functionId, line }) => ({
            functionId: BigInt(functionId),
            line: BigInt(line),
          })),
        }),
    ),
    sample: samples.map(
      ({ locationIds, values }) =>
        new Sample({
          locationId: locationIds.map(BigInt),
          value: values.map(BigInt),
        }),
    ),
  })

  return profile.encode()
}

import {
  Function,
  Location,
  Mapping,
  Profile,
  Sample,
  StringTable,
  ValueType,
} from 'pprof-format'

export const makePprof = ({
  valueTypes = [{ type: `cpu`, unit: `nanoseconds` }],
  functions,
  mappings = [],
  locations,
  samples,
}: {
  valueTypes?: { type: string; unit: string }[]
  functions: {
    id: number | bigint
    name: string
    systemName?: string
    filename?: string
    startLine?: number
  }[]
  mappings?: {
    id: number | bigint
    memoryStart: number
    fileOffset?: number
    filename: string
  }[]
  locations: {
    id: number | bigint
    mappingId?: number | bigint
    address?: number
    lines: { functionId: number | bigint; line: number }[]
  }[]
  samples: { locationIds: (number | bigint)[]; values: number[] }[]
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
    mapping: mappings.map(
      ({ id, memoryStart, fileOffset = 0, filename }) =>
        new Mapping({
          id: BigInt(id),
          memoryStart: BigInt(memoryStart),
          fileOffset: BigInt(fileOffset),
          filename: stringIndex(filename),
        }),
    ),
    location: locations.map(
      ({ id, mappingId = 0, address = 0, lines }) =>
        new Location({
          id: BigInt(id),
          mappingId: BigInt(mappingId),
          address: BigInt(address),
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

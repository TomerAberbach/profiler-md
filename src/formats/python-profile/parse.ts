/**
 * A parsed Python cProfile/profile output.
 *
 * @see https://docs.python.org/3/library/profile.html
 */
export type PythonProfile = {
  entries: PythonProfileEntry[]
}

/** A single function entry from a Python profile. */
export type PythonProfileEntry = {
  /** Total number of calls to this function. */
  ncalls: number

  /** Time spent in the function body excluding callees, in seconds. */
  tottime: number

  /** Time spent in the function and all its callees, in seconds. */
  cumtime: number

  /** The function name. */
  name: string

  /**
   * The file path where the function is defined, or undefined for built-ins
   * and other C-level functions.
   */
  filename?: string

  /** The 1-based line number where the function is defined, if known. */
  line?: number
}

const HEADER_MARKER = `ncalls  tottime  percall  cumtime  percall`

// ncalls can be "n" or "n/m" (total/primitive for recursive calls)
const DATA_LINE_RE =
  /^\s*(\d+(?:\/\d+)?)\s+([\d.]+)\s+[\d.]+\s+([\d.]+)\s+[\d.]+\s+(.+?)\s*$/

// Matches filename:lineno(funcname)
const LOCATION_RE = /^(.*):(\d+)\(([^)]*)\)$/

export const detectPythonProfile = (data: Uint8Array): PythonProfile | undefined => {
  const text = new TextDecoder().decode(data)
  if (!text.includes(HEADER_MARKER)) {
    return undefined
  }
  return parsePythonProfileText(text)
}

export const parsePythonProfile = (data: Uint8Array): PythonProfile =>
  parsePythonProfileText(new TextDecoder().decode(data))

const parsePythonProfileText = (text: string): PythonProfile => {
  const lines = text.split(`\n`)

  // Find the header line to know where data starts
  const headerIndex = lines.findIndex(line => line.includes(HEADER_MARKER))
  if (headerIndex === -1) {
    return { entries: [] }
  }

  const entries: PythonProfileEntry[] = []
  for (let i = headerIndex + 1; i < lines.length; i++) {
    const line = lines[i]!
    if (!line.trim()) {
      continue
    }
    const entry = parseLine(line)
    if (entry) {
      entries.push(entry)
    }
  }

  return { entries }
}

const parseLine = (line: string): PythonProfileEntry | undefined => {
  const match = DATA_LINE_RE.exec(line)
  if (!match) {
    return undefined
  }

  const [, ncallsStr, tottimeStr, cumtimeStr, locationStr] = match

  // For recursive calls, format is "total/primitive"; use total
  const slashIndex = ncallsStr!.indexOf(`/`)
  const ncalls =
    slashIndex >= 0
      ? parseInt(ncallsStr!.slice(0, slashIndex), 10)
      : parseInt(ncallsStr!, 10)

  const tottime = parseFloat(tottimeStr!)
  const cumtime = parseFloat(cumtimeStr!)

  return parseEntryLocation(ncalls, tottime, cumtime, locationStr!)
}

const parseEntryLocation = (
  ncalls: number,
  tottime: number,
  cumtime: number,
  location: string,
): PythonProfileEntry => {
  // {built-in method builtins.exec} or {method 'name' of 'type' objects}
  if (location.startsWith(`{`) && location.endsWith(`}`)) {
    return { ncalls, tottime, cumtime, name: location.slice(1, -1) }
  }

  // filename:lineno(funcname) — greedy match handles colons in paths
  const match = LOCATION_RE.exec(location)
  if (match) {
    const [, filename, lineStr, name] = match
    return {
      ncalls,
      tottime,
      cumtime,
      name: name || `(anonymous)`,
      filename: filename || undefined,
      line: parseInt(lineStr!, 10),
    }
  }

  return { ncalls, tottime, cumtime, name: location }
}

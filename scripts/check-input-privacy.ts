/**
 * Write every rule here to match its data whatever format wrote the input, so
 * a new format's inputs are checked without a rule for it.
 */

import { execFileSync } from 'node:child_process'
import { readdirSync, readFileSync, statSync } from 'node:fs'
import { join, relative } from 'node:path'
import { lintSource } from '@secretlint/core'
import { creator as recommendedSecretRules } from '@secretlint/secretlint-rule-preset-recommend'
import { parseCookie, parseSetCookie } from 'cookie'
import { Address4, Address6 } from 'ip-address'
import {
  decompressIdentified,
  tryDecompressBrotli,
} from '../src/formats/compression.ts'

const INPUT_DIRECTORY = `examples/input`
const ASSETS_DIRECTORY = `scripts/inputs/assets`

const MIN_RUN_LENGTH = 6

/**
 * The byte entropy, in bits per byte, above which an input counts as compressed
 * or encrypted. Compressed bytes measure 7.9 and above. The committed inputs,
 * decompressed as the pipeline decompresses them, measure at most 6.9, with the
 * binary formats (perf.data, memray) well below the text ones.
 */
const MAX_ENTROPY = 7.5

/**
 * Inputs shorter than this skip the entropy check, because a few hundred bytes
 * of anything measure as noise.
 */
const MIN_ENTROPY_BYTES = 4096

const ENTROPY_SAMPLE_BYTES = 8 * 1024 * 1024

const UTF16_SAMPLE_BYTES = 4096

/**
 * Inputs shorter than this count as UTF-16 only with a byte order mark, because
 * a few code units of anything can alternate with zero bytes.
 */
const MIN_UTF16_BYTES = 64

/** The fraction of a parity's bytes that must be zero for UTF-16 text. */
const UTF16_ZERO_FRACTION = 0.9

/**
 * A match found in a committed file under `scripts/inputs/assets/` needs no
 * entry here. A fetched asset is gitignored, so CI has none, and a match in
 * one needs an entry.
 */
const ALLOWLIST: readonly { value: string; reason: string }[] = [
  {
    value: `sindresorhus@gmail.com`,
    reason: `the author field of an npm package the Node heap snapshot workload loads`,
  },
  {
    value: `nonestep.revival@gmail.com`,
    reason: `a tweet in simdjson's twitter.json sample the heap snapshot workloads parse, read with the \`n\` of the escaped newline before it`,
  },
]

type Rule = {
  name: string
  /** Why a match is sensitive, for the report. */
  description: string
  /** Every match in the text, as the value to report. */
  matches: (text: string) => Iterable<string> | Promise<Iterable<string>>
  /** The count of distinct matches at which the rule fails, one by default. */
  threshold?: number
}

const regexMatches =
  (regex: RegExp) =>
  (text: string): string[] =>
    [...text.matchAll(regex)].map(match => match[0])

/**
 * The IPv4 ranges that address no host on the internet: private, loopback,
 * link-local, carrier NAT, multicast, documentation, and the unspecified and
 * broadcast addresses.
 */
const NON_PUBLIC_IPV4 = [
  `0.0.0.0/8`,
  `10.0.0.0/8`,
  `100.64.0.0/10`,
  `127.0.0.0/8`,
  `169.254.0.0/16`,
  `172.16.0.0/12`,
  `192.0.2.0/24`,
  `192.168.0.0/16`,
  `198.51.100.0/24`,
  `203.0.113.0/24`,
  `224.0.0.0/4`,
  `255.255.255.255/32`,
].map(range => new Address4(range))

/**
 * The object identifier arcs under which the identifiers a heap or a binary
 * contains fall: X.500 attributes and certificate extensions, RSA and US
 * standards, the internet, OIW, Kerberos, and the Edwards curve algorithms.
 */
const OBJECT_IDENTIFIER_ARCS = [
  `0.9.2342.`,
  `1.2.840.`,
  `1.3.6.1.`,
  `1.3.14.`,
  `1.3.101.`,
  `2.5.4.`,
  `2.5.29.`,
  `2.16.840.`,
]

/**
 * Whether four dotted numbers are an object identifier (e.g. `2.5.29.32`)
 * rather than an address: one under a known arc. A binary byte before the
 * identifier can read as a digit (`82.5.29.19`), so the check also looks for
 * the arc after each of the root's leading digits. The X.660 shape alone, a
 * root arc of at most 2 followed by an arc of at most 39, proves nothing,
 * because a public address such as `1.32.5.7` has it too.
 */
const isObjectIdentifier = (candidate: string): boolean => {
  const rootLength = candidate.indexOf(`.`)
  for (let start = 0; start < rootLength; start++) {
    const suffix = candidate.slice(start)
    if (OBJECT_IDENTIFIER_ARCS.some(arc => suffix.startsWith(arc))) {
      return true
    }
  }
  return false
}

/**
 * A version has the same shape as an address, so an address requires an octet
 * past 31.
 */
const isPublicIpv4 = (candidate: string): boolean => {
  if (!Address4.isValid(candidate)) {
    return false
  }
  const octets = candidate.split(`.`).map(Number)
  if (!octets.some(octet => octet >= 32) || isObjectIdentifier(candidate)) {
    return false
  }
  const address = new Address4(candidate)
  return !NON_PUBLIC_IPV4.some(range => address.isInSubnet(range))
}

/**
 * The parser rejects timestamps and MAC addresses, and the type check excludes
 * loopback, link-local, unique-local, multicast, and the unspecified address.
 * A qualified name spelled in hex letters (`face::feed`) parses as an address
 * too, so a candidate requires a digit and at least three colons.
 */
const isPublicIpv6 = (candidate: string): boolean =>
  /\d/u.test(candidate) &&
  candidate.split(`:`).length > 3 &&
  Address6.isValid(candidate) &&
  new Address6(candidate).getType() === `Global unicast`

/** What a hand-redacted input replaces a sensitive header part with. */
const REDACTED = `redacted`

/**
 * Header names whose values identify the client, each with the check that its
 * value has been redacted.
 */
const CLIENT_HEADERS = new Map<string, (value: string) => boolean>([
  [
    `cookie`,
    value =>
      Object.values(parseCookie(value)).every(cookie => cookie === REDACTED),
  ],
  [`set-cookie`, value => parseSetCookie(value).value === REDACTED],
  [`authorization`, value => value === REDACTED],
  [`proxy-authorization`, value => value === REDACTED],
  [`x-client-ip`, value => value === REDACTED],
  [`x-forwarded-for`, value => value === REDACTED],
  [`x-real-ip`, value => value === REDACTED],
  [`forwarded`, value => value === REDACTED],
])

const headerMatches = (text: string): string[] => {
  const values: string[] = []
  // A HAR header (`"name":"Cookie","value":"…"`) or a raw header line.
  const regex =
    /"name":"(?<harName>[A-Za-z-]+)","value":"(?<harValue>(?:[^"\\]|\\.)*)"|^(?<rawName>[A-Za-z-]+):[ \t]*(?<rawValue>\S.*)$/gmu
  for (const match of text.matchAll(regex)) {
    const groups = match.groups!
    const name = (groups.harName ?? groups.rawName)!.toLowerCase()
    const value = (groups.harValue ?? groups.rawValue)!
    const isRedacted = CLIENT_HEADERS.get(name)
    if (isRedacted && !isRedacted(value)) {
      values.push(`${name}: ${value}`)
    }
  }
  return values
}

/**
 * Environment variable names an interactive session sets and a build shell
 * leaves unset. Several in one input mean the profiler dumped the environment
 * of a workload run outside `generate-inputs`, whose shell drops the host's
 * environment. `HOME`, `USER`, `SHELL`, and `TMPDIR` are absent because the
 * shell keeps or sets them itself.
 */
const SESSION_ENVIRONMENT = [
  `LOGNAME`,
  `OLDPWD`,
  `SSH_AUTH_SOCK`,
  `GNUPGHOME`,
  `TERM_PROGRAM`,
  `TERM_PROGRAM_VERSION`,
  `TERM_SESSION_ID`,
  `COLORTERM`,
  `EDITOR`,
  `VISUAL`,
  `PAGER`,
  `GIT_ASKPASS`,
  `VSCODE_GIT_IPC_HANDLE`,
  `__CF_USER_TEXT_ENCODING`,
  `__CFBundleIdentifier`,
  `XPC_SERVICE_NAME`,
  `XPC_FLAGS`,
]

const environmentMatches = (text: string): string[] =>
  SESSION_ENVIRONMENT.filter(name =>
    new RegExp(`(?<![A-Za-z0-9_])${name}(?![A-Za-z0-9_])`, `u`).test(text),
  )

/**
 * The credentials secretlint's recommended rules recognize: cloud provider
 * keys, source host and package registry tokens, private keys, and basic
 * authentication in URLs.
 */
const credentialMatches = async (text: string): Promise<string[]> => {
  const { messages } = await lintSource({
    source: {
      filePath: `input.txt`,
      ext: `.txt`,
      content: text,
      contentType: `text`,
    },
    options: {
      noPhysicFilePath: true,
      config: {
        rules: [
          {
            id: `@secretlint/secretlint-rule-preset-recommend`,
            rule: recommendedSecretRules,
            rules: [],
          },
        ],
      },
    },
  })
  return messages.map(
    ({ ruleId, range: [start, end] }) =>
      `${text.slice(start, end)} (${ruleId.replace(`@secretlint/secretlint-rule-`, ``)})`,
  )
}

const RULES: readonly Rule[] = [
  {
    name: `credential`,
    description: `a credential in a known token format`,
    matches: credentialMatches,
  },
  {
    name: `email`,
    description: `an email address`,
    // Symbol names contain `@` too (`caseInfo@574.Invoke`), so a domain's labels
    // must start with a letter and end in a top-level domain people have
    // addresses at. The pattern starts at the `@`, with the local part in a
    // lookbehind, so the engine skips to each `@` instead of trying every
    // word in the text.
    matches: text =>
      [
        ...text.matchAll(
          /@(?<=(?<![\w.+-])(?<local>[A-Za-z0-9][\w.%+-]*)@)[A-Za-z][\w.-]*\.(?:com|org|net|edu|gov|mil|io|dev|app|me|co|us|uk|ca|au|de|fr|ch|nl|se|no|fi|dk|ie|at|be|it|es|pl|cz|pt|il|in|jp|kr|cn|tw|hk|sg|nz|za|br|mx|ar|cl|ru|ai|info|email|xyz)(?![\w.-])/giu,
        ),
      ].map(match => `${match.groups!.local}${match[0]}`),
  },
  {
    name: `ipv4`,
    description: `a public IPv4 address`,
    // The pattern starts at the first dot, with the octet before it in a
    // lookbehind, so the engine skips to each dot instead of trying every
    // digit in the text.
    matches: text =>
      [
        ...text.matchAll(
          /\.(?<=(?<![\w.@+-])(?<head>\d{1,3})\.)\d{1,3}\.\d{1,3}\.\d{1,3}(?![\w.@+-])/gu,
        ),
      ]
        .map(match => `${match.groups!.head}${match[0]}`)
        .filter(isPublicIpv4),
  },
  {
    name: `ipv6`,
    description: `a public IPv6 address`,
    // An address has a colon within the first five characters and another
    // within the five after it. The pattern starts at the first, with the
    // group before it in a lookbehind, so the engine skips to each colon
    // instead of trying every hex word in the text.
    matches: text =>
      [
        ...text.matchAll(
          /:(?<=(?<![\w:])(?<head>[\dA-Fa-f]{0,4}):)(?=[\dA-Fa-f]{0,4}:)[\dA-Fa-f:]*(?![\w:])/gu,
        ),
      ]
        .map(match => `${match.groups!.head}${match[0]}`)
        .filter(
          candidate =>
            candidate.length >= 6 &&
            candidate.length <= 45 &&
            isPublicIpv6(candidate),
        ),
  },
  {
    name: `client header`,
    description: `a cookie, authorization, or client address header`,
    matches: headerMatches,
  },
  {
    name: `private path`,
    description: `a path inside a home directory's credentials or personal state`,
    // Package depots are dot directories too (`.julia`, `.node_modules`,
    // `.cache`), so only the directories that contain credentials or personal
    // state count.
    matches: regexMatches(
      /\/(?:Users|home)\/[^/\s"]+\/(?:\.(?:ssh|gnupg|aws|azure|gcloud|kube|docker|config|netrc|npmrc|pypirc|gitconfig|git-credentials|bash_history|zsh_history|local\/share)(?![A-Za-z0-9_])[^\s"]*|Library\/(?:Application Support|Keychains|Cookies|Mail|Messages|Safari|Preferences)[^\s"]*)/gu,
    ),
  },
  {
    name: `environment`,
    description: `the generating session's environment variables`,
    matches: environmentMatches,
    threshold: 4,
  },
  {
    name: `process list`,
    description: `applications running on the generating machine`,
    matches: regexMatches(
      /\/Applications\/[^/\s"]+\.app\b|\/[^/\s"]+\.app\/Contents\/MacOS\//gu,
    ),
    threshold: 3,
  },
]

type Finding = { rule: Rule; values: Map<string, number> }

const checkInput = async (
  path: string,
  allowed: Set<string>,
): Promise<Finding[]> => {
  const bytes = decompress(new Uint8Array(readFileSync(path)))
  const text = [textOf(bytes), ...embeddedTexts(bytes)].join(`\n`)
  const findings: Finding[] = []
  const opaque = opaqueFinding(bytes)
  if (opaque) {
    findings.push(opaque)
  }
  for (const rule of RULES) {
    const finding = await ruleFinding(rule, text, allowed)
    if (finding) {
      findings.push(finding)
    }
  }
  return findings
}

/** Strips what the pipeline strips, so the check reads what the parsers read. */
const decompress = (bytes: Uint8Array): Uint8Array => {
  const { data, compressed } = decompressIdentified(bytes)
  return compressed ? data : (tryDecompressBrotli(data) ?? data)
}

/**
 * A JSON string whose first escaped bytes are a gzip or LZ4 magic: a binary
 * body stored as one character per byte (e.g. a HAR request's `postData`).
 */
const JSON_BYTE_STRING =
  /"(?:\\u001[Ff](?:\u008B|\\u008[Bb])|\\u0004\\"M\\u0018)(?:[^"\\]|\\.)*"/gu

/** Base64 or base64url text that decodes to a gzip magic. */
const BASE64_GZIP = /(?<![\w+/-])H4sI[\w+/-]+={0,2}/gu

/**
 * A prefix of every {@link JSON_BYTE_STRING} or {@link BASE64_GZIP} match, to
 * find in the bytes before decoding them.
 */
const EMBEDDED_STREAM_PREFIXES = [`\\u001`, `\\u0004\\"M`, `H4sI`]

/**
 * The texts of the compressed streams the bytes embed, and of the streams
 * those embed in turn. The rules match only the bytes' own printable runs,
 * which a stream embedded in a text input hides.
 */
const embeddedTexts = (bytes: Uint8Array): string[] => {
  const buffer = Buffer.from(bytes.buffer, bytes.byteOffset, bytes.byteLength)
  if (!EMBEDDED_STREAM_PREFIXES.some(prefix => buffer.includes(prefix))) {
    return []
  }
  const text = new TextDecoder().decode(bytes)
  return [
    ...[...text.matchAll(JSON_BYTE_STRING)].map(([literal]) =>
      jsonByteStringBytes(literal),
    ),
    ...[...text.matchAll(BASE64_GZIP)].map(([encoded]) => base64Bytes(encoded)),
  ].flatMap(stream => (stream ? streamTexts(stream) : []))
}

/**
 * The bytes a JSON string stores one per character, or `undefined` for a
 * match that is no valid JSON string or holds a character past a byte.
 */
const jsonByteStringBytes = (literal: string): Uint8Array | undefined => {
  let decoded: string
  try {
    decoded = JSON.parse(literal) as string
  } catch {
    return undefined
  }
  const bytes = new Uint8Array(decoded.length)
  for (let i = 0; i < decoded.length; i++) {
    const code = decoded.codePointAt(i)!
    if (code > 0xff) {
      return undefined
    }
    bytes[i] = code
  }
  return bytes
}

const base64Bytes = (encoded: string): Uint8Array | undefined => {
  try {
    return Uint8Array.fromBase64(
      encoded.replaceAll(`-`, `+`).replaceAll(`_`, `/`),
    )
  } catch {
    return undefined
  }
}

/**
 * The text of a compressed stream and of the streams it embeds, or nothing
 * when the stream fails to decompress, because the rules can read no text of
 * a truncated or lossily stored body.
 */
const streamTexts = (stream: Uint8Array): string[] => {
  let bytes
  try {
    bytes = decompressIdentified(stream).data
  } catch {
    return []
  }
  return [textOf(bytes), ...embeddedTexts(bytes)]
}

/**
 * The text the rules match: the printable ASCII runs of the bytes. UTF-16 text
 * has a zero byte between every two ASCII characters, so it is decoded first,
 * or no run would reach the length a rule needs.
 */
const textOf = (bytes: Uint8Array): string => {
  const encoding = utf16Encoding(bytes)
  return printableRuns(
    encoding
      ? new TextEncoder().encode(new TextDecoder(encoding).decode(bytes))
      : bytes,
  )
}

/**
 * The UTF-16 encoding of the bytes, by their byte order mark or by the zero
 * bytes at one parity of a leading sample, or `undefined` for any other bytes.
 */
const utf16Encoding = (
  bytes: Uint8Array,
): `utf-16le` | `utf-16be` | undefined => {
  if (bytes[0] === 0xff && bytes[1] === 0xfe) {
    return `utf-16le`
  }
  if (bytes[0] === 0xfe && bytes[1] === 0xff) {
    return `utf-16be`
  }
  const length = Math.min(bytes.length, UTF16_SAMPLE_BYTES) & ~1
  if (length < MIN_UTF16_BYTES) {
    return undefined
  }
  let evenZeros = 0
  let oddZeros = 0
  for (let i = 0; i < length; i += 2) {
    evenZeros += bytes[i] === 0 ? 1 : 0
    oddZeros += bytes[i + 1] === 0 ? 1 : 0
  }
  const pairs = length / 2
  const most = pairs * UTF16_ZERO_FRACTION
  const few = pairs * (1 - UTF16_ZERO_FRACTION)
  if (oddZeros >= most && evenZeros <= few) {
    return `utf-16le`
  }
  if (evenZeros >= most && oddZeros <= few) {
    return `utf-16be`
  }
  return undefined
}

/** The printable ASCII runs of the bytes, joined by newlines. */
const printableRuns = (bytes: Uint8Array): string => {
  // Each newline takes the place of a byte that ended a run, so the joined
  // runs fit in the input's length.
  const joined = Buffer.allocUnsafe(bytes.length)
  // The length of the kept runs, and where the current run starts in
  // `joined`. A run shorter than the minimum is dropped by rewinding to it.
  let length = 0
  let runStart = -1
  // Iterating a large typed array with `for...of` runs about 2.5 times slower.
  // eslint-disable-next-line @typescript-eslint/prefer-for-of
  for (let i = 0; i < bytes.length; i++) {
    const byte = bytes[i]!
    if ((byte >= 0x20 && byte < 0x7f) || byte === 0x09) {
      if (runStart < 0) {
        if (length > 0) {
          joined[length++] = 0x0a
        }
        runStart = length
      }
      joined[length++] = byte
    } else if (runStart >= 0) {
      if (length - runStart < MIN_RUN_LENGTH) {
        length = runStart > 0 ? runStart - 1 : 0
      }
      runStart = -1
    }
  }
  if (runStart >= 0 && length - runStart < MIN_RUN_LENGTH) {
    length = runStart > 0 ? runStart - 1 : 0
  }
  return joined.toString(`latin1`, 0, length)
}

const opaqueFinding = (bytes: Uint8Array): Finding | undefined => {
  const entropy = bytes.length >= MIN_ENTROPY_BYTES ? entropyOf(bytes) : 0
  if (entropy <= MAX_ENTROPY) {
    return undefined
  }
  return {
    rule: {
      name: `opaque`,
      description: `bytes that read as compressed or encrypted, which no rule can match. A compression the pipeline does not strip?`,
      matches: () => [],
    },
    values: new Map([[`${entropy.toFixed(2)} bits per byte`, 1]]),
  }
}

/** The Shannon entropy of the bytes' values, in bits per byte. */
const entropyOf = (bytes: Uint8Array): number => {
  const counts = new Float64Array(256)
  const length = Math.min(bytes.length, ENTROPY_SAMPLE_BYTES)
  for (let i = 0; i < length; i++) {
    const byte = bytes[i]!
    counts[byte] = counts[byte]! + 1
  }
  let entropy = 0
  for (const count of counts) {
    if (count > 0) {
      const probability = count / length
      entropy -= probability * Math.log2(probability)
    }
  }
  return entropy
}

const ruleFinding = async (
  rule: Rule,
  text: string,
  allowed: Set<string>,
): Promise<Finding | undefined> => {
  const values = new Map<string, number>()
  for (const value of await rule.matches(text)) {
    if (allowed.has(value)) {
      continue
    }
    values.set(value, (values.get(value) ?? 0) + 1)
  }
  return values.size > 0 && values.size >= (rule.threshold ?? 1)
    ? { rule, values }
    : undefined
}

const assetMatches = async (): Promise<Set<string>> => {
  const allowed = new Set<string>()
  for (const path of committedAssets()) {
    const text = textOf(new Uint8Array(readFileSync(path)))
    for (const rule of RULES) {
      for (const value of await rule.matches(text)) {
        allowed.add(value)
      }
    }
  }
  return allowed
}

/**
 * The committed assets, listed by git so a fetched asset, which is gitignored
 * and absent in CI, exempts nothing locally either.
 */
const committedAssets = (): string[] =>
  execFileSync(`git`, [`ls-files`, `-z`, ASSETS_DIRECTORY], {
    encoding: `utf8`,
  })
    .split(`\0`)
    .filter(path => path.length > 0)

const committedInputs = (): string[] =>
  readdirSync(INPUT_DIRECTORY)
    .map(name => join(INPUT_DIRECTORY, name))
    .filter(path => statSync(path).isFile())
    .sort()

const report = (path: string, findings: Finding[]): void => {
  console.error(`${relative(process.cwd(), path)}:`)
  for (const { rule, values } of findings) {
    const shown = [...values.entries()].slice(0, 8)
    console.error(`  ${rule.name}: ${rule.description}`)
    for (const [value, count] of shown) {
      const display = value.length > 120 ? `${value.slice(0, 117)}...` : value
      console.error(`    ${display}${count > 1 ? ` (x${count})` : ``}`)
    }
    if (values.size > shown.length) {
      console.error(`    ... and ${values.size - shown.length} more`)
    }
  }
}

const paths =
  process.argv.length > 2 ? process.argv.slice(2) : committedInputs()

const allowed = new Set([
  ...(await assetMatches()),
  ...ALLOWLIST.map(({ value }) => value),
])

let failed = 0
for (const path of paths) {
  const findings = await checkInput(path, allowed)
  if (findings.length > 0) {
    failed++
    report(path, findings)
  }
}

if (failed > 0) {
  console.error(
    `\n${failed} of ${paths.length} inputs contain data about the generating machine. Regenerate them without it (see docs/languages/ for the profiler's flags), or redact it.`,
  )
  process.exit(1)
}
console.log(
  `${paths.length} inputs contain no data about the generating machine`,
)

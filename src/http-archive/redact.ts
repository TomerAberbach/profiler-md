/**
 * Redaction of sensitive HTTP data.
 *
 * HAR files routinely embed secrets (auth headers, cookies, tokens in query
 * strings, credential bodies). Redaction is on by default and configurable. The
 * built-in wordlist mirrors the field coverage of Chrome DevTools' sanitized
 * HAR export, google/har-sanitizer, and Cloudflare's sanitizer.
 */

/** A field of HTTP data that may contain a sensitive value. */
export type RedactableField = {
  kind: `header` | `cookie` | `query` | `body`
  name: string
  value: string
}

/** The marker substituted for redacted values. */
export const REDACTED = `[REDACTED]`

/** The raw `redact` option: a boolean toggle or a per-field callback. */
export type Redact = boolean | ((field: RedactableField) => boolean | string)

/** Resolves a {@link RedactableField} to its replacement, or `undefined` to keep it. */
export type NormalizedRedact = (field: RedactableField) => string | undefined

// Lowercased request and response header names that carry credentials.
const SENSITIVE_HEADERS = new Set([
  `authorization`,
  `proxy-authorization`,
  `cookie`,
  `set-cookie`,
  `www-authenticate`,
  `x-api-key`,
  `x-auth-token`,
  `x-access-token`,
  `x-csrf-token`,
  `x-xsrf-token`,
  `api-key`,
  `apikey`,
  `auth-token`,
  `x-amz-security-token`,
])

// Lowercased query parameter names that carry credentials or tokens.
const SENSITIVE_QUERY_PARAMS = new Set([
  `access_token`,
  `id_token`,
  `token`,
  `api_key`,
  `apikey`,
  `key`,
  `code`,
  `code_verifier`,
  `client_secret`,
  `password`,
  `secret`,
  `auth`,
  `session`,
  `sig`,
  `signature`,
  `saml`,
  `samlrequest`,
  `samlresponse`,
  `assertion`,
  `state`,
  `authenticity_token`,
])

/** Returns whether the built-in wordlist considers the field sensitive. */
export const isSensitiveField = ({ kind, name }: RedactableField): boolean => {
  switch (kind) {
    case `header`:
      return SENSITIVE_HEADERS.has(name.toLowerCase())
    case `query`:
      return SENSITIVE_QUERY_PARAMS.has(name.toLowerCase())
    case `cookie`:
    case `body`:
      // Cookie values and bodies are always treated as sensitive.
      return true
  }
}

/**
 * Resolves the raw {@link Redact} option to a {@link NormalizedRedact}.
 *
 * `false` disables all redaction. `true` (the default) uses the built-in
 * wordlist. A function fully controls each field: return a string to substitute
 * a custom value, `true` to redact with the {@link REDACTED} marker, or `false`
 * to keep the value.
 */
export const normalizeRedact = (
  redact: Redact | undefined,
): NormalizedRedact => {
  if (redact === false) {
    return () => undefined
  }
  if (redact === undefined || redact === true) {
    return field => (isSensitiveField(field) ? REDACTED : undefined)
  }

  return field => {
    const result = redact(field)
    if (typeof result === `string`) {
      return result
    }
    return result ? REDACTED : undefined
  }
}

/**
 * Redacts sensitive query parameters in a URL's query string, leaving the rest
 * of the URL untouched.
 *
 * Operates on the raw string rather than `URL` so a non-parseable URL still has
 * its query redacted, and so the original parameter order and encoding are
 * preserved.
 */
export const redactUrl = (url: string, redact: NormalizedRedact): string => {
  const queryStart = url.indexOf(`?`)
  if (queryStart === -1) {
    return url
  }

  const hashStart = url.indexOf(`#`, queryStart)
  const queryEnd = hashStart === -1 ? url.length : hashStart
  const prefix = url.slice(0, queryStart + 1)
  const query = url.slice(queryStart + 1, queryEnd)
  const suffix = url.slice(queryEnd)

  const redactedQuery = query
    .split(`&`)
    .map(pair => {
      const equals = pair.indexOf(`=`)
      if (equals === -1) {
        return pair
      }

      const rawName = pair.slice(0, equals)
      const rawValue = pair.slice(equals + 1)
      const replacement = redact({
        kind: `query`,
        name: safeDecode(rawName),
        value: safeDecode(rawValue),
      })
      return replacement === undefined ? pair : `${rawName}=${replacement}`
    })
    .join(`&`)

  return `${prefix}${redactedQuery}${suffix}`
}

const safeDecode = (value: string): string => {
  try {
    return decodeURIComponent(value.replaceAll(`+`, ` `))
  } catch {
    return value
  }
}

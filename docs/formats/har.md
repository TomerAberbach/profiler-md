# HTTP archive

HAR (HTTP Archive) is a JSON format that logs a browser or tool's HTTP
request/response pairs, with per-request timings, sizes, status codes, headers,
cookies, and bodies. It's exported by Chrome DevTools, Firefox, Safari, Charles,
Fiddler, and many HTTP clients.

The summary groups requests by status, host, and MIME type, and ranks the
slowest requests (by elapsed time) and largest requests (by bytes transferred).
When the archive records page navigations, a per-page table reports request
counts and load timings.

Files use the `.har` extension and have no registered MIME type, so they're
detected by shape (a `log` object with a `version` and an `entries` array).

## Redaction

HAR files routinely embed secrets — auth headers, cookies, and tokens in query
strings. Sensitive query parameters (e.g. `access_token`, `password`, `code`)
are redacted by default using a built-in wordlist. Disable redaction with
`--no-redact` on the CLI, or configure it with the `redact` option in the
programmatic API (a boolean, or a callback for per-field control).

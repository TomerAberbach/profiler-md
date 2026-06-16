# Web

Capture network traffic as a HAR (HTTP Archive) file from a browser's developer
tools, then summarize slow requests, large payloads, status distributions, and
page load timings.

## Chrome / Edge DevTools

1. Open DevTools with ⌥⌘I (macOS) or Ctrl+Shift+I (Windows/Linux).
2. Open the **Network** panel and reload the page to record traffic.
3. Right-click any request and choose **Save all as HAR with sensitive data**,
   or click the **Export HAR** (↓) button.

Chrome can also export a sanitized HAR via **Save all as HAR (sanitized)**, but
`profiler-md` redacts sensitive query parameters by default regardless.

## Firefox DevTools

1. Open DevTools with ⌥⌘I (macOS) or Ctrl+Shift+I (Windows/Linux).
2. Open the **Network** panel and reload the page.
3. Click the gear icon (or right-click a request) and choose **Save All As
   HAR**.

## Safari Web Inspector

1. Open the Web Inspector with **Develop → Show Web Inspector** (or ⌥⌘I).
2. Open the **Network** tab and reload the page.
3. Click the **Export** button and save as a `.har` file.

## Command line

`curl` and other HTTP clients can also emit HAR-compatible logs via extensions
or proxies (e.g. `mitmproxy`'s `--save-stream-file` with a HAR addon, or
`chrome-har-capturer`).

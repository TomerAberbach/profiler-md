<!--
Findings from an attempt to capture a real (browser) `webkit-timeline-recording`
fixture headlessly. Kept in-repo to seed a future attempt. Delete if the work is
abandoned or completed. See also bun-scriptprofiler-timestamp-bug.md (the Bun
path, dropped because its sample timestamps are broken).
-->

# Headless WebKit Timelines capture — findings

## Goal

Produce a real `webkit-timeline-recording` fixture (a Safari Web Inspector
Timelines export) without Safari's GUI, for `webkit-timeline-recording`, which
is otherwise only covered by synthetic `makeWebKit*` helpers.

## What was established

- Safari can't run headless, and **Bun's `ScriptProfiler` sample timestamps are
  broken** (see the sibling bug report), so the only headless path to genuine
  per-sample durations is a real WebKit with a working inspector.
- **WPE WebKit runs headless in a `linux/arm64` Docker container.** On
  `debian:bookworm-slim`:
  `apt-get install cog libwpebackend-fdo-1.0-1 libgles2 libegl1 libegl-mesa0 libgl1-mesa-dri`,
  then
  `WEBKIT_INSPECTOR_SERVER=127.0.0.1:<port> cog -P headless --enable-developer-extras=true <url>`.
  The Mesa GL libs are required — without `libGLESv2.so.2` the WPE renderer
  crash-loops on startup.
- cog 0.16.1 / WPE WebKit 2.38.6 (Debian bookworm) ship the **headless** cog
  platform (`libcogplatform-headless.so`), so no Xvfb/Wayland is needed.
- With the renderer stable, the inspector **listens** on the configured port.

## The blocker

WPE/WebKitGTK's remote inspector does **not** speak HTTP or WebSocket (unlike
Chrome's CDP, and unlike Bun's WebKit-Inspector-over-WebSocket). It uses
WebKit's **`RemoteInspectorSocket`** protocol: a raw TCP stream of length-framed
JSON messages brokered by `RemoteInspectorServer`, wrapping the real Inspector
protocol in `SendMessageToBackend`/`SendMessageToFrontend` envelopes.

Probing established:

- Plain HTTP `GET /`, `GET /json`, `GET /json/list` all hang (no response).
- Standard WebSocket upgrades on every candidate path are rejected.
- Raw TCP framing is WebKit's `MessageParser`: a little-endian `uint32` length
  prefix + UTF-8 JSON payload (per `RemoteInspectorMessageParser`).
- But the server returns **zero bytes to every input** — connect-only,
  `SetupInspectorClient`/`GetTargetList` under `type`/`event`/`method` keys,
  framed and unframed, well-formed and malformed alike.

Zero bytes even to malformed input points to **no inspectable target being
registered** under cog headless (so the server has nothing to broker), and/or
the exact `RemoteInspectorServer` client handshake/target-registration sequence
being required. That sequence is undocumented; cracking it blind did not
converge.

## Suggested next steps

1. Confirm target registration: enable WebKit inspector logging
   (`WEBKIT_DEBUG=…` — the channel name needs finding; `RemoteInspector` is not
   valid on 2.38) and verify cog actually exposes the page as a remote target.
   If it doesn't, the fix is on the cog/WebKitSettings side, not the protocol.
2. Port a known-good `RemoteInspectorSocket` client instead of guessing the
   schema — e.g. crib the transport from
   `subtleGradient/node-headless-inspector` or WebKit's own
   `RemoteInspectorClient` (`Source/WebKit/UIProcess/Inspector/ socket/`).
3. Once attached, drive the `Timeline` domain (`Timeline.start` → settle →
   `Timeline.stop`, collecting `Timeline.eventRecorded`) plus the JS samples,
   and reassemble the export wrapper
   `{version:1, recording:{records, frames, markers, sampleStackTraces, sampleDurations, memoryPressureEvents}}`.
   Only `sampleStackTraces` + `sampleDurations` must be valid for the current
   converter; validate the rest against one hand-captured Safari export.
4. Reuse `chrome-workload.mjs` for the page (served over a tiny HTTP server so
   the Network timeline is non-empty), mirroring Track A.

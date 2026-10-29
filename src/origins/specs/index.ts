import { asyncProfilerOriginSpec } from './async-profiler.ts'
import { bunOriginSpec } from './bun.ts'
import { chromeOriginSpec } from './chrome.ts'
import { clangOriginSpec } from './clang.ts'
import { denoOriginSpec } from './deno.ts'
import { dotnetTraceOriginSpec } from './dotnet-trace.ts'
import { eflambeOriginSpec } from './eflambe.ts'
import { excimerOriginSpec } from './excimer.ts'
import { ghcOriginSpec } from './ghc.ts'
import { goOriginSpec } from './go.ts'
import { gperftoolsOriginSpec } from './gperftools.ts'
import { jdkOriginSpec } from './jdk.ts'
import { memrayOriginSpec } from './memray.ts'
import { nixOriginSpec } from './nix.ts'
import { nodePprofOriginSpec } from './node-pprof.ts'
import { nodeOriginSpec } from './node.ts'
import { perfOriginSpec } from './perf.ts'
import { pprofJlOriginSpec } from './pprof-jl.ts'
import { pprofRsOriginSpec } from './pprof-rs.ts'
import { profileJlOriginSpec } from './profile-jl.ts'
import { pySpyOriginSpec } from './py-spy.ts'
import { pyinstrumentOriginSpec } from './pyinstrument.ts'
import { rbspyOriginSpec } from './rbspy.ts'
import { safariOriginSpec } from './safari.ts'
import { simpleperfOriginSpec } from './simpleperf.ts'
import { systingOriginSpec } from './systing.ts'
import { tachyonOriginSpec } from './tachyon.ts'
import { tscOriginSpec } from './tsc.ts'
import { unknownOriginSpec } from './unknown.ts'
import { valgrindOriginSpec } from './valgrind.ts'

/**
 * All origin specs in global detection-priority order.
 *
 * Within a format, the detector tries candidates in this order, so origins that
 * share a format and whose marker entries overlap must be ordered carefully
 * (e.g. Deno before Node, since Deno supports `node:` specifiers). A parser
 * origin hint outranks every marker entry, so the order ranks only markers.
 */
export const originSpecs = [
  denoOriginSpec,
  bunOriginSpec,
  nodeOriginSpec,
  // After the V8 runtimes: their runtime-specific markers must outrank
  // chrome's web-page URL markers.
  chromeOriginSpec,
  nodePprofOriginSpec,
  pprofRsOriginSpec,
  goOriginSpec,
  pprofJlOriginSpec,
  profileJlOriginSpec,
  pyinstrumentOriginSpec,
  pySpyOriginSpec,
  tachyonOriginSpec,
  asyncProfilerOriginSpec,
  jdkOriginSpec,
  dotnetTraceOriginSpec,
  eflambeOriginSpec,
  nixOriginSpec,
  rbspyOriginSpec,
  safariOriginSpec,
  systingOriginSpec,
  excimerOriginSpec,
  // Markerless origins, reachable only by format fallback, a parser origin
  // hint, or an explicit origin, so their position has no effect.
  gperftoolsOriginSpec,
  clangOriginSpec,
  tscOriginSpec,
  valgrindOriginSpec,
  memrayOriginSpec,
  ghcOriginSpec,
  simpleperfOriginSpec,
  perfOriginSpec,
  unknownOriginSpec,
]

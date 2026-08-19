# WebKit timeline recording

The [WebKit timeline recording](https://webkit.org/web-inspector/timelines-tab)
is a JSON format captured by Safari's Web Inspector. It combines a CPU profile
from sampling, a browser activity breakdown (layout, rendering, script
execution, network requests), and optionally in-use memory readings and heap
allocation snapshots when those instruments are enabled.

The recording holds the sampled call stacks alongside the duration each sample
spans, so it converts to the time profile they record. This tool leaves the
activity breakdown and the memory readings unread.

It supports a single second metric per profile and a single profile per file.

Files use the `.json` extension.

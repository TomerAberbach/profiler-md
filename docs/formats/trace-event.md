# Trace Event Format

The
[Trace Event Format](https://docs.google.com/document/d/1CvAClvFfyA5R-PhYUmn5OOQtYMH4h6I0nSsKchNAySU/preview)
is the JSON trace format of Chromium's trace viewer. Chrome and Node.js write
it, as do tools that trace their own work, such as Clang and the TypeScript
compiler.

A file is an array of events, or an object whose `traceEvents` property is that
array. Each event has a name, a phase, a timestamp in microseconds, and the
process and thread it was recorded on.

A file converts to a trace. Duration and complete events become spans nested per
thread, async events become async spans, instant events become instants, and
each series of a counter event becomes a gauge. An event's string arguments
become its attributes. This tool leaves flow, object, sample, and memory dump
events unread.

It supports a single trace per file.

Files use the `.json` extension, except that Node.js writes `node_trace.1.log`.

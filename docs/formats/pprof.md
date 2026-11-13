# pprof

[pprof](https://github.com/google/pprof) is a binary
([protobuf](https://github.com/protocolbuffers/protobuf)) sample-based profiling
format originally from Google. It is the de facto standard cross-language
profiling format.

A profile lists its sample types and its samples. A sample type is a metric's
name and unit, and a sample is a call stack of location IDs with one value per
sample type. A location is an address that maps to one or more source lines, so
one address stands for several frames where code was inlined.

It supports arbitrary metric units, multiple metrics per profile, and multiple
profiles per file. A file containing several counts (a heap profile's
`alloc_objects` and `inuse_objects`) converts to one profile per count, each
reporting the metrics measured over it.

Files are commonly gzip-compressed, with the `.pb.gz` extension.

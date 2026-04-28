# pprof

[pprof](https://github.com/google/pprof) is a binary
([protobuf](https://github.com/protocolbuffers/protobuf)) sampled-based
profiling format originally from Google. It is the de facto standard
cross-language profiling format.

It supports arbitrary metric units, multiple metrics in a single profile, and a
single profile per file. Locations support inlined call frames, meaning a single
instruction address can correspond to multiple logical stack frames.

Files are commonly gzip-compressed (extension `.pb.gz`).

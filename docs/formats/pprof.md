# pprof

[pprof](https://github.com/google/pprof) is a binary
([protobuf](https://github.com/protocolbuffers/protobuf)) sample-based profiling
format originally from Google. It is the de facto standard cross-language
profiling format.

Locations support inlined call frames, meaning a single instruction address can
correspond to multiple logical stack frames.

It supports arbitrary metric units, multiple metrics per profile, and a single
profile per file.

Files are commonly gzip-compressed (extension `.pb.gz`).

# HPROF

[HPROF](https://github.com/openjdk/jdk/blob/master/src/hotspot/share/services/heapDumper.cpp)
is the JVM's binary heap dump format, written by HotSpot's own heap dumper
behind `jmap -dump`, `jcmd GC.heap_dump`, `HotSpotDiagnosticMXBean.dumpHeap`,
and `-XX:+HeapDumpOnOutOfMemoryError`.

A dump begins with a format name (`JAVA PROFILE 1.0.2`), an identifier size, and
a timestamp, followed by tagged records: the runtime's symbols, the classes it
loaded, and heap dump segments holding a record per class, instance, and array,
plus the GC roots the live objects are reachable from.

It captures the object graph at a single point in time, so it shows what the
heap holds rather than where allocation happens. Sizes are the bytes the dump
records for each object. The dump omits object headers, so a class's instances
measure smaller here than the memory they occupy.

Android's ART writes a dialect of the format with records of its own, which this
tool doesn't read.

Files use the `.hprof` extension.

# HPROF

[HPROF](https://github.com/openjdk/jdk/blob/master/src/hotspot/share/services/heapDumper.cpp)
is the JVM's binary heap dump format, written by HotSpot's own heap dumper
behind `jmap -dump`, `jcmd GC.heap_dump`, `HotSpotDiagnosticMXBean.dumpHeap`,
and `-XX:+HeapDumpOnOutOfMemoryError`. It captures the object graph at a single
point in time, so it shows what the heap holds rather than where allocation
happens.

A dump begins with a format name (`JAVA PROFILE 1.0.2`), an identifier size, and
a timestamp, followed by tagged records: the runtime's symbols, the classes it
loaded, and heap dump segments. The segments hold a record per class, instance,
object array, and primitive array, plus the GC roots (system classes, thread
objects, Java frames, and JNI references) the live objects are reachable from.

Sizes are the bytes the dump records for each object: an instance's field
values, an array's elements, and a class's static field values. The JVM writes
no object headers, so a class's instances measure smaller here than the memory
they occupy.

Android's ART writes a dialect of the format with records of its own, which this
doesn't read.

Files use the `.hprof` extension.

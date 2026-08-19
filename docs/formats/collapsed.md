# Collapsed stacks

Collapsed stacks is the plain-text interchange format from Brendan Gregg's
[FlameGraph](https://github.com/brendangregg/FlameGraph) tooling. Many profilers
emit it.

Each line is one call stack, written root-to-leaf and joined by `;`, followed by
a space and an integer sample count. Frames are opaque strings and carry no
units.

It supports no metrics and a single profile per file.

Files have no standard extension. `.collapsed`, `.folded`, and `.txt` are
common.

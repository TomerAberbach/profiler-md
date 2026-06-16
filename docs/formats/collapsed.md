# Collapsed stacks

Collapsed stacks is the plain-text interchange format from Brendan Gregg's
[FlameGraph](https://github.com/brendangregg/FlameGraph) tooling. It is emitted
by many profilers.

Each line is one call stack, written root-to-leaf and joined by `;`, followed by
a space and an integer sample count. Frames are opaque strings and carry no
units.

Files have no standard extension; `.collapsed`, `.folded`, and `.txt` are all
common.

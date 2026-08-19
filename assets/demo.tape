Output assets/demo.gif

Set FontSize 20
Set Width 1480
Set Height 868
Set Padding 22
Set Framerate 24
Set TypingSpeed 40ms
Set Theme "GruvboxDark"

# Alias the CLI so the demo reads as the installed command.
Hide
Type "alias profiler-md='node src/cli/index.ts'"
Enter
Type "clear"
Enter
Show

Type "profiler-md examples/input/javascript.node.base.cpuprofile"
Sleep 300ms
Enter
Sleep 1.5s
Down@100ms 20
Sleep 900ms
Type@800ms "dddd"
Sleep 900ms
# Searching for the next section heading walks the rest of the output
# structurally, so no jump depends on its length.
Type "/^#### "
Enter
Sleep 1.4s
Type "n"
Sleep 1.4s
Type "n"
Sleep 1.4s
Type "n"
Sleep 1.4s
Type "G"
Sleep 1.4s
Right@250ms 5
Sleep 1.2s
Type "q"
Sleep 800ms

Hide
Type "clear"
Enter
Show

Type "profiler-md examples/input/javascript.node.base.cpuprofile examples/input/javascript.node.current.cpuprofile"
Sleep 300ms
Enter
Sleep 1.5s
Down@100ms 20
Sleep 900ms
Type@800ms "ddd"
Sleep 900ms
Type "/^#### "
Enter
Sleep 1.4s
Type "n"
Sleep 1.4s
Type "G"
Sleep 1.4s
Type "q"
Sleep 1.2s

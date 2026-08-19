# Elixir/Erlang

Elixir and Erlang profiling uses
[eflambe](https://github.com/Stratus3D/eflambe).

## Wall-clock profiling

Traces function calls and writes them as collapsed stacks. Useful for finding
hot spots, including time spent sleeping, which eflambe records as its own
frame.

eflambe's default `brendan_gregg` format is collapsed stacks. Add `eflambe` to
your dependencies, then profile a specific function.

Each line's count is one microsecond of wall time on its stack, not one sample,
because eflambe derives the counts from the trace's timestamps.

### Elixir

```elixir
# Profile a function during normal execution (capture 1 call)
:eflambe.capture({MyModule, :my_function, 1}, 1, output_format: :brendan_gregg)

# Directly invoke and profile a function
:eflambe.apply({MyModule, :my_function, [arg1, arg2]}, output_format: :brendan_gregg)
```

### Erlang

```erlang
%% Profile a function during normal execution (capture 1 call)
eflambe:capture({my_module, my_function, 1}, 1, [{output_format, brendan_gregg}]).

%% Directly invoke and profile a function
eflambe:apply({my_module, my_function, [Arg1, Arg2]}, [{output_format, brendan_gregg}]).
```

### Options

| Option             | Default         | Description                                                                                              |
| ------------------ | --------------- | -------------------------------------------------------------------------------------------------------- |
| `output_format`    | `brendan_gregg` | Output format: `brendan_gregg` (collapsed) or `svg`                                                      |
| `output_directory` | `./`            | Directory for the output file                                                                            |
| `open`             | —               | Auto-open the result in `speedscope` or `hotspot`                                                        |
| `return`           | see description | Return value: `value`, `flamegraph`, or `filename`. `capture` returns the filename and `apply` the value |

## Tips

### Overhead

Keep the call small. eflambe traces every function call instead of sampling, so
output grows with the number of calls. A single invocation over a large input
can produce hundreds of MB.

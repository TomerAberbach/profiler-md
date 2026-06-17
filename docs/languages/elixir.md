# Elixir/Erlang

Elixir and Erlang profiling uses
[eflambe](https://github.com/Stratus3D/eflambe), a profiler for the BEAM that
wraps the runtime's built-in tracing and writes flame graph output.

## CPU profiling

Traces function calls and writes them as collapsed stacks. Useful for finding
CPU hot spots.

eflambe's default `brendan_gregg` output format is collapsed stacks. Add
`eflambe` to your dependencies, then profile a specific function.

### Elixir

```elixir
# Profile a function as it runs during normal execution (capture 1 call)
:eflambe.capture({MyModule, :my_function, 1}, 1, output_format: :brendan_gregg)

# Directly invoke and profile a function
:eflambe.apply({MyModule, :my_function, [arg1, arg2]}, output_format: :brendan_gregg)
```

### Erlang

```erlang
%% Profile a function as it runs during normal execution (capture 1 call)
eflambe:capture({my_module, my_function, 1}, 1, [{output_format, brendan_gregg}]).

%% Directly invoke and profile a function
eflambe:apply({my_module, my_function, [Arg1, Arg2]}, [{output_format, brendan_gregg}]).
```

### Options

| Option             | Default         | Description                                         |
| ------------------ | --------------- | --------------------------------------------------- |
| `output_format`    | `brendan_gregg` | Output format: `brendan_gregg` (collapsed) or `svg` |
| `output_directory` | project root    | Directory to write the output file to               |
| `open`             | —               | Auto-open the result in `speedscope` or `hotspot`   |
| `return`           | `filename`      | Return value: `value`, `flamegraph`, or `filename`  |

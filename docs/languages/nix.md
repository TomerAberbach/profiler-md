# Nix

Nix profiling uses the
[evaluation profiler](https://nix.dev/manual/nix/latest/advanced-topics/eval-profiler)
built into Nix 2.30 and later.

## Evaluation profiling

Samples the Nix function call stack at a fixed rate and writes the samples as
collapsed stacks. Useful for finding the functions a slow evaluation spends its
time in.

```sh
# Profile evaluating a package
nix-instantiate '<nixpkgs>' -A hello --eval-profiler flamegraph --eval-profile-file eval.collapsed

# Profile evaluating a NixOS configuration
nix-instantiate '<nixpkgs/nixos>' -A system --eval-profiler flamegraph --eval-profile-file eval.collapsed

# Profile a flake output
nix eval --no-eval-cache --eval-profiler flamegraph --eval-profile-file eval.collapsed .#packages.x86_64-linux.default
```

Every Nix command that evaluates accepts the flags, and each is also a
`nix.conf` setting.

### Settings

| Setting                   | Default       | Description                                                         |
| ------------------------- | ------------- | ------------------------------------------------------------------- |
| `eval-profiler`           | `disabled`    | Profiler to enable: `flamegraph` writes collapsed stacks            |
| `eval-profile-file`       | `nix.profile` | Output file path                                                    |
| `eval-profiler-frequency` | `99`          | Samples per second. `0` samples the stack after every function call |

## Tips

### Locations are call sites

The profiler records where each function was called,
[by design](https://nix.dev/manual/nix/latest/advanced-topics/eval-profiler), so
a function appears once per call site and its location is the call site rather
than its definition. An anonymous lambda has no name, so its call site
identifies it. When the evaluator cannot resolve a lambda's call site, it prints
the lambda's definition position in the same shape instead.

### Builtins

A frame named `primop <name>` is a builtin implemented inside the evaluator,
located at the Nix expression that called it. `primop derivationStrict:<name>`
is the `derivation` call that produced the named derivation.

### Evaluation cache

`nix eval`, `nix build`, and the other flake commands skip evaluation when the
evaluation cache already holds the output. Pass `--no-eval-cache` to profile a
full evaluation.

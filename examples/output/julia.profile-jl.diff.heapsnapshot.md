# Heap snapshot diff

Allocated 155 MiB (-358.295 KiB, -0.2%) across 1,797,992 → 1,795,753 nodes and 5,735,164 → 5,724,326 edges.

| Category           | Change |        Delta |             % |                Size |             Nodes |
| ------------------ | -----: | -----------: | ------------: | ------------------: | ----------------: |
| String             |  -0.3% | -226.524 KiB | 45.1% → 45.0% |   70 MiB → 69.7 MiB | 295,593 → 295,316 |
| Code               |  -0.1% |  -40.428 KiB |         18.4% | 28.6 MiB → 28.5 MiB | 402,515 → 401,901 |
| Array              |  -0.2% |  -41.936 KiB |         15.7% | 24.4 MiB → 24.3 MiB | 631,413 → 630,555 |
| Object             |  +0.4% |   +65.89 KiB | 10.8% → 10.9% | 16.8 MiB → 16.9 MiB | 164,867 → 168,753 |
| Internal           |  -0.1% |  -20.109 KiB |          9.5% |            14.8 MiB | 269,102 → 268,763 |
| Symbol             |    ~0% |        -18 B |          0.4% |             592 KiB |   27,476 → 27,475 |
| Number             |  -3.1% |   -1.255 KiB |         <0.1% | 40.9 KiB → 39.7 KiB |     2,766 → 2,704 |
| Regular expression | -62.7% |   -2.812 KiB |         <0.1% | 4.48 KiB → 1.67 KiB |          174 → 85 |
| Function           | -99.1% |  -80.257 KiB |  0.1% → <0.1% |      81 KiB → 728 B |        3,510 → 85 |
| Native             | -95.4% |  -10.898 KiB |         <0.1% |    11.4 KiB → 536 B |          515 → 52 |
| Synthetic          | +14.6% |        +56 B |         <0.1% |       384 B → 440 B |           61 → 64 |

## Largest constructors

### Self size

Constructors ranked by bytes allocated for their instances, excluding nodes kept reachable by them.

#### Regressions

Constructors with the largest increase in self size.

##### Object

| Change | Delta |            % |       Size | Instances | Constructor                                                                                                                                          |
| -----: | ----: | -----------: | ---------: | --------: | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
|    new | +48 B | 0.0% → <0.1% | 0 B → 48 B |     0 → 2 | `Memory{Dates.DateLocale}`                                                                                                                           |
|    new | +24 B | 0.0% → <0.1% | 0 B → 24 B |     0 → 1 | `Memory{Tuple{String, Array{String, 1}, Array{String, 1}}}`                                                                                          |
|    new |  +8 B | 0.0% → <0.1% |  0 B → 8 B |     0 → 1 | `typeof(Dates.dayabbr_to_value)`                                                                                                                     |
|    new |  +8 B | 0.0% → <0.1% |  0 B → 8 B |     0 → 1 | `Base.Sort.var"#_sort!##10#_sort!##11"{Base.Order.By{Base.var"#run_extension_callbacks##0#run_extension_callbacks##1", Base.Order.ForwardOrdering}}` |
|    new |  +8 B | 0.0% → <0.1% |  0 B → 8 B |     0 → 1 | `typeof(Base.position)`                                                                                                                              |
|    new |  +8 B | 0.0% → <0.1% |  0 B → 8 B |     0 → 1 | `typeof(Base.Compiler.simple_walk_constraint)`                                                                                                       |
|    new |  +8 B | 0.0% → <0.1% |  0 B → 8 B |     0 → 1 | `typeof(Base.valid_import_path)`                                                                                                                     |
|    new |  +8 B | 0.0% → <0.1% |  0 B → 8 B |     0 → 1 | `Base.MappingRF{typeof(Base.identity), typeof(Base.max)}`                                                                                            |
|    new |  +8 B | 0.0% → <0.1% |  0 B → 8 B |     0 → 1 | `Base.Compiler.var"#sroa_pass!##2#sroa_pass!##3"`                                                                                                    |
|    new |  +8 B | 0.0% → <0.1% |  0 B → 8 B |     0 → 1 | `Tuple{typeof(Base.stacktrace_linebreaks)}`                                                                                                          |
|    new |  +8 B | 0.0% → <0.1% |  0 B → 8 B |     0 → 1 | `Base.JuliaSyntax.var"##emit#35"`                                                                                                                    |
|    new |  +8 B | 0.0% → <0.1% |  0 B → 8 B |     0 → 1 | `Base.IteratorsMD.var"#22#23"`                                                                                                                       |
|    new |  +8 B | 0.0% → <0.1% |  0 B → 8 B |     0 → 1 | `typeof(Base.Compiler.renumber_ssa!)`                                                                                                                |
|    new |  +8 B | 0.0% → <0.1% |  0 B → 8 B |     0 → 1 | `Tuple{typeof(Base.in_sysimage)}`                                                                                                                    |
|    new |  +8 B | 0.0% → <0.1% |  0 B → 8 B |     0 → 1 | `LinearAlgebra.var"##lu#186"`                                                                                                                        |
|    new |  +8 B | 0.0% → <0.1% |  0 B → 8 B |     0 → 1 | `typeof(Base.Compiler.has_extended_unionsplit)`                                                                                                      |
|    new |  +8 B | 0.0% → <0.1% |  0 B → 8 B |     0 → 1 | `typeof(Base.print_module_path_file)`                                                                                                                |
|    new |  +8 B | 0.0% → <0.1% |  0 B → 8 B |     0 → 1 | `Base.var"##all#757"`                                                                                                                                |
|    new |  +8 B | 0.0% → <0.1% |  0 B → 8 B |     0 → 1 | `typeof(Base.FastMath.div_fast)`                                                                                                                     |
|    new |  +8 B | 0.0% → <0.1% |  0 B → 8 B |     0 → 1 | `typeof(Base.Docs.undocumented_names)`                                                                                                               |

#### Improvements

Constructors with the largest decrease in self size.

##### Object

|  Change |      Delta |            % |                Size |         Instances | Constructor                                                                                                   |
| ------: | ---------: | -----------: | ------------------: | ----------------: | ------------------------------------------------------------------------------------------------------------- |
|   -0.1% | -12.07 KiB |         6.4% | 9.88 MiB → 9.87 MiB | 120,343 → 120,202 | `<generic memory - inline alloc>`                                                                             |
|   -0.2% | -9.281 KiB |         3.9% | 5.99 MiB → 5.98 MiB |   11,696 → 11,691 | `<generic memory - malloc>`                                                                                   |
| removed |       -8 B | <0.1% → 0.0% |           8 B → 0 B |             1 → 0 | `Base.Val{Char(0x64000000)}`                                                                                  |
| removed |       -8 B | <0.1% → 0.0% |           8 B → 0 B |             1 → 0 | `typeof(Base.close)`                                                                                          |
| removed |       -8 B | <0.1% → 0.0% |           8 B → 0 B |             1 → 0 | `Parsers.var"#36#37"`                                                                                         |
| removed |       -8 B | <0.1% → 0.0% |           8 B → 0 B |             1 → 0 | `typeof(Base.Filesystem.delayed_delete_ref)`                                                                  |
| removed |       -8 B | <0.1% → 0.0% |           8 B → 0 B |             1 → 0 | `typeof(Base.Threads.atomic_min!)`                                                                            |
| removed |       -8 B | <0.1% → 0.0% |           8 B → 0 B |             1 → 0 | `typeof(Base.SimdLoop.simd_outer_range)`                                                                      |
| removed |       -8 B | <0.1% → 0.0% |           8 B → 0 B |             1 → 0 | `typeof(Base.Threads.atomic_or!)`                                                                             |
| removed |       -8 B | <0.1% → 0.0% |           8 B → 0 B |             1 → 0 | `typeof(Base.PCRE.substring_length_bynumber)`                                                                 |
| removed |       -8 B | <0.1% → 0.0% |           8 B → 0 B |             1 → 0 | `Base.Broadcast.var"#_maxndims##0#_maxndims##1"{Tuple}`                                                       |
| removed |       -8 B | <0.1% → 0.0% |           8 B → 0 B |             1 → 0 | `Base.var"##_truncated_pipebuffer#392"`                                                                       |
| removed |       -8 B | <0.1% → 0.0% |           8 B → 0 B |             1 → 0 | `typeof(Base.JuliaSyntax.is_prec_pipe_gt)`                                                                    |
| removed |       -8 B | <0.1% → 0.0% |           8 B → 0 B |             1 → 0 | `Profile.var"#print_tree##0#print_tree##1"`                                                                   |
| removed |       -8 B | <0.1% → 0.0% |           8 B → 0 B |             1 → 0 | `Tuple{typeof(Base.Order.ord), typeof(Base.isless), typeof(Base.first), Nothing, Base.Order.ForwardOrdering}` |
| removed |       -8 B | <0.1% → 0.0% |           8 B → 0 B |             1 → 0 | `typeof(Base.TOML.set_marker!)`                                                                               |
| removed |       -8 B | <0.1% → 0.0% |           8 B → 0 B |             1 → 0 | `Tuple{Base.MathConstants.var"#4#5"}`                                                                         |
| removed |       -8 B | <0.1% → 0.0% |           8 B → 0 B |             1 → 0 | `Base.MathConstants.var"##BigFloat#7"`                                                                        |
| removed |       -8 B | <0.1% → 0.0% |           8 B → 0 B |             1 → 0 | `typeof(LinearAlgebra.matprod)`                                                                               |
| removed |       -8 B | <0.1% → 0.0% |           8 B → 0 B |             1 → 0 | `typeof(Base.Math.sin_kernel)`                                                                                |

### Retained size

Constructors ranked by bytes allocated for their instances and all nodes that would be freed if their instances were garbage collected.

#### Regressions

Constructors with the largest increase in retained size.

##### Object

| Change |      Delta |            % |           Size | Instances | Constructor                                                                                                                                          |
| -----: | ---------: | -----------: | -------------: | --------: | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
|    new | +1.046 KiB | 0.0% → <0.1% | 0 B → 1.05 KiB |     0 → 2 | `Memory{Dates.DateLocale}`                                                                                                                           |
|    new |      +24 B | 0.0% → <0.1% |     0 B → 24 B |     0 → 1 | `Memory{Tuple{String, Array{String, 1}, Array{String, 1}}}`                                                                                          |
|    new |       +8 B | 0.0% → <0.1% |      0 B → 8 B |     0 → 1 | `typeof(Dates.dayabbr_to_value)`                                                                                                                     |
|    new |       +8 B | 0.0% → <0.1% |      0 B → 8 B |     0 → 1 | `Base.Sort.var"#_sort!##10#_sort!##11"{Base.Order.By{Base.var"#run_extension_callbacks##0#run_extension_callbacks##1", Base.Order.ForwardOrdering}}` |
|    new |       +8 B | 0.0% → <0.1% |      0 B → 8 B |     0 → 1 | `typeof(Base.position)`                                                                                                                              |
|    new |       +8 B | 0.0% → <0.1% |      0 B → 8 B |     0 → 1 | `typeof(Base.Compiler.simple_walk_constraint)`                                                                                                       |
|    new |       +8 B | 0.0% → <0.1% |      0 B → 8 B |     0 → 1 | `typeof(Base.valid_import_path)`                                                                                                                     |
|    new |       +8 B | 0.0% → <0.1% |      0 B → 8 B |     0 → 1 | `Base.MappingRF{typeof(Base.identity), typeof(Base.max)}`                                                                                            |
|    new |       +8 B | 0.0% → <0.1% |      0 B → 8 B |     0 → 1 | `Base.Compiler.var"#sroa_pass!##2#sroa_pass!##3"`                                                                                                    |
|    new |       +8 B | 0.0% → <0.1% |      0 B → 8 B |     0 → 1 | `Tuple{typeof(Base.stacktrace_linebreaks)}`                                                                                                          |
|    new |       +8 B | 0.0% → <0.1% |      0 B → 8 B |     0 → 1 | `Base.JuliaSyntax.var"##emit#35"`                                                                                                                    |
|    new |       +8 B | 0.0% → <0.1% |      0 B → 8 B |     0 → 1 | `Base.IteratorsMD.var"#22#23"`                                                                                                                       |
|    new |       +8 B | 0.0% → <0.1% |      0 B → 8 B |     0 → 1 | `typeof(Base.Compiler.renumber_ssa!)`                                                                                                                |
|    new |       +8 B | 0.0% → <0.1% |      0 B → 8 B |     0 → 1 | `Tuple{typeof(Base.in_sysimage)}`                                                                                                                    |
|    new |       +8 B | 0.0% → <0.1% |      0 B → 8 B |     0 → 1 | `LinearAlgebra.var"##lu#186"`                                                                                                                        |
|    new |       +8 B | 0.0% → <0.1% |      0 B → 8 B |     0 → 1 | `typeof(Base.Compiler.has_extended_unionsplit)`                                                                                                      |
|    new |       +8 B | 0.0% → <0.1% |      0 B → 8 B |     0 → 1 | `typeof(Base.print_module_path_file)`                                                                                                                |
|    new |       +8 B | 0.0% → <0.1% |      0 B → 8 B |     0 → 1 | `Base.var"##all#757"`                                                                                                                                |
|    new |       +8 B | 0.0% → <0.1% |      0 B → 8 B |     0 → 1 | `typeof(Base.FastMath.div_fast)`                                                                                                                     |
|    new |       +8 B | 0.0% → <0.1% |      0 B → 8 B |     0 → 1 | `typeof(Base.Docs.undocumented_names)`                                                                                                               |

#### Improvements

Constructors with the largest decrease in retained size.

##### Object

|  Change |      Delta |            % |                Size |         Instances | Constructor                                                                                                   |
| ------: | ---------: | -----------: | ------------------: | ----------------: | ------------------------------------------------------------------------------------------------------------- |
|   -0.1% | -12.07 KiB |         6.4% | 9.88 MiB → 9.87 MiB | 120,343 → 120,202 | `<generic memory - inline alloc>`                                                                             |
|   -0.2% | -9.281 KiB |         3.9% | 5.99 MiB → 5.98 MiB |   11,696 → 11,691 | `<generic memory - malloc>`                                                                                   |
| removed |       -8 B | <0.1% → 0.0% |           8 B → 0 B |             1 → 0 | `Base.Val{Char(0x64000000)}`                                                                                  |
| removed |       -8 B | <0.1% → 0.0% |           8 B → 0 B |             1 → 0 | `typeof(Base.close)`                                                                                          |
| removed |       -8 B | <0.1% → 0.0% |           8 B → 0 B |             1 → 0 | `Parsers.var"#36#37"`                                                                                         |
| removed |       -8 B | <0.1% → 0.0% |           8 B → 0 B |             1 → 0 | `typeof(Base.Filesystem.delayed_delete_ref)`                                                                  |
| removed |       -8 B | <0.1% → 0.0% |           8 B → 0 B |             1 → 0 | `typeof(Base.Threads.atomic_min!)`                                                                            |
| removed |       -8 B | <0.1% → 0.0% |           8 B → 0 B |             1 → 0 | `typeof(Base.SimdLoop.simd_outer_range)`                                                                      |
| removed |       -8 B | <0.1% → 0.0% |           8 B → 0 B |             1 → 0 | `typeof(Base.Threads.atomic_or!)`                                                                             |
| removed |       -8 B | <0.1% → 0.0% |           8 B → 0 B |             1 → 0 | `typeof(Base.PCRE.substring_length_bynumber)`                                                                 |
| removed |       -8 B | <0.1% → 0.0% |           8 B → 0 B |             1 → 0 | `Base.Broadcast.var"#_maxndims##0#_maxndims##1"{Tuple}`                                                       |
| removed |       -8 B | <0.1% → 0.0% |           8 B → 0 B |             1 → 0 | `Base.var"##_truncated_pipebuffer#392"`                                                                       |
| removed |       -8 B | <0.1% → 0.0% |           8 B → 0 B |             1 → 0 | `typeof(Base.JuliaSyntax.is_prec_pipe_gt)`                                                                    |
| removed |       -8 B | <0.1% → 0.0% |           8 B → 0 B |             1 → 0 | `Profile.var"#print_tree##0#print_tree##1"`                                                                   |
| removed |       -8 B | <0.1% → 0.0% |           8 B → 0 B |             1 → 0 | `Tuple{typeof(Base.Order.ord), typeof(Base.isless), typeof(Base.first), Nothing, Base.Order.ForwardOrdering}` |
| removed |       -8 B | <0.1% → 0.0% |           8 B → 0 B |             1 → 0 | `typeof(Base.TOML.set_marker!)`                                                                               |
| removed |       -8 B | <0.1% → 0.0% |           8 B → 0 B |             1 → 0 | `Tuple{Base.MathConstants.var"#4#5"}`                                                                         |
| removed |       -8 B | <0.1% → 0.0% |           8 B → 0 B |             1 → 0 | `Base.MathConstants.var"##BigFloat#7"`                                                                        |
| removed |       -8 B | <0.1% → 0.0% |           8 B → 0 B |             1 → 0 | `typeof(LinearAlgebra.matprod)`                                                                               |
| removed |       -8 B | <0.1% → 0.0% |           8 B → 0 B |             1 → 0 | `typeof(Base.Math.sin_kernel)`                                                                                |

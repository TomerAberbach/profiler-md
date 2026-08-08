# Heap snapshot

Allocated 155 MiB across 1,797,991 nodes and 5,735,169 edges.

| Category           |     % |     Size |   Nodes |
| ------------------ | ----: | -------: | ------: |
| String             | 45.1% |   70 MiB | 295,592 |
| Code               | 18.4% | 28.6 MiB | 402,515 |
| Array              | 15.7% | 24.4 MiB | 631,413 |
| Object             | 10.8% | 16.8 MiB | 164,867 |
| Internal           |  9.5% | 14.8 MiB | 269,102 |
| Symbol             |  0.4% |  592 KiB |  27,476 |
| Function           |  0.1% |   81 KiB |   3,510 |
| Number             | <0.1% | 40.9 KiB |   2,766 |
| Native             | <0.1% | 11.4 KiB |     515 |
| Regular expression | <0.1% | 4.48 KiB |     174 |
| Synthetic          | <0.1% |    384 B |      61 |

## Largest constructors

### Self size

Constructors ranked by bytes allocated for their instances, excluding nodes kept reachable by them.

#### Categories

##### Object

|     % |     Size | Instances | Constructor                                                                                                   |
| ----: | -------: | --------: | ------------------------------------------------------------------------------------------------------------- |
|  6.4% | 9.88 MiB |   120,343 | `<generic memory - inline alloc>`                                                                             |
|  3.9% | 5.99 MiB |    11,696 | `<generic memory - malloc>`                                                                                   |
| <0.1% | 6.35 KiB |       271 | `Memory{String}`                                                                                              |
| <0.1% |      8 B |         1 | `Base.Val{Char(0x64000000)}`                                                                                  |
| <0.1% |      8 B |         1 | `typeof(Base.close)`                                                                                          |
| <0.1% |      8 B |         1 | `Parsers.var"#36#37"`                                                                                         |
| <0.1% |      8 B |         1 | `typeof(Base.Filesystem.delayed_delete_ref)`                                                                  |
| <0.1% |      8 B |         1 | `typeof(Base.Threads.atomic_min!)`                                                                            |
| <0.1% |      8 B |         1 | `typeof(Base.SimdLoop.simd_outer_range)`                                                                      |
| <0.1% |      8 B |         1 | `typeof(Base.Threads.atomic_or!)`                                                                             |
| <0.1% |      8 B |         1 | `typeof(Base.PCRE.substring_length_bynumber)`                                                                 |
| <0.1% |      8 B |         1 | `Base.Broadcast.var"#_maxndims##0#_maxndims##1"{Tuple}`                                                       |
| <0.1% |      8 B |         1 | `Base.var"##_truncated_pipebuffer#392"`                                                                       |
| <0.1% |      8 B |         1 | `typeof(Base.JuliaSyntax.is_prec_pipe_gt)`                                                                    |
| <0.1% |      8 B |         1 | `Profile.var"#print_tree##0#print_tree##1"`                                                                   |
| <0.1% |      8 B |         1 | `Tuple{typeof(Base.Order.ord), typeof(Base.isless), typeof(Base.first), Nothing, Base.Order.ForwardOrdering}` |
| <0.1% |      8 B |         1 | `typeof(Base.TOML.set_marker!)`                                                                               |
| <0.1% |      8 B |         1 | `Tuple{Base.MathConstants.var"#4#5"}`                                                                         |
| <0.1% |      8 B |         1 | `Base.MathConstants.var"##BigFloat#7"`                                                                        |
| <0.1% |      8 B |         1 | `typeof(LinearAlgebra.matprod)`                                                                               |

#### Instances

Instances ranked by contribution to each constructor's self size.

##### `<generic memory - inline alloc>`

|    % |     Size | Instances | Path                                                                                                                                                       |
| ---: | -------: | --------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2.5% |  256 KiB |         1 | `.<native> Memory{Any} ← .arg1 Core.TypeMapLevel ← .defs Core.MethodTable`                                                                                 |
| 0.6% | 65.2 KiB |         1 | `.<native> Memory{Any} ← .ref.mem Array{Any, 1} ← .backedges Core.MethodInstance`                                                                          |
| 0.6% |   64 KiB |         1 | `.<native> Memory{Any} ← .ht Base.IdDict{Any, Any} ← .restriction Core.BindingPartition ← .partitions Core.Binding ← [7853] SimpleVector ← .bindings Base` |
| 0.6% |   64 KiB |         1 | `.<native> Memory{Any} ← .arg1 Core.TypeMapLevel ← .cache Core.MethodCache ← .cache Core.MethodTable`                                                      |
| 0.6% |   64 KiB |         1 | `.<native> Memory{Any} ← .name1 Core.TypeMapLevel ← .defs Core.MethodTable`                                                                                |

##### `<generic memory - malloc>`

|     % |     Size | Instances | Path                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ----: | -------: | --------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 80.4% | 4.82 MiB |        10 | `.<native> Memory{UInt64} ← .ref.mem Array{UInt64, 1} ← [18446744073709552000] Memory{JSON3.Object{Base.CodeUnits{UInt8, String}, Array{UInt64, 1}}} ← .ref.mem Array{JSON3.Object{Base.CodeUnits{UInt8, String}, Array{UInt64, 1}}, 1} ← .local var (stack frame) ← .next frame (stack frame) ← .next frame (stack frame) ← .next frame (stack frame) ← .next frame (stack frame) ← .next frame (stack frame) ← .next frame (stack frame) ← .stack Task` |
|  2.5% |  153 KiB |         1 | `.<native> Memory{Tuple{UInt64, UInt64, UInt64}} ← .ref.mem Array{Tuple{UInt64, UInt64, UInt64}, 1}`                                                                                                                                                                                                                                                                                                                                                      |
|  1.0% |   64 KiB |         1 | `.<native> Memory{UInt16} ← .bindingkeyset Base`                                                                                                                                                                                                                                                                                                                                                                                                          |
|  1.0% |   64 KiB |         1 | `.<native> Memory{Any} ← .leafcache Core.MethodCache ← .cache Core.MethodTable`                                                                                                                                                                                                                                                                                                                                                                           |
|  0.8% |   51 KiB |         1 | `.<native> Memory{String} ← .ref.mem Array{String, 1} ← .exported_symbols LinearAlgebra.BLAS.LBTConfig ← .config LinearAlgebra.BLAS.ConfigCache`                                                                                                                                                                                                                                                                                                          |

##### `Memory{String}`

|    % | Size | Instances | Path                                                                                                                                               |
| ---: | ---: | --------: | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1.5% | 96 B |         4 | `.keys Base.Dict{String, Int64}`                                                                                                                   |
| 1.5% | 96 B |         4 | `.ref.mem Array{String, 1}`                                                                                                                        |
| 0.4% | 24 B |         1 | `(GC root)`                                                                                                                                        |
| 0.4% | 24 B |         1 | `.ref.mem Array{String, 1} ← .restriction Core.BindingPartition ← .partitions Core.Binding ← [60] SimpleVector ← .bindings Unicode`                |
| 0.4% | 24 B |         1 | `.keys Base.Dict{String, Dates.DateLocale} ← .restriction Core.BindingPartition ← .partitions Core.Binding ← [231] SimpleVector ← .bindings Dates` |

##### `Base.Val{Char(0x64000000)}`

|      % | Size | Instances | Path                                   |
| -----: | ---: | --------: | -------------------------------------- |
| 100.0% |  8 B |         1 | `.instance Base.Val{Char(0x64000000)}` |

##### `typeof(Base.close)`

|      % | Size | Instances | Path        |
| -----: | ---: | --------: | ----------- |
| 100.0% |  8 B |         1 | `(GC root)` |

##### `Parsers.var"#36#37"`

|      % | Size | Instances | Path                            |
| -----: | ---: | --------: | ------------------------------- |
| 100.0% |  8 B |         1 | `.instance Parsers.var"#36#37"` |

##### `typeof(Base.Filesystem.delayed_delete_ref)`

|      % | Size | Instances | Path        |
| -----: | ---: | --------: | ----------- |
| 100.0% |  8 B |         1 | `(GC root)` |

##### `typeof(Base.Threads.atomic_min!)`

|      % | Size | Instances | Path        |
| -----: | ---: | --------: | ----------- |
| 100.0% |  8 B |         1 | `(GC root)` |

##### `typeof(Base.SimdLoop.simd_outer_range)`

|      % | Size | Instances | Path        |
| -----: | ---: | --------: | ----------- |
| 100.0% |  8 B |         1 | `(GC root)` |

##### `typeof(Base.Threads.atomic_or!)`

|      % | Size | Instances | Path        |
| -----: | ---: | --------: | ----------- |
| 100.0% |  8 B |         1 | `(GC root)` |

##### `typeof(Base.PCRE.substring_length_bynumber)`

|      % | Size | Instances | Path        |
| -----: | ---: | --------: | ----------- |
| 100.0% |  8 B |         1 | `(GC root)` |

##### `Base.Broadcast.var"#_maxndims##0#_maxndims##1"{Tuple}`

|      % | Size | Instances | Path                                                              |
| -----: | ---: | --------: | ----------------------------------------------------------------- |
| 100.0% |  8 B |         1 | `.instance Base.Broadcast.var"#_maxndims##0#_maxndims##1"{Tuple}` |

##### `Base.var"##_truncated_pipebuffer#392"`

|      % | Size | Instances | Path        |
| -----: | ---: | --------: | ----------- |
| 100.0% |  8 B |         1 | `(GC root)` |

##### `typeof(Base.JuliaSyntax.is_prec_pipe_gt)`

|      % | Size | Instances | Path        |
| -----: | ---: | --------: | ----------- |
| 100.0% |  8 B |         1 | `(GC root)` |

##### `Profile.var"#print_tree##0#print_tree##1"`

|      % | Size | Instances | Path                                                  |
| -----: | ---: | --------: | ----------------------------------------------------- |
| 100.0% |  8 B |         1 | `.instance Profile.var"#print_tree##0#print_tree##1"` |

##### `Tuple{typeof(Base.Order.ord), typeof(Base.isless), typeof(Base.first), Nothing, Base.Order.ForwardOrdering}`

|      % | Size | Instances | Path                                                                                                                    |
| -----: | ---: | --------: | ----------------------------------------------------------------------------------------------------------------------- |
| 100.0% |  8 B |         1 | `.instance Tuple{typeof(Base.Order.ord), typeof(Base.isless), typeof(Base.first), Nothing, Base.Order.ForwardOrdering}` |

##### `typeof(Base.TOML.set_marker!)`

|      % | Size | Instances | Path        |
| -----: | ---: | --------: | ----------- |
| 100.0% |  8 B |         1 | `(GC root)` |

##### `Tuple{Base.MathConstants.var"#4#5"}`

|      % | Size | Instances | Path                                            |
| -----: | ---: | --------: | ----------------------------------------------- |
| 100.0% |  8 B |         1 | `.instance Tuple{Base.MathConstants.var"#4#5"}` |

##### `Base.MathConstants.var"##BigFloat#7"`

|      % | Size | Instances | Path        |
| -----: | ---: | --------: | ----------- |
| 100.0% |  8 B |         1 | `(GC root)` |

##### `typeof(LinearAlgebra.matprod)`

|      % | Size | Instances | Path        |
| -----: | ---: | --------: | ----------- |
| 100.0% |  8 B |         1 | `(GC root)` |

### Retained size

Constructors ranked by bytes allocated for their instances and all nodes that would be freed if their instances were garbage collected.

#### Categories

##### Object

|     % |     Size | Instances | Constructor                                                                                                   |
| ----: | -------: | --------: | ------------------------------------------------------------------------------------------------------------- |
|  6.4% | 9.88 MiB |   120,343 | `<generic memory - inline alloc>`                                                                             |
|  3.9% | 5.99 MiB |    11,696 | `<generic memory - malloc>`                                                                                   |
|  0.2% |  284 KiB |       271 | `Memory{String}`                                                                                              |
| <0.1% |      8 B |         1 | `Base.Val{Char(0x64000000)}`                                                                                  |
| <0.1% |      8 B |         1 | `typeof(Base.close)`                                                                                          |
| <0.1% |      8 B |         1 | `Parsers.var"#36#37"`                                                                                         |
| <0.1% |      8 B |         1 | `typeof(Base.Filesystem.delayed_delete_ref)`                                                                  |
| <0.1% |      8 B |         1 | `typeof(Base.Threads.atomic_min!)`                                                                            |
| <0.1% |      8 B |         1 | `typeof(Base.SimdLoop.simd_outer_range)`                                                                      |
| <0.1% |      8 B |         1 | `typeof(Base.Threads.atomic_or!)`                                                                             |
| <0.1% |      8 B |         1 | `typeof(Base.PCRE.substring_length_bynumber)`                                                                 |
| <0.1% |      8 B |         1 | `Base.Broadcast.var"#_maxndims##0#_maxndims##1"{Tuple}`                                                       |
| <0.1% |      8 B |         1 | `Base.var"##_truncated_pipebuffer#392"`                                                                       |
| <0.1% |      8 B |         1 | `typeof(Base.JuliaSyntax.is_prec_pipe_gt)`                                                                    |
| <0.1% |      8 B |         1 | `Profile.var"#print_tree##0#print_tree##1"`                                                                   |
| <0.1% |      8 B |         1 | `Tuple{typeof(Base.Order.ord), typeof(Base.isless), typeof(Base.first), Nothing, Base.Order.ForwardOrdering}` |
| <0.1% |      8 B |         1 | `typeof(Base.TOML.set_marker!)`                                                                               |
| <0.1% |      8 B |         1 | `Tuple{Base.MathConstants.var"#4#5"}`                                                                         |
| <0.1% |      8 B |         1 | `Base.MathConstants.var"##BigFloat#7"`                                                                        |
| <0.1% |      8 B |         1 | `typeof(LinearAlgebra.matprod)`                                                                               |

#### Instances

Instances ranked by contribution to each constructor's retained size.

##### `<generic memory - inline alloc>`

|    % |     Size | Instances | Path                                                                                                                                                       |
| ---: | -------: | --------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2.5% |  256 KiB |         1 | `.<native> Memory{Any} ← .arg1 Core.TypeMapLevel ← .defs Core.MethodTable`                                                                                 |
| 0.6% | 65.2 KiB |         1 | `.<native> Memory{Any} ← .ref.mem Array{Any, 1} ← .backedges Core.MethodInstance`                                                                          |
| 0.6% |   64 KiB |         1 | `.<native> Memory{Any} ← .ht Base.IdDict{Any, Any} ← .restriction Core.BindingPartition ← .partitions Core.Binding ← [7853] SimpleVector ← .bindings Base` |
| 0.6% |   64 KiB |         1 | `.<native> Memory{Any} ← .arg1 Core.TypeMapLevel ← .cache Core.MethodCache ← .cache Core.MethodTable`                                                      |
| 0.6% |   64 KiB |         1 | `.<native> Memory{Any} ← .name1 Core.TypeMapLevel ← .defs Core.MethodTable`                                                                                |

##### `<generic memory - malloc>`

|     % |     Size | Instances | Path                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ----: | -------: | --------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 80.4% | 4.82 MiB |        10 | `.<native> Memory{UInt64} ← .ref.mem Array{UInt64, 1} ← [18446744073709552000] Memory{JSON3.Object{Base.CodeUnits{UInt8, String}, Array{UInt64, 1}}} ← .ref.mem Array{JSON3.Object{Base.CodeUnits{UInt8, String}, Array{UInt64, 1}}, 1} ← .local var (stack frame) ← .next frame (stack frame) ← .next frame (stack frame) ← .next frame (stack frame) ← .next frame (stack frame) ← .next frame (stack frame) ← .next frame (stack frame) ← .stack Task` |
|  2.5% |  153 KiB |         1 | `.<native> Memory{Tuple{UInt64, UInt64, UInt64}} ← .ref.mem Array{Tuple{UInt64, UInt64, UInt64}, 1}`                                                                                                                                                                                                                                                                                                                                                      |
|  1.0% |   64 KiB |         1 | `.<native> Memory{UInt16} ← .bindingkeyset Base`                                                                                                                                                                                                                                                                                                                                                                                                          |
|  1.0% |   64 KiB |         1 | `.<native> Memory{Any} ← .leafcache Core.MethodCache ← .cache Core.MethodTable`                                                                                                                                                                                                                                                                                                                                                                           |
|  0.8% |   51 KiB |         1 | `.<native> Memory{String} ← .ref.mem Array{String, 1} ← .exported_symbols LinearAlgebra.BLAS.LBTConfig ← .config LinearAlgebra.BLAS.ConfigCache`                                                                                                                                                                                                                                                                                                          |

##### `Memory{String}`

|     % |     Size | Instances | Path                                                                                                                                                                                                                                                         |
| ----: | -------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 54.2% |  154 KiB |         1 | `.ref.mem Array{String, 1} ← .exported_symbols LinearAlgebra.BLAS.LBTConfig ← .config LinearAlgebra.BLAS.ConfigCache`                                                                                                                                        |
| 11.7% | 33.3 KiB |         1 | `.keys Base.Dict{String, UInt16}`                                                                                                                                                                                                                            |
| 11.3% |   32 KiB |         1 | `.vals Base.Dict{UInt16, String}`                                                                                                                                                                                                                            |
|  4.6% |   13 KiB |         1 | `.vals Base.Dict{Union{Int64, Symbol}, String}`                                                                                                                                                                                                              |
|  1.3% | 3.72 KiB |         1 | `.keys Base.Dict{String, Any} ← [18446744073709552000] Memory{Any} ← .vals Base.Dict{String, Any} ← .d Base.CachedTOMLDict ← [18446744073709552000] Memory{Base.CachedTOMLDict} ← .vals Base.Dict{String, Base.CachedTOMLDict} ← .d Base.TOMLCache{nothing}` |

##### `Base.Val{Char(0x64000000)}`

|      % | Size | Instances | Path                                   |
| -----: | ---: | --------: | -------------------------------------- |
| 100.0% |  8 B |         1 | `.instance Base.Val{Char(0x64000000)}` |

##### `typeof(Base.close)`

|      % | Size | Instances | Path        |
| -----: | ---: | --------: | ----------- |
| 100.0% |  8 B |         1 | `(GC root)` |

##### `Parsers.var"#36#37"`

|      % | Size | Instances | Path                            |
| -----: | ---: | --------: | ------------------------------- |
| 100.0% |  8 B |         1 | `.instance Parsers.var"#36#37"` |

##### `typeof(Base.Filesystem.delayed_delete_ref)`

|      % | Size | Instances | Path        |
| -----: | ---: | --------: | ----------- |
| 100.0% |  8 B |         1 | `(GC root)` |

##### `typeof(Base.Threads.atomic_min!)`

|      % | Size | Instances | Path        |
| -----: | ---: | --------: | ----------- |
| 100.0% |  8 B |         1 | `(GC root)` |

##### `typeof(Base.SimdLoop.simd_outer_range)`

|      % | Size | Instances | Path        |
| -----: | ---: | --------: | ----------- |
| 100.0% |  8 B |         1 | `(GC root)` |

##### `typeof(Base.Threads.atomic_or!)`

|      % | Size | Instances | Path        |
| -----: | ---: | --------: | ----------- |
| 100.0% |  8 B |         1 | `(GC root)` |

##### `typeof(Base.PCRE.substring_length_bynumber)`

|      % | Size | Instances | Path        |
| -----: | ---: | --------: | ----------- |
| 100.0% |  8 B |         1 | `(GC root)` |

##### `Base.Broadcast.var"#_maxndims##0#_maxndims##1"{Tuple}`

|      % | Size | Instances | Path                                                              |
| -----: | ---: | --------: | ----------------------------------------------------------------- |
| 100.0% |  8 B |         1 | `.instance Base.Broadcast.var"#_maxndims##0#_maxndims##1"{Tuple}` |

##### `Base.var"##_truncated_pipebuffer#392"`

|      % | Size | Instances | Path        |
| -----: | ---: | --------: | ----------- |
| 100.0% |  8 B |         1 | `(GC root)` |

##### `typeof(Base.JuliaSyntax.is_prec_pipe_gt)`

|      % | Size | Instances | Path        |
| -----: | ---: | --------: | ----------- |
| 100.0% |  8 B |         1 | `(GC root)` |

##### `Profile.var"#print_tree##0#print_tree##1"`

|      % | Size | Instances | Path                                                  |
| -----: | ---: | --------: | ----------------------------------------------------- |
| 100.0% |  8 B |         1 | `.instance Profile.var"#print_tree##0#print_tree##1"` |

##### `Tuple{typeof(Base.Order.ord), typeof(Base.isless), typeof(Base.first), Nothing, Base.Order.ForwardOrdering}`

|      % | Size | Instances | Path                                                                                                                    |
| -----: | ---: | --------: | ----------------------------------------------------------------------------------------------------------------------- |
| 100.0% |  8 B |         1 | `.instance Tuple{typeof(Base.Order.ord), typeof(Base.isless), typeof(Base.first), Nothing, Base.Order.ForwardOrdering}` |

##### `typeof(Base.TOML.set_marker!)`

|      % | Size | Instances | Path        |
| -----: | ---: | --------: | ----------- |
| 100.0% |  8 B |         1 | `(GC root)` |

##### `Tuple{Base.MathConstants.var"#4#5"}`

|      % | Size | Instances | Path                                            |
| -----: | ---: | --------: | ----------------------------------------------- |
| 100.0% |  8 B |         1 | `.instance Tuple{Base.MathConstants.var"#4#5"}` |

##### `Base.MathConstants.var"##BigFloat#7"`

|      % | Size | Instances | Path        |
| -----: | ---: | --------: | ----------- |
| 100.0% |  8 B |         1 | `(GC root)` |

##### `typeof(LinearAlgebra.matprod)`

|      % | Size | Instances | Path        |
| -----: | ---: | --------: | ----------- |
| 100.0% |  8 B |         1 | `(GC root)` |

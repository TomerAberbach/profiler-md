# Heap snapshot

Allocated 155 MiB across 1,795,753 nodes and 5,724,326 edges.

| Category           |     % |     Size |   Nodes |
| ------------------ | ----: | -------: | ------: |
| String             | 45.0% | 69.7 MiB | 295,316 |
| Code               | 18.4% | 28.5 MiB | 401,901 |
| Array              | 15.7% | 24.3 MiB | 630,555 |
| Object             | 10.9% | 16.9 MiB | 168,753 |
| Internal           |  9.5% | 14.8 MiB | 268,763 |
| Symbol             |  0.4% |  592 KiB |  27,475 |
| Number             | <0.1% | 39.7 KiB |   2,704 |
| Regular expression | <0.1% | 1.67 KiB |      85 |
| Function           | <0.1% |    728 B |      85 |
| Native             | <0.1% |    536 B |      52 |
| Synthetic          | <0.1% |    440 B |      64 |

## Largest constructors

### Self size

Constructors ranked by bytes allocated for their instances, excluding nodes kept reachable by them.

#### Categories

##### Object

|     % |     Size | Instances | Constructor                                                                                                                                          |
| ----: | -------: | --------: | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
|  6.4% | 9.87 MiB |   120,202 | `<generic memory - inline alloc>`                                                                                                                    |
|  3.9% | 5.98 MiB |    11,691 | `<generic memory - malloc>`                                                                                                                          |
| <0.1% | 6.35 KiB |       271 | `Memory{String}`                                                                                                                                     |
| <0.1% |     48 B |         2 | `Memory{Dates.DateLocale}`                                                                                                                           |
| <0.1% |     24 B |         1 | `Memory{Tuple{String, Array{String, 1}, Array{String, 1}}}`                                                                                          |
| <0.1% |      8 B |         1 | `typeof(Dates.dayabbr_to_value)`                                                                                                                     |
| <0.1% |      8 B |         1 | `Base.Sort.var"#_sort!##10#_sort!##11"{Base.Order.By{Base.var"#run_extension_callbacks##0#run_extension_callbacks##1", Base.Order.ForwardOrdering}}` |
| <0.1% |      8 B |         1 | `typeof(Base.position)`                                                                                                                              |
| <0.1% |      8 B |         1 | `typeof(Base.Compiler.simple_walk_constraint)`                                                                                                       |
| <0.1% |      8 B |         1 | `typeof(Base.valid_import_path)`                                                                                                                     |
| <0.1% |      8 B |         1 | `Base.MappingRF{typeof(Base.identity), typeof(Base.max)}`                                                                                            |
| <0.1% |      8 B |         1 | `Base.Compiler.var"#sroa_pass!##2#sroa_pass!##3"`                                                                                                    |
| <0.1% |      8 B |         1 | `Tuple{typeof(Base.stacktrace_linebreaks)}`                                                                                                          |
| <0.1% |      8 B |         1 | `Base.JuliaSyntax.var"##emit#35"`                                                                                                                    |
| <0.1% |      8 B |         1 | `Base.IteratorsMD.var"#22#23"`                                                                                                                       |
| <0.1% |      8 B |         1 | `typeof(Base.Compiler.renumber_ssa!)`                                                                                                                |
| <0.1% |      8 B |         1 | `Tuple{typeof(Base.in_sysimage)}`                                                                                                                    |
| <0.1% |      8 B |         1 | `LinearAlgebra.var"##lu#186"`                                                                                                                        |
| <0.1% |      8 B |         1 | `typeof(Base.Compiler.has_extended_unionsplit)`                                                                                                      |
| <0.1% |      8 B |         1 | `typeof(Base.print_module_path_file)`                                                                                                                |

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

|     % |     Size | Instances | Path                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ----: | -------: | --------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 80.5% | 4.82 MiB |        10 | `.<native> Memory{UInt64} ← .ref.mem Array{UInt64, 1} ← [<unknown>] Memory{JSON3.Object{Base.CodeUnits{UInt8, String}, Array{UInt64, 1}}} ← .ref.mem Array{JSON3.Object{Base.CodeUnits{UInt8, String}, Array{UInt64, 1}}, 1} ← .local var (stack frame) ← .next frame (stack frame) ← .next frame (stack frame) ← .next frame (stack frame) ← .next frame (stack frame) ← .next frame (stack frame) ← .next frame (stack frame) ← .stack Task` |
|  2.5% |  153 KiB |         1 | `.<native> Memory{Tuple{UInt64, UInt64, UInt64}} ← .ref.mem Array{Tuple{UInt64, UInt64, UInt64}, 1}`                                                                                                                                                                                                                                                                                                                                           |
|  1.0% |   64 KiB |         1 | `.<native> Memory{UInt16} ← .bindingkeyset Base`                                                                                                                                                                                                                                                                                                                                                                                               |
|  1.0% |   64 KiB |         1 | `.<native> Memory{Any} ← .leafcache Core.MethodCache ← .cache Core.MethodTable`                                                                                                                                                                                                                                                                                                                                                                |
|  0.8% |   51 KiB |         1 | `.<native> Memory{String} ← .ref.mem Array{String, 1} ← .exported_symbols LinearAlgebra.BLAS.LBTConfig ← .config LinearAlgebra.BLAS.ConfigCache`                                                                                                                                                                                                                                                                                               |

##### `Memory{String}`

|    % | Size | Instances | Path                                                                                                                                               |
| ---: | ---: | --------: | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1.5% | 96 B |         4 | `.keys Base.Dict{String, Int64}`                                                                                                                   |
| 1.5% | 96 B |         4 | `.ref.mem Array{String, 1}`                                                                                                                        |
| 0.4% | 24 B |         1 | `(GC root)`                                                                                                                                        |
| 0.4% | 24 B |         1 | `.ref.mem Array{String, 1} ← .restriction Core.BindingPartition ← .partitions Core.Binding ← [60] SimpleVector ← .bindings Unicode`                |
| 0.4% | 24 B |         1 | `.keys Base.Dict{String, Dates.DateLocale} ← .restriction Core.BindingPartition ← .partitions Core.Binding ← [231] SimpleVector ← .bindings Dates` |

##### `Memory{Dates.DateLocale}`

|     % | Size | Instances | Path                                                                                                                                               |
| ----: | ---: | --------: | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| 50.0% | 24 B |         1 | `.instance Memory{Dates.DateLocale}`                                                                                                               |
| 50.0% | 24 B |         1 | `.vals Base.Dict{String, Dates.DateLocale} ← .restriction Core.BindingPartition ← .partitions Core.Binding ← [231] SimpleVector ← .bindings Dates` |

##### `Memory{Tuple{String, Array{String, 1}, Array{String, 1}}}`

|      % | Size | Instances | Path                                                                  |
| -----: | ---: | --------: | --------------------------------------------------------------------- |
| 100.0% | 24 B |         1 | `.instance Memory{Tuple{String, Array{String, 1}, Array{String, 1}}}` |

##### `typeof(Dates.dayabbr_to_value)`

|      % | Size | Instances | Path        |
| -----: | ---: | --------: | ----------- |
| 100.0% |  8 B |         1 | `(GC root)` |

##### `Base.Sort.var"#_sort!##10#_sort!##11"{Base.Order.By{Base.var"#run_extension_callbacks##0#run_extension_callbacks##1", Base.Order.ForwardOrdering}}`

|      % | Size | Instances | Path        |
| -----: | ---: | --------: | ----------- |
| 100.0% |  8 B |         1 | `(GC root)` |

##### `typeof(Base.position)`

|      % | Size | Instances | Path        |
| -----: | ---: | --------: | ----------- |
| 100.0% |  8 B |         1 | `(GC root)` |

##### `typeof(Base.Compiler.simple_walk_constraint)`

|      % | Size | Instances | Path        |
| -----: | ---: | --------: | ----------- |
| 100.0% |  8 B |         1 | `(GC root)` |

##### `typeof(Base.valid_import_path)`

|      % | Size | Instances | Path        |
| -----: | ---: | --------: | ----------- |
| 100.0% |  8 B |         1 | `(GC root)` |

##### `Base.MappingRF{typeof(Base.identity), typeof(Base.max)}`

|      % | Size | Instances | Path        |
| -----: | ---: | --------: | ----------- |
| 100.0% |  8 B |         1 | `(GC root)` |

##### `Base.Compiler.var"#sroa_pass!##2#sroa_pass!##3"`

|      % | Size | Instances | Path                                                        |
| -----: | ---: | --------: | ----------------------------------------------------------- |
| 100.0% |  8 B |         1 | `.instance Base.Compiler.var"#sroa_pass!##2#sroa_pass!##3"` |

##### `Tuple{typeof(Base.stacktrace_linebreaks)}`

|      % | Size | Instances | Path                                                  |
| -----: | ---: | --------: | ----------------------------------------------------- |
| 100.0% |  8 B |         1 | `.instance Tuple{typeof(Base.stacktrace_linebreaks)}` |

##### `Base.JuliaSyntax.var"##emit#35"`

|      % | Size | Instances | Path        |
| -----: | ---: | --------: | ----------- |
| 100.0% |  8 B |         1 | `(GC root)` |

##### `Base.IteratorsMD.var"#22#23"`

|      % | Size | Instances | Path                                     |
| -----: | ---: | --------: | ---------------------------------------- |
| 100.0% |  8 B |         1 | `.instance Base.IteratorsMD.var"#22#23"` |

##### `typeof(Base.Compiler.renumber_ssa!)`

|      % | Size | Instances | Path        |
| -----: | ---: | --------: | ----------- |
| 100.0% |  8 B |         1 | `(GC root)` |

##### `Tuple{typeof(Base.in_sysimage)}`

|      % | Size | Instances | Path        |
| -----: | ---: | --------: | ----------- |
| 100.0% |  8 B |         1 | `(GC root)` |

##### `LinearAlgebra.var"##lu#186"`

|      % | Size | Instances | Path        |
| -----: | ---: | --------: | ----------- |
| 100.0% |  8 B |         1 | `(GC root)` |

##### `typeof(Base.Compiler.has_extended_unionsplit)`

|      % | Size | Instances | Path        |
| -----: | ---: | --------: | ----------- |
| 100.0% |  8 B |         1 | `(GC root)` |

##### `typeof(Base.print_module_path_file)`

|      % | Size | Instances | Path        |
| -----: | ---: | --------: | ----------- |
| 100.0% |  8 B |         1 | `(GC root)` |

### Retained size

Constructors ranked by bytes allocated for their instances and all nodes that would be freed if their instances were garbage collected.

#### Categories

##### Object

|     % |     Size | Instances | Constructor                                                                                                                                          |
| ----: | -------: | --------: | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
|  6.4% | 9.87 MiB |   120,202 | `<generic memory - inline alloc>`                                                                                                                    |
|  3.9% | 5.98 MiB |    11,691 | `<generic memory - malloc>`                                                                                                                          |
|  0.2% |  284 KiB |       271 | `Memory{String}`                                                                                                                                     |
| <0.1% | 1.05 KiB |         2 | `Memory{Dates.DateLocale}`                                                                                                                           |
| <0.1% |     24 B |         1 | `Memory{Tuple{String, Array{String, 1}, Array{String, 1}}}`                                                                                          |
| <0.1% |      8 B |         1 | `typeof(Dates.dayabbr_to_value)`                                                                                                                     |
| <0.1% |      8 B |         1 | `Base.Sort.var"#_sort!##10#_sort!##11"{Base.Order.By{Base.var"#run_extension_callbacks##0#run_extension_callbacks##1", Base.Order.ForwardOrdering}}` |
| <0.1% |      8 B |         1 | `typeof(Base.position)`                                                                                                                              |
| <0.1% |      8 B |         1 | `typeof(Base.Compiler.simple_walk_constraint)`                                                                                                       |
| <0.1% |      8 B |         1 | `typeof(Base.valid_import_path)`                                                                                                                     |
| <0.1% |      8 B |         1 | `Base.MappingRF{typeof(Base.identity), typeof(Base.max)}`                                                                                            |
| <0.1% |      8 B |         1 | `Base.Compiler.var"#sroa_pass!##2#sroa_pass!##3"`                                                                                                    |
| <0.1% |      8 B |         1 | `Tuple{typeof(Base.stacktrace_linebreaks)}`                                                                                                          |
| <0.1% |      8 B |         1 | `Base.JuliaSyntax.var"##emit#35"`                                                                                                                    |
| <0.1% |      8 B |         1 | `Base.IteratorsMD.var"#22#23"`                                                                                                                       |
| <0.1% |      8 B |         1 | `typeof(Base.Compiler.renumber_ssa!)`                                                                                                                |
| <0.1% |      8 B |         1 | `Tuple{typeof(Base.in_sysimage)}`                                                                                                                    |
| <0.1% |      8 B |         1 | `LinearAlgebra.var"##lu#186"`                                                                                                                        |
| <0.1% |      8 B |         1 | `typeof(Base.Compiler.has_extended_unionsplit)`                                                                                                      |
| <0.1% |      8 B |         1 | `typeof(Base.print_module_path_file)`                                                                                                                |

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

|     % |     Size | Instances | Path                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ----: | -------: | --------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 80.5% | 4.82 MiB |        10 | `.<native> Memory{UInt64} ← .ref.mem Array{UInt64, 1} ← [<unknown>] Memory{JSON3.Object{Base.CodeUnits{UInt8, String}, Array{UInt64, 1}}} ← .ref.mem Array{JSON3.Object{Base.CodeUnits{UInt8, String}, Array{UInt64, 1}}, 1} ← .local var (stack frame) ← .next frame (stack frame) ← .next frame (stack frame) ← .next frame (stack frame) ← .next frame (stack frame) ← .next frame (stack frame) ← .next frame (stack frame) ← .stack Task` |
|  2.5% |  153 KiB |         1 | `.<native> Memory{Tuple{UInt64, UInt64, UInt64}} ← .ref.mem Array{Tuple{UInt64, UInt64, UInt64}, 1}`                                                                                                                                                                                                                                                                                                                                           |
|  1.0% |   64 KiB |         1 | `.<native> Memory{UInt16} ← .bindingkeyset Base`                                                                                                                                                                                                                                                                                                                                                                                               |
|  1.0% |   64 KiB |         1 | `.<native> Memory{Any} ← .leafcache Core.MethodCache ← .cache Core.MethodTable`                                                                                                                                                                                                                                                                                                                                                                |
|  0.8% |   51 KiB |         1 | `.<native> Memory{String} ← .ref.mem Array{String, 1} ← .exported_symbols LinearAlgebra.BLAS.LBTConfig ← .config LinearAlgebra.BLAS.ConfigCache`                                                                                                                                                                                                                                                                                               |

##### `Memory{String}`

|     % |     Size | Instances | Path                                                                                                                                                                                                                                   |
| ----: | -------: | --------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 54.2% |  154 KiB |         1 | `.ref.mem Array{String, 1} ← .exported_symbols LinearAlgebra.BLAS.LBTConfig ← .config LinearAlgebra.BLAS.ConfigCache`                                                                                                                  |
| 11.7% | 33.3 KiB |         1 | `.keys Base.Dict{String, UInt16}`                                                                                                                                                                                                      |
| 11.3% |   32 KiB |         1 | `.vals Base.Dict{UInt16, String}`                                                                                                                                                                                                      |
|  4.6% |   13 KiB |         1 | `.vals Base.Dict{Union{Int64, Symbol}, String}`                                                                                                                                                                                        |
|  1.3% | 3.72 KiB |         1 | `.keys Base.Dict{String, Any} ← [<unknown>] Memory{Any} ← .vals Base.Dict{String, Any} ← .d Base.CachedTOMLDict ← [<unknown>] Memory{Base.CachedTOMLDict} ← .vals Base.Dict{String, Base.CachedTOMLDict} ← .d Base.TOMLCache{nothing}` |

##### `Memory{Dates.DateLocale}`

|     % |     Size | Instances | Path                                                                                                                                               |
| ----: | -------: | --------: | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| 97.8% | 1.02 KiB |         1 | `.vals Base.Dict{String, Dates.DateLocale} ← .restriction Core.BindingPartition ← .partitions Core.Binding ← [231] SimpleVector ← .bindings Dates` |
|  2.2% |     24 B |         1 | `.instance Memory{Dates.DateLocale}`                                                                                                               |

##### `Memory{Tuple{String, Array{String, 1}, Array{String, 1}}}`

|      % | Size | Instances | Path                                                                  |
| -----: | ---: | --------: | --------------------------------------------------------------------- |
| 100.0% | 24 B |         1 | `.instance Memory{Tuple{String, Array{String, 1}, Array{String, 1}}}` |

##### `typeof(Dates.dayabbr_to_value)`

|      % | Size | Instances | Path        |
| -----: | ---: | --------: | ----------- |
| 100.0% |  8 B |         1 | `(GC root)` |

##### `Base.Sort.var"#_sort!##10#_sort!##11"{Base.Order.By{Base.var"#run_extension_callbacks##0#run_extension_callbacks##1", Base.Order.ForwardOrdering}}`

|      % | Size | Instances | Path        |
| -----: | ---: | --------: | ----------- |
| 100.0% |  8 B |         1 | `(GC root)` |

##### `typeof(Base.position)`

|      % | Size | Instances | Path        |
| -----: | ---: | --------: | ----------- |
| 100.0% |  8 B |         1 | `(GC root)` |

##### `typeof(Base.Compiler.simple_walk_constraint)`

|      % | Size | Instances | Path        |
| -----: | ---: | --------: | ----------- |
| 100.0% |  8 B |         1 | `(GC root)` |

##### `typeof(Base.valid_import_path)`

|      % | Size | Instances | Path        |
| -----: | ---: | --------: | ----------- |
| 100.0% |  8 B |         1 | `(GC root)` |

##### `Base.MappingRF{typeof(Base.identity), typeof(Base.max)}`

|      % | Size | Instances | Path        |
| -----: | ---: | --------: | ----------- |
| 100.0% |  8 B |         1 | `(GC root)` |

##### `Base.Compiler.var"#sroa_pass!##2#sroa_pass!##3"`

|      % | Size | Instances | Path                                                        |
| -----: | ---: | --------: | ----------------------------------------------------------- |
| 100.0% |  8 B |         1 | `.instance Base.Compiler.var"#sroa_pass!##2#sroa_pass!##3"` |

##### `Tuple{typeof(Base.stacktrace_linebreaks)}`

|      % | Size | Instances | Path                                                  |
| -----: | ---: | --------: | ----------------------------------------------------- |
| 100.0% |  8 B |         1 | `.instance Tuple{typeof(Base.stacktrace_linebreaks)}` |

##### `Base.JuliaSyntax.var"##emit#35"`

|      % | Size | Instances | Path        |
| -----: | ---: | --------: | ----------- |
| 100.0% |  8 B |         1 | `(GC root)` |

##### `Base.IteratorsMD.var"#22#23"`

|      % | Size | Instances | Path                                     |
| -----: | ---: | --------: | ---------------------------------------- |
| 100.0% |  8 B |         1 | `.instance Base.IteratorsMD.var"#22#23"` |

##### `typeof(Base.Compiler.renumber_ssa!)`

|      % | Size | Instances | Path        |
| -----: | ---: | --------: | ----------- |
| 100.0% |  8 B |         1 | `(GC root)` |

##### `Tuple{typeof(Base.in_sysimage)}`

|      % | Size | Instances | Path        |
| -----: | ---: | --------: | ----------- |
| 100.0% |  8 B |         1 | `(GC root)` |

##### `LinearAlgebra.var"##lu#186"`

|      % | Size | Instances | Path        |
| -----: | ---: | --------: | ----------- |
| 100.0% |  8 B |         1 | `(GC root)` |

##### `typeof(Base.Compiler.has_extended_unionsplit)`

|      % | Size | Instances | Path        |
| -----: | ---: | --------: | ----------- |
| 100.0% |  8 B |         1 | `(GC root)` |

##### `typeof(Base.print_module_path_file)`

|      % | Size | Instances | Path        |
| -----: | ---: | --------: | ----------- |
| 100.0% |  8 B |         1 | `(GC root)` |

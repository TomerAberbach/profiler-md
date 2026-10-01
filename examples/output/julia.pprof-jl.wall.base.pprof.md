# Sampling profile

Collected 32,046 samples.

| Category         |     % | Samples |
| ---------------- | ----: | ------: |
| Third-party      | 45.9% |  14,694 |
| Standard library | 27.2% |   8,717 |
| Unknown          | 22.8% |   7,292 |
| Native           |  4.0% |   1,274 |
| Ours             |  0.2% |      69 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|     % | Samples | Function                                                                                                                                                                                                                         | Location                                                                                                   |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| 22.8% |   7,292 | `(anonymous)`                                                                                                                                                                                                                    | `<unknown>`                                                                                                |
| 21.4% |   6,857 | `_symbol`                                                                                                                                                                                                                        | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`    |
| 20.4% |   6,528 | `#write#79`                                                                                                                                                                                                                      | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`  |
|  6.5% |   2,067 | `indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64, ::Int64)`                                                                                                                                                        | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`          |
|  4.5% |   1,444 | `indexed_iterate`                                                                                                                                                                                                                | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`          |
|  4.0% |   1,286 | `GenericMemory`                                                                                                                                                                                                                  | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:588`           |
|  3.2% |   1,025 | `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})`                                                                                                                                                     | `<unknown>`                                                                                                |
|  1.7% |     535 | `ht_keyindex2_shorthash!(::Dict{Symbol, Int64}, ::Symbol)`                                                                                                                                                                       | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:267`           |
|  1.6% |     522 | `unsafe_load`                                                                                                                                                                                                                    | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/pointer.jl:151`        |
|  1.0% |     314 | `+`                                                                                                                                                                                                                              | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:87`             |
|  0.8% |     257 | `_foldl_impl`                                                                                                                                                                                                                    | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`          |
|  0.8% |     242 | `[unknown function]`                                                                                                                                                                                                             | `<unknown>`                                                                                                |
|  0.8% |     242 | `_setindex!`                                                                                                                                                                                                                     | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:1025`         |
|  0.7% |     232 | `BottomRF`                                                                                                                                                                                                                       | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:84`          |
|  0.7% |     217 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:218`   |
|  0.5% |     174 | `getindex`                                                                                                                                                                                                                       | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:975`     |
|  0.5% |     154 | `unsafe_string`                                                                                                                                                                                                                  | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:130` |
|  0.4% |     139 | `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{String})`                                                                                                                   | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:142`   |
|  0.4% |     134 | `#write#81`                                                                                                                                                                                                                      | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:200`  |
|  0.4% |     128 | `iterate`                                                                                                                                                                                                                        | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:75`   |

#### Categories

##### Third-party

|     % | Samples | Function                                                                                                                                                                                                                         | Location                                                                                                  |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| 21.4% |   6,857 | `_symbol`                                                                                                                                                                                                                        | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`   |
| 20.4% |   6,528 | `#write#79`                                                                                                                                                                                                                      | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157` |
|  0.7% |     217 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:218`  |
|  0.4% |     139 | `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{String})`                                                                                                                   | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:142`  |
|  0.4% |     134 | `#write#81`                                                                                                                                                                                                                      | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:200` |
|  0.4% |     128 | `iterate`                                                                                                                                                                                                                        | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:75`  |
|  0.3% |      87 | `var\"#write#98\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)`                                                          | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:340` |
|  0.2% |      78 | `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)`                                                                     | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:87`   |
|  0.2% |      76 | `getvalue`                                                                                                                                                                                                                       | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:215` |
|  0.2% |      51 | `iterate`                                                                                                                                                                                                                        | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl`     |
|  0.1% |      43 | `write(::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)`                                                                                                                                                   | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:340` |
|  0.1% |      39 | `getvalue`                                                                                                                                                                                                                       | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl`     |
|  0.1% |      33 | `macro expansion`                                                                                                                                                                                                                | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:23`  |
|  0.1% |      25 | `getvalue`                                                                                                                                                                                                                       | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:213` |
|  0.1% |      23 | `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})`                                                                                               | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40`  |
|  0.1% |      22 | `var\"#write#86\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.NumberType, ::Vector{UInt8}, ::Int64, ::Int64, ::Int64)`                                                           | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:224` |
|  0.1% |      19 | `macro expansion`                                                                                                                                                                                                                | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:14`  |
|  0.1% |      19 | `getvalue(::Type{JSON3.Array}, ::Base.CodeUnits{UInt8, String}, ::SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}, ::Int64, ::UInt64)`                                                                        | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:131` |
|  0.1% |      19 | `var\"#write#84\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.BoolType, ::Vector{UInt8}, ::Int64, ::Int64, ::Bool)`                                                              | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:209` |
|  0.1% |      17 | `write(::StructTypes.BoolType, ::Vector{UInt8}, ::Int64, ::Int64, ::Bool)`                                                                                                                                                       | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:209` |

##### Standard library

|    % | Samples | Function                                                                  | Location                                                                                                   |
| ---: | ------: | ------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| 6.5% |   2,067 | `indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64, ::Int64)` | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`          |
| 4.5% |   1,444 | `indexed_iterate`                                                         | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`          |
| 4.0% |   1,286 | `GenericMemory`                                                           | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:588`           |
| 1.7% |     535 | `ht_keyindex2_shorthash!(::Dict{Symbol, Int64}, ::Symbol)`                | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:267`           |
| 1.6% |     522 | `unsafe_load`                                                             | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/pointer.jl:151`        |
| 1.0% |     314 | `+`                                                                       | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:87`             |
| 0.8% |     257 | `_foldl_impl`                                                             | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`          |
| 0.8% |     242 | `_setindex!`                                                              | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:1025`         |
| 0.7% |     232 | `BottomRF`                                                                | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:84`          |
| 0.5% |     174 | `getindex`                                                                | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:975`     |
| 0.5% |     154 | `unsafe_string`                                                           | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:130` |
| 0.4% |     127 | `checkbounds`                                                             | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/basic.jl:212`  |
| 0.3% |      97 | `length_continued`                                                        | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/pointer.jl`            |
| 0.3% |      96 | `getproperty`                                                             | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base_compiler.jl:57`   |
| 0.3% |      84 | `==`                                                                      | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/promotion.jl:641`      |
| 0.3% |      84 | `unsafe_string`                                                           | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:126` |
| 0.3% |      81 | `\|`                                                                      | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:418`            |
| 0.2% |      78 | `#write#81`                                                               | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`   |
| 0.2% |      67 | `setindex!(::Dict{Symbol, Int64}, ::Int64, ::Symbol)`                     | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:356`           |
| 0.2% |      63 | `&`                                                                       | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:393`            |

##### Unknown

|     % | Samples | Function      | Location    |
| ----: | ------: | ------------- | ----------- |
| 22.8% |   7,292 | `(anonymous)` | `<unknown>` |

##### Native

|     % | Samples | Function                                                                     | Location    |
| ----: | ------: | ---------------------------------------------------------------------------- | ----------- |
|  3.2% |   1,025 | `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` | `<unknown>` |
|  0.8% |     242 | `[unknown function]`                                                         | `<unknown>` |
| <0.1% |       7 | `#defaultminimum##0`                                                         | `<unknown>` |

#### Lines

Lines ranked by contribution to each function's self samples.

##### `_symbol` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`)

|      % | Samples | Location                                                                                                |
| -----: | ------: | ------------------------------------------------------------------------------------------------------- |
| 100.0% |   6,857 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:1` |

##### `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`)

|     % | Samples | Location                                                                                                  |
| ----: | ------: | --------------------------------------------------------------------------------------------------------- |
| 60.6% |   3,956 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157` |
| 20.9% |   1,366 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:60`  |
|  7.4% |     485 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:73`  |
|  4.3% |     282 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:155` |
|  4.3% |     282 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:72`  |

##### `indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64, ::Int64)` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`)

|      % | Samples | Location                                                                                          |
| -----: | ------: | ------------------------------------------------------------------------------------------------- |
| 100.0% |   2,067 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163` |

##### `indexed_iterate` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`)

|      % | Samples | Location                                                                                          |
| -----: | ------: | ------------------------------------------------------------------------------------------------- |
| 100.0% |   1,444 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163` |

##### `GenericMemory` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:588`)

|      % | Samples | Location                                                                                         |
| -----: | ------: | ------------------------------------------------------------------------------------------------ |
| 100.0% |   1,286 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:588` |

##### `ht_keyindex2_shorthash!(::Dict{Symbol, Int64}, ::Symbol)` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:267`)

|     % | Samples | Location                                                                                         |
| ----: | ------: | ------------------------------------------------------------------------------------------------ |
| 61.3% |     328 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:291` |
| 17.2% |      92 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:282` |
|  4.9% |      26 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:281` |
|  2.6% |      14 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:267` |
|  2.6% |      14 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:303` |

##### `unsafe_load` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/pointer.jl:151`)

|      % | Samples | Location                                                                                            |
| -----: | ------: | --------------------------------------------------------------------------------------------------- |
| 100.0% |     522 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/pointer.jl:151` |

##### `+` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:87`)

|      % | Samples | Location                                                                                       |
| -----: | ------: | ---------------------------------------------------------------------------------------------- |
| 100.0% |     314 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:87` |

##### `_foldl_impl` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`)

|     % | Samples | Location                                                                                          |
| ----: | ------: | ------------------------------------------------------------------------------------------------- |
| 88.7% |     228 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60` |
|  2.7% |       7 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:56` |
|  1.6% |       4 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:51` |

##### `[unknown function]` (`<unknown>`)

|     % | Samples | Location |
| ----: | ------: | -------- |
| 59.5% |     144 | 147      |
| 33.9% |      82 | 98       |
|  2.9% |       7 | 11       |
|  2.1% |       5 | 181      |
|  0.8% |       2 | 12       |

##### `_setindex!` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:1025`)

|      % | Samples | Location                                                                                           |
| -----: | ------: | -------------------------------------------------------------------------------------------------- |
| 100.0% |     242 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:1025` |

##### `BottomRF` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:84`)

|      % | Samples | Location                                                                                          |
| -----: | ------: | ------------------------------------------------------------------------------------------------- |
| 100.0% |     232 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:84` |

##### `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:218`)

|     % | Samples | Location                                                                                                 |
| ----: | ------: | -------------------------------------------------------------------------------------------------------- |
| 67.7% |     147 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:248` |
| 10.1% |      22 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:298` |
|  5.1% |      11 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:247` |
|  5.1% |      11 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:284` |
|  3.2% |       7 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:268` |

##### `getindex` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:975`)

|      % | Samples | Location                                                                                               |
| -----: | ------: | ------------------------------------------------------------------------------------------------------ |
| 100.0% |     174 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:975` |

##### `unsafe_string` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:130`)

|      % | Samples | Location                                                                                                   |
| -----: | ------: | ---------------------------------------------------------------------------------------------------------- |
| 100.0% |     154 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:130` |

##### `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{String})` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:142`)

|     % | Samples | Location                                                                                                 |
| ----: | ------: | -------------------------------------------------------------------------------------------------------- |
| 50.4% |      70 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:155` |
|  3.6% |       5 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:142` |
|  1.4% |       2 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:167` |
|  1.4% |       2 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:150` |
|  0.7% |       1 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:166` |

##### `#write#81` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:200`)

|     % | Samples | Location                                                                                                  |
| ----: | ------: | --------------------------------------------------------------------------------------------------------- |
| 44.0% |      59 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:200` |
| 38.1% |      51 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:60`  |
|  8.2% |      11 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:73`  |
|  4.5% |       6 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:72`  |
|  3.7% |       5 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:181` |

##### `iterate` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:75`)

|      % | Samples | Location                                                                                                 |
| -----: | ------: | -------------------------------------------------------------------------------------------------------- |
| 100.0% |     128 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:75` |

##### `checkbounds` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/basic.jl:212`)

|      % | Samples | Location                                                                                                  |
| -----: | ------: | --------------------------------------------------------------------------------------------------------- |
| 100.0% |     127 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/basic.jl:212` |

##### `getproperty` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base_compiler.jl:57`)

|      % | Samples | Location                                                                                                 |
| -----: | ------: | -------------------------------------------------------------------------------------------------------- |
| 100.0% |      96 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base_compiler.jl:57` |

##### `var\"#write#98\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:340`)

|     % | Samples | Location                                                                                                  |
| ----: | ------: | --------------------------------------------------------------------------------------------------------- |
| 50.6% |      44 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:360` |
| 12.6% |      11 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:340` |
| 10.3% |       9 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:60`  |
|  8.0% |       7 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:351` |
|  1.1% |       1 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:346` |

##### `==` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/promotion.jl:641`)

|      % | Samples | Location                                                                                              |
| -----: | ------: | ----------------------------------------------------------------------------------------------------- |
| 100.0% |      84 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/promotion.jl:641` |

##### `unsafe_string` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:126`)

|      % | Samples | Location                                                                                                   |
| -----: | ------: | ---------------------------------------------------------------------------------------------------------- |
| 100.0% |      84 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:126` |

##### `|` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:418`)

|      % | Samples | Location                                                                                        |
| -----: | ------: | ----------------------------------------------------------------------------------------------- |
| 100.0% |      81 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:418` |

##### `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:87`)

|     % | Samples | Location                                                                                                |
| ----: | ------: | ------------------------------------------------------------------------------------------------------- |
| 24.4% |      19 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:87` |
| 20.5% |      16 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:88` |
|  9.0% |       7 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:93` |
|  5.1% |       4 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:95` |
|  2.6% |       2 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:91` |

##### `#write#81` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`)

|     % | Samples | Location                                                                                                     |
| ----: | ------: | ------------------------------------------------------------------------------------------------------------ |
| 42.3% |      33 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:187` |
| 23.1% |      18 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:60`  |
|  9.0% |       7 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:200` |
|  7.7% |       6 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:72`  |
|  6.4% |       5 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:73`  |

##### `getvalue` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:215`)

|      % | Samples | Location                                                                                                  |
| -----: | ------: | --------------------------------------------------------------------------------------------------------- |
| 100.0% |      76 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:215` |

##### `setindex!(::Dict{Symbol, Int64}, ::Int64, ::Symbol)` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:356`)

|     % | Samples | Location                                                                                         |
| ----: | ------: | ------------------------------------------------------------------------------------------------ |
| 77.6% |      52 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:368` |
| 20.9% |      14 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:356` |
|  1.5% |       1 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:358` |

##### `&` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:393`)

|      % | Samples | Location                                                                                        |
| -----: | ------: | ----------------------------------------------------------------------------------------------- |
| 100.0% |      63 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:393` |

##### `write(::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:340`)

|      % | Samples | Location                                                                                                  |
| -----: | ------: | --------------------------------------------------------------------------------------------------------- |
| 100.0% |      43 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:340` |

##### `macro expansion` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:23`)

|      % | Samples | Location                                                                                                 |
| -----: | ------: | -------------------------------------------------------------------------------------------------------- |
| 100.0% |      33 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:23` |

##### `getvalue` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:213`)

|      % | Samples | Location                                                                                                  |
| -----: | ------: | --------------------------------------------------------------------------------------------------------- |
| 100.0% |      25 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:213` |

##### `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40`)

|     % | Samples | Location                                                                                                 |
| ----: | ------: | -------------------------------------------------------------------------------------------------------- |
| 60.9% |      14 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:47` |
| 13.0% |       3 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:51` |
|  4.3% |       1 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:55` |
|  4.3% |       1 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40` |

##### `var\"#write#86\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.NumberType, ::Vector{UInt8}, ::Int64, ::Int64, ::Int64)` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:224`)

|     % | Samples | Location                                                                                                  |
| ----: | ------: | --------------------------------------------------------------------------------------------------------- |
| 90.9% |      20 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:236` |
|  9.1% |       2 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:224` |

##### `macro expansion` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:14`)

|      % | Samples | Location                                                                                                 |
| -----: | ------: | -------------------------------------------------------------------------------------------------------- |
| 100.0% |      19 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:14` |

##### `getvalue(::Type{JSON3.Array}, ::Base.CodeUnits{UInt8, String}, ::SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}, ::Int64, ::UInt64)` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:131`)

|     % | Samples | Location                                                                                                  |
| ----: | ------: | --------------------------------------------------------------------------------------------------------- |
| 10.5% |       2 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:131` |

##### `var\"#write#84\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.BoolType, ::Vector{UInt8}, ::Int64, ::Int64, ::Bool)` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:209`)

|     % | Samples | Location                                                                                                  |
| ----: | ------: | --------------------------------------------------------------------------------------------------------- |
| 73.7% |      14 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:215` |
| 26.3% |       5 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:209` |

##### `write(::StructTypes.BoolType, ::Vector{UInt8}, ::Int64, ::Int64, ::Bool)` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:209`)

|      % | Samples | Location                                                                                                  |
| -----: | ------: | --------------------------------------------------------------------------------------------------------- |
| 100.0% |      17 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:209` |

#### Callers

Callers ranked by contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `_symbol` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`)

|      % | Samples | Caller     | Location                                                                                                  |
| -----: | ------: | ---------- | --------------------------------------------------------------------------------------------------------- |
| 100.0% |   6,857 | `getvalue` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:187` |

##### `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`)

|     % | Samples | Caller               | Location                                                                                                  |
| ----: | ------: | -------------------- | --------------------------------------------------------------------------------------------------------- |
| 99.9% |   6,523 | `[unknown function]` | `<unknown>`                                                                                               |
| <0.1% |       3 | `write`              | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:147` |
| <0.1% |       2 | `#write#79`          | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157` |

##### `indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64, ::Int64)` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`)

|      % | Samples | Caller      | Location                                                                                                  |
| -----: | ------: | ----------- | --------------------------------------------------------------------------------------------------------- |
| 100.0% |   2,067 | `#write#79` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157` |

##### `indexed_iterate` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`)

|     % | Samples | Caller                                                           | Location                                                                                                  |
| ----: | ------: | ---------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| 63.5% |     917 | `indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64)` | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`         |
| 31.2% |     451 | `#write#79`                                                      | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157` |
|  5.0% |      72 | `indexed_iterate`                                                | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`         |
|  0.3% |       4 | `#write#81`                                                      | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`  |

##### `GenericMemory` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:588`)

|     % | Samples | Caller                                    | Location                                                                                           |
| ----: | ------: | ----------------------------------------- | -------------------------------------------------------------------------------------------------- |
| 66.2% |     851 | `Array`                                   | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:648`   |
| 33.5% |     431 | `rehash!(::Dict{Symbol, Int64}, ::Int64)` | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:138`   |
|  0.3% |       4 | `array_new_memory`                        | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:1101` |

##### `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` (`<unknown>`)

|     % | Samples | Caller               | Location                                                                                          |
| ----: | ------: | -------------------- | ------------------------------------------------------------------------------------------------- |
| 82.7% |     848 | `[unknown function]` | `<unknown>`                                                                                       |
| 15.7% |     161 | `MappingRF`          | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98` |
|  1.5% |      15 | `_foldl_impl`        | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60` |
|  0.1% |       1 | `foldl_impl`         | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:46` |

##### `ht_keyindex2_shorthash!(::Dict{Symbol, Int64}, ::Symbol)` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:267`)

|     % | Samples | Caller                                                                                                                             | Location                                                                                                 |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| 89.2% |     477 | `setindex!(::Dict{Symbol, Int64}, ::Int64, ::Symbol)`                                                                              | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:356`         |
| 10.8% |      58 | `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40` |

##### `unsafe_load` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/pointer.jl:151`)

|      % | Samples | Caller        | Location                                                                                            |
| -----: | ------: | ------------- | --------------------------------------------------------------------------------------------------- |
| 100.0% |     522 | `unsafe_load` | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/pointer.jl:151` |

##### `+` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:87`)

|     % | Samples | Caller                                                                                                                                                                                                                           | Location                                                                                                   |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| 28.7% |      90 | `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})`                                                                                               | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40`   |
| 20.7% |      65 | `macro expansion`                                                                                                                                                                                                                | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:24`   |
| 15.3% |      48 | `length_continued`                                                                                                                                                                                                               | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:559` |
| 11.1% |      35 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:218`   |
|  6.1% |      19 | `macro expansion`                                                                                                                                                                                                                | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:333`  |

##### `_foldl_impl` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`)

|     % | Samples | Caller                                                                       | Location                                                                                          |
| ----: | ------: | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| 99.6% |     256 | `foldl_impl`                                                                 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:46` |
|  0.4% |       1 | `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` | `<unknown>`                                                                                       |

##### `[unknown function]` (`<unknown>`)

|     % | Samples | Caller                                                                       | Location                                                                                                  |
| ----: | ------: | ---------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| 45.9% |     111 | `#write#79`                                                                  | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157` |
| 33.9% |      82 | `_foldl_impl`                                                                | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`         |
| 15.7% |      38 | `#write#81`                                                                  | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`  |
|  3.7% |       9 | `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` | `<unknown>`                                                                                               |
|  0.4% |       1 | `parse_workload`                                                             | `profile.jl:18`                                                                                           |

##### `_setindex!` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:1025`)

|     % | Samples | Caller               | Location                                                                                           |
| ----: | ------: | -------------------- | -------------------------------------------------------------------------------------------------- |
| 92.1% |     223 | `setindex!`          | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:1020` |
|  7.9% |      19 | `[unknown function]` | `<unknown>`                                                                                        |

##### `BottomRF` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:84`)

|     % | Samples | Caller               | Location                                                                                          |
| ----: | ------: | -------------------- | ------------------------------------------------------------------------------------------------- |
| 97.8% |     227 | `[unknown function]` | `<unknown>`                                                                                       |
|  2.2% |       5 | `MappingRF`          | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98` |

##### `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:218`)

|     % | Samples | Caller                                                                                                                                                                               | Location                                                                                                 |
| ----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------- |
| 99.1% |     215 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:218` |
|  0.9% |       2 | `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)`                         | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:87`  |

##### `getindex` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:975`)

|     % | Samples | Caller                                                                                                                                                                                                                           | Location                                                                                                  |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| 55.7% |      97 | `macro expansion`                                                                                                                                                                                                                | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:332` |
| 26.4% |      46 | `getindex`                                                                                                                                                                                                                       | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/subarray.jl:334`      |
| 13.2% |      23 | `var\"#write#98\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)`                                                          | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:340` |
|  2.9% |       5 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:218`  |
|  1.1% |       2 | `var\"#read!#9\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Array}, ::Bool)`  | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:312`  |

##### `unsafe_string` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:130`)

|      % | Samples | Caller   | Location                                                                                                   |
| -----: | ------: | -------- | ---------------------------------------------------------------------------------------------------------- |
| 100.0% |     154 | `String` | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:145` |

##### `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{String})` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:142`)

|     % | Samples | Caller                                                                                                                                                                      | Location                                                                                                |
| ----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| 98.6% |     137 | `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)`                | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:87` |
|  1.4% |       2 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:87` |

##### `#write#81` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:200`)

|     % | Samples | Caller               | Location                                                                                                  |
| ----: | ------: | -------------------- | --------------------------------------------------------------------------------------------------------- |
| 97.0% |     130 | `[unknown function]` | `<unknown>`                                                                                               |
|  2.2% |       3 | `#write#79`          | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157` |
|  0.7% |       1 | `#write#81`          | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:200` |

##### `iterate` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:75`)

|     % | Samples | Caller                                                                                                                       | Location                                                                                                  |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| 46.9% |      60 | `#write#79`                                                                                                                  | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157` |
| 36.7% |      47 | `iterate`                                                                                                                    | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:75`  |
| 13.3% |      17 | `iterate`                                                                                                                    | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/iterators.jl:697`     |
|  3.1% |       4 | `isempty(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:1127`   |

##### `checkbounds` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/basic.jl:212`)

|      % | Samples | Caller     | Location                                                                                                   |
| -----: | ------: | ---------- | ---------------------------------------------------------------------------------------------------------- |
| 100.0% |     127 | `codeunit` | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:166` |

##### `length_continued` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/pointer.jl`)

|      % | Samples | Caller             | Location                                                                                                   |
| -----: | ------: | ------------------ | ---------------------------------------------------------------------------------------------------------- |
| 100.0% |      97 | `length(::String)` | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:540` |

##### `getproperty` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base_compiler.jl:57`)

|     % | Samples | Caller                                                     | Location                                                                                         |
| ----: | ------: | ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 49.0% |      47 | `_setindex!`                                               | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:331` |
| 13.5% |      13 | `ht_keyindex2_shorthash!(::Dict{Symbol, Int64}, ::Symbol)` | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:267` |
|  9.4% |       9 | `_setindex!`                                               | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:328` |
|  8.3% |       8 | `_setindex!`                                               | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:325` |
|  6.3% |       6 | `_setindex!`                                               | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:327` |

##### `var\"#write#98\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:340`)

|     % | Samples | Caller                                                                         | Location                                                                                                  |
| ----: | ------: | ------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------- |
| 52.9% |      46 | `write(::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:340` |
| 47.1% |      41 | `#write#79`                                                                    | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157` |

##### `==` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/promotion.jl:641`)

|     % | Samples | Caller                                                                                                         | Location                                                                                                  |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| 53.6% |      45 | `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{String})` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:142`  |
| 27.4% |      23 | `ht_keyindex2_shorthash!(::Dict{Symbol, Int64}, ::Symbol)`                                                     | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:267`          |
| 10.7% |       9 | `isarray`                                                                                                      | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:61`  |
|  2.4% |       2 | `promoteeltype`                                                                                                | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:100` |
|  1.2% |       1 | `iterate`                                                                                                      | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/range.jl:928`         |

##### `unsafe_string` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:126`)

|      % | Samples | Caller     | Location                                                                                                  |
| -----: | ------: | ---------- | --------------------------------------------------------------------------------------------------------- |
| 100.0% |      84 | `getvalue` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:195` |

##### `|` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:418`)

|     % | Samples | Caller          | Location                                                                                                     |
| ----: | ------: | --------------- | ------------------------------------------------------------------------------------------------------------ |
| 86.4% |      70 | `string`        | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:88`     |
|  9.9% |       8 | `promoteeltype` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:96`     |
|  2.5% |       2 | `\|`            | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:1058`             |
|  1.2% |       1 | `parsefrac`     | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/Parsers/05lwR/src/floats.jl:496` |

##### `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:87`)

|     % | Samples | Caller                                                                                                                                                                                                                           | Location                                                                                                 |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| 69.2% |      54 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)`                                                      | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:87`  |
| 29.5% |      23 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:218` |
|  1.3% |       1 | `var\"#read!#9\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Array}, ::Bool)`  | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:312` |

##### `#write#81` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`)

|      % | Samples | Caller               | Location    |
| -----: | ------: | -------------------- | ----------- |
| 100.0% |      78 | `[unknown function]` | `<unknown>` |

##### `getvalue` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:215`)

|      % | Samples | Caller    | Location                                                                                                 |
| -----: | ------: | --------- | -------------------------------------------------------------------------------------------------------- |
| 100.0% |      76 | `iterate` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:81` |

##### `setindex!(::Dict{Symbol, Int64}, ::Int64, ::Symbol)` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:356`)

|     % | Samples | Caller                                                                                                                             | Location                                                                                                  |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| 74.6% |      50 | `getvalue`                                                                                                                         | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:127` |
| 25.4% |      17 | `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40`  |

##### `&` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:393`)

|     % | Samples | Caller                                                     | Location                                                                                                  |
| ----: | ------: | ---------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| 73.0% |      46 | `getnontypemask`                                           | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:114` |
| 27.0% |      17 | `ht_keyindex2_shorthash!(::Dict{Symbol, Int64}, ::Symbol)` | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:267`          |

##### `iterate` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl`)

|     % | Samples | Caller      | Location                                                                                                  |
| ----: | ------: | ----------- | --------------------------------------------------------------------------------------------------------- |
| 49.0% |      25 | `#write#79` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157` |
| 33.3% |      17 | `iterate`   | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:75`  |
| 17.6% |       9 | `iterate`   | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/iterators.jl:697`     |

##### `write(::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:340`)

|      % | Samples | Caller      | Location                                                                                                  |
| -----: | ------: | ----------- | --------------------------------------------------------------------------------------------------------- |
| 100.0% |      43 | `#write#79` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157` |

##### `getvalue` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl`)

|     % | Samples | Caller    | Location                                                                                                 |
| ----: | ------: | --------- | -------------------------------------------------------------------------------------------------------- |
| 84.6% |      33 | `iterate` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:81` |
| 15.4% |       6 | `iterate` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:78` |

##### `macro expansion` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:23`)

|     % | Samples | Caller                                                                                                                                                                                                                           | Location                                                                                                 |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| 93.9% |      31 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:218` |
|  6.1% |       2 | `var\"#read!#9\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Array}, ::Bool)`  | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:312` |

##### `getvalue` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:213`)

|      % | Samples | Caller    | Location                                                                                                 |
| -----: | ------: | --------- | -------------------------------------------------------------------------------------------------------- |
| 100.0% |      25 | `iterate` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:81` |

##### `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40`)

|     % | Samples | Caller               | Location                                                                                                  |
| ----: | ------: | -------------------- | --------------------------------------------------------------------------------------------------------- |
| 95.7% |      22 | `getvalue`           | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:127` |
|  4.3% |       1 | `[unknown function]` | `<unknown>`                                                                                               |

##### `var\"#write#86\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.NumberType, ::Vector{UInt8}, ::Int64, ::Int64, ::Int64)` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:224`)

|     % | Samples | Caller                                                                                                                                                                                       | Location                                                                                                  |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| 72.7% |      16 | `write(::StructTypes.NumberType, ::Vector{UInt8}, ::Int64, ::Int64, ::Int64)`                                                                                                                | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:224` |
| 18.2% |       4 | `#write#79`                                                                                                                                                                                  | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157` |
|  4.5% |       1 | `write`                                                                                                                                                                                      | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:224` |
|  4.5% |       1 | `write(::StructTypes.ArrayType, ::Vector{UInt8}, ::Int64, ::Int64, ::JSON3.Array{Int64, Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:181` |

##### `macro expansion` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:14`)

|     % | Samples | Caller                                                                                                                                                                                                                           | Location                                                                                                 |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| 84.2% |      16 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:218` |
| 15.8% |       3 | `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{String})`                                                                                                                   | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:142` |

##### `getvalue(::Type{JSON3.Array}, ::Base.CodeUnits{UInt8, String}, ::SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}, ::Int64, ::UInt64)` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:131`)

|     % | Samples | Caller               | Location                                                                                                  |
| ----: | ------: | -------------------- | --------------------------------------------------------------------------------------------------------- |
| 84.2% |      16 | `getvalue`           | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:216` |
| 10.5% |       2 | `[unknown function]` | `<unknown>`                                                                                               |
|  5.3% |       1 | `foldl_impl`         | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:46`         |

##### `var\"#write#84\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.BoolType, ::Vector{UInt8}, ::Int64, ::Int64, ::Bool)` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:209`)

|     % | Samples | Caller                                                                     | Location                                                                                                  |
| ----: | ------: | -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| 52.6% |      10 | `#write#79`                                                                | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157` |
| 47.4% |       9 | `write(::StructTypes.BoolType, ::Vector{UInt8}, ::Int64, ::Int64, ::Bool)` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:209` |

##### `write(::StructTypes.BoolType, ::Vector{UInt8}, ::Int64, ::Int64, ::Bool)` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:209`)

|      % | Samples | Caller      | Location                                                                                                  |
| -----: | ------: | ----------- | --------------------------------------------------------------------------------------------------------- |
| 100.0% |      17 | `#write#79` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157` |

##### `#defaultminimum##0` (`<unknown>`)

|      % | Samples | Caller               | Location    |
| -----: | ------: | -------------------- | ----------- |
| 100.0% |       7 | `[unknown function]` | `<unknown>` |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|     % | Samples | Function                                                           | Location                                                                                                               |
| ----: | ------: | ------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------- |
| 77.2% |  24,751 | `macro expansion`                                                  | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/stdlib/v1.13/Profile/src/Profile.jl:82` |
| 77.2% |  24,751 | `capture_wall`                                                     | `profile.jl:43`                                                                                                        |
| 77.2% |  24,751 | `[unknown function]`                                               | `<unknown>`                                                                                                            |
| 77.2% |  24,751 | `eval(::Module, ::Any)`                                            | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:489`                       |
| 77.2% |  24,751 | `include_string(::typeof(identity), ::Module, ::String, ::String)` | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/loading.jl:2989`                   |
| 77.2% |  24,751 | `_include(::Function, ::Module, ::String)`                         | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/loading.jl:3083`                   |
| 77.2% |  24,751 | `include(::Module, ::String)`                                      | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base.jl:309`                       |
| 77.2% |  24,751 | `exec_options(::Base.JLOptions)`                                   | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/client.jl:234`                     |
| 77.2% |  24,751 | `_start()`                                                         | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/client.jl:570`                     |
| 77.2% |  24,750 | `parse_workload`                                                   | `profile.jl:18`                                                                                                        |
| 71.6% |  22,930 | `#write#58`                                                        | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:40`               |
| 53.2% |  17,042 | `#write#79`                                                        | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`              |
| 53.2% |  17,042 | `write`                                                            | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:147`              |
| 53.1% |  17,015 | `#write#81`                                                        | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`               |
| 22.8% |   7,292 | `(anonymous)`                                                      | `<unknown>`                                                                                                            |
| 21.4% |   6,857 | `_symbol`                                                          | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`                |
| 21.4% |   6,857 | `getvalue`                                                         | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:187`              |
| 18.4% |   5,882 | `foldl_impl`                                                       | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:46`                      |
| 18.4% |   5,882 | `mapfoldl_impl`                                                    | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:42`                      |
| 18.4% |   5,882 | `#mapfoldl#271`                                                    | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:173`                     |

#### Categories

##### Third-party

|     % | Samples | Function                                                                                                                                                                                                                         | Location                                                                                                  |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| 71.6% |  22,930 | `#write#58`                                                                                                                                                                                                                      | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:40`  |
| 53.2% |  17,042 | `#write#79`                                                                                                                                                                                                                      | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157` |
| 53.2% |  17,042 | `write`                                                                                                                                                                                                                          | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:147` |
| 21.4% |   6,857 | `_symbol`                                                                                                                                                                                                                        | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`   |
| 21.4% |   6,857 | `getvalue`                                                                                                                                                                                                                       | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:187` |
| 18.4% |   5,882 | `defaultminimum`                                                                                                                                                                                                                 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:12`  |
| 16.1% |   5,155 | `getvalue`                                                                                                                                                                                                                       | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:127` |
| 15.9% |   5,102 | `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})`                                                                                               | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40`  |
| 12.0% |   3,852 | `iterate`                                                                                                                                                                                                                        | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:81`  |
| 10.7% |   3,425 | `getvalue`                                                                                                                                                                                                                       | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:214` |
| 10.3% |   3,288 | `iterate`                                                                                                                                                                                                                        | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:78`  |
|  5.6% |   1,799 | `getindex`                                                                                                                                                                                                                       | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:163` |
|  4.3% |   1,373 | `var\"#read#6\"(::Bool, ::Nothing, ::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.read), ::String)`                                                                                                       | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:30`   |
|  4.3% |   1,373 | `read`                                                                                                                                                                                                                           | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:30`   |
|  4.1% |   1,304 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:218`  |
|  4.1% |   1,304 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)`                                             | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:218`  |
|  4.1% |   1,304 | `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)`                                                                     | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:87`   |
|  4.1% |   1,304 | `read!`                                                                                                                                                                                                                          | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:87`   |
|  4.1% |   1,301 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)`                                                      | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:87`   |
|  4.1% |   1,298 | `var\"#read!#9\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Array}, ::Bool)`  | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:312`  |

##### Standard library

|     % | Samples | Function                                                           | Location                                                                                                               |
| ----: | ------: | ------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------- |
| 77.2% |  24,751 | `macro expansion`                                                  | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/stdlib/v1.13/Profile/src/Profile.jl:82` |
| 77.2% |  24,751 | `eval(::Module, ::Any)`                                            | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:489`                       |
| 77.2% |  24,751 | `include_string(::typeof(identity), ::Module, ::String, ::String)` | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/loading.jl:2989`                   |
| 77.2% |  24,751 | `_include(::Function, ::Module, ::String)`                         | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/loading.jl:3083`                   |
| 77.2% |  24,751 | `include(::Module, ::String)`                                      | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base.jl:309`                       |
| 77.2% |  24,751 | `exec_options(::Base.JLOptions)`                                   | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/client.jl:234`                     |
| 77.2% |  24,751 | `_start()`                                                         | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/client.jl:570`                     |
| 53.1% |  17,015 | `#write#81`                                                        | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`               |
| 18.4% |   5,882 | `foldl_impl`                                                       | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:46`                      |
| 18.4% |   5,882 | `mapfoldl_impl`                                                    | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:42`                      |
| 18.4% |   5,882 | `#mapfoldl#271`                                                    | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:173`                     |
| 18.4% |   5,882 | `mapfoldl`                                                         | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:173`                     |
| 18.4% |   5,882 | `#mapreduce#275`                                                   | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:306`                     |
| 18.4% |   5,882 | `mapreduce`                                                        | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:306`                     |
| 18.4% |   5,882 | `#sum#278`                                                         | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:535`                     |
| 18.4% |   5,882 | `sum`                                                              | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:535`                     |
| 18.4% |   5,882 | `#sum#279`                                                         | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:564`                     |
| 18.4% |   5,882 | `sum`                                                              | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:564`                     |
| 18.4% |   5,882 | `_foldl_impl`                                                      | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:56`                      |
| 18.3% |   5,874 | `_foldl_impl`                                                      | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`                      |

##### Unknown

|     % | Samples | Function      | Location    |
| ----: | ------: | ------------- | ----------- |
| 22.8% |   7,292 | `(anonymous)` | `<unknown>` |

##### Native

|     % | Samples | Function                                                                                                                                                                                | Location    |
| ----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 77.2% |  24,751 | `[unknown function]`                                                                                                                                                                    | `<unknown>` |
| 18.3% |   5,877 | `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})`                                                                                                            | `<unknown>` |
| 18.3% |   5,857 | `#defaultminimum##0`                                                                                                                                                                    | `<unknown>` |
| <0.1% |       5 | `(::JSON3.var\"#defaultminimum##0#defaultminimum##1\"{JSON3.Array{Int64, Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}}})(::Int64)` | `<unknown>` |

#### Callees

Callees ranked by contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `macro expansion` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/stdlib/v1.13/Profile/src/Profile.jl:82`)

|      % | Samples | Callee           | Location        |
| -----: | ------: | ---------------- | --------------- |
| 100.0% |  24,750 | `parse_workload` | `profile.jl:18` |

##### `capture_wall` (`profile.jl:43`)

|      % | Samples | Callee            | Location                                                                                                               |
| -----: | ------: | ----------------- | ---------------------------------------------------------------------------------------------------------------------- |
| 100.0% |  24,751 | `macro expansion` | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/stdlib/v1.13/Profile/src/Profile.jl:82` |

##### `[unknown function]` (`<unknown>`)

|      % | Samples | Callee         | Location                                                                                                  |
| -----: | ------: | -------------- | --------------------------------------------------------------------------------------------------------- |
| 100.0% |  24,751 | `capture_wall` | `profile.jl:43`                                                                                           |
|  92.6% |  22,930 | `#write#58`    | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:40`  |
|  68.7% |  17,015 | `#write#81`    | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`  |
|  65.7% |  16,258 | `#write#79`    | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157` |
|  23.7% |   5,869 | `sum`          | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:535`        |

##### `eval(::Module, ::Any)` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:489`)

|      % | Samples | Callee               | Location    |
| -----: | ------: | -------------------- | ----------- |
| 100.0% |  24,751 | `[unknown function]` | `<unknown>` |

##### `include_string(::typeof(identity), ::Module, ::String, ::String)` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/loading.jl:2989`)

|      % | Samples | Callee                  | Location                                                                                         |
| -----: | ------: | ----------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% |  24,751 | `eval(::Module, ::Any)` | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:489` |

##### `_include(::Function, ::Module, ::String)` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/loading.jl:3083`)

|      % | Samples | Callee                                                             | Location                                                                                             |
| -----: | ------: | ------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------- |
| 100.0% |  24,751 | `include_string(::typeof(identity), ::Module, ::String, ::String)` | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/loading.jl:2989` |

##### `include(::Module, ::String)` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base.jl:309`)

|      % | Samples | Callee                                     | Location                                                                                             |
| -----: | ------: | ------------------------------------------ | ---------------------------------------------------------------------------------------------------- |
| 100.0% |  24,751 | `_include(::Function, ::Module, ::String)` | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/loading.jl:3083` |

##### `exec_options(::Base.JLOptions)` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/client.jl:234`)

|      % | Samples | Callee                        | Location                                                                                         |
| -----: | ------: | ----------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% |  24,751 | `include(::Module, ::String)` | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base.jl:309` |

##### `_start()` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/client.jl:570`)

|      % | Samples | Callee                           | Location                                                                                           |
| -----: | ------: | -------------------------------- | -------------------------------------------------------------------------------------------------- |
| 100.0% |  24,751 | `exec_options(::Base.JLOptions)` | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/client.jl:234` |

##### `parse_workload` (`profile.jl:18`)

|     % | Samples | Callee               | Location                                                                                                   |
| ----: | ------: | -------------------- | ---------------------------------------------------------------------------------------------------------- |
| 92.7% |  22,931 | `[unknown function]` | `<unknown>`                                                                                                |
|  5.5% |   1,373 | `read`               | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:30`    |
|  1.5% |     377 | `length(::String)`   | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:540` |

##### `#write#58` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:40`)

|     % | Samples | Callee                    | Location                                                                                                  |
| ----: | ------: | ------------------------- | --------------------------------------------------------------------------------------------------------- |
| 74.3% |  17,042 | `write`                   | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:147` |
| 25.7% |   5,882 | `defaultminimum`          | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:12`  |
| <0.1% |       3 | `String(::Vector{UInt8})` | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:66` |

##### `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`)

|     % | Samples | Callee                                                                         | Location                                                                                                  |
| ----: | ------: | ------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------- |
| 99.9% |  17,029 | `[unknown function]`                                                           | `<unknown>`                                                                                               |
| 12.1% |   2,067 | `indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64, ::Int64)`      | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`         |
| 10.9% |   1,862 | `iterate`                                                                      | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:81`  |
| 10.1% |   1,714 | `iterate`                                                                      | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:78`  |
|  7.6% |   1,296 | `write(::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:340` |

##### `write` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:147`)

|      % | Samples | Callee      | Location                                                                                                  |
| -----: | ------: | ----------- | --------------------------------------------------------------------------------------------------------- |
| 100.0% |  17,041 | `#write#79` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157` |

##### `#write#81` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`)

|     % | Samples | Callee               | Location                                                                                                      |
| ----: | ------: | -------------------- | ------------------------------------------------------------------------------------------------------------- |
| 95.6% |  16,270 | `[unknown function]` | `<unknown>`                                                                                                   |
|  3.3% |     559 | `isassigned`         | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:1641` |
|  2.5% |     420 | `getindex`           | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:163`     |
| <0.1% |       8 | `indexed_iterate`    | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`             |
| <0.1% |       3 | `iterate`            | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/range.jl`                 |

##### `_symbol` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`)

|     % | Samples | Callee                                                                                                                             | Location                                                                                                 |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| <0.1% |       1 | `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40` |

##### `getvalue` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:187`)

|      % | Samples | Callee    | Location                                                                                                |
| -----: | ------: | --------- | ------------------------------------------------------------------------------------------------------- |
| 100.0% |   6,857 | `_symbol` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:1` |

##### `foldl_impl` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:46`)

|      % | Samples | Callee                                                                                                                                                    | Location                                                                                                  |
| -----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| 100.0% |   5,882 | `_foldl_impl`                                                                                                                                             | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:56`         |
|  99.9% |   5,874 | `_foldl_impl`                                                                                                                                             | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`         |
|  <0.1% |       1 | `getvalue(::Type{JSON3.Array}, ::Base.CodeUnits{UInt8, String}, ::SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}, ::Int64, ::UInt64)` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:131` |
|  <0.1% |       1 | `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})`                                                                              | `<unknown>`                                                                                               |

##### `mapfoldl_impl` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:42`)

|      % | Samples | Callee       | Location                                                                                          |
| -----: | ------: | ------------ | ------------------------------------------------------------------------------------------------- |
| 100.0% |   5,882 | `foldl_impl` | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:46` |

##### `#mapfoldl#271` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:173`)

|      % | Samples | Callee          | Location                                                                                          |
| -----: | ------: | --------------- | ------------------------------------------------------------------------------------------------- |
| 100.0% |   5,882 | `mapfoldl_impl` | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:42` |

##### `defaultminimum` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:12`)

|      % | Samples | Callee                                                                                                                       | Location                                                                                                |
| -----: | ------: | ---------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| 100.0% |   5,882 | `sum`                                                                                                                        | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:564`      |
|   0.9% |      50 | `isempty(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:1127` |

##### `mapfoldl` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:173`)

|      % | Samples | Callee          | Location                                                                                           |
| -----: | ------: | --------------- | -------------------------------------------------------------------------------------------------- |
| 100.0% |   5,882 | `#mapfoldl#271` | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:173` |

##### `#mapreduce#275` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:306`)

|      % | Samples | Callee     | Location                                                                                           |
| -----: | ------: | ---------- | -------------------------------------------------------------------------------------------------- |
| 100.0% |   5,882 | `mapfoldl` | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:173` |

##### `mapreduce` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:306`)

|      % | Samples | Callee           | Location                                                                                           |
| -----: | ------: | ---------------- | -------------------------------------------------------------------------------------------------- |
| 100.0% |   5,882 | `#mapreduce#275` | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:306` |

##### `#sum#278` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:535`)

|      % | Samples | Callee      | Location                                                                                           |
| -----: | ------: | ----------- | -------------------------------------------------------------------------------------------------- |
| 100.0% |   5,882 | `mapreduce` | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:306` |

##### `sum` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:535`)

|      % | Samples | Callee     | Location                                                                                           |
| -----: | ------: | ---------- | -------------------------------------------------------------------------------------------------- |
| 100.0% |   5,882 | `#sum#278` | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:535` |

##### `#sum#279` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:564`)

|      % | Samples | Callee | Location                                                                                           |
| -----: | ------: | ------ | -------------------------------------------------------------------------------------------------- |
| 100.0% |   5,882 | `sum`  | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:535` |

##### `sum` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:564`)

|      % | Samples | Callee     | Location                                                                                           |
| -----: | ------: | ---------- | -------------------------------------------------------------------------------------------------- |
| 100.0% |   5,882 | `#sum#279` | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:564` |

##### `_foldl_impl` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:56`)

|     % | Samples | Callee               | Location                                                                                              |
| ----: | ------: | -------------------- | ----------------------------------------------------------------------------------------------------- |
| 99.8% |   5,872 | `MappingRF`          | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98`     |
|  0.1% |       5 | `[unknown function]` | `<unknown>`                                                                                           |
|  0.1% |       4 | `iterate`            | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/iterators.jl:697` |

##### `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` (`<unknown>`)

|     % | Samples | Callee                                                                                                                                    | Location                                                                                                 |
| ----: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| 99.9% |   5,874 | `[unknown function]`                                                                                                                      | `<unknown>`                                                                                              |
|  0.1% |       7 | `defaultminimum`                                                                                                                          | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:6`  |
|  0.1% |       7 | `indexed_iterate`                                                                                                                         | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/pair.jl:42`          |
|  0.1% |       5 | `defaultminimum(::JSON3.Array{Int64, Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:11` |
|  0.1% |       4 | `isempty(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})`              | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:1127`  |

##### `_foldl_impl` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`)

|     % | Samples | Callee                                                                       | Location                                                                                                 |
| ----: | ------: | ---------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| 99.9% |   5,867 | `[unknown function]`                                                         | `<unknown>`                                                                                              |
| 50.4% |   2,959 | `iterate`                                                                    | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/iterators.jl:697`    |
|  6.7% |     396 | `MappingRF`                                                                  | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98`        |
|  3.4% |     198 | `iterate`                                                                    | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:75` |
|  0.3% |      15 | `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` | `<unknown>`                                                                                              |

##### `#defaultminimum##0` (`<unknown>`)

|     % | Samples | Callee           | Location                                                                                                      |
| ----: | ------: | ---------------- | ------------------------------------------------------------------------------------------------------------- |
| 89.3% |   5,228 | `defaultminimum` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:12`      |
|  8.0% |     470 | `isassigned`     | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:1641` |
|  6.0% |     350 | `getindex`       | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:163`     |
|  0.1% |       5 | `isassigned`     | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:1640` |
| <0.1% |       1 | `getindex`       | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:158`     |

##### `getvalue` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:127`)

|     % | Samples | Callee                                                                                                                             | Location                                                                                                 |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| 98.9% |   5,100 | `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40` |
|  1.0% |      50 | `setindex!(::Dict{Symbol, Int64}, ::Int64, ::Symbol)`                                                                              | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:356`         |

##### `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40`)

|     % | Samples | Callee                                                     | Location                                                                                                  |
| ----: | ------: | ---------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| 70.4% |   3,593 | `getvalue`                                                 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:187` |
| 25.1% |   1,279 | `setindex!(::Dict{Symbol, Int64}, ::Int64, ::Symbol)`      | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:356`          |
|  1.8% |      90 | `+`                                                        | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:87`            |
|  1.1% |      58 | `ht_keyindex2_shorthash!(::Dict{Symbol, Int64}, ::Symbol)` | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:267`          |
|  0.9% |      47 | `getindex`                                                 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/subarray.jl:334`      |

##### `iterate` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:81`)

|     % | Samples | Callee     | Location                                                                                                  |
| ----: | ------: | ---------- | --------------------------------------------------------------------------------------------------------- |
| 88.9% |   3,425 | `getvalue` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:214` |
|  5.1% |     196 | `getvalue` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:218` |
|  2.3% |      87 | `getvalue` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:216` |
|  2.0% |      76 | `getvalue` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:215` |
|  0.9% |      33 | `getvalue` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl`     |

##### `getvalue` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:214`)

|     % | Samples | Callee     | Location                                                                                                  |
| ----: | ------: | ---------- | --------------------------------------------------------------------------------------------------------- |
| 98.5% |   3,374 | `getvalue` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:127` |
|  1.5% |      51 | `getvalue` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:126` |

##### `iterate` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:78`)

|     % | Samples | Callee     | Location                                                                                                  |
| ----: | ------: | ---------- | --------------------------------------------------------------------------------------------------------- |
| 99.2% |   3,261 | `getvalue` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:187` |
|  0.8% |      27 | `getvalue` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl`     |

##### `getindex` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:163`)

|     % | Samples | Callee     | Location                                                                                                  |
| ----: | ------: | ---------- | --------------------------------------------------------------------------------------------------------- |
| 99.0% |   1,781 | `getvalue` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:127` |
|  1.0% |      18 | `getvalue` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:126` |

##### `var\"#read#6\"(::Bool, ::Nothing, ::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.read), ::String)` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:30`)

|     % | Samples | Callee                                                                         | Location                                                                                                 |
| ----: | ------: | ------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------- |
| 95.0% |   1,304 | `read!`                                                                        | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:87`  |
|  4.7% |      65 | `Array`                                                                        | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:648`         |
|  0.2% |       3 | `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, Vector{UInt64}})` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40` |

##### `read` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:30`)

|      % | Samples | Callee                                                                                                                     | Location                                                                                                |
| -----: | ------: | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| 100.0% |   1,373 | `var\"#read#6\"(::Bool, ::Nothing, ::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.read), ::String)` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:30` |

##### `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:218`)

|     % | Samples | Callee                                                                                                                                                                      | Location                                                                                                 |
| ----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| 99.8% |   1,301 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:87`  |
| 14.6% |     190 | `getbyte`                                                                                                                                                                   | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:8`  |
|  7.7% |     101 | `macro expansion`                                                                                                                                                           | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:29` |
|  4.8% |      62 | `macro expansion`                                                                                                                                                           | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:24` |
|  3.5% |      45 | `string`                                                                                                                                                                    | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:88` |

##### `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:218`)

|      % | Samples | Callee                                                                                                                                                                                                                           | Location                                                                                                 |
| -----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| 100.0% |   1,304 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:218` |
|   0.5% |       6 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)`                                                      | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:87`  |

##### `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:87`)

|      % | Samples | Callee                                                                                                                                                                               | Location                                                                                                         |
| -----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------- |
| 100.0% |   1,304 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:218`         |
|  99.5% |   1,298 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Array}, ::Bool)`  | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:312`         |
|  24.0% |     313 | `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{String})`                                                                       | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:142`         |
|   2.2% |      29 | `typeparser(::Type{Float64}, ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Int16, ::Parsers.Options)`                                                                | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/Parsers/05lwR/src/components.jl:392` |
|   1.5% |      20 | `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.False})`                                                                  | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:189`         |

##### `read!` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:87`)

|      % | Samples | Callee                                                                                                                                                       | Location                                                                                                |
| -----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------- |
| 100.0% |   1,304 | `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:87` |

##### `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:87`)

|      % | Samples | Callee                                                                                                                                                       | Location                                                                                                         |
| -----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------- |
| 100.0% |   1,301 | `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:87`          |
|   0.4% |       5 | `typeparser(::Type{Float64}, ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Int16, ::Parsers.Options)`                                        | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/Parsers/05lwR/src/components.jl:392` |
|   0.4% |       5 | `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.False})`                                          | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:189`         |
|   0.3% |       4 | `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Nothing})`                                              | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:204`         |
|   0.2% |       2 | `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{String})`                                               | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:142`         |

##### `var\"#read!#9\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Array}, ::Bool)` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:312`)

|      % | Samples | Callee                                                                                                                                                                      | Location                                                                                                 |
| -----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| 100.0% |   1,298 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:87`  |
|   0.5% |       7 | `macro expansion`                                                                                                                                                           | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:29` |
|   0.2% |       3 | `macro expansion`                                                                                                                                                           | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:24` |
|   0.2% |       2 | `getindex`                                                                                                                                                                  | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:975`   |
|   0.2% |       2 | `macro expansion`                                                                                                                                                           | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:23` |

##### `(::JSON3.var\"#defaultminimum##0#defaultminimum##1\"{JSON3.Array{Int64, Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}}})(::Int64)` (`<unknown>`)

|     % | Samples | Callee       | Location                                                                                                      |
| ----: | ------: | ------------ | ------------------------------------------------------------------------------------------------------------- |
| 60.0% |       3 | `isassigned` | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:1640` |
| 40.0% |       2 | `isassigned` | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:1632` |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame.

Common call stack: `#write#58` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:40`) ← `[unknown function]` ← `parse_workload` (`profile.jl:18`) ← `macro expansion` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/stdlib/v1.13/Profile/src/Profile.jl:82`) ← `capture_wall` (`profile.jl:43`) ← `[unknown function]` ← `eval(::Module, ::Any)` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:489`) ← `include_string(::typeof(identity), ::Module, ::String, ::String)` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/loading.jl:2989`) ← `_include(::Function, ::Module, ::String)` (3083) ← `include(::Module, ::String)` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base.jl:309`) ← `exec_options(::Base.JLOptions)` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/client.jl:234`) ← `_start()` (570)

|    % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ---: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 9.3% |   2,995 | `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 5.3% |   1,684 | `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 3.7% |   1,199 | `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 3.1% |     995 | `indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64, ::Int64)` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`) ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 2.6% |     828 | `_symbol` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`) ← `getvalue` (187) ← `iterate` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:78`) ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 2.2% |     720 | `_symbol` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`) ← `getvalue` (187) ← `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40`) ← `getvalue` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:127`) ← `getvalue` (214) ← `iterate` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:81`) ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 2.2% |     703 | `_symbol` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`) ← `getvalue` (187) ← `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40`) ← `getvalue` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:127`) ← `getvalue` (214) ← `iterate` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:81`) ← `iterate` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/iterators.jl:697`) ← `_foldl_impl` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:12`) ← `#defaultminimum##0` ← `[unknown function]` ← `_foldl_impl` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `[unknown function]` ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `MappingRF` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98`) ← `_foldl_impl` (56) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:12`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 1.9% |     624 | `_symbol` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`) ← `getvalue` (187) ← `iterate` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:78`) ← `iterate` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/iterators.jl:697`) ← `_foldl_impl` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `[unknown function]` ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `[unknown function]` ← `_foldl_impl` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:12`) ← `#defaultminimum##0` ← `[unknown function]` ← `_foldl_impl` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `[unknown function]` ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `MappingRF` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98`) ← `_foldl_impl` (56) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:12`)                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 1.6% |     520 | `indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64, ::Int64)` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`) ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 1.5% |     477 | `GenericMemory` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:588`) ← `Array` (648) ← `Array` (661) ← `zeros` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:626`) ← `zeros` (622) ← `realloc!(::Vector{UInt8}, ::Int64, ::Int64)` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:51`) ← `var\"#write#98\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` (340) ← `write(::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` (340) ← `#write#79` (157) ← `[unknown function]` ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 1.4% |     448 | `_symbol` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`) ← `getvalue` (187) ← `iterate` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:78`) ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 1.3% |     414 | `indexed_iterate` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`) ← `indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64)` (163) ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 1.2% |     391 | `_symbol` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`) ← `getvalue` (187) ← `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40`) ← `getvalue` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:127`) ← `getvalue` (214) ← `iterate` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:81`) ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 1.2% |     383 | `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `[unknown function]` ← `_foldl_impl` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `[unknown function]` ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `[unknown function]` ← `_foldl_impl` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:12`) ← `#defaultminimum##0` ← `[unknown function]` ← `_foldl_impl` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `[unknown function]` ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `MappingRF` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98`) ← `_foldl_impl` (56) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:12`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 1.1% |     351 | `indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64, ::Int64)` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`) ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 1.1% |     337 | `_symbol` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`) ← `getvalue` (187) ← `iterate` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:78`) ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 1.0% |     334 | `_symbol` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`) ← `getvalue` (187) ← `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40`) ← `getvalue` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:127`) ← `getvalue` (214) ← `iterate` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:81`) ← `iterate` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/iterators.jl:697`) ← `_foldl_impl` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `[unknown function]` ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `[unknown function]` ← `_foldl_impl` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:12`) ← `#defaultminimum##0` ← `[unknown function]` ← `_foldl_impl` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `[unknown function]` ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `MappingRF` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98`) ← `_foldl_impl` (56) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:12`)                                                           |
| 1.0% |     323 | `_symbol` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`) ← `getvalue` (187) ← `iterate` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:78`) ← `iterate` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/iterators.jl:697`) ← `_foldl_impl` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `[unknown function]` ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `[unknown function]` ← `_foldl_impl` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `[unknown function]` ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `[unknown function]` ← `_foldl_impl` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:12`) ← `#defaultminimum##0` ← `[unknown function]` ← `_foldl_impl` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `[unknown function]` ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `MappingRF` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98`) ← `_foldl_impl` (56) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:12`) |
| 0.9% |     284 | `_symbol` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`) ← `getvalue` (187) ← `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40`) ← `getvalue` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:127`) ← `getindex` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:163`) ← `isassigned` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:1641`) ← `#write#81` ← `[unknown function]` ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 0.9% |     279 | `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |

# Sampling profile

Collected 33,375 samples.

| Category         |     % | Samples |
| ---------------- | ----: | ------: |
| Third-party      | 45.8% |  15,297 |
| Standard library | 26.7% |   8,914 |
| Unknown          | 23.4% |   7,826 |
| Native           |  3.9% |   1,290 |
| Ours             |  0.1% |      48 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|     % | Samples | Function                                                                                                                                                                                                                         | Location                                                                                                   |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| 23.4% |   7,826 | `(anonymous)`                                                                                                                                                                                                                    | `<unknown>`                                                                                                |
| 21.1% |   7,037 | `#write#79`                                                                                                                                                                                                                      | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`  |
| 20.8% |   6,950 | `_symbol`                                                                                                                                                                                                                        | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:1`    |
|  6.4% |   2,123 | `indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64, ::Int64)`                                                                                                                                                        | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`          |
|  4.3% |   1,435 | `indexed_iterate`                                                                                                                                                                                                                | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`          |
|  3.9% |   1,307 | `GenericMemory`                                                                                                                                                                                                                  | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:588`           |
|  3.1% |   1,037 | `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})`                                                                                                                                                     | `<unknown>`                                                                                                |
|  1.7% |     571 | `ht_keyindex2_shorthash!(::Dict{Symbol, Int64}, ::Symbol)`                                                                                                                                                                       | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:267`           |
|  1.6% |     532 | `unsafe_load`                                                                                                                                                                                                                    | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/pointer.jl:151`        |
|  0.9% |     315 | `+`                                                                                                                                                                                                                              | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:87`             |
|  0.9% |     288 | `_foldl_impl`                                                                                                                                                                                                                    | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`          |
|  0.8% |     281 | `BottomRF`                                                                                                                                                                                                                       | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:84`          |
|  0.8% |     251 | `_setindex!`                                                                                                                                                                                                                     | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:1025`         |
|  0.7% |     247 | `[unknown function]`                                                                                                                                                                                                             | `<unknown>`                                                                                                |
|  0.6% |     192 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:218`   |
|  0.6% |     184 | `unsafe_string`                                                                                                                                                                                                                  | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:130` |
|  0.6% |     184 | `getindex`                                                                                                                                                                                                                       | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:975`     |
|  0.4% |     149 | `checkbounds`                                                                                                                                                                                                                    | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/basic.jl:212`  |
|  0.4% |     132 | `#write#81`                                                                                                                                                                                                                      | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:60`   |
|  0.4% |     120 | `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{String})`                                                                                                                   | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:142`   |

#### Categories

##### Third-party

|     % | Samples | Function                                                                                                                                                                                                                         | Location                                                                                                   |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| 21.1% |   7,037 | `#write#79`                                                                                                                                                                                                                      | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`  |
| 20.8% |   6,950 | `_symbol`                                                                                                                                                                                                                        | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:1`    |
|  0.6% |     192 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:218`   |
|  0.4% |     132 | `#write#81`                                                                                                                                                                                                                      | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:60`   |
|  0.4% |     120 | `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{String})`                                                                                                                   | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:142`   |
|  0.3% |     110 | `iterate`                                                                                                                                                                                                                        | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:75`   |
|  0.3% |     106 | `getvalue`                                                                                                                                                                                                                       | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:215`  |
|  0.2% |      82 | `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)`                                                                     | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:87`    |
|  0.2% |      80 | `var\"#write#98\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)`                                                          | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:340`  |
|  0.1% |      36 | `write(::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)`                                                                                                                                                   | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:340`  |
|  0.1% |      35 | `write(::StructTypes.BoolType, ::Vector{UInt8}, ::Int64, ::Int64, ::Bool)`                                                                                                                                                       | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:209`  |
|  0.1% |      34 | `macro expansion`                                                                                                                                                                                                                | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:23`   |
|  0.1% |      34 | `iterate`                                                                                                                                                                                                                        | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl`      |
|  0.1% |      31 | `getvalue`                                                                                                                                                                                                                       | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl`      |
|  0.1% |      30 | `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})`                                                                                               | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40`   |
|  0.1% |      27 | `macro expansion`                                                                                                                                                                                                                | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:14`   |
|  0.1% |      25 | `var\"#write#86\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.NumberType, ::Vector{UInt8}, ::Int64, ::Int64, ::Int64)`                                                           | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:224`  |
|  0.1% |      24 | `var\"#write#84\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.BoolType, ::Vector{UInt8}, ::Int64, ::Int64, ::Bool)`                                                              | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:209`  |
|  0.1% |      23 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)`                                                      | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:87`    |
|  0.1% |      23 | `unescape(::JSON3.PointerString)`                                                                                                                                                                                                | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/strings.jl:48` |

##### Standard library

|    % | Samples | Function                                                                  | Location                                                                                                   |
| ---: | ------: | ------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| 6.4% |   2,123 | `indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64, ::Int64)` | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`          |
| 4.3% |   1,435 | `indexed_iterate`                                                         | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`          |
| 3.9% |   1,307 | `GenericMemory`                                                           | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:588`           |
| 1.7% |     571 | `ht_keyindex2_shorthash!(::Dict{Symbol, Int64}, ::Symbol)`                | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:267`           |
| 1.6% |     532 | `unsafe_load`                                                             | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/pointer.jl:151`        |
| 0.9% |     315 | `+`                                                                       | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:87`             |
| 0.9% |     288 | `_foldl_impl`                                                             | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`          |
| 0.8% |     281 | `BottomRF`                                                                | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:84`          |
| 0.8% |     251 | `_setindex!`                                                              | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:1025`         |
| 0.6% |     184 | `unsafe_string`                                                           | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:130` |
| 0.6% |     184 | `getindex`                                                                | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:975`     |
| 0.4% |     149 | `checkbounds`                                                             | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/basic.jl:212`  |
| 0.3% |     107 | `length_continued`                                                        | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/pointer.jl`            |
| 0.3% |      96 | `unsafe_string`                                                           | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:126` |
| 0.3% |      89 | `\|`                                                                      | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:418`            |
| 0.3% |      85 | `==`                                                                      | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/promotion.jl:641`      |
| 0.3% |      84 | `getproperty`                                                             | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base_compiler.jl:57`   |
| 0.2% |      69 | `&`                                                                       | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:393`            |
| 0.2% |      67 | `#write#81`                                                               | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`   |
| 0.2% |      62 | `setindex!(::Dict{Symbol, Int64}, ::Int64, ::Symbol)`                     | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:356`           |

##### Unknown

|     % | Samples | Function      | Location    |
| ----: | ------: | ------------- | ----------- |
| 23.4% |   7,826 | `(anonymous)` | `<unknown>` |

##### Native

|     % | Samples | Function                                                                                                                                                                                | Location    |
| ----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
|  3.1% |   1,037 | `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})`                                                                                                            | `<unknown>` |
|  0.7% |     247 | `[unknown function]`                                                                                                                                                                    | `<unknown>` |
| <0.1% |       5 | `#defaultminimum##0`                                                                                                                                                                    | `<unknown>` |
| <0.1% |       1 | `(::JSON3.var\"#defaultminimum##0#defaultminimum##1\"{JSON3.Array{Int64, Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}}})(::Int64)` | `<unknown>` |

#### Lines

Lines ranked by contribution to each function's self samples.

##### `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`)

|     % | Samples | Location                                                                                                  |
| ----: | ------: | --------------------------------------------------------------------------------------------------------- |
| 62.6% |   4,404 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157` |
| 20.2% |   1,424 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:60`  |
|  7.3% |     517 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:73`  |
|  4.0% |     279 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:155` |
|  3.7% |     260 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:72`  |

##### `_symbol` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:1`)

|      % | Samples | Location                                                                                                |
| -----: | ------: | ------------------------------------------------------------------------------------------------------- |
| 100.0% |   6,950 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:1` |

##### `indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64, ::Int64)` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`)

|      % | Samples | Location                                                                                          |
| -----: | ------: | ------------------------------------------------------------------------------------------------- |
| 100.0% |   2,123 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163` |

##### `indexed_iterate` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`)

|      % | Samples | Location                                                                                          |
| -----: | ------: | ------------------------------------------------------------------------------------------------- |
| 100.0% |   1,435 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163` |

##### `GenericMemory` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:588`)

|      % | Samples | Location                                                                                         |
| -----: | ------: | ------------------------------------------------------------------------------------------------ |
| 100.0% |   1,307 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:588` |

##### `ht_keyindex2_shorthash!(::Dict{Symbol, Int64}, ::Symbol)` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:267`)

|     % | Samples | Location                                                                                         |
| ----: | ------: | ------------------------------------------------------------------------------------------------ |
| 59.5% |     340 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:291` |
| 18.2% |     104 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:282` |
|  4.4% |      25 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:281` |
|  2.3% |      13 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:303` |
|  1.9% |      11 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:267` |

##### `unsafe_load` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/pointer.jl:151`)

|      % | Samples | Location                                                                                            |
| -----: | ------: | --------------------------------------------------------------------------------------------------- |
| 100.0% |     532 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/pointer.jl:151` |

##### `+` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:87`)

|      % | Samples | Location                                                                                       |
| -----: | ------: | ---------------------------------------------------------------------------------------------- |
| 100.0% |     315 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:87` |

##### `_foldl_impl` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`)

|     % | Samples | Location                                                                                          |
| ----: | ------: | ------------------------------------------------------------------------------------------------- |
| 88.5% |     255 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60` |
|  1.4% |       4 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:56` |
|  0.7% |       2 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:51` |

##### `BottomRF` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:84`)

|      % | Samples | Location                                                                                          |
| -----: | ------: | ------------------------------------------------------------------------------------------------- |
| 100.0% |     281 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:84` |

##### `_setindex!` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:1025`)

|      % | Samples | Location                                                                                           |
| -----: | ------: | -------------------------------------------------------------------------------------------------- |
| 100.0% |     251 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:1025` |

##### `[unknown function]` (`<unknown>`)

|     % | Samples | Location |
| ----: | ------: | -------- |
| 68.4% |     169 | 147      |
| 26.7% |      66 | 98       |
|  2.0% |       5 | 37       |
|  1.2% |       3 | 181      |
|  0.4% |       1 | 405      |

##### `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:218`)

|     % | Samples | Location                                                                                                 |
| ----: | ------: | -------------------------------------------------------------------------------------------------------- |
| 69.8% |     134 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:248` |
|  6.8% |      13 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:247` |
|  6.3% |      12 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:298` |
|  4.7% |       9 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:284` |
|  4.2% |       8 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:268` |

##### `unsafe_string` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:130`)

|      % | Samples | Location                                                                                                   |
| -----: | ------: | ---------------------------------------------------------------------------------------------------------- |
| 100.0% |     184 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:130` |

##### `getindex` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:975`)

|      % | Samples | Location                                                                                               |
| -----: | ------: | ------------------------------------------------------------------------------------------------------ |
| 100.0% |     184 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:975` |

##### `checkbounds` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/basic.jl:212`)

|      % | Samples | Location                                                                                                  |
| -----: | ------: | --------------------------------------------------------------------------------------------------------- |
| 100.0% |     149 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/basic.jl:212` |

##### `#write#81` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:60`)

|     % | Samples | Location                                                                                                  |
| ----: | ------: | --------------------------------------------------------------------------------------------------------- |
| 53.0% |      70 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:200` |
| 28.0% |      37 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:60`  |
|  9.1% |      12 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:73`  |
|  5.3% |       7 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:72`  |
|  3.8% |       5 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:181` |

##### `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{String})` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:142`)

|     % | Samples | Location                                                                                                 |
| ----: | ------: | -------------------------------------------------------------------------------------------------------- |
| 57.5% |      69 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:155` |
|  4.2% |       5 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:142` |
|  1.7% |       2 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:167` |
|  0.8% |       1 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:149` |

##### `iterate` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:75`)

|      % | Samples | Location                                                                                                 |
| -----: | ------: | -------------------------------------------------------------------------------------------------------- |
| 100.0% |     110 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:75` |

##### `getvalue` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:215`)

|      % | Samples | Location                                                                                                  |
| -----: | ------: | --------------------------------------------------------------------------------------------------------- |
| 100.0% |     106 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:215` |

##### `unsafe_string` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:126`)

|      % | Samples | Location                                                                                                   |
| -----: | ------: | ---------------------------------------------------------------------------------------------------------- |
| 100.0% |      96 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:126` |

##### `|` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:418`)

|      % | Samples | Location                                                                                        |
| -----: | ------: | ----------------------------------------------------------------------------------------------- |
| 100.0% |      89 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:418` |

##### `==` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/promotion.jl:641`)

|      % | Samples | Location                                                                                              |
| -----: | ------: | ----------------------------------------------------------------------------------------------------- |
| 100.0% |      85 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/promotion.jl:641` |

##### `getproperty` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base_compiler.jl:57`)

|      % | Samples | Location                                                                                                 |
| -----: | ------: | -------------------------------------------------------------------------------------------------------- |
| 100.0% |      84 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base_compiler.jl:57` |

##### `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:87`)

|     % | Samples | Location                                                                                                |
| ----: | ------: | ------------------------------------------------------------------------------------------------------- |
| 39.0% |      32 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:88` |
| 26.8% |      22 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:87` |
|  8.5% |       7 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:93` |
|  2.4% |       2 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:95` |
|  1.2% |       1 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:89` |

##### `var\"#write#98\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:340`)

|     % | Samples | Location                                                                                                  |
| ----: | ------: | --------------------------------------------------------------------------------------------------------- |
| 46.3% |      37 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:360` |
| 23.8% |      19 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:60`  |
| 15.0% |      12 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:340` |
| 10.0% |       8 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:351` |
|  1.3% |       1 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:346` |

##### `&` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:393`)

|      % | Samples | Location                                                                                        |
| -----: | ------: | ----------------------------------------------------------------------------------------------- |
| 100.0% |      69 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:393` |

##### `#write#81` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`)

|     % | Samples | Location                                                                                                     |
| ----: | ------: | ------------------------------------------------------------------------------------------------------------ |
| 26.9% |      18 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:60`  |
| 17.9% |      12 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:200` |
| 13.4% |       9 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:187` |
| 13.4% |       9 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:73`  |
|  7.5% |       5 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:72`  |

##### `setindex!(::Dict{Symbol, Int64}, ::Int64, ::Symbol)` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:356`)

|     % | Samples | Location                                                                                         |
| ----: | ------: | ------------------------------------------------------------------------------------------------ |
| 83.9% |      52 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:368` |
| 12.9% |       8 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:356` |
|  1.6% |       1 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:358` |
|  1.6% |       1 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:360` |

##### `write(::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:340`)

|      % | Samples | Location                                                                                                  |
| -----: | ------: | --------------------------------------------------------------------------------------------------------- |
| 100.0% |      36 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:340` |

##### `write(::StructTypes.BoolType, ::Vector{UInt8}, ::Int64, ::Int64, ::Bool)` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:209`)

|      % | Samples | Location                                                                                                  |
| -----: | ------: | --------------------------------------------------------------------------------------------------------- |
| 100.0% |      35 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:209` |

##### `macro expansion` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:23`)

|      % | Samples | Location                                                                                                 |
| -----: | ------: | -------------------------------------------------------------------------------------------------------- |
| 100.0% |      34 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:23` |

##### `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40`)

|     % | Samples | Location                                                                                                 |
| ----: | ------: | -------------------------------------------------------------------------------------------------------- |
| 36.7% |      11 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:47` |
| 20.0% |       6 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:55` |
| 10.0% |       3 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40` |
|  6.7% |       2 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:51` |

##### `macro expansion` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:14`)

|      % | Samples | Location                                                                                                 |
| -----: | ------: | -------------------------------------------------------------------------------------------------------- |
| 100.0% |      27 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:14` |

##### `var\"#write#86\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.NumberType, ::Vector{UInt8}, ::Int64, ::Int64, ::Int64)` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:224`)

|     % | Samples | Location                                                                                                  |
| ----: | ------: | --------------------------------------------------------------------------------------------------------- |
| 92.0% |      23 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:236` |
|  8.0% |       2 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:224` |

##### `var\"#write#84\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.BoolType, ::Vector{UInt8}, ::Int64, ::Int64, ::Bool)` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:209`)

|     % | Samples | Location                                                                                                  |
| ----: | ------: | --------------------------------------------------------------------------------------------------------- |
| 58.3% |      14 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:209` |
| 33.3% |       8 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:215` |
|  8.3% |       2 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:60`  |

##### `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:87`)

|      % | Samples | Location                                                                                                |
| -----: | ------: | ------------------------------------------------------------------------------------------------------- |
| 100.0% |      23 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:87` |

##### `unescape(::JSON3.PointerString)` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/strings.jl:48`)

|     % | Samples | Location                                                                                                    |
| ----: | ------: | ----------------------------------------------------------------------------------------------------------- |
| 13.0% |       3 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/strings.jl:54`  |
| 13.0% |       3 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/strings.jl:60`  |
|  8.7% |       2 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/strings.jl:116` |
|  4.3% |       1 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/strings.jl:56`  |

#### Callers

Callers ranked by contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`)

|     % | Samples | Caller               | Location                                                                                                  |
| ----: | ------: | -------------------- | --------------------------------------------------------------------------------------------------------- |
| 99.9% |   7,031 | `[unknown function]` | `<unknown>`                                                                                               |
|  0.1% |       5 | `write`              | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:147` |
| <0.1% |       1 | `#write#79`          | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157` |

##### `_symbol` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:1`)

|      % | Samples | Caller     | Location                                                                                                  |
| -----: | ------: | ---------- | --------------------------------------------------------------------------------------------------------- |
| 100.0% |   6,950 | `getvalue` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:187` |

##### `indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64, ::Int64)` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`)

|      % | Samples | Caller      | Location                                                                                                  |
| -----: | ------: | ----------- | --------------------------------------------------------------------------------------------------------- |
| 100.0% |   2,123 | `#write#79` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157` |

##### `indexed_iterate` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`)

|     % | Samples | Caller                                                           | Location                                                                                                  |
| ----: | ------: | ---------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| 66.3% |     952 | `indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64)` | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`         |
| 27.8% |     399 | `#write#79`                                                      | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157` |
|  5.3% |      76 | `indexed_iterate`                                                | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`         |
|  0.6% |       8 | `#write#81`                                                      | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`  |

##### `GenericMemory` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:588`)

|     % | Samples | Caller                                    | Location                                                                                           |
| ----: | ------: | ----------------------------------------- | -------------------------------------------------------------------------------------------------- |
| 63.9% |     835 | `Array`                                   | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:648`   |
| 35.9% |     469 | `rehash!(::Dict{Symbol, Int64}, ::Int64)` | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:138`   |
|  0.2% |       3 | `array_new_memory`                        | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:1101` |

##### `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` (`<unknown>`)

|     % | Samples | Caller               | Location                                                                                          |
| ----: | ------: | -------------------- | ------------------------------------------------------------------------------------------------- |
| 85.2% |     884 | `[unknown function]` | `<unknown>`                                                                                       |
| 12.8% |     133 | `MappingRF`          | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98` |
|  1.8% |      19 | `_foldl_impl`        | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60` |
|  0.1% |       1 | `foldl_impl`         | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:46` |

##### `ht_keyindex2_shorthash!(::Dict{Symbol, Int64}, ::Symbol)` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:267`)

|     % | Samples | Caller                                                                                                                             | Location                                                                                                 |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| 89.7% |     512 | `setindex!(::Dict{Symbol, Int64}, ::Int64, ::Symbol)`                                                                              | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:356`         |
| 10.3% |      59 | `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40` |

##### `unsafe_load` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/pointer.jl:151`)

|      % | Samples | Caller        | Location                                                                                            |
| -----: | ------: | ------------- | --------------------------------------------------------------------------------------------------- |
| 100.0% |     532 | `unsafe_load` | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/pointer.jl:151` |

##### `+` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:87`)

|     % | Samples | Caller                                                                                                                                                                                                                           | Location                                                                                                   |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| 30.5% |      96 | `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})`                                                                                               | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40`   |
| 20.0% |      63 | `macro expansion`                                                                                                                                                                                                                | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:24`   |
| 12.4% |      39 | `length_continued`                                                                                                                                                                                                               | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:559` |
|  9.8% |      31 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:218`   |
|  5.4% |      17 | `var\"#write#98\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)`                                                          | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:340`  |

##### `_foldl_impl` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`)

|     % | Samples | Caller                                                                       | Location                                                                                          |
| ----: | ------: | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| 99.7% |     287 | `foldl_impl`                                                                 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:46` |
|  0.3% |       1 | `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` | `<unknown>`                                                                                       |

##### `BottomRF` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:84`)

|     % | Samples | Caller               | Location                                                                                          |
| ----: | ------: | -------------------- | ------------------------------------------------------------------------------------------------- |
| 97.2% |     273 | `[unknown function]` | `<unknown>`                                                                                       |
|  2.8% |       8 | `MappingRF`          | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98` |

##### `_setindex!` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:1025`)

|     % | Samples | Caller               | Location                                                                                           |
| ----: | ------: | -------------------- | -------------------------------------------------------------------------------------------------- |
| 95.6% |     240 | `setindex!`          | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:1020` |
|  4.4% |      11 | `[unknown function]` | `<unknown>`                                                                                        |

##### `[unknown function]` (`<unknown>`)

|     % | Samples | Caller                                                                       | Location                                                                                                  |
| ----: | ------: | ---------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| 54.3% |     134 | `#write#79`                                                                  | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157` |
| 26.7% |      66 | `_foldl_impl`                                                                | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`         |
| 15.4% |      38 | `#write#81`                                                                  | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`  |
|  2.0% |       5 | `parse_workload`                                                             | `profile.jl:18`                                                                                           |
|  1.2% |       3 | `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` | `<unknown>`                                                                                               |

##### `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:218`)

|     % | Samples | Caller                                                                                                                                                                               | Location                                                                                                 |
| ----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------- |
| 99.0% |     190 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:218` |
|  1.0% |       2 | `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)`                         | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:87`  |

##### `unsafe_string` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:130`)

|      % | Samples | Caller   | Location                                                                                                   |
| -----: | ------: | -------- | ---------------------------------------------------------------------------------------------------------- |
| 100.0% |     184 | `String` | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:145` |

##### `getindex` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:975`)

|     % | Samples | Caller                                                                                                                                                                                                                           | Location                                                                                                  |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| 59.2% |     109 | `macro expansion`                                                                                                                                                                                                                | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:332` |
| 28.3% |      52 | `getindex`                                                                                                                                                                                                                       | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/subarray.jl:334`      |
|  8.2% |      15 | `var\"#write#98\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)`                                                          | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:340` |
|  3.3% |       6 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:218`  |
|  1.1% |       2 | `getindex`                                                                                                                                                                                                                       | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:161` |

##### `checkbounds` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/basic.jl:212`)

|      % | Samples | Caller     | Location                                                                                                   |
| -----: | ------: | ---------- | ---------------------------------------------------------------------------------------------------------- |
| 100.0% |     149 | `codeunit` | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:166` |

##### `#write#81` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:60`)

|      % | Samples | Caller               | Location    |
| -----: | ------: | -------------------- | ----------- |
| 100.0% |     132 | `[unknown function]` | `<unknown>` |

##### `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{String})` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:142`)

|     % | Samples | Caller                                                                                                                                                                      | Location                                                                                                |
| ----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| 96.7% |     116 | `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)`                | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:87` |
|  3.3% |       4 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:87` |

##### `iterate` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:75`)

|     % | Samples | Caller      | Location                                                                                                  |
| ----: | ------: | ----------- | --------------------------------------------------------------------------------------------------------- |
| 50.9% |      56 | `iterate`   | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:75`  |
| 40.0% |      44 | `#write#79` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157` |
|  9.1% |      10 | `iterate`   | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/iterators.jl:697`     |

##### `length_continued` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/pointer.jl`)

|      % | Samples | Caller             | Location                                                                                                   |
| -----: | ------: | ------------------ | ---------------------------------------------------------------------------------------------------------- |
| 100.0% |     107 | `length(::String)` | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:540` |

##### `getvalue` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:215`)

|      % | Samples | Caller    | Location                                                                                                 |
| -----: | ------: | --------- | -------------------------------------------------------------------------------------------------------- |
| 100.0% |     106 | `iterate` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:81` |

##### `unsafe_string` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:126`)

|      % | Samples | Caller     | Location                                                                                                  |
| -----: | ------: | ---------- | --------------------------------------------------------------------------------------------------------- |
| 100.0% |      96 | `getvalue` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:195` |

##### `|` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:418`)

|     % | Samples | Caller          | Location                                                                                                     |
| ----: | ------: | --------------- | ------------------------------------------------------------------------------------------------------------ |
| 92.1% |      82 | `string`        | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:88`     |
|  4.5% |       4 | `promoteeltype` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:96`     |
|  2.2% |       2 | `\|`            | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:1058`             |
|  1.1% |       1 | `parsefrac`     | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/Parsers/05lwR/src/floats.jl:496` |

##### `==` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/promotion.jl:641`)

|     % | Samples | Caller                                                                                                                                                                                                                           | Location                                                                                                 |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| 61.2% |      52 | `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{String})`                                                                                                                   | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:142` |
| 17.6% |      15 | `ht_keyindex2_shorthash!(::Dict{Symbol, Int64}, ::Symbol)`                                                                                                                                                                       | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:267`         |
| 15.3% |      13 | `isarray`                                                                                                                                                                                                                        | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:61` |
|  1.2% |       1 | `isobject`                                                                                                                                                                                                                       | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:60` |
|  1.2% |       1 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:218` |

##### `getproperty` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base_compiler.jl:57`)

|     % | Samples | Caller                                                     | Location                                                                                         |
| ----: | ------: | ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 48.8% |      41 | `_setindex!`                                               | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:331` |
| 15.5% |      13 | `_setindex!`                                               | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:327` |
| 11.9% |      10 | `_setindex!`                                               | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:328` |
|  9.5% |       8 | `ht_keyindex2_shorthash!(::Dict{Symbol, Int64}, ::Symbol)` | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:267` |
|  3.6% |       3 | `_setindex!`                                               | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:325` |

##### `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:87`)

|     % | Samples | Caller                                                                                                                                                                                                                           | Location                                                                                                 |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| 82.9% |      68 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)`                                                      | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:87`  |
| 17.1% |      14 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:218` |

##### `var\"#write#98\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:340`)

|     % | Samples | Caller                                                                         | Location                                                                                                  |
| ----: | ------: | ------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------- |
| 55.0% |      44 | `write(::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:340` |
| 45.0% |      36 | `#write#79`                                                                    | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157` |

##### `&` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:393`)

|     % | Samples | Caller                                                     | Location                                                                                                    |
| ----: | ------: | ---------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| 78.3% |      54 | `getnontypemask`                                           | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:114`   |
| 18.8% |      13 | `ht_keyindex2_shorthash!(::Dict{Symbol, Int64}, ::Symbol)` | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:267`            |
|  2.9% |       2 | `getproperty`                                              | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/Parsers/05lwR/src/utils.jl:467` |

##### `#write#81` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`)

|      % | Samples | Caller               | Location    |
| -----: | ------: | -------------------- | ----------- |
| 100.0% |      67 | `[unknown function]` | `<unknown>` |

##### `setindex!(::Dict{Symbol, Int64}, ::Int64, ::Symbol)` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:356`)

|     % | Samples | Caller                                                                                                                             | Location                                                                                                  |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| 82.3% |      51 | `getvalue`                                                                                                                         | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:127` |
| 17.7% |      11 | `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40`  |

##### `write(::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:340`)

|      % | Samples | Caller      | Location                                                                                                  |
| -----: | ------: | ----------- | --------------------------------------------------------------------------------------------------------- |
| 100.0% |      36 | `#write#79` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157` |

##### `write(::StructTypes.BoolType, ::Vector{UInt8}, ::Int64, ::Int64, ::Bool)` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:209`)

|      % | Samples | Caller      | Location                                                                                                  |
| -----: | ------: | ----------- | --------------------------------------------------------------------------------------------------------- |
| 100.0% |      35 | `#write#79` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157` |

##### `macro expansion` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:23`)

|     % | Samples | Caller                                                                                                                                                                                                                           | Location                                                                                                 |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| 91.2% |      31 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:218` |
|  8.8% |       3 | `var\"#read!#9\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Array}, ::Bool)`  | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:312` |

##### `iterate` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl`)

|     % | Samples | Caller      | Location                                                                                                  |
| ----: | ------: | ----------- | --------------------------------------------------------------------------------------------------------- |
| 47.1% |      16 | `#write#79` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157` |
| 32.4% |      11 | `iterate`   | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:75`  |
| 20.6% |       7 | `iterate`   | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/iterators.jl:697`     |

##### `getvalue` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl`)

|     % | Samples | Caller    | Location                                                                                                 |
| ----: | ------: | --------- | -------------------------------------------------------------------------------------------------------- |
| 64.5% |      20 | `iterate` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:81` |
| 35.5% |      11 | `iterate` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:78` |

##### `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40`)

|     % | Samples | Caller               | Location                                                                                                  |
| ----: | ------: | -------------------- | --------------------------------------------------------------------------------------------------------- |
| 76.7% |      23 | `getvalue`           | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:127` |
| 16.7% |       5 | `[unknown function]` | `<unknown>`                                                                                               |
|  3.3% |       1 | `foldl_impl`         | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:46`         |
|  3.3% |       1 | `defaultminimum`     | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:12`  |

##### `macro expansion` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:14`)

|      % | Samples | Caller                                                                                                                                                                                                                           | Location                                                                                                 |
| -----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| 100.0% |      27 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:218` |

##### `var\"#write#86\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.NumberType, ::Vector{UInt8}, ::Int64, ::Int64, ::Int64)` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:224`)

|     % | Samples | Caller                                                                                                                                                                                       | Location                                                                                                  |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| 76.0% |      19 | `write(::StructTypes.NumberType, ::Vector{UInt8}, ::Int64, ::Int64, ::Int64)`                                                                                                                | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:224` |
| 12.0% |       3 | `#write#79`                                                                                                                                                                                  | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157` |
|  8.0% |       2 | `write`                                                                                                                                                                                      | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:224` |
|  4.0% |       1 | `write(::StructTypes.ArrayType, ::Vector{UInt8}, ::Int64, ::Int64, ::JSON3.Array{Int64, Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:181` |

##### `var\"#write#84\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.BoolType, ::Vector{UInt8}, ::Int64, ::Int64, ::Bool)` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:209`)

|     % | Samples | Caller                                                                     | Location                                                                                                  |
| ----: | ------: | -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| 79.2% |      19 | `write(::StructTypes.BoolType, ::Vector{UInt8}, ::Int64, ::Int64, ::Bool)` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:209` |
| 20.8% |       5 | `#write#79`                                                                | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157` |

##### `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:87`)

|     % | Samples | Caller                                                                                                                                                                                                                           | Location                                                                                                 |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| 65.2% |      15 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:218` |
| 30.4% |       7 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)`                                             | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:218` |
|  4.3% |       1 | `var\"#read!#9\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Array}, ::Bool)`  | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:312` |

##### `unescape(::JSON3.PointerString)` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/strings.jl:48`)

|      % | Samples | Caller     | Location                                                                                                  |
| -----: | ------: | ---------- | --------------------------------------------------------------------------------------------------------- |
| 100.0% |      23 | `getvalue` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:193` |

##### `#defaultminimum##0` (`<unknown>`)

|      % | Samples | Caller               | Location    |
| -----: | ------: | -------------------- | ----------- |
| 100.0% |       5 | `[unknown function]` | `<unknown>` |

##### `(::JSON3.var\"#defaultminimum##0#defaultminimum##1\"{JSON3.Array{Int64, Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}}})(::Int64)` (`<unknown>`)

|      % | Samples | Caller      | Location                                                                                          |
| -----: | ------: | ----------- | ------------------------------------------------------------------------------------------------- |
| 100.0% |       1 | `MappingRF` | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98` |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|     % | Samples | Function                                                           | Location                                                                                                               |
| ----: | ------: | ------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------- |
| 76.5% |  25,547 | `macro expansion`                                                  | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/stdlib/v1.13/Profile/src/Profile.jl:82` |
| 76.5% |  25,547 | `capture_wall`                                                     | `profile.jl:43`                                                                                                        |
| 76.5% |  25,547 | `[unknown function]`                                               | `<unknown>`                                                                                                            |
| 76.5% |  25,547 | `eval(::Module, ::Any)`                                            | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:489`                       |
| 76.5% |  25,547 | `include_string(::typeof(identity), ::Module, ::String, ::String)` | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/loading.jl:2989`                   |
| 76.5% |  25,547 | `_include(::Function, ::Module, ::String)`                         | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/loading.jl:3083`                   |
| 76.5% |  25,547 | `include(::Module, ::String)`                                      | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base.jl:309`                       |
| 76.5% |  25,547 | `exec_options(::Base.JLOptions)`                                   | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/client.jl:234`                     |
| 76.5% |  25,547 | `_start()`                                                         | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/client.jl:570`                     |
| 76.5% |  25,546 | `parse_workload`                                                   | `profile.jl:18`                                                                                                        |
| 70.7% |  23,606 | `#write#58`                                                        | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:40`               |
| 52.6% |  17,552 | `#write#79`                                                        | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`              |
| 52.6% |  17,552 | `write`                                                            | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:147`              |
| 52.5% |  17,510 | `#write#81`                                                        | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`               |
| 23.4% |   7,826 | `(anonymous)`                                                      | `<unknown>`                                                                                                            |
| 20.8% |   6,950 | `_symbol`                                                          | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:1`                |
| 20.8% |   6,950 | `getvalue`                                                         | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:187`              |
| 18.1% |   6,049 | `defaultminimum`                                                   | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:12`               |
| 18.1% |   6,046 | `foldl_impl`                                                       | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:46`                      |
| 18.1% |   6,046 | `mapfoldl_impl`                                                    | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:42`                      |

#### Categories

##### Third-party

|     % | Samples | Function                                                                                                                                                                                                                         | Location                                                                                                  |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| 70.7% |  23,606 | `#write#58`                                                                                                                                                                                                                      | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:40`  |
| 52.6% |  17,552 | `#write#79`                                                                                                                                                                                                                      | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157` |
| 52.6% |  17,552 | `write`                                                                                                                                                                                                                          | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:147` |
| 20.8% |   6,950 | `_symbol`                                                                                                                                                                                                                        | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:1`   |
| 20.8% |   6,950 | `getvalue`                                                                                                                                                                                                                       | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:187` |
| 18.1% |   6,049 | `defaultminimum`                                                                                                                                                                                                                 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:12`  |
| 15.5% |   5,160 | `getvalue`                                                                                                                                                                                                                       | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:127` |
| 15.3% |   5,110 | `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})`                                                                                               | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40`  |
| 11.6% |   3,877 | `iterate`                                                                                                                                                                                                                        | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:81`  |
| 10.3% |   3,427 | `getvalue`                                                                                                                                                                                                                       | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:214` |
| 10.1% |   3,382 | `iterate`                                                                                                                                                                                                                        | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:78`  |
|  5.3% |   1,779 | `getindex`                                                                                                                                                                                                                       | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:163` |
|  4.5% |   1,499 | `var\"#read#6\"(::Bool, ::Nothing, ::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.read), ::String)`                                                                                                       | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:30`   |
|  4.5% |   1,499 | `read`                                                                                                                                                                                                                           | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:30`   |
|  3.9% |   1,314 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)`                                             | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:218`  |
|  3.9% |   1,314 | `read!`                                                                                                                                                                                                                          | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:87`   |
|  3.9% |   1,313 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:218`  |
|  3.9% |   1,313 | `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)`                                                                     | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:87`   |
|  3.9% |   1,310 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)`                                                      | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:87`   |
|  3.9% |   1,309 | `var\"#read!#9\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Array}, ::Bool)`  | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:312`  |

##### Standard library

|     % | Samples | Function                                                           | Location                                                                                                               |
| ----: | ------: | ------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------- |
| 76.5% |  25,547 | `macro expansion`                                                  | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/stdlib/v1.13/Profile/src/Profile.jl:82` |
| 76.5% |  25,547 | `eval(::Module, ::Any)`                                            | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:489`                       |
| 76.5% |  25,547 | `include_string(::typeof(identity), ::Module, ::String, ::String)` | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/loading.jl:2989`                   |
| 76.5% |  25,547 | `_include(::Function, ::Module, ::String)`                         | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/loading.jl:3083`                   |
| 76.5% |  25,547 | `include(::Module, ::String)`                                      | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base.jl:309`                       |
| 76.5% |  25,547 | `exec_options(::Base.JLOptions)`                                   | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/client.jl:234`                     |
| 76.5% |  25,547 | `_start()`                                                         | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/client.jl:570`                     |
| 52.5% |  17,510 | `#write#81`                                                        | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`               |
| 18.1% |   6,046 | `foldl_impl`                                                       | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:46`                      |
| 18.1% |   6,046 | `mapfoldl_impl`                                                    | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:42`                      |
| 18.1% |   6,046 | `#mapfoldl#271`                                                    | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:173`                     |
| 18.1% |   6,046 | `mapfoldl`                                                         | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:173`                     |
| 18.1% |   6,046 | `#mapreduce#275`                                                   | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:306`                     |
| 18.1% |   6,046 | `mapreduce`                                                        | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:306`                     |
| 18.1% |   6,046 | `#sum#278`                                                         | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:535`                     |
| 18.1% |   6,046 | `sum`                                                              | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:535`                     |
| 18.1% |   6,046 | `#sum#279`                                                         | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:564`                     |
| 18.1% |   6,046 | `sum`                                                              | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:564`                     |
| 18.1% |   6,046 | `_foldl_impl`                                                      | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:56`                      |
| 18.1% |   6,040 | `MappingRF`                                                        | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98`                      |

##### Unknown

|     % | Samples | Function      | Location    |
| ----: | ------: | ------------- | ----------- |
| 23.4% |   7,826 | `(anonymous)` | `<unknown>` |

##### Native

|     % | Samples | Function                                                                                                                                                                                | Location    |
| ----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 76.5% |  25,547 | `[unknown function]`                                                                                                                                                                    | `<unknown>` |
| 18.1% |   6,041 | `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})`                                                                                                            | `<unknown>` |
| 18.0% |   6,020 | `#defaultminimum##0`                                                                                                                                                                    | `<unknown>` |
| <0.1% |       4 | `(::JSON3.var\"#defaultminimum##0#defaultminimum##1\"{JSON3.Array{Int64, Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}}})(::Int64)` | `<unknown>` |

#### Callees

Callees ranked by contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `macro expansion` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/stdlib/v1.13/Profile/src/Profile.jl:82`)

|      % | Samples | Callee           | Location        |
| -----: | ------: | ---------------- | --------------- |
| 100.0% |  25,546 | `parse_workload` | `profile.jl:18` |

##### `capture_wall` (`profile.jl:43`)

|      % | Samples | Callee            | Location                                                                                                               |
| -----: | ------: | ----------------- | ---------------------------------------------------------------------------------------------------------------------- |
| 100.0% |  25,547 | `macro expansion` | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/stdlib/v1.13/Profile/src/Profile.jl:82` |

##### `[unknown function]` (`<unknown>`)

|      % | Samples | Callee         | Location                                                                                                  |
| -----: | ------: | -------------- | --------------------------------------------------------------------------------------------------------- |
| 100.0% |  25,547 | `capture_wall` | `profile.jl:43`                                                                                           |
|  92.4% |  23,606 | `#write#58`    | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:40`  |
|  68.5% |  17,510 | `#write#81`    | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`  |
|  65.6% |  16,769 | `#write#79`    | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157` |
|  23.6% |   6,034 | `sum`          | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:535`        |

##### `eval(::Module, ::Any)` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:489`)

|      % | Samples | Callee               | Location    |
| -----: | ------: | -------------------- | ----------- |
| 100.0% |  25,547 | `[unknown function]` | `<unknown>` |

##### `include_string(::typeof(identity), ::Module, ::String, ::String)` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/loading.jl:2989`)

|      % | Samples | Callee                  | Location                                                                                         |
| -----: | ------: | ----------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% |  25,547 | `eval(::Module, ::Any)` | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:489` |

##### `_include(::Function, ::Module, ::String)` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/loading.jl:3083`)

|      % | Samples | Callee                                                             | Location                                                                                             |
| -----: | ------: | ------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------- |
| 100.0% |  25,547 | `include_string(::typeof(identity), ::Module, ::String, ::String)` | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/loading.jl:2989` |

##### `include(::Module, ::String)` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base.jl:309`)

|      % | Samples | Callee                                     | Location                                                                                             |
| -----: | ------: | ------------------------------------------ | ---------------------------------------------------------------------------------------------------- |
| 100.0% |  25,547 | `_include(::Function, ::Module, ::String)` | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/loading.jl:3083` |

##### `exec_options(::Base.JLOptions)` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/client.jl:234`)

|      % | Samples | Callee                        | Location                                                                                         |
| -----: | ------: | ----------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% |  25,547 | `include(::Module, ::String)` | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base.jl:309` |

##### `_start()` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/client.jl:570`)

|      % | Samples | Callee                           | Location                                                                                           |
| -----: | ------: | -------------------------------- | -------------------------------------------------------------------------------------------------- |
| 100.0% |  25,547 | `exec_options(::Base.JLOptions)` | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/client.jl:234` |

##### `parse_workload` (`profile.jl:18`)

|     % | Samples | Callee               | Location                                                                                                   |
| ----: | ------: | -------------------- | ---------------------------------------------------------------------------------------------------------- |
| 92.4% |  23,611 | `[unknown function]` | `<unknown>`                                                                                                |
|  5.9% |   1,499 | `read`               | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:30`    |
|  1.5% |     387 | `length(::String)`   | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:540` |
| <0.1% |       1 | `iterate`            | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/range.jl:924`          |

##### `#write#58` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:40`)

|     % | Samples | Callee                    | Location                                                                                                  |
| ----: | ------: | ------------------------- | --------------------------------------------------------------------------------------------------------- |
| 74.4% |  17,552 | `write`                   | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:147` |
| 25.6% |   6,049 | `defaultminimum`          | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:12`  |
| <0.1% |       2 | `String(::Vector{UInt8})` | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:66` |
| <0.1% |       1 | `StringVector`            | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/iobuffer.jl:168`      |

##### `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`)

|     % | Samples | Callee                                                                         | Location                                                                                                  |
| ----: | ------: | ------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------- |
| 99.8% |  17,525 | `[unknown function]`                                                           | `<unknown>`                                                                                               |
| 12.1% |   2,123 | `indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64, ::Int64)`      | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`         |
| 10.4% |   1,826 | `iterate`                                                                      | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:81`  |
| 10.1% |   1,773 | `iterate`                                                                      | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:78`  |
|  6.7% |   1,173 | `write(::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:340` |

##### `write` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:147`)

|      % | Samples | Callee      | Location                                                                                                  |
| -----: | ------: | ----------- | --------------------------------------------------------------------------------------------------------- |
| 100.0% |  17,551 | `#write#79` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157` |

##### `#write#81` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`)

|     % | Samples | Callee               | Location                                                                                                      |
| ----: | ------: | -------------------- | ------------------------------------------------------------------------------------------------------------- |
| 95.9% |  16,786 | `[unknown function]` | `<unknown>`                                                                                                   |
|  3.5% |     618 | `isassigned`         | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:1641` |
|  2.0% |     350 | `getindex`           | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:163`     |
|  0.1% |      10 | `indexed_iterate`    | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`             |
| <0.1% |       2 | `isassigned`         | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:1642` |

##### `getvalue` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:187`)

|      % | Samples | Callee    | Location                                                                                                |
| -----: | ------: | --------- | ------------------------------------------------------------------------------------------------------- |
| 100.0% |   6,950 | `_symbol` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:1` |

##### `defaultminimum` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:12`)

|      % | Samples | Callee                                                                                                                             | Location                                                                                                 |
| -----: | ------: | ---------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| 100.0% |   6,046 | `sum`                                                                                                                              | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:564`       |
|   1.1% |      69 | `isempty(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})`       | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:1127`  |
|  <0.1% |       3 | `isempty(::JSON3.Object{Base.CodeUnits{UInt8, String}, Vector{UInt64}})`                                                           | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:1127`  |
|  <0.1% |       1 | `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40` |

##### `foldl_impl` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:46`)

|      % | Samples | Callee                                                                                                                                                    | Location                                                                                                  |
| -----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| 100.0% |   6,046 | `_foldl_impl`                                                                                                                                             | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:56`         |
|  99.9% |   6,038 | `_foldl_impl`                                                                                                                                             | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`         |
|  <0.1% |       3 | `getvalue(::Type{JSON3.Array}, ::Base.CodeUnits{UInt8, String}, ::SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}, ::Int64, ::UInt64)` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:131` |
|  <0.1% |       1 | `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})`                        | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40`  |
|  <0.1% |       1 | `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})`                                                                              | `<unknown>`                                                                                               |

##### `mapfoldl_impl` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:42`)

|      % | Samples | Callee       | Location                                                                                          |
| -----: | ------: | ------------ | ------------------------------------------------------------------------------------------------- |
| 100.0% |   6,046 | `foldl_impl` | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:46` |
|  <0.1% |       3 | `foldl_impl` | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:47` |

##### `#mapfoldl#271` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:173`)

|      % | Samples | Callee          | Location                                                                                          |
| -----: | ------: | --------------- | ------------------------------------------------------------------------------------------------- |
| 100.0% |   6,046 | `mapfoldl_impl` | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:42` |

##### `mapfoldl` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:173`)

|      % | Samples | Callee          | Location                                                                                           |
| -----: | ------: | --------------- | -------------------------------------------------------------------------------------------------- |
| 100.0% |   6,046 | `#mapfoldl#271` | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:173` |

##### `#mapreduce#275` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:306`)

|      % | Samples | Callee     | Location                                                                                           |
| -----: | ------: | ---------- | -------------------------------------------------------------------------------------------------- |
| 100.0% |   6,046 | `mapfoldl` | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:173` |

##### `mapreduce` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:306`)

|      % | Samples | Callee           | Location                                                                                           |
| -----: | ------: | ---------------- | -------------------------------------------------------------------------------------------------- |
| 100.0% |   6,046 | `#mapreduce#275` | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:306` |

##### `#sum#278` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:535`)

|      % | Samples | Callee      | Location                                                                                           |
| -----: | ------: | ----------- | -------------------------------------------------------------------------------------------------- |
| 100.0% |   6,046 | `mapreduce` | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:306` |

##### `sum` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:535`)

|      % | Samples | Callee     | Location                                                                                           |
| -----: | ------: | ---------- | -------------------------------------------------------------------------------------------------- |
| 100.0% |   6,046 | `#sum#278` | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:535` |

##### `#sum#279` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:564`)

|      % | Samples | Callee | Location                                                                                           |
| -----: | ------: | ------ | -------------------------------------------------------------------------------------------------- |
| 100.0% |   6,046 | `sum`  | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:535` |

##### `sum` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:564`)

|      % | Samples | Callee     | Location                                                                                           |
| -----: | ------: | ---------- | -------------------------------------------------------------------------------------------------- |
| 100.0% |   6,046 | `#sum#279` | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:564` |

##### `_foldl_impl` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:56`)

|     % | Samples | Callee               | Location                                                                                              |
| ----: | ------: | -------------------- | ----------------------------------------------------------------------------------------------------- |
| 99.9% |   6,038 | `MappingRF`          | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98`     |
|  0.1% |       4 | `[unknown function]` | `<unknown>`                                                                                           |
| <0.1% |       3 | `iterate`            | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/iterators.jl:697` |

##### `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` (`<unknown>`)

|      % | Samples | Callee                                                                                                                                    | Location                                                                                                 |
| -----: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| 100.0% |   6,038 | `[unknown function]`                                                                                                                      | `<unknown>`                                                                                              |
|   0.2% |      10 | `defaultminimum`                                                                                                                          | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:6`  |
|   0.1% |       7 | `defaultminimum(::JSON3.Array{Int64, Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:11` |
|  <0.1% |       3 | `+(::UInt64, ::Int64)`                                                                                                                    | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:1054`         |
|  <0.1% |       3 | `defaultminimum(::String)`                                                                                                                | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:5`  |

##### `MappingRF` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98`)

|      % | Samples | Callee                                                                                                                                                                                  | Location                                                                                          |
| -----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| 100.0% |   6,039 | `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})`                                                                                                            | `<unknown>`                                                                                       |
|   0.3% |      20 | `BottomRF`                                                                                                                                                                              | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:83` |
|   0.1% |       8 | `BottomRF`                                                                                                                                                                              | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:84` |
|   0.1% |       4 | `(::JSON3.var\"#defaultminimum##0#defaultminimum##1\"{JSON3.Array{Int64, Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}}})(::Int64)` | `<unknown>`                                                                                       |

##### `#defaultminimum##0` (`<unknown>`)

|     % | Samples | Callee           | Location                                                                                                      |
| ----: | ------: | ---------------- | ------------------------------------------------------------------------------------------------------------- |
| 89.2% |   5,372 | `defaultminimum` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:12`      |
|  7.9% |     477 | `isassigned`     | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:1641` |
|  5.6% |     336 | `getindex`       | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:163`     |
| <0.1% |       2 | `isassigned`     | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:1640` |
| <0.1% |       1 | `isassigned`     | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:1642` |

##### `getvalue` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:127`)

|     % | Samples | Callee                                                                                                                             | Location                                                                                                 |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| 98.9% |   5,103 | `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40` |
|  1.0% |      51 | `setindex!(::Dict{Symbol, Int64}, ::Int64, ::Symbol)`                                                                              | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:356`         |

##### `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40`)

|     % | Samples | Callee                                                     | Location                                                                                                  |
| ----: | ------: | ---------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| 70.4% |   3,595 | `getvalue`                                                 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:187` |
| 24.9% |   1,270 | `setindex!(::Dict{Symbol, Int64}, ::Int64, ::Symbol)`      | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:356`          |
|  1.9% |      96 | `+`                                                        | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:87`            |
|  1.2% |      59 | `ht_keyindex2_shorthash!(::Dict{Symbol, Int64}, ::Symbol)` | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:267`          |
|  0.8% |      42 | `getindex`                                                 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/subarray.jl:334`      |

##### `iterate` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:81`)

|     % | Samples | Callee     | Location                                                                                                  |
| ----: | ------: | ---------- | --------------------------------------------------------------------------------------------------------- |
| 88.4% |   3,427 | `getvalue` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:214` |
|  6.1% |     237 | `getvalue` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:218` |
|  2.7% |     106 | `getvalue` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:215` |
|  1.5% |      58 | `getvalue` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:216` |
|  0.5% |      20 | `getvalue` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl`     |

##### `getvalue` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:214`)

|     % | Samples | Callee     | Location                                                                                                  |
| ----: | ------: | ---------- | --------------------------------------------------------------------------------------------------------- |
| 99.0% |   3,393 | `getvalue` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:127` |
|  1.0% |      34 | `getvalue` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:126` |

##### `iterate` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:78`)

|     % | Samples | Callee     | Location                                                                                                  |
| ----: | ------: | ---------- | --------------------------------------------------------------------------------------------------------- |
| 99.2% |   3,355 | `getvalue` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:187` |
|  0.8% |      27 | `getvalue` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl`     |

##### `getindex` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:163`)

|     % | Samples | Callee     | Location                                                                                                  |
| ----: | ------: | ---------- | --------------------------------------------------------------------------------------------------------- |
| 99.3% |   1,767 | `getvalue` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:127` |
|  0.7% |      12 | `getvalue` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:126` |

##### `var\"#read#6\"(::Bool, ::Nothing, ::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.read), ::String)` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:30`)

|     % | Samples | Callee                                                                         | Location                                                                                                 |
| ----: | ------: | ------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------- |
| 87.7% |   1,314 | `read!`                                                                        | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:87`  |
| 12.1% |     182 | `Array`                                                                        | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:648`         |
|  0.2% |       3 | `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, Vector{UInt64}})` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40` |

##### `read` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:30`)

|      % | Samples | Callee                                                                                                                     | Location                                                                                                |
| -----: | ------: | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| 100.0% |   1,499 | `var\"#read#6\"(::Bool, ::Nothing, ::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.read), ::String)` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:30` |

##### `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:218`)

|     % | Samples | Callee                                                                                                                                                                                                                           | Location                                                                                                 |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| 99.9% |   1,313 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:218` |
|  0.5% |       7 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)`                                                      | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:87`  |

##### `read!` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:87`)

|     % | Samples | Callee                                                                                                                                                                               | Location                                                                                                 |
| ----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------- |
| 99.9% |   1,313 | `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)`                         | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:87`  |
|  0.1% |       1 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:218` |

##### `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:218`)

|     % | Samples | Callee                                                                                                                                                                      | Location                                                                                                 |
| ----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| 99.8% |   1,310 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:87`  |
| 16.5% |     217 | `getbyte`                                                                                                                                                                   | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:8`  |
|  8.0% |     105 | `macro expansion`                                                                                                                                                           | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:29` |
|  4.3% |      57 | `macro expansion`                                                                                                                                                           | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:24` |
|  4.0% |      52 | `string`                                                                                                                                                                    | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:88` |

##### `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:87`)

|      % | Samples | Callee                                                                                                                                                                               | Location                                                                                                         |
| -----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------- |
| 100.0% |   1,313 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:218`         |
|  99.7% |   1,309 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Array}, ::Bool)`  | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:312`         |
|  21.6% |     284 | `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{String})`                                                                       | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:142`         |
|   3.6% |      47 | `typeparser(::Type{Float64}, ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Int16, ::Parsers.Options)`                                                                | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/Parsers/05lwR/src/components.jl:392` |
|   1.2% |      16 | `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.False})`                                                                  | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:189`         |

##### `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:87`)

|      % | Samples | Callee                                                                                                                                                       | Location                                                                                                         |
| -----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------- |
| 100.0% |   1,310 | `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:87`          |
|   0.4% |       5 | `typeparser(::Type{Float64}, ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Int16, ::Parsers.Options)`                                        | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/Parsers/05lwR/src/components.jl:392` |
|   0.3% |       4 | `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{String})`                                               | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:142`         |
|   0.2% |       3 | `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Nothing})`                                              | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:204`         |
|   0.2% |       2 | `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.False})`                                          | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:189`         |

##### `var\"#read!#9\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Array}, ::Bool)` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:312`)

|     % | Samples | Callee                                                                                                                                                                      | Location                                                                                                 |
| ----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| 99.9% |   1,308 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:87`  |
|  0.5% |       6 | `macro expansion`                                                                                                                                                           | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:24` |
|  0.3% |       4 | `macro expansion`                                                                                                                                                           | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:29` |
|  0.3% |       4 | `setindex!`                                                                                                                                                                 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:1020`       |
|  0.2% |       3 | `macro expansion`                                                                                                                                                           | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:23` |

##### `(::JSON3.var\"#defaultminimum##0#defaultminimum##1\"{JSON3.Array{Int64, Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}}})(::Int64)` (`<unknown>`)

|     % | Samples | Callee       | Location                                                                                                      |
| ----: | ------: | ------------ | ------------------------------------------------------------------------------------------------------------- |
| 50.0% |       2 | `isassigned` | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:1640` |
| 25.0% |       1 | `isassigned` | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`      |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame.

Common call stack: `#write#58` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:40`) ← `[unknown function]` ← `parse_workload` (`profile.jl:18`) ← `macro expansion` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/stdlib/v1.13/Profile/src/Profile.jl:82`) ← `capture_wall` (`profile.jl:43`) ← `[unknown function]` ← `eval(::Module, ::Any)` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:489`) ← `include_string(::typeof(identity), ::Module, ::String, ::String)` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/loading.jl:2989`) ← `_include(::Function, ::Module, ::String)` (3083) ← `include(::Module, ::String)` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base.jl:309`) ← `exec_options(::Base.JLOptions)` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/client.jl:234`) ← `_start()` (570)

|    % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ---: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 9.4% |   3,152 | `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 5.3% |   1,777 | `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 4.1% |   1,358 | `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 3.0% |   1,016 | `indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64, ::Int64)` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`) ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 2.6% |     857 | `_symbol` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:1`) ← `getvalue` (187) ← `iterate` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:78`) ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 2.0% |     681 | `_symbol` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:1`) ← `getvalue` (187) ← `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40`) ← `getvalue` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:127`) ← `getvalue` (214) ← `iterate` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:81`) ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 2.0% |     676 | `_symbol` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:1`) ← `getvalue` (187) ← `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40`) ← `getvalue` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:127`) ← `getvalue` (214) ← `iterate` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:81`) ← `iterate` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/iterators.jl:697`) ← `_foldl_impl` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:12`) ← `#defaultminimum##0` ← `[unknown function]` ← `_foldl_impl` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `[unknown function]` ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `MappingRF` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98`) ← `_foldl_impl` (56) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:12`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 1.7% |     583 | `_symbol` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:1`) ← `getvalue` (187) ← `iterate` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:78`) ← `iterate` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/iterators.jl:697`) ← `_foldl_impl` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `[unknown function]` ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `[unknown function]` ← `_foldl_impl` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:12`) ← `#defaultminimum##0` ← `[unknown function]` ← `_foldl_impl` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `[unknown function]` ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `MappingRF` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98`) ← `_foldl_impl` (56) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:12`)                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 1.7% |     563 | `indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64, ::Int64)` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`) ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 1.3% |     450 | `_symbol` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:1`) ← `getvalue` (187) ← `iterate` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:78`) ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 1.3% |     429 | `indexed_iterate` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`) ← `indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64)` (163) ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 1.3% |     423 | `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `[unknown function]` ← `_foldl_impl` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `[unknown function]` ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `[unknown function]` ← `_foldl_impl` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:12`) ← `#defaultminimum##0` ← `[unknown function]` ← `_foldl_impl` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `[unknown function]` ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `MappingRF` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98`) ← `_foldl_impl` (56) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:12`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 1.2% |     386 | `GenericMemory` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:588`) ← `Array` (648) ← `Array` (661) ← `zeros` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:626`) ← `zeros` (622) ← `realloc!(::Vector{UInt8}, ::Int64, ::Int64)` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:51`) ← `var\"#write#98\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` (340) ← `write(::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` (340) ← `#write#79` (157) ← `[unknown function]` ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 1.1% |     370 | `_symbol` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:1`) ← `getvalue` (187) ← `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40`) ← `getvalue` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:127`) ← `getvalue` (214) ← `iterate` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:81`) ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 1.1% |     360 | `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 1.0% |     349 | `indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64, ::Int64)` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`) ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 1.0% |     345 | `_symbol` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:1`) ← `getvalue` (187) ← `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40`) ← `getvalue` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:127`) ← `getvalue` (214) ← `iterate` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:81`) ← `iterate` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/iterators.jl:697`) ← `_foldl_impl` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `[unknown function]` ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `[unknown function]` ← `_foldl_impl` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:12`) ← `#defaultminimum##0` ← `[unknown function]` ← `_foldl_impl` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `[unknown function]` ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `MappingRF` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98`) ← `_foldl_impl` (56) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:12`)                                                           |
| 1.0% |     339 | `_symbol` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:1`) ← `getvalue` (187) ← `iterate` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:78`) ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 1.0% |     335 | `_symbol` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:1`) ← `getvalue` (187) ← `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40`) ← `getvalue` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:127`) ← `getindex` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:163`) ← `isassigned` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:1641`) ← `#write#81` ← `[unknown function]` ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 0.9% |     304 | `_symbol` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:1`) ← `getvalue` (187) ← `iterate` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:78`) ← `iterate` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/iterators.jl:697`) ← `_foldl_impl` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `[unknown function]` ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `[unknown function]` ← `_foldl_impl` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `[unknown function]` ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `[unknown function]` ← `_foldl_impl` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:12`) ← `#defaultminimum##0` ← `[unknown function]` ← `_foldl_impl` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `[unknown function]` ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `MappingRF` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98`) ← `_foldl_impl` (56) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:12`) |

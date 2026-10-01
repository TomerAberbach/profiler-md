# Sampling profile

Collected 33,383 samples.

| Category         |     % | Samples |
| ---------------- | ----: | ------: |
| Third-party      | 46.2% |  15,412 |
| Standard library | 27.4% |   9,156 |
| Unknown          | 22.3% |   7,436 |
| Native           |  4.0% |   1,334 |
| Ours             |  0.1% |      45 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|     % | Samples | Function                                                                                                                                                                                                                         | Location                                                                                                   |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| 22.3% |   7,436 | `(anonymous)`                                                                                                                                                                                                                    | `<unknown>`                                                                                                |
| 21.1% |   7,056 | `#write#79`                                                                                                                                                                                                                      | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`  |
| 20.9% |   6,977 | `_symbol`                                                                                                                                                                                                                        | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:1`    |
|  6.9% |   2,294 | `indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64, ::Int64)`                                                                                                                                                        | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`          |
|  4.4% |   1,460 | `indexed_iterate`                                                                                                                                                                                                                | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`          |
|  4.3% |   1,422 | `GenericMemory`                                                                                                                                                                                                                  | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:588`           |
|  3.3% |   1,116 | `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})`                                                                                                                                                     | `<unknown>`                                                                                                |
|  1.7% |     565 | `unsafe_load`                                                                                                                                                                                                                    | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/pointer.jl:151`        |
|  1.5% |     514 | `ht_keyindex2_shorthash!(::Dict{Symbol, Int64}, ::Symbol)`                                                                                                                                                                       | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:267`           |
|  1.0% |     342 | `+`                                                                                                                                                                                                                              | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:87`             |
|  0.9% |     294 | `BottomRF`                                                                                                                                                                                                                       | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:84`          |
|  0.8% |     269 | `_setindex!`                                                                                                                                                                                                                     | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:1025`         |
|  0.7% |     249 | `_foldl_impl`                                                                                                                                                                                                                    | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:61`          |
|  0.7% |     220 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:218`   |
|  0.7% |     217 | `[unknown function]`                                                                                                                                                                                                             | `<unknown>`                                                                                                |
|  0.6% |     208 | `getindex`                                                                                                                                                                                                                       | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:975`     |
|  0.4% |     143 | `unsafe_string`                                                                                                                                                                                                                  | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:130` |
|  0.4% |     133 | `iterate`                                                                                                                                                                                                                        | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:75`   |
|  0.4% |     133 | `checkbounds`                                                                                                                                                                                                                    | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/basic.jl:212`  |
|  0.4% |     120 | `#write#81`                                                                                                                                                                                                                      | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:200`  |

#### Categories

##### Third-party

|     % | Samples | Function                                                                                                                                                                                                                         | Location                                                                                                   |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| 21.1% |   7,056 | `#write#79`                                                                                                                                                                                                                      | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`  |
| 20.9% |   6,977 | `_symbol`                                                                                                                                                                                                                        | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:1`    |
|  0.7% |     220 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:218`   |
|  0.4% |     133 | `iterate`                                                                                                                                                                                                                        | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:75`   |
|  0.4% |     120 | `#write#81`                                                                                                                                                                                                                      | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:200`  |
|  0.4% |     117 | `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{String})`                                                                                                                   | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:142`   |
|  0.3% |      90 | `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)`                                                                     | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:87`    |
|  0.3% |      88 | `getvalue`                                                                                                                                                                                                                       | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:215`  |
|  0.2% |      64 | `var\"#write#98\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)`                                                          | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:340`  |
|  0.2% |      59 | `#write#81`                                                                                                                                                                                                                      | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:185`  |
|  0.1% |      47 | `iterate`                                                                                                                                                                                                                        | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl`      |
|  0.1% |      46 | `write(::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)`                                                                                                                                                   | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:340`  |
|  0.1% |      38 | `getvalue`                                                                                                                                                                                                                       | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl`      |
|  0.1% |      32 | `write(::StructTypes.BoolType, ::Vector{UInt8}, ::Int64, ::Int64, ::Bool)`                                                                                                                                                       | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:209`  |
|  0.1% |      30 | `macro expansion`                                                                                                                                                                                                                | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:23`   |
|  0.1% |      28 | `getvalue(::Type{JSON3.Array}, ::Base.CodeUnits{UInt8, String}, ::SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}, ::Int64, ::UInt64)`                                                                        | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:131`  |
|  0.1% |      28 | `macro expansion`                                                                                                                                                                                                                | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:14`   |
|  0.1% |      25 | `var\"#write#86\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.NumberType, ::Vector{UInt8}, ::Int64, ::Int64, ::Int64)`                                                           | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:224`  |
|  0.1% |      25 | `var\"#write#84\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.BoolType, ::Vector{UInt8}, ::Int64, ::Int64, ::Bool)`                                                              | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:209`  |
|  0.1% |      24 | `unescape(::JSON3.PointerString)`                                                                                                                                                                                                | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/strings.jl:48` |

##### Standard library

|    % | Samples | Function                                                                  | Location                                                                                                   |
| ---: | ------: | ------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| 6.9% |   2,294 | `indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64, ::Int64)` | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`          |
| 4.4% |   1,460 | `indexed_iterate`                                                         | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`          |
| 4.3% |   1,422 | `GenericMemory`                                                           | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:588`           |
| 1.7% |     565 | `unsafe_load`                                                             | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/pointer.jl:151`        |
| 1.5% |     514 | `ht_keyindex2_shorthash!(::Dict{Symbol, Int64}, ::Symbol)`                | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:267`           |
| 1.0% |     342 | `+`                                                                       | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:87`             |
| 0.9% |     294 | `BottomRF`                                                                | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:84`          |
| 0.8% |     269 | `_setindex!`                                                              | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:1025`         |
| 0.7% |     249 | `_foldl_impl`                                                             | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:61`          |
| 0.6% |     208 | `getindex`                                                                | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:975`     |
| 0.4% |     143 | `unsafe_string`                                                           | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:130` |
| 0.4% |     133 | `checkbounds`                                                             | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/basic.jl:212`  |
| 0.3% |     110 | `length_continued`                                                        | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/pointer.jl`            |
| 0.3% |      91 | `==`                                                                      | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/promotion.jl:641`      |
| 0.3% |      90 | `getproperty`                                                             | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base_compiler.jl:57`   |
| 0.2% |      78 | `\|`                                                                      | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:418`            |
| 0.2% |      71 | `macro expansion`                                                         | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/simdloop.jl:75`        |
| 0.2% |      71 | `unsafe_string`                                                           | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:126` |
| 0.2% |      67 | `setindex!(::Dict{Symbol, Int64}, ::Int64, ::Symbol)`                     | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:356`           |
| 0.2% |      62 | `Dict`                                                                    | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:80`            |

##### Unknown

|     % | Samples | Function      | Location    |
| ----: | ------: | ------------- | ----------- |
| 22.3% |   7,436 | `(anonymous)` | `<unknown>` |

##### Native

|     % | Samples | Function                                                                     | Location    |
| ----: | ------: | ---------------------------------------------------------------------------- | ----------- |
|  3.3% |   1,116 | `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` | `<unknown>` |
|  0.7% |     217 | `[unknown function]`                                                         | `<unknown>` |
| <0.1% |       1 | `#defaultminimum##0`                                                         | `<unknown>` |

#### Lines

Lines ranked by contribution to each function's self samples.

##### `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`)

|     % | Samples | Location                                                                                                  |
| ----: | ------: | --------------------------------------------------------------------------------------------------------- |
| 62.1% |   4,382 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157` |
| 19.9% |   1,403 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:60`  |
|  7.6% |     533 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:73`  |
|  4.2% |     298 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:155` |
|  3.6% |     253 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:72`  |

##### `_symbol` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:1`)

|      % | Samples | Location                                                                                                |
| -----: | ------: | ------------------------------------------------------------------------------------------------------- |
| 100.0% |   6,977 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:1` |

##### `indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64, ::Int64)` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`)

|      % | Samples | Location                                                                                          |
| -----: | ------: | ------------------------------------------------------------------------------------------------- |
| 100.0% |   2,294 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163` |

##### `indexed_iterate` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`)

|      % | Samples | Location                                                                                          |
| -----: | ------: | ------------------------------------------------------------------------------------------------- |
| 100.0% |   1,460 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163` |

##### `GenericMemory` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:588`)

|      % | Samples | Location                                                                                         |
| -----: | ------: | ------------------------------------------------------------------------------------------------ |
| 100.0% |   1,422 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:588` |

##### `unsafe_load` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/pointer.jl:151`)

|      % | Samples | Location                                                                                            |
| -----: | ------: | --------------------------------------------------------------------------------------------------- |
| 100.0% |     565 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/pointer.jl:151` |

##### `ht_keyindex2_shorthash!(::Dict{Symbol, Int64}, ::Symbol)` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:267`)

|     % | Samples | Location                                                                                         |
| ----: | ------: | ------------------------------------------------------------------------------------------------ |
| 60.7% |     312 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:291` |
| 17.3% |      89 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:282` |
|  5.1% |      26 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:281` |
|  2.3% |      12 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:303` |
|  0.6% |       3 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:267` |

##### `+` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:87`)

|      % | Samples | Location                                                                                       |
| -----: | ------: | ---------------------------------------------------------------------------------------------- |
| 100.0% |     342 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:87` |

##### `BottomRF` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:84`)

|      % | Samples | Location                                                                                          |
| -----: | ------: | ------------------------------------------------------------------------------------------------- |
| 100.0% |     294 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:84` |

##### `_setindex!` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:1025`)

|      % | Samples | Location                                                                                           |
| -----: | ------: | -------------------------------------------------------------------------------------------------- |
| 100.0% |     269 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:1025` |

##### `_foldl_impl` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:61`)

|     % | Samples | Location                                                                                          |
| ----: | ------: | ------------------------------------------------------------------------------------------------- |
| 93.6% |     233 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60` |
|  2.0% |       5 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:51` |

##### `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:218`)

|     % | Samples | Location                                                                                                 |
| ----: | ------: | -------------------------------------------------------------------------------------------------------- |
| 78.2% |     172 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:248` |
|  7.7% |      17 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:298` |
|  3.6% |       8 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:268` |
|  2.7% |       6 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:278` |
|  2.3% |       5 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:247` |

##### `[unknown function]` (`<unknown>`)

|     % | Samples | Location |
| ----: | ------: | -------- |
| 63.1% |     137 | 147      |
| 30.9% |      67 | 98       |
|  2.3% |       5 | 11       |
|  1.4% |       3 | 181      |
|  0.9% |       2 | 12       |

##### `getindex` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:975`)

|      % | Samples | Location                                                                                               |
| -----: | ------: | ------------------------------------------------------------------------------------------------------ |
| 100.0% |     208 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:975` |

##### `unsafe_string` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:130`)

|      % | Samples | Location                                                                                                   |
| -----: | ------: | ---------------------------------------------------------------------------------------------------------- |
| 100.0% |     143 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:130` |

##### `iterate` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:75`)

|      % | Samples | Location                                                                                                 |
| -----: | ------: | -------------------------------------------------------------------------------------------------------- |
| 100.0% |     133 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:75` |

##### `checkbounds` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/basic.jl:212`)

|      % | Samples | Location                                                                                                  |
| -----: | ------: | --------------------------------------------------------------------------------------------------------- |
| 100.0% |     133 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/basic.jl:212` |

##### `#write#81` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:200`)

|     % | Samples | Location                                                                                                  |
| ----: | ------: | --------------------------------------------------------------------------------------------------------- |
| 40.0% |      48 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:200` |
| 29.2% |      35 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:60`  |
| 11.7% |      14 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:73`  |
| 10.8% |      13 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:72`  |
|  7.5% |       9 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:181` |

##### `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{String})` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:142`)

|     % | Samples | Location                                                                                                 |
| ----: | ------: | -------------------------------------------------------------------------------------------------------- |
| 52.1% |      61 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:155` |
|  3.4% |       4 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:167` |
|  3.4% |       4 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:142` |
|  2.6% |       3 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:149` |

##### `==` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/promotion.jl:641`)

|      % | Samples | Location                                                                                              |
| -----: | ------: | ----------------------------------------------------------------------------------------------------- |
| 100.0% |      91 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/promotion.jl:641` |

##### `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:87`)

|     % | Samples | Location                                                                                                 |
| ----: | ------: | -------------------------------------------------------------------------------------------------------- |
| 30.0% |      27 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:88`  |
| 27.8% |      25 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:87`  |
|  7.8% |       7 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:93`  |
|  2.2% |       2 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:101` |
|  2.2% |       2 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:89`  |

##### `getproperty` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base_compiler.jl:57`)

|      % | Samples | Location                                                                                                 |
| -----: | ------: | -------------------------------------------------------------------------------------------------------- |
| 100.0% |      90 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base_compiler.jl:57` |

##### `getvalue` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:215`)

|      % | Samples | Location                                                                                                  |
| -----: | ------: | --------------------------------------------------------------------------------------------------------- |
| 100.0% |      88 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:215` |

##### `|` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:418`)

|      % | Samples | Location                                                                                        |
| -----: | ------: | ----------------------------------------------------------------------------------------------- |
| 100.0% |      78 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:418` |

##### `macro expansion` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/simdloop.jl:75`)

|      % | Samples | Location                                                                                            |
| -----: | ------: | --------------------------------------------------------------------------------------------------- |
| 100.0% |      71 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/simdloop.jl:75` |

##### `unsafe_string` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:126`)

|      % | Samples | Location                                                                                                   |
| -----: | ------: | ---------------------------------------------------------------------------------------------------------- |
| 100.0% |      71 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:126` |

##### `setindex!(::Dict{Symbol, Int64}, ::Int64, ::Symbol)` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:356`)

|     % | Samples | Location                                                                                         |
| ----: | ------: | ------------------------------------------------------------------------------------------------ |
| 83.6% |      56 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:368` |
| 13.4% |       9 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:356` |
|  1.5% |       1 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:358` |
|  1.5% |       1 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:360` |

##### `var\"#write#98\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:340`)

|     % | Samples | Location                                                                                                  |
| ----: | ------: | --------------------------------------------------------------------------------------------------------- |
| 35.9% |      23 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:360` |
| 18.8% |      12 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:60`  |
| 18.8% |      12 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:340` |
| 12.5% |       8 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:351` |
|  1.6% |       1 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:61`  |

##### `Dict` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:80`)

|      % | Samples | Location                                                                                        |
| -----: | ------: | ----------------------------------------------------------------------------------------------- |
| 100.0% |      62 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:80` |

##### `#write#81` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:185`)

|     % | Samples | Location                                                                                                  |
| ----: | ------: | --------------------------------------------------------------------------------------------------------- |
| 27.1% |      16 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:60`  |
| 27.1% |      16 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:200` |
| 10.2% |       6 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:197` |
|  8.5% |       5 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:73`  |
|  8.5% |       5 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:72`  |

##### `write(::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:340`)

|      % | Samples | Location                                                                                                  |
| -----: | ------: | --------------------------------------------------------------------------------------------------------- |
| 100.0% |      46 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:340` |

##### `write(::StructTypes.BoolType, ::Vector{UInt8}, ::Int64, ::Int64, ::Bool)` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:209`)

|      % | Samples | Location                                                                                                  |
| -----: | ------: | --------------------------------------------------------------------------------------------------------- |
| 100.0% |      32 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:209` |

##### `macro expansion` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:23`)

|      % | Samples | Location                                                                                                 |
| -----: | ------: | -------------------------------------------------------------------------------------------------------- |
| 100.0% |      30 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:23` |

##### `getvalue(::Type{JSON3.Array}, ::Base.CodeUnits{UInt8, String}, ::SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}, ::Int64, ::UInt64)` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:131`)

|     % | Samples | Location                                                                                                  |
| ----: | ------: | --------------------------------------------------------------------------------------------------------- |
| 10.7% |       3 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:131` |

##### `macro expansion` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:14`)

|      % | Samples | Location                                                                                                 |
| -----: | ------: | -------------------------------------------------------------------------------------------------------- |
| 100.0% |      28 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:14` |

##### `var\"#write#86\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.NumberType, ::Vector{UInt8}, ::Int64, ::Int64, ::Int64)` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:224`)

|     % | Samples | Location                                                                                                  |
| ----: | ------: | --------------------------------------------------------------------------------------------------------- |
| 72.0% |      18 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:236` |
| 24.0% |       6 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:224` |
|  4.0% |       1 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:231` |

##### `var\"#write#84\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.BoolType, ::Vector{UInt8}, ::Int64, ::Int64, ::Bool)` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:209`)

|     % | Samples | Location                                                                                                  |
| ----: | ------: | --------------------------------------------------------------------------------------------------------- |
| 56.0% |      14 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:209` |
| 40.0% |      10 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:215` |
|  4.0% |       1 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:210` |

##### `unescape(::JSON3.PointerString)` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/strings.jl:48`)

|     % | Samples | Location                                                                                                    |
| ----: | ------: | ----------------------------------------------------------------------------------------------------------- |
| 25.0% |       6 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/strings.jl:54`  |
| 20.8% |       5 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/strings.jl:116` |
|  8.3% |       2 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/strings.jl:60`  |
|  8.3% |       2 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/strings.jl:117` |
|  4.2% |       1 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/strings.jl:48`  |

#### Callers

Callers ranked by contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`)

|     % | Samples | Caller               | Location                                                                                                  |
| ----: | ------: | -------------------- | --------------------------------------------------------------------------------------------------------- |
| 99.9% |   7,047 | `[unknown function]` | `<unknown>`                                                                                               |
|  0.1% |       6 | `write`              | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:147` |
| <0.1% |       3 | `#write#79`          | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157` |

##### `_symbol` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:1`)

|      % | Samples | Caller     | Location                                                                                                  |
| -----: | ------: | ---------- | --------------------------------------------------------------------------------------------------------- |
| 100.0% |   6,977 | `getvalue` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:187` |

##### `indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64, ::Int64)` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`)

|      % | Samples | Caller      | Location                                                                                                  |
| -----: | ------: | ----------- | --------------------------------------------------------------------------------------------------------- |
| 100.0% |   2,294 | `#write#79` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157` |

##### `indexed_iterate` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`)

|     % | Samples | Caller                                                           | Location                                                                                                  |
| ----: | ------: | ---------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| 66.2% |     966 | `indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64)` | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`         |
| 29.7% |     434 | `#write#79`                                                      | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157` |
|  3.8% |      55 | `indexed_iterate`                                                | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`         |
|  0.3% |       5 | `#write#81`                                                      | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:185` |

##### `GenericMemory` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:588`)

|     % | Samples | Caller                                    | Location                                                                                           |
| ----: | ------: | ----------------------------------------- | -------------------------------------------------------------------------------------------------- |
| 62.8% |     893 | `Array`                                   | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:648`   |
| 37.0% |     526 | `rehash!(::Dict{Symbol, Int64}, ::Int64)` | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:138`   |
|  0.2% |       3 | `array_new_memory`                        | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:1101` |

##### `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` (`<unknown>`)

|     % | Samples | Caller               | Location                                                                                          |
| ----: | ------: | -------------------- | ------------------------------------------------------------------------------------------------- |
| 87.7% |     979 | `[unknown function]` | `<unknown>`                                                                                       |
| 10.4% |     116 | `MappingRF`          | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98` |
|  1.8% |      20 | `_foldl_impl`        | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:61` |
|  0.1% |       1 | `foldl_impl`         | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:46` |

##### `unsafe_load` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/pointer.jl:151`)

|      % | Samples | Caller        | Location                                                                                            |
| -----: | ------: | ------------- | --------------------------------------------------------------------------------------------------- |
| 100.0% |     565 | `unsafe_load` | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/pointer.jl:151` |

##### `ht_keyindex2_shorthash!(::Dict{Symbol, Int64}, ::Symbol)` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:267`)

|     % | Samples | Caller                                                                                                                             | Location                                                                                                 |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| 89.9% |     462 | `setindex!(::Dict{Symbol, Int64}, ::Int64, ::Symbol)`                                                                              | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:356`         |
| 10.1% |      52 | `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40` |

##### `+` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:87`)

|     % | Samples | Caller                                                                                                                                                                                                                           | Location                                                                                                   |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| 31.3% |     107 | `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})`                                                                                               | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40`   |
| 20.2% |      69 | `macro expansion`                                                                                                                                                                                                                | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:24`   |
| 12.0% |      41 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:218`   |
| 11.7% |      40 | `length_continued`                                                                                                                                                                                                               | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:559` |
|  4.7% |      16 | `unescape(::JSON3.PointerString)`                                                                                                                                                                                                | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/strings.jl:48` |

##### `BottomRF` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:84`)

|     % | Samples | Caller               | Location                                                                                          |
| ----: | ------: | -------------------- | ------------------------------------------------------------------------------------------------- |
| 99.0% |     291 | `[unknown function]` | `<unknown>`                                                                                       |
|  1.0% |       3 | `MappingRF`          | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98` |

##### `_setindex!` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:1025`)

|     % | Samples | Caller               | Location                                                                                           |
| ----: | ------: | -------------------- | -------------------------------------------------------------------------------------------------- |
| 95.9% |     258 | `setindex!`          | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:1020` |
|  4.1% |      11 | `[unknown function]` | `<unknown>`                                                                                        |

##### `_foldl_impl` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:61`)

|     % | Samples | Caller                                                                       | Location                                                                                          |
| ----: | ------: | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| 98.8% |     246 | `foldl_impl`                                                                 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:46` |
|  1.2% |       3 | `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` | `<unknown>`                                                                                       |

##### `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:218`)

|     % | Samples | Caller                                                                                                                                                                               | Location                                                                                                 |
| ----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------- |
| 98.6% |     217 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:218` |
|  1.4% |       3 | `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)`                         | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:87`  |

##### `[unknown function]` (`<unknown>`)

|     % | Samples | Caller                                                                       | Location                                                                                                  |
| ----: | ------: | ---------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| 51.2% |     111 | `#write#79`                                                                  | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157` |
| 30.0% |      65 | `_foldl_impl`                                                                | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:61`         |
| 13.4% |      29 | `#write#81`                                                                  | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:185` |
|  3.7% |       8 | `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` | `<unknown>`                                                                                               |
|  0.9% |       2 | `_foldl_impl`                                                                | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`         |

##### `getindex` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:975`)

|     % | Samples | Caller                                                                                                                                                                                                                           | Location                                                                                                  |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| 59.6% |     124 | `macro expansion`                                                                                                                                                                                                                | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:332` |
| 20.2% |      42 | `getindex`                                                                                                                                                                                                                       | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/subarray.jl:334`      |
| 14.9% |      31 | `var\"#write#98\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)`                                                          | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:340` |
|  4.3% |       9 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:218`  |
|  0.5% |       1 | `var\"#read!#9\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Array}, ::Bool)`  | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:312`  |

##### `unsafe_string` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:130`)

|      % | Samples | Caller   | Location                                                                                                   |
| -----: | ------: | -------- | ---------------------------------------------------------------------------------------------------------- |
| 100.0% |     143 | `String` | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:145` |

##### `iterate` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:75`)

|     % | Samples | Caller                                                                                                                       | Location                                                                                                  |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| 45.9% |      61 | `iterate`                                                                                                                    | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:75`  |
| 44.4% |      59 | `#write#79`                                                                                                                  | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157` |
|  9.0% |      12 | `iterate`                                                                                                                    | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/iterators.jl:697`     |
|  0.8% |       1 | `isempty(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:1127`   |

##### `checkbounds` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/basic.jl:212`)

|      % | Samples | Caller     | Location                                                                                                   |
| -----: | ------: | ---------- | ---------------------------------------------------------------------------------------------------------- |
| 100.0% |     133 | `codeunit` | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:166` |

##### `#write#81` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:200`)

|     % | Samples | Caller               | Location                                                                                                  |
| ----: | ------: | -------------------- | --------------------------------------------------------------------------------------------------------- |
| 99.2% |     119 | `[unknown function]` | `<unknown>`                                                                                               |
|  0.8% |       1 | `#write#79`          | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157` |

##### `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{String})` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:142`)

|     % | Samples | Caller                                                                                                                                                                      | Location                                                                                                |
| ----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| 95.7% |     112 | `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)`                | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:87` |
|  4.3% |       5 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:87` |

##### `length_continued` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/pointer.jl`)

|      % | Samples | Caller             | Location                                                                                                   |
| -----: | ------: | ------------------ | ---------------------------------------------------------------------------------------------------------- |
| 100.0% |     110 | `length(::String)` | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:540` |

##### `==` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/promotion.jl:641`)

|     % | Samples | Caller                                                                                                         | Location                                                                                                  |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| 60.4% |      55 | `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{String})` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:142`  |
| 22.0% |      20 | `ht_keyindex2_shorthash!(::Dict{Symbol, Int64}, ::Symbol)`                                                     | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:267`          |
| 12.1% |      11 | `isarray`                                                                                                      | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:61`  |
|  3.3% |       3 | `promoteeltype`                                                                                                | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:100` |
|  1.1% |       1 | `!=`                                                                                                           | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/operators.jl:320`     |

##### `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:87`)

|     % | Samples | Caller                                                                                                                                                                                                                           | Location                                                                                                 |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| 74.4% |      67 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)`                                                      | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:87`  |
| 24.4% |      22 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:218` |
|  1.1% |       1 | `var\"#read!#9\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Array}, ::Bool)`  | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:312` |

##### `getproperty` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base_compiler.jl:57`)

|     % | Samples | Caller                                                     | Location                                                                                         |
| ----: | ------: | ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 54.4% |      49 | `_setindex!`                                               | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:331` |
| 13.3% |      12 | `ht_keyindex2_shorthash!(::Dict{Symbol, Int64}, ::Symbol)` | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:267` |
| 11.1% |      10 | `_setindex!`                                               | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:327` |
|  7.8% |       7 | `_setindex!`                                               | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:325` |
|  5.6% |       5 | `_setindex!`                                               | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:328` |

##### `getvalue` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:215`)

|      % | Samples | Caller    | Location                                                                                                 |
| -----: | ------: | --------- | -------------------------------------------------------------------------------------------------------- |
| 100.0% |      88 | `iterate` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:81` |

##### `|` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:418`)

|     % | Samples | Caller          | Location                                                                                                 |
| ----: | ------: | --------------- | -------------------------------------------------------------------------------------------------------- |
| 92.3% |      72 | `string`        | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:88` |
|  6.4% |       5 | `promoteeltype` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:96` |
|  1.3% |       1 | `_shorthash7`   | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:122`         |

##### `macro expansion` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/simdloop.jl:75`)

|     % | Samples | Caller                                                                                                                                                                  | Location                                                                                                  |
| ----: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| 64.8% |      46 | `escapelength`                                                                                                                                                          | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:331` |
| 35.2% |      25 | `var\"#write#98\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:340` |

##### `unsafe_string` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:126`)

|      % | Samples | Caller     | Location                                                                                                  |
| -----: | ------: | ---------- | --------------------------------------------------------------------------------------------------------- |
| 100.0% |      71 | `getvalue` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:195` |

##### `setindex!(::Dict{Symbol, Int64}, ::Int64, ::Symbol)` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:356`)

|     % | Samples | Caller                                                                                                                             | Location                                                                                                  |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| 80.6% |      54 | `getvalue`                                                                                                                         | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:127` |
| 19.4% |      13 | `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40`  |

##### `var\"#write#98\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:340`)

|     % | Samples | Caller                                                                         | Location                                                                                                  |
| ----: | ------: | ------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------- |
| 64.1% |      41 | `write(::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:340` |
| 35.9% |      23 | `#write#79`                                                                    | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157` |

##### `Dict` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:80`)

|      % | Samples | Caller     | Location                                                                                                  |
| -----: | ------: | ---------- | --------------------------------------------------------------------------------------------------------- |
| 100.0% |      62 | `getvalue` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:126` |

##### `#write#81` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:185`)

|      % | Samples | Caller               | Location    |
| -----: | ------: | -------------------- | ----------- |
| 100.0% |      59 | `[unknown function]` | `<unknown>` |

##### `iterate` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl`)

|     % | Samples | Caller      | Location                                                                                                  |
| ----: | ------: | ----------- | --------------------------------------------------------------------------------------------------------- |
| 48.9% |      23 | `#write#79` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157` |
| 29.8% |      14 | `iterate`   | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:75`  |
| 21.3% |      10 | `iterate`   | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/iterators.jl:697`     |

##### `write(::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:340`)

|      % | Samples | Caller      | Location                                                                                                  |
| -----: | ------: | ----------- | --------------------------------------------------------------------------------------------------------- |
| 100.0% |      46 | `#write#79` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157` |

##### `getvalue` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl`)

|     % | Samples | Caller    | Location                                                                                                 |
| ----: | ------: | --------- | -------------------------------------------------------------------------------------------------------- |
| 71.1% |      27 | `iterate` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:81` |
| 28.9% |      11 | `iterate` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:78` |

##### `write(::StructTypes.BoolType, ::Vector{UInt8}, ::Int64, ::Int64, ::Bool)` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:209`)

|      % | Samples | Caller      | Location                                                                                                  |
| -----: | ------: | ----------- | --------------------------------------------------------------------------------------------------------- |
| 100.0% |      32 | `#write#79` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157` |

##### `macro expansion` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:23`)

|     % | Samples | Caller                                                                                                                                                                                                                           | Location                                                                                                 |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| 96.7% |      29 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:218` |
|  3.3% |       1 | `var\"#read!#9\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Array}, ::Bool)`  | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:312` |

##### `getvalue(::Type{JSON3.Array}, ::Base.CodeUnits{UInt8, String}, ::SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}, ::Int64, ::UInt64)` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:131`)

|     % | Samples | Caller       | Location                                                                                                  |
| ----: | ------: | ------------ | --------------------------------------------------------------------------------------------------------- |
| 85.7% |      24 | `getvalue`   | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:216` |
| 14.3% |       4 | `foldl_impl` | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:46`         |

##### `macro expansion` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:14`)

|     % | Samples | Caller                                                                                                                                                                                                                           | Location                                                                                                 |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| 89.3% |      25 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:218` |
| 10.7% |       3 | `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{String})`                                                                                                                   | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:142` |

##### `var\"#write#86\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.NumberType, ::Vector{UInt8}, ::Int64, ::Int64, ::Int64)` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:224`)

|     % | Samples | Caller                                                                        | Location                                                                                                  |
| ----: | ------: | ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| 80.0% |      20 | `write(::StructTypes.NumberType, ::Vector{UInt8}, ::Int64, ::Int64, ::Int64)` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:224` |
| 16.0% |       4 | `#write#79`                                                                   | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157` |
|  4.0% |       1 | `write`                                                                       | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:224` |

##### `var\"#write#84\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.BoolType, ::Vector{UInt8}, ::Int64, ::Int64, ::Bool)` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:209`)

|     % | Samples | Caller                                                                     | Location                                                                                                  |
| ----: | ------: | -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| 60.0% |      15 | `write(::StructTypes.BoolType, ::Vector{UInt8}, ::Int64, ::Int64, ::Bool)` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:209` |
| 40.0% |      10 | `#write#79`                                                                | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157` |

##### `unescape(::JSON3.PointerString)` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/strings.jl:48`)

|     % | Samples | Caller               | Location                                                                                                  |
| ----: | ------: | -------------------- | --------------------------------------------------------------------------------------------------------- |
| 87.5% |      21 | `getvalue`           | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:193` |
|  8.3% |       2 | `[unknown function]` | `<unknown>`                                                                                               |
|  4.2% |       1 | `foldl_impl`         | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:46`         |

##### `#defaultminimum##0` (`<unknown>`)

|      % | Samples | Caller               | Location    |
| -----: | ------: | -------------------- | ----------- |
| 100.0% |       1 | `[unknown function]` | `<unknown>` |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|     % | Samples | Function                                                           | Location                                                                                                               |
| ----: | ------: | ------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------- |
| 77.7% |  25,944 | `parse_workload`                                                   | `profile.jl:18`                                                                                                        |
| 77.7% |  25,944 | `macro expansion`                                                  | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/stdlib/v1.13/Profile/src/Profile.jl:60` |
| 77.7% |  25,944 | `capture_cpu`                                                      | `profile.jl:29`                                                                                                        |
| 77.7% |  25,944 | `[unknown function]`                                               | `<unknown>`                                                                                                            |
| 77.7% |  25,944 | `eval(::Module, ::Any)`                                            | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:489`                       |
| 77.7% |  25,944 | `include_string(::typeof(identity), ::Module, ::String, ::String)` | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/loading.jl:2989`                   |
| 77.7% |  25,944 | `_include(::Function, ::Module, ::String)`                         | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/loading.jl:3083`                   |
| 77.7% |  25,944 | `include(::Module, ::String)`                                      | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base.jl:309`                       |
| 77.7% |  25,944 | `exec_options(::Base.JLOptions)`                                   | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/client.jl:234`                     |
| 77.7% |  25,944 | `_start()`                                                         | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/client.jl:570`                     |
| 72.2% |  24,099 | `#write#58`                                                        | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:40`               |
| 53.8% |  17,966 | `#write#79`                                                        | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`              |
| 53.8% |  17,965 | `write`                                                            | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:147`              |
| 53.7% |  17,937 | `#write#81`                                                        | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:185`              |
| 22.3% |   7,436 | `(anonymous)`                                                      | `<unknown>`                                                                                                            |
| 20.9% |   6,977 | `_symbol`                                                          | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:1`                |
| 20.9% |   6,977 | `getvalue`                                                         | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:187`              |
| 18.4% |   6,129 | `foldl_impl`                                                       | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:46`                      |
| 18.4% |   6,129 | `mapfoldl_impl`                                                    | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:42`                      |
| 18.4% |   6,129 | `#mapfoldl#271`                                                    | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:173`                     |

#### Categories

##### Third-party

|     % | Samples | Function                                                                                                                                                                                                                         | Location                                                                                                  |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| 72.2% |  24,099 | `#write#58`                                                                                                                                                                                                                      | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:40`  |
| 53.8% |  17,966 | `#write#79`                                                                                                                                                                                                                      | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157` |
| 53.8% |  17,965 | `write`                                                                                                                                                                                                                          | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:147` |
| 53.7% |  17,937 | `#write#81`                                                                                                                                                                                                                      | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:185` |
| 20.9% |   6,977 | `_symbol`                                                                                                                                                                                                                        | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:1`   |
| 20.9% |   6,977 | `getvalue`                                                                                                                                                                                                                       | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:187` |
| 18.4% |   6,129 | `defaultminimum`                                                                                                                                                                                                                 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:12`  |
| 15.8% |   5,272 | `getvalue`                                                                                                                                                                                                                       | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:127` |
| 15.6% |   5,218 | `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})`                                                                                               | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40`  |
| 12.3% |   4,090 | `iterate`                                                                                                                                                                                                                        | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:81`  |
| 10.9% |   3,650 | `getvalue`                                                                                                                                                                                                                       | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:214` |
| 10.0% |   3,341 | `iterate`                                                                                                                                                                                                                        | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:78`  |
|  5.1% |   1,701 | `getindex`                                                                                                                                                                                                                       | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:163` |
|  4.3% |   1,427 | `write(::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)`                                                                                                                                                   | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:340` |
|  4.2% |   1,405 | `var\"#read#6\"(::Bool, ::Nothing, ::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.read), ::String)`                                                                                                       | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:30`   |
|  4.2% |   1,405 | `read`                                                                                                                                                                                                                           | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:30`   |
|  4.2% |   1,404 | `var\"#write#98\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)`                                                          | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:340` |
|  4.0% |   1,350 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)`                                             | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:218`  |
|  4.0% |   1,350 | `read!`                                                                                                                                                                                                                          | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:87`   |
|  4.0% |   1,349 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:218`  |

##### Standard library

|     % | Samples | Function                                                           | Location                                                                                                               |
| ----: | ------: | ------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------- |
| 77.7% |  25,944 | `macro expansion`                                                  | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/stdlib/v1.13/Profile/src/Profile.jl:60` |
| 77.7% |  25,944 | `eval(::Module, ::Any)`                                            | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:489`                       |
| 77.7% |  25,944 | `include_string(::typeof(identity), ::Module, ::String, ::String)` | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/loading.jl:2989`                   |
| 77.7% |  25,944 | `_include(::Function, ::Module, ::String)`                         | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/loading.jl:3083`                   |
| 77.7% |  25,944 | `include(::Module, ::String)`                                      | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base.jl:309`                       |
| 77.7% |  25,944 | `exec_options(::Base.JLOptions)`                                   | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/client.jl:234`                     |
| 77.7% |  25,944 | `_start()`                                                         | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/client.jl:570`                     |
| 18.4% |   6,129 | `foldl_impl`                                                       | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:46`                      |
| 18.4% |   6,129 | `mapfoldl_impl`                                                    | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:42`                      |
| 18.4% |   6,129 | `#mapfoldl#271`                                                    | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:173`                     |
| 18.4% |   6,129 | `mapfoldl`                                                         | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:173`                     |
| 18.4% |   6,129 | `#mapreduce#275`                                                   | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:306`                     |
| 18.4% |   6,129 | `mapreduce`                                                        | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:306`                     |
| 18.4% |   6,129 | `#sum#278`                                                         | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:535`                     |
| 18.4% |   6,129 | `sum`                                                              | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:535`                     |
| 18.4% |   6,129 | `_foldl_impl`                                                      | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:56`                      |
| 18.4% |   6,129 | `#sum#279`                                                         | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:564`                     |
| 18.4% |   6,129 | `sum`                                                              | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:564`                     |
| 18.3% |   6,119 | `MappingRF`                                                        | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98`                      |
| 18.3% |   6,115 | `_foldl_impl`                                                      | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`                      |

##### Unknown

|     % | Samples | Function      | Location    |
| ----: | ------: | ------------- | ----------- |
| 22.3% |   7,436 | `(anonymous)` | `<unknown>` |

##### Native

|     % | Samples | Function                                                                                                                                                                                | Location    |
| ----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 77.7% |  25,944 | `[unknown function]`                                                                                                                                                                    | `<unknown>` |
| 18.3% |   6,122 | `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})`                                                                                                            | `<unknown>` |
| 18.3% |   6,102 | `#defaultminimum##0`                                                                                                                                                                    | `<unknown>` |
| <0.1% |       6 | `(::JSON3.var\"#defaultminimum##0#defaultminimum##1\"{JSON3.Array{Int64, Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}}})(::Int64)` | `<unknown>` |

#### Callees

Callees ranked by contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `parse_workload` (`profile.jl:18`)

|     % | Samples | Callee               | Location                                                                                                   |
| ----: | ------: | -------------------- | ---------------------------------------------------------------------------------------------------------- |
| 92.9% |  24,100 | `[unknown function]` | `<unknown>`                                                                                                |
|  5.4% |   1,405 | `read`               | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:30`    |
|  1.5% |     394 | `length(::String)`   | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:540` |

##### `macro expansion` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/stdlib/v1.13/Profile/src/Profile.jl:60`)

|      % | Samples | Callee           | Location        |
| -----: | ------: | ---------------- | --------------- |
| 100.0% |  25,944 | `parse_workload` | `profile.jl:18` |

##### `capture_cpu` (`profile.jl:29`)

|      % | Samples | Callee            | Location                                                                                                               |
| -----: | ------: | ----------------- | ---------------------------------------------------------------------------------------------------------------------- |
| 100.0% |  25,944 | `macro expansion` | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/stdlib/v1.13/Profile/src/Profile.jl:60` |

##### `[unknown function]` (`<unknown>`)

|      % | Samples | Callee        | Location                                                                                                  |
| -----: | ------: | ------------- | --------------------------------------------------------------------------------------------------------- |
| 100.0% |  25,944 | `capture_cpu` | `profile.jl:29`                                                                                           |
|  92.9% |  24,099 | `#write#58`   | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:40`  |
|  69.1% |  17,937 | `#write#81`   | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:185` |
|  66.2% |  17,180 | `#write#79`   | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157` |
|  23.6% |   6,115 | `sum`         | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:535`        |

##### `eval(::Module, ::Any)` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:489`)

|      % | Samples | Callee               | Location    |
| -----: | ------: | -------------------- | ----------- |
| 100.0% |  25,944 | `[unknown function]` | `<unknown>` |

##### `include_string(::typeof(identity), ::Module, ::String, ::String)` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/loading.jl:2989`)

|      % | Samples | Callee                  | Location                                                                                         |
| -----: | ------: | ----------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% |  25,944 | `eval(::Module, ::Any)` | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:489` |

##### `_include(::Function, ::Module, ::String)` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/loading.jl:3083`)

|      % | Samples | Callee                                                             | Location                                                                                             |
| -----: | ------: | ------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------- |
| 100.0% |  25,944 | `include_string(::typeof(identity), ::Module, ::String, ::String)` | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/loading.jl:2989` |

##### `include(::Module, ::String)` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base.jl:309`)

|      % | Samples | Callee                                     | Location                                                                                             |
| -----: | ------: | ------------------------------------------ | ---------------------------------------------------------------------------------------------------- |
| 100.0% |  25,944 | `_include(::Function, ::Module, ::String)` | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/loading.jl:3083` |

##### `exec_options(::Base.JLOptions)` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/client.jl:234`)

|      % | Samples | Callee                        | Location                                                                                         |
| -----: | ------: | ----------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% |  25,944 | `include(::Module, ::String)` | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base.jl:309` |

##### `_start()` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/client.jl:570`)

|      % | Samples | Callee                           | Location                                                                                           |
| -----: | ------: | -------------------------------- | -------------------------------------------------------------------------------------------------- |
| 100.0% |  25,944 | `exec_options(::Base.JLOptions)` | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/client.jl:234` |

##### `#write#58` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:40`)

|     % | Samples | Callee                    | Location                                                                                                  |
| ----: | ------: | ------------------------- | --------------------------------------------------------------------------------------------------------- |
| 74.5% |  17,965 | `write`                   | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:147` |
| 25.4% |   6,129 | `defaultminimum`          | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:12`  |
| <0.1% |       1 | `String(::Vector{UInt8})` | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:66` |

##### `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`)

|     % | Samples | Callee                                                                         | Location                                                                                                  |
| ----: | ------: | ------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------- |
| 99.9% |  17,944 | `[unknown function]`                                                           | `<unknown>`                                                                                               |
| 12.8% |   2,294 | `indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64, ::Int64)`      | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`         |
| 11.3% |   2,024 | `iterate`                                                                      | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:81`  |
|  9.3% |   1,679 | `iterate`                                                                      | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:78`  |
|  7.9% |   1,427 | `write(::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:340` |

##### `write` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:147`)

|      % | Samples | Callee      | Location                                                                                                  |
| -----: | ------: | ----------- | --------------------------------------------------------------------------------------------------------- |
| 100.0% |  17,964 | `#write#79` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157` |

##### `#write#81` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:185`)

|     % | Samples | Callee               | Location                                                                                                      |
| ----: | ------: | -------------------- | ------------------------------------------------------------------------------------------------------------- |
| 95.9% |  17,197 | `[unknown function]` | `<unknown>`                                                                                                   |
|  2.9% |     519 | `isassigned`         | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:1641` |
|  2.3% |     410 | `getindex`           | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:163`     |
| <0.1% |       8 | `indexed_iterate`    | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`             |
| <0.1% |       3 | `isassigned`         | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:1642` |

##### `getvalue` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:187`)

|      % | Samples | Callee    | Location                                                                                                |
| -----: | ------: | --------- | ------------------------------------------------------------------------------------------------------- |
| 100.0% |   6,977 | `_symbol` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:1` |

##### `foldl_impl` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:46`)

|      % | Samples | Callee                                                                                                                                                    | Location                                                                                                  |
| -----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| 100.0% |   6,129 | `_foldl_impl`                                                                                                                                             | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:56`         |
|  99.8% |   6,115 | `_foldl_impl`                                                                                                                                             | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`         |
|  88.9% |   5,451 | `_foldl_impl`                                                                                                                                             | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:61`         |
|   0.1% |       4 | `getvalue(::Type{JSON3.Array}, ::Base.CodeUnits{UInt8, String}, ::SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}, ::Int64, ::UInt64)` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:131` |
|  <0.1% |       1 | `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})`                                                                              | `<unknown>`                                                                                               |

##### `mapfoldl_impl` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:42`)

|      % | Samples | Callee       | Location                                                                                          |
| -----: | ------: | ------------ | ------------------------------------------------------------------------------------------------- |
| 100.0% |   6,129 | `foldl_impl` | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:46` |

##### `#mapfoldl#271` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:173`)

|      % | Samples | Callee          | Location                                                                                          |
| -----: | ------: | --------------- | ------------------------------------------------------------------------------------------------- |
| 100.0% |   6,129 | `mapfoldl_impl` | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:42` |

##### `defaultminimum` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:12`)

|      % | Samples | Callee                                                                                                                       | Location                                                                                                |
| -----: | ------: | ---------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| 100.0% |   6,129 | `sum`                                                                                                                        | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:564`      |
|   0.9% |      56 | `isempty(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:1127` |

##### `mapfoldl` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:173`)

|      % | Samples | Callee          | Location                                                                                           |
| -----: | ------: | --------------- | -------------------------------------------------------------------------------------------------- |
| 100.0% |   6,129 | `#mapfoldl#271` | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:173` |

##### `#mapreduce#275` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:306`)

|      % | Samples | Callee     | Location                                                                                           |
| -----: | ------: | ---------- | -------------------------------------------------------------------------------------------------- |
| 100.0% |   6,129 | `mapfoldl` | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:173` |

##### `mapreduce` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:306`)

|      % | Samples | Callee           | Location                                                                                           |
| -----: | ------: | ---------------- | -------------------------------------------------------------------------------------------------- |
| 100.0% |   6,129 | `#mapreduce#275` | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:306` |

##### `#sum#278` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:535`)

|      % | Samples | Callee      | Location                                                                                           |
| -----: | ------: | ----------- | -------------------------------------------------------------------------------------------------- |
| 100.0% |   6,129 | `mapreduce` | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:306` |

##### `sum` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:535`)

|      % | Samples | Callee     | Location                                                                                           |
| -----: | ------: | ---------- | -------------------------------------------------------------------------------------------------- |
| 100.0% |   6,129 | `#sum#278` | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:535` |

##### `_foldl_impl` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:56`)

|     % | Samples | Callee               | Location                                                                                                 |
| ----: | ------: | -------------------- | -------------------------------------------------------------------------------------------------------- |
| 99.8% |   6,117 | `MappingRF`          | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98`        |
|  0.1% |       5 | `[unknown function]` | `<unknown>`                                                                                              |
|  0.1% |       5 | `iterate`            | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/iterators.jl:697`    |
| <0.1% |       1 | `iterate`            | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:75` |

##### `#sum#279` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:564`)

|      % | Samples | Callee | Location                                                                                           |
| -----: | ------: | ------ | -------------------------------------------------------------------------------------------------- |
| 100.0% |   6,129 | `sum`  | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:535` |

##### `sum` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:564`)

|      % | Samples | Callee     | Location                                                                                           |
| -----: | ------: | ---------- | -------------------------------------------------------------------------------------------------- |
| 100.0% |   6,129 | `#sum#279` | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:564` |

##### `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` (`<unknown>`)

|      % | Samples | Callee                                                                                                                                    | Location                                                                                                 |
| -----: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| 100.0% |   6,120 | `[unknown function]`                                                                                                                      | `<unknown>`                                                                                              |
|   0.1% |       9 | `defaultminimum`                                                                                                                          | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:6`  |
|   0.1% |       6 | `defaultminimum(::JSON3.Array{Int64, Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:11` |
|   0.1% |       5 | `+(::UInt64, ::Int64)`                                                                                                                    | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:1054`         |
|   0.1% |       4 | `+(::UInt64, ::UInt64)`                                                                                                                   | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:87`           |

##### `MappingRF` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98`)

|      % | Samples | Callee                                                                                                                                                                                  | Location                                                                                          |
| -----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| 100.0% |   6,119 | `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})`                                                                                                            | `<unknown>`                                                                                       |
|   0.4% |      26 | `BottomRF`                                                                                                                                                                              | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:83` |
|   0.1% |       6 | `(::JSON3.var\"#defaultminimum##0#defaultminimum##1\"{JSON3.Array{Int64, Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}}})(::Int64)` | `<unknown>`                                                                                       |
|  <0.1% |       3 | `BottomRF`                                                                                                                                                                              | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:84` |

##### `_foldl_impl` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`)

|     % | Samples | Callee               | Location                                                                                          |
| ----: | ------: | -------------------- | ------------------------------------------------------------------------------------------------- |
| 99.9% |   6,106 | `[unknown function]` | `<unknown>`                                                                                       |
| <0.1% |       2 | `iterate`            | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/range.jl:924` |
| <0.1% |       2 | `MappingRF`          | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98` |

##### `#defaultminimum##0` (`<unknown>`)

|     % | Samples | Callee           | Location                                                                                                      |
| ----: | ------: | ---------------- | ------------------------------------------------------------------------------------------------------------- |
| 90.0% |   5,492 | `defaultminimum` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:12`      |
|  7.1% |     431 | `isassigned`     | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:1641` |
|  5.6% |     341 | `getindex`       | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:163`     |
| <0.1% |       1 | `getindex`       | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:161`     |
| <0.1% |       1 | `isassigned`     | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:1642` |

##### `getvalue` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:127`)

|     % | Samples | Callee                                                                                                                             | Location                                                                                                 |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| 98.9% |   5,214 | `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40` |
|  1.0% |      54 | `setindex!(::Dict{Symbol, Int64}, ::Int64, ::Symbol)`                                                                              | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:356`         |

##### `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40`)

|     % | Samples | Callee                                                     | Location                                                                                                  |
| ----: | ------: | ---------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| 70.2% |   3,661 | `getvalue`                                                 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:187` |
| 25.5% |   1,332 | `setindex!(::Dict{Symbol, Int64}, ::Int64, ::Symbol)`      | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:356`          |
|  2.1% |     107 | `+`                                                        | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:87`            |
|  1.0% |      52 | `ht_keyindex2_shorthash!(::Dict{Symbol, Int64}, ::Symbol)` | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:267`          |
|  0.7% |      35 | `getindex`                                                 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/subarray.jl:334`      |

##### `iterate` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:81`)

|     % | Samples | Callee     | Location                                                                                                  |
| ----: | ------: | ---------- | --------------------------------------------------------------------------------------------------------- |
| 89.2% |   3,650 | `getvalue` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:214` |
|  5.7% |     232 | `getvalue` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:218` |
|  2.2% |      88 | `getvalue` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:215` |
|  1.6% |      67 | `getvalue` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:216` |
|  0.7% |      27 | `getvalue` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl`     |

##### `getvalue` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:214`)

|     % | Samples | Callee     | Location                                                                                                  |
| ----: | ------: | ---------- | --------------------------------------------------------------------------------------------------------- |
| 98.2% |   3,584 | `getvalue` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:127` |
|  1.8% |      66 | `getvalue` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:126` |

##### `iterate` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:78`)

|     % | Samples | Callee     | Location                                                                                                  |
| ----: | ------: | ---------- | --------------------------------------------------------------------------------------------------------- |
| 99.2% |   3,315 | `getvalue` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:187` |
|  0.8% |      26 | `getvalue` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl`     |

##### `getindex` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:163`)

|     % | Samples | Callee     | Location                                                                                                  |
| ----: | ------: | ---------- | --------------------------------------------------------------------------------------------------------- |
| 99.2% |   1,688 | `getvalue` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:127` |
|  0.8% |      13 | `getvalue` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:126` |

##### `write(::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:340`)

|     % | Samples | Callee                                                                                                                                                                  | Location                                                                                                  |
| ----: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| 96.8% |   1,381 | `var\"#write#98\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:340` |

##### `var\"#read#6\"(::Bool, ::Nothing, ::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.read), ::String)` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:30`)

|     % | Samples | Callee                                                                         | Location                                                                                                 |
| ----: | ------: | ------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------- |
| 96.1% |   1,350 | `read!`                                                                        | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:87`  |
|  3.8% |      53 | `Array`                                                                        | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:648`         |
|  0.1% |       2 | `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, Vector{UInt64}})` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40` |

##### `read` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:30`)

|      % | Samples | Callee                                                                                                                     | Location                                                                                                |
| -----: | ------: | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| 100.0% |   1,405 | `var\"#read#6\"(::Bool, ::Nothing, ::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.read), ::String)` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:30` |

##### `var\"#write#98\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:340`)

|     % | Samples | Callee                                        | Location                                                                                                  |
| ----: | ------: | --------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| 59.6% |     837 | `realloc!(::Vector{UInt8}, ::Int64, ::Int64)` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:51`  |
| 15.3% |     215 | `escapelength`                                | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:331` |
|  8.4% |     118 | `macro expansion`                             | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/simdloop.jl:77`       |
|  3.3% |      47 | `setindex!`                                   | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:1020`        |
|  2.2% |      31 | `getindex`                                    | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:975`    |

##### `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:218`)

|     % | Samples | Callee                                                                                                                                                                                                                           | Location                                                                                                 |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| 99.9% |   1,349 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:218` |
|  0.7% |      10 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)`                                                      | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:87`  |

##### `read!` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:87`)

|     % | Samples | Callee                                                                                                                                                                               | Location                                                                                                 |
| ----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------- |
| 99.9% |   1,349 | `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)`                         | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:87`  |
|  0.1% |       1 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:218` |

##### `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:218`)

|     % | Samples | Callee                                                                                                                                                                      | Location                                                                                                 |
| ----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| 99.9% |   1,348 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:87`  |
| 14.4% |     194 | `getbyte`                                                                                                                                                                   | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:8`  |
|  8.5% |     114 | `macro expansion`                                                                                                                                                           | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:29` |
|  4.7% |      63 | `macro expansion`                                                                                                                                                           | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:24` |
|  3.9% |      52 | `string`                                                                                                                                                                    | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:88` |

##### `(::JSON3.var\"#defaultminimum##0#defaultminimum##1\"{JSON3.Array{Int64, Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}}})(::Int64)` (`<unknown>`)

|     % | Samples | Callee       | Location                                                                                                      |
| ----: | ------: | ------------ | ------------------------------------------------------------------------------------------------------------- |
| 83.3% |       5 | `isassigned` | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:1640` |
| 16.7% |       1 | `isassigned` | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:1642` |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame.

Common call stack: `#write#58` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:40`) ← `[unknown function]` ← `parse_workload` (`profile.jl:18`) ← `macro expansion` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/stdlib/v1.13/Profile/src/Profile.jl:60`) ← `capture_cpu` (`profile.jl:29`) ← `[unknown function]` ← `eval(::Module, ::Any)` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:489`) ← `include_string(::typeof(identity), ::Module, ::String, ::String)` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/loading.jl:2989`) ← `_include(::Function, ::Module, ::String)` (3083) ← `include(::Module, ::String)` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base.jl:309`) ← `exec_options(::Base.JLOptions)` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/client.jl:234`) ← `_start()` (570)

|    % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ---: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 9.9% |   3,302 | `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:185`) ← `[unknown function]` ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 5.2% |   1,744 | `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:185`) ← `[unknown function]` ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 3.8% |   1,268 | `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:185`) ← `[unknown function]` ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 3.3% |   1,088 | `indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64, ::Int64)` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`) ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:185`) ← `[unknown function]` ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 2.5% |     825 | `_symbol` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:1`) ← `getvalue` (187) ← `iterate` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:78`) ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:185`) ← `[unknown function]` ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 2.2% |     727 | `_symbol` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:1`) ← `getvalue` (187) ← `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40`) ← `getvalue` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:127`) ← `getvalue` (214) ← `iterate` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:81`) ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:185`) ← `[unknown function]` ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 2.1% |     708 | `_symbol` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:1`) ← `getvalue` (187) ← `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40`) ← `getvalue` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:127`) ← `getvalue` (214) ← `iterate` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:81`) ← `iterate` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/iterators.jl:697`) ← `_foldl_impl` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:61`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:12`) ← `#defaultminimum##0` ← `[unknown function]` ← `_foldl_impl` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `[unknown function]` ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `MappingRF` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98`) ← `_foldl_impl` (56) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:12`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 2.0% |     656 | `_symbol` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:1`) ← `getvalue` (187) ← `iterate` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:78`) ← `iterate` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/iterators.jl:697`) ← `_foldl_impl` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:61`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `[unknown function]` ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `[unknown function]` ← `_foldl_impl` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:61`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:12`) ← `#defaultminimum##0` ← `[unknown function]` ← `_foldl_impl` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `[unknown function]` ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `MappingRF` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98`) ← `_foldl_impl` (56) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:12`)                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 1.8% |     600 | `indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64, ::Int64)` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`) ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:185`) ← `[unknown function]` ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 1.4% |     465 | `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `[unknown function]` ← `_foldl_impl` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:61`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `[unknown function]` ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `[unknown function]` ← `_foldl_impl` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:61`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:12`) ← `#defaultminimum##0` ← `[unknown function]` ← `_foldl_impl` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `[unknown function]` ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `MappingRF` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98`) ← `_foldl_impl` (56) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:12`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 1.4% |     460 | `_symbol` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:1`) ← `getvalue` (187) ← `iterate` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:78`) ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:185`) ← `[unknown function]` ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 1.3% |     449 | `indexed_iterate` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`) ← `indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64)` (163) ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:185`) ← `[unknown function]` ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 1.2% |     410 | `GenericMemory` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:588`) ← `Array` (648) ← `Array` (661) ← `zeros` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:626`) ← `zeros` (622) ← `realloc!(::Vector{UInt8}, ::Int64, ::Int64)` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:51`) ← `var\"#write#98\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` (340) ← `write(::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` (340) ← `#write#79` (157) ← `[unknown function]` ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:185`) ← `[unknown function]` ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 1.2% |     398 | `_symbol` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:1`) ← `getvalue` (187) ← `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40`) ← `getvalue` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:127`) ← `getvalue` (214) ← `iterate` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:81`) ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:185`) ← `[unknown function]` ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 1.2% |     392 | `indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64, ::Int64)` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`) ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:185`) ← `[unknown function]` ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 1.1% |     358 | `_symbol` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:1`) ← `getvalue` (187) ← `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40`) ← `getvalue` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:127`) ← `getvalue` (214) ← `iterate` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:81`) ← `iterate` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/iterators.jl:697`) ← `_foldl_impl` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:61`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `[unknown function]` ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `[unknown function]` ← `_foldl_impl` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:61`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:12`) ← `#defaultminimum##0` ← `[unknown function]` ← `_foldl_impl` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `[unknown function]` ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `MappingRF` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98`) ← `_foldl_impl` (56) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:12`)                                                           |
| 1.0% |     326 | `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:185`) ← `[unknown function]` ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:185`) ← `[unknown function]` ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 1.0% |     323 | `_symbol` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:1`) ← `getvalue` (187) ← `iterate` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:78`) ← `iterate` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/iterators.jl:697`) ← `_foldl_impl` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:61`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `[unknown function]` ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `[unknown function]` ← `_foldl_impl` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:61`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `[unknown function]` ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `[unknown function]` ← `_foldl_impl` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:61`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:12`) ← `#defaultminimum##0` ← `[unknown function]` ← `_foldl_impl` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `[unknown function]` ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `MappingRF` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98`) ← `_foldl_impl` (56) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:12`) |
| 0.9% |     306 | `_symbol` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:1`) ← `getvalue` (187) ← `iterate` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:78`) ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:185`) ← `[unknown function]` ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 0.9% |     287 | `_symbol` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:1`) ← `getvalue` (187) ← `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40`) ← `getvalue` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:127`) ← `getindex` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:163`) ← `isassigned` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:1641`) ← `#write#81` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:185`) ← `[unknown function]` ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |

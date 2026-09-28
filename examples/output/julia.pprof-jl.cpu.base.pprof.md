# Sampling profile

Collected 33,701 samples.

| Category         |     % | Samples |
| ---------------- | ----: | ------: |
| Third-party      | 45.5% |  15,333 |
| Standard library | 26.5% |   8,936 |
| Unknown          | 23.6% |   7,943 |
| Native           |  4.2% |   1,403 |
| Ours             |  0.3% |      86 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|     % | Samples | Function                                                                                                                                                                                                                         | Location                                                                                                  |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| 23.6% |   7,943 | `(anonymous)`                                                                                                                                                                                                                    | `<unknown>`                                                                                               |
| 20.8% |   7,015 | `_symbol`                                                                                                                                                                                                                        | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`   |
| 20.4% |   6,881 | `#write#79`                                                                                                                                                                                                                      | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157` |
|  6.3% |   2,127 | `indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64, ::Int64)`                                                                                                                                                        | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`         |
|  4.4% |   1,492 | `indexed_iterate`                                                                                                                                                                                                                | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`         |
|  3.3% |   1,127 | `GenericMemory`                                                                                                                                                                                                                  | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:588`          |
|  3.3% |   1,108 | `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})`                                                                                                                                                     | `<unknown>`                                                                                               |
|  1.7% |     558 | `unsafe_load`                                                                                                                                                                                                                    | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/pointer.jl:151`       |
|  1.6% |     532 | `ht_keyindex2_shorthash!(::Dict{Symbol, Int64}, ::Symbol)`                                                                                                                                                                       | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:267`          |
|  1.0% |     323 | `+`                                                                                                                                                                                                                              | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:87`            |
|  0.9% |     291 | `[unknown function]`                                                                                                                                                                                                             | `<unknown>`                                                                                               |
|  0.8% |     286 | `BottomRF`                                                                                                                                                                                                                       | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:84`         |
|  0.8% |     276 | `_foldl_impl`                                                                                                                                                                                                                    | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`         |
|  0.8% |     273 | `iterate`                                                                                                                                                                                                                        | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:75`  |
|  0.7% |     229 | `_setindex!`                                                                                                                                                                                                                     | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:1025`        |
|  0.6% |     208 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:218`  |
|  0.5% |     164 | `getindex`                                                                                                                                                                                                                       | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:975`    |
|  0.4% |     150 | `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{String})`                                                                                                                   | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:142`  |
|  0.4% |     138 | `checkbounds`                                                                                                                                                                                                                    | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/basic.jl:212` |
|  0.4% |     137 | `#write#81`                                                                                                                                                                                                                      | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`  |

#### Categories

##### Third-party

|     % | Samples | Function                                                                                                                                                                                                                         | Location                                                                                                   |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| 20.8% |   7,015 | `_symbol`                                                                                                                                                                                                                        | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`    |
| 20.4% |   6,881 | `#write#79`                                                                                                                                                                                                                      | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`  |
|  0.8% |     273 | `iterate`                                                                                                                                                                                                                        | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:75`   |
|  0.6% |     208 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:218`   |
|  0.4% |     150 | `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{String})`                                                                                                                   | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:142`   |
|  0.3% |     112 | `#write#81`                                                                                                                                                                                                                      | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:200`  |
|  0.3% |      89 | `getvalue`                                                                                                                                                                                                                       | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:215`  |
|  0.2% |      78 | `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)`                                                                     | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:87`    |
|  0.2% |      69 | `var\"#write#98\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)`                                                          | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:340`  |
|  0.1% |      47 | `iterate`                                                                                                                                                                                                                        | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl`      |
|  0.1% |      36 | `write(::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)`                                                                                                                                                   | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:340`  |
|  0.1% |      35 | `getvalue`                                                                                                                                                                                                                       | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl`      |
|  0.1% |      34 | `write(::StructTypes.BoolType, ::Vector{UInt8}, ::Int64, ::Int64, ::Bool)`                                                                                                                                                       | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:209`  |
|  0.1% |      29 | `macro expansion`                                                                                                                                                                                                                | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:14`   |
|  0.1% |      26 | `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})`                                                                                               | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40`   |
|  0.1% |      26 | `var\"#write#86\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.NumberType, ::Vector{UInt8}, ::Int64, ::Int64, ::Int64)`                                                           | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:224`  |
|  0.1% |      21 | `macro expansion`                                                                                                                                                                                                                | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:23`   |
|  0.1% |      19 | `getvalue`                                                                                                                                                                                                                       | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:213`  |
|  0.1% |      19 | `unescape(::JSON3.PointerString)`                                                                                                                                                                                                | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/strings.jl:48` |
| <0.1% |      16 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)`                                                      | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:87`    |

##### Standard library

|    % | Samples | Function                                                                  | Location                                                                                                   |
| ---: | ------: | ------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| 6.3% |   2,127 | `indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64, ::Int64)` | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`          |
| 4.4% |   1,492 | `indexed_iterate`                                                         | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`          |
| 3.3% |   1,127 | `GenericMemory`                                                           | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:588`           |
| 1.7% |     558 | `unsafe_load`                                                             | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/pointer.jl:151`        |
| 1.6% |     532 | `ht_keyindex2_shorthash!(::Dict{Symbol, Int64}, ::Symbol)`                | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:267`           |
| 1.0% |     323 | `+`                                                                       | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:87`             |
| 0.8% |     286 | `BottomRF`                                                                | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:84`          |
| 0.8% |     276 | `_foldl_impl`                                                             | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`          |
| 0.7% |     229 | `_setindex!`                                                              | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:1025`         |
| 0.5% |     164 | `getindex`                                                                | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:975`     |
| 0.4% |     138 | `checkbounds`                                                             | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/basic.jl:212`  |
| 0.4% |     137 | `#write#81`                                                               | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`   |
| 0.4% |     133 | `unsafe_string`                                                           | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:130` |
| 0.4% |     120 | `length_continued`                                                        | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/pointer.jl`            |
| 0.3% |     104 | `unsafe_string`                                                           | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:126` |
| 0.3% |     100 | `==`                                                                      | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/promotion.jl:641`      |
| 0.3% |      92 | `getproperty`                                                             | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base_compiler.jl:57`   |
| 0.3% |      88 | `Dict`                                                                    | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:80`            |
| 0.2% |      84 | `setindex!(::Dict{Symbol, Int64}, ::Int64, ::Symbol)`                     | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:356`           |
| 0.2% |      74 | `\|`                                                                      | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:418`            |

##### Unknown

|     % | Samples | Function      | Location    |
| ----: | ------: | ------------- | ----------- |
| 23.6% |   7,943 | `(anonymous)` | `<unknown>` |

##### Native

|     % | Samples | Function                                                                                                                                                                                | Location    |
| ----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
|  3.3% |   1,108 | `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})`                                                                                                            | `<unknown>` |
|  0.9% |     291 | `[unknown function]`                                                                                                                                                                    | `<unknown>` |
| <0.1% |       3 | `#defaultminimum##0`                                                                                                                                                                    | `<unknown>` |
| <0.1% |       1 | `(::JSON3.var\"#defaultminimum##0#defaultminimum##1\"{JSON3.Array{Int64, Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}}})(::Int64)` | `<unknown>` |

#### Lines

Lines ranked by contribution to each function's self samples.

##### `_symbol` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`)

|      % | Samples | Location                                                                                                |
| -----: | ------: | ------------------------------------------------------------------------------------------------------- |
| 100.0% |   7,015 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:1` |

##### `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`)

|     % | Samples | Location                                                                                                  |
| ----: | ------: | --------------------------------------------------------------------------------------------------------- |
| 60.0% |   4,130 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157` |
| 20.8% |   1,432 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:60`  |
|  7.7% |     527 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:73`  |
|  4.5% |     307 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:72`  |
|  4.1% |     284 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:155` |

##### `indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64, ::Int64)` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`)

|      % | Samples | Location                                                                                          |
| -----: | ------: | ------------------------------------------------------------------------------------------------- |
| 100.0% |   2,127 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163` |

##### `indexed_iterate` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`)

|      % | Samples | Location                                                                                          |
| -----: | ------: | ------------------------------------------------------------------------------------------------- |
| 100.0% |   1,492 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163` |

##### `GenericMemory` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:588`)

|      % | Samples | Location                                                                                         |
| -----: | ------: | ------------------------------------------------------------------------------------------------ |
| 100.0% |   1,127 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:588` |

##### `unsafe_load` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/pointer.jl:151`)

|      % | Samples | Location                                                                                            |
| -----: | ------: | --------------------------------------------------------------------------------------------------- |
| 100.0% |     558 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/pointer.jl:151` |

##### `ht_keyindex2_shorthash!(::Dict{Symbol, Int64}, ::Symbol)` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:267`)

|     % | Samples | Location                                                                                         |
| ----: | ------: | ------------------------------------------------------------------------------------------------ |
| 60.9% |     324 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:291` |
| 18.0% |      96 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:282` |
|  3.8% |      20 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:281` |
|  2.1% |      11 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:267` |
|  1.5% |       8 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:303` |

##### `+` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:87`)

|      % | Samples | Location                                                                                       |
| -----: | ------: | ---------------------------------------------------------------------------------------------- |
| 100.0% |     323 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:87` |

##### `[unknown function]` (`<unknown>`)

|     % | Samples | Location |
| ----: | ------: | -------- |
| 61.9% |     180 | 147      |
| 33.7% |      98 | 98       |
|  2.1% |       6 | 11       |
|  2.1% |       6 | 181      |
|  0.3% |       1 | 1020     |

##### `BottomRF` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:84`)

|      % | Samples | Location                                                                                          |
| -----: | ------: | ------------------------------------------------------------------------------------------------- |
| 100.0% |     286 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:84` |

##### `_foldl_impl` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`)

|     % | Samples | Location                                                                                          |
| ----: | ------: | ------------------------------------------------------------------------------------------------- |
| 89.9% |     248 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60` |
|  1.8% |       5 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:56` |
|  1.1% |       3 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:51` |

##### `iterate` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:75`)

|      % | Samples | Location                                                                                                 |
| -----: | ------: | -------------------------------------------------------------------------------------------------------- |
| 100.0% |     273 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:75` |

##### `_setindex!` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:1025`)

|      % | Samples | Location                                                                                           |
| -----: | ------: | -------------------------------------------------------------------------------------------------- |
| 100.0% |     229 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:1025` |

##### `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:218`)

|     % | Samples | Location                                                                                                 |
| ----: | ------: | -------------------------------------------------------------------------------------------------------- |
| 72.6% |     151 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:248` |
|  8.2% |      17 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:298` |
|  4.3% |       9 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:268` |
|  4.3% |       9 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:247` |
|  2.9% |       6 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:284` |

##### `getindex` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:975`)

|      % | Samples | Location                                                                                               |
| -----: | ------: | ------------------------------------------------------------------------------------------------------ |
| 100.0% |     164 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:975` |

##### `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{String})` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:142`)

|     % | Samples | Location                                                                                                 |
| ----: | ------: | -------------------------------------------------------------------------------------------------------- |
| 54.7% |      82 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:155` |
|  4.0% |       6 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:167` |
|  2.7% |       4 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:142` |
|  0.7% |       1 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:77`  |
|  0.7% |       1 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:149` |

##### `checkbounds` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/basic.jl:212`)

|      % | Samples | Location                                                                                                  |
| -----: | ------: | --------------------------------------------------------------------------------------------------------- |
| 100.0% |     138 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/basic.jl:212` |

##### `#write#81` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`)

|     % | Samples | Location                                                                                                     |
| ----: | ------: | ------------------------------------------------------------------------------------------------------------ |
| 61.3% |      84 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:187` |
| 10.9% |      15 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:60`  |
|  7.3% |      10 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:200` |
|  7.3% |      10 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:73`  |
|  4.4% |       6 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:72`  |

##### `unsafe_string` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:130`)

|      % | Samples | Location                                                                                                   |
| -----: | ------: | ---------------------------------------------------------------------------------------------------------- |
| 100.0% |     133 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:130` |

##### `#write#81` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:200`)

|     % | Samples | Location                                                                                                  |
| ----: | ------: | --------------------------------------------------------------------------------------------------------- |
| 54.5% |      61 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:200` |
| 28.6% |      32 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:60`  |
| 10.7% |      12 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:73`  |
|  5.4% |       6 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:72`  |
|  0.9% |       1 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:181` |

##### `unsafe_string` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:126`)

|      % | Samples | Location                                                                                                   |
| -----: | ------: | ---------------------------------------------------------------------------------------------------------- |
| 100.0% |     104 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:126` |

##### `==` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/promotion.jl:641`)

|      % | Samples | Location                                                                                              |
| -----: | ------: | ----------------------------------------------------------------------------------------------------- |
| 100.0% |     100 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/promotion.jl:641` |

##### `getproperty` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base_compiler.jl:57`)

|      % | Samples | Location                                                                                                 |
| -----: | ------: | -------------------------------------------------------------------------------------------------------- |
| 100.0% |      92 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base_compiler.jl:57` |

##### `getvalue` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:215`)

|      % | Samples | Location                                                                                                  |
| -----: | ------: | --------------------------------------------------------------------------------------------------------- |
| 100.0% |      89 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:215` |

##### `Dict` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:80`)

|      % | Samples | Location                                                                                        |
| -----: | ------: | ----------------------------------------------------------------------------------------------- |
| 100.0% |      88 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:80` |

##### `setindex!(::Dict{Symbol, Int64}, ::Int64, ::Symbol)` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:356`)

|     % | Samples | Location                                                                                         |
| ----: | ------: | ------------------------------------------------------------------------------------------------ |
| 66.7% |      56 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:368` |
| 28.6% |      24 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:356` |
|  4.8% |       4 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:358` |

##### `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:87`)

|     % | Samples | Location                                                                                                 |
| ----: | ------: | -------------------------------------------------------------------------------------------------------- |
| 48.7% |      38 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:88`  |
| 17.9% |      14 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:87`  |
|  2.6% |       2 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:101` |
|  2.6% |       2 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:93`  |
|  1.3% |       1 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:95`  |

##### `|` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:418`)

|      % | Samples | Location                                                                                        |
| -----: | ------: | ----------------------------------------------------------------------------------------------- |
| 100.0% |      74 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:418` |

##### `var\"#write#98\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:340`)

|     % | Samples | Location                                                                                                  |
| ----: | ------: | --------------------------------------------------------------------------------------------------------- |
| 43.5% |      30 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:360` |
| 21.7% |      15 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:60`  |
| 10.1% |       7 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:340` |
|  8.7% |       6 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:351` |
|  1.4% |       1 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:61`  |

##### `write(::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:340`)

|      % | Samples | Location                                                                                                  |
| -----: | ------: | --------------------------------------------------------------------------------------------------------- |
| 100.0% |      36 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:340` |

##### `write(::StructTypes.BoolType, ::Vector{UInt8}, ::Int64, ::Int64, ::Bool)` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:209`)

|      % | Samples | Location                                                                                                  |
| -----: | ------: | --------------------------------------------------------------------------------------------------------- |
| 100.0% |      34 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:209` |

##### `macro expansion` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:14`)

|      % | Samples | Location                                                                                                 |
| -----: | ------: | -------------------------------------------------------------------------------------------------------- |
| 100.0% |      29 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:14` |

##### `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40`)

|     % | Samples | Location                                                                                                 |
| ----: | ------: | -------------------------------------------------------------------------------------------------------- |
| 38.5% |      10 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:47` |
| 19.2% |       5 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:51` |
|  7.7% |       2 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40` |
|  7.7% |       2 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:55` |

##### `var\"#write#86\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.NumberType, ::Vector{UInt8}, ::Int64, ::Int64, ::Int64)` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:224`)

|     % | Samples | Location                                                                                                  |
| ----: | ------: | --------------------------------------------------------------------------------------------------------- |
| 96.2% |      25 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:236` |
|  3.8% |       1 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:224` |

##### `macro expansion` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:23`)

|      % | Samples | Location                                                                                                 |
| -----: | ------: | -------------------------------------------------------------------------------------------------------- |
| 100.0% |      21 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:23` |

##### `getvalue` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:213`)

|      % | Samples | Location                                                                                                  |
| -----: | ------: | --------------------------------------------------------------------------------------------------------- |
| 100.0% |      19 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:213` |

##### `unescape(::JSON3.PointerString)` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/strings.jl:48`)

|     % | Samples | Location                                                                                                    |
| ----: | ------: | ----------------------------------------------------------------------------------------------------------- |
| 15.8% |       3 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/strings.jl:116` |
| 15.8% |       3 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/strings.jl:60`  |
| 10.5% |       2 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/strings.jl:54`  |
| 10.5% |       2 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/strings.jl:56`  |
|  5.3% |       1 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/strings.jl:48`  |

##### `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:87`)

|      % | Samples | Location                                                                                                |
| -----: | ------: | ------------------------------------------------------------------------------------------------------- |
| 100.0% |      16 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:87` |

#### Callers

Callers ranked by contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `_symbol` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`)

|      % | Samples | Caller     | Location                                                                                                  |
| -----: | ------: | ---------- | --------------------------------------------------------------------------------------------------------- |
| 100.0% |   7,015 | `getvalue` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:187` |

##### `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`)

|     % | Samples | Caller               | Location                                                                                                  |
| ----: | ------: | -------------------- | --------------------------------------------------------------------------------------------------------- |
| 99.7% |   6,863 | `[unknown function]` | `<unknown>`                                                                                               |
|  0.2% |      12 | `write`              | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:147` |
|  0.1% |       5 | `#write#79`          | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157` |
| <0.1% |       1 | `#write#81`          | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`  |

##### `indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64, ::Int64)` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`)

|      % | Samples | Caller      | Location                                                                                                  |
| -----: | ------: | ----------- | --------------------------------------------------------------------------------------------------------- |
| 100.0% |   2,127 | `#write#79` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157` |

##### `indexed_iterate` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`)

|     % | Samples | Caller                                                           | Location                                                                                                  |
| ----: | ------: | ---------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| 66.9% |     998 | `indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64)` | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`         |
| 27.8% |     415 | `#write#79`                                                      | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157` |
|  5.1% |      76 | `indexed_iterate`                                                | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`         |
|  0.2% |       3 | `#write#81`                                                      | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`  |

##### `GenericMemory` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:588`)

|     % | Samples | Caller                                    | Location                                                                                           |
| ----: | ------: | ----------------------------------------- | -------------------------------------------------------------------------------------------------- |
| 74.2% |     836 | `Array`                                   | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:648`   |
| 25.6% |     289 | `rehash!(::Dict{Symbol, Int64}, ::Int64)` | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:138`   |
|  0.2% |       2 | `array_new_memory`                        | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:1101` |

##### `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` (`<unknown>`)

|     % | Samples | Caller               | Location                                                                                          |
| ----: | ------: | -------------------- | ------------------------------------------------------------------------------------------------- |
| 82.9% |     919 | `[unknown function]` | `<unknown>`                                                                                       |
| 15.3% |     170 | `MappingRF`          | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98` |
|  1.7% |      19 | `_foldl_impl`        | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60` |

##### `unsafe_load` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/pointer.jl:151`)

|      % | Samples | Caller        | Location                                                                                            |
| -----: | ------: | ------------- | --------------------------------------------------------------------------------------------------- |
| 100.0% |     558 | `unsafe_load` | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/pointer.jl:151` |

##### `ht_keyindex2_shorthash!(::Dict{Symbol, Int64}, ::Symbol)` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:267`)

|     % | Samples | Caller                                                                                                                             | Location                                                                                                 |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| 88.2% |     469 | `setindex!(::Dict{Symbol, Int64}, ::Int64, ::Symbol)`                                                                              | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:356`         |
| 11.8% |      63 | `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40` |

##### `+` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:87`)

|     % | Samples | Caller                                                                                                                                                                                                                           | Location                                                                                                   |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| 35.3% |     114 | `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})`                                                                                               | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40`   |
| 19.2% |      62 | `macro expansion`                                                                                                                                                                                                                | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:24`   |
| 10.5% |      34 | `length_continued`                                                                                                                                                                                                               | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:559` |
|  9.0% |      29 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:218`   |
|  7.4% |      24 | `var\"#write#98\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)`                                                          | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:340`  |

##### `[unknown function]` (`<unknown>`)

|     % | Samples | Caller                                                                       | Location                                                                                                  |
| ----: | ------: | ---------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| 47.1% |     137 | `#write#79`                                                                  | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157` |
| 33.7% |      98 | `_foldl_impl`                                                                | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`         |
| 17.2% |      50 | `#write#81`                                                                  | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`  |
|  2.1% |       6 | `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` | `<unknown>`                                                                                               |

##### `BottomRF` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:84`)

|     % | Samples | Caller               | Location                                                                                          |
| ----: | ------: | -------------------- | ------------------------------------------------------------------------------------------------- |
| 98.3% |     281 | `[unknown function]` | `<unknown>`                                                                                       |
|  1.7% |       5 | `MappingRF`          | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98` |

##### `_foldl_impl` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`)

|      % | Samples | Caller       | Location                                                                                          |
| -----: | ------: | ------------ | ------------------------------------------------------------------------------------------------- |
| 100.0% |     276 | `foldl_impl` | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:46` |

##### `iterate` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:75`)

|     % | Samples | Caller                                                                                                                       | Location                                                                                                  |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| 60.8% |     166 | `#write#79`                                                                                                                  | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157` |
| 20.5% |      56 | `iterate`                                                                                                                    | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/iterators.jl:697`     |
| 17.6% |      48 | `iterate`                                                                                                                    | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:75`  |
|  1.1% |       3 | `isempty(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:1127`   |

##### `_setindex!` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:1025`)

|     % | Samples | Caller               | Location                                                                                           |
| ----: | ------: | -------------------- | -------------------------------------------------------------------------------------------------- |
| 95.2% |     218 | `setindex!`          | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:1020` |
|  4.8% |      11 | `[unknown function]` | `<unknown>`                                                                                        |

##### `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:218`)

|     % | Samples | Caller                                                                                                                                                                               | Location                                                                                                 |
| ----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------- |
| 99.0% |     206 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:218` |
|  1.0% |       2 | `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)`                         | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:87`  |

##### `getindex` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:975`)

|     % | Samples | Caller                                                                                                                                                                                                                           | Location                                                                                                  |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| 63.4% |     104 | `macro expansion`                                                                                                                                                                                                                | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:332` |
| 23.2% |      38 | `getindex`                                                                                                                                                                                                                       | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/subarray.jl:334`      |
| 10.4% |      17 | `var\"#write#98\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)`                                                          | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:340` |
|  3.0% |       5 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:218`  |

##### `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{String})` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:142`)

|     % | Samples | Caller                                                                                                                                                                      | Location                                                                                                |
| ----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| 95.3% |     143 | `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)`                | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:87` |
|  4.7% |       7 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:87` |

##### `checkbounds` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/basic.jl:212`)

|      % | Samples | Caller     | Location                                                                                                   |
| -----: | ------: | ---------- | ---------------------------------------------------------------------------------------------------------- |
| 100.0% |     138 | `codeunit` | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:166` |

##### `#write#81` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`)

|      % | Samples | Caller               | Location    |
| -----: | ------: | -------------------- | ----------- |
| 100.0% |     137 | `[unknown function]` | `<unknown>` |

##### `unsafe_string` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:130`)

|      % | Samples | Caller   | Location                                                                                                   |
| -----: | ------: | -------- | ---------------------------------------------------------------------------------------------------------- |
| 100.0% |     133 | `String` | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:145` |

##### `length_continued` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/pointer.jl`)

|      % | Samples | Caller             | Location                                                                                                   |
| -----: | ------: | ------------------ | ---------------------------------------------------------------------------------------------------------- |
| 100.0% |     120 | `length(::String)` | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:540` |

##### `#write#81` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:200`)

|     % | Samples | Caller               | Location                                                                                                  |
| ----: | ------: | -------------------- | --------------------------------------------------------------------------------------------------------- |
| 99.1% |     111 | `[unknown function]` | `<unknown>`                                                                                               |
|  0.9% |       1 | `#write#79`          | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157` |

##### `unsafe_string` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:126`)

|      % | Samples | Caller     | Location                                                                                                  |
| -----: | ------: | ---------- | --------------------------------------------------------------------------------------------------------- |
| 100.0% |     104 | `getvalue` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:195` |

##### `==` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/promotion.jl:641`)

|     % | Samples | Caller                                                                                                         | Location                                                                                                  |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| 53.0% |      53 | `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{String})` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:142`  |
| 26.0% |      26 | `ht_keyindex2_shorthash!(::Dict{Symbol, Int64}, ::Symbol)`                                                     | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:267`          |
| 15.0% |      15 | `isarray`                                                                                                      | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:61`  |
|  3.0% |       3 | `!=`                                                                                                           | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/operators.jl:320`     |
|  3.0% |       3 | `promoteeltype`                                                                                                | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:100` |

##### `getproperty` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base_compiler.jl:57`)

|     % | Samples | Caller                                                     | Location                                                                                         |
| ----: | ------: | ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 53.3% |      49 | `_setindex!`                                               | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:331` |
| 17.4% |      16 | `_setindex!`                                               | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:325` |
|  7.6% |       7 | `ht_keyindex2_shorthash!(::Dict{Symbol, Int64}, ::Symbol)` | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:267` |
|  5.4% |       5 | `_setindex!`                                               | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:327` |
|  4.3% |       4 | `_setindex!`                                               | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:328` |

##### `getvalue` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:215`)

|      % | Samples | Caller    | Location                                                                                                 |
| -----: | ------: | --------- | -------------------------------------------------------------------------------------------------------- |
| 100.0% |      89 | `iterate` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:81` |

##### `Dict` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:80`)

|      % | Samples | Caller     | Location                                                                                                  |
| -----: | ------: | ---------- | --------------------------------------------------------------------------------------------------------- |
| 100.0% |      88 | `getvalue` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:126` |

##### `setindex!(::Dict{Symbol, Int64}, ::Int64, ::Symbol)` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:356`)

|     % | Samples | Caller                                                                                                                             | Location                                                                                                  |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| 66.7% |      56 | `getvalue`                                                                                                                         | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:127` |
| 33.3% |      28 | `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40`  |

##### `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:87`)

|     % | Samples | Caller                                                                                                                                                                                                                           | Location                                                                                                 |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| 82.1% |      64 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)`                                                      | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:87`  |
| 17.9% |      14 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:218` |

##### `|` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:418`)

|     % | Samples | Caller          | Location                                                                                                     |
| ----: | ------: | --------------- | ------------------------------------------------------------------------------------------------------------ |
| 87.8% |      65 | `string`        | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:88`     |
|  6.8% |       5 | `promoteeltype` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:96`     |
|  2.7% |       2 | `\|`            | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:1058`             |
|  1.4% |       1 | `_shorthash7`   | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:122`             |
|  1.4% |       1 | `parsefrac`     | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/Parsers/05lwR/src/floats.jl:496` |

##### `var\"#write#98\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:340`)

|     % | Samples | Caller                                                                         | Location                                                                                                  |
| ----: | ------: | ------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------- |
| 58.0% |      40 | `write(::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:340` |
| 42.0% |      29 | `#write#79`                                                                    | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157` |

##### `iterate` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl`)

|     % | Samples | Caller      | Location                                                                                                  |
| ----: | ------: | ----------- | --------------------------------------------------------------------------------------------------------- |
| 57.4% |      27 | `#write#79` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157` |
| 29.8% |      14 | `iterate`   | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:75`  |
| 12.8% |       6 | `iterate`   | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/iterators.jl:697`     |

##### `write(::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:340`)

|      % | Samples | Caller      | Location                                                                                                  |
| -----: | ------: | ----------- | --------------------------------------------------------------------------------------------------------- |
| 100.0% |      36 | `#write#79` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157` |

##### `getvalue` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl`)

|     % | Samples | Caller    | Location                                                                                                 |
| ----: | ------: | --------- | -------------------------------------------------------------------------------------------------------- |
| 71.4% |      25 | `iterate` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:81` |
| 28.6% |      10 | `iterate` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:78` |

##### `write(::StructTypes.BoolType, ::Vector{UInt8}, ::Int64, ::Int64, ::Bool)` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:209`)

|      % | Samples | Caller      | Location                                                                                                  |
| -----: | ------: | ----------- | --------------------------------------------------------------------------------------------------------- |
| 100.0% |      34 | `#write#79` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157` |

##### `macro expansion` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:14`)

|     % | Samples | Caller                                                                                                                                                                                                                           | Location                                                                                                 |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| 96.6% |      28 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:218` |
|  3.4% |       1 | `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{String})`                                                                                                                   | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:142` |

##### `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40`)

|     % | Samples | Caller       | Location                                                                                                  |
| ----: | ------: | ------------ | --------------------------------------------------------------------------------------------------------- |
| 92.3% |      24 | `getvalue`   | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:127` |
|  7.7% |       2 | `foldl_impl` | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:46`         |

##### `var\"#write#86\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.NumberType, ::Vector{UInt8}, ::Int64, ::Int64, ::Int64)` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:224`)

|     % | Samples | Caller                                                                        | Location                                                                                                  |
| ----: | ------: | ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| 92.3% |      24 | `write(::StructTypes.NumberType, ::Vector{UInt8}, ::Int64, ::Int64, ::Int64)` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:224` |
|  7.7% |       2 | `#write#79`                                                                   | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157` |

##### `macro expansion` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:23`)

|     % | Samples | Caller                                                                                                                                                                                                                           | Location                                                                                                 |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| 95.2% |      20 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:218` |
|  4.8% |       1 | `var\"#read!#9\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Array}, ::Bool)`  | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:312` |

##### `getvalue` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:213`)

|      % | Samples | Caller    | Location                                                                                                 |
| -----: | ------: | --------- | -------------------------------------------------------------------------------------------------------- |
| 100.0% |      19 | `iterate` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:81` |

##### `unescape(::JSON3.PointerString)` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/strings.jl:48`)

|     % | Samples | Caller               | Location                                                                                                  |
| ----: | ------: | -------------------- | --------------------------------------------------------------------------------------------------------- |
| 94.7% |      18 | `getvalue`           | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:193` |
|  5.3% |       1 | `[unknown function]` | `<unknown>`                                                                                               |

##### `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:87`)

|     % | Samples | Caller                                                                                                                                                                                                                           | Location                                                                                                 |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| 68.8% |      11 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)`                                             | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:218` |
| 25.0% |       4 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:218` |
|  6.3% |       1 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Array}, ::Bool)`                                              | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:312` |

##### `#defaultminimum##0` (`<unknown>`)

|      % | Samples | Caller               | Location    |
| -----: | ------: | -------------------- | ----------- |
| 100.0% |       3 | `[unknown function]` | `<unknown>` |

##### `(::JSON3.var\"#defaultminimum##0#defaultminimum##1\"{JSON3.Array{Int64, Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}}})(::Int64)` (`<unknown>`)

|      % | Samples | Caller      | Location                                                                                          |
| -----: | ------: | ----------- | ------------------------------------------------------------------------------------------------- |
| 100.0% |       1 | `MappingRF` | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98` |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|     % | Samples | Function                                                           | Location                                                                                                               |
| ----: | ------: | ------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------- |
| 76.4% |  25,753 | `parse_workload`                                                   | `profile.jl:18`                                                                                                        |
| 76.4% |  25,752 | `[unknown function]`                                               | `<unknown>`                                                                                                            |
| 76.4% |  25,752 | `macro expansion`                                                  | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/stdlib/v1.13/Profile/src/Profile.jl:60` |
| 76.4% |  25,752 | `capture_cpu`                                                      | `profile.jl:29`                                                                                                        |
| 76.4% |  25,752 | `eval(::Module, ::Any)`                                            | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:489`                       |
| 76.4% |  25,752 | `include_string(::typeof(identity), ::Module, ::String, ::String)` | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/loading.jl:2989`                   |
| 76.4% |  25,752 | `_include(::Function, ::Module, ::String)`                         | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/loading.jl:3083`                   |
| 76.4% |  25,752 | `include(::Module, ::String)`                                      | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base.jl:309`                       |
| 76.4% |  25,752 | `exec_options(::Base.JLOptions)`                                   | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/client.jl:234`                     |
| 76.4% |  25,752 | `_start()`                                                         | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/client.jl:570`                     |
| 70.9% |  23,882 | `#write#58`                                                        | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:40`               |
| 52.6% |  17,732 | `#write#79`                                                        | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`              |
| 52.6% |  17,728 | `write`                                                            | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:147`              |
| 52.5% |  17,687 | `#write#81`                                                        | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`               |
| 23.6% |   7,943 | `(anonymous)`                                                      | `<unknown>`                                                                                                            |
| 20.8% |   7,015 | `_symbol`                                                          | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`                |
| 20.8% |   7,015 | `getvalue`                                                         | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:187`              |
| 18.2% |   6,150 | `defaultminimum`                                                   | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:12`               |
| 18.2% |   6,146 | `foldl_impl`                                                       | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:46`                      |
| 18.2% |   6,146 | `mapfoldl_impl`                                                    | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:42`                      |

#### Categories

##### Third-party

|     % | Samples | Function                                                                                                                                                                                                                         | Location                                                                                                  |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| 70.9% |  23,882 | `#write#58`                                                                                                                                                                                                                      | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:40`  |
| 52.6% |  17,732 | `#write#79`                                                                                                                                                                                                                      | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157` |
| 52.6% |  17,728 | `write`                                                                                                                                                                                                                          | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:147` |
| 20.8% |   7,015 | `_symbol`                                                                                                                                                                                                                        | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`   |
| 20.8% |   7,015 | `getvalue`                                                                                                                                                                                                                       | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:187` |
| 18.2% |   6,150 | `defaultminimum`                                                                                                                                                                                                                 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:12`  |
| 15.4% |   5,186 | `getvalue`                                                                                                                                                                                                                       | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:127` |
| 15.2% |   5,130 | `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})`                                                                                               | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40`  |
| 11.7% |   3,938 | `iterate`                                                                                                                                                                                                                        | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:81`  |
| 10.4% |   3,490 | `getvalue`                                                                                                                                                                                                                       | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:214` |
|  9.6% |   3,251 | `iterate`                                                                                                                                                                                                                        | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:78`  |
|  5.4% |   1,804 | `getindex`                                                                                                                                                                                                                       | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:163` |
|  4.0% |   1,347 | `var\"#read#6\"(::Bool, ::Nothing, ::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.read), ::String)`                                                                                                       | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:30`   |
|  4.0% |   1,347 | `read`                                                                                                                                                                                                                           | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:30`   |
|  3.9% |   1,316 | `write(::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)`                                                                                                                                                   | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:340` |
|  3.9% |   1,309 | `var\"#write#98\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)`                                                          | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:340` |
|  3.9% |   1,302 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)`                                             | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:218`  |
|  3.9% |   1,302 | `read!`                                                                                                                                                                                                                          | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:87`   |
|  3.9% |   1,301 | `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)`                                                                     | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:87`   |
|  3.9% |   1,301 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:218`  |

##### Standard library

|     % | Samples | Function                                                           | Location                                                                                                               |
| ----: | ------: | ------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------- |
| 76.4% |  25,752 | `macro expansion`                                                  | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/stdlib/v1.13/Profile/src/Profile.jl:60` |
| 76.4% |  25,752 | `eval(::Module, ::Any)`                                            | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:489`                       |
| 76.4% |  25,752 | `include_string(::typeof(identity), ::Module, ::String, ::String)` | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/loading.jl:2989`                   |
| 76.4% |  25,752 | `_include(::Function, ::Module, ::String)`                         | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/loading.jl:3083`                   |
| 76.4% |  25,752 | `include(::Module, ::String)`                                      | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base.jl:309`                       |
| 76.4% |  25,752 | `exec_options(::Base.JLOptions)`                                   | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/client.jl:234`                     |
| 76.4% |  25,752 | `_start()`                                                         | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/client.jl:570`                     |
| 52.5% |  17,687 | `#write#81`                                                        | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`               |
| 18.2% |   6,146 | `foldl_impl`                                                       | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:46`                      |
| 18.2% |   6,146 | `mapfoldl_impl`                                                    | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:42`                      |
| 18.2% |   6,146 | `#mapfoldl#271`                                                    | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:173`                     |
| 18.2% |   6,146 | `mapfoldl`                                                         | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:173`                     |
| 18.2% |   6,146 | `#mapreduce#275`                                                   | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:306`                     |
| 18.2% |   6,146 | `mapreduce`                                                        | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:306`                     |
| 18.2% |   6,146 | `#sum#278`                                                         | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:535`                     |
| 18.2% |   6,146 | `sum`                                                              | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:535`                     |
| 18.2% |   6,146 | `#sum#279`                                                         | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:564`                     |
| 18.2% |   6,146 | `sum`                                                              | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:564`                     |
| 18.2% |   6,146 | `_foldl_impl`                                                      | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:56`                      |
| 18.2% |   6,130 | `MappingRF`                                                        | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98`                      |

##### Unknown

|     % | Samples | Function      | Location    |
| ----: | ------: | ------------- | ----------- |
| 23.6% |   7,943 | `(anonymous)` | `<unknown>` |

##### Native

|     % | Samples | Function                                                                                                                                                                                | Location    |
| ----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 76.4% |  25,752 | `[unknown function]`                                                                                                                                                                    | `<unknown>` |
| 18.2% |   6,133 | `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})`                                                                                                            | `<unknown>` |
| 18.1% |   6,112 | `#defaultminimum##0`                                                                                                                                                                    | `<unknown>` |
| <0.1% |       4 | `(::JSON3.var\"#defaultminimum##0#defaultminimum##1\"{JSON3.Array{Int64, Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}}})(::Int64)` | `<unknown>` |

#### Callees

Callees ranked by contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `parse_workload` (`profile.jl:18`)

|     % | Samples | Callee               | Location                                                                                                   |
| ----: | ------: | -------------------- | ---------------------------------------------------------------------------------------------------------- |
| 92.7% |  23,882 | `[unknown function]` | `<unknown>`                                                                                                |
|  5.2% |   1,347 | `read`               | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:30`    |
|  1.7% |     438 | `length(::String)`   | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:540` |
| <0.1% |       1 | `parse_workload`     | `profile.jl:18`                                                                                            |

##### `[unknown function]` (`<unknown>`)

|      % | Samples | Callee        | Location                                                                                                  |
| -----: | ------: | ------------- | --------------------------------------------------------------------------------------------------------- |
| 100.0% |  25,752 | `capture_cpu` | `profile.jl:29`                                                                                           |
|  92.7% |  23,882 | `#write#58`   | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:40`  |
|  68.7% |  17,687 | `#write#81`   | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`  |
|  65.5% |  16,880 | `#write#79`   | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157` |
|  23.8% |   6,125 | `sum`         | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:535`        |

##### `macro expansion` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/stdlib/v1.13/Profile/src/Profile.jl:60`)

|      % | Samples | Callee           | Location        |
| -----: | ------: | ---------------- | --------------- |
| 100.0% |  25,752 | `parse_workload` | `profile.jl:18` |

##### `capture_cpu` (`profile.jl:29`)

|      % | Samples | Callee            | Location                                                                                                               |
| -----: | ------: | ----------------- | ---------------------------------------------------------------------------------------------------------------------- |
| 100.0% |  25,752 | `macro expansion` | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/stdlib/v1.13/Profile/src/Profile.jl:60` |

##### `eval(::Module, ::Any)` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:489`)

|      % | Samples | Callee               | Location    |
| -----: | ------: | -------------------- | ----------- |
| 100.0% |  25,752 | `[unknown function]` | `<unknown>` |

##### `include_string(::typeof(identity), ::Module, ::String, ::String)` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/loading.jl:2989`)

|      % | Samples | Callee                  | Location                                                                                         |
| -----: | ------: | ----------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% |  25,752 | `eval(::Module, ::Any)` | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:489` |

##### `_include(::Function, ::Module, ::String)` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/loading.jl:3083`)

|      % | Samples | Callee                                                             | Location                                                                                             |
| -----: | ------: | ------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------- |
| 100.0% |  25,752 | `include_string(::typeof(identity), ::Module, ::String, ::String)` | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/loading.jl:2989` |

##### `include(::Module, ::String)` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base.jl:309`)

|      % | Samples | Callee                                     | Location                                                                                             |
| -----: | ------: | ------------------------------------------ | ---------------------------------------------------------------------------------------------------- |
| 100.0% |  25,752 | `_include(::Function, ::Module, ::String)` | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/loading.jl:3083` |

##### `exec_options(::Base.JLOptions)` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/client.jl:234`)

|      % | Samples | Callee                        | Location                                                                                         |
| -----: | ------: | ----------------------------- | ------------------------------------------------------------------------------------------------ |
| 100.0% |  25,752 | `include(::Module, ::String)` | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base.jl:309` |

##### `_start()` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/client.jl:570`)

|      % | Samples | Callee                           | Location                                                                                           |
| -----: | ------: | -------------------------------- | -------------------------------------------------------------------------------------------------- |
| 100.0% |  25,752 | `exec_options(::Base.JLOptions)` | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/client.jl:234` |

##### `#write#58` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:40`)

|     % | Samples | Callee                    | Location                                                                                                  |
| ----: | ------: | ------------------------- | --------------------------------------------------------------------------------------------------------- |
| 74.2% |  17,728 | `write`                   | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:147` |
| 25.8% |   6,150 | `defaultminimum`          | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:12`  |
| <0.1% |       1 | `String(::Vector{UInt8})` | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:66` |

##### `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`)

|     % | Samples | Callee                                                                         | Location                                                                                                  |
| ----: | ------: | ------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------- |
| 99.9% |  17,706 | `[unknown function]`                                                           | `<unknown>`                                                                                               |
| 12.0% |   2,127 | `indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64, ::Int64)`      | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`         |
| 10.8% |   1,913 | `iterate`                                                                      | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:81`  |
|  9.7% |   1,722 | `iterate`                                                                      | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:78`  |
|  7.4% |   1,316 | `write(::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:340` |

##### `write` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:147`)

|      % | Samples | Callee      | Location                                                                                                  |
| -----: | ------: | ----------- | --------------------------------------------------------------------------------------------------------- |
| 100.0% |  17,728 | `#write#79` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157` |

##### `#write#81` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`)

|     % | Samples | Callee               | Location                                                                                                      |
| ----: | ------: | -------------------- | ------------------------------------------------------------------------------------------------------------- |
| 95.5% |  16,898 | `[unknown function]` | `<unknown>`                                                                                                   |
|  3.0% |     538 | `isassigned`         | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:1641` |
|  2.3% |     402 | `getindex`           | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:163`     |
| <0.1% |       7 | `indexed_iterate`    | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`             |
| <0.1% |       2 | `iterate`            | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/range.jl`                 |

##### `_symbol` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`)

|     % | Samples | Callee                                                                                                                             | Location                                                                                                 |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| <0.1% |       1 | `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40` |

##### `getvalue` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:187`)

|      % | Samples | Callee    | Location                                                                                                |
| -----: | ------: | --------- | ------------------------------------------------------------------------------------------------------- |
| 100.0% |   7,015 | `_symbol` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:1` |

##### `defaultminimum` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:12`)

|     % | Samples | Callee                                                                                                                       | Location                                                                                                |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| 99.9% |   6,146 | `sum`                                                                                                                        | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:564`      |
|  1.0% |      64 | `isempty(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:1127` |
|  0.1% |       4 | `isempty(::JSON3.Object{Base.CodeUnits{UInt8, String}, Vector{UInt64}})`                                                     | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:1127` |

##### `foldl_impl` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:46`)

|      % | Samples | Callee                                                                                                                                                    | Location                                                                                                  |
| -----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| 100.0% |   6,146 | `_foldl_impl`                                                                                                                                             | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:56`         |
|  99.7% |   6,128 | `_foldl_impl`                                                                                                                                             | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`         |
|  <0.1% |       2 | `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})`                        | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40`  |
|  <0.1% |       1 | `getvalue(::Type{JSON3.Array}, ::Base.CodeUnits{UInt8, String}, ::SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}, ::Int64, ::UInt64)` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:131` |

##### `mapfoldl_impl` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:42`)

|      % | Samples | Callee       | Location                                                                                          |
| -----: | ------: | ------------ | ------------------------------------------------------------------------------------------------- |
| 100.0% |   6,146 | `foldl_impl` | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:46` |
|  <0.1% |       3 | `foldl_impl` | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:47` |

##### `#mapfoldl#271` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:173`)

|      % | Samples | Callee          | Location                                                                                          |
| -----: | ------: | --------------- | ------------------------------------------------------------------------------------------------- |
| 100.0% |   6,146 | `mapfoldl_impl` | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:42` |

##### `mapfoldl` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:173`)

|      % | Samples | Callee          | Location                                                                                           |
| -----: | ------: | --------------- | -------------------------------------------------------------------------------------------------- |
| 100.0% |   6,146 | `#mapfoldl#271` | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:173` |

##### `#mapreduce#275` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:306`)

|      % | Samples | Callee     | Location                                                                                           |
| -----: | ------: | ---------- | -------------------------------------------------------------------------------------------------- |
| 100.0% |   6,146 | `mapfoldl` | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:173` |

##### `mapreduce` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:306`)

|      % | Samples | Callee           | Location                                                                                           |
| -----: | ------: | ---------------- | -------------------------------------------------------------------------------------------------- |
| 100.0% |   6,146 | `#mapreduce#275` | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:306` |

##### `#sum#278` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:535`)

|      % | Samples | Callee      | Location                                                                                           |
| -----: | ------: | ----------- | -------------------------------------------------------------------------------------------------- |
| 100.0% |   6,146 | `mapreduce` | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:306` |

##### `sum` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:535`)

|      % | Samples | Callee     | Location                                                                                           |
| -----: | ------: | ---------- | -------------------------------------------------------------------------------------------------- |
| 100.0% |   6,146 | `#sum#278` | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:535` |

##### `#sum#279` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:564`)

|      % | Samples | Callee | Location                                                                                           |
| -----: | ------: | ------ | -------------------------------------------------------------------------------------------------- |
| 100.0% |   6,146 | `sum`  | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:535` |

##### `sum` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:564`)

|      % | Samples | Callee     | Location                                                                                           |
| -----: | ------: | ---------- | -------------------------------------------------------------------------------------------------- |
| 100.0% |   6,146 | `#sum#279` | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:564` |

##### `_foldl_impl` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:56`)

|     % | Samples | Callee               | Location                                                                                              |
| ----: | ------: | -------------------- | ----------------------------------------------------------------------------------------------------- |
| 99.7% |   6,130 | `MappingRF`          | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98`     |
|  0.2% |      10 | `iterate`            | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/iterators.jl:697` |
|  0.1% |       5 | `[unknown function]` | `<unknown>`                                                                                           |

##### `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` (`<unknown>`)

|      % | Samples | Callee                                                                                                                                    | Location                                                                                                 |
| -----: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| 100.0% |   6,130 | `[unknown function]`                                                                                                                      | `<unknown>`                                                                                              |
|   0.2% |      15 | `defaultminimum`                                                                                                                          | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:6`  |
|   0.1% |       7 | `defaultminimum(::JSON3.Array{Int64, Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:11` |
|   0.1% |       5 | `isempty(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})`              | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:1127`  |
|   0.1% |       5 | `+(::UInt64, ::Int64)`                                                                                                                    | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:1054`         |

##### `MappingRF` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98`)

|      % | Samples | Callee                                                                                                                                                                                  | Location                                                                                          |
| -----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| 100.0% |   6,128 | `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})`                                                                                                            | `<unknown>`                                                                                       |
|   0.4% |      24 | `BottomRF`                                                                                                                                                                              | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:83` |
|   0.1% |       5 | `BottomRF`                                                                                                                                                                              | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:84` |
|   0.1% |       4 | `(::JSON3.var\"#defaultminimum##0#defaultminimum##1\"{JSON3.Array{Int64, Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}}})(::Int64)` | `<unknown>`                                                                                       |

##### `#defaultminimum##0` (`<unknown>`)

|     % | Samples | Callee           | Location                                                                                                      |
| ----: | ------: | ---------------- | ------------------------------------------------------------------------------------------------------------- |
| 89.4% |   5,466 | `defaultminimum` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:12`      |
|  7.6% |     464 | `isassigned`     | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:1641` |
|  6.5% |     400 | `getindex`       | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:163`     |
|  0.1% |       6 | `isassigned`     | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:1640` |
| <0.1% |       1 | `isassigned`     | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:1632` |

##### `getvalue` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:127`)

|     % | Samples | Callee                                                                                                                             | Location                                                                                                 |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| 98.9% |   5,127 | `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40` |
|  1.1% |      56 | `setindex!(::Dict{Symbol, Int64}, ::Int64, ::Symbol)`                                                                              | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:356`         |

##### `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40`)

|     % | Samples | Callee                                                     | Location                                                                                                  |
| ----: | ------: | ---------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| 73.9% |   3,790 | `getvalue`                                                 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:187` |
| 21.4% |   1,097 | `setindex!(::Dict{Symbol, Int64}, ::Int64, ::Symbol)`      | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:356`          |
|  2.2% |     114 | `+`                                                        | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:87`            |
|  1.2% |      63 | `ht_keyindex2_shorthash!(::Dict{Symbol, Int64}, ::Symbol)` | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:267`          |
|  0.6% |      32 | `getindex`                                                 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/subarray.jl:334`      |

##### `iterate` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:81`)

|     % | Samples | Callee     | Location                                                                                                  |
| ----: | ------: | ---------- | --------------------------------------------------------------------------------------------------------- |
| 88.6% |   3,490 | `getvalue` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:214` |
|  6.3% |     247 | `getvalue` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:218` |
|  2.3% |      89 | `getvalue` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:215` |
|  1.5% |      58 | `getvalue` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:216` |
|  0.6% |      25 | `getvalue` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl`     |

##### `getvalue` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:214`)

|     % | Samples | Callee     | Location                                                                                                  |
| ----: | ------: | ---------- | --------------------------------------------------------------------------------------------------------- |
| 98.8% |   3,448 | `getvalue` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:127` |
|  1.2% |      42 | `getvalue` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:126` |

##### `iterate` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:78`)

|     % | Samples | Callee     | Location                                                                                                  |
| ----: | ------: | ---------- | --------------------------------------------------------------------------------------------------------- |
| 99.1% |   3,223 | `getvalue` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:187` |
|  0.9% |      28 | `getvalue` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl`     |

##### `getindex` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:163`)

|     % | Samples | Callee     | Location                                                                                                  |
| ----: | ------: | ---------- | --------------------------------------------------------------------------------------------------------- |
| 96.3% |   1,738 | `getvalue` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:127` |
|  3.7% |      66 | `getvalue` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:126` |

##### `var\"#read#6\"(::Bool, ::Nothing, ::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.read), ::String)` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:30`)

|     % | Samples | Callee                                                                         | Location                                                                                                 |
| ----: | ------: | ------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------- |
| 96.7% |   1,302 | `read!`                                                                        | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:87`  |
|  3.1% |      42 | `Array`                                                                        | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:648`         |
|  0.1% |       2 | `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, Vector{UInt64}})` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40` |

##### `read` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:30`)

|      % | Samples | Callee                                                                                                                     | Location                                                                                                |
| -----: | ------: | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| 100.0% |   1,347 | `var\"#read#6\"(::Bool, ::Nothing, ::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.read), ::String)` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:30` |

##### `write(::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:340`)

|     % | Samples | Callee                                                                                                                                                                  | Location                                                                                                  |
| ----: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| 97.3% |   1,280 | `var\"#write#98\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:340` |

##### `var\"#write#98\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:340`)

|     % | Samples | Callee                                        | Location                                                                                                  |
| ----: | ------: | --------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| 60.4% |     791 | `realloc!(::Vector{UInt8}, ::Int64, ::Int64)` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:51`  |
| 15.0% |     196 | `escapelength`                                | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:331` |
|  7.0% |      91 | `macro expansion`                             | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/simdloop.jl:77`       |
|  3.4% |      45 | `setindex!`                                   | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:1020`        |
|  1.8% |      24 | `+`                                           | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:87`            |

##### `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:218`)

|     % | Samples | Callee                                                                                                                                                                                                                           | Location                                                                                                 |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| 99.9% |   1,301 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:218` |
|  0.8% |      11 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)`                                                      | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:87`  |

##### `read!` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:87`)

|     % | Samples | Callee                                                                                                                                                                               | Location                                                                                                 |
| ----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------- |
| 99.9% |   1,301 | `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)`                         | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:87`  |
|  0.1% |       1 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:218` |

##### `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:87`)

|      % | Samples | Callee                                                                                                                                                                               | Location                                                                                                         |
| -----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------- |
| 100.0% |   1,301 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:218`         |
|  99.7% |   1,297 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Array}, ::Bool)`  | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:312`         |
|  24.3% |     316 | `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{String})`                                                                       | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:142`         |
|   3.5% |      46 | `typeparser(::Type{Float64}, ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Int16, ::Parsers.Options)`                                                                | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/Parsers/05lwR/src/components.jl:392` |
|   1.5% |      19 | `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.False})`                                                                  | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:189`         |

##### `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:218`)

|     % | Samples | Callee                                                                                                                                                                      | Location                                                                                                 |
| ----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| 99.8% |   1,298 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:87`  |
| 15.0% |     195 | `getbyte`                                                                                                                                                                   | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:8`  |
|  8.0% |     104 | `macro expansion`                                                                                                                                                           | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:29` |
|  4.5% |      58 | `macro expansion`                                                                                                                                                           | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:24` |
|  3.4% |      44 | `string`                                                                                                                                                                    | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:88` |

##### `(::JSON3.var\"#defaultminimum##0#defaultminimum##1\"{JSON3.Array{Int64, Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}}})(::Int64)` (`<unknown>`)

|     % | Samples | Callee       | Location                                                                                                      |
| ----: | ------: | ------------ | ------------------------------------------------------------------------------------------------------------- |
| 25.0% |       1 | `isassigned` | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:1640` |
| 25.0% |       1 | `isassigned` | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:1632` |
| 25.0% |       1 | `isassigned` | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:1642` |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame.

Common call stack: `#write#58` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:40`) ← `[unknown function]` ← `parse_workload` (`profile.jl:18`) ← `macro expansion` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/stdlib/v1.13/Profile/src/Profile.jl:60`) ← `capture_cpu` (`profile.jl:29`) ← `[unknown function]` ← `eval(::Module, ::Any)` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:489`) ← `include_string(::typeof(identity), ::Module, ::String, ::String)` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/loading.jl:2989`) ← `_include(::Function, ::Module, ::String)` (3083) ← `include(::Module, ::String)` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base.jl:309`) ← `exec_options(::Base.JLOptions)` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/client.jl:234`) ← `_start()` (570)

|    % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ---: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 9.2% |   3,110 | `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 5.3% |   1,770 | `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 3.7% |   1,258 | `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 2.8% |     949 | `indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64, ::Int64)` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`) ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 2.4% |     795 | `_symbol` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`) ← `getvalue` (187) ← `iterate` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:78`) ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 2.2% |     729 | `_symbol` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`) ← `getvalue` (187) ← `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40`) ← `getvalue` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:127`) ← `getvalue` (214) ← `iterate` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:81`) ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 2.1% |     716 | `_symbol` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`) ← `getvalue` (187) ← `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40`) ← `getvalue` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:127`) ← `getvalue` (214) ← `iterate` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:81`) ← `iterate` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/iterators.jl:697`) ← `_foldl_impl` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:12`) ← `#defaultminimum##0` ← `[unknown function]` ← `_foldl_impl` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `[unknown function]` ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `MappingRF` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98`) ← `_foldl_impl` (56) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:12`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 1.7% |     563 | `_symbol` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`) ← `getvalue` (187) ← `iterate` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:78`) ← `iterate` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/iterators.jl:697`) ← `_foldl_impl` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `[unknown function]` ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `[unknown function]` ← `_foldl_impl` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:12`) ← `#defaultminimum##0` ← `[unknown function]` ← `_foldl_impl` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `[unknown function]` ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `MappingRF` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98`) ← `_foldl_impl` (56) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:12`)                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 1.6% |     543 | `indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64, ::Int64)` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`) ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 1.5% |     504 | `_symbol` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`) ← `getvalue` (187) ← `iterate` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:78`) ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 1.4% |     482 | `indexed_iterate` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`) ← `indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64)` (163) ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 1.4% |     476 | `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `[unknown function]` ← `_foldl_impl` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `[unknown function]` ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `[unknown function]` ← `_foldl_impl` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:12`) ← `#defaultminimum##0` ← `[unknown function]` ← `_foldl_impl` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `[unknown function]` ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `MappingRF` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98`) ← `_foldl_impl` (56) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:12`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 1.3% |     432 | `indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64, ::Int64)` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`) ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 1.3% |     423 | `_symbol` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`) ← `getvalue` (187) ← `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40`) ← `getvalue` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:127`) ← `getvalue` (214) ← `iterate` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:81`) ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 1.2% |     392 | `_symbol` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`) ← `getvalue` (187) ← `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40`) ← `getvalue` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:127`) ← `getvalue` (214) ← `iterate` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:81`) ← `iterate` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/iterators.jl:697`) ← `_foldl_impl` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `[unknown function]` ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `[unknown function]` ← `_foldl_impl` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:12`) ← `#defaultminimum##0` ← `[unknown function]` ← `_foldl_impl` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `[unknown function]` ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `MappingRF` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98`) ← `_foldl_impl` (56) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:12`)                                                           |
| 1.1% |     385 | `GenericMemory` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:588`) ← `Array` (648) ← `Array` (661) ← `zeros` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:626`) ← `zeros` (622) ← `realloc!(::Vector{UInt8}, ::Int64, ::Int64)` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:51`) ← `var\"#write#98\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` (340) ← `write(::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` (340) ← `#write#79` (157) ← `[unknown function]` ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 1.0% |     349 | `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 1.0% |     329 | `_symbol` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`) ← `getvalue` (187) ← `iterate` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:78`) ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 0.9% |     309 | `_symbol` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`) ← `getvalue` (187) ← `iterate` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:78`) ← `iterate` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/iterators.jl:697`) ← `_foldl_impl` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `[unknown function]` ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `[unknown function]` ← `_foldl_impl` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `[unknown function]` ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `[unknown function]` ← `_foldl_impl` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:12`) ← `#defaultminimum##0` ← `[unknown function]` ← `_foldl_impl` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `[unknown function]` ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `MappingRF` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98`) ← `_foldl_impl` (56) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:12`) |
| 0.9% |     298 | `_symbol` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`) ← `getvalue` (187) ← `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40`) ← `getvalue` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:127`) ← `getindex` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:163`) ← `isassigned` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:1641`) ← `#write#81` ← `[unknown function]` ← `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |

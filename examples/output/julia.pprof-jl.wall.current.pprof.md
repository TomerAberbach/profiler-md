# Sampling profile

Collected 28,619 samples.

| Category         |     % | Samples |
| ---------------- | ----: | ------: |
| Third-party      | 63.7% |  18,244 |
| Standard library | 32.4% |   9,270 |
| Native           |  3.2% |     920 |
| Ours             |  0.6% |     185 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|     % | Samples | Function                                                                                                                                                                                                                         | Location                                                                                              |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| 34.1% |   9,763 | `#write#78`                                                                                                                                                                                                                      | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`  |
| 25.3% |   7,230 | `_symbol`                                                                                                                                                                                                                        | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`    |
|  7.8% |   2,221 | `GenericMemory`                                                                                                                                                                                                                  | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:588`           |
|  5.1% |   1,448 | `eval(::Module, ::Any)`                                                                                                                                                                                                          | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:489`           |
|  4.8% |   1,365 | `indexed_iterate`                                                                                                                                                                                                                | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/tuple.jl:162`          |
|  3.2% |     911 | `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})`                                                                                                                                                     | `<unknown>`                                                                                           |
|  1.7% |     485 | `unsafe_load`                                                                                                                                                                                                                    | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/pointer.jl:151`        |
|  1.6% |     456 | `ht_keyindex2_shorthash!(::Dict{Symbol, Int64}, ::Symbol)`                                                                                                                                                                       | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/dict.jl:265`           |
|  1.3% |     384 | `_foldl_impl`                                                                                                                                                                                                                    | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:48`          |
|  1.1% |     324 | `_setindex!`                                                                                                                                                                                                                     | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/array.jl:991`          |
|  1.1% |     317 | `+`                                                                                                                                                                                                                              | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/int.jl:87`             |
|  0.8% |     226 | `BottomRF`                                                                                                                                                                                                                       | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:78`          |
|  0.7% |     200 | `getindex`                                                                                                                                                                                                                       | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/essentials.jl:920`     |
|  0.7% |     198 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:218`   |
|  0.7% |     194 | `unsafe_string`                                                                                                                                                                                                                  | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:103` |
|  0.6% |     185 | `parse_workload`                                                                                                                                                                                                                 | `profile.jl:13`                                                                                       |
|  0.5% |     152 | `checkbounds`                                                                                                                                                                                                                    | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/basic.jl:217`  |
|  0.5% |     138 | `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{String})`                                                                                                                   | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:142`   |
|  0.5% |     137 | `length_continued`                                                                                                                                                                                                               | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl`     |
|  0.4% |     115 | `getvalue`                                                                                                                                                                                                                       | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:213`  |

#### Categories

##### Third-party

|     % | Samples | Function                                                                                                                                                                                                                         | Location                                                                                              |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| 34.1% |   9,763 | `#write#78`                                                                                                                                                                                                                      | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`  |
| 25.3% |   7,230 | `_symbol`                                                                                                                                                                                                                        | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`    |
|  0.7% |     198 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:218`   |
|  0.5% |     138 | `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{String})`                                                                                                                   | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:142`   |
|  0.4% |     115 | `getvalue`                                                                                                                                                                                                                       | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:213`  |
|  0.4% |     106 | `#write#80`                                                                                                                                                                                                                      | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:200`  |
|  0.3% |      97 | `iterate`                                                                                                                                                                                                                        | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:75`   |
|  0.3% |      94 | `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)`                                                                     | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:87`    |
|  0.3% |      84 | `var\"#write#97\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)`                                                          | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:340`  |
|  0.2% |      69 | `#write#80`                                                                                                                                                                                                                      | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:187`  |
|  0.1% |      38 | `var\"#write#85\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.NumberType, ::Vector{UInt8}, ::Int64, ::Int64, ::Int64)`                                                           | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:224`  |
|  0.1% |      34 | `iterate`                                                                                                                                                                                                                        | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl`      |
|  0.1% |      28 | `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})`                                                                                               | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40`   |
|  0.1% |      22 | `getvalue`                                                                                                                                                                                                                       | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl`      |
|  0.1% |      17 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)`                                                      | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:87`    |
|  0.1% |      17 | `unescape(::JSON3.PointerString)`                                                                                                                                                                                                | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/strings.jl:48` |
|  0.1% |      17 | `macro expansion`                                                                                                                                                                                                                | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:23`   |
|  0.1% |      16 | `getvalue(::Type{JSON3.Array}, ::Base.CodeUnits{UInt8, String}, ::SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}, ::Int64, ::UInt64)`                                                                        | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:131`  |
|  0.1% |      16 | `var\"#write#83\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.BoolType, ::Vector{UInt8}, ::Int64, ::Int64, ::Bool)`                                                              | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:209`  |
|  0.1% |      15 | `macro expansion`                                                                                                                                                                                                                | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:14`   |

##### Standard library

|    % | Samples | Function                                                   | Location                                                                                              |
| ---: | ------: | ---------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| 7.8% |   2,221 | `GenericMemory`                                            | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:588`           |
| 5.1% |   1,448 | `eval(::Module, ::Any)`                                    | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:489`           |
| 4.8% |   1,365 | `indexed_iterate`                                          | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/tuple.jl:162`          |
| 1.7% |     485 | `unsafe_load`                                              | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/pointer.jl:151`        |
| 1.6% |     456 | `ht_keyindex2_shorthash!(::Dict{Symbol, Int64}, ::Symbol)` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/dict.jl:265`           |
| 1.3% |     384 | `_foldl_impl`                                              | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:48`          |
| 1.1% |     324 | `_setindex!`                                               | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/array.jl:991`          |
| 1.1% |     317 | `+`                                                        | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/int.jl:87`             |
| 0.8% |     226 | `BottomRF`                                                 | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:78`          |
| 0.7% |     200 | `getindex`                                                 | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/essentials.jl:920`     |
| 0.7% |     194 | `unsafe_string`                                            | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:103` |
| 0.5% |     152 | `checkbounds`                                              | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/basic.jl:217`  |
| 0.5% |     137 | `length_continued`                                         | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl`     |
| 0.4% |     113 | `==`                                                       | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/promotion.jl:637`      |
| 0.4% |     108 | `unsafe_string`                                            | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:99`  |
| 0.4% |     104 | `checkbounds`                                              | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/basic.jl:209`  |
| 0.3% |      92 | `Array`                                                    | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:648`           |
| 0.3% |      87 | `getproperty`                                              | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/Base_compiler.jl:54`   |
| 0.2% |      71 | `getindex`                                                 | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/essentials.jl:386`     |
| 0.2% |      67 | `setindex!(::Dict{Symbol, Int64}, ::Int64, ::Symbol)`      | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/dict.jl:354`           |

##### Native

|     % | Samples | Function                                                                                                                                                                                | Location    |
| ----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
|  3.2% |     911 | `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})`                                                                                                            | `<unknown>` |
| <0.1% |       7 | `#defaultminimum##0`                                                                                                                                                                    | `<unknown>` |
| <0.1% |       2 | `(::JSON3.var\"#defaultminimum##0#defaultminimum##1\"{JSON3.Array{Int64, Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}}})(::Int64)` | `<unknown>` |

#### Lines

Lines ranked by contribution to each function's self samples.

##### `#write#78` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`)

|     % | Samples | Location                                                                                             |
| ----: | ------: | ---------------------------------------------------------------------------------------------------- |
| 68.9% |   6,729 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157` |
| 17.3% |   1,693 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:60`  |
|  6.0% |     584 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:73`  |
|  3.1% |     304 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:72`  |
|  3.0% |     289 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:155` |

##### `_symbol` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`)

|      % | Samples | Location                                                                                           |
| -----: | ------: | -------------------------------------------------------------------------------------------------- |
| 100.0% |   7,230 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:1` |

##### `GenericMemory` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:588`)

|      % | Samples | Location                                                                                    |
| -----: | ------: | ------------------------------------------------------------------------------------------- |
| 100.0% |   2,221 | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:588` |

##### `eval(::Module, ::Any)` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:489`)

|      % | Samples | Location                                                                                    |
| -----: | ------: | ------------------------------------------------------------------------------------------- |
| 100.0% |   1,448 | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:489` |

##### `indexed_iterate` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/tuple.jl:162`)

|      % | Samples | Location                                                                                     |
| -----: | ------: | -------------------------------------------------------------------------------------------- |
| 100.0% |   1,365 | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/tuple.jl:162` |

##### `unsafe_load` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/pointer.jl:151`)

|      % | Samples | Location                                                                                       |
| -----: | ------: | ---------------------------------------------------------------------------------------------- |
| 100.0% |     485 | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/pointer.jl:151` |

##### `ht_keyindex2_shorthash!(::Dict{Symbol, Int64}, ::Symbol)` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/dict.jl:265`)

|     % | Samples | Location                                                                                    |
| ----: | ------: | ------------------------------------------------------------------------------------------- |
| 56.8% |     259 | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/dict.jl:289` |
| 18.0% |      82 | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/dict.jl:280` |
|  5.3% |      24 | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/dict.jl:279` |
|  3.7% |      17 | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/dict.jl:301` |
|  2.2% |      10 | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/dict.jl:265` |

##### `_foldl_impl` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:48`)

|     % | Samples | Location                                                                                     |
| ----: | ------: | -------------------------------------------------------------------------------------------- |
| 96.4% |     370 | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:54` |
|  0.8% |       3 | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:45` |

##### `_setindex!` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/array.jl:991`)

|      % | Samples | Location                                                                                     |
| -----: | ------: | -------------------------------------------------------------------------------------------- |
| 100.0% |     324 | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/array.jl:991` |

##### `+` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/int.jl:87`)

|      % | Samples | Location                                                                                  |
| -----: | ------: | ----------------------------------------------------------------------------------------- |
| 100.0% |     317 | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/int.jl:87` |

##### `BottomRF` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:78`)

|      % | Samples | Location                                                                                     |
| -----: | ------: | -------------------------------------------------------------------------------------------- |
| 100.0% |     226 | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:78` |

##### `getindex` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/essentials.jl:920`)

|      % | Samples | Location                                                                                          |
| -----: | ------: | ------------------------------------------------------------------------------------------------- |
| 100.0% |     200 | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/essentials.jl:920` |

##### `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:218`)

|     % | Samples | Location                                                                                            |
| ----: | ------: | --------------------------------------------------------------------------------------------------- |
| 84.3% |     167 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:248` |
|  4.5% |       9 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:278` |
|  2.5% |       5 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:284` |
|  2.5% |       5 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:247` |
|  2.0% |       4 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:268` |

##### `unsafe_string` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:103`)

|      % | Samples | Location                                                                                              |
| -----: | ------: | ----------------------------------------------------------------------------------------------------- |
| 100.0% |     194 | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:103` |

##### `parse_workload` (`profile.jl:13`)

|      % | Samples | Location        |
| -----: | ------: | --------------- |
| 100.0% |     185 | `profile.jl:13` |

##### `checkbounds` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/basic.jl:217`)

|      % | Samples | Location                                                                                             |
| -----: | ------: | ---------------------------------------------------------------------------------------------------- |
| 100.0% |     152 | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/basic.jl:217` |

##### `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{String})` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:142`)

|     % | Samples | Location                                                                                            |
| ----: | ------: | --------------------------------------------------------------------------------------------------- |
| 58.7% |      81 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:155` |
|  4.3% |       6 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:142` |
|  2.9% |       4 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:167` |
|  1.4% |       2 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:149` |

##### `getvalue` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:213`)

|      % | Samples | Location                                                                                             |
| -----: | ------: | ---------------------------------------------------------------------------------------------------- |
| 100.0% |     115 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:213` |

##### `==` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/promotion.jl:637`)

|      % | Samples | Location                                                                                         |
| -----: | ------: | ------------------------------------------------------------------------------------------------ |
| 100.0% |     113 | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/promotion.jl:637` |

##### `unsafe_string` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:99`)

|      % | Samples | Location                                                                                             |
| -----: | ------: | ---------------------------------------------------------------------------------------------------- |
| 100.0% |     108 | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:99` |

##### `#write#80` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:200`)

|     % | Samples | Location                                                                                             |
| ----: | ------: | ---------------------------------------------------------------------------------------------------- |
| 47.2% |      50 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:200` |
| 30.2% |      32 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:60`  |
| 11.3% |      12 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:72`  |
|  7.5% |       8 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:73`  |
|  2.8% |       3 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:181` |

##### `checkbounds` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/basic.jl:209`)

|      % | Samples | Location                                                                                             |
| -----: | ------: | ---------------------------------------------------------------------------------------------------- |
| 100.0% |     104 | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/basic.jl:209` |

##### `iterate` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:75`)

|      % | Samples | Location                                                                                            |
| -----: | ------: | --------------------------------------------------------------------------------------------------- |
| 100.0% |      97 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:75` |

##### `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:87`)

|     % | Samples | Location                                                                                            |
| ----: | ------: | --------------------------------------------------------------------------------------------------- |
| 26.6% |      25 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:87`  |
| 19.1% |      18 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:88`  |
| 13.8% |      13 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:93`  |
|  7.4% |       7 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:101` |
|  1.1% |       1 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:89`  |

##### `Array` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:648`)

|      % | Samples | Location                                                                                    |
| -----: | ------: | ------------------------------------------------------------------------------------------- |
| 100.0% |      92 | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:648` |

##### `getproperty` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/Base_compiler.jl:54`)

|      % | Samples | Location                                                                                            |
| -----: | ------: | --------------------------------------------------------------------------------------------------- |
| 100.0% |      87 | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/Base_compiler.jl:54` |

##### `var\"#write#97\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:340`)

|     % | Samples | Location                                                                                             |
| ----: | ------: | ---------------------------------------------------------------------------------------------------- |
| 36.9% |      31 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:360` |
| 22.6% |      19 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:340` |
| 16.7% |      14 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:60`  |
|  9.5% |       8 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:351` |
|  2.4% |       2 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:352` |

##### `getindex` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/essentials.jl:386`)

|      % | Samples | Location                                                                                          |
| -----: | ------: | ------------------------------------------------------------------------------------------------- |
| 100.0% |      71 | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/essentials.jl:386` |

##### `#write#80` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:187`)

|     % | Samples | Location                                                                                             |
| ----: | ------: | ---------------------------------------------------------------------------------------------------- |
| 30.4% |      21 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:60`  |
| 18.8% |      13 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:187` |
| 18.8% |      13 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:200` |
| 13.0% |       9 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:73`  |
|  8.7% |       6 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:72`  |

##### `setindex!(::Dict{Symbol, Int64}, ::Int64, ::Symbol)` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/dict.jl:354`)

|     % | Samples | Location                                                                                    |
| ----: | ------: | ------------------------------------------------------------------------------------------- |
| 79.1% |      53 | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/dict.jl:366` |
| 19.4% |      13 | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/dict.jl:354` |
|  1.5% |       1 | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/dict.jl:356` |

##### `var\"#write#85\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.NumberType, ::Vector{UInt8}, ::Int64, ::Int64, ::Int64)` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:224`)

|     % | Samples | Location                                                                                             |
| ----: | ------: | ---------------------------------------------------------------------------------------------------- |
| 78.9% |      30 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:236` |
| 18.4% |       7 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:224` |

##### `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40`)

|     % | Samples | Location                                                                                            |
| ----: | ------: | --------------------------------------------------------------------------------------------------- |
| 35.7% |      10 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:47` |
| 17.9% |       5 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:55` |
| 10.7% |       3 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40` |
|  3.6% |       1 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:51` |

##### `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:87`)

|      % | Samples | Location                                                                                           |
| -----: | ------: | -------------------------------------------------------------------------------------------------- |
| 100.0% |      17 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:87` |

##### `unescape(::JSON3.PointerString)` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/strings.jl:48`)

|     % | Samples | Location                                                                                               |
| ----: | ------: | ------------------------------------------------------------------------------------------------------ |
| 23.5% |       4 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/strings.jl:116` |
|  5.9% |       1 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/strings.jl:60`  |
|  5.9% |       1 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/strings.jl:48`  |
|  5.9% |       1 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/strings.jl:56`  |
|  5.9% |       1 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/strings.jl:54`  |

##### `macro expansion` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:23`)

|      % | Samples | Location                                                                                            |
| -----: | ------: | --------------------------------------------------------------------------------------------------- |
| 100.0% |      17 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:23` |

##### `getvalue(::Type{JSON3.Array}, ::Base.CodeUnits{UInt8, String}, ::SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}, ::Int64, ::UInt64)` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:131`)

|     % | Samples | Location                                                                                             |
| ----: | ------: | ---------------------------------------------------------------------------------------------------- |
| 37.5% |       6 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:138` |
| 12.5% |       2 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:131` |
| 12.5% |       2 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:146` |

##### `var\"#write#83\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.BoolType, ::Vector{UInt8}, ::Int64, ::Int64, ::Bool)` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:209`)

|     % | Samples | Location                                                                                             |
| ----: | ------: | ---------------------------------------------------------------------------------------------------- |
| 56.3% |       9 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:209` |
| 43.8% |       7 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:215` |

##### `macro expansion` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:14`)

|      % | Samples | Location                                                                                            |
| -----: | ------: | --------------------------------------------------------------------------------------------------- |
| 100.0% |      15 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:14` |

#### Callers

Callers ranked by contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `#write#78` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`)

|     % | Samples | Caller      | Location                                                                                             |
| ----: | ------: | ----------- | ---------------------------------------------------------------------------------------------------- |
| 75.1% |   7,335 | `#write#78` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157` |
| 24.7% |   2,415 | `#write#80` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:187` |
|  0.1% |       9 | `#write#78` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:159` |

##### `_symbol` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`)

|      % | Samples | Caller     | Location                                                                                             |
| -----: | ------: | ---------- | ---------------------------------------------------------------------------------------------------- |
| 100.0% |   7,230 | `getvalue` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:187` |

##### `GenericMemory` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:588`)

|     % | Samples | Caller                                    | Location                                                                                      |
| ----: | ------: | ----------------------------------------- | --------------------------------------------------------------------------------------------- |
| 86.6% |   1,923 | `Array`                                   | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:647`   |
| 13.1% |     291 | `rehash!(::Dict{Symbol, Int64}, ::Int64)` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/dict.jl:137`   |
|  0.3% |       7 | `array_new_memory`                        | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/array.jl:1067` |

##### `eval(::Module, ::Any)` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:489`)

|      % | Samples | Caller                                                             | Location                                                                                        |
| -----: | ------: | ------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------- |
| 100.0% |   1,448 | `include_string(::typeof(identity), ::Module, ::String, ::String)` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/loading.jl:2856` |

##### `indexed_iterate` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/tuple.jl:162`)

|     % | Samples | Caller            | Location                                                                                             |
| ----: | ------: | ----------------- | ---------------------------------------------------------------------------------------------------- |
| 92.9% |   1,268 | `#write#78`       | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157` |
|  6.8% |      93 | `indexed_iterate` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/tuple.jl:162`         |
|  0.3% |       4 | `#write#80`       | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:187` |

##### `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` (`<unknown>`)

|     % | Samples | Caller        | Location                                                                                     |
| ----: | ------: | ------------- | -------------------------------------------------------------------------------------------- |
| 86.4% |     787 | `_foldl_impl` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:48` |
| 13.4% |     122 | `MappingRF`   | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:92` |

##### `unsafe_load` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/pointer.jl:151`)

|      % | Samples | Caller        | Location                                                                                       |
| -----: | ------: | ------------- | ---------------------------------------------------------------------------------------------- |
| 100.0% |     485 | `unsafe_load` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/pointer.jl:151` |

##### `ht_keyindex2_shorthash!(::Dict{Symbol, Int64}, ::Symbol)` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/dict.jl:265`)

|     % | Samples | Caller                                                | Location                                                                                    |
| ----: | ------: | ----------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| 99.8% |     455 | `setindex!(::Dict{Symbol, Int64}, ::Int64, ::Symbol)` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/dict.jl:354` |

##### `_foldl_impl` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:48`)

|     % | Samples | Caller       | Location                                                                                     |
| ----: | ------: | ------------ | -------------------------------------------------------------------------------------------- |
| 99.0% |     380 | `foldl_impl` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:40` |

##### `_setindex!` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/array.jl:991`)

|     % | Samples | Caller      | Location                                                                                             |
| ----: | ------: | ----------- | ---------------------------------------------------------------------------------------------------- |
| 96.3% |     312 | `setindex!` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/array.jl:986`         |
|  3.4% |      11 | `#write#78` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157` |
|  0.3% |       1 | `#write#80` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:187` |

##### `+` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/int.jl:87`)

|     % | Samples | Caller                                                                                                                                                                                                                           | Location                                                                                              |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| 28.4% |      90 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:218`   |
| 24.6% |      78 | `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})`                                                                                               | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40`   |
| 15.8% |      50 | `macro expansion`                                                                                                                                                                                                                | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:24`   |
|  5.4% |      17 | `var\"#write#97\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)`                                                          | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:340`  |
|  5.0% |      16 | `length_continued`                                                                                                                                                                                                               | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:532` |

##### `BottomRF` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:78`)

|      % | Samples | Caller        | Location                                                                                     |
| -----: | ------: | ------------- | -------------------------------------------------------------------------------------------- |
| 100.0% |     226 | `_foldl_impl` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:48` |

##### `getindex` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/essentials.jl:920`)

|     % | Samples | Caller                                                                                                                                                                                                                           | Location                                                                                             |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| 60.5% |     121 | `macro expansion`                                                                                                                                                                                                                | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:332` |
| 27.5% |      55 | `getindex`                                                                                                                                                                                                                       | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/subarray.jl:339`      |
|  9.5% |      19 | `var\"#write#97\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)`                                                          | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:340` |
|  2.0% |       4 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:218`  |
|  0.5% |       1 | `var\"#read!#9\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Array}, ::Bool)`  | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:312`  |

##### `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:218`)

|      % | Samples | Caller                                                                                                                                                                               | Location                                                                                            |
| -----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------- |
| 100.0% |     198 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:218` |

##### `unsafe_string` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:103`)

|      % | Samples | Caller   | Location                                                                                              |
| -----: | ------: | -------- | ----------------------------------------------------------------------------------------------------- |
| 100.0% |     194 | `String` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:118` |

##### `parse_workload` (`profile.jl:13`)

|      % | Samples | Caller            | Location                                                                                                          |
| -----: | ------: | ----------------- | ----------------------------------------------------------------------------------------------------------------- |
| 100.0% |     185 | `macro expansion` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/stdlib/v1.12/Profile/src/Profile.jl:82` |

##### `checkbounds` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/basic.jl:217`)

|      % | Samples | Caller     | Location                                                                                              |
| -----: | ------: | ---------- | ----------------------------------------------------------------------------------------------------- |
| 100.0% |     152 | `codeunit` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:139` |

##### `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{String})` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:142`)

|      % | Samples | Caller                                                                                                                                                       | Location                                                                                           |
| -----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------- |
| 100.0% |     138 | `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:87` |

##### `length_continued` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl`)

|      % | Samples | Caller           | Location        |
| -----: | ------: | ---------------- | --------------- |
| 100.0% |     137 | `parse_workload` | `profile.jl:13` |

##### `getvalue` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:213`)

|      % | Samples | Caller    | Location                                                                                            |
| -----: | ------: | --------- | --------------------------------------------------------------------------------------------------- |
| 100.0% |     115 | `iterate` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:81` |

##### `==` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/promotion.jl:637`)

|     % | Samples | Caller                                                                                                         | Location                                                                                             |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| 43.4% |      49 | `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{String})` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:142`  |
| 23.9% |      27 | `!=`                                                                                                           | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/operators.jl:321`     |
| 15.0% |      17 | `isarray`                                                                                                      | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:61`  |
| 15.0% |      17 | `ht_keyindex2_shorthash!(::Dict{Symbol, Int64}, ::Symbol)`                                                     | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/dict.jl:265`          |
|  0.9% |       1 | `typeparser`                                                                                                   | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/Parsers/05lwR/src/ints.jl:13` |

##### `unsafe_string` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:99`)

|      % | Samples | Caller     | Location                                                                                             |
| -----: | ------: | ---------- | ---------------------------------------------------------------------------------------------------- |
| 100.0% |     108 | `getvalue` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:195` |

##### `#write#80` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:200`)

|     % | Samples | Caller      | Location                                                                                             |
| ----: | ------: | ----------- | ---------------------------------------------------------------------------------------------------- |
| 98.1% |     104 | `#write#78` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157` |

##### `checkbounds` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/basic.jl:209`)

|      % | Samples | Caller        | Location                                                                                             |
| -----: | ------: | ------------- | ---------------------------------------------------------------------------------------------------- |
| 100.0% |     104 | `checkbounds` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/basic.jl:217` |

##### `iterate` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:75`)

|     % | Samples | Caller                                                                                                                       | Location                                                                                             |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| 61.9% |      60 | `iterate`                                                                                                                    | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:75`  |
| 24.7% |      24 | `#write#78`                                                                                                                  | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157` |
|  9.3% |       9 | `iterate`                                                                                                                    | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/iterators.jl:682`     |
|  4.1% |       4 | `isempty(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/essentials.jl:1072`   |

##### `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:87`)

|     % | Samples | Caller                                                                                                                                                                      | Location                                                                                           |
| ----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| 76.6% |      72 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:87` |

##### `Array` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:648`)

|      % | Samples | Caller     | Location                                                                                     |
| -----: | ------: | ---------- | -------------------------------------------------------------------------------------------- |
| 100.0% |      92 | `getindex` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/array.jl:405` |

##### `getproperty` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/Base_compiler.jl:54`)

|     % | Samples | Caller                                                     | Location                                                                                    |
| ----: | ------: | ---------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| 51.7% |      45 | `_setindex!`                                               | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/dict.jl:329` |
| 11.5% |      10 | `_setindex!`                                               | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/dict.jl:325` |
| 10.3% |       9 | `ht_keyindex2_shorthash!(::Dict{Symbol, Int64}, ::Symbol)` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/dict.jl:265` |
|  5.7% |       5 | `_setindex!`                                               | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/dict.jl:323` |
|  4.6% |       4 | `_setindex!`                                               | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/dict.jl:326` |

##### `var\"#write#97\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:340`)

|     % | Samples | Caller      | Location                                                                                             |
| ----: | ------: | ----------- | ---------------------------------------------------------------------------------------------------- |
| 92.9% |      78 | `#write#78` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157` |

##### `getindex` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/essentials.jl:386`)

|     % | Samples | Caller                                    | Location                                                                                    |
| ----: | ------: | ----------------------------------------- | ------------------------------------------------------------------------------------------- |
| 60.6% |      43 | `isslotempty`                             | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/dict.jl:133` |
| 32.4% |      23 | `rehash!(::Dict{Symbol, Int64}, ::Int64)` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/dict.jl:137` |
|  5.6% |       4 | `isslotfilled`                            | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/dict.jl:134` |
|  1.4% |       1 | `isslotmissing`                           | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/dict.jl:135` |

##### `#write#80` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:187`)

|     % | Samples | Caller      | Location                                                                                             |
| ----: | ------: | ----------- | ---------------------------------------------------------------------------------------------------- |
| 79.7% |      55 | `#write#78` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157` |
| 20.3% |      14 | `#write#78` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:159` |

##### `setindex!(::Dict{Symbol, Int64}, ::Int64, ::Symbol)` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/dict.jl:354`)

|     % | Samples | Caller                                                                                                                             | Location                                                                                            |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| 98.5% |      66 | `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40` |

##### `var\"#write#85\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.NumberType, ::Vector{UInt8}, ::Int64, ::Int64, ::Int64)` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:224`)

|     % | Samples | Caller      | Location                                                                                             |
| ----: | ------: | ----------- | ---------------------------------------------------------------------------------------------------- |
| 84.2% |      32 | `#write#78` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157` |
|  5.3% |       2 | `write`     | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:224` |

##### `iterate` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl`)

|     % | Samples | Caller      | Location                                                                                             |
| ----: | ------: | ----------- | ---------------------------------------------------------------------------------------------------- |
| 61.8% |      21 | `iterate`   | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:75`  |
| 35.3% |      12 | `#write#78` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157` |
|  2.9% |       1 | `iterate`   | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/iterators.jl:682`     |

##### `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40`)

|      % | Samples | Caller     | Location                                                                                             |
| -----: | ------: | ---------- | ---------------------------------------------------------------------------------------------------- |
| 100.0% |      28 | `getvalue` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:127` |

##### `getvalue` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl`)

|     % | Samples | Caller    | Location                                                                                            |
| ----: | ------: | --------- | --------------------------------------------------------------------------------------------------- |
| 59.1% |      13 | `iterate` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:81` |
| 40.9% |       9 | `iterate` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:78` |

##### `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:87`)

|      % | Samples | Caller                                                                                                                                                                                                                           | Location                                                                                            |
| -----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| 100.0% |      17 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:218` |

##### `unescape(::JSON3.PointerString)` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/strings.jl:48`)

|     % | Samples | Caller     | Location                                                                                             |
| ----: | ------: | ---------- | ---------------------------------------------------------------------------------------------------- |
| 94.1% |      16 | `getvalue` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:193` |

##### `macro expansion` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:23`)

|     % | Samples | Caller                                                                                                                                                                                                                           | Location                                                                                            |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| 94.1% |      16 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:218` |
|  5.9% |       1 | `var\"#read!#9\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Array}, ::Bool)`  | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:312` |

##### `getvalue(::Type{JSON3.Array}, ::Base.CodeUnits{UInt8, String}, ::SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}, ::Int64, ::UInt64)` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:131`)

|     % | Samples | Caller     | Location                                                                                             |
| ----: | ------: | ---------- | ---------------------------------------------------------------------------------------------------- |
| 93.8% |      15 | `getvalue` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:216` |

##### `var\"#write#83\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.BoolType, ::Vector{UInt8}, ::Int64, ::Int64, ::Bool)` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:209`)

|      % | Samples | Caller      | Location                                                                                             |
| -----: | ------: | ----------- | ---------------------------------------------------------------------------------------------------- |
| 100.0% |      16 | `#write#78` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157` |

##### `macro expansion` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:14`)

|     % | Samples | Caller                                                                                                                                                                                                                           | Location                                                                                            |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| 73.3% |      11 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:218` |
| 26.7% |       4 | `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{String})`                                                                                                                   | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:142` |

##### `#defaultminimum##0` (`<unknown>`)

|     % | Samples | Caller        | Location                                                                                     |
| ----: | ------: | ------------- | -------------------------------------------------------------------------------------------- |
| 57.1% |       4 | `_foldl_impl` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:54` |

##### `(::JSON3.var\"#defaultminimum##0#defaultminimum##1\"{JSON3.Array{Int64, Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}}})(::Int64)` (`<unknown>`)

|      % | Samples | Caller      | Location                                                                                     |
| -----: | ------: | ----------- | -------------------------------------------------------------------------------------------- |
| 100.0% |       2 | `MappingRF` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:92` |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|     % | Samples | Function                                                           | Location                                                                                                          |
| ----: | ------: | ------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| 99.7% |  28,540 | `eval(::Module, ::Any)`                                            | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:489`                       |
| 99.7% |  28,540 | `include_string(::typeof(identity), ::Module, ::String, ::String)` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/loading.jl:2856`                   |
| 99.7% |  28,540 | `_include(::Function, ::Module, ::String)`                         | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/loading.jl:2924`                   |
| 99.7% |  28,540 | `include(::Module, ::String)`                                      | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/Base.jl:306`                       |
| 99.7% |  28,540 | `exec_options(::Base.JLOptions)`                                   | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/client.jl:227`                     |
| 94.7% |  27,092 | `parse_workload`                                                   | `profile.jl:13`                                                                                                   |
| 94.7% |  27,092 | `macro expansion`                                                  | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/stdlib/v1.12/Profile/src/Profile.jl:82` |
| 94.7% |  27,092 | `capture_wall`                                                     | `profile.jl:38`                                                                                                   |
| 86.8% |  24,837 | `#write#57`                                                        | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:40`               |
| 66.5% |  19,030 | `#write#78`                                                        | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:159`              |
| 66.5% |  19,030 | `write`                                                            | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:147`              |
| 66.3% |  18,973 | `#write#80`                                                        | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:187`              |
| 63.8% |  18,272 | `#write#78`                                                        | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`              |
| 25.3% |   7,230 | `_symbol`                                                          | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`                |
| 25.3% |   7,230 | `getvalue`                                                         | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:187`              |
| 20.3% |   5,801 | `defaultminimum`                                                   | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:12`               |
| 20.2% |   5,793 | `foldl_impl`                                                       | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:40`                      |
| 20.2% |   5,793 | `mapfoldl_impl`                                                    | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:36`                      |
| 20.2% |   5,793 | `#mapfoldl#270`                                                    | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:167`                     |
| 20.2% |   5,793 | `mapfoldl`                                                         | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:167`                     |

#### Categories

##### Third-party

|     % | Samples | Function                                                                                                                                                                    | Location                                                                                             |
| ----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| 86.8% |  24,837 | `#write#57`                                                                                                                                                                 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:40`  |
| 66.5% |  19,030 | `#write#78`                                                                                                                                                                 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:159` |
| 66.5% |  19,030 | `write`                                                                                                                                                                     | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:147` |
| 66.3% |  18,973 | `#write#80`                                                                                                                                                                 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:187` |
| 63.8% |  18,272 | `#write#78`                                                                                                                                                                 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157` |
| 25.3% |   7,230 | `_symbol`                                                                                                                                                                   | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`   |
| 25.3% |   7,230 | `getvalue`                                                                                                                                                                  | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:187` |
| 20.3% |   5,801 | `defaultminimum`                                                                                                                                                            | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:12`  |
| 17.8% |   5,094 | `getvalue`                                                                                                                                                                  | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:127` |
| 17.8% |   5,091 | `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})`                                          | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40`  |
| 13.7% |   3,919 | `iterate`                                                                                                                                                                   | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:81`  |
| 12.1% |   3,469 | `iterate`                                                                                                                                                                   | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:78`  |
| 11.7% |   3,358 | `getvalue`                                                                                                                                                                  | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:214` |
|  7.9% |   2,260 | `var\"#write#97\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)`     | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:340` |
|  6.2% |   1,775 | `getindex`                                                                                                                                                                  | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:163` |
|  5.8% |   1,665 | `realloc!(::Vector{UInt8}, ::Int64, ::Int64)`                                                                                                                               | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:51`  |
|  5.3% |   1,520 | `var\"#read#6\"(::Bool, ::Nothing, ::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.read), ::String)`                                                  | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:30`   |
|  5.3% |   1,519 | `read`                                                                                                                                                                      | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:30`   |
|  4.5% |   1,283 | `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)`                | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:87`   |
|  4.4% |   1,257 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:87`   |

##### Standard library

|     % | Samples | Function                                                           | Location                                                                                                          |
| ----: | ------: | ------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| 99.7% |  28,540 | `eval(::Module, ::Any)`                                            | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:489`                       |
| 99.7% |  28,540 | `include_string(::typeof(identity), ::Module, ::String, ::String)` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/loading.jl:2856`                   |
| 99.7% |  28,540 | `_include(::Function, ::Module, ::String)`                         | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/loading.jl:2924`                   |
| 99.7% |  28,540 | `include(::Module, ::String)`                                      | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/Base.jl:306`                       |
| 99.7% |  28,540 | `exec_options(::Base.JLOptions)`                                   | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/client.jl:227`                     |
| 94.7% |  27,092 | `macro expansion`                                                  | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/stdlib/v1.12/Profile/src/Profile.jl:82` |
| 20.2% |   5,793 | `foldl_impl`                                                       | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:40`                      |
| 20.2% |   5,793 | `mapfoldl_impl`                                                    | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:36`                      |
| 20.2% |   5,793 | `#mapfoldl#270`                                                    | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:167`                     |
| 20.2% |   5,793 | `mapfoldl`                                                         | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:167`                     |
| 20.2% |   5,793 | `#mapreduce#274`                                                   | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:299`                     |
| 20.2% |   5,793 | `mapreduce`                                                        | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:299`                     |
| 20.2% |   5,793 | `#sum#277`                                                         | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:524`                     |
| 20.2% |   5,793 | `sum`                                                              | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:524`                     |
| 20.2% |   5,793 | `#sum#278`                                                         | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:553`                     |
| 20.2% |   5,793 | `sum`                                                              | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:553`                     |
| 20.2% |   5,793 | `_foldl_impl`                                                      | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:50`                      |
| 20.2% |   5,781 | `MappingRF`                                                        | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:92`                      |
| 20.2% |   5,777 | `_foldl_impl`                                                      | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:54`                      |
| 17.7% |   5,069 | `_foldl_impl`                                                      | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:48`                      |

##### Native

|     % | Samples | Function                                                                                                                                                                                | Location    |
| ----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 20.2% |   5,784 | `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})`                                                                                                            | `<unknown>` |
| 20.2% |   5,775 | `#defaultminimum##0`                                                                                                                                                                    | `<unknown>` |
| <0.1% |       4 | `(::JSON3.var\"#defaultminimum##0#defaultminimum##1\"{JSON3.Array{Int64, Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}}})(::Int64)` | `<unknown>` |

#### Callees

Callees ranked by contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `eval(::Module, ::Any)` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:489`)

|     % | Samples | Callee         | Location        |
| ----: | ------: | -------------- | --------------- |
| 94.9% |  27,092 | `capture_wall` | `profile.jl:38` |

##### `include_string(::typeof(identity), ::Module, ::String, ::String)` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/loading.jl:2856`)

|      % | Samples | Callee                  | Location                                                                                    |
| -----: | ------: | ----------------------- | ------------------------------------------------------------------------------------------- |
| 100.0% |  28,540 | `eval(::Module, ::Any)` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:489` |

##### `_include(::Function, ::Module, ::String)` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/loading.jl:2924`)

|      % | Samples | Callee                                                             | Location                                                                                        |
| -----: | ------: | ------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------- |
| 100.0% |  28,540 | `include_string(::typeof(identity), ::Module, ::String, ::String)` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/loading.jl:2856` |

##### `include(::Module, ::String)` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/Base.jl:306`)

|      % | Samples | Callee                                     | Location                                                                                        |
| -----: | ------: | ------------------------------------------ | ----------------------------------------------------------------------------------------------- |
| 100.0% |  28,540 | `_include(::Function, ::Module, ::String)` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/loading.jl:2924` |

##### `exec_options(::Base.JLOptions)` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/client.jl:227`)

|      % | Samples | Callee                        | Location                                                                                    |
| -----: | ------: | ----------------------------- | ------------------------------------------------------------------------------------------- |
| 100.0% |  28,540 | `include(::Module, ::String)` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/Base.jl:306` |

##### `parse_workload` (`profile.jl:13`)

|     % | Samples | Callee             | Location                                                                                              |
| ----: | ------: | ------------------ | ----------------------------------------------------------------------------------------------------- |
| 91.7% |  24,837 | `#write#57`        | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:40`   |
|  5.6% |   1,519 | `read`             | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:30`    |
|  1.0% |     280 | `length_continued` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:534` |
|  0.5% |     137 | `length_continued` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl`     |
|  0.1% |      29 | `length_continued` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:537` |

##### `macro expansion` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/stdlib/v1.12/Profile/src/Profile.jl:82`)

|      % | Samples | Callee           | Location        |
| -----: | ------: | ---------------- | --------------- |
| 100.0% |  27,092 | `parse_workload` | `profile.jl:13` |

##### `capture_wall` (`profile.jl:38`)

|      % | Samples | Callee            | Location                                                                                                          |
| -----: | ------: | ----------------- | ----------------------------------------------------------------------------------------------------------------- |
| 100.0% |  27,092 | `macro expansion` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/stdlib/v1.12/Profile/src/Profile.jl:82` |

##### `#write#57` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:40`)

|     % | Samples | Callee           | Location                                                                                             |
| ----: | ------: | ---------------- | ---------------------------------------------------------------------------------------------------- |
| 76.6% |  19,030 | `write`          | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:147` |
| 23.4% |   5,801 | `defaultminimum` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:12`  |

##### `#write#78` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:159`)

|     % | Samples | Callee      | Location                                                                                             |
| ----: | ------: | ----------- | ---------------------------------------------------------------------------------------------------- |
| 99.7% |  18,973 | `#write#80` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:187` |
|  0.1% |      19 | `#write#78` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157` |
|  0.1% |      13 | `iterate`   | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:81`  |
|  0.1% |      11 | `iterate`   | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:75`  |
| <0.1% |       2 | `iterate`   | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:78`  |

##### `write` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:147`)

|      % | Samples | Callee      | Location                                                                                             |
| -----: | ------: | ----------- | ---------------------------------------------------------------------------------------------------- |
| 100.0% |  19,030 | `#write#78` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:159` |

##### `#write#80` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:187`)

|     % | Samples | Callee            | Location                                                                                                 |
| ----: | ------: | ----------------- | -------------------------------------------------------------------------------------------------------- |
| 96.2% |  18,249 | `#write#78`       | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`     |
|  3.0% |     561 | `isassigned`      | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/multidimensional.jl:1653` |
|  1.9% |     368 | `getindex`        | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:163`     |
| <0.1% |       6 | `indexed_iterate` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/tuple.jl:162`             |
| <0.1% |       5 | `isassigned`      | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/multidimensional.jl:1652` |

##### `#write#78` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`)

|     % | Samples | Callee                                                                                                                                                                  | Location                                                                                             |
| ----: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| 78.4% |  14,330 | `#write#78`                                                                                                                                                             | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157` |
| 12.3% |   2,254 | `var\"#write#97\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:340` |
| 10.3% |   1,877 | `iterate`                                                                                                                                                               | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:78`  |
| 10.0% |   1,823 | `iterate`                                                                                                                                                               | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:81`  |
|  7.4% |   1,359 | `indexed_iterate`                                                                                                                                                       | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/tuple.jl:162`         |

##### `getvalue` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:187`)

|      % | Samples | Callee    | Location                                                                                           |
| -----: | ------: | --------- | -------------------------------------------------------------------------------------------------- |
| 100.0% |   7,230 | `_symbol` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:1` |

##### `defaultminimum` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:12`)

|     % | Samples | Callee                                                                                                                       | Location                                                                                           |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| 99.9% |   5,793 | `sum`                                                                                                                        | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:553`      |
|  1.1% |      65 | `isempty(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/essentials.jl:1072` |
|  0.1% |       8 | `isempty(::JSON3.Object{Base.CodeUnits{UInt8, String}, Vector{UInt64}})`                                                     | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/essentials.jl:1072` |

##### `foldl_impl` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:40`)

|      % | Samples | Callee        | Location                                                                                     |
| -----: | ------: | ------------- | -------------------------------------------------------------------------------------------- |
| 100.0% |   5,793 | `_foldl_impl` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:50` |
|  99.7% |   5,777 | `_foldl_impl` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:54` |
|  87.4% |   5,063 | `_foldl_impl` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:48` |

##### `mapfoldl_impl` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:36`)

|      % | Samples | Callee       | Location                                                                                     |
| -----: | ------: | ------------ | -------------------------------------------------------------------------------------------- |
| 100.0% |   5,793 | `foldl_impl` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:40` |

##### `#mapfoldl#270` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:167`)

|      % | Samples | Callee          | Location                                                                                     |
| -----: | ------: | --------------- | -------------------------------------------------------------------------------------------- |
| 100.0% |   5,793 | `mapfoldl_impl` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:36` |
|  <0.1% |       2 | `mapfoldl_impl` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:35` |

##### `mapfoldl` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:167`)

|      % | Samples | Callee          | Location                                                                                      |
| -----: | ------: | --------------- | --------------------------------------------------------------------------------------------- |
| 100.0% |   5,793 | `#mapfoldl#270` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:167` |

##### `#mapreduce#274` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:299`)

|      % | Samples | Callee     | Location                                                                                      |
| -----: | ------: | ---------- | --------------------------------------------------------------------------------------------- |
| 100.0% |   5,793 | `mapfoldl` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:167` |

##### `mapreduce` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:299`)

|      % | Samples | Callee           | Location                                                                                      |
| -----: | ------: | ---------------- | --------------------------------------------------------------------------------------------- |
| 100.0% |   5,793 | `#mapreduce#274` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:299` |

##### `#sum#277` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:524`)

|      % | Samples | Callee      | Location                                                                                      |
| -----: | ------: | ----------- | --------------------------------------------------------------------------------------------- |
| 100.0% |   5,793 | `mapreduce` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:299` |

##### `sum` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:524`)

|      % | Samples | Callee     | Location                                                                                      |
| -----: | ------: | ---------- | --------------------------------------------------------------------------------------------- |
| 100.0% |   5,793 | `#sum#277` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:524` |

##### `#sum#278` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:553`)

|      % | Samples | Callee | Location                                                                                      |
| -----: | ------: | ------ | --------------------------------------------------------------------------------------------- |
| 100.0% |   5,793 | `sum`  | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:524` |

##### `sum` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:553`)

|      % | Samples | Callee     | Location                                                                                      |
| -----: | ------: | ---------- | --------------------------------------------------------------------------------------------- |
| 100.0% |   5,793 | `#sum#278` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:553` |

##### `_foldl_impl` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:50`)

|     % | Samples | Callee                                                                       | Location                                                                                         |
| ----: | ------: | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 99.8% |   5,779 | `MappingRF`                                                                  | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:92`     |
|  0.2% |      11 | `iterate`                                                                    | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/iterators.jl:682` |
|  0.1% |       3 | `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` | `<unknown>`                                                                                      |

##### `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` (`<unknown>`)

|     % | Samples | Callee                                                                                                                       | Location                                                                                           |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| 99.9% |   5,777 | `sum`                                                                                                                        | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:524`      |
| 58.3% |   3,373 | `sum`                                                                                                                        | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:553`      |
|  3.1% |     181 | `isempty(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/essentials.jl:1072` |
|  0.2% |      10 | `defaultminimum`                                                                                                             | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:6` |
|  0.1% |       4 | `indexed_iterate`                                                                                                            | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/pair.jl:42`         |

##### `MappingRF` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:92`)

|      % | Samples | Callee                                                                                                                                                                                  | Location                                                                                     |
| -----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| 100.0% |   5,779 | `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})`                                                                                                            | `<unknown>`                                                                                  |
|   0.3% |      16 | `BottomRF`                                                                                                                                                                              | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:77` |
|   0.1% |       4 | `(::JSON3.var\"#defaultminimum##0#defaultminimum##1\"{JSON3.Array{Int64, Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}}})(::Int64)` | `<unknown>`                                                                                  |

##### `_foldl_impl` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:54`)

|     % | Samples | Callee               | Location                                                                                     |
| ----: | ------: | -------------------- | -------------------------------------------------------------------------------------------- |
| 99.9% |   5,772 | `#defaultminimum##0` | `<unknown>`                                                                                  |
|  0.1% |       8 | `MappingRF`          | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:92` |

##### `#defaultminimum##0` (`<unknown>`)

|     % | Samples | Callee           | Location                                                                                                 |
| ----: | ------: | ---------------- | -------------------------------------------------------------------------------------------------------- |
| 88.5% |   5,109 | `defaultminimum` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:12`      |
|  8.4% |     485 | `isassigned`     | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/multidimensional.jl:1653` |
|  6.3% |     362 | `getindex`       | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:163`     |
|  0.1% |       4 | `isassigned`     | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/multidimensional.jl:1652` |
| <0.1% |       2 | `isassigned`     | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/multidimensional.jl`      |

##### `getvalue` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:127`)

|     % | Samples | Callee                                                                                                                             | Location                                                                                            |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| 99.9% |   5,090 | `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40` |

##### `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40`)

|     % | Samples | Callee                                                | Location                                                                                             |
| ----: | ------: | ----------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| 74.2% |   3,780 | `getvalue`                                            | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:187` |
| 22.7% |   1,154 | `setindex!(::Dict{Symbol, Int64}, ::Int64, ::Symbol)` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/dict.jl:354`          |
|  1.5% |      78 | `+`                                                   | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/int.jl:87`            |
|  0.8% |      41 | `getindex`                                            | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/subarray.jl:339`      |
|  0.1% |       5 | `gettapelen`                                          | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:118` |

##### `_foldl_impl` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:48`)

|     % | Samples | Callee                                                                       | Location                                                                                            |
| ----: | ------: | ---------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| 70.9% |   3,594 | `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` | `<unknown>`                                                                                         |
| 57.9% |   2,937 | `iterate`                                                                    | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/iterators.jl:682`    |
|  6.1% |     307 | `MappingRF`                                                                  | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:92`        |
|  4.5% |     226 | `BottomRF`                                                                   | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:78`        |
|  3.3% |     165 | `iterate`                                                                    | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:75` |

##### `iterate` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:81`)

|     % | Samples | Callee     | Location                                                                                             |
| ----: | ------: | ---------- | ---------------------------------------------------------------------------------------------------- |
| 85.7% |   3,358 | `getvalue` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:214` |
|  6.5% |     253 | `getvalue` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:218` |
|  4.1% |     160 | `getvalue` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:216` |
|  3.0% |     117 | `getvalue` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:213` |
|  0.3% |      13 | `getvalue` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl`     |

##### `iterate` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:78`)

|     % | Samples | Callee     | Location                                                                                             |
| ----: | ------: | ---------- | ---------------------------------------------------------------------------------------------------- |
| 99.3% |   3,444 | `getvalue` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:187` |
|  0.6% |      21 | `getvalue` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl`     |
|  0.1% |       4 | `getvalue` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:184` |

##### `getvalue` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:214`)

|     % | Samples | Callee     | Location                                                                                             |
| ----: | ------: | ---------- | ---------------------------------------------------------------------------------------------------- |
| 99.0% |   3,325 | `getvalue` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:127` |
|  1.0% |      33 | `getvalue` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:126` |

##### `var\"#write#97\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:340`)

|     % | Samples | Callee                                        | Location                                                                                             |
| ----: | ------: | --------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| 73.7% |   1,665 | `realloc!(::Vector{UInt8}, ::Int64, ::Int64)` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:51`  |
|  9.1% |     206 | `escapelength`                                | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:331` |
|  7.1% |     161 | `macro expansion`                             | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/simdloop.jl:77`       |
|  1.8% |      41 | `setindex!`                                   | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/array.jl:986`         |
|  0.9% |      21 | `iterate`                                     | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/range.jl:921`         |

##### `getindex` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:163`)

|     % | Samples | Callee     | Location                                                                                             |
| ----: | ------: | ---------- | ---------------------------------------------------------------------------------------------------- |
| 99.7% |   1,769 | `getvalue` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:127` |
|  0.3% |       6 | `getvalue` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:126` |

##### `realloc!(::Vector{UInt8}, ::Int64, ::Int64)` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:51`)

|      % | Samples | Callee  | Location                                                                                     |
| -----: | ------: | ------- | -------------------------------------------------------------------------------------------- |
| 100.0% |   1,665 | `zeros` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/array.jl:591` |

##### `var\"#read#6\"(::Bool, ::Nothing, ::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.read), ::String)` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:30`)

|     % | Samples | Callee                                                                         | Location                                                                                            |
| ----: | ------: | ------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------- |
| 82.5% |   1,254 | `read!`                                                                        | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:87`  |
| 17.0% |     258 | `Array`                                                                        | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:647`         |
|  0.4% |       6 | `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, Vector{UInt64}})` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40` |

##### `read` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:30`)

|      % | Samples | Callee                                                                                                                     | Location                                                                                           |
| -----: | ------: | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| 100.0% |   1,519 | `var\"#read#6\"(::Bool, ::Nothing, ::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.read), ::String)` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:30` |

##### `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:87`)

|     % | Samples | Callee                                                                                                                                                                               | Location                                                                                                    |
| ----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------- |
| 97.7% |   1,254 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:218`         |
| 97.4% |   1,250 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Array}, ::Bool)`  | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:312`         |
| 23.0% |     295 | `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{String})`                                                                       | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:142`         |
|  3.9% |      50 | `typeparser(::Type{Float64}, ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Int16, ::Parsers.Options)`                                                                | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/Parsers/05lwR/src/components.jl:392` |
|  1.8% |      23 | `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.False})`                                                                  | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:189`         |

##### `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:87`)

|     % | Samples | Callee                                                                                                                                                       | Location                                                                                           |
| ----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------- |
| 99.9% |   1,256 | `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:87` |

##### `(::JSON3.var\"#defaultminimum##0#defaultminimum##1\"{JSON3.Array{Int64, Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}}})(::Int64)` (`<unknown>`)

|     % | Samples | Callee       | Location                                                                                                 |
| ----: | ------: | ------------ | -------------------------------------------------------------------------------------------------------- |
| 25.0% |       1 | `isassigned` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/multidimensional.jl:1652` |
| 25.0% |       1 | `isassigned` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/multidimensional.jl:1644` |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame.

Common call stack: `include_string(::typeof(identity), ::Module, ::String, ::String)` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/loading.jl:2856`) ← `_include(::Function, ::Module, ::String)` (2924) ← `include(::Module, ::String)` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/Base.jl:306`) ← `exec_options(::Base.JLOptions)` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/client.jl:227`)

|     % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ----: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 15.8% |   4,525 | `#write#78` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `#write#78` (157) ← `#write#80` (187) ← `#write#78` (159) ← `write` (147) ← `#write#57` (40) ← `parse_workload` (`profile.jl:13`) ← `macro expansion` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/stdlib/v1.12/Profile/src/Profile.jl:82`) ← `capture_wall` (`profile.jl:38`) ← `eval(::Module, ::Any)` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:489`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  8.6% |   2,449 | `#write#78` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `#write#78` (157) ← `#write#78` (157) ← `#write#80` (187) ← `#write#78` (159) ← `write` (147) ← `#write#57` (40) ← `parse_workload` (`profile.jl:13`) ← `macro expansion` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/stdlib/v1.12/Profile/src/Profile.jl:82`) ← `capture_wall` (`profile.jl:38`) ← `eval(::Module, ::Any)` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:489`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  6.5% |   1,871 | `#write#78` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `#write#80` (187) ← `#write#78` (159) ← `write` (147) ← `#write#57` (40) ← `parse_workload` (`profile.jl:13`) ← `macro expansion` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/stdlib/v1.12/Profile/src/Profile.jl:82`) ← `capture_wall` (`profile.jl:38`) ← `eval(::Module, ::Any)` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:489`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  5.1% |   1,448 | `eval(::Module, ::Any)` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:489`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  4.2% |   1,214 | `GenericMemory` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:588`) ← `Array` (647) ← `Array` (660) ← `zeros` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/array.jl:595`) ← `zeros` (591) ← `realloc!(::Vector{UInt8}, ::Int64, ::Int64)` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:51`) ← `var\"#write#97\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` (340) ← `#write#78` (157) ← `#write#78` (157) ← `#write#80` (187) ← `#write#78` (159) ← `write` (147) ← `#write#57` (40) ← `parse_workload` (`profile.jl:13`) ← `macro expansion` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/stdlib/v1.12/Profile/src/Profile.jl:82`) ← `capture_wall` (`profile.jl:38`) ← `eval(::Module, ::Any)` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:489`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  3.2% |     920 | `_symbol` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`) ← `getvalue` (187) ← `iterate` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:78`) ← `#write#78` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `#write#78` (157) ← `#write#80` (187) ← `#write#78` (159) ← `write` (147) ← `#write#57` (40) ← `parse_workload` (`profile.jl:13`) ← `macro expansion` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/stdlib/v1.12/Profile/src/Profile.jl:82`) ← `capture_wall` (`profile.jl:38`) ← `eval(::Module, ::Any)` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:489`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  2.6% |     750 | `_symbol` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`) ← `getvalue` (187) ← `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40`) ← `getvalue` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:127`) ← `getvalue` (214) ← `iterate` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:81`) ← `#write#78` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `#write#80` (187) ← `#write#78` (159) ← `write` (147) ← `#write#57` (40) ← `parse_workload` (`profile.jl:13`) ← `macro expansion` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/stdlib/v1.12/Profile/src/Profile.jl:82`) ← `capture_wall` (`profile.jl:38`) ← `eval(::Module, ::Any)` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:489`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  2.4% |     696 | `_symbol` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`) ← `getvalue` (187) ← `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40`) ← `getvalue` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:127`) ← `getvalue` (214) ← `iterate` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:81`) ← `iterate` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/iterators.jl:682`) ← `_foldl_impl` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:48`) ← `foldl_impl` (40) ← `mapfoldl_impl` (36) ← `#mapfoldl#270` (167) ← `mapfoldl` (167) ← `#mapreduce#274` (299) ← `mapreduce` (299) ← `#sum#277` (524) ← `sum` (524) ← `#sum#278` (553) ← `sum` (553) ← `defaultminimum` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:12`) ← `#defaultminimum##0` ← `_foldl_impl` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:54`) ← `foldl_impl` (40) ← `mapfoldl_impl` (36) ← `#mapfoldl#270` (167) ← `mapfoldl` (167) ← `#mapreduce#274` (299) ← `mapreduce` (299) ← `#sum#277` (524) ← `sum` (524) ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `MappingRF` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:92`) ← `_foldl_impl` (50) ← `foldl_impl` (40) ← `mapfoldl_impl` (36) ← `#mapfoldl#270` (167) ← `mapfoldl` (167) ← `#mapreduce#274` (299) ← `mapreduce` (299) ← `#sum#277` (524) ← `sum` (524) ← `#sum#278` (553) ← `sum` (553) ← `defaultminimum` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:12`) ← `#write#57` (40) ← `parse_workload` (`profile.jl:13`) ← `macro expansion` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/stdlib/v1.12/Profile/src/Profile.jl:82`) ← `capture_wall` (`profile.jl:38`) ← `eval(::Module, ::Any)` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:489`)                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  2.2% |     643 | `indexed_iterate` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/tuple.jl:162`) ← `#write#78` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `#write#78` (157) ← `#write#80` (187) ← `#write#78` (159) ← `write` (147) ← `#write#57` (40) ← `parse_workload` (`profile.jl:13`) ← `macro expansion` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/stdlib/v1.12/Profile/src/Profile.jl:82`) ← `capture_wall` (`profile.jl:38`) ← `eval(::Module, ::Any)` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:489`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  2.2% |     631 | `_symbol` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`) ← `getvalue` (187) ← `iterate` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:78`) ← `iterate` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/iterators.jl:682`) ← `_foldl_impl` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:48`) ← `foldl_impl` (40) ← `mapfoldl_impl` (36) ← `#mapfoldl#270` (167) ← `mapfoldl` (167) ← `#mapreduce#274` (299) ← `mapreduce` (299) ← `#sum#277` (524) ← `sum` (524) ← `#sum#278` (553) ← `sum` (553) ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `_foldl_impl` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:48`) ← `foldl_impl` (40) ← `mapfoldl_impl` (36) ← `#mapfoldl#270` (167) ← `mapfoldl` (167) ← `#mapreduce#274` (299) ← `mapreduce` (299) ← `#sum#277` (524) ← `sum` (524) ← `#sum#278` (553) ← `sum` (553) ← `defaultminimum` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:12`) ← `#defaultminimum##0` ← `_foldl_impl` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:54`) ← `foldl_impl` (40) ← `mapfoldl_impl` (36) ← `#mapfoldl#270` (167) ← `mapfoldl` (167) ← `#mapreduce#274` (299) ← `mapreduce` (299) ← `#sum#277` (524) ← `sum` (524) ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `MappingRF` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:92`) ← `_foldl_impl` (50) ← `foldl_impl` (40) ← `mapfoldl_impl` (36) ← `#mapfoldl#270` (167) ← `mapfoldl` (167) ← `#mapreduce#274` (299) ← `mapreduce` (299) ← `#sum#277` (524) ← `sum` (524) ← `#sum#278` (553) ← `sum` (553) ← `defaultminimum` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:12`) ← `#write#57` (40) ← `parse_workload` (`profile.jl:13`) ← `macro expansion` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/stdlib/v1.12/Profile/src/Profile.jl:82`) ← `capture_wall` (`profile.jl:38`) ← `eval(::Module, ::Any)` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:489`)                                                                                                                                                                                                                                                                                                                                                                                                    |
|  1.7% |     480 | `_symbol` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`) ← `getvalue` (187) ← `iterate` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:78`) ← `#write#78` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `#write#78` (157) ← `#write#78` (157) ← `#write#80` (187) ← `#write#78` (159) ← `write` (147) ← `#write#57` (40) ← `parse_workload` (`profile.jl:13`) ← `macro expansion` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/stdlib/v1.12/Profile/src/Profile.jl:82`) ← `capture_wall` (`profile.jl:38`) ← `eval(::Module, ::Any)` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:489`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  1.5% |     423 | `#write#78` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `#write#80` (187) ← `#write#78` (157) ← `#write#78` (157) ← `#write#80` (187) ← `#write#78` (159) ← `write` (147) ← `#write#57` (40) ← `parse_workload` (`profile.jl:13`) ← `macro expansion` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/stdlib/v1.12/Profile/src/Profile.jl:82`) ← `capture_wall` (`profile.jl:38`) ← `eval(::Module, ::Any)` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:489`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  1.4% |     413 | `_symbol` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`) ← `getvalue` (187) ← `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40`) ← `getvalue` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:127`) ← `getvalue` (214) ← `iterate` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:81`) ← `#write#78` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `#write#78` (157) ← `#write#80` (187) ← `#write#78` (159) ← `write` (147) ← `#write#57` (40) ← `parse_workload` (`profile.jl:13`) ← `macro expansion` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/stdlib/v1.12/Profile/src/Profile.jl:82`) ← `capture_wall` (`profile.jl:38`) ← `eval(::Module, ::Any)` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:489`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  1.4% |     388 | `_symbol` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`) ← `getvalue` (187) ← `iterate` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:78`) ← `#write#78` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `#write#80` (187) ← `#write#78` (159) ← `write` (147) ← `#write#57` (40) ← `parse_workload` (`profile.jl:13`) ← `macro expansion` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/stdlib/v1.12/Profile/src/Profile.jl:82`) ← `capture_wall` (`profile.jl:38`) ← `eval(::Module, ::Any)` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:489`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  1.3% |     365 | `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `_foldl_impl` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:48`) ← `foldl_impl` (40) ← `mapfoldl_impl` (36) ← `#mapfoldl#270` (167) ← `mapfoldl` (167) ← `#mapreduce#274` (299) ← `mapreduce` (299) ← `#sum#277` (524) ← `sum` (524) ← `#sum#278` (553) ← `sum` (553) ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `_foldl_impl` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:48`) ← `foldl_impl` (40) ← `mapfoldl_impl` (36) ← `#mapfoldl#270` (167) ← `mapfoldl` (167) ← `#mapreduce#274` (299) ← `mapreduce` (299) ← `#sum#277` (524) ← `sum` (524) ← `#sum#278` (553) ← `sum` (553) ← `defaultminimum` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:12`) ← `#defaultminimum##0` ← `_foldl_impl` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:54`) ← `foldl_impl` (40) ← `mapfoldl_impl` (36) ← `#mapfoldl#270` (167) ← `mapfoldl` (167) ← `#mapreduce#274` (299) ← `mapreduce` (299) ← `#sum#277` (524) ← `sum` (524) ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `MappingRF` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:92`) ← `_foldl_impl` (50) ← `foldl_impl` (40) ← `mapfoldl_impl` (36) ← `#mapfoldl#270` (167) ← `mapfoldl` (167) ← `#mapreduce#274` (299) ← `mapreduce` (299) ← `#sum#277` (524) ← `sum` (524) ← `#sum#278` (553) ← `sum` (553) ← `defaultminimum` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:12`) ← `#write#57` (40) ← `parse_workload` (`profile.jl:13`) ← `macro expansion` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/stdlib/v1.12/Profile/src/Profile.jl:82`) ← `capture_wall` (`profile.jl:38`) ← `eval(::Module, ::Any)` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:489`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  1.3% |     364 | `_symbol` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`) ← `getvalue` (187) ← `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40`) ← `getvalue` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:127`) ← `getvalue` (214) ← `iterate` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:81`) ← `iterate` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/iterators.jl:682`) ← `_foldl_impl` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:48`) ← `foldl_impl` (40) ← `mapfoldl_impl` (36) ← `#mapfoldl#270` (167) ← `mapfoldl` (167) ← `#mapreduce#274` (299) ← `mapreduce` (299) ← `#sum#277` (524) ← `sum` (524) ← `#sum#278` (553) ← `sum` (553) ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `_foldl_impl` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:48`) ← `foldl_impl` (40) ← `mapfoldl_impl` (36) ← `#mapfoldl#270` (167) ← `mapfoldl` (167) ← `#mapreduce#274` (299) ← `mapreduce` (299) ← `#sum#277` (524) ← `sum` (524) ← `#sum#278` (553) ← `sum` (553) ← `defaultminimum` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:12`) ← `#defaultminimum##0` ← `_foldl_impl` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:54`) ← `foldl_impl` (40) ← `mapfoldl_impl` (36) ← `#mapfoldl#270` (167) ← `mapfoldl` (167) ← `#mapreduce#274` (299) ← `mapreduce` (299) ← `#sum#277` (524) ← `sum` (524) ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `MappingRF` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:92`) ← `_foldl_impl` (50) ← `foldl_impl` (40) ← `mapfoldl_impl` (36) ← `#mapfoldl#270` (167) ← `mapfoldl` (167) ← `#mapreduce#274` (299) ← `mapreduce` (299) ← `#sum#277` (524) ← `sum` (524) ← `#sum#278` (553) ← `sum` (553) ← `defaultminimum` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:12`) ← `#write#57` (40) ← `parse_workload` (`profile.jl:13`) ← `macro expansion` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/stdlib/v1.12/Profile/src/Profile.jl:82`) ← `capture_wall` (`profile.jl:38`) ← `eval(::Module, ::Any)` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:489`)                  |
|  1.1% |     302 | `_symbol` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`) ← `getvalue` (187) ← `iterate` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:78`) ← `iterate` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/iterators.jl:682`) ← `_foldl_impl` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:48`) ← `foldl_impl` (40) ← `mapfoldl_impl` (36) ← `#mapfoldl#270` (167) ← `mapfoldl` (167) ← `#mapreduce#274` (299) ← `mapreduce` (299) ← `#sum#277` (524) ← `sum` (524) ← `#sum#278` (553) ← `sum` (553) ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `_foldl_impl` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:48`) ← `foldl_impl` (40) ← `mapfoldl_impl` (36) ← `#mapfoldl#270` (167) ← `mapfoldl` (167) ← `#mapreduce#274` (299) ← `mapreduce` (299) ← `#sum#277` (524) ← `sum` (524) ← `#sum#278` (553) ← `sum` (553) ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `_foldl_impl` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:48`) ← `foldl_impl` (40) ← `mapfoldl_impl` (36) ← `#mapfoldl#270` (167) ← `mapfoldl` (167) ← `#mapreduce#274` (299) ← `mapreduce` (299) ← `#sum#277` (524) ← `sum` (524) ← `#sum#278` (553) ← `sum` (553) ← `defaultminimum` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:12`) ← `#defaultminimum##0` ← `_foldl_impl` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:54`) ← `foldl_impl` (40) ← `mapfoldl_impl` (36) ← `#mapfoldl#270` (167) ← `mapfoldl` (167) ← `#mapreduce#274` (299) ← `mapreduce` (299) ← `#sum#277` (524) ← `sum` (524) ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `MappingRF` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:92`) ← `_foldl_impl` (50) ← `foldl_impl` (40) ← `mapfoldl_impl` (36) ← `#mapfoldl#270` (167) ← `mapfoldl` (167) ← `#mapreduce#274` (299) ← `mapreduce` (299) ← `#sum#277` (524) ← `sum` (524) ← `#sum#278` (553) ← `sum` (553) ← `defaultminimum` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:12`) ← `#write#57` (40) ← `parse_workload` (`profile.jl:13`) ← `macro expansion` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/stdlib/v1.12/Profile/src/Profile.jl:82`) ← `capture_wall` (`profile.jl:38`) ← `eval(::Module, ::Any)` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:489`) |
|  1.0% |     299 | `GenericMemory` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:588`) ← `Array` (647) ← `Array` (660) ← `zeros` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/array.jl:595`) ← `zeros` (591) ← `realloc!(::Vector{UInt8}, ::Int64, ::Int64)` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:51`) ← `var\"#write#97\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` (340) ← `#write#78` (157) ← `#write#78` (157) ← `#write#78` (157) ← `#write#80` (187) ← `#write#78` (159) ← `write` (147) ← `#write#57` (40) ← `parse_workload` (`profile.jl:13`) ← `macro expansion` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/stdlib/v1.12/Profile/src/Profile.jl:82`) ← `capture_wall` (`profile.jl:38`) ← `eval(::Module, ::Any)` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:489`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  1.0% |     294 | `_symbol` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`) ← `getvalue` (187) ← `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40`) ← `getvalue` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:127`) ← `getindex` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:163`) ← `isassigned` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/multidimensional.jl:1653`) ← `#write#80` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:187`) ← `#write#78` (159) ← `write` (147) ← `#write#57` (40) ← `parse_workload` (`profile.jl:13`) ← `macro expansion` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/stdlib/v1.12/Profile/src/Profile.jl:82`) ← `capture_wall` (`profile.jl:38`) ← `eval(::Module, ::Any)` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:489`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  1.0% |     290 | `indexed_iterate` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/tuple.jl:162`) ← `#write#78` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `#write#78` (157) ← `#write#78` (157) ← `#write#80` (187) ← `#write#78` (159) ← `write` (147) ← `#write#57` (40) ← `parse_workload` (`profile.jl:13`) ← `macro expansion` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/stdlib/v1.12/Profile/src/Profile.jl:82`) ← `capture_wall` (`profile.jl:38`) ← `eval(::Module, ::Any)` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:489`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |

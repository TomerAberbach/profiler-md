# Sampling profile

Collected 26,316 samples.

| Category         |     % | Samples |
| ---------------- | ----: | ------: |
| Third-party      | 63.0% |  16,590 |
| Standard library | 33.1% |   8,723 |
| Native           |  3.7% |     964 |
| Ours             |  0.1% |      39 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|     % | Samples | Function                                                                                                                                                                                                                         | Location                                                                                             |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| 33.0% |   8,672 | `#write#78`                                                                                                                                                                                                                      | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`         |
| 24.9% |   6,541 | `_symbol`                                                                                                                                                                                                                        | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`           |
|  9.5% |   2,512 | `GenericMemory`                                                                                                                                                                                                                  | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:588`          |
|  5.0% |   1,321 | `indexed_iterate`                                                                                                                                                                                                                | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/tuple.jl:162`         |
|  3.6% |     960 | `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})`                                                                                                                                                     | `<unknown>`                                                                                          |
|  3.3% |     858 | `eval(::Module, ::Any)`                                                                                                                                                                                                          | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:489`          |
|  1.8% |     482 | `unsafe_load`                                                                                                                                                                                                                    | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/pointer.jl:151`       |
|  1.6% |     421 | `ht_keyindex2_shorthash!(::Dict{Symbol, Int64}, ::Symbol)`                                                                                                                                                                       | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/dict.jl:265`          |
|  1.4% |     358 | `BottomRF`                                                                                                                                                                                                                       | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:78`         |
|  1.3% |     333 | `+`                                                                                                                                                                                                                              | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/int.jl:87`            |
|  1.0% |     276 | `_setindex!`                                                                                                                                                                                                                     | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/array.jl:991`         |
|  0.9% |     242 | `iterate`                                                                                                                                                                                                                        | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:75`          |
|  0.9% |     235 | `_foldl_impl`                                                                                                                                                                                                                    | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:55`         |
|  0.8% |     212 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/read.jl:218`          |
|  0.7% |     193 | `getindex`                                                                                                                                                                                                                       | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/essentials.jl:920`    |
|  0.6% |     164 | `unsafe_string`                                                                                                                                                                                                                  | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:99` |
|  0.6% |     154 | `checkbounds`                                                                                                                                                                                                                    | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/basic.jl:217` |
|  0.5% |     144 | `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{String})`                                                                                                                   | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/read.jl:142`          |
|  0.5% |     128 | `length_continued`                                                                                                                                                                                                               | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl`    |
|  0.4% |     112 | `#write#80`                                                                                                                                                                                                                      | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:73`          |

#### Categories

##### Third-party

|     % | Samples | Function                                                                                                                                                                                                                         | Location                                                                                      |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| 33.0% |   8,672 | `#write#78`                                                                                                                                                                                                                      | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`  |
| 24.9% |   6,541 | `_symbol`                                                                                                                                                                                                                        | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`    |
|  0.9% |     242 | `iterate`                                                                                                                                                                                                                        | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:75`   |
|  0.8% |     212 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/read.jl:218`   |
|  0.5% |     144 | `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{String})`                                                                                                                   | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/read.jl:142`   |
|  0.4% |     112 | `#write#80`                                                                                                                                                                                                                      | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:73`   |
|  0.4% |      96 | `getvalue`                                                                                                                                                                                                                       | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:213`  |
|  0.3% |      82 | `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)`                                                                     | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/read.jl:87`    |
|  0.3% |      68 | `var\"#write#97\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)`                                                          | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:340`  |
|  0.2% |      53 | `#write#80`                                                                                                                                                                                                                      | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:187`  |
|  0.2% |      40 | `iterate`                                                                                                                                                                                                                        | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl`      |
|  0.1% |      36 | `macro expansion`                                                                                                                                                                                                                | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:23`   |
|  0.1% |      32 | `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})`                                                                                               | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40`   |
|  0.1% |      29 | `var\"#write#85\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.NumberType, ::Vector{UInt8}, ::Int64, ::Int64, ::Int64)`                                                           | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:224`  |
|  0.1% |      24 | `getvalue(::Type{JSON3.Array}, ::Base.CodeUnits{UInt8, String}, ::SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}, ::Int64, ::UInt64)`                                                                        | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:131`  |
|  0.1% |      24 | `getvalue`                                                                                                                                                                                                                       | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl`      |
|  0.1% |      22 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)`                                                      | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/read.jl:87`    |
|  0.1% |      19 | `unescape(::JSON3.PointerString)`                                                                                                                                                                                                | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/strings.jl:48` |
|  0.1% |      18 | `var\"#write#83\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.BoolType, ::Vector{UInt8}, ::Int64, ::Int64, ::Bool)`                                                              | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:209`  |
|  0.1% |      14 | `macro expansion`                                                                                                                                                                                                                | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:14`   |

##### Standard library

|    % | Samples | Function                                                   | Location                                                                                              |
| ---: | ------: | ---------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| 9.5% |   2,512 | `GenericMemory`                                            | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:588`           |
| 5.0% |   1,321 | `indexed_iterate`                                          | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/tuple.jl:162`          |
| 3.3% |     858 | `eval(::Module, ::Any)`                                    | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:489`           |
| 1.8% |     482 | `unsafe_load`                                              | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/pointer.jl:151`        |
| 1.6% |     421 | `ht_keyindex2_shorthash!(::Dict{Symbol, Int64}, ::Symbol)` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/dict.jl:265`           |
| 1.4% |     358 | `BottomRF`                                                 | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:78`          |
| 1.3% |     333 | `+`                                                        | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/int.jl:87`             |
| 1.0% |     276 | `_setindex!`                                               | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/array.jl:991`          |
| 0.9% |     235 | `_foldl_impl`                                              | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:55`          |
| 0.7% |     193 | `getindex`                                                 | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/essentials.jl:920`     |
| 0.6% |     164 | `unsafe_string`                                            | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:99`  |
| 0.6% |     154 | `checkbounds`                                              | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/basic.jl:217`  |
| 0.5% |     128 | `length_continued`                                         | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl`     |
| 0.4% |     109 | `unsafe_string`                                            | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:103` |
| 0.4% |     102 | `==`                                                       | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/promotion.jl:637`      |
| 0.4% |      94 | `getproperty`                                              | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/Base_compiler.jl:54`   |
| 0.3% |      89 | `Array`                                                    | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:648`           |
| 0.3% |      75 | `checkbounds`                                              | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/basic.jl:209`  |
| 0.3% |      75 | `&`                                                        | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/int.jl:353`            |
| 0.2% |      54 | `macro expansion`                                          | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/simdloop.jl:75`        |

##### Native

|     % | Samples | Function                                                                                                                                                                                | Location    |
| ----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
|  3.6% |     960 | `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})`                                                                                                            | `<unknown>` |
| <0.1% |       2 | `#defaultminimum##0`                                                                                                                                                                    | `<unknown>` |
| <0.1% |       2 | `(::JSON3.var\"#defaultminimum##0#defaultminimum##1\"{JSON3.Array{Int64, Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}}})(::Int64)` | `<unknown>` |

#### Lines

Lines ranked by contribution to each function's self samples.

##### `#write#78` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`)

|     % | Samples | Location                                                                                     |
| ----: | ------: | -------------------------------------------------------------------------------------------- |
| 68.9% |   5,975 | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:157` |
| 16.1% |   1,393 | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:60`  |
|  6.8% |     592 | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:73`  |
|  3.4% |     294 | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:155` |
|  2.6% |     222 | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:72`  |

##### `_symbol` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`)

|      % | Samples | Location                                                                                   |
| -----: | ------: | ------------------------------------------------------------------------------------------ |
| 100.0% |   6,541 | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:1` |

##### `GenericMemory` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:588`)

|      % | Samples | Location                                                                                    |
| -----: | ------: | ------------------------------------------------------------------------------------------- |
| 100.0% |   2,512 | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:588` |

##### `indexed_iterate` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/tuple.jl:162`)

|      % | Samples | Location                                                                                     |
| -----: | ------: | -------------------------------------------------------------------------------------------- |
| 100.0% |   1,321 | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/tuple.jl:162` |

##### `eval(::Module, ::Any)` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:489`)

|      % | Samples | Location                                                                                    |
| -----: | ------: | ------------------------------------------------------------------------------------------- |
| 100.0% |     858 | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:489` |

##### `unsafe_load` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/pointer.jl:151`)

|      % | Samples | Location                                                                                       |
| -----: | ------: | ---------------------------------------------------------------------------------------------- |
| 100.0% |     482 | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/pointer.jl:151` |

##### `ht_keyindex2_shorthash!(::Dict{Symbol, Int64}, ::Symbol)` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/dict.jl:265`)

|     % | Samples | Location                                                                                    |
| ----: | ------: | ------------------------------------------------------------------------------------------- |
| 55.3% |     233 | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/dict.jl:289` |
| 15.4% |      65 | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/dict.jl:280` |
|  6.9% |      29 | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/dict.jl:279` |
|  4.3% |      18 | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/dict.jl:301` |
|  2.6% |      11 | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/dict.jl:265` |

##### `BottomRF` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:78`)

|      % | Samples | Location                                                                                     |
| -----: | ------: | -------------------------------------------------------------------------------------------- |
| 100.0% |     358 | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:78` |

##### `+` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/int.jl:87`)

|      % | Samples | Location                                                                                  |
| -----: | ------: | ----------------------------------------------------------------------------------------- |
| 100.0% |     333 | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/int.jl:87` |

##### `_setindex!` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/array.jl:991`)

|      % | Samples | Location                                                                                     |
| -----: | ------: | -------------------------------------------------------------------------------------------- |
| 100.0% |     276 | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/array.jl:991` |

##### `iterate` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:75`)

|      % | Samples | Location                                                                                    |
| -----: | ------: | ------------------------------------------------------------------------------------------- |
| 100.0% |     242 | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:75` |

##### `_foldl_impl` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:55`)

|     % | Samples | Location                                                                                     |
| ----: | ------: | -------------------------------------------------------------------------------------------- |
| 92.8% |     218 | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:54` |
|  1.7% |       4 | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:45` |

##### `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/read.jl:218`)

|     % | Samples | Location                                                                                    |
| ----: | ------: | ------------------------------------------------------------------------------------------- |
| 82.5% |     175 | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/read.jl:248` |
|  3.8% |       8 | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/read.jl:268` |
|  3.3% |       7 | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/read.jl:284` |
|  3.3% |       7 | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/read.jl:247` |
|  2.8% |       6 | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/read.jl:218` |

##### `getindex` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/essentials.jl:920`)

|      % | Samples | Location                                                                                          |
| -----: | ------: | ------------------------------------------------------------------------------------------------- |
| 100.0% |     193 | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/essentials.jl:920` |

##### `unsafe_string` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:99`)

|      % | Samples | Location                                                                                             |
| -----: | ------: | ---------------------------------------------------------------------------------------------------- |
| 100.0% |     164 | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:99` |

##### `checkbounds` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/basic.jl:217`)

|      % | Samples | Location                                                                                             |
| -----: | ------: | ---------------------------------------------------------------------------------------------------- |
| 100.0% |     154 | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/basic.jl:217` |

##### `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{String})` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/read.jl:142`)

|     % | Samples | Location                                                                                    |
| ----: | ------: | ------------------------------------------------------------------------------------------- |
| 63.9% |      92 | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/read.jl:155` |
|  4.9% |       7 | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/read.jl:167` |
|  3.5% |       5 | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/read.jl:142` |
|  0.7% |       1 | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/read.jl:150` |
|  0.7% |       1 | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/read.jl:149` |

##### `#write#80` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:73`)

|     % | Samples | Location                                                                                     |
| ----: | ------: | -------------------------------------------------------------------------------------------- |
| 42.9% |      48 | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:200` |
| 30.4% |      34 | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:60`  |
| 11.6% |      13 | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:72`  |
| 10.7% |      12 | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:73`  |
|  1.8% |       2 | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:181` |

##### `unsafe_string` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:103`)

|      % | Samples | Location                                                                                              |
| -----: | ------: | ----------------------------------------------------------------------------------------------------- |
| 100.0% |     109 | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:103` |

##### `==` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/promotion.jl:637`)

|      % | Samples | Location                                                                                         |
| -----: | ------: | ------------------------------------------------------------------------------------------------ |
| 100.0% |     102 | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/promotion.jl:637` |

##### `getvalue` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:213`)

|      % | Samples | Location                                                                                     |
| -----: | ------: | -------------------------------------------------------------------------------------------- |
| 100.0% |      96 | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:213` |

##### `getproperty` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/Base_compiler.jl:54`)

|      % | Samples | Location                                                                                            |
| -----: | ------: | --------------------------------------------------------------------------------------------------- |
| 100.0% |      94 | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/Base_compiler.jl:54` |

##### `Array` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:648`)

|      % | Samples | Location                                                                                    |
| -----: | ------: | ------------------------------------------------------------------------------------------- |
| 100.0% |      89 | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:648` |

##### `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/read.jl:87`)

|     % | Samples | Location                                                                                    |
| ----: | ------: | ------------------------------------------------------------------------------------------- |
| 29.3% |      24 | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/read.jl:88`  |
| 22.0% |      18 | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/read.jl:87`  |
|  7.3% |       6 | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/read.jl:93`  |
|  3.7% |       3 | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/read.jl:100` |
|  3.7% |       3 | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/read.jl:99`  |

##### `checkbounds` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/basic.jl:209`)

|      % | Samples | Location                                                                                             |
| -----: | ------: | ---------------------------------------------------------------------------------------------------- |
| 100.0% |      75 | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/basic.jl:209` |

##### `&` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/int.jl:353`)

|      % | Samples | Location                                                                                   |
| -----: | ------: | ------------------------------------------------------------------------------------------ |
| 100.0% |      75 | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/int.jl:353` |

##### `var\"#write#97\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:340`)

|     % | Samples | Location                                                                                     |
| ----: | ------: | -------------------------------------------------------------------------------------------- |
| 39.7% |      27 | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:340` |
| 38.2% |      26 | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:360` |
|  7.4% |       5 | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:60`  |
|  4.4% |       3 | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:351` |
|  1.5% |       1 | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:346` |

##### `macro expansion` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/simdloop.jl:75`)

|      % | Samples | Location                                                                                       |
| -----: | ------: | ---------------------------------------------------------------------------------------------- |
| 100.0% |      54 | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/simdloop.jl:75` |

##### `#write#80` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:187`)

|     % | Samples | Location                                                                                     |
| ----: | ------: | -------------------------------------------------------------------------------------------- |
| 20.8% |      11 | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:60`  |
| 20.8% |      11 | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:200` |
| 20.8% |      11 | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:72`  |
| 17.0% |       9 | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:187` |
| 13.2% |       7 | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:73`  |

##### `macro expansion` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:23`)

|      % | Samples | Location                                                                                    |
| -----: | ------: | ------------------------------------------------------------------------------------------- |
| 100.0% |      36 | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:23` |

##### `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40`)

|     % | Samples | Location                                                                                    |
| ----: | ------: | ------------------------------------------------------------------------------------------- |
| 28.1% |       9 | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:47` |
| 25.0% |       8 | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:55` |
| 18.8% |       6 | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40` |
|  9.4% |       3 | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:51` |

##### `var\"#write#85\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.NumberType, ::Vector{UInt8}, ::Int64, ::Int64, ::Int64)` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:224`)

|     % | Samples | Location                                                                                     |
| ----: | ------: | -------------------------------------------------------------------------------------------- |
| 79.3% |      23 | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:236` |
| 17.2% |       5 | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:224` |
|  3.4% |       1 | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:231` |

##### `getvalue(::Type{JSON3.Array}, ::Base.CodeUnits{UInt8, String}, ::SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}, ::Int64, ::UInt64)` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:131`)

|     % | Samples | Location                                                                                     |
| ----: | ------: | -------------------------------------------------------------------------------------------- |
| 45.8% |      11 | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:138` |
|  8.3% |       2 | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:131` |
|  4.2% |       1 | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:158` |
|  4.2% |       1 | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:146` |

##### `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/read.jl:87`)

|      % | Samples | Location                                                                                   |
| -----: | ------: | ------------------------------------------------------------------------------------------ |
| 100.0% |      22 | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/read.jl:87` |

##### `unescape(::JSON3.PointerString)` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/strings.jl:48`)

|     % | Samples | Location                                                                                       |
| ----: | ------: | ---------------------------------------------------------------------------------------------- |
| 15.8% |       3 | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/strings.jl:116` |
| 15.8% |       3 | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/strings.jl:56`  |
| 10.5% |       2 | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/strings.jl:54`  |
| 10.5% |       2 | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/strings.jl:60`  |
|  5.3% |       1 | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/strings.jl:117` |

##### `var\"#write#83\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.BoolType, ::Vector{UInt8}, ::Int64, ::Int64, ::Bool)` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:209`)

|     % | Samples | Location                                                                                     |
| ----: | ------: | -------------------------------------------------------------------------------------------- |
| 50.0% |       9 | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:215` |
| 50.0% |       9 | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:209` |

##### `macro expansion` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:14`)

|      % | Samples | Location                                                                                    |
| -----: | ------: | ------------------------------------------------------------------------------------------- |
| 100.0% |      14 | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:14` |

#### Callers

Callers ranked by contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `#write#78` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`)

|     % | Samples | Caller      | Location                                                                                     |
| ----: | ------: | ----------- | -------------------------------------------------------------------------------------------- |
| 74.3% |   6,447 | `#write#78` | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:157` |
| 25.4% |   2,205 | `#write#80` | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:187` |
|  0.1% |       5 | `write`     | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:147` |

##### `_symbol` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`)

|      % | Samples | Caller     | Location                                                                                     |
| -----: | ------: | ---------- | -------------------------------------------------------------------------------------------- |
| 100.0% |   6,541 | `getvalue` | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:187` |

##### `GenericMemory` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:588`)

|     % | Samples | Caller                                    | Location                                                                                      |
| ----: | ------: | ----------------------------------------- | --------------------------------------------------------------------------------------------- |
| 52.6% |   1,322 | `Array`                                   | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:647`   |
| 47.3% |   1,187 | `rehash!(::Dict{Symbol, Int64}, ::Int64)` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/dict.jl:137`   |
|  0.1% |       3 | `array_new_memory`                        | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/array.jl:1067` |

##### `indexed_iterate` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/tuple.jl:162`)

|     % | Samples | Caller            | Location                                                                                     |
| ----: | ------: | ----------------- | -------------------------------------------------------------------------------------------- |
| 94.6% |   1,250 | `#write#78`       | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:157` |
|  4.7% |      62 | `indexed_iterate` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/tuple.jl:162` |
|  0.7% |       9 | `#write#80`       | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:187` |

##### `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` (`<unknown>`)

|     % | Samples | Caller        | Location                                                                                     |
| ----: | ------: | ------------- | -------------------------------------------------------------------------------------------- |
| 86.9% |     834 | `_foldl_impl` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:55` |
| 13.1% |     126 | `MappingRF`   | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:92` |

##### `eval(::Module, ::Any)` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:489`)

|      % | Samples | Caller                                                             | Location                                                                                        |
| -----: | ------: | ------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------- |
| 100.0% |     858 | `include_string(::typeof(identity), ::Module, ::String, ::String)` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/loading.jl:2856` |

##### `unsafe_load` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/pointer.jl:151`)

|      % | Samples | Caller        | Location                                                                                       |
| -----: | ------: | ------------- | ---------------------------------------------------------------------------------------------- |
| 100.0% |     482 | `unsafe_load` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/pointer.jl:151` |

##### `ht_keyindex2_shorthash!(::Dict{Symbol, Int64}, ::Symbol)` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/dict.jl:265`)

|     % | Samples | Caller                                                | Location                                                                                    |
| ----: | ------: | ----------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| 98.8% |     416 | `setindex!(::Dict{Symbol, Int64}, ::Int64, ::Symbol)` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/dict.jl:354` |

##### `BottomRF` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:78`)

|     % | Samples | Caller        | Location                                                                                     |
| ----: | ------: | ------------- | -------------------------------------------------------------------------------------------- |
| 98.0% |     351 | `_foldl_impl` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:55` |
|  1.4% |       5 | `MappingRF`   | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:92` |

##### `+` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/int.jl:87`)

|     % | Samples | Caller                                                                                                                                                                                                                           | Location                                                                                              |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| 30.0% |     100 | `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})`                                                                                               | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40`           |
| 19.8% |      66 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/read.jl:218`           |
| 15.3% |      51 | `macro expansion`                                                                                                                                                                                                                | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:24`           |
|  5.7% |      19 | `length_continued`                                                                                                                                                                                                               | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:532` |
|  4.8% |      16 | `var\"#write#97\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)`                                                          | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:340`          |

##### `_setindex!` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/array.jl:991`)

|     % | Samples | Caller      | Location                                                                                     |
| ----: | ------: | ----------- | -------------------------------------------------------------------------------------------- |
| 99.6% |     275 | `setindex!` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/array.jl:986` |
|  0.4% |       1 | `#write#78` | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:157` |

##### `iterate` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:75`)

|     % | Samples | Caller                                                                                                                       | Location                                                                                           |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| 40.1% |      97 | `#write#78`                                                                                                                  | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`       |
| 32.2% |      78 | `iterate`                                                                                                                    | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/iterators.jl:682`   |
| 25.6% |      62 | `iterate`                                                                                                                    | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:75`        |
|  2.1% |       5 | `isempty(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/essentials.jl:1072` |

##### `_foldl_impl` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:55`)

|     % | Samples | Caller       | Location                                                                                     |
| ----: | ------: | ------------ | -------------------------------------------------------------------------------------------- |
| 98.7% |     232 | `foldl_impl` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:40` |

##### `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/read.jl:218`)

|      % | Samples | Caller                                                                                                                                                                               | Location                                                                                    |
| -----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------- |
| 100.0% |     212 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/read.jl:218` |

##### `getindex` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/essentials.jl:920`)

|     % | Samples | Caller                                                                                                                                                                                                                           | Location                                                                                        |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| 60.1% |     116 | `macro expansion`                                                                                                                                                                                                                | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:332`    |
| 22.3% |      43 | `getindex`                                                                                                                                                                                                                       | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/subarray.jl:339` |
| 12.4% |      24 | `var\"#write#97\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)`                                                          | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:340`    |
|  3.6% |       7 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/read.jl:218`     |
|  1.0% |       2 | `var\"#read!#9\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Array}, ::Bool)`  | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/read.jl:312`     |

##### `unsafe_string` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:99`)

|      % | Samples | Caller     | Location                                                                                     |
| -----: | ------: | ---------- | -------------------------------------------------------------------------------------------- |
| 100.0% |     164 | `getvalue` | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:195` |

##### `checkbounds` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/basic.jl:217`)

|      % | Samples | Caller     | Location                                                                                              |
| -----: | ------: | ---------- | ----------------------------------------------------------------------------------------------------- |
| 100.0% |     154 | `codeunit` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:139` |

##### `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{String})` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/read.jl:142`)

|      % | Samples | Caller                                                                                                                                                       | Location                                                                                   |
| -----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| 100.0% |     144 | `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/read.jl:87` |

##### `length_continued` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl`)

|      % | Samples | Caller           | Location        |
| -----: | ------: | ---------------- | --------------- |
| 100.0% |     128 | `parse_workload` | `profile.jl:13` |

##### `#write#80` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:73`)

|     % | Samples | Caller      | Location                                                                                     |
| ----: | ------: | ----------- | -------------------------------------------------------------------------------------------- |
| 99.1% |     111 | `#write#78` | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:157` |

##### `unsafe_string` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:103`)

|      % | Samples | Caller   | Location                                                                                              |
| -----: | ------: | -------- | ----------------------------------------------------------------------------------------------------- |
| 100.0% |     109 | `String` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:118` |

##### `==` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/promotion.jl:637`)

|     % | Samples | Caller                                                                                                         | Location                                                                                         |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 41.2% |      42 | `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{String})` | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/read.jl:142`      |
| 22.5% |      23 | `ht_keyindex2_shorthash!(::Dict{Symbol, Int64}, ::Symbol)`                                                     | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/dict.jl:265`      |
| 17.6% |      18 | `!=`                                                                                                           | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/operators.jl:321` |
| 13.7% |      14 | `isarray`                                                                                                      | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:61`      |
|  3.9% |       4 | `isobject`                                                                                                     | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:60`      |

##### `getvalue` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:213`)

|      % | Samples | Caller    | Location                                                                                    |
| -----: | ------: | --------- | ------------------------------------------------------------------------------------------- |
| 100.0% |      96 | `iterate` | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:81` |

##### `getproperty` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/Base_compiler.jl:54`)

|     % | Samples | Caller                                                     | Location                                                                                     |
| ----: | ------: | ---------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| 52.1% |      49 | `_setindex!`                                               | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/dict.jl:329`  |
| 10.6% |      10 | `_setindex!`                                               | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/dict.jl:325`  |
|  8.5% |       8 | `ht_keyindex2_shorthash!(::Dict{Symbol, Int64}, ::Symbol)` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/dict.jl:265`  |
|  7.4% |       7 | `_setindex!`                                               | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/array.jl:991` |
|  6.4% |       6 | `_setindex!`                                               | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/dict.jl:323`  |

##### `Array` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:648`)

|      % | Samples | Caller     | Location                                                                                     |
| -----: | ------: | ---------- | -------------------------------------------------------------------------------------------- |
| 100.0% |      89 | `getindex` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/array.jl:405` |

##### `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/read.jl:87`)

|     % | Samples | Caller                                                                                                                                                                      | Location                                                                                   |
| ----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| 82.9% |      68 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/read.jl:87` |

##### `checkbounds` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/basic.jl:209`)

|      % | Samples | Caller        | Location                                                                                             |
| -----: | ------: | ------------- | ---------------------------------------------------------------------------------------------------- |
| 100.0% |      75 | `checkbounds` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/basic.jl:217` |

##### `&` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/int.jl:353`)

|     % | Samples | Caller                                                     | Location                                                                                       |
| ----: | ------: | ---------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| 72.0% |      54 | `getnontypemask`                                           | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:114`   |
| 14.7% |      11 | `ht_keyindex2_shorthash!(::Dict{Symbol, Int64}, ::Symbol)` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/dict.jl:265`    |
|  8.0% |       6 | `isobject`                                                 | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:60`    |
|  4.0% |       3 | `isany`                                                    | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:59`    |
|  1.3% |       1 | `getproperty`                                              | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/Parsers/05lwR/src/utils.jl:467` |

##### `var\"#write#97\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:340`)

|     % | Samples | Caller      | Location                                                                                     |
| ----: | ------: | ----------- | -------------------------------------------------------------------------------------------- |
| 82.4% |      56 | `#write#78` | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:157` |

##### `macro expansion` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/simdloop.jl:75`)

|      % | Samples | Caller         | Location                                                                                     |
| -----: | ------: | -------------- | -------------------------------------------------------------------------------------------- |
| 100.0% |      54 | `escapelength` | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:331` |

##### `#write#80` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:187`)

|      % | Samples | Caller      | Location                                                                                     |
| -----: | ------: | ----------- | -------------------------------------------------------------------------------------------- |
| 100.0% |      53 | `#write#78` | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:157` |

##### `iterate` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl`)

|     % | Samples | Caller      | Location                                                                                         |
| ----: | ------: | ----------- | ------------------------------------------------------------------------------------------------ |
| 55.0% |      22 | `iterate`   | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:75`      |
| 32.5% |      13 | `#write#78` | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`     |
| 12.5% |       5 | `iterate`   | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/iterators.jl:682` |

##### `macro expansion` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:23`)

|     % | Samples | Caller                                                                                                                                                                                                                           | Location                                                                                    |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| 97.2% |      35 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/read.jl:218` |
|  2.8% |       1 | `var\"#read!#9\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Array}, ::Bool)`  | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/read.jl:312` |

##### `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40`)

|      % | Samples | Caller     | Location                                                                                     |
| -----: | ------: | ---------- | -------------------------------------------------------------------------------------------- |
| 100.0% |      32 | `getvalue` | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:127` |

##### `var\"#write#85\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.NumberType, ::Vector{UInt8}, ::Int64, ::Int64, ::Int64)` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:224`)

|     % | Samples | Caller      | Location                                                                                     |
| ----: | ------: | ----------- | -------------------------------------------------------------------------------------------- |
| 86.2% |      25 | `#write#78` | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:157` |
| 13.8% |       4 | `write`     | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:224` |

##### `getvalue(::Type{JSON3.Array}, ::Base.CodeUnits{UInt8, String}, ::SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}, ::Int64, ::UInt64)` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:131`)

|      % | Samples | Caller     | Location                                                                                     |
| -----: | ------: | ---------- | -------------------------------------------------------------------------------------------- |
| 100.0% |      24 | `getvalue` | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:216` |

##### `getvalue` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl`)

|     % | Samples | Caller    | Location                                                                                    |
| ----: | ------: | --------- | ------------------------------------------------------------------------------------------- |
| 54.2% |      13 | `iterate` | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:81` |
| 45.8% |      11 | `iterate` | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:78` |

##### `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/read.jl:87`)

|     % | Samples | Caller                                                                                                                                                                                                                           | Location                                                                                    |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| 95.5% |      21 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/read.jl:218` |

##### `unescape(::JSON3.PointerString)` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/strings.jl:48`)

|      % | Samples | Caller     | Location                                                                                     |
| -----: | ------: | ---------- | -------------------------------------------------------------------------------------------- |
| 100.0% |      19 | `getvalue` | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:193` |

##### `var\"#write#83\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.BoolType, ::Vector{UInt8}, ::Int64, ::Int64, ::Bool)` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:209`)

|      % | Samples | Caller      | Location                                                                                     |
| -----: | ------: | ----------- | -------------------------------------------------------------------------------------------- |
| 100.0% |      18 | `#write#78` | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:157` |

##### `macro expansion` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:14`)

|     % | Samples | Caller                                                                                                                                                                                                                           | Location                                                                                    |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| 92.9% |      13 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/read.jl:218` |
|  7.1% |       1 | `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{String})`                                                                                                                   | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/read.jl:142` |

##### `#defaultminimum##0` (`<unknown>`)

|      % | Samples | Caller        | Location                                                                                     |
| -----: | ------: | ------------- | -------------------------------------------------------------------------------------------- |
| 100.0% |       2 | `_foldl_impl` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:54` |

##### `(::JSON3.var\"#defaultminimum##0#defaultminimum##1\"{JSON3.Array{Int64, Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}}})(::Int64)` (`<unknown>`)

|      % | Samples | Caller      | Location                                                                                     |
| -----: | ------: | ----------- | -------------------------------------------------------------------------------------------- |
| 100.0% |       2 | `MappingRF` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:92` |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|     % | Samples | Function                                                           | Location                                                                                                          |
| ----: | ------: | ------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| 99.7% |  26,244 | `eval(::Module, ::Any)`                                            | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:489`                       |
| 99.7% |  26,244 | `include_string(::typeof(identity), ::Module, ::String, ::String)` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/loading.jl:2856`                   |
| 99.7% |  26,244 | `_include(::Function, ::Module, ::String)`                         | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/loading.jl:2924`                   |
| 99.7% |  26,244 | `include(::Module, ::String)`                                      | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/Base.jl:306`                       |
| 99.7% |  26,244 | `exec_options(::Base.JLOptions)`                                   | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/client.jl:227`                     |
| 96.5% |  25,386 | `parse_workload`                                                   | `profile.jl:13`                                                                                                   |
| 96.5% |  25,386 | `macro expansion`                                                  | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/stdlib/v1.12/Profile/src/Profile.jl:60` |
| 96.5% |  25,386 | `capture_cpu`                                                      | `profile.jl:24`                                                                                                   |
| 89.2% |  23,461 | `#write#57`                                                        | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:40`                       |
| 67.6% |  17,788 | `#write#78`                                                        | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`                      |
| 67.5% |  17,774 | `write`                                                            | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:147`                      |
| 67.4% |  17,749 | `#write#80`                                                        | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:187`                      |
| 24.9% |   6,541 | `_symbol`                                                          | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`                        |
| 24.9% |   6,541 | `getvalue`                                                         | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:187`                      |
| 21.6% |   5,681 | `defaultminimum`                                                   | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:12`                       |
| 21.6% |   5,680 | `foldl_impl`                                                       | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:40`                      |
| 21.6% |   5,680 | `mapfoldl_impl`                                                    | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:36`                      |
| 21.6% |   5,680 | `#mapfoldl#270`                                                    | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:167`                     |
| 21.6% |   5,680 | `mapfoldl`                                                         | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:167`                     |
| 21.6% |   5,680 | `#mapreduce#274`                                                   | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:299`                     |

#### Categories

##### Third-party

|     % | Samples | Function                                                                                                                                                                                                                         | Location                                                                                     |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| 89.2% |  23,461 | `#write#57`                                                                                                                                                                                                                      | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:40`  |
| 67.6% |  17,788 | `#write#78`                                                                                                                                                                                                                      | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:157` |
| 67.5% |  17,774 | `write`                                                                                                                                                                                                                          | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:147` |
| 67.4% |  17,749 | `#write#80`                                                                                                                                                                                                                      | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:187` |
| 24.9% |   6,541 | `_symbol`                                                                                                                                                                                                                        | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`   |
| 24.9% |   6,541 | `getvalue`                                                                                                                                                                                                                       | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:187` |
| 21.6% |   5,681 | `defaultminimum`                                                                                                                                                                                                                 | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:12`  |
| 21.1% |   5,557 | `getvalue`                                                                                                                                                                                                                       | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:127` |
| 21.1% |   5,553 | `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})`                                                                                               | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40`  |
| 14.6% |   3,849 | `iterate`                                                                                                                                                                                                                        | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:81`  |
| 12.4% |   3,275 | `getvalue`                                                                                                                                                                                                                       | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:214` |
| 12.0% |   3,167 | `iterate`                                                                                                                                                                                                                        | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:78`  |
|  8.8% |   2,325 | `getindex`                                                                                                                                                                                                                       | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:163` |
|  6.8% |   1,789 | `var\"#write#97\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)`                                                          | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:340` |
|  5.2% |   1,380 | `var\"#read#6\"(::Bool, ::Nothing, ::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.read), ::String)`                                                                                                       | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/read.jl:30`   |
|  5.2% |   1,380 | `read`                                                                                                                                                                                                                           | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/read.jl:30`   |
|  4.9% |   1,286 | `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)`                                                                     | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/read.jl:87`   |
|  4.8% |   1,275 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)`                                                      | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/read.jl:87`   |
|  4.8% |   1,273 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/read.jl:218`  |
|  4.8% |   1,268 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)`                                             | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/read.jl:218`  |

##### Standard library

|     % | Samples | Function                                                           | Location                                                                                                          |
| ----: | ------: | ------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| 99.7% |  26,244 | `eval(::Module, ::Any)`                                            | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:489`                       |
| 99.7% |  26,244 | `include_string(::typeof(identity), ::Module, ::String, ::String)` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/loading.jl:2856`                   |
| 99.7% |  26,244 | `_include(::Function, ::Module, ::String)`                         | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/loading.jl:2924`                   |
| 99.7% |  26,244 | `include(::Module, ::String)`                                      | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/Base.jl:306`                       |
| 99.7% |  26,244 | `exec_options(::Base.JLOptions)`                                   | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/client.jl:227`                     |
| 96.5% |  25,386 | `macro expansion`                                                  | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/stdlib/v1.12/Profile/src/Profile.jl:60` |
| 21.6% |   5,680 | `foldl_impl`                                                       | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:40`                      |
| 21.6% |   5,680 | `mapfoldl_impl`                                                    | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:36`                      |
| 21.6% |   5,680 | `#mapfoldl#270`                                                    | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:167`                     |
| 21.6% |   5,680 | `mapfoldl`                                                         | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:167`                     |
| 21.6% |   5,680 | `#mapreduce#274`                                                   | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:299`                     |
| 21.6% |   5,680 | `mapreduce`                                                        | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:299`                     |
| 21.6% |   5,680 | `#sum#277`                                                         | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:524`                     |
| 21.6% |   5,680 | `sum`                                                              | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:524`                     |
| 21.6% |   5,680 | `#sum#278`                                                         | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:553`                     |
| 21.6% |   5,680 | `sum`                                                              | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:553`                     |
| 21.6% |   5,680 | `_foldl_impl`                                                      | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:50`                      |
| 21.6% |   5,675 | `MappingRF`                                                        | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:92`                      |
| 21.5% |   5,669 | `_foldl_impl`                                                      | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:54`                      |
| 18.8% |   4,944 | `_foldl_impl`                                                      | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:55`                      |

##### Native

|     % | Samples | Function                                                                                                                                                                                | Location    |
| ----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 21.6% |   5,677 | `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})`                                                                                                            | `<unknown>` |
| 21.5% |   5,659 | `#defaultminimum##0`                                                                                                                                                                    | `<unknown>` |
| <0.1% |       6 | `(::JSON3.var\"#defaultminimum##0#defaultminimum##1\"{JSON3.Array{Int64, Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}}})(::Int64)` | `<unknown>` |

#### Callees

Callees ranked by contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `eval(::Module, ::Any)` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:489`)

|     % | Samples | Callee        | Location        |
| ----: | ------: | ------------- | --------------- |
| 96.7% |  25,386 | `capture_cpu` | `profile.jl:24` |

##### `include_string(::typeof(identity), ::Module, ::String, ::String)` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/loading.jl:2856`)

|      % | Samples | Callee                  | Location                                                                                    |
| -----: | ------: | ----------------------- | ------------------------------------------------------------------------------------------- |
| 100.0% |  26,244 | `eval(::Module, ::Any)` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:489` |

##### `_include(::Function, ::Module, ::String)` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/loading.jl:2924`)

|      % | Samples | Callee                                                             | Location                                                                                        |
| -----: | ------: | ------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------- |
| 100.0% |  26,244 | `include_string(::typeof(identity), ::Module, ::String, ::String)` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/loading.jl:2856` |

##### `include(::Module, ::String)` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/Base.jl:306`)

|      % | Samples | Callee                                     | Location                                                                                        |
| -----: | ------: | ------------------------------------------ | ----------------------------------------------------------------------------------------------- |
| 100.0% |  26,244 | `_include(::Function, ::Module, ::String)` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/loading.jl:2924` |

##### `exec_options(::Base.JLOptions)` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/client.jl:227`)

|      % | Samples | Callee                        | Location                                                                                    |
| -----: | ------: | ----------------------------- | ------------------------------------------------------------------------------------------- |
| 100.0% |  26,244 | `include(::Module, ::String)` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/Base.jl:306` |

##### `parse_workload` (`profile.jl:13`)

|     % | Samples | Callee             | Location                                                                                              |
| ----: | ------: | ------------------ | ----------------------------------------------------------------------------------------------------- |
| 92.4% |  23,461 | `#write#57`        | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:40`           |
|  5.4% |   1,380 | `read`             | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/read.jl:30`            |
|  1.0% |     246 | `length_continued` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:534` |
|  0.5% |     128 | `length_continued` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl`     |
|  0.1% |      35 | `length_continued` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:533` |

##### `macro expansion` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/stdlib/v1.12/Profile/src/Profile.jl:60`)

|      % | Samples | Callee           | Location        |
| -----: | ------: | ---------------- | --------------- |
| 100.0% |  25,386 | `parse_workload` | `profile.jl:13` |

##### `capture_cpu` (`profile.jl:24`)

|      % | Samples | Callee            | Location                                                                                                          |
| -----: | ------: | ----------------- | ----------------------------------------------------------------------------------------------------------------- |
| 100.0% |  25,386 | `macro expansion` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/stdlib/v1.12/Profile/src/Profile.jl:60` |

##### `#write#57` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:40`)

|     % | Samples | Callee           | Location                                                                                     |
| ----: | ------: | ---------------- | -------------------------------------------------------------------------------------------- |
| 75.8% |  17,774 | `write`          | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:147` |
| 24.2% |   5,681 | `defaultminimum` | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:12`  |

##### `#write#78` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`)

|     % | Samples | Callee                                                                                                                                                                  | Location                                                                                     |
| ----: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| 99.8% |  17,749 | `#write#80`                                                                                                                                                             | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:187` |
| 72.8% |  12,955 | `#write#78`                                                                                                                                                             | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:157` |
| 10.7% |   1,897 | `iterate`                                                                                                                                                               | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:81`  |
| 10.0% |   1,777 | `var\"#write#97\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:340` |
|  9.6% |   1,702 | `iterate`                                                                                                                                                               | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:78`  |

##### `write` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:147`)

|      % | Samples | Callee      | Location                                                                                     |
| -----: | ------: | ----------- | -------------------------------------------------------------------------------------------- |
| 100.0% |  17,773 | `#write#78` | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:157` |

##### `#write#80` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:187`)

|     % | Samples | Callee            | Location                                                                                                 |
| ----: | ------: | ----------------- | -------------------------------------------------------------------------------------------------------- |
| 93.4% |  16,576 | `#write#78`       | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`             |
|  4.2% |     754 | `isassigned`      | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/multidimensional.jl:1653` |
|  4.0% |     712 | `getindex`        | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:163`             |
|  0.1% |      12 | `indexed_iterate` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/tuple.jl:162`             |
| <0.1% |       2 | `iterate`         | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/range.jl`                 |

##### `getvalue` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:187`)

|      % | Samples | Callee    | Location                                                                                   |
| -----: | ------: | --------- | ------------------------------------------------------------------------------------------ |
| 100.0% |   6,541 | `_symbol` | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:1` |

##### `defaultminimum` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:12`)

|      % | Samples | Callee                                                                                                                       | Location                                                                                           |
| -----: | ------: | ---------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| 100.0% |   5,680 | `sum`                                                                                                                        | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:553`      |
|   1.0% |      58 | `isempty(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/essentials.jl:1072` |
|  <0.1% |       1 | `isempty(::JSON3.Object{Base.CodeUnits{UInt8, String}, Vector{UInt64}})`                                                     | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/essentials.jl:1072` |

##### `foldl_impl` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:40`)

|      % | Samples | Callee        | Location                                                                                     |
| -----: | ------: | ------------- | -------------------------------------------------------------------------------------------- |
| 100.0% |   5,680 | `_foldl_impl` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:50` |
|  99.8% |   5,669 | `_foldl_impl` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:54` |
|  87.0% |   4,941 | `_foldl_impl` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:55` |

##### `mapfoldl_impl` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:36`)

|      % | Samples | Callee       | Location                                                                                     |
| -----: | ------: | ------------ | -------------------------------------------------------------------------------------------- |
| 100.0% |   5,680 | `foldl_impl` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:40` |
|   0.1% |       3 | `foldl_impl` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:41` |

##### `#mapfoldl#270` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:167`)

|      % | Samples | Callee          | Location                                                                                     |
| -----: | ------: | --------------- | -------------------------------------------------------------------------------------------- |
| 100.0% |   5,680 | `mapfoldl_impl` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:36` |
|  <0.1% |       1 | `mapfoldl_impl` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:35` |

##### `mapfoldl` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:167`)

|      % | Samples | Callee          | Location                                                                                      |
| -----: | ------: | --------------- | --------------------------------------------------------------------------------------------- |
| 100.0% |   5,680 | `#mapfoldl#270` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:167` |

##### `#mapreduce#274` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:299`)

|      % | Samples | Callee     | Location                                                                                      |
| -----: | ------: | ---------- | --------------------------------------------------------------------------------------------- |
| 100.0% |   5,680 | `mapfoldl` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:167` |

##### `mapreduce` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:299`)

|      % | Samples | Callee           | Location                                                                                      |
| -----: | ------: | ---------------- | --------------------------------------------------------------------------------------------- |
| 100.0% |   5,680 | `#mapreduce#274` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:299` |

##### `#sum#277` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:524`)

|      % | Samples | Callee      | Location                                                                                      |
| -----: | ------: | ----------- | --------------------------------------------------------------------------------------------- |
| 100.0% |   5,680 | `mapreduce` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:299` |

##### `sum` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:524`)

|      % | Samples | Callee     | Location                                                                                      |
| -----: | ------: | ---------- | --------------------------------------------------------------------------------------------- |
| 100.0% |   5,680 | `#sum#277` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:524` |

##### `#sum#278` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:553`)

|      % | Samples | Callee | Location                                                                                      |
| -----: | ------: | ------ | --------------------------------------------------------------------------------------------- |
| 100.0% |   5,680 | `sum`  | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:524` |

##### `sum` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:553`)

|      % | Samples | Callee     | Location                                                                                      |
| -----: | ------: | ---------- | --------------------------------------------------------------------------------------------- |
| 100.0% |   5,680 | `#sum#278` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:553` |

##### `_foldl_impl` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:50`)

|     % | Samples | Callee                                                                       | Location                                                                                         |
| ----: | ------: | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 99.8% |   5,671 | `MappingRF`                                                                  | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:92`     |
|  0.1% |       6 | `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` | `<unknown>`                                                                                      |
| <0.1% |       2 | `iterate`                                                                    | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/iterators.jl:682` |
| <0.1% |       1 | `iterate`                                                                    | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:75`      |

##### `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` (`<unknown>`)

|     % | Samples | Callee                                                                                                                       | Location                                                                                           |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| 99.9% |   5,669 | `sum`                                                                                                                        | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:524`      |
| 61.1% |   3,470 | `sum`                                                                                                                        | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:553`      |
|  2.7% |     153 | `isempty(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/essentials.jl:1072` |
|  0.1% |       8 | `defaultminimum`                                                                                                             | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:6`         |
| <0.1% |       2 | `indexed_iterate`                                                                                                            | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/pair.jl:42`         |

##### `MappingRF` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:92`)

|      % | Samples | Callee                                                                                                                                                                                  | Location                                                                                     |
| -----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| 100.0% |   5,675 | `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})`                                                                                                            | `<unknown>`                                                                                  |
|   0.3% |      15 | `BottomRF`                                                                                                                                                                              | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:77` |
|   0.1% |       6 | `(::JSON3.var\"#defaultminimum##0#defaultminimum##1\"{JSON3.Array{Int64, Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}}})(::Int64)` | `<unknown>`                                                                                  |
|   0.1% |       5 | `BottomRF`                                                                                                                                                                              | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:78` |

##### `_foldl_impl` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:54`)

|     % | Samples | Callee               | Location                                                                                     |
| ----: | ------: | -------------------- | -------------------------------------------------------------------------------------------- |
| 99.8% |   5,659 | `#defaultminimum##0` | `<unknown>`                                                                                  |
|  0.2% |      12 | `MappingRF`          | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:92` |
| <0.1% |       1 | `iterate`            | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/range.jl:917` |

##### `#defaultminimum##0` (`<unknown>`)

|     % | Samples | Callee           | Location                                                                                                 |
| ----: | ------: | ---------------- | -------------------------------------------------------------------------------------------------------- |
| 88.0% |   4,980 | `defaultminimum` | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:12`              |
|  9.6% |     541 | `isassigned`     | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/multidimensional.jl:1653` |
|  5.6% |     318 | `getindex`       | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:163`             |
| <0.1% |       2 | `isassigned`     | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/multidimensional.jl:1654` |
| <0.1% |       1 | `isassigned`     | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/multidimensional.jl:1652` |

##### `getvalue` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:127`)

|     % | Samples | Callee                                                                                                                             | Location                                                                                    |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| 99.9% |   5,553 | `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40` |

##### `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40`)

|     % | Samples | Callee                                                | Location                                                                                        |
| ----: | ------: | ----------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| 61.3% |   3,404 | `getvalue`                                            | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:187`    |
| 35.5% |   1,973 | `setindex!(::Dict{Symbol, Int64}, ::Int64, ::Symbol)` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/dict.jl:354`     |
|  1.8% |     100 | `+`                                                   | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/int.jl:87`       |
|  0.6% |      33 | `getindex`                                            | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/subarray.jl:339` |
|  0.1% |       8 | `gettapelen`                                          | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:118`    |

##### `_foldl_impl` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:55`)

|     % | Samples | Callee                                                                       | Location                                                                                         |
| ----: | ------: | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 74.5% |   3,685 | `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` | `<unknown>`                                                                                      |
| 56.5% |   2,792 | `iterate`                                                                    | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/iterators.jl:682` |
|  7.1% |     351 | `BottomRF`                                                                   | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:78`     |
|  6.3% |     313 | `MappingRF`                                                                  | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:92`     |
|  4.1% |     202 | `iterate`                                                                    | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:75`      |

##### `iterate` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:81`)

|     % | Samples | Callee     | Location                                                                                     |
| ----: | ------: | ---------- | -------------------------------------------------------------------------------------------- |
| 85.1% |   3,275 | `getvalue` | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:214` |
|  7.7% |     295 | `getvalue` | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:218` |
|  3.9% |     150 | `getvalue` | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:216` |
|  2.7% |     102 | `getvalue` | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:213` |
|  0.3% |      13 | `getvalue` | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl`     |

##### `getvalue` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:214`)

|     % | Samples | Callee     | Location                                                                                     |
| ----: | ------: | ---------- | -------------------------------------------------------------------------------------------- |
| 99.0% |   3,241 | `getvalue` | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:127` |
|  1.0% |      34 | `getvalue` | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:126` |

##### `iterate` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:78`)

|     % | Samples | Callee     | Location                                                                                     |
| ----: | ------: | ---------- | -------------------------------------------------------------------------------------------- |
| 99.0% |   3,136 | `getvalue` | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:187` |
|  0.9% |      29 | `getvalue` | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl`     |
|  0.1% |       2 | `getvalue` | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:184` |

##### `getindex` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:163`)

|     % | Samples | Callee     | Location                                                                                     |
| ----: | ------: | ---------- | -------------------------------------------------------------------------------------------- |
| 99.6% |   2,316 | `getvalue` | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:127` |
|  0.4% |       9 | `getvalue` | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:126` |

##### `var\"#write#97\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:340`)

|     % | Samples | Callee                                        | Location                                                                                          |
| ----: | ------: | --------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| 67.4% |   1,205 | `realloc!(::Vector{UInt8}, ::Int64, ::Int64)` | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:51`       |
| 12.7% |     228 | `escapelength`                                | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:331`      |
|  7.9% |     141 | `macro expansion`                             | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/simdloop.jl:77`    |
|  2.3% |      41 | `setindex!`                                   | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/array.jl:986`      |
|  1.3% |      24 | `getindex`                                    | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/essentials.jl:920` |

##### `var\"#read#6\"(::Bool, ::Nothing, ::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.read), ::String)` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/read.jl:30`)

|     % | Samples | Callee                                                                         | Location                                                                                    |
| ----: | ------: | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------- |
| 91.7% |   1,265 | `read!`                                                                        | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/read.jl:87`  |
|  8.3% |     114 | `Array`                                                                        | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:647` |
|  0.1% |       1 | `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, Vector{UInt64}})` | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40` |

##### `read` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/read.jl:30`)

|      % | Samples | Callee                                                                                                                     | Location                                                                                   |
| -----: | ------: | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| 100.0% |   1,380 | `var\"#read#6\"(::Bool, ::Nothing, ::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.read), ::String)` | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/read.jl:30` |

##### `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/read.jl:87`)

|     % | Samples | Callee                                                                                                                                                                               | Location                                                                                            |
| ----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------- |
| 98.4% |   1,265 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/read.jl:218`         |
| 98.3% |   1,264 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Array}, ::Bool)`  | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/read.jl:312`         |
| 24.0% |     308 | `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{String})`                                                                       | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/read.jl:142`         |
|  3.9% |      50 | `typeparser(::Type{Float64}, ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Int16, ::Parsers.Options)`                                                                | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/Parsers/05lwR/src/components.jl:392` |
|  1.8% |      23 | `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.False})`                                                                  | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/read.jl:189`         |

##### `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/read.jl:87`)

|     % | Samples | Callee                                                                                                                                                       | Location                                                                                   |
| ----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| 99.5% |   1,269 | `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/read.jl:87` |

##### `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/read.jl:218`)

|     % | Samples | Callee                                                                                                                                                                      | Location                                                                                    |
| ----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| 99.8% |   1,270 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/read.jl:87`  |
| 15.3% |     195 | `getbyte`                                                                                                                                                                   | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:8`  |
|  7.3% |      93 | `macro expansion`                                                                                                                                                           | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:29` |
|  5.2% |      66 | `+`                                                                                                                                                                         | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/int.jl:87`   |
|  3.8% |      48 | `macro expansion`                                                                                                                                                           | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:24` |

##### `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/read.jl:218`)

|      % | Samples | Callee                                                                                                                                                                                                                           | Location                                                                                    |
| -----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| 100.0% |   1,268 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/read.jl:218` |

##### `(::JSON3.var\"#defaultminimum##0#defaultminimum##1\"{JSON3.Array{Int64, Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}}})(::Int64)` (`<unknown>`)

|     % | Samples | Callee       | Location                                                                                                 |
| ----: | ------: | ------------ | -------------------------------------------------------------------------------------------------------- |
| 33.3% |       2 | `isassigned` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/multidimensional.jl:1644` |
| 16.7% |       1 | `isassigned` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/multidimensional.jl:1654` |
| 16.7% |       1 | `isassigned` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/multidimensional.jl:1652` |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame.

Common call stack: `include_string(::typeof(identity), ::Module, ::String, ::String)` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/loading.jl:2856`) ← `_include(::Function, ::Module, ::String)` (2924) ← `include(::Module, ::String)` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/Base.jl:306`) ← `exec_options(::Base.JLOptions)` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/client.jl:227`)

|     % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ----: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 14.7% |   3,875 | `#write#78` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `#write#78` (157) ← `#write#80` (187) ← `#write#78` (157) ← `write` (147) ← `#write#57` (40) ← `parse_workload` (`profile.jl:13`) ← `macro expansion` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/stdlib/v1.12/Profile/src/Profile.jl:60`) ← `capture_cpu` (`profile.jl:24`) ← `eval(::Module, ::Any)` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:489`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  8.2% |   2,152 | `#write#78` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `#write#78` (157) ← `#write#78` (157) ← `#write#80` (187) ← `#write#78` (157) ← `write` (147) ← `#write#57` (40) ← `parse_workload` (`profile.jl:13`) ← `macro expansion` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/stdlib/v1.12/Profile/src/Profile.jl:60`) ← `capture_cpu` (`profile.jl:24`) ← `eval(::Module, ::Any)` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:489`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  6.5% |   1,708 | `#write#78` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `#write#80` (187) ← `#write#78` (157) ← `write` (147) ← `#write#57` (40) ← `parse_workload` (`profile.jl:13`) ← `macro expansion` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/stdlib/v1.12/Profile/src/Profile.jl:60`) ← `capture_cpu` (`profile.jl:24`) ← `eval(::Module, ::Any)` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:489`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  3.3% |     858 | `eval(::Module, ::Any)` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:489`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  3.2% |     848 | `_symbol` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`) ← `getvalue` (187) ← `iterate` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:78`) ← `#write#78` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `#write#78` (157) ← `#write#80` (187) ← `#write#78` (157) ← `write` (147) ← `#write#57` (40) ← `parse_workload` (`profile.jl:13`) ← `macro expansion` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/stdlib/v1.12/Profile/src/Profile.jl:60`) ← `capture_cpu` (`profile.jl:24`) ← `eval(::Module, ::Any)` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:489`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  2.6% |     678 | `_symbol` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`) ← `getvalue` (187) ← `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40`) ← `getvalue` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:127`) ← `getvalue` (214) ← `iterate` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:81`) ← `#write#78` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `#write#80` (187) ← `#write#78` (157) ← `write` (147) ← `#write#57` (40) ← `parse_workload` (`profile.jl:13`) ← `macro expansion` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/stdlib/v1.12/Profile/src/Profile.jl:60`) ← `capture_cpu` (`profile.jl:24`) ← `eval(::Module, ::Any)` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:489`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  2.4% |     629 | `GenericMemory` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:588`) ← `Array` (647) ← `Array` (660) ← `zeros` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/array.jl:595`) ← `zeros` (591) ← `realloc!(::Vector{UInt8}, ::Int64, ::Int64)` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:51`) ← `var\"#write#97\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` (340) ← `#write#78` (157) ← `#write#78` (157) ← `#write#78` (157) ← `#write#80` (187) ← `#write#78` (157) ← `write` (147) ← `#write#57` (40) ← `parse_workload` (`profile.jl:13`) ← `macro expansion` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/stdlib/v1.12/Profile/src/Profile.jl:60`) ← `capture_cpu` (`profile.jl:24`) ← `eval(::Module, ::Any)` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:489`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  2.3% |     611 | `_symbol` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`) ← `getvalue` (187) ← `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40`) ← `getvalue` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:127`) ← `getvalue` (214) ← `iterate` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:81`) ← `iterate` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/iterators.jl:682`) ← `_foldl_impl` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:55`) ← `foldl_impl` (40) ← `mapfoldl_impl` (36) ← `#mapfoldl#270` (167) ← `mapfoldl` (167) ← `#mapreduce#274` (299) ← `mapreduce` (299) ← `#sum#277` (524) ← `sum` (524) ← `#sum#278` (553) ← `sum` (553) ← `defaultminimum` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:12`) ← `#defaultminimum##0` ← `_foldl_impl` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:54`) ← `foldl_impl` (40) ← `mapfoldl_impl` (36) ← `#mapfoldl#270` (167) ← `mapfoldl` (167) ← `#mapreduce#274` (299) ← `mapreduce` (299) ← `#sum#277` (524) ← `sum` (524) ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `MappingRF` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:92`) ← `_foldl_impl` (50) ← `foldl_impl` (40) ← `mapfoldl_impl` (36) ← `#mapfoldl#270` (167) ← `mapfoldl` (167) ← `#mapreduce#274` (299) ← `mapreduce` (299) ← `#sum#277` (524) ← `sum` (524) ← `#sum#278` (553) ← `sum` (553) ← `defaultminimum` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:12`) ← `#write#57` (40) ← `parse_workload` (`profile.jl:13`) ← `macro expansion` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/stdlib/v1.12/Profile/src/Profile.jl:60`) ← `capture_cpu` (`profile.jl:24`) ← `eval(::Module, ::Any)` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:489`)                                                                                                                                                                                                                                                                                                                                                                                                    |
|  2.3% |     609 | `indexed_iterate` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/tuple.jl:162`) ← `#write#78` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `#write#78` (157) ← `#write#80` (187) ← `#write#78` (157) ← `write` (147) ← `#write#57` (40) ← `parse_workload` (`profile.jl:13`) ← `macro expansion` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/stdlib/v1.12/Profile/src/Profile.jl:60`) ← `capture_cpu` (`profile.jl:24`) ← `eval(::Module, ::Any)` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:489`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  2.2% |     571 | `_symbol` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`) ← `getvalue` (187) ← `iterate` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:78`) ← `iterate` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/iterators.jl:682`) ← `_foldl_impl` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:55`) ← `foldl_impl` (40) ← `mapfoldl_impl` (36) ← `#mapfoldl#270` (167) ← `mapfoldl` (167) ← `#mapreduce#274` (299) ← `mapreduce` (299) ← `#sum#277` (524) ← `sum` (524) ← `#sum#278` (553) ← `sum` (553) ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `_foldl_impl` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:55`) ← `foldl_impl` (40) ← `mapfoldl_impl` (36) ← `#mapfoldl#270` (167) ← `mapfoldl` (167) ← `#mapreduce#274` (299) ← `mapreduce` (299) ← `#sum#277` (524) ← `sum` (524) ← `#sum#278` (553) ← `sum` (553) ← `defaultminimum` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:12`) ← `#defaultminimum##0` ← `_foldl_impl` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:54`) ← `foldl_impl` (40) ← `mapfoldl_impl` (36) ← `#mapfoldl#270` (167) ← `mapfoldl` (167) ← `#mapreduce#274` (299) ← `mapreduce` (299) ← `#sum#277` (524) ← `sum` (524) ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `MappingRF` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:92`) ← `_foldl_impl` (50) ← `foldl_impl` (40) ← `mapfoldl_impl` (36) ← `#mapfoldl#270` (167) ← `mapfoldl` (167) ← `#mapreduce#274` (299) ← `mapreduce` (299) ← `#sum#277` (524) ← `sum` (524) ← `#sum#278` (553) ← `sum` (553) ← `defaultminimum` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:12`) ← `#write#57` (40) ← `parse_workload` (`profile.jl:13`) ← `macro expansion` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/stdlib/v1.12/Profile/src/Profile.jl:60`) ← `capture_cpu` (`profile.jl:24`) ← `eval(::Module, ::Any)` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:489`)                                                                                                                                                                                                                                                                                                                                                                   |
|  2.0% |     523 | `GenericMemory` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:588`) ← `Array` (647) ← `Array` (660) ← `zeros` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/array.jl:595`) ← `zeros` (591) ← `realloc!(::Vector{UInt8}, ::Int64, ::Int64)` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:51`) ← `var\"#write#97\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` (340) ← `#write#78` (157) ← `#write#78` (157) ← `#write#80` (187) ← `#write#78` (157) ← `write` (147) ← `#write#57` (40) ← `parse_workload` (`profile.jl:13`) ← `macro expansion` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/stdlib/v1.12/Profile/src/Profile.jl:60`) ← `capture_cpu` (`profile.jl:24`) ← `eval(::Module, ::Any)` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:489`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  1.6% |     434 | `_symbol` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`) ← `getvalue` (187) ← `iterate` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:78`) ← `#write#78` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `#write#78` (157) ← `#write#78` (157) ← `#write#80` (187) ← `#write#78` (157) ← `write` (147) ← `#write#57` (40) ← `parse_workload` (`profile.jl:13`) ← `macro expansion` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/stdlib/v1.12/Profile/src/Profile.jl:60`) ← `capture_cpu` (`profile.jl:24`) ← `eval(::Module, ::Any)` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:489`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  1.5% |     393 | `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `_foldl_impl` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:55`) ← `foldl_impl` (40) ← `mapfoldl_impl` (36) ← `#mapfoldl#270` (167) ← `mapfoldl` (167) ← `#mapreduce#274` (299) ← `mapreduce` (299) ← `#sum#277` (524) ← `sum` (524) ← `#sum#278` (553) ← `sum` (553) ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `_foldl_impl` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:55`) ← `foldl_impl` (40) ← `mapfoldl_impl` (36) ← `#mapfoldl#270` (167) ← `mapfoldl` (167) ← `#mapreduce#274` (299) ← `mapreduce` (299) ← `#sum#277` (524) ← `sum` (524) ← `#sum#278` (553) ← `sum` (553) ← `defaultminimum` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:12`) ← `#defaultminimum##0` ← `_foldl_impl` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:54`) ← `foldl_impl` (40) ← `mapfoldl_impl` (36) ← `#mapfoldl#270` (167) ← `mapfoldl` (167) ← `#mapreduce#274` (299) ← `mapreduce` (299) ← `#sum#277` (524) ← `sum` (524) ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `MappingRF` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:92`) ← `_foldl_impl` (50) ← `foldl_impl` (40) ← `mapfoldl_impl` (36) ← `#mapfoldl#270` (167) ← `mapfoldl` (167) ← `#mapreduce#274` (299) ← `mapreduce` (299) ← `#sum#277` (524) ← `sum` (524) ← `#sum#278` (553) ← `sum` (553) ← `defaultminimum` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:12`) ← `#write#57` (40) ← `parse_workload` (`profile.jl:13`) ← `macro expansion` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/stdlib/v1.12/Profile/src/Profile.jl:60`) ← `capture_cpu` (`profile.jl:24`) ← `eval(::Module, ::Any)` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:489`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  1.4% |     366 | `#write#78` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `#write#80` (187) ← `#write#78` (157) ← `#write#78` (157) ← `#write#80` (187) ← `#write#78` (157) ← `write` (147) ← `#write#57` (40) ← `parse_workload` (`profile.jl:13`) ← `macro expansion` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/stdlib/v1.12/Profile/src/Profile.jl:60`) ← `capture_cpu` (`profile.jl:24`) ← `eval(::Module, ::Any)` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:489`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  1.3% |     353 | `_symbol` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`) ← `getvalue` (187) ← `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40`) ← `getvalue` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:127`) ← `getvalue` (214) ← `iterate` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:81`) ← `#write#78` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `#write#78` (157) ← `#write#80` (187) ← `#write#78` (157) ← `write` (147) ← `#write#57` (40) ← `parse_workload` (`profile.jl:13`) ← `macro expansion` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/stdlib/v1.12/Profile/src/Profile.jl:60`) ← `capture_cpu` (`profile.jl:24`) ← `eval(::Module, ::Any)` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:489`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  1.3% |     330 | `indexed_iterate` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/tuple.jl:162`) ← `#write#78` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `#write#78` (157) ← `#write#78` (157) ← `#write#80` (187) ← `#write#78` (157) ← `write` (147) ← `#write#57` (40) ← `parse_workload` (`profile.jl:13`) ← `macro expansion` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/stdlib/v1.12/Profile/src/Profile.jl:60`) ← `capture_cpu` (`profile.jl:24`) ← `eval(::Module, ::Any)` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:489`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  1.2% |     324 | `_symbol` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`) ← `getvalue` (187) ← `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40`) ← `getvalue` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:127`) ← `getvalue` (214) ← `iterate` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:81`) ← `iterate` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/iterators.jl:682`) ← `_foldl_impl` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:55`) ← `foldl_impl` (40) ← `mapfoldl_impl` (36) ← `#mapfoldl#270` (167) ← `mapfoldl` (167) ← `#mapreduce#274` (299) ← `mapreduce` (299) ← `#sum#277` (524) ← `sum` (524) ← `#sum#278` (553) ← `sum` (553) ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `_foldl_impl` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:55`) ← `foldl_impl` (40) ← `mapfoldl_impl` (36) ← `#mapfoldl#270` (167) ← `mapfoldl` (167) ← `#mapreduce#274` (299) ← `mapreduce` (299) ← `#sum#277` (524) ← `sum` (524) ← `#sum#278` (553) ← `sum` (553) ← `defaultminimum` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:12`) ← `#defaultminimum##0` ← `_foldl_impl` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:54`) ← `foldl_impl` (40) ← `mapfoldl_impl` (36) ← `#mapfoldl#270` (167) ← `mapfoldl` (167) ← `#mapreduce#274` (299) ← `mapreduce` (299) ← `#sum#277` (524) ← `sum` (524) ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `MappingRF` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:92`) ← `_foldl_impl` (50) ← `foldl_impl` (40) ← `mapfoldl_impl` (36) ← `#mapfoldl#270` (167) ← `mapfoldl` (167) ← `#mapreduce#274` (299) ← `mapreduce` (299) ← `#sum#277` (524) ← `sum` (524) ← `#sum#278` (553) ← `sum` (553) ← `defaultminimum` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:12`) ← `#write#57` (40) ← `parse_workload` (`profile.jl:13`) ← `macro expansion` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/stdlib/v1.12/Profile/src/Profile.jl:60`) ← `capture_cpu` (`profile.jl:24`) ← `eval(::Module, ::Any)` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:489`) |
|  1.2% |     323 | `_symbol` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`) ← `getvalue` (187) ← `iterate` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:78`) ← `#write#78` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `#write#80` (187) ← `#write#78` (157) ← `write` (147) ← `#write#57` (40) ← `parse_workload` (`profile.jl:13`) ← `macro expansion` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/stdlib/v1.12/Profile/src/Profile.jl:60`) ← `capture_cpu` (`profile.jl:24`) ← `eval(::Module, ::Any)` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:489`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  1.2% |     312 | `GenericMemory` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:588`) ← `rehash!(::Dict{Symbol, Int64}, ::Int64)` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/dict.jl:137`) ← `_setindex!` (337) ← `setindex!(::Dict{Symbol, Int64}, ::Int64, ::Symbol)` (354) ← `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40`) ← `getvalue` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:127`) ← `getindex` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:163`) ← `isassigned` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/multidimensional.jl:1653`) ← `#write#80` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:187`) ← `#write#78` (157) ← `write` (147) ← `#write#57` (40) ← `parse_workload` (`profile.jl:13`) ← `macro expansion` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/stdlib/v1.12/Profile/src/Profile.jl:60`) ← `capture_cpu` (`profile.jl:24`) ← `eval(::Module, ::Any)` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:489`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  1.1% |     293 | `_symbol` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`) ← `getvalue` (187) ← `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40`) ← `getvalue` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:127`) ← `getindex` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:163`) ← `isassigned` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/multidimensional.jl:1653`) ← `#defaultminimum##0` ← `_foldl_impl` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:54`) ← `foldl_impl` (40) ← `mapfoldl_impl` (36) ← `#mapfoldl#270` (167) ← `mapfoldl` (167) ← `#mapreduce#274` (299) ← `mapreduce` (299) ← `#sum#277` (524) ← `sum` (524) ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `MappingRF` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:92`) ← `_foldl_impl` (50) ← `foldl_impl` (40) ← `mapfoldl_impl` (36) ← `#mapfoldl#270` (167) ← `mapfoldl` (167) ← `#mapreduce#274` (299) ← `mapreduce` (299) ← `#sum#277` (524) ← `sum` (524) ← `#sum#278` (553) ← `sum` (553) ← `defaultminimum` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:12`) ← `#write#57` (40) ← `parse_workload` (`profile.jl:13`) ← `macro expansion` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/stdlib/v1.12/Profile/src/Profile.jl:60`) ← `capture_cpu` (`profile.jl:24`) ← `eval(::Module, ::Any)` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:489`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |

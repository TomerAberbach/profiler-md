# Sampling profile

Collected 26,284 samples.

| Category         |     % | Samples |
| ---------------- | ----: | ------: |
| Third-party      | 63.6% |  16,719 |
| Standard library | 32.5% |   8,539 |
| Native           |  3.4% |     903 |
| Ours             |  0.5% |     123 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|     % | Samples | Function                                                                                                                                                                                                                         | Location                                                                                              |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| 33.4% |   8,784 | `#write#78`                                                                                                                                                                                                                      | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`          |
| 25.2% |   6,627 | `_symbol`                                                                                                                                                                                                                        | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`            |
| 10.1% |   2,661 | `GenericMemory`                                                                                                                                                                                                                  | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:588`           |
|  5.3% |   1,385 | `indexed_iterate`                                                                                                                                                                                                                | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/tuple.jl:162`          |
|  3.4% |     896 | `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})`                                                                                                                                                     | `<unknown>`                                                                                           |
|  3.0% |     792 | `eval(::Module, ::Any)`                                                                                                                                                                                                          | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:489`           |
|  1.8% |     467 | `unsafe_load`                                                                                                                                                                                                                    | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/pointer.jl:151`        |
|  1.5% |     405 | `ht_keyindex2_shorthash!(::Dict{Symbol, Int64}, ::Symbol)`                                                                                                                                                                       | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/dict.jl:265`           |
|  1.2% |     322 | `+`                                                                                                                                                                                                                              | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/int.jl:87`             |
|  1.1% |     293 | `_setindex!`                                                                                                                                                                                                                     | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/array.jl:991`          |
|  1.0% |     254 | `_foldl_impl`                                                                                                                                                                                                                    | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:54`          |
|  0.8% |     222 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/read.jl:218`           |
|  0.8% |     217 | `getindex`                                                                                                                                                                                                                       | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/essentials.jl:920`     |
|  0.7% |     184 | `BottomRF`                                                                                                                                                                                                                       | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:78`          |
|  0.7% |     175 | `#write#80`                                                                                                                                                                                                                      | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:72`           |
|  0.6% |     160 | `checkbounds`                                                                                                                                                                                                                    | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/basic.jl:217`  |
|  0.5% |     123 | `parse_workload`                                                                                                                                                                                                                 | `profile.jl:13`                                                                                       |
|  0.5% |     120 | `unsafe_string`                                                                                                                                                                                                                  | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:103` |
|  0.4% |     118 | `getvalue`                                                                                                                                                                                                                       | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:213`          |
|  0.4% |     115 | `iterate`                                                                                                                                                                                                                        | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:75`           |

#### Categories

##### Third-party

|     % | Samples | Function                                                                                                                                                                                                                         | Location                                                                                      |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| 33.4% |   8,784 | `#write#78`                                                                                                                                                                                                                      | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`  |
| 25.2% |   6,627 | `_symbol`                                                                                                                                                                                                                        | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`    |
|  0.8% |     222 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/read.jl:218`   |
|  0.7% |     175 | `#write#80`                                                                                                                                                                                                                      | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:72`   |
|  0.4% |     118 | `getvalue`                                                                                                                                                                                                                       | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:213`  |
|  0.4% |     115 | `iterate`                                                                                                                                                                                                                        | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:75`   |
|  0.4% |     113 | `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{String})`                                                                                                                   | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/read.jl:142`   |
|  0.3% |      80 | `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)`                                                                     | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/read.jl:87`    |
|  0.3% |      74 | `var\"#write#97\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)`                                                          | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:340`  |
|  0.2% |      45 | `#write#80`                                                                                                                                                                                                                      | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:187`  |
|  0.1% |      34 | `iterate`                                                                                                                                                                                                                        | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl`      |
|  0.1% |      33 | `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})`                                                                                               | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40`   |
|  0.1% |      33 | `macro expansion`                                                                                                                                                                                                                | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:23`   |
|  0.1% |      28 | `var\"#write#85\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.NumberType, ::Vector{UInt8}, ::Int64, ::Int64, ::Int64)`                                                           | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:224`  |
|  0.1% |      25 | `getvalue(::Type{JSON3.Array}, ::Base.CodeUnits{UInt8, String}, ::SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}, ::Int64, ::UInt64)`                                                                        | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:131`  |
|  0.1% |      21 | `unescape(::JSON3.PointerString)`                                                                                                                                                                                                | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/strings.jl:48` |
|  0.1% |      18 | `var\"#write#83\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.BoolType, ::Vector{UInt8}, ::Int64, ::Int64, ::Bool)`                                                              | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:209`  |
|  0.1% |      17 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)`                                                      | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/read.jl:87`    |
| <0.1% |      10 | `macro expansion`                                                                                                                                                                                                                | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl`      |
| <0.1% |       9 | `getvalue`                                                                                                                                                                                                                       | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl`      |

##### Standard library

|     % | Samples | Function                                                   | Location                                                                                              |
| ----: | ------: | ---------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| 10.1% |   2,661 | `GenericMemory`                                            | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:588`           |
|  5.3% |   1,385 | `indexed_iterate`                                          | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/tuple.jl:162`          |
|  3.0% |     792 | `eval(::Module, ::Any)`                                    | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:489`           |
|  1.8% |     467 | `unsafe_load`                                              | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/pointer.jl:151`        |
|  1.5% |     405 | `ht_keyindex2_shorthash!(::Dict{Symbol, Int64}, ::Symbol)` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/dict.jl:265`           |
|  1.2% |     322 | `+`                                                        | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/int.jl:87`             |
|  1.1% |     293 | `_setindex!`                                               | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/array.jl:991`          |
|  1.0% |     254 | `_foldl_impl`                                              | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:54`          |
|  0.8% |     217 | `getindex`                                                 | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/essentials.jl:920`     |
|  0.7% |     184 | `BottomRF`                                                 | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:78`          |
|  0.6% |     160 | `checkbounds`                                              | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/basic.jl:217`  |
|  0.5% |     120 | `unsafe_string`                                            | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:103` |
|  0.4% |     115 | `length_continued`                                         | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl`     |
|  0.4% |     106 | `getproperty`                                              | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/Base_compiler.jl:54`   |
|  0.4% |     103 | `checkbounds`                                              | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/basic.jl:209`  |
|  0.4% |     103 | `==`                                                       | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/promotion.jl:637`      |
|  0.3% |      77 | `unsafe_string`                                            | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:99`  |
|  0.3% |      72 | `&`                                                        | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/int.jl:353`            |
|  0.2% |      51 | `setindex!(::Dict{Symbol, Int64}, ::Int64, ::Symbol)`      | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/dict.jl:354`           |
|  0.2% |      51 | `macro expansion`                                          | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/simdloop.jl:75`        |

##### Native

|     % | Samples | Function                                                                                                                                                                                | Location    |
| ----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
|  3.4% |     896 | `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})`                                                                                                            | `<unknown>` |
| <0.1% |       4 | `#defaultminimum##0`                                                                                                                                                                    | `<unknown>` |
| <0.1% |       3 | `(::JSON3.var\"#defaultminimum##0#defaultminimum##1\"{JSON3.Array{Int64, Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}}})(::Int64)` | `<unknown>` |

#### Lines

Lines ranked by contribution to each function's self samples.

##### `#write#78` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`)

|     % | Samples | Location                                                                                     |
| ----: | ------: | -------------------------------------------------------------------------------------------- |
| 70.8% |   6,223 | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:157` |
| 15.8% |   1,389 | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:60`  |
|  4.7% |     413 | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:73`  |
|  3.0% |     261 | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:155` |
|  2.8% |     248 | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:72`  |

##### `_symbol` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`)

|      % | Samples | Location                                                                                   |
| -----: | ------: | ------------------------------------------------------------------------------------------ |
| 100.0% |   6,627 | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:1` |

##### `GenericMemory` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:588`)

|      % | Samples | Location                                                                                    |
| -----: | ------: | ------------------------------------------------------------------------------------------- |
| 100.0% |   2,661 | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:588` |

##### `indexed_iterate` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/tuple.jl:162`)

|      % | Samples | Location                                                                                     |
| -----: | ------: | -------------------------------------------------------------------------------------------- |
| 100.0% |   1,385 | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/tuple.jl:162` |

##### `eval(::Module, ::Any)` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:489`)

|      % | Samples | Location                                                                                    |
| -----: | ------: | ------------------------------------------------------------------------------------------- |
| 100.0% |     792 | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:489` |

##### `unsafe_load` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/pointer.jl:151`)

|      % | Samples | Location                                                                                       |
| -----: | ------: | ---------------------------------------------------------------------------------------------- |
| 100.0% |     467 | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/pointer.jl:151` |

##### `ht_keyindex2_shorthash!(::Dict{Symbol, Int64}, ::Symbol)` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/dict.jl:265`)

|     % | Samples | Location                                                                                    |
| ----: | ------: | ------------------------------------------------------------------------------------------- |
| 55.8% |     226 | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/dict.jl:289` |
| 18.5% |      75 | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/dict.jl:280` |
|  4.9% |      20 | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/dict.jl:279` |
|  2.5% |      10 | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/dict.jl:301` |
|  2.2% |       9 | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/dict.jl:265` |

##### `+` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/int.jl:87`)

|      % | Samples | Location                                                                                  |
| -----: | ------: | ----------------------------------------------------------------------------------------- |
| 100.0% |     322 | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/int.jl:87` |

##### `_setindex!` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/array.jl:991`)

|      % | Samples | Location                                                                                     |
| -----: | ------: | -------------------------------------------------------------------------------------------- |
| 100.0% |     293 | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/array.jl:991` |

##### `_foldl_impl` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:54`)

|     % | Samples | Location                                                                                     |
| ----: | ------: | -------------------------------------------------------------------------------------------- |
| 92.1% |     234 | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:54` |
|  3.1% |       8 | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:50` |
|  2.8% |       7 | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:45` |

##### `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/read.jl:218`)

|     % | Samples | Location                                                                                    |
| ----: | ------: | ------------------------------------------------------------------------------------------- |
| 85.6% |     190 | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/read.jl:248` |
|  3.6% |       8 | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/read.jl:284` |
|  3.6% |       8 | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/read.jl:247` |
|  1.8% |       4 | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/read.jl:278` |
|  0.9% |       2 | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/read.jl:218` |

##### `getindex` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/essentials.jl:920`)

|      % | Samples | Location                                                                                          |
| -----: | ------: | ------------------------------------------------------------------------------------------------- |
| 100.0% |     217 | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/essentials.jl:920` |

##### `BottomRF` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:78`)

|      % | Samples | Location                                                                                     |
| -----: | ------: | -------------------------------------------------------------------------------------------- |
| 100.0% |     184 | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:78` |

##### `#write#80` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:72`)

|     % | Samples | Location                                                                                     |
| ----: | ------: | -------------------------------------------------------------------------------------------- |
| 61.1% |     107 | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:60`  |
| 26.3% |      46 | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:200` |
|  6.3% |      11 | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:73`  |
|  4.0% |       7 | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:72`  |
|  1.7% |       3 | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:181` |

##### `checkbounds` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/basic.jl:217`)

|      % | Samples | Location                                                                                             |
| -----: | ------: | ---------------------------------------------------------------------------------------------------- |
| 100.0% |     160 | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/basic.jl:217` |

##### `parse_workload` (`profile.jl:13`)

|      % | Samples | Location        |
| -----: | ------: | --------------- |
| 100.0% |     123 | `profile.jl:13` |

##### `unsafe_string` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:103`)

|      % | Samples | Location                                                                                              |
| -----: | ------: | ----------------------------------------------------------------------------------------------------- |
| 100.0% |     120 | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:103` |

##### `getvalue` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:213`)

|      % | Samples | Location                                                                                     |
| -----: | ------: | -------------------------------------------------------------------------------------------- |
| 100.0% |     118 | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:213` |

##### `iterate` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:75`)

|      % | Samples | Location                                                                                    |
| -----: | ------: | ------------------------------------------------------------------------------------------- |
| 100.0% |     115 | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:75` |

##### `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{String})` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/read.jl:142`)

|     % | Samples | Location                                                                                    |
| ----: | ------: | ------------------------------------------------------------------------------------------- |
| 56.6% |      64 | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/read.jl:155` |
|  6.2% |       7 | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/read.jl:142` |
|  1.8% |       2 | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/read.jl:167` |
|  1.8% |       2 | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/read.jl:149` |

##### `getproperty` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/Base_compiler.jl:54`)

|      % | Samples | Location                                                                                            |
| -----: | ------: | --------------------------------------------------------------------------------------------------- |
| 100.0% |     106 | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/Base_compiler.jl:54` |

##### `checkbounds` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/basic.jl:209`)

|      % | Samples | Location                                                                                             |
| -----: | ------: | ---------------------------------------------------------------------------------------------------- |
| 100.0% |     103 | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/basic.jl:209` |

##### `==` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/promotion.jl:637`)

|      % | Samples | Location                                                                                         |
| -----: | ------: | ------------------------------------------------------------------------------------------------ |
| 100.0% |     103 | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/promotion.jl:637` |

##### `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/read.jl:87`)

|     % | Samples | Location                                                                                    |
| ----: | ------: | ------------------------------------------------------------------------------------------- |
| 28.7% |      23 | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/read.jl:88`  |
| 20.0% |      16 | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/read.jl:87`  |
|  8.8% |       7 | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/read.jl:93`  |
|  5.0% |       4 | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/read.jl:101` |
|  3.8% |       3 | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/read.jl:100` |

##### `unsafe_string` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:99`)

|      % | Samples | Location                                                                                             |
| -----: | ------: | ---------------------------------------------------------------------------------------------------- |
| 100.0% |      77 | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:99` |

##### `var\"#write#97\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:340`)

|     % | Samples | Location                                                                                     |
| ----: | ------: | -------------------------------------------------------------------------------------------- |
| 33.8% |      25 | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:360` |
| 31.1% |      23 | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:340` |
| 10.8% |       8 | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:60`  |
|  5.4% |       4 | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:351` |
|  1.4% |       1 | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:346` |

##### `&` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/int.jl:353`)

|      % | Samples | Location                                                                                   |
| -----: | ------: | ------------------------------------------------------------------------------------------ |
| 100.0% |      72 | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/int.jl:353` |

##### `setindex!(::Dict{Symbol, Int64}, ::Int64, ::Symbol)` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/dict.jl:354`)

|     % | Samples | Location                                                                                    |
| ----: | ------: | ------------------------------------------------------------------------------------------- |
| 72.5% |      37 | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/dict.jl:366` |
| 25.5% |      13 | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/dict.jl:354` |
|  2.0% |       1 | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/dict.jl:356` |

##### `macro expansion` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/simdloop.jl:75`)

|      % | Samples | Location                                                                                       |
| -----: | ------: | ---------------------------------------------------------------------------------------------- |
| 100.0% |      51 | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/simdloop.jl:75` |

##### `#write#80` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:187`)

|     % | Samples | Location                                                                                     |
| ----: | ------: | -------------------------------------------------------------------------------------------- |
| 35.6% |      16 | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:60`  |
| 20.0% |       9 | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:200` |
| 13.3% |       6 | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:73`  |
| 11.1% |       5 | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:187` |
|  6.7% |       3 | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:181` |

##### `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40`)

|     % | Samples | Location                                                                                    |
| ----: | ------: | ------------------------------------------------------------------------------------------- |
| 27.3% |       9 | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40` |
| 24.2% |       8 | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:47` |
| 15.2% |       5 | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:51` |
| 12.1% |       4 | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:55` |

##### `macro expansion` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:23`)

|      % | Samples | Location                                                                                    |
| -----: | ------: | ------------------------------------------------------------------------------------------- |
| 100.0% |      33 | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:23` |

##### `var\"#write#85\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.NumberType, ::Vector{UInt8}, ::Int64, ::Int64, ::Int64)` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:224`)

|     % | Samples | Location                                                                                     |
| ----: | ------: | -------------------------------------------------------------------------------------------- |
| 85.7% |      24 | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:236` |
| 14.3% |       4 | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:224` |

##### `getvalue(::Type{JSON3.Array}, ::Base.CodeUnits{UInt8, String}, ::SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}, ::Int64, ::UInt64)` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:131`)

|     % | Samples | Location                                                                                     |
| ----: | ------: | -------------------------------------------------------------------------------------------- |
| 48.0% |      12 | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:138` |
| 12.0% |       3 | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:131` |
|  4.0% |       1 | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:158` |
|  4.0% |       1 | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:135` |
|  4.0% |       1 | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:146` |

##### `unescape(::JSON3.PointerString)` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/strings.jl:48`)

|     % | Samples | Location                                                                                       |
| ----: | ------: | ---------------------------------------------------------------------------------------------- |
| 28.6% |       6 | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/strings.jl:56`  |
| 23.8% |       5 | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/strings.jl:116` |
| 14.3% |       3 | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/strings.jl:54`  |
|  9.5% |       2 | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/strings.jl:60`  |

##### `var\"#write#83\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.BoolType, ::Vector{UInt8}, ::Int64, ::Int64, ::Bool)` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:209`)

|     % | Samples | Location                                                                                     |
| ----: | ------: | -------------------------------------------------------------------------------------------- |
| 66.7% |      12 | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:209` |
| 33.3% |       6 | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:215` |

##### `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/read.jl:87`)

|      % | Samples | Location                                                                                   |
| -----: | ------: | ------------------------------------------------------------------------------------------ |
| 100.0% |      17 | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/read.jl:87` |

#### Callers

Callers ranked by contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `#write#78` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`)

|     % | Samples | Caller      | Location                                                                                     |
| ----: | ------: | ----------- | -------------------------------------------------------------------------------------------- |
| 75.9% |   6,663 | `#write#78` | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:157` |
| 23.9% |   2,095 | `#write#80` | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:187` |
| <0.1% |       4 | `write`     | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:147` |

##### `_symbol` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`)

|      % | Samples | Caller     | Location                                                                                     |
| -----: | ------: | ---------- | -------------------------------------------------------------------------------------------- |
| 100.0% |   6,627 | `getvalue` | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:187` |

##### `GenericMemory` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:588`)

|     % | Samples | Caller                                    | Location                                                                                      |
| ----: | ------: | ----------------------------------------- | --------------------------------------------------------------------------------------------- |
| 64.2% |   1,709 | `Array`                                   | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:647`   |
| 35.6% |     948 | `rehash!(::Dict{Symbol, Int64}, ::Int64)` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/dict.jl:137`   |
|  0.2% |       4 | `array_new_memory`                        | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/array.jl:1067` |

##### `indexed_iterate` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/tuple.jl:162`)

|     % | Samples | Caller            | Location                                                                                     |
| ----: | ------: | ----------------- | -------------------------------------------------------------------------------------------- |
| 94.4% |   1,307 | `#write#78`       | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:157` |
|  5.3% |      73 | `indexed_iterate` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/tuple.jl:162` |
|  0.4% |       5 | `#write#80`       | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:187` |

##### `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` (`<unknown>`)

|     % | Samples | Caller        | Location                                                                                     |
| ----: | ------: | ------------- | -------------------------------------------------------------------------------------------- |
| 85.6% |     767 | `_foldl_impl` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:54` |
| 14.3% |     128 | `MappingRF`   | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:92` |
|  0.1% |       1 | `_foldl_impl` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:50` |

##### `eval(::Module, ::Any)` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:489`)

|      % | Samples | Caller                                                             | Location                                                                                        |
| -----: | ------: | ------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------- |
| 100.0% |     792 | `include_string(::typeof(identity), ::Module, ::String, ::String)` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/loading.jl:2856` |

##### `unsafe_load` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/pointer.jl:151`)

|      % | Samples | Caller        | Location                                                                                       |
| -----: | ------: | ------------- | ---------------------------------------------------------------------------------------------- |
| 100.0% |     467 | `unsafe_load` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/pointer.jl:151` |

##### `ht_keyindex2_shorthash!(::Dict{Symbol, Int64}, ::Symbol)` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/dict.jl:265`)

|     % | Samples | Caller                                                | Location                                                                                    |
| ----: | ------: | ----------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| 99.3% |     402 | `setindex!(::Dict{Symbol, Int64}, ::Int64, ::Symbol)` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/dict.jl:354` |

##### `+` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/int.jl:87`)

|     % | Samples | Caller                                                                                                                                                                                                                           | Location                                                                                      |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| 32.0% |     103 | `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})`                                                                                               | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40`   |
| 25.8% |      83 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/read.jl:218`   |
| 13.0% |      42 | `macro expansion`                                                                                                                                                                                                                | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:24`   |
|  5.0% |      16 | `var\"#write#97\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)`                                                          | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:340`  |
|  4.3% |      14 | `unescape(::JSON3.PointerString)`                                                                                                                                                                                                | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/strings.jl:48` |

##### `_setindex!` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/array.jl:991`)

|     % | Samples | Caller      | Location                                                                                     |
| ----: | ------: | ----------- | -------------------------------------------------------------------------------------------- |
| 99.3% |     291 | `setindex!` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/array.jl:986` |
|  0.3% |       1 | `#write#78` | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:157` |
|  0.3% |       1 | `#write#80` | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:72`  |

##### `_foldl_impl` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:54`)

|      % | Samples | Caller       | Location                                                                                     |
| -----: | ------: | ------------ | -------------------------------------------------------------------------------------------- |
| 100.0% |     254 | `foldl_impl` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:40` |

##### `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/read.jl:218`)

|      % | Samples | Caller                                                                                                                                                                               | Location                                                                                    |
| -----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------- |
| 100.0% |     222 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/read.jl:218` |

##### `getindex` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/essentials.jl:920`)

|     % | Samples | Caller                                                                                                                                                                                                                           | Location                                                                                        |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| 65.9% |     143 | `macro expansion`                                                                                                                                                                                                                | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:332`    |
| 19.8% |      43 | `getindex`                                                                                                                                                                                                                       | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/subarray.jl:339` |
| 10.6% |      23 | `var\"#write#97\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)`                                                          | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:340`    |
|  3.2% |       7 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/read.jl:218`     |
|  0.5% |       1 | `var\"#read!#9\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Array}, ::Bool)`  | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/read.jl:312`     |

##### `BottomRF` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:78`)

|     % | Samples | Caller        | Location                                                                                     |
| ----: | ------: | ------------- | -------------------------------------------------------------------------------------------- |
| 99.5% |     183 | `_foldl_impl` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:54` |
|  0.5% |       1 | `MappingRF`   | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:92` |

##### `#write#80` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:72`)

|     % | Samples | Caller      | Location                                                                                     |
| ----: | ------: | ----------- | -------------------------------------------------------------------------------------------- |
| 98.9% |     173 | `#write#78` | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:157` |

##### `checkbounds` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/basic.jl:217`)

|      % | Samples | Caller     | Location                                                                                              |
| -----: | ------: | ---------- | ----------------------------------------------------------------------------------------------------- |
| 100.0% |     160 | `codeunit` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:139` |

##### `parse_workload` (`profile.jl:13`)

|      % | Samples | Caller            | Location                                                                                                          |
| -----: | ------: | ----------------- | ----------------------------------------------------------------------------------------------------------------- |
| 100.0% |     123 | `macro expansion` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/stdlib/v1.12/Profile/src/Profile.jl:60` |

##### `unsafe_string` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:103`)

|      % | Samples | Caller   | Location                                                                                              |
| -----: | ------: | -------- | ----------------------------------------------------------------------------------------------------- |
| 100.0% |     120 | `String` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:118` |

##### `getvalue` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:213`)

|      % | Samples | Caller    | Location                                                                                    |
| -----: | ------: | --------- | ------------------------------------------------------------------------------------------- |
| 100.0% |     118 | `iterate` | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:81` |

##### `iterate` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:75`)

|     % | Samples | Caller      | Location                                                                                         |
| ----: | ------: | ----------- | ------------------------------------------------------------------------------------------------ |
| 50.4% |      58 | `iterate`   | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:75`      |
| 36.5% |      42 | `#write#78` | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`     |
| 13.0% |      15 | `iterate`   | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/iterators.jl:682` |

##### `length_continued` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl`)

|      % | Samples | Caller           | Location        |
| -----: | ------: | ---------------- | --------------- |
| 100.0% |     115 | `parse_workload` | `profile.jl:13` |

##### `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{String})` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/read.jl:142`)

|     % | Samples | Caller                                                                                                                                                       | Location                                                                                   |
| ----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| 99.1% |     112 | `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/read.jl:87` |

##### `getproperty` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/Base_compiler.jl:54`)

|     % | Samples | Caller                                                     | Location                                                                                     |
| ----: | ------: | ---------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| 50.9% |      54 | `_setindex!`                                               | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/dict.jl:329`  |
| 13.2% |      14 | `ht_keyindex2_shorthash!(::Dict{Symbol, Int64}, ::Symbol)` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/dict.jl:265`  |
|  9.4% |      10 | `_setindex!`                                               | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/dict.jl:326`  |
|  9.4% |      10 | `_setindex!`                                               | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/array.jl:991` |
|  6.6% |       7 | `_setindex!`                                               | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/dict.jl:325`  |

##### `checkbounds` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/basic.jl:209`)

|      % | Samples | Caller        | Location                                                                                             |
| -----: | ------: | ------------- | ---------------------------------------------------------------------------------------------------- |
| 100.0% |     103 | `checkbounds` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/basic.jl:217` |

##### `==` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/promotion.jl:637`)

|     % | Samples | Caller                                                                                                         | Location                                                                                         |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 45.6% |      47 | `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{String})` | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/read.jl:142`      |
| 22.3% |      23 | `ht_keyindex2_shorthash!(::Dict{Symbol, Int64}, ::Symbol)`                                                     | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/dict.jl:265`      |
| 14.6% |      15 | `!=`                                                                                                           | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/operators.jl:321` |
| 11.7% |      12 | `isarray`                                                                                                      | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:61`      |
|  2.9% |       3 | `isobject`                                                                                                     | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:60`      |

##### `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/read.jl:87`)

|     % | Samples | Caller                                                                                                                                                                      | Location                                                                                   |
| ----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| 82.5% |      66 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/read.jl:87` |

##### `unsafe_string` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:99`)

|      % | Samples | Caller     | Location                                                                                     |
| -----: | ------: | ---------- | -------------------------------------------------------------------------------------------- |
| 100.0% |      77 | `getvalue` | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:195` |

##### `var\"#write#97\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:340`)

|     % | Samples | Caller      | Location                                                                                     |
| ----: | ------: | ----------- | -------------------------------------------------------------------------------------------- |
| 87.8% |      65 | `#write#78` | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:157` |

##### `&` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/int.jl:353`)

|     % | Samples | Caller                                                     | Location                                                                                     |
| ----: | ------: | ---------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| 69.4% |      50 | `getnontypemask`                                           | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:114` |
| 25.0% |      18 | `ht_keyindex2_shorthash!(::Dict{Symbol, Int64}, ::Symbol)` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/dict.jl:265`  |
|  2.8% |       2 | `isobject`                                                 | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:60`  |
|  2.8% |       2 | `isany`                                                    | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:59`  |

##### `setindex!(::Dict{Symbol, Int64}, ::Int64, ::Symbol)` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/dict.jl:354`)

|     % | Samples | Caller                                                                                                                             | Location                                                                                    |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| 98.0% |      50 | `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40` |

##### `macro expansion` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/simdloop.jl:75`)

|      % | Samples | Caller         | Location                                                                                     |
| -----: | ------: | -------------- | -------------------------------------------------------------------------------------------- |
| 100.0% |      51 | `escapelength` | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:331` |

##### `#write#80` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:187`)

|      % | Samples | Caller      | Location                                                                                     |
| -----: | ------: | ----------- | -------------------------------------------------------------------------------------------- |
| 100.0% |      45 | `#write#78` | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:157` |

##### `iterate` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl`)

|     % | Samples | Caller      | Location                                                                                         |
| ----: | ------: | ----------- | ------------------------------------------------------------------------------------------------ |
| 58.8% |      20 | `iterate`   | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:75`      |
| 29.4% |      10 | `#write#78` | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`     |
| 11.8% |       4 | `iterate`   | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/iterators.jl:682` |

##### `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40`)

|      % | Samples | Caller     | Location                                                                                     |
| -----: | ------: | ---------- | -------------------------------------------------------------------------------------------- |
| 100.0% |      33 | `getvalue` | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:127` |

##### `macro expansion` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:23`)

|     % | Samples | Caller                                                                                                                                                                                                                           | Location                                                                                    |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| 81.8% |      27 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/read.jl:218` |
| 18.2% |       6 | `var\"#read!#9\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Array}, ::Bool)`  | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/read.jl:312` |

##### `var\"#write#85\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.NumberType, ::Vector{UInt8}, ::Int64, ::Int64, ::Int64)` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:224`)

|     % | Samples | Caller      | Location                                                                                     |
| ----: | ------: | ----------- | -------------------------------------------------------------------------------------------- |
| 89.3% |      25 | `#write#78` | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:157` |
| 10.7% |       3 | `write`     | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:224` |

##### `getvalue(::Type{JSON3.Array}, ::Base.CodeUnits{UInt8, String}, ::SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}, ::Int64, ::UInt64)` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:131`)

|      % | Samples | Caller     | Location                                                                                     |
| -----: | ------: | ---------- | -------------------------------------------------------------------------------------------- |
| 100.0% |      25 | `getvalue` | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:216` |

##### `unescape(::JSON3.PointerString)` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/strings.jl:48`)

|      % | Samples | Caller     | Location                                                                                     |
| -----: | ------: | ---------- | -------------------------------------------------------------------------------------------- |
| 100.0% |      21 | `getvalue` | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:193` |

##### `var\"#write#83\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.BoolType, ::Vector{UInt8}, ::Int64, ::Int64, ::Bool)` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:209`)

|      % | Samples | Caller      | Location                                                                                     |
| -----: | ------: | ----------- | -------------------------------------------------------------------------------------------- |
| 100.0% |      18 | `#write#78` | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:157` |

##### `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/read.jl:87`)

|     % | Samples | Caller                                                                                                                                                                                                                           | Location                                                                                    |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| 94.1% |      16 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/read.jl:218` |
|  5.9% |       1 | `var\"#read!#9\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Array}, ::Bool)`  | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/read.jl:312` |

##### `macro expansion` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl`)

|     % | Samples | Caller                                                                                                                                                                                                                           | Location                                                                                    |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| 60.0% |       6 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/read.jl:218` |
| 40.0% |       4 | `var\"#read!#9\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Array}, ::Bool)`  | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/read.jl:312` |

##### `getvalue` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl`)

|     % | Samples | Caller    | Location                                                                                    |
| ----: | ------: | --------- | ------------------------------------------------------------------------------------------- |
| 88.9% |       8 | `iterate` | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:78` |
| 11.1% |       1 | `iterate` | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:81` |

##### `#defaultminimum##0` (`<unknown>`)

|     % | Samples | Caller        | Location                                                                                     |
| ----: | ------: | ------------- | -------------------------------------------------------------------------------------------- |
| 75.0% |       3 | `_foldl_impl` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:54` |

##### `(::JSON3.var\"#defaultminimum##0#defaultminimum##1\"{JSON3.Array{Int64, Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}}})(::Int64)` (`<unknown>`)

|      % | Samples | Caller      | Location                                                                                     |
| -----: | ------: | ----------- | -------------------------------------------------------------------------------------------- |
| 100.0% |       3 | `MappingRF` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:92` |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|     % | Samples | Function                                                           | Location                                                                                                          |
| ----: | ------: | ------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| 99.7% |  26,218 | `eval(::Module, ::Any)`                                            | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:489`                       |
| 99.7% |  26,218 | `include_string(::typeof(identity), ::Module, ::String, ::String)` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/loading.jl:2856`                   |
| 99.7% |  26,218 | `_include(::Function, ::Module, ::String)`                         | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/loading.jl:2924`                   |
| 99.7% |  26,218 | `include(::Module, ::String)`                                      | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/Base.jl:306`                       |
| 99.7% |  26,218 | `exec_options(::Base.JLOptions)`                                   | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/client.jl:227`                     |
| 96.7% |  25,426 | `parse_workload`                                                   | `profile.jl:13`                                                                                                   |
| 96.7% |  25,426 | `macro expansion`                                                  | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/stdlib/v1.12/Profile/src/Profile.jl:60` |
| 96.7% |  25,426 | `capture_cpu`                                                      | `profile.jl:24`                                                                                                   |
| 88.9% |  23,376 | `#write#57`                                                        | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:40`                       |
| 68.0% |  17,881 | `#write#78`                                                        | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`                      |
| 67.9% |  17,859 | `write`                                                            | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:147`                      |
| 67.9% |  17,837 | `#write#80`                                                        | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:187`                      |
| 25.2% |   6,627 | `_symbol`                                                          | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`                        |
| 25.2% |   6,627 | `getvalue`                                                         | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:187`                      |
| 21.0% |   5,514 | `foldl_impl`                                                       | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:40`                      |
| 21.0% |   5,514 | `mapfoldl_impl`                                                    | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:36`                      |
| 21.0% |   5,514 | `#mapfoldl#270`                                                    | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:167`                     |
| 21.0% |   5,514 | `mapfoldl`                                                         | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:167`                     |
| 21.0% |   5,514 | `#mapreduce#274`                                                   | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:299`                     |
| 21.0% |   5,514 | `mapreduce`                                                        | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:299`                     |

#### Categories

##### Third-party

|     % | Samples | Function                                                                                                                                                                                                                         | Location                                                                                     |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| 88.9% |  23,376 | `#write#57`                                                                                                                                                                                                                      | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:40`  |
| 68.0% |  17,881 | `#write#78`                                                                                                                                                                                                                      | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:157` |
| 67.9% |  17,859 | `write`                                                                                                                                                                                                                          | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:147` |
| 67.9% |  17,837 | `#write#80`                                                                                                                                                                                                                      | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:187` |
| 25.2% |   6,627 | `_symbol`                                                                                                                                                                                                                        | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`   |
| 25.2% |   6,627 | `getvalue`                                                                                                                                                                                                                       | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:187` |
| 21.0% |   5,513 | `defaultminimum`                                                                                                                                                                                                                 | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:12`  |
| 20.4% |   5,370 | `getvalue`                                                                                                                                                                                                                       | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:127` |
| 20.4% |   5,364 | `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})`                                                                                               | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40`  |
| 15.2% |   4,007 | `iterate`                                                                                                                                                                                                                        | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:81`  |
| 13.5% |   3,558 | `getvalue`                                                                                                                                                                                                                       | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:214` |
| 12.1% |   3,183 | `iterate`                                                                                                                                                                                                                        | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:78`  |
|  8.1% |   2,138 | `var\"#write#97\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)`                                                          | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:340` |
|  7.1% |   1,856 | `getindex`                                                                                                                                                                                                                       | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:163` |
|  5.9% |   1,548 | `realloc!(::Vector{UInt8}, ::Int64, ::Int64)`                                                                                                                                                                                    | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:51`  |
|  5.3% |   1,406 | `var\"#read#6\"(::Bool, ::Nothing, ::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.read), ::String)`                                                                                                       | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/read.jl:30`   |
|  5.3% |   1,406 | `read`                                                                                                                                                                                                                           | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/read.jl:30`   |
|  4.8% |   1,260 | `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)`                                                                     | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/read.jl:87`   |
|  4.7% |   1,243 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/read.jl:218`  |
|  4.7% |   1,243 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)`                                             | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/read.jl:218`  |

##### Standard library

|     % | Samples | Function                                                           | Location                                                                                                          |
| ----: | ------: | ------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| 99.7% |  26,218 | `eval(::Module, ::Any)`                                            | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:489`                       |
| 99.7% |  26,218 | `include_string(::typeof(identity), ::Module, ::String, ::String)` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/loading.jl:2856`                   |
| 99.7% |  26,218 | `_include(::Function, ::Module, ::String)`                         | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/loading.jl:2924`                   |
| 99.7% |  26,218 | `include(::Module, ::String)`                                      | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/Base.jl:306`                       |
| 99.7% |  26,218 | `exec_options(::Base.JLOptions)`                                   | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/client.jl:227`                     |
| 96.7% |  25,426 | `macro expansion`                                                  | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/stdlib/v1.12/Profile/src/Profile.jl:60` |
| 21.0% |   5,514 | `foldl_impl`                                                       | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:40`                      |
| 21.0% |   5,514 | `mapfoldl_impl`                                                    | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:36`                      |
| 21.0% |   5,514 | `#mapfoldl#270`                                                    | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:167`                     |
| 21.0% |   5,514 | `mapfoldl`                                                         | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:167`                     |
| 21.0% |   5,514 | `#mapreduce#274`                                                   | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:299`                     |
| 21.0% |   5,514 | `mapreduce`                                                        | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:299`                     |
| 21.0% |   5,514 | `#sum#277`                                                         | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:524`                     |
| 21.0% |   5,514 | `sum`                                                              | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:524`                     |
| 21.0% |   5,513 | `#sum#278`                                                         | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:553`                     |
| 21.0% |   5,513 | `sum`                                                              | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:553`                     |
| 21.0% |   5,513 | `_foldl_impl`                                                      | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:50`                      |
| 21.0% |   5,508 | `_foldl_impl`                                                      | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:54`                      |
| 20.9% |   5,504 | `MappingRF`                                                        | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:92`                      |
| 10.7% |   2,824 | `iterate`                                                          | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/iterators.jl:682`                  |

##### Native

|     % | Samples | Function                                                                                                                                                                                | Location    |
| ----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 21.0% |   5,510 | `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})`                                                                                                            | `<unknown>` |
| 20.9% |   5,495 | `#defaultminimum##0`                                                                                                                                                                    | `<unknown>` |
| <0.1% |       6 | `(::JSON3.var\"#defaultminimum##0#defaultminimum##1\"{JSON3.Array{Int64, Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}}})(::Int64)` | `<unknown>` |

#### Callees

Callees ranked by contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `eval(::Module, ::Any)` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:489`)

|     % | Samples | Callee        | Location        |
| ----: | ------: | ------------- | --------------- |
| 97.0% |  25,426 | `capture_cpu` | `profile.jl:24` |

##### `include_string(::typeof(identity), ::Module, ::String, ::String)` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/loading.jl:2856`)

|      % | Samples | Callee                  | Location                                                                                    |
| -----: | ------: | ----------------------- | ------------------------------------------------------------------------------------------- |
| 100.0% |  26,218 | `eval(::Module, ::Any)` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:489` |

##### `_include(::Function, ::Module, ::String)` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/loading.jl:2924`)

|      % | Samples | Callee                                                             | Location                                                                                        |
| -----: | ------: | ------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------- |
| 100.0% |  26,218 | `include_string(::typeof(identity), ::Module, ::String, ::String)` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/loading.jl:2856` |

##### `include(::Module, ::String)` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/Base.jl:306`)

|      % | Samples | Callee                                     | Location                                                                                        |
| -----: | ------: | ------------------------------------------ | ----------------------------------------------------------------------------------------------- |
| 100.0% |  26,218 | `_include(::Function, ::Module, ::String)` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/loading.jl:2924` |

##### `exec_options(::Base.JLOptions)` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/client.jl:227`)

|      % | Samples | Callee                        | Location                                                                                    |
| -----: | ------: | ----------------------------- | ------------------------------------------------------------------------------------------- |
| 100.0% |  26,218 | `include(::Module, ::String)` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/Base.jl:306` |

##### `parse_workload` (`profile.jl:13`)

|     % | Samples | Callee             | Location                                                                                              |
| ----: | ------: | ------------------ | ----------------------------------------------------------------------------------------------------- |
| 91.9% |  23,376 | `#write#57`        | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:40`           |
|  5.5% |   1,406 | `read`             | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/read.jl:30`            |
|  1.1% |     271 | `length_continued` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:534` |
|  0.5% |     115 | `length_continued` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl`     |
|  0.2% |      44 | `length_continued` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:533` |

##### `macro expansion` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/stdlib/v1.12/Profile/src/Profile.jl:60`)

|      % | Samples | Callee           | Location        |
| -----: | ------: | ---------------- | --------------- |
| 100.0% |  25,426 | `parse_workload` | `profile.jl:13` |

##### `capture_cpu` (`profile.jl:24`)

|      % | Samples | Callee            | Location                                                                                                          |
| -----: | ------: | ----------------- | ----------------------------------------------------------------------------------------------------------------- |
| 100.0% |  25,426 | `macro expansion` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/stdlib/v1.12/Profile/src/Profile.jl:60` |

##### `#write#57` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:40`)

|     % | Samples | Callee           | Location                                                                                     |
| ----: | ------: | ---------------- | -------------------------------------------------------------------------------------------- |
| 76.4% |  17,859 | `write`          | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:147` |
| 23.6% |   5,513 | `defaultminimum` | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:12`  |

##### `#write#78` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`)

|     % | Samples | Callee                                                                                                                                                                  | Location                                                                                     |
| ----: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| 99.8% |  17,837 | `#write#80`                                                                                                                                                             | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:187` |
| 73.0% |  13,057 | `#write#78`                                                                                                                                                             | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:157` |
| 11.9% |   2,129 | `var\"#write#97\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:340` |
| 11.8% |   2,106 | `iterate`                                                                                                                                                               | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:81`  |
|  9.4% |   1,679 | `iterate`                                                                                                                                                               | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:78`  |

##### `write` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:147`)

|      % | Samples | Callee      | Location                                                                                     |
| -----: | ------: | ----------- | -------------------------------------------------------------------------------------------- |
| 100.0% |  17,859 | `#write#78` | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:157` |

##### `#write#80` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:187`)

|     % | Samples | Callee            | Location                                                                                                 |
| ----: | ------: | ----------------- | -------------------------------------------------------------------------------------------------------- |
| 95.7% |  17,067 | `#write#78`       | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`             |
|  3.1% |     553 | `isassigned`      | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/multidimensional.jl:1653` |
|  2.2% |     401 | `getindex`        | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:163`             |
| <0.1% |       7 | `indexed_iterate` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/tuple.jl:162`             |
| <0.1% |       5 | `isassigned`      | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/multidimensional.jl:1652` |

##### `getvalue` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:187`)

|      % | Samples | Callee    | Location                                                                                   |
| -----: | ------: | --------- | ------------------------------------------------------------------------------------------ |
| 100.0% |   6,627 | `_symbol` | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:1` |

##### `foldl_impl` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:40`)

|      % | Samples | Callee        | Location                                                                                     |
| -----: | ------: | ------------- | -------------------------------------------------------------------------------------------- |
| 100.0% |   5,513 | `_foldl_impl` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:50` |
|  99.9% |   5,508 | `_foldl_impl` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:54` |

##### `mapfoldl_impl` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:36`)

|      % | Samples | Callee       | Location                                                                                     |
| -----: | ------: | ------------ | -------------------------------------------------------------------------------------------- |
| 100.0% |   5,514 | `foldl_impl` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:40` |

##### `#mapfoldl#270` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:167`)

|      % | Samples | Callee          | Location                                                                                     |
| -----: | ------: | --------------- | -------------------------------------------------------------------------------------------- |
| 100.0% |   5,514 | `mapfoldl_impl` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:36` |

##### `mapfoldl` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:167`)

|      % | Samples | Callee          | Location                                                                                      |
| -----: | ------: | --------------- | --------------------------------------------------------------------------------------------- |
| 100.0% |   5,514 | `#mapfoldl#270` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:167` |

##### `#mapreduce#274` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:299`)

|      % | Samples | Callee     | Location                                                                                      |
| -----: | ------: | ---------- | --------------------------------------------------------------------------------------------- |
| 100.0% |   5,514 | `mapfoldl` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:167` |

##### `mapreduce` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:299`)

|      % | Samples | Callee           | Location                                                                                      |
| -----: | ------: | ---------------- | --------------------------------------------------------------------------------------------- |
| 100.0% |   5,514 | `#mapreduce#274` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:299` |

##### `#sum#277` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:524`)

|      % | Samples | Callee      | Location                                                                                      |
| -----: | ------: | ----------- | --------------------------------------------------------------------------------------------- |
| 100.0% |   5,514 | `mapreduce` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:299` |

##### `sum` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:524`)

|      % | Samples | Callee     | Location                                                                                      |
| -----: | ------: | ---------- | --------------------------------------------------------------------------------------------- |
| 100.0% |   5,514 | `#sum#277` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:524` |

##### `defaultminimum` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:12`)

|      % | Samples | Callee                                                                                                                       | Location                                                                                           |
| -----: | ------: | ---------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| 100.0% |   5,513 | `sum`                                                                                                                        | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:553`      |
|   0.8% |      44 | `isempty(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/essentials.jl:1072` |

##### `#sum#278` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:553`)

|      % | Samples | Callee | Location                                                                                      |
| -----: | ------: | ------ | --------------------------------------------------------------------------------------------- |
| 100.0% |   5,513 | `sum`  | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:524` |

##### `sum` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:553`)

|      % | Samples | Callee     | Location                                                                                      |
| -----: | ------: | ---------- | --------------------------------------------------------------------------------------------- |
| 100.0% |   5,513 | `#sum#278` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:553` |

##### `_foldl_impl` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:50`)

|     % | Samples | Callee                                                                       | Location                                                                                         |
| ----: | ------: | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 99.8% |   5,504 | `MappingRF`                                                                  | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:92`     |
|  0.1% |       6 | `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` | `<unknown>`                                                                                      |
| <0.1% |       2 | `iterate`                                                                    | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/iterators.jl:682` |

##### `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` (`<unknown>`)

|     % | Samples | Callee                                                                                                                       | Location                                                                                              |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| 99.9% |   5,502 | `sum`                                                                                                                        | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:524`         |
| 57.9% |   3,192 | `sum`                                                                                                                        | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:553`         |
|  3.2% |     177 | `isempty(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/essentials.jl:1072`    |
|  0.2% |      10 | `defaultminimum`                                                                                                             | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:6`            |
| <0.1% |       1 | `isempty`                                                                                                                    | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/abstractarray.jl:1238` |

##### `_foldl_impl` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:54`)

|     % | Samples | Callee                                                                       | Location                                                                                         |
| ----: | ------: | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 99.7% |   5,494 | `#defaultminimum##0`                                                         | `<unknown>`                                                                                      |
| 61.6% |   3,394 | `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` | `<unknown>`                                                                                      |
| 51.2% |   2,822 | `iterate`                                                                    | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/iterators.jl:682` |
|  6.1% |     336 | `MappingRF`                                                                  | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:92`     |
|  3.3% |     183 | `BottomRF`                                                                   | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:78`     |

##### `MappingRF` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:92`)

|      % | Samples | Callee                                                                                                                                                                                  | Location                                                                                     |
| -----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| 100.0% |   5,504 | `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})`                                                                                                            | `<unknown>`                                                                                  |
|   0.3% |      17 | `BottomRF`                                                                                                                                                                              | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:77` |
|   0.1% |       6 | `(::JSON3.var\"#defaultminimum##0#defaultminimum##1\"{JSON3.Array{Int64, Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}}})(::Int64)` | `<unknown>`                                                                                  |
|  <0.1% |       1 | `BottomRF`                                                                                                                                                                              | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:78` |

##### `#defaultminimum##0` (`<unknown>`)

|     % | Samples | Callee           | Location                                                                                                 |
| ----: | ------: | ---------------- | -------------------------------------------------------------------------------------------------------- |
| 86.7% |   4,765 | `defaultminimum` | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:12`              |
|  9.4% |     517 | `isassigned`     | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/multidimensional.jl:1653` |
|  7.0% |     385 | `getindex`       | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:163`             |
| <0.1% |       2 | `isassigned`     | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/multidimensional.jl:1652` |
| <0.1% |       1 | `isassigned`     | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/multidimensional.jl`      |

##### `getvalue` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:127`)

|     % | Samples | Callee                                                                                                                             | Location                                                                                    |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| 99.9% |   5,364 | `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40` |

##### `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40`)

|     % | Samples | Callee                                                | Location                                                                                        |
| ----: | ------: | ----------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| 64.7% |   3,471 | `getvalue`                                            | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:187`    |
| 31.9% |   1,710 | `setindex!(::Dict{Symbol, Int64}, ::Int64, ::Symbol)` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/dict.jl:354`     |
|  1.9% |     103 | `+`                                                   | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/int.jl:87`       |
|  0.6% |      30 | `getindex`                                            | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/subarray.jl:339` |
|  0.1% |       8 | `gettapelen`                                          | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:118`    |

##### `iterate` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:81`)

|     % | Samples | Callee     | Location                                                                                     |
| ----: | ------: | ---------- | -------------------------------------------------------------------------------------------- |
| 88.8% |   3,558 | `getvalue` | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:214` |
|  5.4% |     217 | `getvalue` | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:218` |
|  3.0% |     120 | `getvalue` | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:213` |
|  2.2% |      88 | `getvalue` | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:216` |
|  0.3% |      13 | `getvalue` | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:220` |

##### `getvalue` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:214`)

|     % | Samples | Callee     | Location                                                                                     |
| ----: | ------: | ---------- | -------------------------------------------------------------------------------------------- |
| 99.1% |   3,526 | `getvalue` | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:127` |
|  0.9% |      32 | `getvalue` | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:126` |

##### `iterate` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:78`)

|     % | Samples | Callee     | Location                                                                                     |
| ----: | ------: | ---------- | -------------------------------------------------------------------------------------------- |
| 99.1% |   3,155 | `getvalue` | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:187` |
|  0.8% |      27 | `getvalue` | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl`     |
| <0.1% |       1 | `getvalue` | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:184` |

##### `iterate` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/iterators.jl:682`)

|     % | Samples | Callee    | Location                                                                                         |
| ----: | ------: | --------- | ------------------------------------------------------------------------------------------------ |
| 56.3% |   1,589 | `iterate` | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:81`      |
| 42.9% |   1,211 | `iterate` | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:78`      |
|  2.9% |      82 | `iterate` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/iterators.jl:682` |
|  0.6% |      18 | `iterate` | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:75`      |
|  0.1% |       4 | `iterate` | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl`         |

##### `var\"#write#97\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:340`)

|     % | Samples | Callee                                        | Location                                                                                          |
| ----: | ------: | --------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| 72.3% |   1,545 | `realloc!(::Vector{UInt8}, ::Int64, ::Int64)` | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:51`       |
| 10.9% |     234 | `escapelength`                                | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:331`      |
|  7.2% |     153 | `macro expansion`                             | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/simdloop.jl:77`    |
|  1.6% |      34 | `setindex!`                                   | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/array.jl:986`      |
|  1.1% |      23 | `getindex`                                    | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/essentials.jl:920` |

##### `getindex` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:163`)

|     % | Samples | Callee     | Location                                                                                     |
| ----: | ------: | ---------- | -------------------------------------------------------------------------------------------- |
| 99.4% |   1,844 | `getvalue` | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:127` |
|  0.6% |      12 | `getvalue` | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:126` |

##### `realloc!(::Vector{UInt8}, ::Int64, ::Int64)` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:51`)

|      % | Samples | Callee  | Location                                                                                     |
| -----: | ------: | ------- | -------------------------------------------------------------------------------------------- |
| 100.0% |   1,548 | `zeros` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/array.jl:591` |

##### `var\"#read#6\"(::Bool, ::Nothing, ::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.read), ::String)` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/read.jl:30`)

|     % | Samples | Callee                                                                         | Location                                                                                    |
| ----: | ------: | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------- |
| 88.4% |   1,243 | `read!`                                                                        | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/read.jl:87`  |
| 11.5% |     162 | `Array`                                                                        | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:647` |
|  0.1% |       1 | `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, Vector{UInt64}})` | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40` |

##### `read` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/read.jl:30`)

|      % | Samples | Callee                                                                                                                     | Location                                                                                   |
| -----: | ------: | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| 100.0% |   1,406 | `var\"#read#6\"(::Bool, ::Nothing, ::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.read), ::String)` | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/read.jl:30` |

##### `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/read.jl:87`)

|     % | Samples | Callee                                                                                                                                                                               | Location                                                                                            |
| ----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------- |
| 98.6% |   1,242 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/read.jl:218`         |
| 98.2% |   1,237 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Array}, ::Bool)`  | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/read.jl:312`         |
| 21.7% |     274 | `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{String})`                                                                       | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/read.jl:142`         |
|  3.8% |      48 | `typeparser(::Type{Float64}, ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Int16, ::Parsers.Options)`                                                                | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/Parsers/05lwR/src/components.jl:392` |
|  1.2% |      15 | `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.False})`                                                                  | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/read.jl:189`         |

##### `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/read.jl:218`)

|     % | Samples | Callee                                                                                                                                                                      | Location                                                                                     |
| ----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| 99.8% |   1,240 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/read.jl:87`   |
| 14.9% |     185 | `getbyte`                                                                                                                                                                   | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:8`   |
|  8.4% |     104 | `macro expansion`                                                                                                                                                           | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:29`  |
|  6.7% |      83 | `+`                                                                                                                                                                         | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/int.jl:87`    |
|  3.2% |      40 | `setindex!`                                                                                                                                                                 | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/array.jl:986` |

##### `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/read.jl:218`)

|      % | Samples | Callee                                                                                                                                                                                                                           | Location                                                                                    |
| -----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| 100.0% |   1,243 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/read.jl:218` |

##### `(::JSON3.var\"#defaultminimum##0#defaultminimum##1\"{JSON3.Array{Int64, Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}}})(::Int64)` (`<unknown>`)

|     % | Samples | Callee       | Location                                                                                                 |
| ----: | ------: | ------------ | -------------------------------------------------------------------------------------------------------- |
| 33.3% |       2 | `isassigned` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/multidimensional.jl:1652` |
| 16.7% |       1 | `isassigned` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/multidimensional.jl:1654` |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame.

Common call stack: `include_string(::typeof(identity), ::Module, ::String, ::String)` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/loading.jl:2856`) ← `_include(::Function, ::Module, ::String)` (2924) ← `include(::Module, ::String)` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/Base.jl:306`) ← `exec_options(::Base.JLOptions)` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/client.jl:227`)

|     % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ----: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 15.3% |   4,023 | `#write#78` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `#write#78` (157) ← `#write#80` (187) ← `#write#78` (157) ← `write` (147) ← `#write#57` (40) ← `parse_workload` (`profile.jl:13`) ← `macro expansion` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/stdlib/v1.12/Profile/src/Profile.jl:60`) ← `capture_cpu` (`profile.jl:24`) ← `eval(::Module, ::Any)` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:489`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  8.5% |   2,230 | `#write#78` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `#write#78` (157) ← `#write#78` (157) ← `#write#80` (187) ← `#write#78` (157) ← `write` (147) ← `#write#57` (40) ← `parse_workload` (`profile.jl:13`) ← `macro expansion` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/stdlib/v1.12/Profile/src/Profile.jl:60`) ← `capture_cpu` (`profile.jl:24`) ← `eval(::Module, ::Any)` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:489`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  6.1% |   1,600 | `#write#78` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `#write#80` (187) ← `#write#78` (157) ← `write` (147) ← `#write#57` (40) ← `parse_workload` (`profile.jl:13`) ← `macro expansion` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/stdlib/v1.12/Profile/src/Profile.jl:60`) ← `capture_cpu` (`profile.jl:24`) ← `eval(::Module, ::Any)` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:489`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  3.1% |     813 | `_symbol` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`) ← `getvalue` (187) ← `iterate` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:78`) ← `#write#78` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `#write#78` (157) ← `#write#80` (187) ← `#write#78` (157) ← `write` (147) ← `#write#57` (40) ← `parse_workload` (`profile.jl:13`) ← `macro expansion` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/stdlib/v1.12/Profile/src/Profile.jl:60`) ← `capture_cpu` (`profile.jl:24`) ← `eval(::Module, ::Any)` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:489`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  3.0% |     792 | `eval(::Module, ::Any)` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:489`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  2.9% |     775 | `GenericMemory` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:588`) ← `Array` (647) ← `Array` (660) ← `zeros` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/array.jl:595`) ← `zeros` (591) ← `realloc!(::Vector{UInt8}, ::Int64, ::Int64)` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:51`) ← `var\"#write#97\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` (340) ← `#write#78` (157) ← `#write#78` (157) ← `#write#80` (187) ← `#write#78` (157) ← `write` (147) ← `#write#57` (40) ← `parse_workload` (`profile.jl:13`) ← `macro expansion` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/stdlib/v1.12/Profile/src/Profile.jl:60`) ← `capture_cpu` (`profile.jl:24`) ← `eval(::Module, ::Any)` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:489`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  2.6% |     684 | `_symbol` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`) ← `getvalue` (187) ← `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40`) ← `getvalue` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:127`) ← `getvalue` (214) ← `iterate` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:81`) ← `iterate` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/iterators.jl:682`) ← `_foldl_impl` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:54`) ← `foldl_impl` (40) ← `mapfoldl_impl` (36) ← `#mapfoldl#270` (167) ← `mapfoldl` (167) ← `#mapreduce#274` (299) ← `mapreduce` (299) ← `#sum#277` (524) ← `sum` (524) ← `#sum#278` (553) ← `sum` (553) ← `defaultminimum` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:12`) ← `#defaultminimum##0` ← `_foldl_impl` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:54`) ← `foldl_impl` (40) ← `mapfoldl_impl` (36) ← `#mapfoldl#270` (167) ← `mapfoldl` (167) ← `#mapreduce#274` (299) ← `mapreduce` (299) ← `#sum#277` (524) ← `sum` (524) ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `MappingRF` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:92`) ← `_foldl_impl` (50) ← `foldl_impl` (40) ← `mapfoldl_impl` (36) ← `#mapfoldl#270` (167) ← `mapfoldl` (167) ← `#mapreduce#274` (299) ← `mapreduce` (299) ← `#sum#277` (524) ← `sum` (524) ← `#sum#278` (553) ← `sum` (553) ← `defaultminimum` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:12`) ← `#write#57` (40) ← `parse_workload` (`profile.jl:13`) ← `macro expansion` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/stdlib/v1.12/Profile/src/Profile.jl:60`) ← `capture_cpu` (`profile.jl:24`) ← `eval(::Module, ::Any)` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:489`)                                                                                                                                                                                                                                                                                                                                                                                                    |
|  2.5% |     670 | `_symbol` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`) ← `getvalue` (187) ← `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40`) ← `getvalue` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:127`) ← `getvalue` (214) ← `iterate` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:81`) ← `#write#78` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `#write#80` (187) ← `#write#78` (157) ← `write` (147) ← `#write#57` (40) ← `parse_workload` (`profile.jl:13`) ← `macro expansion` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/stdlib/v1.12/Profile/src/Profile.jl:60`) ← `capture_cpu` (`profile.jl:24`) ← `eval(::Module, ::Any)` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:489`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  2.3% |     594 | `_symbol` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`) ← `getvalue` (187) ← `iterate` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:78`) ← `iterate` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/iterators.jl:682`) ← `_foldl_impl` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:54`) ← `foldl_impl` (40) ← `mapfoldl_impl` (36) ← `#mapfoldl#270` (167) ← `mapfoldl` (167) ← `#mapreduce#274` (299) ← `mapreduce` (299) ← `#sum#277` (524) ← `sum` (524) ← `#sum#278` (553) ← `sum` (553) ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `_foldl_impl` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:54`) ← `foldl_impl` (40) ← `mapfoldl_impl` (36) ← `#mapfoldl#270` (167) ← `mapfoldl` (167) ← `#mapreduce#274` (299) ← `mapreduce` (299) ← `#sum#277` (524) ← `sum` (524) ← `#sum#278` (553) ← `sum` (553) ← `defaultminimum` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:12`) ← `#defaultminimum##0` ← `_foldl_impl` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:54`) ← `foldl_impl` (40) ← `mapfoldl_impl` (36) ← `#mapfoldl#270` (167) ← `mapfoldl` (167) ← `#mapreduce#274` (299) ← `mapreduce` (299) ← `#sum#277` (524) ← `sum` (524) ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `MappingRF` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:92`) ← `_foldl_impl` (50) ← `foldl_impl` (40) ← `mapfoldl_impl` (36) ← `#mapfoldl#270` (167) ← `mapfoldl` (167) ← `#mapreduce#274` (299) ← `mapreduce` (299) ← `#sum#277` (524) ← `sum` (524) ← `#sum#278` (553) ← `sum` (553) ← `defaultminimum` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:12`) ← `#write#57` (40) ← `parse_workload` (`profile.jl:13`) ← `macro expansion` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/stdlib/v1.12/Profile/src/Profile.jl:60`) ← `capture_cpu` (`profile.jl:24`) ← `eval(::Module, ::Any)` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:489`)                                                                                                                                                                                                                                                                                                                                                                   |
|  2.2% |     589 | `GenericMemory` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:588`) ← `Array` (647) ← `Array` (660) ← `zeros` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/array.jl:595`) ← `zeros` (591) ← `realloc!(::Vector{UInt8}, ::Int64, ::Int64)` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:51`) ← `var\"#write#97\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` (340) ← `#write#78` (157) ← `#write#78` (157) ← `#write#78` (157) ← `#write#80` (187) ← `#write#78` (157) ← `write` (147) ← `#write#57` (40) ← `parse_workload` (`profile.jl:13`) ← `macro expansion` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/stdlib/v1.12/Profile/src/Profile.jl:60`) ← `capture_cpu` (`profile.jl:24`) ← `eval(::Module, ::Any)` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:489`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  2.1% |     562 | `indexed_iterate` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/tuple.jl:162`) ← `#write#78` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `#write#78` (157) ← `#write#80` (187) ← `#write#78` (157) ← `write` (147) ← `#write#57` (40) ← `parse_workload` (`profile.jl:13`) ← `macro expansion` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/stdlib/v1.12/Profile/src/Profile.jl:60`) ← `capture_cpu` (`profile.jl:24`) ← `eval(::Module, ::Any)` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:489`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  1.6% |     427 | `_symbol` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`) ← `getvalue` (187) ← `iterate` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:78`) ← `#write#78` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `#write#78` (157) ← `#write#78` (157) ← `#write#80` (187) ← `#write#78` (157) ← `write` (147) ← `#write#57` (40) ← `parse_workload` (`profile.jl:13`) ← `macro expansion` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/stdlib/v1.12/Profile/src/Profile.jl:60`) ← `capture_cpu` (`profile.jl:24`) ← `eval(::Module, ::Any)` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:489`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  1.6% |     417 | `_symbol` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`) ← `getvalue` (187) ← `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40`) ← `getvalue` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:127`) ← `getvalue` (214) ← `iterate` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:81`) ← `#write#78` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `#write#78` (157) ← `#write#80` (187) ← `#write#78` (157) ← `write` (147) ← `#write#57` (40) ← `parse_workload` (`profile.jl:13`) ← `macro expansion` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/stdlib/v1.12/Profile/src/Profile.jl:60`) ← `capture_cpu` (`profile.jl:24`) ← `eval(::Module, ::Any)` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:489`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  1.5% |     407 | `GenericMemory` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:588`) ← `rehash!(::Dict{Symbol, Int64}, ::Int64)` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/dict.jl:137`) ← `_setindex!` (337) ← `setindex!(::Dict{Symbol, Int64}, ::Int64, ::Symbol)` (354) ← `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40`) ← `getvalue` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:127`) ← `getvalue` (214) ← `iterate` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:81`) ← `#write#78` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `#write#80` (187) ← `#write#78` (157) ← `write` (147) ← `#write#57` (40) ← `parse_workload` (`profile.jl:13`) ← `macro expansion` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/stdlib/v1.12/Profile/src/Profile.jl:60`) ← `capture_cpu` (`profile.jl:24`) ← `eval(::Module, ::Any)` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:489`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  1.4% |     379 | `#write#78` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `#write#80` (187) ← `#write#78` (157) ← `#write#78` (157) ← `#write#80` (187) ← `#write#78` (157) ← `write` (147) ← `#write#57` (40) ← `parse_workload` (`profile.jl:13`) ← `macro expansion` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/stdlib/v1.12/Profile/src/Profile.jl:60`) ← `capture_cpu` (`profile.jl:24`) ← `eval(::Module, ::Any)` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:489`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  1.4% |     364 | `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `_foldl_impl` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:54`) ← `foldl_impl` (40) ← `mapfoldl_impl` (36) ← `#mapfoldl#270` (167) ← `mapfoldl` (167) ← `#mapreduce#274` (299) ← `mapreduce` (299) ← `#sum#277` (524) ← `sum` (524) ← `#sum#278` (553) ← `sum` (553) ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `_foldl_impl` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:54`) ← `foldl_impl` (40) ← `mapfoldl_impl` (36) ← `#mapfoldl#270` (167) ← `mapfoldl` (167) ← `#mapreduce#274` (299) ← `mapreduce` (299) ← `#sum#277` (524) ← `sum` (524) ← `#sum#278` (553) ← `sum` (553) ← `defaultminimum` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:12`) ← `#defaultminimum##0` ← `_foldl_impl` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:54`) ← `foldl_impl` (40) ← `mapfoldl_impl` (36) ← `#mapfoldl#270` (167) ← `mapfoldl` (167) ← `#mapreduce#274` (299) ← `mapreduce` (299) ← `#sum#277` (524) ← `sum` (524) ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `MappingRF` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:92`) ← `_foldl_impl` (50) ← `foldl_impl` (40) ← `mapfoldl_impl` (36) ← `#mapfoldl#270` (167) ← `mapfoldl` (167) ← `#mapreduce#274` (299) ← `mapreduce` (299) ← `#sum#277` (524) ← `sum` (524) ← `#sum#278` (553) ← `sum` (553) ← `defaultminimum` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:12`) ← `#write#57` (40) ← `parse_workload` (`profile.jl:13`) ← `macro expansion` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/stdlib/v1.12/Profile/src/Profile.jl:60`) ← `capture_cpu` (`profile.jl:24`) ← `eval(::Module, ::Any)` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:489`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  1.3% |     347 | `_symbol` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`) ← `getvalue` (187) ← `iterate` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:78`) ← `#write#78` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `#write#80` (187) ← `#write#78` (157) ← `write` (147) ← `#write#57` (40) ← `parse_workload` (`profile.jl:13`) ← `macro expansion` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/stdlib/v1.12/Profile/src/Profile.jl:60`) ← `capture_cpu` (`profile.jl:24`) ← `eval(::Module, ::Any)` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:489`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  1.2% |     325 | `_symbol` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`) ← `getvalue` (187) ← `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40`) ← `getvalue` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/utils.jl:127`) ← `getvalue` (214) ← `iterate` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:81`) ← `iterate` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/iterators.jl:682`) ← `_foldl_impl` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:54`) ← `foldl_impl` (40) ← `mapfoldl_impl` (36) ← `#mapfoldl#270` (167) ← `mapfoldl` (167) ← `#mapreduce#274` (299) ← `mapreduce` (299) ← `#sum#277` (524) ← `sum` (524) ← `#sum#278` (553) ← `sum` (553) ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `_foldl_impl` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:54`) ← `foldl_impl` (40) ← `mapfoldl_impl` (36) ← `#mapfoldl#270` (167) ← `mapfoldl` (167) ← `#mapreduce#274` (299) ← `mapreduce` (299) ← `#sum#277` (524) ← `sum` (524) ← `#sum#278` (553) ← `sum` (553) ← `defaultminimum` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:12`) ← `#defaultminimum##0` ← `_foldl_impl` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:54`) ← `foldl_impl` (40) ← `mapfoldl_impl` (36) ← `#mapfoldl#270` (167) ← `mapfoldl` (167) ← `#mapreduce#274` (299) ← `mapreduce` (299) ← `#sum#277` (524) ← `sum` (524) ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `MappingRF` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:92`) ← `_foldl_impl` (50) ← `foldl_impl` (40) ← `mapfoldl_impl` (36) ← `#mapfoldl#270` (167) ← `mapfoldl` (167) ← `#mapreduce#274` (299) ← `mapreduce` (299) ← `#sum#277` (524) ← `sum` (524) ← `#sum#278` (553) ← `sum` (553) ← `defaultminimum` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:12`) ← `#write#57` (40) ← `parse_workload` (`profile.jl:13`) ← `macro expansion` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/stdlib/v1.12/Profile/src/Profile.jl:60`) ← `capture_cpu` (`profile.jl:24`) ← `eval(::Module, ::Any)` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:489`) |
|  1.2% |     317 | `indexed_iterate` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/tuple.jl:162`) ← `#write#78` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `#write#78` (157) ← `#write#78` (157) ← `#write#80` (187) ← `#write#78` (157) ← `write` (147) ← `#write#57` (40) ← `parse_workload` (`profile.jl:13`) ← `macro expansion` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/stdlib/v1.12/Profile/src/Profile.jl:60`) ← `capture_cpu` (`profile.jl:24`) ← `eval(::Module, ::Any)` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:489`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  1.2% |     309 | `indexed_iterate` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/tuple.jl:162`) ← `#write#78` (`/Users/tomer/.cache/profiler-md-fixtures/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `#write#80` (187) ← `#write#78` (157) ← `write` (147) ← `#write#57` (40) ← `parse_workload` (`profile.jl:13`) ← `macro expansion` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/stdlib/v1.12/Profile/src/Profile.jl:60`) ← `capture_cpu` (`profile.jl:24`) ← `eval(::Module, ::Any)` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:489`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |

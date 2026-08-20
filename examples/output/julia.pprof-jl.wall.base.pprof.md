# Sampling profile

Collected 27,753 samples.

| Category         |     % | Samples |
| ---------------- | ----: | ------: |
| Third-party      | 65.6% |  18,201 |
| Standard library | 30.3% |   8,411 |
| Native           |  3.1% |     868 |
| Ours             |  1.0% |     273 |

## Hottest functions

### Self samples

Functions ranked by samples taken directly in the function body, excluding callees.

|     % | Samples | Function                                                                                                                                                                                                                         | Location                                                                                              |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| 35.3% |   9,798 | `#write#78`                                                                                                                                                                                                                      | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:159`  |
| 25.5% |   7,064 | `_symbol`                                                                                                                                                                                                                        | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`    |
|  8.0% |   2,225 | `GenericMemory`                                                                                                                                                                                                                  | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:588`           |
|  5.0% |   1,393 | `indexed_iterate`                                                                                                                                                                                                                | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/tuple.jl:162`          |
|  3.1% |     863 | `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})`                                                                                                                                                     | `<unknown>`                                                                                           |
|  3.0% |     828 | `eval(::Module, ::Any)`                                                                                                                                                                                                          | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:489`           |
|  1.7% |     476 | `ht_keyindex2_shorthash!(::Dict{Symbol, Int64}, ::Symbol)`                                                                                                                                                                       | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/dict.jl:265`           |
|  1.6% |     431 | `unsafe_load`                                                                                                                                                                                                                    | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/pointer.jl:151`        |
|  1.2% |     343 | `+`                                                                                                                                                                                                                              | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/int.jl:87`             |
|  1.1% |     304 | `_setindex!`                                                                                                                                                                                                                     | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/array.jl:991`          |
|  1.0% |     273 | `parse_workload`                                                                                                                                                                                                                 | `profile.jl:13`                                                                                       |
|  0.9% |     249 | `_foldl_impl`                                                                                                                                                                                                                    | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:55`          |
|  0.8% |     230 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:218`   |
|  0.8% |     228 | `BottomRF`                                                                                                                                                                                                                       | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:78`          |
|  0.7% |     201 | `getindex`                                                                                                                                                                                                                       | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/essentials.jl:920`     |
|  0.7% |     187 | `unsafe_string`                                                                                                                                                                                                                  | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:103` |
|  0.6% |     171 | `iterate`                                                                                                                                                                                                                        | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:75`   |
|  0.6% |     158 | `checkbounds`                                                                                                                                                                                                                    | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/basic.jl:217`  |
|  0.5% |     145 | `length_continued`                                                                                                                                                                                                               | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl`     |
|  0.5% |     142 | `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{String})`                                                                                                                   | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:142`   |

#### Categories

##### Third-party

|     % | Samples | Function                                                                                                                                                                                                                         | Location                                                                                              |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| 35.3% |   9,798 | `#write#78`                                                                                                                                                                                                                      | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:159`  |
| 25.5% |   7,064 | `_symbol`                                                                                                                                                                                                                        | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`    |
|  0.8% |     230 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:218`   |
|  0.6% |     171 | `iterate`                                                                                                                                                                                                                        | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:75`   |
|  0.5% |     142 | `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{String})`                                                                                                                   | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:142`   |
|  0.3% |      96 | `getvalue`                                                                                                                                                                                                                       | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:213`  |
|  0.3% |      94 | `#write#80`                                                                                                                                                                                                                      | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:200`  |
|  0.3% |      89 | `var\"#write#97\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)`                                                          | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:340`  |
|  0.3% |      77 | `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)`                                                                     | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:87`    |
|  0.2% |      61 | `#write#80`                                                                                                                                                                                                                      | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:187`  |
|  0.1% |      34 | `var\"#write#85\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.NumberType, ::Vector{UInt8}, ::Int64, ::Int64, ::Int64)`                                                           | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:224`  |
|  0.1% |      32 | `macro expansion`                                                                                                                                                                                                                | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:23`   |
|  0.1% |      31 | `iterate`                                                                                                                                                                                                                        | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl`      |
|  0.1% |      30 | `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})`                                                                                               | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40`   |
|  0.1% |      25 | `getvalue`                                                                                                                                                                                                                       | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl`      |
|  0.1% |      24 | `macro expansion`                                                                                                                                                                                                                | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:14`   |
|  0.1% |      23 | `unescape(::JSON3.PointerString)`                                                                                                                                                                                                | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/strings.jl:48` |
|  0.1% |      19 | `var\"#write#83\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.BoolType, ::Vector{UInt8}, ::Int64, ::Int64, ::Bool)`                                                              | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:209`  |
|  0.1% |      14 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)`                                                      | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:87`    |
| <0.1% |      12 | `getvalue(::Type{JSON3.Array}, ::Base.CodeUnits{UInt8, String}, ::SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}, ::Int64, ::UInt64)`                                                                        | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:131`  |

##### Standard library

|    % | Samples | Function                                                   | Location                                                                                              |
| ---: | ------: | ---------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| 8.0% |   2,225 | `GenericMemory`                                            | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:588`           |
| 5.0% |   1,393 | `indexed_iterate`                                          | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/tuple.jl:162`          |
| 3.0% |     828 | `eval(::Module, ::Any)`                                    | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:489`           |
| 1.7% |     476 | `ht_keyindex2_shorthash!(::Dict{Symbol, Int64}, ::Symbol)` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/dict.jl:265`           |
| 1.6% |     431 | `unsafe_load`                                              | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/pointer.jl:151`        |
| 1.2% |     343 | `+`                                                        | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/int.jl:87`             |
| 1.1% |     304 | `_setindex!`                                               | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/array.jl:991`          |
| 0.9% |     249 | `_foldl_impl`                                              | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:55`          |
| 0.8% |     228 | `BottomRF`                                                 | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:78`          |
| 0.7% |     201 | `getindex`                                                 | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/essentials.jl:920`     |
| 0.7% |     187 | `unsafe_string`                                            | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:103` |
| 0.6% |     158 | `checkbounds`                                              | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/basic.jl:217`  |
| 0.5% |     145 | `length_continued`                                         | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl`     |
| 0.4% |     108 | `==`                                                       | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/promotion.jl:637`      |
| 0.4% |     101 | `getproperty`                                              | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/Base_compiler.jl:54`   |
| 0.3% |      92 | `unsafe_string`                                            | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:99`  |
| 0.3% |      91 | `checkbounds`                                              | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/basic.jl:209`  |
| 0.3% |      72 | `&`                                                        | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/int.jl:353`            |
| 0.2% |      66 | `setindex!(::Dict{Symbol, Int64}, ::Int64, ::Symbol)`      | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/dict.jl:354`           |
| 0.2% |      50 | `getindex`                                                 | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/essentials.jl:386`     |

##### Native

|     % | Samples | Function                                                                                                                                                                                | Location    |
| ----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
|  3.1% |     863 | `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})`                                                                                                            | `<unknown>` |
| <0.1% |       3 | `#defaultminimum##0`                                                                                                                                                                    | `<unknown>` |
| <0.1% |       2 | `(::JSON3.var\"#defaultminimum##0#defaultminimum##1\"{JSON3.Array{Int64, Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}}})(::Int64)` | `<unknown>` |

#### Lines

Lines ranked by contribution to each function's self samples.

##### `#write#78` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:159`)

|     % | Samples | Location                                                                                             |
| ----: | ------: | ---------------------------------------------------------------------------------------------------- |
| 71.2% |   6,974 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157` |
| 13.9% |   1,366 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:60`  |
|  6.7% |     655 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:73`  |
|  3.2% |     311 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:72`  |
|  3.0% |     297 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:155` |

##### `_symbol` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`)

|      % | Samples | Location                                                                                           |
| -----: | ------: | -------------------------------------------------------------------------------------------------- |
| 100.0% |   7,064 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:1` |

##### `GenericMemory` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:588`)

|      % | Samples | Location                                                                                    |
| -----: | ------: | ------------------------------------------------------------------------------------------- |
| 100.0% |   2,225 | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:588` |

##### `indexed_iterate` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/tuple.jl:162`)

|      % | Samples | Location                                                                                     |
| -----: | ------: | -------------------------------------------------------------------------------------------- |
| 100.0% |   1,393 | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/tuple.jl:162` |

##### `eval(::Module, ::Any)` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:489`)

|      % | Samples | Location                                                                                    |
| -----: | ------: | ------------------------------------------------------------------------------------------- |
| 100.0% |     828 | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:489` |

##### `ht_keyindex2_shorthash!(::Dict{Symbol, Int64}, ::Symbol)` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/dict.jl:265`)

|     % | Samples | Location                                                                                    |
| ----: | ------: | ------------------------------------------------------------------------------------------- |
| 56.7% |     270 | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/dict.jl:289` |
| 16.4% |      78 | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/dict.jl:280` |
|  4.4% |      21 | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/dict.jl:279` |
|  3.2% |      15 | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/dict.jl:265` |
|  2.3% |      11 | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/dict.jl:301` |

##### `unsafe_load` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/pointer.jl:151`)

|      % | Samples | Location                                                                                       |
| -----: | ------: | ---------------------------------------------------------------------------------------------- |
| 100.0% |     431 | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/pointer.jl:151` |

##### `+` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/int.jl:87`)

|      % | Samples | Location                                                                                  |
| -----: | ------: | ----------------------------------------------------------------------------------------- |
| 100.0% |     343 | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/int.jl:87` |

##### `_setindex!` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/array.jl:991`)

|      % | Samples | Location                                                                                     |
| -----: | ------: | -------------------------------------------------------------------------------------------- |
| 100.0% |     304 | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/array.jl:991` |

##### `parse_workload` (`profile.jl:13`)

|      % | Samples | Location        |
| -----: | ------: | --------------- |
| 100.0% |     273 | `profile.jl:13` |

##### `_foldl_impl` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:55`)

|     % | Samples | Location                                                                                     |
| ----: | ------: | -------------------------------------------------------------------------------------------- |
| 94.0% |     234 | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:54` |
|  1.6% |       4 | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:45` |

##### `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:218`)

|     % | Samples | Location                                                                                            |
| ----: | ------: | --------------------------------------------------------------------------------------------------- |
| 84.8% |     195 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:248` |
|  3.0% |       7 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:247` |
|  2.6% |       6 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:284` |
|  2.2% |       5 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:225` |
|  2.2% |       5 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:278` |

##### `BottomRF` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:78`)

|      % | Samples | Location                                                                                     |
| -----: | ------: | -------------------------------------------------------------------------------------------- |
| 100.0% |     228 | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:78` |

##### `getindex` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/essentials.jl:920`)

|      % | Samples | Location                                                                                          |
| -----: | ------: | ------------------------------------------------------------------------------------------------- |
| 100.0% |     201 | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/essentials.jl:920` |

##### `unsafe_string` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:103`)

|      % | Samples | Location                                                                                              |
| -----: | ------: | ----------------------------------------------------------------------------------------------------- |
| 100.0% |     187 | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:103` |

##### `iterate` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:75`)

|      % | Samples | Location                                                                                            |
| -----: | ------: | --------------------------------------------------------------------------------------------------- |
| 100.0% |     171 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:75` |

##### `checkbounds` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/basic.jl:217`)

|      % | Samples | Location                                                                                             |
| -----: | ------: | ---------------------------------------------------------------------------------------------------- |
| 100.0% |     158 | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/basic.jl:217` |

##### `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{String})` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:142`)

|     % | Samples | Location                                                                                            |
| ----: | ------: | --------------------------------------------------------------------------------------------------- |
| 51.4% |      73 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:155` |
|  4.2% |       6 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:142` |
|  2.1% |       3 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:149` |
|  2.1% |       3 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:150` |
|  2.1% |       3 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:167` |

##### `==` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/promotion.jl:637`)

|      % | Samples | Location                                                                                         |
| -----: | ------: | ------------------------------------------------------------------------------------------------ |
| 100.0% |     108 | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/promotion.jl:637` |

##### `getproperty` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/Base_compiler.jl:54`)

|      % | Samples | Location                                                                                            |
| -----: | ------: | --------------------------------------------------------------------------------------------------- |
| 100.0% |     101 | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/Base_compiler.jl:54` |

##### `getvalue` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:213`)

|      % | Samples | Location                                                                                             |
| -----: | ------: | ---------------------------------------------------------------------------------------------------- |
| 100.0% |      96 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:213` |

##### `#write#80` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:200`)

|     % | Samples | Location                                                                                             |
| ----: | ------: | ---------------------------------------------------------------------------------------------------- |
| 48.9% |      46 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:200` |
| 30.9% |      29 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:60`  |
| 12.8% |      12 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:73`  |
|  6.4% |       6 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:72`  |

##### `unsafe_string` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:99`)

|      % | Samples | Location                                                                                             |
| -----: | ------: | ---------------------------------------------------------------------------------------------------- |
| 100.0% |      92 | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:99` |

##### `checkbounds` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/basic.jl:209`)

|      % | Samples | Location                                                                                             |
| -----: | ------: | ---------------------------------------------------------------------------------------------------- |
| 100.0% |      91 | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/basic.jl:209` |

##### `var\"#write#97\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:340`)

|     % | Samples | Location                                                                                             |
| ----: | ------: | ---------------------------------------------------------------------------------------------------- |
| 39.3% |      35 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:360` |
| 22.5% |      20 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:340` |
| 13.5% |      12 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:60`  |
|  5.6% |       5 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:351` |
|  4.5% |       4 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:346` |

##### `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:87`)

|     % | Samples | Location                                                                                           |
| ----: | ------: | -------------------------------------------------------------------------------------------------- |
| 40.3% |      31 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:88` |
| 19.5% |      15 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:87` |
|  5.2% |       4 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:93` |
|  3.9% |       3 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:99` |
|  3.9% |       3 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:91` |

##### `&` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/int.jl:353`)

|      % | Samples | Location                                                                                   |
| -----: | ------: | ------------------------------------------------------------------------------------------ |
| 100.0% |      72 | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/int.jl:353` |

##### `setindex!(::Dict{Symbol, Int64}, ::Int64, ::Symbol)` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/dict.jl:354`)

|     % | Samples | Location                                                                                    |
| ----: | ------: | ------------------------------------------------------------------------------------------- |
| 83.3% |      55 | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/dict.jl:366` |
| 13.6% |       9 | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/dict.jl:354` |
|  3.0% |       2 | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/dict.jl:356` |

##### `#write#80` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:187`)

|     % | Samples | Location                                                                                             |
| ----: | ------: | ---------------------------------------------------------------------------------------------------- |
| 36.1% |      22 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:60`  |
| 21.3% |      13 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:73`  |
| 14.8% |       9 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:187` |
| 11.5% |       7 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:200` |
|  4.9% |       3 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:72`  |

##### `getindex` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/essentials.jl:386`)

|      % | Samples | Location                                                                                          |
| -----: | ------: | ------------------------------------------------------------------------------------------------- |
| 100.0% |      50 | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/essentials.jl:386` |

##### `var\"#write#85\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.NumberType, ::Vector{UInt8}, ::Int64, ::Int64, ::Int64)` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:224`)

|     % | Samples | Location                                                                                             |
| ----: | ------: | ---------------------------------------------------------------------------------------------------- |
| 85.3% |      29 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:236` |
| 14.7% |       5 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:224` |

##### `macro expansion` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:23`)

|      % | Samples | Location                                                                                            |
| -----: | ------: | --------------------------------------------------------------------------------------------------- |
| 100.0% |      32 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:23` |

##### `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40`)

|     % | Samples | Location                                                                                            |
| ----: | ------: | --------------------------------------------------------------------------------------------------- |
| 26.7% |       8 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:47` |
| 20.0% |       6 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40` |
| 13.3% |       4 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:55` |
|  6.7% |       2 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:51` |

##### `macro expansion` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:14`)

|      % | Samples | Location                                                                                            |
| -----: | ------: | --------------------------------------------------------------------------------------------------- |
| 100.0% |      24 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:14` |

##### `unescape(::JSON3.PointerString)` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/strings.jl:48`)

|     % | Samples | Location                                                                                               |
| ----: | ------: | ------------------------------------------------------------------------------------------------------ |
| 21.7% |       5 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/strings.jl:116` |
| 13.0% |       3 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/strings.jl:54`  |
|  8.7% |       2 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/strings.jl:56`  |
|  4.3% |       1 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/strings.jl:117` |
|  4.3% |       1 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/strings.jl:48`  |

##### `var\"#write#83\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.BoolType, ::Vector{UInt8}, ::Int64, ::Int64, ::Bool)` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:209`)

|     % | Samples | Location                                                                                             |
| ----: | ------: | ---------------------------------------------------------------------------------------------------- |
| 57.9% |      11 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:215` |
| 42.1% |       8 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:209` |

##### `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:87`)

|      % | Samples | Location                                                                                           |
| -----: | ------: | -------------------------------------------------------------------------------------------------- |
| 100.0% |      14 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:87` |

##### `getvalue(::Type{JSON3.Array}, ::Base.CodeUnits{UInt8, String}, ::SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}, ::Int64, ::UInt64)` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:131`)

|     % | Samples | Location                                                                                             |
| ----: | ------: | ---------------------------------------------------------------------------------------------------- |
| 33.3% |       4 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:138` |
| 33.3% |       4 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:131` |

#### Callers

Callers ranked by contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `#write#78` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:159`)

|     % | Samples | Caller      | Location                                                                                             |
| ----: | ------: | ----------- | ---------------------------------------------------------------------------------------------------- |
| 75.6% |   7,410 | `#write#78` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:159` |
| 24.1% |   2,363 | `#write#80` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:187` |
|  0.1% |       8 | `#write#78` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157` |

##### `_symbol` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`)

|      % | Samples | Caller     | Location                                                                                             |
| -----: | ------: | ---------- | ---------------------------------------------------------------------------------------------------- |
| 100.0% |   7,064 | `getvalue` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:187` |

##### `GenericMemory` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:588`)

|     % | Samples | Caller                                    | Location                                                                                      |
| ----: | ------: | ----------------------------------------- | --------------------------------------------------------------------------------------------- |
| 81.5% |   1,814 | `Array`                                   | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:647`   |
| 18.4% |     409 | `rehash!(::Dict{Symbol, Int64}, ::Int64)` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/dict.jl:137`   |
|  0.1% |       2 | `array_new_memory`                        | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/array.jl:1067` |

##### `indexed_iterate` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/tuple.jl:162`)

|     % | Samples | Caller            | Location                                                                                             |
| ----: | ------: | ----------------- | ---------------------------------------------------------------------------------------------------- |
| 94.6% |   1,318 | `#write#78`       | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:159` |
|  5.3% |      74 | `indexed_iterate` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/tuple.jl:162`         |
|  0.1% |       1 | `#write#80`       | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:187` |

##### `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` (`<unknown>`)

|     % | Samples | Caller        | Location                                                                                     |
| ----: | ------: | ------------- | -------------------------------------------------------------------------------------------- |
| 87.8% |     758 | `_foldl_impl` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:55` |
| 12.2% |     105 | `MappingRF`   | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:92` |

##### `eval(::Module, ::Any)` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:489`)

|      % | Samples | Caller                                                             | Location                                                                                        |
| -----: | ------: | ------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------- |
| 100.0% |     828 | `include_string(::typeof(identity), ::Module, ::String, ::String)` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/loading.jl:2856` |

##### `ht_keyindex2_shorthash!(::Dict{Symbol, Int64}, ::Symbol)` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/dict.jl:265`)

|     % | Samples | Caller                                                | Location                                                                                    |
| ----: | ------: | ----------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| 99.6% |     474 | `setindex!(::Dict{Symbol, Int64}, ::Int64, ::Symbol)` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/dict.jl:354` |

##### `unsafe_load` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/pointer.jl:151`)

|      % | Samples | Caller        | Location                                                                                       |
| -----: | ------: | ------------- | ---------------------------------------------------------------------------------------------- |
| 100.0% |     431 | `unsafe_load` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/pointer.jl:151` |

##### `+` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/int.jl:87`)

|     % | Samples | Caller                                                                                                                                                                                                                           | Location                                                                                              |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| 26.5% |      91 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:218`   |
| 23.6% |      81 | `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})`                                                                                               | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40`   |
| 17.5% |      60 | `macro expansion`                                                                                                                                                                                                                | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:24`   |
|  6.7% |      23 | `length_continued`                                                                                                                                                                                                               | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:541` |
|  4.7% |      16 | `var\"#write#97\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)`                                                          | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:340`  |

##### `_setindex!` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/array.jl:991`)

|     % | Samples | Caller      | Location                                                                                             |
| ----: | ------: | ----------- | ---------------------------------------------------------------------------------------------------- |
| 99.3% |     302 | `setindex!` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/array.jl:986`         |
|  0.7% |       2 | `#write#78` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:159` |

##### `parse_workload` (`profile.jl:13`)

|      % | Samples | Caller            | Location                                                                                                          |
| -----: | ------: | ----------------- | ----------------------------------------------------------------------------------------------------------------- |
| 100.0% |     273 | `macro expansion` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/stdlib/v1.12/Profile/src/Profile.jl:82` |

##### `_foldl_impl` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:55`)

|      % | Samples | Caller       | Location                                                                                     |
| -----: | ------: | ------------ | -------------------------------------------------------------------------------------------- |
| 100.0% |     249 | `foldl_impl` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:40` |

##### `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:218`)

|      % | Samples | Caller                                                                                                                                                                               | Location                                                                                            |
| -----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------- |
| 100.0% |     230 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:218` |

##### `BottomRF` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:78`)

|      % | Samples | Caller        | Location                                                                                     |
| -----: | ------: | ------------- | -------------------------------------------------------------------------------------------- |
| 100.0% |     228 | `_foldl_impl` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:55` |

##### `getindex` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/essentials.jl:920`)

|     % | Samples | Caller                                                                                                                                                                                                                           | Location                                                                                             |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| 62.2% |     125 | `macro expansion`                                                                                                                                                                                                                | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:332` |
| 20.4% |      41 | `getindex`                                                                                                                                                                                                                       | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/subarray.jl:339`      |
| 12.4% |      25 | `var\"#write#97\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)`                                                          | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:340` |
|  4.0% |       8 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:218`  |
|  0.5% |       1 | `getindex`                                                                                                                                                                                                                       | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:161` |

##### `unsafe_string` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:103`)

|      % | Samples | Caller   | Location                                                                                              |
| -----: | ------: | -------- | ----------------------------------------------------------------------------------------------------- |
| 100.0% |     187 | `String` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:118` |

##### `iterate` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:75`)

|     % | Samples | Caller                                                                                                                       | Location                                                                                             |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| 74.9% |     128 | `iterate`                                                                                                                    | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:75`  |
| 18.7% |      32 | `#write#78`                                                                                                                  | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:159` |
|  5.3% |       9 | `iterate`                                                                                                                    | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/iterators.jl:682`     |
|  1.2% |       2 | `isempty(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/essentials.jl:1072`   |

##### `checkbounds` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/basic.jl:217`)

|      % | Samples | Caller     | Location                                                                                              |
| -----: | ------: | ---------- | ----------------------------------------------------------------------------------------------------- |
| 100.0% |     158 | `codeunit` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:139` |

##### `length_continued` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl`)

|      % | Samples | Caller           | Location        |
| -----: | ------: | ---------------- | --------------- |
| 100.0% |     145 | `parse_workload` | `profile.jl:13` |

##### `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{String})` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:142`)

|      % | Samples | Caller                                                                                                                                                       | Location                                                                                           |
| -----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------- |
| 100.0% |     142 | `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:87` |

##### `==` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/promotion.jl:637`)

|     % | Samples | Caller                                                                                                                                                                                                                          | Location                                                                                            |
| ----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| 48.1% |      52 | `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{String})`                                                                                                                  | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:142` |
| 19.4% |      21 | `!=`                                                                                                                                                                                                                            | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/operators.jl:321`    |
| 16.7% |      18 | `ht_keyindex2_shorthash!(::Dict{Symbol, Int64}, ::Symbol)`                                                                                                                                                                      | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/dict.jl:265`         |
| 10.2% |      11 | `isarray`                                                                                                                                                                                                                       | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:61` |
|  1.9% |       2 | `var\"#read!#9\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Array}, ::Bool)` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:312` |

##### `getproperty` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/Base_compiler.jl:54`)

|     % | Samples | Caller                                                     | Location                                                                                    |
| ----: | ------: | ---------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| 43.6% |      44 | `_setindex!`                                               | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/dict.jl:329` |
| 12.9% |      13 | `_setindex!`                                               | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/dict.jl:325` |
| 10.9% |      11 | `_setindex!`                                               | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/dict.jl:327` |
|  9.9% |      10 | `ht_keyindex2_shorthash!(::Dict{Symbol, Int64}, ::Symbol)` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/dict.jl:265` |
|  8.9% |       9 | `_setindex!`                                               | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/dict.jl:326` |

##### `getvalue` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:213`)

|      % | Samples | Caller    | Location                                                                                            |
| -----: | ------: | --------- | --------------------------------------------------------------------------------------------------- |
| 100.0% |      96 | `iterate` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:81` |

##### `#write#80` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:200`)

|      % | Samples | Caller      | Location                                                                                             |
| -----: | ------: | ----------- | ---------------------------------------------------------------------------------------------------- |
| 100.0% |      94 | `#write#78` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:159` |

##### `unsafe_string` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:99`)

|      % | Samples | Caller     | Location                                                                                             |
| -----: | ------: | ---------- | ---------------------------------------------------------------------------------------------------- |
| 100.0% |      92 | `getvalue` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:195` |

##### `checkbounds` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/basic.jl:209`)

|      % | Samples | Caller        | Location                                                                                             |
| -----: | ------: | ------------- | ---------------------------------------------------------------------------------------------------- |
| 100.0% |      91 | `checkbounds` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/basic.jl:217` |

##### `var\"#write#97\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:340`)

|     % | Samples | Caller      | Location                                                                                             |
| ----: | ------: | ----------- | ---------------------------------------------------------------------------------------------------- |
| 92.1% |      82 | `#write#78` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:159` |

##### `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:87`)

|     % | Samples | Caller                                                                                                                                                                      | Location                                                                                           |
| ----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| 80.5% |      62 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:87` |

##### `&` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/int.jl:353`)

|     % | Samples | Caller                                                     | Location                                                                                             |
| ----: | ------: | ---------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| 70.8% |      51 | `getnontypemask`                                           | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:114` |
| 20.8% |      15 | `ht_keyindex2_shorthash!(::Dict{Symbol, Int64}, ::Symbol)` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/dict.jl:265`          |
|  6.9% |       5 | `isobject`                                                 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:60`  |
|  1.4% |       1 | `isany`                                                    | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:59`  |

##### `setindex!(::Dict{Symbol, Int64}, ::Int64, ::Symbol)` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/dict.jl:354`)

|      % | Samples | Caller                                                                                                                             | Location                                                                                            |
| -----: | ------: | ---------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| 100.0% |      66 | `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40` |

##### `#write#80` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:187`)

|     % | Samples | Caller      | Location                                                                                             |
| ----: | ------: | ----------- | ---------------------------------------------------------------------------------------------------- |
| 75.4% |      46 | `#write#78` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:159` |
| 24.6% |      15 | `#write#78` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157` |

##### `getindex` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/essentials.jl:386`)

|     % | Samples | Caller                                    | Location                                                                                    |
| ----: | ------: | ----------------------------------------- | ------------------------------------------------------------------------------------------- |
| 56.0% |      28 | `isslotempty`                             | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/dict.jl:133` |
| 40.0% |      20 | `rehash!(::Dict{Symbol, Int64}, ::Int64)` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/dict.jl:137` |
|  2.0% |       1 | `isslotmissing`                           | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/dict.jl:135` |
|  2.0% |       1 | `isslotfilled`                            | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/dict.jl:134` |

##### `var\"#write#85\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.NumberType, ::Vector{UInt8}, ::Int64, ::Int64, ::Int64)` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:224`)

|     % | Samples | Caller      | Location                                                                                             |
| ----: | ------: | ----------- | ---------------------------------------------------------------------------------------------------- |
| 97.1% |      33 | `#write#78` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:159` |

##### `macro expansion` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:23`)

|     % | Samples | Caller                                                                                                                                                                                                                           | Location                                                                                            |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| 96.9% |      31 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:218` |
|  3.1% |       1 | `var\"#read!#9\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Array}, ::Bool)`  | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:312` |

##### `iterate` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl`)

|     % | Samples | Caller      | Location                                                                                             |
| ----: | ------: | ----------- | ---------------------------------------------------------------------------------------------------- |
| 45.2% |      14 | `iterate`   | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:75`  |
| 41.9% |      13 | `#write#78` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:159` |
| 12.9% |       4 | `iterate`   | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/iterators.jl:682`     |

##### `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40`)

|     % | Samples | Caller     | Location                                                                                             |
| ----: | ------: | ---------- | ---------------------------------------------------------------------------------------------------- |
| 96.7% |      29 | `getvalue` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:127` |

##### `getvalue` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl`)

|     % | Samples | Caller    | Location                                                                                            |
| ----: | ------: | --------- | --------------------------------------------------------------------------------------------------- |
| 60.0% |      15 | `iterate` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:78` |
| 40.0% |      10 | `iterate` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:81` |

##### `macro expansion` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:14`)

|     % | Samples | Caller                                                                                                                                                                                                                           | Location                                                                                            |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| 91.7% |      22 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:218` |
|  8.3% |       2 | `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{String})`                                                                                                                   | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:142` |

##### `unescape(::JSON3.PointerString)` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/strings.jl:48`)

|     % | Samples | Caller     | Location                                                                                             |
| ----: | ------: | ---------- | ---------------------------------------------------------------------------------------------------- |
| 95.7% |      22 | `getvalue` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:193` |

##### `var\"#write#83\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.BoolType, ::Vector{UInt8}, ::Int64, ::Int64, ::Bool)` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:209`)

|      % | Samples | Caller      | Location                                                                                             |
| -----: | ------: | ----------- | ---------------------------------------------------------------------------------------------------- |
| 100.0% |      19 | `#write#78` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:159` |

##### `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:87`)

|     % | Samples | Caller                                                                                                                                                                                                                           | Location                                                                                            |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| 92.9% |      13 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:218` |
|  7.1% |       1 | `var\"#read!#9\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Array}, ::Bool)`  | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:312` |

##### `getvalue(::Type{JSON3.Array}, ::Base.CodeUnits{UInt8, String}, ::SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}, ::Int64, ::UInt64)` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:131`)

|      % | Samples | Caller     | Location                                                                                             |
| -----: | ------: | ---------- | ---------------------------------------------------------------------------------------------------- |
| 100.0% |      12 | `getvalue` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:216` |

##### `#defaultminimum##0` (`<unknown>`)

|      % | Samples | Caller        | Location                                                                                     |
| -----: | ------: | ------------- | -------------------------------------------------------------------------------------------- |
| 100.0% |       3 | `_foldl_impl` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:54` |

##### `(::JSON3.var\"#defaultminimum##0#defaultminimum##1\"{JSON3.Array{Int64, Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}}})(::Int64)` (`<unknown>`)

|      % | Samples | Caller      | Location                                                                                     |
| -----: | ------: | ----------- | -------------------------------------------------------------------------------------------- |
| 100.0% |       2 | `MappingRF` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:92` |

### Total samples

Functions ranked by total samples taken in the function and all its callees.

|     % | Samples | Function                                                           | Location                                                                                                          |
| ----: | ------: | ------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| 99.8% |  27,693 | `eval(::Module, ::Any)`                                            | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:489`                       |
| 99.8% |  27,693 | `include_string(::typeof(identity), ::Module, ::String, ::String)` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/loading.jl:2856`                   |
| 99.8% |  27,693 | `_include(::Function, ::Module, ::String)`                         | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/loading.jl:2924`                   |
| 99.8% |  27,693 | `include(::Module, ::String)`                                      | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/Base.jl:306`                       |
| 99.8% |  27,693 | `exec_options(::Base.JLOptions)`                                   | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/client.jl:227`                     |
| 96.8% |  26,865 | `parse_workload`                                                   | `profile.jl:13`                                                                                                   |
| 96.8% |  26,865 | `macro expansion`                                                  | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/stdlib/v1.12/Profile/src/Profile.jl:82` |
| 96.8% |  26,865 | `capture_wall`                                                     | `profile.jl:38`                                                                                                   |
| 88.3% |  24,501 | `#write#57`                                                        | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:40`               |
| 68.1% |  18,896 | `#write#78`                                                        | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`              |
| 68.1% |  18,896 | `write`                                                            | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:147`              |
| 68.0% |  18,868 | `#write#80`                                                        | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:187`              |
| 65.6% |  18,218 | `#write#78`                                                        | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:159`              |
| 25.5% |   7,064 | `_symbol`                                                          | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`                |
| 25.5% |   7,064 | `getvalue`                                                         | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:187`              |
| 20.2% |   5,598 | `defaultminimum`                                                   | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:12`               |
| 20.2% |   5,593 | `foldl_impl`                                                       | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:40`                      |
| 20.2% |   5,593 | `mapfoldl_impl`                                                    | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:36`                      |
| 20.2% |   5,593 | `#mapfoldl#270`                                                    | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:167`                     |
| 20.2% |   5,593 | `mapfoldl`                                                         | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:167`                     |

#### Categories

##### Third-party

|     % | Samples | Function                                                                                                                                                                    | Location                                                                                             |
| ----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| 88.3% |  24,501 | `#write#57`                                                                                                                                                                 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:40`  |
| 68.1% |  18,896 | `#write#78`                                                                                                                                                                 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157` |
| 68.1% |  18,896 | `write`                                                                                                                                                                     | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:147` |
| 68.0% |  18,868 | `#write#80`                                                                                                                                                                 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:187` |
| 65.6% |  18,218 | `#write#78`                                                                                                                                                                 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:159` |
| 25.5% |   7,064 | `_symbol`                                                                                                                                                                   | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`   |
| 25.5% |   7,064 | `getvalue`                                                                                                                                                                  | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:187` |
| 20.2% |   5,598 | `defaultminimum`                                                                                                                                                            | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:12`  |
| 18.6% |   5,164 | `getvalue`                                                                                                                                                                  | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:127` |
| 18.6% |   5,163 | `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})`                                          | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40`  |
| 14.0% |   3,878 | `iterate`                                                                                                                                                                   | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:81`  |
| 12.4% |   3,441 | `getvalue`                                                                                                                                                                  | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:214` |
| 12.3% |   3,407 | `iterate`                                                                                                                                                                   | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:78`  |
|  7.7% |   2,146 | `var\"#write#97\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)`     | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:340` |
|  6.3% |   1,758 | `getindex`                                                                                                                                                                  | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:163` |
|  5.6% |   1,567 | `var\"#read#6\"(::Bool, ::Nothing, ::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.read), ::String)`                                                  | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:30`   |
|  5.6% |   1,566 | `read`                                                                                                                                                                      | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:30`   |
|  5.6% |   1,558 | `realloc!(::Vector{UInt8}, ::Int64, ::Int64)`                                                                                                                               | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:51`  |
|  4.8% |   1,327 | `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)`                | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:87`   |
|  4.7% |   1,307 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:87`   |

##### Standard library

|     % | Samples | Function                                                           | Location                                                                                                          |
| ----: | ------: | ------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| 99.8% |  27,693 | `eval(::Module, ::Any)`                                            | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:489`                       |
| 99.8% |  27,693 | `include_string(::typeof(identity), ::Module, ::String, ::String)` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/loading.jl:2856`                   |
| 99.8% |  27,693 | `_include(::Function, ::Module, ::String)`                         | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/loading.jl:2924`                   |
| 99.8% |  27,693 | `include(::Module, ::String)`                                      | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/Base.jl:306`                       |
| 99.8% |  27,693 | `exec_options(::Base.JLOptions)`                                   | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/client.jl:227`                     |
| 96.8% |  26,865 | `macro expansion`                                                  | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/stdlib/v1.12/Profile/src/Profile.jl:82` |
| 20.2% |   5,593 | `foldl_impl`                                                       | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:40`                      |
| 20.2% |   5,593 | `mapfoldl_impl`                                                    | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:36`                      |
| 20.2% |   5,593 | `#mapfoldl#270`                                                    | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:167`                     |
| 20.2% |   5,593 | `mapfoldl`                                                         | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:167`                     |
| 20.2% |   5,593 | `#mapreduce#274`                                                   | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:299`                     |
| 20.2% |   5,593 | `mapreduce`                                                        | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:299`                     |
| 20.2% |   5,593 | `#sum#277`                                                         | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:524`                     |
| 20.2% |   5,593 | `sum`                                                              | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:524`                     |
| 20.2% |   5,593 | `#sum#278`                                                         | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:553`                     |
| 20.2% |   5,593 | `sum`                                                              | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:553`                     |
| 20.2% |   5,593 | `_foldl_impl`                                                      | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:50`                      |
| 20.1% |   5,583 | `MappingRF`                                                        | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:92`                      |
| 20.1% |   5,579 | `_foldl_impl`                                                      | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:54`                      |
| 17.4% |   4,825 | `_foldl_impl`                                                      | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:55`                      |

##### Native

|     % | Samples | Function                                                                                                                                                                                | Location    |
| ----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 20.1% |   5,587 | `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})`                                                                                                            | `<unknown>` |
| 20.1% |   5,572 | `#defaultminimum##0`                                                                                                                                                                    | `<unknown>` |
| <0.1% |       7 | `(::JSON3.var\"#defaultminimum##0#defaultminimum##1\"{JSON3.Array{Int64, Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}}})(::Int64)` | `<unknown>` |

#### Callees

Callees ranked by contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `eval(::Module, ::Any)` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:489`)

|     % | Samples | Callee         | Location        |
| ----: | ------: | -------------- | --------------- |
| 97.0% |  26,865 | `capture_wall` | `profile.jl:38` |

##### `include_string(::typeof(identity), ::Module, ::String, ::String)` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/loading.jl:2856`)

|      % | Samples | Callee                  | Location                                                                                    |
| -----: | ------: | ----------------------- | ------------------------------------------------------------------------------------------- |
| 100.0% |  27,693 | `eval(::Module, ::Any)` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:489` |

##### `_include(::Function, ::Module, ::String)` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/loading.jl:2924`)

|      % | Samples | Callee                                                             | Location                                                                                        |
| -----: | ------: | ------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------- |
| 100.0% |  27,693 | `include_string(::typeof(identity), ::Module, ::String, ::String)` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/loading.jl:2856` |

##### `include(::Module, ::String)` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/Base.jl:306`)

|      % | Samples | Callee                                     | Location                                                                                        |
| -----: | ------: | ------------------------------------------ | ----------------------------------------------------------------------------------------------- |
| 100.0% |  27,693 | `_include(::Function, ::Module, ::String)` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/loading.jl:2924` |

##### `exec_options(::Base.JLOptions)` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/client.jl:227`)

|      % | Samples | Callee                        | Location                                                                                    |
| -----: | ------: | ----------------------------- | ------------------------------------------------------------------------------------------- |
| 100.0% |  27,693 | `include(::Module, ::String)` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/Base.jl:306` |

##### `parse_workload` (`profile.jl:13`)

|     % | Samples | Callee             | Location                                                                                              |
| ----: | ------: | ------------------ | ----------------------------------------------------------------------------------------------------- |
| 91.2% |  24,501 | `#write#57`        | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:40`   |
|  5.8% |   1,566 | `read`             | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:30`    |
|  1.0% |     256 | `length_continued` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:534` |
|  0.5% |     145 | `length_continued` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl`     |
|  0.1% |      30 | `length_continued` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/strings/string.jl:533` |

##### `macro expansion` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/stdlib/v1.12/Profile/src/Profile.jl:82`)

|      % | Samples | Callee           | Location        |
| -----: | ------: | ---------------- | --------------- |
| 100.0% |  26,865 | `parse_workload` | `profile.jl:13` |

##### `capture_wall` (`profile.jl:38`)

|      % | Samples | Callee            | Location                                                                                                          |
| -----: | ------: | ----------------- | ----------------------------------------------------------------------------------------------------------------- |
| 100.0% |  26,865 | `macro expansion` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/stdlib/v1.12/Profile/src/Profile.jl:82` |

##### `#write#57` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:40`)

|     % | Samples | Callee           | Location                                                                                             |
| ----: | ------: | ---------------- | ---------------------------------------------------------------------------------------------------- |
| 77.1% |  18,896 | `write`          | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:147` |
| 22.8% |   5,598 | `defaultminimum` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:12`  |

##### `#write#78` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`)

|     % | Samples | Callee      | Location                                                                                             |
| ----: | ------: | ----------- | ---------------------------------------------------------------------------------------------------- |
| 99.9% |  18,868 | `#write#80` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:187` |
|  0.1% |      11 | `#write#78` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:159` |
| <0.1% |       7 | `iterate`   | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:81`  |
| <0.1% |       3 | `iterate`   | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:75`  |
| <0.1% |       2 | `iterate`   | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:78`  |

##### `write` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:147`)

|      % | Samples | Callee      | Location                                                                                             |
| -----: | ------: | ----------- | ---------------------------------------------------------------------------------------------------- |
| 100.0% |  18,896 | `#write#78` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157` |

##### `#write#80` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:187`)

|     % | Samples | Callee            | Location                                                                                                 |
| ----: | ------: | ----------------- | -------------------------------------------------------------------------------------------------------- |
| 96.4% |  18,190 | `#write#78`       | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:159`     |
|  2.8% |     535 | `isassigned`      | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/multidimensional.jl:1653` |
|  1.8% |     346 | `getindex`        | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:163`     |
| <0.1% |       3 | `indexed_iterate` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/tuple.jl:162`             |
| <0.1% |       1 | `eachindex`       | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/abstractarray.jl:321`     |

##### `#write#78` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:159`)

|     % | Samples | Callee                                                                                                                                                                  | Location                                                                                             |
| ----: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| 78.5% |  14,299 | `#write#78`                                                                                                                                                             | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:159` |
| 11.7% |   2,138 | `var\"#write#97\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:340` |
| 10.3% |   1,877 | `iterate`                                                                                                                                                               | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:81`  |
| 10.2% |   1,856 | `iterate`                                                                                                                                                               | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:78`  |
|  7.6% |   1,390 | `indexed_iterate`                                                                                                                                                       | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/tuple.jl:162`         |

##### `getvalue` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:187`)

|      % | Samples | Callee    | Location                                                                                           |
| -----: | ------: | --------- | -------------------------------------------------------------------------------------------------- |
| 100.0% |   7,064 | `_symbol` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:1` |

##### `defaultminimum` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:12`)

|     % | Samples | Callee                                                                                                                       | Location                                                                                           |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| 99.9% |   5,593 | `sum`                                                                                                                        | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:553`      |
|  1.0% |      56 | `isempty(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/essentials.jl:1072` |
|  0.1% |       5 | `isempty(::JSON3.Object{Base.CodeUnits{UInt8, String}, Vector{UInt64}})`                                                     | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/essentials.jl:1072` |

##### `foldl_impl` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:40`)

|      % | Samples | Callee        | Location                                                                                     |
| -----: | ------: | ------------- | -------------------------------------------------------------------------------------------- |
| 100.0% |   5,593 | `_foldl_impl` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:50` |
|  99.7% |   5,579 | `_foldl_impl` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:54` |
|  86.3% |   4,825 | `_foldl_impl` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:55` |

##### `mapfoldl_impl` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:36`)

|      % | Samples | Callee       | Location                                                                                     |
| -----: | ------: | ------------ | -------------------------------------------------------------------------------------------- |
| 100.0% |   5,593 | `foldl_impl` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:40` |
|   0.1% |       3 | `foldl_impl` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:41` |

##### `#mapfoldl#270` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:167`)

|      % | Samples | Callee          | Location                                                                                     |
| -----: | ------: | --------------- | -------------------------------------------------------------------------------------------- |
| 100.0% |   5,593 | `mapfoldl_impl` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:36` |

##### `mapfoldl` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:167`)

|      % | Samples | Callee          | Location                                                                                      |
| -----: | ------: | --------------- | --------------------------------------------------------------------------------------------- |
| 100.0% |   5,593 | `#mapfoldl#270` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:167` |

##### `#mapreduce#274` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:299`)

|      % | Samples | Callee     | Location                                                                                      |
| -----: | ------: | ---------- | --------------------------------------------------------------------------------------------- |
| 100.0% |   5,593 | `mapfoldl` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:167` |

##### `mapreduce` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:299`)

|      % | Samples | Callee           | Location                                                                                      |
| -----: | ------: | ---------------- | --------------------------------------------------------------------------------------------- |
| 100.0% |   5,593 | `#mapreduce#274` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:299` |

##### `#sum#277` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:524`)

|      % | Samples | Callee      | Location                                                                                      |
| -----: | ------: | ----------- | --------------------------------------------------------------------------------------------- |
| 100.0% |   5,593 | `mapreduce` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:299` |

##### `sum` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:524`)

|      % | Samples | Callee     | Location                                                                                      |
| -----: | ------: | ---------- | --------------------------------------------------------------------------------------------- |
| 100.0% |   5,593 | `#sum#277` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:524` |

##### `#sum#278` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:553`)

|      % | Samples | Callee | Location                                                                                      |
| -----: | ------: | ------ | --------------------------------------------------------------------------------------------- |
| 100.0% |   5,593 | `sum`  | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:524` |

##### `sum` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:553`)

|      % | Samples | Callee     | Location                                                                                      |
| -----: | ------: | ---------- | --------------------------------------------------------------------------------------------- |
| 100.0% |   5,593 | `#sum#278` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:553` |

##### `_foldl_impl` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:50`)

|     % | Samples | Callee                                                                       | Location                                                                                            |
| ----: | ------: | ---------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| 99.8% |   5,582 | `MappingRF`                                                                  | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:92`        |
|  0.1% |       5 | `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` | `<unknown>`                                                                                         |
|  0.1% |       5 | `iterate`                                                                    | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/iterators.jl:682`    |
| <0.1% |       1 | `iterate`                                                                    | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:75` |

##### `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` (`<unknown>`)

|     % | Samples | Callee                                                                                                                       | Location                                                                                           |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| 99.9% |   5,579 | `sum`                                                                                                                        | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:524`      |
| 58.0% |   3,239 | `sum`                                                                                                                        | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:553`      |
|  3.0% |     168 | `isempty(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/essentials.jl:1072` |
|  0.2% |       9 | `defaultminimum`                                                                                                             | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:6` |
| <0.1% |       2 | `indexed_iterate`                                                                                                            | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/pair.jl:42`         |

##### `MappingRF` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:92`)

|      % | Samples | Callee                                                                                                                                                                                  | Location                                                                                     |
| -----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| 100.0% |   5,583 | `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})`                                                                                                            | `<unknown>`                                                                                  |
|   0.4% |      20 | `BottomRF`                                                                                                                                                                              | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:77` |
|   0.1% |       7 | `(::JSON3.var\"#defaultminimum##0#defaultminimum##1\"{JSON3.Array{Int64, Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}}})(::Int64)` | `<unknown>`                                                                                  |

##### `_foldl_impl` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:54`)

|     % | Samples | Callee               | Location                                                                                     |
| ----: | ------: | -------------------- | -------------------------------------------------------------------------------------------- |
| 99.9% |   5,572 | `#defaultminimum##0` | `<unknown>`                                                                                  |
|  0.2% |      10 | `MappingRF`          | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:92` |

##### `#defaultminimum##0` (`<unknown>`)

|     % | Samples | Callee           | Location                                                                                                 |
| ----: | ------: | ---------------- | -------------------------------------------------------------------------------------------------------- |
| 87.2% |   4,860 | `defaultminimum` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:12`      |
|  8.2% |     459 | `isassigned`     | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/multidimensional.jl:1653` |
|  7.5% |     419 | `getindex`       | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:163`     |
|  0.1% |       3 | `isassigned`     | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/multidimensional.jl:1652` |

##### `getvalue` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:127`)

|      % | Samples | Callee                                                                                                                             | Location                                                                                            |
| -----: | ------: | ---------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| 100.0% |   5,162 | `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40` |

##### `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40`)

|     % | Samples | Callee                                                | Location                                                                                             |
| ----: | ------: | ----------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| 71.7% |   3,701 | `getvalue`                                            | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:187` |
| 25.4% |   1,310 | `setindex!(::Dict{Symbol, Int64}, ::Int64, ::Symbol)` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/dict.jl:354`          |
|  1.6% |      81 | `+`                                                   | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/int.jl:87`            |
|  0.5% |      28 | `getindex`                                            | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/subarray.jl:339`      |
|  0.1% |       6 | `<=`                                                  | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/int.jl:520`           |

##### `_foldl_impl` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:55`)

|     % | Samples | Callee                                                                       | Location                                                                                            |
| ----: | ------: | ---------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| 70.7% |   3,411 | `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` | `<unknown>`                                                                                         |
| 60.2% |   2,906 | `iterate`                                                                    | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/iterators.jl:682`    |
|  6.2% |     300 | `MappingRF`                                                                  | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:92`        |
|  4.7% |     228 | `BottomRF`                                                                   | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:78`        |
|  3.6% |     176 | `iterate`                                                                    | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:75` |

##### `iterate` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:81`)

|     % | Samples | Callee     | Location                                                                                             |
| ----: | ------: | ---------- | ---------------------------------------------------------------------------------------------------- |
| 88.7% |   3,441 | `getvalue` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:214` |
|  5.9% |     230 | `getvalue` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:218` |
|  2.6% |     101 | `getvalue` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:213` |
|  1.8% |      71 | `getvalue` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:216` |
|  0.3% |      12 | `getvalue` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:220` |

##### `getvalue` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:214`)

|     % | Samples | Callee     | Location                                                                                             |
| ----: | ------: | ---------- | ---------------------------------------------------------------------------------------------------- |
| 99.3% |   3,416 | `getvalue` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:127` |
|  0.7% |      25 | `getvalue` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:126` |

##### `iterate` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:78`)

|     % | Samples | Callee     | Location                                                                                             |
| ----: | ------: | ---------- | ---------------------------------------------------------------------------------------------------- |
| 98.6% |   3,360 | `getvalue` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:187` |
|  1.3% |      44 | `getvalue` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl`     |
|  0.1% |       3 | `getvalue` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:184` |

##### `var\"#write#97\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:340`)

|     % | Samples | Callee                                        | Location                                                                                             |
| ----: | ------: | --------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| 72.4% |   1,553 | `realloc!(::Vector{UInt8}, ::Int64, ::Int64)` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:51`  |
|  9.6% |     207 | `escapelength`                                | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:331` |
|  7.7% |     166 | `macro expansion`                             | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/simdloop.jl:77`       |
|  1.4% |      31 | `setindex!`                                   | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/array.jl:986`         |
|  1.2% |      26 | `iterate`                                     | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/range.jl:921`         |

##### `getindex` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:163`)

|     % | Samples | Callee     | Location                                                                                             |
| ----: | ------: | ---------- | ---------------------------------------------------------------------------------------------------- |
| 99.4% |   1,748 | `getvalue` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:127` |
|  0.6% |      10 | `getvalue` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:126` |

##### `var\"#read#6\"(::Bool, ::Nothing, ::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.read), ::String)` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:30`)

|     % | Samples | Callee                                                                         | Location                                                                                            |
| ----: | ------: | ------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------- |
| 83.3% |   1,306 | `read!`                                                                        | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:87`  |
| 16.3% |     256 | `Array`                                                                        | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:647`         |
|  0.3% |       4 | `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, Vector{UInt64}})` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40` |

##### `read` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:30`)

|      % | Samples | Callee                                                                                                                     | Location                                                                                           |
| -----: | ------: | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| 100.0% |   1,566 | `var\"#read#6\"(::Bool, ::Nothing, ::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.read), ::String)` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:30` |

##### `realloc!(::Vector{UInt8}, ::Int64, ::Int64)` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:51`)

|      % | Samples | Callee  | Location                                                                                     |
| -----: | ------: | ------- | -------------------------------------------------------------------------------------------- |
| 100.0% |   1,558 | `zeros` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/array.jl:591` |

##### `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:87`)

|     % | Samples | Callee                                                                                                                                                                               | Location                                                                                                    |
| ----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------- |
| 98.4% |   1,306 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:218`         |
| 98.0% |   1,301 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Array}, ::Bool)`  | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:312`         |
| 22.8% |     303 | `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{String})`                                                                       | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:142`         |
|  3.6% |      48 | `typeparser(::Type{Float64}, ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Int16, ::Parsers.Options)`                                                                | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/Parsers/05lwR/src/components.jl:392` |
|  1.8% |      24 | `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.False})`                                                                  | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:189`         |

##### `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:87`)

|     % | Samples | Callee                                                                                                                                                       | Location                                                                                           |
| ----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------- |
| 99.9% |   1,306 | `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:87` |

##### `(::JSON3.var\"#defaultminimum##0#defaultminimum##1\"{JSON3.Array{Int64, Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}}})(::Int64)` (`<unknown>`)

|     % | Samples | Callee       | Location                                                                                                 |
| ----: | ------: | ------------ | -------------------------------------------------------------------------------------------------------- |
| 28.6% |       2 | `isassigned` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/multidimensional.jl:1644` |
| 28.6% |       2 | `isassigned` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/multidimensional.jl:1654` |
| 14.3% |       1 | `isassigned` | `/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/multidimensional.jl:1652` |

## Hottest call stacks

Call stacks ranked by samples taken in their leaf frame.

Common call stack: `include_string(::typeof(identity), ::Module, ::String, ::String)` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/loading.jl:2856`) ← `_include(::Function, ::Module, ::String)` (2924) ← `include(::Module, ::String)` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/Base.jl:306`) ← `exec_options(::Base.JLOptions)` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/client.jl:227`)

|     % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ----: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 16.2% |   4,494 | `#write#78` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:159`) ← `#write#78` (159) ← `#write#80` (187) ← `#write#78` (157) ← `write` (147) ← `#write#57` (40) ← `parse_workload` (`profile.jl:13`) ← `macro expansion` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/stdlib/v1.12/Profile/src/Profile.jl:82`) ← `capture_wall` (`profile.jl:38`) ← `eval(::Module, ::Any)` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:489`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  9.2% |   2,558 | `#write#78` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:159`) ← `#write#78` (159) ← `#write#78` (159) ← `#write#80` (187) ← `#write#78` (157) ← `write` (147) ← `#write#57` (40) ← `parse_workload` (`profile.jl:13`) ← `macro expansion` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/stdlib/v1.12/Profile/src/Profile.jl:82`) ← `capture_wall` (`profile.jl:38`) ← `eval(::Module, ::Any)` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:489`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  6.6% |   1,841 | `#write#78` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:159`) ← `#write#80` (187) ← `#write#78` (157) ← `write` (147) ← `#write#57` (40) ← `parse_workload` (`profile.jl:13`) ← `macro expansion` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/stdlib/v1.12/Profile/src/Profile.jl:82`) ← `capture_wall` (`profile.jl:38`) ← `eval(::Module, ::Any)` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:489`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  4.8% |   1,343 | `GenericMemory` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:588`) ← `Array` (647) ← `Array` (660) ← `zeros` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/array.jl:595`) ← `zeros` (591) ← `realloc!(::Vector{UInt8}, ::Int64, ::Int64)` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:51`) ← `var\"#write#97\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` (340) ← `#write#78` (159) ← `#write#78` (159) ← `#write#80` (187) ← `#write#78` (157) ← `write` (147) ← `#write#57` (40) ← `parse_workload` (`profile.jl:13`) ← `macro expansion` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/stdlib/v1.12/Profile/src/Profile.jl:82`) ← `capture_wall` (`profile.jl:38`) ← `eval(::Module, ::Any)` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:489`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  3.3% |     908 | `_symbol` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`) ← `getvalue` (187) ← `iterate` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:78`) ← `#write#78` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:159`) ← `#write#78` (159) ← `#write#80` (187) ← `#write#78` (157) ← `write` (147) ← `#write#57` (40) ← `parse_workload` (`profile.jl:13`) ← `macro expansion` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/stdlib/v1.12/Profile/src/Profile.jl:82`) ← `capture_wall` (`profile.jl:38`) ← `eval(::Module, ::Any)` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:489`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  3.0% |     828 | `eval(::Module, ::Any)` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:489`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  2.6% |     719 | `_symbol` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`) ← `getvalue` (187) ← `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40`) ← `getvalue` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:127`) ← `getvalue` (214) ← `iterate` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:81`) ← `#write#78` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:159`) ← `#write#80` (187) ← `#write#78` (157) ← `write` (147) ← `#write#57` (40) ← `parse_workload` (`profile.jl:13`) ← `macro expansion` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/stdlib/v1.12/Profile/src/Profile.jl:82`) ← `capture_wall` (`profile.jl:38`) ← `eval(::Module, ::Any)` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:489`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  2.4% |     668 | `_symbol` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`) ← `getvalue` (187) ← `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40`) ← `getvalue` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:127`) ← `getvalue` (214) ← `iterate` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:81`) ← `iterate` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/iterators.jl:682`) ← `_foldl_impl` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:55`) ← `foldl_impl` (40) ← `mapfoldl_impl` (36) ← `#mapfoldl#270` (167) ← `mapfoldl` (167) ← `#mapreduce#274` (299) ← `mapreduce` (299) ← `#sum#277` (524) ← `sum` (524) ← `#sum#278` (553) ← `sum` (553) ← `defaultminimum` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:12`) ← `#defaultminimum##0` ← `_foldl_impl` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:54`) ← `foldl_impl` (40) ← `mapfoldl_impl` (36) ← `#mapfoldl#270` (167) ← `mapfoldl` (167) ← `#mapreduce#274` (299) ← `mapreduce` (299) ← `#sum#277` (524) ← `sum` (524) ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `MappingRF` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:92`) ← `_foldl_impl` (50) ← `foldl_impl` (40) ← `mapfoldl_impl` (36) ← `#mapfoldl#270` (167) ← `mapfoldl` (167) ← `#mapreduce#274` (299) ← `mapreduce` (299) ← `#sum#277` (524) ← `sum` (524) ← `#sum#278` (553) ← `sum` (553) ← `defaultminimum` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:12`) ← `#write#57` (40) ← `parse_workload` (`profile.jl:13`) ← `macro expansion` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/stdlib/v1.12/Profile/src/Profile.jl:82`) ← `capture_wall` (`profile.jl:38`) ← `eval(::Module, ::Any)` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:489`)                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  2.4% |     662 | `indexed_iterate` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/tuple.jl:162`) ← `#write#78` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:159`) ← `#write#78` (159) ← `#write#80` (187) ← `#write#78` (157) ← `write` (147) ← `#write#57` (40) ← `parse_workload` (`profile.jl:13`) ← `macro expansion` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/stdlib/v1.12/Profile/src/Profile.jl:82`) ← `capture_wall` (`profile.jl:38`) ← `eval(::Module, ::Any)` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:489`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  2.1% |     576 | `_symbol` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`) ← `getvalue` (187) ← `iterate` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:78`) ← `iterate` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/iterators.jl:682`) ← `_foldl_impl` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:55`) ← `foldl_impl` (40) ← `mapfoldl_impl` (36) ← `#mapfoldl#270` (167) ← `mapfoldl` (167) ← `#mapreduce#274` (299) ← `mapreduce` (299) ← `#sum#277` (524) ← `sum` (524) ← `#sum#278` (553) ← `sum` (553) ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `_foldl_impl` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:55`) ← `foldl_impl` (40) ← `mapfoldl_impl` (36) ← `#mapfoldl#270` (167) ← `mapfoldl` (167) ← `#mapreduce#274` (299) ← `mapreduce` (299) ← `#sum#277` (524) ← `sum` (524) ← `#sum#278` (553) ← `sum` (553) ← `defaultminimum` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:12`) ← `#defaultminimum##0` ← `_foldl_impl` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:54`) ← `foldl_impl` (40) ← `mapfoldl_impl` (36) ← `#mapfoldl#270` (167) ← `mapfoldl` (167) ← `#mapreduce#274` (299) ← `mapreduce` (299) ← `#sum#277` (524) ← `sum` (524) ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `MappingRF` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:92`) ← `_foldl_impl` (50) ← `foldl_impl` (40) ← `mapfoldl_impl` (36) ← `#mapfoldl#270` (167) ← `mapfoldl` (167) ← `#mapreduce#274` (299) ← `mapreduce` (299) ← `#sum#277` (524) ← `sum` (524) ← `#sum#278` (553) ← `sum` (553) ← `defaultminimum` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:12`) ← `#write#57` (40) ← `parse_workload` (`profile.jl:13`) ← `macro expansion` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/stdlib/v1.12/Profile/src/Profile.jl:82`) ← `capture_wall` (`profile.jl:38`) ← `eval(::Module, ::Any)` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:489`)                                                                                                                                                                                                                                                                                                                                                                                                    |
|  1.7% |     470 | `_symbol` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`) ← `getvalue` (187) ← `iterate` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:78`) ← `#write#78` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:159`) ← `#write#78` (159) ← `#write#78` (159) ← `#write#80` (187) ← `#write#78` (157) ← `write` (147) ← `#write#57` (40) ← `parse_workload` (`profile.jl:13`) ← `macro expansion` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/stdlib/v1.12/Profile/src/Profile.jl:82`) ← `capture_wall` (`profile.jl:38`) ← `eval(::Module, ::Any)` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:489`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  1.6% |     439 | `_symbol` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`) ← `getvalue` (187) ← `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40`) ← `getvalue` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:127`) ← `getvalue` (214) ← `iterate` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:81`) ← `#write#78` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:159`) ← `#write#78` (159) ← `#write#80` (187) ← `#write#78` (157) ← `write` (147) ← `#write#57` (40) ← `parse_workload` (`profile.jl:13`) ← `macro expansion` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/stdlib/v1.12/Profile/src/Profile.jl:82`) ← `capture_wall` (`profile.jl:38`) ← `eval(::Module, ::Any)` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:489`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  1.4% |     394 | `#write#78` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:159`) ← `#write#80` (187) ← `#write#78` (159) ← `#write#78` (159) ← `#write#80` (187) ← `#write#78` (157) ← `write` (147) ← `#write#57` (40) ← `parse_workload` (`profile.jl:13`) ← `macro expansion` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/stdlib/v1.12/Profile/src/Profile.jl:82`) ← `capture_wall` (`profile.jl:38`) ← `eval(::Module, ::Any)` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:489`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  1.3% |     363 | `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `_foldl_impl` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:55`) ← `foldl_impl` (40) ← `mapfoldl_impl` (36) ← `#mapfoldl#270` (167) ← `mapfoldl` (167) ← `#mapreduce#274` (299) ← `mapreduce` (299) ← `#sum#277` (524) ← `sum` (524) ← `#sum#278` (553) ← `sum` (553) ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `_foldl_impl` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:55`) ← `foldl_impl` (40) ← `mapfoldl_impl` (36) ← `#mapfoldl#270` (167) ← `mapfoldl` (167) ← `#mapreduce#274` (299) ← `mapreduce` (299) ← `#sum#277` (524) ← `sum` (524) ← `#sum#278` (553) ← `sum` (553) ← `defaultminimum` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:12`) ← `#defaultminimum##0` ← `_foldl_impl` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:54`) ← `foldl_impl` (40) ← `mapfoldl_impl` (36) ← `#mapfoldl#270` (167) ← `mapfoldl` (167) ← `#mapreduce#274` (299) ← `mapreduce` (299) ← `#sum#277` (524) ← `sum` (524) ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `MappingRF` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:92`) ← `_foldl_impl` (50) ← `foldl_impl` (40) ← `mapfoldl_impl` (36) ← `#mapfoldl#270` (167) ← `mapfoldl` (167) ← `#mapreduce#274` (299) ← `mapreduce` (299) ← `#sum#277` (524) ← `sum` (524) ← `#sum#278` (553) ← `sum` (553) ← `defaultminimum` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:12`) ← `#write#57` (40) ← `parse_workload` (`profile.jl:13`) ← `macro expansion` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/stdlib/v1.12/Profile/src/Profile.jl:82`) ← `capture_wall` (`profile.jl:38`) ← `eval(::Module, ::Any)` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:489`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  1.3% |     363 | `_symbol` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`) ← `getvalue` (187) ← `iterate` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:78`) ← `#write#78` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:159`) ← `#write#80` (187) ← `#write#78` (157) ← `write` (147) ← `#write#57` (40) ← `parse_workload` (`profile.jl:13`) ← `macro expansion` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/stdlib/v1.12/Profile/src/Profile.jl:82`) ← `capture_wall` (`profile.jl:38`) ← `eval(::Module, ::Any)` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:489`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  1.3% |     347 | `_symbol` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`) ← `getvalue` (187) ← `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40`) ← `getvalue` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:127`) ← `getvalue` (214) ← `iterate` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:81`) ← `iterate` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/iterators.jl:682`) ← `_foldl_impl` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:55`) ← `foldl_impl` (40) ← `mapfoldl_impl` (36) ← `#mapfoldl#270` (167) ← `mapfoldl` (167) ← `#mapreduce#274` (299) ← `mapreduce` (299) ← `#sum#277` (524) ← `sum` (524) ← `#sum#278` (553) ← `sum` (553) ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `_foldl_impl` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:55`) ← `foldl_impl` (40) ← `mapfoldl_impl` (36) ← `#mapfoldl#270` (167) ← `mapfoldl` (167) ← `#mapreduce#274` (299) ← `mapreduce` (299) ← `#sum#277` (524) ← `sum` (524) ← `#sum#278` (553) ← `sum` (553) ← `defaultminimum` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:12`) ← `#defaultminimum##0` ← `_foldl_impl` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:54`) ← `foldl_impl` (40) ← `mapfoldl_impl` (36) ← `#mapfoldl#270` (167) ← `mapfoldl` (167) ← `#mapreduce#274` (299) ← `mapreduce` (299) ← `#sum#277` (524) ← `sum` (524) ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `MappingRF` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:92`) ← `_foldl_impl` (50) ← `foldl_impl` (40) ← `mapfoldl_impl` (36) ← `#mapfoldl#270` (167) ← `mapfoldl` (167) ← `#mapreduce#274` (299) ← `mapreduce` (299) ← `#sum#277` (524) ← `sum` (524) ← `#sum#278` (553) ← `sum` (553) ← `defaultminimum` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:12`) ← `#write#57` (40) ← `parse_workload` (`profile.jl:13`) ← `macro expansion` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/stdlib/v1.12/Profile/src/Profile.jl:82`) ← `capture_wall` (`profile.jl:38`) ← `eval(::Module, ::Any)` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:489`)                  |
|  1.2% |     325 | `_symbol` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`) ← `getvalue` (187) ← `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40`) ← `getvalue` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:127`) ← `getindex` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:163`) ← `isassigned` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/multidimensional.jl:1653`) ← `#write#80` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:187`) ← `#write#78` (157) ← `write` (147) ← `#write#57` (40) ← `parse_workload` (`profile.jl:13`) ← `macro expansion` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/stdlib/v1.12/Profile/src/Profile.jl:82`) ← `capture_wall` (`profile.jl:38`) ← `eval(::Module, ::Any)` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:489`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  1.1% |     311 | `indexed_iterate` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/tuple.jl:162`) ← `#write#78` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:159`) ← `#write#78` (159) ← `#write#78` (159) ← `#write#80` (187) ← `#write#78` (157) ← `write` (147) ← `#write#57` (40) ← `parse_workload` (`profile.jl:13`) ← `macro expansion` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/stdlib/v1.12/Profile/src/Profile.jl:82`) ← `capture_wall` (`profile.jl:38`) ← `eval(::Module, ::Any)` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:489`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  1.1% |     302 | `_symbol` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`) ← `getvalue` (187) ← `iterate` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:78`) ← `iterate` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/iterators.jl:682`) ← `_foldl_impl` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:55`) ← `foldl_impl` (40) ← `mapfoldl_impl` (36) ← `#mapfoldl#270` (167) ← `mapfoldl` (167) ← `#mapreduce#274` (299) ← `mapreduce` (299) ← `#sum#277` (524) ← `sum` (524) ← `#sum#278` (553) ← `sum` (553) ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `_foldl_impl` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:55`) ← `foldl_impl` (40) ← `mapfoldl_impl` (36) ← `#mapfoldl#270` (167) ← `mapfoldl` (167) ← `#mapreduce#274` (299) ← `mapreduce` (299) ← `#sum#277` (524) ← `sum` (524) ← `#sum#278` (553) ← `sum` (553) ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `_foldl_impl` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:55`) ← `foldl_impl` (40) ← `mapfoldl_impl` (36) ← `#mapfoldl#270` (167) ← `mapfoldl` (167) ← `#mapreduce#274` (299) ← `mapreduce` (299) ← `#sum#277` (524) ← `sum` (524) ← `#sum#278` (553) ← `sum` (553) ← `defaultminimum` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:12`) ← `#defaultminimum##0` ← `_foldl_impl` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:54`) ← `foldl_impl` (40) ← `mapfoldl_impl` (36) ← `#mapfoldl#270` (167) ← `mapfoldl` (167) ← `#mapreduce#274` (299) ← `mapreduce` (299) ← `#sum#277` (524) ← `sum` (524) ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `MappingRF` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:92`) ← `_foldl_impl` (50) ← `foldl_impl` (40) ← `mapfoldl_impl` (36) ← `#mapfoldl#270` (167) ← `mapfoldl` (167) ← `#mapreduce#274` (299) ← `mapreduce` (299) ← `#sum#277` (524) ← `sum` (524) ← `#sum#278` (553) ← `sum` (553) ← `defaultminimum` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:12`) ← `#write#57` (40) ← `parse_workload` (`profile.jl:13`) ← `macro expansion` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/stdlib/v1.12/Profile/src/Profile.jl:82`) ← `capture_wall` (`profile.jl:38`) ← `eval(::Module, ::Any)` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:489`) |
|  1.0% |     275 | `_symbol` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`) ← `getvalue` (187) ← `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40`) ← `getvalue` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:127`) ← `getindex` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:163`) ← `isassigned` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/multidimensional.jl:1653`) ← `#defaultminimum##0` ← `_foldl_impl` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:54`) ← `foldl_impl` (40) ← `mapfoldl_impl` (36) ← `#mapfoldl#270` (167) ← `mapfoldl` (167) ← `#mapreduce#274` (299) ← `mapreduce` (299) ← `#sum#277` (524) ← `sum` (524) ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `MappingRF` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/reduce.jl:92`) ← `_foldl_impl` (50) ← `foldl_impl` (40) ← `mapfoldl_impl` (36) ← `#mapfoldl#270` (167) ← `mapfoldl` (167) ← `#mapreduce#274` (299) ← `mapreduce` (299) ← `#sum#277` (524) ← `sum` (524) ← `#sum#278` (553) ← `sum` (553) ← `defaultminimum` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:12`) ← `#write#57` (40) ← `parse_workload` (`profile.jl:13`) ← `macro expansion` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/stdlib/v1.12/Profile/src/Profile.jl:82`) ← `capture_wall` (`profile.jl:38`) ← `eval(::Module, ::Any)` (`/nix/store/a2si0rmwaqlhmqvsgvc6nf388qjr0z0v-julia-bin-1.12.6/share/julia/base/boot.jl:489`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |

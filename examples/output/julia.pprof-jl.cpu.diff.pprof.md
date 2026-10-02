# Sampling profile diff

Collected 33,701 samples → 33,383 samples (-318 samples, -0.9%).

| Category         | Change | Delta |             % |         Samples |
| ---------------- | -----: | ----: | ------------: | --------------: |
| Third-party      |  +0.5% |   +79 | 45.5% → 46.2% | 15,333 → 15,412 |
| Standard library |  +2.5% |  +220 | 26.5% → 27.4% |   8,936 → 9,156 |
| Unknown          |  -6.4% |  -507 | 23.6% → 22.3% |   7,943 → 7,436 |
| Native           |  -4.9% |   -69 |   4.2% → 4.0% |   1,403 → 1,334 |
| Ours             | -47.7% |   -41 |   0.3% → 0.1% |         86 → 45 |

Paths starting with `./` or `../` are relative to `/tmp/profiler-md-julia-project/`.

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples collected within the function body, excluding callees. Categories account for at least 1.0% of self samples on the base or the current side.

|  Change | Delta |             % |       Samples | Function                                                                                                                                                                                                                         | Location                                                                                              |
| ------: | ----: | ------------: | ------------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
|  +26.2% |  +295 |   3.3% → 4.3% | 1,127 → 1,422 | `GenericMemory`                                                                                                                                                                                                                  | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:588`           |
|     new |  +249 |   0.0% → 0.7% |       0 → 249 | `_foldl_impl`                                                                                                                                                                                                                    | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:61`          |
|   +2.5% |  +175 | 20.4% → 21.1% | 6,881 → 7,056 | `#write#79`                                                                                                                                                                                                                      | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`  |
|   +7.9% |  +167 |   6.3% → 6.9% | 2,127 → 2,294 | `indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64, ::Int64)`                                                                                                                                                        | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`          |
|     new |   +59 |   0.0% → 0.2% |        0 → 59 | `#write#81`                                                                                                                                                                                                                      | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:185`  |
|  +26.8% |   +44 |   0.5% → 0.6% |     164 → 208 | `getindex`                                                                                                                                                                                                                       | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:975`     |
|  +17.5% |   +40 |   0.7% → 0.8% |     229 → 269 | `_setindex!`                                                                                                                                                                                                                     | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:1025`         |
|   +5.9% |   +19 |          1.0% |     323 → 342 | `+`                                                                                                                                                                                                                              | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:87`             |
| +133.3% |   +16 |  <0.1% → 0.1% |       12 → 28 | `getvalue(::Type{JSON3.Array}, ::Base.CodeUnits{UInt8, String}, ::SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}, ::Int64, ::UInt64)`                                                                        | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:131`  |
|  +15.4% |   +12 |   0.2% → 0.3% |       78 → 90 | `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)`                                                                     | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:87`    |
|   +5.8% |   +12 |   0.6% → 0.7% |     208 → 220 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:218`   |
|  +26.8% |   +11 |   0.1% → 0.2% |       41 → 52 | `getindex`                                                                                                                                                                                                                       | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:401`     |
|  +27.8% |   +10 |          0.1% |       36 → 46 | `write(::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)`                                                                                                                                                   | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:340`  |
| +111.1% |   +10 |  <0.1% → 0.1% |        9 → 19 | `memoryref`                                                                                                                                                                                                                      | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:594`           |
|   +7.5% |   +10 |          0.4% |     133 → 143 | `unsafe_string`                                                                                                                                                                                                                  | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:130` |
|  +42.9% |    +9 |          0.1% |       21 → 30 | `macro expansion`                                                                                                                                                                                                                | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:23`   |
|  +56.3% |    +9 |  <0.1% → 0.1% |       16 → 25 | `var\"#write#84\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.BoolType, ::Vector{UInt8}, ::Int64, ::Int64, ::Bool)`                                                              | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:209`  |
|   +0.7% |    +8 |          3.3% | 1,108 → 1,116 | `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})`                                                                                                                                                     | `<unknown>`                                                                                           |
| +266.7% |    +8 |         <0.1% |        3 → 11 | `_setindex!`                                                                                                                                                                                                                     | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:339`           |
|   +2.8% |    +8 |   0.8% → 0.9% |     286 → 294 | `BottomRF`                                                                                                                                                                                                                       | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:84`          |

##### Third-party

|  Change | Delta |             % |       Samples | Function                                                                                                                                                                                                                         | Location                                                                                                |
| ------: | ----: | ------------: | ------------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
|   +2.5% |  +175 | 20.4% → 21.1% | 6,881 → 7,056 | `#write#79`                                                                                                                                                                                                                      | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`    |
|     new |   +59 |   0.0% → 0.2% |        0 → 59 | `#write#81`                                                                                                                                                                                                                      | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:185`    |
| +133.3% |   +16 |  <0.1% → 0.1% |       12 → 28 | `getvalue(::Type{JSON3.Array}, ::Base.CodeUnits{UInt8, String}, ::SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}, ::Int64, ::UInt64)`                                                                        | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:131`    |
|  +15.4% |   +12 |   0.2% → 0.3% |       78 → 90 | `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)`                                                                     | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:87`      |
|   +5.8% |   +12 |   0.6% → 0.7% |     208 → 220 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:218`     |
|  +27.8% |   +10 |          0.1% |       36 → 46 | `write(::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)`                                                                                                                                                   | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:340`    |
|  +42.9% |    +9 |          0.1% |       21 → 30 | `macro expansion`                                                                                                                                                                                                                | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:23`     |
|  +56.3% |    +9 |  <0.1% → 0.1% |       16 → 25 | `var\"#write#84\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.BoolType, ::Vector{UInt8}, ::Int64, ::Int64, ::Bool)`                                                              | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:209`    |
|   +7.1% |    +8 |   0.3% → 0.4% |     112 → 120 | `#write#81`                                                                                                                                                                                                                      | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:200`    |
| +120.0% |    +6 |         <0.1% |        5 → 11 | `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.False})`                                                                                                              | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:189`     |
| +250.0% |    +5 |         <0.1% |         2 → 7 | `typeparser`                                                                                                                                                                                                                     | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/Parsers/05lwR/src/floats.jl:152` |
|  +26.3% |    +5 |          0.1% |       19 → 24 | `unescape(::JSON3.PointerString)`                                                                                                                                                                                                | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/strings.jl:48`   |
|     new |    +4 |  0.0% → <0.1% |         0 → 4 | `Array`                                                                                                                                                                                                                          | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:17`     |
|   +8.6% |    +3 |          0.1% |       35 → 38 | `getvalue`                                                                                                                                                                                                                       | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl`        |
|  +18.8% |    +3 |  <0.1% → 0.1% |       16 → 19 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)`                                                      | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:87`      |
|     new |    +2 |  0.0% → <0.1% |         0 → 2 | `getvalue`                                                                                                                                                                                                                       | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:193`    |
| +200.0% |    +2 |         <0.1% |         1 → 3 | `getvalue`                                                                                                                                                                                                                       | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:184`    |
| +200.0% |    +2 |         <0.1% |         1 → 3 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Array}, ::Bool)`                                              | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:312`     |
|     new |    +2 |  0.0% → <0.1% |         0 → 2 | `__scale(::Type{Float64}, ::UInt64, ::Int64, ::Bool)`                                                                                                                                                                            | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/Parsers/05lwR/src/floats.jl:613` |
|     new |    +1 |  0.0% → <0.1% |         0 → 1 | `write`                                                                                                                                                                                                                          | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:147`    |

##### Standard library

|  Change | Delta |            % |       Samples | Function                                                                  | Location                                                                                              |
| ------: | ----: | -----------: | ------------: | ------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
|  +26.2% |  +295 |  3.3% → 4.3% | 1,127 → 1,422 | `GenericMemory`                                                           | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:588`           |
|     new |  +249 |  0.0% → 0.7% |       0 → 249 | `_foldl_impl`                                                             | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:61`          |
|   +7.9% |  +167 |  6.3% → 6.9% | 2,127 → 2,294 | `indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64, ::Int64)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`          |
|  +26.8% |   +44 |  0.5% → 0.6% |     164 → 208 | `getindex`                                                                | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:975`     |
|  +17.5% |   +40 |  0.7% → 0.8% |     229 → 269 | `_setindex!`                                                              | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:1025`         |
|   +5.9% |   +19 |         1.0% |     323 → 342 | `+`                                                                       | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:87`             |
|  +26.8% |   +11 |  0.1% → 0.2% |       41 → 52 | `getindex`                                                                | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:401`     |
| +111.1% |   +10 | <0.1% → 0.1% |        9 → 19 | `memoryref`                                                               | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:594`           |
|   +7.5% |   +10 |         0.4% |     133 → 143 | `unsafe_string`                                                           | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:130` |
| +266.7% |    +8 |        <0.1% |        3 → 11 | `_setindex!`                                                              | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:339`           |
|   +2.8% |    +8 |  0.8% → 0.9% |     286 → 294 | `BottomRF`                                                                | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:84`          |
|   +1.3% |    +7 |         1.7% |     558 → 565 | `unsafe_load`                                                             | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/pointer.jl:151`        |
|  +31.8% |    +7 |         0.1% |       22 → 29 | `<`                                                                       | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:83`             |
| +100.0% |    +5 |        <0.1% |        5 → 10 | `checkbounds`                                                             | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/basic.jl:204`  |
|   +5.4% |    +4 |         0.2% |       74 → 78 | `\|`                                                                      | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:418`            |
| +100.0% |    +4 |        <0.1% |         4 → 8 | `unsafe_string`                                                           | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:125` |
|     new |    +4 | 0.0% → <0.1% |         0 → 4 | `+(::UInt64, ::UInt64)`                                                   | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:87`             |
|  +15.8% |    +3 |         0.1% |       19 → 22 | `_setindex!`                                                              | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/genericmemory.jl:263`  |
| +300.0% |    +3 |        <0.1% |         1 → 4 | `resize!(::Vector{UInt8}, ::Int64)`                                       | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:1533`         |
|  +14.3% |    +2 |        <0.1% |       14 → 16 | `rehash!(::Dict{Symbol, Int64}, ::Int64)`                                 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:138`           |

##### Native

| Change | Delta |    % |       Samples | Function                                                                     | Location    |
| -----: | ----: | ---: | ------------: | ---------------------------------------------------------------------------- | ----------- |
|  +0.7% |    +8 | 3.3% | 1,108 → 1,116 | `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` | `<unknown>` |

#### Improvements

Functions with the largest decrease in samples collected within the function body, excluding callees. Categories account for at least 1.0% of self samples on the base or the current side.

|  Change | Delta |             % |       Samples | Function                                                                                                                           | Location                                                                                              |
| ------: | ----: | ------------: | ------------: | ---------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
|   -6.4% |  -507 | 23.6% → 22.3% | 7,943 → 7,436 | `(anonymous)`                                                                                                                      | `<unknown>`                                                                                           |
|  -94.9% |  -262 |  0.8% → <0.1% |      276 → 14 | `_foldl_impl`                                                                                                                      | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`          |
|  -51.3% |  -140 |   0.8% → 0.4% |     273 → 133 | `iterate`                                                                                                                          | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:75`   |
| removed |  -137 |   0.4% → 0.0% |       137 → 0 | `#write#81`                                                                                                                        | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`   |
|  -25.4% |   -74 |   0.9% → 0.7% |     291 → 217 | `[unknown function]`                                                                                                               | `<unknown>`                                                                                           |
|  -47.7% |   -41 |   0.3% → 0.1% |       86 → 45 | `parse_workload`                                                                                                                   | `./profile.jl:18`                                                                                     |
|   -0.5% |   -38 | 20.8% → 20.9% | 7,015 → 6,977 | `_symbol`                                                                                                                          | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:1`    |
|  -22.0% |   -33 |          0.4% |     150 → 117 | `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{String})`                     | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:142`   |
|  -31.7% |   -33 |   0.3% → 0.2% |      104 → 71 | `unsafe_string`                                                                                                                    | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:126` |
|   -2.1% |   -32 |          4.4% | 1,492 → 1,460 | `indexed_iterate`                                                                                                                  | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`          |
|  -71.8% |   -28 |  0.1% → <0.1% |       39 → 11 | `iterate`                                                                                                                          | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/range.jl`              |
|  -29.5% |   -26 |   0.3% → 0.2% |       88 → 62 | `Dict`                                                                                                                             | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:80`            |
|   -3.4% |   -18 |   1.6% → 1.5% |     532 → 514 | `ht_keyindex2_shorthash!(::Dict{Symbol, Int64}, ::Symbol)`                                                                         | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:267`           |
|  -20.2% |   -17 |          0.2% |       84 → 67 | `setindex!(::Dict{Symbol, Int64}, ::Int64, ::Symbol)`                                                                              | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:356`           |
|  -52.0% |   -13 |  0.1% → <0.1% |       25 → 12 | `MappingRF`                                                                                                                        | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98`          |
|  -28.3% |   -13 |          0.1% |       46 → 33 | `*`                                                                                                                                | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:88`             |
|  -42.3% |   -11 |  0.1% → <0.1% |       26 → 15 | `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40`   |
|  -64.7% |   -11 |  0.1% → <0.1% |        17 → 6 | `-(::Int64, ::Int64)`                                                                                                              | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:86`             |
|  -15.5% |   -11 |          0.2% |       71 → 60 | `&`                                                                                                                                | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:393`            |
|   -8.3% |   -10 |   0.4% → 0.3% |     120 → 110 | `length_continued`                                                                                                                 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/pointer.jl`            |

##### Third-party

|  Change | Delta |             % |       Samples | Function                                                                                                                                                                                                                        | Location                                                                                                    |
| ------: | ----: | ------------: | ------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
|  -51.3% |  -140 |   0.8% → 0.4% |     273 → 133 | `iterate`                                                                                                                                                                                                                       | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:75`         |
|   -0.5% |   -38 | 20.8% → 20.9% | 7,015 → 6,977 | `_symbol`                                                                                                                                                                                                                       | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:1`          |
|  -22.0% |   -33 |          0.4% |     150 → 117 | `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{String})`                                                                                                                  | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:142`         |
|  -42.3% |   -11 |  0.1% → <0.1% |       26 → 15 | `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})`                                                                                              | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40`         |
|  -40.0% |    -6 |         <0.1% |        15 → 9 | `defaultminimum`                                                                                                                                                                                                                | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:6`          |
|  -45.5% |    -5 |         <0.1% |        11 → 6 | `var\"#read!#9\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Array}, ::Bool)` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:312`         |
|   -7.2% |    -5 |          0.2% |       69 → 64 | `var\"#write#98\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)`                                                         | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:340`        |
|  -57.1% |    -4 |         <0.1% |         7 → 3 | `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Nothing})`                                                                                                                 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:204`         |
| removed |    -2 |  <0.1% → 0.0% |         2 → 0 | `promoteeltype`                                                                                                                                                                                                                 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:106`        |
| removed |    -2 |  <0.1% → 0.0% |         2 → 0 | `promoteeltype`                                                                                                                                                                                                                 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl`            |
|  -22.2% |    -2 |         <0.1% |         9 → 7 | `typeparser(::Type{Float64}, ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Int16, ::Parsers.Options)`                                                                                                           | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/Parsers/05lwR/src/components.jl:392` |
| removed |    -2 |  <0.1% → 0.0% |         2 → 0 | `gettape`                                                                                                                                                                                                                       | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:25`         |
|   -5.9% |    -2 |          0.1% |       34 → 32 | `write(::StructTypes.BoolType, ::Vector{UInt8}, ::Int64, ::Int64, ::Bool)`                                                                                                                                                      | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:209`        |
| removed |    -2 |  <0.1% → 0.0% |         2 → 0 | `getinds`                                                                                                                                                                                                                       | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:26`         |
|  -18.2% |    -2 |         <0.1% |        11 → 9 | `parsedigits`                                                                                                                                                                                                                   | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/Parsers/05lwR/src/floats.jl`         |
|  -50.0% |    -2 |         <0.1% |         4 → 2 | `Object`                                                                                                                                                                                                                        | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:8`          |
| removed |    -2 |  <0.1% → 0.0% |         2 → 0 | `parsefrac`                                                                                                                                                                                                                     | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/Parsers/05lwR/src/floats.jl:446`     |
| removed |    -2 |  <0.1% → 0.0% |         2 → 0 | `getproperty`                                                                                                                                                                                                                   | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/Parsers/05lwR/src/Parsers.jl:140`    |
|   -5.3% |    -1 |          0.1% |       19 → 18 | `getvalue`                                                                                                                                                                                                                      | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:213`        |
|   -1.1% |    -1 |          0.3% |       89 → 88 | `getvalue`                                                                                                                                                                                                                      | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:215`        |

##### Standard library

|  Change | Delta |            % |       Samples | Function                                                   | Location                                                                                              |
| ------: | ----: | -----------: | ------------: | ---------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
|  -94.9% |  -262 | 0.8% → <0.1% |      276 → 14 | `_foldl_impl`                                              | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`          |
| removed |  -137 |  0.4% → 0.0% |       137 → 0 | `#write#81`                                                | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`   |
|  -31.7% |   -33 |  0.3% → 0.2% |      104 → 71 | `unsafe_string`                                            | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:126` |
|   -2.1% |   -32 |         4.4% | 1,492 → 1,460 | `indexed_iterate`                                          | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`          |
|  -71.8% |   -28 | 0.1% → <0.1% |       39 → 11 | `iterate`                                                  | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/range.jl`              |
|  -29.5% |   -26 |  0.3% → 0.2% |       88 → 62 | `Dict`                                                     | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:80`            |
|   -3.4% |   -18 |  1.6% → 1.5% |     532 → 514 | `ht_keyindex2_shorthash!(::Dict{Symbol, Int64}, ::Symbol)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:267`           |
|  -20.2% |   -17 |         0.2% |       84 → 67 | `setindex!(::Dict{Symbol, Int64}, ::Int64, ::Symbol)`      | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:356`           |
|  -52.0% |   -13 | 0.1% → <0.1% |       25 → 12 | `MappingRF`                                                | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98`          |
|  -28.3% |   -13 |         0.1% |       46 → 33 | `*`                                                        | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:88`             |
|  -64.7% |   -11 | 0.1% → <0.1% |        17 → 6 | `-(::Int64, ::Int64)`                                      | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:86`             |
|  -15.5% |   -11 |         0.2% |       71 → 60 | `&`                                                        | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:393`            |
|   -8.3% |   -10 |  0.4% → 0.3% |     120 → 110 | `length_continued`                                         | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/pointer.jl`            |
|   -9.0% |    -9 |         0.3% |      100 → 91 | `==`                                                       | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/promotion.jl:641`      |
|  -61.5% |    -8 |        <0.1% |        13 → 5 | `foldl_impl`                                               | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:46`          |
|  -38.9% |    -7 | 0.1% → <0.1% |       18 → 11 | `macro expansion`                                          | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/simdloop.jl`           |
|  -41.2% |    -7 | 0.1% → <0.1% |       17 → 10 | `ncodeunits`                                               | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:161` |
|  -35.3% |    -6 | 0.1% → <0.1% |       17 → 11 | `-`                                                        | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:86`             |
|   -3.6% |    -5 |         0.4% |     138 → 133 | `checkbounds`                                              | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/basic.jl:212`  |
| removed |    -3 | <0.1% → 0.0% |         3 → 0 | `foldl_impl`                                               | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:47`          |

##### Unknown

| Change | Delta |             % |       Samples | Function      | Location    |
| -----: | ----: | ------------: | ------------: | ------------- | ----------- |
|  -6.4% |  -507 | 23.6% → 22.3% | 7,943 → 7,436 | `(anonymous)` | `<unknown>` |

##### Native

|  Change | Delta |            % |   Samples | Function                                                                                                                                                                                | Location    |
| ------: | ----: | -----------: | --------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
|  -25.4% |   -74 |  0.9% → 0.7% | 291 → 217 | `[unknown function]`                                                                                                                                                                    | `<unknown>` |
|  -66.7% |    -2 |        <0.1% |     3 → 1 | `#defaultminimum##0`                                                                                                                                                                    | `<unknown>` |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `(::JSON3.var\"#defaultminimum##0#defaultminimum##1\"{JSON3.Array{Int64, Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}}})(::Int64)` | `<unknown>` |

#### Lines

Lines with the largest change in contribution to each function's self samples.

##### `GenericMemory` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:588`)

| Change | Delta |      % |       Samples | Location                                                                                    |
| -----: | ----: | -----: | ------------: | ------------------------------------------------------------------------------------------- |
| +26.2% |  +295 | 100.0% | 1,127 → 1,422 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:588` |

##### `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:61`)

| Change | Delta |            % | Samples | Location                                                                                     |
| -----: | ----: | -----------: | ------: | -------------------------------------------------------------------------------------------- |
|    new |  +233 | 0.0% → 93.6% | 0 → 233 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60` |
|    new |    +5 |  0.0% → 2.0% |   0 → 5 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:51` |

##### `#write#79` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`)

| Change | Delta |             % |       Samples | Location                                                                                             |
| -----: | ----: | ------------: | ------------: | ---------------------------------------------------------------------------------------------------- |
|  +6.1% |  +252 | 60.0% → 62.1% | 4,130 → 4,382 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157` |
| -17.6% |   -54 |   4.5% → 3.6% |     307 → 253 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:72`  |
|  -2.0% |   -29 | 20.8% → 19.9% | 1,432 → 1,403 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:60`  |
|  +4.9% |   +14 |   4.1% → 4.2% |     284 → 298 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:155` |
|  +1.1% |    +6 |   7.7% → 7.6% |     527 → 533 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:73`  |

##### `indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64, ::Int64)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`)

| Change | Delta |      % |       Samples | Location                                                                                     |
| -----: | ----: | -----: | ------------: | -------------------------------------------------------------------------------------------- |
|  +7.9% |  +167 | 100.0% | 2,127 → 2,294 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163` |

##### `#write#81` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:185`)

| Change | Delta |            % | Samples | Location                                                                                             |
| -----: | ----: | -----------: | ------: | ---------------------------------------------------------------------------------------------------- |
|    new |   +16 | 0.0% → 27.1% |  0 → 16 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:60`  |
|    new |   +16 | 0.0% → 27.1% |  0 → 16 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:200` |
|    new |    +6 | 0.0% → 10.2% |   0 → 6 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:197` |
|    new |    +5 |  0.0% → 8.5% |   0 → 5 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:72`  |
|    new |    +5 |  0.0% → 8.5% |   0 → 5 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:73`  |

##### `getindex` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:975`)

| Change | Delta |      % |   Samples | Location                                                                                          |
| -----: | ----: | -----: | --------: | ------------------------------------------------------------------------------------------------- |
| +26.8% |   +44 | 100.0% | 164 → 208 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:975` |

##### `_setindex!` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:1025`)

| Change | Delta |      % |   Samples | Location                                                                                      |
| -----: | ----: | -----: | --------: | --------------------------------------------------------------------------------------------- |
| +17.5% |   +40 | 100.0% | 229 → 269 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:1025` |

##### `+` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:87`)

| Change | Delta |      % |   Samples | Location                                                                                  |
| -----: | ----: | -----: | --------: | ----------------------------------------------------------------------------------------- |
|  +5.9% |   +19 | 100.0% | 323 → 342 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:87` |

##### `getvalue(::Type{JSON3.Array}, ::Base.CodeUnits{UInt8, String}, ::SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}, ::Int64, ::UInt64)` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:131`)

| Change | Delta |             % | Samples | Location                                                                                             |
| -----: | ----: | ------------: | ------: | ---------------------------------------------------------------------------------------------------- |
| +50.0% |    +1 | 16.7% → 10.7% |   2 → 3 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:131` |

##### `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:87`)

|  Change | Delta |             % | Samples | Location                                                                                           |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------------------------------------------------- |
|  +78.6% |   +11 | 17.9% → 27.8% | 14 → 25 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:87` |
|  -28.9% |   -11 | 48.7% → 30.0% | 38 → 27 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:88` |
| +250.0% |    +5 |   2.6% → 7.8% |   2 → 7 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:93` |
|     new |    +2 |   0.0% → 2.2% |   0 → 2 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:89` |
|     new |    +1 |   0.0% → 1.1% |   0 → 1 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:97` |

##### `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:218`)

| Change | Delta |             % |   Samples | Location                                                                                            |
| -----: | ----: | ------------: | --------: | --------------------------------------------------------------------------------------------------- |
| +13.9% |   +21 | 72.6% → 78.2% | 151 → 172 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:248` |
| -80.0% |    -4 |   2.4% → 0.5% |     5 → 1 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:225` |
| -44.4% |    -4 |   4.3% → 2.3% |     9 → 5 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:247` |
| +50.0% |    +2 |   1.9% → 2.7% |     4 → 6 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:278` |
| -33.3% |    -2 |   2.9% → 1.8% |     6 → 4 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:284` |

##### `getindex` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:401`)

| Change | Delta |      % | Samples | Location                                                                                          |
| -----: | ----: | -----: | ------: | ------------------------------------------------------------------------------------------------- |
| +26.8% |   +11 | 100.0% | 41 → 52 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:401` |

##### `write(::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:340`)

| Change | Delta |      % | Samples | Location                                                                                             |
| -----: | ----: | -----: | ------: | ---------------------------------------------------------------------------------------------------- |
| +27.8% |   +10 | 100.0% | 36 → 46 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:340` |

##### `memoryref` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:594`)

|  Change | Delta |      % | Samples | Location                                                                                    |
| ------: | ----: | -----: | ------: | ------------------------------------------------------------------------------------------- |
| +111.1% |   +10 | 100.0% |  9 → 19 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:594` |

##### `unsafe_string` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:130`)

| Change | Delta |      % |   Samples | Location                                                                                              |
| -----: | ----: | -----: | --------: | ----------------------------------------------------------------------------------------------------- |
|  +7.5% |   +10 | 100.0% | 133 → 143 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:130` |

##### `macro expansion` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:23`)

| Change | Delta |      % | Samples | Location                                                                                            |
| -----: | ----: | -----: | ------: | --------------------------------------------------------------------------------------------------- |
| +42.9% |    +9 | 100.0% | 21 → 30 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:23` |

##### `var\"#write#84\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.BoolType, ::Vector{UInt8}, ::Int64, ::Int64, ::Bool)` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:209`)

|  Change | Delta |             % | Samples | Location                                                                                             |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------------------------------------------- |
| +180.0% |    +9 | 31.3% → 56.0% |  5 → 14 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:209` |
|   -9.1% |    -1 | 68.8% → 40.0% | 11 → 10 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:215` |
|     new |    +1 |   0.0% → 4.0% |   0 → 1 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:210` |

##### `_setindex!` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:339`)

|  Change | Delta |      % | Samples | Location                                                                                    |
| ------: | ----: | -----: | ------: | ------------------------------------------------------------------------------------------- |
| +266.7% |    +8 | 100.0% |  3 → 11 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:339` |

##### `BottomRF` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:84`)

| Change | Delta |      % |   Samples | Location                                                                                     |
| -----: | ----: | -----: | --------: | -------------------------------------------------------------------------------------------- |
|  +2.8% |    +8 | 100.0% | 286 → 294 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:84` |

##### `#write#81` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:200`)

|  Change | Delta |             % | Samples | Location                                                                                             |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------------------------------------------- |
|  -21.3% |   -13 | 54.5% → 40.0% | 61 → 48 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:200` |
| +800.0% |    +8 |   0.9% → 7.5% |   1 → 9 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:181` |
| +116.7% |    +7 |  5.4% → 10.8% |  6 → 13 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:72`  |
|   +9.4% |    +3 | 28.6% → 29.2% | 32 → 35 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:60`  |
|  +16.7% |    +2 | 10.7% → 11.7% | 12 → 14 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:73`  |

##### `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.False})` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:189`)

|  Change | Delta |             % | Samples | Location                                                                                            |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------------------------------------------------- |
|     new |    +6 |  0.0% → 54.5% |   0 → 6 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:189` |
| removed |    -1 |  20.0% → 0.0% |   1 → 0 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:77`  |
|  +25.0% |    +1 | 80.0% → 45.5% |   4 → 5 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:198` |

##### `typeparser` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/Parsers/05lwR/src/floats.jl:152`)

|  Change | Delta |      % | Samples | Location                                                                                                |
| ------: | ----: | -----: | ------: | ------------------------------------------------------------------------------------------------------- |
| +250.0% |    +5 | 100.0% |   2 → 7 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/Parsers/05lwR/src/floats.jl:152` |

##### `unescape(::JSON3.PointerString)` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/strings.jl:48`)

|  Change | Delta |             % | Samples | Location                                                                                               |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------------------ |
| +200.0% |    +4 | 10.5% → 25.0% |   2 → 6 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/strings.jl:54`  |
|  +66.7% |    +2 | 15.8% → 20.8% |   3 → 5 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/strings.jl:116` |
|     new |    +2 |   0.0% → 8.3% |   0 → 2 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/strings.jl:117` |
|  -50.0% |    -1 |  10.5% → 4.2% |   2 → 1 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/strings.jl:56`  |
|  -33.3% |    -1 |  15.8% → 8.3% |   3 → 2 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/strings.jl:60`  |

##### `Array` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:17`)

| Change | Delta |             % | Samples | Location                                                                                            |
| -----: | ----: | ------------: | ------: | --------------------------------------------------------------------------------------------------- |
|    new |    +4 | 0.0% → 100.0% |   0 → 4 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:17` |

##### `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:87`)

| Change | Delta |      % | Samples | Location                                                                                           |
| -----: | ----: | -----: | ------: | -------------------------------------------------------------------------------------------------- |
| +18.8% |    +3 | 100.0% | 16 → 19 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:87` |

##### `getvalue` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:193`)

| Change | Delta |             % | Samples | Location                                                                                             |
| -----: | ----: | ------------: | ------: | ---------------------------------------------------------------------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:193` |

##### `getvalue` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:184`)

|  Change | Delta |      % | Samples | Location                                                                                             |
| ------: | ----: | -----: | ------: | ---------------------------------------------------------------------------------------------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:184` |

##### `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Array}, ::Bool)` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:312`)

|  Change | Delta |      % | Samples | Location                                                                                            |
| ------: | ----: | -----: | ------: | --------------------------------------------------------------------------------------------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:312` |

##### `__scale(::Type{Float64}, ::UInt64, ::Int64, ::Bool)` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/Parsers/05lwR/src/floats.jl:613`)

| Change | Delta |            % | Samples | Location                                                                                                |
| -----: | ----: | -----------: | ------: | ------------------------------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/Parsers/05lwR/src/floats.jl:613` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/Parsers/05lwR/src/floats.jl:618` |

##### `write` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:147`)

| Change | Delta |             % | Samples | Location                                                                                             |
| -----: | ----: | ------------: | ------: | ---------------------------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:147` |

##### `unsafe_load` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/pointer.jl:151`)

| Change | Delta |      % |   Samples | Location                                                                                       |
| -----: | ----: | -----: | --------: | ---------------------------------------------------------------------------------------------- |
|  +1.3% |    +7 | 100.0% | 558 → 565 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/pointer.jl:151` |

##### `<` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:83`)

| Change | Delta |      % | Samples | Location                                                                                  |
| -----: | ----: | -----: | ------: | ----------------------------------------------------------------------------------------- |
| +31.8% |    +7 | 100.0% | 22 → 29 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:83` |

##### `checkbounds` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/basic.jl:204`)

|  Change | Delta |      % | Samples | Location                                                                                             |
| ------: | ----: | -----: | ------: | ---------------------------------------------------------------------------------------------------- |
| +100.0% |    +5 | 100.0% |  5 → 10 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/basic.jl:204` |

##### `|` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:418`)

| Change | Delta |      % | Samples | Location                                                                                   |
| -----: | ----: | -----: | ------: | ------------------------------------------------------------------------------------------ |
|  +5.4% |    +4 | 100.0% | 74 → 78 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:418` |

##### `unsafe_string` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:125`)

|  Change | Delta |      % | Samples | Location                                                                                              |
| ------: | ----: | -----: | ------: | ----------------------------------------------------------------------------------------------------- |
| +100.0% |    +4 | 100.0% |   4 → 8 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:125` |

##### `+(::UInt64, ::UInt64)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:87`)

| Change | Delta |             % | Samples | Location                                                                                  |
| -----: | ----: | ------------: | ------: | ----------------------------------------------------------------------------------------- |
|    new |    +4 | 0.0% → 100.0% |   0 → 4 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:87` |

##### `_setindex!` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/genericmemory.jl:263`)

| Change | Delta |      % | Samples | Location                                                                                             |
| -----: | ----: | -----: | ------: | ---------------------------------------------------------------------------------------------------- |
| +15.8% |    +3 | 100.0% | 19 → 22 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/genericmemory.jl:263` |

##### `resize!(::Vector{UInt8}, ::Int64)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:1533`)

|  Change | Delta |             % | Samples | Location                                                                                      |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------------------------------------------- |
|     new |    +3 |  0.0% → 75.0% |   0 → 3 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:1533` |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:1542` |

##### `rehash!(::Dict{Symbol, Int64}, ::Int64)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:138`)

|  Change | Delta |             % | Samples | Location                                                                                    |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------- |
|  -60.0% |    -3 | 35.7% → 12.5% |   5 → 2 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:138` |
| removed |    -1 |   7.1% → 0.0% |   1 → 0 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:146` |
|  +33.3% |    +1 | 21.4% → 25.0% |   3 → 4 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:181` |

##### `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`)

| Change | Delta |             % | Samples | Location                                                                                     |
| -----: | ----: | ------------: | ------: | -------------------------------------------------------------------------------------------- |
| -97.2% |  -241 | 89.9% → 50.0% | 248 → 7 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60` |
| -66.7% |    -2 |   1.1% → 7.1% |   3 → 1 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:51` |

##### `iterate` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:75`)

| Change | Delta |      % |   Samples | Location                                                                                            |
| -----: | ----: | -----: | --------: | --------------------------------------------------------------------------------------------------- |
| -51.3% |  -140 | 100.0% | 273 → 133 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:75` |

##### `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`)

|  Change | Delta |            % | Samples | Location                                                                                                |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------------------------------------------------------- |
| removed |   -84 | 61.3% → 0.0% |  84 → 0 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:187` |
| removed |   -15 | 10.9% → 0.0% |  15 → 0 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:60`  |
| removed |   -10 |  7.3% → 0.0% |  10 → 0 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:73`  |
| removed |   -10 |  7.3% → 0.0% |  10 → 0 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:200` |
| removed |    -6 |  4.4% → 0.0% |   6 → 0 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:72`  |

##### `[unknown function]` (`<unknown>`)

| Change | Delta |             % |   Samples | Location |
| -----: | ----: | ------------: | --------: | -------- |
| -23.9% |   -43 | 61.9% → 63.1% | 180 → 137 | 147      |
| -31.6% |   -31 | 33.7% → 30.9% |   98 → 67 | 98       |
| -50.0% |    -3 |   2.1% → 1.4% |     6 → 3 | 181      |
|    new |    +2 |   0.0% → 0.9% |     0 → 2 | 12       |
| -16.7% |    -1 |   2.1% → 2.3% |     6 → 5 | 11       |

##### `parse_workload` (`./profile.jl:18`)

| Change | Delta |      % | Samples | Location          |
| -----: | ----: | -----: | ------: | ----------------- |
| -47.7% |   -41 | 100.0% | 86 → 45 | `./profile.jl:18` |

##### `_symbol` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:1`)

| Change | Delta |      % |       Samples | Location                                                                                           |
| -----: | ----: | -----: | ------------: | -------------------------------------------------------------------------------------------------- |
|  -0.5% |   -38 | 100.0% | 7,015 → 6,977 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:1` |

##### `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{String})` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:142`)

|  Change | Delta |             % | Samples | Location                                                                                            |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------------------------------------------------- |
|  -25.6% |   -21 | 54.7% → 52.1% | 82 → 61 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:155` |
| +200.0% |    +2 |   0.7% → 2.6% |   1 → 3 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:149` |
|  -33.3% |    -2 |   4.0% → 3.4% |   6 → 4 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:167` |
| removed |    -1 |   0.7% → 0.0% |   1 → 0 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:77`  |
| removed |    -1 |   0.7% → 0.0% |   1 → 0 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:166` |

##### `unsafe_string` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:126`)

| Change | Delta |      % |  Samples | Location                                                                                              |
| -----: | ----: | -----: | -------: | ----------------------------------------------------------------------------------------------------- |
| -31.7% |   -33 | 100.0% | 104 → 71 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:126` |

##### `indexed_iterate` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`)

| Change | Delta |      % |       Samples | Location                                                                                     |
| -----: | ----: | -----: | ------------: | -------------------------------------------------------------------------------------------- |
|  -2.1% |   -32 | 100.0% | 1,492 → 1,460 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163` |

##### `Dict` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:80`)

| Change | Delta |      % | Samples | Location                                                                                   |
| -----: | ----: | -----: | ------: | ------------------------------------------------------------------------------------------ |
| -29.5% |   -26 | 100.0% | 88 → 62 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:80` |

##### `ht_keyindex2_shorthash!(::Dict{Symbol, Int64}, ::Symbol)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:267`)

| Change | Delta |             % |   Samples | Location                                                                                    |
| -----: | ----: | ------------: | --------: | ------------------------------------------------------------------------------------------- |
|  -3.7% |   -12 | 60.9% → 60.7% | 324 → 312 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:291` |
| -72.7% |    -8 |   2.1% → 0.6% |    11 → 3 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:267` |
|  -7.3% |    -7 | 18.0% → 17.3% |   96 → 89 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:282` |
| +30.0% |    +6 |   3.8% → 5.1% |   20 → 26 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:281` |
| +50.0% |    +4 |   1.5% → 2.3% |    8 → 12 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:303` |

##### `setindex!(::Dict{Symbol, Int64}, ::Int64, ::Symbol)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:356`)

| Change | Delta |             % | Samples | Location                                                                                    |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------- |
| -62.5% |   -15 | 28.6% → 13.4% |  24 → 9 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:356` |
| -75.0% |    -3 |   4.8% → 1.5% |   4 → 1 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:358` |
|    new |    +1 |   0.0% → 1.5% |   0 → 1 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:360` |

##### `MappingRF` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98`)

| Change | Delta |      % | Samples | Location                                                                                     |
| -----: | ----: | -----: | ------: | -------------------------------------------------------------------------------------------- |
| -52.0% |   -13 | 100.0% | 25 → 12 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98` |

##### `*` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:88`)

| Change | Delta |      % | Samples | Location                                                                                  |
| -----: | ----: | -----: | ------: | ----------------------------------------------------------------------------------------- |
| -28.3% |   -13 | 100.0% | 46 → 33 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:88` |

##### `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40`)

|  Change | Delta |             % | Samples | Location                                                                                            |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------------------------------------------------- |
|  -50.0% |    -5 | 38.5% → 33.3% |  10 → 5 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:47` |
|  -80.0% |    -4 |  19.2% → 6.7% |   5 → 1 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:51` |
| removed |    -2 |   7.7% → 0.0% |   2 → 0 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40` |
| +100.0% |    +2 |  7.7% → 26.7% |   2 → 4 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:55` |

##### `-(::Int64, ::Int64)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:86`)

| Change | Delta |      % | Samples | Location                                                                                  |
| -----: | ----: | -----: | ------: | ----------------------------------------------------------------------------------------- |
| -64.7% |   -11 | 100.0% |  17 → 6 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:86` |

##### `&` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:393`)

| Change | Delta |      % | Samples | Location                                                                                   |
| -----: | ----: | -----: | ------: | ------------------------------------------------------------------------------------------ |
| -15.5% |   -11 | 100.0% | 71 → 60 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:393` |

##### `defaultminimum` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:6`)

| Change | Delta |      % | Samples | Location                                                                                           |
| -----: | ----: | -----: | ------: | -------------------------------------------------------------------------------------------------- |
| -40.0% |    -6 | 100.0% |  15 → 9 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:6` |

##### `var\"#read!#9\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Array}, ::Bool)` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:312`)

|  Change | Delta |             % | Samples | Location                                                                                            |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------------------------------------------------- |
|  -71.4% |    -5 | 63.6% → 33.3% |   7 → 2 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:312` |
|     new |    +4 |  0.0% → 66.7% |   0 → 4 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:319` |
| removed |    -1 |   9.1% → 0.0% |   1 → 0 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:339` |

##### `var\"#write#98\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:340`)

|  Change | Delta |             % | Samples | Location                                                                                             |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------------------------------------------- |
|  -23.3% |    -7 | 43.5% → 35.9% | 30 → 23 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:360` |
|  +71.4% |    +5 | 10.1% → 18.8% |  7 → 12 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:340` |
|  -20.0% |    -3 | 21.7% → 18.8% | 15 → 12 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:60`  |
|  +33.3% |    +2 |  8.7% → 12.5% |   6 → 8 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:351` |
| removed |    -1 |   1.4% → 0.0% |   1 → 0 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:345` |

##### `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Nothing})` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:204`)

|  Change | Delta |            % | Samples | Location                                                                                            |
| ------: | ----: | -----------: | ------: | --------------------------------------------------------------------------------------------------- |
| removed |    -3 | 42.9% → 0.0% |   3 → 0 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:204` |
| removed |    -1 | 14.3% → 0.0% |   1 → 0 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:205` |

##### `promoteeltype` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:106`)

|  Change | Delta |             % | Samples | Location                                                                                             |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:106` |

##### `typeparser(::Type{Float64}, ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Int16, ::Parsers.Options)` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/Parsers/05lwR/src/components.jl:392`)

|  Change | Delta |              % | Samples | Location                                                                                                    |
| ------: | ----: | -------------: | ------: | ----------------------------------------------------------------------------------------------------------- |
| removed |    -3 |   33.3% → 0.0% |   3 → 0 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/Parsers/05lwR/src/components.jl:394` |
|  +16.7% |    +1 | 66.7% → 100.0% |   6 → 7 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/Parsers/05lwR/src/components.jl:392` |

##### `gettape` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:25`)

|  Change | Delta |             % | Samples | Location                                                                                            |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:25` |

##### `write(::StructTypes.BoolType, ::Vector{UInt8}, ::Int64, ::Int64, ::Bool)` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:209`)

| Change | Delta |      % | Samples | Location                                                                                             |
| -----: | ----: | -----: | ------: | ---------------------------------------------------------------------------------------------------- |
|  -5.9% |    -2 | 100.0% | 34 → 32 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:209` |

##### `getinds` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:26`)

|  Change | Delta |             % | Samples | Location                                                                                            |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:26` |

##### `Object` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:8`)

| Change | Delta |      % | Samples | Location                                                                                           |
| -----: | ----: | -----: | ------: | -------------------------------------------------------------------------------------------------- |
| -50.0% |    -2 | 100.0% |   4 → 2 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:8` |

##### `parsefrac` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/Parsers/05lwR/src/floats.jl:446`)

|  Change | Delta |             % | Samples | Location                                                                                                |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/Parsers/05lwR/src/floats.jl:446` |

##### `getproperty` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/Parsers/05lwR/src/Parsers.jl:140`)

|  Change | Delta |             % | Samples | Location                                                                                                 |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------------------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/Parsers/05lwR/src/Parsers.jl:140` |

##### `getvalue` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:213`)

| Change | Delta |      % | Samples | Location                                                                                             |
| -----: | ----: | -----: | ------: | ---------------------------------------------------------------------------------------------------- |
|  -5.3% |    -1 | 100.0% | 19 → 18 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:213` |

##### `getvalue` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:215`)

| Change | Delta |      % | Samples | Location                                                                                             |
| -----: | ----: | -----: | ------: | ---------------------------------------------------------------------------------------------------- |
|  -1.1% |    -1 | 100.0% | 89 → 88 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:215` |

##### `==` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/promotion.jl:641`)

| Change | Delta |      % |  Samples | Location                                                                                         |
| -----: | ----: | -----: | -------: | ------------------------------------------------------------------------------------------------ |
|  -9.0% |    -9 | 100.0% | 100 → 91 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/promotion.jl:641` |

##### `foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:46`)

| Change | Delta |      % | Samples | Location                                                                                     |
| -----: | ----: | -----: | ------: | -------------------------------------------------------------------------------------------- |
| -61.5% |    -8 | 100.0% |  13 → 5 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:46` |

##### `ncodeunits` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:161`)

| Change | Delta |      % | Samples | Location                                                                                              |
| -----: | ----: | -----: | ------: | ----------------------------------------------------------------------------------------------------- |
| -41.2% |    -7 | 100.0% | 17 → 10 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:161` |

##### `-` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:86`)

| Change | Delta |      % | Samples | Location                                                                                  |
| -----: | ----: | -----: | ------: | ----------------------------------------------------------------------------------------- |
| -35.3% |    -6 | 100.0% | 17 → 11 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:86` |

##### `checkbounds` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/basic.jl:212`)

| Change | Delta |      % |   Samples | Location                                                                                             |
| -----: | ----: | -----: | --------: | ---------------------------------------------------------------------------------------------------- |
|  -3.6% |    -5 | 100.0% | 138 → 133 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/basic.jl:212` |

##### `foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:47`)

|  Change | Delta |             % | Samples | Location                                                                                     |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------------------------------------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:47` |

#### Callers

Callers with the largest change in contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `GenericMemory` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:588`)

| Change | Delta |             % |   Samples | Caller                                    | Location                                                                                      |
| -----: | ----: | ------------: | --------: | ----------------------------------------- | --------------------------------------------------------------------------------------------- |
| +82.0% |  +237 | 25.6% → 37.0% | 289 → 526 | `rehash!(::Dict{Symbol, Int64}, ::Int64)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:138`   |
|  +6.8% |   +57 | 74.2% → 62.8% | 836 → 893 | `Array`                                   | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:648`   |
| +50.0% |    +1 |          0.2% |     2 → 3 | `array_new_memory`                        | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:1101` |

##### `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:61`)

| Change | Delta |            % | Samples | Caller                                                                       | Location                                                                                     |
| -----: | ----: | -----------: | ------: | ---------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
|    new |  +246 | 0.0% → 98.8% | 0 → 246 | `foldl_impl`                                                                 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:46` |
|    new |    +3 |  0.0% → 1.2% |   0 → 3 | `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` | `<unknown>`                                                                                  |

##### `#write#79` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`)

|  Change | Delta |             % |       Samples | Caller               | Location                                                                                             |
| ------: | ----: | ------------: | ------------: | -------------------- | ---------------------------------------------------------------------------------------------------- |
|   +2.7% |  +184 | 99.7% → 99.9% | 6,863 → 7,047 | `[unknown function]` | `<unknown>`                                                                                          |
|  -50.0% |    -6 |   0.2% → 0.1% |        12 → 6 | `write`              | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:147` |
|  -40.0% |    -2 |  0.1% → <0.1% |         5 → 3 | `#write#79`          | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157` |
| removed |    -1 |  <0.1% → 0.0% |         1 → 0 | `#write#81`          | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`  |

##### `indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64, ::Int64)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`)

| Change | Delta |      % |       Samples | Caller      | Location                                                                                             |
| -----: | ----: | -----: | ------------: | ----------- | ---------------------------------------------------------------------------------------------------- |
|  +7.9% |  +167 | 100.0% | 2,127 → 2,294 | `#write#79` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157` |

##### `#write#81` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:185`)

| Change | Delta |             % | Samples | Caller               | Location    |
| -----: | ----: | ------------: | ------: | -------------------- | ----------- |
|    new |   +59 | 0.0% → 100.0% |  0 → 59 | `[unknown function]` | `<unknown>` |

##### `getindex` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:975`)

| Change | Delta |             % |   Samples | Caller                                                                                                                                                                                                                           | Location                                                                                             |
| -----: | ----: | ------------: | --------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| +19.2% |   +20 | 63.4% → 59.6% | 104 → 124 | `macro expansion`                                                                                                                                                                                                                | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:332` |
| +82.4% |   +14 | 10.4% → 14.9% |   17 → 31 | `var\"#write#98\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)`                                                          | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:340` |
| +10.5% |    +4 | 23.2% → 20.2% |   38 → 42 | `getindex`                                                                                                                                                                                                                       | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/subarray.jl:334`      |
| +80.0% |    +4 |   3.0% → 4.3% |     5 → 9 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:218`  |
|    new |    +1 |   0.0% → 0.5% |     0 → 1 | `var\"#read!#9\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Array}, ::Bool)`  | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:312`  |

##### `_setindex!` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:1025`)

| Change | Delta |             % |   Samples | Caller      | Location                                                                                      |
| -----: | ----: | ------------: | --------: | ----------- | --------------------------------------------------------------------------------------------- |
| +18.3% |   +40 | 95.2% → 95.9% | 218 → 258 | `setindex!` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:1020` |

##### `+` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:87`)

| Change | Delta |             % |   Samples | Caller                                                                                                                                                                                                                           | Location                                                                                              |
| -----: | ----: | ------------: | --------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| +41.4% |   +12 |  9.0% → 12.0% |   29 → 41 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:218`   |
| -45.8% |   -11 |   7.4% → 3.8% |   24 → 13 | `var\"#write#98\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)`                                                          | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:340`  |
|  -6.1% |    -7 | 35.3% → 31.3% | 114 → 107 | `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})`                                                                                               | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40`   |
| +11.3% |    +7 | 19.2% → 20.2% |   62 → 69 | `macro expansion`                                                                                                                                                                                                                | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:24`   |
| +17.6% |    +6 | 10.5% → 11.7% |   34 → 40 | `length_continued`                                                                                                                                                                                                               | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:559` |

##### `getvalue(::Type{JSON3.Array}, ::Base.CodeUnits{UInt8, String}, ::SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}, ::Int64, ::UInt64)` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:131`)

|  Change | Delta |             % | Samples | Caller               | Location                                                                                             |
| ------: | ----: | ------------: | ------: | -------------------- | ---------------------------------------------------------------------------------------------------- |
| +140.0% |   +14 | 83.3% → 85.7% | 10 → 24 | `getvalue`           | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:216` |
| +300.0% |    +3 |  8.3% → 14.3% |   1 → 4 | `foldl_impl`         | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:46`         |
| removed |    -1 |   8.3% → 0.0% |   1 → 0 | `[unknown function]` | `<unknown>`                                                                                          |

##### `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:87`)

| Change | Delta |             % | Samples | Caller                                                                                                                                                                                                                           | Location                                                                                            |
| -----: | ----: | ------------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| +57.1% |    +8 | 17.9% → 24.4% | 14 → 22 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:218` |
|  +4.7% |    +3 | 82.1% → 74.4% | 64 → 67 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)`                                                      | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:87`  |
|    new |    +1 |   0.0% → 1.1% |   0 → 1 | `var\"#read!#9\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Array}, ::Bool)`  | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:312` |

##### `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:218`)

| Change | Delta |             % |   Samples | Caller                                                                                                                                                                               | Location                                                                                            |
| -----: | ----: | ------------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------- |
|  +5.3% |   +11 | 99.0% → 98.6% | 206 → 217 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:218` |
| +50.0% |    +1 |   1.0% → 1.4% |     2 → 3 | `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)`                         | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:87`  |

##### `getindex` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:401`)

|  Change | Delta |             % | Samples | Caller                                    | Location                                                                                    |
| ------: | ----: | ------------: | ------: | ----------------------------------------- | ------------------------------------------------------------------------------------------- |
|  +29.6% |    +8 | 65.9% → 67.3% | 27 → 35 | `isslotempty`                             | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:134` |
|  +37.5% |    +3 | 19.5% → 21.2% |  8 → 11 | `rehash!(::Dict{Symbol, Int64}, ::Int64)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:138` |
| +150.0% |    +3 |   4.9% → 9.6% |   2 → 5 | `isslotfilled`                            | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:135` |
|  -75.0% |    -3 |   9.8% → 1.9% |   4 → 1 | `isslotmissing`                           | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:136` |

##### `write(::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:340`)

| Change | Delta |      % | Samples | Caller      | Location                                                                                             |
| -----: | ----: | -----: | ------: | ----------- | ---------------------------------------------------------------------------------------------------- |
| +27.8% |   +10 | 100.0% | 36 → 46 | `#write#79` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157` |

##### `memoryref` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:594`)

|  Change | Delta |              % | Samples | Caller       | Location                                                                                             |
| ------: | ----: | -------------: | ------: | ------------ | ---------------------------------------------------------------------------------------------------- |
| +137.5% |   +11 | 88.9% → 100.0% |  8 → 19 | `_setindex!` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/genericmemory.jl:262` |
| removed |    -1 |   11.1% → 0.0% |   1 → 0 | `Array`      | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:649`          |

##### `unsafe_string` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:130`)

| Change | Delta |      % |   Samples | Caller   | Location                                                                                              |
| -----: | ----: | -----: | --------: | -------- | ----------------------------------------------------------------------------------------------------- |
|  +7.5% |   +10 | 100.0% | 133 → 143 | `String` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:145` |

##### `macro expansion` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:23`)

| Change | Delta |             % | Samples | Caller                                                                                                                                                                                                                           | Location                                                                                            |
| -----: | ----: | ------------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| +45.0% |    +9 | 95.2% → 96.7% | 20 → 29 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:218` |

##### `var\"#write#84\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.BoolType, ::Vector{UInt8}, ::Int64, ::Int64, ::Bool)` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:209`)

| Change | Delta |             % | Samples | Caller                                                                     | Location                                                                                             |
| -----: | ----: | ------------: | ------: | -------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| +87.5% |    +7 | 50.0% → 60.0% |  8 → 15 | `write(::StructTypes.BoolType, ::Vector{UInt8}, ::Int64, ::Int64, ::Bool)` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:209` |
| +25.0% |    +2 | 50.0% → 40.0% |  8 → 10 | `#write#79`                                                                | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157` |

##### `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` (`<unknown>`)

|  Change | Delta |             % |   Samples | Caller               | Location                                                                                     |
| ------: | ----: | ------------: | --------: | -------------------- | -------------------------------------------------------------------------------------------- |
|   +6.5% |   +60 | 82.9% → 87.7% | 919 → 979 | `[unknown function]` | `<unknown>`                                                                                  |
|  -31.8% |   -54 | 15.3% → 10.4% | 170 → 116 | `MappingRF`          | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98` |
|     new |   +20 |   0.0% → 1.8% |    0 → 20 | `_foldl_impl`        | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:61` |
| removed |   -19 |   1.7% → 0.0% |    19 → 0 | `_foldl_impl`        | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60` |
|     new |    +1 |   0.0% → 0.1% |     0 → 1 | `foldl_impl`         | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:46` |

##### `_setindex!` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:339`)

|  Change | Delta |      % | Samples | Caller                                                | Location                                                                                    |
| ------: | ----: | -----: | ------: | ----------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| +266.7% |    +8 | 100.0% |  3 → 11 | `setindex!(::Dict{Symbol, Int64}, ::Int64, ::Symbol)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:356` |

##### `BottomRF` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:84`)

| Change | Delta |             % |   Samples | Caller               | Location                                                                                     |
| -----: | ----: | ------------: | --------: | -------------------- | -------------------------------------------------------------------------------------------- |
|  +3.6% |   +10 | 98.3% → 99.0% | 281 → 291 | `[unknown function]` | `<unknown>`                                                                                  |
| -40.0% |    -2 |   1.7% → 1.0% |     5 → 3 | `MappingRF`          | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98` |

##### `#write#81` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:200`)

| Change | Delta |             % |   Samples | Caller               | Location    |
| -----: | ----: | ------------: | --------: | -------------------- | ----------- |
|  +7.2% |    +8 | 99.1% → 99.2% | 111 → 119 | `[unknown function]` | `<unknown>` |

##### `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.False})` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:189`)

|  Change | Delta |             % | Samples | Caller                                                                                                                                                                      | Location                                                                                           |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| +250.0% |    +5 | 40.0% → 63.6% |   2 → 7 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:87` |
|  +33.3% |    +1 | 60.0% → 36.4% |   3 → 4 | `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)`                | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:87` |

##### `typeparser` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/Parsers/05lwR/src/floats.jl:152`)

|  Change | Delta |      % | Samples | Caller                                                                                                                | Location                                                                                                    |
| ------: | ----: | -----: | ------: | --------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| +250.0% |    +5 | 100.0% |   2 → 7 | `typeparser(::Type{Float64}, ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Int16, ::Parsers.Options)` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/Parsers/05lwR/src/components.jl:392` |

##### `unescape(::JSON3.PointerString)` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/strings.jl:48`)

|  Change | Delta |             % | Samples | Caller               | Location                                                                                             |
| ------: | ----: | ------------: | ------: | -------------------- | ---------------------------------------------------------------------------------------------------- |
|  +16.7% |    +3 | 94.7% → 87.5% | 18 → 21 | `getvalue`           | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:193` |
| +100.0% |    +1 |   5.3% → 8.3% |   1 → 2 | `[unknown function]` | `<unknown>`                                                                                          |
|     new |    +1 |   0.0% → 4.2% |   0 → 1 | `foldl_impl`         | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:46`         |

##### `Array` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:17`)

| Change | Delta |             % | Samples | Caller                                                                                                                                                    | Location                                                                                             |
| -----: | ----: | ------------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
|    new |    +4 | 0.0% → 100.0% |   0 → 4 | `getvalue(::Type{JSON3.Array}, ::Base.CodeUnits{UInt8, String}, ::SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}, ::Int64, ::UInt64)` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:131` |

##### `getvalue` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl`)

| Change | Delta |             % | Samples | Caller    | Location                                                                                            |
| -----: | ----: | ------------: | ------: | --------- | --------------------------------------------------------------------------------------------------- |
|  +8.0% |    +2 | 71.4% → 71.1% | 25 → 27 | `iterate` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:81` |
| +10.0% |    +1 | 28.6% → 28.9% | 10 → 11 | `iterate` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:78` |

##### `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:87`)

|  Change | Delta |             % | Samples | Caller                                                                                                                                                                                                                           | Location                                                                                            |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| +125.0% |    +5 | 25.0% → 47.4% |   4 → 9 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:218` |
|   -9.1% |    -1 | 68.8% → 52.6% | 11 → 10 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)`                                             | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:218` |
| removed |    -1 |   6.3% → 0.0% |   1 → 0 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Array}, ::Bool)`                                              | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:312` |

##### `getvalue` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:193`)

| Change | Delta |             % | Samples | Caller     | Location                                                                                             |
| -----: | ----: | ------------: | ------: | ---------- | ---------------------------------------------------------------------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `getvalue` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:218` |

##### `getvalue` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:184`)

|  Change | Delta |      % | Samples | Caller                                                                                                                             | Location                                                                                            |
| ------: | ----: | -----: | ------: | ---------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40` |

##### `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Array}, ::Bool)` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:312`)

|  Change | Delta |              % | Samples | Caller                                                                                                                                                                      | Location                                                                                           |
| ------: | ----: | -------------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
|     new |    +1 |   0.0% → 33.3% |   0 → 1 | `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)`                | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:87` |
| +100.0% |    +1 | 100.0% → 66.7% |   1 → 2 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:87` |

##### `__scale(::Type{Float64}, ::UInt64, ::Int64, ::Bool)` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/Parsers/05lwR/src/floats.jl:613`)

| Change | Delta |            % | Samples | Caller                                                                                                                                                       | Location                                                                                                |
| -----: | ----: | -----------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `scale`                                                                                                                                                      | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/Parsers/05lwR/src/floats.jl:579` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:87`      |

##### `write` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:147`)

| Change | Delta |             % | Samples | Caller      | Location                                                                                            |
| -----: | ----: | ------------: | ------: | ----------- | --------------------------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `#write#58` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:40` |

##### `unsafe_load` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/pointer.jl:151`)

| Change | Delta |      % |   Samples | Caller        | Location                                                                                       |
| -----: | ----: | -----: | --------: | ------------- | ---------------------------------------------------------------------------------------------- |
|  +1.3% |    +7 | 100.0% | 558 → 565 | `unsafe_load` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/pointer.jl:151` |

##### `<` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:83`)

|  Change | Delta |              % | Samples | Caller            | Location                                                                                         |
| ------: | ----: | -------------: | ------: | ----------------- | ------------------------------------------------------------------------------------------------ |
|  +38.1% |    +8 | 95.5% → 100.0% | 21 → 29 | `>`               | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/operators.jl:425` |
| removed |    -1 |    4.5% → 0.0% |   1 → 0 | `macro expansion` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/simdloop.jl:75`   |

##### `checkbounds` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/basic.jl:204`)

|  Change | Delta |      % | Samples | Caller        | Location                                                                                             |
| ------: | ----: | -----: | ------: | ------------- | ---------------------------------------------------------------------------------------------------- |
| +100.0% |    +5 | 100.0% |  5 → 10 | `checkbounds` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/basic.jl:212` |

##### `|` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:418`)

|  Change | Delta |             % | Samples | Caller      | Location                                                                                                |
| ------: | ----: | ------------: | ------: | ----------- | ------------------------------------------------------------------------------------------------------- |
|  +10.8% |    +7 | 87.8% → 92.3% | 65 → 72 | `string`    | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:88`     |
| removed |    -2 |   2.7% → 0.0% |   2 → 0 | `\|`        | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:1058`             |
| removed |    -1 |   1.4% → 0.0% |   1 → 0 | `parsefrac` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/Parsers/05lwR/src/floats.jl:496` |

##### `unsafe_string` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:125`)

|  Change | Delta |      % | Samples | Caller     | Location                                                                                             |
| ------: | ----: | -----: | ------: | ---------- | ---------------------------------------------------------------------------------------------------- |
| +100.0% |    +4 | 100.0% |   4 → 8 | `getvalue` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:195` |

##### `+(::UInt64, ::UInt64)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:87`)

| Change | Delta |             % | Samples | Caller                                                                       | Location    |
| -----: | ----: | ------------: | ------: | ---------------------------------------------------------------------------- | ----------- |
|    new |    +4 | 0.0% → 100.0% |   0 → 4 | `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` | `<unknown>` |

##### `_setindex!` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/genericmemory.jl:263`)

| Change | Delta |      % | Samples | Caller      | Location                                                                                             |
| -----: | ----: | -----: | ------: | ----------- | ---------------------------------------------------------------------------------------------------- |
| +15.8% |    +3 | 100.0% | 19 → 22 | `setindex!` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/genericmemory.jl:270` |

##### `resize!(::Vector{UInt8}, ::Int64)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:1533`)

| Change | Delta |            % | Samples | Caller     | Location                                                                                             |
| -----: | ----: | -----------: | ------: | ---------- | ---------------------------------------------------------------------------------------------------- |
|    new |    +3 | 0.0% → 75.0% |   0 → 3 | `getvalue` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:193` |

##### `rehash!(::Dict{Symbol, Int64}, ::Int64)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:138`)

|  Change | Delta |             % | Samples | Caller                                                                                                                             | Location                                                                                            |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
|  +25.0% |    +1 | 28.6% → 31.3% |   4 → 5 | `_setindex!`                                                                                                                       | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:339`         |
|  -33.3% |    -1 | 21.4% → 12.5% |   3 → 2 | `ht_keyindex2_shorthash!(::Dict{Symbol, Int64}, ::Symbol)`                                                                         | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:267`         |
|  +16.7% |    +1 | 42.9% → 43.8% |   6 → 7 | `setindex!(::Dict{Symbol, Int64}, ::Int64, ::Symbol)`                                                                              | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:356`         |
| +100.0% |    +1 |  7.1% → 12.5% |   1 → 2 | `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40` |

##### `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`)

| Change | Delta |              % |  Samples | Caller                                                                       | Location                                                                                     |
| -----: | ----: | -------------: | -------: | ---------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| -95.3% |  -263 | 100.0% → 92.9% | 276 → 13 | `foldl_impl`                                                                 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:46` |
|    new |    +1 |    0.0% → 7.1% |    0 → 1 | `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` | `<unknown>`                                                                                  |

##### `iterate` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:75`)

| Change | Delta |             % |  Samples | Caller                                                                                                                       | Location                                                                                             |
| -----: | ----: | ------------: | -------: | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| -64.5% |  -107 | 60.8% → 44.4% | 166 → 59 | `#write#79`                                                                                                                  | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157` |
| -78.6% |   -44 |  20.5% → 9.0% |  56 → 12 | `iterate`                                                                                                                    | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/iterators.jl:697`     |
| +27.1% |   +13 | 17.6% → 45.9% |  48 → 61 | `iterate`                                                                                                                    | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:75`  |
| -66.7% |    -2 |   1.1% → 0.8% |    3 → 1 | `isempty(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:1127`   |

##### `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`)

|  Change | Delta |             % | Samples | Caller               | Location    |
| ------: | ----: | ------------: | ------: | -------------------- | ----------- |
| removed |  -137 | 100.0% → 0.0% | 137 → 0 | `[unknown function]` | `<unknown>` |

##### `[unknown function]` (`<unknown>`)

|  Change | Delta |             % |   Samples | Caller        | Location                                                                                             |
| ------: | ----: | ------------: | --------: | ------------- | ---------------------------------------------------------------------------------------------------- |
|  -98.0% |   -96 |  33.7% → 0.9% |    98 → 2 | `_foldl_impl` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`         |
|     new |   +65 |  0.0% → 30.0% |    0 → 65 | `_foldl_impl` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:61`         |
| removed |   -50 |  17.2% → 0.0% |    50 → 0 | `#write#81`   | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`  |
|     new |   +29 |  0.0% → 13.4% |    0 → 29 | `#write#81`   | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:185` |
|  -19.0% |   -26 | 47.1% → 51.2% | 137 → 111 | `#write#79`   | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157` |

##### `parse_workload` (`./profile.jl:18`)

|  Change | Delta |              % | Samples | Caller            | Location                                                                                                          |
| ------: | ----: | -------------: | ------: | ----------------- | ----------------------------------------------------------------------------------------------------------------- |
|  -47.1% |   -40 | 98.8% → 100.0% | 85 → 45 | `macro expansion` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/stdlib/v1.13/Profile/src/Profile.jl:60` |
| removed |    -1 |    1.2% → 0.0% |   1 → 0 | `parse_workload`  | `./profile.jl:18`                                                                                                 |

##### `_symbol` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:1`)

| Change | Delta |      % |       Samples | Caller     | Location                                                                                             |
| -----: | ----: | -----: | ------------: | ---------- | ---------------------------------------------------------------------------------------------------- |
|  -0.5% |   -38 | 100.0% | 7,015 → 6,977 | `getvalue` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:187` |

##### `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{String})` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:142`)

| Change | Delta |             % |   Samples | Caller                                                                                                                                                                      | Location                                                                                           |
| -----: | ----: | ------------: | --------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| -21.7% |   -31 | 95.3% → 95.7% | 143 → 112 | `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)`                | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:87` |
| -28.6% |    -2 |   4.7% → 4.3% |     7 → 5 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:87` |

##### `unsafe_string` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:126`)

| Change | Delta |      % |  Samples | Caller     | Location                                                                                             |
| -----: | ----: | -----: | -------: | ---------- | ---------------------------------------------------------------------------------------------------- |
| -31.7% |   -33 | 100.0% | 104 → 71 | `getvalue` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:195` |

##### `indexed_iterate` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`)

|  Change | Delta |             % |   Samples | Caller                                                           | Location                                                                                             |
| ------: | ----: | ------------: | --------: | ---------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
|   -3.2% |   -32 | 66.9% → 66.2% | 998 → 966 | `indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`         |
|  -27.6% |   -21 |   5.1% → 3.8% |   76 → 55 | `indexed_iterate`                                                | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`         |
|   +4.6% |   +19 | 27.8% → 29.7% | 415 → 434 | `#write#79`                                                      | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157` |
|     new |    +5 |   0.0% → 0.3% |     0 → 5 | `#write#81`                                                      | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:185` |
| removed |    -3 |   0.2% → 0.0% |     3 → 0 | `#write#81`                                                      | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`  |

##### `iterate` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/range.jl`)

|  Change | Delta |             % | Samples | Caller      | Location                                                                                             |
| ------: | ----: | ------------: | ------: | ----------- | ---------------------------------------------------------------------------------------------------- |
|  -73.0% |   -27 | 94.9% → 90.9% | 37 → 10 | `#write#81` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:200` |
| removed |    -2 |   5.1% → 0.0% |   2 → 0 | `#write#81` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`  |
|     new |    +1 |   0.0% → 9.1% |   0 → 1 | `#write#81` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:185` |

##### `Dict` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:80`)

| Change | Delta |      % | Samples | Caller     | Location                                                                                             |
| -----: | ----: | -----: | ------: | ---------- | ---------------------------------------------------------------------------------------------------- |
| -29.5% |   -26 | 100.0% | 88 → 62 | `getvalue` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:126` |

##### `ht_keyindex2_shorthash!(::Dict{Symbol, Int64}, ::Symbol)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:267`)

| Change | Delta |             % |   Samples | Caller                                                                                                                             | Location                                                                                            |
| -----: | ----: | ------------: | --------: | ---------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| -17.5% |   -11 | 11.8% → 10.1% |   63 → 52 | `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40` |
|  -1.5% |    -7 | 88.2% → 89.9% | 469 → 462 | `setindex!(::Dict{Symbol, Int64}, ::Int64, ::Symbol)`                                                                              | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:356`         |

##### `setindex!(::Dict{Symbol, Int64}, ::Int64, ::Symbol)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:356`)

| Change | Delta |             % | Samples | Caller                                                                                                                             | Location                                                                                             |
| -----: | ----: | ------------: | ------: | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| -53.6% |   -15 | 33.3% → 19.4% | 28 → 13 | `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40`  |
|  -3.6% |    -2 | 66.7% → 80.6% | 56 → 54 | `getvalue`                                                                                                                         | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:127` |

##### `MappingRF` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98`)

|  Change | Delta |             % | Samples | Caller               | Location                                                                                     |
| ------: | ----: | ------------: | ------: | -------------------- | -------------------------------------------------------------------------------------------- |
| removed |   -11 |  44.0% → 0.0% |  11 → 0 | `_foldl_impl`        | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60` |
|  -69.2% |    -9 | 52.0% → 33.3% |  13 → 4 | `[unknown function]` | `<unknown>`                                                                                  |
|     new |    +8 |  0.0% → 66.7% |   0 → 8 | `_foldl_impl`        | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:61` |
| removed |    -1 |   4.0% → 0.0% |   1 → 0 | `_foldl_impl`        | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:56` |

##### `*` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:88`)

|  Change | Delta |             % | Samples | Caller       | Location                                                                                               |
| ------: | ----: | ------------: | ------: | ------------ | ------------------------------------------------------------------------------------------------------ |
|  -31.0% |   -13 | 91.3% → 87.9% | 42 → 29 | `_setindex!` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:337`            |
| +300.0% |    +3 |  2.2% → 12.1% |   1 → 4 | `typeparser` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/Parsers/05lwR/src/ints.jl:32`   |
| removed |    -3 |   6.5% → 0.0% |   3 → 0 | `_muladd`    | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/Parsers/05lwR/src/floats.jl:27` |

##### `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40`)

| Change | Delta |             % | Samples | Caller               | Location                                                                                             |
| -----: | ----: | ------------: | ------: | -------------------- | ---------------------------------------------------------------------------------------------------- |
| -54.2% |   -13 | 92.3% → 73.3% | 24 → 11 | `getvalue`           | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:127` |
|    new |    +3 |  0.0% → 20.0% |   0 → 3 | `[unknown function]` | `<unknown>`                                                                                          |
| -50.0% |    -1 |   7.7% → 6.7% |   2 → 1 | `foldl_impl`         | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:46`         |

##### `-(::Int64, ::Int64)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:86`)

| Change | Delta |      % | Samples | Caller      | Location                                                                                             |
| -----: | ----: | -----: | ------: | ----------- | ---------------------------------------------------------------------------------------------------- |
| -64.7% |   -11 | 100.0% |  17 → 6 | `#write#79` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157` |

##### `&` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:393`)

| Change | Delta |             % | Samples | Caller                                                     | Location                                                                                               |
| -----: | ----: | ------------: | ------: | ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| -16.7% |    -9 | 76.1% → 75.0% | 54 → 45 | `getnontypemask`                                           | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:114`   |
| -50.0% |    -1 |   2.8% → 1.7% |   2 → 1 | `getproperty`                                              | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/Parsers/05lwR/src/utils.jl:467` |
|  -6.7% |    -1 | 21.1% → 23.3% | 15 → 14 | `ht_keyindex2_shorthash!(::Dict{Symbol, Int64}, ::Symbol)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:267`            |

##### `length_continued` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/pointer.jl`)

| Change | Delta |      % |   Samples | Caller             | Location                                                                                              |
| -----: | ----: | -----: | --------: | ------------------ | ----------------------------------------------------------------------------------------------------- |
|  -8.3% |   -10 | 100.0% | 120 → 110 | `length(::String)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:540` |

##### `defaultminimum` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:6`)

| Change | Delta |      % | Samples | Caller                                                                       | Location    |
| -----: | ----: | -----: | ------: | ---------------------------------------------------------------------------- | ----------- |
| -40.0% |    -6 | 100.0% |  15 → 9 | `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` | `<unknown>` |

##### `var\"#read!#9\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Array}, ::Bool)` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:312`)

|  Change | Delta |              % | Samples | Caller                                                                                                                                                                              | Location                                                                                            |
| ------: | ----: | -------------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
|  -33.3% |    -3 | 81.8% → 100.0% |   9 → 6 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Array}, ::Bool)` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:312` |
| removed |    -2 |   18.2% → 0.0% |   2 → 0 | `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)`                        | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:87`  |

##### `var\"#write#98\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:340`)

| Change | Delta |             % | Samples | Caller                                                                         | Location                                                                                             |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------- |
| -20.7% |    -6 | 42.0% → 35.9% | 29 → 23 | `#write#79`                                                                    | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157` |
|  +2.5% |    +1 | 58.0% → 64.1% | 40 → 41 | `write(::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:340` |

##### `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Nothing})` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:204`)

|  Change | Delta |            % | Samples | Caller                                                                                                                                                       | Location                                                                                           |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------- |
| removed |    -4 | 57.1% → 0.0% |   4 → 0 | `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:87` |

##### `promoteeltype` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:106`)

|  Change | Delta |             % | Samples | Caller                                                                                                                                                                                                                           | Location                                                                                            |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:218` |

##### `promoteeltype` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl`)

|  Change | Delta |             % | Samples | Caller                                                                                                                                                                                                                           | Location                                                                                            |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:218` |

##### `typeparser(::Type{Float64}, ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Int16, ::Parsers.Options)` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/Parsers/05lwR/src/components.jl:392`)

|  Change | Delta |              % | Samples | Caller                                                                                                                                                                      | Location                                                                                           |
| ------: | ----: | -------------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| removed |    -3 |   33.3% → 0.0% |   3 → 0 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:87` |
|  +16.7% |    +1 | 66.7% → 100.0% |   6 → 7 | `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)`                | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:87` |

##### `gettape` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:25`)

|  Change | Delta |             % | Samples | Caller   | Location                                                                                            |
| ------: | ----: | ------------: | ------: | -------- | --------------------------------------------------------------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `length` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:38` |

##### `write(::StructTypes.BoolType, ::Vector{UInt8}, ::Int64, ::Int64, ::Bool)` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:209`)

| Change | Delta |      % | Samples | Caller      | Location                                                                                             |
| -----: | ----: | -----: | ------: | ----------- | ---------------------------------------------------------------------------------------------------- |
|  -5.9% |    -2 | 100.0% | 34 → 32 | `#write#79` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157` |

##### `getinds` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:26`)

|  Change | Delta |             % | Samples | Caller | Location                                                                                             |
| ------: | ----: | ------------: | ------: | ------ | ---------------------------------------------------------------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `size` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:146` |

##### `parsedigits` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/Parsers/05lwR/src/floats.jl`)

| Change | Delta |      % | Samples | Caller        | Location                                                                                                |
| -----: | ----: | -----: | ------: | ------------- | ------------------------------------------------------------------------------------------------------- |
| -18.2% |    -2 | 100.0% |  11 → 9 | `parsedigits` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/Parsers/05lwR/src/floats.jl:302` |

##### `Object` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:8`)

| Change | Delta |      % | Samples | Caller     | Location                                                                                             |
| -----: | ----: | -----: | ------: | ---------- | ---------------------------------------------------------------------------------------------------- |
| -50.0% |    -2 | 100.0% |   4 → 2 | `getvalue` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:126` |

##### `parsefrac` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/Parsers/05lwR/src/floats.jl:446`)

|  Change | Delta |             % | Samples | Caller        | Location                                                                                                |
| ------: | ----: | ------------: | ------: | ------------- | ------------------------------------------------------------------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `parsedigits` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/Parsers/05lwR/src/floats.jl:398` |

##### `getproperty` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/Parsers/05lwR/src/Parsers.jl:140`)

|  Change | Delta |             % | Samples | Caller           | Location                                                                                                 |
| ------: | ----: | ------------: | ------: | ---------------- | -------------------------------------------------------------------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `_has_groupmark` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/Parsers/05lwR/src/Parsers.jl:487` |

##### `getvalue` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:213`)

| Change | Delta |      % | Samples | Caller    | Location                                                                                            |
| -----: | ----: | -----: | ------: | --------- | --------------------------------------------------------------------------------------------------- |
|  -5.3% |    -1 | 100.0% | 19 → 18 | `iterate` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:81` |

##### `getvalue` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:215`)

| Change | Delta |      % | Samples | Caller    | Location                                                                                            |
| -----: | ----: | -----: | ------: | --------- | --------------------------------------------------------------------------------------------------- |
|  -1.1% |    -1 | 100.0% | 89 → 88 | `iterate` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:81` |

##### `==` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/promotion.jl:641`)

| Change | Delta |             % | Samples | Caller                                                                                                         | Location                                                                                            |
| -----: | ----: | ------------: | ------: | -------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| -23.1% |    -6 | 26.0% → 22.0% | 26 → 20 | `ht_keyindex2_shorthash!(::Dict{Symbol, Int64}, ::Symbol)`                                                     | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:267`         |
| -26.7% |    -4 | 15.0% → 12.1% | 15 → 11 | `isarray`                                                                                                      | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:61` |
|  +3.8% |    +2 | 53.0% → 60.4% | 53 → 55 | `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{String})` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:142` |
| -66.7% |    -2 |   3.0% → 1.1% |   3 → 1 | `!=`                                                                                                           | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/operators.jl:320`    |
|    new |    +1 |   0.0% → 1.1% |   0 → 1 | `isobject`                                                                                                     | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:60` |

##### `foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:46`)

| Change | Delta |      % | Samples | Caller          | Location                                                                                     |
| -----: | ----: | -----: | ------: | --------------- | -------------------------------------------------------------------------------------------- |
| -61.5% |    -8 | 100.0% |  13 → 5 | `mapfoldl_impl` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:42` |

##### `macro expansion` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/simdloop.jl`)

| Change | Delta |             % | Samples | Caller                                                                                                                                                                  | Location                                                                                             |
| -----: | ----: | ------------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| -33.3% |    -5 | 83.3% → 90.9% | 15 → 10 | `escapelength`                                                                                                                                                          | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:331` |
| -66.7% |    -2 |  16.7% → 9.1% |   3 → 1 | `var\"#write#98\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:340` |

##### `ncodeunits` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:161`)

| Change | Delta |             % | Samples | Caller                                                                                                                                                                  | Location                                                                                             |
| -----: | ----: | ------------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| -45.5% |    -5 | 64.7% → 60.0% |  11 → 6 | `var\"#write#98\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:340` |
| -33.3% |    -2 | 35.3% → 40.0% |   6 → 4 | `checkbounds`                                                                                                                                                           | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/basic.jl:204` |

##### `-` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:86`)

|  Change | Delta |             % | Samples | Caller                                                                                                                                                              | Location                                                                                             |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
|  -44.4% |    -4 | 52.9% → 45.5% |   9 → 5 | `var\"#write#84\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.BoolType, ::Vector{UInt8}, ::Int64, ::Int64, ::Bool)` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:209` |
| removed |    -1 |   5.9% → 0.0% |   1 → 0 | `-`                                                                                                                                                                 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:1058`          |
| removed |    -1 |   5.9% → 0.0% |   1 → 0 | `checkindex`                                                                                                                                                        | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/abstractarray.jl:757` |

##### `checkbounds` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/basic.jl:212`)

| Change | Delta |      % |   Samples | Caller     | Location                                                                                              |
| -----: | ----: | -----: | --------: | ---------- | ----------------------------------------------------------------------------------------------------- |
|  -3.6% |    -5 | 100.0% | 138 → 133 | `codeunit` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:166` |

##### `foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:47`)

|  Change | Delta |             % | Samples | Caller          | Location                                                                                     |
| ------: | ----: | ------------: | ------: | --------------- | -------------------------------------------------------------------------------------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `mapfoldl_impl` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:42` |

##### `#defaultminimum##0` (`<unknown>`)

| Change | Delta |      % | Samples | Caller               | Location    |
| -----: | ----: | -----: | ------: | -------------------- | ----------- |
| -66.7% |    -2 | 100.0% |   3 → 1 | `[unknown function]` | `<unknown>` |

##### `(::JSON3.var\"#defaultminimum##0#defaultminimum##1\"{JSON3.Array{Int64, Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}}})(::Int64)` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller      | Location                                                                                     |
| ------: | ----: | ------------: | ------: | ----------- | -------------------------------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `MappingRF` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98` |

### Total samples

#### Regressions

Functions with the largest increase in samples collected within the function and its callees. Categories account for at least 1.0% of self samples on the base or the current side.

|  Change |   Delta |             % |         Samples | Function                                                                  | Location                                                                                                          |
| ------: | ------: | ------------: | --------------: | ------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
|     new | +17,937 |  0.0% → 53.7% |      0 → 17,937 | `#write#81`                                                               | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:185`              |
|     new |  +5,451 |  0.0% → 16.3% |       0 → 5,451 | `_foldl_impl`                                                             | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:61`                      |
|  +26.2% |    +295 |   3.3% → 4.3% |   1,127 → 1,422 | `GenericMemory`                                                           | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:588`                       |
| +268.2% |    +287 |   0.3% → 1.2% |       107 → 394 | `_setindex!`                                                              | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:339`                       |
|  +75.0% |    +255 |   1.0% → 1.8% |       340 → 595 | `rehash!(::Dict{Symbol, Int64}, ::Int64)`                                 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:138`                       |
|   +1.3% |    +237 | 52.6% → 53.8% | 17,728 → 17,965 | `write`                                                                   | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:147`              |
|   +1.3% |    +234 | 52.6% → 53.8% | 17,732 → 17,966 | `#write#79`                                                               | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`              |
|  +20.3% |    +234 |   3.4% → 4.2% |   1,153 → 1,387 | `setindex!(::Dict{Symbol, Int64}, ::Int64, ::Symbol)`                     | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:356`                       |
|   +0.9% |    +217 | 70.9% → 72.2% | 23,882 → 24,099 | `#write#58`                                                               | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:40`               |
|   +0.7% |    +192 | 76.4% → 77.7% | 25,752 → 25,944 | `[unknown function]`                                                      | `<unknown>`                                                                                                       |
|   +0.7% |    +192 | 76.4% → 77.7% | 25,752 → 25,944 | `macro expansion`                                                         | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/stdlib/v1.13/Profile/src/Profile.jl:60` |
|   +0.7% |    +192 | 76.4% → 77.7% | 25,752 → 25,944 | `capture_cpu`                                                             | `./profile.jl:29`                                                                                                 |
|   +0.7% |    +192 | 76.4% → 77.7% | 25,752 → 25,944 | `eval(::Module, ::Any)`                                                   | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:489`                       |
|   +0.7% |    +192 | 76.4% → 77.7% | 25,752 → 25,944 | `include_string(::typeof(identity), ::Module, ::String, ::String)`        | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/loading.jl:2989`                   |
|   +0.7% |    +192 | 76.4% → 77.7% | 25,752 → 25,944 | `_include(::Function, ::Module, ::String)`                                | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/loading.jl:3083`                   |
|   +0.7% |    +192 | 76.4% → 77.7% | 25,752 → 25,944 | `include(::Module, ::String)`                                             | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base.jl:309`                       |
|   +0.7% |    +192 | 76.4% → 77.7% | 25,752 → 25,944 | `exec_options(::Base.JLOptions)`                                          | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/client.jl:234`                     |
|   +0.7% |    +192 | 76.4% → 77.7% | 25,752 → 25,944 | `_start()`                                                                | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/client.jl:570`                     |
|   +0.7% |    +191 | 76.4% → 77.7% | 25,753 → 25,944 | `parse_workload`                                                          | `./profile.jl:18`                                                                                                 |
|   +7.9% |    +167 |   6.3% → 6.9% |   2,127 → 2,294 | `indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64, ::Int64)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`                      |

##### Third-party

| Change |   Delta |             % |         Samples | Function                                                                                                                                                                                                                         | Location                                                                                             |
| -----: | ------: | ------------: | --------------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
|    new | +17,937 |  0.0% → 53.7% |      0 → 17,937 | `#write#81`                                                                                                                                                                                                                      | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:185` |
|  +1.3% |    +237 | 52.6% → 53.8% | 17,728 → 17,965 | `write`                                                                                                                                                                                                                          | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:147` |
|  +1.3% |    +234 | 52.6% → 53.8% | 17,732 → 17,966 | `#write#79`                                                                                                                                                                                                                      | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157` |
|  +0.9% |    +217 | 70.9% → 72.2% | 23,882 → 24,099 | `#write#58`                                                                                                                                                                                                                      | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:40`  |
|  +4.6% |    +160 | 10.4% → 10.9% |   3,490 → 3,650 | `getvalue`                                                                                                                                                                                                                       | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:214` |
|  +3.9% |    +152 | 11.7% → 12.3% |   3,938 → 4,090 | `iterate`                                                                                                                                                                                                                        | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:81`  |
|  +8.4% |    +111 |   3.9% → 4.3% |   1,316 → 1,427 | `write(::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)`                                                                                                                                                   | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:340` |
|  +7.3% |     +95 |   3.9% → 4.2% |   1,309 → 1,404 | `var\"#write#98\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)`                                                          | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:340` |
|  +2.8% |     +90 |  9.6% → 10.0% |   3,251 → 3,341 | `iterate`                                                                                                                                                                                                                        | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:78`  |
|  +1.7% |     +88 | 15.2% → 15.6% |   5,130 → 5,218 | `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})`                                                                                               | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40`  |
|  +1.7% |     +86 | 15.4% → 15.8% |   5,186 → 5,272 | `getvalue`                                                                                                                                                                                                                       | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:127` |
|  +4.3% |     +58 |   4.0% → 4.2% |   1,347 → 1,405 | `var\"#read#6\"(::Bool, ::Nothing, ::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.read), ::String)`                                                                                                       | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:30`   |
|  +4.3% |     +58 |   4.0% → 4.2% |   1,347 → 1,405 | `read`                                                                                                                                                                                                                           | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:30`   |
|  +3.9% |     +50 |   3.9% → 4.0% |   1,298 → 1,348 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)`                                                      | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:87`   |
|  +6.2% |     +49 |   2.4% → 2.5% |       793 → 842 | `realloc!(::Vector{UInt8}, ::Int64, ::Int64)`                                                                                                                                                                                    | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:51`  |
|  +3.7% |     +48 |   3.9% → 4.0% |   1,301 → 1,349 | `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)`                                                                     | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:87`   |
|  +3.7% |     +48 |   3.9% → 4.0% |   1,301 → 1,349 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:218`  |
|  +3.7% |     +48 |   3.9% → 4.0% |   1,302 → 1,350 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)`                                             | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:218`  |
|  +3.7% |     +48 |   3.8% → 4.0% |   1,297 → 1,345 | `var\"#read!#9\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Array}, ::Bool)`  | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:312`  |
|  +3.7% |     +48 |   3.8% → 4.0% |   1,297 → 1,345 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Array}, ::Bool)`                                              | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:312`  |

##### Standard library

|  Change |  Delta |             % |         Samples | Function                                                                  | Location                                                                                                          |
| ------: | -----: | ------------: | --------------: | ------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
|     new | +5,451 |  0.0% → 16.3% |       0 → 5,451 | `_foldl_impl`                                                             | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:61`                      |
|  +26.2% |   +295 |   3.3% → 4.3% |   1,127 → 1,422 | `GenericMemory`                                                           | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:588`                       |
| +268.2% |   +287 |   0.3% → 1.2% |       107 → 394 | `_setindex!`                                                              | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:339`                       |
|  +75.0% |   +255 |   1.0% → 1.8% |       340 → 595 | `rehash!(::Dict{Symbol, Int64}, ::Int64)`                                 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:138`                       |
|  +20.3% |   +234 |   3.4% → 4.2% |   1,153 → 1,387 | `setindex!(::Dict{Symbol, Int64}, ::Int64, ::Symbol)`                     | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:356`                       |
|   +0.7% |   +192 | 76.4% → 77.7% | 25,752 → 25,944 | `macro expansion`                                                         | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/stdlib/v1.13/Profile/src/Profile.jl:60` |
|   +0.7% |   +192 | 76.4% → 77.7% | 25,752 → 25,944 | `eval(::Module, ::Any)`                                                   | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:489`                       |
|   +0.7% |   +192 | 76.4% → 77.7% | 25,752 → 25,944 | `include_string(::typeof(identity), ::Module, ::String, ::String)`        | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/loading.jl:2989`                   |
|   +0.7% |   +192 | 76.4% → 77.7% | 25,752 → 25,944 | `_include(::Function, ::Module, ::String)`                                | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/loading.jl:3083`                   |
|   +0.7% |   +192 | 76.4% → 77.7% | 25,752 → 25,944 | `include(::Module, ::String)`                                             | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base.jl:309`                       |
|   +0.7% |   +192 | 76.4% → 77.7% | 25,752 → 25,944 | `exec_options(::Base.JLOptions)`                                          | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/client.jl:234`                     |
|   +0.7% |   +192 | 76.4% → 77.7% | 25,752 → 25,944 | `_start()`                                                                | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/client.jl:570`                     |
|   +7.9% |   +167 |   6.3% → 6.9% |   2,127 → 2,294 | `indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64, ::Int64)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`                      |
|   +3.3% |    +98 |   8.8% → 9.2% |   2,981 → 3,079 | `iterate`                                                                 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/iterators.jl:697`                  |
|   +6.8% |    +57 |   2.5% → 2.7% |       836 → 893 | `Array`                                                                   | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:648`                       |
|  +25.5% |    +55 |   0.6% → 0.8% |       216 → 271 | `macro expansion`                                                         | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/simdloop.jl:77`                    |
|   +6.1% |    +48 |   2.4% → 2.5% |       793 → 841 | `Array`                                                                   | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:661`                       |
|   +6.1% |    +48 |   2.4% → 2.5% |       793 → 841 | `zeros`                                                                   | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:626`                      |
|   +6.1% |    +48 |   2.4% → 2.5% |       793 → 841 | `zeros`                                                                   | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:622`                      |
|  +26.8% |    +44 |   0.5% → 0.6% |       164 → 208 | `getindex`                                                                | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:975`                 |

##### Native

| Change | Delta |             % |         Samples | Function                                                                                                                                                                                | Location    |
| -----: | ----: | ------------: | --------------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
|  +0.7% |  +192 | 76.4% → 77.7% | 25,752 → 25,944 | `[unknown function]`                                                                                                                                                                    | `<unknown>` |
| +50.0% |    +2 |         <0.1% |           4 → 6 | `(::JSON3.var\"#defaultminimum##0#defaultminimum##1\"{JSON3.Array{Int64, Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}}})(::Int64)` | `<unknown>` |

#### Improvements

Functions with the largest decrease in samples collected within the function and its callees. Categories account for at least 1.0% of self samples on the base or the current side.

|  Change |   Delta |             % |       Samples | Function                                                                                                       | Location                                                                                                 |
| ------: | ------: | ------------: | ------------: | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| removed | -17,687 |  52.5% → 0.0% |    17,687 → 0 | `#write#81`                                                                                                    | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`      |
|   -6.4% |    -507 | 23.6% → 22.3% | 7,943 → 7,436 | `(anonymous)`                                                                                                  | `<unknown>`                                                                                              |
|  -11.3% |    -108 |   2.8% → 2.5% |     954 → 846 | `iterate`                                                                                                      | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:75`      |
|   -5.7% |    -103 |   5.4% → 5.1% | 1,804 → 1,701 | `getindex`                                                                                                     | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:163`     |
|   -5.2% |     -52 |   3.0% → 2.8% |   1,002 → 950 | `isassigned`                                                                                                   | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:1641` |
|  -10.0% |     -44 |   1.3% → 1.2% |     438 → 394 | `length(::String)`                                                                                             | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:540`    |
|   -0.5% |     -38 | 20.8% → 20.9% | 7,015 → 6,977 | `_symbol`                                                                                                      | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:1`       |
|   -0.5% |     -38 | 20.8% → 20.9% | 7,015 → 6,977 | `getvalue`                                                                                                     | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:187`     |
|   -4.1% |     -35 |   2.5% → 2.4% |     847 → 812 | `ht_keyindex2_shorthash!(::Dict{Symbol, Int64}, ::Symbol)`                                                     | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:267`              |
|   -3.3% |     -33 |   3.0% → 2.9% |   1,002 → 969 | `indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64)`                                               | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`             |
|  -31.7% |     -33 |   0.3% → 0.2% |      104 → 71 | `unsafe_string`                                                                                                | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:126`    |
|   -2.1% |     -32 |          4.4% | 1,492 → 1,460 | `indexed_iterate`                                                                                              | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`             |
|  -26.9% |     -29 |   0.3% → 0.2% |      108 → 79 | `getvalue`                                                                                                     | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:126`     |
|  -25.9% |     -28 |   0.3% → 0.2% |      108 → 80 | `getvalue`                                                                                                     | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:195`     |
|  -71.8% |     -28 |  0.1% → <0.1% |       39 → 11 | `iterate`                                                                                                      | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/range.jl`                 |
|   -8.4% |     -27 |   1.0% → 0.9% |     323 → 296 | `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{String})` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:142`      |
|  -29.5% |     -26 |   0.3% → 0.2% |       88 → 62 | `Dict`                                                                                                         | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:80`               |
|   -0.3% |     -21 | 18.2% → 18.4% | 6,150 → 6,129 | `defaultminimum`                                                                                               | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:12`      |
|  -34.5% |     -19 |   0.2% → 0.1% |       55 → 36 | `length_continued`                                                                                             | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:564`    |
|  -12.8% |     -19 |          0.4% |     149 → 130 | `#write#81`                                                                                                    | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:200`     |

##### Third-party

| Change | Delta |             % |       Samples | Function                                                                                                              | Location                                                                                                    |
| -----: | ----: | ------------: | ------------: | --------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| -11.3% |  -108 |   2.8% → 2.5% |     954 → 846 | `iterate`                                                                                                             | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:75`         |
|  -5.7% |  -103 |   5.4% → 5.1% | 1,804 → 1,701 | `getindex`                                                                                                            | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:163`        |
|  -0.5% |   -38 | 20.8% → 20.9% | 7,015 → 6,977 | `_symbol`                                                                                                             | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:1`          |
|  -0.5% |   -38 | 20.8% → 20.9% | 7,015 → 6,977 | `getvalue`                                                                                                            | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:187`        |
| -26.9% |   -29 |   0.3% → 0.2% |      108 → 79 | `getvalue`                                                                                                            | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:126`        |
| -25.9% |   -28 |   0.3% → 0.2% |      108 → 80 | `getvalue`                                                                                                            | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:195`        |
|  -8.4% |   -27 |   1.0% → 0.9% |     323 → 296 | `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{String})`        | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:142`         |
|  -0.3% |   -21 | 18.2% → 18.4% | 6,150 → 6,129 | `defaultminimum`                                                                                                      | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:12`         |
| -12.8% |   -19 |          0.4% |     149 → 130 | `#write#81`                                                                                                           | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:200`        |
|  -6.1% |   -15 |          0.7% |     247 → 232 | `getvalue`                                                                                                            | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:218`        |
| -50.0% |   -10 |  0.1% → <0.1% |       20 → 10 | `length`                                                                                                              | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:38`         |
| -16.7% |    -9 |   0.2% → 0.1% |       54 → 45 | `getnontypemask`                                                                                                      | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:114`        |
| -14.3% |    -7 |          0.1% |       49 → 42 | `typeparser(::Type{Float64}, ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Int16, ::Parsers.Options)` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/Parsers/05lwR/src/components.jl:392` |
| -40.0% |    -6 |         <0.1% |        15 → 9 | `defaultminimum`                                                                                                      | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:6`          |
| -10.2% |    -6 |          0.2% |       59 → 53 | `write(::StructTypes.NumberType, ::Vector{UInt8}, ::Int64, ::Int64, ::Int64)`                                         | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:224`        |
| -17.2% |    -5 |          0.1% |       29 → 24 | `typeparser`                                                                                                          | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/Parsers/05lwR/src/floats.jl:270`     |
| -17.2% |    -5 |          0.1% |       29 → 24 | `parsedigits`                                                                                                         | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/Parsers/05lwR/src/floats.jl:302`     |
| -57.1% |    -4 |         <0.1% |         7 → 3 | `populateinds!`                                                                                                       | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:66`         |
| -26.7% |    -4 |         <0.1% |       15 → 11 | `isarray`                                                                                                             | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:61`         |
| -15.0% |    -3 |          0.1% |       20 → 17 | `iterate`                                                                                                             | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:82`         |

##### Standard library

|  Change |   Delta |             % |       Samples | Function                                                         | Location                                                                                                 |
| ------: | ------: | ------------: | ------------: | ---------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| removed | -17,687 |  52.5% → 0.0% |    17,687 → 0 | `#write#81`                                                      | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`      |
|   -5.2% |     -52 |   3.0% → 2.8% |   1,002 → 950 | `isassigned`                                                     | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:1641` |
|  -10.0% |     -44 |   1.3% → 1.2% |     438 → 394 | `length(::String)`                                               | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:540`    |
|   -4.1% |     -35 |   2.5% → 2.4% |     847 → 812 | `ht_keyindex2_shorthash!(::Dict{Symbol, Int64}, ::Symbol)`       | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:267`              |
|   -3.3% |     -33 |   3.0% → 2.9% |   1,002 → 969 | `indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`             |
|  -31.7% |     -33 |   0.3% → 0.2% |      104 → 71 | `unsafe_string`                                                  | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:126`    |
|   -2.1% |     -32 |          4.4% | 1,492 → 1,460 | `indexed_iterate`                                                | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`             |
|  -71.8% |     -28 |  0.1% → <0.1% |       39 → 11 | `iterate`                                                        | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/range.jl`                 |
|  -29.5% |     -26 |   0.3% → 0.2% |       88 → 62 | `Dict`                                                           | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:80`               |
|  -34.5% |     -19 |   0.2% → 0.1% |       55 → 36 | `length_continued`                                               | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:564`    |
|   -0.3% |     -17 | 18.2% → 18.4% | 6,146 → 6,129 | `_foldl_impl`                                                    | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:56`             |
|   -0.3% |     -17 | 18.2% → 18.4% | 6,146 → 6,129 | `foldl_impl`                                                     | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:46`             |
|   -0.3% |     -17 | 18.2% → 18.4% | 6,146 → 6,129 | `mapfoldl_impl`                                                  | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:42`             |
|   -0.3% |     -17 | 18.2% → 18.4% | 6,146 → 6,129 | `#mapfoldl#271`                                                  | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:173`            |
|   -0.3% |     -17 | 18.2% → 18.4% | 6,146 → 6,129 | `mapfoldl`                                                       | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:173`            |
|   -0.3% |     -17 | 18.2% → 18.4% | 6,146 → 6,129 | `#mapreduce#275`                                                 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:306`            |
|   -0.3% |     -17 | 18.2% → 18.4% | 6,146 → 6,129 | `mapreduce`                                                      | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:306`            |
|   -0.3% |     -17 | 18.2% → 18.4% | 6,146 → 6,129 | `#sum#278`                                                       | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:535`            |
|   -0.3% |     -17 | 18.2% → 18.4% | 6,146 → 6,129 | `sum`                                                            | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:535`            |
|   -0.3% |     -17 | 18.2% → 18.4% | 6,146 → 6,129 | `sum`                                                            | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:564`            |

##### Unknown

| Change | Delta |             % |       Samples | Function      | Location    |
| -----: | ----: | ------------: | ------------: | ------------- | ----------- |
|  -6.4% |  -507 | 23.6% → 22.3% | 7,943 → 7,436 | `(anonymous)` | `<unknown>` |

##### Native

| Change | Delta |             % |       Samples | Function                                                                     | Location    |
| -----: | ----: | ------------: | ------------: | ---------------------------------------------------------------------------- | ----------- |
|  -0.2% |   -11 | 18.2% → 18.3% | 6,133 → 6,122 | `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` | `<unknown>` |
|  -0.2% |   -10 | 18.1% → 18.3% | 6,112 → 6,102 | `#defaultminimum##0`                                                         | `<unknown>` |

#### Callees

Callees with the largest change in contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `#write#81` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:185`)

| Change |   Delta |            % |    Samples | Callee               | Location                                                                                                 |
| -----: | ------: | -----------: | ---------: | -------------------- | -------------------------------------------------------------------------------------------------------- |
|    new | +17,197 | 0.0% → 95.9% | 0 → 17,197 | `[unknown function]` | `<unknown>`                                                                                              |
|    new |    +519 |  0.0% → 2.9% |    0 → 519 | `isassigned`         | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:1641` |
|    new |    +410 |  0.0% → 2.3% |    0 → 410 | `getindex`           | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:163`     |
|    new |      +8 | 0.0% → <0.1% |      0 → 8 | `indexed_iterate`    | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`             |
|    new |      +3 | 0.0% → <0.1% |      0 → 3 | `isassigned`         | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:1642` |

##### `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:61`)

| Change |  Delta |            % |   Samples | Callee                                                                       | Location                                                                                            |
| -----: | -----: | -----------: | --------: | ---------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
|    new | +4,073 | 0.0% → 74.7% | 0 → 4,073 | `[unknown function]`                                                         | `<unknown>`                                                                                         |
|    new | +3,074 | 0.0% → 56.4% | 0 → 3,074 | `iterate`                                                                    | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/iterators.jl:697`    |
|    new |   +351 |  0.0% → 6.4% |   0 → 351 | `MappingRF`                                                                  | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98`        |
|    new |   +207 |  0.0% → 3.8% |   0 → 207 | `iterate`                                                                    | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:75` |
|    new |    +20 |  0.0% → 0.4% |    0 → 20 | `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` | `<unknown>`                                                                                         |

##### `GenericMemory` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:588`)

| Change | Delta |           % | Samples | Callee                                    | Location                                                                                    |
| -----: | ----: | ----------: | ------: | ----------------------------------------- | ------------------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 0.1% |   0 → 1 | `rehash!(::Dict{Symbol, Int64}, ::Int64)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:138` |

##### `_setindex!` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:339`)

|  Change | Delta |     % |   Samples | Callee                                    | Location                                                                                    |
| ------: | ----: | ----: | --------: | ----------------------------------------- | ------------------------------------------------------------------------------------------- |
| +268.3% |  +279 | 97.2% | 104 → 383 | `rehash!(::Dict{Symbol, Int64}, ::Int64)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:138` |

##### `rehash!(::Dict{Symbol, Int64}, ::Int64)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:138`)

|  Change | Delta |             % |   Samples | Callee          | Location                                                                                             |
| ------: | ----: | ------------: | --------: | --------------- | ---------------------------------------------------------------------------------------------------- |
|  +82.0% |  +237 | 85.0% → 88.4% | 289 → 526 | `GenericMemory` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:588`          |
| +130.0% |   +13 |   2.9% → 3.9% |   10 → 23 | `setindex!`     | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/genericmemory.jl:270` |
|  +37.5% |    +3 |   2.4% → 1.8% |    8 → 11 | `getindex`      | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:401`    |
|  +33.3% |    +1 |   0.9% → 0.7% |     3 → 4 | `fill!`         | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/genericmemory.jl:222` |
| removed |    -1 |   0.3% → 0.0% |     1 → 0 | `iterate`       | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/range.jl:928`         |

##### `write` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:147`)

| Change | Delta |      % |         Samples | Callee      | Location                                                                                             |
| -----: | ----: | -----: | --------------: | ----------- | ---------------------------------------------------------------------------------------------------- |
|  +1.3% |  +236 | 100.0% | 17,728 → 17,964 | `#write#79` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157` |

##### `#write#79` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`)

| Change | Delta |             % |         Samples | Callee                                                                         | Location                                                                                             |
| -----: | ----: | ------------: | --------------: | ------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------- |
|  +1.3% |  +238 |         99.9% | 17,706 → 17,944 | `[unknown function]`                                                           | `<unknown>`                                                                                          |
|  +7.9% |  +167 | 12.0% → 12.8% |   2,127 → 2,294 | `indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64, ::Int64)`      | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`         |
|  +5.8% |  +111 | 10.8% → 11.3% |   1,913 → 2,024 | `iterate`                                                                      | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:81`  |
|  +8.4% |  +111 |   7.4% → 7.9% |   1,316 → 1,427 | `write(::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:340` |
| -19.6% |   -95 |   2.7% → 2.2% |       485 → 390 | `iterate`                                                                      | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:75`  |

##### `setindex!(::Dict{Symbol, Int64}, ::Int64, ::Symbol)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:356`)

|  Change | Delta |             % |   Samples | Callee                                                     | Location                                                                                    |
| ------: | ----: | ------------: | --------: | ---------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| +268.2% |  +287 |  9.3% → 28.4% | 107 → 394 | `_setindex!`                                               | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:339` |
|   -3.1% |   -24 | 68.0% → 54.8% | 784 → 760 | `ht_keyindex2_shorthash!(::Dict{Symbol, Int64}, ::Symbol)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:267` |
|  -61.9% |   -13 |   1.8% → 0.6% |    21 → 8 | `_setindex!`                                               | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:325` |
|  -27.9% |   -12 |   3.7% → 2.2% |   43 → 31 | `_setindex!`                                               | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:337` |
|  +63.6% |    +7 |   1.0% → 1.3% |   11 → 18 | `_setindex!`                                               | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:327` |

##### `#write#58` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:40`)

| Change | Delta |             % |         Samples | Callee           | Location                                                                                             |
| -----: | ----: | ------------: | --------------: | ---------------- | ---------------------------------------------------------------------------------------------------- |
|  +1.3% |  +237 | 74.2% → 74.5% | 17,728 → 17,965 | `write`          | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:147` |
|  -0.3% |   -21 | 25.8% → 25.4% |   6,150 → 6,129 | `defaultminimum` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:12`  |

##### `[unknown function]` (`<unknown>`)

|  Change |   Delta |             % |         Samples | Callee        | Location                                                                                             |
| ------: | ------: | ------------: | --------------: | ------------- | ---------------------------------------------------------------------------------------------------- |
|     new | +17,937 |  0.0% → 69.1% |      0 → 17,937 | `#write#81`   | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:185` |
| removed | -17,687 |  68.7% → 0.0% |      17,687 → 0 | `#write#81`   | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`  |
|   +1.8% |    +300 | 65.5% → 66.2% | 16,880 → 17,180 | `#write#79`   | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157` |
|   +0.9% |    +217 | 92.7% → 92.9% | 23,882 → 24,099 | `#write#58`   | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:40`  |
|   +0.7% |    +192 |        100.0% | 25,752 → 25,944 | `capture_cpu` | `./profile.jl:29`                                                                                    |

##### `macro expansion` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/stdlib/v1.13/Profile/src/Profile.jl:60`)

| Change | Delta |      % |         Samples | Callee           | Location          |
| -----: | ----: | -----: | --------------: | ---------------- | ----------------- |
|  +0.7% |  +192 | 100.0% | 25,752 → 25,944 | `parse_workload` | `./profile.jl:18` |

##### `capture_cpu` (`./profile.jl:29`)

| Change | Delta |      % |         Samples | Callee            | Location                                                                                                          |
| -----: | ----: | -----: | --------------: | ----------------- | ----------------------------------------------------------------------------------------------------------------- |
|  +0.7% |  +192 | 100.0% | 25,752 → 25,944 | `macro expansion` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/stdlib/v1.13/Profile/src/Profile.jl:60` |

##### `eval(::Module, ::Any)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:489`)

| Change | Delta |      % |         Samples | Callee               | Location    |
| -----: | ----: | -----: | --------------: | -------------------- | ----------- |
|  +0.7% |  +192 | 100.0% | 25,752 → 25,944 | `[unknown function]` | `<unknown>` |

##### `include_string(::typeof(identity), ::Module, ::String, ::String)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/loading.jl:2989`)

| Change | Delta |      % |         Samples | Callee                  | Location                                                                                    |
| -----: | ----: | -----: | --------------: | ----------------------- | ------------------------------------------------------------------------------------------- |
|  +0.7% |  +192 | 100.0% | 25,752 → 25,944 | `eval(::Module, ::Any)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:489` |

##### `_include(::Function, ::Module, ::String)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/loading.jl:3083`)

| Change | Delta |      % |         Samples | Callee                                                             | Location                                                                                        |
| -----: | ----: | -----: | --------------: | ------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------- |
|  +0.7% |  +192 | 100.0% | 25,752 → 25,944 | `include_string(::typeof(identity), ::Module, ::String, ::String)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/loading.jl:2989` |

##### `include(::Module, ::String)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base.jl:309`)

| Change | Delta |      % |         Samples | Callee                                     | Location                                                                                        |
| -----: | ----: | -----: | --------------: | ------------------------------------------ | ----------------------------------------------------------------------------------------------- |
|  +0.7% |  +192 | 100.0% | 25,752 → 25,944 | `_include(::Function, ::Module, ::String)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/loading.jl:3083` |

##### `exec_options(::Base.JLOptions)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/client.jl:234`)

| Change | Delta |      % |         Samples | Callee                        | Location                                                                                    |
| -----: | ----: | -----: | --------------: | ----------------------------- | ------------------------------------------------------------------------------------------- |
|  +0.7% |  +192 | 100.0% | 25,752 → 25,944 | `include(::Module, ::String)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base.jl:309` |

##### `_start()` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/client.jl:570`)

| Change | Delta |      % |         Samples | Callee                           | Location                                                                                      |
| -----: | ----: | -----: | --------------: | -------------------------------- | --------------------------------------------------------------------------------------------- |
|  +0.7% |  +192 | 100.0% | 25,752 → 25,944 | `exec_options(::Base.JLOptions)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/client.jl:234` |

##### `parse_workload` (`./profile.jl:18`)

|  Change | Delta |             % |         Samples | Callee               | Location                                                                                              |
| ------: | ----: | ------------: | --------------: | -------------------- | ----------------------------------------------------------------------------------------------------- |
|   +0.9% |  +218 | 92.7% → 92.9% | 23,882 → 24,100 | `[unknown function]` | `<unknown>`                                                                                           |
|   +4.3% |   +58 |   5.2% → 5.4% |   1,347 → 1,405 | `read`               | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:30`    |
|  -10.0% |   -44 |   1.7% → 1.5% |       438 → 394 | `length(::String)`   | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:540` |
| removed |    -1 |  <0.1% → 0.0% |           1 → 0 | `parse_workload`     | `./profile.jl:18`                                                                                     |

##### `getvalue` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:214`)

| Change | Delta |             % |       Samples | Callee     | Location                                                                                             |
| -----: | ----: | ------------: | ------------: | ---------- | ---------------------------------------------------------------------------------------------------- |
|  +3.9% |  +136 | 98.8% → 98.2% | 3,448 → 3,584 | `getvalue` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:127` |
| +57.1% |   +24 |   1.2% → 1.8% |       42 → 66 | `getvalue` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:126` |

##### `iterate` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:81`)

| Change | Delta |             % |       Samples | Callee     | Location                                                                                             |
| -----: | ----: | ------------: | ------------: | ---------- | ---------------------------------------------------------------------------------------------------- |
|  +4.6% |  +160 | 88.6% → 89.2% | 3,490 → 3,650 | `getvalue` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:214` |
|  -6.1% |   -15 |   6.3% → 5.7% |     247 → 232 | `getvalue` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:218` |
| +15.5% |    +9 |   1.5% → 1.6% |       58 → 67 | `getvalue` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:216` |
|  +8.0% |    +2 |   0.6% → 0.7% |       25 → 27 | `getvalue` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl`     |
|  -5.3% |    -1 |   0.5% → 0.4% |       19 → 18 | `getvalue` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:213` |

##### `write(::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:340`)

| Change | Delta |             % |       Samples | Callee                                                                                                                                                                  | Location                                                                                             |
| -----: | ----: | ------------: | ------------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
|  +7.9% |  +101 | 97.3% → 96.8% | 1,280 → 1,381 | `var\"#write#98\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:340` |

##### `var\"#write#98\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:340`)

| Change | Delta |             % |   Samples | Callee                                        | Location                                                                                             |
| -----: | ----: | ------------: | --------: | --------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
|  +5.8% |   +46 | 60.4% → 59.6% | 791 → 837 | `realloc!(::Vector{UInt8}, ::Int64, ::Int64)` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:51`  |
| +29.7% |   +27 |   7.0% → 8.4% |  91 → 118 | `macro expansion`                             | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/simdloop.jl:77`       |
|  +9.7% |   +19 | 15.0% → 15.3% | 196 → 215 | `escapelength`                                | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:331` |
| +82.4% |   +14 |   1.3% → 2.2% |   17 → 31 | `getindex`                                    | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:975`    |
| -45.8% |   -11 |   1.8% → 0.9% |   24 → 13 | `+`                                           | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:87`            |

##### `iterate` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:78`)

| Change | Delta |             % |       Samples | Callee     | Location                                                                                             |
| -----: | ----: | ------------: | ------------: | ---------- | ---------------------------------------------------------------------------------------------------- |
|  +2.9% |   +92 | 99.1% → 99.2% | 3,223 → 3,315 | `getvalue` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:187` |
|  -7.1% |    -2 |   0.9% → 0.8% |       28 → 26 | `getvalue` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl`     |

##### `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40`)

| Change | Delta |             % |       Samples | Callee                                                     | Location                                                                                             |
| -----: | ----: | ------------: | ------------: | ---------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| +21.4% |  +235 | 21.4% → 25.5% | 1,097 → 1,332 | `setindex!(::Dict{Symbol, Int64}, ::Int64, ::Symbol)`      | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:356`          |
|  -3.4% |  -129 | 73.9% → 70.2% | 3,790 → 3,661 | `getvalue`                                                 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:187` |
| -17.5% |   -11 |   1.2% → 1.0% |       63 → 52 | `ht_keyindex2_shorthash!(::Dict{Symbol, Int64}, ::Symbol)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:267`          |
|  -6.1% |    -7 |   2.2% → 2.1% |     114 → 107 | `+`                                                        | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:87`            |
|  +9.4% |    +3 |   0.6% → 0.7% |       32 → 35 | `getindex`                                                 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/subarray.jl:334`      |

##### `getvalue` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:127`)

| Change | Delta |           % |       Samples | Callee                                                                                                                             | Location                                                                                            |
| -----: | ----: | ----------: | ------------: | ---------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
|  +1.7% |   +87 |       98.9% | 5,127 → 5,214 | `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40` |
|  -3.6% |    -2 | 1.1% → 1.0% |       56 → 54 | `setindex!(::Dict{Symbol, Int64}, ::Int64, ::Symbol)`                                                                              | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:356`         |

##### `var\"#read#6\"(::Bool, ::Nothing, ::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.read), ::String)` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:30`)

| Change | Delta |             % |       Samples | Callee  | Location                                                                                           |
| -----: | ----: | ------------: | ------------: | ------- | -------------------------------------------------------------------------------------------------- |
|  +3.7% |   +48 | 96.7% → 96.1% | 1,302 → 1,350 | `read!` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:87` |
| +26.2% |   +11 |   3.1% → 3.8% |       42 → 53 | `Array` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:648`        |

##### `read` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:30`)

| Change | Delta |      % |       Samples | Callee                                                                                                                     | Location                                                                                           |
| -----: | ----: | -----: | ------------: | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
|  +4.3% |   +58 | 100.0% | 1,347 → 1,405 | `var\"#read#6\"(::Bool, ::Nothing, ::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.read), ::String)` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:30` |

##### `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:87`)

|  Change | Delta |           % |       Samples | Callee                                                                                                                                                                              | Location                                                                                                    |
| ------: | ----: | ----------: | ------------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
|   +3.9% |   +50 |      100.0% | 1,298 → 1,348 | `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)`                        | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:87`          |
| +250.0% |    +5 | 0.2% → 0.5% |         2 → 7 | `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.False})`                                                                 | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:189`         |
| removed |    -3 | 0.2% → 0.0% |         3 → 0 | `typeparser(::Type{Float64}, ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Int16, ::Parsers.Options)`                                                               | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/Parsers/05lwR/src/components.jl:392` |
|  -28.6% |    -2 | 0.5% → 0.4% |         7 → 5 | `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{String})`                                                                      | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:142`         |
| +100.0% |    +1 |        0.1% |         1 → 2 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Array}, ::Bool)` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:312`         |

##### `realloc!(::Vector{UInt8}, ::Int64, ::Int64)` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:51`)

| Change | Delta |              % |   Samples | Callee  | Location                                                                                        |
| -----: | ----: | -------------: | --------: | ------- | ----------------------------------------------------------------------------------------------- |
|  +6.1% |   +48 | 100.0% → 99.9% | 793 → 841 | `zeros` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:622`    |
|    new |    +1 |    0.0% → 0.1% |     0 → 1 | `trunc` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/rounding.jl:483` |

##### `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:87`)

| Change | Delta |             % |       Samples | Callee                                                                                                                                                                               | Location                                                                                                    |
| -----: | ----: | ------------: | ------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------- |
|  +3.7% |   +48 |        100.0% | 1,301 → 1,349 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:218`         |
|  +3.7% |   +48 |         99.7% | 1,297 → 1,345 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Array}, ::Bool)`  | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:312`         |
|  -7.9% |   -25 | 24.3% → 21.6% |     316 → 291 | `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{String})`                                                                       | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:142`         |
| +57.9% |   +11 |   1.5% → 2.2% |       19 → 30 | `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.False})`                                                                  | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:189`         |
|  -8.7% |    -4 |   3.5% → 3.1% |       46 → 42 | `typeparser(::Type{Float64}, ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Int16, ::Parsers.Options)`                                                                | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/Parsers/05lwR/src/components.jl:392` |

##### `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:218`)

| Change | Delta |             % |       Samples | Callee                                                                                                                                                                      | Location                                                                                            |
| -----: | ----: | ------------: | ------------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
|  +3.9% |   +50 | 99.8% → 99.9% | 1,298 → 1,348 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:87`  |
| +41.4% |   +12 |   2.2% → 3.0% |       29 → 41 | `+`                                                                                                                                                                         | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:87`           |
|  +9.6% |   +10 |   8.0% → 8.5% |     104 → 114 | `macro expansion`                                                                                                                                                           | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:29` |
| +45.0% |    +9 |   1.5% → 2.1% |       20 → 29 | `macro expansion`                                                                                                                                                           | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:23` |
| +18.2% |    +8 |   3.4% → 3.9% |       44 → 52 | `string`                                                                                                                                                                    | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:88` |

##### `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:218`)

| Change | Delta |           % |       Samples | Callee                                                                                                                                                                                                                           | Location                                                                                            |
| -----: | ----: | ----------: | ------------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
|  +3.7% |   +48 |       99.9% | 1,301 → 1,349 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:218` |
|  -9.1% |    -1 | 0.8% → 0.7% |       11 → 10 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)`                                                      | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:87`  |

##### `var\"#read!#9\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Array}, ::Bool)` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:312`)

|  Change | Delta |             % |       Samples | Callee                                                                                                                                                                      | Location                                                                                            |
| ------: | ----: | ------------: | ------------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
|   +3.8% |   +49 | 99.8% → 99.9% | 1,295 → 1,344 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:87`  |
| +200.0% |    +4 |   0.2% → 0.4% |         2 → 6 | `setindex!`                                                                                                                                                                 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:1020`       |
|  -33.3% |    -2 |   0.5% → 0.3% |         6 → 4 | `macro expansion`                                                                                                                                                           | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:29` |
|  +50.0% |    +2 |   0.3% → 0.4% |         4 → 6 | `macro expansion`                                                                                                                                                           | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:24` |
| removed |    -1 |   0.1% → 0.0% |         1 → 0 | `length`                                                                                                                                                                    | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:11`    |

##### `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Array}, ::Bool)` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:312`)

|  Change | Delta |           % |       Samples | Callee                                                                                                                                                                                                                          | Location                                                                                            |
| ------: | ----: | ----------: | ------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
|   +3.7% |   +48 |      100.0% | 1,297 → 1,345 | `var\"#read!#9\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Array}, ::Bool)` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:312` |
| removed |    -1 | 0.1% → 0.0% |         1 → 0 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)`                                                     | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:87`  |

##### `iterate` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/iterators.jl:697`)

|  Change | Delta |             % |       Samples | Callee    | Location                                                                                            |
| ------: | ----: | ------------: | ------------: | --------- | --------------------------------------------------------------------------------------------------- |
|  +10.1% |  +123 | 41.0% → 43.7% | 1,222 → 1,345 | `iterate` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:78` |
|  -78.9% |   -45 |   1.9% → 0.4% |       57 → 12 | `iterate` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:75` |
|  -15.3% |   -19 |   4.2% → 3.4% |     124 → 105 | `iterate` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/iterators.jl:697`    |
|   +0.6% |   +10 | 56.6% → 55.1% | 1,687 → 1,697 | `iterate` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:81` |
| +500.0% |    +5 |  <0.1% → 0.2% |         1 → 6 | `iterate` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:77` |

##### `Array` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:648`)

| Change | Delta |      % |   Samples | Callee          | Location                                                                                    |
| -----: | ----: | -----: | --------: | --------------- | ------------------------------------------------------------------------------------------- |
|  +6.8% |   +57 | 100.0% | 836 → 893 | `GenericMemory` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:588` |

##### `macro expansion` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/simdloop.jl:77`)

| Change | Delta |             % |   Samples | Callee            | Location                                                                                             |
| -----: | ----: | ------------: | --------: | ----------------- | ---------------------------------------------------------------------------------------------------- |
| +25.0% |   +29 | 53.7% → 53.5% | 116 → 145 | `macro expansion` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:332` |
| +29.7% |   +27 | 42.1% → 43.5% |  91 → 118 | `macro expansion` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:355` |
| -11.1% |    -1 |   4.2% → 3.0% |     9 → 8 | `macro expansion` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:333` |

##### `Array` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:661`)

| Change | Delta |     % |   Samples | Callee  | Location                                                                                    |
| -----: | ----: | ----: | --------: | ------- | ------------------------------------------------------------------------------------------- |
|  +6.1% |   +48 | 99.9% | 792 → 840 | `Array` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:648` |

##### `zeros` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:626`)

| Change | Delta |      % |   Samples | Callee  | Location                                                                                    |
| -----: | ----: | -----: | --------: | ------- | ------------------------------------------------------------------------------------------- |
|  +6.1% |   +48 | 100.0% | 793 → 841 | `Array` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:661` |

##### `zeros` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:622`)

| Change | Delta |      % |   Samples | Callee  | Location                                                                                     |
| -----: | ----: | -----: | --------: | ------- | -------------------------------------------------------------------------------------------- |
|  +6.1% |   +48 | 100.0% | 793 → 841 | `zeros` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:626` |

##### `(::JSON3.var\"#defaultminimum##0#defaultminimum##1\"{JSON3.Array{Int64, Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}}})(::Int64)` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee       | Location                                                                                                 |
| ------: | ----: | ------------: | ------: | ------------ | -------------------------------------------------------------------------------------------------------- |
| +400.0% |    +4 | 25.0% → 83.3% |   1 → 5 | `isassigned` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:1640` |
| removed |    -1 |  25.0% → 0.0% |   1 → 0 | `isassigned` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:1632` |

##### `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`)

|  Change |   Delta |            % |    Samples | Callee               | Location                                                                                                 |
| ------: | ------: | -----------: | ---------: | -------------------- | -------------------------------------------------------------------------------------------------------- |
| removed | -16,898 | 95.5% → 0.0% | 16,898 → 0 | `[unknown function]` | `<unknown>`                                                                                              |
| removed |    -538 |  3.0% → 0.0% |    538 → 0 | `isassigned`         | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:1641` |
| removed |    -402 |  2.3% → 0.0% |    402 → 0 | `getindex`           | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:163`     |
| removed |      -7 | <0.1% → 0.0% |      7 → 0 | `indexed_iterate`    | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`             |
| removed |      -2 | <0.1% → 0.0% |      2 → 0 | `iterate`            | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/range.jl`                 |

##### `iterate` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:75`)

|  Change | Delta |             % |   Samples | Callee    | Location                                                                                            |
| ------: | ----: | ------------: | --------: | --------- | --------------------------------------------------------------------------------------------------- |
|   +9.2% |   +31 | 35.4% → 43.6% | 338 → 369 | `iterate` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:81` |
|   +3.3% |   +10 | 32.2% → 37.5% | 307 → 317 | `iterate` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:78` |
|  -50.0% |   -10 |   2.1% → 1.2% |   20 → 10 | `length`  | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:38` |
|  +15.5% |    +9 |   6.1% → 7.9% |   58 → 67 | `iterate` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:75` |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `iterate` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:82` |

##### `getindex` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:163`)

| Change | Delta |             % |       Samples | Callee     | Location                                                                                             |
| -----: | ----: | ------------: | ------------: | ---------- | ---------------------------------------------------------------------------------------------------- |
| -80.3% |   -53 |   3.7% → 0.8% |       66 → 13 | `getvalue` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:126` |
|  -2.9% |   -50 | 96.3% → 99.2% | 1,738 → 1,688 | `getvalue` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:127` |

##### `isassigned` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:1641`)

| Change | Delta |      % |     Samples | Callee     | Location                                                                                             |
| -----: | ----: | -----: | ----------: | ---------- | ---------------------------------------------------------------------------------------------------- |
|  -5.2% |   -52 | 100.0% | 1,002 → 950 | `getindex` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:163` |

##### `length(::String)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:540`)

| Change | Delta |             % |   Samples | Callee             | Location                                                                                              |
| -----: | ----: | ------------: | --------: | ------------------ | ----------------------------------------------------------------------------------------------------- |
| -34.5% |   -19 |  12.6% → 9.1% |   55 → 36 | `length_continued` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:564` |
|  -6.1% |   -11 | 41.3% → 43.1% | 181 → 170 | `length_continued` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:561` |
|  -8.3% |   -10 | 27.4% → 27.9% | 120 → 110 | `length_continued` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/pointer.jl`            |
| -36.0% |    -9 |   5.7% → 4.1% |   25 → 16 | `length_continued` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:569` |
| +11.1% |    +4 |  8.2% → 10.2% |   36 → 40 | `length_continued` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:559` |

##### `_symbol` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:1`)

|  Change | Delta |            % | Samples | Callee                                                                                                                             | Location                                                                                            |
| ------: | ----: | -----------: | ------: | ---------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40` |

##### `getvalue` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:187`)

| Change | Delta |      % |       Samples | Callee    | Location                                                                                           |
| -----: | ----: | -----: | ------------: | --------- | -------------------------------------------------------------------------------------------------- |
|  -0.5% |   -38 | 100.0% | 7,015 → 6,977 | `_symbol` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:1` |

##### `ht_keyindex2_shorthash!(::Dict{Symbol, Int64}, ::Symbol)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:267`)

|  Change | Delta |             % |   Samples | Callee                                    | Location                                                                                            |
| ------: | ----: | ------------: | --------: | ----------------------------------------- | --------------------------------------------------------------------------------------------------- |
|  -11.8% |   -27 | 27.0% → 24.9% | 229 → 202 | `rehash!(::Dict{Symbol, Int64}, ::Int64)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:138`         |
|  +29.6% |    +8 |   3.2% → 4.3% |   27 → 35 | `isslotempty`                             | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:134`         |
|  -23.1% |    -6 |   3.1% → 2.5% |   26 → 20 | `==`                                      | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/promotion.jl:641`    |
|  +71.4% |    +5 |   0.8% → 1.5% |    7 → 12 | `getproperty`                             | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base_compiler.jl:57` |
| +150.0% |    +3 |   0.2% → 0.6% |     2 → 5 | `isslotfilled`                            | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:135`         |

##### `indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`)

| Change | Delta |             % |   Samples | Callee            | Location                                                                                     |
| -----: | ----: | ------------: | --------: | ----------------- | -------------------------------------------------------------------------------------------- |
|  -3.2% |   -32 | 99.6% → 99.7% | 998 → 966 | `indexed_iterate` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163` |

##### `indexed_iterate` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`)

| Change | Delta |           % | Samples | Callee            | Location                                                                                     |
| -----: | ----: | ----------: | ------: | ----------------- | -------------------------------------------------------------------------------------------- |
| -27.6% |   -21 | 5.1% → 3.8% | 76 → 55 | `indexed_iterate` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163` |

##### `getvalue` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:126`)

| Change | Delta |             % | Samples | Callee        | Location                                                                                           |
| -----: | ----: | ------------: | ------: | ------------- | -------------------------------------------------------------------------------------------------- |
| -29.5% |   -26 | 81.5% → 78.5% | 88 → 62 | `Dict`        | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:80`         |
| -50.0% |    -2 |   3.7% → 2.5% |   4 → 2 | `Object`      | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:8` |
| -50.0% |    -1 |   1.9% → 1.3% |   2 → 1 | `unsafe_view` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/subarray.jl:260`    |

##### `getvalue` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:195`)

|  Change | Delta |             % |  Samples | Callee           | Location                                                                                              |
| ------: | ----: | ------------: | -------: | ---------------- | ----------------------------------------------------------------------------------------------------- |
|  -31.7% |   -33 | 96.3% → 88.8% | 104 → 71 | `unsafe_string`  | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:126` |
| +100.0% |    +4 |  3.7% → 10.0% |    4 → 8 | `unsafe_string`  | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:125` |
|     new |    +1 |   0.0% → 1.3% |    0 → 1 | `getnontypemask` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:114`  |

##### `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{String})` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:142`)

| Change | Delta |             % | Samples | Callee      | Location                                                                                           |
| -----: | ----: | ------------: | ------: | ----------- | -------------------------------------------------------------------------------------------------- |
| -77.8% |    -7 |   2.8% → 0.7% |   9 → 2 | `length`    | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:11`   |
| +77.8% |    +7 |   2.8% → 5.4% |  9 → 16 | `setindex!` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:1020`      |
|  +8.2% |    +6 | 22.6% → 26.7% | 73 → 79 | `getbyte`   | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:8` |
| -75.0% |    -3 |   1.2% → 0.3% |   4 → 1 | `+`         | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:87`          |
|  +3.8% |    +2 | 16.4% → 18.6% | 53 → 55 | `==`        | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/promotion.jl:641`   |

##### `defaultminimum` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:12`)

|  Change | Delta |              % |       Samples | Callee                                                                                                                       | Location                                                                                           |
| ------: | ----: | -------------: | ------------: | ---------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
|   -0.3% |   -17 | 99.9% → 100.0% | 6,146 → 6,129 | `sum`                                                                                                                        | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:564`      |
|  -12.5% |    -8 |    1.0% → 0.9% |       64 → 56 | `isempty(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:1127` |
| removed |    -4 |    0.1% → 0.0% |         4 → 0 | `isempty(::JSON3.Object{Base.CodeUnits{UInt8, String}, Vector{UInt64}})`                                                     | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:1127` |

##### `length_continued` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:564`)

| Change | Delta |             % | Samples | Callee     | Location                                                                                              |
| -----: | ----: | ------------: | ------: | ---------- | ----------------------------------------------------------------------------------------------------- |
| -54.5% |   -12 | 40.0% → 27.8% | 22 → 10 | `codeunit` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:167` |
| -21.2% |    -7 | 60.0% → 72.2% | 33 → 26 | `codeunit` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:166` |

##### `#write#81` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:200`)

| Change | Delta |            % | Samples | Callee    | Location                                                                                 |
| -----: | ----: | -----------: | ------: | --------- | ---------------------------------------------------------------------------------------- |
| -73.0% |   -27 | 24.8% → 7.7% | 37 → 10 | `iterate` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/range.jl` |

##### `getvalue` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:218`)

| Change | Delta |             % |   Samples | Callee     | Location                                                                                             |
| -----: | ----: | ------------: | --------: | ---------- | ---------------------------------------------------------------------------------------------------- |
| -25.9% |   -28 | 43.7% → 34.5% |  108 → 80 | `getvalue` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:195` |
| +17.4% |   +21 | 49.0% → 61.2% | 121 → 142 | `getvalue` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:193` |
| -60.0% |    -3 |   2.0% → 0.9% |     5 → 2 | `getvalue` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl`     |
| -30.0% |    -3 |   4.0% → 3.0% |    10 → 7 | `getvalue` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl`    |
| -66.7% |    -2 |   1.2% → 0.4% |     3 → 1 | `getvalue` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:191` |

##### `length` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:38`)

|  Change | Delta |             % | Samples | Callee           | Location                                                                                             |
| ------: | ----: | ------------: | ------: | ---------------- | ---------------------------------------------------------------------------------------------------- |
|  -50.0% |    -6 |         60.0% |  12 → 6 | `getnontypemask` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:114` |
| removed |    -2 |  10.0% → 0.0% |   2 → 0 | `gettape`        | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:25`  |
|  -33.3% |    -1 | 15.0% → 20.0% |   3 → 2 | `getindex`       | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/subarray.jl:333`      |
|  -33.3% |    -1 | 15.0% → 20.0% |   3 → 2 | `getindex`       | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/subarray.jl:334`      |

##### `getnontypemask` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:114`)

| Change | Delta |      % | Samples | Callee | Location                                                                                   |
| -----: | ----: | -----: | ------: | ------ | ------------------------------------------------------------------------------------------ |
| -16.7% |    -9 | 100.0% | 54 → 45 | `&`    | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:393` |

##### `typeparser(::Type{Float64}, ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Int16, ::Parsers.Options)` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/Parsers/05lwR/src/components.jl:392`)

|  Change | Delta |             % | Samples | Callee       | Location                                                                                                |
| ------: | ----: | ------------: | ------: | ------------ | ------------------------------------------------------------------------------------------------------- |
|  -17.2% |    -5 | 59.2% → 57.1% | 29 → 24 | `typeparser` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/Parsers/05lwR/src/floats.jl:270` |
| +250.0% |    +5 |  4.1% → 16.7% |   2 → 7 | `typeparser` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/Parsers/05lwR/src/floats.jl:152` |
|  -50.0% |    -2 |   8.2% → 4.8% |   4 → 2 | `typeparser` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/Parsers/05lwR/src/floats.jl:276` |
|  -66.7% |    -2 |   6.1% → 2.4% |   3 → 1 | `typeparser` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/Parsers/05lwR/src/floats.jl:158` |
| removed |    -1 |   2.0% → 0.0% |   1 → 0 | `typeparser` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/Parsers/05lwR/src/floats.jl:148` |

##### `write(::StructTypes.NumberType, ::Vector{UInt8}, ::Int64, ::Int64, ::Int64)` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:224`)

|  Change | Delta |             % | Samples | Callee                                                                                                                                                                 | Location                                                                                             |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
|  -11.3% |    -6 | 89.8% → 88.7% | 53 → 47 | `var\"#write#86\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.NumberType, ::Vector{UInt8}, ::Int64, ::Int64, ::Int64)` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:224` |
| +100.0% |    +1 |   1.7% → 3.8% |   1 → 2 | `ndigits0zpb(::UInt64, ::Int64)`                                                                                                                                       | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/intfuncs.jl:759`      |

##### `typeparser` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/Parsers/05lwR/src/floats.jl:270`)

| Change | Delta |      % | Samples | Callee        | Location                                                                                                |
| -----: | ----: | -----: | ------: | ------------- | ------------------------------------------------------------------------------------------------------- |
| -17.2% |    -5 | 100.0% | 29 → 24 | `parsedigits` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/Parsers/05lwR/src/floats.jl:302` |

##### `parsedigits` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/Parsers/05lwR/src/floats.jl:302`)

|  Change | Delta |             % | Samples | Callee        | Location                                                                                                |
| ------: | ----: | ------------: | ------: | ------------- | ------------------------------------------------------------------------------------------------------- |
| removed |    -3 |  10.3% → 0.0% |   3 → 0 | `parsedigits` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/Parsers/05lwR/src/floats.jl:324` |
|  -18.2% |    -2 | 37.9% → 37.5% |  11 → 9 | `parsedigits` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/Parsers/05lwR/src/floats.jl`     |
|  -66.7% |    -2 |  10.3% → 4.2% |   3 → 1 | `parsedigits` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/Parsers/05lwR/src/floats.jl:398` |
| removed |    -2 |   6.9% → 0.0% |   2 → 0 | `parsedigits` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/Parsers/05lwR/src/floats.jl:304` |
|  +50.0% |    +1 |  6.9% → 12.5% |   2 → 3 | `parsedigits` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/Parsers/05lwR/src/floats.jl:316` |

##### `populateinds!` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:66`)

| Change | Delta |      % | Samples | Callee | Location                                                                                   |
| -----: | ----: | -----: | ------: | ------ | ------------------------------------------------------------------------------------------ |
| -57.1% |    -4 | 100.0% |   7 → 3 | `<=`   | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:560` |

##### `isarray` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:61`)

| Change | Delta |      % | Samples | Callee | Location                                                                                         |
| -----: | ----: | -----: | ------: | ------ | ------------------------------------------------------------------------------------------------ |
| -26.7% |    -4 | 100.0% | 15 → 11 | `==`   | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/promotion.jl:641` |

##### `iterate` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:82`)

| Change | Delta |             % | Samples | Callee       | Location                                                                                             |
| -----: | ----: | ------------: | ------: | ------------ | ---------------------------------------------------------------------------------------------------- |
| -17.6% |    -3 | 85.0% → 82.4% | 17 → 14 | `gettapelen` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:118` |

##### `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:56`)

| Change | Delta |             % |       Samples | Callee      | Location                                                                                            |
| -----: | ----: | ------------: | ------------: | ----------- | --------------------------------------------------------------------------------------------------- |
|  -0.2% |   -13 | 99.7% → 99.8% | 6,130 → 6,117 | `MappingRF` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98`        |
| -50.0% |    -5 |   0.2% → 0.1% |        10 → 5 | `iterate`   | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/iterators.jl:697`    |
|    new |    +1 |  0.0% → <0.1% |         0 → 1 | `iterate`   | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:75` |

##### `foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:46`)

|  Change |  Delta |             % |       Samples | Callee                                                                                                                                                    | Location                                                                                             |
| ------: | -----: | ------------: | ------------: | --------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
|     new | +5,451 |  0.0% → 88.9% |     0 → 5,451 | `_foldl_impl`                                                                                                                                             | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:61`         |
|   -0.3% |    -17 |        100.0% | 6,146 → 6,129 | `_foldl_impl`                                                                                                                                             | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:56`         |
|   -0.2% |    -13 | 99.7% → 99.8% | 6,128 → 6,115 | `_foldl_impl`                                                                                                                                             | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`         |
| +300.0% |     +3 |  <0.1% → 0.1% |         1 → 4 | `getvalue(::Type{JSON3.Array}, ::Base.CodeUnits{UInt8, String}, ::SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}, ::Int64, ::UInt64)` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:131` |
|  -50.0% |     -1 |         <0.1% |         2 → 1 | `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})`                        | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40`  |

##### `mapfoldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:42`)

|  Change | Delta |            % |       Samples | Callee       | Location                                                                                     |
| ------: | ----: | -----------: | ------------: | ------------ | -------------------------------------------------------------------------------------------- |
|   -0.3% |   -17 |       100.0% | 6,146 → 6,129 | `foldl_impl` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:46` |
| removed |    -3 | <0.1% → 0.0% |         3 → 0 | `foldl_impl` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:47` |

##### `#mapfoldl#271` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:173`)

| Change | Delta |      % |       Samples | Callee          | Location                                                                                     |
| -----: | ----: | -----: | ------------: | --------------- | -------------------------------------------------------------------------------------------- |
|  -0.3% |   -17 | 100.0% | 6,146 → 6,129 | `mapfoldl_impl` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:42` |

##### `mapfoldl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:173`)

| Change | Delta |      % |       Samples | Callee          | Location                                                                                      |
| -----: | ----: | -----: | ------------: | --------------- | --------------------------------------------------------------------------------------------- |
|  -0.3% |   -17 | 100.0% | 6,146 → 6,129 | `#mapfoldl#271` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:173` |

##### `#mapreduce#275` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:306`)

| Change | Delta |      % |       Samples | Callee     | Location                                                                                      |
| -----: | ----: | -----: | ------------: | ---------- | --------------------------------------------------------------------------------------------- |
|  -0.3% |   -17 | 100.0% | 6,146 → 6,129 | `mapfoldl` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:173` |

##### `mapreduce` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:306`)

| Change | Delta |      % |       Samples | Callee           | Location                                                                                      |
| -----: | ----: | -----: | ------------: | ---------------- | --------------------------------------------------------------------------------------------- |
|  -0.3% |   -17 | 100.0% | 6,146 → 6,129 | `#mapreduce#275` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:306` |

##### `#sum#278` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:535`)

| Change | Delta |      % |       Samples | Callee      | Location                                                                                      |
| -----: | ----: | -----: | ------------: | ----------- | --------------------------------------------------------------------------------------------- |
|  -0.3% |   -17 | 100.0% | 6,146 → 6,129 | `mapreduce` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:306` |

##### `sum` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:535`)

| Change | Delta |      % |       Samples | Callee     | Location                                                                                      |
| -----: | ----: | -----: | ------------: | ---------- | --------------------------------------------------------------------------------------------- |
|  -0.3% |   -17 | 100.0% | 6,146 → 6,129 | `#sum#278` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:535` |

##### `sum` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:564`)

| Change | Delta |      % |       Samples | Callee     | Location                                                                                      |
| -----: | ----: | -----: | ------------: | ---------- | --------------------------------------------------------------------------------------------- |
|  -0.3% |   -17 | 100.0% | 6,146 → 6,129 | `#sum#279` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:564` |

##### `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` (`<unknown>`)

| Change | Delta |            % |       Samples | Callee                                                                                                                       | Location                                                                                           |
| -----: | ----: | -----------: | ------------: | ---------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
|  -0.2% |   -10 |       100.0% | 6,130 → 6,120 | `[unknown function]`                                                                                                         | `<unknown>`                                                                                        |
| -40.0% |    -6 |  0.2% → 0.1% |        15 → 9 | `defaultminimum`                                                                                                             | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:6` |
| -80.0% |    -4 | 0.1% → <0.1% |         5 → 1 | `isempty(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:1127` |
|    new |    +4 |  0.0% → 0.1% |         0 → 4 | `+(::UInt64, ::UInt64)`                                                                                                      | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:87`          |
|    new |    +3 | 0.0% → <0.1% |         0 → 3 | `_foldl_impl`                                                                                                                | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:61`       |

##### `#defaultminimum##0` (`<unknown>`)

|  Change | Delta |             % |       Samples | Callee           | Location                                                                                                 |
| ------: | ----: | ------------: | ------------: | ---------------- | -------------------------------------------------------------------------------------------------------- |
|  -14.8% |   -59 |   6.5% → 5.6% |     400 → 341 | `getindex`       | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:163`     |
|   -7.1% |   -33 |   7.6% → 7.1% |     464 → 431 | `isassigned`     | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:1641` |
|   +0.5% |   +26 | 89.4% → 90.0% | 5,466 → 5,492 | `defaultminimum` | `/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:12`      |
|  -83.3% |    -5 |  0.1% → <0.1% |         6 → 1 | `isassigned`     | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:1640` |
| removed |    -1 |  <0.1% → 0.0% |         1 → 0 | `isassigned`     | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:1632` |

## Hottest call stacks

### Regressions

Call stacks with the largest increase in samples collected in their leaf frame.

Common call stack: `#write#58` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:40`) ← `[unknown function]` ← `parse_workload` (`./profile.jl:18`) ← `macro expansion` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/stdlib/v1.13/Profile/src/Profile.jl:60`) ← `capture_cpu` (`./profile.jl:29`) ← `[unknown function]` ← `eval(::Module, ::Any)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:489`) ← `include_string(::typeof(identity), ::Module, ::String, ::String)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/loading.jl:2989`) ← `_include(::Function, ::Module, ::String)` (3083) ← `include(::Module, ::String)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base.jl:309`) ← `exec_options(::Base.JLOptions)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/client.jl:234`) ← `_start()` (570)

| Change |  Delta |           % |   Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| -----: | -----: | ----------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|    new | +3,302 | 0.0% → 9.9% | 0 → 3,302 | `#write#79` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:185`) ← `[unknown function]` ← `#write#79` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|    new | +1,744 | 0.0% → 5.2% | 0 → 1,744 | `#write#79` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:185`) ← `[unknown function]` ← `#write#79` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|    new | +1,268 | 0.0% → 3.8% | 0 → 1,268 | `#write#79` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:185`) ← `[unknown function]` ← `#write#79` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|    new | +1,088 | 0.0% → 3.3% | 0 → 1,088 | `indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64, ::Int64)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`) ← `#write#79` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:185`) ← `[unknown function]` ← `#write#79` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|    new |   +825 | 0.0% → 2.5% |   0 → 825 | `_symbol` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:1`) ← `getvalue` (187) ← `iterate` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:78`) ← `#write#79` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:185`) ← `[unknown function]` ← `#write#79` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|    new |   +727 | 0.0% → 2.2% |   0 → 727 | `_symbol` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:1`) ← `getvalue` (187) ← `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40`) ← `getvalue` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:127`) ← `getvalue` (214) ← `iterate` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:81`) ← `#write#79` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:185`) ← `[unknown function]` ← `#write#79` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|    new |   +708 | 0.0% → 2.1% |   0 → 708 | `_symbol` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:1`) ← `getvalue` (187) ← `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40`) ← `getvalue` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:127`) ← `getvalue` (214) ← `iterate` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:81`) ← `iterate` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/iterators.jl:697`) ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:61`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:12`) ← `#defaultminimum##0` ← `[unknown function]` ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `[unknown function]` ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `MappingRF` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98`) ← `_foldl_impl` (56) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:12`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|    new |   +656 | 0.0% → 2.0% |   0 → 656 | `_symbol` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:1`) ← `getvalue` (187) ← `iterate` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:78`) ← `iterate` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/iterators.jl:697`) ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:61`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `[unknown function]` ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `[unknown function]` ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:61`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:12`) ← `#defaultminimum##0` ← `[unknown function]` ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `[unknown function]` ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `MappingRF` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98`) ← `_foldl_impl` (56) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:12`)                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|    new |   +600 | 0.0% → 1.8% |   0 → 600 | `indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64, ::Int64)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`) ← `#write#79` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:185`) ← `[unknown function]` ← `#write#79` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|    new |   +465 | 0.0% → 1.4% |   0 → 465 | `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `[unknown function]` ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:61`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `[unknown function]` ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `[unknown function]` ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:61`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:12`) ← `#defaultminimum##0` ← `[unknown function]` ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `[unknown function]` ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `MappingRF` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98`) ← `_foldl_impl` (56) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:12`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|    new |   +460 | 0.0% → 1.4% |   0 → 460 | `_symbol` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:1`) ← `getvalue` (187) ← `iterate` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:78`) ← `#write#79` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:185`) ← `[unknown function]` ← `#write#79` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|    new |   +449 | 0.0% → 1.3% |   0 → 449 | `indexed_iterate` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`) ← `indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64)` (163) ← `#write#79` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:185`) ← `[unknown function]` ← `#write#79` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|    new |   +410 | 0.0% → 1.2% |   0 → 410 | `GenericMemory` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:588`) ← `Array` (648) ← `Array` (661) ← `zeros` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:626`) ← `zeros` (622) ← `realloc!(::Vector{UInt8}, ::Int64, ::Int64)` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:51`) ← `var\"#write#98\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` (340) ← `write(::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` (340) ← `#write#79` (157) ← `[unknown function]` ← `#write#79` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:185`) ← `[unknown function]` ← `#write#79` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|    new |   +398 | 0.0% → 1.2% |   0 → 398 | `_symbol` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:1`) ← `getvalue` (187) ← `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40`) ← `getvalue` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:127`) ← `getvalue` (214) ← `iterate` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:81`) ← `#write#79` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:185`) ← `[unknown function]` ← `#write#79` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|    new |   +392 | 0.0% → 1.2% |   0 → 392 | `indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64, ::Int64)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`) ← `#write#79` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:185`) ← `[unknown function]` ← `#write#79` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|    new |   +358 | 0.0% → 1.1% |   0 → 358 | `_symbol` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:1`) ← `getvalue` (187) ← `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40`) ← `getvalue` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:127`) ← `getvalue` (214) ← `iterate` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:81`) ← `iterate` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/iterators.jl:697`) ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:61`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `[unknown function]` ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `[unknown function]` ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:61`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:12`) ← `#defaultminimum##0` ← `[unknown function]` ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `[unknown function]` ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `MappingRF` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98`) ← `_foldl_impl` (56) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:12`)                                                                |
|    new |   +326 | 0.0% → 1.0% |   0 → 326 | `#write#79` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:185`) ← `[unknown function]` ← `#write#79` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:185`) ← `[unknown function]` ← `#write#79` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|    new |   +323 | 0.0% → 1.0% |   0 → 323 | `_symbol` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:1`) ← `getvalue` (187) ← `iterate` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:78`) ← `iterate` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/iterators.jl:697`) ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:61`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `[unknown function]` ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `[unknown function]` ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:61`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `[unknown function]` ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `[unknown function]` ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:61`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:12`) ← `#defaultminimum##0` ← `[unknown function]` ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `[unknown function]` ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `MappingRF` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98`) ← `_foldl_impl` (56) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:12`) |
|    new |   +306 | 0.0% → 0.9% |   0 → 306 | `_symbol` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:1`) ← `getvalue` (187) ← `iterate` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:78`) ← `#write#79` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:185`) ← `[unknown function]` ← `#write#79` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|    new |   +287 | 0.0% → 0.9% |   0 → 287 | `_symbol` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:1`) ← `getvalue` (187) ← `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40`) ← `getvalue` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:127`) ← `getindex` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:163`) ← `isassigned` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:1641`) ← `#write#81` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:185`) ← `[unknown function]` ← `#write#79` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |

### Improvements

Call stacks with the largest decrease in samples collected in their leaf frame.

Common call stack: `#write#58` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:40`) ← `[unknown function]` ← `parse_workload` (`./profile.jl:18`) ← `macro expansion` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/stdlib/v1.13/Profile/src/Profile.jl:60`) ← `capture_cpu` (`./profile.jl:29`) ← `[unknown function]` ← `eval(::Module, ::Any)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:489`) ← `include_string(::typeof(identity), ::Module, ::String, ::String)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/loading.jl:2989`) ← `_include(::Function, ::Module, ::String)` (3083) ← `include(::Module, ::String)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base.jl:309`) ← `exec_options(::Base.JLOptions)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/client.jl:234`) ← `_start()` (570)

|  Change |  Delta |           % |   Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ------: | -----: | ----------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| removed | -3,110 | 9.2% → 0.0% | 3,110 → 0 | `#write#79` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| removed | -1,770 | 5.3% → 0.0% | 1,770 → 0 | `#write#79` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| removed | -1,258 | 3.7% → 0.0% | 1,258 → 0 | `#write#79` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| removed |   -949 | 2.8% → 0.0% |   949 → 0 | `indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64, ::Int64)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`) ← `#write#79` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| removed |   -795 | 2.4% → 0.0% |   795 → 0 | `_symbol` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`) ← `getvalue` (187) ← `iterate` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:78`) ← `#write#79` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| removed |   -729 | 2.2% → 0.0% |   729 → 0 | `_symbol` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`) ← `getvalue` (187) ← `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40`) ← `getvalue` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:127`) ← `getvalue` (214) ← `iterate` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:81`) ← `#write#79` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| removed |   -716 | 2.1% → 0.0% |   716 → 0 | `_symbol` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`) ← `getvalue` (187) ← `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40`) ← `getvalue` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:127`) ← `getvalue` (214) ← `iterate` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:81`) ← `iterate` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/iterators.jl:697`) ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:12`) ← `#defaultminimum##0` ← `[unknown function]` ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `[unknown function]` ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `MappingRF` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98`) ← `_foldl_impl` (56) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:12`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| removed |   -563 | 1.7% → 0.0% |   563 → 0 | `_symbol` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`) ← `getvalue` (187) ← `iterate` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:78`) ← `iterate` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/iterators.jl:697`) ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `[unknown function]` ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `[unknown function]` ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:12`) ← `#defaultminimum##0` ← `[unknown function]` ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `[unknown function]` ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `MappingRF` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98`) ← `_foldl_impl` (56) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:12`)                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| removed |   -543 | 1.6% → 0.0% |   543 → 0 | `indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64, ::Int64)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`) ← `#write#79` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| removed |   -504 | 1.5% → 0.0% |   504 → 0 | `_symbol` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`) ← `getvalue` (187) ← `iterate` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:78`) ← `#write#79` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| removed |   -482 | 1.4% → 0.0% |   482 → 0 | `indexed_iterate` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`) ← `indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64)` (163) ← `#write#79` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| removed |   -476 | 1.4% → 0.0% |   476 → 0 | `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `[unknown function]` ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `[unknown function]` ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `[unknown function]` ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:12`) ← `#defaultminimum##0` ← `[unknown function]` ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `[unknown function]` ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `MappingRF` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98`) ← `_foldl_impl` (56) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:12`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| removed |   -432 | 1.3% → 0.0% |   432 → 0 | `indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64, ::Int64)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`) ← `#write#79` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| removed |   -423 | 1.3% → 0.0% |   423 → 0 | `_symbol` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`) ← `getvalue` (187) ← `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40`) ← `getvalue` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:127`) ← `getvalue` (214) ← `iterate` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:81`) ← `#write#79` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| removed |   -392 | 1.2% → 0.0% |   392 → 0 | `_symbol` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`) ← `getvalue` (187) ← `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40`) ← `getvalue` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:127`) ← `getvalue` (214) ← `iterate` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:81`) ← `iterate` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/iterators.jl:697`) ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `[unknown function]` ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `[unknown function]` ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:12`) ← `#defaultminimum##0` ← `[unknown function]` ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `[unknown function]` ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `MappingRF` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98`) ← `_foldl_impl` (56) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:12`)                                                                |
| removed |   -385 | 1.1% → 0.0% |   385 → 0 | `GenericMemory` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:588`) ← `Array` (648) ← `Array` (661) ← `zeros` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:626`) ← `zeros` (622) ← `realloc!(::Vector{UInt8}, ::Int64, ::Int64)` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:51`) ← `var\"#write#98\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` (340) ← `write(::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` (340) ← `#write#79` (157) ← `[unknown function]` ← `#write#79` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| removed |   -349 | 1.0% → 0.0% |   349 → 0 | `#write#79` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| removed |   -329 | 1.0% → 0.0% |   329 → 0 | `_symbol` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`) ← `getvalue` (187) ← `iterate` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:78`) ← `#write#79` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| removed |   -309 | 0.9% → 0.0% |   309 → 0 | `_symbol` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`) ← `getvalue` (187) ← `iterate` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:78`) ← `iterate` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/iterators.jl:697`) ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `[unknown function]` ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `[unknown function]` ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `[unknown function]` ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `[unknown function]` ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:12`) ← `#defaultminimum##0` ← `[unknown function]` ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `[unknown function]` ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `MappingRF` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98`) ← `_foldl_impl` (56) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:12`) |
| removed |   -298 | 0.9% → 0.0% |   298 → 0 | `_symbol` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`) ← `getvalue` (187) ← `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40`) ← `getvalue` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:127`) ← `getindex` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:163`) ← `isassigned` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:1641`) ← `#write#81` ← `[unknown function]` ← `#write#79` (`/Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |

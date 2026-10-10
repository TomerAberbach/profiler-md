# Sampling profile diff

Collected 33,701 samples → 33,383 samples (-318 samples, -0.9%).

| Category         | Change | Delta |             % |         Samples |
| ---------------- | -----: | ----: | ------------: | --------------: |
| Third-party      |  +0.5% |   +79 | 45.5% → 46.2% | 15,333 → 15,412 |
| Standard library |  +2.5% |  +220 | 26.5% → 27.4% |   8,936 → 9,156 |
| Unknown          |  -6.4% |  -507 | 23.6% → 22.3% |   7,943 → 7,436 |
| Native           |  -4.9% |   -69 |   4.2% → 4.0% |   1,403 → 1,334 |
| Ours             | -47.7% |   -41 |   0.3% → 0.1% |         86 → 45 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

|  Change | Delta |             % |       Samples | Function                                                                                                                                                                                                                         | Location                                                                                                                                                                                                            |
| ------: | ----: | ------------: | ------------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  +26.2% |  +295 |   3.3% → 4.3% | 1,127 → 1,422 | `GenericMemory`                                                                                                                                                                                                                  | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:588`                                                                                                                    |
|     new |  +249 |   0.0% → 0.7% |       0 → 249 | `_foldl_impl`                                                                                                                                                                                                                    | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:61`                                                                                                                   |
|   +2.5% |  +175 | 20.4% → 21.1% | 6,881 → 7,056 | `#write#79`                                                                                                                                                                                                                      | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157` |
|   +7.9% |  +167 |   6.3% → 6.9% | 2,127 → 2,294 | `indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64, ::Int64)`                                                                                                                                                        | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`                                                                                                                   |
|     new |   +59 |   0.0% → 0.2% |        0 → 59 | `#write#81`                                                                                                                                                                                                                      | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:185`                                                                                                           |
|  +26.8% |   +44 |   0.5% → 0.6% |     164 → 208 | `getindex`                                                                                                                                                                                                                       | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:975`                                                                                                              |
|  +17.5% |   +40 |   0.7% → 0.8% |     229 → 269 | `_setindex!`                                                                                                                                                                                                                     | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:1025`                                                                                                                  |
|   +5.9% |   +19 |          1.0% |     323 → 342 | `+`                                                                                                                                                                                                                              | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:87`                                                                                                                      |
| +133.3% |   +16 |  <0.1% → 0.1% |       12 → 28 | `getvalue(::Type{JSON3.Array}, ::Base.CodeUnits{UInt8, String}, ::SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}, ::Int64, ::UInt64)`                                                                        | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:131 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:131` |
|  +15.4% |   +12 |   0.2% → 0.3% |       78 → 90 | `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)`                                                                     | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:87 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:87`     |
|   +5.8% |   +12 |   0.6% → 0.7% |     208 → 220 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:218 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:218`   |
|  +26.8% |   +11 |   0.1% → 0.2% |       41 → 52 | `getindex`                                                                                                                                                                                                                       | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:401`                                                                                                              |
|  +27.8% |   +10 |          0.1% |       36 → 46 | `write(::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)`                                                                                                                                                   | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:340 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:340` |
| +111.1% |   +10 |  <0.1% → 0.1% |        9 → 19 | `memoryref`                                                                                                                                                                                                                      | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:594`                                                                                                                    |
|   +7.5% |   +10 |          0.4% |     133 → 143 | `unsafe_string`                                                                                                                                                                                                                  | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:130`                                                                                                          |
|  +42.9% |    +9 |          0.1% |       21 → 30 | `macro expansion`                                                                                                                                                                                                                | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:23 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:23`   |
|  +56.3% |    +9 |  <0.1% → 0.1% |       16 → 25 | `var\"#write#84\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.BoolType, ::Vector{UInt8}, ::Int64, ::Int64, ::Bool)`                                                              | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:209 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:209` |
|   +0.7% |    +8 |          3.3% | 1,108 → 1,116 | `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})`                                                                                                                                                     | `<unknown>`                                                                                                                                                                                                         |
| +266.7% |    +8 |         <0.1% |        3 → 11 | `_setindex!`                                                                                                                                                                                                                     | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:339`                                                                                                                    |
|   +2.8% |    +8 |   0.8% → 0.9% |     286 → 294 | `BottomRF`                                                                                                                                                                                                                       | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:84`                                                                                                                   |

##### Third-party

|  Change | Delta |             % |       Samples | Function                                                                                                                                                                                                                         | Location                                                                                                                                                                                                              |
| ------: | ----: | ------------: | ------------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|   +2.5% |  +175 | 20.4% → 21.1% | 6,881 → 7,056 | `#write#79`                                                                                                                                                                                                                      | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`   |
|     new |   +59 |   0.0% → 0.2% |        0 → 59 | `#write#81`                                                                                                                                                                                                                      | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:185`                                                                                                             |
| +133.3% |   +16 |  <0.1% → 0.1% |       12 → 28 | `getvalue(::Type{JSON3.Array}, ::Base.CodeUnits{UInt8, String}, ::SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}, ::Int64, ::UInt64)`                                                                        | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:131 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:131`   |
|  +15.4% |   +12 |   0.2% → 0.3% |       78 → 90 | `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)`                                                                     | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:87 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:87`       |
|   +5.8% |   +12 |   0.6% → 0.7% |     208 → 220 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:218 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:218`     |
|  +27.8% |   +10 |          0.1% |       36 → 46 | `write(::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)`                                                                                                                                                   | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:340 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:340`   |
|  +42.9% |    +9 |          0.1% |       21 → 30 | `macro expansion`                                                                                                                                                                                                                | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:23 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:23`     |
|  +56.3% |    +9 |  <0.1% → 0.1% |       16 → 25 | `var\"#write#84\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.BoolType, ::Vector{UInt8}, ::Int64, ::Int64, ::Bool)`                                                              | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:209 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:209`   |
|   +7.1% |    +8 |   0.3% → 0.4% |     112 → 120 | `#write#81`                                                                                                                                                                                                                      | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:200 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:200`   |
| +120.0% |    +6 |         <0.1% |        5 → 11 | `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.False})`                                                                                                              | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:189 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:189`     |
| +250.0% |    +5 |         <0.1% |         2 → 7 | `typeparser`                                                                                                                                                                                                                     | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/Parsers/05lwR/src/floats.jl:152`                                                                                                          |
|  +26.3% |    +5 |          0.1% |       19 → 24 | `unescape(::JSON3.PointerString)`                                                                                                                                                                                                | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/strings.jl:48 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/strings.jl:48` |
|     new |    +4 |  0.0% → <0.1% |         0 → 4 | `Array`                                                                                                                                                                                                                          | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:17`                                                                                                              |
|   +8.6% |    +3 |          0.1% |       35 → 38 | `getvalue`                                                                                                                                                                                                                       | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl`           |
|  +18.8% |    +3 |  <0.1% → 0.1% |       16 → 19 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)`                                                      | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:87 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:87`       |
|     new |    +2 |  0.0% → <0.1% |         0 → 2 | `getvalue`                                                                                                                                                                                                                       | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:193 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:193`   |
| +200.0% |    +2 |         <0.1% |         1 → 3 | `getvalue`                                                                                                                                                                                                                       | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:184 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:184`   |
| +200.0% |    +2 |         <0.1% |         1 → 3 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Array}, ::Bool)`                                              | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:312 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:312`     |
|     new |    +2 |  0.0% → <0.1% |         0 → 2 | `__scale(::Type{Float64}, ::UInt64, ::Int64, ::Bool)`                                                                                                                                                                            | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/Parsers/05lwR/src/floats.jl:613`                                                                                                          |
|     new |    +1 |  0.0% → <0.1% |         0 → 1 | `write`                                                                                                                                                                                                                          | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:147 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:147`   |

##### Standard library

|  Change | Delta |            % |       Samples | Function                                                                  | Location                                                                                                   |
| ------: | ----: | -----------: | ------------: | ------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
|  +26.2% |  +295 |  3.3% → 4.3% | 1,127 → 1,422 | `GenericMemory`                                                           | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:588`           |
|     new |  +249 |  0.0% → 0.7% |       0 → 249 | `_foldl_impl`                                                             | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:61`          |
|   +7.9% |  +167 |  6.3% → 6.9% | 2,127 → 2,294 | `indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64, ::Int64)` | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`          |
|  +26.8% |   +44 |  0.5% → 0.6% |     164 → 208 | `getindex`                                                                | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:975`     |
|  +17.5% |   +40 |  0.7% → 0.8% |     229 → 269 | `_setindex!`                                                              | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:1025`         |
|   +5.9% |   +19 |         1.0% |     323 → 342 | `+`                                                                       | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:87`             |
|  +26.8% |   +11 |  0.1% → 0.2% |       41 → 52 | `getindex`                                                                | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:401`     |
| +111.1% |   +10 | <0.1% → 0.1% |        9 → 19 | `memoryref`                                                               | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:594`           |
|   +7.5% |   +10 |         0.4% |     133 → 143 | `unsafe_string`                                                           | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:130` |
| +266.7% |    +8 |        <0.1% |        3 → 11 | `_setindex!`                                                              | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:339`           |
|   +2.8% |    +8 |  0.8% → 0.9% |     286 → 294 | `BottomRF`                                                                | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:84`          |
|   +1.3% |    +7 |         1.7% |     558 → 565 | `unsafe_load`                                                             | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/pointer.jl:151`        |
|  +31.8% |    +7 |         0.1% |       22 → 29 | `<`                                                                       | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:83`             |
| +100.0% |    +5 |        <0.1% |        5 → 10 | `checkbounds`                                                             | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/basic.jl:204`  |
|   +5.4% |    +4 |         0.2% |       74 → 78 | `\|`                                                                      | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:418`            |
| +100.0% |    +4 |        <0.1% |         4 → 8 | `unsafe_string`                                                           | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:125` |
|     new |    +4 | 0.0% → <0.1% |         0 → 4 | `+(::UInt64, ::UInt64)`                                                   | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:87`             |
|  +15.8% |    +3 |         0.1% |       19 → 22 | `_setindex!`                                                              | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/genericmemory.jl:263`  |
| +300.0% |    +3 |        <0.1% |         1 → 4 | `resize!(::Vector{UInt8}, ::Int64)`                                       | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:1533`         |
|  +14.3% |    +2 |        <0.1% |       14 → 16 | `rehash!(::Dict{Symbol, Int64}, ::Int64)`                                 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:138`           |

##### Native

| Change | Delta |    % |       Samples | Function                                                                     | Location    |
| -----: | ----: | ---: | ------------: | ---------------------------------------------------------------------------- | ----------- |
|  +0.7% |    +8 | 3.3% | 1,108 → 1,116 | `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` | `<unknown>` |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

|  Change | Delta |             % |       Samples | Function                                                                                                                           | Location                                                                                                                                                                                                          |
| ------: | ----: | ------------: | ------------: | ---------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|   -6.4% |  -507 | 23.6% → 22.3% | 7,943 → 7,436 | `(anonymous)`                                                                                                                      | `<unknown>`                                                                                                                                                                                                       |
|  -94.9% |  -262 |  0.8% → <0.1% |      276 → 14 | `_foldl_impl`                                                                                                                      | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`                                                                                                                 |
|  -51.3% |  -140 |   0.8% → 0.4% |     273 → 133 | `iterate`                                                                                                                          | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:75 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:75` |
| removed |  -137 |   0.4% → 0.0% |       137 → 0 | `#write#81`                                                                                                                        | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`                                                                                                          |
|  -25.4% |   -74 |   0.9% → 0.7% |     291 → 217 | `[unknown function]`                                                                                                               | `<unknown>`                                                                                                                                                                                                       |
|  -47.7% |   -41 |   0.3% → 0.1% |       86 → 45 | `parse_workload`                                                                                                                   | `profile.jl:18`                                                                                                                                                                                                   |
|   -0.5% |   -38 | 20.8% → 20.9% | 7,015 → 6,977 | `_symbol`                                                                                                                          | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:1 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:1`   |
|  -22.0% |   -33 |          0.4% |     150 → 117 | `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{String})`                     | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:142 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:142` |
|  -31.7% |   -33 |   0.3% → 0.2% |      104 → 71 | `unsafe_string`                                                                                                                    | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:126`                                                                                                        |
|   -2.1% |   -32 |          4.4% | 1,492 → 1,460 | `indexed_iterate`                                                                                                                  | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`                                                                                                                 |
|  -71.8% |   -28 |  0.1% → <0.1% |       39 → 11 | `iterate`                                                                                                                          | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/range.jl`                                                                                                                     |
|  -29.5% |   -26 |   0.3% → 0.2% |       88 → 62 | `Dict`                                                                                                                             | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:80`                                                                                                                   |
|   -3.4% |   -18 |   1.6% → 1.5% |     532 → 514 | `ht_keyindex2_shorthash!(::Dict{Symbol, Int64}, ::Symbol)`                                                                         | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:267`                                                                                                                  |
|  -20.2% |   -17 |          0.2% |       84 → 67 | `setindex!(::Dict{Symbol, Int64}, ::Int64, ::Symbol)`                                                                              | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:356`                                                                                                                  |
|  -52.0% |   -13 |  0.1% → <0.1% |       25 → 12 | `MappingRF`                                                                                                                        | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98`                                                                                                                 |
|  -28.3% |   -13 |          0.1% |       46 → 33 | `*`                                                                                                                                | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:88`                                                                                                                    |
|  -42.3% |   -11 |  0.1% → <0.1% |       26 → 15 | `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40` |
|  -64.7% |   -11 |  0.1% → <0.1% |        17 → 6 | `-(::Int64, ::Int64)`                                                                                                              | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:86`                                                                                                                    |
|  -15.5% |   -11 |          0.2% |       71 → 60 | `&`                                                                                                                                | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:393`                                                                                                                   |
|   -8.3% |   -10 |   0.4% → 0.3% |     120 → 110 | `length_continued`                                                                                                                 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/pointer.jl`                                                                                                                   |

##### Third-party

|  Change | Delta |             % |       Samples | Function                                                                                                                                                                                                                        | Location                                                                                                                                                                                                            |
| ------: | ----: | ------------: | ------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  -51.3% |  -140 |   0.8% → 0.4% |     273 → 133 | `iterate`                                                                                                                                                                                                                       | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:75 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:75`   |
|   -0.5% |   -38 | 20.8% → 20.9% | 7,015 → 6,977 | `_symbol`                                                                                                                                                                                                                       | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:1 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:1`     |
|  -22.0% |   -33 |          0.4% |     150 → 117 | `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{String})`                                                                                                                  | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:142 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:142`   |
|  -42.3% |   -11 |  0.1% → <0.1% |       26 → 15 | `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})`                                                                                              | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40`   |
|  -40.0% |    -6 |         <0.1% |        15 → 9 | `defaultminimum`                                                                                                                                                                                                                | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:6 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:6`     |
|  -45.5% |    -5 |         <0.1% |        11 → 6 | `var\"#read!#9\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Array}, ::Bool)` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:312 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:312`   |
|   -7.2% |    -5 |          0.2% |       69 → 64 | `var\"#write#98\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)`                                                         | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:340 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:340` |
|  -57.1% |    -4 |         <0.1% |         7 → 3 | `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Nothing})`                                                                                                                 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:204 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:204`   |
| removed |    -2 |  <0.1% → 0.0% |         2 → 0 | `promoteeltype`                                                                                                                                                                                                                 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:106`                                                                                                           |
| removed |    -2 |  <0.1% → 0.0% |         2 → 0 | `promoteeltype`                                                                                                                                                                                                                 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl`                                                                                                               |
|  -22.2% |    -2 |         <0.1% |         9 → 7 | `typeparser(::Type{Float64}, ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Int16, ::Parsers.Options)`                                                                                                           | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/Parsers/05lwR/src/components.jl:392`                                                                                                    |
| removed |    -2 |  <0.1% → 0.0% |         2 → 0 | `gettape`                                                                                                                                                                                                                       | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:25`                                                                                                            |
|   -5.9% |    -2 |          0.1% |       34 → 32 | `write(::StructTypes.BoolType, ::Vector{UInt8}, ::Int64, ::Int64, ::Bool)`                                                                                                                                                      | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:209 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:209` |
| removed |    -2 |  <0.1% → 0.0% |         2 → 0 | `getinds`                                                                                                                                                                                                                       | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:26`                                                                                                            |
|  -18.2% |    -2 |         <0.1% |        11 → 9 | `parsedigits`                                                                                                                                                                                                                   | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/Parsers/05lwR/src/floats.jl`                                                                                                            |
|  -50.0% |    -2 |         <0.1% |         4 → 2 | `Object`                                                                                                                                                                                                                        | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:8 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:8`     |
| removed |    -2 |  <0.1% → 0.0% |         2 → 0 | `parsefrac`                                                                                                                                                                                                                     | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/Parsers/05lwR/src/floats.jl:446`                                                                                                        |
| removed |    -2 |  <0.1% → 0.0% |         2 → 0 | `getproperty`                                                                                                                                                                                                                   | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/Parsers/05lwR/src/Parsers.jl:140`                                                                                                       |
|   -5.3% |    -1 |          0.1% |       19 → 18 | `getvalue`                                                                                                                                                                                                                      | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:213 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:213` |
|   -1.1% |    -1 |          0.3% |       89 → 88 | `getvalue`                                                                                                                                                                                                                      | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:215 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:215` |

##### Standard library

|  Change | Delta |            % |       Samples | Function                                                   | Location                                                                                                   |
| ------: | ----: | -----------: | ------------: | ---------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
|  -94.9% |  -262 | 0.8% → <0.1% |      276 → 14 | `_foldl_impl`                                              | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`          |
| removed |  -137 |  0.4% → 0.0% |       137 → 0 | `#write#81`                                                | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`   |
|  -31.7% |   -33 |  0.3% → 0.2% |      104 → 71 | `unsafe_string`                                            | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:126` |
|   -2.1% |   -32 |         4.4% | 1,492 → 1,460 | `indexed_iterate`                                          | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`          |
|  -71.8% |   -28 | 0.1% → <0.1% |       39 → 11 | `iterate`                                                  | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/range.jl`              |
|  -29.5% |   -26 |  0.3% → 0.2% |       88 → 62 | `Dict`                                                     | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:80`            |
|   -3.4% |   -18 |  1.6% → 1.5% |     532 → 514 | `ht_keyindex2_shorthash!(::Dict{Symbol, Int64}, ::Symbol)` | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:267`           |
|  -20.2% |   -17 |         0.2% |       84 → 67 | `setindex!(::Dict{Symbol, Int64}, ::Int64, ::Symbol)`      | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:356`           |
|  -52.0% |   -13 | 0.1% → <0.1% |       25 → 12 | `MappingRF`                                                | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98`          |
|  -28.3% |   -13 |         0.1% |       46 → 33 | `*`                                                        | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:88`             |
|  -64.7% |   -11 | 0.1% → <0.1% |        17 → 6 | `-(::Int64, ::Int64)`                                      | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:86`             |
|  -15.5% |   -11 |         0.2% |       71 → 60 | `&`                                                        | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:393`            |
|   -8.3% |   -10 |  0.4% → 0.3% |     120 → 110 | `length_continued`                                         | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/pointer.jl`            |
|   -9.0% |    -9 |         0.3% |      100 → 91 | `==`                                                       | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/promotion.jl:641`      |
|  -61.5% |    -8 |        <0.1% |        13 → 5 | `foldl_impl`                                               | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:46`          |
|  -38.9% |    -7 | 0.1% → <0.1% |       18 → 11 | `macro expansion`                                          | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/simdloop.jl`           |
|  -41.2% |    -7 | 0.1% → <0.1% |       17 → 10 | `ncodeunits`                                               | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:161` |
|  -35.3% |    -6 | 0.1% → <0.1% |       17 → 11 | `-`                                                        | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:86`             |
|   -3.6% |    -5 |         0.4% |     138 → 133 | `checkbounds`                                              | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/basic.jl:212`  |
| removed |    -3 | <0.1% → 0.0% |         3 → 0 | `foldl_impl`                                               | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:47`          |

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

##### `GenericMemory` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:588`)

| Change | Delta |      % |       Samples | Location                                                                                         |
| -----: | ----: | -----: | ------------: | ------------------------------------------------------------------------------------------------ |
| +26.2% |  +295 | 100.0% | 1,127 → 1,422 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:588` |

##### `_foldl_impl` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:61`)

| Change | Delta |            % | Samples | Location                                                                                          |
| -----: | ----: | -----------: | ------: | ------------------------------------------------------------------------------------------------- |
|    new |  +233 | 0.0% → 93.6% | 0 → 233 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60` |
|    new |    +5 |  0.0% → 2.0% |   0 → 5 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:51` |

##### `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`)

| Change | Delta |             % |       Samples | Location                                                                                                                                                                                                            |
| -----: | ----: | ------------: | ------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  +6.1% |  +252 | 60.0% → 62.1% | 4,130 → 4,382 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157` |
| -17.6% |   -54 |   4.5% → 3.6% |     307 → 253 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:72 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:72`   |
|  -2.0% |   -29 | 20.8% → 19.9% | 1,432 → 1,403 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:60 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:60`   |
|  +4.9% |   +14 |   4.1% → 4.2% |     284 → 298 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:155 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:155` |
|  +1.1% |    +6 |   7.7% → 7.6% |     527 → 533 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:73 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:73`   |

##### `indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64, ::Int64)` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`)

| Change | Delta |      % |       Samples | Location                                                                                          |
| -----: | ----: | -----: | ------------: | ------------------------------------------------------------------------------------------------- |
|  +7.9% |  +167 | 100.0% | 2,127 → 2,294 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163` |

##### `#write#81` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:185`)

| Change | Delta |            % | Samples | Location                                                                                                  |
| -----: | ----: | -----------: | ------: | --------------------------------------------------------------------------------------------------------- |
|    new |   +16 | 0.0% → 27.1% |  0 → 16 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:60`  |
|    new |   +16 | 0.0% → 27.1% |  0 → 16 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:200` |
|    new |    +6 | 0.0% → 10.2% |   0 → 6 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:197` |
|    new |    +5 |  0.0% → 8.5% |   0 → 5 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:72`  |
|    new |    +5 |  0.0% → 8.5% |   0 → 5 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:73`  |

##### `getindex` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:975`)

| Change | Delta |      % |   Samples | Location                                                                                               |
| -----: | ----: | -----: | --------: | ------------------------------------------------------------------------------------------------------ |
| +26.8% |   +44 | 100.0% | 164 → 208 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:975` |

##### `_setindex!` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:1025`)

| Change | Delta |      % |   Samples | Location                                                                                           |
| -----: | ----: | -----: | --------: | -------------------------------------------------------------------------------------------------- |
| +17.5% |   +40 | 100.0% | 229 → 269 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:1025` |

##### `+` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:87`)

| Change | Delta |      % |   Samples | Location                                                                                       |
| -----: | ----: | -----: | --------: | ---------------------------------------------------------------------------------------------- |
|  +5.9% |   +19 | 100.0% | 323 → 342 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:87` |

##### `getvalue(::Type{JSON3.Array}, ::Base.CodeUnits{UInt8, String}, ::SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}, ::Int64, ::UInt64)` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:131`)

| Change | Delta |             % | Samples | Location                                                                                                                                                                                                            |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| +50.0% |    +1 | 16.7% → 10.7% |   2 → 3 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:131 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:131` |

##### `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:87`)

|  Change | Delta |             % | Samples | Location                                                                                                                                                                                                        |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  +78.6% |   +11 | 17.9% → 27.8% | 14 → 25 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:87 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:87` |
|  -28.9% |   -11 | 48.7% → 30.0% | 38 → 27 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:88 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:88` |
| +250.0% |    +5 |   2.6% → 7.8% |   2 → 7 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:93 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:93` |
|     new |    +2 |   0.0% → 2.2% |   0 → 2 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:89`                                                                                                         |
|     new |    +1 |   0.0% → 1.1% |   0 → 1 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:97`                                                                                                         |

##### `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:218`)

| Change | Delta |             % |   Samples | Location                                                                                                                                                                                                          |
| -----: | ----: | ------------: | --------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| +13.9% |   +21 | 72.6% → 78.2% | 151 → 172 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:248 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:248` |
| -80.0% |    -4 |   2.4% → 0.5% |     5 → 1 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:225 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:225` |
| -44.4% |    -4 |   4.3% → 2.3% |     9 → 5 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:247 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:247` |
| +50.0% |    +2 |   1.9% → 2.7% |     4 → 6 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:278 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:278` |
| -33.3% |    -2 |   2.9% → 1.8% |     6 → 4 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:284 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:284` |

##### `getindex` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:401`)

| Change | Delta |      % | Samples | Location                                                                                               |
| -----: | ----: | -----: | ------: | ------------------------------------------------------------------------------------------------------ |
| +26.8% |   +11 | 100.0% | 41 → 52 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:401` |

##### `write(::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:340`)

| Change | Delta |      % | Samples | Location                                                                                                                                                                                                            |
| -----: | ----: | -----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| +27.8% |   +10 | 100.0% | 36 → 46 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:340 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:340` |

##### `memoryref` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:594`)

|  Change | Delta |      % | Samples | Location                                                                                         |
| ------: | ----: | -----: | ------: | ------------------------------------------------------------------------------------------------ |
| +111.1% |   +10 | 100.0% |  9 → 19 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:594` |

##### `unsafe_string` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:130`)

| Change | Delta |      % |   Samples | Location                                                                                                   |
| -----: | ----: | -----: | --------: | ---------------------------------------------------------------------------------------------------------- |
|  +7.5% |   +10 | 100.0% | 133 → 143 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:130` |

##### `macro expansion` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:23`)

| Change | Delta |      % | Samples | Location                                                                                                                                                                                                          |
| -----: | ----: | -----: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| +42.9% |    +9 | 100.0% | 21 → 30 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:23 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:23` |

##### `var\"#write#84\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.BoolType, ::Vector{UInt8}, ::Int64, ::Int64, ::Bool)` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:209`)

|  Change | Delta |             % | Samples | Location                                                                                                                                                                                                            |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| +180.0% |    +9 | 31.3% → 56.0% |  5 → 14 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:209 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:209` |
|   -9.1% |    -1 | 68.8% → 40.0% | 11 → 10 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:215 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:215` |
|     new |    +1 |   0.0% → 4.0% |   0 → 1 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:210`                                                                                                           |

##### `_setindex!` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:339`)

|  Change | Delta |      % | Samples | Location                                                                                         |
| ------: | ----: | -----: | ------: | ------------------------------------------------------------------------------------------------ |
| +266.7% |    +8 | 100.0% |  3 → 11 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:339` |

##### `BottomRF` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:84`)

| Change | Delta |      % |   Samples | Location                                                                                          |
| -----: | ----: | -----: | --------: | ------------------------------------------------------------------------------------------------- |
|  +2.8% |    +8 | 100.0% | 286 → 294 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:84` |

##### `#write#81` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:200`)

|  Change | Delta |             % | Samples | Location                                                                                                                                                                                                            |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  -21.3% |   -13 | 54.5% → 40.0% | 61 → 48 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:200 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:200` |
| +800.0% |    +8 |   0.9% → 7.5% |   1 → 9 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:181 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:181` |
| +116.7% |    +7 |  5.4% → 10.8% |  6 → 13 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:72 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:72`   |
|   +9.4% |    +3 | 28.6% → 29.2% | 32 → 35 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:60 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:60`   |
|  +16.7% |    +2 | 10.7% → 11.7% | 12 → 14 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:73 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:73`   |

##### `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.False})` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:189`)

|  Change | Delta |             % | Samples | Location                                                                                                                                                                                                          |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     new |    +6 |  0.0% → 54.5% |   0 → 6 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:189`                                                                                                          |
| removed |    -1 |  20.0% → 0.0% |   1 → 0 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:77`                                                                                                           |
|  +25.0% |    +1 | 80.0% → 45.5% |   4 → 5 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:198 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:198` |

##### `typeparser` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/Parsers/05lwR/src/floats.jl:152`)

|  Change | Delta |      % | Samples | Location                                                                                                     |
| ------: | ----: | -----: | ------: | ------------------------------------------------------------------------------------------------------------ |
| +250.0% |    +5 | 100.0% |   2 → 7 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/Parsers/05lwR/src/floats.jl:152` |

##### `unescape(::JSON3.PointerString)` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/strings.jl:48`)

|  Change | Delta |             % | Samples | Location                                                                                                                                                                                                                |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| +200.0% |    +4 | 10.5% → 25.0% |   2 → 6 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/strings.jl:54 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/strings.jl:54`   |
|  +66.7% |    +2 | 15.8% → 20.8% |   3 → 5 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/strings.jl:116 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/strings.jl:116` |
|     new |    +2 |   0.0% → 8.3% |   0 → 2 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/strings.jl:117`                                                                                                             |
|  -50.0% |    -1 |  10.5% → 4.2% |   2 → 1 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/strings.jl:56 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/strings.jl:56`   |
|  -33.3% |    -1 |  15.8% → 8.3% |   3 → 2 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/strings.jl:60 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/strings.jl:60`   |

##### `Array` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:17`)

| Change | Delta |             % | Samples | Location                                                                                                 |
| -----: | ----: | ------------: | ------: | -------------------------------------------------------------------------------------------------------- |
|    new |    +4 | 0.0% → 100.0% |   0 → 4 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:17` |

##### `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:87`)

| Change | Delta |      % | Samples | Location                                                                                                                                                                                                        |
| -----: | ----: | -----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| +18.8% |    +3 | 100.0% | 16 → 19 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:87 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:87` |

##### `getvalue` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:193`)

| Change | Delta |             % | Samples | Location                                                                                                  |
| -----: | ----: | ------------: | ------: | --------------------------------------------------------------------------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:193` |

##### `getvalue` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:184`)

|  Change | Delta |      % | Samples | Location                                                                                                                                                                                                            |
| ------: | ----: | -----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:184 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:184` |

##### `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Array}, ::Bool)` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:312`)

|  Change | Delta |      % | Samples | Location                                                                                                                                                                                                          |
| ------: | ----: | -----: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:312 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:312` |

##### `__scale(::Type{Float64}, ::UInt64, ::Int64, ::Bool)` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/Parsers/05lwR/src/floats.jl:613`)

| Change | Delta |            % | Samples | Location                                                                                                     |
| -----: | ----: | -----------: | ------: | ------------------------------------------------------------------------------------------------------------ |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/Parsers/05lwR/src/floats.jl:613` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/Parsers/05lwR/src/floats.jl:618` |

##### `write` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:147`)

| Change | Delta |             % | Samples | Location                                                                                                  |
| -----: | ----: | ------------: | ------: | --------------------------------------------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:147` |

##### `unsafe_load` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/pointer.jl:151`)

| Change | Delta |      % |   Samples | Location                                                                                            |
| -----: | ----: | -----: | --------: | --------------------------------------------------------------------------------------------------- |
|  +1.3% |    +7 | 100.0% | 558 → 565 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/pointer.jl:151` |

##### `<` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:83`)

| Change | Delta |      % | Samples | Location                                                                                       |
| -----: | ----: | -----: | ------: | ---------------------------------------------------------------------------------------------- |
| +31.8% |    +7 | 100.0% | 22 → 29 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:83` |

##### `checkbounds` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/basic.jl:204`)

|  Change | Delta |      % | Samples | Location                                                                                                  |
| ------: | ----: | -----: | ------: | --------------------------------------------------------------------------------------------------------- |
| +100.0% |    +5 | 100.0% |  5 → 10 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/basic.jl:204` |

##### `|` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:418`)

| Change | Delta |      % | Samples | Location                                                                                        |
| -----: | ----: | -----: | ------: | ----------------------------------------------------------------------------------------------- |
|  +5.4% |    +4 | 100.0% | 74 → 78 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:418` |

##### `unsafe_string` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:125`)

|  Change | Delta |      % | Samples | Location                                                                                                   |
| ------: | ----: | -----: | ------: | ---------------------------------------------------------------------------------------------------------- |
| +100.0% |    +4 | 100.0% |   4 → 8 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:125` |

##### `+(::UInt64, ::UInt64)` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:87`)

| Change | Delta |             % | Samples | Location                                                                                       |
| -----: | ----: | ------------: | ------: | ---------------------------------------------------------------------------------------------- |
|    new |    +4 | 0.0% → 100.0% |   0 → 4 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:87` |

##### `_setindex!` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/genericmemory.jl:263`)

| Change | Delta |      % | Samples | Location                                                                                                  |
| -----: | ----: | -----: | ------: | --------------------------------------------------------------------------------------------------------- |
| +15.8% |    +3 | 100.0% | 19 → 22 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/genericmemory.jl:263` |

##### `resize!(::Vector{UInt8}, ::Int64)` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:1533`)

|  Change | Delta |             % | Samples | Location                                                                                           |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------------------------------------------------- |
|     new |    +3 |  0.0% → 75.0% |   0 → 3 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:1533` |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:1542` |

##### `rehash!(::Dict{Symbol, Int64}, ::Int64)` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:138`)

|  Change | Delta |             % | Samples | Location                                                                                         |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------------ |
|  -60.0% |    -3 | 35.7% → 12.5% |   5 → 2 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:138` |
| removed |    -1 |   7.1% → 0.0% |   1 → 0 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:146` |
|  +33.3% |    +1 | 21.4% → 25.0% |   3 → 4 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:181` |

##### `_foldl_impl` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`)

| Change | Delta |             % | Samples | Location                                                                                          |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------------- |
| -97.2% |  -241 | 89.9% → 50.0% | 248 → 7 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60` |
| -66.7% |    -2 |   1.1% → 7.1% |   3 → 1 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:51` |

##### `iterate` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:75`)

| Change | Delta |      % |   Samples | Location                                                                                                                                                                                                          |
| -----: | ----: | -----: | --------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| -51.3% |  -140 | 100.0% | 273 → 133 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:75 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:75` |

##### `#write#81` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`)

|  Change | Delta |            % | Samples | Location                                                                                                     |
| ------: | ----: | -----------: | ------: | ------------------------------------------------------------------------------------------------------------ |
| removed |   -84 | 61.3% → 0.0% |  84 → 0 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:187` |
| removed |   -15 | 10.9% → 0.0% |  15 → 0 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:60`  |
| removed |   -10 |  7.3% → 0.0% |  10 → 0 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:73`  |
| removed |   -10 |  7.3% → 0.0% |  10 → 0 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:200` |
| removed |    -6 |  4.4% → 0.0% |   6 → 0 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:72`  |

##### `[unknown function]` (`<unknown>`)

| Change | Delta |             % |   Samples | Location |
| -----: | ----: | ------------: | --------: | -------- |
| -23.9% |   -43 | 61.9% → 63.1% | 180 → 137 | 147      |
| -31.6% |   -31 | 33.7% → 30.9% |   98 → 67 | 98       |
| -50.0% |    -3 |   2.1% → 1.4% |     6 → 3 | 181      |
|    new |    +2 |   0.0% → 0.9% |     0 → 2 | 12       |
| -16.7% |    -1 |   2.1% → 2.3% |     6 → 5 | 11       |

##### `parse_workload` (`profile.jl:18`)

| Change | Delta |      % | Samples | Location        |
| -----: | ----: | -----: | ------: | --------------- |
| -47.7% |   -41 | 100.0% | 86 → 45 | `profile.jl:18` |

##### `_symbol` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:1`)

| Change | Delta |      % |       Samples | Location                                                                                                                                                                                                        |
| -----: | ----: | -----: | ------------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  -0.5% |   -38 | 100.0% | 7,015 → 6,977 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:1 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:1` |

##### `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{String})` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:142`)

|  Change | Delta |             % | Samples | Location                                                                                                                                                                                                          |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  -25.6% |   -21 | 54.7% → 52.1% | 82 → 61 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:155 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:155` |
| +200.0% |    +2 |   0.7% → 2.6% |   1 → 3 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:149 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:149` |
|  -33.3% |    -2 |   4.0% → 3.4% |   6 → 4 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:167 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:167` |
| removed |    -1 |   0.7% → 0.0% |   1 → 0 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:77`                                                                                                           |
| removed |    -1 |   0.7% → 0.0% |   1 → 0 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:166`                                                                                                          |

##### `unsafe_string` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:126`)

| Change | Delta |      % |  Samples | Location                                                                                                   |
| -----: | ----: | -----: | -------: | ---------------------------------------------------------------------------------------------------------- |
| -31.7% |   -33 | 100.0% | 104 → 71 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:126` |

##### `indexed_iterate` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`)

| Change | Delta |      % |       Samples | Location                                                                                          |
| -----: | ----: | -----: | ------------: | ------------------------------------------------------------------------------------------------- |
|  -2.1% |   -32 | 100.0% | 1,492 → 1,460 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163` |

##### `Dict` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:80`)

| Change | Delta |      % | Samples | Location                                                                                        |
| -----: | ----: | -----: | ------: | ----------------------------------------------------------------------------------------------- |
| -29.5% |   -26 | 100.0% | 88 → 62 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:80` |

##### `ht_keyindex2_shorthash!(::Dict{Symbol, Int64}, ::Symbol)` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:267`)

| Change | Delta |             % |   Samples | Location                                                                                         |
| -----: | ----: | ------------: | --------: | ------------------------------------------------------------------------------------------------ |
|  -3.7% |   -12 | 60.9% → 60.7% | 324 → 312 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:291` |
| -72.7% |    -8 |   2.1% → 0.6% |    11 → 3 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:267` |
|  -7.3% |    -7 | 18.0% → 17.3% |   96 → 89 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:282` |
| +30.0% |    +6 |   3.8% → 5.1% |   20 → 26 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:281` |
| +50.0% |    +4 |   1.5% → 2.3% |    8 → 12 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:303` |

##### `setindex!(::Dict{Symbol, Int64}, ::Int64, ::Symbol)` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:356`)

| Change | Delta |             % | Samples | Location                                                                                         |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------------ |
| -62.5% |   -15 | 28.6% → 13.4% |  24 → 9 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:356` |
| -75.0% |    -3 |   4.8% → 1.5% |   4 → 1 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:358` |
|    new |    +1 |   0.0% → 1.5% |   0 → 1 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:360` |

##### `MappingRF` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98`)

| Change | Delta |      % | Samples | Location                                                                                          |
| -----: | ----: | -----: | ------: | ------------------------------------------------------------------------------------------------- |
| -52.0% |   -13 | 100.0% | 25 → 12 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98` |

##### `*` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:88`)

| Change | Delta |      % | Samples | Location                                                                                       |
| -----: | ----: | -----: | ------: | ---------------------------------------------------------------------------------------------- |
| -28.3% |   -13 | 100.0% | 46 → 33 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:88` |

##### `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40`)

|  Change | Delta |             % | Samples | Location                                                                                                                                                                                                          |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  -50.0% |    -5 | 38.5% → 33.3% |  10 → 5 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:47 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:47` |
|  -80.0% |    -4 |  19.2% → 6.7% |   5 → 1 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:51 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:51` |
| removed |    -2 |   7.7% → 0.0% |   2 → 0 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40`                                                                                                          |
| +100.0% |    +2 |  7.7% → 26.7% |   2 → 4 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:55 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:55` |

##### `-(::Int64, ::Int64)` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:86`)

| Change | Delta |      % | Samples | Location                                                                                       |
| -----: | ----: | -----: | ------: | ---------------------------------------------------------------------------------------------- |
| -64.7% |   -11 | 100.0% |  17 → 6 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:86` |

##### `&` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:393`)

| Change | Delta |      % | Samples | Location                                                                                        |
| -----: | ----: | -----: | ------: | ----------------------------------------------------------------------------------------------- |
| -15.5% |   -11 | 100.0% | 71 → 60 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:393` |

##### `defaultminimum` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:6`)

| Change | Delta |      % | Samples | Location                                                                                                                                                                                                        |
| -----: | ----: | -----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| -40.0% |    -6 | 100.0% |  15 → 9 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:6 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:6` |

##### `var\"#read!#9\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Array}, ::Bool)` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:312`)

|  Change | Delta |             % | Samples | Location                                                                                                                                                                                                          |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  -71.4% |    -5 | 63.6% → 33.3% |   7 → 2 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:312 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:312` |
|     new |    +4 |  0.0% → 66.7% |   0 → 4 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:319`                                                                                                          |
| removed |    -1 |   9.1% → 0.0% |   1 → 0 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:339`                                                                                                          |

##### `var\"#write#98\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:340`)

|  Change | Delta |             % | Samples | Location                                                                                                                                                                                                            |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  -23.3% |    -7 | 43.5% → 35.9% | 30 → 23 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:360 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:360` |
|  +71.4% |    +5 | 10.1% → 18.8% |  7 → 12 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:340 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:340` |
|  -20.0% |    -3 | 21.7% → 18.8% | 15 → 12 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:60 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:60`   |
|  +33.3% |    +2 |  8.7% → 12.5% |   6 → 8 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:351 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:351` |
| removed |    -1 |   1.4% → 0.0% |   1 → 0 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:345`                                                                                                           |

##### `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Nothing})` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:204`)

|  Change | Delta |            % | Samples | Location                                                                                                 |
| ------: | ----: | -----------: | ------: | -------------------------------------------------------------------------------------------------------- |
| removed |    -3 | 42.9% → 0.0% |   3 → 0 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:204` |
| removed |    -1 | 14.3% → 0.0% |   1 → 0 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:205` |

##### `promoteeltype` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:106`)

|  Change | Delta |             % | Samples | Location                                                                                                  |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------------------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:106` |

##### `typeparser(::Type{Float64}, ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Int16, ::Parsers.Options)` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/Parsers/05lwR/src/components.jl:392`)

|  Change | Delta |              % | Samples | Location                                                                                                         |
| ------: | ----: | -------------: | ------: | ---------------------------------------------------------------------------------------------------------------- |
| removed |    -3 |   33.3% → 0.0% |   3 → 0 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/Parsers/05lwR/src/components.jl:394` |
|  +16.7% |    +1 | 66.7% → 100.0% |   6 → 7 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/Parsers/05lwR/src/components.jl:392` |

##### `gettape` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:25`)

|  Change | Delta |             % | Samples | Location                                                                                                 |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------------------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:25` |

##### `write(::StructTypes.BoolType, ::Vector{UInt8}, ::Int64, ::Int64, ::Bool)` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:209`)

| Change | Delta |      % | Samples | Location                                                                                                                                                                                                            |
| -----: | ----: | -----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  -5.9% |    -2 | 100.0% | 34 → 32 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:209 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:209` |

##### `getinds` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:26`)

|  Change | Delta |             % | Samples | Location                                                                                                 |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------------------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:26` |

##### `Object` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:8`)

| Change | Delta |      % | Samples | Location                                                                                                                                                                                                        |
| -----: | ----: | -----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| -50.0% |    -2 | 100.0% |   4 → 2 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:8 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:8` |

##### `parsefrac` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/Parsers/05lwR/src/floats.jl:446`)

|  Change | Delta |             % | Samples | Location                                                                                                     |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------------------------ |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/Parsers/05lwR/src/floats.jl:446` |

##### `getproperty` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/Parsers/05lwR/src/Parsers.jl:140`)

|  Change | Delta |             % | Samples | Location                                                                                                      |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/Parsers/05lwR/src/Parsers.jl:140` |

##### `getvalue` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:213`)

| Change | Delta |      % | Samples | Location                                                                                                                                                                                                            |
| -----: | ----: | -----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  -5.3% |    -1 | 100.0% | 19 → 18 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:213 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:213` |

##### `getvalue` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:215`)

| Change | Delta |      % | Samples | Location                                                                                                                                                                                                            |
| -----: | ----: | -----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  -1.1% |    -1 | 100.0% | 89 → 88 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:215 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:215` |

##### `==` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/promotion.jl:641`)

| Change | Delta |      % |  Samples | Location                                                                                              |
| -----: | ----: | -----: | -------: | ----------------------------------------------------------------------------------------------------- |
|  -9.0% |    -9 | 100.0% | 100 → 91 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/promotion.jl:641` |

##### `foldl_impl` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:46`)

| Change | Delta |      % | Samples | Location                                                                                          |
| -----: | ----: | -----: | ------: | ------------------------------------------------------------------------------------------------- |
| -61.5% |    -8 | 100.0% |  13 → 5 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:46` |

##### `ncodeunits` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:161`)

| Change | Delta |      % | Samples | Location                                                                                                   |
| -----: | ----: | -----: | ------: | ---------------------------------------------------------------------------------------------------------- |
| -41.2% |    -7 | 100.0% | 17 → 10 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:161` |

##### `-` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:86`)

| Change | Delta |      % | Samples | Location                                                                                       |
| -----: | ----: | -----: | ------: | ---------------------------------------------------------------------------------------------- |
| -35.3% |    -6 | 100.0% | 17 → 11 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:86` |

##### `checkbounds` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/basic.jl:212`)

| Change | Delta |      % |   Samples | Location                                                                                                  |
| -----: | ----: | -----: | --------: | --------------------------------------------------------------------------------------------------------- |
|  -3.6% |    -5 | 100.0% | 138 → 133 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/basic.jl:212` |

##### `foldl_impl` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:47`)

|  Change | Delta |             % | Samples | Location                                                                                          |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:47` |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

|  Change |   Delta |             % |         Samples | Function                                                                  | Location                                                                                                                                                                                                            |
| ------: | ------: | ------------: | --------------: | ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     new | +17,937 |  0.0% → 53.7% |      0 → 17,937 | `#write#81`                                                               | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:185`                                                                                                           |
|     new |  +5,451 |  0.0% → 16.3% |       0 → 5,451 | `_foldl_impl`                                                             | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:61`                                                                                                                   |
|  +26.2% |    +295 |   3.3% → 4.3% |   1,127 → 1,422 | `GenericMemory`                                                           | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:588`                                                                                                                    |
| +268.2% |    +287 |   0.3% → 1.2% |       107 → 394 | `_setindex!`                                                              | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:339`                                                                                                                    |
|  +75.0% |    +255 |   1.0% → 1.8% |       340 → 595 | `rehash!(::Dict{Symbol, Int64}, ::Int64)`                                 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:138`                                                                                                                    |
|   +1.3% |    +237 | 52.6% → 53.8% | 17,728 → 17,965 | `write`                                                                   | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:147 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:147` |
|   +1.3% |    +234 | 52.6% → 53.8% | 17,732 → 17,966 | `#write#79`                                                               | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157` |
|  +20.3% |    +234 |   3.4% → 4.2% |   1,153 → 1,387 | `setindex!(::Dict{Symbol, Int64}, ::Int64, ::Symbol)`                     | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:356`                                                                                                                    |
|   +0.9% |    +217 | 70.9% → 72.2% | 23,882 → 24,099 | `#write#58`                                                               | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:40 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:40`   |
|   +0.7% |    +192 | 76.4% → 77.7% | 25,752 → 25,944 | `[unknown function]`                                                      | `<unknown>`                                                                                                                                                                                                         |
|   +0.7% |    +192 | 76.4% → 77.7% | 25,752 → 25,944 | `macro expansion`                                                         | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/stdlib/v1.13/Profile/src/Profile.jl:60`                                                                                              |
|   +0.7% |    +192 | 76.4% → 77.7% | 25,752 → 25,944 | `capture_cpu`                                                             | `profile.jl:29`                                                                                                                                                                                                     |
|   +0.7% |    +192 | 76.4% → 77.7% | 25,752 → 25,944 | `eval(::Module, ::Any)`                                                   | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:489`                                                                                                                    |
|   +0.7% |    +192 | 76.4% → 77.7% | 25,752 → 25,944 | `include_string(::typeof(identity), ::Module, ::String, ::String)`        | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/loading.jl:2989`                                                                                                                |
|   +0.7% |    +192 | 76.4% → 77.7% | 25,752 → 25,944 | `_include(::Function, ::Module, ::String)`                                | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/loading.jl:3083`                                                                                                                |
|   +0.7% |    +192 | 76.4% → 77.7% | 25,752 → 25,944 | `include(::Module, ::String)`                                             | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base.jl:309`                                                                                                                    |
|   +0.7% |    +192 | 76.4% → 77.7% | 25,752 → 25,944 | `exec_options(::Base.JLOptions)`                                          | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/client.jl:234`                                                                                                                  |
|   +0.7% |    +192 | 76.4% → 77.7% | 25,752 → 25,944 | `_start()`                                                                | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/client.jl:570`                                                                                                                  |
|   +0.7% |    +191 | 76.4% → 77.7% | 25,753 → 25,944 | `parse_workload`                                                          | `profile.jl:18`                                                                                                                                                                                                     |
|   +7.9% |    +167 |   6.3% → 6.9% |   2,127 → 2,294 | `indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64, ::Int64)` | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`                                                                                                                   |

##### Third-party

| Change |   Delta |             % |         Samples | Function                                                                                                                                                                                                                         | Location                                                                                                                                                                                                            |
| -----: | ------: | ------------: | --------------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|    new | +17,937 |  0.0% → 53.7% |      0 → 17,937 | `#write#81`                                                                                                                                                                                                                      | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:185`                                                                                                           |
|  +1.3% |    +237 | 52.6% → 53.8% | 17,728 → 17,965 | `write`                                                                                                                                                                                                                          | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:147 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:147` |
|  +1.3% |    +234 | 52.6% → 53.8% | 17,732 → 17,966 | `#write#79`                                                                                                                                                                                                                      | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157` |
|  +0.9% |    +217 | 70.9% → 72.2% | 23,882 → 24,099 | `#write#58`                                                                                                                                                                                                                      | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:40 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:40`   |
|  +4.6% |    +160 | 10.4% → 10.9% |   3,490 → 3,650 | `getvalue`                                                                                                                                                                                                                       | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:214 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:214` |
|  +3.9% |    +152 | 11.7% → 12.3% |   3,938 → 4,090 | `iterate`                                                                                                                                                                                                                        | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:81 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:81`   |
|  +8.4% |    +111 |   3.9% → 4.3% |   1,316 → 1,427 | `write(::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)`                                                                                                                                                   | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:340 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:340` |
|  +7.3% |     +95 |   3.9% → 4.2% |   1,309 → 1,404 | `var\"#write#98\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)`                                                          | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:340 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:340` |
|  +2.8% |     +90 |  9.6% → 10.0% |   3,251 → 3,341 | `iterate`                                                                                                                                                                                                                        | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:78 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:78`   |
|  +1.7% |     +88 | 15.2% → 15.6% |   5,130 → 5,218 | `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})`                                                                                               | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40`   |
|  +1.7% |     +86 | 15.4% → 15.8% |   5,186 → 5,272 | `getvalue`                                                                                                                                                                                                                       | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:127 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:127` |
|  +4.3% |     +58 |   4.0% → 4.2% |   1,347 → 1,405 | `var\"#read#6\"(::Bool, ::Nothing, ::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.read), ::String)`                                                                                                       | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:30 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:30`     |
|  +4.3% |     +58 |   4.0% → 4.2% |   1,347 → 1,405 | `read`                                                                                                                                                                                                                           | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:30 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:30`     |
|  +3.9% |     +50 |   3.9% → 4.0% |   1,298 → 1,348 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)`                                                      | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:87 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:87`     |
|  +6.2% |     +49 |   2.4% → 2.5% |       793 → 842 | `realloc!(::Vector{UInt8}, ::Int64, ::Int64)`                                                                                                                                                                                    | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:51 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:51`   |
|  +3.7% |     +48 |   3.9% → 4.0% |   1,301 → 1,349 | `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)`                                                                     | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:87 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:87`     |
|  +3.7% |     +48 |   3.9% → 4.0% |   1,301 → 1,349 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:218 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:218`   |
|  +3.7% |     +48 |   3.9% → 4.0% |   1,302 → 1,350 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)`                                             | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:218 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:218`   |
|  +3.7% |     +48 |   3.8% → 4.0% |   1,297 → 1,345 | `var\"#read!#9\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Array}, ::Bool)`  | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:312 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:312`   |
|  +3.7% |     +48 |   3.8% → 4.0% |   1,297 → 1,345 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Array}, ::Bool)`                                              | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:312 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:312`   |

##### Standard library

|  Change |  Delta |             % |         Samples | Function                                                                  | Location                                                                                                               |
| ------: | -----: | ------------: | --------------: | ------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
|     new | +5,451 |  0.0% → 16.3% |       0 → 5,451 | `_foldl_impl`                                                             | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:61`                      |
|  +26.2% |   +295 |   3.3% → 4.3% |   1,127 → 1,422 | `GenericMemory`                                                           | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:588`                       |
| +268.2% |   +287 |   0.3% → 1.2% |       107 → 394 | `_setindex!`                                                              | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:339`                       |
|  +75.0% |   +255 |   1.0% → 1.8% |       340 → 595 | `rehash!(::Dict{Symbol, Int64}, ::Int64)`                                 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:138`                       |
|  +20.3% |   +234 |   3.4% → 4.2% |   1,153 → 1,387 | `setindex!(::Dict{Symbol, Int64}, ::Int64, ::Symbol)`                     | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:356`                       |
|   +0.7% |   +192 | 76.4% → 77.7% | 25,752 → 25,944 | `macro expansion`                                                         | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/stdlib/v1.13/Profile/src/Profile.jl:60` |
|   +0.7% |   +192 | 76.4% → 77.7% | 25,752 → 25,944 | `eval(::Module, ::Any)`                                                   | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:489`                       |
|   +0.7% |   +192 | 76.4% → 77.7% | 25,752 → 25,944 | `include_string(::typeof(identity), ::Module, ::String, ::String)`        | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/loading.jl:2989`                   |
|   +0.7% |   +192 | 76.4% → 77.7% | 25,752 → 25,944 | `_include(::Function, ::Module, ::String)`                                | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/loading.jl:3083`                   |
|   +0.7% |   +192 | 76.4% → 77.7% | 25,752 → 25,944 | `include(::Module, ::String)`                                             | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base.jl:309`                       |
|   +0.7% |   +192 | 76.4% → 77.7% | 25,752 → 25,944 | `exec_options(::Base.JLOptions)`                                          | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/client.jl:234`                     |
|   +0.7% |   +192 | 76.4% → 77.7% | 25,752 → 25,944 | `_start()`                                                                | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/client.jl:570`                     |
|   +7.9% |   +167 |   6.3% → 6.9% |   2,127 → 2,294 | `indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64, ::Int64)` | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`                      |
|   +3.3% |    +98 |   8.8% → 9.2% |   2,981 → 3,079 | `iterate`                                                                 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/iterators.jl:697`                  |
|   +6.8% |    +57 |   2.5% → 2.7% |       836 → 893 | `Array`                                                                   | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:648`                       |
|  +25.5% |    +55 |   0.6% → 0.8% |       216 → 271 | `macro expansion`                                                         | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/simdloop.jl:77`                    |
|   +6.1% |    +48 |   2.4% → 2.5% |       793 → 841 | `Array`                                                                   | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:661`                       |
|   +6.1% |    +48 |   2.4% → 2.5% |       793 → 841 | `zeros`                                                                   | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:626`                      |
|   +6.1% |    +48 |   2.4% → 2.5% |       793 → 841 | `zeros`                                                                   | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:622`                      |
|  +26.8% |    +44 |   0.5% → 0.6% |       164 → 208 | `getindex`                                                                | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:975`                 |

##### Native

| Change | Delta |             % |         Samples | Function                                                                                                                                                                                | Location    |
| -----: | ----: | ------------: | --------------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
|  +0.7% |  +192 | 76.4% → 77.7% | 25,752 → 25,944 | `[unknown function]`                                                                                                                                                                    | `<unknown>` |
| +50.0% |    +2 |         <0.1% |           4 → 6 | `(::JSON3.var\"#defaultminimum##0#defaultminimum##1\"{JSON3.Array{Int64, Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}}})(::Int64)` | `<unknown>` |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

|  Change |   Delta |             % |       Samples | Function                                                                                                       | Location                                                                                                                                                                                                            |
| ------: | ------: | ------------: | ------------: | -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| removed | -17,687 |  52.5% → 0.0% |    17,687 → 0 | `#write#81`                                                                                                    | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`                                                                                                            |
|   -6.4% |    -507 | 23.6% → 22.3% | 7,943 → 7,436 | `(anonymous)`                                                                                                  | `<unknown>`                                                                                                                                                                                                         |
|  -11.3% |    -108 |   2.8% → 2.5% |     954 → 846 | `iterate`                                                                                                      | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:75 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:75`   |
|   -5.7% |    -103 |   5.4% → 5.1% | 1,804 → 1,701 | `getindex`                                                                                                     | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:163 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:163` |
|   -5.2% |     -52 |   3.0% → 2.8% |   1,002 → 950 | `isassigned`                                                                                                   | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:1641`                                                                                                       |
|  -10.0% |     -44 |   1.3% → 1.2% |     438 → 394 | `length(::String)`                                                                                             | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:540`                                                                                                          |
|   -0.5% |     -38 | 20.8% → 20.9% | 7,015 → 6,977 | `_symbol`                                                                                                      | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:1 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:1`     |
|   -0.5% |     -38 | 20.8% → 20.9% | 7,015 → 6,977 | `getvalue`                                                                                                     | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:187 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:187` |
|   -4.1% |     -35 |   2.5% → 2.4% |     847 → 812 | `ht_keyindex2_shorthash!(::Dict{Symbol, Int64}, ::Symbol)`                                                     | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:267`                                                                                                                    |
|   -3.3% |     -33 |   3.0% → 2.9% |   1,002 → 969 | `indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64)`                                               | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`                                                                                                                   |
|  -31.7% |     -33 |   0.3% → 0.2% |      104 → 71 | `unsafe_string`                                                                                                | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:126`                                                                                                          |
|   -2.1% |     -32 |          4.4% | 1,492 → 1,460 | `indexed_iterate`                                                                                              | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`                                                                                                                   |
|  -26.9% |     -29 |   0.3% → 0.2% |      108 → 79 | `getvalue`                                                                                                     | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:126 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:126` |
|  -25.9% |     -28 |   0.3% → 0.2% |      108 → 80 | `getvalue`                                                                                                     | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:195 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:195` |
|  -71.8% |     -28 |  0.1% → <0.1% |       39 → 11 | `iterate`                                                                                                      | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/range.jl`                                                                                                                       |
|   -8.4% |     -27 |   1.0% → 0.9% |     323 → 296 | `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{String})` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:142 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:142`   |
|  -29.5% |     -26 |   0.3% → 0.2% |       88 → 62 | `Dict`                                                                                                         | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:80`                                                                                                                     |
|   -0.3% |     -21 | 18.2% → 18.4% | 6,150 → 6,129 | `defaultminimum`                                                                                               | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:12 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:12`   |
|  -34.5% |     -19 |   0.2% → 0.1% |       55 → 36 | `length_continued`                                                                                             | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:564`                                                                                                          |
|  -12.8% |     -19 |          0.4% |     149 → 130 | `#write#81`                                                                                                    | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:200 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:200` |

##### Third-party

| Change | Delta |             % |       Samples | Function                                                                                                              | Location                                                                                                                                                                                                            |
| -----: | ----: | ------------: | ------------: | --------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| -11.3% |  -108 |   2.8% → 2.5% |     954 → 846 | `iterate`                                                                                                             | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:75 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:75`   |
|  -5.7% |  -103 |   5.4% → 5.1% | 1,804 → 1,701 | `getindex`                                                                                                            | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:163 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:163` |
|  -0.5% |   -38 | 20.8% → 20.9% | 7,015 → 6,977 | `_symbol`                                                                                                             | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:1 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:1`     |
|  -0.5% |   -38 | 20.8% → 20.9% | 7,015 → 6,977 | `getvalue`                                                                                                            | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:187 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:187` |
| -26.9% |   -29 |   0.3% → 0.2% |      108 → 79 | `getvalue`                                                                                                            | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:126 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:126` |
| -25.9% |   -28 |   0.3% → 0.2% |      108 → 80 | `getvalue`                                                                                                            | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:195 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:195` |
|  -8.4% |   -27 |   1.0% → 0.9% |     323 → 296 | `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{String})`        | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:142 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:142`   |
|  -0.3% |   -21 | 18.2% → 18.4% | 6,150 → 6,129 | `defaultminimum`                                                                                                      | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:12 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:12`   |
| -12.8% |   -19 |          0.4% |     149 → 130 | `#write#81`                                                                                                           | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:200 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:200` |
|  -6.1% |   -15 |          0.7% |     247 → 232 | `getvalue`                                                                                                            | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:218 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:218` |
| -50.0% |   -10 |  0.1% → <0.1% |       20 → 10 | `length`                                                                                                              | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:38 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:38`   |
| -16.7% |    -9 |   0.2% → 0.1% |       54 → 45 | `getnontypemask`                                                                                                      | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:114 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:114` |
| -14.3% |    -7 |          0.1% |       49 → 42 | `typeparser(::Type{Float64}, ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Int16, ::Parsers.Options)` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/Parsers/05lwR/src/components.jl:392`                                                                                                    |
| -40.0% |    -6 |         <0.1% |        15 → 9 | `defaultminimum`                                                                                                      | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:6 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:6`     |
| -10.2% |    -6 |          0.2% |       59 → 53 | `write(::StructTypes.NumberType, ::Vector{UInt8}, ::Int64, ::Int64, ::Int64)`                                         | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:224 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:224` |
| -17.2% |    -5 |          0.1% |       29 → 24 | `typeparser`                                                                                                          | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/Parsers/05lwR/src/floats.jl:270`                                                                                                        |
| -17.2% |    -5 |          0.1% |       29 → 24 | `parsedigits`                                                                                                         | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/Parsers/05lwR/src/floats.jl:302`                                                                                                        |
| -57.1% |    -4 |         <0.1% |         7 → 3 | `populateinds!`                                                                                                       | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:66 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:66`   |
| -26.7% |    -4 |         <0.1% |       15 → 11 | `isarray`                                                                                                             | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:61 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:61`   |
| -15.0% |    -3 |          0.1% |       20 → 17 | `iterate`                                                                                                             | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:82 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:82`   |

##### Standard library

|  Change |   Delta |             % |       Samples | Function                                                         | Location                                                                                                      |
| ------: | ------: | ------------: | ------------: | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| removed | -17,687 |  52.5% → 0.0% |    17,687 → 0 | `#write#81`                                                      | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`      |
|   -5.2% |     -52 |   3.0% → 2.8% |   1,002 → 950 | `isassigned`                                                     | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:1641` |
|  -10.0% |     -44 |   1.3% → 1.2% |     438 → 394 | `length(::String)`                                               | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:540`    |
|   -4.1% |     -35 |   2.5% → 2.4% |     847 → 812 | `ht_keyindex2_shorthash!(::Dict{Symbol, Int64}, ::Symbol)`       | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:267`              |
|   -3.3% |     -33 |   3.0% → 2.9% |   1,002 → 969 | `indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64)` | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`             |
|  -31.7% |     -33 |   0.3% → 0.2% |      104 → 71 | `unsafe_string`                                                  | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:126`    |
|   -2.1% |     -32 |          4.4% | 1,492 → 1,460 | `indexed_iterate`                                                | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`             |
|  -71.8% |     -28 |  0.1% → <0.1% |       39 → 11 | `iterate`                                                        | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/range.jl`                 |
|  -29.5% |     -26 |   0.3% → 0.2% |       88 → 62 | `Dict`                                                           | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:80`               |
|  -34.5% |     -19 |   0.2% → 0.1% |       55 → 36 | `length_continued`                                               | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:564`    |
|   -0.3% |     -17 | 18.2% → 18.4% | 6,146 → 6,129 | `_foldl_impl`                                                    | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:56`             |
|   -0.3% |     -17 | 18.2% → 18.4% | 6,146 → 6,129 | `foldl_impl`                                                     | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:46`             |
|   -0.3% |     -17 | 18.2% → 18.4% | 6,146 → 6,129 | `mapfoldl_impl`                                                  | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:42`             |
|   -0.3% |     -17 | 18.2% → 18.4% | 6,146 → 6,129 | `#mapfoldl#271`                                                  | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:173`            |
|   -0.3% |     -17 | 18.2% → 18.4% | 6,146 → 6,129 | `mapfoldl`                                                       | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:173`            |
|   -0.3% |     -17 | 18.2% → 18.4% | 6,146 → 6,129 | `#mapreduce#275`                                                 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:306`            |
|   -0.3% |     -17 | 18.2% → 18.4% | 6,146 → 6,129 | `mapreduce`                                                      | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:306`            |
|   -0.3% |     -17 | 18.2% → 18.4% | 6,146 → 6,129 | `#sum#278`                                                       | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:535`            |
|   -0.3% |     -17 | 18.2% → 18.4% | 6,146 → 6,129 | `sum`                                                            | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:535`            |
|   -0.3% |     -17 | 18.2% → 18.4% | 6,146 → 6,129 | `sum`                                                            | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:564`            |

##### Unknown

| Change | Delta |             % |       Samples | Function      | Location    |
| -----: | ----: | ------------: | ------------: | ------------- | ----------- |
|  -6.4% |  -507 | 23.6% → 22.3% | 7,943 → 7,436 | `(anonymous)` | `<unknown>` |

##### Native

| Change | Delta |             % |       Samples | Function                                                                     | Location    |
| -----: | ----: | ------------: | ------------: | ---------------------------------------------------------------------------- | ----------- |
|  -0.2% |   -11 | 18.2% → 18.3% | 6,133 → 6,122 | `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` | `<unknown>` |
|  -0.2% |   -10 | 18.1% → 18.3% | 6,112 → 6,102 | `#defaultminimum##0`                                                         | `<unknown>` |

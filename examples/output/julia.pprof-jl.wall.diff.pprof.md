# Sampling profile diff

Collected 32,046 samples → 33,375 samples (+1,329 samples, +4.1%).

| Category         | Change | Delta |             % |         Samples |
| ---------------- | -----: | ----: | ------------: | --------------: |
| Third-party      |  +4.1% |  +603 | 45.9% → 45.8% | 14,694 → 15,297 |
| Standard library |  +2.3% |  +197 | 27.2% → 26.7% |   8,717 → 8,914 |
| Unknown          |  +7.3% |  +534 | 22.8% → 23.4% |   7,292 → 7,826 |
| Native           |  +1.3% |   +16 |   4.0% → 3.9% |   1,274 → 1,290 |
| Ours             | -30.4% |   -21 |   0.2% → 0.1% |         69 → 48 |

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples taken directly in the function body, excluding callees.

|  Change | Delta |             % |       Samples | Function                                                                                                                                                                    | Location                                                                                                                                                                                                            |
| ------: | ----: | ------------: | ------------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|   +7.3% |  +534 | 22.8% → 23.4% | 7,292 → 7,826 | `(anonymous)`                                                                                                                                                               | `<unknown>`                                                                                                                                                                                                         |
|   +7.8% |  +509 | 20.4% → 21.1% | 6,528 → 7,037 | `#write#79`                                                                                                                                                                 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157` |
|   +1.4% |   +93 | 21.4% → 20.8% | 6,857 → 6,950 | `_symbol`                                                                                                                                                                   | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:1 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:1`     |
|   +2.7% |   +56 |   6.5% → 6.4% | 2,067 → 2,123 | `indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64, ::Int64)`                                                                                                   | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`                                                                                                                   |
|  +21.1% |   +49 |   0.7% → 0.8% |     232 → 281 | `BottomRF`                                                                                                                                                                  | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:84`                                                                                                                   |
|   +6.7% |   +36 |          1.7% |     535 → 571 | `ht_keyindex2_shorthash!(::Dict{Symbol, Int64}, ::Symbol)`                                                                                                                  | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:267`                                                                                                                    |
|  +12.1% |   +31 |   0.8% → 0.9% |     257 → 288 | `_foldl_impl`                                                                                                                                                               | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`                                                                                                                   |
|  +39.5% |   +30 |   0.2% → 0.3% |      76 → 106 | `getvalue`                                                                                                                                                                  | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:215 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:215` |
|  +19.5% |   +30 |   0.5% → 0.6% |     154 → 184 | `unsafe_string`                                                                                                                                                             | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:130`                                                                                                          |
|  +17.3% |   +22 |          0.4% |     127 → 149 | `checkbounds`                                                                                                                                                               | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/basic.jl:212`                                                                                                           |
|   +1.6% |   +21 |   4.0% → 3.9% | 1,286 → 1,307 | `GenericMemory`                                                                                                                                                             | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:588`                                                                                                                    |
| +210.0% |   +21 |  <0.1% → 0.1% |       10 → 31 | `iterate`                                                                                                                                                                   | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/range.jl`                                                                                                                       |
| +105.9% |   +18 |          0.1% |       17 → 35 | `write(::StructTypes.BoolType, ::Vector{UInt8}, ::Int64, ::Int64, ::Bool)`                                                                                                  | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:209 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:209` |
|   +1.2% |   +12 |   3.2% → 3.1% | 1,025 → 1,037 | `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})`                                                                                                | `<unknown>`                                                                                                                                                                                                         |
|  +14.3% |   +12 |          0.3% |       84 → 96 | `unsafe_string`                                                                                                                                                             | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:126`                                                                                                          |
|   +1.9% |   +10 |          1.6% |     522 → 532 | `unsafe_load`                                                                                                                                                               | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/pointer.jl:151`                                                                                                                 |
|  +76.9% |   +10 |  <0.1% → 0.1% |       13 → 23 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:87 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:87`     |
|  +10.3% |   +10 |          0.3% |      97 → 107 | `length_continued`                                                                                                                                                          | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/pointer.jl`                                                                                                                     |
|   +5.7% |   +10 |   0.5% → 0.6% |     174 → 184 | `getindex`                                                                                                                                                                  | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:975`                                                                                                              |
|   +3.7% |    +9 |          0.8% |     242 → 251 | `_setindex!`                                                                                                                                                                | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:1025`                                                                                                                  |

##### Third-party

|  Change | Delta |             % |       Samples | Function                                                                                                                                                                                                                                                                              | Location                                                                                                                                                                                                              |
| ------: | ----: | ------------: | ------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|   +7.8% |  +509 | 20.4% → 21.1% | 6,528 → 7,037 | `#write#79`                                                                                                                                                                                                                                                                           | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`   |
|   +1.4% |   +93 | 21.4% → 20.8% | 6,857 → 6,950 | `_symbol`                                                                                                                                                                                                                                                                             | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:1 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:1`       |
|  +39.5% |   +30 |   0.2% → 0.3% |      76 → 106 | `getvalue`                                                                                                                                                                                                                                                                            | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:215 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:215`   |
| +105.9% |   +18 |          0.1% |       17 → 35 | `write(::StructTypes.BoolType, ::Vector{UInt8}, ::Int64, ::Int64, ::Bool)`                                                                                                                                                                                                            | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:209 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:209`   |
|  +76.9% |   +10 |  <0.1% → 0.1% |       13 → 23 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)`                                                                                                           | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:87 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:87`       |
|  +42.1% |    +8 |          0.1% |       19 → 27 | `macro expansion`                                                                                                                                                                                                                                                                     | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:14 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:14`     |
|  +30.4% |    +7 |          0.1% |       23 → 30 | `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})`                                                                                                                                                    | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40`     |
| +233.3% |    +7 |         <0.1% |        3 → 10 | `write(::StructTypes.NumberType, ::Vector{UInt8}, ::Int64, ::Int64, ::Int64)`                                                                                                                                                                                                         | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:224 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:224`   |
|  +43.8% |    +7 |  <0.1% → 0.1% |       16 → 23 | `unescape(::JSON3.PointerString)`                                                                                                                                                                                                                                                     | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/strings.jl:48 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/strings.jl:48` |
|  +55.6% |    +5 |         <0.1% |        9 → 14 | `parsedigits`                                                                                                                                                                                                                                                                         | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/Parsers/05lwR/src/floats.jl`                                                                                                              |
|  +26.3% |    +5 |          0.1% |       19 → 24 | `var\"#write#84\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.BoolType, ::Vector{UInt8}, ::Int64, ::Int64, ::Bool)`                                                                                                                   | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:209 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:209`   |
|  +66.7% |    +4 |         <0.1% |        6 → 10 | `defaultminimum`                                                                                                                                                                                                                                                                      | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:6 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:6`       |
|   +5.1% |    +4 |          0.2% |       78 → 82 | `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)`                                                                                                                          | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:87 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:87`       |
| +150.0% |    +3 |         <0.1% |         2 → 5 | `getvalue`                                                                                                                                                                                                                                                                            | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:184 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:184`   |
|  +13.6% |    +3 |          0.1% |       22 → 25 | `var\"#write#86\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.NumberType, ::Vector{UInt8}, ::Int64, ::Int64, ::Int64)`                                                                                                                | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:224 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:224`   |
| +300.0% |    +3 |         <0.1% |         1 → 4 | `parsedigits`                                                                                                                                                                                                                                                                         | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/Parsers/05lwR/src/floats.jl:348`                                                                                                          |
| +150.0% |    +3 |         <0.1% |         2 → 5 | `promoteeltype`                                                                                                                                                                                                                                                                       | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:100 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:100`   |
| +150.0% |    +3 |         <0.1% |         2 → 5 | `promoteeltype`                                                                                                                                                                                                                                                                       | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:98 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:98`     |
|     new |    +3 |  0.0% → <0.1% |         0 → 3 | `var\"#write#81\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.ArrayType, ::Vector{UInt8}, ::Int64, ::Int64, ::JSON3.Array{Int64, Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:181 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:181`   |
| +200.0% |    +2 |         <0.1% |         1 → 3 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Array}, ::Bool)`                                                                                                   | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:312 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:312`     |

##### Standard library

|  Change | Delta |            % |       Samples | Function                                                                  | Location                                                                                                      |
| ------: | ----: | -----------: | ------------: | ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
|   +2.7% |   +56 |  6.5% → 6.4% | 2,067 → 2,123 | `indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64, ::Int64)` | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`             |
|  +21.1% |   +49 |  0.7% → 0.8% |     232 → 281 | `BottomRF`                                                                | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:84`             |
|   +6.7% |   +36 |         1.7% |     535 → 571 | `ht_keyindex2_shorthash!(::Dict{Symbol, Int64}, ::Symbol)`                | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:267`              |
|  +12.1% |   +31 |  0.8% → 0.9% |     257 → 288 | `_foldl_impl`                                                             | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`             |
|  +19.5% |   +30 |  0.5% → 0.6% |     154 → 184 | `unsafe_string`                                                           | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:130`    |
|  +17.3% |   +22 |         0.4% |     127 → 149 | `checkbounds`                                                             | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/basic.jl:212`     |
|   +1.6% |   +21 |  4.0% → 3.9% | 1,286 → 1,307 | `GenericMemory`                                                           | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:588`              |
| +210.0% |   +21 | <0.1% → 0.1% |       10 → 31 | `iterate`                                                                 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/range.jl`                 |
|  +14.3% |   +12 |         0.3% |       84 → 96 | `unsafe_string`                                                           | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:126`    |
|   +1.9% |   +10 |         1.6% |     522 → 532 | `unsafe_load`                                                             | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/pointer.jl:151`           |
|  +10.3% |   +10 |         0.3% |      97 → 107 | `length_continued`                                                        | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/pointer.jl`               |
|   +5.7% |   +10 |  0.5% → 0.6% |     174 → 184 | `getindex`                                                                | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:975`        |
|   +3.7% |    +9 |         0.8% |     242 → 251 | `_setindex!`                                                              | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:1025`            |
|   +9.9% |    +8 |         0.3% |       81 → 89 | `\|`                                                                      | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:418`               |
| +114.3% |    +8 |        <0.1% |        7 → 15 | `<=`                                                                      | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:560`               |
|     new |    +7 | 0.0% → <0.1% |         0 → 7 | `isassigned`                                                              | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:1642` |
|     new |    +7 | 0.0% → <0.1% |         0 → 7 | `_string_n`                                                               | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:136`    |
|   +9.5% |    +6 |         0.2% |       63 → 69 | `&`                                                                       | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:393`               |
|  +41.7% |    +5 | <0.1% → 0.1% |       12 → 17 | `macro expansion`                                                         | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/simdloop.jl`              |
| +125.0% |    +5 |        <0.1% |         4 → 9 | `-(::Int64, ::Int64)`                                                     | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:86`                |

##### Unknown

| Change | Delta |             % |       Samples | Function      | Location    |
| -----: | ----: | ------------: | ------------: | ------------- | ----------- |
|  +7.3% |  +534 | 22.8% → 23.4% | 7,292 → 7,826 | `(anonymous)` | `<unknown>` |

##### Native

| Change | Delta |            % |       Samples | Function                                                                                                                                                                                | Location    |
| -----: | ----: | -----------: | ------------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
|  +1.2% |   +12 |  3.2% → 3.1% | 1,025 → 1,037 | `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})`                                                                                                            | `<unknown>` |
|  +2.1% |    +5 |  0.8% → 0.7% |     242 → 247 | `[unknown function]`                                                                                                                                                                    | `<unknown>` |
|    new |    +1 | 0.0% → <0.1% |         0 → 1 | `(::JSON3.var\"#defaultminimum##0#defaultminimum##1\"{JSON3.Array{Int64, Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}}})(::Int64)` | `<unknown>` |

#### Improvements

Functions with the largest decrease in samples taken directly in the function body, excluding callees.

|  Change | Delta |            % |       Samples | Function                                                                                                                                                                                                                         | Location                                                                                                                                                                                                            |
| ------: | ----: | -----------: | ------------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  -70.7% |   -29 | 0.1% → <0.1% |       41 → 12 | `Array`                                                                                                                                                                                                                          | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:649`                                                                                                                    |
|  -11.5% |   -25 |  0.7% → 0.6% |     217 → 192 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:218 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:218`   |
|  -30.4% |   -21 |  0.2% → 0.1% |       69 → 48 | `parse_workload`                                                                                                                                                                                                                 | `profile.jl:18`                                                                                                                                                                                                     |
|  -34.4% |   -21 |  0.2% → 0.1% |       61 → 40 | `getindex`                                                                                                                                                                                                                       | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:401`                                                                                                              |
|  -13.7% |   -19 |         0.4% |     139 → 120 | `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{String})`                                                                                                                   | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:142 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:142`   |
|  -14.1% |   -18 |  0.4% → 0.3% |     128 → 110 | `iterate`                                                                                                                                                                                                                        | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:75 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:75`   |
|  -35.3% |   -18 |  0.2% → 0.1% |       51 → 33 | `Dict`                                                                                                                                                                                                                           | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:80`                                                                                                                     |
|  -33.3% |   -17 |  0.2% → 0.1% |       51 → 34 | `iterate`                                                                                                                                                                                                                        | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl`         |
|  -12.5% |   -12 |         0.3% |       96 → 84 | `getproperty`                                                                                                                                                                                                                    | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base_compiler.jl:57`                                                                                                            |
|  -14.1% |   -11 |         0.2% |       78 → 67 | `#write#81`                                                                                                                                                                                                                      | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`                                                                                                            |
|  -29.7% |   -11 |         0.1% |       37 → 26 | `size`                                                                                                                                                                                                                           | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:10`                                                                                                               |
|  -44.0% |   -11 | 0.1% → <0.1% |       25 → 14 | `memoryref`                                                                                                                                                                                                                      | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:594`                                                                                                                    |
|   -0.6% |    -9 |  4.5% → 4.3% | 1,444 → 1,435 | `indexed_iterate`                                                                                                                                                                                                                | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`                                                                                                                   |
|  -20.5% |    -9 |         0.1% |       44 → 35 | `*`                                                                                                                                                                                                                              | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:88`                                                                                                                      |
| removed |    -9 | <0.1% → 0.0% |         9 → 0 | `+(::Int64, ::Int64)`                                                                                                                                                                                                            | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:87`                                                                                                                      |
|  -20.5% |    -8 |         0.1% |       39 → 31 | `getvalue`                                                                                                                                                                                                                       | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl`         |
|  -30.4% |    -7 | 0.1% → <0.1% |       23 → 16 | `rehash!(::Dict{Symbol, Int64}, ::Int64)`                                                                                                                                                                                        | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:138`                                                                                                                    |
|   -8.0% |    -7 |  0.3% → 0.2% |       87 → 80 | `var\"#write#98\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)`                                                          | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:340 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:340` |
|  -16.3% |    -7 |         0.1% |       43 → 36 | `write(::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)`                                                                                                                                                   | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:340 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:340` |
|  -24.0% |    -6 |         0.1% |       25 → 19 | `getvalue`                                                                                                                                                                                                                       | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:213 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:213` |

##### Third-party

|  Change | Delta |            % |   Samples | Function                                                                                                                                                                                                                         | Location                                                                                                                                                                                                            |
| ------: | ----: | -----------: | --------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  -11.5% |   -25 |  0.7% → 0.6% | 217 → 192 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:218 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:218`   |
|  -13.7% |   -19 |         0.4% | 139 → 120 | `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{String})`                                                                                                                   | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:142 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:142`   |
|  -14.1% |   -18 |  0.4% → 0.3% | 128 → 110 | `iterate`                                                                                                                                                                                                                        | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:75 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:75`   |
|  -33.3% |   -17 |  0.2% → 0.1% |   51 → 34 | `iterate`                                                                                                                                                                                                                        | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl`         |
|  -20.5% |    -8 |         0.1% |   39 → 31 | `getvalue`                                                                                                                                                                                                                       | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl`         |
|   -8.0% |    -7 |  0.3% → 0.2% |   87 → 80 | `var\"#write#98\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)`                                                          | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:340 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:340` |
|  -16.3% |    -7 |         0.1% |   43 → 36 | `write(::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)`                                                                                                                                                   | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:340 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:340` |
|  -24.0% |    -6 |         0.1% |   25 → 19 | `getvalue`                                                                                                                                                                                                                       | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:213 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:213` |
|  -71.4% |    -5 |        <0.1% |     7 → 2 | `Object`                                                                                                                                                                                                                         | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:8 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:8`     |
|  -44.4% |    -4 |        <0.1% |     9 → 5 | `var\"#read!#9\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Array}, ::Bool)`  | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:312 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:312`   |
|  -15.8% |    -3 | 0.1% → <0.1% |   19 → 16 | `getvalue(::Type{JSON3.Array}, ::Base.CodeUnits{UInt8, String}, ::SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}, ::Int64, ::UInt64)`                                                                        | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:131 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:131` |
|  -50.0% |    -3 |        <0.1% |     6 → 3 | `promoteeltype`                                                                                                                                                                                                                  | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:94 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:94`   |
|  -42.9% |    -3 |        <0.1% |     7 → 4 | `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.False})`                                                                                                              | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:189 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:189`   |
| removed |    -3 | <0.1% → 0.0% |     3 → 0 | `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.True})`                                                                                                               | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:174`                                                                                                            |
|   -1.5% |    -2 |         0.4% | 134 → 132 | `#write#81`                                                                                                                                                                                                                      | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:200 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:60`  |
| removed |    -2 | <0.1% → 0.0% |     2 → 0 | `populateinds!`                                                                                                                                                                                                                  | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:64 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:64`   |
|  -50.0% |    -2 |        <0.1% |     4 → 2 | `gettape`                                                                                                                                                                                                                        | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:25 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:25`   |
| removed |    -2 | <0.1% → 0.0% |     2 → 0 | `getinds`                                                                                                                                                                                                                        | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:26`                                                                                                            |
|  -33.3% |    -1 |        <0.1% |     3 → 2 | `#write#58`                                                                                                                                                                                                                      | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:40 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:40`   |
| removed |    -1 | <0.1% → 0.0% |     1 → 0 | `var\"#read#6\"(::Bool, ::Nothing, ::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.read), ::String)`                                                                                                       | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:30 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:30`     |

##### Standard library

|  Change | Delta |            % |       Samples | Function                                              | Location                                                                                                   |
| ------: | ----: | -----------: | ------------: | ----------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
|  -70.7% |   -29 | 0.1% → <0.1% |       41 → 12 | `Array`                                               | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:649`           |
|  -34.4% |   -21 |  0.2% → 0.1% |       61 → 40 | `getindex`                                            | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:401`     |
|  -35.3% |   -18 |  0.2% → 0.1% |       51 → 33 | `Dict`                                                | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:80`            |
|  -12.5% |   -12 |         0.3% |       96 → 84 | `getproperty`                                         | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base_compiler.jl:57`   |
|  -14.1% |   -11 |         0.2% |       78 → 67 | `#write#81`                                           | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`   |
|  -29.7% |   -11 |         0.1% |       37 → 26 | `size`                                                | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:10`      |
|  -44.0% |   -11 | 0.1% → <0.1% |       25 → 14 | `memoryref`                                           | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:594`           |
|   -0.6% |    -9 |  4.5% → 4.3% | 1,444 → 1,435 | `indexed_iterate`                                     | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`          |
|  -20.5% |    -9 |         0.1% |       44 → 35 | `*`                                                   | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:88`             |
| removed |    -9 | <0.1% → 0.0% |         9 → 0 | `+(::Int64, ::Int64)`                                 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:87`             |
|  -30.4% |    -7 | 0.1% → <0.1% |       23 → 16 | `rehash!(::Dict{Symbol, Int64}, ::Int64)`             | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:138`           |
|   -7.5% |    -5 |         0.2% |       67 → 62 | `setindex!(::Dict{Symbol, Int64}, ::Int64, ::Symbol)` | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:356`           |
|  -71.4% |    -5 |        <0.1% |         7 → 2 | `indexed_iterate`                                     | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/pair.jl:42`            |
|  -50.0% |    -4 |        <0.1% |         8 → 4 | `checkbounds`                                         | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/basic.jl:204`  |
|  -57.1% |    -4 |        <0.1% |         7 → 3 | `unsafe_wrap`                                         | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:147` |
|  -80.0% |    -4 |        <0.1% |         5 → 1 | `>>`                                                  | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:573`            |
|  -11.5% |    -3 |         0.1% |       26 → 23 | `<`                                                   | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:83`             |
|   -5.1% |    -3 |         0.2% |       59 → 56 | `macro expansion`                                     | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/simdloop.jl:75`        |
|  -37.5% |    -3 |        <0.1% |         8 → 5 | `macro expansion`                                     | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/simdloop.jl:72`        |
|  -25.0% |    -3 |        <0.1% |        12 → 9 | `getproperty`                                         | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base_compiler.jl:50`   |

##### Native

| Change | Delta |     % | Samples | Function             | Location    |
| -----: | ----: | ----: | ------: | -------------------- | ----------- |
| -28.6% |    -2 | <0.1% |   7 → 5 | `#defaultminimum##0` | `<unknown>` |

#### Lines

Lines with the largest change in contribution to each function's self samples.

##### `#write#79` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`)

| Change | Delta |             % |       Samples | Location                                                                                                                                                                                                            |
| -----: | ----: | ------------: | ------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| +11.3% |  +448 | 60.6% → 62.6% | 3,956 → 4,404 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157` |
|  +4.2% |   +58 | 20.9% → 20.2% | 1,366 → 1,424 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:60 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:60`   |
|  +6.6% |   +32 |   7.4% → 7.3% |     485 → 517 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:73 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:73`   |
|  -7.8% |   -22 |   4.3% → 3.7% |     282 → 260 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:72 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:72`   |
| -10.0% |   -11 |   1.7% → 1.4% |      110 → 99 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:163 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:163` |

##### `_symbol` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:1`)

| Change | Delta |      % |       Samples | Location                                                                                                                                                                                                        |
| -----: | ----: | -----: | ------------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  +1.4% |   +93 | 100.0% | 6,857 → 6,950 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:1 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:1` |

##### `indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64, ::Int64)` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`)

| Change | Delta |      % |       Samples | Location                                                                                          |
| -----: | ----: | -----: | ------------: | ------------------------------------------------------------------------------------------------- |
|  +2.7% |   +56 | 100.0% | 2,067 → 2,123 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163` |

##### `BottomRF` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:84`)

| Change | Delta |      % |   Samples | Location                                                                                          |
| -----: | ----: | -----: | --------: | ------------------------------------------------------------------------------------------------- |
| +21.1% |   +49 | 100.0% | 232 → 281 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:84` |

##### `ht_keyindex2_shorthash!(::Dict{Symbol, Int64}, ::Symbol)` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:267`)

| Change | Delta |             % |   Samples | Location                                                                                         |
| -----: | ----: | ------------: | --------: | ------------------------------------------------------------------------------------------------ |
| +13.0% |   +12 | 17.2% → 18.2% |  92 → 104 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:282` |
|  +3.7% |   +12 | 61.3% → 59.5% | 328 → 340 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:291` |
| -21.4% |    -3 |   2.6% → 1.9% |   14 → 11 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:267` |
|    new |    +2 |   0.0% → 0.4% |     0 → 2 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:269` |
|  -3.8% |    -1 |   4.9% → 4.4% |   26 → 25 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:281` |

##### `_foldl_impl` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`)

| Change | Delta |             % |   Samples | Location                                                                                          |
| -----: | ----: | ------------: | --------: | ------------------------------------------------------------------------------------------------- |
| +11.8% |   +27 | 88.7% → 88.5% | 228 → 255 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60` |
| -42.9% |    -3 |   2.7% → 1.4% |     7 → 4 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:56` |
| -50.0% |    -2 |   1.6% → 0.7% |     4 → 2 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:51` |

##### `getvalue` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:215`)

| Change | Delta |      % |  Samples | Location                                                                                                                                                                                                            |
| -----: | ----: | -----: | -------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| +39.5% |   +30 | 100.0% | 76 → 106 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:215 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:215` |

##### `unsafe_string` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:130`)

| Change | Delta |      % |   Samples | Location                                                                                                   |
| -----: | ----: | -----: | --------: | ---------------------------------------------------------------------------------------------------------- |
| +19.5% |   +30 | 100.0% | 154 → 184 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:130` |

##### `checkbounds` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/basic.jl:212`)

| Change | Delta |      % |   Samples | Location                                                                                                  |
| -----: | ----: | -----: | --------: | --------------------------------------------------------------------------------------------------------- |
| +17.3% |   +22 | 100.0% | 127 → 149 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/basic.jl:212` |

##### `GenericMemory` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:588`)

| Change | Delta |      % |       Samples | Location                                                                                         |
| -----: | ----: | -----: | ------------: | ------------------------------------------------------------------------------------------------ |
|  +1.6% |   +21 | 100.0% | 1,286 → 1,307 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:588` |

##### `write(::StructTypes.BoolType, ::Vector{UInt8}, ::Int64, ::Int64, ::Bool)` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:209`)

|  Change | Delta |      % | Samples | Location                                                                                                                                                                                                            |
| ------: | ----: | -----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| +105.9% |   +18 | 100.0% | 17 → 35 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:209 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:209` |

##### `unsafe_string` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:126`)

| Change | Delta |      % | Samples | Location                                                                                                   |
| -----: | ----: | -----: | ------: | ---------------------------------------------------------------------------------------------------------- |
| +14.3% |   +12 | 100.0% | 84 → 96 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:126` |

##### `unsafe_load` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/pointer.jl:151`)

| Change | Delta |      % |   Samples | Location                                                                                            |
| -----: | ----: | -----: | --------: | --------------------------------------------------------------------------------------------------- |
|  +1.9% |   +10 | 100.0% | 522 → 532 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/pointer.jl:151` |

##### `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:87`)

| Change | Delta |      % | Samples | Location                                                                                                                                                                                                        |
| -----: | ----: | -----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| +76.9% |   +10 | 100.0% | 13 → 23 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:87 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:87` |

##### `getindex` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:975`)

| Change | Delta |      % |   Samples | Location                                                                                               |
| -----: | ----: | -----: | --------: | ------------------------------------------------------------------------------------------------------ |
|  +5.7% |   +10 | 100.0% | 174 → 184 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:975` |

##### `_setindex!` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:1025`)

| Change | Delta |      % |   Samples | Location                                                                                           |
| -----: | ----: | -----: | --------: | -------------------------------------------------------------------------------------------------- |
|  +3.7% |    +9 | 100.0% | 242 → 251 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:1025` |

##### `macro expansion` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:14`)

| Change | Delta |      % | Samples | Location                                                                                                                                                                                                          |
| -----: | ----: | -----: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| +42.1% |    +8 | 100.0% | 19 → 27 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:14 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:14` |

##### `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40`)

|  Change | Delta |             % | Samples | Location                                                                                                                                                                                                          |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| +500.0% |    +5 |  4.3% → 20.0% |   1 → 6 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:55 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:55` |
|  -21.4% |    -3 | 60.9% → 36.7% | 14 → 11 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:47 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:47` |
| +200.0% |    +2 |  4.3% → 10.0% |   1 → 3 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40` |
|  -33.3% |    -1 |  13.0% → 6.7% |   3 → 2 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:51 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:51` |

##### `write(::StructTypes.NumberType, ::Vector{UInt8}, ::Int64, ::Int64, ::Int64)` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:224`)

|  Change | Delta |      % | Samples | Location                                                                                                                                                                                                            |
| ------: | ----: | -----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| +233.3% |    +7 | 100.0% |  3 → 10 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:224 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:224` |

##### `unescape(::JSON3.PointerString)` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/strings.jl:48`)

|  Change | Delta |             % | Samples | Location                                                                                                                                                                                                              |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| +200.0% |    +2 |  6.3% → 13.0% |   1 → 3 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/strings.jl:54 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/strings.jl:54` |
|  -40.0% |    -2 | 31.3% → 13.0% |   5 → 3 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/strings.jl:60 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/strings.jl:60` |
|     new |    +2 |   0.0% → 8.7% |   0 → 2 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/strings.jl:116`                                                                                                           |
| removed |    -1 |   6.3% → 0.0% |   1 → 0 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/strings.jl:48`                                                                                                            |
| removed |    -1 |   6.3% → 0.0% |   1 → 0 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/strings.jl:117`                                                                                                           |

##### `var\"#write#84\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.BoolType, ::Vector{UInt8}, ::Int64, ::Int64, ::Bool)` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:209`)

|  Change | Delta |             % | Samples | Location                                                                                                                                                                                                            |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| +180.0% |    +9 | 26.3% → 58.3% |  5 → 14 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:209 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:209` |
|  -42.9% |    -6 | 73.7% → 33.3% |  14 → 8 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:215 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:215` |
|     new |    +2 |   0.0% → 8.3% |   0 → 2 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:60`                                                                                                            |

##### `defaultminimum` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:6`)

| Change | Delta |      % | Samples | Location                                                                                                                                                                                                        |
| -----: | ----: | -----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| +66.7% |    +4 | 100.0% |  6 → 10 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:6 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:6` |

##### `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:87`)

|  Change | Delta |             % | Samples | Location                                                                                                                                                                                                          |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| +100.0% |   +16 | 20.5% → 39.0% | 16 → 32 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:88 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:88`   |
|  +15.8% |    +3 | 24.4% → 26.8% | 19 → 22 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:87 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:87`   |
| removed |    -2 |   2.6% → 0.0% |   2 → 0 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:91`                                                                                                           |
|  -50.0% |    -2 |   5.1% → 2.4% |   4 → 2 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:95 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:95`   |
|  -50.0% |    -1 |   2.6% → 1.2% |   2 → 1 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:106 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:106` |

##### `getvalue` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:184`)

|  Change | Delta |      % | Samples | Location                                                                                                                                                                                                            |
| ------: | ----: | -----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| +150.0% |    +3 | 100.0% |   2 → 5 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:184 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:184` |

##### `var\"#write#86\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.NumberType, ::Vector{UInt8}, ::Int64, ::Int64, ::Int64)` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:224`)

| Change | Delta |             % | Samples | Location                                                                                                                                                                                                            |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| +15.0% |    +3 | 90.9% → 92.0% | 20 → 23 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:236 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:236` |

##### `parsedigits` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/Parsers/05lwR/src/floats.jl:348`)

|  Change | Delta |      % | Samples | Location                                                                                                     |
| ------: | ----: | -----: | ------: | ------------------------------------------------------------------------------------------------------------ |
| +300.0% |    +3 | 100.0% |   1 → 4 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/Parsers/05lwR/src/floats.jl:348` |

##### `promoteeltype` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:100`)

|  Change | Delta |      % | Samples | Location                                                                                                                                                                                                            |
| ------: | ----: | -----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| +150.0% |    +3 | 100.0% |   2 → 5 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:100 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:100` |

##### `promoteeltype` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:98`)

|  Change | Delta |      % | Samples | Location                                                                                                                                                                                                          |
| ------: | ----: | -----: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| +150.0% |    +3 | 100.0% |   2 → 5 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:98 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:98` |

##### `var\"#write#81\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.ArrayType, ::Vector{UInt8}, ::Int64, ::Int64, ::JSON3.Array{Int64, Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:181`)

| Change | Delta |            % | Samples | Location                                                                                                  |
| -----: | ----: | -----------: | ------: | --------------------------------------------------------------------------------------------------------- |
|    new |    +2 | 0.0% → 66.7% |   0 → 2 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:181` |

##### `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Array}, ::Bool)` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:312`)

|  Change | Delta |      % | Samples | Location                                                                                                                                                                                                          |
| ------: | ----: | -----: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:312 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:312` |

##### `|` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:418`)

| Change | Delta |      % | Samples | Location                                                                                        |
| -----: | ----: | -----: | ------: | ----------------------------------------------------------------------------------------------- |
|  +9.9% |    +8 | 100.0% | 81 → 89 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:418` |

##### `<=` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:560`)

|  Change | Delta |      % | Samples | Location                                                                                        |
| ------: | ----: | -----: | ------: | ----------------------------------------------------------------------------------------------- |
| +114.3% |    +8 | 100.0% |  7 → 15 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:560` |

##### `isassigned` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:1642`)

| Change | Delta |             % | Samples | Location                                                                                                      |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------------------------- |
|    new |    +7 | 0.0% → 100.0% |   0 → 7 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:1642` |

##### `_string_n` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:136`)

| Change | Delta |             % | Samples | Location                                                                                                   |
| -----: | ----: | ------------: | ------: | ---------------------------------------------------------------------------------------------------------- |
|    new |    +7 | 0.0% → 100.0% |   0 → 7 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:136` |

##### `&` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:393`)

| Change | Delta |      % | Samples | Location                                                                                        |
| -----: | ----: | -----: | ------: | ----------------------------------------------------------------------------------------------- |
|  +9.5% |    +6 | 100.0% | 63 → 69 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:393` |

##### `-(::Int64, ::Int64)` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:86`)

|  Change | Delta |      % | Samples | Location                                                                                       |
| ------: | ----: | -----: | ------: | ---------------------------------------------------------------------------------------------- |
| +125.0% |    +5 | 100.0% |   4 → 9 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:86` |

##### `[unknown function]` (`<unknown>`)

|  Change | Delta |             % |   Samples | Location |
| ------: | ----: | ------------: | --------: | -------- |
|  +17.4% |   +25 | 59.5% → 68.4% | 144 → 169 | 147      |
|  -19.5% |   -16 | 33.9% → 26.7% |   82 → 66 | 98       |
|  -85.7% |    -6 |   2.9% → 0.4% |     7 → 1 | 11       |
| +400.0% |    +4 |   0.4% → 2.0% |     1 → 5 | 37       |
| removed |    -2 |   0.8% → 0.0% |     2 → 0 | 12       |

##### `Array` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:649`)

| Change | Delta |      % | Samples | Location                                                                                         |
| -----: | ----: | -----: | ------: | ------------------------------------------------------------------------------------------------ |
| -70.7% |   -29 | 100.0% | 41 → 12 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:649` |

##### `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:218`)

|  Change | Delta |             % |   Samples | Location                                                                                                                                                                                                          |
| ------: | ----: | ------------: | --------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|   -8.8% |   -13 | 67.7% → 69.8% | 147 → 134 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:248 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:248` |
|  -45.5% |   -10 |  10.1% → 6.3% |   22 → 12 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:298 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:298` |
| removed |    -4 |   1.8% → 0.0% |     4 → 0 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:218`                                                                                                          |
|  +18.2% |    +2 |   5.1% → 6.8% |   11 → 13 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:247 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:247` |
|  -18.2% |    -2 |   5.1% → 4.7% |    11 → 9 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:284 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:284` |

##### `parse_workload` (`profile.jl:18`)

| Change | Delta |      % | Samples | Location        |
| -----: | ----: | -----: | ------: | --------------- |
| -30.4% |   -21 | 100.0% | 69 → 48 | `profile.jl:18` |

##### `getindex` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:401`)

| Change | Delta |      % | Samples | Location                                                                                               |
| -----: | ----: | -----: | ------: | ------------------------------------------------------------------------------------------------------ |
| -34.4% |   -21 | 100.0% | 61 → 40 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:401` |

##### `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{String})` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:142`)

|  Change | Delta |             % | Samples | Location                                                                                                                                                                                                          |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| removed |    -2 |   1.4% → 0.0% |   2 → 0 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:150`                                                                                                          |
|   -1.4% |    -1 | 50.4% → 57.5% | 70 → 69 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:155 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:155` |
| removed |    -1 |   0.7% → 0.0% |   1 → 0 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:166`                                                                                                          |
|     new |    +1 |   0.0% → 0.8% |   0 → 1 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:149`                                                                                                          |

##### `iterate` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:75`)

| Change | Delta |      % |   Samples | Location                                                                                                                                                                                                          |
| -----: | ----: | -----: | --------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| -14.1% |   -18 | 100.0% | 128 → 110 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:75 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:75` |

##### `Dict` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:80`)

| Change | Delta |      % | Samples | Location                                                                                        |
| -----: | ----: | -----: | ------: | ----------------------------------------------------------------------------------------------- |
| -35.3% |   -18 | 100.0% | 51 → 33 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:80` |

##### `getproperty` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base_compiler.jl:57`)

| Change | Delta |      % | Samples | Location                                                                                                 |
| -----: | ----: | -----: | ------: | -------------------------------------------------------------------------------------------------------- |
| -12.5% |   -12 | 100.0% | 96 → 84 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base_compiler.jl:57` |

##### `#write#81` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`)

|  Change | Delta |             % | Samples | Location                                                                                                     |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------------------------ |
|  -72.7% |   -24 | 42.3% → 13.4% |  33 → 9 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:187` |
|  +71.4% |    +5 |  9.0% → 17.9% |  7 → 12 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:200` |
|  +80.0% |    +4 |  6.4% → 13.4% |   5 → 9 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:73`  |
| +300.0% |    +3 |   1.3% → 6.0% |   1 → 4 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:197` |
|     new |    +2 |   0.0% → 3.0% |   0 → 2 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:181` |

##### `size` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:10`)

| Change | Delta |      % | Samples | Location                                                                                              |
| -----: | ----: | -----: | ------: | ----------------------------------------------------------------------------------------------------- |
| -29.7% |   -11 | 100.0% | 37 → 26 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:10` |

##### `memoryref` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:594`)

| Change | Delta |      % | Samples | Location                                                                                         |
| -----: | ----: | -----: | ------: | ------------------------------------------------------------------------------------------------ |
| -44.0% |   -11 | 100.0% | 25 → 14 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:594` |

##### `indexed_iterate` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`)

| Change | Delta |      % |       Samples | Location                                                                                          |
| -----: | ----: | -----: | ------------: | ------------------------------------------------------------------------------------------------- |
|  -0.6% |    -9 | 100.0% | 1,444 → 1,435 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163` |

##### `*` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:88`)

| Change | Delta |      % | Samples | Location                                                                                       |
| -----: | ----: | -----: | ------: | ---------------------------------------------------------------------------------------------- |
| -20.5% |    -9 | 100.0% | 44 → 35 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:88` |

##### `+(::Int64, ::Int64)` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:87`)

|  Change | Delta |             % | Samples | Location                                                                                       |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------------------------------------- |
| removed |    -9 | 100.0% → 0.0% |   9 → 0 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:87` |

##### `rehash!(::Dict{Symbol, Int64}, ::Int64)` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:138`)

|  Change | Delta |             % | Samples | Location                                                                                         |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------------ |
|  -25.0% |    -1 | 17.4% → 18.8% |   4 → 3 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:138` |
| removed |    -1 |   4.3% → 0.0% |   1 → 0 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:181` |
|     new |    +1 |   0.0% → 6.3% |   0 → 1 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:146` |
|     new |    +1 |   0.0% → 6.3% |   0 → 1 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:171` |

##### `var\"#write#98\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:340`)

|  Change | Delta |             % | Samples | Location                                                                                                                                                                                                            |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| +111.1% |   +10 | 10.3% → 23.8% |  9 → 19 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:60 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:60`   |
|  -15.9% |    -7 | 50.6% → 46.3% | 44 → 37 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:360 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:360` |
|   +9.1% |    +1 | 12.6% → 15.0% | 11 → 12 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:340 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:340` |
|  +14.3% |    +1 |  8.0% → 10.0% |   7 → 8 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:351 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:351` |

##### `write(::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:340`)

| Change | Delta |      % | Samples | Location                                                                                                                                                                                                            |
| -----: | ----: | -----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| -16.3% |    -7 | 100.0% | 43 → 36 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:340 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:340` |

##### `getvalue` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:213`)

| Change | Delta |      % | Samples | Location                                                                                                                                                                                                            |
| -----: | ----: | -----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| -24.0% |    -6 | 100.0% | 25 → 19 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:213 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:213` |

##### `Object` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:8`)

| Change | Delta |      % | Samples | Location                                                                                                                                                                                                        |
| -----: | ----: | -----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| -71.4% |    -5 | 100.0% |   7 → 2 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:8 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:8` |

##### `var\"#read!#9\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Array}, ::Bool)` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:312`)

| Change | Delta |             % | Samples | Location                                                                                                                                                                                                          |
| -----: | ----: | ------------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| -60.0% |    -3 | 55.6% → 40.0% |   5 → 2 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:312 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:312` |
|    new |    +1 |  0.0% → 20.0% |   0 → 1 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:319`                                                                                                          |
|    new |    +1 |  0.0% → 20.0% |   0 → 1 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:356`                                                                                                          |

##### `promoteeltype` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:94`)

| Change | Delta |      % | Samples | Location                                                                                                                                                                                                          |
| -----: | ----: | -----: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| -50.0% |    -3 | 100.0% |   6 → 3 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:94 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:94` |

##### `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.False})` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:189`)

| Change | Delta |             % | Samples | Location                                                                                                                                                                                                          |
| -----: | ----: | ------------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| -40.0% |    -2 | 71.4% → 75.0% |   5 → 3 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:198 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:198` |
| -50.0% |    -1 | 28.6% → 25.0% |   2 → 1 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:189 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:189` |

##### `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.True})` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:174`)

|  Change | Delta |            % | Samples | Location                                                                                                 |
| ------: | ----: | -----------: | ------: | -------------------------------------------------------------------------------------------------------- |
| removed |    -2 | 66.7% → 0.0% |   2 → 0 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:174` |
| removed |    -1 | 33.3% → 0.0% |   1 → 0 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:182` |

##### `#write#81` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:60`)

|  Change | Delta |             % | Samples | Location                                                                                                                                                                                                           |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|     new |   +70 |  0.0% → 53.0% |  0 → 70 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:200`                                                                                                          |
| removed |   -51 |  38.1% → 0.0% |  51 → 0 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:60`                                                                                                           |
|  -37.3% |   -22 | 44.0% → 28.0% | 59 → 37 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:200 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:60` |
|  +16.7% |    +1 |   4.5% → 5.3% |   6 → 7 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:72 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:72`  |
|   +9.1% |    +1 |   8.2% → 9.1% | 11 → 12 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:73 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:73`  |

##### `populateinds!` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:64`)

|  Change | Delta |             % | Samples | Location                                                                                                 |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------------------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:64` |

##### `gettape` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:25`)

| Change | Delta |      % | Samples | Location                                                                                                                                                                                                          |
| -----: | ----: | -----: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| -50.0% |    -2 | 100.0% |   4 → 2 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:25 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:25` |

##### `getinds` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:26`)

|  Change | Delta |             % | Samples | Location                                                                                                 |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------------------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:26` |

##### `#write#58` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:40`)

|  Change | Delta |             % | Samples | Location                                                                                                 |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------------------------------------------------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:41` |
|     new |    +2 | 0.0% → 100.0% |   0 → 2 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:39` |

##### `var\"#read#6\"(::Bool, ::Nothing, ::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.read), ::String)` (`../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:30`)

|  Change | Delta |             % | Samples | Location                                                                                                |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:34` |

##### `setindex!(::Dict{Symbol, Int64}, ::Int64, ::Symbol)` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:356`)

| Change | Delta |             % | Samples | Location                                                                                         |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------------ |
| -42.9% |    -6 | 20.9% → 12.9% |  14 → 8 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:356` |
|    new |    +1 |   0.0% → 1.6% |   0 → 1 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:360` |

##### `indexed_iterate` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/pair.jl:42`)

| Change | Delta |      % | Samples | Location                                                                                        |
| -----: | ----: | -----: | ------: | ----------------------------------------------------------------------------------------------- |
| -71.4% |    -5 | 100.0% |   7 → 2 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/pair.jl:42` |

##### `checkbounds` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/basic.jl:204`)

| Change | Delta |      % | Samples | Location                                                                                                  |
| -----: | ----: | -----: | ------: | --------------------------------------------------------------------------------------------------------- |
| -50.0% |    -4 | 100.0% |   8 → 4 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/basic.jl:204` |

##### `unsafe_wrap` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:147`)

| Change | Delta |      % | Samples | Location                                                                                                   |
| -----: | ----: | -----: | ------: | ---------------------------------------------------------------------------------------------------------- |
| -57.1% |    -4 | 100.0% |   7 → 3 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:147` |

##### `>>` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:573`)

| Change | Delta |      % | Samples | Location                                                                                        |
| -----: | ----: | -----: | ------: | ----------------------------------------------------------------------------------------------- |
| -80.0% |    -4 | 100.0% |   5 → 1 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:573` |

##### `<` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:83`)

| Change | Delta |      % | Samples | Location                                                                                       |
| -----: | ----: | -----: | ------: | ---------------------------------------------------------------------------------------------- |
| -11.5% |    -3 | 100.0% | 26 → 23 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:83` |

##### `macro expansion` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/simdloop.jl:75`)

| Change | Delta |      % | Samples | Location                                                                                            |
| -----: | ----: | -----: | ------: | --------------------------------------------------------------------------------------------------- |
|  -5.1% |    -3 | 100.0% | 59 → 56 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/simdloop.jl:75` |

##### `macro expansion` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/simdloop.jl:72`)

| Change | Delta |      % | Samples | Location                                                                                            |
| -----: | ----: | -----: | ------: | --------------------------------------------------------------------------------------------------- |
| -37.5% |    -3 | 100.0% |   8 → 5 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/simdloop.jl:72` |

##### `getproperty` (`../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base_compiler.jl:50`)

| Change | Delta |      % | Samples | Location                                                                                                 |
| -----: | ----: | -----: | ------: | -------------------------------------------------------------------------------------------------------- |
| -25.0% |    -3 | 100.0% |  12 → 9 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base_compiler.jl:50` |

### Total samples

#### Regressions

Functions with the largest increase in total samples taken in the function and all its callees.

| Change | Delta |             % |         Samples | Function                                                           | Location                                                                                                                                                                                                            |
| -----: | ----: | ------------: | --------------: | ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  +3.2% |  +796 | 77.2% → 76.5% | 24,750 → 25,546 | `parse_workload`                                                   | `profile.jl:18`                                                                                                                                                                                                     |
|  +3.2% |  +796 | 77.2% → 76.5% | 24,751 → 25,547 | `macro expansion`                                                  | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/stdlib/v1.13/Profile/src/Profile.jl:82`                                                                                              |
|  +3.2% |  +796 | 77.2% → 76.5% | 24,751 → 25,547 | `capture_wall`                                                     | `profile.jl:43`                                                                                                                                                                                                     |
|  +3.2% |  +796 | 77.2% → 76.5% | 24,751 → 25,547 | `[unknown function]`                                               | `<unknown>`                                                                                                                                                                                                         |
|  +3.2% |  +796 | 77.2% → 76.5% | 24,751 → 25,547 | `eval(::Module, ::Any)`                                            | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:489`                                                                                                                    |
|  +3.2% |  +796 | 77.2% → 76.5% | 24,751 → 25,547 | `include_string(::typeof(identity), ::Module, ::String, ::String)` | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/loading.jl:2989`                                                                                                                |
|  +3.2% |  +796 | 77.2% → 76.5% | 24,751 → 25,547 | `_include(::Function, ::Module, ::String)`                         | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/loading.jl:3083`                                                                                                                |
|  +3.2% |  +796 | 77.2% → 76.5% | 24,751 → 25,547 | `include(::Module, ::String)`                                      | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base.jl:309`                                                                                                                    |
|  +3.2% |  +796 | 77.2% → 76.5% | 24,751 → 25,547 | `exec_options(::Base.JLOptions)`                                   | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/client.jl:234`                                                                                                                  |
|  +3.2% |  +796 | 77.2% → 76.5% | 24,751 → 25,547 | `_start()`                                                         | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/client.jl:570`                                                                                                                  |
|  +2.9% |  +676 | 71.6% → 70.7% | 22,930 → 23,606 | `#write#58`                                                        | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:40 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:40`   |
|  +7.3% |  +534 | 22.8% → 23.4% |   7,292 → 7,826 | `(anonymous)`                                                      | `<unknown>`                                                                                                                                                                                                         |
|  +3.0% |  +510 | 53.2% → 52.6% | 17,042 → 17,552 | `#write#79`                                                        | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157` |
|  +3.0% |  +510 | 53.2% → 52.6% | 17,042 → 17,552 | `write`                                                            | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:147 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:147` |
|  +2.9% |  +495 | 53.1% → 52.5% | 17,015 → 17,510 | `#write#81`                                                        | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`                                                                                                            |
|  +2.8% |  +167 | 18.4% → 18.1% |   5,882 → 6,049 | `defaultminimum`                                                   | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:12 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:12`   |
|  +2.8% |  +167 | 18.3% → 18.1% |   5,873 → 6,040 | `MappingRF`                                                        | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98`                                                                                                                   |
|  +2.8% |  +165 | 18.3% → 18.1% |   5,874 → 6,039 | `_foldl_impl`                                                      | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`                                                                                                                   |
|  +2.8% |  +164 | 18.4% → 18.1% |   5,882 → 6,046 | `_foldl_impl`                                                      | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:56`                                                                                                                   |
|  +2.8% |  +164 | 18.4% → 18.1% |   5,882 → 6,046 | `foldl_impl`                                                       | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:46`                                                                                                                   |

##### Third-party

| Change | Delta |             % |         Samples | Function                                                                                                                   | Location                                                                                                                                                                                                              |
| -----: | ----: | ------------: | --------------: | -------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  +2.9% |  +676 | 71.6% → 70.7% | 22,930 → 23,606 | `#write#58`                                                                                                                | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:40 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:40`     |
|  +3.0% |  +510 | 53.2% → 52.6% | 17,042 → 17,552 | `#write#79`                                                                                                                | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:157 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:157`   |
|  +3.0% |  +510 | 53.2% → 52.6% | 17,042 → 17,552 | `write`                                                                                                                    | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:147 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:147`   |
|  +2.8% |  +167 | 18.4% → 18.1% |   5,882 → 6,049 | `defaultminimum`                                                                                                           | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:12 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:12`     |
|  +9.2% |  +126 |   4.3% → 4.5% |   1,373 → 1,499 | `var\"#read#6\"(::Bool, ::Nothing, ::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.read), ::String)` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:30 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:30`       |
|  +9.2% |  +126 |   4.3% → 4.5% |   1,373 → 1,499 | `read`                                                                                                                     | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:30 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:30`       |
|  +2.9% |   +94 | 10.3% → 10.1% |   3,288 → 3,382 | `iterate`                                                                                                                  | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:78 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:78`     |
|  +1.4% |   +93 | 21.4% → 20.8% |   6,857 → 6,950 | `_symbol`                                                                                                                  | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:1 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:1`       |
|  +1.4% |   +93 | 21.4% → 20.8% |   6,857 → 6,950 | `getvalue`                                                                                                                 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:187 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:187`   |
| +20.9% |   +41 |   0.6% → 0.7% |       196 → 237 | `getvalue`                                                                                                                 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:218 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:218`   |
| +39.5% |   +30 |   0.2% → 0.3% |        76 → 106 | `getvalue`                                                                                                                 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:215 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:215`   |
| +76.9% |   +30 |   0.1% → 0.2% |         39 → 69 | `write(::StructTypes.BoolType, ::Vector{UInt8}, ::Int64, ::Int64, ::Bool)`                                                 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:209 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:209`   |
| +26.5% |   +26 |   0.3% → 0.4% |        98 → 124 | `getvalue`                                                                                                                 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:193 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:193`   |
|  +0.6% |   +25 | 12.0% → 11.6% |   3,852 → 3,877 | `iterate`                                                                                                                  | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:81 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:81`     |
|  +6.2% |   +23 |          1.2% |       371 → 394 | `getbyte`                                                                                                                  | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:8 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:8`       |
| +16.3% |   +23 |   0.4% → 0.5% |       141 → 164 | `#write#81`                                                                                                                | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:200 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:60`    |
| +12.1% |   +21 |   0.5% → 0.6% |       174 → 195 | `escapelength`                                                                                                             | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:331 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:331`   |
| +20.8% |   +20 |          0.3% |        96 → 116 | `unescape(::JSON3.PointerString)`                                                                                          | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/strings.jl:48 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/strings.jl:48` |
| +52.9% |   +18 |   0.1% → 0.2% |         34 → 52 | `typeparser(::Type{Float64}, ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Int16, ::Parsers.Options)`      | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/Parsers/05lwR/src/components.jl:392`                                                                                                      |
| +37.2% |   +16 |   0.1% → 0.2% |         43 → 59 | `write(::StructTypes.NumberType, ::Vector{UInt8}, ::Int64, ::Int64, ::Int64)`                                              | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:224 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:224`   |

##### Standard library

| Change | Delta |             % |         Samples | Function                                                           | Location                                                                                                               |
| -----: | ----: | ------------: | --------------: | ------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------- |
|  +3.2% |  +796 | 77.2% → 76.5% | 24,751 → 25,547 | `macro expansion`                                                  | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/stdlib/v1.13/Profile/src/Profile.jl:82` |
|  +3.2% |  +796 | 77.2% → 76.5% | 24,751 → 25,547 | `eval(::Module, ::Any)`                                            | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:489`                       |
|  +3.2% |  +796 | 77.2% → 76.5% | 24,751 → 25,547 | `include_string(::typeof(identity), ::Module, ::String, ::String)` | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/loading.jl:2989`                   |
|  +3.2% |  +796 | 77.2% → 76.5% | 24,751 → 25,547 | `_include(::Function, ::Module, ::String)`                         | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/loading.jl:3083`                   |
|  +3.2% |  +796 | 77.2% → 76.5% | 24,751 → 25,547 | `include(::Module, ::String)`                                      | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base.jl:309`                       |
|  +3.2% |  +796 | 77.2% → 76.5% | 24,751 → 25,547 | `exec_options(::Base.JLOptions)`                                   | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/client.jl:234`                     |
|  +3.2% |  +796 | 77.2% → 76.5% | 24,751 → 25,547 | `_start()`                                                         | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/client.jl:570`                     |
|  +2.9% |  +495 | 53.1% → 52.5% | 17,015 → 17,510 | `#write#81`                                                        | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`               |
|  +2.8% |  +167 | 18.3% → 18.1% |   5,873 → 6,040 | `MappingRF`                                                        | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98`                      |
|  +2.8% |  +165 | 18.3% → 18.1% |   5,874 → 6,039 | `_foldl_impl`                                                      | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`                      |
|  +2.8% |  +164 | 18.4% → 18.1% |   5,882 → 6,046 | `_foldl_impl`                                                      | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:56`                      |
|  +2.8% |  +164 | 18.4% → 18.1% |   5,882 → 6,046 | `foldl_impl`                                                       | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:46`                      |
|  +2.8% |  +164 | 18.4% → 18.1% |   5,882 → 6,046 | `mapfoldl_impl`                                                    | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:42`                      |
|  +2.8% |  +164 | 18.4% → 18.1% |   5,882 → 6,046 | `#mapfoldl#271`                                                    | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:173`                     |
|  +2.8% |  +164 | 18.4% → 18.1% |   5,882 → 6,046 | `mapfoldl`                                                         | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:173`                     |
|  +2.8% |  +164 | 18.4% → 18.1% |   5,882 → 6,046 | `#mapreduce#275`                                                   | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:306`                     |
|  +2.8% |  +164 | 18.4% → 18.1% |   5,882 → 6,046 | `mapreduce`                                                        | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:306`                     |
|  +2.8% |  +164 | 18.4% → 18.1% |   5,882 → 6,046 | `#sum#278`                                                         | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:535`                     |
|  +2.8% |  +164 | 18.4% → 18.1% |   5,882 → 6,046 | `sum`                                                              | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:535`                     |
|  +2.8% |  +164 | 18.4% → 18.1% |   5,882 → 6,046 | `sum`                                                              | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:564`                     |

##### Unknown

| Change | Delta |             % |       Samples | Function      | Location    |
| -----: | ----: | ------------: | ------------: | ------------- | ----------- |
|  +7.3% |  +534 | 22.8% → 23.4% | 7,292 → 7,826 | `(anonymous)` | `<unknown>` |

##### Native

| Change | Delta |             % |         Samples | Function                                                                     | Location    |
| -----: | ----: | ------------: | --------------: | ---------------------------------------------------------------------------- | ----------- |
|  +3.2% |  +796 | 77.2% → 76.5% | 24,751 → 25,547 | `[unknown function]`                                                         | `<unknown>` |
|  +2.8% |  +164 | 18.3% → 18.1% |   5,877 → 6,041 | `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` | `<unknown>` |
|  +2.8% |  +163 | 18.3% → 18.0% |   5,857 → 6,020 | `#defaultminimum##0`                                                         | `<unknown>` |

#### Improvements

Functions with the largest decrease in total samples taken in the function and all its callees.

| Change | Delta |            % |       Samples | Function                                                                                                                                                                | Location                                                                                                                                                                                                            |
| -----: | ----: | -----------: | ------------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| -16.9% |  -133 |  2.5% → 2.0% |     786 → 653 | `Array`                                                                                                                                                                 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:661`                                                                                                                    |
| -16.9% |  -133 |  2.5% → 2.0% |     786 → 653 | `zeros`                                                                                                                                                                 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:626`                                                                                                                   |
| -16.9% |  -133 |  2.5% → 2.0% |     786 → 653 | `zeros`                                                                                                                                                                 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:622`                                                                                                                   |
| -16.9% |  -133 |  2.5% → 2.0% |     786 → 653 | `realloc!(::Vector{UInt8}, ::Int64, ::Int64)`                                                                                                                           | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:51 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:51`   |
|  -9.5% |  -123 |  4.0% → 3.5% | 1,296 → 1,173 | `write(::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)`                                                                                          | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:340 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:340` |
|  -9.4% |  -121 |  4.0% → 3.5% | 1,294 → 1,173 | `var\"#write#98\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:340 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:340` |
| -43.5% |   -37 |  0.3% → 0.1% |       85 → 48 | `getvalue(::Type{JSON3.Array}, ::Base.CodeUnits{UInt8, String}, ::SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}, ::Int64, ::UInt64)`               | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:131 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:131` |
| -33.3% |   -29 |  0.3% → 0.2% |       87 → 58 | `getvalue`                                                                                                                                                              | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:216 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:216` |
| -70.7% |   -29 | 0.1% → <0.1% |       41 → 12 | `Array`                                                                                                                                                                 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:649`                                                                                                                    |
| -70.7% |   -29 | 0.1% → <0.1% |       41 → 12 | `getindex`                                                                                                                                                              | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:436`                                                                                                                   |
|  -8.6% |   -27 |  1.0% → 0.9% |     315 → 288 | `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{String})`                                                          | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:142 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:142`   |
| -33.3% |   -23 |  0.2% → 0.1% |       69 → 46 | `getvalue`                                                                                                                                                              | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:126 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:126` |
| -34.4% |   -21 |  0.2% → 0.1% |       61 → 40 | `getindex`                                                                                                                                                              | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:401`                                                                                                              |
|  -1.1% |   -20 |  5.6% → 5.3% | 1,799 → 1,779 | `getindex`                                                                                                                                                              | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:163 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:163` |
| -35.3% |   -18 |  0.2% → 0.1% |       51 → 33 | `Dict`                                                                                                                                                                  | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:80`                                                                                                                     |
| -33.3% |   -17 |  0.2% → 0.1% |       51 → 34 | `iterate`                                                                                                                                                               | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl`         |
|  -2.0% |   -17 |  2.7% → 2.5% |     854 → 837 | `ht_keyindex2_shorthash!(::Dict{Symbol, Int64}, ::Symbol)`                                                                                                              | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:267`                                                                                                                    |
|  -1.9% |   -16 |  2.7% → 2.5% |     851 → 835 | `Array`                                                                                                                                                                 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:648`                                                                                                                    |
| -34.1% |   -14 |         0.1% |       41 → 27 | `isslotempty`                                                                                                                                                           | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:134`                                                                                                                    |
| -12.5% |   -12 |         0.3% |       96 → 84 | `getproperty`                                                                                                                                                           | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base_compiler.jl:57`                                                                                                            |

##### Third-party

|  Change | Delta |            % |       Samples | Function                                                                                                                                                                | Location                                                                                                                                                                                                            |
| ------: | ----: | -----------: | ------------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  -16.9% |  -133 |  2.5% → 2.0% |     786 → 653 | `realloc!(::Vector{UInt8}, ::Int64, ::Int64)`                                                                                                                           | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:51 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:51`   |
|   -9.5% |  -123 |  4.0% → 3.5% | 1,296 → 1,173 | `write(::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)`                                                                                          | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:340 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:340` |
|   -9.4% |  -121 |  4.0% → 3.5% | 1,294 → 1,173 | `var\"#write#98\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:340 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:340` |
|  -43.5% |   -37 |  0.3% → 0.1% |       85 → 48 | `getvalue(::Type{JSON3.Array}, ::Base.CodeUnits{UInt8, String}, ::SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}, ::Int64, ::UInt64)`               | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:131 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:131` |
|  -33.3% |   -29 |  0.3% → 0.2% |       87 → 58 | `getvalue`                                                                                                                                                              | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:216 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:216` |
|   -8.6% |   -27 |  1.0% → 0.9% |     315 → 288 | `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{String})`                                                          | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:142 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:142`   |
|  -33.3% |   -23 |  0.2% → 0.1% |       69 → 46 | `getvalue`                                                                                                                                                              | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:126 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:126` |
|   -1.1% |   -20 |  5.6% → 5.3% | 1,799 → 1,779 | `getindex`                                                                                                                                                              | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:163 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:163` |
|  -33.3% |   -17 |  0.2% → 0.1% |       51 → 34 | `iterate`                                                                                                                                                               | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl`         |
|  -42.1% |    -8 | 0.1% → <0.1% |       19 → 11 | `macro expansion`                                                                                                                                                       | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:333 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:333` |
|  -10.6% |    -7 |         0.2% |       66 → 59 | `getvalue`                                                                                                                                                              | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl`         |
|  -28.0% |    -7 |         0.1% |       25 → 18 | `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.False})`                                                     | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:189 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/read.jl:189`   |
|  -24.0% |    -6 |         0.1% |       25 → 19 | `getvalue`                                                                                                                                                              | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:213 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:213` |
|  -35.3% |    -6 | 0.1% → <0.1% |       17 → 11 | `populateinds!`                                                                                                                                                         | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:64 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:64`   |
|  -71.4% |    -5 |        <0.1% |         7 → 2 | `write`                                                                                                                                                                 | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/write.jl:224 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/write.jl:224` |
|  -71.4% |    -5 |        <0.1% |         7 → 2 | `Object`                                                                                                                                                                | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:8 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/JSON3.jl:8`     |
| removed |    -5 | <0.1% → 0.0% |         5 → 0 | `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.True})`                                                      | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/read.jl:174`                                                                                                            |
|  -50.0% |    -4 |        <0.1% |         8 → 4 | `promoteeltype`                                                                                                                                                         | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:96 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:96`   |
|  -50.0% |    -3 |        <0.1% |         6 → 3 | `promoteeltype`                                                                                                                                                         | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:94 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:94`   |
|   -3.1% |    -2 |         0.2% |       65 → 63 | `macro expansion`                                                                                                                                                       | `../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/jSAdy/src/utils.jl:24 → ../../Users/tomer/.cache/profiler-md-input-generation/julia-depot/packages/JSON3/ntJon/src/utils.jl:24`   |

##### Standard library

| Change | Delta |            % |       Samples | Function                                                   | Location                                                                                                   |
| -----: | ----: | -----------: | ------------: | ---------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| -16.9% |  -133 |  2.5% → 2.0% |     786 → 653 | `Array`                                                    | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:661`           |
| -16.9% |  -133 |  2.5% → 2.0% |     786 → 653 | `zeros`                                                    | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:626`          |
| -16.9% |  -133 |  2.5% → 2.0% |     786 → 653 | `zeros`                                                    | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:622`          |
| -70.7% |   -29 | 0.1% → <0.1% |       41 → 12 | `Array`                                                    | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:649`           |
| -70.7% |   -29 | 0.1% → <0.1% |       41 → 12 | `getindex`                                                 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:436`          |
| -34.4% |   -21 |  0.2% → 0.1% |       61 → 40 | `getindex`                                                 | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:401`     |
| -35.3% |   -18 |  0.2% → 0.1% |       51 → 33 | `Dict`                                                     | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:80`            |
|  -2.0% |   -17 |  2.7% → 2.5% |     854 → 837 | `ht_keyindex2_shorthash!(::Dict{Symbol, Int64}, ::Symbol)` | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:267`           |
|  -1.9% |   -16 |  2.7% → 2.5% |     851 → 835 | `Array`                                                    | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:648`           |
| -34.1% |   -14 |         0.1% |       41 → 27 | `isslotempty`                                              | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:134`           |
| -12.5% |   -12 |         0.3% |       96 → 84 | `getproperty`                                              | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base_compiler.jl:57`   |
| -29.7% |   -11 |         0.1% |       37 → 26 | `size`                                                     | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:10`      |
| -29.7% |   -11 |         0.1% |       37 → 26 | `length`                                                   | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:11`      |
| -44.0% |   -11 | 0.1% → <0.1% |       25 → 14 | `memoryref`                                                | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:594`           |
| -44.0% |   -11 | 0.1% → <0.1% |       25 → 14 | `_setindex!`                                               | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/genericmemory.jl:262`  |
| -25.6% |   -11 |         0.1% |       43 → 32 | `setindex!`                                                | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/genericmemory.jl:270`  |
| -22.7% |   -10 |         0.1% |       44 → 34 | `_setindex!`                                               | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:337`           |
| -18.8% |    -9 |         0.1% |       48 → 39 | `length_continued`                                         | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:559` |
|  -0.6% |    -9 |  4.5% → 4.3% | 1,444 → 1,435 | `indexed_iterate`                                          | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`          |
| -20.5% |    -9 |         0.1% |       44 → 35 | `*`                                                        | `../../nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:88`             |

##### Native

| Change | Delta |     % | Samples | Function                                                                                                                                                                                | Location    |
| -----: | ----: | ----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| -20.0% |    -1 | <0.1% |   5 → 4 | `(::JSON3.var\"#defaultminimum##0#defaultminimum##1\"{JSON3.Array{Int64, Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}}})(::Int64)` | `<unknown>` |

# Sampling profile

Collected 29,933 samples.

| Category         |     % | Samples |
| ---------------- | ----: | ------: |
| Third-party      | 47.5% |  14,227 |
| Standard library | 26.6% |   7,954 |
| Unknown          | 21.8% |   6,535 |
| Native           |  4.0% |   1,187 |
| Ours             |  0.1% |      30 |

Paths starting with `./` or `../` are relative to `/tmp/profiler-md-julia-project/`.

`…` stands for omitted frames.

## Call tree

Call paths to the hottest functions.

```
├── … 23,397 samples (78.2%, self 0.7%) [unknown function]
│   ├── … 14,725 samples (49.2%, self 21.1%) #write#79 at ../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157
│   │   ├── 1,850 samples (6.2%) indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64, ::Int64) at /nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163
│   │   ├── 1,728 samples (5.8%) iterate at ../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:81
│   │   │   ├── … 1,485 samples (5.0%) populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}}) at ../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40
│   │   │   │   ├── 368 samples (1.2%) setindex!(::Dict{Symbol, Int64}, ::Int64, ::Symbol) at /nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:356
│   │   │   │   │   └── 261 samples (0.9%, self 0.5%, self 1.5% globally) ht_keyindex2_shorthash!(::Dict{Symbol, Int64}, ::Symbol) at 267
│   │   │   │   └── 1,115 samples (3.7%) 4 more callees, led by (3.6%) getvalue at ../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:187
│   │   │   └── … 34 samples (0.1%) unsafe_string at /nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:126
│   │   ├── … 1,586 samples (5.3%, self 22.1% globally) _symbol at ../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:1
│   │   ├── 1,113 samples (3.7%) write(::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String) at 340
│   │   │   └── 1,082 samples (3.6%) var\"#write#98\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String) at 340
│   │   │       ├── … 610 samples (2.0%, self 4.1% globally) GenericMemory at /nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:588
│   │   │       └── 410 samples (1.4%) 12 more callees, led by (0.6%) escapelength at 331
│   │   ├── 798 samples (2.7%) indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64) at /nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163
│   │   │   └── 790 samples (2.6%, self 4.2% globally) indexed_iterate at 163
│   │   └── 1,305 samples (4.4%) 19 more callees, led by (1.5%) indexed_iterate at /nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163
│   ├── … 2,327 samples (7.8%) #defaultminimum##0
│   │   ├── … 1,469 samples (4.9%) _foldl_impl at /nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60
│   │   │   └── 1,323 samples (4.4%) iterate at /nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/iterators.jl:697
│   │   │       └── 1,323 samples (4.4%) 5 more callees, led by (3.5%) iterate at ../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:81
│   │   └── 790 samples (2.6%) 4 more callees, led by (1.6%) isassigned at /nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:1641
│   ├── … 1,983 samples (6.6%, self 0.6%) _foldl_impl at /nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60
│   │   ├── 1,532 samples (5.1%) iterate at /nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/iterators.jl:697
│   │   │   └── 1,532 samples (5.1%) 7 more callees, led by (3.0%) iterate at ../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:78
│   │   └── 144 samples (0.5%, self 0.5% globally) iterate at ../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:75
│   ├── … 1,677 samples (5.6%) parse_workload at ./profile.jl:18
│   │   ├── … 1,164 samples (3.9%) var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool) at ../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:87
│   │   │   ├── … 705 samples (2.4%) kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool) at ../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:218
│   │   │   │   └── 699 samples (2.3%, self 0.6%) var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool) at 218
│   │   │   │       ├── … 167 samples (0.6%, self 1.6% globally) unsafe_load at /nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/pointer.jl:151
│   │   │   │       ├── 64 samples (0.2%) macro expansion at ../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:24
│   │   │   │       │   └── 64 samples (0.2%, self 1.0% globally) + at /nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:87
│   │   │   │       └── 302 samples (1.0%) 18 more callees, led by (0.3%) macro expansion at ../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:29
│   │   │   └── 376 samples (1.3%) 12 more callees, led by (0.9%) read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{String}) at ../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:142
│   │   └── 356 samples (1.2%) length(::String) at /nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:540 …
│   ├── … 854 samples (2.9%, self 2.7%) (::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})
│   ├── … 241 samples (0.8%) BottomRF at /nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:84
│   └── 1,368 samples (4.6%) 10 more callees, led by (3.2%) #write#81 at /nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl
└── 6,535 samples (21.8%) (anonymous)
```

## Hottest functions

### Self samples

Functions with the most samples collected within the function body, excluding callees.

|     % | Samples | Function                                                                                                                                                                                                                         | Location                                                                                              |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| 22.1% |   6,623 | `_symbol`                                                                                                                                                                                                                        | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:1`                                      |
| 21.8% |   6,535 | `(anonymous)`                                                                                                                                                                                                                    | `<unknown>`                                                                                           |
| 21.1% |   6,318 | `#write#79`                                                                                                                                                                                                                      | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`                                    |
|  6.2% |   1,850 | `indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64, ::Int64)`                                                                                                                                                        | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`          |
|  4.2% |   1,261 | `indexed_iterate`                                                                                                                                                                                                                | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`          |
|  4.1% |   1,242 | `GenericMemory`                                                                                                                                                                                                                  | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:588`           |
|  3.2% |     970 | `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})`                                                                                                                                                     | `<unknown>`                                                                                           |
|  1.6% |     467 | `unsafe_load`                                                                                                                                                                                                                    | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/pointer.jl:151`        |
|  1.5% |     461 | `ht_keyindex2_shorthash!(::Dict{Symbol, Int64}, ::Symbol)`                                                                                                                                                                       | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:267`           |
|  1.0% |     286 | `+`                                                                                                                                                                                                                              | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:87`             |
|  0.8% |     248 | `BottomRF`                                                                                                                                                                                                                       | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:84`          |
|  0.8% |     228 | `_foldl_impl`                                                                                                                                                                                                                    | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`          |
|  0.8% |     226 | `_setindex!`                                                                                                                                                                                                                     | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:1025`         |
|  0.7% |     213 | `[unknown function]`                                                                                                                                                                                                             | `<unknown>`                                                                                           |
|  0.6% |     169 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:218`                                     |
|  0.5% |     153 | `getindex`                                                                                                                                                                                                                       | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:975`     |
|  0.5% |     150 | `iterate`                                                                                                                                                                                                                        | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:75`                                     |
|  0.5% |     135 | `unsafe_string`                                                                                                                                                                                                                  | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:130` |
|  0.4% |     125 | `checkbounds`                                                                                                                                                                                                                    | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/basic.jl:212`  |
|  0.4% |     118 | `#write#81`                                                                                                                                                                                                                      | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:73`                                     |

#### Categories

Categories accounting for at least 1.0% of self samples.

##### Third-party

|     % | Samples | Function                                                                                                                                                                                                                         | Location                                                            |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| 22.1% |   6,623 | `_symbol`                                                                                                                                                                                                                        | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:1`    |
| 21.1% |   6,318 | `#write#79`                                                                                                                                                                                                                      | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`  |
|  0.6% |     169 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:218`   |
|  0.5% |     150 | `iterate`                                                                                                                                                                                                                        | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:75`   |
|  0.4% |     118 | `#write#81`                                                                                                                                                                                                                      | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:73`   |
|  0.4% |     115 | `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{String})`                                                                                                                   | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:142`   |
|  0.3% |      87 | `var\"#write#98\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)`                                                          | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:340`  |
|  0.3% |      87 | `getvalue`                                                                                                                                                                                                                       | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:215`  |
|  0.3% |      83 | `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)`                                                                     | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:87`    |
|  0.3% |      76 | `getvalue`                                                                                                                                                                                                                       | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl`      |
|  0.1% |      37 | `iterate`                                                                                                                                                                                                                        | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl`      |
|  0.1% |      31 | `write(::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)`                                                                                                                                                   | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:340`  |
|  0.1% |      26 | `getvalue(::Type{JSON3.Array}, ::Base.CodeUnits{UInt8, String}, ::SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}, ::Int64, ::UInt64)`                                                                        | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:131`  |
|  0.1% |      25 | `unescape(::JSON3.PointerString)`                                                                                                                                                                                                | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/strings.jl:48` |
|  0.1% |      24 | `var\"#write#86\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.NumberType, ::Vector{UInt8}, ::Int64, ::Int64, ::Int64)`                                                           | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:224`  |
|  0.1% |      24 | `macro expansion`                                                                                                                                                                                                                | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:14`   |
|  0.1% |      24 | `macro expansion`                                                                                                                                                                                                                | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:23`   |
|  0.1% |      23 | `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})`                                                                                               | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40`   |
|  0.1% |      23 | `write(::StructTypes.BoolType, ::Vector{UInt8}, ::Int64, ::Int64, ::Bool)`                                                                                                                                                       | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:209`  |
|  0.1% |      20 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)`                                                      | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:87`    |

##### Standard library

|    % | Samples | Function                                                                  | Location                                                                                              |
| ---: | ------: | ------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| 6.2% |   1,850 | `indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64, ::Int64)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`          |
| 4.2% |   1,261 | `indexed_iterate`                                                         | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`          |
| 4.1% |   1,242 | `GenericMemory`                                                           | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:588`           |
| 1.6% |     467 | `unsafe_load`                                                             | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/pointer.jl:151`        |
| 1.5% |     461 | `ht_keyindex2_shorthash!(::Dict{Symbol, Int64}, ::Symbol)`                | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:267`           |
| 1.0% |     286 | `+`                                                                       | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:87`             |
| 0.8% |     248 | `BottomRF`                                                                | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:84`          |
| 0.8% |     228 | `_foldl_impl`                                                             | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`          |
| 0.8% |     226 | `_setindex!`                                                              | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:1025`         |
| 0.5% |     153 | `getindex`                                                                | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:975`     |
| 0.5% |     135 | `unsafe_string`                                                           | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:130` |
| 0.4% |     125 | `checkbounds`                                                             | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/basic.jl:212`  |
| 0.3% |     100 | `\|`                                                                      | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:418`            |
| 0.3% |      95 | `length_continued`                                                        | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/pointer.jl`            |
| 0.3% |      80 | `unsafe_string`                                                           | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:126` |
| 0.3% |      76 | `getproperty`                                                             | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base_compiler.jl:57`   |
| 0.2% |      73 | `==`                                                                      | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/promotion.jl:641`      |
| 0.2% |      68 | `#write#81`                                                               | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`   |
| 0.2% |      57 | `macro expansion`                                                         | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/simdloop.jl:75`        |
| 0.2% |      55 | `&`                                                                       | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:393`            |

##### Unknown

|     % | Samples | Function      | Location    |
| ----: | ------: | ------------- | ----------- |
| 21.8% |   6,535 | `(anonymous)` | `<unknown>` |

##### Native

|     % | Samples | Function                                                                                                                                                                                | Location    |
| ----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
|  3.2% |     970 | `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})`                                                                                                            | `<unknown>` |
|  0.7% |     213 | `[unknown function]`                                                                                                                                                                    | `<unknown>` |
| <0.1% |       3 | `#defaultminimum##0`                                                                                                                                                                    | `<unknown>` |
| <0.1% |       1 | `(::JSON3.var\"#defaultminimum##0#defaultminimum##1\"{JSON3.Array{Int64, Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}}})(::Int64)` | `<unknown>` |

#### Lines

Lines with the largest contribution to each function's self samples.

##### `_symbol` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:1`)

|      % | Samples | Location                                                         |
| -----: | ------: | ---------------------------------------------------------------- |
| 100.0% |   6,623 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:1` |

##### `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`)

|     % | Samples | Location                                                           |
| ----: | ------: | ------------------------------------------------------------------ |
| 62.7% |   3,960 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157` |
| 20.7% |   1,305 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:60`  |
|  7.4% |     470 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:73`  |
|  3.7% |     231 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:72`  |
|  3.3% |     209 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:155` |

##### `indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64, ::Int64)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`)

|      % | Samples | Location                                                                                     |
| -----: | ------: | -------------------------------------------------------------------------------------------- |
| 100.0% |   1,850 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163` |

##### `indexed_iterate` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`)

|      % | Samples | Location                                                                                     |
| -----: | ------: | -------------------------------------------------------------------------------------------- |
| 100.0% |   1,261 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163` |

##### `GenericMemory` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:588`)

|      % | Samples | Location                                                                                    |
| -----: | ------: | ------------------------------------------------------------------------------------------- |
| 100.0% |   1,242 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:588` |

##### `unsafe_load` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/pointer.jl:151`)

|      % | Samples | Location                                                                                       |
| -----: | ------: | ---------------------------------------------------------------------------------------------- |
| 100.0% |     467 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/pointer.jl:151` |

##### `ht_keyindex2_shorthash!(::Dict{Symbol, Int64}, ::Symbol)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:267`)

|     % | Samples | Location                                                                                    |
| ----: | ------: | ------------------------------------------------------------------------------------------- |
| 59.0% |     272 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:291` |
| 18.9% |      87 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:282` |
|  4.1% |      19 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:281` |
|  3.0% |      14 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:303` |
|  0.7% |       3 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:267` |

##### `+` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:87`)

|      % | Samples | Location                                                                                  |
| -----: | ------: | ----------------------------------------------------------------------------------------- |
| 100.0% |     286 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:87` |

##### `BottomRF` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:84`)

|      % | Samples | Location                                                                                     |
| -----: | ------: | -------------------------------------------------------------------------------------------- |
| 100.0% |     248 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:84` |

##### `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`)

|     % | Samples | Location                                                                                     |
| ----: | ------: | -------------------------------------------------------------------------------------------- |
| 89.9% |     205 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60` |
|  2.2% |       5 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:51` |
|  1.8% |       4 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:56` |

##### `_setindex!` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:1025`)

|      % | Samples | Location                                                                                      |
| -----: | ------: | --------------------------------------------------------------------------------------------- |
| 100.0% |     226 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:1025` |

##### `[unknown function]` (`<unknown>`)

|     % | Samples | Location |
| ----: | ------: | -------- |
| 58.7% |     125 | 147      |
| 35.7% |      76 | 98       |
|  2.8% |       6 | 181      |
|  2.3% |       5 | 11       |
|  0.5% |       1 | 12       |

##### `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:218`)

|     % | Samples | Location                                                          |
| ----: | ------: | ----------------------------------------------------------------- |
| 64.5% |     109 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:248` |
| 12.4% |      21 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:298` |
| 10.1% |      17 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:247` |
|  5.3% |       9 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:268` |
|  2.4% |       4 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:307` |

##### `getindex` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:975`)

|      % | Samples | Location                                                                                          |
| -----: | ------: | ------------------------------------------------------------------------------------------------- |
| 100.0% |     153 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:975` |

##### `iterate` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:75`)

|      % | Samples | Location                                                          |
| -----: | ------: | ----------------------------------------------------------------- |
| 100.0% |     150 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:75` |

##### `unsafe_string` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:130`)

|      % | Samples | Location                                                                                              |
| -----: | ------: | ----------------------------------------------------------------------------------------------------- |
| 100.0% |     135 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:130` |

##### `checkbounds` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/basic.jl:212`)

|      % | Samples | Location                                                                                             |
| -----: | ------: | ---------------------------------------------------------------------------------------------------- |
| 100.0% |     125 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/basic.jl:212` |

##### `#write#81` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:73`)

|     % | Samples | Location                                                           |
| ----: | ------: | ------------------------------------------------------------------ |
| 48.3% |      57 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:200` |
| 32.2% |      38 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:60`  |
| 10.2% |      12 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:73`  |
|  5.1% |       6 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:72`  |
|  1.7% |       2 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:181` |

##### `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{String})` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:142`)

|     % | Samples | Location                                                          |
| ----: | ------: | ----------------------------------------------------------------- |
| 54.8% |      63 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:155` |
|  6.1% |       7 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:167` |
|  2.6% |       3 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:149` |
|  1.7% |       2 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:142` |

##### `|` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:418`)

|      % | Samples | Location                                                                                   |
| -----: | ------: | ------------------------------------------------------------------------------------------ |
| 100.0% |     100 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:418` |

##### `var\"#write#98\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:340`)

|     % | Samples | Location                                                           |
| ----: | ------: | ------------------------------------------------------------------ |
| 27.6% |      24 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:60`  |
| 24.1% |      21 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:360` |
| 13.8% |      12 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:351` |
|  9.2% |       8 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:340` |
|  1.1% |       1 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:352` |

##### `getvalue` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:215`)

|      % | Samples | Location                                                           |
| -----: | ------: | ------------------------------------------------------------------ |
| 100.0% |      87 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:215` |

##### `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:87`)

|     % | Samples | Location                                                          |
| ----: | ------: | ----------------------------------------------------------------- |
| 36.1% |      30 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:88`  |
| 26.5% |      22 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:87`  |
|  7.2% |       6 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:93`  |
|  3.6% |       3 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:101` |
|  1.2% |       1 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:119` |

##### `unsafe_string` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:126`)

|      % | Samples | Location                                                                                              |
| -----: | ------: | ----------------------------------------------------------------------------------------------------- |
| 100.0% |      80 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:126` |

##### `getproperty` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base_compiler.jl:57`)

|      % | Samples | Location                                                                                            |
| -----: | ------: | --------------------------------------------------------------------------------------------------- |
| 100.0% |      76 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base_compiler.jl:57` |

##### `==` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/promotion.jl:641`)

|      % | Samples | Location                                                                                         |
| -----: | ------: | ------------------------------------------------------------------------------------------------ |
| 100.0% |      73 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/promotion.jl:641` |

##### `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`)

|     % | Samples | Location                                                                                                |
| ----: | ------: | ------------------------------------------------------------------------------------------------------- |
| 27.9% |      19 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:60`  |
| 13.2% |       9 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:73`  |
| 10.3% |       7 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:200` |
|  8.8% |       6 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:72`  |
|  5.9% |       4 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:197` |

##### `macro expansion` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/simdloop.jl:75`)

|      % | Samples | Location                                                                                       |
| -----: | ------: | ---------------------------------------------------------------------------------------------- |
| 100.0% |      57 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/simdloop.jl:75` |

##### `&` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:393`)

|      % | Samples | Location                                                                                   |
| -----: | ------: | ------------------------------------------------------------------------------------------ |
| 100.0% |      55 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:393` |

##### `write(::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:340`)

|      % | Samples | Location                                                           |
| -----: | ------: | ------------------------------------------------------------------ |
| 100.0% |      31 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:340` |

##### `getvalue(::Type{JSON3.Array}, ::Base.CodeUnits{UInt8, String}, ::SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}, ::Int64, ::UInt64)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:131`)

|    % | Samples | Location                                                           |
| ---: | ------: | ------------------------------------------------------------------ |
| 7.7% |       2 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:131` |

##### `unescape(::JSON3.PointerString)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/strings.jl:48`)

|     % | Samples | Location                                                             |
| ----: | ------: | -------------------------------------------------------------------- |
| 12.0% |       3 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/strings.jl:60`  |
| 12.0% |       3 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/strings.jl:54`  |
| 12.0% |       3 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/strings.jl:116` |
|  4.0% |       1 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/strings.jl:56`  |
|  4.0% |       1 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/strings.jl:58`  |

##### `var\"#write#86\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.NumberType, ::Vector{UInt8}, ::Int64, ::Int64, ::Int64)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:224`)

|     % | Samples | Location                                                           |
| ----: | ------: | ------------------------------------------------------------------ |
| 79.2% |      19 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:236` |
| 16.7% |       4 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:224` |
|  4.2% |       1 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:231` |

##### `macro expansion` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:14`)

|      % | Samples | Location                                                          |
| -----: | ------: | ----------------------------------------------------------------- |
| 100.0% |      24 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:14` |

##### `macro expansion` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:23`)

|      % | Samples | Location                                                          |
| -----: | ------: | ----------------------------------------------------------------- |
| 100.0% |      24 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:23` |

##### `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40`)

|     % | Samples | Location                                                          |
| ----: | ------: | ----------------------------------------------------------------- |
| 26.1% |       6 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:47` |
| 17.4% |       4 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40` |
| 17.4% |       4 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:55` |
|  4.3% |       1 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:51` |

##### `write(::StructTypes.BoolType, ::Vector{UInt8}, ::Int64, ::Int64, ::Bool)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:209`)

|      % | Samples | Location                                                           |
| -----: | ------: | ------------------------------------------------------------------ |
| 100.0% |      23 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:209` |

##### `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:87`)

|      % | Samples | Location                                                         |
| -----: | ------: | ---------------------------------------------------------------- |
| 100.0% |      20 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:87` |

#### Callers

Callers with the largest contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `_symbol` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:1`)

|      % | Samples | Caller     | Location                                                           |
| -----: | ------: | ---------- | ------------------------------------------------------------------ |
| 100.0% |   6,623 | `getvalue` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:187` |

##### `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`)

|     % | Samples | Caller               | Location                                                                                            |
| ----: | ------: | -------------------- | --------------------------------------------------------------------------------------------------- |
| 99.8% |   6,305 | `[unknown function]` | `<unknown>`                                                                                         |
|  0.2% |      10 | `write`              | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:147`                                  |
| <0.1% |       2 | `#write#79`          | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`                                  |
| <0.1% |       1 | `#write#81`          | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl` |

##### `indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64, ::Int64)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`)

|      % | Samples | Caller      | Location                                                           |
| -----: | ------: | ----------- | ------------------------------------------------------------------ |
| 100.0% |   1,850 | `#write#79` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157` |

##### `indexed_iterate` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`)

|     % | Samples | Caller                                                           | Location                                                                                            |
| ----: | ------: | ---------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| 62.6% |     790 | `indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`        |
| 33.0% |     416 | `#write#79`                                                      | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`                                  |
|  3.9% |      49 | `indexed_iterate`                                                | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`        |
|  0.5% |       6 | `#write#81`                                                      | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl` |

##### `GenericMemory` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:588`)

|     % | Samples | Caller                                    | Location                                                                                      |
| ----: | ------: | ----------------------------------------- | --------------------------------------------------------------------------------------------- |
| 62.3% |     774 | `Array`                                   | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:648`   |
| 37.3% |     463 | `rehash!(::Dict{Symbol, Int64}, ::Int64)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:138`   |
|  0.4% |       5 | `array_new_memory`                        | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:1101` |

##### `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` (`<unknown>`)

|     % | Samples | Caller               | Location                                                                                     |
| ----: | ------: | -------------------- | -------------------------------------------------------------------------------------------- |
| 84.6% |     821 | `[unknown function]` | `<unknown>`                                                                                  |
| 15.1% |     146 | `MappingRF`          | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98` |
|  0.2% |       2 | `_foldl_impl`        | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60` |
|  0.1% |       1 | `foldl_impl`         | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:46` |

##### `unsafe_load` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/pointer.jl:151`)

|      % | Samples | Caller        | Location                                                                                       |
| -----: | ------: | ------------- | ---------------------------------------------------------------------------------------------- |
| 100.0% |     467 | `unsafe_load` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/pointer.jl:151` |

##### `ht_keyindex2_shorthash!(::Dict{Symbol, Int64}, ::Symbol)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:267`)

|     % | Samples | Caller                                                                                                                             | Location                                                                                    |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| 90.0% |     415 | `setindex!(::Dict{Symbol, Int64}, ::Int64, ::Symbol)`                                                                              | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:356` |
| 10.0% |      46 | `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40`                           |

##### `+` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:87`)

|     % | Samples | Caller                                                                                                                                                                                                                           | Location                                                                                              |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| 33.6% |      96 | `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})`                                                                                               | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40`                                     |
| 23.1% |      66 | `macro expansion`                                                                                                                                                                                                                | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:24`                                     |
| 13.3% |      38 | `length_continued`                                                                                                                                                                                                               | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:559` |
|  8.7% |      25 | `var\"#write#98\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)`                                                          | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:340`                                    |
|  8.4% |      24 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:218`                                     |

##### `BottomRF` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:84`)

|     % | Samples | Caller               | Location                                                                                     |
| ----: | ------: | -------------------- | -------------------------------------------------------------------------------------------- |
| 97.2% |     241 | `[unknown function]` | `<unknown>`                                                                                  |
|  2.8% |       7 | `MappingRF`          | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98` |

##### `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`)

|     % | Samples | Caller                                                                       | Location                                                                                     |
| ----: | ------: | ---------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| 99.6% |     227 | `foldl_impl`                                                                 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:46` |
|  0.4% |       1 | `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` | `<unknown>`                                                                                  |

##### `_setindex!` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:1025`)

|     % | Samples | Caller               | Location                                                                                      |
| ----: | ------: | -------------------- | --------------------------------------------------------------------------------------------- |
| 94.7% |     214 | `setindex!`          | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:1020` |
|  5.3% |      12 | `[unknown function]` | `<unknown>`                                                                                   |

##### `[unknown function]` (`<unknown>`)

|     % | Samples | Caller                                                                       | Location                                                                                            |
| ----: | ------: | ---------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| 49.3% |     105 | `#write#79`                                                                  | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`                                  |
| 35.7% |      76 | `_foldl_impl`                                                                | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`        |
| 12.2% |      26 | `#write#81`                                                                  | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl` |
|  2.8% |       6 | `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` | `<unknown>`                                                                                         |

##### `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:218`)

|     % | Samples | Caller                                                                                                                                                                               | Location                                                          |
| ----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------- |
| 98.2% |     166 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:218` |
|  1.8% |       3 | `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)`                         | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:87`  |

##### `getindex` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:975`)

|     % | Samples | Caller                                                                                                                                                                                                                           | Location                                                                                        |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| 60.8% |      93 | `macro expansion`                                                                                                                                                                                                                | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:332`                              |
| 27.5% |      42 | `getindex`                                                                                                                                                                                                                       | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/subarray.jl:334` |
|  9.8% |      15 | `var\"#write#98\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)`                                                          | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:340`                              |
|  1.3% |       2 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:218`                               |
|  0.7% |       1 | `getindex`                                                                                                                                                                                                                       | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:161`                              |

##### `iterate` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:75`)

|     % | Samples | Caller                                                                                                                       | Location                                                                                           |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| 51.3% |      77 | `iterate`                                                                                                                    | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:75`                                  |
| 39.3% |      59 | `#write#79`                                                                                                                  | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`                                 |
|  8.7% |      13 | `iterate`                                                                                                                    | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/iterators.jl:697`   |
|  0.7% |       1 | `isempty(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:1127` |

##### `unsafe_string` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:130`)

|      % | Samples | Caller   | Location                                                                                              |
| -----: | ------: | -------- | ----------------------------------------------------------------------------------------------------- |
| 100.0% |     135 | `String` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:145` |

##### `checkbounds` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/basic.jl:212`)

|      % | Samples | Caller     | Location                                                                                              |
| -----: | ------: | ---------- | ----------------------------------------------------------------------------------------------------- |
| 100.0% |     125 | `codeunit` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:166` |

##### `#write#81` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:73`)

|     % | Samples | Caller               | Location                                                          |
| ----: | ------: | -------------------- | ----------------------------------------------------------------- |
| 99.2% |     117 | `[unknown function]` | `<unknown>`                                                       |
|  0.8% |       1 | `#write#81`          | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:73` |

##### `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{String})` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:142`)

|     % | Samples | Caller                                                                                                                                                                      | Location                                                         |
| ----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| 93.0% |     107 | `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)`                | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:87` |
|  7.0% |       8 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:87` |

##### `|` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:418`)

|     % | Samples | Caller          | Location                                                                                    |
| ----: | ------: | --------------- | ------------------------------------------------------------------------------------------- |
| 94.0% |      94 | `string`        | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:88`                           |
|  4.0% |       4 | `promoteeltype` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:96`                           |
|  1.0% |       1 | `\|`            | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:1058` |
|  1.0% |       1 | `parsefrac`     | `../profiler-md-julia-depot/packages/Parsers/05lwR/src/floats.jl:496`                       |

##### `length_continued` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/pointer.jl`)

|      % | Samples | Caller             | Location                                                                                              |
| -----: | ------: | ------------------ | ----------------------------------------------------------------------------------------------------- |
| 100.0% |      95 | `length(::String)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:540` |

##### `var\"#write#98\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:340`)

|     % | Samples | Caller                                                                         | Location                                                           |
| ----: | ------: | ------------------------------------------------------------------------------ | ------------------------------------------------------------------ |
| 71.3% |      62 | `write(::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:340` |
| 28.7% |      25 | `#write#79`                                                                    | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157` |

##### `getvalue` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:215`)

|      % | Samples | Caller    | Location                                                          |
| -----: | ------: | --------- | ----------------------------------------------------------------- |
| 100.0% |      87 | `iterate` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:81` |

##### `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:87`)

|     % | Samples | Caller                                                                                                                                                                                                                           | Location                                                          |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| 78.3% |      65 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)`                                                      | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:87`  |
| 21.7% |      18 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:218` |

##### `unsafe_string` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:126`)

|      % | Samples | Caller     | Location                                                           |
| -----: | ------: | ---------- | ------------------------------------------------------------------ |
| 100.0% |      80 | `getvalue` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:195` |

##### `getvalue` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl`)

|     % | Samples | Caller    | Location                                                          |
| ----: | ------: | --------- | ----------------------------------------------------------------- |
| 51.3% |      39 | `iterate` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:78` |
| 48.7% |      37 | `iterate` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:81` |

##### `getproperty` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base_compiler.jl:57`)

|     % | Samples | Caller                                                     | Location                                                                                    |
| ----: | ------: | ---------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| 50.0% |      38 | `_setindex!`                                               | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:331` |
| 13.2% |      10 | `_setindex!`                                               | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:325` |
|  6.6% |       5 | `ht_keyindex2_shorthash!(::Dict{Symbol, Int64}, ::Symbol)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:267` |
|  6.6% |       5 | `_setindex!`                                               | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:327` |
|  5.3% |       4 | `_setindex!`                                               | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:328` |

##### `==` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/promotion.jl:641`)

|     % | Samples | Caller                                                                                                                                                                                                                           | Location                                                                                    |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| 47.9% |      35 | `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{String})`                                                                                                                   | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:142`                           |
| 28.8% |      21 | `ht_keyindex2_shorthash!(::Dict{Symbol, Int64}, ::Symbol)`                                                                                                                                                                       | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:267` |
|  9.6% |       7 | `isarray`                                                                                                                                                                                                                        | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:61`                           |
|  8.2% |       6 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:218`                           |
|  2.7% |       2 | `typeparser`                                                                                                                                                                                                                     | `../profiler-md-julia-depot/packages/Parsers/05lwR/src/ints.jl:13`                          |

##### `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`)

|      % | Samples | Caller               | Location    |
| -----: | ------: | -------------------- | ----------- |
| 100.0% |      68 | `[unknown function]` | `<unknown>` |

##### `macro expansion` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/simdloop.jl:75`)

|     % | Samples | Caller                                                                                                                                                                  | Location                                                           |
| ----: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| 80.7% |      46 | `escapelength`                                                                                                                                                          | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:331` |
| 19.3% |      11 | `var\"#write#98\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:340` |

##### `&` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:393`)

|     % | Samples | Caller                                                     | Location                                                                                    |
| ----: | ------: | ---------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| 70.9% |      39 | `getnontypemask`                                           | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:114`                          |
| 25.5% |      14 | `ht_keyindex2_shorthash!(::Dict{Symbol, Int64}, ::Symbol)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:267` |
|  3.6% |       2 | `getproperty`                                              | `../profiler-md-julia-depot/packages/Parsers/05lwR/src/utils.jl:467`                        |

##### `iterate` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl`)

|     % | Samples | Caller      | Location                                                                                         |
| ----: | ------: | ----------- | ------------------------------------------------------------------------------------------------ |
| 73.0% |      27 | `#write#79` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`                               |
| 21.6% |       8 | `iterate`   | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:75`                                |
|  5.4% |       2 | `iterate`   | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/iterators.jl:697` |

##### `write(::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:340`)

|      % | Samples | Caller      | Location                                                           |
| -----: | ------: | ----------- | ------------------------------------------------------------------ |
| 100.0% |      31 | `#write#79` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157` |

##### `getvalue(::Type{JSON3.Array}, ::Base.CodeUnits{UInt8, String}, ::SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}, ::Int64, ::UInt64)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:131`)

|     % | Samples | Caller               | Location                                                                                     |
| ----: | ------: | -------------------- | -------------------------------------------------------------------------------------------- |
| 76.9% |      20 | `getvalue`           | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:216`                           |
| 15.4% |       4 | `[unknown function]` | `<unknown>`                                                                                  |
|  7.7% |       2 | `foldl_impl`         | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:46` |

##### `unescape(::JSON3.PointerString)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/strings.jl:48`)

|      % | Samples | Caller     | Location                                                           |
| -----: | ------: | ---------- | ------------------------------------------------------------------ |
| 100.0% |      25 | `getvalue` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:193` |

##### `var\"#write#86\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.NumberType, ::Vector{UInt8}, ::Int64, ::Int64, ::Int64)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:224`)

|     % | Samples | Caller                                                                        | Location                                                           |
| ----: | ------: | ----------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| 79.2% |      19 | `write(::StructTypes.NumberType, ::Vector{UInt8}, ::Int64, ::Int64, ::Int64)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:224` |
| 20.8% |       5 | `#write#79`                                                                   | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157` |

##### `macro expansion` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:14`)

|     % | Samples | Caller                                                                                                                                                                                                                           | Location                                                          |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| 91.7% |      22 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:218` |
|  8.3% |       2 | `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{String})`                                                                                                                   | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:142` |

##### `macro expansion` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:23`)

|     % | Samples | Caller                                                                                                                                                                                                                           | Location                                                          |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| 95.8% |      23 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:218` |
|  4.2% |       1 | `var\"#read!#9\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Array}, ::Bool)`  | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:312` |

##### `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40`)

|     % | Samples | Caller               | Location                                                           |
| ----: | ------: | -------------------- | ------------------------------------------------------------------ |
| 73.9% |      17 | `getvalue`           | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:127` |
| 26.1% |       6 | `[unknown function]` | `<unknown>`                                                        |

##### `write(::StructTypes.BoolType, ::Vector{UInt8}, ::Int64, ::Int64, ::Bool)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:209`)

|      % | Samples | Caller      | Location                                                           |
| -----: | ------: | ----------- | ------------------------------------------------------------------ |
| 100.0% |      23 | `#write#79` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157` |

##### `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:87`)

|     % | Samples | Caller                                                                                                                                                                                                                           | Location                                                          |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| 70.0% |      14 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:218` |
| 30.0% |       6 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)`                                             | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:218` |

##### `#defaultminimum##0` (`<unknown>`)

|      % | Samples | Caller               | Location    |
| -----: | ------: | -------------------- | ----------- |
| 100.0% |       3 | `[unknown function]` | `<unknown>` |

##### `(::JSON3.var\"#defaultminimum##0#defaultminimum##1\"{JSON3.Array{Int64, Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}}})(::Int64)` (`<unknown>`)

|      % | Samples | Caller                                                                       | Location    |
| -----: | ------: | ---------------------------------------------------------------------------- | ----------- |
| 100.0% |       1 | `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` | `<unknown>` |

### Total samples

Functions with the most samples collected within the function and its callees.

|     % | Samples | Function                                                           | Location                                                                                                          |
| ----: | ------: | ------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| 78.2% |  23,397 | `[unknown function]`                                               | `<unknown>`                                                                                                       |
| 78.2% |  23,397 | `macro expansion`                                                  | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/stdlib/v1.13/Profile/src/Profile.jl:82` |
| 78.2% |  23,397 | `capture_wall`                                                     | `./profile.jl:43`                                                                                                 |
| 78.2% |  23,397 | `eval(::Module, ::Any)`                                            | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:489`                       |
| 78.2% |  23,397 | `include_string(::typeof(identity), ::Module, ::String, ::String)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/loading.jl:2989`                   |
| 78.2% |  23,397 | `_include(::Function, ::Module, ::String)`                         | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/loading.jl:3083`                   |
| 78.2% |  23,397 | `include(::Module, ::String)`                                      | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base.jl:309`                       |
| 78.2% |  23,397 | `exec_options(::Base.JLOptions)`                                   | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/client.jl:234`                     |
| 78.2% |  23,397 | `_start()`                                                         | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/client.jl:570`                     |
| 78.2% |  23,395 | `parse_workload`                                                   | `./profile.jl:18`                                                                                                 |
| 72.5% |  21,716 | `#write#58`                                                        | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:40`                                                 |
| 53.5% |  16,009 | `write`                                                            | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:147`                                                |
| 53.5% |  16,003 | `#write#79`                                                        | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`                                                |
| 53.3% |  15,950 | `#write#81`                                                        | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`               |
| 22.1% |   6,623 | `_symbol`                                                          | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:1`                                                  |
| 22.1% |   6,623 | `getvalue`                                                         | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:187`                                                |
| 21.8% |   6,535 | `(anonymous)`                                                      | `<unknown>`                                                                                                       |
| 19.1% |   5,703 | `foldl_impl`                                                       | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:46`                      |
| 19.1% |   5,703 | `mapfoldl_impl`                                                    | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:42`                      |
| 19.1% |   5,703 | `#mapfoldl#271`                                                    | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:173`                     |

#### Categories

Categories accounting for at least 1.0% of self samples.

##### Third-party

|     % | Samples | Function                                                                                                                                                                                                                         | Location                                                           |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| 72.5% |  21,716 | `#write#58`                                                                                                                                                                                                                      | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:40`  |
| 53.5% |  16,009 | `write`                                                                                                                                                                                                                          | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:147` |
| 53.5% |  16,003 | `#write#79`                                                                                                                                                                                                                      | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157` |
| 22.1% |   6,623 | `_symbol`                                                                                                                                                                                                                        | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:1`   |
| 22.1% |   6,623 | `getvalue`                                                                                                                                                                                                                       | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:187` |
| 19.1% |   5,703 | `defaultminimum`                                                                                                                                                                                                                 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:12`  |
| 16.6% |   4,969 | `getvalue`                                                                                                                                                                                                                       | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:127` |
| 16.5% |   4,939 | `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})`                                                                                               | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40`  |
| 12.8% |   3,832 | `iterate`                                                                                                                                                                                                                        | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:81`  |
| 11.3% |   3,388 | `getvalue`                                                                                                                                                                                                                       | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:214` |
| 10.4% |   3,115 | `iterate`                                                                                                                                                                                                                        | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:78`  |
|  5.5% |   1,652 | `getindex`                                                                                                                                                                                                                       | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:163` |
|  4.3% |   1,291 | `var\"#read#6\"(::Bool, ::Nothing, ::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.read), ::String)`                                                                                                       | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:30`   |
|  4.3% |   1,291 | `read`                                                                                                                                                                                                                           | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:30`   |
|  3.9% |   1,164 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:218`  |
|  3.9% |   1,164 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)`                                             | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:218`  |
|  3.9% |   1,164 | `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)`                                                                     | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:87`   |
|  3.9% |   1,164 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)`                                                      | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:87`   |
|  3.9% |   1,164 | `read!`                                                                                                                                                                                                                          | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:87`   |
|  3.9% |   1,163 | `var\"#read!#9\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Array}, ::Bool)`  | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:312`  |

##### Standard library

|     % | Samples | Function                                                           | Location                                                                                                          |
| ----: | ------: | ------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| 78.2% |  23,397 | `macro expansion`                                                  | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/stdlib/v1.13/Profile/src/Profile.jl:82` |
| 78.2% |  23,397 | `eval(::Module, ::Any)`                                            | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:489`                       |
| 78.2% |  23,397 | `include_string(::typeof(identity), ::Module, ::String, ::String)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/loading.jl:2989`                   |
| 78.2% |  23,397 | `_include(::Function, ::Module, ::String)`                         | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/loading.jl:3083`                   |
| 78.2% |  23,397 | `include(::Module, ::String)`                                      | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base.jl:309`                       |
| 78.2% |  23,397 | `exec_options(::Base.JLOptions)`                                   | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/client.jl:234`                     |
| 78.2% |  23,397 | `_start()`                                                         | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/client.jl:570`                     |
| 53.3% |  15,950 | `#write#81`                                                        | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`               |
| 19.1% |   5,703 | `foldl_impl`                                                       | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:46`                      |
| 19.1% |   5,703 | `mapfoldl_impl`                                                    | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:42`                      |
| 19.1% |   5,703 | `#mapfoldl#271`                                                    | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:173`                     |
| 19.1% |   5,703 | `mapfoldl`                                                         | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:173`                     |
| 19.1% |   5,703 | `#mapreduce#275`                                                   | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:306`                     |
| 19.1% |   5,703 | `mapreduce`                                                        | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:306`                     |
| 19.1% |   5,703 | `#sum#278`                                                         | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:535`                     |
| 19.1% |   5,703 | `sum`                                                              | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:535`                     |
| 19.1% |   5,703 | `#sum#279`                                                         | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:564`                     |
| 19.1% |   5,703 | `sum`                                                              | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:564`                     |
| 19.1% |   5,703 | `_foldl_impl`                                                      | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:56`                      |
| 19.0% |   5,698 | `MappingRF`                                                        | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98`                      |

##### Unknown

|     % | Samples | Function      | Location    |
| ----: | ------: | ------------- | ----------- |
| 21.8% |   6,535 | `(anonymous)` | `<unknown>` |

##### Native

|     % | Samples | Function                                                                                                                                                                                | Location    |
| ----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 78.2% |  23,397 | `[unknown function]`                                                                                                                                                                    | `<unknown>` |
| 19.0% |   5,700 | `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})`                                                                                                            | `<unknown>` |
| 19.0% |   5,681 | `#defaultminimum##0`                                                                                                                                                                    | `<unknown>` |
| <0.1% |       7 | `(::JSON3.var\"#defaultminimum##0#defaultminimum##1\"{JSON3.Array{Int64, Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}}})(::Int64)` | `<unknown>` |

#### Callers

Callers with the largest contribution to each function's total samples. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `[unknown function]` (`<unknown>`)

|      % | Samples | Caller                                                                       | Location                                                                                            |
| -----: | ------: | ---------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| 100.0% |  23,397 | `eval(::Module, ::Any)`                                                      | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:489`         |
|  92.8% |  21,718 | `parse_workload`                                                             | `./profile.jl:18`                                                                                   |
|  68.2% |  15,968 | `#write#79`                                                                  | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`                                  |
|  65.2% |  15,262 | `#write#81`                                                                  | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl` |
|  24.3% |   5,697 | `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` | `<unknown>`                                                                                         |

##### `macro expansion` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/stdlib/v1.13/Profile/src/Profile.jl:82`)

|      % | Samples | Caller         | Location          |
| -----: | ------: | -------------- | ----------------- |
| 100.0% |  23,397 | `capture_wall` | `./profile.jl:43` |

##### `capture_wall` (`./profile.jl:43`)

|      % | Samples | Caller               | Location    |
| -----: | ------: | -------------------- | ----------- |
| 100.0% |  23,397 | `[unknown function]` | `<unknown>` |

##### `eval(::Module, ::Any)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:489`)

|      % | Samples | Caller                                                             | Location                                                                                        |
| -----: | ------: | ------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------- |
| 100.0% |  23,397 | `include_string(::typeof(identity), ::Module, ::String, ::String)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/loading.jl:2989` |

##### `include_string(::typeof(identity), ::Module, ::String, ::String)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/loading.jl:2989`)

|      % | Samples | Caller                                     | Location                                                                                        |
| -----: | ------: | ------------------------------------------ | ----------------------------------------------------------------------------------------------- |
| 100.0% |  23,397 | `_include(::Function, ::Module, ::String)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/loading.jl:3083` |

##### `_include(::Function, ::Module, ::String)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/loading.jl:3083`)

|      % | Samples | Caller                        | Location                                                                                    |
| -----: | ------: | ----------------------------- | ------------------------------------------------------------------------------------------- |
| 100.0% |  23,397 | `include(::Module, ::String)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base.jl:309` |

##### `include(::Module, ::String)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base.jl:309`)

|      % | Samples | Caller                           | Location                                                                                      |
| -----: | ------: | -------------------------------- | --------------------------------------------------------------------------------------------- |
| 100.0% |  23,397 | `exec_options(::Base.JLOptions)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/client.jl:234` |

##### `exec_options(::Base.JLOptions)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/client.jl:234`)

|      % | Samples | Caller     | Location                                                                                      |
| -----: | ------: | ---------- | --------------------------------------------------------------------------------------------- |
| 100.0% |  23,397 | `_start()` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/client.jl:570` |

##### `parse_workload` (`./profile.jl:18`)

|      % | Samples | Caller            | Location                                                                                                          |
| -----: | ------: | ----------------- | ----------------------------------------------------------------------------------------------------------------- |
| 100.0% |  23,395 | `macro expansion` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/stdlib/v1.13/Profile/src/Profile.jl:82` |

##### `#write#58` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:40`)

|      % | Samples | Caller               | Location    |
| -----: | ------: | -------------------- | ----------- |
| 100.0% |  21,716 | `[unknown function]` | `<unknown>` |

##### `write` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:147`)

|      % | Samples | Caller      | Location                                                          |
| -----: | ------: | ----------- | ----------------------------------------------------------------- |
| 100.0% |  16,009 | `#write#58` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:40` |

##### `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`)

|      % | Samples | Caller               | Location                                                                                            |
| -----: | ------: | -------------------- | --------------------------------------------------------------------------------------------------- |
| 100.0% |  16,003 | `write`              | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:147`                                  |
|  95.4% |  15,260 | `[unknown function]` | `<unknown>`                                                                                         |
|  <0.1% |       2 | `#write#79`          | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`                                  |
|  <0.1% |       1 | `#write#81`          | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl` |

##### `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`)

|      % | Samples | Caller               | Location    |
| -----: | ------: | -------------------- | ----------- |
| 100.0% |  15,950 | `[unknown function]` | `<unknown>` |

##### `_symbol` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:1`)

|      % | Samples | Caller     | Location                                                           |
| -----: | ------: | ---------- | ------------------------------------------------------------------ |
| 100.0% |   6,623 | `getvalue` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:187` |

##### `getvalue` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:187`)

|     % | Samples | Caller                                                                                                                             | Location                                                          |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| 53.7% |   3,555 | `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40` |
| 46.2% |   3,062 | `iterate`                                                                                                                          | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:78` |
|  0.1% |       6 | `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, Vector{UInt64}})`                                                     | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40` |

##### `foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:46`)

|      % | Samples | Caller          | Location                                                                                     |
| -----: | ------: | --------------- | -------------------------------------------------------------------------------------------- |
| 100.0% |   5,703 | `mapfoldl_impl` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:42` |

##### `mapfoldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:42`)

|      % | Samples | Caller          | Location                                                                                      |
| -----: | ------: | --------------- | --------------------------------------------------------------------------------------------- |
| 100.0% |   5,703 | `#mapfoldl#271` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:173` |

##### `#mapfoldl#271` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:173`)

|      % | Samples | Caller     | Location                                                                                      |
| -----: | ------: | ---------- | --------------------------------------------------------------------------------------------- |
| 100.0% |   5,703 | `mapfoldl` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:173` |

##### `defaultminimum` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:12`)

|      % | Samples | Caller               | Location                                                          |
| -----: | ------: | -------------------- | ----------------------------------------------------------------- |
| 100.0% |   5,703 | `#write#58`          | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:40` |
|  89.3% |   5,095 | `#defaultminimum##0` | `<unknown>`                                                       |

##### `mapfoldl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:173`)

|      % | Samples | Caller           | Location                                                                                      |
| -----: | ------: | ---------------- | --------------------------------------------------------------------------------------------- |
| 100.0% |   5,703 | `#mapreduce#275` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:306` |

##### `#mapreduce#275` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:306`)

|      % | Samples | Caller      | Location                                                                                      |
| -----: | ------: | ----------- | --------------------------------------------------------------------------------------------- |
| 100.0% |   5,703 | `mapreduce` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:306` |

##### `mapreduce` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:306`)

|      % | Samples | Caller     | Location                                                                                      |
| -----: | ------: | ---------- | --------------------------------------------------------------------------------------------- |
| 100.0% |   5,703 | `#sum#278` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:535` |

##### `#sum#278` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:535`)

|      % | Samples | Caller | Location                                                                                      |
| -----: | ------: | ------ | --------------------------------------------------------------------------------------------- |
| 100.0% |   5,703 | `sum`  | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:535` |

##### `sum` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:535`)

|      % | Samples | Caller                                                                                                                                    | Location                                                                                      |
| -----: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| 100.0% |   5,703 | `#sum#279`                                                                                                                                | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:564` |
|  99.8% |   5,694 | `[unknown function]`                                                                                                                      | `<unknown>`                                                                                   |
|   0.1% |       7 | `defaultminimum(::JSON3.Array{Int64, Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:11`                             |

##### `#sum#279` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:564`)

|      % | Samples | Caller | Location                                                                                      |
| -----: | ------: | ------ | --------------------------------------------------------------------------------------------- |
| 100.0% |   5,703 | `sum`  | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:564` |

##### `sum` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:564`)

|      % | Samples | Caller               | Location                                                          |
| -----: | ------: | -------------------- | ----------------------------------------------------------------- |
| 100.0% |   5,703 | `defaultminimum`     | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:12` |
|  59.1% |   3,370 | `[unknown function]` | `<unknown>`                                                       |

##### `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:56`)

|      % | Samples | Caller       | Location                                                                                     |
| -----: | ------: | ------------ | -------------------------------------------------------------------------------------------- |
| 100.0% |   5,703 | `foldl_impl` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:46` |

##### `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` (`<unknown>`)

|      % | Samples | Caller               | Location                                                                                     |
| -----: | ------: | -------------------- | -------------------------------------------------------------------------------------------- |
| 100.0% |   5,698 | `MappingRF`          | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98` |
|  63.0% |   3,590 | `[unknown function]` | `<unknown>`                                                                                  |
|  <0.1% |       2 | `_foldl_impl`        | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60` |
|  <0.1% |       1 | `foldl_impl`         | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:46` |

##### `MappingRF` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98`)

|      % | Samples | Caller               | Location                                                                                     |
| -----: | ------: | -------------------- | -------------------------------------------------------------------------------------------- |
| 100.0% |   5,697 | `_foldl_impl`        | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:56` |
|   6.5% |     371 | `_foldl_impl`        | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60` |
|   0.4% |      20 | `[unknown function]` | `<unknown>`                                                                                  |

##### `#defaultminimum##0` (`<unknown>`)

|      % | Samples | Caller               | Location    |
| -----: | ------: | -------------------- | ----------- |
| 100.0% |   5,681 | `[unknown function]` | `<unknown>` |

##### `getvalue` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:127`)

|     % | Samples | Caller     | Location                                                           |
| ----: | ------: | ---------- | ------------------------------------------------------------------ |
| 67.0% |   3,329 | `getvalue` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:214` |
| 33.0% |   1,640 | `getindex` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:163` |

##### `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40`)

|     % | Samples | Caller               | Location                                                           |
| ----: | ------: | -------------------- | ------------------------------------------------------------------ |
| 99.9% |   4,933 | `getvalue`           | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:127` |
|  0.1% |       6 | `[unknown function]` | `<unknown>`                                                        |

##### `iterate` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:81`)

|     % | Samples | Caller      | Location                                                                                         |
| ----: | ------: | ----------- | ------------------------------------------------------------------------------------------------ |
| 45.3% |   1,735 | `#write#79` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`                               |
| 43.5% |   1,667 | `iterate`   | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/iterators.jl:697` |
| 11.2% |     430 | `iterate`   | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:75`                                |

##### `getvalue` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:214`)

|      % | Samples | Caller    | Location                                                          |
| -----: | ------: | --------- | ----------------------------------------------------------------- |
| 100.0% |   3,388 | `iterate` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:81` |

##### `iterate` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:78`)

|     % | Samples | Caller      | Location                                                                                         |
| ----: | ------: | ----------- | ------------------------------------------------------------------------------------------------ |
| 52.2% |   1,627 | `#write#79` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`                               |
| 37.6% |   1,171 | `iterate`   | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/iterators.jl:697` |
| 10.2% |     317 | `iterate`   | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:75`                                |

##### `getindex` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:163`)

|     % | Samples | Caller               | Location                                                                                                 |
| ----: | ------: | -------------------- | -------------------------------------------------------------------------------------------------------- |
| 59.3% |     980 | `isassigned`         | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:1641` |
| 22.8% |     377 | `#write#81`          | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`      |
| 17.9% |     295 | `#defaultminimum##0` | `<unknown>`                                                                                              |

##### `var\"#read#6\"(::Bool, ::Nothing, ::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.read), ::String)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:30`)

|      % | Samples | Caller | Location                                                         |
| -----: | ------: | ------ | ---------------------------------------------------------------- |
| 100.0% |   1,291 | `read` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:30` |

##### `read` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:30`)

|      % | Samples | Caller           | Location          |
| -----: | ------: | ---------------- | ----------------- |
| 100.0% |   1,291 | `parse_workload` | `./profile.jl:18` |

##### `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:218`)

|      % | Samples | Caller                                                                                                                                                                               | Location                                                          |
| -----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------- |
| 100.0% |   1,164 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:218` |
|   0.3% |       3 | `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)`                         | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:87`  |

##### `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:218`)

|      % | Samples | Caller                                                                                                                                                       | Location                                                         |
| -----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------- |
| 100.0% |   1,164 | `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:87` |

##### `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:87`)

|      % | Samples | Caller                                                                                                                                                                                                                           | Location                                                          |
| -----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| 100.0% |   1,164 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)`                                                      | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:87`  |
| 100.0% |   1,164 | `read!`                                                                                                                                                                                                                          | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:87`  |
|   1.5% |      18 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:218` |

##### `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:87`)

|      % | Samples | Caller                                                                                                                                                                                                                           | Location                                                          |
| -----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| 100.0% |   1,164 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:218` |
|  99.9% |   1,163 | `var\"#read!#9\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Array}, ::Bool)`  | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:312` |
|   0.5% |       6 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)`                                             | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:218` |

##### `read!` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:87`)

|      % | Samples | Caller                                                                                                                     | Location                                                         |
| -----: | ------: | -------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| 100.0% |   1,164 | `var\"#read#6\"(::Bool, ::Nothing, ::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.read), ::String)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:30` |

##### `var\"#read!#9\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Array}, ::Bool)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:312`)

|      % | Samples | Caller                                                                                                                                                                              | Location                                                          |
| -----: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| 100.0% |   1,163 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Array}, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:312` |
|   0.1% |       1 | `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)`                        | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:87`  |

##### `(::JSON3.var\"#defaultminimum##0#defaultminimum##1\"{JSON3.Array{Int64, Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}}})(::Int64)` (`<unknown>`)

|     % | Samples | Caller                                                                       | Location                                                                                     |
| ----: | ------: | ---------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| 85.7% |       6 | `MappingRF`                                                                  | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98` |
| 14.3% |       1 | `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` | `<unknown>`                                                                                  |

#### Callees

Callees with the largest contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `[unknown function]` (`<unknown>`)

|      % | Samples | Callee         | Location                                                                                            |
| -----: | ------: | -------------- | --------------------------------------------------------------------------------------------------- |
| 100.0% |  23,397 | `capture_wall` | `./profile.jl:43`                                                                                   |
|  92.8% |  21,716 | `#write#58`    | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:40`                                   |
|  68.2% |  15,950 | `#write#81`    | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl` |
|  65.2% |  15,260 | `#write#79`    | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`                                  |
|  24.3% |   5,694 | `sum`          | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:535`       |

##### `macro expansion` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/stdlib/v1.13/Profile/src/Profile.jl:82`)

|      % | Samples | Callee           | Location          |
| -----: | ------: | ---------------- | ----------------- |
| 100.0% |  23,395 | `parse_workload` | `./profile.jl:18` |

##### `capture_wall` (`./profile.jl:43`)

|      % | Samples | Callee            | Location                                                                                                          |
| -----: | ------: | ----------------- | ----------------------------------------------------------------------------------------------------------------- |
| 100.0% |  23,397 | `macro expansion` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/stdlib/v1.13/Profile/src/Profile.jl:82` |

##### `eval(::Module, ::Any)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:489`)

|      % | Samples | Callee               | Location    |
| -----: | ------: | -------------------- | ----------- |
| 100.0% |  23,397 | `[unknown function]` | `<unknown>` |

##### `include_string(::typeof(identity), ::Module, ::String, ::String)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/loading.jl:2989`)

|      % | Samples | Callee                  | Location                                                                                    |
| -----: | ------: | ----------------------- | ------------------------------------------------------------------------------------------- |
| 100.0% |  23,397 | `eval(::Module, ::Any)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:489` |

##### `_include(::Function, ::Module, ::String)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/loading.jl:3083`)

|      % | Samples | Callee                                                             | Location                                                                                        |
| -----: | ------: | ------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------- |
| 100.0% |  23,397 | `include_string(::typeof(identity), ::Module, ::String, ::String)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/loading.jl:2989` |

##### `include(::Module, ::String)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base.jl:309`)

|      % | Samples | Callee                                     | Location                                                                                        |
| -----: | ------: | ------------------------------------------ | ----------------------------------------------------------------------------------------------- |
| 100.0% |  23,397 | `_include(::Function, ::Module, ::String)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/loading.jl:3083` |

##### `exec_options(::Base.JLOptions)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/client.jl:234`)

|      % | Samples | Callee                        | Location                                                                                    |
| -----: | ------: | ----------------------------- | ------------------------------------------------------------------------------------------- |
| 100.0% |  23,397 | `include(::Module, ::String)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base.jl:309` |

##### `_start()` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/client.jl:570`)

|      % | Samples | Callee                           | Location                                                                                      |
| -----: | ------: | -------------------------------- | --------------------------------------------------------------------------------------------- |
| 100.0% |  23,397 | `exec_options(::Base.JLOptions)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/client.jl:234` |

##### `parse_workload` (`./profile.jl:18`)

|     % | Samples | Callee               | Location                                                                                              |
| ----: | ------: | -------------------- | ----------------------------------------------------------------------------------------------------- |
| 92.8% |  21,718 | `[unknown function]` | `<unknown>`                                                                                           |
|  5.5% |   1,291 | `read`               | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:30`                                      |
|  1.5% |     356 | `length(::String)`   | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:540` |

##### `#write#58` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:40`)

|     % | Samples | Callee           | Location                                                                                        |
| ----: | ------: | ---------------- | ----------------------------------------------------------------------------------------------- |
| 73.7% |  16,009 | `write`          | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:147`                              |
| 26.3% |   5,703 | `defaultminimum` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:12`                               |
| <0.1% |       3 | `StringVector`   | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/iobuffer.jl:168` |

##### `write` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:147`)

|      % | Samples | Callee      | Location                                                           |
| -----: | ------: | ----------- | ------------------------------------------------------------------ |
| 100.0% |  16,003 | `#write#79` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157` |

##### `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`)

|     % | Samples | Callee                                                                         | Location                                                                                     |
| ----: | ------: | ------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------- |
| 99.8% |  15,968 | `[unknown function]`                                                           | `<unknown>`                                                                                  |
| 11.6% |   1,850 | `indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64, ::Int64)`      | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163` |
| 10.8% |   1,735 | `iterate`                                                                      | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:81`                            |
| 10.2% |   1,627 | `iterate`                                                                      | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:78`                            |
|  7.0% |   1,113 | `write(::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:340`                           |

##### `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`)

|     % | Samples | Callee               | Location                                                                                                 |
| ----: | ------: | -------------------- | -------------------------------------------------------------------------------------------------------- |
| 95.7% |  15,262 | `[unknown function]` | `<unknown>`                                                                                              |
|  3.1% |     492 | `isassigned`         | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:1641` |
|  2.4% |     377 | `getindex`           | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:163`                                       |
|  0.1% |      19 | `iterate`            | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/range.jl`                 |
|  0.1% |       9 | `indexed_iterate`    | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`             |

##### `getvalue` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:187`)

|      % | Samples | Callee    | Location                                                         |
| -----: | ------: | --------- | ---------------------------------------------------------------- |
| 100.0% |   6,623 | `_symbol` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:1` |

##### `foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:46`)

|      % | Samples | Callee                                                                                                                                                    | Location                                                                                     |
| -----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| 100.0% |   5,703 | `_foldl_impl`                                                                                                                                             | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:56` |
|  99.9% |   5,697 | `_foldl_impl`                                                                                                                                             | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60` |
|  <0.1% |       2 | `getvalue(::Type{JSON3.Array}, ::Base.CodeUnits{UInt8, String}, ::SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}, ::Int64, ::UInt64)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:131`                           |
|  <0.1% |       1 | `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})`                                                                              | `<unknown>`                                                                                  |

##### `mapfoldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:42`)

|      % | Samples | Callee       | Location                                                                                     |
| -----: | ------: | ------------ | -------------------------------------------------------------------------------------------- |
| 100.0% |   5,703 | `foldl_impl` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:46` |
|  <0.1% |       2 | `foldl_impl` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:47` |

##### `#mapfoldl#271` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:173`)

|      % | Samples | Callee          | Location                                                                                     |
| -----: | ------: | --------------- | -------------------------------------------------------------------------------------------- |
| 100.0% |   5,703 | `mapfoldl_impl` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:42` |

##### `defaultminimum` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:12`)

|      % | Samples | Callee                                                                                                                       | Location                                                                                           |
| -----: | ------: | ---------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| 100.0% |   5,703 | `sum`                                                                                                                        | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:564`      |
|   1.1% |      60 | `isempty(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:1127` |

##### `mapfoldl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:173`)

|      % | Samples | Callee          | Location                                                                                      |
| -----: | ------: | --------------- | --------------------------------------------------------------------------------------------- |
| 100.0% |   5,703 | `#mapfoldl#271` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:173` |

##### `#mapreduce#275` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:306`)

|      % | Samples | Callee     | Location                                                                                      |
| -----: | ------: | ---------- | --------------------------------------------------------------------------------------------- |
| 100.0% |   5,703 | `mapfoldl` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:173` |

##### `mapreduce` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:306`)

|      % | Samples | Callee           | Location                                                                                      |
| -----: | ------: | ---------------- | --------------------------------------------------------------------------------------------- |
| 100.0% |   5,703 | `#mapreduce#275` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:306` |

##### `#sum#278` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:535`)

|      % | Samples | Callee      | Location                                                                                      |
| -----: | ------: | ----------- | --------------------------------------------------------------------------------------------- |
| 100.0% |   5,703 | `mapreduce` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:306` |

##### `sum` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:535`)

|      % | Samples | Callee     | Location                                                                                      |
| -----: | ------: | ---------- | --------------------------------------------------------------------------------------------- |
| 100.0% |   5,703 | `#sum#278` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:535` |

##### `#sum#279` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:564`)

|      % | Samples | Callee | Location                                                                                      |
| -----: | ------: | ------ | --------------------------------------------------------------------------------------------- |
| 100.0% |   5,703 | `sum`  | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:535` |

##### `sum` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:564`)

|      % | Samples | Callee     | Location                                                                                      |
| -----: | ------: | ---------- | --------------------------------------------------------------------------------------------- |
| 100.0% |   5,703 | `#sum#279` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:564` |

##### `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:56`)

|     % | Samples | Callee               | Location                                                                                         |
| ----: | ------: | -------------------- | ------------------------------------------------------------------------------------------------ |
| 99.9% |   5,697 | `MappingRF`          | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98`     |
|  0.1% |       3 | `[unknown function]` | `<unknown>`                                                                                      |
|  0.1% |       3 | `iterate`            | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/iterators.jl:697` |

##### `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` (`<unknown>`)

|     % | Samples | Callee                                                                                                                                    | Location                                                                                    |
| ----: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| 99.9% |   5,697 | `[unknown function]`                                                                                                                      | `<unknown>`                                                                                 |
|  0.1% |       7 | `defaultminimum`                                                                                                                          | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:6`                            |
|  0.1% |       7 | `defaultminimum(::JSON3.Array{Int64, Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:11`                           |
|  0.1% |       6 | `+(::UInt64, ::Int64)`                                                                                                                    | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:1054` |
|  0.1% |       5 | `defaultminimum(::Bool)`                                                                                                                  | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:4`                            |

##### `MappingRF` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98`)

|      % | Samples | Callee                                                                                                                                                                                  | Location                                                                                     |
| -----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| 100.0% |   5,698 | `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})`                                                                                                            | `<unknown>`                                                                                  |
|   0.5% |      28 | `BottomRF`                                                                                                                                                                              | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:83` |
|   0.1% |       7 | `BottomRF`                                                                                                                                                                              | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:84` |
|   0.1% |       6 | `(::JSON3.var\"#defaultminimum##0#defaultminimum##1\"{JSON3.Array{Int64, Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}}})(::Int64)` | `<unknown>`                                                                                  |

##### `#defaultminimum##0` (`<unknown>`)

|     % | Samples | Callee           | Location                                                                                                 |
| ----: | ------: | ---------------- | -------------------------------------------------------------------------------------------------------- |
| 89.7% |   5,095 | `defaultminimum` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:12`                                        |
|  8.6% |     491 | `isassigned`     | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:1641` |
|  5.2% |     295 | `getindex`       | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:163`                                       |
| <0.1% |       2 | `isassigned`     | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:1632` |
| <0.1% |       2 | `isassigned`     | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:1642` |

##### `getvalue` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:127`)

|     % | Samples | Callee                                                                                                                             | Location                                                                                    |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| 99.3% |   4,933 | `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40`                           |
|  0.6% |      32 | `setindex!(::Dict{Symbol, Int64}, ::Int64, ::Symbol)`                                                                              | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:356` |

##### `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40`)

|     % | Samples | Callee                                                     | Location                                                                                        |
| ----: | ------: | ---------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| 72.0% |   3,555 | `getvalue`                                                 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:187`                              |
| 23.7% |   1,170 | `setindex!(::Dict{Symbol, Int64}, ::Int64, ::Symbol)`      | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:356`     |
|  1.9% |      96 | `+`                                                        | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:87`       |
|  0.9% |      46 | `ht_keyindex2_shorthash!(::Dict{Symbol, Int64}, ::Symbol)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:267`     |
|  0.8% |      39 | `getindex`                                                 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/subarray.jl:334` |

##### `iterate` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:81`)

|     % | Samples | Callee     | Location                                                           |
| ----: | ------: | ---------- | ------------------------------------------------------------------ |
| 88.4% |   3,388 | `getvalue` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:214` |
|  5.8% |     224 | `getvalue` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:218` |
|  2.3% |      87 | `getvalue` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:215` |
|  1.7% |      66 | `getvalue` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:216` |
|  1.0% |      37 | `getvalue` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl`     |

##### `getvalue` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:214`)

|     % | Samples | Callee     | Location                                                           |
| ----: | ------: | ---------- | ------------------------------------------------------------------ |
| 98.3% |   3,329 | `getvalue` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:127` |
|  1.7% |      59 | `getvalue` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:126` |

##### `iterate` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:78`)

|     % | Samples | Callee     | Location                                                           |
| ----: | ------: | ---------- | ------------------------------------------------------------------ |
| 98.3% |   3,062 | `getvalue` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:187` |
|  1.7% |      52 | `getvalue` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl`     |
| <0.1% |       1 | `getvalue` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:184` |

##### `getindex` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:163`)

|     % | Samples | Callee     | Location                                                           |
| ----: | ------: | ---------- | ------------------------------------------------------------------ |
| 99.3% |   1,640 | `getvalue` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:127` |
|  0.7% |      12 | `getvalue` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:126` |

##### `var\"#read#6\"(::Bool, ::Nothing, ::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.read), ::String)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:30`)

|     % | Samples | Callee                                                                         | Location                                                                                    |
| ----: | ------: | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------- |
| 90.2% |   1,164 | `read!`                                                                        | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:87`                            |
|  9.4% |     121 | `Array`                                                                        | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:648` |
|  0.5% |       6 | `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, Vector{UInt64}})` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40`                           |

##### `read` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:30`)

|      % | Samples | Callee                                                                                                                     | Location                                                         |
| -----: | ------: | -------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| 100.0% |   1,291 | `var\"#read#6\"(::Bool, ::Nothing, ::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.read), ::String)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:30` |

##### `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:218`)

|      % | Samples | Callee                                                                                                                                                                      | Location                                                          |
| -----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| 100.0% |   1,164 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:87`  |
|  14.3% |     167 | `getbyte`                                                                                                                                                                   | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:8`  |
|   7.4% |      86 | `macro expansion`                                                                                                                                                           | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:29` |
|   5.5% |      64 | `string`                                                                                                                                                                    | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:88` |
|   5.5% |      64 | `macro expansion`                                                                                                                                                           | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:24` |

##### `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:218`)

|      % | Samples | Callee                                                                                                                                                                                                                           | Location                                                          |
| -----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| 100.0% |   1,164 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:218` |
|   0.5% |       6 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)`                                                      | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:87`  |

##### `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:87`)

|      % | Samples | Callee                                                                                                                                                                               | Location                                                                  |
| -----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------- |
| 100.0% |   1,164 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:218`         |
|  99.9% |   1,163 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Array}, ::Bool)`  | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:312`         |
|  22.9% |     266 | `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{String})`                                                                       | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:142`         |
|   3.2% |      37 | `typeparser(::Type{Float64}, ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Int16, ::Parsers.Options)`                                                                | `../profiler-md-julia-depot/packages/Parsers/05lwR/src/components.jl:392` |
|   2.1% |      25 | `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.False})`                                                                  | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:189`         |

##### `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:87`)

|      % | Samples | Callee                                                                                                                                                       | Location                                                                  |
| -----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------- |
| 100.0% |   1,164 | `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:87`          |
|   0.7% |       8 | `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{String})`                                               | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:142`         |
|   0.3% |       4 | `typeparser(::Type{Float64}, ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Int16, ::Parsers.Options)`                                        | `../profiler-md-julia-depot/packages/Parsers/05lwR/src/components.jl:392` |
|   0.2% |       2 | `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Nothing})`                                              | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:204`         |
|   0.2% |       2 | `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.False})`                                          | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:189`         |

##### `read!` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:87`)

|      % | Samples | Callee                                                                                                                                                       | Location                                                         |
| -----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------- |
| 100.0% |   1,164 | `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:87` |

##### `var\"#read!#9\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Array}, ::Bool)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:312`)

|      % | Samples | Callee                                                                                                                                                                      | Location                                                                                      |
| -----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| 100.0% |   1,163 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:87`                              |
|   0.3% |       3 | `setindex!`                                                                                                                                                                 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:1020` |
|   0.3% |       3 | `macro expansion`                                                                                                                                                           | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:29`                             |
|   0.2% |       2 | `macro expansion`                                                                                                                                                           | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:24`                             |
|   0.1% |       1 | `macro expansion`                                                                                                                                                           | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:23`                             |

##### `(::JSON3.var\"#defaultminimum##0#defaultminimum##1\"{JSON3.Array{Int64, Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}}})(::Int64)` (`<unknown>`)

|     % | Samples | Callee       | Location                                                                                                 |
| ----: | ------: | ------------ | -------------------------------------------------------------------------------------------------------- |
| 42.9% |       3 | `isassigned` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:1632` |
| 28.6% |       2 | `isassigned` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:1640` |
| 14.3% |       1 | `isassigned` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`      |

## Hottest call stacks

Call stacks with the most samples collected in their leaf frame.

Common call stack: `#write#58` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:40`) ← `[unknown function]` ← `parse_workload` (`./profile.jl:18`) ← `macro expansion` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/stdlib/v1.13/Profile/src/Profile.jl:82`) ← `capture_wall` (`./profile.jl:43`) ← `[unknown function]` ← `eval(::Module, ::Any)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:489`) ← `include_string(::typeof(identity), ::Module, ::String, ::String)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/loading.jl:2989`) ← `_include(::Function, ::Module, ::String)` (3083) ← `include(::Module, ::String)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base.jl:309`) ← `exec_options(::Base.JLOptions)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/client.jl:234`) ← `_start()` (570)

|    % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ---: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 9.5% |   2,858 | `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 5.2% |   1,563 | `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 4.3% |   1,274 | `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 2.9% |     861 | `indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64, ::Int64)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`) ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 2.7% |     798 | `_symbol` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:1`) ← `getvalue` (187) ← `iterate` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:78`) ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 2.3% |     700 | `_symbol` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:1`) ← `getvalue` (187) ← `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40`) ← `getvalue` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:127`) ← `getvalue` (214) ← `iterate` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:81`) ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 2.3% |     674 | `_symbol` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:1`) ← `getvalue` (187) ← `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40`) ← `getvalue` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:127`) ← `getvalue` (214) ← `iterate` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:81`) ← `iterate` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/iterators.jl:697`) ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:12`) ← `#defaultminimum##0` ← `[unknown function]` ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `[unknown function]` ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `MappingRF` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98`) ← `_foldl_impl` (56) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:12`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 1.8% |     540 | `_symbol` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:1`) ← `getvalue` (187) ← `iterate` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:78`) ← `iterate` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/iterators.jl:697`) ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `[unknown function]` ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `[unknown function]` ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:12`) ← `#defaultminimum##0` ← `[unknown function]` ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `[unknown function]` ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `MappingRF` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98`) ← `_foldl_impl` (56) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:12`)                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 1.6% |     481 | `indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64, ::Int64)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`) ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 1.3% |     392 | `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `[unknown function]` ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `[unknown function]` ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `[unknown function]` ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:12`) ← `#defaultminimum##0` ← `[unknown function]` ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `[unknown function]` ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `MappingRF` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98`) ← `_foldl_impl` (56) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:12`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 1.3% |     391 | `_symbol` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:1`) ← `getvalue` (187) ← `iterate` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:78`) ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 1.2% |     372 | `indexed_iterate` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`) ← `indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64)` (163) ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 1.2% |     348 | `_symbol` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:1`) ← `getvalue` (187) ← `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40`) ← `getvalue` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:127`) ← `getvalue` (214) ← `iterate` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:81`) ← `iterate` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/iterators.jl:697`) ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `[unknown function]` ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `[unknown function]` ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:12`) ← `#defaultminimum##0` ← `[unknown function]` ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `[unknown function]` ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `MappingRF` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98`) ← `_foldl_impl` (56) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:12`)                                                                                                                                    |
| 1.2% |     347 | `_symbol` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:1`) ← `getvalue` (187) ← `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40`) ← `getvalue` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:127`) ← `getvalue` (214) ← `iterate` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:81`) ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 1.1% |     331 | `_symbol` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:1`) ← `getvalue` (187) ← `iterate` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:78`) ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 1.1% |     327 | `indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64, ::Int64)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`) ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 1.0% |     299 | `_symbol` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:1`) ← `getvalue` (187) ← `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40`) ← `getvalue` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:127`) ← `getindex` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:163`) ← `isassigned` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:1641`) ← `#write#81` ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 1.0% |     293 | `_symbol` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:1`) ← `getvalue` (187) ← `iterate` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:78`) ← `iterate` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/iterators.jl:697`) ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `[unknown function]` ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `[unknown function]` ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `[unknown function]` ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `[unknown function]` ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:12`) ← `#defaultminimum##0` ← `[unknown function]` ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `[unknown function]` ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `MappingRF` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98`) ← `_foldl_impl` (56) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:12`) |
| 1.0% |     289 | `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 1.0% |     288 | `_symbol` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:1`) ← `getvalue` (187) ← `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40`) ← `getvalue` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:127`) ← `getindex` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:163`) ← `isassigned` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:1641`) ← `#defaultminimum##0` ← `[unknown function]` ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `[unknown function]` ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `MappingRF` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98`) ← `_foldl_impl` (56) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:12`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |

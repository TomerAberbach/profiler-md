# Sampling profile

Collected 30,400 samples.

| Category         |     % | Samples |
| ---------------- | ----: | ------: |
| Third-party      | 45.6% |  13,849 |
| Standard library | 25.8% |   7,829 |
| Unknown          | 24.5% |   7,435 |
| Native           |  4.0% |   1,230 |
| Ours             |  0.2% |      57 |

Paths starting with `./` or `../` are relative to `/tmp/profiler-md-julia-project/`.

`…` stands for omitted frames.

## Call tree

Call paths to the hottest functions.

```
├── … 22,956 samples (75.5%, self 0.7%) [unknown function]
│   ├── … 14,513 samples (47.7%, self 20.9%) #write#79 at ../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157
│   │   ├── 1,866 samples (6.1%) indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64, ::Int64) at /nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163
│   │   ├── 1,651 samples (5.4%) iterate at ../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:81
│   │   │   ├── … 1,434 samples (4.7%) populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}}) at ../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40
│   │   │   │   ├── 325 samples (1.1%) setindex!(::Dict{Symbol, Int64}, ::Int64, ::Symbol) at /nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:356
│   │   │   │   │   └── 255 samples (0.8%, self 0.6%, self 1.5% globally) ht_keyindex2_shorthash!(::Dict{Symbol, Int64}, ::Symbol) at 267
│   │   │   │   └── 1,105 samples (3.6%) 6 more callees, led by (3.4%) getvalue at ../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:187
│   │   │   └── … 38 samples (0.1%) unsafe_string at /nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:126
│   │   ├── … 1,532 samples (5.0%, self 20.4% globally) _symbol at ../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:1
│   │   ├── 1,110 samples (3.7%) write(::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String) at 340
│   │   │   └── 1,080 samples (3.6%) var\"#write#98\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String) at 340
│   │   │       ├── … 635 samples (2.1%, self 3.1% globally) GenericMemory at /nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:588
│   │   │       ├── … 97 samples (0.3%) getindex at /nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:975
│   │   │       └── … 73 samples (0.2%) _setindex! at /nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:1025
│   │   ├── 800 samples (2.6%) indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64) at /nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163
│   │   │   └── 791 samples (2.6%, self 4.1% globally) indexed_iterate at 163
│   │   ├── 402 samples (1.3%) iterate at ../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:75
│   │   │   └── 148 samples (0.5%) iterate at 81
│   │   └── 791 samples (2.6%) 16 more callees, led by (1.5%) indexed_iterate at /nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163
│   ├── … 2,182 samples (7.2%) #defaultminimum##0
│   │   └── 2,177 samples (7.2%) 5 more callees, led by (4.7%) defaultminimum at ../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:12
│   ├── … 1,873 samples (6.2%, self 0.6%) _foldl_impl at /nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60
│   │   ├── 1,475 samples (4.9%) iterate at /nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/iterators.jl:697
│   │   │   └── 1,475 samples (4.9%) 6 more callees, led by (2.9%) iterate at ../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:78
│   │   └── 121 samples (0.4%) iterate at ../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:75
│   ├── … 1,660 samples (5.5%) parse_workload at ./profile.jl:18
│   │   ├── … 1,149 samples (3.8%) var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool) at ../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:87
│   │   │   ├── … 694 samples (2.3%) kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool) at ../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:218
│   │   │   │   └── 686 samples (2.3%, self 0.5%) var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool) at 218
│   │   │   │       ├── … 190 samples (0.6%, self 1.6% globally) unsafe_load at /nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/pointer.jl:151
│   │   │   │       ├── 50 samples (0.2%) macro expansion at ../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:24
│   │   │   │       │   └── 50 samples (0.2%, self 1.0% globally) + at /nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:87
│   │   │   │       └── 279 samples (0.9%) 18 more callees, led by (0.3%) macro expansion at ../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:29
│   │   │   └── … 259 samples (0.9%) read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{String}) at ../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:142
│   │   └── 406 samples (1.3%) length(::String) at /nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:540 …
│   ├── … 911 samples (3.0%, self 2.9%) (::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})
│   ├── … 285 samples (0.9%) BottomRF at /nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:84
│   └── 1,305 samples (4.3%) 9 more callees, led by (3.0%) #write#81 at /nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl
└── 7,435 samples (24.5%) (anonymous)
```

## Hottest functions

### Self samples

Functions with the most samples collected within the function body, excluding callees.

|     % | Samples | Function                                                                                                                                                                                                                         | Location                                                                                              |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| 24.5% |   7,435 | `(anonymous)`                                                                                                                                                                                                                    | `<unknown>`                                                                                           |
| 20.9% |   6,363 | `#write#79`                                                                                                                                                                                                                      | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`                                    |
| 20.4% |   6,216 | `_symbol`                                                                                                                                                                                                                        | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:1`                                      |
|  6.1% |   1,866 | `indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64, ::Int64)`                                                                                                                                                        | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`          |
|  4.1% |   1,251 | `indexed_iterate`                                                                                                                                                                                                                | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`          |
|  3.3% |   1,007 | `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})`                                                                                                                                                     | `<unknown>`                                                                                           |
|  3.1% |     934 | `GenericMemory`                                                                                                                                                                                                                  | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:588`           |
|  1.6% |     496 | `unsafe_load`                                                                                                                                                                                                                    | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/pointer.jl:151`        |
|  1.5% |     470 | `ht_keyindex2_shorthash!(::Dict{Symbol, Int64}, ::Symbol)`                                                                                                                                                                       | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:267`           |
|  1.0% |     296 | `+`                                                                                                                                                                                                                              | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:87`             |
|  0.9% |     286 | `BottomRF`                                                                                                                                                                                                                       | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:84`          |
|  0.8% |     236 | `iterate`                                                                                                                                                                                                                        | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:75`                                     |
|  0.8% |     228 | `_foldl_impl`                                                                                                                                                                                                                    | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`          |
|  0.7% |     218 | `[unknown function]`                                                                                                                                                                                                             | `<unknown>`                                                                                           |
|  0.6% |     184 | `_setindex!`                                                                                                                                                                                                                     | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:1025`         |
|  0.6% |     169 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:218`                                     |
|  0.5% |     161 | `unsafe_string`                                                                                                                                                                                                                  | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:130` |
|  0.5% |     153 | `getindex`                                                                                                                                                                                                                       | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:975`     |
|  0.5% |     140 | `#write#81`                                                                                                                                                                                                                      | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:73`                                     |
|  0.4% |     131 | `checkbounds`                                                                                                                                                                                                                    | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/basic.jl:212`  |

#### Categories

Categories accounting for at least 1.0% of self samples.

##### Third-party

|     % | Samples | Function                                                                                                                                                                                                                         | Location                                                           |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| 20.9% |   6,363 | `#write#79`                                                                                                                                                                                                                      | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157` |
| 20.4% |   6,216 | `_symbol`                                                                                                                                                                                                                        | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:1`   |
|  0.8% |     236 | `iterate`                                                                                                                                                                                                                        | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:75`  |
|  0.6% |     169 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:218`  |
|  0.5% |     140 | `#write#81`                                                                                                                                                                                                                      | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:73`  |
|  0.4% |     117 | `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{String})`                                                                                                                   | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:142`  |
|  0.2% |      75 | `getvalue`                                                                                                                                                                                                                       | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:215` |
|  0.2% |      73 | `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)`                                                                     | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:87`   |
|  0.2% |      52 | `var\"#write#98\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)`                                                          | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:340` |
|  0.2% |      46 | `iterate`                                                                                                                                                                                                                        | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl`     |
|  0.1% |      31 | `getvalue`                                                                                                                                                                                                                       | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl`     |
|  0.1% |      28 | `write(::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)`                                                                                                                                                   | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:340` |
|  0.1% |      25 | `write(::StructTypes.BoolType, ::Vector{UInt8}, ::Int64, ::Int64, ::Bool)`                                                                                                                                                       | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:209` |
|  0.1% |      25 | `var\"#write#84\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.BoolType, ::Vector{UInt8}, ::Int64, ::Int64, ::Bool)`                                                              | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:209` |
|  0.1% |      22 | `macro expansion`                                                                                                                                                                                                                | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:14`  |
|  0.1% |      22 | `getvalue`                                                                                                                                                                                                                       | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:213` |
|  0.1% |      20 | `macro expansion`                                                                                                                                                                                                                | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:23`  |
|  0.1% |      18 | `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})`                                                                                               | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40`  |
|  0.1% |      18 | `var\"#write#86\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.NumberType, ::Vector{UInt8}, ::Int64, ::Int64, ::Int64)`                                                           | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:224` |
|  0.1% |      18 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)`                                                      | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:87`   |

##### Standard library

|    % | Samples | Function                                                                  | Location                                                                                              |
| ---: | ------: | ------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| 6.1% |   1,866 | `indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64, ::Int64)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`          |
| 4.1% |   1,251 | `indexed_iterate`                                                         | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`          |
| 3.1% |     934 | `GenericMemory`                                                           | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:588`           |
| 1.6% |     496 | `unsafe_load`                                                             | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/pointer.jl:151`        |
| 1.5% |     470 | `ht_keyindex2_shorthash!(::Dict{Symbol, Int64}, ::Symbol)`                | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:267`           |
| 1.0% |     296 | `+`                                                                       | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:87`             |
| 0.9% |     286 | `BottomRF`                                                                | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:84`          |
| 0.8% |     228 | `_foldl_impl`                                                             | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`          |
| 0.6% |     184 | `_setindex!`                                                              | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:1025`         |
| 0.5% |     161 | `unsafe_string`                                                           | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:130` |
| 0.5% |     153 | `getindex`                                                                | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:975`     |
| 0.4% |     131 | `checkbounds`                                                             | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/basic.jl:212`  |
| 0.4% |     128 | `Dict`                                                                    | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:80`            |
| 0.4% |     107 | `length_continued`                                                        | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/pointer.jl`            |
| 0.3% |     102 | `\|`                                                                      | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:418`            |
| 0.2% |      75 | `unsafe_string`                                                           | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:126` |
| 0.2% |      75 | `getproperty`                                                             | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base_compiler.jl:57`   |
| 0.2% |      73 | `&`                                                                       | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:393`            |
| 0.2% |      68 | `#write#81`                                                               | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`   |
| 0.2% |      68 | `==`                                                                      | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/promotion.jl:641`      |

##### Unknown

|     % | Samples | Function      | Location    |
| ----: | ------: | ------------- | ----------- |
| 24.5% |   7,435 | `(anonymous)` | `<unknown>` |

##### Native

|     % | Samples | Function                                                                     | Location    |
| ----: | ------: | ---------------------------------------------------------------------------- | ----------- |
|  3.3% |   1,007 | `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` | `<unknown>` |
|  0.7% |     218 | `[unknown function]`                                                         | `<unknown>` |
| <0.1% |       5 | `#defaultminimum##0`                                                         | `<unknown>` |

#### Lines

Lines with the largest contribution to each function's self samples.

##### `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`)

|     % | Samples | Location                                                           |
| ----: | ------: | ------------------------------------------------------------------ |
| 60.7% |   3,865 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157` |
| 20.4% |   1,300 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:60`  |
|  7.8% |     498 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:73`  |
|  4.4% |     283 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:72`  |
|  4.2% |     267 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:155` |

##### `_symbol` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:1`)

|      % | Samples | Location                                                         |
| -----: | ------: | ---------------------------------------------------------------- |
| 100.0% |   6,216 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:1` |

##### `indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64, ::Int64)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`)

|      % | Samples | Location                                                                                     |
| -----: | ------: | -------------------------------------------------------------------------------------------- |
| 100.0% |   1,866 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163` |

##### `indexed_iterate` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`)

|      % | Samples | Location                                                                                     |
| -----: | ------: | -------------------------------------------------------------------------------------------- |
| 100.0% |   1,251 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163` |

##### `GenericMemory` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:588`)

|      % | Samples | Location                                                                                    |
| -----: | ------: | ------------------------------------------------------------------------------------------- |
| 100.0% |     934 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:588` |

##### `unsafe_load` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/pointer.jl:151`)

|      % | Samples | Location                                                                                       |
| -----: | ------: | ---------------------------------------------------------------------------------------------- |
| 100.0% |     496 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/pointer.jl:151` |

##### `ht_keyindex2_shorthash!(::Dict{Symbol, Int64}, ::Symbol)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:267`)

|     % | Samples | Location                                                                                    |
| ----: | ------: | ------------------------------------------------------------------------------------------- |
| 55.7% |     262 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:291` |
| 20.6% |      97 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:282` |
|  4.9% |      23 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:281` |
|  1.9% |       9 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:303` |
|  1.3% |       6 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:267` |

##### `+` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:87`)

|      % | Samples | Location                                                                                  |
| -----: | ------: | ----------------------------------------------------------------------------------------- |
| 100.0% |     296 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:87` |

##### `BottomRF` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:84`)

|      % | Samples | Location                                                                                     |
| -----: | ------: | -------------------------------------------------------------------------------------------- |
| 100.0% |     286 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:84` |

##### `iterate` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:75`)

|      % | Samples | Location                                                          |
| -----: | ------: | ----------------------------------------------------------------- |
| 100.0% |     236 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:75` |

##### `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`)

|     % | Samples | Location                                                                                     |
| ----: | ------: | -------------------------------------------------------------------------------------------- |
| 89.5% |     204 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60` |
|  2.6% |       6 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:56` |
|  2.2% |       5 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:51` |

##### `[unknown function]` (`<unknown>`)

|     % | Samples | Location |
| ----: | ------: | -------- |
| 57.3% |     125 | 147      |
| 36.7% |      80 | 98       |
|  1.8% |       4 | 11       |
|  1.4% |       3 | 181      |
|  0.9% |       2 | 405      |

##### `_setindex!` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:1025`)

|      % | Samples | Location                                                                                      |
| -----: | ------: | --------------------------------------------------------------------------------------------- |
| 100.0% |     184 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:1025` |

##### `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:218`)

|     % | Samples | Location                                                          |
| ----: | ------: | ----------------------------------------------------------------- |
| 71.0% |     120 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:248` |
|  8.3% |      14 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:298` |
|  5.9% |      10 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:247` |
|  4.7% |       8 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:278` |
|  4.1% |       7 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:268` |

##### `unsafe_string` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:130`)

|      % | Samples | Location                                                                                              |
| -----: | ------: | ----------------------------------------------------------------------------------------------------- |
| 100.0% |     161 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:130` |

##### `getindex` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:975`)

|      % | Samples | Location                                                                                          |
| -----: | ------: | ------------------------------------------------------------------------------------------------- |
| 100.0% |     153 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:975` |

##### `#write#81` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:73`)

|     % | Samples | Location                                                           |
| ----: | ------: | ------------------------------------------------------------------ |
| 44.3% |      62 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:200` |
| 40.0% |      56 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:60`  |
|  6.4% |       9 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:73`  |
|  5.0% |       7 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:72`  |
|  3.6% |       5 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:181` |

##### `checkbounds` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/basic.jl:212`)

|      % | Samples | Location                                                                                             |
| -----: | ------: | ---------------------------------------------------------------------------------------------------- |
| 100.0% |     131 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/basic.jl:212` |

##### `Dict` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:80`)

|      % | Samples | Location                                                                                   |
| -----: | ------: | ------------------------------------------------------------------------------------------ |
| 100.0% |     128 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:80` |

##### `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{String})` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:142`)

|     % | Samples | Location                                                          |
| ----: | ------: | ----------------------------------------------------------------- |
| 57.3% |      67 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:155` |
|  3.4% |       4 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:167` |
|  3.4% |       4 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:142` |
|  0.9% |       1 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:149` |

##### `|` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:418`)

|      % | Samples | Location                                                                                   |
| -----: | ------: | ------------------------------------------------------------------------------------------ |
| 100.0% |     102 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:418` |

##### `getvalue` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:215`)

|      % | Samples | Location                                                           |
| -----: | ------: | ------------------------------------------------------------------ |
| 100.0% |      75 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:215` |

##### `unsafe_string` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:126`)

|      % | Samples | Location                                                                                              |
| -----: | ------: | ----------------------------------------------------------------------------------------------------- |
| 100.0% |      75 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:126` |

##### `getproperty` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base_compiler.jl:57`)

|      % | Samples | Location                                                                                            |
| -----: | ------: | --------------------------------------------------------------------------------------------------- |
| 100.0% |      75 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base_compiler.jl:57` |

##### `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:87`)

|     % | Samples | Location                                                         |
| ----: | ------: | ---------------------------------------------------------------- |
| 34.2% |      25 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:88` |
| 28.8% |      21 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:87` |
|  4.1% |       3 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:93` |
|  4.1% |       3 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:89` |
|  1.4% |       1 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:99` |

##### `&` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:393`)

|      % | Samples | Location                                                                                   |
| -----: | ------: | ------------------------------------------------------------------------------------------ |
| 100.0% |      73 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:393` |

##### `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`)

|     % | Samples | Location                                                                                                |
| ----: | ------: | ------------------------------------------------------------------------------------------------------- |
| 23.5% |      16 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:60`  |
| 20.6% |      14 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:200` |
| 13.2% |       9 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:187` |
|  8.8% |       6 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:181` |
|  5.9% |       4 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:72`  |

##### `==` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/promotion.jl:641`)

|      % | Samples | Location                                                                                         |
| -----: | ------: | ------------------------------------------------------------------------------------------------ |
| 100.0% |      68 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/promotion.jl:641` |

##### `var\"#write#98\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:340`)

|     % | Samples | Location                                                           |
| ----: | ------: | ------------------------------------------------------------------ |
| 42.3% |      22 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:360` |
| 23.1% |      12 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:60`  |
| 19.2% |      10 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:340` |
|  1.9% |       1 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:351` |

##### `write(::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:340`)

|      % | Samples | Location                                                           |
| -----: | ------: | ------------------------------------------------------------------ |
| 100.0% |      28 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:340` |

##### `write(::StructTypes.BoolType, ::Vector{UInt8}, ::Int64, ::Int64, ::Bool)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:209`)

|      % | Samples | Location                                                           |
| -----: | ------: | ------------------------------------------------------------------ |
| 100.0% |      25 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:209` |

##### `var\"#write#84\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.BoolType, ::Vector{UInt8}, ::Int64, ::Int64, ::Bool)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:209`)

|     % | Samples | Location                                                           |
| ----: | ------: | ------------------------------------------------------------------ |
| 56.0% |      14 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:215` |
| 40.0% |      10 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:209` |
|  4.0% |       1 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:60`  |

##### `macro expansion` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:14`)

|      % | Samples | Location                                                          |
| -----: | ------: | ----------------------------------------------------------------- |
| 100.0% |      22 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:14` |

##### `getvalue` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:213`)

|      % | Samples | Location                                                           |
| -----: | ------: | ------------------------------------------------------------------ |
| 100.0% |      22 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:213` |

##### `macro expansion` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:23`)

|      % | Samples | Location                                                          |
| -----: | ------: | ----------------------------------------------------------------- |
| 100.0% |      20 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:23` |

##### `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40`)

|     % | Samples | Location                                                          |
| ----: | ------: | ----------------------------------------------------------------- |
| 33.3% |       6 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:47` |
| 16.7% |       3 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:55` |
| 11.1% |       2 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40` |

##### `var\"#write#86\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.NumberType, ::Vector{UInt8}, ::Int64, ::Int64, ::Int64)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:224`)

|     % | Samples | Location                                                           |
| ----: | ------: | ------------------------------------------------------------------ |
| 94.4% |      17 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:236` |
|  5.6% |       1 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:224` |

##### `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:87`)

|      % | Samples | Location                                                         |
| -----: | ------: | ---------------------------------------------------------------- |
| 100.0% |      18 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:87` |

#### Callers

Callers with the largest contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`)

|     % | Samples | Caller               | Location                                                                                            |
| ----: | ------: | -------------------- | --------------------------------------------------------------------------------------------------- |
| 99.7% |   6,346 | `[unknown function]` | `<unknown>`                                                                                         |
|  0.1% |       9 | `#write#79`          | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`                                  |
|  0.1% |       7 | `write`              | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:147`                                  |
| <0.1% |       1 | `#write#81`          | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl` |

##### `_symbol` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:1`)

|      % | Samples | Caller     | Location                                                           |
| -----: | ------: | ---------- | ------------------------------------------------------------------ |
| 100.0% |   6,216 | `getvalue` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:187` |

##### `indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64, ::Int64)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`)

|      % | Samples | Caller      | Location                                                           |
| -----: | ------: | ----------- | ------------------------------------------------------------------ |
| 100.0% |   1,866 | `#write#79` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157` |

##### `indexed_iterate` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`)

|     % | Samples | Caller                                                           | Location                                                                                            |
| ----: | ------: | ---------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| 63.2% |     791 | `indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`        |
| 29.3% |     367 | `#write#79`                                                      | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`                                  |
|  6.7% |      84 | `indexed_iterate`                                                | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`        |
|  0.7% |       9 | `#write#81`                                                      | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl` |

##### `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` (`<unknown>`)

|     % | Samples | Caller               | Location                                                                                     |
| ----: | ------: | -------------------- | -------------------------------------------------------------------------------------------- |
| 87.5% |     881 | `[unknown function]` | `<unknown>`                                                                                  |
| 12.2% |     123 | `MappingRF`          | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98` |
|  0.3% |       3 | `_foldl_impl`        | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60` |

##### `GenericMemory` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:588`)

|     % | Samples | Caller                                    | Location                                                                                      |
| ----: | ------: | ----------------------------------------- | --------------------------------------------------------------------------------------------- |
| 73.4% |     686 | `Array`                                   | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:648`   |
| 26.2% |     245 | `rehash!(::Dict{Symbol, Int64}, ::Int64)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:138`   |
|  0.3% |       3 | `array_new_memory`                        | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:1101` |

##### `unsafe_load` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/pointer.jl:151`)

|      % | Samples | Caller        | Location                                                                                       |
| -----: | ------: | ------------- | ---------------------------------------------------------------------------------------------- |
| 100.0% |     496 | `unsafe_load` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/pointer.jl:151` |

##### `ht_keyindex2_shorthash!(::Dict{Symbol, Int64}, ::Symbol)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:267`)

|     % | Samples | Caller                                                                                                                             | Location                                                                                    |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| 87.7% |     412 | `setindex!(::Dict{Symbol, Int64}, ::Int64, ::Symbol)`                                                                              | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:356` |
| 12.3% |      58 | `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40`                           |

##### `+` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:87`)

|     % | Samples | Caller                                                                                                                                                                                                                           | Location                                                                                              |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| 34.5% |     102 | `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})`                                                                                               | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40`                                     |
| 18.9% |      56 | `macro expansion`                                                                                                                                                                                                                | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:24`                                     |
| 13.9% |      41 | `length_continued`                                                                                                                                                                                                               | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:559` |
|  8.4% |      25 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:218`                                     |
|  5.1% |      15 | `length_continued`                                                                                                                                                                                                               | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:568` |

##### `BottomRF` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:84`)

|     % | Samples | Caller               | Location                                                                                     |
| ----: | ------: | -------------------- | -------------------------------------------------------------------------------------------- |
| 99.7% |     285 | `[unknown function]` | `<unknown>`                                                                                  |
|  0.3% |       1 | `MappingRF`          | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98` |

##### `iterate` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:75`)

|     % | Samples | Caller                                                                                                                       | Location                                                                                           |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| 43.2% |     102 | `iterate`                                                                                                                    | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/iterators.jl:697`   |
| 33.1% |      78 | `#write#79`                                                                                                                  | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`                                 |
| 22.9% |      54 | `iterate`                                                                                                                    | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:75`                                  |
|  0.8% |       2 | `isempty(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:1127` |

##### `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`)

|     % | Samples | Caller                                                                       | Location                                                                                     |
| ----: | ------: | ---------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| 99.1% |     226 | `foldl_impl`                                                                 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:46` |
|  0.9% |       2 | `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` | `<unknown>`                                                                                  |

##### `[unknown function]` (`<unknown>`)

|     % | Samples | Caller                                                                       | Location                                                                                            |
| ----: | ------: | ---------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| 47.7% |     104 | `#write#79`                                                                  | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`                                  |
| 36.7% |      80 | `_foldl_impl`                                                                | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`        |
| 11.5% |      25 | `#write#81`                                                                  | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl` |
|  2.8% |       6 | `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` | `<unknown>`                                                                                         |
|  0.9% |       2 | `BottomRF`                                                                   | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:83`        |

##### `_setindex!` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:1025`)

|     % | Samples | Caller               | Location                                                                                      |
| ----: | ------: | -------------------- | --------------------------------------------------------------------------------------------- |
| 96.2% |     177 | `setindex!`          | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:1020` |
|  3.8% |       7 | `[unknown function]` | `<unknown>`                                                                                   |

##### `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:218`)

|     % | Samples | Caller                                                                                                                                                                               | Location                                                          |
| ----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------- |
| 98.8% |     167 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:218` |
|  1.2% |       2 | `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)`                         | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:87`  |

##### `unsafe_string` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:130`)

|      % | Samples | Caller   | Location                                                                                              |
| -----: | ------: | -------- | ----------------------------------------------------------------------------------------------------- |
| 100.0% |     161 | `String` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:145` |

##### `getindex` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:975`)

|     % | Samples | Caller                                                                                                                                                                                                                           | Location                                                                                        |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| 63.4% |      97 | `macro expansion`                                                                                                                                                                                                                | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:332`                              |
| 23.5% |      36 | `getindex`                                                                                                                                                                                                                       | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/subarray.jl:334` |
|  7.8% |      12 | `var\"#write#98\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)`                                                          | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:340`                              |
|  3.3% |       5 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:218`                               |
|  1.3% |       2 | `getindex`                                                                                                                                                                                                                       | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:161`                              |

##### `#write#81` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:73`)

|     % | Samples | Caller               | Location                                                           |
| ----: | ------: | -------------------- | ------------------------------------------------------------------ |
| 97.9% |     137 | `[unknown function]` | `<unknown>`                                                        |
|  2.1% |       3 | `#write#79`          | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157` |

##### `checkbounds` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/basic.jl:212`)

|      % | Samples | Caller     | Location                                                                                              |
| -----: | ------: | ---------- | ----------------------------------------------------------------------------------------------------- |
| 100.0% |     131 | `codeunit` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:166` |

##### `Dict` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:80`)

|      % | Samples | Caller     | Location                                                           |
| -----: | ------: | ---------- | ------------------------------------------------------------------ |
| 100.0% |     128 | `getvalue` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:126` |

##### `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{String})` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:142`)

|     % | Samples | Caller                                                                                                                                                                      | Location                                                         |
| ----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| 95.7% |     112 | `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)`                | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:87` |
|  4.3% |       5 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:87` |

##### `length_continued` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/pointer.jl`)

|      % | Samples | Caller             | Location                                                                                              |
| -----: | ------: | ------------------ | ----------------------------------------------------------------------------------------------------- |
| 100.0% |     107 | `length(::String)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:540` |

##### `|` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:418`)

|     % | Samples | Caller          | Location                                                                                    |
| ----: | ------: | --------------- | ------------------------------------------------------------------------------------------- |
| 95.1% |      97 | `string`        | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:88`                           |
|  2.0% |       2 | `parsefrac`     | `../profiler-md-julia-depot/packages/Parsers/05lwR/src/floats.jl:496`                       |
|  2.0% |       2 | `promoteeltype` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:96`                           |
|  1.0% |       1 | `\|`            | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:1058` |

##### `getvalue` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:215`)

|      % | Samples | Caller    | Location                                                          |
| -----: | ------: | --------- | ----------------------------------------------------------------- |
| 100.0% |      75 | `iterate` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:81` |

##### `unsafe_string` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:126`)

|      % | Samples | Caller     | Location                                                           |
| -----: | ------: | ---------- | ------------------------------------------------------------------ |
| 100.0% |      75 | `getvalue` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:195` |

##### `getproperty` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base_compiler.jl:57`)

|     % | Samples | Caller                                                     | Location                                                                                        |
| ----: | ------: | ---------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| 56.0% |      42 | `_setindex!`                                               | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:331`     |
| 12.0% |       9 | `ht_keyindex2_shorthash!(::Dict{Symbol, Int64}, ::Symbol)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:267`     |
|  9.3% |       7 | `_setindex!`                                               | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:327`     |
|  8.0% |       6 | `_setindex!`                                               | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:325`     |
|  4.0% |       3 | `getindex`                                                 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/subarray.jl:334` |

##### `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:87`)

|     % | Samples | Caller                                                                                                                                                                                                                           | Location                                                          |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| 76.7% |      56 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)`                                                      | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:87`  |
| 21.9% |      16 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:218` |
|  1.4% |       1 | `var\"#read!#9\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Array}, ::Bool)`  | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:312` |

##### `&` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:393`)

|     % | Samples | Caller                                                     | Location                                                                                    |
| ----: | ------: | ---------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| 69.9% |      51 | `getnontypemask`                                           | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:114`                          |
| 28.8% |      21 | `ht_keyindex2_shorthash!(::Dict{Symbol, Int64}, ::Symbol)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:267` |
|  1.4% |       1 | `getproperty`                                              | `../profiler-md-julia-depot/packages/Parsers/05lwR/src/utils.jl:467`                        |

##### `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`)

|      % | Samples | Caller               | Location    |
| -----: | ------: | -------------------- | ----------- |
| 100.0% |      68 | `[unknown function]` | `<unknown>` |

##### `==` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/promotion.jl:641`)

|     % | Samples | Caller                                                                                                         | Location                                                                                         |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 69.1% |      47 | `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{String})` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:142`                                |
| 16.2% |      11 | `ht_keyindex2_shorthash!(::Dict{Symbol, Int64}, ::Symbol)`                                                     | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:267`      |
|  8.8% |       6 | `isarray`                                                                                                      | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:61`                                |
|  2.9% |       2 | `!=`                                                                                                           | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/operators.jl:320` |
|  1.5% |       1 | `promoteeltype`                                                                                                | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:100`                               |

##### `var\"#write#98\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:340`)

|     % | Samples | Caller                                                                         | Location                                                           |
| ----: | ------: | ------------------------------------------------------------------------------ | ------------------------------------------------------------------ |
| 57.7% |      30 | `write(::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:340` |
| 42.3% |      22 | `#write#79`                                                                    | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157` |

##### `iterate` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl`)

|     % | Samples | Caller      | Location                                                                                         |
| ----: | ------: | ----------- | ------------------------------------------------------------------------------------------------ |
| 37.0% |      17 | `#write#79` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`                               |
| 37.0% |      17 | `iterate`   | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:75`                                |
| 26.1% |      12 | `iterate`   | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/iterators.jl:697` |

##### `getvalue` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl`)

|     % | Samples | Caller    | Location                                                          |
| ----: | ------: | --------- | ----------------------------------------------------------------- |
| 83.9% |      26 | `iterate` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:81` |
| 16.1% |       5 | `iterate` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:78` |

##### `write(::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:340`)

|      % | Samples | Caller      | Location                                                           |
| -----: | ------: | ----------- | ------------------------------------------------------------------ |
| 100.0% |      28 | `#write#79` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157` |

##### `write(::StructTypes.BoolType, ::Vector{UInt8}, ::Int64, ::Int64, ::Bool)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:209`)

|      % | Samples | Caller      | Location                                                           |
| -----: | ------: | ----------- | ------------------------------------------------------------------ |
| 100.0% |      25 | `#write#79` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157` |

##### `var\"#write#84\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.BoolType, ::Vector{UInt8}, ::Int64, ::Int64, ::Bool)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:209`)

|     % | Samples | Caller                                                                     | Location                                                           |
| ----: | ------: | -------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| 52.0% |      13 | `write(::StructTypes.BoolType, ::Vector{UInt8}, ::Int64, ::Int64, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:209` |
| 48.0% |      12 | `#write#79`                                                                | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157` |

##### `macro expansion` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:14`)

|     % | Samples | Caller                                                                                                                                                                                                                           | Location                                                          |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| 86.4% |      19 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:218` |
| 13.6% |       3 | `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{String})`                                                                                                                   | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:142` |

##### `getvalue` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:213`)

|      % | Samples | Caller    | Location                                                          |
| -----: | ------: | --------- | ----------------------------------------------------------------- |
| 100.0% |      22 | `iterate` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:81` |

##### `macro expansion` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:23`)

|     % | Samples | Caller                                                                                                                                                                                                                           | Location                                                          |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| 95.0% |      19 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:218` |
|  5.0% |       1 | `var\"#read!#9\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Array}, ::Bool)`  | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:312` |

##### `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40`)

|     % | Samples | Caller               | Location                                                           |
| ----: | ------: | -------------------- | ------------------------------------------------------------------ |
| 83.3% |      15 | `getvalue`           | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:127` |
| 16.7% |       3 | `[unknown function]` | `<unknown>`                                                        |

##### `var\"#write#86\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.NumberType, ::Vector{UInt8}, ::Int64, ::Int64, ::Int64)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:224`)

|     % | Samples | Caller                                                                        | Location                                                           |
| ----: | ------: | ----------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| 77.8% |      14 | `write(::StructTypes.NumberType, ::Vector{UInt8}, ::Int64, ::Int64, ::Int64)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:224` |
| 22.2% |       4 | `#write#79`                                                                   | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157` |

##### `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:87`)

|     % | Samples | Caller                                                                                                                                                                                                                           | Location                                                          |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| 55.6% |      10 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:218` |
| 44.4% |       8 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)`                                             | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:218` |

##### `#defaultminimum##0` (`<unknown>`)

|      % | Samples | Caller               | Location    |
| -----: | ------: | -------------------- | ----------- |
| 100.0% |       5 | `[unknown function]` | `<unknown>` |

### Total samples

Functions with the most samples collected within the function and its callees.

|     % | Samples | Function                                                           | Location                                                                                                          |
| ----: | ------: | ------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| 75.5% |  22,956 | `[unknown function]`                                               | `<unknown>`                                                                                                       |
| 75.5% |  22,956 | `macro expansion`                                                  | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/stdlib/v1.13/Profile/src/Profile.jl:60` |
| 75.5% |  22,956 | `capture_cpu`                                                      | `./profile.jl:29`                                                                                                 |
| 75.5% |  22,956 | `eval(::Module, ::Any)`                                            | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:489`                       |
| 75.5% |  22,956 | `include_string(::typeof(identity), ::Module, ::String, ::String)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/loading.jl:2989`                   |
| 75.5% |  22,956 | `_include(::Function, ::Module, ::String)`                         | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/loading.jl:3083`                   |
| 75.5% |  22,956 | `include(::Module, ::String)`                                      | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base.jl:309`                       |
| 75.5% |  22,956 | `exec_options(::Base.JLOptions)`                                   | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/client.jl:234`                     |
| 75.5% |  22,956 | `_start()`                                                         | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/client.jl:570`                     |
| 75.5% |  22,953 | `parse_workload`                                                   | `./profile.jl:18`                                                                                                 |
| 70.0% |  21,291 | `#write#58`                                                        | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:40`                                                 |
| 51.7% |  15,732 | `#write#79`                                                        | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`                                                |
| 51.7% |  15,725 | `write`                                                            | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:147`                                                |
| 51.6% |  15,694 | `#write#81`                                                        | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`               |
| 24.5% |   7,435 | `(anonymous)`                                                      | `<unknown>`                                                                                                       |
| 20.4% |   6,216 | `_symbol`                                                          | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:1`                                                  |
| 20.4% |   6,216 | `getvalue`                                                         | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:187`                                                |
| 18.3% |   5,558 | `defaultminimum`                                                   | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:12`                                                 |
| 18.3% |   5,557 | `foldl_impl`                                                       | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:46`                      |
| 18.3% |   5,557 | `mapfoldl_impl`                                                    | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:42`                      |

#### Categories

Categories accounting for at least 1.0% of self samples.

##### Third-party

|     % | Samples | Function                                                                                                                                                                                                                         | Location                                                           |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| 70.0% |  21,291 | `#write#58`                                                                                                                                                                                                                      | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:40`  |
| 51.7% |  15,732 | `#write#79`                                                                                                                                                                                                                      | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157` |
| 51.7% |  15,725 | `write`                                                                                                                                                                                                                          | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:147` |
| 20.4% |   6,216 | `_symbol`                                                                                                                                                                                                                        | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:1`   |
| 20.4% |   6,216 | `getvalue`                                                                                                                                                                                                                       | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:187` |
| 18.3% |   5,558 | `defaultminimum`                                                                                                                                                                                                                 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:12`  |
| 14.8% |   4,491 | `getvalue`                                                                                                                                                                                                                       | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:127` |
| 14.6% |   4,440 | `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})`                                                                                               | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40`  |
| 11.5% |   3,481 | `iterate`                                                                                                                                                                                                                        | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:81`  |
| 10.1% |   3,084 | `getvalue`                                                                                                                                                                                                                       | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:214` |
|  9.7% |   2,963 | `iterate`                                                                                                                                                                                                                        | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:78`  |
|  5.1% |   1,546 | `getindex`                                                                                                                                                                                                                       | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:163` |
|  3.9% |   1,197 | `read`                                                                                                                                                                                                                           | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:30`   |
|  3.9% |   1,196 | `var\"#read#6\"(::Bool, ::Nothing, ::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.read), ::String)`                                                                                                       | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:30`   |
|  3.8% |   1,149 | `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)`                                                                     | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:87`   |
|  3.8% |   1,149 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)`                                                      | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:87`   |
|  3.8% |   1,149 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:218`  |
|  3.8% |   1,149 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)`                                             | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:218`  |
|  3.8% |   1,149 | `read!`                                                                                                                                                                                                                          | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:87`   |
|  3.8% |   1,146 | `var\"#read!#9\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Array}, ::Bool)`  | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:312`  |

##### Standard library

|     % | Samples | Function                                                           | Location                                                                                                          |
| ----: | ------: | ------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| 75.5% |  22,956 | `macro expansion`                                                  | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/stdlib/v1.13/Profile/src/Profile.jl:60` |
| 75.5% |  22,956 | `eval(::Module, ::Any)`                                            | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:489`                       |
| 75.5% |  22,956 | `include_string(::typeof(identity), ::Module, ::String, ::String)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/loading.jl:2989`                   |
| 75.5% |  22,956 | `_include(::Function, ::Module, ::String)`                         | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/loading.jl:3083`                   |
| 75.5% |  22,956 | `include(::Module, ::String)`                                      | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base.jl:309`                       |
| 75.5% |  22,956 | `exec_options(::Base.JLOptions)`                                   | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/client.jl:234`                     |
| 75.5% |  22,956 | `_start()`                                                         | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/client.jl:570`                     |
| 51.6% |  15,694 | `#write#81`                                                        | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`               |
| 18.3% |   5,557 | `foldl_impl`                                                       | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:46`                      |
| 18.3% |   5,557 | `mapfoldl_impl`                                                    | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:42`                      |
| 18.3% |   5,557 | `#mapfoldl#271`                                                    | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:173`                     |
| 18.3% |   5,557 | `mapfoldl`                                                         | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:173`                     |
| 18.3% |   5,557 | `#mapreduce#275`                                                   | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:306`                     |
| 18.3% |   5,557 | `mapreduce`                                                        | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:306`                     |
| 18.3% |   5,557 | `#sum#278`                                                         | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:535`                     |
| 18.3% |   5,557 | `sum`                                                              | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:535`                     |
| 18.3% |   5,557 | `#sum#279`                                                         | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:564`                     |
| 18.3% |   5,557 | `sum`                                                              | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:564`                     |
| 18.3% |   5,557 | `_foldl_impl`                                                      | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:56`                      |
| 18.2% |   5,538 | `MappingRF`                                                        | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98`                      |

##### Unknown

|     % | Samples | Function      | Location    |
| ----: | ------: | ------------- | ----------- |
| 24.5% |   7,435 | `(anonymous)` | `<unknown>` |

##### Native

|     % | Samples | Function                                                                                                                                                                                | Location    |
| ----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 75.5% |  22,956 | `[unknown function]`                                                                                                                                                                    | `<unknown>` |
| 18.2% |   5,542 | `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})`                                                                                                            | `<unknown>` |
| 18.2% |   5,522 | `#defaultminimum##0`                                                                                                                                                                    | `<unknown>` |
| <0.1% |       3 | `(::JSON3.var\"#defaultminimum##0#defaultminimum##1\"{JSON3.Array{Int64, Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}}})(::Int64)` | `<unknown>` |

#### Callers

Callers with the largest contribution to each function's total samples. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `[unknown function]` (`<unknown>`)

|      % | Samples | Caller                                                                       | Location                                                                                            |
| -----: | ------: | ---------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| 100.0% |  22,956 | `eval(::Module, ::Any)`                                                      | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:489`         |
|  92.8% |  21,293 | `parse_workload`                                                             | `./profile.jl:18`                                                                                   |
|  68.4% |  15,708 | `#write#79`                                                                  | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`                                  |
|  65.6% |  15,057 | `#write#81`                                                                  | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl` |
|  24.1% |   5,537 | `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` | `<unknown>`                                                                                         |

##### `macro expansion` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/stdlib/v1.13/Profile/src/Profile.jl:60`)

|      % | Samples | Caller        | Location          |
| -----: | ------: | ------------- | ----------------- |
| 100.0% |  22,956 | `capture_cpu` | `./profile.jl:29` |

##### `capture_cpu` (`./profile.jl:29`)

|      % | Samples | Caller               | Location    |
| -----: | ------: | -------------------- | ----------- |
| 100.0% |  22,956 | `[unknown function]` | `<unknown>` |

##### `eval(::Module, ::Any)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:489`)

|      % | Samples | Caller                                                             | Location                                                                                        |
| -----: | ------: | ------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------- |
| 100.0% |  22,956 | `include_string(::typeof(identity), ::Module, ::String, ::String)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/loading.jl:2989` |

##### `include_string(::typeof(identity), ::Module, ::String, ::String)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/loading.jl:2989`)

|      % | Samples | Caller                                     | Location                                                                                        |
| -----: | ------: | ------------------------------------------ | ----------------------------------------------------------------------------------------------- |
| 100.0% |  22,956 | `_include(::Function, ::Module, ::String)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/loading.jl:3083` |

##### `_include(::Function, ::Module, ::String)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/loading.jl:3083`)

|      % | Samples | Caller                        | Location                                                                                    |
| -----: | ------: | ----------------------------- | ------------------------------------------------------------------------------------------- |
| 100.0% |  22,956 | `include(::Module, ::String)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base.jl:309` |

##### `include(::Module, ::String)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base.jl:309`)

|      % | Samples | Caller                           | Location                                                                                      |
| -----: | ------: | -------------------------------- | --------------------------------------------------------------------------------------------- |
| 100.0% |  22,956 | `exec_options(::Base.JLOptions)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/client.jl:234` |

##### `exec_options(::Base.JLOptions)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/client.jl:234`)

|      % | Samples | Caller     | Location                                                                                      |
| -----: | ------: | ---------- | --------------------------------------------------------------------------------------------- |
| 100.0% |  22,956 | `_start()` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/client.jl:570` |

##### `parse_workload` (`./profile.jl:18`)

|      % | Samples | Caller            | Location                                                                                                          |
| -----: | ------: | ----------------- | ----------------------------------------------------------------------------------------------------------------- |
| 100.0% |  22,953 | `macro expansion` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/stdlib/v1.13/Profile/src/Profile.jl:60` |

##### `#write#58` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:40`)

|      % | Samples | Caller               | Location    |
| -----: | ------: | -------------------- | ----------- |
| 100.0% |  21,291 | `[unknown function]` | `<unknown>` |

##### `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`)

|     % | Samples | Caller               | Location                                                                                            |
| ----: | ------: | -------------------- | --------------------------------------------------------------------------------------------------- |
| 99.9% |  15,723 | `write`              | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:147`                                  |
| 95.7% |  15,052 | `[unknown function]` | `<unknown>`                                                                                         |
|  0.1% |       9 | `#write#79`          | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`                                  |
| <0.1% |       1 | `#write#81`          | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl` |

##### `write` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:147`)

|      % | Samples | Caller      | Location                                                          |
| -----: | ------: | ----------- | ----------------------------------------------------------------- |
| 100.0% |  15,725 | `#write#58` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:40` |

##### `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`)

|      % | Samples | Caller               | Location    |
| -----: | ------: | -------------------- | ----------- |
| 100.0% |  15,694 | `[unknown function]` | `<unknown>` |

##### `_symbol` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:1`)

|      % | Samples | Caller     | Location                                                           |
| -----: | ------: | ---------- | ------------------------------------------------------------------ |
| 100.0% |   6,216 | `getvalue` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:187` |

##### `getvalue` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:187`)

|     % | Samples | Caller                                                                                                                             | Location                                                          |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| 52.8% |   3,281 | `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40` |
| 47.2% |   2,933 | `iterate`                                                                                                                          | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:78` |
| <0.1% |       2 | `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, Vector{UInt64}})`                                                     | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40` |

##### `defaultminimum` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:12`)

|      % | Samples | Caller               | Location                                                          |
| -----: | ------: | -------------------- | ----------------------------------------------------------------- |
| 100.0% |   5,558 | `#write#58`          | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:40` |
|  89.2% |   4,958 | `#defaultminimum##0` | `<unknown>`                                                       |

##### `foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:46`)

|      % | Samples | Caller          | Location                                                                                     |
| -----: | ------: | --------------- | -------------------------------------------------------------------------------------------- |
| 100.0% |   5,557 | `mapfoldl_impl` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:42` |

##### `mapfoldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:42`)

|      % | Samples | Caller          | Location                                                                                      |
| -----: | ------: | --------------- | --------------------------------------------------------------------------------------------- |
| 100.0% |   5,557 | `#mapfoldl#271` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:173` |

##### `#mapfoldl#271` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:173`)

|      % | Samples | Caller     | Location                                                                                      |
| -----: | ------: | ---------- | --------------------------------------------------------------------------------------------- |
| 100.0% |   5,557 | `mapfoldl` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:173` |

##### `mapfoldl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:173`)

|      % | Samples | Caller           | Location                                                                                      |
| -----: | ------: | ---------------- | --------------------------------------------------------------------------------------------- |
| 100.0% |   5,557 | `#mapreduce#275` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:306` |

##### `#mapreduce#275` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:306`)

|      % | Samples | Caller      | Location                                                                                      |
| -----: | ------: | ----------- | --------------------------------------------------------------------------------------------- |
| 100.0% |   5,557 | `mapreduce` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:306` |

##### `mapreduce` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:306`)

|      % | Samples | Caller     | Location                                                                                      |
| -----: | ------: | ---------- | --------------------------------------------------------------------------------------------- |
| 100.0% |   5,557 | `#sum#278` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:535` |

##### `#sum#278` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:535`)

|      % | Samples | Caller | Location                                                                                      |
| -----: | ------: | ------ | --------------------------------------------------------------------------------------------- |
| 100.0% |   5,557 | `sum`  | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:535` |

##### `sum` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:535`)

|      % | Samples | Caller                                                                                                                                    | Location                                                                                      |
| -----: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| 100.0% |   5,557 | `#sum#279`                                                                                                                                | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:564` |
|  99.6% |   5,533 | `[unknown function]`                                                                                                                      | `<unknown>`                                                                                   |
|   0.1% |       4 | `defaultminimum(::JSON3.Array{Int64, Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:11`                             |

##### `#sum#279` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:564`)

|      % | Samples | Caller | Location                                                                                      |
| -----: | ------: | ------ | --------------------------------------------------------------------------------------------- |
| 100.0% |   5,557 | `sum`  | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:564` |

##### `sum` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:564`)

|      % | Samples | Caller               | Location                                                          |
| -----: | ------: | -------------------- | ----------------------------------------------------------------- |
| 100.0% |   5,557 | `defaultminimum`     | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:12` |
|  58.8% |   3,268 | `[unknown function]` | `<unknown>`                                                       |

##### `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:56`)

|      % | Samples | Caller       | Location                                                                                     |
| -----: | ------: | ------------ | -------------------------------------------------------------------------------------------- |
| 100.0% |   5,557 | `foldl_impl` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:46` |

##### `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` (`<unknown>`)

|     % | Samples | Caller               | Location                                                                                     |
| ----: | ------: | -------------------- | -------------------------------------------------------------------------------------------- |
| 99.9% |   5,538 | `MappingRF`          | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98` |
| 63.7% |   3,531 | `[unknown function]` | `<unknown>`                                                                                  |
|  0.1% |       3 | `_foldl_impl`        | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60` |

##### `MappingRF` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98`)

|      % | Samples | Caller               | Location                                                                                     |
| -----: | ------: | -------------------- | -------------------------------------------------------------------------------------------- |
| 100.0% |   5,536 | `_foldl_impl`        | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:56` |
|   6.0% |     332 | `_foldl_impl`        | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60` |
|   0.1% |       8 | `[unknown function]` | `<unknown>`                                                                                  |

##### `#defaultminimum##0` (`<unknown>`)

|      % | Samples | Caller               | Location    |
| -----: | ------: | -------------------- | ----------- |
| 100.0% |   5,522 | `[unknown function]` | `<unknown>` |

##### `getvalue` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:127`)

|     % | Samples | Caller     | Location                                                           |
| ----: | ------: | ---------- | ------------------------------------------------------------------ |
| 67.4% |   3,028 | `getvalue` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:214` |
| 32.6% |   1,463 | `getindex` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:163` |

##### `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40`)

|     % | Samples | Caller               | Location                                                           |
| ----: | ------: | -------------------- | ------------------------------------------------------------------ |
| 99.9% |   4,437 | `getvalue`           | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:127` |
|  0.1% |       3 | `[unknown function]` | `<unknown>`                                                        |

##### `iterate` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:81`)

|     % | Samples | Caller      | Location                                                                                         |
| ----: | ------: | ----------- | ------------------------------------------------------------------------------------------------ |
| 47.4% |   1,651 | `#write#79` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`                               |
| 41.7% |   1,453 | `iterate`   | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/iterators.jl:697` |
| 10.8% |     377 | `iterate`   | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:75`                                |

##### `getvalue` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:214`)

|      % | Samples | Caller    | Location                                                          |
| -----: | ------: | --------- | ----------------------------------------------------------------- |
| 100.0% |   3,084 | `iterate` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:81` |

##### `iterate` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:78`)

|     % | Samples | Caller      | Location                                                                                         |
| ----: | ------: | ----------- | ------------------------------------------------------------------------------------------------ |
| 52.2% |   1,548 | `#write#79` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`                               |
| 37.7% |   1,118 | `iterate`   | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/iterators.jl:697` |
| 10.0% |     297 | `iterate`   | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:75`                                |

##### `getindex` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:163`)

|     % | Samples | Caller               | Location                                                                                                 |
| ----: | ------: | -------------------- | -------------------------------------------------------------------------------------------------------- |
| 57.4% |     888 | `isassigned`         | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:1641` |
| 21.4% |     331 | `#defaultminimum##0` | `<unknown>`                                                                                              |
| 21.2% |     327 | `#write#81`          | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`      |

##### `read` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:30`)

|      % | Samples | Caller           | Location          |
| -----: | ------: | ---------------- | ----------------- |
| 100.0% |   1,197 | `parse_workload` | `./profile.jl:18` |

##### `var\"#read#6\"(::Bool, ::Nothing, ::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.read), ::String)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:30`)

|      % | Samples | Caller | Location                                                         |
| -----: | ------: | ------ | ---------------------------------------------------------------- |
| 100.0% |   1,196 | `read` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:30` |

##### `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:87`)

|      % | Samples | Caller                                                                                                                                                                                                                           | Location                                                          |
| -----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| 100.0% |   1,149 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)`                                                      | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:87`  |
| 100.0% |   1,149 | `read!`                                                                                                                                                                                                                          | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:87`  |
|   1.4% |      16 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:218` |
|   0.1% |       1 | `var\"#read!#9\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Array}, ::Bool)`  | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:312` |

##### `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:87`)

|      % | Samples | Caller                                                                                                                                                                                                                           | Location                                                          |
| -----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| 100.0% |   1,149 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:218` |
|  99.7% |   1,145 | `var\"#read!#9\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Array}, ::Bool)`  | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:312` |
|   0.7% |       8 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)`                                             | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:218` |

##### `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:218`)

|      % | Samples | Caller                                                                                                                                                                               | Location                                                          |
| -----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------- |
| 100.0% |   1,149 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:218` |
|   0.2% |       2 | `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)`                         | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:87`  |

##### `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:218`)

|      % | Samples | Caller                                                                                                                                                       | Location                                                         |
| -----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------- |
| 100.0% |   1,149 | `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:87` |

##### `read!` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:87`)

|      % | Samples | Caller                                                                                                                     | Location                                                         |
| -----: | ------: | -------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| 100.0% |   1,149 | `var\"#read#6\"(::Bool, ::Nothing, ::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.read), ::String)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:30` |

##### `var\"#read!#9\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Array}, ::Bool)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:312`)

|      % | Samples | Caller                                                                                                                                                                              | Location                                                          |
| -----: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| 100.0% |   1,146 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Array}, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:312` |
|   0.3% |       3 | `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)`                        | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:87`  |

##### `(::JSON3.var\"#defaultminimum##0#defaultminimum##1\"{JSON3.Array{Int64, Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}}})(::Int64)` (`<unknown>`)

|      % | Samples | Caller      | Location                                                                                     |
| -----: | ------: | ----------- | -------------------------------------------------------------------------------------------- |
| 100.0% |       3 | `MappingRF` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98` |

#### Callees

Callees with the largest contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `[unknown function]` (`<unknown>`)

|      % | Samples | Callee        | Location                                                                                            |
| -----: | ------: | ------------- | --------------------------------------------------------------------------------------------------- |
| 100.0% |  22,956 | `capture_cpu` | `./profile.jl:29`                                                                                   |
|  92.7% |  21,291 | `#write#58`   | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:40`                                   |
|  68.4% |  15,694 | `#write#81`   | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl` |
|  65.6% |  15,052 | `#write#79`   | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`                                  |
|  24.1% |   5,533 | `sum`         | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:535`       |

##### `macro expansion` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/stdlib/v1.13/Profile/src/Profile.jl:60`)

|      % | Samples | Callee           | Location          |
| -----: | ------: | ---------------- | ----------------- |
| 100.0% |  22,953 | `parse_workload` | `./profile.jl:18` |

##### `capture_cpu` (`./profile.jl:29`)

|      % | Samples | Callee            | Location                                                                                                          |
| -----: | ------: | ----------------- | ----------------------------------------------------------------------------------------------------------------- |
| 100.0% |  22,956 | `macro expansion` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/stdlib/v1.13/Profile/src/Profile.jl:60` |

##### `eval(::Module, ::Any)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:489`)

|      % | Samples | Callee               | Location    |
| -----: | ------: | -------------------- | ----------- |
| 100.0% |  22,956 | `[unknown function]` | `<unknown>` |

##### `include_string(::typeof(identity), ::Module, ::String, ::String)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/loading.jl:2989`)

|      % | Samples | Callee                  | Location                                                                                    |
| -----: | ------: | ----------------------- | ------------------------------------------------------------------------------------------- |
| 100.0% |  22,956 | `eval(::Module, ::Any)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:489` |

##### `_include(::Function, ::Module, ::String)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/loading.jl:3083`)

|      % | Samples | Callee                                                             | Location                                                                                        |
| -----: | ------: | ------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------- |
| 100.0% |  22,956 | `include_string(::typeof(identity), ::Module, ::String, ::String)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/loading.jl:2989` |

##### `include(::Module, ::String)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base.jl:309`)

|      % | Samples | Callee                                     | Location                                                                                        |
| -----: | ------: | ------------------------------------------ | ----------------------------------------------------------------------------------------------- |
| 100.0% |  22,956 | `_include(::Function, ::Module, ::String)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/loading.jl:3083` |

##### `exec_options(::Base.JLOptions)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/client.jl:234`)

|      % | Samples | Callee                        | Location                                                                                    |
| -----: | ------: | ----------------------------- | ------------------------------------------------------------------------------------------- |
| 100.0% |  22,956 | `include(::Module, ::String)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base.jl:309` |

##### `_start()` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/client.jl:570`)

|      % | Samples | Callee                           | Location                                                                                      |
| -----: | ------: | -------------------------------- | --------------------------------------------------------------------------------------------- |
| 100.0% |  22,956 | `exec_options(::Base.JLOptions)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/client.jl:234` |

##### `parse_workload` (`./profile.jl:18`)

|     % | Samples | Callee               | Location                                                                                              |
| ----: | ------: | -------------------- | ----------------------------------------------------------------------------------------------------- |
| 92.8% |  21,293 | `[unknown function]` | `<unknown>`                                                                                           |
|  5.2% |   1,197 | `read`               | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:30`                                      |
|  1.8% |     406 | `length(::String)`   | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:540` |

##### `#write#58` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:40`)

|     % | Samples | Callee                    | Location                                                                                             |
| ----: | ------: | ------------------------- | ---------------------------------------------------------------------------------------------------- |
| 73.9% |  15,725 | `write`                   | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:147`                                   |
| 26.1% |   5,558 | `defaultminimum`          | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:12`                                    |
| <0.1% |       4 | `String(::Vector{UInt8})` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:66` |

##### `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`)

|     % | Samples | Callee                                                                         | Location                                                                                     |
| ----: | ------: | ------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------- |
| 99.8% |  15,708 | `[unknown function]`                                                           | `<unknown>`                                                                                  |
| 11.9% |   1,866 | `indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64, ::Int64)`      | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163` |
| 10.5% |   1,651 | `iterate`                                                                      | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:81`                            |
|  9.8% |   1,548 | `iterate`                                                                      | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:78`                            |
|  7.1% |   1,110 | `write(::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:340`                           |

##### `write` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:147`)

|      % | Samples | Callee      | Location                                                           |
| -----: | ------: | ----------- | ------------------------------------------------------------------ |
| 100.0% |  15,723 | `#write#79` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157` |

##### `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`)

|     % | Samples | Callee               | Location                                                                                                 |
| ----: | ------: | -------------------- | -------------------------------------------------------------------------------------------------------- |
| 95.9% |  15,057 | `[unknown function]` | `<unknown>`                                                                                              |
|  3.1% |     480 | `isassigned`         | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:1641` |
|  2.1% |     327 | `getindex`           | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:163`                                       |
|  0.1% |      15 | `indexed_iterate`    | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`             |
|  0.1% |       8 | `isassigned`         | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:1640` |

##### `getvalue` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:187`)

|      % | Samples | Callee    | Location                                                         |
| -----: | ------: | --------- | ---------------------------------------------------------------- |
| 100.0% |   6,216 | `_symbol` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:1` |

##### `defaultminimum` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:12`)

|      % | Samples | Callee                                                                                                                       | Location                                                                                           |
| -----: | ------: | ---------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| 100.0% |   5,557 | `sum`                                                                                                                        | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:564`      |
|   1.4% |      78 | `isempty(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:1127` |
|  <0.1% |       1 | `isempty(::JSON3.Object{Base.CodeUnits{UInt8, String}, Vector{UInt64}})`                                                     | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:1127` |

##### `foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:46`)

|      % | Samples | Callee                                                                                                                                                    | Location                                                                                     |
| -----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| 100.0% |   5,557 | `_foldl_impl`                                                                                                                                             | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:56` |
|  99.6% |   5,536 | `_foldl_impl`                                                                                                                                             | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60` |
|  <0.1% |       2 | `getvalue(::Type{JSON3.Array}, ::Base.CodeUnits{UInt8, String}, ::SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}, ::Int64, ::UInt64)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:131`                           |

##### `mapfoldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:42`)

|      % | Samples | Callee       | Location                                                                                     |
| -----: | ------: | ------------ | -------------------------------------------------------------------------------------------- |
| 100.0% |   5,557 | `foldl_impl` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:46` |

##### `#mapfoldl#271` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:173`)

|      % | Samples | Callee          | Location                                                                                     |
| -----: | ------: | --------------- | -------------------------------------------------------------------------------------------- |
| 100.0% |   5,557 | `mapfoldl_impl` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:42` |

##### `mapfoldl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:173`)

|      % | Samples | Callee          | Location                                                                                      |
| -----: | ------: | --------------- | --------------------------------------------------------------------------------------------- |
| 100.0% |   5,557 | `#mapfoldl#271` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:173` |

##### `#mapreduce#275` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:306`)

|      % | Samples | Callee     | Location                                                                                      |
| -----: | ------: | ---------- | --------------------------------------------------------------------------------------------- |
| 100.0% |   5,557 | `mapfoldl` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:173` |

##### `mapreduce` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:306`)

|      % | Samples | Callee           | Location                                                                                      |
| -----: | ------: | ---------------- | --------------------------------------------------------------------------------------------- |
| 100.0% |   5,557 | `#mapreduce#275` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:306` |

##### `#sum#278` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:535`)

|      % | Samples | Callee      | Location                                                                                      |
| -----: | ------: | ----------- | --------------------------------------------------------------------------------------------- |
| 100.0% |   5,557 | `mapreduce` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:306` |

##### `sum` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:535`)

|      % | Samples | Callee     | Location                                                                                      |
| -----: | ------: | ---------- | --------------------------------------------------------------------------------------------- |
| 100.0% |   5,557 | `#sum#278` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:535` |

##### `#sum#279` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:564`)

|      % | Samples | Callee | Location                                                                                      |
| -----: | ------: | ------ | --------------------------------------------------------------------------------------------- |
| 100.0% |   5,557 | `sum`  | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:535` |

##### `sum` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:564`)

|      % | Samples | Callee     | Location                                                                                      |
| -----: | ------: | ---------- | --------------------------------------------------------------------------------------------- |
| 100.0% |   5,557 | `#sum#279` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:564` |

##### `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:56`)

|     % | Samples | Callee               | Location                                                                                         |
| ----: | ------: | -------------------- | ------------------------------------------------------------------------------------------------ |
| 99.6% |   5,536 | `MappingRF`          | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98`     |
|  0.2% |      12 | `iterate`            | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/iterators.jl:697` |
|  0.1% |       6 | `[unknown function]` | `<unknown>`                                                                                      |
| <0.1% |       1 | `iterate`            | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:75`                                |

##### `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` (`<unknown>`)

|     % | Samples | Callee                                                                                                                                    | Location                                                                                    |
| ----: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| 99.9% |   5,537 | `[unknown function]`                                                                                                                      | `<unknown>`                                                                                 |
|  0.2% |      11 | `defaultminimum`                                                                                                                          | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:6`                            |
|  0.1% |       6 | `defaultminimum(::JSON3.Array{Int64, Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:11`                           |
|  0.1% |       5 | `defaultminimum(::String)`                                                                                                                | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:5`                            |
|  0.1% |       5 | `+(::UInt64, ::Int64)`                                                                                                                    | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:1054` |

##### `MappingRF` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98`)

|      % | Samples | Callee                                                                                                                                                                                  | Location                                                                                     |
| -----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| 100.0% |   5,538 | `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})`                                                                                                            | `<unknown>`                                                                                  |
|   0.3% |      19 | `BottomRF`                                                                                                                                                                              | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:83` |
|   0.1% |       3 | `(::JSON3.var\"#defaultminimum##0#defaultminimum##1\"{JSON3.Array{Int64, Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}}})(::Int64)` | `<unknown>`                                                                                  |
|  <0.1% |       1 | `BottomRF`                                                                                                                                                                              | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:84` |

##### `#defaultminimum##0` (`<unknown>`)

|     % | Samples | Callee           | Location                                                                                                 |
| ----: | ------: | ---------------- | -------------------------------------------------------------------------------------------------------- |
| 89.8% |   4,958 | `defaultminimum` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:12`                                        |
|  7.4% |     409 | `isassigned`     | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:1641` |
|  6.0% |     331 | `getindex`       | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:163`                                       |
| <0.1% |       2 | `isassigned`     | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:1632` |
| <0.1% |       1 | `isassigned`     | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:1640` |

##### `getvalue` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:127`)

|     % | Samples | Callee                                                                                                                             | Location                                                                                    |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| 98.8% |   4,437 | `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40`                           |
|  1.1% |      50 | `setindex!(::Dict{Symbol, Int64}, ::Int64, ::Symbol)`                                                                              | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:356` |

##### `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40`)

|     % | Samples | Callee                                                     | Location                                                                                        |
| ----: | ------: | ---------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| 73.9% |   3,281 | `getvalue`                                                 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:187`                              |
| 21.1% |     937 | `setindex!(::Dict{Symbol, Int64}, ::Int64, ::Symbol)`      | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:356`     |
|  2.3% |     102 | `+`                                                        | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:87`       |
|  1.3% |      58 | `ht_keyindex2_shorthash!(::Dict{Symbol, Int64}, ::Symbol)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:267`     |
|  0.8% |      37 | `getindex`                                                 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/subarray.jl:334` |

##### `iterate` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:81`)

|     % | Samples | Callee     | Location                                                           |
| ----: | ------: | ---------- | ------------------------------------------------------------------ |
| 88.6% |   3,084 | `getvalue` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:214` |
|  5.8% |     201 | `getvalue` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:218` |
|  2.2% |      75 | `getvalue` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:215` |
|  1.7% |      58 | `getvalue` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:216` |
|  0.7% |      26 | `getvalue` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl`     |

##### `getvalue` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:214`)

|     % | Samples | Callee     | Location                                                           |
| ----: | ------: | ---------- | ------------------------------------------------------------------ |
| 98.2% |   3,028 | `getvalue` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:127` |
|  1.8% |      56 | `getvalue` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:126` |

##### `iterate` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:78`)

|     % | Samples | Callee     | Location                                                           |
| ----: | ------: | ---------- | ------------------------------------------------------------------ |
| 99.0% |   2,933 | `getvalue` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:187` |
|  1.0% |      30 | `getvalue` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl`     |

##### `getindex` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:163`)

|     % | Samples | Callee     | Location                                                           |
| ----: | ------: | ---------- | ------------------------------------------------------------------ |
| 94.6% |   1,463 | `getvalue` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:127` |
|  5.4% |      83 | `getvalue` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:126` |

##### `read` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:30`)

|     % | Samples | Callee                                                                                                                     | Location                                                          |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| 99.9% |   1,196 | `var\"#read#6\"(::Bool, ::Nothing, ::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.read), ::String)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:30`  |
|  0.1% |       1 | `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, Vector{UInt64}})`                                             | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40` |

##### `var\"#read#6\"(::Bool, ::Nothing, ::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.read), ::String)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:30`)

|     % | Samples | Callee                                                                         | Location                                                                                    |
| ----: | ------: | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------- |
| 96.1% |   1,149 | `read!`                                                                        | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:87`                            |
|  3.8% |      45 | `Array`                                                                        | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:648` |
|  0.2% |       2 | `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, Vector{UInt64}})` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40`                           |

##### `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:87`)

|      % | Samples | Callee                                                                                                                                                                               | Location                                                                  |
| -----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------- |
| 100.0% |   1,149 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:218`         |
|  99.7% |   1,146 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Array}, ::Bool)`  | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:312`         |
|  22.5% |     259 | `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{String})`                                                                       | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:142`         |
|   2.7% |      31 | `typeparser(::Type{Float64}, ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Int16, ::Parsers.Options)`                                                                | `../profiler-md-julia-depot/packages/Parsers/05lwR/src/components.jl:392` |
|   1.6% |      18 | `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.False})`                                                                  | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:189`         |

##### `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:87`)

|      % | Samples | Callee                                                                                                                                                       | Location                                                                  |
| -----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------- |
| 100.0% |   1,149 | `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:87`          |
|   0.4% |       5 | `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{String})`                                               | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:142`         |
|   0.3% |       3 | `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Nothing})`                                              | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:204`         |
|   0.3% |       3 | `typeparser(::Type{Float64}, ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Int16, ::Parsers.Options)`                                        | `../profiler-md-julia-depot/packages/Parsers/05lwR/src/components.jl:392` |
|   0.1% |       1 | `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.False})`                                          | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:189`         |

##### `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:218`)

|      % | Samples | Callee                                                                                                                                                                      | Location                                                          |
| -----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| 100.0% |   1,149 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:87`  |
|  16.5% |     190 | `getbyte`                                                                                                                                                                   | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:8`  |
|   6.8% |      78 | `macro expansion`                                                                                                                                                           | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:29` |
|   6.0% |      69 | `string`                                                                                                                                                                    | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:88` |
|   4.4% |      50 | `macro expansion`                                                                                                                                                           | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:24` |

##### `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:218`)

|      % | Samples | Callee                                                                                                                                                                                                                           | Location                                                          |
| -----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| 100.0% |   1,149 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:218` |
|   0.7% |       8 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)`                                                      | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:87`  |

##### `read!` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:87`)

|      % | Samples | Callee                                                                                                                                                       | Location                                                         |
| -----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------- |
| 100.0% |   1,149 | `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:87` |

##### `var\"#read!#9\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Array}, ::Bool)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:312`)

|     % | Samples | Callee                                                                                                                                                                      | Location                                                                                      |
| ----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| 99.9% |   1,145 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:87`                              |
|  1.0% |      11 | `macro expansion`                                                                                                                                                           | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:29`                             |
|  0.5% |       6 | `macro expansion`                                                                                                                                                           | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:24`                             |
|  0.3% |       4 | `setindex!`                                                                                                                                                                 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:1020` |
|  0.1% |       1 | `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)`                | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:87`                              |

##### `(::JSON3.var\"#defaultminimum##0#defaultminimum##1\"{JSON3.Array{Int64, Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}}})(::Int64)` (`<unknown>`)

|     % | Samples | Callee       | Location                                                                                                 |
| ----: | ------: | ------------ | -------------------------------------------------------------------------------------------------------- |
| 33.3% |       1 | `isassigned` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`      |
| 33.3% |       1 | `isassigned` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:1642` |
| 33.3% |       1 | `getindex`   | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:158`                                       |

## Hottest call stacks

Call stacks with the most samples collected in their leaf frame.

Common call stack: `#write#58` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:40`) ← `[unknown function]` ← `parse_workload` (`./profile.jl:18`) ← `macro expansion` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/stdlib/v1.13/Profile/src/Profile.jl:60`) ← `capture_cpu` (`./profile.jl:29`) ← `[unknown function]` ← `eval(::Module, ::Any)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:489`) ← `include_string(::typeof(identity), ::Module, ::String, ::String)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/loading.jl:2989`) ← `_include(::Function, ::Module, ::String)` (3083) ← `include(::Module, ::String)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base.jl:309`) ← `exec_options(::Base.JLOptions)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/client.jl:234`) ← `_start()` (570)

|    % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ---: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 9.7% |   2,938 | `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 5.3% |   1,623 | `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 3.7% |   1,136 | `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 2.8% |     859 | `indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64, ::Int64)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`) ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 2.5% |     748 | `_symbol` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:1`) ← `getvalue` (187) ← `iterate` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:78`) ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 2.2% |     654 | `_symbol` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:1`) ← `getvalue` (187) ← `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40`) ← `getvalue` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:127`) ← `getvalue` (214) ← `iterate` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:81`) ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 2.1% |     642 | `_symbol` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:1`) ← `getvalue` (187) ← `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40`) ← `getvalue` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:127`) ← `getvalue` (214) ← `iterate` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:81`) ← `iterate` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/iterators.jl:697`) ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:12`) ← `#defaultminimum##0` ← `[unknown function]` ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `[unknown function]` ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `MappingRF` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98`) ← `_foldl_impl` (56) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:12`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 1.8% |     543 | `_symbol` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:1`) ← `getvalue` (187) ← `iterate` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:78`) ← `iterate` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/iterators.jl:697`) ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `[unknown function]` ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `[unknown function]` ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:12`) ← `#defaultminimum##0` ← `[unknown function]` ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `[unknown function]` ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `MappingRF` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98`) ← `_foldl_impl` (56) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:12`)                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 1.5% |     459 | `indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64, ::Int64)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`) ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 1.3% |     410 | `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `[unknown function]` ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `[unknown function]` ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `[unknown function]` ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:12`) ← `#defaultminimum##0` ← `[unknown function]` ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `[unknown function]` ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `MappingRF` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98`) ← `_foldl_impl` (56) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:12`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 1.3% |     395 | `_symbol` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:1`) ← `getvalue` (187) ← `iterate` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:78`) ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 1.2% |     374 | `indexed_iterate` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`) ← `indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64)` (163) ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 1.2% |     358 | `indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64, ::Int64)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`) ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 1.2% |     353 | `_symbol` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:1`) ← `getvalue` (187) ← `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40`) ← `getvalue` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:127`) ← `getvalue` (214) ← `iterate` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:81`) ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 1.0% |     308 | `_symbol` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:1`) ← `getvalue` (187) ← `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40`) ← `getvalue` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:127`) ← `getvalue` (214) ← `iterate` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:81`) ← `iterate` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/iterators.jl:697`) ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `[unknown function]` ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `[unknown function]` ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:12`) ← `#defaultminimum##0` ← `[unknown function]` ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `[unknown function]` ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `MappingRF` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98`) ← `_foldl_impl` (56) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:12`)                                                                                                                                    |
| 1.0% |     308 | `_symbol` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:1`) ← `getvalue` (187) ← `iterate` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:78`) ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 1.0% |     302 | `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 0.9% |     270 | `_symbol` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:1`) ← `getvalue` (187) ← `iterate` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:78`) ← `iterate` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/iterators.jl:697`) ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `[unknown function]` ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `[unknown function]` ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `[unknown function]` ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `[unknown function]` ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:12`) ← `#defaultminimum##0` ← `[unknown function]` ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `[unknown function]` ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `MappingRF` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98`) ← `_foldl_impl` (56) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:12`) |
| 0.9% |     264 | `GenericMemory` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:588`) ← `Array` (648) ← `Array` (661) ← `zeros` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:626`) ← `zeros` (622) ← `realloc!(::Vector{UInt8}, ::Int64, ::Int64)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:51`) ← `var\"#write#98\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` (340) ← `write(::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` (340) ← `#write#79` (157) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 0.9% |     259 | `_symbol` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:1`) ← `getvalue` (187) ← `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40`) ← `getvalue` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:127`) ← `getindex` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:163`) ← `isassigned` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:1641`) ← `#write#81` ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

# Sampling profile

Collected 30,275 samples.

| Category         |     % | Samples |
| ---------------- | ----: | ------: |
| Third-party      | 47.4% |  14,341 |
| Standard library | 26.3% |   7,949 |
| Unknown          | 22.4% |   6,789 |
| Native           |  3.8% |   1,142 |
| Ours             |  0.2% |      54 |

Paths starting with `./` or `../` are relative to `/tmp/profiler-md-julia-project/`.

`…` stands for omitted frames.

## Call tree

Call paths to the hottest functions.

```
├── … 23,486 samples (77.6%, self 0.7%) [unknown function]
│   ├── … 14,971 samples (49.5%, self 20.5%) #write#79 at ../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:157
│   │   ├── 2,071 samples (6.8%) indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64, ::Int64) at /nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163
│   │   ├── 1,832 samples (6.1%) iterate at ../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:81
│   │   │   ├── … 1,571 samples (5.2%) populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}}) at ../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40
│   │   │   │   ├── 287 samples (0.9%) setindex!(::Dict{Symbol, Int64}, ::Int64, ::Symbol) at /nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:356
│   │   │   │   │   └── 230 samples (0.8%, self 0.5%, self 1.6% globally) ht_keyindex2_shorthash!(::Dict{Symbol, Int64}, ::Symbol) at 267
│   │   │   │   └── 1,279 samples (4.2%) 6 more callees, led by (4.1%) getvalue at ../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:187
│   │   │   └── … 67 samples (0.2%) unsafe_string at /nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:126
│   │   ├── … 1,579 samples (5.2%, self 22.0% globally) _symbol at ../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:1
│   │   ├── 1,152 samples (3.8%) write(::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String) at 340
│   │   │   └── 1,117 samples (3.7%) var\"#write#98\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String) at 340
│   │   │       ├── … 626 samples (2.1%, self 3.2% globally) GenericMemory at /nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:588
│   │   │       ├── … 76 samples (0.3%) _setindex! at /nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:1025
│   │   │       └── 343 samples (1.1%) 12 more callees, led by (0.6%) escapelength at 331
│   │   ├── 806 samples (2.7%) indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64) at /nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163
│   │   │   └── 797 samples (2.6%, self 4.1% globally) indexed_iterate at 163
│   │   ├── 575 samples (1.9%, self 1.0%) iterate at ../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:75
│   │   │   └── 145 samples (0.5%) iterate at 81
│   │   └── 745 samples (2.5%) 15 more callees, led by (1.4%) indexed_iterate at /nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163
│   ├── … 2,177 samples (7.2%) #defaultminimum##0
│   │   └── 2,174 samples (7.2%) 5 more callees, led by (4.8%) defaultminimum at ../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:12
│   ├── … 1,937 samples (6.4%, self 0.5%) _foldl_impl at /nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60
│   │   ├── 1,533 samples (5.1%) iterate at /nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/iterators.jl:697
│   │   │   └── 1,533 samples (5.1%) 8 more callees, led by (3.0%) iterate at ../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:78
│   │   └── 132 samples (0.4%) iterate at ../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:75
│   ├── … 1,738 samples (5.7%) parse_workload at ./profile.jl:18
│   │   ├── … 1,215 samples (4.0%) var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool) at ../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:87
│   │   │   ├── … 738 samples (2.4%) kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool) at ../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:218
│   │   │   │   └── 732 samples (2.4%, self 0.6%) var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool) at 218
│   │   │   │       ├── … 179 samples (0.6%, self 1.6% globally) unsafe_load at /nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/pointer.jl:151
│   │   │   │       ├── 60 samples (0.2%) macro expansion at ../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:24
│   │   │   │       │   └── 60 samples (0.2%, self 1.0% globally) + at /nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:87
│   │   │   │       └── 297 samples (1.0%) 18 more callees, led by (0.3%) macro expansion at ../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:29
│   │   │   └── … 267 samples (0.9%) read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{String}) at ../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:142
│   │   └── 362 samples (1.2%) length(::String) at /nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:540 …
│   ├── … 836 samples (2.8%, self 2.7%) (::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})
│   ├── … 223 samples (0.7%) BottomRF at /nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:84
│   └── 1,391 samples (4.6%) 9 more callees, led by (3.3%) #write#81 at /nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl
└── 6,789 samples (22.4%) (anonymous)
```

## Hottest functions

### Self samples

Functions with the most samples collected within the function body, excluding callees.

|     % | Samples | Function                                                                                                                                                                                                                         | Location                                                                                             |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| 22.4% |   6,789 | `(anonymous)`                                                                                                                                                                                                                    | `<unknown>`                                                                                          |
| 22.0% |   6,675 | `_symbol`                                                                                                                                                                                                                        | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`                                     |
| 20.5% |   6,202 | `#write#79`                                                                                                                                                                                                                      | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:157`                                   |
|  6.8% |   2,072 | `indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64, ::Int64)`                                                                                                                                                        | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`         |
|  4.1% |   1,229 | `indexed_iterate`                                                                                                                                                                                                                | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`         |
|  3.2% |     983 | `GenericMemory`                                                                                                                                                                                                                  | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:588`          |
|  3.1% |     934 | `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})`                                                                                                                                                     | `<unknown>`                                                                                          |
|  1.6% |     486 | `unsafe_load`                                                                                                                                                                                                                    | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/pointer.jl:151`       |
|  1.6% |     470 | `ht_keyindex2_shorthash!(::Dict{Symbol, Int64}, ::Symbol)`                                                                                                                                                                       | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:267`          |
|  1.1% |     324 | `iterate`                                                                                                                                                                                                                        | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:75`                                    |
|  1.0% |     297 | `+`                                                                                                                                                                                                                              | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:87`            |
|  0.8% |     240 | `_foldl_impl`                                                                                                                                                                                                                    | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`         |
|  0.7% |     225 | `BottomRF`                                                                                                                                                                                                                       | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:84`         |
|  0.7% |     204 | `[unknown function]`                                                                                                                                                                                                             | `<unknown>`                                                                                          |
|  0.7% |     202 | `_setindex!`                                                                                                                                                                                                                     | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:1025`        |
|  0.7% |     199 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:218`                                    |
|  0.5% |     160 | `getindex`                                                                                                                                                                                                                       | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:975`    |
|  0.4% |     130 | `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{String})`                                                                                                                   | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:142`                                    |
|  0.4% |     128 | `checkbounds`                                                                                                                                                                                                                    | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/basic.jl:212` |
|  0.4% |     121 | `#write#81`                                                                                                                                                                                                                      | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:73`                                    |

#### Categories

Categories accounting for at least 1.0% of self samples.

##### Third-party

|     % | Samples | Function                                                                                                                                                                                                                         | Location                                                            |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| 22.0% |   6,675 | `_symbol`                                                                                                                                                                                                                        | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`    |
| 20.5% |   6,202 | `#write#79`                                                                                                                                                                                                                      | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:157`  |
|  1.1% |     324 | `iterate`                                                                                                                                                                                                                        | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:75`   |
|  0.7% |     199 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:218`   |
|  0.4% |     130 | `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{String})`                                                                                                                   | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:142`   |
|  0.4% |     121 | `#write#81`                                                                                                                                                                                                                      | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:73`   |
|  0.3% |      90 | `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)`                                                                     | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:87`    |
|  0.3% |      82 | `getvalue`                                                                                                                                                                                                                       | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:215`  |
|  0.3% |      80 | `var\"#write#98\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)`                                                          | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:340`  |
|  0.1% |      39 | `iterate`                                                                                                                                                                                                                        | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl`      |
|  0.1% |      35 | `getvalue`                                                                                                                                                                                                                       | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl`      |
|  0.1% |      35 | `write(::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)`                                                                                                                                                   | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:340`  |
|  0.1% |      26 | `var\"#write#84\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.BoolType, ::Vector{UInt8}, ::Int64, ::Int64, ::Bool)`                                                              | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:209`  |
|  0.1% |      25 | `var\"#write#86\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.NumberType, ::Vector{UInt8}, ::Int64, ::Int64, ::Int64)`                                                           | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:224`  |
|  0.1% |      23 | `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})`                                                                                               | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40`   |
|  0.1% |      23 | `macro expansion`                                                                                                                                                                                                                | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:23`   |
|  0.1% |      21 | `write(::StructTypes.BoolType, ::Vector{UInt8}, ::Int64, ::Int64, ::Bool)`                                                                                                                                                       | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:209`  |
|  0.1% |      19 | `macro expansion`                                                                                                                                                                                                                | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:14`   |
|  0.1% |      18 | `unescape(::JSON3.PointerString)`                                                                                                                                                                                                | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/strings.jl:48` |
|  0.1% |      17 | `getvalue(::Type{JSON3.Array}, ::Base.CodeUnits{UInt8, String}, ::SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}, ::Int64, ::UInt64)`                                                                        | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:131`  |

##### Standard library

|    % | Samples | Function                                                                  | Location                                                                                              |
| ---: | ------: | ------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| 6.8% |   2,072 | `indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64, ::Int64)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`          |
| 4.1% |   1,229 | `indexed_iterate`                                                         | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`          |
| 3.2% |     983 | `GenericMemory`                                                           | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:588`           |
| 1.6% |     486 | `unsafe_load`                                                             | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/pointer.jl:151`        |
| 1.6% |     470 | `ht_keyindex2_shorthash!(::Dict{Symbol, Int64}, ::Symbol)`                | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:267`           |
| 1.0% |     297 | `+`                                                                       | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:87`             |
| 0.8% |     240 | `_foldl_impl`                                                             | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`          |
| 0.7% |     225 | `BottomRF`                                                                | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:84`          |
| 0.7% |     202 | `_setindex!`                                                              | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:1025`         |
| 0.5% |     160 | `getindex`                                                                | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:975`     |
| 0.4% |     128 | `checkbounds`                                                             | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/basic.jl:212`  |
| 0.4% |     117 | `unsafe_string`                                                           | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:130` |
| 0.3% |      97 | `unsafe_string`                                                           | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:126` |
| 0.3% |      89 | `length_continued`                                                        | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/pointer.jl`            |
| 0.3% |      84 | `getproperty`                                                             | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base_compiler.jl:57`   |
| 0.3% |      77 | `==`                                                                      | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/promotion.jl:641`      |
| 0.2% |      73 | `Dict`                                                                    | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:80`            |
| 0.2% |      70 | `\|`                                                                      | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:418`            |
| 0.2% |      69 | `setindex!(::Dict{Symbol, Int64}, ::Int64, ::Symbol)`                     | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:356`           |
| 0.2% |      63 | `#write#81`                                                               | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`   |

##### Unknown

|     % | Samples | Function      | Location    |
| ----: | ------: | ------------- | ----------- |
| 22.4% |   6,789 | `(anonymous)` | `<unknown>` |

##### Native

|     % | Samples | Function                                                                                                                                                                                | Location    |
| ----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
|  3.1% |     934 | `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})`                                                                                                            | `<unknown>` |
|  0.7% |     204 | `[unknown function]`                                                                                                                                                                    | `<unknown>` |
| <0.1% |       3 | `#defaultminimum##0`                                                                                                                                                                    | `<unknown>` |
| <0.1% |       1 | `(::JSON3.var\"#defaultminimum##0#defaultminimum##1\"{JSON3.Array{Int64, Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}}})(::Int64)` | `<unknown>` |

#### Lines

Lines with the largest contribution to each function's self samples.

##### `_symbol` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`)

|      % | Samples | Location                                                         |
| -----: | ------: | ---------------------------------------------------------------- |
| 100.0% |   6,675 | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:1` |

##### `#write#79` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:157`)

|     % | Samples | Location                                                           |
| ----: | ------: | ------------------------------------------------------------------ |
| 62.2% |   3,860 | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:157` |
| 19.8% |   1,231 | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:60`  |
|  6.6% |     408 | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:73`  |
|  4.3% |     268 | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:155` |
|  3.9% |     242 | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:72`  |

##### `indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64, ::Int64)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`)

|      % | Samples | Location                                                                                     |
| -----: | ------: | -------------------------------------------------------------------------------------------- |
| 100.0% |   2,072 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163` |

##### `indexed_iterate` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`)

|      % | Samples | Location                                                                                     |
| -----: | ------: | -------------------------------------------------------------------------------------------- |
| 100.0% |   1,229 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163` |

##### `GenericMemory` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:588`)

|      % | Samples | Location                                                                                    |
| -----: | ------: | ------------------------------------------------------------------------------------------- |
| 100.0% |     983 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:588` |

##### `unsafe_load` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/pointer.jl:151`)

|      % | Samples | Location                                                                                       |
| -----: | ------: | ---------------------------------------------------------------------------------------------- |
| 100.0% |     486 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/pointer.jl:151` |

##### `ht_keyindex2_shorthash!(::Dict{Symbol, Int64}, ::Symbol)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:267`)

|     % | Samples | Location                                                                                    |
| ----: | ------: | ------------------------------------------------------------------------------------------- |
| 59.4% |     279 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:291` |
| 15.7% |      74 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:282` |
|  5.3% |      25 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:281` |
|  3.0% |      14 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:303` |
|  2.6% |      12 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:267` |

##### `iterate` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:75`)

|      % | Samples | Location                                                          |
| -----: | ------: | ----------------------------------------------------------------- |
| 100.0% |     324 | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:75` |

##### `+` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:87`)

|      % | Samples | Location                                                                                  |
| -----: | ------: | ----------------------------------------------------------------------------------------- |
| 100.0% |     297 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:87` |

##### `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`)

|     % | Samples | Location                                                                                     |
| ----: | ------: | -------------------------------------------------------------------------------------------- |
| 87.1% |     209 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60` |
|  2.9% |       7 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:51` |
|  0.4% |       1 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:56` |

##### `BottomRF` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:84`)

|      % | Samples | Location                                                                                     |
| -----: | ------: | -------------------------------------------------------------------------------------------- |
| 100.0% |     225 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:84` |

##### `[unknown function]` (`<unknown>`)

|     % | Samples | Location |
| ----: | ------: | -------- |
| 61.8% |     126 | 147      |
| 30.9% |      63 | 98       |
|  2.5% |       5 | 37       |
|  2.5% |       5 | 181      |
|  1.0% |       2 | 11       |

##### `_setindex!` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:1025`)

|      % | Samples | Location                                                                                      |
| -----: | ------: | --------------------------------------------------------------------------------------------- |
| 100.0% |     202 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:1025` |

##### `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:218`)

|     % | Samples | Location                                                          |
| ----: | ------: | ----------------------------------------------------------------- |
| 73.9% |     147 | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:248` |
|  7.5% |      15 | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:298` |
|  5.5% |      11 | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:247` |
|  4.0% |       8 | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:284` |
|  2.5% |       5 | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:268` |

##### `getindex` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:975`)

|      % | Samples | Location                                                                                          |
| -----: | ------: | ------------------------------------------------------------------------------------------------- |
| 100.0% |     160 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:975` |

##### `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{String})` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:142`)

|     % | Samples | Location                                                          |
| ----: | ------: | ----------------------------------------------------------------- |
| 39.2% |      51 | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:155` |
|  2.3% |       3 | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:142` |
|  1.5% |       2 | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:77`  |
|  1.5% |       2 | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:149` |
|  1.5% |       2 | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:167` |

##### `checkbounds` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/basic.jl:212`)

|      % | Samples | Location                                                                                             |
| -----: | ------: | ---------------------------------------------------------------------------------------------------- |
| 100.0% |     128 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/basic.jl:212` |

##### `#write#81` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:73`)

|     % | Samples | Location                                                           |
| ----: | ------: | ------------------------------------------------------------------ |
| 45.5% |      55 | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:200` |
| 29.8% |      36 | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:60`  |
| 12.4% |      15 | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:73`  |
|  9.9% |      12 | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:72`  |
|  0.8% |       1 | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:181` |

##### `unsafe_string` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:130`)

|      % | Samples | Location                                                                                              |
| -----: | ------: | ----------------------------------------------------------------------------------------------------- |
| 100.0% |     117 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:130` |

##### `unsafe_string` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:126`)

|      % | Samples | Location                                                                                              |
| -----: | ------: | ----------------------------------------------------------------------------------------------------- |
| 100.0% |      97 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:126` |

##### `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:87`)

|     % | Samples | Location                                                         |
| ----: | ------: | ---------------------------------------------------------------- |
| 28.9% |      26 | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:88` |
| 26.7% |      24 | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:87` |
|  8.9% |       8 | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:93` |
|  3.3% |       3 | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:99` |
|  2.2% |       2 | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:95` |

##### `getproperty` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base_compiler.jl:57`)

|      % | Samples | Location                                                                                            |
| -----: | ------: | --------------------------------------------------------------------------------------------------- |
| 100.0% |      84 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base_compiler.jl:57` |

##### `getvalue` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:215`)

|      % | Samples | Location                                                           |
| -----: | ------: | ------------------------------------------------------------------ |
| 100.0% |      82 | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:215` |

##### `var\"#write#98\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:340`)

|     % | Samples | Location                                                           |
| ----: | ------: | ------------------------------------------------------------------ |
| 38.8% |      31 | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:360` |
| 23.8% |      19 | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:60`  |
| 15.0% |      12 | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:340` |
|  8.8% |       7 | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:351` |
|  2.5% |       2 | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:346` |

##### `==` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/promotion.jl:641`)

|      % | Samples | Location                                                                                         |
| -----: | ------: | ------------------------------------------------------------------------------------------------ |
| 100.0% |      77 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/promotion.jl:641` |

##### `Dict` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:80`)

|      % | Samples | Location                                                                                   |
| -----: | ------: | ------------------------------------------------------------------------------------------ |
| 100.0% |      73 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:80` |

##### `|` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:418`)

|      % | Samples | Location                                                                                   |
| -----: | ------: | ------------------------------------------------------------------------------------------ |
| 100.0% |      70 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:418` |

##### `setindex!(::Dict{Symbol, Int64}, ::Int64, ::Symbol)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:356`)

|     % | Samples | Location                                                                                    |
| ----: | ------: | ------------------------------------------------------------------------------------------- |
| 73.9% |      51 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:368` |
| 26.1% |      18 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:356` |

##### `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`)

|     % | Samples | Location                                                                                                |
| ----: | ------: | ------------------------------------------------------------------------------------------------------- |
| 46.0% |      29 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:60`  |
| 12.7% |       8 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:200` |
|  9.5% |       6 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:187` |
|  6.3% |       4 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:72`  |
|  3.2% |       2 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:73`  |

##### `write(::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:340`)

|      % | Samples | Location                                                           |
| -----: | ------: | ------------------------------------------------------------------ |
| 100.0% |      35 | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:340` |

##### `var\"#write#84\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.BoolType, ::Vector{UInt8}, ::Int64, ::Int64, ::Bool)` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:209`)

|     % | Samples | Location                                                           |
| ----: | ------: | ------------------------------------------------------------------ |
| 69.2% |      18 | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:209` |
| 26.9% |       7 | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:215` |
|  3.8% |       1 | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:210` |

##### `var\"#write#86\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.NumberType, ::Vector{UInt8}, ::Int64, ::Int64, ::Int64)` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:224`)

|     % | Samples | Location                                                           |
| ----: | ------: | ------------------------------------------------------------------ |
| 56.0% |      14 | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:236` |
| 44.0% |      11 | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:224` |

##### `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40`)

|     % | Samples | Location                                                          |
| ----: | ------: | ----------------------------------------------------------------- |
| 17.4% |       4 | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:55` |
| 13.0% |       3 | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:51` |
| 13.0% |       3 | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40` |
|  8.7% |       2 | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:47` |

##### `macro expansion` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:23`)

|      % | Samples | Location                                                          |
| -----: | ------: | ----------------------------------------------------------------- |
| 100.0% |      23 | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:23` |

##### `write(::StructTypes.BoolType, ::Vector{UInt8}, ::Int64, ::Int64, ::Bool)` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:209`)

|      % | Samples | Location                                                           |
| -----: | ------: | ------------------------------------------------------------------ |
| 100.0% |      21 | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:209` |

##### `macro expansion` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:14`)

|      % | Samples | Location                                                          |
| -----: | ------: | ----------------------------------------------------------------- |
| 100.0% |      19 | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:14` |

##### `unescape(::JSON3.PointerString)` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/strings.jl:48`)

|     % | Samples | Location                                                             |
| ----: | ------: | -------------------------------------------------------------------- |
| 33.3% |       6 | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/strings.jl:54`  |
| 27.8% |       5 | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/strings.jl:116` |

#### Callers

Callers with the largest contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `_symbol` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`)

|      % | Samples | Caller     | Location                                                           |
| -----: | ------: | ---------- | ------------------------------------------------------------------ |
| 100.0% |   6,675 | `getvalue` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:187` |

##### `#write#79` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:157`)

|     % | Samples | Caller               | Location                                                           |
| ----: | ------: | -------------------- | ------------------------------------------------------------------ |
| 99.9% |   6,196 | `[unknown function]` | `<unknown>`                                                        |
|  0.1% |       4 | `write`              | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:147` |
| <0.1% |       2 | `#write#79`          | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:157` |

##### `indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64, ::Int64)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`)

|      % | Samples | Caller      | Location                                                           |
| -----: | ------: | ----------- | ------------------------------------------------------------------ |
| 100.0% |   2,072 | `#write#79` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:157` |

##### `indexed_iterate` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`)

|     % | Samples | Caller                                                           | Location                                                                                            |
| ----: | ------: | ---------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| 64.9% |     798 | `indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`        |
| 29.4% |     361 | `#write#79`                                                      | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:157`                                  |
|  5.0% |      62 | `indexed_iterate`                                                | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`        |
|  0.7% |       8 | `#write#81`                                                      | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl` |

##### `GenericMemory` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:588`)

|     % | Samples | Caller                                    | Location                                                                                      |
| ----: | ------: | ----------------------------------------- | --------------------------------------------------------------------------------------------- |
| 74.7% |     734 | `Array`                                   | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:648`   |
| 24.8% |     244 | `rehash!(::Dict{Symbol, Int64}, ::Int64)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:138`   |
|  0.5% |       5 | `array_new_memory`                        | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:1101` |

##### `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` (`<unknown>`)

|     % | Samples | Caller               | Location                                                                                     |
| ----: | ------: | -------------------- | -------------------------------------------------------------------------------------------- |
| 86.9% |     812 | `[unknown function]` | `<unknown>`                                                                                  |
| 12.4% |     116 | `MappingRF`          | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98` |
|  0.6% |       6 | `_foldl_impl`        | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60` |

##### `unsafe_load` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/pointer.jl:151`)

|      % | Samples | Caller        | Location                                                                                       |
| -----: | ------: | ------------- | ---------------------------------------------------------------------------------------------- |
| 100.0% |     486 | `unsafe_load` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/pointer.jl:151` |

##### `ht_keyindex2_shorthash!(::Dict{Symbol, Int64}, ::Symbol)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:267`)

|     % | Samples | Caller                                                                                                                             | Location                                                                                    |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| 88.9% |     418 | `setindex!(::Dict{Symbol, Int64}, ::Int64, ::Symbol)`                                                                              | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:356` |
| 11.1% |      52 | `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40`                           |

##### `iterate` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:75`)

|     % | Samples | Caller                                                                                                                       | Location                                                                                           |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| 60.5% |     196 | `#write#79`                                                                                                                  | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:157`                                 |
| 29.3% |      95 | `iterate`                                                                                                                    | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:75`                                  |
|  9.3% |      30 | `iterate`                                                                                                                    | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/iterators.jl:697`   |
|  0.9% |       3 | `isempty(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:1127` |

##### `+` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:87`)

|     % | Samples | Caller                                                                                                                                                                                                                           | Location                                                                                              |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| 27.6% |      82 | `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})`                                                                                               | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40`                                     |
| 21.5% |      64 | `macro expansion`                                                                                                                                                                                                                | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:24`                                     |
| 13.1% |      39 | `length_continued`                                                                                                                                                                                                               | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:559` |
|  7.1% |      21 | `var\"#write#98\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)`                                                          | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:340`                                    |
|  6.7% |      20 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:218`                                     |

##### `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`)

|     % | Samples | Caller                                                                       | Location                                                                                     |
| ----: | ------: | ---------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| 99.6% |     239 | `foldl_impl`                                                                 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:46` |
|  0.4% |       1 | `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` | `<unknown>`                                                                                  |

##### `BottomRF` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:84`)

|     % | Samples | Caller               | Location                                                                                     |
| ----: | ------: | -------------------- | -------------------------------------------------------------------------------------------- |
| 99.1% |     223 | `[unknown function]` | `<unknown>`                                                                                  |
|  0.9% |       2 | `MappingRF`          | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98` |

##### `[unknown function]` (`<unknown>`)

|     % | Samples | Caller                                                                       | Location                                                                                            |
| ----: | ------: | ---------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| 51.0% |     104 | `#write#79`                                                                  | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:157`                                  |
| 30.9% |      63 | `_foldl_impl`                                                                | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`        |
| 13.2% |      27 | `#write#81`                                                                  | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl` |
|  2.5% |       5 | `parse_workload`                                                             | `./profile.jl:18`                                                                                   |
|  2.0% |       4 | `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` | `<unknown>`                                                                                         |

##### `_setindex!` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:1025`)

|     % | Samples | Caller               | Location                                                                                      |
| ----: | ------: | -------------------- | --------------------------------------------------------------------------------------------- |
| 96.0% |     194 | `setindex!`          | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:1020` |
|  4.0% |       8 | `[unknown function]` | `<unknown>`                                                                                   |

##### `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:218`)

|     % | Samples | Caller                                                                                                                                                                               | Location                                                          |
| ----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------- |
| 98.0% |     195 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:218` |
|  2.0% |       4 | `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)`                         | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:87`  |

##### `getindex` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:975`)

|     % | Samples | Caller                                                                                                                                                                                                                           | Location                                                                                        |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| 56.9% |      91 | `macro expansion`                                                                                                                                                                                                                | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:332`                              |
| 19.4% |      31 | `getindex`                                                                                                                                                                                                                       | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/subarray.jl:334` |
| 18.8% |      30 | `var\"#write#98\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)`                                                          | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:340`                              |
|  3.1% |       5 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:218`                               |
|  0.6% |       1 | `var\"#read!#9\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Array}, ::Bool)`  | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:312`                               |

##### `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{String})` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:142`)

|     % | Samples | Caller                                                                                                                                                                      | Location                                                         |
| ----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| 97.7% |     127 | `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)`                | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:87` |
|  2.3% |       3 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:87` |

##### `checkbounds` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/basic.jl:212`)

|      % | Samples | Caller     | Location                                                                                              |
| -----: | ------: | ---------- | ----------------------------------------------------------------------------------------------------- |
| 100.0% |     128 | `codeunit` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:166` |

##### `#write#81` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:73`)

|      % | Samples | Caller               | Location    |
| -----: | ------: | -------------------- | ----------- |
| 100.0% |     121 | `[unknown function]` | `<unknown>` |

##### `unsafe_string` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:130`)

|      % | Samples | Caller   | Location                                                                                              |
| -----: | ------: | -------- | ----------------------------------------------------------------------------------------------------- |
| 100.0% |     117 | `String` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:145` |

##### `unsafe_string` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:126`)

|      % | Samples | Caller     | Location                                                           |
| -----: | ------: | ---------- | ------------------------------------------------------------------ |
| 100.0% |      97 | `getvalue` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:195` |

##### `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:87`)

|     % | Samples | Caller                                                                                                                                                                                                                           | Location                                                          |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| 80.0% |      72 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)`                                                      | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:87`  |
| 18.9% |      17 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:218` |
|  1.1% |       1 | `var\"#read!#9\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Array}, ::Bool)`  | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:312` |

##### `length_continued` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/pointer.jl`)

|      % | Samples | Caller             | Location                                                                                              |
| -----: | ------: | ------------------ | ----------------------------------------------------------------------------------------------------- |
| 100.0% |      89 | `length(::String)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:540` |

##### `getproperty` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base_compiler.jl:57`)

|     % | Samples | Caller                                                     | Location                                                                                      |
| ----: | ------: | ---------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| 54.8% |      46 | `_setindex!`                                               | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:331`   |
| 10.7% |       9 | `_setindex!`                                               | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:1025` |
| 10.7% |       9 | `_setindex!`                                               | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:327`   |
|  9.5% |       8 | `ht_keyindex2_shorthash!(::Dict{Symbol, Int64}, ::Symbol)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:267`   |
|  7.1% |       6 | `_setindex!`                                               | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:325`   |

##### `getvalue` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:215`)

|      % | Samples | Caller    | Location                                                          |
| -----: | ------: | --------- | ----------------------------------------------------------------- |
| 100.0% |      82 | `iterate` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:81` |

##### `var\"#write#98\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:340`)

|     % | Samples | Caller                                                                         | Location                                                           |
| ----: | ------: | ------------------------------------------------------------------------------ | ------------------------------------------------------------------ |
| 61.3% |      49 | `write(::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:340` |
| 38.8% |      31 | `#write#79`                                                                    | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:157` |

##### `==` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/promotion.jl:641`)

|     % | Samples | Caller                                                                                                         | Location                                                                                         |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 62.3% |      48 | `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{String})` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:142`                                |
| 19.5% |      15 | `ht_keyindex2_shorthash!(::Dict{Symbol, Int64}, ::Symbol)`                                                     | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:267`      |
|  6.5% |       5 | `isarray`                                                                                                      | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:61`                                |
|  6.5% |       5 | `promoteeltype`                                                                                                | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:100`                               |
|  1.3% |       1 | `!=`                                                                                                           | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/operators.jl:320` |

##### `Dict` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:80`)

|      % | Samples | Caller     | Location                                                           |
| -----: | ------: | ---------- | ------------------------------------------------------------------ |
| 100.0% |      73 | `getvalue` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:126` |

##### `|` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:418`)

|     % | Samples | Caller          | Location                                                          |
| ----: | ------: | --------------- | ----------------------------------------------------------------- |
| 95.7% |      67 | `string`        | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:88` |
|  4.3% |       3 | `promoteeltype` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:96` |

##### `setindex!(::Dict{Symbol, Int64}, ::Int64, ::Symbol)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:356`)

|     % | Samples | Caller                                                                                                                             | Location                                                           |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| 72.5% |      50 | `getvalue`                                                                                                                         | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:127` |
| 26.1% |      18 | `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40`  |
|  1.4% |       1 | `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, Vector{UInt64}})`                                                     | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40`  |

##### `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`)

|      % | Samples | Caller               | Location    |
| -----: | ------: | -------------------- | ----------- |
| 100.0% |      63 | `[unknown function]` | `<unknown>` |

##### `iterate` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl`)

|     % | Samples | Caller      | Location                                                                                         |
| ----: | ------: | ----------- | ------------------------------------------------------------------------------------------------ |
| 59.0% |      23 | `#write#79` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:157`                               |
| 25.6% |      10 | `iterate`   | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:75`                                |
| 15.4% |       6 | `iterate`   | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/iterators.jl:697` |

##### `getvalue` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl`)

|     % | Samples | Caller    | Location                                                          |
| ----: | ------: | --------- | ----------------------------------------------------------------- |
| 74.3% |      26 | `iterate` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:81` |
| 25.7% |       9 | `iterate` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:78` |

##### `write(::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:340`)

|      % | Samples | Caller      | Location                                                           |
| -----: | ------: | ----------- | ------------------------------------------------------------------ |
| 100.0% |      35 | `#write#79` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:157` |

##### `var\"#write#84\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.BoolType, ::Vector{UInt8}, ::Int64, ::Int64, ::Bool)` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:209`)

|     % | Samples | Caller                                                                     | Location                                                           |
| ----: | ------: | -------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| 61.5% |      16 | `write(::StructTypes.BoolType, ::Vector{UInt8}, ::Int64, ::Int64, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:209` |
| 38.5% |      10 | `#write#79`                                                                | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:157` |

##### `var\"#write#86\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.NumberType, ::Vector{UInt8}, ::Int64, ::Int64, ::Int64)` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:224`)

|     % | Samples | Caller                                                                        | Location                                                           |
| ----: | ------: | ----------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| 88.0% |      22 | `write(::StructTypes.NumberType, ::Vector{UInt8}, ::Int64, ::Int64, ::Int64)` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:224` |
| 12.0% |       3 | `#write#79`                                                                   | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:157` |

##### `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40`)

|     % | Samples | Caller               | Location                                                                                     |
| ----: | ------: | -------------------- | -------------------------------------------------------------------------------------------- |
| 82.6% |      19 | `getvalue`           | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:127`                           |
| 13.0% |       3 | `[unknown function]` | `<unknown>`                                                                                  |
|  4.3% |       1 | `foldl_impl`         | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:46` |

##### `macro expansion` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:23`)

|     % | Samples | Caller                                                                                                                                                                                                                           | Location                                                          |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| 95.7% |      22 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:218` |
|  4.3% |       1 | `var\"#read!#9\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Array}, ::Bool)`  | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:312` |

##### `write(::StructTypes.BoolType, ::Vector{UInt8}, ::Int64, ::Int64, ::Bool)` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:209`)

|      % | Samples | Caller      | Location                                                           |
| -----: | ------: | ----------- | ------------------------------------------------------------------ |
| 100.0% |      21 | `#write#79` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:157` |

##### `macro expansion` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:14`)

|      % | Samples | Caller                                                                                                                                                                                                                           | Location                                                          |
| -----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| 100.0% |      19 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:218` |

##### `unescape(::JSON3.PointerString)` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/strings.jl:48`)

|      % | Samples | Caller     | Location                                                           |
| -----: | ------: | ---------- | ------------------------------------------------------------------ |
| 100.0% |      18 | `getvalue` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:193` |

##### `getvalue(::Type{JSON3.Array}, ::Base.CodeUnits{UInt8, String}, ::SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}, ::Int64, ::UInt64)` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:131`)

|     % | Samples | Caller               | Location                                                                                     |
| ----: | ------: | -------------------- | -------------------------------------------------------------------------------------------- |
| 70.6% |      12 | `getvalue`           | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:216`                           |
| 17.6% |       3 | `[unknown function]` | `<unknown>`                                                                                  |
| 11.8% |       2 | `foldl_impl`         | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:46` |

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
| 77.6% |  23,486 | `[unknown function]`                                               | `<unknown>`                                                                                                       |
| 77.6% |  23,486 | `parse_workload`                                                   | `./profile.jl:18`                                                                                                 |
| 77.6% |  23,486 | `macro expansion`                                                  | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/stdlib/v1.13/Profile/src/Profile.jl:82` |
| 77.6% |  23,486 | `capture_wall`                                                     | `./profile.jl:43`                                                                                                 |
| 77.6% |  23,486 | `eval(::Module, ::Any)`                                            | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:489`                       |
| 77.6% |  23,486 | `include_string(::typeof(identity), ::Module, ::String, ::String)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/loading.jl:2989`                   |
| 77.6% |  23,486 | `_include(::Function, ::Module, ::String)`                         | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/loading.jl:3083`                   |
| 77.6% |  23,486 | `include(::Module, ::String)`                                      | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base.jl:309`                       |
| 77.6% |  23,486 | `exec_options(::Base.JLOptions)`                                   | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/client.jl:234`                     |
| 77.6% |  23,486 | `_start()`                                                         | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/client.jl:570`                     |
| 71.8% |  21,743 | `#write#58`                                                        | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:40`                                                 |
| 53.8% |  16,288 | `write`                                                            | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:147`                                                |
| 53.8% |  16,285 | `#write#79`                                                        | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:157`                                                |
| 53.6% |  16,235 | `#write#81`                                                        | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`               |
| 22.4% |   6,789 | `(anonymous)`                                                      | `<unknown>`                                                                                                       |
| 22.0% |   6,675 | `_symbol`                                                          | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`                                                  |
| 22.0% |   6,675 | `getvalue`                                                         | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:187`                                                |
| 18.0% |   5,442 | `defaultminimum`                                                   | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:12`                                                 |
| 18.0% |   5,440 | `foldl_impl`                                                       | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:46`                      |
| 18.0% |   5,440 | `mapfoldl_impl`                                                    | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:42`                      |

#### Categories

Categories accounting for at least 1.0% of self samples.

##### Third-party

|     % | Samples | Function                                                                                                                                                                                                                         | Location                                                           |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| 71.8% |  21,743 | `#write#58`                                                                                                                                                                                                                      | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:40`  |
| 53.8% |  16,288 | `write`                                                                                                                                                                                                                          | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:147` |
| 53.8% |  16,285 | `#write#79`                                                                                                                                                                                                                      | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:157` |
| 22.0% |   6,675 | `_symbol`                                                                                                                                                                                                                        | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`   |
| 22.0% |   6,675 | `getvalue`                                                                                                                                                                                                                       | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:187` |
| 18.0% |   5,442 | `defaultminimum`                                                                                                                                                                                                                 | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:12`  |
| 16.0% |   4,837 | `getvalue`                                                                                                                                                                                                                       | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:127` |
| 15.8% |   4,786 | `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})`                                                                                               | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40`  |
| 12.4% |   3,759 | `iterate`                                                                                                                                                                                                                        | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:81`  |
| 10.8% |   3,279 | `getvalue`                                                                                                                                                                                                                       | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:214` |
| 10.1% |   3,046 | `iterate`                                                                                                                                                                                                                        | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:78`  |
|  5.5% |   1,650 | `getindex`                                                                                                                                                                                                                       | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:163` |
|  4.4% |   1,322 | `var\"#read#6\"(::Bool, ::Nothing, ::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.read), ::String)`                                                                                                       | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:30`   |
|  4.4% |   1,322 | `read`                                                                                                                                                                                                                           | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:30`   |
|  4.0% |   1,215 | `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)`                                                                     | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:87`   |
|  4.0% |   1,215 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:218`  |
|  4.0% |   1,215 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)`                                             | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:218`  |
|  4.0% |   1,215 | `read!`                                                                                                                                                                                                                          | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:87`   |
|  4.0% |   1,211 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)`                                                      | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:87`   |
|  4.0% |   1,208 | `var\"#read!#9\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Array}, ::Bool)`  | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:312`  |

##### Standard library

|     % | Samples | Function                                                           | Location                                                                                                          |
| ----: | ------: | ------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| 77.6% |  23,486 | `macro expansion`                                                  | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/stdlib/v1.13/Profile/src/Profile.jl:82` |
| 77.6% |  23,486 | `eval(::Module, ::Any)`                                            | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:489`                       |
| 77.6% |  23,486 | `include_string(::typeof(identity), ::Module, ::String, ::String)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/loading.jl:2989`                   |
| 77.6% |  23,486 | `_include(::Function, ::Module, ::String)`                         | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/loading.jl:3083`                   |
| 77.6% |  23,486 | `include(::Module, ::String)`                                      | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base.jl:309`                       |
| 77.6% |  23,486 | `exec_options(::Base.JLOptions)`                                   | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/client.jl:234`                     |
| 77.6% |  23,486 | `_start()`                                                         | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/client.jl:570`                     |
| 53.6% |  16,235 | `#write#81`                                                        | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`               |
| 18.0% |   5,440 | `foldl_impl`                                                       | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:46`                      |
| 18.0% |   5,440 | `mapfoldl_impl`                                                    | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:42`                      |
| 18.0% |   5,440 | `#mapfoldl#271`                                                    | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:173`                     |
| 18.0% |   5,440 | `mapfoldl`                                                         | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:173`                     |
| 18.0% |   5,440 | `#mapreduce#275`                                                   | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:306`                     |
| 18.0% |   5,440 | `mapreduce`                                                        | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:306`                     |
| 18.0% |   5,440 | `#sum#278`                                                         | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:535`                     |
| 18.0% |   5,440 | `sum`                                                              | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:535`                     |
| 18.0% |   5,440 | `#sum#279`                                                         | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:564`                     |
| 18.0% |   5,440 | `sum`                                                              | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:564`                     |
| 18.0% |   5,440 | `_foldl_impl`                                                      | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:56`                      |
| 17.9% |   5,429 | `MappingRF`                                                        | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98`                      |

##### Unknown

|     % | Samples | Function      | Location    |
| ----: | ------: | ------------- | ----------- |
| 22.4% |   6,789 | `(anonymous)` | `<unknown>` |

##### Native

|     % | Samples | Function                                                                                                                                                                                | Location    |
| ----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 77.6% |  23,486 | `[unknown function]`                                                                                                                                                                    | `<unknown>` |
| 17.9% |   5,430 | `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})`                                                                                                            | `<unknown>` |
| 17.9% |   5,410 | `#defaultminimum##0`                                                                                                                                                                    | `<unknown>` |
| <0.1% |       4 | `(::JSON3.var\"#defaultminimum##0#defaultminimum##1\"{JSON3.Array{Int64, Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}}})(::Int64)` | `<unknown>` |

#### Callers

Callers with the largest contribution to each function's total samples. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `[unknown function]` (`<unknown>`)

|      % | Samples | Caller                                                                       | Location                                                                                            |
| -----: | ------: | ---------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| 100.0% |  23,486 | `eval(::Module, ::Any)`                                                      | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:489`         |
|  92.6% |  21,748 | `parse_workload`                                                             | `./profile.jl:18`                                                                                   |
|  69.2% |  16,255 | `#write#79`                                                                  | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:157`                                  |
|  65.9% |  15,477 | `#write#81`                                                                  | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl` |
|  23.1% |   5,424 | `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` | `<unknown>`                                                                                         |

##### `parse_workload` (`./profile.jl:18`)

|      % | Samples | Caller            | Location                                                                                                          |
| -----: | ------: | ----------------- | ----------------------------------------------------------------------------------------------------------------- |
| 100.0% |  23,486 | `macro expansion` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/stdlib/v1.13/Profile/src/Profile.jl:82` |

##### `macro expansion` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/stdlib/v1.13/Profile/src/Profile.jl:82`)

|      % | Samples | Caller         | Location          |
| -----: | ------: | -------------- | ----------------- |
| 100.0% |  23,486 | `capture_wall` | `./profile.jl:43` |

##### `capture_wall` (`./profile.jl:43`)

|      % | Samples | Caller               | Location    |
| -----: | ------: | -------------------- | ----------- |
| 100.0% |  23,486 | `[unknown function]` | `<unknown>` |

##### `eval(::Module, ::Any)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:489`)

|      % | Samples | Caller                                                             | Location                                                                                        |
| -----: | ------: | ------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------- |
| 100.0% |  23,486 | `include_string(::typeof(identity), ::Module, ::String, ::String)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/loading.jl:2989` |

##### `include_string(::typeof(identity), ::Module, ::String, ::String)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/loading.jl:2989`)

|      % | Samples | Caller                                     | Location                                                                                        |
| -----: | ------: | ------------------------------------------ | ----------------------------------------------------------------------------------------------- |
| 100.0% |  23,486 | `_include(::Function, ::Module, ::String)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/loading.jl:3083` |

##### `_include(::Function, ::Module, ::String)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/loading.jl:3083`)

|      % | Samples | Caller                        | Location                                                                                    |
| -----: | ------: | ----------------------------- | ------------------------------------------------------------------------------------------- |
| 100.0% |  23,486 | `include(::Module, ::String)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base.jl:309` |

##### `include(::Module, ::String)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base.jl:309`)

|      % | Samples | Caller                           | Location                                                                                      |
| -----: | ------: | -------------------------------- | --------------------------------------------------------------------------------------------- |
| 100.0% |  23,486 | `exec_options(::Base.JLOptions)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/client.jl:234` |

##### `exec_options(::Base.JLOptions)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/client.jl:234`)

|      % | Samples | Caller     | Location                                                                                      |
| -----: | ------: | ---------- | --------------------------------------------------------------------------------------------- |
| 100.0% |  23,486 | `_start()` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/client.jl:570` |

##### `#write#58` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:40`)

|      % | Samples | Caller               | Location    |
| -----: | ------: | -------------------- | ----------- |
| 100.0% |  21,743 | `[unknown function]` | `<unknown>` |

##### `write` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:147`)

|      % | Samples | Caller      | Location                                                          |
| -----: | ------: | ----------- | ----------------------------------------------------------------- |
| 100.0% |  16,288 | `#write#58` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:40` |

##### `#write#79` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:157`)

|      % | Samples | Caller               | Location                                                           |
| -----: | ------: | -------------------- | ------------------------------------------------------------------ |
| 100.0% |  16,285 | `write`              | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:147` |
|  95.0% |  15,477 | `[unknown function]` | `<unknown>`                                                        |
|  <0.1% |       2 | `#write#79`          | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:157` |

##### `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`)

|      % | Samples | Caller               | Location    |
| -----: | ------: | -------------------- | ----------- |
| 100.0% |  16,235 | `[unknown function]` | `<unknown>` |

##### `_symbol` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`)

|      % | Samples | Caller     | Location                                                           |
| -----: | ------: | ---------- | ------------------------------------------------------------------ |
| 100.0% |   6,675 | `getvalue` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:187` |

##### `getvalue` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:187`)

|     % | Samples | Caller                                                                                                                             | Location                                                          |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| 54.8% |   3,655 | `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40` |
| 45.2% |   3,019 | `iterate`                                                                                                                          | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:78` |
| <0.1% |       1 | `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, Vector{UInt64}})`                                                     | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40` |

##### `defaultminimum` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:12`)

|      % | Samples | Caller               | Location                                                          |
| -----: | ------: | -------------------- | ----------------------------------------------------------------- |
| 100.0% |   5,442 | `#write#58`          | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:40` |
|  89.6% |   4,877 | `#defaultminimum##0` | `<unknown>`                                                       |

##### `foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:46`)

|      % | Samples | Caller          | Location                                                                                     |
| -----: | ------: | --------------- | -------------------------------------------------------------------------------------------- |
| 100.0% |   5,440 | `mapfoldl_impl` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:42` |

##### `mapfoldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:42`)

|      % | Samples | Caller          | Location                                                                                      |
| -----: | ------: | --------------- | --------------------------------------------------------------------------------------------- |
| 100.0% |   5,440 | `#mapfoldl#271` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:173` |

##### `#mapfoldl#271` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:173`)

|      % | Samples | Caller     | Location                                                                                      |
| -----: | ------: | ---------- | --------------------------------------------------------------------------------------------- |
| 100.0% |   5,440 | `mapfoldl` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:173` |

##### `mapfoldl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:173`)

|      % | Samples | Caller           | Location                                                                                      |
| -----: | ------: | ---------------- | --------------------------------------------------------------------------------------------- |
| 100.0% |   5,440 | `#mapreduce#275` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:306` |

##### `#mapreduce#275` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:306`)

|      % | Samples | Caller      | Location                                                                                      |
| -----: | ------: | ----------- | --------------------------------------------------------------------------------------------- |
| 100.0% |   5,440 | `mapreduce` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:306` |

##### `mapreduce` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:306`)

|      % | Samples | Caller     | Location                                                                                      |
| -----: | ------: | ---------- | --------------------------------------------------------------------------------------------- |
| 100.0% |   5,440 | `#sum#278` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:535` |

##### `#sum#278` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:535`)

|      % | Samples | Caller | Location                                                                                      |
| -----: | ------: | ------ | --------------------------------------------------------------------------------------------- |
| 100.0% |   5,440 | `sum`  | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:535` |

##### `sum` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:535`)

|      % | Samples | Caller                                                                                                                                    | Location                                                                                      |
| -----: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| 100.0% |   5,440 | `#sum#279`                                                                                                                                | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:564` |
|  99.7% |   5,421 | `[unknown function]`                                                                                                                      | `<unknown>`                                                                                   |
|   0.1% |       3 | `defaultminimum(::JSON3.Array{Int64, Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:11`                             |

##### `#sum#279` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:564`)

|      % | Samples | Caller | Location                                                                                      |
| -----: | ------: | ------ | --------------------------------------------------------------------------------------------- |
| 100.0% |   5,440 | `sum`  | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:564` |

##### `sum` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:564`)

|      % | Samples | Caller               | Location                                                          |
| -----: | ------: | -------------------- | ----------------------------------------------------------------- |
| 100.0% |   5,440 | `defaultminimum`     | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:12` |
|  60.6% |   3,299 | `[unknown function]` | `<unknown>`                                                       |

##### `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:56`)

|      % | Samples | Caller       | Location                                                                                     |
| -----: | ------: | ------------ | -------------------------------------------------------------------------------------------- |
| 100.0% |   5,440 | `foldl_impl` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:46` |

##### `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` (`<unknown>`)

|      % | Samples | Caller               | Location                                                                                     |
| -----: | ------: | -------------------- | -------------------------------------------------------------------------------------------- |
| 100.0% |   5,428 | `MappingRF`          | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98` |
|  64.3% |   3,492 | `[unknown function]` | `<unknown>`                                                                                  |
|   0.1% |       6 | `_foldl_impl`        | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60` |

##### `MappingRF` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98`)

|      % | Samples | Caller               | Location                                                                                     |
| -----: | ------: | -------------------- | -------------------------------------------------------------------------------------------- |
| 100.0% |   5,428 | `_foldl_impl`        | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:56` |
|   6.1% |     329 | `_foldl_impl`        | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60` |
|   0.1% |       8 | `[unknown function]` | `<unknown>`                                                                                  |

##### `#defaultminimum##0` (`<unknown>`)

|      % | Samples | Caller               | Location    |
| -----: | ------: | -------------------- | ----------- |
| 100.0% |   5,410 | `[unknown function]` | `<unknown>` |

##### `getvalue` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:127`)

|     % | Samples | Caller     | Location                                                           |
| ----: | ------: | ---------- | ------------------------------------------------------------------ |
| 66.9% |   3,235 | `getvalue` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:214` |
| 33.1% |   1,602 | `getindex` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:163` |

##### `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40`)

|     % | Samples | Caller               | Location                                                                                     |
| ----: | ------: | -------------------- | -------------------------------------------------------------------------------------------- |
| 99.9% |   4,782 | `getvalue`           | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:127`                           |
|  0.1% |       3 | `[unknown function]` | `<unknown>`                                                                                  |
| <0.1% |       1 | `foldl_impl`         | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:46` |

##### `iterate` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:81`)

|     % | Samples | Caller      | Location                                                                                         |
| ----: | ------: | ----------- | ------------------------------------------------------------------------------------------------ |
| 48.9% |   1,837 | `#write#79` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:157`                               |
| 40.6% |   1,527 | `iterate`   | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/iterators.jl:697` |
| 10.5% |     395 | `iterate`   | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:75`                                |

##### `getvalue` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:214`)

|      % | Samples | Caller    | Location                                                          |
| -----: | ------: | --------- | ----------------------------------------------------------------- |
| 100.0% |   3,279 | `iterate` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:81` |

##### `iterate` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:78`)

|     % | Samples | Caller      | Location                                                                                         |
| ----: | ------: | ----------- | ------------------------------------------------------------------------------------------------ |
| 52.3% |   1,594 | `#write#79` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:157`                               |
| 37.9% |   1,154 | `iterate`   | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/iterators.jl:697` |
|  9.8% |     298 | `iterate`   | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:75`                                |

##### `getindex` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:163`)

|     % | Samples | Caller                                                                                                                                                                                                                                                                                | Location                                                                                                 |
| ----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| 60.4% |     997 | `isassigned`                                                                                                                                                                                                                                                                          | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:1641` |
| 21.8% |     360 | `#write#81`                                                                                                                                                                                                                                                                           | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`      |
| 17.7% |     292 | `#defaultminimum##0`                                                                                                                                                                                                                                                                  | `<unknown>`                                                                                              |
|  0.1% |       1 | `var\"#write#81\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.ArrayType, ::Vector{UInt8}, ::Int64, ::Int64, ::JSON3.Array{Int64, Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:181`                                       |

##### `var\"#read#6\"(::Bool, ::Nothing, ::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.read), ::String)` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:30`)

|      % | Samples | Caller | Location                                                         |
| -----: | ------: | ------ | ---------------------------------------------------------------- |
| 100.0% |   1,322 | `read` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:30` |

##### `read` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:30`)

|      % | Samples | Caller           | Location          |
| -----: | ------: | ---------------- | ----------------- |
| 100.0% |   1,322 | `parse_workload` | `./profile.jl:18` |

##### `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:87`)

|      % | Samples | Caller                                                                                                                                                                                                                           | Location                                                          |
| -----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| 100.0% |   1,215 | `read!`                                                                                                                                                                                                                          | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:87`  |
|  99.7% |   1,211 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)`                                                      | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:87`  |
|   1.4% |      17 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:218` |
|   0.1% |       1 | `var\"#read!#9\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Array}, ::Bool)`  | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:312` |

##### `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:218`)

|      % | Samples | Caller                                                                                                                                                                               | Location                                                          |
| -----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------- |
| 100.0% |   1,215 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:218` |
|   0.3% |       4 | `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)`                         | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:87`  |

##### `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:218`)

|      % | Samples | Caller                                                                                                                                                       | Location                                                         |
| -----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------- |
| 100.0% |   1,215 | `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:87` |

##### `read!` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:87`)

|      % | Samples | Caller                                                                                                                     | Location                                                         |
| -----: | ------: | -------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| 100.0% |   1,215 | `var\"#read#6\"(::Bool, ::Nothing, ::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.read), ::String)` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:30` |

##### `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:87`)

|      % | Samples | Caller                                                                                                                                                                                                                           | Location                                                          |
| -----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| 100.0% |   1,211 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:218` |
|  99.5% |   1,205 | `var\"#read!#9\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Array}, ::Bool)`  | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:312` |
|   0.4% |       5 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)`                                             | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:218` |

##### `var\"#read!#9\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Array}, ::Bool)` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:312`)

|      % | Samples | Caller                                                                                                                                                                              | Location                                                          |
| -----: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| 100.0% |   1,208 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Array}, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:312` |
|   0.2% |       3 | `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)`                        | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:87`  |

##### `(::JSON3.var\"#defaultminimum##0#defaultminimum##1\"{JSON3.Array{Int64, Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}}})(::Int64)` (`<unknown>`)

|     % | Samples | Caller                                                                       | Location                                                                                     |
| ----: | ------: | ---------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| 75.0% |       3 | `MappingRF`                                                                  | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98` |
| 25.0% |       1 | `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` | `<unknown>`                                                                                  |

#### Callees

Callees with the largest contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `[unknown function]` (`<unknown>`)

|      % | Samples | Callee         | Location                                                                                            |
| -----: | ------: | -------------- | --------------------------------------------------------------------------------------------------- |
| 100.0% |  23,486 | `capture_wall` | `./profile.jl:43`                                                                                   |
|  92.6% |  21,743 | `#write#58`    | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:40`                                   |
|  69.1% |  16,235 | `#write#81`    | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl` |
|  65.9% |  15,477 | `#write#79`    | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:157`                                  |
|  23.1% |   5,421 | `sum`          | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:535`       |

##### `parse_workload` (`./profile.jl:18`)

|     % | Samples | Callee               | Location                                                                                              |
| ----: | ------: | -------------------- | ----------------------------------------------------------------------------------------------------- |
| 92.6% |  21,748 | `[unknown function]` | `<unknown>`                                                                                           |
|  5.6% |   1,322 | `read`               | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:30`                                      |
|  1.5% |     362 | `length(::String)`   | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:540` |

##### `macro expansion` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/stdlib/v1.13/Profile/src/Profile.jl:82`)

|      % | Samples | Callee           | Location          |
| -----: | ------: | ---------------- | ----------------- |
| 100.0% |  23,486 | `parse_workload` | `./profile.jl:18` |

##### `capture_wall` (`./profile.jl:43`)

|      % | Samples | Callee            | Location                                                                                                          |
| -----: | ------: | ----------------- | ----------------------------------------------------------------------------------------------------------------- |
| 100.0% |  23,486 | `macro expansion` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/stdlib/v1.13/Profile/src/Profile.jl:82` |

##### `eval(::Module, ::Any)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:489`)

|      % | Samples | Callee               | Location    |
| -----: | ------: | -------------------- | ----------- |
| 100.0% |  23,486 | `[unknown function]` | `<unknown>` |

##### `include_string(::typeof(identity), ::Module, ::String, ::String)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/loading.jl:2989`)

|      % | Samples | Callee                  | Location                                                                                    |
| -----: | ------: | ----------------------- | ------------------------------------------------------------------------------------------- |
| 100.0% |  23,486 | `eval(::Module, ::Any)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:489` |

##### `_include(::Function, ::Module, ::String)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/loading.jl:3083`)

|      % | Samples | Callee                                                             | Location                                                                                        |
| -----: | ------: | ------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------- |
| 100.0% |  23,486 | `include_string(::typeof(identity), ::Module, ::String, ::String)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/loading.jl:2989` |

##### `include(::Module, ::String)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base.jl:309`)

|      % | Samples | Callee                                     | Location                                                                                        |
| -----: | ------: | ------------------------------------------ | ----------------------------------------------------------------------------------------------- |
| 100.0% |  23,486 | `_include(::Function, ::Module, ::String)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/loading.jl:3083` |

##### `exec_options(::Base.JLOptions)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/client.jl:234`)

|      % | Samples | Callee                        | Location                                                                                    |
| -----: | ------: | ----------------------------- | ------------------------------------------------------------------------------------------- |
| 100.0% |  23,486 | `include(::Module, ::String)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base.jl:309` |

##### `_start()` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/client.jl:570`)

|      % | Samples | Callee                           | Location                                                                                      |
| -----: | ------: | -------------------------------- | --------------------------------------------------------------------------------------------- |
| 100.0% |  23,486 | `exec_options(::Base.JLOptions)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/client.jl:234` |

##### `#write#58` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:40`)

|     % | Samples | Callee                    | Location                                                                                             |
| ----: | ------: | ------------------------- | ---------------------------------------------------------------------------------------------------- |
| 74.9% |  16,288 | `write`                   | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:147`                                   |
| 25.0% |   5,442 | `defaultminimum`          | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:12`                                    |
| <0.1% |       7 | `String(::Vector{UInt8})` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:66` |
| <0.1% |       1 | `StringVector`            | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/iobuffer.jl:168`      |

##### `write` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:147`)

|      % | Samples | Callee      | Location                                                           |
| -----: | ------: | ----------- | ------------------------------------------------------------------ |
| 100.0% |  16,285 | `#write#79` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:157` |

##### `#write#79` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:157`)

|     % | Samples | Callee                                                                         | Location                                                                                     |
| ----: | ------: | ------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------- |
| 99.8% |  16,255 | `[unknown function]`                                                           | `<unknown>`                                                                                  |
| 12.7% |   2,072 | `indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64, ::Int64)`      | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163` |
| 11.3% |   1,837 | `iterate`                                                                      | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:81`                            |
|  9.8% |   1,594 | `iterate`                                                                      | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:78`                            |
|  7.1% |   1,152 | `write(::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:340`                           |

##### `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`)

|     % | Samples | Callee               | Location                                                                                                 |
| ----: | ------: | -------------------- | -------------------------------------------------------------------------------------------------------- |
| 95.3% |  15,477 | `[unknown function]` | `<unknown>`                                                                                              |
|  3.5% |     563 | `isassigned`         | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:1641` |
|  2.2% |     360 | `getindex`           | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:163`                                       |
|  0.1% |      11 | `indexed_iterate`    | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`             |
| <0.1% |       3 | `isassigned`         | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:1642` |

##### `getvalue` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:187`)

|      % | Samples | Callee    | Location                                                         |
| -----: | ------: | --------- | ---------------------------------------------------------------- |
| 100.0% |   6,675 | `_symbol` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:1` |

##### `defaultminimum` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:12`)

|      % | Samples | Callee                                                                                                                       | Location                                                                                           |
| -----: | ------: | ---------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| 100.0% |   5,440 | `sum`                                                                                                                        | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:564`      |
|   1.0% |      57 | `isempty(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:1127` |
|  <0.1% |       2 | `isempty(::JSON3.Object{Base.CodeUnits{UInt8, String}, Vector{UInt64}})`                                                     | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:1127` |

##### `foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:46`)

|      % | Samples | Callee                                                                                                                                                    | Location                                                                                     |
| -----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| 100.0% |   5,440 | `_foldl_impl`                                                                                                                                             | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:56` |
|  99.7% |   5,423 | `_foldl_impl`                                                                                                                                             | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60` |
|  <0.1% |       2 | `getvalue(::Type{JSON3.Array}, ::Base.CodeUnits{UInt8, String}, ::SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}, ::Int64, ::UInt64)` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:131`                           |
|  <0.1% |       1 | `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})`                        | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40`                            |

##### `mapfoldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:42`)

|      % | Samples | Callee       | Location                                                                                     |
| -----: | ------: | ------------ | -------------------------------------------------------------------------------------------- |
| 100.0% |   5,440 | `foldl_impl` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:46` |
|  <0.1% |       2 | `foldl_impl` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:47` |

##### `#mapfoldl#271` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:173`)

|      % | Samples | Callee          | Location                                                                                     |
| -----: | ------: | --------------- | -------------------------------------------------------------------------------------------- |
| 100.0% |   5,440 | `mapfoldl_impl` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:42` |

##### `mapfoldl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:173`)

|      % | Samples | Callee          | Location                                                                                      |
| -----: | ------: | --------------- | --------------------------------------------------------------------------------------------- |
| 100.0% |   5,440 | `#mapfoldl#271` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:173` |

##### `#mapreduce#275` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:306`)

|      % | Samples | Callee     | Location                                                                                      |
| -----: | ------: | ---------- | --------------------------------------------------------------------------------------------- |
| 100.0% |   5,440 | `mapfoldl` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:173` |

##### `mapreduce` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:306`)

|      % | Samples | Callee           | Location                                                                                      |
| -----: | ------: | ---------------- | --------------------------------------------------------------------------------------------- |
| 100.0% |   5,440 | `#mapreduce#275` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:306` |

##### `#sum#278` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:535`)

|      % | Samples | Callee      | Location                                                                                      |
| -----: | ------: | ----------- | --------------------------------------------------------------------------------------------- |
| 100.0% |   5,440 | `mapreduce` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:306` |

##### `sum` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:535`)

|      % | Samples | Callee     | Location                                                                                      |
| -----: | ------: | ---------- | --------------------------------------------------------------------------------------------- |
| 100.0% |   5,440 | `#sum#278` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:535` |

##### `#sum#279` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:564`)

|      % | Samples | Callee | Location                                                                                      |
| -----: | ------: | ------ | --------------------------------------------------------------------------------------------- |
| 100.0% |   5,440 | `sum`  | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:535` |

##### `sum` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:564`)

|      % | Samples | Callee     | Location                                                                                      |
| -----: | ------: | ---------- | --------------------------------------------------------------------------------------------- |
| 100.0% |   5,440 | `#sum#279` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:564` |

##### `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:56`)

|     % | Samples | Callee               | Location                                                                                         |
| ----: | ------: | -------------------- | ------------------------------------------------------------------------------------------------ |
| 99.8% |   5,428 | `MappingRF`          | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98`     |
|  0.2% |       9 | `iterate`            | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/iterators.jl:697` |
|  0.1% |       3 | `[unknown function]` | `<unknown>`                                                                                      |

##### `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` (`<unknown>`)

|     % | Samples | Callee                                                                                                                       | Location                                                                                           |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| 99.9% |   5,424 | `[unknown function]`                                                                                                         | `<unknown>`                                                                                        |
|  0.1% |       7 | `defaultminimum(::String)`                                                                                                   | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:5`                                   |
|  0.1% |       4 | `isempty(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:1127` |
|  0.1% |       4 | `indexed_iterate`                                                                                                            | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/pair.jl:42`         |
|  0.1% |       3 | `defaultminimum`                                                                                                             | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:6`                                   |

##### `MappingRF` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98`)

|      % | Samples | Callee                                                                                                                                                                                  | Location                                                                                     |
| -----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| 100.0% |   5,428 | `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})`                                                                                                            | `<unknown>`                                                                                  |
|   0.4% |      24 | `BottomRF`                                                                                                                                                                              | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:83` |
|   0.1% |       3 | `(::JSON3.var\"#defaultminimum##0#defaultminimum##1\"{JSON3.Array{Int64, Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}}})(::Int64)` | `<unknown>`                                                                                  |
|  <0.1% |       2 | `BottomRF`                                                                                                                                                                              | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:84` |

##### `#defaultminimum##0` (`<unknown>`)

|     % | Samples | Callee           | Location                                                                                                 |
| ----: | ------: | ---------------- | -------------------------------------------------------------------------------------------------------- |
| 90.1% |   4,877 | `defaultminimum` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:12`                                        |
|  8.0% |     434 | `isassigned`     | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:1641` |
|  5.4% |     292 | `getindex`       | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:163`                                       |
| <0.1% |       1 | `isassigned`     | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:1640` |
| <0.1% |       1 | `getindex`       | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:161`                                       |

##### `getvalue` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:127`)

|     % | Samples | Callee                                                                                                                             | Location                                                                                    |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| 98.9% |   4,782 | `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40`                           |
|  1.0% |      50 | `setindex!(::Dict{Symbol, Int64}, ::Int64, ::Symbol)`                                                                              | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:356` |

##### `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40`)

|     % | Samples | Callee                                                     | Location                                                                                        |
| ----: | ------: | ---------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| 76.4% |   3,655 | `getvalue`                                                 | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:187`                              |
| 19.7% |     941 | `setindex!(::Dict{Symbol, Int64}, ::Int64, ::Symbol)`      | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:356`     |
|  1.7% |      82 | `+`                                                        | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:87`       |
|  1.1% |      52 | `ht_keyindex2_shorthash!(::Dict{Symbol, Int64}, ::Symbol)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:267`     |
|  0.5% |      23 | `getindex`                                                 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/subarray.jl:334` |

##### `iterate` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:81`)

|     % | Samples | Callee     | Location                                                                                   |
| ----: | ------: | ---------- | ------------------------------------------------------------------------------------------ |
| 87.2% |   3,279 | `getvalue` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:214`                         |
|  6.1% |     228 | `getvalue` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:218`                         |
|  2.2% |      82 | `getvalue` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:215`                         |
|  1.9% |      72 | `getvalue` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:216`                         |
|  1.5% |      56 | `Pair`     | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base.jl:12` |

##### `getvalue` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:214`)

|     % | Samples | Callee     | Location                                                           |
| ----: | ------: | ---------- | ------------------------------------------------------------------ |
| 98.7% |   3,235 | `getvalue` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:127` |
|  1.3% |      44 | `getvalue` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:126` |

##### `iterate` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:78`)

|     % | Samples | Callee     | Location                                                           |
| ----: | ------: | ---------- | ------------------------------------------------------------------ |
| 99.1% |   3,019 | `getvalue` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:187` |
|  0.9% |      27 | `getvalue` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl`     |

##### `getindex` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:163`)

|     % | Samples | Callee     | Location                                                           |
| ----: | ------: | ---------- | ------------------------------------------------------------------ |
| 97.1% |   1,602 | `getvalue` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:127` |
|  2.8% |      47 | `getvalue` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:126` |
|  0.1% |       1 | `getvalue` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:199` |

##### `var\"#read#6\"(::Bool, ::Nothing, ::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.read), ::String)` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:30`)

|     % | Samples | Callee                                                                         | Location                                                                                    |
| ----: | ------: | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------- |
| 91.9% |   1,215 | `read!`                                                                        | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:87`                            |
|  7.9% |     104 | `Array`                                                                        | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:648` |
|  0.2% |       3 | `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, Vector{UInt64}})` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40`                           |

##### `read` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:30`)

|      % | Samples | Callee                                                                                                                     | Location                                                         |
| -----: | ------: | -------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| 100.0% |   1,322 | `var\"#read#6\"(::Bool, ::Nothing, ::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.read), ::String)` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:30` |

##### `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:87`)

|      % | Samples | Callee                                                                                                                                                                               | Location                                                                  |
| -----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------- |
| 100.0% |   1,215 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:218`         |
|  99.4% |   1,208 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Array}, ::Bool)`  | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:312`         |
|  22.0% |     267 | `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{String})`                                                                       | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:142`         |
|   3.0% |      36 | `typeparser(::Type{Float64}, ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Int16, ::Parsers.Options)`                                                                | `../profiler-md-julia-depot/packages/Parsers/05lwR/src/components.jl:392` |
|   1.6% |      19 | `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.False})`                                                                  | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:189`         |

##### `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:218`)

|     % | Samples | Callee                                                                                                                                                                      | Location                                                          |
| ----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| 99.7% |   1,211 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:87`  |
| 14.8% |     180 | `getbyte`                                                                                                                                                                   | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:8`  |
|  7.6% |      92 | `macro expansion`                                                                                                                                                           | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:29` |
|  4.9% |      60 | `macro expansion`                                                                                                                                                           | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:24` |
|  4.5% |      55 | `string`                                                                                                                                                                    | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:88` |

##### `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:218`)

|      % | Samples | Callee                                                                                                                                                                                                                           | Location                                                          |
| -----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| 100.0% |   1,215 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:218` |
|   0.4% |       5 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)`                                                      | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:87`  |

##### `read!` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:87`)

|      % | Samples | Callee                                                                                                                                                       | Location                                                         |
| -----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------- |
| 100.0% |   1,215 | `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:87` |

##### `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:87`)

|      % | Samples | Callee                                                                                                                                                                              | Location                                                          |
| -----: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| 100.0% |   1,211 | `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)`                        | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:87`  |
|   0.7% |       8 | `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.False})`                                                                 | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:189` |
|   0.2% |       3 | `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{String})`                                                                      | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:142` |
|   0.2% |       3 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Array}, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:312` |
|   0.2% |       2 | `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Nothing})`                                                                     | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:204` |

##### `var\"#read!#9\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Array}, ::Bool)` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:312`)

|     % | Samples | Callee                                                                                                                                                                      | Location                                                          |
| ----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| 99.8% |   1,205 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:87`  |
|  0.5% |       6 | `macro expansion`                                                                                                                                                           | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:29` |
|  0.3% |       4 | `macro expansion`                                                                                                                                                           | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:24` |
|  0.2% |       2 | `getbyte`                                                                                                                                                                   | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:8`  |
|  0.1% |       1 | `promoteeltype`                                                                                                                                                             | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl`    |

##### `(::JSON3.var\"#defaultminimum##0#defaultminimum##1\"{JSON3.Array{Int64, Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}}})(::Int64)` (`<unknown>`)

|     % | Samples | Callee       | Location                                                                                                 |
| ----: | ------: | ------------ | -------------------------------------------------------------------------------------------------------- |
| 75.0% |       3 | `isassigned` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:1632` |

## Hottest call stacks

Call stacks with the most samples collected in their leaf frame.

Common call stack: `#write#58` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:40`) ← `[unknown function]` ← `parse_workload` (`./profile.jl:18`) ← `macro expansion` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/stdlib/v1.13/Profile/src/Profile.jl:82`) ← `capture_wall` (`./profile.jl:43`) ← `[unknown function]` ← `eval(::Module, ::Any)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:489`) ← `include_string(::typeof(identity), ::Module, ::String, ::String)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/loading.jl:2989`) ← `_include(::Function, ::Module, ::String)` (3083) ← `include(::Module, ::String)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base.jl:309`) ← `exec_options(::Base.JLOptions)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/client.jl:234`) ← `_start()` (570)

|    % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ---: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 9.1% |   2,767 | `#write#79` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 5.2% |   1,571 | `#write#79` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 3.8% |   1,162 | `#write#79` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 3.3% |     989 | `indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64, ::Int64)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`) ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 2.6% |     794 | `_symbol` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`) ← `getvalue` (187) ← `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40`) ← `getvalue` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:127`) ← `getvalue` (214) ← `iterate` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:81`) ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 2.6% |     794 | `_symbol` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`) ← `getvalue` (187) ← `iterate` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:78`) ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 2.1% |     642 | `_symbol` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`) ← `getvalue` (187) ← `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40`) ← `getvalue` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:127`) ← `getvalue` (214) ← `iterate` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:81`) ← `iterate` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/iterators.jl:697`) ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:12`) ← `#defaultminimum##0` ← `[unknown function]` ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `[unknown function]` ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `MappingRF` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98`) ← `_foldl_impl` (56) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:12`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 1.9% |     566 | `indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64, ::Int64)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`) ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 1.9% |     563 | `_symbol` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`) ← `getvalue` (187) ← `iterate` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:78`) ← `iterate` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/iterators.jl:697`) ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `[unknown function]` ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `[unknown function]` ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:12`) ← `#defaultminimum##0` ← `[unknown function]` ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `[unknown function]` ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `MappingRF` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98`) ← `_foldl_impl` (56) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:12`)                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 1.4% |     416 | `_symbol` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`) ← `getvalue` (187) ← `iterate` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:78`) ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 1.4% |     410 | `_symbol` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`) ← `getvalue` (187) ← `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40`) ← `getvalue` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:127`) ← `getvalue` (214) ← `iterate` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:81`) ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 1.3% |     399 | `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `[unknown function]` ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `[unknown function]` ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `[unknown function]` ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:12`) ← `#defaultminimum##0` ← `[unknown function]` ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `[unknown function]` ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `MappingRF` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98`) ← `_foldl_impl` (56) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:12`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 1.2% |     352 | `indexed_iterate` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`) ← `indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64)` (163) ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 1.2% |     352 | `_symbol` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`) ← `getvalue` (187) ← `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40`) ← `getvalue` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:127`) ← `getvalue` (214) ← `iterate` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:81`) ← `iterate` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/iterators.jl:697`) ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `[unknown function]` ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `[unknown function]` ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:12`) ← `#defaultminimum##0` ← `[unknown function]` ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `[unknown function]` ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `MappingRF` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98`) ← `_foldl_impl` (56) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:12`)                                                                                                                                    |
| 1.2% |     351 | `GenericMemory` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:588`) ← `Array` (648) ← `Array` (661) ← `zeros` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:626`) ← `zeros` (622) ← `realloc!(::Vector{UInt8}, ::Int64, ::Int64)` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:51`) ← `var\"#write#98\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` (340) ← `write(::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` (340) ← `#write#79` (157) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 1.1% |     341 | `indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64, ::Int64)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`) ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 1.1% |     336 | `#write#79` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 1.1% |     321 | `_symbol` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`) ← `getvalue` (187) ← `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40`) ← `getvalue` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:127`) ← `getindex` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:163`) ← `isassigned` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:1641`) ← `#write#81` ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 1.0% |     289 | `_symbol` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`) ← `getvalue` (187) ← `iterate` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:78`) ← `iterate` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/iterators.jl:697`) ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `[unknown function]` ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `[unknown function]` ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `[unknown function]` ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `[unknown function]` ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:12`) ← `#defaultminimum##0` ← `[unknown function]` ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `[unknown function]` ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `MappingRF` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98`) ← `_foldl_impl` (56) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:12`) |
| 1.0% |     289 | `_symbol` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`) ← `getvalue` (187) ← `iterate` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:78`) ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |

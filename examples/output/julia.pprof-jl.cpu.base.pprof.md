# Sampling profile

Collected 33,547 samples.

| Category         |     % | Samples |
| ---------------- | ----: | ------: |
| Third-party      | 46.5% |  15,607 |
| Standard library | 26.3% |   8,810 |
| Unknown          | 23.1% |   7,750 |
| Native           |  3.9% |   1,323 |
| Ours             |  0.2% |      57 |

Paths starting with `./` or `../` are relative to `/tmp/profiler-md-julia-project/`.

`…` stands for omitted frames.

## Call tree

Call paths to the hottest functions.

```
├── … 25,793 samples (76.9%, self 0.8%) [unknown function]
│   ├── … 16,467 samples (49.1%, self 20.9%) #write#79 at ../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:157
│   │   ├── 2,298 samples (6.9%) indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64, ::Int64) at /nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163
│   │   ├── 1,904 samples (5.7%) iterate at ../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:81
│   │   │   ├── … 1,680 samples (5.0%) populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}}) at ../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40
│   │   │   │   ├── 332 samples (1.0%) setindex!(::Dict{Symbol, Int64}, ::Int64, ::Symbol) at /nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:356
│   │   │   │   │   └── 247 samples (0.7%, self 0.5%, self 1.5% globally) ht_keyindex2_shorthash!(::Dict{Symbol, Int64}, ::Symbol) at 267
│   │   │   │   └── 1,341 samples (4.0%) 5 more callees, led by (3.8%) getvalue at ../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:187
│   │   │   └── 106 samples (0.3%) getvalue at ../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:218
│   │   ├── … 1,678 samples (5.0%, self 21.6% globally) _symbol at ../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:1
│   │   ├── 1,216 samples (3.6%) write(::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String) at 340
│   │   │   └── 1,183 samples (3.5%) var\"#write#98\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String) at 340
│   │   │       ├── … 699 samples (2.1%, self 3.5% globally) GenericMemory at /nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:588
│   │   │       └── 429 samples (1.3%) 12 more callees, led by (0.6%) escapelength at 331
│   │   ├── 994 samples (3.0%) indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64) at /nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163
│   │   │   └── 986 samples (2.9%, self 4.6% globally) indexed_iterate at 163
│   │   └── 1,365 samples (4.1%) 18 more callees, led by (1.6%) indexed_iterate at /nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163
│   ├── … 2,430 samples (7.2%) #defaultminimum##0
│   │   └── 2,425 samples (7.2%) 6 more callees, led by (4.7%) defaultminimum at ../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:12
│   ├── … 2,135 samples (6.4%, self 0.6%) _foldl_impl at /nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60
│   │   ├── 1,705 samples (5.1%) iterate at /nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/iterators.jl:697
│   │   │   └── 1,705 samples (5.1%) 7 more callees, led by (3.1%) iterate at ../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:78
│   │   └── 118 samples (0.4%) MappingRF at 98
│   ├── … 1,795 samples (5.4%) parse_workload at ./profile.jl:18
│   │   ├── 1,346 samples (4.0%) read at ../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:30
│   │   │   └── 1,346 samples (4.0%) var\"#read#6\"(::Bool, ::Nothing, ::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.read), ::String) at 30
│   │   │       ├── 1,178 samples (3.5%) read! at 87
│   │   │       │   └── 1,177 samples (3.5%) var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool) at 87
│   │   │       │       ├── … 739 samples (2.2%) kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool) at ../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:218
│   │   │       │       │   └── 729 samples (2.2%) var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool) at 218
│   │   │       │       │       ├── … 177 samples (0.5%, self 1.5% globally) unsafe_load at /nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/pointer.jl:151
│   │   │       │       │       ├── 61 samples (0.2%) macro expansion at ../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:24
│   │   │       │       │       │   └── 61 samples (0.2%, self 1.0% globally) + at /nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:87
│   │   │       │       │       └── 330 samples (1.0%) 17 more callees, led by (0.3%) macro expansion at ../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:29
│   │   │       │       └── … 271 samples (0.8%) read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{String}) at ../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:142
│   │   │       └── 164 samples (0.5%) Array at /nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:648
│   │   └── 392 samples (1.2%) length(::String) at /nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:540 …
│   ├── … 942 samples (2.8%, self 2.7%) (::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})
│   └── 1,757 samples (5.2%) 12 more callees, led by (3.1%) #write#81 at /nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl
└── 7,750 samples (23.1%) (anonymous)
```

## Hottest functions

### Self samples

Functions with the most samples collected within the function body, excluding callees.

|     % | Samples | Function                                                                                                                                                                                                                         | Location                                                                                              |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| 23.1% |   7,750 | `(anonymous)`                                                                                                                                                                                                                    | `<unknown>`                                                                                           |
| 21.6% |   7,236 | `_symbol`                                                                                                                                                                                                                        | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`                                      |
| 20.9% |   7,010 | `#write#79`                                                                                                                                                                                                                      | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:157`                                    |
|  6.9% |   2,300 | `indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64, ::Int64)`                                                                                                                                                        | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`          |
|  4.6% |   1,535 | `indexed_iterate`                                                                                                                                                                                                                | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`          |
|  3.5% |   1,168 | `GenericMemory`                                                                                                                                                                                                                  | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:588`           |
|  3.2% |   1,060 | `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})`                                                                                                                                                     | `<unknown>`                                                                                           |
|  1.5% |     508 | `ht_keyindex2_shorthash!(::Dict{Symbol, Int64}, ::Symbol)`                                                                                                                                                                       | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:267`           |
|  1.5% |     501 | `unsafe_load`                                                                                                                                                                                                                    | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/pointer.jl:151`        |
|  1.0% |     332 | `+`                                                                                                                                                                                                                              | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:87`             |
|  0.8% |     272 | `BottomRF`                                                                                                                                                                                                                       | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:84`          |
|  0.8% |     261 | `_foldl_impl`                                                                                                                                                                                                                    | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`          |
|  0.8% |     258 | `[unknown function]`                                                                                                                                                                                                             | `<unknown>`                                                                                           |
|  0.8% |     255 | `iterate`                                                                                                                                                                                                                        | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:75`                                     |
|  0.7% |     237 | `_setindex!`                                                                                                                                                                                                                     | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:1025`         |
|  0.5% |     178 | `getindex`                                                                                                                                                                                                                       | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:975`     |
|  0.5% |     161 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:218`                                     |
|  0.4% |     143 | `unsafe_string`                                                                                                                                                                                                                  | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:130` |
|  0.4% |     135 | `checkbounds`                                                                                                                                                                                                                    | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/basic.jl:212`  |
|  0.4% |     128 | `#write#81`                                                                                                                                                                                                                      | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:73`                                     |

#### Categories

Categories accounting for at least 1.0% of self samples.

##### Third-party

|     % | Samples | Function                                                                                                                                                                                                                         | Location                                                            |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| 21.6% |   7,236 | `_symbol`                                                                                                                                                                                                                        | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`    |
| 20.9% |   7,010 | `#write#79`                                                                                                                                                                                                                      | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:157`  |
|  0.8% |     255 | `iterate`                                                                                                                                                                                                                        | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:75`   |
|  0.5% |     161 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:218`   |
|  0.4% |     128 | `#write#81`                                                                                                                                                                                                                      | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:73`   |
|  0.4% |     126 | `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{String})`                                                                                                                   | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:142`   |
|  0.2% |      83 | `getvalue`                                                                                                                                                                                                                       | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:215`  |
|  0.2% |      77 | `var\"#write#98\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)`                                                          | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:340`  |
|  0.2% |      66 | `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)`                                                                     | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:87`    |
|  0.1% |      50 | `iterate`                                                                                                                                                                                                                        | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl`      |
|  0.1% |      33 | `getvalue`                                                                                                                                                                                                                       | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl`      |
|  0.1% |      32 | `write(::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)`                                                                                                                                                   | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:340`  |
|  0.1% |      28 | `write(::StructTypes.BoolType, ::Vector{UInt8}, ::Int64, ::Int64, ::Bool)`                                                                                                                                                       | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:209`  |
|  0.1% |      27 | `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})`                                                                                               | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40`   |
|  0.1% |      26 | `macro expansion`                                                                                                                                                                                                                | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:23`   |
|  0.1% |      25 | `unescape(::JSON3.PointerString)`                                                                                                                                                                                                | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/strings.jl:48` |
|  0.1% |      24 | `var\"#write#86\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.NumberType, ::Vector{UInt8}, ::Int64, ::Int64, ::Int64)`                                                           | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:224`  |
|  0.1% |      21 | `macro expansion`                                                                                                                                                                                                                | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:14`   |
|  0.1% |      19 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)`                                                      | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:87`    |
|  0.1% |      19 | `getvalue`                                                                                                                                                                                                                       | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:213`  |

##### Standard library

|    % | Samples | Function                                                                  | Location                                                                                              |
| ---: | ------: | ------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| 6.9% |   2,300 | `indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64, ::Int64)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`          |
| 4.6% |   1,535 | `indexed_iterate`                                                         | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`          |
| 3.5% |   1,168 | `GenericMemory`                                                           | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:588`           |
| 1.5% |     508 | `ht_keyindex2_shorthash!(::Dict{Symbol, Int64}, ::Symbol)`                | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:267`           |
| 1.5% |     501 | `unsafe_load`                                                             | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/pointer.jl:151`        |
| 1.0% |     332 | `+`                                                                       | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:87`             |
| 0.8% |     272 | `BottomRF`                                                                | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:84`          |
| 0.8% |     261 | `_foldl_impl`                                                             | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`          |
| 0.7% |     237 | `_setindex!`                                                              | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:1025`         |
| 0.5% |     178 | `getindex`                                                                | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:975`     |
| 0.4% |     143 | `unsafe_string`                                                           | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:130` |
| 0.4% |     135 | `checkbounds`                                                             | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/basic.jl:212`  |
| 0.3% |      91 | `length_continued`                                                        | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/pointer.jl`            |
| 0.3% |      89 | `unsafe_string`                                                           | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:126` |
| 0.3% |      88 | `==`                                                                      | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/promotion.jl:641`      |
| 0.3% |      87 | `\|`                                                                      | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:418`            |
| 0.2% |      74 | `macro expansion`                                                         | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/simdloop.jl:75`        |
| 0.2% |      71 | `getproperty`                                                             | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base_compiler.jl:57`   |
| 0.2% |      66 | `#write#81`                                                               | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`   |
| 0.2% |      56 | `setindex!(::Dict{Symbol, Int64}, ::Int64, ::Symbol)`                     | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:356`           |

##### Unknown

|     % | Samples | Function      | Location    |
| ----: | ------: | ------------- | ----------- |
| 23.1% |   7,750 | `(anonymous)` | `<unknown>` |

##### Native

|     % | Samples | Function                                                                     | Location    |
| ----: | ------: | ---------------------------------------------------------------------------- | ----------- |
|  3.2% |   1,060 | `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` | `<unknown>` |
|  0.8% |     258 | `[unknown function]`                                                         | `<unknown>` |
| <0.1% |       5 | `#defaultminimum##0`                                                         | `<unknown>` |

#### Lines

Lines with the largest contribution to each function's self samples.

##### `_symbol` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`)

|      % | Samples | Location                                                         |
| -----: | ------: | ---------------------------------------------------------------- |
| 100.0% |   7,236 | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:1` |

##### `#write#79` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:157`)

|     % | Samples | Location                                                           |
| ----: | ------: | ------------------------------------------------------------------ |
| 61.6% |   4,317 | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:157` |
| 19.0% |   1,329 | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:60`  |
|  8.6% |     602 | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:73`  |
|  4.1% |     285 | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:155` |
|  4.0% |     281 | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:72`  |

##### `indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64, ::Int64)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`)

|      % | Samples | Location                                                                                     |
| -----: | ------: | -------------------------------------------------------------------------------------------- |
| 100.0% |   2,300 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163` |

##### `indexed_iterate` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`)

|      % | Samples | Location                                                                                     |
| -----: | ------: | -------------------------------------------------------------------------------------------- |
| 100.0% |   1,535 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163` |

##### `GenericMemory` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:588`)

|      % | Samples | Location                                                                                    |
| -----: | ------: | ------------------------------------------------------------------------------------------- |
| 100.0% |   1,168 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:588` |

##### `ht_keyindex2_shorthash!(::Dict{Symbol, Int64}, ::Symbol)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:267`)

|     % | Samples | Location                                                                                    |
| ----: | ------: | ------------------------------------------------------------------------------------------- |
| 53.9% |     274 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:291` |
| 22.2% |     113 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:282` |
|  5.7% |      29 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:281` |
|  3.3% |      17 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:303` |
|  1.4% |       7 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:267` |

##### `unsafe_load` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/pointer.jl:151`)

|      % | Samples | Location                                                                                       |
| -----: | ------: | ---------------------------------------------------------------------------------------------- |
| 100.0% |     501 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/pointer.jl:151` |

##### `+` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:87`)

|      % | Samples | Location                                                                                  |
| -----: | ------: | ----------------------------------------------------------------------------------------- |
| 100.0% |     332 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:87` |

##### `BottomRF` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:84`)

|      % | Samples | Location                                                                                     |
| -----: | ------: | -------------------------------------------------------------------------------------------- |
| 100.0% |     272 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:84` |

##### `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`)

|     % | Samples | Location                                                                                     |
| ----: | ------: | -------------------------------------------------------------------------------------------- |
| 93.5% |     244 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60` |
|  1.5% |       4 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:56` |
|  1.1% |       3 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:51` |

##### `[unknown function]` (`<unknown>`)

|     % | Samples | Location |
| ----: | ------: | -------- |
| 64.0% |     165 | 147      |
| 27.5% |      71 | 98       |
|  2.3% |       6 | 181      |
|  1.9% |       5 | 11       |
|  1.6% |       4 | 12       |

##### `iterate` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:75`)

|      % | Samples | Location                                                          |
| -----: | ------: | ----------------------------------------------------------------- |
| 100.0% |     255 | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:75` |

##### `_setindex!` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:1025`)

|      % | Samples | Location                                                                                      |
| -----: | ------: | --------------------------------------------------------------------------------------------- |
| 100.0% |     237 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:1025` |

##### `getindex` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:975`)

|      % | Samples | Location                                                                                          |
| -----: | ------: | ------------------------------------------------------------------------------------------------- |
| 100.0% |     178 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:975` |

##### `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:218`)

|     % | Samples | Location                                                          |
| ----: | ------: | ----------------------------------------------------------------- |
| 64.0% |     103 | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:248` |
|  9.9% |      16 | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:298` |
|  7.5% |      12 | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:247` |
|  5.0% |       8 | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:284` |
|  3.7% |       6 | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:268` |

##### `unsafe_string` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:130`)

|      % | Samples | Location                                                                                              |
| -----: | ------: | ----------------------------------------------------------------------------------------------------- |
| 100.0% |     143 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:130` |

##### `checkbounds` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/basic.jl:212`)

|      % | Samples | Location                                                                                             |
| -----: | ------: | ---------------------------------------------------------------------------------------------------- |
| 100.0% |     135 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/basic.jl:212` |

##### `#write#81` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:73`)

|     % | Samples | Location                                                           |
| ----: | ------: | ------------------------------------------------------------------ |
| 43.8% |      56 | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:200` |
| 25.0% |      32 | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:60`  |
| 13.3% |      17 | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:73`  |
|  7.8% |      10 | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:181` |
|  4.7% |       6 | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:72`  |

##### `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{String})` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:142`)

|     % | Samples | Location                                                          |
| ----: | ------: | ----------------------------------------------------------------- |
| 46.8% |      59 | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:155` |
|  7.9% |      10 | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:167` |
|  6.3% |       8 | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:142` |
|  0.8% |       1 | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:166` |

##### `unsafe_string` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:126`)

|      % | Samples | Location                                                                                              |
| -----: | ------: | ----------------------------------------------------------------------------------------------------- |
| 100.0% |      89 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:126` |

##### `==` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/promotion.jl:641`)

|      % | Samples | Location                                                                                         |
| -----: | ------: | ------------------------------------------------------------------------------------------------ |
| 100.0% |      88 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/promotion.jl:641` |

##### `|` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:418`)

|      % | Samples | Location                                                                                   |
| -----: | ------: | ------------------------------------------------------------------------------------------ |
| 100.0% |      87 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:418` |

##### `getvalue` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:215`)

|      % | Samples | Location                                                           |
| -----: | ------: | ------------------------------------------------------------------ |
| 100.0% |      83 | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:215` |

##### `var\"#write#98\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:340`)

|     % | Samples | Location                                                           |
| ----: | ------: | ------------------------------------------------------------------ |
| 31.2% |      24 | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:360` |
| 16.9% |      13 | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:60`  |
| 14.3% |      11 | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:340` |
| 13.0% |      10 | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:351` |
|  6.5% |       5 | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:346` |

##### `macro expansion` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/simdloop.jl:75`)

|      % | Samples | Location                                                                                       |
| -----: | ------: | ---------------------------------------------------------------------------------------------- |
| 100.0% |      74 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/simdloop.jl:75` |

##### `getproperty` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base_compiler.jl:57`)

|      % | Samples | Location                                                                                            |
| -----: | ------: | --------------------------------------------------------------------------------------------------- |
| 100.0% |      71 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base_compiler.jl:57` |

##### `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:87`)

|     % | Samples | Location                                                          |
| ----: | ------: | ----------------------------------------------------------------- |
| 39.4% |      26 | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:88`  |
| 31.8% |      21 | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:87`  |
|  4.5% |       3 | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:93`  |
|  3.0% |       2 | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:99`  |
|  1.5% |       1 | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:106` |

##### `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`)

|     % | Samples | Location                                                                                                |
| ----: | ------: | ------------------------------------------------------------------------------------------------------- |
| 16.7% |      11 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:60`  |
| 13.6% |       9 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:197` |
| 13.6% |       9 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:200` |
| 12.1% |       8 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:73`  |
| 10.6% |       7 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:187` |

##### `setindex!(::Dict{Symbol, Int64}, ::Int64, ::Symbol)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:356`)

|     % | Samples | Location                                                                                    |
| ----: | ------: | ------------------------------------------------------------------------------------------- |
| 76.8% |      43 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:368` |
| 21.4% |      12 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:356` |
|  1.8% |       1 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:358` |

##### `write(::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:340`)

|      % | Samples | Location                                                           |
| -----: | ------: | ------------------------------------------------------------------ |
| 100.0% |      32 | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:340` |

##### `write(::StructTypes.BoolType, ::Vector{UInt8}, ::Int64, ::Int64, ::Bool)` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:209`)

|      % | Samples | Location                                                           |
| -----: | ------: | ------------------------------------------------------------------ |
| 100.0% |      28 | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:209` |

##### `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40`)

|     % | Samples | Location                                                          |
| ----: | ------: | ----------------------------------------------------------------- |
| 25.9% |       7 | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:55` |
| 22.2% |       6 | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40` |
| 14.8% |       4 | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:47` |
|  7.4% |       2 | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:51` |

##### `macro expansion` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:23`)

|      % | Samples | Location                                                          |
| -----: | ------: | ----------------------------------------------------------------- |
| 100.0% |      26 | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:23` |

##### `unescape(::JSON3.PointerString)` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/strings.jl:48`)

|     % | Samples | Location                                                             |
| ----: | ------: | -------------------------------------------------------------------- |
| 24.0% |       6 | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/strings.jl:116` |
| 16.0% |       4 | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/strings.jl:60`  |
| 12.0% |       3 | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/strings.jl:54`  |
|  8.0% |       2 | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/strings.jl:48`  |

##### `var\"#write#86\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.NumberType, ::Vector{UInt8}, ::Int64, ::Int64, ::Int64)` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:224`)

|     % | Samples | Location                                                           |
| ----: | ------: | ------------------------------------------------------------------ |
| 79.2% |      19 | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:236` |
| 16.7% |       4 | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:224` |
|  4.2% |       1 | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:61`  |

##### `macro expansion` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:14`)

|      % | Samples | Location                                                          |
| -----: | ------: | ----------------------------------------------------------------- |
| 100.0% |      21 | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:14` |

##### `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:87`)

|      % | Samples | Location                                                         |
| -----: | ------: | ---------------------------------------------------------------- |
| 100.0% |      19 | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:87` |

##### `getvalue` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:213`)

|      % | Samples | Location                                                           |
| -----: | ------: | ------------------------------------------------------------------ |
| 100.0% |      19 | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:213` |

#### Callers

Callers with the largest contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `_symbol` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`)

|      % | Samples | Caller     | Location                                                           |
| -----: | ------: | ---------- | ------------------------------------------------------------------ |
| 100.0% |   7,236 | `getvalue` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:187` |

##### `#write#79` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:157`)

|     % | Samples | Caller               | Location                                                           |
| ----: | ------: | -------------------- | ------------------------------------------------------------------ |
| 99.8% |   6,998 | `[unknown function]` | `<unknown>`                                                        |
|  0.1% |      10 | `write`              | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:147` |
| <0.1% |       2 | `#write#79`          | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:157` |

##### `indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64, ::Int64)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`)

|      % | Samples | Caller      | Location                                                           |
| -----: | ------: | ----------- | ------------------------------------------------------------------ |
| 100.0% |   2,300 | `#write#79` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:157` |

##### `indexed_iterate` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`)

|     % | Samples | Caller                                                           | Location                                                                                            |
| ----: | ------: | ---------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| 64.2% |     986 | `indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`        |
| 30.2% |     464 | `#write#79`                                                      | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:157`                                  |
|  4.7% |      72 | `indexed_iterate`                                                | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`        |
|  0.8% |      13 | `#write#81`                                                      | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl` |

##### `GenericMemory` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:588`)

|     % | Samples | Caller                                    | Location                                                                                      |
| ----: | ------: | ----------------------------------------- | --------------------------------------------------------------------------------------------- |
| 74.2% |     867 | `Array`                                   | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:648`   |
| 25.4% |     297 | `rehash!(::Dict{Symbol, Int64}, ::Int64)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:138`   |
|  0.3% |       4 | `array_new_memory`                        | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:1101` |

##### `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` (`<unknown>`)

|     % | Samples | Caller               | Location                                                                                     |
| ----: | ------: | -------------------- | -------------------------------------------------------------------------------------------- |
| 85.8% |     910 | `[unknown function]` | `<unknown>`                                                                                  |
| 12.5% |     133 | `MappingRF`          | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98` |
|  1.4% |      15 | `_foldl_impl`        | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60` |
|  0.2% |       2 | `foldl_impl`         | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:46` |

##### `ht_keyindex2_shorthash!(::Dict{Symbol, Int64}, ::Symbol)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:267`)

|     % | Samples | Caller                                                                                                                             | Location                                                                                    |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| 89.0% |     452 | `setindex!(::Dict{Symbol, Int64}, ::Int64, ::Symbol)`                                                                              | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:356` |
| 11.0% |      56 | `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40`                           |

##### `unsafe_load` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/pointer.jl:151`)

|      % | Samples | Caller        | Location                                                                                       |
| -----: | ------: | ------------- | ---------------------------------------------------------------------------------------------- |
| 100.0% |     501 | `unsafe_load` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/pointer.jl:151` |

##### `+` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:87`)

|     % | Samples | Caller                                                                                                                                                                                                                           | Location                                                                                              |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| 32.8% |     109 | `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})`                                                                                               | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40`                                     |
| 18.7% |      62 | `macro expansion`                                                                                                                                                                                                                | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:24`                                     |
| 17.5% |      58 | `length_continued`                                                                                                                                                                                                               | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:559` |
|  6.6% |      22 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:218`                                     |
|  6.0% |      20 | `var\"#write#98\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)`                                                          | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:340`                                    |

##### `BottomRF` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:84`)

|     % | Samples | Caller               | Location                                                                                     |
| ----: | ------: | -------------------- | -------------------------------------------------------------------------------------------- |
| 98.2% |     267 | `[unknown function]` | `<unknown>`                                                                                  |
|  1.8% |       5 | `MappingRF`          | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98` |

##### `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`)

|     % | Samples | Caller                                                                       | Location                                                                                     |
| ----: | ------: | ---------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| 98.9% |     258 | `foldl_impl`                                                                 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:46` |
|  1.1% |       3 | `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` | `<unknown>`                                                                                  |

##### `[unknown function]` (`<unknown>`)

|     % | Samples | Caller                                                                       | Location                                                                                            |
| ----: | ------: | ---------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| 50.4% |     130 | `#write#79`                                                                  | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:157`                                  |
| 27.5% |      71 | `_foldl_impl`                                                                | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`        |
| 16.3% |      42 | `#write#81`                                                                  | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl` |
|  4.3% |      11 | `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` | `<unknown>`                                                                                         |
|  1.2% |       3 | `parse_workload`                                                             | `./profile.jl:18`                                                                                   |

##### `iterate` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:75`)

|     % | Samples | Caller      | Location                                                                                         |
| ----: | ------: | ----------- | ------------------------------------------------------------------------------------------------ |
| 62.0% |     158 | `#write#79` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:157`                               |
| 20.0% |      51 | `iterate`   | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:75`                                |
| 18.0% |      46 | `iterate`   | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/iterators.jl:697` |

##### `_setindex!` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:1025`)

|     % | Samples | Caller               | Location                                                                                      |
| ----: | ------: | -------------------- | --------------------------------------------------------------------------------------------- |
| 96.2% |     228 | `setindex!`          | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:1020` |
|  3.8% |       9 | `[unknown function]` | `<unknown>`                                                                                   |

##### `getindex` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:975`)

|     % | Samples | Caller                                                                                                                                                                                                                           | Location                                                                                        |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| 57.9% |     103 | `macro expansion`                                                                                                                                                                                                                | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:332`                              |
| 28.1% |      50 | `getindex`                                                                                                                                                                                                                       | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/subarray.jl:334` |
| 10.1% |      18 | `var\"#write#98\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)`                                                          | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:340`                              |
|  2.2% |       4 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:218`                               |
|  0.6% |       1 | `var\"#read!#9\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Array}, ::Bool)`  | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:312`                               |

##### `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:218`)

|      % | Samples | Caller                                                                                                                                                                               | Location                                                          |
| -----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------- |
| 100.0% |     161 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:218` |

##### `unsafe_string` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:130`)

|      % | Samples | Caller   | Location                                                                                              |
| -----: | ------: | -------- | ----------------------------------------------------------------------------------------------------- |
| 100.0% |     143 | `String` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:145` |

##### `checkbounds` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/basic.jl:212`)

|      % | Samples | Caller     | Location                                                                                              |
| -----: | ------: | ---------- | ----------------------------------------------------------------------------------------------------- |
| 100.0% |     135 | `codeunit` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:166` |

##### `#write#81` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:73`)

|     % | Samples | Caller               | Location                                                           |
| ----: | ------: | -------------------- | ------------------------------------------------------------------ |
| 99.2% |     127 | `[unknown function]` | `<unknown>`                                                        |
|  0.8% |       1 | `#write#79`          | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:157` |

##### `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{String})` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:142`)

|     % | Samples | Caller                                                                                                                                                                      | Location                                                         |
| ----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| 92.1% |     116 | `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)`                | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:87` |
|  7.9% |      10 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:87` |

##### `length_continued` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/pointer.jl`)

|      % | Samples | Caller             | Location                                                                                              |
| -----: | ------: | ------------------ | ----------------------------------------------------------------------------------------------------- |
| 100.0% |      91 | `length(::String)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:540` |

##### `unsafe_string` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:126`)

|      % | Samples | Caller     | Location                                                           |
| -----: | ------: | ---------- | ------------------------------------------------------------------ |
| 100.0% |      89 | `getvalue` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:195` |

##### `==` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/promotion.jl:641`)

|     % | Samples | Caller                                                                                                                                                                                                                           | Location                                                                                    |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| 56.8% |      50 | `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{String})`                                                                                                                   | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:142`                           |
| 22.7% |      20 | `ht_keyindex2_shorthash!(::Dict{Symbol, Int64}, ::Symbol)`                                                                                                                                                                       | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:267` |
| 10.2% |       9 | `isarray`                                                                                                                                                                                                                        | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:61`                           |
|  3.4% |       3 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:218`                           |
|  3.4% |       3 | `promoteeltype`                                                                                                                                                                                                                  | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:100`                          |

##### `|` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:418`)

|     % | Samples | Caller          | Location                                                                                    |
| ----: | ------: | --------------- | ------------------------------------------------------------------------------------------- |
| 95.4% |      83 | `string`        | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:88`                           |
|  3.4% |       3 | `\|`            | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:1058` |
|  1.1% |       1 | `promoteeltype` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:96`                           |

##### `getvalue` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:215`)

|      % | Samples | Caller    | Location                                                          |
| -----: | ------: | --------- | ----------------------------------------------------------------- |
| 100.0% |      83 | `iterate` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:81` |

##### `var\"#write#98\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:340`)

|     % | Samples | Caller                                                                         | Location                                                           |
| ----: | ------: | ------------------------------------------------------------------------------ | ------------------------------------------------------------------ |
| 72.7% |      56 | `write(::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:340` |
| 27.3% |      21 | `#write#79`                                                                    | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:157` |

##### `macro expansion` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/simdloop.jl:75`)

|     % | Samples | Caller                                                                                                                                                                  | Location                                                           |
| ----: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| 67.6% |      50 | `escapelength`                                                                                                                                                          | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:331` |
| 32.4% |      24 | `var\"#write#98\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:340` |

##### `getproperty` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base_compiler.jl:57`)

|     % | Samples | Caller                                                     | Location                                                                                    |
| ----: | ------: | ---------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| 52.1% |      37 | `_setindex!`                                               | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:331` |
| 15.5% |      11 | `ht_keyindex2_shorthash!(::Dict{Symbol, Int64}, ::Symbol)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:267` |
|  7.0% |       5 | `_setindex!`                                               | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:325` |
|  4.2% |       3 | `rehash!(::Dict{Symbol, Int64}, ::Int64)`                  | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:138` |
|  4.2% |       3 | `_setindex!`                                               | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:327` |

##### `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:87`)

|     % | Samples | Caller                                                                                                                                                                                                                           | Location                                                          |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| 84.8% |      56 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)`                                                      | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:87`  |
| 10.6% |       7 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:218` |
|  4.5% |       3 | `var\"#read!#9\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Array}, ::Bool)`  | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:312` |

##### `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`)

|      % | Samples | Caller               | Location    |
| -----: | ------: | -------------------- | ----------- |
| 100.0% |      66 | `[unknown function]` | `<unknown>` |

##### `setindex!(::Dict{Symbol, Int64}, ::Int64, ::Symbol)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:356`)

|     % | Samples | Caller                                                                                                                             | Location                                                           |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| 73.2% |      41 | `getvalue`                                                                                                                         | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:127` |
| 26.8% |      15 | `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40`  |

##### `iterate` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl`)

|     % | Samples | Caller      | Location                                                                                         |
| ----: | ------: | ----------- | ------------------------------------------------------------------------------------------------ |
| 62.0% |      31 | `#write#79` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:157`                               |
| 22.0% |      11 | `iterate`   | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:75`                                |
| 16.0% |       8 | `iterate`   | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/iterators.jl:697` |

##### `getvalue` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl`)

|     % | Samples | Caller    | Location                                                          |
| ----: | ------: | --------- | ----------------------------------------------------------------- |
| 69.7% |      23 | `iterate` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:81` |
| 30.3% |      10 | `iterate` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:78` |

##### `write(::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:340`)

|      % | Samples | Caller      | Location                                                           |
| -----: | ------: | ----------- | ------------------------------------------------------------------ |
| 100.0% |      32 | `#write#79` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:157` |

##### `write(::StructTypes.BoolType, ::Vector{UInt8}, ::Int64, ::Int64, ::Bool)` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:209`)

|      % | Samples | Caller      | Location                                                           |
| -----: | ------: | ----------- | ------------------------------------------------------------------ |
| 100.0% |      28 | `#write#79` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:157` |

##### `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40`)

|     % | Samples | Caller               | Location                                                                                     |
| ----: | ------: | -------------------- | -------------------------------------------------------------------------------------------- |
| 66.7% |      18 | `getvalue`           | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:127`                           |
| 18.5% |       5 | `[unknown function]` | `<unknown>`                                                                                  |
|  7.4% |       2 | `defaultminimum`     | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:12`                            |
|  7.4% |       2 | `foldl_impl`         | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:46` |

##### `macro expansion` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:23`)

|     % | Samples | Caller                                                                                                                                                                                                                           | Location                                                          |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| 96.2% |      25 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:218` |
|  3.8% |       1 | `var\"#read!#9\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Array}, ::Bool)`  | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:312` |

##### `unescape(::JSON3.PointerString)` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/strings.jl:48`)

|     % | Samples | Caller       | Location                                                                                     |
| ----: | ------: | ------------ | -------------------------------------------------------------------------------------------- |
| 96.0% |      24 | `getvalue`   | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:193`                           |
|  4.0% |       1 | `foldl_impl` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:46` |

##### `var\"#write#86\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.NumberType, ::Vector{UInt8}, ::Int64, ::Int64, ::Int64)` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:224`)

|     % | Samples | Caller                                                                                                                                                                                       | Location                                                           |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| 83.3% |      20 | `write(::StructTypes.NumberType, ::Vector{UInt8}, ::Int64, ::Int64, ::Int64)`                                                                                                                | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:224` |
|  8.3% |       2 | `write`                                                                                                                                                                                      | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:224` |
|  4.2% |       1 | `write(::StructTypes.ArrayType, ::Vector{UInt8}, ::Int64, ::Int64, ::JSON3.Array{Int64, Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:181` |
|  4.2% |       1 | `#write#79`                                                                                                                                                                                  | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:157` |

##### `macro expansion` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:14`)

|     % | Samples | Caller                                                                                                                                                                                                                           | Location                                                          |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| 95.2% |      20 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:218` |
|  4.8% |       1 | `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{String})`                                                                                                                   | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:142` |

##### `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:87`)

|     % | Samples | Caller                                                                                                                                                                                                                           | Location                                                          |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| 52.6% |      10 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)`                                             | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:218` |
| 31.6% |       6 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:218` |
| 10.5% |       2 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Array}, ::Bool)`                                              | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:312` |
|  5.3% |       1 | `var\"#read!#9\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Array}, ::Bool)`  | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:312` |

##### `getvalue` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:213`)

|      % | Samples | Caller    | Location                                                          |
| -----: | ------: | --------- | ----------------------------------------------------------------- |
| 100.0% |      19 | `iterate` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:81` |

##### `#defaultminimum##0` (`<unknown>`)

|      % | Samples | Caller               | Location    |
| -----: | ------: | -------------------- | ----------- |
| 100.0% |       5 | `[unknown function]` | `<unknown>` |

### Total samples

Functions with the most samples collected within the function and its callees.

|     % | Samples | Function                                                           | Location                                                                                                          |
| ----: | ------: | ------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| 76.9% |  25,794 | `[unknown function]`                                               | `<unknown>`                                                                                                       |
| 76.9% |  25,793 | `macro expansion`                                                  | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/stdlib/v1.13/Profile/src/Profile.jl:60` |
| 76.9% |  25,793 | `capture_cpu`                                                      | `./profile.jl:29`                                                                                                 |
| 76.9% |  25,793 | `eval(::Module, ::Any)`                                            | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:489`                       |
| 76.9% |  25,793 | `include_string(::typeof(identity), ::Module, ::String, ::String)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/loading.jl:2989`                   |
| 76.9% |  25,793 | `_include(::Function, ::Module, ::String)`                         | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/loading.jl:3083`                   |
| 76.9% |  25,793 | `include(::Module, ::String)`                                      | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base.jl:309`                       |
| 76.9% |  25,793 | `exec_options(::Base.JLOptions)`                                   | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/client.jl:234`                     |
| 76.9% |  25,793 | `_start()`                                                         | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/client.jl:570`                     |
| 76.9% |  25,792 | `parse_workload`                                                   | `./profile.jl:18`                                                                                                 |
| 71.5% |  23,994 | `#write#58`                                                        | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:40`                                                 |
| 53.3% |  17,884 | `write`                                                            | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:147`                                                |
| 53.3% |  17,880 | `#write#79`                                                        | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:157`                                                |
| 53.1% |  17,829 | `#write#81`                                                        | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`               |
| 23.1% |   7,750 | `(anonymous)`                                                      | `<unknown>`                                                                                                       |
| 21.6% |   7,236 | `_symbol`                                                          | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`                                                  |
| 21.6% |   7,236 | `getvalue`                                                         | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:187`                                                |
| 18.2% |   6,100 | `defaultminimum`                                                   | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:12`                                                 |
| 18.2% |   6,094 | `foldl_impl`                                                       | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:46`                      |
| 18.2% |   6,094 | `mapfoldl_impl`                                                    | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:42`                      |

#### Categories

Categories accounting for at least 1.0% of self samples.

##### Third-party

|     % | Samples | Function                                                                                                                                                                                                                         | Location                                                           |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| 71.5% |  23,994 | `#write#58`                                                                                                                                                                                                                      | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:40`  |
| 53.3% |  17,884 | `write`                                                                                                                                                                                                                          | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:147` |
| 53.3% |  17,880 | `#write#79`                                                                                                                                                                                                                      | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:157` |
| 21.6% |   7,236 | `_symbol`                                                                                                                                                                                                                        | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`   |
| 21.6% |   7,236 | `getvalue`                                                                                                                                                                                                                       | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:187` |
| 18.2% |   6,100 | `defaultminimum`                                                                                                                                                                                                                 | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:12`  |
| 15.6% |   5,242 | `getvalue`                                                                                                                                                                                                                       | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:127` |
| 15.5% |   5,206 | `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})`                                                                                               | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40`  |
| 11.7% |   3,938 | `iterate`                                                                                                                                                                                                                        | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:81`  |
| 10.4% |   3,504 | `getvalue`                                                                                                                                                                                                                       | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:214` |
| 10.0% |   3,348 | `iterate`                                                                                                                                                                                                                        | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:78`  |
|  5.4% |   1,801 | `getindex`                                                                                                                                                                                                                       | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:163` |
|  4.0% |   1,346 | `var\"#read#6\"(::Bool, ::Nothing, ::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.read), ::String)`                                                                                                       | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:30`   |
|  4.0% |   1,346 | `read`                                                                                                                                                                                                                           | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:30`   |
|  3.6% |   1,217 | `write(::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)`                                                                                                                                                   | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:340` |
|  3.6% |   1,205 | `var\"#write#98\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)`                                                          | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:340` |
|  3.5% |   1,178 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)`                                             | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:218`  |
|  3.5% |   1,178 | `read!`                                                                                                                                                                                                                          | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:87`   |
|  3.5% |   1,177 | `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)`                                                                     | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:87`   |
|  3.5% |   1,177 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:218`  |

##### Standard library

|     % | Samples | Function                                                           | Location                                                                                                          |
| ----: | ------: | ------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| 76.9% |  25,793 | `macro expansion`                                                  | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/stdlib/v1.13/Profile/src/Profile.jl:60` |
| 76.9% |  25,793 | `eval(::Module, ::Any)`                                            | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:489`                       |
| 76.9% |  25,793 | `include_string(::typeof(identity), ::Module, ::String, ::String)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/loading.jl:2989`                   |
| 76.9% |  25,793 | `_include(::Function, ::Module, ::String)`                         | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/loading.jl:3083`                   |
| 76.9% |  25,793 | `include(::Module, ::String)`                                      | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base.jl:309`                       |
| 76.9% |  25,793 | `exec_options(::Base.JLOptions)`                                   | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/client.jl:234`                     |
| 76.9% |  25,793 | `_start()`                                                         | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/client.jl:570`                     |
| 53.1% |  17,829 | `#write#81`                                                        | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`               |
| 18.2% |   6,094 | `foldl_impl`                                                       | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:46`                      |
| 18.2% |   6,094 | `mapfoldl_impl`                                                    | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:42`                      |
| 18.2% |   6,094 | `#mapfoldl#271`                                                    | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:173`                     |
| 18.2% |   6,094 | `mapfoldl`                                                         | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:173`                     |
| 18.2% |   6,094 | `#mapreduce#275`                                                   | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:306`                     |
| 18.2% |   6,094 | `mapreduce`                                                        | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:306`                     |
| 18.2% |   6,094 | `#sum#278`                                                         | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:535`                     |
| 18.2% |   6,094 | `sum`                                                              | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:535`                     |
| 18.2% |   6,094 | `_foldl_impl`                                                      | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:56`                      |
| 18.2% |   6,094 | `#sum#279`                                                         | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:564`                     |
| 18.2% |   6,094 | `sum`                                                              | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:564`                     |
| 18.1% |   6,080 | `_foldl_impl`                                                      | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`                      |

##### Unknown

|     % | Samples | Function      | Location    |
| ----: | ------: | ------------- | ----------- |
| 23.1% |   7,750 | `(anonymous)` | `<unknown>` |

##### Native

|     % | Samples | Function                                                                                                                                                                                | Location    |
| ----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| 76.9% |  25,794 | `[unknown function]`                                                                                                                                                                    | `<unknown>` |
| 18.1% |   6,081 | `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})`                                                                                                            | `<unknown>` |
| 18.1% |   6,062 | `#defaultminimum##0`                                                                                                                                                                    | `<unknown>` |
| <0.1% |       1 | `(::JSON3.var\"#defaultminimum##0#defaultminimum##1\"{JSON3.Array{Int64, Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}}})(::Int64)` | `<unknown>` |

#### Callers

Callers with the largest contribution to each function's total samples. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `[unknown function]` (`<unknown>`)

|      % | Samples | Caller                                                                       | Location                                                                                            |
| -----: | ------: | ---------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| 100.0% |  25,793 | `eval(::Module, ::Any)`                                                      | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:489`         |
|  93.0% |  23,997 | `parse_workload`                                                             | `./profile.jl:18`                                                                                   |
|  69.2% |  17,838 | `#write#79`                                                                  | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:157`                                  |
|  66.2% |  17,077 | `#write#81`                                                                  | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl` |
|  23.6% |   6,079 | `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` | `<unknown>`                                                                                         |

##### `macro expansion` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/stdlib/v1.13/Profile/src/Profile.jl:60`)

|      % | Samples | Caller        | Location          |
| -----: | ------: | ------------- | ----------------- |
| 100.0% |  25,793 | `capture_cpu` | `./profile.jl:29` |

##### `capture_cpu` (`./profile.jl:29`)

|      % | Samples | Caller               | Location    |
| -----: | ------: | -------------------- | ----------- |
| 100.0% |  25,793 | `[unknown function]` | `<unknown>` |

##### `eval(::Module, ::Any)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:489`)

|      % | Samples | Caller                                                             | Location                                                                                        |
| -----: | ------: | ------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------- |
| 100.0% |  25,793 | `include_string(::typeof(identity), ::Module, ::String, ::String)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/loading.jl:2989` |

##### `include_string(::typeof(identity), ::Module, ::String, ::String)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/loading.jl:2989`)

|      % | Samples | Caller                                     | Location                                                                                        |
| -----: | ------: | ------------------------------------------ | ----------------------------------------------------------------------------------------------- |
| 100.0% |  25,793 | `_include(::Function, ::Module, ::String)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/loading.jl:3083` |

##### `_include(::Function, ::Module, ::String)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/loading.jl:3083`)

|      % | Samples | Caller                        | Location                                                                                    |
| -----: | ------: | ----------------------------- | ------------------------------------------------------------------------------------------- |
| 100.0% |  25,793 | `include(::Module, ::String)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base.jl:309` |

##### `include(::Module, ::String)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base.jl:309`)

|      % | Samples | Caller                           | Location                                                                                      |
| -----: | ------: | -------------------------------- | --------------------------------------------------------------------------------------------- |
| 100.0% |  25,793 | `exec_options(::Base.JLOptions)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/client.jl:234` |

##### `exec_options(::Base.JLOptions)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/client.jl:234`)

|      % | Samples | Caller     | Location                                                                                      |
| -----: | ------: | ---------- | --------------------------------------------------------------------------------------------- |
| 100.0% |  25,793 | `_start()` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/client.jl:570` |

##### `parse_workload` (`./profile.jl:18`)

|      % | Samples | Caller            | Location                                                                                                          |
| -----: | ------: | ----------------- | ----------------------------------------------------------------------------------------------------------------- |
| 100.0% |  25,792 | `macro expansion` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/stdlib/v1.13/Profile/src/Profile.jl:60` |

##### `#write#58` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:40`)

|      % | Samples | Caller               | Location    |
| -----: | ------: | -------------------- | ----------- |
| 100.0% |  23,994 | `[unknown function]` | `<unknown>` |

##### `write` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:147`)

|      % | Samples | Caller      | Location                                                          |
| -----: | ------: | ----------- | ----------------------------------------------------------------- |
| 100.0% |  17,884 | `#write#58` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:40` |

##### `#write#79` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:157`)

|      % | Samples | Caller               | Location                                                           |
| -----: | ------: | -------------------- | ------------------------------------------------------------------ |
| 100.0% |  17,879 | `write`              | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:147` |
|  95.4% |  17,050 | `[unknown function]` | `<unknown>`                                                        |
|  <0.1% |       2 | `#write#79`          | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:157` |

##### `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`)

|      % | Samples | Caller               | Location    |
| -----: | ------: | -------------------- | ----------- |
| 100.0% |  17,829 | `[unknown function]` | `<unknown>` |

##### `_symbol` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`)

|      % | Samples | Caller     | Location                                                           |
| -----: | ------: | ---------- | ------------------------------------------------------------------ |
| 100.0% |   7,236 | `getvalue` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:187` |

##### `getvalue` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:187`)

|     % | Samples | Caller                                                                                                                             | Location                                                          |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| 54.1% |   3,915 | `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40` |
| 45.9% |   3,318 | `iterate`                                                                                                                          | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:78` |
| <0.1% |       3 | `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, Vector{UInt64}})`                                                     | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40` |

##### `defaultminimum` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:12`)

|      % | Samples | Caller               | Location                                                          |
| -----: | ------: | -------------------- | ----------------------------------------------------------------- |
| 100.0% |   6,100 | `#write#58`          | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:40` |
|  89.0% |   5,426 | `#defaultminimum##0` | `<unknown>`                                                       |

##### `foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:46`)

|      % | Samples | Caller          | Location                                                                                     |
| -----: | ------: | --------------- | -------------------------------------------------------------------------------------------- |
| 100.0% |   6,094 | `mapfoldl_impl` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:42` |

##### `mapfoldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:42`)

|      % | Samples | Caller          | Location                                                                                      |
| -----: | ------: | --------------- | --------------------------------------------------------------------------------------------- |
| 100.0% |   6,094 | `#mapfoldl#271` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:173` |

##### `#mapfoldl#271` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:173`)

|      % | Samples | Caller     | Location                                                                                      |
| -----: | ------: | ---------- | --------------------------------------------------------------------------------------------- |
| 100.0% |   6,094 | `mapfoldl` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:173` |

##### `mapfoldl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:173`)

|      % | Samples | Caller           | Location                                                                                      |
| -----: | ------: | ---------------- | --------------------------------------------------------------------------------------------- |
| 100.0% |   6,094 | `#mapreduce#275` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:306` |

##### `#mapreduce#275` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:306`)

|      % | Samples | Caller      | Location                                                                                      |
| -----: | ------: | ----------- | --------------------------------------------------------------------------------------------- |
| 100.0% |   6,094 | `mapreduce` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:306` |

##### `mapreduce` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:306`)

|      % | Samples | Caller     | Location                                                                                      |
| -----: | ------: | ---------- | --------------------------------------------------------------------------------------------- |
| 100.0% |   6,094 | `#sum#278` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:535` |

##### `#sum#278` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:535`)

|      % | Samples | Caller | Location                                                                                      |
| -----: | ------: | ------ | --------------------------------------------------------------------------------------------- |
| 100.0% |   6,094 | `sum`  | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:535` |

##### `sum` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:535`)

|      % | Samples | Caller                                                                                                                                    | Location                                                                                      |
| -----: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| 100.0% |   6,094 | `#sum#279`                                                                                                                                | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:564` |
|  99.7% |   6,077 | `[unknown function]`                                                                                                                      | `<unknown>`                                                                                   |
|  <0.1% |       1 | `defaultminimum(::JSON3.Array{Int64, Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:11`                             |

##### `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:56`)

|      % | Samples | Caller       | Location                                                                                     |
| -----: | ------: | ------------ | -------------------------------------------------------------------------------------------- |
| 100.0% |   6,094 | `foldl_impl` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:46` |

##### `#sum#279` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:564`)

|      % | Samples | Caller | Location                                                                                      |
| -----: | ------: | ------ | --------------------------------------------------------------------------------------------- |
| 100.0% |   6,094 | `sum`  | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:564` |

##### `sum` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:564`)

|      % | Samples | Caller               | Location                                                          |
| -----: | ------: | -------------------- | ----------------------------------------------------------------- |
| 100.0% |   6,094 | `defaultminimum`     | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:12` |
|  59.9% |   3,652 | `[unknown function]` | `<unknown>`                                                       |

##### `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` (`<unknown>`)

|      % | Samples | Caller               | Location                                                                                     |
| -----: | ------: | -------------------- | -------------------------------------------------------------------------------------------- |
| 100.0% |   6,079 | `MappingRF`          | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98` |
|  64.0% |   3,889 | `[unknown function]` | `<unknown>`                                                                                  |
|   0.2% |      15 | `_foldl_impl`        | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60` |
|  <0.1% |       2 | `foldl_impl`         | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:46` |

##### `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`)

|      % | Samples | Caller                                                                       | Location                                                                                              |
| -----: | ------: | ---------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| 100.0% |   6,079 | `foldl_impl`                                                                 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:46`          |
|  <0.1% |       3 | `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` | `<unknown>`                                                                                           |
|  <0.1% |       1 | `unsafe_string`                                                              | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:126` |

##### `#defaultminimum##0` (`<unknown>`)

|      % | Samples | Caller               | Location    |
| -----: | ------: | -------------------- | ----------- |
| 100.0% |   6,062 | `[unknown function]` | `<unknown>` |

##### `getvalue` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:127`)

|     % | Samples | Caller     | Location                                                           |
| ----: | ------: | ---------- | ------------------------------------------------------------------ |
| 66.3% |   3,473 | `getvalue` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:214` |
| 33.7% |   1,769 | `getindex` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:163` |

##### `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40`)

|     % | Samples | Caller               | Location                                                                                     |
| ----: | ------: | -------------------- | -------------------------------------------------------------------------------------------- |
| 99.8% |   5,196 | `getvalue`           | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:127`                           |
|  0.1% |       5 | `[unknown function]` | `<unknown>`                                                                                  |
| <0.1% |       2 | `defaultminimum`     | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:12`                            |
| <0.1% |       2 | `foldl_impl`         | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:46` |
| <0.1% |       1 | `_symbol`            | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`                             |

##### `iterate` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:81`)

|     % | Samples | Caller      | Location                                                                                         |
| ----: | ------: | ----------- | ------------------------------------------------------------------------------------------------ |
| 48.6% |   1,915 | `#write#79` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:157`                               |
| 42.5% |   1,675 | `iterate`   | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/iterators.jl:697` |
|  8.8% |     348 | `iterate`   | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:75`                                |

##### `getvalue` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:214`)

|      % | Samples | Caller    | Location                                                          |
| -----: | ------: | --------- | ----------------------------------------------------------------- |
| 100.0% |   3,504 | `iterate` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:81` |

##### `iterate` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:78`)

|     % | Samples | Caller      | Location                                                                                         |
| ----: | ------: | ----------- | ------------------------------------------------------------------------------------------------ |
| 50.5% |   1,692 | `#write#79` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:157`                               |
| 39.3% |   1,316 | `iterate`   | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/iterators.jl:697` |
| 10.2% |     340 | `iterate`   | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:75`                                |

##### `getindex` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:163`)

|     % | Samples | Caller               | Location                                                                                                 |
| ----: | ------: | -------------------- | -------------------------------------------------------------------------------------------------------- |
| 61.7% |   1,111 | `isassigned`         | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:1641` |
| 19.4% |     349 | `#defaultminimum##0` | `<unknown>`                                                                                              |
| 18.9% |     341 | `#write#81`          | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`      |

##### `var\"#read#6\"(::Bool, ::Nothing, ::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.read), ::String)` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:30`)

|      % | Samples | Caller | Location                                                         |
| -----: | ------: | ------ | ---------------------------------------------------------------- |
| 100.0% |   1,346 | `read` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:30` |

##### `read` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:30`)

|      % | Samples | Caller           | Location          |
| -----: | ------: | ---------------- | ----------------- |
| 100.0% |   1,346 | `parse_workload` | `./profile.jl:18` |

##### `write(::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:340`)

|      % | Samples | Caller      | Location                                                           |
| -----: | ------: | ----------- | ------------------------------------------------------------------ |
| 100.0% |   1,217 | `#write#79` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:157` |

##### `var\"#write#98\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:340`)

|     % | Samples | Caller                                                                         | Location                                                           |
| ----: | ------: | ------------------------------------------------------------------------------ | ------------------------------------------------------------------ |
| 98.3% |   1,184 | `write(::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:340` |
|  1.7% |      21 | `#write#79`                                                                    | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:157` |

##### `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:218`)

|     % | Samples | Caller                                                                                                                                                       | Location                                                         |
| ----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------- |
| 99.9% |   1,177 | `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:87` |
|  0.1% |       1 | `read!`                                                                                                                                                      | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:87` |

##### `read!` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:87`)

|      % | Samples | Caller                                                                                                                     | Location                                                         |
| -----: | ------: | -------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| 100.0% |   1,178 | `var\"#read#6\"(::Bool, ::Nothing, ::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.read), ::String)` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:30` |

##### `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:87`)

|      % | Samples | Caller                                                                                                                                                                                                                           | Location                                                          |
| -----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| 100.0% |   1,177 | `read!`                                                                                                                                                                                                                          | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:87`  |
|  99.9% |   1,176 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)`                                                      | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:87`  |
|   0.6% |       7 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:218` |
|   0.3% |       3 | `var\"#read!#9\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Array}, ::Bool)`  | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:312` |

##### `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:218`)

|      % | Samples | Caller                                                                                                                                                                               | Location                                                          |
| -----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------- |
| 100.0% |   1,177 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:218` |

##### `(::JSON3.var\"#defaultminimum##0#defaultminimum##1\"{JSON3.Array{Int64, Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}}})(::Int64)` (`<unknown>`)

|      % | Samples | Caller      | Location                                                                                     |
| -----: | ------: | ----------- | -------------------------------------------------------------------------------------------- |
| 100.0% |       1 | `MappingRF` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98` |

#### Callees

Callees with the largest contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `[unknown function]` (`<unknown>`)

|      % | Samples | Callee        | Location                                                                                            |
| -----: | ------: | ------------- | --------------------------------------------------------------------------------------------------- |
| 100.0% |  25,793 | `capture_cpu` | `./profile.jl:29`                                                                                   |
|  93.0% |  23,994 | `#write#58`   | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:40`                                   |
|  69.1% |  17,829 | `#write#81`   | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl` |
|  66.1% |  17,050 | `#write#79`   | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:157`                                  |
|  23.6% |   6,077 | `sum`         | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:535`       |

##### `macro expansion` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/stdlib/v1.13/Profile/src/Profile.jl:60`)

|      % | Samples | Callee           | Location          |
| -----: | ------: | ---------------- | ----------------- |
| 100.0% |  25,792 | `parse_workload` | `./profile.jl:18` |

##### `capture_cpu` (`./profile.jl:29`)

|      % | Samples | Callee            | Location                                                                                                          |
| -----: | ------: | ----------------- | ----------------------------------------------------------------------------------------------------------------- |
| 100.0% |  25,793 | `macro expansion` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/stdlib/v1.13/Profile/src/Profile.jl:60` |

##### `eval(::Module, ::Any)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:489`)

|      % | Samples | Callee               | Location    |
| -----: | ------: | -------------------- | ----------- |
| 100.0% |  25,793 | `[unknown function]` | `<unknown>` |

##### `include_string(::typeof(identity), ::Module, ::String, ::String)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/loading.jl:2989`)

|      % | Samples | Callee                  | Location                                                                                    |
| -----: | ------: | ----------------------- | ------------------------------------------------------------------------------------------- |
| 100.0% |  25,793 | `eval(::Module, ::Any)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:489` |

##### `_include(::Function, ::Module, ::String)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/loading.jl:3083`)

|      % | Samples | Callee                                                             | Location                                                                                        |
| -----: | ------: | ------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------- |
| 100.0% |  25,793 | `include_string(::typeof(identity), ::Module, ::String, ::String)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/loading.jl:2989` |

##### `include(::Module, ::String)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base.jl:309`)

|      % | Samples | Callee                                     | Location                                                                                        |
| -----: | ------: | ------------------------------------------ | ----------------------------------------------------------------------------------------------- |
| 100.0% |  25,793 | `_include(::Function, ::Module, ::String)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/loading.jl:3083` |

##### `exec_options(::Base.JLOptions)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/client.jl:234`)

|      % | Samples | Callee                        | Location                                                                                    |
| -----: | ------: | ----------------------------- | ------------------------------------------------------------------------------------------- |
| 100.0% |  25,793 | `include(::Module, ::String)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base.jl:309` |

##### `_start()` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/client.jl:570`)

|      % | Samples | Callee                           | Location                                                                                      |
| -----: | ------: | -------------------------------- | --------------------------------------------------------------------------------------------- |
| 100.0% |  25,793 | `exec_options(::Base.JLOptions)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/client.jl:234` |

##### `parse_workload` (`./profile.jl:18`)

|     % | Samples | Callee               | Location                                                                                              |
| ----: | ------: | -------------------- | ----------------------------------------------------------------------------------------------------- |
| 93.0% |  23,997 | `[unknown function]` | `<unknown>`                                                                                           |
|  5.2% |   1,346 | `read`               | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:30`                                      |
|  1.5% |     392 | `length(::String)`   | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:540` |

##### `#write#58` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:40`)

|     % | Samples | Callee                    | Location                                                                                             |
| ----: | ------: | ------------------------- | ---------------------------------------------------------------------------------------------------- |
| 74.5% |  17,884 | `write`                   | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:147`                                   |
| 25.4% |   6,100 | `defaultminimum`          | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:12`                                    |
| <0.1% |       5 | `String(::Vector{UInt8})` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:66` |

##### `write` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:147`)

|      % | Samples | Callee                                                                                                | Location                                                           |
| -----: | ------: | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| 100.0% |  17,879 | `#write#79`                                                                                           | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:157` |
|  <0.1% |       1 | `getvalue(::Type{JSON3.Array}, ::Base.CodeUnits{UInt8, String}, ::Vector{UInt64}, ::Int64, ::UInt64)` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:131` |

##### `#write#79` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:157`)

|     % | Samples | Callee                                                                         | Location                                                                                     |
| ----: | ------: | ------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------- |
| 99.8% |  17,838 | `[unknown function]`                                                           | `<unknown>`                                                                                  |
| 12.9% |   2,300 | `indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64, ::Int64)`      | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163` |
| 10.7% |   1,915 | `iterate`                                                                      | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:81`                            |
|  9.5% |   1,692 | `iterate`                                                                      | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:78`                            |
|  6.8% |   1,217 | `write(::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:340`                           |

##### `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`)

|     % | Samples | Callee               | Location                                                                                                 |
| ----: | ------: | -------------------- | -------------------------------------------------------------------------------------------------------- |
| 95.8% |  17,077 | `[unknown function]` | `<unknown>`                                                                                              |
|  3.5% |     619 | `isassigned`         | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:1641` |
|  1.9% |     341 | `getindex`           | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:163`                                       |
|  0.1% |      19 | `indexed_iterate`    | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`             |
| <0.1% |       2 | `iterate`            | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/range.jl`                 |

##### `_symbol` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`)

|     % | Samples | Callee                                                                                                                             | Location                                                          |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| <0.1% |       1 | `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40` |

##### `getvalue` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:187`)

|      % | Samples | Callee    | Location                                                         |
| -----: | ------: | --------- | ---------------------------------------------------------------- |
| 100.0% |   7,236 | `_symbol` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:1` |

##### `defaultminimum` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:12`)

|     % | Samples | Callee                                                                                                                             | Location                                                                                           |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| 99.9% |   6,094 | `sum`                                                                                                                              | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:564`      |
|  1.1% |      68 | `isempty(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})`       | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:1127` |
|  0.1% |       6 | `isempty(::JSON3.Object{Base.CodeUnits{UInt8, String}, Vector{UInt64}})`                                                           | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:1127` |
| <0.1% |       2 | `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40`                                  |

##### `foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:46`)

|      % | Samples | Callee                                                                                                                             | Location                                                                                     |
| -----: | ------: | ---------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| 100.0% |   6,094 | `_foldl_impl`                                                                                                                      | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:56` |
|  99.8% |   6,079 | `_foldl_impl`                                                                                                                      | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60` |
|  <0.1% |       2 | `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})`                                                       | `<unknown>`                                                                                  |
|  <0.1% |       2 | `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40`                            |
|  <0.1% |       1 | `unescape(::JSON3.PointerString)`                                                                                                  | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/strings.jl:48`                          |

##### `mapfoldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:42`)

|      % | Samples | Callee       | Location                                                                                     |
| -----: | ------: | ------------ | -------------------------------------------------------------------------------------------- |
| 100.0% |   6,094 | `foldl_impl` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:46` |
|  <0.1% |       1 | `foldl_impl` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:47` |

##### `#mapfoldl#271` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:173`)

|      % | Samples | Callee          | Location                                                                                     |
| -----: | ------: | --------------- | -------------------------------------------------------------------------------------------- |
| 100.0% |   6,094 | `mapfoldl_impl` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:42` |

##### `mapfoldl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:173`)

|      % | Samples | Callee          | Location                                                                                      |
| -----: | ------: | --------------- | --------------------------------------------------------------------------------------------- |
| 100.0% |   6,094 | `#mapfoldl#271` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:173` |

##### `#mapreduce#275` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:306`)

|      % | Samples | Callee     | Location                                                                                      |
| -----: | ------: | ---------- | --------------------------------------------------------------------------------------------- |
| 100.0% |   6,094 | `mapfoldl` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:173` |

##### `mapreduce` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:306`)

|      % | Samples | Callee           | Location                                                                                      |
| -----: | ------: | ---------------- | --------------------------------------------------------------------------------------------- |
| 100.0% |   6,094 | `#mapreduce#275` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:306` |

##### `#sum#278` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:535`)

|      % | Samples | Callee      | Location                                                                                      |
| -----: | ------: | ----------- | --------------------------------------------------------------------------------------------- |
| 100.0% |   6,094 | `mapreduce` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:306` |

##### `sum` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:535`)

|      % | Samples | Callee     | Location                                                                                      |
| -----: | ------: | ---------- | --------------------------------------------------------------------------------------------- |
| 100.0% |   6,094 | `#sum#278` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:535` |

##### `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:56`)

|     % | Samples | Callee               | Location                                                                                         |
| ----: | ------: | -------------------- | ------------------------------------------------------------------------------------------------ |
| 99.8% |   6,080 | `MappingRF`          | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98`     |
|  0.2% |      11 | `iterate`            | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/iterators.jl:697` |
| <0.1% |       2 | `[unknown function]` | `<unknown>`                                                                                      |
| <0.1% |       1 | `iterate`            | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:75`                                |

##### `#sum#279` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:564`)

|      % | Samples | Callee | Location                                                                                      |
| -----: | ------: | ------ | --------------------------------------------------------------------------------------------- |
| 100.0% |   6,094 | `sum`  | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:535` |

##### `sum` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:564`)

|      % | Samples | Callee     | Location                                                                                      |
| -----: | ------: | ---------- | --------------------------------------------------------------------------------------------- |
| 100.0% |   6,094 | `#sum#279` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:564` |

##### `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` (`<unknown>`)

|      % | Samples | Callee                 | Location                                                                                     |
| -----: | ------: | ---------------------- | -------------------------------------------------------------------------------------------- |
| 100.0% |   6,079 | `[unknown function]`   | `<unknown>`                                                                                  |
|   0.2% |      11 | `defaultminimum`       | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:6`                             |
|   0.1% |       7 | `+(::UInt64, ::Int64)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:1054`  |
|   0.1% |       6 | `indexed_iterate`      | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/pair.jl:42`   |
|  <0.1% |       3 | `_foldl_impl`          | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60` |

##### `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`)

|     % | Samples | Callee                                                                       | Location                                                                                         |
| ----: | ------: | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 99.9% |   6,071 | `[unknown function]`                                                         | `<unknown>`                                                                                      |
| 50.1% |   3,044 | `iterate`                                                                    | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/iterators.jl:697` |
|  5.9% |     359 | `MappingRF`                                                                  | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98`     |
|  2.9% |     174 | `iterate`                                                                    | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:75`                                |
|  0.2% |      15 | `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` | `<unknown>`                                                                                      |

##### `#defaultminimum##0` (`<unknown>`)

|     % | Samples | Callee           | Location                                                                                                 |
| ----: | ------: | ---------------- | -------------------------------------------------------------------------------------------------------- |
| 89.5% |   5,426 | `defaultminimum` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:12`                                        |
|  8.1% |     492 | `isassigned`     | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:1641` |
|  5.8% |     349 | `getindex`       | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:163`                                       |
| <0.1% |       3 | `isassigned`     | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:1640` |
| <0.1% |       1 | `isassigned`     | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:1632` |

##### `getvalue` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:127`)

|     % | Samples | Callee                                                                                                                             | Location                                                                                    |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| 99.1% |   5,196 | `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40`                           |
|  0.8% |      41 | `setindex!(::Dict{Symbol, Int64}, ::Int64, ::Symbol)`                                                                              | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:356` |

##### `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40`)

|     % | Samples | Callee                                                     | Location                                                                                        |
| ----: | ------: | ---------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| 75.2% |   3,915 | `getvalue`                                                 | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:187`                              |
| 20.0% |   1,041 | `setindex!(::Dict{Symbol, Int64}, ::Int64, ::Symbol)`      | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:356`     |
|  2.1% |     109 | `+`                                                        | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:87`       |
|  1.1% |      56 | `ht_keyindex2_shorthash!(::Dict{Symbol, Int64}, ::Symbol)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:267`     |
|  1.0% |      50 | `getindex`                                                 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/subarray.jl:334` |

##### `iterate` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:81`)

|     % | Samples | Callee     | Location                                                           |
| ----: | ------: | ---------- | ------------------------------------------------------------------ |
| 89.0% |   3,504 | `getvalue` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:214` |
|  6.0% |     235 | `getvalue` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:218` |
|  2.1% |      83 | `getvalue` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:215` |
|  1.7% |      68 | `getvalue` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:216` |
|  0.6% |      23 | `getvalue` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl`     |

##### `getvalue` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:214`)

|     % | Samples | Callee     | Location                                                           |
| ----: | ------: | ---------- | ------------------------------------------------------------------ |
| 99.1% |   3,473 | `getvalue` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:127` |
|  0.9% |      31 | `getvalue` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:126` |

##### `iterate` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:78`)

|     % | Samples | Callee     | Location                                                           |
| ----: | ------: | ---------- | ------------------------------------------------------------------ |
| 99.1% |   3,318 | `getvalue` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:187` |
|  0.9% |      30 | `getvalue` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl`     |

##### `getindex` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:163`)

|     % | Samples | Callee     | Location                                                           |
| ----: | ------: | ---------- | ------------------------------------------------------------------ |
| 98.2% |   1,769 | `getvalue` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:127` |
|  1.8% |      32 | `getvalue` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:126` |

##### `var\"#read#6\"(::Bool, ::Nothing, ::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.read), ::String)` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:30`)

|     % | Samples | Callee                                                                         | Location                                                                                    |
| ----: | ------: | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------- |
| 87.5% |   1,178 | `read!`                                                                        | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:87`                            |
| 12.2% |     164 | `Array`                                                                        | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:648` |
|  0.3% |       4 | `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, Vector{UInt64}})` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40`                           |

##### `read` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:30`)

|      % | Samples | Callee                                                                                                                     | Location                                                         |
| -----: | ------: | -------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| 100.0% |   1,346 | `var\"#read#6\"(::Bool, ::Nothing, ::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.read), ::String)` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:30` |

##### `write(::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:340`)

|     % | Samples | Callee                                                                                                                                                                  | Location                                                           |
| ----: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| 97.3% |   1,184 | `var\"#write#98\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:340` |
|  0.1% |       1 | `realloc!(::Vector{UInt8}, ::Int64, ::Int64)`                                                                                                                           | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:51`  |

##### `var\"#write#98\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:340`)

|     % | Samples | Callee                                        | Location                                                                                       |
| ----: | ------: | --------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| 58.0% |     699 | `realloc!(::Vector{UInt8}, ::Int64, ::Int64)` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:51`                              |
| 16.0% |     193 | `escapelength`                                | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:331`                             |
|  7.1% |      85 | `macro expansion`                             | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/simdloop.jl:77` |
|  2.7% |      33 | `setindex!`                                   | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:1020`  |
|  2.0% |      24 | `macro expansion`                             | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/simdloop.jl:75` |

##### `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:218`)

|     % | Samples | Callee                                                                                                                                                                                                                           | Location                                                          |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| 99.9% |   1,177 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:218` |
|  0.8% |      10 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)`                                                      | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:87`  |

##### `read!` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:87`)

|     % | Samples | Callee                                                                                                                                                                               | Location                                                          |
| ----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------- |
| 99.9% |   1,177 | `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)`                         | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:87`  |
|  0.1% |       1 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:218` |

##### `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:87`)

|      % | Samples | Callee                                                                                                                                                                               | Location                                                                  |
| -----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------- |
| 100.0% |   1,177 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:218`         |
|  99.6% |   1,172 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Array}, ::Bool)`  | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:312`         |
|  23.0% |     271 | `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{String})`                                                                       | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:142`         |
|   2.8% |      33 | `typeparser(::Type{Float64}, ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Int16, ::Parsers.Options)`                                                                | `../profiler-md-julia-depot/packages/Parsers/05lwR/src/components.jl:392` |
|   1.4% |      17 | `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.False})`                                                                  | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:189`         |

##### `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:218`)

|     % | Samples | Callee                                                                                                                                                                      | Location                                                          |
| ----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| 99.9% |   1,176 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:87`  |
| 15.0% |     177 | `getbyte`                                                                                                                                                                   | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:8`  |
|  8.1% |      95 | `macro expansion`                                                                                                                                                           | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:29` |
|  5.3% |      62 | `string`                                                                                                                                                                    | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:88` |
|  5.2% |      61 | `macro expansion`                                                                                                                                                           | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:24` |

##### `(::JSON3.var\"#defaultminimum##0#defaultminimum##1\"{JSON3.Array{Int64, Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}}})(::Int64)` (`<unknown>`)

|      % | Samples | Callee       | Location                                                                                                 |
| -----: | ------: | ------------ | -------------------------------------------------------------------------------------------------------- |
| 100.0% |       1 | `isassigned` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:1632` |

## Hottest call stacks

Call stacks with the most samples collected in their leaf frame.

Common call stack: `#write#58` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:40`) ← `[unknown function]` ← `parse_workload` (`./profile.jl:18`) ← `macro expansion` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/stdlib/v1.13/Profile/src/Profile.jl:60`) ← `capture_cpu` (`./profile.jl:29`) ← `[unknown function]` ← `eval(::Module, ::Any)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:489`) ← `include_string(::typeof(identity), ::Module, ::String, ::String)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/loading.jl:2989`) ← `_include(::Function, ::Module, ::String)` (3083) ← `include(::Module, ::String)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base.jl:309`) ← `exec_options(::Base.JLOptions)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/client.jl:234`) ← `_start()` (570)

|    % | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ---: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 9.3% |   3,118 | `#write#79` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 5.5% |   1,842 | `#write#79` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 4.0% |   1,336 | `#write#79` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 3.1% |   1,028 | `indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64, ::Int64)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`) ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 2.5% |     828 | `_symbol` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`) ← `getvalue` (187) ← `iterate` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:78`) ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 2.4% |     791 | `_symbol` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`) ← `getvalue` (187) ← `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40`) ← `getvalue` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:127`) ← `getvalue` (214) ← `iterate` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:81`) ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 2.1% |     695 | `_symbol` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`) ← `getvalue` (187) ← `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40`) ← `getvalue` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:127`) ← `getvalue` (214) ← `iterate` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:81`) ← `iterate` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/iterators.jl:697`) ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:12`) ← `#defaultminimum##0` ← `[unknown function]` ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `[unknown function]` ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `MappingRF` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98`) ← `_foldl_impl` (56) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:12`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 1.9% |     647 | `indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64, ::Int64)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`) ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 1.8% |     607 | `_symbol` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`) ← `getvalue` (187) ← `iterate` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:78`) ← `iterate` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/iterators.jl:697`) ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `[unknown function]` ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `[unknown function]` ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:12`) ← `#defaultminimum##0` ← `[unknown function]` ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `[unknown function]` ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `MappingRF` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98`) ← `_foldl_impl` (56) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:12`)                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 1.4% |     486 | `indexed_iterate` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`) ← `indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64)` (163) ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 1.4% |     479 | `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `[unknown function]` ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `[unknown function]` ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `[unknown function]` ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:12`) ← `#defaultminimum##0` ← `[unknown function]` ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `[unknown function]` ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `MappingRF` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98`) ← `_foldl_impl` (56) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:12`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 1.3% |     445 | `_symbol` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`) ← `getvalue` (187) ← `iterate` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:78`) ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 1.3% |     436 | `_symbol` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`) ← `getvalue` (187) ← `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40`) ← `getvalue` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:127`) ← `getvalue` (214) ← `iterate` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:81`) ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 1.2% |     409 | `indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64, ::Int64)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`) ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 1.1% |     383 | `GenericMemory` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:588`) ← `Array` (648) ← `Array` (661) ← `zeros` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:626`) ← `zeros` (622) ← `realloc!(::Vector{UInt8}, ::Int64, ::Int64)` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:51`) ← `var\"#write#98\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` (340) ← `write(::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` (340) ← `#write#79` (157) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 1.1% |     382 | `_symbol` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`) ← `getvalue` (187) ← `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40`) ← `getvalue` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:127`) ← `getindex` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:163`) ← `isassigned` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:1641`) ← `#write#81` ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 1.1% |     355 | `_symbol` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`) ← `getvalue` (187) ← `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40`) ← `getvalue` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:127`) ← `getvalue` (214) ← `iterate` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:81`) ← `iterate` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/iterators.jl:697`) ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `[unknown function]` ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `[unknown function]` ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:12`) ← `#defaultminimum##0` ← `[unknown function]` ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `[unknown function]` ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `MappingRF` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98`) ← `_foldl_impl` (56) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:12`)                                                                                                                                    |
| 1.0% |     350 | `_symbol` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`) ← `getvalue` (187) ← `iterate` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:78`) ← `iterate` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/iterators.jl:697`) ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `[unknown function]` ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `[unknown function]` ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `[unknown function]` ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `[unknown function]` ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:12`) ← `#defaultminimum##0` ← `[unknown function]` ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `[unknown function]` ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `MappingRF` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98`) ← `_foldl_impl` (56) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:12`) |
| 1.0% |     324 | `_symbol` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`) ← `getvalue` (187) ← `iterate` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:78`) ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 0.9% |     302 | `#write#79` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |

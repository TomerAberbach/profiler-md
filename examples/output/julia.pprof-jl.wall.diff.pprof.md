# Sampling profile diff

Collected 30,275 → 29,933 samples (-342 samples, -1.1%).

| Category         | Change | Delta |             % |         Samples |
| ---------------- | -----: | ----: | ------------: | --------------: |
| Third-party      |  -0.8% |  -114 | 47.4% → 47.5% | 14,341 → 14,227 |
| Standard library |  +0.1% |    +5 | 26.3% → 26.6% |   7,949 → 7,954 |
| Unknown          |  -3.7% |  -254 | 22.4% → 21.8% |   6,789 → 6,535 |
| Native           |  +3.9% |   +45 |   3.8% → 4.0% |   1,142 → 1,187 |
| Ours             | -44.4% |   -24 |   0.2% → 0.1% |         54 → 30 |

Paths starting with `./` or `../` are relative to `/tmp/profiler-md-julia-project/`.

`…` stands for omitted frames.

## Call tree

Call paths to the hottest and most changed functions.

```
├── … 23,486 → 23,397 samples (77.6% → 78.2%, self 0.7%) [unknown function]
│   ├── … 14,971 → 14,725 samples (49.5% → 49.2%, self 20.5% → 21.1%) #write#79 at ../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157
│   │   ├── 2,071 → 1,850 samples (6.8% → 6.2%) indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64, ::Int64) at /nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163
│   │   ├── 1,832 → 1,728 samples (6.1% → 5.8%) iterate at ../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:81
│   │   │   ├── … 1,571 → 1,485 samples (5.2% → 5.0%) populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}}) at ../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40
│   │   │   │   ├── 1,235 → 1,078 samples (4.1% → 3.6%) getvalue at ../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:187
│   │   │   │   │   └── 1,235 → 1,078 samples (4.1% → 3.6%) _symbol at 1
│   │   │   │   └── 331 → 405 samples (1.1% → 1.4%) 6 more callees, led by (0.9% → 1.2%) setindex!(::Dict{Symbol, Int64}, ::Int64, ::Symbol) at /nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:356
│   │   │   └── … 67 → 34 samples (0.2% → 0.1%) unsafe_string at /nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:126
│   │   ├── 1,592 → 1,624 samples (5.3% → 5.4%) iterate at ../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:78
│   │   │   ├── 1,579 → 1,586 samples (5.2% → 5.3%) getvalue at ../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:187
│   │   │   │   └── 1,579 → 1,586 samples (5.2% → 5.3%, self 22.0% → 22.1% globally) _symbol at 1
│   │   │   └── 13 → 37 samples (<0.1% → 0.1%) getvalue at ../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl
│   │   ├── 575 → 460 samples (1.9% → 1.5%, self 1.0% → 0.4%) iterate at ../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:75
│   │   │   └── 284 → 328 samples (0.9% → 1.1%) 6 more callees, led by (0.5% → 0.6%) iterate at 81
│   │   ├── 416 → 462 samples (1.4% → 1.5%, self 4.1% → 4.2% globally) indexed_iterate at /nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163
│   │   ├── … 117 → 134 samples (0.4%) unsafe_string at /nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:130
│   │   └── 2,170 → 2,160 samples (7.2%) 18 more callees, led by (3.8% → 3.7%) write(::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String) at 340
│   ├── … 2,177 → 2,327 samples (7.2% → 7.8%) #defaultminimum##0
│   │   ├── … 1,388 → 1,469 samples (4.6% → 4.9%) _foldl_impl at /nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60
│   │   │   ├── 1,186 → 1,323 samples (3.9% → 4.4%) iterate at /nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/iterators.jl:697
│   │   │   │   ├── … 861 → 969 samples (2.8% → 3.2%) populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}}) at ../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40
│   │   │   │   │   ├── 162 → 248 samples (0.5% → 0.8%) setindex!(::Dict{Symbol, Int64}, ::Int64, ::Symbol) at /nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:356
│   │   │   │   │   │   ├── 119 → 140 samples (0.4% → 0.5%, self 1.6% → 1.5% globally) ht_keyindex2_shorthash!(::Dict{Symbol, Int64}, ::Symbol) at 267
│   │   │   │   │   │   └── … 4 → 65 samples (<0.1% → 0.2%, self 3.2% → 4.1% globally) GenericMemory at /nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:588
│   │   │   │   │   └── 695 → 720 samples (2.3% → 2.4%) 7 more callees, led by (2.2% → 2.3%) getvalue at ../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:187
│   │   │   │   └── 267 → 283 samples (0.9%) 6 more callees, led by (0.8% → 0.9%) iterate at ../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:78
│   │   │   └── … 47 → 0 samples (0.2% → 0.0%) Pair at /nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base.jl:12
│   │   └── 728 → 790 samples (2.4% → 2.6%) 6 more callees, led by (1.4% → 1.6%) isassigned at /nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:1641
│   ├── … 1,937 → 1,983 samples (6.4% → 6.6%, self 0.5% → 0.6%) _foldl_impl at /nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60
│   │   ├── 1,533 → 1,532 samples (5.1%) iterate at /nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/iterators.jl:697
│   │   │   └── 1,533 → 1,532 samples (5.1%) 8 more callees, led by (3.0%) iterate at ../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:78
│   │   ├── 132 → 144 samples (0.4% → 0.5%) iterate at ../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:75
│   │   └── 105 → 140 samples (0.3% → 0.5%) MappingRF at 98
│   │       └── 80 → 110 samples (0.3% → 0.4%, self 3.1% → 3.2% globally) (::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})
│   ├── … 1,738 → 1,677 samples (5.7% → 5.6%) parse_workload at ./profile.jl:18
│   │   └── 1,684 → 1,647 samples (5.6% → 5.5%) 2 more callees, led by (4.4% → 4.3%) read at ../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:30
│   ├── … 223 → 241 samples (0.7% → 0.8%) BottomRF at /nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:84
│   └── 2,227 → 2,222 samples (7.4%) 11 more callees, led by (3.3% → 3.2%) #write#81 at /nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl
└── 6,789 → 6,535 samples (22.4% → 21.8%) (anonymous)
```

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples collected within the function body, excluding callees. Categories account for at least 1.0% of self samples on the base or the current side.

|  Change | Delta |             % |       Samples | Function                                                                                                                                                                | Location                                                                                                 |
| ------: | ----: | ------------: | ------------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
|  +26.3% |  +259 |   3.2% → 4.1% |   983 → 1,242 | `GenericMemory`                                                                                                                                                         | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:588`              |
|   +1.9% |  +116 | 20.5% → 21.1% | 6,202 → 6,318 | `#write#79`                                                                                                                                                             | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`                                       |
| +117.1% |   +41 |   0.1% → 0.3% |       35 → 76 | `getvalue`                                                                                                                                                              | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl`                                           |
|   +3.9% |   +36 |   3.1% → 3.2% |     934 → 970 | `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})`                                                                                            | `<unknown>`                                                                                              |
|   +2.6% |   +32 |   4.1% → 4.2% | 1,229 → 1,261 | `indexed_iterate`                                                                                                                                                       | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`             |
|  +42.9% |   +30 |   0.2% → 0.3% |      70 → 100 | `\|`                                                                                                                                                                    | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:418`               |
|  +11.9% |   +24 |   0.7% → 0.8% |     202 → 226 | `_setindex!`                                                                                                                                                            | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:1025`            |
|  +10.2% |   +23 |   0.7% → 0.8% |     225 → 248 | `BottomRF`                                                                                                                                                              | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:84`             |
|  +15.4% |   +18 |   0.4% → 0.5% |     117 → 135 | `unsafe_string`                                                                                                                                                         | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:130`    |
|   +4.4% |    +9 |          0.7% |     204 → 213 | `[unknown function]`                                                                                                                                                    | `<unknown>`                                                                                              |
|  +28.1% |    +9 |          0.1% |       32 → 41 | `getindex`                                                                                                                                                              | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:401`        |
|  +52.9% |    +9 |          0.1% |       17 → 26 | `getvalue(::Type{JSON3.Array}, ::Base.CodeUnits{UInt8, String}, ::SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}, ::Int64, ::UInt64)`               | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:131`                                       |
|  +26.9% |    +7 |          0.1% |       26 → 33 | `size`                                                                                                                                                                  | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:10`         |
|  +38.9% |    +7 |          0.1% |       18 → 25 | `unescape(::JSON3.PointerString)`                                                                                                                                       | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/strings.jl:48`                                      |
|   +8.8% |    +7 |          0.3% |       80 → 87 | `var\"#write#98\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:340`                                       |
|  +50.0% |    +7 |  <0.1% → 0.1% |       14 → 21 | `setproperty!`                                                                                                                                                          | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base_compiler.jl:61`      |
|  +46.2% |    +6 |  <0.1% → 0.1% |       13 → 19 | `getvalue`                                                                                                                                                              | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:213`                                       |
| +600.0% |    +6 |         <0.1% |         1 → 7 | `isassigned`                                                                                                                                                            | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:1640` |
|   +6.7% |    +6 |          0.3% |       89 → 95 | `length_continued`                                                                                                                                                      | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/pointer.jl`               |
|  +40.0% |    +6 |  <0.1% → 0.1% |       15 → 21 | `iterate`                                                                                                                                                               | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/range.jl`                 |

##### Third-party

|  Change | Delta |             % |       Samples | Function                                                                                                                                                                                                                                                                              | Location                                                                  |
| ------: | ----: | ------------: | ------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
|   +1.9% |  +116 | 20.5% → 21.1% | 6,202 → 6,318 | `#write#79`                                                                                                                                                                                                                                                                           | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`        |
| +117.1% |   +41 |   0.1% → 0.3% |       35 → 76 | `getvalue`                                                                                                                                                                                                                                                                            | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl`            |
|  +52.9% |    +9 |          0.1% |       17 → 26 | `getvalue(::Type{JSON3.Array}, ::Base.CodeUnits{UInt8, String}, ::SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}, ::Int64, ::UInt64)`                                                                                                                             | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:131`        |
|  +38.9% |    +7 |          0.1% |       18 → 25 | `unescape(::JSON3.PointerString)`                                                                                                                                                                                                                                                     | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/strings.jl:48`       |
|   +8.8% |    +7 |          0.3% |       80 → 87 | `var\"#write#98\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)`                                                                                                               | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:340`        |
|  +46.2% |    +6 |  <0.1% → 0.1% |       13 → 19 | `getvalue`                                                                                                                                                                                                                                                                            | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:213`        |
|   +6.1% |    +5 |          0.3% |       82 → 87 | `getvalue`                                                                                                                                                                                                                                                                            | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:215`        |
|  +33.3% |    +5 |  <0.1% → 0.1% |       15 → 20 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)`                                                                                                           | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:87`          |
|  +26.3% |    +5 |          0.1% |       19 → 24 | `macro expansion`                                                                                                                                                                                                                                                                     | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:14`         |
| +133.3% |    +4 |         <0.1% |         3 → 7 | `defaultminimum`                                                                                                                                                                                                                                                                      | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:6`          |
| +400.0% |    +4 |         <0.1% |         1 → 5 | `var\"#write#81\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.ArrayType, ::Vector{UInt8}, ::Int64, ::Int64, ::JSON3.Array{Int64, Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:181`        |
| +100.0% |    +3 |         <0.1% |         3 → 6 | `write`                                                                                                                                                                                                                                                                               | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:147`        |
| +300.0% |    +3 |         <0.1% |         1 → 4 | `parsedigits`                                                                                                                                                                                                                                                                         | `../profiler-md-julia-depot/packages/Parsers/05lwR/src/floats.jl:316`     |
| +150.0% |    +3 |         <0.1% |         2 → 5 | `typeparser(::Type{Float64}, ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Int16, ::Parsers.Options)`                                                                                                                                                                 | `../profiler-md-julia-depot/packages/Parsers/05lwR/src/components.jl:392` |
|   +9.5% |    +2 |          0.1% |       21 → 23 | `write(::StructTypes.BoolType, ::Vector{UInt8}, ::Int64, ::Int64, ::Bool)`                                                                                                                                                                                                            | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:209`        |
| +200.0% |    +2 |         <0.1% |         1 → 3 | `parsefrac`                                                                                                                                                                                                                                                                           | `../profiler-md-julia-depot/packages/Parsers/05lwR/src/floats.jl:446`     |
| +200.0% |    +2 |         <0.1% |         1 → 3 | `defaultminimum(::Bool)`                                                                                                                                                                                                                                                              | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:4`          |
|     new |    +2 |  0.0% → <0.1% |         0 → 2 | `getvalue`                                                                                                                                                                                                                                                                            | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:184`        |
| +100.0% |    +1 |         <0.1% |         1 → 2 | `getvalue`                                                                                                                                                                                                                                                                            | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:193`        |
|     new |    +1 |  0.0% → <0.1% |         0 → 1 | `defaultminimum`                                                                                                                                                                                                                                                                      | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:12`         |

##### Standard library

|  Change | Delta |            % |       Samples | Function               | Location                                                                                                 |
| ------: | ----: | -----------: | ------------: | ---------------------- | -------------------------------------------------------------------------------------------------------- |
|  +26.3% |  +259 |  3.2% → 4.1% |   983 → 1,242 | `GenericMemory`        | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:588`              |
|   +2.6% |   +32 |  4.1% → 4.2% | 1,229 → 1,261 | `indexed_iterate`      | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`             |
|  +42.9% |   +30 |  0.2% → 0.3% |      70 → 100 | `\|`                   | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:418`               |
|  +11.9% |   +24 |  0.7% → 0.8% |     202 → 226 | `_setindex!`           | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:1025`            |
|  +10.2% |   +23 |  0.7% → 0.8% |     225 → 248 | `BottomRF`             | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:84`             |
|  +15.4% |   +18 |  0.4% → 0.5% |     117 → 135 | `unsafe_string`        | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:130`    |
|  +28.1% |    +9 |         0.1% |       32 → 41 | `getindex`             | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:401`        |
|  +26.9% |    +7 |         0.1% |       26 → 33 | `size`                 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:10`         |
|  +50.0% |    +7 | <0.1% → 0.1% |       14 → 21 | `setproperty!`         | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base_compiler.jl:61`      |
| +600.0% |    +6 |        <0.1% |         1 → 7 | `isassigned`           | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:1640` |
|   +6.7% |    +6 |         0.3% |       89 → 95 | `length_continued`     | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/pointer.jl`               |
|  +40.0% |    +6 | <0.1% → 0.1% |       15 → 21 | `iterate`              | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/range.jl`                 |
|  +75.0% |    +6 |        <0.1% |        8 → 14 | `memoryref`            | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:594`              |
| +300.0% |    +6 |        <0.1% |         2 → 8 | `getvalue`             | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl`        |
|   +7.9% |    +5 |         0.2% |       63 → 68 | `#write#81`            | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`      |
|  +33.3% |    +5 | <0.1% → 0.1% |       15 → 20 | `MappingRF`            | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98`             |
|  +21.7% |    +5 |         0.1% |       23 → 28 | `BottomRF`             | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:83`             |
| +133.3% |    +4 |        <0.1% |         3 → 7 | `wrap`                 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:3247`            |
| +200.0% |    +4 |        <0.1% |         2 → 6 | `+(::UInt64, ::Int64)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:1054`              |
|  +40.0% |    +4 |        <0.1% |       10 → 14 | `ncodeunits`           | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:161`    |

##### Native

| Change | Delta |           % |   Samples | Function                                                                     | Location    |
| -----: | ----: | ----------: | --------: | ---------------------------------------------------------------------------- | ----------- |
|  +3.9% |   +36 | 3.1% → 3.2% | 934 → 970 | `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` | `<unknown>` |
|  +4.4% |    +9 |        0.7% | 204 → 213 | `[unknown function]`                                                         | `<unknown>` |

#### Improvements

Functions with the largest decrease in samples collected within the function body, excluding callees. Categories account for at least 1.0% of self samples on the base or the current side.

| Change | Delta |             % |       Samples | Function                                                                                                                                                                                                                         | Location                                                                                              |
| -----: | ----: | ------------: | ------------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
|  -3.7% |  -254 | 22.4% → 21.8% | 6,789 → 6,535 | `(anonymous)`                                                                                                                                                                                                                    | `<unknown>`                                                                                           |
| -10.7% |  -222 |   6.8% → 6.2% | 2,072 → 1,850 | `indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64, ::Int64)`                                                                                                                                                        | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`          |
| -53.7% |  -174 |   1.1% → 0.5% |     324 → 150 | `iterate`                                                                                                                                                                                                                        | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:75`                                     |
|  -0.8% |   -52 | 22.0% → 22.1% | 6,675 → 6,623 | `_symbol`                                                                                                                                                                                                                        | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:1`                                      |
| -80.4% |   -45 |  0.2% → <0.1% |       56 → 11 | `Pair`                                                                                                                                                                                                                           | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base.jl:12`            |
| -15.1% |   -30 |   0.7% → 0.6% |     199 → 169 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:218`                                     |
| -44.4% |   -24 |   0.2% → 0.1% |       54 → 30 | `parse_workload`                                                                                                                                                                                                                 | `./profile.jl:18`                                                                                     |
| -31.9% |   -22 |          0.2% |       69 → 47 | `setindex!(::Dict{Symbol, Int64}, ::Int64, ::Symbol)`                                                                                                                                                                            | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:356`           |
| -27.4% |   -20 |          0.2% |       73 → 53 | `Dict`                                                                                                                                                                                                                           | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:80`            |
|  -3.9% |   -19 |          1.6% |     486 → 467 | `unsafe_load`                                                                                                                                                                                                                    | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/pointer.jl:151`        |
| -17.5% |   -17 |          0.3% |       97 → 80 | `unsafe_string`                                                                                                                                                                                                                  | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:126` |
| -11.5% |   -15 |          0.4% |     130 → 115 | `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{String})`                                                                                                                   | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:142`                                     |
|  -5.0% |   -12 |          0.8% |     240 → 228 | `_foldl_impl`                                                                                                                                                                                                                    | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`          |
| -46.2% |   -12 |  0.1% → <0.1% |       26 → 14 | `var\"#write#84\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.BoolType, ::Vector{UInt8}, ::Int64, ::Int64, ::Bool)`                                                              | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:209`                                    |
|  -3.7% |   -11 |          1.0% |     297 → 286 | `+`                                                                                                                                                                                                                              | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:87`             |
|  -1.9% |    -9 |   1.6% → 1.5% |     470 → 461 | `ht_keyindex2_shorthash!(::Dict{Symbol, Int64}, ::Symbol)`                                                                                                                                                                       | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:267`           |
|  -9.5% |    -8 |          0.3% |       84 → 76 | `getproperty`                                                                                                                                                                                                                    | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base_compiler.jl:57`   |
|  -7.8% |    -7 |          0.3% |       90 → 83 | `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)`                                                                     | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:87`                                      |
| -11.3% |    -7 |          0.2% |       62 → 55 | `&`                                                                                                                                                                                                                              | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:393`            |
|  -4.4% |    -7 |          0.5% |     160 → 153 | `getindex`                                                                                                                                                                                                                       | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:975`     |

##### Third-party

|  Change | Delta |             % |       Samples | Function                                                                                                                                                                                                                         | Location                                                              |
| ------: | ----: | ------------: | ------------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
|  -53.7% |  -174 |   1.1% → 0.5% |     324 → 150 | `iterate`                                                                                                                                                                                                                        | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:75`     |
|   -0.8% |   -52 | 22.0% → 22.1% | 6,675 → 6,623 | `_symbol`                                                                                                                                                                                                                        | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:1`      |
|  -15.1% |   -30 |   0.7% → 0.6% |     199 → 169 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:218`     |
|  -11.5% |   -15 |          0.4% |     130 → 115 | `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{String})`                                                                                                                   | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:142`     |
|  -46.2% |   -12 |  0.1% → <0.1% |       26 → 14 | `var\"#write#84\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.BoolType, ::Vector{UInt8}, ::Int64, ::Int64, ::Bool)`                                                              | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:209`    |
|   -7.8% |    -7 |          0.3% |       90 → 83 | `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)`                                                                     | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:87`      |
|  -60.0% |    -6 |         <0.1% |        10 → 4 | `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.False})`                                                                                                              | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:189`     |
| removed |    -5 |  <0.1% → 0.0% |         5 → 0 | `write(::StructTypes.ArrayType, ::Vector{UInt8}, ::Int64, ::Int64, ::JSON3.Array{Int64, Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})`                                     | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:181`    |
|  -55.6% |    -5 |         <0.1% |         9 → 4 | `write(::StructTypes.NumberType, ::Vector{UInt8}, ::Int64, ::Int64, ::Int64)`                                                                                                                                                    | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:224`    |
|  -80.0% |    -4 |         <0.1% |         5 → 1 | `#write#58`                                                                                                                                                                                                                      | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:40`     |
|  -11.4% |    -4 |          0.1% |       35 → 31 | `write(::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)`                                                                                                                                                   | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:340`    |
|  -30.8% |    -4 |         <0.1% |        13 → 9 | `parsedigits`                                                                                                                                                                                                                    | `../profiler-md-julia-depot/packages/Parsers/05lwR/src/floats.jl`     |
|  -44.4% |    -4 |         <0.1% |         9 → 5 | `Object`                                                                                                                                                                                                                         | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:8`      |
|  -75.0% |    -3 |         <0.1% |         4 → 1 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Array}, ::Bool)`                                              | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:312`     |
|   -2.5% |    -3 |          0.4% |     121 → 118 | `#write#81`                                                                                                                                                                                                                      | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:73`     |
|  -75.0% |    -3 |         <0.1% |         4 → 1 | `promoteeltype`                                                                                                                                                                                                                  | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl`        |
|   -5.1% |    -2 |          0.1% |       39 → 37 | `iterate`                                                                                                                                                                                                                        | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl`        |
| removed |    -2 |  <0.1% → 0.0% |         2 → 0 | `promoteeltype`                                                                                                                                                                                                                  | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:106`    |
|  -50.0% |    -2 |         <0.1% |         4 → 2 | `typeparser`                                                                                                                                                                                                                     | `../profiler-md-julia-depot/packages/Parsers/05lwR/src/floats.jl:152` |
| removed |    -2 |  <0.1% → 0.0% |         2 → 0 | `populateinds!`                                                                                                                                                                                                                  | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:66`     |

##### Standard library

|  Change | Delta |            % |       Samples | Function                                                                  | Location                                                                                              |
| ------: | ----: | -----------: | ------------: | ------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
|  -10.7% |  -222 |  6.8% → 6.2% | 2,072 → 1,850 | `indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64, ::Int64)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`          |
|  -80.4% |   -45 | 0.2% → <0.1% |       56 → 11 | `Pair`                                                                    | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base.jl:12`            |
|  -31.9% |   -22 |         0.2% |       69 → 47 | `setindex!(::Dict{Symbol, Int64}, ::Int64, ::Symbol)`                     | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:356`           |
|  -27.4% |   -20 |         0.2% |       73 → 53 | `Dict`                                                                    | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:80`            |
|   -3.9% |   -19 |         1.6% |     486 → 467 | `unsafe_load`                                                             | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/pointer.jl:151`        |
|  -17.5% |   -17 |         0.3% |       97 → 80 | `unsafe_string`                                                           | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:126` |
|   -5.0% |   -12 |         0.8% |     240 → 228 | `_foldl_impl`                                                             | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`          |
|   -3.7% |   -11 |         1.0% |     297 → 286 | `+`                                                                       | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:87`             |
|   -1.9% |    -9 |  1.6% → 1.5% |     470 → 461 | `ht_keyindex2_shorthash!(::Dict{Symbol, Int64}, ::Symbol)`                | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:267`           |
|   -9.5% |    -8 |         0.3% |       84 → 76 | `getproperty`                                                             | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base_compiler.jl:57`   |
|  -11.3% |    -7 |         0.2% |       62 → 55 | `&`                                                                       | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:393`            |
|   -4.4% |    -7 |         0.5% |     160 → 153 | `getindex`                                                                | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:975`     |
| removed |    -7 | <0.1% → 0.0% |         7 → 0 | `String(::Vector{UInt8})`                                                 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:66`  |
|  -37.5% |    -6 | 0.1% → <0.1% |       16 → 10 | `Array`                                                                   | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:649`           |
|   -9.5% |    -6 |         0.2% |       63 → 57 | `macro expansion`                                                         | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/simdloop.jl:75`        |
|  -71.4% |    -5 |        <0.1% |         7 → 2 | `checkbounds`                                                             | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/basic.jl:204`  |
|  -25.0% |    -5 |         0.1% |       20 → 15 | `macro expansion`                                                         | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/simdloop.jl`           |
|  -41.7% |    -5 |        <0.1% |        12 → 7 | `macro expansion`                                                         | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/simdloop.jl:72`        |
|  -55.6% |    -5 |        <0.1% |         9 → 4 | `ifelse`                                                                  | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:854`     |
|   -5.2% |    -4 |  0.3% → 0.2% |       77 → 73 | `==`                                                                      | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/promotion.jl:641`      |

##### Unknown

| Change | Delta |             % |       Samples | Function      | Location    |
| -----: | ----: | ------------: | ------------: | ------------- | ----------- |
|  -3.7% |  -254 | 22.4% → 21.8% | 6,789 → 6,535 | `(anonymous)` | `<unknown>` |

#### Lines

Lines with the largest change in contribution to each function's self samples.

##### `GenericMemory` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:588`)

| Change | Delta |      % |     Samples | Location                                                                                    |
| -----: | ----: | -----: | ----------: | ------------------------------------------------------------------------------------------- |
| +26.3% |  +259 | 100.0% | 983 → 1,242 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:588` |

##### `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`)

| Change | Delta |             % |       Samples | Location                                                           |
| -----: | ----: | ------------: | ------------: | ------------------------------------------------------------------ |
|  +2.6% |  +100 | 62.2% → 62.7% | 3,860 → 3,960 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157` |
|  +6.0% |   +74 | 19.8% → 20.7% | 1,231 → 1,305 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:60`  |
| +15.2% |   +62 |   6.6% → 7.4% |     408 → 470 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:73`  |
| -22.0% |   -59 |   4.3% → 3.3% |     268 → 209 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:155` |
| -30.4% |   -38 |   2.0% → 1.4% |      125 → 87 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:163` |

##### `indexed_iterate` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`)

| Change | Delta |      % |       Samples | Location                                                                                     |
| -----: | ----: | -----: | ------------: | -------------------------------------------------------------------------------------------- |
|  +2.6% |   +32 | 100.0% | 1,229 → 1,261 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163` |

##### `|` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:418`)

| Change | Delta |      % |  Samples | Location                                                                                   |
| -----: | ----: | -----: | -------: | ------------------------------------------------------------------------------------------ |
| +42.9% |   +30 | 100.0% | 70 → 100 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:418` |

##### `_setindex!` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:1025`)

| Change | Delta |      % |   Samples | Location                                                                                      |
| -----: | ----: | -----: | --------: | --------------------------------------------------------------------------------------------- |
| +11.9% |   +24 | 100.0% | 202 → 226 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:1025` |

##### `BottomRF` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:84`)

| Change | Delta |      % |   Samples | Location                                                                                     |
| -----: | ----: | -----: | --------: | -------------------------------------------------------------------------------------------- |
| +10.2% |   +23 | 100.0% | 225 → 248 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:84` |

##### `unsafe_string` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:130`)

| Change | Delta |      % |   Samples | Location                                                                                              |
| -----: | ----: | -----: | --------: | ----------------------------------------------------------------------------------------------------- |
| +15.4% |   +18 | 100.0% | 117 → 135 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:130` |

##### `[unknown function]` (`<unknown>`)

|  Change | Delta |             % |   Samples | Location |
| ------: | ----: | ------------: | --------: | -------- |
|  +20.6% |   +13 | 30.9% → 35.7% |   63 → 76 | 98       |
| removed |    -5 |   2.5% → 0.0% |     5 → 0 | 37       |
| +150.0% |    +3 |   1.0% → 2.3% |     2 → 5 | 11       |
|   -0.8% |    -1 | 61.8% → 58.7% | 126 → 125 | 147      |
|  +20.0% |    +1 |   2.5% → 2.8% |     5 → 6 | 181      |

##### `getindex` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:401`)

| Change | Delta |      % | Samples | Location                                                                                          |
| -----: | ----: | -----: | ------: | ------------------------------------------------------------------------------------------------- |
| +28.1% |    +9 | 100.0% | 32 → 41 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:401` |

##### `getvalue(::Type{JSON3.Array}, ::Base.CodeUnits{UInt8, String}, ::SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}, ::Int64, ::UInt64)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:131`)

| Change | Delta |           % | Samples | Location                                                           |
| -----: | ----: | ----------: | ------: | ------------------------------------------------------------------ |
|    new |    +2 | 0.0% → 7.7% |   0 → 2 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:131` |

##### `size` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:10`)

| Change | Delta |      % | Samples | Location                                                                                         |
| -----: | ----: | -----: | ------: | ------------------------------------------------------------------------------------------------ |
| +26.9% |    +7 | 100.0% | 26 → 33 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:10` |

##### `unescape(::JSON3.PointerString)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/strings.jl:48`)

| Change | Delta |             % | Samples | Location                                                             |
| -----: | ----: | ------------: | ------: | -------------------------------------------------------------------- |
| -50.0% |    -3 | 33.3% → 12.0% |   6 → 3 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/strings.jl:54`  |
|    new |    +3 |  0.0% → 12.0% |   0 → 3 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/strings.jl:60`  |
| -40.0% |    -2 | 27.8% → 12.0% |   5 → 3 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/strings.jl:116` |
|    new |    +1 |   0.0% → 4.0% |   0 → 1 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/strings.jl:56`  |
|    new |    +1 |   0.0% → 4.0% |   0 → 1 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/strings.jl:58`  |

##### `var\"#write#98\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:340`)

|  Change | Delta |             % | Samples | Location                                                           |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------ |
|  -32.3% |   -10 | 38.8% → 24.1% | 31 → 21 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:360` |
|  +26.3% |    +5 | 23.8% → 27.6% | 19 → 24 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:60`  |
|  +71.4% |    +5 |  8.8% → 13.8% |  7 → 12 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:351` |
|  -33.3% |    -4 |  15.0% → 9.2% |  12 → 8 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:340` |
| removed |    -2 |   2.5% → 0.0% |   2 → 0 | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:346` |

##### `setproperty!` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base_compiler.jl:61`)

| Change | Delta |      % | Samples | Location                                                                                            |
| -----: | ----: | -----: | ------: | --------------------------------------------------------------------------------------------------- |
| +50.0% |    +7 | 100.0% | 14 → 21 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base_compiler.jl:61` |

##### `getvalue` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:213`)

| Change | Delta |      % | Samples | Location                                                           |
| -----: | ----: | -----: | ------: | ------------------------------------------------------------------ |
| +46.2% |    +6 | 100.0% | 13 → 19 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:213` |

##### `isassigned` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:1640`)

|  Change | Delta |      % | Samples | Location                                                                                                 |
| ------: | ----: | -----: | ------: | -------------------------------------------------------------------------------------------------------- |
| +600.0% |    +6 | 100.0% |   1 → 7 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:1640` |

##### `getvalue` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:215`)

| Change | Delta |      % | Samples | Location                                                           |
| -----: | ----: | -----: | ------: | ------------------------------------------------------------------ |
|  +6.1% |    +5 | 100.0% | 82 → 87 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:215` |

##### `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:87`)

| Change | Delta |      % | Samples | Location                                                         |
| -----: | ----: | -----: | ------: | ---------------------------------------------------------------- |
| +33.3% |    +5 | 100.0% | 15 → 20 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:87` |

##### `macro expansion` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:14`)

| Change | Delta |      % | Samples | Location                                                          |
| -----: | ----: | -----: | ------: | ----------------------------------------------------------------- |
| +26.3% |    +5 | 100.0% | 19 → 24 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:14` |

##### `defaultminimum` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:6`)

|  Change | Delta |      % | Samples | Location                                                         |
| ------: | ----: | -----: | ------: | ---------------------------------------------------------------- |
| +133.3% |    +4 | 100.0% |   3 → 7 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:6` |

##### `var\"#write#81\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.ArrayType, ::Vector{UInt8}, ::Int64, ::Int64, ::JSON3.Array{Int64, Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:181`)

| Change | Delta |            % | Samples | Location                                                           |
| -----: | ----: | -----------: | ------: | ------------------------------------------------------------------ |
|    new |    +3 | 0.0% → 60.0% |   0 → 3 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:200` |
|    new |    +1 | 0.0% → 20.0% |   0 → 1 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:60`  |
|    new |    +1 | 0.0% → 20.0% |   0 → 1 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:181` |

##### `write` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:147`)

|  Change | Delta |      % | Samples | Location                                                           |
| ------: | ----: | -----: | ------: | ------------------------------------------------------------------ |
| +100.0% |    +3 | 100.0% |   3 → 6 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:147` |

##### `parsedigits` (`../profiler-md-julia-depot/packages/Parsers/05lwR/src/floats.jl:316`)

|  Change | Delta |      % | Samples | Location                                                              |
| ------: | ----: | -----: | ------: | --------------------------------------------------------------------- |
| +300.0% |    +3 | 100.0% |   1 → 4 | `../profiler-md-julia-depot/packages/Parsers/05lwR/src/floats.jl:316` |

##### `typeparser(::Type{Float64}, ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Int16, ::Parsers.Options)` (`../profiler-md-julia-depot/packages/Parsers/05lwR/src/components.jl:392`)

| Change | Delta |            % | Samples | Location                                                                  |
| -----: | ----: | -----------: | ------: | ------------------------------------------------------------------------- |
|    new |    +3 | 0.0% → 60.0% |   0 → 3 | `../profiler-md-julia-depot/packages/Parsers/05lwR/src/components.jl:394` |

##### `write(::StructTypes.BoolType, ::Vector{UInt8}, ::Int64, ::Int64, ::Bool)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:209`)

| Change | Delta |      % | Samples | Location                                                           |
| -----: | ----: | -----: | ------: | ------------------------------------------------------------------ |
|  +9.5% |    +2 | 100.0% | 21 → 23 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:209` |

##### `parsefrac` (`../profiler-md-julia-depot/packages/Parsers/05lwR/src/floats.jl:446`)

|  Change | Delta |      % | Samples | Location                                                              |
| ------: | ----: | -----: | ------: | --------------------------------------------------------------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `../profiler-md-julia-depot/packages/Parsers/05lwR/src/floats.jl:446` |

##### `defaultminimum(::Bool)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:4`)

|  Change | Delta |      % | Samples | Location                                                         |
| ------: | ----: | -----: | ------: | ---------------------------------------------------------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:4` |

##### `getvalue` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:184`)

| Change | Delta |             % | Samples | Location                                                           |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------------ |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:184` |

##### `getvalue` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:193`)

|  Change | Delta |      % | Samples | Location                                                           |
| ------: | ----: | -----: | ------: | ------------------------------------------------------------------ |
| +100.0% |    +1 | 100.0% |   1 → 2 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:193` |

##### `defaultminimum` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:12`)

| Change | Delta |             % | Samples | Location                                                          |
| -----: | ----: | ------------: | ------: | ----------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:12` |

##### `memoryref` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:594`)

| Change | Delta |      % | Samples | Location                                                                                    |
| -----: | ----: | -----: | ------: | ------------------------------------------------------------------------------------------- |
| +75.0% |    +6 | 100.0% |  8 → 14 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:594` |

##### `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`)

|  Change | Delta |             % | Samples | Location                                                                                                |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------------------- |
|  -34.5% |   -10 | 46.0% → 27.9% | 29 → 19 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:60`  |
| +350.0% |    +7 |  3.2% → 13.2% |   2 → 9 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:73`  |
|  -66.7% |    -4 |   9.5% → 2.9% |   6 → 2 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:187` |
| +300.0% |    +3 |   1.6% → 5.9% |   1 → 4 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:197` |
|  +50.0% |    +2 |   6.3% → 8.8% |   4 → 6 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:72`  |

##### `MappingRF` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98`)

| Change | Delta |      % | Samples | Location                                                                                     |
| -----: | ----: | -----: | ------: | -------------------------------------------------------------------------------------------- |
| +33.3% |    +5 | 100.0% | 15 → 20 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98` |

##### `BottomRF` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:83`)

| Change | Delta |      % | Samples | Location                                                                                     |
| -----: | ----: | -----: | ------: | -------------------------------------------------------------------------------------------- |
| +21.7% |    +5 | 100.0% | 23 → 28 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:83` |

##### `wrap` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:3247`)

|  Change | Delta |      % | Samples | Location                                                                                      |
| ------: | ----: | -----: | ------: | --------------------------------------------------------------------------------------------- |
| +133.3% |    +4 | 100.0% |   3 → 7 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:3247` |

##### `+(::UInt64, ::Int64)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:1054`)

|  Change | Delta |      % | Samples | Location                                                                                    |
| ------: | ----: | -----: | ------: | ------------------------------------------------------------------------------------------- |
| +200.0% |    +4 | 100.0% |   2 → 6 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:1054` |

##### `ncodeunits` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:161`)

| Change | Delta |      % | Samples | Location                                                                                              |
| -----: | ----: | -----: | ------: | ----------------------------------------------------------------------------------------------------- |
| +40.0% |    +4 | 100.0% | 10 → 14 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:161` |

##### `indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64, ::Int64)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`)

| Change | Delta |      % |       Samples | Location                                                                                     |
| -----: | ----: | -----: | ------------: | -------------------------------------------------------------------------------------------- |
| -10.7% |  -222 | 100.0% | 2,072 → 1,850 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163` |

##### `iterate` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:75`)

| Change | Delta |      % |   Samples | Location                                                          |
| -----: | ----: | -----: | --------: | ----------------------------------------------------------------- |
| -53.7% |  -174 | 100.0% | 324 → 150 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:75` |

##### `_symbol` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:1`)

| Change | Delta |      % |       Samples | Location                                                         |
| -----: | ----: | -----: | ------------: | ---------------------------------------------------------------- |
|  -0.8% |   -52 | 100.0% | 6,675 → 6,623 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:1` |

##### `Pair` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base.jl:12`)

| Change | Delta |      % | Samples | Location                                                                                   |
| -----: | ----: | -----: | ------: | ------------------------------------------------------------------------------------------ |
| -80.4% |   -45 | 100.0% | 56 → 11 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base.jl:12` |

##### `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:218`)

|  Change | Delta |             % |   Samples | Location                                                          |
| ------: | ----: | ------------: | --------: | ----------------------------------------------------------------- |
|  -25.9% |   -38 | 73.9% → 64.5% | 147 → 109 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:248` |
| removed |    -8 |   4.0% → 0.0% |     8 → 0 | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:284` |
|  +54.5% |    +6 |  5.5% → 10.1% |   11 → 17 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:247` |
|  +40.0% |    +6 |  7.5% → 12.4% |   15 → 21 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:298` |
|  +80.0% |    +4 |   2.5% → 5.3% |     5 → 9 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:268` |

##### `parse_workload` (`./profile.jl:18`)

| Change | Delta |      % | Samples | Location          |
| -----: | ----: | -----: | ------: | ----------------- |
| -44.4% |   -24 | 100.0% | 54 → 30 | `./profile.jl:18` |

##### `setindex!(::Dict{Symbol, Int64}, ::Int64, ::Symbol)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:356`)

| Change | Delta |             % | Samples | Location                                                                                    |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------- |
| -29.4% |   -15 | 73.9% → 76.6% | 51 → 36 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:368` |
| -44.4% |    -8 | 26.1% → 21.3% | 18 → 10 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:356` |
|    new |    +1 |   0.0% → 2.1% |   0 → 1 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:358` |

##### `Dict` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:80`)

| Change | Delta |      % | Samples | Location                                                                                   |
| -----: | ----: | -----: | ------: | ------------------------------------------------------------------------------------------ |
| -27.4% |   -20 | 100.0% | 73 → 53 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:80` |

##### `unsafe_load` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/pointer.jl:151`)

| Change | Delta |      % |   Samples | Location                                                                                       |
| -----: | ----: | -----: | --------: | ---------------------------------------------------------------------------------------------- |
|  -3.9% |   -19 | 100.0% | 486 → 467 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/pointer.jl:151` |

##### `unsafe_string` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:126`)

| Change | Delta |      % | Samples | Location                                                                                              |
| -----: | ----: | -----: | ------: | ----------------------------------------------------------------------------------------------------- |
| -17.5% |   -17 | 100.0% | 97 → 80 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:126` |

##### `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{String})` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:142`)

|  Change | Delta |             % | Samples | Location                                                          |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------------------- |
|  +23.5% |   +12 | 39.2% → 54.8% | 51 → 63 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:155` |
| +250.0% |    +5 |   1.5% → 6.1% |   2 → 7 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:167` |
| removed |    -2 |   1.5% → 0.0% |   2 → 0 | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:77`  |
|  -33.3% |    -1 |   2.3% → 1.7% |   3 → 2 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:142` |
|  +50.0% |    +1 |   1.5% → 2.6% |   2 → 3 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:149` |

##### `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`)

|  Change | Delta |             % |   Samples | Location                                                                                     |
| ------: | ----: | ------------: | --------: | -------------------------------------------------------------------------------------------- |
|   -1.9% |    -4 | 87.1% → 89.9% | 209 → 205 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60` |
| +300.0% |    +3 |   0.4% → 1.8% |     1 → 4 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:56` |
|  -28.6% |    -2 |   2.9% → 2.2% |     7 → 5 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:51` |

##### `var\"#write#84\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.BoolType, ::Vector{UInt8}, ::Int64, ::Int64, ::Bool)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:209`)

|  Change | Delta |             % | Samples | Location                                                           |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------ |
|  -72.2% |   -13 | 69.2% → 35.7% |  18 → 5 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:209` |
|  +28.6% |    +2 | 26.9% → 64.3% |   7 → 9 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:215` |
| removed |    -1 |   3.8% → 0.0% |   1 → 0 | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:210` |

##### `+` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:87`)

| Change | Delta |      % |   Samples | Location                                                                                  |
| -----: | ----: | -----: | --------: | ----------------------------------------------------------------------------------------- |
|  -3.7% |   -11 | 100.0% | 297 → 286 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:87` |

##### `ht_keyindex2_shorthash!(::Dict{Symbol, Int64}, ::Symbol)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:267`)

| Change | Delta |             % |   Samples | Location                                                                                    |
| -----: | ----: | ------------: | --------: | ------------------------------------------------------------------------------------------- |
| +17.6% |   +13 | 15.7% → 18.9% |   74 → 87 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:282` |
| -75.0% |    -9 |   2.6% → 0.7% |    12 → 3 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:267` |
|  -2.5% |    -7 | 59.4% → 59.0% | 279 → 272 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:291` |
| -24.0% |    -6 |   5.3% → 4.1% |   25 → 19 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:281` |
|    new |    +1 |   0.0% → 0.2% |     0 → 1 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:269` |

##### `getproperty` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base_compiler.jl:57`)

| Change | Delta |      % | Samples | Location                                                                                            |
| -----: | ----: | -----: | ------: | --------------------------------------------------------------------------------------------------- |
|  -9.5% |    -8 | 100.0% | 84 → 76 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base_compiler.jl:57` |

##### `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:87`)

|  Change | Delta |             % | Samples | Location                                                         |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------- |
|  +15.4% |    +4 | 28.9% → 36.1% | 26 → 30 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:88` |
| removed |    -3 |   3.3% → 0.0% |   3 → 0 | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:99` |
|   -8.3% |    -2 | 26.7% → 26.5% | 24 → 22 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:87` |
| removed |    -2 |   2.2% → 0.0% |   2 → 0 | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:89` |
|  -25.0% |    -2 |   8.9% → 7.2% |   8 → 6 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:93` |

##### `&` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:393`)

| Change | Delta |      % | Samples | Location                                                                                   |
| -----: | ----: | -----: | ------: | ------------------------------------------------------------------------------------------ |
| -11.3% |    -7 | 100.0% | 62 → 55 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:393` |

##### `getindex` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:975`)

| Change | Delta |      % |   Samples | Location                                                                                          |
| -----: | ----: | -----: | --------: | ------------------------------------------------------------------------------------------------- |
|  -4.4% |    -7 | 100.0% | 160 → 153 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:975` |

##### `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.False})` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:189`)

|  Change | Delta |             % | Samples | Location                                                          |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------------------- |
|  -75.0% |    -6 | 80.0% → 50.0% |   8 → 2 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:198` |
| +100.0% |    +1 | 10.0% → 50.0% |   1 → 2 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:189` |
| removed |    -1 |  10.0% → 0.0% |   1 → 0 | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:190` |

##### `write(::StructTypes.ArrayType, ::Vector{UInt8}, ::Int64, ::Int64, ::JSON3.Array{Int64, Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:181`)

|  Change | Delta |             % | Samples | Location                                                           |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------ |
| removed |    -5 | 100.0% → 0.0% |   5 → 0 | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:181` |

##### `write(::StructTypes.NumberType, ::Vector{UInt8}, ::Int64, ::Int64, ::Int64)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:224`)

| Change | Delta |      % | Samples | Location                                                           |
| -----: | ----: | -----: | ------: | ------------------------------------------------------------------ |
| -55.6% |    -5 | 100.0% |   9 → 4 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:224` |

##### `#write#58` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:40`)

|  Change | Delta |              % | Samples | Location                                                          |
| ------: | ----: | -------------: | ------: | ----------------------------------------------------------------- |
| removed |    -2 |   40.0% → 0.0% |   2 → 0 | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:41` |
| removed |    -1 |   20.0% → 0.0% |   1 → 0 | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:37` |
|  -50.0% |    -1 | 40.0% → 100.0% |   2 → 1 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:39` |

##### `write(::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:340`)

| Change | Delta |      % | Samples | Location                                                           |
| -----: | ----: | -----: | ------: | ------------------------------------------------------------------ |
| -11.4% |    -4 | 100.0% | 35 → 31 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:340` |

##### `Object` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:8`)

| Change | Delta |      % | Samples | Location                                                         |
| -----: | ----: | -----: | ------: | ---------------------------------------------------------------- |
| -44.4% |    -4 | 100.0% |   9 → 5 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:8` |

##### `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Array}, ::Bool)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:312`)

| Change | Delta |      % | Samples | Location                                                          |
| -----: | ----: | -----: | ------: | ----------------------------------------------------------------- |
| -75.0% |    -3 | 100.0% |   4 → 1 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:312` |

##### `#write#81` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:73`)

|  Change | Delta |             % | Samples | Location                                                           |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------ |
|  -50.0% |    -6 |   9.9% → 5.1% |  12 → 6 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:72`  |
|  -20.0% |    -3 | 12.4% → 10.2% | 15 → 12 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:73`  |
|   +5.6% |    +2 | 29.8% → 32.2% | 36 → 38 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:60`  |
|   +3.6% |    +2 | 45.5% → 48.3% | 55 → 57 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:200` |
| +100.0% |    +1 |   0.8% → 1.7% |   1 → 2 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:181` |

##### `promoteeltype` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:106`)

|  Change | Delta |             % | Samples | Location                                                           |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------ |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:106` |

##### `typeparser` (`../profiler-md-julia-depot/packages/Parsers/05lwR/src/floats.jl:152`)

| Change | Delta |      % | Samples | Location                                                              |
| -----: | ----: | -----: | ------: | --------------------------------------------------------------------- |
| -50.0% |    -2 | 100.0% |   4 → 2 | `../profiler-md-julia-depot/packages/Parsers/05lwR/src/floats.jl:152` |

##### `populateinds!` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:66`)

|  Change | Delta |             % | Samples | Location                                                          |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:66` |

##### `String(::Vector{UInt8})` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:66`)

|  Change | Delta |            % | Samples | Location                                                                                             |
| ------: | ----: | -----------: | ------: | ---------------------------------------------------------------------------------------------------- |
| removed |    -2 | 28.6% → 0.0% |   2 → 0 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:66` |

##### `Array` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:649`)

| Change | Delta |      % | Samples | Location                                                                                    |
| -----: | ----: | -----: | ------: | ------------------------------------------------------------------------------------------- |
| -37.5% |    -6 | 100.0% | 16 → 10 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:649` |

##### `macro expansion` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/simdloop.jl:75`)

| Change | Delta |      % | Samples | Location                                                                                       |
| -----: | ----: | -----: | ------: | ---------------------------------------------------------------------------------------------- |
|  -9.5% |    -6 | 100.0% | 63 → 57 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/simdloop.jl:75` |

##### `checkbounds` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/basic.jl:204`)

| Change | Delta |      % | Samples | Location                                                                                             |
| -----: | ----: | -----: | ------: | ---------------------------------------------------------------------------------------------------- |
| -71.4% |    -5 | 100.0% |   7 → 2 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/basic.jl:204` |

##### `macro expansion` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/simdloop.jl:72`)

| Change | Delta |      % | Samples | Location                                                                                       |
| -----: | ----: | -----: | ------: | ---------------------------------------------------------------------------------------------- |
| -41.7% |    -5 | 100.0% |  12 → 7 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/simdloop.jl:72` |

##### `ifelse` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:854`)

| Change | Delta |      % | Samples | Location                                                                                          |
| -----: | ----: | -----: | ------: | ------------------------------------------------------------------------------------------------- |
| -55.6% |    -5 | 100.0% |   9 → 4 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:854` |

##### `==` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/promotion.jl:641`)

| Change | Delta |      % | Samples | Location                                                                                         |
| -----: | ----: | -----: | ------: | ------------------------------------------------------------------------------------------------ |
|  -5.2% |    -4 | 100.0% | 77 → 73 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/promotion.jl:641` |

#### Callers

Callers with the largest change in contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `GenericMemory` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:588`)

| Change | Delta |             % |   Samples | Caller                                    | Location                                                                                    |
| -----: | ----: | ------------: | --------: | ----------------------------------------- | ------------------------------------------------------------------------------------------- |
| +89.8% |  +219 | 24.8% → 37.3% | 244 → 463 | `rehash!(::Dict{Symbol, Int64}, ::Int64)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:138` |
|  +5.4% |   +40 | 74.7% → 62.3% | 734 → 774 | `Array`                                   | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:648` |

##### `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`)

|  Change | Delta |             % |       Samples | Caller               | Location                                                                                            |
| ------: | ----: | ------------: | ------------: | -------------------- | --------------------------------------------------------------------------------------------------- |
|   +1.8% |  +109 | 99.9% → 99.8% | 6,196 → 6,305 | `[unknown function]` | `<unknown>`                                                                                         |
| +150.0% |    +6 |   0.1% → 0.2% |        4 → 10 | `write`              | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:147`                                  |
|     new |    +1 |  0.0% → <0.1% |         0 → 1 | `#write#81`          | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl` |

##### `getvalue` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl`)

|  Change | Delta |             % | Samples | Caller    | Location                                                          |
| ------: | ----: | ------------: | ------: | --------- | ----------------------------------------------------------------- |
| +333.3% |   +30 | 25.7% → 51.3% |  9 → 39 | `iterate` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:78` |
|  +42.3% |   +11 | 74.3% → 48.7% | 26 → 37 | `iterate` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:81` |

##### `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` (`<unknown>`)

| Change | Delta |             % |   Samples | Caller               | Location                                                                                     |
| -----: | ----: | ------------: | --------: | -------------------- | -------------------------------------------------------------------------------------------- |
| +25.9% |   +30 | 12.4% → 15.1% | 116 → 146 | `MappingRF`          | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98` |
|  +1.1% |    +9 | 86.9% → 84.6% | 812 → 821 | `[unknown function]` | `<unknown>`                                                                                  |
| -66.7% |    -4 |   0.6% → 0.2% |     6 → 2 | `_foldl_impl`        | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60` |
|    new |    +1 |   0.0% → 0.1% |     0 → 1 | `foldl_impl`         | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:46` |

##### `indexed_iterate` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`)

| Change | Delta |             % |   Samples | Caller                                                           | Location                                                                                            |
| -----: | ----: | ------------: | --------: | ---------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| +15.2% |   +55 | 29.4% → 33.0% | 361 → 416 | `#write#79`                                                      | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`                                  |
| -21.0% |   -13 |   5.0% → 3.9% |   62 → 49 | `indexed_iterate`                                                | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`        |
|  -1.0% |    -8 | 64.9% → 62.6% | 798 → 790 | `indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`        |
| -25.0% |    -2 |   0.7% → 0.5% |     8 → 6 | `#write#81`                                                      | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl` |

##### `|` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:418`)

| Change | Delta |             % | Samples | Caller          | Location                                                                                    |
| -----: | ----: | ------------: | ------: | --------------- | ------------------------------------------------------------------------------------------- |
| +40.3% |   +27 | 95.7% → 94.0% | 67 → 94 | `string`        | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:88`                           |
| +33.3% |    +1 |   4.3% → 4.0% |   3 → 4 | `promoteeltype` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:96`                           |
|    new |    +1 |   0.0% → 1.0% |   0 → 1 | `\|`            | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:1058` |
|    new |    +1 |   0.0% → 1.0% |   0 → 1 | `parsefrac`     | `../profiler-md-julia-depot/packages/Parsers/05lwR/src/floats.jl:496`                       |

##### `_setindex!` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:1025`)

| Change | Delta |             % |   Samples | Caller               | Location                                                                                      |
| -----: | ----: | ------------: | --------: | -------------------- | --------------------------------------------------------------------------------------------- |
| +10.3% |   +20 | 96.0% → 94.7% | 194 → 214 | `setindex!`          | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:1020` |
| +50.0% |    +4 |   4.0% → 5.3% |    8 → 12 | `[unknown function]` | `<unknown>`                                                                                   |

##### `BottomRF` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:84`)

|  Change | Delta |             % |   Samples | Caller               | Location                                                                                     |
| ------: | ----: | ------------: | --------: | -------------------- | -------------------------------------------------------------------------------------------- |
|   +8.1% |   +18 | 99.1% → 97.2% | 223 → 241 | `[unknown function]` | `<unknown>`                                                                                  |
| +250.0% |    +5 |   0.9% → 2.8% |     2 → 7 | `MappingRF`          | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98` |

##### `unsafe_string` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:130`)

| Change | Delta |      % |   Samples | Caller   | Location                                                                                              |
| -----: | ----: | -----: | --------: | -------- | ----------------------------------------------------------------------------------------------------- |
| +15.4% |   +18 | 100.0% | 117 → 135 | `String` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:145` |

##### `[unknown function]` (`<unknown>`)

|  Change | Delta |             % |   Samples | Caller                                                                       | Location                                                                                            |
| ------: | ----: | ------------: | --------: | ---------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
|  +20.6% |   +13 | 30.9% → 35.7% |   63 → 76 | `_foldl_impl`                                                                | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`        |
| removed |    -5 |   2.5% → 0.0% |     5 → 0 | `parse_workload`                                                             | `./profile.jl:18`                                                                                   |
|  +50.0% |    +2 |   2.0% → 2.8% |     4 → 6 | `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` | `<unknown>`                                                                                         |
|   +1.0% |    +1 | 51.0% → 49.3% | 104 → 105 | `#write#79`                                                                  | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`                                  |
|   -3.7% |    -1 | 13.2% → 12.2% |   27 → 26 | `#write#81`                                                                  | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl` |

##### `getindex` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:401`)

|  Change | Delta |             % | Samples | Caller                                    | Location                                                                                    |
| ------: | ----: | ------------: | ------: | ----------------------------------------- | ------------------------------------------------------------------------------------------- |
| +100.0% |    +7 | 21.9% → 34.1% |  7 → 14 | `rehash!(::Dict{Symbol, Int64}, ::Int64)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:138` |
|  +10.5% |    +2 | 59.4% → 51.2% | 19 → 21 | `isslotempty`                             | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:134` |
|  +20.0% |    +1 | 15.6% → 14.6% |   5 → 6 | `isslotfilled`                            | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:135` |
| removed |    -1 |   3.1% → 0.0% |   1 → 0 | `isslotmissing`                           | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:136` |

##### `getvalue(::Type{JSON3.Array}, ::Base.CodeUnits{UInt8, String}, ::SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}, ::Int64, ::UInt64)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:131`)

| Change | Delta |             % | Samples | Caller               | Location                                                           |
| -----: | ----: | ------------: | ------: | -------------------- | ------------------------------------------------------------------ |
| +66.7% |    +8 | 70.6% → 76.9% | 12 → 20 | `getvalue`           | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:216` |
| +33.3% |    +1 | 17.6% → 15.4% |   3 → 4 | `[unknown function]` | `<unknown>`                                                        |

##### `size` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:10`)

| Change | Delta |      % | Samples | Caller   | Location                                                                                         |
| -----: | ----: | -----: | ------: | -------- | ------------------------------------------------------------------------------------------------ |
| +26.9% |    +7 | 100.0% | 26 → 33 | `length` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:11` |

##### `unescape(::JSON3.PointerString)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/strings.jl:48`)

| Change | Delta |      % | Samples | Caller     | Location                                                           |
| -----: | ----: | -----: | ------: | ---------- | ------------------------------------------------------------------ |
| +38.9% |    +7 | 100.0% | 18 → 25 | `getvalue` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:193` |

##### `var\"#write#98\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:340`)

| Change | Delta |             % | Samples | Caller                                                                         | Location                                                           |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------------------------ | ------------------------------------------------------------------ |
| +26.5% |   +13 | 61.3% → 71.3% | 49 → 62 | `write(::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:340` |
| -19.4% |    -6 | 38.8% → 28.7% | 31 → 25 | `#write#79`                                                                    | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157` |

##### `setproperty!` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base_compiler.jl:61`)

|  Change | Delta |             % | Samples | Caller                                                     | Location                                                                                    |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| +300.0% |    +6 | 14.3% → 38.1% |   2 → 8 | `_setindex!`                                               | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:329` |
|  +22.2% |    +2 | 64.3% → 52.4% |  9 → 11 | `rehash!(::Dict{Symbol, Int64}, ::Int64)`                  | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:138` |
|  -33.3% |    -1 |  21.4% → 9.5% |   3 → 2 | `ht_keyindex2_shorthash!(::Dict{Symbol, Int64}, ::Symbol)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:267` |

##### `getvalue` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:213`)

| Change | Delta |      % | Samples | Caller    | Location                                                          |
| -----: | ----: | -----: | ------: | --------- | ----------------------------------------------------------------- |
| +46.2% |    +6 | 100.0% | 13 → 19 | `iterate` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:81` |

##### `isassigned` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:1640`)

|  Change | Delta |             % | Samples | Caller                                                                                                                                                                                                                                                                                | Location                                                                                            |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
|     new |    +4 |  0.0% → 57.1% |   0 → 4 | `#write#81`                                                                                                                                                                                                                                                                           | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl` |
|     new |    +2 |  0.0% → 28.6% |   0 → 2 | `(::JSON3.var\"#defaultminimum##0#defaultminimum##1\"{JSON3.Array{Int64, Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}}})(::Int64)`                                                                                               | `<unknown>`                                                                                         |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `#defaultminimum##0`                                                                                                                                                                                                                                                                  | `<unknown>`                                                                                         |
|     new |    +1 |  0.0% → 14.3% |   0 → 1 | `var\"#write#81\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.ArrayType, ::Vector{UInt8}, ::Int64, ::Int64, ::JSON3.Array{Int64, Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:181`                                  |

##### `length_continued` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/pointer.jl`)

| Change | Delta |      % | Samples | Caller             | Location                                                                                              |
| -----: | ----: | -----: | ------: | ------------------ | ----------------------------------------------------------------------------------------------------- |
|  +6.7% |    +6 | 100.0% | 89 → 95 | `length(::String)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:540` |

##### `iterate` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/range.jl`)

| Change | Delta |             % | Samples | Caller      | Location                                                                                            |
| -----: | ----: | ------------: | ------: | ----------- | --------------------------------------------------------------------------------------------------- |
|    new |   +19 |  0.0% → 90.5% |  0 → 19 | `#write#81` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl` |
| -86.7% |   -13 | 100.0% → 9.5% |  15 → 2 | `#write#81` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:73`                                   |

##### `getvalue` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:215`)

| Change | Delta |      % | Samples | Caller    | Location                                                          |
| -----: | ----: | -----: | ------: | --------- | ----------------------------------------------------------------- |
|  +6.1% |    +5 | 100.0% | 82 → 87 | `iterate` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:81` |

##### `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:87`)

| Change | Delta |             % | Samples | Caller                                                                                                                                                                                                                           | Location                                                          |
| -----: | ----: | ------------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| +40.0% |    +4 | 66.7% → 70.0% | 10 → 14 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:218` |
| +20.0% |    +1 | 33.3% → 30.0% |   5 → 6 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)`                                             | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:218` |

##### `macro expansion` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:14`)

| Change | Delta |              % | Samples | Caller                                                                                                                                                                                                                           | Location                                                          |
| -----: | ----: | -------------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| +15.8% |    +3 | 100.0% → 91.7% | 19 → 22 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:218` |
|    new |    +2 |    0.0% → 8.3% |   0 → 2 | `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{String})`                                                                                                                   | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:142` |

##### `defaultminimum` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:6`)

|  Change | Delta |      % | Samples | Caller                                                                       | Location    |
| ------: | ----: | -----: | ------: | ---------------------------------------------------------------------------- | ----------- |
| +133.3% |    +4 | 100.0% |   3 → 7 | `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` | `<unknown>` |

##### `var\"#write#81\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.ArrayType, ::Vector{UInt8}, ::Int64, ::Int64, ::JSON3.Array{Int64, Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:181`)

| Change | Delta |            % | Samples | Caller      | Location                                                           |
| -----: | ----: | -----------: | ------: | ----------- | ------------------------------------------------------------------ |
|    new |    +4 | 0.0% → 80.0% |   0 → 4 | `#write#79` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157` |

##### `write` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:147`)

|  Change | Delta |      % | Samples | Caller      | Location                                                          |
| ------: | ----: | -----: | ------: | ----------- | ----------------------------------------------------------------- |
| +100.0% |    +3 | 100.0% |   3 → 6 | `#write#58` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:40` |

##### `parsedigits` (`../profiler-md-julia-depot/packages/Parsers/05lwR/src/floats.jl:316`)

|  Change | Delta |      % | Samples | Caller        | Location                                                              |
| ------: | ----: | -----: | ------: | ------------- | --------------------------------------------------------------------- |
| +300.0% |    +3 | 100.0% |   1 → 4 | `parsedigits` | `../profiler-md-julia-depot/packages/Parsers/05lwR/src/floats.jl:302` |

##### `typeparser(::Type{Float64}, ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Int16, ::Parsers.Options)` (`../profiler-md-julia-depot/packages/Parsers/05lwR/src/components.jl:392`)

|  Change | Delta |             % | Samples | Caller                                                                                                                                                                      | Location                                                         |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| +300.0% |    +3 | 50.0% → 80.0% |   1 → 4 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:87` |

##### `write(::StructTypes.BoolType, ::Vector{UInt8}, ::Int64, ::Int64, ::Bool)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:209`)

| Change | Delta |      % | Samples | Caller      | Location                                                           |
| -----: | ----: | -----: | ------: | ----------- | ------------------------------------------------------------------ |
|  +9.5% |    +2 | 100.0% | 21 → 23 | `#write#79` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157` |

##### `parsefrac` (`../profiler-md-julia-depot/packages/Parsers/05lwR/src/floats.jl:446`)

|  Change | Delta |      % | Samples | Caller        | Location                                                              |
| ------: | ----: | -----: | ------: | ------------- | --------------------------------------------------------------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `parsedigits` | `../profiler-md-julia-depot/packages/Parsers/05lwR/src/floats.jl:398` |

##### `defaultminimum(::Bool)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:4`)

|  Change | Delta |      % | Samples | Caller                                                                       | Location    |
| ------: | ----: | -----: | ------: | ---------------------------------------------------------------------------- | ----------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` | `<unknown>` |

##### `getvalue` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:184`)

| Change | Delta |            % | Samples | Caller                                                                                                                             | Location                                                          |
| -----: | ----: | -----------: | ------: | ---------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40` |
|    new |    +1 | 0.0% → 50.0% |   0 → 1 | `iterate`                                                                                                                          | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:78` |

##### `getvalue` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:193`)

|  Change | Delta |      % | Samples | Caller     | Location                                                           |
| ------: | ----: | -----: | ------: | ---------- | ------------------------------------------------------------------ |
| +100.0% |    +1 | 100.0% |   1 → 2 | `getvalue` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:218` |

##### `defaultminimum` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:12`)

| Change | Delta |             % | Samples | Caller               | Location    |
| -----: | ----: | ------------: | ------: | -------------------- | ----------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `#defaultminimum##0` | `<unknown>` |

##### `memoryref` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:594`)

| Change | Delta |              % | Samples | Caller       | Location                                                                                             |
| -----: | ----: | -------------: | ------: | ------------ | ---------------------------------------------------------------------------------------------------- |
| +62.5% |    +5 | 100.0% → 92.9% |  8 → 13 | `_setindex!` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/genericmemory.jl:262` |
|    new |    +1 |    0.0% → 7.1% |   0 → 1 | `wrap`       | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:3245`        |

##### `getvalue` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl`)

|  Change | Delta |      % | Samples | Caller     | Location                                                           |
| ------: | ----: | -----: | ------: | ---------- | ------------------------------------------------------------------ |
| +300.0% |    +6 | 100.0% |   2 → 8 | `getvalue` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:218` |

##### `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`)

| Change | Delta |      % | Samples | Caller               | Location    |
| -----: | ----: | -----: | ------: | -------------------- | ----------- |
|  +7.9% |    +5 | 100.0% | 63 → 68 | `[unknown function]` | `<unknown>` |

##### `MappingRF` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98`)

|  Change | Delta |             % | Samples | Caller               | Location                                                                                     |
| ------: | ----: | ------------: | ------: | -------------------- | -------------------------------------------------------------------------------------------- |
| +350.0% |    +7 | 13.3% → 45.0% |   2 → 9 | `[unknown function]` | `<unknown>`                                                                                  |
|  -16.7% |    -2 | 80.0% → 50.0% | 12 → 10 | `_foldl_impl`        | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60` |

##### `BottomRF` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:83`)

| Change | Delta |      % | Samples | Caller      | Location                                                                                     |
| -----: | ----: | -----: | ------: | ----------- | -------------------------------------------------------------------------------------------- |
| +21.7% |    +5 | 100.0% | 23 → 28 | `MappingRF` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98` |

##### `wrap` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:3247`)

|  Change | Delta |      % | Samples | Caller         | Location                                                                                        |
| ------: | ----: | -----: | ------: | -------------- | ----------------------------------------------------------------------------------------------- |
| +133.3% |    +4 | 100.0% |   3 → 7 | `StringVector` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/iobuffer.jl:168` |

##### `+(::UInt64, ::Int64)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:1054`)

|  Change | Delta |      % | Samples | Caller                                                                       | Location    |
| ------: | ----: | -----: | ------: | ---------------------------------------------------------------------------- | ----------- |
| +200.0% |    +4 | 100.0% |   2 → 6 | `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` | `<unknown>` |

##### `ncodeunits` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:161`)

|  Change | Delta |             % | Samples | Caller                                                                                                                                                                  | Location                                                                                             |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
|  +22.2% |    +2 | 90.0% → 78.6% |  9 → 11 | `var\"#write#98\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:340`                                   |
| +200.0% |    +2 | 10.0% → 21.4% |   1 → 3 | `checkbounds`                                                                                                                                                           | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/basic.jl:204` |

##### `indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64, ::Int64)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`)

| Change | Delta |      % |       Samples | Caller      | Location                                                           |
| -----: | ----: | -----: | ------------: | ----------- | ------------------------------------------------------------------ |
| -10.7% |  -222 | 100.0% | 2,072 → 1,850 | `#write#79` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157` |

##### `iterate` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:75`)

| Change | Delta |             % |  Samples | Caller                                                                                                                       | Location                                                                                           |
| -----: | ----: | ------------: | -------: | ---------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| -69.9% |  -137 | 60.5% → 39.3% | 196 → 59 | `#write#79`                                                                                                                  | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`                                 |
| -18.9% |   -18 | 29.3% → 51.3% |  95 → 77 | `iterate`                                                                                                                    | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:75`                                  |
| -56.7% |   -17 |   9.3% → 8.7% |  30 → 13 | `iterate`                                                                                                                    | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/iterators.jl:697`   |
| -66.7% |    -2 |   0.9% → 0.7% |    3 → 1 | `isempty(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:1127` |

##### `_symbol` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:1`)

| Change | Delta |      % |       Samples | Caller     | Location                                                           |
| -----: | ----: | -----: | ------------: | ---------- | ------------------------------------------------------------------ |
|  -0.8% |   -52 | 100.0% | 6,675 → 6,623 | `getvalue` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:187` |

##### `Pair` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base.jl:12`)

| Change | Delta |      % | Samples | Caller    | Location                                                          |
| -----: | ----: | -----: | ------: | --------- | ----------------------------------------------------------------- |
| -80.4% |   -45 | 100.0% | 56 → 11 | `iterate` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:81` |

##### `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:218`)

| Change | Delta |             % |   Samples | Caller                                                                                                                                                                               | Location                                                          |
| -----: | ----: | ------------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------- |
| -14.9% |   -29 | 98.0% → 98.2% | 195 → 166 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:218` |
| -25.0% |    -1 |   2.0% → 1.8% |     4 → 3 | `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)`                         | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:87`  |

##### `parse_workload` (`./profile.jl:18`)

| Change | Delta |      % | Samples | Caller            | Location                                                                                                          |
| -----: | ----: | -----: | ------: | ----------------- | ----------------------------------------------------------------------------------------------------------------- |
| -44.4% |   -24 | 100.0% | 54 → 30 | `macro expansion` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/stdlib/v1.13/Profile/src/Profile.jl:82` |

##### `setindex!(::Dict{Symbol, Int64}, ::Int64, ::Symbol)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:356`)

|  Change | Delta |             % | Samples | Caller                                                                                                                             | Location                                                           |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
|  -36.0% |   -18 | 72.5% → 68.1% | 50 → 32 | `getvalue`                                                                                                                         | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:127` |
|  -16.7% |    -3 | 26.1% → 31.9% | 18 → 15 | `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40`  |
| removed |    -1 |   1.4% → 0.0% |   1 → 0 | `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, Vector{UInt64}})`                                                     | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40`  |

##### `Dict` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:80`)

| Change | Delta |      % | Samples | Caller     | Location                                                           |
| -----: | ----: | -----: | ------: | ---------- | ------------------------------------------------------------------ |
| -27.4% |   -20 | 100.0% | 73 → 53 | `getvalue` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:126` |

##### `unsafe_load` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/pointer.jl:151`)

| Change | Delta |      % |   Samples | Caller        | Location                                                                                       |
| -----: | ----: | -----: | --------: | ------------- | ---------------------------------------------------------------------------------------------- |
|  -3.9% |   -19 | 100.0% | 486 → 467 | `unsafe_load` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/pointer.jl:151` |

##### `unsafe_string` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:126`)

| Change | Delta |      % | Samples | Caller     | Location                                                           |
| -----: | ----: | -----: | ------: | ---------- | ------------------------------------------------------------------ |
| -17.5% |   -17 | 100.0% | 97 → 80 | `getvalue` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:195` |

##### `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{String})` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:142`)

|  Change | Delta |             % |   Samples | Caller                                                                                                                                                                      | Location                                                         |
| ------: | ----: | ------------: | --------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
|  -15.7% |   -20 | 97.7% → 93.0% | 127 → 107 | `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)`                | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:87` |
| +166.7% |    +5 |   2.3% → 7.0% |     3 → 8 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:87` |

##### `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`)

| Change | Delta |     % |   Samples | Caller       | Location                                                                                     |
| -----: | ----: | ----: | --------: | ------------ | -------------------------------------------------------------------------------------------- |
|  -5.0% |   -12 | 99.6% | 239 → 227 | `foldl_impl` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:46` |

##### `var\"#write#84\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.BoolType, ::Vector{UInt8}, ::Int64, ::Int64, ::Bool)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:209`)

| Change | Delta |             % | Samples | Caller                                                                     | Location                                                           |
| -----: | ----: | ------------: | ------: | -------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| -81.3% |   -13 | 61.5% → 21.4% |  16 → 3 | `write(::StructTypes.BoolType, ::Vector{UInt8}, ::Int64, ::Int64, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:209` |
| +10.0% |    +1 | 38.5% → 78.6% | 10 → 11 | `#write#79`                                                                | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157` |

##### `+` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:87`)

| Change | Delta |             % | Samples | Caller                                                                                                                                                                                                                           | Location                                                                                              |
| -----: | ----: | ------------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| +17.1% |   +14 | 27.6% → 33.6% | 82 → 96 | `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})`                                                                                               | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40`                                     |
| -80.0% |   -12 |   5.1% → 1.0% |  15 → 3 | `macro expansion`                                                                                                                                                                                                                | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:333`                                    |
| -46.2% |    -6 |   4.4% → 2.4% |  13 → 7 | `length_continued`                                                                                                                                                                                                               | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:568` |
| -54.5% |    -6 |   3.7% → 1.7% |  11 → 5 | `unescape(::JSON3.PointerString)`                                                                                                                                                                                                | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/strings.jl:48`                                   |
| +20.0% |    +4 |   6.7% → 8.4% | 20 → 24 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:218`                                     |

##### `ht_keyindex2_shorthash!(::Dict{Symbol, Int64}, ::Symbol)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:267`)

| Change | Delta |             % |   Samples | Caller                                                                                                                             | Location                                                                                    |
| -----: | ----: | ------------: | --------: | ---------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| -11.5% |    -6 | 11.1% → 10.0% |   52 → 46 | `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40`                           |
|  -0.7% |    -3 | 88.9% → 90.0% | 418 → 415 | `setindex!(::Dict{Symbol, Int64}, ::Int64, ::Symbol)`                                                                              | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:356` |

##### `getproperty` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base_compiler.jl:57`)

| Change | Delta |             % | Samples | Caller                                                     | Location                                                                                      |
| -----: | ----: | ------------: | ------: | ---------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| -17.4% |    -8 | 54.8% → 50.0% | 46 → 38 | `_setindex!`                                               | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:331`   |
| -55.6% |    -5 |  10.7% → 5.3% |   9 → 4 | `_setindex!`                                               | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:1025` |
| -44.4% |    -4 |  10.7% → 6.6% |   9 → 5 | `_setindex!`                                               | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:327`   |
| +66.7% |    +4 |  7.1% → 13.2% |  6 → 10 | `_setindex!`                                               | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:325`   |
| -37.5% |    -3 |   9.5% → 6.6% |   8 → 5 | `ht_keyindex2_shorthash!(::Dict{Symbol, Int64}, ::Symbol)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:267`   |

##### `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:87`)

|  Change | Delta |             % | Samples | Caller                                                                                                                                                                                                                           | Location                                                          |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
|   -9.7% |    -7 | 80.0% → 78.3% | 72 → 65 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)`                                                      | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:87`  |
|   +5.9% |    +1 | 18.9% → 21.7% | 17 → 18 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:218` |
| removed |    -1 |   1.1% → 0.0% |   1 → 0 | `var\"#read!#9\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Array}, ::Bool)`  | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:312` |

##### `&` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:393`)

| Change | Delta |             % | Samples | Caller                                                     | Location                                                                                    |
| -----: | ----: | ------------: | ------: | ---------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| -11.4% |    -5 | 71.0% → 70.9% | 44 → 39 | `getnontypemask`                                           | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:114`                          |
| -12.5% |    -2 | 25.8% → 25.5% | 16 → 14 | `ht_keyindex2_shorthash!(::Dict{Symbol, Int64}, ::Symbol)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:267` |

##### `getindex` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:975`)

|  Change | Delta |             % | Samples | Caller                                                                                                                                                                                                                           | Location                                                                                        |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
|  -50.0% |   -15 |  18.8% → 9.8% | 30 → 15 | `var\"#write#98\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)`                                                          | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:340`                              |
|  +35.5% |   +11 | 19.4% → 27.5% | 31 → 42 | `getindex`                                                                                                                                                                                                                       | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/subarray.jl:334` |
|  -60.0% |    -3 |   3.1% → 1.3% |   5 → 2 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:218`                               |
|   +2.2% |    +2 | 56.9% → 60.8% | 91 → 93 | `macro expansion`                                                                                                                                                                                                                | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:332`                              |
| removed |    -1 |   0.6% → 0.0% |   1 → 0 | `var\"#read!#9\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Array}, ::Bool)`  | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:312`                               |

##### `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.False})` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:189`)

| Change | Delta |             % | Samples | Caller                                                                                                                                                                      | Location                                                         |
| -----: | ----: | ------------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| -75.0% |    -6 | 80.0% → 50.0% |   8 → 2 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:87` |

##### `write(::StructTypes.ArrayType, ::Vector{UInt8}, ::Int64, ::Int64, ::JSON3.Array{Int64, Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:181`)

|  Change | Delta |             % | Samples | Caller      | Location                                                           |
| ------: | ----: | ------------: | ------: | ----------- | ------------------------------------------------------------------ |
| removed |    -5 | 100.0% → 0.0% |   5 → 0 | `#write#79` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157` |

##### `write(::StructTypes.NumberType, ::Vector{UInt8}, ::Int64, ::Int64, ::Int64)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:224`)

| Change | Delta |      % | Samples | Caller      | Location                                                           |
| -----: | ----: | -----: | ------: | ----------- | ------------------------------------------------------------------ |
| -55.6% |    -5 | 100.0% |   9 → 4 | `#write#79` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157` |

##### `#write#58` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:40`)

| Change | Delta |      % | Samples | Caller               | Location    |
| -----: | ----: | -----: | ------: | -------------------- | ----------- |
| -80.0% |    -4 | 100.0% |   5 → 1 | `[unknown function]` | `<unknown>` |

##### `write(::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:340`)

| Change | Delta |      % | Samples | Caller      | Location                                                           |
| -----: | ----: | -----: | ------: | ----------- | ------------------------------------------------------------------ |
| -11.4% |    -4 | 100.0% | 35 → 31 | `#write#79` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157` |

##### `parsedigits` (`../profiler-md-julia-depot/packages/Parsers/05lwR/src/floats.jl`)

| Change | Delta |      % | Samples | Caller        | Location                                                              |
| -----: | ----: | -----: | ------: | ------------- | --------------------------------------------------------------------- |
| -30.8% |    -4 | 100.0% |  13 → 9 | `parsedigits` | `../profiler-md-julia-depot/packages/Parsers/05lwR/src/floats.jl:302` |

##### `Object` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:8`)

| Change | Delta |      % | Samples | Caller     | Location                                                           |
| -----: | ----: | -----: | ------: | ---------- | ------------------------------------------------------------------ |
| -44.4% |    -4 | 100.0% |   9 → 5 | `getvalue` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:126` |

##### `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Array}, ::Bool)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:312`)

|  Change | Delta |            % | Samples | Caller                                                                                                                                                                      | Location                                                         |
| ------: | ----: | -----------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| removed |    -3 | 75.0% → 0.0% |   3 → 0 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:87` |

##### `#write#81` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:73`)

| Change | Delta |              % |   Samples | Caller               | Location                                                          |
| -----: | ----: | -------------: | --------: | -------------------- | ----------------------------------------------------------------- |
|  -3.3% |    -4 | 100.0% → 99.2% | 121 → 117 | `[unknown function]` | `<unknown>`                                                       |
|    new |    +1 |    0.0% → 0.8% |     0 → 1 | `#write#81`          | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:73` |

##### `promoteeltype` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl`)

|  Change | Delta |              % | Samples | Caller                                                                                                                                                                                                                           | Location                                                          |
| ------: | ----: | -------------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
|  -66.7% |    -2 | 75.0% → 100.0% |   3 → 1 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:218` |
| removed |    -1 |   25.0% → 0.0% |   1 → 0 | `var\"#read!#9\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Array}, ::Bool)`  | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:312` |

##### `iterate` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl`)

| Change | Delta |             % | Samples | Caller      | Location                                                                                         |
| -----: | ----: | ------------: | ------: | ----------- | ------------------------------------------------------------------------------------------------ |
| +17.4% |    +4 | 59.0% → 73.0% | 23 → 27 | `#write#79` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`                               |
| -66.7% |    -4 |  15.4% → 5.4% |   6 → 2 | `iterate`   | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/iterators.jl:697` |
| -20.0% |    -2 | 25.6% → 21.6% |  10 → 8 | `iterate`   | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:75`                                |

##### `promoteeltype` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:106`)

|  Change | Delta |             % | Samples | Caller                                                                                                                                                                                                                           | Location                                                          |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:218` |

##### `typeparser` (`../profiler-md-julia-depot/packages/Parsers/05lwR/src/floats.jl:152`)

| Change | Delta |      % | Samples | Caller                                                                                                                | Location                                                                  |
| -----: | ----: | -----: | ------: | --------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| -50.0% |    -2 | 100.0% |   4 → 2 | `typeparser(::Type{Float64}, ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Int16, ::Parsers.Options)` | `../profiler-md-julia-depot/packages/Parsers/05lwR/src/components.jl:392` |

##### `populateinds!` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:66`)

|  Change | Delta |             % | Samples | Caller                                                                                                                                                    | Location                                                           |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| removed |    -2 | 100.0% → 0.0% |   2 → 0 | `getvalue(::Type{JSON3.Array}, ::Base.CodeUnits{UInt8, String}, ::SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}, ::Int64, ::UInt64)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:131` |

##### `String(::Vector{UInt8})` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:66`)

|  Change | Delta |             % | Samples | Caller      | Location                                                          |
| ------: | ----: | ------------: | ------: | ----------- | ----------------------------------------------------------------- |
| removed |    -7 | 100.0% → 0.0% |   7 → 0 | `#write#58` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:40` |

##### `Array` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:649`)

|  Change | Delta |              % | Samples | Caller     | Location                                                                                     |
| ------: | ----: | -------------: | ------: | ---------- | -------------------------------------------------------------------------------------------- |
|  -33.3% |    -5 | 93.8% → 100.0% | 15 → 10 | `getindex` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:436` |
| removed |    -1 |    6.3% → 0.0% |   1 → 0 | `Array`    | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:661`  |

##### `macro expansion` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/simdloop.jl:75`)

| Change | Delta |             % | Samples | Caller                                                                                                                                                                  | Location                                                           |
| -----: | ----: | ------------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| -45.0% |    -9 | 31.7% → 19.3% | 20 → 11 | `var\"#write#98\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:340` |
|  +7.0% |    +3 | 68.3% → 80.7% | 43 → 46 | `escapelength`                                                                                                                                                          | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:331` |

##### `checkbounds` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/basic.jl:204`)

| Change | Delta |      % | Samples | Caller        | Location                                                                                             |
| -----: | ----: | -----: | ------: | ------------- | ---------------------------------------------------------------------------------------------------- |
| -71.4% |    -5 | 100.0% |   7 → 2 | `checkbounds` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/basic.jl:212` |

##### `macro expansion` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/simdloop.jl`)

| Change | Delta |             % | Samples | Caller                                                                                                                                                                  | Location                                                           |
| -----: | ----: | ------------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| -22.2% |    -4 | 90.0% → 93.3% | 18 → 14 | `escapelength`                                                                                                                                                          | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:331` |
| -50.0% |    -1 |  10.0% → 6.7% |   2 → 1 | `var\"#write#98\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:340` |

##### `macro expansion` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/simdloop.jl:72`)

| Change | Delta |      % | Samples | Caller                                                                                                                                                                  | Location                                                           |
| -----: | ----: | -----: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| -41.7% |    -5 | 100.0% |  12 → 7 | `var\"#write#98\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:340` |

##### `ifelse` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:854`)

|  Change | Delta |             % | Samples | Caller       | Location                                                                                         |
| ------: | ----: | ------------: | ------: | ------------ | ------------------------------------------------------------------------------------------------ |
|  -60.0% |    -3 | 55.6% → 50.0% |   5 → 2 | `gettapelen` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:118`                               |
| removed |    -2 |  22.2% → 0.0% |   2 → 0 | `max`        | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/promotion.jl:652` |

##### `==` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/promotion.jl:641`)

|  Change | Delta |             % | Samples | Caller                                                                                                                                                                                                                           | Location                                                                                    |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
|  -27.1% |   -13 | 62.3% → 47.9% | 48 → 35 | `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{String})`                                                                                                                   | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:142`                           |
|  +40.0% |    +6 | 19.5% → 28.8% | 15 → 21 | `ht_keyindex2_shorthash!(::Dict{Symbol, Int64}, ::Symbol)`                                                                                                                                                                       | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:267` |
| +500.0% |    +5 |   1.3% → 8.2% |   1 → 6 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:218`                           |
|  -80.0% |    -4 |   6.5% → 1.4% |   5 → 1 | `promoteeltype`                                                                                                                                                                                                                  | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:100`                          |
|  +40.0% |    +2 |   6.5% → 9.6% |   5 → 7 | `isarray`                                                                                                                                                                                                                        | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:61`                           |

### Total samples

#### Regressions

Functions with the largest increase in samples collected within the function and its callees. Categories account for at least 1.0% of self samples on the base or the current side.

|  Change | Delta |             % |       Samples | Function                                                                     | Location                                                                                      |
| ------: | ----: | ------------: | ------------: | ---------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
|   +5.1% |  +274 | 17.9% → 19.0% | 5,423 → 5,697 | `_foldl_impl`                                                                | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`  |
|   +5.0% |  +271 | 17.9% → 19.0% | 5,410 → 5,681 | `#defaultminimum##0`                                                         | `<unknown>`                                                                                   |
|   +5.0% |  +270 | 17.9% → 19.0% | 5,430 → 5,700 | `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` | `<unknown>`                                                                                   |
|   +5.0% |  +269 | 17.9% → 19.0% | 5,429 → 5,698 | `MappingRF`                                                                  | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98`  |
|   +4.8% |  +263 | 18.0% → 19.1% | 5,440 → 5,703 | `_foldl_impl`                                                                | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:56`  |
|   +4.8% |  +263 | 18.0% → 19.1% | 5,440 → 5,703 | `foldl_impl`                                                                 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:46`  |
|   +4.8% |  +263 | 18.0% → 19.1% | 5,440 → 5,703 | `mapfoldl_impl`                                                              | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:42`  |
|   +4.8% |  +263 | 18.0% → 19.1% | 5,440 → 5,703 | `#mapfoldl#271`                                                              | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:173` |
|   +4.8% |  +263 | 18.0% → 19.1% | 5,440 → 5,703 | `mapfoldl`                                                                   | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:173` |
|   +4.8% |  +263 | 18.0% → 19.1% | 5,440 → 5,703 | `#mapreduce#275`                                                             | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:306` |
|   +4.8% |  +263 | 18.0% → 19.1% | 5,440 → 5,703 | `mapreduce`                                                                  | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:306` |
|   +4.8% |  +263 | 18.0% → 19.1% | 5,440 → 5,703 | `#sum#278`                                                                   | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:535` |
|   +4.8% |  +263 | 18.0% → 19.1% | 5,440 → 5,703 | `sum`                                                                        | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:535` |
|   +4.8% |  +263 | 18.0% → 19.1% | 5,440 → 5,703 | `sum`                                                                        | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:564` |
|   +4.8% |  +263 | 18.0% → 19.1% | 5,440 → 5,703 | `#sum#279`                                                                   | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:564` |
|   +4.8% |  +261 | 18.0% → 19.1% | 5,442 → 5,703 | `defaultminimum`                                                             | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:12`                             |
|  +26.3% |  +259 |   3.2% → 4.1% |   983 → 1,242 | `GenericMemory`                                                              | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:588`   |
|  +78.6% |  +231 |   1.0% → 1.8% |     294 → 525 | `rehash!(::Dict{Symbol, Int64}, ::Int64)`                                    | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:138`   |
|  +21.0% |  +209 |   3.3% → 4.0% |   993 → 1,202 | `setindex!(::Dict{Symbol, Int64}, ::Int64, ::Symbol)`                        | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:356`   |
| +291.0% |  +195 |   0.2% → 0.9% |      67 → 262 | `_setindex!`                                                                 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:339`   |

##### Third-party

|  Change | Delta |             % |       Samples | Function                                                                                                                                                               | Location                                                                  |
| ------: | ----: | ------------: | ------------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
|   +4.8% |  +261 | 18.0% → 19.1% | 5,442 → 5,703 | `defaultminimum`                                                                                                                                                       | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:12`         |
|   +3.2% |  +153 | 15.8% → 16.5% | 4,786 → 4,939 | `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})`                                     | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40`         |
|   +2.7% |  +132 | 16.0% → 16.6% | 4,837 → 4,969 | `getvalue`                                                                                                                                                             | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:127`        |
|   +3.3% |  +109 | 10.8% → 11.3% | 3,279 → 3,388 | `getvalue`                                                                                                                                                             | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:214`        |
|   +1.9% |   +73 | 12.4% → 12.8% | 3,759 → 3,832 | `iterate`                                                                                                                                                              | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:81`         |
|   +2.3% |   +69 | 10.1% → 10.4% | 3,046 → 3,115 | `iterate`                                                                                                                                                              | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:78`         |
|  +77.4% |   +41 |   0.2% → 0.3% |       53 → 94 | `var\"#write#86\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.NumberType, ::Vector{UInt8}, ::Int64, ::Int64, ::Int64)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:224`        |
|  +59.3% |   +35 |   0.2% → 0.3% |       59 → 94 | `write(::StructTypes.NumberType, ::Vector{UInt8}, ::Int64, ::Int64, ::Int64)`                                                                                          | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:224`        |
|  +56.7% |   +34 |   0.2% → 0.3% |       60 → 94 | `getvalue`                                                                                                                                                             | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl`            |
|  +40.3% |   +27 |   0.2% → 0.3% |       67 → 94 | `string`                                                                                                                                                               | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:88`         |
|   +3.8% |   +24 |   2.1% → 2.2% |     629 → 653 | `realloc!(::Vector{UInt8}, ::Int64, ::Int64)`                                                                                                                          | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:51`         |
|  +12.2% |   +14 |          0.4% |     115 → 129 | `getvalue`                                                                                                                                                             | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:193`        |
|   +8.1% |    +9 |          0.4% |     111 → 120 | `unescape(::JSON3.PointerString)`                                                                                                                                      | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/strings.jl:48`       |
|  +46.2% |    +6 |  <0.1% → 0.1% |       13 → 19 | `getvalue`                                                                                                                                                             | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:213`        |
|   +6.1% |    +5 |          0.3% |       82 → 87 | `getvalue`                                                                                                                                                             | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:215`        |
|  +26.3% |    +5 |          0.1% |       19 → 24 | `macro expansion`                                                                                                                                                      | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:14`         |
|  +35.7% |    +5 |  <0.1% → 0.1% |       14 → 19 | `codeunit`                                                                                                                                                             | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/strings.jl:21`       |
| +133.3% |    +4 |         <0.1% |         3 → 7 | `defaultminimum`                                                                                                                                                       | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:6`          |
|   +1.5% |    +4 |          0.9% |     270 → 274 | `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{String})`                                                         | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:142`         |
|  +10.8% |    +4 |          0.1% |       37 → 41 | `typeparser(::Type{Float64}, ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Int16, ::Parsers.Options)`                                                  | `../profiler-md-julia-depot/packages/Parsers/05lwR/src/components.jl:392` |

##### Standard library

|  Change | Delta |             % |       Samples | Function                                              | Location                                                                                         |
| ------: | ----: | ------------: | ------------: | ----------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
|   +5.1% |  +274 | 17.9% → 19.0% | 5,423 → 5,697 | `_foldl_impl`                                         | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`     |
|   +5.0% |  +269 | 17.9% → 19.0% | 5,429 → 5,698 | `MappingRF`                                           | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98`     |
|   +4.8% |  +263 | 18.0% → 19.1% | 5,440 → 5,703 | `_foldl_impl`                                         | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:56`     |
|   +4.8% |  +263 | 18.0% → 19.1% | 5,440 → 5,703 | `foldl_impl`                                          | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:46`     |
|   +4.8% |  +263 | 18.0% → 19.1% | 5,440 → 5,703 | `mapfoldl_impl`                                       | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:42`     |
|   +4.8% |  +263 | 18.0% → 19.1% | 5,440 → 5,703 | `#mapfoldl#271`                                       | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:173`    |
|   +4.8% |  +263 | 18.0% → 19.1% | 5,440 → 5,703 | `mapfoldl`                                            | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:173`    |
|   +4.8% |  +263 | 18.0% → 19.1% | 5,440 → 5,703 | `#mapreduce#275`                                      | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:306`    |
|   +4.8% |  +263 | 18.0% → 19.1% | 5,440 → 5,703 | `mapreduce`                                           | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:306`    |
|   +4.8% |  +263 | 18.0% → 19.1% | 5,440 → 5,703 | `#sum#278`                                            | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:535`    |
|   +4.8% |  +263 | 18.0% → 19.1% | 5,440 → 5,703 | `sum`                                                 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:535`    |
|   +4.8% |  +263 | 18.0% → 19.1% | 5,440 → 5,703 | `sum`                                                 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:564`    |
|   +4.8% |  +263 | 18.0% → 19.1% | 5,440 → 5,703 | `#sum#279`                                            | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:564`    |
|  +26.3% |  +259 |   3.2% → 4.1% |   983 → 1,242 | `GenericMemory`                                       | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:588`      |
|  +78.6% |  +231 |   1.0% → 1.8% |     294 → 525 | `rehash!(::Dict{Symbol, Int64}, ::Int64)`             | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:138`      |
|  +21.0% |  +209 |   3.3% → 4.0% |   993 → 1,202 | `setindex!(::Dict{Symbol, Int64}, ::Int64, ::Symbol)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:356`      |
| +291.0% |  +195 |   0.2% → 0.9% |      67 → 262 | `_setindex!`                                          | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:339`      |
|   +4.8% |  +130 |   9.0% → 9.5% | 2,728 → 2,858 | `iterate`                                             | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/iterators.jl:697` |
|   +5.4% |   +40 |   2.4% → 2.6% |     734 → 774 | `Array`                                               | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:648`      |
|   +2.6% |   +32 |   4.1% → 4.2% | 1,229 → 1,261 | `indexed_iterate`                                     | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`     |

##### Native

| Change | Delta |             % |       Samples | Function                                                                                                                                                                                | Location    |
| -----: | ----: | ------------: | ------------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
|  +5.0% |  +271 | 17.9% → 19.0% | 5,410 → 5,681 | `#defaultminimum##0`                                                                                                                                                                    | `<unknown>` |
|  +5.0% |  +270 | 17.9% → 19.0% | 5,430 → 5,700 | `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})`                                                                                                            | `<unknown>` |
| +75.0% |    +3 |         <0.1% |         4 → 7 | `(::JSON3.var\"#defaultminimum##0#defaultminimum##1\"{JSON3.Array{Int64, Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}}})(::Int64)` | `<unknown>` |

#### Improvements

Functions with the largest decrease in samples collected within the function and its callees. Categories account for at least 1.0% of self samples on the base or the current side.

| Change | Delta |             % |         Samples | Function                                                                                                                                                                                                                         | Location                                                                                                          |
| -----: | ----: | ------------: | --------------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
|  -1.8% |  -285 | 53.6% → 53.3% | 16,235 → 15,950 | `#write#81`                                                                                                                                                                                                                      | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`               |
|  -1.7% |  -282 | 53.8% → 53.5% | 16,285 → 16,003 | `#write#79`                                                                                                                                                                                                                      | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`                                                |
|  -1.7% |  -279 | 53.8% → 53.5% | 16,288 → 16,009 | `write`                                                                                                                                                                                                                          | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:147`                                                |
|  -3.7% |  -254 | 22.4% → 21.8% |   6,789 → 6,535 | `(anonymous)`                                                                                                                                                                                                                    | `<unknown>`                                                                                                       |
| -10.7% |  -222 |   6.8% → 6.2% |   2,072 → 1,850 | `indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64, ::Int64)`                                                                                                                                                        | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`                      |
| -12.8% |  -135 |   3.5% → 3.1% |     1,051 → 916 | `iterate`                                                                                                                                                                                                                        | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:75`                                                 |
|  -0.4% |   -91 | 77.6% → 78.2% | 23,486 → 23,395 | `parse_workload`                                                                                                                                                                                                                 | `./profile.jl:18`                                                                                                 |
|  -0.4% |   -89 | 77.6% → 78.2% | 23,486 → 23,397 | `[unknown function]`                                                                                                                                                                                                             | `<unknown>`                                                                                                       |
|  -0.4% |   -89 | 77.6% → 78.2% | 23,486 → 23,397 | `macro expansion`                                                                                                                                                                                                                | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/stdlib/v1.13/Profile/src/Profile.jl:82` |
|  -0.4% |   -89 | 77.6% → 78.2% | 23,486 → 23,397 | `capture_wall`                                                                                                                                                                                                                   | `./profile.jl:43`                                                                                                 |
|  -0.4% |   -89 | 77.6% → 78.2% | 23,486 → 23,397 | `eval(::Module, ::Any)`                                                                                                                                                                                                          | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:489`                       |
|  -0.4% |   -89 | 77.6% → 78.2% | 23,486 → 23,397 | `include_string(::typeof(identity), ::Module, ::String, ::String)`                                                                                                                                                               | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/loading.jl:2989`                   |
|  -0.4% |   -89 | 77.6% → 78.2% | 23,486 → 23,397 | `_include(::Function, ::Module, ::String)`                                                                                                                                                                                       | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/loading.jl:3083`                   |
|  -0.4% |   -89 | 77.6% → 78.2% | 23,486 → 23,397 | `include(::Module, ::String)`                                                                                                                                                                                                    | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base.jl:309`                       |
|  -0.4% |   -89 | 77.6% → 78.2% | 23,486 → 23,397 | `exec_options(::Base.JLOptions)`                                                                                                                                                                                                 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/client.jl:234`                     |
|  -0.4% |   -89 | 77.6% → 78.2% | 23,486 → 23,397 | `_start()`                                                                                                                                                                                                                       | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/client.jl:570`                     |
|  -0.8% |   -52 | 22.0% → 22.1% |   6,675 → 6,623 | `_symbol`                                                                                                                                                                                                                        | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:1`                                                  |
|  -0.8% |   -52 | 22.0% → 22.1% |   6,675 → 6,623 | `getvalue`                                                                                                                                                                                                                       | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:187`                                                |
|  -4.2% |   -51 |   4.0% → 3.9% |   1,215 → 1,164 | `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)`                                                                     | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:87`                                                  |
|  -4.2% |   -51 |   4.0% → 3.9% |   1,215 → 1,164 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:218`                                                 |

##### Third-party

| Change | Delta |             % |         Samples | Function                                                                                                                                                                                                                         | Location                                                           |
| -----: | ----: | ------------: | --------------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
|  -1.7% |  -282 | 53.8% → 53.5% | 16,285 → 16,003 | `#write#79`                                                                                                                                                                                                                      | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157` |
|  -1.7% |  -279 | 53.8% → 53.5% | 16,288 → 16,009 | `write`                                                                                                                                                                                                                          | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:147` |
| -12.8% |  -135 |   3.5% → 3.1% |     1,051 → 916 | `iterate`                                                                                                                                                                                                                        | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:75`  |
|  -0.8% |   -52 | 22.0% → 22.1% |   6,675 → 6,623 | `_symbol`                                                                                                                                                                                                                        | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:1`   |
|  -0.8% |   -52 | 22.0% → 22.1% |   6,675 → 6,623 | `getvalue`                                                                                                                                                                                                                       | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:187` |
|  -4.2% |   -51 |   4.0% → 3.9% |   1,215 → 1,164 | `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)`                                                                     | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:87`   |
|  -4.2% |   -51 |   4.0% → 3.9% |   1,215 → 1,164 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:218`  |
|  -4.2% |   -51 |   4.0% → 3.9% |   1,215 → 1,164 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)`                                             | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:218`  |
|  -4.2% |   -51 |   4.0% → 3.9% |   1,215 → 1,164 | `read!`                                                                                                                                                                                                                          | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:87`   |
|  -3.9% |   -47 |   4.0% → 3.9% |   1,211 → 1,164 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)`                                                      | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:87`   |
|  -3.7% |   -45 |   4.0% → 3.9% |   1,208 → 1,163 | `var\"#read!#9\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Array}, ::Bool)`  | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:312`  |
|  -3.7% |   -45 |   4.0% → 3.9% |   1,208 → 1,163 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Array}, ::Bool)`                                              | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:312`  |
|  -3.6% |   -41 |   3.8% → 3.7% |   1,148 → 1,107 | `var\"#write#98\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)`                                                          | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:340` |
|  -3.4% |   -39 |   3.8% → 3.7% |   1,152 → 1,113 | `write(::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)`                                                                                                                                                   | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:340` |
|  -2.3% |   -31 |   4.4% → 4.3% |   1,322 → 1,291 | `var\"#read#6\"(::Bool, ::Nothing, ::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.read), ::String)`                                                                                                       | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:30`   |
|  -2.3% |   -31 |   4.4% → 4.3% |   1,322 → 1,291 | `read`                                                                                                                                                                                                                           | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:30`   |
|  -0.1% |   -27 | 71.8% → 72.5% | 21,743 → 21,716 | `#write#58`                                                                                                                                                                                                                      | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:40`  |
|  -6.7% |   -23 |          1.1% |       345 → 322 | `getbyte`                                                                                                                                                                                                                        | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:8`   |
| -20.0% |   -21 |          0.3% |        105 → 84 | `getvalue`                                                                                                                                                                                                                       | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:195` |
| -22.0% |   -20 |   0.3% → 0.2% |         91 → 71 | `getvalue`                                                                                                                                                                                                                       | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:126` |

##### Standard library

| Change | Delta |             % |         Samples | Function                                                                  | Location                                                                                                          |
| -----: | ----: | ------------: | --------------: | ------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
|  -1.8% |  -285 | 53.6% → 53.3% | 16,235 → 15,950 | `#write#81`                                                               | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`               |
| -10.7% |  -222 |   6.8% → 6.2% |   2,072 → 1,850 | `indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64, ::Int64)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`                      |
|  -0.4% |   -89 | 77.6% → 78.2% | 23,486 → 23,397 | `macro expansion`                                                         | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/stdlib/v1.13/Profile/src/Profile.jl:82` |
|  -0.4% |   -89 | 77.6% → 78.2% | 23,486 → 23,397 | `eval(::Module, ::Any)`                                                   | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:489`                       |
|  -0.4% |   -89 | 77.6% → 78.2% | 23,486 → 23,397 | `include_string(::typeof(identity), ::Module, ::String, ::String)`        | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/loading.jl:2989`                   |
|  -0.4% |   -89 | 77.6% → 78.2% | 23,486 → 23,397 | `_include(::Function, ::Module, ::String)`                                | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/loading.jl:3083`                   |
|  -0.4% |   -89 | 77.6% → 78.2% | 23,486 → 23,397 | `include(::Module, ::String)`                                             | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base.jl:309`                       |
|  -0.4% |   -89 | 77.6% → 78.2% | 23,486 → 23,397 | `exec_options(::Base.JLOptions)`                                          | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/client.jl:234`                     |
|  -0.4% |   -89 | 77.6% → 78.2% | 23,486 → 23,397 | `_start()`                                                                | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/client.jl:570`                     |
| -80.4% |   -45 |  0.2% → <0.1% |         56 → 11 | `Pair`                                                                    | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base.jl:12`                        |
|  -5.1% |   -24 |   1.6% → 1.5% |       472 → 448 | `codeunit`                                                                | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:167`             |
|  -6.5% |   -24 |   1.2% → 1.1% |       367 → 343 | `getindex`                                                                | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/basic.jl:793`              |
| -27.4% |   -20 |          0.2% |         73 → 53 | `Dict`                                                                    | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:80`                        |
|  -3.9% |   -19 |          1.6% |       486 → 467 | `unsafe_load`                                                             | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/pointer.jl:151`                    |
| -17.5% |   -17 |          0.3% |         97 → 80 | `unsafe_string`                                                           | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:126`             |
|  -7.4% |   -16 |          0.7% |       216 → 200 | `macro expansion`                                                         | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/simdloop.jl:77`                    |
|  -1.4% |   -14 |          3.3% |       997 → 983 | `isassigned`                                                              | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:1641`          |
|  -3.7% |   -11 |          1.0% |       297 → 286 | `+`                                                                       | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:87`                         |
|  -5.5% |    -9 |          0.5% |       165 → 156 | `length_continued`                                                        | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:561`             |
|  -1.1% |    -9 |          2.7% |       807 → 798 | `indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64)`          | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`                      |

##### Unknown

| Change | Delta |             % |       Samples | Function      | Location    |
| -----: | ----: | ------------: | ------------: | ------------- | ----------- |
|  -3.7% |  -254 | 22.4% → 21.8% | 6,789 → 6,535 | `(anonymous)` | `<unknown>` |

##### Native

| Change | Delta |             % |         Samples | Function             | Location    |
| -----: | ----: | ------------: | --------------: | -------------------- | ----------- |
|  -0.4% |   -89 | 77.6% → 78.2% | 23,486 → 23,397 | `[unknown function]` | `<unknown>` |

#### Callers

Callers with the largest change in contribution to each function's total samples. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`)

| Change | Delta |      % |       Samples | Caller       | Location                                                                                     |
| -----: | ----: | -----: | ------------: | ------------ | -------------------------------------------------------------------------------------------- |
|  +5.1% |  +274 | 100.0% | 5,423 → 5,697 | `foldl_impl` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:46` |

##### `#defaultminimum##0` (`<unknown>`)

| Change | Delta |      % |       Samples | Caller               | Location    |
| -----: | ----: | -----: | ------------: | -------------------- | ----------- |
|  +5.0% |  +271 | 100.0% | 5,410 → 5,681 | `[unknown function]` | `<unknown>` |

##### `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` (`<unknown>`)

| Change | Delta |             % |       Samples | Caller               | Location                                                                                     |
| -----: | ----: | ------------: | ------------: | -------------------- | -------------------------------------------------------------------------------------------- |
|  +5.0% |  +270 |        100.0% | 5,428 → 5,698 | `MappingRF`          | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98` |
|  +2.8% |   +98 | 64.3% → 63.0% | 3,492 → 3,590 | `[unknown function]` | `<unknown>`                                                                                  |
| -66.7% |    -4 |  0.1% → <0.1% |         6 → 2 | `_foldl_impl`        | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60` |
|    new |    +1 |  0.0% → <0.1% |         0 → 1 | `foldl_impl`         | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:46` |

##### `MappingRF` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98`)

|  Change | Delta |           % |       Samples | Caller               | Location                                                                                     |
| ------: | ----: | ----------: | ------------: | -------------------- | -------------------------------------------------------------------------------------------- |
|   +5.0% |  +269 |      100.0% | 5,428 → 5,697 | `_foldl_impl`        | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:56` |
|  +12.8% |   +42 | 6.1% → 6.5% |     329 → 371 | `_foldl_impl`        | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60` |
| +150.0% |   +12 | 0.1% → 0.4% |        8 → 20 | `[unknown function]` | `<unknown>`                                                                                  |

##### `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:56`)

| Change | Delta |      % |       Samples | Caller       | Location                                                                                     |
| -----: | ----: | -----: | ------------: | ------------ | -------------------------------------------------------------------------------------------- |
|  +4.8% |  +263 | 100.0% | 5,440 → 5,703 | `foldl_impl` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:46` |

##### `foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:46`)

| Change | Delta |      % |       Samples | Caller          | Location                                                                                     |
| -----: | ----: | -----: | ------------: | --------------- | -------------------------------------------------------------------------------------------- |
|  +4.8% |  +263 | 100.0% | 5,440 → 5,703 | `mapfoldl_impl` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:42` |

##### `mapfoldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:42`)

| Change | Delta |      % |       Samples | Caller          | Location                                                                                      |
| -----: | ----: | -----: | ------------: | --------------- | --------------------------------------------------------------------------------------------- |
|  +4.8% |  +263 | 100.0% | 5,440 → 5,703 | `#mapfoldl#271` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:173` |

##### `#mapfoldl#271` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:173`)

| Change | Delta |      % |       Samples | Caller     | Location                                                                                      |
| -----: | ----: | -----: | ------------: | ---------- | --------------------------------------------------------------------------------------------- |
|  +4.8% |  +263 | 100.0% | 5,440 → 5,703 | `mapfoldl` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:173` |

##### `mapfoldl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:173`)

| Change | Delta |      % |       Samples | Caller           | Location                                                                                      |
| -----: | ----: | -----: | ------------: | ---------------- | --------------------------------------------------------------------------------------------- |
|  +4.8% |  +263 | 100.0% | 5,440 → 5,703 | `#mapreduce#275` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:306` |

##### `#mapreduce#275` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:306`)

| Change | Delta |      % |       Samples | Caller      | Location                                                                                      |
| -----: | ----: | -----: | ------------: | ----------- | --------------------------------------------------------------------------------------------- |
|  +4.8% |  +263 | 100.0% | 5,440 → 5,703 | `mapreduce` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:306` |

##### `mapreduce` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:306`)

| Change | Delta |      % |       Samples | Caller     | Location                                                                                      |
| -----: | ----: | -----: | ------------: | ---------- | --------------------------------------------------------------------------------------------- |
|  +4.8% |  +263 | 100.0% | 5,440 → 5,703 | `#sum#278` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:535` |

##### `#sum#278` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:535`)

| Change | Delta |      % |       Samples | Caller | Location                                                                                      |
| -----: | ----: | -----: | ------------: | ------ | --------------------------------------------------------------------------------------------- |
|  +4.8% |  +263 | 100.0% | 5,440 → 5,703 | `sum`  | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:535` |

##### `sum` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:535`)

|  Change | Delta |             % |       Samples | Caller                                                                                                                                    | Location                                                                                      |
| ------: | ----: | ------------: | ------------: | ----------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
|   +5.0% |  +273 | 99.7% → 99.8% | 5,421 → 5,694 | `[unknown function]`                                                                                                                      | `<unknown>`                                                                                   |
|   +4.8% |  +263 |        100.0% | 5,440 → 5,703 | `#sum#279`                                                                                                                                | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:564` |
| +133.3% |    +4 |          0.1% |         3 → 7 | `defaultminimum(::JSON3.Array{Int64, Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:11`                             |

##### `sum` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:564`)

| Change | Delta |             % |       Samples | Caller               | Location                                                          |
| -----: | ----: | ------------: | ------------: | -------------------- | ----------------------------------------------------------------- |
|  +4.8% |  +263 |        100.0% | 5,440 → 5,703 | `defaultminimum`     | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:12` |
|  +2.2% |   +71 | 60.6% → 59.1% | 3,299 → 3,370 | `[unknown function]` | `<unknown>`                                                       |

##### `#sum#279` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:564`)

| Change | Delta |      % |       Samples | Caller | Location                                                                                      |
| -----: | ----: | -----: | ------------: | ------ | --------------------------------------------------------------------------------------------- |
|  +4.8% |  +263 | 100.0% | 5,440 → 5,703 | `sum`  | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:564` |

##### `defaultminimum` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:12`)

| Change | Delta |             % |       Samples | Caller               | Location                                                          |
| -----: | ----: | ------------: | ------------: | -------------------- | ----------------------------------------------------------------- |
|  +4.8% |  +261 |        100.0% | 5,442 → 5,703 | `#write#58`          | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:40` |
|  +4.5% |  +218 | 89.6% → 89.3% | 4,877 → 5,095 | `#defaultminimum##0` | `<unknown>`                                                       |

##### `GenericMemory` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:588`)

| Change | Delta |             % |   Samples | Caller                                    | Location                                                                                    |
| -----: | ----: | ------------: | --------: | ----------------------------------------- | ------------------------------------------------------------------------------------------- |
| +89.8% |  +219 | 24.8% → 37.3% | 244 → 463 | `rehash!(::Dict{Symbol, Int64}, ::Int64)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:138` |
|  +5.4% |   +40 | 74.7% → 62.3% | 734 → 774 | `Array`                                   | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:648` |

##### `rehash!(::Dict{Symbol, Int64}, ::Int64)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:138`)

|  Change | Delta |             % |   Samples | Caller                                                                                                                             | Location                                                                                    |
| ------: | ----: | ------------: | --------: | ---------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| +316.4% |  +193 | 20.7% → 48.4% |  61 → 254 | `_setindex!`                                                                                                                       | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:339` |
|  +18.0% |   +39 | 73.8% → 48.8% | 217 → 256 | `ht_keyindex2_shorthash!(::Dict{Symbol, Int64}, ::Symbol)`                                                                         | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:267` |
|  -25.0% |    -1 |   1.4% → 0.6% |     4 → 3 | `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40`                           |

##### `setindex!(::Dict{Symbol, Int64}, ::Int64, ::Symbol)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:356`)

|  Change | Delta |             % |     Samples | Caller                                                                                                                             | Location                                                           |
| ------: | ----: | ------------: | ----------: | ---------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
|  +24.3% |  +229 | 94.8% → 97.3% | 941 → 1,170 | `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40`  |
|  -36.0% |   -18 |   5.0% → 2.7% |     50 → 32 | `getvalue`                                                                                                                         | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:127` |
| removed |    -2 |   0.2% → 0.0% |       2 → 0 | `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, Vector{UInt64}})`                                                     | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40`  |

##### `_setindex!` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:339`)

|  Change | Delta |      % |  Samples | Caller                                                | Location                                                                                    |
| ------: | ----: | -----: | -------: | ----------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| +291.0% |  +195 | 100.0% | 67 → 262 | `setindex!(::Dict{Symbol, Int64}, ::Int64, ::Symbol)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:356` |

##### `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40`)

|  Change | Delta |            % |       Samples | Caller               | Location                                                                                     |
| ------: | ----: | -----------: | ------------: | -------------------- | -------------------------------------------------------------------------------------------- |
|   +3.2% |  +151 |        99.9% | 4,782 → 4,933 | `getvalue`           | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:127`                           |
| +100.0% |    +3 |         0.1% |         3 → 6 | `[unknown function]` | `<unknown>`                                                                                  |
| removed |    -1 | <0.1% → 0.0% |         1 → 0 | `foldl_impl`         | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:46` |

##### `getvalue` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:127`)

| Change | Delta |             % |       Samples | Caller     | Location                                                           |
| -----: | ----: | ------------: | ------------: | ---------- | ------------------------------------------------------------------ |
|  +2.9% |   +94 | 66.9% → 67.0% | 3,235 → 3,329 | `getvalue` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:214` |
|  +2.4% |   +38 | 33.1% → 33.0% | 1,602 → 1,640 | `getindex` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:163` |

##### `getvalue` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:214`)

| Change | Delta |      % |       Samples | Caller    | Location                                                          |
| -----: | ----: | -----: | ------------: | --------- | ----------------------------------------------------------------- |
|  +3.3% |  +109 | 100.0% | 3,279 → 3,388 | `iterate` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:81` |

##### `iterate` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:81`)

| Change | Delta |             % |       Samples | Caller      | Location                                                                                         |
| -----: | ----: | ------------: | ------------: | ----------- | ------------------------------------------------------------------------------------------------ |
|  +9.2% |  +140 | 40.6% → 43.5% | 1,527 → 1,667 | `iterate`   | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/iterators.jl:697` |
|  -5.6% |  -102 | 48.9% → 45.3% | 1,837 → 1,735 | `#write#79` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`                               |
|  +8.9% |   +35 | 10.5% → 11.2% |     395 → 430 | `iterate`   | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:75`                                |

##### `iterate` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:78`)

| Change | Delta |             % |       Samples | Caller      | Location                                                                                         |
| -----: | ----: | ------------: | ------------: | ----------- | ------------------------------------------------------------------------------------------------ |
|  +2.1% |   +33 | 52.3% → 52.2% | 1,594 → 1,627 | `#write#79` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`                               |
|  +6.4% |   +19 |  9.8% → 10.2% |     298 → 317 | `iterate`   | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:75`                                |
|  +1.5% |   +17 | 37.9% → 37.6% | 1,154 → 1,171 | `iterate`   | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/iterators.jl:697` |

##### `var\"#write#86\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.NumberType, ::Vector{UInt8}, ::Int64, ::Int64, ::Int64)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:224`)

|  Change | Delta |             % | Samples | Caller                                                                        | Location                                                           |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------------------------------- | ------------------------------------------------------------------ |
|  +85.4% |   +41 | 90.6% → 94.7% | 48 → 89 | `write(::StructTypes.NumberType, ::Vector{UInt8}, ::Int64, ::Int64, ::Int64)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:224` |
|  +66.7% |    +2 |   5.7% → 5.3% |   3 → 5 | `#write#79`                                                                   | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157` |
| removed |    -2 |   3.8% → 0.0% |   2 → 0 | `write`                                                                       | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:224` |

##### `write(::StructTypes.NumberType, ::Vector{UInt8}, ::Int64, ::Int64, ::Int64)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:224`)

| Change | Delta |      % | Samples | Caller      | Location                                                           |
| -----: | ----: | -----: | ------: | ----------- | ------------------------------------------------------------------ |
| +59.3% |   +35 | 100.0% | 59 → 94 | `#write#79` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157` |

##### `getvalue` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl`)

| Change | Delta |             % | Samples | Caller                                                                                                                             | Location                                                           |
| -----: | ----: | ------------: | ------: | ---------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| +92.6% |   +25 | 45.0% → 55.3% | 27 → 52 | `iterate`                                                                                                                          | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:78`  |
| +42.3% |   +11 | 43.3% → 39.4% | 26 → 37 | `iterate`                                                                                                                          | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:81`  |
| -75.0% |    -3 |   6.7% → 1.1% |   4 → 1 | `getvalue`                                                                                                                         | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:218` |
| +33.3% |    +1 |   5.0% → 4.3% |   3 → 4 | `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40`  |

##### `string` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:88`)

|  Change | Delta |             % | Samples | Caller                                                                                                                                                                                                                           | Location                                                          |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| +150.0% |   +18 | 17.9% → 31.9% | 12 → 30 | `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{String})`                                                                                                                   | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:142` |
|  +16.4% |    +9 | 82.1% → 68.1% | 55 → 64 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:218` |

##### `realloc!(::Vector{UInt8}, ::Int64, ::Int64)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:51`)

|   Change | Delta |             % |   Samples | Caller                                                                                                                                                                  | Location                                                           |
| -------: | ----: | ------------: | --------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| +2050.0% |   +41 |   0.3% → 6.6% |    2 → 43 | `var\"#write#86\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.NumberType, ::Vector{UInt8}, ::Int64, ::Int64, ::Int64)`  | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:224` |
|    -2.7% |   -17 | 99.7% → 93.4% | 627 → 610 | `var\"#write#98\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:340` |

##### `getvalue` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:193`)

| Change | Delta |      % |   Samples | Caller     | Location                                                           |
| -----: | ----: | -----: | --------: | ---------- | ------------------------------------------------------------------ |
| +12.2% |   +14 | 100.0% | 115 → 129 | `getvalue` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:218` |

##### `unescape(::JSON3.PointerString)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/strings.jl:48`)

| Change | Delta |      % |   Samples | Caller     | Location                                                           |
| -----: | ----: | -----: | --------: | ---------- | ------------------------------------------------------------------ |
|  +8.1% |    +9 | 100.0% | 111 → 120 | `getvalue` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:193` |

##### `getvalue` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:213`)

| Change | Delta |      % | Samples | Caller    | Location                                                          |
| -----: | ----: | -----: | ------: | --------- | ----------------------------------------------------------------- |
| +46.2% |    +6 | 100.0% | 13 → 19 | `iterate` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:81` |

##### `getvalue` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:215`)

| Change | Delta |      % | Samples | Caller    | Location                                                          |
| -----: | ----: | -----: | ------: | --------- | ----------------------------------------------------------------- |
|  +6.1% |    +5 | 100.0% | 82 → 87 | `iterate` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:81` |

##### `macro expansion` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:14`)

| Change | Delta |              % | Samples | Caller                                                                                                                                                                                                                           | Location                                                          |
| -----: | ----: | -------------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| +15.8% |    +3 | 100.0% → 91.7% | 19 → 22 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:218` |
|    new |    +2 |    0.0% → 8.3% |   0 → 2 | `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{String})`                                                                                                                   | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:142` |

##### `codeunit` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/strings.jl:21`)

| Change | Delta |      % | Samples | Caller                            | Location                                                            |
| -----: | ----: | -----: | ------: | --------------------------------- | ------------------------------------------------------------------- |
| +35.7% |    +5 | 100.0% | 14 → 19 | `unescape(::JSON3.PointerString)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/strings.jl:48` |

##### `defaultminimum` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:6`)

|  Change | Delta |      % | Samples | Caller                                                                       | Location    |
| ------: | ----: | -----: | ------: | ---------------------------------------------------------------------------- | ----------- |
| +133.3% |    +4 | 100.0% |   3 → 7 | `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` | `<unknown>` |

##### `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{String})` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:142`)

|  Change | Delta |             % |   Samples | Caller                                                                                                                                                                      | Location                                                         |
| ------: | ----: | ------------: | --------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| +166.7% |    +5 |   1.1% → 2.9% |     3 → 8 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:87` |
|   -0.4% |    -1 | 98.9% → 97.1% | 267 → 266 | `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)`                | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:87` |

##### `typeparser(::Type{Float64}, ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Int16, ::Parsers.Options)` (`../profiler-md-julia-depot/packages/Parsers/05lwR/src/components.jl:392`)

|  Change | Delta |             % | Samples | Caller                                                                                                                                                                      | Location                                                         |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| +300.0% |    +3 |   2.7% → 9.8% |   1 → 4 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:87` |
|   +2.8% |    +1 | 97.3% → 90.2% | 36 → 37 | `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)`                | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:87` |

##### `iterate` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/iterators.jl:697`)

| Change | Delta |             % |       Samples | Caller        | Location                                                                                         |
| -----: | ----: | ------------: | ------------: | ------------- | ------------------------------------------------------------------------------------------------ |
|  +5.0% |  +136 | 99.7% → 99.9% | 2,719 → 2,855 | `_foldl_impl` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`     |
| -66.7% |    -6 |   0.3% → 0.1% |         9 → 3 | `_foldl_impl` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:56`     |
|  -5.8% |    -5 |   3.2% → 2.8% |       86 → 81 | `iterate`     | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/iterators.jl:697` |

##### `Array` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:648`)

|  Change | Delta |             % |   Samples | Caller                                                                                                                     | Location                                                                                     |
| ------: | ----: | ------------: | --------: | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
|   +4.0% |   +25 | 85.6% → 84.4% | 628 → 653 | `Array`                                                                                                                    | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:661`  |
|  +16.3% |   +17 | 14.2% → 15.6% | 104 → 121 | `var\"#read#6\"(::Bool, ::Nothing, ::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.read), ::String)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:30`                             |
| removed |    -2 |   0.3% → 0.0% |     2 → 0 | `getindex`                                                                                                                 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:436` |

##### `indexed_iterate` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`)

|  Change | Delta |             % |   Samples | Caller                                                                                                                                                                  | Location                                                                                            |
| ------: | ----: | ------------: | --------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
|  +10.3% |   +43 | 34.1% → 36.6% | 419 → 462 | `#write#79`                                                                                                                                                             | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`                                  |
|  -21.0% |   -13 |   5.0% → 3.9% |   62 → 49 | `indexed_iterate`                                                                                                                                                       | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`        |
|   -1.0% |    -8 | 64.9% → 62.6% | 798 → 790 | `indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64)`                                                                                                        | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`        |
|  -18.2% |    -2 |   0.9% → 0.7% |    11 → 9 | `#write#81`                                                                                                                                                             | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl` |
| removed |    -1 |   0.1% → 0.0% |     1 → 0 | `var\"#write#98\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:340`                                  |

##### `(::JSON3.var\"#defaultminimum##0#defaultminimum##1\"{JSON3.Array{Int64, Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}}})(::Int64)` (`<unknown>`)

|  Change | Delta |             % | Samples | Caller      | Location                                                                                     |
| ------: | ----: | ------------: | ------: | ----------- | -------------------------------------------------------------------------------------------- |
| +100.0% |    +3 | 75.0% → 85.7% |   3 → 6 | `MappingRF` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98` |

##### `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`)

| Change | Delta |      % |         Samples | Caller               | Location    |
| -----: | ----: | -----: | --------------: | -------------------- | ----------- |
|  -1.8% |  -285 | 100.0% | 16,235 → 15,950 | `[unknown function]` | `<unknown>` |

##### `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`)

| Change | Delta |             % |         Samples | Caller               | Location                                                                                            |
| -----: | ----: | ------------: | --------------: | -------------------- | --------------------------------------------------------------------------------------------------- |
|  -1.7% |  -282 |        100.0% | 16,285 → 16,003 | `write`              | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:147`                                  |
|  -1.4% |  -217 | 95.0% → 95.4% | 15,477 → 15,260 | `[unknown function]` | `<unknown>`                                                                                         |
|    new |    +1 |  0.0% → <0.1% |           0 → 1 | `#write#81`          | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl` |

##### `write` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:147`)

| Change | Delta |      % |         Samples | Caller      | Location                                                          |
| -----: | ----: | -----: | --------------: | ----------- | ----------------------------------------------------------------- |
|  -1.7% |  -279 | 100.0% | 16,288 → 16,009 | `#write#58` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:40` |

##### `indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64, ::Int64)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`)

| Change | Delta |      % |       Samples | Caller      | Location                                                           |
| -----: | ----: | -----: | ------------: | ----------- | ------------------------------------------------------------------ |
| -10.7% |  -222 | 100.0% | 2,072 → 1,850 | `#write#79` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157` |

##### `iterate` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:75`)

| Change | Delta |             % |   Samples | Caller                                                                                                                       | Location                                                                                           |
| -----: | ----: | ------------: | --------: | ---------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| -19.0% |  -111 | 55.7% → 51.7% | 585 → 474 | `#write#79`                                                                                                                  | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`                                 |
| -11.7% |   -26 | 21.2% → 21.5% | 223 → 197 | `_foldl_impl`                                                                                                                | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`       |
| -24.5% |   -26 |  10.1% → 8.7% |  106 → 80 | `iterate`                                                                                                                    | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:75`                                  |
| +11.0% |   +23 | 19.9% → 25.3% | 209 → 232 | `isempty(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:1127` |
| -59.4% |   -19 |   3.0% → 1.4% |   32 → 13 | `iterate`                                                                                                                    | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/iterators.jl:697`   |

##### `parse_workload` (`./profile.jl:18`)

| Change | Delta |      % |         Samples | Caller            | Location                                                                                                          |
| -----: | ----: | -----: | --------------: | ----------------- | ----------------------------------------------------------------------------------------------------------------- |
|  -0.4% |   -91 | 100.0% | 23,486 → 23,395 | `macro expansion` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/stdlib/v1.13/Profile/src/Profile.jl:82` |

##### `[unknown function]` (`<unknown>`)

| Change | Delta |             % |         Samples | Caller                                                                       | Location                                                                                            |
| -----: | ----: | ------------: | --------------: | ---------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
|  -1.8% |  -287 | 69.2% → 68.2% | 16,255 → 15,968 | `#write#79`                                                                  | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`                                  |
|  +5.1% |  +277 | 23.1% → 24.3% |   5,415 → 5,692 | `_foldl_impl`                                                                | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`        |
|  +5.0% |  +273 | 23.1% → 24.3% |   5,424 → 5,697 | `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` | `<unknown>`                                                                                         |
|  -1.4% |  -215 | 65.9% → 65.2% | 15,477 → 15,262 | `#write#81`                                                                  | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl` |
|  -0.4% |   -89 |        100.0% | 23,486 → 23,397 | `eval(::Module, ::Any)`                                                      | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:489`         |

##### `macro expansion` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/stdlib/v1.13/Profile/src/Profile.jl:82`)

| Change | Delta |      % |         Samples | Caller         | Location          |
| -----: | ----: | -----: | --------------: | -------------- | ----------------- |
|  -0.4% |   -89 | 100.0% | 23,486 → 23,397 | `capture_wall` | `./profile.jl:43` |

##### `capture_wall` (`./profile.jl:43`)

| Change | Delta |      % |         Samples | Caller               | Location    |
| -----: | ----: | -----: | --------------: | -------------------- | ----------- |
|  -0.4% |   -89 | 100.0% | 23,486 → 23,397 | `[unknown function]` | `<unknown>` |

##### `eval(::Module, ::Any)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:489`)

| Change | Delta |      % |         Samples | Caller                                                             | Location                                                                                        |
| -----: | ----: | -----: | --------------: | ------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------- |
|  -0.4% |   -89 | 100.0% | 23,486 → 23,397 | `include_string(::typeof(identity), ::Module, ::String, ::String)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/loading.jl:2989` |

##### `include_string(::typeof(identity), ::Module, ::String, ::String)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/loading.jl:2989`)

| Change | Delta |      % |         Samples | Caller                                     | Location                                                                                        |
| -----: | ----: | -----: | --------------: | ------------------------------------------ | ----------------------------------------------------------------------------------------------- |
|  -0.4% |   -89 | 100.0% | 23,486 → 23,397 | `_include(::Function, ::Module, ::String)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/loading.jl:3083` |

##### `_include(::Function, ::Module, ::String)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/loading.jl:3083`)

| Change | Delta |      % |         Samples | Caller                        | Location                                                                                    |
| -----: | ----: | -----: | --------------: | ----------------------------- | ------------------------------------------------------------------------------------------- |
|  -0.4% |   -89 | 100.0% | 23,486 → 23,397 | `include(::Module, ::String)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base.jl:309` |

##### `include(::Module, ::String)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base.jl:309`)

| Change | Delta |      % |         Samples | Caller                           | Location                                                                                      |
| -----: | ----: | -----: | --------------: | -------------------------------- | --------------------------------------------------------------------------------------------- |
|  -0.4% |   -89 | 100.0% | 23,486 → 23,397 | `exec_options(::Base.JLOptions)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/client.jl:234` |

##### `exec_options(::Base.JLOptions)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/client.jl:234`)

| Change | Delta |      % |         Samples | Caller     | Location                                                                                      |
| -----: | ----: | -----: | --------------: | ---------- | --------------------------------------------------------------------------------------------- |
|  -0.4% |   -89 | 100.0% | 23,486 → 23,397 | `_start()` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/client.jl:570` |

##### `_symbol` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:1`)

| Change | Delta |      % |       Samples | Caller     | Location                                                           |
| -----: | ----: | -----: | ------------: | ---------- | ------------------------------------------------------------------ |
|  -0.8% |   -52 | 100.0% | 6,675 → 6,623 | `getvalue` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:187` |

##### `getvalue` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:187`)

|  Change | Delta |             % |       Samples | Caller                                                                                                                             | Location                                                          |
| ------: | ----: | ------------: | ------------: | ---------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
|   -2.7% |  -100 | 54.8% → 53.7% | 3,655 → 3,555 | `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40` |
|   +1.4% |   +43 | 45.2% → 46.2% | 3,019 → 3,062 | `iterate`                                                                                                                          | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:78` |
| +500.0% |    +5 |  <0.1% → 0.1% |         1 → 6 | `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, Vector{UInt64}})`                                                     | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40` |

##### `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:87`)

|  Change | Delta |              % |       Samples | Caller                                                                                                                                                                                                                           | Location                                                          |
| ------: | ----: | -------------: | ------------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
|   -4.2% |   -51 |         100.0% | 1,215 → 1,164 | `read!`                                                                                                                                                                                                                          | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:87`  |
|   -3.9% |   -47 | 99.7% → 100.0% | 1,211 → 1,164 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)`                                                      | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:87`  |
|   +5.9% |    +1 |    1.4% → 1.5% |       17 → 18 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:218` |
| removed |    -1 |    0.1% → 0.0% |         1 → 0 | `var\"#read!#9\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Array}, ::Bool)`  | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:312` |

##### `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:218`)

| Change | Delta |      % |       Samples | Caller                                                                                                                                                                               | Location                                                          |
| -----: | ----: | -----: | ------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------- |
|  -4.2% |   -51 | 100.0% | 1,215 → 1,164 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:218` |
| -25.0% |    -1 |   0.3% |         4 → 3 | `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)`                         | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:87`  |

##### `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:218`)

| Change | Delta |      % |       Samples | Caller                                                                                                                                                       | Location                                                         |
| -----: | ----: | -----: | ------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------- |
|  -4.2% |   -51 | 100.0% | 1,215 → 1,164 | `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:87` |

##### `read!` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:87`)

| Change | Delta |      % |       Samples | Caller                                                                                                                     | Location                                                         |
| -----: | ----: | -----: | ------------: | -------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
|  -4.2% |   -51 | 100.0% | 1,215 → 1,164 | `var\"#read#6\"(::Bool, ::Nothing, ::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.read), ::String)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:30` |

##### `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:87`)

| Change | Delta |             % |       Samples | Caller                                                                                                                                                                                                                           | Location                                                          |
| -----: | ----: | ------------: | ------------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
|  -3.9% |   -47 |        100.0% | 1,211 → 1,164 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:218` |
|  -3.5% |   -42 | 99.5% → 99.9% | 1,205 → 1,163 | `var\"#read!#9\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Array}, ::Bool)`  | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:312` |
| +20.0% |    +1 |   0.4% → 0.5% |         5 → 6 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)`                                             | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:218` |

##### `var\"#read!#9\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Array}, ::Bool)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:312`)

| Change | Delta |           % |       Samples | Caller                                                                                                                                                                              | Location                                                          |
| -----: | ----: | ----------: | ------------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
|  -3.7% |   -45 |      100.0% | 1,208 → 1,163 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Array}, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:312` |
| -66.7% |    -2 | 0.2% → 0.1% |         3 → 1 | `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)`                        | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:87`  |

##### `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Array}, ::Bool)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:312`)

|  Change | Delta |           % |       Samples | Caller                                                                                                                                                                      | Location                                                         |
| ------: | ----: | ----------: | ------------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
|   -3.7% |   -45 |      100.0% | 1,208 → 1,163 | `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)`                | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:87` |
| removed |    -3 | 0.2% → 0.0% |         3 → 0 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:87` |

##### `var\"#write#98\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:340`)

| Change | Delta |             % |       Samples | Caller                                                                         | Location                                                           |
| -----: | ----: | ------------: | ------------: | ------------------------------------------------------------------------------ | ------------------------------------------------------------------ |
|  -3.1% |   -35 | 97.3% → 97.7% | 1,117 → 1,082 | `write(::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:340` |
| -19.4% |    -6 |   2.7% → 2.3% |       31 → 25 | `#write#79`                                                                    | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157` |

##### `write(::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:340`)

| Change | Delta |      % |       Samples | Caller      | Location                                                           |
| -----: | ----: | -----: | ------------: | ----------- | ------------------------------------------------------------------ |
|  -3.4% |   -39 | 100.0% | 1,152 → 1,113 | `#write#79` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157` |

##### `var\"#read#6\"(::Bool, ::Nothing, ::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.read), ::String)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:30`)

| Change | Delta |      % |       Samples | Caller | Location                                                         |
| -----: | ----: | -----: | ------------: | ------ | ---------------------------------------------------------------- |
|  -2.3% |   -31 | 100.0% | 1,322 → 1,291 | `read` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:30` |

##### `read` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:30`)

| Change | Delta |      % |       Samples | Caller           | Location          |
| -----: | ----: | -----: | ------------: | ---------------- | ----------------- |
|  -2.3% |   -31 | 100.0% | 1,322 → 1,291 | `parse_workload` | `./profile.jl:18` |

##### `#write#58` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:40`)

| Change | Delta |      % |         Samples | Caller               | Location    |
| -----: | ----: | -----: | --------------: | -------------------- | ----------- |
|  -0.1% |   -27 | 100.0% | 21,743 → 21,716 | `[unknown function]` | `<unknown>` |

##### `getbyte` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:8`)

|  Change | Delta |             % |   Samples | Caller                                                                                                                                                                                                                           | Location                                                          |
| ------: | ----: | ------------: | --------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
|   -7.2% |   -13 | 52.2% → 51.9% | 180 → 167 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:218` |
|   -9.2% |    -9 | 28.4% → 27.6% |   98 → 89 | `macro expansion`                                                                                                                                                                                                                | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:29` |
| removed |    -2 |   0.6% → 0.0% |     2 → 0 | `var\"#read!#9\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Array}, ::Bool)`  | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:312` |
|   +1.5% |    +1 | 18.8% → 20.5% |   65 → 66 | `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{String})`                                                                                                                   | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:142` |

##### `getvalue` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:195`)

| Change | Delta |      % |  Samples | Caller     | Location                                                           |
| -----: | ----: | -----: | -------: | ---------- | ------------------------------------------------------------------ |
| -20.0% |   -21 | 100.0% | 105 → 84 | `getvalue` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:218` |

##### `getvalue` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:126`)

| Change | Delta |             % | Samples | Caller     | Location                                                           |
| -----: | ----: | ------------: | ------: | ---------- | ------------------------------------------------------------------ |
| -74.5% |   -35 | 51.6% → 16.9% | 47 → 12 | `getindex` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:163` |
| +34.1% |   +15 | 48.4% → 83.1% | 44 → 59 | `getvalue` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:214` |

##### `Pair` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base.jl:12`)

| Change | Delta |      % | Samples | Caller    | Location                                                          |
| -----: | ----: | -----: | ------: | --------- | ----------------------------------------------------------------- |
| -80.4% |   -45 | 100.0% | 56 → 11 | `iterate` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:81` |

##### `codeunit` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:167`)

|  Change | Delta |             % |   Samples | Caller                                                                                                                                                                  | Location                                                                                              |
| ------: | ----: | ------------: | --------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
|   -6.2% |   -22 | 75.6% → 74.8% | 357 → 335 | `getindex`                                                                                                                                                              | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/basic.jl:793`  |
|  -42.9% |    -9 |   4.4% → 2.7% |   21 → 12 | `macro expansion`                                                                                                                                                       | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:355`                                    |
|  +44.4% |    +4 |   1.9% → 2.9% |    9 → 13 | `length_continued`                                                                                                                                                      | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:569` |
| +400.0% |    +4 |   0.2% → 1.1% |     1 → 5 | `var\"#write#98\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:340`                                    |
|  -27.3% |    -3 |   2.3% → 1.8% |    11 → 8 | `length_continued`                                                                                                                                                      | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:564` |

##### `getindex` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/basic.jl:793`)

|  Change | Delta |             % |   Samples | Caller                                                                                                              | Location                                                             |
| ------: | ----: | ------------: | --------: | ------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
|   -6.7% |   -23 | 94.0% → 93.9% | 345 → 322 | `getbyte`                                                                                                           | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:8`     |
| removed |    -3 |   0.8% → 0.0% |     3 → 0 | `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.True})`  | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:174`    |
|  +25.0% |    +1 |   1.1% → 1.5% |     4 → 5 | `peekbyte`                                                                                                          | `../profiler-md-julia-depot/packages/Parsers/05lwR/src/utils.jl:339` |
|   +8.3% |    +1 |   3.3% → 3.8% |   12 → 13 | `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.False})` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:189`    |

##### `Dict` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:80`)

| Change | Delta |      % | Samples | Caller     | Location                                                           |
| -----: | ----: | -----: | ------: | ---------- | ------------------------------------------------------------------ |
| -27.4% |   -20 | 100.0% | 73 → 53 | `getvalue` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:126` |

##### `unsafe_load` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/pointer.jl:151`)

| Change | Delta |             % |   Samples | Caller        | Location                                                                                              |
| -----: | ----: | ------------: | --------: | ------------- | ----------------------------------------------------------------------------------------------------- |
|  -5.1% |   -24 | 97.1% → 95.9% | 472 → 448 | `codeunit`    | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:167` |
|  -3.9% |   -19 |        100.0% | 486 → 467 | `unsafe_load` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/pointer.jl:151`        |
| +35.7% |    +5 |   2.9% → 4.1% |   14 → 19 | `codeunit`    | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/strings.jl:21`                                   |

##### `unsafe_string` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:126`)

| Change | Delta |      % | Samples | Caller     | Location                                                           |
| -----: | ----: | -----: | ------: | ---------- | ------------------------------------------------------------------ |
| -17.5% |   -17 | 100.0% | 97 → 80 | `getvalue` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:195` |

##### `macro expansion` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/simdloop.jl:77`)

| Change | Delta |             % |   Samples | Caller                                                                                                                                                                  | Location                                                           |
| -----: | ----: | ------------: | --------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
|  -7.6% |    -9 | 54.6% → 54.5% | 118 → 109 | `escapelength`                                                                                                                                                          | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:331` |
|  -7.1% |    -7 | 45.4% → 45.5% |   98 → 91 | `var\"#write#98\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:340` |

##### `isassigned` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:1641`)

| Change | Delta |             % |   Samples | Caller               | Location                                                                                            |
| -----: | ----: | ------------: | --------: | -------------------- | --------------------------------------------------------------------------------------------------- |
| -12.6% |   -71 | 56.5% → 50.1% | 563 → 492 | `#write#81`          | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl` |
| +13.1% |   +57 | 43.5% → 49.9% | 434 → 491 | `#defaultminimum##0` | `<unknown>`                                                                                         |

##### `+` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:87`)

| Change | Delta |             % | Samples | Caller                                                                                                                                                                                                                           | Location                                                                                              |
| -----: | ----: | ------------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| +17.1% |   +14 | 27.6% → 33.6% | 82 → 96 | `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})`                                                                                               | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40`                                     |
| -80.0% |   -12 |   5.1% → 1.0% |  15 → 3 | `macro expansion`                                                                                                                                                                                                                | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:333`                                    |
| -46.2% |    -6 |   4.4% → 2.4% |  13 → 7 | `length_continued`                                                                                                                                                                                                               | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:568` |
| -54.5% |    -6 |   3.7% → 1.7% |  11 → 5 | `unescape(::JSON3.PointerString)`                                                                                                                                                                                                | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/strings.jl:48`                                   |
| +20.0% |    +4 |   6.7% → 8.4% | 20 → 24 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:218`                                     |

##### `length_continued` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:561`)

| Change | Delta |      % |   Samples | Caller             | Location                                                                                              |
| -----: | ----: | -----: | --------: | ------------------ | ----------------------------------------------------------------------------------------------------- |
|  -5.5% |    -9 | 100.0% | 165 → 156 | `length(::String)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:540` |

##### `indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`)

| Change | Delta |      % |   Samples | Caller      | Location                                                           |
| -----: | ----: | -----: | --------: | ----------- | ------------------------------------------------------------------ |
|  -1.1% |    -9 | 100.0% | 807 → 798 | `#write#79` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157` |

#### Callees

Callees with the largest change in contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`)

| Change | Delta |            % |       Samples | Callee                                                                       | Location                                                                                         |
| -----: | ----: | -----------: | ------------: | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
|  +5.1% |  +277 |        99.9% | 5,415 → 5,692 | `[unknown function]`                                                         | `<unknown>`                                                                                      |
|  +5.0% |  +136 |        50.1% | 2,719 → 2,855 | `iterate`                                                                    | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/iterators.jl:697` |
| +12.8% |   +42 |  6.1% → 6.5% |     329 → 371 | `MappingRF`                                                                  | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98`     |
| -11.7% |   -26 |  4.1% → 3.5% |     223 → 197 | `iterate`                                                                    | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:75`                                |
| -66.7% |    -4 | 0.1% → <0.1% |         6 → 2 | `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` | `<unknown>`                                                                                      |

##### `#defaultminimum##0` (`<unknown>`)

| Change | Delta |             % |       Samples | Callee           | Location                                                                                                 |
| -----: | ----: | ------------: | ------------: | ---------------- | -------------------------------------------------------------------------------------------------------- |
|  +4.5% |  +218 | 90.1% → 89.7% | 4,877 → 5,095 | `defaultminimum` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:12`                                        |
| +13.1% |   +57 |   8.0% → 8.6% |     434 → 491 | `isassigned`     | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:1641` |
|  +1.0% |    +3 |   5.4% → 5.2% |     292 → 295 | `getindex`       | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:163`                                       |
|    new |    +2 |  0.0% → <0.1% |         0 → 2 | `isassigned`     | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:1632` |
|    new |    +2 |  0.0% → <0.1% |         0 → 2 | `isassigned`     | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:1642` |

##### `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` (`<unknown>`)

|  Change | Delta |            % |       Samples | Callee                                                                                                                                    | Location                                                                                    |
| ------: | ----: | -----------: | ------------: | ----------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
|   +5.0% |  +273 |        99.9% | 5,424 → 5,697 | `[unknown function]`                                                                                                                      | `<unknown>`                                                                                 |
| +133.3% |    +4 |         0.1% |         3 → 7 | `defaultminimum`                                                                                                                          | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:6`                            |
| +200.0% |    +4 | <0.1% → 0.1% |         2 → 6 | `+(::UInt64, ::Int64)`                                                                                                                    | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:1054` |
| +133.3% |    +4 |         0.1% |         3 → 7 | `defaultminimum(::JSON3.Array{Int64, Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:11`                           |
|  -42.9% |    -3 |         0.1% |         7 → 4 | `defaultminimum(::String)`                                                                                                                | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:5`                            |

##### `MappingRF` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98`)

|  Change | Delta |            % |       Samples | Callee                                                                                                                                                                                  | Location                                                                                     |
| ------: | ----: | -----------: | ------------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
|   +5.0% |  +270 |       100.0% | 5,428 → 5,698 | `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})`                                                                                                            | `<unknown>`                                                                                  |
| +250.0% |    +5 | <0.1% → 0.1% |         2 → 7 | `BottomRF`                                                                                                                                                                              | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:84` |
|  +16.7% |    +4 |  0.4% → 0.5% |       24 → 28 | `BottomRF`                                                                                                                                                                              | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:83` |
| +100.0% |    +3 |         0.1% |         3 → 6 | `(::JSON3.var\"#defaultminimum##0#defaultminimum##1\"{JSON3.Array{Int64, Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}}})(::Int64)` | `<unknown>`                                                                                  |

##### `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:56`)

| Change | Delta |             % |       Samples | Callee      | Location                                                                                         |
| -----: | ----: | ------------: | ------------: | ----------- | ------------------------------------------------------------------------------------------------ |
|  +5.0% |  +269 | 99.8% → 99.9% | 5,428 → 5,697 | `MappingRF` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98`     |
| -66.7% |    -6 |   0.2% → 0.1% |         9 → 3 | `iterate`   | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/iterators.jl:697` |

##### `foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:46`)

|  Change | Delta |             % |       Samples | Callee                                                                                                                             | Location                                                                                     |
| ------: | ----: | ------------: | ------------: | ---------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
|   +5.1% |  +274 | 99.7% → 99.9% | 5,423 → 5,697 | `_foldl_impl`                                                                                                                      | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60` |
|   +4.8% |  +263 |        100.0% | 5,440 → 5,703 | `_foldl_impl`                                                                                                                      | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:56` |
| removed |    -1 |  <0.1% → 0.0% |         1 → 0 | `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40`                            |
|     new |    +1 |  0.0% → <0.1% |         0 → 1 | `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})`                                                       | `<unknown>`                                                                                  |

##### `mapfoldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:42`)

| Change | Delta |      % |       Samples | Callee       | Location                                                                                     |
| -----: | ----: | -----: | ------------: | ------------ | -------------------------------------------------------------------------------------------- |
|  +4.8% |  +263 | 100.0% | 5,440 → 5,703 | `foldl_impl` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:46` |

##### `#mapfoldl#271` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:173`)

| Change | Delta |      % |       Samples | Callee          | Location                                                                                     |
| -----: | ----: | -----: | ------------: | --------------- | -------------------------------------------------------------------------------------------- |
|  +4.8% |  +263 | 100.0% | 5,440 → 5,703 | `mapfoldl_impl` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:42` |

##### `mapfoldl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:173`)

| Change | Delta |      % |       Samples | Callee          | Location                                                                                      |
| -----: | ----: | -----: | ------------: | --------------- | --------------------------------------------------------------------------------------------- |
|  +4.8% |  +263 | 100.0% | 5,440 → 5,703 | `#mapfoldl#271` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:173` |

##### `#mapreduce#275` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:306`)

| Change | Delta |      % |       Samples | Callee     | Location                                                                                      |
| -----: | ----: | -----: | ------------: | ---------- | --------------------------------------------------------------------------------------------- |
|  +4.8% |  +263 | 100.0% | 5,440 → 5,703 | `mapfoldl` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:173` |

##### `mapreduce` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:306`)

| Change | Delta |      % |       Samples | Callee           | Location                                                                                      |
| -----: | ----: | -----: | ------------: | ---------------- | --------------------------------------------------------------------------------------------- |
|  +4.8% |  +263 | 100.0% | 5,440 → 5,703 | `#mapreduce#275` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:306` |

##### `#sum#278` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:535`)

| Change | Delta |      % |       Samples | Callee      | Location                                                                                      |
| -----: | ----: | -----: | ------------: | ----------- | --------------------------------------------------------------------------------------------- |
|  +4.8% |  +263 | 100.0% | 5,440 → 5,703 | `mapreduce` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:306` |

##### `sum` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:535`)

| Change | Delta |      % |       Samples | Callee     | Location                                                                                      |
| -----: | ----: | -----: | ------------: | ---------- | --------------------------------------------------------------------------------------------- |
|  +4.8% |  +263 | 100.0% | 5,440 → 5,703 | `#sum#278` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:535` |

##### `sum` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:564`)

| Change | Delta |      % |       Samples | Callee     | Location                                                                                      |
| -----: | ----: | -----: | ------------: | ---------- | --------------------------------------------------------------------------------------------- |
|  +4.8% |  +263 | 100.0% | 5,440 → 5,703 | `#sum#279` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:564` |

##### `#sum#279` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:564`)

| Change | Delta |      % |       Samples | Callee | Location                                                                                      |
| -----: | ----: | -----: | ------------: | ------ | --------------------------------------------------------------------------------------------- |
|  +4.8% |  +263 | 100.0% | 5,440 → 5,703 | `sum`  | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:535` |

##### `defaultminimum` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:12`)

|  Change | Delta |            % |       Samples | Callee                                                                                                                       | Location                                                                                           |
| ------: | ----: | -----------: | ------------: | ---------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
|   +4.8% |  +263 |       100.0% | 5,440 → 5,703 | `sum`                                                                                                                        | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:564`      |
|   +5.3% |    +3 |  1.0% → 1.1% |       57 → 60 | `isempty(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:1127` |
| removed |    -2 | <0.1% → 0.0% |         2 → 0 | `isempty(::JSON3.Object{Base.CodeUnits{UInt8, String}, Vector{UInt64}})`                                                     | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:1127` |

##### `rehash!(::Dict{Symbol, Int64}, ::Int64)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:138`)

|  Change | Delta |             % |   Samples | Callee          | Location                                                                                             |
| ------: | ----: | ------------: | --------: | --------------- | ---------------------------------------------------------------------------------------------------- |
|  +89.8% |  +219 | 83.0% → 88.2% | 244 → 463 | `GenericMemory` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:588`          |
| +350.0% |    +7 |   0.7% → 1.7% |     2 → 9 | `setindex!`     | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/genericmemory.jl:270` |
| +100.0% |    +7 |   2.4% → 2.7% |    7 → 14 | `getindex`      | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:401`    |
|  -60.0% |    -3 |   1.7% → 0.4% |     5 → 2 | `iterate`       | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/range.jl:928`         |
| removed |    -2 |   0.7% → 0.0% |     2 → 0 | `getproperty`   | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base_compiler.jl:57`  |

##### `setindex!(::Dict{Symbol, Int64}, ::Int64, ::Symbol)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:356`)

|  Change | Delta |             % |   Samples | Callee                                                     | Location                                                                                    |
| ------: | ----: | ------------: | --------: | ---------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| +291.0% |  +195 |  6.7% → 21.8% |  67 → 262 | `_setindex!`                                               | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:339` |
|   +5.4% |   +38 | 70.8% → 61.6% | 703 → 741 | `ht_keyindex2_shorthash!(::Dict{Symbol, Int64}, ::Symbol)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:267` |
|  -17.4% |    -8 |   4.6% → 3.2% |   46 → 38 | `_setindex!`                                               | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:331` |
|  -72.7% |    -8 |   1.1% → 0.2% |    11 → 3 | `_setindex!`                                               | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:326` |
| +120.0% |    +6 |   0.5% → 0.9% |    5 → 11 | `_setindex!`                                               | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:329` |

##### `_setindex!` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:339`)

|  Change | Delta |             % |  Samples | Callee                                    | Location                                                                                    |
| ------: | ----: | ------------: | -------: | ----------------------------------------- | ------------------------------------------------------------------------------------------- |
| +316.4% |  +193 | 91.0% → 96.9% | 61 → 254 | `rehash!(::Dict{Symbol, Int64}, ::Int64)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:138` |

##### `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40`)

| Change | Delta |             % |       Samples | Callee                                                     | Location                                                                                        |
| -----: | ----: | ------------: | ------------: | ---------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| +24.3% |  +229 | 19.7% → 23.7% |   941 → 1,170 | `setindex!(::Dict{Symbol, Int64}, ::Int64, ::Symbol)`      | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:356`     |
|  -2.7% |  -100 | 76.4% → 72.0% | 3,655 → 3,555 | `getvalue`                                                 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:187`                              |
| +69.6% |   +16 |   0.5% → 0.8% |       23 → 39 | `getindex`                                                 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/subarray.jl:334` |
| +17.1% |   +14 |   1.7% → 1.9% |       82 → 96 | `+`                                                        | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:87`       |
| -11.5% |    -6 |   1.1% → 0.9% |       52 → 46 | `ht_keyindex2_shorthash!(::Dict{Symbol, Int64}, ::Symbol)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:267`     |

##### `getvalue` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:127`)

| Change | Delta |             % |       Samples | Callee                                                                                                                             | Location                                                                                    |
| -----: | ----: | ------------: | ------------: | ---------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
|  +3.2% |  +151 | 98.9% → 99.3% | 4,782 → 4,933 | `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40`                           |
| -36.0% |   -18 |   1.0% → 0.6% |       50 → 32 | `setindex!(::Dict{Symbol, Int64}, ::Int64, ::Symbol)`                                                                              | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:356` |

##### `getvalue` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:214`)

| Change | Delta |             % |       Samples | Callee     | Location                                                           |
| -----: | ----: | ------------: | ------------: | ---------- | ------------------------------------------------------------------ |
|  +2.9% |   +94 | 98.7% → 98.3% | 3,235 → 3,329 | `getvalue` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:127` |
| +34.1% |   +15 |   1.3% → 1.7% |       44 → 59 | `getvalue` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:126` |

##### `iterate` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:81`)

| Change | Delta |             % |       Samples | Callee     | Location                                                                                   |
| -----: | ----: | ------------: | ------------: | ---------- | ------------------------------------------------------------------------------------------ |
|  +3.3% |  +109 | 87.2% → 88.4% | 3,279 → 3,388 | `getvalue` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:214`                         |
| -80.4% |   -45 |   1.5% → 0.3% |       56 → 11 | `Pair`     | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base.jl:12` |
| +42.3% |   +11 |   0.7% → 1.0% |       26 → 37 | `getvalue` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl`                             |
| +46.2% |    +6 |   0.3% → 0.5% |       13 → 19 | `getvalue` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:213`                         |
|  -8.3% |    -6 |   1.9% → 1.7% |       72 → 66 | `getvalue` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:216`                         |

##### `iterate` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:78`)

| Change | Delta |             % |       Samples | Callee     | Location                                                           |
| -----: | ----: | ------------: | ------------: | ---------- | ------------------------------------------------------------------ |
|  +1.4% |   +43 | 99.1% → 98.3% | 3,019 → 3,062 | `getvalue` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:187` |
| +92.6% |   +25 |   0.9% → 1.7% |       27 → 52 | `getvalue` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl`     |
|    new |    +1 |  0.0% → <0.1% |         0 → 1 | `getvalue` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:184` |

##### `var\"#write#86\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.NumberType, ::Vector{UInt8}, ::Int64, ::Int64, ::Int64)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:224`)

|   Change | Delta |             % | Samples | Callee                                        | Location                                                                                        |
| -------: | ----: | ------------: | ------: | --------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| +2050.0% |   +41 |  3.8% → 45.7% |  2 → 43 | `realloc!(::Vector{UInt8}, ::Int64, ::Int64)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:51`                               |
|   +50.0% |    +3 |  11.3% → 9.6% |   6 → 9 | `setindex!`                                   | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:1020`   |
|   -16.7% |    -1 |  11.3% → 5.3% |   6 → 5 | `div`                                         | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:270`      |
|    -7.1% |    -1 | 26.4% → 13.8% | 14 → 13 | `ndigits`                                     | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/intfuncs.jl:867` |

##### `write(::StructTypes.NumberType, ::Vector{UInt8}, ::Int64, ::Int64, ::Int64)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:224`)

| Change | Delta |             % | Samples | Callee                                                                                                                                                                 | Location                                                                                        |
| -----: | ----: | ------------: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| +85.4% |   +41 | 81.4% → 94.7% | 48 → 89 | `var\"#write#86\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.NumberType, ::Vector{UInt8}, ::Int64, ::Int64, ::Int64)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:224`                              |
| -50.0% |    -1 |   3.4% → 1.1% |   2 → 1 | `ndigits0zpb(::UInt64, ::Int64)`                                                                                                                                       | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/intfuncs.jl:759` |

##### `getvalue` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl`)

|  Change | Delta |             % | Samples | Callee           | Location                                                                                              |
| ------: | ----: | ------------: | ------: | ---------------- | ----------------------------------------------------------------------------------------------------- |
|  -25.0% |    -6 | 40.0% → 19.1% | 24 → 18 | `getnontypemask` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:114`                                    |
| removed |    -1 |   1.7% → 0.0% |   1 → 0 | `pointer`        | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/abstractarray.jl:1279` |

##### `string` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:88`)

| Change | Delta |      % | Samples | Callee | Location                                                                                   |
| -----: | ----: | -----: | ------: | ------ | ------------------------------------------------------------------------------------------ |
| +40.3% |   +27 | 100.0% | 67 → 94 | `\|`   | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:418` |

##### `realloc!(::Vector{UInt8}, ::Int64, ::Int64)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:51`)

| Change | Delta |      % |   Samples | Callee  | Location                                                                                     |
| -----: | ----: | -----: | --------: | ------- | -------------------------------------------------------------------------------------------- |
|  +3.8% |   +24 | 100.0% | 629 → 653 | `zeros` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:622` |

##### `getvalue` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:193`)

| Change | Delta |             % |   Samples | Callee                              | Location                                                                                      |
| -----: | ----: | ------------: | --------: | ----------------------------------- | --------------------------------------------------------------------------------------------- |
|  +8.1% |    +9 | 96.5% → 93.0% | 111 → 120 | `unescape(::JSON3.PointerString)`   | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/strings.jl:48`                           |
|    new |    +3 |   0.0% → 2.3% |     0 → 3 | `getnontypemask`                    | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:114`                            |
| +33.3% |    +1 |   2.6% → 3.1% |     3 → 4 | `resize!(::Vector{UInt8}, ::Int64)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:1533` |

##### `unescape(::JSON3.PointerString)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/strings.jl:48`)

| Change | Delta |             % | Samples | Callee         | Location                                                                                          |
| -----: | ----: | ------------: | ------: | -------------- | ------------------------------------------------------------------------------------------------- |
| -54.5% |    -6 |   9.9% → 4.2% |  11 → 5 | `+`            | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:87`         |
| +25.0% |    +5 | 18.0% → 20.8% | 20 → 25 | `StringVector` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/iobuffer.jl:168`   |
| +35.7% |    +5 | 12.6% → 15.8% | 14 → 19 | `codeunit`     | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/strings.jl:21`                               |
|  +5.3% |    +2 | 34.2% → 33.3% | 38 → 40 | `setindex!`    | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:1020`     |
| -25.0% |    -2 |   7.2% → 5.0% |   8 → 6 | `String`       | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl` |

##### `codeunit` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/strings.jl:21`)

| Change | Delta |      % | Samples | Callee        | Location                                                                                       |
| -----: | ----: | -----: | ------: | ------------- | ---------------------------------------------------------------------------------------------- |
| +35.7% |    +5 | 100.0% | 14 → 19 | `unsafe_load` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/pointer.jl:151` |

##### `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{String})` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:142`)

|  Change | Delta |             % | Samples | Callee      | Location                                                                                         |
| ------: | ----: | ------------: | ------: | ----------- | ------------------------------------------------------------------------------------------------ |
| +150.0% |   +18 |  4.4% → 10.9% | 12 → 30 | `string`    | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:88`                                |
|  -27.1% |   -13 | 17.8% → 12.8% | 48 → 35 | `==`        | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/promotion.jl:641` |
|  +40.0% |    +4 |   3.7% → 5.1% | 10 → 14 | `setindex!` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:1020`    |
| +300.0% |    +3 |   0.4% → 1.5% |   1 → 4 | `+`         | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:87`        |
| +100.0% |    +2 |   0.7% → 1.5% |   2 → 4 | `setindex!` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:1019`    |

##### `typeparser(::Type{Float64}, ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Int16, ::Parsers.Options)` (`../profiler-md-julia-depot/packages/Parsers/05lwR/src/components.jl:392`)

|  Change | Delta |             % | Samples | Callee       | Location                                                              |
| ------: | ----: | ------------: | ------: | ------------ | --------------------------------------------------------------------- |
|   +7.1% |    +2 | 75.7% → 73.2% | 28 → 30 | `typeparser` | `../profiler-md-julia-depot/packages/Parsers/05lwR/src/floats.jl:270` |
|  -50.0% |    -2 |  10.8% → 4.9% |   4 → 2 | `typeparser` | `../profiler-md-julia-depot/packages/Parsers/05lwR/src/floats.jl:152` |
| +100.0% |    +1 |   2.7% → 4.9% |   1 → 2 | `typeparser` | `../profiler-md-julia-depot/packages/Parsers/05lwR/src/floats.jl:276` |

##### `iterate` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/iterators.jl:697`)

| Change | Delta |             % |       Samples | Callee    | Location                                                                                         |
| -----: | ----: | ------------: | ------------: | --------- | ------------------------------------------------------------------------------------------------ |
|  +9.2% |  +140 | 56.0% → 58.3% | 1,527 → 1,667 | `iterate` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:81`                                |
| -59.4% |   -19 |   1.2% → 0.5% |       32 → 13 | `iterate` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:75`                                |
|  +1.5% |   +17 | 42.3% → 41.0% | 1,154 → 1,171 | `iterate` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:78`                                |
|  -5.8% |    -5 |   3.2% → 2.8% |       86 → 81 | `iterate` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/iterators.jl:697` |
| -83.3% |    -5 |  0.2% → <0.1% |         6 → 1 | `iterate` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:80`                                |

##### `Array` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:648`)

| Change | Delta |      % |   Samples | Callee          | Location                                                                                    |
| -----: | ----: | -----: | --------: | --------------- | ------------------------------------------------------------------------------------------- |
|  +5.4% |   +40 | 100.0% | 734 → 774 | `GenericMemory` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:588` |

##### `indexed_iterate` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`)

| Change | Delta |           % | Samples | Callee            | Location                                                                                     |
| -----: | ----: | ----------: | ------: | ----------------- | -------------------------------------------------------------------------------------------- |
| -21.0% |   -13 | 5.0% → 3.9% | 62 → 49 | `indexed_iterate` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163` |

##### `(::JSON3.var\"#defaultminimum##0#defaultminimum##1\"{JSON3.Array{Int64, Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}}})(::Int64)` (`<unknown>`)

| Change | Delta |            % | Samples | Callee       | Location                                                                                                 |
| -----: | ----: | -----------: | ------: | ------------ | -------------------------------------------------------------------------------------------------------- |
|    new |    +2 | 0.0% → 28.6% |   0 → 2 | `isassigned` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:1640` |
|    new |    +1 | 0.0% → 14.3% |   0 → 1 | `isassigned` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`      |

##### `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`)

| Change | Delta |             % |         Samples | Callee               | Location                                                                                                 |
| -----: | ----: | ------------: | --------------: | -------------------- | -------------------------------------------------------------------------------------------------------- |
|  -1.4% |  -215 | 95.3% → 95.7% | 15,477 → 15,262 | `[unknown function]` | `<unknown>`                                                                                              |
| -12.6% |   -71 |   3.5% → 3.1% |       563 → 492 | `isassigned`         | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:1641` |
|    new |   +19 |   0.0% → 0.1% |          0 → 19 | `iterate`            | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/range.jl`                 |
|  +4.7% |   +17 |   2.2% → 2.4% |       360 → 377 | `getindex`           | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:163`                                       |
|    new |    +4 |  0.0% → <0.1% |           0 → 4 | `isassigned`         | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:1640` |

##### `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`)

| Change | Delta |             % |         Samples | Callee                                                                    | Location                                                                                     |
| -----: | ----: | ------------: | --------------: | ------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
|  -1.8% |  -287 |         99.8% | 16,255 → 15,968 | `[unknown function]`                                                      | `<unknown>`                                                                                  |
| -10.7% |  -222 | 12.7% → 11.6% |   2,072 → 1,850 | `indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64, ::Int64)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163` |
| -19.0% |  -111 |   3.6% → 3.0% |       585 → 474 | `iterate`                                                                 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:75`                            |
|  -5.6% |  -102 | 11.3% → 10.8% |   1,837 → 1,735 | `iterate`                                                                 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:81`                            |
| +10.3% |   +43 |   2.6% → 2.9% |       419 → 462 | `indexed_iterate`                                                         | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163` |

##### `write` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:147`)

| Change | Delta |      % |         Samples | Callee      | Location                                                           |
| -----: | ----: | -----: | --------------: | ----------- | ------------------------------------------------------------------ |
|  -1.7% |  -282 | 100.0% | 16,285 → 16,003 | `#write#79` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157` |

##### `iterate` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:75`)

| Change | Delta |             % |   Samples | Callee    | Location                                                          |
| -----: | ----: | ------------: | --------: | --------- | ----------------------------------------------------------------- |
|  +8.9% |   +35 | 37.6% → 46.9% | 395 → 430 | `iterate` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:81` |
| -24.5% |   -26 |  10.1% → 8.7% |  106 → 80 | `iterate` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:75` |
|  +6.4% |   +19 | 28.4% → 34.6% | 298 → 317 | `iterate` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:78` |
| -63.6% |   -14 |   2.1% → 0.9% |    22 → 8 | `length`  | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:38` |
| -20.0% |    -2 |   1.0% → 0.9% |    10 → 8 | `iterate` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl`    |

##### `parse_workload` (`./profile.jl:18`)

| Change | Delta |             % |         Samples | Callee               | Location                                                                                              |
| -----: | ----: | ------------: | --------------: | -------------------- | ----------------------------------------------------------------------------------------------------- |
|  -2.3% |   -31 |   5.6% → 5.5% |   1,322 → 1,291 | `read`               | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:30`                                      |
|  -0.1% |   -30 | 92.6% → 92.8% | 21,748 → 21,718 | `[unknown function]` | `<unknown>`                                                                                           |
|  -1.7% |    -6 |          1.5% |       362 → 356 | `length(::String)`   | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:540` |

##### `[unknown function]` (`<unknown>`)

| Change | Delta |             % |         Samples | Callee                                                                       | Location                                                                                            |
| -----: | ----: | ------------: | --------------: | ---------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
|  -1.8% |  -285 | 69.1% → 68.2% | 16,235 → 15,950 | `#write#81`                                                                  | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl` |
|  +5.0% |  +273 | 23.1% → 24.3% |   5,421 → 5,694 | `sum`                                                                        | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:535`       |
|  +5.0% |  +271 | 23.0% → 24.3% |   5,410 → 5,681 | `#defaultminimum##0`                                                         | `<unknown>`                                                                                         |
|  -1.4% |  -217 | 65.9% → 65.2% | 15,477 → 15,260 | `#write#79`                                                                  | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`                                  |
|  +2.8% |   +98 | 14.9% → 15.3% |   3,492 → 3,590 | `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` | `<unknown>`                                                                                         |

##### `macro expansion` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/stdlib/v1.13/Profile/src/Profile.jl:82`)

| Change | Delta |      % |         Samples | Callee           | Location          |
| -----: | ----: | -----: | --------------: | ---------------- | ----------------- |
|  -0.4% |   -91 | 100.0% | 23,486 → 23,395 | `parse_workload` | `./profile.jl:18` |

##### `capture_wall` (`./profile.jl:43`)

| Change | Delta |      % |         Samples | Callee            | Location                                                                                                          |
| -----: | ----: | -----: | --------------: | ----------------- | ----------------------------------------------------------------------------------------------------------------- |
|  -0.4% |   -89 | 100.0% | 23,486 → 23,397 | `macro expansion` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/stdlib/v1.13/Profile/src/Profile.jl:82` |

##### `eval(::Module, ::Any)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:489`)

| Change | Delta |      % |         Samples | Callee               | Location    |
| -----: | ----: | -----: | --------------: | -------------------- | ----------- |
|  -0.4% |   -89 | 100.0% | 23,486 → 23,397 | `[unknown function]` | `<unknown>` |

##### `include_string(::typeof(identity), ::Module, ::String, ::String)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/loading.jl:2989`)

| Change | Delta |      % |         Samples | Callee                  | Location                                                                                    |
| -----: | ----: | -----: | --------------: | ----------------------- | ------------------------------------------------------------------------------------------- |
|  -0.4% |   -89 | 100.0% | 23,486 → 23,397 | `eval(::Module, ::Any)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:489` |

##### `_include(::Function, ::Module, ::String)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/loading.jl:3083`)

| Change | Delta |      % |         Samples | Callee                                                             | Location                                                                                        |
| -----: | ----: | -----: | --------------: | ------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------- |
|  -0.4% |   -89 | 100.0% | 23,486 → 23,397 | `include_string(::typeof(identity), ::Module, ::String, ::String)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/loading.jl:2989` |

##### `include(::Module, ::String)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base.jl:309`)

| Change | Delta |      % |         Samples | Callee                                     | Location                                                                                        |
| -----: | ----: | -----: | --------------: | ------------------------------------------ | ----------------------------------------------------------------------------------------------- |
|  -0.4% |   -89 | 100.0% | 23,486 → 23,397 | `_include(::Function, ::Module, ::String)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/loading.jl:3083` |

##### `exec_options(::Base.JLOptions)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/client.jl:234`)

| Change | Delta |      % |         Samples | Callee                        | Location                                                                                    |
| -----: | ----: | -----: | --------------: | ----------------------------- | ------------------------------------------------------------------------------------------- |
|  -0.4% |   -89 | 100.0% | 23,486 → 23,397 | `include(::Module, ::String)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base.jl:309` |

##### `_start()` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/client.jl:570`)

| Change | Delta |      % |         Samples | Callee                           | Location                                                                                      |
| -----: | ----: | -----: | --------------: | -------------------------------- | --------------------------------------------------------------------------------------------- |
|  -0.4% |   -89 | 100.0% | 23,486 → 23,397 | `exec_options(::Base.JLOptions)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/client.jl:234` |

##### `getvalue` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:187`)

| Change | Delta |      % |       Samples | Callee    | Location                                                         |
| -----: | ----: | -----: | ------------: | --------- | ---------------------------------------------------------------- |
|  -0.8% |   -52 | 100.0% | 6,675 → 6,623 | `_symbol` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:1` |

##### `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:87`)

|  Change | Delta |             % |       Samples | Callee                                                                                                                                                                                                                          | Location                                                          |
| ------: | ----: | ------------: | ------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
|   -4.2% |   -51 |        100.0% | 1,215 → 1,164 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)`                                            | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:218` |
|   -3.7% |   -45 | 99.4% → 99.9% | 1,208 → 1,163 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Array}, ::Bool)`                                             | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:312` |
|  +31.6% |    +6 |   1.6% → 2.1% |       19 → 25 | `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.False})`                                                                                                             | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:189` |
| removed |    -3 |   0.2% → 0.0% |         3 → 0 | `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.True})`                                                                                                              | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:174` |
|  -66.7% |    -2 |   0.2% → 0.1% |         3 → 1 | `var\"#read!#9\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Array}, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:312` |

##### `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:218`)

| Change | Delta |              % |       Samples | Callee                                                                                                                                                                      | Location                                                                                      |
| -----: | ----: | -------------: | ------------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
|  -3.9% |   -47 | 99.7% → 100.0% | 1,211 → 1,164 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:87`                              |
|  -7.2% |   -13 |  14.8% → 14.3% |     180 → 167 | `getbyte`                                                                                                                                                                   | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:8`                              |
| +16.4% |    +9 |    4.5% → 5.5% |       55 → 64 | `string`                                                                                                                                                                    | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:88`                             |
| -29.2% |    -7 |    2.0% → 1.5% |       24 → 17 | `setindex!`                                                                                                                                                                 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:1020` |
|  -6.5% |    -6 |    7.6% → 7.4% |       92 → 86 | `macro expansion`                                                                                                                                                           | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:29`                             |

##### `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:218`)

| Change | Delta |           % |       Samples | Callee                                                                                                                                                                                                                           | Location                                                          |
| -----: | ----: | ----------: | ------------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
|  -4.2% |   -51 |      100.0% | 1,215 → 1,164 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:218` |
| +20.0% |    +1 | 0.4% → 0.5% |         5 → 6 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)`                                                      | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:87`  |

##### `read!` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:87`)

| Change | Delta |      % |       Samples | Callee                                                                                                                                                       | Location                                                         |
| -----: | ----: | -----: | ------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------- |
|  -4.2% |   -51 | 100.0% | 1,215 → 1,164 | `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:87` |

##### `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:87`)

|  Change | Delta |           % |       Samples | Callee                                                                                                                                                                              | Location                                                                  |
| ------: | ----: | ----------: | ------------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
|   -3.9% |   -47 |      100.0% | 1,211 → 1,164 | `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)`                        | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:87`          |
|  -75.0% |    -6 | 0.7% → 0.2% |         8 → 2 | `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.False})`                                                                 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:189`         |
| +166.7% |    +5 | 0.2% → 0.7% |         3 → 8 | `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{String})`                                                                      | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:142`         |
| +300.0% |    +3 | 0.1% → 0.3% |         1 → 4 | `typeparser(::Type{Float64}, ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Int16, ::Parsers.Options)`                                                               | `../profiler-md-julia-depot/packages/Parsers/05lwR/src/components.jl:392` |
| removed |    -3 | 0.2% → 0.0% |         3 → 0 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Array}, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:312`         |

##### `var\"#read!#9\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Array}, ::Bool)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:312`)

|  Change | Delta |              % |       Samples | Callee                                                                                                                                                                      | Location                                                                                      |
| ------: | ----: | -------------: | ------------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
|   -3.5% |   -42 | 99.8% → 100.0% | 1,205 → 1,163 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:87`                              |
|  -50.0% |    -3 |    0.5% → 0.3% |         6 → 3 | `macro expansion`                                                                                                                                                           | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:29`                             |
| removed |    -2 |    0.2% → 0.0% |         2 → 0 | `getbyte`                                                                                                                                                                   | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:8`                              |
|  -50.0% |    -2 |    0.3% → 0.2% |         4 → 2 | `macro expansion`                                                                                                                                                           | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:24`                             |
| +200.0% |    +2 |    0.1% → 0.3% |         1 → 3 | `setindex!`                                                                                                                                                                 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:1020` |

##### `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Array}, ::Bool)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:312`)

| Change | Delta |      % |       Samples | Callee                                                                                                                                                                                                                          | Location                                                          |
| -----: | ----: | -----: | ------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
|  -3.7% |   -45 | 100.0% | 1,208 → 1,163 | `var\"#read!#9\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Array}, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:312` |

##### `var\"#write#98\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:340`)

| Change | Delta |             % |   Samples | Callee                                        | Location                                                                                          |
| -----: | ----: | ------------: | --------: | --------------------------------------------- | ------------------------------------------------------------------------------------------------- |
|  -2.7% |   -17 | 54.6% → 55.1% | 627 → 610 | `realloc!(::Vector{UInt8}, ::Int64, ::Int64)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:51`                                 |
| -50.0% |   -15 |   2.6% → 1.4% |   30 → 15 | `getindex`                                    | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:975` |
|  -7.1% |   -13 | 15.9% → 15.4% | 183 → 170 | `escapelength`                                | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:331`                                |
| -45.0% |    -9 |   1.7% → 1.0% |   20 → 11 | `macro expansion`                             | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/simdloop.jl:75`    |
|  -7.1% |    -7 |   8.5% → 8.2% |   98 → 91 | `macro expansion`                             | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/simdloop.jl:77`    |

##### `write(::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:340`)

| Change | Delta |             % |       Samples | Callee                                                                                                                                                                  | Location                                                           |
| -----: | ----: | ------------: | ------------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
|  -3.1% |   -35 | 97.0% → 97.2% | 1,117 → 1,082 | `var\"#write#98\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:340` |

##### `var\"#read#6\"(::Bool, ::Nothing, ::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.read), ::String)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:30`)

|  Change | Delta |             % |       Samples | Callee                                                                         | Location                                                                                    |
| ------: | ----: | ------------: | ------------: | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------- |
|   -4.2% |   -51 | 91.9% → 90.2% | 1,215 → 1,164 | `read!`                                                                        | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:87`                            |
|  +16.3% |   +17 |   7.9% → 9.4% |     104 → 121 | `Array`                                                                        | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:648` |
| +100.0% |    +3 |   0.2% → 0.5% |         3 → 6 | `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, Vector{UInt64}})` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40`                           |

##### `read` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:30`)

| Change | Delta |      % |       Samples | Callee                                                                                                                     | Location                                                         |
| -----: | ----: | -----: | ------------: | -------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
|  -2.3% |   -31 | 100.0% | 1,322 → 1,291 | `var\"#read#6\"(::Bool, ::Nothing, ::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.read), ::String)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:30` |

##### `#write#58` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:40`)

|  Change | Delta |             % |         Samples | Callee                    | Location                                                                                             |
| ------: | ----: | ------------: | --------------: | ------------------------- | ---------------------------------------------------------------------------------------------------- |
|   -1.7% |  -279 | 74.9% → 73.7% | 16,288 → 16,009 | `write`                   | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:147`                                   |
|   +4.8% |  +261 | 25.0% → 26.3% |   5,442 → 5,703 | `defaultminimum`          | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:12`                                    |
| removed |    -7 |  <0.1% → 0.0% |           7 → 0 | `String(::Vector{UInt8})` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:66` |
| +200.0% |    +2 |         <0.1% |           1 → 3 | `StringVector`            | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/iobuffer.jl:168`      |

##### `getbyte` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:8`)

| Change | Delta |      % |   Samples | Callee     | Location                                                                                             |
| -----: | ----: | -----: | --------: | ---------- | ---------------------------------------------------------------------------------------------------- |
|  -6.7% |   -23 | 100.0% | 345 → 322 | `getindex` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/basic.jl:793` |

##### `getvalue` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:195`)

|  Change | Delta |             % | Samples | Callee           | Location                                                                                              |
| ------: | ----: | ------------: | ------: | ---------------- | ----------------------------------------------------------------------------------------------------- |
|  -17.5% |   -17 | 92.4% → 95.2% | 97 → 80 | `unsafe_string`  | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:126` |
|  -42.9% |    -3 |   6.7% → 4.8% |   7 → 4 | `unsafe_string`  | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:125` |
| removed |    -1 |   1.0% → 0.0% |   1 → 0 | `getnontypemask` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:114`                                    |

##### `getvalue` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:126`)

|  Change | Delta |             % | Samples | Callee           | Location                                                                                        |
| ------: | ----: | ------------: | ------: | ---------------- | ----------------------------------------------------------------------------------------------- |
|  -27.4% |   -20 | 80.2% → 74.6% | 73 → 53 | `Dict`           | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:80`      |
|  +62.5% |    +5 |  8.8% → 18.3% |  8 → 13 | `getnontypemask` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:114`                              |
|  -44.4% |    -4 |   9.9% → 7.0% |   9 → 5 | `Object`         | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:8`                                |
| removed |    -1 |   1.1% → 0.0% |   1 → 0 | `unsafe_view`    | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/subarray.jl:260` |

##### `codeunit` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:167`)

| Change | Delta |      % |   Samples | Callee        | Location                                                                                       |
| -----: | ----: | -----: | --------: | ------------- | ---------------------------------------------------------------------------------------------- |
|  -5.1% |   -24 | 100.0% | 472 → 448 | `unsafe_load` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/pointer.jl:151` |

##### `getindex` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/basic.jl:793`)

| Change | Delta |             % |   Samples | Callee        | Location                                                                                              |
| -----: | ----: | ------------: | --------: | ------------- | ----------------------------------------------------------------------------------------------------- |
|  -6.2% |   -22 | 97.3% → 97.7% | 357 → 335 | `codeunit`    | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:167` |
| -37.5% |    -3 |   2.2% → 1.5% |     8 → 5 | `codeunit`    | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:166` |
| +50.0% |    +1 |   0.5% → 0.9% |     2 → 3 | `getproperty` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base_compiler.jl:57`   |

##### `unsafe_load` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/pointer.jl:151`)

| Change | Delta |      % |   Samples | Callee        | Location                                                                                       |
| -----: | ----: | -----: | --------: | ------------- | ---------------------------------------------------------------------------------------------- |
|  -3.9% |   -19 | 100.0% | 486 → 467 | `unsafe_load` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/pointer.jl:151` |

##### `macro expansion` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/simdloop.jl:77`)

|  Change | Delta |             % |   Samples | Callee            | Location                                                           |
| ------: | ----: | ------------: | --------: | ----------------- | ------------------------------------------------------------------ |
|  -80.0% |   -12 |   6.9% → 1.5% |    15 → 3 | `macro expansion` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:333` |
|   -6.2% |    -6 | 44.9% → 45.5% |   97 → 91 | `macro expansion` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:355` |
|   +2.9% |    +3 | 47.7% → 53.0% | 103 → 106 | `macro expansion` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:332` |
| removed |    -1 |   0.5% → 0.0% |     1 → 0 | `macro expansion` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:356` |

##### `isassigned` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:1641`)

| Change | Delta |              % |   Samples | Callee     | Location                                                           |
| -----: | ----: | -------------: | --------: | ---------- | ------------------------------------------------------------------ |
|  -1.7% |   -17 | 100.0% → 99.7% | 997 → 980 | `getindex` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:163` |
|    new |    +2 |    0.0% → 0.2% |     0 → 2 | `getindex` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:162` |
|    new |    +1 |    0.0% → 0.1% |     0 → 1 | `getindex` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:161` |

##### `length_continued` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:561`)

| Change | Delta |             % |  Samples | Callee     | Location                                                                                              |
| -----: | ----: | ------------: | -------: | ---------- | ----------------------------------------------------------------------------------------------------- |
|  -9.6% |   -10 | 63.0% → 60.3% | 104 → 94 | `codeunit` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:166` |
|  +1.6% |    +1 | 37.0% → 39.7% |  61 → 62 | `codeunit` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:167` |

##### `indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`)

| Change | Delta |             % |   Samples | Callee            | Location                                                                                     |
| -----: | ----: | ------------: | --------: | ----------------- | -------------------------------------------------------------------------------------------- |
|  -1.0% |    -8 | 98.9% → 99.0% | 798 → 790 | `indexed_iterate` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163` |

## Hottest call stacks

### Regressions

Call stacks with the largest increase in samples collected in their leaf frame.

Common call stack: `#write#58` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:40`) ← `[unknown function]` ← `parse_workload` (`./profile.jl:18`) ← `macro expansion` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/stdlib/v1.13/Profile/src/Profile.jl:82`) ← `capture_wall` (`./profile.jl:43`) ← `[unknown function]` ← `eval(::Module, ::Any)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:489`) ← `include_string(::typeof(identity), ::Module, ::String, ::String)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/loading.jl:2989`) ← `_include(::Function, ::Module, ::String)` (3083) ← `include(::Module, ::String)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base.jl:309`) ← `exec_options(::Base.JLOptions)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/client.jl:234`) ← `_start()` (570)

|   Change | Delta |            % |       Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| -------: | ----: | -----------: | ------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|    +9.6% |  +112 |  3.8% → 4.3% | 1,162 → 1,274 | `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|    +3.3% |   +91 |  9.1% → 9.5% | 2,767 → 2,858 | `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|   +57.8% |   +89 |  0.5% → 0.8% |     154 → 243 | `GenericMemory` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:588`) ← `Array` (648) ← `Array` (661) ← `zeros` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:626`) ← `zeros` (622) ← `realloc!(::Vector{UInt8}, ::Int64, ::Int64)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:51`) ← `var\"#write#98\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` (340) ← `write(::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` (340) ← `#write#79` (157) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|   +72.1% |   +62 |  0.3% → 0.5% |      86 → 148 | `indexed_iterate` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`) ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| +1525.0% |   +61 | <0.1% → 0.2% |        4 → 65 | `GenericMemory` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:588`) ← `rehash!(::Dict{Symbol, Int64}, ::Int64)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:138`) ← `_setindex!` (339) ← `setindex!(::Dict{Symbol, Int64}, ::Int64, ::Symbol)` (356) ← `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40`) ← `getvalue` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:127`) ← `getvalue` (214) ← `iterate` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:81`) ← `iterate` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/iterators.jl:697`) ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:12`) ← `#defaultminimum##0` ← `[unknown function]` ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `[unknown function]` ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `MappingRF` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98`) ← `_foldl_impl` (56) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:12`)                                               |
|  +900.0% |   +54 | <0.1% → 0.2% |        6 → 60 | `GenericMemory` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:588`) ← `rehash!(::Dict{Symbol, Int64}, ::Int64)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:138`) ← `_setindex!` (339) ← `setindex!(::Dict{Symbol, Int64}, ::Int64, ::Symbol)` (356) ← `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40`) ← `getvalue` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:127`) ← `getindex` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:163`) ← `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|   +14.5% |   +42 |  1.0% → 1.1% |     289 → 331 | `_symbol` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:1`) ← `getvalue` (187) ← `iterate` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:78`) ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| +2050.0% |   +41 | <0.1% → 0.1% |        2 → 43 | `GenericMemory` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:588`) ← `Array` (648) ← `Array` (661) ← `zeros` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:626`) ← `zeros` (622) ← `realloc!(::Vector{UInt8}, ::Int64, ::Int64)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:51`) ← `var\"#write#86\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.NumberType, ::Vector{UInt8}, ::Int64, ::Int64, ::Int64)` (224) ← `write(::StructTypes.NumberType, ::Vector{UInt8}, ::Int64, ::Int64, ::Int64)` (224) ← `#write#79` (157) ← `[unknown function]` ← `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| +1900.0% |   +38 | <0.1% → 0.1% |        2 → 40 | `GenericMemory` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:588`) ← `Array` (648) ← `Array` (661) ← `zeros` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:626`) ← `zeros` (622) ← `realloc!(::Vector{UInt8}, ::Int64, ::Int64)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:51`) ← `var\"#write#98\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` (340) ← `write(::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` (340) ← `#write#79` (157) ← `[unknown function]` ← `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|   +13.4% |   +34 |  0.8% → 1.0% |     254 → 288 | `_symbol` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:1`) ← `getvalue` (187) ← `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40`) ← `getvalue` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:127`) ← `getindex` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:163`) ← `isassigned` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:1641`) ← `#defaultminimum##0` ← `[unknown function]` ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `[unknown function]` ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `MappingRF` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98`) ← `_foldl_impl` (56) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:12`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|   +17.6% |   +34 |  0.6% → 0.8% |     193 → 227 | `_symbol` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:1`) ← `getvalue` (187) ← `iterate` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:78`) ← `iterate` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/iterators.jl:697`) ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:12`) ← `#defaultminimum##0` ← `[unknown function]` ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `[unknown function]` ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `MappingRF` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98`) ← `_foldl_impl` (56) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:12`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|    +5.0% |   +32 |  2.1% → 2.3% |     642 → 674 | `_symbol` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:1`) ← `getvalue` (187) ← `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40`) ← `getvalue` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:127`) ← `getvalue` (214) ← `iterate` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:81`) ← `iterate` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/iterators.jl:697`) ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:12`) ← `#defaultminimum##0` ← `[unknown function]` ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `[unknown function]` ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `MappingRF` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98`) ← `_foldl_impl` (56) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:12`)                                                                                                                                                                                                                                                                                          |
|  +516.7% |   +31 | <0.1% → 0.1% |        6 → 37 | `GenericMemory` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:588`) ← `rehash!(::Dict{Symbol, Int64}, ::Int64)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:138`) ← `_setindex!` (339) ← `setindex!(::Dict{Symbol, Int64}, ::Int64, ::Symbol)` (356) ← `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40`) ← `getvalue` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:127`) ← `getvalue` (214) ← `iterate` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:81`) ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|   +14.7% |   +27 |  0.6% → 0.7% |     184 → 211 | `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `[unknown function]` ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:12`) ← `#defaultminimum##0` ← `[unknown function]` ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `[unknown function]` ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `MappingRF` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98`) ← `_foldl_impl` (56) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:12`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|      new |   +26 |  0.0% → 0.1% |        0 → 26 | `iterate` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:75`) ← `iterate` (75) ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|   +25.5% |   +24 |  0.3% → 0.4% |      94 → 118 | `BottomRF` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:84`) ← `[unknown function]` ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `[unknown function]` ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `[unknown function]` ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:12`) ← `#defaultminimum##0` ← `[unknown function]` ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `[unknown function]` ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `MappingRF` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98`) ← `_foldl_impl` (56) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:12`)                                                                                                                                                                                                                                                                                                                     |
|  +480.0% |   +24 | <0.1% → 0.1% |        5 → 29 | `GenericMemory` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:588`) ← `rehash!(::Dict{Symbol, Int64}, ::Int64)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:138`) ← `ht_keyindex2_shorthash!(::Dict{Symbol, Int64}, ::Symbol)` (267) ← `setindex!(::Dict{Symbol, Int64}, ::Int64, ::Symbol)` (356) ← `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40`) ← `getvalue` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:127`) ← `getvalue` (214) ← `iterate` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:81`) ← `iterate` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/iterators.jl:697`) ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:12`) ← `#defaultminimum##0` ← `[unknown function]` ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `[unknown function]` ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `MappingRF` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98`) ← `_foldl_impl` (56) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:12`) |
| +1150.0% |   +23 | <0.1% → 0.1% |        2 → 25 | `GenericMemory` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:588`) ← `rehash!(::Dict{Symbol, Int64}, ::Int64)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:138`) ← `ht_keyindex2_shorthash!(::Dict{Symbol, Int64}, ::Symbol)` (267) ← `setindex!(::Dict{Symbol, Int64}, ::Int64, ::Symbol)` (356) ← `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40`) ← `getvalue` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:127`) ← `getvalue` (214) ← `iterate` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:81`) ← `iterate` (75) ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|    +5.7% |   +20 |         1.2% |     352 → 372 | `indexed_iterate` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`) ← `indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64)` (163) ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|   +86.4% |   +19 |         0.1% |       22 → 41 | `GenericMemory` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:588`) ← `rehash!(::Dict{Symbol, Int64}, ::Int64)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:138`) ← `ht_keyindex2_shorthash!(::Dict{Symbol, Int64}, ::Symbol)` (267) ← `setindex!(::Dict{Symbol, Int64}, ::Int64, ::Symbol)` (356) ← `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40`) ← `getvalue` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:127`) ← `getvalue` (214) ← `iterate` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:81`) ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `write` (147)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |

### Improvements

Call stacks with the largest decrease in samples collected in their leaf frame.

Common call stack: `macro expansion` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/stdlib/v1.13/Profile/src/Profile.jl:82`) ← `capture_wall` (`./profile.jl:43`) ← `[unknown function]` ← `eval(::Module, ::Any)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:489`) ← `include_string(::typeof(identity), ::Module, ::String, ::String)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/loading.jl:2989`) ← `_include(::Function, ::Module, ::String)` (3083) ← `include(::Module, ::String)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base.jl:309`) ← `exec_options(::Base.JLOptions)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/client.jl:234`) ← `_start()` (570)

|  Change | Delta |            % |   Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ------: | ----: | -----------: | --------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  -12.9% |  -128 |  3.3% → 2.9% | 989 → 861 | `indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64, ::Int64)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`) ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `write` (147) ← `#write#58` (40) ← `[unknown function]` ← `parse_workload` (`./profile.jl:18`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  -96.6% |  -115 | 0.4% → <0.1% |   119 → 4 | `iterate` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:75`) ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `write` (147) ← `#write#58` (40) ← `[unknown function]` ← `parse_workload` (`./profile.jl:18`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  -11.8% |   -94 |  2.6% → 2.3% | 794 → 700 | `_symbol` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:1`) ← `getvalue` (187) ← `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40`) ← `getvalue` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:127`) ← `getvalue` (214) ← `iterate` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:81`) ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `write` (147) ← `#write#58` (40) ← `[unknown function]` ← `parse_workload` (`./profile.jl:18`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  -25.6% |   -90 |  1.2% → 0.9% | 351 → 261 | `GenericMemory` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:588`) ← `Array` (648) ← `Array` (661) ← `zeros` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:626`) ← `zeros` (622) ← `realloc!(::Vector{UInt8}, ::Int64, ::Int64)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:51`) ← `var\"#write#98\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` (340) ← `write(::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` (340) ← `#write#79` (157) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `write` (147) ← `#write#58` (40) ← `[unknown function]` ← `parse_workload` (`./profile.jl:18`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  -15.0% |   -85 |  1.9% → 1.6% | 566 → 481 | `indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64, ::Int64)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`) ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `write` (147) ← `#write#58` (40) ← `[unknown function]` ← `parse_workload` (`./profile.jl:18`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  -15.4% |   -63 |  1.4% → 1.2% | 410 → 347 | `_symbol` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:1`) ← `getvalue` (187) ← `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40`) ← `getvalue` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:127`) ← `getvalue` (214) ← `iterate` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:81`) ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `write` (147) ← `#write#58` (40) ← `[unknown function]` ← `parse_workload` (`./profile.jl:18`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  -44.5% |   -53 |  0.4% → 0.2% |  119 → 66 | `GenericMemory` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:588`) ← `Array` (648) ← `Array` (661) ← `zeros` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:626`) ← `zeros` (622) ← `realloc!(::Vector{UInt8}, ::Int64, ::Int64)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:51`) ← `var\"#write#98\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` (340) ← `write(::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` (340) ← `#write#79` (157) ← `[unknown function]` ← `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `write` (147) ← `#write#58` (40) ← `[unknown function]` ← `parse_workload` (`./profile.jl:18`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  -14.0% |   -47 |  1.1% → 1.0% | 336 → 289 | `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `write` (147) ← `#write#58` (40) ← `[unknown function]` ← `parse_workload` (`./profile.jl:18`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  -97.9% |   -47 | 0.2% → <0.1% |    48 → 1 | `GenericMemory` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:588`) ← `rehash!(::Dict{Symbol, Int64}, ::Int64)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:138`) ← `ht_keyindex2_shorthash!(::Dict{Symbol, Int64}, ::Symbol)` (267) ← `setindex!(::Dict{Symbol, Int64}, ::Int64, ::Symbol)` (356) ← `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40`) ← `getvalue` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:127`) ← `getindex` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:163`) ← `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `write` (147) ← `#write#58` (40) ← `[unknown function]` ← `parse_workload` (`./profile.jl:18`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| removed |   -47 |  0.2% → 0.0% |    47 → 0 | `Pair` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base.jl:12`) ← `iterate` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:81`) ← `iterate` (75) ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:12`) ← `#defaultminimum##0` ← `[unknown function]` ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `[unknown function]` ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `[unknown function]` ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `[unknown function]` ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `[unknown function]` ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:12`) ← `#defaultminimum##0` ← `[unknown function]` ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `[unknown function]` ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `MappingRF` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98`) ← `_foldl_impl` (56) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:12`) ← `#write#58` (40) ← `[unknown function]` ← `parse_workload` (`./profile.jl:18`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  -30.2% |   -45 |  0.5% → 0.3% | 149 → 104 | `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `write` (147) ← `#write#58` (40) ← `[unknown function]` ← `parse_workload` (`./profile.jl:18`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  -63.9% |   -39 |  0.2% → 0.1% |   61 → 22 | `iterate` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:75`) ← `iterate` (75) ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `write` (147) ← `#write#58` (40) ← `[unknown function]` ← `parse_workload` (`./profile.jl:18`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  -42.0% |   -29 |  0.2% → 0.1% |   69 → 40 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:218`) ← `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` (218) ← `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` (87) ← `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` (87) ← `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` (218) ← `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` (218) ← `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` (87) ← `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` (87) ← `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` (218) ← `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` (218) ← `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` (87) ← `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` (87) ← `var\"#read!#9\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Array}, ::Bool)` (312) ← `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Array}, ::Bool)` (312) ← `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` (87) ← `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` (87) ← `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` (218) ← `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` (218) ← `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` (87) ← `read!` (87) ← `var\"#read#6\"(::Bool, ::Nothing, ::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.read), ::String)` (30) ← `read` (30) ← `parse_workload` (`./profile.jl:18`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|   -6.0% |   -25 |  1.4% → 1.3% | 416 → 391 | `_symbol` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:1`) ← `getvalue` (187) ← `iterate` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:78`) ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `write` (147) ← `#write#58` (40) ← `[unknown function]` ← `parse_workload` (`./profile.jl:18`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  -44.4% |   -24 |  0.2% → 0.1% |   54 → 30 | `parse_workload` (`./profile.jl:18`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|   -4.1% |   -23 |  1.9% → 1.8% | 563 → 540 | `_symbol` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:1`) ← `getvalue` (187) ← `iterate` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:78`) ← `iterate` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/iterators.jl:697`) ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `[unknown function]` ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `[unknown function]` ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:12`) ← `#defaultminimum##0` ← `[unknown function]` ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `[unknown function]` ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `MappingRF` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98`) ← `_foldl_impl` (56) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:12`) ← `#write#58` (40) ← `[unknown function]` ← `parse_workload` (`./profile.jl:18`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  -63.9% |   -23 | 0.1% → <0.1% |   36 → 13 | `unsafe_string` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:126`) ← `getvalue` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:195`) ← `getvalue` (218) ← `iterate` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:81`) ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `write` (147) ← `#write#58` (40) ← `[unknown function]` ← `parse_workload` (`./profile.jl:18`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|   -6.9% |   -22 |  1.1% → 1.0% | 321 → 299 | `_symbol` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:1`) ← `getvalue` (187) ← `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40`) ← `getvalue` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:127`) ← `getindex` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:163`) ← `isassigned` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:1641`) ← `#write#81` ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `write` (147) ← `#write#58` (40) ← `[unknown function]` ← `parse_workload` (`./profile.jl:18`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  -33.3% |   -19 |  0.2% → 0.1% |   57 → 38 | `unsafe_load` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/pointer.jl:151`) ← `unsafe_load` (151) ← `codeunit` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:167`) ← `getindex` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/basic.jl:793`) ← `getbyte` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:8`) ← `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:218`) ← `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` (218) ← `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` (87) ← `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` (87) ← `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` (218) ← `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` (218) ← `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` (87) ← `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` (87) ← `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` (218) ← `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` (218) ← `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` (87) ← `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` (87) ← `var\"#read!#9\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Array}, ::Bool)` (312) ← `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Array}, ::Bool)` (312) ← `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` (87) ← `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` (87) ← `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` (218) ← `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` (218) ← `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` (87) ← `read!` (87) ← `var\"#read#6\"(::Bool, ::Nothing, ::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.read), ::String)` (30) ← `read` (30) ← `parse_workload` (`./profile.jl:18`) |
|  -32.2% |   -19 |  0.2% → 0.1% |   59 → 40 | `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:12`) ← `#defaultminimum##0` ← `[unknown function]` ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `[unknown function]` ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `MappingRF` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98`) ← `_foldl_impl` (56) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:12`) ← `#write#58` (40) ← `[unknown function]` ← `parse_workload` (`./profile.jl:18`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |

# Sampling profile diff

Collected 33,547 → 30,400 samples (-3,147 samples, -9.4%).

| Category         | Change |  Delta |             % |         Samples |
| ---------------- | -----: | -----: | ------------: | --------------: |
| Third-party      | -11.3% | -1,758 | 46.5% → 45.6% | 15,607 → 13,849 |
| Standard library | -11.1% |   -981 | 26.3% → 25.8% |   8,810 → 7,829 |
| Unknown          |  -4.1% |   -315 | 23.1% → 24.5% |   7,750 → 7,435 |
| Native           |  -7.0% |    -93 |   3.9% → 4.0% |   1,323 → 1,230 |
| Ours             |   0.0% |      0 |          0.2% |              57 |

Paths starting with `./` or `../` are relative to `/tmp/profiler-md-julia-project/`.

`…` stands for omitted frames.

## Call tree

Call paths to the hottest and most changed functions.

```
├── … 25,793 → 22,956 samples (76.9% → 75.5%, self 0.8% → 0.7%) [unknown function]
│   ├── … 16,467 → 14,513 samples (49.1% → 47.7%, self 20.9%) #write#79 at ../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157
│   │   ├── 2,298 → 1,866 samples (6.9% → 6.1%) indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64, ::Int64) at /nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163
│   │   ├── 1,904 → 1,651 samples (5.7% → 5.4%) iterate at ../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:81
│   │   │   ├── … 1,680 → 1,434 samples (5.0% → 4.7%) populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}}) at ../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40
│   │   │   │   ├── 1,270 → 1,039 samples (3.8% → 3.4%) getvalue at ../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:187
│   │   │   │   │   └── 1,270 → 1,039 samples (3.8% → 3.4%) _symbol at 1
│   │   │   │   └── 403 → 391 samples (1.2% → 1.3%) 7 more callees, led by (1.0% → 1.1%) setindex!(::Dict{Symbol, Int64}, ::Int64, ::Symbol) at /nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:356
│   │   │   └── 106 → 98 samples (0.3%) getvalue at ../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:218
│   │   ├── … 1,678 → 1,532 samples (5.0%, self 21.6% → 20.4% globally) _symbol at ../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:1
│   │   ├── 994 → 800 samples (3.0% → 2.6%) indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64) at /nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163
│   │   │   └── 986 → 791 samples (2.9% → 2.6%, self 4.6% → 4.1% globally) indexed_iterate at 163
│   │   └── 2,581 → 2,303 samples (7.7% → 7.6%) 19 more callees, led by (3.6% → 3.7%) write(::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String) at 340
│   ├── … 2,430 → 2,182 samples (7.2%) #defaultminimum##0
│   │   ├── 349 → 331 samples (1.0% → 1.1%) getindex at ../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:163
│   │   │   ├── 341 → 283 samples (1.0% → 0.9%) getvalue at ../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:127 …
│   │   │   └── 8 → 48 samples (<0.1% → 0.2%) getvalue at ../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:126
│   │   │       └── 7 → 48 samples (<0.1% → 0.2%) Dict at /nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:80
│   │   └── 2,076 → 1,846 samples (6.2% → 6.1%) 5 more callees, led by (4.7%) defaultminimum at ../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:12
│   ├── … 2,135 → 1,873 samples (6.4% → 6.2%, self 0.6%) _foldl_impl at /nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60
│   │   ├── 1,705 → 1,475 samples (5.1% → 4.9%) iterate at /nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/iterators.jl:697
│   │   │   └── 1,705 → 1,475 samples (5.1% → 4.9%) 7 more callees, led by (3.1% → 2.9%) iterate at ../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:78
│   │   └── 115 → 121 samples (0.3% → 0.4%, self 0.8% globally) iterate at ../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:75
│   ├── … 1,795 → 1,660 samples (5.4% → 5.5%) parse_workload at ./profile.jl:18
│   │   ├── 1,346 → 1,197 samples (4.0% → 3.9%) read at ../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:30
│   │   │   └── 1,346 → 1,196 samples (4.0% → 3.9%) var\"#read#6\"(::Bool, ::Nothing, ::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.read), ::String) at 30
│   │   │       ├── 1,178 → 1,149 samples (3.5% → 3.8%) read! at 87
│   │   │       │   └── 1,177 → 1,149 samples (3.5% → 3.8%) var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool) at 87
│   │   │       │       ├── … 739 → 694 samples (2.2% → 2.3%) kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool) at ../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:218
│   │   │       │       │   └── 729 → 686 samples (2.2% → 2.3%, self 0.5%) var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool) at 218
│   │   │       │       │       ├── 37 → 14 samples (0.1% → <0.1%) setindex! at /nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:1020
│   │   │       │       │       │   └── 37 → 14 samples (0.1% → <0.1%, self 0.7% → 0.6% globally) _setindex! at 1025
│   │   │       │       │       └── 531 → 505 samples (1.6% → 1.7%) 20 more callees, led by (0.5% → 0.6%) getbyte at ../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:8
│   │   │       │       └── … 271 → 259 samples (0.8% → 0.9%) read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{String}) at ../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:142
│   │   │       └── 164 → 45 samples (0.5% → 0.1%) Array at /nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:648
│   │   │           └── 164 → 45 samples (0.5% → 0.1%, self 3.5% → 3.1% globally) GenericMemory at 588
│   │   └── 392 → 406 samples (1.2% → 1.3%) length(::String) at /nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:540 …
│   ├── … 942 → 911 samples (2.8% → 3.0%, self 2.7% → 2.9%) (::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})
│   └── 1,757 → 1,590 samples (5.2%) 13 more callees, led by (3.1% → 3.0%) #write#81 at /nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl
└── 7,750 → 7,435 samples (23.1% → 24.5%) (anonymous)
```

## Hottest functions

### Self samples

#### Regressions

Functions with the largest increase in samples collected within the function body, excluding callees. Categories account for at least 1.0% of self samples on the base or the current side.

|  Change | Delta |            % |   Samples | Function                                                                                                                                                                                                                         | Location                                                                                                 |
| ------: | ----: | -----------: | --------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| +190.9% |   +84 |  0.1% → 0.4% |  44 → 128 | `Dict`                                                                                                                                                                                                                           | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:80`               |
|  +12.6% |   +18 |  0.4% → 0.5% | 143 → 161 | `unsafe_string`                                                                                                                                                                                                                  | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:130`    |
|  +30.4% |   +17 |         0.2% |   56 → 73 | `&`                                                                                                                                                                                                                              | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:393`               |
|  +17.6% |   +16 |  0.3% → 0.4% |  91 → 107 | `length_continued`                                                                                                                                                                                                               | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/pointer.jl`               |
|  +17.2% |   +15 |         0.3% |  87 → 102 | `\|`                                                                                                                                                                                                                             | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:418`               |
|   +5.1% |   +14 |  0.8% → 0.9% | 272 → 286 | `BottomRF`                                                                                                                                                                                                                       | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:84`             |
|  +33.3% |   +13 |  0.1% → 0.2% |   39 → 52 | `getindex`                                                                                                                                                                                                                       | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:401`        |
| +130.0% |   +13 | <0.1% → 0.1% |   10 → 23 | `ncodeunits`                                                                                                                                                                                                                     | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:161`    |
|   +9.4% |   +12 |  0.4% → 0.5% | 128 → 140 | `#write#81`                                                                                                                                                                                                                      | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:73`                                        |
| +111.1% |   +10 | <0.1% → 0.1% |    9 → 19 | `macro expansion`                                                                                                                                                                                                                | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/simdloop.jl`              |
|  +47.6% |   +10 |         0.1% |   21 → 31 | `setproperty!`                                                                                                                                                                                                                   | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base_compiler.jl:61`      |
|   +5.0% |    +8 |  0.5% → 0.6% | 161 → 169 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:218`                                        |
| +100.0% |    +8 | <0.1% → 0.1% |    8 → 16 | `iterate`                                                                                                                                                                                                                        | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/range.jl`                 |
| +160.0% |    +8 |        <0.1% |    5 → 13 | `Pair`                                                                                                                                                                                                                           | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base.jl:12`               |
|  +10.6% |    +7 |         0.2% |   66 → 73 | `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)`                                                                     | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:87`                                         |
| +116.7% |    +7 |        <0.1% |    6 → 13 | `Array`                                                                                                                                                                                                                          | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:649`              |
| +175.0% |    +7 |        <0.1% |    4 → 11 | `ifelse`                                                                                                                                                                                                                         | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:854`        |
|  +50.0% |    +6 | <0.1% → 0.1% |   12 → 18 | `MappingRF`                                                                                                                                                                                                                      | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98`             |
|  +31.6% |    +6 |         0.1% |   19 → 25 | `var\"#write#84\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.BoolType, ::Vector{UInt8}, ::Int64, ::Int64, ::Bool)`                                                              | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:209`                                       |
| +100.0% |    +5 |        <0.1% |    5 → 10 | `isassigned`                                                                                                                                                                                                                     | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:1640` |

##### Third-party

|  Change | Delta |            % |   Samples | Function                                                                                                                                                                                                                         | Location                                                                  |
| ------: | ----: | -----------: | --------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
|   +9.4% |   +12 |  0.4% → 0.5% | 128 → 140 | `#write#81`                                                                                                                                                                                                                      | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:73`         |
|   +5.0% |    +8 |  0.5% → 0.6% | 161 → 169 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:218`         |
|  +10.6% |    +7 |         0.2% |   66 → 73 | `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)`                                                                     | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:87`          |
|  +31.6% |    +6 |         0.1% |   19 → 25 | `var\"#write#84\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.BoolType, ::Vector{UInt8}, ::Int64, ::Int64, ::Bool)`                                                              | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:209`        |
|  +83.3% |    +5 |        <0.1% |    6 → 11 | `parsedigits`                                                                                                                                                                                                                    | `../profiler-md-julia-depot/packages/Parsers/05lwR/src/floats.jl`         |
| +100.0% |    +4 |        <0.1% |     4 → 8 | `var\"#read!#9\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Array}, ::Bool)`  | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:312`         |
| +100.0% |    +4 |        <0.1% |     4 → 8 | `write(::StructTypes.NumberType, ::Vector{UInt8}, ::Int64, ::Int64, ::Int64)`                                                                                                                                                    | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:224`        |
|  +15.8% |    +3 |         0.1% |   19 → 22 | `getvalue`                                                                                                                                                                                                                       | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:213`        |
| +200.0% |    +2 |        <0.1% |     1 → 3 | `getvalue`                                                                                                                                                                                                                       | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:216`        |
| +200.0% |    +2 |        <0.1% |     1 → 3 | `realloc!(::Vector{UInt8}, ::Int64, ::Int64)`                                                                                                                                                                                    | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:51`         |
|  +66.7% |    +2 |        <0.1% |     3 → 5 | `promoteeltype`                                                                                                                                                                                                                  | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:100`        |
|     new |    +2 | 0.0% → <0.1% |     0 → 2 | `defaultminimum(::JSON3.Array{Int64, Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})`                                                                                        | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:11`         |
| +100.0% |    +2 |        <0.1% |     2 → 4 | `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Nothing})`                                                                                                                  | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:204`         |
|     new |    +2 | 0.0% → <0.1% |     0 → 2 | `promoteeltype`                                                                                                                                                                                                                  | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:92`         |
|     new |    +1 | 0.0% → <0.1% |     0 → 1 | `getvalue`                                                                                                                                                                                                                       | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:193`        |
|     new |    +1 | 0.0% → <0.1% |     0 → 1 | `defaultminimum`                                                                                                                                                                                                                 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:12`         |
|   +4.8% |    +1 |         0.1% |   21 → 22 | `macro expansion`                                                                                                                                                                                                                | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:14`         |
|     new |    +1 | 0.0% → <0.1% |     0 → 1 | `parsedigits`                                                                                                                                                                                                                    | `../profiler-md-julia-depot/packages/Parsers/05lwR/src/floats.jl:357`     |
|  +20.0% |    +1 |        <0.1% |     5 → 6 | `typeparser(::Type{Float64}, ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Int16, ::Parsers.Options)`                                                                                                            | `../profiler-md-julia-depot/packages/Parsers/05lwR/src/components.jl:392` |
|     new |    +1 | 0.0% → <0.1% |     0 → 1 | `write(::StructTypes.ArrayType, ::Vector{UInt8}, ::Int64, ::Int64, ::JSON3.Array{Int64, Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})`                                     | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:181`        |

##### Standard library

|  Change | Delta |            % |   Samples | Function                                              | Location                                                                                                 |
| ------: | ----: | -----------: | --------: | ----------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| +190.9% |   +84 |  0.1% → 0.4% |  44 → 128 | `Dict`                                                | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:80`               |
|  +12.6% |   +18 |  0.4% → 0.5% | 143 → 161 | `unsafe_string`                                       | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:130`    |
|  +30.4% |   +17 |         0.2% |   56 → 73 | `&`                                                   | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:393`               |
|  +17.6% |   +16 |  0.3% → 0.4% |  91 → 107 | `length_continued`                                    | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/pointer.jl`               |
|  +17.2% |   +15 |         0.3% |  87 → 102 | `\|`                                                  | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:418`               |
|   +5.1% |   +14 |  0.8% → 0.9% | 272 → 286 | `BottomRF`                                            | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:84`             |
|  +33.3% |   +13 |  0.1% → 0.2% |   39 → 52 | `getindex`                                            | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:401`        |
| +130.0% |   +13 | <0.1% → 0.1% |   10 → 23 | `ncodeunits`                                          | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:161`    |
| +111.1% |   +10 | <0.1% → 0.1% |    9 → 19 | `macro expansion`                                     | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/simdloop.jl`              |
|  +47.6% |   +10 |         0.1% |   21 → 31 | `setproperty!`                                        | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base_compiler.jl:61`      |
| +100.0% |    +8 | <0.1% → 0.1% |    8 → 16 | `iterate`                                             | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/range.jl`                 |
| +160.0% |    +8 |        <0.1% |    5 → 13 | `Pair`                                                | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base.jl:12`               |
| +116.7% |    +7 |        <0.1% |    6 → 13 | `Array`                                               | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:649`              |
| +175.0% |    +7 |        <0.1% |    4 → 11 | `ifelse`                                              | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:854`        |
|  +50.0% |    +6 | <0.1% → 0.1% |   12 → 18 | `MappingRF`                                           | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98`             |
| +100.0% |    +5 |        <0.1% |    5 → 10 | `isassigned`                                          | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:1640` |
|   +7.1% |    +4 |         0.2% |   56 → 60 | `setindex!(::Dict{Symbol, Int64}, ::Int64, ::Symbol)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:356`              |
|   +5.6% |    +4 |         0.2% |   71 → 75 | `getproperty`                                         | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base_compiler.jl:57`      |
|     new |    +4 | 0.0% → <0.1% |     0 → 4 | `String`                                              | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl`        |
|  +13.0% |    +3 |         0.1% |   23 → 26 | `iterate`                                             | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/range.jl:928`             |

#### Improvements

Functions with the largest decrease in samples collected within the function body, excluding callees. Categories account for at least 1.0% of self samples on the base or the current side.

|  Change |  Delta |             % |       Samples | Function                                                                                                                                                                | Location                                                                                              |
| ------: | -----: | ------------: | ------------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
|  -14.1% | -1,020 | 21.6% → 20.4% | 7,236 → 6,216 | `_symbol`                                                                                                                                                               | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:1`                                      |
|   -9.2% |   -647 |         20.9% | 7,010 → 6,363 | `#write#79`                                                                                                                                                             | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`                                    |
|  -18.9% |   -434 |   6.9% → 6.1% | 2,300 → 1,866 | `indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64, ::Int64)`                                                                                               | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`          |
|   -4.1% |   -315 | 23.1% → 24.5% | 7,750 → 7,435 | `(anonymous)`                                                                                                                                                           | `<unknown>`                                                                                           |
|  -18.5% |   -284 |   4.6% → 4.1% | 1,535 → 1,251 | `indexed_iterate`                                                                                                                                                       | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`          |
|  -20.0% |   -234 |   3.5% → 3.1% |   1,168 → 934 | `GenericMemory`                                                                                                                                                         | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:588`           |
|   -5.0% |    -53 |   3.2% → 3.3% | 1,060 → 1,007 | `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})`                                                                                            | `<unknown>`                                                                                           |
|  -22.4% |    -53 |   0.7% → 0.6% |     237 → 184 | `_setindex!`                                                                                                                                                            | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:1025`         |
|  -15.5% |    -40 |   0.8% → 0.7% |     258 → 218 | `[unknown function]`                                                                                                                                                    | `<unknown>`                                                                                           |
|   -7.5% |    -38 |          1.5% |     508 → 470 | `ht_keyindex2_shorthash!(::Dict{Symbol, Int64}, ::Symbol)`                                                                                                              | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:267`           |
|  -10.8% |    -36 |          1.0% |     332 → 296 | `+`                                                                                                                                                                     | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:87`             |
|  -12.6% |    -33 |          0.8% |     261 → 228 | `_foldl_impl`                                                                                                                                                           | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`          |
|  -32.5% |    -25 |          0.2% |       77 → 52 | `var\"#write#98\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:340`                                    |
|  -14.0% |    -25 |          0.5% |     178 → 153 | `getindex`                                                                                                                                                              | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:975`     |
|  -22.7% |    -20 |   0.3% → 0.2% |       88 → 68 | `==`                                                                                                                                                                    | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/promotion.jl:641`      |
|   -7.5% |    -19 |          0.8% |     255 → 236 | `iterate`                                                                                                                                                               | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:75`                                     |
|  -15.7% |    -14 |   0.3% → 0.2% |       89 → 75 | `unsafe_string`                                                                                                                                                         | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:126` |
| removed |    -13 |  <0.1% → 0.0% |        13 → 0 | `Object`                                                                                                                                                                | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:8`                                      |
|  -16.2% |    -12 |          0.2% |       74 → 62 | `macro expansion`                                                                                                                                                       | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/simdloop.jl:75`        |
|  -45.5% |    -10 |  0.1% → <0.1% |       22 → 12 | `<`                                                                                                                                                                     | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:83`             |

##### Third-party

|  Change |  Delta |             % |       Samples | Function                                                                                                                                                                                                                                                                              | Location                                                             |
| ------: | -----: | ------------: | ------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
|  -14.1% | -1,020 | 21.6% → 20.4% | 7,236 → 6,216 | `_symbol`                                                                                                                                                                                                                                                                             | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:1`     |
|   -9.2% |   -647 |         20.9% | 7,010 → 6,363 | `#write#79`                                                                                                                                                                                                                                                                           | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`   |
|  -32.5% |    -25 |          0.2% |       77 → 52 | `var\"#write#98\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)`                                                                                                               | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:340`   |
|   -7.5% |    -19 |          0.8% |     255 → 236 | `iterate`                                                                                                                                                                                                                                                                             | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:75`    |
| removed |    -13 |  <0.1% → 0.0% |        13 → 0 | `Object`                                                                                                                                                                                                                                                                              | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:8`     |
|  -33.3% |     -9 |          0.1% |       27 → 18 | `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})`                                                                                                                                                    | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40`    |
|   -7.1% |     -9 |          0.4% |     126 → 117 | `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{String})`                                                                                                                                                                        | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:142`    |
|   -9.6% |     -8 |          0.2% |       83 → 75 | `getvalue`                                                                                                                                                                                                                                                                            | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:215`   |
|  -28.0% |     -7 |          0.1% |       25 → 18 | `unescape(::JSON3.PointerString)`                                                                                                                                                                                                                                                     | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/strings.jl:48`  |
|  -23.1% |     -6 |          0.1% |       26 → 20 | `macro expansion`                                                                                                                                                                                                                                                                     | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:23`    |
|  -25.0% |     -6 |          0.1% |       24 → 18 | `var\"#write#86\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.NumberType, ::Vector{UInt8}, ::Int64, ::Int64, ::Int64)`                                                                                                                | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:224`   |
|  -27.8% |     -5 |  0.1% → <0.1% |       18 → 13 | `getvalue(::Type{JSON3.Array}, ::Base.CodeUnits{UInt8, String}, ::SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}, ::Int64, ::UInt64)`                                                                                                                             | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:131`   |
|   -8.0% |     -4 |   0.1% → 0.2% |       50 → 46 | `iterate`                                                                                                                                                                                                                                                                             | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl`       |
|  -80.0% |     -4 |         <0.1% |         5 → 1 | `macro expansion`                                                                                                                                                                                                                                                                     | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:25`    |
|  -12.5% |     -4 |          0.1% |       32 → 28 | `write(::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)`                                                                                                                                                                                                        | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:340`   |
| removed |     -4 |  <0.1% → 0.0% |         4 → 0 | `PosLen`                                                                                                                                                                                                                                                                              | `../profiler-md-julia-depot/packages/Parsers/05lwR/src/utils.jl:457` |
|  -10.7% |     -3 |          0.1% |       28 → 25 | `write(::StructTypes.BoolType, ::Vector{UInt8}, ::Int64, ::Int64, ::Bool)`                                                                                                                                                                                                            | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:209`   |
|  -75.0% |     -3 |         <0.1% |         4 → 1 | `var\"#write#81\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.ArrayType, ::Vector{UInt8}, ::Int64, ::Int64, ::JSON3.Array{Int64, Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:181`   |
| removed |     -3 |  <0.1% → 0.0% |         3 → 0 | `populateinds!`                                                                                                                                                                                                                                                                       | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:64`    |
|  -60.0% |     -3 |         <0.1% |         5 → 2 | `promoteeltype`                                                                                                                                                                                                                                                                       | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl`       |

##### Standard library

|  Change | Delta |            % |       Samples | Function                                                                                                                     | Location                                                                                              |
| ------: | ----: | -----------: | ------------: | ---------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
|  -18.9% |  -434 |  6.9% → 6.1% | 2,300 → 1,866 | `indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64, ::Int64)`                                                    | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`          |
|  -18.5% |  -284 |  4.6% → 4.1% | 1,535 → 1,251 | `indexed_iterate`                                                                                                            | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`          |
|  -20.0% |  -234 |  3.5% → 3.1% |   1,168 → 934 | `GenericMemory`                                                                                                              | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:588`           |
|  -22.4% |   -53 |  0.7% → 0.6% |     237 → 184 | `_setindex!`                                                                                                                 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:1025`         |
|   -7.5% |   -38 |         1.5% |     508 → 470 | `ht_keyindex2_shorthash!(::Dict{Symbol, Int64}, ::Symbol)`                                                                   | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:267`           |
|  -10.8% |   -36 |         1.0% |     332 → 296 | `+`                                                                                                                          | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:87`             |
|  -12.6% |   -33 |         0.8% |     261 → 228 | `_foldl_impl`                                                                                                                | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`          |
|  -14.0% |   -25 |         0.5% |     178 → 153 | `getindex`                                                                                                                   | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:975`     |
|  -22.7% |   -20 |  0.3% → 0.2% |       88 → 68 | `==`                                                                                                                         | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/promotion.jl:641`      |
|  -15.7% |   -14 |  0.3% → 0.2% |       89 → 75 | `unsafe_string`                                                                                                              | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:126` |
|  -16.2% |   -12 |         0.2% |       74 → 62 | `macro expansion`                                                                                                            | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/simdloop.jl:75`        |
|  -45.5% |   -10 | 0.1% → <0.1% |       22 → 12 | `<`                                                                                                                          | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:83`             |
|  -83.3% |   -10 |        <0.1% |        12 → 2 | `>>`                                                                                                                         | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:573`            |
|  -22.9% |    -8 |         0.1% |       35 → 27 | `*`                                                                                                                          | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:88`             |
|  -43.8% |    -7 |        <0.1% |        16 → 9 | `-(::Int64, ::Int64)`                                                                                                        | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:86`             |
|  -53.8% |    -7 |        <0.1% |        13 → 6 | `resize!(::Vector{Int64}, ::Int64)`                                                                                          | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:1533`         |
|  -26.1% |    -6 |         0.1% |       23 → 17 | `BottomRF`                                                                                                                   | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:83`          |
|   -1.0% |    -5 |  1.5% → 1.6% |     501 → 496 | `unsafe_load`                                                                                                                | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/pointer.jl:151`        |
| removed |    -5 | <0.1% → 0.0% |         5 → 0 | `isempty(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:1127`    |
|  -38.5% |    -5 |        <0.1% |        13 → 8 | `<=`                                                                                                                         | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:560`            |

##### Unknown

| Change | Delta |             % |       Samples | Function      | Location    |
| -----: | ----: | ------------: | ------------: | ------------- | ----------- |
|  -4.1% |  -315 | 23.1% → 24.5% | 7,750 → 7,435 | `(anonymous)` | `<unknown>` |

##### Native

| Change | Delta |           % |       Samples | Function                                                                     | Location    |
| -----: | ----: | ----------: | ------------: | ---------------------------------------------------------------------------- | ----------- |
|  -5.0% |   -53 | 3.2% → 3.3% | 1,060 → 1,007 | `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` | `<unknown>` |
| -15.5% |   -40 | 0.8% → 0.7% |     258 → 218 | `[unknown function]`                                                         | `<unknown>` |

#### Lines

Lines with the largest change in contribution to each function's self samples.

##### `Dict` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:80`)

|  Change | Delta |      % |  Samples | Location                                                                                   |
| ------: | ----: | -----: | -------: | ------------------------------------------------------------------------------------------ |
| +190.9% |   +84 | 100.0% | 44 → 128 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:80` |

##### `unsafe_string` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:130`)

| Change | Delta |      % |   Samples | Location                                                                                              |
| -----: | ----: | -----: | --------: | ----------------------------------------------------------------------------------------------------- |
| +12.6% |   +18 | 100.0% | 143 → 161 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:130` |

##### `&` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:393`)

| Change | Delta |      % | Samples | Location                                                                                   |
| -----: | ----: | -----: | ------: | ------------------------------------------------------------------------------------------ |
| +30.4% |   +17 | 100.0% | 56 → 73 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:393` |

##### `|` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:418`)

| Change | Delta |      % |  Samples | Location                                                                                   |
| -----: | ----: | -----: | -------: | ------------------------------------------------------------------------------------------ |
| +17.2% |   +15 | 100.0% | 87 → 102 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:418` |

##### `BottomRF` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:84`)

| Change | Delta |      % |   Samples | Location                                                                                     |
| -----: | ----: | -----: | --------: | -------------------------------------------------------------------------------------------- |
|  +5.1% |   +14 | 100.0% | 272 → 286 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:84` |

##### `getindex` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:401`)

| Change | Delta |      % | Samples | Location                                                                                          |
| -----: | ----: | -----: | ------: | ------------------------------------------------------------------------------------------------- |
| +33.3% |   +13 | 100.0% | 39 → 52 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:401` |

##### `ncodeunits` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:161`)

|  Change | Delta |      % | Samples | Location                                                                                              |
| ------: | ----: | -----: | ------: | ----------------------------------------------------------------------------------------------------- |
| +130.0% |   +13 | 100.0% | 10 → 23 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:161` |

##### `#write#81` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:73`)

| Change | Delta |             % | Samples | Location                                                           |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------------ |
| +75.0% |   +24 | 25.0% → 40.0% | 32 → 56 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:60`  |
| -47.1% |    -8 |  13.3% → 6.4% |  17 → 9 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:73`  |
| +10.7% |    +6 | 43.8% → 44.3% | 56 → 62 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:200` |
| -50.0% |    -5 |   7.8% → 3.6% |  10 → 5 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:181` |
| +16.7% |    +1 |   4.7% → 5.0% |   6 → 7 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:72`  |

##### `setproperty!` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base_compiler.jl:61`)

| Change | Delta |      % | Samples | Location                                                                                            |
| -----: | ----: | -----: | ------: | --------------------------------------------------------------------------------------------------- |
| +47.6% |   +10 | 100.0% | 21 → 31 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base_compiler.jl:61` |

##### `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:218`)

|  Change | Delta |             % |   Samples | Location                                                          |
| ------: | ----: | ------------: | --------: | ----------------------------------------------------------------- |
|  +16.5% |   +17 | 64.0% → 71.0% | 103 → 120 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:248` |
| removed |    -6 |   3.7% → 0.0% |     6 → 0 | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:225` |
| +100.0% |    +4 |   2.5% → 4.7% |     4 → 8 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:278` |
|  -37.5% |    -3 |   5.0% → 3.0% |     8 → 5 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:284` |
|  -16.7% |    -2 |   7.5% → 5.9% |   12 → 10 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:247` |

##### `Pair` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base.jl:12`)

|  Change | Delta |      % | Samples | Location                                                                                   |
| ------: | ----: | -----: | ------: | ------------------------------------------------------------------------------------------ |
| +160.0% |    +8 | 100.0% |  5 → 13 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base.jl:12` |

##### `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:87`)

|  Change | Delta |             % | Samples | Location                                                          |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------------------- |
|     new |    +3 |   0.0% → 4.1% |   0 → 3 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:89`  |
|   -3.8% |    -1 | 39.4% → 34.2% | 26 → 25 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:88`  |
|  -50.0% |    -1 |   3.0% → 1.4% |   2 → 1 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:99`  |
| removed |    -1 |   1.5% → 0.0% |   1 → 0 | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:106` |

##### `Array` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:649`)

|  Change | Delta |      % | Samples | Location                                                                                    |
| ------: | ----: | -----: | ------: | ------------------------------------------------------------------------------------------- |
| +116.7% |    +7 | 100.0% |  6 → 13 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:649` |

##### `ifelse` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:854`)

|  Change | Delta |      % | Samples | Location                                                                                          |
| ------: | ----: | -----: | ------: | ------------------------------------------------------------------------------------------------- |
| +175.0% |    +7 | 100.0% |  4 → 11 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:854` |

##### `MappingRF` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98`)

| Change | Delta |      % | Samples | Location                                                                                     |
| -----: | ----: | -----: | ------: | -------------------------------------------------------------------------------------------- |
| +50.0% |    +6 | 100.0% | 12 → 18 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98` |

##### `var\"#write#84\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.BoolType, ::Vector{UInt8}, ::Int64, ::Int64, ::Bool)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:209`)

|  Change | Delta |             % | Samples | Location                                                           |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------ |
| +100.0% |    +5 | 26.3% → 40.0% |  5 → 10 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:209` |
| removed |    -1 |   5.3% → 0.0% |   1 → 0 | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:210` |
|   +7.7% |    +1 | 68.4% → 56.0% | 13 → 14 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:215` |
|     new |    +1 |   0.0% → 4.0% |   0 → 1 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:60`  |

##### `isassigned` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:1640`)

|  Change | Delta |      % | Samples | Location                                                                                                 |
| ------: | ----: | -----: | ------: | -------------------------------------------------------------------------------------------------------- |
| +100.0% |    +5 | 100.0% |  5 → 10 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:1640` |

##### `var\"#read!#9\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Array}, ::Bool)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:312`)

|  Change | Delta |             % | Samples | Location                                                          |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------------------- |
| removed |    -2 |  50.0% → 0.0% |   2 → 0 | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:77`  |
| +200.0% |    +2 | 25.0% → 37.5% |   1 → 3 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:312` |
| +200.0% |    +2 | 25.0% → 37.5% |   1 → 3 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:356` |
|     new |    +2 |  0.0% → 25.0% |   0 → 2 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:319` |

##### `write(::StructTypes.NumberType, ::Vector{UInt8}, ::Int64, ::Int64, ::Int64)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:224`)

|  Change | Delta |      % | Samples | Location                                                           |
| ------: | ----: | -----: | ------: | ------------------------------------------------------------------ |
| +100.0% |    +4 | 100.0% |   4 → 8 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:224` |

##### `getvalue` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:213`)

| Change | Delta |      % | Samples | Location                                                           |
| -----: | ----: | -----: | ------: | ------------------------------------------------------------------ |
| +15.8% |    +3 | 100.0% | 19 → 22 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:213` |

##### `getvalue` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:216`)

|  Change | Delta |      % | Samples | Location                                                           |
| ------: | ----: | -----: | ------: | ------------------------------------------------------------------ |
| +200.0% |    +2 | 100.0% |   1 → 3 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:216` |

##### `realloc!(::Vector{UInt8}, ::Int64, ::Int64)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:51`)

|  Change | Delta |      % | Samples | Location                                                          |
| ------: | ----: | -----: | ------: | ----------------------------------------------------------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:51` |

##### `promoteeltype` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:100`)

| Change | Delta |      % | Samples | Location                                                           |
| -----: | ----: | -----: | ------: | ------------------------------------------------------------------ |
| +66.7% |    +2 | 100.0% |   3 → 5 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:100` |

##### `defaultminimum(::JSON3.Array{Int64, Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:11`)

| Change | Delta |             % | Samples | Location                                                          |
| -----: | ----: | ------------: | ------: | ----------------------------------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:11` |

##### `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Nothing})` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:204`)

| Change | Delta |            % | Samples | Location                                                          |
| -----: | ----: | -----------: | ------: | ----------------------------------------------------------------- |
|    new |    +2 | 0.0% → 50.0% |   0 → 2 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:212` |

##### `promoteeltype` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:92`)

| Change | Delta |             % | Samples | Location                                                          |
| -----: | ----: | ------------: | ------: | ----------------------------------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:92` |

##### `getvalue` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:193`)

| Change | Delta |             % | Samples | Location                                                           |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:193` |

##### `defaultminimum` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:12`)

| Change | Delta |             % | Samples | Location                                                          |
| -----: | ----: | ------------: | ------: | ----------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:12` |

##### `macro expansion` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:14`)

| Change | Delta |      % | Samples | Location                                                          |
| -----: | ----: | -----: | ------: | ----------------------------------------------------------------- |
|  +4.8% |    +1 | 100.0% | 21 → 22 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:14` |

##### `parsedigits` (`../profiler-md-julia-depot/packages/Parsers/05lwR/src/floats.jl:357`)

| Change | Delta |             % | Samples | Location                                                              |
| -----: | ----: | ------------: | ------: | --------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `../profiler-md-julia-depot/packages/Parsers/05lwR/src/floats.jl:357` |

##### `typeparser(::Type{Float64}, ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Int16, ::Parsers.Options)` (`../profiler-md-julia-depot/packages/Parsers/05lwR/src/components.jl:392`)

|  Change | Delta |             % | Samples | Location                                                                  |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------------- |
| +100.0% |    +1 | 20.0% → 33.3% |   1 → 2 | `../profiler-md-julia-depot/packages/Parsers/05lwR/src/components.jl:394` |

##### `write(::StructTypes.ArrayType, ::Vector{UInt8}, ::Int64, ::Int64, ::JSON3.Array{Int64, Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:181`)

| Change | Delta |             % | Samples | Location                                                           |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:181` |

##### `setindex!(::Dict{Symbol, Int64}, ::Int64, ::Symbol)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:356`)

| Change | Delta |             % | Samples | Location                                                                                    |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------- |
| +16.3% |    +7 | 76.8% → 83.3% | 43 → 50 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:368` |
| -25.0% |    -3 | 21.4% → 15.0% |  12 → 9 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:356` |

##### `getproperty` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base_compiler.jl:57`)

| Change | Delta |      % | Samples | Location                                                                                            |
| -----: | ----: | -----: | ------: | --------------------------------------------------------------------------------------------------- |
|  +5.6% |    +4 | 100.0% | 71 → 75 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base_compiler.jl:57` |

##### `iterate` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/range.jl:928`)

| Change | Delta |      % | Samples | Location                                                                                     |
| -----: | ----: | -----: | ------: | -------------------------------------------------------------------------------------------- |
| +13.0% |    +3 | 100.0% | 23 → 26 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/range.jl:928` |

##### `_symbol` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:1`)

| Change |  Delta |      % |       Samples | Location                                                         |
| -----: | -----: | -----: | ------------: | ---------------------------------------------------------------- |
| -14.1% | -1,020 | 100.0% | 7,236 → 6,216 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:1` |

##### `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`)

| Change | Delta |             % |       Samples | Location                                                           |
| -----: | ----: | ------------: | ------------: | ------------------------------------------------------------------ |
| -10.5% |  -452 | 61.6% → 60.7% | 4,317 → 3,865 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157` |
| -17.3% |  -104 |   8.6% → 7.8% |     602 → 498 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:73`  |
| -29.3% |   -43 |   2.1% → 1.6% |     147 → 104 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:163` |
|  -2.2% |   -29 | 19.0% → 20.4% | 1,329 → 1,300 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:60`  |
|  -6.3% |   -18 |   4.1% → 4.2% |     285 → 267 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:155` |

##### `indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64, ::Int64)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`)

| Change | Delta |      % |       Samples | Location                                                                                     |
| -----: | ----: | -----: | ------------: | -------------------------------------------------------------------------------------------- |
| -18.9% |  -434 | 100.0% | 2,300 → 1,866 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163` |

##### `indexed_iterate` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`)

| Change | Delta |      % |       Samples | Location                                                                                     |
| -----: | ----: | -----: | ------------: | -------------------------------------------------------------------------------------------- |
| -18.5% |  -284 | 100.0% | 1,535 → 1,251 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163` |

##### `GenericMemory` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:588`)

| Change | Delta |      % |     Samples | Location                                                                                    |
| -----: | ----: | -----: | ----------: | ------------------------------------------------------------------------------------------- |
| -20.0% |  -234 | 100.0% | 1,168 → 934 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:588` |

##### `_setindex!` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:1025`)

| Change | Delta |      % |   Samples | Location                                                                                      |
| -----: | ----: | -----: | --------: | --------------------------------------------------------------------------------------------- |
| -22.4% |   -53 | 100.0% | 237 → 184 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:1025` |

##### `[unknown function]` (`<unknown>`)

| Change | Delta |             % |   Samples | Location |
| -----: | ----: | ------------: | --------: | -------- |
| -24.2% |   -40 | 64.0% → 57.3% | 165 → 125 | 147      |
| +12.7% |    +9 | 27.5% → 36.7% |   71 → 80 | 98       |
| -75.0% |    -3 |   1.6% → 0.5% |     4 → 1 | 12       |
| -50.0% |    -3 |   2.3% → 1.4% |     6 → 3 | 181      |
| -66.7% |    -2 |   1.2% → 0.5% |     3 → 1 | 37       |

##### `ht_keyindex2_shorthash!(::Dict{Symbol, Int64}, ::Symbol)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:267`)

| Change | Delta |             % |   Samples | Location                                                                                    |
| -----: | ----: | ------------: | --------: | ------------------------------------------------------------------------------------------- |
| -14.2% |   -16 | 22.2% → 20.6% |  113 → 97 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:282` |
|  -4.4% |   -12 | 53.9% → 55.7% | 274 → 262 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:291` |
| -47.1% |    -8 |   3.3% → 1.9% |    17 → 9 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:303` |
| -20.7% |    -6 |   5.7% → 4.9% |   29 → 23 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:281` |
| -14.3% |    -1 |   1.4% → 1.3% |     7 → 6 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:267` |

##### `+` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:87`)

| Change | Delta |      % |   Samples | Location                                                                                  |
| -----: | ----: | -----: | --------: | ----------------------------------------------------------------------------------------- |
| -10.8% |   -36 | 100.0% | 332 → 296 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:87` |

##### `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`)

| Change | Delta |             % |   Samples | Location                                                                                     |
| -----: | ----: | ------------: | --------: | -------------------------------------------------------------------------------------------- |
| -16.4% |   -40 | 93.5% → 89.5% | 244 → 204 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60` |
| +66.7% |    +2 |   1.1% → 2.2% |     3 → 5 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:51` |
| +50.0% |    +2 |   1.5% → 2.6% |     4 → 6 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:56` |

##### `var\"#write#98\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:340`)

|  Change | Delta |             % | Samples | Location                                                           |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------ |
|  -90.0% |    -9 |  13.0% → 1.9% |  10 → 1 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:351` |
| removed |    -5 |   6.5% → 0.0% |   5 → 0 | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:346` |
|   -8.3% |    -2 | 31.2% → 42.3% | 24 → 22 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:360` |
|   -7.7% |    -1 | 16.9% → 23.1% | 13 → 12 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:60`  |
|   -9.1% |    -1 | 14.3% → 19.2% | 11 → 10 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:340` |

##### `getindex` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:975`)

| Change | Delta |      % |   Samples | Location                                                                                          |
| -----: | ----: | -----: | --------: | ------------------------------------------------------------------------------------------------- |
| -14.0% |   -25 | 100.0% | 178 → 153 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:975` |

##### `==` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/promotion.jl:641`)

| Change | Delta |      % | Samples | Location                                                                                         |
| -----: | ----: | -----: | ------: | ------------------------------------------------------------------------------------------------ |
| -22.7% |   -20 | 100.0% | 88 → 68 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/promotion.jl:641` |

##### `iterate` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:75`)

| Change | Delta |      % |   Samples | Location                                                          |
| -----: | ----: | -----: | --------: | ----------------------------------------------------------------- |
|  -7.5% |   -19 | 100.0% | 255 → 236 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:75` |

##### `unsafe_string` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:126`)

| Change | Delta |      % | Samples | Location                                                                                              |
| -----: | ----: | -----: | ------: | ----------------------------------------------------------------------------------------------------- |
| -15.7% |   -14 | 100.0% | 89 → 75 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:126` |

##### `Object` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:8`)

|  Change | Delta |             % | Samples | Location                                                         |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------------- |
| removed |   -13 | 100.0% → 0.0% |  13 → 0 | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:8` |

##### `macro expansion` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/simdloop.jl:75`)

| Change | Delta |      % | Samples | Location                                                                                       |
| -----: | ----: | -----: | ------: | ---------------------------------------------------------------------------------------------- |
| -16.2% |   -12 | 100.0% | 74 → 62 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/simdloop.jl:75` |

##### `<` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:83`)

| Change | Delta |      % | Samples | Location                                                                                  |
| -----: | ----: | -----: | ------: | ----------------------------------------------------------------------------------------- |
| -45.5% |   -10 | 100.0% | 22 → 12 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:83` |

##### `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40`)

|  Change | Delta |             % | Samples | Location                                                          |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------------------- |
|  -66.7% |    -4 | 22.2% → 11.1% |   6 → 2 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40` |
|  -57.1% |    -4 | 25.9% → 16.7% |   7 → 3 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:55` |
|  +50.0% |    +2 | 14.8% → 33.3% |   4 → 6 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:47` |
| removed |    -2 |   7.4% → 0.0% |   2 → 0 | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:51` |

##### `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{String})` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:142`)

|  Change | Delta |             % | Samples | Location                                                          |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------------------- |
|  +13.6% |    +8 | 46.8% → 57.3% | 59 → 67 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:155` |
|  -60.0% |    -6 |   7.9% → 3.4% |  10 → 4 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:167` |
|  -50.0% |    -4 |   6.3% → 3.4% |   8 → 4 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:142` |
| removed |    -1 |   0.8% → 0.0% |   1 → 0 | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:166` |
|     new |    +1 |   0.0% → 0.9% |   0 → 1 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:149` |

##### `getvalue` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:215`)

| Change | Delta |      % | Samples | Location                                                           |
| -----: | ----: | -----: | ------: | ------------------------------------------------------------------ |
|  -9.6% |    -8 | 100.0% | 83 → 75 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:215` |

##### `unescape(::JSON3.PointerString)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/strings.jl:48`)

|  Change | Delta |             % | Samples | Location                                                             |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------------------- |
| removed |    -2 |   8.0% → 0.0% |   2 → 0 | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/strings.jl:48`  |
|  -66.7% |    -2 |  12.0% → 5.6% |   3 → 1 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/strings.jl:54`  |
|  -50.0% |    -2 | 16.0% → 11.1% |   4 → 2 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/strings.jl:60`  |
|  -33.3% |    -2 | 24.0% → 22.2% |   6 → 4 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/strings.jl:116` |
|     new |    +1 |   0.0% → 5.6% |   0 → 1 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/strings.jl:117` |

##### `macro expansion` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:23`)

| Change | Delta |      % | Samples | Location                                                          |
| -----: | ----: | -----: | ------: | ----------------------------------------------------------------- |
| -23.1% |    -6 | 100.0% | 26 → 20 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:23` |

##### `var\"#write#86\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.NumberType, ::Vector{UInt8}, ::Int64, ::Int64, ::Int64)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:224`)

|  Change | Delta |             % | Samples | Location                                                           |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------ |
|  -75.0% |    -3 |  16.7% → 5.6% |   4 → 1 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:224` |
|  -10.5% |    -2 | 79.2% → 94.4% | 19 → 17 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:236` |
| removed |    -1 |   4.2% → 0.0% |   1 → 0 | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:61`  |

##### `getvalue(::Type{JSON3.Array}, ::Base.CodeUnits{UInt8, String}, ::SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}, ::Int64, ::UInt64)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:131`)

|  Change | Delta |           % | Samples | Location                                                           |
| ------: | ----: | ----------: | ------: | ------------------------------------------------------------------ |
| removed |    -1 | 5.6% → 0.0% |   1 → 0 | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:131` |

##### `macro expansion` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:25`)

| Change | Delta |      % | Samples | Location                                                          |
| -----: | ----: | -----: | ------: | ----------------------------------------------------------------- |
| -80.0% |    -4 | 100.0% |   5 → 1 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:25` |

##### `write(::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:340`)

| Change | Delta |      % | Samples | Location                                                           |
| -----: | ----: | -----: | ------: | ------------------------------------------------------------------ |
| -12.5% |    -4 | 100.0% | 32 → 28 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:340` |

##### `PosLen` (`../profiler-md-julia-depot/packages/Parsers/05lwR/src/utils.jl:457`)

|  Change | Delta |             % | Samples | Location                                                             |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------------------- |
| removed |    -4 | 100.0% → 0.0% |   4 → 0 | `../profiler-md-julia-depot/packages/Parsers/05lwR/src/utils.jl:457` |

##### `write(::StructTypes.BoolType, ::Vector{UInt8}, ::Int64, ::Int64, ::Bool)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:209`)

| Change | Delta |      % | Samples | Location                                                           |
| -----: | ----: | -----: | ------: | ------------------------------------------------------------------ |
| -10.7% |    -3 | 100.0% | 28 → 25 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:209` |

##### `var\"#write#81\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.ArrayType, ::Vector{UInt8}, ::Int64, ::Int64, ::JSON3.Array{Int64, Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:181`)

|  Change | Delta |             % | Samples | Location                                                           |
| ------: | ----: | ------------: | ------: | ------------------------------------------------------------------ |
| removed |    -1 |  25.0% → 0.0% |   1 → 0 | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:181` |
|     new |    +1 | 0.0% → 100.0% |   0 → 1 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:200` |

##### `populateinds!` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:64`)

|  Change | Delta |             % | Samples | Location                                                          |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------------------- |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:64` |

##### `>>` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:573`)

| Change | Delta |      % | Samples | Location                                                                                   |
| -----: | ----: | -----: | ------: | ------------------------------------------------------------------------------------------ |
| -83.3% |   -10 | 100.0% |  12 → 2 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:573` |

##### `*` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:88`)

| Change | Delta |      % | Samples | Location                                                                                  |
| -----: | ----: | -----: | ------: | ----------------------------------------------------------------------------------------- |
| -22.9% |    -8 | 100.0% | 35 → 27 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:88` |

##### `-(::Int64, ::Int64)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:86`)

| Change | Delta |      % | Samples | Location                                                                                  |
| -----: | ----: | -----: | ------: | ----------------------------------------------------------------------------------------- |
| -43.8% |    -7 | 100.0% |  16 → 9 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:86` |

##### `resize!(::Vector{Int64}, ::Int64)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:1533`)

| Change | Delta |             % | Samples | Location                                                                                      |
| -----: | ----: | ------------: | ------: | --------------------------------------------------------------------------------------------- |
| -83.3% |    -5 | 46.2% → 16.7% |   6 → 1 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:1533` |
| -66.7% |    -4 | 46.2% → 33.3% |   6 → 2 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:1547` |
|    new |    +1 |  0.0% → 16.7% |   0 → 1 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:1536` |

##### `BottomRF` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:83`)

| Change | Delta |      % | Samples | Location                                                                                     |
| -----: | ----: | -----: | ------: | -------------------------------------------------------------------------------------------- |
| -26.1% |    -6 | 100.0% | 23 → 17 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:83` |

##### `unsafe_load` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/pointer.jl:151`)

| Change | Delta |      % |   Samples | Location                                                                                       |
| -----: | ----: | -----: | --------: | ---------------------------------------------------------------------------------------------- |
|  -1.0% |    -5 | 100.0% | 501 → 496 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/pointer.jl:151` |

##### `isempty(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:1127`)

|  Change | Delta |             % | Samples | Location                                                                                           |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------------------------------------------------- |
| removed |    -5 | 100.0% → 0.0% |   5 → 0 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:1127` |

##### `<=` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:560`)

| Change | Delta |      % | Samples | Location                                                                                   |
| -----: | ----: | -----: | ------: | ------------------------------------------------------------------------------------------ |
| -38.5% |    -5 | 100.0% |  13 → 8 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:560` |

#### Callers

Callers with the largest change in contribution to each function's self samples. Inlining can make caller attribution imprecise.

##### `Dict` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:80`)

|  Change | Delta |      % |  Samples | Caller     | Location                                                           |
| ------: | ----: | -----: | -------: | ---------- | ------------------------------------------------------------------ |
| +190.9% |   +84 | 100.0% | 44 → 128 | `getvalue` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:126` |

##### `unsafe_string` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:130`)

| Change | Delta |      % |   Samples | Caller   | Location                                                                                              |
| -----: | ----: | -----: | --------: | -------- | ----------------------------------------------------------------------------------------------------- |
| +12.6% |   +18 | 100.0% | 143 → 161 | `String` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:145` |

##### `&` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:393`)

|  Change | Delta |             % | Samples | Caller                                                     | Location                                                                                    |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
|  +24.4% |   +10 | 73.2% → 69.9% | 41 → 51 | `getnontypemask`                                           | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:114`                          |
|  +50.0% |    +7 | 25.0% → 28.8% | 14 → 21 | `ht_keyindex2_shorthash!(::Dict{Symbol, Int64}, ::Symbol)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:267` |
| removed |    -1 |   1.8% → 0.0% |   1 → 0 | `isobject`                                                 | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:60`                           |
|     new |    +1 |   0.0% → 1.4% |   0 → 1 | `getproperty`                                              | `../profiler-md-julia-depot/packages/Parsers/05lwR/src/utils.jl:467`                        |

##### `length_continued` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/pointer.jl`)

| Change | Delta |      % |  Samples | Caller             | Location                                                                                              |
| -----: | ----: | -----: | -------: | ------------------ | ----------------------------------------------------------------------------------------------------- |
| +17.6% |   +16 | 100.0% | 91 → 107 | `length(::String)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:540` |

##### `|` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:418`)

|  Change | Delta |             % | Samples | Caller          | Location                                                                                    |
| ------: | ----: | ------------: | ------: | --------------- | ------------------------------------------------------------------------------------------- |
|  +16.9% |   +14 | 95.4% → 95.1% | 83 → 97 | `string`        | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:88`                           |
|  -66.7% |    -2 |   3.4% → 1.0% |   3 → 1 | `\|`            | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:1058` |
|     new |    +2 |   0.0% → 2.0% |   0 → 2 | `parsefrac`     | `../profiler-md-julia-depot/packages/Parsers/05lwR/src/floats.jl:496`                       |
| +100.0% |    +1 |   1.1% → 2.0% |   1 → 2 | `promoteeltype` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:96`                           |

##### `BottomRF` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:84`)

| Change | Delta |             % |   Samples | Caller               | Location                                                                                     |
| -----: | ----: | ------------: | --------: | -------------------- | -------------------------------------------------------------------------------------------- |
|  +6.7% |   +18 | 98.2% → 99.7% | 267 → 285 | `[unknown function]` | `<unknown>`                                                                                  |
| -80.0% |    -4 |   1.8% → 0.3% |     5 → 1 | `MappingRF`          | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98` |

##### `getindex` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:401`)

|  Change | Delta |             % | Samples | Caller          | Location                                                                                    |
| ------: | ----: | ------------: | ------: | --------------- | ------------------------------------------------------------------------------------------- |
|  +20.0% |    +5 | 64.1% → 57.7% | 25 → 30 | `isslotempty`   | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:134` |
| +500.0% |    +5 |  2.6% → 11.5% |   1 → 6 | `isslotmissing` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:136` |
| +150.0% |    +3 |   5.1% → 9.6% |   2 → 5 | `isslotfilled`  | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:135` |

##### `ncodeunits` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:161`)

|  Change | Delta |             % | Samples | Caller                                                                                                                                                                  | Location                                                                                             |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| +133.3% |   +12 | 90.0% → 91.3% |  9 → 21 | `var\"#write#98\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:340`                                   |
|     new |    +2 |   0.0% → 8.7% |   0 → 2 | `checkbounds`                                                                                                                                                           | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/basic.jl:204` |
| removed |    -1 |  10.0% → 0.0% |   1 → 0 | `defaultminimum(::String)`                                                                                                                                              | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:5`                                     |

##### `#write#81` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:73`)

|  Change | Delta |             % |   Samples | Caller               | Location                                                           |
| ------: | ----: | ------------: | --------: | -------------------- | ------------------------------------------------------------------ |
|   +7.9% |   +10 | 99.2% → 97.9% | 127 → 137 | `[unknown function]` | `<unknown>`                                                        |
| +200.0% |    +2 |   0.8% → 2.1% |     1 → 3 | `#write#79`          | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157` |

##### `macro expansion` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/simdloop.jl`)

|  Change | Delta |             % | Samples | Caller                                                                                                                                                                  | Location                                                           |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| +112.5% |    +9 | 88.9% → 89.5% |  8 → 17 | `escapelength`                                                                                                                                                          | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:331` |
| +100.0% |    +1 | 11.1% → 10.5% |   1 → 2 | `var\"#write#98\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:340` |

##### `setproperty!` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base_compiler.jl:61`)

|  Change | Delta |             % | Samples | Caller                                    | Location                                                                                    |
| ------: | ----: | ------------: | ------: | ----------------------------------------- | ------------------------------------------------------------------------------------------- |
| +133.3% |   +12 | 42.9% → 67.7% |  9 → 21 | `rehash!(::Dict{Symbol, Int64}, ::Int64)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:138` |
|  -20.0% |    -1 | 23.8% → 12.9% |   5 → 4 | `_setindex!`                              | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:329` |
| removed |    -1 |   4.8% → 0.0% |   1 → 0 | `_setindex!`                              | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:325` |

##### `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:218`)

| Change | Delta |              % |   Samples | Caller                                                                                                                                                                               | Location                                                          |
| -----: | ----: | -------------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------- |
|  +3.7% |    +6 | 100.0% → 98.8% | 161 → 167 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:218` |
|    new |    +2 |    0.0% → 1.2% |     0 → 2 | `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)`                         | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:87`  |

##### `iterate` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/range.jl`)

|  Change | Delta |             % | Samples | Caller      | Location                                                                                            |
| ------: | ----: | ------------: | ------: | ----------- | --------------------------------------------------------------------------------------------------- |
| +150.0% |    +9 | 75.0% → 93.8% |  6 → 15 | `#write#81` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:73`                                   |
|  -50.0% |    -1 |  25.0% → 6.3% |   2 → 1 | `#write#81` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl` |

##### `Pair` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base.jl:12`)

|  Change | Delta |      % | Samples | Caller    | Location                                                          |
| ------: | ----: | -----: | ------: | --------- | ----------------------------------------------------------------- |
| +160.0% |    +8 | 100.0% |  5 → 13 | `iterate` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:81` |

##### `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:87`)

|  Change | Delta |             % | Samples | Caller                                                                                                                                                                                                                           | Location                                                          |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| +128.6% |    +9 | 10.6% → 21.9% |  7 → 16 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:218` |
|  -66.7% |    -2 |   4.5% → 1.4% |   3 → 1 | `var\"#read!#9\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Array}, ::Bool)`  | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:312` |

##### `Array` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:649`)

|  Change | Delta |              % | Samples | Caller     | Location                                                                                     |
| ------: | ----: | -------------: | ------: | ---------- | -------------------------------------------------------------------------------------------- |
| +100.0% |    +6 | 100.0% → 92.3% |  6 → 12 | `getindex` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:436` |
|     new |    +1 |    0.0% → 7.7% |   0 → 1 | `Array`    | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:661`  |

##### `ifelse` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:854`)

|  Change | Delta |            % | Samples | Caller                   | Location                                                           |
| ------: | ----: | -----------: | ------: | ------------------------ | ------------------------------------------------------------------ |
|     new |    +8 | 0.0% → 72.7% |   0 → 8 | `gettapelen`             | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:118` |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `defaultminimum(::Bool)` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:4`   |

##### `MappingRF` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98`)

| Change | Delta |             % | Samples | Caller               | Location                                                                                     |
| -----: | ----: | ------------: | ------: | -------------------- | -------------------------------------------------------------------------------------------- |
| +50.0% |    +4 |         66.7% |  8 → 12 | `_foldl_impl`        | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60` |
| +66.7% |    +2 | 25.0% → 27.8% |   3 → 5 | `[unknown function]` | `<unknown>`                                                                                  |

##### `var\"#write#84\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.BoolType, ::Vector{UInt8}, ::Int64, ::Int64, ::Bool)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:209`)

| Change | Delta |             % | Samples | Caller                                                                     | Location                                                           |
| -----: | ----: | ------------: | ------: | -------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| +44.4% |    +4 | 47.4% → 52.0% |  9 → 13 | `write(::StructTypes.BoolType, ::Vector{UInt8}, ::Int64, ::Int64, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:209` |
| +20.0% |    +2 | 52.6% → 48.0% | 10 → 12 | `#write#79`                                                                | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157` |

##### `isassigned` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:1640`)

| Change | Delta |             % | Samples | Caller                                                                                                                                                                                                                                                                                | Location                                                                                            |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
|    new |    +8 |  0.0% → 80.0% |   0 → 8 | `#write#81`                                                                                                                                                                                                                                                                           | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl` |
| -66.7% |    -2 | 60.0% → 10.0% |   3 → 1 | `#defaultminimum##0`                                                                                                                                                                                                                                                                  | `<unknown>`                                                                                         |
| -50.0% |    -1 | 40.0% → 10.0% |   2 → 1 | `var\"#write#81\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.ArrayType, ::Vector{UInt8}, ::Int64, ::Int64, ::JSON3.Array{Int64, Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:181`                                  |

##### `parsedigits` (`../profiler-md-julia-depot/packages/Parsers/05lwR/src/floats.jl`)

| Change | Delta |      % | Samples | Caller        | Location                                                              |
| -----: | ----: | -----: | ------: | ------------- | --------------------------------------------------------------------- |
| +83.3% |    +5 | 100.0% |  6 → 11 | `parsedigits` | `../profiler-md-julia-depot/packages/Parsers/05lwR/src/floats.jl:302` |

##### `var\"#read!#9\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Array}, ::Bool)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:312`)

|  Change | Delta |             % | Samples | Caller                                                                                                                                                                              | Location                                                          |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| +150.0% |    +3 | 50.0% → 62.5% |   2 → 5 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Array}, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:312` |
|  +50.0% |    +1 | 50.0% → 37.5% |   2 → 3 | `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)`                        | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:87`  |

##### `write(::StructTypes.NumberType, ::Vector{UInt8}, ::Int64, ::Int64, ::Int64)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:224`)

|  Change | Delta |      % | Samples | Caller      | Location                                                           |
| ------: | ----: | -----: | ------: | ----------- | ------------------------------------------------------------------ |
| +100.0% |    +4 | 100.0% |   4 → 8 | `#write#79` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157` |

##### `getvalue` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:213`)

| Change | Delta |      % | Samples | Caller    | Location                                                          |
| -----: | ----: | -----: | ------: | --------- | ----------------------------------------------------------------- |
| +15.8% |    +3 | 100.0% | 19 → 22 | `iterate` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:81` |

##### `getvalue` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:216`)

|  Change | Delta |      % | Samples | Caller    | Location                                                          |
| ------: | ----: | -----: | ------: | --------- | ----------------------------------------------------------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `iterate` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:81` |

##### `realloc!(::Vector{UInt8}, ::Int64, ::Int64)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:51`)

|  Change | Delta |              % | Samples | Caller                                                                         | Location                                                           |
| ------: | ----: | -------------: | ------: | ------------------------------------------------------------------------------ | ------------------------------------------------------------------ |
| +100.0% |    +1 | 100.0% → 66.7% |   1 → 2 | `write(::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:340` |
|     new |    +1 |   0.0% → 33.3% |   0 → 1 | `write(::StructTypes.NumberType, ::Vector{UInt8}, ::Int64, ::Int64, ::Int64)`  | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:224` |

##### `promoteeltype` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:100`)

| Change | Delta |      % | Samples | Caller                                                                                                                                                                                                                           | Location                                                          |
| -----: | ----: | -----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| +66.7% |    +2 | 100.0% |   3 → 5 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:218` |

##### `defaultminimum(::JSON3.Array{Int64, Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:11`)

| Change | Delta |             % | Samples | Caller                                                                       | Location    |
| -----: | ----: | ------------: | ------: | ---------------------------------------------------------------------------- | ----------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` | `<unknown>` |

##### `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Nothing})` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:204`)

| Change | Delta |              % | Samples | Caller                                                                                                                                                                      | Location                                                         |
| -----: | ----: | -------------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
|    new |    +3 |   0.0% → 75.0% |   0 → 3 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:87` |
| -50.0% |    -1 | 100.0% → 25.0% |   2 → 1 | `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)`                | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:87` |

##### `promoteeltype` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:92`)

| Change | Delta |             % | Samples | Caller                                                                                                                                                                                                                           | Location                                                          |
| -----: | ----: | ------------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
|    new |    +2 | 0.0% → 100.0% |   0 → 2 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:218` |

##### `getvalue` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:193`)

| Change | Delta |             % | Samples | Caller     | Location                                                           |
| -----: | ----: | ------------: | ------: | ---------- | ------------------------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `getvalue` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:218` |

##### `defaultminimum` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:12`)

| Change | Delta |             % | Samples | Caller               | Location    |
| -----: | ----: | ------------: | ------: | -------------------- | ----------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `#defaultminimum##0` | `<unknown>` |

##### `macro expansion` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:14`)

|  Change | Delta |             % | Samples | Caller                                                                                                                                                                                                                           | Location                                                          |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| +200.0% |    +2 |  4.8% → 13.6% |   1 → 3 | `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{String})`                                                                                                                   | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:142` |
|   -5.0% |    -1 | 95.2% → 86.4% | 20 → 19 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:218` |

##### `parsedigits` (`../profiler-md-julia-depot/packages/Parsers/05lwR/src/floats.jl:357`)

| Change | Delta |             % | Samples | Caller        | Location                                                              |
| -----: | ----: | ------------: | ------: | ------------- | --------------------------------------------------------------------- |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `parsedigits` | `../profiler-md-julia-depot/packages/Parsers/05lwR/src/floats.jl:302` |

##### `typeparser(::Type{Float64}, ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Int16, ::Parsers.Options)` (`../profiler-md-julia-depot/packages/Parsers/05lwR/src/components.jl:392`)

|  Change | Delta |             % | Samples | Caller                                                                                                                                                                      | Location                                                         |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| +200.0% |    +2 | 20.0% → 50.0% |   1 → 3 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:87` |
|  -25.0% |    -1 | 80.0% → 50.0% |   4 → 3 | `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)`                | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:87` |

##### `write(::StructTypes.ArrayType, ::Vector{UInt8}, ::Int64, ::Int64, ::JSON3.Array{Int64, Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:181`)

| Change | Delta |             % | Samples | Caller      | Location                                                           |
| -----: | ----: | ------------: | ------: | ----------- | ------------------------------------------------------------------ |
|    new |    +1 | 0.0% → 100.0% |   0 → 1 | `#write#79` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157` |

##### `setindex!(::Dict{Symbol, Int64}, ::Int64, ::Symbol)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:356`)

| Change | Delta |             % | Samples | Caller                                                                                                                             | Location                                                           |
| -----: | ----: | ------------: | ------: | ---------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| +22.0% |    +9 | 73.2% → 83.3% | 41 → 50 | `getvalue`                                                                                                                         | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:127` |
| -33.3% |    -5 | 26.8% → 16.7% | 15 → 10 | `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40`  |

##### `getproperty` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base_compiler.jl:57`)

|  Change | Delta |             % | Samples | Caller                                                     | Location                                                                                             |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
|  +13.5% |    +5 | 52.1% → 56.0% | 37 → 42 | `_setindex!`                                               | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:331`          |
| +133.3% |    +4 |   4.2% → 9.3% |   3 → 7 | `_setindex!`                                               | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:327`          |
| removed |    -2 |   2.8% → 0.0% |   2 → 0 | `getindex`                                                 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/basic.jl:793` |
|  -18.2% |    -2 | 15.5% → 12.0% |  11 → 9 | `ht_keyindex2_shorthash!(::Dict{Symbol, Int64}, ::Symbol)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:267`          |
| removed |    -2 |   2.8% → 0.0% |   2 → 0 | `_setindex!`                                               | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:337`          |

##### `String` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl`)

| Change | Delta |             % | Samples | Caller                            | Location                                                            |
| -----: | ----: | ------------: | ------: | --------------------------------- | ------------------------------------------------------------------- |
|    new |    +4 | 0.0% → 100.0% |   0 → 4 | `unescape(::JSON3.PointerString)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/strings.jl:48` |

##### `iterate` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/range.jl:928`)

| Change | Delta |             % | Samples | Caller                                                                                                                                                                  | Location                                                                                    |
| -----: | ----: | ------------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| +21.1% |    +4 | 82.6% → 88.5% | 19 → 23 | `var\"#write#98\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:340`                          |
| -25.0% |    -1 | 17.4% → 11.5% |   4 → 3 | `rehash!(::Dict{Symbol, Int64}, ::Int64)`                                                                                                                               | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:138` |

##### `_symbol` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:1`)

| Change |  Delta |      % |       Samples | Caller     | Location                                                           |
| -----: | -----: | -----: | ------------: | ---------- | ------------------------------------------------------------------ |
| -14.1% | -1,020 | 100.0% | 7,236 → 6,216 | `getvalue` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:187` |

##### `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`)

|  Change | Delta |             % |       Samples | Caller               | Location                                                                                            |
| ------: | ----: | ------------: | ------------: | -------------------- | --------------------------------------------------------------------------------------------------- |
|   -9.3% |  -652 | 99.8% → 99.7% | 6,998 → 6,346 | `[unknown function]` | `<unknown>`                                                                                         |
| +350.0% |    +7 |  <0.1% → 0.1% |         2 → 9 | `#write#79`          | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`                                  |
|  -30.0% |    -3 |          0.1% |        10 → 7 | `write`              | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:147`                                  |
|     new |    +1 |  0.0% → <0.1% |         0 → 1 | `#write#81`          | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl` |

##### `indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64, ::Int64)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`)

| Change | Delta |      % |       Samples | Caller      | Location                                                           |
| -----: | ----: | -----: | ------------: | ----------- | ------------------------------------------------------------------ |
| -18.9% |  -434 | 100.0% | 2,300 → 1,866 | `#write#79` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157` |

##### `indexed_iterate` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`)

| Change | Delta |             % |   Samples | Caller                                                           | Location                                                                                            |
| -----: | ----: | ------------: | --------: | ---------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| -19.8% |  -195 | 64.2% → 63.2% | 986 → 791 | `indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`        |
| -20.9% |   -97 | 30.2% → 29.3% | 464 → 367 | `#write#79`                                                      | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`                                  |
| +16.7% |   +12 |   4.7% → 6.7% |   72 → 84 | `indexed_iterate`                                                | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`        |
| -30.8% |    -4 |   0.8% → 0.7% |    13 → 9 | `#write#81`                                                      | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl` |

##### `GenericMemory` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:588`)

| Change | Delta |             % |   Samples | Caller                                    | Location                                                                                      |
| -----: | ----: | ------------: | --------: | ----------------------------------------- | --------------------------------------------------------------------------------------------- |
| -20.9% |  -181 | 74.2% → 73.4% | 867 → 686 | `Array`                                   | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:648`   |
| -17.5% |   -52 | 25.4% → 26.2% | 297 → 245 | `rehash!(::Dict{Symbol, Int64}, ::Int64)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:138`   |
| -25.0% |    -1 |          0.3% |     4 → 3 | `array_new_memory`                        | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:1101` |

##### `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` (`<unknown>`)

|  Change | Delta |             % |   Samples | Caller               | Location                                                                                     |
| ------: | ----: | ------------: | --------: | -------------------- | -------------------------------------------------------------------------------------------- |
|   -3.2% |   -29 | 85.8% → 87.5% | 910 → 881 | `[unknown function]` | `<unknown>`                                                                                  |
|  -80.0% |   -12 |   1.4% → 0.3% |    15 → 3 | `_foldl_impl`        | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60` |
|   -7.5% |   -10 | 12.5% → 12.2% | 133 → 123 | `MappingRF`          | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98` |
| removed |    -2 |   0.2% → 0.0% |     2 → 0 | `foldl_impl`         | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:46` |

##### `_setindex!` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:1025`)

| Change | Delta |     % |   Samples | Caller               | Location                                                                                      |
| -----: | ----: | ----: | --------: | -------------------- | --------------------------------------------------------------------------------------------- |
| -22.4% |   -51 | 96.2% | 228 → 177 | `setindex!`          | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:1020` |
| -22.2% |    -2 |  3.8% |     9 → 7 | `[unknown function]` | `<unknown>`                                                                                   |

##### `[unknown function]` (`<unknown>`)

| Change | Delta |             % |   Samples | Caller                                                                       | Location                                                                                            |
| -----: | ----: | ------------: | --------: | ---------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| -20.0% |   -26 | 50.4% → 47.7% | 130 → 104 | `#write#79`                                                                  | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`                                  |
| -40.5% |   -17 | 16.3% → 11.5% |   42 → 25 | `#write#81`                                                                  | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl` |
| +12.7% |    +9 | 27.5% → 36.7% |   71 → 80 | `_foldl_impl`                                                                | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`        |
| -45.5% |    -5 |   4.3% → 2.8% |    11 → 6 | `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` | `<unknown>`                                                                                         |
| -66.7% |    -2 |   1.2% → 0.5% |     3 → 1 | `parse_workload`                                                             | `./profile.jl:18`                                                                                   |

##### `ht_keyindex2_shorthash!(::Dict{Symbol, Int64}, ::Symbol)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:267`)

| Change | Delta |             % |   Samples | Caller                                                                                                                             | Location                                                                                    |
| -----: | ----: | ------------: | --------: | ---------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
|  -8.8% |   -40 | 89.0% → 87.7% | 452 → 412 | `setindex!(::Dict{Symbol, Int64}, ::Int64, ::Symbol)`                                                                              | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:356` |
|  +3.6% |    +2 | 11.0% → 12.3% |   56 → 58 | `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40`                           |

##### `+` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:87`)

| Change | Delta |             % |   Samples | Caller                                                                                                                                                                  | Location                                                                                              |
| -----: | ----: | ------------: | --------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| -29.3% |   -17 | 17.5% → 13.9% |   58 → 41 | `length_continued`                                                                                                                                                      | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:559` |
| -55.0% |   -11 |   6.0% → 3.0% |    20 → 9 | `var\"#write#98\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:340`                                    |
| -50.0% |    -7 |   4.2% → 2.4% |    14 → 7 | `_reindexlinear`                                                                                                                                                        | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/subarray.jl:343`       |
|  -6.4% |    -7 | 32.8% → 34.5% | 109 → 102 | `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})`                                      | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40`                                     |
| +87.5% |    +7 |   2.4% → 5.1% |    8 → 15 | `length_continued`                                                                                                                                                      | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:568` |

##### `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`)

| Change | Delta |             % |   Samples | Caller                                                                       | Location                                                                                     |
| -----: | ----: | ------------: | --------: | ---------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| -12.4% |   -32 | 98.9% → 99.1% | 258 → 226 | `foldl_impl`                                                                 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:46` |
| -33.3% |    -1 |   1.1% → 0.9% |     3 → 2 | `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` | `<unknown>`                                                                                  |

##### `var\"#write#98\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:340`)

| Change | Delta |             % | Samples | Caller                                                                         | Location                                                           |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------------------------ | ------------------------------------------------------------------ |
| -46.4% |   -26 | 72.7% → 57.7% | 56 → 30 | `write(::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:340` |
|  +4.8% |    +1 | 27.3% → 42.3% | 21 → 22 | `#write#79`                                                                    | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157` |

##### `getindex` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:975`)

|  Change | Delta |             % |  Samples | Caller                                                                                                                                                                                                                           | Location                                                                                        |
| ------: | ----: | ------------: | -------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
|  -28.0% |   -14 | 28.1% → 23.5% |  50 → 36 | `getindex`                                                                                                                                                                                                                       | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/subarray.jl:334` |
|   -5.8% |    -6 | 57.9% → 63.4% | 103 → 97 | `macro expansion`                                                                                                                                                                                                                | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:332`                              |
|  -33.3% |    -6 |  10.1% → 7.8% |  18 → 12 | `var\"#write#98\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)`                                                          | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:340`                              |
|  +25.0% |    +1 |   2.2% → 3.3% |    4 → 5 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:218`                               |
| removed |    -1 |   0.6% → 0.0% |    1 → 0 | `var\"#read!#9\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Array}, ::Bool)`  | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:312`                               |

##### `==` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/promotion.jl:641`)

|  Change | Delta |             % | Samples | Caller                                                                                                                                                                                                                           | Location                                                                                    |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
|  -45.0% |    -9 | 22.7% → 16.2% | 20 → 11 | `ht_keyindex2_shorthash!(::Dict{Symbol, Int64}, ::Symbol)`                                                                                                                                                                       | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:267` |
|   -6.0% |    -3 | 56.8% → 69.1% | 50 → 47 | `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{String})`                                                                                                                   | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:142`                           |
|  -33.3% |    -3 |  10.2% → 8.8% |   9 → 6 | `isarray`                                                                                                                                                                                                                        | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:61`                           |
| removed |    -3 |   3.4% → 0.0% |   3 → 0 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:218`                           |
|  -66.7% |    -2 |   3.4% → 1.5% |   3 → 1 | `promoteeltype`                                                                                                                                                                                                                  | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:100`                          |

##### `iterate` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:75`)

|  Change | Delta |             % |  Samples | Caller                                                                                                                       | Location                                                                                           |
| ------: | ----: | ------------: | -------: | ---------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
|  -50.6% |   -80 | 62.0% → 33.1% | 158 → 78 | `#write#79`                                                                                                                  | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`                                 |
| +121.7% |   +56 | 18.0% → 43.2% | 46 → 102 | `iterate`                                                                                                                    | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/iterators.jl:697`   |
|   +5.9% |    +3 | 20.0% → 22.9% |  51 → 54 | `iterate`                                                                                                                    | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:75`                                  |
|     new |    +2 |   0.0% → 0.8% |    0 → 2 | `isempty(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:1127` |

##### `unsafe_string` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:126`)

| Change | Delta |      % | Samples | Caller     | Location                                                           |
| -----: | ----: | -----: | ------: | ---------- | ------------------------------------------------------------------ |
| -15.7% |   -14 | 100.0% | 89 → 75 | `getvalue` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:195` |

##### `Object` (`../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:8`)

|  Change | Delta |             % | Samples | Caller     | Location                                                           |
| ------: | ----: | ------------: | ------: | ---------- | ------------------------------------------------------------------ |
| removed |   -13 | 100.0% → 0.0% |  13 → 0 | `getvalue` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:126` |

##### `macro expansion` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/simdloop.jl:75`)

| Change | Delta |             % | Samples | Caller                                                                                                                                                                  | Location                                                           |
| -----: | ----: | ------------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| -33.3% |    -8 | 32.4% → 25.8% | 24 → 16 | `var\"#write#98\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:340` |
|  -8.0% |    -4 | 67.6% → 74.2% | 50 → 46 | `escapelength`                                                                                                                                                          | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:331` |

##### `<` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:83`)

| Change | Delta |      % | Samples | Caller | Location                                                                                         |
| -----: | ----: | -----: | ------: | ------ | ------------------------------------------------------------------------------------------------ |
| -45.5% |   -10 | 100.0% | 22 → 12 | `>`    | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/operators.jl:425` |

##### `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40`)

|  Change | Delta |             % | Samples | Caller               | Location                                                                                     |
| ------: | ----: | ------------: | ------: | -------------------- | -------------------------------------------------------------------------------------------- |
|  -16.7% |    -3 | 66.7% → 83.3% | 18 → 15 | `getvalue`           | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:127`                           |
| removed |    -2 |   7.4% → 0.0% |   2 → 0 | `defaultminimum`     | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:12`                            |
|  -40.0% |    -2 | 18.5% → 16.7% |   5 → 3 | `[unknown function]` | `<unknown>`                                                                                  |
| removed |    -2 |   7.4% → 0.0% |   2 → 0 | `foldl_impl`         | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:46` |

##### `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{String})` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:142`)

| Change | Delta |             % |   Samples | Caller                                                                                                                                                                      | Location                                                         |
| -----: | ----: | ------------: | --------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| -50.0% |    -5 |   7.9% → 4.3% |    10 → 5 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:87` |
|  -3.4% |    -4 | 92.1% → 95.7% | 116 → 112 | `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)`                | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:87` |

##### `getvalue` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:215`)

| Change | Delta |      % | Samples | Caller    | Location                                                          |
| -----: | ----: | -----: | ------: | --------- | ----------------------------------------------------------------- |
|  -9.6% |    -8 | 100.0% | 83 → 75 | `iterate` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:81` |

##### `unescape(::JSON3.PointerString)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/strings.jl:48`)

|  Change | Delta |              % | Samples | Caller       | Location                                                                                     |
| ------: | ----: | -------------: | ------: | ------------ | -------------------------------------------------------------------------------------------- |
|  -25.0% |    -6 | 96.0% → 100.0% | 24 → 18 | `getvalue`   | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:193`                           |
| removed |    -1 |    4.0% → 0.0% |   1 → 0 | `foldl_impl` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:46` |

##### `macro expansion` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:23`)

| Change | Delta |             % | Samples | Caller                                                                                                                                                                                                                           | Location                                                          |
| -----: | ----: | ------------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| -24.0% |    -6 | 96.2% → 95.0% | 25 → 19 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:218` |

##### `var\"#write#86\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.NumberType, ::Vector{UInt8}, ::Int64, ::Int64, ::Int64)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:224`)

|  Change | Delta |             % | Samples | Caller                                                                                                                                                                                       | Location                                                           |
| ------: | ----: | ------------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
|  -30.0% |    -6 | 83.3% → 77.8% | 20 → 14 | `write(::StructTypes.NumberType, ::Vector{UInt8}, ::Int64, ::Int64, ::Int64)`                                                                                                                | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:224` |
| +300.0% |    +3 |  4.2% → 22.2% |   1 → 4 | `#write#79`                                                                                                                                                                                  | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157` |
| removed |    -2 |   8.3% → 0.0% |   2 → 0 | `write`                                                                                                                                                                                      | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:224` |
| removed |    -1 |   4.2% → 0.0% |   1 → 0 | `write(::StructTypes.ArrayType, ::Vector{UInt8}, ::Int64, ::Int64, ::JSON3.Array{Int64, Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:181` |

##### `getvalue(::Type{JSON3.Array}, ::Base.CodeUnits{UInt8, String}, ::SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}, ::Int64, ::UInt64)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:131`)

|  Change | Delta |             % | Samples | Caller               | Location                                                                                     |
| ------: | ----: | ------------: | ------: | -------------------- | -------------------------------------------------------------------------------------------- |
|  -21.4% |    -3 | 77.8% → 84.6% | 14 → 11 | `getvalue`           | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:216`                           |
| removed |    -3 |  16.7% → 0.0% |   3 → 0 | `[unknown function]` | `<unknown>`                                                                                  |
| +100.0% |    +1 |  5.6% → 15.4% |   1 → 2 | `foldl_impl`         | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:46` |

##### `iterate` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl`)

| Change | Delta |             % | Samples | Caller      | Location                                                                                         |
| -----: | ----: | ------------: | ------: | ----------- | ------------------------------------------------------------------------------------------------ |
| -45.2% |   -14 | 62.0% → 37.0% | 31 → 17 | `#write#79` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`                               |
| +54.5% |    +6 | 22.0% → 37.0% | 11 → 17 | `iterate`   | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:75`                                |
| +50.0% |    +4 | 16.0% → 26.1% |  8 → 12 | `iterate`   | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/iterators.jl:697` |

##### `macro expansion` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:25`)

|  Change | Delta |              % | Samples | Caller                                                                                                                                                                                                                           | Location                                                          |
| ------: | ----: | -------------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
|  -75.0% |    -3 | 80.0% → 100.0% |   4 → 1 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:218` |
| removed |    -1 |   20.0% → 0.0% |   1 → 0 | `var\"#read!#9\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Array}, ::Bool)`  | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:312` |

##### `write(::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:340`)

| Change | Delta |      % | Samples | Caller      | Location                                                           |
| -----: | ----: | -----: | ------: | ----------- | ------------------------------------------------------------------ |
| -12.5% |    -4 | 100.0% | 32 → 28 | `#write#79` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157` |

##### `PosLen` (`../profiler-md-julia-depot/packages/Parsers/05lwR/src/utils.jl:457`)

|  Change | Delta |             % | Samples | Caller   | Location                                                             |
| ------: | ----: | ------------: | ------: | -------- | -------------------------------------------------------------------- |
| removed |    -4 | 100.0% → 0.0% |   4 → 0 | `PosLen` | `../profiler-md-julia-depot/packages/Parsers/05lwR/src/utils.jl:454` |

##### `write(::StructTypes.BoolType, ::Vector{UInt8}, ::Int64, ::Int64, ::Bool)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:209`)

| Change | Delta |      % | Samples | Caller      | Location                                                           |
| -----: | ----: | -----: | ------: | ----------- | ------------------------------------------------------------------ |
| -10.7% |    -3 | 100.0% | 28 → 25 | `#write#79` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157` |

##### `var\"#write#81\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.ArrayType, ::Vector{UInt8}, ::Int64, ::Int64, ::JSON3.Array{Int64, Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:181`)

|  Change | Delta |            % | Samples | Caller                                                                                                                                                                                       | Location                                                           |
| ------: | ----: | -----------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| removed |    -3 | 75.0% → 0.0% |   3 → 0 | `write(::StructTypes.ArrayType, ::Vector{UInt8}, ::Int64, ::Int64, ::JSON3.Array{Int64, Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:181` |

##### `populateinds!` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:64`)

|  Change | Delta |             % | Samples | Caller                                                                                                                                                    | Location                                                           |
| ------: | ----: | ------------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| removed |    -3 | 100.0% → 0.0% |   3 → 0 | `getvalue(::Type{JSON3.Array}, ::Base.CodeUnits{UInt8, String}, ::SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}, ::Int64, ::UInt64)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:131` |

##### `promoteeltype` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl`)

| Change | Delta |      % | Samples | Caller                                                                                                                                                                                                                           | Location                                                          |
| -----: | ----: | -----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| -60.0% |    -3 | 100.0% |   5 → 2 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:218` |

##### `>>` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:573`)

| Change | Delta |      % | Samples | Caller | Location                                                                                   |
| -----: | ----: | -----: | ------: | ------ | ------------------------------------------------------------------------------------------ |
| -83.3% |   -10 | 100.0% |  12 → 2 | `>>`   | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:580` |

##### `*` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:88`)

|  Change | Delta |             % | Samples | Caller       | Location                                                                                    |
| ------: | ----: | ------------: | ------: | ------------ | ------------------------------------------------------------------------------------------- |
|  -38.2% |   -13 | 97.1% → 77.8% | 34 → 21 | `_setindex!` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:337` |
|     new |    +3 |  0.0% → 11.1% |   0 → 3 | `typeparser` | `../profiler-md-julia-depot/packages/Parsers/05lwR/src/ints.jl:32`                          |
| +200.0% |    +2 |  2.9% → 11.1% |   1 → 3 | `_muladd`    | `../profiler-md-julia-depot/packages/Parsers/05lwR/src/floats.jl:27`                        |

##### `-(::Int64, ::Int64)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:86`)

| Change | Delta |      % | Samples | Caller      | Location                                                           |
| -----: | ----: | -----: | ------: | ----------- | ------------------------------------------------------------------ |
| -43.8% |    -7 | 100.0% |  16 → 9 | `#write#79` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157` |

##### `resize!(::Vector{Int64}, ::Int64)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:1533`)

| Change | Delta |             % | Samples | Caller          | Location                                                           |
| -----: | ----: | ------------: | ------: | --------------- | ------------------------------------------------------------------ |
| -57.1% |    -4 | 53.8% → 50.0% |   7 → 3 | `getvalue`      | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:216` |
| -50.0% |    -3 | 46.2% → 50.0% |   6 → 3 | `populateinds!` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:64`  |

##### `BottomRF` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:83`)

| Change | Delta |      % | Samples | Caller      | Location                                                                                     |
| -----: | ----: | -----: | ------: | ----------- | -------------------------------------------------------------------------------------------- |
| -26.1% |    -6 | 100.0% | 23 → 17 | `MappingRF` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98` |

##### `unsafe_load` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/pointer.jl:151`)

| Change | Delta |      % |   Samples | Caller        | Location                                                                                       |
| -----: | ----: | -----: | --------: | ------------- | ---------------------------------------------------------------------------------------------- |
|  -1.0% |    -5 | 100.0% | 501 → 496 | `unsafe_load` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/pointer.jl:151` |

##### `isempty(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:1127`)

|  Change | Delta |            % | Samples | Caller                                                                       | Location    |
| ------: | ----: | -----------: | ------: | ---------------------------------------------------------------------------- | ----------- |
| removed |    -3 | 60.0% → 0.0% |   3 → 0 | `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` | `<unknown>` |
| removed |    -2 | 40.0% → 0.0% |   2 → 0 | `[unknown function]`                                                         | `<unknown>` |

##### `<=` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:560`)

| Change | Delta |              % | Samples | Caller                                                                                                                             | Location                                                          |
| -----: | ----: | -------------: | ------: | ---------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| -53.8% |    -7 | 100.0% → 75.0% |  13 → 6 | `populateinds!`                                                                                                                    | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:66` |
|    new |    +2 |   0.0% → 25.0% |   0 → 2 | `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40` |

### Total samples

#### Regressions

Functions with the largest increase in samples collected within the function and its callees. Categories account for at least 1.0% of self samples on the base or the current side.

|  Change | Delta |            % |   Samples | Function           | Location                                                                                              |
| ------: | ----: | -----------: | --------: | ------------------ | ----------------------------------------------------------------------------------------------------- |
| +190.9% |   +84 |  0.1% → 0.4% |  44 → 128 | `Dict`             | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:80`            |
| +120.6% |   +76 |  0.2% → 0.5% |  63 → 139 | `getvalue`         | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:126`                                    |
|  +14.8% |   +20 |  0.4% → 0.5% | 135 → 155 | `#write#81`        | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:73`                                     |
|  +12.6% |   +18 |  0.4% → 0.5% | 143 → 161 | `unsafe_string`    | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:130` |
|  +12.6% |   +18 |  0.4% → 0.5% | 143 → 161 | `String`           | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:145` |
|  +12.6% |   +18 |  0.4% → 0.5% | 143 → 161 | `string`           | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/io.jl:188`     |
|  +30.4% |   +17 |         0.2% |   56 → 73 | `&`                | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:393`            |
|  +17.6% |   +16 |  0.3% → 0.4% |  91 → 107 | `length_continued` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/pointer.jl`            |
|  +17.2% |   +15 |         0.3% |  87 → 102 | `\|`               | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:418`            |
|   +5.1% |   +14 |  0.8% → 0.9% | 272 → 286 | `BottomRF`         | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:84`          |
|   +3.6% |   +14 |  1.2% → 1.3% | 392 → 406 | `length(::String)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:540` |
|  +16.9% |   +14 |  0.2% → 0.3% |   83 → 97 | `string`           | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:88`                                     |
|  +33.3% |   +13 |  0.1% → 0.2% |   39 → 52 | `getindex`         | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:401`     |
| +130.0% |   +13 | <0.1% → 0.1% |   10 → 23 | `ncodeunits`       | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:161` |
| +111.1% |   +10 | <0.1% → 0.1% |    9 → 19 | `macro expansion`  | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/simdloop.jl`           |
|  +24.4% |   +10 |  0.1% → 0.2% |   41 → 51 | `getnontypemask`   | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:114`                                    |
|  +47.6% |   +10 |         0.1% |   21 → 31 | `setproperty!`     | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base_compiler.jl:61`   |
|   +4.7% |    +8 |  0.5% → 0.6% | 171 → 179 | `length_continued` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:561` |
| +100.0% |    +8 | <0.1% → 0.1% |    8 → 16 | `iterate`          | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/range.jl`              |
|  +66.7% |    +8 | <0.1% → 0.1% |   12 → 20 | `codeunit`         | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/strings.jl:21`                                   |

##### Third-party

|  Change | Delta |            % |   Samples | Function                                                                                                                                  | Location                                                              |
| ------: | ----: | -----------: | --------: | ----------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| +120.6% |   +76 |  0.2% → 0.5% |  63 → 139 | `getvalue`                                                                                                                                | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:126`    |
|  +14.8% |   +20 |  0.4% → 0.5% | 135 → 155 | `#write#81`                                                                                                                               | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:73`     |
|  +16.9% |   +14 |  0.2% → 0.3% |   83 → 97 | `string`                                                                                                                                  | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:88`     |
|  +24.4% |   +10 |  0.1% → 0.2% |   41 → 51 | `getnontypemask`                                                                                                                          | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:114`    |
|  +66.7% |    +8 | <0.1% → 0.1% |   12 → 20 | `codeunit`                                                                                                                                | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/strings.jl:21`   |
| +100.0% |    +7 |        <0.1% |    7 → 14 | `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Nothing})`                           | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:204`     |
|  +83.3% |    +5 |        <0.1% |    6 → 11 | `parsedigits`                                                                                                                             | `../profiler-md-julia-depot/packages/Parsers/05lwR/src/floats.jl`     |
|  +55.6% |    +5 |        <0.1% |    9 → 14 | `gettapelen`                                                                                                                              | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:118`    |
| +500.0% |    +5 |        <0.1% |     1 → 6 | `defaultminimum(::JSON3.Array{Int64, Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:11`     |
|   +4.7% |    +4 |         0.3% |   85 → 89 | `macro expansion`                                                                                                                         | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:355`    |
| +400.0% |    +4 |        <0.1% |     1 → 5 | `parsedigits`                                                                                                                             | `../profiler-md-julia-depot/packages/Parsers/05lwR/src/floats.jl:398` |
|  +27.3% |    +3 |        <0.1% |   11 → 14 | `iterate`                                                                                                                                 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:82`     |
|  +14.3% |    +3 |         0.1% |   21 → 24 | `parsedigits`                                                                                                                             | `../profiler-md-julia-depot/packages/Parsers/05lwR/src/floats.jl:302` |
|  +14.3% |    +3 |         0.1% |   21 → 24 | `typeparser`                                                                                                                              | `../profiler-md-julia-depot/packages/Parsers/05lwR/src/floats.jl:270` |
|     new |    +3 | 0.0% → <0.1% |     0 → 3 | `typeparser`                                                                                                                              | `../profiler-md-julia-depot/packages/Parsers/05lwR/src/ints.jl:32`    |
|  +10.0% |    +2 |         0.1% |   20 → 22 | `getvalue`                                                                                                                                | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:213`    |
|   +4.5% |    +2 |  0.1% → 0.2% |   44 → 46 | `write(::StructTypes.NumberType, ::Vector{UInt8}, ::Int64, ::Int64, ::Int64)`                                                             | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:224`    |
| +200.0% |    +2 |        <0.1% |     1 → 3 | `parsedigits`                                                                                                                             | `../profiler-md-julia-depot/packages/Parsers/05lwR/src/floats.jl:324` |
| +100.0% |    +2 |        <0.1% |     2 → 4 | `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.True})`                        | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:174`     |
| +200.0% |    +2 |        <0.1% |     1 → 3 | `_muladd`                                                                                                                                 | `../profiler-md-julia-depot/packages/Parsers/05lwR/src/floats.jl:27`  |

##### Standard library

|  Change | Delta |            % |   Samples | Function           | Location                                                                                              |
| ------: | ----: | -----------: | --------: | ------------------ | ----------------------------------------------------------------------------------------------------- |
| +190.9% |   +84 |  0.1% → 0.4% |  44 → 128 | `Dict`             | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:80`            |
|  +12.6% |   +18 |  0.4% → 0.5% | 143 → 161 | `unsafe_string`    | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:130` |
|  +12.6% |   +18 |  0.4% → 0.5% | 143 → 161 | `String`           | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:145` |
|  +12.6% |   +18 |  0.4% → 0.5% | 143 → 161 | `string`           | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/io.jl:188`     |
|  +30.4% |   +17 |         0.2% |   56 → 73 | `&`                | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:393`            |
|  +17.6% |   +16 |  0.3% → 0.4% |  91 → 107 | `length_continued` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/pointer.jl`            |
|  +17.2% |   +15 |         0.3% |  87 → 102 | `\|`               | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:418`            |
|   +5.1% |   +14 |  0.8% → 0.9% | 272 → 286 | `BottomRF`         | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:84`          |
|   +3.6% |   +14 |  1.2% → 1.3% | 392 → 406 | `length(::String)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:540` |
|  +33.3% |   +13 |  0.1% → 0.2% |   39 → 52 | `getindex`         | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:401`     |
| +130.0% |   +13 | <0.1% → 0.1% |   10 → 23 | `ncodeunits`       | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:161` |
| +111.1% |   +10 | <0.1% → 0.1% |    9 → 19 | `macro expansion`  | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/simdloop.jl`           |
|  +47.6% |   +10 |         0.1% |   21 → 31 | `setproperty!`     | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base_compiler.jl:61`   |
|   +4.7% |    +8 |  0.5% → 0.6% | 171 → 179 | `length_continued` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:561` |
| +100.0% |    +8 | <0.1% → 0.1% |    8 → 16 | `iterate`          | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/range.jl`              |
| +160.0% |    +8 |        <0.1% |    5 → 13 | `Pair`             | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base.jl:12`            |
| +116.7% |    +7 |        <0.1% |    6 → 13 | `Array`            | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:649`           |
|  +87.5% |    +7 |        <0.1% |    8 → 15 | `length_continued` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:568` |
| +100.0% |    +7 |        <0.1% |    7 → 14 | `getindex`         | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:436`          |
| +175.0% |    +7 |        <0.1% |    4 → 11 | `ifelse`           | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:854`     |

##### Native

|  Change | Delta |     % | Samples | Function                                                                                                                                                                                | Location    |
| ------: | ----: | ----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| +200.0% |    +2 | <0.1% |   1 → 3 | `(::JSON3.var\"#defaultminimum##0#defaultminimum##1\"{JSON3.Array{Int64, Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}}})(::Int64)` | `<unknown>` |

#### Improvements

Functions with the largest decrease in samples collected within the function and its callees. Categories account for at least 1.0% of self samples on the base or the current side.

| Change |  Delta |             % |         Samples | Function                                                                                                                           | Location                                                                                                          |
| -----: | -----: | ------------: | --------------: | ---------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| -11.0% | -2,839 | 76.9% → 75.5% | 25,792 → 22,953 | `parse_workload`                                                                                                                   | `./profile.jl:18`                                                                                                 |
| -11.0% | -2,838 | 76.9% → 75.5% | 25,794 → 22,956 | `[unknown function]`                                                                                                               | `<unknown>`                                                                                                       |
| -11.0% | -2,837 | 76.9% → 75.5% | 25,793 → 22,956 | `macro expansion`                                                                                                                  | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/stdlib/v1.13/Profile/src/Profile.jl:60` |
| -11.0% | -2,837 | 76.9% → 75.5% | 25,793 → 22,956 | `capture_cpu`                                                                                                                      | `./profile.jl:29`                                                                                                 |
| -11.0% | -2,837 | 76.9% → 75.5% | 25,793 → 22,956 | `eval(::Module, ::Any)`                                                                                                            | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:489`                       |
| -11.0% | -2,837 | 76.9% → 75.5% | 25,793 → 22,956 | `include_string(::typeof(identity), ::Module, ::String, ::String)`                                                                 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/loading.jl:2989`                   |
| -11.0% | -2,837 | 76.9% → 75.5% | 25,793 → 22,956 | `_include(::Function, ::Module, ::String)`                                                                                         | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/loading.jl:3083`                   |
| -11.0% | -2,837 | 76.9% → 75.5% | 25,793 → 22,956 | `include(::Module, ::String)`                                                                                                      | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base.jl:309`                       |
| -11.0% | -2,837 | 76.9% → 75.5% | 25,793 → 22,956 | `exec_options(::Base.JLOptions)`                                                                                                   | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/client.jl:234`                     |
| -11.0% | -2,837 | 76.9% → 75.5% | 25,793 → 22,956 | `_start()`                                                                                                                         | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/client.jl:570`                     |
| -11.3% | -2,703 | 71.5% → 70.0% | 23,994 → 21,291 | `#write#58`                                                                                                                        | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:40`                                                 |
| -12.1% | -2,159 | 53.3% → 51.7% | 17,884 → 15,725 | `write`                                                                                                                            | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:147`                                                |
| -12.0% | -2,148 | 53.3% → 51.7% | 17,880 → 15,732 | `#write#79`                                                                                                                        | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`                                                |
| -12.0% | -2,135 | 53.1% → 51.6% | 17,829 → 15,694 | `#write#81`                                                                                                                        | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`               |
| -14.1% | -1,020 | 21.6% → 20.4% |   7,236 → 6,216 | `_symbol`                                                                                                                          | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:1`                                                  |
| -14.1% | -1,020 | 21.6% → 20.4% |   7,236 → 6,216 | `getvalue`                                                                                                                         | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:187`                                                |
| -14.7% |   -766 | 15.5% → 14.6% |   5,206 → 4,440 | `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40`                                                 |
| -14.3% |   -751 | 15.6% → 14.8% |   5,242 → 4,491 | `getvalue`                                                                                                                         | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:127`                                                |
|  -8.9% |   -544 | 18.1% → 18.2% |   6,080 → 5,536 | `_foldl_impl`                                                                                                                      | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`                      |
|  -8.9% |   -542 | 18.1% → 18.2% |   6,080 → 5,538 | `MappingRF`                                                                                                                        | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98`                      |

##### Third-party

| Change |  Delta |             % |         Samples | Function                                                                                                                                                                             | Location                                                           |
| -----: | -----: | ------------: | --------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------ |
| -11.3% | -2,703 | 71.5% → 70.0% | 23,994 → 21,291 | `#write#58`                                                                                                                                                                          | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:40`  |
| -12.1% | -2,159 | 53.3% → 51.7% | 17,884 → 15,725 | `write`                                                                                                                                                                              | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:147` |
| -12.0% | -2,148 | 53.3% → 51.7% | 17,880 → 15,732 | `#write#79`                                                                                                                                                                          | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157` |
| -14.1% | -1,020 | 21.6% → 20.4% |   7,236 → 6,216 | `_symbol`                                                                                                                                                                            | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:1`   |
| -14.1% | -1,020 | 21.6% → 20.4% |   7,236 → 6,216 | `getvalue`                                                                                                                                                                           | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:187` |
| -14.7% |   -766 | 15.5% → 14.6% |   5,206 → 4,440 | `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})`                                                   | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40`  |
| -14.3% |   -751 | 15.6% → 14.8% |   5,242 → 4,491 | `getvalue`                                                                                                                                                                           | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:127` |
|  -8.9% |   -542 | 18.2% → 18.3% |   6,100 → 5,558 | `defaultminimum`                                                                                                                                                                     | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:12`  |
| -11.6% |   -457 | 11.7% → 11.5% |   3,938 → 3,481 | `iterate`                                                                                                                                                                            | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:81`  |
| -12.0% |   -420 | 10.4% → 10.1% |   3,504 → 3,084 | `getvalue`                                                                                                                                                                           | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:214` |
| -11.5% |   -385 |  10.0% → 9.7% |   3,348 → 2,963 | `iterate`                                                                                                                                                                            | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:78`  |
| -14.2% |   -255 |   5.4% → 5.1% |   1,801 → 1,546 | `getindex`                                                                                                                                                                           | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:163` |
| -11.1% |   -150 |   4.0% → 3.9% |   1,346 → 1,196 | `var\"#read#6\"(::Bool, ::Nothing, ::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.read), ::String)`                                                           | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:30`   |
| -11.1% |   -149 |   4.0% → 3.9% |   1,346 → 1,197 | `read`                                                                                                                                                                               | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:30`   |
|  -8.8% |   -107 |   3.6% → 3.7% |   1,217 → 1,110 | `write(::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)`                                                                                                       | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:340` |
|  -8.5% |   -103 |          3.6% |   1,205 → 1,102 | `var\"#write#98\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)`              | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:340` |
|  -8.4% |    -59 |          2.1% |       703 → 644 | `realloc!(::Vector{UInt8}, ::Int64, ::Int64)`                                                                                                                                        | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:51`  |
| -14.5% |    -34 |          0.7% |       235 → 201 | `getvalue`                                                                                                                                                                           | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:218` |
|  -2.5% |    -29 |   3.5% → 3.8% |   1,178 → 1,149 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:218`  |
|  -2.5% |    -29 |   3.5% → 3.8% |   1,178 → 1,149 | `read!`                                                                                                                                                                              | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:87`   |

##### Standard library

| Change |  Delta |             % |         Samples | Function                                                           | Location                                                                                                          |
| -----: | -----: | ------------: | --------------: | ------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| -11.0% | -2,837 | 76.9% → 75.5% | 25,793 → 22,956 | `macro expansion`                                                  | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/stdlib/v1.13/Profile/src/Profile.jl:60` |
| -11.0% | -2,837 | 76.9% → 75.5% | 25,793 → 22,956 | `eval(::Module, ::Any)`                                            | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:489`                       |
| -11.0% | -2,837 | 76.9% → 75.5% | 25,793 → 22,956 | `include_string(::typeof(identity), ::Module, ::String, ::String)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/loading.jl:2989`                   |
| -11.0% | -2,837 | 76.9% → 75.5% | 25,793 → 22,956 | `_include(::Function, ::Module, ::String)`                         | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/loading.jl:3083`                   |
| -11.0% | -2,837 | 76.9% → 75.5% | 25,793 → 22,956 | `include(::Module, ::String)`                                      | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base.jl:309`                       |
| -11.0% | -2,837 | 76.9% → 75.5% | 25,793 → 22,956 | `exec_options(::Base.JLOptions)`                                   | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/client.jl:234`                     |
| -11.0% | -2,837 | 76.9% → 75.5% | 25,793 → 22,956 | `_start()`                                                         | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/client.jl:570`                     |
| -12.0% | -2,135 | 53.1% → 51.6% | 17,829 → 15,694 | `#write#81`                                                        | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`               |
|  -8.9% |   -544 | 18.1% → 18.2% |   6,080 → 5,536 | `_foldl_impl`                                                      | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`                      |
|  -8.9% |   -542 | 18.1% → 18.2% |   6,080 → 5,538 | `MappingRF`                                                        | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98`                      |
|  -8.8% |   -537 | 18.2% → 18.3% |   6,094 → 5,557 | `_foldl_impl`                                                      | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:56`                      |
|  -8.8% |   -537 | 18.2% → 18.3% |   6,094 → 5,557 | `foldl_impl`                                                       | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:46`                      |
|  -8.8% |   -537 | 18.2% → 18.3% |   6,094 → 5,557 | `mapfoldl_impl`                                                    | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:42`                      |
|  -8.8% |   -537 | 18.2% → 18.3% |   6,094 → 5,557 | `#mapfoldl#271`                                                    | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:173`                     |
|  -8.8% |   -537 | 18.2% → 18.3% |   6,094 → 5,557 | `mapfoldl`                                                         | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:173`                     |
|  -8.8% |   -537 | 18.2% → 18.3% |   6,094 → 5,557 | `#mapreduce#275`                                                   | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:306`                     |
|  -8.8% |   -537 | 18.2% → 18.3% |   6,094 → 5,557 | `mapreduce`                                                        | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:306`                     |
|  -8.8% |   -537 | 18.2% → 18.3% |   6,094 → 5,557 | `#sum#278`                                                         | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:535`                     |
|  -8.8% |   -537 | 18.2% → 18.3% |   6,094 → 5,557 | `sum`                                                              | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:535`                     |
|  -8.8% |   -537 | 18.2% → 18.3% |   6,094 → 5,557 | `sum`                                                              | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:564`                     |

##### Unknown

| Change | Delta |             % |       Samples | Function      | Location    |
| -----: | ----: | ------------: | ------------: | ------------- | ----------- |
|  -4.1% |  -315 | 23.1% → 24.5% | 7,750 → 7,435 | `(anonymous)` | `<unknown>` |

##### Native

| Change |  Delta |             % |         Samples | Function                                                                     | Location    |
| -----: | -----: | ------------: | --------------: | ---------------------------------------------------------------------------- | ----------- |
| -11.0% | -2,838 | 76.9% → 75.5% | 25,794 → 22,956 | `[unknown function]`                                                         | `<unknown>` |
|  -8.9% |   -540 | 18.1% → 18.2% |   6,062 → 5,522 | `#defaultminimum##0`                                                         | `<unknown>` |
|  -8.9% |   -539 | 18.1% → 18.2% |   6,081 → 5,542 | `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` | `<unknown>` |

#### Callers

Callers with the largest change in contribution to each function's total samples. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `Dict` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:80`)

|  Change | Delta |      % |  Samples | Caller     | Location                                                           |
| ------: | ----: | -----: | -------: | ---------- | ------------------------------------------------------------------ |
| +190.9% |   +84 | 100.0% | 44 → 128 | `getvalue` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:126` |

##### `getvalue` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:126`)

|  Change | Delta |             % | Samples | Caller     | Location                                                           |
| ------: | ----: | ------------: | ------: | ---------- | ------------------------------------------------------------------ |
| +159.4% |   +51 | 50.8% → 59.7% | 32 → 83 | `getindex` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:163` |
|  +80.6% |   +25 | 49.2% → 40.3% | 31 → 56 | `getvalue` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:214` |

##### `#write#81` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:73`)

|  Change | Delta |             % |   Samples | Caller               | Location                                                           |
| ------: | ----: | ------------: | --------: | -------------------- | ------------------------------------------------------------------ |
|  +13.4% |   +18 | 99.3% → 98.1% | 134 → 152 | `[unknown function]` | `<unknown>`                                                        |
| +200.0% |    +2 |   0.7% → 1.9% |     1 → 3 | `#write#79`          | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157` |

##### `unsafe_string` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:130`)

| Change | Delta |      % |   Samples | Caller   | Location                                                                                              |
| -----: | ----: | -----: | --------: | -------- | ----------------------------------------------------------------------------------------------------- |
| +12.6% |   +18 | 100.0% | 143 → 161 | `String` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:145` |

##### `String` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:145`)

| Change | Delta |      % |   Samples | Caller   | Location                                                                                          |
| -----: | ----: | -----: | --------: | -------- | ------------------------------------------------------------------------------------------------- |
| +12.6% |   +18 | 100.0% | 143 → 161 | `string` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/io.jl:188` |

##### `string` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/io.jl:188`)

| Change | Delta |      % |   Samples | Caller      | Location                                                           |
| -----: | ----: | -----: | --------: | ----------- | ------------------------------------------------------------------ |
| +12.6% |   +18 | 100.0% | 143 → 161 | `#write#79` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157` |

##### `&` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:393`)

|  Change | Delta |             % | Samples | Caller                                                     | Location                                                                                    |
| ------: | ----: | ------------: | ------: | ---------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
|  +24.4% |   +10 | 73.2% → 69.9% | 41 → 51 | `getnontypemask`                                           | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:114`                          |
|  +50.0% |    +7 | 25.0% → 28.8% | 14 → 21 | `ht_keyindex2_shorthash!(::Dict{Symbol, Int64}, ::Symbol)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:267` |
| removed |    -1 |   1.8% → 0.0% |   1 → 0 | `isobject`                                                 | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:60`                           |
|     new |    +1 |   0.0% → 1.4% |   0 → 1 | `getproperty`                                              | `../profiler-md-julia-depot/packages/Parsers/05lwR/src/utils.jl:467`                        |

##### `length_continued` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/pointer.jl`)

| Change | Delta |      % |  Samples | Caller             | Location                                                                                              |
| -----: | ----: | -----: | -------: | ------------------ | ----------------------------------------------------------------------------------------------------- |
| +17.6% |   +16 | 100.0% | 91 → 107 | `length(::String)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:540` |

##### `|` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:418`)

|  Change | Delta |             % | Samples | Caller          | Location                                                                                    |
| ------: | ----: | ------------: | ------: | --------------- | ------------------------------------------------------------------------------------------- |
|  +16.9% |   +14 | 95.4% → 95.1% | 83 → 97 | `string`        | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:88`                           |
|  -66.7% |    -2 |   3.4% → 1.0% |   3 → 1 | `\|`            | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:1058` |
|     new |    +2 |   0.0% → 2.0% |   0 → 2 | `parsefrac`     | `../profiler-md-julia-depot/packages/Parsers/05lwR/src/floats.jl:496`                       |
| +100.0% |    +1 |   1.1% → 2.0% |   1 → 2 | `promoteeltype` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:96`                           |

##### `BottomRF` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:84`)

| Change | Delta |             % |   Samples | Caller               | Location                                                                                     |
| -----: | ----: | ------------: | --------: | -------------------- | -------------------------------------------------------------------------------------------- |
|  +6.7% |   +18 | 98.2% → 99.7% | 267 → 285 | `[unknown function]` | `<unknown>`                                                                                  |
| -80.0% |    -4 |   1.8% → 0.3% |     5 → 1 | `MappingRF`          | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98` |

##### `length(::String)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:540`)

| Change | Delta |      % |   Samples | Caller           | Location          |
| -----: | ----: | -----: | --------: | ---------------- | ----------------- |
|  +3.6% |   +14 | 100.0% | 392 → 406 | `parse_workload` | `./profile.jl:18` |

##### `string` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:88`)

| Change | Delta |             % | Samples | Caller                                                                                                                                                                                                                           | Location                                                          |
| -----: | ----: | ------------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| +33.3% |    +7 | 25.3% → 28.9% | 21 → 28 | `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{String})`                                                                                                                   | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:142` |
| +11.3% |    +7 | 74.7% → 71.1% | 62 → 69 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:218` |

##### `getindex` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:401`)

|  Change | Delta |             % | Samples | Caller          | Location                                                                                    |
| ------: | ----: | ------------: | ------: | --------------- | ------------------------------------------------------------------------------------------- |
|  +20.0% |    +5 | 64.1% → 57.7% | 25 → 30 | `isslotempty`   | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:134` |
| +500.0% |    +5 |  2.6% → 11.5% |   1 → 6 | `isslotmissing` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:136` |
| +150.0% |    +3 |   5.1% → 9.6% |   2 → 5 | `isslotfilled`  | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:135` |

##### `ncodeunits` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:161`)

|  Change | Delta |             % | Samples | Caller                                                                                                                                                                  | Location                                                                                             |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| +133.3% |   +12 | 90.0% → 91.3% |  9 → 21 | `var\"#write#98\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:340`                                   |
|     new |    +2 |   0.0% → 8.7% |   0 → 2 | `checkbounds`                                                                                                                                                           | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/basic.jl:204` |
| removed |    -1 |  10.0% → 0.0% |   1 → 0 | `defaultminimum(::String)`                                                                                                                                              | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:5`                                     |

##### `macro expansion` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/simdloop.jl`)

|  Change | Delta |             % | Samples | Caller                                                                                                                                                                  | Location                                                           |
| ------: | ----: | ------------: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| +112.5% |    +9 | 88.9% → 89.5% |  8 → 17 | `escapelength`                                                                                                                                                          | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:331` |
| +100.0% |    +1 | 11.1% → 10.5% |   1 → 2 | `var\"#write#98\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:340` |

##### `getnontypemask` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:114`)

| Change | Delta |             % | Samples | Caller     | Location                                                           |
| -----: | ----: | ------------: | ------: | ---------- | ------------------------------------------------------------------ |
| +24.0% |    +6 | 61.0% → 60.8% | 25 → 31 | `getvalue` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl`     |
| +83.3% |    +5 | 14.6% → 21.6% |  6 → 11 | `getvalue` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:126` |
| -25.0% |    -2 | 19.5% → 11.8% |   8 → 6 | `length`   | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:38`  |
| +50.0% |    +1 |   4.9% → 5.9% |   2 → 3 | `getvalue` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:193` |

##### `setproperty!` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base_compiler.jl:61`)

|  Change | Delta |             % | Samples | Caller                                    | Location                                                                                    |
| ------: | ----: | ------------: | ------: | ----------------------------------------- | ------------------------------------------------------------------------------------------- |
| +133.3% |   +12 | 42.9% → 67.7% |  9 → 21 | `rehash!(::Dict{Symbol, Int64}, ::Int64)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:138` |
|  -20.0% |    -1 | 23.8% → 12.9% |   5 → 4 | `_setindex!`                              | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:329` |
| removed |    -1 |   4.8% → 0.0% |   1 → 0 | `_setindex!`                              | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:325` |

##### `length_continued` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:561`)

| Change | Delta |      % |   Samples | Caller             | Location                                                                                              |
| -----: | ----: | -----: | --------: | ------------------ | ----------------------------------------------------------------------------------------------------- |
|  +4.7% |    +8 | 100.0% | 171 → 179 | `length(::String)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:540` |

##### `iterate` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/range.jl`)

|  Change | Delta |             % | Samples | Caller      | Location                                                                                            |
| ------: | ----: | ------------: | ------: | ----------- | --------------------------------------------------------------------------------------------------- |
| +150.0% |    +9 | 75.0% → 93.8% |  6 → 15 | `#write#81` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:73`                                   |
|  -50.0% |    -1 |  25.0% → 6.3% |   2 → 1 | `#write#81` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl` |

##### `codeunit` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/strings.jl:21`)

| Change | Delta |      % | Samples | Caller                            | Location                                                            |
| -----: | ----: | -----: | ------: | --------------------------------- | ------------------------------------------------------------------- |
| +66.7% |    +8 | 100.0% | 12 → 20 | `unescape(::JSON3.PointerString)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/strings.jl:48` |

##### `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Nothing})` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:204`)

| Change | Delta |              % | Samples | Caller                                                                                                                                                                      | Location                                                         |
| -----: | ----: | -------------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| +57.1% |    +4 | 100.0% → 78.6% |  7 → 11 | `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)`                | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:87` |
|    new |    +3 |   0.0% → 21.4% |   0 → 3 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:87` |

##### `parsedigits` (`../profiler-md-julia-depot/packages/Parsers/05lwR/src/floats.jl`)

| Change | Delta |      % | Samples | Caller        | Location                                                              |
| -----: | ----: | -----: | ------: | ------------- | --------------------------------------------------------------------- |
| +83.3% |    +5 | 100.0% |  6 → 11 | `parsedigits` | `../profiler-md-julia-depot/packages/Parsers/05lwR/src/floats.jl:302` |

##### `gettapelen` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:118`)

| Change | Delta |              % | Samples | Caller          | Location                                                          |
| -----: | ----: | -------------: | ------: | --------------- | ----------------------------------------------------------------- |
| +33.3% |    +3 | 100.0% → 85.7% |  9 → 12 | `iterate`       | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:82` |
|    new |    +2 |   0.0% → 14.3% |   0 → 2 | `populateinds!` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:68` |

##### `defaultminimum(::JSON3.Array{Int64, Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:11`)

|  Change | Delta |      % | Samples | Caller                                                                       | Location    |
| ------: | ----: | -----: | ------: | ---------------------------------------------------------------------------- | ----------- |
| +500.0% |    +5 | 100.0% |   1 → 6 | `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` | `<unknown>` |

##### `macro expansion` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:355`)

| Change | Delta |      % | Samples | Caller            | Location                                                                                       |
| -----: | ----: | -----: | ------: | ----------------- | ---------------------------------------------------------------------------------------------- |
|  +4.7% |    +4 | 100.0% | 85 → 89 | `macro expansion` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/simdloop.jl:77` |

##### `parsedigits` (`../profiler-md-julia-depot/packages/Parsers/05lwR/src/floats.jl:398`)

|  Change | Delta |      % | Samples | Caller        | Location                                                              |
| ------: | ----: | -----: | ------: | ------------- | --------------------------------------------------------------------- |
| +400.0% |    +4 | 100.0% |   1 → 5 | `parsedigits` | `../profiler-md-julia-depot/packages/Parsers/05lwR/src/floats.jl:302` |

##### `iterate` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:82`)

| Change | Delta |             % | Samples | Caller      | Location                                                           |
| -----: | ----: | ------------: | ------: | ----------- | ------------------------------------------------------------------ |
|    new |    +4 |  0.0% → 28.6% |   0 → 4 | `iterate`   | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:75`  |
| -11.1% |    -1 | 81.8% → 57.1% |   9 → 8 | `#write#79` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157` |

##### `parsedigits` (`../profiler-md-julia-depot/packages/Parsers/05lwR/src/floats.jl:302`)

| Change | Delta |      % | Samples | Caller       | Location                                                              |
| -----: | ----: | -----: | ------: | ------------ | --------------------------------------------------------------------- |
| +14.3% |    +3 | 100.0% | 21 → 24 | `typeparser` | `../profiler-md-julia-depot/packages/Parsers/05lwR/src/floats.jl:270` |

##### `typeparser` (`../profiler-md-julia-depot/packages/Parsers/05lwR/src/floats.jl:270`)

| Change | Delta |      % | Samples | Caller                                                                                                                | Location                                                                  |
| -----: | ----: | -----: | ------: | --------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| +14.3% |    +3 | 100.0% | 21 → 24 | `typeparser(::Type{Float64}, ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Int16, ::Parsers.Options)` | `../profiler-md-julia-depot/packages/Parsers/05lwR/src/components.jl:392` |

##### `typeparser` (`../profiler-md-julia-depot/packages/Parsers/05lwR/src/ints.jl:32`)

| Change | Delta |             % | Samples | Caller                                                                                                              | Location                                                                  |
| -----: | ----: | ------------: | ------: | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `typeparser(::Type{Int64}, ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Int16, ::Parsers.Options)` | `../profiler-md-julia-depot/packages/Parsers/05lwR/src/components.jl:392` |

##### `getvalue` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:213`)

| Change | Delta |      % | Samples | Caller    | Location                                                          |
| -----: | ----: | -----: | ------: | --------- | ----------------------------------------------------------------- |
| +10.0% |    +2 | 100.0% | 20 → 22 | `iterate` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:81` |

##### `write(::StructTypes.NumberType, ::Vector{UInt8}, ::Int64, ::Int64, ::Int64)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:224`)

| Change | Delta |      % | Samples | Caller      | Location                                                           |
| -----: | ----: | -----: | ------: | ----------- | ------------------------------------------------------------------ |
|  +4.5% |    +2 | 100.0% | 44 → 46 | `#write#79` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157` |

##### `parsedigits` (`../profiler-md-julia-depot/packages/Parsers/05lwR/src/floats.jl:324`)

|  Change | Delta |      % | Samples | Caller        | Location                                                              |
| ------: | ----: | -----: | ------: | ------------- | --------------------------------------------------------------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `parsedigits` | `../profiler-md-julia-depot/packages/Parsers/05lwR/src/floats.jl:302` |

##### `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.True})` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:174`)

|  Change | Delta |              % | Samples | Caller                                                                                                                                                                      | Location                                                         |
| ------: | ----: | -------------: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| +300.0% |    +3 | 50.0% → 100.0% |   1 → 4 | `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)`                | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:87` |
| removed |    -1 |   50.0% → 0.0% |   1 → 0 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:87` |

##### `_muladd` (`../profiler-md-julia-depot/packages/Parsers/05lwR/src/floats.jl:27`)

|  Change | Delta |      % | Samples | Caller        | Location                                                              |
| ------: | ----: | -----: | ------: | ------------- | --------------------------------------------------------------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `parsedigits` | `../profiler-md-julia-depot/packages/Parsers/05lwR/src/floats.jl:324` |

##### `Pair` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base.jl:12`)

|  Change | Delta |      % | Samples | Caller    | Location                                                          |
| ------: | ----: | -----: | ------: | --------- | ----------------------------------------------------------------- |
| +160.0% |    +8 | 100.0% |  5 → 13 | `iterate` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:81` |

##### `Array` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:649`)

|  Change | Delta |              % | Samples | Caller     | Location                                                                                     |
| ------: | ----: | -------------: | ------: | ---------- | -------------------------------------------------------------------------------------------- |
| +100.0% |    +6 | 100.0% → 92.3% |  6 → 12 | `getindex` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:436` |
|     new |    +1 |    0.0% → 7.7% |   0 → 1 | `Array`    | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:661`  |

##### `length_continued` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:568`)

| Change | Delta |      % | Samples | Caller             | Location                                                                                              |
| -----: | ----: | -----: | ------: | ------------------ | ----------------------------------------------------------------------------------------------------- |
| +87.5% |    +7 | 100.0% |  8 → 15 | `length(::String)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:540` |

##### `getindex` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:436`)

|  Change | Delta |      % | Samples | Caller                                                                                                                                                    | Location                                                           |
| ------: | ----: | -----: | ------: | --------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| +100.0% |    +7 | 100.0% |  7 → 14 | `getvalue(::Type{JSON3.Array}, ::Base.CodeUnits{UInt8, String}, ::SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}, ::Int64, ::UInt64)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:131` |

##### `ifelse` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:854`)

|  Change | Delta |            % | Samples | Caller                   | Location                                                           |
| ------: | ----: | -----------: | ------: | ------------------------ | ------------------------------------------------------------------ |
|     new |    +8 | 0.0% → 72.7% |   0 → 8 | `gettapelen`             | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:118` |
| removed |    -1 | 25.0% → 0.0% |   1 → 0 | `defaultminimum(::Bool)` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:4`   |

##### `(::JSON3.var\"#defaultminimum##0#defaultminimum##1\"{JSON3.Array{Int64, Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}}})(::Int64)` (`<unknown>`)

|  Change | Delta |      % | Samples | Caller      | Location                                                                                     |
| ------: | ----: | -----: | ------: | ----------- | -------------------------------------------------------------------------------------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `MappingRF` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98` |

##### `parse_workload` (`./profile.jl:18`)

| Change |  Delta |      % |         Samples | Caller            | Location                                                                                                          |
| -----: | -----: | -----: | --------------: | ----------------- | ----------------------------------------------------------------------------------------------------------------- |
| -11.0% | -2,839 | 100.0% | 25,792 → 22,953 | `macro expansion` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/stdlib/v1.13/Profile/src/Profile.jl:60` |

##### `[unknown function]` (`<unknown>`)

| Change |  Delta |             % |         Samples | Caller                  | Location                                                                                            |
| -----: | -----: | ------------: | --------------: | ----------------------- | --------------------------------------------------------------------------------------------------- |
| -11.0% | -2,837 |        100.0% | 25,793 → 22,956 | `eval(::Module, ::Any)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:489`         |
| -11.3% | -2,704 | 93.0% → 92.8% | 23,997 → 21,293 | `parse_workload`        | `./profile.jl:18`                                                                                   |
| -11.9% | -2,130 | 69.2% → 68.4% | 17,838 → 15,708 | `#write#79`             | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`                                  |
| -11.8% | -2,020 | 66.2% → 65.6% | 17,077 → 15,057 | `#write#81`             | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl` |
|  -9.0% |   -544 | 23.5% → 24.1% |   6,071 → 5,527 | `_foldl_impl`           | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`        |

##### `macro expansion` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/stdlib/v1.13/Profile/src/Profile.jl:60`)

| Change |  Delta |      % |         Samples | Caller        | Location          |
| -----: | -----: | -----: | --------------: | ------------- | ----------------- |
| -11.0% | -2,837 | 100.0% | 25,793 → 22,956 | `capture_cpu` | `./profile.jl:29` |

##### `capture_cpu` (`./profile.jl:29`)

| Change |  Delta |      % |         Samples | Caller               | Location    |
| -----: | -----: | -----: | --------------: | -------------------- | ----------- |
| -11.0% | -2,837 | 100.0% | 25,793 → 22,956 | `[unknown function]` | `<unknown>` |

##### `eval(::Module, ::Any)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:489`)

| Change |  Delta |      % |         Samples | Caller                                                             | Location                                                                                        |
| -----: | -----: | -----: | --------------: | ------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------- |
| -11.0% | -2,837 | 100.0% | 25,793 → 22,956 | `include_string(::typeof(identity), ::Module, ::String, ::String)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/loading.jl:2989` |

##### `include_string(::typeof(identity), ::Module, ::String, ::String)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/loading.jl:2989`)

| Change |  Delta |      % |         Samples | Caller                                     | Location                                                                                        |
| -----: | -----: | -----: | --------------: | ------------------------------------------ | ----------------------------------------------------------------------------------------------- |
| -11.0% | -2,837 | 100.0% | 25,793 → 22,956 | `_include(::Function, ::Module, ::String)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/loading.jl:3083` |

##### `_include(::Function, ::Module, ::String)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/loading.jl:3083`)

| Change |  Delta |      % |         Samples | Caller                        | Location                                                                                    |
| -----: | -----: | -----: | --------------: | ----------------------------- | ------------------------------------------------------------------------------------------- |
| -11.0% | -2,837 | 100.0% | 25,793 → 22,956 | `include(::Module, ::String)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base.jl:309` |

##### `include(::Module, ::String)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base.jl:309`)

| Change |  Delta |      % |         Samples | Caller                           | Location                                                                                      |
| -----: | -----: | -----: | --------------: | -------------------------------- | --------------------------------------------------------------------------------------------- |
| -11.0% | -2,837 | 100.0% | 25,793 → 22,956 | `exec_options(::Base.JLOptions)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/client.jl:234` |

##### `exec_options(::Base.JLOptions)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/client.jl:234`)

| Change |  Delta |      % |         Samples | Caller     | Location                                                                                      |
| -----: | -----: | -----: | --------------: | ---------- | --------------------------------------------------------------------------------------------- |
| -11.0% | -2,837 | 100.0% | 25,793 → 22,956 | `_start()` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/client.jl:570` |

##### `#write#58` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:40`)

| Change |  Delta |      % |         Samples | Caller               | Location    |
| -----: | -----: | -----: | --------------: | -------------------- | ----------- |
| -11.3% | -2,703 | 100.0% | 23,994 → 21,291 | `[unknown function]` | `<unknown>` |

##### `write` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:147`)

| Change |  Delta |      % |         Samples | Caller      | Location                                                          |
| -----: | -----: | -----: | --------------: | ----------- | ----------------------------------------------------------------- |
| -12.1% | -2,159 | 100.0% | 17,884 → 15,725 | `#write#58` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:40` |

##### `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`)

|  Change |  Delta |              % |         Samples | Caller               | Location                                                                                            |
| ------: | -----: | -------------: | --------------: | -------------------- | --------------------------------------------------------------------------------------------------- |
|  -12.1% | -2,156 | 100.0% → 99.9% | 17,879 → 15,723 | `write`              | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:147`                                  |
|  -11.7% | -1,998 |  95.4% → 95.7% | 17,050 → 15,052 | `[unknown function]` | `<unknown>`                                                                                         |
| +350.0% |     +7 |   <0.1% → 0.1% |           2 → 9 | `#write#79`          | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`                                  |
|     new |     +1 |   0.0% → <0.1% |           0 → 1 | `#write#81`          | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl` |

##### `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`)

| Change |  Delta |      % |         Samples | Caller               | Location    |
| -----: | -----: | -----: | --------------: | -------------------- | ----------- |
| -12.0% | -2,135 | 100.0% | 17,829 → 15,694 | `[unknown function]` | `<unknown>` |

##### `_symbol` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:1`)

| Change |  Delta |      % |       Samples | Caller     | Location                                                           |
| -----: | -----: | -----: | ------------: | ---------- | ------------------------------------------------------------------ |
| -14.1% | -1,020 | 100.0% | 7,236 → 6,216 | `getvalue` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:187` |

##### `getvalue` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:187`)

| Change | Delta |             % |       Samples | Caller                                                                                                                             | Location                                                          |
| -----: | ----: | ------------: | ------------: | ---------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| -16.2% |  -634 | 54.1% → 52.8% | 3,915 → 3,281 | `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40` |
| -11.6% |  -385 | 45.9% → 47.2% | 3,318 → 2,933 | `iterate`                                                                                                                          | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:78` |
| -33.3% |    -1 |         <0.1% |         3 → 2 | `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, Vector{UInt64}})`                                                     | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40` |

##### `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40`)

|  Change | Delta |             % |       Samples | Caller               | Location                                                                                     |
| ------: | ----: | ------------: | ------------: | -------------------- | -------------------------------------------------------------------------------------------- |
|  -14.6% |  -759 | 99.8% → 99.9% | 5,196 → 4,437 | `getvalue`           | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:127`                           |
| removed |    -2 |  <0.1% → 0.0% |         2 → 0 | `defaultminimum`     | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/write.jl:12`                            |
|  -40.0% |    -2 |          0.1% |         5 → 3 | `[unknown function]` | `<unknown>`                                                                                  |
| removed |    -2 |  <0.1% → 0.0% |         2 → 0 | `foldl_impl`         | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:46` |
| removed |    -1 |  <0.1% → 0.0% |         1 → 0 | `_symbol`            | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:1`                             |

##### `getvalue` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:127`)

| Change | Delta |             % |       Samples | Caller     | Location                                                           |
| -----: | ----: | ------------: | ------------: | ---------- | ------------------------------------------------------------------ |
| -12.8% |  -445 | 66.3% → 67.4% | 3,473 → 3,028 | `getvalue` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:214` |
| -17.3% |  -306 | 33.7% → 32.6% | 1,769 → 1,463 | `getindex` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:163` |

##### `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`)

|  Change | Delta |            % |       Samples | Caller                                                                       | Location                                                                                              |
| ------: | ----: | -----------: | ------------: | ---------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
|   -8.9% |  -543 |       100.0% | 6,079 → 5,536 | `foldl_impl`                                                                 | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:46`          |
|  -33.3% |    -1 |        <0.1% |         3 → 2 | `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` | `<unknown>`                                                                                           |
| removed |    -1 | <0.1% → 0.0% |         1 → 0 | `unsafe_string`                                                              | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:126` |

##### `MappingRF` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98`)

| Change | Delta |           % |       Samples | Caller               | Location                                                                                     |
| -----: | ----: | ----------: | ------------: | -------------------- | -------------------------------------------------------------------------------------------- |
|  -8.9% |  -544 |      100.0% | 6,080 → 5,536 | `_foldl_impl`        | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:56` |
|  -7.5% |   -27 | 5.9% → 6.0% |     359 → 332 | `_foldl_impl`        | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60` |
| -38.5% |    -5 | 0.2% → 0.1% |        13 → 8 | `[unknown function]` | `<unknown>`                                                                                  |

##### `defaultminimum` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:12`)

| Change | Delta |             % |       Samples | Caller               | Location                                                          |
| -----: | ----: | ------------: | ------------: | -------------------- | ----------------------------------------------------------------- |
|  -8.9% |  -542 |        100.0% | 6,100 → 5,558 | `#write#58`          | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:40` |
|  -8.6% |  -468 | 89.0% → 89.2% | 5,426 → 4,958 | `#defaultminimum##0` | `<unknown>`                                                       |

##### `iterate` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:81`)

| Change | Delta |             % |       Samples | Caller      | Location                                                                                         |
| -----: | ----: | ------------: | ------------: | ----------- | ------------------------------------------------------------------------------------------------ |
| -13.8% |  -264 | 48.6% → 47.4% | 1,915 → 1,651 | `#write#79` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`                               |
| -13.3% |  -222 | 42.5% → 41.7% | 1,675 → 1,453 | `iterate`   | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/iterators.jl:697` |
|  +8.3% |   +29 |  8.8% → 10.8% |     348 → 377 | `iterate`   | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:75`                                |

##### `getvalue` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:214`)

| Change | Delta |      % |       Samples | Caller    | Location                                                          |
| -----: | ----: | -----: | ------------: | --------- | ----------------------------------------------------------------- |
| -12.0% |  -420 | 100.0% | 3,504 → 3,084 | `iterate` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:81` |

##### `iterate` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:78`)

| Change | Delta |             % |       Samples | Caller      | Location                                                                                         |
| -----: | ----: | ------------: | ------------: | ----------- | ------------------------------------------------------------------------------------------------ |
| -15.0% |  -198 | 39.3% → 37.7% | 1,316 → 1,118 | `iterate`   | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/iterators.jl:697` |
|  -8.5% |  -144 | 50.5% → 52.2% | 1,692 → 1,548 | `#write#79` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`                               |
| -12.6% |   -43 | 10.2% → 10.0% |     340 → 297 | `iterate`   | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:75`                                |

##### `getindex` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:163`)

| Change | Delta |             % |     Samples | Caller               | Location                                                                                                 |
| -----: | ----: | ------------: | ----------: | -------------------- | -------------------------------------------------------------------------------------------------------- |
| -20.1% |  -223 | 61.7% → 57.4% | 1,111 → 888 | `isassigned`         | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:1641` |
|  -5.2% |   -18 | 19.4% → 21.4% |   349 → 331 | `#defaultminimum##0` | `<unknown>`                                                                                              |
|  -4.1% |   -14 | 18.9% → 21.2% |   341 → 327 | `#write#81`          | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`      |

##### `var\"#read#6\"(::Bool, ::Nothing, ::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.read), ::String)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:30`)

| Change | Delta |      % |       Samples | Caller | Location                                                         |
| -----: | ----: | -----: | ------------: | ------ | ---------------------------------------------------------------- |
| -11.1% |  -150 | 100.0% | 1,346 → 1,196 | `read` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:30` |

##### `read` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:30`)

| Change | Delta |      % |       Samples | Caller           | Location          |
| -----: | ----: | -----: | ------------: | ---------------- | ----------------- |
| -11.1% |  -149 | 100.0% | 1,346 → 1,197 | `parse_workload` | `./profile.jl:18` |

##### `write(::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:340`)

| Change | Delta |      % |       Samples | Caller      | Location                                                           |
| -----: | ----: | -----: | ------------: | ----------- | ------------------------------------------------------------------ |
|  -8.8% |  -107 | 100.0% | 1,217 → 1,110 | `#write#79` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157` |

##### `var\"#write#98\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:340`)

| Change | Delta |             % |       Samples | Caller                                                                         | Location                                                           |
| -----: | ----: | ------------: | ------------: | ------------------------------------------------------------------------------ | ------------------------------------------------------------------ |
|  -8.8% |  -104 | 98.3% → 98.0% | 1,184 → 1,080 | `write(::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:340` |
|  +4.8% |    +1 |   1.7% → 2.0% |       21 → 22 | `#write#79`                                                                    | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157` |

##### `realloc!(::Vector{UInt8}, ::Int64, ::Int64)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:51`)

|  Change | Delta |             % |   Samples | Caller                                                                                                                                                                  | Location                                                           |
| ------: | ----: | ------------: | --------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
|   -8.9% |   -62 | 99.4% → 98.9% | 699 → 637 | `var\"#write#98\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:340` |
|  +33.3% |    +1 |   0.4% → 0.6% |     3 → 4 | `var\"#write#86\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.NumberType, ::Vector{UInt8}, ::Int64, ::Int64, ::Int64)`  | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:224` |
| +100.0% |    +1 |   0.1% → 0.3% |     1 → 2 | `write(::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)`                                                                                          | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:340` |
|     new |    +1 |   0.0% → 0.2% |     0 → 1 | `write(::StructTypes.NumberType, ::Vector{UInt8}, ::Int64, ::Int64, ::Int64)`                                                                                           | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:224` |

##### `getvalue` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:218`)

| Change | Delta |      % |   Samples | Caller    | Location                                                          |
| -----: | ----: | -----: | --------: | --------- | ----------------------------------------------------------------- |
| -14.5% |   -34 | 100.0% | 235 → 201 | `iterate` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:81` |

##### `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:218`)

|  Change | Delta |              % |       Samples | Caller                                                                                                                                                       | Location                                                         |
| ------: | ----: | -------------: | ------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------- |
|   -2.4% |   -28 | 99.9% → 100.0% | 1,177 → 1,149 | `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:87` |
| removed |    -1 |    0.1% → 0.0% |         1 → 0 | `read!`                                                                                                                                                      | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:87` |

##### `read!` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:87`)

| Change | Delta |      % |       Samples | Caller                                                                                                                     | Location                                                         |
| -----: | ----: | -----: | ------------: | -------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
|  -2.5% |   -29 | 100.0% | 1,178 → 1,149 | `var\"#read#6\"(::Bool, ::Nothing, ::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.read), ::String)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:30` |

##### `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:56`)

| Change | Delta |      % |       Samples | Caller       | Location                                                                                     |
| -----: | ----: | -----: | ------------: | ------------ | -------------------------------------------------------------------------------------------- |
|  -8.8% |  -537 | 100.0% | 6,094 → 5,557 | `foldl_impl` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:46` |

##### `foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:46`)

| Change | Delta |      % |       Samples | Caller          | Location                                                                                     |
| -----: | ----: | -----: | ------------: | --------------- | -------------------------------------------------------------------------------------------- |
|  -8.8% |  -537 | 100.0% | 6,094 → 5,557 | `mapfoldl_impl` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:42` |

##### `mapfoldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:42`)

| Change | Delta |      % |       Samples | Caller          | Location                                                                                      |
| -----: | ----: | -----: | ------------: | --------------- | --------------------------------------------------------------------------------------------- |
|  -8.8% |  -537 | 100.0% | 6,094 → 5,557 | `#mapfoldl#271` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:173` |

##### `#mapfoldl#271` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:173`)

| Change | Delta |      % |       Samples | Caller     | Location                                                                                      |
| -----: | ----: | -----: | ------------: | ---------- | --------------------------------------------------------------------------------------------- |
|  -8.8% |  -537 | 100.0% | 6,094 → 5,557 | `mapfoldl` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:173` |

##### `mapfoldl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:173`)

| Change | Delta |      % |       Samples | Caller           | Location                                                                                      |
| -----: | ----: | -----: | ------------: | ---------------- | --------------------------------------------------------------------------------------------- |
|  -8.8% |  -537 | 100.0% | 6,094 → 5,557 | `#mapreduce#275` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:306` |

##### `#mapreduce#275` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:306`)

| Change | Delta |      % |       Samples | Caller      | Location                                                                                      |
| -----: | ----: | -----: | ------------: | ----------- | --------------------------------------------------------------------------------------------- |
|  -8.8% |  -537 | 100.0% | 6,094 → 5,557 | `mapreduce` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:306` |

##### `mapreduce` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:306`)

| Change | Delta |      % |       Samples | Caller     | Location                                                                                      |
| -----: | ----: | -----: | ------------: | ---------- | --------------------------------------------------------------------------------------------- |
|  -8.8% |  -537 | 100.0% | 6,094 → 5,557 | `#sum#278` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:535` |

##### `#sum#278` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:535`)

| Change | Delta |      % |       Samples | Caller | Location                                                                                      |
| -----: | ----: | -----: | ------------: | ------ | --------------------------------------------------------------------------------------------- |
|  -8.8% |  -537 | 100.0% | 6,094 → 5,557 | `sum`  | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:535` |

##### `sum` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:535`)

|  Change | Delta |             % |       Samples | Caller                                                                                                                                    | Location                                                                                      |
| ------: | ----: | ------------: | ------------: | ----------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
|   -9.0% |  -544 | 99.7% → 99.6% | 6,077 → 5,533 | `[unknown function]`                                                                                                                      | `<unknown>`                                                                                   |
|   -8.8% |  -537 |        100.0% | 6,094 → 5,557 | `#sum#279`                                                                                                                                | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:564` |
| +300.0% |    +3 |  <0.1% → 0.1% |         1 → 4 | `defaultminimum(::JSON3.Array{Int64, Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:11`                             |

##### `sum` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:564`)

| Change | Delta |             % |       Samples | Caller               | Location                                                          |
| -----: | ----: | ------------: | ------------: | -------------------- | ----------------------------------------------------------------- |
|  -8.8% |  -537 |        100.0% | 6,094 → 5,557 | `defaultminimum`     | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:12` |
| -10.5% |  -384 | 59.9% → 58.8% | 3,652 → 3,268 | `[unknown function]` | `<unknown>`                                                       |

##### `#defaultminimum##0` (`<unknown>`)

| Change | Delta |      % |       Samples | Caller               | Location    |
| -----: | ----: | -----: | ------------: | -------------------- | ----------- |
|  -8.9% |  -540 | 100.0% | 6,062 → 5,522 | `[unknown function]` | `<unknown>` |

##### `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` (`<unknown>`)

|  Change | Delta |              % |       Samples | Caller               | Location                                                                                     |
| ------: | ----: | -------------: | ------------: | -------------------- | -------------------------------------------------------------------------------------------- |
|   -8.9% |  -541 | 100.0% → 99.9% | 6,079 → 5,538 | `MappingRF`          | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98` |
|   -9.2% |  -358 |  64.0% → 63.7% | 3,889 → 3,531 | `[unknown function]` | `<unknown>`                                                                                  |
|  -80.0% |   -12 |    0.2% → 0.1% |        15 → 3 | `_foldl_impl`        | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60` |
| removed |    -2 |   <0.1% → 0.0% |         2 → 0 | `foldl_impl`         | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:46` |

#### Callees

Callees with the largest change in contribution to each function's total samples. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `getvalue` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:126`)

|  Change | Delta |             % |  Samples | Callee           | Location                                                                                   |
| ------: | ----: | ------------: | -------: | ---------------- | ------------------------------------------------------------------------------------------ |
| +190.9% |   +84 | 69.8% → 92.1% | 44 → 128 | `Dict`           | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:80` |
| removed |   -13 |  20.6% → 0.0% |   13 → 0 | `Object`         | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:8`                           |
|  +83.3% |    +5 |   9.5% → 7.9% |   6 → 11 | `getnontypemask` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:114`                         |

##### `#write#81` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:73`)

|  Change | Delta |           % | Samples | Callee      | Location                                                                                             |
| ------: | ----: | ----------: | ------: | ----------- | ---------------------------------------------------------------------------------------------------- |
| +150.0% |    +9 | 4.4% → 9.7% |  6 → 15 | `iterate`   | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/range.jl`             |
| removed |    -1 | 0.7% → 0.0% |   1 → 0 | `eachindex` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/abstractarray.jl:325` |

##### `String` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:145`)

| Change | Delta |      % |   Samples | Callee          | Location                                                                                              |
| -----: | ----: | -----: | --------: | --------------- | ----------------------------------------------------------------------------------------------------- |
| +12.6% |   +18 | 100.0% | 143 → 161 | `unsafe_string` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:130` |

##### `string` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/io.jl:188`)

| Change | Delta |      % |   Samples | Callee   | Location                                                                                              |
| -----: | ----: | -----: | --------: | -------- | ----------------------------------------------------------------------------------------------------- |
| +12.6% |   +18 | 100.0% | 143 → 161 | `String` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:145` |

##### `BottomRF` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:84`)

|  Change | Delta |           % | Samples | Callee               | Location    |
| ------: | ----: | ----------: | ------: | -------------------- | ----------- |
| removed |    -1 | 0.4% → 0.0% |   1 → 0 | `[unknown function]` | `<unknown>` |

##### `length(::String)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:540`)

| Change | Delta |             % |   Samples | Callee             | Location                                                                                              |
| -----: | ----: | ------------: | --------: | ------------------ | ----------------------------------------------------------------------------------------------------- |
| -30.5% |   -18 | 15.1% → 10.1% |   59 → 41 | `length_continued` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:559` |
| +17.6% |   +16 | 23.2% → 26.4% |  91 → 107 | `length_continued` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/pointer.jl`            |
|  +4.7% |    +8 | 43.6% → 44.1% | 171 → 179 | `length_continued` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:561` |
| -29.2% |    -7 |   6.1% → 4.2% |   24 → 17 | `length_continued` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:569` |
| +87.5% |    +7 |   2.0% → 3.7% |    8 → 15 | `length_continued` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:568` |

##### `string` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:88`)

| Change | Delta |      % | Samples | Callee | Location                                                                                   |
| -----: | ----: | -----: | ------: | ------ | ------------------------------------------------------------------------------------------ |
| +16.9% |   +14 | 100.0% | 83 → 97 | `\|`   | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:418` |

##### `getnontypemask` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:114`)

| Change | Delta |      % | Samples | Callee | Location                                                                                   |
| -----: | ----: | -----: | ------: | ------ | ------------------------------------------------------------------------------------------ |
| +24.4% |   +10 | 100.0% | 41 → 51 | `&`    | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:393` |

##### `length_continued` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:561`)

| Change | Delta |             % |   Samples | Callee     | Location                                                                                              |
| -----: | ----: | ------------: | --------: | ---------- | ----------------------------------------------------------------------------------------------------- |
| +22.6% |   +14 | 36.3% → 42.5% |   62 → 76 | `codeunit` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:167` |
|  -5.5% |    -6 | 63.7% → 57.5% | 109 → 103 | `codeunit` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:166` |

##### `codeunit` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/strings.jl:21`)

| Change | Delta |      % | Samples | Callee        | Location                                                                                       |
| -----: | ----: | -----: | ------: | ------------- | ---------------------------------------------------------------------------------------------- |
| +66.7% |    +8 | 100.0% | 12 → 20 | `unsafe_load` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/pointer.jl:151` |

##### `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Nothing})` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:204`)

| Change | Delta |             % | Samples | Callee     | Location                                                                                             |
| -----: | ----: | ------------: | ------: | ---------- | ---------------------------------------------------------------------------------------------------- |
|    new |    +3 |  0.0% → 21.4% |   0 → 3 | `+`        | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:87`            |
| +66.7% |    +2 | 42.9% → 35.7% |   3 → 5 | `getindex` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/basic.jl:793` |

##### `gettapelen` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:118`)

| Change | Delta |              % | Samples | Callee    | Location                                                                                          |
| -----: | ----: | -------------: | ------: | --------- | ------------------------------------------------------------------------------------------------- |
|    new |    +8 |   0.0% → 57.1% |   0 → 8 | `ifelse`  | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:854` |
| -33.3% |    -3 | 100.0% → 42.9% |   9 → 6 | `isarray` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:61`                                 |

##### `defaultminimum(::JSON3.Array{Int64, Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:11`)

|  Change | Delta |              % | Samples | Callee | Location                                                                                      |
| ------: | ----: | -------------: | ------: | ------ | --------------------------------------------------------------------------------------------- |
| +300.0% |    +3 | 100.0% → 66.7% |   1 → 4 | `sum`  | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:535` |

##### `macro expansion` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:355`)

| Change | Delta |             % | Samples | Callee      | Location                                                                                              |
| -----: | ----: | ------------: | ------: | ----------- | ----------------------------------------------------------------------------------------------------- |
| +17.7% |   +11 | 72.9% → 82.0% | 62 → 73 | `setindex!` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:1020`         |
| -30.4% |    -7 | 27.1% → 18.0% | 23 → 16 | `codeunit`  | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:167` |

##### `parsedigits` (`../profiler-md-julia-depot/packages/Parsers/05lwR/src/floats.jl:398`)

|  Change | Delta |             % | Samples | Callee      | Location                                                              |
| ------: | ----: | ------------: | ------: | ----------- | --------------------------------------------------------------------- |
|     new |    +2 |  0.0% → 40.0% |   0 → 2 | `parsefrac` | `../profiler-md-julia-depot/packages/Parsers/05lwR/src/floats.jl:496` |
|     new |    +2 |  0.0% → 40.0% |   0 → 2 | `parsefrac` | `../profiler-md-julia-depot/packages/Parsers/05lwR/src/floats.jl:416` |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `parsefrac` | `../profiler-md-julia-depot/packages/Parsers/05lwR/src/floats.jl:446` |
|     new |    +1 |  0.0% → 20.0% |   0 → 1 | `parsefrac` | `../profiler-md-julia-depot/packages/Parsers/05lwR/src/floats.jl:494` |

##### `iterate` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:82`)

| Change | Delta |             % | Samples | Callee       | Location                                                           |
| -----: | ----: | ------------: | ------: | ------------ | ------------------------------------------------------------------ |
| +33.3% |    +3 | 81.8% → 85.7% |  9 → 12 | `gettapelen` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:118` |

##### `parsedigits` (`../profiler-md-julia-depot/packages/Parsers/05lwR/src/floats.jl:302`)

|  Change | Delta |             % | Samples | Callee        | Location                                                              |
| ------: | ----: | ------------: | ------: | ------------- | --------------------------------------------------------------------- |
|  -88.9% |    -8 |  42.9% → 4.2% |   9 → 1 | `parsedigits` | `../profiler-md-julia-depot/packages/Parsers/05lwR/src/floats.jl:352` |
|  +83.3% |    +5 | 28.6% → 45.8% |  6 → 11 | `parsedigits` | `../profiler-md-julia-depot/packages/Parsers/05lwR/src/floats.jl`     |
| +400.0% |    +4 |  4.8% → 20.8% |   1 → 5 | `parsedigits` | `../profiler-md-julia-depot/packages/Parsers/05lwR/src/floats.jl:398` |
| +200.0% |    +2 |  4.8% → 12.5% |   1 → 3 | `parsedigits` | `../profiler-md-julia-depot/packages/Parsers/05lwR/src/floats.jl:324` |
| removed |    -1 |   4.8% → 0.0% |   1 → 0 | `parsedigits` | `../profiler-md-julia-depot/packages/Parsers/05lwR/src/floats.jl:348` |

##### `typeparser` (`../profiler-md-julia-depot/packages/Parsers/05lwR/src/floats.jl:270`)

| Change | Delta |      % | Samples | Callee        | Location                                                              |
| -----: | ----: | -----: | ------: | ------------- | --------------------------------------------------------------------- |
| +14.3% |    +3 | 100.0% | 21 → 24 | `parsedigits` | `../profiler-md-julia-depot/packages/Parsers/05lwR/src/floats.jl:302` |

##### `typeparser` (`../profiler-md-julia-depot/packages/Parsers/05lwR/src/ints.jl:32`)

| Change | Delta |             % | Samples | Callee | Location                                                                                  |
| -----: | ----: | ------------: | ------: | ------ | ----------------------------------------------------------------------------------------- |
|    new |    +3 | 0.0% → 100.0% |   0 → 3 | `*`    | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:88` |

##### `getvalue` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:213`)

|  Change | Delta |           % | Samples | Callee     | Location                                                          |
| ------: | ----: | ----------: | ------: | ---------- | ----------------------------------------------------------------- |
| removed |    -1 | 5.0% → 0.0% |   1 → 0 | `isobject` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:60` |

##### `write(::StructTypes.NumberType, ::Vector{UInt8}, ::Int64, ::Int64, ::Int64)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:224`)

| Change | Delta |             % | Samples | Callee                                                                                                                                                                 | Location                                                                                        |
| -----: | ----: | ------------: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| -10.0% |    -4 | 90.9% → 78.3% | 40 → 36 | `var\"#write#86\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.NumberType, ::Vector{UInt8}, ::Int64, ::Int64, ::Int64)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:224`                              |
|    new |    +1 |   0.0% → 2.2% |   0 → 1 | `realloc!(::Vector{UInt8}, ::Int64, ::Int64)`                                                                                                                          | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:51`                               |
|    new |    +1 |   0.0% → 2.2% |   0 → 1 | `ndigits0zpb(::UInt64, ::Int64)`                                                                                                                                       | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/intfuncs.jl:759` |

##### `parsedigits` (`../profiler-md-julia-depot/packages/Parsers/05lwR/src/floats.jl:324`)

|  Change | Delta |      % | Samples | Callee    | Location                                                             |
| ------: | ----: | -----: | ------: | --------- | -------------------------------------------------------------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `_muladd` | `../profiler-md-julia-depot/packages/Parsers/05lwR/src/floats.jl:27` |

##### `read!(::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.True})` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:174`)

|  Change | Delta |             % | Samples | Callee     | Location                                                                                             |
| ------: | ----: | ------------: | ------: | ---------- | ---------------------------------------------------------------------------------------------------- |
| +200.0% |    +2 | 50.0% → 75.0% |   1 → 3 | `getindex` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/basic.jl:793` |

##### `_muladd` (`../profiler-md-julia-depot/packages/Parsers/05lwR/src/floats.jl:27`)

|  Change | Delta |      % | Samples | Callee | Location                                                                                  |
| ------: | ----: | -----: | ------: | ------ | ----------------------------------------------------------------------------------------- |
| +200.0% |    +2 | 100.0% |   1 → 3 | `*`    | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:88` |

##### `length_continued` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:568`)

| Change | Delta |      % | Samples | Callee | Location                                                                                  |
| -----: | ----: | -----: | ------: | ------ | ----------------------------------------------------------------------------------------- |
| +87.5% |    +7 | 100.0% |  8 → 15 | `+`    | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:87` |

##### `getindex` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:436`)

|  Change | Delta |     % | Samples | Callee  | Location                                                                                    |
| ------: | ----: | ----: | ------: | ------- | ------------------------------------------------------------------------------------------- |
| +100.0% |    +6 | 85.7% |  6 → 12 | `Array` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:649` |
| +100.0% |    +1 | 14.3% |   1 → 2 | `Array` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:648` |

##### `(::JSON3.var\"#defaultminimum##0#defaultminimum##1\"{JSON3.Array{Int64, Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}}})(::Int64)` (`<unknown>`)

|  Change | Delta |             % | Samples | Callee       | Location                                                                                                 |
| ------: | ----: | ------------: | ------: | ------------ | -------------------------------------------------------------------------------------------------------- |
| removed |    -1 | 100.0% → 0.0% |   1 → 0 | `isassigned` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:1632` |
|     new |    +1 |  0.0% → 33.3% |   0 → 1 | `isassigned` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`      |
|     new |    +1 |  0.0% → 33.3% |   0 → 1 | `isassigned` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:1642` |
|     new |    +1 |  0.0% → 33.3% |   0 → 1 | `getindex`   | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:158`                                       |

##### `parse_workload` (`./profile.jl:18`)

| Change |  Delta |             % |         Samples | Callee               | Location                                                                                              |
| -----: | -----: | ------------: | --------------: | -------------------- | ----------------------------------------------------------------------------------------------------- |
| -11.3% | -2,704 | 93.0% → 92.8% | 23,997 → 21,293 | `[unknown function]` | `<unknown>`                                                                                           |
| -11.1% |   -149 |          5.2% |   1,346 → 1,197 | `read`               | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:30`                                      |
|  +3.6% |    +14 |   1.5% → 1.8% |       392 → 406 | `length(::String)`   | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:540` |

##### `[unknown function]` (`<unknown>`)

| Change |  Delta |             % |         Samples | Callee        | Location                                                                                            |
| -----: | -----: | ------------: | --------------: | ------------- | --------------------------------------------------------------------------------------------------- |
| -11.0% | -2,837 |        100.0% | 25,793 → 22,956 | `capture_cpu` | `./profile.jl:29`                                                                                   |
| -11.3% | -2,703 | 93.0% → 92.7% | 23,994 → 21,291 | `#write#58`   | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:40`                                   |
| -12.0% | -2,135 | 69.1% → 68.4% | 17,829 → 15,694 | `#write#81`   | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl` |
| -11.7% | -1,998 | 66.1% → 65.6% | 17,050 → 15,052 | `#write#79`   | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`                                  |
|  -9.0% |   -544 | 23.6% → 24.1% |   6,077 → 5,533 | `sum`         | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:535`       |

##### `macro expansion` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/stdlib/v1.13/Profile/src/Profile.jl:60`)

| Change |  Delta |      % |         Samples | Callee           | Location          |
| -----: | -----: | -----: | --------------: | ---------------- | ----------------- |
| -11.0% | -2,839 | 100.0% | 25,792 → 22,953 | `parse_workload` | `./profile.jl:18` |

##### `capture_cpu` (`./profile.jl:29`)

| Change |  Delta |      % |         Samples | Callee            | Location                                                                                                          |
| -----: | -----: | -----: | --------------: | ----------------- | ----------------------------------------------------------------------------------------------------------------- |
| -11.0% | -2,837 | 100.0% | 25,793 → 22,956 | `macro expansion` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/stdlib/v1.13/Profile/src/Profile.jl:60` |

##### `eval(::Module, ::Any)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:489`)

| Change |  Delta |      % |         Samples | Callee               | Location    |
| -----: | -----: | -----: | --------------: | -------------------- | ----------- |
| -11.0% | -2,837 | 100.0% | 25,793 → 22,956 | `[unknown function]` | `<unknown>` |

##### `include_string(::typeof(identity), ::Module, ::String, ::String)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/loading.jl:2989`)

| Change |  Delta |      % |         Samples | Callee                  | Location                                                                                    |
| -----: | -----: | -----: | --------------: | ----------------------- | ------------------------------------------------------------------------------------------- |
| -11.0% | -2,837 | 100.0% | 25,793 → 22,956 | `eval(::Module, ::Any)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:489` |

##### `_include(::Function, ::Module, ::String)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/loading.jl:3083`)

| Change |  Delta |      % |         Samples | Callee                                                             | Location                                                                                        |
| -----: | -----: | -----: | --------------: | ------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------- |
| -11.0% | -2,837 | 100.0% | 25,793 → 22,956 | `include_string(::typeof(identity), ::Module, ::String, ::String)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/loading.jl:2989` |

##### `include(::Module, ::String)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base.jl:309`)

| Change |  Delta |      % |         Samples | Callee                                     | Location                                                                                        |
| -----: | -----: | -----: | --------------: | ------------------------------------------ | ----------------------------------------------------------------------------------------------- |
| -11.0% | -2,837 | 100.0% | 25,793 → 22,956 | `_include(::Function, ::Module, ::String)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/loading.jl:3083` |

##### `exec_options(::Base.JLOptions)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/client.jl:234`)

| Change |  Delta |      % |         Samples | Callee                        | Location                                                                                    |
| -----: | -----: | -----: | --------------: | ----------------------------- | ------------------------------------------------------------------------------------------- |
| -11.0% | -2,837 | 100.0% | 25,793 → 22,956 | `include(::Module, ::String)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base.jl:309` |

##### `_start()` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/client.jl:570`)

| Change |  Delta |      % |         Samples | Callee                           | Location                                                                                      |
| -----: | -----: | -----: | --------------: | -------------------------------- | --------------------------------------------------------------------------------------------- |
| -11.0% | -2,837 | 100.0% | 25,793 → 22,956 | `exec_options(::Base.JLOptions)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/client.jl:234` |

##### `#write#58` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:40`)

| Change |  Delta |             % |         Samples | Callee                    | Location                                                                                             |
| -----: | -----: | ------------: | --------------: | ------------------------- | ---------------------------------------------------------------------------------------------------- |
| -12.1% | -2,159 | 74.5% → 73.9% | 17,884 → 15,725 | `write`                   | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:147`                                   |
|  -8.9% |   -542 | 25.4% → 26.1% |   6,100 → 5,558 | `defaultminimum`          | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:12`                                    |
| -20.0% |     -1 |         <0.1% |           5 → 4 | `String(::Vector{UInt8})` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:66` |

##### `write` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:147`)

|  Change |  Delta |            % |         Samples | Callee                                                                                                | Location                                                           |
| ------: | -----: | -----------: | --------------: | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
|  -12.1% | -2,156 |       100.0% | 17,879 → 15,723 | `#write#79`                                                                                           | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157` |
| removed |     -1 | <0.1% → 0.0% |           1 → 0 | `getvalue(::Type{JSON3.Array}, ::Base.CodeUnits{UInt8, String}, ::Vector{UInt64}, ::Int64, ::UInt64)` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/utils.jl:131` |

##### `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`)

| Change |  Delta |             % |         Samples | Callee                                                                    | Location                                                                                     |
| -----: | -----: | ------------: | --------------: | ------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| -11.9% | -2,130 |         99.8% | 17,838 → 15,708 | `[unknown function]`                                                      | `<unknown>`                                                                                  |
| -18.9% |   -434 | 12.9% → 11.9% |   2,300 → 1,866 | `indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64, ::Int64)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163` |
| -13.8% |   -264 | 10.7% → 10.5% |   1,915 → 1,651 | `iterate`                                                                 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:81`                            |
| -19.5% |   -194 |   5.6% → 5.1% |       994 → 800 | `indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64)`          | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163` |
|  -8.5% |   -144 |   9.5% → 9.8% |   1,692 → 1,548 | `iterate`                                                                 | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:78`                            |

##### `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`)

| Change |  Delta |             % |         Samples | Callee               | Location                                                                                                 |
| -----: | -----: | ------------: | --------------: | -------------------- | -------------------------------------------------------------------------------------------------------- |
| -11.8% | -2,020 | 95.8% → 95.9% | 17,077 → 15,057 | `[unknown function]` | `<unknown>`                                                                                              |
| -22.5% |   -139 |   3.5% → 3.1% |       619 → 480 | `isassigned`         | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:1641` |
|  -4.1% |    -14 |   1.9% → 2.1% |       341 → 327 | `getindex`           | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:163`                                       |
|    new |     +8 |   0.0% → 0.1% |           0 → 8 | `isassigned`         | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:1640` |
| -21.1% |     -4 |          0.1% |         19 → 15 | `indexed_iterate`    | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`             |

##### `_symbol` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:1`)

|  Change | Delta |            % | Samples | Callee                                                                                                                             | Location                                                          |
| ------: | ----: | -----------: | ------: | ---------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| removed |    -1 | <0.1% → 0.0% |   1 → 0 | `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40` |

##### `getvalue` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:187`)

| Change |  Delta |      % |       Samples | Callee    | Location                                                         |
| -----: | -----: | -----: | ------------: | --------- | ---------------------------------------------------------------- |
| -14.1% | -1,020 | 100.0% | 7,236 → 6,216 | `_symbol` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:1` |

##### `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40`)

| Change | Delta |             % |       Samples | Callee                                                | Location                                                                                        |
| -----: | ----: | ------------: | ------------: | ----------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| -16.2% |  -634 | 75.2% → 73.9% | 3,915 → 3,281 | `getvalue`                                            | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:187`                              |
| -10.0% |  -104 | 20.0% → 21.1% |   1,041 → 937 | `setindex!(::Dict{Symbol, Int64}, ::Int64, ::Symbol)` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:356`     |
| -26.0% |   -13 |   1.0% → 0.8% |       50 → 37 | `getindex`                                            | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/subarray.jl:334` |
|  -6.4% |    -7 |   2.1% → 2.3% |     109 → 102 | `+`                                                   | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:87`       |
| -71.4% |    -5 |  0.1% → <0.1% |         7 → 2 | `getvalue`                                            | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl`                                  |

##### `getvalue` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:127`)

| Change | Delta |             % |       Samples | Callee                                                                                                                             | Location                                                                                    |
| -----: | ----: | ------------: | ------------: | ---------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| -14.6% |  -759 | 99.1% → 98.8% | 5,196 → 4,437 | `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40`                           |
| +22.0% |    +9 |   0.8% → 1.1% |       41 → 50 | `setindex!(::Dict{Symbol, Int64}, ::Int64, ::Symbol)`                                                                              | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:356` |

##### `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`)

| Change | Delta |             % |       Samples | Callee                                                                       | Location                                                                                         |
| -----: | ----: | ------------: | ------------: | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
|  -9.0% |  -544 | 99.9% → 99.8% | 6,071 → 5,527 | `[unknown function]`                                                         | `<unknown>`                                                                                      |
| -11.9% |  -363 | 50.1% → 48.4% | 3,044 → 2,681 | `iterate`                                                                    | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/iterators.jl:697` |
|  -7.5% |   -27 |   5.9% → 6.0% |     359 → 332 | `MappingRF`                                                                  | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98`     |
| -80.0% |   -12 |   0.2% → 0.1% |        15 → 3 | `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` | `<unknown>`                                                                                      |
|  +4.0% |    +7 |   2.9% → 3.3% |     174 → 181 | `iterate`                                                                    | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:75`                                |

##### `MappingRF` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98`)

|  Change | Delta |            % |       Samples | Callee                                                                                                                                                                                  | Location                                                                                     |
| ------: | ----: | -----------: | ------------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
|   -8.9% |  -541 |       100.0% | 6,079 → 5,538 | `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})`                                                                                                            | `<unknown>`                                                                                  |
|  -20.8% |    -5 |  0.4% → 0.3% |       24 → 19 | `BottomRF`                                                                                                                                                                              | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:83` |
|  -80.0% |    -4 | 0.1% → <0.1% |         5 → 1 | `BottomRF`                                                                                                                                                                              | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:84` |
| +200.0% |    +2 | <0.1% → 0.1% |         1 → 3 | `(::JSON3.var\"#defaultminimum##0#defaultminimum##1\"{JSON3.Array{Int64, Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}}})(::Int64)` | `<unknown>`                                                                                  |

##### `defaultminimum` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:12`)

|  Change | Delta |              % |       Samples | Callee                                                                                                                             | Location                                                                                           |
| ------: | ----: | -------------: | ------------: | ---------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
|   -8.8% |  -537 | 99.9% → 100.0% | 6,094 → 5,557 | `sum`                                                                                                                              | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:564`      |
|  +14.7% |   +10 |    1.1% → 1.4% |       68 → 78 | `isempty(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})`       | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:1127` |
|  -83.3% |    -5 |   0.1% → <0.1% |         6 → 1 | `isempty(::JSON3.Object{Base.CodeUnits{UInt8, String}, Vector{UInt64}})`                                                           | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:1127` |
| removed |    -2 |   <0.1% → 0.0% |         2 → 0 | `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40`                                  |

##### `iterate` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:81`)

|  Change | Delta |             % |       Samples | Callee     | Location                                                                                   |
| ------: | ----: | ------------: | ------------: | ---------- | ------------------------------------------------------------------------------------------ |
|  -12.0% |  -420 | 89.0% → 88.6% | 3,504 → 3,084 | `getvalue` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:214`                         |
|  -14.5% |   -34 |   6.0% → 5.8% |     235 → 201 | `getvalue` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:218`                         |
|  -14.7% |   -10 |          1.7% |       68 → 58 | `getvalue` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:216`                         |
|   -9.6% |    -8 |   2.1% → 2.2% |       83 → 75 | `getvalue` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:215`                         |
| +160.0% |    +8 |   0.1% → 0.4% |        5 → 13 | `Pair`     | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base.jl:12` |

##### `getvalue` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:214`)

| Change | Delta |             % |       Samples | Callee     | Location                                                           |
| -----: | ----: | ------------: | ------------: | ---------- | ------------------------------------------------------------------ |
| -12.8% |  -445 | 99.1% → 98.2% | 3,473 → 3,028 | `getvalue` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:127` |
| +80.6% |   +25 |   0.9% → 1.8% |       31 → 56 | `getvalue` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:126` |

##### `iterate` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:78`)

| Change | Delta |             % |       Samples | Callee     | Location                                                           |
| -----: | ----: | ------------: | ------------: | ---------- | ------------------------------------------------------------------ |
| -11.6% |  -385 | 99.1% → 99.0% | 3,318 → 2,933 | `getvalue` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:187` |

##### `getindex` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:163`)

|  Change | Delta |             % |       Samples | Callee     | Location                                                           |
| ------: | ----: | ------------: | ------------: | ---------- | ------------------------------------------------------------------ |
|  -17.3% |  -306 | 98.2% → 94.6% | 1,769 → 1,463 | `getvalue` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:127` |
| +159.4% |   +51 |   1.8% → 5.4% |       32 → 83 | `getvalue` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:126` |

##### `var\"#read#6\"(::Bool, ::Nothing, ::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.read), ::String)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:30`)

| Change | Delta |             % |       Samples | Callee                                                                         | Location                                                                                    |
| -----: | ----: | ------------: | ------------: | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------- |
| -72.6% |  -119 |  12.2% → 3.8% |      164 → 45 | `Array`                                                                        | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:648` |
|  -2.5% |   -29 | 87.5% → 96.1% | 1,178 → 1,149 | `read!`                                                                        | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:87`                            |
| -50.0% |    -2 |   0.3% → 0.2% |         4 → 2 | `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, Vector{UInt64}})` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40`                           |

##### `read` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:30`)

| Change | Delta |              % |       Samples | Callee                                                                                                                     | Location                                                          |
| -----: | ----: | -------------: | ------------: | -------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| -11.1% |  -150 | 100.0% → 99.9% | 1,346 → 1,196 | `var\"#read#6\"(::Bool, ::Nothing, ::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.read), ::String)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:30`  |
|    new |    +1 |    0.0% → 0.1% |         0 → 1 | `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, Vector{UInt64}})`                                             | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40` |

##### `write(::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:340`)

|  Change | Delta |           % |       Samples | Callee                                                                                                                                                                  | Location                                                           |
| ------: | ----: | ----------: | ------------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
|   -8.8% |  -104 |       97.3% | 1,184 → 1,080 | `var\"#write#98\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:340` |
| +100.0% |    +1 | 0.1% → 0.2% |         1 → 2 | `realloc!(::Vector{UInt8}, ::Int64, ::Int64)`                                                                                                                           | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:51`  |

##### `var\"#write#98\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:340`)

|  Change | Delta |             % |   Samples | Callee                                        | Location                                                                                              |
| ------: | ----: | ------------: | --------: | --------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
|   -8.9% |   -62 | 58.0% → 57.8% | 699 → 637 | `realloc!(::Vector{UInt8}, ::Int64, ::Int64)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:51`                                     |
| +133.3% |   +12 |   0.7% → 1.9% |    9 → 21 | `ncodeunits`                                  | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:161` |
|  -55.0% |   -11 |   1.7% → 0.8% |    20 → 9 | `+`                                           | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:87`             |
|  -33.3% |    -8 |   2.0% → 1.5% |   24 → 16 | `macro expansion`                             | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/simdloop.jl:75`        |
|   -3.6% |    -7 | 16.0% → 16.9% | 193 → 186 | `escapelength`                                | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:331`                                    |

##### `realloc!(::Vector{UInt8}, ::Int64, ::Int64)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:51`)

| Change | Delta |             % |   Samples | Callee  | Location                                                                                        |
| -----: | ----: | ------------: | --------: | ------- | ----------------------------------------------------------------------------------------------- |
|  -8.8% |   -62 | 99.9% → 99.4% | 702 → 640 | `zeros` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:622`    |
|    new |    +1 |   0.0% → 0.2% |     0 → 1 | `trunc` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/rounding.jl:483` |

##### `getvalue` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:218`)

| Change | Delta |             % |   Samples | Callee     | Location                                                                                          |
| -----: | ----: | ------------: | --------: | ---------- | ------------------------------------------------------------------------------------------------- |
| -15.2% |   -20 | 56.2% → 55.7% | 132 → 112 | `getvalue` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:193`                                |
| -17.0% |   -16 | 40.0% → 38.8% |   94 → 78 | `getvalue` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:195`                                |
| +66.7% |    +2 |   1.3% → 2.5% |     3 → 5 | `getvalue` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl`                                    |
| -33.3% |    -1 |   1.3% → 1.0% |     3 → 2 | `getvalue` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:191`                                |
| +33.3% |    +1 |   1.3% → 2.0% |     3 → 4 | `getvalue` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl` |

##### `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:218`)

| Change | Delta |              % |       Samples | Callee                                                                                                                                                                                                                           | Location                                                          |
| -----: | ----: | -------------: | ------------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
|  -2.4% |   -28 | 99.9% → 100.0% | 1,177 → 1,149 | `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:218` |
| -20.0% |    -2 |    0.8% → 0.7% |        10 → 8 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)`                                                      | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:87`  |

##### `read!` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:87`)

|  Change | Delta |              % |       Samples | Callee                                                                                                                                                                               | Location                                                          |
| ------: | ----: | -------------: | ------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------- |
|   -2.4% |   -28 | 99.9% → 100.0% | 1,177 → 1,149 | `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)`                         | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:87`  |
| removed |    -1 |    0.1% → 0.0% |         1 → 0 | `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/read.jl:218` |

##### `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:56`)

|  Change | Delta |             % |       Samples | Callee               | Location                                                                                         |
| ------: | ----: | ------------: | ------------: | -------------------- | ------------------------------------------------------------------------------------------------ |
|   -8.9% |  -544 | 99.8% → 99.6% | 6,080 → 5,536 | `MappingRF`          | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98`     |
| +200.0% |    +4 |  <0.1% → 0.1% |         2 → 6 | `[unknown function]` | `<unknown>`                                                                                      |
|   +9.1% |    +1 |          0.2% |       11 → 12 | `iterate`            | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/iterators.jl:697` |

##### `foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:46`)

|  Change | Delta |             % |       Samples | Callee                                                                                                                             | Location                                                                                     |
| ------: | ----: | ------------: | ------------: | ---------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
|   -8.9% |  -543 | 99.8% → 99.6% | 6,079 → 5,536 | `_foldl_impl`                                                                                                                      | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60` |
|   -8.8% |  -537 |        100.0% | 6,094 → 5,557 | `_foldl_impl`                                                                                                                      | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:56` |
| removed |    -2 |  <0.1% → 0.0% |         2 → 0 | `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})`                                                       | `<unknown>`                                                                                  |
| removed |    -2 |  <0.1% → 0.0% |         2 → 0 | `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/JSON3.jl:40`                            |
| removed |    -1 |  <0.1% → 0.0% |         1 → 0 | `unescape(::JSON3.PointerString)`                                                                                                  | `../profiler-md-julia-depot/packages/JSON3/jSAdy/src/strings.jl:48`                          |

##### `mapfoldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:42`)

|  Change | Delta |            % |       Samples | Callee       | Location                                                                                     |
| ------: | ----: | -----------: | ------------: | ------------ | -------------------------------------------------------------------------------------------- |
|   -8.8% |  -537 |       100.0% | 6,094 → 5,557 | `foldl_impl` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:46` |
| removed |    -1 | <0.1% → 0.0% |         1 → 0 | `foldl_impl` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:47` |

##### `#mapfoldl#271` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:173`)

| Change | Delta |      % |       Samples | Callee          | Location                                                                                     |
| -----: | ----: | -----: | ------------: | --------------- | -------------------------------------------------------------------------------------------- |
|  -8.8% |  -537 | 100.0% | 6,094 → 5,557 | `mapfoldl_impl` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:42` |

##### `mapfoldl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:173`)

| Change | Delta |      % |       Samples | Callee          | Location                                                                                      |
| -----: | ----: | -----: | ------------: | --------------- | --------------------------------------------------------------------------------------------- |
|  -8.8% |  -537 | 100.0% | 6,094 → 5,557 | `#mapfoldl#271` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:173` |

##### `#mapreduce#275` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:306`)

| Change | Delta |      % |       Samples | Callee     | Location                                                                                      |
| -----: | ----: | -----: | ------------: | ---------- | --------------------------------------------------------------------------------------------- |
|  -8.8% |  -537 | 100.0% | 6,094 → 5,557 | `mapfoldl` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:173` |

##### `mapreduce` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:306`)

| Change | Delta |      % |       Samples | Callee           | Location                                                                                      |
| -----: | ----: | -----: | ------------: | ---------------- | --------------------------------------------------------------------------------------------- |
|  -8.8% |  -537 | 100.0% | 6,094 → 5,557 | `#mapreduce#275` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:306` |

##### `#sum#278` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:535`)

| Change | Delta |      % |       Samples | Callee      | Location                                                                                      |
| -----: | ----: | -----: | ------------: | ----------- | --------------------------------------------------------------------------------------------- |
|  -8.8% |  -537 | 100.0% | 6,094 → 5,557 | `mapreduce` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:306` |

##### `sum` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:535`)

| Change | Delta |      % |       Samples | Callee     | Location                                                                                      |
| -----: | ----: | -----: | ------------: | ---------- | --------------------------------------------------------------------------------------------- |
|  -8.8% |  -537 | 100.0% | 6,094 → 5,557 | `#sum#278` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:535` |

##### `sum` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:564`)

| Change | Delta |      % |       Samples | Callee     | Location                                                                                      |
| -----: | ----: | -----: | ------------: | ---------- | --------------------------------------------------------------------------------------------- |
|  -8.8% |  -537 | 100.0% | 6,094 → 5,557 | `#sum#279` | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:564` |

##### `#defaultminimum##0` (`<unknown>`)

|  Change | Delta |             % |       Samples | Callee           | Location                                                                                                 |
| ------: | ----: | ------------: | ------------: | ---------------- | -------------------------------------------------------------------------------------------------------- |
|   -8.6% |  -468 | 89.5% → 89.8% | 5,426 → 4,958 | `defaultminimum` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:12`                                        |
|  -16.9% |   -83 |   8.1% → 7.4% |     492 → 409 | `isassigned`     | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:1641` |
|   -5.2% |   -18 |   5.8% → 6.0% |     349 → 331 | `getindex`       | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:163`                                       |
|  -66.7% |    -2 |         <0.1% |         3 → 1 | `isassigned`     | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:1640` |
| +100.0% |    +1 |         <0.1% |         1 → 2 | `isassigned`     | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:1632` |

##### `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` (`<unknown>`)

|  Change | Delta |              % |       Samples | Callee                                                                                                                                    | Location                                                                                           |
| ------: | ----: | -------------: | ------------: | ----------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
|   -8.9% |  -542 | 100.0% → 99.9% | 6,079 → 5,537 | `[unknown function]`                                                                                                                      | `<unknown>`                                                                                        |
|  -83.3% |    -5 |   0.1% → <0.1% |         6 → 1 | `indexed_iterate`                                                                                                                         | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/pair.jl:42`         |
| +500.0% |    +5 |   <0.1% → 0.1% |         1 → 6 | `defaultminimum(::JSON3.Array{Int64, Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` | `../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:11`                                  |
|  -28.6% |    -2 |           0.1% |         7 → 5 | `+(::UInt64, ::Int64)`                                                                                                                    | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/int.jl:1054`        |
|  -66.7% |    -2 |          <0.1% |         3 → 1 | `isempty(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})`              | `/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:1127` |

## Hottest call stacks

### Regressions

Call stacks with the largest increase in samples collected in their leaf frame.

Common call stack: `parse_workload` (`./profile.jl:18`) ← `macro expansion` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/stdlib/v1.13/Profile/src/Profile.jl:60`) ← `capture_cpu` (`./profile.jl:29`) ← `[unknown function]` ← `eval(::Module, ::Any)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:489`) ← `include_string(::typeof(identity), ::Module, ::String, ::String)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/loading.jl:2989`) ← `_include(::Function, ::Module, ::String)` (3083) ← `include(::Module, ::String)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base.jl:309`) ← `exec_options(::Base.JLOptions)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/client.jl:234`) ← `_start()` (570)

|   Change | Delta |            % |   Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| -------: | ----: | -----------: | --------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  +215.0% |   +43 |  0.1% → 0.2% |   20 → 63 | `iterate` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:75`) ← `iterate` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/iterators.jl:697`) ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:12`) ← `#defaultminimum##0` ← `[unknown function]` ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `[unknown function]` ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `MappingRF` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98`) ← `_foldl_impl` (56) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:12`) ← `#write#58` (40) ← `[unknown function]`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|   +20.0% |   +38 |  0.6% → 0.8% | 190 → 228 | `GenericMemory` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:588`) ← `Array` (648) ← `Array` (661) ← `zeros` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:626`) ← `zeros` (622) ← `realloc!(::Vector{UInt8}, ::Int64, ::Int64)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:51`) ← `var\"#write#98\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` (340) ← `write(::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` (340) ← `#write#79` (157) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `write` (147) ← `#write#58` (40) ← `[unknown function]`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|   +64.4% |   +29 |  0.1% → 0.2% |   45 → 74 | `unsafe_string` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:130`) ← `String` (145) ← `string` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/io.jl:188`) ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `write` (147) ← `#write#58` (40) ← `[unknown function]`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|   +13.2% |   +28 |  0.6% → 0.8% | 212 → 240 | `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `[unknown function]` ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:12`) ← `#defaultminimum##0` ← `[unknown function]` ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `[unknown function]` ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `MappingRF` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98`) ← `_foldl_impl` (56) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:12`) ← `#write#58` (40) ← `[unknown function]`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  +440.0% |   +22 | <0.1% → 0.1% |    5 → 27 | `Dict` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:80`) ← `getvalue` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:126`) ← `getindex` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:163`) ← `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `write` (147) ← `#write#58` (40) ← `[unknown function]`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  +220.0% |   +22 | <0.1% → 0.1% |   10 → 32 | `iterate` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:75`) ← `iterate` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/iterators.jl:697`) ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `[unknown function]` ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `[unknown function]` ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:12`) ← `#defaultminimum##0` ← `[unknown function]` ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `[unknown function]` ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `MappingRF` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98`) ← `_foldl_impl` (56) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:12`) ← `#write#58` (40) ← `[unknown function]`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| +2200.0% |   +22 | <0.1% → 0.1% |    1 → 23 | `GenericMemory` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:588`) ← `Array` (648) ← `Array` (661) ← `zeros` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:626`) ← `zeros` (622) ← `realloc!(::Vector{UInt8}, ::Int64, ::Int64)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:51`) ← `var\"#write#98\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` (340) ← `write(::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` (340) ← `#write#79` (157) ← `[unknown function]` ← `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `write` (147) ← `#write#58` (40) ← `[unknown function]`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|   +61.8% |   +21 |  0.1% → 0.2% |   34 → 55 | `_symbol` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:1`) ← `getvalue` (187) ← `iterate` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:78`) ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `write` (147) ← `#write#58` (40) ← `[unknown function]`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|   +55.3% |   +21 |  0.1% → 0.2% |   38 → 59 | `#write#81` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:73`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `write` (147) ← `#write#58` (40) ← `[unknown function]`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  +350.0% |   +21 | <0.1% → 0.1% |    6 → 27 | `Dict` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:80`) ← `getvalue` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:126`) ← `getindex` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:163`) ← `#defaultminimum##0` ← `[unknown function]` ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `[unknown function]` ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `MappingRF` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98`) ← `_foldl_impl` (56) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:12`) ← `#write#58` (40) ← `[unknown function]`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| +2000.0% |   +20 | <0.1% → 0.1% |    1 → 21 | `Dict` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:80`) ← `getvalue` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:126`) ← `getindex` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:163`) ← `#defaultminimum##0` ← `[unknown function]` ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `[unknown function]` ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `[unknown function]` ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `[unknown function]` ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `[unknown function]` ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:12`) ← `#defaultminimum##0` ← `[unknown function]` ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `[unknown function]` ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `MappingRF` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98`) ← `_foldl_impl` (56) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:12`) ← `#write#58` (40) ← `[unknown function]`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|   +20.5% |   +18 |         0.3% |  88 → 106 | `unsafe_load` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/pointer.jl:151`) ← `unsafe_load` (151) ← `codeunit` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:167`) ← `getindex` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/basic.jl:793`) ← `getbyte` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:8`) ← `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:218`) ← `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` (218) ← `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` (87) ← `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` (87) ← `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` (218) ← `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` (218) ← `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` (87) ← `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` (87) ← `var\"#read!#9\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Array}, ::Bool)` (312) ← `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Array}, ::Bool)` (312) ← `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` (87) ← `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` (87) ← `var\"#read!#8\"(::Base.Pairs{Symbol, Bool, Nothing, @NamedTuple{allow_inf::Bool}}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` (218) ← `kwcall(::@NamedTuple{allow_inf::Bool}, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{JSON3.Object}, ::Bool)` (218) ← `var\"#read!#7\"(::Bool, ::typeof(JSON3.read!), ::Base.CodeUnits{UInt8, String}, ::Int64, ::Int64, ::UInt8, ::Vector{UInt64}, ::Int64, ::Type{Any}, ::Bool)` (87) ← `read!` (87) ← `var\"#read#6\"(::Bool, ::Nothing, ::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.read), ::String)` (30) ← `read` (30) |
|  +242.9% |   +17 | <0.1% → 0.1% |    7 → 24 | `GenericMemory` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:588`) ← `rehash!(::Dict{Symbol, Int64}, ::Int64)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:138`) ← `ht_keyindex2_shorthash!(::Dict{Symbol, Int64}, ::Symbol)` (267) ← `setindex!(::Dict{Symbol, Int64}, ::Int64, ::Symbol)` (356) ← `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40`) ← `getvalue` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:127`) ← `getvalue` (214) ← `iterate` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:81`) ← `iterate` (75) ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `write` (147) ← `#write#58` (40) ← `[unknown function]`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  +154.5% |   +17 | <0.1% → 0.1% |   11 → 28 | `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `write` (147) ← `#write#58` (40) ← `[unknown function]`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|   +17.6% |   +16 |  0.3% → 0.4% |  91 → 107 | `length_continued` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/pointer.jl`) ← `length(::String)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:540`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  +123.1% |   +16 | <0.1% → 0.1% |   13 → 29 | `GenericMemory` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:588`) ← `rehash!(::Dict{Symbol, Int64}, ::Int64)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:138`) ← `ht_keyindex2_shorthash!(::Dict{Symbol, Int64}, ::Symbol)` (267) ← `setindex!(::Dict{Symbol, Int64}, ::Int64, ::Symbol)` (356) ← `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40`) ← `getvalue` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:127`) ← `getvalue` (214) ← `iterate` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:81`) ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `write` (147) ← `#write#58` (40) ← `[unknown function]`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|   +22.6% |   +14 |  0.2% → 0.3% |   62 → 76 | `unsafe_load` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/pointer.jl:151`) ← `unsafe_load` (151) ← `codeunit` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/strings/string.jl:167`) ← `length_continued` (561) ← `length(::String)` (540)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  +185.7% |   +13 | <0.1% → 0.1% |    7 → 20 | `Dict` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:80`) ← `getvalue` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:126`) ← `getvalue` (214) ← `iterate` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:81`) ← `iterate` (75) ← `isempty(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/essentials.jl:1127`) ← `defaultminimum` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:12`) ← `#defaultminimum##0` ← `[unknown function]` ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `[unknown function]` ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `MappingRF` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98`) ← `_foldl_impl` (56) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:12`) ← `#write#58` (40) ← `[unknown function]`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|   +18.8% |   +12 |  0.2% → 0.3% |   64 → 76 | `BottomRF` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:84`) ← `[unknown function]` ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `[unknown function]` ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `[unknown function]` ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `[unknown function]` ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `[unknown function]` ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:12`) ← `#defaultminimum##0` ← `[unknown function]` ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `[unknown function]` ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `MappingRF` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98`) ← `_foldl_impl` (56) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:12`) ← `#write#58` (40) ← `[unknown function]`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|   +52.4% |   +11 |         0.1% |   21 → 32 | `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `[unknown function]` ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:12`) ← `#defaultminimum##0` ← `[unknown function]` ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `[unknown function]` ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `[unknown function]` ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `[unknown function]` ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `[unknown function]` ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:12`) ← `#defaultminimum##0` ← `[unknown function]` ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `[unknown function]` ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `MappingRF` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98`) ← `_foldl_impl` (56) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:12`) ← `#write#58` (40) ← `[unknown function]`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |

### Improvements

Call stacks with the largest decrease in samples collected in their leaf frame.

Common call stack: `parse_workload` (`./profile.jl:18`) ← `macro expansion` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/stdlib/v1.13/Profile/src/Profile.jl:60`) ← `capture_cpu` (`./profile.jl:29`) ← `[unknown function]` ← `eval(::Module, ::Any)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:489`) ← `include_string(::typeof(identity), ::Module, ::String, ::String)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/loading.jl:2989`) ← `_include(::Function, ::Module, ::String)` (3083) ← `include(::Module, ::String)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/Base.jl:309`) ← `exec_options(::Base.JLOptions)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/client.jl:234`) ← `_start()` (570)

| Change | Delta |            % |       Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| -----: | ----: | -----------: | ------------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| -11.9% |  -219 |  5.5% → 5.3% | 1,842 → 1,623 | `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `write` (147) ← `#write#58` (40) ← `[unknown function]`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| -15.0% |  -200 |  4.0% → 3.7% | 1,336 → 1,136 | `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `write` (147) ← `#write#58` (40) ← `[unknown function]`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| -29.1% |  -188 |  1.9% → 1.5% |     647 → 459 | `indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64, ::Int64)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`) ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `write` (147) ← `#write#58` (40) ← `[unknown function]`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  -5.8% |  -180 |  9.3% → 9.7% | 3,118 → 2,938 | `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `write` (147) ← `#write#58` (40) ← `[unknown function]`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| -16.4% |  -169 |  3.1% → 2.8% |   1,028 → 859 | `indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64, ::Int64)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`) ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `write` (147) ← `#write#58` (40) ← `[unknown function]`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| -17.3% |  -137 |  2.4% → 2.2% |     791 → 654 | `_symbol` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:1`) ← `getvalue` (187) ← `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40`) ← `getvalue` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:127`) ← `getvalue` (214) ← `iterate` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:81`) ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `write` (147) ← `#write#58` (40) ← `[unknown function]`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| -32.2% |  -123 |  1.1% → 0.9% |     382 → 259 | `_symbol` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:1`) ← `getvalue` (187) ← `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40`) ← `getvalue` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:127`) ← `getindex` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:163`) ← `isassigned` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:1641`) ← `#write#81` ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `write` (147) ← `#write#58` (40) ← `[unknown function]`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| -31.1% |  -119 |  1.1% → 0.9% |     383 → 264 | `GenericMemory` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:588`) ← `Array` (648) ← `Array` (661) ← `zeros` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/array.jl:626`) ← `zeros` (622) ← `realloc!(::Vector{UInt8}, ::Int64, ::Int64)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:51`) ← `var\"#write#98\"(::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.write), ::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` (340) ← `write(::StructTypes.StringType, ::Vector{UInt8}, ::Int64, ::Int64, ::String)` (340) ← `#write#79` (157) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `write` (147) ← `#write#58` (40) ← `[unknown function]`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| -72.6% |  -119 |  0.5% → 0.1% |      164 → 45 | `GenericMemory` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:588`) ← `Array` (648) ← `var\"#read#6\"(::Bool, ::Nothing, ::Base.Pairs{Symbol, Union{}, Nothing, @NamedTuple{}}, ::typeof(JSON3.read), ::String)` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/read.jl:30`) ← `read` (30)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| -23.0% |  -112 |  1.4% → 1.2% |     486 → 374 | `indexed_iterate` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`) ← `indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64)` (163) ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `write` (147) ← `#write#58` (40) ← `[unknown function]`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| -19.0% |   -83 |  1.3% → 1.2% |     436 → 353 | `_symbol` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:1`) ← `getvalue` (187) ← `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40`) ← `getvalue` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:127`) ← `getvalue` (214) ← `iterate` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:81`) ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `write` (147) ← `#write#58` (40) ← `[unknown function]`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  -9.7% |   -80 |         2.5% |     828 → 748 | `_symbol` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:1`) ← `getvalue` (187) ← `iterate` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:78`) ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `write` (147) ← `#write#58` (40) ← `[unknown function]`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| -22.9% |   -80 |  1.0% → 0.9% |     350 → 270 | `_symbol` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:1`) ← `getvalue` (187) ← `iterate` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:78`) ← `iterate` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/iterators.jl:697`) ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `[unknown function]` ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `[unknown function]` ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `[unknown function]` ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `[unknown function]` ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:12`) ← `#defaultminimum##0` ← `[unknown function]` ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `[unknown function]` ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `MappingRF` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98`) ← `_foldl_impl` (56) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:12`) ← `#write#58` (40) ← `[unknown function]` |
| -91.0% |   -71 | 0.2% → <0.1% |        78 → 7 | `GenericMemory` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/boot.jl:588`) ← `rehash!(::Dict{Symbol, Int64}, ::Int64)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/dict.jl:138`) ← `_setindex!` (339) ← `setindex!(::Dict{Symbol, Int64}, ::Int64, ::Symbol)` (356) ← `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40`) ← `getvalue` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:127`) ← `getvalue` (214) ← `iterate` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:81`) ← `iterate` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/iterators.jl:697`) ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:12`) ← `#defaultminimum##0` ← `[unknown function]` ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `[unknown function]` ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `MappingRF` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98`) ← `_foldl_impl` (56) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:12`) ← `#write#58` (40) ← `[unknown function]`                                                                                                                                                                                                                                                                                                                                          |
| -14.4% |   -69 |  1.4% → 1.3% |     479 → 410 | `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `[unknown function]` ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `[unknown function]` ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `[unknown function]` ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:12`) ← `#defaultminimum##0` ← `[unknown function]` ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `[unknown function]` ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `MappingRF` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98`) ← `_foldl_impl` (56) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:12`) ← `#write#58` (40) ← `[unknown function]`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| -22.1% |   -66 |  0.9% → 0.8% |     299 → 233 | `_symbol` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:1`) ← `getvalue` (187) ← `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40`) ← `getvalue` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:127`) ← `getindex` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:163`) ← `isassigned` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl:1641`) ← `#defaultminimum##0` ← `[unknown function]` ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `[unknown function]` ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `MappingRF` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98`) ← `_foldl_impl` (56) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:12`) ← `#write#58` (40) ← `[unknown function]`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| -10.5% |   -64 |         1.8% |     607 → 543 | `_symbol` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:1`) ← `getvalue` (187) ← `iterate` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:78`) ← `iterate` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/iterators.jl:697`) ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `[unknown function]` ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `[unknown function]` ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:12`) ← `#defaultminimum##0` ← `[unknown function]` ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `[unknown function]` ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `MappingRF` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98`) ← `_foldl_impl` (56) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:12`) ← `#write#58` (40) ← `[unknown function]`                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  -7.6% |   -53 |         2.1% |     695 → 642 | `_symbol` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:1`) ← `getvalue` (187) ← `populateinds!(::JSON3.Object{Base.CodeUnits{UInt8, String}, SubArray{UInt64, 1, Vector{UInt64}, Tuple{UnitRange{Int64}}, true}})` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:40`) ← `getvalue` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/utils.jl:127`) ← `getvalue` (214) ← `iterate` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/JSON3.jl:81`) ← `iterate` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/iterators.jl:697`) ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:12`) ← `#defaultminimum##0` ← `[unknown function]` ← `_foldl_impl` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:60`) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `[unknown function]` ← `(::JSON3.var\"#defaultminimum##2#defaultminimum##3\")(::Pair{Symbol, Any})` ← `MappingRF` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/reduce.jl:98`) ← `_foldl_impl` (56) ← `foldl_impl` (46) ← `mapfoldl_impl` (42) ← `#mapfoldl#271` (173) ← `mapfoldl` (173) ← `#mapreduce#275` (306) ← `mapreduce` (306) ← `#sum#278` (535) ← `sum` (535) ← `#sum#279` (564) ← `sum` (564) ← `defaultminimum` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:12`) ← `#write#58` (40) ← `[unknown function]`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| -36.1% |   -53 |  0.4% → 0.3% |      147 → 94 | `indexed_iterate` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`) ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `write` (147) ← `#write#58` (40) ← `[unknown function]`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| -12.5% |   -51 |         1.2% |     409 → 358 | `indexed_iterate(::Tuple{Vector{UInt8}, Int64, Int64}, ::Int64, ::Int64)` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/tuple.jl:163`) ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `[unknown function]` ← `#write#81` (`/nix/store/ym8ylm6flanrvach5h3g00yaw5ai75fn-julia-bin-1.13.1/share/julia/base/multidimensional.jl`) ← `[unknown function]` ← `#write#79` (`../profiler-md-julia-depot/packages/JSON3/ntJon/src/write.jl:157`) ← `write` (147) ← `#write#58` (40) ← `[unknown function]`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |

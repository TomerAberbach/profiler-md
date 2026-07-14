# Heap snapshot

Allocated 163 MB across 1,797,991 nodes and 5,735,169 edges.

| Category                                                                                                                                                                                                                       |     % |    Size |   Nodes |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----: | ------: | ------: |
| String                                                                                                                                                                                                                         | 45.1% | 73.4 MB | 295,505 |
| object                                                                                                                                                                                                                         | 10.2% | 16.7 MB | 132,351 |
| jl\_svec\_t                                                                                                                                                                                                                    |  9.8% | 15.9 MB | 316,293 |
| Core.CodeInstance                                                                                                                                                                                                              |  7.5% | 12.3 MB |  90,162 |
| jl\_datatype\_t                                                                                                                                                                                                                |  6.4% | 10.4 MB | 162,840 |
| Core.DebugInfo                                                                                                                                                                                                                 |  4.3% | 6.95 MB | 173,865 |
| Method                                                                                                                                                                                                                         |  3.3% | 5.35 MB |  26,787 |
| Core.MethodInstance                                                                                                                                                                                                            |  2.7% | 4.36 MB |  77,849 |
| Tuple{Symbol, Symbol}                                                                                                                                                                                                          |  1.7% | 2.83 MB |  59,308 |
| Memory{Any}                                                                                                                                                                                                                    |  1.7% |  2.7 MB | 112,516 |
| jl\_array\_t                                                                                                                                                                                                                   |  1.6% | 2.57 MB | 107,151 |
| Core.TypeMapEntry                                                                                                                                                                                                              |  1.4% |  2.3 MB |  34,033 |
| Tuple{Symbol, Symbol, Symbol}                                                                                                                                                                                                  |  0.9% | 1.49 MB |  31,076 |
| Core.TypeName                                                                                                                                                                                                                  |  0.7% | 1.17 MB |  10,066 |
| GlobalRef                                                                                                                                                                                                                      |  0.6% |  989 kB |  30,932 |
| jl\_sym\_t                                                                                                                                                                                                                     |  0.4% |  607 kB |  27,476 |
| UnionAll                                                                                                                                                                                                                       |  0.3% |  515 kB |  21,503 |
| TypeVar                                                                                                                                                                                                                        |  0.2% |  371 kB |  11,615 |
| Union                                                                                                                                                                                                                          |  0.2% |  369 kB |  15,399 |
| Base.RefValue{Union{Nothing, Base.Dict{Symbol, Any}}}                                                                                                                                                                          |  0.2% |  262 kB |   3,668 |
| Core.MethodTable                                                                                                                                                                                                               |  0.1% |  212 kB |   8,874 |
| LinearAlgebra.BLAS.ConfigCache                                                                                                                                                                                                 |  0.1% |  148 kB |   6,194 |
| Base.Dict{Int64, Symbol}                                                                                                                                                                                                       |  0.1% |  108 kB |   3,396 |
| Base.IdDict{Any, Any}                                                                                                                                                                                                          |  0.1% | 94.7 kB |   2,990 |
| Base.ComposedFunction{Type{Base.Val{x} where x}, typeof(Base.propertynames)}                                                                                                                                                   |  0.1% | 82.6 kB |   3,467 |
| Base.Dict{Base.TOML.ErrorType, String}                                                                                                                                                                                         | <0.1% | 69.3 kB |   2,913 |
| Base.Dict{UInt8, Symbol}                                                                                                                                                                                                       | <0.1% | 69.2 kB |   2,910 |
| Pair{typeof(DataType), typeof(DataType)}                                                                                                                                                                                       | <0.1% | 50.7 kB |     941 |
| Core.Const                                                                                                                                                                                                                     | <0.1% | 44.6 kB |   2,807 |
| Expr                                                                                                                                                                                                                           | <0.1% | 43.8 kB |   1,851 |
| jl\_module\_t                                                                                                                                                                                                                  | <0.1% | 42.1 kB |     153 |
| Core.TypeofVararg                                                                                                                                                                                                              | <0.1% | 40.7 kB |   1,724 |
| Int64                                                                                                                                                                                                                          | <0.1% | 30.4 kB |   1,922 |
| Tuple{Symbol}                                                                                                                                                                                                                  | <0.1% | 23.5 kB |   1,464 |
| Base.KeyError                                                                                                                                                                                                                  | <0.1% | 17.1 kB |     740 |
| NTuple{5, Symbol}                                                                                                                                                                                                              | <0.1% | 17.1 kB |     536 |
| LineNumberNode                                                                                                                                                                                                                 | <0.1% | 14.2 kB |     649 |
| Base.Compiler.AnalysisResults                                                                                                                                                                                                  | <0.1% | 11.7 kB |     514 |
| NamedTuple{(:limit,), Tuple{Int64}}                                                                                                                                                                                            | <0.1% | 11.7 kB |     514 |
| Ptr{Nothing}                                                                                                                                                                                                                   | <0.1% | 11.7 kB |     515 |
| Base.Dict{String, Any}                                                                                                                                                                                                         | <0.1% | 10.2 kB |     178 |
| NamedTuple{(:attach\_after,), Tuple{Bool}}                                                                                                                                                                                     | <0.1% | 5.55 kB |      42 |
| Base.var"#new#replace\_pairs!##0"{Tuple{Pair{Symbol, Symbol}}}                                                                                                                                                                 | <0.1% | 5.02 kB |      42 |
| QuoteNode                                                                                                                                                                                                                      | <0.1% | 4.88 kB |     325 |
| Base.Regex                                                                                                                                                                                                                     | <0.1% | 4.59 kB |     174 |
| Base.Compiler.CallMeta                                                                                                                                                                                                         | <0.1% | 4.35 kB |     132 |
| Base.GitVersionInfo                                                                                                                                                                                                            | <0.1% | 3.46 kB |     316 |
| NTuple{4, Symbol}                                                                                                                                                                                                              | <0.1% | 2.97 kB |     107 |
| UInt32                                                                                                                                                                                                                         | <0.1% | 2.87 kB |     240 |
| Tuple{VecElement{UInt64}, VecElement{UInt64}}                                                                                                                                                                                  | <0.1% | 2.67 kB |      46 |
| NTuple{4, VecElement{UInt64}}                                                                                                                                                                                                  | <0.1% | 2.62 kB |      44 |
| UInt128                                                                                                                                                                                                                        | <0.1% |  2.6 kB |     136 |
| NTuple{256, UInt64}                                                                                                                                                                                                            | <0.1% | 2.49 kB |      45 |
| Float64                                                                                                                                                                                                                        | <0.1% |  2.4 kB |     168 |
| Core.IntrinsicFunction                                                                                                                                                                                                         | <0.1% |  2.4 kB |     224 |
| Base.VersionNumber                                                                                                                                                                                                             | <0.1% | 2.39 kB |     103 |
| Base.RefValue{Function}                                                                                                                                                                                                        | <0.1% |  2.3 kB |     162 |
| Tuple{Base.IteratorsMD.CartesianIndex{0}, Bool}                                                                                                                                                                                | <0.1% | 2.21 kB |     118 |
| Base.Compiler.RTEffects                                                                                                                                                                                                        | <0.1% | 2.13 kB |      85 |
| Base.Dict{Symbol, Symbol}                                                                                                                                                                                                      | <0.1% |  2.1 kB |      83 |
| Base.Docs.var"#metadata##0#metadata##1"{Type{Pair{Symbol, Any}}}                                                                                                                                                               | <0.1% |  1.9 kB |      63 |
| Memory{UInt16}                                                                                                                                                                                                                 | <0.1% | 1.82 kB |     105 |
| Base.Dict{Symbol, Int64}                                                                                                                                                                                                       | <0.1% | 1.78 kB |      61 |
| Base.ReentrantLock                                                                                                                                                                                                             | <0.1% | 1.76 kB |      64 |
| UInt64                                                                                                                                                                                                                         | <0.1% | 1.73 kB |     125 |
| Tuple{VecElement{UInt64}, VecElement{UInt64}, VecElement{UInt64}}                                                                                                                                                              | <0.1% | 1.73 kB |      46 |
| NTuple{6, Symbol}                                                                                                                                                                                                              | <0.1% | 1.66 kB |      65 |
| Base.UnitRange{Int64}                                                                                                                                                                                                          | <0.1% | 1.52 kB |      87 |
| Base.Dict{Char, Type}                                                                                                                                                                                                          | <0.1% |  1.4 kB |      83 |
| Char                                                                                                                                                                                                                           | <0.1% | 1.35 kB |     124 |
| Base.Dict{Int32, Symbol}                                                                                                                                                                                                       | <0.1% | 1.21 kB |      63 |
| Tuple{typeof(DataType), typeof(DataType)}                                                                                                                                                                                      | <0.1% | 1.18 kB |      77 |
| Base.Compiler.Effects                                                                                                                                                                                                          | <0.1% | 1.17 kB |      69 |
| Base.ImmutableDict{Symbol, Any}                                                                                                                                                                                                | <0.1% | 1.17 kB |      67 |
| NTuple{7, Symbol}                                                                                                                                                                                                              | <0.1% | 1.17 kB |      55 |
| Tuple{typeof(DataType), Bool, Bool, Bool}                                                                                                                                                                                      | <0.1% | 1.12 kB |      50 |
| Tuple{typeof(DataType)}                                                                                                                                                                                                        | <0.1% | 1.09 kB |      87 |
| jl\_task\_t                                                                                                                                                                                                                    | <0.1% | 1.06 kB |      45 |
| Base.ScopedValues.ScopedValue{Base.MPFR.MPFRRoundingMode}                                                                                                                                                                      | <0.1% | 1.06 kB |      71 |
| Parsers.Token                                                                                                                                                                                                                  | <0.1% | 1.05 kB |     101 |
| NTuple{8, Symbol}                                                                                                                                                                                                              | <0.1% |   984 B |      51 |
| Base.Threads.SpinLock                                                                                                                                                                                                          | <0.1% |   952 B |      80 |
| NTuple{10, Symbol}                                                                                                                                                                                                             | <0.1% |   952 B |      49 |
| Base.Dict{String, String}                                                                                                                                                                                                      | <0.1% |   936 B |      51 |
| NTuple{34, UInt128}                                                                                                                                                                                                            | <0.1% |   928 B |      42 |
| StyledStrings.SimpleColor                                                                                                                                                                                                      | <0.1% |   920 B |      74 |
| NTuple{4, Char}                                                                                                                                                                                                                | <0.1% |   912 B |      64 |
| Base.Dict{Base.PkgId, Tuple{Task, Base.GenericCondition{Base.ReentrantLock}, UInt128}}                                                                                                                                         | <0.1% |   902 B |      96 |
| Base.Compiler.Future{Base.Compiler.CallMeta}                                                                                                                                                                                   | <0.1% |   888 B |      62 |
| Base.Dict{Base.PkgId, Array{Module, 1}}                                                                                                                                                                                        | <0.1% |   856 B |      76 |
| Tuple{typeof(DataType), typeof(DataType), typeof(DataType)}                                                                                                                                                                    | <0.1% |   848 B |      67 |
| Parsers.Options                                                                                                                                                                                                                | <0.1% |   816 B |      44 |
| Tuple{Int64, Int64}                                                                                                                                                                                                            | <0.1% |   784 B |      60 |
| Base.Compiler.StatementState                                                                                                                                                                                                   | <0.1% |   769 B |      51 |
| Dates.DateLocale                                                                                                                                                                                                               | <0.1% |   768 B |      56 |
| NTuple{12, Int64}                                                                                                                                                                                                              | <0.1% |   760 B |      45 |
| Base.Threads.Atomic{Int64}                                                                                                                                                                                                     | <0.1% |   752 B |      59 |
| Base.Compiler.InternalCodeCache                                                                                                                                                                                                | <0.1% |   749 B |      83 |
| NamedTuple{(:final,), Tuple{Bool}}                                                                                                                                                                                             | <0.1% |   721 B |      42 |
| Pair{Any, Tuple{Bool, Bool}}                                                                                                                                                                                                   | <0.1% |   712 B |      47 |
| NTuple{20, Symbol}                                                                                                                                                                                                             | <0.1% |   688 B |      44 |
| Base.OneTo{Int64}                                                                                                                                                                                                              | <0.1% |   688 B |      60 |
| NTuple{5, VecElement{UInt64}}                                                                                                                                                                                                  | <0.1% |   681 B |      44 |
| Base.Compiler.EscapeAnalysis.EscapeInfo                                                                                                                                                                                        | <0.1% |   680 B |      49 |
| Base.Dict{Base.PkgId, Module}                                                                                                                                                                                                  | <0.1% |   680 B |      53 |
| Base.IdDict{Symbol, Base.UnitRange{Int64}}                                                                                                                                                                                     | <0.1% |   672 B |      57 |
| Pair{Any, Any}                                                                                                                                                                                                                 | <0.1% |   656 B |      46 |
| NTuple{4, String}                                                                                                                                                                                                              | <0.1% |   656 B |      43 |
| Base.ScopedValues.ScopedValue{Base.CoreLogging.LogState}                                                                                                                                                                       | <0.1% |   648 B |      45 |
| Base.OncePerTask{Base.MPFR.BigFloat, Parsers.var"#20#21"}                                                                                                                                                                      | <0.1% |   640 B |      48 |
| Base.Dict{Symbol, Tuple{Char, Char}}                                                                                                                                                                                           | <0.1% |   632 B |      47 |
| NamedTuple{(:maxlog,), Tuple{Int64}}                                                                                                                                                                                           | <0.1% |   630 B |      45 |
| Base.Set{UInt8}                                                                                                                                                                                                                | <0.1% |   624 B |      43 |
| Tuple{Int64, Nothing}                                                                                                                                                                                                          | <0.1% |   617 B |      55 |
| Base.RefValue{Base.MPFR.MPFRRoundingMode}                                                                                                                                                                                      | <0.1% |   612 B |      43 |
| NTuple{7, VecElement{UInt64}}                                                                                                                                                                                                  | <0.1% |   608 B |      51 |
| Tuple{Symbol, typeof(Base.maybeview)}                                                                                                                                                                                          | <0.1% |   592 B |      43 |
| Base.Pairs{Symbol, Symbol, Nothing, NamedTuple{(:color,), Tuple{Symbol}}}                                                                                                                                                      | <0.1% |   592 B |      52 |
| Base.BitSet                                                                                                                                                                                                                    | <0.1% |   584 B |      50 |
| Base.Set{Symbol}                                                                                                                                                                                                               | <0.1% |   584 B |      54 |
| Int128                                                                                                                                                                                                                         | <0.1% |   568 B |      51 |
| Base.Compiler.Future{Base.Compiler.RTEffects}                                                                                                                                                                                  | <0.1% |   568 B |      51 |
| NTuple{6, VecElement{UInt64}}                                                                                                                                                                                                  | <0.1% |   564 B |      47 |
| Base.Compiler.MethodResultPure                                                                                                                                                                                                 | <0.1% |   563 B |      45 |
| NTuple{26, Symbol}                                                                                                                                                                                                             | <0.1% |   560 B |      42 |
| Base.GMP.BigInt                                                                                                                                                                                                                | <0.1% |   552 B |      47 |
| NTuple{32, Base.TOML.ErrorType}                                                                                                                                                                                                | <0.1% |   552 B |      45 |
| NTuple{8, VecElement{UInt64}}                                                                                                                                                                                                  | <0.1% |   552 B |      45 |
| Tuple{typeof(DataType), UInt8, UInt8}                                                                                                                                                                                          | <0.1% |   546 B |      44 |
| Tuple{Core.TypeofBottom, Bool, Bool, Bool}                                                                                                                                                                                     | <0.1% |   545 B |      45 |
| Tuple{Core.Const, typeof(DataType), typeof(DataType)}                                                                                                                                                                          | <0.1% |   544 B |      47 |
| NTuple{11, String}                                                                                                                                                                                                             | <0.1% |   544 B |      44 |
| Tuple{Bool, Int64}                                                                                                                                                                                                             | <0.1% |   544 B |      44 |
| Base.OncePerTask{Base.GMP.BigInt, Parsers.var"#18#19"}                                                                                                                                                                         | <0.1% |   544 B |      50 |
| Base.Returns{Bool}                                                                                                                                                                                                             | <0.1% |   542 B |      58 |
| Base.RefValue{Bool}                                                                                                                                                                                                            | <0.1% |   542 B |      48 |
| Base.Dict{String, Array{Pair{String, Base.BinaryPlatforms.CPUID.ISA}, 1}}                                                                                                                                                      | <0.1% |   536 B |      47 |
| NTuple{4, UInt64}                                                                                                                                                                                                              | <0.1% |   536 B |      43 |
| NTuple{20, Int64}                                                                                                                                                                                                              | <0.1% |   536 B |      42 |
| UndefKeywordError                                                                                                                                                                                                              | <0.1% |   528 B |      52 |
| BoundsError                                                                                                                                                                                                                    | <0.1% |   525 B |      51 |
| Core.UpsilonNode                                                                                                                                                                                                               | <0.1% |   523 B |      48 |
| Base.Compiler.LiftedValue                                                                                                                                                                                                      | <0.1% |   520 B |      43 |
| NTuple{12, Symbol}                                                                                                                                                                                                             | <0.1% |   520 B |      44 |
| Tuple{typeof(Base.Compiler.compact!), Vararg{typeof(DataType), 5}}                                                                                                                                                             | <0.1% |   520 B |      45 |
| LinearAlgebra.BlasFlag.BlasFunction                                                                                                                                                                                            | <0.1% |   520 B |      51 |
| Base.Iterators.Stateful{Base.Iterators.Cycle{Array{Symbol, 1}}, Union{Nothing, Tuple{Symbol, Int64}}}                                                                                                                          | <0.1% |   512 B |      44 |
| NamedTuple{(:default, :current, :lock), Tuple{Base.Dict{Symbol, StyledStrings.Face}, Base.ScopedValues.ScopedValue{Base.Dict{Symbol, StyledStrings.Face}}, Base.ReentrantLock}}                                                | <0.1% |   512 B |      51 |
| NTuple{4, typeof(DataType)}                                                                                                                                                                                                    | <0.1% |   504 B |      45 |
| Base.RefValue{Symbol}                                                                                                                                                                                                          | <0.1% |   504 B |      50 |
| Base.RefValue{Base.Regex}                                                                                                                                                                                                      | <0.1% |   504 B |      48 |
| Base.Dict{Symbol, Function}                                                                                                                                                                                                    | <0.1% |   496 B |      44 |
| Tuple{Int64}                                                                                                                                                                                                                   | <0.1% |   496 B |      50 |
| Tuple{Bool, Bool}                                                                                                                                                                                                              | <0.1% |   492 B |      52 |
| Tuple{typeof(DataType), typeof(DataType), UnionAll}                                                                                                                                                                            | <0.1% |   492 B |      55 |
| Base.OncePerProcess{Base.TermInfo, Base.var"#709#710"}                                                                                                                                                                         | <0.1% |   491 B |      56 |
| Base.Dict{UInt16, String}                                                                                                                                                                                                      | <0.1% |   488 B |      46 |
| NamedTuple{(:color,), Tuple{Symbol}}                                                                                                                                                                                           | <0.1% |   488 B |      51 |
| Tuple{Ptr{Nothing}, Base.StackTraces.StackFrame}                                                                                                                                                                               | <0.1% |   488 B |      43 |
| Tuple{Char, Char}                                                                                                                                                                                                              | <0.1% |   488 B |      47 |
| Base.Dict{Int64, Union{Module, Symbol}}                                                                                                                                                                                        | <0.1% |   480 B |      43 |
| Base.Compiler.Future{Base.Compiler.MethodCallResult}                                                                                                                                                                           | <0.1% |   472 B |      45 |
| Base.Dict{Char, Base.JuliaSyntax.Kind}                                                                                                                                                                                         | <0.1% |   472 B |      45 |
| NTuple{12, String}                                                                                                                                                                                                             | <0.1% |   472 B |      44 |
| Core.ReturnNode                                                                                                                                                                                                                | <0.1% |   464 B |      47 |
| Base.Compiler.VarState                                                                                                                                                                                                         | <0.1% |   464 B |      46 |
| Base.GenericIOBuffer{Memory{UInt8}}                                                                                                                                                                                            | <0.1% |   464 B |      44 |
| Base.Dict{Union{Int64, Symbol}, String}                                                                                                                                                                                        | <0.1% |   464 B |      44 |
| Tuple{Symbol, typeof(DataType)}                                                                                                                                                                                                | <0.1% |   464 B |      46 |
| Base.Dict{Symbol, Base.Docs.DocStr}                                                                                                                                                                                            | <0.1% |   464 B |      44 |
| Base.Dict{Base.JuliaSyntax.Kind, String}                                                                                                                                                                                       | <0.1% |   464 B |      44 |
| Base.Dict{Base.PkgId, Array{Base.PkgId, 1}}                                                                                                                                                                                    | <0.1% |   464 B |      45 |
| Tuple{VecElement{UInt64}}                                                                                                                                                                                                      | <0.1% |   464 B |      46 |
| Base.RefValue{Base.ImmutableDict{UInt32, String}}                                                                                                                                                                              | <0.1% |   464 B |      45 |
| NTuple{10, String}                                                                                                                                                                                                             | <0.1% |   464 B |      42 |
| Base.RefValue{Union{Nothing, Module}}                                                                                                                                                                                          | <0.1% |   456 B |      44 |
| Base.Dict{Symbol, String}                                                                                                                                                                                                      | <0.1% |   456 B |      44 |
| Base.IOContext{IO}                                                                                                                                                                                                             | <0.1% |   456 B |      43 |
| Tuple{String, String, String}                                                                                                                                                                                                  | <0.1% |   448 B |      42 |
| Base.StackTraces.StackFrame                                                                                                                                                                                                    | <0.1% |   442 B |      43 |
| Base.Compiler.SSAUse                                                                                                                                                                                                           | <0.1% |   440 B |      43 |
| Base.Dict{Base.PkgId, Base.PkgOrigin}                                                                                                                                                                                          | <0.1% |   440 B |      43 |
| NTuple{10, Array{Tuple{UInt16, String}, 1}}                                                                                                                                                                                    | <0.1% |   440 B |      42 |
| Base.OncePerProcess{Array{Any, 1}, Type{Array{Any, 1}}}                                                                                                                                                                        | <0.1% |   440 B |      44 |
| Base.\_\_precompile\_script.var"#print\_status#print\_status##0"{Base.Dict{String, String}}                                                                                                                                    | <0.1% |   440 B |      42 |
| Base.Dict{Union{Nothing, String}, String}                                                                                                                                                                                      | <0.1% |   440 B |      42 |
| Base.Dict{Base.UUID, Base.Set{String}}                                                                                                                                                                                         | <0.1% |   432 B |      42 |
| Base.Dict{Symbol, StyledStrings.SimpleColor}                                                                                                                                                                                   | <0.1% |   432 B |      42 |
| Base.RefValue{UInt64}                                                                                                                                                                                                          | <0.1% |   424 B |      46 |
| Base.CoreLogging.LogLevel                                                                                                                                                                                                      | <0.1% |   424 B |      48 |
| Base.Dict{String, UInt16}                                                                                                                                                                                                      | <0.1% |   424 B |      43 |
| Base.Dict{UInt64, Base.JuliaSyntax.Kind}                                                                                                                                                                                       | <0.1% |   424 B |      43 |
| Base.Dict{Base.PkgId, Array{Base.ExtensionId, 1}}                                                                                                                                                                              | <0.1% |   424 B |      43 |
| Base.Dict{String, Bool}                                                                                                                                                                                                        | <0.1% |   424 B |      43 |
| Base.RefValue{String}                                                                                                                                                                                                          | <0.1% |   424 B |      46 |
| Tuple{Base.UnitRange{Int64}, Symbol, Symbol}                                                                                                                                                                                   | <0.1% |   424 B |      43 |
| NamedTuple{(:bold\_weight, :dim\_weight, :normal\_weight, :start\_italics, :end\_italics, :start\_underline, :end\_underline, :start\_reverse, :end\_reverse, :start\_strikethrough, :end\_strikethrough), NTuple{11, String}} | <0.1% |   424 B |      42 |
| Nothing                                                                                                                                                                                                                        | <0.1% |   424 B |      46 |
| Base.AnnotatedString{String}                                                                                                                                                                                                   | <0.1% |   420 B |      42 |
| Base.RefValue{Int64}                                                                                                                                                                                                           | <0.1% |   416 B |      46 |
| Base.Fix{2, typeof(Base.:(∉)), Tuple{Char, Char}}                                                                                                                                                                              | <0.1% |   416 B |      43 |
| Base.Dict{Module, Base.UUID}                                                                                                                                                                                                   | <0.1% |   416 B |      42 |
| Core.TypeofBottom                                                                                                                                                                                                              | <0.1% |   416 B |      42 |
| Base.JuliaSyntax.Kind                                                                                                                                                                                                          | <0.1% |   412 B |      45 |
| Base.Compiler.SomeCase                                                                                                                                                                                                         | <0.1% |   408 B |      44 |
| Base.Dict{Tuple{typeof(DataType), Symbol}, Union{Tuple{Nothing, String}, Tuple{Symbol, String}}}                                                                                                                               | <0.1% |   408 B |      43 |
| Tuple{String, String}                                                                                                                                                                                                          | <0.1% |   408 B |      45 |
| Base.TOMLCache{nothing}                                                                                                                                                                                                        | <0.1% |   408 B |      43 |
| Base.SubstitutionString{String}                                                                                                                                                                                                | <0.1% |   408 B |      45 |
| Base.IdDict{Type, Array{Any, 1}}                                                                                                                                                                                               | <0.1% |   400 B |      43 |
| Base.RefValue{Union{Nothing, String}}                                                                                                                                                                                          | <0.1% |   400 B |      45 |
| Base.Dict{Random.DSFMT.GF2X, Array{Random.DSFMT.GF2X, 1}}                                                                                                                                                                      | <0.1% |   400 B |      42 |
| LinearAlgebra.SingularException                                                                                                                                                                                                | <0.1% |   400 B |      43 |
| Base.IntrusiveLinkedListSynchronized{Task}                                                                                                                                                                                     | <0.1% |   400 B |      42 |
| Base.Fix{2, typeof(Base.:(∉)), NTuple{6, Char}}                                                                                                                                                                                | <0.1% |   400 B |      42 |
| Tuple{Tuple{Symbol}}                                                                                                                                                                                                           | <0.1% |   400 B |      42 |
| Tuple{Char, Char, Char}                                                                                                                                                                                                        | <0.1% |   400 B |      43 |
| NTuple{6, Int64}                                                                                                                                                                                                               | <0.1% |   400 B |      42 |
| NTuple{5, String}                                                                                                                                                                                                              | <0.1% |   400 B |      42 |
| Base.Libc.RawFD                                                                                                                                                                                                                | <0.1% |   396 B |      44 |
| NamedTuple{(:expand\_toplevel,), Tuple{Bool}}                                                                                                                                                                                  | <0.1% |   394 B |      45 |
| NamedTuple{(:keep,), Tuple{Bool}}                                                                                                                                                                                              | <0.1% |   393 B |      42 |
| Pair{Symbol, Bool}                                                                                                                                                                                                             | <0.1% |   392 B |      43 |
| Base.Set{Base.JuliaSyntax.Kind}                                                                                                                                                                                                | <0.1% |   392 B |      44 |
| Base.IdDict{Module, Symbol}                                                                                                                                                                                                    | <0.1% |   392 B |      43 |
| Random.Xoshiro                                                                                                                                                                                                                 | <0.1% |   392 B |      42 |
| Base.OncePerProcess{String, Base.Linking.var"#5#6"}                                                                                                                                                                            | <0.1% |   392 B |      42 |
| Base.CoreLogging.LogState                                                                                                                                                                                                      | <0.1% |   392 B |      43 |
| synthetic                                                                                                                                                                                                                      | <0.1% |   384 B |      61 |
| Tuple{Nothing, Nothing, Int64}                                                                                                                                                                                                 | <0.1% |   384 B |      43 |
| Base.RefValue{Union{Nothing, Function}}                                                                                                                                                                                        | <0.1% |   384 B |      44 |
| Base.Lockable{Base.Dict{String, FileWatching.FolderMonitor}, Base.ReentrantLock}                                                                                                                                               | <0.1% |   384 B |      42 |
| Base.RefValue{Union{Nothing, Base.UUID}}                                                                                                                                                                                       | <0.1% |   384 B |      42 |
| Base.var"#\_replace!##0#\_replace!##1"{Base.var"#new#replace\_pairs!##0"{Tuple{Pair{Module, Module}}}}                                                                                                                         | <0.1% |   380 B |      43 |
| Base.Fix{2, typeof(Base.:(∉)), Tuple{Char, Char, Char}}                                                                                                                                                                        | <0.1% |   380 B |      42 |
| NTuple{9, Base.JuliaSyntax.Kind}                                                                                                                                                                                               | <0.1% |   378 B |      43 |
| Base.ScopedValues.ScopedValue{Int64}                                                                                                                                                                                           | <0.1% |   376 B |      43 |
| Base.OncePerProcess{String, Base.Linking.var"#2#3"}                                                                                                                                                                            | <0.1% |   376 B |      42 |
| Base.OncePerProcess{String, Base.Linking.var"#8#9"}                                                                                                                                                                            | <0.1% |   376 B |      42 |
| Pair{Symbol, Nothing}                                                                                                                                                                                                          | <0.1% |   376 B |      42 |
| Base.RefValue{Float64}                                                                                                                                                                                                         | <0.1% |   376 B |      43 |
| NTuple{6, Char}                                                                                                                                                                                                                | <0.1% |   376 B |      42 |
| Base.RefValue{Union{Nothing, Base.LoadingCache}}                                                                                                                                                                               | <0.1% |   368 B |      43 |
| Base.RefValue{Union{Nothing, Array{Any, 1}}}                                                                                                                                                                                   | <0.1% |   368 B |      43 |
| NamedTuple{(:stale\_age,), Tuple{Int64}}                                                                                                                                                                                       | <0.1% |   361 B |      42 |
| NamedTuple{(:keepempty,), Tuple{Bool}}                                                                                                                                                                                         | <0.1% |   353 B |      43 |
| NamedTuple{(:use\_color,), Tuple{Bool}}                                                                                                                                                                                        | <0.1% |   353 B |      42 |
| Base.Threads.Atomic{Bool}                                                                                                                                                                                                      | <0.1% |   353 B |      42 |
| Base.ComposedFunction{Type{Int64}, typeof(Base.ltoh)}                                                                                                                                                                          | <0.1% |   352 B |      43 |
| Base.RefValue{Union{Nothing, IO}}                                                                                                                                                                                              | <0.1% |   352 B |      43 |
| Base.Threads.Atomic{Int32}                                                                                                                                                                                                     | <0.1% |   348 B |      43 |
| Core.AddrSpace{Core}                                                                                                                                                                                                           | <0.1% |   345 B |      43 |
| Base.RefValue{Random.DSFMT.GF2X}                                                                                                                                                                                               | <0.1% |   344 B |      42 |
| Base.RefValue{Module}                                                                                                                                                                                                          | <0.1% |   344 B |      42 |
| NamedTuple{(:bold,), Tuple{Bool}}                                                                                                                                                                                              | <0.1% |   337 B |      42 |
| NamedTuple{(:qualified,), Tuple{Bool}}                                                                                                                                                                                         | <0.1% |   337 B |      42 |

## Largest constructors

### Self size

Constructors ranked by bytes allocated for their instances, excluding nodes kept reachable by them.

|     % |    Size | Instances | Constructor                                                                                                   |
| ----: | ------: | --------: | ------------------------------------------------------------------------------------------------------------- |
|  6.4% | 10.4 MB |   120,343 | `<generic memory - inline alloc>`                                                                             |
|  3.9% | 6.28 MB |    11,696 | `<generic memory - malloc>`                                                                                   |
| <0.1% |  6.5 kB |       271 | `Memory{String}`                                                                                              |
| <0.1% |     8 B |         1 | `Base.Val{Char(0x64000000)}`                                                                                  |
| <0.1% |     8 B |         1 | `typeof(Base.close)`                                                                                          |
| <0.1% |     8 B |         1 | `Parsers.var"#36#37"`                                                                                         |
| <0.1% |     8 B |         1 | `typeof(Base.Filesystem.delayed_delete_ref)`                                                                  |
| <0.1% |     8 B |         1 | `typeof(Base.Threads.atomic_min!)`                                                                            |
| <0.1% |     8 B |         1 | `typeof(Base.SimdLoop.simd_outer_range)`                                                                      |
| <0.1% |     8 B |         1 | `typeof(Base.Threads.atomic_or!)`                                                                             |
| <0.1% |     8 B |         1 | `typeof(Base.PCRE.substring_length_bynumber)`                                                                 |
| <0.1% |     8 B |         1 | `Base.Broadcast.var"#_maxndims##0#_maxndims##1"{Tuple}`                                                       |
| <0.1% |     8 B |         1 | `Base.var"##_truncated_pipebuffer#392"`                                                                       |
| <0.1% |     8 B |         1 | `typeof(Base.JuliaSyntax.is_prec_pipe_gt)`                                                                    |
| <0.1% |     8 B |         1 | `Profile.var"#print_tree##0#print_tree##1"`                                                                   |
| <0.1% |     8 B |         1 | `Tuple{typeof(Base.Order.ord), typeof(Base.isless), typeof(Base.first), Nothing, Base.Order.ForwardOrdering}` |
| <0.1% |     8 B |         1 | `typeof(Base.TOML.set_marker!)`                                                                               |
| <0.1% |     8 B |         1 | `Tuple{Base.MathConstants.var"#4#5"}`                                                                         |
| <0.1% |     8 B |         1 | `Base.MathConstants.var"##BigFloat#7"`                                                                        |
| <0.1% |     8 B |         1 | `typeof(LinearAlgebra.matprod)`                                                                               |

#### Instances

Instances ranked by contribution to each constructor's self size.

##### `<generic memory - inline alloc>`

|    % |    Size | Instances | Path                                                                                                                                                       |
| ---: | ------: | --------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2.5% |  262 kB |         1 | `.<native> Memory{Any} ← .arg1 Core.TypeMapLevel ← .defs Core.MethodTable`                                                                                 |
| 0.6% | 66.8 kB |         1 | `.<native> Memory{Any} ← .ref.mem Array{Any, 1} ← .backedges Core.MethodInstance`                                                                          |
| 0.6% | 65.5 kB |         1 | `.<native> Memory{Any} ← .ht Base.IdDict{Any, Any} ← .restriction Core.BindingPartition ← .partitions Core.Binding ← [7853] SimpleVector ← .bindings Base` |
| 0.6% | 65.5 kB |         1 | `.<native> Memory{Any} ← .arg1 Core.TypeMapLevel ← .cache Core.MethodCache ← .cache Core.MethodTable`                                                      |
| 0.6% | 65.5 kB |         1 | `.<native> Memory{Any} ← .name1 Core.TypeMapLevel ← .defs Core.MethodTable`                                                                                |

##### `<generic memory - malloc>`

|     % |    Size | Instances | Path                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ----: | ------: | --------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 80.4% | 5.05 MB |        10 | `.<native> Memory{UInt64} ← .ref.mem Array{UInt64, 1} ← [18446744073709552000] Memory{JSON3.Object{Base.CodeUnits{UInt8, String}, Array{UInt64, 1}}} ← .ref.mem Array{JSON3.Object{Base.CodeUnits{UInt8, String}, Array{UInt64, 1}}, 1} ← .local var (stack frame) ← .next frame (stack frame) ← .next frame (stack frame) ← .next frame (stack frame) ← .next frame (stack frame) ← .next frame (stack frame) ← .next frame (stack frame) ← .stack Task` |
|  2.5% |  157 kB |         1 | `.<native> Memory{Tuple{UInt64, UInt64, UInt64}} ← .ref.mem Array{Tuple{UInt64, UInt64, UInt64}, 1}`                                                                                                                                                                                                                                                                                                                                                      |
|  1.0% | 65.5 kB |         1 | `.<native> Memory{UInt16} ← .bindingkeyset Base`                                                                                                                                                                                                                                                                                                                                                                                                          |
|  1.0% | 65.5 kB |         1 | `.<native> Memory{Any} ← .leafcache Core.MethodCache ← .cache Core.MethodTable`                                                                                                                                                                                                                                                                                                                                                                           |
|  0.8% | 52.2 kB |         1 | `.<native> Memory{String} ← .ref.mem Array{String, 1} ← .exported_symbols LinearAlgebra.BLAS.LBTConfig ← .config LinearAlgebra.BLAS.ConfigCache`                                                                                                                                                                                                                                                                                                          |

##### `Memory{String}`

|    % | Size | Instances | Path                                                                                                                                               |
| ---: | ---: | --------: | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1.5% | 96 B |         4 | `.keys Base.Dict{String, Int64}`                                                                                                                   |
| 1.5% | 96 B |         4 | `.ref.mem Array{String, 1}`                                                                                                                        |
| 0.4% | 24 B |         1 | `(GC root)`                                                                                                                                        |
| 0.4% | 24 B |         1 | `.ref.mem Array{String, 1} ← .restriction Core.BindingPartition ← .partitions Core.Binding ← [60] SimpleVector ← .bindings Unicode`                |
| 0.4% | 24 B |         1 | `.keys Base.Dict{String, Dates.DateLocale} ← .restriction Core.BindingPartition ← .partitions Core.Binding ← [231] SimpleVector ← .bindings Dates` |

##### `Base.Val{Char(0x64000000)}`

|      % | Size | Instances | Path                                   |
| -----: | ---: | --------: | -------------------------------------- |
| 100.0% |  8 B |         1 | `.instance Base.Val{Char(0x64000000)}` |

##### `typeof(Base.close)`

|      % | Size | Instances | Path        |
| -----: | ---: | --------: | ----------- |
| 100.0% |  8 B |         1 | `(GC root)` |

##### `Parsers.var"#36#37"`

|      % | Size | Instances | Path                            |
| -----: | ---: | --------: | ------------------------------- |
| 100.0% |  8 B |         1 | `.instance Parsers.var"#36#37"` |

##### `typeof(Base.Filesystem.delayed_delete_ref)`

|      % | Size | Instances | Path        |
| -----: | ---: | --------: | ----------- |
| 100.0% |  8 B |         1 | `(GC root)` |

##### `typeof(Base.Threads.atomic_min!)`

|      % | Size | Instances | Path        |
| -----: | ---: | --------: | ----------- |
| 100.0% |  8 B |         1 | `(GC root)` |

##### `typeof(Base.SimdLoop.simd_outer_range)`

|      % | Size | Instances | Path        |
| -----: | ---: | --------: | ----------- |
| 100.0% |  8 B |         1 | `(GC root)` |

##### `typeof(Base.Threads.atomic_or!)`

|      % | Size | Instances | Path        |
| -----: | ---: | --------: | ----------- |
| 100.0% |  8 B |         1 | `(GC root)` |

##### `typeof(Base.PCRE.substring_length_bynumber)`

|      % | Size | Instances | Path        |
| -----: | ---: | --------: | ----------- |
| 100.0% |  8 B |         1 | `(GC root)` |

##### `Base.Broadcast.var"#_maxndims##0#_maxndims##1"{Tuple}`

|      % | Size | Instances | Path                                                              |
| -----: | ---: | --------: | ----------------------------------------------------------------- |
| 100.0% |  8 B |         1 | `.instance Base.Broadcast.var"#_maxndims##0#_maxndims##1"{Tuple}` |

##### `Base.var"##_truncated_pipebuffer#392"`

|      % | Size | Instances | Path        |
| -----: | ---: | --------: | ----------- |
| 100.0% |  8 B |         1 | `(GC root)` |

##### `typeof(Base.JuliaSyntax.is_prec_pipe_gt)`

|      % | Size | Instances | Path        |
| -----: | ---: | --------: | ----------- |
| 100.0% |  8 B |         1 | `(GC root)` |

##### `Profile.var"#print_tree##0#print_tree##1"`

|      % | Size | Instances | Path                                                  |
| -----: | ---: | --------: | ----------------------------------------------------- |
| 100.0% |  8 B |         1 | `.instance Profile.var"#print_tree##0#print_tree##1"` |

##### `Tuple{typeof(Base.Order.ord), typeof(Base.isless), typeof(Base.first), Nothing, Base.Order.ForwardOrdering}`

|      % | Size | Instances | Path                                                                                                                    |
| -----: | ---: | --------: | ----------------------------------------------------------------------------------------------------------------------- |
| 100.0% |  8 B |         1 | `.instance Tuple{typeof(Base.Order.ord), typeof(Base.isless), typeof(Base.first), Nothing, Base.Order.ForwardOrdering}` |

##### `typeof(Base.TOML.set_marker!)`

|      % | Size | Instances | Path        |
| -----: | ---: | --------: | ----------- |
| 100.0% |  8 B |         1 | `(GC root)` |

##### `Tuple{Base.MathConstants.var"#4#5"}`

|      % | Size | Instances | Path                                            |
| -----: | ---: | --------: | ----------------------------------------------- |
| 100.0% |  8 B |         1 | `.instance Tuple{Base.MathConstants.var"#4#5"}` |

##### `Base.MathConstants.var"##BigFloat#7"`

|      % | Size | Instances | Path        |
| -----: | ---: | --------: | ----------- |
| 100.0% |  8 B |         1 | `(GC root)` |

##### `typeof(LinearAlgebra.matprod)`

|      % | Size | Instances | Path        |
| -----: | ---: | --------: | ----------- |
| 100.0% |  8 B |         1 | `(GC root)` |

### Retained size

Constructors ranked by bytes allocated for their instances and all nodes that would be freed if their instances were garbage collected.

|     % |    Size | Instances | Constructor                                                                                                   |
| ----: | ------: | --------: | ------------------------------------------------------------------------------------------------------------- |
|  6.4% | 10.4 MB |   120,343 | `<generic memory - inline alloc>`                                                                             |
|  3.9% | 6.28 MB |    11,696 | `<generic memory - malloc>`                                                                                   |
|  0.2% |  291 kB |       271 | `Memory{String}`                                                                                              |
| <0.1% |     8 B |         1 | `Base.Val{Char(0x64000000)}`                                                                                  |
| <0.1% |     8 B |         1 | `typeof(Base.close)`                                                                                          |
| <0.1% |     8 B |         1 | `Parsers.var"#36#37"`                                                                                         |
| <0.1% |     8 B |         1 | `typeof(Base.Filesystem.delayed_delete_ref)`                                                                  |
| <0.1% |     8 B |         1 | `typeof(Base.Threads.atomic_min!)`                                                                            |
| <0.1% |     8 B |         1 | `typeof(Base.SimdLoop.simd_outer_range)`                                                                      |
| <0.1% |     8 B |         1 | `typeof(Base.Threads.atomic_or!)`                                                                             |
| <0.1% |     8 B |         1 | `typeof(Base.PCRE.substring_length_bynumber)`                                                                 |
| <0.1% |     8 B |         1 | `Base.Broadcast.var"#_maxndims##0#_maxndims##1"{Tuple}`                                                       |
| <0.1% |     8 B |         1 | `Base.var"##_truncated_pipebuffer#392"`                                                                       |
| <0.1% |     8 B |         1 | `typeof(Base.JuliaSyntax.is_prec_pipe_gt)`                                                                    |
| <0.1% |     8 B |         1 | `Profile.var"#print_tree##0#print_tree##1"`                                                                   |
| <0.1% |     8 B |         1 | `Tuple{typeof(Base.Order.ord), typeof(Base.isless), typeof(Base.first), Nothing, Base.Order.ForwardOrdering}` |
| <0.1% |     8 B |         1 | `typeof(Base.TOML.set_marker!)`                                                                               |
| <0.1% |     8 B |         1 | `Tuple{Base.MathConstants.var"#4#5"}`                                                                         |
| <0.1% |     8 B |         1 | `Base.MathConstants.var"##BigFloat#7"`                                                                        |
| <0.1% |     8 B |         1 | `typeof(LinearAlgebra.matprod)`                                                                               |

#### Instances

Instances ranked by contribution to each constructor's retained size.

##### `<generic memory - inline alloc>`

|    % |    Size | Instances | Path                                                                                                                                                       |
| ---: | ------: | --------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2.5% |  262 kB |         1 | `.<native> Memory{Any} ← .arg1 Core.TypeMapLevel ← .defs Core.MethodTable`                                                                                 |
| 0.6% | 66.8 kB |         1 | `.<native> Memory{Any} ← .ref.mem Array{Any, 1} ← .backedges Core.MethodInstance`                                                                          |
| 0.6% | 65.5 kB |         1 | `.<native> Memory{Any} ← .ht Base.IdDict{Any, Any} ← .restriction Core.BindingPartition ← .partitions Core.Binding ← [7853] SimpleVector ← .bindings Base` |
| 0.6% | 65.5 kB |         1 | `.<native> Memory{Any} ← .arg1 Core.TypeMapLevel ← .cache Core.MethodCache ← .cache Core.MethodTable`                                                      |
| 0.6% | 65.5 kB |         1 | `.<native> Memory{Any} ← .name1 Core.TypeMapLevel ← .defs Core.MethodTable`                                                                                |

##### `<generic memory - malloc>`

|     % |    Size | Instances | Path                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ----: | ------: | --------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 80.4% | 5.05 MB |        10 | `.<native> Memory{UInt64} ← .ref.mem Array{UInt64, 1} ← [18446744073709552000] Memory{JSON3.Object{Base.CodeUnits{UInt8, String}, Array{UInt64, 1}}} ← .ref.mem Array{JSON3.Object{Base.CodeUnits{UInt8, String}, Array{UInt64, 1}}, 1} ← .local var (stack frame) ← .next frame (stack frame) ← .next frame (stack frame) ← .next frame (stack frame) ← .next frame (stack frame) ← .next frame (stack frame) ← .next frame (stack frame) ← .stack Task` |
|  2.5% |  157 kB |         1 | `.<native> Memory{Tuple{UInt64, UInt64, UInt64}} ← .ref.mem Array{Tuple{UInt64, UInt64, UInt64}, 1}`                                                                                                                                                                                                                                                                                                                                                      |
|  1.0% | 65.5 kB |         1 | `.<native> Memory{UInt16} ← .bindingkeyset Base`                                                                                                                                                                                                                                                                                                                                                                                                          |
|  1.0% | 65.5 kB |         1 | `.<native> Memory{Any} ← .leafcache Core.MethodCache ← .cache Core.MethodTable`                                                                                                                                                                                                                                                                                                                                                                           |
|  0.8% | 52.2 kB |         1 | `.<native> Memory{String} ← .ref.mem Array{String, 1} ← .exported_symbols LinearAlgebra.BLAS.LBTConfig ← .config LinearAlgebra.BLAS.ConfigCache`                                                                                                                                                                                                                                                                                                          |

##### `Memory{String}`

|     % |    Size | Instances | Path                                                                                                                                                                                                                                                         |
| ----: | ------: | --------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 54.2% |  158 kB |         1 | `.ref.mem Array{String, 1} ← .exported_symbols LinearAlgebra.BLAS.LBTConfig ← .config LinearAlgebra.BLAS.ConfigCache`                                                                                                                                        |
| 11.7% | 34.1 kB |         1 | `.keys Base.Dict{String, UInt16}`                                                                                                                                                                                                                            |
| 11.3% | 32.8 kB |         1 | `.vals Base.Dict{UInt16, String}`                                                                                                                                                                                                                            |
|  4.6% | 13.3 kB |         1 | `.vals Base.Dict{Union{Int64, Symbol}, String}`                                                                                                                                                                                                              |
|  1.3% | 3.81 kB |         1 | `.keys Base.Dict{String, Any} ← [18446744073709552000] Memory{Any} ← .vals Base.Dict{String, Any} ← .d Base.CachedTOMLDict ← [18446744073709552000] Memory{Base.CachedTOMLDict} ← .vals Base.Dict{String, Base.CachedTOMLDict} ← .d Base.TOMLCache{nothing}` |

##### `Base.Val{Char(0x64000000)}`

|      % | Size | Instances | Path                                   |
| -----: | ---: | --------: | -------------------------------------- |
| 100.0% |  8 B |         1 | `.instance Base.Val{Char(0x64000000)}` |

##### `typeof(Base.close)`

|      % | Size | Instances | Path        |
| -----: | ---: | --------: | ----------- |
| 100.0% |  8 B |         1 | `(GC root)` |

##### `Parsers.var"#36#37"`

|      % | Size | Instances | Path                            |
| -----: | ---: | --------: | ------------------------------- |
| 100.0% |  8 B |         1 | `.instance Parsers.var"#36#37"` |

##### `typeof(Base.Filesystem.delayed_delete_ref)`

|      % | Size | Instances | Path        |
| -----: | ---: | --------: | ----------- |
| 100.0% |  8 B |         1 | `(GC root)` |

##### `typeof(Base.Threads.atomic_min!)`

|      % | Size | Instances | Path        |
| -----: | ---: | --------: | ----------- |
| 100.0% |  8 B |         1 | `(GC root)` |

##### `typeof(Base.SimdLoop.simd_outer_range)`

|      % | Size | Instances | Path        |
| -----: | ---: | --------: | ----------- |
| 100.0% |  8 B |         1 | `(GC root)` |

##### `typeof(Base.Threads.atomic_or!)`

|      % | Size | Instances | Path        |
| -----: | ---: | --------: | ----------- |
| 100.0% |  8 B |         1 | `(GC root)` |

##### `typeof(Base.PCRE.substring_length_bynumber)`

|      % | Size | Instances | Path        |
| -----: | ---: | --------: | ----------- |
| 100.0% |  8 B |         1 | `(GC root)` |

##### `Base.Broadcast.var"#_maxndims##0#_maxndims##1"{Tuple}`

|      % | Size | Instances | Path                                                              |
| -----: | ---: | --------: | ----------------------------------------------------------------- |
| 100.0% |  8 B |         1 | `.instance Base.Broadcast.var"#_maxndims##0#_maxndims##1"{Tuple}` |

##### `Base.var"##_truncated_pipebuffer#392"`

|      % | Size | Instances | Path        |
| -----: | ---: | --------: | ----------- |
| 100.0% |  8 B |         1 | `(GC root)` |

##### `typeof(Base.JuliaSyntax.is_prec_pipe_gt)`

|      % | Size | Instances | Path        |
| -----: | ---: | --------: | ----------- |
| 100.0% |  8 B |         1 | `(GC root)` |

##### `Profile.var"#print_tree##0#print_tree##1"`

|      % | Size | Instances | Path                                                  |
| -----: | ---: | --------: | ----------------------------------------------------- |
| 100.0% |  8 B |         1 | `.instance Profile.var"#print_tree##0#print_tree##1"` |

##### `Tuple{typeof(Base.Order.ord), typeof(Base.isless), typeof(Base.first), Nothing, Base.Order.ForwardOrdering}`

|      % | Size | Instances | Path                                                                                                                    |
| -----: | ---: | --------: | ----------------------------------------------------------------------------------------------------------------------- |
| 100.0% |  8 B |         1 | `.instance Tuple{typeof(Base.Order.ord), typeof(Base.isless), typeof(Base.first), Nothing, Base.Order.ForwardOrdering}` |

##### `typeof(Base.TOML.set_marker!)`

|      % | Size | Instances | Path        |
| -----: | ---: | --------: | ----------- |
| 100.0% |  8 B |         1 | `(GC root)` |

##### `Tuple{Base.MathConstants.var"#4#5"}`

|      % | Size | Instances | Path                                            |
| -----: | ---: | --------: | ----------------------------------------------- |
| 100.0% |  8 B |         1 | `.instance Tuple{Base.MathConstants.var"#4#5"}` |

##### `Base.MathConstants.var"##BigFloat#7"`

|      % | Size | Instances | Path        |
| -----: | ---: | --------: | ----------- |
| 100.0% |  8 B |         1 | `(GC root)` |

##### `typeof(LinearAlgebra.matprod)`

|      % | Size | Instances | Path        |
| -----: | ---: | --------: | ----------- |
| 100.0% |  8 B |         1 | `(GC root)` |

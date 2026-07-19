# Sampling profile

Took 10.81s over 9,201 samples (1.2ms per sample).

| Category |      % |   Time | Samples |
| -------- | -----: | -----: | ------: |
| stdlib   | 100.0% | 10.80s |   8,995 |
| ours     |  <0.1% |  5.4ms |     206 |

## Hottest functions

### Self time

Functions ranked by time spent directly in the function body, excluding callees.

|     % |   Time | Samples | Function                                                                                                                                    | Location                                                                   |
| ----: | -----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| 98.7% | 10.67s |   5,767 | `UNMANAGED_CODE_TIME`                                                                                                                       | `<unknown>`                                                                |
|  0.1% |  5.6ms |      81 | `MakeGenericType(Type[])`                                                                                                                   | `System.RuntimeType`                                                       |
| <0.1% |  4.0ms |       3 | `ToUnionParseResults()`                                                                                                                     | `Argu.CliParser+CliParseResultAggregator`                                  |
| <0.1% |  4.0ms |       3 | `u_Expr(InputState)`                                                                                                                        | `Microsoft.FSharp.Quotations.PatternsModule`                               |
| <0.1% |  2.6ms |       1 | `StartsWith(String, StringComparison)`                                                                                                      | `System.String`                                                            |
| <0.1% |  1.4ms |   1,712 | `Invoke(BindingEnv)`                                                                                                                        | `Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`                   |
| <0.1% |  1.3ms |       1 | `ToArray()`                                                                                                                                 | ``System.Collections.Generic.List`1[System.__Canon]``                      |
| <0.1% |  1.3ms |       2 | ``Parse(FSharpOption`1<String[]>, FSharpOption`1<IConfigurationReader>, FSharpOption`1<bool>, FSharpOption`1<bool>, FSharpOption`1<bool>)`` | ``Argu.ArgumentParser`1[System.__Canon]``                                  |
| <0.1% |  1.3ms |       1 | ``AddMany(IEnumerable`1<!0>)``                                                                                                              | ``Microsoft.FSharp.Core.CompilerServices.ListCollector`1[System.__Canon]`` |
| <0.1% |  0.1µs |     755 | ``GetUnionCases(Type, FSharpOption`1<BindingFlags>)``                                                                                       | `Microsoft.FSharp.Reflection.FSharpType`                                   |
| <0.1% | <0.1µs |      13 | `deserialize(Type, Type[], Type[], FSharpExpr[], unsigned int8[])`                                                                          | `Microsoft.FSharp.Quotations.PatternsModule`                               |
| <0.1% | <0.1µs |     183 | `main(String[])`                                                                                                                            | `Profile`                                                                  |
| <0.1% | <0.1µs |       4 | `postProcess@648(UnionArgInfo)`                                                                                                             | `Argu.PreCompute`                                                          |
| <0.1% | <0.1µs |       1 | `.ctor(String, RegexOptions, TimeSpan, CultureInfo)`                                                                                        | `System.Text.RegularExpressions.Regex`                                     |
| <0.1% | <0.1µs |       2 | `checkUnionArgInfo(UnionArgInfo)`                                                                                                           | `Argu.PreCompute`                                                          |
| <0.1% | <0.1µs |       2 | ``ToArray(IEnumerable`1<!!0>)``                                                                                                             | `Microsoft.FSharp.Collections.SeqModule`                                   |
| <0.1% | <0.1µs |       1 | `parseKeyValueConfig(IConfigurationReader, UnionArgInfo)`                                                                                   | `Argu.KeyValueParser`                                                      |
| <0.1% | <0.1µs |       2 | ``preComputeUnionCaseArgInfo(FSharpList`1<Type>, FSharpOption`1<HelpParam>, FSharpFunc`2<Unit, UnionArgInfo>, UnionCaseInfo)``              | `Argu.PreCompute`                                                          |
| <0.1% | <0.1µs |       1 | `parseCommandLinePartial(CliParseState, UnionArgInfo, CliParseResultAggregator)`                                                            | `Argu.CliParser`                                                           |
| <0.1% | <0.1µs |       1 | `parseCommandLineInner(CliParseState, UnionArgInfo)`                                                                                        | `Argu.CliParser`                                                           |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise. Where shown callers fell short of the coverage target, the hottest hidden callers are also shown.

##### `UNMANAGED_CODE_TIME` (`<unknown>`)

|     % |  Time | Samples | Caller                                                   | Location                                     |
| ----: | ----: | ------: | -------------------------------------------------------- | -------------------------------------------- |
| 60.8% | 6.48s |   3,552 | `?!?`                                                    | `<unknown>`                                  |
| 35.4% | 3.78s |   1,950 | `MakeGenericType(Type[])`                                | `System.RuntimeType`                         |
|  0.1% | 6.8ms |       4 | `main(String[])`                                         | `Profile`                                    |
| <0.1% | 4.0ms |       1 | `parseCommandLineInner(CliParseState, UnionArgInfo)`     | `Argu.CliParser`                             |
| <0.1% | 2.7ms |       2 | ``add(IComparer`1<!!0>, !!0, !!1, MapTree`2<!!0, !!1>)`` | `Microsoft.FSharp.Collections.MapTreeModule` |

##### `MakeGenericType(Type[])` (`System.RuntimeType`)

|      % |   Time | Samples | Caller               | Location                                                 |
| -----: | -----: | ------: | -------------------- | -------------------------------------------------------- |
| 100.0% |  5.6ms |      73 | `Invoke(BindingEnv)` | `Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965` |
|  <0.1% | <0.1µs |       3 | `main(String[])`     | `Profile`                                                |

##### `ToUnionParseResults()` (`Argu.CliParser+CliParseResultAggregator`)

|      % |  Time | Samples | Caller                                                                                                                                      | Location                                  |
| -----: | ----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- |
| 100.0% | 4.0ms |       3 | ``Parse(FSharpOption`1<String[]>, FSharpOption`1<IConfigurationReader>, FSharpOption`1<bool>, FSharpOption`1<bool>, FSharpOption`1<bool>)`` | ``Argu.ArgumentParser`1[System.__Canon]`` |

##### `u_Expr(InputState)` (`Microsoft.FSharp.Quotations.PatternsModule`)

|     % |  Time | Samples | Caller               | Location                                                |
| ----: | ----: | ------: | -------------------- | ------------------------------------------------------- |
| 33.6% | 1.3ms |       1 | `Invoke(InputState)` | `Microsoft.FSharp.Quotations.PatternsModule+attrs@1993` |
| 33.2% | 1.3ms |       1 | `u_Expr(InputState)` | `Microsoft.FSharp.Quotations.PatternsModule`            |

##### `StartsWith(String, StringComparison)` (`System.String`)

|      % |  Time | Samples | Caller                               | Location                                          |
| -----: | ----: | ------: | ------------------------------------ | ------------------------------------------------- |
| 100.0% | 2.6ms |       1 | `TryGetPrefix(String, String&, !0&)` | ``Argu.Utils+PrefixDictionary`1[System.__Canon]`` |

##### `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`)

|      % |  Time | Samples | Caller                                                                               | Location                                  |
| -----: | ----: | ------: | ------------------------------------------------------------------------------------ | ----------------------------------------- |
| 100.0% | 1.4ms |       2 | ``mapToFreshConsTail(FSharpList`1<!!0>, FSharpFunc`2<!!1, !!0>, FSharpList`1<!!1>)`` | `Microsoft.FSharp.Primitives.Basics.List` |
|  <0.1% | 0.5µs |   1,691 | `main(String[])`                                                                     | `Profile`                                 |

##### `ToArray()` (``System.Collections.Generic.List`1[System.__Canon]``)

|      % |  Time | Samples | Caller                  | Location                                  |
| -----: | ----: | ------: | ----------------------- | ----------------------------------------- |
| 100.0% | 1.3ms |       1 | `ToUnionParseResults()` | `Argu.CliParser+CliParseResultAggregator` |

##### ``Parse(FSharpOption`1<String[]>, FSharpOption`1<IConfigurationReader>, FSharpOption`1<bool>, FSharpOption`1<bool>, FSharpOption`1<bool>)`` (``Argu.ArgumentParser`1[System.__Canon]``)

|      % |  Time | Samples | Caller           | Location  |
| -----: | ----: | ------: | ---------------- | --------- |
| 100.0% | 1.3ms |       2 | `main(String[])` | `Profile` |

##### ``AddMany(IEnumerable`1<!0>)`` (``Microsoft.FSharp.Core.CompilerServices.ListCollector`1[System.__Canon]``)

|      % |  Time | Samples | Caller                  | Location                                  |
| -----: | ----: | ------: | ----------------------- | ----------------------------------------- |
| 100.0% | 1.3ms |       1 | `ToUnionParseResults()` | `Argu.CliParser+CliParseResultAggregator` |

##### ``GetUnionCases(Type, FSharpOption`1<BindingFlags>)`` (`Microsoft.FSharp.Reflection.FSharpType`)

|      % |  Time | Samples | Caller                           | Location                                     |
| -----: | ----: | ------: | -------------------------------- | -------------------------------------------- |
| 100.0% | 0.1µs |     755 | `getUnionCaseInfo(Type, String)` | `Microsoft.FSharp.Quotations.PatternsModule` |

##### `deserialize(Type, Type[], Type[], FSharpExpr[], unsigned int8[])` (`Microsoft.FSharp.Quotations.PatternsModule`)

|      % |   Time | Samples | Caller                                                               | Location                                 |
| -----: | -----: | ------: | -------------------------------------------------------------------- | ---------------------------------------- |
| 100.0% | <0.1µs |      13 | `Deserialize40(Type, Type[], Type[], FSharpExpr[], unsigned int8[])` | `Microsoft.FSharp.Quotations.FSharpExpr` |

##### `postProcess@648(UnionArgInfo)` (`Argu.PreCompute`)

|      % |   Time | Samples | Caller                            | Location          |
| -----: | -----: | ------: | --------------------------------- | ----------------- |
| 100.0% | <0.1µs |       4 | `checkUnionArgInfo(UnionArgInfo)` | `Argu.PreCompute` |

##### `.ctor(String, RegexOptions, TimeSpan, CultureInfo)` (`System.Text.RegularExpressions.Regex`)

|      % |   Time | Samples | Caller     | Location                              |
| -----: | -----: | ------: | ---------- | ------------------------------------- |
| 100.0% | <0.1µs |       1 | `.cctor()` | `<StartupCode$Argu>.$Argu.PreCompute` |

##### `checkUnionArgInfo(UnionArgInfo)` (`Argu.PreCompute`)

|      % |   Time | Samples | Caller         | Location                                                         |
| -----: | -----: | ------: | -------------- | ---------------------------------------------------------------- |
| 100.0% | <0.1µs |       2 | `Invoke(Unit)` | `<StartupCode$Argu>.$ArgumentParser+-cctor@87-1[System.__Canon]` |

##### ``ToArray(IEnumerable`1<!!0>)`` (`Microsoft.FSharp.Collections.SeqModule`)

|     % |   Time | Samples | Caller         | Location                                                                          |
| ----: | -----: | ------: | -------------- | --------------------------------------------------------------------------------- |
| 64.6% | <0.1µs |       1 | `Invoke(Unit)` | `Microsoft.FSharp.Collections.SeqModule+SortBy@1385[System.__Canon,System.Int32]` |
| 35.4% | <0.1µs |       1 | `Invoke(Unit)` | `Argu.PreCompute+Helpers+groupedSwitchRegex@229`                                  |

##### `parseKeyValueConfig(IConfigurationReader, UnionArgInfo)` (`Argu.KeyValueParser`)

|      % |   Time | Samples | Caller                                                                                                                                      | Location                                  |
| -----: | -----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- |
| 100.0% | <0.1µs |       1 | ``Parse(FSharpOption`1<String[]>, FSharpOption`1<IConfigurationReader>, FSharpOption`1<bool>, FSharpOption`1<bool>, FSharpOption`1<bool>)`` | ``Argu.ArgumentParser`1[System.__Canon]`` |

##### ``preComputeUnionCaseArgInfo(FSharpList`1<Type>, FSharpOption`1<HelpParam>, FSharpFunc`2<Unit, UnionArgInfo>, UnionCaseInfo)`` (`Argu.PreCompute`)

|      % |   Time | Samples | Caller                  | Location                         |
| -----: | -----: | ------: | ----------------------- | -------------------------------- |
| 100.0% | <0.1µs |       2 | `Invoke(UnionCaseInfo)` | `Argu.PreCompute+caseInfo@576-2` |

##### `parseCommandLinePartial(CliParseState, UnionArgInfo, CliParseResultAggregator)` (`Argu.CliParser`)

|      % |   Time | Samples | Caller                                               | Location         |
| -----: | -----: | ------: | ---------------------------------------------------- | ---------------- |
| 100.0% | <0.1µs |       1 | `parseCommandLineInner(CliParseState, UnionArgInfo)` | `Argu.CliParser` |

##### `parseCommandLineInner(CliParseState, UnionArgInfo)` (`Argu.CliParser`)

|      % |   Time | Samples | Caller                                                                                                   | Location         |
| -----: | -----: | ------: | -------------------------------------------------------------------------------------------------------- | ---------------- |
| 100.0% | <0.1µs |       1 | ``parseCommandLine(UnionArgInfo, String, FSharpOption`1<String>, int32, IExiter, bool, bool, String[])`` | `Argu.CliParser` |

### Total time

Functions ranked by total time spent in the function and all its callees.

|     % |    Time | Samples | Function                                                                                                                                    | Location                                                         |
| ----: | ------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| 99.8% |  10.79s |   9,189 | `main(String[])`                                                                                                                            | `Profile`                                                        |
| 98.7% |  10.67s |   5,767 | `UNMANAGED_CODE_TIME`                                                                                                                       | `<unknown>`                                                      |
| 95.1% |  10.28s |   8,510 | `Invoke(BindingEnv)`                                                                                                                        | `Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`         |
| 56.8% |   6.14s |   4,513 | ``GetUnionCases(Type, FSharpOption`1<BindingFlags>)``                                                                                       | `Microsoft.FSharp.Reflection.FSharpType`                         |
| 41.4% |   4.47s |   2,507 | `MakeGenericType(Type[])`                                                                                                                   | `System.RuntimeType`                                             |
|  4.0% | 431.0ms |     411 | `deserialize(Type, Type[], Type[], FSharpExpr[], unsigned int8[])`                                                                          | `Microsoft.FSharp.Quotations.PatternsModule`                     |
|  3.6% | 384.3ms |     366 | `Deserialize40(Type, Type[], Type[], FSharpExpr[], unsigned int8[])`                                                                        | `Microsoft.FSharp.Quotations.FSharpExpr`                         |
|  0.6% |  65.4ms |      82 | `CreateValue()`                                                                                                                             | ``System.Lazy`1[System.__Canon]``                                |
|  0.6% |  61.4ms |      80 | ``.ctor(FSharpOption`1<String>, FSharpOption`1<String>, FSharpOption`1<int32>, FSharpOption`1<IExiter>, FSharpOption`1<bool>)``             | ``Argu.ArgumentParser`1[System.__Canon]``                        |
|  0.5% |  56.1ms |      73 | `Invoke(Unit)`                                                                                                                              | `<StartupCode$Argu>.$ArgumentParser+-cctor@87-1[System.__Canon]` |
|  0.5% |  55.8ms |      53 | ``Parse(FSharpOption`1<String[]>, FSharpOption`1<IConfigurationReader>, FSharpOption`1<bool>, FSharpOption`1<bool>, FSharpOption`1<bool>)`` | ``Argu.ArgumentParser`1[System.__Canon]``                        |
|  0.4% |  42.8ms |      57 | `checkUnionArgInfo(UnionArgInfo)`                                                                                                           | `Argu.PreCompute`                                                |
|  0.4% |  41.5ms |      54 | `postProcess@648(UnionArgInfo)`                                                                                                             | `Argu.PreCompute`                                                |
|  0.3% |  29.2ms |      32 | `parseKeyValueConfig(IConfigurationReader, UnionArgInfo)`                                                                                   | `Argu.KeyValueParser`                                            |
|  0.3% |  27.9ms |      30 | `parseKeyValuePartial(KeyValueParseState, UnionCaseArgInfo)`                                                                                | `Argu.KeyValueParser`                                            |
|  0.2% |  26.5ms |      27 | `get_AppSettings()`                                                                                                                         | `System.Configuration.ConfigurationManager`                      |
|  0.2% |  26.5ms |      27 | `GetValue(String)`                                                                                                                          | `Argu.AppSettingsConfigurationReader.Argu.IConfigurationReader`  |
|  0.2% |  18.5ms |      14 | `parseCommandLineInner(CliParseState, UnionArgInfo)`                                                                                        | `Argu.CliParser`                                                 |
|  0.2% |  18.5ms |      14 | ``parseCommandLine(UnionArgInfo, String, FSharpOption`1<String>, int32, IExiter, bool, bool, String[])``                                    | `Argu.CliParser`                                                 |
|  0.2% |  17.3ms |      13 | `u_Expr(InputState)`                                                                                                                        | `Microsoft.FSharp.Quotations.PatternsModule`                     |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse. Where shown callees fell short of the coverage target, the hottest hidden callees are also shown.

##### `main(String[])` (`Profile`)

|     % |    Time | Samples | Callee                                                                                                                                      | Location                                                 |
| ----: | ------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| 91.5% |   9.87s |   8,203 | `Invoke(BindingEnv)`                                                                                                                        | `Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965` |
|  3.6% | 384.3ms |     366 | `Deserialize40(Type, Type[], Type[], FSharpExpr[], unsigned int8[])`                                                                        | `Microsoft.FSharp.Quotations.FSharpExpr`                 |
|  3.1% | 333.8ms |     232 | `MakeGenericType(Type[])`                                                                                                                   | `System.RuntimeType`                                     |
|  0.6% |  61.4ms |      80 | ``.ctor(FSharpOption`1<String>, FSharpOption`1<String>, FSharpOption`1<int32>, FSharpOption`1<IExiter>, FSharpOption`1<bool>)``             | ``Argu.ArgumentParser`1[System.__Canon]``                |
|  0.5% |  55.8ms |      53 | ``Parse(FSharpOption`1<String[]>, FSharpOption`1<IConfigurationReader>, FSharpOption`1<bool>, FSharpOption`1<bool>, FSharpOption`1<bool>)`` | ``Argu.ArgumentParser`1[System.__Canon]``                |

##### `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`)

|     % |  Time | Samples | Callee                                                     | Location                                                         |
| ----: | ----: | ------: | ---------------------------------------------------------- | ---------------------------------------------------------------- |
| 59.8% | 6.15s |   4,528 | ``Invoke(FSharpList`1<Type>, FSharpValueOption`1<int32>)`` | `Microsoft.FSharp.Quotations.PatternsModule+u_constSpec@2137-10` |
| 35.2% | 3.62s |   1,908 | `MakeGenericType(Type[])`                                  | `System.RuntimeType`                                             |
| <0.1% | 2.7ms |       2 | `UNMANAGED_CODE_TIME`                                      | `<unknown>`                                                      |

##### ``GetUnionCases(Type, FSharpOption`1<BindingFlags>)`` (`Microsoft.FSharp.Reflection.FSharpType`)

|     % |  Time | Samples | Callee                                  | Location                           |
| ----: | ----: | ------: | --------------------------------------- | ---------------------------------- |
| 77.4% | 4.75s |   2,801 | `getTypeOfReprType(Type, BindingFlags)` | `Microsoft.FSharp.Reflection.Impl` |

##### `MakeGenericType(Type[])` (`System.RuntimeType`)

|     % |  Time | Samples | Callee                | Location    |
| ----: | ----: | ------: | --------------------- | ----------- |
| 84.5% | 3.78s |   1,950 | `UNMANAGED_CODE_TIME` | `<unknown>` |

##### `deserialize(Type, Type[], Type[], FSharpExpr[], unsigned int8[])` (`Microsoft.FSharp.Quotations.PatternsModule`)

|     % |    Time | Samples | Callee               | Location                                                   |
| ----: | ------: | ------: | -------------------- | ---------------------------------------------------------- |
| 96.0% | 413.7ms |     383 | `Invoke(BindingEnv)` | `Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1994-5` |

##### `Deserialize40(Type, Type[], Type[], FSharpExpr[], unsigned int8[])` (`Microsoft.FSharp.Quotations.FSharpExpr`)

|      % |    Time | Samples | Callee                                                             | Location                                     |
| -----: | ------: | ------: | ------------------------------------------------------------------ | -------------------------------------------- |
| 100.0% | 384.3ms |     366 | `deserialize(Type, Type[], Type[], FSharpExpr[], unsigned int8[])` | `Microsoft.FSharp.Quotations.PatternsModule` |

##### `CreateValue()` (``System.Lazy`1[System.__Canon]``)

|      % |   Time | Samples | Callee                                      | Location                          |
| -----: | -----: | ------: | ------------------------------------------- | --------------------------------- |
| 100.0% | 65.4ms |      82 | `ExecutionAndPublication(LazyHelper, bool)` | ``System.Lazy`1[System.__Canon]`` |

##### ``.ctor(FSharpOption`1<String>, FSharpOption`1<String>, FSharpOption`1<int32>, FSharpOption`1<IExiter>, FSharpOption`1<bool>)`` (``Argu.ArgumentParser`1[System.__Canon]``)

|     % |   Time | Samples | Callee                       | Location                          |
| ----: | -----: | ------: | ---------------------------- | --------------------------------- |
| 91.4% | 56.1ms |      73 | `CreateValue()`              | ``System.Lazy`1[System.__Canon]`` |
|  8.6% |  5.3ms |       7 | `getDefaultCharacterWidth()` | `Argu.Utils`                      |

##### `Invoke(Unit)` (`<StartupCode$Argu>.$ArgumentParser+-cctor@87-1[System.__Canon]`)

|     % |   Time | Samples | Callee                            | Location                          |
| ----: | -----: | ------: | --------------------------------- | --------------------------------- |
| 76.3% | 42.8ms |      57 | `checkUnionArgInfo(UnionArgInfo)` | `Argu.PreCompute`                 |
| 23.7% | 13.3ms |      16 | `CreateValue()`                   | ``System.Lazy`1[System.__Canon]`` |

##### ``Parse(FSharpOption`1<String[]>, FSharpOption`1<IConfigurationReader>, FSharpOption`1<bool>, FSharpOption`1<bool>, FSharpOption`1<bool>)`` (``Argu.ArgumentParser`1[System.__Canon]``)

|     % |   Time | Samples | Callee                                                                                                                                             | Location                                  |
| ----: | -----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- |
| 52.3% | 29.2ms |      32 | `parseKeyValueConfig(IConfigurationReader, UnionArgInfo)`                                                                                          | `Argu.KeyValueParser`                     |
| 33.2% | 18.5ms |      14 | ``parseCommandLine(UnionArgInfo, String, FSharpOption`1<String>, int32, IExiter, bool, bool, String[])``                                           | `Argu.CliParser`                          |
|  7.2% |  4.0ms |       3 | `ToUnionParseResults()`                                                                                                                            | `Argu.CliParser+CliParseResultAggregator` |
|  2.4% |  1.3ms |       1 | ``postProcessResults(UnionArgInfo, bool, FSharpOption`1<FSharpChoice`2<UnionCaseParseResult[], Exception>[]>, FSharpOption`1<UnionParseResults>)`` | `Argu.CommonParsers`                      |
|  2.4% |  1.3ms |       1 | `parseCommandLinePartial(CliParseState, UnionArgInfo, CliParseResultAggregator)`                                                                   | `Argu.CliParser`                          |

##### `checkUnionArgInfo(UnionArgInfo)` (`Argu.PreCompute`)

|     % |   Time | Samples | Callee                          | Location          |
| ----: | -----: | ------: | ------------------------------- | ----------------- |
| 96.9% | 41.5ms |      54 | `postProcess@648(UnionArgInfo)` | `Argu.PreCompute` |
|  3.1% |  1.3ms |       1 | `UNMANAGED_CODE_TIME`           | `<unknown>`       |

##### `postProcess@648(UnionArgInfo)` (`Argu.PreCompute`)

|     % |   Time | Samples | Callee                                                   | Location                                 |
| ----: | -----: | ------: | -------------------------------------------------------- | ---------------------------------------- |
| 58.2% | 24.2ms |      30 | `CreateValue()`                                          | ``System.Lazy`1[System.__Canon]``        |
| 32.1% | 13.3ms |      17 | ``TryFind(FSharpFunc`2<!!0, bool>, IEnumerable`1<!!0>)`` | `Microsoft.FSharp.Collections.SeqModule` |
|  6.5% |  2.7ms |       2 | `get_Value()`                                            | ``System.Lazy`1[System.Boolean]``        |
|  3.2% |  1.3ms |       1 | ``Append(IEnumerable`1<!!0>, IEnumerable`1<!!0>)``       | `Microsoft.FSharp.Collections.SeqModule` |

##### `parseKeyValueConfig(IConfigurationReader, UnionArgInfo)` (`Argu.KeyValueParser`)

|     % |   Time | Samples | Callee                                                       | Location                                   |
| ----: | -----: | ------: | ------------------------------------------------------------ | ------------------------------------------ |
| 95.5% | 27.9ms |      30 | `parseKeyValuePartial(KeyValueParseState, UnionCaseArgInfo)` | `Argu.KeyValueParser`                      |
|  4.5% |  1.3ms |       1 | `.ctor(UnionArgInfo)`                                        | `Argu.KeyValueParser+KeyValueParseResults` |

##### `parseKeyValuePartial(KeyValueParseState, UnionCaseArgInfo)` (`Argu.KeyValueParser`)

|     % |   Time | Samples | Callee                | Location                                                        |
| ----: | -----: | ------: | --------------------- | --------------------------------------------------------------- |
| 95.1% | 26.5ms |      27 | `GetValue(String)`    | `Argu.AppSettingsConfigurationReader.Argu.IConfigurationReader` |
|  4.9% |  1.4ms |       1 | `UNMANAGED_CODE_TIME` | `<unknown>`                                                     |

##### `get_AppSettings()` (`System.Configuration.ConfigurationManager`)

|      % |   Time | Samples | Callee               | Location                                    |
| -----: | -----: | ------: | -------------------- | ------------------------------------------- |
| 100.0% | 26.5ms |      27 | `GetSection(String)` | `System.Configuration.ConfigurationManager` |

##### `GetValue(String)` (`Argu.AppSettingsConfigurationReader.Argu.IConfigurationReader`)

|      % |   Time | Samples | Callee              | Location                                    |
| -----: | -----: | ------: | ------------------- | ------------------------------------------- |
| 100.0% | 26.5ms |      27 | `get_AppSettings()` | `System.Configuration.ConfigurationManager` |

##### `parseCommandLineInner(CliParseState, UnionArgInfo)` (`Argu.CliParser`)

|     % |   Time | Samples | Callee                                                                           | Location                                  |
| ----: | -----: | ------: | -------------------------------------------------------------------------------- | ----------------------------------------- |
| 64.5% | 12.0ms |      10 | `parseCommandLinePartial(CliParseState, UnionArgInfo, CliParseResultAggregator)` | `Argu.CliParser`                          |
| 21.4% |  4.0ms |       1 | `UNMANAGED_CODE_TIME`                                                            | `<unknown>`                               |
| 14.1% |  2.6ms |       2 | `ToUnionParseResults()`                                                          | `Argu.CliParser+CliParseResultAggregator` |

##### ``parseCommandLine(UnionArgInfo, String, FSharpOption`1<String>, int32, IExiter, bool, bool, String[])`` (`Argu.CliParser`)

|      % |   Time | Samples | Callee                                               | Location         |
| -----: | -----: | ------: | ---------------------------------------------------- | ---------------- |
| 100.0% | 18.5ms |      14 | `parseCommandLineInner(CliParseState, UnionArgInfo)` | `Argu.CliParser` |

##### `u_Expr(InputState)` (`Microsoft.FSharp.Quotations.PatternsModule`)

|     % |   Time | Samples | Callee                                                                       | Location                                                    |
| ----: | -----: | ------: | ---------------------------------------------------------------------------- | ----------------------------------------------------------- |
| 61.4% | 10.6ms |       8 | ``u_list_aux(FSharpFunc`2<InputState, !!0>, FSharpList`1<!!0>, InputState)`` | `Microsoft.FSharp.Quotations.PatternsModule+SimpleUnpickle` |
| 38.6% |  6.7ms |       5 | `u_Expr(InputState)`                                                         | `Microsoft.FSharp.Quotations.PatternsModule`                |
|  7.9% |  1.4ms |       1 | `UNMANAGED_CODE_TIME`                                                        | `<unknown>`                                                 |

## Hottest call stacks

Call stacks ranked by time spent in their leaf frame.

Common call stack: `main(String[])` (`Profile`)

|     % |    Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ----: | ------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 54.6% |   5.89s |   3,165 | `UNMANAGED_CODE_TIME` ← ``GetUnionCases(Type, FSharpOption`1<BindingFlags>)`` (`Microsoft.FSharp.Reflection.FSharpType`) ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 31.0% |   3.35s |   1,657 | `UNMANAGED_CODE_TIME` ← `MakeGenericType(Type[])` (`System.RuntimeType`) ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`) ← `Invoke(BindingEnv)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  5.3% | 578.2ms |     408 | `UNMANAGED_CODE_TIME` ← `MakeGenericType(Type[])` (`System.RuntimeType`) ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  3.1% | 333.8ms |     229 | `UNMANAGED_CODE_TIME` ← `MakeGenericType(Type[])` (`System.RuntimeType`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  1.4% | 153.9ms |      87 | `UNMANAGED_CODE_TIME` ← ``GetUnionCases(Type, FSharpOption`1<BindingFlags>)`` (`Microsoft.FSharp.Reflection.FSharpType`) ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`) ← `deserialize(Type, Type[], Type[], FSharpExpr[], unsigned int8[])` (`Microsoft.FSharp.Quotations.PatternsModule`) ← `Deserialize40(Type, Type[], Type[], FSharpExpr[], unsigned int8[])` (`Microsoft.FSharp.Quotations.FSharpExpr`)                                                                                                                                                                                                                                                         |
|  1.1% | 121.6ms |      68 | `UNMANAGED_CODE_TIME` ← `MakeGenericType(Type[])` (`System.RuntimeType`) ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`) ← `Invoke(BindingEnv)` ← `deserialize(Type, Type[], Type[], FSharpExpr[], unsigned int8[])` (`Microsoft.FSharp.Quotations.PatternsModule`) ← `Deserialize40(Type, Type[], Type[], FSharpExpr[], unsigned int8[])` (`Microsoft.FSharp.Quotations.FSharpExpr`)                                                                                                                                                                                                                                                                                  |
|  0.4% |  41.7ms |      55 | ``GetUnionCases(Type, FSharpOption`1<BindingFlags>)`` (`Microsoft.FSharp.Reflection.FSharpType`) ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`) ← `deserialize(Type, Type[], Type[], FSharpExpr[], unsigned int8[])` (`Microsoft.FSharp.Quotations.PatternsModule`) ← `Deserialize40(Type, Type[], Type[], FSharpExpr[], unsigned int8[])` (`Microsoft.FSharp.Quotations.FSharpExpr`)                                                                                                                                                                                                                                                                                 |
|  0.2% |  26.5ms |      17 | `UNMANAGED_CODE_TIME` ← `get_AppSettings()` (`System.Configuration.ConfigurationManager`) ← `GetValue(String)` (`Argu.AppSettingsConfigurationReader.Argu.IConfigurationReader`) ← `parseKeyValuePartial(KeyValueParseState, UnionCaseArgInfo)` (`Argu.KeyValueParser`) ← `parseKeyValueConfig(IConfigurationReader, UnionArgInfo)` ← ``Parse(FSharpOption`1<String[]>, FSharpOption`1<IConfigurationReader>, FSharpOption`1<bool>, FSharpOption`1<bool>, FSharpOption`1<bool>)`` (``Argu.ArgumentParser`1[System.__Canon]``)                                                                                                                                                                            |
|  0.2% |  25.6ms |      30 | `MakeGenericType(Type[])` (`System.RuntimeType`) ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`) ← `Invoke(BindingEnv)` ← `deserialize(Type, Type[], Type[], FSharpExpr[], unsigned int8[])` (`Microsoft.FSharp.Quotations.PatternsModule`) ← `Deserialize40(Type, Type[], Type[], FSharpExpr[], unsigned int8[])` (`Microsoft.FSharp.Quotations.FSharpExpr`)                                                                                                                                                                                                                                                                                                          |
|  0.2% |  24.1ms |   1,189 | ``GetUnionCases(Type, FSharpOption`1<BindingFlags>)`` (`Microsoft.FSharp.Reflection.FSharpType`) ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  0.2% |  22.7ms |      13 | `UNMANAGED_CODE_TIME` ← ``GetUnionCases(Type, FSharpOption`1<BindingFlags>)`` (`Microsoft.FSharp.Reflection.FSharpType`) ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`) ← `deserialize(Type, Type[], Type[], FSharpExpr[], unsigned int8[])` (`Microsoft.FSharp.Quotations.PatternsModule`)                                                                                                                                                                                                                                                                                                                                                                           |
|  0.2% |  17.7ms |      13 | `UNMANAGED_CODE_TIME` ← `MakeGenericType(Type[])` (`System.RuntimeType`) ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`) ← `deserialize(Type, Type[], Type[], FSharpExpr[], unsigned int8[])` (`Microsoft.FSharp.Quotations.PatternsModule`) ← `Deserialize40(Type, Type[], Type[], FSharpExpr[], unsigned int8[])` (`Microsoft.FSharp.Quotations.FSharpExpr`)                                                                                                                                                                                                                                                                                                         |
|  0.1% |  16.1ms |      10 | `UNMANAGED_CODE_TIME` ← `MakeGenericType(Type[])` (`System.RuntimeType`) ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`) ← `Invoke(BindingEnv)` ← `deserialize(Type, Type[], Type[], FSharpExpr[], unsigned int8[])` (`Microsoft.FSharp.Quotations.PatternsModule`)                                                                                                                                                                                                                                                                                                                                                                                                    |
|  0.1% |  12.2ms |       9 | `UNMANAGED_CODE_TIME` ← `MakeGenericType(Type[])` (`System.RuntimeType`) ← `Cast(FSharpExpr)` (`Microsoft.FSharp.Quotations.FSharpExpr`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  0.1% |  10.7ms |       8 | `UNMANAGED_CODE_TIME` ← ``TryFind(FSharpFunc`2<!!0, bool>, IEnumerable`1<!!0>)`` (`Microsoft.FSharp.Collections.SeqModule`) ← `postProcess@648(UnionArgInfo)` (`Argu.PreCompute`) ← `checkUnionArgInfo(UnionArgInfo)` ← `Invoke(Unit)` (`<StartupCode$Argu>.$ArgumentParser+-cctor@87-1[System.__Canon]`) ← `CreateValue()` (``System.Lazy`1[System.__Canon]``) ← ``.ctor(FSharpOption`1<String>, FSharpOption`1<String>, FSharpOption`1<int32>, FSharpOption`1<IExiter>, FSharpOption`1<bool>)`` (``Argu.ArgumentParser`1[System.__Canon]``)                                                                                                                                                            |
|  0.1% |   9.5ms |       7 | `UNMANAGED_CODE_TIME` ← `CreateValue()` (``System.Lazy`1[System.__Canon]``) ← `postProcess@648(UnionArgInfo)` (`Argu.PreCompute`) ← `checkUnionArgInfo(UnionArgInfo)` ← `Invoke(Unit)` (`<StartupCode$Argu>.$ArgumentParser+-cctor@87-1[System.__Canon]`) ← `CreateValue()` (``System.Lazy`1[System.__Canon]``) ← ``.ctor(FSharpOption`1<String>, FSharpOption`1<String>, FSharpOption`1<int32>, FSharpOption`1<IExiter>, FSharpOption`1<bool>)`` (``Argu.ArgumentParser`1[System.__Canon]``)                                                                                                                                                                                                            |
|  0.1% |   7.9ms |       5 | `UNMANAGED_CODE_TIME` ← `MakeGenericType(Type[])` (`System.RuntimeType`) ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`) ← `deserialize(Type, Type[], Type[], FSharpExpr[], unsigned int8[])` (`Microsoft.FSharp.Quotations.PatternsModule`)                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  0.1% |   6.8ms |       4 | `UNMANAGED_CODE_TIME`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  0.1% |   6.7ms |       4 | `UNMANAGED_CODE_TIME` ← `.ctor(String, RegexOptions, TimeSpan, CultureInfo)` (`System.Text.RegularExpressions.Regex`) ← `.cctor()` (`<StartupCode$Argu>.$Argu.PreCompute`) ← `.cctor()` (`Argu.PreCompute`) ← `preComputeUnionArgInfo()` ← `Invoke(Unit)` (`<StartupCode$Argu>.$ArgumentParser+-cctor@86[System.__Canon]`) ← `CreateValue()` (``System.Lazy`1[System.__Canon]``) ← `Invoke(Unit)` (`<StartupCode$Argu>.$ArgumentParser+-cctor@87-1[System.__Canon]`) ← `CreateValue()` (``System.Lazy`1[System.__Canon]``) ← ``.ctor(FSharpOption`1<String>, FSharpOption`1<String>, FSharpOption`1<int32>, FSharpOption`1<IExiter>, FSharpOption`1<bool>)`` (``Argu.ArgumentParser`1[System.__Canon]``) |
|  0.1% |   6.5ms |       5 | `u_Expr(InputState)` (`Microsoft.FSharp.Quotations.PatternsModule`) ← `u_Expr(InputState)` ← `deserialize(Type, Type[], Type[], FSharpExpr[], unsigned int8[])` ← `Deserialize40(Type, Type[], Type[], FSharpExpr[], unsigned int8[])` (`Microsoft.FSharp.Quotations.FSharpExpr`)                                                                                                                                                                                                                                                                                                                                                                                                                        |

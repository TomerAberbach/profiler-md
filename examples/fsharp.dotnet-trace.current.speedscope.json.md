# Sampling profile

Took 11.24s over 9,569 samples (1.2ms per sample).

| Category |      % |   Time | Samples |
| -------- | -----: | -----: | ------: |
| stdlib   | 100.0% | 11.24s |   9,341 |
| ours     |  <0.1% |  1.3ms |     228 |

## Hottest functions

### Self time

Functions ranked by time spent directly in the function body, excluding callees.

|     % |   Time | Samples | Function                                                                                                                        | Location                                                    |
| ----: | -----: | ------: | ------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| 98.8% | 11.11s |   6,000 | `UNMANAGED_CODE_TIME`                                                                                                           | `<unknown>`                                                 |
|  0.1% | 13.3ms |     110 | `MakeGenericType(Type[])`                                                                                                       | `System.RuntimeType`                                        |
| <0.1% |  2.6ms |       1 | `get_Item(Object)`                                                                                                              | `System.Collections.Hashtable`                              |
| <0.1% |  1.4ms |       1 | `ToArray()`                                                                                                                     | ``System.Collections.Generic.List`1[System.__Canon]``       |
| <0.1% |  1.3ms |       1 | ``unpickleObj(Assembly, Type[], FSharpFunc`2<InputState, !!0>, unsigned int8[])``                                               | `Microsoft.FSharp.Quotations.PatternsModule+SimpleUnpickle` |
| <0.1% |  1.3ms |       1 | `u_Expr(InputState)`                                                                                                            | `Microsoft.FSharp.Quotations.PatternsModule`                |
| <0.1% |  1.3ms |       1 | `ToUnionParseResults()`                                                                                                         | `Argu.CliParser+CliParseResultAggregator`                   |
| <0.1% |  7.0µs |     214 | `main(String[])`                                                                                                                | `Profile`                                                   |
| <0.1% |  0.6µs |   1,771 | `Invoke(BindingEnv)`                                                                                                            | `Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`    |
| <0.1% |  0.1µs |     729 | ``GetUnionCases(Type, FSharpOption`1<BindingFlags>)``                                                                           | `Microsoft.FSharp.Reflection.FSharpType`                    |
| <0.1% | <0.1µs |       1 | ``.ctor(FSharpOption`1<String>, FSharpOption`1<String>, FSharpOption`1<int32>, FSharpOption`1<IExiter>, FSharpOption`1<bool>)`` | ``Argu.ArgumentParser`1[System.__Canon]``                   |
| <0.1% | <0.1µs |      12 | `deserialize(Type, Type[], Type[], FSharpExpr[], unsigned int8[])`                                                              | `Microsoft.FSharp.Quotations.PatternsModule`                |
| <0.1% | <0.1µs |       1 | `checkUnionArgInfo(UnionArgInfo)`                                                                                               | `Argu.PreCompute`                                           |
| <0.1% | <0.1µs |       2 | ``ToArray(IEnumerable`1<!!0>)``                                                                                                 | `Microsoft.FSharp.Collections.SeqModule`                    |
| <0.1% | <0.1µs |       2 | `preComputeUnionArgInfo()`                                                                                                      | `Argu.PreCompute`                                           |
| <0.1% | <0.1µs |       1 | `.ctor(String, RegexOptions, TimeSpan, CultureInfo)`                                                                            | `System.Text.RegularExpressions.Regex`                      |
| <0.1% | <0.1µs |       1 | ``gprintf(FSharpFunc`2<int32, !!0>, PrintfFormat`4<!!4, !!1, !!2, !!3>)``                                                       | `Microsoft.FSharp.Core.PrintfModule`                        |
| <0.1% | <0.1µs |       2 | `parseCommandLineInner(CliParseState, UnionArgInfo)`                                                                            | `Argu.CliParser`                                            |
| <0.1% | <0.1µs |       1 | `GetNextToken(bool, UnionArgInfo)`                                                                                              | `Argu.CliParser+CliTokenReader`                             |
| <0.1% | <0.1µs |       2 | ``TryFind(FSharpFunc`2<!!0, bool>, IEnumerable`1<!!0>)``                                                                        | `Microsoft.FSharp.Collections.SeqModule`                    |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `UNMANAGED_CODE_TIME` (`<unknown>`)

|     % |  Time | Samples | Caller                                               | Location                                                 |
| ----: | ----: | ------: | ---------------------------------------------------- | -------------------------------------------------------- |
| 36.3% | 4.02s |   2,030 | `MakeGenericType(Type[])`                            | `System.RuntimeType`                                     |
|  0.1% | 6.7ms |       4 | `main(String[])`                                     | `Profile`                                                |
| <0.1% | 5.4ms |       4 | `Invoke(BindingEnv)`                                 | `Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965` |
| <0.1% | 4.1ms |       1 | `parseCommandLineInner(CliParseState, UnionArgInfo)` | `Argu.CliParser`                                         |
| <0.1% | 1.5ms |       1 | `preComputeUnionArgInfo()`                           | `Argu.PreCompute`                                        |

##### `MakeGenericType(Type[])` (`System.RuntimeType`)

|     % |   Time | Samples | Caller               | Location                                                 |
| ----: | -----: | ------: | -------------------- | -------------------------------------------------------- |
| 89.9% | 11.9ms |      97 | `Invoke(BindingEnv)` | `Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965` |
| 10.1% |  1.3ms |       3 | `main(String[])`     | `Profile`                                                |

##### `get_Item(Object)` (`System.Collections.Hashtable`)

|      % |  Time | Samples | Caller                                                       | Location              |
| -----: | ----: | ------: | ------------------------------------------------------------ | --------------------- |
| 100.0% | 2.6ms |       1 | `parseKeyValuePartial(KeyValueParseState, UnionCaseArgInfo)` | `Argu.KeyValueParser` |

##### `ToArray()` (``System.Collections.Generic.List`1[System.__Canon]``)

|      % |  Time | Samples | Caller                  | Location                                  |
| -----: | ----: | ------: | ----------------------- | ----------------------------------------- |
| 100.0% | 1.4ms |       1 | `ToUnionParseResults()` | `Argu.CliParser+CliParseResultAggregator` |

##### ``unpickleObj(Assembly, Type[], FSharpFunc`2<InputState, !!0>, unsigned int8[])`` (`Microsoft.FSharp.Quotations.PatternsModule+SimpleUnpickle`)

|      % |  Time | Samples | Caller           | Location  |
| -----: | ----: | ------: | ---------------- | --------- |
| 100.0% | 1.3ms |       1 | `main(String[])` | `Profile` |

##### `ToUnionParseResults()` (`Argu.CliParser+CliParseResultAggregator`)

|      % |  Time | Samples | Caller                                                                                                                                      | Location                                  |
| -----: | ----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- |
| 100.0% | 1.3ms |       1 | ``Parse(FSharpOption`1<String[]>, FSharpOption`1<IConfigurationReader>, FSharpOption`1<bool>, FSharpOption`1<bool>, FSharpOption`1<bool>)`` | ``Argu.ArgumentParser`1[System.__Canon]`` |

##### `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`)

|     % |  Time | Samples | Caller           | Location  |
| ----: | ----: | ------: | ---------------- | --------- |
| 99.9% | 0.6µs |   1,763 | `main(String[])` | `Profile` |

##### ``.ctor(FSharpOption`1<String>, FSharpOption`1<String>, FSharpOption`1<int32>, FSharpOption`1<IExiter>, FSharpOption`1<bool>)`` (``Argu.ArgumentParser`1[System.__Canon]``)

|      % |   Time | Samples | Caller           | Location  |
| -----: | -----: | ------: | ---------------- | --------- |
| 100.0% | <0.1µs |       1 | `main(String[])` | `Profile` |

##### `deserialize(Type, Type[], Type[], FSharpExpr[], unsigned int8[])` (`Microsoft.FSharp.Quotations.PatternsModule`)

|      % |   Time | Samples | Caller                                                               | Location                                 |
| -----: | -----: | ------: | -------------------------------------------------------------------- | ---------------------------------------- |
| 100.0% | <0.1µs |      12 | `Deserialize40(Type, Type[], Type[], FSharpExpr[], unsigned int8[])` | `Microsoft.FSharp.Quotations.FSharpExpr` |

##### `checkUnionArgInfo(UnionArgInfo)` (`Argu.PreCompute`)

|      % |   Time | Samples | Caller         | Location                                                         |
| -----: | -----: | ------: | -------------- | ---------------------------------------------------------------- |
| 100.0% | <0.1µs |       1 | `Invoke(Unit)` | `<StartupCode$Argu>.$ArgumentParser+-cctor@87-1[System.__Canon]` |

##### `preComputeUnionArgInfo()` (`Argu.PreCompute`)

|      % |   Time | Samples | Caller         | Location                                                       |
| -----: | -----: | ------: | -------------- | -------------------------------------------------------------- |
| 100.0% | <0.1µs |       2 | `Invoke(Unit)` | `<StartupCode$Argu>.$ArgumentParser+-cctor@86[System.__Canon]` |

##### `.ctor(String, RegexOptions, TimeSpan, CultureInfo)` (`System.Text.RegularExpressions.Regex`)

|      % |   Time | Samples | Caller     | Location                              |
| -----: | -----: | ------: | ---------- | ------------------------------------- |
| 100.0% | <0.1µs |       1 | `.cctor()` | `<StartupCode$Argu>.$Argu.PreCompute` |

##### ``gprintf(FSharpFunc`2<int32, !!0>, PrintfFormat`4<!!4, !!1, !!2, !!3>)`` (`Microsoft.FSharp.Core.PrintfModule`)

|      % |   Time | Samples | Caller           | Location  |
| -----: | -----: | ------: | ---------------- | --------- |
| 100.0% | <0.1µs |       1 | `main(String[])` | `Profile` |

##### `parseCommandLineInner(CliParseState, UnionArgInfo)` (`Argu.CliParser`)

|      % |   Time | Samples | Caller                                                                                                   | Location         |
| -----: | -----: | ------: | -------------------------------------------------------------------------------------------------------- | ---------------- |
| 100.0% | <0.1µs |       2 | ``parseCommandLine(UnionArgInfo, String, FSharpOption`1<String>, int32, IExiter, bool, bool, String[])`` | `Argu.CliParser` |

##### `GetNextToken(bool, UnionArgInfo)` (`Argu.CliParser+CliTokenReader`)

|      % |   Time | Samples | Caller                                                             | Location         |
| -----: | -----: | ------: | ------------------------------------------------------------------ | ---------------- |
| 100.0% | <0.1µs |       1 | `parseNextField@321(CliParseState, UnionArgInfo, FieldParserInfo)` | `Argu.CliParser` |

##### ``TryFind(FSharpFunc`2<!!0, bool>, IEnumerable`1<!!0>)`` (`Microsoft.FSharp.Collections.SeqModule`)

|      % |   Time | Samples | Caller                          | Location          |
| -----: | -----: | ------: | ------------------------------- | ----------------- |
| 100.0% | <0.1µs |       2 | `postProcess@648(UnionArgInfo)` | `Argu.PreCompute` |

### Total time

Functions ranked by total time spent in the function and all its callees.

|     % |    Time | Samples | Function                                                                                                                                    | Location                                                         |
| ----: | ------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| 99.9% |  11.22s |   9,554 | `main(String[])`                                                                                                                            | `Profile`                                                        |
| 98.8% |  11.11s |   6,000 | `UNMANAGED_CODE_TIME`                                                                                                                       | `<unknown>`                                                      |
| 95.1% |  10.68s |   8,850 | `Invoke(BindingEnv)`                                                                                                                        | `Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`         |
| 56.1% |   6.30s |   3,580 | `GetCustomAttributes(RuntimeType, RuntimeType, bool)`                                                                                       | `System.Reflection.CustomAttribute`                              |
| 56.1% |   6.30s |   4,709 | ``GetUnionCases(Type, FSharpOption`1<BindingFlags>)``                                                                                       | `Microsoft.FSharp.Reflection.FSharpType`                         |
| 42.2% |   4.73s |   2,613 | `MakeGenericType(Type[])`                                                                                                                   | `System.RuntimeType`                                             |
|  4.0% | 451.5ms |     389 | `deserialize(Type, Type[], Type[], FSharpExpr[], unsigned int8[])`                                                                          | `Microsoft.FSharp.Quotations.PatternsModule`                     |
|  3.4% | 384.8ms |     334 | `Deserialize40(Type, Type[], Type[], FSharpExpr[], unsigned int8[])`                                                                        | `Microsoft.FSharp.Quotations.FSharpExpr`                         |
|  0.6% |  70.0ms |      78 | `CreateValue()`                                                                                                                             | ``System.Lazy`1[System.__Canon]``                                |
|  0.6% |  69.9ms |      78 | ``.ctor(FSharpOption`1<String>, FSharpOption`1<String>, FSharpOption`1<int32>, FSharpOption`1<IExiter>, FSharpOption`1<bool>)``             | ``Argu.ArgumentParser`1[System.__Canon]``                        |
|  0.5% |  61.8ms |      69 | `Invoke(Unit)`                                                                                                                              | `<StartupCode$Argu>.$ArgumentParser+-cctor@87-1[System.__Canon]` |
|  0.5% |  51.4ms |      52 | ``Parse(FSharpOption`1<String[]>, FSharpOption`1<IConfigurationReader>, FSharpOption`1<bool>, FSharpOption`1<bool>, FSharpOption`1<bool>)`` | ``Argu.ArgumentParser`1[System.__Canon]``                        |
|  0.4% |  47.9ms |      53 | `checkUnionArgInfo(UnionArgInfo)`                                                                                                           | `Argu.PreCompute`                                                |
|  0.4% |  46.6ms |      51 | `postProcess@648(UnionArgInfo)`                                                                                                             | `Argu.PreCompute`                                                |
|  0.3% |  31.0ms |      34 | `parseKeyValuePartial(KeyValueParseState, UnionCaseArgInfo)`                                                                                | `Argu.KeyValueParser`                                            |
|  0.3% |  31.0ms |      34 | `parseKeyValueConfig(IConfigurationReader, UnionArgInfo)`                                                                                   | `Argu.KeyValueParser`                                            |
|  0.2% |  27.0ms |      31 | `get_AppSettings()`                                                                                                                         | `System.Configuration.ConfigurationManager`                      |
|  0.2% |  27.0ms |      31 | `GetValue(String)`                                                                                                                          | `Argu.AppSettingsConfigurationReader.Argu.IConfigurationReader`  |
|  0.2% |  22.8ms |      17 | `u_Expr(InputState)`                                                                                                                        | `Microsoft.FSharp.Quotations.PatternsModule`                     |
|  0.2% |  17.7ms |      16 | `parseCommandLineInner(CliParseState, UnionArgInfo)`                                                                                        | `Argu.CliParser`                                                 |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `main(String[])` (`Profile`)

|     % |    Time | Samples | Callee                                                                                                                          | Location                                                 |
| ----: | ------: | ------: | ------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| 91.4% |  10.25s |   8,545 | `Invoke(BindingEnv)`                                                                                                            | `Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965` |
|  3.4% | 384.8ms |     334 | `Deserialize40(Type, Type[], Type[], FSharpExpr[], unsigned int8[])`                                                            | `Microsoft.FSharp.Quotations.FSharpExpr`                 |
|  3.2% | 358.8ms |     247 | `MakeGenericType(Type[])`                                                                                                       | `System.RuntimeType`                                     |
|  0.6% |  69.9ms |      78 | ``.ctor(FSharpOption`1<String>, FSharpOption`1<String>, FSharpOption`1<int32>, FSharpOption`1<IExiter>, FSharpOption`1<bool>)`` | ``Argu.ArgumentParser`1[System.__Canon]``                |
|  0.6% |  66.7ms |      55 | `deserialize(Type, Type[], Type[], FSharpExpr[], unsigned int8[])`                                                              | `Microsoft.FSharp.Quotations.PatternsModule`             |

##### `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`)

|     % |  Time | Samples | Callee                    | Location             |
| ----: | ----: | ------: | ------------------------- | -------------------- |
| 35.5% | 3.79s |   1,967 | `MakeGenericType(Type[])` | `System.RuntimeType` |
|  0.1% | 5.4ms |       4 | `UNMANAGED_CODE_TIME`     | `<unknown>`          |

##### `MakeGenericType(Type[])` (`System.RuntimeType`)

|     % |  Time | Samples | Callee                | Location    |
| ----: | ----: | ------: | --------------------- | ----------- |
| 85.0% | 4.02s |   2,030 | `UNMANAGED_CODE_TIME` | `<unknown>` |

##### `deserialize(Type, Type[], Type[], FSharpExpr[], unsigned int8[])` (`Microsoft.FSharp.Quotations.PatternsModule`)

|    % |  Time | Samples | Callee                | Location    |
| ---: | ----: | ------: | --------------------- | ----------- |
| 0.3% | 1.3ms |       1 | `UNMANAGED_CODE_TIME` | `<unknown>` |

##### `Deserialize40(Type, Type[], Type[], FSharpExpr[], unsigned int8[])` (`Microsoft.FSharp.Quotations.FSharpExpr`)

|      % |    Time | Samples | Callee                                                             | Location                                     |
| -----: | ------: | ------: | ------------------------------------------------------------------ | -------------------------------------------- |
| 100.0% | 384.8ms |     334 | `deserialize(Type, Type[], Type[], FSharpExpr[], unsigned int8[])` | `Microsoft.FSharp.Quotations.PatternsModule` |

##### ``.ctor(FSharpOption`1<String>, FSharpOption`1<String>, FSharpOption`1<int32>, FSharpOption`1<IExiter>, FSharpOption`1<bool>)`` (``Argu.ArgumentParser`1[System.__Canon]``)

|     % |   Time | Samples | Callee                                                                  | Location                                  |
| ----: | -----: | ------: | ----------------------------------------------------------------------- | ----------------------------------------- |
| 88.4% | 61.8ms |      69 | `CreateValue()`                                                         | ``System.Lazy`1[System.__Canon]``         |
|  7.7% |  5.4ms |       6 | `getDefaultCharacterWidth()`                                            | `Argu.Utils`                              |
|  2.0% |  1.4ms |       1 | `.cctor()`                                                              | ``Argu.ArgumentParser`1[System.__Canon]`` |
|  1.9% |  1.4ms |       1 | ``.ctor(UnionArgInfo, String, FSharpOption`1<String>, int32, IExiter)`` | ``Argu.ArgumentParser`1[System.__Canon]`` |

##### `Invoke(Unit)` (`<StartupCode$Argu>.$ArgumentParser+-cctor@87-1[System.__Canon]`)

|     % |   Time | Samples | Callee                            | Location                          |
| ----: | -----: | ------: | --------------------------------- | --------------------------------- |
| 77.6% | 47.9ms |      53 | `checkUnionArgInfo(UnionArgInfo)` | `Argu.PreCompute`                 |
| 22.4% | 13.8ms |      16 | `CreateValue()`                   | ``System.Lazy`1[System.__Canon]`` |

##### ``Parse(FSharpOption`1<String[]>, FSharpOption`1<IConfigurationReader>, FSharpOption`1<bool>, FSharpOption`1<bool>, FSharpOption`1<bool>)`` (``Argu.ArgumentParser`1[System.__Canon]``)

|     % |   Time | Samples | Callee                                                                                                                                             | Location                                  |
| ----: | -----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- |
| 60.3% | 31.0ms |      34 | `parseKeyValueConfig(IConfigurationReader, UnionArgInfo)`                                                                                          | `Argu.KeyValueParser`                     |
| 34.5% | 17.7ms |      16 | ``parseCommandLine(UnionArgInfo, String, FSharpOption`1<String>, int32, IExiter, bool, bool, String[])``                                           | `Argu.CliParser`                          |
|  2.6% |  1.4ms |       1 | ``postProcessResults(UnionArgInfo, bool, FSharpOption`1<FSharpChoice`2<UnionCaseParseResult[], Exception>[]>, FSharpOption`1<UnionParseResults>)`` | `Argu.CommonParsers`                      |
|  2.6% |  1.3ms |       1 | `ToUnionParseResults()`                                                                                                                            | `Argu.CliParser+CliParseResultAggregator` |

##### `checkUnionArgInfo(UnionArgInfo)` (`Argu.PreCompute`)

|     % |   Time | Samples | Callee                          | Location          |
| ----: | -----: | ------: | ------------------------------- | ----------------- |
| 97.1% | 46.6ms |      51 | `postProcess@648(UnionArgInfo)` | `Argu.PreCompute` |
|  2.9% |  1.4ms |       1 | `UNMANAGED_CODE_TIME`           | `<unknown>`       |

##### `postProcess@648(UnionArgInfo)` (`Argu.PreCompute`)

|     % |   Time | Samples | Callee                                                   | Location                                 |
| ----: | -----: | ------: | -------------------------------------------------------- | ---------------------------------------- |
| 65.0% | 30.3ms |      33 | `CreateValue()`                                          | ``System.Lazy`1[System.__Canon]``        |
| 29.2% | 13.6ms |      15 | ``TryFind(FSharpFunc`2<!!0, bool>, IEnumerable`1<!!0>)`` | `Microsoft.FSharp.Collections.SeqModule` |
|  3.0% |  1.4ms |       1 | `UNMANAGED_CODE_TIME`                                    | `<unknown>`                              |
|  2.9% |  1.4ms |       1 | `get_Value()`                                            | ``System.Lazy`1[Argu.CliPosition]``      |

##### `parseKeyValuePartial(KeyValueParseState, UnionCaseArgInfo)` (`Argu.KeyValueParser`)

|     % |   Time | Samples | Callee                | Location                                                        |
| ----: | -----: | ------: | --------------------- | --------------------------------------------------------------- |
| 87.1% | 27.0ms |      31 | `GetValue(String)`    | `Argu.AppSettingsConfigurationReader.Argu.IConfigurationReader` |
|  8.4% |  2.6ms |       1 | `get_Item(Object)`    | `System.Collections.Hashtable`                                  |
|  4.5% |  1.4ms |       1 | `UNMANAGED_CODE_TIME` | `<unknown>`                                                     |

##### `parseKeyValueConfig(IConfigurationReader, UnionArgInfo)` (`Argu.KeyValueParser`)

|      % |   Time | Samples | Callee                                                       | Location              |
| -----: | -----: | ------: | ------------------------------------------------------------ | --------------------- |
| 100.0% | 31.0ms |      34 | `parseKeyValuePartial(KeyValueParseState, UnionCaseArgInfo)` | `Argu.KeyValueParser` |

##### `GetValue(String)` (`Argu.AppSettingsConfigurationReader.Argu.IConfigurationReader`)

|      % |   Time | Samples | Callee              | Location                                    |
| -----: | -----: | ------: | ------------------- | ------------------------------------------- |
| 100.0% | 27.0ms |      31 | `get_AppSettings()` | `System.Configuration.ConfigurationManager` |

##### `u_Expr(InputState)` (`Microsoft.FSharp.Quotations.PatternsModule`)

|    % |  Time | Samples | Callee                | Location                                     |
| ---: | ----: | ------: | --------------------- | -------------------------------------------- |
| 6.0% | 1.4ms |       1 | `UNMANAGED_CODE_TIME` | `<unknown>`                                  |
| 6.0% | 1.4ms |       1 | `u_Expr(InputState)`  | `Microsoft.FSharp.Quotations.PatternsModule` |

##### `parseCommandLineInner(CliParseState, UnionArgInfo)` (`Argu.CliParser`)

|     % |   Time | Samples | Callee                                                                           | Location                                  |
| ----: | -----: | ------: | -------------------------------------------------------------------------------- | ----------------------------------------- |
| 61.5% | 10.9ms |      11 | `parseCommandLinePartial(CliParseState, UnionArgInfo, CliParseResultAggregator)` | `Argu.CliParser`                          |
| 23.2% |  4.1ms |       1 | `UNMANAGED_CODE_TIME`                                                            | `<unknown>`                               |
|  7.6% |  1.4ms |       1 | `ToUnionParseResults()`                                                          | `Argu.CliParser+CliParseResultAggregator` |
|  7.6% |  1.3ms |       1 | `get_Value()`                                                                    | ``System.Lazy`1[System.Boolean]``         |

## Hottest call stacks

Call stacks ranked by time spent in their leaf frame.

Common call stack: `main(String[])` (`Profile`)

|     % |    Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ----: | ------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 53.7% |   6.03s |   3,289 | `UNMANAGED_CODE_TIME` ← `GetCustomAttributes(RuntimeType, RuntimeType, bool)` (`System.Reflection.CustomAttribute`) ← ``GetUnionCases(Type, FSharpOption`1<BindingFlags>)`` (`Microsoft.FSharp.Reflection.FSharpType`) ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`)                                                                                                                                                                                                                                                                                                                                                                                                 |
| 31.5% |   3.53s |   1,708 | `UNMANAGED_CODE_TIME` ← `MakeGenericType(Type[])` (`System.RuntimeType`) ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`) ← `Invoke(BindingEnv)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  5.7% | 643.3ms |     450 | `UNMANAGED_CODE_TIME` ← `MakeGenericType(Type[])` (`System.RuntimeType`) ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  3.2% | 357.4ms |     244 | `UNMANAGED_CODE_TIME` ← `MakeGenericType(Type[])` (`System.RuntimeType`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  1.5% | 173.1ms |      92 | `UNMANAGED_CODE_TIME` ← `GetCustomAttributes(RuntimeType, RuntimeType, bool)` (`System.Reflection.CustomAttribute`) ← ``GetUnionCases(Type, FSharpOption`1<BindingFlags>)`` (`Microsoft.FSharp.Reflection.FSharpType`) ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`) ← `deserialize(Type, Type[], Type[], FSharpExpr[], unsigned int8[])` (`Microsoft.FSharp.Quotations.PatternsModule`) ← `Deserialize40(Type, Type[], Type[], FSharpExpr[], unsigned int8[])` (`Microsoft.FSharp.Quotations.FSharpExpr`)                                                                                                                                                           |
|  1.0% | 112.1ms |      50 | `UNMANAGED_CODE_TIME` ← `MakeGenericType(Type[])` (`System.RuntimeType`) ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`) ← `Invoke(BindingEnv)` ← `deserialize(Type, Type[], Type[], FSharpExpr[], unsigned int8[])` (`Microsoft.FSharp.Quotations.PatternsModule`) ← `Deserialize40(Type, Type[], Type[], FSharpExpr[], unsigned int8[])` (`Microsoft.FSharp.Quotations.FSharpExpr`)                                                                                                                                                                                                                                                                                  |
|  0.4% |  40.1ms |      25 | `UNMANAGED_CODE_TIME` ← `GetCustomAttributes(RuntimeType, RuntimeType, bool)` (`System.Reflection.CustomAttribute`) ← ``GetUnionCases(Type, FSharpOption`1<BindingFlags>)`` (`Microsoft.FSharp.Reflection.FSharpType`) ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`) ← `deserialize(Type, Type[], Type[], FSharpExpr[], unsigned int8[])` (`Microsoft.FSharp.Quotations.PatternsModule`)                                                                                                                                                                                                                                                                             |
|  0.3% |  33.6ms |      42 | `GetCustomAttributes(RuntimeType, RuntimeType, bool)` (`System.Reflection.CustomAttribute`) ← ``GetUnionCases(Type, FSharpOption`1<BindingFlags>)`` (`Microsoft.FSharp.Reflection.FSharpType`) ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`) ← `deserialize(Type, Type[], Type[], FSharpExpr[], unsigned int8[])` (`Microsoft.FSharp.Quotations.PatternsModule`) ← `Deserialize40(Type, Type[], Type[], FSharpExpr[], unsigned int8[])` (`Microsoft.FSharp.Quotations.FSharpExpr`)                                                                                                                                                                                   |
|  0.2% |  27.0ms |      18 | `UNMANAGED_CODE_TIME` ← `get_AppSettings()` (`System.Configuration.ConfigurationManager`) ← `GetValue(String)` (`Argu.AppSettingsConfigurationReader.Argu.IConfigurationReader`) ← `parseKeyValuePartial(KeyValueParseState, UnionCaseArgInfo)` (`Argu.KeyValueParser`) ← `parseKeyValueConfig(IConfigurationReader, UnionArgInfo)` ← ``Parse(FSharpOption`1<String[]>, FSharpOption`1<IConfigurationReader>, FSharpOption`1<bool>, FSharpOption`1<bool>, FSharpOption`1<bool>)`` (``Argu.ArgumentParser`1[System.__Canon]``)                                                                                                                                                                            |
|  0.2% |  25.6ms |      24 | `MakeGenericType(Type[])` (`System.RuntimeType`) ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`) ← `Invoke(BindingEnv)` ← `deserialize(Type, Type[], Type[], FSharpExpr[], unsigned int8[])` (`Microsoft.FSharp.Quotations.PatternsModule`) ← `Deserialize40(Type, Type[], Type[], FSharpExpr[], unsigned int8[])` (`Microsoft.FSharp.Quotations.FSharpExpr`)                                                                                                                                                                                                                                                                                                          |
|  0.2% |  22.7ms |     129 | `GetCustomAttributes(RuntimeType, RuntimeType, bool)` (`System.Reflection.CustomAttribute`) ← ``GetUnionCases(Type, FSharpOption`1<BindingFlags>)`` (`Microsoft.FSharp.Reflection.FSharpType`) ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`)                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  0.2% |  22.6ms |      10 | `UNMANAGED_CODE_TIME` ← `MakeGenericType(Type[])` (`System.RuntimeType`) ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`) ← `Invoke(BindingEnv)` ← `deserialize(Type, Type[], Type[], FSharpExpr[], unsigned int8[])` (`Microsoft.FSharp.Quotations.PatternsModule`)                                                                                                                                                                                                                                                                                                                                                                                                    |
|  0.1% |  12.1ms |       9 | `UNMANAGED_CODE_TIME` ← `MakeGenericType(Type[])` (`System.RuntimeType`) ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`) ← `deserialize(Type, Type[], Type[], FSharpExpr[], unsigned int8[])` (`Microsoft.FSharp.Quotations.PatternsModule`) ← `Deserialize40(Type, Type[], Type[], FSharpExpr[], unsigned int8[])` (`Microsoft.FSharp.Quotations.FSharpExpr`)                                                                                                                                                                                                                                                                                                         |
|  0.1% |  10.7ms |      96 | `MakeGenericType(Type[])` (`System.RuntimeType`) ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`) ← `Invoke(BindingEnv)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  0.1% |   9.5ms |       6 | `UNMANAGED_CODE_TIME` ← `CreateValue()` (``System.Lazy`1[System.__Canon]``) ← `postProcess@648(UnionArgInfo)` (`Argu.PreCompute`) ← `checkUnionArgInfo(UnionArgInfo)` ← `Invoke(Unit)` (`<StartupCode$Argu>.$ArgumentParser+-cctor@87-1[System.__Canon]`) ← `CreateValue()` (``System.Lazy`1[System.__Canon]``) ← ``.ctor(FSharpOption`1<String>, FSharpOption`1<String>, FSharpOption`1<int32>, FSharpOption`1<IExiter>, FSharpOption`1<bool>)`` (``Argu.ArgumentParser`1[System.__Canon]``)                                                                                                                                                                                                            |
|  0.1% |   9.5ms |       7 | `UNMANAGED_CODE_TIME` ← ``TryFind(FSharpFunc`2<!!0, bool>, IEnumerable`1<!!0>)`` (`Microsoft.FSharp.Collections.SeqModule`) ← `postProcess@648(UnionArgInfo)` (`Argu.PreCompute`) ← `checkUnionArgInfo(UnionArgInfo)` ← `Invoke(Unit)` (`<StartupCode$Argu>.$ArgumentParser+-cctor@87-1[System.__Canon]`) ← `CreateValue()` (``System.Lazy`1[System.__Canon]``) ← ``.ctor(FSharpOption`1<String>, FSharpOption`1<String>, FSharpOption`1<int32>, FSharpOption`1<IExiter>, FSharpOption`1<bool>)`` (``Argu.ArgumentParser`1[System.__Canon]``)                                                                                                                                                            |
|  0.1% |   8.2ms |       6 | `UNMANAGED_CODE_TIME` ← `.ctor(String, RegexOptions, TimeSpan, CultureInfo)` (`System.Text.RegularExpressions.Regex`) ← `.cctor()` (`<StartupCode$Argu>.$Argu.PreCompute`) ← `.cctor()` (`Argu.PreCompute`) ← `preComputeUnionArgInfo()` ← `Invoke(Unit)` (`<StartupCode$Argu>.$ArgumentParser+-cctor@86[System.__Canon]`) ← `CreateValue()` (``System.Lazy`1[System.__Canon]``) ← `Invoke(Unit)` (`<StartupCode$Argu>.$ArgumentParser+-cctor@87-1[System.__Canon]`) ← `CreateValue()` (``System.Lazy`1[System.__Canon]``) ← ``.ctor(FSharpOption`1<String>, FSharpOption`1<String>, FSharpOption`1<int32>, FSharpOption`1<IExiter>, FSharpOption`1<bool>)`` (``Argu.ArgumentParser`1[System.__Canon]``) |
|  0.1% |   6.8ms |       5 | `UNMANAGED_CODE_TIME` ← `MakeGenericType(Type[])` (`System.RuntimeType`) ← `cast(FSharpExpr)` (`Microsoft.FSharp.Quotations.PatternsModule`) ← `Cast(FSharpExpr)` (`Microsoft.FSharp.Quotations.FSharpExpr`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  0.1% |   6.7ms |       5 | `u_Expr(InputState)` (`Microsoft.FSharp.Quotations.PatternsModule`) ← `u_Expr(InputState)` ← `deserialize(Type, Type[], Type[], FSharpExpr[], unsigned int8[])` ← `Deserialize40(Type, Type[], Type[], FSharpExpr[], unsigned int8[])` (`Microsoft.FSharp.Quotations.FSharpExpr`)                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  0.1% |   6.7ms |       4 | `UNMANAGED_CODE_TIME`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |

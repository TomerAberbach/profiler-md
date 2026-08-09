# Sampling profile

Took 10.81s.

| Category         |     % |   Time |
| ---------------- | ----: | -----: |
| Native           | 98.7% | 10.67s |
| Standard library |  0.6% | 68.4ms |
| Unknown          |  0.6% | 64.5ms |
| Ours             | <0.1% |  5.4ms |

## Hottest functions

### Self time

Functions ranked by time spent directly in the function body, excluding callees.

|     % |   Time | Function                                                                                                                                    | Location                                                                   |
| ----: | -----: | ------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| 98.7% | 10.67s | `UNMANAGED_CODE_TIME`                                                                                                                       | `<unknown>`                                                                |
|  0.1% |  5.6ms | `MakeGenericType(Type[])`                                                                                                                   | `System.RuntimeType`                                                       |
| <0.1% |  4.0ms | `ToUnionParseResults()`                                                                                                                     | `Argu.CliParser+CliParseResultAggregator`                                  |
| <0.1% |  4.0ms | `u_Expr(InputState)`                                                                                                                        | `Microsoft.FSharp.Quotations.PatternsModule`                               |
| <0.1% |  2.6ms | `StartsWith(String, StringComparison)`                                                                                                      | `System.String`                                                            |
| <0.1% |  1.4ms | `Invoke(BindingEnv)`                                                                                                                        | `Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`                   |
| <0.1% |  1.3ms | `ToArray()`                                                                                                                                 | ``System.Collections.Generic.List`1[System.__Canon]``                      |
| <0.1% |  1.3ms | ``Parse(FSharpOption`1<String[]>, FSharpOption`1<IConfigurationReader>, FSharpOption`1<bool>, FSharpOption`1<bool>, FSharpOption`1<bool>)`` | ``Argu.ArgumentParser`1[System.__Canon]``                                  |
| <0.1% |  1.3ms | ``AddMany(IEnumerable`1<!0>)``                                                                                                              | ``Microsoft.FSharp.Core.CompilerServices.ListCollector`1[System.__Canon]`` |
| <0.1% |  0.1µs | ``GetUnionCases(Type, FSharpOption`1<BindingFlags>)``                                                                                       | `Microsoft.FSharp.Reflection.FSharpType`                                   |
| <0.1% | <0.1µs | `deserialize(Type, Type[], Type[], FSharpExpr[], unsigned int8[])`                                                                          | `Microsoft.FSharp.Quotations.PatternsModule`                               |
| <0.1% | <0.1µs | `main(String[])`                                                                                                                            | `Profile`                                                                  |
| <0.1% | <0.1µs | `postProcess@648(UnionArgInfo)`                                                                                                             | `Argu.PreCompute`                                                          |
| <0.1% | <0.1µs | `.ctor(String, RegexOptions, TimeSpan, CultureInfo)`                                                                                        | `System.Text.RegularExpressions.Regex`                                     |
| <0.1% | <0.1µs | `checkUnionArgInfo(UnionArgInfo)`                                                                                                           | `Argu.PreCompute`                                                          |
| <0.1% | <0.1µs | ``ToArray(IEnumerable`1<!!0>)``                                                                                                             | `Microsoft.FSharp.Collections.SeqModule`                                   |
| <0.1% | <0.1µs | `parseKeyValueConfig(IConfigurationReader, UnionArgInfo)`                                                                                   | `Argu.KeyValueParser`                                                      |
| <0.1% | <0.1µs | ``preComputeUnionCaseArgInfo(FSharpList`1<Type>, FSharpOption`1<HelpParam>, FSharpFunc`2<Unit, UnionArgInfo>, UnionCaseInfo)``              | `Argu.PreCompute`                                                          |
| <0.1% | <0.1µs | `parseCommandLinePartial(CliParseState, UnionArgInfo, CliParseResultAggregator)`                                                            | `Argu.CliParser`                                                           |
| <0.1% | <0.1µs | `parseCommandLineInner(CliParseState, UnionArgInfo)`                                                                                        | `Argu.CliParser`                                                           |

#### Categories

##### Native

|     % |   Time | Function              | Location    |
| ----: | -----: | --------------------- | ----------- |
| 98.7% | 10.67s | `UNMANAGED_CODE_TIME` | `<unknown>` |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `UNMANAGED_CODE_TIME` (`<unknown>`)

|     % |  Time | Caller                                                   | Location                                                 |
| ----: | ----: | -------------------------------------------------------- | -------------------------------------------------------- |
| 35.4% | 3.78s | `MakeGenericType(Type[])`                                | `System.RuntimeType`                                     |
|  0.1% | 6.8ms | `main(String[])`                                         | `Profile`                                                |
| <0.1% | 4.0ms | `parseCommandLineInner(CliParseState, UnionArgInfo)`     | `Argu.CliParser`                                         |
| <0.1% | 2.7ms | ``add(IComparer`1<!!0>, !!0, !!1, MapTree`2<!!0, !!1>)`` | `Microsoft.FSharp.Collections.MapTreeModule`             |
| <0.1% | 2.7ms | `Invoke(BindingEnv)`                                     | `Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965` |

##### `MakeGenericType(Type[])` (`System.RuntimeType`)

|      % |   Time | Caller               | Location                                                 |
| -----: | -----: | -------------------- | -------------------------------------------------------- |
| 100.0% |  5.6ms | `Invoke(BindingEnv)` | `Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965` |
|  <0.1% | <0.1µs | `main(String[])`     | `Profile`                                                |

##### `ToUnionParseResults()` (`Argu.CliParser+CliParseResultAggregator`)

|      % |  Time | Caller                                                                                                                                      | Location                                  |
| -----: | ----: | ------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- |
| 100.0% | 4.0ms | ``Parse(FSharpOption`1<String[]>, FSharpOption`1<IConfigurationReader>, FSharpOption`1<bool>, FSharpOption`1<bool>, FSharpOption`1<bool>)`` | ``Argu.ArgumentParser`1[System.__Canon]`` |

##### `u_Expr(InputState)` (`Microsoft.FSharp.Quotations.PatternsModule`)

|     % |  Time | Caller               | Location                                     |
| ----: | ----: | -------------------- | -------------------------------------------- |
| 33.2% | 1.3ms | `u_Expr(InputState)` | `Microsoft.FSharp.Quotations.PatternsModule` |

##### `StartsWith(String, StringComparison)` (`System.String`)

|      % |  Time | Caller                               | Location                                          |
| -----: | ----: | ------------------------------------ | ------------------------------------------------- |
| 100.0% | 2.6ms | `TryGetPrefix(String, String&, !0&)` | ``Argu.Utils+PrefixDictionary`1[System.__Canon]`` |

##### `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`)

|     % |  Time | Caller           | Location  |
| ----: | ----: | ---------------- | --------- |
| <0.1% | 0.5µs | `main(String[])` | `Profile` |

##### `ToArray()` (``System.Collections.Generic.List`1[System.__Canon]``)

|      % |  Time | Caller                  | Location                                  |
| -----: | ----: | ----------------------- | ----------------------------------------- |
| 100.0% | 1.3ms | `ToUnionParseResults()` | `Argu.CliParser+CliParseResultAggregator` |

##### ``Parse(FSharpOption`1<String[]>, FSharpOption`1<IConfigurationReader>, FSharpOption`1<bool>, FSharpOption`1<bool>, FSharpOption`1<bool>)`` (``Argu.ArgumentParser`1[System.__Canon]``)

|      % |  Time | Caller           | Location  |
| -----: | ----: | ---------------- | --------- |
| 100.0% | 1.3ms | `main(String[])` | `Profile` |

##### ``AddMany(IEnumerable`1<!0>)`` (``Microsoft.FSharp.Core.CompilerServices.ListCollector`1[System.__Canon]``)

|      % |  Time | Caller                  | Location                                  |
| -----: | ----: | ----------------------- | ----------------------------------------- |
| 100.0% | 1.3ms | `ToUnionParseResults()` | `Argu.CliParser+CliParseResultAggregator` |

##### `deserialize(Type, Type[], Type[], FSharpExpr[], unsigned int8[])` (`Microsoft.FSharp.Quotations.PatternsModule`)

|      % |   Time | Caller                                                               | Location                                 |
| -----: | -----: | -------------------------------------------------------------------- | ---------------------------------------- |
| 100.0% | <0.1µs | `Deserialize40(Type, Type[], Type[], FSharpExpr[], unsigned int8[])` | `Microsoft.FSharp.Quotations.FSharpExpr` |

##### `postProcess@648(UnionArgInfo)` (`Argu.PreCompute`)

|      % |   Time | Caller                            | Location          |
| -----: | -----: | --------------------------------- | ----------------- |
| 100.0% | <0.1µs | `checkUnionArgInfo(UnionArgInfo)` | `Argu.PreCompute` |

##### `.ctor(String, RegexOptions, TimeSpan, CultureInfo)` (`System.Text.RegularExpressions.Regex`)

|      % |   Time | Caller     | Location                              |
| -----: | -----: | ---------- | ------------------------------------- |
| 100.0% | <0.1µs | `.cctor()` | `<StartupCode$Argu>.$Argu.PreCompute` |

##### `checkUnionArgInfo(UnionArgInfo)` (`Argu.PreCompute`)

|      % |   Time | Caller         | Location                                                         |
| -----: | -----: | -------------- | ---------------------------------------------------------------- |
| 100.0% | <0.1µs | `Invoke(Unit)` | `<StartupCode$Argu>.$ArgumentParser+-cctor@87-1[System.__Canon]` |

##### ``ToArray(IEnumerable`1<!!0>)`` (`Microsoft.FSharp.Collections.SeqModule`)

|     % |   Time | Caller         | Location                                         |
| ----: | -----: | -------------- | ------------------------------------------------ |
| 35.4% | <0.1µs | `Invoke(Unit)` | `Argu.PreCompute+Helpers+groupedSwitchRegex@229` |

##### `parseKeyValueConfig(IConfigurationReader, UnionArgInfo)` (`Argu.KeyValueParser`)

|      % |   Time | Caller                                                                                                                                      | Location                                  |
| -----: | -----: | ------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- |
| 100.0% | <0.1µs | ``Parse(FSharpOption`1<String[]>, FSharpOption`1<IConfigurationReader>, FSharpOption`1<bool>, FSharpOption`1<bool>, FSharpOption`1<bool>)`` | ``Argu.ArgumentParser`1[System.__Canon]`` |

##### ``preComputeUnionCaseArgInfo(FSharpList`1<Type>, FSharpOption`1<HelpParam>, FSharpFunc`2<Unit, UnionArgInfo>, UnionCaseInfo)`` (`Argu.PreCompute`)

|      % |   Time | Caller                  | Location                         |
| -----: | -----: | ----------------------- | -------------------------------- |
| 100.0% | <0.1µs | `Invoke(UnionCaseInfo)` | `Argu.PreCompute+caseInfo@576-2` |

##### `parseCommandLinePartial(CliParseState, UnionArgInfo, CliParseResultAggregator)` (`Argu.CliParser`)

|      % |   Time | Caller                                               | Location         |
| -----: | -----: | ---------------------------------------------------- | ---------------- |
| 100.0% | <0.1µs | `parseCommandLineInner(CliParseState, UnionArgInfo)` | `Argu.CliParser` |

##### `parseCommandLineInner(CliParseState, UnionArgInfo)` (`Argu.CliParser`)

|      % |   Time | Caller                                                                                                   | Location         |
| -----: | -----: | -------------------------------------------------------------------------------------------------------- | ---------------- |
| 100.0% | <0.1µs | ``parseCommandLine(UnionArgInfo, String, FSharpOption`1<String>, int32, IExiter, bool, bool, String[])`` | `Argu.CliParser` |

### Total time

Functions ranked by total time spent in the function and all its callees.

|     % |    Time | Function                                                                                                                                    | Location                                                         |
| ----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| 99.8% |  10.79s | `main(String[])`                                                                                                                            | `Profile`                                                        |
| 98.7% |  10.67s | `UNMANAGED_CODE_TIME`                                                                                                                       | `<unknown>`                                                      |
| 95.1% |  10.28s | `Invoke(BindingEnv)`                                                                                                                        | `Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`         |
| 56.8% |   6.14s | ``GetUnionCases(Type, FSharpOption`1<BindingFlags>)``                                                                                       | `Microsoft.FSharp.Reflection.FSharpType`                         |
| 41.4% |   4.47s | `MakeGenericType(Type[])`                                                                                                                   | `System.RuntimeType`                                             |
|  4.0% | 431.0ms | `deserialize(Type, Type[], Type[], FSharpExpr[], unsigned int8[])`                                                                          | `Microsoft.FSharp.Quotations.PatternsModule`                     |
|  3.6% | 384.3ms | `Deserialize40(Type, Type[], Type[], FSharpExpr[], unsigned int8[])`                                                                        | `Microsoft.FSharp.Quotations.FSharpExpr`                         |
|  0.6% |  65.4ms | `CreateValue()`                                                                                                                             | ``System.Lazy`1[System.__Canon]``                                |
|  0.6% |  61.4ms | ``.ctor(FSharpOption`1<String>, FSharpOption`1<String>, FSharpOption`1<int32>, FSharpOption`1<IExiter>, FSharpOption`1<bool>)``             | ``Argu.ArgumentParser`1[System.__Canon]``                        |
|  0.5% |  56.1ms | `Invoke(Unit)`                                                                                                                              | `<StartupCode$Argu>.$ArgumentParser+-cctor@87-1[System.__Canon]` |
|  0.5% |  55.8ms | ``Parse(FSharpOption`1<String[]>, FSharpOption`1<IConfigurationReader>, FSharpOption`1<bool>, FSharpOption`1<bool>, FSharpOption`1<bool>)`` | ``Argu.ArgumentParser`1[System.__Canon]``                        |
|  0.4% |  42.8ms | `checkUnionArgInfo(UnionArgInfo)`                                                                                                           | `Argu.PreCompute`                                                |
|  0.4% |  41.5ms | `postProcess@648(UnionArgInfo)`                                                                                                             | `Argu.PreCompute`                                                |
|  0.3% |  29.2ms | `parseKeyValueConfig(IConfigurationReader, UnionArgInfo)`                                                                                   | `Argu.KeyValueParser`                                            |
|  0.3% |  27.9ms | `parseKeyValuePartial(KeyValueParseState, UnionCaseArgInfo)`                                                                                | `Argu.KeyValueParser`                                            |
|  0.2% |  26.5ms | `get_AppSettings()`                                                                                                                         | `System.Configuration.ConfigurationManager`                      |
|  0.2% |  26.5ms | `GetValue(String)`                                                                                                                          | `Argu.AppSettingsConfigurationReader.Argu.IConfigurationReader`  |
|  0.2% |  18.5ms | `parseCommandLineInner(CliParseState, UnionArgInfo)`                                                                                        | `Argu.CliParser`                                                 |
|  0.2% |  18.5ms | ``parseCommandLine(UnionArgInfo, String, FSharpOption`1<String>, int32, IExiter, bool, bool, String[])``                                    | `Argu.CliParser`                                                 |
|  0.2% |  17.3ms | `u_Expr(InputState)`                                                                                                                        | `Microsoft.FSharp.Quotations.PatternsModule`                     |

#### Categories

##### Native

|     % |   Time | Function              | Location    |
| ----: | -----: | --------------------- | ----------- |
| 98.7% | 10.67s | `UNMANAGED_CODE_TIME` | `<unknown>` |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `main(String[])` (`Profile`)

|     % |    Time | Callee                                                                                                                                      | Location                                                 |
| ----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| 91.5% |   9.87s | `Invoke(BindingEnv)`                                                                                                                        | `Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965` |
|  3.6% | 384.3ms | `Deserialize40(Type, Type[], Type[], FSharpExpr[], unsigned int8[])`                                                                        | `Microsoft.FSharp.Quotations.FSharpExpr`                 |
|  3.1% | 333.8ms | `MakeGenericType(Type[])`                                                                                                                   | `System.RuntimeType`                                     |
|  0.6% |  61.4ms | ``.ctor(FSharpOption`1<String>, FSharpOption`1<String>, FSharpOption`1<int32>, FSharpOption`1<IExiter>, FSharpOption`1<bool>)``             | ``Argu.ArgumentParser`1[System.__Canon]``                |
|  0.5% |  55.8ms | ``Parse(FSharpOption`1<String[]>, FSharpOption`1<IConfigurationReader>, FSharpOption`1<bool>, FSharpOption`1<bool>, FSharpOption`1<bool>)`` | ``Argu.ArgumentParser`1[System.__Canon]``                |

##### `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`)

|     % |  Time | Callee                    | Location             |
| ----: | ----: | ------------------------- | -------------------- |
| 35.2% | 3.62s | `MakeGenericType(Type[])` | `System.RuntimeType` |
| <0.1% | 2.7ms | `UNMANAGED_CODE_TIME`     | `<unknown>`          |

##### `MakeGenericType(Type[])` (`System.RuntimeType`)

|     % |  Time | Callee                | Location    |
| ----: | ----: | --------------------- | ----------- |
| 84.5% | 3.78s | `UNMANAGED_CODE_TIME` | `<unknown>` |

##### `Deserialize40(Type, Type[], Type[], FSharpExpr[], unsigned int8[])` (`Microsoft.FSharp.Quotations.FSharpExpr`)

|      % |    Time | Callee                                                             | Location                                     |
| -----: | ------: | ------------------------------------------------------------------ | -------------------------------------------- |
| 100.0% | 384.3ms | `deserialize(Type, Type[], Type[], FSharpExpr[], unsigned int8[])` | `Microsoft.FSharp.Quotations.PatternsModule` |

##### ``.ctor(FSharpOption`1<String>, FSharpOption`1<String>, FSharpOption`1<int32>, FSharpOption`1<IExiter>, FSharpOption`1<bool>)`` (``Argu.ArgumentParser`1[System.__Canon]``)

|     % |   Time | Callee                       | Location                          |
| ----: | -----: | ---------------------------- | --------------------------------- |
| 91.4% | 56.1ms | `CreateValue()`              | ``System.Lazy`1[System.__Canon]`` |
|  8.6% |  5.3ms | `getDefaultCharacterWidth()` | `Argu.Utils`                      |

##### `Invoke(Unit)` (`<StartupCode$Argu>.$ArgumentParser+-cctor@87-1[System.__Canon]`)

|     % |   Time | Callee                            | Location                          |
| ----: | -----: | --------------------------------- | --------------------------------- |
| 76.3% | 42.8ms | `checkUnionArgInfo(UnionArgInfo)` | `Argu.PreCompute`                 |
| 23.7% | 13.3ms | `CreateValue()`                   | ``System.Lazy`1[System.__Canon]`` |

##### ``Parse(FSharpOption`1<String[]>, FSharpOption`1<IConfigurationReader>, FSharpOption`1<bool>, FSharpOption`1<bool>, FSharpOption`1<bool>)`` (``Argu.ArgumentParser`1[System.__Canon]``)

|     % |   Time | Callee                                                                                                                                             | Location                                  |
| ----: | -----: | -------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- |
| 52.3% | 29.2ms | `parseKeyValueConfig(IConfigurationReader, UnionArgInfo)`                                                                                          | `Argu.KeyValueParser`                     |
| 33.2% | 18.5ms | ``parseCommandLine(UnionArgInfo, String, FSharpOption`1<String>, int32, IExiter, bool, bool, String[])``                                           | `Argu.CliParser`                          |
|  7.2% |  4.0ms | `ToUnionParseResults()`                                                                                                                            | `Argu.CliParser+CliParseResultAggregator` |
|  2.4% |  1.3ms | ``postProcessResults(UnionArgInfo, bool, FSharpOption`1<FSharpChoice`2<UnionCaseParseResult[], Exception>[]>, FSharpOption`1<UnionParseResults>)`` | `Argu.CommonParsers`                      |
|  2.4% |  1.3ms | `parseCommandLinePartial(CliParseState, UnionArgInfo, CliParseResultAggregator)`                                                                   | `Argu.CliParser`                          |

##### `checkUnionArgInfo(UnionArgInfo)` (`Argu.PreCompute`)

|     % |   Time | Callee                          | Location          |
| ----: | -----: | ------------------------------- | ----------------- |
| 96.9% | 41.5ms | `postProcess@648(UnionArgInfo)` | `Argu.PreCompute` |
|  3.1% |  1.3ms | `UNMANAGED_CODE_TIME`           | `<unknown>`       |

##### `postProcess@648(UnionArgInfo)` (`Argu.PreCompute`)

|     % |   Time | Callee                                                   | Location                                 |
| ----: | -----: | -------------------------------------------------------- | ---------------------------------------- |
| 58.2% | 24.2ms | `CreateValue()`                                          | ``System.Lazy`1[System.__Canon]``        |
| 32.1% | 13.3ms | ``TryFind(FSharpFunc`2<!!0, bool>, IEnumerable`1<!!0>)`` | `Microsoft.FSharp.Collections.SeqModule` |
|  6.5% |  2.7ms | `get_Value()`                                            | ``System.Lazy`1[System.Boolean]``        |
|  3.2% |  1.3ms | ``Append(IEnumerable`1<!!0>, IEnumerable`1<!!0>)``       | `Microsoft.FSharp.Collections.SeqModule` |

##### `parseKeyValueConfig(IConfigurationReader, UnionArgInfo)` (`Argu.KeyValueParser`)

|     % |   Time | Callee                                                       | Location                                   |
| ----: | -----: | ------------------------------------------------------------ | ------------------------------------------ |
| 95.5% | 27.9ms | `parseKeyValuePartial(KeyValueParseState, UnionCaseArgInfo)` | `Argu.KeyValueParser`                      |
|  4.5% |  1.3ms | `.ctor(UnionArgInfo)`                                        | `Argu.KeyValueParser+KeyValueParseResults` |

##### `parseKeyValuePartial(KeyValueParseState, UnionCaseArgInfo)` (`Argu.KeyValueParser`)

|     % |   Time | Callee                | Location                                                        |
| ----: | -----: | --------------------- | --------------------------------------------------------------- |
| 95.1% | 26.5ms | `GetValue(String)`    | `Argu.AppSettingsConfigurationReader.Argu.IConfigurationReader` |
|  4.9% |  1.4ms | `UNMANAGED_CODE_TIME` | `<unknown>`                                                     |

##### `GetValue(String)` (`Argu.AppSettingsConfigurationReader.Argu.IConfigurationReader`)

|      % |   Time | Callee              | Location                                    |
| -----: | -----: | ------------------- | ------------------------------------------- |
| 100.0% | 26.5ms | `get_AppSettings()` | `System.Configuration.ConfigurationManager` |

##### `parseCommandLineInner(CliParseState, UnionArgInfo)` (`Argu.CliParser`)

|     % |   Time | Callee                                                                           | Location                                  |
| ----: | -----: | -------------------------------------------------------------------------------- | ----------------------------------------- |
| 64.5% | 12.0ms | `parseCommandLinePartial(CliParseState, UnionArgInfo, CliParseResultAggregator)` | `Argu.CliParser`                          |
| 21.4% |  4.0ms | `UNMANAGED_CODE_TIME`                                                            | `<unknown>`                               |
| 14.1% |  2.6ms | `ToUnionParseResults()`                                                          | `Argu.CliParser+CliParseResultAggregator` |

##### ``parseCommandLine(UnionArgInfo, String, FSharpOption`1<String>, int32, IExiter, bool, bool, String[])`` (`Argu.CliParser`)

|      % |   Time | Callee                                               | Location         |
| -----: | -----: | ---------------------------------------------------- | ---------------- |
| 100.0% | 18.5ms | `parseCommandLineInner(CliParseState, UnionArgInfo)` | `Argu.CliParser` |

##### `u_Expr(InputState)` (`Microsoft.FSharp.Quotations.PatternsModule`)

|     % |  Time | Callee                | Location                                     |
| ----: | ----: | --------------------- | -------------------------------------------- |
| 38.6% | 6.7ms | `u_Expr(InputState)`  | `Microsoft.FSharp.Quotations.PatternsModule` |
|  7.9% | 1.4ms | `UNMANAGED_CODE_TIME` | `<unknown>`                                  |

## Hottest call stacks

Call stacks ranked by time spent in their leaf frame. `…` stands for frames the entry filter hides.

Common call stack: `main(String[])` (`Profile`)

|     % |    Time | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ----: | ------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 54.6% |   5.89s | `UNMANAGED_CODE_TIME` ← … ← ``GetUnionCases(Type, FSharpOption`1<BindingFlags>)`` (`Microsoft.FSharp.Reflection.FSharpType`) ← … ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`)                                                                                                                                                                                                                                                                                                                                    |
| 29.5% |   3.18s | `UNMANAGED_CODE_TIME` ← `MakeGenericType(Type[])` (`System.RuntimeType`) ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`) ← … ← `Invoke(BindingEnv)`                                                                                                                                                                                                                                                                                                                                                                 |
|  2.2% | 233.7ms | `UNMANAGED_CODE_TIME` ← `MakeGenericType(Type[])` (`System.RuntimeType`) ← … ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`)                                                                                                                                                                                                                                                                                                                                                                                        |
|  2.0% | 214.4ms | `UNMANAGED_CODE_TIME` ← `MakeGenericType(Type[])` (`System.RuntimeType`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  1.5% | 167.1ms | `UNMANAGED_CODE_TIME` ← … ← `MakeGenericType(Type[])` (`System.RuntimeType`) ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`) ← … ← `Invoke(BindingEnv)`                                                                                                                                                                                                                                                                                                                                                             |
|  1.4% | 153.9ms | `UNMANAGED_CODE_TIME` ← … ← ``GetUnionCases(Type, FSharpOption`1<BindingFlags>)`` (`Microsoft.FSharp.Reflection.FSharpType`) ← … ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`) ← … ← `deserialize(Type, Type[], Type[], FSharpExpr[], unsigned int8[])` (`Microsoft.FSharp.Quotations.PatternsModule`) ← `Deserialize40(Type, Type[], Type[], FSharpExpr[], unsigned int8[])` (`Microsoft.FSharp.Quotations.FSharpExpr`)                                                                                          |
|  1.2% | 132.0ms | `UNMANAGED_CODE_TIME` ← … ← `MakeGenericType(Type[])` (`System.RuntimeType`) ← … ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`)                                                                                                                                                                                                                                                                                                                                                                                    |
|  1.1% | 119.4ms | `UNMANAGED_CODE_TIME` ← … ← `MakeGenericType(Type[])` (`System.RuntimeType`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  1.0% | 109.4ms | `UNMANAGED_CODE_TIME` ← `MakeGenericType(Type[])` (`System.RuntimeType`) ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`)                                                                                                                                                                                                                                                                                                                                                                                            |
|  1.0% | 103.1ms | `UNMANAGED_CODE_TIME` ← … ← `MakeGenericType(Type[])` (`System.RuntimeType`) ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`)                                                                                                                                                                                                                                                                                                                                                                                        |
|  0.9% | 101.3ms | `UNMANAGED_CODE_TIME` ← … ← `MakeGenericType(Type[])` (`System.RuntimeType`) ← … ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`) ← … ← `Invoke(BindingEnv)` ← … ← `deserialize(Type, Type[], Type[], FSharpExpr[], unsigned int8[])` (`Microsoft.FSharp.Quotations.PatternsModule`) ← `Deserialize40(Type, Type[], Type[], FSharpExpr[], unsigned int8[])` (`Microsoft.FSharp.Quotations.FSharpExpr`)                                                                                                               |
|  0.4% |  41.7ms | ``GetUnionCases(Type, FSharpOption`1<BindingFlags>)`` (`Microsoft.FSharp.Reflection.FSharpType`) ← … ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`) ← … ← `deserialize(Type, Type[], Type[], FSharpExpr[], unsigned int8[])` (`Microsoft.FSharp.Quotations.PatternsModule`) ← `Deserialize40(Type, Type[], Type[], FSharpExpr[], unsigned int8[])` (`Microsoft.FSharp.Quotations.FSharpExpr`)                                                                                                                      |
|  0.2% |  26.5ms | `UNMANAGED_CODE_TIME` ← … ← `get_AppSettings()` (`System.Configuration.ConfigurationManager`) ← `GetValue(String)` (`Argu.AppSettingsConfigurationReader.Argu.IConfigurationReader`) ← `parseKeyValuePartial(KeyValueParseState, UnionCaseArgInfo)` (`Argu.KeyValueParser`) ← `parseKeyValueConfig(IConfigurationReader, UnionArgInfo)` ← ``Parse(FSharpOption`1<String[]>, FSharpOption`1<IConfigurationReader>, FSharpOption`1<bool>, FSharpOption`1<bool>, FSharpOption`1<bool>)`` (``Argu.ArgumentParser`1[System.__Canon]``)                     |
|  0.2% |  25.6ms | `MakeGenericType(Type[])` (`System.RuntimeType`) ← … ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`) ← … ← `Invoke(BindingEnv)` ← … ← `deserialize(Type, Type[], Type[], FSharpExpr[], unsigned int8[])` (`Microsoft.FSharp.Quotations.PatternsModule`) ← `Deserialize40(Type, Type[], Type[], FSharpExpr[], unsigned int8[])` (`Microsoft.FSharp.Quotations.FSharpExpr`)                                                                                                                                           |
|  0.2% |  24.1ms | ``GetUnionCases(Type, FSharpOption`1<BindingFlags>)`` (`Microsoft.FSharp.Reflection.FSharpType`) ← … ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`)                                                                                                                                                                                                                                                                                                                                                                |
|  0.2% |  22.7ms | `UNMANAGED_CODE_TIME` ← … ← ``GetUnionCases(Type, FSharpOption`1<BindingFlags>)`` (`Microsoft.FSharp.Reflection.FSharpType`) ← … ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`) ← … ← `deserialize(Type, Type[], Type[], FSharpExpr[], unsigned int8[])` (`Microsoft.FSharp.Quotations.PatternsModule`)                                                                                                                                                                                                            |
|  0.1% |  14.8ms | `UNMANAGED_CODE_TIME` ← `MakeGenericType(Type[])` (`System.RuntimeType`) ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`) ← … ← `Invoke(BindingEnv)` ← … ← `deserialize(Type, Type[], Type[], FSharpExpr[], unsigned int8[])` (`Microsoft.FSharp.Quotations.PatternsModule`)                                                                                                                                                                                                                                         |
|  0.1% |  13.6ms | `UNMANAGED_CODE_TIME` ← … ← `MakeGenericType(Type[])` (`System.RuntimeType`) ← … ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`) ← … ← `deserialize(Type, Type[], Type[], FSharpExpr[], unsigned int8[])` (`Microsoft.FSharp.Quotations.PatternsModule`) ← `Deserialize40(Type, Type[], Type[], FSharpExpr[], unsigned int8[])` (`Microsoft.FSharp.Quotations.FSharpExpr`)                                                                                                                                          |
|  0.1% |  12.1ms | `UNMANAGED_CODE_TIME` ← `MakeGenericType(Type[])` (`System.RuntimeType`) ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`) ← … ← `Invoke(BindingEnv)` ← … ← `deserialize(Type, Type[], Type[], FSharpExpr[], unsigned int8[])` (`Microsoft.FSharp.Quotations.PatternsModule`) ← `Deserialize40(Type, Type[], Type[], FSharpExpr[], unsigned int8[])` (`Microsoft.FSharp.Quotations.FSharpExpr`)                                                                                                                       |
|  0.1% |  10.7ms | `UNMANAGED_CODE_TIME` ← … ← ``TryFind(FSharpFunc`2<!!0, bool>, IEnumerable`1<!!0>)`` (`Microsoft.FSharp.Collections.SeqModule`) ← `postProcess@648(UnionArgInfo)` (`Argu.PreCompute`) ← `checkUnionArgInfo(UnionArgInfo)` ← `Invoke(Unit)` (`<StartupCode$Argu>.$ArgumentParser+-cctor@87-1[System.__Canon]`) ← … ← `CreateValue()` (``System.Lazy`1[System.__Canon]``) ← ``.ctor(FSharpOption`1<String>, FSharpOption`1<String>, FSharpOption`1<int32>, FSharpOption`1<IExiter>, FSharpOption`1<bool>)`` (``Argu.ArgumentParser`1[System.__Canon]``) |

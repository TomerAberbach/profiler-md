# Sampling profile

Took 11.24s.

| Category         |     % |   Time |
| ---------------- | ----: | -----: |
| Native           | 98.8% | 11.11s |
| Standard library |  0.7% | 73.3ms |
| Unknown          |  0.5% | 56.3ms |
| Ours             | <0.1% |  1.3ms |

## Hottest functions

### Self time

Functions ranked by time spent directly in the function body, excluding callees.

|     % |   Time | Function                                                                                                                        | Location                                                    |
| ----: | -----: | ------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| 98.8% | 11.11s | `UNMANAGED_CODE_TIME`                                                                                                           | `<unknown>`                                                 |
|  0.1% | 13.3ms | `MakeGenericType(Type[])`                                                                                                       | `System.RuntimeType`                                        |
| <0.1% |  2.6ms | `get_Item(Object)`                                                                                                              | `System.Collections.Hashtable`                              |
| <0.1% |  1.4ms | `ToArray()`                                                                                                                     | ``System.Collections.Generic.List`1[System.__Canon]``       |
| <0.1% |  1.3ms | ``unpickleObj(Assembly, Type[], FSharpFunc`2<InputState, !!0>, unsigned int8[])``                                               | `Microsoft.FSharp.Quotations.PatternsModule+SimpleUnpickle` |
| <0.1% |  1.3ms | `u_Expr(InputState)`                                                                                                            | `Microsoft.FSharp.Quotations.PatternsModule`                |
| <0.1% |  1.3ms | `ToUnionParseResults()`                                                                                                         | `Argu.CliParser+CliParseResultAggregator`                   |
| <0.1% |  7.0µs | `main(String[])`                                                                                                                | `Profile`                                                   |
| <0.1% |  0.6µs | `Invoke(BindingEnv)`                                                                                                            | `Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`    |
| <0.1% |  0.1µs | ``GetUnionCases(Type, FSharpOption`1<BindingFlags>)``                                                                           | `Microsoft.FSharp.Reflection.FSharpType`                    |
| <0.1% | <0.1µs | ``.ctor(FSharpOption`1<String>, FSharpOption`1<String>, FSharpOption`1<int32>, FSharpOption`1<IExiter>, FSharpOption`1<bool>)`` | ``Argu.ArgumentParser`1[System.__Canon]``                   |
| <0.1% | <0.1µs | `deserialize(Type, Type[], Type[], FSharpExpr[], unsigned int8[])`                                                              | `Microsoft.FSharp.Quotations.PatternsModule`                |
| <0.1% | <0.1µs | `checkUnionArgInfo(UnionArgInfo)`                                                                                               | `Argu.PreCompute`                                           |
| <0.1% | <0.1µs | ``ToArray(IEnumerable`1<!!0>)``                                                                                                 | `Microsoft.FSharp.Collections.SeqModule`                    |
| <0.1% | <0.1µs | `preComputeUnionArgInfo()`                                                                                                      | `Argu.PreCompute`                                           |
| <0.1% | <0.1µs | `.ctor(String, RegexOptions, TimeSpan, CultureInfo)`                                                                            | `System.Text.RegularExpressions.Regex`                      |
| <0.1% | <0.1µs | ``gprintf(FSharpFunc`2<int32, !!0>, PrintfFormat`4<!!4, !!1, !!2, !!3>)``                                                       | `Microsoft.FSharp.Core.PrintfModule`                        |
| <0.1% | <0.1µs | `parseCommandLineInner(CliParseState, UnionArgInfo)`                                                                            | `Argu.CliParser`                                            |
| <0.1% | <0.1µs | `GetNextToken(bool, UnionArgInfo)`                                                                                              | `Argu.CliParser+CliTokenReader`                             |
| <0.1% | <0.1µs | ``TryFind(FSharpFunc`2<!!0, bool>, IEnumerable`1<!!0>)``                                                                        | `Microsoft.FSharp.Collections.SeqModule`                    |

#### Categories

##### Native

|     % |   Time | Function              | Location    |
| ----: | -----: | --------------------- | ----------- |
| 98.8% | 11.11s | `UNMANAGED_CODE_TIME` | `<unknown>` |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `UNMANAGED_CODE_TIME` (`<unknown>`)

|     % |  Time | Caller                                               | Location                                                 |
| ----: | ----: | ---------------------------------------------------- | -------------------------------------------------------- |
| 36.3% | 4.02s | `MakeGenericType(Type[])`                            | `System.RuntimeType`                                     |
|  0.1% | 6.7ms | `main(String[])`                                     | `Profile`                                                |
| <0.1% | 5.4ms | `Invoke(BindingEnv)`                                 | `Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965` |
| <0.1% | 4.1ms | `parseCommandLineInner(CliParseState, UnionArgInfo)` | `Argu.CliParser`                                         |
| <0.1% | 1.5ms | `preComputeUnionArgInfo()`                           | `Argu.PreCompute`                                        |

##### `MakeGenericType(Type[])` (`System.RuntimeType`)

|     % |   Time | Caller               | Location                                                 |
| ----: | -----: | -------------------- | -------------------------------------------------------- |
| 89.9% | 11.9ms | `Invoke(BindingEnv)` | `Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965` |
| 10.1% |  1.3ms | `main(String[])`     | `Profile`                                                |

##### `get_Item(Object)` (`System.Collections.Hashtable`)

|      % |  Time | Caller                                                       | Location              |
| -----: | ----: | ------------------------------------------------------------ | --------------------- |
| 100.0% | 2.6ms | `parseKeyValuePartial(KeyValueParseState, UnionCaseArgInfo)` | `Argu.KeyValueParser` |

##### `ToArray()` (``System.Collections.Generic.List`1[System.__Canon]``)

|      % |  Time | Caller                  | Location                                  |
| -----: | ----: | ----------------------- | ----------------------------------------- |
| 100.0% | 1.4ms | `ToUnionParseResults()` | `Argu.CliParser+CliParseResultAggregator` |

##### ``unpickleObj(Assembly, Type[], FSharpFunc`2<InputState, !!0>, unsigned int8[])`` (`Microsoft.FSharp.Quotations.PatternsModule+SimpleUnpickle`)

|      % |  Time | Caller           | Location  |
| -----: | ----: | ---------------- | --------- |
| 100.0% | 1.3ms | `main(String[])` | `Profile` |

##### `ToUnionParseResults()` (`Argu.CliParser+CliParseResultAggregator`)

|      % |  Time | Caller                                                                                                                                      | Location                                  |
| -----: | ----: | ------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- |
| 100.0% | 1.3ms | ``Parse(FSharpOption`1<String[]>, FSharpOption`1<IConfigurationReader>, FSharpOption`1<bool>, FSharpOption`1<bool>, FSharpOption`1<bool>)`` | ``Argu.ArgumentParser`1[System.__Canon]`` |

##### `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`)

|     % |  Time | Caller           | Location  |
| ----: | ----: | ---------------- | --------- |
| 99.9% | 0.6µs | `main(String[])` | `Profile` |

##### ``.ctor(FSharpOption`1<String>, FSharpOption`1<String>, FSharpOption`1<int32>, FSharpOption`1<IExiter>, FSharpOption`1<bool>)`` (``Argu.ArgumentParser`1[System.__Canon]``)

|      % |   Time | Caller           | Location  |
| -----: | -----: | ---------------- | --------- |
| 100.0% | <0.1µs | `main(String[])` | `Profile` |

##### `deserialize(Type, Type[], Type[], FSharpExpr[], unsigned int8[])` (`Microsoft.FSharp.Quotations.PatternsModule`)

|      % |   Time | Caller                                                               | Location                                 |
| -----: | -----: | -------------------------------------------------------------------- | ---------------------------------------- |
| 100.0% | <0.1µs | `Deserialize40(Type, Type[], Type[], FSharpExpr[], unsigned int8[])` | `Microsoft.FSharp.Quotations.FSharpExpr` |

##### `checkUnionArgInfo(UnionArgInfo)` (`Argu.PreCompute`)

|      % |   Time | Caller         | Location                                                         |
| -----: | -----: | -------------- | ---------------------------------------------------------------- |
| 100.0% | <0.1µs | `Invoke(Unit)` | `<StartupCode$Argu>.$ArgumentParser+-cctor@87-1[System.__Canon]` |

##### `preComputeUnionArgInfo()` (`Argu.PreCompute`)

|      % |   Time | Caller         | Location                                                       |
| -----: | -----: | -------------- | -------------------------------------------------------------- |
| 100.0% | <0.1µs | `Invoke(Unit)` | `<StartupCode$Argu>.$ArgumentParser+-cctor@86[System.__Canon]` |

##### `.ctor(String, RegexOptions, TimeSpan, CultureInfo)` (`System.Text.RegularExpressions.Regex`)

|      % |   Time | Caller     | Location                              |
| -----: | -----: | ---------- | ------------------------------------- |
| 100.0% | <0.1µs | `.cctor()` | `<StartupCode$Argu>.$Argu.PreCompute` |

##### ``gprintf(FSharpFunc`2<int32, !!0>, PrintfFormat`4<!!4, !!1, !!2, !!3>)`` (`Microsoft.FSharp.Core.PrintfModule`)

|      % |   Time | Caller           | Location  |
| -----: | -----: | ---------------- | --------- |
| 100.0% | <0.1µs | `main(String[])` | `Profile` |

##### `parseCommandLineInner(CliParseState, UnionArgInfo)` (`Argu.CliParser`)

|      % |   Time | Caller                                                                                                   | Location         |
| -----: | -----: | -------------------------------------------------------------------------------------------------------- | ---------------- |
| 100.0% | <0.1µs | ``parseCommandLine(UnionArgInfo, String, FSharpOption`1<String>, int32, IExiter, bool, bool, String[])`` | `Argu.CliParser` |

##### `GetNextToken(bool, UnionArgInfo)` (`Argu.CliParser+CliTokenReader`)

|      % |   Time | Caller                                                             | Location         |
| -----: | -----: | ------------------------------------------------------------------ | ---------------- |
| 100.0% | <0.1µs | `parseNextField@321(CliParseState, UnionArgInfo, FieldParserInfo)` | `Argu.CliParser` |

##### ``TryFind(FSharpFunc`2<!!0, bool>, IEnumerable`1<!!0>)`` (`Microsoft.FSharp.Collections.SeqModule`)

|      % |   Time | Caller                          | Location          |
| -----: | -----: | ------------------------------- | ----------------- |
| 100.0% | <0.1µs | `postProcess@648(UnionArgInfo)` | `Argu.PreCompute` |

### Total time

Functions ranked by total time spent in the function and all its callees.

|     % |    Time | Function                                                                                                                                    | Location                                                         |
| ----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| 99.9% |  11.22s | `main(String[])`                                                                                                                            | `Profile`                                                        |
| 98.8% |  11.11s | `UNMANAGED_CODE_TIME`                                                                                                                       | `<unknown>`                                                      |
| 95.1% |  10.68s | `Invoke(BindingEnv)`                                                                                                                        | `Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`         |
| 56.1% |   6.30s | `GetCustomAttributes(RuntimeType, RuntimeType, bool)`                                                                                       | `System.Reflection.CustomAttribute`                              |
| 56.1% |   6.30s | ``GetUnionCases(Type, FSharpOption`1<BindingFlags>)``                                                                                       | `Microsoft.FSharp.Reflection.FSharpType`                         |
| 42.2% |   4.73s | `MakeGenericType(Type[])`                                                                                                                   | `System.RuntimeType`                                             |
|  4.0% | 451.5ms | `deserialize(Type, Type[], Type[], FSharpExpr[], unsigned int8[])`                                                                          | `Microsoft.FSharp.Quotations.PatternsModule`                     |
|  3.4% | 384.8ms | `Deserialize40(Type, Type[], Type[], FSharpExpr[], unsigned int8[])`                                                                        | `Microsoft.FSharp.Quotations.FSharpExpr`                         |
|  0.6% |  70.0ms | `CreateValue()`                                                                                                                             | ``System.Lazy`1[System.__Canon]``                                |
|  0.6% |  69.9ms | ``.ctor(FSharpOption`1<String>, FSharpOption`1<String>, FSharpOption`1<int32>, FSharpOption`1<IExiter>, FSharpOption`1<bool>)``             | ``Argu.ArgumentParser`1[System.__Canon]``                        |
|  0.5% |  61.8ms | `Invoke(Unit)`                                                                                                                              | `<StartupCode$Argu>.$ArgumentParser+-cctor@87-1[System.__Canon]` |
|  0.5% |  51.4ms | ``Parse(FSharpOption`1<String[]>, FSharpOption`1<IConfigurationReader>, FSharpOption`1<bool>, FSharpOption`1<bool>, FSharpOption`1<bool>)`` | ``Argu.ArgumentParser`1[System.__Canon]``                        |
|  0.4% |  47.9ms | `checkUnionArgInfo(UnionArgInfo)`                                                                                                           | `Argu.PreCompute`                                                |
|  0.4% |  46.6ms | `postProcess@648(UnionArgInfo)`                                                                                                             | `Argu.PreCompute`                                                |
|  0.3% |  31.0ms | `parseKeyValuePartial(KeyValueParseState, UnionCaseArgInfo)`                                                                                | `Argu.KeyValueParser`                                            |
|  0.3% |  31.0ms | `parseKeyValueConfig(IConfigurationReader, UnionArgInfo)`                                                                                   | `Argu.KeyValueParser`                                            |
|  0.2% |  27.0ms | `get_AppSettings()`                                                                                                                         | `System.Configuration.ConfigurationManager`                      |
|  0.2% |  27.0ms | `GetValue(String)`                                                                                                                          | `Argu.AppSettingsConfigurationReader.Argu.IConfigurationReader`  |
|  0.2% |  22.8ms | `u_Expr(InputState)`                                                                                                                        | `Microsoft.FSharp.Quotations.PatternsModule`                     |
|  0.2% |  17.7ms | `parseCommandLineInner(CliParseState, UnionArgInfo)`                                                                                        | `Argu.CliParser`                                                 |

#### Categories

##### Native

|     % |   Time | Function              | Location    |
| ----: | -----: | --------------------- | ----------- |
| 98.8% | 11.11s | `UNMANAGED_CODE_TIME` | `<unknown>` |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `main(String[])` (`Profile`)

|     % |    Time | Callee                                                                                                                          | Location                                                 |
| ----: | ------: | ------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| 91.4% |  10.25s | `Invoke(BindingEnv)`                                                                                                            | `Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965` |
|  3.4% | 384.8ms | `Deserialize40(Type, Type[], Type[], FSharpExpr[], unsigned int8[])`                                                            | `Microsoft.FSharp.Quotations.FSharpExpr`                 |
|  3.2% | 358.8ms | `MakeGenericType(Type[])`                                                                                                       | `System.RuntimeType`                                     |
|  0.6% |  69.9ms | ``.ctor(FSharpOption`1<String>, FSharpOption`1<String>, FSharpOption`1<int32>, FSharpOption`1<IExiter>, FSharpOption`1<bool>)`` | ``Argu.ArgumentParser`1[System.__Canon]``                |
|  0.6% |  66.7ms | `deserialize(Type, Type[], Type[], FSharpExpr[], unsigned int8[])`                                                              | `Microsoft.FSharp.Quotations.PatternsModule`             |

##### `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`)

|     % |  Time | Callee                    | Location             |
| ----: | ----: | ------------------------- | -------------------- |
| 35.5% | 3.79s | `MakeGenericType(Type[])` | `System.RuntimeType` |
|  0.1% | 5.4ms | `UNMANAGED_CODE_TIME`     | `<unknown>`          |

##### `MakeGenericType(Type[])` (`System.RuntimeType`)

|     % |  Time | Callee                | Location    |
| ----: | ----: | --------------------- | ----------- |
| 85.0% | 4.02s | `UNMANAGED_CODE_TIME` | `<unknown>` |

##### `deserialize(Type, Type[], Type[], FSharpExpr[], unsigned int8[])` (`Microsoft.FSharp.Quotations.PatternsModule`)

|    % |  Time | Callee                | Location    |
| ---: | ----: | --------------------- | ----------- |
| 0.3% | 1.3ms | `UNMANAGED_CODE_TIME` | `<unknown>` |

##### `Deserialize40(Type, Type[], Type[], FSharpExpr[], unsigned int8[])` (`Microsoft.FSharp.Quotations.FSharpExpr`)

|      % |    Time | Callee                                                             | Location                                     |
| -----: | ------: | ------------------------------------------------------------------ | -------------------------------------------- |
| 100.0% | 384.8ms | `deserialize(Type, Type[], Type[], FSharpExpr[], unsigned int8[])` | `Microsoft.FSharp.Quotations.PatternsModule` |

##### ``.ctor(FSharpOption`1<String>, FSharpOption`1<String>, FSharpOption`1<int32>, FSharpOption`1<IExiter>, FSharpOption`1<bool>)`` (``Argu.ArgumentParser`1[System.__Canon]``)

|     % |   Time | Callee                                                                  | Location                                  |
| ----: | -----: | ----------------------------------------------------------------------- | ----------------------------------------- |
| 88.4% | 61.8ms | `CreateValue()`                                                         | ``System.Lazy`1[System.__Canon]``         |
|  7.7% |  5.4ms | `getDefaultCharacterWidth()`                                            | `Argu.Utils`                              |
|  2.0% |  1.4ms | `.cctor()`                                                              | ``Argu.ArgumentParser`1[System.__Canon]`` |
|  1.9% |  1.4ms | ``.ctor(UnionArgInfo, String, FSharpOption`1<String>, int32, IExiter)`` | ``Argu.ArgumentParser`1[System.__Canon]`` |

##### `Invoke(Unit)` (`<StartupCode$Argu>.$ArgumentParser+-cctor@87-1[System.__Canon]`)

|     % |   Time | Callee                            | Location                          |
| ----: | -----: | --------------------------------- | --------------------------------- |
| 77.6% | 47.9ms | `checkUnionArgInfo(UnionArgInfo)` | `Argu.PreCompute`                 |
| 22.4% | 13.8ms | `CreateValue()`                   | ``System.Lazy`1[System.__Canon]`` |

##### ``Parse(FSharpOption`1<String[]>, FSharpOption`1<IConfigurationReader>, FSharpOption`1<bool>, FSharpOption`1<bool>, FSharpOption`1<bool>)`` (``Argu.ArgumentParser`1[System.__Canon]``)

|     % |   Time | Callee                                                                                                                                             | Location                                  |
| ----: | -----: | -------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- |
| 60.3% | 31.0ms | `parseKeyValueConfig(IConfigurationReader, UnionArgInfo)`                                                                                          | `Argu.KeyValueParser`                     |
| 34.5% | 17.7ms | ``parseCommandLine(UnionArgInfo, String, FSharpOption`1<String>, int32, IExiter, bool, bool, String[])``                                           | `Argu.CliParser`                          |
|  2.6% |  1.4ms | ``postProcessResults(UnionArgInfo, bool, FSharpOption`1<FSharpChoice`2<UnionCaseParseResult[], Exception>[]>, FSharpOption`1<UnionParseResults>)`` | `Argu.CommonParsers`                      |
|  2.6% |  1.3ms | `ToUnionParseResults()`                                                                                                                            | `Argu.CliParser+CliParseResultAggregator` |

##### `checkUnionArgInfo(UnionArgInfo)` (`Argu.PreCompute`)

|     % |   Time | Callee                          | Location          |
| ----: | -----: | ------------------------------- | ----------------- |
| 97.1% | 46.6ms | `postProcess@648(UnionArgInfo)` | `Argu.PreCompute` |
|  2.9% |  1.4ms | `UNMANAGED_CODE_TIME`           | `<unknown>`       |

##### `postProcess@648(UnionArgInfo)` (`Argu.PreCompute`)

|     % |   Time | Callee                                                   | Location                                 |
| ----: | -----: | -------------------------------------------------------- | ---------------------------------------- |
| 65.0% | 30.3ms | `CreateValue()`                                          | ``System.Lazy`1[System.__Canon]``        |
| 29.2% | 13.6ms | ``TryFind(FSharpFunc`2<!!0, bool>, IEnumerable`1<!!0>)`` | `Microsoft.FSharp.Collections.SeqModule` |
|  3.0% |  1.4ms | `UNMANAGED_CODE_TIME`                                    | `<unknown>`                              |
|  2.9% |  1.4ms | `get_Value()`                                            | ``System.Lazy`1[Argu.CliPosition]``      |

##### `parseKeyValuePartial(KeyValueParseState, UnionCaseArgInfo)` (`Argu.KeyValueParser`)

|     % |   Time | Callee                | Location                                                        |
| ----: | -----: | --------------------- | --------------------------------------------------------------- |
| 87.1% | 27.0ms | `GetValue(String)`    | `Argu.AppSettingsConfigurationReader.Argu.IConfigurationReader` |
|  8.4% |  2.6ms | `get_Item(Object)`    | `System.Collections.Hashtable`                                  |
|  4.5% |  1.4ms | `UNMANAGED_CODE_TIME` | `<unknown>`                                                     |

##### `parseKeyValueConfig(IConfigurationReader, UnionArgInfo)` (`Argu.KeyValueParser`)

|      % |   Time | Callee                                                       | Location              |
| -----: | -----: | ------------------------------------------------------------ | --------------------- |
| 100.0% | 31.0ms | `parseKeyValuePartial(KeyValueParseState, UnionCaseArgInfo)` | `Argu.KeyValueParser` |

##### `GetValue(String)` (`Argu.AppSettingsConfigurationReader.Argu.IConfigurationReader`)

|      % |   Time | Callee              | Location                                    |
| -----: | -----: | ------------------- | ------------------------------------------- |
| 100.0% | 27.0ms | `get_AppSettings()` | `System.Configuration.ConfigurationManager` |

##### `u_Expr(InputState)` (`Microsoft.FSharp.Quotations.PatternsModule`)

|    % |  Time | Callee                | Location                                     |
| ---: | ----: | --------------------- | -------------------------------------------- |
| 6.0% | 1.4ms | `UNMANAGED_CODE_TIME` | `<unknown>`                                  |
| 6.0% | 1.4ms | `u_Expr(InputState)`  | `Microsoft.FSharp.Quotations.PatternsModule` |

##### `parseCommandLineInner(CliParseState, UnionArgInfo)` (`Argu.CliParser`)

|     % |   Time | Callee                                                                           | Location                                  |
| ----: | -----: | -------------------------------------------------------------------------------- | ----------------------------------------- |
| 61.5% | 10.9ms | `parseCommandLinePartial(CliParseState, UnionArgInfo, CliParseResultAggregator)` | `Argu.CliParser`                          |
| 23.2% |  4.1ms | `UNMANAGED_CODE_TIME`                                                            | `<unknown>`                               |
|  7.6% |  1.4ms | `ToUnionParseResults()`                                                          | `Argu.CliParser+CliParseResultAggregator` |
|  7.6% |  1.3ms | `get_Value()`                                                                    | ``System.Lazy`1[System.Boolean]``         |

## Hottest call stacks

Call stacks ranked by time spent in their leaf frame. `…` stands for frames the entry filter hides.

Common call stack: `main(String[])` (`Profile`)

|     % |    Time | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 53.7% |   6.03s | `UNMANAGED_CODE_TIME` ← … ← `GetCustomAttributes(RuntimeType, RuntimeType, bool)` (`System.Reflection.CustomAttribute`) ← … ← ``GetUnionCases(Type, FSharpOption`1<BindingFlags>)`` (`Microsoft.FSharp.Reflection.FSharpType`) ← … ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`)                                                                                                                                                                                                                                           |
| 29.9% |   3.35s | `UNMANAGED_CODE_TIME` ← `MakeGenericType(Type[])` (`System.RuntimeType`) ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`) ← … ← `Invoke(BindingEnv)`                                                                                                                                                                                                                                                                                                                                                                          |
|  2.7% | 298.1ms | `UNMANAGED_CODE_TIME` ← `MakeGenericType(Type[])` (`System.RuntimeType`) ← … ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`)                                                                                                                                                                                                                                                                                                                                                                                                 |
|  2.2% | 244.1ms | `UNMANAGED_CODE_TIME` ← `MakeGenericType(Type[])` (`System.RuntimeType`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  1.6% | 179.4ms | `UNMANAGED_CODE_TIME` ← … ← `MakeGenericType(Type[])` (`System.RuntimeType`) ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`) ← … ← `Invoke(BindingEnv)`                                                                                                                                                                                                                                                                                                                                                                      |
|  1.5% | 173.1ms | `UNMANAGED_CODE_TIME` ← … ← `GetCustomAttributes(RuntimeType, RuntimeType, bool)` (`System.Reflection.CustomAttribute`) ← … ← ``GetUnionCases(Type, FSharpOption`1<BindingFlags>)`` (`Microsoft.FSharp.Reflection.FSharpType`) ← … ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`) ← … ← `deserialize(Type, Type[], Type[], FSharpExpr[], unsigned int8[])` (`Microsoft.FSharp.Quotations.PatternsModule`) ← `Deserialize40(Type, Type[], Type[], FSharpExpr[], unsigned int8[])` (`Microsoft.FSharp.Quotations.FSharpExpr`) |
|  1.2% | 140.4ms | `UNMANAGED_CODE_TIME` ← … ← `MakeGenericType(Type[])` (`System.RuntimeType`) ← … ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`)                                                                                                                                                                                                                                                                                                                                                                                             |
|  1.0% | 116.6ms | `UNMANAGED_CODE_TIME` ← … ← `MakeGenericType(Type[])` (`System.RuntimeType`) ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`)                                                                                                                                                                                                                                                                                                                                                                                                 |
|  1.0% | 113.3ms | `UNMANAGED_CODE_TIME` ← … ← `MakeGenericType(Type[])` (`System.RuntimeType`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  0.8% |  94.6ms | `UNMANAGED_CODE_TIME` ← … ← `MakeGenericType(Type[])` (`System.RuntimeType`) ← … ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`) ← … ← `Invoke(BindingEnv)` ← … ← `deserialize(Type, Type[], Type[], FSharpExpr[], unsigned int8[])` (`Microsoft.FSharp.Quotations.PatternsModule`) ← `Deserialize40(Type, Type[], Type[], FSharpExpr[], unsigned int8[])` (`Microsoft.FSharp.Quotations.FSharpExpr`)                                                                                                                        |
|  0.8% |  88.1ms | `UNMANAGED_CODE_TIME` ← `MakeGenericType(Type[])` (`System.RuntimeType`) ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`)                                                                                                                                                                                                                                                                                                                                                                                                     |
|  0.4% |  40.1ms | `UNMANAGED_CODE_TIME` ← … ← `GetCustomAttributes(RuntimeType, RuntimeType, bool)` (`System.Reflection.CustomAttribute`) ← … ← ``GetUnionCases(Type, FSharpOption`1<BindingFlags>)`` (`Microsoft.FSharp.Reflection.FSharpType`) ← … ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`) ← … ← `deserialize(Type, Type[], Type[], FSharpExpr[], unsigned int8[])` (`Microsoft.FSharp.Quotations.PatternsModule`)                                                                                                                   |
|  0.3% |  33.6ms | `GetCustomAttributes(RuntimeType, RuntimeType, bool)` (`System.Reflection.CustomAttribute`) ← … ← ``GetUnionCases(Type, FSharpOption`1<BindingFlags>)`` (`Microsoft.FSharp.Reflection.FSharpType`) ← … ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`) ← … ← `deserialize(Type, Type[], Type[], FSharpExpr[], unsigned int8[])` (`Microsoft.FSharp.Quotations.PatternsModule`) ← `Deserialize40(Type, Type[], Type[], FSharpExpr[], unsigned int8[])` (`Microsoft.FSharp.Quotations.FSharpExpr`)                             |
|  0.2% |  27.0ms | `UNMANAGED_CODE_TIME` ← … ← `get_AppSettings()` (`System.Configuration.ConfigurationManager`) ← `GetValue(String)` (`Argu.AppSettingsConfigurationReader.Argu.IConfigurationReader`) ← `parseKeyValuePartial(KeyValueParseState, UnionCaseArgInfo)` (`Argu.KeyValueParser`) ← `parseKeyValueConfig(IConfigurationReader, UnionArgInfo)` ← ``Parse(FSharpOption`1<String[]>, FSharpOption`1<IConfigurationReader>, FSharpOption`1<bool>, FSharpOption`1<bool>, FSharpOption`1<bool>)`` (``Argu.ArgumentParser`1[System.__Canon]``)                              |
|  0.2% |  25.6ms | `MakeGenericType(Type[])` (`System.RuntimeType`) ← … ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`) ← … ← `Invoke(BindingEnv)` ← … ← `deserialize(Type, Type[], Type[], FSharpExpr[], unsigned int8[])` (`Microsoft.FSharp.Quotations.PatternsModule`) ← `Deserialize40(Type, Type[], Type[], FSharpExpr[], unsigned int8[])` (`Microsoft.FSharp.Quotations.FSharpExpr`)                                                                                                                                                    |
|  0.2% |  22.7ms | `GetCustomAttributes(RuntimeType, RuntimeType, bool)` (`System.Reflection.CustomAttribute`) ← … ← ``GetUnionCases(Type, FSharpOption`1<BindingFlags>)`` (`Microsoft.FSharp.Reflection.FSharpType`) ← … ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`)                                                                                                                                                                                                                                                                       |
|  0.2% |  22.6ms | `UNMANAGED_CODE_TIME` ← `MakeGenericType(Type[])` (`System.RuntimeType`) ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`) ← … ← `Invoke(BindingEnv)` ← … ← `deserialize(Type, Type[], Type[], FSharpExpr[], unsigned int8[])` (`Microsoft.FSharp.Quotations.PatternsModule`)                                                                                                                                                                                                                                                  |
|  0.1% |  12.1ms | `UNMANAGED_CODE_TIME` ← … ← `MakeGenericType(Type[])` (`System.RuntimeType`) ← … ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`) ← … ← `deserialize(Type, Type[], Type[], FSharpExpr[], unsigned int8[])` (`Microsoft.FSharp.Quotations.PatternsModule`) ← `Deserialize40(Type, Type[], Type[], FSharpExpr[], unsigned int8[])` (`Microsoft.FSharp.Quotations.FSharpExpr`)                                                                                                                                                   |
|  0.1% |  12.1ms | `UNMANAGED_CODE_TIME` ← `MakeGenericType(Type[])` (`System.RuntimeType`) ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`) ← … ← `Invoke(BindingEnv)` ← … ← `deserialize(Type, Type[], Type[], FSharpExpr[], unsigned int8[])` (`Microsoft.FSharp.Quotations.PatternsModule`) ← `Deserialize40(Type, Type[], Type[], FSharpExpr[], unsigned int8[])` (`Microsoft.FSharp.Quotations.FSharpExpr`)                                                                                                                                |
|  0.1% |  10.7ms | `MakeGenericType(Type[])` (`System.RuntimeType`) ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`) ← … ← `Invoke(BindingEnv)`                                                                                                                                                                                                                                                                                                                                                                                                  |

# Sampling profile diff

Took 10.81s → 11.24s (+427.38ms, +4.0%).

| Category         | Change |     Delta |             % |            Time |
| ---------------- | -----: | --------: | ------------: | --------------: |
| Native           |  +4.1% | +434.75ms | 98.7% → 98.8% | 10.67s → 11.11s |
| Standard library |  +7.1% |   +4.85ms |   0.6% → 0.7% | 68.4ms → 73.3ms |
| Unknown          | -12.7% |   -8.18ms |   0.6% → 0.5% | 64.5ms → 56.3ms |
| Ours             | -75.1% |   -4.04ms |         <0.1% |   5.4ms → 1.3ms |

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time spent directly in the function body, excluding callees.

|     Change |     Delta |             % |            Time | Function                                                                                                                         | Location                                                    |
| ---------: | --------: | ------------: | --------------: | -------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
|      +4.1% | +434.75ms | 98.7% → 98.8% | 10.67s → 11.11s | `UNMANAGED_CODE_TIME`                                                                                                            | `<unknown>`                                                 |
|    +139.1% |   +7.72ms |          0.1% |  5.6ms → 13.3ms | `MakeGenericType(Type[])`                                                                                                        | `System.RuntimeType`                                        |
|        new |   +2.59ms |  0.0% → <0.1% |     0ms → 2.6ms | `get_Item(Object)`                                                                                                               | `System.Collections.Hashtable`                              |
|        new |   +1.34ms |  0.0% → <0.1% |     0ms → 1.3ms | ``unpickleObj(Assembly, Type[], FSharpFunc`2<InputState, !!0>, unsigned int8[])``                                                | `Microsoft.FSharp.Quotations.PatternsModule+SimpleUnpickle` |
|      +0.7% |   +0.01ms |         <0.1% |   1.3ms → 1.4ms | `ToArray()`                                                                                                                      | ``System.Collections.Generic.List`1[System.__Canon]``       |
| +109732.8% |   +0.01ms |         <0.1% |  <0.1µs → 7.0µs | `main(String[])`                                                                                                                 | `Profile`                                                   |
|        new |   +0.01µs |  0.0% → <0.1% |    0ms → <0.1µs | ``.ctor(FSharpOption`1<String>, FSharpOption`1<String>, FSharpOption`1<int32>, FSharpOption`1<IExiter>, FSharpOption`1<bool>)``  | ``Argu.ArgumentParser`1[System.__Canon]``                   |
|    +739.6% |  +<0.01µs |         <0.1% |          <0.1µs | `checkUnionArgInfo(UnionArgInfo)`                                                                                                | `Argu.PreCompute`                                           |
|        new |  +<0.01µs |  0.0% → <0.1% |    0ms → <0.1µs | ``gprintf(FSharpFunc`2<int32, !!0>, PrintfFormat`4<!!4, !!1, !!2, !!3>)``                                                        | `Microsoft.FSharp.Core.PrintfModule`                        |
|        new |  +<0.01µs |  0.0% → <0.1% |    0ms → <0.1µs | `GetNextToken(bool, UnionArgInfo)`                                                                                               | `Argu.CliParser+CliTokenReader`                             |
|        new |  +<0.01µs |  0.0% → <0.1% |    0ms → <0.1µs | ``TryFind(FSharpFunc`2<!!0, bool>, IEnumerable`1<!!0>)``                                                                         | `Microsoft.FSharp.Collections.SeqModule`                    |
|     +14.8% |  +<0.01µs |         <0.1% |          <0.1µs | `preComputeUnionArgInfo()`                                                                                                       | `Argu.PreCompute`                                           |
|    +186.8% |  +<0.01µs |         <0.1% |          <0.1µs | `cast(FSharpExpr)`                                                                                                               | `Microsoft.FSharp.Quotations.PatternsModule`                |
|        new |  +<0.01µs |  0.0% → <0.1% |    0ms → <0.1µs | `Invoke(Unit)`                                                                                                                   | `Argu.PreCompute+primitiveParsers@90`                       |
|        new |  +<0.01µs |  0.0% → <0.1% |    0ms → <0.1µs | `parseSingleParameter@336-2(CliParseState, UnionArgInfo, CliParseResultAggregator, String, UnionCaseArgInfo, FieldParserInfo[])` | `Argu.CliParser`                                            |
|        new |  +<0.01µs |  0.0% → <0.1% |    0ms → <0.1µs | `Invoke(UnionCaseInfo)`                                                                                                          | `Argu.PreCompute+caseInfo@576-2`                            |
|        new |  +<0.01µs |  0.0% → <0.1% |    0ms → <0.1µs | `tryExtractUnionParameterLabel(PropertyInfo)`                                                                                    | `Argu.PreCompute`                                           |

##### Native

| Change |     Delta |             % |            Time | Function              | Location    |
| -----: | --------: | ------------: | --------------: | --------------------- | ----------- |
|  +4.1% | +434.75ms | 98.7% → 98.8% | 10.67s → 11.11s | `UNMANAGED_CODE_TIME` | `<unknown>` |

#### Improvements

Functions with the largest decrease in time spent directly in the function body, excluding callees.

|  Change |    Delta |            % |          Time | Function                                                                                                                                    | Location                                                                   |
| ------: | -------: | -----------: | ------------: | ------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
|  -67.1% |  -2.71ms |        <0.1% | 4.0ms → 1.3ms | `ToUnionParseResults()`                                                                                                                     | `Argu.CliParser+CliParseResultAggregator`                                  |
|  -66.6% |  -2.68ms |        <0.1% | 4.0ms → 1.3ms | `u_Expr(InputState)`                                                                                                                        | `Microsoft.FSharp.Quotations.PatternsModule`                               |
| removed |  -2.61ms | <0.1% → 0.0% |   2.6ms → 0ms | `StartsWith(String, StringComparison)`                                                                                                      | `System.String`                                                            |
| -100.0% |  -1.37ms |        <0.1% | 1.4ms → 0.6µs | `Invoke(BindingEnv)`                                                                                                                        | `Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`                   |
| removed |  -1.34ms | <0.1% → 0.0% |   1.3ms → 0ms | ``Parse(FSharpOption`1<String[]>, FSharpOption`1<IConfigurationReader>, FSharpOption`1<bool>, FSharpOption`1<bool>, FSharpOption`1<bool>)`` | ``Argu.ArgumentParser`1[System.__Canon]``                                  |
| removed |  -1.28ms | <0.1% → 0.0% |   1.3ms → 0ms | ``AddMany(IEnumerable`1<!0>)``                                                                                                              | ``Microsoft.FSharp.Core.CompilerServices.ListCollector`1[System.__Canon]`` |
|  -75.6% |  -0.01µs |        <0.1% |        <0.1µs | `deserialize(Type, Type[], Type[], FSharpExpr[], unsigned int8[])`                                                                          | `Microsoft.FSharp.Quotations.PatternsModule`                               |
|  -99.5% |  -0.01µs |        <0.1% |        <0.1µs | `postProcess@648(UnionArgInfo)`                                                                                                             | `Argu.PreCompute`                                                          |
|  -70.6% | -<0.01µs |        <0.1% |        <0.1µs | `.ctor(String, RegexOptions, TimeSpan, CultureInfo)`                                                                                        | `System.Text.RegularExpressions.Regex`                                     |
|   -0.7% | -<0.01µs |        <0.1% |         0.1µs | ``GetUnionCases(Type, FSharpOption`1<BindingFlags>)``                                                                                       | `Microsoft.FSharp.Reflection.FSharpType`                                   |
| removed | -<0.01µs | <0.1% → 0.0% |  <0.1µs → 0ms | `parseKeyValueConfig(IConfigurationReader, UnionArgInfo)`                                                                                   | `Argu.KeyValueParser`                                                      |
| removed | -<0.01µs | <0.1% → 0.0% |  <0.1µs → 0ms | ``preComputeUnionCaseArgInfo(FSharpList`1<Type>, FSharpOption`1<HelpParam>, FSharpFunc`2<Unit, UnionArgInfo>, UnionCaseInfo)``              | `Argu.PreCompute`                                                          |
| removed | -<0.01µs | <0.1% → 0.0% |  <0.1µs → 0ms | `parseCommandLinePartial(CliParseState, UnionArgInfo, CliParseResultAggregator)`                                                            | `Argu.CliParser`                                                           |
| removed | -<0.01µs | <0.1% → 0.0% |  <0.1µs → 0ms | ``preComputeUnionArgInfoInner(FSharpList`1<Type>, FSharpOption`1<HelpParam>, FSharpFunc`2<Unit, FSharpOption`1<UnionCaseArgInfo>>, Type)``  | `Argu.PreCompute`                                                          |
|  -58.6% | -<0.01µs |        <0.1% |        <0.1µs | `parseCommandLineInner(CliParseState, UnionArgInfo)`                                                                                        | `Argu.CliParser`                                                           |
|  -78.8% | -<0.01µs |        <0.1% |        <0.1µs | `parseKeyValuePartial(KeyValueParseState, UnionCaseArgInfo)`                                                                                | `Argu.KeyValueParser`                                                      |
| removed | -<0.01µs | <0.1% → 0.0% |  <0.1µs → 0ms | ``IsUnion(Type, FSharpOption`1<BindingFlags>)``                                                                                             | `Microsoft.FSharp.Reflection.FSharpType`                                   |
|  -16.6% | -<0.01µs |        <0.1% |        <0.1µs | ``ToArray(IEnumerable`1<!!0>)``                                                                                                             | `Microsoft.FSharp.Collections.SeqModule`                                   |
| removed | -<0.01µs | <0.1% → 0.0% |  <0.1µs → 0ms | `Invoke(Unit)`                                                                                                                              | `Argu.PreCompute+commandLineArgs@458`                                      |
| removed | -<0.01µs | <0.1% → 0.0% |  <0.1µs → 0ms | `Invoke(Unit)`                                                                                                                              | `Argu.PreCompute+parsers@414`                                              |

### Total time

#### Regressions

Functions with the largest increase in total time spent in the function and all its callees.

| Change |     Delta |             % |              Time | Function                                                                                                                        | Location                                                         |
| -----: | --------: | ------------: | ----------------: | ------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
|  +4.1% | +434.75ms | 98.7% → 98.8% |   10.67s → 11.11s | `UNMANAGED_CODE_TIME`                                                                                                           | `<unknown>`                                                      |
|  +4.0% | +432.69ms | 99.8% → 99.9% |   10.79s → 11.22s | `main(String[])`                                                                                                                | `Profile`                                                        |
|  +3.9% | +400.84ms |         95.1% |   10.28s → 10.68s | `Invoke(BindingEnv)`                                                                                                            | `Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`         |
|  +5.9% | +263.31ms | 41.4% → 42.2% |     4.47s → 4.73s | `MakeGenericType(Type[])`                                                                                                       | `System.RuntimeType`                                             |
|  +2.6% | +161.45ms | 56.8% → 56.1% |     6.14s → 6.30s | `GetCustomAttributes(RuntimeType, RuntimeType, bool)`                                                                           | `System.Reflection.CustomAttribute`                              |
|  +2.6% | +158.79ms | 56.8% → 56.1% |     6.14s → 6.30s | ``GetUnionCases(Type, FSharpOption`1<BindingFlags>)``                                                                           | `Microsoft.FSharp.Reflection.FSharpType`                         |
|  +4.7% |  +20.43ms |          4.0% | 431.0ms → 451.5ms | `deserialize(Type, Type[], Type[], FSharpExpr[], unsigned int8[])`                                                              | `Microsoft.FSharp.Quotations.PatternsModule`                     |
| +13.9% |   +8.56ms |          0.6% |   61.4ms → 69.9ms | ``.ctor(FSharpOption`1<String>, FSharpOption`1<String>, FSharpOption`1<int32>, FSharpOption`1<IExiter>, FSharpOption`1<bool>)`` | ``Argu.ArgumentParser`1[System.__Canon]``                        |
| +10.1% |   +5.68ms |          0.5% |   56.1ms → 61.8ms | `Invoke(Unit)`                                                                                                                  | `<StartupCode$Argu>.$ArgumentParser+-cctor@87-1[System.__Canon]` |
| +31.7% |   +5.49ms |          0.2% |   17.3ms → 22.8ms | `u_Expr(InputState)`                                                                                                            | `Microsoft.FSharp.Quotations.PatternsModule`                     |
| +12.0% |   +5.12ms |          0.4% |   42.8ms → 47.9ms | `checkUnionArgInfo(UnionArgInfo)`                                                                                               | `Argu.PreCompute`                                                |
| +12.2% |   +5.06ms |          0.4% |   41.5ms → 46.6ms | `postProcess@648(UnionArgInfo)`                                                                                                 | `Argu.PreCompute`                                                |
|  +7.0% |   +4.59ms |          0.6% |   65.4ms → 70.0ms | `CreateValue()`                                                                                                                 | ``System.Lazy`1[System.__Canon]``                                |
| +11.3% |   +3.15ms |          0.3% |   27.9ms → 31.0ms | `parseKeyValuePartial(KeyValueParseState, UnionCaseArgInfo)`                                                                    | `Argu.KeyValueParser`                                            |
| +44.1% |   +2.94ms |          0.1% |     6.7ms → 9.6ms | `.ctor(String, RegexOptions, TimeSpan, CultureInfo)`                                                                            | `System.Text.RegularExpressions.Regex`                           |
| +69.5% |   +2.82ms |  <0.1% → 0.1% |     4.1ms → 6.9ms | `Invoke(Unit)`                                                                                                                  | `Argu.PreCompute+parsers@414`                                    |
| +98.0% |   +2.64ms |         <0.1% |     2.7ms → 5.3ms | ``unpickleObj(Assembly, Type[], FSharpFunc`2<InputState, !!0>, unsigned int8[])``                                               | `Microsoft.FSharp.Quotations.PatternsModule+SimpleUnpickle`      |
|    new |   +2.59ms |  0.0% → <0.1% |       0ms → 2.6ms | `get_Item(Object)`                                                                                                              | `System.Collections.Hashtable`                                   |
| +15.8% |   +1.89ms |          0.1% |   12.0ms → 13.8ms | `preComputeUnionArgInfo()`                                                                                                      | `Argu.PreCompute`                                                |
|  +6.3% |   +1.83ms |          0.3% |   29.2ms → 31.0ms | `parseKeyValueConfig(IConfigurationReader, UnionArgInfo)`                                                                       | `Argu.KeyValueParser`                                            |

##### Native

| Change |     Delta |             % |            Time | Function              | Location    |
| -----: | --------: | ------------: | --------------: | --------------------- | ----------- |
|  +4.1% | +434.75ms | 98.7% → 98.8% | 10.67s → 11.11s | `UNMANAGED_CODE_TIME` | `<unknown>` |

#### Improvements

Functions with the largest decrease in total time spent in the function and all its callees.

|  Change |   Delta |            % |            Time | Function                                                                                                                                    | Location                                             |
| ------: | ------: | -----------: | --------------: | ------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
|  -35.8% | -5.32ms |         0.1% |  14.8ms → 9.5ms | `Cast(FSharpExpr)`                                                                                                                          | `Microsoft.FSharp.Quotations.FSharpExpr`             |
|  -55.1% | -5.12ms | 0.1% → <0.1% |   9.3ms → 4.2ms | `parseNextField@321(CliParseState, UnionArgInfo, FieldParserInfo)`                                                                          | `Argu.CliParser`                                     |
|   -7.8% | -4.34ms |         0.5% | 55.8ms → 51.4ms | ``Parse(FSharpOption`1<String[]>, FSharpOption`1<IConfigurationReader>, FSharpOption`1<bool>, FSharpOption`1<bool>, FSharpOption`1<bool>)`` | ``Argu.ArgumentParser`1[System.__Canon]``            |
|  -59.7% | -3.98ms | 0.1% → <0.1% |   6.7ms → 2.7ms | `ToUnionParseResults()`                                                                                                                     | `Argu.CliParser+CliParseResultAggregator`            |
|  -40.5% | -3.76ms | 0.1% → <0.1% |   9.3ms → 5.5ms | `parseSingleParameter@336-2(CliParseState, UnionArgInfo, CliParseResultAggregator, String, UnionCaseArgInfo, FieldParserInfo[])`            | `Argu.CliParser`                                     |
|  -67.0% | -2.72ms |        <0.1% |   4.1ms → 1.3ms | ``add(IComparer`1<!!0>, !!0, !!1, MapTree`2<!!0, !!1>)``                                                                                    | `Microsoft.FSharp.Collections.MapTreeModule`         |
|  -66.3% | -2.66ms |        <0.1% |   4.0ms → 1.3ms | `get_Value()`                                                                                                                               | ``System.Lazy`1[System.Boolean]``                    |
|  -17.7% | -2.63ms |         0.1% | 14.8ms → 12.2ms | `cast(FSharpExpr)`                                                                                                                          | `Microsoft.FSharp.Quotations.PatternsModule`         |
| removed | -2.61ms | <0.1% → 0.0% |     2.6ms → 0ms | `StartsWith(String, StringComparison)`                                                                                                      | `System.String`                                      |
| removed | -2.61ms | <0.1% → 0.0% |     2.6ms → 0ms | `TryGetPrefix(String, String&, !0&)`                                                                                                        | ``Argu.Utils+PrefixDictionary`1[System.__Canon]``    |
|  -25.8% | -2.39ms |         0.1% |   9.3ms → 6.9ms | `GetNextToken(bool, UnionArgInfo)`                                                                                                          | `Argu.CliParser+CliTokenReader`                      |
|  -17.8% | -2.37ms |         0.1% | 13.3ms → 10.9ms | `parseCommandLinePartial(CliParseState, UnionArgInfo, CliParseResultAggregator)`                                                            | `Argu.CliParser`                                     |
|  -27.6% | -1.56ms | 0.1% → <0.1% |   5.6ms → 4.1ms | ``gprintf(FSharpFunc`2<int32, !!0>, PrintfFormat`4<!!4, !!1, !!2, !!3>)``                                                                   | `Microsoft.FSharp.Core.PrintfModule`                 |
| removed | -1.35ms | <0.1% → 0.0% |     1.3ms → 0ms | `Regex2_Scan(pMT: 0x105526b78, pMT: 0x104f4f7f0<wchar>)`                                                                                    | `dynamicClass`                                       |
| removed | -1.34ms | <0.1% → 0.0% |     1.3ms → 0ms | `Parse(String)`                                                                                                                             | `System.Int32`                                       |
| removed | -1.34ms | <0.1% → 0.0% |     1.3ms → 0ms | `Invoke(String)`                                                                                                                            | `Argu.PreCompute+primitiveParsers@98-13`             |
| removed | -1.34ms | <0.1% → 0.0% |     1.3ms → 0ms | `Invoke(String)`                                                                                                                            | `Argu.PreCompute+mkPrimitiveParser@80[System.Int32]` |
| removed | -1.33ms | <0.1% → 0.0% |     1.3ms → 0ms | ``.ctor(IEnumerable`1<Tuple`2<String, !0>>)``                                                                                               | ``Argu.Utils+PrefixDictionary`1[System.__Canon]``    |
| removed | -1.32ms | <0.1% → 0.0% |     1.3ms → 0ms | `.cctor()`                                                                                                                                  | `Argu.PreCompute+Helpers+chars@236`                  |
| removed | -1.32ms | <0.1% → 0.0% |     1.3ms → 0ms | `.cctor()`                                                                                                                                  | `<StartupCode$FSharp-Core>.$Reflect`                 |

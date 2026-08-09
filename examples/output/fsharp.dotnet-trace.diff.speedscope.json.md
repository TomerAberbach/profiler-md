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

|     Change |     Delta |             % |            Time | Function                                                                                                                        | Location                                                                     |
| ---------: | --------: | ------------: | --------------: | ------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
|      +4.1% | +434.75ms | 98.7% → 98.8% | 10.67s → 11.11s | `UNMANAGED_CODE_TIME`                                                                                                           | `<unknown>`                                                                  |
|    +139.1% |   +7.72ms |          0.1% |  5.6ms → 13.3ms | `MakeGenericType(Type[])`                                                                                                       | `System.RuntimeType`                                                         |
|    +263.1% |   +3.60ms |         <0.1% |   1.4ms → 5.0ms | `getUnionTypeTagNameMap(Type, BindingFlags)`                                                                                    | `Microsoft.FSharp.Reflection.Impl`                                           |
|        new |   +2.66ms |  0.0% → <0.1% |     0ms → 2.7ms | `ReadBytes(int32)`                                                                                                              | `Microsoft.FSharp.Quotations.PatternsModule+ByteStream`                      |
|        new |   +2.59ms |  0.0% → <0.1% |     0ms → 2.6ms | `get_Item(Object)`                                                                                                              | `System.Collections.Hashtable`                                               |
|        new |   +1.39ms |  0.0% → <0.1% |     0ms → 1.4ms | ``NewValueOp(Object, Type, FSharpOption`1<String>)``                                                                            | `Microsoft.FSharp.Quotations.ExprConstInfo`                                  |
|        new |   +1.36ms |  0.0% → <0.1% |     0ms → 1.4ms | ``TryParseBinaryIntegerStyle(ReadOnlySpan`1<!!0>, NumberStyles, NumberFormatInfo, !!1&)``                                       | `System.Number`                                                              |
|     +99.5% |   +1.35ms |         <0.1% |   1.4ms → 2.7ms | `u_NamedType(InputState)`                                                                                                       | `Microsoft.FSharp.Quotations.PatternsModule`                                 |
|        new |   +1.34ms |  0.0% → <0.1% |     0ms → 1.3ms | ``ofArray(IComparer`1<!!0>, Tuple`2<!!0, !!1>[])``                                                                              | `Microsoft.FSharp.Collections.MapTreeModule`                                 |
|        new |   +1.34ms |  0.0% → <0.1% |     0ms → 1.3ms | `Invoke(InputState)`                                                                                                            | `Microsoft.FSharp.Quotations.PatternsModule+b@1962`                          |
|        new |   +1.34ms |  0.0% → <0.1% |     0ms → 1.3ms | ``unpickleObj(Assembly, Type[], FSharpFunc`2<InputState, !!0>, unsigned int8[])``                                               | `Microsoft.FSharp.Quotations.PatternsModule+SimpleUnpickle`                  |
|        new |   +1.34ms |  0.0% → <0.1% |     0ms → 1.3ms | `Invoke(InputState)`                                                                                                            | `Microsoft.FSharp.Quotations.PatternsModule+SimpleUnpickle+unpickleObj@1810` |
|        new |   +1.34ms |  0.0% → <0.1% |     0ms → 1.3ms | `u_tyconstSpec(InputState)`                                                                                                     | `Microsoft.FSharp.Quotations.PatternsModule`                                 |
|     +49.1% |   +1.32ms |         <0.1% |   2.7ms → 4.0ms | `u_dtype(InputState)`                                                                                                           | `Microsoft.FSharp.Quotations.PatternsModule`                                 |
|        new |   +1.32ms |  0.0% → <0.1% |     0ms → 1.3ms | ``Invoke(FSharpFunc`2<int32, Type>)``                                                                                           | `Microsoft.FSharp.Quotations.PatternsModule+u_dtype@1905-3`                  |
|      +2.2% |   +0.03ms |         <0.1% |           1.3ms | `ExecutionAndPublication(LazyHelper, bool)`                                                                                     | ``System.Lazy`1[System.__Canon]``                                            |
|      +0.7% |   +0.01ms |         <0.1% |   1.3ms → 1.4ms | `ToArray()`                                                                                                                     | ``System.Collections.Generic.List`1[System.__Canon]``                        |
| +109732.8% |   +0.01ms |         <0.1% |  <0.1µs → 7.0µs | `main(String[])`                                                                                                                | `Profile`                                                                    |
|     +38.6% |   +0.01µs |         <0.1% |          <0.1µs | `getTypeOfReprType(Type, BindingFlags)`                                                                                         | `Microsoft.FSharp.Reflection.Impl`                                           |
|        new |   +0.01µs |  0.0% → <0.1% |    0ms → <0.1µs | ``.ctor(FSharpOption`1<String>, FSharpOption`1<String>, FSharpOption`1<int32>, FSharpOption`1<IExiter>, FSharpOption`1<bool>)`` | ``Argu.ArgumentParser`1[System.__Canon]``                                    |

##### Native

| Change |     Delta |             % |            Time | Function              | Location    |
| -----: | --------: | ------------: | --------------: | --------------------- | ----------- |
|  +4.1% | +434.75ms | 98.7% → 98.8% | 10.67s → 11.11s | `UNMANAGED_CODE_TIME` | `<unknown>` |

#### Improvements

Functions with the largest decrease in time spent directly in the function body, excluding callees.

|  Change |   Delta |            % |            Time | Function                                                                                                                                    | Location                                                                   |
| ------: | ------: | -----------: | --------------: | ------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
|  -12.7% | -8.18ms |  0.6% → 0.5% | 64.5ms → 56.3ms | `?!?`                                                                                                                                       | `<unknown>`                                                                |
|  -67.1% | -2.71ms |        <0.1% |   4.0ms → 1.3ms | `ToUnionParseResults()`                                                                                                                     | `Argu.CliParser+CliParseResultAggregator`                                  |
|  -66.6% | -2.68ms |        <0.1% |   4.0ms → 1.3ms | `u_Expr(InputState)`                                                                                                                        | `Microsoft.FSharp.Quotations.PatternsModule`                               |
| removed | -2.61ms | <0.1% → 0.0% |     2.6ms → 0ms | `StartsWith(String, StringComparison)`                                                                                                      | `System.String`                                                            |
| -100.0% | -1.37ms |        <0.1% |   1.4ms → 0.6µs | `Invoke(BindingEnv)`                                                                                                                        | `Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`                   |
| removed | -1.36ms | <0.1% → 0.0% |     1.4ms → 0ms | ``mk(MapTree`2<!!0, !!1>, !!0, !!1, MapTree`2<!!0, !!1>)``                                                                                  | `Microsoft.FSharp.Collections.MapTreeModule`                               |
| removed | -1.35ms | <0.1% → 0.0% |     1.4ms → 0ms | `StelemRef(Array, int, Object)`                                                                                                             | `System.Runtime.CompilerServices.CastHelpers`                              |
| removed | -1.35ms | <0.1% → 0.0% |     1.3ms → 0ms | `ReadUtf8BytesAsString(int32)`                                                                                                              | `Microsoft.FSharp.Quotations.PatternsModule+ByteStream`                    |
| removed | -1.35ms | <0.1% → 0.0% |     1.3ms → 0ms | `Invoke(InputState)`                                                                                                                        | `Microsoft.FSharp.Quotations.PatternsModule+u_dtype@1905-2`                |
| removed | -1.35ms | <0.1% → 0.0% |     1.3ms → 0ms | `GetObject(String, bool, bool)`                                                                                                             | `System.Resources.RuntimeResourceSet`                                      |
| removed | -1.34ms | <0.1% → 0.0% |     1.3ms → 0ms | ``Parse(FSharpOption`1<String[]>, FSharpOption`1<IConfigurationReader>, FSharpOption`1<bool>, FSharpOption`1<bool>, FSharpOption`1<bool>)`` | ``Argu.ArgumentParser`1[System.__Canon]``                                  |
| removed | -1.34ms | <0.1% → 0.0% |     1.3ms → 0ms | `FindItemIndex(!0)`                                                                                                                         | ``System.Collections.Generic.HashSet`1[System.__Canon]``                   |
| removed | -1.34ms | <0.1% → 0.0% |     1.3ms → 0ms | `get_Item(!0)`                                                                                                                              | ``System.Reflection.CerHashtable`2[System.__Canon,System.__Canon]``        |
| removed | -1.33ms | <0.1% → 0.0% |     1.3ms → 0ms | `RunSingleMatch(RegexRunnerMode, int32, String, int32, int32, int32)`                                                                       | `System.Text.RegularExpressions.Regex`                                     |
| removed | -1.33ms | <0.1% → 0.0% |     1.3ms → 0ms | ``IntroSort(Span`1<!0>, int32, Comparison`1<!0>)``                                                                                          | ``System.Collections.Generic.ArraySortHelper`1[System.__Canon]``           |
| removed | -1.32ms | <0.1% → 0.0% |     1.3ms → 0ms | `get_CurrentCulture()`                                                                                                                      | `System.Globalization.CultureInfo`                                         |
|  -49.2% | -1.32ms |        <0.1% |   2.7ms → 1.4ms | ``u_list_aux(FSharpFunc`2<InputState, !!0>, FSharpList`1<!!0>, InputState)``                                                                | `Microsoft.FSharp.Quotations.PatternsModule+SimpleUnpickle`                |
| removed | -1.31ms | <0.1% → 0.0% |     1.3ms → 0ms | `getUnionTagConverter(Type, BindingFlags)`                                                                                                  | `Microsoft.FSharp.Reflection.Impl`                                         |
| removed | -1.28ms | <0.1% → 0.0% |     1.3ms → 0ms | ``AddMany(IEnumerable`1<!0>)``                                                                                                              | ``Microsoft.FSharp.Core.CompilerServices.ListCollector`1[System.__Canon]`` |
|  -47.9% | -1.22ms |        <0.1% |   2.5ms → 1.3ms | `Invoke(InputState)`                                                                                                                        | `Microsoft.FSharp.Quotations.PatternsModule+args@1963-1`                   |

### Total time

#### Regressions

Functions with the largest increase in total time spent in the function and all its callees.

| Change |     Delta |             % |              Time | Function                                                                                                                                                                           | Location                                                         |
| -----: | --------: | ------------: | ----------------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
|  +4.1% | +434.75ms | 98.7% → 98.8% |   10.67s → 11.11s | `UNMANAGED_CODE_TIME`                                                                                                                                                              | `<unknown>`                                                      |
|  +4.0% | +432.69ms | 99.8% → 99.9% |   10.79s → 11.22s | `main(String[])`                                                                                                                                                                   | `Profile`                                                        |
|  +3.9% | +400.84ms |         95.1% |   10.28s → 10.68s | `Invoke(BindingEnv)`                                                                                                                                                               | `Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`         |
|  +5.9% | +263.31ms | 41.4% → 42.2% |     4.47s → 4.73s | `MakeGenericType(Type[])`                                                                                                                                                          | `System.RuntimeType`                                             |
|  +2.9% | +187.10ms | 60.6% → 60.0% |     6.55s → 6.74s | `?!?`                                                                                                                                                                              | `<unknown>`                                                      |
|  +5.3% | +185.63ms | 32.6% → 33.0% |     3.52s → 3.71s | ``mapToFreshConsTail(FSharpList`1<!!0>, FSharpFunc`2<!!1, !!0>, FSharpList`1<!!1>)``                                                                                               | `Microsoft.FSharp.Primitives.Basics.List`                        |
|  +2.6% | +161.45ms | 56.8% → 56.1% |     6.14s → 6.30s | `GetCustomAttributes(RuntimeType, RuntimeType, bool)`                                                                                                                              | `System.Reflection.CustomAttribute`                              |
|  +2.6% | +161.44ms | 56.8% → 56.0% |     6.13s → 6.30s | ``FilterCustomAttributeRecord(MetadataToken, MetadataImport&, RuntimeModule, MetadataToken, RuntimeType, bool, ListBuilder`1<Object>&, RuntimeType&, IRuntimeMethodInfo&, bool&)`` | `System.Reflection.CustomAttribute`                              |
|  +2.6% | +160.10ms | 56.8% → 56.1% |     6.14s → 6.30s | ``AddCustomAttributes(ListBuilder`1<Object>&, RuntimeModule, int32, RuntimeType, bool, ListBuilder`1<Object>)``                                                                    | `System.Reflection.CustomAttribute`                              |
|  +2.6% | +160.06ms | 56.8% → 56.1% |     6.14s → 6.30s | `GetCustomAttributes(RuntimeModule, int32, int32, RuntimeType)`                                                                                                                    | `System.Reflection.CustomAttribute`                              |
|  +2.6% | +158.79ms | 56.8% → 56.1% |     6.14s → 6.30s | ``GetUnionCases(Type, FSharpOption`1<BindingFlags>)``                                                                                                                              | `Microsoft.FSharp.Reflection.FSharpType`                         |
|  +2.6% | +158.32ms | 56.9% → 56.1% |     6.15s → 6.30s | `getUnionCaseInfo(Type, String)`                                                                                                                                                   | `Microsoft.FSharp.Quotations.PatternsModule`                     |
|  +2.6% | +158.32ms | 56.9% → 56.1% |     6.15s → 6.30s | ``Invoke(FSharpList`1<Type>, FSharpValueOption`1<int32>)``                                                                                                                         | `Microsoft.FSharp.Quotations.PatternsModule+u_constSpec@2137-10` |
|  +2.2% | +127.52ms | 53.6% → 52.7% |     5.79s → 5.92s | `ResolveTypeHandle(int32, RuntimeTypeHandle[], RuntimeTypeHandle[])`                                                                                                               | `System.ModuleHandle`                                            |
|  +2.6% | +125.49ms | 44.0% → 43.4% |     4.75s → 4.87s | `getTypeOfReprType(Type, BindingFlags)`                                                                                                                                            | `Microsoft.FSharp.Reflection.Impl`                               |
|  +1.5% |  +82.72ms | 52.1% → 50.8% |     5.62s → 5.71s | `ResolveType(int32, Type[], Type[])`                                                                                                                                               | `System.Reflection.RuntimeModule`                                |
|  +9.2% |  +71.07ms |   7.1% → 7.5% | 770.4ms → 841.5ms | `get@472-1(BindingFlags, Type)`                                                                                                                                                    | `Microsoft.FSharp.Reflection.Impl`                               |
| +18.4% |  +69.95ms |   3.5% → 4.0% | 380.6ms → 450.6ms | ``Invoke(FSharpFunc`2<int32, Type>)``                                                                                                                                              | `Microsoft.FSharp.Quotations.PatternsModule+u_dtype@1905-3`      |
|  +1.4% |  +54.34ms | 36.8% → 35.9% |     3.98s → 4.03s | `isExceptionRepr(Type, BindingFlags)`                                                                                                                                              | `Microsoft.FSharp.Reflection.Impl`                               |
|  +6.9% |  +46.61ms |   6.2% → 6.4% | 675.6ms → 722.2ms | `checkUnionType(Type, BindingFlags)`                                                                                                                                               | `Microsoft.FSharp.Reflection.Impl`                               |

##### Native

| Change |     Delta |             % |            Time | Function              | Location    |
| -----: | --------: | ------------: | --------------: | --------------------- | ----------- |
|  +4.1% | +434.75ms | 98.7% → 98.8% | 10.67s → 11.11s | `UNMANAGED_CODE_TIME` | `<unknown>` |

#### Improvements

Functions with the largest decrease in total time spent in the function and all its callees.

|  Change |    Delta |            % |              Time | Function                                                                                                                                    | Location                                              |
| ------: | -------: | -----------: | ----------------: | ------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
|   -9.0% | -15.01ms |  1.5% → 1.4% | 167.5ms → 152.5ms | ``map(FSharpFunc`2<!!0, !!1>, FSharpList`1<!!0>)``                                                                                          | `Microsoft.FSharp.Primitives.Basics.List`             |
|   -8.4% | -12.12ms |  1.3% → 1.2% | 144.5ms → 132.4ms | `GetInstantiationInternal()`                                                                                                                | `System.RuntimeTypeHandle`                            |
|   -8.4% | -12.12ms |  1.3% → 1.2% | 144.5ms → 132.4ms | `GetGenericArgumentsInternal()`                                                                                                             | `System.RuntimeType`                                  |
|   -1.5% | -10.62ms |  6.6% → 6.2% | 712.6ms → 702.0ms | `get@481-2(BindingFlags, Type)`                                                                                                             | `Microsoft.FSharp.Reflection.Impl`                    |
|   -5.8% |  -8.18ms |  1.3% → 1.2% | 140.4ms → 132.3ms | ``appL(FSharpList`1<FSharpFunc`2<!!0, !!1>>, !!0)``                                                                                         | `Microsoft.FSharp.Quotations.PatternsModule`          |
|   -5.8% |  -8.18ms |  1.3% → 1.2% | 140.4ms → 132.3ms | ``Invoke(FSharpFunc`2<int32, Type>)``                                                                                                       | `Microsoft.FSharp.Quotations.PatternsModule+b@1962-1` |
|  -74.9% |  -7.91ms | 0.1% → <0.1% |    10.6ms → 2.7ms | `CreateManifestString()`                                                                                                                    | `System.Diagnostics.Tracing.ManifestBuilder`          |
|  -74.9% |  -7.91ms | 0.1% → <0.1% |    10.6ms → 2.7ms | `CreateManifest()`                                                                                                                          | `System.Diagnostics.Tracing.ManifestBuilder`          |
| removed |  -7.87ms |  0.1% → 0.0% |       7.9ms → 0ms | `CreateCultureWithInvariantData()`                                                                                                          | `System.Globalization.CultureData`                    |
| removed |  -7.87ms |  0.1% → 0.0% |       7.9ms → 0ms | `get_Invariant()`                                                                                                                           | `System.Globalization.CultureData`                    |
| removed |  -7.87ms |  0.1% → 0.0% |       7.9ms → 0ms | `.cctor()`                                                                                                                                  | `System.Globalization.CultureInfo`                    |
| removed |  -7.87ms |  0.1% → 0.0% |       7.9ms → 0ms | `get_CurrentUICulture()`                                                                                                                    | `System.Globalization.CultureInfo`                    |
|  -41.6% |  -6.63ms |         0.1% |    15.9ms → 9.3ms | `CreateManifestAndDescriptors(Type, String, EventSource, EventManifestOptions)`                                                             | `System.Diagnostics.Tracing.EventSource`              |
|  -35.8% |  -5.32ms |         0.1% |    14.8ms → 9.5ms | `Cast(FSharpExpr)`                                                                                                                          | `Microsoft.FSharp.Quotations.FSharpExpr`              |
|  -55.1% |  -5.12ms | 0.1% → <0.1% |     9.3ms → 4.2ms | `parseNextField@321(CliParseState, UnionArgInfo, FieldParserInfo)`                                                                          | `Argu.CliParser`                                      |
|   -7.8% |  -4.34ms |         0.5% |   55.8ms → 51.4ms | ``Parse(FSharpOption`1<String[]>, FSharpOption`1<IConfigurationReader>, FSharpOption`1<bool>, FSharpOption`1<bool>, FSharpOption`1<bool>)`` | ``Argu.ArgumentParser`1[System.__Canon]``             |
| removed |  -3.98ms | <0.1% → 0.0% |       4.0ms → 0ms | `u_VarDecl(InputState)`                                                                                                                     | `Microsoft.FSharp.Quotations.PatternsModule`          |
|  -59.7% |  -3.98ms | 0.1% → <0.1% |     6.7ms → 2.7ms | `ToUnionParseResults()`                                                                                                                     | `Argu.CliParser+CliParseResultAggregator`             |
|  -22.9% |  -3.97ms |  0.2% → 0.1% |   17.3ms → 13.4ms | `EnsureDescriptorsInitialized()`                                                                                                            | `System.Diagnostics.Tracing.EventSource`              |
|  -40.5% |  -3.76ms | 0.1% → <0.1% |     9.3ms → 5.5ms | `parseSingleParameter@336-2(CliParseState, UnionArgInfo, CliParseResultAggregator, String, UnionCaseArgInfo, FieldParserInfo[])`            | `Argu.CliParser`                                      |

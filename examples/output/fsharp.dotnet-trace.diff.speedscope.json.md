# Sampling profile diff

Took 11.17s → 11.01s (-156.28ms, -1.4%).

| Category         |  Change |     Delta |           % |            Time |
| ---------------- | ------: | --------: | ----------: | --------------: |
| Native           |   -1.4% | -151.19ms |       99.1% | 11.06s → 10.91s |
| Standard library |  +12.8% |   +6.89ms | 0.5% → 0.6% | 53.8ms → 60.6ms |
| Unknown          |  -22.5% |  -10.64ms | 0.4% → 0.3% | 47.4ms → 36.8ms |
| Ours             | -100.0% |   -1.33ms |       <0.1% |  1.3ms → <0.1µs |

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time spent directly in the function body, excluding callees.

|        Change |    Delta |            % |           Time | Function                                                                             | Location                                                                                                      |
| ------------: | -------: | -----------: | -------------: | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------- |
|       +112.7% |  +9.20ms |  0.1% → 0.2% | 8.2ms → 17.4ms | `GetInstantiationInternal()`                                                         | `System.RuntimeTypeHandle`                                                                                    |
|       +202.9% |  +2.73ms |        <0.1% |  1.3ms → 4.1ms | `u_Expr(InputState)`                                                                 | `Microsoft.FSharp.Quotations.PatternsModule`                                                                  |
|           new |  +2.72ms | 0.0% → <0.1% |    0ms → 2.7ms | `u_NamedType(InputState)`                                                            | `Microsoft.FSharp.Quotations.PatternsModule`                                                                  |
|           new |  +2.69ms | 0.0% → <0.1% |    0ms → 2.7ms | `u_tyconstSpec(InputState)`                                                          | `Microsoft.FSharp.Quotations.PatternsModule`                                                                  |
|           new |  +1.43ms | 0.0% → <0.1% |    0ms → 1.4ms | ``unpickleObj(Assembly, Type[], FSharpFunc`2<InputState, !!0>, unsigned int8[])``    | `Microsoft.FSharp.Quotations.PatternsModule+SimpleUnpickle`                                                   |
|           new |  +1.37ms | 0.0% → <0.1% |    0ms → 1.4ms | `u_int32(InputState)`                                                                | `Microsoft.FSharp.Quotations.PatternsModule+SimpleUnpickle`                                                   |
|           new |  +1.37ms | 0.0% → <0.1% |    0ms → 1.4ms | `u_uniq(!!0[], InputState)`                                                          | `Microsoft.FSharp.Quotations.PatternsModule+SimpleUnpickle`                                                   |
|           new |  +1.37ms | 0.0% → <0.1% |    0ms → 1.4ms | ``mapToFreshConsTail(FSharpList`1<!!0>, FSharpFunc`2<!!1, !!0>, FSharpList`1<!!1>)`` | `Microsoft.FSharp.Primitives.Basics.List`                                                                     |
|           new |  +1.35ms | 0.0% → <0.1% |    0ms → 1.4ms | `NewUnique(!0)`                                                                      | ``Microsoft.FSharp.Quotations.PatternsModule+ModuleDefinitionBindingResult`2[System.__Canon,System.__Canon]`` |
|           new |  +1.35ms | 0.0% → <0.1% |    0ms → 1.4ms | `get_CurrentCulture()`                                                               | `System.Globalization.CultureInfo`                                                                            |
|           new |  +1.35ms | 0.0% → <0.1% |    0ms → 1.3ms | ``Invoke(FSharpFunc`2<int32, Type>)``                                                | `Microsoft.FSharp.Quotations.PatternsModule+u_dtype@1905-3`                                                   |
|           new |  +1.34ms | 0.0% → <0.1% |    0ms → 1.3ms | ``InsertionSort(Span`1<!0>, Comparison`1<!0>)``                                      | ``System.Collections.Generic.ArraySortHelper`1[System.__Canon]``                                              |
|           new |  +1.34ms | 0.0% → <0.1% |    0ms → 1.3ms | `Invoke(InputState)`                                                                 | `Microsoft.FSharp.Quotations.PatternsModule+attrs@1993`                                                       |
|           new |  +1.34ms | 0.0% → <0.1% |    0ms → 1.3ms | `Invoke(InputState)`                                                                 | `Microsoft.FSharp.Quotations.PatternsModule+SimpleUnpickle+unpickleObj@1810`                                  |
|           new |  +1.34ms | 0.0% → <0.1% |    0ms → 1.3ms | `Invoke(InputState)`                                                                 | `Microsoft.FSharp.Quotations.PatternsModule+b@1962`                                                           |
| +643056892.9% |  +1.33ms |        <0.1% | <0.1µs → 1.3ms | `CreateManifestAndDescriptors(Type, String, EventSource, EventManifestOptions)`      | `System.Diagnostics.Tracing.EventSource`                                                                      |
|           new |  +1.32ms | 0.0% → <0.1% |    0ms → 1.3ms | ``tryGetValue(IComparer`1<!!0>, !!0, !!1&, MapTree`2<!!0, !!1>)``                    | `Microsoft.FSharp.Collections.MapTreeModule`                                                                  |
|         +1.7% |  +0.02ms |        <0.1% |          1.3ms | `Invoke(InputState)`                                                                 | `Microsoft.FSharp.Quotations.PatternsModule+u_dtype@1905-2`                                                   |
|           new |  +0.01µs | 0.0% → <0.1% |   0ms → <0.1µs | `Invoke(Unit)`                                                                       | `<StartupCode$Argu>.$ArgumentParser+-cctor@87-1[System.__Canon]`                                              |
|        +56.0% | +<0.01µs |        <0.1% |         <0.1µs | `deserialize(Type, Type[], Type[], FSharpExpr[], unsigned int8[])`                   | `Microsoft.FSharp.Quotations.PatternsModule`                                                                  |

#### Improvements

Functions with the largest decrease in time spent directly in the function body, excluding callees.

|  Change |     Delta |            % |            Time | Function                                                                                  | Location                                                    |
| ------: | --------: | -----------: | --------------: | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
|   -1.4% | -151.19ms |        99.1% | 11.06s → 10.91s | `UNMANAGED_CODE_TIME`                                                                     | `<unknown>`                                                 |
|  -22.5% |  -10.64ms |  0.4% → 0.3% | 47.4ms → 36.8ms | `?!?`                                                                                     | `<unknown>`                                                 |
| removed |   -4.11ms | <0.1% → 0.0% |     4.1ms → 0ms | `GetValue(bool)`                                                                          | `System.Reflection.MdFieldInfo`                             |
| removed |   -4.07ms | <0.1% → 0.0% |     4.1ms → 0ms | `u_dtype(InputState)`                                                                     | `Microsoft.FSharp.Quotations.PatternsModule`                |
| -100.0% |   -2.69ms |        <0.1% |  2.7ms → <0.1µs | ``u_list_aux(FSharpFunc`2<InputState, !!0>, FSharpList`1<!!0>, InputState)``              | `Microsoft.FSharp.Quotations.PatternsModule+SimpleUnpickle` |
| removed |   -2.69ms | <0.1% → 0.0% |     2.7ms → 0ms | ``TryParseBinaryIntegerStyle(ReadOnlySpan`1<!!0>, NumberStyles, NumberFormatInfo, !!1&)`` | `System.Number`                                             |
| removed |   -2.54ms | <0.1% → 0.0% |     2.5ms → 0ms | `Invoke(InputState)`                                                                      | `Microsoft.FSharp.Quotations.PatternsModule+u_dtype@1905-1` |
| removed |   -1.37ms | <0.1% → 0.0% |     1.4ms → 0ms | ``add(IComparer`1<!!0>, !!0, !!1, MapTree`2<!!0, !!1>)``                                  | `Microsoft.FSharp.Collections.MapTreeModule`                |
| removed |   -1.37ms | <0.1% → 0.0% |     1.4ms → 0ms | ``ofArray(IComparer`1<!!0>, Tuple`2<!!0, !!1>[])``                                        | `Microsoft.FSharp.Collections.MapTreeModule`                |
| removed |   -1.37ms | <0.1% → 0.0% |     1.4ms → 0ms | ``ofSeq(IComparer`1<!!0>, IEnumerable`1<Tuple`2<!!0, !!1>>)``                             | `Microsoft.FSharp.Collections.MapTreeModule`                |
| removed |   -1.36ms | <0.1% → 0.0% |     1.4ms → 0ms | ``filter(FSharpFunc`2<!!0, bool>, !!0[])``                                                | `Microsoft.FSharp.Collections.ArrayModule+Filter`           |
| removed |   -1.36ms | <0.1% → 0.0% |     1.4ms → 0ms | ``InitializeForScan(Regex, ReadOnlySpan`1<wchar>, int32, RegexRunnerMode)``               | `System.Text.RegularExpressions.RegexRunner`                |
| removed |   -1.35ms | <0.1% → 0.0% |     1.3ms → 0ms | `GetCustomAttributes(RuntimeType, RuntimeType, bool)`                                     | `System.Reflection.CustomAttribute`                         |
| removed |   -1.35ms | <0.1% → 0.0% |     1.3ms → 0ms | `ExecutionAndPublication(LazyHelper, bool)`                                               | ``System.Lazy`1[System.__Canon]``                           |
| removed |   -1.34ms | <0.1% → 0.0% |     1.3ms → 0ms | `GetCustomAttributeRecords(RuntimeModule, int32)`                                         | `System.Reflection.RuntimeCustomAttributeData`              |
| removed |   -1.33ms | <0.1% → 0.0% |     1.3ms → 0ms | `ToUnionParseResults()`                                                                   | `Argu.CliParser+CliParseResultAggregator`                   |
|   -6.9% |   -1.10ms |         0.1% | 16.0ms → 14.9ms | `MakeGenericType(Type[])`                                                                 | `System.RuntimeType`                                        |
|  -12.1% |   -0.07µs |        <0.1% |   0.6µs → 0.5µs | `Invoke(BindingEnv)`                                                                      | `Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`    |
|  -63.7% |   -0.02µs |        <0.1% |          <0.1µs | `Invoke(BindingEnv)`                                                                      | `Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1994-5`  |
|  -97.7% |  -<0.01µs |        <0.1% |          <0.1µs | `postProcess@648(UnionArgInfo)`                                                           | `Argu.PreCompute`                                           |

##### Native

| Change |     Delta |     % |            Time | Function              | Location    |
| -----: | --------: | ----: | --------------: | --------------------- | ----------- |
|  -1.4% | -151.19ms | 99.1% | 11.06s → 10.91s | `UNMANAGED_CODE_TIME` | `<unknown>` |

### Total time

#### Regressions

Functions with the largest increase in total time spent in the function and all its callees.

|  Change |    Delta |             % |              Time | Function                                                                                        | Location                                                          |
| ------: | -------: | ------------: | ----------------: | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
|   +1.9% | +74.56ms | 34.9% → 36.1% |     3.90s → 3.97s | `isExceptionRepr(Type, BindingFlags)`                                                           | `Microsoft.FSharp.Reflection.Impl`                                |
|   +9.4% | +35.40ms |   3.4% → 3.7% | 376.8ms → 412.2ms | `Deserialize40(Type, Type[], Type[], FSharpExpr[], unsigned int8[])`                            | `Microsoft.FSharp.Quotations.FSharpExpr`                          |
|  +14.1% | +26.91ms |   1.7% → 2.0% | 191.4ms → 218.3ms | `tryFindSourceConstructFlagsOfType(Type)`                                                       | `Microsoft.FSharp.Reflection.Impl`                                |
|   +5.7% | +25.32ms |   4.0% → 4.3% | 445.3ms → 470.6ms | `deserialize(Type, Type[], Type[], FSharpExpr[], unsigned int8[])`                              | `Microsoft.FSharp.Quotations.PatternsModule`                      |
|   +3.2% | +21.68ms |   6.0% → 6.3% | 673.1ms → 694.8ms | `get@481-2(BindingFlags, Type)`                                                                 | `Microsoft.FSharp.Reflection.Impl`                                |
|   +8.7% | +20.68ms |   2.1% → 2.3% | 238.0ms → 258.7ms | ``ResolveMethodHandleInternal(RuntimeModule, int32, ReadOnlySpan`1<int>, ReadOnlySpan`1<int>)`` | `System.ModuleHandle`                                             |
|   +8.7% | +20.68ms |   2.1% → 2.3% | 238.0ms → 258.7ms | `ResolveMethodHandle(int32, RuntimeTypeHandle[], RuntimeTypeHandle[])`                          | `System.ModuleHandle`                                             |
|  +11.5% | +19.95ms |   1.6% → 1.8% | 173.7ms → 193.7ms | `tryFindCompilationMappingAttributeFromType(Type)`                                              | `Microsoft.FSharp.Reflection.Impl`                                |
|   +8.1% | +19.23ms |   2.1% → 2.3% | 238.5ms → 257.7ms | `Invoke(BindingEnv)`                                                                            | `Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1983-2`        |
|   +0.4% | +19.06ms | 42.5% → 43.3% |     4.74s → 4.76s | `getTypeOfReprType(Type, BindingFlags)`                                                         | `Microsoft.FSharp.Reflection.Impl`                                |
|   +8.5% | +17.30ms |   1.8% → 2.0% | 203.6ms → 220.9ms | ``Invoke(FSharpList`1<Type>)``                                                                  | `Microsoft.FSharp.Quotations.PatternsModule+u_UnionCaseInfo@2017` |
|   +4.0% | +16.97ms |   3.8% → 4.0% | 428.0ms → 444.9ms | `Invoke(BindingEnv)`                                                                            | `Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1994-5`        |
|  +11.8% | +16.31ms |   1.2% → 1.4% | 138.2ms → 154.5ms | `GetInstantiationInternal()`                                                                    | `System.RuntimeTypeHandle`                                        |
|  +11.8% | +16.31ms |   1.2% → 1.4% | 138.2ms → 154.5ms | `GetGenericArgumentsInternal()`                                                                 | `System.RuntimeType`                                              |
|   +5.4% |  +8.39ms |   1.4% → 1.5% | 155.9ms → 164.3ms | ``map(FSharpFunc`2<!!0, !!1>, FSharpList`1<!!0>)``                                              | `Microsoft.FSharp.Primitives.Basics.List`                         |
|   +5.8% |  +7.85ms |   1.2% → 1.3% | 134.2ms → 142.0ms | ``Invoke(FSharpFunc`2<int32, Type>)``                                                           | `Microsoft.FSharp.Quotations.PatternsModule+b@1962-1`             |
|  +40.5% |  +7.02ms |          0.2% |   17.4ms → 24.4ms | `unpickleExpr(Type, Type[], unsigned int8[])`                                                   | `Microsoft.FSharp.Quotations.PatternsModule`                      |
| +252.9% |  +6.81ms |  <0.1% → 0.1% |     2.7ms → 9.5ms | `u_tyconstSpec(InputState)`                                                                     | `Microsoft.FSharp.Quotations.PatternsModule`                      |
|     new |  +6.59ms |   0.0% → 0.1% |       0ms → 6.6ms | `OnStart(String, String, int32, Guid&, Guid&, EventActivityOptions, bool)`                      | `System.Diagnostics.Tracing.ActivityTracker`                      |
|   +4.9% |  +6.52ms |   1.2% → 1.3% | 134.2ms → 140.7ms | ``appL(FSharpList`1<FSharpFunc`2<!!0, !!1>>, !!0)``                                             | `Microsoft.FSharp.Quotations.PatternsModule`                      |

#### Improvements

Functions with the largest decrease in total time spent in the function and all its callees.

| Change |     Delta |             % |              Time | Function                                                                                                                                    | Location                                                         |
| -----: | --------: | ------------: | ----------------: | ------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
|  -1.4% | -153.70ms |         99.8% |   11.14s → 10.99s | `main(String[])`                                                                                                                            | `Profile`                                                        |
|  -1.4% | -151.19ms |         99.1% |   11.06s → 10.91s | `UNMANAGED_CODE_TIME`                                                                                                                       | `<unknown>`                                                      |
|  -2.8% | -135.61ms | 43.1% → 42.5% |     4.81s → 4.68s | `MakeGenericType(Type[])`                                                                                                                   | `System.RuntimeType`                                             |
|  -1.0% | -104.05ms | 94.7% → 95.1% |   10.57s → 10.47s | `Invoke(BindingEnv)`                                                                                                                        | `Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`         |
|  -0.9% |  -59.19ms | 59.1% → 59.4% |     6.60s → 6.54s | `?!?`                                                                                                                                       | `<unknown>`                                                      |
|  -6.5% |  -55.48ms |   7.6% → 7.2% | 847.5ms → 792.0ms | `get@472-1(BindingFlags, Type)`                                                                                                             | `Microsoft.FSharp.Reflection.Impl`                               |
|  -5.5% |  -39.65ms |   6.5% → 6.2% | 724.5ms → 684.9ms | `checkUnionType(Type, BindingFlags)`                                                                                                        | `Microsoft.FSharp.Reflection.Impl`                               |
|  -5.2% |  -39.61ms |   6.8% → 6.5% | 755.6ms → 716.0ms | `isUnionType(Type, BindingFlags)`                                                                                                           | `Microsoft.FSharp.Reflection.Impl`                               |
|  -8.7% |  -38.82ms |   4.0% → 3.7% | 446.4ms → 407.6ms | ``Invoke(FSharpFunc`2<int32, Type>)``                                                                                                       | `Microsoft.FSharp.Quotations.PatternsModule+u_dtype@1905-3`      |
|  -0.6% |  -31.40ms | 50.2% → 50.7% |     5.61s → 5.58s | `ResolveType(int32, Type[], Type[])`                                                                                                        | `System.Reflection.RuntimeModule`                                |
|  -0.8% |  -29.22ms | 33.5% → 33.7% |     3.74s → 3.71s | ``mapToFreshConsTail(FSharpList`1<!!0>, FSharpFunc`2<!!1, !!0>, FSharpList`1<!!1>)``                                                        | `Microsoft.FSharp.Primitives.Basics.List`                        |
|  -0.3% |  -18.73ms | 51.9% → 52.5% |     5.79s → 5.77s | `ResolveTypeHandle(int32, RuntimeTypeHandle[], RuntimeTypeHandle[])`                                                                        | `System.ModuleHandle`                                            |
| -18.1% |  -14.25ms |   0.7% → 0.6% |   78.9ms → 64.6ms | `ExecutionAndPublication(LazyHelper, bool)`                                                                                                 | ``System.Lazy`1[System.__Canon]``                                |
| -18.1% |  -14.25ms |   0.7% → 0.6% |   78.9ms → 64.6ms | `CreateValue()`                                                                                                                             | ``System.Lazy`1[System.__Canon]``                                |
| -16.6% |  -12.90ms |   0.7% → 0.6% |   77.5ms → 64.6ms | `ViaFactory(LazyThreadSafetyMode)`                                                                                                          | ``System.Lazy`1[System.__Canon]``                                |
|  -0.2% |  -11.15ms | 55.1% → 55.8% |     6.16s → 6.14s | `getUnionCaseInfo(Type, String)`                                                                                                            | `Microsoft.FSharp.Quotations.PatternsModule`                     |
|  -0.2% |  -11.15ms | 55.1% → 55.8% |     6.16s → 6.14s | ``Invoke(FSharpList`1<Type>, FSharpValueOption`1<int32>)``                                                                                  | `Microsoft.FSharp.Quotations.PatternsModule+u_constSpec@2137-10` |
| -80.5% |  -10.97ms |  0.1% → <0.1% |    13.6ms → 2.7ms | `getUnionTagConverter(Type, BindingFlags)`                                                                                                  | `Microsoft.FSharp.Reflection.Impl`                               |
| -89.1% |  -10.93ms |  0.1% → <0.1% |    12.3ms → 1.3ms | `get_Name()`                                                                                                                                | `Microsoft.FSharp.Reflection.UnionCaseInfo`                      |
| -18.5% |  -10.65ms |   0.5% → 0.4% |   57.5ms → 46.9ms | ``Parse(FSharpOption`1<String[]>, FSharpOption`1<IConfigurationReader>, FSharpOption`1<bool>, FSharpOption`1<bool>, FSharpOption`1<bool>)`` | ``Argu.ArgumentParser`1[System.__Canon]``                        |

##### Native

| Change |     Delta |     % |            Time | Function              | Location    |
| -----: | --------: | ----: | --------------: | --------------------- | ----------- |
|  -1.4% | -151.19ms | 99.1% | 11.06s → 10.91s | `UNMANAGED_CODE_TIME` | `<unknown>` |

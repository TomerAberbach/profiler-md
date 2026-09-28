# Sampling profile

Took 11.17s.

| Category         |     % |   Time |
| ---------------- | ----: | -----: |
| Native           | 99.1% | 11.06s |
| Standard library |  0.5% | 53.8ms |
| Unknown          |  0.4% | 47.4ms |
| Ours             | <0.1% |  1.3ms |

## Hottest functions

### Self time

Functions ranked by time spent directly in the function body, excluding callees.

|     % |   Time | Function                                                                                  | Location                                                    |
| ----: | -----: | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| 99.1% | 11.06s | `UNMANAGED_CODE_TIME`                                                                     | `<unknown>`                                                 |
|  0.4% | 47.4ms | `?!?`                                                                                     | `<unknown>`                                                 |
|  0.1% | 16.0ms | `MakeGenericType(Type[])`                                                                 | `System.RuntimeType`                                        |
|  0.1% |  8.2ms | `GetInstantiationInternal()`                                                              | `System.RuntimeTypeHandle`                                  |
| <0.1% |  4.1ms | `GetValue(bool)`                                                                          | `System.Reflection.MdFieldInfo`                             |
| <0.1% |  4.1ms | `u_dtype(InputState)`                                                                     | `Microsoft.FSharp.Quotations.PatternsModule`                |
| <0.1% |  2.7ms | ``u_list_aux(FSharpFunc`2<InputState, !!0>, FSharpList`1<!!0>, InputState)``              | `Microsoft.FSharp.Quotations.PatternsModule+SimpleUnpickle` |
| <0.1% |  2.7ms | ``TryParseBinaryIntegerStyle(ReadOnlySpan`1<!!0>, NumberStyles, NumberFormatInfo, !!1&)`` | `System.Number`                                             |
| <0.1% |  2.5ms | `Invoke(InputState)`                                                                      | `Microsoft.FSharp.Quotations.PatternsModule+u_dtype@1905-1` |
| <0.1% |  1.4ms | ``add(IComparer`1<!!0>, !!0, !!1, MapTree`2<!!0, !!1>)``                                  | `Microsoft.FSharp.Collections.MapTreeModule`                |
| <0.1% |  1.4ms | ``ofArray(IComparer`1<!!0>, Tuple`2<!!0, !!1>[])``                                        | `Microsoft.FSharp.Collections.MapTreeModule`                |
| <0.1% |  1.4ms | ``ofSeq(IComparer`1<!!0>, IEnumerable`1<Tuple`2<!!0, !!1>>)``                             | `Microsoft.FSharp.Collections.MapTreeModule`                |
| <0.1% |  1.4ms | ``filter(FSharpFunc`2<!!0, bool>, !!0[])``                                                | `Microsoft.FSharp.Collections.ArrayModule+Filter`           |
| <0.1% |  1.4ms | ``InitializeForScan(Regex, ReadOnlySpan`1<wchar>, int32, RegexRunnerMode)``               | `System.Text.RegularExpressions.RegexRunner`                |
| <0.1% |  1.3ms | `GetCustomAttributes(RuntimeType, RuntimeType, bool)`                                     | `System.Reflection.CustomAttribute`                         |
| <0.1% |  1.3ms | `ExecutionAndPublication(LazyHelper, bool)`                                               | ``System.Lazy`1[System.__Canon]``                           |
| <0.1% |  1.3ms | `u_Expr(InputState)`                                                                      | `Microsoft.FSharp.Quotations.PatternsModule`                |
| <0.1% |  1.3ms | `GetCustomAttributeRecords(RuntimeModule, int32)`                                         | `System.Reflection.RuntimeCustomAttributeData`              |
| <0.1% |  1.3ms | `ToUnionParseResults()`                                                                   | `Argu.CliParser+CliParseResultAggregator`                   |
| <0.1% |  1.3ms | `Invoke(InputState)`                                                                      | `Microsoft.FSharp.Quotations.PatternsModule+u_dtype@1905-2` |

#### Categories

##### Native

|     % |   Time | Function              | Location    |
| ----: | -----: | --------------------- | ----------- |
| 99.1% | 11.06s | `UNMANAGED_CODE_TIME` | `<unknown>` |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `UNMANAGED_CODE_TIME` (`<unknown>`)

|     % |    Time | Caller                                                                                                                                                                             | Location                            |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| 59.2% |   6.55s | `?!?`                                                                                                                                                                              | `<unknown>`                         |
| 36.8% |   4.07s | `MakeGenericType(Type[])`                                                                                                                                                          | `System.RuntimeType`                |
|  1.2% | 130.1ms | `GetInstantiationInternal()`                                                                                                                                                       | `System.RuntimeTypeHandle`          |
|  1.0% | 106.7ms | ``FilterCustomAttributeRecord(MetadataToken, MetadataImport&, RuntimeModule, MetadataToken, RuntimeType, bool, ListBuilder`1<Object>&, RuntimeType&, IRuntimeMethodInfo&, bool&)`` | `System.Reflection.CustomAttribute` |
|  0.1% |  16.4ms | `Instantiate(Type[])`                                                                                                                                                              | `System.RuntimeTypeHandle`          |

##### `?!?` (`<unknown>`)

|      % |   Time | Caller                                                               | Location              |
| -----: | -----: | -------------------------------------------------------------------- | --------------------- |
| 100.0% | 47.4ms | `ResolveTypeHandle(int32, RuntimeTypeHandle[], RuntimeTypeHandle[])` | `System.ModuleHandle` |

##### `MakeGenericType(Type[])` (`System.RuntimeType`)

|     % |   Time | Caller                                             | Location                                                    |
| ----: | -----: | -------------------------------------------------- | ----------------------------------------------------------- |
| 91.6% | 14.6ms | `Invoke(BindingEnv)`                               | `Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`    |
|  8.4% |  1.3ms | ``Invoke(FSharpFunc`2<int32, Type>)``              | `Microsoft.FSharp.Quotations.PatternsModule+u_dtype@1905-3` |
| <0.1% | <0.1µs | `main(String[])`                                   | `Profile`                                                   |
| <0.1% | <0.1µs | ``map(FSharpFunc`2<!!0, !!1>, FSharpList`1<!!0>)`` | `Microsoft.FSharp.Primitives.Basics.List`                   |

##### `GetInstantiationInternal()` (`System.RuntimeTypeHandle`)

|      % |  Time | Caller                          | Location             |
| -----: | ----: | ------------------------------- | -------------------- |
| 100.0% | 8.2ms | `GetGenericArgumentsInternal()` | `System.RuntimeType` |

##### `GetValue(bool)` (`System.Reflection.MdFieldInfo`)

|      % |  Time | Caller                         | Location                                                        |
| -----: | ----: | ------------------------------ | --------------------------------------------------------------- |
| 100.0% | 4.1ms | `Invoke(FieldInfo, FieldInfo)` | `Microsoft.FSharp.Reflection.Impl+getUnionTypeTagNameMap@405-1` |

##### `u_dtype(InputState)` (`Microsoft.FSharp.Quotations.PatternsModule`)

|      % |  Time | Caller               | Location                                            |
| -----: | ----: | -------------------- | --------------------------------------------------- |
| 100.0% | 4.1ms | `Invoke(InputState)` | `Microsoft.FSharp.Quotations.PatternsModule+b@1962` |

##### ``u_list_aux(FSharpFunc`2<InputState, !!0>, FSharpList`1<!!0>, InputState)`` (`Microsoft.FSharp.Quotations.PatternsModule+SimpleUnpickle`)

|      % |  Time | Caller               | Location                                     |
| -----: | ----: | -------------------- | -------------------------------------------- |
| 100.0% | 2.7ms | `u_Expr(InputState)` | `Microsoft.FSharp.Quotations.PatternsModule` |

##### ``TryParseBinaryIntegerStyle(ReadOnlySpan`1<!!0>, NumberStyles, NumberFormatInfo, !!1&)`` (`System.Number`)

|     % |  Time | Caller                      | Location                                     |
| ----: | ----: | --------------------------- | -------------------------------------------- |
| 50.5% | 1.4ms | `TryParse(String, int32&)`  | `System.Int32`                               |
| 49.5% | 1.3ms | `u_tyconstSpec(InputState)` | `Microsoft.FSharp.Quotations.PatternsModule` |

##### `Invoke(InputState)` (`Microsoft.FSharp.Quotations.PatternsModule+u_dtype@1905-1`)

|      % |  Time | Caller                                                                       | Location                                                    |
| -----: | ----: | ---------------------------------------------------------------------------- | ----------------------------------------------------------- |
| 100.0% | 2.5ms | ``u_list_aux(FSharpFunc`2<InputState, !!0>, FSharpList`1<!!0>, InputState)`` | `Microsoft.FSharp.Quotations.PatternsModule+SimpleUnpickle` |

##### ``add(IComparer`1<!!0>, !!0, !!1, MapTree`2<!!0, !!1>)`` (`Microsoft.FSharp.Collections.MapTreeModule`)

|      % |  Time | Caller                                             | Location                                     |
| -----: | ----: | -------------------------------------------------- | -------------------------------------------- |
| 100.0% | 1.4ms | ``ofArray(IComparer`1<!!0>, Tuple`2<!!0, !!1>[])`` | `Microsoft.FSharp.Collections.MapTreeModule` |

##### ``ofArray(IComparer`1<!!0>, Tuple`2<!!0, !!1>[])`` (`Microsoft.FSharp.Collections.MapTreeModule`)

|      % |  Time | Caller                                                        | Location                                     |
| -----: | ----: | ------------------------------------------------------------- | -------------------------------------------- |
| 100.0% | 1.4ms | ``ofSeq(IComparer`1<!!0>, IEnumerable`1<Tuple`2<!!0, !!1>>)`` | `Microsoft.FSharp.Collections.MapTreeModule` |

##### ``ofSeq(IComparer`1<!!0>, IEnumerable`1<Tuple`2<!!0, !!1>>)`` (`Microsoft.FSharp.Collections.MapTreeModule`)

|      % |  Time | Caller                                     | Location                                                                  |
| -----: | ----: | ------------------------------------------ | ------------------------------------------------------------------------- |
| 100.0% | 1.4ms | ``Create(IEnumerable`1<Tuple`2<!0, !1>>)`` | ``Microsoft.FSharp.Collections.FSharpMap`2[System.Int32,System.__Canon]`` |

##### ``filter(FSharpFunc`2<!!0, bool>, !!0[])`` (`Microsoft.FSharp.Collections.ArrayModule+Filter`)

|      % |  Time | Caller                                     | Location                                   |
| -----: | ----: | ------------------------------------------ | ------------------------------------------ |
| 100.0% | 1.4ms | ``Filter(FSharpFunc`2<!!0, bool>, !!0[])`` | `Microsoft.FSharp.Collections.ArrayModule` |

##### ``InitializeForScan(Regex, ReadOnlySpan`1<wchar>, int32, RegexRunnerMode)`` (`System.Text.RegularExpressions.RegexRunner`)

|      % |  Time | Caller                                                                | Location                               |
| -----: | ----: | --------------------------------------------------------------------- | -------------------------------------- |
| 100.0% | 1.4ms | `RunSingleMatch(RegexRunnerMode, int32, String, int32, int32, int32)` | `System.Text.RegularExpressions.Regex` |

##### `GetCustomAttributes(RuntimeType, RuntimeType, bool)` (`System.Reflection.CustomAttribute`)

|      % |  Time | Caller                                             | Location                           |
| -----: | ----: | -------------------------------------------------- | ---------------------------------- |
| 100.0% | 1.3ms | `tryFindCompilationMappingAttributeFromType(Type)` | `Microsoft.FSharp.Reflection.Impl` |

##### `ExecutionAndPublication(LazyHelper, bool)` (``System.Lazy`1[System.__Canon]``)

|      % |  Time | Caller          | Location                          |
| -----: | ----: | --------------- | --------------------------------- |
| 100.0% | 1.3ms | `CreateValue()` | ``System.Lazy`1[System.__Canon]`` |

##### `u_Expr(InputState)` (`Microsoft.FSharp.Quotations.PatternsModule`)

|      % |   Time | Caller               | Location                                                       |
| -----: | -----: | -------------------- | -------------------------------------------------------------- |
| 100.0% |  1.3ms | `Invoke(InputState)` | `Microsoft.FSharp.Quotations.PatternsModule+args@1963-1`       |
|  <0.1% | <0.1µs | `Invoke(InputState)` | `Microsoft.FSharp.Quotations.PatternsModule+unpickleExpr@2248` |

##### `GetCustomAttributeRecords(RuntimeModule, int32)` (`System.Reflection.RuntimeCustomAttributeData`)

|      % |  Time | Caller                                                                                                          | Location                            |
| -----: | ----: | --------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| 100.0% | 1.3ms | ``AddCustomAttributes(ListBuilder`1<Object>&, RuntimeModule, int32, RuntimeType, bool, ListBuilder`1<Object>)`` | `System.Reflection.CustomAttribute` |

##### `ToUnionParseResults()` (`Argu.CliParser+CliParseResultAggregator`)

|      % |  Time | Caller                                                                                                                                      | Location                                  |
| -----: | ----: | ------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- |
| 100.0% | 1.3ms | ``Parse(FSharpOption`1<String[]>, FSharpOption`1<IConfigurationReader>, FSharpOption`1<bool>, FSharpOption`1<bool>, FSharpOption`1<bool>)`` | ``Argu.ArgumentParser`1[System.__Canon]`` |

##### `Invoke(InputState)` (`Microsoft.FSharp.Quotations.PatternsModule+u_dtype@1905-2`)

|      % |  Time | Caller                | Location                                     |
| -----: | ----: | --------------------- | -------------------------------------------- |
| 100.0% | 1.3ms | `u_dtype(InputState)` | `Microsoft.FSharp.Quotations.PatternsModule` |

### Total time

Functions ranked by total time spent in the function and all its callees.

|     % |    Time | Function                                                                                                                                                                           | Location                                                         |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| 99.8% |  11.14s | `main(String[])`                                                                                                                                                                   | `Profile`                                                        |
| 99.1% |  11.06s | `UNMANAGED_CODE_TIME`                                                                                                                                                              | `<unknown>`                                                      |
| 94.7% |  10.57s | `Invoke(BindingEnv)`                                                                                                                                                               | `Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`         |
| 59.1% |   6.60s | `?!?`                                                                                                                                                                              | `<unknown>`                                                      |
| 55.1% |   6.16s | `getUnionCaseInfo(Type, String)`                                                                                                                                                   | `Microsoft.FSharp.Quotations.PatternsModule`                     |
| 55.1% |   6.16s | ``Invoke(FSharpList`1<Type>, FSharpValueOption`1<int32>)``                                                                                                                         | `Microsoft.FSharp.Quotations.PatternsModule+u_constSpec@2137-10` |
| 55.0% |   6.14s | ``GetUnionCases(Type, FSharpOption`1<BindingFlags>)``                                                                                                                              | `Microsoft.FSharp.Reflection.FSharpType`                         |
| 55.0% |   6.14s | `GetCustomAttributes(RuntimeType, RuntimeType, bool)`                                                                                                                              | `System.Reflection.CustomAttribute`                              |
| 55.0% |   6.14s | ``AddCustomAttributes(ListBuilder`1<Object>&, RuntimeModule, int32, RuntimeType, bool, ListBuilder`1<Object>)``                                                                    | `System.Reflection.CustomAttribute`                              |
| 55.0% |   6.14s | `GetCustomAttributes(RuntimeModule, int32, int32, RuntimeType)`                                                                                                                    | `System.Reflection.CustomAttribute`                              |
| 55.0% |   6.14s | ``FilterCustomAttributeRecord(MetadataToken, MetadataImport&, RuntimeModule, MetadataToken, RuntimeType, bool, ListBuilder`1<Object>&, RuntimeType&, IRuntimeMethodInfo&, bool&)`` | `System.Reflection.CustomAttribute`                              |
| 51.9% |   5.79s | `ResolveTypeHandle(int32, RuntimeTypeHandle[], RuntimeTypeHandle[])`                                                                                                               | `System.ModuleHandle`                                            |
| 50.2% |   5.61s | `ResolveType(int32, Type[], Type[])`                                                                                                                                               | `System.Reflection.RuntimeModule`                                |
| 43.1% |   4.81s | `MakeGenericType(Type[])`                                                                                                                                                          | `System.RuntimeType`                                             |
| 42.5% |   4.74s | `getTypeOfReprType(Type, BindingFlags)`                                                                                                                                            | `Microsoft.FSharp.Reflection.Impl`                               |
| 34.9% |   3.90s | `isExceptionRepr(Type, BindingFlags)`                                                                                                                                              | `Microsoft.FSharp.Reflection.Impl`                               |
| 33.5% |   3.74s | ``mapToFreshConsTail(FSharpList`1<!!0>, FSharpFunc`2<!!1, !!0>, FSharpList`1<!!1>)``                                                                                               | `Microsoft.FSharp.Primitives.Basics.List`                        |
|  7.6% | 847.5ms | `get@472-1(BindingFlags, Type)`                                                                                                                                                    | `Microsoft.FSharp.Reflection.Impl`                               |
|  6.8% | 755.6ms | `isUnionType(Type, BindingFlags)`                                                                                                                                                  | `Microsoft.FSharp.Reflection.Impl`                               |
|  6.5% | 724.5ms | `checkUnionType(Type, BindingFlags)`                                                                                                                                               | `Microsoft.FSharp.Reflection.Impl`                               |

#### Categories

##### Native

|     % |   Time | Function              | Location    |
| ----: | -----: | --------------------- | ----------- |
| 99.1% | 11.06s | `UNMANAGED_CODE_TIME` | `<unknown>` |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `main(String[])` (`Profile`)

|     % |    Time | Callee                                                                                                                          | Location                                                 |
| ----: | ------: | ------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| 91.0% |  10.15s | `Invoke(BindingEnv)`                                                                                                            | `Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965` |
|  3.5% | 387.4ms | `MakeGenericType(Type[])`                                                                                                       | `System.RuntimeType`                                     |
|  3.4% | 376.8ms | `Deserialize40(Type, Type[], Type[], FSharpExpr[], unsigned int8[])`                                                            | `Microsoft.FSharp.Quotations.FSharpExpr`                 |
|  0.7% |  74.8ms | ``.ctor(FSharpOption`1<String>, FSharpOption`1<String>, FSharpOption`1<int32>, FSharpOption`1<IExiter>, FSharpOption`1<bool>)`` | ``Argu.ArgumentParser`1[System.__Canon]``                |
|  0.6% |  68.5ms | `deserialize(Type, Type[], Type[], FSharpExpr[], unsigned int8[])`                                                              | `Microsoft.FSharp.Quotations.PatternsModule`             |

##### `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`)

|     % |    Time | Callee                                                                               | Location                                                         |
| ----: | ------: | ------------------------------------------------------------------------------------ | ---------------------------------------------------------------- |
| 58.2% |   6.16s | ``Invoke(FSharpList`1<Type>, FSharpValueOption`1<int32>)``                           | `Microsoft.FSharp.Quotations.PatternsModule+u_constSpec@2137-10` |
| 36.4% |   3.84s | `MakeGenericType(Type[])`                                                            | `System.RuntimeType`                                             |
| 34.3% |   3.62s | ``mapToFreshConsTail(FSharpList`1<!!0>, FSharpFunc`2<!!1, !!0>, FSharpList`1<!!1>)`` | `Microsoft.FSharp.Primitives.Basics.List`                        |
|  4.1% | 435.5ms | ``Invoke(FSharpFunc`2<int32, Type>)``                                                | `Microsoft.FSharp.Quotations.PatternsModule+u_dtype@1905-3`      |
|  1.3% | 134.2ms | ``Invoke(FSharpFunc`2<int32, Type>)``                                                | `Microsoft.FSharp.Quotations.PatternsModule+b@1962-1`            |

##### `?!?` (`<unknown>`)

|     % |  Time | Callee                                       | Location                                     |
| ----: | ----: | -------------------------------------------- | -------------------------------------------- |
| 99.2% | 6.55s | `UNMANAGED_CODE_TIME`                        | `<unknown>`                                  |
| <0.1% | 2.7ms | `OnStop(String, String, int32, Guid&, bool)` | `System.Diagnostics.Tracing.ActivityTracker` |
| <0.1% | 1.3ms | `.ctor()`                                    | `System.Configuration.AppSettingsSection`    |

##### `getUnionCaseInfo(Type, String)` (`Microsoft.FSharp.Quotations.PatternsModule`)

|     % |  Time | Callee                                                | Location                                    |
| ----: | ----: | ----------------------------------------------------- | ------------------------------------------- |
| 99.8% | 6.14s | ``GetUnionCases(Type, FSharpOption`1<BindingFlags>)`` | `Microsoft.FSharp.Reflection.FSharpType`    |
|  0.1% | 6.8ms | `get_Name()`                                          | `Microsoft.FSharp.Reflection.UnionCaseInfo` |
|  0.1% | 5.5ms | ``TryFind(FSharpFunc`2<!!0, bool>, !!0[])``           | `Microsoft.FSharp.Collections.ArrayModule`  |

##### ``Invoke(FSharpList`1<Type>, FSharpValueOption`1<int32>)`` (`Microsoft.FSharp.Quotations.PatternsModule+u_constSpec@2137-10`)

|     % |    Time | Callee                           | Location                                                          |
| ----: | ------: | -------------------------------- | ----------------------------------------------------------------- |
| 96.7% |   5.95s | `getUnionCaseInfo(Type, String)` | `Microsoft.FSharp.Quotations.PatternsModule`                      |
|  3.3% | 203.6ms | ``Invoke(FSharpList`1<Type>)``   | `Microsoft.FSharp.Quotations.PatternsModule+u_UnionCaseInfo@2017` |

##### ``GetUnionCases(Type, FSharpOption`1<BindingFlags>)`` (`Microsoft.FSharp.Reflection.FSharpType`)

|     % |    Time | Callee                                       | Location                           |
| ----: | ------: | -------------------------------------------- | ---------------------------------- |
| 77.2% |   4.74s | `getTypeOfReprType(Type, BindingFlags)`      | `Microsoft.FSharp.Reflection.Impl` |
| 11.8% | 724.5ms | `checkUnionType(Type, BindingFlags)`         | `Microsoft.FSharp.Reflection.Impl` |
| 10.9% | 673.1ms | `get@481-2(BindingFlags, Type)`              | `Microsoft.FSharp.Reflection.Impl` |
|  0.1% |   4.0ms | `getUnionTypeTagNameMap(Type, BindingFlags)` | `Microsoft.FSharp.Reflection.Impl` |

##### `GetCustomAttributes(RuntimeType, RuntimeType, bool)` (`System.Reflection.CustomAttribute`)

|      % |  Time | Callee                                                          | Location                            |
| -----: | ----: | --------------------------------------------------------------- | ----------------------------------- |
| 100.0% | 6.14s | `GetCustomAttributes(RuntimeModule, int32, int32, RuntimeType)` | `System.Reflection.CustomAttribute` |

##### ``AddCustomAttributes(ListBuilder`1<Object>&, RuntimeModule, int32, RuntimeType, bool, ListBuilder`1<Object>)`` (`System.Reflection.CustomAttribute`)

|      % |  Time | Callee                                                                                                                                                                             | Location                                       |
| -----: | ----: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| 100.0% | 6.14s | ``FilterCustomAttributeRecord(MetadataToken, MetadataImport&, RuntimeModule, MetadataToken, RuntimeType, bool, ListBuilder`1<Object>&, RuntimeType&, IRuntimeMethodInfo&, bool&)`` | `System.Reflection.CustomAttribute`            |
|  <0.1% | 1.4ms | `.cctor()`                                                                                                                                                                         | `System.Type`                                  |
|  <0.1% | 1.3ms | `GetCustomAttributeRecords(RuntimeModule, int32)`                                                                                                                                  | `System.Reflection.RuntimeCustomAttributeData` |

##### `GetCustomAttributes(RuntimeModule, int32, int32, RuntimeType)` (`System.Reflection.CustomAttribute`)

|      % |  Time | Callee                                                                                                          | Location                            |
| -----: | ----: | --------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| 100.0% | 6.14s | ``AddCustomAttributes(ListBuilder`1<Object>&, RuntimeModule, int32, RuntimeType, bool, ListBuilder`1<Object>)`` | `System.Reflection.CustomAttribute` |

##### ``FilterCustomAttributeRecord(MetadataToken, MetadataImport&, RuntimeModule, MetadataToken, RuntimeType, bool, ListBuilder`1<Object>&, RuntimeType&, IRuntimeMethodInfo&, bool&)`` (`System.Reflection.CustomAttribute`)

|     % |    Time | Callee                                                                 | Location                          |
| ----: | ------: | ---------------------------------------------------------------------- | --------------------------------- |
| 91.4% |   5.61s | `ResolveType(int32, Type[], Type[])`                                   | `System.Reflection.RuntimeModule` |
|  3.9% | 238.0ms | `ResolveMethodHandle(int32, RuntimeTypeHandle[], RuntimeTypeHandle[])` | `System.ModuleHandle`             |
|  3.0% | 183.0ms | `ResolveTypeHandle(int32, RuntimeTypeHandle[], RuntimeTypeHandle[])`   | `System.ModuleHandle`             |
|  1.7% | 106.7ms | `UNMANAGED_CODE_TIME`                                                  | `<unknown>`                       |

##### `ResolveTypeHandle(int32, RuntimeTypeHandle[], RuntimeTypeHandle[])` (`System.ModuleHandle`)

|      % |  Time | Callee | Location    |
| -----: | ----: | ------ | ----------- |
| 100.0% | 5.79s | `?!?`  | `<unknown>` |

##### `ResolveType(int32, Type[], Type[])` (`System.Reflection.RuntimeModule`)

|      % |  Time | Callee                                                               | Location              |
| -----: | ----: | -------------------------------------------------------------------- | --------------------- |
| 100.0% | 5.61s | `ResolveTypeHandle(int32, RuntimeTypeHandle[], RuntimeTypeHandle[])` | `System.ModuleHandle` |

##### `MakeGenericType(Type[])` (`System.RuntimeType`)

|     % |    Time | Callee                          | Location                   |
| ----: | ------: | ------------------------------- | -------------------------- |
| 84.7% |   4.07s | `UNMANAGED_CODE_TIME`           | `<unknown>`                |
| 11.7% | 565.5ms | `?!?`                           | `<unknown>`                |
|  2.9% | 138.2ms | `GetGenericArgumentsInternal()` | `System.RuntimeType`       |
|  0.3% |  16.4ms | `Instantiate(Type[])`           | `System.RuntimeTypeHandle` |
| <0.1% |   1.4ms | `Instantiate(RuntimeType)`      | `System.RuntimeTypeHandle` |

##### `getTypeOfReprType(Type, BindingFlags)` (`Microsoft.FSharp.Reflection.Impl`)

|     % |    Time | Callee                                | Location                           |
| ----: | ------: | ------------------------------------- | ---------------------------------- |
| 82.1% |   3.90s | `isExceptionRepr(Type, BindingFlags)` | `Microsoft.FSharp.Reflection.Impl` |
| 17.8% | 847.5ms | `get@472-1(BindingFlags, Type)`       | `Microsoft.FSharp.Reflection.Impl` |
| <0.1% |   1.4ms | `.cctor()`                            | `Microsoft.FSharp.Reflection.Impl` |

##### `isExceptionRepr(Type, BindingFlags)` (`Microsoft.FSharp.Reflection.Impl`)

|     % |    Time | Callee                                                | Location                            |
| ----: | ------: | ----------------------------------------------------- | ----------------------------------- |
| 96.0% |   3.74s | `GetCustomAttributes(RuntimeType, RuntimeType, bool)` | `System.Reflection.CustomAttribute` |
|  4.0% | 156.2ms | `tryFindSourceConstructFlagsOfType(Type)`             | `Microsoft.FSharp.Reflection.Impl`  |

##### ``mapToFreshConsTail(FSharpList`1<!!0>, FSharpFunc`2<!!1, !!0>, FSharpList`1<!!1>)`` (`Microsoft.FSharp.Primitives.Basics.List`)

|      % |  Time | Callee               | Location                                                 |
| -----: | ----: | -------------------- | -------------------------------------------------------- |
| 100.0% | 3.74s | `Invoke(BindingEnv)` | `Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965` |

##### `get@472-1(BindingFlags, Type)` (`Microsoft.FSharp.Reflection.Impl`)

|     % |    Time | Callee                                                | Location                            |
| ----: | ------: | ----------------------------------------------------- | ----------------------------------- |
| 98.1% | 831.5ms | `GetCustomAttributes(RuntimeType, RuntimeType, bool)` | `System.Reflection.CustomAttribute` |
|  1.9% |  16.0ms | `isUnionType(Type, BindingFlags)`                     | `Microsoft.FSharp.Reflection.Impl`  |

##### `isUnionType(Type, BindingFlags)` (`Microsoft.FSharp.Reflection.Impl`)

|     % |    Time | Callee                                                | Location                            |
| ----: | ------: | ----------------------------------------------------- | ----------------------------------- |
| 95.4% | 720.4ms | `GetCustomAttributes(RuntimeType, RuntimeType, bool)` | `System.Reflection.CustomAttribute` |
|  4.6% |  35.1ms | `tryFindSourceConstructFlagsOfType(Type)`             | `Microsoft.FSharp.Reflection.Impl`  |

##### `checkUnionType(Type, BindingFlags)` (`Microsoft.FSharp.Reflection.Impl`)

|     % |    Time | Callee                            | Location                           |
| ----: | ------: | --------------------------------- | ---------------------------------- |
| 99.8% | 723.2ms | `isUnionType(Type, BindingFlags)` | `Microsoft.FSharp.Reflection.Impl` |
|  0.2% |   1.3ms | `UNMANAGED_CODE_TIME`             | `<unknown>`                        |

## Hottest call stacks

Call stacks ranked by time spent in their leaf frame.

Common call stack: `main(String[])` (`Profile`)

|     % |    Time | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 31.9% |   3.56s | `UNMANAGED_CODE_TIME` ← `?!?` ← `ResolveTypeHandle(int32, RuntimeTypeHandle[], RuntimeTypeHandle[])` (`System.ModuleHandle`) ← `ResolveType(int32, Type[], Type[])` (`System.Reflection.RuntimeModule`) ← ``FilterCustomAttributeRecord(MetadataToken, MetadataImport&, RuntimeModule, MetadataToken, RuntimeType, bool, ListBuilder`1<Object>&, RuntimeType&, IRuntimeMethodInfo&, bool&)`` (`System.Reflection.CustomAttribute`) ← ``AddCustomAttributes(ListBuilder`1<Object>&, RuntimeModule, int32, RuntimeType, bool, ListBuilder`1<Object>)`` ← `GetCustomAttributes(RuntimeModule, int32, int32, RuntimeType)` ← `GetCustomAttributes(RuntimeType, RuntimeType, bool)` ← `isExceptionRepr(Type, BindingFlags)` (`Microsoft.FSharp.Reflection.Impl`) ← `getTypeOfReprType(Type, BindingFlags)` ← ``GetUnionCases(Type, FSharpOption`1<BindingFlags>)`` (`Microsoft.FSharp.Reflection.FSharpType`) ← `getUnionCaseInfo(Type, String)` (`Microsoft.FSharp.Quotations.PatternsModule`) ← ``Invoke(FSharpList`1<Type>, FSharpValueOption`1<int32>)`` (`Microsoft.FSharp.Quotations.PatternsModule+u_constSpec@2137-10`) ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 30.7% |   3.42s | `UNMANAGED_CODE_TIME` ← `MakeGenericType(Type[])` (`System.RuntimeType`) ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`) ← ``mapToFreshConsTail(FSharpList`1<!!0>, FSharpFunc`2<!!1, !!0>, FSharpList`1<!!1>)`` (`Microsoft.FSharp.Primitives.Basics.List`) ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  6.2% | 688.0ms | `UNMANAGED_CODE_TIME` ← `?!?` ← `ResolveTypeHandle(int32, RuntimeTypeHandle[], RuntimeTypeHandle[])` (`System.ModuleHandle`) ← `ResolveType(int32, Type[], Type[])` (`System.Reflection.RuntimeModule`) ← ``FilterCustomAttributeRecord(MetadataToken, MetadataImport&, RuntimeModule, MetadataToken, RuntimeType, bool, ListBuilder`1<Object>&, RuntimeType&, IRuntimeMethodInfo&, bool&)`` (`System.Reflection.CustomAttribute`) ← ``AddCustomAttributes(ListBuilder`1<Object>&, RuntimeModule, int32, RuntimeType, bool, ListBuilder`1<Object>)`` ← `GetCustomAttributes(RuntimeModule, int32, int32, RuntimeType)` ← `GetCustomAttributes(RuntimeType, RuntimeType, bool)` ← `get@472-1(BindingFlags, Type)` (`Microsoft.FSharp.Reflection.Impl`) ← `getTypeOfReprType(Type, BindingFlags)` ← ``GetUnionCases(Type, FSharpOption`1<BindingFlags>)`` (`Microsoft.FSharp.Reflection.FSharpType`) ← `getUnionCaseInfo(Type, String)` (`Microsoft.FSharp.Quotations.PatternsModule`) ← ``Invoke(FSharpList`1<Type>, FSharpValueOption`1<int32>)`` (`Microsoft.FSharp.Quotations.PatternsModule+u_constSpec@2137-10`) ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  5.2% | 585.0ms | `UNMANAGED_CODE_TIME` ← `?!?` ← `ResolveTypeHandle(int32, RuntimeTypeHandle[], RuntimeTypeHandle[])` (`System.ModuleHandle`) ← `ResolveType(int32, Type[], Type[])` (`System.Reflection.RuntimeModule`) ← ``FilterCustomAttributeRecord(MetadataToken, MetadataImport&, RuntimeModule, MetadataToken, RuntimeType, bool, ListBuilder`1<Object>&, RuntimeType&, IRuntimeMethodInfo&, bool&)`` (`System.Reflection.CustomAttribute`) ← ``AddCustomAttributes(ListBuilder`1<Object>&, RuntimeModule, int32, RuntimeType, bool, ListBuilder`1<Object>)`` ← `GetCustomAttributes(RuntimeModule, int32, int32, RuntimeType)` ← `GetCustomAttributes(RuntimeType, RuntimeType, bool)` ← `isUnionType(Type, BindingFlags)` (`Microsoft.FSharp.Reflection.Impl`) ← `checkUnionType(Type, BindingFlags)` ← ``GetUnionCases(Type, FSharpOption`1<BindingFlags>)`` (`Microsoft.FSharp.Reflection.FSharpType`) ← `getUnionCaseInfo(Type, String)` (`Microsoft.FSharp.Quotations.PatternsModule`) ← ``Invoke(FSharpList`1<Type>, FSharpValueOption`1<int32>)`` (`Microsoft.FSharp.Quotations.PatternsModule+u_constSpec@2137-10`) ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  4.9% | 550.2ms | `UNMANAGED_CODE_TIME` ← `?!?` ← `ResolveTypeHandle(int32, RuntimeTypeHandle[], RuntimeTypeHandle[])` (`System.ModuleHandle`) ← `ResolveType(int32, Type[], Type[])` (`System.Reflection.RuntimeModule`) ← ``FilterCustomAttributeRecord(MetadataToken, MetadataImport&, RuntimeModule, MetadataToken, RuntimeType, bool, ListBuilder`1<Object>&, RuntimeType&, IRuntimeMethodInfo&, bool&)`` (`System.Reflection.CustomAttribute`) ← ``AddCustomAttributes(ListBuilder`1<Object>&, RuntimeModule, int32, RuntimeType, bool, ListBuilder`1<Object>)`` ← `GetCustomAttributes(RuntimeModule, int32, int32, RuntimeType)` ← `GetCustomAttributes(RuntimeType, RuntimeType, bool)` ← `get@481-2(BindingFlags, Type)` (`Microsoft.FSharp.Reflection.Impl`) ← ``GetUnionCases(Type, FSharpOption`1<BindingFlags>)`` (`Microsoft.FSharp.Reflection.FSharpType`) ← `getUnionCaseInfo(Type, String)` (`Microsoft.FSharp.Quotations.PatternsModule`) ← ``Invoke(FSharpList`1<Type>, FSharpValueOption`1<int32>)`` (`Microsoft.FSharp.Quotations.PatternsModule+u_constSpec@2137-10`) ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  2.5% | 275.5ms | `UNMANAGED_CODE_TIME` ← `MakeGenericType(Type[])` (`System.RuntimeType`) ← ``Invoke(FSharpFunc`2<int32, Type>)`` (`Microsoft.FSharp.Quotations.PatternsModule+u_dtype@1905-3`) ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  2.2% | 244.3ms | `UNMANAGED_CODE_TIME` ← `MakeGenericType(Type[])` (`System.RuntimeType`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  1.4% | 151.9ms | `UNMANAGED_CODE_TIME` ← `?!?` ← `MakeGenericType(Type[])` (`System.RuntimeType`) ← ``Invoke(FSharpFunc`2<int32, Type>)`` (`Microsoft.FSharp.Quotations.PatternsModule+u_dtype@1905-3`) ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  1.3% | 143.2ms | `UNMANAGED_CODE_TIME` ← `?!?` ← `MakeGenericType(Type[])` (`System.RuntimeType`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  1.2% | 139.3ms | `UNMANAGED_CODE_TIME` ← `?!?` ← `MakeGenericType(Type[])` (`System.RuntimeType`) ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`) ← ``mapToFreshConsTail(FSharpList`1<!!0>, FSharpFunc`2<!!1, !!0>, FSharpList`1<!!1>)`` (`Microsoft.FSharp.Primitives.Basics.List`) ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  1.1% | 120.4ms | `UNMANAGED_CODE_TIME` ← `?!?` ← `MakeGenericType(Type[])` (`System.RuntimeType`) ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  1.0% | 106.3ms | `UNMANAGED_CODE_TIME` ← `?!?` ← `ResolveTypeHandle(int32, RuntimeTypeHandle[], RuntimeTypeHandle[])` (`System.ModuleHandle`) ← `ResolveType(int32, Type[], Type[])` (`System.Reflection.RuntimeModule`) ← ``FilterCustomAttributeRecord(MetadataToken, MetadataImport&, RuntimeModule, MetadataToken, RuntimeType, bool, ListBuilder`1<Object>&, RuntimeType&, IRuntimeMethodInfo&, bool&)`` (`System.Reflection.CustomAttribute`) ← ``AddCustomAttributes(ListBuilder`1<Object>&, RuntimeModule, int32, RuntimeType, bool, ListBuilder`1<Object>)`` ← `GetCustomAttributes(RuntimeModule, int32, int32, RuntimeType)` ← `GetCustomAttributes(RuntimeType, RuntimeType, bool)` ← `tryFindCompilationMappingAttributeFromType(Type)` (`Microsoft.FSharp.Reflection.Impl`) ← `tryFindSourceConstructFlagsOfType(Type)` ← `isExceptionRepr(Type, BindingFlags)` ← `getTypeOfReprType(Type, BindingFlags)` ← ``GetUnionCases(Type, FSharpOption`1<BindingFlags>)`` (`Microsoft.FSharp.Reflection.FSharpType`) ← `getUnionCaseInfo(Type, String)` (`Microsoft.FSharp.Quotations.PatternsModule`) ← ``Invoke(FSharpList`1<Type>)`` (`Microsoft.FSharp.Quotations.PatternsModule+u_UnionCaseInfo@2017`) ← ``Invoke(FSharpList`1<Type>, FSharpValueOption`1<int32>)`` (`Microsoft.FSharp.Quotations.PatternsModule+u_constSpec@2137-10`) ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`) ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1983-2`) ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1994-5`) ← `deserialize(Type, Type[], Type[], FSharpExpr[], unsigned int8[])` (`Microsoft.FSharp.Quotations.PatternsModule`) ← `Deserialize40(Type, Type[], Type[], FSharpExpr[], unsigned int8[])` (`Microsoft.FSharp.Quotations.FSharpExpr`) |
|  0.9% | 104.3ms | `UNMANAGED_CODE_TIME` ← `GetInstantiationInternal()` (`System.RuntimeTypeHandle`) ← `GetGenericArgumentsInternal()` (`System.RuntimeType`) ← `MakeGenericType(Type[])` ← ``map(FSharpFunc`2<!!0, !!1>, FSharpList`1<!!0>)`` (`Microsoft.FSharp.Primitives.Basics.List`) ← ``appL(FSharpList`1<FSharpFunc`2<!!0, !!1>>, !!0)`` (`Microsoft.FSharp.Quotations.PatternsModule`) ← ``Invoke(FSharpFunc`2<int32, Type>)`` (`Microsoft.FSharp.Quotations.PatternsModule+b@1962-1`) ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`) ← ``mapToFreshConsTail(FSharpList`1<!!0>, FSharpFunc`2<!!1, !!0>, FSharpList`1<!!1>)`` (`Microsoft.FSharp.Primitives.Basics.List`) ← ``map(FSharpFunc`2<!!0, !!1>, FSharpList`1<!!0>)`` ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`) ← ``map(FSharpFunc`2<!!0, !!1>, FSharpList`1<!!0>)`` (`Microsoft.FSharp.Primitives.Basics.List`) ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1994-5`) ← `deserialize(Type, Type[], Type[], FSharpExpr[], unsigned int8[])` (`Microsoft.FSharp.Quotations.PatternsModule`) ← `Deserialize40(Type, Type[], Type[], FSharpExpr[], unsigned int8[])` (`Microsoft.FSharp.Quotations.FSharpExpr`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  0.9% |  96.1ms | `UNMANAGED_CODE_TIME` ← `MakeGenericType(Type[])` (`System.RuntimeType`) ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  0.7% |  81.5ms | `UNMANAGED_CODE_TIME` ← `?!?` ← ``ResolveMethodHandleInternal(RuntimeModule, int32, ReadOnlySpan`1<int>, ReadOnlySpan`1<int>)`` (`System.ModuleHandle`) ← `ResolveMethodHandle(int32, RuntimeTypeHandle[], RuntimeTypeHandle[])` ← ``FilterCustomAttributeRecord(MetadataToken, MetadataImport&, RuntimeModule, MetadataToken, RuntimeType, bool, ListBuilder`1<Object>&, RuntimeType&, IRuntimeMethodInfo&, bool&)`` (`System.Reflection.CustomAttribute`) ← ``AddCustomAttributes(ListBuilder`1<Object>&, RuntimeModule, int32, RuntimeType, bool, ListBuilder`1<Object>)`` ← `GetCustomAttributes(RuntimeModule, int32, int32, RuntimeType)` ← `GetCustomAttributes(RuntimeType, RuntimeType, bool)` ← `isExceptionRepr(Type, BindingFlags)` (`Microsoft.FSharp.Reflection.Impl`) ← `getTypeOfReprType(Type, BindingFlags)` ← ``GetUnionCases(Type, FSharpOption`1<BindingFlags>)`` (`Microsoft.FSharp.Reflection.FSharpType`) ← `getUnionCaseInfo(Type, String)` (`Microsoft.FSharp.Quotations.PatternsModule`) ← ``Invoke(FSharpList`1<Type>, FSharpValueOption`1<int32>)`` (`Microsoft.FSharp.Quotations.PatternsModule+u_constSpec@2137-10`) ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  0.5% |  53.5ms | `UNMANAGED_CODE_TIME` ← `?!?` ← ``ResolveMethodHandleInternal(RuntimeModule, int32, ReadOnlySpan`1<int>, ReadOnlySpan`1<int>)`` (`System.ModuleHandle`) ← `ResolveMethodHandle(int32, RuntimeTypeHandle[], RuntimeTypeHandle[])` ← ``FilterCustomAttributeRecord(MetadataToken, MetadataImport&, RuntimeModule, MetadataToken, RuntimeType, bool, ListBuilder`1<Object>&, RuntimeType&, IRuntimeMethodInfo&, bool&)`` (`System.Reflection.CustomAttribute`) ← ``AddCustomAttributes(ListBuilder`1<Object>&, RuntimeModule, int32, RuntimeType, bool, ListBuilder`1<Object>)`` ← `GetCustomAttributes(RuntimeModule, int32, int32, RuntimeType)` ← `GetCustomAttributes(RuntimeType, RuntimeType, bool)` ← `isUnionType(Type, BindingFlags)` (`Microsoft.FSharp.Reflection.Impl`) ← `checkUnionType(Type, BindingFlags)` ← ``GetUnionCases(Type, FSharpOption`1<BindingFlags>)`` (`Microsoft.FSharp.Reflection.FSharpType`) ← `getUnionCaseInfo(Type, String)` (`Microsoft.FSharp.Quotations.PatternsModule`) ← ``Invoke(FSharpList`1<Type>, FSharpValueOption`1<int32>)`` (`Microsoft.FSharp.Quotations.PatternsModule+u_constSpec@2137-10`) ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  0.5% |  51.1ms | `UNMANAGED_CODE_TIME` ← `?!?` ← ``ResolveMethodHandleInternal(RuntimeModule, int32, ReadOnlySpan`1<int>, ReadOnlySpan`1<int>)`` (`System.ModuleHandle`) ← `ResolveMethodHandle(int32, RuntimeTypeHandle[], RuntimeTypeHandle[])` ← ``FilterCustomAttributeRecord(MetadataToken, MetadataImport&, RuntimeModule, MetadataToken, RuntimeType, bool, ListBuilder`1<Object>&, RuntimeType&, IRuntimeMethodInfo&, bool&)`` (`System.Reflection.CustomAttribute`) ← ``AddCustomAttributes(ListBuilder`1<Object>&, RuntimeModule, int32, RuntimeType, bool, ListBuilder`1<Object>)`` ← `GetCustomAttributes(RuntimeModule, int32, int32, RuntimeType)` ← `GetCustomAttributes(RuntimeType, RuntimeType, bool)` ← `get@472-1(BindingFlags, Type)` (`Microsoft.FSharp.Reflection.Impl`) ← `getTypeOfReprType(Type, BindingFlags)` ← ``GetUnionCases(Type, FSharpOption`1<BindingFlags>)`` (`Microsoft.FSharp.Reflection.FSharpType`) ← `getUnionCaseInfo(Type, String)` (`Microsoft.FSharp.Quotations.PatternsModule`) ← ``Invoke(FSharpList`1<Type>, FSharpValueOption`1<int32>)`` (`Microsoft.FSharp.Quotations.PatternsModule+u_constSpec@2137-10`) ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  0.4% |  49.4ms | `UNMANAGED_CODE_TIME` ← `?!?` ← `ResolveTypeHandle(int32, RuntimeTypeHandle[], RuntimeTypeHandle[])` (`System.ModuleHandle`) ← ``FilterCustomAttributeRecord(MetadataToken, MetadataImport&, RuntimeModule, MetadataToken, RuntimeType, bool, ListBuilder`1<Object>&, RuntimeType&, IRuntimeMethodInfo&, bool&)`` (`System.Reflection.CustomAttribute`) ← ``AddCustomAttributes(ListBuilder`1<Object>&, RuntimeModule, int32, RuntimeType, bool, ListBuilder`1<Object>)`` ← `GetCustomAttributes(RuntimeModule, int32, int32, RuntimeType)` ← `GetCustomAttributes(RuntimeType, RuntimeType, bool)` ← `get@472-1(BindingFlags, Type)` (`Microsoft.FSharp.Reflection.Impl`) ← `getTypeOfReprType(Type, BindingFlags)` ← ``GetUnionCases(Type, FSharpOption`1<BindingFlags>)`` (`Microsoft.FSharp.Reflection.FSharpType`) ← `getUnionCaseInfo(Type, String)` (`Microsoft.FSharp.Quotations.PatternsModule`) ← ``Invoke(FSharpList`1<Type>, FSharpValueOption`1<int32>)`` (`Microsoft.FSharp.Quotations.PatternsModule+u_constSpec@2137-10`) ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  0.4% |  46.6ms | `UNMANAGED_CODE_TIME` ← `?!?` ← ``ResolveMethodHandleInternal(RuntimeModule, int32, ReadOnlySpan`1<int>, ReadOnlySpan`1<int>)`` (`System.ModuleHandle`) ← `ResolveMethodHandle(int32, RuntimeTypeHandle[], RuntimeTypeHandle[])` ← ``FilterCustomAttributeRecord(MetadataToken, MetadataImport&, RuntimeModule, MetadataToken, RuntimeType, bool, ListBuilder`1<Object>&, RuntimeType&, IRuntimeMethodInfo&, bool&)`` (`System.Reflection.CustomAttribute`) ← ``AddCustomAttributes(ListBuilder`1<Object>&, RuntimeModule, int32, RuntimeType, bool, ListBuilder`1<Object>)`` ← `GetCustomAttributes(RuntimeModule, int32, int32, RuntimeType)` ← `GetCustomAttributes(RuntimeType, RuntimeType, bool)` ← `get@481-2(BindingFlags, Type)` (`Microsoft.FSharp.Reflection.Impl`) ← ``GetUnionCases(Type, FSharpOption`1<BindingFlags>)`` (`Microsoft.FSharp.Reflection.FSharpType`) ← `getUnionCaseInfo(Type, String)` (`Microsoft.FSharp.Quotations.PatternsModule`) ← ``Invoke(FSharpList`1<Type>, FSharpValueOption`1<int32>)`` (`Microsoft.FSharp.Quotations.PatternsModule+u_constSpec@2137-10`) ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  0.4% |  43.8ms | `UNMANAGED_CODE_TIME` ← `?!?` ← `ResolveTypeHandle(int32, RuntimeTypeHandle[], RuntimeTypeHandle[])` (`System.ModuleHandle`) ← ``FilterCustomAttributeRecord(MetadataToken, MetadataImport&, RuntimeModule, MetadataToken, RuntimeType, bool, ListBuilder`1<Object>&, RuntimeType&, IRuntimeMethodInfo&, bool&)`` (`System.Reflection.CustomAttribute`) ← ``AddCustomAttributes(ListBuilder`1<Object>&, RuntimeModule, int32, RuntimeType, bool, ListBuilder`1<Object>)`` ← `GetCustomAttributes(RuntimeModule, int32, int32, RuntimeType)` ← `GetCustomAttributes(RuntimeType, RuntimeType, bool)` ← `isExceptionRepr(Type, BindingFlags)` (`Microsoft.FSharp.Reflection.Impl`) ← `getTypeOfReprType(Type, BindingFlags)` ← ``GetUnionCases(Type, FSharpOption`1<BindingFlags>)`` (`Microsoft.FSharp.Reflection.FSharpType`) ← `getUnionCaseInfo(Type, String)` (`Microsoft.FSharp.Quotations.PatternsModule`) ← ``Invoke(FSharpList`1<Type>, FSharpValueOption`1<int32>)`` (`Microsoft.FSharp.Quotations.PatternsModule+u_constSpec@2137-10`) ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |

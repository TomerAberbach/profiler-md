# Sampling profile

Took 11.01s.

| Category         |     % |   Time |
| ---------------- | ----: | -----: |
| Native           | 99.1% | 10.91s |
| Standard library |  0.6% | 60.6ms |
| Unknown          |  0.3% | 36.8ms |
| Ours             | <0.1% | <0.1µs |

## Hottest functions

### Self time

Functions with the most time spent within the function body, excluding callees.

|     % |   Time | Function                                                                             | Location                                                                                                      |
| ----: | -----: | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------- |
| 99.1% | 10.91s | `UNMANAGED_CODE_TIME`                                                                | `<unknown>`                                                                                                   |
|  0.3% | 36.8ms | `?!?`                                                                                | `<unknown>`                                                                                                   |
|  0.2% | 17.4ms | `GetInstantiationInternal()`                                                         | `System.RuntimeTypeHandle`                                                                                    |
|  0.1% | 14.9ms | `MakeGenericType(Type[])`                                                            | `System.RuntimeType`                                                                                          |
| <0.1% |  4.1ms | `u_Expr(InputState)`                                                                 | `Microsoft.FSharp.Quotations.PatternsModule`                                                                  |
| <0.1% |  2.7ms | `u_NamedType(InputState)`                                                            | `Microsoft.FSharp.Quotations.PatternsModule`                                                                  |
| <0.1% |  2.7ms | `u_tyconstSpec(InputState)`                                                          | `Microsoft.FSharp.Quotations.PatternsModule`                                                                  |
| <0.1% |  1.4ms | ``unpickleObj(Assembly, Type[], FSharpFunc`2<InputState, !!0>, unsigned int8[])``    | `Microsoft.FSharp.Quotations.PatternsModule+SimpleUnpickle`                                                   |
| <0.1% |  1.4ms | `u_int32(InputState)`                                                                | `Microsoft.FSharp.Quotations.PatternsModule+SimpleUnpickle`                                                   |
| <0.1% |  1.4ms | `u_uniq(!!0[], InputState)`                                                          | `Microsoft.FSharp.Quotations.PatternsModule+SimpleUnpickle`                                                   |
| <0.1% |  1.4ms | ``mapToFreshConsTail(FSharpList`1<!!0>, FSharpFunc`2<!!1, !!0>, FSharpList`1<!!1>)`` | `Microsoft.FSharp.Primitives.Basics.List`                                                                     |
| <0.1% |  1.4ms | `NewUnique(!0)`                                                                      | ``Microsoft.FSharp.Quotations.PatternsModule+ModuleDefinitionBindingResult`2[System.__Canon,System.__Canon]`` |
| <0.1% |  1.4ms | `get_CurrentCulture()`                                                               | `System.Globalization.CultureInfo`                                                                            |
| <0.1% |  1.3ms | ``Invoke(FSharpFunc`2<int32, Type>)``                                                | `Microsoft.FSharp.Quotations.PatternsModule+u_dtype@1905-3`                                                   |
| <0.1% |  1.3ms | `Invoke(InputState)`                                                                 | `Microsoft.FSharp.Quotations.PatternsModule+u_dtype@1905-2`                                                   |
| <0.1% |  1.3ms | ``InsertionSort(Span`1<!0>, Comparison`1<!0>)``                                      | ``System.Collections.Generic.ArraySortHelper`1[System.__Canon]``                                              |
| <0.1% |  1.3ms | `Invoke(InputState)`                                                                 | `Microsoft.FSharp.Quotations.PatternsModule+attrs@1993`                                                       |
| <0.1% |  1.3ms | `Invoke(InputState)`                                                                 | `Microsoft.FSharp.Quotations.PatternsModule+SimpleUnpickle+unpickleObj@1810`                                  |
| <0.1% |  1.3ms | `Invoke(InputState)`                                                                 | `Microsoft.FSharp.Quotations.PatternsModule+b@1962`                                                           |
| <0.1% |  1.3ms | `CreateManifestAndDescriptors(Type, String, EventSource, EventManifestOptions)`      | `System.Diagnostics.Tracing.EventSource`                                                                      |

#### Categories

Categories accounting for at least 1.0% of self time.

##### Native

|     % |   Time | Function              | Location    |
| ----: | -----: | --------------------- | ----------- |
| 99.1% | 10.91s | `UNMANAGED_CODE_TIME` | `<unknown>` |

#### Callers

Callers with the largest contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `UNMANAGED_CODE_TIME` (`<unknown>`)

|     % |    Time | Caller                                                                                                                                                                             | Location                            |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| 59.6% |   6.50s | `?!?`                                                                                                                                                                              | `<unknown>`                         |
| 36.6% |   3.99s | `MakeGenericType(Type[])`                                                                                                                                                          | `System.RuntimeType`                |
|  1.3% | 137.2ms | `GetInstantiationInternal()`                                                                                                                                                       | `System.RuntimeTypeHandle`          |
|  1.0% | 110.0ms | ``FilterCustomAttributeRecord(MetadataToken, MetadataImport&, RuntimeModule, MetadataToken, RuntimeType, bool, ListBuilder`1<Object>&, RuntimeType&, IRuntimeMethodInfo&, bool&)`` | `System.Reflection.CustomAttribute` |
|  0.1% |   8.1ms | `ViaFactory(LazyThreadSafetyMode)`                                                                                                                                                 | ``System.Lazy`1[System.__Canon]``   |

##### `?!?` (`<unknown>`)

|      % |   Time | Caller                                                               | Location              |
| -----: | -----: | -------------------------------------------------------------------- | --------------------- |
| 100.0% | 36.8ms | `ResolveTypeHandle(int32, RuntimeTypeHandle[], RuntimeTypeHandle[])` | `System.ModuleHandle` |

##### `GetInstantiationInternal()` (`System.RuntimeTypeHandle`)

|      % |   Time | Caller                          | Location             |
| -----: | -----: | ------------------------------- | -------------------- |
| 100.0% | 17.4ms | `GetGenericArgumentsInternal()` | `System.RuntimeType` |

##### `MakeGenericType(Type[])` (`System.RuntimeType`)

|     % |   Time | Caller                                             | Location                                                    |
| ----: | -----: | -------------------------------------------------- | ----------------------------------------------------------- |
| 57.9% |  8.6ms | `Invoke(BindingEnv)`                               | `Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`    |
| 42.1% |  6.3ms | `main(String[])`                                   | `Profile`                                                   |
| <0.1% | <0.1µs | ``map(FSharpFunc`2<!!0, !!1>, FSharpList`1<!!0>)`` | `Microsoft.FSharp.Primitives.Basics.List`                   |
| <0.1% | <0.1µs | ``Invoke(FSharpFunc`2<int32, Type>)``              | `Microsoft.FSharp.Quotations.PatternsModule+u_dtype@1905-3` |

##### `u_Expr(InputState)` (`Microsoft.FSharp.Quotations.PatternsModule`)

|      % |  Time | Caller               | Location                                                 |
| -----: | ----: | -------------------- | -------------------------------------------------------- |
| 100.0% | 4.1ms | `Invoke(InputState)` | `Microsoft.FSharp.Quotations.PatternsModule+args@1963-1` |

##### `u_NamedType(InputState)` (`Microsoft.FSharp.Quotations.PatternsModule`)

|      % |  Time | Caller                      | Location                                     |
| -----: | ----: | --------------------------- | -------------------------------------------- |
| 100.0% | 2.7ms | `u_tyconstSpec(InputState)` | `Microsoft.FSharp.Quotations.PatternsModule` |

##### `u_tyconstSpec(InputState)` (`Microsoft.FSharp.Quotations.PatternsModule`)

|      % |  Time | Caller                | Location                                     |
| -----: | ----: | --------------------- | -------------------------------------------- |
| 100.0% | 2.7ms | `u_dtype(InputState)` | `Microsoft.FSharp.Quotations.PatternsModule` |

##### ``unpickleObj(Assembly, Type[], FSharpFunc`2<InputState, !!0>, unsigned int8[])`` (`Microsoft.FSharp.Quotations.PatternsModule+SimpleUnpickle`)

|      % |  Time | Caller                                        | Location                                     |
| -----: | ----: | --------------------------------------------- | -------------------------------------------- |
| 100.0% | 1.4ms | `unpickleExpr(Type, Type[], unsigned int8[])` | `Microsoft.FSharp.Quotations.PatternsModule` |

##### `u_int32(InputState)` (`Microsoft.FSharp.Quotations.PatternsModule+SimpleUnpickle`)

|      % |  Time | Caller                      | Location                                                    |
| -----: | ----: | --------------------------- | ----------------------------------------------------------- |
| 100.0% | 1.4ms | `u_uniq(!!0[], InputState)` | `Microsoft.FSharp.Quotations.PatternsModule+SimpleUnpickle` |

##### `u_uniq(!!0[], InputState)` (`Microsoft.FSharp.Quotations.PatternsModule+SimpleUnpickle`)

|      % |  Time | Caller                    | Location                                     |
| -----: | ----: | ------------------------- | -------------------------------------------- |
| 100.0% | 1.4ms | `u_NamedType(InputState)` | `Microsoft.FSharp.Quotations.PatternsModule` |

##### ``mapToFreshConsTail(FSharpList`1<!!0>, FSharpFunc`2<!!1, !!0>, FSharpList`1<!!1>)`` (`Microsoft.FSharp.Primitives.Basics.List`)

|      % |  Time | Caller                                             | Location                                  |
| -----: | ----: | -------------------------------------------------- | ----------------------------------------- |
| 100.0% | 1.4ms | ``map(FSharpFunc`2<!!0, !!1>, FSharpList`1<!!0>)`` | `Microsoft.FSharp.Primitives.Basics.List` |

##### `NewUnique(!0)` (``Microsoft.FSharp.Quotations.PatternsModule+ModuleDefinitionBindingResult`2[System.__Canon,System.__Canon]``)

|      % |  Time | Caller                    | Location                                     |
| -----: | ----: | ------------------------- | -------------------------------------------- |
| 100.0% | 1.4ms | `u_constSpec(InputState)` | `Microsoft.FSharp.Quotations.PatternsModule` |

##### `get_CurrentCulture()` (`System.Globalization.CultureInfo`)

|      % |  Time | Caller              | Location                                |
| -----: | ----: | ------------------- | --------------------------------------- |
| 100.0% | 1.4ms | `get_CurrentInfo()` | `System.Globalization.NumberFormatInfo` |

##### ``Invoke(FSharpFunc`2<int32, Type>)`` (`Microsoft.FSharp.Quotations.PatternsModule+u_dtype@1905-3`)

|      % |  Time | Caller               | Location                                                 |
| -----: | ----: | -------------------- | -------------------------------------------------------- |
| 100.0% | 1.3ms | `Invoke(BindingEnv)` | `Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965` |

##### `Invoke(InputState)` (`Microsoft.FSharp.Quotations.PatternsModule+u_dtype@1905-2`)

|      % |  Time | Caller                | Location                                     |
| -----: | ----: | --------------------- | -------------------------------------------- |
| 100.0% | 1.3ms | `u_dtype(InputState)` | `Microsoft.FSharp.Quotations.PatternsModule` |

##### ``InsertionSort(Span`1<!0>, Comparison`1<!0>)`` (``System.Collections.Generic.ArraySortHelper`1[System.__Canon]``)

|      % |  Time | Caller                                             | Location                                                         |
| -----: | ----: | -------------------------------------------------- | ---------------------------------------------------------------- |
| 100.0% | 1.3ms | ``IntroSort(Span`1<!0>, int32, Comparison`1<!0>)`` | ``System.Collections.Generic.ArraySortHelper`1[System.__Canon]`` |

##### `Invoke(InputState)` (`Microsoft.FSharp.Quotations.PatternsModule+attrs@1993`)

|      % |  Time | Caller                                                                       | Location                                                    |
| -----: | ----: | ---------------------------------------------------------------------------- | ----------------------------------------------------------- |
| 100.0% | 1.3ms | ``u_list_aux(FSharpFunc`2<InputState, !!0>, FSharpList`1<!!0>, InputState)`` | `Microsoft.FSharp.Quotations.PatternsModule+SimpleUnpickle` |

##### `Invoke(InputState)` (`Microsoft.FSharp.Quotations.PatternsModule+SimpleUnpickle+unpickleObj@1810`)

|      % |  Time | Caller                                                                       | Location                                                    |
| -----: | ----: | ---------------------------------------------------------------------------- | ----------------------------------------------------------- |
| 100.0% | 1.3ms | ``u_list_aux(FSharpFunc`2<InputState, !!0>, FSharpList`1<!!0>, InputState)`` | `Microsoft.FSharp.Quotations.PatternsModule+SimpleUnpickle` |

##### `Invoke(InputState)` (`Microsoft.FSharp.Quotations.PatternsModule+b@1962`)

|      % |  Time | Caller                                                                       | Location                                                    |
| -----: | ----: | ---------------------------------------------------------------------------- | ----------------------------------------------------------- |
| 100.0% | 1.3ms | ``u_list_aux(FSharpFunc`2<InputState, !!0>, FSharpList`1<!!0>, InputState)`` | `Microsoft.FSharp.Quotations.PatternsModule+SimpleUnpickle` |

##### `CreateManifestAndDescriptors(Type, String, EventSource, EventManifestOptions)` (`System.Diagnostics.Tracing.EventSource`)

|      % |  Time | Caller                           | Location                                 |
| -----: | ----: | -------------------------------- | ---------------------------------------- |
| 100.0% | 1.3ms | `EnsureDescriptorsInitialized()` | `System.Diagnostics.Tracing.EventSource` |

### Total time

Functions with the most time spent within the function and its callees.

|     % |    Time | Function                                                                                                                                                                           | Location                                                         |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| 99.8% |  10.99s | `main(String[])`                                                                                                                                                                   | `Profile`                                                        |
| 99.1% |  10.91s | `UNMANAGED_CODE_TIME`                                                                                                                                                              | `<unknown>`                                                      |
| 95.1% |  10.47s | `Invoke(BindingEnv)`                                                                                                                                                               | `Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`         |
| 59.4% |   6.54s | `?!?`                                                                                                                                                                              | `<unknown>`                                                      |
| 55.8% |   6.14s | ``AddCustomAttributes(ListBuilder`1<Object>&, RuntimeModule, int32, RuntimeType, bool, ListBuilder`1<Object>)``                                                                    | `System.Reflection.CustomAttribute`                              |
| 55.8% |   6.14s | `GetCustomAttributes(RuntimeModule, int32, int32, RuntimeType)`                                                                                                                    | `System.Reflection.CustomAttribute`                              |
| 55.8% |   6.14s | `getUnionCaseInfo(Type, String)`                                                                                                                                                   | `Microsoft.FSharp.Quotations.PatternsModule`                     |
| 55.8% |   6.14s | ``Invoke(FSharpList`1<Type>, FSharpValueOption`1<int32>)``                                                                                                                         | `Microsoft.FSharp.Quotations.PatternsModule+u_constSpec@2137-10` |
| 55.8% |   6.14s | ``GetUnionCases(Type, FSharpOption`1<BindingFlags>)``                                                                                                                              | `Microsoft.FSharp.Reflection.FSharpType`                         |
| 55.8% |   6.14s | `GetCustomAttributes(RuntimeType, RuntimeType, bool)`                                                                                                                              | `System.Reflection.CustomAttribute`                              |
| 55.8% |   6.14s | ``FilterCustomAttributeRecord(MetadataToken, MetadataImport&, RuntimeModule, MetadataToken, RuntimeType, bool, ListBuilder`1<Object>&, RuntimeType&, IRuntimeMethodInfo&, bool&)`` | `System.Reflection.CustomAttribute`                              |
| 52.5% |   5.77s | `ResolveTypeHandle(int32, RuntimeTypeHandle[], RuntimeTypeHandle[])`                                                                                                               | `System.ModuleHandle`                                            |
| 50.7% |   5.58s | `ResolveType(int32, Type[], Type[])`                                                                                                                                               | `System.Reflection.RuntimeModule`                                |
| 43.3% |   4.76s | `getTypeOfReprType(Type, BindingFlags)`                                                                                                                                            | `Microsoft.FSharp.Reflection.Impl`                               |
| 42.5% |   4.68s | `MakeGenericType(Type[])`                                                                                                                                                          | `System.RuntimeType`                                             |
| 36.1% |   3.97s | `isExceptionRepr(Type, BindingFlags)`                                                                                                                                              | `Microsoft.FSharp.Reflection.Impl`                               |
| 33.7% |   3.71s | ``mapToFreshConsTail(FSharpList`1<!!0>, FSharpFunc`2<!!1, !!0>, FSharpList`1<!!1>)``                                                                                               | `Microsoft.FSharp.Primitives.Basics.List`                        |
|  7.2% | 792.0ms | `get@472-1(BindingFlags, Type)`                                                                                                                                                    | `Microsoft.FSharp.Reflection.Impl`                               |
|  6.5% | 716.0ms | `isUnionType(Type, BindingFlags)`                                                                                                                                                  | `Microsoft.FSharp.Reflection.Impl`                               |
|  6.3% | 694.8ms | `get@481-2(BindingFlags, Type)`                                                                                                                                                    | `Microsoft.FSharp.Reflection.Impl`                               |

#### Categories

Categories accounting for at least 1.0% of self time.

##### Native

|     % |   Time | Function              | Location    |
| ----: | -----: | --------------------- | ----------- |
| 99.1% | 10.91s | `UNMANAGED_CODE_TIME` | `<unknown>` |

#### Callers

Callers with the largest contribution to each function's total time. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `UNMANAGED_CODE_TIME` (`<unknown>`)

|     % |    Time | Caller                                                                                                                                                                             | Location                            |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| 59.6% |   6.50s | `?!?`                                                                                                                                                                              | `<unknown>`                         |
| 36.6% |   3.99s | `MakeGenericType(Type[])`                                                                                                                                                          | `System.RuntimeType`                |
|  1.3% | 137.2ms | `GetInstantiationInternal()`                                                                                                                                                       | `System.RuntimeTypeHandle`          |
|  1.0% | 110.0ms | ``FilterCustomAttributeRecord(MetadataToken, MetadataImport&, RuntimeModule, MetadataToken, RuntimeType, bool, ListBuilder`1<Object>&, RuntimeType&, IRuntimeMethodInfo&, bool&)`` | `System.Reflection.CustomAttribute` |
|  0.1% |   8.1ms | `ViaFactory(LazyThreadSafetyMode)`                                                                                                                                                 | ``System.Lazy`1[System.__Canon]``   |

##### `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`)

|     % |    Time | Caller                                                                               | Location                                                   |
| ----: | ------: | ------------------------------------------------------------------------------------ | ---------------------------------------------------------- |
| 95.8% |  10.02s | `main(String[])`                                                                     | `Profile`                                                  |
| 35.5% |   3.71s | ``mapToFreshConsTail(FSharpList`1<!!0>, FSharpFunc`2<!!1, !!0>, FSharpList`1<!!1>)`` | `Microsoft.FSharp.Primitives.Basics.List`                  |
|  2.4% | 256.4ms | `Invoke(BindingEnv)`                                                                 | `Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1983-2` |
|  1.6% | 164.3ms | ``map(FSharpFunc`2<!!0, !!1>, FSharpList`1<!!0>)``                                   | `Microsoft.FSharp.Primitives.Basics.List`                  |
|  0.2% |  22.9ms | `Invoke(BindingEnv)`                                                                 | `Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1994-5` |

##### `?!?` (`<unknown>`)

|     % |    Time | Caller                                                                                                          | Location                              |
| ----: | ------: | --------------------------------------------------------------------------------------------------------------- | ------------------------------------- |
| 88.3% |   5.77s | `ResolveTypeHandle(int32, RuntimeTypeHandle[], RuntimeTypeHandle[])`                                            | `System.ModuleHandle`                 |
|  7.7% | 505.6ms | `MakeGenericType(Type[])`                                                                                       | `System.RuntimeType`                  |
|  4.0% | 258.7ms | ``ResolveMethodHandleInternal(RuntimeModule, int32, ReadOnlySpan`1<int>, ReadOnlySpan`1<int>)``                 | `System.ModuleHandle`                 |
| <0.1% |   1.4ms | ``AddCustomAttributes(ListBuilder`1<Object>&, RuntimeModule, int32, RuntimeType, bool, ListBuilder`1<Object>)`` | `System.Reflection.CustomAttribute`   |
| <0.1% |   1.3ms | `InvokeWithNoArgs(Object, BindingFlags)`                                                                        | `System.Reflection.MethodBaseInvoker` |

##### ``AddCustomAttributes(ListBuilder`1<Object>&, RuntimeModule, int32, RuntimeType, bool, ListBuilder`1<Object>)`` (`System.Reflection.CustomAttribute`)

|      % |  Time | Caller                                                          | Location                            |
| -----: | ----: | --------------------------------------------------------------- | ----------------------------------- |
| 100.0% | 6.14s | `GetCustomAttributes(RuntimeModule, int32, int32, RuntimeType)` | `System.Reflection.CustomAttribute` |

##### `GetCustomAttributes(RuntimeModule, int32, int32, RuntimeType)` (`System.Reflection.CustomAttribute`)

|     % |  Time | Caller                                                         | Location                            |
| ----: | ----: | -------------------------------------------------------------- | ----------------------------------- |
| 99.9% | 6.14s | `GetCustomAttributes(RuntimeType, RuntimeType, bool)`          | `System.Reflection.CustomAttribute` |
| <0.1% | 2.7ms | `GetCustomAttributes(RuntimeMethodInfo, RuntimeType, bool)`    | `System.Reflection.CustomAttribute` |
| <0.1% | 1.4ms | `tryFindCompilationMappingAttributeFromMemberInfo(MemberInfo)` | `Microsoft.FSharp.Reflection.Impl`  |

##### `getUnionCaseInfo(Type, String)` (`Microsoft.FSharp.Quotations.PatternsModule`)

|     % |    Time | Caller                                                     | Location                                                          |
| ----: | ------: | ---------------------------------------------------------- | ----------------------------------------------------------------- |
| 96.4% |   5.92s | ``Invoke(FSharpList`1<Type>, FSharpValueOption`1<int32>)`` | `Microsoft.FSharp.Quotations.PatternsModule+u_constSpec@2137-10`  |
|  3.6% | 220.9ms | ``Invoke(FSharpList`1<Type>)``                             | `Microsoft.FSharp.Quotations.PatternsModule+u_UnionCaseInfo@2017` |

##### ``Invoke(FSharpList`1<Type>, FSharpValueOption`1<int32>)`` (`Microsoft.FSharp.Quotations.PatternsModule+u_constSpec@2137-10`)

|      % |  Time | Caller               | Location                                                 |
| -----: | ----: | -------------------- | -------------------------------------------------------- |
| 100.0% | 6.14s | `Invoke(BindingEnv)` | `Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965` |

##### ``GetUnionCases(Type, FSharpOption`1<BindingFlags>)`` (`Microsoft.FSharp.Reflection.FSharpType`)

|      % |  Time | Caller                           | Location                                     |
| -----: | ----: | -------------------------------- | -------------------------------------------- |
| 100.0% | 6.14s | `getUnionCaseInfo(Type, String)` | `Microsoft.FSharp.Quotations.PatternsModule` |
|  <0.1% | 1.3ms | `Invoke(Unit)`                   | `Argu.PreCompute+caseInfo@574`               |

##### `GetCustomAttributes(RuntimeType, RuntimeType, bool)` (`System.Reflection.CustomAttribute`)

|     % |    Time | Caller                                             | Location                           |
| ----: | ------: | -------------------------------------------------- | ---------------------------------- |
| 61.9% |   3.80s | `isExceptionRepr(Type, BindingFlags)`              | `Microsoft.FSharp.Reflection.Impl` |
| 12.6% | 774.4ms | `get@472-1(BindingFlags, Type)`                    | `Microsoft.FSharp.Reflection.Impl` |
| 11.1% | 681.3ms | `get@481-2(BindingFlags, Type)`                    | `Microsoft.FSharp.Reflection.Impl` |
| 10.9% | 670.0ms | `isUnionType(Type, BindingFlags)`                  | `Microsoft.FSharp.Reflection.Impl` |
|  3.1% | 192.4ms | `tryFindCompilationMappingAttributeFromType(Type)` | `Microsoft.FSharp.Reflection.Impl` |

##### ``FilterCustomAttributeRecord(MetadataToken, MetadataImport&, RuntimeModule, MetadataToken, RuntimeType, bool, ListBuilder`1<Object>&, RuntimeType&, IRuntimeMethodInfo&, bool&)`` (`System.Reflection.CustomAttribute`)

|      % |  Time | Caller                                                                                                          | Location                            |
| -----: | ----: | --------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| 100.0% | 6.14s | ``AddCustomAttributes(ListBuilder`1<Object>&, RuntimeModule, int32, RuntimeType, bool, ListBuilder`1<Object>)`` | `System.Reflection.CustomAttribute` |

##### `ResolveTypeHandle(int32, RuntimeTypeHandle[], RuntimeTypeHandle[])` (`System.ModuleHandle`)

|     % |    Time | Caller                                                                                                                                                                             | Location                            |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| 96.6% |   5.58s | `ResolveType(int32, Type[], Type[])`                                                                                                                                               | `System.Reflection.RuntimeModule`   |
|  3.4% | 195.7ms | ``FilterCustomAttributeRecord(MetadataToken, MetadataImport&, RuntimeModule, MetadataToken, RuntimeType, bool, ListBuilder`1<Object>&, RuntimeType&, IRuntimeMethodInfo&, bool&)`` | `System.Reflection.CustomAttribute` |

##### `ResolveType(int32, Type[], Type[])` (`System.Reflection.RuntimeModule`)

|      % |  Time | Caller                                                                                                                                                                             | Location                            |
| -----: | ----: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| 100.0% | 5.58s | ``FilterCustomAttributeRecord(MetadataToken, MetadataImport&, RuntimeModule, MetadataToken, RuntimeType, bool, ListBuilder`1<Object>&, RuntimeType&, IRuntimeMethodInfo&, bool&)`` | `System.Reflection.CustomAttribute` |

##### `getTypeOfReprType(Type, BindingFlags)` (`Microsoft.FSharp.Reflection.Impl`)

|     % |  Time | Caller                                                | Location                                 |
| ----: | ----: | ----------------------------------------------------- | ---------------------------------------- |
| 99.9% | 4.76s | ``GetUnionCases(Type, FSharpOption`1<BindingFlags>)`` | `Microsoft.FSharp.Reflection.FSharpType` |
|  0.1% | 2.6ms | ``IsUnion(Type, FSharpOption`1<BindingFlags>)``       | `Microsoft.FSharp.Reflection.FSharpType` |

##### `MakeGenericType(Type[])` (`System.RuntimeType`)

|     % |    Time | Caller                                             | Location                                                    |
| ----: | ------: | -------------------------------------------------- | ----------------------------------------------------------- |
| 80.7% |   3.77s | `Invoke(BindingEnv)`                               | `Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`    |
|  8.6% | 403.6ms | ``Invoke(FSharpFunc`2<int32, Type>)``              | `Microsoft.FSharp.Quotations.PatternsModule+u_dtype@1905-3` |
|  7.5% | 350.1ms | `main(String[])`                                   | `Profile`                                                   |
|  2.9% | 133.9ms | ``map(FSharpFunc`2<!!0, !!1>, FSharpList`1<!!0>)`` | `Microsoft.FSharp.Primitives.Basics.List`                   |
|  0.2% |  10.9ms | `cast(FSharpExpr)`                                 | `Microsoft.FSharp.Quotations.PatternsModule`                |

##### `isExceptionRepr(Type, BindingFlags)` (`Microsoft.FSharp.Reflection.Impl`)

|      % |  Time | Caller                                  | Location                           |
| -----: | ----: | --------------------------------------- | ---------------------------------- |
| 100.0% | 3.97s | `getTypeOfReprType(Type, BindingFlags)` | `Microsoft.FSharp.Reflection.Impl` |

##### ``mapToFreshConsTail(FSharpList`1<!!0>, FSharpFunc`2<!!1, !!0>, FSharpList`1<!!1>)`` (`Microsoft.FSharp.Primitives.Basics.List`)

|     % |    Time | Caller                                             | Location                                                 |
| ----: | ------: | -------------------------------------------------- | -------------------------------------------------------- |
| 96.4% |   3.58s | `Invoke(BindingEnv)`                               | `Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965` |
|  3.6% | 132.6ms | ``map(FSharpFunc`2<!!0, !!1>, FSharpList`1<!!0>)`` | `Microsoft.FSharp.Primitives.Basics.List`                |

##### `get@472-1(BindingFlags, Type)` (`Microsoft.FSharp.Reflection.Impl`)

|      % |    Time | Caller                                  | Location                           |
| -----: | ------: | --------------------------------------- | ---------------------------------- |
| 100.0% | 792.0ms | `getTypeOfReprType(Type, BindingFlags)` | `Microsoft.FSharp.Reflection.Impl` |

##### `isUnionType(Type, BindingFlags)` (`Microsoft.FSharp.Reflection.Impl`)

|     % |    Time | Caller                               | Location                           |
| ----: | ------: | ------------------------------------ | ---------------------------------- |
| 95.7% | 684.9ms | `checkUnionType(Type, BindingFlags)` | `Microsoft.FSharp.Reflection.Impl` |
|  2.5% |  17.6ms | `get@472-1(BindingFlags, Type)`      | `Microsoft.FSharp.Reflection.Impl` |
|  1.9% |  13.5ms | `get@481-2(BindingFlags, Type)`      | `Microsoft.FSharp.Reflection.Impl` |

##### `get@481-2(BindingFlags, Type)` (`Microsoft.FSharp.Reflection.Impl`)

|      % |    Time | Caller                                                | Location                                 |
| -----: | ------: | ----------------------------------------------------- | ---------------------------------------- |
| 100.0% | 694.8ms | ``GetUnionCases(Type, FSharpOption`1<BindingFlags>)`` | `Microsoft.FSharp.Reflection.FSharpType` |

#### Callees

Callees with the largest contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `main(String[])` (`Profile`)

|     % |    Time | Callee                                                                                                                          | Location                                                 |
| ----: | ------: | ------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| 91.2% |  10.02s | `Invoke(BindingEnv)`                                                                                                            | `Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965` |
|  3.7% | 412.2ms | `Deserialize40(Type, Type[], Type[], FSharpExpr[], unsigned int8[])`                                                            | `Microsoft.FSharp.Quotations.FSharpExpr`                 |
|  3.2% | 350.1ms | `MakeGenericType(Type[])`                                                                                                       | `System.RuntimeType`                                     |
|  0.6% |  64.6ms | ``.ctor(FSharpOption`1<String>, FSharpOption`1<String>, FSharpOption`1<int32>, FSharpOption`1<IExiter>, FSharpOption`1<bool>)`` | ``Argu.ArgumentParser`1[System.__Canon]``                |
|  0.5% |  59.8ms | `deserialize(Type, Type[], Type[], FSharpExpr[], unsigned int8[])`                                                              | `Microsoft.FSharp.Quotations.PatternsModule`             |

##### `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`)

|     % |    Time | Callee                                                                               | Location                                                         |
| ----: | ------: | ------------------------------------------------------------------------------------ | ---------------------------------------------------------------- |
| 58.7% |   6.14s | ``Invoke(FSharpList`1<Type>, FSharpValueOption`1<int32>)``                           | `Microsoft.FSharp.Quotations.PatternsModule+u_constSpec@2137-10` |
| 36.1% |   3.77s | `MakeGenericType(Type[])`                                                            | `System.RuntimeType`                                             |
| 34.2% |   3.58s | ``mapToFreshConsTail(FSharpList`1<!!0>, FSharpFunc`2<!!1, !!0>, FSharpList`1<!!1>)`` | `Microsoft.FSharp.Primitives.Basics.List`                        |
|  3.8% | 400.9ms | ``Invoke(FSharpFunc`2<int32, Type>)``                                                | `Microsoft.FSharp.Quotations.PatternsModule+u_dtype@1905-3`      |
|  1.4% | 142.0ms | ``Invoke(FSharpFunc`2<int32, Type>)``                                                | `Microsoft.FSharp.Quotations.PatternsModule+b@1962-1`            |

##### `?!?` (`<unknown>`)

|     % |  Time | Callee                                               | Location                                  |
| ----: | ----: | ---------------------------------------------------- | ----------------------------------------- |
| 99.4% | 6.50s | `UNMANAGED_CODE_TIME`                                | `<unknown>`                               |
| <0.1% | 1.4ms | `GetTypeHelper(wchar*, RuntimeAssembly, bool, bool)` | `System.Reflection.TypeNameParser`        |
| <0.1% | 1.3ms | `.ctor()`                                            | `System.Configuration.AppSettingsSection` |

##### ``AddCustomAttributes(ListBuilder`1<Object>&, RuntimeModule, int32, RuntimeType, bool, ListBuilder`1<Object>)`` (`System.Reflection.CustomAttribute`)

|      % |  Time | Callee                                                                                                                                                                             | Location                              |
| -----: | ----: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- |
| 100.0% | 6.14s | ``FilterCustomAttributeRecord(MetadataToken, MetadataImport&, RuntimeModule, MetadataToken, RuntimeType, bool, ListBuilder`1<Object>&, RuntimeType&, IRuntimeMethodInfo&, bool&)`` | `System.Reflection.CustomAttribute`   |
|  <0.1% | 1.4ms | `?!?`                                                                                                                                                                              | `<unknown>`                           |
|  <0.1% | 1.4ms | `InvokePropertySetter(Object, BindingFlags, Binder, Object, CultureInfo)`                                                                                                          | `System.Reflection.MethodBaseInvoker` |

##### `GetCustomAttributes(RuntimeModule, int32, int32, RuntimeType)` (`System.Reflection.CustomAttribute`)

|      % |  Time | Callee                                                                                                          | Location                            |
| -----: | ----: | --------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| 100.0% | 6.14s | ``AddCustomAttributes(ListBuilder`1<Object>&, RuntimeModule, int32, RuntimeType, bool, ListBuilder`1<Object>)`` | `System.Reflection.CustomAttribute` |

##### `getUnionCaseInfo(Type, String)` (`Microsoft.FSharp.Quotations.PatternsModule`)

|      % |  Time | Callee                                                | Location                                   |
| -----: | ----: | ----------------------------------------------------- | ------------------------------------------ |
| 100.0% | 6.14s | ``GetUnionCases(Type, FSharpOption`1<BindingFlags>)`` | `Microsoft.FSharp.Reflection.FSharpType`   |
|  <0.1% | 2.7ms | ``TryFind(FSharpFunc`2<!!0, bool>, !!0[])``           | `Microsoft.FSharp.Collections.ArrayModule` |

##### ``Invoke(FSharpList`1<Type>, FSharpValueOption`1<int32>)`` (`Microsoft.FSharp.Quotations.PatternsModule+u_constSpec@2137-10`)

|     % |    Time | Callee                           | Location                                                          |
| ----: | ------: | -------------------------------- | ----------------------------------------------------------------- |
| 96.4% |   5.92s | `getUnionCaseInfo(Type, String)` | `Microsoft.FSharp.Quotations.PatternsModule`                      |
|  3.6% | 220.9ms | ``Invoke(FSharpList`1<Type>)``   | `Microsoft.FSharp.Quotations.PatternsModule+u_UnionCaseInfo@2017` |

##### ``GetUnionCases(Type, FSharpOption`1<BindingFlags>)`` (`Microsoft.FSharp.Reflection.FSharpType`)

|     % |    Time | Callee                                       | Location                           |
| ----: | ------: | -------------------------------------------- | ---------------------------------- |
| 77.5% |   4.76s | `getTypeOfReprType(Type, BindingFlags)`      | `Microsoft.FSharp.Reflection.Impl` |
| 11.3% | 694.8ms | `get@481-2(BindingFlags, Type)`              | `Microsoft.FSharp.Reflection.Impl` |
| 11.1% | 684.9ms | `checkUnionType(Type, BindingFlags)`         | `Microsoft.FSharp.Reflection.Impl` |
| <0.1% |   2.7ms | `getUnionTypeTagNameMap(Type, BindingFlags)` | `Microsoft.FSharp.Reflection.Impl` |

##### `GetCustomAttributes(RuntimeType, RuntimeType, bool)` (`System.Reflection.CustomAttribute`)

|      % |  Time | Callee                                                                       | Location                                  |
| -----: | ----: | ---------------------------------------------------------------------------- | ----------------------------------------- |
| 100.0% | 6.14s | `GetCustomAttributes(RuntimeModule, int32, int32, RuntimeType)`              | `System.Reflection.CustomAttribute`       |
|  <0.1% | 1.4ms | ``GetCustomAttributes(RuntimeType, RuntimeType, ListBuilder`1<Attribute>&)`` | `System.Reflection.PseudoCustomAttribute` |

##### ``FilterCustomAttributeRecord(MetadataToken, MetadataImport&, RuntimeModule, MetadataToken, RuntimeType, bool, ListBuilder`1<Object>&, RuntimeType&, IRuntimeMethodInfo&, bool&)`` (`System.Reflection.CustomAttribute`)

|     % |    Time | Callee                                                                 | Location                          |
| ----: | ------: | ---------------------------------------------------------------------- | --------------------------------- |
| 90.8% |   5.58s | `ResolveType(int32, Type[], Type[])`                                   | `System.Reflection.RuntimeModule` |
|  4.2% | 258.7ms | `ResolveMethodHandle(int32, RuntimeTypeHandle[], RuntimeTypeHandle[])` | `System.ModuleHandle`             |
|  3.2% | 195.7ms | `ResolveTypeHandle(int32, RuntimeTypeHandle[], RuntimeTypeHandle[])`   | `System.ModuleHandle`             |
|  1.8% | 110.0ms | `UNMANAGED_CODE_TIME`                                                  | `<unknown>`                       |

##### `ResolveTypeHandle(int32, RuntimeTypeHandle[], RuntimeTypeHandle[])` (`System.ModuleHandle`)

|      % |  Time | Callee | Location    |
| -----: | ----: | ------ | ----------- |
| 100.0% | 5.77s | `?!?`  | `<unknown>` |

##### `ResolveType(int32, Type[], Type[])` (`System.Reflection.RuntimeModule`)

|      % |  Time | Callee                                                               | Location              |
| -----: | ----: | -------------------------------------------------------------------- | --------------------- |
| 100.0% | 5.58s | `ResolveTypeHandle(int32, RuntimeTypeHandle[], RuntimeTypeHandle[])` | `System.ModuleHandle` |

##### `getTypeOfReprType(Type, BindingFlags)` (`Microsoft.FSharp.Reflection.Impl`)

|     % |    Time | Callee                                | Location                           |
| ----: | ------: | ------------------------------------- | ---------------------------------- |
| 83.4% |   3.97s | `isExceptionRepr(Type, BindingFlags)` | `Microsoft.FSharp.Reflection.Impl` |
| 16.6% | 792.0ms | `get@472-1(BindingFlags, Type)`       | `Microsoft.FSharp.Reflection.Impl` |
| <0.1% |   1.3ms | `.cctor()`                            | `Microsoft.FSharp.Reflection.Impl` |

##### `MakeGenericType(Type[])` (`System.RuntimeType`)

|     % |    Time | Callee                          | Location                   |
| ----: | ------: | ------------------------------- | -------------------------- |
| 85.3% |   3.99s | `UNMANAGED_CODE_TIME`           | `<unknown>`                |
| 10.8% | 505.6ms | `?!?`                           | `<unknown>`                |
|  3.3% | 154.5ms | `GetGenericArgumentsInternal()` | `System.RuntimeType`       |
|  0.1% |   6.8ms | `Instantiate(Type[])`           | `System.RuntimeTypeHandle` |
|  0.1% |   4.0ms | `Instantiate(RuntimeType)`      | `System.RuntimeTypeHandle` |

##### `isExceptionRepr(Type, BindingFlags)` (`Microsoft.FSharp.Reflection.Impl`)

|     % |    Time | Callee                                                | Location                            |
| ----: | ------: | ----------------------------------------------------- | ----------------------------------- |
| 95.7% |   3.80s | `GetCustomAttributes(RuntimeType, RuntimeType, bool)` | `System.Reflection.CustomAttribute` |
|  4.3% | 172.3ms | `tryFindSourceConstructFlagsOfType(Type)`             | `Microsoft.FSharp.Reflection.Impl`  |

##### ``mapToFreshConsTail(FSharpList`1<!!0>, FSharpFunc`2<!!1, !!0>, FSharpList`1<!!1>)`` (`Microsoft.FSharp.Primitives.Basics.List`)

|      % |  Time | Callee               | Location                                                 |
| -----: | ----: | -------------------- | -------------------------------------------------------- |
| 100.0% | 3.71s | `Invoke(BindingEnv)` | `Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965` |

##### `get@472-1(BindingFlags, Type)` (`Microsoft.FSharp.Reflection.Impl`)

|     % |    Time | Callee                                                | Location                            |
| ----: | ------: | ----------------------------------------------------- | ----------------------------------- |
| 97.8% | 774.4ms | `GetCustomAttributes(RuntimeType, RuntimeType, bool)` | `System.Reflection.CustomAttribute` |
|  2.2% |  17.6ms | `isUnionType(Type, BindingFlags)`                     | `Microsoft.FSharp.Reflection.Impl`  |

##### `isUnionType(Type, BindingFlags)` (`Microsoft.FSharp.Reflection.Impl`)

|     % |    Time | Callee                                                | Location                            |
| ----: | ------: | ----------------------------------------------------- | ----------------------------------- |
| 93.6% | 670.0ms | `GetCustomAttributes(RuntimeType, RuntimeType, bool)` | `System.Reflection.CustomAttribute` |
|  6.4% |  46.0ms | `tryFindSourceConstructFlagsOfType(Type)`             | `Microsoft.FSharp.Reflection.Impl`  |

##### `get@481-2(BindingFlags, Type)` (`Microsoft.FSharp.Reflection.Impl`)

|     % |    Time | Callee                                                | Location                            |
| ----: | ------: | ----------------------------------------------------- | ----------------------------------- |
| 98.1% | 681.3ms | `GetCustomAttributes(RuntimeType, RuntimeType, bool)` | `System.Reflection.CustomAttribute` |
|  1.9% |  13.5ms | `isUnionType(Type, BindingFlags)`                     | `Microsoft.FSharp.Reflection.Impl`  |

## Hottest call stacks

Call stacks with the most time spent in their leaf frame.

Common call stack: `main(String[])` (`Profile`)

|     % |    Time | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 32.7% |   3.60s | `UNMANAGED_CODE_TIME` ← `?!?` ← `ResolveTypeHandle(int32, RuntimeTypeHandle[], RuntimeTypeHandle[])` (`System.ModuleHandle`) ← `ResolveType(int32, Type[], Type[])` (`System.Reflection.RuntimeModule`) ← ``FilterCustomAttributeRecord(MetadataToken, MetadataImport&, RuntimeModule, MetadataToken, RuntimeType, bool, ListBuilder`1<Object>&, RuntimeType&, IRuntimeMethodInfo&, bool&)`` (`System.Reflection.CustomAttribute`) ← ``AddCustomAttributes(ListBuilder`1<Object>&, RuntimeModule, int32, RuntimeType, bool, ListBuilder`1<Object>)`` ← `GetCustomAttributes(RuntimeModule, int32, int32, RuntimeType)` ← `GetCustomAttributes(RuntimeType, RuntimeType, bool)` ← `isExceptionRepr(Type, BindingFlags)` (`Microsoft.FSharp.Reflection.Impl`) ← `getTypeOfReprType(Type, BindingFlags)` ← ``GetUnionCases(Type, FSharpOption`1<BindingFlags>)`` (`Microsoft.FSharp.Reflection.FSharpType`) ← `getUnionCaseInfo(Type, String)` (`Microsoft.FSharp.Quotations.PatternsModule`) ← ``Invoke(FSharpList`1<Type>, FSharpValueOption`1<int32>)`` (`Microsoft.FSharp.Quotations.PatternsModule+u_constSpec@2137-10`) ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 30.7% |   3.37s | `UNMANAGED_CODE_TIME` ← `MakeGenericType(Type[])` (`System.RuntimeType`) ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`) ← ``mapToFreshConsTail(FSharpList`1<!!0>, FSharpFunc`2<!!1, !!0>, FSharpList`1<!!1>)`` (`Microsoft.FSharp.Primitives.Basics.List`) ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  5.7% | 633.4ms | `UNMANAGED_CODE_TIME` ← `?!?` ← `ResolveTypeHandle(int32, RuntimeTypeHandle[], RuntimeTypeHandle[])` (`System.ModuleHandle`) ← `ResolveType(int32, Type[], Type[])` (`System.Reflection.RuntimeModule`) ← ``FilterCustomAttributeRecord(MetadataToken, MetadataImport&, RuntimeModule, MetadataToken, RuntimeType, bool, ListBuilder`1<Object>&, RuntimeType&, IRuntimeMethodInfo&, bool&)`` (`System.Reflection.CustomAttribute`) ← ``AddCustomAttributes(ListBuilder`1<Object>&, RuntimeModule, int32, RuntimeType, bool, ListBuilder`1<Object>)`` ← `GetCustomAttributes(RuntimeModule, int32, int32, RuntimeType)` ← `GetCustomAttributes(RuntimeType, RuntimeType, bool)` ← `get@472-1(BindingFlags, Type)` (`Microsoft.FSharp.Reflection.Impl`) ← `getTypeOfReprType(Type, BindingFlags)` ← ``GetUnionCases(Type, FSharpOption`1<BindingFlags>)`` (`Microsoft.FSharp.Reflection.FSharpType`) ← `getUnionCaseInfo(Type, String)` (`Microsoft.FSharp.Quotations.PatternsModule`) ← ``Invoke(FSharpList`1<Type>, FSharpValueOption`1<int32>)`` (`Microsoft.FSharp.Quotations.PatternsModule+u_constSpec@2137-10`) ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  5.0% | 550.9ms | `UNMANAGED_CODE_TIME` ← `?!?` ← `ResolveTypeHandle(int32, RuntimeTypeHandle[], RuntimeTypeHandle[])` (`System.ModuleHandle`) ← `ResolveType(int32, Type[], Type[])` (`System.Reflection.RuntimeModule`) ← ``FilterCustomAttributeRecord(MetadataToken, MetadataImport&, RuntimeModule, MetadataToken, RuntimeType, bool, ListBuilder`1<Object>&, RuntimeType&, IRuntimeMethodInfo&, bool&)`` (`System.Reflection.CustomAttribute`) ← ``AddCustomAttributes(ListBuilder`1<Object>&, RuntimeModule, int32, RuntimeType, bool, ListBuilder`1<Object>)`` ← `GetCustomAttributes(RuntimeModule, int32, int32, RuntimeType)` ← `GetCustomAttributes(RuntimeType, RuntimeType, bool)` ← `isUnionType(Type, BindingFlags)` (`Microsoft.FSharp.Reflection.Impl`) ← `checkUnionType(Type, BindingFlags)` ← ``GetUnionCases(Type, FSharpOption`1<BindingFlags>)`` (`Microsoft.FSharp.Reflection.FSharpType`) ← `getUnionCaseInfo(Type, String)` (`Microsoft.FSharp.Quotations.PatternsModule`) ← ``Invoke(FSharpList`1<Type>, FSharpValueOption`1<int32>)`` (`Microsoft.FSharp.Quotations.PatternsModule+u_constSpec@2137-10`) ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  4.9% | 545.2ms | `UNMANAGED_CODE_TIME` ← `?!?` ← `ResolveTypeHandle(int32, RuntimeTypeHandle[], RuntimeTypeHandle[])` (`System.ModuleHandle`) ← `ResolveType(int32, Type[], Type[])` (`System.Reflection.RuntimeModule`) ← ``FilterCustomAttributeRecord(MetadataToken, MetadataImport&, RuntimeModule, MetadataToken, RuntimeType, bool, ListBuilder`1<Object>&, RuntimeType&, IRuntimeMethodInfo&, bool&)`` (`System.Reflection.CustomAttribute`) ← ``AddCustomAttributes(ListBuilder`1<Object>&, RuntimeModule, int32, RuntimeType, bool, ListBuilder`1<Object>)`` ← `GetCustomAttributes(RuntimeModule, int32, int32, RuntimeType)` ← `GetCustomAttributes(RuntimeType, RuntimeType, bool)` ← `get@481-2(BindingFlags, Type)` (`Microsoft.FSharp.Reflection.Impl`) ← ``GetUnionCases(Type, FSharpOption`1<BindingFlags>)`` (`Microsoft.FSharp.Reflection.FSharpType`) ← `getUnionCaseInfo(Type, String)` (`Microsoft.FSharp.Quotations.PatternsModule`) ← ``Invoke(FSharpList`1<Type>, FSharpValueOption`1<int32>)`` (`Microsoft.FSharp.Quotations.PatternsModule+u_constSpec@2137-10`) ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  2.4% | 264.1ms | `UNMANAGED_CODE_TIME` ← `MakeGenericType(Type[])` (`System.RuntimeType`) ← ``Invoke(FSharpFunc`2<int32, Type>)`` (`Microsoft.FSharp.Quotations.PatternsModule+u_dtype@1905-3`) ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  1.9% | 204.3ms | `UNMANAGED_CODE_TIME` ← `MakeGenericType(Type[])` (`System.RuntimeType`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  1.4% | 152.9ms | `UNMANAGED_CODE_TIME` ← `?!?` ← `MakeGenericType(Type[])` (`System.RuntimeType`) ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`) ← ``mapToFreshConsTail(FSharpList`1<!!0>, FSharpFunc`2<!!1, !!0>, FSharpList`1<!!1>)`` (`Microsoft.FSharp.Primitives.Basics.List`) ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  1.3% | 139.5ms | `UNMANAGED_CODE_TIME` ← `?!?` ← `MakeGenericType(Type[])` (`System.RuntimeType`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  1.2% | 131.4ms | `UNMANAGED_CODE_TIME` ← `?!?` ← `MakeGenericType(Type[])` (`System.RuntimeType`) ← ``Invoke(FSharpFunc`2<int32, Type>)`` (`Microsoft.FSharp.Quotations.PatternsModule+u_dtype@1905-3`) ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  1.0% | 115.1ms | `UNMANAGED_CODE_TIME` ← `?!?` ← `ResolveTypeHandle(int32, RuntimeTypeHandle[], RuntimeTypeHandle[])` (`System.ModuleHandle`) ← `ResolveType(int32, Type[], Type[])` (`System.Reflection.RuntimeModule`) ← ``FilterCustomAttributeRecord(MetadataToken, MetadataImport&, RuntimeModule, MetadataToken, RuntimeType, bool, ListBuilder`1<Object>&, RuntimeType&, IRuntimeMethodInfo&, bool&)`` (`System.Reflection.CustomAttribute`) ← ``AddCustomAttributes(ListBuilder`1<Object>&, RuntimeModule, int32, RuntimeType, bool, ListBuilder`1<Object>)`` ← `GetCustomAttributes(RuntimeModule, int32, int32, RuntimeType)` ← `GetCustomAttributes(RuntimeType, RuntimeType, bool)` ← `tryFindCompilationMappingAttributeFromType(Type)` (`Microsoft.FSharp.Reflection.Impl`) ← `tryFindSourceConstructFlagsOfType(Type)` ← `isExceptionRepr(Type, BindingFlags)` ← `getTypeOfReprType(Type, BindingFlags)` ← ``GetUnionCases(Type, FSharpOption`1<BindingFlags>)`` (`Microsoft.FSharp.Reflection.FSharpType`) ← `getUnionCaseInfo(Type, String)` (`Microsoft.FSharp.Quotations.PatternsModule`) ← ``Invoke(FSharpList`1<Type>)`` (`Microsoft.FSharp.Quotations.PatternsModule+u_UnionCaseInfo@2017`) ← ``Invoke(FSharpList`1<Type>, FSharpValueOption`1<int32>)`` (`Microsoft.FSharp.Quotations.PatternsModule+u_constSpec@2137-10`) ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`) ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1983-2`) ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1994-5`) ← `deserialize(Type, Type[], Type[], FSharpExpr[], unsigned int8[])` (`Microsoft.FSharp.Quotations.PatternsModule`) ← `Deserialize40(Type, Type[], Type[], FSharpExpr[], unsigned int8[])` (`Microsoft.FSharp.Quotations.FSharpExpr`) |
|  1.0% | 112.3ms | `UNMANAGED_CODE_TIME` ← `MakeGenericType(Type[])` (`System.RuntimeType`) ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  1.0% | 111.2ms | `UNMANAGED_CODE_TIME` ← `GetInstantiationInternal()` (`System.RuntimeTypeHandle`) ← `GetGenericArgumentsInternal()` (`System.RuntimeType`) ← `MakeGenericType(Type[])` ← ``map(FSharpFunc`2<!!0, !!1>, FSharpList`1<!!0>)`` (`Microsoft.FSharp.Primitives.Basics.List`) ← ``appL(FSharpList`1<FSharpFunc`2<!!0, !!1>>, !!0)`` (`Microsoft.FSharp.Quotations.PatternsModule`) ← ``Invoke(FSharpFunc`2<int32, Type>)`` (`Microsoft.FSharp.Quotations.PatternsModule+b@1962-1`) ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`) ← ``mapToFreshConsTail(FSharpList`1<!!0>, FSharpFunc`2<!!1, !!0>, FSharpList`1<!!1>)`` (`Microsoft.FSharp.Primitives.Basics.List`) ← ``map(FSharpFunc`2<!!0, !!1>, FSharpList`1<!!0>)`` ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`) ← ``map(FSharpFunc`2<!!0, !!1>, FSharpList`1<!!0>)`` (`Microsoft.FSharp.Primitives.Basics.List`) ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1994-5`) ← `deserialize(Type, Type[], Type[], FSharpExpr[], unsigned int8[])` (`Microsoft.FSharp.Quotations.PatternsModule`) ← `Deserialize40(Type, Type[], Type[], FSharpExpr[], unsigned int8[])` (`Microsoft.FSharp.Quotations.FSharpExpr`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  0.7% |  81.9ms | `UNMANAGED_CODE_TIME` ← `?!?` ← `MakeGenericType(Type[])` (`System.RuntimeType`) ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  0.7% |  80.7ms | `UNMANAGED_CODE_TIME` ← `?!?` ← ``ResolveMethodHandleInternal(RuntimeModule, int32, ReadOnlySpan`1<int>, ReadOnlySpan`1<int>)`` (`System.ModuleHandle`) ← `ResolveMethodHandle(int32, RuntimeTypeHandle[], RuntimeTypeHandle[])` ← ``FilterCustomAttributeRecord(MetadataToken, MetadataImport&, RuntimeModule, MetadataToken, RuntimeType, bool, ListBuilder`1<Object>&, RuntimeType&, IRuntimeMethodInfo&, bool&)`` (`System.Reflection.CustomAttribute`) ← ``AddCustomAttributes(ListBuilder`1<Object>&, RuntimeModule, int32, RuntimeType, bool, ListBuilder`1<Object>)`` ← `GetCustomAttributes(RuntimeModule, int32, int32, RuntimeType)` ← `GetCustomAttributes(RuntimeType, RuntimeType, bool)` ← `isExceptionRepr(Type, BindingFlags)` (`Microsoft.FSharp.Reflection.Impl`) ← `getTypeOfReprType(Type, BindingFlags)` ← ``GetUnionCases(Type, FSharpOption`1<BindingFlags>)`` (`Microsoft.FSharp.Reflection.FSharpType`) ← `getUnionCaseInfo(Type, String)` (`Microsoft.FSharp.Quotations.PatternsModule`) ← ``Invoke(FSharpList`1<Type>, FSharpValueOption`1<int32>)`` (`Microsoft.FSharp.Quotations.PatternsModule+u_constSpec@2137-10`) ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  0.6% |  67.4ms | `UNMANAGED_CODE_TIME` ← `?!?` ← `ResolveTypeHandle(int32, RuntimeTypeHandle[], RuntimeTypeHandle[])` (`System.ModuleHandle`) ← ``FilterCustomAttributeRecord(MetadataToken, MetadataImport&, RuntimeModule, MetadataToken, RuntimeType, bool, ListBuilder`1<Object>&, RuntimeType&, IRuntimeMethodInfo&, bool&)`` (`System.Reflection.CustomAttribute`) ← ``AddCustomAttributes(ListBuilder`1<Object>&, RuntimeModule, int32, RuntimeType, bool, ListBuilder`1<Object>)`` ← `GetCustomAttributes(RuntimeModule, int32, int32, RuntimeType)` ← `GetCustomAttributes(RuntimeType, RuntimeType, bool)` ← `isExceptionRepr(Type, BindingFlags)` (`Microsoft.FSharp.Reflection.Impl`) ← `getTypeOfReprType(Type, BindingFlags)` ← ``GetUnionCases(Type, FSharpOption`1<BindingFlags>)`` (`Microsoft.FSharp.Reflection.FSharpType`) ← `getUnionCaseInfo(Type, String)` (`Microsoft.FSharp.Quotations.PatternsModule`) ← ``Invoke(FSharpList`1<Type>, FSharpValueOption`1<int32>)`` (`Microsoft.FSharp.Quotations.PatternsModule+u_constSpec@2137-10`) ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  0.6% |  62.9ms | `UNMANAGED_CODE_TIME` ← `?!?` ← ``ResolveMethodHandleInternal(RuntimeModule, int32, ReadOnlySpan`1<int>, ReadOnlySpan`1<int>)`` (`System.ModuleHandle`) ← `ResolveMethodHandle(int32, RuntimeTypeHandle[], RuntimeTypeHandle[])` ← ``FilterCustomAttributeRecord(MetadataToken, MetadataImport&, RuntimeModule, MetadataToken, RuntimeType, bool, ListBuilder`1<Object>&, RuntimeType&, IRuntimeMethodInfo&, bool&)`` (`System.Reflection.CustomAttribute`) ← ``AddCustomAttributes(ListBuilder`1<Object>&, RuntimeModule, int32, RuntimeType, bool, ListBuilder`1<Object>)`` ← `GetCustomAttributes(RuntimeModule, int32, int32, RuntimeType)` ← `GetCustomAttributes(RuntimeType, RuntimeType, bool)` ← `get@472-1(BindingFlags, Type)` (`Microsoft.FSharp.Reflection.Impl`) ← `getTypeOfReprType(Type, BindingFlags)` ← ``GetUnionCases(Type, FSharpOption`1<BindingFlags>)`` (`Microsoft.FSharp.Reflection.FSharpType`) ← `getUnionCaseInfo(Type, String)` (`Microsoft.FSharp.Quotations.PatternsModule`) ← ``Invoke(FSharpList`1<Type>, FSharpValueOption`1<int32>)`` (`Microsoft.FSharp.Quotations.PatternsModule+u_constSpec@2137-10`) ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  0.5% |  60.4ms | `UNMANAGED_CODE_TIME` ← `?!?` ← ``ResolveMethodHandleInternal(RuntimeModule, int32, ReadOnlySpan`1<int>, ReadOnlySpan`1<int>)`` (`System.ModuleHandle`) ← `ResolveMethodHandle(int32, RuntimeTypeHandle[], RuntimeTypeHandle[])` ← ``FilterCustomAttributeRecord(MetadataToken, MetadataImport&, RuntimeModule, MetadataToken, RuntimeType, bool, ListBuilder`1<Object>&, RuntimeType&, IRuntimeMethodInfo&, bool&)`` (`System.Reflection.CustomAttribute`) ← ``AddCustomAttributes(ListBuilder`1<Object>&, RuntimeModule, int32, RuntimeType, bool, ListBuilder`1<Object>)`` ← `GetCustomAttributes(RuntimeModule, int32, int32, RuntimeType)` ← `GetCustomAttributes(RuntimeType, RuntimeType, bool)` ← `get@481-2(BindingFlags, Type)` (`Microsoft.FSharp.Reflection.Impl`) ← ``GetUnionCases(Type, FSharpOption`1<BindingFlags>)`` (`Microsoft.FSharp.Reflection.FSharpType`) ← `getUnionCaseInfo(Type, String)` (`Microsoft.FSharp.Quotations.PatternsModule`) ← ``Invoke(FSharpList`1<Type>, FSharpValueOption`1<int32>)`` (`Microsoft.FSharp.Quotations.PatternsModule+u_constSpec@2137-10`) ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  0.4% |  49.3ms | `UNMANAGED_CODE_TIME` ← `?!?` ← ``ResolveMethodHandleInternal(RuntimeModule, int32, ReadOnlySpan`1<int>, ReadOnlySpan`1<int>)`` (`System.ModuleHandle`) ← `ResolveMethodHandle(int32, RuntimeTypeHandle[], RuntimeTypeHandle[])` ← ``FilterCustomAttributeRecord(MetadataToken, MetadataImport&, RuntimeModule, MetadataToken, RuntimeType, bool, ListBuilder`1<Object>&, RuntimeType&, IRuntimeMethodInfo&, bool&)`` (`System.Reflection.CustomAttribute`) ← ``AddCustomAttributes(ListBuilder`1<Object>&, RuntimeModule, int32, RuntimeType, bool, ListBuilder`1<Object>)`` ← `GetCustomAttributes(RuntimeModule, int32, int32, RuntimeType)` ← `GetCustomAttributes(RuntimeType, RuntimeType, bool)` ← `isUnionType(Type, BindingFlags)` (`Microsoft.FSharp.Reflection.Impl`) ← `checkUnionType(Type, BindingFlags)` ← ``GetUnionCases(Type, FSharpOption`1<BindingFlags>)`` (`Microsoft.FSharp.Reflection.FSharpType`) ← `getUnionCaseInfo(Type, String)` (`Microsoft.FSharp.Quotations.PatternsModule`) ← ``Invoke(FSharpList`1<Type>, FSharpValueOption`1<int32>)`` (`Microsoft.FSharp.Quotations.PatternsModule+u_constSpec@2137-10`) ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  0.4% |  47.3ms | `UNMANAGED_CODE_TIME` ← `?!?` ← `ResolveTypeHandle(int32, RuntimeTypeHandle[], RuntimeTypeHandle[])` (`System.ModuleHandle`) ← ``FilterCustomAttributeRecord(MetadataToken, MetadataImport&, RuntimeModule, MetadataToken, RuntimeType, bool, ListBuilder`1<Object>&, RuntimeType&, IRuntimeMethodInfo&, bool&)`` (`System.Reflection.CustomAttribute`) ← ``AddCustomAttributes(ListBuilder`1<Object>&, RuntimeModule, int32, RuntimeType, bool, ListBuilder`1<Object>)`` ← `GetCustomAttributes(RuntimeModule, int32, int32, RuntimeType)` ← `GetCustomAttributes(RuntimeType, RuntimeType, bool)` ← `get@481-2(BindingFlags, Type)` (`Microsoft.FSharp.Reflection.Impl`) ← ``GetUnionCases(Type, FSharpOption`1<BindingFlags>)`` (`Microsoft.FSharp.Reflection.FSharpType`) ← `getUnionCaseInfo(Type, String)` (`Microsoft.FSharp.Quotations.PatternsModule`) ← ``Invoke(FSharpList`1<Type>, FSharpValueOption`1<int32>)`` (`Microsoft.FSharp.Quotations.PatternsModule+u_constSpec@2137-10`) ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |

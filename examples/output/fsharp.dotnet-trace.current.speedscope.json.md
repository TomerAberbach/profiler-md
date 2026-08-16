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

|     % |   Time | Function                                                                                  | Location                                                                     |
| ----: | -----: | ----------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| 98.8% | 11.11s | `UNMANAGED_CODE_TIME`                                                                     | `<unknown>`                                                                  |
|  0.5% | 56.3ms | `?!?`                                                                                     | `<unknown>`                                                                  |
|  0.2% | 25.6ms | `GetInstantiationInternal()`                                                              | `System.RuntimeTypeHandle`                                                   |
|  0.1% | 13.3ms | `MakeGenericType(Type[])`                                                                 | `System.RuntimeType`                                                         |
| <0.1% |  5.0ms | `getUnionTypeTagNameMap(Type, BindingFlags)`                                              | `Microsoft.FSharp.Reflection.Impl`                                           |
| <0.1% |  4.0ms | `u_dtype(InputState)`                                                                     | `Microsoft.FSharp.Quotations.PatternsModule`                                 |
| <0.1% |  2.7ms | `u_NamedType(InputState)`                                                                 | `Microsoft.FSharp.Quotations.PatternsModule`                                 |
| <0.1% |  2.7ms | `ReadBytes(int32)`                                                                        | `Microsoft.FSharp.Quotations.PatternsModule+ByteStream`                      |
| <0.1% |  2.6ms | `get_Item(Object)`                                                                        | `System.Collections.Hashtable`                                               |
| <0.1% |  1.4ms | ``NewValueOp(Object, Type, FSharpOption`1<String>)``                                      | `Microsoft.FSharp.Quotations.ExprConstInfo`                                  |
| <0.1% |  1.4ms | ``TryParseBinaryIntegerStyle(ReadOnlySpan`1<!!0>, NumberStyles, NumberFormatInfo, !!1&)`` | `System.Number`                                                              |
| <0.1% |  1.4ms | ``u_list_aux(FSharpFunc`2<InputState, !!0>, FSharpList`1<!!0>, InputState)``              | `Microsoft.FSharp.Quotations.PatternsModule+SimpleUnpickle`                  |
| <0.1% |  1.4ms | `ToArray()`                                                                               | ``System.Collections.Generic.List`1[System.__Canon]``                        |
| <0.1% |  1.3ms | `ExecutionAndPublication(LazyHelper, bool)`                                               | ``System.Lazy`1[System.__Canon]``                                            |
| <0.1% |  1.3ms | ``ofArray(IComparer`1<!!0>, Tuple`2<!!0, !!1>[])``                                        | `Microsoft.FSharp.Collections.MapTreeModule`                                 |
| <0.1% |  1.3ms | `Invoke(InputState)`                                                                      | `Microsoft.FSharp.Quotations.PatternsModule+b@1962`                          |
| <0.1% |  1.3ms | ``unpickleObj(Assembly, Type[], FSharpFunc`2<InputState, !!0>, unsigned int8[])``         | `Microsoft.FSharp.Quotations.PatternsModule+SimpleUnpickle`                  |
| <0.1% |  1.3ms | `u_Expr(InputState)`                                                                      | `Microsoft.FSharp.Quotations.PatternsModule`                                 |
| <0.1% |  1.3ms | `Invoke(InputState)`                                                                      | `Microsoft.FSharp.Quotations.PatternsModule+SimpleUnpickle+unpickleObj@1810` |
| <0.1% |  1.3ms | `u_tyconstSpec(InputState)`                                                               | `Microsoft.FSharp.Quotations.PatternsModule`                                 |

#### Categories

##### Native

|     % |   Time | Function              | Location    |
| ----: | -----: | --------------------- | ----------- |
| 98.8% | 11.11s | `UNMANAGED_CODE_TIME` | `<unknown>` |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `UNMANAGED_CODE_TIME` (`<unknown>`)

|     % |    Time | Caller                                                                                                                                                                             | Location                            |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| 60.2% |   6.68s | `?!?`                                                                                                                                                                              | `<unknown>`                         |
| 36.3% |   4.02s | `MakeGenericType(Type[])`                                                                                                                                                          | `System.RuntimeType`                |
|  1.0% | 110.9ms | ``FilterCustomAttributeRecord(MetadataToken, MetadataImport&, RuntimeModule, MetadataToken, RuntimeType, bool, ListBuilder`1<Object>&, RuntimeType&, IRuntimeMethodInfo&, bool&)`` | `System.Reflection.CustomAttribute` |
|  1.0% | 106.8ms | `GetInstantiationInternal()`                                                                                                                                                       | `System.RuntimeTypeHandle`          |
|  0.1% |  12.1ms | `Instantiate(Type[])`                                                                                                                                                              | `System.RuntimeTypeHandle`          |

##### `?!?` (`<unknown>`)

|      % |   Time | Caller                                                               | Location              |
| -----: | -----: | -------------------------------------------------------------------- | --------------------- |
| 100.0% | 56.3ms | `ResolveTypeHandle(int32, RuntimeTypeHandle[], RuntimeTypeHandle[])` | `System.ModuleHandle` |

##### `GetInstantiationInternal()` (`System.RuntimeTypeHandle`)

|      % |   Time | Caller                          | Location             |
| -----: | -----: | ------------------------------- | -------------------- |
| 100.0% | 25.6ms | `GetGenericArgumentsInternal()` | `System.RuntimeType` |

##### `MakeGenericType(Type[])` (`System.RuntimeType`)

|     % |   Time | Caller                                             | Location                                                    |
| ----: | -----: | -------------------------------------------------- | ----------------------------------------------------------- |
| 89.9% | 11.9ms | `Invoke(BindingEnv)`                               | `Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`    |
| 10.1% |  1.3ms | `main(String[])`                                   | `Profile`                                                   |
| <0.1% | <0.1µs | ``Invoke(FSharpFunc`2<int32, Type>)``              | `Microsoft.FSharp.Quotations.PatternsModule+u_dtype@1905-3` |
| <0.1% | <0.1µs | ``map(FSharpFunc`2<!!0, !!1>, FSharpList`1<!!0>)`` | `Microsoft.FSharp.Primitives.Basics.List`                   |

##### `getUnionTypeTagNameMap(Type, BindingFlags)` (`Microsoft.FSharp.Reflection.Impl`)

|      % |  Time | Caller                                     | Location                           |
| -----: | ----: | ------------------------------------------ | ---------------------------------- |
| 100.0% | 5.0ms | `getUnionTagConverter(Type, BindingFlags)` | `Microsoft.FSharp.Reflection.Impl` |

##### `u_dtype(InputState)` (`Microsoft.FSharp.Quotations.PatternsModule`)

|     % |  Time | Caller                                                                       | Location                                                    |
| ----: | ----: | ---------------------------------------------------------------------------- | ----------------------------------------------------------- |
| 66.5% | 2.7ms | ``u_list_aux(FSharpFunc`2<InputState, !!0>, FSharpList`1<!!0>, InputState)`` | `Microsoft.FSharp.Quotations.PatternsModule+SimpleUnpickle` |
| 33.5% | 1.3ms | `Invoke(InputState)`                                                         | `Microsoft.FSharp.Quotations.PatternsModule+u_dtype@1905-1` |

##### `u_NamedType(InputState)` (`Microsoft.FSharp.Quotations.PatternsModule`)

|      % |  Time | Caller                      | Location                                     |
| -----: | ----: | --------------------------- | -------------------------------------------- |
| 100.0% | 2.7ms | `u_tyconstSpec(InputState)` | `Microsoft.FSharp.Quotations.PatternsModule` |

##### `ReadBytes(int32)` (`Microsoft.FSharp.Quotations.PatternsModule+ByteStream`)

|      % |  Time | Caller                                                                            | Location                                                    |
| -----: | ----: | --------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| 100.0% | 2.7ms | ``unpickleObj(Assembly, Type[], FSharpFunc`2<InputState, !!0>, unsigned int8[])`` | `Microsoft.FSharp.Quotations.PatternsModule+SimpleUnpickle` |

##### `get_Item(Object)` (`System.Collections.Hashtable`)

|      % |  Time | Caller                                                       | Location              |
| -----: | ----: | ------------------------------------------------------------ | --------------------- |
| 100.0% | 2.6ms | `parseKeyValuePartial(KeyValueParseState, UnionCaseArgInfo)` | `Argu.KeyValueParser` |

##### ``NewValueOp(Object, Type, FSharpOption`1<String>)`` (`Microsoft.FSharp.Quotations.ExprConstInfo`)

|      % |  Time | Caller                        | Location                                     |
| -----: | ----: | ----------------------------- | -------------------------------------------- |
| 100.0% | 1.4ms | `mkLiftedValueOpG(!!0, Type)` | `Microsoft.FSharp.Quotations.PatternsModule` |

##### ``TryParseBinaryIntegerStyle(ReadOnlySpan`1<!!0>, NumberStyles, NumberFormatInfo, !!1&)`` (`System.Number`)

|      % |  Time | Caller                     | Location       |
| -----: | ----: | -------------------------- | -------------- |
| 100.0% | 1.4ms | `TryParse(String, int32&)` | `System.Int32` |

##### ``u_list_aux(FSharpFunc`2<InputState, !!0>, FSharpList`1<!!0>, InputState)`` (`Microsoft.FSharp.Quotations.PatternsModule+SimpleUnpickle`)

|      % |  Time | Caller               | Location                                     |
| -----: | ----: | -------------------- | -------------------------------------------- |
| 100.0% | 1.4ms | `u_Expr(InputState)` | `Microsoft.FSharp.Quotations.PatternsModule` |

##### `ToArray()` (``System.Collections.Generic.List`1[System.__Canon]``)

|      % |  Time | Caller                  | Location                                  |
| -----: | ----: | ----------------------- | ----------------------------------------- |
| 100.0% | 1.4ms | `ToUnionParseResults()` | `Argu.CliParser+CliParseResultAggregator` |

##### `ExecutionAndPublication(LazyHelper, bool)` (``System.Lazy`1[System.__Canon]``)

|      % |  Time | Caller          | Location                          |
| -----: | ----: | --------------- | --------------------------------- |
| 100.0% | 1.3ms | `CreateValue()` | ``System.Lazy`1[System.__Canon]`` |

##### ``ofArray(IComparer`1<!!0>, Tuple`2<!!0, !!1>[])`` (`Microsoft.FSharp.Collections.MapTreeModule`)

|      % |  Time | Caller                                                        | Location                                     |
| -----: | ----: | ------------------------------------------------------------- | -------------------------------------------- |
| 100.0% | 1.3ms | ``ofSeq(IComparer`1<!!0>, IEnumerable`1<Tuple`2<!!0, !!1>>)`` | `Microsoft.FSharp.Collections.MapTreeModule` |

##### `Invoke(InputState)` (`Microsoft.FSharp.Quotations.PatternsModule+b@1962`)

|      % |  Time | Caller                                                                       | Location                                                    |
| -----: | ----: | ---------------------------------------------------------------------------- | ----------------------------------------------------------- |
| 100.0% | 1.3ms | ``u_list_aux(FSharpFunc`2<InputState, !!0>, FSharpList`1<!!0>, InputState)`` | `Microsoft.FSharp.Quotations.PatternsModule+SimpleUnpickle` |

##### ``unpickleObj(Assembly, Type[], FSharpFunc`2<InputState, !!0>, unsigned int8[])`` (`Microsoft.FSharp.Quotations.PatternsModule+SimpleUnpickle`)

|      % |  Time | Caller           | Location  |
| -----: | ----: | ---------------- | --------- |
| 100.0% | 1.3ms | `main(String[])` | `Profile` |

##### `u_Expr(InputState)` (`Microsoft.FSharp.Quotations.PatternsModule`)

|      % |  Time | Caller               | Location                                                 |
| -----: | ----: | -------------------- | -------------------------------------------------------- |
| 100.0% | 1.3ms | `Invoke(InputState)` | `Microsoft.FSharp.Quotations.PatternsModule+args@1963-1` |

##### `Invoke(InputState)` (`Microsoft.FSharp.Quotations.PatternsModule+SimpleUnpickle+unpickleObj@1810`)

|      % |  Time | Caller                                                                       | Location                                                    |
| -----: | ----: | ---------------------------------------------------------------------------- | ----------------------------------------------------------- |
| 100.0% | 1.3ms | ``u_list_aux(FSharpFunc`2<InputState, !!0>, FSharpList`1<!!0>, InputState)`` | `Microsoft.FSharp.Quotations.PatternsModule+SimpleUnpickle` |

##### `u_tyconstSpec(InputState)` (`Microsoft.FSharp.Quotations.PatternsModule`)

|      % |  Time | Caller                | Location                                     |
| -----: | ----: | --------------------- | -------------------------------------------- |
| 100.0% | 1.3ms | `u_dtype(InputState)` | `Microsoft.FSharp.Quotations.PatternsModule` |

### Total time

Functions ranked by total time spent in the function and all its callees.

|     % |    Time | Function                                                                                                                                                                           | Location                                                         |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| 99.9% |  11.22s | `main(String[])`                                                                                                                                                                   | `Profile`                                                        |
| 98.8% |  11.11s | `UNMANAGED_CODE_TIME`                                                                                                                                                              | `<unknown>`                                                      |
| 95.1% |  10.68s | `Invoke(BindingEnv)`                                                                                                                                                               | `Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`         |
| 60.0% |   6.74s | `?!?`                                                                                                                                                                              | `<unknown>`                                                      |
| 56.1% |   6.30s | `getUnionCaseInfo(Type, String)`                                                                                                                                                   | `Microsoft.FSharp.Quotations.PatternsModule`                     |
| 56.1% |   6.30s | ``Invoke(FSharpList`1<Type>, FSharpValueOption`1<int32>)``                                                                                                                         | `Microsoft.FSharp.Quotations.PatternsModule+u_constSpec@2137-10` |
| 56.1% |   6.30s | `GetCustomAttributes(RuntimeType, RuntimeType, bool)`                                                                                                                              | `System.Reflection.CustomAttribute`                              |
| 56.1% |   6.30s | `GetCustomAttributes(RuntimeModule, int32, int32, RuntimeType)`                                                                                                                    | `System.Reflection.CustomAttribute`                              |
| 56.1% |   6.30s | ``GetUnionCases(Type, FSharpOption`1<BindingFlags>)``                                                                                                                              | `Microsoft.FSharp.Reflection.FSharpType`                         |
| 56.1% |   6.30s | ``AddCustomAttributes(ListBuilder`1<Object>&, RuntimeModule, int32, RuntimeType, bool, ListBuilder`1<Object>)``                                                                    | `System.Reflection.CustomAttribute`                              |
| 56.0% |   6.30s | ``FilterCustomAttributeRecord(MetadataToken, MetadataImport&, RuntimeModule, MetadataToken, RuntimeType, bool, ListBuilder`1<Object>&, RuntimeType&, IRuntimeMethodInfo&, bool&)`` | `System.Reflection.CustomAttribute`                              |
| 52.7% |   5.92s | `ResolveTypeHandle(int32, RuntimeTypeHandle[], RuntimeTypeHandle[])`                                                                                                               | `System.ModuleHandle`                                            |
| 50.8% |   5.71s | `ResolveType(int32, Type[], Type[])`                                                                                                                                               | `System.Reflection.RuntimeModule`                                |
| 43.4% |   4.87s | `getTypeOfReprType(Type, BindingFlags)`                                                                                                                                            | `Microsoft.FSharp.Reflection.Impl`                               |
| 42.2% |   4.73s | `MakeGenericType(Type[])`                                                                                                                                                          | `System.RuntimeType`                                             |
| 35.9% |   4.03s | `isExceptionRepr(Type, BindingFlags)`                                                                                                                                              | `Microsoft.FSharp.Reflection.Impl`                               |
| 33.0% |   3.71s | ``mapToFreshConsTail(FSharpList`1<!!0>, FSharpFunc`2<!!1, !!0>, FSharpList`1<!!1>)``                                                                                               | `Microsoft.FSharp.Primitives.Basics.List`                        |
|  7.5% | 841.5ms | `get@472-1(BindingFlags, Type)`                                                                                                                                                    | `Microsoft.FSharp.Reflection.Impl`                               |
|  6.7% | 749.4ms | `isUnionType(Type, BindingFlags)`                                                                                                                                                  | `Microsoft.FSharp.Reflection.Impl`                               |
|  6.4% | 722.2ms | `checkUnionType(Type, BindingFlags)`                                                                                                                                               | `Microsoft.FSharp.Reflection.Impl`                               |

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

|     % |    Time | Callee                                                                               | Location                                                         |
| ----: | ------: | ------------------------------------------------------------------------------------ | ---------------------------------------------------------------- |
| 59.0% |   6.30s | ``Invoke(FSharpList`1<Type>, FSharpValueOption`1<int32>)``                           | `Microsoft.FSharp.Quotations.PatternsModule+u_constSpec@2137-10` |
| 35.5% |   3.79s | `MakeGenericType(Type[])`                                                            | `System.RuntimeType`                                             |
| 33.6% |   3.59s | ``mapToFreshConsTail(FSharpList`1<!!0>, FSharpFunc`2<!!1, !!0>, FSharpList`1<!!1>)`` | `Microsoft.FSharp.Primitives.Basics.List`                        |
|  4.2% | 443.8ms | ``Invoke(FSharpFunc`2<int32, Type>)``                                                | `Microsoft.FSharp.Quotations.PatternsModule+u_dtype@1905-3`      |
|  1.2% | 132.3ms | ``Invoke(FSharpFunc`2<int32, Type>)``                                                | `Microsoft.FSharp.Quotations.PatternsModule+b@1962-1`            |

##### `?!?` (`<unknown>`)

|     % |  Time | Callee                | Location                                  |
| ----: | ----: | --------------------- | ----------------------------------------- |
| 99.1% | 6.68s | `UNMANAGED_CODE_TIME` | `<unknown>`                               |
| <0.1% | 1.4ms | `.ctor()`             | `System.Configuration.AppSettingsSection` |

##### `getUnionCaseInfo(Type, String)` (`Microsoft.FSharp.Quotations.PatternsModule`)

|     % |  Time | Callee                                                | Location                                    |
| ----: | ----: | ----------------------------------------------------- | ------------------------------------------- |
| 99.9% | 6.30s | ``GetUnionCases(Type, FSharpOption`1<BindingFlags>)`` | `Microsoft.FSharp.Reflection.FSharpType`    |
|  0.1% | 6.3ms | `get_Name()`                                          | `Microsoft.FSharp.Reflection.UnionCaseInfo` |
| <0.1% | 2.7ms | ``TryFind(FSharpFunc`2<!!0, bool>, !!0[])``           | `Microsoft.FSharp.Collections.ArrayModule`  |

##### ``Invoke(FSharpList`1<Type>, FSharpValueOption`1<int32>)`` (`Microsoft.FSharp.Quotations.PatternsModule+u_constSpec@2137-10`)

|     % |    Time | Callee                           | Location                                                          |
| ----: | ------: | -------------------------------- | ----------------------------------------------------------------- |
| 96.6% |   6.09s | `getUnionCaseInfo(Type, String)` | `Microsoft.FSharp.Quotations.PatternsModule`                      |
|  3.4% | 212.1ms | ``Invoke(FSharpList`1<Type>)``   | `Microsoft.FSharp.Quotations.PatternsModule+u_UnionCaseInfo@2017` |

##### `GetCustomAttributes(RuntimeType, RuntimeType, bool)` (`System.Reflection.CustomAttribute`)

|      % |  Time | Callee                                                                       | Location                                  |
| -----: | ----: | ---------------------------------------------------------------------------- | ----------------------------------------- |
| 100.0% | 6.30s | `GetCustomAttributes(RuntimeModule, int32, int32, RuntimeType)`              | `System.Reflection.CustomAttribute`       |
|  <0.1% | 1.4ms | `CreateAttributeArrayHelper(RuntimeType, int32)`                             | `System.Reflection.CustomAttribute`       |
|  <0.1% | 1.3ms | ``GetCustomAttributes(RuntimeType, RuntimeType, ListBuilder`1<Attribute>&)`` | `System.Reflection.PseudoCustomAttribute` |

##### `GetCustomAttributes(RuntimeModule, int32, int32, RuntimeType)` (`System.Reflection.CustomAttribute`)

|      % |  Time | Callee                                                                                                          | Location                            |
| -----: | ----: | --------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| 100.0% | 6.30s | ``AddCustomAttributes(ListBuilder`1<Object>&, RuntimeModule, int32, RuntimeType, bool, ListBuilder`1<Object>)`` | `System.Reflection.CustomAttribute` |
|  <0.1% | 1.3ms | `CreateAttributeArrayHelper(RuntimeType, int32)`                                                                | `System.Reflection.CustomAttribute` |

##### ``GetUnionCases(Type, FSharpOption`1<BindingFlags>)`` (`Microsoft.FSharp.Reflection.FSharpType`)

|     % |    Time | Callee                                       | Location                           |
| ----: | ------: | -------------------------------------------- | ---------------------------------- |
| 77.4% |   4.87s | `getTypeOfReprType(Type, BindingFlags)`      | `Microsoft.FSharp.Reflection.Impl` |
| 11.5% | 722.2ms | `checkUnionType(Type, BindingFlags)`         | `Microsoft.FSharp.Reflection.Impl` |
| 11.1% | 702.0ms | `get@481-2(BindingFlags, Type)`              | `Microsoft.FSharp.Reflection.Impl` |
| <0.1% |   1.4ms | `getUnionTypeTagNameMap(Type, BindingFlags)` | `Microsoft.FSharp.Reflection.Impl` |

##### ``AddCustomAttributes(ListBuilder`1<Object>&, RuntimeModule, int32, RuntimeType, bool, ListBuilder`1<Object>)`` (`System.Reflection.CustomAttribute`)

|      % |  Time | Callee                                                                                                                                                                             | Location                              |
| -----: | ----: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- |
| 100.0% | 6.30s | ``FilterCustomAttributeRecord(MetadataToken, MetadataImport&, RuntimeModule, MetadataToken, RuntimeType, bool, ListBuilder`1<Object>&, RuntimeType&, IRuntimeMethodInfo&, bool&)`` | `System.Reflection.CustomAttribute`   |
|  <0.1% | 1.3ms | `InvokePropertySetter(Object, BindingFlags, Binder, Object, CultureInfo)`                                                                                                          | `System.Reflection.MethodBaseInvoker` |

##### ``FilterCustomAttributeRecord(MetadataToken, MetadataImport&, RuntimeModule, MetadataToken, RuntimeType, bool, ListBuilder`1<Object>&, RuntimeType&, IRuntimeMethodInfo&, bool&)`` (`System.Reflection.CustomAttribute`)

|     % |    Time | Callee                                                                 | Location                          |
| ----: | ------: | ---------------------------------------------------------------------- | --------------------------------- |
| 90.7% |   5.71s | `ResolveType(int32, Type[], Type[])`                                   | `System.Reflection.RuntimeModule` |
|  4.2% | 262.1ms | `ResolveMethodHandle(int32, RuntimeTypeHandle[], RuntimeTypeHandle[])` | `System.ModuleHandle`             |
|  3.4% | 216.0ms | `ResolveTypeHandle(int32, RuntimeTypeHandle[], RuntimeTypeHandle[])`   | `System.ModuleHandle`             |
|  1.8% | 110.9ms | `UNMANAGED_CODE_TIME`                                                  | `<unknown>`                       |

##### `ResolveTypeHandle(int32, RuntimeTypeHandle[], RuntimeTypeHandle[])` (`System.ModuleHandle`)

|      % |  Time | Callee | Location    |
| -----: | ----: | ------ | ----------- |
| 100.0% | 5.92s | `?!?`  | `<unknown>` |

##### `ResolveType(int32, Type[], Type[])` (`System.Reflection.RuntimeModule`)

|      % |  Time | Callee                                                               | Location              |
| -----: | ----: | -------------------------------------------------------------------- | --------------------- |
| 100.0% | 5.71s | `ResolveTypeHandle(int32, RuntimeTypeHandle[], RuntimeTypeHandle[])` | `System.ModuleHandle` |
|  <0.1% | 1.4ms | `UNMANAGED_CODE_TIME`                                                | `<unknown>`           |

##### `getTypeOfReprType(Type, BindingFlags)` (`Microsoft.FSharp.Reflection.Impl`)

|     % |    Time | Callee                                | Location                           |
| ----: | ------: | ------------------------------------- | ---------------------------------- |
| 82.7% |   4.03s | `isExceptionRepr(Type, BindingFlags)` | `Microsoft.FSharp.Reflection.Impl` |
| 17.2% | 841.5ms | `get@472-1(BindingFlags, Type)`       | `Microsoft.FSharp.Reflection.Impl` |
| <0.1% |   1.4ms | `.cctor()`                            | `Microsoft.FSharp.Reflection.Impl` |

##### `MakeGenericType(Type[])` (`System.RuntimeType`)

|     % |    Time | Callee                          | Location                   |
| ----: | ------: | ------------------------------- | -------------------------- |
| 85.0% |   4.02s | `UNMANAGED_CODE_TIME`           | `<unknown>`                |
| 11.7% | 552.4ms | `?!?`                           | `<unknown>`                |
|  2.8% | 132.4ms | `GetGenericArgumentsInternal()` | `System.RuntimeType`       |
|  0.3% |  12.1ms | `Instantiate(Type[])`           | `System.RuntimeTypeHandle` |

##### `isExceptionRepr(Type, BindingFlags)` (`Microsoft.FSharp.Reflection.Impl`)

|     % |    Time | Callee                                                | Location                            |
| ----: | ------: | ----------------------------------------------------- | ----------------------------------- |
| 95.9% |   3.87s | `GetCustomAttributes(RuntimeType, RuntimeType, bool)` | `System.Reflection.CustomAttribute` |
|  4.1% | 164.6ms | `tryFindSourceConstructFlagsOfType(Type)`             | `Microsoft.FSharp.Reflection.Impl`  |

##### ``mapToFreshConsTail(FSharpList`1<!!0>, FSharpFunc`2<!!1, !!0>, FSharpList`1<!!1>)`` (`Microsoft.FSharp.Primitives.Basics.List`)

|      % |  Time | Callee               | Location                                                 |
| -----: | ----: | -------------------- | -------------------------------------------------------- |
| 100.0% | 3.71s | `Invoke(BindingEnv)` | `Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965` |

##### `get@472-1(BindingFlags, Type)` (`Microsoft.FSharp.Reflection.Impl`)

|     % |    Time | Callee                                                | Location                            |
| ----: | ------: | ----------------------------------------------------- | ----------------------------------- |
| 97.9% | 823.7ms | `GetCustomAttributes(RuntimeType, RuntimeType, bool)` | `System.Reflection.CustomAttribute` |
|  2.1% |  17.7ms | `isUnionType(Type, BindingFlags)`                     | `Microsoft.FSharp.Reflection.Impl`  |

##### `isUnionType(Type, BindingFlags)` (`Microsoft.FSharp.Reflection.Impl`)

|     % |    Time | Callee                                                | Location                            |
| ----: | ------: | ----------------------------------------------------- | ----------------------------------- |
| 94.4% | 707.3ms | `GetCustomAttributes(RuntimeType, RuntimeType, bool)` | `System.Reflection.CustomAttribute` |
|  5.6% |  42.1ms | `tryFindSourceConstructFlagsOfType(Type)`             | `Microsoft.FSharp.Reflection.Impl`  |

##### `checkUnionType(Type, BindingFlags)` (`Microsoft.FSharp.Reflection.Impl`)

|      % |    Time | Callee                            | Location                           |
| -----: | ------: | --------------------------------- | ---------------------------------- |
| 100.0% | 722.2ms | `isUnionType(Type, BindingFlags)` | `Microsoft.FSharp.Reflection.Impl` |

## Hottest call stacks

Call stacks ranked by time spent in their leaf frame.

Common call stack: `main(String[])` (`Profile`)

|     % |    Time | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 32.5% |   3.65s | `UNMANAGED_CODE_TIME` ← `?!?` ← `ResolveTypeHandle(int32, RuntimeTypeHandle[], RuntimeTypeHandle[])` (`System.ModuleHandle`) ← `ResolveType(int32, Type[], Type[])` (`System.Reflection.RuntimeModule`) ← ``FilterCustomAttributeRecord(MetadataToken, MetadataImport&, RuntimeModule, MetadataToken, RuntimeType, bool, ListBuilder`1<Object>&, RuntimeType&, IRuntimeMethodInfo&, bool&)`` (`System.Reflection.CustomAttribute`) ← ``AddCustomAttributes(ListBuilder`1<Object>&, RuntimeModule, int32, RuntimeType, bool, ListBuilder`1<Object>)`` ← `GetCustomAttributes(RuntimeModule, int32, int32, RuntimeType)` ← `GetCustomAttributes(RuntimeType, RuntimeType, bool)` ← `isExceptionRepr(Type, BindingFlags)` (`Microsoft.FSharp.Reflection.Impl`) ← `getTypeOfReprType(Type, BindingFlags)` ← ``GetUnionCases(Type, FSharpOption`1<BindingFlags>)`` (`Microsoft.FSharp.Reflection.FSharpType`) ← `getUnionCaseInfo(Type, String)` (`Microsoft.FSharp.Quotations.PatternsModule`) ← ``Invoke(FSharpList`1<Type>, FSharpValueOption`1<int32>)`` (`Microsoft.FSharp.Quotations.PatternsModule+u_constSpec@2137-10`) ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 29.9% |   3.35s | `UNMANAGED_CODE_TIME` ← `MakeGenericType(Type[])` (`System.RuntimeType`) ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`) ← ``mapToFreshConsTail(FSharpList`1<!!0>, FSharpFunc`2<!!1, !!0>, FSharpList`1<!!1>)`` (`Microsoft.FSharp.Primitives.Basics.List`) ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  6.2% | 698.1ms | `UNMANAGED_CODE_TIME` ← `?!?` ← `ResolveTypeHandle(int32, RuntimeTypeHandle[], RuntimeTypeHandle[])` (`System.ModuleHandle`) ← `ResolveType(int32, Type[], Type[])` (`System.Reflection.RuntimeModule`) ← ``FilterCustomAttributeRecord(MetadataToken, MetadataImport&, RuntimeModule, MetadataToken, RuntimeType, bool, ListBuilder`1<Object>&, RuntimeType&, IRuntimeMethodInfo&, bool&)`` (`System.Reflection.CustomAttribute`) ← ``AddCustomAttributes(ListBuilder`1<Object>&, RuntimeModule, int32, RuntimeType, bool, ListBuilder`1<Object>)`` ← `GetCustomAttributes(RuntimeModule, int32, int32, RuntimeType)` ← `GetCustomAttributes(RuntimeType, RuntimeType, bool)` ← `get@472-1(BindingFlags, Type)` (`Microsoft.FSharp.Reflection.Impl`) ← `getTypeOfReprType(Type, BindingFlags)` ← ``GetUnionCases(Type, FSharpOption`1<BindingFlags>)`` (`Microsoft.FSharp.Reflection.FSharpType`) ← `getUnionCaseInfo(Type, String)` (`Microsoft.FSharp.Quotations.PatternsModule`) ← ``Invoke(FSharpList`1<Type>, FSharpValueOption`1<int32>)`` (`Microsoft.FSharp.Quotations.PatternsModule+u_constSpec@2137-10`) ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  5.0% | 562.0ms | `UNMANAGED_CODE_TIME` ← `?!?` ← `ResolveTypeHandle(int32, RuntimeTypeHandle[], RuntimeTypeHandle[])` (`System.ModuleHandle`) ← `ResolveType(int32, Type[], Type[])` (`System.Reflection.RuntimeModule`) ← ``FilterCustomAttributeRecord(MetadataToken, MetadataImport&, RuntimeModule, MetadataToken, RuntimeType, bool, ListBuilder`1<Object>&, RuntimeType&, IRuntimeMethodInfo&, bool&)`` (`System.Reflection.CustomAttribute`) ← ``AddCustomAttributes(ListBuilder`1<Object>&, RuntimeModule, int32, RuntimeType, bool, ListBuilder`1<Object>)`` ← `GetCustomAttributes(RuntimeModule, int32, int32, RuntimeType)` ← `GetCustomAttributes(RuntimeType, RuntimeType, bool)` ← `isUnionType(Type, BindingFlags)` (`Microsoft.FSharp.Reflection.Impl`) ← `checkUnionType(Type, BindingFlags)` ← ``GetUnionCases(Type, FSharpOption`1<BindingFlags>)`` (`Microsoft.FSharp.Reflection.FSharpType`) ← `getUnionCaseInfo(Type, String)` (`Microsoft.FSharp.Quotations.PatternsModule`) ← ``Invoke(FSharpList`1<Type>, FSharpValueOption`1<int32>)`` (`Microsoft.FSharp.Quotations.PatternsModule+u_constSpec@2137-10`) ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  4.8% | 540.2ms | `UNMANAGED_CODE_TIME` ← `?!?` ← `ResolveTypeHandle(int32, RuntimeTypeHandle[], RuntimeTypeHandle[])` (`System.ModuleHandle`) ← `ResolveType(int32, Type[], Type[])` (`System.Reflection.RuntimeModule`) ← ``FilterCustomAttributeRecord(MetadataToken, MetadataImport&, RuntimeModule, MetadataToken, RuntimeType, bool, ListBuilder`1<Object>&, RuntimeType&, IRuntimeMethodInfo&, bool&)`` (`System.Reflection.CustomAttribute`) ← ``AddCustomAttributes(ListBuilder`1<Object>&, RuntimeModule, int32, RuntimeType, bool, ListBuilder`1<Object>)`` ← `GetCustomAttributes(RuntimeModule, int32, int32, RuntimeType)` ← `GetCustomAttributes(RuntimeType, RuntimeType, bool)` ← `get@481-2(BindingFlags, Type)` (`Microsoft.FSharp.Reflection.Impl`) ← ``GetUnionCases(Type, FSharpOption`1<BindingFlags>)`` (`Microsoft.FSharp.Reflection.FSharpType`) ← `getUnionCaseInfo(Type, String)` (`Microsoft.FSharp.Quotations.PatternsModule`) ← ``Invoke(FSharpList`1<Type>, FSharpValueOption`1<int32>)`` (`Microsoft.FSharp.Quotations.PatternsModule+u_constSpec@2137-10`) ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  2.7% | 298.1ms | `UNMANAGED_CODE_TIME` ← `MakeGenericType(Type[])` (`System.RuntimeType`) ← ``Invoke(FSharpFunc`2<int32, Type>)`` (`Microsoft.FSharp.Quotations.PatternsModule+u_dtype@1905-3`) ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  2.2% | 244.1ms | `UNMANAGED_CODE_TIME` ← `MakeGenericType(Type[])` (`System.RuntimeType`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  1.6% | 179.4ms | `UNMANAGED_CODE_TIME` ← `?!?` ← `MakeGenericType(Type[])` (`System.RuntimeType`) ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`) ← ``mapToFreshConsTail(FSharpList`1<!!0>, FSharpFunc`2<!!1, !!0>, FSharpList`1<!!1>)`` (`Microsoft.FSharp.Primitives.Basics.List`) ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  1.2% | 140.4ms | `UNMANAGED_CODE_TIME` ← `?!?` ← `MakeGenericType(Type[])` (`System.RuntimeType`) ← ``Invoke(FSharpFunc`2<int32, Type>)`` (`Microsoft.FSharp.Quotations.PatternsModule+u_dtype@1905-3`) ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  1.0% | 116.6ms | `UNMANAGED_CODE_TIME` ← `?!?` ← `MakeGenericType(Type[])` (`System.RuntimeType`) ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  1.0% | 113.5ms | `UNMANAGED_CODE_TIME` ← `?!?` ← `ResolveTypeHandle(int32, RuntimeTypeHandle[], RuntimeTypeHandle[])` (`System.ModuleHandle`) ← `ResolveType(int32, Type[], Type[])` (`System.Reflection.RuntimeModule`) ← ``FilterCustomAttributeRecord(MetadataToken, MetadataImport&, RuntimeModule, MetadataToken, RuntimeType, bool, ListBuilder`1<Object>&, RuntimeType&, IRuntimeMethodInfo&, bool&)`` (`System.Reflection.CustomAttribute`) ← ``AddCustomAttributes(ListBuilder`1<Object>&, RuntimeModule, int32, RuntimeType, bool, ListBuilder`1<Object>)`` ← `GetCustomAttributes(RuntimeModule, int32, int32, RuntimeType)` ← `GetCustomAttributes(RuntimeType, RuntimeType, bool)` ← `tryFindCompilationMappingAttributeFromType(Type)` (`Microsoft.FSharp.Reflection.Impl`) ← `tryFindSourceConstructFlagsOfType(Type)` ← `isExceptionRepr(Type, BindingFlags)` ← `getTypeOfReprType(Type, BindingFlags)` ← ``GetUnionCases(Type, FSharpOption`1<BindingFlags>)`` (`Microsoft.FSharp.Reflection.FSharpType`) ← `getUnionCaseInfo(Type, String)` (`Microsoft.FSharp.Quotations.PatternsModule`) ← ``Invoke(FSharpList`1<Type>)`` (`Microsoft.FSharp.Quotations.PatternsModule+u_UnionCaseInfo@2017`) ← ``Invoke(FSharpList`1<Type>, FSharpValueOption`1<int32>)`` (`Microsoft.FSharp.Quotations.PatternsModule+u_constSpec@2137-10`) ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`) ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1983-2`) ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1994-5`) ← `deserialize(Type, Type[], Type[], FSharpExpr[], unsigned int8[])` (`Microsoft.FSharp.Quotations.PatternsModule`) ← `Deserialize40(Type, Type[], Type[], FSharpExpr[], unsigned int8[])` (`Microsoft.FSharp.Quotations.FSharpExpr`) |
|  1.0% | 113.3ms | `UNMANAGED_CODE_TIME` ← `?!?` ← `MakeGenericType(Type[])` (`System.RuntimeType`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  0.8% |  90.6ms | `UNMANAGED_CODE_TIME` ← `GetInstantiationInternal()` (`System.RuntimeTypeHandle`) ← `GetGenericArgumentsInternal()` (`System.RuntimeType`) ← `MakeGenericType(Type[])` ← ``map(FSharpFunc`2<!!0, !!1>, FSharpList`1<!!0>)`` (`Microsoft.FSharp.Primitives.Basics.List`) ← ``appL(FSharpList`1<FSharpFunc`2<!!0, !!1>>, !!0)`` (`Microsoft.FSharp.Quotations.PatternsModule`) ← ``Invoke(FSharpFunc`2<int32, Type>)`` (`Microsoft.FSharp.Quotations.PatternsModule+b@1962-1`) ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`) ← ``mapToFreshConsTail(FSharpList`1<!!0>, FSharpFunc`2<!!1, !!0>, FSharpList`1<!!1>)`` (`Microsoft.FSharp.Primitives.Basics.List`) ← ``map(FSharpFunc`2<!!0, !!1>, FSharpList`1<!!0>)`` ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`) ← ``map(FSharpFunc`2<!!0, !!1>, FSharpList`1<!!0>)`` (`Microsoft.FSharp.Primitives.Basics.List`) ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1994-5`) ← `deserialize(Type, Type[], Type[], FSharpExpr[], unsigned int8[])` (`Microsoft.FSharp.Quotations.PatternsModule`) ← `Deserialize40(Type, Type[], Type[], FSharpExpr[], unsigned int8[])` (`Microsoft.FSharp.Quotations.FSharpExpr`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  0.8% |  88.1ms | `UNMANAGED_CODE_TIME` ← `MakeGenericType(Type[])` (`System.RuntimeType`) ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  0.8% |  85.5ms | `UNMANAGED_CODE_TIME` ← `?!?` ← ``ResolveMethodHandleInternal(RuntimeModule, int32, ReadOnlySpan`1<int>, ReadOnlySpan`1<int>)`` (`System.ModuleHandle`) ← `ResolveMethodHandle(int32, RuntimeTypeHandle[], RuntimeTypeHandle[])` ← ``FilterCustomAttributeRecord(MetadataToken, MetadataImport&, RuntimeModule, MetadataToken, RuntimeType, bool, ListBuilder`1<Object>&, RuntimeType&, IRuntimeMethodInfo&, bool&)`` (`System.Reflection.CustomAttribute`) ← ``AddCustomAttributes(ListBuilder`1<Object>&, RuntimeModule, int32, RuntimeType, bool, ListBuilder`1<Object>)`` ← `GetCustomAttributes(RuntimeModule, int32, int32, RuntimeType)` ← `GetCustomAttributes(RuntimeType, RuntimeType, bool)` ← `isExceptionRepr(Type, BindingFlags)` (`Microsoft.FSharp.Reflection.Impl`) ← `getTypeOfReprType(Type, BindingFlags)` ← ``GetUnionCases(Type, FSharpOption`1<BindingFlags>)`` (`Microsoft.FSharp.Reflection.FSharpType`) ← `getUnionCaseInfo(Type, String)` (`Microsoft.FSharp.Quotations.PatternsModule`) ← ``Invoke(FSharpList`1<Type>, FSharpValueOption`1<int32>)`` (`Microsoft.FSharp.Quotations.PatternsModule+u_constSpec@2137-10`) ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  0.6% |  71.1ms | `UNMANAGED_CODE_TIME` ← `?!?` ← ``ResolveMethodHandleInternal(RuntimeModule, int32, ReadOnlySpan`1<int>, ReadOnlySpan`1<int>)`` (`System.ModuleHandle`) ← `ResolveMethodHandle(int32, RuntimeTypeHandle[], RuntimeTypeHandle[])` ← ``FilterCustomAttributeRecord(MetadataToken, MetadataImport&, RuntimeModule, MetadataToken, RuntimeType, bool, ListBuilder`1<Object>&, RuntimeType&, IRuntimeMethodInfo&, bool&)`` (`System.Reflection.CustomAttribute`) ← ``AddCustomAttributes(ListBuilder`1<Object>&, RuntimeModule, int32, RuntimeType, bool, ListBuilder`1<Object>)`` ← `GetCustomAttributes(RuntimeModule, int32, int32, RuntimeType)` ← `GetCustomAttributes(RuntimeType, RuntimeType, bool)` ← `get@481-2(BindingFlags, Type)` (`Microsoft.FSharp.Reflection.Impl`) ← ``GetUnionCases(Type, FSharpOption`1<BindingFlags>)`` (`Microsoft.FSharp.Reflection.FSharpType`) ← `getUnionCaseInfo(Type, String)` (`Microsoft.FSharp.Quotations.PatternsModule`) ← ``Invoke(FSharpList`1<Type>, FSharpValueOption`1<int32>)`` (`Microsoft.FSharp.Quotations.PatternsModule+u_constSpec@2137-10`) ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  0.5% |  61.4ms | `UNMANAGED_CODE_TIME` ← `?!?` ← `ResolveTypeHandle(int32, RuntimeTypeHandle[], RuntimeTypeHandle[])` (`System.ModuleHandle`) ← ``FilterCustomAttributeRecord(MetadataToken, MetadataImport&, RuntimeModule, MetadataToken, RuntimeType, bool, ListBuilder`1<Object>&, RuntimeType&, IRuntimeMethodInfo&, bool&)`` (`System.Reflection.CustomAttribute`) ← ``AddCustomAttributes(ListBuilder`1<Object>&, RuntimeModule, int32, RuntimeType, bool, ListBuilder`1<Object>)`` ← `GetCustomAttributes(RuntimeModule, int32, int32, RuntimeType)` ← `GetCustomAttributes(RuntimeType, RuntimeType, bool)` ← `isExceptionRepr(Type, BindingFlags)` (`Microsoft.FSharp.Reflection.Impl`) ← `getTypeOfReprType(Type, BindingFlags)` ← ``GetUnionCases(Type, FSharpOption`1<BindingFlags>)`` (`Microsoft.FSharp.Reflection.FSharpType`) ← `getUnionCaseInfo(Type, String)` (`Microsoft.FSharp.Quotations.PatternsModule`) ← ``Invoke(FSharpList`1<Type>, FSharpValueOption`1<int32>)`` (`Microsoft.FSharp.Quotations.PatternsModule+u_constSpec@2137-10`) ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  0.5% |  57.3ms | `UNMANAGED_CODE_TIME` ← `?!?` ← ``ResolveMethodHandleInternal(RuntimeModule, int32, ReadOnlySpan`1<int>, ReadOnlySpan`1<int>)`` (`System.ModuleHandle`) ← `ResolveMethodHandle(int32, RuntimeTypeHandle[], RuntimeTypeHandle[])` ← ``FilterCustomAttributeRecord(MetadataToken, MetadataImport&, RuntimeModule, MetadataToken, RuntimeType, bool, ListBuilder`1<Object>&, RuntimeType&, IRuntimeMethodInfo&, bool&)`` (`System.Reflection.CustomAttribute`) ← ``AddCustomAttributes(ListBuilder`1<Object>&, RuntimeModule, int32, RuntimeType, bool, ListBuilder`1<Object>)`` ← `GetCustomAttributes(RuntimeModule, int32, int32, RuntimeType)` ← `GetCustomAttributes(RuntimeType, RuntimeType, bool)` ← `isUnionType(Type, BindingFlags)` (`Microsoft.FSharp.Reflection.Impl`) ← `checkUnionType(Type, BindingFlags)` ← ``GetUnionCases(Type, FSharpOption`1<BindingFlags>)`` (`Microsoft.FSharp.Reflection.FSharpType`) ← `getUnionCaseInfo(Type, String)` (`Microsoft.FSharp.Quotations.PatternsModule`) ← ``Invoke(FSharpList`1<Type>, FSharpValueOption`1<int32>)`` (`Microsoft.FSharp.Quotations.PatternsModule+u_constSpec@2137-10`) ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  0.5% |  51.8ms | `UNMANAGED_CODE_TIME` ← `?!?` ← `ResolveTypeHandle(int32, RuntimeTypeHandle[], RuntimeTypeHandle[])` (`System.ModuleHandle`) ← ``FilterCustomAttributeRecord(MetadataToken, MetadataImport&, RuntimeModule, MetadataToken, RuntimeType, bool, ListBuilder`1<Object>&, RuntimeType&, IRuntimeMethodInfo&, bool&)`` (`System.Reflection.CustomAttribute`) ← ``AddCustomAttributes(ListBuilder`1<Object>&, RuntimeModule, int32, RuntimeType, bool, ListBuilder`1<Object>)`` ← `GetCustomAttributes(RuntimeModule, int32, int32, RuntimeType)` ← `GetCustomAttributes(RuntimeType, RuntimeType, bool)` ← `isUnionType(Type, BindingFlags)` (`Microsoft.FSharp.Reflection.Impl`) ← `checkUnionType(Type, BindingFlags)` ← ``GetUnionCases(Type, FSharpOption`1<BindingFlags>)`` (`Microsoft.FSharp.Reflection.FSharpType`) ← `getUnionCaseInfo(Type, String)` (`Microsoft.FSharp.Quotations.PatternsModule`) ← ``Invoke(FSharpList`1<Type>, FSharpValueOption`1<int32>)`` (`Microsoft.FSharp.Quotations.PatternsModule+u_constSpec@2137-10`) ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  0.4% |  49.5ms | `UNMANAGED_CODE_TIME` ← `?!?` ← `ResolveTypeHandle(int32, RuntimeTypeHandle[], RuntimeTypeHandle[])` (`System.ModuleHandle`) ← ``FilterCustomAttributeRecord(MetadataToken, MetadataImport&, RuntimeModule, MetadataToken, RuntimeType, bool, ListBuilder`1<Object>&, RuntimeType&, IRuntimeMethodInfo&, bool&)`` (`System.Reflection.CustomAttribute`) ← ``AddCustomAttributes(ListBuilder`1<Object>&, RuntimeModule, int32, RuntimeType, bool, ListBuilder`1<Object>)`` ← `GetCustomAttributes(RuntimeModule, int32, int32, RuntimeType)` ← `GetCustomAttributes(RuntimeType, RuntimeType, bool)` ← `get@472-1(BindingFlags, Type)` (`Microsoft.FSharp.Reflection.Impl`) ← `getTypeOfReprType(Type, BindingFlags)` ← ``GetUnionCases(Type, FSharpOption`1<BindingFlags>)`` (`Microsoft.FSharp.Reflection.FSharpType`) ← `getUnionCaseInfo(Type, String)` (`Microsoft.FSharp.Quotations.PatternsModule`) ← ``Invoke(FSharpList`1<Type>, FSharpValueOption`1<int32>)`` (`Microsoft.FSharp.Quotations.PatternsModule+u_constSpec@2137-10`) ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |

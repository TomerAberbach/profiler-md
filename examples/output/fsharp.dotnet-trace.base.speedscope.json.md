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

|     % |   Time | Function                                                                                                                                    | Location                                                    |
| ----: | -----: | ------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| 98.7% | 10.67s | `UNMANAGED_CODE_TIME`                                                                                                                       | `<unknown>`                                                 |
|  0.6% | 64.5ms | `?!?`                                                                                                                                       | `<unknown>`                                                 |
|  0.2% | 25.6ms | `GetInstantiationInternal()`                                                                                                                | `System.RuntimeTypeHandle`                                  |
|  0.1% |  5.6ms | `MakeGenericType(Type[])`                                                                                                                   | `System.RuntimeType`                                        |
| <0.1% |  4.0ms | `ToUnionParseResults()`                                                                                                                     | `Argu.CliParser+CliParseResultAggregator`                   |
| <0.1% |  4.0ms | `u_Expr(InputState)`                                                                                                                        | `Microsoft.FSharp.Quotations.PatternsModule`                |
| <0.1% |  2.7ms | `u_dtype(InputState)`                                                                                                                       | `Microsoft.FSharp.Quotations.PatternsModule`                |
| <0.1% |  2.7ms | ``u_list_aux(FSharpFunc`2<InputState, !!0>, FSharpList`1<!!0>, InputState)``                                                                | `Microsoft.FSharp.Quotations.PatternsModule+SimpleUnpickle` |
| <0.1% |  2.6ms | `StartsWith(String, StringComparison)`                                                                                                      | `System.String`                                             |
| <0.1% |  2.5ms | `Invoke(InputState)`                                                                                                                        | `Microsoft.FSharp.Quotations.PatternsModule+args@1963-1`    |
| <0.1% |  1.4ms | `Invoke(BindingEnv)`                                                                                                                        | `Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`    |
| <0.1% |  1.4ms | `getUnionTypeTagNameMap(Type, BindingFlags)`                                                                                                | `Microsoft.FSharp.Reflection.Impl`                          |
| <0.1% |  1.4ms | ``mk(MapTree`2<!!0, !!1>, !!0, !!1, MapTree`2<!!0, !!1>)``                                                                                  | `Microsoft.FSharp.Collections.MapTreeModule`                |
| <0.1% |  1.4ms | `u_NamedType(InputState)`                                                                                                                   | `Microsoft.FSharp.Quotations.PatternsModule`                |
| <0.1% |  1.4ms | `StelemRef(Array, int, Object)`                                                                                                             | `System.Runtime.CompilerServices.CastHelpers`               |
| <0.1% |  1.3ms | `ReadUtf8BytesAsString(int32)`                                                                                                              | `Microsoft.FSharp.Quotations.PatternsModule+ByteStream`     |
| <0.1% |  1.3ms | `Invoke(InputState)`                                                                                                                        | `Microsoft.FSharp.Quotations.PatternsModule+u_dtype@1905-2` |
| <0.1% |  1.3ms | `GetObject(String, bool, bool)`                                                                                                             | `System.Resources.RuntimeResourceSet`                       |
| <0.1% |  1.3ms | `ToArray()`                                                                                                                                 | ``System.Collections.Generic.List`1[System.__Canon]``       |
| <0.1% |  1.3ms | ``Parse(FSharpOption`1<String[]>, FSharpOption`1<IConfigurationReader>, FSharpOption`1<bool>, FSharpOption`1<bool>, FSharpOption`1<bool>)`` | ``Argu.ArgumentParser`1[System.__Canon]``                   |

#### Categories

##### Native

|     % |   Time | Function              | Location    |
| ----: | -----: | --------------------- | ----------- |
| 98.7% | 10.67s | `UNMANAGED_CODE_TIME` | `<unknown>` |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `UNMANAGED_CODE_TIME` (`<unknown>`)

|     % |    Time | Caller                                                                                                                                                                             | Location                            |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| 60.8% |   6.48s | `?!?`                                                                                                                                                                              | `<unknown>`                         |
| 35.4% |   3.78s | `MakeGenericType(Type[])`                                                                                                                                                          | `System.RuntimeType`                |
|  1.1% | 118.9ms | `GetInstantiationInternal()`                                                                                                                                                       | `System.RuntimeTypeHandle`          |
|  1.1% | 113.7ms | ``FilterCustomAttributeRecord(MetadataToken, MetadataImport&, RuntimeModule, MetadataToken, RuntimeType, bool, ListBuilder`1<Object>&, RuntimeType&, IRuntimeMethodInfo&, bool&)`` | `System.Reflection.CustomAttribute` |
|  0.1% |  13.6ms | `Instantiate(Type[])`                                                                                                                                                              | `System.RuntimeTypeHandle`          |

##### `?!?` (`<unknown>`)

|      % |   Time | Caller                                                               | Location              |
| -----: | -----: | -------------------------------------------------------------------- | --------------------- |
| 100.0% | 64.5ms | `ResolveTypeHandle(int32, RuntimeTypeHandle[], RuntimeTypeHandle[])` | `System.ModuleHandle` |

##### `GetInstantiationInternal()` (`System.RuntimeTypeHandle`)

|      % |   Time | Caller                          | Location             |
| -----: | -----: | ------------------------------- | -------------------- |
| 100.0% | 25.6ms | `GetGenericArgumentsInternal()` | `System.RuntimeType` |

##### `MakeGenericType(Type[])` (`System.RuntimeType`)

|      % |   Time | Caller                                             | Location                                                    |
| -----: | -----: | -------------------------------------------------- | ----------------------------------------------------------- |
| 100.0% |  5.6ms | `Invoke(BindingEnv)`                               | `Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`    |
|  <0.1% | <0.1µs | ``map(FSharpFunc`2<!!0, !!1>, FSharpList`1<!!0>)`` | `Microsoft.FSharp.Primitives.Basics.List`                   |
|  <0.1% | <0.1µs | `main(String[])`                                   | `Profile`                                                   |
|  <0.1% | <0.1µs | ``Invoke(FSharpFunc`2<int32, Type>)``              | `Microsoft.FSharp.Quotations.PatternsModule+u_dtype@1905-3` |

##### `ToUnionParseResults()` (`Argu.CliParser+CliParseResultAggregator`)

|      % |  Time | Caller                                                                                                                                      | Location                                  |
| -----: | ----: | ------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- |
| 100.0% | 4.0ms | ``Parse(FSharpOption`1<String[]>, FSharpOption`1<IConfigurationReader>, FSharpOption`1<bool>, FSharpOption`1<bool>, FSharpOption`1<bool>)`` | ``Argu.ArgumentParser`1[System.__Canon]`` |

##### `u_Expr(InputState)` (`Microsoft.FSharp.Quotations.PatternsModule`)

|     % |  Time | Caller               | Location                                                 |
| ----: | ----: | -------------------- | -------------------------------------------------------- |
| 33.6% | 1.3ms | `Invoke(InputState)` | `Microsoft.FSharp.Quotations.PatternsModule+attrs@1993`  |
| 33.2% | 1.3ms | `u_Expr(InputState)` | `Microsoft.FSharp.Quotations.PatternsModule`             |
| 33.2% | 1.3ms | `Invoke(InputState)` | `Microsoft.FSharp.Quotations.PatternsModule+args@1963-1` |

##### `u_dtype(InputState)` (`Microsoft.FSharp.Quotations.PatternsModule`)

|     % |  Time | Caller                  | Location                                            |
| ----: | ----: | ----------------------- | --------------------------------------------------- |
| 50.6% | 1.4ms | `Invoke(InputState)`    | `Microsoft.FSharp.Quotations.PatternsModule+b@1962` |
| 49.4% | 1.3ms | `u_VarDecl(InputState)` | `Microsoft.FSharp.Quotations.PatternsModule`        |

##### ``u_list_aux(FSharpFunc`2<InputState, !!0>, FSharpList`1<!!0>, InputState)`` (`Microsoft.FSharp.Quotations.PatternsModule+SimpleUnpickle`)

|     % |  Time | Caller               | Location                                                    |
| ----: | ----: | -------------------- | ----------------------------------------------------------- |
| 50.0% | 1.3ms | `u_Expr(InputState)` | `Microsoft.FSharp.Quotations.PatternsModule`                |
| 50.0% | 1.3ms | `Invoke(InputState)` | `Microsoft.FSharp.Quotations.PatternsModule+u_dtype@1905-2` |

##### `StartsWith(String, StringComparison)` (`System.String`)

|      % |  Time | Caller                               | Location                                          |
| -----: | ----: | ------------------------------------ | ------------------------------------------------- |
| 100.0% | 2.6ms | `TryGetPrefix(String, String&, !0&)` | ``Argu.Utils+PrefixDictionary`1[System.__Canon]`` |

##### `Invoke(InputState)` (`Microsoft.FSharp.Quotations.PatternsModule+args@1963-1`)

|      % |  Time | Caller                                                                       | Location                                                    |
| -----: | ----: | ---------------------------------------------------------------------------- | ----------------------------------------------------------- |
| 100.0% | 2.5ms | ``u_list_aux(FSharpFunc`2<InputState, !!0>, FSharpList`1<!!0>, InputState)`` | `Microsoft.FSharp.Quotations.PatternsModule+SimpleUnpickle` |

##### `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`)

|      % |   Time | Caller                                                                               | Location                                                   |
| -----: | -----: | ------------------------------------------------------------------------------------ | ---------------------------------------------------------- |
| 100.0% |  1.4ms | ``mapToFreshConsTail(FSharpList`1<!!0>, FSharpFunc`2<!!1, !!0>, FSharpList`1<!!1>)`` | `Microsoft.FSharp.Primitives.Basics.List`                  |
|  <0.1% |  0.5µs | `main(String[])`                                                                     | `Profile`                                                  |
|  <0.1% | <0.1µs | ``map(FSharpFunc`2<!!0, !!1>, FSharpList`1<!!0>)``                                   | `Microsoft.FSharp.Primitives.Basics.List`                  |
|  <0.1% | <0.1µs | `Invoke(BindingEnv)`                                                                 | `Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1994-5` |

##### `getUnionTypeTagNameMap(Type, BindingFlags)` (`Microsoft.FSharp.Reflection.Impl`)

|      % |  Time | Caller                                     | Location                           |
| -----: | ----: | ------------------------------------------ | ---------------------------------- |
| 100.0% | 1.4ms | `getUnionTagConverter(Type, BindingFlags)` | `Microsoft.FSharp.Reflection.Impl` |

##### ``mk(MapTree`2<!!0, !!1>, !!0, !!1, MapTree`2<!!0, !!1>)`` (`Microsoft.FSharp.Collections.MapTreeModule`)

|      % |  Time | Caller                                                            | Location                                     |
| -----: | ----: | ----------------------------------------------------------------- | -------------------------------------------- |
| 100.0% | 1.4ms | ``rebalance(MapTree`2<!!0, !!1>, !!0, !!1, MapTree`2<!!0, !!1>)`` | `Microsoft.FSharp.Collections.MapTreeModule` |

##### `u_NamedType(InputState)` (`Microsoft.FSharp.Quotations.PatternsModule`)

|      % |  Time | Caller                      | Location                                     |
| -----: | ----: | --------------------------- | -------------------------------------------- |
| 100.0% | 1.4ms | `u_tyconstSpec(InputState)` | `Microsoft.FSharp.Quotations.PatternsModule` |

##### `StelemRef(Array, int, Object)` (`System.Runtime.CompilerServices.CastHelpers`)

|      % |  Time | Caller                                       | Location                           |
| -----: | ----: | -------------------------------------------- | ---------------------------------- |
| 100.0% | 1.4ms | `getUnionTypeTagNameMap(Type, BindingFlags)` | `Microsoft.FSharp.Reflection.Impl` |

##### `ReadUtf8BytesAsString(int32)` (`Microsoft.FSharp.Quotations.PatternsModule+ByteStream`)

|      % |  Time | Caller               | Location                                                                     |
| -----: | ----: | -------------------- | ---------------------------------------------------------------------------- |
| 100.0% | 1.3ms | `Invoke(InputState)` | `Microsoft.FSharp.Quotations.PatternsModule+SimpleUnpickle+unpickleObj@1810` |

##### `Invoke(InputState)` (`Microsoft.FSharp.Quotations.PatternsModule+u_dtype@1905-2`)

|      % |  Time | Caller                | Location                                     |
| -----: | ----: | --------------------- | -------------------------------------------- |
| 100.0% | 1.3ms | `u_dtype(InputState)` | `Microsoft.FSharp.Quotations.PatternsModule` |

##### `GetObject(String, bool, bool)` (`System.Resources.RuntimeResourceSet`)

|      % |  Time | Caller                           | Location                           |
| -----: | ----: | -------------------------------- | ---------------------------------- |
| 100.0% | 1.3ms | `GetString(String, CultureInfo)` | `System.Resources.ResourceManager` |

##### `ToArray()` (``System.Collections.Generic.List`1[System.__Canon]``)

|      % |  Time | Caller                  | Location                                  |
| -----: | ----: | ----------------------- | ----------------------------------------- |
| 100.0% | 1.3ms | `ToUnionParseResults()` | `Argu.CliParser+CliParseResultAggregator` |

##### ``Parse(FSharpOption`1<String[]>, FSharpOption`1<IConfigurationReader>, FSharpOption`1<bool>, FSharpOption`1<bool>, FSharpOption`1<bool>)`` (``Argu.ArgumentParser`1[System.__Canon]``)

|      % |  Time | Caller           | Location  |
| -----: | ----: | ---------------- | --------- |
| 100.0% | 1.3ms | `main(String[])` | `Profile` |

### Total time

Functions ranked by total time spent in the function and all its callees.

|     % |    Time | Function                                                                                                                                                                           | Location                                                         |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| 99.8% |  10.79s | `main(String[])`                                                                                                                                                                   | `Profile`                                                        |
| 98.7% |  10.67s | `UNMANAGED_CODE_TIME`                                                                                                                                                              | `<unknown>`                                                      |
| 95.1% |  10.28s | `Invoke(BindingEnv)`                                                                                                                                                               | `Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`         |
| 60.6% |   6.55s | `?!?`                                                                                                                                                                              | `<unknown>`                                                      |
| 56.9% |   6.15s | `getUnionCaseInfo(Type, String)`                                                                                                                                                   | `Microsoft.FSharp.Quotations.PatternsModule`                     |
| 56.9% |   6.15s | ``Invoke(FSharpList`1<Type>, FSharpValueOption`1<int32>)``                                                                                                                         | `Microsoft.FSharp.Quotations.PatternsModule+u_constSpec@2137-10` |
| 56.8% |   6.14s | `GetCustomAttributes(RuntimeModule, int32, int32, RuntimeType)`                                                                                                                    | `System.Reflection.CustomAttribute`                              |
| 56.8% |   6.14s | ``GetUnionCases(Type, FSharpOption`1<BindingFlags>)``                                                                                                                              | `Microsoft.FSharp.Reflection.FSharpType`                         |
| 56.8% |   6.14s | `GetCustomAttributes(RuntimeType, RuntimeType, bool)`                                                                                                                              | `System.Reflection.CustomAttribute`                              |
| 56.8% |   6.14s | ``AddCustomAttributes(ListBuilder`1<Object>&, RuntimeModule, int32, RuntimeType, bool, ListBuilder`1<Object>)``                                                                    | `System.Reflection.CustomAttribute`                              |
| 56.8% |   6.13s | ``FilterCustomAttributeRecord(MetadataToken, MetadataImport&, RuntimeModule, MetadataToken, RuntimeType, bool, ListBuilder`1<Object>&, RuntimeType&, IRuntimeMethodInfo&, bool&)`` | `System.Reflection.CustomAttribute`                              |
| 53.6% |   5.79s | `ResolveTypeHandle(int32, RuntimeTypeHandle[], RuntimeTypeHandle[])`                                                                                                               | `System.ModuleHandle`                                            |
| 52.1% |   5.62s | `ResolveType(int32, Type[], Type[])`                                                                                                                                               | `System.Reflection.RuntimeModule`                                |
| 44.0% |   4.75s | `getTypeOfReprType(Type, BindingFlags)`                                                                                                                                            | `Microsoft.FSharp.Reflection.Impl`                               |
| 41.4% |   4.47s | `MakeGenericType(Type[])`                                                                                                                                                          | `System.RuntimeType`                                             |
| 36.8% |   3.98s | `isExceptionRepr(Type, BindingFlags)`                                                                                                                                              | `Microsoft.FSharp.Reflection.Impl`                               |
| 32.6% |   3.52s | ``mapToFreshConsTail(FSharpList`1<!!0>, FSharpFunc`2<!!1, !!0>, FSharpList`1<!!1>)``                                                                                               | `Microsoft.FSharp.Primitives.Basics.List`                        |
|  7.1% | 770.4ms | `get@472-1(BindingFlags, Type)`                                                                                                                                                    | `Microsoft.FSharp.Reflection.Impl`                               |
|  6.6% | 712.6ms | `get@481-2(BindingFlags, Type)`                                                                                                                                                    | `Microsoft.FSharp.Reflection.Impl`                               |
|  6.5% | 705.1ms | `isUnionType(Type, BindingFlags)`                                                                                                                                                  | `Microsoft.FSharp.Reflection.Impl`                               |

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

|     % |    Time | Callee                                                                               | Location                                                         |
| ----: | ------: | ------------------------------------------------------------------------------------ | ---------------------------------------------------------------- |
| 59.8% |   6.15s | ``Invoke(FSharpList`1<Type>, FSharpValueOption`1<int32>)``                           | `Microsoft.FSharp.Quotations.PatternsModule+u_constSpec@2137-10` |
| 35.2% |   3.62s | `MakeGenericType(Type[])`                                                            | `System.RuntimeType`                                             |
| 33.1% |   3.40s | ``mapToFreshConsTail(FSharpList`1<!!0>, FSharpFunc`2<!!1, !!0>, FSharpList`1<!!1>)`` | `Microsoft.FSharp.Primitives.Basics.List`                        |
|  3.6% | 368.4ms | ``Invoke(FSharpFunc`2<int32, Type>)``                                                | `Microsoft.FSharp.Quotations.PatternsModule+u_dtype@1905-3`      |
|  1.4% | 140.4ms | ``Invoke(FSharpFunc`2<int32, Type>)``                                                | `Microsoft.FSharp.Quotations.PatternsModule+b@1962-1`            |

##### `?!?` (`<unknown>`)

|     % |  Time | Callee                | Location                                  |
| ----: | ----: | --------------------- | ----------------------------------------- |
| 99.0% | 6.48s | `UNMANAGED_CODE_TIME` | `<unknown>`                               |
| <0.1% | 1.3ms | `.ctor()`             | `System.Configuration.AppSettingsSection` |

##### `getUnionCaseInfo(Type, String)` (`Microsoft.FSharp.Quotations.PatternsModule`)

|     % |  Time | Callee                                                | Location                                    |
| ----: | ----: | ----------------------------------------------------- | ------------------------------------------- |
| 99.8% | 6.14s | ``GetUnionCases(Type, FSharpOption`1<BindingFlags>)`` | `Microsoft.FSharp.Reflection.FSharpType`    |
|  0.1% | 6.7ms | `get_Name()`                                          | `Microsoft.FSharp.Reflection.UnionCaseInfo` |
| <0.1% | 2.7ms | ``TryFind(FSharpFunc`2<!!0, bool>, !!0[])``           | `Microsoft.FSharp.Collections.ArrayModule`  |

##### ``Invoke(FSharpList`1<Type>, FSharpValueOption`1<int32>)`` (`Microsoft.FSharp.Quotations.PatternsModule+u_constSpec@2137-10`)

|     % |    Time | Callee                           | Location                                                          |
| ----: | ------: | -------------------------------- | ----------------------------------------------------------------- |
| 96.8% |   5.95s | `getUnionCaseInfo(Type, String)` | `Microsoft.FSharp.Quotations.PatternsModule`                      |
|  3.2% | 198.3ms | ``Invoke(FSharpList`1<Type>)``   | `Microsoft.FSharp.Quotations.PatternsModule+u_UnionCaseInfo@2017` |

##### `GetCustomAttributes(RuntimeModule, int32, int32, RuntimeType)` (`System.Reflection.CustomAttribute`)

|      % |  Time | Callee                                                                                                          | Location                            |
| -----: | ----: | --------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| 100.0% | 6.14s | ``AddCustomAttributes(ListBuilder`1<Object>&, RuntimeModule, int32, RuntimeType, bool, ListBuilder`1<Object>)`` | `System.Reflection.CustomAttribute` |
|  <0.1% | 1.4ms | `CreateAttributeArrayHelper(RuntimeType, int32)`                                                                | `System.Reflection.CustomAttribute` |

##### ``GetUnionCases(Type, FSharpOption`1<BindingFlags>)`` (`Microsoft.FSharp.Reflection.FSharpType`)

|     % |    Time | Callee                                       | Location                           |
| ----: | ------: | -------------------------------------------- | ---------------------------------- |
| 77.4% |   4.75s | `getTypeOfReprType(Type, BindingFlags)`      | `Microsoft.FSharp.Reflection.Impl` |
| 11.6% | 712.6ms | `get@481-2(BindingFlags, Type)`              | `Microsoft.FSharp.Reflection.Impl` |
| 11.0% | 675.6ms | `checkUnionType(Type, BindingFlags)`         | `Microsoft.FSharp.Reflection.Impl` |
| <0.1% |   2.7ms | `getUnionTypeTagNameMap(Type, BindingFlags)` | `Microsoft.FSharp.Reflection.Impl` |

##### `GetCustomAttributes(RuntimeType, RuntimeType, bool)` (`System.Reflection.CustomAttribute`)

|      % |  Time | Callee                                                                       | Location                                  |
| -----: | ----: | ---------------------------------------------------------------------------- | ----------------------------------------- |
| 100.0% | 6.14s | `GetCustomAttributes(RuntimeModule, int32, int32, RuntimeType)`              | `System.Reflection.CustomAttribute`       |
|  <0.1% | 1.3ms | ``GetCustomAttributes(RuntimeType, RuntimeType, ListBuilder`1<Attribute>&)`` | `System.Reflection.PseudoCustomAttribute` |

##### ``AddCustomAttributes(ListBuilder`1<Object>&, RuntimeModule, int32, RuntimeType, bool, ListBuilder`1<Object>)`` (`System.Reflection.CustomAttribute`)

|      % |  Time | Callee                                                                                                                                                                             | Location                              |
| -----: | ----: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- |
| 100.0% | 6.13s | ``FilterCustomAttributeRecord(MetadataToken, MetadataImport&, RuntimeModule, MetadataToken, RuntimeType, bool, ListBuilder`1<Object>&, RuntimeType&, IRuntimeMethodInfo&, bool&)`` | `System.Reflection.CustomAttribute`   |
|  <0.1% | 1.3ms | `InvokePropertySetter(Object, BindingFlags, Binder, Object, CultureInfo)`                                                                                                          | `System.Reflection.MethodBaseInvoker` |
|  <0.1% | 1.3ms | `UNMANAGED_CODE_TIME`                                                                                                                                                              | `<unknown>`                           |

##### ``FilterCustomAttributeRecord(MetadataToken, MetadataImport&, RuntimeModule, MetadataToken, RuntimeType, bool, ListBuilder`1<Object>&, RuntimeType&, IRuntimeMethodInfo&, bool&)`` (`System.Reflection.CustomAttribute`)

|     % |    Time | Callee                                                                 | Location                          |
| ----: | ------: | ---------------------------------------------------------------------- | --------------------------------- |
| 91.7% |   5.62s | `ResolveType(int32, Type[], Type[])`                                   | `System.Reflection.RuntimeModule` |
|  3.7% | 226.7ms | `ResolveMethodHandle(int32, RuntimeTypeHandle[], RuntimeTypeHandle[])` | `System.ModuleHandle`             |
|  2.8% | 169.9ms | `ResolveTypeHandle(int32, RuntimeTypeHandle[], RuntimeTypeHandle[])`   | `System.ModuleHandle`             |
|  1.9% | 113.7ms | `UNMANAGED_CODE_TIME`                                                  | `<unknown>`                       |

##### `ResolveTypeHandle(int32, RuntimeTypeHandle[], RuntimeTypeHandle[])` (`System.ModuleHandle`)

|      % |  Time | Callee | Location    |
| -----: | ----: | ------ | ----------- |
| 100.0% | 5.79s | `?!?`  | `<unknown>` |

##### `ResolveType(int32, Type[], Type[])` (`System.Reflection.RuntimeModule`)

|      % |  Time | Callee                                                               | Location              |
| -----: | ----: | -------------------------------------------------------------------- | --------------------- |
| 100.0% | 5.62s | `ResolveTypeHandle(int32, RuntimeTypeHandle[], RuntimeTypeHandle[])` | `System.ModuleHandle` |

##### `getTypeOfReprType(Type, BindingFlags)` (`Microsoft.FSharp.Reflection.Impl`)

|     % |    Time | Callee                                | Location                           |
| ----: | ------: | ------------------------------------- | ---------------------------------- |
| 83.8% |   3.98s | `isExceptionRepr(Type, BindingFlags)` | `Microsoft.FSharp.Reflection.Impl` |
| 16.2% | 770.4ms | `get@472-1(BindingFlags, Type)`       | `Microsoft.FSharp.Reflection.Impl` |
| <0.1% |   1.3ms | `.cctor()`                            | `Microsoft.FSharp.Reflection.Impl` |

##### `MakeGenericType(Type[])` (`System.RuntimeType`)

|     % |    Time | Callee                          | Location                   |
| ----: | ------: | ------------------------------- | -------------------------- |
| 84.5% |   3.78s | `UNMANAGED_CODE_TIME`           | `<unknown>`                |
| 11.8% | 528.2ms | `?!?`                           | `<unknown>`                |
|  3.2% | 144.5ms | `GetGenericArgumentsInternal()` | `System.RuntimeType`       |
|  0.3% |  13.6ms | `Instantiate(Type[])`           | `System.RuntimeTypeHandle` |

##### `isExceptionRepr(Type, BindingFlags)` (`Microsoft.FSharp.Reflection.Impl`)

|     % |    Time | Callee                                                | Location                            |
| ----: | ------: | ----------------------------------------------------- | ----------------------------------- |
| 96.2% |   3.82s | `GetCustomAttributes(RuntimeType, RuntimeType, bool)` | `System.Reflection.CustomAttribute` |
|  3.8% | 152.6ms | `tryFindSourceConstructFlagsOfType(Type)`             | `Microsoft.FSharp.Reflection.Impl`  |

##### ``mapToFreshConsTail(FSharpList`1<!!0>, FSharpFunc`2<!!1, !!0>, FSharpList`1<!!1>)`` (`Microsoft.FSharp.Primitives.Basics.List`)

|      % |  Time | Callee               | Location                                                 |
| -----: | ----: | -------------------- | -------------------------------------------------------- |
| 100.0% | 3.52s | `Invoke(BindingEnv)` | `Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965` |

##### `get@472-1(BindingFlags, Type)` (`Microsoft.FSharp.Reflection.Impl`)

|     % |    Time | Callee                                                | Location                            |
| ----: | ------: | ----------------------------------------------------- | ----------------------------------- |
| 97.9% | 754.3ms | `GetCustomAttributes(RuntimeType, RuntimeType, bool)` | `System.Reflection.CustomAttribute` |
|  2.1% |  16.1ms | `isUnionType(Type, BindingFlags)`                     | `Microsoft.FSharp.Reflection.Impl`  |

##### `get@481-2(BindingFlags, Type)` (`Microsoft.FSharp.Reflection.Impl`)

|     % |    Time | Callee                                                | Location                            |
| ----: | ------: | ----------------------------------------------------- | ----------------------------------- |
| 98.1% | 699.2ms | `GetCustomAttributes(RuntimeType, RuntimeType, bool)` | `System.Reflection.CustomAttribute` |
|  1.9% |  13.5ms | `isUnionType(Type, BindingFlags)`                     | `Microsoft.FSharp.Reflection.Impl`  |

##### `isUnionType(Type, BindingFlags)` (`Microsoft.FSharp.Reflection.Impl`)

|     % |    Time | Callee                                                | Location                            |
| ----: | ------: | ----------------------------------------------------- | ----------------------------------- |
| 93.9% | 662.2ms | `GetCustomAttributes(RuntimeType, RuntimeType, bool)` | `System.Reflection.CustomAttribute` |
|  6.1% |  43.0ms | `tryFindSourceConstructFlagsOfType(Type)`             | `Microsoft.FSharp.Reflection.Impl`  |

## Hottest call stacks

Call stacks ranked by time spent in their leaf frame.

Common call stack: `main(String[])` (`Profile`)

|     % |    Time | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 33.6% |   3.63s | `UNMANAGED_CODE_TIME` ← `?!?` ← `ResolveTypeHandle(int32, RuntimeTypeHandle[], RuntimeTypeHandle[])` (`System.ModuleHandle`) ← `ResolveType(int32, Type[], Type[])` (`System.Reflection.RuntimeModule`) ← ``FilterCustomAttributeRecord(MetadataToken, MetadataImport&, RuntimeModule, MetadataToken, RuntimeType, bool, ListBuilder`1<Object>&, RuntimeType&, IRuntimeMethodInfo&, bool&)`` (`System.Reflection.CustomAttribute`) ← ``AddCustomAttributes(ListBuilder`1<Object>&, RuntimeModule, int32, RuntimeType, bool, ListBuilder`1<Object>)`` ← `GetCustomAttributes(RuntimeModule, int32, int32, RuntimeType)` ← `GetCustomAttributes(RuntimeType, RuntimeType, bool)` ← `isExceptionRepr(Type, BindingFlags)` (`Microsoft.FSharp.Reflection.Impl`) ← `getTypeOfReprType(Type, BindingFlags)` ← ``GetUnionCases(Type, FSharpOption`1<BindingFlags>)`` (`Microsoft.FSharp.Reflection.FSharpType`) ← `getUnionCaseInfo(Type, String)` (`Microsoft.FSharp.Quotations.PatternsModule`) ← ``Invoke(FSharpList`1<Type>, FSharpValueOption`1<int32>)`` (`Microsoft.FSharp.Quotations.PatternsModule+u_constSpec@2137-10`) ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 29.5% |   3.18s | `UNMANAGED_CODE_TIME` ← `MakeGenericType(Type[])` (`System.RuntimeType`) ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`) ← ``mapToFreshConsTail(FSharpList`1<!!0>, FSharpFunc`2<!!1, !!0>, FSharpList`1<!!1>)`` (`Microsoft.FSharp.Primitives.Basics.List`) ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  6.1% | 655.2ms | `UNMANAGED_CODE_TIME` ← `?!?` ← `ResolveTypeHandle(int32, RuntimeTypeHandle[], RuntimeTypeHandle[])` (`System.ModuleHandle`) ← `ResolveType(int32, Type[], Type[])` (`System.Reflection.RuntimeModule`) ← ``FilterCustomAttributeRecord(MetadataToken, MetadataImport&, RuntimeModule, MetadataToken, RuntimeType, bool, ListBuilder`1<Object>&, RuntimeType&, IRuntimeMethodInfo&, bool&)`` (`System.Reflection.CustomAttribute`) ← ``AddCustomAttributes(ListBuilder`1<Object>&, RuntimeModule, int32, RuntimeType, bool, ListBuilder`1<Object>)`` ← `GetCustomAttributes(RuntimeModule, int32, int32, RuntimeType)` ← `GetCustomAttributes(RuntimeType, RuntimeType, bool)` ← `get@472-1(BindingFlags, Type)` (`Microsoft.FSharp.Reflection.Impl`) ← `getTypeOfReprType(Type, BindingFlags)` ← ``GetUnionCases(Type, FSharpOption`1<BindingFlags>)`` (`Microsoft.FSharp.Reflection.FSharpType`) ← `getUnionCaseInfo(Type, String)` (`Microsoft.FSharp.Quotations.PatternsModule`) ← ``Invoke(FSharpList`1<Type>, FSharpValueOption`1<int32>)`` (`Microsoft.FSharp.Quotations.PatternsModule+u_constSpec@2137-10`) ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  5.3% | 575.3ms | `UNMANAGED_CODE_TIME` ← `?!?` ← `ResolveTypeHandle(int32, RuntimeTypeHandle[], RuntimeTypeHandle[])` (`System.ModuleHandle`) ← `ResolveType(int32, Type[], Type[])` (`System.Reflection.RuntimeModule`) ← ``FilterCustomAttributeRecord(MetadataToken, MetadataImport&, RuntimeModule, MetadataToken, RuntimeType, bool, ListBuilder`1<Object>&, RuntimeType&, IRuntimeMethodInfo&, bool&)`` (`System.Reflection.CustomAttribute`) ← ``AddCustomAttributes(ListBuilder`1<Object>&, RuntimeModule, int32, RuntimeType, bool, ListBuilder`1<Object>)`` ← `GetCustomAttributes(RuntimeModule, int32, int32, RuntimeType)` ← `GetCustomAttributes(RuntimeType, RuntimeType, bool)` ← `get@481-2(BindingFlags, Type)` (`Microsoft.FSharp.Reflection.Impl`) ← ``GetUnionCases(Type, FSharpOption`1<BindingFlags>)`` (`Microsoft.FSharp.Reflection.FSharpType`) ← `getUnionCaseInfo(Type, String)` (`Microsoft.FSharp.Quotations.PatternsModule`) ← ``Invoke(FSharpList`1<Type>, FSharpValueOption`1<int32>)`` (`Microsoft.FSharp.Quotations.PatternsModule+u_constSpec@2137-10`) ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  5.0% | 540.7ms | `UNMANAGED_CODE_TIME` ← `?!?` ← `ResolveTypeHandle(int32, RuntimeTypeHandle[], RuntimeTypeHandle[])` (`System.ModuleHandle`) ← `ResolveType(int32, Type[], Type[])` (`System.Reflection.RuntimeModule`) ← ``FilterCustomAttributeRecord(MetadataToken, MetadataImport&, RuntimeModule, MetadataToken, RuntimeType, bool, ListBuilder`1<Object>&, RuntimeType&, IRuntimeMethodInfo&, bool&)`` (`System.Reflection.CustomAttribute`) ← ``AddCustomAttributes(ListBuilder`1<Object>&, RuntimeModule, int32, RuntimeType, bool, ListBuilder`1<Object>)`` ← `GetCustomAttributes(RuntimeModule, int32, int32, RuntimeType)` ← `GetCustomAttributes(RuntimeType, RuntimeType, bool)` ← `isUnionType(Type, BindingFlags)` (`Microsoft.FSharp.Reflection.Impl`) ← `checkUnionType(Type, BindingFlags)` ← ``GetUnionCases(Type, FSharpOption`1<BindingFlags>)`` (`Microsoft.FSharp.Reflection.FSharpType`) ← `getUnionCaseInfo(Type, String)` (`Microsoft.FSharp.Quotations.PatternsModule`) ← ``Invoke(FSharpList`1<Type>, FSharpValueOption`1<int32>)`` (`Microsoft.FSharp.Quotations.PatternsModule+u_constSpec@2137-10`) ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  2.2% | 233.7ms | `UNMANAGED_CODE_TIME` ← `MakeGenericType(Type[])` (`System.RuntimeType`) ← ``Invoke(FSharpFunc`2<int32, Type>)`` (`Microsoft.FSharp.Quotations.PatternsModule+u_dtype@1905-3`) ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  2.0% | 214.4ms | `UNMANAGED_CODE_TIME` ← `MakeGenericType(Type[])` (`System.RuntimeType`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  1.5% | 167.1ms | `UNMANAGED_CODE_TIME` ← `?!?` ← `MakeGenericType(Type[])` (`System.RuntimeType`) ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`) ← ``mapToFreshConsTail(FSharpList`1<!!0>, FSharpFunc`2<!!1, !!0>, FSharpList`1<!!1>)`` (`Microsoft.FSharp.Primitives.Basics.List`) ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  1.2% | 132.0ms | `UNMANAGED_CODE_TIME` ← `?!?` ← `MakeGenericType(Type[])` (`System.RuntimeType`) ← ``Invoke(FSharpFunc`2<int32, Type>)`` (`Microsoft.FSharp.Quotations.PatternsModule+u_dtype@1905-3`) ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  1.1% | 119.4ms | `UNMANAGED_CODE_TIME` ← `?!?` ← `MakeGenericType(Type[])` (`System.RuntimeType`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  1.0% | 109.4ms | `UNMANAGED_CODE_TIME` ← `MakeGenericType(Type[])` (`System.RuntimeType`) ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  1.0% | 103.1ms | `UNMANAGED_CODE_TIME` ← `?!?` ← `MakeGenericType(Type[])` (`System.RuntimeType`) ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  0.9% |  94.4ms | `UNMANAGED_CODE_TIME` ← `GetInstantiationInternal()` (`System.RuntimeTypeHandle`) ← `GetGenericArgumentsInternal()` (`System.RuntimeType`) ← `MakeGenericType(Type[])` ← ``map(FSharpFunc`2<!!0, !!1>, FSharpList`1<!!0>)`` (`Microsoft.FSharp.Primitives.Basics.List`) ← ``appL(FSharpList`1<FSharpFunc`2<!!0, !!1>>, !!0)`` (`Microsoft.FSharp.Quotations.PatternsModule`) ← ``Invoke(FSharpFunc`2<int32, Type>)`` (`Microsoft.FSharp.Quotations.PatternsModule+b@1962-1`) ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`) ← ``mapToFreshConsTail(FSharpList`1<!!0>, FSharpFunc`2<!!1, !!0>, FSharpList`1<!!1>)`` (`Microsoft.FSharp.Primitives.Basics.List`) ← ``map(FSharpFunc`2<!!0, !!1>, FSharpList`1<!!0>)`` ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`) ← ``map(FSharpFunc`2<!!0, !!1>, FSharpList`1<!!0>)`` (`Microsoft.FSharp.Primitives.Basics.List`) ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1994-5`) ← `deserialize(Type, Type[], Type[], FSharpExpr[], unsigned int8[])` (`Microsoft.FSharp.Quotations.PatternsModule`) ← `Deserialize40(Type, Type[], Type[], FSharpExpr[], unsigned int8[])` (`Microsoft.FSharp.Quotations.FSharpExpr`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  0.8% |  90.5ms | `UNMANAGED_CODE_TIME` ← `?!?` ← `ResolveTypeHandle(int32, RuntimeTypeHandle[], RuntimeTypeHandle[])` (`System.ModuleHandle`) ← `ResolveType(int32, Type[], Type[])` (`System.Reflection.RuntimeModule`) ← ``FilterCustomAttributeRecord(MetadataToken, MetadataImport&, RuntimeModule, MetadataToken, RuntimeType, bool, ListBuilder`1<Object>&, RuntimeType&, IRuntimeMethodInfo&, bool&)`` (`System.Reflection.CustomAttribute`) ← ``AddCustomAttributes(ListBuilder`1<Object>&, RuntimeModule, int32, RuntimeType, bool, ListBuilder`1<Object>)`` ← `GetCustomAttributes(RuntimeModule, int32, int32, RuntimeType)` ← `GetCustomAttributes(RuntimeType, RuntimeType, bool)` ← `tryFindCompilationMappingAttributeFromType(Type)` (`Microsoft.FSharp.Reflection.Impl`) ← `tryFindSourceConstructFlagsOfType(Type)` ← `isExceptionRepr(Type, BindingFlags)` ← `getTypeOfReprType(Type, BindingFlags)` ← ``GetUnionCases(Type, FSharpOption`1<BindingFlags>)`` (`Microsoft.FSharp.Reflection.FSharpType`) ← `getUnionCaseInfo(Type, String)` (`Microsoft.FSharp.Quotations.PatternsModule`) ← ``Invoke(FSharpList`1<Type>)`` (`Microsoft.FSharp.Quotations.PatternsModule+u_UnionCaseInfo@2017`) ← ``Invoke(FSharpList`1<Type>, FSharpValueOption`1<int32>)`` (`Microsoft.FSharp.Quotations.PatternsModule+u_constSpec@2137-10`) ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`) ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1983-2`) ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1994-5`) ← `deserialize(Type, Type[], Type[], FSharpExpr[], unsigned int8[])` (`Microsoft.FSharp.Quotations.PatternsModule`) ← `Deserialize40(Type, Type[], Type[], FSharpExpr[], unsigned int8[])` (`Microsoft.FSharp.Quotations.FSharpExpr`) |
|  0.7% |  72.2ms | `UNMANAGED_CODE_TIME` ← `?!?` ← ``ResolveMethodHandleInternal(RuntimeModule, int32, ReadOnlySpan`1<int>, ReadOnlySpan`1<int>)`` (`System.ModuleHandle`) ← `ResolveMethodHandle(int32, RuntimeTypeHandle[], RuntimeTypeHandle[])` ← ``FilterCustomAttributeRecord(MetadataToken, MetadataImport&, RuntimeModule, MetadataToken, RuntimeType, bool, ListBuilder`1<Object>&, RuntimeType&, IRuntimeMethodInfo&, bool&)`` (`System.Reflection.CustomAttribute`) ← ``AddCustomAttributes(ListBuilder`1<Object>&, RuntimeModule, int32, RuntimeType, bool, ListBuilder`1<Object>)`` ← `GetCustomAttributes(RuntimeModule, int32, int32, RuntimeType)` ← `GetCustomAttributes(RuntimeType, RuntimeType, bool)` ← `isExceptionRepr(Type, BindingFlags)` (`Microsoft.FSharp.Reflection.Impl`) ← `getTypeOfReprType(Type, BindingFlags)` ← ``GetUnionCases(Type, FSharpOption`1<BindingFlags>)`` (`Microsoft.FSharp.Reflection.FSharpType`) ← `getUnionCaseInfo(Type, String)` (`Microsoft.FSharp.Quotations.PatternsModule`) ← ``Invoke(FSharpList`1<Type>, FSharpValueOption`1<int32>)`` (`Microsoft.FSharp.Quotations.PatternsModule+u_constSpec@2137-10`) ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  0.6% |  63.7ms | `UNMANAGED_CODE_TIME` ← `?!?` ← ``ResolveMethodHandleInternal(RuntimeModule, int32, ReadOnlySpan`1<int>, ReadOnlySpan`1<int>)`` (`System.ModuleHandle`) ← `ResolveMethodHandle(int32, RuntimeTypeHandle[], RuntimeTypeHandle[])` ← ``FilterCustomAttributeRecord(MetadataToken, MetadataImport&, RuntimeModule, MetadataToken, RuntimeType, bool, ListBuilder`1<Object>&, RuntimeType&, IRuntimeMethodInfo&, bool&)`` (`System.Reflection.CustomAttribute`) ← ``AddCustomAttributes(ListBuilder`1<Object>&, RuntimeModule, int32, RuntimeType, bool, ListBuilder`1<Object>)`` ← `GetCustomAttributes(RuntimeModule, int32, int32, RuntimeType)` ← `GetCustomAttributes(RuntimeType, RuntimeType, bool)` ← `get@481-2(BindingFlags, Type)` (`Microsoft.FSharp.Reflection.Impl`) ← ``GetUnionCases(Type, FSharpOption`1<BindingFlags>)`` (`Microsoft.FSharp.Reflection.FSharpType`) ← `getUnionCaseInfo(Type, String)` (`Microsoft.FSharp.Quotations.PatternsModule`) ← ``Invoke(FSharpList`1<Type>, FSharpValueOption`1<int32>)`` (`Microsoft.FSharp.Quotations.PatternsModule+u_constSpec@2137-10`) ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  0.4% |  48.1ms | `UNMANAGED_CODE_TIME` ← ``FilterCustomAttributeRecord(MetadataToken, MetadataImport&, RuntimeModule, MetadataToken, RuntimeType, bool, ListBuilder`1<Object>&, RuntimeType&, IRuntimeMethodInfo&, bool&)`` (`System.Reflection.CustomAttribute`) ← ``AddCustomAttributes(ListBuilder`1<Object>&, RuntimeModule, int32, RuntimeType, bool, ListBuilder`1<Object>)`` ← `GetCustomAttributes(RuntimeModule, int32, int32, RuntimeType)` ← `GetCustomAttributes(RuntimeType, RuntimeType, bool)` ← `isExceptionRepr(Type, BindingFlags)` (`Microsoft.FSharp.Reflection.Impl`) ← `getTypeOfReprType(Type, BindingFlags)` ← ``GetUnionCases(Type, FSharpOption`1<BindingFlags>)`` (`Microsoft.FSharp.Reflection.FSharpType`) ← `getUnionCaseInfo(Type, String)` (`Microsoft.FSharp.Quotations.PatternsModule`) ← ``Invoke(FSharpList`1<Type>, FSharpValueOption`1<int32>)`` (`Microsoft.FSharp.Quotations.PatternsModule+u_constSpec@2137-10`) ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  0.4% |  48.1ms | `UNMANAGED_CODE_TIME` ← `?!?` ← `ResolveTypeHandle(int32, RuntimeTypeHandle[], RuntimeTypeHandle[])` (`System.ModuleHandle`) ← ``FilterCustomAttributeRecord(MetadataToken, MetadataImport&, RuntimeModule, MetadataToken, RuntimeType, bool, ListBuilder`1<Object>&, RuntimeType&, IRuntimeMethodInfo&, bool&)`` (`System.Reflection.CustomAttribute`) ← ``AddCustomAttributes(ListBuilder`1<Object>&, RuntimeModule, int32, RuntimeType, bool, ListBuilder`1<Object>)`` ← `GetCustomAttributes(RuntimeModule, int32, int32, RuntimeType)` ← `GetCustomAttributes(RuntimeType, RuntimeType, bool)` ← `isUnionType(Type, BindingFlags)` (`Microsoft.FSharp.Reflection.Impl`) ← `checkUnionType(Type, BindingFlags)` ← ``GetUnionCases(Type, FSharpOption`1<BindingFlags>)`` (`Microsoft.FSharp.Reflection.FSharpType`) ← `getUnionCaseInfo(Type, String)` (`Microsoft.FSharp.Quotations.PatternsModule`) ← ``Invoke(FSharpList`1<Type>, FSharpValueOption`1<int32>)`` (`Microsoft.FSharp.Quotations.PatternsModule+u_constSpec@2137-10`) ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  0.4% |  45.5ms | `UNMANAGED_CODE_TIME` ← `?!?` ← `ResolveTypeHandle(int32, RuntimeTypeHandle[], RuntimeTypeHandle[])` (`System.ModuleHandle`) ← ``FilterCustomAttributeRecord(MetadataToken, MetadataImport&, RuntimeModule, MetadataToken, RuntimeType, bool, ListBuilder`1<Object>&, RuntimeType&, IRuntimeMethodInfo&, bool&)`` (`System.Reflection.CustomAttribute`) ← ``AddCustomAttributes(ListBuilder`1<Object>&, RuntimeModule, int32, RuntimeType, bool, ListBuilder`1<Object>)`` ← `GetCustomAttributes(RuntimeModule, int32, int32, RuntimeType)` ← `GetCustomAttributes(RuntimeType, RuntimeType, bool)` ← `isExceptionRepr(Type, BindingFlags)` (`Microsoft.FSharp.Reflection.Impl`) ← `getTypeOfReprType(Type, BindingFlags)` ← ``GetUnionCases(Type, FSharpOption`1<BindingFlags>)`` (`Microsoft.FSharp.Reflection.FSharpType`) ← `getUnionCaseInfo(Type, String)` (`Microsoft.FSharp.Quotations.PatternsModule`) ← ``Invoke(FSharpList`1<Type>, FSharpValueOption`1<int32>)`` (`Microsoft.FSharp.Quotations.PatternsModule+u_constSpec@2137-10`) ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  0.4% |  41.7ms | `?!?` ← `ResolveTypeHandle(int32, RuntimeTypeHandle[], RuntimeTypeHandle[])` (`System.ModuleHandle`) ← `ResolveType(int32, Type[], Type[])` (`System.Reflection.RuntimeModule`) ← ``FilterCustomAttributeRecord(MetadataToken, MetadataImport&, RuntimeModule, MetadataToken, RuntimeType, bool, ListBuilder`1<Object>&, RuntimeType&, IRuntimeMethodInfo&, bool&)`` (`System.Reflection.CustomAttribute`) ← ``AddCustomAttributes(ListBuilder`1<Object>&, RuntimeModule, int32, RuntimeType, bool, ListBuilder`1<Object>)`` ← `GetCustomAttributes(RuntimeModule, int32, int32, RuntimeType)` ← `GetCustomAttributes(RuntimeType, RuntimeType, bool)` ← `tryFindCompilationMappingAttributeFromType(Type)` (`Microsoft.FSharp.Reflection.Impl`) ← `tryFindSourceConstructFlagsOfType(Type)` ← `isExceptionRepr(Type, BindingFlags)` ← `getTypeOfReprType(Type, BindingFlags)` ← ``GetUnionCases(Type, FSharpOption`1<BindingFlags>)`` (`Microsoft.FSharp.Reflection.FSharpType`) ← `getUnionCaseInfo(Type, String)` (`Microsoft.FSharp.Quotations.PatternsModule`) ← ``Invoke(FSharpList`1<Type>)`` (`Microsoft.FSharp.Quotations.PatternsModule+u_UnionCaseInfo@2017`) ← ``Invoke(FSharpList`1<Type>, FSharpValueOption`1<int32>)`` (`Microsoft.FSharp.Quotations.PatternsModule+u_constSpec@2137-10`) ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`) ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1983-2`) ← `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1994-5`) ← `deserialize(Type, Type[], Type[], FSharpExpr[], unsigned int8[])` (`Microsoft.FSharp.Quotations.PatternsModule`) ← `Deserialize40(Type, Type[], Type[], FSharpExpr[], unsigned int8[])` (`Microsoft.FSharp.Quotations.FSharpExpr`)                         |

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

#### Callers

Callers with the largest change in contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `GetInstantiationInternal()` (`System.RuntimeTypeHandle`)

|  Change |   Delta |      % |           Time | Caller                          | Location             |
| ------: | ------: | -----: | -------------: | ------------------------------- | -------------------- |
| +112.7% | +9.20ms | 100.0% | 8.2ms → 17.4ms | `GetGenericArgumentsInternal()` | `System.RuntimeType` |

##### `u_Expr(InputState)` (`Microsoft.FSharp.Quotations.PatternsModule`)

|  Change |    Delta |            % |          Time | Caller               | Location                                                       |
| ------: | -------: | -----------: | ------------: | -------------------- | -------------------------------------------------------------- |
| +202.9% |  +2.73ms |       100.0% | 1.3ms → 4.1ms | `Invoke(InputState)` | `Microsoft.FSharp.Quotations.PatternsModule+args@1963-1`       |
| removed | -<0.01µs | <0.1% → 0.0% |  <0.1µs → 0ms | `Invoke(InputState)` | `Microsoft.FSharp.Quotations.PatternsModule+unpickleExpr@2248` |

##### `u_NamedType(InputState)` (`Microsoft.FSharp.Quotations.PatternsModule`)

| Change |   Delta |             % |        Time | Caller                      | Location                                     |
| -----: | ------: | ------------: | ----------: | --------------------------- | -------------------------------------------- |
|    new | +2.72ms | 0.0% → 100.0% | 0ms → 2.7ms | `u_tyconstSpec(InputState)` | `Microsoft.FSharp.Quotations.PatternsModule` |

##### `u_tyconstSpec(InputState)` (`Microsoft.FSharp.Quotations.PatternsModule`)

| Change |   Delta |             % |        Time | Caller                | Location                                     |
| -----: | ------: | ------------: | ----------: | --------------------- | -------------------------------------------- |
|    new | +2.69ms | 0.0% → 100.0% | 0ms → 2.7ms | `u_dtype(InputState)` | `Microsoft.FSharp.Quotations.PatternsModule` |

##### ``unpickleObj(Assembly, Type[], FSharpFunc`2<InputState, !!0>, unsigned int8[])`` (`Microsoft.FSharp.Quotations.PatternsModule+SimpleUnpickle`)

| Change |   Delta |             % |        Time | Caller                                        | Location                                     |
| -----: | ------: | ------------: | ----------: | --------------------------------------------- | -------------------------------------------- |
|    new | +1.43ms | 0.0% → 100.0% | 0ms → 1.4ms | `unpickleExpr(Type, Type[], unsigned int8[])` | `Microsoft.FSharp.Quotations.PatternsModule` |

##### `u_int32(InputState)` (`Microsoft.FSharp.Quotations.PatternsModule+SimpleUnpickle`)

| Change |   Delta |             % |        Time | Caller                      | Location                                                    |
| -----: | ------: | ------------: | ----------: | --------------------------- | ----------------------------------------------------------- |
|    new | +1.37ms | 0.0% → 100.0% | 0ms → 1.4ms | `u_uniq(!!0[], InputState)` | `Microsoft.FSharp.Quotations.PatternsModule+SimpleUnpickle` |

##### `u_uniq(!!0[], InputState)` (`Microsoft.FSharp.Quotations.PatternsModule+SimpleUnpickle`)

| Change |   Delta |             % |        Time | Caller                    | Location                                     |
| -----: | ------: | ------------: | ----------: | ------------------------- | -------------------------------------------- |
|    new | +1.37ms | 0.0% → 100.0% | 0ms → 1.4ms | `u_NamedType(InputState)` | `Microsoft.FSharp.Quotations.PatternsModule` |

##### ``mapToFreshConsTail(FSharpList`1<!!0>, FSharpFunc`2<!!1, !!0>, FSharpList`1<!!1>)`` (`Microsoft.FSharp.Primitives.Basics.List`)

| Change |   Delta |             % |        Time | Caller                                             | Location                                  |
| -----: | ------: | ------------: | ----------: | -------------------------------------------------- | ----------------------------------------- |
|    new | +1.37ms | 0.0% → 100.0% | 0ms → 1.4ms | ``map(FSharpFunc`2<!!0, !!1>, FSharpList`1<!!0>)`` | `Microsoft.FSharp.Primitives.Basics.List` |

##### `NewUnique(!0)` (``Microsoft.FSharp.Quotations.PatternsModule+ModuleDefinitionBindingResult`2[System.__Canon,System.__Canon]``)

| Change |   Delta |             % |        Time | Caller                    | Location                                     |
| -----: | ------: | ------------: | ----------: | ------------------------- | -------------------------------------------- |
|    new | +1.35ms | 0.0% → 100.0% | 0ms → 1.4ms | `u_constSpec(InputState)` | `Microsoft.FSharp.Quotations.PatternsModule` |

##### `get_CurrentCulture()` (`System.Globalization.CultureInfo`)

| Change |   Delta |             % |        Time | Caller              | Location                                |
| -----: | ------: | ------------: | ----------: | ------------------- | --------------------------------------- |
|    new | +1.35ms | 0.0% → 100.0% | 0ms → 1.4ms | `get_CurrentInfo()` | `System.Globalization.NumberFormatInfo` |

##### ``Invoke(FSharpFunc`2<int32, Type>)`` (`Microsoft.FSharp.Quotations.PatternsModule+u_dtype@1905-3`)

| Change |   Delta |             % |        Time | Caller               | Location                                                 |
| -----: | ------: | ------------: | ----------: | -------------------- | -------------------------------------------------------- |
|    new | +1.35ms | 0.0% → 100.0% | 0ms → 1.3ms | `Invoke(BindingEnv)` | `Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965` |

##### ``InsertionSort(Span`1<!0>, Comparison`1<!0>)`` (``System.Collections.Generic.ArraySortHelper`1[System.__Canon]``)

| Change |   Delta |             % |        Time | Caller                                             | Location                                                         |
| -----: | ------: | ------------: | ----------: | -------------------------------------------------- | ---------------------------------------------------------------- |
|    new | +1.34ms | 0.0% → 100.0% | 0ms → 1.3ms | ``IntroSort(Span`1<!0>, int32, Comparison`1<!0>)`` | ``System.Collections.Generic.ArraySortHelper`1[System.__Canon]`` |

##### `Invoke(InputState)` (`Microsoft.FSharp.Quotations.PatternsModule+attrs@1993`)

| Change |   Delta |             % |        Time | Caller                                                                       | Location                                                    |
| -----: | ------: | ------------: | ----------: | ---------------------------------------------------------------------------- | ----------------------------------------------------------- |
|    new | +1.34ms | 0.0% → 100.0% | 0ms → 1.3ms | ``u_list_aux(FSharpFunc`2<InputState, !!0>, FSharpList`1<!!0>, InputState)`` | `Microsoft.FSharp.Quotations.PatternsModule+SimpleUnpickle` |

##### `Invoke(InputState)` (`Microsoft.FSharp.Quotations.PatternsModule+SimpleUnpickle+unpickleObj@1810`)

| Change |   Delta |             % |        Time | Caller                                                                       | Location                                                    |
| -----: | ------: | ------------: | ----------: | ---------------------------------------------------------------------------- | ----------------------------------------------------------- |
|    new | +1.34ms | 0.0% → 100.0% | 0ms → 1.3ms | ``u_list_aux(FSharpFunc`2<InputState, !!0>, FSharpList`1<!!0>, InputState)`` | `Microsoft.FSharp.Quotations.PatternsModule+SimpleUnpickle` |

##### `Invoke(InputState)` (`Microsoft.FSharp.Quotations.PatternsModule+b@1962`)

| Change |   Delta |             % |        Time | Caller                                                                       | Location                                                    |
| -----: | ------: | ------------: | ----------: | ---------------------------------------------------------------------------- | ----------------------------------------------------------- |
|    new | +1.34ms | 0.0% → 100.0% | 0ms → 1.3ms | ``u_list_aux(FSharpFunc`2<InputState, !!0>, FSharpList`1<!!0>, InputState)`` | `Microsoft.FSharp.Quotations.PatternsModule+SimpleUnpickle` |

##### `CreateManifestAndDescriptors(Type, String, EventSource, EventManifestOptions)` (`System.Diagnostics.Tracing.EventSource`)

|        Change |   Delta |      % |           Time | Caller                           | Location                                 |
| ------------: | ------: | -----: | -------------: | -------------------------------- | ---------------------------------------- |
| +643056892.9% | +1.33ms | 100.0% | <0.1µs → 1.3ms | `EnsureDescriptorsInitialized()` | `System.Diagnostics.Tracing.EventSource` |

##### ``tryGetValue(IComparer`1<!!0>, !!0, !!1&, MapTree`2<!!0, !!1>)`` (`Microsoft.FSharp.Collections.MapTreeModule`)

| Change |   Delta |             % |        Time | Caller                                               | Location                                     |
| -----: | ------: | ------------: | ----------: | ---------------------------------------------------- | -------------------------------------------- |
|    new | +1.32ms | 0.0% → 100.0% | 0ms → 1.3ms | ``find(IComparer`1<!!0>, !!0, MapTree`2<!!0, !!1>)`` | `Microsoft.FSharp.Collections.MapTreeModule` |

##### `Invoke(InputState)` (`Microsoft.FSharp.Quotations.PatternsModule+u_dtype@1905-2`)

| Change |   Delta |      % |  Time | Caller                | Location                                     |
| -----: | ------: | -----: | ----: | --------------------- | -------------------------------------------- |
|  +1.7% | +0.02ms | 100.0% | 1.3ms | `u_dtype(InputState)` | `Microsoft.FSharp.Quotations.PatternsModule` |

##### `Invoke(Unit)` (`<StartupCode$Argu>.$ArgumentParser+-cctor@87-1[System.__Canon]`)

| Change |   Delta |             % |         Time | Caller                             | Location                          |
| -----: | ------: | ------------: | -----------: | ---------------------------------- | --------------------------------- |
|    new | +0.01µs | 0.0% → 100.0% | 0ms → <0.1µs | `ViaFactory(LazyThreadSafetyMode)` | ``System.Lazy`1[System.__Canon]`` |

##### `deserialize(Type, Type[], Type[], FSharpExpr[], unsigned int8[])` (`Microsoft.FSharp.Quotations.PatternsModule`)

| Change |    Delta |      % |   Time | Caller                                                               | Location                                 |
| -----: | -------: | -----: | -----: | -------------------------------------------------------------------- | ---------------------------------------- |
| +56.0% | +<0.01µs | 100.0% | <0.1µs | `Deserialize40(Type, Type[], Type[], FSharpExpr[], unsigned int8[])` | `Microsoft.FSharp.Quotations.FSharpExpr` |

##### `UNMANAGED_CODE_TIME` (`<unknown>`)

|  Change |    Delta |             % |              Time | Caller                           | Location                                                               |
| ------: | -------: | ------------: | ----------------: | -------------------------------- | ---------------------------------------------------------------------- |
|   -2.1% | -83.99ms | 36.8% → 36.6% |     4.07s → 3.99s | `MakeGenericType(Type[])`        | `System.RuntimeType`                                                   |
|   -0.7% | -47.26ms | 59.2% → 59.6% |     6.55s → 6.50s | `?!?`                            | `<unknown>`                                                            |
|  -58.8% |  -9.64ms |          0.1% |    16.4ms → 6.8ms | `Instantiate(Type[])`            | `System.RuntimeTypeHandle`                                             |
|   +5.5% |  +7.11ms |   1.2% → 1.3% | 130.1ms → 137.2ms | `GetInstantiationInternal()`     | `System.RuntimeTypeHandle`                                             |
| removed |  -6.70ms |   0.1% → 0.0% |       6.7ms → 0ms | ``IntroSort(Span`1<!0>, int32)`` | ``System.Collections.Generic.GenericArraySortHelper`1[System.UInt64]`` |

##### `?!?` (`<unknown>`)

| Change |    Delta |      % |            Time | Caller                                                               | Location              |
| -----: | -------: | -----: | --------------: | -------------------------------------------------------------------- | --------------------- |
| -22.5% | -10.64ms | 100.0% | 47.4ms → 36.8ms | `ResolveTypeHandle(int32, RuntimeTypeHandle[], RuntimeTypeHandle[])` | `System.ModuleHandle` |

##### `GetValue(bool)` (`System.Reflection.MdFieldInfo`)

|  Change |   Delta |             % |        Time | Caller                         | Location                                                        |
| ------: | ------: | ------------: | ----------: | ------------------------------ | --------------------------------------------------------------- |
| removed | -4.11ms | 100.0% → 0.0% | 4.1ms → 0ms | `Invoke(FieldInfo, FieldInfo)` | `Microsoft.FSharp.Reflection.Impl+getUnionTypeTagNameMap@405-1` |

##### `u_dtype(InputState)` (`Microsoft.FSharp.Quotations.PatternsModule`)

|  Change |   Delta |             % |        Time | Caller               | Location                                            |
| ------: | ------: | ------------: | ----------: | -------------------- | --------------------------------------------------- |
| removed | -4.07ms | 100.0% → 0.0% | 4.1ms → 0ms | `Invoke(InputState)` | `Microsoft.FSharp.Quotations.PatternsModule+b@1962` |

##### ``u_list_aux(FSharpFunc`2<InputState, !!0>, FSharpList`1<!!0>, InputState)`` (`Microsoft.FSharp.Quotations.PatternsModule+SimpleUnpickle`)

|  Change |   Delta |      % |           Time | Caller               | Location                                     |
| ------: | ------: | -----: | -------------: | -------------------- | -------------------------------------------- |
| -100.0% | -2.69ms | 100.0% | 2.7ms → <0.1µs | `u_Expr(InputState)` | `Microsoft.FSharp.Quotations.PatternsModule` |

##### ``TryParseBinaryIntegerStyle(ReadOnlySpan`1<!!0>, NumberStyles, NumberFormatInfo, !!1&)`` (`System.Number`)

|  Change |   Delta |            % |        Time | Caller                      | Location                                     |
| ------: | ------: | -----------: | ----------: | --------------------------- | -------------------------------------------- |
| removed | -1.36ms | 50.5% → 0.0% | 1.4ms → 0ms | `TryParse(String, int32&)`  | `System.Int32`                               |
| removed | -1.33ms | 49.5% → 0.0% | 1.3ms → 0ms | `u_tyconstSpec(InputState)` | `Microsoft.FSharp.Quotations.PatternsModule` |

##### `Invoke(InputState)` (`Microsoft.FSharp.Quotations.PatternsModule+u_dtype@1905-1`)

|  Change |   Delta |             % |        Time | Caller                                                                       | Location                                                    |
| ------: | ------: | ------------: | ----------: | ---------------------------------------------------------------------------- | ----------------------------------------------------------- |
| removed | -2.54ms | 100.0% → 0.0% | 2.5ms → 0ms | ``u_list_aux(FSharpFunc`2<InputState, !!0>, FSharpList`1<!!0>, InputState)`` | `Microsoft.FSharp.Quotations.PatternsModule+SimpleUnpickle` |

##### ``add(IComparer`1<!!0>, !!0, !!1, MapTree`2<!!0, !!1>)`` (`Microsoft.FSharp.Collections.MapTreeModule`)

|  Change |   Delta |             % |        Time | Caller                                             | Location                                     |
| ------: | ------: | ------------: | ----------: | -------------------------------------------------- | -------------------------------------------- |
| removed | -1.37ms | 100.0% → 0.0% | 1.4ms → 0ms | ``ofArray(IComparer`1<!!0>, Tuple`2<!!0, !!1>[])`` | `Microsoft.FSharp.Collections.MapTreeModule` |

##### ``ofArray(IComparer`1<!!0>, Tuple`2<!!0, !!1>[])`` (`Microsoft.FSharp.Collections.MapTreeModule`)

|  Change |   Delta |             % |        Time | Caller                                                        | Location                                     |
| ------: | ------: | ------------: | ----------: | ------------------------------------------------------------- | -------------------------------------------- |
| removed | -1.37ms | 100.0% → 0.0% | 1.4ms → 0ms | ``ofSeq(IComparer`1<!!0>, IEnumerable`1<Tuple`2<!!0, !!1>>)`` | `Microsoft.FSharp.Collections.MapTreeModule` |

##### ``ofSeq(IComparer`1<!!0>, IEnumerable`1<Tuple`2<!!0, !!1>>)`` (`Microsoft.FSharp.Collections.MapTreeModule`)

|  Change |   Delta |             % |        Time | Caller                                     | Location                                                                  |
| ------: | ------: | ------------: | ----------: | ------------------------------------------ | ------------------------------------------------------------------------- |
| removed | -1.37ms | 100.0% → 0.0% | 1.4ms → 0ms | ``Create(IEnumerable`1<Tuple`2<!0, !1>>)`` | ``Microsoft.FSharp.Collections.FSharpMap`2[System.Int32,System.__Canon]`` |

##### ``filter(FSharpFunc`2<!!0, bool>, !!0[])`` (`Microsoft.FSharp.Collections.ArrayModule+Filter`)

|  Change |   Delta |             % |        Time | Caller                                     | Location                                   |
| ------: | ------: | ------------: | ----------: | ------------------------------------------ | ------------------------------------------ |
| removed | -1.36ms | 100.0% → 0.0% | 1.4ms → 0ms | ``Filter(FSharpFunc`2<!!0, bool>, !!0[])`` | `Microsoft.FSharp.Collections.ArrayModule` |

##### ``InitializeForScan(Regex, ReadOnlySpan`1<wchar>, int32, RegexRunnerMode)`` (`System.Text.RegularExpressions.RegexRunner`)

|  Change |   Delta |             % |        Time | Caller                                                                | Location                               |
| ------: | ------: | ------------: | ----------: | --------------------------------------------------------------------- | -------------------------------------- |
| removed | -1.36ms | 100.0% → 0.0% | 1.4ms → 0ms | `RunSingleMatch(RegexRunnerMode, int32, String, int32, int32, int32)` | `System.Text.RegularExpressions.Regex` |

##### `GetCustomAttributes(RuntimeType, RuntimeType, bool)` (`System.Reflection.CustomAttribute`)

|  Change |   Delta |             % |        Time | Caller                                             | Location                           |
| ------: | ------: | ------------: | ----------: | -------------------------------------------------- | ---------------------------------- |
| removed | -1.35ms | 100.0% → 0.0% | 1.3ms → 0ms | `tryFindCompilationMappingAttributeFromType(Type)` | `Microsoft.FSharp.Reflection.Impl` |

##### `ExecutionAndPublication(LazyHelper, bool)` (``System.Lazy`1[System.__Canon]``)

|  Change |   Delta |             % |        Time | Caller          | Location                          |
| ------: | ------: | ------------: | ----------: | --------------- | --------------------------------- |
| removed | -1.35ms | 100.0% → 0.0% | 1.3ms → 0ms | `CreateValue()` | ``System.Lazy`1[System.__Canon]`` |

##### `GetCustomAttributeRecords(RuntimeModule, int32)` (`System.Reflection.RuntimeCustomAttributeData`)

|  Change |   Delta |             % |        Time | Caller                                                                                                          | Location                            |
| ------: | ------: | ------------: | ----------: | --------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| removed | -1.34ms | 100.0% → 0.0% | 1.3ms → 0ms | ``AddCustomAttributes(ListBuilder`1<Object>&, RuntimeModule, int32, RuntimeType, bool, ListBuilder`1<Object>)`` | `System.Reflection.CustomAttribute` |

##### `ToUnionParseResults()` (`Argu.CliParser+CliParseResultAggregator`)

|  Change |   Delta |             % |        Time | Caller                                                                                                                                      | Location                                  |
| ------: | ------: | ------------: | ----------: | ------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- |
| removed | -1.33ms | 100.0% → 0.0% | 1.3ms → 0ms | ``Parse(FSharpOption`1<String[]>, FSharpOption`1<IConfigurationReader>, FSharpOption`1<bool>, FSharpOption`1<bool>, FSharpOption`1<bool>)`` | ``Argu.ArgumentParser`1[System.__Canon]`` |

##### `MakeGenericType(Type[])` (`System.RuntimeType`)

|         Change |    Delta |             % |           Time | Caller                                             | Location                                                    |
| -------------: | -------: | ------------: | -------------: | -------------------------------------------------- | ----------------------------------------------------------- |
| +1888422016.0% |  +6.26ms | <0.1% → 42.1% | <0.1µs → 6.3ms | `main(String[])`                                   | `Profile`                                                   |
|         -41.2% |  -6.02ms | 91.6% → 57.9% | 14.6ms → 8.6ms | `Invoke(BindingEnv)`                               | `Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`    |
|        -100.0% |  -1.34ms |  8.4% → <0.1% | 1.3ms → <0.1µs | ``Invoke(FSharpFunc`2<int32, Type>)``              | `Microsoft.FSharp.Quotations.PatternsModule+u_dtype@1905-3` |
|        +712.1% | +<0.01µs |         <0.1% |         <0.1µs | ``map(FSharpFunc`2<!!0, !!1>, FSharpList`1<!!0>)`` | `Microsoft.FSharp.Primitives.Basics.List`                   |

##### `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`)

| Change |    Delta |             % |          Time | Caller                                                                               | Location                                                   |
| -----: | -------: | ------------: | ------------: | ------------------------------------------------------------------------------------ | ---------------------------------------------------------- |
| -12.2% |  -0.07µs | 99.9% → 99.8% | 0.6µs → 0.5µs | `main(String[])`                                                                     | `Profile`                                                  |
|    new | +<0.01µs |   0.0% → 0.1% |  0ms → <0.1µs | ``mapToFreshConsTail(FSharpList`1<!!0>, FSharpFunc`2<!!1, !!0>, FSharpList`1<!!1>)`` | `Microsoft.FSharp.Primitives.Basics.List`                  |
| +43.7% | +<0.01µs |          0.1% |        <0.1µs | `Invoke(BindingEnv)`                                                                 | `Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1994-5` |
| +40.4% | +<0.01µs |  <0.1% → 0.1% |        <0.1µs | ``map(FSharpFunc`2<!!0, !!1>, FSharpList`1<!!0>)``                                   | `Microsoft.FSharp.Primitives.Basics.List`                  |

##### `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1994-5`)

| Change |   Delta |      % |   Time | Caller                                                             | Location                                     |
| -----: | ------: | -----: | -----: | ------------------------------------------------------------------ | -------------------------------------------- |
| -63.7% | -0.02µs | 100.0% | <0.1µs | `deserialize(Type, Type[], Type[], FSharpExpr[], unsigned int8[])` | `Microsoft.FSharp.Quotations.PatternsModule` |

##### `postProcess@648(UnionArgInfo)` (`Argu.PreCompute`)

| Change |    Delta |      % |   Time | Caller                            | Location          |
| -----: | -------: | -----: | -----: | --------------------------------- | ----------------- |
| -97.7% | -<0.01µs | 100.0% | <0.1µs | `checkUnionArgInfo(UnionArgInfo)` | `Argu.PreCompute` |

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

#### Callees

Callees with the largest change in contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `isExceptionRepr(Type, BindingFlags)` (`Microsoft.FSharp.Reflection.Impl`)

| Change |    Delta |             % |              Time | Callee                                                | Location                            |
| -----: | -------: | ------------: | ----------------: | ----------------------------------------------------- | ----------------------------------- |
|  +1.6% | +58.54ms | 96.0% → 95.7% |     3.74s → 3.80s | `GetCustomAttributes(RuntimeType, RuntimeType, bool)` | `System.Reflection.CustomAttribute` |
| +10.3% | +16.02ms |   4.0% → 4.3% | 156.2ms → 172.3ms | `tryFindSourceConstructFlagsOfType(Type)`             | `Microsoft.FSharp.Reflection.Impl`  |

##### `Deserialize40(Type, Type[], Type[], FSharpExpr[], unsigned int8[])` (`Microsoft.FSharp.Quotations.FSharpExpr`)

| Change |    Delta |              % |              Time | Callee                                                             | Location                                     |
| -----: | -------: | -------------: | ----------------: | ------------------------------------------------------------------ | -------------------------------------------- |
|  +9.0% | +34.00ms | 100.0% → 99.7% | 376.8ms → 410.8ms | `deserialize(Type, Type[], Type[], FSharpExpr[], unsigned int8[])` | `Microsoft.FSharp.Quotations.PatternsModule` |
|    new |  +1.40ms |    0.0% → 0.3% |       0ms → 1.4ms | `UNMANAGED_CODE_TIME`                                              | `<unknown>`                                  |

##### `tryFindSourceConstructFlagsOfType(Type)` (`Microsoft.FSharp.Reflection.Impl`)

| Change |    Delta |             % |              Time | Callee                                                | Location                            |
| -----: | -------: | ------------: | ----------------: | ----------------------------------------------------- | ----------------------------------- |
| +11.5% | +19.95ms | 90.8% → 88.7% | 173.7ms → 193.7ms | `tryFindCompilationMappingAttributeFromType(Type)`    | `Microsoft.FSharp.Reflection.Impl`  |
| +39.5% |  +6.96ms |  9.2% → 11.3% |   17.6ms → 24.6ms | `GetCustomAttributes(RuntimeType, RuntimeType, bool)` | `System.Reflection.CustomAttribute` |

##### `deserialize(Type, Type[], Type[], FSharpExpr[], unsigned int8[])` (`Microsoft.FSharp.Quotations.PatternsModule`)

| Change |    Delta |             % |              Time | Callee                                        | Location                                                   |
| -----: | -------: | ------------: | ----------------: | --------------------------------------------- | ---------------------------------------------------------- |
|  +4.0% | +16.97ms | 96.1% → 94.5% | 428.0ms → 444.9ms | `Invoke(BindingEnv)`                          | `Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1994-5` |
| +40.5% |  +7.02ms |   3.9% → 5.2% |   17.4ms → 24.4ms | `unpickleExpr(Type, Type[], unsigned int8[])` | `Microsoft.FSharp.Quotations.PatternsModule`               |
|    new |  +1.32ms |   0.0% → 0.3% |       0ms → 1.3ms | `UNMANAGED_CODE_TIME`                         | `<unknown>`                                                |

##### `get@481-2(BindingFlags, Type)` (`Microsoft.FSharp.Reflection.Impl`)

| Change |    Delta |             % |              Time | Callee                                                | Location                            |
| -----: | -------: | ------------: | ----------------: | ----------------------------------------------------- | ----------------------------------- |
|  +3.7% | +24.55ms | 97.6% → 98.1% | 656.8ms → 681.3ms | `GetCustomAttributes(RuntimeType, RuntimeType, bool)` | `System.Reflection.CustomAttribute` |
| -17.6% |  -2.87ms |   2.4% → 1.9% |   16.3ms → 13.5ms | `isUnionType(Type, BindingFlags)`                     | `Microsoft.FSharp.Reflection.Impl`  |

##### ``ResolveMethodHandleInternal(RuntimeModule, int32, ReadOnlySpan`1<int>, ReadOnlySpan`1<int>)`` (`System.ModuleHandle`)

| Change |    Delta |      % |              Time | Callee | Location    |
| -----: | -------: | -----: | ----------------: | ------ | ----------- |
|  +8.7% | +20.68ms | 100.0% | 238.0ms → 258.7ms | `?!?`  | `<unknown>` |

##### `ResolveMethodHandle(int32, RuntimeTypeHandle[], RuntimeTypeHandle[])` (`System.ModuleHandle`)

| Change |    Delta |      % |              Time | Callee                                                                                          | Location              |
| -----: | -------: | -----: | ----------------: | ----------------------------------------------------------------------------------------------- | --------------------- |
|  +8.7% | +20.68ms | 100.0% | 238.0ms → 258.7ms | ``ResolveMethodHandleInternal(RuntimeModule, int32, ReadOnlySpan`1<int>, ReadOnlySpan`1<int>)`` | `System.ModuleHandle` |

##### `tryFindCompilationMappingAttributeFromType(Type)` (`Microsoft.FSharp.Reflection.Impl`)

| Change |    Delta |              % |              Time | Callee                                                | Location                            |
| -----: | -------: | -------------: | ----------------: | ----------------------------------------------------- | ----------------------------------- |
| +10.7% | +18.63ms | 100.0% → 99.3% | 173.7ms → 192.4ms | `GetCustomAttributes(RuntimeType, RuntimeType, bool)` | `System.Reflection.CustomAttribute` |
|    new |  +1.32ms |    0.0% → 0.7% |       0ms → 1.3ms | `tryFindCompilationMappingAttribute(Object[])`        | `Microsoft.FSharp.Reflection.Impl`  |

##### `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1983-2`)

| Change |    Delta |             % |              Time | Callee               | Location                                                    |
| -----: | -------: | ------------: | ----------------: | -------------------- | ----------------------------------------------------------- |
|  +8.1% | +19.23ms | 99.4% → 99.5% | 237.2ms → 256.4ms | `Invoke(BindingEnv)` | `Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`    |
|  +0.3% |  +4.17µs |   0.6% → 0.5% |             1.3ms | `Invoke(BindingEnv)` | `Microsoft.FSharp.Quotations.PatternsModule+u_VarDecl@2005` |

##### `getTypeOfReprType(Type, BindingFlags)` (`Microsoft.FSharp.Reflection.Impl`)

| Change |    Delta |             % |              Time | Callee                                | Location                           |
| -----: | -------: | ------------: | ----------------: | ------------------------------------- | ---------------------------------- |
|  +1.9% | +74.56ms | 82.1% → 83.4% |     3.90s → 3.97s | `isExceptionRepr(Type, BindingFlags)` | `Microsoft.FSharp.Reflection.Impl` |
|  -6.5% | -55.48ms | 17.8% → 16.6% | 847.5ms → 792.0ms | `get@472-1(BindingFlags, Type)`       | `Microsoft.FSharp.Reflection.Impl` |
|  -1.9% |  -0.03ms |         <0.1% |     1.4ms → 1.3ms | `.cctor()`                            | `Microsoft.FSharp.Reflection.Impl` |

##### ``Invoke(FSharpList`1<Type>)`` (`Microsoft.FSharp.Quotations.PatternsModule+u_UnionCaseInfo@2017`)

| Change |    Delta |      % |              Time | Callee                           | Location                                     |
| -----: | -------: | -----: | ----------------: | -------------------------------- | -------------------------------------------- |
|  +8.5% | +17.30ms | 100.0% | 203.6ms → 220.9ms | `getUnionCaseInfo(Type, String)` | `Microsoft.FSharp.Quotations.PatternsModule` |

##### `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1994-5`)

| Change |    Delta |             % |              Time | Callee                                             | Location                                                   |
| -----: | -------: | ------------: | ----------------: | -------------------------------------------------- | ---------------------------------------------------------- |
|  +8.1% | +19.23ms | 55.7% → 57.9% | 238.5ms → 257.7ms | `Invoke(BindingEnv)`                               | `Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1983-2` |
| -31.7% | -10.65ms |   7.8% → 5.2% |   33.6ms → 22.9ms | `Invoke(BindingEnv)`                               | `Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`   |
|  +5.4% |  +8.39ms | 36.4% → 36.9% | 155.9ms → 164.3ms | ``map(FSharpFunc`2<!!0, !!1>, FSharpList`1<!!0>)`` | `Microsoft.FSharp.Primitives.Basics.List`                  |

##### `GetInstantiationInternal()` (`System.RuntimeTypeHandle`)

| Change |   Delta |             % |              Time | Callee                | Location    |
| -----: | ------: | ------------: | ----------------: | --------------------- | ----------- |
|  +5.5% | +7.11ms | 94.1% → 88.8% | 130.1ms → 137.2ms | `UNMANAGED_CODE_TIME` | `<unknown>` |

##### `GetGenericArgumentsInternal()` (`System.RuntimeType`)

| Change |    Delta |      % |              Time | Callee                       | Location                   |
| -----: | -------: | -----: | ----------------: | ---------------------------- | -------------------------- |
| +11.8% | +16.31ms | 100.0% | 138.2ms → 154.5ms | `GetInstantiationInternal()` | `System.RuntimeTypeHandle` |

##### ``map(FSharpFunc`2<!!0, !!1>, FSharpList`1<!!0>)`` (`Microsoft.FSharp.Primitives.Basics.List`)

| Change |    Delta |             % |              Time | Callee                                                                               | Location                                                    |
| -----: | -------: | ------------: | ----------------: | ------------------------------------------------------------------------------------ | ----------------------------------------------------------- |
|  +9.9% | +11.96ms | 77.4% → 80.7% | 120.6ms → 132.6ms | ``mapToFreshConsTail(FSharpList`1<!!0>, FSharpFunc`2<!!1, !!0>, FSharpList`1<!!1>)`` | `Microsoft.FSharp.Primitives.Basics.List`                   |
|  +8.6% | +10.65ms | 79.1% → 81.5% | 123.3ms → 133.9ms | `MakeGenericType(Type[])`                                                            | `System.RuntimeType`                                        |
|  +5.4% |  +8.39ms |        100.0% | 155.9ms → 164.3ms | `Invoke(BindingEnv)`                                                                 | `Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`    |
| -37.9% |  -4.13ms |   7.0% → 4.1% |    10.9ms → 6.8ms | ``Invoke(FSharpFunc`2<int32, Type>)``                                                | `Microsoft.FSharp.Quotations.PatternsModule+u_dtype@1905-3` |

##### ``Invoke(FSharpFunc`2<int32, Type>)`` (`Microsoft.FSharp.Quotations.PatternsModule+b@1962-1`)

| Change |   Delta |              % |              Time | Callee                                              | Location                                     |
| -----: | ------: | -------------: | ----------------: | --------------------------------------------------- | -------------------------------------------- |
|  +4.9% | +6.52ms | 100.0% → 99.1% | 134.2ms → 140.7ms | ``appL(FSharpList`1<FSharpFunc`2<!!0, !!1>>, !!0)`` | `Microsoft.FSharp.Quotations.PatternsModule` |
|    new | +1.32ms |    0.0% → 0.9% |       0ms → 1.3ms | `UNMANAGED_CODE_TIME`                               | `<unknown>`                                  |

##### `unpickleExpr(Type, Type[], unsigned int8[])` (`Microsoft.FSharp.Quotations.PatternsModule`)

|  Change |   Delta |             % |            Time | Callee                                                                            | Location                                                       |
| ------: | ------: | ------------: | --------------: | --------------------------------------------------------------------------------- | -------------------------------------------------------------- |
|  +26.6% | +4.26ms | 92.3% → 83.2% | 16.0ms → 20.3ms | `Invoke(InputState)`                                                              | `Microsoft.FSharp.Quotations.PatternsModule+unpickleExpr@2248` |
| +205.9% | +2.76ms |  7.7% → 16.8% |   1.3ms → 4.1ms | ``unpickleObj(Assembly, Type[], FSharpFunc`2<InputState, !!0>, unsigned int8[])`` | `Microsoft.FSharp.Quotations.PatternsModule+SimpleUnpickle`    |

##### `u_tyconstSpec(InputState)` (`Microsoft.FSharp.Quotations.PatternsModule`)

|  Change |   Delta |             % |          Time | Callee                                                                                    | Location                                     |
| ------: | ------: | ------------: | ------------: | ----------------------------------------------------------------------------------------- | -------------------------------------------- |
| +401.0% | +5.45ms | 50.5% → 71.7% | 1.4ms → 6.8ms | `u_NamedType(InputState)`                                                                 | `Microsoft.FSharp.Quotations.PatternsModule` |
| removed | -1.33ms |  49.5% → 0.0% |   1.3ms → 0ms | ``TryParseBinaryIntegerStyle(ReadOnlySpan`1<!!0>, NumberStyles, NumberFormatInfo, !!1&)`` | `System.Number`                              |

##### `OnStart(String, String, int32, Guid&, Guid&, EventActivityOptions, bool)` (`System.Diagnostics.Tracing.ActivityTracker`)

| Change |   Delta |             % |        Time | Callee                                     | Location                            |
| -----: | ------: | ------------: | ----------: | ------------------------------------------ | ----------------------------------- |
|    new | +6.59ms | 0.0% → 100.0% | 0ms → 6.6ms | `SetLocalValue(IAsyncLocal, Object, bool)` | `System.Threading.ExecutionContext` |

##### ``appL(FSharpList`1<FSharpFunc`2<!!0, !!1>>, !!0)`` (`Microsoft.FSharp.Quotations.PatternsModule`)

| Change |   Delta |      % |              Time | Callee                                             | Location                                  |
| -----: | ------: | -----: | ----------------: | -------------------------------------------------- | ----------------------------------------- |
|  +4.9% | +6.52ms | 100.0% | 134.2ms → 140.7ms | ``map(FSharpFunc`2<!!0, !!1>, FSharpList`1<!!0>)`` | `Microsoft.FSharp.Primitives.Basics.List` |

##### `main(String[])` (`Profile`)

| Change |     Delta |             % |              Time | Callee                                                                                                                                      | Location                                                 |
| -----: | --------: | ------------: | ----------------: | ------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
|  -1.2% | -121.01ms | 91.0% → 91.2% |   10.15s → 10.02s | `Invoke(BindingEnv)`                                                                                                                        | `Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965` |
|  -9.6% |  -37.34ms |   3.5% → 3.2% | 387.4ms → 350.1ms | `MakeGenericType(Type[])`                                                                                                                   | `System.RuntimeType`                                     |
|  +9.4% |  +35.40ms |   3.4% → 3.7% | 376.8ms → 412.2ms | `Deserialize40(Type, Type[], Type[], FSharpExpr[], unsigned int8[])`                                                                        | `Microsoft.FSharp.Quotations.FSharpExpr`                 |
| -18.5% |  -10.65ms |   0.5% → 0.4% |   57.5ms → 46.9ms | ``Parse(FSharpOption`1<String[]>, FSharpOption`1<IConfigurationReader>, FSharpOption`1<bool>, FSharpOption`1<bool>, FSharpOption`1<bool>)`` | ``Argu.ArgumentParser`1[System.__Canon]``                |
| -13.7% |  -10.24ms |   0.7% → 0.6% |   74.8ms → 64.6ms | ``.ctor(FSharpOption`1<String>, FSharpOption`1<String>, FSharpOption`1<int32>, FSharpOption`1<IExiter>, FSharpOption`1<bool>)``             | ``Argu.ArgumentParser`1[System.__Canon]``                |

##### `MakeGenericType(Type[])` (`System.RuntimeType`)

|  Change |    Delta |             % |              Time | Callee                          | Location                   |
| ------: | -------: | ------------: | ----------------: | ------------------------------- | -------------------------- |
|   -2.1% | -83.99ms | 84.7% → 85.3% |     4.07s → 3.99s | `UNMANAGED_CODE_TIME`           | `<unknown>`                |
|  -10.6% | -59.85ms | 11.7% → 10.8% | 565.5ms → 505.6ms | `?!?`                           | `<unknown>`                |
|  +11.8% | +16.31ms |   2.9% → 3.3% | 138.2ms → 154.5ms | `GetGenericArgumentsInternal()` | `System.RuntimeType`       |
|  -58.8% |  -9.64ms |   0.3% → 0.1% |    16.4ms → 6.8ms | `Instantiate(Type[])`           | `System.RuntimeTypeHandle` |
| +194.3% |  +2.67ms |  <0.1% → 0.1% |     1.4ms → 4.0ms | `Instantiate(RuntimeType)`      | `System.RuntimeTypeHandle` |

##### `Invoke(BindingEnv)` (`Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965`)

| Change |    Delta |             % |              Time | Callee                                                                               | Location                                                         |
| -----: | -------: | ------------: | ----------------: | ------------------------------------------------------------------------------------ | ---------------------------------------------------------------- |
|  -1.8% | -67.43ms | 36.4% → 36.1% |     3.84s → 3.77s | `MakeGenericType(Type[])`                                                            | `System.RuntimeType`                                             |
|  -1.1% | -41.18ms | 34.3% → 34.2% |     3.62s → 3.58s | ``mapToFreshConsTail(FSharpList`1<!!0>, FSharpFunc`2<!!1, !!0>, FSharpList`1<!!1>)`` | `Microsoft.FSharp.Primitives.Basics.List`                        |
|  -8.0% | -34.69ms |   4.1% → 3.8% | 435.5ms → 400.9ms | ``Invoke(FSharpFunc`2<int32, Type>)``                                                | `Microsoft.FSharp.Quotations.PatternsModule+u_dtype@1905-3`      |
|  +9.9% | +11.96ms |   1.1% → 1.3% | 120.6ms → 132.6ms | ``map(FSharpFunc`2<!!0, !!1>, FSharpList`1<!!0>)``                                   | `Microsoft.FSharp.Primitives.Basics.List`                        |
|  -0.2% | -11.15ms | 58.2% → 58.7% |     6.16s → 6.14s | ``Invoke(FSharpList`1<Type>, FSharpValueOption`1<int32>)``                           | `Microsoft.FSharp.Quotations.PatternsModule+u_constSpec@2137-10` |

##### `?!?` (`<unknown>`)

|  Change |    Delta |             % |          Time | Callee                                               | Location                                     |
| ------: | -------: | ------------: | ------------: | ---------------------------------------------------- | -------------------------------------------- |
|   -0.7% | -47.26ms | 99.2% → 99.4% | 6.55s → 6.50s | `UNMANAGED_CODE_TIME`                                | `<unknown>`                                  |
| removed |  -2.67ms |  <0.1% → 0.0% |   2.7ms → 0ms | `OnStop(String, String, int32, Guid&, bool)`         | `System.Diagnostics.Tracing.ActivityTracker` |
|     new |  +1.37ms |  0.0% → <0.1% |   0ms → 1.4ms | `GetTypeHelper(wchar*, RuntimeAssembly, bool, bool)` | `System.Reflection.TypeNameParser`           |
|   -0.2% |  -2.42µs |         <0.1% |         1.3ms | `.ctor()`                                            | `System.Configuration.AppSettingsSection`    |

##### `get@472-1(BindingFlags, Type)` (`Microsoft.FSharp.Reflection.Impl`)

| Change |    Delta |             % |              Time | Callee                                                | Location                            |
| -----: | -------: | ------------: | ----------------: | ----------------------------------------------------- | ----------------------------------- |
|  -6.9% | -57.05ms | 98.1% → 97.8% | 831.5ms → 774.4ms | `GetCustomAttributes(RuntimeType, RuntimeType, bool)` | `System.Reflection.CustomAttribute` |
|  +9.8% |  +1.57ms |   1.9% → 2.2% |   16.0ms → 17.6ms | `isUnionType(Type, BindingFlags)`                     | `Microsoft.FSharp.Reflection.Impl`  |

##### `checkUnionType(Type, BindingFlags)` (`Microsoft.FSharp.Reflection.Impl`)

|  Change |    Delta |              % |              Time | Callee                            | Location                           |
| ------: | -------: | -------------: | ----------------: | --------------------------------- | ---------------------------------- |
|   -5.3% | -38.31ms | 99.8% → 100.0% | 723.2ms → 684.9ms | `isUnionType(Type, BindingFlags)` | `Microsoft.FSharp.Reflection.Impl` |
| removed |  -1.34ms |    0.2% → 0.0% |       1.3ms → 0ms | `UNMANAGED_CODE_TIME`             | `<unknown>`                        |

##### `isUnionType(Type, BindingFlags)` (`Microsoft.FSharp.Reflection.Impl`)

| Change |    Delta |             % |              Time | Callee                                                | Location                            |
| -----: | -------: | ------------: | ----------------: | ----------------------------------------------------- | ----------------------------------- |
|  -7.0% | -50.49ms | 95.4% → 93.6% | 720.4ms → 670.0ms | `GetCustomAttributes(RuntimeType, RuntimeType, bool)` | `System.Reflection.CustomAttribute` |
| +31.0% | +10.88ms |   4.6% → 6.4% |   35.1ms → 46.0ms | `tryFindSourceConstructFlagsOfType(Type)`             | `Microsoft.FSharp.Reflection.Impl`  |

##### ``Invoke(FSharpFunc`2<int32, Type>)`` (`Microsoft.FSharp.Quotations.PatternsModule+u_dtype@1905-3`)

| Change |    Delta |             % |              Time | Callee                                | Location                                                    |
| -----: | -------: | ------------: | ----------------: | ------------------------------------- | ----------------------------------------------------------- |
|  -9.3% | -41.48ms | 99.7% → 99.0% | 445.1ms → 403.6ms | `MakeGenericType(Type[])`             | `System.RuntimeType`                                        |
|    new |  +2.67ms |   0.0% → 0.7% |       0ms → 2.7ms | ``Invoke(FSharpFunc`2<int32, Type>)`` | `Microsoft.FSharp.Quotations.PatternsModule+u_dtype@1905-3` |
| +97.2% |  +1.31ms |   0.3% → 0.7% |     1.4ms → 2.7ms | `UNMANAGED_CODE_TIME`                 | `<unknown>`                                                 |

##### `ResolveType(int32, Type[], Type[])` (`System.Reflection.RuntimeModule`)

| Change |    Delta |      % |          Time | Callee                                                               | Location              |
| -----: | -------: | -----: | ------------: | -------------------------------------------------------------------- | --------------------- |
|  -0.6% | -31.40ms | 100.0% | 5.61s → 5.58s | `ResolveTypeHandle(int32, RuntimeTypeHandle[], RuntimeTypeHandle[])` | `System.ModuleHandle` |

##### ``mapToFreshConsTail(FSharpList`1<!!0>, FSharpFunc`2<!!1, !!0>, FSharpList`1<!!1>)`` (`Microsoft.FSharp.Primitives.Basics.List`)

| Change |    Delta |      % |          Time | Callee               | Location                                                 |
| -----: | -------: | -----: | ------------: | -------------------- | -------------------------------------------------------- |
|  -0.8% | -29.22ms | 100.0% | 3.74s → 3.71s | `Invoke(BindingEnv)` | `Microsoft.FSharp.Quotations.PatternsModule+u_Expr@1965` |

##### `ResolveTypeHandle(int32, RuntimeTypeHandle[], RuntimeTypeHandle[])` (`System.ModuleHandle`)

| Change |    Delta |      % |          Time | Callee | Location    |
| -----: | -------: | -----: | ------------: | ------ | ----------- |
|  -0.3% | -18.73ms | 100.0% | 5.79s → 5.77s | `?!?`  | `<unknown>` |

##### `ExecutionAndPublication(LazyHelper, bool)` (``System.Lazy`1[System.__Canon]``)

| Change |    Delta |              % |            Time | Callee                             | Location                          |
| -----: | -------: | -------------: | --------------: | ---------------------------------- | --------------------------------- |
| -16.6% | -12.90ms | 98.3% → 100.0% | 77.5ms → 64.6ms | `ViaFactory(LazyThreadSafetyMode)` | ``System.Lazy`1[System.__Canon]`` |

##### `CreateValue()` (``System.Lazy`1[System.__Canon]``)

| Change |    Delta |      % |            Time | Callee                                      | Location                          |
| -----: | -------: | -----: | --------------: | ------------------------------------------- | --------------------------------- |
| -18.1% | -14.25ms | 100.0% | 78.9ms → 64.6ms | `ExecutionAndPublication(LazyHelper, bool)` | ``System.Lazy`1[System.__Canon]`` |

##### `ViaFactory(LazyThreadSafetyMode)` (``System.Lazy`1[System.__Canon]``)

| Change |   Delta |             % |            Time | Callee                                                                      | Location                                                         |
| -----: | ------: | ------------: | --------------: | --------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| -13.3% | -9.12ms | 88.2% → 91.7% | 68.4ms → 59.3ms | `Invoke(Unit)`                                                              | `<StartupCode$Argu>.$ArgumentParser+-cctor@87-1[System.__Canon]` |
| -28.4% | -3.25ms | 14.7% → 12.7% |  11.4ms → 8.2ms | ``PreComputeUnionConstructor(UnionCaseInfo, FSharpOption`1<BindingFlags>)`` | `Microsoft.FSharp.Reflection.FSharpValue`                        |
| -18.0% | -2.93ms | 21.0% → 20.7% | 16.3ms → 13.4ms | `Invoke(Unit)`                                                              | `<StartupCode$Argu>.$ArgumentParser+-cctor@86[System.__Canon]`   |
|    new | +1.37ms |   0.0% → 2.1% |     0ms → 1.4ms | `Invoke(Unit)`                                                              | `Argu.PreCompute+defaultLabelRegex@59`                           |
| -32.4% | -1.28ms |   5.1% → 4.1% |   3.9ms → 2.7ms | `cctor>b__114_0()`                                                          | `System.ConsolePal+<>c.<`                                        |

##### `getUnionCaseInfo(Type, String)` (`Microsoft.FSharp.Quotations.PatternsModule`)

|  Change |   Delta |              % |          Time | Callee                                                | Location                                    |
| ------: | ------: | -------------: | ------------: | ----------------------------------------------------- | ------------------------------------------- |
| removed | -6.81ms |    0.1% → 0.0% |   6.8ms → 0ms | `get_Name()`                                          | `Microsoft.FSharp.Reflection.UnionCaseInfo` |
|  -51.2% | -2.80ms |   0.1% → <0.1% | 5.5ms → 2.7ms | ``TryFind(FSharpFunc`2<!!0, bool>, !!0[])``           | `Microsoft.FSharp.Collections.ArrayModule`  |
|     ~0% | -1.54ms | 99.8% → 100.0% |         6.14s | ``GetUnionCases(Type, FSharpOption`1<BindingFlags>)`` | `Microsoft.FSharp.Reflection.FSharpType`    |

##### ``Invoke(FSharpList`1<Type>, FSharpValueOption`1<int32>)`` (`Microsoft.FSharp.Quotations.PatternsModule+u_constSpec@2137-10`)

| Change |    Delta |             % |              Time | Callee                           | Location                                                          |
| -----: | -------: | ------------: | ----------------: | -------------------------------- | ----------------------------------------------------------------- |
|  -0.5% | -28.46ms | 96.7% → 96.4% |     5.95s → 5.92s | `getUnionCaseInfo(Type, String)` | `Microsoft.FSharp.Quotations.PatternsModule`                      |
|  +8.5% | +17.30ms |   3.3% → 3.6% | 203.6ms → 220.9ms | ``Invoke(FSharpList`1<Type>)``   | `Microsoft.FSharp.Quotations.PatternsModule+u_UnionCaseInfo@2017` |

##### `getUnionTagConverter(Type, BindingFlags)` (`Microsoft.FSharp.Reflection.Impl`)

| Change |   Delta |             % |          Time | Callee                                       | Location                                 |
| -----: | ------: | ------------: | ------------: | -------------------------------------------- | ---------------------------------------- |
| -83.6% | -6.83ms | 60.0% → 50.5% | 8.2ms → 1.3ms | `getUnionTypeTagNameMap(Type, BindingFlags)` | `Microsoft.FSharp.Reflection.Impl`       |
| -75.9% | -4.14ms | 40.0% → 49.5% | 5.5ms → 1.3ms | ``OfSeq(IEnumerable`1<Tuple`2<!!0, !!1>>)``  | `Microsoft.FSharp.Collections.MapModule` |

##### `get_Name()` (`Microsoft.FSharp.Reflection.UnionCaseInfo`)

| Change |    Delta |      % |           Time | Callee                                     | Location                           |
| -----: | -------: | -----: | -------------: | ------------------------------------------ | ---------------------------------- |
| -89.1% | -10.93ms | 100.0% | 12.3ms → 1.3ms | `getUnionTagConverter(Type, BindingFlags)` | `Microsoft.FSharp.Reflection.Impl` |

##### ``Parse(FSharpOption`1<String[]>, FSharpOption`1<IConfigurationReader>, FSharpOption`1<bool>, FSharpOption`1<bool>, FSharpOption`1<bool>)`` (``Argu.ArgumentParser`1[System.__Canon]``)

|  Change |   Delta |             % |            Time | Callee                                                                                                   | Location                                  |
| ------: | ------: | ------------: | --------------: | -------------------------------------------------------------------------------------------------------- | ----------------------------------------- |
|  -12.9% | -4.37ms | 58.7% → 62.7% | 33.8ms → 29.4ms | `parseKeyValueConfig(IConfigurationReader, UnionArgInfo)`                                                | `Argu.KeyValueParser`                     |
| removed | -3.90ms |   6.8% → 0.0% |     3.9ms → 0ms | `parseCommandLinePartial(CliParseState, UnionArgInfo, CliParseResultAggregator)`                         | `Argu.CliParser`                          |
| removed | -2.72ms |   4.7% → 0.0% |     2.7ms → 0ms | `UNMANAGED_CODE_TIME`                                                                                    | `<unknown>`                               |
|  +11.6% | +1.69ms | 25.2% → 34.5% | 14.5ms → 16.2ms | ``parseCommandLine(UnionArgInfo, String, FSharpOption`1<String>, int32, IExiter, bool, bool, String[])`` | `Argu.CliParser`                          |
| removed | -1.33ms |   2.3% → 0.0% |     1.3ms → 0ms | `ToUnionParseResults()`                                                                                  | `Argu.CliParser+CliParseResultAggregator` |

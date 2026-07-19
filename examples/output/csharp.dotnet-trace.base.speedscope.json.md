# Sampling profile

Took 4.44s over 4,849 samples (917.1µs per sample).

| Category |     % |  Time | Samples |
| -------- | ----: | ----: | ------: |
| ours     | 76.1% | 3.38s |   4,092 |
| stdlib   | 23.9% | 1.06s |     757 |

## Hottest functions

### Self time

Functions ranked by time spent directly in the function body, excluding callees.

|     % |    Time | Samples | Function                                                                                                                       | Location                                                                             |
| ----: | ------: | ------: | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| 26.2% |   1.16s |     788 | `ReadForType(JsonContract, bool)`                                                                                              | `Newtonsoft.Json.JsonReader`                                                         |
| 13.3% | 591.3ms |     405 | `CopyTo(Array, int32)`                                                                                                         | ``System.Collections.Generic.List`1[System.__Canon].System.Collections.ICollection`` |
|  7.3% | 325.5ms |     296 | `SerializeObject(JsonWriter, Object, JsonObjectContract, JsonProperty, JsonContainerContract, JsonProperty)`                   | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`                         |
|  5.7% | 252.4ms |     983 | `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)`                                                 | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader`                         |
|  4.6% | 203.0ms |     146 | `ReadStringIntoBuffer(wchar)`                                                                                                  | `Newtonsoft.Json.JsonTextReader`                                                     |
|  4.2% | 185.3ms |     160 | `SerializeList(JsonWriter, IEnumerable, JsonArrayContract, JsonProperty, JsonContainerContract, JsonProperty)`                 | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`                         |
|  3.4% | 150.4ms |     109 | `ParseProperty()`                                                                                                              | `Newtonsoft.Json.JsonTextReader`                                                     |
|  2.4% | 106.5ms |      68 | `ReadAsInt32()`                                                                                                                | `Newtonsoft.Json.JsonTextReader`                                                     |
|  2.1% |  93.6ms |      64 | `UNMANAGED_CODE_TIME`                                                                                                          | `<unknown>`                                                                          |
|  2.1% |  92.9ms |      68 | ``WriteEscapedJavaScriptString(TextWriter, String, wchar, bool, bool[], StringEscapeHandling, IArrayPool`1<wchar>, wchar[]&)`` | `Newtonsoft.Json.Utilities.JavaScriptUtils`                                          |
|  2.0% |  88.2ms |      65 | `ReadNumberValue(ReadType)`                                                                                                    | `Newtonsoft.Json.JsonTextReader`                                                     |
|  1.8% |  78.1ms |     162 | `PopulateList(IList, JsonReader, JsonArrayContract, JsonProperty, String)`                                                     | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader`                         |
|  1.7% |  75.4ms |      57 | `ParseValue()`                                                                                                                 | `Newtonsoft.Json.JsonTextReader`                                                     |
|  1.7% |  73.9ms |      59 | `ParseReadNumber(ReadType, wchar, int32)`                                                                                      | `Newtonsoft.Json.JsonTextReader`                                                     |
|  1.5% |  67.2ms |      49 | `SetToken(JsonToken, Object, bool)`                                                                                            | `Newtonsoft.Json.JsonReader`                                                         |
|  1.2% |  53.7ms |      38 | `ReadStringValue(ReadType)`                                                                                                    | `Newtonsoft.Json.JsonTextReader`                                                     |
|  1.1% |  47.0ms |      70 | `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)`                          | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`                         |
|  0.9% |  41.7ms |      30 | `FindValue(!0)`                                                                                                                | ``System.Collections.Generic.Dictionary`2[System.__Canon,System.__Canon]``           |
|  0.9% |  41.6ms |      29 | `ParsePostValue(bool)`                                                                                                         | `Newtonsoft.Json.JsonTextReader`                                                     |
|  0.9% |  41.4ms |      31 | `WriteValue(JsonWriter, PrimitiveTypeCode, Object)`                                                                            | `Newtonsoft.Json.JsonWriter`                                                         |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `ReadForType(JsonContract, bool)` (`Newtonsoft.Json.JsonReader`)

|     % |  Time | Samples | Caller                                                                         | Location                                                     |
| ----: | ----: | ------: | ------------------------------------------------------------------------------ | ------------------------------------------------------------ |
| 99.1% | 1.15s |     778 | `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |
|  0.8% | 9.4ms |       9 | `PopulateList(IList, JsonReader, JsonArrayContract, JsonProperty, String)`     | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |
|  0.1% | 1.4ms |       1 | `Deserialize(JsonReader, Type, bool)`                                          | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |

##### `CopyTo(Array, int32)` (``System.Collections.Generic.List`1[System.__Canon].System.Collections.ICollection``)

|      % |    Time | Samples | Caller                                                                     | Location                                                     |
| -----: | ------: | ------: | -------------------------------------------------------------------------- | ------------------------------------------------------------ |
| 100.0% | 591.3ms |     405 | `CreateList(JsonReader, Type, JsonContract, JsonProperty, Object, String)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |

##### `SerializeObject(JsonWriter, Object, JsonObjectContract, JsonProperty, JsonContainerContract, JsonProperty)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`)

|      % |    Time | Samples | Caller                                                                                                | Location                                                     |
| -----: | ------: | ------: | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| 100.0% | 325.5ms |     296 | `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |

##### `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`)

|      % |    Time | Samples | Caller                                                                                                    | Location                                                     |
| -----: | ------: | ------: | --------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| 100.0% | 252.4ms |     983 | `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |

##### `ReadStringIntoBuffer(wchar)` (`Newtonsoft.Json.JsonTextReader`)

|     % |    Time | Samples | Caller                         | Location                         |
| ----: | ------: | ------: | ------------------------------ | -------------------------------- |
| 54.4% | 110.4ms |      80 | `ReadStringValue(ReadType)`    | `Newtonsoft.Json.JsonTextReader` |
| 43.6% |  88.6ms |      63 | `ParseProperty()`              | `Newtonsoft.Json.JsonTextReader` |
|  2.0% |   4.0ms |       3 | `ParseString(wchar, ReadType)` | `Newtonsoft.Json.JsonTextReader` |

##### `SerializeList(JsonWriter, IEnumerable, JsonArrayContract, JsonProperty, JsonContainerContract, JsonProperty)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`)

|      % |    Time | Samples | Caller                                                                                                | Location                                                     |
| -----: | ------: | ------: | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| 100.0% | 185.3ms |     160 | `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |

##### `ParseProperty()` (`Newtonsoft.Json.JsonTextReader`)

|      % |    Time | Samples | Caller          | Location                         |
| -----: | ------: | ------: | --------------- | -------------------------------- |
| 100.0% | 150.4ms |     109 | `ParseObject()` | `Newtonsoft.Json.JsonTextReader` |

##### `ReadAsInt32()` (`Newtonsoft.Json.JsonTextReader`)

|      % |    Time | Samples | Caller                            | Location                     |
| -----: | ------: | ------: | --------------------------------- | ---------------------------- |
| 100.0% | 106.5ms |      68 | `ReadForType(JsonContract, bool)` | `Newtonsoft.Json.JsonReader` |

##### `UNMANAGED_CODE_TIME` (`<unknown>`)

|    % |  Time | Samples | Caller                                                                     | Location                                                     |
| ---: | ----: | ------: | -------------------------------------------------------------------------- | ------------------------------------------------------------ |
| 5.8% | 5.4ms |       1 | ``GetMatchingConverter(IList`1<JsonConverter>, Type)``                     | `Newtonsoft.Json.JsonSerializer`                             |
| 4.4% | 4.1ms |       3 | `DeserializeObject(String, Type, JsonSerializerSettings)`                  | `Newtonsoft.Json.JsonConvert`                                |
| 2.9% | 2.7ms |       2 | `PopulateList(IList, JsonReader, JsonArrayContract, JsonProperty, String)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |
| 2.8% | 2.6ms |       2 | `CreateContract(Type)`                                                     | `Newtonsoft.Json.Serialization.DefaultContractResolver`      |
| 1.5% | 1.4ms |       1 | `OnSerializing(JsonWriter, JsonContract, Object)`                          | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |

##### ``WriteEscapedJavaScriptString(TextWriter, String, wchar, bool, bool[], StringEscapeHandling, IArrayPool`1<wchar>, wchar[]&)`` (`Newtonsoft.Json.Utilities.JavaScriptUtils`)

|      % |   Time | Samples | Caller                                              | Location                     |
| -----: | -----: | ------: | --------------------------------------------------- | ---------------------------- |
| 100.0% | 92.9ms |      68 | `WriteValue(JsonWriter, PrimitiveTypeCode, Object)` | `Newtonsoft.Json.JsonWriter` |

##### `ReadNumberValue(ReadType)` (`Newtonsoft.Json.JsonTextReader`)

|     % |   Time | Samples | Caller                            | Location                         |
| ----: | -----: | ------: | --------------------------------- | -------------------------------- |
| 98.5% | 86.8ms |      64 | `ReadForType(JsonContract, bool)` | `Newtonsoft.Json.JsonReader`     |
|  1.5% |  1.3ms |       1 | `ReadAsDouble()`                  | `Newtonsoft.Json.JsonTextReader` |

##### `PopulateList(IList, JsonReader, JsonArrayContract, JsonProperty, String)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`)

|      % |   Time | Samples | Caller                                                                     | Location                                                     |
| -----: | -----: | ------: | -------------------------------------------------------------------------- | ------------------------------------------------------------ |
| 100.0% | 78.1ms |     162 | `CreateList(JsonReader, Type, JsonContract, JsonProperty, Object, String)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |

##### `ParseValue()` (`Newtonsoft.Json.JsonTextReader`)

|     % |   Time | Samples | Caller                            | Location                         |
| ----: | -----: | ------: | --------------------------------- | -------------------------------- |
| 98.2% | 74.0ms |      56 | `ReadForType(JsonContract, bool)` | `Newtonsoft.Json.JsonReader`     |
|  1.8% |  1.4ms |       1 | `Read()`                          | `Newtonsoft.Json.JsonTextReader` |

##### `ParseReadNumber(ReadType, wchar, int32)` (`Newtonsoft.Json.JsonTextReader`)

|     % |   Time | Samples | Caller                      | Location                         |
| ----: | -----: | ------: | --------------------------- | -------------------------------- |
| 96.3% | 71.2ms |      57 | `ReadNumberValue(ReadType)` | `Newtonsoft.Json.JsonTextReader` |
|  3.7% |  2.7ms |       2 | `ParseNumber(ReadType)`     | `Newtonsoft.Json.JsonTextReader` |

##### `SetToken(JsonToken, Object, bool)` (`Newtonsoft.Json.JsonReader`)

|     % |   Time | Samples | Caller                                    | Location                         |
| ----: | -----: | ------: | ----------------------------------------- | -------------------------------- |
| 28.1% | 18.9ms |      14 | `ParseValue()`                            | `Newtonsoft.Json.JsonTextReader` |
| 26.0% | 17.5ms |      13 | `ParseProperty()`                         | `Newtonsoft.Json.JsonTextReader` |
| 19.8% | 13.3ms |       9 | `ParseReadString(wchar, ReadType)`        | `Newtonsoft.Json.JsonTextReader` |
| 12.0% |  8.1ms |       6 | `ParsePostValue(bool)`                    | `Newtonsoft.Json.JsonTextReader` |
| 10.0% |  6.7ms |       5 | `ParseReadNumber(ReadType, wchar, int32)` | `Newtonsoft.Json.JsonTextReader` |

##### `ReadStringValue(ReadType)` (`Newtonsoft.Json.JsonTextReader`)

|     % |   Time | Samples | Caller                            | Location                         |
| ----: | -----: | ------: | --------------------------------- | -------------------------------- |
| 95.0% | 51.0ms |      36 | `ReadForType(JsonContract, bool)` | `Newtonsoft.Json.JsonReader`     |
|  5.0% |  2.7ms |       2 | `ReadAsString()`                  | `Newtonsoft.Json.JsonTextReader` |

##### `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`)

|     % |   Time | Samples | Caller                                                                                                         | Location                                                     |
| ----: | -----: | ------: | -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| 51.4% | 24.2ms |      24 | `SerializeList(JsonWriter, IEnumerable, JsonArrayContract, JsonProperty, JsonContainerContract, JsonProperty)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |
| 45.8% | 21.5ms |      45 | `SerializeObject(JsonWriter, Object, JsonObjectContract, JsonProperty, JsonContainerContract, JsonProperty)`   | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |
|  2.8% |  1.3ms |       1 | `Serialize(JsonWriter, Object, Type)`                                                                          | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |

##### `FindValue(!0)` (``System.Collections.Generic.Dictionary`2[System.__Canon,System.__Canon]``)

|     % |   Time | Samples | Caller                                                                         | Location                                                                   |
| ----: | -----: | ------: | ------------------------------------------------------------------------------ | -------------------------------------------------------------------------- |
| 96.8% | 40.3ms |      29 | `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader`               |
|  3.2% |  1.3ms |       1 | `TryGetValue(!0, !1&)`                                                         | ``System.Collections.Generic.Dictionary`2[System.__Canon,System.__Canon]`` |

##### `ParsePostValue(bool)` (`Newtonsoft.Json.JsonTextReader`)

|     % |   Time | Samples | Caller                      | Location                         |
| ----: | -----: | ------: | --------------------------- | -------------------------------- |
| 51.5% | 21.4ms |      15 | `ReadStringValue(ReadType)` | `Newtonsoft.Json.JsonTextReader` |
| 48.5% | 20.2ms |      14 | `Read()`                    | `Newtonsoft.Json.JsonTextReader` |

##### `WriteValue(JsonWriter, PrimitiveTypeCode, Object)` (`Newtonsoft.Json.JsonWriter`)

|     % |   Time | Samples | Caller                                                                                                             | Location                                                     |
| ----: | -----: | ------: | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------ |
| 96.7% | 40.0ms |      30 | `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)`              | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |
|  3.3% |  1.3ms |       1 | `SerializePrimitive(JsonWriter, Object, JsonPrimitiveContract, JsonProperty, JsonContainerContract, JsonProperty)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |

### Total time

Functions ranked by total time spent in the function and all its callees.

|     % |    Time | Samples | Function                                                                                                         | Location                                                                             |
| ----: | ------: | ------: | ---------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| 99.6% |   4.43s |   4,834 | `Main()`                                                                                                         | `Profile.Program`                                                                    |
| 76.3% |   3.39s |   3,511 | `DeserializeObject(String, Type, JsonSerializerSettings)`                                                        | `Newtonsoft.Json.JsonConvert`                                                        |
| 76.0% |   3.38s |   3,488 | `DeserializeInternal(JsonReader, Type)`                                                                          | `Newtonsoft.Json.JsonSerializer`                                                     |
| 75.8% |   3.37s |   3,474 | `Deserialize(JsonReader, Type, bool)`                                                                            | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader`                         |
| 75.0% |   3.33s |   3,414 | `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader`                         |
| 74.9% |   3.33s |   3,411 | `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)`        | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader`                         |
| 74.5% |   3.31s |   3,384 | `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)`                                   | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader`                         |
| 46.2% |   2.05s |   1,950 | `CreateList(JsonReader, Type, JsonContract, JsonProperty, Object, String)`                                       | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader`                         |
| 43.0% |   1.91s |   1,330 | `ReadForType(JsonContract, bool)`                                                                                | `Newtonsoft.Json.JsonReader`                                                         |
| 38.6% |   1.71s |   1,592 | `PopulateList(IList, JsonReader, JsonArrayContract, JsonProperty, String)`                                       | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader`                         |
| 22.9% |   1.02s |     888 | `SerializeObjectInternal(Object, Type, JsonSerializer)`                                                          | `Newtonsoft.Json.JsonConvert`                                                        |
| 22.3% | 992.2ms |     859 | `SerializeInternal(JsonWriter, Object, Type)`                                                                    | `Newtonsoft.Json.JsonSerializer`                                                     |
| 22.3% | 989.6ms |     856 | `Serialize(JsonWriter, Object, Type)`                                                                            | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`                         |
| 21.7% | 964.0ms |     827 | `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)`            | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`                         |
| 21.6% | 962.7ms |     826 | `SerializeObject(JsonWriter, Object, JsonObjectContract, JsonProperty, JsonContainerContract, JsonProperty)`     | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`                         |
| 16.7% | 742.1ms |     606 | `SerializeList(JsonWriter, IEnumerable, JsonArrayContract, JsonProperty, JsonContainerContract, JsonProperty)`   | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`                         |
| 13.4% | 594.0ms |     407 | `CopyTo(Array, int32)`                                                                                           | ``System.Collections.Generic.List`1[System.__Canon].System.Collections.ICollection`` |
|  7.2% | 321.4ms |     340 | `Deserialize(JsonReader, Type)`                                                                                  | `Newtonsoft.Json.JsonSerializer`                                                     |
|  6.4% | 283.4ms |     206 | `ParseObject()`                                                                                                  | `Newtonsoft.Json.JsonTextReader`                                                     |
|  5.9% | 261.9ms |     189 | `ParseProperty()`                                                                                                | `Newtonsoft.Json.JsonTextReader`                                                     |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse. Where shown callees fell short of the coverage target, the hottest hidden callees are also shown.

##### `Main()` (`Profile.Program`)

|     % |    Time | Samples | Callee                                                    | Location                      |
| ----: | ------: | ------: | --------------------------------------------------------- | ----------------------------- |
| 72.1% |   3.19s |   3,295 | `DeserializeObject(String, Type, JsonSerializerSettings)` | `Newtonsoft.Json.JsonConvert` |
| 21.2% | 937.3ms |     805 | `SerializeObjectInternal(Object, Type, JsonSerializer)`   | `Newtonsoft.Json.JsonConvert` |
|  4.5% | 198.3ms |     216 | `DeserializeObject(String)`                               | `Newtonsoft.Json.JsonConvert` |
|  1.9% |  85.8ms |      87 | `SerializeObject(Object)`                                 | `Newtonsoft.Json.JsonConvert` |
|  0.2% |   6.8ms |       5 | `ToString()`                                              | `System.Text.StringBuilder`   |

##### `DeserializeObject(String, Type, JsonSerializerSettings)` (`Newtonsoft.Json.JsonConvert`)

|     % |    Time | Samples | Callee                                  | Location                         |
| ----: | ------: | ------: | --------------------------------------- | -------------------------------- |
| 90.1% |   3.05s |   3,148 | `DeserializeInternal(JsonReader, Type)` | `Newtonsoft.Json.JsonSerializer` |
|  9.5% | 321.4ms |     340 | `Deserialize(JsonReader, Type)`         | `Newtonsoft.Json.JsonSerializer` |
|  0.1% |   4.1ms |       3 | `UNMANAGED_CODE_TIME`                   | `<unknown>`                      |

##### `DeserializeInternal(JsonReader, Type)` (`Newtonsoft.Json.JsonSerializer`)

|     % |  Time | Samples | Callee                                | Location                                                     |
| ----: | ----: | ------: | ------------------------------------- | ------------------------------------------------------------ |
| 99.8% | 3.37s |   3,474 | `Deserialize(JsonReader, Type, bool)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |
| <0.1% | 1.4ms |       1 | `IsInstanceOfClass(void*, Object)`    | `System.Runtime.CompilerServices.CastHelpers`                |

##### `Deserialize(JsonReader, Type, bool)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`)

|     % |   Time | Samples | Callee                                                                                                           | Location                                                                                |
| ----: | -----: | ------: | ---------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| 98.9% |  3.33s |   3,414 | `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader`                            |
|  0.8% | 26.9ms |      20 | `ReadForType(JsonContract, bool)`                                                                                | `Newtonsoft.Json.JsonReader`                                                            |
|  0.1% |  2.7ms |       2 | `TryGetValueInternal(Tables<!0, !1>, !0, int32, !1&)`                                                            | ``System.Collections.Concurrent.ConcurrentDictionary`2[System.__Canon,System.__Canon]`` |
| <0.1% |  1.3ms |       1 | `UNMANAGED_CODE_TIME`                                                                                            | `<unknown>`                                                                             |
| <0.1% |  1.3ms |       1 | `Read()`                                                                                                         | `Newtonsoft.Json.JsonTextReader`                                                        |

##### `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`)

|      % |   Time | Samples | Callee                                                                                                    | Location                                                     |
| -----: | -----: | ------: | --------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| 100.0% |  3.33s |   3,411 | `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |
|  61.6% |  2.05s |   1,950 | `CreateList(JsonReader, Type, JsonContract, JsonProperty, Object, String)`                                | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |
|   0.5% | 17.5ms |      13 | `EnsureType(JsonReader, Object, CultureInfo, JsonContract, Type)`                                         | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |
|  <0.1% |  1.3ms |       1 | `UNMANAGED_CODE_TIME`                                                                                     | `<unknown>`                                                  |

##### `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`)

|     % |   Time | Samples | Callee                                                                         | Location                                                     |
| ----: | -----: | ------: | ------------------------------------------------------------------------------ | ------------------------------------------------------------ |
| 99.4% |  3.31s |   3,384 | `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |
|  1.3% | 43.0ms |      32 | `ParseObject()`                                                                | `Newtonsoft.Json.JsonTextReader`                             |
|  0.1% |  2.7ms |       2 | `ReadAndAssert()`                                                              | `Newtonsoft.Json.JsonReader`                                 |
| <0.1% |  1.3ms |       1 | `UNMANAGED_CODE_TIME`                                                          | `<unknown>`                                                  |

##### `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`)

|     % |    Time | Samples | Callee                                                                                                           | Location                                                     |
| ----: | ------: | ------: | ---------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| 57.0% |   1.88s |   1,796 | `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |
| 50.7% |   1.67s |   1,160 | `ReadForType(JsonContract, bool)`                                                                                | `Newtonsoft.Json.JsonReader`                                 |
|  7.0% | 232.3ms |     168 | `ParseObject()`                                                                                                  | `Newtonsoft.Json.JsonTextReader`                             |
|  5.3% | 174.5ms |     167 | `SetPropertyValue(JsonProperty, JsonConverter, JsonContainerContract, JsonProperty, JsonReader, Object)`         | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |
|  1.9% |  63.1ms |      46 | `Read()`                                                                                                         | `Newtonsoft.Json.JsonTextReader`                             |

##### `CreateList(JsonReader, Type, JsonContract, JsonProperty, Object, String)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`)

|     % |    Time | Samples | Callee                                                                     | Location                                                                             |
| ----: | ------: | ------: | -------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| 83.6% |   1.71s |   1,592 | `PopulateList(IList, JsonReader, JsonArrayContract, JsonProperty, String)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader`                         |
| 28.9% | 594.0ms |     407 | `CopyTo(Array, int32)`                                                     | ``System.Collections.Generic.List`1[System.__Canon].System.Collections.ICollection`` |
|  0.5% |   9.4ms |       7 | `CreateNewList(JsonReader, JsonArrayContract, bool&)`                      | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader`                         |
|  0.1% |   1.4ms |       1 | `IsInstanceOfClass(void*, Object)`                                         | `System.Runtime.CompilerServices.CastHelpers`                                        |
|  0.1% |   1.4ms |       1 | `HasNoDefinedType(JsonContract)`                                           | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader`                         |

##### `ReadForType(JsonContract, bool)` (`Newtonsoft.Json.JsonReader`)

|     % |    Time | Samples | Callee                      | Location                         |
| ----: | ------: | ------: | --------------------------- | -------------------------------- |
| 12.9% | 246.6ms |     185 | `ReadNumberValue(ReadType)` | `Newtonsoft.Json.JsonTextReader` |
| 11.2% | 213.6ms |     153 | `ReadStringValue(ReadType)` | `Newtonsoft.Json.JsonTextReader` |
|  6.3% | 121.2ms |      91 | `ParseValue()`              | `Newtonsoft.Json.JsonTextReader` |
|  5.7% | 109.1ms |      70 | `ReadAsInt32()`             | `Newtonsoft.Json.JsonTextReader` |
|  1.1% |  21.5ms |      18 | `ReadAsDouble()`            | `Newtonsoft.Json.JsonTextReader` |

##### `PopulateList(IList, JsonReader, JsonArrayContract, JsonProperty, String)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`)

|     % |    Time | Samples | Callee                                                                                                           | Location                                                                       |
| ----: | ------: | ------: | ---------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| 87.1% |   1.49s |   1,330 | `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader`                   |
| 12.1% | 207.1ms |     150 | `ReadForType(JsonContract, bool)`                                                                                | `Newtonsoft.Json.JsonReader`                                                   |
|  2.3% |  40.3ms |      30 | `Add(Object)`                                                                                                    | ``System.Collections.Generic.List`1[System.__Canon].System.Collections.IList`` |
|  0.5% |   8.1ms |       6 | `IsInstanceOfInterface(void*, Object)`                                                                           | `System.Runtime.CompilerServices.CastHelpers`                                  |
|  0.2% |   2.7ms |       2 | `UNMANAGED_CODE_TIME`                                                                                            | `<unknown>`                                                                    |

##### `SerializeObjectInternal(Object, Type, JsonSerializer)` (`Newtonsoft.Json.JsonConvert`)

|     % |    Time | Samples | Callee                                        | Location                                        |
| ----: | ------: | ------: | --------------------------------------------- | ----------------------------------------------- |
| 88.4% | 902.1ms |     773 | `SerializeInternal(JsonWriter, Object, Type)` | `Newtonsoft.Json.JsonSerializer`                |
|  9.0% |  91.5ms |      87 | `Serialize(JsonWriter, Object, Type)`         | `Newtonsoft.Json.JsonSerializer`                |
|  0.8% |   7.9ms |       9 | `.ctor(TextWriter)`                           | `Newtonsoft.Json.JsonTextWriter`                |
|  0.1% |   1.4ms |       1 | `Dispose()`                                   | `Newtonsoft.Json.JsonWriter.System.IDisposable` |
|  0.1% |   1.4ms |       1 | `ToString()`                                  | `System.Text.StringBuilder`                     |

##### `SerializeInternal(JsonWriter, Object, Type)` (`Newtonsoft.Json.JsonSerializer`)

|     % |    Time | Samples | Callee                                | Location                                                     |
| ----: | ------: | ------: | ------------------------------------- | ------------------------------------------------------------ |
| 99.7% | 989.6ms |     856 | `Serialize(JsonWriter, Object, Type)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |
|  0.1% |   1.4ms |       1 | `UNMANAGED_CODE_TIME`                 | `<unknown>`                                                  |
|  0.1% |   1.3ms |       1 | `.ctor(JsonSerializer)`               | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |

##### `Serialize(JsonWriter, Object, Type)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`)

|     % |    Time | Samples | Callee                                                                                                | Location                                                     |
| ----: | ------: | ------: | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| 97.4% | 964.0ms |     827 | `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |
|  1.9% |  18.8ms |      21 | `GetContractSafe(Object)`                                                                             | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |

##### `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`)

|     % |    Time | Samples | Callee                                                                                                             | Location                                                     |
| ----: | ------: | ------: | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------ |
| 99.9% | 962.7ms |     826 | `SerializeObject(JsonWriter, Object, JsonObjectContract, JsonProperty, JsonContainerContract, JsonProperty)`       | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |
| 77.0% | 742.1ms |     606 | `SerializeList(JsonWriter, IEnumerable, JsonArrayContract, JsonProperty, JsonContainerContract, JsonProperty)`     | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |
| 25.1% | 242.0ms |     178 | `WriteValue(JsonWriter, PrimitiveTypeCode, Object)`                                                                | `Newtonsoft.Json.JsonWriter`                                 |
|  3.2% |  30.9ms |      22 | `WriteNull()`                                                                                                      | `Newtonsoft.Json.JsonTextWriter`                             |
|  1.5% |  14.7ms |      10 | `SerializePrimitive(JsonWriter, Object, JsonPrimitiveContract, JsonProperty, JsonContainerContract, JsonProperty)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |

##### `SerializeObject(JsonWriter, Object, JsonObjectContract, JsonProperty, JsonContainerContract, JsonProperty)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`)

|     % |    Time | Samples | Callee                                                                                                                   | Location                                                     |
| ----: | ------: | ------: | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------ |
| 86.4% | 832.1ms |     690 | `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)`                    | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |
|  1.9% |  18.8ms |      17 | `CalculatePropertyValues(JsonWriter, Object, JsonContainerContract, JsonProperty, JsonProperty, JsonContract&, Object&)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |
|  1.8% |  17.5ms |      13 | `CheckForCircularReference(JsonWriter, Object, JsonProperty, JsonContract, JsonContainerContract, JsonProperty)`         | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |
|  1.4% |  13.4ms |      10 | `GetValue(Object)`                                                                                                       | `Newtonsoft.Json.Serialization.ExpressionValueProvider`      |
|  0.6% |   5.4ms |       4 | `WritePropertyName(JsonWriter)`                                                                                          | `Newtonsoft.Json.Serialization.JsonProperty`                 |

##### `SerializeList(JsonWriter, IEnumerable, JsonArrayContract, JsonProperty, JsonContainerContract, JsonProperty)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`)

|     % |    Time | Samples | Callee                                                                                                           | Location                                                                                |
| ----: | ------: | ------: | ---------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| 81.5% | 604.8ms |     479 | `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)`            | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`                            |
|  2.2% |  16.2ms |      12 | `IsInstanceOfInterface(void*, Object)`                                                                           | `System.Runtime.CompilerServices.CastHelpers`                                           |
|  1.4% |  10.7ms |       8 | `CheckForCircularReference(JsonWriter, Object, JsonProperty, JsonContract, JsonContainerContract, JsonProperty)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`                            |
|  1.3% |   9.5ms |       7 | `IsInstance_Helper(void*, Object)`                                                                               | `System.Runtime.CompilerServices.CastHelpers`                                           |
|  0.5% |   4.1ms |       3 | `TryGetValueInternal(Tables<!0, !1>, !0, int32, !1&)`                                                            | ``System.Collections.Concurrent.ConcurrentDictionary`2[System.__Canon,System.__Canon]`` |

##### `CopyTo(Array, int32)` (``System.Collections.Generic.List`1[System.__Canon].System.Collections.ICollection``)

|    % |  Time | Samples | Callee                                    | Location       |
| ---: | ----: | ------: | ----------------------------------------- | -------------- |
| 0.5% | 2.7ms |       2 | `Copy(Array, int32, Array, int32, int32)` | `System.Array` |

##### `Deserialize(JsonReader, Type)` (`Newtonsoft.Json.JsonSerializer`)

|      % |    Time | Samples | Callee                                  | Location                         |
| -----: | ------: | ------: | --------------------------------------- | -------------------------------- |
| 100.0% | 321.4ms |     340 | `DeserializeInternal(JsonReader, Type)` | `Newtonsoft.Json.JsonSerializer` |

##### `ParseObject()` (`Newtonsoft.Json.JsonTextReader`)

|     % |    Time | Samples | Callee            | Location                         |
| ----: | ------: | ------: | ----------------- | -------------------------------- |
| 92.4% | 261.9ms |     189 | `ParseProperty()` | `Newtonsoft.Json.JsonTextReader` |

##### `ParseProperty()` (`Newtonsoft.Json.JsonTextReader`)

|     % |   Time | Samples | Callee                              | Location                               |
| ----: | -----: | ------: | ----------------------------------- | -------------------------------------- |
| 34.3% | 89.9ms |      64 | `ReadStringIntoBuffer(wchar)`       | `Newtonsoft.Json.JsonTextReader`       |
|  6.7% | 17.5ms |      13 | `SetToken(JsonToken, Object, bool)` | `Newtonsoft.Json.JsonReader`           |
|  1.0% |  2.7ms |       2 | `EatWhitespace()`                   | `Newtonsoft.Json.JsonTextReader`       |
|  0.5% |  1.4ms |       1 | `Get(wchar[], int32, int32)`        | `Newtonsoft.Json.DefaultJsonNameTable` |

## Hottest call stacks

Call stacks ranked by time spent in their leaf frame.

Common call stack: `Main()` (`Profile.Program`)

|     % |    Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ----: | ------: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 16.5% | 735.3ms |     472 | `ReadForType(JsonContract, bool)` (`Newtonsoft.Json.JsonReader`) ← `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`) ← `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `Deserialize(JsonReader, Type, bool)` ← `DeserializeInternal(JsonReader, Type)` (`Newtonsoft.Json.JsonSerializer`) ← `DeserializeObject(String, Type, JsonSerializerSettings)` (`Newtonsoft.Json.JsonConvert`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  8.4% | 373.3ms |     270 | `ReadForType(JsonContract, bool)` (`Newtonsoft.Json.JsonReader`) ← `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`) ← `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `PopulateList(IList, JsonReader, JsonArrayContract, JsonProperty, String)` ← `CreateList(JsonReader, Type, JsonContract, JsonProperty, Object, String)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` ← `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `Deserialize(JsonReader, Type, bool)` ← `DeserializeInternal(JsonReader, Type)` (`Newtonsoft.Json.JsonSerializer`) ← `DeserializeObject(String, Type, JsonSerializerSettings)` (`Newtonsoft.Json.JsonConvert`)                                                                                                                                                                                                                                              |
|  6.8% | 301.2ms |     206 | `CopyTo(Array, int32)` (``System.Collections.Generic.List`1[System.__Canon].System.Collections.ICollection``) ← `CreateList(JsonReader, Type, JsonContract, JsonProperty, Object, String)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`) ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` ← `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `Deserialize(JsonReader, Type, bool)` ← `DeserializeInternal(JsonReader, Type)` (`Newtonsoft.Json.JsonSerializer`) ← `DeserializeObject(String, Type, JsonSerializerSettings)` (`Newtonsoft.Json.JsonConvert`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  5.3% | 236.8ms |     162 | `CopyTo(Array, int32)` (``System.Collections.Generic.List`1[System.__Canon].System.Collections.ICollection``) ← `CreateList(JsonReader, Type, JsonContract, JsonProperty, Object, String)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`) ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` ← `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `PopulateList(IList, JsonReader, JsonArrayContract, JsonProperty, String)` ← `CreateList(JsonReader, Type, JsonContract, JsonProperty, Object, String)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` ← `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `Deserialize(JsonReader, Type, bool)` ← `DeserializeInternal(JsonReader, Type)` (`Newtonsoft.Json.JsonSerializer`) ← `DeserializeObject(String, Type, JsonSerializerSettings)` (`Newtonsoft.Json.JsonConvert`) |
|  4.9% | 219.1ms |     180 | `SerializeObject(JsonWriter, Object, JsonObjectContract, JsonProperty, JsonContainerContract, JsonProperty)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`) ← `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)` ← `SerializeList(JsonWriter, IEnumerable, JsonArrayContract, JsonProperty, JsonContainerContract, JsonProperty)` ← `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)` ← `SerializeObject(JsonWriter, Object, JsonObjectContract, JsonProperty, JsonContainerContract, JsonProperty)` ← `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)` ← `Serialize(JsonWriter, Object, Type)` ← `SerializeInternal(JsonWriter, Object, Type)` (`Newtonsoft.Json.JsonSerializer`) ← `SerializeObjectInternal(Object, Type, JsonSerializer)` (`Newtonsoft.Json.JsonConvert`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  3.7% | 165.4ms |     328 | `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`) ← `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `PopulateList(IList, JsonReader, JsonArrayContract, JsonProperty, String)` ← `CreateList(JsonReader, Type, JsonContract, JsonProperty, Object, String)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` ← `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `Deserialize(JsonReader, Type, bool)` ← `DeserializeInternal(JsonReader, Type)` (`Newtonsoft.Json.JsonSerializer`) ← `DeserializeObject(String, Type, JsonSerializerSettings)` (`Newtonsoft.Json.JsonConvert`)                                                                                                                                                                                                                                                                                                                 |
|  2.4% | 107.6ms |     105 | `SerializeList(JsonWriter, IEnumerable, JsonArrayContract, JsonProperty, JsonContainerContract, JsonProperty)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`) ← `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)` ← `SerializeObject(JsonWriter, Object, JsonObjectContract, JsonProperty, JsonContainerContract, JsonProperty)` ← `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)` ← `Serialize(JsonWriter, Object, Type)` ← `SerializeInternal(JsonWriter, Object, Type)` (`Newtonsoft.Json.JsonSerializer`) ← `SerializeObjectInternal(Object, Type, JsonSerializer)` (`Newtonsoft.Json.JsonConvert`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  2.2% |  96.9ms |     103 | `SerializeObject(JsonWriter, Object, JsonObjectContract, JsonProperty, JsonContainerContract, JsonProperty)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`) ← `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)` ← `Serialize(JsonWriter, Object, Type)` ← `SerializeInternal(JsonWriter, Object, Type)` (`Newtonsoft.Json.JsonSerializer`) ← `SerializeObjectInternal(Object, Type, JsonSerializer)` (`Newtonsoft.Json.JsonConvert`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  1.9% |  84.6ms |      62 | `ParseProperty()` (`Newtonsoft.Json.JsonTextReader`) ← `ParseObject()` ← `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`) ← `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `PopulateList(IList, JsonReader, JsonArrayContract, JsonProperty, String)` ← `CreateList(JsonReader, Type, JsonContract, JsonProperty, Object, String)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` ← `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `Deserialize(JsonReader, Type, bool)` ← `DeserializeInternal(JsonReader, Type)` (`Newtonsoft.Json.JsonSerializer`) ← `DeserializeObject(String, Type, JsonSerializerSettings)` (`Newtonsoft.Json.JsonConvert`)                                                                                                                                                                                                                                        |
|  1.8% |  80.4ms |     572 | `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`) ← `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `Deserialize(JsonReader, Type, bool)` ← `DeserializeInternal(JsonReader, Type)` (`Newtonsoft.Json.JsonSerializer`) ← `DeserializeObject(String, Type, JsonSerializerSettings)` (`Newtonsoft.Json.JsonConvert`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  1.7% |  75.0ms |      53 | `SerializeList(JsonWriter, IEnumerable, JsonArrayContract, JsonProperty, JsonContainerContract, JsonProperty)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`) ← `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)` ← `SerializeObject(JsonWriter, Object, JsonObjectContract, JsonProperty, JsonContainerContract, JsonProperty)` ← `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)` ← `SerializeList(JsonWriter, IEnumerable, JsonArrayContract, JsonProperty, JsonContainerContract, JsonProperty)` ← `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)` ← `SerializeObject(JsonWriter, Object, JsonObjectContract, JsonProperty, JsonContainerContract, JsonProperty)` ← `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)` ← `Serialize(JsonWriter, Object, Type)` ← `SerializeInternal(JsonWriter, Object, Type)` (`Newtonsoft.Json.JsonSerializer`) ← `SerializeObjectInternal(Object, Type, JsonSerializer)` (`Newtonsoft.Json.JsonConvert`)                                                                                                                                                                                                                                                                                                                          |
|  1.4% |  60.6ms |      44 | `ReadStringIntoBuffer(wchar)` (`Newtonsoft.Json.JsonTextReader`) ← `ReadStringValue(ReadType)` ← `ReadForType(JsonContract, bool)` (`Newtonsoft.Json.JsonReader`) ← `PopulateList(IList, JsonReader, JsonArrayContract, JsonProperty, String)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`) ← `CreateList(JsonReader, Type, JsonContract, JsonProperty, Object, String)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` ← `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `Deserialize(JsonReader, Type, bool)` ← `DeserializeInternal(JsonReader, Type)` (`Newtonsoft.Json.JsonSerializer`) ← `DeserializeObject(String, Type, JsonSerializerSettings)` (`Newtonsoft.Json.JsonConvert`)                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  1.3% |  56.0ms |      42 | `ReadNumberValue(ReadType)` (`Newtonsoft.Json.JsonTextReader`) ← `ReadForType(JsonContract, bool)` (`Newtonsoft.Json.JsonReader`) ← `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`) ← `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `Deserialize(JsonReader, Type, bool)` ← `DeserializeInternal(JsonReader, Type)` (`Newtonsoft.Json.JsonSerializer`) ← `DeserializeObject(String, Type, JsonSerializerSettings)` (`Newtonsoft.Json.JsonConvert`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  1.2% |  53.8ms |      43 | `ParseReadNumber(ReadType, wchar, int32)` (`Newtonsoft.Json.JsonTextReader`) ← `ReadNumberValue(ReadType)` ← `ReadForType(JsonContract, bool)` (`Newtonsoft.Json.JsonReader`) ← `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`) ← `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `PopulateList(IList, JsonReader, JsonArrayContract, JsonProperty, String)` ← `CreateList(JsonReader, Type, JsonContract, JsonProperty, Object, String)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` ← `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `Deserialize(JsonReader, Type, bool)` ← `DeserializeInternal(JsonReader, Type)` (`Newtonsoft.Json.JsonSerializer`) ← `DeserializeObject(String, Type, JsonSerializerSettings)` (`Newtonsoft.Json.JsonConvert`)                                                                                                                                 |
|  1.1% |  48.4ms |      35 | `FormatDouble(float64, String, NumberFormatInfo)` (`System.Number`) ← `WriteValue(float64)` (`Newtonsoft.Json.JsonTextWriter`) ← `WriteValue(JsonWriter, PrimitiveTypeCode, Object)` (`Newtonsoft.Json.JsonWriter`) ← `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`) ← `SerializeObject(JsonWriter, Object, JsonObjectContract, JsonProperty, JsonContainerContract, JsonProperty)` ← `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)` ← `Serialize(JsonWriter, Object, Type)` ← `SerializeInternal(JsonWriter, Object, Type)` (`Newtonsoft.Json.JsonSerializer`) ← `SerializeObjectInternal(Object, Type, JsonSerializer)` (`Newtonsoft.Json.JsonConvert`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  1.1% |  48.3ms |      34 | `ReadStringIntoBuffer(wchar)` (`Newtonsoft.Json.JsonTextReader`) ← `ParseProperty()` ← `ParseObject()` ← `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`) ← `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `PopulateList(IList, JsonReader, JsonArrayContract, JsonProperty, String)` ← `CreateList(JsonReader, Type, JsonContract, JsonProperty, Object, String)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` ← `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `Deserialize(JsonReader, Type, bool)` ← `DeserializeInternal(JsonReader, Type)` (`Newtonsoft.Json.JsonSerializer`) ← `DeserializeObject(String, Type, JsonSerializerSettings)` (`Newtonsoft.Json.JsonConvert`)                                                                                                                                                                                                        |
|  1.1% |  47.1ms |      29 | `ReadAsInt32()` (`Newtonsoft.Json.JsonTextReader`) ← `ReadForType(JsonContract, bool)` (`Newtonsoft.Json.JsonReader`) ← `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`) ← `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `Deserialize(JsonReader, Type, bool)` ← `DeserializeInternal(JsonReader, Type)` (`Newtonsoft.Json.JsonSerializer`) ← `Deserialize(JsonReader, Type)` ← `DeserializeObject(String, Type, JsonSerializerSettings)` (`Newtonsoft.Json.JsonConvert`) ← `DeserializeObject(String, JsonSerializerSettings)` ← `DeserializeObject(String)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  1.0% |  44.3ms |      31 | `ParseProperty()` (`Newtonsoft.Json.JsonTextReader`) ← `ParseObject()` ← `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`) ← `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `Deserialize(JsonReader, Type, bool)` ← `DeserializeInternal(JsonReader, Type)` (`Newtonsoft.Json.JsonSerializer`) ← `DeserializeObject(String, Type, JsonSerializerSettings)` (`Newtonsoft.Json.JsonConvert`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  0.8% |  37.8ms |      29 | `ParseValue()` (`Newtonsoft.Json.JsonTextReader`) ← `ReadForType(JsonContract, bool)` (`Newtonsoft.Json.JsonReader`) ← `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`) ← `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `Deserialize(JsonReader, Type, bool)` ← `DeserializeInternal(JsonReader, Type)` (`Newtonsoft.Json.JsonSerializer`) ← `DeserializeObject(String, Type, JsonSerializerSettings)` (`Newtonsoft.Json.JsonConvert`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  0.8% |  37.7ms |      33 | `PopulateList(IList, JsonReader, JsonArrayContract, JsonProperty, String)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`) ← `CreateList(JsonReader, Type, JsonContract, JsonProperty, Object, String)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` ← `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `PopulateList(IList, JsonReader, JsonArrayContract, JsonProperty, String)` ← `CreateList(JsonReader, Type, JsonContract, JsonProperty, Object, String)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` ← `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `Deserialize(JsonReader, Type, bool)` ← `DeserializeInternal(JsonReader, Type)` (`Newtonsoft.Json.JsonSerializer`) ← `DeserializeObject(String, Type, JsonSerializerSettings)` (`Newtonsoft.Json.JsonConvert`)                                    |

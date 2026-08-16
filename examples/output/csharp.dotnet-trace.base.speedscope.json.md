# Sampling profile

Took 4.44s.

| Category         |     % |    Time |
| ---------------- | ----: | ------: |
| Ours             | 76.1% |   3.38s |
| Standard library | 21.8% | 968.1ms |
| Native           |  2.1% |  93.6ms |
| Unknown          | <0.1% |  <0.1µs |

## Hottest functions

### Self time

Functions ranked by time spent directly in the function body, excluding callees.

|     % |    Time | Function                                                                                                                       | Location                                                                             |
| ----: | ------: | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| 26.2% |   1.16s | `ReadForType(JsonContract, bool)`                                                                                              | `Newtonsoft.Json.JsonReader`                                                         |
| 13.3% | 591.3ms | `CopyTo(Array, int32)`                                                                                                         | ``System.Collections.Generic.List`1[System.__Canon].System.Collections.ICollection`` |
|  7.3% | 325.5ms | `SerializeObject(JsonWriter, Object, JsonObjectContract, JsonProperty, JsonContainerContract, JsonProperty)`                   | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`                         |
|  5.7% | 252.4ms | `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)`                                                 | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader`                         |
|  4.6% | 203.0ms | `ReadStringIntoBuffer(wchar)`                                                                                                  | `Newtonsoft.Json.JsonTextReader`                                                     |
|  4.2% | 185.3ms | `SerializeList(JsonWriter, IEnumerable, JsonArrayContract, JsonProperty, JsonContainerContract, JsonProperty)`                 | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`                         |
|  3.4% | 150.4ms | `ParseProperty()`                                                                                                              | `Newtonsoft.Json.JsonTextReader`                                                     |
|  2.4% | 106.5ms | `ReadAsInt32()`                                                                                                                | `Newtonsoft.Json.JsonTextReader`                                                     |
|  2.1% |  93.6ms | `UNMANAGED_CODE_TIME`                                                                                                          | `<unknown>`                                                                          |
|  2.1% |  92.9ms | ``WriteEscapedJavaScriptString(TextWriter, String, wchar, bool, bool[], StringEscapeHandling, IArrayPool`1<wchar>, wchar[]&)`` | `Newtonsoft.Json.Utilities.JavaScriptUtils`                                          |
|  2.0% |  88.2ms | `ReadNumberValue(ReadType)`                                                                                                    | `Newtonsoft.Json.JsonTextReader`                                                     |
|  1.8% |  78.1ms | `PopulateList(IList, JsonReader, JsonArrayContract, JsonProperty, String)`                                                     | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader`                         |
|  1.7% |  75.4ms | `ParseValue()`                                                                                                                 | `Newtonsoft.Json.JsonTextReader`                                                     |
|  1.7% |  73.9ms | `ParseReadNumber(ReadType, wchar, int32)`                                                                                      | `Newtonsoft.Json.JsonTextReader`                                                     |
|  1.5% |  67.2ms | `SetToken(JsonToken, Object, bool)`                                                                                            | `Newtonsoft.Json.JsonReader`                                                         |
|  1.2% |  53.7ms | `ReadStringValue(ReadType)`                                                                                                    | `Newtonsoft.Json.JsonTextReader`                                                     |
|  1.1% |  47.0ms | `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)`                          | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`                         |
|  0.9% |  41.7ms | `FindValue(!0)`                                                                                                                | ``System.Collections.Generic.Dictionary`2[System.__Canon,System.__Canon]``           |
|  0.9% |  41.6ms | `ParsePostValue(bool)`                                                                                                         | `Newtonsoft.Json.JsonTextReader`                                                     |
|  0.9% |  41.4ms | `WriteValue(JsonWriter, PrimitiveTypeCode, Object)`                                                                            | `Newtonsoft.Json.JsonWriter`                                                         |

#### Categories

##### Ours

|     % |    Time | Function                                                                                                                       | Location                                                     |
| ----: | ------: | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------ |
| 26.2% |   1.16s | `ReadForType(JsonContract, bool)`                                                                                              | `Newtonsoft.Json.JsonReader`                                 |
|  7.3% | 325.5ms | `SerializeObject(JsonWriter, Object, JsonObjectContract, JsonProperty, JsonContainerContract, JsonProperty)`                   | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |
|  5.7% | 252.4ms | `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)`                                                 | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |
|  4.6% | 203.0ms | `ReadStringIntoBuffer(wchar)`                                                                                                  | `Newtonsoft.Json.JsonTextReader`                             |
|  4.2% | 185.3ms | `SerializeList(JsonWriter, IEnumerable, JsonArrayContract, JsonProperty, JsonContainerContract, JsonProperty)`                 | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |
|  3.4% | 150.4ms | `ParseProperty()`                                                                                                              | `Newtonsoft.Json.JsonTextReader`                             |
|  2.4% | 106.5ms | `ReadAsInt32()`                                                                                                                | `Newtonsoft.Json.JsonTextReader`                             |
|  2.1% |  92.9ms | ``WriteEscapedJavaScriptString(TextWriter, String, wchar, bool, bool[], StringEscapeHandling, IArrayPool`1<wchar>, wchar[]&)`` | `Newtonsoft.Json.Utilities.JavaScriptUtils`                  |
|  2.0% |  88.2ms | `ReadNumberValue(ReadType)`                                                                                                    | `Newtonsoft.Json.JsonTextReader`                             |
|  1.8% |  78.1ms | `PopulateList(IList, JsonReader, JsonArrayContract, JsonProperty, String)`                                                     | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |
|  1.7% |  75.4ms | `ParseValue()`                                                                                                                 | `Newtonsoft.Json.JsonTextReader`                             |
|  1.7% |  73.9ms | `ParseReadNumber(ReadType, wchar, int32)`                                                                                      | `Newtonsoft.Json.JsonTextReader`                             |
|  1.5% |  67.2ms | `SetToken(JsonToken, Object, bool)`                                                                                            | `Newtonsoft.Json.JsonReader`                                 |
|  1.2% |  53.7ms | `ReadStringValue(ReadType)`                                                                                                    | `Newtonsoft.Json.JsonTextReader`                             |
|  1.1% |  47.0ms | `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)`                          | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |
|  0.9% |  41.6ms | `ParsePostValue(bool)`                                                                                                         | `Newtonsoft.Json.JsonTextReader`                             |
|  0.9% |  41.4ms | `WriteValue(JsonWriter, PrimitiveTypeCode, Object)`                                                                            | `Newtonsoft.Json.JsonWriter`                                 |
|  0.8% |  37.6ms | `Read()`                                                                                                                       | `Newtonsoft.Json.JsonTextReader`                             |
|  0.5% |  21.5ms | `ParseObject()`                                                                                                                | `Newtonsoft.Json.JsonTextReader`                             |
|  0.5% |  21.5ms | `GetValue(Object)`                                                                                                             | `Newtonsoft.Json.Serialization.ExpressionValueProvider`      |

##### Standard library

|     % |    Time | Function                                                                     | Location                                                                                                                                           |
| ----: | ------: | ---------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| 13.3% | 591.3ms | `CopyTo(Array, int32)`                                                       | ``System.Collections.Generic.List`1[System.__Canon].System.Collections.ICollection``                                                               |
|  0.9% |  41.7ms | `FindValue(!0)`                                                              | ``System.Collections.Generic.Dictionary`2[System.__Canon,System.__Canon]``                                                                         |
|  0.8% |  33.6ms | `Add(Object)`                                                                | ``System.Collections.Generic.List`1[System.__Canon].System.Collections.IList``                                                                     |
|  0.6% |  28.2ms | `Memmove(unsigned int8&, unsigned int8&, unsigned int)`                      | `System.Buffer`                                                                                                                                    |
|  0.5% |  24.4ms | `IsInstanceOfInterface(void*, Object)`                                       | `System.Runtime.CompilerServices.CastHelpers`                                                                                                      |
|  0.5% |  20.3ms | `Append(wchar&, int32)`                                                      | `System.Text.StringBuilder`                                                                                                                        |
|  0.4% |  16.0ms | `FormatDouble(float64, String, NumberFormatInfo)`                            | `System.Number`                                                                                                                                    |
|  0.2% |   9.5ms | `IsInstance_Helper(void*, Object)`                                           | `System.Runtime.CompilerServices.CastHelpers`                                                                                                      |
|  0.2% |   9.3ms | `StelemRef(Array, int, Object)`                                              | `System.Runtime.CompilerServices.CastHelpers`                                                                                                      |
|  0.2% |   6.8ms | `TryGetValueInternal(Tables<!0, !1>, !0, int32, !1&)`                        | ``System.Collections.Concurrent.ConcurrentDictionary`2[System.__Canon,System.__Canon]``                                                            |
|  0.2% |   6.7ms | `<GetInstance>g__GetProviderNonNull\|58_0(IFormatProvider)`                  | `System.Globalization.NumberFormatInfo`                                                                                                            |
|  0.2% |   6.7ms | `AddWithResize(!0)`                                                          | ``System.Collections.Generic.List`1[System.__Canon]``                                                                                              |
|  0.1% |   4.0ms | `ToString()`                                                                 | `System.Text.StringBuilder`                                                                                                                        |
|  0.1% |   4.0ms | ``TryParseFloat(ReadOnlySpan`1<!!0>, NumberStyles, NumberFormatInfo, !!1&)`` | `System.Number`                                                                                                                                    |
|  0.1% |   2.8ms | `IsInstanceOfClass(void*, Object)`                                           | `System.Runtime.CompilerServices.CastHelpers`                                                                                                      |
|  0.1% |   2.7ms | `ChkCastInterface(void*, Object)`                                            | `System.Runtime.CompilerServices.CastHelpers`                                                                                                      |
|  0.1% |   2.7ms | `AppendWithExpansion(wchar&, int32)`                                         | `System.Text.StringBuilder`                                                                                                                        |
| <0.1% |   1.4ms | `NonPackedIndexOfValueType(!!0&, !!0, int32)`                                | `System.SpanHelpers`                                                                                                                               |
| <0.1% |  <0.1µs | ``GetOrAdd(!0, Func`2<!0, !1>)``                                             | ``System.Collections.Concurrent.ConcurrentDictionary`2[System.__Canon,System.__Canon]``                                                            |
| <0.1% |  <0.1µs | ``GetOrAdd(!0, Func`2<!0, !1>)``                                             | ``System.Collections.Concurrent.ConcurrentDictionary`2[Newtonsoft.Json.Utilities.StructMultiKey`2[System.__Canon,System.__Canon],System.__Canon]`` |

##### Native

|    % |   Time | Function              | Location    |
| ---: | -----: | --------------------- | ----------- |
| 2.1% | 93.6ms | `UNMANAGED_CODE_TIME` | `<unknown>` |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `ReadForType(JsonContract, bool)` (`Newtonsoft.Json.JsonReader`)

|     % |  Time | Caller                                                                         | Location                                                     |
| ----: | ----: | ------------------------------------------------------------------------------ | ------------------------------------------------------------ |
| 99.1% | 1.15s | `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |
|  0.8% | 9.4ms | `PopulateList(IList, JsonReader, JsonArrayContract, JsonProperty, String)`     | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |
|  0.1% | 1.4ms | `Deserialize(JsonReader, Type, bool)`                                          | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |

##### `CopyTo(Array, int32)` (``System.Collections.Generic.List`1[System.__Canon].System.Collections.ICollection``)

|      % |    Time | Caller                                                                     | Location                                                     |
| -----: | ------: | -------------------------------------------------------------------------- | ------------------------------------------------------------ |
| 100.0% | 591.3ms | `CreateList(JsonReader, Type, JsonContract, JsonProperty, Object, String)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |

##### `SerializeObject(JsonWriter, Object, JsonObjectContract, JsonProperty, JsonContainerContract, JsonProperty)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`)

|      % |    Time | Caller                                                                                                | Location                                                     |
| -----: | ------: | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| 100.0% | 325.5ms | `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |

##### `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`)

|      % |    Time | Caller                                                                                                    | Location                                                     |
| -----: | ------: | --------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| 100.0% | 252.4ms | `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |

##### `ReadStringIntoBuffer(wchar)` (`Newtonsoft.Json.JsonTextReader`)

|     % |    Time | Caller                         | Location                         |
| ----: | ------: | ------------------------------ | -------------------------------- |
| 54.4% | 110.4ms | `ReadStringValue(ReadType)`    | `Newtonsoft.Json.JsonTextReader` |
| 43.6% |  88.6ms | `ParseProperty()`              | `Newtonsoft.Json.JsonTextReader` |
|  2.0% |   4.0ms | `ParseString(wchar, ReadType)` | `Newtonsoft.Json.JsonTextReader` |

##### `SerializeList(JsonWriter, IEnumerable, JsonArrayContract, JsonProperty, JsonContainerContract, JsonProperty)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`)

|      % |    Time | Caller                                                                                                | Location                                                     |
| -----: | ------: | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| 100.0% | 185.3ms | `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |

##### `ParseProperty()` (`Newtonsoft.Json.JsonTextReader`)

|      % |    Time | Caller          | Location                         |
| -----: | ------: | --------------- | -------------------------------- |
| 100.0% | 150.4ms | `ParseObject()` | `Newtonsoft.Json.JsonTextReader` |

##### `ReadAsInt32()` (`Newtonsoft.Json.JsonTextReader`)

|      % |    Time | Caller                            | Location                     |
| -----: | ------: | --------------------------------- | ---------------------------- |
| 100.0% | 106.5ms | `ReadForType(JsonContract, bool)` | `Newtonsoft.Json.JsonReader` |

##### `UNMANAGED_CODE_TIME` (`<unknown>`)

|    % |  Time | Caller                                                                     | Location                                                     |
| ---: | ----: | -------------------------------------------------------------------------- | ------------------------------------------------------------ |
| 5.8% | 5.4ms | ``GetMatchingConverter(IList`1<JsonConverter>, Type)``                     | `Newtonsoft.Json.JsonSerializer`                             |
| 4.4% | 4.1ms | `DeserializeObject(String, Type, JsonSerializerSettings)`                  | `Newtonsoft.Json.JsonConvert`                                |
| 2.9% | 2.7ms | `PopulateList(IList, JsonReader, JsonArrayContract, JsonProperty, String)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |
| 2.8% | 2.6ms | `CreateContract(Type)`                                                     | `Newtonsoft.Json.Serialization.DefaultContractResolver`      |
| 1.5% | 1.4ms | `OnSerializing(JsonWriter, JsonContract, Object)`                          | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |

##### ``WriteEscapedJavaScriptString(TextWriter, String, wchar, bool, bool[], StringEscapeHandling, IArrayPool`1<wchar>, wchar[]&)`` (`Newtonsoft.Json.Utilities.JavaScriptUtils`)

|      % |   Time | Caller                                              | Location                     |
| -----: | -----: | --------------------------------------------------- | ---------------------------- |
| 100.0% | 92.9ms | `WriteValue(JsonWriter, PrimitiveTypeCode, Object)` | `Newtonsoft.Json.JsonWriter` |

##### `ReadNumberValue(ReadType)` (`Newtonsoft.Json.JsonTextReader`)

|     % |   Time | Caller                            | Location                         |
| ----: | -----: | --------------------------------- | -------------------------------- |
| 98.5% | 86.8ms | `ReadForType(JsonContract, bool)` | `Newtonsoft.Json.JsonReader`     |
|  1.5% |  1.3ms | `ReadAsDouble()`                  | `Newtonsoft.Json.JsonTextReader` |

##### `PopulateList(IList, JsonReader, JsonArrayContract, JsonProperty, String)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`)

|      % |   Time | Caller                                                                     | Location                                                     |
| -----: | -----: | -------------------------------------------------------------------------- | ------------------------------------------------------------ |
| 100.0% | 78.1ms | `CreateList(JsonReader, Type, JsonContract, JsonProperty, Object, String)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |

##### `ParseValue()` (`Newtonsoft.Json.JsonTextReader`)

|     % |   Time | Caller                            | Location                         |
| ----: | -----: | --------------------------------- | -------------------------------- |
| 98.2% | 74.0ms | `ReadForType(JsonContract, bool)` | `Newtonsoft.Json.JsonReader`     |
|  1.8% |  1.4ms | `Read()`                          | `Newtonsoft.Json.JsonTextReader` |

##### `ParseReadNumber(ReadType, wchar, int32)` (`Newtonsoft.Json.JsonTextReader`)

|     % |   Time | Caller                      | Location                         |
| ----: | -----: | --------------------------- | -------------------------------- |
| 96.3% | 71.2ms | `ReadNumberValue(ReadType)` | `Newtonsoft.Json.JsonTextReader` |
|  3.7% |  2.7ms | `ParseNumber(ReadType)`     | `Newtonsoft.Json.JsonTextReader` |

##### `SetToken(JsonToken, Object, bool)` (`Newtonsoft.Json.JsonReader`)

|     % |   Time | Caller                                    | Location                         |
| ----: | -----: | ----------------------------------------- | -------------------------------- |
| 28.1% | 18.9ms | `ParseValue()`                            | `Newtonsoft.Json.JsonTextReader` |
| 26.0% | 17.5ms | `ParseProperty()`                         | `Newtonsoft.Json.JsonTextReader` |
| 19.8% | 13.3ms | `ParseReadString(wchar, ReadType)`        | `Newtonsoft.Json.JsonTextReader` |
| 12.0% |  8.1ms | `ParsePostValue(bool)`                    | `Newtonsoft.Json.JsonTextReader` |
| 10.0% |  6.7ms | `ParseReadNumber(ReadType, wchar, int32)` | `Newtonsoft.Json.JsonTextReader` |

##### `ReadStringValue(ReadType)` (`Newtonsoft.Json.JsonTextReader`)

|     % |   Time | Caller                            | Location                         |
| ----: | -----: | --------------------------------- | -------------------------------- |
| 95.0% | 51.0ms | `ReadForType(JsonContract, bool)` | `Newtonsoft.Json.JsonReader`     |
|  5.0% |  2.7ms | `ReadAsString()`                  | `Newtonsoft.Json.JsonTextReader` |

##### `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`)

|     % |   Time | Caller                                                                                                         | Location                                                     |
| ----: | -----: | -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| 51.4% | 24.2ms | `SerializeList(JsonWriter, IEnumerable, JsonArrayContract, JsonProperty, JsonContainerContract, JsonProperty)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |
| 45.8% | 21.5ms | `SerializeObject(JsonWriter, Object, JsonObjectContract, JsonProperty, JsonContainerContract, JsonProperty)`   | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |
|  2.8% |  1.3ms | `Serialize(JsonWriter, Object, Type)`                                                                          | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |

##### `FindValue(!0)` (``System.Collections.Generic.Dictionary`2[System.__Canon,System.__Canon]``)

|     % |   Time | Caller                                                                         | Location                                                                   |
| ----: | -----: | ------------------------------------------------------------------------------ | -------------------------------------------------------------------------- |
| 96.8% | 40.3ms | `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader`               |
|  3.2% |  1.3ms | `TryGetValue(!0, !1&)`                                                         | ``System.Collections.Generic.Dictionary`2[System.__Canon,System.__Canon]`` |

##### `ParsePostValue(bool)` (`Newtonsoft.Json.JsonTextReader`)

|     % |   Time | Caller                      | Location                         |
| ----: | -----: | --------------------------- | -------------------------------- |
| 51.5% | 21.4ms | `ReadStringValue(ReadType)` | `Newtonsoft.Json.JsonTextReader` |
| 48.5% | 20.2ms | `Read()`                    | `Newtonsoft.Json.JsonTextReader` |

##### `WriteValue(JsonWriter, PrimitiveTypeCode, Object)` (`Newtonsoft.Json.JsonWriter`)

|     % |   Time | Caller                                                                                                             | Location                                                     |
| ----: | -----: | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------ |
| 96.7% | 40.0ms | `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)`              | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |
|  3.3% |  1.3ms | `SerializePrimitive(JsonWriter, Object, JsonPrimitiveContract, JsonProperty, JsonContainerContract, JsonProperty)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |

##### `Read()` (`Newtonsoft.Json.JsonTextReader`)

|     % |   Time | Caller                                                                         | Location                                                     |
| ----: | -----: | ------------------------------------------------------------------------------ | ------------------------------------------------------------ |
| 68.0% | 25.6ms | `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |
| 28.5% | 10.7ms | `ReadForType(JsonContract, bool)`                                              | `Newtonsoft.Json.JsonReader`                                 |
|  3.5% |  1.3ms | `Deserialize(JsonReader, Type, bool)`                                          | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |

##### `Add(Object)` (``System.Collections.Generic.List`1[System.__Canon].System.Collections.IList``)

|      % |   Time | Caller                                                                     | Location                                                     |
| -----: | -----: | -------------------------------------------------------------------------- | ------------------------------------------------------------ |
| 100.0% | 33.6ms | `PopulateList(IList, JsonReader, JsonArrayContract, JsonProperty, String)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |

##### `Memmove(unsigned int8&, unsigned int8&, unsigned int)` (`System.Buffer`)

|     % |  Time | Caller                                                                                                                         | Location                                                     |
| ----: | ----: | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------ |
| 28.6% | 8.1ms | `Read(wchar[], int32, int32)`                                                                                                  | `System.IO.StringReader`                                     |
| 18.7% | 5.3ms | `Ctor(wchar[], int32, int32)`                                                                                                  | `System.String`                                              |
| 14.4% | 4.1ms | `ToString()`                                                                                                                   | `System.Text.StringBuilder`                                  |
| 14.3% | 4.0ms | ``WriteEscapedJavaScriptString(TextWriter, String, wchar, bool, bool[], StringEscapeHandling, IArrayPool`1<wchar>, wchar[]&)`` | `Newtonsoft.Json.Utilities.JavaScriptUtils`                  |
|  9.6% | 2.7ms | `SerializeObject(JsonWriter, Object, JsonObjectContract, JsonProperty, JsonContainerContract, JsonProperty)`                   | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |

##### `IsInstanceOfInterface(void*, Object)` (`System.Runtime.CompilerServices.CastHelpers`)

|     % |   Time | Caller                                                                                                         | Location                                                     |
| ----: | -----: | -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| 66.6% | 16.2ms | `SerializeList(JsonWriter, IEnumerable, JsonArrayContract, JsonProperty, JsonContainerContract, JsonProperty)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |
| 33.4% |  8.1ms | `PopulateList(IList, JsonReader, JsonArrayContract, JsonProperty, String)`                                     | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |

##### `ParseObject()` (`Newtonsoft.Json.JsonTextReader`)

|     % |   Time | Caller                                                                                                    | Location                                                     |
| ----: | -----: | --------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| 81.3% | 17.5ms | `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)`                            | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |
| 12.5% |  2.7ms | `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |
|  6.3% |  1.3ms | `Read()`                                                                                                  | `Newtonsoft.Json.JsonTextReader`                             |

##### `GetValue(Object)` (`Newtonsoft.Json.Serialization.ExpressionValueProvider`)

|     % |   Time | Caller                                                                                                                                                         | Location                                                     |
| ----: | -----: | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| 62.6% | 13.4ms | `SerializeObject(JsonWriter, Object, JsonObjectContract, JsonProperty, JsonContainerContract, JsonProperty)`                                                   | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |
| 18.9% |  4.1ms | `CalculatePropertyValues(JsonWriter, Object, JsonContainerContract, JsonProperty, JsonProperty, JsonContract&, Object&)`                                       | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |
| 12.3% |  2.6ms | `CalculatePropertyDetails(JsonProperty, JsonConverter&, JsonContainerContract, JsonProperty, JsonReader, Object, bool&, Object&, JsonContract&, bool&, bool&)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |
|  6.2% |  1.3ms | `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)`                                                                                 | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |

##### `Append(wchar&, int32)` (`System.Text.StringBuilder`)

|     % |   Time | Caller          | Location                         |
| ----: | -----: | --------------- | -------------------------------- |
| 93.4% | 18.9ms | `WriteNull()`   | `Newtonsoft.Json.JsonTextWriter` |
|  6.6% |  1.3ms | `Write(String)` | `System.IO.StringWriter`         |

##### `FormatDouble(float64, String, NumberFormatInfo)` (`System.Number`)

|     % |   Time | Caller                                                | Location                         |
| ----: | -----: | ----------------------------------------------------- | -------------------------------- |
| 91.6% | 14.7ms | `WriteValue(float64)`                                 | `Newtonsoft.Json.JsonTextWriter` |
|  8.4% |  1.4ms | `ToString(float64, FloatFormatHandling, wchar, bool)` | `Newtonsoft.Json.JsonConvert`    |

##### `IsInstance_Helper(void*, Object)` (`System.Runtime.CompilerServices.CastHelpers`)

|      % |  Time | Caller                                                                                                         | Location                                                     |
| -----: | ----: | -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| 100.0% | 9.5ms | `SerializeList(JsonWriter, IEnumerable, JsonArrayContract, JsonProperty, JsonContainerContract, JsonProperty)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |

##### `StelemRef(Array, int, Object)` (`System.Runtime.CompilerServices.CastHelpers`)

|     % |  Time | Caller                                                                                                         | Location                                                                       |
| ----: | ----: | -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| 42.4% | 3.9ms | `SerializeList(JsonWriter, IEnumerable, JsonArrayContract, JsonProperty, JsonContainerContract, JsonProperty)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`                   |
| 29.0% | 2.7ms | `SerializeObject(JsonWriter, Object, JsonObjectContract, JsonProperty, JsonContainerContract, JsonProperty)`   | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`                   |
| 14.4% | 1.3ms | `AddWithResize(!0)`                                                                                            | ``System.Collections.Generic.List`1[System.__Canon]``                          |
| 14.2% | 1.3ms | `Add(Object)`                                                                                                  | ``System.Collections.Generic.List`1[System.__Canon].System.Collections.IList`` |

##### `TryGetValueInternal(Tables<!0, !1>, !0, int32, !1&)` (``System.Collections.Concurrent.ConcurrentDictionary`2[System.__Canon,System.__Canon]``)

|     % |  Time | Caller                                                                                                         | Location                                                     |
| ----: | ----: | -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| 60.1% | 4.1ms | `SerializeList(JsonWriter, IEnumerable, JsonArrayContract, JsonProperty, JsonContainerContract, JsonProperty)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |
| 39.9% | 2.7ms | `Deserialize(JsonReader, Type, bool)`                                                                          | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |

##### `<GetInstance>g__GetProviderNonNull|58_0(IFormatProvider)` (`System.Globalization.NumberFormatInfo`)

|      % |  Time | Caller                | Location                         |
| -----: | ----: | --------------------- | -------------------------------- |
| 100.0% | 6.7ms | `WriteValue(float64)` | `Newtonsoft.Json.JsonTextWriter` |

##### `AddWithResize(!0)` (``System.Collections.Generic.List`1[System.__Canon]``)

|     % |  Time | Caller                                                                                                       | Location                                                                       |
| ----: | ----: | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| 60.0% | 4.0ms | `Add(Object)`                                                                                                | ``System.Collections.Generic.List`1[System.__Canon].System.Collections.IList`` |
| 40.0% | 2.7ms | `SerializeObject(JsonWriter, Object, JsonObjectContract, JsonProperty, JsonContainerContract, JsonProperty)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`                   |

##### `ToString()` (`System.Text.StringBuilder`)

|     % |  Time | Caller                                                  | Location                      |
| ----: | ----: | ------------------------------------------------------- | ----------------------------- |
| 66.2% | 2.7ms | `Main()`                                                | `Profile.Program`             |
| 33.8% | 1.4ms | `SerializeObjectInternal(Object, Type, JsonSerializer)` | `Newtonsoft.Json.JsonConvert` |

##### ``TryParseFloat(ReadOnlySpan`1<!!0>, NumberStyles, NumberFormatInfo, !!1&)`` (`System.Number`)

|      % |   Time | Caller                                                      | Location                         |
| -----: | -----: | ----------------------------------------------------------- | -------------------------------- |
| 100.0% |  4.0ms | `ParseReadNumber(ReadType, wchar, int32)`                   | `Newtonsoft.Json.JsonTextReader` |
|  <0.1% | <0.1µs | `TryParse(String, NumberStyles, IFormatProvider, float64&)` | `System.Double`                  |

##### `IsInstanceOfClass(void*, Object)` (`System.Runtime.CompilerServices.CastHelpers`)

|     % |  Time | Caller                                                                     | Location                                                     |
| ----: | ----: | -------------------------------------------------------------------------- | ------------------------------------------------------------ |
| 50.2% | 1.4ms | `CreateList(JsonReader, Type, JsonContract, JsonProperty, Object, String)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |
| 49.8% | 1.4ms | `DeserializeInternal(JsonReader, Type)`                                    | `Newtonsoft.Json.JsonSerializer`                             |

##### `ChkCastInterface(void*, Object)` (`System.Runtime.CompilerServices.CastHelpers`)

|     % |  Time | Caller                                                                                                | Location                                                     |
| ----: | ----: | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| 50.1% | 1.4ms | `CreateTemporaryCollection()`                                                                         | `Newtonsoft.Json.Serialization.JsonArrayContract`            |
| 49.9% | 1.4ms | `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |

##### `AppendWithExpansion(wchar&, int32)` (`System.Text.StringBuilder`)

|      % |  Time | Caller        | Location                         |
| -----: | ----: | ------------- | -------------------------------- |
| 100.0% | 2.7ms | `WriteNull()` | `Newtonsoft.Json.JsonTextWriter` |

##### `NonPackedIndexOfValueType(!!0&, !!0, int32)` (`System.SpanHelpers`)

|      % |  Time | Caller                                | Location                      |
| -----: | ----: | ------------------------------------- | ----------------------------- |
| 100.0% | 1.4ms | `EnsureDecimalPlace(float64, String)` | `Newtonsoft.Json.JsonConvert` |

##### ``GetOrAdd(!0, Func`2<!0, !1>)`` (``System.Collections.Concurrent.ConcurrentDictionary`2[System.__Canon,System.__Canon]``)

|      % |   Time | Caller    | Location                                                                       |
| -----: | -----: | --------- | ------------------------------------------------------------------------------ |
| 100.0% | <0.1µs | `Get(!0)` | ``Newtonsoft.Json.Utilities.ThreadSafeStore`2[System.__Canon,System.__Canon]`` |

##### ``GetOrAdd(!0, Func`2<!0, !1>)`` (``System.Collections.Concurrent.ConcurrentDictionary`2[Newtonsoft.Json.Utilities.StructMultiKey`2[System.__Canon,System.__Canon],System.__Canon]``)

|      % |   Time | Caller    | Location                                                                                                                                  |
| -----: | -----: | --------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| 100.0% | <0.1µs | `Get(!0)` | ``Newtonsoft.Json.Utilities.ThreadSafeStore`2[Newtonsoft.Json.Utilities.StructMultiKey`2[System.__Canon,System.__Canon],System.__Canon]`` |

### Total time

Functions ranked by total time spent in the function and all its callees.

|     % |    Time | Function                                                                                                         | Location                                                                             |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| 99.6% |   4.43s | `Main()`                                                                                                         | `Profile.Program`                                                                    |
| 76.3% |   3.39s | `DeserializeObject(String, Type, JsonSerializerSettings)`                                                        | `Newtonsoft.Json.JsonConvert`                                                        |
| 76.0% |   3.38s | `DeserializeInternal(JsonReader, Type)`                                                                          | `Newtonsoft.Json.JsonSerializer`                                                     |
| 75.8% |   3.37s | `Deserialize(JsonReader, Type, bool)`                                                                            | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader`                         |
| 75.0% |   3.33s | `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader`                         |
| 74.9% |   3.33s | `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)`        | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader`                         |
| 74.5% |   3.31s | `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)`                                   | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader`                         |
| 46.2% |   2.05s | `CreateList(JsonReader, Type, JsonContract, JsonProperty, Object, String)`                                       | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader`                         |
| 43.0% |   1.91s | `ReadForType(JsonContract, bool)`                                                                                | `Newtonsoft.Json.JsonReader`                                                         |
| 38.6% |   1.71s | `PopulateList(IList, JsonReader, JsonArrayContract, JsonProperty, String)`                                       | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader`                         |
| 22.9% |   1.02s | `SerializeObjectInternal(Object, Type, JsonSerializer)`                                                          | `Newtonsoft.Json.JsonConvert`                                                        |
| 22.3% | 992.2ms | `SerializeInternal(JsonWriter, Object, Type)`                                                                    | `Newtonsoft.Json.JsonSerializer`                                                     |
| 22.3% | 989.6ms | `Serialize(JsonWriter, Object, Type)`                                                                            | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`                         |
| 21.7% | 964.0ms | `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)`            | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`                         |
| 21.6% | 962.7ms | `SerializeObject(JsonWriter, Object, JsonObjectContract, JsonProperty, JsonContainerContract, JsonProperty)`     | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`                         |
| 16.7% | 742.1ms | `SerializeList(JsonWriter, IEnumerable, JsonArrayContract, JsonProperty, JsonContainerContract, JsonProperty)`   | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`                         |
| 13.4% | 594.0ms | `CopyTo(Array, int32)`                                                                                           | ``System.Collections.Generic.List`1[System.__Canon].System.Collections.ICollection`` |
|  7.2% | 321.4ms | `Deserialize(JsonReader, Type)`                                                                                  | `Newtonsoft.Json.JsonSerializer`                                                     |
|  6.4% | 283.4ms | `ParseObject()`                                                                                                  | `Newtonsoft.Json.JsonTextReader`                                                     |
|  5.9% | 261.9ms | `ParseProperty()`                                                                                                | `Newtonsoft.Json.JsonTextReader`                                                     |

#### Categories

##### Ours

|     % |    Time | Function                                                                                                         | Location                                                     |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| 99.6% |   4.43s | `Main()`                                                                                                         | `Profile.Program`                                            |
| 76.3% |   3.39s | `DeserializeObject(String, Type, JsonSerializerSettings)`                                                        | `Newtonsoft.Json.JsonConvert`                                |
| 76.0% |   3.38s | `DeserializeInternal(JsonReader, Type)`                                                                          | `Newtonsoft.Json.JsonSerializer`                             |
| 75.8% |   3.37s | `Deserialize(JsonReader, Type, bool)`                                                                            | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |
| 75.0% |   3.33s | `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |
| 74.9% |   3.33s | `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)`        | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |
| 74.5% |   3.31s | `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)`                                   | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |
| 46.2% |   2.05s | `CreateList(JsonReader, Type, JsonContract, JsonProperty, Object, String)`                                       | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |
| 43.0% |   1.91s | `ReadForType(JsonContract, bool)`                                                                                | `Newtonsoft.Json.JsonReader`                                 |
| 38.6% |   1.71s | `PopulateList(IList, JsonReader, JsonArrayContract, JsonProperty, String)`                                       | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |
| 22.9% |   1.02s | `SerializeObjectInternal(Object, Type, JsonSerializer)`                                                          | `Newtonsoft.Json.JsonConvert`                                |
| 22.3% | 992.2ms | `SerializeInternal(JsonWriter, Object, Type)`                                                                    | `Newtonsoft.Json.JsonSerializer`                             |
| 22.3% | 989.6ms | `Serialize(JsonWriter, Object, Type)`                                                                            | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |
| 21.7% | 964.0ms | `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)`            | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |
| 21.6% | 962.7ms | `SerializeObject(JsonWriter, Object, JsonObjectContract, JsonProperty, JsonContainerContract, JsonProperty)`     | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |
| 16.7% | 742.1ms | `SerializeList(JsonWriter, IEnumerable, JsonArrayContract, JsonProperty, JsonContainerContract, JsonProperty)`   | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |
|  7.2% | 321.4ms | `Deserialize(JsonReader, Type)`                                                                                  | `Newtonsoft.Json.JsonSerializer`                             |
|  6.4% | 283.4ms | `ParseObject()`                                                                                                  | `Newtonsoft.Json.JsonTextReader`                             |
|  5.9% | 261.9ms | `ParseProperty()`                                                                                                | `Newtonsoft.Json.JsonTextReader`                             |
|  5.8% | 257.3ms | `ReadNumberValue(ReadType)`                                                                                      | `Newtonsoft.Json.JsonTextReader`                             |

##### Standard library

|     % |    Time | Function                                                                     | Location                                                                                                                                           |
| ----: | ------: | ---------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| 13.4% | 594.0ms | `CopyTo(Array, int32)`                                                       | ``System.Collections.Generic.List`1[System.__Canon].System.Collections.ICollection``                                                               |
|  1.7% |  77.8ms | ``TryParseFloat(ReadOnlySpan`1<!!0>, NumberStyles, NumberFormatInfo, !!1&)`` | `System.Number`                                                                                                                                    |
|  1.7% |  74.0ms | `FormatDouble(float64, String, NumberFormatInfo)`                            | `System.Number`                                                                                                                                    |
|  1.2% |  55.1ms | `FindValue(!0)`                                                              | ``System.Collections.Generic.Dictionary`2[System.__Canon,System.__Canon]``                                                                         |
|  0.9% |  40.3ms | `Add(Object)`                                                                | ``System.Collections.Generic.List`1[System.__Canon].System.Collections.IList``                                                                     |
|  0.6% |  28.2ms | `Memmove(unsigned int8&, unsigned int8&, unsigned int)`                      | `System.Buffer`                                                                                                                                    |
|  0.5% |  24.4ms | `IsInstanceOfInterface(void*, Object)`                                       | `System.Runtime.CompilerServices.CastHelpers`                                                                                                      |
|  0.5% |  22.8ms | ``GetOrAdd(!0, Func`2<!0, !1>)``                                             | ``System.Collections.Concurrent.ConcurrentDictionary`2[System.__Canon,System.__Canon]``                                                            |
|  0.5% |  20.3ms | `Append(wchar&, int32)`                                                      | `System.Text.StringBuilder`                                                                                                                        |
|  0.3% |  13.4ms | `IndexOf(!!0[], !!0, int32, int32)`                                          | `System.Array`                                                                                                                                     |
|  0.2% |   9.5ms | `IsInstance_Helper(void*, Object)`                                           | `System.Runtime.CompilerServices.CastHelpers`                                                                                                      |
|  0.2% |   9.3ms | `StelemRef(Array, int, Object)`                                              | `System.Runtime.CompilerServices.CastHelpers`                                                                                                      |
|  0.2% |   8.1ms | `ToString()`                                                                 | `System.Text.StringBuilder`                                                                                                                        |
|  0.2% |   8.1ms | `AddWithResize(!0)`                                                          | ``System.Collections.Generic.List`1[System.__Canon]``                                                                                              |
|  0.2% |   8.1ms | `Read(wchar[], int32, int32)`                                                | `System.IO.StringReader`                                                                                                                           |
|  0.2% |   6.8ms | `TryGetValueInternal(Tables<!0, !1>, !0, int32, !1&)`                        | ``System.Collections.Concurrent.ConcurrentDictionary`2[System.__Canon,System.__Canon]``                                                            |
|  0.2% |   6.7ms | `<GetInstance>g__GetProviderNonNull\|58_0(IFormatProvider)`                  | `System.Globalization.NumberFormatInfo`                                                                                                            |
|  0.1% |   5.3ms | `Compile(LambdaExpression)`                                                  | `System.Linq.Expressions.Compiler.LambdaCompiler`                                                                                                  |
|  0.1% |   5.3ms | `Ctor(wchar[], int32, int32)`                                                | `System.String`                                                                                                                                    |
|  0.1% |   5.3ms | ``GetOrAdd(!0, Func`2<!0, !1>)``                                             | ``System.Collections.Concurrent.ConcurrentDictionary`2[Newtonsoft.Json.Utilities.StructMultiKey`2[System.__Canon,System.__Canon],System.__Canon]`` |

##### Native

|    % |   Time | Function              | Location    |
| ---: | -----: | --------------------- | ----------- |
| 2.1% | 93.6ms | `UNMANAGED_CODE_TIME` | `<unknown>` |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `Main()` (`Profile.Program`)

|     % |    Time | Callee                                                    | Location                      |
| ----: | ------: | --------------------------------------------------------- | ----------------------------- |
| 72.1% |   3.19s | `DeserializeObject(String, Type, JsonSerializerSettings)` | `Newtonsoft.Json.JsonConvert` |
| 21.2% | 937.3ms | `SerializeObjectInternal(Object, Type, JsonSerializer)`   | `Newtonsoft.Json.JsonConvert` |
|  4.5% | 198.3ms | `DeserializeObject(String)`                               | `Newtonsoft.Json.JsonConvert` |
|  1.9% |  85.8ms | `SerializeObject(Object)`                                 | `Newtonsoft.Json.JsonConvert` |
|  0.2% |   6.8ms | `ToString()`                                              | `System.Text.StringBuilder`   |

##### `DeserializeObject(String, Type, JsonSerializerSettings)` (`Newtonsoft.Json.JsonConvert`)

|     % |    Time | Callee                                  | Location                         |
| ----: | ------: | --------------------------------------- | -------------------------------- |
| 90.1% |   3.05s | `DeserializeInternal(JsonReader, Type)` | `Newtonsoft.Json.JsonSerializer` |
|  9.5% | 321.4ms | `Deserialize(JsonReader, Type)`         | `Newtonsoft.Json.JsonSerializer` |
|  0.1% |   4.1ms | `UNMANAGED_CODE_TIME`                   | `<unknown>`                      |

##### `DeserializeInternal(JsonReader, Type)` (`Newtonsoft.Json.JsonSerializer`)

|     % |  Time | Callee                                | Location                                                     |
| ----: | ----: | ------------------------------------- | ------------------------------------------------------------ |
| 99.8% | 3.37s | `Deserialize(JsonReader, Type, bool)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |
| <0.1% | 1.4ms | `IsInstanceOfClass(void*, Object)`    | `System.Runtime.CompilerServices.CastHelpers`                |

##### `Deserialize(JsonReader, Type, bool)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`)

|     % |   Time | Callee                                                                                                           | Location                                                                                |
| ----: | -----: | ---------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| 98.9% |  3.33s | `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader`                            |
|  0.8% | 26.9ms | `ReadForType(JsonContract, bool)`                                                                                | `Newtonsoft.Json.JsonReader`                                                            |
|  0.1% |  2.7ms | `TryGetValueInternal(Tables<!0, !1>, !0, int32, !1&)`                                                            | ``System.Collections.Concurrent.ConcurrentDictionary`2[System.__Canon,System.__Canon]`` |
| <0.1% |  1.3ms | `UNMANAGED_CODE_TIME`                                                                                            | `<unknown>`                                                                             |
| <0.1% |  1.3ms | `Read()`                                                                                                         | `Newtonsoft.Json.JsonTextReader`                                                        |

##### `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`)

|      % |   Time | Callee                                                                                                    | Location                                                     |
| -----: | -----: | --------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| 100.0% |  3.33s | `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |
|  61.6% |  2.05s | `CreateList(JsonReader, Type, JsonContract, JsonProperty, Object, String)`                                | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |
|   0.5% | 17.5ms | `EnsureType(JsonReader, Object, CultureInfo, JsonContract, Type)`                                         | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |
|  <0.1% |  1.3ms | `UNMANAGED_CODE_TIME`                                                                                     | `<unknown>`                                                  |

##### `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`)

|     % |   Time | Callee                                                                         | Location                                                     |
| ----: | -----: | ------------------------------------------------------------------------------ | ------------------------------------------------------------ |
| 99.4% |  3.31s | `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |
|  1.3% | 43.0ms | `ParseObject()`                                                                | `Newtonsoft.Json.JsonTextReader`                             |
|  0.1% |  2.7ms | `ReadAndAssert()`                                                              | `Newtonsoft.Json.JsonReader`                                 |
| <0.1% |  1.3ms | `UNMANAGED_CODE_TIME`                                                          | `<unknown>`                                                  |

##### `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`)

|     % |    Time | Callee                                                                                                           | Location                                                     |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| 57.0% |   1.88s | `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |
| 50.7% |   1.67s | `ReadForType(JsonContract, bool)`                                                                                | `Newtonsoft.Json.JsonReader`                                 |
|  7.0% | 232.3ms | `ParseObject()`                                                                                                  | `Newtonsoft.Json.JsonTextReader`                             |
|  5.3% | 174.5ms | `SetPropertyValue(JsonProperty, JsonConverter, JsonContainerContract, JsonProperty, JsonReader, Object)`         | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |
|  1.9% |  63.1ms | `Read()`                                                                                                         | `Newtonsoft.Json.JsonTextReader`                             |

##### `CreateList(JsonReader, Type, JsonContract, JsonProperty, Object, String)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`)

|     % |    Time | Callee                                                                     | Location                                                                             |
| ----: | ------: | -------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| 83.6% |   1.71s | `PopulateList(IList, JsonReader, JsonArrayContract, JsonProperty, String)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader`                         |
| 28.9% | 594.0ms | `CopyTo(Array, int32)`                                                     | ``System.Collections.Generic.List`1[System.__Canon].System.Collections.ICollection`` |
|  0.5% |   9.4ms | `CreateNewList(JsonReader, JsonArrayContract, bool&)`                      | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader`                         |
|  0.1% |   1.4ms | `IsInstanceOfClass(void*, Object)`                                         | `System.Runtime.CompilerServices.CastHelpers`                                        |
|  0.1% |   1.4ms | `HasNoDefinedType(JsonContract)`                                           | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader`                         |

##### `ReadForType(JsonContract, bool)` (`Newtonsoft.Json.JsonReader`)

|     % |    Time | Callee                      | Location                         |
| ----: | ------: | --------------------------- | -------------------------------- |
| 12.9% | 246.6ms | `ReadNumberValue(ReadType)` | `Newtonsoft.Json.JsonTextReader` |
| 11.2% | 213.6ms | `ReadStringValue(ReadType)` | `Newtonsoft.Json.JsonTextReader` |
|  6.3% | 121.2ms | `ParseValue()`              | `Newtonsoft.Json.JsonTextReader` |
|  5.7% | 109.1ms | `ReadAsInt32()`             | `Newtonsoft.Json.JsonTextReader` |
|  1.1% |  21.5ms | `ReadAsDouble()`            | `Newtonsoft.Json.JsonTextReader` |

##### `PopulateList(IList, JsonReader, JsonArrayContract, JsonProperty, String)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`)

|     % |    Time | Callee                                                                                                           | Location                                                                       |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| 87.1% |   1.49s | `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader`                   |
| 12.1% | 207.1ms | `ReadForType(JsonContract, bool)`                                                                                | `Newtonsoft.Json.JsonReader`                                                   |
|  2.3% |  40.3ms | `Add(Object)`                                                                                                    | ``System.Collections.Generic.List`1[System.__Canon].System.Collections.IList`` |
|  0.5% |   8.1ms | `IsInstanceOfInterface(void*, Object)`                                                                           | `System.Runtime.CompilerServices.CastHelpers`                                  |
|  0.2% |   2.7ms | `UNMANAGED_CODE_TIME`                                                                                            | `<unknown>`                                                                    |

##### `SerializeObjectInternal(Object, Type, JsonSerializer)` (`Newtonsoft.Json.JsonConvert`)

|     % |    Time | Callee                                        | Location                                        |
| ----: | ------: | --------------------------------------------- | ----------------------------------------------- |
| 88.4% | 902.1ms | `SerializeInternal(JsonWriter, Object, Type)` | `Newtonsoft.Json.JsonSerializer`                |
|  9.0% |  91.5ms | `Serialize(JsonWriter, Object, Type)`         | `Newtonsoft.Json.JsonSerializer`                |
|  0.8% |   7.9ms | `.ctor(TextWriter)`                           | `Newtonsoft.Json.JsonTextWriter`                |
|  0.1% |   1.4ms | `Dispose()`                                   | `Newtonsoft.Json.JsonWriter.System.IDisposable` |
|  0.1% |   1.4ms | `ToString()`                                  | `System.Text.StringBuilder`                     |

##### `SerializeInternal(JsonWriter, Object, Type)` (`Newtonsoft.Json.JsonSerializer`)

|     % |    Time | Callee                                | Location                                                     |
| ----: | ------: | ------------------------------------- | ------------------------------------------------------------ |
| 99.7% | 989.6ms | `Serialize(JsonWriter, Object, Type)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |
|  0.1% |   1.4ms | `UNMANAGED_CODE_TIME`                 | `<unknown>`                                                  |
|  0.1% |   1.3ms | `.ctor(JsonSerializer)`               | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |

##### `Serialize(JsonWriter, Object, Type)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`)

|     % |    Time | Callee                                                                                                | Location                                                     |
| ----: | ------: | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| 97.4% | 964.0ms | `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |
|  1.9% |  18.8ms | `GetContractSafe(Object)`                                                                             | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |

##### `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`)

|     % |    Time | Callee                                                                                                             | Location                                                     |
| ----: | ------: | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------ |
| 99.9% | 962.7ms | `SerializeObject(JsonWriter, Object, JsonObjectContract, JsonProperty, JsonContainerContract, JsonProperty)`       | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |
| 77.0% | 742.1ms | `SerializeList(JsonWriter, IEnumerable, JsonArrayContract, JsonProperty, JsonContainerContract, JsonProperty)`     | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |
| 25.1% | 242.0ms | `WriteValue(JsonWriter, PrimitiveTypeCode, Object)`                                                                | `Newtonsoft.Json.JsonWriter`                                 |
|  3.2% |  30.9ms | `WriteNull()`                                                                                                      | `Newtonsoft.Json.JsonTextWriter`                             |
|  1.5% |  14.7ms | `SerializePrimitive(JsonWriter, Object, JsonPrimitiveContract, JsonProperty, JsonContainerContract, JsonProperty)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |

##### `SerializeObject(JsonWriter, Object, JsonObjectContract, JsonProperty, JsonContainerContract, JsonProperty)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`)

|     % |    Time | Callee                                                                                                                   | Location                                                     |
| ----: | ------: | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------ |
| 86.4% | 832.1ms | `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)`                    | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |
|  1.9% |  18.8ms | `CalculatePropertyValues(JsonWriter, Object, JsonContainerContract, JsonProperty, JsonProperty, JsonContract&, Object&)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |
|  1.8% |  17.5ms | `CheckForCircularReference(JsonWriter, Object, JsonProperty, JsonContract, JsonContainerContract, JsonProperty)`         | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |
|  1.4% |  13.4ms | `GetValue(Object)`                                                                                                       | `Newtonsoft.Json.Serialization.ExpressionValueProvider`      |
|  0.6% |   5.4ms | `WritePropertyName(JsonWriter)`                                                                                          | `Newtonsoft.Json.Serialization.JsonProperty`                 |

##### `SerializeList(JsonWriter, IEnumerable, JsonArrayContract, JsonProperty, JsonContainerContract, JsonProperty)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`)

|     % |    Time | Callee                                                                                                           | Location                                                                                |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| 81.5% | 604.8ms | `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)`            | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`                            |
|  2.2% |  16.2ms | `IsInstanceOfInterface(void*, Object)`                                                                           | `System.Runtime.CompilerServices.CastHelpers`                                           |
|  1.4% |  10.7ms | `CheckForCircularReference(JsonWriter, Object, JsonProperty, JsonContract, JsonContainerContract, JsonProperty)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`                            |
|  1.3% |   9.5ms | `IsInstance_Helper(void*, Object)`                                                                               | `System.Runtime.CompilerServices.CastHelpers`                                           |
|  0.5% |   4.1ms | `TryGetValueInternal(Tables<!0, !1>, !0, int32, !1&)`                                                            | ``System.Collections.Concurrent.ConcurrentDictionary`2[System.__Canon,System.__Canon]`` |

##### `Deserialize(JsonReader, Type)` (`Newtonsoft.Json.JsonSerializer`)

|      % |    Time | Callee                                  | Location                         |
| -----: | ------: | --------------------------------------- | -------------------------------- |
| 100.0% | 321.4ms | `DeserializeInternal(JsonReader, Type)` | `Newtonsoft.Json.JsonSerializer` |

##### `ParseObject()` (`Newtonsoft.Json.JsonTextReader`)

|     % |    Time | Callee            | Location                         |
| ----: | ------: | ----------------- | -------------------------------- |
| 92.4% | 261.9ms | `ParseProperty()` | `Newtonsoft.Json.JsonTextReader` |

##### `ParseProperty()` (`Newtonsoft.Json.JsonTextReader`)

|     % |   Time | Callee                              | Location                               |
| ----: | -----: | ----------------------------------- | -------------------------------------- |
| 34.3% | 89.9ms | `ReadStringIntoBuffer(wchar)`       | `Newtonsoft.Json.JsonTextReader`       |
|  6.7% | 17.5ms | `SetToken(JsonToken, Object, bool)` | `Newtonsoft.Json.JsonReader`           |
|  1.0% |  2.7ms | `EatWhitespace()`                   | `Newtonsoft.Json.JsonTextReader`       |
|  0.5% |  1.4ms | `Get(wchar[], int32, int32)`        | `Newtonsoft.Json.DefaultJsonNameTable` |

##### `ReadNumberValue(ReadType)` (`Newtonsoft.Json.JsonTextReader`)

|     % |    Time | Callee                                    | Location                         |
| ----: | ------: | ----------------------------------------- | -------------------------------- |
| 61.6% | 158.4ms | `ParseReadNumber(ReadType, wchar, int32)` | `Newtonsoft.Json.JsonTextReader` |
|  4.1% |  10.6ms | `ParseNumber(ReadType)`                   | `Newtonsoft.Json.JsonTextReader` |

##### ``TryParseFloat(ReadOnlySpan`1<!!0>, NumberStyles, NumberFormatInfo, !!1&)`` (`System.Number`)

|    % |  Time | Callee                | Location    |
| ---: | ----: | --------------------- | ----------- |
| 1.7% | 1.3ms | `UNMANAGED_CODE_TIME` | `<unknown>` |

##### `Add(Object)` (``System.Collections.Generic.List`1[System.__Canon].System.Collections.IList``)

|     % |  Time | Callee                          | Location                                              |
| ----: | ----: | ------------------------------- | ----------------------------------------------------- |
| 13.4% | 5.4ms | `AddWithResize(!0)`             | ``System.Collections.Generic.List`1[System.__Canon]`` |
|  3.3% | 1.3ms | `StelemRef(Array, int, Object)` | `System.Runtime.CompilerServices.CastHelpers`         |

##### ``GetOrAdd(!0, Func`2<!0, !1>)`` (``System.Collections.Concurrent.ConcurrentDictionary`2[System.__Canon,System.__Canon]``)

|     % |   Time | Callee                 | Location                                                |
| ----: | -----: | ---------------------- | ------------------------------------------------------- |
| 94.2% | 21.5ms | `CreateContract(Type)` | `Newtonsoft.Json.Serialization.DefaultContractResolver` |
| 11.7% |  2.7ms | `GetAttribute(Object)` | `Newtonsoft.Json.Serialization.JsonTypeReflector`       |
|  5.8% |  1.3ms | `UNMANAGED_CODE_TIME`  | `<unknown>`                                             |

##### `ToString()` (`System.Text.StringBuilder`)

|     % |  Time | Callee                                                  | Location        |
| ----: | ----: | ------------------------------------------------------- | --------------- |
| 50.2% | 4.1ms | `Memmove(unsigned int8&, unsigned int8&, unsigned int)` | `System.Buffer` |

##### `AddWithResize(!0)` (``System.Collections.Generic.List`1[System.__Canon]``)

|     % |  Time | Callee                          | Location                                      |
| ----: | ----: | ------------------------------- | --------------------------------------------- |
| 16.6% | 1.3ms | `StelemRef(Array, int, Object)` | `System.Runtime.CompilerServices.CastHelpers` |

##### `Read(wchar[], int32, int32)` (`System.IO.StringReader`)

|      % |  Time | Callee                                                  | Location        |
| -----: | ----: | ------------------------------------------------------- | --------------- |
| 100.0% | 8.1ms | `Memmove(unsigned int8&, unsigned int8&, unsigned int)` | `System.Buffer` |

##### `Ctor(wchar[], int32, int32)` (`System.String`)

|      % |  Time | Callee                                                  | Location        |
| -----: | ----: | ------------------------------------------------------- | --------------- |
| 100.0% | 5.3ms | `Memmove(unsigned int8&, unsigned int8&, unsigned int)` | `System.Buffer` |

##### ``GetOrAdd(!0, Func`2<!0, !1>)`` (``System.Collections.Concurrent.ConcurrentDictionary`2[Newtonsoft.Json.Utilities.StructMultiKey`2[System.__Canon,System.__Canon],System.__Canon]``)

|     % |  Time | Callee                                                               | Location                              |
| ----: | ----: | -------------------------------------------------------------------- | ------------------------------------- |
| 50.0% | 2.6ms | ``InitializeValuesAndNames(StructMultiKey`2<Type, NamingStrategy>)`` | `Newtonsoft.Json.Utilities.EnumUtils` |
| 25.0% | 1.3ms | `UNMANAGED_CODE_TIME`                                                | `<unknown>`                           |

## Hottest call stacks

Call stacks ranked by time spent in their leaf frame.

Common call stack: `Main()` (`Profile.Program`)

|     % |    Time | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 16.5% | 735.3ms | `ReadForType(JsonContract, bool)` (`Newtonsoft.Json.JsonReader`) ← `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`) ← `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `Deserialize(JsonReader, Type, bool)` ← `DeserializeInternal(JsonReader, Type)` (`Newtonsoft.Json.JsonSerializer`) ← `DeserializeObject(String, Type, JsonSerializerSettings)` (`Newtonsoft.Json.JsonConvert`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  8.4% | 373.3ms | `ReadForType(JsonContract, bool)` (`Newtonsoft.Json.JsonReader`) ← `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`) ← `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `PopulateList(IList, JsonReader, JsonArrayContract, JsonProperty, String)` ← `CreateList(JsonReader, Type, JsonContract, JsonProperty, Object, String)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` ← `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `Deserialize(JsonReader, Type, bool)` ← `DeserializeInternal(JsonReader, Type)` (`Newtonsoft.Json.JsonSerializer`) ← `DeserializeObject(String, Type, JsonSerializerSettings)` (`Newtonsoft.Json.JsonConvert`)                                                                                                                                                                                                                                              |
|  6.8% | 301.2ms | `CopyTo(Array, int32)` (``System.Collections.Generic.List`1[System.__Canon].System.Collections.ICollection``) ← `CreateList(JsonReader, Type, JsonContract, JsonProperty, Object, String)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`) ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` ← `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `Deserialize(JsonReader, Type, bool)` ← `DeserializeInternal(JsonReader, Type)` (`Newtonsoft.Json.JsonSerializer`) ← `DeserializeObject(String, Type, JsonSerializerSettings)` (`Newtonsoft.Json.JsonConvert`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  5.3% | 236.8ms | `CopyTo(Array, int32)` (``System.Collections.Generic.List`1[System.__Canon].System.Collections.ICollection``) ← `CreateList(JsonReader, Type, JsonContract, JsonProperty, Object, String)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`) ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` ← `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `PopulateList(IList, JsonReader, JsonArrayContract, JsonProperty, String)` ← `CreateList(JsonReader, Type, JsonContract, JsonProperty, Object, String)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` ← `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `Deserialize(JsonReader, Type, bool)` ← `DeserializeInternal(JsonReader, Type)` (`Newtonsoft.Json.JsonSerializer`) ← `DeserializeObject(String, Type, JsonSerializerSettings)` (`Newtonsoft.Json.JsonConvert`) |
|  4.9% | 219.1ms | `SerializeObject(JsonWriter, Object, JsonObjectContract, JsonProperty, JsonContainerContract, JsonProperty)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`) ← `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)` ← `SerializeList(JsonWriter, IEnumerable, JsonArrayContract, JsonProperty, JsonContainerContract, JsonProperty)` ← `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)` ← `SerializeObject(JsonWriter, Object, JsonObjectContract, JsonProperty, JsonContainerContract, JsonProperty)` ← `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)` ← `Serialize(JsonWriter, Object, Type)` ← `SerializeInternal(JsonWriter, Object, Type)` (`Newtonsoft.Json.JsonSerializer`) ← `SerializeObjectInternal(Object, Type, JsonSerializer)` (`Newtonsoft.Json.JsonConvert`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  3.7% | 165.4ms | `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`) ← `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `PopulateList(IList, JsonReader, JsonArrayContract, JsonProperty, String)` ← `CreateList(JsonReader, Type, JsonContract, JsonProperty, Object, String)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` ← `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `Deserialize(JsonReader, Type, bool)` ← `DeserializeInternal(JsonReader, Type)` (`Newtonsoft.Json.JsonSerializer`) ← `DeserializeObject(String, Type, JsonSerializerSettings)` (`Newtonsoft.Json.JsonConvert`)                                                                                                                                                                                                                                                                                                                 |
|  2.4% | 107.6ms | `SerializeList(JsonWriter, IEnumerable, JsonArrayContract, JsonProperty, JsonContainerContract, JsonProperty)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`) ← `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)` ← `SerializeObject(JsonWriter, Object, JsonObjectContract, JsonProperty, JsonContainerContract, JsonProperty)` ← `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)` ← `Serialize(JsonWriter, Object, Type)` ← `SerializeInternal(JsonWriter, Object, Type)` (`Newtonsoft.Json.JsonSerializer`) ← `SerializeObjectInternal(Object, Type, JsonSerializer)` (`Newtonsoft.Json.JsonConvert`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  2.2% |  96.9ms | `SerializeObject(JsonWriter, Object, JsonObjectContract, JsonProperty, JsonContainerContract, JsonProperty)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`) ← `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)` ← `Serialize(JsonWriter, Object, Type)` ← `SerializeInternal(JsonWriter, Object, Type)` (`Newtonsoft.Json.JsonSerializer`) ← `SerializeObjectInternal(Object, Type, JsonSerializer)` (`Newtonsoft.Json.JsonConvert`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  1.9% |  84.6ms | `ParseProperty()` (`Newtonsoft.Json.JsonTextReader`) ← `ParseObject()` ← `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`) ← `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `PopulateList(IList, JsonReader, JsonArrayContract, JsonProperty, String)` ← `CreateList(JsonReader, Type, JsonContract, JsonProperty, Object, String)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` ← `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `Deserialize(JsonReader, Type, bool)` ← `DeserializeInternal(JsonReader, Type)` (`Newtonsoft.Json.JsonSerializer`) ← `DeserializeObject(String, Type, JsonSerializerSettings)` (`Newtonsoft.Json.JsonConvert`)                                                                                                                                                                                                                                        |
|  1.8% |  80.4ms | `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`) ← `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `Deserialize(JsonReader, Type, bool)` ← `DeserializeInternal(JsonReader, Type)` (`Newtonsoft.Json.JsonSerializer`) ← `DeserializeObject(String, Type, JsonSerializerSettings)` (`Newtonsoft.Json.JsonConvert`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  1.7% |  75.0ms | `SerializeList(JsonWriter, IEnumerable, JsonArrayContract, JsonProperty, JsonContainerContract, JsonProperty)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`) ← `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)` ← `SerializeObject(JsonWriter, Object, JsonObjectContract, JsonProperty, JsonContainerContract, JsonProperty)` ← `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)` ← `SerializeList(JsonWriter, IEnumerable, JsonArrayContract, JsonProperty, JsonContainerContract, JsonProperty)` ← `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)` ← `SerializeObject(JsonWriter, Object, JsonObjectContract, JsonProperty, JsonContainerContract, JsonProperty)` ← `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)` ← `Serialize(JsonWriter, Object, Type)` ← `SerializeInternal(JsonWriter, Object, Type)` (`Newtonsoft.Json.JsonSerializer`) ← `SerializeObjectInternal(Object, Type, JsonSerializer)` (`Newtonsoft.Json.JsonConvert`)                                                                                                                                                                                                                                                                                                                          |
|  1.4% |  60.6ms | `ReadStringIntoBuffer(wchar)` (`Newtonsoft.Json.JsonTextReader`) ← `ReadStringValue(ReadType)` ← `ReadForType(JsonContract, bool)` (`Newtonsoft.Json.JsonReader`) ← `PopulateList(IList, JsonReader, JsonArrayContract, JsonProperty, String)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`) ← `CreateList(JsonReader, Type, JsonContract, JsonProperty, Object, String)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` ← `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `Deserialize(JsonReader, Type, bool)` ← `DeserializeInternal(JsonReader, Type)` (`Newtonsoft.Json.JsonSerializer`) ← `DeserializeObject(String, Type, JsonSerializerSettings)` (`Newtonsoft.Json.JsonConvert`)                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  1.3% |  56.0ms | `ReadNumberValue(ReadType)` (`Newtonsoft.Json.JsonTextReader`) ← `ReadForType(JsonContract, bool)` (`Newtonsoft.Json.JsonReader`) ← `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`) ← `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `Deserialize(JsonReader, Type, bool)` ← `DeserializeInternal(JsonReader, Type)` (`Newtonsoft.Json.JsonSerializer`) ← `DeserializeObject(String, Type, JsonSerializerSettings)` (`Newtonsoft.Json.JsonConvert`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  1.2% |  53.8ms | `ParseReadNumber(ReadType, wchar, int32)` (`Newtonsoft.Json.JsonTextReader`) ← `ReadNumberValue(ReadType)` ← `ReadForType(JsonContract, bool)` (`Newtonsoft.Json.JsonReader`) ← `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`) ← `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `PopulateList(IList, JsonReader, JsonArrayContract, JsonProperty, String)` ← `CreateList(JsonReader, Type, JsonContract, JsonProperty, Object, String)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` ← `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `Deserialize(JsonReader, Type, bool)` ← `DeserializeInternal(JsonReader, Type)` (`Newtonsoft.Json.JsonSerializer`) ← `DeserializeObject(String, Type, JsonSerializerSettings)` (`Newtonsoft.Json.JsonConvert`)                                                                                                                                 |
|  1.1% |  48.4ms | `FormatDouble(float64, String, NumberFormatInfo)` (`System.Number`) ← `WriteValue(float64)` (`Newtonsoft.Json.JsonTextWriter`) ← `WriteValue(JsonWriter, PrimitiveTypeCode, Object)` (`Newtonsoft.Json.JsonWriter`) ← `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`) ← `SerializeObject(JsonWriter, Object, JsonObjectContract, JsonProperty, JsonContainerContract, JsonProperty)` ← `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)` ← `Serialize(JsonWriter, Object, Type)` ← `SerializeInternal(JsonWriter, Object, Type)` (`Newtonsoft.Json.JsonSerializer`) ← `SerializeObjectInternal(Object, Type, JsonSerializer)` (`Newtonsoft.Json.JsonConvert`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  1.1% |  48.3ms | `ReadStringIntoBuffer(wchar)` (`Newtonsoft.Json.JsonTextReader`) ← `ParseProperty()` ← `ParseObject()` ← `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`) ← `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `PopulateList(IList, JsonReader, JsonArrayContract, JsonProperty, String)` ← `CreateList(JsonReader, Type, JsonContract, JsonProperty, Object, String)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` ← `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `Deserialize(JsonReader, Type, bool)` ← `DeserializeInternal(JsonReader, Type)` (`Newtonsoft.Json.JsonSerializer`) ← `DeserializeObject(String, Type, JsonSerializerSettings)` (`Newtonsoft.Json.JsonConvert`)                                                                                                                                                                                                        |
|  1.1% |  47.1ms | `ReadAsInt32()` (`Newtonsoft.Json.JsonTextReader`) ← `ReadForType(JsonContract, bool)` (`Newtonsoft.Json.JsonReader`) ← `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`) ← `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `Deserialize(JsonReader, Type, bool)` ← `DeserializeInternal(JsonReader, Type)` (`Newtonsoft.Json.JsonSerializer`) ← `Deserialize(JsonReader, Type)` ← `DeserializeObject(String, Type, JsonSerializerSettings)` (`Newtonsoft.Json.JsonConvert`) ← `DeserializeObject(String, JsonSerializerSettings)` ← `DeserializeObject(String)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  1.0% |  44.3ms | `ParseProperty()` (`Newtonsoft.Json.JsonTextReader`) ← `ParseObject()` ← `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`) ← `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `Deserialize(JsonReader, Type, bool)` ← `DeserializeInternal(JsonReader, Type)` (`Newtonsoft.Json.JsonSerializer`) ← `DeserializeObject(String, Type, JsonSerializerSettings)` (`Newtonsoft.Json.JsonConvert`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  0.8% |  37.8ms | `ParseValue()` (`Newtonsoft.Json.JsonTextReader`) ← `ReadForType(JsonContract, bool)` (`Newtonsoft.Json.JsonReader`) ← `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`) ← `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `Deserialize(JsonReader, Type, bool)` ← `DeserializeInternal(JsonReader, Type)` (`Newtonsoft.Json.JsonSerializer`) ← `DeserializeObject(String, Type, JsonSerializerSettings)` (`Newtonsoft.Json.JsonConvert`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  0.8% |  37.7ms | `PopulateList(IList, JsonReader, JsonArrayContract, JsonProperty, String)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`) ← `CreateList(JsonReader, Type, JsonContract, JsonProperty, Object, String)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` ← `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `PopulateList(IList, JsonReader, JsonArrayContract, JsonProperty, String)` ← `CreateList(JsonReader, Type, JsonContract, JsonProperty, Object, String)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` ← `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `Deserialize(JsonReader, Type, bool)` ← `DeserializeInternal(JsonReader, Type)` (`Newtonsoft.Json.JsonSerializer`) ← `DeserializeObject(String, Type, JsonSerializerSettings)` (`Newtonsoft.Json.JsonConvert`)                                    |

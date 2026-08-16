# Sampling profile

Took 4.73s.

| Category         |     % |    Time |
| ---------------- | ----: | ------: |
| Ours             | 74.0% |   3.50s |
| Standard library | 23.6% |   1.11s |
| Native           |  2.4% | 113.0ms |
| Unknown          | <0.1% |  <0.1µs |

## Hottest functions

### Self time

Functions ranked by time spent directly in the function body, excluding callees.

|     % |    Time | Function                                                                                                                       | Location                                                                             |
| ----: | ------: | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| 32.8% |   1.55s | `ReadForType(JsonContract, bool)`                                                                                              | `Newtonsoft.Json.JsonReader`                                                         |
| 16.5% | 783.3ms | `CopyTo(Array, int32)`                                                                                                         | ``System.Collections.Generic.List`1[System.__Canon].System.Collections.ICollection`` |
|  6.3% | 296.6ms | `SerializeObject(JsonWriter, Object, JsonObjectContract, JsonProperty, JsonContainerContract, JsonProperty)`                   | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`                         |
|  4.6% | 217.6ms | `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)`                                                 | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader`                         |
|  3.2% | 151.7ms | `SerializeList(JsonWriter, IEnumerable, JsonArrayContract, JsonProperty, JsonContainerContract, JsonProperty)`                 | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`                         |
|  3.0% | 141.6ms | `ReadStringIntoBuffer(wchar)`                                                                                                  | `Newtonsoft.Json.JsonTextReader`                                                     |
|  2.4% | 113.0ms | `UNMANAGED_CODE_TIME`                                                                                                          | `<unknown>`                                                                          |
|  2.3% | 110.1ms | `ParseProperty()`                                                                                                              | `Newtonsoft.Json.JsonTextReader`                                                     |
|  2.1% |  98.3ms | `PopulateList(IList, JsonReader, JsonArrayContract, JsonProperty, String)`                                                     | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader`                         |
|  2.0% |  93.0ms | `ReadAsInt32()`                                                                                                                | `Newtonsoft.Json.JsonTextReader`                                                     |
|  1.9% |  90.7ms | `ReadNumberValue(ReadType)`                                                                                                    | `Newtonsoft.Json.JsonTextReader`                                                     |
|  1.4% |  67.1ms | `ParseReadNumber(ReadType, wchar, int32)`                                                                                      | `Newtonsoft.Json.JsonTextReader`                                                     |
|  1.4% |  66.7ms | `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)`                          | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`                         |
|  1.3% |  62.7ms | `ParseValue()`                                                                                                                 | `Newtonsoft.Json.JsonTextReader`                                                     |
|  1.3% |  60.2ms | `SetToken(JsonToken, Object, bool)`                                                                                            | `Newtonsoft.Json.JsonReader`                                                         |
|  1.1% |  54.3ms | `ParsePostValue(bool)`                                                                                                         | `Newtonsoft.Json.JsonTextReader`                                                     |
|  1.1% |  53.6ms | ``WriteEscapedJavaScriptString(TextWriter, String, wchar, bool, bool[], StringEscapeHandling, IArrayPool`1<wchar>, wchar[]&)`` | `Newtonsoft.Json.Utilities.JavaScriptUtils`                                          |
|  0.9% |  43.9ms | `FindValue(!0)`                                                                                                                | ``System.Collections.Generic.Dictionary`2[System.__Canon,System.__Canon]``           |
|  0.9% |  41.0ms | `WriteValue(JsonWriter, PrimitiveTypeCode, Object)`                                                                            | `Newtonsoft.Json.JsonWriter`                                                         |
|  0.8% |  37.2ms | `Memmove(unsigned int8&, unsigned int8&, unsigned int)`                                                                        | `System.Buffer`                                                                      |

#### Categories

##### Ours

|     % |    Time | Function                                                                                                                       | Location                                                     |
| ----: | ------: | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------ |
| 32.8% |   1.55s | `ReadForType(JsonContract, bool)`                                                                                              | `Newtonsoft.Json.JsonReader`                                 |
|  6.3% | 296.6ms | `SerializeObject(JsonWriter, Object, JsonObjectContract, JsonProperty, JsonContainerContract, JsonProperty)`                   | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |
|  4.6% | 217.6ms | `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)`                                                 | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |
|  3.2% | 151.7ms | `SerializeList(JsonWriter, IEnumerable, JsonArrayContract, JsonProperty, JsonContainerContract, JsonProperty)`                 | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |
|  3.0% | 141.6ms | `ReadStringIntoBuffer(wchar)`                                                                                                  | `Newtonsoft.Json.JsonTextReader`                             |
|  2.3% | 110.1ms | `ParseProperty()`                                                                                                              | `Newtonsoft.Json.JsonTextReader`                             |
|  2.1% |  98.3ms | `PopulateList(IList, JsonReader, JsonArrayContract, JsonProperty, String)`                                                     | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |
|  2.0% |  93.0ms | `ReadAsInt32()`                                                                                                                | `Newtonsoft.Json.JsonTextReader`                             |
|  1.9% |  90.7ms | `ReadNumberValue(ReadType)`                                                                                                    | `Newtonsoft.Json.JsonTextReader`                             |
|  1.4% |  67.1ms | `ParseReadNumber(ReadType, wchar, int32)`                                                                                      | `Newtonsoft.Json.JsonTextReader`                             |
|  1.4% |  66.7ms | `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)`                          | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |
|  1.3% |  62.7ms | `ParseValue()`                                                                                                                 | `Newtonsoft.Json.JsonTextReader`                             |
|  1.3% |  60.2ms | `SetToken(JsonToken, Object, bool)`                                                                                            | `Newtonsoft.Json.JsonReader`                                 |
|  1.1% |  54.3ms | `ParsePostValue(bool)`                                                                                                         | `Newtonsoft.Json.JsonTextReader`                             |
|  1.1% |  53.6ms | ``WriteEscapedJavaScriptString(TextWriter, String, wchar, bool, bool[], StringEscapeHandling, IArrayPool`1<wchar>, wchar[]&)`` | `Newtonsoft.Json.Utilities.JavaScriptUtils`                  |
|  0.9% |  41.0ms | `WriteValue(JsonWriter, PrimitiveTypeCode, Object)`                                                                            | `Newtonsoft.Json.JsonWriter`                                 |
|  0.7% |  35.0ms | `Read()`                                                                                                                       | `Newtonsoft.Json.JsonTextReader`                             |
|  0.7% |  32.4ms | `ReadStringValue(ReadType)`                                                                                                    | `Newtonsoft.Json.JsonTextReader`                             |
|  0.5% |  23.1ms | `GetValue(Object)`                                                                                                             | `Newtonsoft.Json.Serialization.ExpressionValueProvider`      |
|  0.5% |  21.8ms | `ParseObject()`                                                                                                                | `Newtonsoft.Json.JsonTextReader`                             |

##### Standard library

|     % |    Time | Function                                                                     | Location                                                                                |
| ----: | ------: | ---------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| 16.5% | 783.3ms | `CopyTo(Array, int32)`                                                       | ``System.Collections.Generic.List`1[System.__Canon].System.Collections.ICollection``    |
|  0.9% |  43.9ms | `FindValue(!0)`                                                              | ``System.Collections.Generic.Dictionary`2[System.__Canon,System.__Canon]``              |
|  0.8% |  37.2ms | `Memmove(unsigned int8&, unsigned int8&, unsigned int)`                      | `System.Buffer`                                                                         |
|  0.4% |  20.8ms | `Add(Object)`                                                                | ``System.Collections.Generic.List`1[System.__Canon].System.Collections.IList``          |
|  0.4% |  18.9ms | `IsInstanceOfInterface(void*, Object)`                                       | `System.Runtime.CompilerServices.CastHelpers`                                           |
|  0.3% |  13.7ms | `TryGetValueInternal(Tables<!0, !1>, !0, int32, !1&)`                        | ``System.Collections.Concurrent.ConcurrentDictionary`2[System.__Canon,System.__Canon]`` |
|  0.3% |  13.5ms | `ChkCastInterface(void*, Object)`                                            | `System.Runtime.CompilerServices.CastHelpers`                                           |
|  0.3% |  13.4ms | `StelemRef(Array, int, Object)`                                              | `System.Runtime.CompilerServices.CastHelpers`                                           |
|  0.2% |  11.1ms | `FormatDouble(float64, String, NumberFormatInfo)`                            | `System.Number`                                                                         |
|  0.2% |   9.6ms | `IsInstance_Helper(void*, Object)`                                           | `System.Runtime.CompilerServices.CastHelpers`                                           |
|  0.1% |   6.8ms | `Append(wchar&, int32)`                                                      | `System.Text.StringBuilder`                                                             |
|  0.1% |   4.2ms | `IndexOf(!!0[], !!0, int32, int32)`                                          | `System.Array`                                                                          |
|  0.1% |   4.1ms | `AddWithResize(!0)`                                                          | ``System.Collections.Generic.List`1[System.__Canon]``                                   |
|  0.1% |   2.8ms | `AddWithResize(!0)`                                                          | ``System.Collections.Generic.List`1[Newtonsoft.Json.JsonPosition]``                     |
|  0.1% |   2.7ms | `NonPackedIndexOfValueType(!!0&, !!0, int32)`                                | `System.SpanHelpers`                                                                    |
|  0.1% |   2.7ms | ``TryParseFloat(ReadOnlySpan`1<!!0>, NumberStyles, NumberFormatInfo, !!1&)`` | `System.Number`                                                                         |
| <0.1% |   1.4ms | `Write(String)`                                                              | `System.IO.StringWriter`                                                                |
| <0.1% |   1.3ms | `ToString()`                                                                 | `System.Text.StringBuilder`                                                             |
| <0.1% |   1.2ms | `AppendWithExpansion(wchar&, int32)`                                         | `System.Text.StringBuilder`                                                             |
| <0.1% |  <0.1µs | `TryParse(String, NumberStyles, IFormatProvider, float64&)`                  | `System.Double`                                                                         |

##### Native

|    % |    Time | Function              | Location    |
| ---: | ------: | --------------------- | ----------- |
| 2.4% | 113.0ms | `UNMANAGED_CODE_TIME` | `<unknown>` |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `ReadForType(JsonContract, bool)` (`Newtonsoft.Json.JsonReader`)

|     % |  Time | Caller                                                                         | Location                                                     |
| ----: | ----: | ------------------------------------------------------------------------------ | ------------------------------------------------------------ |
| 99.4% | 1.54s | `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |
|  0.6% | 9.6ms | `PopulateList(IList, JsonReader, JsonArrayContract, JsonProperty, String)`     | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |

##### `CopyTo(Array, int32)` (``System.Collections.Generic.List`1[System.__Canon].System.Collections.ICollection``)

|      % |    Time | Caller                                                                     | Location                                                     |
| -----: | ------: | -------------------------------------------------------------------------- | ------------------------------------------------------------ |
| 100.0% | 783.3ms | `CreateList(JsonReader, Type, JsonContract, JsonProperty, Object, String)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |

##### `SerializeObject(JsonWriter, Object, JsonObjectContract, JsonProperty, JsonContainerContract, JsonProperty)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`)

|      % |    Time | Caller                                                                                                | Location                                                     |
| -----: | ------: | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| 100.0% | 296.6ms | `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |

##### `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`)

|      % |    Time | Caller                                                                                                    | Location                                                     |
| -----: | ------: | --------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| 100.0% | 217.6ms | `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |

##### `SerializeList(JsonWriter, IEnumerable, JsonArrayContract, JsonProperty, JsonContainerContract, JsonProperty)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`)

|      % |    Time | Caller                                                                                                | Location                                                     |
| -----: | ------: | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| 100.0% | 151.7ms | `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |

##### `ReadStringIntoBuffer(wchar)` (`Newtonsoft.Json.JsonTextReader`)

|     % |   Time | Caller                         | Location                         |
| ----: | -----: | ------------------------------ | -------------------------------- |
| 53.7% | 76.1ms | `ReadStringValue(ReadType)`    | `Newtonsoft.Json.JsonTextReader` |
| 45.3% | 64.1ms | `ParseProperty()`              | `Newtonsoft.Json.JsonTextReader` |
|  1.0% |  1.4ms | `ParseString(wchar, ReadType)` | `Newtonsoft.Json.JsonTextReader` |

##### `UNMANAGED_CODE_TIME` (`<unknown>`)

|    % |  Time | Caller                                                                         | Location                                                     |
| ---: | ----: | ------------------------------------------------------------------------------ | ------------------------------------------------------------ |
| 6.2% | 6.9ms | `SerializeObjectInternal(Object, Type, JsonSerializer)`                        | `Newtonsoft.Json.JsonConvert`                                |
| 5.6% | 6.3ms | `DeserializeObject(String, Type, JsonSerializerSettings)`                      | `Newtonsoft.Json.JsonConvert`                                |
| 3.6% | 4.1ms | ``GetMatchingConverter(IList`1<JsonConverter>, Type)``                         | `Newtonsoft.Json.JsonSerializer`                             |
| 3.6% | 4.1ms | `Node()`                                                                       | `dynamicClass.CreateProfile`                                 |
| 2.4% | 2.7ms | `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |

##### `ParseProperty()` (`Newtonsoft.Json.JsonTextReader`)

|      % |    Time | Caller          | Location                         |
| -----: | ------: | --------------- | -------------------------------- |
| 100.0% | 110.1ms | `ParseObject()` | `Newtonsoft.Json.JsonTextReader` |

##### `PopulateList(IList, JsonReader, JsonArrayContract, JsonProperty, String)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`)

|      % |   Time | Caller                                                                     | Location                                                     |
| -----: | -----: | -------------------------------------------------------------------------- | ------------------------------------------------------------ |
| 100.0% | 98.3ms | `CreateList(JsonReader, Type, JsonContract, JsonProperty, Object, String)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |

##### `ReadAsInt32()` (`Newtonsoft.Json.JsonTextReader`)

|      % |   Time | Caller                            | Location                     |
| -----: | -----: | --------------------------------- | ---------------------------- |
| 100.0% | 93.0ms | `ReadForType(JsonContract, bool)` | `Newtonsoft.Json.JsonReader` |

##### `ReadNumberValue(ReadType)` (`Newtonsoft.Json.JsonTextReader`)

|      % |   Time | Caller                            | Location                     |
| -----: | -----: | --------------------------------- | ---------------------------- |
| 100.0% | 90.7ms | `ReadForType(JsonContract, bool)` | `Newtonsoft.Json.JsonReader` |

##### `ParseReadNumber(ReadType, wchar, int32)` (`Newtonsoft.Json.JsonTextReader`)

|      % |   Time | Caller                      | Location                         |
| -----: | -----: | --------------------------- | -------------------------------- |
| 100.0% | 67.1ms | `ReadNumberValue(ReadType)` | `Newtonsoft.Json.JsonTextReader` |

##### `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`)

|     % |   Time | Caller                                                                                                         | Location                                                     |
| ----: | -----: | -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| 51.0% | 34.0ms | `SerializeList(JsonWriter, IEnumerable, JsonArrayContract, JsonProperty, JsonContainerContract, JsonProperty)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |
| 47.0% | 31.4ms | `SerializeObject(JsonWriter, Object, JsonObjectContract, JsonProperty, JsonContainerContract, JsonProperty)`   | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |
|  2.0% |  1.3ms | `Serialize(JsonWriter, Object, Type)`                                                                          | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |

##### `ParseValue()` (`Newtonsoft.Json.JsonTextReader`)

|      % |   Time | Caller                            | Location                     |
| -----: | -----: | --------------------------------- | ---------------------------- |
| 100.0% | 62.7ms | `ReadForType(JsonContract, bool)` | `Newtonsoft.Json.JsonReader` |

##### `SetToken(JsonToken, Object, bool)` (`Newtonsoft.Json.JsonReader`)

|     % |   Time | Caller                                    | Location                         |
| ----: | -----: | ----------------------------------------- | -------------------------------- |
| 36.1% | 21.8ms | `ParseReadString(wchar, ReadType)`        | `Newtonsoft.Json.JsonTextReader` |
| 32.2% | 19.4ms | `ParseProperty()`                         | `Newtonsoft.Json.JsonTextReader` |
| 13.7% |  8.3ms | `ParseValue()`                            | `Newtonsoft.Json.JsonTextReader` |
| 13.4% |  8.1ms | `ParseReadNumber(ReadType, wchar, int32)` | `Newtonsoft.Json.JsonTextReader` |
|  2.2% |  1.3ms | `SetToken(JsonToken)`                     | `Newtonsoft.Json.JsonReader`     |

##### `ParsePostValue(bool)` (`Newtonsoft.Json.JsonTextReader`)

|     % |   Time | Caller                      | Location                         |
| ----: | -----: | --------------------------- | -------------------------------- |
| 60.1% | 32.6ms | `Read()`                    | `Newtonsoft.Json.JsonTextReader` |
| 39.9% | 21.7ms | `ReadStringValue(ReadType)` | `Newtonsoft.Json.JsonTextReader` |

##### ``WriteEscapedJavaScriptString(TextWriter, String, wchar, bool, bool[], StringEscapeHandling, IArrayPool`1<wchar>, wchar[]&)`` (`Newtonsoft.Json.Utilities.JavaScriptUtils`)

|     % |   Time | Caller                                              | Location                         |
| ----: | -----: | --------------------------------------------------- | -------------------------------- |
| 97.5% | 52.2ms | `WriteValue(JsonWriter, PrimitiveTypeCode, Object)` | `Newtonsoft.Json.JsonWriter`     |
|  2.5% |  1.3ms | `WriteEscapedString(String, bool)`                  | `Newtonsoft.Json.JsonTextWriter` |

##### `FindValue(!0)` (``System.Collections.Generic.Dictionary`2[System.__Canon,System.__Canon]``)

|     % |   Time | Caller                                                                         | Location                                                                   |
| ----: | -----: | ------------------------------------------------------------------------------ | -------------------------------------------------------------------------- |
| 93.8% | 41.2ms | `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader`               |
|  3.2% |  1.4ms | `TryGetValue(!0, !1&)`                                                         | ``System.Collections.Generic.Dictionary`2[System.__Canon,System.__Canon]`` |
|  3.0% |  1.3ms | `GetClosestMatchProperty(String)`                                              | `Newtonsoft.Json.Serialization.JsonPropertyCollection`                     |

##### `WriteValue(JsonWriter, PrimitiveTypeCode, Object)` (`Newtonsoft.Json.JsonWriter`)

|     % |   Time | Caller                                                                                                             | Location                                                     |
| ----: | -----: | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------ |
| 86.5% | 35.4ms | `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)`              | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |
| 13.5% |  5.5ms | `SerializePrimitive(JsonWriter, Object, JsonPrimitiveContract, JsonProperty, JsonContainerContract, JsonProperty)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |

##### `Memmove(unsigned int8&, unsigned int8&, unsigned int)` (`System.Buffer`)

|     % |   Time | Caller                                                                                                       | Location                                                     |
| ----: | -----: | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------ |
| 40.5% | 15.1ms | `SerializeObject(JsonWriter, Object, JsonObjectContract, JsonProperty, JsonContainerContract, JsonProperty)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |
| 22.4% |  8.3ms | `Read(wchar[], int32, int32)`                                                                                | `System.IO.StringReader`                                     |
| 11.2% |  4.2ms | `ToString()`                                                                                                 | `System.Text.StringBuilder`                                  |
|  7.6% |  2.8ms | `AppendWithExpansion(wchar&, int32)`                                                                         | `System.Text.StringBuilder`                                  |
|  7.2% |  2.7ms | `Concat(String, String)`                                                                                     | `System.String`                                              |

##### `Read()` (`Newtonsoft.Json.JsonTextReader`)

|     % |   Time | Caller                                                                                                    | Location                                                     |
| ----: | -----: | --------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| 69.6% | 24.4ms | `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)`                            | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |
| 19.4% |  6.8ms | `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |
| 11.0% |  3.8ms | `ReadForType(JsonContract, bool)`                                                                         | `Newtonsoft.Json.JsonReader`                                 |

##### `ReadStringValue(ReadType)` (`Newtonsoft.Json.JsonTextReader`)

|     % |   Time | Caller                            | Location                         |
| ----: | -----: | --------------------------------- | -------------------------------- |
| 95.8% | 31.0ms | `ReadForType(JsonContract, bool)` | `Newtonsoft.Json.JsonReader`     |
|  4.2% |  1.4ms | `ReadAsString()`                  | `Newtonsoft.Json.JsonTextReader` |

##### `GetValue(Object)` (`Newtonsoft.Json.Serialization.ExpressionValueProvider`)

|     % |   Time | Caller                                                                                                                   | Location                                                     |
| ----: | -----: | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------ |
| 88.0% | 20.4ms | `SerializeObject(JsonWriter, Object, JsonObjectContract, JsonProperty, JsonContainerContract, JsonProperty)`             | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |
| 12.0% |  2.8ms | `CalculatePropertyValues(JsonWriter, Object, JsonContainerContract, JsonProperty, JsonProperty, JsonContract&, Object&)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |

##### `ParseObject()` (`Newtonsoft.Json.JsonTextReader`)

|     % |   Time | Caller                                                                                                    | Location                                                     |
| ----: | -----: | --------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| 75.3% | 16.4ms | `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)`                            | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |
| 18.3% |  4.0ms | `Read()`                                                                                                  | `Newtonsoft.Json.JsonTextReader`                             |
|  6.4% |  1.4ms | `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |

##### `Add(Object)` (``System.Collections.Generic.List`1[System.__Canon].System.Collections.IList``)

|      % |   Time | Caller                                                                     | Location                                                     |
| -----: | -----: | -------------------------------------------------------------------------- | ------------------------------------------------------------ |
| 100.0% | 20.8ms | `PopulateList(IList, JsonReader, JsonArrayContract, JsonProperty, String)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |

##### `IsInstanceOfInterface(void*, Object)` (`System.Runtime.CompilerServices.CastHelpers`)

|     % |   Time | Caller                                                                                                         | Location                                                     |
| ----: | -----: | -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| 78.5% | 14.8ms | `SerializeList(JsonWriter, IEnumerable, JsonArrayContract, JsonProperty, JsonContainerContract, JsonProperty)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |
| 21.5% |  4.1ms | `PopulateList(IList, JsonReader, JsonArrayContract, JsonProperty, String)`                                     | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |

##### `TryGetValueInternal(Tables<!0, !1>, !0, int32, !1&)` (``System.Collections.Concurrent.ConcurrentDictionary`2[System.__Canon,System.__Canon]``)

|     % |  Time | Caller                                                                                                         | Location                                                                                |
| ----: | ----: | -------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| 39.7% | 5.4ms | `SerializeList(JsonWriter, IEnumerable, JsonArrayContract, JsonProperty, JsonContainerContract, JsonProperty)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`                            |
| 39.5% | 5.4ms | `Deserialize(JsonReader, Type, bool)`                                                                          | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader`                            |
| 10.8% | 1.5ms | ``GetOrAdd(!0, Func`2<!0, !1>)``                                                                               | ``System.Collections.Concurrent.ConcurrentDictionary`2[System.__Canon,System.__Canon]`` |
| 10.0% | 1.4ms | `Serialize(JsonWriter, Object, Type)`                                                                          | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`                            |

##### `ChkCastInterface(void*, Object)` (`System.Runtime.CompilerServices.CastHelpers`)

|     % |  Time | Caller                                                                                                | Location                                                     |
| ----: | ----: | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| 59.8% | 8.1ms | `CreateTemporaryCollection()`                                                                         | `Newtonsoft.Json.Serialization.JsonArrayContract`            |
| 40.2% | 5.4ms | `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |

##### `StelemRef(Array, int, Object)` (`System.Runtime.CompilerServices.CastHelpers`)

|     % |  Time | Caller                                                                                                         | Location                                                     |
| ----: | ----: | -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| 59.4% | 8.0ms | `SerializeList(JsonWriter, IEnumerable, JsonArrayContract, JsonProperty, JsonContainerContract, JsonProperty)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |
| 30.6% | 4.1ms | `AddWithResize(!0)`                                                                                            | ``System.Collections.Generic.List`1[System.__Canon]``        |
| 10.1% | 1.3ms | `SerializeObject(JsonWriter, Object, JsonObjectContract, JsonProperty, JsonContainerContract, JsonProperty)`   | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |

##### `FormatDouble(float64, String, NumberFormatInfo)` (`System.Number`)

|     % |  Time | Caller                                                | Location                         |
| ----: | ----: | ----------------------------------------------------- | -------------------------------- |
| 86.8% | 9.6ms | `WriteValue(float64)`                                 | `Newtonsoft.Json.JsonTextWriter` |
| 13.2% | 1.5ms | `ToString(float64, FloatFormatHandling, wchar, bool)` | `Newtonsoft.Json.JsonConvert`    |

##### `IsInstance_Helper(void*, Object)` (`System.Runtime.CompilerServices.CastHelpers`)

|      % |  Time | Caller                                                                                                         | Location                                                     |
| -----: | ----: | -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| 100.0% | 9.6ms | `SerializeList(JsonWriter, IEnumerable, JsonArrayContract, JsonProperty, JsonContainerContract, JsonProperty)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |

##### `Append(wchar&, int32)` (`System.Text.StringBuilder`)

|     % |  Time | Caller        | Location                         |
| ----: | ----: | ------------- | -------------------------------- |
| 79.7% | 5.4ms | `WriteNull()` | `Newtonsoft.Json.JsonTextWriter` |

##### `IndexOf(!!0[], !!0, int32, int32)` (`System.Array`)

|      % |  Time | Caller                                                                                                           | Location                                                     |
| -----: | ----: | ---------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| 100.0% | 4.2ms | `CheckForCircularReference(JsonWriter, Object, JsonProperty, JsonContract, JsonContainerContract, JsonProperty)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |

##### `AddWithResize(!0)` (``System.Collections.Generic.List`1[System.__Canon]``)

|      % |  Time | Caller        | Location                                                                       |
| -----: | ----: | ------------- | ------------------------------------------------------------------------------ |
| 100.0% | 4.1ms | `Add(Object)` | ``System.Collections.Generic.List`1[System.__Canon].System.Collections.IList`` |

##### `AddWithResize(!0)` (``System.Collections.Generic.List`1[Newtonsoft.Json.JsonPosition]``)

|     % |  Time | Caller                                                                                                         | Location                                                     |
| ----: | ----: | -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| 50.8% | 1.4ms | `Push(JsonContainerType)`                                                                                      | `Newtonsoft.Json.JsonReader`                                 |
| 49.2% | 1.4ms | `SerializeList(JsonWriter, IEnumerable, JsonArrayContract, JsonProperty, JsonContainerContract, JsonProperty)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |

##### `NonPackedIndexOfValueType(!!0&, !!0, int32)` (`System.SpanHelpers`)

|      % |  Time | Caller                                | Location                      |
| -----: | ----: | ------------------------------------- | ----------------------------- |
| 100.0% | 2.7ms | `EnsureDecimalPlace(float64, String)` | `Newtonsoft.Json.JsonConvert` |

##### ``TryParseFloat(ReadOnlySpan`1<!!0>, NumberStyles, NumberFormatInfo, !!1&)`` (`System.Number`)

|      % |   Time | Caller                                                      | Location                         |
| -----: | -----: | ----------------------------------------------------------- | -------------------------------- |
| 100.0% |  2.7ms | `ParseReadNumber(ReadType, wchar, int32)`                   | `Newtonsoft.Json.JsonTextReader` |
|  <0.1% | <0.1µs | `TryParse(String, NumberStyles, IFormatProvider, float64&)` | `System.Double`                  |

##### `Write(String)` (`System.IO.StringWriter`)

|      % |  Time | Caller                                                                                                                         | Location                                    |
| -----: | ----: | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------- |
| 100.0% | 1.4ms | ``WriteEscapedJavaScriptString(TextWriter, String, wchar, bool, bool[], StringEscapeHandling, IArrayPool`1<wchar>, wchar[]&)`` | `Newtonsoft.Json.Utilities.JavaScriptUtils` |

##### `ToString()` (`System.Text.StringBuilder`)

|      % |  Time | Caller   | Location          |
| -----: | ----: | -------- | ----------------- |
| 100.0% | 1.3ms | `Main()` | `Profile.Program` |

##### `AppendWithExpansion(wchar&, int32)` (`System.Text.StringBuilder`)

|      % |  Time | Caller        | Location                         |
| -----: | ----: | ------------- | -------------------------------- |
| 100.0% | 1.2ms | `WriteNull()` | `Newtonsoft.Json.JsonTextWriter` |

##### `TryParse(String, NumberStyles, IFormatProvider, float64&)` (`System.Double`)

|      % |   Time | Caller                                    | Location                         |
| -----: | -----: | ----------------------------------------- | -------------------------------- |
| 100.0% | <0.1µs | `ParseReadNumber(ReadType, wchar, int32)` | `Newtonsoft.Json.JsonTextReader` |

### Total time

Functions ranked by total time spent in the function and all its callees.

|     % |    Time | Function                                                                                                         | Location                                                                             |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| 99.7% |   4.72s | `Main()`                                                                                                         | `Profile.Program`                                                                    |
| 79.9% |   3.78s | `DeserializeObject(String, Type, JsonSerializerSettings)`                                                        | `Newtonsoft.Json.JsonConvert`                                                        |
| 79.6% |   3.77s | `DeserializeInternal(JsonReader, Type)`                                                                          | `Newtonsoft.Json.JsonSerializer`                                                     |
| 79.3% |   3.75s | `Deserialize(JsonReader, Type, bool)`                                                                            | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader`                         |
| 78.6% |   3.72s | `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader`                         |
| 78.5% |   3.71s | `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)`        | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader`                         |
| 78.0% |   3.69s | `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)`                                   | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader`                         |
| 46.1% |   2.18s | `ReadForType(JsonContract, bool)`                                                                                | `Newtonsoft.Json.JsonReader`                                                         |
| 45.9% |   2.17s | `CreateList(JsonReader, Type, JsonContract, JsonProperty, Object, String)`                                       | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader`                         |
| 35.9% |   1.70s | `PopulateList(IList, JsonReader, JsonArrayContract, JsonProperty, String)`                                       | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader`                         |
| 19.5% | 925.9ms | `SerializeObjectInternal(Object, Type, JsonSerializer)`                                                          | `Newtonsoft.Json.JsonConvert`                                                        |
| 19.0% | 899.6ms | `SerializeInternal(JsonWriter, Object, Type)`                                                                    | `Newtonsoft.Json.JsonSerializer`                                                     |
| 18.9% | 896.9ms | `Serialize(JsonWriter, Object, Type)`                                                                            | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`                         |
| 18.2% | 864.3ms | `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)`            | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`                         |
| 18.2% | 863.0ms | `SerializeObject(JsonWriter, Object, JsonObjectContract, JsonProperty, JsonContainerContract, JsonProperty)`     | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`                         |
| 16.6% | 786.0ms | `CopyTo(Array, int32)`                                                                                           | ``System.Collections.Generic.List`1[System.__Canon].System.Collections.ICollection`` |
| 13.8% | 652.9ms | `SerializeList(JsonWriter, IEnumerable, JsonArrayContract, JsonProperty, JsonContainerContract, JsonProperty)`   | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`                         |
|  7.0% | 332.2ms | `Deserialize(JsonReader, Type)`                                                                                  | `Newtonsoft.Json.JsonSerializer`                                                     |
|  4.9% | 231.1ms | `ReadNumberValue(ReadType)`                                                                                      | `Newtonsoft.Json.JsonTextReader`                                                     |
|  4.7% | 223.7ms | `ParseObject()`                                                                                                  | `Newtonsoft.Json.JsonTextReader`                                                     |

#### Categories

##### Ours

|     % |    Time | Function                                                                                                         | Location                                                     |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| 99.7% |   4.72s | `Main()`                                                                                                         | `Profile.Program`                                            |
| 79.9% |   3.78s | `DeserializeObject(String, Type, JsonSerializerSettings)`                                                        | `Newtonsoft.Json.JsonConvert`                                |
| 79.6% |   3.77s | `DeserializeInternal(JsonReader, Type)`                                                                          | `Newtonsoft.Json.JsonSerializer`                             |
| 79.3% |   3.75s | `Deserialize(JsonReader, Type, bool)`                                                                            | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |
| 78.6% |   3.72s | `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |
| 78.5% |   3.71s | `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)`        | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |
| 78.0% |   3.69s | `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)`                                   | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |
| 46.1% |   2.18s | `ReadForType(JsonContract, bool)`                                                                                | `Newtonsoft.Json.JsonReader`                                 |
| 45.9% |   2.17s | `CreateList(JsonReader, Type, JsonContract, JsonProperty, Object, String)`                                       | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |
| 35.9% |   1.70s | `PopulateList(IList, JsonReader, JsonArrayContract, JsonProperty, String)`                                       | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |
| 19.5% | 925.9ms | `SerializeObjectInternal(Object, Type, JsonSerializer)`                                                          | `Newtonsoft.Json.JsonConvert`                                |
| 19.0% | 899.6ms | `SerializeInternal(JsonWriter, Object, Type)`                                                                    | `Newtonsoft.Json.JsonSerializer`                             |
| 18.9% | 896.9ms | `Serialize(JsonWriter, Object, Type)`                                                                            | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |
| 18.2% | 864.3ms | `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)`            | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |
| 18.2% | 863.0ms | `SerializeObject(JsonWriter, Object, JsonObjectContract, JsonProperty, JsonContainerContract, JsonProperty)`     | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |
| 13.8% | 652.9ms | `SerializeList(JsonWriter, IEnumerable, JsonArrayContract, JsonProperty, JsonContainerContract, JsonProperty)`   | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |
|  7.0% | 332.2ms | `Deserialize(JsonReader, Type)`                                                                                  | `Newtonsoft.Json.JsonSerializer`                             |
|  4.9% | 231.1ms | `ReadNumberValue(ReadType)`                                                                                      | `Newtonsoft.Json.JsonTextReader`                             |
|  4.7% | 223.7ms | `ParseObject()`                                                                                                  | `Newtonsoft.Json.JsonTextReader`                             |
|  4.6% | 218.1ms | `DeserializeObject(String, JsonSerializerSettings)`                                                              | `Newtonsoft.Json.JsonConvert`                                |

##### Standard library

|     % |    Time | Function                                                                     | Location                                                                                                                                           |
| ----: | ------: | ---------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| 16.6% | 786.0ms | `CopyTo(Array, int32)`                                                       | ``System.Collections.Generic.List`1[System.__Canon].System.Collections.ICollection``                                                               |
|  1.2% |  57.1ms | ``TryParseFloat(ReadOnlySpan`1<!!0>, NumberStyles, NumberFormatInfo, !!1&)`` | `System.Number`                                                                                                                                    |
|  1.2% |  54.7ms | `FindValue(!0)`                                                              | ``System.Collections.Generic.Dictionary`2[System.__Canon,System.__Canon]``                                                                         |
|  1.1% |  53.6ms | `FormatDouble(float64, String, NumberFormatInfo)`                            | `System.Number`                                                                                                                                    |
|  0.8% |  37.2ms | `Memmove(unsigned int8&, unsigned int8&, unsigned int)`                      | `System.Buffer`                                                                                                                                    |
|  0.6% |  27.6ms | `Add(Object)`                                                                | ``System.Collections.Generic.List`1[System.__Canon].System.Collections.IList``                                                                     |
|  0.6% |  27.1ms | ``GetOrAdd(!0, Func`2<!0, !1>)``                                             | ``System.Collections.Concurrent.ConcurrentDictionary`2[System.__Canon,System.__Canon]``                                                            |
|  0.5% |  21.8ms | `IndexOf(!!0[], !!0, int32, int32)`                                          | `System.Array`                                                                                                                                     |
|  0.4% |  18.9ms | `IsInstanceOfInterface(void*, Object)`                                       | `System.Runtime.CompilerServices.CastHelpers`                                                                                                      |
|  0.3% |  13.7ms | `TryGetValueInternal(Tables<!0, !1>, !0, int32, !1&)`                        | ``System.Collections.Concurrent.ConcurrentDictionary`2[System.__Canon,System.__Canon]``                                                            |
|  0.3% |  13.5ms | `ChkCastInterface(void*, Object)`                                            | `System.Runtime.CompilerServices.CastHelpers`                                                                                                      |
|  0.3% |  13.4ms | `StelemRef(Array, int, Object)`                                              | `System.Runtime.CompilerServices.CastHelpers`                                                                                                      |
|  0.2% |   9.7ms | `Read(wchar[], int32, int32)`                                                | `System.IO.StringReader`                                                                                                                           |
|  0.2% |   9.6ms | `IsInstance_Helper(void*, Object)`                                           | `System.Runtime.CompilerServices.CastHelpers`                                                                                                      |
|  0.2% |   8.2ms | `AddWithResize(!0)`                                                          | ``System.Collections.Generic.List`1[System.__Canon]``                                                                                              |
|  0.1% |   6.9ms | `ToString()`                                                                 | `System.Text.StringBuilder`                                                                                                                        |
|  0.1% |   6.8ms | `Append(wchar&, int32)`                                                      | `System.Text.StringBuilder`                                                                                                                        |
|  0.1% |   6.8ms | `Compile(LambdaExpression)`                                                  | `System.Linq.Expressions.Compiler.LambdaCompiler`                                                                                                  |
|  0.1% |   5.4ms | ``GetOrAdd(!0, Func`2<!0, !1>)``                                             | ``System.Collections.Concurrent.ConcurrentDictionary`2[Newtonsoft.Json.Utilities.StructMultiKey`2[System.__Canon,System.__Canon],System.__Canon]`` |
|  0.1% |   4.2ms | `Write(String)`                                                              | `System.IO.StringWriter`                                                                                                                           |

##### Native

|    % |    Time | Function              | Location    |
| ---: | ------: | --------------------- | ----------- |
| 2.4% | 113.0ms | `UNMANAGED_CODE_TIME` | `<unknown>` |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `Main()` (`Profile.Program`)

|     % |    Time | Callee                                                    | Location                      |
| ----: | ------: | --------------------------------------------------------- | ----------------------------- |
| 75.5% |   3.56s | `DeserializeObject(String, Type, JsonSerializerSettings)` | `Newtonsoft.Json.JsonConvert` |
| 17.8% | 840.2ms | `SerializeObjectInternal(Object, Type, JsonSerializer)`   | `Newtonsoft.Json.JsonConvert` |
|  4.6% | 218.1ms | `DeserializeObject(String)`                               | `Newtonsoft.Json.JsonConvert` |
|  1.9% |  88.4ms | `SerializeObject(Object)`                                 | `Newtonsoft.Json.JsonConvert` |
|  0.1% |   6.9ms | `ToString()`                                              | `System.Text.StringBuilder`   |

##### `DeserializeObject(String, Type, JsonSerializerSettings)` (`Newtonsoft.Json.JsonConvert`)

|     % |    Time | Callee                                  | Location                         |
| ----: | ------: | --------------------------------------- | -------------------------------- |
| 90.9% |   3.44s | `DeserializeInternal(JsonReader, Type)` | `Newtonsoft.Json.JsonSerializer` |
|  8.8% | 332.2ms | `Deserialize(JsonReader, Type)`         | `Newtonsoft.Json.JsonSerializer` |
|  0.2% |   6.3ms | `UNMANAGED_CODE_TIME`                   | `<unknown>`                      |

##### `DeserializeInternal(JsonReader, Type)` (`Newtonsoft.Json.JsonSerializer`)

|     % |  Time | Callee                                                                                                                                                               | Location                                                     |
| ----: | ----: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| 99.6% | 3.75s | `Deserialize(JsonReader, Type, bool)`                                                                                                                                | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |
|  0.1% | 2.7ms | `.ctor(JsonSerializer)`                                                                                                                                              | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |
| <0.1% | 1.4ms | ``ResetReader(JsonReader, CultureInfo, Nullable`1<DateTimeZoneHandling>, Nullable`1<DateParseHandling>, Nullable`1<FloatParseHandling>, Nullable`1<int32>, String)`` | `Newtonsoft.Json.JsonSerializer`                             |

##### `Deserialize(JsonReader, Type, bool)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`)

|     % |   Time | Callee                                                                                                           | Location                                                                                |
| ----: | -----: | ---------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| 99.0% |  3.72s | `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader`                            |
|  0.6% | 22.1ms | `ReadForType(JsonContract, bool)`                                                                                | `Newtonsoft.Json.JsonReader`                                                            |
|  0.1% |  5.4ms | `TryGetValueInternal(Tables<!0, !1>, !0, int32, !1&)`                                                            | ``System.Collections.Concurrent.ConcurrentDictionary`2[System.__Canon,System.__Canon]`` |
| <0.1% |  1.4ms | `GetContractSafe(Type)`                                                                                          | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader`                            |
| <0.1% |  1.4ms | `Read()`                                                                                                         | `Newtonsoft.Json.JsonTextReader`                                                        |

##### `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`)

|     % |  Time | Callee                                                                                                    | Location                                                     |
| ----: | ----: | --------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| 99.9% | 3.71s | `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |
| 58.5% | 2.17s | `CreateList(JsonReader, Type, JsonContract, JsonProperty, Object, String)`                                | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |
|  0.2% | 8.3ms | `EnsureType(JsonReader, Object, CultureInfo, JsonContract, Type)`                                         | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |
| <0.1% | 1.4ms | `CoerceEmptyStringToNull(Type, JsonContract, String)`                                                     | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |
| <0.1% | 1.3ms | `UNMANAGED_CODE_TIME`                                                                                     | `<unknown>`                                                  |

##### `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`)

|     % |   Time | Callee                                                                         | Location                                                     |
| ----: | -----: | ------------------------------------------------------------------------------ | ------------------------------------------------------------ |
| 99.4% |  3.69s | `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |
|  1.0% | 35.5ms | `ParseObject()`                                                                | `Newtonsoft.Json.JsonTextReader`                             |
|  0.2% |  8.2ms | `ReadAndAssert()`                                                              | `Newtonsoft.Json.JsonReader`                                 |
|  0.2% |  6.8ms | `Read()`                                                                       | `Newtonsoft.Json.JsonTextReader`                             |
|  0.1% |  4.1ms | `Node()`                                                                       | `dynamicClass.CreateProfile`                                 |

##### `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`)

|     % |    Time | Callee                                                                                                           | Location                                                     |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| 54.8% |   2.02s | `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |
| 54.1% |   1.99s | `ReadForType(JsonContract, bool)`                                                                                | `Newtonsoft.Json.JsonReader`                                 |
|  4.6% | 171.9ms | `ParseObject()`                                                                                                  | `Newtonsoft.Json.JsonTextReader`                             |
|  4.3% | 158.2ms | `SetPropertyValue(JsonProperty, JsonConverter, JsonContainerContract, JsonProperty, JsonReader, Object)`         | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |
|  1.8% |  67.9ms | `Read()`                                                                                                         | `Newtonsoft.Json.JsonTextReader`                             |

##### `ReadForType(JsonContract, bool)` (`Newtonsoft.Json.JsonReader`)

|     % |    Time | Callee                      | Location                         |
| ----: | ------: | --------------------------- | -------------------------------- |
| 10.3% | 224.3ms | `ReadNumberValue(ReadType)` | `Newtonsoft.Json.JsonTextReader` |
|  7.9% | 173.8ms | `ReadStringValue(ReadType)` | `Newtonsoft.Json.JsonTextReader` |
|  4.4% |  95.7ms | `ReadAsInt32()`             | `Newtonsoft.Json.JsonTextReader` |
|  4.1% |  90.4ms | `ParseValue()`              | `Newtonsoft.Json.JsonTextReader` |
|  1.1% |  23.5ms | `ReadAsDouble()`            | `Newtonsoft.Json.JsonTextReader` |

##### `CreateList(JsonReader, Type, JsonContract, JsonProperty, Object, String)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`)

|     % |    Time | Callee                                                                     | Location                                                                             |
| ----: | ------: | -------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| 78.2% |   1.70s | `PopulateList(IList, JsonReader, JsonArrayContract, JsonProperty, String)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader`                         |
| 36.1% | 786.0ms | `CopyTo(Array, int32)`                                                     | ``System.Collections.Generic.List`1[System.__Canon].System.Collections.ICollection`` |
|  0.8% |  16.9ms | `CreateNewList(JsonReader, JsonArrayContract, bool&)`                      | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader`                         |

##### `PopulateList(IList, JsonReader, JsonArrayContract, JsonProperty, String)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`)

|     % |    Time | Callee                                                                                                           | Location                                                                       |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| 89.0% |   1.51s | `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader`                   |
|  9.7% | 164.5ms | `ReadForType(JsonContract, bool)`                                                                                | `Newtonsoft.Json.JsonReader`                                                   |
|  1.6% |  27.6ms | `Add(Object)`                                                                                                    | ``System.Collections.Generic.List`1[System.__Canon].System.Collections.IList`` |
|  0.2% |   4.1ms | `IsInstanceOfInterface(void*, Object)`                                                                           | `System.Runtime.CompilerServices.CastHelpers`                                  |
|  0.2% |   2.6ms | `OnDeserializing(JsonReader, JsonContract, Object)`                                                              | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader`                   |

##### `SerializeObjectInternal(Object, Type, JsonSerializer)` (`Newtonsoft.Json.JsonConvert`)

|     % |    Time | Callee                                        | Location                         |
| ----: | ------: | --------------------------------------------- | -------------------------------- |
| 87.3% | 808.0ms | `SerializeInternal(JsonWriter, Object, Type)` | `Newtonsoft.Json.JsonSerializer` |
| 10.0% |  92.9ms | `Serialize(JsonWriter, Object, Type)`         | `Newtonsoft.Json.JsonSerializer` |
|  1.0% |   9.5ms | `.ctor(TextWriter)`                           | `Newtonsoft.Json.JsonTextWriter` |
|  0.8% |   6.9ms | `UNMANAGED_CODE_TIME`                         | `<unknown>`                      |

##### `SerializeInternal(JsonWriter, Object, Type)` (`Newtonsoft.Json.JsonSerializer`)

|     % |    Time | Callee                                | Location                                                     |
| ----: | ------: | ------------------------------------- | ------------------------------------------------------------ |
| 99.7% | 896.9ms | `Serialize(JsonWriter, Object, Type)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |
|  0.2% |   1.4ms | `UNMANAGED_CODE_TIME`                 | `<unknown>`                                                  |

##### `Serialize(JsonWriter, Object, Type)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`)

|     % |    Time | Callee                                                                                                | Location                                                                                |
| ----: | ------: | ----------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| 96.4% | 864.3ms | `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`                            |
|  2.6% |  23.0ms | `GetContractSafe(Object)`                                                                             | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`                            |
|  0.2% |   1.4ms | `TryGetValueInternal(Tables<!0, !1>, !0, int32, !1&)`                                                 | ``System.Collections.Concurrent.ConcurrentDictionary`2[System.__Canon,System.__Canon]`` |
|  0.1% |   1.3ms | `UNMANAGED_CODE_TIME`                                                                                 | `<unknown>`                                                                             |

##### `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`)

|     % |    Time | Callee                                                                                                             | Location                                                     |
| ----: | ------: | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------ |
| 99.8% | 863.0ms | `SerializeObject(JsonWriter, Object, JsonObjectContract, JsonProperty, JsonContainerContract, JsonProperty)`       | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |
| 75.5% | 652.9ms | `SerializeList(JsonWriter, IEnumerable, JsonArrayContract, JsonProperty, JsonContainerContract, JsonProperty)`     | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |
| 20.2% | 174.9ms | `WriteValue(JsonWriter, PrimitiveTypeCode, Object)`                                                                | `Newtonsoft.Json.JsonWriter`                                 |
|  2.3% |  19.5ms | `SerializePrimitive(JsonWriter, Object, JsonPrimitiveContract, JsonProperty, JsonContainerContract, JsonProperty)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |
|  2.2% |  19.0ms | `WriteNull()`                                                                                                      | `Newtonsoft.Json.JsonTextWriter`                             |

##### `SerializeObject(JsonWriter, Object, JsonObjectContract, JsonProperty, JsonContainerContract, JsonProperty)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`)

|     % |    Time | Callee                                                                                                                   | Location                                                     |
| ----: | ------: | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------ |
| 86.6% | 747.0ms | `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)`                    | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |
|  2.4% |  20.4ms | `GetValue(Object)`                                                                                                       | `Newtonsoft.Json.Serialization.ExpressionValueProvider`      |
|  2.0% |  17.7ms | `CalculatePropertyValues(JsonWriter, Object, JsonContainerContract, JsonProperty, JsonProperty, JsonContract&, Object&)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |
|  1.9% |  16.3ms | `CheckForCircularReference(JsonWriter, Object, JsonProperty, JsonContract, JsonContainerContract, JsonProperty)`         | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |
|  1.7% |  15.1ms | `Memmove(unsigned int8&, unsigned int8&, unsigned int)`                                                                  | `System.Buffer`                                              |

##### `SerializeList(JsonWriter, IEnumerable, JsonArrayContract, JsonProperty, JsonContainerContract, JsonProperty)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`)

|     % |    Time | Callee                                                                                                           | Location                                                     |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| 79.5% | 518.8ms | `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)`            | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |
|  2.3% |  14.8ms | `IsInstanceOfInterface(void*, Object)`                                                                           | `System.Runtime.CompilerServices.CastHelpers`                |
|  2.1% |  13.7ms | `CheckForCircularReference(JsonWriter, Object, JsonProperty, JsonContract, JsonContainerContract, JsonProperty)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |
|  1.5% |   9.6ms | `IsInstance_Helper(void*, Object)`                                                                               | `System.Runtime.CompilerServices.CastHelpers`                |
|  1.2% |   8.0ms | `StelemRef(Array, int, Object)`                                                                                  | `System.Runtime.CompilerServices.CastHelpers`                |

##### `Deserialize(JsonReader, Type)` (`Newtonsoft.Json.JsonSerializer`)

|     % |    Time | Callee                                  | Location                         |
| ----: | ------: | --------------------------------------- | -------------------------------- |
| 99.6% | 330.9ms | `DeserializeInternal(JsonReader, Type)` | `Newtonsoft.Json.JsonSerializer` |
|  0.4% |   1.3ms | `UNMANAGED_CODE_TIME`                   | `<unknown>`                      |

##### `ReadNumberValue(ReadType)` (`Newtonsoft.Json.JsonTextReader`)

|     % |    Time | Callee                                    | Location                         |
| ----: | ------: | ----------------------------------------- | -------------------------------- |
| 57.8% | 133.7ms | `ParseReadNumber(ReadType, wchar, int32)` | `Newtonsoft.Json.JsonTextReader` |
|  2.9% |   6.8ms | `ParseNumber(ReadType)`                   | `Newtonsoft.Json.JsonTextReader` |

##### `ParseObject()` (`Newtonsoft.Json.JsonTextReader`)

|     % |    Time | Callee            | Location                         |
| ----: | ------: | ----------------- | -------------------------------- |
| 90.3% | 201.9ms | `ParseProperty()` | `Newtonsoft.Json.JsonTextReader` |

##### `DeserializeObject(String, JsonSerializerSettings)` (`Newtonsoft.Json.JsonConvert`)

|      % |    Time | Callee                                                    | Location                      |
| -----: | ------: | --------------------------------------------------------- | ----------------------------- |
| 100.0% | 218.1ms | `DeserializeObject(String, Type, JsonSerializerSettings)` | `Newtonsoft.Json.JsonConvert` |

##### `Add(Object)` (``System.Collections.Generic.List`1[System.__Canon].System.Collections.IList``)

|     % |  Time | Callee              | Location                                              |
| ----: | ----: | ------------------- | ----------------------------------------------------- |
| 24.6% | 6.8ms | `AddWithResize(!0)` | ``System.Collections.Generic.List`1[System.__Canon]`` |

##### ``GetOrAdd(!0, Func`2<!0, !1>)`` (``System.Collections.Concurrent.ConcurrentDictionary`2[System.__Canon,System.__Canon]``)

|     % |   Time | Callee                                                | Location                                                                                |
| ----: | -----: | ----------------------------------------------------- | --------------------------------------------------------------------------------------- |
| 84.8% | 23.0ms | `CreateContract(Type)`                                | `Newtonsoft.Json.Serialization.DefaultContractResolver`                                 |
|  9.9% |  2.7ms | `GetAttribute(Object)`                                | `Newtonsoft.Json.Serialization.JsonTypeReflector`                                       |
|  9.7% |  2.6ms | `UNMANAGED_CODE_TIME`                                 | `<unknown>`                                                                             |
|  5.4% |  1.5ms | `TryGetValueInternal(Tables<!0, !1>, !0, int32, !1&)` | ``System.Collections.Concurrent.ConcurrentDictionary`2[System.__Canon,System.__Canon]`` |

##### `Read(wchar[], int32, int32)` (`System.IO.StringReader`)

|     % |  Time | Callee                                                  | Location        |
| ----: | ----: | ------------------------------------------------------- | --------------- |
| 86.0% | 8.3ms | `Memmove(unsigned int8&, unsigned int8&, unsigned int)` | `System.Buffer` |

##### `AddWithResize(!0)` (``System.Collections.Generic.List`1[System.__Canon]``)

|     % |  Time | Callee                          | Location                                      |
| ----: | ----: | ------------------------------- | --------------------------------------------- |
| 50.2% | 4.1ms | `StelemRef(Array, int, Object)` | `System.Runtime.CompilerServices.CastHelpers` |

##### `ToString()` (`System.Text.StringBuilder`)

|     % |  Time | Callee                                                  | Location        |
| ----: | ----: | ------------------------------------------------------- | --------------- |
| 60.5% | 4.2ms | `Memmove(unsigned int8&, unsigned int8&, unsigned int)` | `System.Buffer` |
| 19.9% | 1.4ms | `UNMANAGED_CODE_TIME`                                   | `<unknown>`     |

##### ``GetOrAdd(!0, Func`2<!0, !1>)`` (``System.Collections.Concurrent.ConcurrentDictionary`2[Newtonsoft.Json.Utilities.StructMultiKey`2[System.__Canon,System.__Canon],System.__Canon]``)

|      % |  Time | Callee                                                               | Location                              |
| -----: | ----: | -------------------------------------------------------------------- | ------------------------------------- |
| 100.0% | 5.4ms | ``InitializeValuesAndNames(StructMultiKey`2<Type, NamingStrategy>)`` | `Newtonsoft.Json.Utilities.EnumUtils` |

##### `Write(String)` (`System.IO.StringWriter`)

|     % |  Time | Callee                                                  | Location        |
| ----: | ----: | ------------------------------------------------------- | --------------- |
| 33.9% | 1.4ms | `Memmove(unsigned int8&, unsigned int8&, unsigned int)` | `System.Buffer` |

## Hottest call stacks

Call stacks ranked by time spent in their leaf frame.

Common call stack: `Main()` (`Profile.Program`)

|     % |    Time | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 21.6% |   1.02s | `ReadForType(JsonContract, bool)` (`Newtonsoft.Json.JsonReader`) ← `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`) ← `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `Deserialize(JsonReader, Type, bool)` ← `DeserializeInternal(JsonReader, Type)` (`Newtonsoft.Json.JsonSerializer`) ← `DeserializeObject(String, Type, JsonSerializerSettings)` (`Newtonsoft.Json.JsonConvert`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 10.0% | 473.8ms | `ReadForType(JsonContract, bool)` (`Newtonsoft.Json.JsonReader`) ← `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`) ← `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `PopulateList(IList, JsonReader, JsonArrayContract, JsonProperty, String)` ← `CreateList(JsonReader, Type, JsonContract, JsonProperty, Object, String)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` ← `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `Deserialize(JsonReader, Type, bool)` ← `DeserializeInternal(JsonReader, Type)` (`Newtonsoft.Json.JsonSerializer`) ← `DeserializeObject(String, Type, JsonSerializerSettings)` (`Newtonsoft.Json.JsonConvert`)                                                                                                                                                                                                                                              |
|  9.0% | 425.4ms | `CopyTo(Array, int32)` (``System.Collections.Generic.List`1[System.__Canon].System.Collections.ICollection``) ← `CreateList(JsonReader, Type, JsonContract, JsonProperty, Object, String)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`) ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` ← `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `Deserialize(JsonReader, Type, bool)` ← `DeserializeInternal(JsonReader, Type)` (`Newtonsoft.Json.JsonSerializer`) ← `DeserializeObject(String, Type, JsonSerializerSettings)` (`Newtonsoft.Json.JsonConvert`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  6.3% | 296.5ms | `CopyTo(Array, int32)` (``System.Collections.Generic.List`1[System.__Canon].System.Collections.ICollection``) ← `CreateList(JsonReader, Type, JsonContract, JsonProperty, Object, String)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`) ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` ← `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `PopulateList(IList, JsonReader, JsonArrayContract, JsonProperty, String)` ← `CreateList(JsonReader, Type, JsonContract, JsonProperty, Object, String)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` ← `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `Deserialize(JsonReader, Type, bool)` ← `DeserializeInternal(JsonReader, Type)` (`Newtonsoft.Json.JsonSerializer`) ← `DeserializeObject(String, Type, JsonSerializerSettings)` (`Newtonsoft.Json.JsonConvert`) |
|  4.2% | 201.2ms | `SerializeObject(JsonWriter, Object, JsonObjectContract, JsonProperty, JsonContainerContract, JsonProperty)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`) ← `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)` ← `SerializeList(JsonWriter, IEnumerable, JsonArrayContract, JsonProperty, JsonContainerContract, JsonProperty)` ← `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)` ← `SerializeObject(JsonWriter, Object, JsonObjectContract, JsonProperty, JsonContainerContract, JsonProperty)` ← `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)` ← `Serialize(JsonWriter, Object, Type)` ← `SerializeInternal(JsonWriter, Object, Type)` (`Newtonsoft.Json.JsonSerializer`) ← `SerializeObjectInternal(Object, Type, JsonSerializer)` (`Newtonsoft.Json.JsonConvert`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  2.6% | 123.8ms | `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`) ← `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `PopulateList(IList, JsonReader, JsonArrayContract, JsonProperty, String)` ← `CreateList(JsonReader, Type, JsonContract, JsonProperty, Object, String)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` ← `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `Deserialize(JsonReader, Type, bool)` ← `DeserializeInternal(JsonReader, Type)` (`Newtonsoft.Json.JsonSerializer`) ← `DeserializeObject(String, Type, JsonSerializerSettings)` (`Newtonsoft.Json.JsonConvert`)                                                                                                                                                                                                                                                                                                                 |
|  1.8% |  86.6ms | `SerializeList(JsonWriter, IEnumerable, JsonArrayContract, JsonProperty, JsonContainerContract, JsonProperty)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`) ← `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)` ← `SerializeObject(JsonWriter, Object, JsonObjectContract, JsonProperty, JsonContainerContract, JsonProperty)` ← `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)` ← `Serialize(JsonWriter, Object, Type)` ← `SerializeInternal(JsonWriter, Object, Type)` (`Newtonsoft.Json.JsonSerializer`) ← `SerializeObjectInternal(Object, Type, JsonSerializer)` (`Newtonsoft.Json.JsonConvert`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  1.8% |  86.0ms | `SerializeObject(JsonWriter, Object, JsonObjectContract, JsonProperty, JsonContainerContract, JsonProperty)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`) ← `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)` ← `Serialize(JsonWriter, Object, Type)` ← `SerializeInternal(JsonWriter, Object, Type)` (`Newtonsoft.Json.JsonSerializer`) ← `SerializeObjectInternal(Object, Type, JsonSerializer)` (`Newtonsoft.Json.JsonConvert`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  1.6% |  76.3ms | `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`) ← `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `Deserialize(JsonReader, Type, bool)` ← `DeserializeInternal(JsonReader, Type)` (`Newtonsoft.Json.JsonSerializer`) ← `DeserializeObject(String, Type, JsonSerializerSettings)` (`Newtonsoft.Json.JsonConvert`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  1.2% |  58.1ms | `SerializeList(JsonWriter, IEnumerable, JsonArrayContract, JsonProperty, JsonContainerContract, JsonProperty)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`) ← `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)` ← `SerializeObject(JsonWriter, Object, JsonObjectContract, JsonProperty, JsonContainerContract, JsonProperty)` ← `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)` ← `SerializeList(JsonWriter, IEnumerable, JsonArrayContract, JsonProperty, JsonContainerContract, JsonProperty)` ← `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)` ← `SerializeObject(JsonWriter, Object, JsonObjectContract, JsonProperty, JsonContainerContract, JsonProperty)` ← `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)` ← `Serialize(JsonWriter, Object, Type)` ← `SerializeInternal(JsonWriter, Object, Type)` (`Newtonsoft.Json.JsonSerializer`) ← `SerializeObjectInternal(Object, Type, JsonSerializer)` (`Newtonsoft.Json.JsonConvert`)                                                                                                                                                                                                                                                                                                                          |
|  1.2% |  57.9ms | `ReadNumberValue(ReadType)` (`Newtonsoft.Json.JsonTextReader`) ← `ReadForType(JsonContract, bool)` (`Newtonsoft.Json.JsonReader`) ← `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`) ← `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `Deserialize(JsonReader, Type, bool)` ← `DeserializeInternal(JsonReader, Type)` (`Newtonsoft.Json.JsonSerializer`) ← `DeserializeObject(String, Type, JsonSerializerSettings)` (`Newtonsoft.Json.JsonConvert`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  1.2% |  55.7ms | `ParseProperty()` (`Newtonsoft.Json.JsonTextReader`) ← `ParseObject()` ← `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`) ← `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `PopulateList(IList, JsonReader, JsonArrayContract, JsonProperty, String)` ← `CreateList(JsonReader, Type, JsonContract, JsonProperty, Object, String)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` ← `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `Deserialize(JsonReader, Type, bool)` ← `DeserializeInternal(JsonReader, Type)` (`Newtonsoft.Json.JsonSerializer`) ← `DeserializeObject(String, Type, JsonSerializerSettings)` (`Newtonsoft.Json.JsonConvert`)                                                                                                                                                                                                                                        |
|  1.1% |  54.5ms | `PopulateList(IList, JsonReader, JsonArrayContract, JsonProperty, String)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`) ← `CreateList(JsonReader, Type, JsonContract, JsonProperty, Object, String)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` ← `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `Deserialize(JsonReader, Type, bool)` ← `DeserializeInternal(JsonReader, Type)` (`Newtonsoft.Json.JsonSerializer`) ← `DeserializeObject(String, Type, JsonSerializerSettings)` (`Newtonsoft.Json.JsonConvert`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  1.1% |  50.4ms | `ReadAsInt32()` (`Newtonsoft.Json.JsonTextReader`) ← `ReadForType(JsonContract, bool)` (`Newtonsoft.Json.JsonReader`) ← `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`) ← `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `Deserialize(JsonReader, Type, bool)` ← `DeserializeInternal(JsonReader, Type)` (`Newtonsoft.Json.JsonSerializer`) ← `Deserialize(JsonReader, Type)` ← `DeserializeObject(String, Type, JsonSerializerSettings)` (`Newtonsoft.Json.JsonConvert`) ← `DeserializeObject(String, JsonSerializerSettings)` ← `DeserializeObject(String)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  1.0% |  46.5ms | `ParseReadNumber(ReadType, wchar, int32)` (`Newtonsoft.Json.JsonTextReader`) ← `ReadNumberValue(ReadType)` ← `ReadForType(JsonContract, bool)` (`Newtonsoft.Json.JsonReader`) ← `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`) ← `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `PopulateList(IList, JsonReader, JsonArrayContract, JsonProperty, String)` ← `CreateList(JsonReader, Type, JsonContract, JsonProperty, Object, String)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` ← `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `Deserialize(JsonReader, Type, bool)` ← `DeserializeInternal(JsonReader, Type)` (`Newtonsoft.Json.JsonSerializer`) ← `DeserializeObject(String, Type, JsonSerializerSettings)` (`Newtonsoft.Json.JsonConvert`)                                                                                                                                 |
|  0.9% |  41.1ms | `FormatDouble(float64, String, NumberFormatInfo)` (`System.Number`) ← `WriteValue(float64)` (`Newtonsoft.Json.JsonTextWriter`) ← `WriteValue(JsonWriter, PrimitiveTypeCode, Object)` (`Newtonsoft.Json.JsonWriter`) ← `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`) ← `SerializeObject(JsonWriter, Object, JsonObjectContract, JsonProperty, JsonContainerContract, JsonProperty)` ← `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)` ← `Serialize(JsonWriter, Object, Type)` ← `SerializeInternal(JsonWriter, Object, Type)` (`Newtonsoft.Json.JsonSerializer`) ← `SerializeObjectInternal(Object, Type, JsonSerializer)` (`Newtonsoft.Json.JsonConvert`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  0.8% |  38.4ms | `PopulateList(IList, JsonReader, JsonArrayContract, JsonProperty, String)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`) ← `CreateList(JsonReader, Type, JsonContract, JsonProperty, Object, String)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` ← `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `PopulateList(IList, JsonReader, JsonArrayContract, JsonProperty, String)` ← `CreateList(JsonReader, Type, JsonContract, JsonProperty, Object, String)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` ← `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `Deserialize(JsonReader, Type, bool)` ← `DeserializeInternal(JsonReader, Type)` (`Newtonsoft.Json.JsonSerializer`) ← `DeserializeObject(String, Type, JsonSerializerSettings)` (`Newtonsoft.Json.JsonConvert`)                                    |
|  0.8% |  38.0ms | `ReadStringIntoBuffer(wchar)` (`Newtonsoft.Json.JsonTextReader`) ← `ReadStringValue(ReadType)` ← `ReadForType(JsonContract, bool)` (`Newtonsoft.Json.JsonReader`) ← `PopulateList(IList, JsonReader, JsonArrayContract, JsonProperty, String)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`) ← `CreateList(JsonReader, Type, JsonContract, JsonProperty, Object, String)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` ← `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `Deserialize(JsonReader, Type, bool)` ← `DeserializeInternal(JsonReader, Type)` (`Newtonsoft.Json.JsonSerializer`) ← `DeserializeObject(String, Type, JsonSerializerSettings)` (`Newtonsoft.Json.JsonConvert`)                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  0.8% |  36.8ms | `ParseValue()` (`Newtonsoft.Json.JsonTextReader`) ← `ReadForType(JsonContract, bool)` (`Newtonsoft.Json.JsonReader`) ← `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`) ← `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `Deserialize(JsonReader, Type, bool)` ← `DeserializeInternal(JsonReader, Type)` (`Newtonsoft.Json.JsonSerializer`) ← `DeserializeObject(String, Type, JsonSerializerSettings)` (`Newtonsoft.Json.JsonConvert`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  0.8% |  35.7ms | `ReadForType(JsonContract, bool)` (`Newtonsoft.Json.JsonReader`) ← `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`) ← `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `Deserialize(JsonReader, Type, bool)` ← `DeserializeInternal(JsonReader, Type)` (`Newtonsoft.Json.JsonSerializer`) ← `Deserialize(JsonReader, Type)` ← `DeserializeObject(String, Type, JsonSerializerSettings)` (`Newtonsoft.Json.JsonConvert`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |

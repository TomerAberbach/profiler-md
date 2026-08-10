# Sampling profile

Took 4.73s over 4,961 samples (955.1µs per sample).

| Category         |     % |    Time | Samples |
| ---------------- | ----: | ------: | ------: |
| Ours             | 74.0% |   3.50s |   4,120 |
| Standard library | 23.6% |   1.11s |     765 |
| Native           |  2.4% | 113.0ms |      75 |
| Unknown          | <0.1% |  <0.1µs |       1 |

## Hottest functions

### Self time

Functions ranked by time spent directly in the function body, excluding callees.

|     % |    Time | Samples | Function                                                                                                                       | Location                                                                             |
| ----: | ------: | ------: | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| 32.8% |   1.55s |     981 | `ReadForType(JsonContract, bool)`                                                                                              | `Newtonsoft.Json.JsonReader`                                                         |
| 16.5% | 783.3ms |     514 | `CopyTo(Array, int32)`                                                                                                         | ``System.Collections.Generic.List`1[System.__Canon].System.Collections.ICollection`` |
|  6.3% | 296.6ms |     246 | `SerializeObject(JsonWriter, Object, JsonObjectContract, JsonProperty, JsonContainerContract, JsonProperty)`                   | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`                         |
|  4.6% | 217.6ms |   1,008 | `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)`                                                 | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader`                         |
|  3.2% | 151.7ms |     133 | `SerializeList(JsonWriter, IEnumerable, JsonArrayContract, JsonProperty, JsonContainerContract, JsonProperty)`                 | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`                         |
|  3.0% | 141.6ms |     100 | `ReadStringIntoBuffer(wchar)`                                                                                                  | `Newtonsoft.Json.JsonTextReader`                                                     |
|  2.4% | 113.0ms |      75 | `UNMANAGED_CODE_TIME`                                                                                                          | `<unknown>`                                                                          |
|  2.3% | 110.1ms |      79 | `ParseProperty()`                                                                                                              | `Newtonsoft.Json.JsonTextReader`                                                     |
|  2.1% |  98.3ms |     157 | `PopulateList(IList, JsonReader, JsonArrayContract, JsonProperty, String)`                                                     | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader`                         |
|  2.0% |  93.0ms |      59 | `ReadAsInt32()`                                                                                                                | `Newtonsoft.Json.JsonTextReader`                                                     |
|  1.9% |  90.7ms |      68 | `ReadNumberValue(ReadType)`                                                                                                    | `Newtonsoft.Json.JsonTextReader`                                                     |
|  1.4% |  67.1ms |      49 | `ParseReadNumber(ReadType, wchar, int32)`                                                                                      | `Newtonsoft.Json.JsonTextReader`                                                     |
|  1.4% |  66.7ms |      76 | `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)`                          | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`                         |
|  1.3% |  62.7ms |      45 | `ParseValue()`                                                                                                                 | `Newtonsoft.Json.JsonTextReader`                                                     |
|  1.3% |  60.2ms |      43 | `SetToken(JsonToken, Object, bool)`                                                                                            | `Newtonsoft.Json.JsonReader`                                                         |
|  1.1% |  54.3ms |      39 | `ParsePostValue(bool)`                                                                                                         | `Newtonsoft.Json.JsonTextReader`                                                     |
|  1.1% |  53.6ms |      38 | ``WriteEscapedJavaScriptString(TextWriter, String, wchar, bool, bool[], StringEscapeHandling, IArrayPool`1<wchar>, wchar[]&)`` | `Newtonsoft.Json.Utilities.JavaScriptUtils`                                          |
|  0.9% |  43.9ms |      31 | `FindValue(!0)`                                                                                                                | ``System.Collections.Generic.Dictionary`2[System.__Canon,System.__Canon]``           |
|  0.9% |  41.0ms |      32 | `WriteValue(JsonWriter, PrimitiveTypeCode, Object)`                                                                            | `Newtonsoft.Json.JsonWriter`                                                         |
|  0.8% |  37.2ms |      27 | `Memmove(unsigned int8&, unsigned int8&, unsigned int)`                                                                        | `System.Buffer`                                                                      |

#### Categories

##### Ours

|     % |    Time | Samples | Function                                                                                                                       | Location                                                     |
| ----: | ------: | ------: | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------ |
| 32.8% |   1.55s |     981 | `ReadForType(JsonContract, bool)`                                                                                              | `Newtonsoft.Json.JsonReader`                                 |
|  6.3% | 296.6ms |     246 | `SerializeObject(JsonWriter, Object, JsonObjectContract, JsonProperty, JsonContainerContract, JsonProperty)`                   | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |
|  4.6% | 217.6ms |   1,008 | `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)`                                                 | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |
|  3.2% | 151.7ms |     133 | `SerializeList(JsonWriter, IEnumerable, JsonArrayContract, JsonProperty, JsonContainerContract, JsonProperty)`                 | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |
|  3.0% | 141.6ms |     100 | `ReadStringIntoBuffer(wchar)`                                                                                                  | `Newtonsoft.Json.JsonTextReader`                             |
|  2.3% | 110.1ms |      79 | `ParseProperty()`                                                                                                              | `Newtonsoft.Json.JsonTextReader`                             |
|  2.1% |  98.3ms |     157 | `PopulateList(IList, JsonReader, JsonArrayContract, JsonProperty, String)`                                                     | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |
|  2.0% |  93.0ms |      59 | `ReadAsInt32()`                                                                                                                | `Newtonsoft.Json.JsonTextReader`                             |
|  1.9% |  90.7ms |      68 | `ReadNumberValue(ReadType)`                                                                                                    | `Newtonsoft.Json.JsonTextReader`                             |
|  1.4% |  67.1ms |      49 | `ParseReadNumber(ReadType, wchar, int32)`                                                                                      | `Newtonsoft.Json.JsonTextReader`                             |
|  1.4% |  66.7ms |      76 | `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)`                          | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |
|  1.3% |  62.7ms |      45 | `ParseValue()`                                                                                                                 | `Newtonsoft.Json.JsonTextReader`                             |
|  1.3% |  60.2ms |      43 | `SetToken(JsonToken, Object, bool)`                                                                                            | `Newtonsoft.Json.JsonReader`                                 |
|  1.1% |  54.3ms |      39 | `ParsePostValue(bool)`                                                                                                         | `Newtonsoft.Json.JsonTextReader`                             |
|  1.1% |  53.6ms |      38 | ``WriteEscapedJavaScriptString(TextWriter, String, wchar, bool, bool[], StringEscapeHandling, IArrayPool`1<wchar>, wchar[]&)`` | `Newtonsoft.Json.Utilities.JavaScriptUtils`                  |
|  0.9% |  41.0ms |      32 | `WriteValue(JsonWriter, PrimitiveTypeCode, Object)`                                                                            | `Newtonsoft.Json.JsonWriter`                                 |
|  0.7% |  35.0ms |      24 | `Read()`                                                                                                                       | `Newtonsoft.Json.JsonTextReader`                             |
|  0.7% |  32.4ms |      24 | `ReadStringValue(ReadType)`                                                                                                    | `Newtonsoft.Json.JsonTextReader`                             |
|  0.5% |  23.1ms |      17 | `GetValue(Object)`                                                                                                             | `Newtonsoft.Json.Serialization.ExpressionValueProvider`      |
|  0.5% |  21.8ms |      15 | `ParseObject()`                                                                                                                | `Newtonsoft.Json.JsonTextReader`                             |

##### Standard library

|     % |    Time | Samples | Function                                                                     | Location                                                                                |
| ----: | ------: | ------: | ---------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| 16.5% | 783.3ms |     514 | `CopyTo(Array, int32)`                                                       | ``System.Collections.Generic.List`1[System.__Canon].System.Collections.ICollection``    |
|  0.9% |  43.9ms |      31 | `FindValue(!0)`                                                              | ``System.Collections.Generic.Dictionary`2[System.__Canon,System.__Canon]``              |
|  0.8% |  37.2ms |      27 | `Memmove(unsigned int8&, unsigned int8&, unsigned int)`                      | `System.Buffer`                                                                         |
|  0.4% |  20.8ms |      15 | `Add(Object)`                                                                | ``System.Collections.Generic.List`1[System.__Canon].System.Collections.IList``          |
|  0.4% |  18.9ms |      13 | `IsInstanceOfInterface(void*, Object)`                                       | `System.Runtime.CompilerServices.CastHelpers`                                           |
|  0.3% |  13.7ms |      10 | `TryGetValueInternal(Tables<!0, !1>, !0, int32, !1&)`                        | ``System.Collections.Concurrent.ConcurrentDictionary`2[System.__Canon,System.__Canon]`` |
|  0.3% |  13.5ms |      10 | `ChkCastInterface(void*, Object)`                                            | `System.Runtime.CompilerServices.CastHelpers`                                           |
|  0.3% |  13.4ms |      10 | `StelemRef(Array, int, Object)`                                              | `System.Runtime.CompilerServices.CastHelpers`                                           |
|  0.2% |  11.1ms |       8 | `FormatDouble(float64, String, NumberFormatInfo)`                            | `System.Number`                                                                         |
|  0.2% |   9.6ms |       7 | `IsInstance_Helper(void*, Object)`                                           | `System.Runtime.CompilerServices.CastHelpers`                                           |
|  0.1% |   6.8ms |       5 | `Append(wchar&, int32)`                                                      | `System.Text.StringBuilder`                                                             |
|  0.1% |   4.2ms |       3 | `IndexOf(!!0[], !!0, int32, int32)`                                          | `System.Array`                                                                          |
|  0.1% |   4.1ms |       3 | `AddWithResize(!0)`                                                          | ``System.Collections.Generic.List`1[System.__Canon]``                                   |
|  0.1% |   2.8ms |       2 | `AddWithResize(!0)`                                                          | ``System.Collections.Generic.List`1[Newtonsoft.Json.JsonPosition]``                     |
|  0.1% |   2.7ms |       2 | `NonPackedIndexOfValueType(!!0&, !!0, int32)`                                | `System.SpanHelpers`                                                                    |
|  0.1% |   2.7ms |       3 | ``TryParseFloat(ReadOnlySpan`1<!!0>, NumberStyles, NumberFormatInfo, !!1&)`` | `System.Number`                                                                         |
| <0.1% |   1.4ms |       1 | `Write(String)`                                                              | `System.IO.StringWriter`                                                                |
| <0.1% |   1.3ms |       1 | `ToString()`                                                                 | `System.Text.StringBuilder`                                                             |
| <0.1% |   1.2ms |       1 | `AppendWithExpansion(wchar&, int32)`                                         | `System.Text.StringBuilder`                                                             |
| <0.1% |  <0.1µs |       2 | `TryParse(String, NumberStyles, IFormatProvider, float64&)`                  | `System.Double`                                                                         |

##### Native

|    % |    Time | Samples | Function              | Location    |
| ---: | ------: | ------: | --------------------- | ----------- |
| 2.4% | 113.0ms |      75 | `UNMANAGED_CODE_TIME` | `<unknown>` |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `ReadForType(JsonContract, bool)` (`Newtonsoft.Json.JsonReader`)

|     % |  Time | Samples | Caller                                                                         | Location                                                     |
| ----: | ----: | ------: | ------------------------------------------------------------------------------ | ------------------------------------------------------------ |
| 99.4% | 1.54s |     972 | `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |
|  0.6% | 9.6ms |       9 | `PopulateList(IList, JsonReader, JsonArrayContract, JsonProperty, String)`     | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |

##### `CopyTo(Array, int32)` (``System.Collections.Generic.List`1[System.__Canon].System.Collections.ICollection``)

|      % |    Time | Samples | Caller                                                                     | Location                                                     |
| -----: | ------: | ------: | -------------------------------------------------------------------------- | ------------------------------------------------------------ |
| 100.0% | 783.3ms |     514 | `CreateList(JsonReader, Type, JsonContract, JsonProperty, Object, String)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |

##### `SerializeObject(JsonWriter, Object, JsonObjectContract, JsonProperty, JsonContainerContract, JsonProperty)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`)

|      % |    Time | Samples | Caller                                                                                                | Location                                                     |
| -----: | ------: | ------: | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| 100.0% | 296.6ms |     246 | `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |

##### `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`)

|      % |    Time | Samples | Caller                                                                                                    | Location                                                     |
| -----: | ------: | ------: | --------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| 100.0% | 217.6ms |   1,008 | `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |

##### `SerializeList(JsonWriter, IEnumerable, JsonArrayContract, JsonProperty, JsonContainerContract, JsonProperty)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`)

|      % |    Time | Samples | Caller                                                                                                | Location                                                     |
| -----: | ------: | ------: | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| 100.0% | 151.7ms |     133 | `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |

##### `ReadStringIntoBuffer(wchar)` (`Newtonsoft.Json.JsonTextReader`)

|     % |   Time | Samples | Caller                         | Location                         |
| ----: | -----: | ------: | ------------------------------ | -------------------------------- |
| 53.7% | 76.1ms |      53 | `ReadStringValue(ReadType)`    | `Newtonsoft.Json.JsonTextReader` |
| 45.3% | 64.1ms |      46 | `ParseProperty()`              | `Newtonsoft.Json.JsonTextReader` |
|  1.0% |  1.4ms |       1 | `ParseString(wchar, ReadType)` | `Newtonsoft.Json.JsonTextReader` |

##### `UNMANAGED_CODE_TIME` (`<unknown>`)

|    % |  Time | Samples | Caller                                                                         | Location                                                     |
| ---: | ----: | ------: | ------------------------------------------------------------------------------ | ------------------------------------------------------------ |
| 6.2% | 6.9ms |       5 | `SerializeObjectInternal(Object, Type, JsonSerializer)`                        | `Newtonsoft.Json.JsonConvert`                                |
| 5.6% | 6.3ms |       3 | `DeserializeObject(String, Type, JsonSerializerSettings)`                      | `Newtonsoft.Json.JsonConvert`                                |
| 3.6% | 4.1ms |       1 | ``GetMatchingConverter(IList`1<JsonConverter>, Type)``                         | `Newtonsoft.Json.JsonSerializer`                             |
| 3.6% | 4.1ms |       3 | `Node()`                                                                       | `dynamicClass.CreateProfile`                                 |
| 2.4% | 2.7ms |       1 | `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |

##### `ParseProperty()` (`Newtonsoft.Json.JsonTextReader`)

|      % |    Time | Samples | Caller          | Location                         |
| -----: | ------: | ------: | --------------- | -------------------------------- |
| 100.0% | 110.1ms |      79 | `ParseObject()` | `Newtonsoft.Json.JsonTextReader` |

##### `PopulateList(IList, JsonReader, JsonArrayContract, JsonProperty, String)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`)

|      % |   Time | Samples | Caller                                                                     | Location                                                     |
| -----: | -----: | ------: | -------------------------------------------------------------------------- | ------------------------------------------------------------ |
| 100.0% | 98.3ms |     157 | `CreateList(JsonReader, Type, JsonContract, JsonProperty, Object, String)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |

##### `ReadAsInt32()` (`Newtonsoft.Json.JsonTextReader`)

|      % |   Time | Samples | Caller                            | Location                     |
| -----: | -----: | ------: | --------------------------------- | ---------------------------- |
| 100.0% | 93.0ms |      59 | `ReadForType(JsonContract, bool)` | `Newtonsoft.Json.JsonReader` |

##### `ReadNumberValue(ReadType)` (`Newtonsoft.Json.JsonTextReader`)

|      % |   Time | Samples | Caller                            | Location                     |
| -----: | -----: | ------: | --------------------------------- | ---------------------------- |
| 100.0% | 90.7ms |      68 | `ReadForType(JsonContract, bool)` | `Newtonsoft.Json.JsonReader` |

##### `ParseReadNumber(ReadType, wchar, int32)` (`Newtonsoft.Json.JsonTextReader`)

|      % |   Time | Samples | Caller                      | Location                         |
| -----: | -----: | ------: | --------------------------- | -------------------------------- |
| 100.0% | 67.1ms |      49 | `ReadNumberValue(ReadType)` | `Newtonsoft.Json.JsonTextReader` |

##### `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`)

|     % |   Time | Samples | Caller                                                                                                         | Location                                                     |
| ----: | -----: | ------: | -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| 51.0% | 34.0ms |      32 | `SerializeList(JsonWriter, IEnumerable, JsonArrayContract, JsonProperty, JsonContainerContract, JsonProperty)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |
| 47.0% | 31.4ms |      43 | `SerializeObject(JsonWriter, Object, JsonObjectContract, JsonProperty, JsonContainerContract, JsonProperty)`   | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |
|  2.0% |  1.3ms |       1 | `Serialize(JsonWriter, Object, Type)`                                                                          | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |

##### `ParseValue()` (`Newtonsoft.Json.JsonTextReader`)

|      % |   Time | Samples | Caller                            | Location                     |
| -----: | -----: | ------: | --------------------------------- | ---------------------------- |
| 100.0% | 62.7ms |      45 | `ReadForType(JsonContract, bool)` | `Newtonsoft.Json.JsonReader` |

##### `SetToken(JsonToken, Object, bool)` (`Newtonsoft.Json.JsonReader`)

|     % |   Time | Samples | Caller                                    | Location                         |
| ----: | -----: | ------: | ----------------------------------------- | -------------------------------- |
| 36.1% | 21.8ms |      15 | `ParseReadString(wchar, ReadType)`        | `Newtonsoft.Json.JsonTextReader` |
| 32.2% | 19.4ms |      14 | `ParseProperty()`                         | `Newtonsoft.Json.JsonTextReader` |
| 13.7% |  8.3ms |       6 | `ParseValue()`                            | `Newtonsoft.Json.JsonTextReader` |
| 13.4% |  8.1ms |       6 | `ParseReadNumber(ReadType, wchar, int32)` | `Newtonsoft.Json.JsonTextReader` |
|  2.2% |  1.3ms |       1 | `SetToken(JsonToken)`                     | `Newtonsoft.Json.JsonReader`     |

##### `ParsePostValue(bool)` (`Newtonsoft.Json.JsonTextReader`)

|     % |   Time | Samples | Caller                      | Location                         |
| ----: | -----: | ------: | --------------------------- | -------------------------------- |
| 60.1% | 32.6ms |      23 | `Read()`                    | `Newtonsoft.Json.JsonTextReader` |
| 39.9% | 21.7ms |      16 | `ReadStringValue(ReadType)` | `Newtonsoft.Json.JsonTextReader` |

##### ``WriteEscapedJavaScriptString(TextWriter, String, wchar, bool, bool[], StringEscapeHandling, IArrayPool`1<wchar>, wchar[]&)`` (`Newtonsoft.Json.Utilities.JavaScriptUtils`)

|     % |   Time | Samples | Caller                                              | Location                         |
| ----: | -----: | ------: | --------------------------------------------------- | -------------------------------- |
| 97.5% | 52.2ms |      37 | `WriteValue(JsonWriter, PrimitiveTypeCode, Object)` | `Newtonsoft.Json.JsonWriter`     |
|  2.5% |  1.3ms |       1 | `WriteEscapedString(String, bool)`                  | `Newtonsoft.Json.JsonTextWriter` |

##### `FindValue(!0)` (``System.Collections.Generic.Dictionary`2[System.__Canon,System.__Canon]``)

|     % |   Time | Samples | Caller                                                                         | Location                                                                   |
| ----: | -----: | ------: | ------------------------------------------------------------------------------ | -------------------------------------------------------------------------- |
| 93.8% | 41.2ms |      29 | `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader`               |
|  3.2% |  1.4ms |       1 | `TryGetValue(!0, !1&)`                                                         | ``System.Collections.Generic.Dictionary`2[System.__Canon,System.__Canon]`` |
|  3.0% |  1.3ms |       1 | `GetClosestMatchProperty(String)`                                              | `Newtonsoft.Json.Serialization.JsonPropertyCollection`                     |

##### `WriteValue(JsonWriter, PrimitiveTypeCode, Object)` (`Newtonsoft.Json.JsonWriter`)

|     % |   Time | Samples | Caller                                                                                                             | Location                                                     |
| ----: | -----: | ------: | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------ |
| 86.5% | 35.4ms |      28 | `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)`              | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |
| 13.5% |  5.5ms |       4 | `SerializePrimitive(JsonWriter, Object, JsonPrimitiveContract, JsonProperty, JsonContainerContract, JsonProperty)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |

##### `Memmove(unsigned int8&, unsigned int8&, unsigned int)` (`System.Buffer`)

|     % |   Time | Samples | Caller                                                                                                       | Location                                                     |
| ----: | -----: | ------: | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------ |
| 40.5% | 15.1ms |      11 | `SerializeObject(JsonWriter, Object, JsonObjectContract, JsonProperty, JsonContainerContract, JsonProperty)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |
| 22.4% |  8.3ms |       6 | `Read(wchar[], int32, int32)`                                                                                | `System.IO.StringReader`                                     |
| 11.2% |  4.2ms |       3 | `ToString()`                                                                                                 | `System.Text.StringBuilder`                                  |
|  7.6% |  2.8ms |       2 | `AppendWithExpansion(wchar&, int32)`                                                                         | `System.Text.StringBuilder`                                  |
|  7.2% |  2.7ms |       2 | `Concat(String, String)`                                                                                     | `System.String`                                              |

##### `Read()` (`Newtonsoft.Json.JsonTextReader`)

|     % |   Time | Samples | Caller                                                                                                    | Location                                                     |
| ----: | -----: | ------: | --------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| 69.6% | 24.4ms |      17 | `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)`                            | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |
| 19.4% |  6.8ms |       4 | `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |
| 11.0% |  3.8ms |       3 | `ReadForType(JsonContract, bool)`                                                                         | `Newtonsoft.Json.JsonReader`                                 |

##### `ReadStringValue(ReadType)` (`Newtonsoft.Json.JsonTextReader`)

|     % |   Time | Samples | Caller                            | Location                         |
| ----: | -----: | ------: | --------------------------------- | -------------------------------- |
| 95.8% | 31.0ms |      23 | `ReadForType(JsonContract, bool)` | `Newtonsoft.Json.JsonReader`     |
|  4.2% |  1.4ms |       1 | `ReadAsString()`                  | `Newtonsoft.Json.JsonTextReader` |

##### `GetValue(Object)` (`Newtonsoft.Json.Serialization.ExpressionValueProvider`)

|     % |   Time | Samples | Caller                                                                                                                   | Location                                                     |
| ----: | -----: | ------: | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------ |
| 88.0% | 20.4ms |      15 | `SerializeObject(JsonWriter, Object, JsonObjectContract, JsonProperty, JsonContainerContract, JsonProperty)`             | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |
| 12.0% |  2.8ms |       2 | `CalculatePropertyValues(JsonWriter, Object, JsonContainerContract, JsonProperty, JsonProperty, JsonContract&, Object&)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |

##### `ParseObject()` (`Newtonsoft.Json.JsonTextReader`)

|     % |   Time | Samples | Caller                                                                                                    | Location                                                     |
| ----: | -----: | ------: | --------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| 75.3% | 16.4ms |      12 | `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)`                            | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |
| 18.3% |  4.0ms |       2 | `Read()`                                                                                                  | `Newtonsoft.Json.JsonTextReader`                             |
|  6.4% |  1.4ms |       1 | `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |

##### `Add(Object)` (``System.Collections.Generic.List`1[System.__Canon].System.Collections.IList``)

|      % |   Time | Samples | Caller                                                                     | Location                                                     |
| -----: | -----: | ------: | -------------------------------------------------------------------------- | ------------------------------------------------------------ |
| 100.0% | 20.8ms |      15 | `PopulateList(IList, JsonReader, JsonArrayContract, JsonProperty, String)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |

##### `IsInstanceOfInterface(void*, Object)` (`System.Runtime.CompilerServices.CastHelpers`)

|     % |   Time | Samples | Caller                                                                                                         | Location                                                     |
| ----: | -----: | ------: | -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| 78.5% | 14.8ms |      10 | `SerializeList(JsonWriter, IEnumerable, JsonArrayContract, JsonProperty, JsonContainerContract, JsonProperty)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |
| 21.5% |  4.1ms |       3 | `PopulateList(IList, JsonReader, JsonArrayContract, JsonProperty, String)`                                     | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |

##### `TryGetValueInternal(Tables<!0, !1>, !0, int32, !1&)` (``System.Collections.Concurrent.ConcurrentDictionary`2[System.__Canon,System.__Canon]``)

|     % |  Time | Samples | Caller                                                                                                         | Location                                                                                |
| ----: | ----: | ------: | -------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| 39.7% | 5.4ms |       4 | `SerializeList(JsonWriter, IEnumerable, JsonArrayContract, JsonProperty, JsonContainerContract, JsonProperty)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`                            |
| 39.5% | 5.4ms |       4 | `Deserialize(JsonReader, Type, bool)`                                                                          | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader`                            |
| 10.8% | 1.5ms |       1 | ``GetOrAdd(!0, Func`2<!0, !1>)``                                                                               | ``System.Collections.Concurrent.ConcurrentDictionary`2[System.__Canon,System.__Canon]`` |
| 10.0% | 1.4ms |       1 | `Serialize(JsonWriter, Object, Type)`                                                                          | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`                            |

##### `ChkCastInterface(void*, Object)` (`System.Runtime.CompilerServices.CastHelpers`)

|     % |  Time | Samples | Caller                                                                                                | Location                                                     |
| ----: | ----: | ------: | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| 59.8% | 8.1ms |       6 | `CreateTemporaryCollection()`                                                                         | `Newtonsoft.Json.Serialization.JsonArrayContract`            |
| 40.2% | 5.4ms |       4 | `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |

##### `StelemRef(Array, int, Object)` (`System.Runtime.CompilerServices.CastHelpers`)

|     % |  Time | Samples | Caller                                                                                                         | Location                                                     |
| ----: | ----: | ------: | -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| 59.4% | 8.0ms |       6 | `SerializeList(JsonWriter, IEnumerable, JsonArrayContract, JsonProperty, JsonContainerContract, JsonProperty)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |
| 30.6% | 4.1ms |       3 | `AddWithResize(!0)`                                                                                            | ``System.Collections.Generic.List`1[System.__Canon]``        |
| 10.1% | 1.3ms |       1 | `SerializeObject(JsonWriter, Object, JsonObjectContract, JsonProperty, JsonContainerContract, JsonProperty)`   | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |

##### `FormatDouble(float64, String, NumberFormatInfo)` (`System.Number`)

|     % |  Time | Samples | Caller                                                | Location                         |
| ----: | ----: | ------: | ----------------------------------------------------- | -------------------------------- |
| 86.8% | 9.6ms |       7 | `WriteValue(float64)`                                 | `Newtonsoft.Json.JsonTextWriter` |
| 13.2% | 1.5ms |       1 | `ToString(float64, FloatFormatHandling, wchar, bool)` | `Newtonsoft.Json.JsonConvert`    |

##### `IsInstance_Helper(void*, Object)` (`System.Runtime.CompilerServices.CastHelpers`)

|      % |  Time | Samples | Caller                                                                                                         | Location                                                     |
| -----: | ----: | ------: | -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| 100.0% | 9.6ms |       7 | `SerializeList(JsonWriter, IEnumerable, JsonArrayContract, JsonProperty, JsonContainerContract, JsonProperty)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |

##### `Append(wchar&, int32)` (`System.Text.StringBuilder`)

|     % |  Time | Samples | Caller        | Location                         |
| ----: | ----: | ------: | ------------- | -------------------------------- |
| 79.7% | 5.4ms |       4 | `WriteNull()` | `Newtonsoft.Json.JsonTextWriter` |

##### `IndexOf(!!0[], !!0, int32, int32)` (`System.Array`)

|      % |  Time | Samples | Caller                                                                                                           | Location                                                     |
| -----: | ----: | ------: | ---------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| 100.0% | 4.2ms |       3 | `CheckForCircularReference(JsonWriter, Object, JsonProperty, JsonContract, JsonContainerContract, JsonProperty)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |

##### `AddWithResize(!0)` (``System.Collections.Generic.List`1[System.__Canon]``)

|      % |  Time | Samples | Caller        | Location                                                                       |
| -----: | ----: | ------: | ------------- | ------------------------------------------------------------------------------ |
| 100.0% | 4.1ms |       3 | `Add(Object)` | ``System.Collections.Generic.List`1[System.__Canon].System.Collections.IList`` |

##### `AddWithResize(!0)` (``System.Collections.Generic.List`1[Newtonsoft.Json.JsonPosition]``)

|     % |  Time | Samples | Caller                                                                                                         | Location                                                     |
| ----: | ----: | ------: | -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| 50.8% | 1.4ms |       1 | `Push(JsonContainerType)`                                                                                      | `Newtonsoft.Json.JsonReader`                                 |
| 49.2% | 1.4ms |       1 | `SerializeList(JsonWriter, IEnumerable, JsonArrayContract, JsonProperty, JsonContainerContract, JsonProperty)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |

##### `NonPackedIndexOfValueType(!!0&, !!0, int32)` (`System.SpanHelpers`)

|      % |  Time | Samples | Caller                                | Location                      |
| -----: | ----: | ------: | ------------------------------------- | ----------------------------- |
| 100.0% | 2.7ms |       2 | `EnsureDecimalPlace(float64, String)` | `Newtonsoft.Json.JsonConvert` |

##### ``TryParseFloat(ReadOnlySpan`1<!!0>, NumberStyles, NumberFormatInfo, !!1&)`` (`System.Number`)

|      % |   Time | Samples | Caller                                                      | Location                         |
| -----: | -----: | ------: | ----------------------------------------------------------- | -------------------------------- |
| 100.0% |  2.7ms |       2 | `ParseReadNumber(ReadType, wchar, int32)`                   | `Newtonsoft.Json.JsonTextReader` |
|  <0.1% | <0.1µs |       1 | `TryParse(String, NumberStyles, IFormatProvider, float64&)` | `System.Double`                  |

##### `Write(String)` (`System.IO.StringWriter`)

|      % |  Time | Samples | Caller                                                                                                                         | Location                                    |
| -----: | ----: | ------: | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------- |
| 100.0% | 1.4ms |       1 | ``WriteEscapedJavaScriptString(TextWriter, String, wchar, bool, bool[], StringEscapeHandling, IArrayPool`1<wchar>, wchar[]&)`` | `Newtonsoft.Json.Utilities.JavaScriptUtils` |

##### `ToString()` (`System.Text.StringBuilder`)

|      % |  Time | Samples | Caller   | Location          |
| -----: | ----: | ------: | -------- | ----------------- |
| 100.0% | 1.3ms |       1 | `Main()` | `Profile.Program` |

##### `AppendWithExpansion(wchar&, int32)` (`System.Text.StringBuilder`)

|      % |  Time | Samples | Caller        | Location                         |
| -----: | ----: | ------: | ------------- | -------------------------------- |
| 100.0% | 1.2ms |       1 | `WriteNull()` | `Newtonsoft.Json.JsonTextWriter` |

##### `TryParse(String, NumberStyles, IFormatProvider, float64&)` (`System.Double`)

|      % |   Time | Samples | Caller                                    | Location                         |
| -----: | -----: | ------: | ----------------------------------------- | -------------------------------- |
| 100.0% | <0.1µs |       2 | `ParseReadNumber(ReadType, wchar, int32)` | `Newtonsoft.Json.JsonTextReader` |

### Total time

Functions ranked by total time spent in the function and all its callees.

|     % |    Time | Samples | Function                                                                                                         | Location                                                                             |
| ----: | ------: | ------: | ---------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| 99.7% |   4.72s |   4,945 | `Main()`                                                                                                         | `Profile.Program`                                                                    |
| 79.9% |   3.78s |   3,768 | `DeserializeObject(String, Type, JsonSerializerSettings)`                                                        | `Newtonsoft.Json.JsonConvert`                                                        |
| 79.6% |   3.77s |   3,753 | `DeserializeInternal(JsonReader, Type)`                                                                          | `Newtonsoft.Json.JsonSerializer`                                                     |
| 79.3% |   3.75s |   3,733 | `Deserialize(JsonReader, Type, bool)`                                                                            | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader`                         |
| 78.6% |   3.72s |   3,675 | `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader`                         |
| 78.5% |   3.71s |   3,673 | `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)`        | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader`                         |
| 78.0% |   3.69s |   3,643 | `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)`                                   | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader`                         |
| 46.1% |   2.18s |   1,433 | `ReadForType(JsonContract, bool)`                                                                                | `Newtonsoft.Json.JsonReader`                                                         |
| 45.9% |   2.17s |   2,014 | `CreateList(JsonReader, Type, JsonContract, JsonProperty, Object, String)`                                       | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader`                         |
| 35.9% |   1.70s |   1,513 | `PopulateList(IList, JsonReader, JsonArrayContract, JsonProperty, String)`                                       | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader`                         |
| 19.5% | 925.9ms |     774 | `SerializeObjectInternal(Object, Type, JsonSerializer)`                                                          | `Newtonsoft.Json.JsonConvert`                                                        |
| 19.0% | 899.6ms |     751 | `SerializeInternal(JsonWriter, Object, Type)`                                                                    | `Newtonsoft.Json.JsonSerializer`                                                     |
| 18.9% | 896.9ms |     748 | `Serialize(JsonWriter, Object, Type)`                                                                            | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`                         |
| 18.2% | 864.3ms |     715 | `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)`            | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`                         |
| 18.2% | 863.0ms |     714 | `SerializeObject(JsonWriter, Object, JsonObjectContract, JsonProperty, JsonContainerContract, JsonProperty)`     | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`                         |
| 16.6% | 786.0ms |     516 | `CopyTo(Array, int32)`                                                                                           | ``System.Collections.Generic.List`1[System.__Canon].System.Collections.ICollection`` |
| 13.8% | 652.9ms |     510 | `SerializeList(JsonWriter, IEnumerable, JsonArrayContract, JsonProperty, JsonContainerContract, JsonProperty)`   | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`                         |
|  7.0% | 332.2ms |     333 | `Deserialize(JsonReader, Type)`                                                                                  | `Newtonsoft.Json.JsonSerializer`                                                     |
|  4.9% | 231.1ms |     172 | `ReadNumberValue(ReadType)`                                                                                      | `Newtonsoft.Json.JsonTextReader`                                                     |
|  4.7% | 223.7ms |     160 | `ParseObject()`                                                                                                  | `Newtonsoft.Json.JsonTextReader`                                                     |

#### Categories

##### Ours

|     % |    Time | Samples | Function                                                                                                         | Location                                                     |
| ----: | ------: | ------: | ---------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| 99.7% |   4.72s |   4,945 | `Main()`                                                                                                         | `Profile.Program`                                            |
| 79.9% |   3.78s |   3,768 | `DeserializeObject(String, Type, JsonSerializerSettings)`                                                        | `Newtonsoft.Json.JsonConvert`                                |
| 79.6% |   3.77s |   3,753 | `DeserializeInternal(JsonReader, Type)`                                                                          | `Newtonsoft.Json.JsonSerializer`                             |
| 79.3% |   3.75s |   3,733 | `Deserialize(JsonReader, Type, bool)`                                                                            | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |
| 78.6% |   3.72s |   3,675 | `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |
| 78.5% |   3.71s |   3,673 | `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)`        | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |
| 78.0% |   3.69s |   3,643 | `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)`                                   | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |
| 46.1% |   2.18s |   1,433 | `ReadForType(JsonContract, bool)`                                                                                | `Newtonsoft.Json.JsonReader`                                 |
| 45.9% |   2.17s |   2,014 | `CreateList(JsonReader, Type, JsonContract, JsonProperty, Object, String)`                                       | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |
| 35.9% |   1.70s |   1,513 | `PopulateList(IList, JsonReader, JsonArrayContract, JsonProperty, String)`                                       | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |
| 19.5% | 925.9ms |     774 | `SerializeObjectInternal(Object, Type, JsonSerializer)`                                                          | `Newtonsoft.Json.JsonConvert`                                |
| 19.0% | 899.6ms |     751 | `SerializeInternal(JsonWriter, Object, Type)`                                                                    | `Newtonsoft.Json.JsonSerializer`                             |
| 18.9% | 896.9ms |     748 | `Serialize(JsonWriter, Object, Type)`                                                                            | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |
| 18.2% | 864.3ms |     715 | `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)`            | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |
| 18.2% | 863.0ms |     714 | `SerializeObject(JsonWriter, Object, JsonObjectContract, JsonProperty, JsonContainerContract, JsonProperty)`     | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |
| 13.8% | 652.9ms |     510 | `SerializeList(JsonWriter, IEnumerable, JsonArrayContract, JsonProperty, JsonContainerContract, JsonProperty)`   | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |
|  7.0% | 332.2ms |     333 | `Deserialize(JsonReader, Type)`                                                                                  | `Newtonsoft.Json.JsonSerializer`                             |
|  4.9% | 231.1ms |     172 | `ReadNumberValue(ReadType)`                                                                                      | `Newtonsoft.Json.JsonTextReader`                             |
|  4.7% | 223.7ms |     160 | `ParseObject()`                                                                                                  | `Newtonsoft.Json.JsonTextReader`                             |
|  4.6% | 218.1ms |     234 | `DeserializeObject(String, JsonSerializerSettings)`                                                              | `Newtonsoft.Json.JsonConvert`                                |

##### Standard library

|     % |    Time | Samples | Function                                                                     | Location                                                                                                                                           |
| ----: | ------: | ------: | ---------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| 16.6% | 786.0ms |     516 | `CopyTo(Array, int32)`                                                       | ``System.Collections.Generic.List`1[System.__Canon].System.Collections.ICollection``                                                               |
|  1.2% |  57.1ms |      41 | ``TryParseFloat(ReadOnlySpan`1<!!0>, NumberStyles, NumberFormatInfo, !!1&)`` | `System.Number`                                                                                                                                    |
|  1.2% |  54.7ms |      39 | `FindValue(!0)`                                                              | ``System.Collections.Generic.Dictionary`2[System.__Canon,System.__Canon]``                                                                         |
|  1.1% |  53.6ms |      39 | `FormatDouble(float64, String, NumberFormatInfo)`                            | `System.Number`                                                                                                                                    |
|  0.8% |  37.2ms |      27 | `Memmove(unsigned int8&, unsigned int8&, unsigned int)`                      | `System.Buffer`                                                                                                                                    |
|  0.6% |  27.6ms |      20 | `Add(Object)`                                                                | ``System.Collections.Generic.List`1[System.__Canon].System.Collections.IList``                                                                     |
|  0.6% |  27.1ms |      23 | ``GetOrAdd(!0, Func`2<!0, !1>)``                                             | ``System.Collections.Concurrent.ConcurrentDictionary`2[System.__Canon,System.__Canon]``                                                            |
|  0.5% |  21.8ms |      16 | `IndexOf(!!0[], !!0, int32, int32)`                                          | `System.Array`                                                                                                                                     |
|  0.4% |  18.9ms |      13 | `IsInstanceOfInterface(void*, Object)`                                       | `System.Runtime.CompilerServices.CastHelpers`                                                                                                      |
|  0.3% |  13.7ms |      10 | `TryGetValueInternal(Tables<!0, !1>, !0, int32, !1&)`                        | ``System.Collections.Concurrent.ConcurrentDictionary`2[System.__Canon,System.__Canon]``                                                            |
|  0.3% |  13.5ms |      10 | `ChkCastInterface(void*, Object)`                                            | `System.Runtime.CompilerServices.CastHelpers`                                                                                                      |
|  0.3% |  13.4ms |      10 | `StelemRef(Array, int, Object)`                                              | `System.Runtime.CompilerServices.CastHelpers`                                                                                                      |
|  0.2% |   9.7ms |       7 | `Read(wchar[], int32, int32)`                                                | `System.IO.StringReader`                                                                                                                           |
|  0.2% |   9.6ms |       7 | `IsInstance_Helper(void*, Object)`                                           | `System.Runtime.CompilerServices.CastHelpers`                                                                                                      |
|  0.2% |   8.2ms |       6 | `AddWithResize(!0)`                                                          | ``System.Collections.Generic.List`1[System.__Canon]``                                                                                              |
|  0.1% |   6.9ms |       5 | `ToString()`                                                                 | `System.Text.StringBuilder`                                                                                                                        |
|  0.1% |   6.8ms |       5 | `Append(wchar&, int32)`                                                      | `System.Text.StringBuilder`                                                                                                                        |
|  0.1% |   6.8ms |       6 | `Compile(LambdaExpression)`                                                  | `System.Linq.Expressions.Compiler.LambdaCompiler`                                                                                                  |
|  0.1% |   5.4ms |       7 | ``GetOrAdd(!0, Func`2<!0, !1>)``                                             | ``System.Collections.Concurrent.ConcurrentDictionary`2[Newtonsoft.Json.Utilities.StructMultiKey`2[System.__Canon,System.__Canon],System.__Canon]`` |
|  0.1% |   4.2ms |       3 | `Write(String)`                                                              | `System.IO.StringWriter`                                                                                                                           |

##### Native

|    % |    Time | Samples | Function              | Location    |
| ---: | ------: | ------: | --------------------- | ----------- |
| 2.4% | 113.0ms |      75 | `UNMANAGED_CODE_TIME` | `<unknown>` |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `Main()` (`Profile.Program`)

|     % |    Time | Samples | Callee                                                    | Location                      |
| ----: | ------: | ------: | --------------------------------------------------------- | ----------------------------- |
| 75.5% |   3.56s |   3,534 | `DeserializeObject(String, Type, JsonSerializerSettings)` | `Newtonsoft.Json.JsonConvert` |
| 17.8% | 840.2ms |     693 | `SerializeObjectInternal(Object, Type, JsonSerializer)`   | `Newtonsoft.Json.JsonConvert` |
|  4.6% | 218.1ms |     234 | `DeserializeObject(String)`                               | `Newtonsoft.Json.JsonConvert` |
|  1.9% |  88.4ms |      86 | `SerializeObject(Object)`                                 | `Newtonsoft.Json.JsonConvert` |
|  0.1% |   6.9ms |       5 | `ToString()`                                              | `System.Text.StringBuilder`   |

##### `DeserializeObject(String, Type, JsonSerializerSettings)` (`Newtonsoft.Json.JsonConvert`)

|     % |    Time | Samples | Callee                                  | Location                         |
| ----: | ------: | ------: | --------------------------------------- | -------------------------------- |
| 90.9% |   3.44s |   3,422 | `DeserializeInternal(JsonReader, Type)` | `Newtonsoft.Json.JsonSerializer` |
|  8.8% | 332.2ms |     333 | `Deserialize(JsonReader, Type)`         | `Newtonsoft.Json.JsonSerializer` |
|  0.2% |   6.3ms |       3 | `UNMANAGED_CODE_TIME`                   | `<unknown>`                      |

##### `DeserializeInternal(JsonReader, Type)` (`Newtonsoft.Json.JsonSerializer`)

|     % |  Time | Samples | Callee                                                                                                                                                               | Location                                                     |
| ----: | ----: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| 99.6% | 3.75s |   3,733 | `Deserialize(JsonReader, Type, bool)`                                                                                                                                | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |
|  0.1% | 2.7ms |       2 | `.ctor(JsonSerializer)`                                                                                                                                              | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |
| <0.1% | 1.4ms |       1 | ``ResetReader(JsonReader, CultureInfo, Nullable`1<DateTimeZoneHandling>, Nullable`1<DateParseHandling>, Nullable`1<FloatParseHandling>, Nullable`1<int32>, String)`` | `Newtonsoft.Json.JsonSerializer`                             |

##### `Deserialize(JsonReader, Type, bool)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`)

|     % |   Time | Samples | Callee                                                                                                           | Location                                                                                |
| ----: | -----: | ------: | ---------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| 99.0% |  3.72s |   3,675 | `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader`                            |
|  0.6% | 22.1ms |      16 | `ReadForType(JsonContract, bool)`                                                                                | `Newtonsoft.Json.JsonReader`                                                            |
|  0.1% |  5.4ms |       4 | `TryGetValueInternal(Tables<!0, !1>, !0, int32, !1&)`                                                            | ``System.Collections.Concurrent.ConcurrentDictionary`2[System.__Canon,System.__Canon]`` |
| <0.1% |  1.4ms |       1 | `GetContractSafe(Type)`                                                                                          | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader`                            |
| <0.1% |  1.4ms |       1 | `Read()`                                                                                                         | `Newtonsoft.Json.JsonTextReader`                                                        |

##### `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`)

|     % |  Time | Samples | Callee                                                                                                    | Location                                                     |
| ----: | ----: | ------: | --------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| 99.9% | 3.71s |   3,673 | `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |
| 58.5% | 2.17s |   2,014 | `CreateList(JsonReader, Type, JsonContract, JsonProperty, Object, String)`                                | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |
|  0.2% | 8.3ms |       6 | `EnsureType(JsonReader, Object, CultureInfo, JsonContract, Type)`                                         | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |
| <0.1% | 1.4ms |       1 | `CoerceEmptyStringToNull(Type, JsonContract, String)`                                                     | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |
| <0.1% | 1.3ms |       1 | `UNMANAGED_CODE_TIME`                                                                                     | `<unknown>`                                                  |

##### `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`)

|     % |   Time | Samples | Callee                                                                         | Location                                                     |
| ----: | -----: | ------: | ------------------------------------------------------------------------------ | ------------------------------------------------------------ |
| 99.4% |  3.69s |   3,643 | `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |
|  1.0% | 35.5ms |      25 | `ParseObject()`                                                                | `Newtonsoft.Json.JsonTextReader`                             |
|  0.2% |  8.2ms |       6 | `ReadAndAssert()`                                                              | `Newtonsoft.Json.JsonReader`                                 |
|  0.2% |  6.8ms |       4 | `Read()`                                                                       | `Newtonsoft.Json.JsonTextReader`                             |
|  0.1% |  4.1ms |       3 | `Node()`                                                                       | `dynamicClass.CreateProfile`                                 |

##### `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`)

|     % |    Time | Samples | Callee                                                                                                           | Location                                                     |
| ----: | ------: | ------: | ---------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| 54.8% |   2.02s |   1,881 | `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |
| 54.1% |   1.99s |   1,297 | `ReadForType(JsonContract, bool)`                                                                                | `Newtonsoft.Json.JsonReader`                                 |
|  4.6% | 171.9ms |     124 | `ParseObject()`                                                                                                  | `Newtonsoft.Json.JsonTextReader`                             |
|  4.3% | 158.2ms |     142 | `SetPropertyValue(JsonProperty, JsonConverter, JsonContainerContract, JsonProperty, JsonReader, Object)`         | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |
|  1.8% |  67.9ms |      48 | `Read()`                                                                                                         | `Newtonsoft.Json.JsonTextReader`                             |

##### `ReadForType(JsonContract, bool)` (`Newtonsoft.Json.JsonReader`)

|     % |    Time | Samples | Callee                      | Location                         |
| ----: | ------: | ------: | --------------------------- | -------------------------------- |
| 10.3% | 224.3ms |     164 | `ReadNumberValue(ReadType)` | `Newtonsoft.Json.JsonTextReader` |
|  7.9% | 173.8ms |     124 | `ReadStringValue(ReadType)` | `Newtonsoft.Json.JsonTextReader` |
|  4.4% |  95.7ms |      61 | `ReadAsInt32()`             | `Newtonsoft.Json.JsonTextReader` |
|  4.1% |  90.4ms |      65 | `ParseValue()`              | `Newtonsoft.Json.JsonTextReader` |
|  1.1% |  23.5ms |      20 | `ReadAsDouble()`            | `Newtonsoft.Json.JsonTextReader` |

##### `CreateList(JsonReader, Type, JsonContract, JsonProperty, Object, String)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`)

|     % |    Time | Samples | Callee                                                                     | Location                                                                             |
| ----: | ------: | ------: | -------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| 78.2% |   1.70s |   1,513 | `PopulateList(IList, JsonReader, JsonArrayContract, JsonProperty, String)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader`                         |
| 36.1% | 786.0ms |     516 | `CopyTo(Array, int32)`                                                     | ``System.Collections.Generic.List`1[System.__Canon].System.Collections.ICollection`` |
|  0.8% |  16.9ms |      12 | `CreateNewList(JsonReader, JsonArrayContract, bool&)`                      | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader`                         |

##### `PopulateList(IList, JsonReader, JsonArrayContract, JsonProperty, String)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`)

|     % |    Time | Samples | Callee                                                                                                           | Location                                                                       |
| ----: | ------: | ------: | ---------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| 89.0% |   1.51s |   1,292 | `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader`                   |
|  9.7% | 164.5ms |     120 | `ReadForType(JsonContract, bool)`                                                                                | `Newtonsoft.Json.JsonReader`                                                   |
|  1.6% |  27.6ms |      20 | `Add(Object)`                                                                                                    | ``System.Collections.Generic.List`1[System.__Canon].System.Collections.IList`` |
|  0.2% |   4.1ms |       3 | `IsInstanceOfInterface(void*, Object)`                                                                           | `System.Runtime.CompilerServices.CastHelpers`                                  |
|  0.2% |   2.6ms |       2 | `OnDeserializing(JsonReader, JsonContract, Object)`                                                              | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader`                   |

##### `SerializeObjectInternal(Object, Type, JsonSerializer)` (`Newtonsoft.Json.JsonConvert`)

|     % |    Time | Samples | Callee                                        | Location                         |
| ----: | ------: | ------: | --------------------------------------------- | -------------------------------- |
| 87.3% | 808.0ms |     669 | `SerializeInternal(JsonWriter, Object, Type)` | `Newtonsoft.Json.JsonSerializer` |
| 10.0% |  92.9ms |      83 | `Serialize(JsonWriter, Object, Type)`         | `Newtonsoft.Json.JsonSerializer` |
|  1.0% |   9.5ms |      11 | `.ctor(TextWriter)`                           | `Newtonsoft.Json.JsonTextWriter` |
|  0.8% |   6.9ms |       5 | `UNMANAGED_CODE_TIME`                         | `<unknown>`                      |

##### `SerializeInternal(JsonWriter, Object, Type)` (`Newtonsoft.Json.JsonSerializer`)

|     % |    Time | Samples | Callee                                | Location                                                     |
| ----: | ------: | ------: | ------------------------------------- | ------------------------------------------------------------ |
| 99.7% | 896.9ms |     748 | `Serialize(JsonWriter, Object, Type)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |
|  0.2% |   1.4ms |       1 | `UNMANAGED_CODE_TIME`                 | `<unknown>`                                                  |

##### `Serialize(JsonWriter, Object, Type)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`)

|     % |    Time | Samples | Callee                                                                                                | Location                                                                                |
| ----: | ------: | ------: | ----------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| 96.4% | 864.3ms |     715 | `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`                            |
|  2.6% |  23.0ms |      20 | `GetContractSafe(Object)`                                                                             | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`                            |
|  0.2% |   1.4ms |       1 | `TryGetValueInternal(Tables<!0, !1>, !0, int32, !1&)`                                                 | ``System.Collections.Concurrent.ConcurrentDictionary`2[System.__Canon,System.__Canon]`` |
|  0.1% |   1.3ms |       1 | `UNMANAGED_CODE_TIME`                                                                                 | `<unknown>`                                                                             |

##### `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`)

|     % |    Time | Samples | Callee                                                                                                             | Location                                                     |
| ----: | ------: | ------: | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------ |
| 99.8% | 863.0ms |     714 | `SerializeObject(JsonWriter, Object, JsonObjectContract, JsonProperty, JsonContainerContract, JsonProperty)`       | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |
| 75.5% | 652.9ms |     510 | `SerializeList(JsonWriter, IEnumerable, JsonArrayContract, JsonProperty, JsonContainerContract, JsonProperty)`     | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |
| 20.2% | 174.9ms |     128 | `WriteValue(JsonWriter, PrimitiveTypeCode, Object)`                                                                | `Newtonsoft.Json.JsonWriter`                                 |
|  2.3% |  19.5ms |      14 | `SerializePrimitive(JsonWriter, Object, JsonPrimitiveContract, JsonProperty, JsonContainerContract, JsonProperty)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |
|  2.2% |  19.0ms |      14 | `WriteNull()`                                                                                                      | `Newtonsoft.Json.JsonTextWriter`                             |

##### `SerializeObject(JsonWriter, Object, JsonObjectContract, JsonProperty, JsonContainerContract, JsonProperty)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`)

|     % |    Time | Samples | Callee                                                                                                                   | Location                                                     |
| ----: | ------: | ------: | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------ |
| 86.6% | 747.0ms |     594 | `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)`                    | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |
|  2.4% |  20.4ms |      15 | `GetValue(Object)`                                                                                                       | `Newtonsoft.Json.Serialization.ExpressionValueProvider`      |
|  2.0% |  17.7ms |      18 | `CalculatePropertyValues(JsonWriter, Object, JsonContainerContract, JsonProperty, JsonProperty, JsonContract&, Object&)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |
|  1.9% |  16.3ms |      12 | `CheckForCircularReference(JsonWriter, Object, JsonProperty, JsonContract, JsonContainerContract, JsonProperty)`         | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |
|  1.7% |  15.1ms |      11 | `Memmove(unsigned int8&, unsigned int8&, unsigned int)`                                                                  | `System.Buffer`                                              |

##### `SerializeList(JsonWriter, IEnumerable, JsonArrayContract, JsonProperty, JsonContainerContract, JsonProperty)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`)

|     % |    Time | Samples | Callee                                                                                                           | Location                                                     |
| ----: | ------: | ------: | ---------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| 79.5% | 518.8ms |     388 | `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)`            | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |
|  2.3% |  14.8ms |      10 | `IsInstanceOfInterface(void*, Object)`                                                                           | `System.Runtime.CompilerServices.CastHelpers`                |
|  2.1% |  13.7ms |      10 | `CheckForCircularReference(JsonWriter, Object, JsonProperty, JsonContract, JsonContainerContract, JsonProperty)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |
|  1.5% |   9.6ms |       7 | `IsInstance_Helper(void*, Object)`                                                                               | `System.Runtime.CompilerServices.CastHelpers`                |
|  1.2% |   8.0ms |       6 | `StelemRef(Array, int, Object)`                                                                                  | `System.Runtime.CompilerServices.CastHelpers`                |

##### `Deserialize(JsonReader, Type)` (`Newtonsoft.Json.JsonSerializer`)

|     % |    Time | Samples | Callee                                  | Location                         |
| ----: | ------: | ------: | --------------------------------------- | -------------------------------- |
| 99.6% | 330.9ms |     331 | `DeserializeInternal(JsonReader, Type)` | `Newtonsoft.Json.JsonSerializer` |
|  0.4% |   1.3ms |       1 | `UNMANAGED_CODE_TIME`                   | `<unknown>`                      |

##### `ReadNumberValue(ReadType)` (`Newtonsoft.Json.JsonTextReader`)

|     % |    Time | Samples | Callee                                    | Location                         |
| ----: | ------: | ------: | ----------------------------------------- | -------------------------------- |
| 57.8% | 133.7ms |      96 | `ParseReadNumber(ReadType, wchar, int32)` | `Newtonsoft.Json.JsonTextReader` |
|  2.9% |   6.8ms |       8 | `ParseNumber(ReadType)`                   | `Newtonsoft.Json.JsonTextReader` |

##### `ParseObject()` (`Newtonsoft.Json.JsonTextReader`)

|     % |    Time | Samples | Callee            | Location                         |
| ----: | ------: | ------: | ----------------- | -------------------------------- |
| 90.3% | 201.9ms |     145 | `ParseProperty()` | `Newtonsoft.Json.JsonTextReader` |

##### `DeserializeObject(String, JsonSerializerSettings)` (`Newtonsoft.Json.JsonConvert`)

|      % |    Time | Samples | Callee                                                    | Location                      |
| -----: | ------: | ------: | --------------------------------------------------------- | ----------------------------- |
| 100.0% | 218.1ms |     234 | `DeserializeObject(String, Type, JsonSerializerSettings)` | `Newtonsoft.Json.JsonConvert` |

##### `Add(Object)` (``System.Collections.Generic.List`1[System.__Canon].System.Collections.IList``)

|     % |  Time | Samples | Callee              | Location                                              |
| ----: | ----: | ------: | ------------------- | ----------------------------------------------------- |
| 24.6% | 6.8ms |       5 | `AddWithResize(!0)` | ``System.Collections.Generic.List`1[System.__Canon]`` |

##### ``GetOrAdd(!0, Func`2<!0, !1>)`` (``System.Collections.Concurrent.ConcurrentDictionary`2[System.__Canon,System.__Canon]``)

|     % |   Time | Samples | Callee                                                | Location                                                                                |
| ----: | -----: | ------: | ----------------------------------------------------- | --------------------------------------------------------------------------------------- |
| 84.8% | 23.0ms |      20 | `CreateContract(Type)`                                | `Newtonsoft.Json.Serialization.DefaultContractResolver`                                 |
|  9.9% |  2.7ms |       2 | `GetAttribute(Object)`                                | `Newtonsoft.Json.Serialization.JsonTypeReflector`                                       |
|  9.7% |  2.6ms |       1 | `UNMANAGED_CODE_TIME`                                 | `<unknown>`                                                                             |
|  5.4% |  1.5ms |       1 | `TryGetValueInternal(Tables<!0, !1>, !0, int32, !1&)` | ``System.Collections.Concurrent.ConcurrentDictionary`2[System.__Canon,System.__Canon]`` |

##### `Read(wchar[], int32, int32)` (`System.IO.StringReader`)

|     % |  Time | Samples | Callee                                                  | Location        |
| ----: | ----: | ------: | ------------------------------------------------------- | --------------- |
| 86.0% | 8.3ms |       6 | `Memmove(unsigned int8&, unsigned int8&, unsigned int)` | `System.Buffer` |

##### `AddWithResize(!0)` (``System.Collections.Generic.List`1[System.__Canon]``)

|     % |  Time | Samples | Callee                          | Location                                      |
| ----: | ----: | ------: | ------------------------------- | --------------------------------------------- |
| 50.2% | 4.1ms |       3 | `StelemRef(Array, int, Object)` | `System.Runtime.CompilerServices.CastHelpers` |

##### `ToString()` (`System.Text.StringBuilder`)

|     % |  Time | Samples | Callee                                                  | Location        |
| ----: | ----: | ------: | ------------------------------------------------------- | --------------- |
| 60.5% | 4.2ms |       3 | `Memmove(unsigned int8&, unsigned int8&, unsigned int)` | `System.Buffer` |
| 19.9% | 1.4ms |       1 | `UNMANAGED_CODE_TIME`                                   | `<unknown>`     |

##### ``GetOrAdd(!0, Func`2<!0, !1>)`` (``System.Collections.Concurrent.ConcurrentDictionary`2[Newtonsoft.Json.Utilities.StructMultiKey`2[System.__Canon,System.__Canon],System.__Canon]``)

|      % |  Time | Samples | Callee                                                               | Location                              |
| -----: | ----: | ------: | -------------------------------------------------------------------- | ------------------------------------- |
| 100.0% | 5.4ms |       7 | ``InitializeValuesAndNames(StructMultiKey`2<Type, NamingStrategy>)`` | `Newtonsoft.Json.Utilities.EnumUtils` |

##### `Write(String)` (`System.IO.StringWriter`)

|     % |  Time | Samples | Callee                                                  | Location        |
| ----: | ----: | ------: | ------------------------------------------------------- | --------------- |
| 33.9% | 1.4ms |       1 | `Memmove(unsigned int8&, unsigned int8&, unsigned int)` | `System.Buffer` |

## Hottest call stacks

Call stacks ranked by time spent in their leaf frame.

Common call stack: `Main()` (`Profile.Program`)

|     % |    Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ----: | ------: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 21.6% |   1.02s |     605 | `ReadForType(JsonContract, bool)` (`Newtonsoft.Json.JsonReader`) ← `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`) ← `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `Deserialize(JsonReader, Type, bool)` ← `DeserializeInternal(JsonReader, Type)` (`Newtonsoft.Json.JsonSerializer`) ← `DeserializeObject(String, Type, JsonSerializerSettings)` (`Newtonsoft.Json.JsonConvert`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 10.0% | 473.8ms |     337 | `ReadForType(JsonContract, bool)` (`Newtonsoft.Json.JsonReader`) ← `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`) ← `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `PopulateList(IList, JsonReader, JsonArrayContract, JsonProperty, String)` ← `CreateList(JsonReader, Type, JsonContract, JsonProperty, Object, String)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` ← `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `Deserialize(JsonReader, Type, bool)` ← `DeserializeInternal(JsonReader, Type)` (`Newtonsoft.Json.JsonSerializer`) ← `DeserializeObject(String, Type, JsonSerializerSettings)` (`Newtonsoft.Json.JsonConvert`)                                                                                                                                                                                                                                              |
|  9.0% | 425.4ms |     267 | `CopyTo(Array, int32)` (``System.Collections.Generic.List`1[System.__Canon].System.Collections.ICollection``) ← `CreateList(JsonReader, Type, JsonContract, JsonProperty, Object, String)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`) ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` ← `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `Deserialize(JsonReader, Type, bool)` ← `DeserializeInternal(JsonReader, Type)` (`Newtonsoft.Json.JsonSerializer`) ← `DeserializeObject(String, Type, JsonSerializerSettings)` (`Newtonsoft.Json.JsonConvert`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  6.3% | 296.5ms |     206 | `CopyTo(Array, int32)` (``System.Collections.Generic.List`1[System.__Canon].System.Collections.ICollection``) ← `CreateList(JsonReader, Type, JsonContract, JsonProperty, Object, String)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`) ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` ← `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `PopulateList(IList, JsonReader, JsonArrayContract, JsonProperty, String)` ← `CreateList(JsonReader, Type, JsonContract, JsonProperty, Object, String)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` ← `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `Deserialize(JsonReader, Type, bool)` ← `DeserializeInternal(JsonReader, Type)` (`Newtonsoft.Json.JsonSerializer`) ← `DeserializeObject(String, Type, JsonSerializerSettings)` (`Newtonsoft.Json.JsonConvert`) |
|  4.2% | 201.2ms |     147 | `SerializeObject(JsonWriter, Object, JsonObjectContract, JsonProperty, JsonContainerContract, JsonProperty)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`) ← `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)` ← `SerializeList(JsonWriter, IEnumerable, JsonArrayContract, JsonProperty, JsonContainerContract, JsonProperty)` ← `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)` ← `SerializeObject(JsonWriter, Object, JsonObjectContract, JsonProperty, JsonContainerContract, JsonProperty)` ← `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)` ← `Serialize(JsonWriter, Object, Type)` ← `SerializeInternal(JsonWriter, Object, Type)` (`Newtonsoft.Json.JsonSerializer`) ← `SerializeObjectInternal(Object, Type, JsonSerializer)` (`Newtonsoft.Json.JsonConvert`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  2.6% | 123.8ms |     263 | `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`) ← `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `PopulateList(IList, JsonReader, JsonArrayContract, JsonProperty, String)` ← `CreateList(JsonReader, Type, JsonContract, JsonProperty, Object, String)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` ← `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `Deserialize(JsonReader, Type, bool)` ← `DeserializeInternal(JsonReader, Type)` (`Newtonsoft.Json.JsonSerializer`) ← `DeserializeObject(String, Type, JsonSerializerSettings)` (`Newtonsoft.Json.JsonConvert`)                                                                                                                                                                                                                                                                                                                 |
|  1.8% |  86.6ms |      87 | `SerializeList(JsonWriter, IEnumerable, JsonArrayContract, JsonProperty, JsonContainerContract, JsonProperty)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`) ← `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)` ← `SerializeObject(JsonWriter, Object, JsonObjectContract, JsonProperty, JsonContainerContract, JsonProperty)` ← `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)` ← `Serialize(JsonWriter, Object, Type)` ← `SerializeInternal(JsonWriter, Object, Type)` (`Newtonsoft.Json.JsonSerializer`) ← `SerializeObjectInternal(Object, Type, JsonSerializer)` (`Newtonsoft.Json.JsonConvert`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  1.8% |  86.0ms |      92 | `SerializeObject(JsonWriter, Object, JsonObjectContract, JsonProperty, JsonContainerContract, JsonProperty)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`) ← `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)` ← `Serialize(JsonWriter, Object, Type)` ← `SerializeInternal(JsonWriter, Object, Type)` (`Newtonsoft.Json.JsonSerializer`) ← `SerializeObjectInternal(Object, Type, JsonSerializer)` (`Newtonsoft.Json.JsonConvert`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  1.6% |  76.3ms |     660 | `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`) ← `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `Deserialize(JsonReader, Type, bool)` ← `DeserializeInternal(JsonReader, Type)` (`Newtonsoft.Json.JsonSerializer`) ← `DeserializeObject(String, Type, JsonSerializerSettings)` (`Newtonsoft.Json.JsonConvert`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  1.2% |  58.1ms |      40 | `SerializeList(JsonWriter, IEnumerable, JsonArrayContract, JsonProperty, JsonContainerContract, JsonProperty)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`) ← `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)` ← `SerializeObject(JsonWriter, Object, JsonObjectContract, JsonProperty, JsonContainerContract, JsonProperty)` ← `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)` ← `SerializeList(JsonWriter, IEnumerable, JsonArrayContract, JsonProperty, JsonContainerContract, JsonProperty)` ← `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)` ← `SerializeObject(JsonWriter, Object, JsonObjectContract, JsonProperty, JsonContainerContract, JsonProperty)` ← `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)` ← `Serialize(JsonWriter, Object, Type)` ← `SerializeInternal(JsonWriter, Object, Type)` (`Newtonsoft.Json.JsonSerializer`) ← `SerializeObjectInternal(Object, Type, JsonSerializer)` (`Newtonsoft.Json.JsonConvert`)                                                                                                                                                                                                                                                                                                                          |
|  1.2% |  57.9ms |      43 | `ReadNumberValue(ReadType)` (`Newtonsoft.Json.JsonTextReader`) ← `ReadForType(JsonContract, bool)` (`Newtonsoft.Json.JsonReader`) ← `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`) ← `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `Deserialize(JsonReader, Type, bool)` ← `DeserializeInternal(JsonReader, Type)` (`Newtonsoft.Json.JsonSerializer`) ← `DeserializeObject(String, Type, JsonSerializerSettings)` (`Newtonsoft.Json.JsonConvert`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  1.2% |  55.7ms |      40 | `ParseProperty()` (`Newtonsoft.Json.JsonTextReader`) ← `ParseObject()` ← `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`) ← `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `PopulateList(IList, JsonReader, JsonArrayContract, JsonProperty, String)` ← `CreateList(JsonReader, Type, JsonContract, JsonProperty, Object, String)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` ← `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `Deserialize(JsonReader, Type, bool)` ← `DeserializeInternal(JsonReader, Type)` (`Newtonsoft.Json.JsonSerializer`) ← `DeserializeObject(String, Type, JsonSerializerSettings)` (`Newtonsoft.Json.JsonConvert`)                                                                                                                                                                                                                                        |
|  1.1% |  54.5ms |     118 | `PopulateList(IList, JsonReader, JsonArrayContract, JsonProperty, String)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`) ← `CreateList(JsonReader, Type, JsonContract, JsonProperty, Object, String)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` ← `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `Deserialize(JsonReader, Type, bool)` ← `DeserializeInternal(JsonReader, Type)` (`Newtonsoft.Json.JsonSerializer`) ← `DeserializeObject(String, Type, JsonSerializerSettings)` (`Newtonsoft.Json.JsonConvert`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  1.1% |  50.4ms |      32 | `ReadAsInt32()` (`Newtonsoft.Json.JsonTextReader`) ← `ReadForType(JsonContract, bool)` (`Newtonsoft.Json.JsonReader`) ← `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`) ← `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `Deserialize(JsonReader, Type, bool)` ← `DeserializeInternal(JsonReader, Type)` (`Newtonsoft.Json.JsonSerializer`) ← `Deserialize(JsonReader, Type)` ← `DeserializeObject(String, Type, JsonSerializerSettings)` (`Newtonsoft.Json.JsonConvert`) ← `DeserializeObject(String, JsonSerializerSettings)` ← `DeserializeObject(String)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  1.0% |  46.5ms |      35 | `ParseReadNumber(ReadType, wchar, int32)` (`Newtonsoft.Json.JsonTextReader`) ← `ReadNumberValue(ReadType)` ← `ReadForType(JsonContract, bool)` (`Newtonsoft.Json.JsonReader`) ← `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`) ← `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `PopulateList(IList, JsonReader, JsonArrayContract, JsonProperty, String)` ← `CreateList(JsonReader, Type, JsonContract, JsonProperty, Object, String)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` ← `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `Deserialize(JsonReader, Type, bool)` ← `DeserializeInternal(JsonReader, Type)` (`Newtonsoft.Json.JsonSerializer`) ← `DeserializeObject(String, Type, JsonSerializerSettings)` (`Newtonsoft.Json.JsonConvert`)                                                                                                                                 |
|  0.9% |  41.1ms |      30 | `FormatDouble(float64, String, NumberFormatInfo)` (`System.Number`) ← `WriteValue(float64)` (`Newtonsoft.Json.JsonTextWriter`) ← `WriteValue(JsonWriter, PrimitiveTypeCode, Object)` (`Newtonsoft.Json.JsonWriter`) ← `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`) ← `SerializeObject(JsonWriter, Object, JsonObjectContract, JsonProperty, JsonContainerContract, JsonProperty)` ← `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)` ← `Serialize(JsonWriter, Object, Type)` ← `SerializeInternal(JsonWriter, Object, Type)` (`Newtonsoft.Json.JsonSerializer`) ← `SerializeObjectInternal(Object, Type, JsonSerializer)` (`Newtonsoft.Json.JsonConvert`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  0.8% |  38.4ms |      29 | `PopulateList(IList, JsonReader, JsonArrayContract, JsonProperty, String)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`) ← `CreateList(JsonReader, Type, JsonContract, JsonProperty, Object, String)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` ← `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `PopulateList(IList, JsonReader, JsonArrayContract, JsonProperty, String)` ← `CreateList(JsonReader, Type, JsonContract, JsonProperty, Object, String)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` ← `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `Deserialize(JsonReader, Type, bool)` ← `DeserializeInternal(JsonReader, Type)` (`Newtonsoft.Json.JsonSerializer`) ← `DeserializeObject(String, Type, JsonSerializerSettings)` (`Newtonsoft.Json.JsonConvert`)                                    |
|  0.8% |  38.0ms |      27 | `ReadStringIntoBuffer(wchar)` (`Newtonsoft.Json.JsonTextReader`) ← `ReadStringValue(ReadType)` ← `ReadForType(JsonContract, bool)` (`Newtonsoft.Json.JsonReader`) ← `PopulateList(IList, JsonReader, JsonArrayContract, JsonProperty, String)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`) ← `CreateList(JsonReader, Type, JsonContract, JsonProperty, Object, String)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` ← `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `Deserialize(JsonReader, Type, bool)` ← `DeserializeInternal(JsonReader, Type)` (`Newtonsoft.Json.JsonSerializer`) ← `DeserializeObject(String, Type, JsonSerializerSettings)` (`Newtonsoft.Json.JsonConvert`)                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  0.8% |  36.8ms |      27 | `ParseValue()` (`Newtonsoft.Json.JsonTextReader`) ← `ReadForType(JsonContract, bool)` (`Newtonsoft.Json.JsonReader`) ← `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`) ← `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `Deserialize(JsonReader, Type, bool)` ← `DeserializeInternal(JsonReader, Type)` (`Newtonsoft.Json.JsonSerializer`) ← `DeserializeObject(String, Type, JsonSerializerSettings)` (`Newtonsoft.Json.JsonConvert`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  0.8% |  35.7ms |      19 | `ReadForType(JsonContract, bool)` (`Newtonsoft.Json.JsonReader`) ← `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`) ← `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `Deserialize(JsonReader, Type, bool)` ← `DeserializeInternal(JsonReader, Type)` (`Newtonsoft.Json.JsonSerializer`) ← `Deserialize(JsonReader, Type)` ← `DeserializeObject(String, Type, JsonSerializerSettings)` (`Newtonsoft.Json.JsonConvert`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |

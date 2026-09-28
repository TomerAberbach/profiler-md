# Sampling profile

Took 4.76s.

| Category         |     % |    Time |
| ---------------- | ----: | ------: |
| Ours             | 72.2% |   3.43s |
| Standard library | 25.1% |   1.19s |
| Native           |  2.7% | 129.7ms |
| Unknown          | <0.1% |  <0.1µs |

## Hottest functions

### Self time

Functions ranked by time spent directly in the function body, excluding callees.

|     % |    Time | Function                                                                                                                       | Location                                                                             |
| ----: | ------: | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| 38.3% |   1.82s | `ReadForType(JsonContract, bool)`                                                                                              | `Newtonsoft.Json.JsonReader`                                                         |
| 19.1% | 907.9ms | `CopyTo(Array, int32)`                                                                                                         | ``System.Collections.Generic.List`1[System.__Canon].System.Collections.ICollection`` |
|  5.8% | 276.1ms | `SerializeObject(JsonWriter, Object, JsonObjectContract, JsonProperty, JsonContainerContract, JsonProperty)`                   | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`                         |
|  3.3% | 158.4ms | `SerializeList(JsonWriter, IEnumerable, JsonArrayContract, JsonProperty, JsonContainerContract, JsonProperty)`                 | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`                         |
|  3.1% | 145.9ms | `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)`                                                 | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader`                         |
|  2.7% | 130.6ms | `ReadStringIntoBuffer(wchar)`                                                                                                  | `Newtonsoft.Json.JsonTextReader`                                                     |
|  2.7% | 129.7ms | `UNMANAGED_CODE_TIME`                                                                                                          | `<unknown>`                                                                          |
|  2.2% | 103.0ms | `ReadAsInt32()`                                                                                                                | `Newtonsoft.Json.JsonTextReader`                                                     |
|  1.9% |  88.2ms | `ParseProperty()`                                                                                                              | `Newtonsoft.Json.JsonTextReader`                                                     |
|  1.4% |  65.8ms | ``WriteEscapedJavaScriptString(TextWriter, String, wchar, bool, bool[], StringEscapeHandling, IArrayPool`1<wchar>, wchar[]&)`` | `Newtonsoft.Json.Utilities.JavaScriptUtils`                                          |
|  1.3% |  62.3ms | `ReadNumberValue(ReadType)`                                                                                                    | `Newtonsoft.Json.JsonTextReader`                                                     |
|  1.1% |  54.4ms | `PopulateList(IList, JsonReader, JsonArrayContract, JsonProperty, String)`                                                     | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader`                         |
|  1.0% |  48.9ms | `ParseReadNumber(ReadType, wchar, int32)`                                                                                      | `Newtonsoft.Json.JsonTextReader`                                                     |
|  0.9% |  45.0ms | `SetToken(JsonToken, Object, bool)`                                                                                            | `Newtonsoft.Json.JsonReader`                                                         |
|  0.8% |  40.0ms | `Memmove(unsigned int8&, unsigned int8&, unsigned int)`                                                                        | `System.Buffer`                                                                      |
|  0.8% |  38.6ms | `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)`                          | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`                         |
|  0.8% |  37.9ms | `ParsePostValue(bool)`                                                                                                         | `Newtonsoft.Json.JsonTextReader`                                                     |
|  0.7% |  35.3ms | `WriteValue(JsonWriter, PrimitiveTypeCode, Object)`                                                                            | `Newtonsoft.Json.JsonWriter`                                                         |
|  0.7% |  32.6ms | `ParseValue()`                                                                                                                 | `Newtonsoft.Json.JsonTextReader`                                                     |
|  0.7% |  31.6ms | `Read()`                                                                                                                       | `Newtonsoft.Json.JsonTextReader`                                                     |

#### Categories

##### Ours

|     % |    Time | Function                                                                                                                       | Location                                                     |
| ----: | ------: | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------ |
| 38.3% |   1.82s | `ReadForType(JsonContract, bool)`                                                                                              | `Newtonsoft.Json.JsonReader`                                 |
|  5.8% | 276.1ms | `SerializeObject(JsonWriter, Object, JsonObjectContract, JsonProperty, JsonContainerContract, JsonProperty)`                   | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |
|  3.3% | 158.4ms | `SerializeList(JsonWriter, IEnumerable, JsonArrayContract, JsonProperty, JsonContainerContract, JsonProperty)`                 | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |
|  3.1% | 145.9ms | `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)`                                                 | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |
|  2.7% | 130.6ms | `ReadStringIntoBuffer(wchar)`                                                                                                  | `Newtonsoft.Json.JsonTextReader`                             |
|  2.2% | 103.0ms | `ReadAsInt32()`                                                                                                                | `Newtonsoft.Json.JsonTextReader`                             |
|  1.9% |  88.2ms | `ParseProperty()`                                                                                                              | `Newtonsoft.Json.JsonTextReader`                             |
|  1.4% |  65.8ms | ``WriteEscapedJavaScriptString(TextWriter, String, wchar, bool, bool[], StringEscapeHandling, IArrayPool`1<wchar>, wchar[]&)`` | `Newtonsoft.Json.Utilities.JavaScriptUtils`                  |
|  1.3% |  62.3ms | `ReadNumberValue(ReadType)`                                                                                                    | `Newtonsoft.Json.JsonTextReader`                             |
|  1.1% |  54.4ms | `PopulateList(IList, JsonReader, JsonArrayContract, JsonProperty, String)`                                                     | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |
|  1.0% |  48.9ms | `ParseReadNumber(ReadType, wchar, int32)`                                                                                      | `Newtonsoft.Json.JsonTextReader`                             |
|  0.9% |  45.0ms | `SetToken(JsonToken, Object, bool)`                                                                                            | `Newtonsoft.Json.JsonReader`                                 |
|  0.8% |  38.6ms | `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)`                          | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |
|  0.8% |  37.9ms | `ParsePostValue(bool)`                                                                                                         | `Newtonsoft.Json.JsonTextReader`                             |
|  0.7% |  35.3ms | `WriteValue(JsonWriter, PrimitiveTypeCode, Object)`                                                                            | `Newtonsoft.Json.JsonWriter`                                 |
|  0.7% |  32.6ms | `ParseValue()`                                                                                                                 | `Newtonsoft.Json.JsonTextReader`                             |
|  0.7% |  31.6ms | `Read()`                                                                                                                       | `Newtonsoft.Json.JsonTextReader`                             |
|  0.6% |  29.5ms | `ParseObject()`                                                                                                                | `Newtonsoft.Json.JsonTextReader`                             |
|  0.5% |  25.5ms | `ReadStringValue(ReadType)`                                                                                                    | `Newtonsoft.Json.JsonTextReader`                             |
|  0.4% |  19.2ms | `GetValue(Object)`                                                                                                             | `Newtonsoft.Json.Serialization.DynamicValueProvider`         |

##### Standard library

|     % |    Time | Function                                                                                         | Location                                                                                |
| ----: | ------: | ------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------- |
| 19.1% | 907.9ms | `CopyTo(Array, int32)`                                                                           | ``System.Collections.Generic.List`1[System.__Canon].System.Collections.ICollection``    |
|  0.8% |  40.0ms | `Memmove(unsigned int8&, unsigned int8&, unsigned int)`                                          | `System.Buffer`                                                                         |
|  0.6% |  30.0ms | `TryParseNumber(!!0*&, !!0*, NumberStyles, NumberBuffer&, NumberFormatInfo)`                     | `System.Number`                                                                         |
|  0.5% |  24.3ms | `FindValue(!0)`                                                                                  | ``System.Collections.Generic.Dictionary`2[System.__Canon,System.__Canon]``              |
|  0.4% |  19.1ms | `Add(Object)`                                                                                    | ``System.Collections.Generic.List`1[System.__Canon].System.Collections.IList``          |
|  0.3% |  16.3ms | ``FormatDouble(ValueListBuilder`1<!!0>&, float64, ReadOnlySpan`1<wchar>, NumberFormatInfo)``     | `System.Number`                                                                         |
|  0.3% |  16.0ms | ``TryDigitGenShortest(DiyFp&, DiyFp&, DiyFp&, Span`1<unsigned int8>, int32&, int32&)``           | `System.Number+Grisu3`                                                                  |
|  0.3% |  16.0ms | `IndexOf(!0[], !0, int32, int32)`                                                                | ``System.Collections.Generic.ObjectEqualityComparer`1[System.__Canon]``                 |
|  0.3% |  15.9ms | `TryGetValueInternal(Tables<!0, !1>, !0, int32, !1&)`                                            | ``System.Collections.Concurrent.ConcurrentDictionary`2[System.__Canon,System.__Canon]`` |
|  0.3% |  15.8ms | `Append(wchar&, int32)`                                                                          | `System.Text.StringBuilder`                                                             |
|  0.3% |  15.0ms | `FormatDouble(float64, String, NumberFormatInfo)`                                                | `System.Number`                                                                         |
|  0.2% |   9.5ms | `GetNonRandomizedHashCode()`                                                                     | `System.String`                                                                         |
|  0.2% |   8.1ms | `StelemRef(Array, int, Object)`                                                                  | `System.Runtime.CompilerServices.CastHelpers`                                           |
|  0.1% |   6.4ms | `IsInstanceOfInterface(void*, Object)`                                                           | `System.Runtime.CompilerServices.CastHelpers`                                           |
|  0.1% |   5.6ms | `ChkCastInterface(void*, Object)`                                                                | `System.Runtime.CompilerServices.CastHelpers`                                           |
|  0.1% |   5.5ms | ``MatchChars(!!0*, !!0*, ReadOnlySpan`1<!!0>)``                                                  | `System.Number`                                                                         |
|  0.1% |   5.3ms | ``FormatGeneral(ValueListBuilder`1<!!0>&, NumberBuffer&, int32, NumberFormatInfo, wchar, bool)`` | `System.Number`                                                                         |
|  0.1% |   5.2ms | `Copy(Array, int32, Array, int32, int32)`                                                        | `System.Array`                                                                          |
|  0.1% |   4.1ms | `TryRunDouble(float64, int32, NumberBuffer&)`                                                    | `System.Number+Grisu3`                                                                  |
|  0.1% |   4.1ms | `IsInstance_Helper(void*, Object)`                                                               | `System.Runtime.CompilerServices.CastHelpers`                                           |

##### Native

|    % |    Time | Function              | Location    |
| ---: | ------: | --------------------- | ----------- |
| 2.7% | 129.7ms | `UNMANAGED_CODE_TIME` | `<unknown>` |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `ReadForType(JsonContract, bool)` (`Newtonsoft.Json.JsonReader`)

|     % |  Time | Caller                                                                         | Location                                                     |
| ----: | ----: | ------------------------------------------------------------------------------ | ------------------------------------------------------------ |
| 99.5% | 1.81s | `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |
|  0.4% | 6.9ms | `PopulateList(IList, JsonReader, JsonArrayContract, JsonProperty, String)`     | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |
|  0.1% | 1.3ms | `Deserialize(JsonReader, Type, bool)`                                          | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |

##### `CopyTo(Array, int32)` (``System.Collections.Generic.List`1[System.__Canon].System.Collections.ICollection``)

|      % |    Time | Caller                                                                     | Location                                                     |
| -----: | ------: | -------------------------------------------------------------------------- | ------------------------------------------------------------ |
| 100.0% | 907.9ms | `CreateList(JsonReader, Type, JsonContract, JsonProperty, Object, String)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |

##### `SerializeObject(JsonWriter, Object, JsonObjectContract, JsonProperty, JsonContainerContract, JsonProperty)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`)

|      % |    Time | Caller                                                                                                | Location                                                     |
| -----: | ------: | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| 100.0% | 276.1ms | `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |

##### `SerializeList(JsonWriter, IEnumerable, JsonArrayContract, JsonProperty, JsonContainerContract, JsonProperty)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`)

|      % |    Time | Caller                                                                                                | Location                                                     |
| -----: | ------: | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| 100.0% | 158.4ms | `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |

##### `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`)

|      % |    Time | Caller                                                                                                    | Location                                                     |
| -----: | ------: | --------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| 100.0% | 145.9ms | `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |

##### `ReadStringIntoBuffer(wchar)` (`Newtonsoft.Json.JsonTextReader`)

|     % |   Time | Caller                         | Location                         |
| ----: | -----: | ------------------------------ | -------------------------------- |
| 53.1% | 69.3ms | `ReadStringValue(ReadType)`    | `Newtonsoft.Json.JsonTextReader` |
| 45.9% | 59.9ms | `ParseProperty()`              | `Newtonsoft.Json.JsonTextReader` |
|  1.0% |  1.4ms | `ParseString(wchar, ReadType)` | `Newtonsoft.Json.JsonTextReader` |

##### `UNMANAGED_CODE_TIME` (`<unknown>`)

|    % |   Time | Caller                                                                                                             | Location                                                     |
| ---: | -----: | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------ |
| 9.0% | 11.6ms | `Node()`                                                                                                           | `dynamicClass.CreateProfile`                                 |
| 6.2% |  8.0ms | `SerializeObjectInternal(Object, Type, JsonSerializer)`                                                            | `Newtonsoft.Json.JsonConvert`                                |
| 4.1% |  5.4ms | `DefineEventHandle(unsigned int32, String, int64, unsigned int32, unsigned int32, unsigned int8*, unsigned int32)` | `System.Diagnostics.Tracing.EventPipeEventProvider`          |
| 3.5% |  4.6ms | ``Ctor(ReadOnlySpan`1<wchar>)``                                                                                    | `System.String`                                              |
| 3.2% |  4.1ms | `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)`              | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |

##### `ReadAsInt32()` (`Newtonsoft.Json.JsonTextReader`)

|      % |    Time | Caller                            | Location                     |
| -----: | ------: | --------------------------------- | ---------------------------- |
| 100.0% | 103.0ms | `ReadForType(JsonContract, bool)` | `Newtonsoft.Json.JsonReader` |

##### `ParseProperty()` (`Newtonsoft.Json.JsonTextReader`)

|      % |   Time | Caller          | Location                         |
| -----: | -----: | --------------- | -------------------------------- |
| 100.0% | 88.2ms | `ParseObject()` | `Newtonsoft.Json.JsonTextReader` |

##### ``WriteEscapedJavaScriptString(TextWriter, String, wchar, bool, bool[], StringEscapeHandling, IArrayPool`1<wchar>, wchar[]&)`` (`Newtonsoft.Json.Utilities.JavaScriptUtils`)

|      % |   Time | Caller                                              | Location                     |
| -----: | -----: | --------------------------------------------------- | ---------------------------- |
| 100.0% | 65.8ms | `WriteValue(JsonWriter, PrimitiveTypeCode, Object)` | `Newtonsoft.Json.JsonWriter` |

##### `ReadNumberValue(ReadType)` (`Newtonsoft.Json.JsonTextReader`)

|      % |   Time | Caller                            | Location                     |
| -----: | -----: | --------------------------------- | ---------------------------- |
| 100.0% | 62.3ms | `ReadForType(JsonContract, bool)` | `Newtonsoft.Json.JsonReader` |

##### `PopulateList(IList, JsonReader, JsonArrayContract, JsonProperty, String)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`)

|      % |   Time | Caller                                                                     | Location                                                     |
| -----: | -----: | -------------------------------------------------------------------------- | ------------------------------------------------------------ |
| 100.0% | 54.4ms | `CreateList(JsonReader, Type, JsonContract, JsonProperty, Object, String)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |

##### `ParseReadNumber(ReadType, wchar, int32)` (`Newtonsoft.Json.JsonTextReader`)

|     % |   Time | Caller                      | Location                         |
| ----: | -----: | --------------------------- | -------------------------------- |
| 94.4% | 46.1ms | `ReadNumberValue(ReadType)` | `Newtonsoft.Json.JsonTextReader` |
|  5.6% |  2.7ms | `ParseNumber(ReadType)`     | `Newtonsoft.Json.JsonTextReader` |

##### `SetToken(JsonToken, Object, bool)` (`Newtonsoft.Json.JsonReader`)

|     % |   Time | Caller                                    | Location                         |
| ----: | -----: | ----------------------------------------- | -------------------------------- |
| 29.9% | 13.4ms | `ParseValue()`                            | `Newtonsoft.Json.JsonTextReader` |
| 27.9% | 12.5ms | `ParseReadNumber(ReadType, wchar, int32)` | `Newtonsoft.Json.JsonTextReader` |
| 24.1% | 10.8ms | `ParseReadString(wchar, ReadType)`        | `Newtonsoft.Json.JsonTextReader` |
| 12.0% |  5.4ms | `ParseProperty()`                         | `Newtonsoft.Json.JsonTextReader` |
|  3.1% |  1.4ms | `Read()`                                  | `Newtonsoft.Json.JsonTextReader` |

##### `Memmove(unsigned int8&, unsigned int8&, unsigned int)` (`System.Buffer`)

|     % |  Time | Caller                                                                                                       | Location                                                     |
| ----: | ----: | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------ |
| 23.8% | 9.5ms | `Read(wchar[], int32, int32)`                                                                                | `System.IO.StringReader`                                     |
| 21.8% | 8.7ms | `Write(String)`                                                                                              | `System.IO.StringWriter`                                     |
| 13.6% | 5.4ms | `Concat(String, String)`                                                                                     | `System.String`                                              |
| 13.5% | 5.4ms | `SerializeObject(JsonWriter, Object, JsonObjectContract, JsonProperty, JsonContainerContract, JsonProperty)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |
|  6.9% | 2.8ms | `AppendWithExpansion(wchar&, int32)`                                                                         | `System.Text.StringBuilder`                                  |

##### `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`)

|     % |   Time | Caller                                                                                                         | Location                                                     |
| ----: | -----: | -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| 56.5% | 21.8ms | `SerializeObject(JsonWriter, Object, JsonObjectContract, JsonProperty, JsonContainerContract, JsonProperty)`   | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |
| 36.1% | 13.9ms | `SerializeList(JsonWriter, IEnumerable, JsonArrayContract, JsonProperty, JsonContainerContract, JsonProperty)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |
|  7.4% |  2.8ms | `Serialize(JsonWriter, Object, Type)`                                                                          | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |

##### `ParsePostValue(bool)` (`Newtonsoft.Json.JsonTextReader`)

|     % |   Time | Caller                      | Location                         |
| ----: | -----: | --------------------------- | -------------------------------- |
| 71.2% | 27.0ms | `Read()`                    | `Newtonsoft.Json.JsonTextReader` |
| 28.8% | 10.9ms | `ReadStringValue(ReadType)` | `Newtonsoft.Json.JsonTextReader` |

##### `WriteValue(JsonWriter, PrimitiveTypeCode, Object)` (`Newtonsoft.Json.JsonWriter`)

|     % |   Time | Caller                                                                                                             | Location                                                     |
| ----: | -----: | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------ |
| 92.5% | 32.7ms | `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)`              | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |
|  7.5% |  2.6ms | `SerializePrimitive(JsonWriter, Object, JsonPrimitiveContract, JsonProperty, JsonContainerContract, JsonProperty)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |

##### `ParseValue()` (`Newtonsoft.Json.JsonTextReader`)

|     % |   Time | Caller                            | Location                         |
| ----: | -----: | --------------------------------- | -------------------------------- |
| 96.0% | 31.3ms | `ReadForType(JsonContract, bool)` | `Newtonsoft.Json.JsonReader`     |
|  4.0% |  1.3ms | `Read()`                          | `Newtonsoft.Json.JsonTextReader` |

##### `Read()` (`Newtonsoft.Json.JsonTextReader`)

|     % |   Time | Caller                                                                                                    | Location                                                     |
| ----: | -----: | --------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| 47.9% | 15.1ms | `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)`                            | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |
| 34.7% | 11.0ms | `ReadForType(JsonContract, bool)`                                                                         | `Newtonsoft.Json.JsonReader`                                 |
| 12.9% |  4.1ms | `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |
|  4.5% |  1.4ms | `ReadAndMoveToContent()`                                                                                  | `Newtonsoft.Json.JsonReader`                                 |

##### `TryParseNumber(!!0*&, !!0*, NumberStyles, NumberBuffer&, NumberFormatInfo)` (`System.Number`)

|      % |   Time | Caller                                                                       | Location        |
| -----: | -----: | ---------------------------------------------------------------------------- | --------------- |
| 100.0% | 30.0ms | ``TryParseFloat(ReadOnlySpan`1<!!0>, NumberStyles, NumberFormatInfo, !!1&)`` | `System.Number` |

##### `ParseObject()` (`Newtonsoft.Json.JsonTextReader`)

|     % |   Time | Caller                                                                                                    | Location                                                     |
| ----: | -----: | --------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| 59.5% | 17.6ms | `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)`                            | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |
| 31.2% |  9.2ms | `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |
|  9.3% |  2.7ms | `Read()`                                                                                                  | `Newtonsoft.Json.JsonTextReader`                             |

##### `ReadStringValue(ReadType)` (`Newtonsoft.Json.JsonTextReader`)

|      % |   Time | Caller                            | Location                     |
| -----: | -----: | --------------------------------- | ---------------------------- |
| 100.0% | 25.5ms | `ReadForType(JsonContract, bool)` | `Newtonsoft.Json.JsonReader` |

##### `FindValue(!0)` (``System.Collections.Generic.Dictionary`2[System.__Canon,System.__Canon]``)

|     % |   Time | Caller                                                                         | Location                                                                   |
| ----: | -----: | ------------------------------------------------------------------------------ | -------------------------------------------------------------------------- |
| 94.5% | 23.0ms | `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader`               |
|  5.5% |  1.3ms | `TryGetValue(!0, !1&)`                                                         | ``System.Collections.Generic.Dictionary`2[System.__Canon,System.__Canon]`` |

##### `GetValue(Object)` (`Newtonsoft.Json.Serialization.DynamicValueProvider`)

|     % |  Time | Caller                                                                                                                   | Location                                                     |
| ----: | ----: | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------ |
| 49.9% | 9.6ms | `SerializeObject(JsonWriter, Object, JsonObjectContract, JsonProperty, JsonContainerContract, JsonProperty)`             | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |
| 28.3% | 5.4ms | `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)`                                           | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |
| 21.8% | 4.2ms | `CalculatePropertyValues(JsonWriter, Object, JsonContainerContract, JsonProperty, JsonProperty, JsonContract&, Object&)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |

##### `Add(Object)` (``System.Collections.Generic.List`1[System.__Canon].System.Collections.IList``)

|      % |   Time | Caller                                                                     | Location                                                     |
| -----: | -----: | -------------------------------------------------------------------------- | ------------------------------------------------------------ |
| 100.0% | 19.1ms | `PopulateList(IList, JsonReader, JsonArrayContract, JsonProperty, String)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |

##### ``FormatDouble(ValueListBuilder`1<!!0>&, float64, ReadOnlySpan`1<wchar>, NumberFormatInfo)`` (`System.Number`)

|      % |   Time | Caller                                            | Location        |
| -----: | -----: | ------------------------------------------------- | --------------- |
| 100.0% | 16.3ms | `FormatDouble(float64, String, NumberFormatInfo)` | `System.Number` |

##### ``TryDigitGenShortest(DiyFp&, DiyFp&, DiyFp&, Span`1<unsigned int8>, int32&, int32&)`` (`System.Number+Grisu3`)

|     % |   Time | Caller                                                                            | Location               |
| ----: | -----: | --------------------------------------------------------------------------------- | ---------------------- |
| 91.8% | 14.7ms | `TryRunDouble(float64, int32, NumberBuffer&)`                                     | `System.Number+Grisu3` |
|  8.2% |  1.3ms | ``TryRunShortest(DiyFp&, DiyFp&, DiyFp&, Span`1<unsigned int8>, int32&, int32&)`` | `System.Number+Grisu3` |

##### `IndexOf(!0[], !0, int32, int32)` (``System.Collections.Generic.ObjectEqualityComparer`1[System.__Canon]``)

|      % |   Time | Caller                              | Location       |
| -----: | -----: | ----------------------------------- | -------------- |
| 100.0% | 16.0ms | `IndexOf(!!0[], !!0, int32, int32)` | `System.Array` |

##### `TryGetValueInternal(Tables<!0, !1>, !0, int32, !1&)` (``System.Collections.Concurrent.ConcurrentDictionary`2[System.__Canon,System.__Canon]``)

|     % |  Time | Caller                                                                                                         | Location                                                     |
| ----: | ----: | -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| 51.2% | 8.2ms | `SerializeList(JsonWriter, IEnumerable, JsonArrayContract, JsonProperty, JsonContainerContract, JsonProperty)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |
| 31.9% | 5.1ms | `Deserialize(JsonReader, Type, bool)`                                                                          | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |
| 16.9% | 2.7ms | `Serialize(JsonWriter, Object, Type)`                                                                          | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |

##### `Append(wchar&, int32)` (`System.Text.StringBuilder`)

|      % |   Time | Caller        | Location                         |
| -----: | -----: | ------------- | -------------------------------- |
| 100.0% | 15.8ms | `WriteNull()` | `Newtonsoft.Json.JsonTextWriter` |

##### `FormatDouble(float64, String, NumberFormatInfo)` (`System.Number`)

|      % |   Time | Caller                | Location                         |
| -----: | -----: | --------------------- | -------------------------------- |
| 100.0% | 15.0ms | `WriteValue(float64)` | `Newtonsoft.Json.JsonTextWriter` |

##### `GetNonRandomizedHashCode()` (`System.String`)

|      % |  Time | Caller          | Location                                                                   |
| -----: | ----: | --------------- | -------------------------------------------------------------------------- |
| 100.0% | 9.5ms | `FindValue(!0)` | ``System.Collections.Generic.Dictionary`2[System.__Canon,System.__Canon]`` |

##### `StelemRef(Array, int, Object)` (`System.Runtime.CompilerServices.CastHelpers`)

|     % |  Time | Caller                                                                                                         | Location                                                                       |
| ----: | ----: | -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| 33.8% | 2.7ms | `AddWithResize(!0)`                                                                                            | ``System.Collections.Generic.List`1[System.__Canon]``                          |
| 32.6% | 2.6ms | `SerializeObject(JsonWriter, Object, JsonObjectContract, JsonProperty, JsonContainerContract, JsonProperty)`   | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`                   |
| 16.9% | 1.4ms | `SerializeList(JsonWriter, IEnumerable, JsonArrayContract, JsonProperty, JsonContainerContract, JsonProperty)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`                   |
| 16.7% | 1.3ms | `Add(Object)`                                                                                                  | ``System.Collections.Generic.List`1[System.__Canon].System.Collections.IList`` |

##### `IsInstanceOfInterface(void*, Object)` (`System.Runtime.CompilerServices.CastHelpers`)

|     % |  Time | Caller                                                                                                         | Location                                                     |
| ----: | ----: | -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| 79.0% | 5.1ms | `SerializeList(JsonWriter, IEnumerable, JsonArrayContract, JsonProperty, JsonContainerContract, JsonProperty)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |
| 21.0% | 1.3ms | `PopulateList(IList, JsonReader, JsonArrayContract, JsonProperty, String)`                                     | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |

##### `ChkCastInterface(void*, Object)` (`System.Runtime.CompilerServices.CastHelpers`)

|      % |  Time | Caller                                                                                                | Location                                                     |
| -----: | ----: | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| 100.0% | 5.6ms | `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |

##### ``MatchChars(!!0*, !!0*, ReadOnlySpan`1<!!0>)`` (`System.Number`)

|      % |  Time | Caller                                                                       | Location        |
| -----: | ----: | ---------------------------------------------------------------------------- | --------------- |
| 100.0% | 5.5ms | `TryParseNumber(!!0*&, !!0*, NumberStyles, NumberBuffer&, NumberFormatInfo)` | `System.Number` |

##### ``FormatGeneral(ValueListBuilder`1<!!0>&, NumberBuffer&, int32, NumberFormatInfo, wchar, bool)`` (`System.Number`)

|      % |  Time | Caller                                                                                      | Location        |
| -----: | ----: | ------------------------------------------------------------------------------------------- | --------------- |
| 100.0% | 5.3ms | ``NumberToString(ValueListBuilder`1<!!0>&, NumberBuffer&, wchar, int32, NumberFormatInfo)`` | `System.Number` |

##### `Copy(Array, int32, Array, int32, int32)` (`System.Array`)

|      % |  Time | Caller                 | Location                                                                             |
| -----: | ----: | ---------------------- | ------------------------------------------------------------------------------------ |
| 100.0% | 5.2ms | `CopyTo(Array, int32)` | ``System.Collections.Generic.List`1[System.__Canon].System.Collections.ICollection`` |

##### `TryRunDouble(float64, int32, NumberBuffer&)` (`System.Number+Grisu3`)

|      % |  Time | Caller                                                                                       | Location        |
| -----: | ----: | -------------------------------------------------------------------------------------------- | --------------- |
| 100.0% | 4.1ms | ``FormatDouble(ValueListBuilder`1<!!0>&, float64, ReadOnlySpan`1<wchar>, NumberFormatInfo)`` | `System.Number` |

##### `IsInstance_Helper(void*, Object)` (`System.Runtime.CompilerServices.CastHelpers`)

|      % |  Time | Caller                                                                                                         | Location                                                     |
| -----: | ----: | -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| 100.0% | 4.1ms | `SerializeList(JsonWriter, IEnumerable, JsonArrayContract, JsonProperty, JsonContainerContract, JsonProperty)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |

### Total time

Functions ranked by total time spent in the function and all its callees.

|     % |    Time | Function                                                                                                         | Location                                                                             |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| 99.6% |   4.74s | `Main()`                                                                                                         | `Profile.Program`                                                                    |
| 80.9% |   3.85s | `DeserializeObject(String, Type, JsonSerializerSettings)`                                                        | `Newtonsoft.Json.JsonConvert`                                                        |
| 80.6% |   3.83s | `DeserializeInternal(JsonReader, Type)`                                                                          | `Newtonsoft.Json.JsonSerializer`                                                     |
| 80.4% |   3.82s | `Deserialize(JsonReader, Type, bool)`                                                                            | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader`                         |
| 79.1% |   3.76s | `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)`        | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader`                         |
| 79.1% |   3.76s | `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader`                         |
| 78.3% |   3.72s | `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)`                                   | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader`                         |
| 49.1% |   2.33s | `ReadForType(JsonContract, bool)`                                                                                | `Newtonsoft.Json.JsonReader`                                                         |
| 45.3% |   2.15s | `CreateList(JsonReader, Type, JsonContract, JsonProperty, Object, String)`                                       | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader`                         |
| 33.7% |   1.60s | `PopulateList(IList, JsonReader, JsonArrayContract, JsonProperty, String)`                                       | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader`                         |
| 19.2% | 913.1ms | `CopyTo(Array, int32)`                                                                                           | ``System.Collections.Generic.List`1[System.__Canon].System.Collections.ICollection`` |
| 18.5% | 880.8ms | `SerializeObjectInternal(Object, Type, JsonSerializer)`                                                          | `Newtonsoft.Json.JsonConvert`                                                        |
| 17.8% | 848.5ms | `SerializeInternal(JsonWriter, Object, Type)`                                                                    | `Newtonsoft.Json.JsonSerializer`                                                     |
| 17.8% | 847.1ms | `Serialize(JsonWriter, Object, Type)`                                                                            | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`                         |
| 17.1% | 814.6ms | `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)`            | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`                         |
| 17.0% | 809.0ms | `SerializeObject(JsonWriter, Object, JsonObjectContract, JsonProperty, JsonContainerContract, JsonProperty)`     | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`                         |
| 12.5% | 596.9ms | `SerializeList(JsonWriter, IEnumerable, JsonArrayContract, JsonProperty, JsonContainerContract, JsonProperty)`   | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`                         |
|  6.9% | 329.7ms | `Deserialize(JsonReader, Type)`                                                                                  | `Newtonsoft.Json.JsonSerializer`                                                     |
|  5.1% | 240.8ms | `DeserializeObject(String, JsonSerializerSettings)`                                                              | `Newtonsoft.Json.JsonConvert`                                                        |
|  5.1% | 240.8ms | `DeserializeObject(String)`                                                                                      | `Newtonsoft.Json.JsonConvert`                                                        |

#### Categories

##### Ours

|     % |    Time | Function                                                                                                         | Location                                                     |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| 99.6% |   4.74s | `Main()`                                                                                                         | `Profile.Program`                                            |
| 80.9% |   3.85s | `DeserializeObject(String, Type, JsonSerializerSettings)`                                                        | `Newtonsoft.Json.JsonConvert`                                |
| 80.6% |   3.83s | `DeserializeInternal(JsonReader, Type)`                                                                          | `Newtonsoft.Json.JsonSerializer`                             |
| 80.4% |   3.82s | `Deserialize(JsonReader, Type, bool)`                                                                            | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |
| 79.1% |   3.76s | `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)`        | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |
| 79.1% |   3.76s | `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |
| 78.3% |   3.72s | `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)`                                   | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |
| 49.1% |   2.33s | `ReadForType(JsonContract, bool)`                                                                                | `Newtonsoft.Json.JsonReader`                                 |
| 45.3% |   2.15s | `CreateList(JsonReader, Type, JsonContract, JsonProperty, Object, String)`                                       | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |
| 33.7% |   1.60s | `PopulateList(IList, JsonReader, JsonArrayContract, JsonProperty, String)`                                       | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |
| 18.5% | 880.8ms | `SerializeObjectInternal(Object, Type, JsonSerializer)`                                                          | `Newtonsoft.Json.JsonConvert`                                |
| 17.8% | 848.5ms | `SerializeInternal(JsonWriter, Object, Type)`                                                                    | `Newtonsoft.Json.JsonSerializer`                             |
| 17.8% | 847.1ms | `Serialize(JsonWriter, Object, Type)`                                                                            | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |
| 17.1% | 814.6ms | `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)`            | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |
| 17.0% | 809.0ms | `SerializeObject(JsonWriter, Object, JsonObjectContract, JsonProperty, JsonContainerContract, JsonProperty)`     | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |
| 12.5% | 596.9ms | `SerializeList(JsonWriter, IEnumerable, JsonArrayContract, JsonProperty, JsonContainerContract, JsonProperty)`   | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |
|  6.9% | 329.7ms | `Deserialize(JsonReader, Type)`                                                                                  | `Newtonsoft.Json.JsonSerializer`                             |
|  5.1% | 240.8ms | `DeserializeObject(String, JsonSerializerSettings)`                                                              | `Newtonsoft.Json.JsonConvert`                                |
|  5.1% | 240.8ms | `DeserializeObject(String)`                                                                                      | `Newtonsoft.Json.JsonConvert`                                |
|  4.7% | 223.0ms | `WriteValue(JsonWriter, PrimitiveTypeCode, Object)`                                                              | `Newtonsoft.Json.JsonWriter`                                 |

##### Standard library

|     % |    Time | Function                                                                                     | Location                                                                                |
| ----: | ------: | -------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| 19.2% | 913.1ms | `CopyTo(Array, int32)`                                                                       | ``System.Collections.Generic.List`1[System.__Canon].System.Collections.ICollection``    |
|  1.4% |  68.1ms | `FormatDouble(float64, String, NumberFormatInfo)`                                            | `System.Number`                                                                         |
|  1.0% |  47.2ms | ``FormatDouble(ValueListBuilder`1<!!0>&, float64, ReadOnlySpan`1<wchar>, NumberFormatInfo)`` | `System.Number`                                                                         |
|  0.8% |  40.0ms | `Memmove(unsigned int8&, unsigned int8&, unsigned int)`                                      | `System.Buffer`                                                                         |
|  0.8% |  39.5ms | ``TryParseFloat(ReadOnlySpan`1<!!0>, NumberStyles, NumberFormatInfo, !!1&)``                 | `System.Number`                                                                         |
|  0.7% |  35.5ms | `TryParseNumber(!!0*&, !!0*, NumberStyles, NumberBuffer&, NumberFormatInfo)`                 | `System.Number`                                                                         |
|  0.7% |  33.9ms | `FindValue(!0)`                                                                              | ``System.Collections.Generic.Dictionary`2[System.__Canon,System.__Canon]``              |
|  0.5% |  24.5ms | `Add(Object)`                                                                                | ``System.Collections.Generic.List`1[System.__Canon].System.Collections.IList``          |
|  0.5% |  22.9ms | ``GetOrAdd(!0, Func`2<!0, !1>)``                                                             | ``System.Collections.Concurrent.ConcurrentDictionary`2[System.__Canon,System.__Canon]`` |
|  0.5% |  21.5ms | `TryRunDouble(float64, int32, NumberBuffer&)`                                                | `System.Number+Grisu3`                                                                  |
|  0.4% |  17.0ms | `Append(wchar&, int32)`                                                                      | `System.Text.StringBuilder`                                                             |
|  0.3% |  16.1ms | `EnsureDescriptorsInitialized()`                                                             | `System.Diagnostics.Tracing.EventSource`                                                |
|  0.3% |  16.1ms | `DoCommand(EventCommandEventArgs)`                                                           | `System.Diagnostics.Tracing.EventSource`                                                |
|  0.3% |  16.1ms | `Initialize(Guid, String, String[])`                                                         | `System.Diagnostics.Tracing.EventSource`                                                |
|  0.3% |  16.1ms | `.ctor()`                                                                                    | `System.Diagnostics.Tracing.NativeRuntimeEventSource`                                   |
|  0.3% |  16.1ms | `.cctor()`                                                                                   | `System.Diagnostics.Tracing.NativeRuntimeEventSource`                                   |
|  0.3% |  16.1ms | `StartAssemblyLoad(Guid&, Guid&)`                                                            | `System.Runtime.Loader.AssemblyLoadContext`                                             |
|  0.3% |  16.0ms | ``TryDigitGenShortest(DiyFp&, DiyFp&, DiyFp&, Span`1<unsigned int8>, int32&, int32&)``       | `System.Number+Grisu3`                                                                  |
|  0.3% |  16.0ms | `IndexOf(!0[], !0, int32, int32)`                                                            | ``System.Collections.Generic.ObjectEqualityComparer`1[System.__Canon]``                 |
|  0.3% |  16.0ms | `IndexOf(!!0[], !!0, int32, int32)`                                                          | `System.Array`                                                                          |

##### Native

|    % |    Time | Function              | Location    |
| ---: | ------: | --------------------- | ----------- |
| 2.7% | 129.7ms | `UNMANAGED_CODE_TIME` | `<unknown>` |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `Main()` (`Profile.Program`)

|     % |    Time | Callee                                                    | Location                      |
| ----: | ------: | --------------------------------------------------------- | ----------------------------- |
| 76.1% |   3.61s | `DeserializeObject(String, Type, JsonSerializerSettings)` | `Newtonsoft.Json.JsonConvert` |
| 16.9% | 803.8ms | `SerializeObjectInternal(Object, Type, JsonSerializer)`   | `Newtonsoft.Json.JsonConvert` |
|  5.1% | 240.8ms | `DeserializeObject(String)`                               | `Newtonsoft.Json.JsonConvert` |
|  1.7% |  79.6ms | `SerializeObject(Object)`                                 | `Newtonsoft.Json.JsonConvert` |
|  0.1% |   6.7ms | `ToString()`                                              | `System.Text.StringBuilder`   |

##### `DeserializeObject(String, Type, JsonSerializerSettings)` (`Newtonsoft.Json.JsonConvert`)

|     % |    Time | Callee                                  | Location                                        |
| ----: | ------: | --------------------------------------- | ----------------------------------------------- |
| 91.0% |   3.50s | `DeserializeInternal(JsonReader, Type)` | `Newtonsoft.Json.JsonSerializer`                |
|  8.6% | 329.7ms | `Deserialize(JsonReader, Type)`         | `Newtonsoft.Json.JsonSerializer`                |
|  0.1% |   2.8ms | `UNMANAGED_CODE_TIME`                   | `<unknown>`                                     |
| <0.1% |   1.4ms | `Dispose()`                             | `Newtonsoft.Json.JsonReader.System.IDisposable` |

##### `DeserializeInternal(JsonReader, Type)` (`Newtonsoft.Json.JsonSerializer`)

|     % |  Time | Callee                                | Location                                                     |
| ----: | ----: | ------------------------------------- | ------------------------------------------------------------ |
| 99.8% | 3.82s | `Deserialize(JsonReader, Type, bool)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |
| <0.1% | 1.4ms | `UNMANAGED_CODE_TIME`                 | `<unknown>`                                                  |

##### `Deserialize(JsonReader, Type, bool)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`)

|     % |   Time | Callee                                                                                                           | Location                                                                                |
| ----: | -----: | ---------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| 98.4% |  3.76s | `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader`                            |
|  1.0% | 39.4ms | `ReadForType(JsonContract, bool)`                                                                                | `Newtonsoft.Json.JsonReader`                                                            |
|  0.1% |  5.1ms | `TryGetValueInternal(Tables<!0, !1>, !0, int32, !1&)`                                                            | ``System.Collections.Concurrent.ConcurrentDictionary`2[System.__Canon,System.__Canon]`` |
|  0.1% |  2.7ms | `Read()`                                                                                                         | `Newtonsoft.Json.JsonTextReader`                                                        |
| <0.1% |  1.4ms | `GetConverter(JsonContract, JsonConverter, JsonContainerContract, JsonProperty)`                                 | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader`                            |

##### `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`)

|     % |   Time | Callee                                                                         | Location                                                     |
| ----: | -----: | ------------------------------------------------------------------------------ | ------------------------------------------------------------ |
| 98.9% |  3.72s | `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |
|  0.9% | 33.4ms | `ParseObject()`                                                                | `Newtonsoft.Json.JsonTextReader`                             |
|  0.3% | 11.6ms | `Node()`                                                                       | `dynamicClass.CreateProfile`                                 |
|  0.1% |  5.4ms | `ReadAndAssert()`                                                              | `Newtonsoft.Json.JsonReader`                                 |
|  0.1% |  4.1ms | `Read()`                                                                       | `Newtonsoft.Json.JsonTextReader`                             |

##### `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`)

|      % |  Time | Callee                                                                                                    | Location                                                     |
| -----: | ----: | --------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| 100.0% | 3.76s | `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |
|  57.3% | 2.15s | `CreateList(JsonReader, Type, JsonContract, JsonProperty, Object, String)`                                | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |
|   0.2% | 6.8ms | `EnsureType(JsonReader, Object, CultureInfo, JsonContract, Type)`                                         | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |
|  <0.1% | 1.3ms | `UNMANAGED_CODE_TIME`                                                                                     | `<unknown>`                                                  |

##### `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`)

|     % |    Time | Callee                                                                                                           | Location                                                     |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| 58.5% |   2.18s | `ReadForType(JsonContract, bool)`                                                                                | `Newtonsoft.Json.JsonReader`                                 |
| 53.9% |      2s | `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |
|  4.2% | 156.2ms | `SetPropertyValue(JsonProperty, JsonConverter, JsonContainerContract, JsonProperty, JsonReader, Object)`         | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |
|  3.9% | 145.6ms | `ParseObject()`                                                                                                  | `Newtonsoft.Json.JsonTextReader`                             |
|  1.2% |  45.1ms | `Read()`                                                                                                         | `Newtonsoft.Json.JsonTextReader`                             |

##### `ReadForType(JsonContract, bool)` (`Newtonsoft.Json.JsonReader`)

|    % |    Time | Callee                      | Location                         |
| ---: | ------: | --------------------------- | -------------------------------- |
| 7.2% | 169.1ms | `ReadNumberValue(ReadType)` | `Newtonsoft.Json.JsonTextReader` |
| 5.3% | 123.4ms | `ReadStringValue(ReadType)` | `Newtonsoft.Json.JsonTextReader` |
| 4.6% | 108.1ms | `ReadAsInt32()`             | `Newtonsoft.Json.JsonTextReader` |
| 2.7% |  62.3ms | `ParseValue()`              | `Newtonsoft.Json.JsonTextReader` |
| 1.0% |  23.3ms | `ReadAsDouble()`            | `Newtonsoft.Json.JsonTextReader` |

##### `CreateList(JsonReader, Type, JsonContract, JsonProperty, Object, String)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`)

|     % |    Time | Callee                                                                     | Location                                                                             |
| ----: | ------: | -------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| 74.5% |   1.60s | `PopulateList(IList, JsonReader, JsonArrayContract, JsonProperty, String)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader`                         |
| 42.3% | 913.1ms | `CopyTo(Array, int32)`                                                     | ``System.Collections.Generic.List`1[System.__Canon].System.Collections.ICollection`` |
|  0.2% |   4.1ms | `CreateNewList(JsonReader, JsonArrayContract, bool&)`                      | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader`                         |
|  0.1% |   1.5ms | `UNMANAGED_CODE_TIME`                                                      | `<unknown>`                                                                          |
|  0.1% |   1.1ms | `HasNoDefinedType(JsonContract)`                                           | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader`                         |

##### `PopulateList(IList, JsonReader, JsonArrayContract, JsonProperty, String)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`)

|     % |    Time | Callee                                                                                                           | Location                                                                       |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| 92.5% |   1.48s | `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader`                   |
|  7.3% | 116.7ms | `ReadForType(JsonContract, bool)`                                                                                | `Newtonsoft.Json.JsonReader`                                                   |
|  1.5% |  24.5ms | `Add(Object)`                                                                                                    | ``System.Collections.Generic.List`1[System.__Canon].System.Collections.IList`` |
|  0.1% |   1.4ms | `GetConverter(JsonContract, JsonConverter, JsonContainerContract, JsonProperty)`                                 | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader`                   |
|  0.1% |   1.3ms | `IsInstanceOfInterface(void*, Object)`                                                                           | `System.Runtime.CompilerServices.CastHelpers`                                  |

##### `CopyTo(Array, int32)` (``System.Collections.Generic.List`1[System.__Canon].System.Collections.ICollection``)

|    % |  Time | Callee                                    | Location       |
| ---: | ----: | ----------------------------------------- | -------------- |
| 0.6% | 5.2ms | `Copy(Array, int32, Array, int32, int32)` | `System.Array` |

##### `SerializeObjectInternal(Object, Type, JsonSerializer)` (`Newtonsoft.Json.JsonConvert`)

|     % |    Time | Callee                                        | Location                                        |
| ----: | ------: | --------------------------------------------- | ----------------------------------------------- |
| 86.0% | 757.8ms | `SerializeInternal(JsonWriter, Object, Type)` | `Newtonsoft.Json.JsonSerializer`                |
| 10.3% |  90.6ms | `Serialize(JsonWriter, Object, Type)`         | `Newtonsoft.Json.JsonSerializer`                |
|  1.2% |  10.7ms | `.ctor(TextWriter)`                           | `Newtonsoft.Json.JsonTextWriter`                |
|  0.9% |   8.0ms | `UNMANAGED_CODE_TIME`                         | `<unknown>`                                     |
|  0.2% |   1.4ms | `Dispose()`                                   | `Newtonsoft.Json.JsonWriter.System.IDisposable` |

##### `SerializeInternal(JsonWriter, Object, Type)` (`Newtonsoft.Json.JsonSerializer`)

|     % |    Time | Callee                                | Location                                                     |
| ----: | ------: | ------------------------------------- | ------------------------------------------------------------ |
| 99.8% | 847.1ms | `Serialize(JsonWriter, Object, Type)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |

##### `Serialize(JsonWriter, Object, Type)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`)

|     % |    Time | Callee                                                                                                | Location                                                                                |
| ----: | ------: | ----------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| 96.2% | 814.6ms | `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`                            |
|  2.5% |  21.5ms | `GetContractSafe(Object)`                                                                             | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`                            |
|  0.3% |   2.7ms | `TryGetValueInternal(Tables<!0, !1>, !0, int32, !1&)`                                                 | ``System.Collections.Concurrent.ConcurrentDictionary`2[System.__Canon,System.__Canon]`` |
|  0.2% |   1.3ms | `ShouldWriteReference(Object, JsonProperty, JsonContract, JsonContainerContract, JsonProperty)`       | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`                            |

##### `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`)

|     % |    Time | Callee                                                                                                             | Location                                                     |
| ----: | ------: | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------ |
| 99.3% | 809.0ms | `SerializeObject(JsonWriter, Object, JsonObjectContract, JsonProperty, JsonContainerContract, JsonProperty)`       | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |
| 73.3% | 596.9ms | `SerializeList(JsonWriter, IEnumerable, JsonArrayContract, JsonProperty, JsonContainerContract, JsonProperty)`     | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |
| 25.5% | 208.1ms | `WriteValue(JsonWriter, PrimitiveTypeCode, Object)`                                                                | `Newtonsoft.Json.JsonWriter`                                 |
|  2.6% |  21.3ms | `WriteNull()`                                                                                                      | `Newtonsoft.Json.JsonTextWriter`                             |
|  1.8% |  14.9ms | `SerializePrimitive(JsonWriter, Object, JsonPrimitiveContract, JsonProperty, JsonContainerContract, JsonProperty)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |

##### `SerializeObject(JsonWriter, Object, JsonObjectContract, JsonProperty, JsonContainerContract, JsonProperty)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`)

|     % |    Time | Callee                                                                                                                   | Location                                                     |
| ----: | ------: | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------ |
| 85.4% | 691.0ms | `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)`                    | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |
|  1.2% |   9.6ms | `CalculatePropertyValues(JsonWriter, Object, JsonContainerContract, JsonProperty, JsonProperty, JsonContract&, Object&)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |
|  1.2% |   9.6ms | `GetValue(Object)`                                                                                                       | `Newtonsoft.Json.Serialization.DynamicValueProvider`         |
|  1.2% |   9.4ms | `CheckForCircularReference(JsonWriter, Object, JsonProperty, JsonContract, JsonContainerContract, JsonProperty)`         | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |
|  0.7% |   5.4ms | `Memmove(unsigned int8&, unsigned int8&, unsigned int)`                                                                  | `System.Buffer`                                              |

##### `SerializeList(JsonWriter, IEnumerable, JsonArrayContract, JsonProperty, JsonContainerContract, JsonProperty)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`)

|     % |    Time | Callee                                                                                                           | Location                                                                                |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| 78.8% | 470.1ms | `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)`            | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`                            |
|  1.5% |   9.2ms | `CheckForCircularReference(JsonWriter, Object, JsonProperty, JsonContract, JsonContainerContract, JsonProperty)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`                            |
|  1.4% |   8.2ms | `TryGetValueInternal(Tables<!0, !1>, !0, int32, !1&)`                                                            | ``System.Collections.Concurrent.ConcurrentDictionary`2[System.__Canon,System.__Canon]`` |
|  0.8% |   5.1ms | `IsInstanceOfInterface(void*, Object)`                                                                           | `System.Runtime.CompilerServices.CastHelpers`                                           |
|  0.7% |   4.1ms | `WriteEndArray()`                                                                                                | `Newtonsoft.Json.JsonWriter`                                                            |

##### `Deserialize(JsonReader, Type)` (`Newtonsoft.Json.JsonSerializer`)

|      % |    Time | Callee                                  | Location                         |
| -----: | ------: | --------------------------------------- | -------------------------------- |
| 100.0% | 329.7ms | `DeserializeInternal(JsonReader, Type)` | `Newtonsoft.Json.JsonSerializer` |

##### `DeserializeObject(String, JsonSerializerSettings)` (`Newtonsoft.Json.JsonConvert`)

|      % |    Time | Callee                                                    | Location                      |
| -----: | ------: | --------------------------------------------------------- | ----------------------------- |
| 100.0% | 240.8ms | `DeserializeObject(String, Type, JsonSerializerSettings)` | `Newtonsoft.Json.JsonConvert` |

##### `DeserializeObject(String)` (`Newtonsoft.Json.JsonConvert`)

|      % |    Time | Callee                                              | Location                      |
| -----: | ------: | --------------------------------------------------- | ----------------------------- |
| 100.0% | 240.8ms | `DeserializeObject(String, JsonSerializerSettings)` | `Newtonsoft.Json.JsonConvert` |

##### `WriteValue(JsonWriter, PrimitiveTypeCode, Object)` (`Newtonsoft.Json.JsonWriter`)

|     % |    Time | Callee                                                                                                                         | Location                                    |
| ----: | ------: | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------- |
| 47.9% | 106.9ms | `WriteValue(float64)`                                                                                                          | `Newtonsoft.Json.JsonTextWriter`            |
| 30.7% |  68.6ms | ``WriteEscapedJavaScriptString(TextWriter, String, wchar, bool, bool[], StringEscapeHandling, IArrayPool`1<wchar>, wchar[]&)`` | `Newtonsoft.Json.Utilities.JavaScriptUtils` |
|  3.0% |   6.8ms | `WriteIntegerValue(int32)`                                                                                                     | `Newtonsoft.Json.JsonTextWriter`            |
|  1.2% |   2.8ms | `WriteValue(String)`                                                                                                           | `Newtonsoft.Json.JsonTextWriter`            |
|  1.2% |   2.7ms | `WriteValue(int32)`                                                                                                            | `Newtonsoft.Json.JsonTextWriter`            |

##### `FormatDouble(float64, String, NumberFormatInfo)` (`System.Number`)

|     % |   Time | Callee                                                                                       | Location                               |
| ----: | -----: | -------------------------------------------------------------------------------------------- | -------------------------------------- |
| 69.3% | 47.2ms | ``FormatDouble(ValueListBuilder`1<!!0>&, float64, ReadOnlySpan`1<wchar>, NumberFormatInfo)`` | `System.Number`                        |
|  8.7% |  5.9ms | `ToString()`                                                                                 | ``System.ReadOnlySpan`1[System.Char]`` |

##### ``FormatDouble(ValueListBuilder`1<!!0>&, float64, ReadOnlySpan`1<wchar>, NumberFormatInfo)`` (`System.Number`)

|     % |   Time | Callee                                                                                      | Location               |
| ----: | -----: | ------------------------------------------------------------------------------------------- | ---------------------- |
| 45.5% | 21.5ms | `TryRunDouble(float64, int32, NumberBuffer&)`                                               | `System.Number+Grisu3` |
| 17.0% |  8.0ms | ``NumberToString(ValueListBuilder`1<!!0>&, NumberBuffer&, wchar, int32, NumberFormatInfo)`` | `System.Number`        |
|  3.0% |  1.4ms | ``ParseFormatSpecifier(ReadOnlySpan`1<wchar>, int32&)``                                     | `System.Number`        |

##### ``TryParseFloat(ReadOnlySpan`1<!!0>, NumberStyles, NumberFormatInfo, !!1&)`` (`System.Number`)

|     % |   Time | Callee                                                                       | Location        |
| ----: | -----: | ---------------------------------------------------------------------------- | --------------- |
| 89.7% | 35.5ms | `TryParseNumber(!!0*&, !!0*, NumberStyles, NumberBuffer&, NumberFormatInfo)` | `System.Number` |
|  6.8% |  2.7ms | `UNMANAGED_CODE_TIME`                                                        | `<unknown>`     |

##### `TryParseNumber(!!0*&, !!0*, NumberStyles, NumberBuffer&, NumberFormatInfo)` (`System.Number`)

|     % |  Time | Callee                                          | Location        |
| ----: | ----: | ----------------------------------------------- | --------------- |
| 15.5% | 5.5ms | ``MatchChars(!!0*, !!0*, ReadOnlySpan`1<!!0>)`` | `System.Number` |

##### `FindValue(!0)` (``System.Collections.Generic.Dictionary`2[System.__Canon,System.__Canon]``)

|     % |  Time | Callee                       | Location        |
| ----: | ----: | ---------------------------- | --------------- |
| 28.2% | 9.5ms | `GetNonRandomizedHashCode()` | `System.String` |

##### `Add(Object)` (``System.Collections.Generic.List`1[System.__Canon].System.Collections.IList``)

|     % |  Time | Callee                          | Location                                              |
| ----: | ----: | ------------------------------- | ----------------------------------------------------- |
| 16.6% | 4.1ms | `AddWithResize(!0)`             | ``System.Collections.Generic.List`1[System.__Canon]`` |
|  5.5% | 1.3ms | `StelemRef(Array, int, Object)` | `System.Runtime.CompilerServices.CastHelpers`         |

##### ``GetOrAdd(!0, Func`2<!0, !1>)`` (``System.Collections.Concurrent.ConcurrentDictionary`2[System.__Canon,System.__Canon]``)

|     % |   Time | Callee                                        | Location                                                |
| ----: | -----: | --------------------------------------------- | ------------------------------------------------------- |
| 94.1% | 21.5ms | `CreateContract(Type)`                        | `Newtonsoft.Json.Serialization.DefaultContractResolver` |
| 17.7% |  4.0ms | `GetAttribute(Object)`                        | `Newtonsoft.Json.Serialization.JsonTypeReflector`       |
|  5.9% |  1.3ms | `UNMANAGED_CODE_TIME`                         | `<unknown>`                                             |
|  5.8% |  1.3ms | `GetAssociateMetadataTypeFromAttribute(Type)` | `Newtonsoft.Json.Serialization.JsonTypeReflector`       |

##### `TryRunDouble(float64, int32, NumberBuffer&)` (`System.Number+Grisu3`)

|     % |   Time | Callee                                                                                 | Location               |
| ----: | -----: | -------------------------------------------------------------------------------------- | ---------------------- |
| 68.5% | 14.7ms | ``TryDigitGenShortest(DiyFp&, DiyFp&, DiyFp&, Span`1<unsigned int8>, int32&, int32&)`` | `System.Number+Grisu3` |
|  6.3% |  1.4ms | `UNMANAGED_CODE_TIME`                                                                  | `<unknown>`            |
|  6.1% |  1.3ms | ``TryRunShortest(DiyFp&, DiyFp&, DiyFp&, Span`1<unsigned int8>, int32&, int32&)``      | `System.Number+Grisu3` |

##### `Append(wchar&, int32)` (`System.Text.StringBuilder`)

|    % |  Time | Callee                | Location    |
| ---: | ----: | --------------------- | ----------- |
| 7.1% | 1.2ms | `UNMANAGED_CODE_TIME` | `<unknown>` |

##### `EnsureDescriptorsInitialized()` (`System.Diagnostics.Tracing.EventSource`)

|     % |   Time | Callee                                                                          | Location                                 |
| ----: | -----: | ------------------------------------------------------------------------------- | ---------------------------------------- |
| 66.8% | 10.8ms | `CreateManifestAndDescriptors(Type, String, EventSource, EventManifestOptions)` | `System.Diagnostics.Tracing.EventSource` |
| 33.2% |  5.4ms | `DefineEventPipeEvents()`                                                       | `System.Diagnostics.Tracing.EventSource` |

##### `DoCommand(EventCommandEventArgs)` (`System.Diagnostics.Tracing.EventSource`)

|      % |   Time | Callee                           | Location                                 |
| -----: | -----: | -------------------------------- | ---------------------------------------- |
| 100.0% | 16.1ms | `EnsureDescriptorsInitialized()` | `System.Diagnostics.Tracing.EventSource` |

##### `Initialize(Guid, String, String[])` (`System.Diagnostics.Tracing.EventSource`)

|      % |   Time | Callee                             | Location                                 |
| -----: | -----: | ---------------------------------- | ---------------------------------------- |
| 100.0% | 16.1ms | `DoCommand(EventCommandEventArgs)` | `System.Diagnostics.Tracing.EventSource` |

##### `.ctor()` (`System.Diagnostics.Tracing.NativeRuntimeEventSource`)

|      % |   Time | Callee                               | Location                                 |
| -----: | -----: | ------------------------------------ | ---------------------------------------- |
| 100.0% | 16.1ms | `Initialize(Guid, String, String[])` | `System.Diagnostics.Tracing.EventSource` |

##### `.cctor()` (`System.Diagnostics.Tracing.NativeRuntimeEventSource`)

|      % |   Time | Callee    | Location                                              |
| -----: | -----: | --------- | ----------------------------------------------------- |
| 100.0% | 16.1ms | `.ctor()` | `System.Diagnostics.Tracing.NativeRuntimeEventSource` |

##### `StartAssemblyLoad(Guid&, Guid&)` (`System.Runtime.Loader.AssemblyLoadContext`)

|      % |   Time | Callee     | Location                                              |
| -----: | -----: | ---------- | ----------------------------------------------------- |
| 100.0% | 16.1ms | `.cctor()` | `System.Diagnostics.Tracing.NativeRuntimeEventSource` |

##### `IndexOf(!!0[], !!0, int32, int32)` (`System.Array`)

|      % |   Time | Callee                            | Location                                                                |
| -----: | -----: | --------------------------------- | ----------------------------------------------------------------------- |
| 100.0% | 16.0ms | `IndexOf(!0[], !0, int32, int32)` | ``System.Collections.Generic.ObjectEqualityComparer`1[System.__Canon]`` |

## Hottest call stacks

Call stacks ranked by time spent in their leaf frame.

Common call stack: `Main()` (`Profile.Program`)

|     % |    Time | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ----: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 24.5% |   1.16s | `ReadForType(JsonContract, bool)` (`Newtonsoft.Json.JsonReader`) ← `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`) ← `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `Deserialize(JsonReader, Type, bool)` ← `DeserializeInternal(JsonReader, Type)` (`Newtonsoft.Json.JsonSerializer`) ← `DeserializeObject(String, Type, JsonSerializerSettings)` (`Newtonsoft.Json.JsonConvert`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 12.6% | 598.1ms | `ReadForType(JsonContract, bool)` (`Newtonsoft.Json.JsonReader`) ← `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`) ← `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `PopulateList(IList, JsonReader, JsonArrayContract, JsonProperty, String)` ← `CreateList(JsonReader, Type, JsonContract, JsonProperty, Object, String)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` ← `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `Deserialize(JsonReader, Type, bool)` ← `DeserializeInternal(JsonReader, Type)` (`Newtonsoft.Json.JsonSerializer`) ← `DeserializeObject(String, Type, JsonSerializerSettings)` (`Newtonsoft.Json.JsonConvert`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 10.4% | 495.0ms | `CopyTo(Array, int32)` (``System.Collections.Generic.List`1[System.__Canon].System.Collections.ICollection``) ← `CreateList(JsonReader, Type, JsonContract, JsonProperty, Object, String)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`) ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` ← `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `Deserialize(JsonReader, Type, bool)` ← `DeserializeInternal(JsonReader, Type)` (`Newtonsoft.Json.JsonSerializer`) ← `DeserializeObject(String, Type, JsonSerializerSettings)` (`Newtonsoft.Json.JsonConvert`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  7.1% | 336.2ms | `CopyTo(Array, int32)` (``System.Collections.Generic.List`1[System.__Canon].System.Collections.ICollection``) ← `CreateList(JsonReader, Type, JsonContract, JsonProperty, Object, String)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`) ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` ← `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `PopulateList(IList, JsonReader, JsonArrayContract, JsonProperty, String)` ← `CreateList(JsonReader, Type, JsonContract, JsonProperty, Object, String)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` ← `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `Deserialize(JsonReader, Type, bool)` ← `DeserializeInternal(JsonReader, Type)` (`Newtonsoft.Json.JsonSerializer`) ← `DeserializeObject(String, Type, JsonSerializerSettings)` (`Newtonsoft.Json.JsonConvert`)                                                                                                                                                                                                                                                                                                                                             |
|  3.7% | 174.3ms | `SerializeObject(JsonWriter, Object, JsonObjectContract, JsonProperty, JsonContainerContract, JsonProperty)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`) ← `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)` ← `SerializeList(JsonWriter, IEnumerable, JsonArrayContract, JsonProperty, JsonContainerContract, JsonProperty)` ← `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)` ← `SerializeObject(JsonWriter, Object, JsonObjectContract, JsonProperty, JsonContainerContract, JsonProperty)` ← `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)` ← `Serialize(JsonWriter, Object, Type)` ← `SerializeInternal(JsonWriter, Object, Type)` (`Newtonsoft.Json.JsonSerializer`) ← `SerializeObjectInternal(Object, Type, JsonSerializer)` (`Newtonsoft.Json.JsonConvert`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  1.9% |  90.9ms | `SerializeObject(JsonWriter, Object, JsonObjectContract, JsonProperty, JsonContainerContract, JsonProperty)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`) ← `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)` ← `Serialize(JsonWriter, Object, Type)` ← `SerializeInternal(JsonWriter, Object, Type)` (`Newtonsoft.Json.JsonSerializer`) ← `SerializeObjectInternal(Object, Type, JsonSerializer)` (`Newtonsoft.Json.JsonConvert`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  1.9% |  90.5ms | `SerializeList(JsonWriter, IEnumerable, JsonArrayContract, JsonProperty, JsonContainerContract, JsonProperty)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`) ← `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)` ← `SerializeObject(JsonWriter, Object, JsonObjectContract, JsonProperty, JsonContainerContract, JsonProperty)` ← `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)` ← `Serialize(JsonWriter, Object, Type)` ← `SerializeInternal(JsonWriter, Object, Type)` (`Newtonsoft.Json.JsonSerializer`) ← `SerializeObjectInternal(Object, Type, JsonSerializer)` (`Newtonsoft.Json.JsonConvert`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  1.8% |  84.3ms | `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`) ← `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `PopulateList(IList, JsonReader, JsonArrayContract, JsonProperty, String)` ← `CreateList(JsonReader, Type, JsonContract, JsonProperty, Object, String)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` ← `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `Deserialize(JsonReader, Type, bool)` ← `DeserializeInternal(JsonReader, Type)` (`Newtonsoft.Json.JsonSerializer`) ← `DeserializeObject(String, Type, JsonSerializerSettings)` (`Newtonsoft.Json.JsonConvert`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  1.5% |  73.1ms | `ReadAsInt32()` (`Newtonsoft.Json.JsonTextReader`) ← `ReadForType(JsonContract, bool)` (`Newtonsoft.Json.JsonReader`) ← `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`) ← `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `Deserialize(JsonReader, Type, bool)` ← `DeserializeInternal(JsonReader, Type)` (`Newtonsoft.Json.JsonSerializer`) ← `Deserialize(JsonReader, Type)` ← `DeserializeObject(String, Type, JsonSerializerSettings)` (`Newtonsoft.Json.JsonConvert`) ← `DeserializeObject(String, JsonSerializerSettings)` ← `DeserializeObject(String)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  1.4% |  66.6ms | `SerializeList(JsonWriter, IEnumerable, JsonArrayContract, JsonProperty, JsonContainerContract, JsonProperty)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`) ← `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)` ← `SerializeObject(JsonWriter, Object, JsonObjectContract, JsonProperty, JsonContainerContract, JsonProperty)` ← `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)` ← `SerializeList(JsonWriter, IEnumerable, JsonArrayContract, JsonProperty, JsonContainerContract, JsonProperty)` ← `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)` ← `SerializeObject(JsonWriter, Object, JsonObjectContract, JsonProperty, JsonContainerContract, JsonProperty)` ← `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)` ← `Serialize(JsonWriter, Object, Type)` ← `SerializeInternal(JsonWriter, Object, Type)` (`Newtonsoft.Json.JsonSerializer`) ← `SerializeObjectInternal(Object, Type, JsonSerializer)` (`Newtonsoft.Json.JsonConvert`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  1.2% |  55.5ms | `ParseProperty()` (`Newtonsoft.Json.JsonTextReader`) ← `ParseObject()` ← `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`) ← `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `PopulateList(IList, JsonReader, JsonArrayContract, JsonProperty, String)` ← `CreateList(JsonReader, Type, JsonContract, JsonProperty, Object, String)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` ← `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `Deserialize(JsonReader, Type, bool)` ← `DeserializeInternal(JsonReader, Type)` (`Newtonsoft.Json.JsonSerializer`) ← `DeserializeObject(String, Type, JsonSerializerSettings)` (`Newtonsoft.Json.JsonConvert`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  1.1% |  52.1ms | `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`) ← `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `Deserialize(JsonReader, Type, bool)` ← `DeserializeInternal(JsonReader, Type)` (`Newtonsoft.Json.JsonSerializer`) ← `DeserializeObject(String, Type, JsonSerializerSettings)` (`Newtonsoft.Json.JsonConvert`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  0.8% |  39.5ms | `ReadNumberValue(ReadType)` (`Newtonsoft.Json.JsonTextReader`) ← `ReadForType(JsonContract, bool)` (`Newtonsoft.Json.JsonReader`) ← `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`) ← `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `Deserialize(JsonReader, Type, bool)` ← `DeserializeInternal(JsonReader, Type)` (`Newtonsoft.Json.JsonSerializer`) ← `DeserializeObject(String, Type, JsonSerializerSettings)` (`Newtonsoft.Json.JsonConvert`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  0.8% |  38.2ms | `ReadStringIntoBuffer(wchar)` (`Newtonsoft.Json.JsonTextReader`) ← `ReadStringValue(ReadType)` ← `ReadForType(JsonContract, bool)` (`Newtonsoft.Json.JsonReader`) ← `PopulateList(IList, JsonReader, JsonArrayContract, JsonProperty, String)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`) ← `CreateList(JsonReader, Type, JsonContract, JsonProperty, Object, String)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` ← `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `Deserialize(JsonReader, Type, bool)` ← `DeserializeInternal(JsonReader, Type)` (`Newtonsoft.Json.JsonSerializer`) ← `DeserializeObject(String, Type, JsonSerializerSettings)` (`Newtonsoft.Json.JsonConvert`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  0.8% |  38.0ms | `ReadForType(JsonContract, bool)` (`Newtonsoft.Json.JsonReader`) ← `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`) ← `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `Deserialize(JsonReader, Type, bool)` ← `DeserializeInternal(JsonReader, Type)` (`Newtonsoft.Json.JsonSerializer`) ← `Deserialize(JsonReader, Type)` ← `DeserializeObject(String, Type, JsonSerializerSettings)` (`Newtonsoft.Json.JsonConvert`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  0.7% |  32.8ms | `ReadStringIntoBuffer(wchar)` (`Newtonsoft.Json.JsonTextReader`) ← `ParseProperty()` ← `ParseObject()` ← `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`) ← `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `PopulateList(IList, JsonReader, JsonArrayContract, JsonProperty, String)` ← `CreateList(JsonReader, Type, JsonContract, JsonProperty, Object, String)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` ← `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `Deserialize(JsonReader, Type, bool)` ← `DeserializeInternal(JsonReader, Type)` (`Newtonsoft.Json.JsonSerializer`) ← `DeserializeObject(String, Type, JsonSerializerSettings)` (`Newtonsoft.Json.JsonConvert`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  0.7% |  31.3ms | `CopyTo(Array, int32)` (``System.Collections.Generic.List`1[System.__Canon].System.Collections.ICollection``) ← `CreateList(JsonReader, Type, JsonContract, JsonProperty, Object, String)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`) ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `SetPropertyValue(JsonProperty, JsonConverter, JsonContainerContract, JsonProperty, JsonReader, Object)` ← `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` ← `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `Deserialize(JsonReader, Type, bool)` ← `DeserializeInternal(JsonReader, Type)` (`Newtonsoft.Json.JsonSerializer`) ← `Deserialize(JsonReader, Type)` ← `DeserializeObject(String, Type, JsonSerializerSettings)` (`Newtonsoft.Json.JsonConvert`) ← `DeserializeObject(String, JsonSerializerSettings)` ← `DeserializeObject(String)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  0.6% |  28.4ms | `ParseReadNumber(ReadType, wchar, int32)` (`Newtonsoft.Json.JsonTextReader`) ← `ReadNumberValue(ReadType)` ← `ReadForType(JsonContract, bool)` (`Newtonsoft.Json.JsonReader`) ← `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`) ← `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `PopulateList(IList, JsonReader, JsonArrayContract, JsonProperty, String)` ← `CreateList(JsonReader, Type, JsonContract, JsonProperty, Object, String)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` ← `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `Deserialize(JsonReader, Type, bool)` ← `DeserializeInternal(JsonReader, Type)` (`Newtonsoft.Json.JsonSerializer`) ← `DeserializeObject(String, Type, JsonSerializerSettings)` (`Newtonsoft.Json.JsonConvert`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  0.5% |  26.1ms | `CopyTo(Array, int32)` (``System.Collections.Generic.List`1[System.__Canon].System.Collections.ICollection``) ← `CreateList(JsonReader, Type, JsonContract, JsonProperty, Object, String)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`) ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `SetPropertyValue(JsonProperty, JsonConverter, JsonContainerContract, JsonProperty, JsonReader, Object)` ← `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` ← `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `PopulateList(IList, JsonReader, JsonArrayContract, JsonProperty, String)` ← `CreateList(JsonReader, Type, JsonContract, JsonProperty, Object, String)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `SetPropertyValue(JsonProperty, JsonConverter, JsonContainerContract, JsonProperty, JsonReader, Object)` ← `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` ← `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `Deserialize(JsonReader, Type, bool)` ← `DeserializeInternal(JsonReader, Type)` (`Newtonsoft.Json.JsonSerializer`) ← `Deserialize(JsonReader, Type)` ← `DeserializeObject(String, Type, JsonSerializerSettings)` (`Newtonsoft.Json.JsonConvert`) ← `DeserializeObject(String, JsonSerializerSettings)` ← `DeserializeObject(String)` |
|  0.5% |  25.7ms | `PopulateList(IList, JsonReader, JsonArrayContract, JsonProperty, String)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`) ← `CreateList(JsonReader, Type, JsonContract, JsonProperty, Object, String)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` ← `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `Deserialize(JsonReader, Type, bool)` ← `DeserializeInternal(JsonReader, Type)` (`Newtonsoft.Json.JsonSerializer`) ← `DeserializeObject(String, Type, JsonSerializerSettings)` (`Newtonsoft.Json.JsonConvert`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |

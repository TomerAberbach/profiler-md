# Sampling profile

Took 4.72s.

| Category         |     % |    Time |
| ---------------- | ----: | ------: |
| Ours             | 72.6% |   3.43s |
| Standard library | 25.1% |   1.18s |
| Native           |  2.3% | 110.6ms |
| Unknown          | <0.1% |  <0.1µs |

## Hottest functions

### Self time

Functions ranked by time spent directly in the function body, excluding callees.

|     % |    Time | Function                                                                                                                       | Location                                                                             |
| ----: | ------: | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| 36.4% |   1.72s | `ReadForType(JsonContract, bool)`                                                                                              | `Newtonsoft.Json.JsonReader`                                                         |
| 17.9% | 846.1ms | `CopyTo(Array, int32)`                                                                                                         | ``System.Collections.Generic.List`1[System.__Canon].System.Collections.ICollection`` |
|  6.7% | 315.7ms | `SerializeObject(JsonWriter, Object, JsonObjectContract, JsonProperty, JsonContainerContract, JsonProperty)`                   | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`                         |
|  3.6% | 169.2ms | `SerializeList(JsonWriter, IEnumerable, JsonArrayContract, JsonProperty, JsonContainerContract, JsonProperty)`                 | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`                         |
|  3.1% | 147.9ms | `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)`                                                 | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader`                         |
|  2.5% | 120.1ms | `ReadStringIntoBuffer(wchar)`                                                                                                  | `Newtonsoft.Json.JsonTextReader`                                                     |
|  2.3% | 110.6ms | `UNMANAGED_CODE_TIME`                                                                                                          | `<unknown>`                                                                          |
|  2.0% |  94.9ms | `ReadAsInt32()`                                                                                                                | `Newtonsoft.Json.JsonTextReader`                                                     |
|  1.8% |  83.4ms | `ParseProperty()`                                                                                                              | `Newtonsoft.Json.JsonTextReader`                                                     |
|  1.5% |  69.9ms | ``WriteEscapedJavaScriptString(TextWriter, String, wchar, bool, bool[], StringEscapeHandling, IArrayPool`1<wchar>, wchar[]&)`` | `Newtonsoft.Json.Utilities.JavaScriptUtils`                                          |
|  1.4% |  68.2ms | `ReadNumberValue(ReadType)`                                                                                                    | `Newtonsoft.Json.JsonTextReader`                                                     |
|  1.1% |  54.1ms | `ParseValue()`                                                                                                                 | `Newtonsoft.Json.JsonTextReader`                                                     |
|  1.1% |  53.8ms | `PopulateList(IList, JsonReader, JsonArrayContract, JsonProperty, String)`                                                     | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader`                         |
|  1.1% |  51.3ms | `ParseReadNumber(ReadType, wchar, int32)`                                                                                      | `Newtonsoft.Json.JsonTextReader`                                                     |
|  1.0% |  48.6ms | `SetToken(JsonToken, Object, bool)`                                                                                            | `Newtonsoft.Json.JsonReader`                                                         |
|  0.9% |  43.0ms | `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)`                          | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`                         |
|  0.9% |  41.5ms | `FindValue(!0)`                                                                                                                | ``System.Collections.Generic.Dictionary`2[System.__Canon,System.__Canon]``           |
|  0.9% |  40.3ms | `ReadStringValue(ReadType)`                                                                                                    | `Newtonsoft.Json.JsonTextReader`                                                     |
|  0.8% |  36.6ms | `Read()`                                                                                                                       | `Newtonsoft.Json.JsonTextReader`                                                     |
|  0.7% |  33.8ms | `TryParseNumber(!!0*&, !!0*, NumberStyles, NumberBuffer&, NumberFormatInfo)`                                                   | `System.Number`                                                                      |

#### Categories

##### Ours

|     % |    Time | Function                                                                                                                       | Location                                                     |
| ----: | ------: | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------ |
| 36.4% |   1.72s | `ReadForType(JsonContract, bool)`                                                                                              | `Newtonsoft.Json.JsonReader`                                 |
|  6.7% | 315.7ms | `SerializeObject(JsonWriter, Object, JsonObjectContract, JsonProperty, JsonContainerContract, JsonProperty)`                   | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |
|  3.6% | 169.2ms | `SerializeList(JsonWriter, IEnumerable, JsonArrayContract, JsonProperty, JsonContainerContract, JsonProperty)`                 | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |
|  3.1% | 147.9ms | `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)`                                                 | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |
|  2.5% | 120.1ms | `ReadStringIntoBuffer(wchar)`                                                                                                  | `Newtonsoft.Json.JsonTextReader`                             |
|  2.0% |  94.9ms | `ReadAsInt32()`                                                                                                                | `Newtonsoft.Json.JsonTextReader`                             |
|  1.8% |  83.4ms | `ParseProperty()`                                                                                                              | `Newtonsoft.Json.JsonTextReader`                             |
|  1.5% |  69.9ms | ``WriteEscapedJavaScriptString(TextWriter, String, wchar, bool, bool[], StringEscapeHandling, IArrayPool`1<wchar>, wchar[]&)`` | `Newtonsoft.Json.Utilities.JavaScriptUtils`                  |
|  1.4% |  68.2ms | `ReadNumberValue(ReadType)`                                                                                                    | `Newtonsoft.Json.JsonTextReader`                             |
|  1.1% |  54.1ms | `ParseValue()`                                                                                                                 | `Newtonsoft.Json.JsonTextReader`                             |
|  1.1% |  53.8ms | `PopulateList(IList, JsonReader, JsonArrayContract, JsonProperty, String)`                                                     | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |
|  1.1% |  51.3ms | `ParseReadNumber(ReadType, wchar, int32)`                                                                                      | `Newtonsoft.Json.JsonTextReader`                             |
|  1.0% |  48.6ms | `SetToken(JsonToken, Object, bool)`                                                                                            | `Newtonsoft.Json.JsonReader`                                 |
|  0.9% |  43.0ms | `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)`                          | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |
|  0.9% |  40.3ms | `ReadStringValue(ReadType)`                                                                                                    | `Newtonsoft.Json.JsonTextReader`                             |
|  0.8% |  36.6ms | `Read()`                                                                                                                       | `Newtonsoft.Json.JsonTextReader`                             |
|  0.6% |  29.9ms | `WriteValue(JsonWriter, PrimitiveTypeCode, Object)`                                                                            | `Newtonsoft.Json.JsonWriter`                                 |
|  0.6% |  29.7ms | `ParsePostValue(bool)`                                                                                                         | `Newtonsoft.Json.JsonTextReader`                             |
|  0.4% |  20.2ms | `ReadAsDouble()`                                                                                                               | `Newtonsoft.Json.JsonTextReader`                             |
|  0.4% |  18.9ms | `EnsureType(JsonReader, Object, CultureInfo, JsonContract, Type)`                                                              | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |

##### Standard library

|     % |    Time | Function                                                                                         | Location                                                                                |
| ----: | ------: | ------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------- |
| 17.9% | 846.1ms | `CopyTo(Array, int32)`                                                                           | ``System.Collections.Generic.List`1[System.__Canon].System.Collections.ICollection``    |
|  0.9% |  41.5ms | `FindValue(!0)`                                                                                  | ``System.Collections.Generic.Dictionary`2[System.__Canon,System.__Canon]``              |
|  0.7% |  33.8ms | `TryParseNumber(!!0*&, !!0*, NumberStyles, NumberBuffer&, NumberFormatInfo)`                     | `System.Number`                                                                         |
|  0.7% |  32.5ms | `Memmove(unsigned int8&, unsigned int8&, unsigned int)`                                          | `System.Buffer`                                                                         |
|  0.6% |  28.6ms | ``TryDigitGenShortest(DiyFp&, DiyFp&, DiyFp&, Span`1<unsigned int8>, int32&, int32&)``           | `System.Number+Grisu3`                                                                  |
|  0.5% |  23.2ms | `Add(Object)`                                                                                    | ``System.Collections.Generic.List`1[System.__Canon].System.Collections.IList``          |
|  0.3% |  16.1ms | `IsInstanceOfInterface(void*, Object)`                                                           | `System.Runtime.CompilerServices.CastHelpers`                                           |
|  0.3% |  16.1ms | ``FormatDouble(ValueListBuilder`1<!!0>&, float64, ReadOnlySpan`1<wchar>, NumberFormatInfo)``     | `System.Number`                                                                         |
|  0.3% |  12.3ms | `FormatDouble(float64, String, NumberFormatInfo)`                                                | `System.Number`                                                                         |
|  0.3% |  12.2ms | `IndexOf(!0[], !0, int32, int32)`                                                                | ``System.Collections.Generic.ObjectEqualityComparer`1[System.__Canon]``                 |
|  0.3% |  12.1ms | `IsInstance_Helper(void*, Object)`                                                               | `System.Runtime.CompilerServices.CastHelpers`                                           |
|  0.3% |  12.1ms | ``FormatGeneral(ValueListBuilder`1<!!0>&, NumberBuffer&, int32, NumberFormatInfo, wchar, bool)`` | `System.Number`                                                                         |
|  0.3% |  11.9ms | `NonPackedIndexOfValueType(!!0&, !!0, int32)`                                                    | `System.SpanHelpers`                                                                    |
|  0.2% |  10.8ms | `GetNonRandomizedHashCode()`                                                                     | `System.String`                                                                         |
|  0.2% |  10.8ms | `TryGetValueInternal(Tables<!0, !1>, !0, int32, !1&)`                                            | ``System.Collections.Concurrent.ConcurrentDictionary`2[System.__Canon,System.__Canon]`` |
|  0.2% |   9.4ms | `Append(wchar&, int32)`                                                                          | `System.Text.StringBuilder`                                                             |
|  0.2% |   8.3ms | `ChkCastInterface(void*, Object)`                                                                | `System.Runtime.CompilerServices.CastHelpers`                                           |
|  0.2% |   8.1ms | `RoundNumber(NumberBuffer&, int32, bool)`                                                        | `System.Number`                                                                         |
|  0.2% |   8.1ms | `StelemRef(Array, int, Object)`                                                                  | `System.Runtime.CompilerServices.CastHelpers`                                           |
|  0.1% |   6.7ms | `Copy(Array, int32, Array, int32, int32)`                                                        | `System.Array`                                                                          |

##### Native

|    % |    Time | Function              | Location    |
| ---: | ------: | --------------------- | ----------- |
| 2.3% | 110.6ms | `UNMANAGED_CODE_TIME` | `<unknown>` |

#### Callers

Callers ranked by contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `ReadForType(JsonContract, bool)` (`Newtonsoft.Json.JsonReader`)

|     % |  Time | Caller                                                                         | Location                                                     |
| ----: | ----: | ------------------------------------------------------------------------------ | ------------------------------------------------------------ |
| 99.8% | 1.71s | `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |
|  0.2% | 4.1ms | `PopulateList(IList, JsonReader, JsonArrayContract, JsonProperty, String)`     | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |

##### `CopyTo(Array, int32)` (``System.Collections.Generic.List`1[System.__Canon].System.Collections.ICollection``)

|      % |    Time | Caller                                                                     | Location                                                     |
| -----: | ------: | -------------------------------------------------------------------------- | ------------------------------------------------------------ |
| 100.0% | 846.1ms | `CreateList(JsonReader, Type, JsonContract, JsonProperty, Object, String)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |

##### `SerializeObject(JsonWriter, Object, JsonObjectContract, JsonProperty, JsonContainerContract, JsonProperty)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`)

|      % |    Time | Caller                                                                                                | Location                                                     |
| -----: | ------: | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| 100.0% | 315.7ms | `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |

##### `SerializeList(JsonWriter, IEnumerable, JsonArrayContract, JsonProperty, JsonContainerContract, JsonProperty)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`)

|      % |    Time | Caller                                                                                                | Location                                                     |
| -----: | ------: | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| 100.0% | 169.2ms | `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |

##### `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`)

|      % |    Time | Caller                                                                                                    | Location                                                     |
| -----: | ------: | --------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| 100.0% | 147.9ms | `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |

##### `ReadStringIntoBuffer(wchar)` (`Newtonsoft.Json.JsonTextReader`)

|     % |   Time | Caller                         | Location                         |
| ----: | -----: | ------------------------------ | -------------------------------- |
| 58.5% | 70.2ms | `ReadStringValue(ReadType)`    | `Newtonsoft.Json.JsonTextReader` |
| 39.3% | 47.2ms | `ParseProperty()`              | `Newtonsoft.Json.JsonTextReader` |
|  2.2% |  2.6ms | `ParseString(wchar, ReadType)` | `Newtonsoft.Json.JsonTextReader` |

##### `UNMANAGED_CODE_TIME` (`<unknown>`)

|    % |  Time | Caller                                                 | Location                                                               |
| ---: | ----: | ------------------------------------------------------ | ---------------------------------------------------------------------- |
| 6.3% | 7.0ms | `Node()`                                               | `dynamicClass.CreateProfile`                                           |
| 4.8% | 5.4ms | ``GetMatchingConverter(IList`1<JsonConverter>, Type)`` | `Newtonsoft.Json.JsonSerializer`                                       |
| 4.8% | 5.3ms | ``PickPivotAndPartition(Span`1<!0>)``                  | ``System.Collections.Generic.GenericArraySortHelper`1[System.UInt64]`` |
| 3.7% | 4.1ms | `ToString()`                                           | `System.Text.StringBuilder`                                            |
| 3.6% | 4.0ms | `CreateContract(Type)`                                 | `Newtonsoft.Json.Serialization.DefaultContractResolver`                |

##### `ReadAsInt32()` (`Newtonsoft.Json.JsonTextReader`)

|      % |   Time | Caller                            | Location                     |
| -----: | -----: | --------------------------------- | ---------------------------- |
| 100.0% | 94.9ms | `ReadForType(JsonContract, bool)` | `Newtonsoft.Json.JsonReader` |

##### `ParseProperty()` (`Newtonsoft.Json.JsonTextReader`)

|      % |   Time | Caller          | Location                         |
| -----: | -----: | --------------- | -------------------------------- |
| 100.0% | 83.4ms | `ParseObject()` | `Newtonsoft.Json.JsonTextReader` |

##### ``WriteEscapedJavaScriptString(TextWriter, String, wchar, bool, bool[], StringEscapeHandling, IArrayPool`1<wchar>, wchar[]&)`` (`Newtonsoft.Json.Utilities.JavaScriptUtils`)

|     % |   Time | Caller                                              | Location                         |
| ----: | -----: | --------------------------------------------------- | -------------------------------- |
| 98.1% | 68.5ms | `WriteValue(JsonWriter, PrimitiveTypeCode, Object)` | `Newtonsoft.Json.JsonWriter`     |
|  1.9% |  1.4ms | `WriteEscapedString(String, bool)`                  | `Newtonsoft.Json.JsonTextWriter` |

##### `ReadNumberValue(ReadType)` (`Newtonsoft.Json.JsonTextReader`)

|      % |   Time | Caller                            | Location                     |
| -----: | -----: | --------------------------------- | ---------------------------- |
| 100.0% | 68.2ms | `ReadForType(JsonContract, bool)` | `Newtonsoft.Json.JsonReader` |

##### `ParseValue()` (`Newtonsoft.Json.JsonTextReader`)

|     % |   Time | Caller                            | Location                         |
| ----: | -----: | --------------------------------- | -------------------------------- |
| 97.5% | 52.8ms | `ReadForType(JsonContract, bool)` | `Newtonsoft.Json.JsonReader`     |
|  2.5% |  1.4ms | `Read()`                          | `Newtonsoft.Json.JsonTextReader` |

##### `PopulateList(IList, JsonReader, JsonArrayContract, JsonProperty, String)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`)

|      % |   Time | Caller                                                                     | Location                                                     |
| -----: | -----: | -------------------------------------------------------------------------- | ------------------------------------------------------------ |
| 100.0% | 53.8ms | `CreateList(JsonReader, Type, JsonContract, JsonProperty, Object, String)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |

##### `ParseReadNumber(ReadType, wchar, int32)` (`Newtonsoft.Json.JsonTextReader`)

|     % |   Time | Caller                      | Location                         |
| ----: | -----: | --------------------------- | -------------------------------- |
| 94.8% | 48.6ms | `ReadNumberValue(ReadType)` | `Newtonsoft.Json.JsonTextReader` |
|  5.2% |  2.7ms | `ParseNumber(ReadType)`     | `Newtonsoft.Json.JsonTextReader` |

##### `SetToken(JsonToken, Object, bool)` (`Newtonsoft.Json.JsonReader`)

|     % |   Time | Caller                                    | Location                         |
| ----: | -----: | ----------------------------------------- | -------------------------------- |
| 30.3% | 14.7ms | `ParseProperty()`                         | `Newtonsoft.Json.JsonTextReader` |
| 27.9% | 13.6ms | `ParseReadString(wchar, ReadType)`        | `Newtonsoft.Json.JsonTextReader` |
| 14.0% |  6.8ms | `ParsePostValue(bool)`                    | `Newtonsoft.Json.JsonTextReader` |
| 13.9% |  6.7ms | `ParseValue()`                            | `Newtonsoft.Json.JsonTextReader` |
|  8.4% |  4.1ms | `ParseReadNumber(ReadType, wchar, int32)` | `Newtonsoft.Json.JsonTextReader` |

##### `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`)

|     % |   Time | Caller                                                                                                         | Location                                                     |
| ----: | -----: | -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| 55.9% | 24.0ms | `SerializeObject(JsonWriter, Object, JsonObjectContract, JsonProperty, JsonContainerContract, JsonProperty)`   | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |
| 44.1% | 18.9ms | `SerializeList(JsonWriter, IEnumerable, JsonArrayContract, JsonProperty, JsonContainerContract, JsonProperty)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |

##### `FindValue(!0)` (``System.Collections.Generic.Dictionary`2[System.__Canon,System.__Canon]``)

|      % |   Time | Caller                                                                         | Location                                                     |
| -----: | -----: | ------------------------------------------------------------------------------ | ------------------------------------------------------------ |
| 100.0% | 41.5ms | `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |

##### `ReadStringValue(ReadType)` (`Newtonsoft.Json.JsonTextReader`)

|      % |   Time | Caller                            | Location                     |
| -----: | -----: | --------------------------------- | ---------------------------- |
| 100.0% | 40.3ms | `ReadForType(JsonContract, bool)` | `Newtonsoft.Json.JsonReader` |

##### `Read()` (`Newtonsoft.Json.JsonTextReader`)

|     % |   Time | Caller                                                                                                    | Location                                                     |
| ----: | -----: | --------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| 55.8% | 20.4ms | `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)`                            | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |
| 29.3% | 10.7ms | `ReadForType(JsonContract, bool)`                                                                         | `Newtonsoft.Json.JsonReader`                                 |
| 11.3% |  4.1ms | `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |
|  3.7% |  1.3ms | `Deserialize(JsonReader, Type, bool)`                                                                     | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |

##### `TryParseNumber(!!0*&, !!0*, NumberStyles, NumberBuffer&, NumberFormatInfo)` (`System.Number`)

|      % |   Time | Caller                                                                       | Location        |
| -----: | -----: | ---------------------------------------------------------------------------- | --------------- |
| 100.0% | 33.8ms | ``TryParseFloat(ReadOnlySpan`1<!!0>, NumberStyles, NumberFormatInfo, !!1&)`` | `System.Number` |

##### `Memmove(unsigned int8&, unsigned int8&, unsigned int)` (`System.Buffer`)

|     % |  Time | Caller                                                                                                                         | Location                                                     |
| ----: | ----: | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------ |
| 29.7% | 9.7ms | `Read(wchar[], int32, int32)`                                                                                                  | `System.IO.StringReader`                                     |
| 20.8% | 6.7ms | `ToString()`                                                                                                                   | `System.Text.StringBuilder`                                  |
| 16.2% | 5.3ms | `Write(String)`                                                                                                                | `System.IO.StringWriter`                                     |
| 12.5% | 4.1ms | `SerializeObject(JsonWriter, Object, JsonObjectContract, JsonProperty, JsonContainerContract, JsonProperty)`                   | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |
|  8.4% | 2.7ms | ``WriteEscapedJavaScriptString(TextWriter, String, wchar, bool, bool[], StringEscapeHandling, IArrayPool`1<wchar>, wchar[]&)`` | `Newtonsoft.Json.Utilities.JavaScriptUtils`                  |

##### `WriteValue(JsonWriter, PrimitiveTypeCode, Object)` (`Newtonsoft.Json.JsonWriter`)

|     % |   Time | Caller                                                                                                             | Location                                                     |
| ----: | -----: | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------ |
| 91.4% | 27.3ms | `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)`              | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |
|  8.6% |  2.6ms | `SerializePrimitive(JsonWriter, Object, JsonPrimitiveContract, JsonProperty, JsonContainerContract, JsonProperty)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |

##### `ParsePostValue(bool)` (`Newtonsoft.Json.JsonTextReader`)

|     % |   Time | Caller                      | Location                         |
| ----: | -----: | --------------------------- | -------------------------------- |
| 59.2% | 17.6ms | `Read()`                    | `Newtonsoft.Json.JsonTextReader` |
| 40.8% | 12.1ms | `ReadStringValue(ReadType)` | `Newtonsoft.Json.JsonTextReader` |

##### ``TryDigitGenShortest(DiyFp&, DiyFp&, DiyFp&, Span`1<unsigned int8>, int32&, int32&)`` (`System.Number+Grisu3`)

|      % |   Time | Caller                                        | Location               |
| -----: | -----: | --------------------------------------------- | ---------------------- |
| 100.0% | 28.6ms | `TryRunDouble(float64, int32, NumberBuffer&)` | `System.Number+Grisu3` |

##### `Add(Object)` (``System.Collections.Generic.List`1[System.__Canon].System.Collections.IList``)

|      % |   Time | Caller                                                                     | Location                                                     |
| -----: | -----: | -------------------------------------------------------------------------- | ------------------------------------------------------------ |
| 100.0% | 23.2ms | `PopulateList(IList, JsonReader, JsonArrayContract, JsonProperty, String)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |

##### `ReadAsDouble()` (`Newtonsoft.Json.JsonTextReader`)

|      % |   Time | Caller                            | Location                     |
| -----: | -----: | --------------------------------- | ---------------------------- |
| 100.0% | 20.2ms | `ReadForType(JsonContract, bool)` | `Newtonsoft.Json.JsonReader` |

##### `EnsureType(JsonReader, Object, CultureInfo, JsonContract, Type)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`)

|      % |   Time | Caller                                                                                                           | Location                                                     |
| -----: | -----: | ---------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| 100.0% | 18.9ms | `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |

##### `IsInstanceOfInterface(void*, Object)` (`System.Runtime.CompilerServices.CastHelpers`)

|     % |   Time | Caller                                                                                                         | Location                                                     |
| ----: | -----: | -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| 66.2% | 10.7ms | `SerializeList(JsonWriter, IEnumerable, JsonArrayContract, JsonProperty, JsonContainerContract, JsonProperty)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |
| 33.8% |  5.5ms | `PopulateList(IList, JsonReader, JsonArrayContract, JsonProperty, String)`                                     | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |

##### ``FormatDouble(ValueListBuilder`1<!!0>&, float64, ReadOnlySpan`1<wchar>, NumberFormatInfo)`` (`System.Number`)

|      % |   Time | Caller                                            | Location        |
| -----: | -----: | ------------------------------------------------- | --------------- |
| 100.0% | 16.1ms | `FormatDouble(float64, String, NumberFormatInfo)` | `System.Number` |

##### `FormatDouble(float64, String, NumberFormatInfo)` (`System.Number`)

|      % |   Time | Caller                | Location                         |
| -----: | -----: | --------------------- | -------------------------------- |
| 100.0% | 12.3ms | `WriteValue(float64)` | `Newtonsoft.Json.JsonTextWriter` |

##### `IndexOf(!0[], !0, int32, int32)` (``System.Collections.Generic.ObjectEqualityComparer`1[System.__Canon]``)

|      % |   Time | Caller                              | Location       |
| -----: | -----: | ----------------------------------- | -------------- |
| 100.0% | 12.2ms | `IndexOf(!!0[], !!0, int32, int32)` | `System.Array` |

##### `IsInstance_Helper(void*, Object)` (`System.Runtime.CompilerServices.CastHelpers`)

|      % |   Time | Caller                                                                                                         | Location                                                     |
| -----: | -----: | -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| 100.0% | 12.1ms | `SerializeList(JsonWriter, IEnumerable, JsonArrayContract, JsonProperty, JsonContainerContract, JsonProperty)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |

##### ``FormatGeneral(ValueListBuilder`1<!!0>&, NumberBuffer&, int32, NumberFormatInfo, wchar, bool)`` (`System.Number`)

|      % |   Time | Caller                                                                                      | Location        |
| -----: | -----: | ------------------------------------------------------------------------------------------- | --------------- |
| 100.0% | 12.1ms | ``NumberToString(ValueListBuilder`1<!!0>&, NumberBuffer&, wchar, int32, NumberFormatInfo)`` | `System.Number` |

##### `NonPackedIndexOfValueType(!!0&, !!0, int32)` (`System.SpanHelpers`)

|      % |   Time | Caller                                | Location                      |
| -----: | -----: | ------------------------------------- | ----------------------------- |
| 100.0% | 11.9ms | `EnsureDecimalPlace(float64, String)` | `Newtonsoft.Json.JsonConvert` |

##### `GetNonRandomizedHashCode()` (`System.String`)

|      % |   Time | Caller          | Location                                                                   |
| -----: | -----: | --------------- | -------------------------------------------------------------------------- |
| 100.0% | 10.8ms | `FindValue(!0)` | ``System.Collections.Generic.Dictionary`2[System.__Canon,System.__Canon]`` |

##### `TryGetValueInternal(Tables<!0, !1>, !0, int32, !1&)` (``System.Collections.Concurrent.ConcurrentDictionary`2[System.__Canon,System.__Canon]``)

|     % |  Time | Caller                                                                                                         | Location                                                                                |
| ----: | ----: | -------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| 36.9% | 4.0ms | ``GetOrAdd(!0, Func`2<!0, !1>)``                                                                               | ``System.Collections.Concurrent.ConcurrentDictionary`2[System.__Canon,System.__Canon]`` |
| 25.4% | 2.7ms | `Serialize(JsonWriter, Object, Type)`                                                                          | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`                            |
| 25.3% | 2.7ms | `Deserialize(JsonReader, Type, bool)`                                                                          | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader`                            |
| 12.4% | 1.3ms | `SerializeList(JsonWriter, IEnumerable, JsonArrayContract, JsonProperty, JsonContainerContract, JsonProperty)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`                            |

##### `Append(wchar&, int32)` (`System.Text.StringBuilder`)

|      % |  Time | Caller        | Location                         |
| -----: | ----: | ------------- | -------------------------------- |
| 100.0% | 9.4ms | `WriteNull()` | `Newtonsoft.Json.JsonTextWriter` |

##### `ChkCastInterface(void*, Object)` (`System.Runtime.CompilerServices.CastHelpers`)

|     % |  Time | Caller                                                                                                | Location                                                     |
| ----: | ----: | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| 66.8% | 5.5ms | `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |
| 33.2% | 2.7ms | `CreateTemporaryCollection()`                                                                         | `Newtonsoft.Json.Serialization.JsonArrayContract`            |

##### `RoundNumber(NumberBuffer&, int32, bool)` (`System.Number`)

|      % |  Time | Caller                                                                                      | Location        |
| -----: | ----: | ------------------------------------------------------------------------------------------- | --------------- |
| 100.0% | 8.1ms | ``NumberToString(ValueListBuilder`1<!!0>&, NumberBuffer&, wchar, int32, NumberFormatInfo)`` | `System.Number` |

##### `StelemRef(Array, int, Object)` (`System.Runtime.CompilerServices.CastHelpers`)

|     % |  Time | Caller                                                                                                         | Location                                                                       |
| ----: | ----: | -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| 33.8% | 2.7ms | `SerializeList(JsonWriter, IEnumerable, JsonArrayContract, JsonProperty, JsonContainerContract, JsonProperty)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`                   |
| 33.2% | 2.7ms | `AddWithResize(!0)`                                                                                            | ``System.Collections.Generic.List`1[System.__Canon]``                          |
| 33.0% | 2.7ms | `Add(Object)`                                                                                                  | ``System.Collections.Generic.List`1[System.__Canon].System.Collections.IList`` |

##### `Copy(Array, int32, Array, int32, int32)` (`System.Array`)

|      % |  Time | Caller                 | Location                                                                             |
| -----: | ----: | ---------------------- | ------------------------------------------------------------------------------------ |
| 100.0% | 6.7ms | `CopyTo(Array, int32)` | ``System.Collections.Generic.List`1[System.__Canon].System.Collections.ICollection`` |

### Total time

Functions ranked by total time spent in the function and all its callees.

|     % |    Time | Function                                                                                                         | Location                                                                             |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| 99.6% |   4.70s | `Main()`                                                                                                         | `Profile.Program`                                                                    |
| 79.1% |   3.73s | `DeserializeObject(String, Type, JsonSerializerSettings)`                                                        | `Newtonsoft.Json.JsonConvert`                                                        |
| 78.9% |   3.73s | `DeserializeInternal(JsonReader, Type)`                                                                          | `Newtonsoft.Json.JsonSerializer`                                                     |
| 78.8% |   3.72s | `Deserialize(JsonReader, Type, bool)`                                                                            | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader`                         |
| 77.7% |   3.67s | `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader`                         |
| 77.7% |   3.67s | `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)`        | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader`                         |
| 77.2% |   3.64s | `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)`                                   | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader`                         |
| 48.1% |   2.27s | `ReadForType(JsonContract, bool)`                                                                                | `Newtonsoft.Json.JsonReader`                                                         |
| 45.0% |   2.12s | `CreateList(JsonReader, Type, JsonContract, JsonProperty, Object, String)`                                       | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader`                         |
| 34.0% |   1.60s | `PopulateList(IList, JsonReader, JsonArrayContract, JsonProperty, String)`                                       | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader`                         |
| 20.2% | 953.7ms | `SerializeObjectInternal(Object, Type, JsonSerializer)`                                                          | `Newtonsoft.Json.JsonConvert`                                                        |
| 19.7% | 932.4ms | `SerializeInternal(JsonWriter, Object, Type)`                                                                    | `Newtonsoft.Json.JsonSerializer`                                                     |
| 19.7% | 931.1ms | `Serialize(JsonWriter, Object, Type)`                                                                            | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`                         |
| 19.1% | 900.3ms | `SerializeObject(JsonWriter, Object, JsonObjectContract, JsonProperty, JsonContainerContract, JsonProperty)`     | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`                         |
| 19.1% | 900.3ms | `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)`            | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`                         |
| 18.0% | 852.8ms | `CopyTo(Array, int32)`                                                                                           | ``System.Collections.Generic.List`1[System.__Canon].System.Collections.ICollection`` |
| 13.9% | 657.0ms | `SerializeList(JsonWriter, IEnumerable, JsonArrayContract, JsonProperty, JsonContainerContract, JsonProperty)`   | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`                         |
|  6.9% | 328.4ms | `Deserialize(JsonReader, Type)`                                                                                  | `Newtonsoft.Json.JsonSerializer`                                                     |
|  5.1% | 240.0ms | `WriteValue(JsonWriter, PrimitiveTypeCode, Object)`                                                              | `Newtonsoft.Json.JsonWriter`                                                         |
|  4.8% | 226.0ms | `DeserializeObject(String, JsonSerializerSettings)`                                                              | `Newtonsoft.Json.JsonConvert`                                                        |

#### Categories

##### Ours

|     % |    Time | Function                                                                                                         | Location                                                     |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| 99.6% |   4.70s | `Main()`                                                                                                         | `Profile.Program`                                            |
| 79.1% |   3.73s | `DeserializeObject(String, Type, JsonSerializerSettings)`                                                        | `Newtonsoft.Json.JsonConvert`                                |
| 78.9% |   3.73s | `DeserializeInternal(JsonReader, Type)`                                                                          | `Newtonsoft.Json.JsonSerializer`                             |
| 78.8% |   3.72s | `Deserialize(JsonReader, Type, bool)`                                                                            | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |
| 77.7% |   3.67s | `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |
| 77.7% |   3.67s | `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)`        | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |
| 77.2% |   3.64s | `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)`                                   | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |
| 48.1% |   2.27s | `ReadForType(JsonContract, bool)`                                                                                | `Newtonsoft.Json.JsonReader`                                 |
| 45.0% |   2.12s | `CreateList(JsonReader, Type, JsonContract, JsonProperty, Object, String)`                                       | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |
| 34.0% |   1.60s | `PopulateList(IList, JsonReader, JsonArrayContract, JsonProperty, String)`                                       | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |
| 20.2% | 953.7ms | `SerializeObjectInternal(Object, Type, JsonSerializer)`                                                          | `Newtonsoft.Json.JsonConvert`                                |
| 19.7% | 932.4ms | `SerializeInternal(JsonWriter, Object, Type)`                                                                    | `Newtonsoft.Json.JsonSerializer`                             |
| 19.7% | 931.1ms | `Serialize(JsonWriter, Object, Type)`                                                                            | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |
| 19.1% | 900.3ms | `SerializeObject(JsonWriter, Object, JsonObjectContract, JsonProperty, JsonContainerContract, JsonProperty)`     | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |
| 19.1% | 900.3ms | `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)`            | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |
| 13.9% | 657.0ms | `SerializeList(JsonWriter, IEnumerable, JsonArrayContract, JsonProperty, JsonContainerContract, JsonProperty)`   | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |
|  6.9% | 328.4ms | `Deserialize(JsonReader, Type)`                                                                                  | `Newtonsoft.Json.JsonSerializer`                             |
|  5.1% | 240.0ms | `WriteValue(JsonWriter, PrimitiveTypeCode, Object)`                                                              | `Newtonsoft.Json.JsonWriter`                                 |
|  4.8% | 226.0ms | `DeserializeObject(String, JsonSerializerSettings)`                                                              | `Newtonsoft.Json.JsonConvert`                                |
|  4.8% | 226.0ms | `DeserializeObject(String)`                                                                                      | `Newtonsoft.Json.JsonConvert`                                |

##### Standard library

|     % |    Time | Function                                                                                     | Location                                                                                |
| ----: | ------: | -------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| 18.0% | 852.8ms | `CopyTo(Array, int32)`                                                                       | ``System.Collections.Generic.List`1[System.__Canon].System.Collections.ICollection``    |
|  1.7% |  82.7ms | `FormatDouble(float64, String, NumberFormatInfo)`                                            | `System.Number`                                                                         |
|  1.5% |  69.0ms | ``FormatDouble(ValueListBuilder`1<!!0>&, float64, ReadOnlySpan`1<wchar>, NumberFormatInfo)`` | `System.Number`                                                                         |
|  1.1% |  53.7ms | `FindValue(!0)`                                                                              | ``System.Collections.Generic.Dictionary`2[System.__Canon,System.__Canon]``              |
|  0.9% |  40.5ms | ``TryParseFloat(ReadOnlySpan`1<!!0>, NumberStyles, NumberFormatInfo, !!1&)``                 | `System.Number`                                                                         |
|  0.8% |  37.8ms | `TryParseNumber(!!0*&, !!0*, NumberStyles, NumberBuffer&, NumberFormatInfo)`                 | `System.Number`                                                                         |
|  0.7% |  32.5ms | `Memmove(unsigned int8&, unsigned int8&, unsigned int)`                                      | `System.Buffer`                                                                         |
|  0.7% |  31.3ms | `Add(Object)`                                                                                | ``System.Collections.Generic.List`1[System.__Canon].System.Collections.IList``          |
|  0.7% |  31.3ms | `TryRunDouble(float64, int32, NumberBuffer&)`                                                | `System.Number+Grisu3`                                                                  |
|  0.6% |  29.4ms | ``GetOrAdd(!0, Func`2<!0, !1>)``                                                             | ``System.Collections.Concurrent.ConcurrentDictionary`2[System.__Canon,System.__Canon]`` |
|  0.6% |  28.6ms | ``TryDigitGenShortest(DiyFp&, DiyFp&, DiyFp&, Span`1<unsigned int8>, int32&, int32&)``       | `System.Number+Grisu3`                                                                  |
|  0.4% |  20.2ms | ``NumberToString(ValueListBuilder`1<!!0>&, NumberBuffer&, wchar, int32, NumberFormatInfo)``  | `System.Number`                                                                         |
|  0.3% |  16.1ms | `IsInstanceOfInterface(void*, Object)`                                                       | `System.Runtime.CompilerServices.CastHelpers`                                           |
|  0.3% |  14.7ms | `CreateManifestAndDescriptors(Type, String, EventSource, EventManifestOptions)`              | `System.Diagnostics.Tracing.EventSource`                                                |
|  0.3% |  14.7ms | `EnsureDescriptorsInitialized()`                                                             | `System.Diagnostics.Tracing.EventSource`                                                |
|  0.3% |  14.7ms | `DoCommand(EventCommandEventArgs)`                                                           | `System.Diagnostics.Tracing.EventSource`                                                |
|  0.3% |  14.7ms | `Initialize(Guid, String, String[])`                                                         | `System.Diagnostics.Tracing.EventSource`                                                |
|  0.3% |  14.7ms | `.ctor()`                                                                                    | `System.Diagnostics.Tracing.NativeRuntimeEventSource`                                   |
|  0.3% |  14.7ms | `.cctor()`                                                                                   | `System.Diagnostics.Tracing.NativeRuntimeEventSource`                                   |
|  0.3% |  14.7ms | `StartAssemblyLoad(Guid&, Guid&)`                                                            | `System.Runtime.Loader.AssemblyLoadContext`                                             |

##### Native

|    % |    Time | Function              | Location    |
| ---: | ------: | --------------------- | ----------- |
| 2.3% | 110.6ms | `UNMANAGED_CODE_TIME` | `<unknown>` |

#### Callees

Callees ranked by contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `Main()` (`Profile.Program`)

|     % |    Time | Callee                                                    | Location                      |
| ----: | ------: | --------------------------------------------------------- | ----------------------------- |
| 74.6% |   3.51s | `DeserializeObject(String, Type, JsonSerializerSettings)` | `Newtonsoft.Json.JsonConvert` |
| 18.4% | 866.2ms | `SerializeObjectInternal(Object, Type, JsonSerializer)`   | `Newtonsoft.Json.JsonConvert` |
|  4.8% | 226.0ms | `DeserializeObject(String)`                               | `Newtonsoft.Json.JsonConvert` |
|  1.9% |  90.2ms | `SerializeObject(Object)`                                 | `Newtonsoft.Json.JsonConvert` |
|  0.2% |  10.8ms | `ToString()`                                              | `System.Text.StringBuilder`   |

##### `DeserializeObject(String, Type, JsonSerializerSettings)` (`Newtonsoft.Json.JsonConvert`)

|     % |    Time | Callee                                  | Location                         |
| ----: | ------: | --------------------------------------- | -------------------------------- |
| 91.0% |   3.40s | `DeserializeInternal(JsonReader, Type)` | `Newtonsoft.Json.JsonSerializer` |
|  8.8% | 328.4ms | `Deserialize(JsonReader, Type)`         | `Newtonsoft.Json.JsonSerializer` |
|  0.1% |   2.7ms | `UNMANAGED_CODE_TIME`                   | `<unknown>`                      |

##### `DeserializeInternal(JsonReader, Type)` (`Newtonsoft.Json.JsonSerializer`)

|     % |  Time | Callee                                                                                                                                                                     | Location                                                     |
| ----: | ----: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| 99.9% | 3.72s | `Deserialize(JsonReader, Type, bool)`                                                                                                                                      | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |
|  0.1% | 2.6ms | ``SetupReader(JsonReader, CultureInfo&, Nullable`1<DateTimeZoneHandling>&, Nullable`1<DateParseHandling>&, Nullable`1<FloatParseHandling>&, Nullable`1<int32>&, String&)`` | `Newtonsoft.Json.JsonSerializer`                             |

##### `Deserialize(JsonReader, Type, bool)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`)

|     % |   Time | Callee                                                                                                           | Location                                                                                |
| ----: | -----: | ---------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| 98.6% |  3.67s | `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader`                            |
|  0.9% | 34.1ms | `ReadForType(JsonContract, bool)`                                                                                | `Newtonsoft.Json.JsonReader`                                                            |
|  0.1% |  5.4ms | `Read()`                                                                                                         | `Newtonsoft.Json.JsonTextReader`                                                        |
|  0.1% |  2.7ms | `TryGetValueInternal(Tables<!0, !1>, !0, int32, !1&)`                                                            | ``System.Collections.Concurrent.ConcurrentDictionary`2[System.__Canon,System.__Canon]`` |

##### `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`)

|      % |   Time | Callee                                                                                                    | Location                                                     |
| -----: | -----: | --------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| 100.0% |  3.67s | `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |
|  57.9% |  2.12s | `CreateList(JsonReader, Type, JsonContract, JsonProperty, Object, String)`                                | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |
|   0.5% | 18.9ms | `EnsureType(JsonReader, Object, CultureInfo, JsonContract, Type)`                                         | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |
|  <0.1% |  1.3ms | `UNMANAGED_CODE_TIME`                                                                                     | `<unknown>`                                                  |

##### `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`)

|     % |   Time | Callee                                                                         | Location                                                     |
| ----: | -----: | ------------------------------------------------------------------------------ | ------------------------------------------------------------ |
| 99.3% |  3.64s | `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |
|  0.8% | 29.7ms | `ParseObject()`                                                                | `Newtonsoft.Json.JsonTextReader`                             |
|  0.2% |  7.0ms | `Node()`                                                                       | `dynamicClass.CreateProfile`                                 |
|  0.1% |  4.1ms | `Read()`                                                                       | `Newtonsoft.Json.JsonTextReader`                             |
|  0.1% |  2.6ms | `ReadAndAssert()`                                                              | `Newtonsoft.Json.JsonReader`                                 |

##### `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`)

|     % |    Time | Callee                                                                                                           | Location                                                                   |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| 57.7% |   2.10s | `ReadForType(JsonContract, bool)`                                                                                | `Newtonsoft.Json.JsonReader`                                               |
| 53.7% |   1.95s | `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader`               |
|  4.9% | 178.5ms | `SetPropertyValue(JsonProperty, JsonConverter, JsonContainerContract, JsonProperty, JsonReader, Object)`         | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader`               |
|  3.5% | 129.1ms | `ParseObject()`                                                                                                  | `Newtonsoft.Json.JsonTextReader`                                           |
|  1.4% |  50.9ms | `FindValue(!0)`                                                                                                  | ``System.Collections.Generic.Dictionary`2[System.__Canon,System.__Canon]`` |

##### `ReadForType(JsonContract, bool)` (`Newtonsoft.Json.JsonReader`)

|    % |    Time | Callee                      | Location                         |
| ---: | ------: | --------------------------- | -------------------------------- |
| 7.1% | 161.4ms | `ReadNumberValue(ReadType)` | `Newtonsoft.Json.JsonTextReader` |
| 6.8% | 154.8ms | `ReadStringValue(ReadType)` | `Newtonsoft.Json.JsonTextReader` |
| 4.5% | 101.6ms | `ReadAsInt32()`             | `Newtonsoft.Json.JsonTextReader` |
| 3.4% |  77.3ms | `ParseValue()`              | `Newtonsoft.Json.JsonTextReader` |
| 1.1% |  25.6ms | `ReadAsDouble()`            | `Newtonsoft.Json.JsonTextReader` |

##### `CreateList(JsonReader, Type, JsonContract, JsonProperty, Object, String)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`)

|     % |    Time | Callee                                                                     | Location                                                                             |
| ----: | ------: | -------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| 75.5% |   1.60s | `PopulateList(IList, JsonReader, JsonArrayContract, JsonProperty, String)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader`                         |
| 40.1% | 852.8ms | `CopyTo(Array, int32)`                                                     | ``System.Collections.Generic.List`1[System.__Canon].System.Collections.ICollection`` |
|  0.4% |   8.0ms | `CreateNewList(JsonReader, JsonArrayContract, bool&)`                      | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader`                         |
|  0.1% |   1.3ms | `CreateInstance(Type, int32)`                                              | `System.Array`                                                                       |

##### `PopulateList(IList, JsonReader, JsonArrayContract, JsonProperty, String)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`)

|     % |    Time | Callee                                                                                                           | Location                                                                       |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| 90.4% |   1.45s | `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader`                   |
|  8.3% | 133.5ms | `ReadForType(JsonContract, bool)`                                                                                | `Newtonsoft.Json.JsonReader`                                                   |
|  2.0% |  31.3ms | `Add(Object)`                                                                                                    | ``System.Collections.Generic.List`1[System.__Canon].System.Collections.IList`` |
|  0.3% |   5.5ms | `IsInstanceOfInterface(void*, Object)`                                                                           | `System.Runtime.CompilerServices.CastHelpers`                                  |
|  0.2% |   2.7ms | `GetConverter(JsonContract, JsonConverter, JsonContainerContract, JsonProperty)`                                 | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader`                   |

##### `SerializeObjectInternal(Object, Type, JsonSerializer)` (`Newtonsoft.Json.JsonConvert`)

|     % |    Time | Callee                                        | Location                                        |
| ----: | ------: | --------------------------------------------- | ----------------------------------------------- |
| 88.7% | 846.3ms | `SerializeInternal(JsonWriter, Object, Type)` | `Newtonsoft.Json.JsonSerializer`                |
|  9.0% |  86.1ms | `Serialize(JsonWriter, Object, Type)`         | `Newtonsoft.Json.JsonSerializer`                |
|  1.0% |   9.2ms | `.ctor(TextWriter)`                           | `Newtonsoft.Json.JsonTextWriter`                |
|  0.4% |   4.0ms | `UNMANAGED_CODE_TIME`                         | `<unknown>`                                     |
|  0.1% |   1.4ms | `Dispose()`                                   | `Newtonsoft.Json.JsonWriter.System.IDisposable` |

##### `SerializeInternal(JsonWriter, Object, Type)` (`Newtonsoft.Json.JsonSerializer`)

|     % |    Time | Callee                                | Location                                                     |
| ----: | ------: | ------------------------------------- | ------------------------------------------------------------ |
| 99.9% | 931.1ms | `Serialize(JsonWriter, Object, Type)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |
|  0.1% |   1.3ms | `UNMANAGED_CODE_TIME`                 | `<unknown>`                                                  |

##### `Serialize(JsonWriter, Object, Type)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`)

|     % |    Time | Callee                                                                                                | Location                                                                                |
| ----: | ------: | ----------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| 96.7% | 900.3ms | `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`                            |
|  2.3% |  21.4ms | `GetContractSafe(Object)`                                                                             | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`                            |
|  0.3% |   2.7ms | `TryGetValueInternal(Tables<!0, !1>, !0, int32, !1&)`                                                 | ``System.Collections.Concurrent.ConcurrentDictionary`2[System.__Canon,System.__Canon]`` |

##### `SerializeObject(JsonWriter, Object, JsonObjectContract, JsonProperty, JsonContainerContract, JsonProperty)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`)

|     % |    Time | Callee                                                                                                                   | Location                                                     |
| ----: | ------: | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------ |
| 85.0% | 765.0ms | `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)`                    | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |
|  2.4% |  21.6ms | `CheckForCircularReference(JsonWriter, Object, JsonProperty, JsonContract, JsonContainerContract, JsonProperty)`         | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |
|  1.6% |  14.8ms | `GetValue(Object)`                                                                                                       | `Newtonsoft.Json.Serialization.ExpressionValueProvider`      |
|  1.4% |  12.2ms | `CalculatePropertyValues(JsonWriter, Object, JsonContainerContract, JsonProperty, JsonProperty, JsonContract&, Object&)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |
|  0.5% |   4.1ms | `Memmove(unsigned int8&, unsigned int8&, unsigned int)`                                                                  | `System.Buffer`                                              |

##### `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`)

|      % |    Time | Callee                                                                                                             | Location                                                     |
| -----: | ------: | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------ |
| 100.0% | 900.3ms | `SerializeObject(JsonWriter, Object, JsonObjectContract, JsonProperty, JsonContainerContract, JsonProperty)`       | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |
|  73.0% | 657.0ms | `SerializeList(JsonWriter, IEnumerable, JsonArrayContract, JsonProperty, JsonContainerContract, JsonProperty)`     | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |
|  25.5% | 229.2ms | `WriteValue(JsonWriter, PrimitiveTypeCode, Object)`                                                                | `Newtonsoft.Json.JsonWriter`                                 |
|   2.1% |  19.0ms | `WriteNull()`                                                                                                      | `Newtonsoft.Json.JsonTextWriter`                             |
|   1.4% |  12.2ms | `SerializePrimitive(JsonWriter, Object, JsonPrimitiveContract, JsonProperty, JsonContainerContract, JsonProperty)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |

##### `CopyTo(Array, int32)` (``System.Collections.Generic.List`1[System.__Canon].System.Collections.ICollection``)

|    % |  Time | Callee                                    | Location       |
| ---: | ----: | ----------------------------------------- | -------------- |
| 0.8% | 6.7ms | `Copy(Array, int32, Array, int32, int32)` | `System.Array` |

##### `SerializeList(JsonWriter, IEnumerable, JsonArrayContract, JsonProperty, JsonContainerContract, JsonProperty)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`)

|     % |    Time | Callee                                                                                                           | Location                                                     |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| 78.0% | 512.2ms | `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)`            | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |
|  1.8% |  12.1ms | `IsInstance_Helper(void*, Object)`                                                                               | `System.Runtime.CompilerServices.CastHelpers`                |
|  1.6% |  10.7ms | `IsInstanceOfInterface(void*, Object)`                                                                           | `System.Runtime.CompilerServices.CastHelpers`                |
|  1.4% |   9.3ms | `CheckForCircularReference(JsonWriter, Object, JsonProperty, JsonContract, JsonContainerContract, JsonProperty)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |
|  0.6% |   4.0ms | `GetContractSafe(Object)`                                                                                        | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |

##### `Deserialize(JsonReader, Type)` (`Newtonsoft.Json.JsonSerializer`)

|      % |    Time | Callee                                  | Location                         |
| -----: | ------: | --------------------------------------- | -------------------------------- |
| 100.0% | 328.4ms | `DeserializeInternal(JsonReader, Type)` | `Newtonsoft.Json.JsonSerializer` |

##### `WriteValue(JsonWriter, PrimitiveTypeCode, Object)` (`Newtonsoft.Json.JsonWriter`)

|     % |    Time | Callee                                                                                                                         | Location                                    |
| ----: | ------: | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------- |
| 51.1% | 122.7ms | `WriteValue(float64)`                                                                                                          | `Newtonsoft.Json.JsonTextWriter`            |
| 29.7% |  71.2ms | ``WriteEscapedJavaScriptString(TextWriter, String, wchar, bool, bool[], StringEscapeHandling, IArrayPool`1<wchar>, wchar[]&)`` | `Newtonsoft.Json.Utilities.JavaScriptUtils` |
|  5.0% |  12.0ms | `WriteIntegerValue(int32)`                                                                                                     | `Newtonsoft.Json.JsonTextWriter`            |
|  1.7% |   4.1ms | `WriteValue(String)`                                                                                                           | `Newtonsoft.Json.JsonTextWriter`            |

##### `DeserializeObject(String, JsonSerializerSettings)` (`Newtonsoft.Json.JsonConvert`)

|      % |    Time | Callee                                                    | Location                      |
| -----: | ------: | --------------------------------------------------------- | ----------------------------- |
| 100.0% | 226.0ms | `DeserializeObject(String, Type, JsonSerializerSettings)` | `Newtonsoft.Json.JsonConvert` |

##### `DeserializeObject(String)` (`Newtonsoft.Json.JsonConvert`)

|      % |    Time | Callee                                              | Location                      |
| -----: | ------: | --------------------------------------------------- | ----------------------------- |
| 100.0% | 226.0ms | `DeserializeObject(String, JsonSerializerSettings)` | `Newtonsoft.Json.JsonConvert` |

##### `FormatDouble(float64, String, NumberFormatInfo)` (`System.Number`)

|     % |   Time | Callee                                                                                       | Location        |
| ----: | -----: | -------------------------------------------------------------------------------------------- | --------------- |
| 83.5% | 69.0ms | ``FormatDouble(ValueListBuilder`1<!!0>&, float64, ReadOnlySpan`1<wchar>, NumberFormatInfo)`` | `System.Number` |
|  1.6% |  1.3ms | `UNMANAGED_CODE_TIME`                                                                        | `<unknown>`     |

##### ``FormatDouble(ValueListBuilder`1<!!0>&, float64, ReadOnlySpan`1<wchar>, NumberFormatInfo)`` (`System.Number`)

|     % |   Time | Callee                                                                                      | Location               |
| ----: | -----: | ------------------------------------------------------------------------------------------- | ---------------------- |
| 45.4% | 31.3ms | `TryRunDouble(float64, int32, NumberBuffer&)`                                               | `System.Number+Grisu3` |
| 29.3% | 20.2ms | ``NumberToString(ValueListBuilder`1<!!0>&, NumberBuffer&, wchar, int32, NumberFormatInfo)`` | `System.Number`        |
|  2.0% |  1.4ms | ``ParseFormatSpecifier(ReadOnlySpan`1<wchar>, int32&)``                                     | `System.Number`        |

##### `FindValue(!0)` (``System.Collections.Generic.Dictionary`2[System.__Canon,System.__Canon]``)

|     % |   Time | Callee                       | Location                                                                         |
| ----: | -----: | ---------------------------- | -------------------------------------------------------------------------------- |
| 20.2% | 10.8ms | `GetNonRandomizedHashCode()` | `System.String`                                                                  |
|  2.5% |  1.3ms | `GetHashCode(String)`        | `System.Collections.Generic.NonRandomizedStringEqualityComparer+OrdinalComparer` |

##### ``TryParseFloat(ReadOnlySpan`1<!!0>, NumberStyles, NumberFormatInfo, !!1&)`` (`System.Number`)

|     % |   Time | Callee                                                                                    | Location        |
| ----: | -----: | ----------------------------------------------------------------------------------------- | --------------- |
| 93.4% | 37.8ms | `TryParseNumber(!!0*&, !!0*, NumberStyles, NumberBuffer&, NumberFormatInfo)`              | `System.Number` |
|  3.3% |  1.3ms | `UNMANAGED_CODE_TIME`                                                                     | `<unknown>`     |
|  3.3% |  1.3ms | ``TryStringToNumber(ReadOnlySpan`1<!!0>, NumberStyles, NumberBuffer&, NumberFormatInfo)`` | `System.Number` |

##### `TryParseNumber(!!0*&, !!0*, NumberStyles, NumberBuffer&, NumberFormatInfo)` (`System.Number`)

|     % |  Time | Callee                                          | Location        |
| ----: | ----: | ----------------------------------------------- | --------------- |
| 10.7% | 4.1ms | ``MatchChars(!!0*, !!0*, ReadOnlySpan`1<!!0>)`` | `System.Number` |

##### `Add(Object)` (``System.Collections.Generic.List`1[System.__Canon].System.Collections.IList``)

|     % |  Time | Callee                          | Location                                              |
| ----: | ----: | ------------------------------- | ----------------------------------------------------- |
| 17.6% | 5.5ms | `AddWithResize(!0)`             | ``System.Collections.Generic.List`1[System.__Canon]`` |
|  8.5% | 2.7ms | `StelemRef(Array, int, Object)` | `System.Runtime.CompilerServices.CastHelpers`         |

##### `TryRunDouble(float64, int32, NumberBuffer&)` (`System.Number+Grisu3`)

|     % |   Time | Callee                                                                                 | Location               |
| ----: | -----: | -------------------------------------------------------------------------------------- | ---------------------- |
| 91.3% | 28.6ms | ``TryDigitGenShortest(DiyFp&, DiyFp&, DiyFp&, Span`1<unsigned int8>, int32&, int32&)`` | `System.Number+Grisu3` |

##### ``GetOrAdd(!0, Func`2<!0, !1>)`` (``System.Collections.Concurrent.ConcurrentDictionary`2[System.__Canon,System.__Canon]``)

|     % |   Time | Callee                                                | Location                                                                                |
| ----: | -----: | ----------------------------------------------------- | --------------------------------------------------------------------------------------- |
| 82.0% | 24.2ms | `CreateContract(Type)`                                | `Newtonsoft.Json.Serialization.DefaultContractResolver`                                 |
| 13.5% |  4.0ms | `TryGetValueInternal(Tables<!0, !1>, !0, int32, !1&)` | ``System.Collections.Concurrent.ConcurrentDictionary`2[System.__Canon,System.__Canon]`` |
|  4.6% |  1.4ms | `GetAttribute(Object)`                                | `Newtonsoft.Json.Serialization.JsonTypeReflector`                                       |
|  4.5% |  1.3ms | `UNMANAGED_CODE_TIME`                                 | `<unknown>`                                                                             |

##### ``NumberToString(ValueListBuilder`1<!!0>&, NumberBuffer&, wchar, int32, NumberFormatInfo)`` (`System.Number`)

|     % |   Time | Callee                                                                                           | Location        |
| ----: | -----: | ------------------------------------------------------------------------------------------------ | --------------- |
| 59.9% | 12.1ms | ``FormatGeneral(ValueListBuilder`1<!!0>&, NumberBuffer&, int32, NumberFormatInfo, wchar, bool)`` | `System.Number` |
| 40.1% |  8.1ms | `RoundNumber(NumberBuffer&, int32, bool)`                                                        | `System.Number` |

##### `CreateManifestAndDescriptors(Type, String, EventSource, EventManifestOptions)` (`System.Diagnostics.Tracing.EventSource`)

|     % |  Time | Callee                                                             | Location                                     |
| ----: | ----: | ------------------------------------------------------------------ | -------------------------------------------- |
| 54.5% | 8.0ms | `CreateManifest()`                                                 | `System.Diagnostics.Tracing.ManifestBuilder` |
| 18.4% | 2.7ms | `GetCustomAttributeHelper(MemberInfo, Type, EventManifestOptions)` | `System.Diagnostics.Tracing.EventSource`     |
|  9.1% | 1.3ms | `EndEvent()`                                                       | `System.Diagnostics.Tracing.ManifestBuilder` |
|  9.0% | 1.3ms | `AddProviderEnumKind(ManifestBuilder, FieldInfo, String)`          | `System.Diagnostics.Tracing.EventSource`     |
|  9.0% | 1.3ms | `GetMethods(BindingFlags)`                                         | `System.RuntimeType`                         |

##### `EnsureDescriptorsInitialized()` (`System.Diagnostics.Tracing.EventSource`)

|      % |   Time | Callee                                                                          | Location                                 |
| -----: | -----: | ------------------------------------------------------------------------------- | ---------------------------------------- |
| 100.0% | 14.7ms | `CreateManifestAndDescriptors(Type, String, EventSource, EventManifestOptions)` | `System.Diagnostics.Tracing.EventSource` |

##### `DoCommand(EventCommandEventArgs)` (`System.Diagnostics.Tracing.EventSource`)

|      % |   Time | Callee                           | Location                                 |
| -----: | -----: | -------------------------------- | ---------------------------------------- |
| 100.0% | 14.7ms | `EnsureDescriptorsInitialized()` | `System.Diagnostics.Tracing.EventSource` |

##### `Initialize(Guid, String, String[])` (`System.Diagnostics.Tracing.EventSource`)

|      % |   Time | Callee                             | Location                                 |
| -----: | -----: | ---------------------------------- | ---------------------------------------- |
| 100.0% | 14.7ms | `DoCommand(EventCommandEventArgs)` | `System.Diagnostics.Tracing.EventSource` |

##### `.ctor()` (`System.Diagnostics.Tracing.NativeRuntimeEventSource`)

|      % |   Time | Callee                               | Location                                 |
| -----: | -----: | ------------------------------------ | ---------------------------------------- |
| 100.0% | 14.7ms | `Initialize(Guid, String, String[])` | `System.Diagnostics.Tracing.EventSource` |

##### `.cctor()` (`System.Diagnostics.Tracing.NativeRuntimeEventSource`)

|      % |   Time | Callee    | Location                                              |
| -----: | -----: | --------- | ----------------------------------------------------- |
| 100.0% | 14.7ms | `.ctor()` | `System.Diagnostics.Tracing.NativeRuntimeEventSource` |

##### `StartAssemblyLoad(Guid&, Guid&)` (`System.Runtime.Loader.AssemblyLoadContext`)

|      % |   Time | Callee     | Location                                              |
| -----: | -----: | ---------- | ----------------------------------------------------- |
| 100.0% | 14.7ms | `.cctor()` | `System.Diagnostics.Tracing.NativeRuntimeEventSource` |

## Hottest call stacks

Call stacks ranked by time spent in their leaf frame.

Common call stack: `Main()` (`Profile.Program`)

|     % |    Time | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ----: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 23.6% |   1.11s | `ReadForType(JsonContract, bool)` (`Newtonsoft.Json.JsonReader`) ← `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`) ← `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `Deserialize(JsonReader, Type, bool)` ← `DeserializeInternal(JsonReader, Type)` (`Newtonsoft.Json.JsonSerializer`) ← `DeserializeObject(String, Type, JsonSerializerSettings)` (`Newtonsoft.Json.JsonConvert`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 11.5% | 545.6ms | `ReadForType(JsonContract, bool)` (`Newtonsoft.Json.JsonReader`) ← `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`) ← `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `PopulateList(IList, JsonReader, JsonArrayContract, JsonProperty, String)` ← `CreateList(JsonReader, Type, JsonContract, JsonProperty, Object, String)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` ← `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `Deserialize(JsonReader, Type, bool)` ← `DeserializeInternal(JsonReader, Type)` (`Newtonsoft.Json.JsonSerializer`) ← `DeserializeObject(String, Type, JsonSerializerSettings)` (`Newtonsoft.Json.JsonConvert`)                                                                                                                                                                                                                                              |
|  9.9% | 468.5ms | `CopyTo(Array, int32)` (``System.Collections.Generic.List`1[System.__Canon].System.Collections.ICollection``) ← `CreateList(JsonReader, Type, JsonContract, JsonProperty, Object, String)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`) ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` ← `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `Deserialize(JsonReader, Type, bool)` ← `DeserializeInternal(JsonReader, Type)` (`Newtonsoft.Json.JsonSerializer`) ← `DeserializeObject(String, Type, JsonSerializerSettings)` (`Newtonsoft.Json.JsonConvert`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  6.6% | 310.1ms | `CopyTo(Array, int32)` (``System.Collections.Generic.List`1[System.__Canon].System.Collections.ICollection``) ← `CreateList(JsonReader, Type, JsonContract, JsonProperty, Object, String)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`) ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` ← `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `PopulateList(IList, JsonReader, JsonArrayContract, JsonProperty, String)` ← `CreateList(JsonReader, Type, JsonContract, JsonProperty, Object, String)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` ← `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `Deserialize(JsonReader, Type, bool)` ← `DeserializeInternal(JsonReader, Type)` (`Newtonsoft.Json.JsonSerializer`) ← `DeserializeObject(String, Type, JsonSerializerSettings)` (`Newtonsoft.Json.JsonConvert`) |
|  4.4% | 209.0ms | `SerializeObject(JsonWriter, Object, JsonObjectContract, JsonProperty, JsonContainerContract, JsonProperty)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`) ← `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)` ← `SerializeList(JsonWriter, IEnumerable, JsonArrayContract, JsonProperty, JsonContainerContract, JsonProperty)` ← `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)` ← `SerializeObject(JsonWriter, Object, JsonObjectContract, JsonProperty, JsonContainerContract, JsonProperty)` ← `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)` ← `Serialize(JsonWriter, Object, Type)` ← `SerializeInternal(JsonWriter, Object, Type)` (`Newtonsoft.Json.JsonSerializer`) ← `SerializeObjectInternal(Object, Type, JsonSerializer)` (`Newtonsoft.Json.JsonConvert`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  2.4% | 111.5ms | `SerializeList(JsonWriter, IEnumerable, JsonArrayContract, JsonProperty, JsonContainerContract, JsonProperty)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`) ← `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)` ← `SerializeObject(JsonWriter, Object, JsonObjectContract, JsonProperty, JsonContainerContract, JsonProperty)` ← `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)` ← `Serialize(JsonWriter, Object, Type)` ← `SerializeInternal(JsonWriter, Object, Type)` (`Newtonsoft.Json.JsonSerializer`) ← `SerializeObjectInternal(Object, Type, JsonSerializer)` (`Newtonsoft.Json.JsonConvert`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  2.1% |  97.3ms | `SerializeObject(JsonWriter, Object, JsonObjectContract, JsonProperty, JsonContainerContract, JsonProperty)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`) ← `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)` ← `Serialize(JsonWriter, Object, Type)` ← `SerializeInternal(JsonWriter, Object, Type)` (`Newtonsoft.Json.JsonSerializer`) ← `SerializeObjectInternal(Object, Type, JsonSerializer)` (`Newtonsoft.Json.JsonConvert`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  1.8% |  87.4ms | `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`) ← `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `PopulateList(IList, JsonReader, JsonArrayContract, JsonProperty, String)` ← `CreateList(JsonReader, Type, JsonContract, JsonProperty, Object, String)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` ← `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `Deserialize(JsonReader, Type, bool)` ← `DeserializeInternal(JsonReader, Type)` (`Newtonsoft.Json.JsonSerializer`) ← `DeserializeObject(String, Type, JsonSerializerSettings)` (`Newtonsoft.Json.JsonConvert`)                                                                                                                                                                                                                                                                                                                 |
|  1.3% |  61.2ms | `ReadAsInt32()` (`Newtonsoft.Json.JsonTextReader`) ← `ReadForType(JsonContract, bool)` (`Newtonsoft.Json.JsonReader`) ← `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`) ← `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `Deserialize(JsonReader, Type, bool)` ← `DeserializeInternal(JsonReader, Type)` (`Newtonsoft.Json.JsonSerializer`) ← `Deserialize(JsonReader, Type)` ← `DeserializeObject(String, Type, JsonSerializerSettings)` (`Newtonsoft.Json.JsonConvert`) ← `DeserializeObject(String, JsonSerializerSettings)` ← `DeserializeObject(String)`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  1.1% |  53.8ms | `SerializeList(JsonWriter, IEnumerable, JsonArrayContract, JsonProperty, JsonContainerContract, JsonProperty)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`) ← `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)` ← `SerializeObject(JsonWriter, Object, JsonObjectContract, JsonProperty, JsonContainerContract, JsonProperty)` ← `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)` ← `SerializeList(JsonWriter, IEnumerable, JsonArrayContract, JsonProperty, JsonContainerContract, JsonProperty)` ← `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)` ← `SerializeObject(JsonWriter, Object, JsonObjectContract, JsonProperty, JsonContainerContract, JsonProperty)` ← `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)` ← `Serialize(JsonWriter, Object, Type)` ← `SerializeInternal(JsonWriter, Object, Type)` (`Newtonsoft.Json.JsonSerializer`) ← `SerializeObjectInternal(Object, Type, JsonSerializer)` (`Newtonsoft.Json.JsonConvert`)                                                                                                                                                                                                                                                                                                                          |
|  1.1% |  51.0ms | `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`) ← `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `Deserialize(JsonReader, Type, bool)` ← `DeserializeInternal(JsonReader, Type)` (`Newtonsoft.Json.JsonSerializer`) ← `DeserializeObject(String, Type, JsonSerializerSettings)` (`Newtonsoft.Json.JsonConvert`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  1.0% |  46.8ms | `ReadNumberValue(ReadType)` (`Newtonsoft.Json.JsonTextReader`) ← `ReadForType(JsonContract, bool)` (`Newtonsoft.Json.JsonReader`) ← `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`) ← `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `Deserialize(JsonReader, Type, bool)` ← `DeserializeInternal(JsonReader, Type)` (`Newtonsoft.Json.JsonSerializer`) ← `DeserializeObject(String, Type, JsonSerializerSettings)` (`Newtonsoft.Json.JsonConvert`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  0.9% |  41.8ms | `ParseProperty()` (`Newtonsoft.Json.JsonTextReader`) ← `ParseObject()` ← `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`) ← `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `PopulateList(IList, JsonReader, JsonArrayContract, JsonProperty, String)` ← `CreateList(JsonReader, Type, JsonContract, JsonProperty, Object, String)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` ← `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `Deserialize(JsonReader, Type, bool)` ← `DeserializeInternal(JsonReader, Type)` (`Newtonsoft.Json.JsonSerializer`) ← `DeserializeObject(String, Type, JsonSerializerSettings)` (`Newtonsoft.Json.JsonConvert`)                                                                                                                                                                                                                                        |
|  0.8% |  38.8ms | `ReadForType(JsonContract, bool)` (`Newtonsoft.Json.JsonReader`) ← `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`) ← `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `Deserialize(JsonReader, Type, bool)` ← `DeserializeInternal(JsonReader, Type)` (`Newtonsoft.Json.JsonSerializer`) ← `Deserialize(JsonReader, Type)` ← `DeserializeObject(String, Type, JsonSerializerSettings)` (`Newtonsoft.Json.JsonConvert`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  0.8% |  36.5ms | `ReadStringIntoBuffer(wchar)` (`Newtonsoft.Json.JsonTextReader`) ← `ReadStringValue(ReadType)` ← `ReadForType(JsonContract, bool)` (`Newtonsoft.Json.JsonReader`) ← `PopulateList(IList, JsonReader, JsonArrayContract, JsonProperty, String)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`) ← `CreateList(JsonReader, Type, JsonContract, JsonProperty, Object, String)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` ← `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `Deserialize(JsonReader, Type, bool)` ← `DeserializeInternal(JsonReader, Type)` (`Newtonsoft.Json.JsonSerializer`) ← `DeserializeObject(String, Type, JsonSerializerSettings)` (`Newtonsoft.Json.JsonConvert`)                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  0.7% |  35.1ms | `ParseReadNumber(ReadType, wchar, int32)` (`Newtonsoft.Json.JsonTextReader`) ← `ReadNumberValue(ReadType)` ← `ReadForType(JsonContract, bool)` (`Newtonsoft.Json.JsonReader`) ← `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`) ← `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `PopulateList(IList, JsonReader, JsonArrayContract, JsonProperty, String)` ← `CreateList(JsonReader, Type, JsonContract, JsonProperty, Object, String)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` ← `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `Deserialize(JsonReader, Type, bool)` ← `DeserializeInternal(JsonReader, Type)` (`Newtonsoft.Json.JsonSerializer`) ← `DeserializeObject(String, Type, JsonSerializerSettings)` (`Newtonsoft.Json.JsonConvert`)                                                                                                                                 |
|  0.7% |  33.9ms | ``WriteEscapedJavaScriptString(TextWriter, String, wchar, bool, bool[], StringEscapeHandling, IArrayPool`1<wchar>, wchar[]&)`` (`Newtonsoft.Json.Utilities.JavaScriptUtils`) ← `WriteValue(JsonWriter, PrimitiveTypeCode, Object)` (`Newtonsoft.Json.JsonWriter`) ← `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`) ← `SerializeList(JsonWriter, IEnumerable, JsonArrayContract, JsonProperty, JsonContainerContract, JsonProperty)` ← `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)` ← `SerializeObject(JsonWriter, Object, JsonObjectContract, JsonProperty, JsonContainerContract, JsonProperty)` ← `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)` ← `Serialize(JsonWriter, Object, Type)` ← `SerializeInternal(JsonWriter, Object, Type)` (`Newtonsoft.Json.JsonSerializer`) ← `SerializeObjectInternal(Object, Type, JsonSerializer)` (`Newtonsoft.Json.JsonConvert`)                                                                                                                                                                                                                                                                                                                                                                                              |
|  0.7% |  31.2ms | `CopyTo(Array, int32)` (``System.Collections.Generic.List`1[System.__Canon].System.Collections.ICollection``) ← `CreateList(JsonReader, Type, JsonContract, JsonProperty, Object, String)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`) ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `SetPropertyValue(JsonProperty, JsonConverter, JsonContainerContract, JsonProperty, JsonReader, Object)` ← `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` ← `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `Deserialize(JsonReader, Type, bool)` ← `DeserializeInternal(JsonReader, Type)` (`Newtonsoft.Json.JsonSerializer`) ← `Deserialize(JsonReader, Type)` ← `DeserializeObject(String, Type, JsonSerializerSettings)` (`Newtonsoft.Json.JsonConvert`) ← `DeserializeObject(String, JsonSerializerSettings)` ← `DeserializeObject(String)`                                                                                                                                                                                                                                                                                                                                                             |
|  0.6% |  28.2ms | `PopulateList(IList, JsonReader, JsonArrayContract, JsonProperty, String)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`) ← `CreateList(JsonReader, Type, JsonContract, JsonProperty, Object, String)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` ← `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` ← `Deserialize(JsonReader, Type, bool)` ← `DeserializeInternal(JsonReader, Type)` (`Newtonsoft.Json.JsonSerializer`) ← `DeserializeObject(String, Type, JsonSerializerSettings)` (`Newtonsoft.Json.JsonConvert`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  0.6% |  27.2ms | ``TryDigitGenShortest(DiyFp&, DiyFp&, DiyFp&, Span`1<unsigned int8>, int32&, int32&)`` (`System.Number+Grisu3`) ← `TryRunDouble(float64, int32, NumberBuffer&)` ← ``FormatDouble(ValueListBuilder`1<!!0>&, float64, ReadOnlySpan`1<wchar>, NumberFormatInfo)`` (`System.Number`) ← `FormatDouble(float64, String, NumberFormatInfo)` ← `WriteValue(float64)` (`Newtonsoft.Json.JsonTextWriter`) ← `WriteValue(JsonWriter, PrimitiveTypeCode, Object)` (`Newtonsoft.Json.JsonWriter`) ← `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`) ← `SerializeObject(JsonWriter, Object, JsonObjectContract, JsonProperty, JsonContainerContract, JsonProperty)` ← `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)` ← `Serialize(JsonWriter, Object, Type)` ← `SerializeInternal(JsonWriter, Object, Type)` (`Newtonsoft.Json.JsonSerializer`) ← `SerializeObjectInternal(Object, Type, JsonSerializer)` (`Newtonsoft.Json.JsonConvert`)                                                                                                                                                                                                                                                                                                                                                                                                    |

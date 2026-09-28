# Sampling profile diff

Took 4.72s → 4.76s (+36.80ms, +0.8%).

| Category         |  Change |    Delta |             % |              Time |
| ---------------- | ------: | -------: | ------------: | ----------------: |
| Ours             |   +0.3% |  +9.38ms | 72.6% → 72.2% |             3.43s |
| Standard library |   +0.7% |  +8.23ms |         25.1% |     1.18s → 1.19s |
| Native           |  +17.4% | +19.19ms |   2.3% → 2.7% | 110.6ms → 129.7ms |
| Unknown          | +212.7% | +<0.01µs |         <0.1% |            <0.1µs |

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time spent directly in the function body, excluding callees.

|  Change |     Delta |             % |              Time | Function                                                  | Location                                                                                |
| ------: | --------: | ------------: | ----------------: | --------------------------------------------------------- | --------------------------------------------------------------------------------------- |
|   +5.9% | +101.70ms | 36.4% → 38.3% |     1.72s → 1.82s | `ReadForType(JsonContract, bool)`                         | `Newtonsoft.Json.JsonReader`                                                            |
|   +7.3% |  +61.75ms | 17.9% → 19.1% | 846.1ms → 907.9ms | `CopyTo(Array, int32)`                                    | ``System.Collections.Generic.List`1[System.__Canon].System.Collections.ICollection``    |
|  +17.4% |  +19.19ms |   2.3% → 2.7% | 110.6ms → 129.7ms | `UNMANAGED_CODE_TIME`                                     | `<unknown>`                                                                             |
|     new |  +19.18ms |   0.0% → 0.4% |      0ms → 19.2ms | `GetValue(Object)`                                        | `Newtonsoft.Json.Serialization.DynamicValueProvider`                                    |
|     new |  +12.14ms |   0.0% → 0.3% |      0ms → 12.1ms | `SetValue(Object, Object)`                                | `Newtonsoft.Json.Serialization.DynamicValueProvider`                                    |
|  +57.7% |  +10.79ms |   0.4% → 0.6% |   18.7ms → 29.5ms | `ParseObject()`                                           | `Newtonsoft.Json.JsonTextReader`                                                        |
|   +8.7% |  +10.48ms |   2.5% → 2.7% | 120.1ms → 130.6ms | `ReadStringIntoBuffer(wchar)`                             | `Newtonsoft.Json.JsonTextReader`                                                        |
|  +27.4% |   +8.14ms |   0.6% → 0.8% |   29.7ms → 37.9ms | `ParsePostValue(bool)`                                    | `Newtonsoft.Json.JsonTextReader`                                                        |
|   +8.5% |   +8.11ms |   2.0% → 2.2% |  94.9ms → 103.0ms | `ReadAsInt32()`                                           | `Newtonsoft.Json.JsonTextReader`                                                        |
|  +23.2% |   +7.52ms |   0.7% → 0.8% |   32.5ms → 40.0ms | `Memmove(unsigned int8&, unsigned int8&, unsigned int)`   | `System.Buffer`                                                                         |
| +128.3% |   +6.86ms |   0.1% → 0.3% |    5.3ms → 12.2ms | `SerializeObjectInternal(Object, Type, JsonSerializer)`   | `Newtonsoft.Json.JsonConvert`                                                           |
| +250.7% |   +6.74ms |   0.1% → 0.2% |     2.7ms → 9.4ms | `Int32TryParse(wchar[], int32, int32, int32&)`            | `Newtonsoft.Json.Utilities.ConvertUtils`                                                |
|  +68.4% |   +6.42ms |   0.2% → 0.3% |    9.4ms → 15.8ms | `Append(wchar&, int32)`                                   | `System.Text.StringBuilder`                                                             |
|  +18.1% |   +5.42ms |   0.6% → 0.7% |   29.9ms → 35.3ms | `WriteValue(JsonWriter, PrimitiveTypeCode, Object)`       | `Newtonsoft.Json.JsonWriter`                                                            |
|  +48.1% |   +5.17ms |   0.2% → 0.3% |   10.8ms → 15.9ms | `TryGetValueInternal(Tables<!0, !1>, !0, int32, !1&)`     | ``System.Collections.Concurrent.ConcurrentDictionary`2[System.__Canon,System.__Canon]`` |
|   +5.8% |   +4.84ms |   1.8% → 1.9% |   83.4ms → 88.2ms | `ParseProperty()`                                         | `Newtonsoft.Json.JsonTextReader`                                                        |
|  +68.1% |   +4.66ms |   0.1% → 0.2% |    6.9ms → 11.5ms | `DeserializeObject(String, Type, JsonSerializerSettings)` | `Newtonsoft.Json.JsonConvert`                                                           |
|     new |   +4.15ms |   0.0% → 0.1% |       0ms → 4.1ms | `ValidateEnd(JsonToken)`                                  | `Newtonsoft.Json.JsonReader`                                                            |
|  +43.6% |   +4.09ms |   0.2% → 0.3% |    9.4ms → 13.5ms | `Deserialize(JsonReader, Type, bool)`                     | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader`                            |
|     new |   +3.98ms |   0.0% → 0.1% |       0ms → 4.0ms | `Push(JsonContainerType)`                                 | `Newtonsoft.Json.JsonReader`                                                            |

##### Ours

|  Change |     Delta |             % |              Time | Function                                                  | Location                                                     |
| ------: | --------: | ------------: | ----------------: | --------------------------------------------------------- | ------------------------------------------------------------ |
|   +5.9% | +101.70ms | 36.4% → 38.3% |     1.72s → 1.82s | `ReadForType(JsonContract, bool)`                         | `Newtonsoft.Json.JsonReader`                                 |
|     new |  +19.18ms |   0.0% → 0.4% |      0ms → 19.2ms | `GetValue(Object)`                                        | `Newtonsoft.Json.Serialization.DynamicValueProvider`         |
|     new |  +12.14ms |   0.0% → 0.3% |      0ms → 12.1ms | `SetValue(Object, Object)`                                | `Newtonsoft.Json.Serialization.DynamicValueProvider`         |
|  +57.7% |  +10.79ms |   0.4% → 0.6% |   18.7ms → 29.5ms | `ParseObject()`                                           | `Newtonsoft.Json.JsonTextReader`                             |
|   +8.7% |  +10.48ms |   2.5% → 2.7% | 120.1ms → 130.6ms | `ReadStringIntoBuffer(wchar)`                             | `Newtonsoft.Json.JsonTextReader`                             |
|  +27.4% |   +8.14ms |   0.6% → 0.8% |   29.7ms → 37.9ms | `ParsePostValue(bool)`                                    | `Newtonsoft.Json.JsonTextReader`                             |
|   +8.5% |   +8.11ms |   2.0% → 2.2% |  94.9ms → 103.0ms | `ReadAsInt32()`                                           | `Newtonsoft.Json.JsonTextReader`                             |
| +128.3% |   +6.86ms |   0.1% → 0.3% |    5.3ms → 12.2ms | `SerializeObjectInternal(Object, Type, JsonSerializer)`   | `Newtonsoft.Json.JsonConvert`                                |
| +250.7% |   +6.74ms |   0.1% → 0.2% |     2.7ms → 9.4ms | `Int32TryParse(wchar[], int32, int32, int32&)`            | `Newtonsoft.Json.Utilities.ConvertUtils`                     |
|  +18.1% |   +5.42ms |   0.6% → 0.7% |   29.9ms → 35.3ms | `WriteValue(JsonWriter, PrimitiveTypeCode, Object)`       | `Newtonsoft.Json.JsonWriter`                                 |
|   +5.8% |   +4.84ms |   1.8% → 1.9% |   83.4ms → 88.2ms | `ParseProperty()`                                         | `Newtonsoft.Json.JsonTextReader`                             |
|  +68.1% |   +4.66ms |   0.1% → 0.2% |    6.9ms → 11.5ms | `DeserializeObject(String, Type, JsonSerializerSettings)` | `Newtonsoft.Json.JsonConvert`                                |
|     new |   +4.15ms |   0.0% → 0.1% |       0ms → 4.1ms | `ValidateEnd(JsonToken)`                                  | `Newtonsoft.Json.JsonReader`                                 |
|  +43.6% |   +4.09ms |   0.2% → 0.3% |    9.4ms → 13.5ms | `Deserialize(JsonReader, Type, bool)`                     | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |
|     new |   +3.98ms |   0.0% → 0.1% |       0ms → 4.0ms | `Push(JsonContainerType)`                                 | `Newtonsoft.Json.JsonReader`                                 |
|  +95.1% |   +2.65ms |          0.1% |     2.8ms → 5.4ms | `DeserializeInternal(JsonReader, Type)`                   | `Newtonsoft.Json.JsonSerializer`                             |
|   +9.9% |   +1.60ms |   0.3% → 0.4% |   16.1ms → 17.7ms | `WriteValue(float64)`                                     | `Newtonsoft.Json.JsonTextWriter`                             |
|     new |   +1.44ms |  0.0% → <0.1% |       0ms → 1.4ms | `AutoComplete(JsonToken)`                                 | `Newtonsoft.Json.JsonWriter`                                 |
|     new |   +1.43ms |  0.0% → <0.1% |       0ms → 1.4ms | `WriteEscapedString(String, bool)`                        | `Newtonsoft.Json.JsonTextWriter`                             |
|     new |   +1.41ms |  0.0% → <0.1% |       0ms → 1.4ms | `GetMatchingConverter(Type)`                              | `Newtonsoft.Json.JsonSerializer`                             |

##### Standard library

|         Change |    Delta |             % |              Time | Function                                                                                     | Location                                                                                |
| -------------: | -------: | ------------: | ----------------: | -------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
|          +7.3% | +61.75ms | 17.9% → 19.1% | 846.1ms → 907.9ms | `CopyTo(Array, int32)`                                                                       | ``System.Collections.Generic.List`1[System.__Canon].System.Collections.ICollection``    |
|         +23.2% |  +7.52ms |   0.7% → 0.8% |   32.5ms → 40.0ms | `Memmove(unsigned int8&, unsigned int8&, unsigned int)`                                      | `System.Buffer`                                                                         |
|         +68.4% |  +6.42ms |   0.2% → 0.3% |    9.4ms → 15.8ms | `Append(wchar&, int32)`                                                                      | `System.Text.StringBuilder`                                                             |
|         +48.1% |  +5.17ms |   0.2% → 0.3% |   10.8ms → 15.9ms | `TryGetValueInternal(Tables<!0, !1>, !0, int32, !1&)`                                        | ``System.Collections.Concurrent.ConcurrentDictionary`2[System.__Canon,System.__Canon]`` |
|         +31.2% |  +3.80ms |          0.3% |   12.2ms → 16.0ms | `IndexOf(!0[], !0, int32, int32)`                                                            | ``System.Collections.Generic.ObjectEqualityComparer`1[System.__Canon]``                 |
|         +21.6% |  +2.66ms |          0.3% |   12.3ms → 15.0ms | `FormatDouble(float64, String, NumberFormatInfo)`                                            | `System.Number`                                                                         |
|        +194.5% |  +2.64ms |  <0.1% → 0.1% |     1.4ms → 4.0ms | `ToString()`                                                                                 | `System.Text.StringBuilder`                                                             |
|            new |  +1.45ms |  0.0% → <0.1% |       0ms → 1.4ms | `Write(wchar)`                                                                               | `System.IO.StringWriter`                                                                |
|         +35.3% |  +1.43ms |          0.1% |     4.1ms → 5.5ms | ``MatchChars(!!0*, !!0*, ReadOnlySpan`1<!!0>)``                                              | `System.Number`                                                                         |
| +1148121000.0% |  +1.37ms |         <0.1% |    <0.1µs → 1.4ms | ``TryParseFloat(ReadOnlySpan`1<!!0>, NumberStyles, NumberFormatInfo, !!1&)``                 | `System.Number`                                                                         |
|         +50.2% |  +1.37ms |          0.1% |     2.7ms → 4.1ms | `TryRunDouble(float64, int32, NumberBuffer&)`                                                | `System.Number+Grisu3`                                                                  |
|            new |  +1.35ms |  0.0% → <0.1% |       0ms → 1.4ms | `Ctor(wchar[], int32, int32)`                                                                | `System.String`                                                                         |
|            new |  +1.34ms |  0.0% → <0.1% |       0ms → 1.3ms | `ToString()`                                                                                 | ``System.ReadOnlySpan`1[System.Char]``                                                  |
|            new |  +1.34ms |  0.0% → <0.1% |       0ms → 1.3ms | `Concat(String, String)`                                                                     | `System.String`                                                                         |
|          +1.2% |  +0.20ms |          0.3% |   16.1ms → 16.3ms | ``FormatDouble(ValueListBuilder`1<!!0>&, float64, ReadOnlySpan`1<wchar>, NumberFormatInfo)`` | `System.Number`                                                                         |
|          +3.0% |  +0.04ms |         <0.1% |             1.4ms | ``ParseFormatSpecifier(ReadOnlySpan`1<wchar>, int32&)``                                      | `System.Number`                                                                         |
|          +1.3% |  +0.02ms |         <0.1% |     1.3ms → 1.4ms | `AddWithResize(!0)`                                                                          | ``System.Collections.Generic.List`1[Newtonsoft.Json.JsonPosition]``                     |
|        +316.6% | +<0.01µs |         <0.1% |            <0.1µs | `CreateManifestAndDescriptors(Type, String, EventSource, EventManifestOptions)`              | `System.Diagnostics.Tracing.EventSource`                                                |
|            new | +<0.01µs |  0.0% → <0.1% |      0ms → <0.1µs | `TryParse(String, NumberStyles, IFormatProvider, float64&)`                                  | `System.Double`                                                                         |
|            new | +<0.01µs |  0.0% → <0.1% |      0ms → <0.1µs | ``GetOrAdd(!0, Func`2<!0, !1>)``                                                             | ``System.Collections.Concurrent.ConcurrentDictionary`2[System.__Canon,System.__Canon]`` |

##### Native

| Change |    Delta |           % |              Time | Function              | Location    |
| -----: | -------: | ----------: | ----------------: | --------------------- | ----------- |
| +17.4% | +19.19ms | 2.3% → 2.7% | 110.6ms → 129.7ms | `UNMANAGED_CODE_TIME` | `<unknown>` |

#### Improvements

Functions with the largest decrease in time spent directly in the function body, excluding callees.

|  Change |    Delta |            % |              Time | Function                                                                                                         | Location                                                                   |
| ------: | -------: | -----------: | ----------------: | ---------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
|  -12.6% | -39.66ms |  6.7% → 5.8% | 315.7ms → 276.1ms | `SerializeObject(JsonWriter, Object, JsonObjectContract, JsonProperty, JsonContainerContract, JsonProperty)`     | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`               |
|  -39.9% | -21.57ms |  1.1% → 0.7% |   54.1ms → 32.6ms | `ParseValue()`                                                                                                   | `Newtonsoft.Json.JsonTextReader`                                           |
|  -41.4% | -17.18ms |  0.9% → 0.5% |   41.5ms → 24.3ms | `FindValue(!0)`                                                                                                  | ``System.Collections.Generic.Dictionary`2[System.__Canon,System.__Canon]`` |
| removed | -16.19ms |  0.3% → 0.0% |      16.2ms → 0ms | `GetValue(Object)`                                                                                               | `Newtonsoft.Json.Serialization.ExpressionValueProvider`                    |
|  -36.7% | -14.81ms |  0.9% → 0.5% |   40.3ms → 25.5ms | `ReadStringValue(ReadType)`                                                                                      | `Newtonsoft.Json.JsonTextReader`                                           |
|  -83.0% | -13.29ms |  0.3% → 0.1% |    16.0ms → 2.7ms | `CheckForCircularReference(JsonWriter, Object, JsonProperty, JsonContract, JsonContainerContract, JsonProperty)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`               |
|  -44.0% | -12.58ms |  0.6% → 0.3% |   28.6ms → 16.0ms | ``TryDigitGenShortest(DiyFp&, DiyFp&, DiyFp&, Span`1<unsigned int8>, int32&, int32&)``                           | `System.Number+Grisu3`                                                     |
|  -75.1% | -12.26ms |  0.3% → 0.1% |    16.3ms → 4.1ms | `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader`               |
|  -64.0% | -12.07ms |  0.4% → 0.1% |    18.9ms → 6.8ms | `EnsureType(JsonReader, Object, CultureInfo, JsonContract, Type)`                                                | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader`               |
|   -6.4% | -10.83ms |  3.6% → 3.3% | 169.2ms → 158.4ms | `SerializeList(JsonWriter, IEnumerable, JsonArrayContract, JsonProperty, JsonContainerContract, JsonProperty)`   | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`               |
|  -79.5% | -10.61ms |  0.3% → 0.1% |    13.3ms → 2.7ms | `ParseReadString(wchar, ReadType)`                                                                               | `Newtonsoft.Json.JsonTextReader`                                           |
|  -60.2% |  -9.70ms |  0.3% → 0.1% |    16.1ms → 6.4ms | `IsInstanceOfInterface(void*, Object)`                                                                           | `System.Runtime.CompilerServices.CastHelpers`                              |
|  -76.5% |  -9.11ms |  0.3% → 0.1% |    11.9ms → 2.8ms | `NonPackedIndexOfValueType(!!0&, !!0, int32)`                                                                    | `System.SpanHelpers`                                                       |
|  -66.5% |  -8.07ms |  0.3% → 0.1% |    12.1ms → 4.1ms | `IsInstance_Helper(void*, Object)`                                                                               | `System.Runtime.CompilerServices.CastHelpers`                              |
|  -84.0% |  -6.97ms | 0.2% → <0.1% |     8.3ms → 1.3ms | `WriteNull()`                                                                                                    | `Newtonsoft.Json.JsonTextWriter`                                           |
|  -56.1% |  -6.78ms |  0.3% → 0.1% |    12.1ms → 5.3ms | ``FormatGeneral(ValueListBuilder`1<!!0>&, NumberBuffer&, int32, NumberFormatInfo, wchar, bool)``                 | `System.Number`                                                            |
|  -70.7% |  -6.57ms |  0.2% → 0.1% |     9.3ms → 2.7ms | `SetStateBasedOnCurrent()`                                                                                       | `Newtonsoft.Json.JsonReader`                                               |
|   -8.6% |  -5.89ms |  1.4% → 1.3% |   68.2ms → 62.3ms | `ReadNumberValue(ReadType)`                                                                                      | `Newtonsoft.Json.JsonTextReader`                                           |
|  -66.4% |  -5.39ms |  0.2% → 0.1% |     8.1ms → 2.7ms | `RoundNumber(NumberBuffer&, int32, bool)`                                                                        | `System.Number`                                                            |
|  -13.7% |  -5.00ms |  0.8% → 0.7% |   36.6ms → 31.6ms | `Read()`                                                                                                         | `Newtonsoft.Json.JsonTextReader`                                           |

##### Ours

|  Change |    Delta |            % |              Time | Function                                                                                                                       | Location                                                     |
| ------: | -------: | -----------: | ----------------: | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------ |
|  -12.6% | -39.66ms |  6.7% → 5.8% | 315.7ms → 276.1ms | `SerializeObject(JsonWriter, Object, JsonObjectContract, JsonProperty, JsonContainerContract, JsonProperty)`                   | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |
|  -39.9% | -21.57ms |  1.1% → 0.7% |   54.1ms → 32.6ms | `ParseValue()`                                                                                                                 | `Newtonsoft.Json.JsonTextReader`                             |
| removed | -16.19ms |  0.3% → 0.0% |      16.2ms → 0ms | `GetValue(Object)`                                                                                                             | `Newtonsoft.Json.Serialization.ExpressionValueProvider`      |
|  -36.7% | -14.81ms |  0.9% → 0.5% |   40.3ms → 25.5ms | `ReadStringValue(ReadType)`                                                                                                    | `Newtonsoft.Json.JsonTextReader`                             |
|  -83.0% | -13.29ms |  0.3% → 0.1% |    16.0ms → 2.7ms | `CheckForCircularReference(JsonWriter, Object, JsonProperty, JsonContract, JsonContainerContract, JsonProperty)`               | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |
|  -75.1% | -12.26ms |  0.3% → 0.1% |    16.3ms → 4.1ms | `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)`               | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |
|  -64.0% | -12.07ms |  0.4% → 0.1% |    18.9ms → 6.8ms | `EnsureType(JsonReader, Object, CultureInfo, JsonContract, Type)`                                                              | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |
|   -6.4% | -10.83ms |  3.6% → 3.3% | 169.2ms → 158.4ms | `SerializeList(JsonWriter, IEnumerable, JsonArrayContract, JsonProperty, JsonContainerContract, JsonProperty)`                 | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |
|  -79.5% | -10.61ms |  0.3% → 0.1% |    13.3ms → 2.7ms | `ParseReadString(wchar, ReadType)`                                                                                             | `Newtonsoft.Json.JsonTextReader`                             |
|  -84.0% |  -6.97ms | 0.2% → <0.1% |     8.3ms → 1.3ms | `WriteNull()`                                                                                                                  | `Newtonsoft.Json.JsonTextWriter`                             |
|  -70.7% |  -6.57ms |  0.2% → 0.1% |     9.3ms → 2.7ms | `SetStateBasedOnCurrent()`                                                                                                     | `Newtonsoft.Json.JsonReader`                                 |
|   -8.6% |  -5.89ms |  1.4% → 1.3% |   68.2ms → 62.3ms | `ReadNumberValue(ReadType)`                                                                                                    | `Newtonsoft.Json.JsonTextReader`                             |
|  -13.7% |  -5.00ms |  0.8% → 0.7% |   36.6ms → 31.6ms | `Read()`                                                                                                                       | `Newtonsoft.Json.JsonTextReader`                             |
|  -10.2% |  -4.40ms |  0.9% → 0.8% |   43.0ms → 38.6ms | `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)`                          | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |
|   -5.8% |  -4.02ms |  1.5% → 1.4% |   69.9ms → 65.8ms | ``WriteEscapedJavaScriptString(TextWriter, String, wchar, bool, bool[], StringEscapeHandling, IArrayPool`1<wchar>, wchar[]&)`` | `Newtonsoft.Json.Utilities.JavaScriptUtils`                  |
|  -18.6% |  -3.75ms |  0.4% → 0.3% |   20.2ms → 16.5ms | `ReadAsDouble()`                                                                                                               | `Newtonsoft.Json.JsonTextReader`                             |
|   -7.6% |  -3.68ms |  1.0% → 0.9% |   48.6ms → 45.0ms | `SetToken(JsonToken, Object, bool)`                                                                                            | `Newtonsoft.Json.JsonReader`                                 |
| removed |  -2.71ms |  0.1% → 0.0% |       2.7ms → 0ms | `SetValue(Object, Object)`                                                                                                     | `Newtonsoft.Json.Serialization.ExpressionValueProvider`      |
| -100.0% |  -2.71ms | 0.1% → <0.1% |    2.7ms → <0.1µs | `CalculatePropertyValues(JsonWriter, Object, JsonContainerContract, JsonProperty, JsonProperty, JsonContract&, Object&)`       | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |
|  -64.9% |  -2.68ms | 0.1% → <0.1% |     4.1ms → 1.4ms | `Get(wchar[], int32, int32)`                                                                                                   | `Newtonsoft.Json.DefaultJsonNameTable`                       |

##### Standard library

|  Change |    Delta |            % |            Time | Function                                                                                         | Location                                                                         |
| ------: | -------: | -----------: | --------------: | ------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------- |
|  -41.4% | -17.18ms |  0.9% → 0.5% | 41.5ms → 24.3ms | `FindValue(!0)`                                                                                  | ``System.Collections.Generic.Dictionary`2[System.__Canon,System.__Canon]``       |
|  -44.0% | -12.58ms |  0.6% → 0.3% | 28.6ms → 16.0ms | ``TryDigitGenShortest(DiyFp&, DiyFp&, DiyFp&, Span`1<unsigned int8>, int32&, int32&)``           | `System.Number+Grisu3`                                                           |
|  -60.2% |  -9.70ms |  0.3% → 0.1% |  16.1ms → 6.4ms | `IsInstanceOfInterface(void*, Object)`                                                           | `System.Runtime.CompilerServices.CastHelpers`                                    |
|  -76.5% |  -9.11ms |  0.3% → 0.1% |  11.9ms → 2.8ms | `NonPackedIndexOfValueType(!!0&, !!0, int32)`                                                    | `System.SpanHelpers`                                                             |
|  -66.5% |  -8.07ms |  0.3% → 0.1% |  12.1ms → 4.1ms | `IsInstance_Helper(void*, Object)`                                                               | `System.Runtime.CompilerServices.CastHelpers`                                    |
|  -56.1% |  -6.78ms |  0.3% → 0.1% |  12.1ms → 5.3ms | ``FormatGeneral(ValueListBuilder`1<!!0>&, NumberBuffer&, int32, NumberFormatInfo, wchar, bool)`` | `System.Number`                                                                  |
|  -66.4% |  -5.39ms |  0.2% → 0.1% |   8.1ms → 2.7ms | `RoundNumber(NumberBuffer&, int32, bool)`                                                        | `System.Number`                                                                  |
|  -17.7% |  -4.09ms |  0.5% → 0.4% | 23.2ms → 19.1ms | `Add(Object)`                                                                                    | ``System.Collections.Generic.List`1[System.__Canon].System.Collections.IList``   |
|  -11.1% |  -3.75ms |  0.7% → 0.6% | 33.8ms → 30.0ms | `TryParseNumber(!!0*&, !!0*, NumberStyles, NumberBuffer&, NumberFormatInfo)`                     | `System.Number`                                                                  |
| removed |  -2.76ms |  0.1% → 0.0% |     2.8ms → 0ms | `IndexOf(wchar, StringComparison)`                                                               | `System.String`                                                                  |
|  -32.5% |  -2.68ms |  0.2% → 0.1% |   8.3ms → 5.6ms | `ChkCastInterface(void*, Object)`                                                                | `System.Runtime.CompilerServices.CastHelpers`                                    |
|  -22.0% |  -1.48ms |         0.1% |   6.7ms → 5.2ms | `Copy(Array, int32, Array, int32, int32)`                                                        | `System.Array`                                                                   |
|  -35.1% |  -1.46ms |         0.1% |   4.2ms → 2.7ms | `AddWithResize(!0)`                                                                              | ``System.Collections.Generic.List`1[System.__Canon]``                            |
|  -50.0% |  -1.35ms | 0.1% → <0.1% |   2.7ms → 1.3ms | `<GetInstance>g__GetProviderNonNull\|58_0(IFormatProvider)`                                      | `System.Globalization.NumberFormatInfo`                                          |
| removed |  -1.34ms | <0.1% → 0.0% |     1.3ms → 0ms | `IndexOf(!!0[], !!0, int32, int32)`                                                              | `System.Array`                                                                   |
| removed |  -1.34ms | <0.1% → 0.0% |     1.3ms → 0ms | `GetHashCode(String)`                                                                            | `System.Collections.Generic.NonRandomizedStringEqualityComparer+OrdinalComparer` |
| removed |  -1.30ms | <0.1% → 0.0% |     1.3ms → 0ms | `IsInstanceOfClass(void*, Object)`                                                               | `System.Runtime.CompilerServices.CastHelpers`                                    |
|  -11.8% |  -1.28ms |         0.2% |  10.8ms → 9.5ms | `GetNonRandomizedHashCode()`                                                                     | `System.String`                                                                  |
|   -0.1% |  -0.01ms |         0.2% |           8.1ms | `StelemRef(Array, int, Object)`                                                                  | `System.Runtime.CompilerServices.CastHelpers`                                    |
| removed | -<0.01µs | <0.1% → 0.0% |    <0.1µs → 0ms | `Compile(LambdaExpression)`                                                                      | `System.Linq.Expressions.Compiler.LambdaCompiler`                                |

### Total time

#### Regressions

Functions with the largest increase in total time spent in the function and all its callees.

| Change |     Delta |             % |              Time | Function                                                                                                         | Location                                                                             |
| -----: | --------: | ------------: | ----------------: | ---------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
|  +3.0% | +112.31ms | 79.1% → 80.9% |     3.73s → 3.85s | `DeserializeObject(String, Type, JsonSerializerSettings)`                                                        | `Newtonsoft.Json.JsonConvert`                                                        |
|  +2.8% | +106.26ms | 78.9% → 80.6% |     3.73s → 3.83s | `DeserializeInternal(JsonReader, Type)`                                                                          | `Newtonsoft.Json.JsonSerializer`                                                     |
|  +2.8% | +104.89ms | 78.8% → 80.4% |     3.72s → 3.82s | `Deserialize(JsonReader, Type, bool)`                                                                            | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader`                         |
|  +2.6% |  +95.68ms | 77.7% → 79.1% |     3.67s → 3.76s | `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)`        | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader`                         |
|  +2.6% |  +94.34ms | 77.7% → 79.1% |     3.67s → 3.76s | `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader`                         |
|  +2.2% |  +81.79ms | 77.2% → 78.3% |     3.64s → 3.72s | `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)`                                   | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader`                         |
|  +2.9% |  +66.04ms | 48.1% → 49.1% |     2.27s → 2.33s | `ReadForType(JsonContract, bool)`                                                                                | `Newtonsoft.Json.JsonReader`                                                         |
|  +7.1% |  +60.28ms | 18.0% → 19.2% | 852.8ms → 913.1ms | `CopyTo(Array, int32)`                                                                                           | ``System.Collections.Generic.List`1[System.__Canon].System.Collections.ICollection`` |
|  +0.7% |  +35.25ms |         99.6% |     4.70s → 4.74s | `Main()`                                                                                                         | `Profile.Program`                                                                    |
|  +1.5% |  +31.98ms | 45.0% → 45.3% |     2.12s → 2.15s | `CreateList(JsonReader, Type, JsonContract, JsonProperty, Object, String)`                                       | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader`                         |
|    new |  +20.52ms |   0.0% → 0.4% |      0ms → 20.5ms | `GetValue(Object)`                                                                                               | `Newtonsoft.Json.Serialization.DynamicValueProvider`                                 |
| +17.4% |  +19.19ms |   2.3% → 2.7% | 110.6ms → 129.7ms | `UNMANAGED_CODE_TIME`                                                                                            | `<unknown>`                                                                          |
| +11.3% |  +19.02ms |   3.6% → 3.9% | 168.2ms → 187.2ms | `ParseObject()`                                                                                                  | `Newtonsoft.Json.JsonTextReader`                                                     |
| +14.7% |  +14.89ms |   2.1% → 2.4% | 101.2ms → 116.1ms | `ParseReadNumber(ReadType, wchar, int32)`                                                                        | `Newtonsoft.Json.JsonTextReader`                                                     |
|  +6.5% |  +14.77ms |   4.8% → 5.1% | 226.0ms → 240.8ms | `DeserializeObject(String, JsonSerializerSettings)`                                                              | `Newtonsoft.Json.JsonConvert`                                                        |
|  +6.5% |  +14.77ms |   4.8% → 5.1% | 226.0ms → 240.8ms | `DeserializeObject(String)`                                                                                      | `Newtonsoft.Json.JsonConvert`                                                        |
|    new |  +13.47ms |   0.0% → 0.3% |      0ms → 13.5ms | `SetValue(Object, Object)`                                                                                       | `Newtonsoft.Json.Serialization.DynamicValueProvider`                                 |
|  +8.7% |  +10.48ms |   2.5% → 2.7% | 120.1ms → 130.6ms | `ReadStringIntoBuffer(wchar)`                                                                                    | `Newtonsoft.Json.JsonTextReader`                                                     |
|  +5.5% |   +8.23ms |   3.2% → 3.3% | 149.5ms → 157.7ms | `ParseProperty()`                                                                                                | `Newtonsoft.Json.JsonTextReader`                                                     |
| +81.3% |   +7.63ms |   0.2% → 0.4% |    9.4ms → 17.0ms | `Append(wchar&, int32)`                                                                                          | `System.Text.StringBuilder`                                                          |

##### Ours

|  Change |     Delta |             % |              Time | Function                                                                                                         | Location                                                     |
| ------: | --------: | ------------: | ----------------: | ---------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
|   +3.0% | +112.31ms | 79.1% → 80.9% |     3.73s → 3.85s | `DeserializeObject(String, Type, JsonSerializerSettings)`                                                        | `Newtonsoft.Json.JsonConvert`                                |
|   +2.8% | +106.26ms | 78.9% → 80.6% |     3.73s → 3.83s | `DeserializeInternal(JsonReader, Type)`                                                                          | `Newtonsoft.Json.JsonSerializer`                             |
|   +2.8% | +104.89ms | 78.8% → 80.4% |     3.72s → 3.82s | `Deserialize(JsonReader, Type, bool)`                                                                            | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |
|   +2.6% |  +95.68ms | 77.7% → 79.1% |     3.67s → 3.76s | `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)`        | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |
|   +2.6% |  +94.34ms | 77.7% → 79.1% |     3.67s → 3.76s | `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |
|   +2.2% |  +81.79ms | 77.2% → 78.3% |     3.64s → 3.72s | `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)`                                   | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |
|   +2.9% |  +66.04ms | 48.1% → 49.1% |     2.27s → 2.33s | `ReadForType(JsonContract, bool)`                                                                                | `Newtonsoft.Json.JsonReader`                                 |
|   +0.7% |  +35.25ms |         99.6% |     4.70s → 4.74s | `Main()`                                                                                                         | `Profile.Program`                                            |
|   +1.5% |  +31.98ms | 45.0% → 45.3% |     2.12s → 2.15s | `CreateList(JsonReader, Type, JsonContract, JsonProperty, Object, String)`                                       | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |
|     new |  +20.52ms |   0.0% → 0.4% |      0ms → 20.5ms | `GetValue(Object)`                                                                                               | `Newtonsoft.Json.Serialization.DynamicValueProvider`         |
|  +11.3% |  +19.02ms |   3.6% → 3.9% | 168.2ms → 187.2ms | `ParseObject()`                                                                                                  | `Newtonsoft.Json.JsonTextReader`                             |
|  +14.7% |  +14.89ms |   2.1% → 2.4% | 101.2ms → 116.1ms | `ParseReadNumber(ReadType, wchar, int32)`                                                                        | `Newtonsoft.Json.JsonTextReader`                             |
|   +6.5% |  +14.77ms |   4.8% → 5.1% | 226.0ms → 240.8ms | `DeserializeObject(String, JsonSerializerSettings)`                                                              | `Newtonsoft.Json.JsonConvert`                                |
|   +6.5% |  +14.77ms |   4.8% → 5.1% | 226.0ms → 240.8ms | `DeserializeObject(String)`                                                                                      | `Newtonsoft.Json.JsonConvert`                                |
|     new |  +13.47ms |   0.0% → 0.3% |      0ms → 13.5ms | `SetValue(Object, Object)`                                                                                       | `Newtonsoft.Json.Serialization.DynamicValueProvider`         |
|   +8.7% |  +10.48ms |   2.5% → 2.7% | 120.1ms → 130.6ms | `ReadStringIntoBuffer(wchar)`                                                                                    | `Newtonsoft.Json.JsonTextReader`                             |
|   +5.5% |   +8.23ms |   3.2% → 3.3% | 149.5ms → 157.7ms | `ParseProperty()`                                                                                                | `Newtonsoft.Json.JsonTextReader`                             |
|   +4.4% |   +7.58ms |   3.7% → 3.8% | 173.5ms → 181.0ms | `ReadNumberValue(ReadType)`                                                                                      | `Newtonsoft.Json.JsonTextReader`                             |
| +250.7% |   +6.74ms |   0.1% → 0.2% |     2.7ms → 9.4ms | `Int32TryParse(wchar[], int32, int32, int32&)`                                                                   | `Newtonsoft.Json.Utilities.ConvertUtils`                     |
|   +6.4% |   +6.51ms |   2.2% → 2.3% | 101.6ms → 108.1ms | `ReadAsInt32()`                                                                                                  | `Newtonsoft.Json.JsonTextReader`                             |

##### Standard library

|  Change |    Delta |             % |              Time | Function                                                                                                                                                                           | Location                                                                                |
| ------: | -------: | ------------: | ----------------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
|   +7.1% | +60.28ms | 18.0% → 19.2% | 852.8ms → 913.1ms | `CopyTo(Array, int32)`                                                                                                                                                             | ``System.Collections.Generic.List`1[System.__Canon].System.Collections.ICollection``    |
|  +81.3% |  +7.63ms |   0.2% → 0.4% |    9.4ms → 17.0ms | `Append(wchar&, int32)`                                                                                                                                                            | `System.Text.StringBuilder`                                                             |
|  +23.2% |  +7.52ms |   0.7% → 0.8% |   32.5ms → 40.0ms | `Memmove(unsigned int8&, unsigned int8&, unsigned int)`                                                                                                                            | `System.Buffer`                                                                         |
|     new |  +5.93ms |   0.0% → 0.1% |       0ms → 5.9ms | `ToString()`                                                                                                                                                                       | ``System.ReadOnlySpan`1[System.Char]``                                                  |
|     new |  +5.72ms |   0.0% → 0.1% |       0ms → 5.7ms | `Ctor(wchar[], int32, int32)`                                                                                                                                                      | `System.String`                                                                         |
| +403.4% |  +5.43ms |  <0.1% → 0.1% |     1.3ms → 6.8ms | `Concat(String, String)`                                                                                                                                                           | `System.String`                                                                         |
|     new |  +5.36ms |   0.0% → 0.1% |       0ms → 5.4ms | `DefineEventHandle(unsigned int32, String, int64, unsigned int32, unsigned int32, unsigned int8*, unsigned int32)`                                                                 | `System.Diagnostics.Tracing.EventPipeEventProvider`                                     |
|     new |  +5.36ms |   0.0% → 0.1% |       0ms → 5.4ms | `DefineEventPipeEvents()`                                                                                                                                                          | `System.Diagnostics.Tracing.EventSource`                                                |
|  +48.1% |  +5.17ms |   0.2% → 0.3% |   10.8ms → 15.9ms | `TryGetValueInternal(Tables<!0, !1>, !0, int32, !1&)`                                                                                                                              | ``System.Collections.Concurrent.ConcurrentDictionary`2[System.__Canon,System.__Canon]`` |
|  +88.5% |  +4.66ms |   0.1% → 0.2% |     5.3ms → 9.9ms | `Write(String)`                                                                                                                                                                    | `System.IO.StringWriter`                                                                |
|     new |  +4.59ms |   0.0% → 0.1% |       0ms → 4.6ms | ``Ctor(ReadOnlySpan`1<wchar>)``                                                                                                                                                    | `System.String`                                                                         |
|     new |  +4.05ms |   0.0% → 0.1% |       0ms → 4.0ms | ``FilterCustomAttributeRecord(MetadataToken, MetadataImport&, RuntimeModule, MetadataToken, RuntimeType, bool, ListBuilder`1<Object>&, RuntimeType&, IRuntimeMethodInfo&, bool&)`` | `System.Reflection.CustomAttribute`                                                     |
|  +31.2% |  +3.80ms |          0.3% |   12.2ms → 16.0ms | `IndexOf(!0[], !0, int32, int32)`                                                                                                                                                  | ``System.Collections.Generic.ObjectEqualityComparer`1[System.__Canon]``                 |
| +206.9% |  +2.78ms |  <0.1% → 0.1% |     1.3ms → 4.1ms | `AppendWithExpansion(wchar&, int32)`                                                                                                                                               | `System.Text.StringBuilder`                                                             |
|     new |  +2.69ms |   0.0% → 0.1% |       0ms → 2.7ms | `ResolveTypeHandle(int32, RuntimeTypeHandle[], RuntimeTypeHandle[])`                                                                                                               | `System.ModuleHandle`                                                                   |
|     new |  +2.69ms |   0.0% → 0.1% |       0ms → 2.7ms | `ResolveType(int32, Type[], Type[])`                                                                                                                                               | `System.Reflection.RuntimeModule`                                                       |
|  +99.0% |  +2.68ms |          0.1% |     2.7ms → 5.4ms | ``AddCustomAttributes(ListBuilder`1<Object>&, RuntimeModule, int32, RuntimeType, bool, ListBuilder`1<Object>)``                                                                    | `System.Reflection.CustomAttribute`                                                     |
|  +18.2% |  +2.46ms |          0.3% |   13.5ms → 16.0ms | `IndexOf(!!0[], !!0, int32, int32)`                                                                                                                                                | `System.Array`                                                                          |
|     new |  +1.45ms |  0.0% → <0.1% |       0ms → 1.4ms | `Write(wchar)`                                                                                                                                                                     | `System.IO.StringWriter`                                                                |
|   +9.8% |  +1.44ms |          0.3% |   14.7ms → 16.1ms | `EnsureDescriptorsInitialized()`                                                                                                                                                   | `System.Diagnostics.Tracing.EventSource`                                                |

##### Native

| Change |    Delta |           % |              Time | Function              | Location    |
| -----: | -------: | ----------: | ----------------: | --------------------- | ----------- |
| +17.4% | +19.19ms | 2.3% → 2.7% | 110.6ms → 129.7ms | `UNMANAGED_CODE_TIME` | `<unknown>` |

#### Improvements

Functions with the largest decrease in total time spent in the function and all its callees.

|  Change |    Delta |             % |              Time | Function                                                                                                         | Location                                                                   |
| ------: | -------: | ------------: | ----------------: | ---------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
|  -10.1% | -91.29ms | 19.1% → 17.0% | 900.3ms → 809.0ms | `SerializeObject(JsonWriter, Object, JsonObjectContract, JsonProperty, JsonContainerContract, JsonProperty)`     | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`               |
|   -9.5% | -85.65ms | 19.1% → 17.1% | 900.3ms → 814.6ms | `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)`            | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`               |
|   -9.0% | -83.97ms | 19.7% → 17.8% | 931.1ms → 847.1ms | `Serialize(JsonWriter, Object, Type)`                                                                            | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`               |
|   -9.0% | -83.91ms | 19.7% → 17.8% | 932.4ms → 848.5ms | `SerializeInternal(JsonWriter, Object, Type)`                                                                    | `Newtonsoft.Json.JsonSerializer`                                           |
|   -7.6% | -72.93ms | 20.2% → 18.5% | 953.7ms → 880.8ms | `SerializeObjectInternal(Object, Type, JsonSerializer)`                                                          | `Newtonsoft.Json.JsonConvert`                                              |
|   -9.1% | -60.11ms | 13.9% → 12.5% | 657.0ms → 596.9ms | `SerializeList(JsonWriter, IEnumerable, JsonArrayContract, JsonProperty, JsonContainerContract, JsonProperty)`   | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`               |
|  -21.8% | -35.44ms |   3.4% → 2.7% | 162.9ms → 127.4ms | `ReadStringValue(ReadType)`                                                                                      | `Newtonsoft.Json.JsonTextReader`                                           |
|  -12.5% | -22.34ms |   3.8% → 3.3% | 178.5ms → 156.2ms | `SetPropertyValue(JsonProperty, JsonConverter, JsonContainerContract, JsonProperty, JsonReader, Object)`         | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader`               |
|  -31.6% | -21.77ms |   1.5% → 1.0% |   69.0ms → 47.2ms | ``FormatDouble(ValueListBuilder`1<!!0>&, float64, ReadOnlySpan`1<wchar>, NumberFormatInfo)``                     | `System.Number`                                                            |
| removed | -21.64ms |   0.5% → 0.0% |      21.6ms → 0ms | `GetValue(Object)`                                                                                               | `Newtonsoft.Json.Serialization.ExpressionValueProvider`                    |
|  -36.9% | -19.81ms |   1.1% → 0.7% |   53.7ms → 33.9ms | `FindValue(!0)`                                                                                                  | ``System.Collections.Generic.Dictionary`2[System.__Canon,System.__Canon]`` |
|   -7.1% | -16.94ms |   5.1% → 4.7% | 240.0ms → 223.0ms | `WriteValue(JsonWriter, PrimitiveTypeCode, Object)`                                                              | `Newtonsoft.Json.JsonWriter`                                               |
|  -12.9% | -15.78ms |   2.6% → 2.2% | 122.7ms → 106.9ms | `WriteValue(float64)`                                                                                            | `Newtonsoft.Json.JsonTextWriter`                                           |
|  -17.6% | -14.53ms |   1.7% → 1.4% |   82.7ms → 68.1ms | `FormatDouble(float64, String, NumberFormatInfo)`                                                                | `System.Number`                                                            |
|  -47.2% | -13.35ms |   0.6% → 0.3% |   28.3ms → 14.9ms | `ParseReadString(wchar, ReadType)`                                                                               | `Newtonsoft.Json.JsonTextReader`                                           |
|  -44.0% | -12.58ms |   0.6% → 0.3% |   28.6ms → 16.0ms | ``TryDigitGenShortest(DiyFp&, DiyFp&, DiyFp&, Span`1<unsigned int8>, int32&, int32&)``                           | `System.Number+Grisu3`                                                     |
|  -15.4% | -12.31ms |   1.7% → 1.4% |   79.9ms → 67.6ms | `ParseValue()`                                                                                                   | `Newtonsoft.Json.JsonTextReader`                                           |
|  -39.5% | -12.18ms |   0.7% → 0.4% |   30.9ms → 18.7ms | `CheckForCircularReference(JsonWriter, Object, JsonProperty, JsonContract, JsonContainerContract, JsonProperty)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`               |
|  -60.2% | -12.17ms |   0.4% → 0.2% |    20.2ms → 8.0ms | ``NumberToString(ValueListBuilder`1<!!0>&, NumberBuffer&, wchar, int32, NumberFormatInfo)``                      | `System.Number`                                                            |
|  -64.0% | -12.07ms |   0.4% → 0.1% |    18.9ms → 6.8ms | `EnsureType(JsonReader, Object, CultureInfo, JsonContract, Type)`                                                | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader`               |

##### Ours

|  Change |    Delta |             % |              Time | Function                                                                                                         | Location                                                                       |
| ------: | -------: | ------------: | ----------------: | ---------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
|  -10.1% | -91.29ms | 19.1% → 17.0% | 900.3ms → 809.0ms | `SerializeObject(JsonWriter, Object, JsonObjectContract, JsonProperty, JsonContainerContract, JsonProperty)`     | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`                   |
|   -9.5% | -85.65ms | 19.1% → 17.1% | 900.3ms → 814.6ms | `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)`            | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`                   |
|   -9.0% | -83.97ms | 19.7% → 17.8% | 931.1ms → 847.1ms | `Serialize(JsonWriter, Object, Type)`                                                                            | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`                   |
|   -9.0% | -83.91ms | 19.7% → 17.8% | 932.4ms → 848.5ms | `SerializeInternal(JsonWriter, Object, Type)`                                                                    | `Newtonsoft.Json.JsonSerializer`                                               |
|   -7.6% | -72.93ms | 20.2% → 18.5% | 953.7ms → 880.8ms | `SerializeObjectInternal(Object, Type, JsonSerializer)`                                                          | `Newtonsoft.Json.JsonConvert`                                                  |
|   -9.1% | -60.11ms | 13.9% → 12.5% | 657.0ms → 596.9ms | `SerializeList(JsonWriter, IEnumerable, JsonArrayContract, JsonProperty, JsonContainerContract, JsonProperty)`   | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`                   |
|  -21.8% | -35.44ms |   3.4% → 2.7% | 162.9ms → 127.4ms | `ReadStringValue(ReadType)`                                                                                      | `Newtonsoft.Json.JsonTextReader`                                               |
|  -12.5% | -22.34ms |   3.8% → 3.3% | 178.5ms → 156.2ms | `SetPropertyValue(JsonProperty, JsonConverter, JsonContainerContract, JsonProperty, JsonReader, Object)`         | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader`                   |
| removed | -21.64ms |   0.5% → 0.0% |      21.6ms → 0ms | `GetValue(Object)`                                                                                               | `Newtonsoft.Json.Serialization.ExpressionValueProvider`                        |
|   -7.1% | -16.94ms |   5.1% → 4.7% | 240.0ms → 223.0ms | `WriteValue(JsonWriter, PrimitiveTypeCode, Object)`                                                              | `Newtonsoft.Json.JsonWriter`                                                   |
|  -12.9% | -15.78ms |   2.6% → 2.2% | 122.7ms → 106.9ms | `WriteValue(float64)`                                                                                            | `Newtonsoft.Json.JsonTextWriter`                                               |
|  -47.2% | -13.35ms |   0.6% → 0.3% |   28.3ms → 14.9ms | `ParseReadString(wchar, ReadType)`                                                                               | `Newtonsoft.Json.JsonTextReader`                                               |
|  -15.4% | -12.31ms |   1.7% → 1.4% |   79.9ms → 67.6ms | `ParseValue()`                                                                                                   | `Newtonsoft.Json.JsonTextReader`                                               |
|  -39.5% | -12.18ms |   0.7% → 0.4% |   30.9ms → 18.7ms | `CheckForCircularReference(JsonWriter, Object, JsonProperty, JsonContract, JsonContainerContract, JsonProperty)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`                   |
|  -64.0% | -12.07ms |   0.4% → 0.1% |    18.9ms → 6.8ms | `EnsureType(JsonReader, Object, CultureInfo, JsonContract, Type)`                                                | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader`                   |
|  -11.7% | -10.56ms |   1.9% → 1.7% |   90.2ms → 79.6ms | `SerializeObject(Object, Type, JsonSerializerSettings)`                                                          | `Newtonsoft.Json.JsonConvert`                                                  |
|  -11.7% | -10.56ms |   1.9% → 1.7% |   90.2ms → 79.6ms | `SerializeObject(Object)`                                                                                        | `Newtonsoft.Json.JsonConvert`                                                  |
|  -71.8% | -10.53ms |   0.3% → 0.1% |    14.7ms → 4.1ms | `EnsureDecimalPlace(float64, String)`                                                                            | `Newtonsoft.Json.JsonConvert`                                                  |
|  -22.3% |  -6.57ms |   0.6% → 0.5% |   29.4ms → 22.9ms | `Get(!0)`                                                                                                        | ``Newtonsoft.Json.Utilities.ThreadSafeStore`2[System.__Canon,System.__Canon]`` |
|  -22.3% |  -6.57ms |   0.6% → 0.5% |   29.4ms → 22.9ms | `ResolveContract(Type)`                                                                                          | `Newtonsoft.Json.Serialization.DefaultContractResolver`                        |

##### Standard library

|  Change |    Delta |           % |            Time | Function                                                                                         | Location                                                                                |
| ------: | -------: | ----------: | --------------: | ------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------- |
|  -31.6% | -21.77ms | 1.5% → 1.0% | 69.0ms → 47.2ms | ``FormatDouble(ValueListBuilder`1<!!0>&, float64, ReadOnlySpan`1<wchar>, NumberFormatInfo)``     | `System.Number`                                                                         |
|  -36.9% | -19.81ms | 1.1% → 0.7% | 53.7ms → 33.9ms | `FindValue(!0)`                                                                                  | ``System.Collections.Generic.Dictionary`2[System.__Canon,System.__Canon]``              |
|  -17.6% | -14.53ms | 1.7% → 1.4% | 82.7ms → 68.1ms | `FormatDouble(float64, String, NumberFormatInfo)`                                                | `System.Number`                                                                         |
|  -44.0% | -12.58ms | 0.6% → 0.3% | 28.6ms → 16.0ms | ``TryDigitGenShortest(DiyFp&, DiyFp&, DiyFp&, Span`1<unsigned int8>, int32&, int32&)``           | `System.Number+Grisu3`                                                                  |
|  -60.2% | -12.17ms | 0.4% → 0.2% |  20.2ms → 8.0ms | ``NumberToString(ValueListBuilder`1<!!0>&, NumberBuffer&, wchar, int32, NumberFormatInfo)``      | `System.Number`                                                                         |
|  -31.4% |  -9.85ms | 0.7% → 0.5% | 31.3ms → 21.5ms | `TryRunDouble(float64, int32, NumberBuffer&)`                                                    | `System.Number+Grisu3`                                                                  |
|  -60.2% |  -9.70ms | 0.3% → 0.1% |  16.1ms → 6.4ms | `IsInstanceOfInterface(void*, Object)`                                                           | `System.Runtime.CompilerServices.CastHelpers`                                           |
|  -76.5% |  -9.11ms | 0.3% → 0.1% |  11.9ms → 2.8ms | `NonPackedIndexOfValueType(!!0&, !!0, int32)`                                                    | `System.SpanHelpers`                                                                    |
|  -66.5% |  -8.07ms | 0.3% → 0.1% |  12.1ms → 4.1ms | `IsInstance_Helper(void*, Object)`                                                               | `System.Runtime.CompilerServices.CastHelpers`                                           |
|  -21.9% |  -6.85ms | 0.7% → 0.5% | 31.3ms → 24.5ms | `Add(Object)`                                                                                    | ``System.Collections.Generic.List`1[System.__Canon].System.Collections.IList``          |
|  -56.1% |  -6.78ms | 0.3% → 0.1% |  12.1ms → 5.3ms | ``FormatGeneral(ValueListBuilder`1<!!0>&, NumberBuffer&, int32, NumberFormatInfo, wchar, bool)`` | `System.Number`                                                                         |
| removed |  -6.76ms | 0.1% → 0.0% |     6.8ms → 0ms | `Compile(LambdaExpression)`                                                                      | `System.Linq.Expressions.Compiler.LambdaCompiler`                                       |
|  -22.3% |  -6.57ms | 0.6% → 0.5% | 29.4ms → 22.9ms | ``GetOrAdd(!0, Func`2<!0, !1>)``                                                                 | ``System.Collections.Concurrent.ConcurrentDictionary`2[System.__Canon,System.__Canon]`` |
|  -44.7% |  -5.45ms | 0.3% → 0.1% |  12.2ms → 6.7ms | `ToString()`                                                                                     | `System.Text.StringBuilder`                                                             |
|  -66.4% |  -5.39ms | 0.2% → 0.1% |   8.1ms → 2.7ms | `RoundNumber(NumberBuffer&, int32, bool)`                                                        | `System.Number`                                                                         |
|  -66.6% |  -5.32ms | 0.2% → 0.1% |   8.0ms → 2.7ms | `CreateManifestString()`                                                                         | `System.Diagnostics.Tracing.ManifestBuilder`                                            |
|  -66.6% |  -5.32ms | 0.2% → 0.1% |   8.0ms → 2.7ms | `CreateManifest()`                                                                               | `System.Diagnostics.Tracing.ManifestBuilder`                                            |
| removed |  -5.32ms | 0.1% → 0.0% |     5.3ms → 0ms | ``PickPivotAndPartition(Span`1<!0>)``                                                            | ``System.Collections.Generic.GenericArraySortHelper`1[System.UInt64]``                  |
| removed |  -5.32ms | 0.1% → 0.0% |     5.3ms → 0ms | ``IntroSort(Span`1<!0>, int32)``                                                                 | ``System.Collections.Generic.GenericArraySortHelper`1[System.UInt64]``                  |
| removed |  -5.32ms | 0.1% → 0.0% |     5.3ms → 0ms | ``Sort(Span`1<!0>, IComparer`1<!0>)``                                                            | ``System.Collections.Generic.GenericArraySortHelper`1[System.UInt64]``                  |

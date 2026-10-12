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

Functions with the largest increase in time spent within the function body, excluding callees. Categories account for at least 1.0% of self time on the base or the current side.

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

Functions with the largest decrease in time spent within the function body, excluding callees. Categories account for at least 1.0% of self time on the base or the current side.

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

#### Callers

Callers with the largest change in contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `ReadForType(JsonContract, bool)` (`Newtonsoft.Json.JsonReader`)

| Change |    Delta |             % |          Time | Caller                                                                         | Location                                                     |
| -----: | -------: | ------------: | ------------: | ------------------------------------------------------------------------------ | ------------------------------------------------------------ |
|  +5.7% | +97.51ms | 99.8% → 99.5% | 1.71s → 1.81s | `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |
| +69.8% |  +2.84ms |   0.2% → 0.4% | 4.1ms → 6.9ms | `PopulateList(IList, JsonReader, JsonArrayContract, JsonProperty, String)`     | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |
|    new |  +1.35ms |   0.0% → 0.1% |   0ms → 1.3ms | `Deserialize(JsonReader, Type, bool)`                                          | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |

##### `CopyTo(Array, int32)` (``System.Collections.Generic.List`1[System.__Canon].System.Collections.ICollection``)

| Change |    Delta |      % |              Time | Caller                                                                     | Location                                                     |
| -----: | -------: | -----: | ----------------: | -------------------------------------------------------------------------- | ------------------------------------------------------------ |
|  +7.3% | +61.75ms | 100.0% | 846.1ms → 907.9ms | `CreateList(JsonReader, Type, JsonContract, JsonProperty, Object, String)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |

##### `UNMANAGED_CODE_TIME` (`<unknown>`)

|  Change |   Delta |           % |           Time | Caller                                                                                                             | Location                                                               |
| ------: | ------: | ----------: | -------------: | ------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------- |
|     new | +5.36ms | 0.0% → 4.1% |    0ms → 5.4ms | `DefineEventHandle(unsigned int32, String, int64, unsigned int32, unsigned int32, unsigned int8*, unsigned int32)` | `System.Diagnostics.Tracing.EventPipeEventProvider`                    |
| removed | -5.32ms | 4.8% → 0.0% |    5.3ms → 0ms | ``PickPivotAndPartition(Span`1<!0>)``                                                                              | ``System.Collections.Generic.GenericArraySortHelper`1[System.UInt64]`` |
|  +67.3% | +4.68ms | 6.3% → 9.0% | 7.0ms → 11.6ms | `Node()`                                                                                                           | `dynamicClass.CreateProfile`                                           |
|     new | +4.59ms | 0.0% → 3.5% |    0ms → 4.6ms | ``Ctor(ReadOnlySpan`1<wchar>)``                                                                                    | `System.String`                                                        |
| removed | -4.07ms | 3.7% → 0.0% |    4.1ms → 0ms | `ToString()`                                                                                                       | `System.Text.StringBuilder`                                            |

##### `GetValue(Object)` (`Newtonsoft.Json.Serialization.DynamicValueProvider`)

| Change |   Delta |            % |        Time | Caller                                                                                                                   | Location                                                     |
| -----: | ------: | -----------: | ----------: | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------ |
|    new | +9.56ms | 0.0% → 49.9% | 0ms → 9.6ms | `SerializeObject(JsonWriter, Object, JsonObjectContract, JsonProperty, JsonContainerContract, JsonProperty)`             | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |
|    new | +5.43ms | 0.0% → 28.3% | 0ms → 5.4ms | `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)`                                           | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |
|    new | +4.19ms | 0.0% → 21.8% | 0ms → 4.2ms | `CalculatePropertyValues(JsonWriter, Object, JsonContainerContract, JsonProperty, JsonProperty, JsonContract&, Object&)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |

##### `SetValue(Object, Object)` (`Newtonsoft.Json.Serialization.DynamicValueProvider`)

| Change |    Delta |            % |         Time | Caller                                                                                                   | Location                                                     |
| -----: | -------: | -----------: | -----------: | -------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
|    new | +10.85ms | 0.0% → 89.4% | 0ms → 10.8ms | `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)`                           | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |
|    new |  +1.29ms | 0.0% → 10.6% |  0ms → 1.3ms | `SetPropertyValue(JsonProperty, JsonConverter, JsonContainerContract, JsonProperty, JsonReader, Object)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |

##### `ParseObject()` (`Newtonsoft.Json.JsonTextReader`)

|  Change |   Delta |             % |            Time | Caller                                                                                                    | Location                                                     |
| ------: | ------: | ------------: | --------------: | --------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
|  +63.5% | +6.82ms | 57.4% → 59.5% | 10.7ms → 17.6ms | `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)`                            | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |
| +129.8% | +5.20ms | 21.4% → 31.2% |   4.0ms → 9.2ms | `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |
|  -31.0% | -1.23ms |  21.2% → 9.3% |   4.0ms → 2.7ms | `Read()`                                                                                                  | `Newtonsoft.Json.JsonTextReader`                             |

##### `ReadStringIntoBuffer(wchar)` (`Newtonsoft.Json.JsonTextReader`)

| Change |    Delta |             % |            Time | Caller                         | Location                         |
| -----: | -------: | ------------: | --------------: | ------------------------------ | -------------------------------- |
| +26.9% | +12.70ms | 39.3% → 45.9% | 47.2ms → 59.9ms | `ParseProperty()`              | `Newtonsoft.Json.JsonTextReader` |
| -48.4% |  -1.27ms |   2.2% → 1.0% |   2.6ms → 1.4ms | `ParseString(wchar, ReadType)` | `Newtonsoft.Json.JsonTextReader` |
|  -1.3% |  -0.95ms | 58.5% → 53.1% | 70.2ms → 69.3ms | `ReadStringValue(ReadType)`    | `Newtonsoft.Json.JsonTextReader` |

##### `ParsePostValue(bool)` (`Newtonsoft.Json.JsonTextReader`)

| Change |   Delta |             % |            Time | Caller                      | Location                         |
| -----: | ------: | ------------: | --------------: | --------------------------- | -------------------------------- |
| +53.2% | +9.36ms | 59.2% → 71.2% | 17.6ms → 27.0ms | `Read()`                    | `Newtonsoft.Json.JsonTextReader` |
| -10.0% | -1.22ms | 40.8% → 28.8% | 12.1ms → 10.9ms | `ReadStringValue(ReadType)` | `Newtonsoft.Json.JsonTextReader` |

##### `ReadAsInt32()` (`Newtonsoft.Json.JsonTextReader`)

| Change |   Delta |      % |             Time | Caller                            | Location                     |
| -----: | ------: | -----: | ---------------: | --------------------------------- | ---------------------------- |
|  +8.5% | +8.11ms | 100.0% | 94.9ms → 103.0ms | `ReadForType(JsonContract, bool)` | `Newtonsoft.Json.JsonReader` |

##### `Memmove(unsigned int8&, unsigned int8&, unsigned int)` (`System.Buffer`)

|  Change |   Delta |             % |          Time | Caller                               | Location                    |
| ------: | ------: | ------------: | ------------: | ------------------------------------ | --------------------------- |
| +303.7% | +4.09ms |  4.1% → 13.6% | 1.3ms → 5.4ms | `Concat(String, String)`             | `System.String`             |
|  -59.7% | -4.02ms |  20.8% → 6.8% | 6.7ms → 2.7ms | `ToString()`                         | `System.Text.StringBuilder` |
|  +65.5% | +3.45ms | 16.2% → 21.8% | 5.3ms → 8.7ms | `Write(String)`                      | `System.IO.StringWriter`    |
| +106.6% | +1.43ms |   4.1% → 6.9% | 1.3ms → 2.8ms | `AppendWithExpansion(wchar&, int32)` | `System.Text.StringBuilder` |
|     new | +1.36ms |   0.0% → 3.4% |   0ms → 1.4ms | `Ctor(wchar[], int32, int32)`        | `System.String`             |

##### `SerializeObjectInternal(Object, Type, JsonSerializer)` (`Newtonsoft.Json.JsonConvert`)

|   Change |    Delta |      % |           Time | Caller                                                  | Location                      |
| -------: | -------: | -----: | -------------: | ------------------------------------------------------- | ----------------------------- |
|  +128.3% |  +6.86ms | 100.0% | 5.3ms → 12.2ms | `Main()`                                                | `Profile.Program`             |
| +3575.6% | +<0.01µs |  <0.1% |         <0.1µs | `SerializeObject(Object, Type, JsonSerializerSettings)` | `Newtonsoft.Json.JsonConvert` |

##### `Int32TryParse(wchar[], int32, int32, int32&)` (`Newtonsoft.Json.Utilities.ConvertUtils`)

|  Change |   Delta |      % |          Time | Caller                                    | Location                         |
| ------: | ------: | -----: | ------------: | ----------------------------------------- | -------------------------------- |
| +250.7% | +6.74ms | 100.0% | 2.7ms → 9.4ms | `ParseReadNumber(ReadType, wchar, int32)` | `Newtonsoft.Json.JsonTextReader` |

##### `Append(wchar&, int32)` (`System.Text.StringBuilder`)

| Change |   Delta |      % |           Time | Caller        | Location                         |
| -----: | ------: | -----: | -------------: | ------------- | -------------------------------- |
| +68.4% | +6.42ms | 100.0% | 9.4ms → 15.8ms | `WriteNull()` | `Newtonsoft.Json.JsonTextWriter` |

##### `WriteValue(JsonWriter, PrimitiveTypeCode, Object)` (`Newtonsoft.Json.JsonWriter`)

| Change |   Delta |             % |            Time | Caller                                                                                                             | Location                                                     |
| -----: | ------: | ------------: | --------------: | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------ |
| +19.6% | +5.36ms | 91.4% → 92.5% | 27.3ms → 32.7ms | `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)`              | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |
|  +2.4% | +0.06ms |   8.6% → 7.5% |           2.6ms | `SerializePrimitive(JsonWriter, Object, JsonPrimitiveContract, JsonProperty, JsonContainerContract, JsonProperty)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |

##### `TryGetValueInternal(Tables<!0, !1>, !0, int32, !1&)` (``System.Collections.Concurrent.ConcurrentDictionary`2[System.__Canon,System.__Canon]``)

|  Change |   Delta |             % |          Time | Caller                                                                                                         | Location                                                                                |
| ------: | ------: | ------------: | ------------: | -------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| +509.1% | +6.81ms | 12.4% → 51.2% | 1.3ms → 8.2ms | `SerializeList(JsonWriter, IEnumerable, JsonArrayContract, JsonProperty, JsonContainerContract, JsonProperty)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`                            |
| removed | -3.97ms |  36.9% → 0.0% |   4.0ms → 0ms | ``GetOrAdd(!0, Func`2<!0, !1>)``                                                                               | ``System.Collections.Concurrent.ConcurrentDictionary`2[System.__Canon,System.__Canon]`` |
|  +86.9% | +2.37ms | 25.3% → 31.9% | 2.7ms → 5.1ms | `Deserialize(JsonReader, Type, bool)`                                                                          | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader`                            |
|   -1.5% | -0.04ms | 25.4% → 16.9% |         2.7ms | `Serialize(JsonWriter, Object, Type)`                                                                          | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`                            |

##### `ParseProperty()` (`Newtonsoft.Json.JsonTextReader`)

| Change |   Delta |      % |            Time | Caller          | Location                         |
| -----: | ------: | -----: | --------------: | --------------- | -------------------------------- |
|  +5.8% | +4.84ms | 100.0% | 83.4ms → 88.2ms | `ParseObject()` | `Newtonsoft.Json.JsonTextReader` |

##### `DeserializeObject(String, Type, JsonSerializerSettings)` (`Newtonsoft.Json.JsonConvert`)

| Change |    Delta |            % |           Time | Caller                                              | Location                      |
| -----: | -------: | -----------: | -------------: | --------------------------------------------------- | ----------------------------- |
| +68.1% |  +4.66ms |       100.0% | 6.9ms → 11.5ms | `Main()`                                            | `Profile.Program`             |
|    new | +<0.01µs | 0.0% → <0.1% |   0ms → <0.1µs | `DeserializeObject(String, JsonSerializerSettings)` | `Newtonsoft.Json.JsonConvert` |

##### `ValidateEnd(JsonToken)` (`Newtonsoft.Json.JsonReader`)

| Change |   Delta |            % |        Time | Caller                              | Location                         |
| -----: | ------: | -----------: | ----------: | ----------------------------------- | -------------------------------- |
|    new | +2.82ms | 0.0% → 67.9% | 0ms → 2.8ms | `SetToken(JsonToken, Object, bool)` | `Newtonsoft.Json.JsonReader`     |
|    new | +1.33ms | 0.0% → 32.1% | 0ms → 1.3ms | `ParsePostValue(bool)`              | `Newtonsoft.Json.JsonTextReader` |

##### `Deserialize(JsonReader, Type, bool)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`)

| Change |   Delta |      % |           Time | Caller                                  | Location                         |
| -----: | ------: | -----: | -------------: | --------------------------------------- | -------------------------------- |
| +43.6% | +4.09ms | 100.0% | 9.4ms → 13.5ms | `DeserializeInternal(JsonReader, Type)` | `Newtonsoft.Json.JsonSerializer` |

##### `Push(JsonContainerType)` (`Newtonsoft.Json.JsonReader`)

| Change |   Delta |            % |        Time | Caller                              | Location                         |
| -----: | ------: | -----------: | ----------: | ----------------------------------- | -------------------------------- |
|    new | +2.63ms | 0.0% → 66.1% | 0ms → 2.6ms | `ParseValue()`                      | `Newtonsoft.Json.JsonTextReader` |
|    new | +1.35ms | 0.0% → 33.9% | 0ms → 1.3ms | `SetToken(JsonToken, Object, bool)` | `Newtonsoft.Json.JsonReader`     |

##### `DeserializeInternal(JsonReader, Type)` (`Newtonsoft.Json.JsonSerializer`)

| Change |   Delta |              % |          Time | Caller                                                    | Location                         |
| -----: | ------: | -------------: | ------------: | --------------------------------------------------------- | -------------------------------- |
|    new | +2.71ms |   0.0% → 49.9% |   0ms → 2.7ms | `Deserialize(JsonReader, Type)`                           | `Newtonsoft.Json.JsonSerializer` |
|  -2.3% | -0.06ms | 100.0% → 50.1% | 2.8ms → 2.7ms | `DeserializeObject(String, Type, JsonSerializerSettings)` | `Newtonsoft.Json.JsonConvert`    |

##### `WriteValue(float64)` (`Newtonsoft.Json.JsonTextWriter`)

| Change |   Delta |      % |            Time | Caller                                              | Location                     |
| -----: | ------: | -----: | --------------: | --------------------------------------------------- | ---------------------------- |
|  +9.9% | +1.60ms | 100.0% | 16.1ms → 17.7ms | `WriteValue(JsonWriter, PrimitiveTypeCode, Object)` | `Newtonsoft.Json.JsonWriter` |

##### `AutoComplete(JsonToken)` (`Newtonsoft.Json.JsonWriter`)

| Change |   Delta |             % |        Time | Caller                              | Location                     |
| -----: | ------: | ------------: | ----------: | ----------------------------------- | ---------------------------- |
|    new | +1.44ms | 0.0% → 100.0% | 0ms → 1.4ms | `InternalWritePropertyName(String)` | `Newtonsoft.Json.JsonWriter` |

##### `WriteEscapedString(String, bool)` (`Newtonsoft.Json.JsonTextWriter`)

| Change |   Delta |             % |        Time | Caller               | Location                         |
| -----: | ------: | ------------: | ----------: | -------------------- | -------------------------------- |
|    new | +1.43ms | 0.0% → 100.0% | 0ms → 1.4ms | `WriteValue(String)` | `Newtonsoft.Json.JsonTextWriter` |

##### `GetMatchingConverter(Type)` (`Newtonsoft.Json.JsonSerializer`)

| Change |   Delta |             % |        Time | Caller                                                                           | Location                                                     |
| -----: | ------: | ------------: | ----------: | -------------------------------------------------------------------------------- | ------------------------------------------------------------ |
|    new | +1.41ms | 0.0% → 100.0% | 0ms → 1.4ms | `GetConverter(JsonContract, JsonConverter, JsonContainerContract, JsonProperty)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |

##### `IndexOf(!0[], !0, int32, int32)` (``System.Collections.Generic.ObjectEqualityComparer`1[System.__Canon]``)

| Change |   Delta |      % |            Time | Caller                              | Location       |
| -----: | ------: | -----: | --------------: | ----------------------------------- | -------------- |
| +31.2% | +3.80ms | 100.0% | 12.2ms → 16.0ms | `IndexOf(!!0[], !!0, int32, int32)` | `System.Array` |

##### `FormatDouble(float64, String, NumberFormatInfo)` (`System.Number`)

| Change |   Delta |      % |            Time | Caller                | Location                         |
| -----: | ------: | -----: | --------------: | --------------------- | -------------------------------- |
| +21.6% | +2.66ms | 100.0% | 12.3ms → 15.0ms | `WriteValue(float64)` | `Newtonsoft.Json.JsonTextWriter` |

##### `ToString()` (`System.Text.StringBuilder`)

|  Change |   Delta |      % |          Time | Caller   | Location          |
| ------: | ------: | -----: | ------------: | -------- | ----------------- |
| +194.5% | +2.64ms | 100.0% | 1.4ms → 4.0ms | `Main()` | `Profile.Program` |

##### `Write(wchar)` (`System.IO.StringWriter`)

| Change |   Delta |             % |        Time | Caller              | Location                         |
| -----: | ------: | ------------: | ----------: | ------------------- | -------------------------------- |
|    new | +1.45ms | 0.0% → 100.0% | 0ms → 1.4ms | `WriteStartArray()` | `Newtonsoft.Json.JsonTextWriter` |

##### ``MatchChars(!!0*, !!0*, ReadOnlySpan`1<!!0>)`` (`System.Number`)

| Change |   Delta |      % |          Time | Caller                                                                       | Location        |
| -----: | ------: | -----: | ------------: | ---------------------------------------------------------------------------- | --------------- |
| +35.3% | +1.43ms | 100.0% | 4.1ms → 5.5ms | `TryParseNumber(!!0*&, !!0*, NumberStyles, NumberBuffer&, NumberFormatInfo)` | `System.Number` |

##### ``TryParseFloat(ReadOnlySpan`1<!!0>, NumberStyles, NumberFormatInfo, !!1&)`` (`System.Number`)

|  Change |    Delta |             % |         Time | Caller                                                      | Location                         |
| ------: | -------: | ------------: | -----------: | ----------------------------------------------------------- | -------------------------------- |
|     new |  +1.37ms | 0.0% → 100.0% |  0ms → 1.4ms | `ParseReadNumber(ReadType, wchar, int32)`                   | `Newtonsoft.Json.JsonTextReader` |
| removed | -<0.01µs | 100.0% → 0.0% | <0.1µs → 0ms | `TryParse(String, NumberStyles, IFormatProvider, float64&)` | `System.Double`                  |

##### `TryRunDouble(float64, int32, NumberBuffer&)` (`System.Number+Grisu3`)

| Change |   Delta |      % |          Time | Caller                                                                                       | Location        |
| -----: | ------: | -----: | ------------: | -------------------------------------------------------------------------------------------- | --------------- |
| +50.2% | +1.37ms | 100.0% | 2.7ms → 4.1ms | ``FormatDouble(ValueListBuilder`1<!!0>&, float64, ReadOnlySpan`1<wchar>, NumberFormatInfo)`` | `System.Number` |

##### `Ctor(wchar[], int32, int32)` (`System.String`)

| Change |   Delta |             % |        Time | Caller                                    | Location                         |
| -----: | ------: | ------------: | ----------: | ----------------------------------------- | -------------------------------- |
|    new | +1.35ms | 0.0% → 100.0% | 0ms → 1.4ms | `ParseReadNumber(ReadType, wchar, int32)` | `Newtonsoft.Json.JsonTextReader` |

##### `ToString()` (``System.ReadOnlySpan`1[System.Char]``)

| Change |   Delta |             % |        Time | Caller                                            | Location        |
| -----: | ------: | ------------: | ----------: | ------------------------------------------------- | --------------- |
|    new | +1.34ms | 0.0% → 100.0% | 0ms → 1.3ms | `FormatDouble(float64, String, NumberFormatInfo)` | `System.Number` |

##### `Concat(String, String)` (`System.String`)

| Change |   Delta |             % |        Time | Caller                                | Location                      |
| -----: | ------: | ------------: | ----------: | ------------------------------------- | ----------------------------- |
|    new | +1.34ms | 0.0% → 100.0% | 0ms → 1.3ms | `EnsureDecimalPlace(float64, String)` | `Newtonsoft.Json.JsonConvert` |

##### ``FormatDouble(ValueListBuilder`1<!!0>&, float64, ReadOnlySpan`1<wchar>, NumberFormatInfo)`` (`System.Number`)

| Change |   Delta |      % |            Time | Caller                                            | Location        |
| -----: | ------: | -----: | --------------: | ------------------------------------------------- | --------------- |
|  +1.2% | +0.20ms | 100.0% | 16.1ms → 16.3ms | `FormatDouble(float64, String, NumberFormatInfo)` | `System.Number` |

##### ``ParseFormatSpecifier(ReadOnlySpan`1<wchar>, int32&)`` (`System.Number`)

| Change |   Delta |      % |  Time | Caller                                                                                       | Location        |
| -----: | ------: | -----: | ----: | -------------------------------------------------------------------------------------------- | --------------- |
|  +3.0% | +0.04ms | 100.0% | 1.4ms | ``FormatDouble(ValueListBuilder`1<!!0>&, float64, ReadOnlySpan`1<wchar>, NumberFormatInfo)`` | `System.Number` |

##### `AddWithResize(!0)` (``System.Collections.Generic.List`1[Newtonsoft.Json.JsonPosition]``)

| Change |   Delta |      % |          Time | Caller                                                                                                         | Location                                                     |
| -----: | ------: | -----: | ------------: | -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
|  +1.3% | +0.02ms | 100.0% | 1.3ms → 1.4ms | `SerializeList(JsonWriter, IEnumerable, JsonArrayContract, JsonProperty, JsonContainerContract, JsonProperty)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |

##### `CreateManifestAndDescriptors(Type, String, EventSource, EventManifestOptions)` (`System.Diagnostics.Tracing.EventSource`)

|  Change |    Delta |      % |   Time | Caller                           | Location                                 |
| ------: | -------: | -----: | -----: | -------------------------------- | ---------------------------------------- |
| +316.6% | +<0.01µs | 100.0% | <0.1µs | `EnsureDescriptorsInitialized()` | `System.Diagnostics.Tracing.EventSource` |

##### `TryParse(String, NumberStyles, IFormatProvider, float64&)` (`System.Double`)

| Change |    Delta |             % |         Time | Caller                                    | Location                         |
| -----: | -------: | ------------: | -----------: | ----------------------------------------- | -------------------------------- |
|    new | +<0.01µs | 0.0% → 100.0% | 0ms → <0.1µs | `ParseReadNumber(ReadType, wchar, int32)` | `Newtonsoft.Json.JsonTextReader` |

##### ``GetOrAdd(!0, Func`2<!0, !1>)`` (``System.Collections.Concurrent.ConcurrentDictionary`2[System.__Canon,System.__Canon]``)

| Change |    Delta |             % |         Time | Caller    | Location                                                                       |
| -----: | -------: | ------------: | -----------: | --------- | ------------------------------------------------------------------------------ |
|    new | +<0.01µs | 0.0% → 100.0% | 0ms → <0.1µs | `Get(!0)` | ``Newtonsoft.Json.Utilities.ThreadSafeStore`2[System.__Canon,System.__Canon]`` |

##### `SerializeObject(JsonWriter, Object, JsonObjectContract, JsonProperty, JsonContainerContract, JsonProperty)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`)

| Change |    Delta |      % |              Time | Caller                                                                                                | Location                                                     |
| -----: | -------: | -----: | ----------------: | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| -12.6% | -39.66ms | 100.0% | 315.7ms → 276.1ms | `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |

##### `ParseValue()` (`Newtonsoft.Json.JsonTextReader`)

| Change |    Delta |             % |            Time | Caller                            | Location                         |
| -----: | -------: | ------------: | --------------: | --------------------------------- | -------------------------------- |
| -40.8% | -21.53ms | 97.5% → 96.0% | 52.8ms → 31.3ms | `ReadForType(JsonContract, bool)` | `Newtonsoft.Json.JsonReader`     |
|  -3.6% |  -0.05ms |   2.5% → 4.0% |   1.4ms → 1.3ms | `Read()`                          | `Newtonsoft.Json.JsonTextReader` |

##### `FindValue(!0)` (``System.Collections.Generic.Dictionary`2[System.__Canon,System.__Canon]``)

| Change |    Delta |              % |            Time | Caller                                                                         | Location                                                                   |
| -----: | -------: | -------------: | --------------: | ------------------------------------------------------------------------------ | -------------------------------------------------------------------------- |
| -44.6% | -18.52ms | 100.0% → 94.5% | 41.5ms → 23.0ms | `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader`               |
|    new |  +1.34ms |    0.0% → 5.5% |     0ms → 1.3ms | `TryGetValue(!0, !1&)`                                                         | ``System.Collections.Generic.Dictionary`2[System.__Canon,System.__Canon]`` |

##### `GetValue(Object)` (`Newtonsoft.Json.Serialization.ExpressionValueProvider`)

|  Change |    Delta |            % |         Time | Caller                                                                                                       | Location                                                     |
| ------: | -------: | -----------: | -----------: | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------ |
| removed | -14.83ms | 91.6% → 0.0% | 14.8ms → 0ms | `SerializeObject(JsonWriter, Object, JsonObjectContract, JsonProperty, JsonContainerContract, JsonProperty)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |
| removed |  -1.36ms |  8.4% → 0.0% |  1.4ms → 0ms | `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)`                               | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |

##### `ReadStringValue(ReadType)` (`Newtonsoft.Json.JsonTextReader`)

| Change |    Delta |      % |            Time | Caller                            | Location                     |
| -----: | -------: | -----: | --------------: | --------------------------------- | ---------------------------- |
| -36.7% | -14.81ms | 100.0% | 40.3ms → 25.5ms | `ReadForType(JsonContract, bool)` | `Newtonsoft.Json.JsonReader` |

##### `CheckForCircularReference(JsonWriter, Object, JsonProperty, JsonContract, JsonContainerContract, JsonProperty)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`)

|  Change |   Delta |              % |           Time | Caller                                                                                                         | Location                                                     |
| ------: | ------: | -------------: | -------------: | -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
|  -74.7% | -8.03ms | 67.1% → 100.0% | 10.7ms → 2.7ms | `SerializeObject(JsonWriter, Object, JsonObjectContract, JsonProperty, JsonContainerContract, JsonProperty)`   | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |
| removed | -5.26ms |   32.9% → 0.0% |    5.3ms → 0ms | `SerializeList(JsonWriter, IEnumerable, JsonArrayContract, JsonProperty, JsonContainerContract, JsonProperty)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |

##### ``TryDigitGenShortest(DiyFp&, DiyFp&, DiyFp&, Span`1<unsigned int8>, int32&, int32&)`` (`System.Number+Grisu3`)

| Change |    Delta |              % |            Time | Caller                                                                            | Location               |
| -----: | -------: | -------------: | --------------: | --------------------------------------------------------------------------------- | ---------------------- |
| -48.6% | -13.89ms | 100.0% → 91.8% | 28.6ms → 14.7ms | `TryRunDouble(float64, int32, NumberBuffer&)`                                     | `System.Number+Grisu3` |
|    new |  +1.31ms |    0.0% → 8.2% |     0ms → 1.3ms | ``TryRunShortest(DiyFp&, DiyFp&, DiyFp&, Span`1<unsigned int8>, int32&, int32&)`` | `System.Number+Grisu3` |

##### `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`)

|  Change |    Delta |             % |          Time | Caller                                                                                                   | Location                                                     |
| ------: | -------: | ------------: | ------------: | -------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
|  -83.1% |  -6.77ms | 49.9% → 33.8% | 8.1ms → 1.4ms | `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)`                           | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |
| removed |  -4.10ms |  25.1% → 0.0% |   4.1ms → 0ms | `SetPropertyValue(JsonProperty, JsonConverter, JsonContainerContract, JsonProperty, JsonReader, Object)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |
|  -34.1% |  -1.39ms | 25.0% → 66.2% | 4.1ms → 2.7ms | `PopulateList(IList, JsonReader, JsonArrayContract, JsonProperty, String)`                               | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |
| removed | -<0.01µs |  <0.1% → 0.0% |  <0.1µs → 0ms | `Deserialize(JsonReader, Type, bool)`                                                                    | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |

##### `EnsureType(JsonReader, Object, CultureInfo, JsonContract, Type)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`)

| Change |    Delta |      % |           Time | Caller                                                                                                           | Location                                                     |
| -----: | -------: | -----: | -------------: | ---------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| -64.0% | -12.07ms | 100.0% | 18.9ms → 6.8ms | `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |

##### `SerializeList(JsonWriter, IEnumerable, JsonArrayContract, JsonProperty, JsonContainerContract, JsonProperty)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`)

| Change |    Delta |      % |              Time | Caller                                                                                                | Location                                                     |
| -----: | -------: | -----: | ----------------: | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
|  -6.4% | -10.83ms | 100.0% | 169.2ms → 158.4ms | `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |

##### `ParseReadString(wchar, ReadType)` (`Newtonsoft.Json.JsonTextReader`)

|  Change |   Delta |              % |           Time | Caller                         | Location                         |
| ------: | ------: | -------------: | -------------: | ------------------------------ | -------------------------------- |
|  -77.2% | -9.25ms | 89.8% → 100.0% | 12.0ms → 2.7ms | `ReadStringValue(ReadType)`    | `Newtonsoft.Json.JsonTextReader` |
| removed | -1.36ms |   10.2% → 0.0% |    1.4ms → 0ms | `ParseString(wchar, ReadType)` | `Newtonsoft.Json.JsonTextReader` |

##### `IsInstanceOfInterface(void*, Object)` (`System.Runtime.CompilerServices.CastHelpers`)

| Change |   Delta |             % |           Time | Caller                                                                                                         | Location                                                     |
| -----: | ------: | ------------: | -------------: | -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| -52.5% | -5.60ms | 66.2% → 79.0% | 10.7ms → 5.1ms | `SerializeList(JsonWriter, IEnumerable, JsonArrayContract, JsonProperty, JsonContainerContract, JsonProperty)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |
| -75.3% | -4.11ms | 33.8% → 21.0% |  5.5ms → 1.3ms | `PopulateList(IList, JsonReader, JsonArrayContract, JsonProperty, String)`                                     | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |

##### `NonPackedIndexOfValueType(!!0&, !!0, int32)` (`System.SpanHelpers`)

| Change |   Delta |      % |           Time | Caller                                | Location                      |
| -----: | ------: | -----: | -------------: | ------------------------------------- | ----------------------------- |
| -76.5% | -9.11ms | 100.0% | 11.9ms → 2.8ms | `EnsureDecimalPlace(float64, String)` | `Newtonsoft.Json.JsonConvert` |

##### `IsInstance_Helper(void*, Object)` (`System.Runtime.CompilerServices.CastHelpers`)

| Change |   Delta |      % |           Time | Caller                                                                                                         | Location                                                     |
| -----: | ------: | -----: | -------------: | -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| -66.5% | -8.07ms | 100.0% | 12.1ms → 4.1ms | `SerializeList(JsonWriter, IEnumerable, JsonArrayContract, JsonProperty, JsonContainerContract, JsonProperty)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |

##### `WriteNull()` (`Newtonsoft.Json.JsonTextWriter`)

| Change |   Delta |      % |          Time | Caller                                                                                                | Location                                                     |
| -----: | ------: | -----: | ------------: | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| -84.0% | -6.97ms | 100.0% | 8.3ms → 1.3ms | `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |

##### ``FormatGeneral(ValueListBuilder`1<!!0>&, NumberBuffer&, int32, NumberFormatInfo, wchar, bool)`` (`System.Number`)

| Change |   Delta |      % |           Time | Caller                                                                                      | Location        |
| -----: | ------: | -----: | -------------: | ------------------------------------------------------------------------------------------- | --------------- |
| -56.1% | -6.78ms | 100.0% | 12.1ms → 5.3ms | ``NumberToString(ValueListBuilder`1<!!0>&, NumberBuffer&, wchar, int32, NumberFormatInfo)`` | `System.Number` |

##### `SetStateBasedOnCurrent()` (`Newtonsoft.Json.JsonReader`)

| Change |   Delta |      % |          Time | Caller                 | Location                         |
| -----: | ------: | -----: | ------------: | ---------------------- | -------------------------------- |
| -70.7% | -6.57ms | 100.0% | 9.3ms → 2.7ms | `ParsePostValue(bool)` | `Newtonsoft.Json.JsonTextReader` |

##### `ReadNumberValue(ReadType)` (`Newtonsoft.Json.JsonTextReader`)

| Change |   Delta |      % |            Time | Caller                            | Location                     |
| -----: | ------: | -----: | --------------: | --------------------------------- | ---------------------------- |
|  -8.6% | -5.89ms | 100.0% | 68.2ms → 62.3ms | `ReadForType(JsonContract, bool)` | `Newtonsoft.Json.JsonReader` |

##### `RoundNumber(NumberBuffer&, int32, bool)` (`System.Number`)

| Change |   Delta |      % |          Time | Caller                                                                                      | Location        |
| -----: | ------: | -----: | ------------: | ------------------------------------------------------------------------------------------- | --------------- |
| -66.4% | -5.39ms | 100.0% | 8.1ms → 2.7ms | ``NumberToString(ValueListBuilder`1<!!0>&, NumberBuffer&, wchar, int32, NumberFormatInfo)`` | `System.Number` |

##### `Read()` (`Newtonsoft.Json.JsonTextReader`)

|  Change |   Delta |             % |            Time | Caller                                                                                                    | Location                                                     |
| ------: | ------: | ------------: | --------------: | --------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
|  -25.8% | -5.26ms | 55.8% → 47.9% | 20.4ms → 15.1ms | `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)`                            | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |
|     new | +1.41ms |   0.0% → 4.5% |     0ms → 1.4ms | `ReadAndMoveToContent()`                                                                                  | `Newtonsoft.Json.JsonReader`                                 |
| removed | -1.34ms |   3.7% → 0.0% |     1.3ms → 0ms | `Deserialize(JsonReader, Type, bool)`                                                                     | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |
|   +2.3% | +0.25ms | 29.3% → 34.7% | 10.7ms → 11.0ms | `ReadForType(JsonContract, bool)`                                                                         | `Newtonsoft.Json.JsonReader`                                 |
|   -1.3% | -0.05ms | 11.3% → 12.9% |           4.1ms | `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |

##### `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`)

| Change |   Delta |             % |            Time | Caller                                                                                                         | Location                                                     |
| -----: | ------: | ------------: | --------------: | -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| -26.4% | -4.99ms | 44.1% → 36.1% | 18.9ms → 13.9ms | `SerializeList(JsonWriter, IEnumerable, JsonArrayContract, JsonProperty, JsonContainerContract, JsonProperty)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |
|    new | +2.84ms |   0.0% → 7.4% |     0ms → 2.8ms | `Serialize(JsonWriter, Object, Type)`                                                                          | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |
|  -9.4% | -2.25ms | 55.9% → 56.5% | 24.0ms → 21.8ms | `SerializeObject(JsonWriter, Object, JsonObjectContract, JsonProperty, JsonContainerContract, JsonProperty)`   | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |

##### ``WriteEscapedJavaScriptString(TextWriter, String, wchar, bool, bool[], StringEscapeHandling, IArrayPool`1<wchar>, wchar[]&)`` (`Newtonsoft.Json.Utilities.JavaScriptUtils`)

|  Change |   Delta |              % |            Time | Caller                                              | Location                         |
| ------: | ------: | -------------: | --------------: | --------------------------------------------------- | -------------------------------- |
|   -3.9% | -2.67ms | 98.1% → 100.0% | 68.5ms → 65.8ms | `WriteValue(JsonWriter, PrimitiveTypeCode, Object)` | `Newtonsoft.Json.JsonWriter`     |
| removed | -1.35ms |    1.9% → 0.0% |     1.4ms → 0ms | `WriteEscapedString(String, bool)`                  | `Newtonsoft.Json.JsonTextWriter` |

##### `ReadAsDouble()` (`Newtonsoft.Json.JsonTextReader`)

| Change |   Delta |      % |            Time | Caller                            | Location                     |
| -----: | ------: | -----: | --------------: | --------------------------------- | ---------------------------- |
| -18.6% | -3.75ms | 100.0% | 20.2ms → 16.5ms | `ReadForType(JsonContract, bool)` | `Newtonsoft.Json.JsonReader` |

##### `SetToken(JsonToken, Object, bool)` (`Newtonsoft.Json.JsonReader`)

|  Change |   Delta |             % |            Time | Caller                                    | Location                         |
| ------: | ------: | ------------: | --------------: | ----------------------------------------- | -------------------------------- |
|  -63.3% | -9.32ms | 30.3% → 12.0% |  14.7ms → 5.4ms | `ParseProperty()`                         | `Newtonsoft.Json.JsonTextReader` |
| +208.0% | +8.46ms |  8.4% → 27.9% |  4.1ms → 12.5ms | `ParseReadNumber(ReadType, wchar, int32)` | `Newtonsoft.Json.JsonTextReader` |
|  +99.5% | +6.71ms | 13.9% → 29.9% |  6.7ms → 13.4ms | `ParseValue()`                            | `Newtonsoft.Json.JsonTextReader` |
|  -80.3% | -5.47ms |  14.0% → 3.0% |   6.8ms → 1.3ms | `ParsePostValue(bool)`                    | `Newtonsoft.Json.JsonTextReader` |
|  -20.2% | -2.75ms | 27.9% → 24.1% | 13.6ms → 10.8ms | `ParseReadString(wchar, ReadType)`        | `Newtonsoft.Json.JsonTextReader` |

##### `SetValue(Object, Object)` (`Newtonsoft.Json.Serialization.ExpressionValueProvider`)

|  Change |   Delta |             % |        Time | Caller                                                                         | Location                                                     |
| ------: | ------: | ------------: | ----------: | ------------------------------------------------------------------------------ | ------------------------------------------------------------ |
| removed | -2.71ms | 100.0% → 0.0% | 2.7ms → 0ms | `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |

##### `CalculatePropertyValues(JsonWriter, Object, JsonContainerContract, JsonProperty, JsonProperty, JsonContract&, Object&)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`)

|  Change |   Delta |      % |           Time | Caller                                                                                                       | Location                                                     |
| ------: | ------: | -----: | -------------: | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------ |
| -100.0% | -2.71ms | 100.0% | 2.7ms → <0.1µs | `SerializeObject(JsonWriter, Object, JsonObjectContract, JsonProperty, JsonContainerContract, JsonProperty)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |

##### `Get(wchar[], int32, int32)` (`Newtonsoft.Json.DefaultJsonNameTable`)

| Change |   Delta |      % |          Time | Caller            | Location                         |
| -----: | ------: | -----: | ------------: | ----------------- | -------------------------------- |
| -64.9% | -2.68ms | 100.0% | 4.1ms → 1.4ms | `ParseProperty()` | `Newtonsoft.Json.JsonTextReader` |

##### `Add(Object)` (``System.Collections.Generic.List`1[System.__Canon].System.Collections.IList``)

| Change |   Delta |      % |            Time | Caller                                                                     | Location                                                     |
| -----: | ------: | -----: | --------------: | -------------------------------------------------------------------------- | ------------------------------------------------------------ |
| -17.7% | -4.09ms | 100.0% | 23.2ms → 19.1ms | `PopulateList(IList, JsonReader, JsonArrayContract, JsonProperty, String)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |

##### `TryParseNumber(!!0*&, !!0*, NumberStyles, NumberBuffer&, NumberFormatInfo)` (`System.Number`)

| Change |   Delta |      % |            Time | Caller                                                                       | Location        |
| -----: | ------: | -----: | --------------: | ---------------------------------------------------------------------------- | --------------- |
| -11.1% | -3.75ms | 100.0% | 33.8ms → 30.0ms | ``TryParseFloat(ReadOnlySpan`1<!!0>, NumberStyles, NumberFormatInfo, !!1&)`` | `System.Number` |

##### `IndexOf(wchar, StringComparison)` (`System.String`)

|  Change |   Delta |             % |        Time | Caller                   | Location                                |
| ------: | ------: | ------------: | ----------: | ------------------------ | --------------------------------------- |
| removed | -2.76ms | 100.0% → 0.0% | 2.8ms → 0ms | `IndexOf(String, wchar)` | `Newtonsoft.Json.Utilities.StringUtils` |

##### `ChkCastInterface(void*, Object)` (`System.Runtime.CompilerServices.CastHelpers`)

|  Change |   Delta |              % |          Time | Caller                                                                                                | Location                                                     |
| ------: | ------: | -------------: | ------------: | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| removed | -2.74ms |   33.2% → 0.0% |   2.7ms → 0ms | `CreateTemporaryCollection()`                                                                         | `Newtonsoft.Json.Serialization.JsonArrayContract`            |
|   +1.1% | +0.06ms | 66.8% → 100.0% | 5.5ms → 5.6ms | `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |

##### `Copy(Array, int32, Array, int32, int32)` (`System.Array`)

| Change |   Delta |      % |          Time | Caller                 | Location                                                                             |
| -----: | ------: | -----: | ------------: | ---------------------- | ------------------------------------------------------------------------------------ |
| -22.0% | -1.48ms | 100.0% | 6.7ms → 5.2ms | `CopyTo(Array, int32)` | ``System.Collections.Generic.List`1[System.__Canon].System.Collections.ICollection`` |

##### `AddWithResize(!0)` (``System.Collections.Generic.List`1[System.__Canon]``)

| Change |   Delta |      % |          Time | Caller        | Location                                                                       |
| -----: | ------: | -----: | ------------: | ------------- | ------------------------------------------------------------------------------ |
| -35.1% | -1.46ms | 100.0% | 4.2ms → 2.7ms | `Add(Object)` | ``System.Collections.Generic.List`1[System.__Canon].System.Collections.IList`` |

##### `<GetInstance>g__GetProviderNonNull|58_0(IFormatProvider)` (`System.Globalization.NumberFormatInfo`)

| Change |   Delta |      % |          Time | Caller                | Location                         |
| -----: | ------: | -----: | ------------: | --------------------- | -------------------------------- |
| -50.0% | -1.35ms | 100.0% | 2.7ms → 1.3ms | `WriteValue(float64)` | `Newtonsoft.Json.JsonTextWriter` |

##### `IndexOf(!!0[], !!0, int32, int32)` (`System.Array`)

|  Change |   Delta |             % |        Time | Caller                                                                                                           | Location                                                     |
| ------: | ------: | ------------: | ----------: | ---------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| removed | -1.34ms | 100.0% → 0.0% | 1.3ms → 0ms | `CheckForCircularReference(JsonWriter, Object, JsonProperty, JsonContract, JsonContainerContract, JsonProperty)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |

##### `GetHashCode(String)` (`System.Collections.Generic.NonRandomizedStringEqualityComparer+OrdinalComparer`)

|  Change |   Delta |             % |        Time | Caller          | Location                                                                   |
| ------: | ------: | ------------: | ----------: | --------------- | -------------------------------------------------------------------------- |
| removed | -1.34ms | 100.0% → 0.0% | 1.3ms → 0ms | `FindValue(!0)` | ``System.Collections.Generic.Dictionary`2[System.__Canon,System.__Canon]`` |

##### `IsInstanceOfClass(void*, Object)` (`System.Runtime.CompilerServices.CastHelpers`)

|  Change |   Delta |             % |        Time | Caller                                                                                                                                                                     | Location                         |
| ------: | ------: | ------------: | ----------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- |
| removed | -1.30ms | 100.0% → 0.0% | 1.3ms → 0ms | ``SetupReader(JsonReader, CultureInfo&, Nullable`1<DateTimeZoneHandling>&, Nullable`1<DateParseHandling>&, Nullable`1<FloatParseHandling>&, Nullable`1<int32>&, String&)`` | `Newtonsoft.Json.JsonSerializer` |

##### `GetNonRandomizedHashCode()` (`System.String`)

| Change |   Delta |      % |           Time | Caller          | Location                                                                   |
| -----: | ------: | -----: | -------------: | --------------- | -------------------------------------------------------------------------- |
| -11.8% | -1.28ms | 100.0% | 10.8ms → 9.5ms | `FindValue(!0)` | ``System.Collections.Generic.Dictionary`2[System.__Canon,System.__Canon]`` |

##### `StelemRef(Array, int, Object)` (`System.Runtime.CompilerServices.CastHelpers`)

| Change |   Delta |             % |          Time | Caller                                                                                                         | Location                                                                       |
| -----: | ------: | ------------: | ------------: | -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
|    new | +2.63ms |  0.0% → 32.6% |   0ms → 2.6ms | `SerializeObject(JsonWriter, Object, JsonObjectContract, JsonProperty, JsonContainerContract, JsonProperty)`   | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`                   |
| -49.9% | -1.36ms | 33.8% → 16.9% | 2.7ms → 1.4ms | `SerializeList(JsonWriter, IEnumerable, JsonArrayContract, JsonProperty, JsonContainerContract, JsonProperty)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`                   |
| -49.4% | -1.32ms | 33.0% → 16.7% | 2.7ms → 1.3ms | `Add(Object)`                                                                                                  | ``System.Collections.Generic.List`1[System.__Canon].System.Collections.IList`` |
|  +1.6% | +0.04ms | 33.2% → 33.8% |         2.7ms | `AddWithResize(!0)`                                                                                            | ``System.Collections.Generic.List`1[System.__Canon]``                          |

##### `Compile(LambdaExpression)` (`System.Linq.Expressions.Compiler.LambdaCompiler`)

|  Change |    Delta |             % |         Time | Caller                    | Location                                                        |
| ------: | -------: | ------------: | -----------: | ------------------------- | --------------------------------------------------------------- |
| removed | -<0.01µs | 100.0% → 0.0% | <0.1µs → 0ms | `CreateGet(PropertyInfo)` | `Newtonsoft.Json.Utilities.ExpressionReflectionDelegateFactory` |

### Total time

#### Regressions

Functions with the largest increase in time spent within the function and its callees. Categories account for at least 1.0% of self time on the base or the current side.

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

Functions with the largest decrease in time spent within the function and its callees. Categories account for at least 1.0% of self time on the base or the current side.

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

#### Callees

Callees with the largest change in contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `DeserializeObject(String, Type, JsonSerializerSettings)` (`Newtonsoft.Json.JsonConvert`)

| Change |     Delta |            % |              Time | Callee                                  | Location                                        |
| -----: | --------: | -----------: | ----------------: | --------------------------------------- | ----------------------------------------------- |
|  +3.1% | +104.94ms |        91.0% |     3.40s → 3.50s | `DeserializeInternal(JsonReader, Type)` | `Newtonsoft.Json.JsonSerializer`                |
|    new |   +1.36ms | 0.0% → <0.1% |       0ms → 1.4ms | `Dispose()`                             | `Newtonsoft.Json.JsonReader.System.IDisposable` |
|  +0.4% |   +1.32ms |  8.8% → 8.6% | 328.4ms → 329.7ms | `Deserialize(JsonReader, Type)`         | `Newtonsoft.Json.JsonSerializer`                |
|  +1.1% |   +0.03ms |         0.1% |     2.7ms → 2.8ms | `UNMANAGED_CODE_TIME`                   | `<unknown>`                                     |

##### `DeserializeInternal(JsonReader, Type)` (`Newtonsoft.Json.JsonSerializer`)

|  Change |     Delta |             % |          Time | Callee                                                                                                                                                                     | Location                                                     |
| ------: | --------: | ------------: | ------------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
|   +2.8% | +104.89ms | 99.9% → 99.8% | 3.72s → 3.82s | `Deserialize(JsonReader, Type, bool)`                                                                                                                                      | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |
| removed |   -2.62ms |   0.1% → 0.0% |   2.6ms → 0ms | ``SetupReader(JsonReader, CultureInfo&, Nullable`1<DateTimeZoneHandling>&, Nullable`1<DateParseHandling>&, Nullable`1<FloatParseHandling>&, Nullable`1<int32>&, String&)`` | `Newtonsoft.Json.JsonSerializer`                             |
|     new |   +1.35ms |  0.0% → <0.1% |   0ms → 1.4ms | `UNMANAGED_CODE_TIME`                                                                                                                                                      | `<unknown>`                                                  |

##### `Deserialize(JsonReader, Type, bool)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`)

| Change |    Delta |             % |            Time | Callee                                                                                                           | Location                                                                                |
| -----: | -------: | ------------: | --------------: | ---------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
|  +2.6% | +94.34ms | 98.6% → 98.4% |   3.67s → 3.76s | `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader`                            |
| +15.6% |  +5.32ms |   0.9% → 1.0% | 34.1ms → 39.4ms | `ReadForType(JsonContract, bool)`                                                                                | `Newtonsoft.Json.JsonReader`                                                            |
| -49.0% |  -2.63ms |          0.1% |   5.4ms → 2.7ms | `Read()`                                                                                                         | `Newtonsoft.Json.JsonTextReader`                                                        |
| +86.9% |  +2.37ms |          0.1% |   2.7ms → 5.1ms | `TryGetValueInternal(Tables<!0, !1>, !0, int32, !1&)`                                                            | ``System.Collections.Concurrent.ConcurrentDictionary`2[System.__Canon,System.__Canon]`` |
|    new |  +1.41ms |  0.0% → <0.1% |     0ms → 1.4ms | `GetConverter(JsonContract, JsonConverter, JsonContainerContract, JsonProperty)`                                 | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader`                            |

##### `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`)

|  Change |    Delta |             % |            Time | Callee                                                                         | Location                                                     |
| ------: | -------: | ------------: | --------------: | ------------------------------------------------------------------------------ | ------------------------------------------------------------ |
|   +2.2% | +81.79ms | 99.3% → 98.9% |   3.64s → 3.72s | `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |
|  +67.3% |  +4.68ms |   0.2% → 0.3% |  7.0ms → 11.6ms | `Node()`                                                                       | `dynamicClass.CreateProfile`                                 |
|  +12.5% |  +3.71ms |   0.8% → 0.9% | 29.7ms → 33.4ms | `ParseObject()`                                                                | `Newtonsoft.Json.JsonTextReader`                             |
| +105.0% |  +2.78ms |          0.1% |   2.6ms → 5.4ms | `ReadAndAssert()`                                                              | `Newtonsoft.Json.JsonReader`                                 |
|   -1.3% |  -0.05ms |          0.1% |           4.1ms | `Read()`                                                                       | `Newtonsoft.Json.JsonTextReader`                             |

##### `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`)

| Change |    Delta |             % |           Time | Callee                                                                                                    | Location                                                     |
| -----: | -------: | ------------: | -------------: | --------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
|  +2.6% | +95.68ms |        100.0% |  3.67s → 3.76s | `CreateObject(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |
|  +1.5% | +31.98ms | 57.9% → 57.3% |  2.12s → 2.15s | `CreateList(JsonReader, Type, JsonContract, JsonProperty, Object, String)`                                | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |
| -64.0% | -12.07ms |   0.5% → 0.2% | 18.9ms → 6.8ms | `EnsureType(JsonReader, Object, CultureInfo, JsonContract, Type)`                                         | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |
|  -0.5% |  -0.01ms |         <0.1% |          1.3ms | `UNMANAGED_CODE_TIME`                                                                                     | `<unknown>`                                                  |

##### `PopulateObject(Object, JsonReader, JsonObjectContract, JsonProperty, String)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`)

| Change |    Delta |             % |              Time | Callee                                                                                                           | Location                                                                   |
| -----: | -------: | ------------: | ----------------: | ---------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
|  +3.7% | +77.52ms | 57.7% → 58.5% |     2.10s → 2.18s | `ReadForType(JsonContract, bool)`                                                                                | `Newtonsoft.Json.JsonReader`                                               |
|  +2.6% | +51.85ms | 53.7% → 53.9% |        1.95s → 2s | `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader`               |
| -12.5% | -22.34ms |   4.9% → 4.2% | 178.5ms → 156.2ms | `SetPropertyValue(JsonProperty, JsonConverter, JsonContainerContract, JsonProperty, JsonReader, Object)`         | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader`               |
| -36.2% | -18.43ms |   1.4% → 0.9% |   50.9ms → 32.5ms | `FindValue(!0)`                                                                                                  | ``System.Collections.Generic.Dictionary`2[System.__Canon,System.__Canon]`` |
| +12.8% | +16.52ms |   3.5% → 3.9% | 129.1ms → 145.6ms | `ParseObject()`                                                                                                  | `Newtonsoft.Json.JsonTextReader`                                           |

##### `ReadForType(JsonContract, bool)` (`Newtonsoft.Json.JsonReader`)

| Change |    Delta |           % |              Time | Callee                      | Location                         |
| -----: | -------: | ----------: | ----------------: | --------------------------- | -------------------------------- |
| -20.3% | -31.45ms | 6.8% → 5.3% | 154.8ms → 123.4ms | `ReadStringValue(ReadType)` | `Newtonsoft.Json.JsonTextReader` |
| -19.4% | -14.98ms | 3.4% → 2.7% |   77.3ms → 62.3ms | `ParseValue()`              | `Newtonsoft.Json.JsonTextReader` |
|  +4.8% |  +7.67ms | 7.1% → 7.2% | 161.4ms → 169.1ms | `ReadNumberValue(ReadType)` | `Newtonsoft.Json.JsonTextReader` |
|  +6.4% |  +6.51ms | 4.5% → 4.6% | 101.6ms → 108.1ms | `ReadAsInt32()`             | `Newtonsoft.Json.JsonTextReader` |
| -56.8% |  -5.31ms | 0.4% → 0.2% |     9.3ms → 4.0ms | `ReadAsString()`            | `Newtonsoft.Json.JsonTextReader` |

##### `CopyTo(Array, int32)` (``System.Collections.Generic.List`1[System.__Canon].System.Collections.ICollection``)

| Change |   Delta |           % |          Time | Callee                                    | Location       |
| -----: | ------: | ----------: | ------------: | ----------------------------------------- | -------------- |
| -22.0% | -1.48ms | 0.8% → 0.6% | 6.7ms → 5.2ms | `Copy(Array, int32, Array, int32, int32)` | `System.Array` |

##### `Main()` (`Profile.Program`)

| Change |    Delta |             % |              Time | Callee                                                    | Location                      |
| -----: | -------: | ------------: | ----------------: | --------------------------------------------------------- | ----------------------------- |
|  +2.8% | +97.55ms | 74.6% → 76.1% |     3.51s → 3.61s | `DeserializeObject(String, Type, JsonSerializerSettings)` | `Newtonsoft.Json.JsonConvert` |
|  -7.2% | -62.37ms | 18.4% → 16.9% | 866.2ms → 803.8ms | `SerializeObjectInternal(Object, Type, JsonSerializer)`   | `Newtonsoft.Json.JsonConvert` |
|  +6.5% | +14.77ms |   4.8% → 5.1% | 226.0ms → 240.8ms | `DeserializeObject(String)`                               | `Newtonsoft.Json.JsonConvert` |
| -11.7% | -10.56ms |   1.9% → 1.7% |   90.2ms → 79.6ms | `SerializeObject(Object)`                                 | `Newtonsoft.Json.JsonConvert` |
| -37.9% |  -4.10ms |   0.2% → 0.1% |    10.8ms → 6.7ms | `ToString()`                                              | `System.Text.StringBuilder`   |

##### `CreateList(JsonReader, Type, JsonContract, JsonProperty, Object, String)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`)

|  Change |    Delta |             % |              Time | Callee                                                | Location                                                                             |
| ------: | -------: | ------------: | ----------------: | ----------------------------------------------------- | ------------------------------------------------------------------------------------ |
|   +7.1% | +60.28ms | 40.1% → 42.3% | 852.8ms → 913.1ms | `CopyTo(Array, int32)`                                | ``System.Collections.Generic.List`1[System.__Canon].System.Collections.ICollection`` |
|  -48.2% |  -3.84ms |   0.4% → 0.2% |     8.0ms → 4.1ms | `CreateNewList(JsonReader, JsonArrayContract, bool&)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader`                         |
|     new |  +1.48ms |   0.0% → 0.1% |       0ms → 1.5ms | `UNMANAGED_CODE_TIME`                                 | `<unknown>`                                                                          |
| removed |  -1.35ms |   0.1% → 0.0% |       1.3ms → 0ms | `CreateInstance(Type, int32)`                         | `System.Array`                                                                       |
|     new |  +1.12ms |   0.0% → 0.1% |       0ms → 1.1ms | `HasNoDefinedType(JsonContract)`                      | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader`                         |

##### `GetValue(Object)` (`Newtonsoft.Json.Serialization.DynamicValueProvider`)

| Change |   Delta |           % |        Time | Callee                | Location    |
| -----: | ------: | ----------: | ----------: | --------------------- | ----------- |
|    new | +1.34ms | 0.0% → 6.5% | 0ms → 1.3ms | `UNMANAGED_CODE_TIME` | `<unknown>` |

##### `ParseObject()` (`Newtonsoft.Json.JsonTextReader`)

| Change |   Delta |             % |              Time | Callee            | Location                         |
| -----: | ------: | ------------: | ----------------: | ----------------- | -------------------------------- |
|  +5.5% | +8.23ms | 88.9% → 84.2% | 149.5ms → 157.7ms | `ParseProperty()` | `Newtonsoft.Json.JsonTextReader` |

##### `ParseReadNumber(ReadType, wchar, int32)` (`Newtonsoft.Json.JsonTextReader`)

|  Change |   Delta |             % |            Time | Callee                                                                       | Location                                 |
| ------: | ------: | ------------: | --------------: | ---------------------------------------------------------------------------- | ---------------------------------------- |
| +208.0% | +8.46ms |  4.0% → 10.8% |  4.1ms → 12.5ms | `SetToken(JsonToken, Object, bool)`                                          | `Newtonsoft.Json.JsonReader`             |
| +250.7% | +6.74ms |   2.7% → 8.1% |   2.7ms → 9.4ms | `Int32TryParse(wchar[], int32, int32, int32&)`                               | `Newtonsoft.Json.Utilities.ConvertUtils` |
|     new | +4.36ms |   0.0% → 3.8% |     0ms → 4.4ms | `Ctor(wchar[], int32, int32)`                                                | `System.String`                          |
| removed | -1.33ms |   1.3% → 0.0% |     1.3ms → 0ms | `UNMANAGED_CODE_TIME`                                                        | `<unknown>`                              |
|   -2.5% | -0.95ms | 37.4% → 31.7% | 37.8ms → 36.9ms | ``TryParseFloat(ReadOnlySpan`1<!!0>, NumberStyles, NumberFormatInfo, !!1&)`` | `System.Number`                          |

##### `DeserializeObject(String, JsonSerializerSettings)` (`Newtonsoft.Json.JsonConvert`)

| Change |    Delta |      % |              Time | Callee                                                    | Location                      |
| -----: | -------: | -----: | ----------------: | --------------------------------------------------------- | ----------------------------- |
|  +6.5% | +14.77ms | 100.0% | 226.0ms → 240.8ms | `DeserializeObject(String, Type, JsonSerializerSettings)` | `Newtonsoft.Json.JsonConvert` |

##### `DeserializeObject(String)` (`Newtonsoft.Json.JsonConvert`)

| Change |    Delta |      % |              Time | Callee                                              | Location                      |
| -----: | -------: | -----: | ----------------: | --------------------------------------------------- | ----------------------------- |
|  +6.5% | +14.77ms | 100.0% | 226.0ms → 240.8ms | `DeserializeObject(String, JsonSerializerSettings)` | `Newtonsoft.Json.JsonConvert` |

##### `SetValue(Object, Object)` (`Newtonsoft.Json.Serialization.DynamicValueProvider`)

| Change |   Delta |           % |        Time | Callee                  | Location                                              |
| -----: | ------: | ----------: | ----------: | ----------------------- | ----------------------------------------------------- |
|    new | +1.34ms | 0.0% → 9.9% | 0ms → 1.3ms | `CreateSet(MemberInfo)` | `Newtonsoft.Json.Utilities.ReflectionDelegateFactory` |

##### `ParseProperty()` (`Newtonsoft.Json.JsonTextReader`)

| Change |    Delta |             % |            Time | Callee                              | Location                               |
| -----: | -------: | ------------: | --------------: | ----------------------------------- | -------------------------------------- |
| +26.9% | +12.70ms | 31.6% → 38.0% | 47.2ms → 59.9ms | `ReadStringIntoBuffer(wchar)`       | `Newtonsoft.Json.JsonTextReader`       |
| -63.3% |  -9.32ms |   9.9% → 3.4% |  14.7ms → 5.4ms | `SetToken(JsonToken, Object, bool)` | `Newtonsoft.Json.JsonReader`           |
| -64.9% |  -2.68ms |   2.8% → 0.9% |   4.1ms → 1.4ms | `Get(wchar[], int32, int32)`        | `Newtonsoft.Json.DefaultJsonNameTable` |
|    new |  +1.35ms |   0.0% → 0.9% |     0ms → 1.3ms | `UNMANAGED_CODE_TIME`               | `<unknown>`                            |
|    new |  +1.34ms |   0.0% → 0.9% |     0ms → 1.3ms | `EatWhitespace()`                   | `Newtonsoft.Json.JsonTextReader`       |

##### `Append(wchar&, int32)` (`System.Text.StringBuilder`)

| Change |   Delta |           % |        Time | Callee                | Location    |
| -----: | ------: | ----------: | ----------: | --------------------- | ----------- |
|    new | +1.21ms | 0.0% → 7.1% | 0ms → 1.2ms | `UNMANAGED_CODE_TIME` | `<unknown>` |

##### `ReadNumberValue(ReadType)` (`Newtonsoft.Json.JsonTextReader`)

| Change |    Delta |             % |             Time | Callee                                    | Location                         |
| -----: | -------: | ------------: | ---------------: | ----------------------------------------- | -------------------------------- |
| +14.6% | +13.56ms | 53.7% → 59.0% | 93.2ms → 106.8ms | `ParseReadNumber(ReadType, wchar, int32)` | `Newtonsoft.Json.JsonTextReader` |
|  -0.8% |  -0.09ms |   6.9% → 6.6% |           12.0ms | `ParseNumber(ReadType)`                   | `Newtonsoft.Json.JsonTextReader` |

##### `ReadAsInt32()` (`Newtonsoft.Json.JsonTextReader`)

| Change |   Delta |           % |          Time | Callee                      | Location                         |
| -----: | ------: | ----------: | ------------: | --------------------------- | -------------------------------- |
| -23.8% | -1.59ms | 6.6% → 4.7% | 6.7ms → 5.1ms | `ReadNumberValue(ReadType)` | `Newtonsoft.Json.JsonTextReader` |

##### `ToString()` (``System.ReadOnlySpan`1[System.Char]``)

| Change |   Delta |            % |        Time | Callee                          | Location        |
| -----: | ------: | -----------: | ----------: | ------------------------------- | --------------- |
|    new | +4.59ms | 0.0% → 77.3% | 0ms → 4.6ms | ``Ctor(ReadOnlySpan`1<wchar>)`` | `System.String` |

##### `Ctor(wchar[], int32, int32)` (`System.String`)

| Change |   Delta |            % |        Time | Callee                                                  | Location        |
| -----: | ------: | -----------: | ----------: | ------------------------------------------------------- | --------------- |
|    new | +3.00ms | 0.0% → 52.5% | 0ms → 3.0ms | `UNMANAGED_CODE_TIME`                                   | `<unknown>`     |
|    new | +1.36ms | 0.0% → 23.8% | 0ms → 1.4ms | `Memmove(unsigned int8&, unsigned int8&, unsigned int)` | `System.Buffer` |

##### `Concat(String, String)` (`System.String`)

|  Change |   Delta |              % |          Time | Callee                                                  | Location        |
| ------: | ------: | -------------: | ------------: | ------------------------------------------------------- | --------------- |
| +303.7% | +4.09ms | 100.0% → 80.2% | 1.3ms → 5.4ms | `Memmove(unsigned int8&, unsigned int8&, unsigned int)` | `System.Buffer` |

##### `DefineEventHandle(unsigned int32, String, int64, unsigned int32, unsigned int32, unsigned int8*, unsigned int32)` (`System.Diagnostics.Tracing.EventPipeEventProvider`)

| Change |   Delta |             % |        Time | Callee                | Location    |
| -----: | ------: | ------------: | ----------: | --------------------- | ----------- |
|    new | +5.36ms | 0.0% → 100.0% | 0ms → 5.4ms | `UNMANAGED_CODE_TIME` | `<unknown>` |

##### `DefineEventPipeEvents()` (`System.Diagnostics.Tracing.EventSource`)

| Change |   Delta |             % |        Time | Callee                                                                                                             | Location                                            |
| -----: | ------: | ------------: | ----------: | ------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------- |
|    new | +5.36ms | 0.0% → 100.0% | 0ms → 5.4ms | `DefineEventHandle(unsigned int32, String, int64, unsigned int32, unsigned int32, unsigned int8*, unsigned int32)` | `System.Diagnostics.Tracing.EventPipeEventProvider` |

##### `Write(String)` (`System.IO.StringWriter`)

| Change |   Delta |              % |          Time | Callee                                                  | Location                    |
| -----: | ------: | -------------: | ------------: | ------------------------------------------------------- | --------------------------- |
| +65.5% | +3.45ms | 100.0% → 87.8% | 5.3ms → 8.7ms | `Memmove(unsigned int8&, unsigned int8&, unsigned int)` | `System.Buffer`             |
|    new | +1.21ms |   0.0% → 12.2% |   0ms → 1.2ms | `Append(String)`                                        | `System.Text.StringBuilder` |

##### ``Ctor(ReadOnlySpan`1<wchar>)`` (`System.String`)

| Change |   Delta |             % |        Time | Callee                | Location    |
| -----: | ------: | ------------: | ----------: | --------------------- | ----------- |
|    new | +4.59ms | 0.0% → 100.0% | 0ms → 4.6ms | `UNMANAGED_CODE_TIME` | `<unknown>` |

##### ``FilterCustomAttributeRecord(MetadataToken, MetadataImport&, RuntimeModule, MetadataToken, RuntimeType, bool, ListBuilder`1<Object>&, RuntimeType&, IRuntimeMethodInfo&, bool&)`` (`System.Reflection.CustomAttribute`)

| Change |   Delta |            % |        Time | Callee                               | Location                          |
| -----: | ------: | -----------: | ----------: | ------------------------------------ | --------------------------------- |
|    new | +2.69ms | 0.0% → 66.5% | 0ms → 2.7ms | `ResolveType(int32, Type[], Type[])` | `System.Reflection.RuntimeModule` |
|    new | +1.35ms | 0.0% → 33.5% | 0ms → 1.4ms | `UNMANAGED_CODE_TIME`                | `<unknown>`                       |

##### `AppendWithExpansion(wchar&, int32)` (`System.Text.StringBuilder`)

|  Change |   Delta |              % |          Time | Callee                                                  | Location                    |
| ------: | ------: | -------------: | ------------: | ------------------------------------------------------- | --------------------------- |
| +106.6% | +1.43ms | 100.0% → 67.3% | 1.3ms → 2.8ms | `Memmove(unsigned int8&, unsigned int8&, unsigned int)` | `System.Buffer`             |
|     new | +1.35ms |   0.0% → 32.7% |   0ms → 1.3ms | `ExpandByABlock(int32)`                                 | `System.Text.StringBuilder` |

##### `ResolveTypeHandle(int32, RuntimeTypeHandle[], RuntimeTypeHandle[])` (`System.ModuleHandle`)

| Change |   Delta |             % |        Time | Callee | Location    |
| -----: | ------: | ------------: | ----------: | ------ | ----------- |
|    new | +2.69ms | 0.0% → 100.0% | 0ms → 2.7ms | `?!?`  | `<unknown>` |

##### `ResolveType(int32, Type[], Type[])` (`System.Reflection.RuntimeModule`)

| Change |   Delta |             % |        Time | Callee                                                               | Location              |
| -----: | ------: | ------------: | ----------: | -------------------------------------------------------------------- | --------------------- |
|    new | +2.69ms | 0.0% → 100.0% | 0ms → 2.7ms | `ResolveTypeHandle(int32, RuntimeTypeHandle[], RuntimeTypeHandle[])` | `System.ModuleHandle` |

##### ``AddCustomAttributes(ListBuilder`1<Object>&, RuntimeModule, int32, RuntimeType, bool, ListBuilder`1<Object>)`` (`System.Reflection.CustomAttribute`)

|  Change |   Delta |             % |          Time | Callee                                                                                                                                                                             | Location                              |
| ------: | ------: | ------------: | ------------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- |
|     new | +4.05ms |  0.0% → 75.2% |   0ms → 4.0ms | ``FilterCustomAttributeRecord(MetadataToken, MetadataImport&, RuntimeModule, MetadataToken, RuntimeType, bool, ListBuilder`1<Object>&, RuntimeType&, IRuntimeMethodInfo&, bool&)`` | `System.Reflection.CustomAttribute`   |
| removed | -1.34ms |  49.7% → 0.0% |   1.3ms → 0ms | `UNMANAGED_CODE_TIME`                                                                                                                                                              | `<unknown>`                           |
|   -1.9% | -0.03ms | 50.3% → 24.8% | 1.4ms → 1.3ms | `InvokePropertySetter(Object, BindingFlags, Binder, Object, CultureInfo)`                                                                                                          | `System.Reflection.MethodBaseInvoker` |

##### `IndexOf(!!0[], !!0, int32, int32)` (`System.Array`)

| Change |   Delta |              % |            Time | Callee                            | Location                                                                |
| -----: | ------: | -------------: | --------------: | --------------------------------- | ----------------------------------------------------------------------- |
| +31.2% | +3.80ms | 90.1% → 100.0% | 12.2ms → 16.0ms | `IndexOf(!0[], !0, int32, int32)` | ``System.Collections.Generic.ObjectEqualityComparer`1[System.__Canon]`` |

##### `EnsureDescriptorsInitialized()` (`System.Diagnostics.Tracing.EventSource`)

| Change |   Delta |              % |            Time | Callee                                                                          | Location                                 |
| -----: | ------: | -------------: | --------------: | ------------------------------------------------------------------------------- | ---------------------------------------- |
|    new | +5.36ms |   0.0% → 33.2% |     0ms → 5.4ms | `DefineEventPipeEvents()`                                                       | `System.Diagnostics.Tracing.EventSource` |
| -26.6% | -3.91ms | 100.0% → 66.8% | 14.7ms → 10.8ms | `CreateManifestAndDescriptors(Type, String, EventSource, EventManifestOptions)` | `System.Diagnostics.Tracing.EventSource` |

##### `SerializeObject(JsonWriter, Object, JsonObjectContract, JsonProperty, JsonContainerContract, JsonProperty)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`)

|  Change |    Delta |             % |              Time | Callee                                                                                                           | Location                                                     |
| ------: | -------: | ------------: | ----------------: | ---------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
|   -9.7% | -74.06ms | 85.0% → 85.4% | 765.0ms → 691.0ms | `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)`            | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |
| removed | -14.83ms |   1.6% → 0.0% |      14.8ms → 0ms | `GetValue(Object)`                                                                                               | `Newtonsoft.Json.Serialization.ExpressionValueProvider`      |
|  -56.3% | -12.16ms |   2.4% → 1.2% |    21.6ms → 9.4ms | `CheckForCircularReference(JsonWriter, Object, JsonProperty, JsonContract, JsonContainerContract, JsonProperty)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |
|     new |  +9.56ms |   0.0% → 1.2% |       0ms → 9.6ms | `GetValue(Object)`                                                                                               | `Newtonsoft.Json.Serialization.DynamicValueProvider`         |
| removed |  -4.01ms |   0.4% → 0.0% |       4.0ms → 0ms | `WriteObjectStart(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)`          | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |

##### `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`)

|  Change |    Delta |              % |              Time | Callee                                                                                                             | Location                                                     |
| ------: | -------: | -------------: | ----------------: | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------ |
|  -10.1% | -91.29ms | 100.0% → 99.3% | 900.3ms → 809.0ms | `SerializeObject(JsonWriter, Object, JsonObjectContract, JsonProperty, JsonContainerContract, JsonProperty)`       | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |
|   -9.1% | -60.11ms |  73.0% → 73.3% | 657.0ms → 596.9ms | `SerializeList(JsonWriter, IEnumerable, JsonArrayContract, JsonProperty, JsonContainerContract, JsonProperty)`     | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |
|   -9.2% | -21.06ms |          25.5% | 229.2ms → 208.1ms | `WriteValue(JsonWriter, PrimitiveTypeCode, Object)`                                                                | `Newtonsoft.Json.JsonWriter`                                 |
|  +22.2% |  +2.71ms |    1.4% → 1.8% |   12.2ms → 14.9ms | `SerializePrimitive(JsonWriter, Object, JsonPrimitiveContract, JsonProperty, JsonContainerContract, JsonProperty)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |
| +188.7% |  +2.70ms |    0.2% → 0.5% |     1.4ms → 4.1ms | `UNMANAGED_CODE_TIME`                                                                                              | `<unknown>`                                                  |

##### `Serialize(JsonWriter, Object, Type)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`)

| Change |    Delta |             % |              Time | Callee                                                                                                | Location                                                                                |
| -----: | -------: | ------------: | ----------------: | ----------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
|  -9.5% | -85.65ms | 96.7% → 96.2% | 900.3ms → 814.6ms | `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`                            |
|    new |  +1.31ms |   0.0% → 0.2% |       0ms → 1.3ms | `ShouldWriteReference(Object, JsonProperty, JsonContract, JsonContainerContract, JsonProperty)`       | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`                            |
|  +0.4% |  +0.09ms |   2.3% → 2.5% |   21.4ms → 21.5ms | `GetContractSafe(Object)`                                                                             | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`                            |
|  -1.5% |  -0.04ms |          0.3% |             2.7ms | `TryGetValueInternal(Tables<!0, !1>, !0, int32, !1&)`                                                 | ``System.Collections.Concurrent.ConcurrentDictionary`2[System.__Canon,System.__Canon]`` |

##### `SerializeInternal(JsonWriter, Object, Type)` (`Newtonsoft.Json.JsonSerializer`)

|  Change |    Delta |             % |              Time | Callee                                | Location                                                     |
| ------: | -------: | ------------: | ----------------: | ------------------------------------- | ------------------------------------------------------------ |
|   -9.0% | -83.97ms | 99.9% → 99.8% | 931.1ms → 847.1ms | `Serialize(JsonWriter, Object, Type)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter` |
| removed |  -1.30ms |   0.1% → 0.0% |       1.3ms → 0ms | `UNMANAGED_CODE_TIME`                 | `<unknown>`                                                  |

##### `SerializeObjectInternal(Object, Type, JsonSerializer)` (`Newtonsoft.Json.JsonConvert`)

|  Change |    Delta |             % |              Time | Callee                                        | Location                         |
| ------: | -------: | ------------: | ----------------: | --------------------------------------------- | -------------------------------- |
|  -10.5% | -88.44ms | 88.7% → 86.0% | 846.3ms → 757.8ms | `SerializeInternal(JsonWriter, Object, Type)` | `Newtonsoft.Json.JsonSerializer` |
|   +5.3% |  +4.53ms |  9.0% → 10.3% |   86.1ms → 90.6ms | `Serialize(JsonWriter, Object, Type)`         | `Newtonsoft.Json.JsonSerializer` |
| +100.3% |  +4.02ms |   0.4% → 0.9% |     4.0ms → 8.0ms | `UNMANAGED_CODE_TIME`                         | `<unknown>`                      |
|  +15.6% |  +1.45ms |   1.0% → 1.2% |    9.2ms → 10.7ms | `.ctor(TextWriter)`                           | `Newtonsoft.Json.JsonTextWriter` |
| removed |  -1.35ms |   0.1% → 0.0% |       1.3ms → 0ms | `ToString()`                                  | `System.Text.StringBuilder`      |

##### `SerializeList(JsonWriter, IEnumerable, JsonArrayContract, JsonProperty, JsonContainerContract, JsonProperty)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`)

|  Change |    Delta |             % |              Time | Callee                                                                                                | Location                                                                                |
| ------: | -------: | ------------: | ----------------: | ----------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
|   -8.2% | -42.07ms | 78.0% → 78.8% | 512.2ms → 470.1ms | `SerializeValue(JsonWriter, Object, JsonContract, JsonProperty, JsonContainerContract, JsonProperty)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`                            |
|  -66.5% |  -8.07ms |   1.8% → 0.7% |    12.1ms → 4.1ms | `IsInstance_Helper(void*, Object)`                                                                    | `System.Runtime.CompilerServices.CastHelpers`                                           |
| +509.1% |  +6.81ms |   0.2% → 1.4% |     1.3ms → 8.2ms | `TryGetValueInternal(Tables<!0, !1>, !0, int32, !1&)`                                                 | ``System.Collections.Concurrent.ConcurrentDictionary`2[System.__Canon,System.__Canon]`` |
|  -52.5% |  -5.60ms |   1.6% → 0.8% |    10.7ms → 5.1ms | `IsInstanceOfInterface(void*, Object)`                                                                | `System.Runtime.CompilerServices.CastHelpers`                                           |
| removed |  -3.97ms |   0.6% → 0.0% |       4.0ms → 0ms | `GetContractSafe(Object)`                                                                             | `Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`                            |

##### `ReadStringValue(ReadType)` (`Newtonsoft.Json.JsonTextReader`)

|  Change |    Delta |             % |            Time | Callee                             | Location                         |
| ------: | -------: | ------------: | --------------: | ---------------------------------- | -------------------------------- |
|  -46.9% | -11.99ms | 15.7% → 10.6% | 25.6ms → 13.6ms | `ParseReadString(wchar, ReadType)` | `Newtonsoft.Json.JsonTextReader` |
|  -59.3% |  -3.96ms |   4.1% → 2.1% |   6.7ms → 2.7ms | `ParseString(wchar, ReadType)`     | `Newtonsoft.Json.JsonTextReader` |
|  -12.7% |  -2.38ms | 11.5% → 12.8% | 18.7ms → 16.3ms | `ParsePostValue(bool)`             | `Newtonsoft.Json.JsonTextReader` |
| removed |  -1.34ms |   0.8% → 0.0% |     1.3ms → 0ms | `UNMANAGED_CODE_TIME`              | `<unknown>`                      |
|   -1.3% |  -0.95ms | 43.1% → 54.4% | 70.2ms → 69.3ms | `ReadStringIntoBuffer(wchar)`      | `Newtonsoft.Json.JsonTextReader` |

##### `SetPropertyValue(JsonProperty, JsonConverter, JsonContainerContract, JsonProperty, JsonReader, Object)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalReader`)

|  Change |    Delta |             % |              Time | Callee                                                                                                                                                         | Location                                                     |
| ------: | -------: | ------------: | ----------------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
|  -13.6% | -23.81ms | 97.8% → 96.5% | 174.6ms → 150.8ms | `CreateValueInternal(JsonReader, Type, JsonContract, JsonProperty, JsonContainerContract, JsonProperty, Object)`                                               | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |
| removed |  -2.65ms |   1.5% → 0.0% |       2.7ms → 0ms | `SetValue(Object, Object)`                                                                                                                                     | `Newtonsoft.Json.Serialization.ExpressionValueProvider`      |
|     new |  +2.63ms |   0.0% → 1.7% |       0ms → 2.6ms | `SetValue(Object, Object)`                                                                                                                                     | `Newtonsoft.Json.Serialization.DynamicValueProvider`         |
| removed |  -1.38ms |   0.8% → 0.0% |       1.4ms → 0ms | `UNMANAGED_CODE_TIME`                                                                                                                                          | `<unknown>`                                                  |
|  -29.4% |  -1.16ms |   2.2% → 1.8% |     3.9ms → 2.8ms | `CalculatePropertyDetails(JsonProperty, JsonConverter&, JsonContainerContract, JsonProperty, JsonReader, Object, bool&, Object&, JsonContract&, bool&, bool&)` | `Newtonsoft.Json.Serialization.JsonSerializerInternalReader` |

##### ``FormatDouble(ValueListBuilder`1<!!0>&, float64, ReadOnlySpan`1<wchar>, NumberFormatInfo)`` (`System.Number`)

| Change |    Delta |             % |            Time | Callee                                                                                      | Location               |
| -----: | -------: | ------------: | --------------: | ------------------------------------------------------------------------------------------- | ---------------------- |
| -60.2% | -12.17ms | 29.3% → 17.0% |  20.2ms → 8.0ms | ``NumberToString(ValueListBuilder`1<!!0>&, NumberBuffer&, wchar, int32, NumberFormatInfo)`` | `System.Number`        |
| -31.4% |  -9.85ms | 45.4% → 45.5% | 31.3ms → 21.5ms | `TryRunDouble(float64, int32, NumberBuffer&)`                                               | `System.Number+Grisu3` |
|  +3.0% |  +0.04ms |   2.0% → 3.0% |           1.4ms | ``ParseFormatSpecifier(ReadOnlySpan`1<wchar>, int32&)``                                     | `System.Number`        |

##### `GetValue(Object)` (`Newtonsoft.Json.Serialization.ExpressionValueProvider`)

|  Change |   Delta |            % |        Time | Callee                  | Location                                              |
| ------: | ------: | -----------: | ----------: | ----------------------- | ----------------------------------------------------- |
| removed | -5.45ms | 25.2% → 0.0% | 5.4ms → 0ms | `CreateGet(MemberInfo)` | `Newtonsoft.Json.Utilities.ReflectionDelegateFactory` |

##### `FindValue(!0)` (``System.Collections.Generic.Dictionary`2[System.__Canon,System.__Canon]``)

|  Change |   Delta |             % |           Time | Callee                       | Location                                                                         |
| ------: | ------: | ------------: | -------------: | ---------------------------- | -------------------------------------------------------------------------------- |
| removed | -1.34ms |   2.5% → 0.0% |    1.3ms → 0ms | `GetHashCode(String)`        | `System.Collections.Generic.NonRandomizedStringEqualityComparer+OrdinalComparer` |
|  -11.8% | -1.28ms | 20.2% → 28.2% | 10.8ms → 9.5ms | `GetNonRandomizedHashCode()` | `System.String`                                                                  |

##### `WriteValue(JsonWriter, PrimitiveTypeCode, Object)` (`Newtonsoft.Json.JsonWriter`)

| Change |    Delta |             % |              Time | Callee                                                                                                                         | Location                                    |
| -----: | -------: | ------------: | ----------------: | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------- |
| -12.9% | -15.78ms | 51.1% → 47.9% | 122.7ms → 106.9ms | `WriteValue(float64)`                                                                                                          | `Newtonsoft.Json.JsonTextWriter`            |
| -43.7% |  -5.26ms |   5.0% → 3.0% |    12.0ms → 6.8ms | `WriteIntegerValue(int32)`                                                                                                     | `Newtonsoft.Json.JsonTextWriter`            |
|    new |  +2.70ms |   0.0% → 1.2% |       0ms → 2.7ms | `WriteValue(int32)`                                                                                                            | `Newtonsoft.Json.JsonTextWriter`            |
|  -3.8% |  -2.68ms | 29.7% → 30.7% |   71.2ms → 68.6ms | ``WriteEscapedJavaScriptString(TextWriter, String, wchar, bool, bool[], StringEscapeHandling, IArrayPool`1<wchar>, wchar[]&)`` | `Newtonsoft.Json.Utilities.JavaScriptUtils` |
| -32.5% |  -1.34ms |   1.7% → 1.2% |     4.1ms → 2.8ms | `WriteValue(String)`                                                                                                           | `Newtonsoft.Json.JsonTextWriter`            |

##### `WriteValue(float64)` (`Newtonsoft.Json.JsonTextWriter`)

|  Change |    Delta |             % |            Time | Callee                                                      | Location                                |
| ------: | -------: | ------------: | --------------: | ----------------------------------------------------------- | --------------------------------------- |
|  -19.7% | -15.78ms | 65.2% → 60.0% | 79.9ms → 64.2ms | `FormatDouble(float64, String, NumberFormatInfo)`           | `System.Number`                         |
|  -76.5% |  -9.11ms |   9.7% → 2.6% |  11.9ms → 2.8ms | `EnsureDecimalPlace(float64, String)`                       | `Newtonsoft.Json.JsonConvert`           |
| +303.7% |  +4.09ms |   1.1% → 5.1% |   1.3ms → 5.4ms | `Concat(String, String)`                                    | `System.String`                         |
|  +65.5% |  +3.45ms |   4.3% → 8.2% |   5.3ms → 8.7ms | `Write(String)`                                             | `System.IO.StringWriter`                |
|  -50.0% |  -1.35ms |   2.2% → 1.3% |   2.7ms → 1.3ms | `<GetInstance>g__GetProviderNonNull\|58_0(IFormatProvider)` | `System.Globalization.NumberFormatInfo` |

##### `FormatDouble(float64, String, NumberFormatInfo)` (`System.Number`)

|  Change |    Delta |             % |            Time | Callee                                                                                       | Location                               |
| ------: | -------: | ------------: | --------------: | -------------------------------------------------------------------------------------------- | -------------------------------------- |
|  -31.6% | -21.77ms | 83.5% → 69.3% | 69.0ms → 47.2ms | ``FormatDouble(ValueListBuilder`1<!!0>&, float64, ReadOnlySpan`1<wchar>, NumberFormatInfo)`` | `System.Number`                        |
|     new |  +5.93ms |   0.0% → 8.7% |     0ms → 5.9ms | `ToString()`                                                                                 | ``System.ReadOnlySpan`1[System.Char]`` |
| removed |  -1.35ms |   1.6% → 0.0% |     1.3ms → 0ms | `UNMANAGED_CODE_TIME`                                                                        | `<unknown>`                            |

##### `ParseReadString(wchar, ReadType)` (`Newtonsoft.Json.JsonTextReader`)

| Change |   Delta |             % |            Time | Callee                              | Location                                    |
| -----: | ------: | ------------: | --------------: | ----------------------------------- | ------------------------------------------- |
| -20.2% | -2.75ms | 48.0% → 72.6% | 13.6ms → 10.8ms | `SetToken(JsonToken, Object, bool)` | `Newtonsoft.Json.JsonReader`                |
|  +1.0% | +0.01ms |   4.8% → 9.1% |   1.3ms → 1.4ms | `ToString()`                        | `Newtonsoft.Json.Utilities.StringReference` |

##### `ParseValue()` (`Newtonsoft.Json.JsonTextReader`)

|  Change |   Delta |            % |           Time | Callee                              | Location                         |
| ------: | ------: | -----------: | -------------: | ----------------------------------- | -------------------------------- |
|  +99.5% | +6.71ms | 8.4% → 19.9% | 6.7ms → 13.4ms | `SetToken(JsonToken, Object, bool)` | `Newtonsoft.Json.JsonReader`     |
|  -33.0% | -2.67ms | 10.1% → 8.0% |  8.1ms → 5.4ms | `ParseNull()`                       | `Newtonsoft.Json.JsonTextReader` |
|     new | +2.63ms |  0.0% → 3.9% |    0ms → 2.6ms | `Push(JsonContainerType)`           | `Newtonsoft.Json.JsonReader`     |
| +102.4% | +1.38ms |  1.7% → 4.0% |  1.3ms → 2.7ms | `SetToken(JsonToken)`               | `Newtonsoft.Json.JsonReader`     |
|     new | +1.35ms |  0.0% → 2.0% |    0ms → 1.3ms | `ReadData(bool)`                    | `Newtonsoft.Json.JsonTextReader` |

##### `CheckForCircularReference(JsonWriter, Object, JsonProperty, JsonContract, JsonContainerContract, JsonProperty)` (`Newtonsoft.Json.Serialization.JsonSerializerInternalWriter`)

|  Change |   Delta |             % |            Time | Callee                              | Location       |
| ------: | ------: | ------------: | --------------: | ----------------------------------- | -------------- |
|  +18.2% | +2.46ms | 43.8% → 85.5% | 13.5ms → 16.0ms | `IndexOf(!!0[], !!0, int32, int32)` | `System.Array` |
| removed | -1.35ms |   4.4% → 0.0% |     1.3ms → 0ms | `UNMANAGED_CODE_TIME`               | `<unknown>`    |

##### ``NumberToString(ValueListBuilder`1<!!0>&, NumberBuffer&, wchar, int32, NumberFormatInfo)`` (`System.Number`)

| Change |   Delta |             % |           Time | Callee                                                                                           | Location        |
| -----: | ------: | ------------: | -------------: | ------------------------------------------------------------------------------------------------ | --------------- |
| -56.1% | -6.78ms | 59.9% → 66.1% | 12.1ms → 5.3ms | ``FormatGeneral(ValueListBuilder`1<!!0>&, NumberBuffer&, int32, NumberFormatInfo, wchar, bool)`` | `System.Number` |
| -66.4% | -5.39ms | 40.1% → 33.9% |  8.1ms → 2.7ms | `RoundNumber(NumberBuffer&, int32, bool)`                                                        | `System.Number` |

##### `SerializeObject(Object, Type, JsonSerializerSettings)` (`Newtonsoft.Json.JsonConvert`)

| Change |    Delta |             % |            Time | Callee                                                  | Location                         |
| -----: | -------: | ------------: | --------------: | ------------------------------------------------------- | -------------------------------- |
| -12.1% | -10.56ms | 97.0% → 96.6% | 87.5ms → 77.0ms | `SerializeObjectInternal(Object, Type, JsonSerializer)` | `Newtonsoft.Json.JsonConvert`    |
|  -0.1% |  -2.67µs |   3.0% → 3.4% |           2.7ms | `CreateDefault(JsonSerializerSettings)`                 | `Newtonsoft.Json.JsonSerializer` |

##### `SerializeObject(Object)` (`Newtonsoft.Json.JsonConvert`)

| Change |    Delta |      % |            Time | Callee                                                  | Location                      |
| -----: | -------: | -----: | --------------: | ------------------------------------------------------- | ----------------------------- |
| -11.7% | -10.56ms | 100.0% | 90.2ms → 79.6ms | `SerializeObject(Object, Type, JsonSerializerSettings)` | `Newtonsoft.Json.JsonConvert` |

##### `EnsureDecimalPlace(float64, String)` (`Newtonsoft.Json.JsonConvert`)

|  Change |   Delta |             % |           Time | Callee                                        | Location                                |
| ------: | ------: | ------------: | -------------: | --------------------------------------------- | --------------------------------------- |
|  -76.5% | -9.11ms | 81.2% → 67.6% | 11.9ms → 2.8ms | `NonPackedIndexOfValueType(!!0&, !!0, int32)` | `System.SpanHelpers`                    |
| removed | -2.76ms |  18.8% → 0.0% |    2.8ms → 0ms | `IndexOf(String, wchar)`                      | `Newtonsoft.Json.Utilities.StringUtils` |
|     new | +1.34ms |  0.0% → 32.4% |    0ms → 1.3ms | `Concat(String, String)`                      | `System.String`                         |

##### `Get(!0)` (``Newtonsoft.Json.Utilities.ThreadSafeStore`2[System.__Canon,System.__Canon]``)

| Change |   Delta |      % |            Time | Callee                           | Location                                                                                |
| -----: | ------: | -----: | --------------: | -------------------------------- | --------------------------------------------------------------------------------------- |
| -22.3% | -6.57ms | 100.0% | 29.4ms → 22.9ms | ``GetOrAdd(!0, Func`2<!0, !1>)`` | ``System.Collections.Concurrent.ConcurrentDictionary`2[System.__Canon,System.__Canon]`` |

##### `ResolveContract(Type)` (`Newtonsoft.Json.Serialization.DefaultContractResolver`)

| Change |   Delta |      % |            Time | Callee    | Location                                                                       |
| -----: | ------: | -----: | --------------: | --------- | ------------------------------------------------------------------------------ |
| -22.3% | -6.57ms | 100.0% | 29.4ms → 22.9ms | `Get(!0)` | ``Newtonsoft.Json.Utilities.ThreadSafeStore`2[System.__Canon,System.__Canon]`` |

##### `TryRunDouble(float64, int32, NumberBuffer&)` (`System.Number+Grisu3`)

| Change |    Delta |             % |            Time | Callee                                                                                 | Location               |
| -----: | -------: | ------------: | --------------: | -------------------------------------------------------------------------------------- | ---------------------- |
| -48.6% | -13.89ms | 91.3% → 68.5% | 28.6ms → 14.7ms | ``TryDigitGenShortest(DiyFp&, DiyFp&, DiyFp&, Span`1<unsigned int8>, int32&, int32&)`` | `System.Number+Grisu3` |
|    new |  +1.36ms |   0.0% → 6.3% |     0ms → 1.4ms | `UNMANAGED_CODE_TIME`                                                                  | `<unknown>`            |
|    new |  +1.31ms |   0.0% → 6.1% |     0ms → 1.3ms | ``TryRunShortest(DiyFp&, DiyFp&, DiyFp&, Span`1<unsigned int8>, int32&, int32&)``      | `System.Number+Grisu3` |

##### `Add(Object)` (``System.Collections.Generic.List`1[System.__Canon].System.Collections.IList``)

| Change |   Delta |             % |          Time | Callee                          | Location                                              |
| -----: | ------: | ------------: | ------------: | ------------------------------- | ----------------------------------------------------- |
| -26.2% | -1.44ms | 17.6% → 16.6% | 5.5ms → 4.1ms | `AddWithResize(!0)`             | ``System.Collections.Generic.List`1[System.__Canon]`` |
| -49.4% | -1.32ms |   8.5% → 5.5% | 2.7ms → 1.3ms | `StelemRef(Array, int, Object)` | `System.Runtime.CompilerServices.CastHelpers`         |

##### `Compile(LambdaExpression)` (`System.Linq.Expressions.Compiler.LambdaCompiler`)

|  Change |   Delta |            % |        Time | Callee                                  | Location                                                 |
| ------: | ------: | -----------: | ----------: | --------------------------------------- | -------------------------------------------------------- |
| removed | -1.43ms | 21.2% → 0.0% | 1.4ms → 0ms | `.ctor(AnalyzedTree, LambdaExpression)` | `System.Linq.Expressions.Compiler.LambdaCompiler`        |
| removed | -1.34ms | 19.8% → 0.0% | 1.3ms → 0ms | `UNMANAGED_CODE_TIME`                   | `<unknown>`                                              |
| removed | -1.34ms | 19.8% → 0.0% | 1.3ms → 0ms | `Accept(StackSpiller)`                  | ``System.Linq.Expressions.Expression`1[System.__Canon]`` |
| removed | -1.34ms | 19.8% → 0.0% | 1.3ms → 0ms | ``VisitLambda(Expression`1<!!0>)``      | `System.Linq.Expressions.Compiler.VariableBinder`        |
| removed | -1.32ms | 19.5% → 0.0% | 1.3ms → 0ms | `CreateDelegate(Type, Object)`          | `System.Reflection.Emit.DynamicMethod`                   |

##### ``GetOrAdd(!0, Func`2<!0, !1>)`` (``System.Collections.Concurrent.ConcurrentDictionary`2[System.__Canon,System.__Canon]``)

|  Change |   Delta |             % |            Time | Callee                                                | Location                                                                                |
| ------: | ------: | ------------: | --------------: | ----------------------------------------------------- | --------------------------------------------------------------------------------------- |
| removed | -3.97ms |  13.5% → 0.0% |     4.0ms → 0ms | `TryGetValueInternal(Tables<!0, !1>, !0, int32, !1&)` | ``System.Collections.Concurrent.ConcurrentDictionary`2[System.__Canon,System.__Canon]`` |
| +195.1% | +2.67ms |  4.6% → 17.7% |   1.4ms → 4.0ms | `GetAttribute(Object)`                                | `Newtonsoft.Json.Serialization.JsonTypeReflector`                                       |
|  -10.9% | -2.63ms | 82.0% → 94.1% | 24.2ms → 21.5ms | `CreateContract(Type)`                                | `Newtonsoft.Json.Serialization.DefaultContractResolver`                                 |
|     new | +1.34ms |   0.0% → 5.8% |     0ms → 1.3ms | `GetAssociateMetadataTypeFromAttribute(Type)`         | `Newtonsoft.Json.Serialization.JsonTypeReflector`                                       |
|   +1.8% | +0.02ms |   4.5% → 5.9% |           1.3ms | `UNMANAGED_CODE_TIME`                                 | `<unknown>`                                                                             |

##### `ToString()` (`System.Text.StringBuilder`)

|  Change |   Delta |             % |          Time | Callee                                                  | Location        |
| ------: | ------: | ------------: | ------------: | ------------------------------------------------------- | --------------- |
| removed | -4.07ms |  33.4% → 0.0% |   4.1ms → 0ms | `UNMANAGED_CODE_TIME`                                   | `<unknown>`     |
|  -59.7% | -4.02ms | 55.4% → 40.5% | 6.7ms → 2.7ms | `Memmove(unsigned int8&, unsigned int8&, unsigned int)` | `System.Buffer` |

##### `CreateManifestString()` (`System.Diagnostics.Tracing.ManifestBuilder`)

|  Change |   Delta |            % |        Time | Callee                                  | Location                                                                 |
| ------: | ------: | -----------: | ----------: | --------------------------------------- | ------------------------------------------------------------------------ |
| removed | -5.32ms | 66.6% → 0.0% | 5.3ms → 0ms | ``Sort(int32, int32, IComparer`1<!0>)`` | ``System.Collections.Generic.List`1[System.UInt64]``                     |
|     new | +1.34ms | 0.0% → 50.3% | 0ms → 1.3ms | ``.ctor(IEnumerable`1<!0>)``            | ``System.Collections.Generic.List`1[System.UInt64]``                     |
| removed | -1.34ms | 16.7% → 0.0% | 1.3ms → 0ms | `get_Keys()`                            | ``System.Collections.Generic.Dictionary`2[System.Int32,System.__Canon]`` |
| removed | -1.34ms | 16.7% → 0.0% | 1.3ms → 0ms | `UNMANAGED_CODE_TIME`                   | `<unknown>`                                                              |
|     new | +1.33ms | 0.0% → 49.7% | 0ms → 1.3ms | ``Sort(int32, int32, IComparer`1<!0>)`` | ``System.Collections.Generic.List`1[System.Int32]``                      |

##### `CreateManifest()` (`System.Diagnostics.Tracing.ManifestBuilder`)

| Change |   Delta |      % |          Time | Callee                   | Location                                     |
| -----: | ------: | -----: | ------------: | ------------------------ | -------------------------------------------- |
| -66.6% | -5.32ms | 100.0% | 8.0ms → 2.7ms | `CreateManifestString()` | `System.Diagnostics.Tracing.ManifestBuilder` |

##### ``PickPivotAndPartition(Span`1<!0>)`` (``System.Collections.Generic.GenericArraySortHelper`1[System.UInt64]``)

|  Change |   Delta |             % |        Time | Callee                | Location    |
| ------: | ------: | ------------: | ----------: | --------------------- | ----------- |
| removed | -5.32ms | 100.0% → 0.0% | 5.3ms → 0ms | `UNMANAGED_CODE_TIME` | `<unknown>` |

##### ``IntroSort(Span`1<!0>, int32)`` (``System.Collections.Generic.GenericArraySortHelper`1[System.UInt64]``)

|  Change |   Delta |             % |        Time | Callee                                | Location                                                               |
| ------: | ------: | ------------: | ----------: | ------------------------------------- | ---------------------------------------------------------------------- |
| removed | -5.32ms | 100.0% → 0.0% | 5.3ms → 0ms | ``PickPivotAndPartition(Span`1<!0>)`` | ``System.Collections.Generic.GenericArraySortHelper`1[System.UInt64]`` |

##### ``Sort(Span`1<!0>, IComparer`1<!0>)`` (``System.Collections.Generic.GenericArraySortHelper`1[System.UInt64]``)

|  Change |   Delta |             % |        Time | Callee                           | Location                                                               |
| ------: | ------: | ------------: | ----------: | -------------------------------- | ---------------------------------------------------------------------- |
| removed | -5.32ms | 100.0% → 0.0% | 5.3ms → 0ms | ``IntroSort(Span`1<!0>, int32)`` | ``System.Collections.Generic.GenericArraySortHelper`1[System.UInt64]`` |

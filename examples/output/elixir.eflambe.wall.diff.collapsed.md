# Wall time profile diff

Took 25.8ms → 27.9ms (+2.17ms, +8.4%).

| Category         | Change |   Delta |             % |            Time |
| ---------------- | -----: | ------: | ------------: | --------------: |
| Ours             |  +8.9% | +2.12ms | 91.9% → 92.3% | 23.7ms → 25.8ms |
| Standard library |  +3.0% | +0.05ms |   5.9% → 5.6% |   1.5ms → 1.6ms |
| Idle             |  +0.9% | +0.01ms |   2.2% → 2.1% |           0.6ms |

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in wall time spent directly in the function body, excluding callees.

|  Change |   Delta |             % |            Time | Function                             | Location        |
| ------: | ------: | ------------: | --------------: | ------------------------------------ | --------------- |
|  +19.5% | +1.38ms | 27.5% → 30.3% |   7.1ms → 8.5ms | `string/6`                           | `Jason.Decoder` |
|  +24.9% | +0.20ms |   3.2% → 3.7% |   0.8ms → 1.0ms | `string/7`                           | `Jason.Decoder` |
|  +18.8% | +0.13ms |   2.6% → 2.9% |   0.7ms → 0.8ms | `object/6`                           | `Jason.Decoder` |
|  +17.6% | +0.08ms |   1.7% → 1.8% |   0.4ms → 0.5ms | `-string_decode_function/1-fun-0-/1` | `Jason.Decoder` |
|  +17.9% | +0.06ms |   1.3% → 1.4% |   0.3ms → 0.4ms | `-key_decode_function/1-fun-0-/1`    | `Jason.Decoder` |
|  +15.7% | +0.06ms |   1.4% → 1.5% |           0.4ms | `value/5`                            | `Jason.Decoder` |
|  +17.3% | +0.06ms |   1.3% → 1.4% |   0.3ms → 0.4ms | `key/5`                              | `Jason.Decoder` |
|  +17.3% | +0.06ms |   1.3% → 1.4% |   0.3ms → 0.4ms | `key/6`                              | `Jason.Decoder` |
|  +12.4% | +0.04ms |          1.2% |           0.3ms | `number/6`                           | `Jason.Decoder` |
|   +4.1% | +0.02ms |   1.8% → 1.7% |           0.5ms | `map_naive/3`                        | `Jason.Encode`  |
| +340.0% | +0.02ms |  <0.1% → 0.1% |  5.0µs → 22.0µs | `encode!/1`                          | `Jason`         |
|  +25.0% | +0.01ms |          0.2% |           0.1ms | `escape/6`                           | `Jason.Decoder` |
|  +14.5% | +0.01ms |          0.3% |           0.1ms | `binary_to_integer/1`                | `erlang`        |
|  +12.2% | +0.01ms |          0.2% |  49.0µs → 0.1ms | `binary_to_integer/2`                | `erts_internal` |
| +125.0% | +0.01ms |         <0.1% |   4.0µs → 9.0µs | `reduce/3`                           | `Enum`          |
|  +12.5% | +0.01ms |          0.2% | 40.0µs → 45.0µs | `from_list/1`                        | `maps`          |
|   +0.9% | +0.01ms |   2.2% → 2.1% |           0.6ms | `sleep`                              | `<unknown>`     |
|  +13.3% | +4.00µs |          0.1% | 30.0µs → 34.0µs | `into_map/2`                         | `Enum`          |
|  +15.0% | +3.00µs |          0.1% | 20.0µs → 23.0µs | `encode!/2`                          | `Jason`         |
|   +0.3% | +3.00µs |   3.5% → 3.3% |           0.9ms | `prepare_loading_1/2`                | `erlang`        |

##### Ours

|  Change |   Delta |             % |            Time | Function                             | Location        |
| ------: | ------: | ------------: | --------------: | ------------------------------------ | --------------- |
|  +19.5% | +1.38ms | 27.5% → 30.3% |   7.1ms → 8.5ms | `string/6`                           | `Jason.Decoder` |
|  +24.9% | +0.20ms |   3.2% → 3.7% |   0.8ms → 1.0ms | `string/7`                           | `Jason.Decoder` |
|  +18.8% | +0.13ms |   2.6% → 2.9% |   0.7ms → 0.8ms | `object/6`                           | `Jason.Decoder` |
|  +17.6% | +0.08ms |   1.7% → 1.8% |   0.4ms → 0.5ms | `-string_decode_function/1-fun-0-/1` | `Jason.Decoder` |
|  +17.9% | +0.06ms |   1.3% → 1.4% |   0.3ms → 0.4ms | `-key_decode_function/1-fun-0-/1`    | `Jason.Decoder` |
|  +15.7% | +0.06ms |   1.4% → 1.5% |           0.4ms | `value/5`                            | `Jason.Decoder` |
|  +17.3% | +0.06ms |   1.3% → 1.4% |   0.3ms → 0.4ms | `key/5`                              | `Jason.Decoder` |
|  +17.3% | +0.06ms |   1.3% → 1.4% |   0.3ms → 0.4ms | `key/6`                              | `Jason.Decoder` |
|  +12.4% | +0.04ms |          1.2% |           0.3ms | `number/6`                           | `Jason.Decoder` |
|   +4.1% | +0.02ms |   1.8% → 1.7% |           0.5ms | `map_naive/3`                        | `Jason.Encode`  |
| +340.0% | +0.02ms |  <0.1% → 0.1% |  5.0µs → 22.0µs | `encode!/1`                          | `Jason`         |
|  +25.0% | +0.01ms |          0.2% |           0.1ms | `escape/6`                           | `Jason.Decoder` |
|  +15.0% | +3.00µs |          0.1% | 20.0µs → 23.0µs | `encode!/2`                          | `Jason`         |
|  +11.1% | +2.00µs |          0.1% | 18.0µs → 20.0µs | `number_zero/6`                      | `Jason.Decoder` |
|   +9.1% | +1.00µs |         <0.1% | 11.0µs → 12.0µs | `-run/1-fun-0-/2`                    | `Profile`       |
|  +20.0% | +1.00µs |         <0.1% |   5.0µs → 6.0µs | `decode!/1`                          | `Jason`         |
|  +11.1% | +1.00µs |         <0.1% |  9.0µs → 10.0µs | `decode!/2`                          | `Jason`         |
|   +3.4% | +1.00µs |          0.1% | 29.0µs → 30.0µs | `parse/2`                            | `Jason.Decoder` |
|   +5.3% | +1.00µs |          0.1% | 19.0µs → 20.0µs | `empty_array/5`                      | `Jason.Decoder` |
|  +25.0% | +1.00µs |         <0.1% |   4.0µs → 5.0µs | `terminate/6`                        | `Jason.Decoder` |

##### Standard library

|  Change |   Delta |            % |            Time | Function                        | Location         |
| ------: | ------: | -----------: | --------------: | ------------------------------- | ---------------- |
|  +14.5% | +0.01ms |         0.3% |           0.1ms | `binary_to_integer/1`           | `erlang`         |
|  +12.2% | +0.01ms |         0.2% |  49.0µs → 0.1ms | `binary_to_integer/2`           | `erts_internal`  |
| +125.0% | +0.01ms |        <0.1% |   4.0µs → 9.0µs | `reduce/3`                      | `Enum`           |
|  +12.5% | +0.01ms |         0.2% | 40.0µs → 45.0µs | `from_list/1`                   | `maps`           |
|  +13.3% | +4.00µs |         0.1% | 30.0µs → 34.0µs | `into_map/2`                    | `Enum`           |
|   +0.3% | +3.00µs |  3.5% → 3.3% |           0.9ms | `prepare_loading_1/2`           | `erlang`         |
|  +11.1% | +2.00µs |         0.1% | 18.0µs → 20.0µs | `iolist_to_binary/1`            | `erlang`         |
|  +40.0% | +2.00µs |        <0.1% |   5.0µs → 7.0µs | `reduce_range/5`                | `Enum`           |
|     new | +2.00µs | 0.0% → <0.1% |     0ms → 2.0µs | `trace/3`                       | `erlang`         |
|     new | +2.00µs | 0.0% → <0.1% |     0ms → 2.0µs | `ensure_tracer_module_loaded/2` | `erlang`         |
|     new | +1.00µs | 0.0% → <0.1% |     0ms → 1.0µs | `apply/2`                       | `eflambe`        |
|     new | +1.00µs | 0.0% → <0.1% |     0ms → 1.0µs | `stop_trace/1`                  | `eflambe_server` |
|     new | +1.00µs | 0.0% → <0.1% |     0ms → 1.0µs | `stop_erlang_trace/1`           | `eflambe_server` |
|     new | +1.00µs | 0.0% → <0.1% |     0ms → 1.0µs | `keyfind/3`                     | `lists`          |
|     new | +1.00µs | 0.0% → <0.1% |     0ms → 1.0µs | `trace/3`                       | `erts_internal`  |

##### Idle

| Change |   Delta |           % |  Time | Function | Location    |
| -----: | ------: | ----------: | ----: | -------- | ----------- |
|  +0.9% | +0.01ms | 2.2% → 2.1% | 0.6ms | `sleep`  | `<unknown>` |

#### Improvements

Functions with the largest decrease in wall time spent directly in the function body, excluding callees.

| Change |   Delta |           % |          Time | Function              | Location       |
| -----: | ------: | ----------: | ------------: | --------------------- | -------------- |
| -33.3% | -1.00µs |       <0.1% | 3.0µs → 2.0µs | `demonitor/2`         | `erlang`       |
| -50.0% | -1.00µs |       <0.1% | 2.0µs → 1.0µs | `function_exported/3` | `erlang`       |
|  -0.1% | -1.00µs | 4.2% → 3.8% |         1.1ms | `map_naive_loop/3`    | `Jason.Encode` |

##### Ours

| Change |   Delta |           % |  Time | Function           | Location       |
| -----: | ------: | ----------: | ----: | ------------------ | -------------- |
|  -0.1% | -1.00µs | 4.2% → 3.8% | 1.1ms | `map_naive_loop/3` | `Jason.Encode` |

##### Standard library

| Change |   Delta |     % |          Time | Function              | Location |
| -----: | ------: | ----: | ------------: | --------------------- | -------- |
| -33.3% | -1.00µs | <0.1% | 3.0µs → 2.0µs | `demonitor/2`         | `erlang` |
| -50.0% | -1.00µs | <0.1% | 2.0µs → 1.0µs | `function_exported/3` | `erlang` |

### Total time

#### Regressions

Functions with the largest increase in total wall time spent in the function and all its callees.

| Change |   Delta |             % |            Time | Function                             | Location        |
| -----: | ------: | ------------: | --------------: | ------------------------------------ | --------------- |
|  +8.4% | +2.17ms |        100.0% | 25.8ms → 27.9ms | `apply/2`                            | `eflambe`       |
|  +8.4% | +2.17ms |        100.0% | 25.8ms → 27.9ms | `<0.94.0>`                           | `<unknown>`     |
| +18.8% | +2.11ms | 43.5% → 47.7% | 11.2ms → 13.3ms | `decode!/2`                          | `Jason`         |
| +11.2% | +2.11ms | 73.3% → 75.1% | 18.9ms → 21.0ms | `reduce_range/5`                     | `Enum`          |
| +18.9% | +2.10ms | 43.2% → 47.4% | 11.1ms → 13.2ms | `parse/2`                            | `Jason.Decoder` |
| +19.4% | +1.46ms | 29.2% → 32.2% |   7.5ms → 9.0ms | `string/6`                           | `Jason.Decoder` |
| +24.9% | +0.21ms |   3.3% → 3.7% |   0.8ms → 1.0ms | `string/7`                           | `Jason.Decoder` |
| +18.6% | +0.19ms |   4.0% → 4.4% |   1.0ms → 1.2ms | `object/6`                           | `Jason.Decoder` |
| +17.6% | +0.08ms |   1.7% → 1.8% |   0.4ms → 0.5ms | `-string_decode_function/1-fun-0-/1` | `Jason.Decoder` |
| +17.9% | +0.06ms |   1.3% → 1.4% |   0.3ms → 0.4ms | `-key_decode_function/1-fun-0-/1`    | `Jason.Decoder` |
| +15.7% | +0.06ms |   1.4% → 1.5% |           0.4ms | `value/5`                            | `Jason.Decoder` |
| +17.3% | +0.06ms |   1.3% → 1.4% |   0.3ms → 0.4ms | `key/5`                              | `Jason.Decoder` |
| +17.3% | +0.06ms |   1.3% → 1.4% |   0.3ms → 0.4ms | `key/6`                              | `Jason.Decoder` |
| +10.1% | +0.06ms |   2.1% → 2.2% |           0.6ms | `number/6`                           | `Jason.Decoder` |
|  +0.8% | +0.05ms | 26.7% → 24.8% |           6.9ms | `reduce/3`                           | `Enum`          |
|  +0.3% | +0.04ms | 56.4% → 52.2% | 14.5ms → 14.6ms | `-run/1-fun-0-/2`                    | `Profile`       |
|  +0.2% | +0.03ms | 56.4% → 52.1% | 14.5ms → 14.6ms | `encode!/2`                          | `Jason`         |
|  +1.3% | +0.02ms |   6.4% → 6.0% |   1.6ms → 1.7ms | `undefined_function/3`               | `error_handler` |
|  +1.5% | +0.02ms |   4.5% → 4.2% |           1.2ms | `ensure_loaded/1`                    | `code`          |
|  +7.3% | +0.02ms |   1.0% → 0.9% |   0.2ms → 0.3ms | `binary_to_integer/1`                | `erlang`        |

##### Ours

|  Change |   Delta |             % |            Time | Function                             | Location          |
| ------: | ------: | ------------: | --------------: | ------------------------------------ | ----------------- |
|  +18.8% | +2.11ms | 43.5% → 47.7% | 11.2ms → 13.3ms | `decode!/2`                          | `Jason`           |
|  +18.9% | +2.10ms | 43.2% → 47.4% | 11.1ms → 13.2ms | `parse/2`                            | `Jason.Decoder`   |
|  +19.4% | +1.46ms | 29.2% → 32.2% |   7.5ms → 9.0ms | `string/6`                           | `Jason.Decoder`   |
|  +24.9% | +0.21ms |   3.3% → 3.7% |   0.8ms → 1.0ms | `string/7`                           | `Jason.Decoder`   |
|  +18.6% | +0.19ms |   4.0% → 4.4% |   1.0ms → 1.2ms | `object/6`                           | `Jason.Decoder`   |
|  +17.6% | +0.08ms |   1.7% → 1.8% |   0.4ms → 0.5ms | `-string_decode_function/1-fun-0-/1` | `Jason.Decoder`   |
|  +17.9% | +0.06ms |   1.3% → 1.4% |   0.3ms → 0.4ms | `-key_decode_function/1-fun-0-/1`    | `Jason.Decoder`   |
|  +15.7% | +0.06ms |   1.4% → 1.5% |           0.4ms | `value/5`                            | `Jason.Decoder`   |
|  +17.3% | +0.06ms |   1.3% → 1.4% |   0.3ms → 0.4ms | `key/5`                              | `Jason.Decoder`   |
|  +17.3% | +0.06ms |   1.3% → 1.4% |   0.3ms → 0.4ms | `key/6`                              | `Jason.Decoder`   |
|  +10.1% | +0.06ms |   2.1% → 2.2% |           0.6ms | `number/6`                           | `Jason.Decoder`   |
|   +0.3% | +0.04ms | 56.4% → 52.2% | 14.5ms → 14.6ms | `-run/1-fun-0-/2`                    | `Profile`         |
|   +0.2% | +0.03ms | 56.4% → 52.1% | 14.5ms → 14.6ms | `encode!/2`                          | `Jason`           |
|   +1.3% | +0.02ms |   6.4% → 6.0% |   1.6ms → 1.7ms | `undefined_function/3`               | `error_handler`   |
| +340.0% | +0.02ms |  <0.1% → 0.1% |  5.0µs → 22.0µs | `encode!/1`                          | `Jason`           |
|  +25.0% | +0.01ms |          0.2% |           0.1ms | `escape/6`                           | `Jason.Decoder`   |
|   +2.2% | +0.01ms |   2.1% → 2.0% |           0.5ms | `call/1`                             | `code_server`     |
|   +4.5% | +0.01ms |          0.7% |           0.2ms | `read_file/1`                        | `erl_prim_loader` |
|  +61.5% | +0.01ms |          0.1% | 13.0µs → 21.0µs | `read_file/1`                        | `prim_file`       |
| +100.0% | +0.01ms |  <0.1% → 0.1% |  8.0µs → 16.0µs | `read_file_nif/1`                    | `prim_file`       |

##### Standard library

| Change |   Delta |             % |            Time | Function                        | Location         |
| -----: | ------: | ------------: | --------------: | ------------------------------- | ---------------- |
|  +8.4% | +2.17ms |        100.0% | 25.8ms → 27.9ms | `apply/2`                       | `eflambe`        |
| +11.2% | +2.11ms | 73.3% → 75.1% | 18.9ms → 21.0ms | `reduce_range/5`                | `Enum`           |
|  +0.8% | +0.05ms | 26.7% → 24.8% |           6.9ms | `reduce/3`                      | `Enum`           |
|  +1.5% | +0.02ms |   4.5% → 4.2% |           1.2ms | `ensure_loaded/1`               | `code`           |
|  +7.3% | +0.02ms |   1.0% → 0.9% |   0.2ms → 0.3ms | `binary_to_integer/1`           | `erlang`         |
|  +4.4% | +0.01ms |          0.7% |           0.2ms | `ensure_prepare_loading/3`      | `code`           |
|    new | +0.01ms |  0.0% → <0.1% |     0ms → 8.0µs | `stop_trace/1`                  | `eflambe_server` |
| +12.2% | +0.01ms |          0.2% |  49.0µs → 0.1ms | `binary_to_integer/2`           | `erts_internal`  |
|    new | +0.01ms |  0.0% → <0.1% |     0ms → 6.0µs | `trace/3`                       | `erlang`         |
| +12.5% | +0.01ms |          0.2% | 40.0µs → 45.0µs | `from_list/1`                   | `maps`           |
|  +8.0% | +4.00µs |          0.2% |           0.1ms | `into_map/2`                    | `Enum`           |
| +22.2% | +4.00µs |          0.1% | 18.0µs → 22.0µs | `iolist_to_binary/1`            | `erlang`         |
|  +0.3% | +3.00µs |   3.5% → 3.3% |           0.9ms | `prepare_loading_1/2`           | `erlang`         |
|    new | +3.00µs |  0.0% → <0.1% |     0ms → 3.0µs | `ensure_tracer_module_loaded/2` | `erlang`         |
|    new | +1.00µs |  0.0% → <0.1% |     0ms → 1.0µs | `stop_erlang_trace/1`           | `eflambe_server` |
|    new | +1.00µs |  0.0% → <0.1% |     0ms → 1.0µs | `keyfind/3`                     | `lists`          |
|    new | +1.00µs |  0.0% → <0.1% |     0ms → 1.0µs | `trace/3`                       | `erts_internal`  |

##### Idle

| Change |   Delta |           % |  Time | Function | Location    |
| -----: | ------: | ----------: | ----: | -------- | ----------- |
|  +0.9% | +0.01ms | 2.2% → 2.1% | 0.6ms | `sleep`  | `<unknown>` |

#### Improvements

Functions with the largest decrease in total wall time spent in the function and all its callees.

| Change |   Delta |             % |          Time | Function              | Location       |
| -----: | ------: | ------------: | ------------: | --------------------- | -------------- |
|    ~0% | -4.00µs | 49.8% → 45.9% |        12.8ms | `encode/2`            | `Jason.Encode` |
|    ~0% | -4.00µs | 49.5% → 45.7% |        12.8ms | `map_naive/3`         | `Jason.Encode` |
|    ~0% | -4.00µs | 48.7% → 44.9% |        12.5ms | `map_naive_loop/3`    | `Jason.Encode` |
|  -0.3% | -2.00µs |   2.8% → 2.6% |         0.7ms | `value/3`             | `Jason.Encode` |
|  -0.3% | -2.00µs |   2.3% → 2.1% |         0.6ms | `escape_json/4`       | `Jason.Encode` |
| -33.3% | -1.00µs |         <0.1% | 3.0µs → 2.0µs | `demonitor/2`         | `erlang`       |
| -50.0% | -1.00µs |         <0.1% | 2.0µs → 1.0µs | `function_exported/3` | `erlang`       |

##### Ours

| Change |   Delta |             % |   Time | Function           | Location       |
| -----: | ------: | ------------: | -----: | ------------------ | -------------- |
|    ~0% | -4.00µs | 49.8% → 45.9% | 12.8ms | `encode/2`         | `Jason.Encode` |
|    ~0% | -4.00µs | 49.5% → 45.7% | 12.8ms | `map_naive/3`      | `Jason.Encode` |
|    ~0% | -4.00µs | 48.7% → 44.9% | 12.5ms | `map_naive_loop/3` | `Jason.Encode` |
|  -0.3% | -2.00µs |   2.8% → 2.6% |  0.7ms | `value/3`          | `Jason.Encode` |
|  -0.3% | -2.00µs |   2.3% → 2.1% |  0.6ms | `escape_json/4`    | `Jason.Encode` |

##### Standard library

| Change |   Delta |     % |          Time | Function              | Location |
| -----: | ------: | ----: | ------------: | --------------------- | -------- |
| -33.3% | -1.00µs | <0.1% | 3.0µs → 2.0µs | `demonitor/2`         | `erlang` |
| -50.0% | -1.00µs | <0.1% | 2.0µs → 1.0µs | `function_exported/3` | `erlang` |

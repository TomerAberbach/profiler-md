# Wall time profile diff

Took 28.0ms → 27.9ms (-0.06ms, -0.2%).

| Category         | Change |   Delta |             % |            Time |
| ---------------- | -----: | ------: | ------------: | --------------: |
| Ours             |  +0.1% | +0.03ms | 92.1% → 92.4% | 25.7ms → 25.8ms |
| Standard library |  -2.2% | -0.04ms |   5.6% → 5.5% |   1.6ms → 1.5ms |
| Idle             |  -8.9% | -0.06ms |   2.3% → 2.1% |   0.7ms → 0.6ms |

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in wall time spent within the function body, excluding callees. Categories account for at least 1.0% of self time on the base or the current side.

##### Ours

| Change |   Delta |           % |        Time | Function        | Location        |
| -----: | ------: | ----------: | ----------: | --------------- | --------------- |
|    new | +0.53ms | 0.0% → 1.9% | 0ms → 0.5ms | `escape_json/1` | `Jason.Encode`  |
|  +6.7% | +0.03ms | 1.6% → 1.7% |       0.5ms | `map_naive/3`   | `Jason.Encode`  |
|  +0.3% | +1.00µs |        1.4% |       0.4ms | `key/6`         | `Jason.Decoder` |

#### Improvements

Functions with the largest decrease in wall time spent within the function body, excluding callees. Categories account for at least 1.0% of self time on the base or the current side.

|  Change |   Delta |             % |          Time | Function              | Location        |
| ------: | ------: | ------------: | ------------: | --------------------- | --------------- |
| removed | -0.53ms |   1.9% → 0.0% |   0.5ms → 0ms | `escape_json/3`       | `Jason.Encode`  |
|   -8.9% | -0.06ms |   2.3% → 2.1% | 0.7ms → 0.6ms | `sleep`               | `<unknown>`     |
|   -3.7% | -0.03ms |   3.2% → 3.1% |         0.9ms | `prepare_loading_1/2` | `erlang`        |
|  -40.0% | -2.00µs |         <0.1% | 5.0µs → 3.0µs | `demonitor/2`         | `erlang`        |
|   -0.1% | -1.00µs |   3.8% → 3.9% |         1.1ms | `map_naive_loop/3`    | `Jason.Encode`  |
|     ~0% | -1.00µs | 30.3% → 30.4% |         8.5ms | `string/6`            | `Jason.Decoder` |

##### Ours

|  Change |   Delta |             % |        Time | Function           | Location        |
| ------: | ------: | ------------: | ----------: | ------------------ | --------------- |
| removed | -0.53ms |   1.9% → 0.0% | 0.5ms → 0ms | `escape_json/3`    | `Jason.Encode`  |
|   -0.1% | -1.00µs |   3.8% → 3.9% |       1.1ms | `map_naive_loop/3` | `Jason.Encode`  |
|     ~0% | -1.00µs | 30.3% → 30.4% |       8.5ms | `string/6`         | `Jason.Decoder` |

##### Standard library

| Change |   Delta |           % |          Time | Function              | Location |
| -----: | ------: | ----------: | ------------: | --------------------- | -------- |
|  -3.7% | -0.03ms | 3.2% → 3.1% |         0.9ms | `prepare_loading_1/2` | `erlang` |
| -40.0% | -2.00µs |       <0.1% | 5.0µs → 3.0µs | `demonitor/2`         | `erlang` |

##### Idle

| Change |   Delta |           % |          Time | Function | Location    |
| -----: | ------: | ----------: | ------------: | -------- | ----------- |
|  -8.9% | -0.06ms | 2.3% → 2.1% | 0.7ms → 0.6ms | `sleep`  | `<unknown>` |

#### Callers

Callers with the largest change in contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `escape_json/1` (`Jason.Encode`)

| Change |   Delta |            % |         Time | Caller             | Location       |
| -----: | ------: | -----------: | -----------: | ------------------ | -------------- |
|    new | +0.34ms | 0.0% → 65.7% |  0ms → 0.3ms | `map_naive_loop/3` | `Jason.Encode` |
|    new | +0.14ms | 0.0% → 27.6% |  0ms → 0.1ms | `encode_string/2`  | `Jason.Encode` |
|    new | +0.04ms |  0.0% → 6.7% | 0ms → 35.0µs | `map_naive/3`      | `Jason.Encode` |

##### `map_naive/3` (`Jason.Encode`)

| Change |   Delta |             % |  Time | Caller             | Location       |
| -----: | ------: | ------------: | ----: | ------------------ | -------------- |
| +10.7% | +0.03ms | 62.2% → 64.6% | 0.3ms | `map_naive_loop/3` | `Jason.Encode` |

##### `key/6` (`Jason.Decoder`)

| Change |   Delta |      % |  Time | Caller    | Location        |
| -----: | ------: | -----: | ----: | --------- | --------------- |
|  +0.3% | +1.00µs | 100.0% | 0.4ms | `parse/2` | `Jason.Decoder` |

##### `escape_json/3` (`Jason.Encode`)

|  Change |   Delta |            % |         Time | Caller             | Location       |
| ------: | ------: | -----------: | -----------: | ------------------ | -------------- |
| removed | -0.34ms | 65.7% → 0.0% |  0.3ms → 0ms | `map_naive_loop/3` | `Jason.Encode` |
| removed | -0.14ms | 27.6% → 0.0% |  0.1ms → 0ms | `encode_string/2`  | `Jason.Encode` |
| removed | -0.04ms |  6.7% → 0.0% | 35.0µs → 0ms | `map_naive/3`      | `Jason.Encode` |

##### `sleep` (`<unknown>`)

|  Change |   Delta |             % |           Time | Caller                | Location        |
| ------: | ------: | ------------: | -------------: | --------------------- | --------------- |
|  -85.4% | -0.04ms |   6.3% → 1.0% | 41.0µs → 6.0µs | `sleep`               | `<unknown>`     |
| removed | -0.03ms |   4.7% → 0.0% |   31.0µs → 0ms | `map_naive_loop/3`    | `Jason.Encode`  |
|   +1.1% | +0.01ms | 86.2% → 95.6% |          0.6ms | `call/1`              | `code_server`   |
|  +50.0% | +2.00µs |   0.6% → 1.0% |  4.0µs → 6.0µs | `escape_json_chunk/5` | `Jason.Encode`  |
| removed | -2.00µs |   0.3% → 0.0% |    2.0µs → 0ms | `value/5`             | `Jason.Decoder` |

##### `prepare_loading_1/2` (`erlang`)

| Change |   Delta |      % |  Time | Caller            | Location |
| -----: | ------: | -----: | ----: | ----------------- | -------- |
|  -3.7% | -0.03ms | 100.0% | 0.9ms | `ensure_loaded/1` | `code`   |

##### `demonitor/2` (`erlang`)

| Change |   Delta |      % |          Time | Caller   | Location      |
| -----: | ------: | -----: | ------------: | -------- | ------------- |
| -40.0% | -2.00µs | 100.0% | 5.0µs → 3.0µs | `call/1` | `code_server` |

##### `map_naive_loop/3` (`Jason.Encode`)

| Change |   Delta |      % |  Time | Caller        | Location       |
| -----: | ------: | -----: | ----: | ------------- | -------------- |
|  -0.1% | -1.00µs | 100.0% | 1.1ms | `map_naive/3` | `Jason.Encode` |

##### `string/6` (`Jason.Decoder`)

| Change |   Delta |      % |  Time | Caller    | Location        |
| -----: | ------: | -----: | ----: | --------- | --------------- |
|    ~0% | -1.00µs | 100.0% | 8.5ms | `parse/2` | `Jason.Decoder` |

### Total time

#### Regressions

Functions with the largest increase in wall time spent within the function and its callees. Categories account for at least 1.0% of self time on the base or the current side.

##### Ours

| Change |   Delta |             % |        Time | Function                             | Location        |
| -----: | ------: | ------------: | ----------: | ------------------------------------ | --------------- |
|    new | +0.53ms |   0.0% → 1.9% | 0ms → 0.5ms | `escape_json/1`                      | `Jason.Encode`  |
|  +0.7% | +4.00µs |          2.1% |       0.6ms | `call/1`                             | `code_server`   |
|    ~0% | +2.00µs | 45.9% → 46.0% |      12.8ms | `encode/2`                           | `Jason.Encode`  |
|  +0.3% | +2.00µs |          2.6% |       0.7ms | `value/3`                            | `Jason.Encode`  |
|    ~0% | +2.00µs | 45.6% → 45.8% |      12.8ms | `map_naive/3`                        | `Jason.Encode`  |
|    ~0% | +2.00µs |         30.5% |       8.5ms | `escape_json_chunk/5`                | `Jason.Encode`  |
|    ~0% | +2.00µs | 44.9% → 45.0% |      12.5ms | `map_naive_loop/3`                   | `Jason.Encode`  |
|  +0.4% | +2.00µs |   1.8% → 1.9% |       0.5ms | `-string_decode_function/1-fun-0-/1` | `Jason.Decoder` |
|    ~0% | +1.00µs | 32.2% → 32.3% |       9.0ms | `string/6`                           | `Jason.Decoder` |
|  +0.3% | +1.00µs |          1.4% |       0.4ms | `key/6`                              | `Jason.Decoder` |

#### Improvements

Functions with the largest decrease in wall time spent within the function and its callees. Categories account for at least 1.0% of self time on the base or the current side.

|  Change |   Delta |             % |            Time | Function                   | Location          |
| ------: | ------: | ------------: | --------------: | -------------------------- | ----------------- |
| removed | -0.53ms |   1.9% → 0.0% |     0.5ms → 0ms | `escape_json/3`            | `Jason.Encode`    |
|   -6.1% | -0.07ms |   4.4% → 4.2% |           1.2ms | `ensure_loaded/1`          | `code`            |
|   -0.9% | -0.06ms | 24.9% → 24.7% |   7.0ms → 6.9ms | `reduce/3`                 | `Enum`            |
|   -0.2% | -0.06ms |        100.0% | 28.0ms → 27.9ms | `apply/2`                  | `eflambe`         |
|   -0.2% | -0.06ms |        100.0% | 28.0ms → 27.9ms | `<0.94.0>`                 | `<unknown>`       |
|   -3.7% | -0.06ms |   6.1% → 5.9% |           1.7ms | `undefined_function/3`     | `error_handler`   |
|   -0.4% | -0.06ms | 52.3% → 52.2% |          14.6ms | `-run/1-fun-0-/2`          | `Profile`         |
|   -0.4% | -0.06ms | 52.2% → 52.1% | 14.6ms → 14.5ms | `encode!/2`                | `Jason`           |
|   -8.9% | -0.06ms |   2.3% → 2.1% |   0.7ms → 0.6ms | `sleep`                    | `<unknown>`       |
|  -15.8% | -0.04ms |   0.8% → 0.7% |           0.2ms | `ensure_prepare_loading/3` | `code`            |
|  -16.1% | -0.04ms |   0.8% → 0.7% |           0.2ms | `read_file/1`              | `erl_prim_loader` |
|  -77.8% | -0.04ms |  0.2% → <0.1% | 45.0µs → 10.0µs | `read_file/1`              | `prim_file`       |
|  -87.5% | -0.04ms |  0.1% → <0.1% |  40.0µs → 5.0µs | `read_file_nif/1`          | `prim_file`       |
|   -3.7% | -0.03ms |   3.2% → 3.1% |           0.9ms | `prepare_loading_1/2`      | `erlang`          |
|  -40.0% | -2.00µs |         <0.1% |   5.0µs → 3.0µs | `demonitor/2`              | `erlang`          |
|     ~0% | -2.00µs | 47.6% → 47.7% |          13.3ms | `decode!/2`                | `Jason`           |
|     ~0% | -2.00µs | 47.4% → 47.5% |          13.2ms | `parse/2`                  | `Jason.Decoder`   |
|   -0.5% | -2.00µs |          1.5% |           0.4ms | `value/5`                  | `Jason.Decoder`   |
|   -0.2% | -2.00µs |          4.3% |           1.2ms | `object/6`                 | `Jason.Decoder`   |

##### Ours

|  Change |   Delta |             % |            Time | Function               | Location          |
| ------: | ------: | ------------: | --------------: | ---------------------- | ----------------- |
| removed | -0.53ms |   1.9% → 0.0% |     0.5ms → 0ms | `escape_json/3`        | `Jason.Encode`    |
|   -3.7% | -0.06ms |   6.1% → 5.9% |           1.7ms | `undefined_function/3` | `error_handler`   |
|   -0.4% | -0.06ms | 52.3% → 52.2% |          14.6ms | `-run/1-fun-0-/2`      | `Profile`         |
|   -0.4% | -0.06ms | 52.2% → 52.1% | 14.6ms → 14.5ms | `encode!/2`            | `Jason`           |
|  -16.1% | -0.04ms |   0.8% → 0.7% |           0.2ms | `read_file/1`          | `erl_prim_loader` |
|  -77.8% | -0.04ms |  0.2% → <0.1% | 45.0µs → 10.0µs | `read_file/1`          | `prim_file`       |
|  -87.5% | -0.04ms |  0.1% → <0.1% |  40.0µs → 5.0µs | `read_file_nif/1`      | `prim_file`       |
|     ~0% | -2.00µs | 47.6% → 47.7% |          13.3ms | `decode!/2`            | `Jason`           |
|     ~0% | -2.00µs | 47.4% → 47.5% |          13.2ms | `parse/2`              | `Jason.Decoder`   |
|   -0.5% | -2.00µs |          1.5% |           0.4ms | `value/5`              | `Jason.Decoder`   |
|   -0.2% | -2.00µs |          4.3% |           1.2ms | `object/6`             | `Jason.Decoder`   |

##### Standard library

| Change |   Delta |             % |            Time | Function                   | Location  |
| -----: | ------: | ------------: | --------------: | -------------------------- | --------- |
|  -6.1% | -0.07ms |   4.4% → 4.2% |           1.2ms | `ensure_loaded/1`          | `code`    |
|  -0.9% | -0.06ms | 24.9% → 24.7% |   7.0ms → 6.9ms | `reduce/3`                 | `Enum`    |
|  -0.2% | -0.06ms |        100.0% | 28.0ms → 27.9ms | `apply/2`                  | `eflambe` |
| -15.8% | -0.04ms |   0.8% → 0.7% |           0.2ms | `ensure_prepare_loading/3` | `code`    |
|  -3.7% | -0.03ms |   3.2% → 3.1% |           0.9ms | `prepare_loading_1/2`      | `erlang`  |
| -40.0% | -2.00µs |         <0.1% |   5.0µs → 3.0µs | `demonitor/2`              | `erlang`  |

##### Idle

| Change |   Delta |           % |          Time | Function | Location    |
| -----: | ------: | ----------: | ------------: | -------- | ----------- |
|  -8.9% | -0.06ms | 2.3% → 2.1% | 0.7ms → 0.6ms | `sleep`  | `<unknown>` |

#### Callees

Callees with the largest change in contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `call/1` (`code_server`)

| Change |   Delta |             % |          Time | Callee        | Location    |
| -----: | ------: | ------------: | ------------: | ------------- | ----------- |
|  +1.1% | +0.01ms | 97.7% → 98.1% |         0.6ms | `sleep`       | `<unknown>` |
| -40.0% | -2.00µs |   0.9% → 0.5% | 5.0µs → 3.0µs | `demonitor/2` | `erlang`    |

##### `encode/2` (`Jason.Encode`)

| Change |   Delta |     % |   Time | Callee        | Location       |
| -----: | ------: | ----: | -----: | ------------- | -------------- |
|    ~0% | +2.00µs | 99.5% | 12.8ms | `map_naive/3` | `Jason.Encode` |

##### `value/3` (`Jason.Encode`)

| Change |   Delta |           % |        Time | Callee  | Location    |
| -----: | ------: | ----------: | ----------: | ------- | ----------- |
|    new | +2.00µs | 0.0% → 0.3% | 0ms → 2.0µs | `sleep` | `<unknown>` |

##### `map_naive/3` (`Jason.Encode`)

|  Change |   Delta |           % |         Time | Callee             | Location       |
| ------: | ------: | ----------: | -----------: | ------------------ | -------------- |
| removed | -0.04ms | 0.3% → 0.0% | 35.0µs → 0ms | `escape_json/3`    | `Jason.Encode` |
|     new | +0.04ms | 0.0% → 0.3% | 0ms → 35.0µs | `escape_json/1`    | `Jason.Encode` |
|     ~0% | +2.00µs |       98.3% |       12.5ms | `map_naive_loop/3` | `Jason.Encode` |

##### `escape_json_chunk/5` (`Jason.Encode`)

| Change |   Delta |            % |          Time | Callee  | Location    |
| -----: | ------: | -----------: | ------------: | ------- | ----------- |
| +50.0% | +2.00µs | <0.1% → 0.1% | 4.0µs → 6.0µs | `sleep` | `<unknown>` |

##### `map_naive_loop/3` (`Jason.Encode`)

|  Change |   Delta |           % |         Time | Callee                | Location       |
| ------: | ------: | ----------: | -----------: | --------------------- | -------------- |
| removed | -0.34ms | 2.8% → 0.0% |  0.3ms → 0ms | `escape_json/3`       | `Jason.Encode` |
|     new | +0.34ms | 0.0% → 2.8% |  0ms → 0.3ms | `escape_json/1`       | `Jason.Encode` |
| removed | -0.03ms | 0.2% → 0.0% | 31.0µs → 0ms | `sleep`               | `<unknown>`    |
|     ~0% | +2.00µs |       35.1% |        4.4ms | `escape_json_chunk/5` | `Jason.Encode` |
|   +0.4% | +2.00µs |        4.5% |        0.6ms | `value/3`             | `Jason.Encode` |

##### `-string_decode_function/1-fun-0-/1` (`Jason.Decoder`)

| Change |   Delta |           % |        Time | Callee  | Location    |
| -----: | ------: | ----------: | ----------: | ------- | ----------- |
|    new | +2.00µs | 0.0% → 0.4% | 0ms → 2.0µs | `sleep` | `<unknown>` |

##### `string/6` (`Jason.Decoder`)

| Change |   Delta |    % |  Time | Callee                               | Location        |
| -----: | ------: | ---: | ----: | ------------------------------------ | --------------- |
|  +0.4% | +2.00µs | 5.7% | 0.5ms | `-string_decode_function/1-fun-0-/1` | `Jason.Decoder` |

##### `ensure_loaded/1` (`code`)

| Change |   Delta |             % |  Time | Callee                     | Location      |
| -----: | ------: | ------------: | ----: | -------------------------- | ------------- |
| -15.8% | -0.04ms | 18.0% → 16.1% | 0.2ms | `ensure_prepare_loading/3` | `code`        |
|  -3.7% | -0.03ms | 72.7% → 74.6% | 0.9ms | `prepare_loading_1/2`      | `erlang`      |
|  -6.8% | -0.01ms |          8.3% | 0.1ms | `call/1`                   | `code_server` |

##### `reduce/3` (`Enum`)

| Change |   Delta |             % |          Time | Callee            | Location  |
| -----: | ------: | ------------: | ------------: | ----------------- | --------- |
|  -1.5% | -0.06ms | 61.7% → 61.4% | 4.3ms → 4.2ms | `-run/1-fun-0-/2` | `Profile` |

##### `apply/2` (`eflambe`)

| Change |   Delta |             % |          Time | Callee     | Location |
| -----: | ------: | ------------: | ------------: | ---------- | -------- |
|  -0.9% | -0.06ms | 24.9% → 24.7% | 7.0ms → 6.9ms | `reduce/3` | `Enum`   |

##### `<0.94.0>` (`<unknown>`)

| Change |   Delta |      % |            Time | Callee    | Location  |
| -----: | ------: | -----: | --------------: | --------- | --------- |
|  -0.2% | -0.06ms | 100.0% | 28.0ms → 27.9ms | `apply/2` | `eflambe` |

##### `undefined_function/3` (`error_handler`)

| Change |   Delta |             % |  Time | Callee            | Location      |
| -----: | ------: | ------------: | ----: | ----------------- | ------------- |
|  -6.1% | -0.07ms | 72.0% → 70.2% | 1.2ms | `ensure_loaded/1` | `code`        |
|  +2.3% | +0.01ms | 27.6% → 29.3% | 0.5ms | `call/1`          | `code_server` |

##### `-run/1-fun-0-/2` (`Profile`)

| Change |   Delta |     % |            Time | Callee      | Location |
| -----: | ------: | ----: | --------------: | ----------- | -------- |
|  -0.4% | -0.06ms | 99.9% | 14.6ms → 14.5ms | `encode!/2` | `Jason`  |

##### `encode!/2` (`Jason`)

| Change |   Delta |             % |   Time | Callee                 | Location        |
| -----: | ------: | ------------: | -----: | ---------------------- | --------------- |
|  -3.7% | -0.06ms | 11.8% → 11.4% |  1.7ms | `undefined_function/3` | `error_handler` |
|    ~0% | +2.00µs | 87.8% → 88.2% | 12.8ms | `encode/2`             | `Jason.Encode`  |

##### `sleep` (`<unknown>`)

| Change |   Delta |           % |           Time | Callee  | Location    |
| -----: | ------: | ----------: | -------------: | ------- | ----------- |
| -85.4% | -0.04ms | 6.3% → 1.0% | 41.0µs → 6.0µs | `sleep` | `<unknown>` |

##### `ensure_prepare_loading/3` (`code`)

| Change |   Delta |             % |  Time | Callee        | Location          |
| -----: | ------: | ------------: | ----: | ------------- | ----------------- |
| -16.1% | -0.04ms | 97.7% → 97.3% | 0.2ms | `read_file/1` | `erl_prim_loader` |

##### `read_file/1` (`erl_prim_loader`)

| Change |   Delta |            % |            Time | Callee        | Location    |
| -----: | ------: | -----------: | --------------: | ------------- | ----------- |
| -77.8% | -0.04ms | 20.7% → 5.5% | 45.0µs → 10.0µs | `read_file/1` | `prim_file` |

##### `read_file/1` (`prim_file`)

| Change |   Delta |             % |           Time | Callee            | Location    |
| -----: | ------: | ------------: | -------------: | ----------------- | ----------- |
| -87.5% | -0.04ms | 88.9% → 50.0% | 40.0µs → 5.0µs | `read_file_nif/1` | `prim_file` |

##### `read_file_nif/1` (`prim_file`)

| Change |   Delta |             % |           Time | Callee  | Location    |
| -----: | ------: | ------------: | -------------: | ------- | ----------- |
| -89.7% | -0.04ms | 97.5% → 80.0% | 39.0µs → 4.0µs | `sleep` | `<unknown>` |

##### `decode!/2` (`Jason`)

| Change |   Delta |     % |   Time | Callee    | Location        |
| -----: | ------: | ----: | -----: | --------- | --------------- |
|    ~0% | -2.00µs | 99.5% | 13.2ms | `parse/2` | `Jason.Decoder` |

##### `parse/2` (`Jason.Decoder`)

| Change |   Delta |     % |  Time | Callee     | Location        |
| -----: | ------: | ----: | ----: | ---------- | --------------- |
|  -0.5% | -2.00µs |  3.2% | 0.4ms | `value/5`  | `Jason.Decoder` |
|  -0.2% | -2.00µs |  9.1% | 1.2ms | `object/6` | `Jason.Decoder` |
|    ~0% | +1.00µs | 67.9% | 9.0ms | `string/6` | `Jason.Decoder` |
|  +0.3% | +1.00µs |  2.9% | 0.4ms | `key/6`    | `Jason.Decoder` |

##### `value/5` (`Jason.Decoder`)

|  Change |   Delta |           % |        Time | Callee  | Location    |
| ------: | ------: | ----------: | ----------: | ------- | ----------- |
| removed | -2.00µs | 0.5% → 0.0% | 2.0µs → 0ms | `sleep` | `<unknown>` |

##### `object/6` (`Jason.Decoder`)

|  Change |   Delta |           % |        Time | Callee  | Location    |
| ------: | ------: | ----------: | ----------: | ------- | ----------- |
| removed | -2.00µs | 0.2% → 0.0% | 2.0µs → 0ms | `sleep` | `<unknown>` |

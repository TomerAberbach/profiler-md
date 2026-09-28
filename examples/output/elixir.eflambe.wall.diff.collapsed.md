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

Functions with the largest increase in wall time spent directly in the function body, excluding callees.

##### Ours

| Change |   Delta |           % |        Time | Function        | Location        |
| -----: | ------: | ----------: | ----------: | --------------- | --------------- |
|    new | +0.53ms | 0.0% → 1.9% | 0ms → 0.5ms | `escape_json/1` | `Jason.Encode`  |
|  +6.7% | +0.03ms | 1.6% → 1.7% |       0.5ms | `map_naive/3`   | `Jason.Encode`  |
|  +0.3% | +1.00µs |        1.4% |       0.4ms | `key/6`         | `Jason.Decoder` |

#### Improvements

Functions with the largest decrease in wall time spent directly in the function body, excluding callees.

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

### Total time

#### Regressions

Functions with the largest increase in total wall time spent in the function and all its callees.

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

Functions with the largest decrease in total wall time spent in the function and all its callees.

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

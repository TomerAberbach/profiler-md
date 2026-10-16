# CPU profile diff

Took 3.84s → 3.81s (-38.00ms, -1.0%) over 3,849 samples → 3,811 samples (1.0ms per sample).

| Category | Change |    Delta |             % |          Time |       Samples |
| -------- | -----: | -------: | ------------: | ------------: | ------------: |
| Ours     |  +0.7% | +15.00ms | 59.1% → 60.1% | 2.27s → 2.29s | 2,275 → 2,290 |
| Native   |  -3.4% | -53.00ms | 40.9% → 39.9% | 1.57s → 1.52s | 1,574 → 1,521 |

Paths starting with `./` or `../` are relative to `/src/json-fortran/src/`.

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time spent within the function body, excluding callees. Categories account for at least 1.0% of self time on the base or the current side.

|  Change |    Delta |             % |            Time |       Samples | Function                                      | Location                                          |
| ------: | -------: | ------------: | --------------: | ------------: | --------------------------------------------- | ------------------------------------------------- |
|  +60.6% | +20.00ms |   0.9% → 1.4% | 33.0ms → 53.0ms |       33 → 53 | `0x1189ec`                                    | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|   +0.7% | +13.00ms | 51.3% → 52.2% |   1.97s → 1.98s | 1,975 → 1,988 | `__json_value_module_MOD_pop_char.part.0`     | `./json_value_module.F90`                         |
|  +24.4% | +11.00ms |   1.2% → 1.5% | 45.0ms → 56.0ms |       45 → 56 | `0x929c4`                                     | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  +53.3% |  +8.00ms |   0.4% → 0.6% | 15.0ms → 23.0ms |       15 → 23 | `__json_value_module_MOD_parse_object`        | `./json_value_module.F90`                         |
|  +61.5% |  +8.00ms |   0.3% → 0.6% | 13.0ms → 21.0ms |       13 → 21 | `__json_value_module_MOD_destroy_json_data`   | `./json_value_module.F90`                         |
| +140.0% |  +7.00ms |   0.1% → 0.3% |  5.0ms → 12.0ms |        5 → 12 | `0x1186dc`                                    | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| +350.0% |  +7.00ms |   0.1% → 0.2% |   2.0ms → 9.0ms |         2 → 9 | `0x118730`                                    | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  +50.0% |  +7.00ms |   0.4% → 0.6% | 14.0ms → 21.0ms |       14 → 21 | `0x9123c`                                     | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  +10.0% |  +6.00ms |   1.6% → 1.7% | 60.0ms → 66.0ms |       60 → 66 | `0x11899c`                                    | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| +200.0% |  +6.00ms |   0.1% → 0.2% |   3.0ms → 9.0ms |         3 → 9 | `0x8faa0`                                     | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  +10.6% |  +5.00ms |   1.2% → 1.4% | 47.0ms → 52.0ms |       47 → 52 | `0x8faf4`                                     | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  +25.0% |  +5.00ms |   0.5% → 0.7% | 20.0ms → 25.0ms |       20 → 25 | `__json_string_utilities_MOD_unescape_string` | `./json_string_utilities.F90`                     |
| +500.0% |  +5.00ms |  <0.1% → 0.2% |   1.0ms → 6.0ms |         1 → 6 | `0x91544`                                     | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
| +250.0% |  +5.00ms |   0.1% → 0.2% |   2.0ms → 7.0ms |         2 → 7 | `0x118708`                                    | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| +400.0% |  +4.00ms |  <0.1% → 0.1% |   1.0ms → 5.0ms |         1 → 5 | `0x8fbc8`                                     | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
| +133.3% |  +4.00ms |   0.1% → 0.2% |   3.0ms → 7.0ms |         3 → 7 | `0xf8ea8`                                     | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| +100.0% |  +4.00ms |   0.1% → 0.2% |   4.0ms → 8.0ms |         4 → 8 | `0x10a040`                                    | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| +200.0% |  +4.00ms |   0.1% → 0.2% |   2.0ms → 6.0ms |         2 → 6 | `0x8fae0`                                     | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
| +133.3% |  +4.00ms |   0.1% → 0.2% |   3.0ms → 7.0ms |         3 → 7 | `0x8e98c`                                     | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
| +400.0% |  +4.00ms |  <0.1% → 0.1% |   1.0ms → 5.0ms |         1 → 5 | `0x105f60`                                    | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### Ours

| Change |    Delta |             % |            Time |       Samples | Function                                               | Location                      |
| -----: | -------: | ------------: | --------------: | ------------: | ------------------------------------------------------ | ----------------------------- |
|  +0.7% | +13.00ms | 51.3% → 52.2% |   1.97s → 1.98s | 1,975 → 1,988 | `__json_value_module_MOD_pop_char.part.0`              | `./json_value_module.F90`     |
| +53.3% |  +8.00ms |   0.4% → 0.6% | 15.0ms → 23.0ms |       15 → 23 | `__json_value_module_MOD_parse_object`                 | `./json_value_module.F90`     |
| +61.5% |  +8.00ms |   0.3% → 0.6% | 13.0ms → 21.0ms |       13 → 21 | `__json_value_module_MOD_destroy_json_data`            | `./json_value_module.F90`     |
| +25.0% |  +5.00ms |   0.5% → 0.7% | 20.0ms → 25.0ms |       20 → 25 | `__json_string_utilities_MOD_unescape_string`          | `./json_string_utilities.F90` |
| +14.3% |  +2.00ms |          0.4% | 14.0ms → 16.0ms |       14 → 16 | `__json_value_module_MOD_json_value_destroy`           | `./json_value_module.F90`     |
| +66.7% |  +2.00ms |          0.1% |   3.0ms → 5.0ms |         3 → 5 | `__json_string_utilities_MOD_string_to_integer`        | `./json_string_utilities.F90` |
| +33.3% |  +2.00ms |          0.2% |   6.0ms → 8.0ms |         6 → 8 | `__json_value_module_MOD_json_value_add_member`        | `./json_value_module.F90`     |
|    new |  +1.00ms |  0.0% → <0.1% |     0ms → 1.0ms |         0 → 1 | `__json_value_module_MOD_string_to_int`                | `./json_value_module.F90`     |
| +50.0% |  +1.00ms |          0.1% |   2.0ms → 3.0ms |         2 → 3 | `__json_value_module_MOD_json_info`                    | `./json_value_module.F90`     |
|    new |  +1.00ms |  0.0% → <0.1% |     0ms → 1.0ms |         0 → 1 | `__json_value_module_MOD_json_value_get_child_by_name` | `./json_value_module.F90`     |

##### Native

|  Change |    Delta |            % |            Time | Samples | Function   | Location                                          |
| ------: | -------: | -----------: | --------------: | ------: | ---------- | ------------------------------------------------- |
|  +60.6% | +20.00ms |  0.9% → 1.4% | 33.0ms → 53.0ms | 33 → 53 | `0x1189ec` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  +24.4% | +11.00ms |  1.2% → 1.5% | 45.0ms → 56.0ms | 45 → 56 | `0x929c4`  | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
| +140.0% |  +7.00ms |  0.1% → 0.3% |  5.0ms → 12.0ms |  5 → 12 | `0x1186dc` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| +350.0% |  +7.00ms |  0.1% → 0.2% |   2.0ms → 9.0ms |   2 → 9 | `0x118730` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  +50.0% |  +7.00ms |  0.4% → 0.6% | 14.0ms → 21.0ms | 14 → 21 | `0x9123c`  | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  +10.0% |  +6.00ms |  1.6% → 1.7% | 60.0ms → 66.0ms | 60 → 66 | `0x11899c` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| +200.0% |  +6.00ms |  0.1% → 0.2% |   3.0ms → 9.0ms |   3 → 9 | `0x8faa0`  | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  +10.6% |  +5.00ms |  1.2% → 1.4% | 47.0ms → 52.0ms | 47 → 52 | `0x8faf4`  | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
| +500.0% |  +5.00ms | <0.1% → 0.2% |   1.0ms → 6.0ms |   1 → 6 | `0x91544`  | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
| +250.0% |  +5.00ms |  0.1% → 0.2% |   2.0ms → 7.0ms |   2 → 7 | `0x118708` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| +400.0% |  +4.00ms | <0.1% → 0.1% |   1.0ms → 5.0ms |   1 → 5 | `0x8fbc8`  | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
| +133.3% |  +4.00ms |  0.1% → 0.2% |   3.0ms → 7.0ms |   3 → 7 | `0xf8ea8`  | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| +100.0% |  +4.00ms |  0.1% → 0.2% |   4.0ms → 8.0ms |   4 → 8 | `0x10a040` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| +200.0% |  +4.00ms |  0.1% → 0.2% |   2.0ms → 6.0ms |   2 → 6 | `0x8fae0`  | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
| +133.3% |  +4.00ms |  0.1% → 0.2% |   3.0ms → 7.0ms |   3 → 7 | `0x8e98c`  | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
| +400.0% |  +4.00ms | <0.1% → 0.1% |   1.0ms → 5.0ms |   1 → 5 | `0x105f60` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|     new |  +4.00ms |  0.0% → 0.1% |     0ms → 4.0ms |   0 → 4 | `0xf8da4`  | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  +42.9% |  +3.00ms |  0.2% → 0.3% |  7.0ms → 10.0ms |  7 → 10 | `0x8e960`  | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
| +150.0% |  +3.00ms |         0.1% |   2.0ms → 5.0ms |   2 → 5 | `0x8eb74`  | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
|   +4.8% |  +3.00ms |  1.6% → 1.7% | 62.0ms → 65.0ms | 62 → 65 | `0x92240`  | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |

#### Improvements

Functions with the largest decrease in time spent within the function body, excluding callees. Categories account for at least 1.0% of self time on the base or the current side.

|  Change |    Delta |            % |              Time |   Samples | Function                               | Location                                          |
| ------: | -------: | -----------: | ----------------: | --------: | -------------------------------------- | ------------------------------------------------- |
|  -25.5% | -26.00ms |  2.7% → 2.0% |  102.0ms → 76.0ms |  102 → 76 | `_init`                                | `<unknown>`                                       |
|  -28.6% | -18.00ms |  1.6% → 1.2% |   63.0ms → 45.0ms |   63 → 45 | `0x118680`                             | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|   -9.7% | -16.00ms |  4.3% → 3.9% | 165.0ms → 149.0ms | 165 → 149 | `__json_value_module_MOD_parse_string` | `./json_value_module.F90`                         |
|  -76.2% | -16.00ms |  0.5% → 0.1% |    21.0ms → 5.0ms |    21 → 5 | `0x10c300`                             | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  -56.5% | -13.00ms |  0.6% → 0.3% |   23.0ms → 10.0ms |   23 → 10 | `0x1186f8`                             | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  -18.1% | -13.00ms |  1.9% → 1.5% |   72.0ms → 59.0ms |   72 → 59 | `0x118970`                             | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  -26.7% | -12.00ms |  1.2% → 0.9% |   45.0ms → 33.0ms |   45 → 33 | `0x118720`                             | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  -20.7% | -12.00ms |  1.5% → 1.2% |   58.0ms → 46.0ms |   58 → 46 | `0x118994`                             | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  -50.0% |  -9.00ms |  0.5% → 0.2% |    18.0ms → 9.0ms |    18 → 9 | `0x90dc0`                              | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  -80.0% |  -8.00ms |  0.3% → 0.1% |    10.0ms → 2.0ms |    10 → 2 | `0x8fbf0`                              | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  -63.6% |  -7.00ms |  0.3% → 0.1% |    11.0ms → 4.0ms |    11 → 4 | `0x92260`                              | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  -14.6% |  -6.00ms |  1.1% → 0.9% |   41.0ms → 35.0ms |   41 → 35 | `0xddb88`                              | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  -66.7% |  -6.00ms |  0.2% → 0.1% |     9.0ms → 3.0ms |     9 → 3 | `0xde3c8`                              | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  -10.9% |  -5.00ms |  1.2% → 1.1% |   46.0ms → 41.0ms |   46 → 41 | `0x92284`                              | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  -71.4% |  -5.00ms |  0.2% → 0.1% |     7.0ms → 2.0ms |     7 → 2 | `0x922bc`                              | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  -50.0% |  -5.00ms |  0.3% → 0.1% |    10.0ms → 5.0ms |    10 → 5 | `0x8eb04`                              | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  -66.7% |  -4.00ms |  0.2% → 0.1% |     6.0ms → 2.0ms |     6 → 2 | `0x9d168`                              | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
| removed |  -4.00ms |  0.1% → 0.0% |       4.0ms → 0ms |     4 → 0 | `0x10a918`                             | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  -57.1% |  -4.00ms |  0.2% → 0.1% |     7.0ms → 3.0ms |     7 → 3 | `0x915c8`                              | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  -80.0% |  -4.00ms | 0.1% → <0.1% |     5.0ms → 1.0ms |     5 → 1 | `0xf8f7c`                              | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### Ours

|  Change |    Delta |            % |              Time |   Samples | Function                                    | Location                  |
| ------: | -------: | -----------: | ----------------: | --------: | ------------------------------------------- | ------------------------- |
|   -9.7% | -16.00ms |  4.3% → 3.9% | 165.0ms → 149.0ms | 165 → 149 | `__json_value_module_MOD_parse_string`      | `./json_value_module.F90` |
| removed |  -2.00ms |  0.1% → 0.0% |       2.0ms → 0ms |     2 → 0 | `__json_value_module_MOD_parse_array`       | `./json_value_module.F90` |
|   -6.5% |  -2.00ms |         0.8% |   31.0ms → 29.0ms |   31 → 29 | `__json_value_module_MOD_parse_value`       | `./json_value_module.F90` |
|  -18.2% |  -2.00ms |  0.3% → 0.2% |    11.0ms → 9.0ms |    11 → 9 | `__json_value_module_MOD_parse_for_chars`   | `./json_value_module.F90` |
|  -50.0% |  -2.00ms |         0.1% |     4.0ms → 2.0ms |     4 → 2 | `__json_value_module_MOD_pop_char`          | `./json_value_module.F90` |
|  -50.0% |  -1.00ms | 0.1% → <0.1% |     2.0ms → 1.0ms |     2 → 1 | `__json_value_module_MOD_to_logical`        | `./json_value_module.F90` |
|  -25.0% |  -1.00ms |         0.1% |     4.0ms → 3.0ms |     4 → 3 | `__json_value_module_MOD_json_value_create` | `./json_value_module.F90` |
| removed |  -1.00ms | <0.1% → 0.0% |       1.0ms → 0ms |     1 → 0 | `__json_value_module_MOD_to_string`         | `./json_value_module.F90` |
| removed |  -1.00ms | <0.1% → 0.0% |       1.0ms → 0ms |     1 → 0 | `__json_value_module_MOD_to_integer`        | `./json_value_module.F90` |

##### Native

|  Change |    Delta |            % |             Time |  Samples | Function   | Location                                          |
| ------: | -------: | -----------: | ---------------: | -------: | ---------- | ------------------------------------------------- |
|  -25.5% | -26.00ms |  2.7% → 2.0% | 102.0ms → 76.0ms | 102 → 76 | `_init`    | `<unknown>`                                       |
|  -28.6% | -18.00ms |  1.6% → 1.2% |  63.0ms → 45.0ms |  63 → 45 | `0x118680` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  -76.2% | -16.00ms |  0.5% → 0.1% |   21.0ms → 5.0ms |   21 → 5 | `0x10c300` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  -56.5% | -13.00ms |  0.6% → 0.3% |  23.0ms → 10.0ms |  23 → 10 | `0x1186f8` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  -18.1% | -13.00ms |  1.9% → 1.5% |  72.0ms → 59.0ms |  72 → 59 | `0x118970` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  -26.7% | -12.00ms |  1.2% → 0.9% |  45.0ms → 33.0ms |  45 → 33 | `0x118720` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  -20.7% | -12.00ms |  1.5% → 1.2% |  58.0ms → 46.0ms |  58 → 46 | `0x118994` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  -50.0% |  -9.00ms |  0.5% → 0.2% |   18.0ms → 9.0ms |   18 → 9 | `0x90dc0`  | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  -80.0% |  -8.00ms |  0.3% → 0.1% |   10.0ms → 2.0ms |   10 → 2 | `0x8fbf0`  | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  -63.6% |  -7.00ms |  0.3% → 0.1% |   11.0ms → 4.0ms |   11 → 4 | `0x92260`  | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  -14.6% |  -6.00ms |  1.1% → 0.9% |  41.0ms → 35.0ms |  41 → 35 | `0xddb88`  | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  -66.7% |  -6.00ms |  0.2% → 0.1% |    9.0ms → 3.0ms |    9 → 3 | `0xde3c8`  | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  -10.9% |  -5.00ms |  1.2% → 1.1% |  46.0ms → 41.0ms |  46 → 41 | `0x92284`  | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  -71.4% |  -5.00ms |  0.2% → 0.1% |    7.0ms → 2.0ms |    7 → 2 | `0x922bc`  | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  -50.0% |  -5.00ms |  0.3% → 0.1% |   10.0ms → 5.0ms |   10 → 5 | `0x8eb04`  | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  -66.7% |  -4.00ms |  0.2% → 0.1% |    6.0ms → 2.0ms |    6 → 2 | `0x9d168`  | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
| removed |  -4.00ms |  0.1% → 0.0% |      4.0ms → 0ms |    4 → 0 | `0x10a918` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  -57.1% |  -4.00ms |  0.2% → 0.1% |    7.0ms → 3.0ms |    7 → 3 | `0x915c8`  | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  -80.0% |  -4.00ms | 0.1% → <0.1% |    5.0ms → 1.0ms |    5 → 1 | `0xf8f7c`  | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  -80.0% |  -4.00ms | 0.1% → <0.1% |    5.0ms → 1.0ms |    5 → 1 | `0x923e0`  | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |

#### Lines

Lines with the largest change in contribution to each function's self time.

##### `__json_value_module_MOD_pop_char.part.0` (`./json_value_module.F90`)

| Change |    Delta |             % |            Time |       Samples | Location                                |
| -----: | -------: | ------------: | --------------: | ------------: | --------------------------------------- |
| +23.3% | +17.00ms |   3.7% → 4.5% | 73.0ms → 90.0ms |       73 → 90 | `./json_value_module.F90:11395 → 11423` |
|  +1.0% | +14.00ms | 72.5% → 72.7% |   1.43s → 1.44s | 1,431 → 1,445 | `./json_value_module.F90:11447 → 11475` |
| -19.1% | -13.00ms |   3.4% → 2.8% | 68.0ms → 55.0ms |       68 → 55 | `./json_value_module.F90:11318 → 11346` |
| -24.5% | -12.00ms |   2.5% → 1.9% | 49.0ms → 37.0ms |       49 → 37 | `./json_value_module.F90:11430 → 11458` |
| +15.2% | +10.00ms |   3.3% → 3.8% | 66.0ms → 76.0ms |       66 → 76 | `./json_value_module.F90:11452 → 11480` |

##### `__json_value_module_MOD_parse_object` (`./json_value_module.F90`)

|  Change |   Delta |            % |          Time | Samples | Location                                |
| ------: | ------: | -----------: | ------------: | ------: | --------------------------------------- |
|     new | +5.00ms | 0.0% → 21.7% |   0ms → 5.0ms |   0 → 5 | `./json_value_module.F90:10985`         |
|     new | +4.00ms | 0.0% → 17.4% |   0ms → 4.0ms |   0 → 4 | `./json_value_module.F90:10920`         |
| removed | -3.00ms | 20.0% → 0.0% |   3.0ms → 0ms |   3 → 0 | `./json_value_module.F90:10980`         |
| removed | -2.00ms | 13.3% → 0.0% |   2.0ms → 0ms |   2 → 0 | `./json_value_module.F90:10899`         |
|  -66.7% | -2.00ms | 20.0% → 4.3% | 3.0ms → 1.0ms |   3 → 1 | `./json_value_module.F90:10902 → 10909` |

##### `__json_value_module_MOD_destroy_json_data` (`./json_value_module.F90`)

|  Change |   Delta |             % |          Time | Samples | Location                              |
| ------: | ------: | ------------: | ------------: | ------: | ------------------------------------- |
| +166.7% | +5.00ms | 23.1% → 38.1% | 3.0ms → 8.0ms |   3 → 8 | `./json_value_module.F90:1396 → 1403` |
|  +40.0% | +2.00ms | 38.5% → 33.3% | 5.0ms → 7.0ms |   5 → 7 | `./json_value_module.F90:1400 → 1407` |
|  -50.0% | -1.00ms |  15.4% → 4.8% | 2.0ms → 1.0ms |   2 → 1 | `./json_value_module.F90:1393 → 1400` |
|     new | +1.00ms |   0.0% → 4.8% |   0ms → 1.0ms |   0 → 1 | `./json_value_module.F90:1394`        |
|     new | +1.00ms |   0.0% → 4.8% |   0ms → 1.0ms |   0 → 1 | `./json_value_module.F90:1402`        |

##### `__json_string_utilities_MOD_unescape_string` (`./json_string_utilities.F90`)

|  Change |   Delta |             % |          Time | Samples | Location                          |
| ------: | ------: | ------------: | ------------: | ------: | --------------------------------- |
| +150.0% | +3.00ms | 10.0% → 20.0% | 2.0ms → 5.0ms |   2 → 5 | `./json_string_utilities.F90:605` |
| removed | -3.00ms |  15.0% → 0.0% |   3.0ms → 0ms |   3 → 0 | `./json_string_utilities.F90:615` |
|  +66.7% | +2.00ms | 15.0% → 20.0% | 3.0ms → 5.0ms |   3 → 5 | `./json_string_utilities.F90:506` |
|     new | +2.00ms |   0.0% → 8.0% |   0ms → 2.0ms |   0 → 2 | `./json_string_utilities.F90:501` |
|  +33.3% | +1.00ms | 15.0% → 16.0% | 3.0ms → 4.0ms |   3 → 4 | `./json_string_utilities.F90:514` |

##### `__json_value_module_MOD_json_value_destroy` (`./json_value_module.F90`)

|  Change |   Delta |            % |          Time | Samples | Location                              |
| ------: | ------: | -----------: | ------------: | ------: | ------------------------------------- |
| +500.0% | +5.00ms | 7.1% → 37.5% | 1.0ms → 6.0ms |   1 → 6 | `./json_value_module.F90:2296 → 2303` |
| removed | -3.00ms | 21.4% → 0.0% |   3.0ms → 0ms |   3 → 0 | `./json_value_module.F90:2269`        |
| removed | -2.00ms | 14.3% → 0.0% |   2.0ms → 0ms |   2 → 0 | `./json_value_module.F90:2259`        |
| +100.0% | +1.00ms | 7.1% → 12.5% | 1.0ms → 2.0ms |   1 → 2 | `./json_value_module.F90:2253 → 2260` |
| removed | -1.00ms |  7.1% → 0.0% |   1.0ms → 0ms |   1 → 0 | `./json_value_module.F90:2273`        |

##### `__json_string_utilities_MOD_string_to_integer` (`./json_string_utilities.F90`)

| Change |   Delta |             % |          Time | Samples | Location                          |
| -----: | ------: | ------------: | ------------: | ------: | --------------------------------- |
|    new | +2.00ms |  0.0% → 40.0% |   0ms → 2.0ms |   0 → 2 | `./json_string_utilities.F90:116` |
| -50.0% | -1.00ms | 66.7% → 20.0% | 2.0ms → 1.0ms |   2 → 1 | `./json_string_utilities.F90:134` |
|    new | +1.00ms |  0.0% → 20.0% |   0ms → 1.0ms |   0 → 1 | `./json_string_utilities.F90:132` |

##### `__json_value_module_MOD_json_value_add_member` (`./json_value_module.F90`)

|  Change |   Delta |             % |          Time | Samples | Location                              |
| ------: | ------: | ------------: | ------------: | ------: | ------------------------------------- |
|     new | +2.00ms |  0.0% → 25.0% |   0ms → 2.0ms |   0 → 2 | `./json_value_module.F90:3428`        |
| +100.0% | +1.00ms | 16.7% → 25.0% | 1.0ms → 2.0ms |   1 → 2 | `./json_value_module.F90:3406 → 3413` |
| removed | -1.00ms |  16.7% → 0.0% |   1.0ms → 0ms |   1 → 0 | `./json_value_module.F90:3423`        |
|  -50.0% | -1.00ms | 33.3% → 12.5% | 2.0ms → 1.0ms |   2 → 1 | `./json_value_module.F90:3433 → 3440` |
| +100.0% | +1.00ms | 16.7% → 25.0% | 1.0ms → 2.0ms |   1 → 2 | `./json_value_module.F90:3443 → 3450` |

##### `__json_value_module_MOD_string_to_int` (`./json_value_module.F90`)

| Change |   Delta |             % |        Time | Samples | Location                       |
| -----: | ------: | ------------: | ----------: | ------: | ------------------------------ |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `./json_value_module.F90:8094` |

##### `__json_value_module_MOD_json_info` (`./json_value_module.F90`)

|  Change |   Delta |            % |        Time | Samples | Location                       |
| ------: | ------: | -----------: | ----------: | ------: | ------------------------------ |
|     new | +2.00ms | 0.0% → 66.7% | 0ms → 2.0ms |   0 → 2 | `./json_value_module.F90:1428` |
| removed | -1.00ms | 50.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `./json_value_module.F90:1423` |

##### `__json_value_module_MOD_json_value_get_child_by_name` (`./json_value_module.F90`)

| Change |   Delta |             % |        Time | Samples | Location                       |
| -----: | ------: | ------------: | ----------: | ------: | ------------------------------ |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `./json_value_module.F90:5652` |

##### `__json_value_module_MOD_parse_string` (`./json_value_module.F90`)

|  Change |   Delta |             % |            Time | Samples | Location                                |
| ------: | ------: | ------------: | --------------: | ------: | --------------------------------------- |
|  -25.0% | -8.00ms | 19.4% → 16.1% | 32.0ms → 24.0ms | 32 → 24 | `./json_value_module.F90:11091 → 11119` |
|  +12.0% | +6.00ms | 30.3% → 37.6% | 50.0ms → 56.0ms | 50 → 56 | `./json_value_module.F90:11084 → 11112` |
|  -20.7% | -6.00ms | 17.6% → 15.4% | 29.0ms → 23.0ms | 29 → 23 | `./json_value_module.F90:11086 → 11114` |
|  -20.0% | -6.00ms | 18.2% → 16.1% | 30.0ms → 24.0ms | 30 → 24 | `./json_value_module.F90:11098 → 11126` |
| removed | -3.00ms |   1.8% → 0.0% |     3.0ms → 0ms |   3 → 0 | `./json_value_module.F90:11052`         |

##### `__json_value_module_MOD_parse_array` (`./json_value_module.F90`)

|  Change |   Delta |             % |        Time | Samples | Location                        |
| ------: | ------: | ------------: | ----------: | ------: | ------------------------------- |
| removed | -2.00ms | 100.0% → 0.0% | 2.0ms → 0ms |   2 → 0 | `./json_value_module.F90:11008` |

##### `__json_value_module_MOD_parse_value` (`./json_value_module.F90`)

| Change |   Delta |             % |          Time | Samples | Location                                |
| -----: | ------: | ------------: | ------------: | ------: | --------------------------------------- |
| -37.5% | -3.00ms | 25.8% → 17.2% | 8.0ms → 5.0ms |   8 → 5 | `./json_value_module.F90:10202 → 10209` |
|    new | +3.00ms |  0.0% → 10.3% |   0ms → 3.0ms |   0 → 3 | `./json_value_module.F90:10192`         |
| -66.7% | -2.00ms |   9.7% → 3.4% | 3.0ms → 1.0ms |   3 → 1 | `./json_value_module.F90:10139 → 10146` |
| -66.7% | -2.00ms |   9.7% → 3.4% | 3.0ms → 1.0ms |   3 → 1 | `./json_value_module.F90:10156 → 10163` |
| +50.0% | +1.00ms |  6.5% → 10.3% | 2.0ms → 3.0ms |   2 → 3 | `./json_value_module.F90:10145 → 10152` |

##### `__json_value_module_MOD_parse_for_chars` (`./json_value_module.F90`)

|  Change |   Delta |             % |          Time | Samples | Location                                |
| ------: | ------: | ------------: | ------------: | ------: | --------------------------------------- |
| removed | -2.00ms |  18.2% → 0.0% |   2.0ms → 0ms |   2 → 0 | `./json_value_module.F90:11163`         |
| removed | -1.00ms |   9.1% → 0.0% |   1.0ms → 0ms |   1 → 0 | `./json_value_module.F90:11161`         |
|  +14.3% | +1.00ms | 63.6% → 88.9% | 7.0ms → 8.0ms |   7 → 8 | `./json_value_module.F90:11164 → 11192` |

##### `__json_value_module_MOD_pop_char` (`./json_value_module.F90`)

| Change |   Delta |      % |          Time | Samples | Location                                |
| -----: | ------: | -----: | ------------: | ------: | --------------------------------------- |
| -50.0% | -2.00ms | 100.0% | 4.0ms → 2.0ms |   4 → 2 | `./json_value_module.F90:11341 → 11369` |

##### `__json_value_module_MOD_to_logical` (`./json_value_module.F90`)

|  Change |   Delta |             % |        Time | Samples | Location                        |
| ------: | ------: | ------------: | ----------: | ------: | ------------------------------- |
| removed | -2.00ms | 100.0% → 0.0% | 2.0ms → 0ms |   2 → 0 | `./json_value_module.F90:10659` |
|     new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `./json_value_module.F90:10678` |

##### `__json_value_module_MOD_json_value_create` (`./json_value_module.F90`)

|  Change |   Delta |             % |          Time | Samples | Location                              |
| ------: | ------: | ------------: | ------------: | ------: | ------------------------------------- |
|  -66.7% | -2.00ms | 75.0% → 33.3% | 3.0ms → 1.0ms |   3 → 1 | `./json_value_module.F90:2213 → 2220` |
| +100.0% | +1.00ms | 25.0% → 66.7% | 1.0ms → 2.0ms |   1 → 2 | `./json_value_module.F90:2211 → 2218` |

##### `__json_value_module_MOD_to_string` (`./json_value_module.F90`)

|  Change |   Delta |             % |        Time | Samples | Location                        |
| ------: | ------: | ------------: | ----------: | ------: | ------------------------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `./json_value_module.F90:10776` |

##### `__json_value_module_MOD_to_integer` (`./json_value_module.F90`)

|  Change |   Delta |             % |        Time | Samples | Location                        |
| ------: | ------: | ------------: | ----------: | ------: | ------------------------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `./json_value_module.F90:10703` |

#### Callers

Callers with the largest change in contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `0x1189ec` (`/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|  Change |    Delta |             % |            Time | Samples | Caller                                 | Location                  |
| ------: | -------: | ------------: | --------------: | ------: | -------------------------------------- | ------------------------- |
| +200.0% | +14.00ms | 21.2% → 39.6% |  7.0ms → 21.0ms |  7 → 21 | `__json_value_module_MOD_parse_object` | `./json_value_module.F90` |
|  +50.0% | +10.00ms | 60.6% → 56.6% | 20.0ms → 30.0ms | 20 → 30 | `__json_value_module_MOD_parse_string` | `./json_value_module.F90` |
|  -66.7% |  -4.00ms |  18.2% → 3.8% |   6.0ms → 2.0ms |   6 → 2 | `__json_value_module_MOD_parse_value`  | `./json_value_module.F90` |

##### `__json_value_module_MOD_pop_char.part.0` (`./json_value_module.F90`)

| Change |    Delta |             % |              Time |       Samples | Caller                                 | Location                  |
| -----: | -------: | ------------: | ----------------: | ------------: | -------------------------------------- | ------------------------- |
|  +4.0% | +21.00ms | 26.5% → 27.4% | 523.0ms → 544.0ms |     523 → 544 | `__json_value_module_MOD_parse_object` | `./json_value_module.F90` |
| +55.3% | +21.00ms |   1.9% → 3.0% |   38.0ms → 59.0ms |       38 → 59 | `__json_value_module_MOD_parse_number` | `./json_value_module.F90` |
|  -7.5% | -12.00ms |   8.1% → 7.4% | 160.0ms → 148.0ms |     160 → 148 | `__json_value_module_MOD_parse_value`  | `./json_value_module.F90` |
|  -0.8% | -10.00ms | 60.4% → 59.5% |     1.19s → 1.18s | 1,193 → 1,183 | `__json_value_module_MOD_parse_string` | `./json_value_module.F90` |
| -46.7% |  -7.00ms |   0.8% → 0.4% |    15.0ms → 8.0ms |        15 → 8 | `__json_value_module_MOD_parse_array`  | `./json_value_module.F90` |

##### `0x929c4` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |   Delta |             % |            Time | Samples | Caller                                  | Location                  |
| ------: | ------: | ------------: | --------------: | ------: | --------------------------------------- | ------------------------- |
| +200.0% | +6.00ms |  6.7% → 16.1% |   3.0ms → 9.0ms |   3 → 9 | `__json_value_module_MOD_parse_value`   | `./json_value_module.F90` |
|  +57.1% | +4.00ms | 15.6% → 19.6% |  7.0ms → 11.0ms |  7 → 11 | `__json_value_module_MOD_string_to_int` | `./json_value_module.F90` |
|   +3.0% | +1.00ms | 73.3% → 60.7% | 33.0ms → 34.0ms | 33 → 34 | `__json_value_module_MOD_parse_object`  | `./json_value_module.F90` |
| removed | -1.00ms |   2.2% → 0.0% |     1.0ms → 0ms |   1 → 0 | `__json_value_module_MOD_parse_number`  | `./json_value_module.F90` |
| +100.0% | +1.00ms |   2.2% → 3.6% |   1.0ms → 2.0ms |   1 → 2 | `__json_value_module_MOD_parse_array`   | `./json_value_module.F90` |

##### `__json_value_module_MOD_parse_object` (`./json_value_module.F90`)

| Change |   Delta |      % |            Time | Samples | Caller                                 | Location                  |
| -----: | ------: | -----: | --------------: | ------: | -------------------------------------- | ------------------------- |
| +53.3% | +8.00ms | 100.0% | 15.0ms → 23.0ms | 15 → 23 | `__json_value_module_MOD_parse_object` | `./json_value_module.F90` |

##### `__json_value_module_MOD_destroy_json_data` (`./json_value_module.F90`)

|  Change |   Delta |             % |            Time | Samples | Caller                                       | Location                  |
| ------: | ------: | ------------: | --------------: | ------: | -------------------------------------------- | ------------------------- |
|  +36.4% | +4.00ms | 84.6% → 71.4% | 11.0ms → 15.0ms | 11 → 15 | `__json_value_module_MOD_json_value_destroy` | `./json_value_module.F90` |
|     new | +2.00ms |   0.0% → 9.5% |     0ms → 2.0ms |   0 → 2 | `__json_value_module_MOD_to_array`           | `./json_value_module.F90` |
| +100.0% | +1.00ms |   7.7% → 9.5% |   1.0ms → 2.0ms |   1 → 2 | `__json_value_module_MOD_to_string`          | `./json_value_module.F90` |
|     new | +1.00ms |   0.0% → 4.8% |     0ms → 1.0ms |   0 → 1 | `__json_value_module_MOD_parse_number`       | `./json_value_module.F90` |

##### `0x1186dc` (`/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|  Change |   Delta |             % |          Time | Samples | Caller                                  | Location                                          |
| ------: | ------: | ------------: | ------------: | ------: | --------------------------------------- | ------------------------------------------------- |
| +300.0% | +6.00ms | 40.0% → 66.7% | 2.0ms → 8.0ms |   2 → 8 | `0x10b283`                              | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  +33.3% | +1.00ms | 60.0% → 33.3% | 3.0ms → 4.0ms |   3 → 4 | `__json_value_module_MOD_string_to_int` | `./json_value_module.F90`                         |

##### `0x118730` (`/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|  Change |   Delta |              % |          Time | Samples | Caller                                             | Location                  |
| ------: | ------: | -------------: | ------------: | ------: | -------------------------------------------------- | ------------------------- |
| +250.0% | +5.00ms | 100.0% → 77.8% | 2.0ms → 7.0ms |   2 → 7 | `__json_value_module_MOD_string_to_int`            | `./json_value_module.F90` |
|     new | +1.00ms |   0.0% → 11.1% |   0ms → 1.0ms |   0 → 1 | `__json_value_module_MOD_json_get_by_path_default` | `./json_value_module.F90` |
|     new | +1.00ms |   0.0% → 11.1% |   0ms → 1.0ms |   0 → 1 | `main`                                             | `/out/profile.f90`        |

##### `0x9123c` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |   Delta |              % |            Time | Samples | Caller    | Location                               |
| ------: | ------: | -------------: | --------------: | ------: | --------- | -------------------------------------- |
|  +61.5% | +8.00ms | 92.9% → 100.0% | 13.0ms → 21.0ms | 13 → 21 | `0x9245b` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed | -1.00ms |    7.1% → 0.0% |     1.0ms → 0ms |   1 → 0 | `0x91b93` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x11899c` (`/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|  Change |   Delta |             % |            Time | Samples | Caller                                 | Location                  |
| ------: | ------: | ------------: | --------------: | ------: | -------------------------------------- | ------------------------- |
| +500.0% | +5.00ms |   1.7% → 9.1% |   1.0ms → 6.0ms |   1 → 6 | `__json_value_module_MOD_parse_value`  | `./json_value_module.F90` |
|   +7.3% | +3.00ms | 68.3% → 66.7% | 41.0ms → 44.0ms | 41 → 44 | `__json_value_module_MOD_parse_string` | `./json_value_module.F90` |
|  -11.1% | -2.00ms | 30.0% → 24.2% | 18.0ms → 16.0ms | 18 → 16 | `__json_value_module_MOD_parse_object` | `./json_value_module.F90` |

##### `0x8faa0` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |   Delta |      % |          Time | Samples | Caller    | Location                               |
| ------: | ------: | -----: | ------------: | ------: | --------- | -------------------------------------- |
| +200.0% | +6.00ms | 100.0% | 3.0ms → 9.0ms |   3 → 9 | `0x92a9b` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x8faf4` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change |    Delta |             % |            Time | Samples | Caller    | Location                               |
| -----: | -------: | ------------: | --------------: | ------: | --------- | -------------------------------------- |
| +41.9% | +13.00ms | 66.0% → 84.6% | 31.0ms → 44.0ms | 31 → 44 | `0x92a9b` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| -57.1% |  -8.00ms | 29.8% → 11.5% |  14.0ms → 6.0ms |  14 → 6 | `0x91c5f` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `__json_string_utilities_MOD_unescape_string` (`./json_string_utilities.F90`)

| Change |   Delta |      % |            Time | Samples | Caller                                 | Location                  |
| -----: | ------: | -----: | --------------: | ------: | -------------------------------------- | ------------------------- |
| +25.0% | +5.00ms | 100.0% | 20.0ms → 25.0ms | 20 → 25 | `__json_value_module_MOD_parse_string` | `./json_value_module.F90` |

##### `0x91544` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |   Delta |      % |          Time | Samples | Caller    | Location                               |
| ------: | ------: | -----: | ------------: | ------: | --------- | -------------------------------------- |
| +500.0% | +5.00ms | 100.0% | 1.0ms → 6.0ms |   1 → 6 | `0x9245b` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x118708` (`/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|  Change |   Delta |             % |          Time | Samples | Caller                                          | Location                                          |
| ------: | ------: | ------------: | ------------: | ------: | ----------------------------------------------- | ------------------------------------------------- |
|     new | +4.00ms |  0.0% → 57.1% |   0ms → 4.0ms |   0 → 4 | `0x10b283`                                      | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| +100.0% | +1.00ms | 50.0% → 28.6% | 1.0ms → 2.0ms |   1 → 2 | `__json_value_module_MOD_string_to_int`         | `./json_value_module.F90`                         |
| removed | -1.00ms |  50.0% → 0.0% |   1.0ms → 0ms |   1 → 0 | `MAIN__`                                        | `/out/profile.f90`                                |
|     new | +1.00ms |  0.0% → 14.3% |   0ms → 1.0ms |   0 → 1 | `__json_string_utilities_MOD_string_to_integer` | `./json_string_utilities.F90`                     |

##### `0x8fbc8` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |   Delta |      % |          Time | Samples | Caller    | Location                               |
| ------: | ------: | -----: | ------------: | ------: | --------- | -------------------------------------- |
| +400.0% | +4.00ms | 100.0% | 1.0ms → 5.0ms |   1 → 5 | `0x92a9b` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0xf8ea8` (`/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|  Change |   Delta |             % |          Time | Samples | Caller    | Location                                          |
| ------: | ------: | ------------: | ------------: | ------: | --------- | ------------------------------------------------- |
| +200.0% | +4.00ms | 66.7% → 85.7% | 2.0ms → 6.0ms |   2 → 6 | `0xf8f37` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `0x10a040` (`/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|  Change |   Delta |             % |          Time | Samples | Caller                                  | Location                  |
| ------: | ------: | ------------: | ------------: | ------: | --------------------------------------- | ------------------------- |
|  +66.7% | +2.00ms | 75.0% → 62.5% | 3.0ms → 5.0ms |   3 → 5 | `__json_value_module_MOD_string_to_int` | `./json_value_module.F90` |
|     new | +2.00ms |  0.0% → 25.0% |   0ms → 2.0ms |   0 → 2 | `__json_value_module_MOD_parse_object`  | `./json_value_module.F90` |
| removed | -1.00ms |  25.0% → 0.0% |   1.0ms → 0ms |   1 → 0 | `__json_value_module_MOD_parse_string`  | `./json_value_module.F90` |
|     new | +1.00ms |  0.0% → 12.5% |   0ms → 1.0ms |   0 → 1 | `__json_value_module_MOD_parse_value`   | `./json_value_module.F90` |

##### `0x8fae0` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |   Delta |              % |          Time | Samples | Caller    | Location                               |
| ------: | ------: | -------------: | ------------: | ------: | --------- | -------------------------------------- |
| +500.0% | +5.00ms | 50.0% → 100.0% | 1.0ms → 6.0ms |   1 → 6 | `0x92a9b` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed | -1.00ms |   50.0% → 0.0% |   1.0ms → 0ms |   1 → 0 | `0x91c5f` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x8e98c` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change |   Delta |              % |          Time | Samples | Caller    | Location                               |
| -----: | ------: | -------------: | ------------: | ------: | --------- | -------------------------------------- |
|    new | +2.00ms |   0.0% → 28.6% |   0ms → 2.0ms |   0 → 2 | `0x8eb7f` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| +33.3% | +1.00ms | 100.0% → 57.1% | 3.0ms → 4.0ms |   3 → 4 | `0x9155f` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|    new | +1.00ms |   0.0% → 14.3% |   0ms → 1.0ms |   0 → 1 | `0x8eb3f` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x105f60` (`/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|  Change |   Delta |              % |          Time | Samples | Caller                                             | Location                  |
| ------: | ------: | -------------: | ------------: | ------: | -------------------------------------------------- | ------------------------- |
| +300.0% | +3.00ms | 100.0% → 80.0% | 1.0ms → 4.0ms |   1 → 4 | `__json_value_module_MOD_string_to_int`            | `./json_value_module.F90` |
|     new | +1.00ms |   0.0% → 20.0% |   0ms → 1.0ms |   0 → 1 | `__json_value_module_MOD_json_get_by_path_default` | `./json_value_module.F90` |

##### `__json_value_module_MOD_json_value_destroy` (`./json_value_module.F90`)

| Change |   Delta |      % |            Time | Samples | Caller                                       | Location                  |
| -----: | ------: | -----: | --------------: | ------: | -------------------------------------------- | ------------------------- |
| +14.3% | +2.00ms | 100.0% | 14.0ms → 16.0ms | 14 → 16 | `__json_value_module_MOD_json_value_destroy` | `./json_value_module.F90` |

##### `__json_string_utilities_MOD_string_to_integer` (`./json_string_utilities.F90`)

| Change |   Delta |            % |        Time | Samples | Caller                                 | Location                  |
| -----: | ------: | -----------: | ----------: | ------: | -------------------------------------- | ------------------------- |
|    new | +2.00ms | 0.0% → 40.0% | 0ms → 2.0ms |   0 → 2 | `__json_value_module_MOD_parse_number` | `./json_value_module.F90` |

##### `__json_value_module_MOD_json_value_add_member` (`./json_value_module.F90`)

| Change |   Delta |             % |          Time | Samples | Caller                                 | Location                  |
| -----: | ------: | ------------: | ------------: | ------: | -------------------------------------- | ------------------------- |
| +50.0% | +1.00ms | 33.3% → 37.5% | 2.0ms → 3.0ms |   2 → 3 | `__json_value_module_MOD_parse_object` | `./json_value_module.F90` |
|    new | +1.00ms |  0.0% → 12.5% |   0ms → 1.0ms |   0 → 1 | `__json_value_module_MOD_parse_array`  | `./json_value_module.F90` |

##### `__json_value_module_MOD_string_to_int` (`./json_value_module.F90`)

| Change |   Delta |             % |        Time | Samples | Caller                                 | Location                  |
| -----: | ------: | ------------: | ----------: | ------: | -------------------------------------- | ------------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `__json_value_module_MOD_parse_number` | `./json_value_module.F90` |

##### `__json_value_module_MOD_json_info` (`./json_value_module.F90`)

| Change |   Delta |      % |          Time | Samples | Caller                                          | Location                  |
| -----: | ------: | -----: | ------------: | ------: | ----------------------------------------------- | ------------------------- |
| +50.0% | +1.00ms | 100.0% | 2.0ms → 3.0ms |   2 → 3 | `__json_value_module_MOD_json_value_add_member` | `./json_value_module.F90` |

##### `__json_value_module_MOD_json_value_get_child_by_name` (`./json_value_module.F90`)

| Change |   Delta |             % |        Time | Samples | Caller                                                 | Location                  |
| -----: | ------: | ------------: | ----------: | ------: | ------------------------------------------------------ | ------------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `__json_value_module_MOD_json_value_get_child_by_name` | `./json_value_module.F90` |

##### `0xf8da4` (`/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

| Change |   Delta |            % |        Time | Samples | Caller    | Location                                          |
| -----: | ------: | -----------: | ----------: | ------: | --------- | ------------------------------------------------- |
|    new | +2.00ms | 0.0% → 50.0% | 0ms → 2.0ms |   0 → 2 | `0xfa8db` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|    new | +1.00ms | 0.0% → 25.0% | 0ms → 1.0ms |   0 → 1 | `0xf8df3` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|    new | +1.00ms | 0.0% → 25.0% | 0ms → 1.0ms |   0 → 1 | `0xfa887` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `0x8e960` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |   Delta |             % |          Time | Samples | Caller    | Location                               |
| ------: | ------: | ------------: | ------------: | ------: | --------- | -------------------------------------- |
| +100.0% | +1.00ms | 14.3% → 20.0% | 1.0ms → 2.0ms |   1 → 2 | `0x8eb3f` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|  +50.0% | +1.00ms | 28.6% → 30.0% | 2.0ms → 3.0ms |   2 → 3 | `0x8eb7f` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| +100.0% | +1.00ms | 14.3% → 20.0% | 1.0ms → 2.0ms |   1 → 2 | `0x900bf` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x8eb74` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |   Delta |      % |          Time | Samples | Caller    | Location                               |
| ------: | ------: | -----: | ------------: | ------: | --------- | -------------------------------------- |
| +150.0% | +3.00ms | 100.0% | 2.0ms → 5.0ms |   2 → 5 | `0x9102b` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x92240` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |   Delta |             % |            Time | Samples | Caller                                  | Location                  |
| ------: | ------: | ------------: | --------------: | ------: | --------------------------------------- | ------------------------- |
|  +17.9% | +7.00ms | 62.9% → 70.8% | 39.0ms → 46.0ms | 39 → 46 | `__json_value_module_MOD_parse_object`  | `./json_value_module.F90` |
|  -70.0% | -7.00ms |  16.1% → 4.6% |  10.0ms → 3.0ms |  10 → 3 | `__json_value_module_MOD_string_to_int` | `./json_value_module.F90` |
| +100.0% | +6.00ms |  9.7% → 18.5% |  6.0ms → 12.0ms |  6 → 12 | `__json_value_module_MOD_parse_value`   | `./json_value_module.F90` |
|  -80.0% | -4.00ms |   8.1% → 1.5% |   5.0ms → 1.0ms |   5 → 1 | `__json_value_module_MOD_parse_number`  | `./json_value_module.F90` |
| +200.0% | +2.00ms |   1.6% → 4.6% |   1.0ms → 3.0ms |   1 → 3 | `__json_value_module_MOD_parse_array`   | `./json_value_module.F90` |

##### `_init` (`<unknown>`)

|  Change |    Delta |             % |            Time | Samples | Caller                                       | Location                  |
| ------: | -------: | ------------: | --------------: | ------: | -------------------------------------------- | ------------------------- |
|  -24.6% | -17.00ms | 67.6% → 68.4% | 69.0ms → 52.0ms | 69 → 52 | `__json_value_module_MOD_parse_object`       | `./json_value_module.F90` |
|  -33.3% |  -7.00ms | 20.6% → 18.4% | 21.0ms → 14.0ms | 21 → 14 | `__json_value_module_MOD_parse_value`        | `./json_value_module.F90` |
|  -80.0% |  -4.00ms |   4.9% → 1.3% |   5.0ms → 1.0ms |   5 → 1 | `__json_value_module_MOD_parse_string`       | `./json_value_module.F90` |
| +300.0% |  +3.00ms |   1.0% → 5.3% |   1.0ms → 4.0ms |   1 → 4 | `__json_value_module_MOD_json_value_destroy` | `./json_value_module.F90` |
| removed |  -1.00ms |   1.0% → 0.0% |     1.0ms → 0ms |   1 → 0 | `__json_value_module_MOD_parse_array`        | `./json_value_module.F90` |

##### `0x118680` (`/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|  Change |    Delta |             % |            Time | Samples | Caller                                 | Location                                          |
| ------: | -------: | ------------: | --------------: | ------: | -------------------------------------- | ------------------------------------------------- |
|  -44.4% | -24.00ms | 85.7% → 66.7% | 54.0ms → 30.0ms | 54 → 30 | `__json_value_module_MOD_parse_object` | `./json_value_module.F90`                         |
| +133.3% |  +8.00ms |  9.5% → 31.1% |  6.0ms → 14.0ms |  6 → 14 | `__json_value_module_MOD_parse_value`  | `./json_value_module.F90`                         |
| removed |  -1.00ms |   1.6% → 0.0% |     1.0ms → 0ms |   1 → 0 | `__json_value_module_MOD_parse_number` | `./json_value_module.F90`                         |
| removed |  -1.00ms |   1.6% → 0.0% |     1.0ms → 0ms |   1 → 0 | `0x10b283`                             | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `__json_value_module_MOD_parse_string` (`./json_value_module.F90`)

| Change |    Delta |             % |            Time | Samples | Caller                                 | Location                  |
| -----: | -------: | ------------: | --------------: | ------: | -------------------------------------- | ------------------------- |
| -19.0% | -15.00ms | 47.9% → 43.0% | 79.0ms → 64.0ms | 79 → 64 | `__json_value_module_MOD_parse_value`  | `./json_value_module.F90` |
|  -1.2% |  -1.00ms | 52.1% → 57.0% | 86.0ms → 85.0ms | 86 → 85 | `__json_value_module_MOD_parse_object` | `./json_value_module.F90` |

##### `0x10c300` (`/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

| Change |    Delta |      % |           Time | Samples | Caller     | Location                                          |
| -----: | -------: | -----: | -------------: | ------: | ---------- | ------------------------------------------------- |
| -76.2% | -16.00ms | 100.0% | 21.0ms → 5.0ms |  21 → 5 | `0x10a47b` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `0x1186f8` (`/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|  Change |   Delta |             % |           Time | Samples | Caller                                 | Location                                          |
| ------: | ------: | ------------: | -------------: | ------: | -------------------------------------- | ------------------------------------------------- |
|  -56.3% | -9.00ms | 69.6% → 70.0% | 16.0ms → 7.0ms |  16 → 7 | `__json_value_module_MOD_parse_object` | `./json_value_module.F90`                         |
| removed | -3.00ms |  13.0% → 0.0% |    3.0ms → 0ms |   3 → 0 | `__json_value_module_MOD_parse_number` | `./json_value_module.F90`                         |
|  -33.3% | -1.00ms | 13.0% → 20.0% |  3.0ms → 2.0ms |   3 → 2 | `__json_value_module_MOD_parse_value`  | `./json_value_module.F90`                         |
| removed | -1.00ms |   4.3% → 0.0% |    1.0ms → 0ms |   1 → 0 | `__json_value_module_MOD_parse_array`  | `./json_value_module.F90`                         |
|     new | +1.00ms |  0.0% → 10.0% |    0ms → 1.0ms |   0 → 1 | `0x10b283`                             | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `0x118970` (`/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

| Change |    Delta |             % |            Time | Samples | Caller                                 | Location                  |
| -----: | -------: | ------------: | --------------: | ------: | -------------------------------------- | ------------------------- |
| -37.5% | -15.00ms | 55.6% → 42.4% | 40.0ms → 25.0ms | 40 → 25 | `__json_value_module_MOD_parse_object` | `./json_value_module.F90` |
| +66.7% |  +4.00ms |  8.3% → 16.9% |  6.0ms → 10.0ms |  6 → 10 | `__json_value_module_MOD_parse_value`  | `./json_value_module.F90` |
|  -8.3% |  -2.00ms | 33.3% → 37.3% | 24.0ms → 22.0ms | 24 → 22 | `__json_value_module_MOD_parse_string` | `./json_value_module.F90` |

##### `0x118720` (`/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

| Change |   Delta |             % |            Time | Samples | Caller                                  | Location                  |
| -----: | ------: | ------------: | --------------: | ------: | --------------------------------------- | ------------------------- |
| -38.1% | -8.00ms | 46.7% → 39.4% | 21.0ms → 13.0ms | 21 → 13 | `__json_value_module_MOD_parse_value`   | `./json_value_module.F90` |
| -21.7% | -5.00ms | 51.1% → 54.5% | 23.0ms → 18.0ms | 23 → 18 | `__json_value_module_MOD_parse_object`  | `./json_value_module.F90` |
|    new | +1.00ms |   0.0% → 3.0% |     0ms → 1.0ms |   0 → 1 | `__json_value_module_MOD_string_to_int` | `./json_value_module.F90` |

##### `0x118994` (`/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|  Change |   Delta |             % |            Time | Samples | Caller                                 | Location                  |
| ------: | ------: | ------------: | --------------: | ------: | -------------------------------------- | ------------------------- |
|  -25.0% | -8.00ms | 55.2% → 52.2% | 32.0ms → 24.0ms | 32 → 24 | `__json_value_module_MOD_parse_string` | `./json_value_module.F90` |
|  -31.3% | -5.00ms | 27.6% → 23.9% | 16.0ms → 11.0ms | 16 → 11 | `__json_value_module_MOD_parse_object` | `./json_value_module.F90` |
|  +37.5% | +3.00ms | 13.8% → 23.9% |  8.0ms → 11.0ms |  8 → 11 | `__json_value_module_MOD_parse_value`  | `./json_value_module.F90` |
| removed | -2.00ms |   3.4% → 0.0% |     2.0ms → 0ms |   2 → 0 | `__json_value_module_MOD_parse_array`  | `./json_value_module.F90` |

##### `0x90dc0` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change |   Delta |      % |           Time | Samples | Caller    | Location                               |
| -----: | ------: | -----: | -------------: | ------: | --------- | -------------------------------------- |
| -50.0% | -9.00ms | 100.0% | 18.0ms → 9.0ms |  18 → 9 | `0x9245b` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x8fbf0` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |   Delta |              % |          Time | Samples | Caller    | Location                               |
| ------: | ------: | -------------: | ------------: | ------: | --------- | -------------------------------------- |
|  -75.0% | -6.00ms | 80.0% → 100.0% | 8.0ms → 2.0ms |   8 → 2 | `0x92a9b` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed | -2.00ms |   20.0% → 0.0% |   2.0ms → 0ms |   2 → 0 | `0x91bfb` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x92260` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |   Delta |             % |          Time | Samples | Caller                                        | Location                      |
| ------: | ------: | ------------: | ------------: | ------: | --------------------------------------------- | ----------------------------- |
| removed | -2.00ms |  18.2% → 0.0% |   2.0ms → 0ms |   2 → 0 | `__json_value_module_MOD_json_value_create`   | `./json_value_module.F90`     |
|  -40.0% | -2.00ms | 45.5% → 75.0% | 5.0ms → 3.0ms |   5 → 3 | `__json_value_module_MOD_parse_string`        | `./json_value_module.F90`     |
| removed | -1.00ms |   9.1% → 0.0% |   1.0ms → 0ms |   1 → 0 | `__json_string_utilities_MOD_unescape_string` | `./json_string_utilities.F90` |
| removed | -1.00ms |   9.1% → 0.0% |   1.0ms → 0ms |   1 → 0 | `MAIN__`                                      | `/out/profile.f90`            |
|  -50.0% | -1.00ms | 18.2% → 25.0% | 2.0ms → 1.0ms |   2 → 1 | `__json_value_module_MOD_parse_object`        | `./json_value_module.F90`     |

##### `0xddb88` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change |   Delta |      % |            Time | Samples | Caller     | Location                                          |
| -----: | ------: | -----: | --------------: | ------: | ---------- | ------------------------------------------------- |
| -14.6% | -6.00ms | 100.0% | 41.0ms → 35.0ms | 41 → 35 | `0x10bd0b` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `0xde3c8` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change |   Delta |      % |          Time | Samples | Caller     | Location                                          |
| -----: | ------: | -----: | ------------: | ------: | ---------- | ------------------------------------------------- |
| -66.7% | -6.00ms | 100.0% | 9.0ms → 3.0ms |   9 → 3 | `0x10b9e3` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `0x92284` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |   Delta |             % |            Time | Samples | Caller                                          | Location                                          |
| ------: | ------: | ------------: | --------------: | ------: | ----------------------------------------------- | ------------------------------------------------- |
|  -55.6% | -5.00ms |  19.6% → 9.8% |   9.0ms → 4.0ms |   9 → 4 | `0x1c1b3`                                       | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| +200.0% | +4.00ms |  4.3% → 14.6% |   2.0ms → 6.0ms |   2 → 6 | `__json_value_module_MOD_parse_object`          | `./json_value_module.F90`                         |
|  -50.0% | -2.00ms |   8.7% → 4.9% |   4.0ms → 2.0ms |   4 → 2 | `0x9980f`                                       | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
| +200.0% | +2.00ms |   2.2% → 7.3% |   1.0ms → 3.0ms |   1 → 3 | `__json_string_utilities_MOD_string_to_integer` | `./json_string_utilities.F90`                     |
|   -7.1% | -1.00ms | 30.4% → 31.7% | 14.0ms → 13.0ms | 14 → 13 | `__json_value_module_MOD_parse_string`          | `./json_value_module.F90`                         |

##### `0x922bc` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change |   Delta |             % |          Time | Samples | Caller                                 | Location                               |
| -----: | ------: | ------------: | ------------: | ------: | -------------------------------------- | -------------------------------------- |
| -80.0% | -4.00ms | 71.4% → 50.0% | 5.0ms → 1.0ms |   5 → 1 | `__json_value_module_MOD_parse_string` | `./json_value_module.F90`              |
| -50.0% | -1.00ms | 28.6% → 50.0% | 2.0ms → 1.0ms |   2 → 1 | `0x9980f`                              | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x8eb04` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change |   Delta |      % |           Time | Samples | Caller    | Location                               |
| -----: | ------: | -----: | -------------: | ------: | --------- | -------------------------------------- |
| -50.0% | -5.00ms | 100.0% | 10.0ms → 5.0ms |  10 → 5 | `0x9102b` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x9d168` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |   Delta |             % |          Time | Samples | Caller                                          | Location                      |
| ------: | ------: | ------------: | ------------: | ------: | ----------------------------------------------- | ----------------------------- |
|  -75.0% | -3.00ms | 66.7% → 50.0% | 4.0ms → 1.0ms |   4 → 1 | `__json_value_module_MOD_parse_object`          | `./json_value_module.F90`     |
| removed | -1.00ms |  16.7% → 0.0% |   1.0ms → 0ms |   1 → 0 | `__json_string_utilities_MOD_string_to_integer` | `./json_string_utilities.F90` |

##### `0x10a918` (`/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|  Change |   Delta |            % |        Time | Samples | Caller     | Location                                          |
| ------: | ------: | -----------: | ----------: | ------: | ---------- | ------------------------------------------------- |
| removed | -3.00ms | 75.0% → 0.0% | 3.0ms → 0ms |   3 → 0 | `0x1093fb` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| removed | -1.00ms | 25.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `0x10b26f` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `0x915c8` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change |   Delta |      % |          Time | Samples | Caller    | Location                               |
| -----: | ------: | -----: | ------------: | ------: | --------- | -------------------------------------- |
| -57.1% | -4.00ms | 100.0% | 7.0ms → 3.0ms |   7 → 3 | `0x9245b` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0xf8f7c` (`/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

| Change |   Delta |      % |          Time | Samples | Caller    | Location                                          |
| -----: | ------: | -----: | ------------: | ------: | --------- | ------------------------------------------------- |
| -80.0% | -4.00ms | 100.0% | 5.0ms → 1.0ms |   5 → 1 | `0xf9b03` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `__json_value_module_MOD_parse_array` (`./json_value_module.F90`)

|  Change |   Delta |             % |        Time | Samples | Caller                                 | Location                  |
| ------: | ------: | ------------: | ----------: | ------: | -------------------------------------- | ------------------------- |
| removed | -2.00ms | 100.0% → 0.0% | 2.0ms → 0ms |   2 → 0 | `__json_value_module_MOD_parse_object` | `./json_value_module.F90` |

##### `__json_value_module_MOD_parse_value` (`./json_value_module.F90`)

|  Change |   Delta |             % |            Time | Samples | Caller                                    | Location                  |
| ------: | ------: | ------------: | --------------: | ------: | ----------------------------------------- | ------------------------- |
|   -3.6% | -1.00ms | 90.3% → 93.1% | 28.0ms → 27.0ms | 28 → 27 | `__json_value_module_MOD_parse_object`    | `./json_value_module.F90` |
| removed | -1.00ms |   3.2% → 0.0% |     1.0ms → 0ms |   1 → 0 | `__json_value_module_MOD_json_parse_file` | `./json_value_module.F90` |

##### `__json_value_module_MOD_parse_for_chars` (`./json_value_module.F90`)

| Change |   Delta |      % |           Time | Samples | Caller                                | Location                  |
| -----: | ------: | -----: | -------------: | ------: | ------------------------------------- | ------------------------- |
| -18.2% | -2.00ms | 100.0% | 11.0ms → 9.0ms |  11 → 9 | `__json_value_module_MOD_parse_value` | `./json_value_module.F90` |

##### `__json_value_module_MOD_pop_char` (`./json_value_module.F90`)

|  Change |   Delta |             % |          Time | Samples | Caller                                 | Location                  |
| ------: | ------: | ------------: | ------------: | ------: | -------------------------------------- | ------------------------- |
|  -66.7% | -2.00ms | 75.0% → 50.0% | 3.0ms → 1.0ms |   3 → 1 | `__json_value_module_MOD_parse_object` | `./json_value_module.F90` |
| removed | -1.00ms |  25.0% → 0.0% |   1.0ms → 0ms |   1 → 0 | `__json_value_module_MOD_parse_array`  | `./json_value_module.F90` |
|     new | +1.00ms |  0.0% → 50.0% |   0ms → 1.0ms |   0 → 1 | `__json_value_module_MOD_parse_value`  | `./json_value_module.F90` |

##### `__json_value_module_MOD_to_logical` (`./json_value_module.F90`)

| Change |   Delta |      % |          Time | Samples | Caller                                 | Location                  |
| -----: | ------: | -----: | ------------: | ------: | -------------------------------------- | ------------------------- |
| -50.0% | -1.00ms | 100.0% | 2.0ms → 1.0ms |   2 → 1 | `__json_value_module_MOD_parse_object` | `./json_value_module.F90` |

##### `__json_value_module_MOD_json_value_create` (`./json_value_module.F90`)

| Change |   Delta |      % |          Time | Samples | Caller                                 | Location                  |
| -----: | ------: | -----: | ------------: | ------: | -------------------------------------- | ------------------------- |
| -25.0% | -1.00ms | 100.0% | 4.0ms → 3.0ms |   4 → 3 | `__json_value_module_MOD_parse_object` | `./json_value_module.F90` |

##### `__json_value_module_MOD_to_string` (`./json_value_module.F90`)

|  Change |   Delta |             % |        Time | Samples | Caller                                | Location                  |
| ------: | ------: | ------------: | ----------: | ------: | ------------------------------------- | ------------------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `__json_value_module_MOD_parse_value` | `./json_value_module.F90` |

##### `__json_value_module_MOD_to_integer` (`./json_value_module.F90`)

|  Change |   Delta |             % |        Time | Samples | Caller                                 | Location                  |
| ------: | ------: | ------------: | ----------: | ------: | -------------------------------------- | ------------------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `__json_value_module_MOD_parse_number` | `./json_value_module.F90` |

##### `0x923e0` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |   Delta |            % |        Time | Samples | Caller                                      | Location                  |
| ------: | ------: | -----------: | ----------: | ------: | ------------------------------------------- | ------------------------- |
| removed | -2.00ms | 40.0% → 0.0% | 2.0ms → 0ms |   2 → 0 | `__json_value_module_MOD_parse_string`      | `./json_value_module.F90` |
| removed | -2.00ms | 40.0% → 0.0% | 2.0ms → 0ms |   2 → 0 | `__json_value_module_MOD_json_value_create` | `./json_value_module.F90` |

### Total time

#### Regressions

Functions with the largest increase in time spent within the function and its callees. Categories account for at least 1.0% of self time on the base or the current side.

|  Change |    Delta |             % |              Time |   Samples | Function                                        | Location                                          |
| ------: | -------: | ------------: | ----------------: | --------: | ----------------------------------------------- | ------------------------------------------------- |
|  +11.6% | +49.00ms | 11.0% → 12.4% | 423.0ms → 472.0ms | 423 → 472 | `__json_value_module_MOD_parse_number`          | `./json_value_module.F90`                         |
|  +67.3% | +37.00ms |   1.4% → 2.4% |   55.0ms → 92.0ms |   55 → 92 | `0x92a9b`                                       | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  +10.4% | +36.00ms |  9.0% → 10.0% | 345.0ms → 381.0ms | 345 → 381 | `__json_value_module_MOD_string_to_int`         | `./json_value_module.F90`                         |
|   +9.6% | +29.00ms |   7.9% → 8.7% | 303.0ms → 332.0ms | 303 → 332 | `__json_string_utilities_MOD_string_to_integer` | `./json_string_utilities.F90`                     |
|  +60.6% | +20.00ms |   0.9% → 1.4% |   33.0ms → 53.0ms |   33 → 53 | `0x1189ec`                                      | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  +18.8% | +15.00ms |   2.1% → 2.5% |   80.0ms → 95.0ms |   80 → 95 | `__json_value_module_MOD_json_value_create`     | `./json_value_module.F90`                         |
|   +6.1% | +14.00ms |   6.0% → 6.4% | 231.0ms → 245.0ms | 231 → 245 | `0x9245b`                                       | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  +77.8% | +14.00ms |   0.5% → 0.8% |   18.0ms → 32.0ms |   18 → 32 | `0x108f53`                                      | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  +18.6% | +13.00ms |   1.8% → 2.2% |   70.0ms → 83.0ms |   70 → 83 | `__json_value_module_MOD_json_value_destroy`    | `./json_value_module.F90`                         |
|  +18.6% | +13.00ms |   1.8% → 2.2% |   70.0ms → 83.0ms |   70 → 83 | `__json_file_module_MOD_json_file_destroy`      | `./json_file_module.F90`                          |
| +216.7% | +13.00ms |   0.2% → 0.5% |    6.0ms → 19.0ms |    6 → 19 | `0x108efb`                                      | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  +54.5% | +12.00ms |   0.6% → 0.9% |   22.0ms → 34.0ms |   22 → 34 | `__json_value_module_MOD_destroy_json_data`     | `./json_value_module.F90`                         |
|  +24.4% | +11.00ms |   1.2% → 1.5% |   45.0ms → 56.0ms |   45 → 56 | `0x929c4`                                       | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  +71.4% | +10.00ms |   0.4% → 0.6% |   14.0ms → 24.0ms |   14 → 24 | `0x107fa7`                                      | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  +81.8% |  +9.00ms |   0.3% → 0.5% |   11.0ms → 20.0ms |   11 → 20 | `0x10a0fb`                                      | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| +140.0% |  +7.00ms |   0.1% → 0.3% |    5.0ms → 12.0ms |    5 → 12 | `0x1186dc`                                      | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| +350.0% |  +7.00ms |   0.1% → 0.2% |     2.0ms → 9.0ms |     2 → 9 | `0x118730`                                      | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  +50.0% |  +7.00ms |   0.4% → 0.6% |   14.0ms → 21.0ms |   14 → 21 | `0x9123c`                                       | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  +10.0% |  +6.00ms |   1.6% → 1.7% |   60.0ms → 66.0ms |   60 → 66 | `0x11899c`                                      | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  +33.3% |  +6.00ms |   0.5% → 0.6% |   18.0ms → 24.0ms |   18 → 24 | `0x10b283`                                      | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### Ours

| Change |    Delta |             % |              Time |   Samples | Function                                           | Location                        |
| -----: | -------: | ------------: | ----------------: | --------: | -------------------------------------------------- | ------------------------------- |
| +11.6% | +49.00ms | 11.0% → 12.4% | 423.0ms → 472.0ms | 423 → 472 | `__json_value_module_MOD_parse_number`             | `./json_value_module.F90`       |
| +10.4% | +36.00ms |  9.0% → 10.0% | 345.0ms → 381.0ms | 345 → 381 | `__json_value_module_MOD_string_to_int`            | `./json_value_module.F90`       |
|  +9.6% | +29.00ms |   7.9% → 8.7% | 303.0ms → 332.0ms | 303 → 332 | `__json_string_utilities_MOD_string_to_integer`    | `./json_string_utilities.F90`   |
| +18.8% | +15.00ms |   2.1% → 2.5% |   80.0ms → 95.0ms |   80 → 95 | `__json_value_module_MOD_json_value_create`        | `./json_value_module.F90`       |
| +18.6% | +13.00ms |   1.8% → 2.2% |   70.0ms → 83.0ms |   70 → 83 | `__json_value_module_MOD_json_value_destroy`       | `./json_value_module.F90`       |
| +18.6% | +13.00ms |   1.8% → 2.2% |   70.0ms → 83.0ms |   70 → 83 | `__json_file_module_MOD_json_file_destroy`         | `./json_file_module.F90`        |
| +54.5% | +12.00ms |   0.6% → 0.9% |   22.0ms → 34.0ms |   22 → 34 | `__json_value_module_MOD_destroy_json_data`        | `./json_value_module.F90`       |
| +22.7% |  +5.00ms |   0.6% → 0.7% |   22.0ms → 27.0ms |   22 → 27 | `__json_string_utilities_MOD_unescape_string`      | `./json_string_utilities.F90`   |
| +37.5% |  +3.00ms |   0.2% → 0.3% |    8.0ms → 11.0ms |    8 → 11 | `__json_value_module_MOD_json_value_add_member`    | `./json_value_module.F90`       |
|    new |  +2.00ms |   0.0% → 0.1% |       0ms → 2.0ms |     0 → 2 | `__json_value_module_MOD_to_array`                 | `./json_value_module.F90`       |
|  +5.9% |  +1.00ms |   0.4% → 0.5% |   17.0ms → 18.0ms |   17 → 18 | `__json_value_module_MOD_json_get_by_path_default` | `./json_value_module.F90`       |
|  +5.9% |  +1.00ms |   0.4% → 0.5% |   17.0ms → 18.0ms |   17 → 18 | `__json_value_module_MOD_json_get_by_path`         | `./json_value_module.F90`       |
|  +5.6% |  +1.00ms |          0.5% |   18.0ms → 19.0ms |   18 → 19 | `__json_value_module_MOD_json_get_string_by_path`  | `./json_get_scalar_by_path.inc` |
|  +5.6% |  +1.00ms |          0.5% |   18.0ms → 19.0ms |   18 → 19 | `__json_file_module_MOD_json_file_get_string`      | `./json_file_module.F90`        |
| +50.0% |  +1.00ms |          0.1% |     2.0ms → 3.0ms |     2 → 3 | `__json_value_module_MOD_json_info`                | `./json_value_module.F90`       |

##### Native

|  Change |    Delta |            % |              Time |   Samples | Function   | Location                                          |
| ------: | -------: | -----------: | ----------------: | --------: | ---------- | ------------------------------------------------- |
|  +67.3% | +37.00ms |  1.4% → 2.4% |   55.0ms → 92.0ms |   55 → 92 | `0x92a9b`  | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  +60.6% | +20.00ms |  0.9% → 1.4% |   33.0ms → 53.0ms |   33 → 53 | `0x1189ec` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|   +6.1% | +14.00ms |  6.0% → 6.4% | 231.0ms → 245.0ms | 231 → 245 | `0x9245b`  | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  +77.8% | +14.00ms |  0.5% → 0.8% |   18.0ms → 32.0ms |   18 → 32 | `0x108f53` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| +216.7% | +13.00ms |  0.2% → 0.5% |    6.0ms → 19.0ms |    6 → 19 | `0x108efb` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  +24.4% | +11.00ms |  1.2% → 1.5% |   45.0ms → 56.0ms |   45 → 56 | `0x929c4`  | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  +71.4% | +10.00ms |  0.4% → 0.6% |   14.0ms → 24.0ms |   14 → 24 | `0x107fa7` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  +81.8% |  +9.00ms |  0.3% → 0.5% |   11.0ms → 20.0ms |   11 → 20 | `0x10a0fb` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| +140.0% |  +7.00ms |  0.1% → 0.3% |    5.0ms → 12.0ms |    5 → 12 | `0x1186dc` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| +350.0% |  +7.00ms |  0.1% → 0.2% |     2.0ms → 9.0ms |     2 → 9 | `0x118730` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  +50.0% |  +7.00ms |  0.4% → 0.6% |   14.0ms → 21.0ms |   14 → 21 | `0x9123c`  | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  +10.0% |  +6.00ms |  1.6% → 1.7% |   60.0ms → 66.0ms |   60 → 66 | `0x11899c` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  +33.3% |  +6.00ms |  0.5% → 0.6% |   18.0ms → 24.0ms |   18 → 24 | `0x10b283` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| +200.0% |  +6.00ms |  0.1% → 0.2% |     3.0ms → 9.0ms |     3 → 9 | `0x8faa0`  | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
| +120.0% |  +6.00ms |  0.1% → 0.3% |    5.0ms → 11.0ms |    5 → 11 | `0x10a00b` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  +10.6% |  +5.00ms |  1.2% → 1.4% |   47.0ms → 52.0ms |   47 → 52 | `0x8faf4`  | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  +38.5% |  +5.00ms |  0.3% → 0.5% |   13.0ms → 18.0ms |   13 → 18 | `0x8eb7f`  | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
| +125.0% |  +5.00ms |  0.1% → 0.2% |     4.0ms → 9.0ms |     4 → 9 | `0x10890b` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| +125.0% |  +5.00ms |  0.1% → 0.2% |     4.0ms → 9.0ms |     4 → 9 | `0x108537` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| +500.0% |  +5.00ms | <0.1% → 0.2% |     1.0ms → 6.0ms |     1 → 6 | `0x91544`  | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |

#### Improvements

Functions with the largest decrease in time spent within the function and its callees. Categories account for at least 1.0% of self time on the base or the current side.

| Change |    Delta |              % |             Time |       Samples | Function                                  | Location                                          |
| -----: | -------: | -------------: | ---------------: | ------------: | ----------------------------------------- | ------------------------------------------------- |
|  -4.4% | -55.00ms |  32.7% → 31.6% |    1.26s → 1.20s | 1,260 → 1,205 | `__json_value_module_MOD_parse_value`     | `./json_value_module.F90`                         |
|  -2.6% | -46.00ms |  45.4% → 44.6% |    1.74s → 1.70s | 1,746 → 1,700 | `__json_value_module_MOD_parse_string`    | `./json_value_module.F90`                         |
|  -1.1% | -42.00ms |  97.3% → 97.2% |    3.74s → 3.70s | 3,745 → 3,703 | `__json_file_module_MOD_json_file_load`   | `./json_file_module.F90`                          |
|  -1.1% | -41.00ms |  97.3% → 97.2% |    3.74s → 3.70s | 3,744 → 3,703 | `__json_value_module_MOD_json_parse_file` | `./json_value_module.F90`                         |
|  -1.0% | -40.00ms | 100.0% → 99.9% |    3.84s → 3.80s | 3,849 → 3,809 | `MAIN__`                                  | `/out/profile.f90`                                |
|  -1.0% | -38.00ms |         100.0% |    3.84s → 3.81s | 3,849 → 3,811 | `main`                                    | `/out/profile.f90`                                |
|  -1.0% | -38.00ms |         100.0% |    3.84s → 3.81s | 3,849 → 3,811 | `0x27743`                                 | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  -1.0% | -38.00ms |         100.0% |    3.84s → 3.81s | 3,849 → 3,811 | `0x27817`                                 | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  -1.0% | -38.00ms |         100.0% |    3.84s → 3.81s | 3,849 → 3,811 | `_start`                                  | `<unknown>`                                       |
|  -0.8% | -28.00ms |  94.8% → 95.0% |    3.64s → 3.62s | 3,648 → 3,620 | `__json_value_module_MOD_parse_object`    | `./json_value_module.F90`                         |
| -25.5% | -26.00ms |    2.7% → 2.0% | 102.0ms → 76.0ms |      102 → 76 | `_init`                                   | `<unknown>`                                       |
|  -0.7% | -25.00ms |  94.6% → 94.9% |    3.64s → 3.61s | 3,643 → 3,618 | `__json_value_module_MOD_parse_array`     | `./json_value_module.F90`                         |
| -36.9% | -24.00ms |    1.7% → 1.1% |  65.0ms → 41.0ms |       65 → 41 | `0x92f67`                                 | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
| -34.4% | -22.00ms |    1.7% → 1.1% |  64.0ms → 42.0ms |       64 → 42 | `0x10a47b`                                | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| -44.9% | -22.00ms |    1.3% → 0.7% |  49.0ms → 27.0ms |       49 → 27 | `0x91c5f`                                 | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
| -28.6% | -18.00ms |    1.6% → 1.2% |  63.0ms → 45.0ms |       63 → 45 | `0x118680`                                | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| -76.2% | -16.00ms |    0.5% → 0.1% |   21.0ms → 5.0ms |        21 → 5 | `0x10c300`                                | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  -0.7% | -14.00ms |  53.5% → 53.7% |    2.06s → 2.04s | 2,061 → 2,047 | `__json_value_module_MOD_pop_char.part.0` | `./json_value_module.F90`                         |
| -56.5% | -13.00ms |    0.6% → 0.3% |  23.0ms → 10.0ms |       23 → 10 | `0x1186f8`                                | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| -18.1% | -13.00ms |    1.9% → 1.5% |  72.0ms → 59.0ms |       72 → 59 | `0x118970`                                | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### Ours

|  Change |    Delta |              % |            Time |       Samples | Function                                               | Location                      |
| ------: | -------: | -------------: | --------------: | ------------: | ------------------------------------------------------ | ----------------------------- |
|   -4.4% | -55.00ms |  32.7% → 31.6% |   1.26s → 1.20s | 1,260 → 1,205 | `__json_value_module_MOD_parse_value`                  | `./json_value_module.F90`     |
|   -2.6% | -46.00ms |  45.4% → 44.6% |   1.74s → 1.70s | 1,746 → 1,700 | `__json_value_module_MOD_parse_string`                 | `./json_value_module.F90`     |
|   -1.1% | -42.00ms |  97.3% → 97.2% |   3.74s → 3.70s | 3,745 → 3,703 | `__json_file_module_MOD_json_file_load`                | `./json_file_module.F90`      |
|   -1.1% | -41.00ms |  97.3% → 97.2% |   3.74s → 3.70s | 3,744 → 3,703 | `__json_value_module_MOD_json_parse_file`              | `./json_value_module.F90`     |
|   -1.0% | -40.00ms | 100.0% → 99.9% |   3.84s → 3.80s | 3,849 → 3,809 | `MAIN__`                                               | `/out/profile.f90`            |
|   -1.0% | -38.00ms |         100.0% |   3.84s → 3.81s | 3,849 → 3,811 | `main`                                                 | `/out/profile.f90`            |
|   -0.8% | -28.00ms |  94.8% → 95.0% |   3.64s → 3.62s | 3,648 → 3,620 | `__json_value_module_MOD_parse_object`                 | `./json_value_module.F90`     |
|   -0.7% | -25.00ms |  94.6% → 94.9% |   3.64s → 3.61s | 3,643 → 3,618 | `__json_value_module_MOD_parse_array`                  | `./json_value_module.F90`     |
|   -0.7% | -14.00ms |  53.5% → 53.7% |   2.06s → 2.04s | 2,061 → 2,047 | `__json_value_module_MOD_pop_char.part.0`              | `./json_value_module.F90`     |
|  -60.0% |  -3.00ms |           0.1% |   5.0ms → 2.0ms |         5 → 2 | `__json_value_module_MOD_json_value_get_child_by_name` | `./json_value_module.F90`     |
|  -50.0% |  -2.00ms |           0.1% |   4.0ms → 2.0ms |         4 → 2 | `__json_value_module_MOD_pop_char`                     | `./json_value_module.F90`     |
| removed |  -2.00ms |    0.1% → 0.0% |     2.0ms → 0ms |         2 → 0 | `__json_value_module_MOD_json_initialize`              | `./json_value_module.F90`     |
| removed |  -2.00ms |    0.1% → 0.0% |     2.0ms → 0ms |         2 → 0 | `__json_file_module_MOD_initialize_json_core_in_file`  | `./json_file_module.F90`      |
|  -66.7% |  -2.00ms |   0.1% → <0.1% |   3.0ms → 1.0ms |         3 → 1 | `__json_value_module_MOD_name_strings_equal`           | `./json_value_module.F90`     |
|   -1.6% |  -1.00ms |           1.6% | 61.0ms → 60.0ms |       61 → 60 | `__json_value_module_MOD_parse_for_chars`              | `./json_value_module.F90`     |
| removed |  -1.00ms |   <0.1% → 0.0% |     1.0ms → 0ms |         1 → 0 | `__json_string_utilities_MOD_string_to_real`           | `./json_string_utilities.F90` |
| removed |  -1.00ms |   <0.1% → 0.0% |     1.0ms → 0ms |         1 → 0 | `__json_value_module_MOD_string_to_dble`               | `./json_value_module.F90`     |
|  -33.3% |  -1.00ms |           0.1% |   3.0ms → 2.0ms |         3 → 2 | `__json_value_module_MOD_to_integer`                   | `./json_value_module.F90`     |

##### Native

| Change |    Delta |           % |              Time |       Samples | Function   | Location                                          |
| -----: | -------: | ----------: | ----------------: | ------------: | ---------- | ------------------------------------------------- |
|  -1.0% | -38.00ms |      100.0% |     3.84s → 3.81s | 3,849 → 3,811 | `0x27743`  | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  -1.0% | -38.00ms |      100.0% |     3.84s → 3.81s | 3,849 → 3,811 | `0x27817`  | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  -1.0% | -38.00ms |      100.0% |     3.84s → 3.81s | 3,849 → 3,811 | `_start`   | `<unknown>`                                       |
| -25.5% | -26.00ms | 2.7% → 2.0% |  102.0ms → 76.0ms |      102 → 76 | `_init`    | `<unknown>`                                       |
| -36.9% | -24.00ms | 1.7% → 1.1% |   65.0ms → 41.0ms |       65 → 41 | `0x92f67`  | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
| -34.4% | -22.00ms | 1.7% → 1.1% |   64.0ms → 42.0ms |       64 → 42 | `0x10a47b` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| -44.9% | -22.00ms | 1.3% → 0.7% |   49.0ms → 27.0ms |       49 → 27 | `0x91c5f`  | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
| -28.6% | -18.00ms | 1.6% → 1.2% |   63.0ms → 45.0ms |       63 → 45 | `0x118680` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| -76.2% | -16.00ms | 0.5% → 0.1% |    21.0ms → 5.0ms |        21 → 5 | `0x10c300` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| -56.5% | -13.00ms | 0.6% → 0.3% |   23.0ms → 10.0ms |       23 → 10 | `0x1186f8` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| -18.1% | -13.00ms | 1.9% → 1.5% |   72.0ms → 59.0ms |       72 → 59 | `0x118970` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| -26.7% | -12.00ms | 1.2% → 0.9% |   45.0ms → 33.0ms |       45 → 33 | `0x118720` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| -20.7% | -12.00ms | 1.5% → 1.2% |   58.0ms → 46.0ms |       58 → 46 | `0x118994` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  -8.3% | -11.00ms | 3.4% → 3.2% | 132.0ms → 121.0ms |     132 → 121 | `0x109623` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| -50.0% |  -9.00ms | 0.5% → 0.2% |    18.0ms → 9.0ms |        18 → 9 | `0x90dc0`  | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
| -80.0% |  -8.00ms | 0.3% → 0.1% |    10.0ms → 2.0ms |        10 → 2 | `0x8fbf0`  | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
| -61.5% |  -8.00ms | 0.3% → 0.1% |    13.0ms → 5.0ms |        13 → 5 | `0x9980f`  | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
| -57.1% |  -8.00ms | 0.4% → 0.2% |    14.0ms → 6.0ms |        14 → 6 | `0x1c42b`  | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| -57.1% |  -8.00ms | 0.4% → 0.2% |    14.0ms → 6.0ms |        14 → 6 | `0xfa6b3`  | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| -63.6% |  -7.00ms | 0.3% → 0.1% |    11.0ms → 4.0ms |        11 → 4 | `0x92260`  | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |

#### Callees

Callees with the largest change in contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `__json_value_module_MOD_parse_number` (`./json_value_module.F90`)

|  Change |    Delta |             % |              Time |   Samples | Callee                                          | Location                                          |
| ------: | -------: | ------------: | ----------------: | --------: | ----------------------------------------------- | ------------------------------------------------- |
|  +10.4% | +36.00ms | 81.6% → 80.7% | 345.0ms → 381.0ms | 345 → 381 | `__json_value_module_MOD_string_to_int`         | `./json_value_module.F90`                         |
|  +47.5% | +19.00ms |  9.5% → 12.5% |   40.0ms → 59.0ms |   40 → 59 | `__json_value_module_MOD_pop_char.part.0`       | `./json_value_module.F90`                         |
|  -80.0% |  -4.00ms |   1.2% → 0.2% |     5.0ms → 1.0ms |     5 → 1 | `0x92240`                                       | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
| removed |  -3.00ms |   0.7% → 0.0% |       3.0ms → 0ms |     3 → 0 | `0x1186f8`                                      | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|     new |  +2.00ms |   0.0% → 0.4% |       0ms → 2.0ms |     0 → 2 | `__json_string_utilities_MOD_string_to_integer` | `./json_string_utilities.F90`                     |

##### `0x92a9b` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |    Delta |             % |            Time | Samples | Callee    | Location                               |
| ------: | -------: | ------------: | --------------: | ------: | --------- | -------------------------------------- |
|  +41.9% | +13.00ms | 56.4% → 47.8% | 31.0ms → 44.0ms | 31 → 44 | `0x8faf4` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|  -75.0% |  -6.00ms |  14.5% → 2.2% |   8.0ms → 2.0ms |   8 → 2 | `0x8fbf0` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| +200.0% |  +6.00ms |   5.5% → 9.8% |   3.0ms → 9.0ms |   3 → 9 | `0x8faa0` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| +500.0% |  +5.00ms |   1.8% → 6.5% |   1.0ms → 6.0ms |   1 → 6 | `0x8fae0` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| +400.0% |  +4.00ms |   1.8% → 5.4% |   1.0ms → 5.0ms |   1 → 5 | `0x8fbc8` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `__json_value_module_MOD_string_to_int` (`./json_value_module.F90`)

|  Change |    Delta |             % |              Time |   Samples | Callee                                          | Location                                          |
| ------: | -------: | ------------: | ----------------: | --------: | ----------------------------------------------- | ------------------------------------------------- |
|   +8.2% | +24.00ms | 84.9% → 83.2% | 293.0ms → 317.0ms | 293 → 317 | `__json_string_utilities_MOD_string_to_integer` | `./json_string_utilities.F90`                     |
|  -70.0% |  -7.00ms |   2.9% → 0.8% |    10.0ms → 3.0ms |    10 → 3 | `0x92240`                                       | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
| +250.0% |  +5.00ms |   0.6% → 1.8% |     2.0ms → 7.0ms |     2 → 7 | `0x118730`                                      | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  +57.1% |  +4.00ms |   2.0% → 2.9% |    7.0ms → 11.0ms |    7 → 11 | `0x929c4`                                       | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
| removed |  -3.00ms |   0.9% → 0.0% |       3.0ms → 0ms |     3 → 0 | `0x1186e8`                                      | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `__json_string_utilities_MOD_string_to_integer` (`./json_string_utilities.F90`)

|  Change |    Delta |             % |              Time |   Samples | Callee     | Location                                          |
| ------: | -------: | ------------: | ----------------: | --------: | ---------- | ------------------------------------------------- |
|  +77.8% | +14.00ms |   5.9% → 9.6% |   18.0ms → 32.0ms |   18 → 32 | `0x108f53` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| +200.0% | +12.00ms |   2.0% → 5.4% |    6.0ms → 18.0ms |    6 → 18 | `0x108efb` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| +100.0% | +10.00ms |   3.3% → 6.0% |   10.0ms → 20.0ms |   10 → 20 | `0x10a0fb` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|   -5.5% |  -7.00ms | 41.9% → 36.1% | 127.0ms → 120.0ms | 127 → 120 | `0x109623` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| +120.0% |  +6.00ms |   1.7% → 3.3% |    5.0ms → 11.0ms |    5 → 11 | `0x10a00b` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `__json_value_module_MOD_json_value_create` (`./json_value_module.F90`)

|  Change |    Delta |             % |            Time | Samples | Callee    | Location                               |
| ------: | -------: | ------------: | --------------: | ------: | --------- | -------------------------------------- |
|  +27.4% | +17.00ms | 77.5% → 83.2% | 62.0ms → 79.0ms | 62 → 79 | `0x9245b` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed |  -2.00ms |   2.5% → 0.0% |     2.0ms → 0ms |   2 → 0 | `0x92260` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed |  -2.00ms |   2.5% → 0.0% |     2.0ms → 0ms |   2 → 0 | `0x923e0` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|  -14.3% |  -1.00ms |   8.8% → 6.3% |   7.0ms → 6.0ms |   7 → 6 | `0x92284` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|     new |  +1.00ms |   0.0% → 1.1% |     0ms → 1.0ms |   0 → 1 | `0x92478` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x9245b` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |   Delta |           % |            Time | Samples | Callee    | Location                               |
| ------: | ------: | ----------: | --------------: | ------: | --------- | -------------------------------------- |
|  -50.0% | -9.00ms | 7.8% → 3.7% |  18.0ms → 9.0ms |  18 → 9 | `0x90dc0` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|  +61.5% | +8.00ms | 5.6% → 8.6% | 13.0ms → 21.0ms | 13 → 21 | `0x9123c` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| +500.0% | +5.00ms | 0.4% → 2.4% |   1.0ms → 6.0ms |   1 → 6 | `0x91544` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|  -57.1% | -4.00ms | 3.0% → 1.2% |   7.0ms → 3.0ms |   7 → 3 | `0x915c8` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|  -75.0% | -3.00ms | 1.7% → 0.4% |   4.0ms → 1.0ms |   4 → 1 | `0x91618` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x108f53` (`/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|  Change |    Delta |             % |            Time | Samples | Callee     | Location                                          |
| ------: | -------: | ------------: | --------------: | ------: | ---------- | ------------------------------------------------- |
|  +71.4% | +10.00ms | 77.8% → 75.0% | 14.0ms → 24.0ms | 14 → 24 | `0x107fa7` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|     new |  +2.00ms |   0.0% → 6.3% |     0ms → 2.0ms |   0 → 2 | `0x107e14` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  +50.0% |  +1.00ms |  11.1% → 9.4% |   2.0ms → 3.0ms |   2 → 3 | `0x107d13` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| removed |  -1.00ms |   5.6% → 0.0% |     1.0ms → 0ms |   1 → 0 | `0x107dd4` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|     new |  +1.00ms |   0.0% → 3.1% |     0ms → 1.0ms |   0 → 1 | `0x107ca4` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `__json_value_module_MOD_json_value_destroy` (`./json_value_module.F90`)

|  Change |    Delta |             % |            Time | Samples | Callee                                       | Location                               |
| ------: | -------: | ------------: | --------------: | ------: | -------------------------------------------- | -------------------------------------- |
|  +18.6% | +13.00ms |        100.0% | 70.0ms → 83.0ms | 70 → 83 | `__json_value_module_MOD_json_value_destroy` | `./json_value_module.F90`              |
|  +40.0% |  +8.00ms | 28.6% → 33.7% | 20.0ms → 28.0ms | 20 → 28 | `__json_value_module_MOD_destroy_json_data`  | `./json_value_module.F90`              |
|  +18.8% |  +3.00ms |         22.9% | 16.0ms → 19.0ms | 16 → 19 | `0x92a9b`                                    | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed |  -3.00ms |   4.3% → 0.0% |     3.0ms → 0ms |   3 → 0 | `0x92a58`                                    | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| +300.0% |  +3.00ms |   1.4% → 4.8% |   1.0ms → 4.0ms |   1 → 4 | `_init`                                      | `<unknown>`                            |

##### `__json_file_module_MOD_json_file_destroy` (`./json_file_module.F90`)

| Change |    Delta |      % |            Time | Samples | Callee                                       | Location                  |
| -----: | -------: | -----: | --------------: | ------: | -------------------------------------------- | ------------------------- |
| +18.6% | +13.00ms | 100.0% | 70.0ms → 83.0ms | 70 → 83 | `__json_value_module_MOD_json_value_destroy` | `./json_value_module.F90` |

##### `0x108efb` (`/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|  Change |   Delta |             % |          Time | Samples | Callee     | Location                                          |
| ------: | ------: | ------------: | ------------: | ------: | ---------- | ------------------------------------------------- |
| +125.0% | +5.00ms | 66.7% → 47.4% | 4.0ms → 9.0ms |   4 → 9 | `0x10890b` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| +500.0% | +5.00ms | 16.7% → 31.6% | 1.0ms → 6.0ms |   1 → 6 | `0x108537` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| removed | -1.00ms |  16.7% → 0.0% |   1.0ms → 0ms |   1 → 0 | `0x1084d0` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|     new | +1.00ms |   0.0% → 5.3% |   0ms → 1.0ms |   0 → 1 | `0x10ebc0` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|     new | +1.00ms |   0.0% → 5.3% |   0ms → 1.0ms |   0 → 1 | `0x108774` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `__json_value_module_MOD_destroy_json_data` (`./json_value_module.F90`)

|  Change |   Delta |             % |          Time | Samples | Callee    | Location                               |
| ------: | ------: | ------------: | ------------: | ------: | --------- | -------------------------------------- |
| +125.0% | +5.00ms | 18.2% → 26.5% | 4.0ms → 9.0ms |   4 → 9 | `0x92a9b` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|  -20.0% | -1.00ms | 22.7% → 11.8% | 5.0ms → 4.0ms |   5 → 4 | `0x929e0` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x107fa7` (`/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|  Change |   Delta |             % |          Time | Samples | Callee     | Location                                          |
| ------: | ------: | ------------: | ------------: | ------: | ---------- | ------------------------------------------------- |
| removed | -3.00ms |  21.4% → 0.0% |   3.0ms → 0ms |   3 → 0 | `0x10365c` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| removed | -2.00ms |  14.3% → 0.0% |   2.0ms → 0ms |   2 → 0 | `0x103618` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| +100.0% | +2.00ms | 14.3% → 16.7% | 2.0ms → 4.0ms |   2 → 4 | `0x10408b` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|     new | +2.00ms |   0.0% → 8.3% |   0ms → 2.0ms |   0 → 2 | `0x104070` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|     new | +2.00ms |   0.0% → 8.3% |   0ms → 2.0ms |   0 → 2 | `0x10419c` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `0x10a0fb` (`/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|  Change |   Delta |             % |          Time | Samples | Callee     | Location                                          |
| ------: | ------: | ------------: | ------------: | ------: | ---------- | ------------------------------------------------- |
| +300.0% | +3.00ms |  9.1% → 20.0% | 1.0ms → 4.0ms |   1 → 4 | `0x109d93` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| +150.0% | +3.00ms | 18.2% → 25.0% | 2.0ms → 5.0ms |   2 → 5 | `0x109d6f` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|     new | +2.00ms |  0.0% → 10.0% |   0ms → 2.0ms |   0 → 2 | `0x109c80` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  +16.7% | +1.00ms | 54.5% → 35.0% | 6.0ms → 7.0ms |   6 → 7 | `0x109d07` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| removed | -1.00ms |   9.1% → 0.0% |   1.0ms → 0ms |   1 → 0 | `0x109d08` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `0x10b283` (`/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|  Change |   Delta |             % |          Time | Samples | Callee     | Location                                          |
| ------: | ------: | ------------: | ------------: | ------: | ---------- | ------------------------------------------------- |
| +300.0% | +6.00ms | 11.1% → 33.3% | 2.0ms → 8.0ms |   2 → 8 | `0x1186dc` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|     new | +4.00ms |  0.0% → 16.7% |   0ms → 4.0ms |   0 → 4 | `0x118708` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| removed | -2.00ms |  11.1% → 0.0% |   2.0ms → 0ms |   2 → 0 | `0x10ac10` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| removed | -2.00ms |  11.1% → 0.0% |   2.0ms → 0ms |   2 → 0 | `0x1186ec` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  -12.5% | -1.00ms | 44.4% → 29.2% | 8.0ms → 7.0ms |   8 → 7 | `0x10ab63` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `__json_string_utilities_MOD_unescape_string` (`./json_string_utilities.F90`)

|  Change |   Delta |           % |        Time | Samples | Callee    | Location                               |
| ------: | ------: | ----------: | ----------: | ------: | --------- | -------------------------------------- |
| removed | -1.00ms | 4.5% → 0.0% | 1.0ms → 0ms |   1 → 0 | `0x92260` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed | -1.00ms | 4.5% → 0.0% | 1.0ms → 0ms |   1 → 0 | `0x92284` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|     new | +1.00ms | 0.0% → 3.7% | 0ms → 1.0ms |   0 → 1 | `0x92a9b` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|     new | +1.00ms | 0.0% → 3.7% | 0ms → 1.0ms |   0 → 1 | `0x92f67` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `__json_value_module_MOD_json_value_add_member` (`./json_value_module.F90`)

| Change |   Delta |             % |          Time | Samples | Callee                                          | Location                  |
| -----: | ------: | ------------: | ------------: | ------: | ----------------------------------------------- | ------------------------- |
| +16.7% | +1.00ms | 75.0% → 63.6% | 6.0ms → 7.0ms |   6 → 7 | `__json_value_module_MOD_json_value_add_member` | `./json_value_module.F90` |
| +50.0% | +1.00ms | 25.0% → 27.3% | 2.0ms → 3.0ms |   2 → 3 | `__json_value_module_MOD_json_info`             | `./json_value_module.F90` |

##### `__json_value_module_MOD_to_array` (`./json_value_module.F90`)

| Change |   Delta |             % |        Time | Samples | Callee                                      | Location                  |
| -----: | ------: | ------------: | ----------: | ------: | ------------------------------------------- | ------------------------- |
|    new | +2.00ms | 0.0% → 100.0% | 0ms → 2.0ms |   0 → 2 | `__json_value_module_MOD_destroy_json_data` | `./json_value_module.F90` |

##### `__json_value_module_MOD_json_get_by_path_default` (`./json_value_module.F90`)

|  Change |   Delta |             % |            Time | Samples | Callee                                                 | Location                                          |
| ------: | ------: | ------------: | --------------: | ------: | ------------------------------------------------------ | ------------------------------------------------- |
|  +30.0% | +3.00ms | 58.8% → 72.2% | 10.0ms → 13.0ms | 10 → 13 | `__json_string_utilities_MOD_string_to_integer`        | `./json_string_utilities.F90`                     |
|  -60.0% | -3.00ms | 29.4% → 11.1% |   5.0ms → 2.0ms |   5 → 2 | `__json_value_module_MOD_json_value_get_child_by_name` | `./json_value_module.F90`                         |
| removed | -1.00ms |   5.9% → 0.0% |     1.0ms → 0ms |   1 → 0 | `0x92240`                                              | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
|     new | +1.00ms |   0.0% → 5.6% |     0ms → 1.0ms |   0 → 1 | `0x105f60`                                             | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|     new | +1.00ms |   0.0% → 5.6% |     0ms → 1.0ms |   0 → 1 | `0x118730`                                             | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `__json_value_module_MOD_json_get_by_path` (`./json_value_module.F90`)

| Change |   Delta |      % |            Time | Samples | Callee                                             | Location                  |
| -----: | ------: | -----: | --------------: | ------: | -------------------------------------------------- | ------------------------- |
|  +5.9% | +1.00ms | 100.0% | 17.0ms → 18.0ms | 17 → 18 | `__json_value_module_MOD_json_get_by_path_default` | `./json_value_module.F90` |

##### `__json_value_module_MOD_json_get_string_by_path` (`./json_get_scalar_by_path.inc`)

| Change |   Delta |             % |            Time | Samples | Callee                                     | Location                  |
| -----: | ------: | ------------: | --------------: | ------: | ------------------------------------------ | ------------------------- |
|  +5.9% | +1.00ms | 94.4% → 94.7% | 17.0ms → 18.0ms | 17 → 18 | `__json_value_module_MOD_json_get_by_path` | `./json_value_module.F90` |

##### `__json_file_module_MOD_json_file_get_string` (`./json_file_module.F90`)

| Change |   Delta |      % |            Time | Samples | Callee                                            | Location                        |
| -----: | ------: | -----: | --------------: | ------: | ------------------------------------------------- | ------------------------------- |
|  +5.6% | +1.00ms | 100.0% | 18.0ms → 19.0ms | 18 → 19 | `__json_value_module_MOD_json_get_string_by_path` | `./json_get_scalar_by_path.inc` |

##### `0x10a00b` (`/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|  Change |   Delta |             % |          Time | Samples | Callee    | Location                                          |
| ------: | ------: | ------------: | ------------: | ------: | --------- | ------------------------------------------------- |
| +133.3% | +4.00ms | 60.0% → 63.6% | 3.0ms → 7.0ms |   3 → 7 | `0x92a9b` | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
| +100.0% | +1.00ms | 20.0% → 18.2% | 1.0ms → 2.0ms |   1 → 2 | `0x929e0` | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
|     new | +1.00ms |   0.0% → 9.1% |   0ms → 1.0ms |   0 → 1 | `0xfa3b4` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `0x8eb7f` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |   Delta |             % |          Time | Samples | Callee    | Location                               |
| ------: | ------: | ------------: | ------------: | ------: | --------- | -------------------------------------- |
|  +50.0% | +2.00ms | 30.8% → 33.3% | 4.0ms → 6.0ms |   4 → 6 | `0x8e96c` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|     new | +2.00ms |  0.0% → 11.1% |   0ms → 2.0ms |   0 → 2 | `0x8e98c` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|  +50.0% | +1.00ms | 15.4% → 16.7% | 2.0ms → 3.0ms |   2 → 3 | `0x8e960` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| +100.0% | +1.00ms |  7.7% → 11.1% | 1.0ms → 2.0ms |   1 → 2 | `0x8e970` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed | -1.00ms |   7.7% → 0.0% |   1.0ms → 0ms |   1 → 0 | `0x8e980` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x10890b` (`/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|  Change |   Delta |            % |        Time | Samples | Callee     | Location                                          |
| ------: | ------: | -----------: | ----------: | ------: | ---------- | ------------------------------------------------- |
|     new | +3.00ms | 0.0% → 33.3% | 0ms → 3.0ms |   0 → 3 | `0x10eccf` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| removed | -2.00ms | 50.0% → 0.0% | 2.0ms → 0ms |   2 → 0 | `0x10ed48` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|     new | +2.00ms | 0.0% → 22.2% | 0ms → 2.0ms |   0 → 2 | `0x10ed80` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| removed | -1.00ms | 25.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `0x1b504`  | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|     new | +1.00ms | 0.0% → 11.1% | 0ms → 1.0ms |   0 → 1 | `0x10ed9c` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `0x108537` (`/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|  Change |   Delta |             % |          Time | Samples | Callee    | Location                                          |
| ------: | ------: | ------------: | ------------: | ------: | --------- | ------------------------------------------------- |
| +300.0% | +3.00ms | 25.0% → 44.4% | 1.0ms → 4.0ms |   1 → 4 | `0xfa8db` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  +33.3% | +1.00ms | 75.0% → 44.4% | 3.0ms → 4.0ms |   3 → 4 | `0xfa887` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|     new | +1.00ms |  0.0% → 11.1% |   0ms → 1.0ms |   0 → 1 | `0xfa888` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `__json_value_module_MOD_parse_value` (`./json_value_module.F90`)

|  Change |    Delta |             % |              Time |   Samples | Callee                                    | Location                                          |
| ------: | -------: | ------------: | ----------------: | --------: | ----------------------------------------- | ------------------------------------------------- |
|   -5.7% | -49.00ms | 68.1% → 67.1% | 858.0ms → 809.0ms | 858 → 809 | `__json_value_module_MOD_parse_string`    | `./json_value_module.F90`                         |
|  -10.3% | -19.00ms | 14.6% → 13.7% | 184.0ms → 165.0ms | 184 → 165 | `__json_value_module_MOD_pop_char.part.0` | `./json_value_module.F90`                         |
|  -38.1% |  -8.00ms |   1.7% → 1.1% |   21.0ms → 13.0ms |   21 → 13 | `0x118720`                                | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| +133.3% |  +8.00ms |   0.5% → 1.2% |    6.0ms → 14.0ms |    6 → 14 | `0x118680`                                | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  -33.3% |  -7.00ms |   1.7% → 1.2% |   21.0ms → 14.0ms |   21 → 14 | `_init`                                   | `<unknown>`                                       |

##### `__json_value_module_MOD_parse_string` (`./json_value_module.F90`)

| Change |    Delta |             % |            Time |       Samples | Callee                                        | Location                                          |
| -----: | -------: | ------------: | --------------: | ------------: | --------------------------------------------- | ------------------------------------------------- |
|  -2.3% | -28.00ms | 70.6% → 70.9% |   1.23s → 1.20s | 1,233 → 1,205 | `__json_value_module_MOD_pop_char.part.0`     | `./json_value_module.F90`                         |
| -38.9% | -21.00ms |   3.1% → 1.9% | 54.0ms → 33.0ms |       54 → 33 | `0x92f67`                                     | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
| +50.0% | +10.00ms |   1.1% → 1.8% | 20.0ms → 30.0ms |       20 → 30 | `0x1189ec`                                    | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| -25.0% |  -8.00ms |   1.8% → 1.4% | 32.0ms → 24.0ms |       32 → 24 | `0x118994`                                    | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| +22.7% |  +5.00ms |   1.3% → 1.6% | 22.0ms → 27.0ms |       22 → 27 | `__json_string_utilities_MOD_unescape_string` | `./json_string_utilities.F90`                     |

##### `__json_file_module_MOD_json_file_load` (`./json_file_module.F90`)

|  Change |    Delta |            % |          Time |       Samples | Callee                                    | Location                                          |
| ------: | -------: | -----------: | ------------: | ------------: | ----------------------------------------- | ------------------------------------------------- |
|   -1.1% | -41.00ms |       100.0% | 3.74s → 3.70s | 3,744 → 3,703 | `__json_value_module_MOD_json_parse_file` | `./json_value_module.F90`                         |
| removed |  -1.00ms | <0.1% → 0.0% |   1.0ms → 0ms |         1 → 0 | `0x118698`                                | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `__json_value_module_MOD_json_parse_file` (`./json_value_module.F90`)

|  Change |    Delta |             % |            Time |       Samples | Callee                                 | Location                                          |
| ------: | -------: | ------------: | --------------: | ------------: | -------------------------------------- | ------------------------------------------------- |
|   -0.8% | -28.00ms | 97.4% → 97.8% |   3.64s → 3.62s | 3,648 → 3,620 | `__json_value_module_MOD_parse_object` | `./json_value_module.F90`                         |
|  -70.0% |  -7.00ms |   0.3% → 0.1% |  10.0ms → 3.0ms |        10 → 3 | `0x10b3c3`                             | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  -23.8% |  -5.00ms |   0.6% → 0.4% | 21.0ms → 16.0ms |       21 → 16 | `__json_value_module_MOD_parse_value`  | `./json_value_module.F90`                         |
| removed |  -1.00ms |  <0.1% → 0.0% |     1.0ms → 0ms |         1 → 0 | `0x10b44f`                             | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `MAIN__` (`/out/profile.f90`)

|  Change |    Delta |             % |            Time |       Samples | Callee                                                | Location                                          |
| ------: | -------: | ------------: | --------------: | ------------: | ----------------------------------------------------- | ------------------------------------------------- |
|   -1.1% | -42.00ms | 97.3% → 97.2% |   3.74s → 3.70s | 3,745 → 3,703 | `__json_file_module_MOD_json_file_load`               | `./json_file_module.F90`                          |
|  +18.6% | +13.00ms |   1.8% → 2.2% | 70.0ms → 83.0ms |       70 → 83 | `__json_file_module_MOD_json_file_destroy`            | `./json_file_module.F90`                          |
|  -80.0% |  -4.00ms |  0.1% → <0.1% |   5.0ms → 1.0ms |         5 → 1 | `0x109623`                                            | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| removed |  -2.00ms |   0.1% → 0.0% |     2.0ms → 0ms |         2 → 0 | `__json_file_module_MOD_initialize_json_core_in_file` | `./json_file_module.F90`                          |
| removed |  -1.00ms |  <0.1% → 0.0% |     1.0ms → 0ms |         1 → 0 | `0x92260`                                             | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |

##### `main` (`/out/profile.f90`)

| Change |    Delta |              % |          Time |       Samples | Callee     | Location                                          |
| -----: | -------: | -------------: | ------------: | ------------: | ---------- | ------------------------------------------------- |
|  -1.0% | -40.00ms | 100.0% → 99.9% | 3.84s → 3.80s | 3,849 → 3,809 | `MAIN__`   | `/out/profile.f90`                                |
|    new |  +1.00ms |   0.0% → <0.1% |   0ms → 1.0ms |         0 → 1 | `0x118730` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|    new |  +1.00ms |   0.0% → <0.1% |   0ms → 1.0ms |         0 → 1 | `0x1185e0` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `0x27743` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change |    Delta |      % |          Time |       Samples | Callee | Location           |
| -----: | -------: | -----: | ------------: | ------------: | ------ | ------------------ |
|  -1.0% | -38.00ms | 100.0% | 3.84s → 3.81s | 3,849 → 3,811 | `main` | `/out/profile.f90` |

##### `0x27817` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change |    Delta |      % |          Time |       Samples | Callee    | Location                               |
| -----: | -------: | -----: | ------------: | ------------: | --------- | -------------------------------------- |
|  -1.0% | -38.00ms | 100.0% | 3.84s → 3.81s | 3,849 → 3,811 | `0x27743` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `_start` (`<unknown>`)

| Change |    Delta |      % |          Time |       Samples | Callee    | Location                               |
| -----: | -------: | -----: | ------------: | ------------: | --------- | -------------------------------------- |
|  -1.0% | -38.00ms | 100.0% | 3.84s → 3.81s | 3,849 → 3,811 | `0x27817` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `__json_value_module_MOD_parse_object` (`./json_value_module.F90`)

| Change |    Delta |             % |              Time |       Samples | Callee                                 | Location                                          |
| -----: | -------: | ------------: | ----------------: | ------------: | -------------------------------------- | ------------------------------------------------- |
| +14.1% | +51.00ms |  9.9% → 11.4% | 362.0ms → 413.0ms |     362 → 413 | `__json_value_module_MOD_parse_number` | `./json_value_module.F90`                         |
|  -3.9% | -47.00ms | 32.7% → 31.7% |     1.19s → 1.14s | 1,194 → 1,147 | `__json_value_module_MOD_parse_value`  | `./json_value_module.F90`                         |
|  -0.7% | -25.00ms |         99.6% |     3.63s → 3.60s | 3,632 → 3,607 | `__json_value_module_MOD_parse_object` | `./json_value_module.F90`                         |
|  -0.7% | -25.00ms |         99.9% |     3.64s → 3.61s | 3,643 → 3,618 | `__json_value_module_MOD_parse_array`  | `./json_value_module.F90`                         |
| -44.4% | -24.00ms |   1.5% → 0.8% |   54.0ms → 30.0ms |       54 → 30 | `0x118680`                             | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `__json_value_module_MOD_parse_array` (`./json_value_module.F90`)

| Change |    Delta |             % |            Time |       Samples | Callee                                      | Location                  |
| -----: | -------: | ------------: | --------------: | ------------: | ------------------------------------------- | ------------------------- |
|  -0.7% | -27.00ms | 99.9% → 99.8% |   3.63s → 3.61s | 3,639 → 3,612 | `__json_value_module_MOD_parse_object`      | `./json_value_module.F90` |
| -46.7% |  -7.00ms |   0.4% → 0.2% |  15.0ms → 8.0ms |        15 → 8 | `__json_value_module_MOD_pop_char.part.0`   | `./json_value_module.F90` |
| +66.7% |  +4.00ms |   0.2% → 0.3% |  6.0ms → 10.0ms |        6 → 10 | `__json_value_module_MOD_json_value_create` | `./json_value_module.F90` |
|  -6.7% |  -3.00ms |          1.2% | 45.0ms → 42.0ms |       45 → 42 | `__json_value_module_MOD_parse_value`       | `./json_value_module.F90` |
|  -3.3% |  -2.00ms |   1.7% → 1.6% | 61.0ms → 59.0ms |       61 → 59 | `__json_value_module_MOD_parse_number`      | `./json_value_module.F90` |

##### `0x92f67` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |    Delta |             % |            Time | Samples | Callee    | Location                               |
| ------: | -------: | ------------: | --------------: | ------: | --------- | -------------------------------------- |
|  -44.9% | -22.00ms | 75.4% → 65.9% | 49.0ms → 27.0ms | 49 → 27 | `0x91c5f` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|  -50.0% |  -2.00ms |   6.2% → 4.9% |   4.0ms → 2.0ms |   4 → 2 | `0x91bfb` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| +200.0% |  +2.00ms |   1.5% → 7.3% |   1.0ms → 3.0ms |   1 → 3 | `0x91b10` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed |  -1.00ms |   1.5% → 0.0% |     1.0ms → 0ms |   1 → 0 | `0x91b88` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|  -50.0% |  -1.00ms |   3.1% → 2.4% |   2.0ms → 1.0ms |   2 → 1 | `0x91c58` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x10a47b` (`/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|  Change |    Delta |             % |            Time | Samples | Callee     | Location                                          |
| ------: | -------: | ------------: | --------------: | ------: | ---------- | ------------------------------------------------- |
|  -76.2% | -16.00ms | 32.8% → 11.9% |  21.0ms → 5.0ms |  21 → 5 | `0x10c300` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  -14.6% |  -6.00ms | 64.1% → 83.3% | 41.0ms → 35.0ms | 41 → 35 | `0x10c353` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| removed |  -1.00ms |   1.6% → 0.0% |     1.0ms → 0ms |   1 → 0 | `0x10c318` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| removed |  -1.00ms |   1.6% → 0.0% |     1.0ms → 0ms |   1 → 0 | `0x10c460` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|     new |  +1.00ms |   0.0% → 2.4% |     0ms → 1.0ms |   0 → 1 | `0x19fd4`  | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `0x91c5f` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |   Delta |             % |           Time | Samples | Callee    | Location                               |
| ------: | ------: | ------------: | -------------: | ------: | --------- | -------------------------------------- |
|  -57.1% | -8.00ms | 28.6% → 22.2% | 14.0ms → 6.0ms |  14 → 6 | `0x8faf4` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed | -3.00ms |   6.1% → 0.0% |    3.0ms → 0ms |   3 → 0 | `0x8fce0` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed | -2.00ms |   4.1% → 0.0% |    2.0ms → 0ms |   2 → 0 | `0x8fd0c` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|  -66.7% | -2.00ms |   6.1% → 3.7% |  3.0ms → 1.0ms |   3 → 1 | `0x8fbf4` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed | -2.00ms |   4.1% → 0.0% |    2.0ms → 0ms |   2 → 0 | `0x8fcd8` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `__json_value_module_MOD_pop_char.part.0` (`./json_value_module.F90`)

|  Change |    Delta |            % |            Time | Samples | Callee     | Location                                          |
| ------: | -------: | -----------: | --------------: | ------: | ---------- | ------------------------------------------------- |
|  -34.4% | -22.00ms |  3.1% → 2.1% | 64.0ms → 42.0ms | 64 → 42 | `0x10a47b` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| +300.0% |  +3.00ms | <0.1% → 0.2% |   1.0ms → 4.0ms |   1 → 4 | `0x1098bf` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  -25.0% |  -2.00ms |  0.4% → 0.3% |   8.0ms → 6.0ms |   8 → 6 | `0x1093fb` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  -50.0% |  -1.00ms | 0.1% → <0.1% |   2.0ms → 1.0ms |   2 → 1 | `0x1093fc` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| removed |  -1.00ms | <0.1% → 0.0% |     1.0ms → 0ms |   1 → 0 | `0x10a4bc` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `__json_value_module_MOD_json_value_get_child_by_name` (`./json_value_module.F90`)

|  Change |   Delta |             % |          Time | Samples | Callee                                                 | Location                                          |
| ------: | ------: | ------------: | ------------: | ------: | ------------------------------------------------------ | ------------------------------------------------- |
|  -60.0% | -3.00ms |        100.0% | 5.0ms → 2.0ms |   5 → 2 | `__json_value_module_MOD_json_value_get_child_by_name` | `./json_value_module.F90`                         |
|  -66.7% | -2.00ms | 60.0% → 50.0% | 3.0ms → 1.0ms |   3 → 1 | `__json_value_module_MOD_name_strings_equal`           | `./json_value_module.F90`                         |
| removed | -2.00ms |  40.0% → 0.0% |   2.0ms → 0ms |   2 → 0 | `0x1184f0`                                             | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `__json_value_module_MOD_json_initialize` (`./json_value_module.F90`)

|  Change |   Delta |             % |        Time | Samples | Callee    | Location                               |
| ------: | ------: | ------------: | ----------: | ------: | --------- | -------------------------------------- |
| removed | -2.00ms | 100.0% → 0.0% | 2.0ms → 0ms |   2 → 0 | `0x92f67` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `__json_file_module_MOD_initialize_json_core_in_file` (`./json_file_module.F90`)

|  Change |   Delta |             % |        Time | Samples | Callee                                    | Location                  |
| ------: | ------: | ------------: | ----------: | ------: | ----------------------------------------- | ------------------------- |
| removed | -2.00ms | 100.0% → 0.0% | 2.0ms → 0ms |   2 → 0 | `__json_value_module_MOD_json_initialize` | `./json_value_module.F90` |

##### `__json_value_module_MOD_name_strings_equal` (`./json_value_module.F90`)

|  Change |   Delta |             % |        Time | Samples | Callee     | Location                                          |
| ------: | ------: | ------------: | ----------: | ------: | ---------- | ------------------------------------------------- |
| removed | -2.00ms |  66.7% → 0.0% | 2.0ms → 0ms |   2 → 0 | `0x95f64`  | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
| removed | -1.00ms |  33.3% → 0.0% | 1.0ms → 0ms |   1 → 0 | `0x95ec0`  | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
|     new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `0x118534` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `__json_value_module_MOD_parse_for_chars` (`./json_value_module.F90`)

|  Change |   Delta |             % |            Time | Samples | Callee                                    | Location                                          |
| ------: | ------: | ------------: | --------------: | ------: | ----------------------------------------- | ------------------------------------------------- |
|   +6.3% | +3.00ms | 78.7% → 85.0% | 48.0ms → 51.0ms | 48 → 51 | `__json_value_module_MOD_pop_char.part.0` | `./json_value_module.F90`                         |
| removed | -2.00ms |   3.3% → 0.0% |     2.0ms → 0ms |   2 → 0 | `0x106110`                                | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `__json_string_utilities_MOD_string_to_real` (`./json_string_utilities.F90`)

|  Change |   Delta |             % |        Time | Samples | Callee     | Location                                          |
| ------: | ------: | ------------: | ----------: | ------: | ---------- | ------------------------------------------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `0x1008c0` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `__json_value_module_MOD_string_to_dble` (`./json_value_module.F90`)

|  Change |   Delta |             % |        Time | Samples | Callee                                       | Location                      |
| ------: | ------: | ------------: | ----------: | ------: | -------------------------------------------- | ----------------------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `__json_string_utilities_MOD_string_to_real` | `./json_string_utilities.F90` |

##### `__json_value_module_MOD_to_integer` (`./json_value_module.F90`)

| Change |   Delta |             % |          Time | Samples | Callee    | Location                               |
| -----: | ------: | ------------: | ------------: | ------: | --------- | -------------------------------------- |
| -50.0% | -1.00ms | 66.7% → 50.0% | 2.0ms → 1.0ms |   2 → 1 | `0x92284` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|    new | +1.00ms |  0.0% → 50.0% |   0ms → 1.0ms |   0 → 1 | `0x92274` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x109623` (`/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|  Change |   Delta |             % |            Time | Samples | Callee    | Location                                          |
| ------: | ------: | ------------: | --------------: | ------: | --------- | ------------------------------------------------- |
|  -57.1% | -8.00ms |  10.6% → 5.0% |  14.0ms → 6.0ms |  14 → 6 | `0xfa6b3` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  -44.4% | -4.00ms |   6.8% → 4.1% |   9.0ms → 5.0ms |   9 → 5 | `0xfa727` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  +10.0% | +2.00ms | 15.2% → 18.2% | 20.0ms → 22.0ms | 20 → 22 | `0x9e658` | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
|   -5.7% | -2.00ms | 26.5% → 27.3% | 35.0ms → 33.0ms | 35 → 33 | `0xfa7fb` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| removed | -2.00ms |   1.5% → 0.0% |     2.0ms → 0ms |   2 → 0 | `0xfa728` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `0x9980f` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |   Delta |             % |          Time | Samples | Callee    | Location                               |
| ------: | ------: | ------------: | ------------: | ------: | --------- | -------------------------------------- |
|  -80.0% | -4.00ms | 38.5% → 20.0% | 5.0ms → 1.0ms |   5 → 1 | `0x9245b` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|  -50.0% | -2.00ms | 30.8% → 40.0% | 4.0ms → 2.0ms |   4 → 2 | `0x92284` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|  -50.0% | -1.00ms | 15.4% → 20.0% | 2.0ms → 1.0ms |   2 → 1 | `0x922bc` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed | -1.00ms |   7.7% → 0.0% |   1.0ms → 0ms |   1 → 0 | `0x922c0` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x1c42b` (`/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|  Change |   Delta |             % |           Time | Samples | Callee    | Location                               |
| ------: | ------: | ------------: | -------------: | ------: | --------- | -------------------------------------- |
|  -61.5% | -8.00ms | 92.9% → 83.3% | 13.0ms → 5.0ms |  13 → 5 | `0x9980f` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed | -1.00ms |   7.1% → 0.0% |    1.0ms → 0ms |   1 → 0 | `0x9985c` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|     new | +1.00ms |  0.0% → 16.7% |    0ms → 1.0ms |   0 → 1 | `0x99840` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0xfa6b3` (`/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

| Change |   Delta |      % |           Time | Samples | Callee    | Location                                          |
| -----: | ------: | -----: | -------------: | ------: | --------- | ------------------------------------------------- |
| -57.1% | -8.00ms | 100.0% | 14.0ms → 6.0ms |  14 → 6 | `0x1c42b` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

## Hottest call stacks

### Regressions

Call stacks with the largest increase in time spent in their leaf frame.

Common call stack: `__json_value_module_MOD_parse_object` (`./json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`./json_file_module.F90`) ← `MAIN__` (`/out/profile.f90`) ← `main` ← `0x27743` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start`

|  Change |    Delta |            % |            Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ------: | -------: | -----------: | --------------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| +366.7% | +11.00ms |  0.1% → 0.4% |  3.0ms → 14.0ms |  3 → 14 | `__json_value_module_MOD_pop_char.part.0` (`./json_value_module.F90`) ← `__json_value_module_MOD_parse_string` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| +111.1% | +10.00ms |  0.2% → 0.5% |  9.0ms → 19.0ms |  9 → 19 | `__json_value_module_MOD_pop_char.part.0` (`./json_value_module.F90`) ← `__json_value_module_MOD_parse_string` ← `__json_value_module_MOD_parse_value` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`  |
| +166.7% | +10.00ms |  0.2% → 0.4% |  6.0ms → 16.0ms |  6 → 16 | `__json_value_module_MOD_pop_char.part.0` (`./json_value_module.F90`) ← `__json_value_module_MOD_parse_string` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  +64.3% |  +9.00ms |  0.4% → 0.6% | 14.0ms → 23.0ms | 14 → 23 | `__json_value_module_MOD_pop_char.part.0` (`./json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| +266.7% |  +8.00ms |  0.1% → 0.3% |  3.0ms → 11.0ms |  3 → 11 | `__json_value_module_MOD_pop_char.part.0` (`./json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`                                                                                                                                                                                                                                                                                                |
| +200.0% |  +8.00ms |  0.1% → 0.3% |  4.0ms → 12.0ms |  4 → 12 | `__json_value_module_MOD_pop_char.part.0` (`./json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  +88.9% |  +8.00ms |  0.2% → 0.4% |  9.0ms → 17.0ms |  9 → 17 | `__json_value_module_MOD_pop_char.part.0` (`./json_value_module.F90`) ← `__json_value_module_MOD_parse_string` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|  +47.1% |  +8.00ms |  0.4% → 0.7% | 17.0ms → 25.0ms | 17 → 25 | `__json_value_module_MOD_pop_char.part.0` (`./json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| +800.0% |  +8.00ms | <0.1% → 0.2% |   1.0ms → 9.0ms |   1 → 9 | `__json_value_module_MOD_pop_char.part.0` (`./json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| +160.0% |  +8.00ms |  0.1% → 0.3% |  5.0ms → 13.0ms |  5 → 13 | `__json_value_module_MOD_pop_char.part.0` (`./json_value_module.F90`) ← `__json_value_module_MOD_parse_string` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`                                                                                                                                                                                                                                                                                                                                                                                                                           |
| +350.0% |  +7.00ms |  0.1% → 0.2% |   2.0ms → 9.0ms |   2 → 9 | `__json_value_module_MOD_pop_char.part.0` (`./json_value_module.F90`) ← `__json_value_module_MOD_parse_number` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| +175.0% |  +7.00ms |  0.1% → 0.3% |  4.0ms → 11.0ms |  4 → 11 | `__json_value_module_MOD_pop_char.part.0` (`./json_value_module.F90`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| +116.7% |  +7.00ms |  0.2% → 0.3% |  6.0ms → 13.0ms |  6 → 13 | `__json_value_module_MOD_pop_char.part.0` (`./json_value_module.F90`) ← `__json_value_module_MOD_parse_string` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  +75.0% |  +6.00ms |  0.2% → 0.4% |  8.0ms → 14.0ms |  8 → 14 | `__json_value_module_MOD_pop_char.part.0` (`./json_value_module.F90`) ← `__json_value_module_MOD_parse_string` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  +85.7% |  +6.00ms |  0.2% → 0.3% |  7.0ms → 13.0ms |  7 → 13 | `__json_value_module_MOD_pop_char.part.0` (`./json_value_module.F90`) ← `__json_value_module_MOD_parse_string` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| +200.0% |  +6.00ms |  0.1% → 0.2% |   3.0ms → 9.0ms |   3 → 9 | `__json_value_module_MOD_pop_char.part.0` (`./json_value_module.F90`) ← `__json_value_module_MOD_parse_value` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| +300.0% |  +6.00ms |  0.1% → 0.2% |   2.0ms → 8.0ms |   2 → 8 | `__json_value_module_MOD_pop_char.part.0` (`./json_value_module.F90`) ← `__json_value_module_MOD_parse_number` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| +150.0% |  +6.00ms |  0.1% → 0.3% |  4.0ms → 10.0ms |  4 → 10 | `__json_value_module_MOD_pop_char.part.0` (`./json_value_module.F90`) ← `__json_value_module_MOD_parse_value` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| +600.0% |  +6.00ms | <0.1% → 0.2% |   1.0ms → 7.0ms |   1 → 7 | `__json_value_module_MOD_pop_char.part.0` (`./json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` |
|     new |  +6.00ms |  0.0% → 0.2% |     0ms → 6.0ms |   0 → 6 | `__json_value_module_MOD_pop_char.part.0` (`./json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`                                                                                   |

### Improvements

Call stacks with the largest decrease in time spent in their leaf frame.

Common call stack: `__json_value_module_MOD_json_parse_file` (`./json_value_module.F90`) ← `__json_file_module_MOD_json_file_load` (`./json_file_module.F90`) ← `MAIN__` (`/out/profile.f90`) ← `main` ← `0x27743` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start`

|  Change |    Delta |            % |            Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ------: | -------: | -----------: | --------------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|  -24.2% | -16.00ms |  1.7% → 1.3% | 66.0ms → 50.0ms | 66 → 50 | `__json_value_module_MOD_pop_char.part.0` (`./json_value_module.F90`) ← `__json_value_module_MOD_parse_string` ← `__json_value_module_MOD_parse_value` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  -57.9% | -11.00ms |  0.5% → 0.2% |  19.0ms → 8.0ms |  19 → 8 | `__json_value_module_MOD_pop_char.part.0` (`./json_value_module.F90`) ← `__json_value_module_MOD_parse_string` ← `__json_value_module_MOD_parse_value` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  -42.3% | -11.00ms |  0.7% → 0.4% | 26.0ms → 15.0ms | 26 → 15 | `__json_value_module_MOD_pop_char.part.0` (`./json_value_module.F90`) ← `__json_value_module_MOD_parse_string` ← `__json_value_module_MOD_parse_value` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  -44.0% | -11.00ms |  0.6% → 0.4% | 25.0ms → 14.0ms | 25 → 14 | `__json_value_module_MOD_pop_char.part.0` (`./json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  -62.5% | -10.00ms |  0.4% → 0.2% |  16.0ms → 6.0ms |  16 → 6 | `__json_value_module_MOD_pop_char.part.0` (`./json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  -21.3% | -10.00ms |  1.2% → 1.0% | 47.0ms → 37.0ms | 47 → 37 | `__json_value_module_MOD_pop_char.part.0` (`./json_value_module.F90`) ← `__json_value_module_MOD_parse_string` ← `__json_value_module_MOD_parse_value` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  -42.9% |  -9.00ms |  0.5% → 0.3% | 21.0ms → 12.0ms | 21 → 12 | `__json_value_module_MOD_pop_char.part.0` (`./json_value_module.F90`) ← `__json_value_module_MOD_parse_string` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  -80.0% |  -8.00ms |  0.3% → 0.1% |  10.0ms → 2.0ms |  10 → 2 | `__json_value_module_MOD_pop_char.part.0` (`./json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  -53.3% |  -8.00ms |  0.4% → 0.2% |  15.0ms → 7.0ms |  15 → 7 | `__json_value_module_MOD_pop_char.part.0` (`./json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|  -88.9% |  -8.00ms | 0.2% → <0.1% |   9.0ms → 1.0ms |   9 → 1 | `__json_value_module_MOD_pop_char.part.0` (`./json_value_module.F90`) ← `__json_value_module_MOD_parse_string` ← `__json_value_module_MOD_parse_value` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|  -47.1% |  -8.00ms |  0.4% → 0.2% |  17.0ms → 9.0ms |  17 → 9 | `__json_value_module_MOD_pop_char.part.0` (`./json_value_module.F90`) ← `__json_value_module_MOD_parse_string` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object`                                          |
|  -87.5% |  -7.00ms | 0.2% → <0.1% |   8.0ms → 1.0ms |   8 → 1 | `__json_value_module_MOD_pop_char.part.0` (`./json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  -75.0% |  -6.00ms |  0.2% → 0.1% |   8.0ms → 2.0ms |   8 → 2 | `__json_value_module_MOD_pop_char.part.0` (`./json_value_module.F90`) ← `__json_value_module_MOD_parse_string` ← `__json_value_module_MOD_parse_value` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  -50.0% |  -6.00ms |  0.3% → 0.2% |  12.0ms → 6.0ms |  12 → 6 | `__json_value_module_MOD_pop_char.part.0` (`./json_value_module.F90`) ← `__json_value_module_MOD_parse_string` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  -27.3% |  -6.00ms |  0.6% → 0.4% | 22.0ms → 16.0ms | 22 → 16 | `__json_value_module_MOD_pop_char.part.0` (`./json_value_module.F90`) ← `__json_value_module_MOD_parse_string` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  -42.9% |  -6.00ms |  0.4% → 0.2% |  14.0ms → 8.0ms |  14 → 8 | `__json_value_module_MOD_pop_char.part.0` (`./json_value_module.F90`) ← `__json_value_module_MOD_parse_string` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` |
| removed |  -6.00ms |  0.2% → 0.0% |     6.0ms → 0ms |   6 → 0 | `__json_value_module_MOD_pop_char.part.0` (`./json_value_module.F90`) ← `__json_value_module_MOD_parse_value` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  -66.7% |  -6.00ms |  0.2% → 0.1% |   9.0ms → 3.0ms |   9 → 3 | `0xde3c8` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x10b9e3` (`/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`) ← `0x10b3c3`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  -60.0% |  -6.00ms |  0.3% → 0.1% |  10.0ms → 4.0ms |  10 → 4 | `0x8eb04` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x9102b` ← `0x9245b` ← `0x1c1b3` (`/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`) ← `0x10be83` ← `0x1029eb` ← `0x10324b`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  -50.0% |  -5.00ms |  0.3% → 0.1% |  10.0ms → 5.0ms |  10 → 5 | `__json_value_module_MOD_pop_char.part.0` (`./json_value_module.F90`) ← `__json_value_module_MOD_parse_string` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |

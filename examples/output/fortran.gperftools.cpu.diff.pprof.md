# CPU profile diff

Took 3.84s → 3.81s (-38.00ms, -1.0%) over 3,849 samples → 3,811 samples (1.0ms per sample).

| Category | Change |    Delta |             % |          Time |       Samples |
| -------- | -----: | -------: | ------------: | ------------: | ------------: |
| Ours     |  +0.7% | +15.00ms | 59.1% → 60.1% | 2.27s → 2.29s | 2,275 → 2,290 |
| Native   |  -3.4% | -53.00ms | 40.9% → 39.9% | 1.57s → 1.52s | 1,574 → 1,521 |

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time spent directly in the function body, excluding callees.

|  Change |    Delta |             % |            Time |       Samples | Function                                      | Location                                         |
| ------: | -------: | ------------: | --------------: | ------------: | --------------------------------------------- | ------------------------------------------------ |
|  +60.6% | +20.00ms |   0.9% → 1.4% | 33.0ms → 53.0ms |       33 → 53 | `0x1189ec`                                    | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|   +0.7% | +13.00ms | 51.3% → 52.2% |   1.97s → 1.98s | 1,975 → 1,988 | `__json_value_module_MOD_pop_char.part.0`     | `src/json-fortran/src/json_value_module.F90`     |
|  +24.4% | +11.00ms |   1.2% → 1.5% | 45.0ms → 56.0ms |       45 → 56 | `0x929c4`                                     | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  +53.3% |  +8.00ms |   0.4% → 0.6% | 15.0ms → 23.0ms |       15 → 23 | `__json_value_module_MOD_parse_object`        | `src/json-fortran/src/json_value_module.F90`     |
|  +61.5% |  +8.00ms |   0.3% → 0.6% | 13.0ms → 21.0ms |       13 → 21 | `__json_value_module_MOD_destroy_json_data`   | `src/json-fortran/src/json_value_module.F90`     |
| +140.0% |  +7.00ms |   0.1% → 0.3% |  5.0ms → 12.0ms |        5 → 12 | `0x1186dc`                                    | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| +350.0% |  +7.00ms |   0.1% → 0.2% |   2.0ms → 9.0ms |         2 → 9 | `0x118730`                                    | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  +50.0% |  +7.00ms |   0.4% → 0.6% | 14.0ms → 21.0ms |       14 → 21 | `0x9123c`                                     | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  +10.0% |  +6.00ms |   1.6% → 1.7% | 60.0ms → 66.0ms |       60 → 66 | `0x11899c`                                    | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| +200.0% |  +6.00ms |   0.1% → 0.2% |   3.0ms → 9.0ms |         3 → 9 | `0x8faa0`                                     | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  +10.6% |  +5.00ms |   1.2% → 1.4% | 47.0ms → 52.0ms |       47 → 52 | `0x8faf4`                                     | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  +25.0% |  +5.00ms |   0.5% → 0.7% | 20.0ms → 25.0ms |       20 → 25 | `__json_string_utilities_MOD_unescape_string` | `src/json-fortran/src/json_string_utilities.F90` |
| +500.0% |  +5.00ms |  <0.1% → 0.2% |   1.0ms → 6.0ms |         1 → 6 | `0x91544`                                     | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
| +250.0% |  +5.00ms |   0.1% → 0.2% |   2.0ms → 7.0ms |         2 → 7 | `0x118708`                                    | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| +400.0% |  +4.00ms |  <0.1% → 0.1% |   1.0ms → 5.0ms |         1 → 5 | `0x8fbc8`                                     | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
| +133.3% |  +4.00ms |   0.1% → 0.2% |   3.0ms → 7.0ms |         3 → 7 | `0xf8ea8`                                     | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| +100.0% |  +4.00ms |   0.1% → 0.2% |   4.0ms → 8.0ms |         4 → 8 | `0x10a040`                                    | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| +200.0% |  +4.00ms |   0.1% → 0.2% |   2.0ms → 6.0ms |         2 → 6 | `0x8fae0`                                     | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
| +133.3% |  +4.00ms |   0.1% → 0.2% |   3.0ms → 7.0ms |         3 → 7 | `0x8e98c`                                     | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
| +400.0% |  +4.00ms |  <0.1% → 0.1% |   1.0ms → 5.0ms |         1 → 5 | `0x105f60`                                    | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### Ours

| Change |    Delta |             % |            Time |       Samples | Function                                               | Location                                         |
| -----: | -------: | ------------: | --------------: | ------------: | ------------------------------------------------------ | ------------------------------------------------ |
|  +0.7% | +13.00ms | 51.3% → 52.2% |   1.97s → 1.98s | 1,975 → 1,988 | `__json_value_module_MOD_pop_char.part.0`              | `src/json-fortran/src/json_value_module.F90`     |
| +53.3% |  +8.00ms |   0.4% → 0.6% | 15.0ms → 23.0ms |       15 → 23 | `__json_value_module_MOD_parse_object`                 | `src/json-fortran/src/json_value_module.F90`     |
| +61.5% |  +8.00ms |   0.3% → 0.6% | 13.0ms → 21.0ms |       13 → 21 | `__json_value_module_MOD_destroy_json_data`            | `src/json-fortran/src/json_value_module.F90`     |
| +25.0% |  +5.00ms |   0.5% → 0.7% | 20.0ms → 25.0ms |       20 → 25 | `__json_string_utilities_MOD_unescape_string`          | `src/json-fortran/src/json_string_utilities.F90` |
| +14.3% |  +2.00ms |          0.4% | 14.0ms → 16.0ms |       14 → 16 | `__json_value_module_MOD_json_value_destroy`           | `src/json-fortran/src/json_value_module.F90`     |
| +66.7% |  +2.00ms |          0.1% |   3.0ms → 5.0ms |         3 → 5 | `__json_string_utilities_MOD_string_to_integer`        | `src/json-fortran/src/json_string_utilities.F90` |
| +33.3% |  +2.00ms |          0.2% |   6.0ms → 8.0ms |         6 → 8 | `__json_value_module_MOD_json_value_add_member`        | `src/json-fortran/src/json_value_module.F90`     |
|    new |  +1.00ms |  0.0% → <0.1% |     0ms → 1.0ms |         0 → 1 | `__json_value_module_MOD_string_to_int`                | `src/json-fortran/src/json_value_module.F90`     |
| +50.0% |  +1.00ms |          0.1% |   2.0ms → 3.0ms |         2 → 3 | `__json_value_module_MOD_json_info`                    | `src/json-fortran/src/json_value_module.F90`     |
|    new |  +1.00ms |  0.0% → <0.1% |     0ms → 1.0ms |         0 → 1 | `__json_value_module_MOD_json_value_get_child_by_name` | `src/json-fortran/src/json_value_module.F90`     |

##### Native

|  Change |    Delta |            % |            Time | Samples | Function   | Location                                         |
| ------: | -------: | -----------: | --------------: | ------: | ---------- | ------------------------------------------------ |
|  +60.6% | +20.00ms |  0.9% → 1.4% | 33.0ms → 53.0ms | 33 → 53 | `0x1189ec` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  +24.4% | +11.00ms |  1.2% → 1.5% | 45.0ms → 56.0ms | 45 → 56 | `0x929c4`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
| +140.0% |  +7.00ms |  0.1% → 0.3% |  5.0ms → 12.0ms |  5 → 12 | `0x1186dc` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| +350.0% |  +7.00ms |  0.1% → 0.2% |   2.0ms → 9.0ms |   2 → 9 | `0x118730` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  +50.0% |  +7.00ms |  0.4% → 0.6% | 14.0ms → 21.0ms | 14 → 21 | `0x9123c`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  +10.0% |  +6.00ms |  1.6% → 1.7% | 60.0ms → 66.0ms | 60 → 66 | `0x11899c` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| +200.0% |  +6.00ms |  0.1% → 0.2% |   3.0ms → 9.0ms |   3 → 9 | `0x8faa0`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  +10.6% |  +5.00ms |  1.2% → 1.4% | 47.0ms → 52.0ms | 47 → 52 | `0x8faf4`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
| +500.0% |  +5.00ms | <0.1% → 0.2% |   1.0ms → 6.0ms |   1 → 6 | `0x91544`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
| +250.0% |  +5.00ms |  0.1% → 0.2% |   2.0ms → 7.0ms |   2 → 7 | `0x118708` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| +400.0% |  +4.00ms | <0.1% → 0.1% |   1.0ms → 5.0ms |   1 → 5 | `0x8fbc8`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
| +133.3% |  +4.00ms |  0.1% → 0.2% |   3.0ms → 7.0ms |   3 → 7 | `0xf8ea8`  | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| +100.0% |  +4.00ms |  0.1% → 0.2% |   4.0ms → 8.0ms |   4 → 8 | `0x10a040` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| +200.0% |  +4.00ms |  0.1% → 0.2% |   2.0ms → 6.0ms |   2 → 6 | `0x8fae0`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
| +133.3% |  +4.00ms |  0.1% → 0.2% |   3.0ms → 7.0ms |   3 → 7 | `0x8e98c`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
| +400.0% |  +4.00ms | <0.1% → 0.1% |   1.0ms → 5.0ms |   1 → 5 | `0x105f60` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|     new |  +4.00ms |  0.0% → 0.1% |     0ms → 4.0ms |   0 → 4 | `0xf8da4`  | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  +42.9% |  +3.00ms |  0.2% → 0.3% |  7.0ms → 10.0ms |  7 → 10 | `0x8e960`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
| +150.0% |  +3.00ms |         0.1% |   2.0ms → 5.0ms |   2 → 5 | `0x8eb74`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|   +4.8% |  +3.00ms |  1.6% → 1.7% | 62.0ms → 65.0ms | 62 → 65 | `0x92240`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |

#### Improvements

Functions with the largest decrease in time spent directly in the function body, excluding callees.

|  Change |    Delta |            % |              Time |   Samples | Function                               | Location                                         |
| ------: | -------: | -----------: | ----------------: | --------: | -------------------------------------- | ------------------------------------------------ |
|  -25.5% | -26.00ms |  2.7% → 2.0% |  102.0ms → 76.0ms |  102 → 76 | `_init`                                | `<unknown>`                                      |
|  -28.6% | -18.00ms |  1.6% → 1.2% |   63.0ms → 45.0ms |   63 → 45 | `0x118680`                             | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|   -9.7% | -16.00ms |  4.3% → 3.9% | 165.0ms → 149.0ms | 165 → 149 | `__json_value_module_MOD_parse_string` | `src/json-fortran/src/json_value_module.F90`     |
|  -76.2% | -16.00ms |  0.5% → 0.1% |    21.0ms → 5.0ms |    21 → 5 | `0x10c300`                             | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  -56.5% | -13.00ms |  0.6% → 0.3% |   23.0ms → 10.0ms |   23 → 10 | `0x1186f8`                             | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  -18.1% | -13.00ms |  1.9% → 1.5% |   72.0ms → 59.0ms |   72 → 59 | `0x118970`                             | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  -26.7% | -12.00ms |  1.2% → 0.9% |   45.0ms → 33.0ms |   45 → 33 | `0x118720`                             | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  -20.7% | -12.00ms |  1.5% → 1.2% |   58.0ms → 46.0ms |   58 → 46 | `0x118994`                             | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  -50.0% |  -9.00ms |  0.5% → 0.2% |    18.0ms → 9.0ms |    18 → 9 | `0x90dc0`                              | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  -80.0% |  -8.00ms |  0.3% → 0.1% |    10.0ms → 2.0ms |    10 → 2 | `0x8fbf0`                              | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  -63.6% |  -7.00ms |  0.3% → 0.1% |    11.0ms → 4.0ms |    11 → 4 | `0x92260`                              | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  -14.6% |  -6.00ms |  1.1% → 0.9% |   41.0ms → 35.0ms |   41 → 35 | `0xddb88`                              | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  -66.7% |  -6.00ms |  0.2% → 0.1% |     9.0ms → 3.0ms |     9 → 3 | `0xde3c8`                              | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  -10.9% |  -5.00ms |  1.2% → 1.1% |   46.0ms → 41.0ms |   46 → 41 | `0x92284`                              | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  -71.4% |  -5.00ms |  0.2% → 0.1% |     7.0ms → 2.0ms |     7 → 2 | `0x922bc`                              | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  -50.0% |  -5.00ms |  0.3% → 0.1% |    10.0ms → 5.0ms |    10 → 5 | `0x8eb04`                              | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  -66.7% |  -4.00ms |  0.2% → 0.1% |     6.0ms → 2.0ms |     6 → 2 | `0x9d168`                              | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
| removed |  -4.00ms |  0.1% → 0.0% |       4.0ms → 0ms |     4 → 0 | `0x10a918`                             | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  -57.1% |  -4.00ms |  0.2% → 0.1% |     7.0ms → 3.0ms |     7 → 3 | `0x915c8`                              | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  -80.0% |  -4.00ms | 0.1% → <0.1% |     5.0ms → 1.0ms |     5 → 1 | `0xf8f7c`                              | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### Ours

|  Change |    Delta |            % |              Time |   Samples | Function                                    | Location                                     |
| ------: | -------: | -----------: | ----------------: | --------: | ------------------------------------------- | -------------------------------------------- |
|   -9.7% | -16.00ms |  4.3% → 3.9% | 165.0ms → 149.0ms | 165 → 149 | `__json_value_module_MOD_parse_string`      | `src/json-fortran/src/json_value_module.F90` |
| removed |  -2.00ms |  0.1% → 0.0% |       2.0ms → 0ms |     2 → 0 | `__json_value_module_MOD_parse_array`       | `src/json-fortran/src/json_value_module.F90` |
|   -6.5% |  -2.00ms |         0.8% |   31.0ms → 29.0ms |   31 → 29 | `__json_value_module_MOD_parse_value`       | `src/json-fortran/src/json_value_module.F90` |
|  -18.2% |  -2.00ms |  0.3% → 0.2% |    11.0ms → 9.0ms |    11 → 9 | `__json_value_module_MOD_parse_for_chars`   | `src/json-fortran/src/json_value_module.F90` |
|  -50.0% |  -2.00ms |         0.1% |     4.0ms → 2.0ms |     4 → 2 | `__json_value_module_MOD_pop_char`          | `src/json-fortran/src/json_value_module.F90` |
|  -50.0% |  -1.00ms | 0.1% → <0.1% |     2.0ms → 1.0ms |     2 → 1 | `__json_value_module_MOD_to_logical`        | `src/json-fortran/src/json_value_module.F90` |
|  -25.0% |  -1.00ms |         0.1% |     4.0ms → 3.0ms |     4 → 3 | `__json_value_module_MOD_json_value_create` | `src/json-fortran/src/json_value_module.F90` |
| removed |  -1.00ms | <0.1% → 0.0% |       1.0ms → 0ms |     1 → 0 | `__json_value_module_MOD_to_string`         | `src/json-fortran/src/json_value_module.F90` |
| removed |  -1.00ms | <0.1% → 0.0% |       1.0ms → 0ms |     1 → 0 | `__json_value_module_MOD_to_integer`        | `src/json-fortran/src/json_value_module.F90` |

##### Native

|  Change |    Delta |            % |             Time |  Samples | Function   | Location                                         |
| ------: | -------: | -----------: | ---------------: | -------: | ---------- | ------------------------------------------------ |
|  -25.5% | -26.00ms |  2.7% → 2.0% | 102.0ms → 76.0ms | 102 → 76 | `_init`    | `<unknown>`                                      |
|  -28.6% | -18.00ms |  1.6% → 1.2% |  63.0ms → 45.0ms |  63 → 45 | `0x118680` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  -76.2% | -16.00ms |  0.5% → 0.1% |   21.0ms → 5.0ms |   21 → 5 | `0x10c300` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  -56.5% | -13.00ms |  0.6% → 0.3% |  23.0ms → 10.0ms |  23 → 10 | `0x1186f8` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  -18.1% | -13.00ms |  1.9% → 1.5% |  72.0ms → 59.0ms |  72 → 59 | `0x118970` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  -26.7% | -12.00ms |  1.2% → 0.9% |  45.0ms → 33.0ms |  45 → 33 | `0x118720` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  -20.7% | -12.00ms |  1.5% → 1.2% |  58.0ms → 46.0ms |  58 → 46 | `0x118994` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  -50.0% |  -9.00ms |  0.5% → 0.2% |   18.0ms → 9.0ms |   18 → 9 | `0x90dc0`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  -80.0% |  -8.00ms |  0.3% → 0.1% |   10.0ms → 2.0ms |   10 → 2 | `0x8fbf0`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  -63.6% |  -7.00ms |  0.3% → 0.1% |   11.0ms → 4.0ms |   11 → 4 | `0x92260`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  -14.6% |  -6.00ms |  1.1% → 0.9% |  41.0ms → 35.0ms |  41 → 35 | `0xddb88`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  -66.7% |  -6.00ms |  0.2% → 0.1% |    9.0ms → 3.0ms |    9 → 3 | `0xde3c8`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  -10.9% |  -5.00ms |  1.2% → 1.1% |  46.0ms → 41.0ms |  46 → 41 | `0x92284`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  -71.4% |  -5.00ms |  0.2% → 0.1% |    7.0ms → 2.0ms |    7 → 2 | `0x922bc`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  -50.0% |  -5.00ms |  0.3% → 0.1% |   10.0ms → 5.0ms |   10 → 5 | `0x8eb04`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  -66.7% |  -4.00ms |  0.2% → 0.1% |    6.0ms → 2.0ms |    6 → 2 | `0x9d168`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
| removed |  -4.00ms |  0.1% → 0.0% |      4.0ms → 0ms |    4 → 0 | `0x10a918` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  -57.1% |  -4.00ms |  0.2% → 0.1% |    7.0ms → 3.0ms |    7 → 3 | `0x915c8`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  -80.0% |  -4.00ms | 0.1% → <0.1% |    5.0ms → 1.0ms |    5 → 1 | `0xf8f7c`  | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  -80.0% |  -4.00ms | 0.1% → <0.1% |    5.0ms → 1.0ms |    5 → 1 | `0x923e0`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |

#### Lines

Lines with the largest change in contribution to each function's self time.

##### `__json_value_module_MOD_pop_char.part.0` (`src/json-fortran/src/json_value_module.F90`)

|  Change |    Delta |             % |            Time |       Samples | Location                                                   |
| ------: | -------: | ------------: | --------------: | ------------: | ---------------------------------------------------------- |
|     new | +90.00ms |   0.0% → 4.5% |    0ms → 90.0ms |        0 → 90 | `src/json-fortran/src/json_value_module.F90:11497`         |
|  -76.6% | -72.00ms |   4.8% → 1.1% | 94.0ms → 22.0ms |       94 → 22 | `src/json-fortran/src/json_value_module.F90:11469`         |
| removed | -28.00ms |   1.4% → 0.0% |    28.0ms → 0ms |        28 → 0 | `src/json-fortran/src/json_value_module.F90:11441`         |
|  +23.3% | +17.00ms |   3.7% → 4.5% | 73.0ms → 90.0ms |       73 → 90 | `src/json-fortran/src/json_value_module.F90:11395 → 11423` |
|   +1.0% | +14.00ms | 72.5% → 72.7% |   1.43s → 1.44s | 1,431 → 1,445 | `src/json-fortran/src/json_value_module.F90:11447 → 11475` |

##### `__json_value_module_MOD_parse_object` (`src/json-fortran/src/json_value_module.F90`)

|  Change |   Delta |             % |          Time | Samples | Location                                                   |
| ------: | ------: | ------------: | ------------: | ------: | ---------------------------------------------------------- |
|     new | +5.00ms |  0.0% → 21.7% |   0ms → 5.0ms |   0 → 5 | `src/json-fortran/src/json_value_module.F90:10985`         |
| removed | -3.00ms |  20.0% → 0.0% |   3.0ms → 0ms |   3 → 0 | `src/json-fortran/src/json_value_module.F90:10980`         |
|  -66.7% | -2.00ms |  20.0% → 4.3% | 3.0ms → 1.0ms |   3 → 1 | `src/json-fortran/src/json_value_module.F90:10902 → 10912` |
| +100.0% | +2.00ms | 13.3% → 17.4% | 2.0ms → 4.0ms |   2 → 4 | `src/json-fortran/src/json_value_module.F90:10910 → 10920` |
| removed | -2.00ms |  13.3% → 0.0% |   2.0ms → 0ms |   2 → 0 | `src/json-fortran/src/json_value_module.F90:10938`         |

##### `__json_value_module_MOD_destroy_json_data` (`src/json-fortran/src/json_value_module.F90`)

|  Change |   Delta |            % |          Time | Samples | Location                                                 |
| ------: | ------: | -----------: | ------------: | ------: | -------------------------------------------------------- |
| +700.0% | +7.00ms | 7.7% → 38.1% | 1.0ms → 8.0ms |   1 → 8 | `src/json-fortran/src/json_value_module.F90:1397 → 1403` |
|     new | +7.00ms | 0.0% → 33.3% |   0ms → 7.0ms |   0 → 7 | `src/json-fortran/src/json_value_module.F90:1407`        |
|  -80.0% | -4.00ms | 38.5% → 4.8% | 5.0ms → 1.0ms |   5 → 1 | `src/json-fortran/src/json_value_module.F90:1400`        |
| removed | -2.00ms | 15.4% → 0.0% |   2.0ms → 0ms |   2 → 0 | `src/json-fortran/src/json_value_module.F90:1393`        |
|  -66.7% | -2.00ms | 23.1% → 4.8% | 3.0ms → 1.0ms |   3 → 1 | `src/json-fortran/src/json_value_module.F90:1396 → 1402` |

##### `__json_string_utilities_MOD_unescape_string` (`src/json-fortran/src/json_string_utilities.F90`)

|  Change |   Delta |             % |          Time | Samples | Location                                             |
| ------: | ------: | ------------: | ------------: | ------: | ---------------------------------------------------- |
| +150.0% | +3.00ms | 10.0% → 20.0% | 2.0ms → 5.0ms |   2 → 5 | `src/json-fortran/src/json_string_utilities.F90:605` |
| removed | -3.00ms |  15.0% → 0.0% |   3.0ms → 0ms |   3 → 0 | `src/json-fortran/src/json_string_utilities.F90:615` |
|  +66.7% | +2.00ms | 15.0% → 20.0% | 3.0ms → 5.0ms |   3 → 5 | `src/json-fortran/src/json_string_utilities.F90:506` |
|     new | +2.00ms |   0.0% → 8.0% |   0ms → 2.0ms |   0 → 2 | `src/json-fortran/src/json_string_utilities.F90:501` |
|  +33.3% | +1.00ms | 15.0% → 16.0% | 3.0ms → 4.0ms |   3 → 4 | `src/json-fortran/src/json_string_utilities.F90:514` |

##### `__json_value_module_MOD_json_value_destroy` (`src/json-fortran/src/json_value_module.F90`)

|  Change |   Delta |            % |          Time | Samples | Location                                                 |
| ------: | ------: | -----------: | ------------: | ------: | -------------------------------------------------------- |
| +500.0% | +5.00ms | 7.1% → 37.5% | 1.0ms → 6.0ms |   1 → 6 | `src/json-fortran/src/json_value_module.F90:2296 → 2303` |
| removed | -3.00ms | 21.4% → 0.0% |   3.0ms → 0ms |   3 → 0 | `src/json-fortran/src/json_value_module.F90:2269`        |
| removed | -2.00ms | 14.3% → 0.0% |   2.0ms → 0ms |   2 → 0 | `src/json-fortran/src/json_value_module.F90:2259`        |
| +100.0% | +1.00ms | 7.1% → 12.5% | 1.0ms → 2.0ms |   1 → 2 | `src/json-fortran/src/json_value_module.F90:2253 → 2260` |
| removed | -1.00ms |  7.1% → 0.0% |   1.0ms → 0ms |   1 → 0 | `src/json-fortran/src/json_value_module.F90:2273`        |

##### `__json_string_utilities_MOD_string_to_integer` (`src/json-fortran/src/json_string_utilities.F90`)

| Change |   Delta |             % |          Time | Samples | Location                                             |
| -----: | ------: | ------------: | ------------: | ------: | ---------------------------------------------------- |
|    new | +2.00ms |  0.0% → 40.0% |   0ms → 2.0ms |   0 → 2 | `src/json-fortran/src/json_string_utilities.F90:116` |
| -50.0% | -1.00ms | 66.7% → 20.0% | 2.0ms → 1.0ms |   2 → 1 | `src/json-fortran/src/json_string_utilities.F90:134` |
|    new | +1.00ms |  0.0% → 20.0% |   0ms → 1.0ms |   0 → 1 | `src/json-fortran/src/json_string_utilities.F90:132` |

##### `__json_value_module_MOD_json_value_add_member` (`src/json-fortran/src/json_value_module.F90`)

|  Change |   Delta |             % |          Time | Samples | Location                                                 |
| ------: | ------: | ------------: | ------------: | ------: | -------------------------------------------------------- |
|     new | +2.00ms |  0.0% → 25.0% |   0ms → 2.0ms |   0 → 2 | `src/json-fortran/src/json_value_module.F90:3428`        |
| +100.0% | +1.00ms | 16.7% → 25.0% | 1.0ms → 2.0ms |   1 → 2 | `src/json-fortran/src/json_value_module.F90:3406 → 3413` |
| removed | -1.00ms |  16.7% → 0.0% |   1.0ms → 0ms |   1 → 0 | `src/json-fortran/src/json_value_module.F90:3423`        |
|  -50.0% | -1.00ms | 33.3% → 12.5% | 2.0ms → 1.0ms |   2 → 1 | `src/json-fortran/src/json_value_module.F90:3433 → 3440` |
| +100.0% | +1.00ms | 16.7% → 25.0% | 1.0ms → 2.0ms |   1 → 2 | `src/json-fortran/src/json_value_module.F90:3443 → 3450` |

##### `__json_value_module_MOD_string_to_int` (`src/json-fortran/src/json_value_module.F90`)

| Change |   Delta |             % |        Time | Samples | Location                                          |
| -----: | ------: | ------------: | ----------: | ------: | ------------------------------------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `src/json-fortran/src/json_value_module.F90:8094` |

##### `__json_value_module_MOD_json_info` (`src/json-fortran/src/json_value_module.F90`)

|  Change |   Delta |            % |        Time | Samples | Location                                          |
| ------: | ------: | -----------: | ----------: | ------: | ------------------------------------------------- |
|     new | +2.00ms | 0.0% → 66.7% | 0ms → 2.0ms |   0 → 2 | `src/json-fortran/src/json_value_module.F90:1428` |
| removed | -1.00ms | 50.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `src/json-fortran/src/json_value_module.F90:1419` |
| removed | -1.00ms | 50.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `src/json-fortran/src/json_value_module.F90:1423` |
|     new | +1.00ms | 0.0% → 33.3% | 0ms → 1.0ms |   0 → 1 | `src/json-fortran/src/json_value_module.F90:1426` |

##### `__json_value_module_MOD_json_value_get_child_by_name` (`src/json-fortran/src/json_value_module.F90`)

| Change |   Delta |             % |        Time | Samples | Location                                          |
| -----: | ------: | ------------: | ----------: | ------: | ------------------------------------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `src/json-fortran/src/json_value_module.F90:5652` |

##### `__json_value_module_MOD_parse_string` (`src/json-fortran/src/json_value_module.F90`)

| Change |    Delta |             % |            Time | Samples | Location                                                   |
| -----: | -------: | ------------: | --------------: | ------: | ---------------------------------------------------------- |
| -96.7% | -29.00ms |  18.2% → 0.7% |  30.0ms → 1.0ms |  30 → 1 | `src/json-fortran/src/json_value_module.F90:11098`         |
|    new | +24.00ms |  0.0% → 16.1% |    0ms → 24.0ms |  0 → 24 | `src/json-fortran/src/json_value_module.F90:11126`         |
| -25.0% |  -8.00ms | 19.4% → 16.1% | 32.0ms → 24.0ms | 32 → 24 | `src/json-fortran/src/json_value_module.F90:11091 → 11119` |
| +12.0% |  +6.00ms | 30.3% → 37.6% | 50.0ms → 56.0ms | 50 → 56 | `src/json-fortran/src/json_value_module.F90:11084 → 11112` |
| -20.7% |  -6.00ms | 17.6% → 15.4% | 29.0ms → 23.0ms | 29 → 23 | `src/json-fortran/src/json_value_module.F90:11086 → 11114` |

##### `__json_value_module_MOD_parse_array` (`src/json-fortran/src/json_value_module.F90`)

|  Change |   Delta |             % |        Time | Samples | Location                                           |
| ------: | ------: | ------------: | ----------: | ------: | -------------------------------------------------- |
| removed | -2.00ms | 100.0% → 0.0% | 2.0ms → 0ms |   2 → 0 | `src/json-fortran/src/json_value_module.F90:11008` |

##### `__json_value_module_MOD_parse_value` (`src/json-fortran/src/json_value_module.F90`)

| Change |   Delta |             % |          Time | Samples | Location                                                   |
| -----: | ------: | ------------: | ------------: | ------: | ---------------------------------------------------------- |
| -37.5% | -3.00ms | 25.8% → 17.2% | 8.0ms → 5.0ms |   8 → 5 | `src/json-fortran/src/json_value_module.F90:10202 → 10209` |
|    new | +3.00ms |  0.0% → 10.3% |   0ms → 3.0ms |   0 → 3 | `src/json-fortran/src/json_value_module.F90:10192`         |
| -66.7% | -2.00ms |   9.7% → 3.4% | 3.0ms → 1.0ms |   3 → 1 | `src/json-fortran/src/json_value_module.F90:10139 → 10146` |
| -66.7% | -2.00ms |   9.7% → 3.4% | 3.0ms → 1.0ms |   3 → 1 | `src/json-fortran/src/json_value_module.F90:10156 → 10163` |
| +50.0% | +1.00ms |  6.5% → 10.3% | 2.0ms → 3.0ms |   2 → 3 | `src/json-fortran/src/json_value_module.F90:10145 → 10152` |

##### `__json_value_module_MOD_parse_for_chars` (`src/json-fortran/src/json_value_module.F90`)

|  Change |   Delta |            % |        Time | Samples | Location                                           |
| ------: | ------: | -----------: | ----------: | ------: | -------------------------------------------------- |
|     new | +8.00ms | 0.0% → 88.9% | 0ms → 8.0ms |   0 → 8 | `src/json-fortran/src/json_value_module.F90:11192` |
| removed | -7.00ms | 63.6% → 0.0% | 7.0ms → 0ms |   7 → 0 | `src/json-fortran/src/json_value_module.F90:11164` |
| removed | -2.00ms | 18.2% → 0.0% | 2.0ms → 0ms |   2 → 0 | `src/json-fortran/src/json_value_module.F90:11163` |
| removed | -1.00ms |  9.1% → 0.0% | 1.0ms → 0ms |   1 → 0 | `src/json-fortran/src/json_value_module.F90:11161` |
| removed | -1.00ms |  9.1% → 0.0% | 1.0ms → 0ms |   1 → 0 | `src/json-fortran/src/json_value_module.F90:11165` |

##### `__json_value_module_MOD_pop_char` (`src/json-fortran/src/json_value_module.F90`)

|  Change |   Delta |             % |        Time | Samples | Location                                           |
| ------: | ------: | ------------: | ----------: | ------: | -------------------------------------------------- |
| removed | -4.00ms | 100.0% → 0.0% | 4.0ms → 0ms |   4 → 0 | `src/json-fortran/src/json_value_module.F90:11341` |
|     new | +2.00ms | 0.0% → 100.0% | 0ms → 2.0ms |   0 → 2 | `src/json-fortran/src/json_value_module.F90:11369` |

##### `__json_value_module_MOD_to_logical` (`src/json-fortran/src/json_value_module.F90`)

|  Change |   Delta |             % |        Time | Samples | Location                                           |
| ------: | ------: | ------------: | ----------: | ------: | -------------------------------------------------- |
| removed | -2.00ms | 100.0% → 0.0% | 2.0ms → 0ms |   2 → 0 | `src/json-fortran/src/json_value_module.F90:10659` |
|     new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `src/json-fortran/src/json_value_module.F90:10678` |

##### `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`)

|  Change |   Delta |            % |        Time | Samples | Location                                          |
| ------: | ------: | -----------: | ----------: | ------: | ------------------------------------------------- |
| removed | -3.00ms | 75.0% → 0.0% | 3.0ms → 0ms |   3 → 0 | `src/json-fortran/src/json_value_module.F90:2213` |
|     new | +2.00ms | 0.0% → 66.7% | 0ms → 2.0ms |   0 → 2 | `src/json-fortran/src/json_value_module.F90:2218` |
| removed | -1.00ms | 25.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `src/json-fortran/src/json_value_module.F90:2211` |
|     new | +1.00ms | 0.0% → 33.3% | 0ms → 1.0ms |   0 → 1 | `src/json-fortran/src/json_value_module.F90:2220` |

##### `__json_value_module_MOD_to_string` (`src/json-fortran/src/json_value_module.F90`)

|  Change |   Delta |             % |        Time | Samples | Location                                           |
| ------: | ------: | ------------: | ----------: | ------: | -------------------------------------------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `src/json-fortran/src/json_value_module.F90:10776` |

##### `__json_value_module_MOD_to_integer` (`src/json-fortran/src/json_value_module.F90`)

|  Change |   Delta |             % |        Time | Samples | Location                                           |
| ------: | ------: | ------------: | ----------: | ------: | -------------------------------------------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `src/json-fortran/src/json_value_module.F90:10703` |

### Total time

#### Regressions

Functions with the largest increase in total time spent in the function and all its callees.

|  Change |    Delta |             % |              Time |   Samples | Function                                        | Location                                         |
| ------: | -------: | ------------: | ----------------: | --------: | ----------------------------------------------- | ------------------------------------------------ |
|  +11.6% | +49.00ms | 11.0% → 12.4% | 423.0ms → 472.0ms | 423 → 472 | `__json_value_module_MOD_parse_number`          | `src/json-fortran/src/json_value_module.F90`     |
|  +67.3% | +37.00ms |   1.4% → 2.4% |   55.0ms → 92.0ms |   55 → 92 | `0x92a9b`                                       | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  +10.4% | +36.00ms |  9.0% → 10.0% | 345.0ms → 381.0ms | 345 → 381 | `__json_value_module_MOD_string_to_int`         | `src/json-fortran/src/json_value_module.F90`     |
|   +9.6% | +29.00ms |   7.9% → 8.7% | 303.0ms → 332.0ms | 303 → 332 | `__json_string_utilities_MOD_string_to_integer` | `src/json-fortran/src/json_string_utilities.F90` |
|  +60.6% | +20.00ms |   0.9% → 1.4% |   33.0ms → 53.0ms |   33 → 53 | `0x1189ec`                                      | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  +18.8% | +15.00ms |   2.1% → 2.5% |   80.0ms → 95.0ms |   80 → 95 | `__json_value_module_MOD_json_value_create`     | `src/json-fortran/src/json_value_module.F90`     |
|   +6.1% | +14.00ms |   6.0% → 6.4% | 231.0ms → 245.0ms | 231 → 245 | `0x9245b`                                       | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  +77.8% | +14.00ms |   0.5% → 0.8% |   18.0ms → 32.0ms |   18 → 32 | `0x108f53`                                      | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  +18.6% | +13.00ms |   1.8% → 2.2% |   70.0ms → 83.0ms |   70 → 83 | `__json_value_module_MOD_json_value_destroy`    | `src/json-fortran/src/json_value_module.F90`     |
|  +18.6% | +13.00ms |   1.8% → 2.2% |   70.0ms → 83.0ms |   70 → 83 | `__json_file_module_MOD_json_file_destroy`      | `src/json-fortran/src/json_file_module.F90`      |
| +216.7% | +13.00ms |   0.2% → 0.5% |    6.0ms → 19.0ms |    6 → 19 | `0x108efb`                                      | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  +54.5% | +12.00ms |   0.6% → 0.9% |   22.0ms → 34.0ms |   22 → 34 | `__json_value_module_MOD_destroy_json_data`     | `src/json-fortran/src/json_value_module.F90`     |
|  +24.4% | +11.00ms |   1.2% → 1.5% |   45.0ms → 56.0ms |   45 → 56 | `0x929c4`                                       | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  +71.4% | +10.00ms |   0.4% → 0.6% |   14.0ms → 24.0ms |   14 → 24 | `0x107fa7`                                      | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  +81.8% |  +9.00ms |   0.3% → 0.5% |   11.0ms → 20.0ms |   11 → 20 | `0x10a0fb`                                      | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| +140.0% |  +7.00ms |   0.1% → 0.3% |    5.0ms → 12.0ms |    5 → 12 | `0x1186dc`                                      | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| +350.0% |  +7.00ms |   0.1% → 0.2% |     2.0ms → 9.0ms |     2 → 9 | `0x118730`                                      | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  +50.0% |  +7.00ms |   0.4% → 0.6% |   14.0ms → 21.0ms |   14 → 21 | `0x9123c`                                       | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  +10.0% |  +6.00ms |   1.6% → 1.7% |   60.0ms → 66.0ms |   60 → 66 | `0x11899c`                                      | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  +33.3% |  +6.00ms |   0.5% → 0.6% |   18.0ms → 24.0ms |   18 → 24 | `0x10b283`                                      | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### Ours

| Change |    Delta |             % |              Time |   Samples | Function                                           | Location                                           |
| -----: | -------: | ------------: | ----------------: | --------: | -------------------------------------------------- | -------------------------------------------------- |
| +11.6% | +49.00ms | 11.0% → 12.4% | 423.0ms → 472.0ms | 423 → 472 | `__json_value_module_MOD_parse_number`             | `src/json-fortran/src/json_value_module.F90`       |
| +10.4% | +36.00ms |  9.0% → 10.0% | 345.0ms → 381.0ms | 345 → 381 | `__json_value_module_MOD_string_to_int`            | `src/json-fortran/src/json_value_module.F90`       |
|  +9.6% | +29.00ms |   7.9% → 8.7% | 303.0ms → 332.0ms | 303 → 332 | `__json_string_utilities_MOD_string_to_integer`    | `src/json-fortran/src/json_string_utilities.F90`   |
| +18.8% | +15.00ms |   2.1% → 2.5% |   80.0ms → 95.0ms |   80 → 95 | `__json_value_module_MOD_json_value_create`        | `src/json-fortran/src/json_value_module.F90`       |
| +18.6% | +13.00ms |   1.8% → 2.2% |   70.0ms → 83.0ms |   70 → 83 | `__json_value_module_MOD_json_value_destroy`       | `src/json-fortran/src/json_value_module.F90`       |
| +18.6% | +13.00ms |   1.8% → 2.2% |   70.0ms → 83.0ms |   70 → 83 | `__json_file_module_MOD_json_file_destroy`         | `src/json-fortran/src/json_file_module.F90`        |
| +54.5% | +12.00ms |   0.6% → 0.9% |   22.0ms → 34.0ms |   22 → 34 | `__json_value_module_MOD_destroy_json_data`        | `src/json-fortran/src/json_value_module.F90`       |
| +22.7% |  +5.00ms |   0.6% → 0.7% |   22.0ms → 27.0ms |   22 → 27 | `__json_string_utilities_MOD_unescape_string`      | `src/json-fortran/src/json_string_utilities.F90`   |
| +37.5% |  +3.00ms |   0.2% → 0.3% |    8.0ms → 11.0ms |    8 → 11 | `__json_value_module_MOD_json_value_add_member`    | `src/json-fortran/src/json_value_module.F90`       |
|    new |  +2.00ms |   0.0% → 0.1% |       0ms → 2.0ms |     0 → 2 | `__json_value_module_MOD_to_array`                 | `src/json-fortran/src/json_value_module.F90`       |
|  +5.9% |  +1.00ms |   0.4% → 0.5% |   17.0ms → 18.0ms |   17 → 18 | `__json_value_module_MOD_json_get_by_path_default` | `src/json-fortran/src/json_value_module.F90`       |
|  +5.9% |  +1.00ms |   0.4% → 0.5% |   17.0ms → 18.0ms |   17 → 18 | `__json_value_module_MOD_json_get_by_path`         | `src/json-fortran/src/json_value_module.F90`       |
|  +5.6% |  +1.00ms |          0.5% |   18.0ms → 19.0ms |   18 → 19 | `__json_value_module_MOD_json_get_string_by_path`  | `src/json-fortran/src/json_get_scalar_by_path.inc` |
|  +5.6% |  +1.00ms |          0.5% |   18.0ms → 19.0ms |   18 → 19 | `__json_file_module_MOD_json_file_get_string`      | `src/json-fortran/src/json_file_module.F90`        |
| +50.0% |  +1.00ms |          0.1% |     2.0ms → 3.0ms |     2 → 3 | `__json_value_module_MOD_json_info`                | `src/json-fortran/src/json_value_module.F90`       |

##### Native

|  Change |    Delta |            % |              Time |   Samples | Function   | Location                                         |
| ------: | -------: | -----------: | ----------------: | --------: | ---------- | ------------------------------------------------ |
|  +67.3% | +37.00ms |  1.4% → 2.4% |   55.0ms → 92.0ms |   55 → 92 | `0x92a9b`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  +60.6% | +20.00ms |  0.9% → 1.4% |   33.0ms → 53.0ms |   33 → 53 | `0x1189ec` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|   +6.1% | +14.00ms |  6.0% → 6.4% | 231.0ms → 245.0ms | 231 → 245 | `0x9245b`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  +77.8% | +14.00ms |  0.5% → 0.8% |   18.0ms → 32.0ms |   18 → 32 | `0x108f53` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| +216.7% | +13.00ms |  0.2% → 0.5% |    6.0ms → 19.0ms |    6 → 19 | `0x108efb` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  +24.4% | +11.00ms |  1.2% → 1.5% |   45.0ms → 56.0ms |   45 → 56 | `0x929c4`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  +71.4% | +10.00ms |  0.4% → 0.6% |   14.0ms → 24.0ms |   14 → 24 | `0x107fa7` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  +81.8% |  +9.00ms |  0.3% → 0.5% |   11.0ms → 20.0ms |   11 → 20 | `0x10a0fb` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| +140.0% |  +7.00ms |  0.1% → 0.3% |    5.0ms → 12.0ms |    5 → 12 | `0x1186dc` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| +350.0% |  +7.00ms |  0.1% → 0.2% |     2.0ms → 9.0ms |     2 → 9 | `0x118730` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  +50.0% |  +7.00ms |  0.4% → 0.6% |   14.0ms → 21.0ms |   14 → 21 | `0x9123c`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  +10.0% |  +6.00ms |  1.6% → 1.7% |   60.0ms → 66.0ms |   60 → 66 | `0x11899c` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  +33.3% |  +6.00ms |  0.5% → 0.6% |   18.0ms → 24.0ms |   18 → 24 | `0x10b283` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| +200.0% |  +6.00ms |  0.1% → 0.2% |     3.0ms → 9.0ms |     3 → 9 | `0x8faa0`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
| +120.0% |  +6.00ms |  0.1% → 0.3% |    5.0ms → 11.0ms |    5 → 11 | `0x10a00b` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  +10.6% |  +5.00ms |  1.2% → 1.4% |   47.0ms → 52.0ms |   47 → 52 | `0x8faf4`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  +38.5% |  +5.00ms |  0.3% → 0.5% |   13.0ms → 18.0ms |   13 → 18 | `0x8eb7f`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
| +125.0% |  +5.00ms |  0.1% → 0.2% |     4.0ms → 9.0ms |     4 → 9 | `0x10890b` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| +125.0% |  +5.00ms |  0.1% → 0.2% |     4.0ms → 9.0ms |     4 → 9 | `0x108537` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| +500.0% |  +5.00ms | <0.1% → 0.2% |     1.0ms → 6.0ms |     1 → 6 | `0x91544`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |

#### Improvements

Functions with the largest decrease in total time spent in the function and all its callees.

| Change |    Delta |              % |             Time |       Samples | Function                                  | Location                                         |
| -----: | -------: | -------------: | ---------------: | ------------: | ----------------------------------------- | ------------------------------------------------ |
|  -4.4% | -55.00ms |  32.7% → 31.6% |    1.26s → 1.20s | 1,260 → 1,205 | `__json_value_module_MOD_parse_value`     | `src/json-fortran/src/json_value_module.F90`     |
|  -2.6% | -46.00ms |  45.4% → 44.6% |    1.74s → 1.70s | 1,746 → 1,700 | `__json_value_module_MOD_parse_string`    | `src/json-fortran/src/json_value_module.F90`     |
|  -1.1% | -42.00ms |  97.3% → 97.2% |    3.74s → 3.70s | 3,745 → 3,703 | `__json_file_module_MOD_json_file_load`   | `src/json-fortran/src/json_file_module.F90`      |
|  -1.1% | -41.00ms |  97.3% → 97.2% |    3.74s → 3.70s | 3,744 → 3,703 | `__json_value_module_MOD_json_parse_file` | `src/json-fortran/src/json_value_module.F90`     |
|  -1.0% | -40.00ms | 100.0% → 99.9% |    3.84s → 3.80s | 3,849 → 3,809 | `MAIN__`                                  | `out/profile.f90`                                |
|  -1.0% | -38.00ms |         100.0% |    3.84s → 3.81s | 3,849 → 3,811 | `main`                                    | `out/profile.f90`                                |
|  -1.0% | -38.00ms |         100.0% |    3.84s → 3.81s | 3,849 → 3,811 | `0x27743`                                 | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  -1.0% | -38.00ms |         100.0% |    3.84s → 3.81s | 3,849 → 3,811 | `0x27817`                                 | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  -1.0% | -38.00ms |         100.0% |    3.84s → 3.81s | 3,849 → 3,811 | `_start`                                  | `<unknown>`                                      |
|  -0.8% | -28.00ms |  94.8% → 95.0% |    3.64s → 3.62s | 3,648 → 3,620 | `__json_value_module_MOD_parse_object`    | `src/json-fortran/src/json_value_module.F90`     |
| -25.5% | -26.00ms |    2.7% → 2.0% | 102.0ms → 76.0ms |      102 → 76 | `_init`                                   | `<unknown>`                                      |
|  -0.7% | -25.00ms |  94.6% → 94.9% |    3.64s → 3.61s | 3,643 → 3,618 | `__json_value_module_MOD_parse_array`     | `src/json-fortran/src/json_value_module.F90`     |
| -36.9% | -24.00ms |    1.7% → 1.1% |  65.0ms → 41.0ms |       65 → 41 | `0x92f67`                                 | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
| -34.4% | -22.00ms |    1.7% → 1.1% |  64.0ms → 42.0ms |       64 → 42 | `0x10a47b`                                | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| -44.9% | -22.00ms |    1.3% → 0.7% |  49.0ms → 27.0ms |       49 → 27 | `0x91c5f`                                 | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
| -28.6% | -18.00ms |    1.6% → 1.2% |  63.0ms → 45.0ms |       63 → 45 | `0x118680`                                | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| -76.2% | -16.00ms |    0.5% → 0.1% |   21.0ms → 5.0ms |        21 → 5 | `0x10c300`                                | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  -0.7% | -14.00ms |  53.5% → 53.7% |    2.06s → 2.04s | 2,061 → 2,047 | `__json_value_module_MOD_pop_char.part.0` | `src/json-fortran/src/json_value_module.F90`     |
| -56.5% | -13.00ms |    0.6% → 0.3% |  23.0ms → 10.0ms |       23 → 10 | `0x1186f8`                                | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| -18.1% | -13.00ms |    1.9% → 1.5% |  72.0ms → 59.0ms |       72 → 59 | `0x118970`                                | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### Ours

|  Change |    Delta |              % |            Time |       Samples | Function                                               | Location                                         |
| ------: | -------: | -------------: | --------------: | ------------: | ------------------------------------------------------ | ------------------------------------------------ |
|   -4.4% | -55.00ms |  32.7% → 31.6% |   1.26s → 1.20s | 1,260 → 1,205 | `__json_value_module_MOD_parse_value`                  | `src/json-fortran/src/json_value_module.F90`     |
|   -2.6% | -46.00ms |  45.4% → 44.6% |   1.74s → 1.70s | 1,746 → 1,700 | `__json_value_module_MOD_parse_string`                 | `src/json-fortran/src/json_value_module.F90`     |
|   -1.1% | -42.00ms |  97.3% → 97.2% |   3.74s → 3.70s | 3,745 → 3,703 | `__json_file_module_MOD_json_file_load`                | `src/json-fortran/src/json_file_module.F90`      |
|   -1.1% | -41.00ms |  97.3% → 97.2% |   3.74s → 3.70s | 3,744 → 3,703 | `__json_value_module_MOD_json_parse_file`              | `src/json-fortran/src/json_value_module.F90`     |
|   -1.0% | -40.00ms | 100.0% → 99.9% |   3.84s → 3.80s | 3,849 → 3,809 | `MAIN__`                                               | `out/profile.f90`                                |
|   -1.0% | -38.00ms |         100.0% |   3.84s → 3.81s | 3,849 → 3,811 | `main`                                                 | `out/profile.f90`                                |
|   -0.8% | -28.00ms |  94.8% → 95.0% |   3.64s → 3.62s | 3,648 → 3,620 | `__json_value_module_MOD_parse_object`                 | `src/json-fortran/src/json_value_module.F90`     |
|   -0.7% | -25.00ms |  94.6% → 94.9% |   3.64s → 3.61s | 3,643 → 3,618 | `__json_value_module_MOD_parse_array`                  | `src/json-fortran/src/json_value_module.F90`     |
|   -0.7% | -14.00ms |  53.5% → 53.7% |   2.06s → 2.04s | 2,061 → 2,047 | `__json_value_module_MOD_pop_char.part.0`              | `src/json-fortran/src/json_value_module.F90`     |
|  -60.0% |  -3.00ms |           0.1% |   5.0ms → 2.0ms |         5 → 2 | `__json_value_module_MOD_json_value_get_child_by_name` | `src/json-fortran/src/json_value_module.F90`     |
|  -50.0% |  -2.00ms |           0.1% |   4.0ms → 2.0ms |         4 → 2 | `__json_value_module_MOD_pop_char`                     | `src/json-fortran/src/json_value_module.F90`     |
| removed |  -2.00ms |    0.1% → 0.0% |     2.0ms → 0ms |         2 → 0 | `__json_value_module_MOD_json_initialize`              | `src/json-fortran/src/json_value_module.F90`     |
| removed |  -2.00ms |    0.1% → 0.0% |     2.0ms → 0ms |         2 → 0 | `__json_file_module_MOD_initialize_json_core_in_file`  | `src/json-fortran/src/json_file_module.F90`      |
|  -66.7% |  -2.00ms |   0.1% → <0.1% |   3.0ms → 1.0ms |         3 → 1 | `__json_value_module_MOD_name_strings_equal`           | `src/json-fortran/src/json_value_module.F90`     |
|   -1.6% |  -1.00ms |           1.6% | 61.0ms → 60.0ms |       61 → 60 | `__json_value_module_MOD_parse_for_chars`              | `src/json-fortran/src/json_value_module.F90`     |
| removed |  -1.00ms |   <0.1% → 0.0% |     1.0ms → 0ms |         1 → 0 | `__json_string_utilities_MOD_string_to_real`           | `src/json-fortran/src/json_string_utilities.F90` |
| removed |  -1.00ms |   <0.1% → 0.0% |     1.0ms → 0ms |         1 → 0 | `__json_value_module_MOD_string_to_dble`               | `src/json-fortran/src/json_value_module.F90`     |
|  -33.3% |  -1.00ms |           0.1% |   3.0ms → 2.0ms |         3 → 2 | `__json_value_module_MOD_to_integer`                   | `src/json-fortran/src/json_value_module.F90`     |

##### Native

| Change |    Delta |           % |              Time |       Samples | Function   | Location                                         |
| -----: | -------: | ----------: | ----------------: | ------------: | ---------- | ------------------------------------------------ |
|  -1.0% | -38.00ms |      100.0% |     3.84s → 3.81s | 3,849 → 3,811 | `0x27743`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  -1.0% | -38.00ms |      100.0% |     3.84s → 3.81s | 3,849 → 3,811 | `0x27817`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  -1.0% | -38.00ms |      100.0% |     3.84s → 3.81s | 3,849 → 3,811 | `_start`   | `<unknown>`                                      |
| -25.5% | -26.00ms | 2.7% → 2.0% |  102.0ms → 76.0ms |      102 → 76 | `_init`    | `<unknown>`                                      |
| -36.9% | -24.00ms | 1.7% → 1.1% |   65.0ms → 41.0ms |       65 → 41 | `0x92f67`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
| -34.4% | -22.00ms | 1.7% → 1.1% |   64.0ms → 42.0ms |       64 → 42 | `0x10a47b` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| -44.9% | -22.00ms | 1.3% → 0.7% |   49.0ms → 27.0ms |       49 → 27 | `0x91c5f`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
| -28.6% | -18.00ms | 1.6% → 1.2% |   63.0ms → 45.0ms |       63 → 45 | `0x118680` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| -76.2% | -16.00ms | 0.5% → 0.1% |    21.0ms → 5.0ms |        21 → 5 | `0x10c300` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| -56.5% | -13.00ms | 0.6% → 0.3% |   23.0ms → 10.0ms |       23 → 10 | `0x1186f8` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| -18.1% | -13.00ms | 1.9% → 1.5% |   72.0ms → 59.0ms |       72 → 59 | `0x118970` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| -26.7% | -12.00ms | 1.2% → 0.9% |   45.0ms → 33.0ms |       45 → 33 | `0x118720` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| -20.7% | -12.00ms | 1.5% → 1.2% |   58.0ms → 46.0ms |       58 → 46 | `0x118994` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  -8.3% | -11.00ms | 3.4% → 3.2% | 132.0ms → 121.0ms |     132 → 121 | `0x109623` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| -50.0% |  -9.00ms | 0.5% → 0.2% |    18.0ms → 9.0ms |        18 → 9 | `0x90dc0`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
| -80.0% |  -8.00ms | 0.3% → 0.1% |    10.0ms → 2.0ms |        10 → 2 | `0x8fbf0`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
| -61.5% |  -8.00ms | 0.3% → 0.1% |    13.0ms → 5.0ms |        13 → 5 | `0x9980f`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
| -57.1% |  -8.00ms | 0.4% → 0.2% |    14.0ms → 6.0ms |        14 → 6 | `0x1c42b`  | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| -57.1% |  -8.00ms | 0.4% → 0.2% |    14.0ms → 6.0ms |        14 → 6 | `0xfa6b3`  | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| -63.6% |  -7.00ms | 0.3% → 0.1% |    11.0ms → 4.0ms |        11 → 4 | `0x92260`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |

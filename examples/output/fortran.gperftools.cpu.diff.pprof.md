# CPU profile diff

Took 3.95s → 4.04s (+91.00ms, +2.3%) over 3,956 samples → 4,047 samples (1.0ms per sample).

| Category | Change |     Delta |             % |          Time |       Samples |
| -------- | -----: | --------: | ------------: | ------------: | ------------: |
| Ours     |  +4.8% | +114.00ms | 59.9% → 61.4% | 2.36s → 2.48s | 2,369 → 2,483 |
| Native   |  -1.4% |  -23.00ms | 40.1% → 38.6% | 1.58s → 1.56s | 1,587 → 1,564 |

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time spent directly in the function body, excluding callees.

|  Change |    Delta |             % |              Time |       Samples | Function                                    | Location                                         |
| ------: | -------: | ------------: | ----------------: | ------------: | ------------------------------------------- | ------------------------------------------------ |
|   +4.0% | +85.00ms | 53.1% → 54.0% |     2.09s → 2.18s | 2,099 → 2,184 | `__json_value_module_MOD_pop_char.part.0`   | `src/json-fortran/src/json_value_module.F90`     |
|  +69.7% | +23.00ms |   0.8% → 1.4% |   33.0ms → 56.0ms |       33 → 56 | `0xddb88`                                   | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  +26.2% | +16.00ms |   1.5% → 1.9% |   61.0ms → 77.0ms |       61 → 77 | `0x11899c`                                  | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  +59.1% | +13.00ms |   0.6% → 0.9% |   22.0ms → 35.0ms |       22 → 35 | `__json_value_module_MOD_parse_object`      | `src/json-fortran/src/json_value_module.F90`     |
|  +28.2% | +11.00ms |   1.0% → 1.2% |   39.0ms → 50.0ms |       39 → 50 | `0x1189ec`                                  | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  +52.6% | +10.00ms |   0.5% → 0.7% |   19.0ms → 29.0ms |       19 → 29 | `__json_value_module_MOD_parse_value`       | `src/json-fortran/src/json_value_module.F90`     |
| +200.0% | +10.00ms |   0.1% → 0.4% |    5.0ms → 15.0ms |        5 → 15 | `0x92a58`                                   | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
| +112.5% |  +9.00ms |   0.2% → 0.4% |    8.0ms → 17.0ms |        8 → 17 | `0x92dcc`                                   | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  +61.5% |  +8.00ms |   0.3% → 0.5% |   13.0ms → 21.0ms |       13 → 21 | `0x90dc0`                                   | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|   +5.1% |  +7.00ms |   3.4% → 3.5% | 136.0ms → 143.0ms |     136 → 143 | `__json_value_module_MOD_parse_string`      | `src/json-fortran/src/json_value_module.F90`     |
|  +46.7% |  +7.00ms |   0.4% → 0.5% |   15.0ms → 22.0ms |       15 → 22 | `0x9e658`                                   | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
| +100.0% |  +7.00ms |   0.2% → 0.3% |    7.0ms → 14.0ms |        7 → 14 | `0xdd884`                                   | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  +42.9% |  +6.00ms |   0.4% → 0.5% |   14.0ms → 20.0ms |       14 → 20 | `0x10c300`                                  | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  +37.5% |  +6.00ms |   0.4% → 0.5% |   16.0ms → 22.0ms |       16 → 22 | `0x1189f8`                                  | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| +600.0% |  +6.00ms |  <0.1% → 0.2% |     1.0ms → 7.0ms |         1 → 7 | `0x85f8c`                                   | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  +45.5% |  +5.00ms |   0.3% → 0.4% |   11.0ms → 16.0ms |       11 → 16 | `__json_value_module_MOD_destroy_json_data` | `src/json-fortran/src/json_value_module.F90`     |
| +250.0% |  +5.00ms |   0.1% → 0.2% |     2.0ms → 7.0ms |         2 → 7 | `0x91b10`                                   | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  +66.7% |  +4.00ms |          0.2% |    6.0ms → 10.0ms |        6 → 10 | `0x8e9cc`                                   | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|   +9.1% |  +4.00ms |   1.1% → 1.2% |   44.0ms → 48.0ms |       44 → 48 | `0x118680`                                  | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| +133.3% |  +4.00ms |   0.1% → 0.2% |     3.0ms → 7.0ms |         3 → 7 | `0x8ea94`                                   | `usr/lib/aarch64-linux-gnu/libc.so.6`            |

##### Ours

|  Change |    Delta |             % |              Time |       Samples | Function                                          | Location                                     |
| ------: | -------: | ------------: | ----------------: | ------------: | ------------------------------------------------- | -------------------------------------------- |
|   +4.0% | +85.00ms | 53.1% → 54.0% |     2.09s → 2.18s | 2,099 → 2,184 | `__json_value_module_MOD_pop_char.part.0`         | `src/json-fortran/src/json_value_module.F90` |
|  +59.1% | +13.00ms |   0.6% → 0.9% |   22.0ms → 35.0ms |       22 → 35 | `__json_value_module_MOD_parse_object`            | `src/json-fortran/src/json_value_module.F90` |
|  +52.6% | +10.00ms |   0.5% → 0.7% |   19.0ms → 29.0ms |       19 → 29 | `__json_value_module_MOD_parse_value`             | `src/json-fortran/src/json_value_module.F90` |
|   +5.1% |  +7.00ms |   3.4% → 3.5% | 136.0ms → 143.0ms |     136 → 143 | `__json_value_module_MOD_parse_string`            | `src/json-fortran/src/json_value_module.F90` |
|  +45.5% |  +5.00ms |   0.3% → 0.4% |   11.0ms → 16.0ms |       11 → 16 | `__json_value_module_MOD_destroy_json_data`       | `src/json-fortran/src/json_value_module.F90` |
|  +42.9% |  +3.00ms |          0.2% |    7.0ms → 10.0ms |        7 → 10 | `__json_value_module_MOD_json_value_add_member`   | `src/json-fortran/src/json_value_module.F90` |
|  +37.5% |  +3.00ms |   0.2% → 0.3% |    8.0ms → 11.0ms |        8 → 11 | `__json_value_module_MOD_parse_for_chars`         | `src/json-fortran/src/json_value_module.F90` |
| +100.0% |  +3.00ms |          0.1% |     3.0ms → 6.0ms |         3 → 6 | `__json_value_module_MOD_json_info`               | `src/json-fortran/src/json_value_module.F90` |
|     new |  +1.00ms |  0.0% → <0.1% |       0ms → 1.0ms |         0 → 1 | `__json_value_module_MOD_string_to_int`           | `src/json-fortran/src/json_value_module.F90` |
|     new |  +1.00ms |  0.0% → <0.1% |       0ms → 1.0ms |         0 → 1 | `__json_value_module_MOD_to_logical`              | `src/json-fortran/src/json_value_module.F90` |
|     new |  +1.00ms |  0.0% → <0.1% |       0ms → 1.0ms |         0 → 1 | `__json_value_module_MOD_json_get_string_by_path` | `src/json-fortran/src/json_value_module.F90` |
|     new |  +1.00ms |  0.0% → <0.1% |       0ms → 1.0ms |         0 → 1 | `__json_value_module_MOD_to_object`               | `src/json-fortran/src/json_value_module.F90` |

##### Native

|  Change |    Delta |            % |            Time | Samples | Function   | Location                                         |
| ------: | -------: | -----------: | --------------: | ------: | ---------- | ------------------------------------------------ |
|  +69.7% | +23.00ms |  0.8% → 1.4% | 33.0ms → 56.0ms | 33 → 56 | `0xddb88`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  +26.2% | +16.00ms |  1.5% → 1.9% | 61.0ms → 77.0ms | 61 → 77 | `0x11899c` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  +28.2% | +11.00ms |  1.0% → 1.2% | 39.0ms → 50.0ms | 39 → 50 | `0x1189ec` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| +200.0% | +10.00ms |  0.1% → 0.4% |  5.0ms → 15.0ms |  5 → 15 | `0x92a58`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
| +112.5% |  +9.00ms |  0.2% → 0.4% |  8.0ms → 17.0ms |  8 → 17 | `0x92dcc`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  +61.5% |  +8.00ms |  0.3% → 0.5% | 13.0ms → 21.0ms | 13 → 21 | `0x90dc0`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  +46.7% |  +7.00ms |  0.4% → 0.5% | 15.0ms → 22.0ms | 15 → 22 | `0x9e658`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
| +100.0% |  +7.00ms |  0.2% → 0.3% |  7.0ms → 14.0ms |  7 → 14 | `0xdd884`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  +42.9% |  +6.00ms |  0.4% → 0.5% | 14.0ms → 20.0ms | 14 → 20 | `0x10c300` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  +37.5% |  +6.00ms |  0.4% → 0.5% | 16.0ms → 22.0ms | 16 → 22 | `0x1189f8` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| +600.0% |  +6.00ms | <0.1% → 0.2% |   1.0ms → 7.0ms |   1 → 7 | `0x85f8c`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
| +250.0% |  +5.00ms |  0.1% → 0.2% |   2.0ms → 7.0ms |   2 → 7 | `0x91b10`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  +66.7% |  +4.00ms |         0.2% |  6.0ms → 10.0ms |  6 → 10 | `0x8e9cc`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|   +9.1% |  +4.00ms |  1.1% → 1.2% | 44.0ms → 48.0ms | 44 → 48 | `0x118680` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| +133.3% |  +4.00ms |  0.1% → 0.2% |   3.0ms → 7.0ms |   3 → 7 | `0x8ea94`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  +20.0% |  +4.00ms |  0.5% → 0.6% | 20.0ms → 24.0ms | 20 → 24 | `0x9123c`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  +33.3% |  +4.00ms |  0.3% → 0.4% | 12.0ms → 16.0ms | 12 → 16 | `0x9d100`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  +10.3% |  +4.00ms |  1.0% → 1.1% | 39.0ms → 43.0ms | 39 → 43 | `0x91228`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  +66.7% |  +4.00ms |         0.2% |  6.0ms → 10.0ms |  6 → 10 | `0x90e74`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
| +400.0% |  +4.00ms | <0.1% → 0.1% |   1.0ms → 5.0ms |   1 → 5 | `0xf8ea8`  | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

#### Improvements

Functions with the largest decrease in time spent directly in the function body, excluding callees.

##### Ours

|  Change |   Delta |            % |            Time | Samples | Function                                                | Location                                         |
| ------: | ------: | -----------: | --------------: | ------: | ------------------------------------------------------- | ------------------------------------------------ |
|  -37.5% | -3.00ms |  0.2% → 0.1% |   8.0ms → 5.0ms |   8 → 5 | `__json_value_module_MOD_parse_number`                  | `src/json-fortran/src/json_value_module.F90`     |
|  -60.0% | -3.00ms | 0.1% → <0.1% |   5.0ms → 2.0ms |   5 → 2 | `__json_string_utilities_MOD_string_to_integer`         | `src/json-fortran/src/json_string_utilities.F90` |
|  -13.3% | -2.00ms |  0.4% → 0.3% | 15.0ms → 13.0ms | 15 → 13 | `__json_value_module_MOD_json_value_destroy`            | `src/json-fortran/src/json_value_module.F90`     |
|  -40.0% | -2.00ms |         0.1% |   5.0ms → 3.0ms |   5 → 3 | `__json_value_module_MOD_json_value_create`             | `src/json-fortran/src/json_value_module.F90`     |
|  -50.0% | -2.00ms | 0.1% → <0.1% |   4.0ms → 2.0ms |   4 → 2 | `__json_value_module_MOD_to_string`                     | `src/json-fortran/src/json_value_module.F90`     |
|  -50.0% | -2.00ms | 0.1% → <0.1% |   4.0ms → 2.0ms |   4 → 2 | `__json_value_module_MOD_pop_char`                      | `src/json-fortran/src/json_value_module.F90`     |
| removed | -1.00ms | <0.1% → 0.0% |     1.0ms → 0ms |   1 → 0 | `__json_value_module_MOD_to_null`                       | `src/json-fortran/src/json_value_module.F90`     |
|   -5.6% | -1.00ms |  0.5% → 0.4% | 18.0ms → 17.0ms | 18 → 17 | `__json_string_utilities_MOD_unescape_string`           | `src/json-fortran/src/json_string_utilities.F90` |
| removed | -1.00ms | <0.1% → 0.0% |     1.0ms → 0ms |   1 → 0 | `__json_value_module_MOD_push_char`                     | `src/json-fortran/src/json_value_module.F90`     |
| removed | -1.00ms | <0.1% → 0.0% |     1.0ms → 0ms |   1 → 0 | `__json_value_module_MOD_json_value_get_child_by_index` | `src/json-fortran/src/json_value_module.F90`     |
| removed | -1.00ms | <0.1% → 0.0% |     1.0ms → 0ms |   1 → 0 | `__json_value_module_MOD_json_value_get_child_by_name`  | `src/json-fortran/src/json_value_module.F90`     |

##### Native

|  Change |    Delta |            % |            Time | Samples | Function   | Location                                         |
| ------: | -------: | -----------: | --------------: | ------: | ---------- | ------------------------------------------------ |
|  -40.9% | -18.00ms |  1.1% → 0.6% | 44.0ms → 26.0ms | 44 → 26 | `0x92284`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  -17.3% | -14.00ms |  2.0% → 1.7% | 81.0ms → 67.0ms | 81 → 67 | `_init`    | `<unknown>`                                      |
|  -25.0% | -13.00ms |  1.3% → 1.0% | 52.0ms → 39.0ms | 52 → 39 | `0x929e0`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  -18.5% | -12.00ms |  1.6% → 1.3% | 65.0ms → 53.0ms | 65 → 53 | `0x118970` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  -42.3% | -11.00ms |  0.7% → 0.4% | 26.0ms → 15.0ms | 26 → 15 | `0x9d240`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  -20.5% |  -9.00ms |  1.1% → 0.9% | 44.0ms → 35.0ms | 44 → 35 | `0x118720` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  -39.1% |  -9.00ms |  0.6% → 0.3% | 23.0ms → 14.0ms | 23 → 14 | `0x1186f8` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  -90.0% |  -9.00ms | 0.3% → <0.1% |  10.0ms → 1.0ms |  10 → 1 | `0x109bc0` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  -15.4% |  -8.00ms |  1.3% → 1.1% | 52.0ms → 44.0ms | 52 → 44 | `0x8faf4`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  -53.8% |  -7.00ms |  0.3% → 0.1% |  13.0ms → 6.0ms |  13 → 6 | `0x8faa0`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  -46.2% |  -6.00ms |  0.3% → 0.2% |  13.0ms → 7.0ms |  13 → 7 | `0x91234`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  -54.5% |  -6.00ms |  0.3% → 0.1% |  11.0ms → 5.0ms |  11 → 5 | `0x92260`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  -11.1% |  -6.00ms |  1.4% → 1.2% | 54.0ms → 48.0ms | 54 → 48 | `0x118994` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| removed |  -6.00ms |  0.2% → 0.0% |     6.0ms → 0ms |   6 → 0 | `0x105ff0` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  -46.2% |  -6.00ms |  0.3% → 0.2% |  13.0ms → 7.0ms |  13 → 7 | `0x8e96c`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  -62.5% |  -5.00ms |  0.2% → 0.1% |   8.0ms → 3.0ms |   8 → 3 | `0x8e98c`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  -83.3% |  -5.00ms | 0.2% → <0.1% |   6.0ms → 1.0ms |   6 → 1 | `0x8fb44`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  -71.4% |  -5.00ms | 0.2% → <0.1% |   7.0ms → 2.0ms |   7 → 2 | `0x118708` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| removed |  -5.00ms |  0.1% → 0.0% |     5.0ms → 0ms |   5 → 0 | `0x8fab8`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  -62.5% |  -5.00ms |  0.2% → 0.1% |   8.0ms → 3.0ms |   8 → 3 | `0x8ea8c`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |

### Total time

#### Regressions

Functions with the largest increase in total time spent in the function and all its callees.

| Change |     Delta |              % |              Time |       Samples | Function                                        | Location                                         |
| -----: | --------: | -------------: | ----------------: | ------------: | ----------------------------------------------- | ------------------------------------------------ |
|  +2.8% | +106.00ms |  96.8% → 97.2% |     3.82s → 3.93s | 3,829 → 3,935 | `__json_value_module_MOD_json_parse_file`       | `src/json-fortran/src/json_value_module.F90`     |
|  +2.8% | +106.00ms |  96.8% → 97.2% |     3.82s → 3.93s | 3,829 → 3,935 | `__json_file_module_MOD_json_file_load`         | `src/json-fortran/src/json_file_module.F90`      |
|  +4.8% | +105.00ms |  55.0% → 56.4% |     2.17s → 2.28s | 2,176 → 2,281 | `__json_value_module_MOD_pop_char.part.0`       | `src/json-fortran/src/json_value_module.F90`     |
|  +2.4% |  +95.00ms | 99.9% → 100.0% |     3.95s → 4.04s | 3,952 → 4,047 | `MAIN__`                                        | `out/profile.f90`                                |
|  +2.5% |  +93.00ms |  94.4% → 94.6% |     3.73s → 3.82s | 3,736 → 3,829 | `__json_value_module_MOD_parse_object`          | `src/json-fortran/src/json_value_module.F90`     |
|  +2.3% |  +91.00ms |         100.0% |     3.95s → 4.04s | 3,956 → 4,047 | `main`                                          | `out/profile.f90`                                |
|  +2.3% |  +91.00ms |         100.0% |     3.95s → 4.04s | 3,956 → 4,047 | `0x27743`                                       | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  +2.3% |  +91.00ms |         100.0% |     3.95s → 4.04s | 3,956 → 4,047 | `0x27817`                                       | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  +2.3% |  +91.00ms |         100.0% |     3.95s → 4.04s | 3,956 → 4,047 | `_start`                                        | `<unknown>`                                      |
|  +2.3% |  +86.00ms |          94.4% |     3.73s → 3.82s | 3,734 → 3,820 | `__json_value_module_MOD_parse_array`           | `src/json-fortran/src/json_value_module.F90`     |
|  +4.8% |  +59.00ms |  31.1% → 31.9% |     1.23s → 1.29s | 1,232 → 1,291 | `__json_value_module_MOD_parse_value`           | `src/json-fortran/src/json_value_module.F90`     |
|  +2.0% |  +36.00ms |  44.5% → 44.4% |     1.76s → 1.79s | 1,760 → 1,796 | `__json_value_module_MOD_parse_string`          | `src/json-fortran/src/json_value_module.F90`     |
| +51.0% |  +26.00ms |    1.3% → 1.9% |   51.0ms → 77.0ms |       51 → 77 | `0x10a47b`                                      | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| +69.7% |  +23.00ms |    0.8% → 1.4% |   33.0ms → 56.0ms |       33 → 56 | `0xddb88`                                       | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
| +69.7% |  +23.00ms |    0.8% → 1.4% |   33.0ms → 56.0ms |       33 → 56 | `0x10bd0b`                                      | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| +69.7% |  +23.00ms |    0.8% → 1.4% |   33.0ms → 56.0ms |       33 → 56 | `0x10c353`                                      | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  +5.8% |  +18.00ms |    7.8% → 8.1% | 310.0ms → 328.0ms |     310 → 328 | `__json_string_utilities_MOD_string_to_integer` | `src/json-fortran/src/json_string_utilities.F90` |
| +26.2% |  +16.00ms |    1.5% → 1.9% |   61.0ms → 77.0ms |       61 → 77 | `0x11899c`                                      | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| +72.2% |  +13.00ms |    0.5% → 0.8% |   18.0ms → 31.0ms |       18 → 31 | `__json_value_module_MOD_destroy_json_data`     | `src/json-fortran/src/json_value_module.F90`     |
| +24.4% |  +11.00ms |    1.1% → 1.4% |   45.0ms → 56.0ms |       45 → 56 | `0x1093fb`                                      | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### Ours

|  Change |     Delta |              % |              Time |       Samples | Function                                          | Location                                           |
| ------: | --------: | -------------: | ----------------: | ------------: | ------------------------------------------------- | -------------------------------------------------- |
|   +2.8% | +106.00ms |  96.8% → 97.2% |     3.82s → 3.93s | 3,829 → 3,935 | `__json_value_module_MOD_json_parse_file`         | `src/json-fortran/src/json_value_module.F90`       |
|   +2.8% | +106.00ms |  96.8% → 97.2% |     3.82s → 3.93s | 3,829 → 3,935 | `__json_file_module_MOD_json_file_load`           | `src/json-fortran/src/json_file_module.F90`        |
|   +4.8% | +105.00ms |  55.0% → 56.4% |     2.17s → 2.28s | 2,176 → 2,281 | `__json_value_module_MOD_pop_char.part.0`         | `src/json-fortran/src/json_value_module.F90`       |
|   +2.4% |  +95.00ms | 99.9% → 100.0% |     3.95s → 4.04s | 3,952 → 4,047 | `MAIN__`                                          | `out/profile.f90`                                  |
|   +2.5% |  +93.00ms |  94.4% → 94.6% |     3.73s → 3.82s | 3,736 → 3,829 | `__json_value_module_MOD_parse_object`            | `src/json-fortran/src/json_value_module.F90`       |
|   +2.3% |  +91.00ms |         100.0% |     3.95s → 4.04s | 3,956 → 4,047 | `main`                                            | `out/profile.f90`                                  |
|   +2.3% |  +86.00ms |          94.4% |     3.73s → 3.82s | 3,734 → 3,820 | `__json_value_module_MOD_parse_array`             | `src/json-fortran/src/json_value_module.F90`       |
|   +4.8% |  +59.00ms |  31.1% → 31.9% |     1.23s → 1.29s | 1,232 → 1,291 | `__json_value_module_MOD_parse_value`             | `src/json-fortran/src/json_value_module.F90`       |
|   +2.0% |  +36.00ms |  44.5% → 44.4% |     1.76s → 1.79s | 1,760 → 1,796 | `__json_value_module_MOD_parse_string`            | `src/json-fortran/src/json_value_module.F90`       |
|   +5.8% |  +18.00ms |    7.8% → 8.1% | 310.0ms → 328.0ms |     310 → 328 | `__json_string_utilities_MOD_string_to_integer`   | `src/json-fortran/src/json_string_utilities.F90`   |
|  +72.2% |  +13.00ms |    0.5% → 0.8% |   18.0ms → 31.0ms |       18 → 31 | `__json_value_module_MOD_destroy_json_data`       | `src/json-fortran/src/json_value_module.F90`       |
|  +60.0% |   +6.00ms |    0.3% → 0.4% |   10.0ms → 16.0ms |       10 → 16 | `__json_value_module_MOD_json_value_add_member`   | `src/json-fortran/src/json_value_module.F90`       |
|   +1.4% |   +5.00ms |    9.1% → 9.0% | 361.0ms → 366.0ms |     361 → 366 | `__json_value_module_MOD_string_to_int`           | `src/json-fortran/src/json_value_module.F90`       |
|  +19.0% |   +4.00ms |    0.5% → 0.6% |   21.0ms → 25.0ms |       21 → 25 | `__json_value_module_MOD_json_get_string_by_path` | `src/json-fortran/src/json_get_scalar_by_path.inc` |
|     new |   +4.00ms |    0.0% → 0.1% |       0ms → 4.0ms |         0 → 4 | `__json_value_module_MOD_json_get_string`         | `src/json-fortran/src/json_value_module.F90`       |
| +100.0% |   +3.00ms |           0.1% |     3.0ms → 6.0ms |         3 → 6 | `__json_value_module_MOD_json_info`               | `src/json-fortran/src/json_value_module.F90`       |
| +300.0% |   +3.00ms |   <0.1% → 0.1% |     1.0ms → 4.0ms |         1 → 4 | `__json_value_module_MOD_to_logical`              | `src/json-fortran/src/json_value_module.F90`       |
|   +8.3% |   +2.00ms |           0.6% |   24.0ms → 26.0ms |       24 → 26 | `__json_file_module_MOD_json_file_get_string`     | `src/json-fortran/src/json_file_module.F90`        |
|     new |   +2.00ms |   0.0% → <0.1% |       0ms → 2.0ms |         0 → 2 | `__json_value_module_MOD_to_array`                | `src/json-fortran/src/json_value_module.F90`       |
|     new |   +2.00ms |   0.0% → <0.1% |       0ms → 2.0ms |         0 → 2 | `__json_value_module_MOD_to_object`               | `src/json-fortran/src/json_value_module.F90`       |

##### Native

|  Change |    Delta |           % |            Time |       Samples | Function   | Location                                         |
| ------: | -------: | ----------: | --------------: | ------------: | ---------- | ------------------------------------------------ |
|   +2.3% | +91.00ms |      100.0% |   3.95s → 4.04s | 3,956 → 4,047 | `0x27743`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|   +2.3% | +91.00ms |      100.0% |   3.95s → 4.04s | 3,956 → 4,047 | `0x27817`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|   +2.3% | +91.00ms |      100.0% |   3.95s → 4.04s | 3,956 → 4,047 | `_start`   | `<unknown>`                                      |
|  +51.0% | +26.00ms | 1.3% → 1.9% | 51.0ms → 77.0ms |       51 → 77 | `0x10a47b` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  +69.7% | +23.00ms | 0.8% → 1.4% | 33.0ms → 56.0ms |       33 → 56 | `0xddb88`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  +69.7% | +23.00ms | 0.8% → 1.4% | 33.0ms → 56.0ms |       33 → 56 | `0x10bd0b` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  +69.7% | +23.00ms | 0.8% → 1.4% | 33.0ms → 56.0ms |       33 → 56 | `0x10c353` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  +26.2% | +16.00ms | 1.5% → 1.9% | 61.0ms → 77.0ms |       61 → 77 | `0x11899c` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  +24.4% | +11.00ms | 1.1% → 1.4% | 45.0ms → 56.0ms |       45 → 56 | `0x1093fb` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  +28.2% | +11.00ms | 1.0% → 1.2% | 39.0ms → 50.0ms |       39 → 50 | `0x1189ec` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| +200.0% | +10.00ms | 0.1% → 0.4% |  5.0ms → 15.0ms |        5 → 15 | `0x10b26f` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| +200.0% | +10.00ms | 0.1% → 0.4% |  5.0ms → 15.0ms |        5 → 15 | `0x92a58`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
| +112.5% |  +9.00ms | 0.2% → 0.4% |  8.0ms → 17.0ms |        8 → 17 | `0x92dcc`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
| +180.0% |  +9.00ms | 0.1% → 0.3% |  5.0ms → 14.0ms |        5 → 14 | `0x10b263` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| +225.0% |  +9.00ms | 0.1% → 0.3% |  4.0ms → 13.0ms |        4 → 13 | `0x109d07` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  +61.5% |  +8.00ms | 0.3% → 0.5% | 13.0ms → 21.0ms |       13 → 21 | `0x90dc0`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  +25.0% |  +7.00ms | 0.7% → 0.9% | 28.0ms → 35.0ms |       28 → 35 | `0xfa7fb`  | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  +46.7% |  +7.00ms | 0.4% → 0.5% | 15.0ms → 22.0ms |       15 → 22 | `0x9e658`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
| +100.0% |  +7.00ms | 0.2% → 0.3% |  7.0ms → 14.0ms |        7 → 14 | `0xdd884`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
| +100.0% |  +7.00ms | 0.2% → 0.3% |  7.0ms → 14.0ms |        7 → 14 | `0x10c997` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

#### Improvements

Functions with the largest decrease in total time spent in the function and all its callees.

| Change |    Delta |             % |              Time |   Samples | Function                                     | Location                                         |
| -----: | -------: | ------------: | ----------------: | --------: | -------------------------------------------- | ------------------------------------------------ |
| -40.9% | -18.00ms |   1.1% → 0.6% |   44.0ms → 26.0ms |   44 → 26 | `0x92284`                                    | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
| -17.3% | -17.00ms |   2.5% → 2.0% |   98.0ms → 81.0ms |   98 → 81 | `0x92a9b`                                    | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
| -17.0% | -16.00ms |   2.4% → 1.9% |   94.0ms → 78.0ms |   94 → 78 | `__json_value_module_MOD_json_value_destroy` | `src/json-fortran/src/json_value_module.F90`     |
| -17.0% | -16.00ms |   2.4% → 1.9% |   94.0ms → 78.0ms |   94 → 78 | `__json_file_module_MOD_json_file_destroy`   | `src/json-fortran/src/json_file_module.F90`      |
|  -3.2% | -15.00ms | 11.7% → 11.1% | 463.0ms → 448.0ms | 463 → 448 | `__json_value_module_MOD_parse_number`       | `src/json-fortran/src/json_value_module.F90`     |
| -17.3% | -14.00ms |   2.0% → 1.7% |   81.0ms → 67.0ms |   81 → 67 | `_init`                                      | `<unknown>`                                      |
| -25.0% | -13.00ms |   1.3% → 1.0% |   52.0ms → 39.0ms |   52 → 39 | `0x929e0`                                    | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
| -25.5% | -13.00ms |   1.3% → 0.9% |   51.0ms → 38.0ms |   51 → 38 | `0xfa6bf`                                    | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  -9.9% | -12.00ms |   3.1% → 2.7% | 121.0ms → 109.0ms | 121 → 109 | `0x1c1b3`                                    | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| -18.5% | -12.00ms |   1.6% → 1.3% |   65.0ms → 53.0ms |   65 → 53 | `0x118970`                                   | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| -42.3% | -11.00ms |   0.7% → 0.4% |   26.0ms → 15.0ms |   26 → 15 | `0x9d240`                                    | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
| -10.8% |  -9.00ms |   2.1% → 1.8% |   83.0ms → 74.0ms |   83 → 74 | `0x9102b`                                    | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  -7.3% |  -9.00ms |   3.1% → 2.8% | 123.0ms → 114.0ms | 123 → 114 | `0x109623`                                   | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| -20.5% |  -9.00ms |   1.1% → 0.9% |   44.0ms → 35.0ms |   44 → 35 | `0x118720`                                   | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| -39.1% |  -9.00ms |   0.6% → 0.3% |   23.0ms → 14.0ms |   23 → 14 | `0x1186f8`                                   | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| -90.0% |  -9.00ms |  0.3% → <0.1% |    10.0ms → 1.0ms |    10 → 1 | `0x109bc0`                                   | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| -27.3% |  -9.00ms |   0.8% → 0.6% |   33.0ms → 24.0ms |   33 → 24 | `0x91c5f`                                    | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
| -40.0% |  -8.00ms |   0.5% → 0.3% |   20.0ms → 12.0ms |   20 → 12 | `0x10b283`                                   | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| -57.1% |  -8.00ms |   0.4% → 0.1% |    14.0ms → 6.0ms |    14 → 6 | `0x1c42b`                                    | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| -15.4% |  -8.00ms |   1.3% → 1.1% |   52.0ms → 44.0ms |   52 → 44 | `0x8faf4`                                    | `usr/lib/aarch64-linux-gnu/libc.so.6`            |

##### Ours

|  Change |    Delta |             % |              Time |   Samples | Function                                                | Location                                     |
| ------: | -------: | ------------: | ----------------: | --------: | ------------------------------------------------------- | -------------------------------------------- |
|  -17.0% | -16.00ms |   2.4% → 1.9% |   94.0ms → 78.0ms |   94 → 78 | `__json_value_module_MOD_json_value_destroy`            | `src/json-fortran/src/json_value_module.F90` |
|  -17.0% | -16.00ms |   2.4% → 1.9% |   94.0ms → 78.0ms |   94 → 78 | `__json_file_module_MOD_json_file_destroy`              | `src/json-fortran/src/json_file_module.F90`  |
|   -3.2% | -15.00ms | 11.7% → 11.1% | 463.0ms → 448.0ms | 463 → 448 | `__json_value_module_MOD_parse_number`                  | `src/json-fortran/src/json_value_module.F90` |
|   -6.1% |  -6.00ms |   2.5% → 2.3% |   99.0ms → 93.0ms |   99 → 93 | `__json_value_module_MOD_json_value_create`             | `src/json-fortran/src/json_value_module.F90` |
|   -7.9% |  -6.00ms |   1.9% → 1.7% |   76.0ms → 70.0ms |   76 → 70 | `__json_value_module_MOD_parse_for_chars`               | `src/json-fortran/src/json_value_module.F90` |
|  -62.5% |  -5.00ms |   0.2% → 0.1% |     8.0ms → 3.0ms |     8 → 3 | `__json_value_module_MOD_to_string`                     | `src/json-fortran/src/json_value_module.F90` |
| removed |  -3.00ms |   0.1% → 0.0% |       3.0ms → 0ms |     3 → 0 | `__json_value_module_MOD_to_null`                       | `src/json-fortran/src/json_value_module.F90` |
|  -50.0% |  -2.00ms |  0.1% → <0.1% |     4.0ms → 2.0ms |     4 → 2 | `__json_value_module_MOD_pop_char`                      | `src/json-fortran/src/json_value_module.F90` |
|   -5.0% |  -1.00ms |          0.5% |   20.0ms → 19.0ms |   20 → 19 | `__json_value_module_MOD_json_get_by_path_default`      | `src/json-fortran/src/json_value_module.F90` |
|   -5.0% |  -1.00ms |          0.5% |   20.0ms → 19.0ms |   20 → 19 | `__json_value_module_MOD_json_get_by_path`              | `src/json-fortran/src/json_value_module.F90` |
| removed |  -1.00ms |  <0.1% → 0.0% |       1.0ms → 0ms |     1 → 0 | `__json_value_module_MOD_push_char`                     | `src/json-fortran/src/json_value_module.F90` |
| removed |  -1.00ms |  <0.1% → 0.0% |       1.0ms → 0ms |     1 → 0 | `__json_value_module_MOD_json_value_get_child_by_index` | `src/json-fortran/src/json_value_module.F90` |
|  -25.0% |  -1.00ms |          0.1% |     4.0ms → 3.0ms |     4 → 3 | `__json_value_module_MOD_json_value_get_child_by_name`  | `src/json-fortran/src/json_value_module.F90` |

##### Native

| Change |    Delta |            % |              Time |   Samples | Function   | Location                                         |
| -----: | -------: | -----------: | ----------------: | --------: | ---------- | ------------------------------------------------ |
| -40.9% | -18.00ms |  1.1% → 0.6% |   44.0ms → 26.0ms |   44 → 26 | `0x92284`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
| -17.3% | -17.00ms |  2.5% → 2.0% |   98.0ms → 81.0ms |   98 → 81 | `0x92a9b`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
| -17.3% | -14.00ms |  2.0% → 1.7% |   81.0ms → 67.0ms |   81 → 67 | `_init`    | `<unknown>`                                      |
| -25.0% | -13.00ms |  1.3% → 1.0% |   52.0ms → 39.0ms |   52 → 39 | `0x929e0`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
| -25.5% | -13.00ms |  1.3% → 0.9% |   51.0ms → 38.0ms |   51 → 38 | `0xfa6bf`  | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  -9.9% | -12.00ms |  3.1% → 2.7% | 121.0ms → 109.0ms | 121 → 109 | `0x1c1b3`  | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| -18.5% | -12.00ms |  1.6% → 1.3% |   65.0ms → 53.0ms |   65 → 53 | `0x118970` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| -42.3% | -11.00ms |  0.7% → 0.4% |   26.0ms → 15.0ms |   26 → 15 | `0x9d240`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
| -10.8% |  -9.00ms |  2.1% → 1.8% |   83.0ms → 74.0ms |   83 → 74 | `0x9102b`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  -7.3% |  -9.00ms |  3.1% → 2.8% | 123.0ms → 114.0ms | 123 → 114 | `0x109623` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| -20.5% |  -9.00ms |  1.1% → 0.9% |   44.0ms → 35.0ms |   44 → 35 | `0x118720` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| -39.1% |  -9.00ms |  0.6% → 0.3% |   23.0ms → 14.0ms |   23 → 14 | `0x1186f8` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| -90.0% |  -9.00ms | 0.3% → <0.1% |    10.0ms → 1.0ms |    10 → 1 | `0x109bc0` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| -27.3% |  -9.00ms |  0.8% → 0.6% |   33.0ms → 24.0ms |   33 → 24 | `0x91c5f`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
| -40.0% |  -8.00ms |  0.5% → 0.3% |   20.0ms → 12.0ms |   20 → 12 | `0x10b283` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| -57.1% |  -8.00ms |  0.4% → 0.1% |    14.0ms → 6.0ms |    14 → 6 | `0x1c42b`  | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| -15.4% |  -8.00ms |  1.3% → 1.1% |   52.0ms → 44.0ms |   52 → 44 | `0x8faf4`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
| -38.9% |  -7.00ms |  0.5% → 0.3% |   18.0ms → 11.0ms |   18 → 11 | `0x9155f`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
| -26.9% |  -7.00ms |  0.7% → 0.5% |   26.0ms → 19.0ms |   26 → 19 | `0x8eb7f`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
| -53.8% |  -7.00ms |  0.3% → 0.1% |    13.0ms → 6.0ms |    13 → 6 | `0x8faa0`  | `usr/lib/aarch64-linux-gnu/libc.so.6`            |

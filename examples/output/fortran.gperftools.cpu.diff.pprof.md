# CPU profile diff

Took 3.95s → 4.04s (+91.00ms, +2.3%) over 3,956 samples → 4,047 samples (1.0ms per sample).

| Category | Change |     Delta |             % |            Time |       Samples |
| -------- | -----: | --------: | ------------: | --------------: | ------------: |
| Ours     |  +2.7% | +105.00ms | 98.0% → 98.3% |   3.87s → 3.98s | 3,875 → 3,980 |
| Native   | -17.3% |  -14.00ms |   2.0% → 1.7% | 81.0ms → 67.0ms |       81 → 67 |

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time spent directly in the function body, excluding callees.

##### Ours

|  Change |     Delta |             % |              Time |       Samples | Function                                           | Location                                           |
| ------: | --------: | ------------: | ----------------: | ------------: | -------------------------------------------------- | -------------------------------------------------- |
|   +4.8% | +105.00ms | 55.0% → 56.4% |     2.17s → 2.28s | 2,176 → 2,281 | `__json_value_module_MOD_pop_char.part.0`          | `src/json-fortran/src/json_value_module.F90`       |
|   +5.8% |  +18.00ms |   7.8% → 8.1% | 310.0ms → 328.0ms |     310 → 328 | `__json_string_utilities_MOD_string_to_integer`    | `src/json-fortran/src/json_string_utilities.F90`   |
|  +72.2% |  +13.00ms |   0.5% → 0.8% |   18.0ms → 31.0ms |       18 → 31 | `__json_value_module_MOD_destroy_json_data`        | `src/json-fortran/src/json_value_module.F90`       |
|   +8.3% |  +10.00ms |   3.0% → 3.2% | 120.0ms → 130.0ms |     120 → 130 | `__json_value_module_MOD_parse_value`              | `src/json-fortran/src/json_value_module.F90`       |
| +116.7% |   +7.00ms |   0.2% → 0.3% |    6.0ms → 13.0ms |        6 → 13 | `__json_value_module_MOD_parse_array`              | `src/json-fortran/src/json_value_module.F90`       |
|   +7.3% |   +6.00ms |   2.1% → 2.2% |   82.0ms → 88.0ms |       82 → 88 | `__json_value_module_MOD_json_parse_file`          | `src/json-fortran/src/json_value_module.F90`       |
|     new |   +4.00ms |   0.0% → 0.1% |       0ms → 4.0ms |         0 → 4 | `__json_value_module_MOD_json_get_string`          | `src/json-fortran/src/json_value_module.F90`       |
|   +0.8% |   +3.00ms |   9.3% → 9.2% | 369.0ms → 372.0ms |     369 → 372 | `__json_value_module_MOD_parse_object`             | `src/json-fortran/src/json_value_module.F90`       |
|  +60.0% |   +3.00ms |   0.1% → 0.2% |     5.0ms → 8.0ms |         5 → 8 | `MAIN__`                                           | `out/profile.f90`                                  |
|  +42.9% |   +3.00ms |          0.2% |    7.0ms → 10.0ms |        7 → 10 | `__json_value_module_MOD_json_value_add_member`    | `src/json-fortran/src/json_value_module.F90`       |
|  +37.5% |   +3.00ms |   0.2% → 0.3% |    8.0ms → 11.0ms |        8 → 11 | `__json_value_module_MOD_parse_for_chars`          | `src/json-fortran/src/json_value_module.F90`       |
| +100.0% |   +3.00ms |          0.1% |     3.0ms → 6.0ms |         3 → 6 | `__json_value_module_MOD_json_info`                | `src/json-fortran/src/json_value_module.F90`       |
| +200.0% |   +2.00ms |  <0.1% → 0.1% |     1.0ms → 3.0ms |         1 → 3 | `__json_value_module_MOD_to_logical`               | `src/json-fortran/src/json_value_module.F90`       |
|     new |   +2.00ms |  0.0% → <0.1% |       0ms → 2.0ms |         0 → 2 | `__json_string_utilities_MOD_string_to_real`       | `src/json-fortran/src/json_string_utilities.F90`   |
| +100.0% |   +1.00ms |         <0.1% |     1.0ms → 2.0ms |         1 → 2 | `__json_value_module_MOD_json_get_by_path_default` | `src/json-fortran/src/json_value_module.F90`       |
| +100.0% |   +1.00ms |         <0.1% |     1.0ms → 2.0ms |         1 → 2 | `__json_value_module_MOD_json_get_string_by_path`  | `src/json-fortran/src/json_get_scalar_by_path.inc` |
|   +5.3% |   +1.00ms |          0.5% |   19.0ms → 20.0ms |       19 → 20 | `__json_string_utilities_MOD_unescape_string`      | `src/json-fortran/src/json_string_utilities.F90`   |
|  +50.0% |   +1.00ms |          0.1% |     2.0ms → 3.0ms |         2 → 3 | `__json_value_module_MOD_name_strings_equal`       | `src/json-fortran/src/json_value_module.F90`       |
|     new |   +1.00ms |  0.0% → <0.1% |       0ms → 1.0ms |         0 → 1 | `__json_value_module_MOD_json_get_string_by_path`  | `src/json-fortran/src/json_value_module.F90`       |
|     new |   +1.00ms |  0.0% → <0.1% |       0ms → 1.0ms |         0 → 1 | `__json_value_module_MOD_to_object`                | `src/json-fortran/src/json_value_module.F90`       |

#### Improvements

Functions with the largest decrease in time spent directly in the function body, excluding callees.

|  Change |    Delta |             % |              Time |   Samples | Function                                                | Location                                     |
| ------: | -------: | ------------: | ----------------: | --------: | ------------------------------------------------------- | -------------------------------------------- |
|  -34.2% | -25.00ms |   1.8% → 1.2% |   73.0ms → 48.0ms |   73 → 48 | `__json_value_module_MOD_json_value_destroy`            | `src/json-fortran/src/json_value_module.F90` |
|  -45.7% | -16.00ms |   0.9% → 0.5% |   35.0ms → 19.0ms |   35 → 19 | `__json_value_module_MOD_parse_number`                  | `src/json-fortran/src/json_value_module.F90` |
|  -17.3% | -14.00ms |   2.0% → 1.7% |   81.0ms → 67.0ms |   81 → 67 | `_init`                                                 | `<unknown>`                                  |
|  -16.7% | -10.00ms |   1.5% → 1.2% |   60.0ms → 50.0ms |   60 → 50 | `__json_value_module_MOD_string_to_int`                 | `src/json-fortran/src/json_value_module.F90` |
|   -1.8% |  -8.00ms | 11.5% → 11.1% | 456.0ms → 448.0ms | 456 → 448 | `__json_value_module_MOD_parse_string`                  | `src/json-fortran/src/json_value_module.F90` |
|   -6.1% |  -6.00ms |   2.5% → 2.3% |   99.0ms → 93.0ms |   99 → 93 | `__json_value_module_MOD_json_value_create`             | `src/json-fortran/src/json_value_module.F90` |
|  -62.5% |  -5.00ms |   0.2% → 0.1% |     8.0ms → 3.0ms |     8 → 3 | `__json_value_module_MOD_to_string`                     | `src/json-fortran/src/json_value_module.F90` |
| removed |  -4.00ms |   0.1% → 0.0% |       4.0ms → 0ms |     4 → 0 | `main`                                                  | `out/profile.f90`                            |
| removed |  -3.00ms |   0.1% → 0.0% |       3.0ms → 0ms |     3 → 0 | `__json_file_module_MOD_json_file_get_string`           | `src/json-fortran/src/json_file_module.F90`  |
|  -50.0% |  -2.00ms |  0.1% → <0.1% |     4.0ms → 2.0ms |     4 → 2 | `__json_value_module_MOD_pop_char`                      | `src/json-fortran/src/json_value_module.F90` |
| removed |  -1.00ms |  <0.1% → 0.0% |       1.0ms → 0ms |     1 → 0 | `__json_value_module_MOD_to_null`                       | `src/json-fortran/src/json_value_module.F90` |
| removed |  -1.00ms |  <0.1% → 0.0% |       1.0ms → 0ms |     1 → 0 | `__json_value_module_MOD_push_char`                     | `src/json-fortran/src/json_value_module.F90` |
| removed |  -1.00ms |  <0.1% → 0.0% |       1.0ms → 0ms |     1 → 0 | `__json_value_module_MOD_json_value_get_child_by_index` | `src/json-fortran/src/json_value_module.F90` |
| removed |  -1.00ms |  <0.1% → 0.0% |       1.0ms → 0ms |     1 → 0 | `__json_value_module_MOD_json_value_get_child_by_name`  | `src/json-fortran/src/json_value_module.F90` |

##### Ours

|  Change |    Delta |             % |              Time |   Samples | Function                                                | Location                                     |
| ------: | -------: | ------------: | ----------------: | --------: | ------------------------------------------------------- | -------------------------------------------- |
|  -34.2% | -25.00ms |   1.8% → 1.2% |   73.0ms → 48.0ms |   73 → 48 | `__json_value_module_MOD_json_value_destroy`            | `src/json-fortran/src/json_value_module.F90` |
|  -45.7% | -16.00ms |   0.9% → 0.5% |   35.0ms → 19.0ms |   35 → 19 | `__json_value_module_MOD_parse_number`                  | `src/json-fortran/src/json_value_module.F90` |
|  -16.7% | -10.00ms |   1.5% → 1.2% |   60.0ms → 50.0ms |   60 → 50 | `__json_value_module_MOD_string_to_int`                 | `src/json-fortran/src/json_value_module.F90` |
|   -1.8% |  -8.00ms | 11.5% → 11.1% | 456.0ms → 448.0ms | 456 → 448 | `__json_value_module_MOD_parse_string`                  | `src/json-fortran/src/json_value_module.F90` |
|   -6.1% |  -6.00ms |   2.5% → 2.3% |   99.0ms → 93.0ms |   99 → 93 | `__json_value_module_MOD_json_value_create`             | `src/json-fortran/src/json_value_module.F90` |
|  -62.5% |  -5.00ms |   0.2% → 0.1% |     8.0ms → 3.0ms |     8 → 3 | `__json_value_module_MOD_to_string`                     | `src/json-fortran/src/json_value_module.F90` |
| removed |  -4.00ms |   0.1% → 0.0% |       4.0ms → 0ms |     4 → 0 | `main`                                                  | `out/profile.f90`                            |
| removed |  -3.00ms |   0.1% → 0.0% |       3.0ms → 0ms |     3 → 0 | `__json_file_module_MOD_json_file_get_string`           | `src/json-fortran/src/json_file_module.F90`  |
|  -50.0% |  -2.00ms |  0.1% → <0.1% |     4.0ms → 2.0ms |     4 → 2 | `__json_value_module_MOD_pop_char`                      | `src/json-fortran/src/json_value_module.F90` |
| removed |  -1.00ms |  <0.1% → 0.0% |       1.0ms → 0ms |     1 → 0 | `__json_value_module_MOD_to_null`                       | `src/json-fortran/src/json_value_module.F90` |
| removed |  -1.00ms |  <0.1% → 0.0% |       1.0ms → 0ms |     1 → 0 | `__json_value_module_MOD_push_char`                     | `src/json-fortran/src/json_value_module.F90` |
| removed |  -1.00ms |  <0.1% → 0.0% |       1.0ms → 0ms |     1 → 0 | `__json_value_module_MOD_json_value_get_child_by_index` | `src/json-fortran/src/json_value_module.F90` |
| removed |  -1.00ms |  <0.1% → 0.0% |       1.0ms → 0ms |     1 → 0 | `__json_value_module_MOD_json_value_get_child_by_name`  | `src/json-fortran/src/json_value_module.F90` |

##### Native

| Change |    Delta |           % |            Time | Samples | Function | Location    |
| -----: | -------: | ----------: | --------------: | ------: | -------- | ----------- |
| -17.3% | -14.00ms | 2.0% → 1.7% | 81.0ms → 67.0ms | 81 → 67 | `_init`  | `<unknown>` |

### Total time

#### Regressions

Functions with the largest increase in total time spent in the function and all its callees.

|  Change |     Delta |              % |              Time |       Samples | Function                                          | Location                                           |
| ------: | --------: | -------------: | ----------------: | ------------: | ------------------------------------------------- | -------------------------------------------------- |
|   +2.8% | +106.00ms |  96.8% → 97.2% |     3.82s → 3.93s | 3,829 → 3,935 | `__json_value_module_MOD_json_parse_file`         | `src/json-fortran/src/json_value_module.F90`       |
|   +2.8% | +106.00ms |  96.8% → 97.2% |     3.82s → 3.93s | 3,829 → 3,935 | `__json_file_module_MOD_json_file_load`           | `src/json-fortran/src/json_file_module.F90`        |
|   +4.8% | +105.00ms |  55.0% → 56.4% |     2.17s → 2.28s | 2,176 → 2,281 | `__json_value_module_MOD_pop_char.part.0`         | `src/json-fortran/src/json_value_module.F90`       |
|   +2.4% |  +95.00ms | 99.9% → 100.0% |     3.95s → 4.04s | 3,952 → 4,047 | `MAIN__`                                          | `out/profile.f90`                                  |
|   +2.5% |  +93.00ms |  94.4% → 94.6% |     3.73s → 3.82s | 3,736 → 3,829 | `__json_value_module_MOD_parse_object`            | `src/json-fortran/src/json_value_module.F90`       |
|   +2.3% |  +91.00ms |         100.0% |     3.95s → 4.04s | 3,956 → 4,047 | `main`                                            | `out/profile.f90`                                  |
|   +2.3% |  +91.00ms |         100.0% |     3.95s → 4.04s | 3,956 → 4,047 | `_start`                                          | `<unknown>`                                        |
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

| Change |    Delta |      % |          Time |       Samples | Function | Location    |
| -----: | -------: | -----: | ------------: | ------------: | -------- | ----------- |
|  +2.3% | +91.00ms | 100.0% | 3.95s → 4.04s | 3,956 → 4,047 | `_start` | `<unknown>` |

#### Improvements

Functions with the largest decrease in total time spent in the function and all its callees.

|  Change |    Delta |             % |              Time |   Samples | Function                                                | Location                                     |
| ------: | -------: | ------------: | ----------------: | --------: | ------------------------------------------------------- | -------------------------------------------- |
|  -17.0% | -16.00ms |   2.4% → 1.9% |   94.0ms → 78.0ms |   94 → 78 | `__json_value_module_MOD_json_value_destroy`            | `src/json-fortran/src/json_value_module.F90` |
|  -17.0% | -16.00ms |   2.4% → 1.9% |   94.0ms → 78.0ms |   94 → 78 | `__json_file_module_MOD_json_file_destroy`              | `src/json-fortran/src/json_file_module.F90`  |
|   -3.2% | -15.00ms | 11.7% → 11.1% | 463.0ms → 448.0ms | 463 → 448 | `__json_value_module_MOD_parse_number`                  | `src/json-fortran/src/json_value_module.F90` |
|  -17.3% | -14.00ms |   2.0% → 1.7% |   81.0ms → 67.0ms |   81 → 67 | `_init`                                                 | `<unknown>`                                  |
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

| Change |    Delta |           % |            Time | Samples | Function | Location    |
| -----: | -------: | ----------: | --------------: | ------: | -------- | ----------- |
| -17.3% | -14.00ms | 2.0% → 1.7% | 81.0ms → 67.0ms | 81 → 67 | `_init`  | `<unknown>` |

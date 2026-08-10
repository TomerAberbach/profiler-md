# Allocated heap and retained heap profile diff

Allocated 47.7 MiB → 41.2 MiB (-6.472 MiB, -13.6%) and retained 894 KiB over 450,137 samples → 434,604 samples (111 B → 99.4 B and 2.03 B → 2.11 B per sample).

| Category | Change |      Delta |      % |           Allocated | Retained |           Samples |
| -------- | -----: | ---------: | -----: | ------------------: | -------: | ----------------: |
| Ours     | -13.6% | -6.472 MiB | 100.0% | 47.7 MiB → 41.2 MiB |  894 KiB | 450,137 → 434,604 |

## Allocated heap

### Hottest functions

#### Self size

##### Regressions

Functions with the largest increase in bytes allocated directly in the function body, excluding callees.

###### Ours

|   Change |        Delta |             % |                Size |           Samples | Function                                      | Location                                         |
| -------: | -----------: | ------------: | ------------------: | ----------------: | --------------------------------------------- | ------------------------------------------------ |
|  +672.2% |     +605 KiB |   0.2% → 1.6% |    90 KiB → 695 KiB |       360 → 2,780 | `__json_value_module_MOD_parse_number`        | `src/json-fortran/src/json_value_module.F90`     |
| +1619.9% | +388.105 KiB |  <0.1% → 1.0% |    24 KiB → 412 KiB |         100 → 280 | `MAIN__`                                      | `out/profile.f90`                                |
| +1462.4% | +279.541 KiB |  <0.1% → 0.7% |  19.1 KiB → 299 KiB |       178 → 2,037 | `__json_string_utilities_MOD_unescape_string` | `src/json-fortran/src/json_string_utilities.F90` |
|    +0.7% |   +9.885 KiB |   3.0% → 3.5% | 1.44 MiB → 1.45 MiB | 122,261 → 122,682 | `__json_value_module_MOD_parse_object`        | `src/json-fortran/src/json_value_module.F90`     |
|    +0.1% |   +7.328 KiB | 29.9% → 34.6% | 14.2 MiB → 14.3 MiB | 133,404 → 133,471 | `__json_value_module_MOD_json_value_create`   | `src/json-fortran/src/json_value_module.F90`     |
|  +205.6% |   +4.161 KiB |         <0.1% | 2.02 KiB → 6.18 KiB |           10 → 11 | `__json_value_module_MOD_json_initialize`     | `src/json-fortran/src/json_value_module.F90`     |
|      ~0% |        +72 B |   0.3% → 0.4% |             149 KiB |   19,115 → 19,124 | `__json_value_module_MOD_to_integer`          | `src/json-fortran/src/json_value_module.F90`     |

##### Improvements

Functions with the largest decrease in bytes allocated directly in the function body, excluding callees.

###### Ours

|  Change |        Delta |             % |                Size |         Samples | Function                                        | Location                                         |
| ------: | -----------: | ------------: | ------------------: | --------------: | ----------------------------------------------- | ------------------------------------------------ |
|  -31.2% |   -7.315 MiB | 49.2% → 39.1% | 23.4 MiB → 16.1 MiB | 34,087 → 28,007 | `__json_string_utilities_MOD_string_to_integer` | `src/json-fortran/src/json_string_utilities.F90` |
| removed | -268.562 KiB |   0.6% → 0.0% |       269 KiB → 0 B |         897 → 0 | `__json_value_module_MOD_json_get_string`       | `src/json-fortran/src/json_value_module.F90`     |
|   -3.1% | -155.226 KiB | 10.2% → 11.5% | 4.88 MiB → 4.73 MiB | 64,240 → 52,270 | `__json_value_module_MOD_parse_string`          | `src/json-fortran/src/json_value_module.F90`     |
|   -0.3% |    -4.74 KiB |   3.7% → 4.3% | 1.77 MiB → 1.76 MiB | 41,437 → 41,310 | `__json_value_module_MOD_parse_value`           | `src/json-fortran/src/json_value_module.F90`     |
|  -18.2% |   -1.381 KiB |         <0.1% | 7.59 KiB → 6.21 KiB |   7,769 → 6,354 | `__json_value_module_MOD_to_string`             | `src/json-fortran/src/json_value_module.F90`     |
|  -85.2% |       -736 B |         <0.1% |       864 B → 128 B |           9 → 1 | `__json_string_utilities_MOD_string_to_real`    | `src/json-fortran/src/json_string_utilities.F90` |
|  -96.7% |       -237 B |         <0.1% |         245 B → 8 B |           1 → 8 | `__json_value_module_MOD_pop_char.part.0`       | `src/json-fortran/src/json_value_module.F90`     |

#### Total size

##### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

###### Ours

|   Change |        Delta |             % |                Size |           Samples | Function                                              | Location                                         |
| -------: | -----------: | ------------: | ------------------: | ----------------: | ----------------------------------------------------- | ------------------------------------------------ |
|   +33.9% |   +5.694 MiB | 35.2% → 54.6% | 16.8 MiB → 22.5 MiB | 238,054 → 231,808 | `__json_value_module_MOD_parse_array`                 | `src/json-fortran/src/json_value_module.F90`     |
|    +3.3% | +451.263 KiB | 27.9% → 33.3% | 13.3 MiB → 13.7 MiB | 184,850 → 185,235 | `__json_value_module_MOD_json_parse_file`             | `src/json-fortran/src/json_value_module.F90`     |
|    +3.1% | +417.529 KiB | 27.2% → 32.4% | 12.9 MiB → 13.4 MiB | 177,529 → 175,450 | `__json_file_module_MOD_json_file_load`               | `src/json-fortran/src/json_file_module.F90`      |
|    +2.7% | +375.509 KiB | 28.1% → 33.5% | 13.4 MiB → 13.8 MiB | 169,249 → 168,318 | `MAIN__`                                              | `out/profile.f90`                                |
| +1462.4% | +279.541 KiB |  <0.1% → 0.7% |  19.1 KiB → 299 KiB |       178 → 2,037 | `__json_string_utilities_MOD_unescape_string`         | `src/json-fortran/src/json_string_utilities.F90` |
|    +2.3% | +123.058 KiB | 10.7% → 12.7% | 5.12 MiB → 5.24 MiB |   70,140 → 59,085 | `__json_value_module_MOD_parse_string`                | `src/json-fortran/src/json_value_module.F90`     |
|    +0.1% |   +7.328 KiB | 29.9% → 34.6% | 14.2 MiB → 14.3 MiB | 133,404 → 133,471 | `__json_value_module_MOD_json_value_create`           | `src/json-fortran/src/json_value_module.F90`     |
|  +205.6% |   +4.161 KiB |         <0.1% | 2.02 KiB → 6.18 KiB |           10 → 11 | `__json_value_module_MOD_json_initialize`             | `src/json-fortran/src/json_value_module.F90`     |
|  +205.6% |   +4.161 KiB |         <0.1% | 2.02 KiB → 6.18 KiB |           10 → 11 | `__json_file_module_MOD_initialize_json_core_in_file` | `src/json-fortran/src/json_file_module.F90`      |
|      ~0% |        +72 B |   0.3% → 0.4% |             149 KiB |   19,115 → 19,124 | `__json_value_module_MOD_to_integer`                  | `src/json-fortran/src/json_value_module.F90`     |
|      new |         +8 B |  0.0% → <0.1% |           0 B → 8 B |             0 → 8 | `__json_value_module_MOD_json_parse_end`              | `src/json-fortran/src/json_value_module.F90`     |

##### Improvements

Functions with the largest decrease in total bytes allocated in the function and all its callees.

|  Change |        Delta |             % |                Size |           Samples | Function                                           | Location                                           |
| ------: | -----------: | ------------: | ------------------: | ----------------: | -------------------------------------------------- | -------------------------------------------------- |
|  -31.2% |   -7.315 MiB | 49.2% → 39.1% | 23.4 MiB → 16.1 MiB |   34,143 → 28,063 | `__json_string_utilities_MOD_string_to_integer`    | `src/json-fortran/src/json_string_utilities.F90`   |
|  -30.5% |   -6.904 MiB | 47.5% → 38.2% | 22.6 MiB → 15.7 MiB |   32,572 → 26,893 | `__json_value_module_MOD_string_to_int`            | `src/json-fortran/src/json_value_module.F90`       |
|  -27.6% |   -6.314 MiB | 47.9% → 40.2% | 22.9 MiB → 16.5 MiB |   52,056 → 48,798 | `__json_value_module_MOD_parse_number`             | `src/json-fortran/src/json_value_module.F90`       |
|  -13.6% |   -6.182 MiB | 95.1% → 95.0% | 45.3 MiB → 39.1 MiB | 447,567 → 433,143 | `__json_value_module_MOD_parse_object`             | `src/json-fortran/src/json_value_module.F90`       |
|  -16.1% | -710.896 KiB |   9.1% → 8.8% | 4.32 MiB → 3.63 MiB |   77,828 → 62,332 | `__json_value_module_MOD_parse_value`              | `src/json-fortran/src/json_value_module.F90`       |
|  -62.4% | -689.797 KiB |   2.3% → 1.0% |  1.08 MiB → 416 KiB |     2,430 → 1,132 | `__json_value_module_MOD_json_get_string_by_path`  | `src/json-fortran/src/json_get_scalar_by_path.inc` |
|  -62.4% | -689.797 KiB |   2.3% → 1.0% |  1.08 MiB → 416 KiB |     2,430 → 1,132 | `__json_file_module_MOD_json_file_get_string`      | `src/json-fortran/src/json_file_module.F90`        |
|   -5.0% | -532.817 KiB | 21.8% → 24.0% | 10.4 MiB → 9.88 MiB | 125,670 → 124,287 | `_start`                                           | `<unknown>`                                        |
|  -50.3% | -421.235 KiB |   1.7% → 1.0% |   837 KiB → 416 KiB |     1,515 → 1,114 | `__json_value_module_MOD_json_get_by_path_default` | `src/json-fortran/src/json_value_module.F90`       |
|  -50.3% | -421.235 KiB |   1.7% → 1.0% |   837 KiB → 416 KiB |     1,515 → 1,114 | `__json_value_module_MOD_json_get_by_path`         | `src/json-fortran/src/json_value_module.F90`       |
| removed | -268.562 KiB |   0.6% → 0.0% |       269 KiB → 0 B |           897 → 0 | `__json_value_module_MOD_json_get_string`          | `src/json-fortran/src/json_value_module.F90`       |
|   -0.1% |  -13.993 KiB | 27.3% → 31.6% |              13 MiB | 159,966 → 156,448 | `main`                                             | `out/profile.f90`                                  |
|  -42.5% |   -3.969 KiB |         <0.1% | 9.34 KiB → 5.37 KiB |          218 → 57 | `__json_value_module_MOD_pop_char.part.0`          | `src/json-fortran/src/json_value_module.F90`       |
|  -18.2% |   -1.381 KiB |         <0.1% | 7.59 KiB → 6.21 KiB |     7,769 → 6,354 | `__json_value_module_MOD_to_string`                | `src/json-fortran/src/json_value_module.F90`       |
|  -85.2% |       -736 B |         <0.1% |       864 B → 128 B |             9 → 1 | `__json_string_utilities_MOD_string_to_real`       | `src/json-fortran/src/json_string_utilities.F90`   |
|  -85.2% |       -736 B |         <0.1% |       864 B → 128 B |             9 → 1 | `__json_value_module_MOD_string_to_dble`           | `src/json-fortran/src/json_value_module.F90`       |

###### Ours

|  Change |        Delta |             % |                Size |           Samples | Function                                           | Location                                           |
| ------: | -----------: | ------------: | ------------------: | ----------------: | -------------------------------------------------- | -------------------------------------------------- |
|  -31.2% |   -7.315 MiB | 49.2% → 39.1% | 23.4 MiB → 16.1 MiB |   34,143 → 28,063 | `__json_string_utilities_MOD_string_to_integer`    | `src/json-fortran/src/json_string_utilities.F90`   |
|  -30.5% |   -6.904 MiB | 47.5% → 38.2% | 22.6 MiB → 15.7 MiB |   32,572 → 26,893 | `__json_value_module_MOD_string_to_int`            | `src/json-fortran/src/json_value_module.F90`       |
|  -27.6% |   -6.314 MiB | 47.9% → 40.2% | 22.9 MiB → 16.5 MiB |   52,056 → 48,798 | `__json_value_module_MOD_parse_number`             | `src/json-fortran/src/json_value_module.F90`       |
|  -13.6% |   -6.182 MiB | 95.1% → 95.0% | 45.3 MiB → 39.1 MiB | 447,567 → 433,143 | `__json_value_module_MOD_parse_object`             | `src/json-fortran/src/json_value_module.F90`       |
|  -16.1% | -710.896 KiB |   9.1% → 8.8% | 4.32 MiB → 3.63 MiB |   77,828 → 62,332 | `__json_value_module_MOD_parse_value`              | `src/json-fortran/src/json_value_module.F90`       |
|  -62.4% | -689.797 KiB |   2.3% → 1.0% |  1.08 MiB → 416 KiB |     2,430 → 1,132 | `__json_value_module_MOD_json_get_string_by_path`  | `src/json-fortran/src/json_get_scalar_by_path.inc` |
|  -62.4% | -689.797 KiB |   2.3% → 1.0% |  1.08 MiB → 416 KiB |     2,430 → 1,132 | `__json_file_module_MOD_json_file_get_string`      | `src/json-fortran/src/json_file_module.F90`        |
|  -50.3% | -421.235 KiB |   1.7% → 1.0% |   837 KiB → 416 KiB |     1,515 → 1,114 | `__json_value_module_MOD_json_get_by_path_default` | `src/json-fortran/src/json_value_module.F90`       |
|  -50.3% | -421.235 KiB |   1.7% → 1.0% |   837 KiB → 416 KiB |     1,515 → 1,114 | `__json_value_module_MOD_json_get_by_path`         | `src/json-fortran/src/json_value_module.F90`       |
| removed | -268.562 KiB |   0.6% → 0.0% |       269 KiB → 0 B |           897 → 0 | `__json_value_module_MOD_json_get_string`          | `src/json-fortran/src/json_value_module.F90`       |
|   -0.1% |  -13.993 KiB | 27.3% → 31.6% |              13 MiB | 159,966 → 156,448 | `main`                                             | `out/profile.f90`                                  |
|  -42.5% |   -3.969 KiB |         <0.1% | 9.34 KiB → 5.37 KiB |          218 → 57 | `__json_value_module_MOD_pop_char.part.0`          | `src/json-fortran/src/json_value_module.F90`       |
|  -18.2% |   -1.381 KiB |         <0.1% | 7.59 KiB → 6.21 KiB |     7,769 → 6,354 | `__json_value_module_MOD_to_string`                | `src/json-fortran/src/json_value_module.F90`       |
|  -85.2% |       -736 B |         <0.1% |       864 B → 128 B |             9 → 1 | `__json_string_utilities_MOD_string_to_real`       | `src/json-fortran/src/json_string_utilities.F90`   |
|  -85.2% |       -736 B |         <0.1% |       864 B → 128 B |             9 → 1 | `__json_value_module_MOD_string_to_dble`           | `src/json-fortran/src/json_value_module.F90`       |

## Retained heap

### Hottest functions

#### Self size

No function differed in bytes retained directly in the function body, excluding callees.

#### Total size

No function differed in total bytes retained in the function and all its callees.

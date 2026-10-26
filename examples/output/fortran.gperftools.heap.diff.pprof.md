# Allocated heap profile diff

Allocated 236 MiB → 232 MiB (-3.89 MiB, -1.6%) over 1,160,835 → 1,141,340 objects (213 B per object).

| Category | Change |       Delta |             % |                Size |           Objects |
| -------- | -----: | ----------: | ------------: | ------------------: | ----------------: |
| Unknown  |  -2.3% |   -3.82 MiB | 70.8% → 70.3% |   167 MiB → 163 MiB | 174,357 → 174,255 |
| Ours     |  -0.1% | -62.316 KiB | 29.1% → 29.6% | 68.8 MiB → 68.7 MiB | 947,666 → 930,395 |
| Native   |  -4.9% |  -9.575 KiB |          0.1% |   194 KiB → 184 KiB |   38,812 → 36,690 |

Paths starting with `./` or `../` are relative to `/src/json-fortran/src/`.

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated within the function body, excluding callees. Categories account for at least 1.0% of self size on the base or the current side.

##### Ours

| Change |        Delta |             % |                Size |           Objects | Function                                      | Location                                |
| -----: | -----------: | ------------: | ------------------: | ----------------: | --------------------------------------------- | --------------------------------------- |
|  +0.6% | +283.006 KiB | 18.8% → 19.2% | 44.3 MiB → 44.6 MiB | 462,275 → 458,333 | `__json_value_module_MOD_parse_string`        | `./json_value_module.F90:11052 → 11080` |
|  +4.6% |  +52.332 KiB |          0.5% |  1.1 MiB → 1.15 MiB |     8,165 → 7,845 | `__json_string_utilities_MOD_unescape_string` | `./json_string_utilities.F90:483`       |
|    ~0% |       +531 B |          0.8% |             1.8 MiB |   43,355 → 43,364 | `__json_value_module_MOD_parse_value`         | `./json_value_module.F90:10117 → 10124` |
|  +0.5% |        +13 B |         <0.1% | 2.56 KiB → 2.58 KiB |           17 → 18 | `__json_value_module_MOD_json_initialize`     | `./json_value_module.F90:1016 → 1019`   |

#### Improvements

Functions with the largest decrease in bytes allocated within the function body, excluding callees. Categories account for at least 1.0% of self size on the base or the current side.

|  Change |       Delta |             % |                Size |           Objects | Function                                        | Location                                |
| ------: | ----------: | ------------: | ------------------: | ----------------: | ----------------------------------------------- | --------------------------------------- |
|   -2.3% |   -3.82 MiB | 70.8% → 70.3% |   167 MiB → 163 MiB | 174,357 → 174,255 | `(anonymous)`                                   | `<unknown>`                             |
|   -7.7% |  -368.5 KiB |   2.0% → 1.9% | 4.67 MiB → 4.31 MiB |   19,126 → 17,652 | `__json_value_module_MOD_parse_number`          | `./json_value_module.F90:11192 → 11220` |
|   -7.9% | -14.301 KiB |          0.1% |   181 KiB → 167 KiB |   58,888 → 55,294 | `__json_string_utilities_MOD_string_to_integer` | `./json_string_utilities.F90:116`       |
|   -4.9% |  -9.575 KiB |          0.1% |   194 KiB → 184 KiB |   38,812 → 36,690 | `strndup`                                       | `<unknown>`                             |
|  -18.4% |  -7.676 KiB |         <0.1% |   41.7 KiB → 34 KiB |   42,722 → 34,861 | `__json_value_module_MOD_to_string`             | `./json_value_module.F90:10755 → 10762` |
|     ~0% |  -4.921 KiB |   6.2% → 6.3% |            14.6 MiB | 137,064 → 137,019 | `__json_value_module_MOD_json_value_create`     | `./json_value_module.F90:2204 → 2211`   |
|  -49.7% |  -2.144 KiB |         <0.1% | 4.32 KiB → 2.17 KiB |                27 | `__json_value_module_MOD_pop_char.part.0`       | `./json_value_module.F90:11318 → 11346` |
|     ~0% |      -585 B |          0.6% |             1.5 MiB | 125,402 → 125,366 | `__json_value_module_MOD_parse_object`          | `./json_value_module.F90:10882 → 10889` |
| removed |       -72 B |  <0.1% → 0.0% |          72 B → 0 B |             9 → 0 | `__json_value_module_MOD_to_real`               | `./json_value_module.F90:10721`         |

##### Unknown

| Change |     Delta |             % |              Size |           Objects | Function      | Location    |
| -----: | --------: | ------------: | ----------------: | ----------------: | ------------- | ----------- |
|  -2.3% | -3.82 MiB | 70.8% → 70.3% | 167 MiB → 163 MiB | 174,357 → 174,255 | `(anonymous)` | `<unknown>` |

##### Ours

|  Change |       Delta |            % |                Size |           Objects | Function                                        | Location                                |
| ------: | ----------: | -----------: | ------------------: | ----------------: | ----------------------------------------------- | --------------------------------------- |
|   -7.7% |  -368.5 KiB |  2.0% → 1.9% | 4.67 MiB → 4.31 MiB |   19,126 → 17,652 | `__json_value_module_MOD_parse_number`          | `./json_value_module.F90:11192 → 11220` |
|   -7.9% | -14.301 KiB |         0.1% |   181 KiB → 167 KiB |   58,888 → 55,294 | `__json_string_utilities_MOD_string_to_integer` | `./json_string_utilities.F90:116`       |
|  -18.4% |  -7.676 KiB |        <0.1% |   41.7 KiB → 34 KiB |   42,722 → 34,861 | `__json_value_module_MOD_to_string`             | `./json_value_module.F90:10755 → 10762` |
|     ~0% |  -4.921 KiB |  6.2% → 6.3% |            14.6 MiB | 137,064 → 137,019 | `__json_value_module_MOD_json_value_create`     | `./json_value_module.F90:2204 → 2211`   |
|  -49.7% |  -2.144 KiB |        <0.1% | 4.32 KiB → 2.17 KiB |                27 | `__json_value_module_MOD_pop_char.part.0`       | `./json_value_module.F90:11318 → 11346` |
|     ~0% |      -585 B |         0.6% |             1.5 MiB | 125,402 → 125,366 | `__json_value_module_MOD_parse_object`          | `./json_value_module.F90:10882 → 10889` |
| removed |       -72 B | <0.1% → 0.0% |          72 B → 0 B |             9 → 0 | `__json_value_module_MOD_to_real`               | `./json_value_module.F90:10721`         |

#### Lines

Lines with the largest change in contribution to each function's self size.

##### `__json_value_module_MOD_parse_string` (`./json_value_module.F90:11080`)

| Change |        Delta |             % |                Size |           Objects | Location                                |
| -----: | -----------: | ------------: | ------------------: | ----------------: | --------------------------------------- |
| +44.7% |   +695.5 KiB |   3.4% → 4.9% |  1.52 MiB → 2.2 MiB |     3,112 → 4,503 | `./json_value_module.F90:11098 → 11126` |
|  -4.1% | -263.993 KiB | 14.0% → 13.4% | 6.21 MiB → 5.96 MiB | 308,688 → 303,949 | `./json_value_module.F90:11122 → 11150` |
|  -0.4% |   -148.5 KiB | 82.5% → 81.7% | 36.6 MiB → 36.4 MiB | 149,718 → 149,124 | `./json_value_module.F90:11073 → 11101` |

##### `__json_string_utilities_MOD_unescape_string` (`./json_string_utilities.F90:483`)

| Change |       Delta |             % |              Size |       Objects | Location                          |
| -----: | ----------: | ------------: | ----------------: | ------------: | --------------------------------- |
| +15.5% |  +113.4 KiB | 64.9% → 71.7% | 732 KiB → 845 KiB | 5,304 → 5,856 | `./json_string_utilities.F90:506` |
| -15.4% | -61.068 KiB | 35.1% → 28.3% | 395 KiB → 334 KiB | 2,861 → 1,989 | `./json_string_utilities.F90:611` |

##### `__json_value_module_MOD_parse_value` (`./json_value_module.F90:10124`)

| Change |  Delta |      % |    Size |         Objects | Location                                |
| -----: | -----: | -----: | ------: | --------------: | --------------------------------------- |
|    ~0% | +531 B | 100.0% | 1.8 MiB | 43,355 → 43,364 | `./json_value_module.F90:10185 → 10192` |

##### `__json_value_module_MOD_json_initialize` (`./json_value_module.F90:1019`)

|  Change | Delta |           % |       Size | Objects | Location                       |
| ------: | ----: | ----------: | ---------: | ------: | ------------------------------ |
|     new | +79 B | 0.0% → 3.0% | 0 B → 79 B |   0 → 8 | `./json_value_module.F90:1203` |
| removed | -66 B | 2.5% → 0.0% | 66 B → 0 B |   7 → 0 | `./json_value_module.F90:1196` |

##### `__json_value_module_MOD_parse_number` (`./json_value_module.F90:11220`)

| Change |      Delta |      % |                Size |         Objects | Location                                |
| -----: | ---------: | -----: | ------------------: | --------------: | --------------------------------------- |
|  -7.7% | -368.5 KiB | 100.0% | 4.67 MiB → 4.31 MiB | 19,126 → 17,652 | `./json_value_module.F90:11216 → 11244` |

##### `__json_string_utilities_MOD_string_to_integer` (`./json_string_utilities.F90:116`)

| Change |      Delta |             % |                Size |         Objects | Location                          |
| -----: | ---------: | ------------: | ------------------: | --------------: | --------------------------------- |
|  -9.8% | -14.61 KiB | 82.1% → 80.4% |   149 KiB → 134 KiB | 40,737 → 36,927 | `./json_string_utilities.F90:134` |
|  +1.0% |     +316 B | 17.9% → 19.6% | 32.5 KiB → 32.8 KiB | 18,151 → 18,367 | `./json_string_utilities.F90:131` |

##### `__json_value_module_MOD_to_string` (`./json_value_module.F90:10762`)

| Change |      Delta |      % |              Size |         Objects | Location                                |
| -----: | ---------: | -----: | ----------------: | --------------: | --------------------------------------- |
| -18.4% | -7.676 KiB | 100.0% | 41.7 KiB → 34 KiB | 42,722 → 34,861 | `./json_value_module.F90:10800 → 10807` |

##### `__json_value_module_MOD_json_value_create` (`./json_value_module.F90:2211`)

| Change |      Delta |      % |     Size |           Objects | Location                              |
| -----: | ---------: | -----: | -------: | ----------------: | ------------------------------------- |
|    ~0% | -4.921 KiB | 100.0% | 14.6 MiB | 137,064 → 137,019 | `./json_value_module.F90:2211 → 2218` |

##### `__json_value_module_MOD_pop_char.part.0` (`./json_value_module.F90:11346`)

| Change |      Delta |      % |                Size | Objects | Location                                |
| -----: | ---------: | -----: | ------------------: | ------: | --------------------------------------- |
| -49.7% | -2.144 KiB | 100.0% | 4.32 KiB → 2.17 KiB |      27 | `./json_value_module.F90:11383 → 11411` |

##### `__json_value_module_MOD_parse_object` (`./json_value_module.F90:10889`)

|  Change |      Delta |             % |          Size |     Objects | Location                        |
| ------: | ---------: | ------------: | ------------: | ----------: | ------------------------------- |
| removed | -1.498 MiB | 100.0% → 0.0% | 1.5 MiB → 0 B | 125,402 → 0 | `./json_value_module.F90:10922` |
|     new | +1.497 MiB | 0.0% → 100.0% | 0 B → 1.5 MiB | 0 → 125,366 | `./json_value_module.F90:10937` |

##### `__json_value_module_MOD_to_real` (`./json_value_module.F90:10721`)

|  Change | Delta |             % |       Size | Objects | Location                        |
| ------: | ----: | ------------: | ---------: | ------: | ------------------------------- |
| removed | -72 B | 100.0% → 0.0% | 72 B → 0 B |   9 → 0 | `./json_value_module.F90:10734` |

#### Callers

Callers with the largest change in contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `__json_value_module_MOD_parse_string` (`./json_value_module.F90:11080`)

| Change |        Delta |             % |                Size |           Objects | Caller                                 | Location                                |
| -----: | -----------: | ------------: | ------------------: | ----------------: | -------------------------------------- | --------------------------------------- |
|  +1.9% | +546.854 KiB | 65.1% → 65.9% | 28.8 MiB → 29.4 MiB | 336,064 → 331,232 | `__json_value_module_MOD_parse_object` | `./json_value_module.F90:10882 → 10889` |
|  -1.7% | -263.847 KiB | 34.9% → 34.1% | 15.5 MiB → 15.2 MiB | 126,211 → 127,101 | `__json_value_module_MOD_parse_value`  | `./json_value_module.F90:10117 → 10124` |

##### `__json_string_utilities_MOD_unescape_string` (`./json_string_utilities.F90:483`)

| Change |       Delta |      % |               Size |       Objects | Caller                                 | Location                                |
| -----: | ----------: | -----: | -----------------: | ------------: | -------------------------------------- | --------------------------------------- |
|  +4.6% | +52.332 KiB | 100.0% | 1.1 MiB → 1.15 MiB | 8,165 → 7,845 | `__json_value_module_MOD_parse_string` | `./json_value_module.F90:11052 → 11080` |

##### `__json_value_module_MOD_parse_value` (`./json_value_module.F90:10124`)

| Change |  Delta |      % |    Size |         Objects | Caller                                 | Location                                |
| -----: | -----: | -----: | ------: | --------------: | -------------------------------------- | --------------------------------------- |
|    ~0% | +531 B | 100.0% | 1.8 MiB | 43,355 → 43,364 | `__json_value_module_MOD_parse_object` | `./json_value_module.F90:10882 → 10889` |

##### `__json_value_module_MOD_json_initialize` (`./json_value_module.F90:1019`)

| Change | Delta |      % |                Size | Objects | Caller                                                | Location                     |
| -----: | ----: | -----: | ------------------: | ------: | ----------------------------------------------------- | ---------------------------- |
|  +0.5% | +13 B | 100.0% | 2.56 KiB → 2.58 KiB | 17 → 18 | `__json_file_module_MOD_initialize_json_core_in_file` | `./json_file_module.F90:504` |

##### `(anonymous)` (`<unknown>`)

| Change |      Delta |      % |                Size |           Objects | Caller                  | Location    |
| -----: | ---------: | -----: | ------------------: | ----------------: | ----------------------- | ----------- |
|  -2.3% | -3.817 MiB | 100.0% |   167 MiB → 163 MiB | 153,749 → 155,393 | `(anonymous)`           | `<unknown>` |
| -10.8% | -2.824 KiB |  <0.1% | 26.2 KiB → 23.4 KiB |   20,608 → 18,862 | `_gfortran_string_trim` | `<unknown>` |

##### `__json_value_module_MOD_parse_number` (`./json_value_module.F90:11220`)

| Change |     Delta |             % |                Size |         Objects | Caller                                 | Location                                |
| -----: | --------: | ------------: | ------------------: | --------------: | -------------------------------------- | --------------------------------------- |
|  -7.9% |  -320 KiB | 84.6% → 84.4% | 3.95 MiB → 3.64 MiB | 16,184 → 14,904 | `__json_value_module_MOD_parse_object` | `./json_value_module.F90:10882 → 10889` |
|  -6.6% | -48.5 KiB | 15.4% → 15.6% |   736 KiB → 687 KiB |   2,942 → 2,748 | `__json_value_module_MOD_parse_array`  | `./json_value_module.F90:10987 → 11003` |

##### `__json_string_utilities_MOD_string_to_integer` (`./json_string_utilities.F90:116`)

| Change |       Delta |             % |                Size |         Objects | Caller                                             | Location                              |
| -----: | ----------: | ------------: | ------------------: | --------------: | -------------------------------------------------- | ------------------------------------- |
|  -7.3% | -12.605 KiB | 95.6% → 96.3% |   173 KiB → 161 KiB | 56,161 → 53,476 | `__json_value_module_MOD_string_to_int`            | `./json_value_module.F90:8074 → 8081` |
| -21.4% |  -1.696 KiB |   4.4% → 3.7% | 7.91 KiB → 6.21 KiB |   2,727 → 1,818 | `__json_value_module_MOD_json_get_by_path_default` | `./json_value_module.F90:6787 → 6794` |

##### `strndup` (`<unknown>`)

| Change |      Delta |      % |              Size |         Objects | Caller        | Location    |
| -----: | ---------: | -----: | ----------------: | --------------: | ------------- | ----------- |
|  -4.9% | -9.575 KiB | 100.0% | 194 KiB → 184 KiB | 38,812 → 36,690 | `(anonymous)` | `<unknown>` |

##### `__json_value_module_MOD_to_string` (`./json_value_module.F90:10762`)

| Change |      Delta |      % |              Size |         Objects | Caller                                | Location                                |
| -----: | ---------: | -----: | ----------------: | --------------: | ------------------------------------- | --------------------------------------- |
| -18.4% | -7.676 KiB | 100.0% | 41.7 KiB → 34 KiB | 42,722 → 34,861 | `__json_value_module_MOD_parse_value` | `./json_value_module.F90:10117 → 10124` |

##### `__json_value_module_MOD_json_value_create` (`./json_value_module.F90:2211`)

| Change |      Delta |     % |     Size |           Objects | Caller                                 | Location                                |
| -----: | ---------: | ----: | -------: | ----------------: | -------------------------------------- | --------------------------------------- |
|    ~0% | -4.921 KiB | 91.5% | 13.4 MiB | 125,403 → 125,358 | `__json_value_module_MOD_parse_object` | `./json_value_module.F90:10882 → 10889` |

##### `__json_value_module_MOD_pop_char.part.0` (`./json_value_module.F90:11346`)

|  Change |      Delta |             % |                Size | Objects | Caller                                   | Location                                |
| ------: | ---------: | ------------: | ------------------: | ------: | ---------------------------------------- | --------------------------------------- |
|  -50.0% | -2.153 KiB | 99.8% → 99.2% | 4.31 KiB → 2.15 KiB |  18 → 9 | `__json_value_module_MOD_parse_string`   | `./json_value_module.F90:11052 → 11080` |
| +100.0% |       +9 B |   0.2% → 0.8% |          9 B → 18 B |  9 → 18 | `__json_value_module_MOD_json_parse_end` | `./json_value_module.F90:9878 → 9885`   |

##### `__json_value_module_MOD_parse_object` (`./json_value_module.F90:10889`)

| Change |  Delta |     % |     Size |           Objects | Caller                                 | Location                                |
| -----: | -----: | ----: | -------: | ----------------: | -------------------------------------- | --------------------------------------- |
|    ~0% | -585 B | 98.8% | 1.48 MiB | 122,982 → 122,946 | `__json_value_module_MOD_parse_object` | `./json_value_module.F90:10882 → 10889` |

##### `__json_value_module_MOD_to_real` (`./json_value_module.F90:10721`)

|  Change | Delta |             % |       Size | Objects | Caller                                 | Location                        |
| ------: | ----: | ------------: | ---------: | ------: | -------------------------------------- | ------------------------------- |
| removed | -72 B | 100.0% → 0.0% | 72 B → 0 B |   9 → 0 | `__json_value_module_MOD_parse_number` | `./json_value_module.F90:11192` |

### Total size

#### Regressions

Functions with the largest increase in bytes allocated within the function and its callees. Categories account for at least 1.0% of self size on the base or the current side.

|  Change |        Delta |             % |                Size |           Objects | Function                                              | Location                                    |
| ------: | -----------: | ------------: | ------------------: | ----------------: | ----------------------------------------------------- | ------------------------------------------- |
|  +93.0% |   +3.836 MiB |   1.7% → 3.4% | 4.13 MiB → 7.96 MiB |   12,744 → 13,653 | `__json_value_module_MOD_json_get_string_by_path`     | `./json_get_scalar_by_path.inc:9182 → 9189` |
|  +93.0% |   +3.836 MiB |   1.7% → 3.4% | 4.13 MiB → 7.96 MiB |   12,744 → 13,653 | `__json_file_module_MOD_json_file_get_string`         | `./json_file_module.F90:1837 → 1863`        |
|  +99.4% |   +3.836 MiB |   1.6% → 3.3% |  3.86 MiB → 7.7 MiB |   10,008 → 10,917 | `__json_value_module_MOD_json_get_by_path_default`    | `./json_value_module.F90:6787 → 6794`       |
|  +99.4% |   +3.836 MiB |   1.6% → 3.3% |  3.86 MiB → 7.7 MiB |   10,008 → 10,917 | `__json_value_module_MOD_json_get_by_path`            | `./json_value_module.F90:6495 → 6502`       |
|   +5.6% |   +2.722 MiB | 20.7% → 22.3% |   49 MiB → 51.7 MiB | 339,140 → 335,454 | `__libc_start_main`                                   | `<unknown>`                                 |
|   +1.9% |  +893.39 KiB | 19.8% → 20.5% | 46.7 MiB → 47.6 MiB | 309,575 → 305,488 | `_start`                                              | `<unknown>`                                 |
|   +0.7% | +333.185 KiB | 19.2% → 19.7% | 45.4 MiB → 45.7 MiB | 470,458 → 466,187 | `__json_value_module_MOD_parse_string`                | `./json_value_module.F90:11052 → 11080`     |
|   +4.6% |  +52.332 KiB |          0.5% |  1.1 MiB → 1.15 MiB |     8,165 → 7,845 | `__json_string_utilities_MOD_unescape_string`         | `./json_string_utilities.F90:483`           |
|  +37.1% |   +4.192 KiB |         <0.1% | 11.3 KiB → 15.5 KiB |           28 → 32 | `__json_value_module_MOD_json_initialize`             | `./json_value_module.F90:1016 → 1019`       |
|  +37.1% |   +4.192 KiB |         <0.1% | 11.3 KiB → 15.5 KiB |           28 → 32 | `__json_file_module_MOD_initialize_json_core_in_file` | `./json_file_module.F90:504`                |
| +100.0% |         +9 B |         <0.1% |          9 B → 18 B |            9 → 18 | `__json_value_module_MOD_json_parse_end`              | `./json_value_module.F90:9878 → 9885`       |

##### Ours

|  Change |        Delta |             % |                Size |           Objects | Function                                              | Location                                    |
| ------: | -----------: | ------------: | ------------------: | ----------------: | ----------------------------------------------------- | ------------------------------------------- |
|  +93.0% |   +3.836 MiB |   1.7% → 3.4% | 4.13 MiB → 7.96 MiB |   12,744 → 13,653 | `__json_value_module_MOD_json_get_string_by_path`     | `./json_get_scalar_by_path.inc:9182 → 9189` |
|  +93.0% |   +3.836 MiB |   1.7% → 3.4% | 4.13 MiB → 7.96 MiB |   12,744 → 13,653 | `__json_file_module_MOD_json_file_get_string`         | `./json_file_module.F90:1837 → 1863`        |
|  +99.4% |   +3.836 MiB |   1.6% → 3.3% |  3.86 MiB → 7.7 MiB |   10,008 → 10,917 | `__json_value_module_MOD_json_get_by_path_default`    | `./json_value_module.F90:6787 → 6794`       |
|  +99.4% |   +3.836 MiB |   1.6% → 3.3% |  3.86 MiB → 7.7 MiB |   10,008 → 10,917 | `__json_value_module_MOD_json_get_by_path`            | `./json_value_module.F90:6495 → 6502`       |
|   +0.7% | +333.185 KiB | 19.2% → 19.7% | 45.4 MiB → 45.7 MiB | 470,458 → 466,187 | `__json_value_module_MOD_parse_string`                | `./json_value_module.F90:11052 → 11080`     |
|   +4.6% |  +52.332 KiB |          0.5% |  1.1 MiB → 1.15 MiB |     8,165 → 7,845 | `__json_string_utilities_MOD_unescape_string`         | `./json_string_utilities.F90:483`           |
|  +37.1% |   +4.192 KiB |         <0.1% | 11.3 KiB → 15.5 KiB |           28 → 32 | `__json_value_module_MOD_json_initialize`             | `./json_value_module.F90:1016 → 1019`       |
|  +37.1% |   +4.192 KiB |         <0.1% | 11.3 KiB → 15.5 KiB |           28 → 32 | `__json_file_module_MOD_initialize_json_core_in_file` | `./json_file_module.F90:504`                |
| +100.0% |         +9 B |         <0.1% |          9 B → 18 B |            9 → 18 | `__json_value_module_MOD_json_parse_end`              | `./json_value_module.F90:9878 → 9885`       |

#### Improvements

Functions with the largest decrease in bytes allocated within the function and its callees. Categories account for at least 1.0% of self size on the base or the current side.

|  Change |        Delta |             % |                Size |               Objects | Function                                        | Location                                |
| ------: | -----------: | ------------: | ------------------: | --------------------: | ----------------------------------------------- | --------------------------------------- |
|  -12.8% |   -9.761 MiB | 32.4% → 28.7% | 76.4 MiB → 66.6 MiB |     453,993 → 446,365 | `__json_value_module_MOD_json_parse_file`       | `./json_value_module.F90:9714 → 9721`   |
|   -4.9% |   -8.015 MiB | 69.2% → 66.9% |   163 MiB → 155 MiB |     295,488 → 288,185 | `__json_value_module_MOD_parse_number`          | `./json_value_module.F90:11192 → 11220` |
|   -3.4% |   -7.702 MiB | 96.1% → 94.4% |   227 MiB → 219 MiB | 1,140,696 → 1,121,189 | `__json_value_module_MOD_parse_object`          | `./json_value_module.F90:10882 → 10889` |
|   -4.8% |   -7.655 MiB | 67.1% → 65.0% |   159 MiB → 151 MiB |     256,483 → 250,663 | `__json_value_module_MOD_string_to_int`         | `./json_value_module.F90:8074 → 8081`   |
|   -5.7% |   -7.576 MiB | 56.3% → 54.0% |   133 MiB → 125 MiB |     604,668 → 593,904 | `__json_value_module_MOD_parse_array`           | `./json_value_module.F90:10987 → 11003` |
|   -8.6% |   -5.778 MiB | 28.5% → 26.5% | 67.4 MiB → 61.6 MiB |     430,681 → 424,985 | `__json_file_module_MOD_json_file_load`         | `./json_file_module.F90:842 → 854`      |
|   -2.4% |   -3.819 MiB | 68.8% → 68.3% |   162 MiB → 159 MiB |     266,482 → 261,571 | `__json_string_utilities_MOD_string_to_integer` | `./json_string_utilities.F90:116`       |
|   -1.5% |   -2.871 MiB | 81.9% → 82.0% |   193 MiB → 190 MiB |     540,250 → 535,555 | `(anonymous)`                                   | `<unknown>`                             |
|   -2.7% |   -1.955 MiB | 31.1% → 30.8% | 73.4 MiB → 71.5 MiB |     422,033 → 416,790 | `MAIN__`                                        | `/out/profile.f90:5`                    |
|   -2.9% |   -1.931 MiB | 28.1% → 27.8% | 66.4 MiB → 64.5 MiB |     396,202 → 390,639 | `main`                                          | `/out/profile.f90:6`                    |
|   -1.2% | -220.827 KiB |          7.8% | 18.4 MiB → 18.2 MiB |     220,471 → 213,180 | `__json_value_module_MOD_parse_value`           | `./json_value_module.F90:10117 → 10124` |
|   -4.9% |   -9.575 KiB |          0.1% |   194 KiB → 184 KiB |       38,812 → 36,690 | `strndup`                                       | `<unknown>`                             |
|  -18.4% |   -7.676 KiB |         <0.1% |   41.7 KiB → 34 KiB |       42,722 → 34,861 | `__json_value_module_MOD_to_string`             | `./json_value_module.F90:10755 → 10762` |
|     ~0% |   -4.921 KiB |   6.2% → 6.3% |            14.6 MiB |     137,064 → 137,019 | `__json_value_module_MOD_json_value_create`     | `./json_value_module.F90:2204 → 2211`   |
|  -10.8% |   -2.824 KiB |         <0.1% | 26.2 KiB → 23.4 KiB |       20,608 → 18,862 | `_gfortran_string_trim`                         | `<unknown>`                             |
|  -49.7% |   -2.144 KiB |         <0.1% | 4.32 KiB → 2.17 KiB |                    27 | `__json_value_module_MOD_pop_char.part.0`       | `./json_value_module.F90:11318 → 11346` |
| removed |        -72 B |  <0.1% → 0.0% |          72 B → 0 B |                 9 → 0 | `__json_value_module_MOD_to_real`               | `./json_value_module.F90:10721`         |

##### Unknown

| Change |      Delta |             % |              Size |           Objects | Function      | Location    |
| -----: | ---------: | ------------: | ----------------: | ----------------: | ------------- | ----------- |
|  -1.5% | -2.871 MiB | 81.9% → 82.0% | 193 MiB → 190 MiB | 540,250 → 535,555 | `(anonymous)` | `<unknown>` |

##### Ours

|  Change |        Delta |             % |                Size |               Objects | Function                                        | Location                                |
| ------: | -----------: | ------------: | ------------------: | --------------------: | ----------------------------------------------- | --------------------------------------- |
|  -12.8% |   -9.761 MiB | 32.4% → 28.7% | 76.4 MiB → 66.6 MiB |     453,993 → 446,365 | `__json_value_module_MOD_json_parse_file`       | `./json_value_module.F90:9714 → 9721`   |
|   -4.9% |   -8.015 MiB | 69.2% → 66.9% |   163 MiB → 155 MiB |     295,488 → 288,185 | `__json_value_module_MOD_parse_number`          | `./json_value_module.F90:11192 → 11220` |
|   -3.4% |   -7.702 MiB | 96.1% → 94.4% |   227 MiB → 219 MiB | 1,140,696 → 1,121,189 | `__json_value_module_MOD_parse_object`          | `./json_value_module.F90:10882 → 10889` |
|   -4.8% |   -7.655 MiB | 67.1% → 65.0% |   159 MiB → 151 MiB |     256,483 → 250,663 | `__json_value_module_MOD_string_to_int`         | `./json_value_module.F90:8074 → 8081`   |
|   -5.7% |   -7.576 MiB | 56.3% → 54.0% |   133 MiB → 125 MiB |     604,668 → 593,904 | `__json_value_module_MOD_parse_array`           | `./json_value_module.F90:10987 → 11003` |
|   -8.6% |   -5.778 MiB | 28.5% → 26.5% | 67.4 MiB → 61.6 MiB |     430,681 → 424,985 | `__json_file_module_MOD_json_file_load`         | `./json_file_module.F90:842 → 854`      |
|   -2.4% |   -3.819 MiB | 68.8% → 68.3% |   162 MiB → 159 MiB |     266,482 → 261,571 | `__json_string_utilities_MOD_string_to_integer` | `./json_string_utilities.F90:116`       |
|   -2.7% |   -1.955 MiB | 31.1% → 30.8% | 73.4 MiB → 71.5 MiB |     422,033 → 416,790 | `MAIN__`                                        | `/out/profile.f90:5`                    |
|   -2.9% |   -1.931 MiB | 28.1% → 27.8% | 66.4 MiB → 64.5 MiB |     396,202 → 390,639 | `main`                                          | `/out/profile.f90:6`                    |
|   -1.2% | -220.827 KiB |          7.8% | 18.4 MiB → 18.2 MiB |     220,471 → 213,180 | `__json_value_module_MOD_parse_value`           | `./json_value_module.F90:10117 → 10124` |
|  -18.4% |   -7.676 KiB |         <0.1% |   41.7 KiB → 34 KiB |       42,722 → 34,861 | `__json_value_module_MOD_to_string`             | `./json_value_module.F90:10755 → 10762` |
|     ~0% |   -4.921 KiB |   6.2% → 6.3% |            14.6 MiB |     137,064 → 137,019 | `__json_value_module_MOD_json_value_create`     | `./json_value_module.F90:2204 → 2211`   |
|  -49.7% |   -2.144 KiB |         <0.1% | 4.32 KiB → 2.17 KiB |                    27 | `__json_value_module_MOD_pop_char.part.0`       | `./json_value_module.F90:11318 → 11346` |
| removed |        -72 B |  <0.1% → 0.0% |          72 B → 0 B |                 9 → 0 | `__json_value_module_MOD_to_real`               | `./json_value_module.F90:10721`         |

#### Callers

Callers with the largest change in contribution to each function's total size. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `__json_value_module_MOD_json_get_string_by_path` (`./json_get_scalar_by_path.inc:9189`)

| Change |      Delta |      % |                Size |         Objects | Caller                                        | Location                             |
| -----: | ---------: | -----: | ------------------: | --------------: | --------------------------------------------- | ------------------------------------ |
| +93.0% | +3.836 MiB | 100.0% | 4.13 MiB → 7.96 MiB | 12,744 → 13,653 | `__json_file_module_MOD_json_file_get_string` | `./json_file_module.F90:1837 → 1863` |

##### `__json_file_module_MOD_json_file_get_string` (`./json_file_module.F90:1863`)

| Change |      Delta |      % |                Size |         Objects | Caller   | Location             |
| -----: | ---------: | -----: | ------------------: | --------------: | -------- | -------------------- |
| +93.0% | +3.836 MiB | 100.0% | 4.13 MiB → 7.96 MiB | 12,744 → 13,653 | `MAIN__` | `/out/profile.f90:5` |

##### `__json_value_module_MOD_json_get_by_path_default` (`./json_value_module.F90:6794`)

| Change |      Delta |      % |               Size |         Objects | Caller                                     | Location                              |
| -----: | ---------: | -----: | -----------------: | --------------: | ------------------------------------------ | ------------------------------------- |
| +99.4% | +3.836 MiB | 100.0% | 3.86 MiB → 7.7 MiB | 10,008 → 10,917 | `__json_value_module_MOD_json_get_by_path` | `./json_value_module.F90:6495 → 6502` |

##### `__json_value_module_MOD_json_get_by_path` (`./json_value_module.F90:6502`)

| Change |      Delta |      % |               Size |         Objects | Caller                                            | Location                                    |
| -----: | ---------: | -----: | -----------------: | --------------: | ------------------------------------------------- | ------------------------------------------- |
| +99.4% | +3.836 MiB | 100.0% | 3.86 MiB → 7.7 MiB | 10,008 → 10,917 | `__json_value_module_MOD_json_get_string_by_path` | `./json_get_scalar_by_path.inc:9182 → 9189` |

##### `__libc_start_main` (`<unknown>`)

| Change |       Delta |             % |                Size |           Objects | Caller   | Location    |
| -----: | ----------: | ------------: | ------------------: | ----------------: | -------- | ----------- |
|  +1.9% | +893.39 KiB | 95.4% → 92.1% | 46.7 MiB → 47.6 MiB | 309,575 → 305,488 | `_start` | `<unknown>` |

##### `__json_value_module_MOD_parse_string` (`./json_value_module.F90:11080`)

| Change |        Delta |             % |                Size |           Objects | Caller                                 | Location                                |
| -----: | -----------: | ------------: | ------------------: | ----------------: | -------------------------------------- | --------------------------------------- |
|  +1.9% | +546.854 KiB | 63.5% → 64.2% | 28.8 MiB → 29.4 MiB | 336,064 → 331,232 | `__json_value_module_MOD_parse_object` | `./json_value_module.F90:10882 → 10889` |
|  -1.3% | -213.668 KiB | 36.5% → 35.8% | 16.6 MiB → 16.4 MiB | 134,394 → 134,955 | `__json_value_module_MOD_parse_value`  | `./json_value_module.F90:10117 → 10124` |

##### `__json_string_utilities_MOD_unescape_string` (`./json_string_utilities.F90:483`)

| Change |       Delta |      % |               Size |       Objects | Caller                                 | Location                                |
| -----: | ----------: | -----: | -----------------: | ------------: | -------------------------------------- | --------------------------------------- |
|  +4.6% | +52.332 KiB | 100.0% | 1.1 MiB → 1.15 MiB | 8,165 → 7,845 | `__json_value_module_MOD_parse_string` | `./json_value_module.F90:11052 → 11080` |

##### `__json_value_module_MOD_json_initialize` (`./json_value_module.F90:1019`)

| Change |      Delta |      % |                Size | Objects | Caller                                                | Location                     |
| -----: | ---------: | -----: | ------------------: | ------: | ----------------------------------------------------- | ---------------------------- |
| +37.1% | +4.192 KiB | 100.0% | 11.3 KiB → 15.5 KiB | 28 → 32 | `__json_file_module_MOD_initialize_json_core_in_file` | `./json_file_module.F90:504` |

##### `__json_file_module_MOD_initialize_json_core_in_file` (`./json_file_module.F90:504`)

| Change |      Delta |      % |                Size | Objects | Caller   | Location             |
| -----: | ---------: | -----: | ------------------: | ------: | -------- | -------------------- |
| +37.1% | +4.192 KiB | 100.0% | 11.3 KiB → 15.5 KiB | 28 → 32 | `MAIN__` | `/out/profile.f90:5` |

##### `__json_value_module_MOD_json_parse_end` (`./json_value_module.F90:9885`)

|  Change | Delta |      % |       Size | Objects | Caller                                    | Location                              |
| ------: | ----: | -----: | ---------: | ------: | ----------------------------------------- | ------------------------------------- |
| +100.0% |  +9 B | 100.0% | 9 B → 18 B |  9 → 18 | `__json_value_module_MOD_json_parse_file` | `./json_value_module.F90:9714 → 9721` |

##### `__json_value_module_MOD_json_parse_file` (`./json_value_module.F90:9721`)

| Change |      Delta |             % |                Size |           Objects | Caller                                  | Location                           |
| -----: | ---------: | ------------: | ------------------: | ----------------: | --------------------------------------- | ---------------------------------- |
|  -8.6% | -5.778 MiB | 88.2% → 92.4% | 67.4 MiB → 61.6 MiB | 430,681 → 424,985 | `__json_file_module_MOD_json_file_load` | `./json_file_module.F90:842 → 854` |

##### `__json_value_module_MOD_parse_number` (`./json_value_module.F90:11220`)

| Change |       Delta |             % |                Size |           Objects | Caller                                 | Location                                |
| -----: | ----------: | ------------: | ------------------: | ----------------: | -------------------------------------- | --------------------------------------- |
|  -7.2% | -10.059 MiB | 86.0% → 84.0% |   140 MiB → 130 MiB | 250,760 → 245,067 | `__json_value_module_MOD_parse_object` | `./json_value_module.F90:10882 → 10889` |
|  +8.9% |  +2.044 MiB | 14.0% → 16.0% | 22.9 MiB → 24.9 MiB |   44,728 → 43,118 | `__json_value_module_MOD_parse_array`  | `./json_value_module.F90:10987 → 11003` |

##### `__json_value_module_MOD_parse_object` (`./json_value_module.F90:10889`)

| Change |      Delta |             % |                Size |               Objects | Caller                                    | Location                                |
| -----: | ---------: | ------------: | ------------------: | --------------------: | ----------------------------------------- | --------------------------------------- |
| -13.0% | -9.761 MiB | 33.1% → 29.8% | 75.2 MiB → 65.4 MiB |     453,923 → 446,286 | `__json_value_module_MOD_json_parse_file` | `./json_value_module.F90:9714 → 9721`   |
|  -3.5% | -7.931 MiB | 99.9% → 99.8% |   227 MiB → 219 MiB | 1,135,849 → 1,115,505 | `__json_value_module_MOD_parse_object`    | `./json_value_module.F90:10882 → 10889` |
|  -5.7% | -7.576 MiB | 58.4% → 57.0% |   133 MiB → 125 MiB |     600,163 → 589,399 | `__json_value_module_MOD_parse_array`     | `./json_value_module.F90:10987 → 11003` |

##### `__json_value_module_MOD_string_to_int` (`./json_value_module.F90:8081`)

| Change |      Delta |      % |              Size |           Objects | Caller                                 | Location                                |
| -----: | ---------: | -----: | ----------------: | ----------------: | -------------------------------------- | --------------------------------------- |
|  -4.8% | -7.655 MiB | 100.0% | 159 MiB → 151 MiB | 256,483 → 250,663 | `__json_value_module_MOD_parse_number` | `./json_value_module.F90:11192 → 11220` |

##### `__json_value_module_MOD_parse_array` (`./json_value_module.F90:11003`)

| Change |     Delta |             % |              Size |           Objects | Caller                                 | Location                                |
| -----: | --------: | ------------: | ----------------: | ----------------: | -------------------------------------- | --------------------------------------- |
|  -6.3% | -7.83 MiB | 93.8% → 93.2% | 125 MiB → 117 MiB | 588,726 → 574,657 | `__json_value_module_MOD_parse_object` | `./json_value_module.F90:10882 → 10889` |

##### `__json_file_module_MOD_json_file_load` (`./json_file_module.F90:854`)

| Change |      Delta |             % |                Size |           Objects | Caller   | Location             |
| -----: | ---------: | ------------: | ------------------: | ----------------: | -------- | -------------------- |
|  -8.8% | -5.768 MiB | 97.1% → 96.9% | 65.4 MiB → 59.6 MiB | 401,964 → 396,718 | `MAIN__` | `/out/profile.f90:5` |

##### `__json_string_utilities_MOD_string_to_integer` (`./json_string_utilities.F90:116`)

| Change |      Delta |             % |               Size |           Objects | Caller                                             | Location                              |
| -----: | ---------: | ------------: | -----------------: | ----------------: | -------------------------------------------------- | ------------------------------------- |
|  -4.8% | -7.655 MiB | 97.6% → 95.1% |  159 MiB → 151 MiB | 256,483 → 250,663 | `__json_value_module_MOD_string_to_int`            | `./json_value_module.F90:8074 → 8081` |
| +99.4% | +3.836 MiB |   2.4% → 4.9% | 3.86 MiB → 7.7 MiB |    9,999 → 10,908 | `__json_value_module_MOD_json_get_by_path_default` | `./json_value_module.F90:6787 → 6794` |

##### `(anonymous)` (`<unknown>`)

| Change |       Delta |             % |                Size |           Objects | Caller                                          | Location                              |
| -----: | ----------: | ------------: | ------------------: | ----------------: | ----------------------------------------------- | ------------------------------------- |
|  -2.3% |  -3.826 MiB | 86.5% → 85.8% |   167 MiB → 163 MiB | 192,561 → 192,083 | `(anonymous)`                                   | `<unknown>`                           |
|  -2.3% |  -3.803 MiB | 83.9% → 83.2% |   162 MiB → 158 MiB | 187,914 → 188,343 | `__json_string_utilities_MOD_string_to_integer` | `./json_string_utilities.F90:116`     |
|  +5.6% |  +2.722 MiB | 25.3% → 27.1% |   49 MiB → 51.7 MiB | 339,140 → 335,454 | `__libc_start_main`                             | `<unknown>`                           |
|  -0.7% | -28.437 KiB |          2.0% | 3.85 MiB → 3.83 MiB |     4,560 → 3,650 | `MAIN__`                                        | `/out/profile.f90:5`                  |
| +47.9% |  +4.179 KiB |         <0.1% | 8.73 KiB → 12.9 KiB |           11 → 14 | `__json_value_module_MOD_json_initialize`       | `./json_value_module.F90:1016 → 1019` |

##### `MAIN__` (`/out/profile.f90:5`)

| Change |      Delta |             % |                Size |           Objects | Caller | Location             |
| -----: | ---------: | ------------: | ------------------: | ----------------: | ------ | -------------------- |
|  -2.9% | -1.931 MiB | 90.4% → 90.2% | 66.4 MiB → 64.5 MiB | 396,202 → 390,639 | `main` | `/out/profile.f90:6` |

##### `main` (`/out/profile.f90:6`)

| Change |      Delta |             % |              Size |           Objects | Caller        | Location    |
| -----: | ---------: | ------------: | ----------------: | ----------------: | ------------- | ----------- |
|  +6.0% | +3.547 MiB | 88.8% → 97.0% | 59 MiB → 62.5 MiB | 366,201 → 363,752 | `(anonymous)` | `<unknown>` |

##### `__json_value_module_MOD_parse_value` (`./json_value_module.F90:10124`)

| Change |        Delta |      % |                Size |           Objects | Caller                                 | Location                                |
| -----: | -----------: | -----: | ------------------: | ----------------: | -------------------------------------- | --------------------------------------- |
|  -1.2% | -220.827 KiB | 100.0% | 18.4 MiB → 18.2 MiB | 220,471 → 213,180 | `__json_value_module_MOD_parse_object` | `./json_value_module.F90:10882 → 10889` |

##### `strndup` (`<unknown>`)

| Change |      Delta |      % |              Size |         Objects | Caller        | Location    |
| -----: | ---------: | -----: | ----------------: | --------------: | ------------- | ----------- |
|  -4.9% | -9.575 KiB | 100.0% | 194 KiB → 184 KiB | 38,812 → 36,690 | `(anonymous)` | `<unknown>` |

##### `__json_value_module_MOD_to_string` (`./json_value_module.F90:10762`)

| Change |      Delta |      % |              Size |         Objects | Caller                                | Location                                |
| -----: | ---------: | -----: | ----------------: | --------------: | ------------------------------------- | --------------------------------------- |
| -18.4% | -7.676 KiB | 100.0% | 41.7 KiB → 34 KiB | 42,722 → 34,861 | `__json_value_module_MOD_parse_value` | `./json_value_module.F90:10117 → 10124` |

##### `__json_value_module_MOD_json_value_create` (`./json_value_module.F90:2211`)

| Change |      Delta |     % |     Size |           Objects | Caller                                 | Location                                |
| -----: | ---------: | ----: | -------: | ----------------: | -------------------------------------- | --------------------------------------- |
|    ~0% | -4.921 KiB | 91.5% | 13.4 MiB | 125,403 → 125,358 | `__json_value_module_MOD_parse_object` | `./json_value_module.F90:10882 → 10889` |

##### `_gfortran_string_trim` (`<unknown>`)

| Change |      Delta |             % |                Size |         Objects | Caller                                          | Location                          |
| -----: | ---------: | ------------: | ------------------: | --------------: | ----------------------------------------------- | --------------------------------- |
| -11.7% | -2.824 KiB | 92.2% → 91.3% | 24.2 KiB → 21.3 KiB | 19,680 → 17,934 | `__json_string_utilities_MOD_string_to_integer` | `./json_string_utilities.F90:116` |

##### `__json_value_module_MOD_pop_char.part.0` (`./json_value_module.F90:11346`)

|  Change |      Delta |             % |                Size | Objects | Caller                                   | Location                                |
| ------: | ---------: | ------------: | ------------------: | ------: | ---------------------------------------- | --------------------------------------- |
|  -50.0% | -2.153 KiB | 99.8% → 99.2% | 4.31 KiB → 2.15 KiB |  18 → 9 | `__json_value_module_MOD_parse_string`   | `./json_value_module.F90:11052 → 11080` |
| +100.0% |       +9 B |   0.2% → 0.8% |          9 B → 18 B |  9 → 18 | `__json_value_module_MOD_json_parse_end` | `./json_value_module.F90:9878 → 9885`   |

##### `__json_value_module_MOD_to_real` (`./json_value_module.F90:10721`)

|  Change | Delta |             % |       Size | Objects | Caller                                 | Location                        |
| ------: | ----: | ------------: | ---------: | ------: | -------------------------------------- | ------------------------------- |
| removed | -72 B | 100.0% → 0.0% | 72 B → 0 B |   9 → 0 | `__json_value_module_MOD_parse_number` | `./json_value_module.F90:11192` |

#### Callees

Callees with the largest change in contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `__json_value_module_MOD_json_get_string_by_path` (`./json_get_scalar_by_path.inc:9189`)

| Change |      Delta |             % |               Size |         Objects | Callee                                     | Location                              |
| -----: | ---------: | ------------: | -----------------: | --------------: | ------------------------------------------ | ------------------------------------- |
| +99.4% | +3.836 MiB | 93.6% → 96.7% | 3.86 MiB → 7.7 MiB | 10,008 → 10,917 | `__json_value_module_MOD_json_get_by_path` | `./json_value_module.F90:6495 → 6502` |

##### `__json_file_module_MOD_json_file_get_string` (`./json_file_module.F90:1863`)

| Change |      Delta |      % |                Size |         Objects | Callee                                            | Location                                    |
| -----: | ---------: | -----: | ------------------: | --------------: | ------------------------------------------------- | ------------------------------------------- |
| +93.0% | +3.836 MiB | 100.0% | 4.13 MiB → 7.96 MiB | 12,744 → 13,653 | `__json_value_module_MOD_json_get_string_by_path` | `./json_get_scalar_by_path.inc:9182 → 9189` |

##### `__json_value_module_MOD_json_get_by_path_default` (`./json_value_module.F90:6794`)

| Change |      Delta |      % |               Size |        Objects | Callee                                          | Location                          |
| -----: | ---------: | -----: | -----------------: | -------------: | ----------------------------------------------- | --------------------------------- |
| +99.4% | +3.836 MiB | 100.0% | 3.86 MiB → 7.7 MiB | 9,999 → 10,908 | `__json_string_utilities_MOD_string_to_integer` | `./json_string_utilities.F90:116` |

##### `__json_value_module_MOD_json_get_by_path` (`./json_value_module.F90:6502`)

| Change |      Delta |      % |               Size |         Objects | Callee                                             | Location                              |
| -----: | ---------: | -----: | -----------------: | --------------: | -------------------------------------------------- | ------------------------------------- |
| +99.4% | +3.836 MiB | 100.0% | 3.86 MiB → 7.7 MiB | 10,008 → 10,917 | `__json_value_module_MOD_json_get_by_path_default` | `./json_value_module.F90:6787 → 6794` |

##### `__libc_start_main` (`<unknown>`)

| Change |      Delta |      % |              Size |           Objects | Callee        | Location    |
| -----: | ---------: | -----: | ----------------: | ----------------: | ------------- | ----------- |
|  +5.6% | +2.722 MiB | 100.0% | 49 MiB → 51.7 MiB | 339,140 → 335,454 | `(anonymous)` | `<unknown>` |

##### `_start` (`<unknown>`)

| Change |       Delta |      % |                Size |           Objects | Callee              | Location    |
| -----: | ----------: | -----: | ------------------: | ----------------: | ------------------- | ----------- |
|  +1.9% | +893.39 KiB | 100.0% | 46.7 MiB → 47.6 MiB | 309,575 → 305,488 | `__libc_start_main` | `<unknown>` |

##### `__json_value_module_MOD_parse_string` (`./json_value_module.F90:11080`)

| Change |       Delta |           % |                Size |       Objects | Callee                                        | Location                                |
| -----: | ----------: | ----------: | ------------------: | ------------: | --------------------------------------------- | --------------------------------------- |
|  +4.6% | +52.332 KiB | 2.4% → 2.5% |  1.1 MiB → 1.15 MiB | 8,165 → 7,845 | `__json_string_utilities_MOD_unescape_string` | `./json_string_utilities.F90:483`       |
| -50.0% |  -2.153 KiB |       <0.1% | 4.31 KiB → 2.15 KiB |        18 → 9 | `__json_value_module_MOD_pop_char.part.0`     | `./json_value_module.F90:11318 → 11346` |

##### `__json_value_module_MOD_json_initialize` (`./json_value_module.F90:1019`)

| Change |      Delta |             % |                Size | Objects | Callee        | Location    |
| -----: | ---------: | ------------: | ------------------: | ------: | ------------- | ----------- |
| +47.9% | +4.179 KiB | 77.3% → 83.4% | 8.73 KiB → 12.9 KiB | 11 → 14 | `(anonymous)` | `<unknown>` |

##### `__json_file_module_MOD_initialize_json_core_in_file` (`./json_file_module.F90:504`)

| Change |      Delta |      % |                Size | Objects | Callee                                    | Location                              |
| -----: | ---------: | -----: | ------------------: | ------: | ----------------------------------------- | ------------------------------------- |
| +37.1% | +4.192 KiB | 100.0% | 11.3 KiB → 15.5 KiB | 28 → 32 | `__json_value_module_MOD_json_initialize` | `./json_value_module.F90:1016 → 1019` |

##### `__json_value_module_MOD_json_parse_end` (`./json_value_module.F90:9885`)

|  Change | Delta |      % |       Size | Objects | Callee                                    | Location                                |
| ------: | ----: | -----: | ---------: | ------: | ----------------------------------------- | --------------------------------------- |
| +100.0% |  +9 B | 100.0% | 9 B → 18 B |  9 → 18 | `__json_value_module_MOD_pop_char.part.0` | `./json_value_module.F90:11318 → 11346` |

##### `__json_value_module_MOD_json_parse_file` (`./json_value_module.F90:9721`)

|  Change |      Delta |             % |                Size |           Objects | Callee                                   | Location                                |
| ------: | ---------: | ------------: | ------------------: | ----------------: | ---------------------------------------- | --------------------------------------- |
|  -13.0% | -9.761 MiB | 98.4% → 98.1% | 75.2 MiB → 65.4 MiB | 453,923 → 446,286 | `__json_value_module_MOD_parse_object`   | `./json_value_module.F90:10882 → 10889` |
| +100.0% |       +9 B |         <0.1% |          9 B → 18 B |            9 → 18 | `__json_value_module_MOD_json_parse_end` | `./json_value_module.F90:9878 → 9885`   |

##### `__json_value_module_MOD_parse_number` (`./json_value_module.F90:11220`)

|  Change |      Delta |             % |              Size |           Objects | Callee                                  | Location                              |
| ------: | ---------: | ------------: | ----------------: | ----------------: | --------------------------------------- | ------------------------------------- |
|   -4.8% | -7.655 MiB | 97.0% → 97.1% | 159 MiB → 151 MiB | 256,483 → 250,663 | `__json_value_module_MOD_string_to_int` | `./json_value_module.F90:8074 → 8081` |
| removed |      -72 B |  <0.1% → 0.0% |        72 B → 0 B |             9 → 0 | `__json_value_module_MOD_to_real`       | `./json_value_module.F90:10721`       |

##### `__json_value_module_MOD_parse_object` (`./json_value_module.F90:10889`)

| Change |        Delta |             % |                Size |               Objects | Callee                                 | Location                                |
| -----: | -----------: | ------------: | ------------------: | --------------------: | -------------------------------------- | --------------------------------------- |
|  -7.2% |  -10.059 MiB | 61.9% → 59.5% |   140 MiB → 130 MiB |     250,760 → 245,067 | `__json_value_module_MOD_parse_number` | `./json_value_module.F90:11192 → 11220` |
|  -3.5% |   -7.931 MiB | 99.9% → 99.8% |   227 MiB → 219 MiB | 1,135,849 → 1,115,505 | `__json_value_module_MOD_parse_object` | `./json_value_module.F90:10882 → 10889` |
|  -6.3% |    -7.83 MiB | 55.0% → 53.4% |   125 MiB → 117 MiB |     588,726 → 574,657 | `__json_value_module_MOD_parse_array`  | `./json_value_module.F90:10987 → 11003` |
|  +1.9% | +546.854 KiB | 12.7% → 13.4% | 28.8 MiB → 29.4 MiB |     336,064 → 331,232 | `__json_value_module_MOD_parse_string` | `./json_value_module.F90:11052 → 11080` |
|  -1.2% | -220.827 KiB |   8.1% → 8.3% | 18.4 MiB → 18.2 MiB |     220,471 → 213,180 | `__json_value_module_MOD_parse_value`  | `./json_value_module.F90:10117 → 10124` |

##### `__json_value_module_MOD_string_to_int` (`./json_value_module.F90:8081`)

| Change |      Delta |      % |              Size |           Objects | Callee                                          | Location                          |
| -----: | ---------: | -----: | ----------------: | ----------------: | ----------------------------------------------- | --------------------------------- |
|  -4.8% | -7.655 MiB | 100.0% | 159 MiB → 151 MiB | 256,483 → 250,663 | `__json_string_utilities_MOD_string_to_integer` | `./json_string_utilities.F90:116` |

##### `__json_value_module_MOD_parse_array` (`./json_value_module.F90:11003`)

| Change |      Delta |             % |                Size |           Objects | Callee                                 | Location                                |
| -----: | ---------: | ------------: | ------------------: | ----------------: | -------------------------------------- | --------------------------------------- |
|  -5.7% | -7.576 MiB |         99.6% |   133 MiB → 125 MiB | 600,163 → 589,399 | `__json_value_module_MOD_parse_object` | `./json_value_module.F90:10882 → 10889` |
|  +8.9% | +2.044 MiB | 17.2% → 19.9% | 22.9 MiB → 24.9 MiB |   44,728 → 43,118 | `__json_value_module_MOD_parse_number` | `./json_value_module.F90:11192 → 11220` |

##### `__json_file_module_MOD_json_file_load` (`./json_file_module.F90:854`)

| Change |      Delta |      % |                Size |           Objects | Callee                                    | Location                              |
| -----: | ---------: | -----: | ------------------: | ----------------: | ----------------------------------------- | ------------------------------------- |
|  -8.6% | -5.778 MiB | 100.0% | 67.4 MiB → 61.6 MiB | 430,681 → 424,985 | `__json_value_module_MOD_json_parse_file` | `./json_value_module.F90:9714 → 9721` |

##### `__json_string_utilities_MOD_string_to_integer` (`./json_string_utilities.F90:116`)

| Change |      Delta |     % |                Size |           Objects | Callee                  | Location    |
| -----: | ---------: | ----: | ------------------: | ----------------: | ----------------------- | ----------- |
|  -2.3% | -3.803 MiB | 99.9% |   162 MiB → 158 MiB | 187,914 → 188,343 | `(anonymous)`           | `<unknown>` |
| -11.7% | -2.824 KiB | <0.1% | 24.2 KiB → 21.3 KiB |   19,680 → 17,934 | `_gfortran_string_trim` | `<unknown>` |

##### `(anonymous)` (`<unknown>`)

| Change |      Delta |             % |              Size |           Objects | Callee        | Location             |
| -----: | ---------: | ------------: | ----------------: | ----------------: | ------------- | -------------------- |
|  -2.3% | -3.826 MiB | 86.5% → 85.8% | 167 MiB → 163 MiB | 192,561 → 192,083 | `(anonymous)` | `<unknown>`          |
|  +6.0% | +3.547 MiB | 30.5% → 32.8% | 59 MiB → 62.5 MiB | 366,201 → 363,752 | `main`        | `/out/profile.f90:6` |
|  -4.9% | -9.575 KiB |          0.1% | 194 KiB → 184 KiB |   38,812 → 36,690 | `strndup`     | `<unknown>`          |

##### `MAIN__` (`/out/profile.f90:5`)

| Change |       Delta |             % |                Size |           Objects | Callee                                                | Location                             |
| -----: | ----------: | ------------: | ------------------: | ----------------: | ----------------------------------------------------- | ------------------------------------ |
|  -8.8% |  -5.768 MiB | 89.1% → 83.4% | 65.4 MiB → 59.6 MiB | 401,964 → 396,718 | `__json_file_module_MOD_json_file_load`               | `./json_file_module.F90:842 → 854`   |
| +93.0% |  +3.836 MiB |  5.6% → 11.1% | 4.13 MiB → 7.96 MiB |   12,744 → 13,653 | `__json_file_module_MOD_json_file_get_string`         | `./json_file_module.F90:1837 → 1863` |
|  -0.7% | -28.437 KiB |   5.2% → 5.4% | 3.85 MiB → 3.83 MiB |     4,560 → 3,650 | `(anonymous)`                                         | `<unknown>`                          |
| +37.1% |  +4.192 KiB |         <0.1% | 11.3 KiB → 15.5 KiB |           28 → 32 | `__json_file_module_MOD_initialize_json_core_in_file` | `./json_file_module.F90:504`         |

##### `main` (`/out/profile.f90:6`)

| Change |      Delta |      % |                Size |           Objects | Callee   | Location             |
| -----: | ---------: | -----: | ------------------: | ----------------: | -------- | -------------------- |
|  -2.9% | -1.931 MiB | 100.0% | 66.4 MiB → 64.5 MiB | 396,202 → 390,639 | `MAIN__` | `/out/profile.f90:5` |

##### `__json_value_module_MOD_parse_value` (`./json_value_module.F90:10124`)

| Change |        Delta |             % |                Size |           Objects | Callee                                 | Location                                |
| -----: | -----------: | ------------: | ------------------: | ----------------: | -------------------------------------- | --------------------------------------- |
|  -1.3% | -213.668 KiB | 90.0% → 89.9% | 16.6 MiB → 16.4 MiB | 134,394 → 134,955 | `__json_value_module_MOD_parse_string` | `./json_value_module.F90:11052 → 11080` |
| -18.4% |   -7.676 KiB |          0.2% |   41.7 KiB → 34 KiB |   42,722 → 34,861 | `__json_value_module_MOD_to_string`    | `./json_value_module.F90:10755 → 10762` |

##### `_gfortran_string_trim` (`<unknown>`)

| Change |      Delta |      % |                Size |         Objects | Callee        | Location    |
| -----: | ---------: | -----: | ------------------: | --------------: | ------------- | ----------- |
| -10.8% | -2.824 KiB | 100.0% | 26.2 KiB → 23.4 KiB | 20,608 → 18,862 | `(anonymous)` | `<unknown>` |

## Hottest call stacks

### Regressions

Call stacks with the largest increase in bytes allocated in their leaf frame.

|   Change |        Delta |            % |                 Size |           Objects | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| -------: | -----------: | -----------: | -------------------: | ----------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  +100.0% |    +3.62 MiB |  1.5% → 3.1% |  3.62 MiB → 7.24 MiB |       909 → 1,818 | `(anonymous)` ← `(anonymous)` ← `(anonymous)` ← `__json_string_utilities_MOD_string_to_integer` (`./json_string_utilities.F90:116`) ← `__json_value_module_MOD_json_get_by_path_default` (`./json_value_module.F90:6794`) ← `__json_value_module_MOD_json_get_by_path` (6502) ← `__json_value_module_MOD_json_get_string_by_path` (`./json_get_scalar_by_path.inc:9189`) ← `__json_file_module_MOD_json_file_get_string` (`./json_file_module.F90:1863`) ← `MAIN__` (`/out/profile.f90:5`) ← `main` (6) ← `(anonymous)` ← `__libc_start_main` ← `_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|      new |   +2.007 MiB |  0.0% → 0.9% |       0 B → 2.01 MiB |           0 → 504 | `(anonymous)` ← `(anonymous)` ← `(anonymous)` ← `__json_string_utilities_MOD_string_to_integer` (`./json_string_utilities.F90:116`) ← `__json_value_module_MOD_string_to_int` (`./json_value_module.F90:8081`) ← `__json_value_module_MOD_parse_number` (11220) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_array` (11003) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_json_parse_file` (9721) ← `__json_file_module_MOD_json_file_load` (`./json_file_module.F90:854`) ← `MAIN__` (`/out/profile.f90:5`) ← `main` (6) ← `(anonymous)` ← `__libc_start_main`                                                                                                                                                     |
|   +41.4% |   +1.967 MiB |  2.0% → 2.9% |  4.76 MiB → 6.72 MiB |     1,194 → 1,688 | `(anonymous)` ← `(anonymous)` ← `(anonymous)` ← `__json_string_utilities_MOD_string_to_integer` (`./json_string_utilities.F90:116`) ← `__json_value_module_MOD_string_to_int` (`./json_value_module.F90:8081`) ← `__json_value_module_MOD_parse_number` (11220) ← `__json_value_module_MOD_parse_array` (11003) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_array` (11003) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889)                                                                 |
|  +100.0% |     +783 KiB |  0.3% → 0.7% |   783 KiB → 1.53 MiB |         192 → 384 | `(anonymous)` ← `(anonymous)` ← `(anonymous)` ← `__json_string_utilities_MOD_string_to_integer` (`./json_string_utilities.F90:116`) ← `__json_value_module_MOD_string_to_int` (`./json_value_module.F90:8081`) ← `__json_value_module_MOD_parse_number` (11220) ← `__json_value_module_MOD_parse_array` (11003) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_array` (11003) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889)                                                                 |
|    +4.9% | +704.804 KiB |  5.9% → 6.3% |    14 MiB → 14.7 MiB | 165,952 → 165,648 | `__json_value_module_MOD_parse_string` (`./json_value_module.F90:11080`) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) |
|   +58.6% |     +592 KiB |  0.4% → 0.7% | 1,011 KiB → 1.56 MiB |     3,220 → 4,404 | `__json_value_module_MOD_parse_string` (`./json_value_module.F90:11080`) ← `__json_value_module_MOD_parse_value` (10124) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_array` (11003) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_json_parse_file` (9721) ← `__json_file_module_MOD_json_file_load` (`./json_file_module.F90:854`) ← `MAIN__` (`/out/profile.f90:5`) ← `main` (6) ← `(anonymous)`                                                             |
|  +100.0% |   +391.5 KiB |  0.2% → 0.3% |    392 KiB → 783 KiB |          96 → 192 | `(anonymous)` ← `(anonymous)` ← `(anonymous)` ← `__json_string_utilities_MOD_string_to_integer` (`./json_string_utilities.F90:116`) ← `__json_value_module_MOD_string_to_int` (`./json_value_module.F90:8081`) ← `__json_value_module_MOD_parse_number` (11220) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_array` (11003) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889)                                                                |
|  +100.0% |  +346.64 KiB |  0.1% → 0.3% |    347 KiB → 693 KiB |          85 → 170 | `(anonymous)` ← `(anonymous)` ← `(anonymous)` ← `__json_string_utilities_MOD_string_to_integer` (`./json_string_utilities.F90:116`) ← `__json_value_module_MOD_string_to_int` (`./json_value_module.F90:8081`) ← `__json_value_module_MOD_parse_number` (11220) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_array` (11003) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_json_parse_file` (9721) ← `__json_file_module_MOD_json_file_load` (`./json_file_module.F90:854`) ← `MAIN__` (`/out/profile.f90:5`) ← `main` (6) ← `(anonymous)` ← `__libc_start_main` ← `_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|   +93.0% | +244.836 KiB |  0.1% → 0.2% |    263 KiB → 508 KiB |     3,756 → 5,634 | `__json_value_module_MOD_parse_string` (`./json_value_module.F90:11080`) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_array` (11003) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_json_parse_file` (9721) ← `__json_file_module_MOD_json_file_load` (`./json_file_module.F90:854`) ← `MAIN__` (`/out/profile.f90:5`) ← `main` (6) ← `(anonymous)` ← `__libc_start_main` ← `_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| +1600.0% |  +234.75 KiB | <0.1% → 0.1% |   14.7 KiB → 249 KiB |     1,878 → 2,817 | `__json_value_module_MOD_parse_string` (`./json_value_module.F90:11080`) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_array` (11003) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_json_parse_file` (9721) ← `__json_file_module_MOD_json_file_load` (`./json_file_module.F90:854`) ← `MAIN__` (`/out/profile.f90:5`) ← `main` (6) ← `(anonymous)` ← `__libc_start_main` ← `_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|      new | +228.375 KiB |  0.0% → 0.1% |        0 B → 228 KiB |            0 → 56 | `(anonymous)` ← `(anonymous)` ← `(anonymous)` ← `__json_string_utilities_MOD_string_to_integer` (`./json_string_utilities.F90:116`) ← `__json_value_module_MOD_string_to_int` (`./json_value_module.F90:8081`) ← `__json_value_module_MOD_parse_number` (11220) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_array` (11003) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_json_parse_file` (9721) ← `__json_file_module_MOD_json_file_load` (`./json_file_module.F90:854`) ← `MAIN__` (`/out/profile.f90:5`) ← `main` (6) ← `(anonymous)` ← `__libc_start_main` ← `_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  +400.0% |  +227.25 KiB | <0.1% → 0.1% |   56.8 KiB → 284 KiB |     1,818 → 3,636 | `(anonymous)` ← `(anonymous)` ← `(anonymous)` ← `(anonymous)` ← `__json_string_utilities_MOD_string_to_integer` (`./json_string_utilities.F90:116`) ← `__json_value_module_MOD_json_get_by_path_default` (`./json_value_module.F90:6794`) ← `__json_value_module_MOD_json_get_by_path` (6502) ← `__json_value_module_MOD_json_get_string_by_path` (`./json_get_scalar_by_path.inc:9189`) ← `__json_file_module_MOD_json_file_get_string` (`./json_file_module.F90:1863`) ← `MAIN__` (`/out/profile.f90:5`) ← `main` (6) ← `(anonymous)` ← `__libc_start_main` ← `_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|   +33.4% | +222.155 KiB |  0.3% → 0.4% |    666 KiB → 888 KiB |     8,269 → 7,936 | `__json_value_module_MOD_parse_string` (`./json_value_module.F90:11080`) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_array` (11003) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_json_parse_file` (9721) ← `__json_file_module_MOD_json_file_load` (`./json_file_module.F90:854`) ← `MAIN__` (`/out/profile.f90:5`) ← `main` (6) ← `(anonymous)`                                                            |
| +6400.0% |  +171.75 KiB | <0.1% → 0.1% |   2.68 KiB → 174 KiB |     1,374 → 2,061 | `__json_value_module_MOD_parse_string` (`./json_value_module.F90:11080`) ← `__json_value_module_MOD_parse_value` (10124) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_array` (11003) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_json_parse_file` (9721) ← `__json_file_module_MOD_json_file_load` (`./json_file_module.F90:854`) ← `MAIN__` (`/out/profile.f90:5`) ← `main` (6) ← `(anonymous)` ← `__libc_start_main` ← `_start`                                                                                                                              |
|   +15.8% | +159.028 KiB |  0.4% → 0.5% | 1,008 KiB → 1.14 MiB |   11,950 → 11,446 | `__json_value_module_MOD_parse_string` (`./json_value_module.F90:11080`) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_array` (11003) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_json_parse_file` (9721) ← `__json_file_module_MOD_json_file_load` (`./json_file_module.F90:854`) ← `MAIN__` (`/out/profile.f90:5`) ← `main` (6) ← `(anonymous)` ← `__libc_start_main` ← `_start`                                                                                                                             |
|  +100.0% | +146.718 KiB |         0.1% |    147 KiB → 293 KiB |     1,878 → 3,756 | `(anonymous)` ← `(anonymous)` ← `(anonymous)` ← `(anonymous)` ← `__json_string_utilities_MOD_string_to_integer` (`./json_string_utilities.F90:116`) ← `__json_value_module_MOD_string_to_int` (`./json_value_module.F90:8081`) ← `__json_value_module_MOD_parse_number` (11220) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_array` (11003)                                                                                                 |
|    +4.8% | +105.781 KiB |  0.9% → 1.0% |  2.17 MiB → 2.27 MiB |   28,988 → 29,586 | `(anonymous)` ← `(anonymous)` ← `(anonymous)` ← `(anonymous)` ← `__json_string_utilities_MOD_string_to_integer` (`./json_string_utilities.F90:116`) ← `__json_value_module_MOD_string_to_int` (`./json_value_module.F90:8081`) ← `__json_value_module_MOD_parse_number` (11220) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889)                                                                                                |
|   +50.4% |  +97.123 KiB |         0.1% |    193 KiB → 290 KiB |       970 → 1,455 | `__json_string_utilities_MOD_unescape_string` (`./json_string_utilities.F90:483`) ← `__json_value_module_MOD_parse_string` (`./json_value_module.F90:11080`) ← `__json_value_module_MOD_parse_value` (10124) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_array` (11003) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_json_parse_file` (9721) ← `__json_file_module_MOD_json_file_load` (`./json_file_module.F90:854`) ← `MAIN__` (`/out/profile.f90:5`) ← `main` (6) ← `(anonymous)` ← `__libc_start_main` ← `_start`                                                                                                                                            |
|   +66.7% |  +85.875 KiB |         0.1% |    129 KiB → 215 KiB |     2,061 → 2,748 | `(anonymous)` ← `(anonymous)` ← `(anonymous)` ← `(anonymous)` ← `__json_string_utilities_MOD_string_to_integer` (`./json_string_utilities.F90:116`) ← `__json_value_module_MOD_string_to_int` (`./json_value_module.F90:8081`) ← `__json_value_module_MOD_parse_number` (11220) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_array` (11003) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_json_parse_file` (9721) ← `__json_file_module_MOD_json_file_load` (`./json_file_module.F90:854`)                                                                       |
|   +28.3% |      +63 KiB |         0.1% |    223 KiB → 286 KiB |     3,939 → 4,191 | `__json_value_module_MOD_parse_string` (`./json_value_module.F90:11080`) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_array` (11003)  |

### Improvements

Call stacks with the largest decrease in bytes allocated in their leaf frame.

|  Change |        Delta |            % |                Size |         Objects | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ------: | -----------: | -----------: | ------------------: | --------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| removed |   -5.464 MiB |  2.3% → 0.0% |      5.46 MiB → 0 B |       1,372 → 0 | `(anonymous)` ← `(anonymous)` ← `(anonymous)` ← `__json_string_utilities_MOD_string_to_integer` (`./json_string_utilities.F90:116`) ← `__json_value_module_MOD_string_to_int` (`./json_value_module.F90:8074`) ← `__json_value_module_MOD_parse_number` (11192) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_array` (10987) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_json_parse_file` (9714) ← `__json_file_module_MOD_json_file_load` (`./json_file_module.F90:842`) ← `MAIN__` (`/out/profile.f90:5`) ← `main` (6)                                                                                                                 |
|  -50.0% |   -3.739 MiB |  3.2% → 1.6% | 7.48 MiB → 3.74 MiB |     1,878 → 939 | `(anonymous)` ← `(anonymous)` ← `(anonymous)` ← `__json_string_utilities_MOD_string_to_integer` (`./json_string_utilities.F90:116`) ← `__json_value_module_MOD_string_to_int` (`./json_value_module.F90:8081`) ← `__json_value_module_MOD_parse_number` (11220) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_array` (11003) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_json_parse_file` (9721)                                                                                      |
|  -50.0% |   -3.739 MiB |  3.2% → 1.6% | 7.48 MiB → 3.74 MiB |     1,878 → 939 | `(anonymous)` ← `(anonymous)` ← `(anonymous)` ← `__json_string_utilities_MOD_string_to_integer` (`./json_string_utilities.F90:116`) ← `__json_value_module_MOD_string_to_int` (`./json_value_module.F90:8081`) ← `__json_value_module_MOD_parse_number` (11220) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_array` (11003) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_json_parse_file` (9721) ← `__json_file_module_MOD_json_file_load` (`./json_file_module.F90:854`) ← `MAIN__` (`/out/profile.f90:5`) ← `main` (6) ← `(anonymous)` ← `__libc_start_main` ← `_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  -13.4% | -943.809 KiB |  2.9% → 2.6% | 6.88 MiB → 5.96 MiB | 64,204 → 61,700 | `__json_value_module_MOD_parse_string` (`./json_value_module.F90:11080`) ← `__json_value_module_MOD_parse_value` (10124) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889)                          |
|  -50.0% | -448.593 KiB |  0.4% → 0.2% |   897 KiB → 449 KiB |       220 → 110 | `(anonymous)` ← `(anonymous)` ← `(anonymous)` ← `__json_string_utilities_MOD_string_to_integer` (`./json_string_utilities.F90:116`) ← `__json_value_module_MOD_string_to_int` (`./json_value_module.F90:8081`) ← `__json_value_module_MOD_parse_number` (11220) ← `__json_value_module_MOD_parse_array` (11003) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_array` (11003) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_array` (11003)                                                                                          |
|  -48.0% | -245.753 KiB |  0.2% → 0.1% |   512 KiB → 266 KiB |   5,634 → 3,756 | `__json_value_module_MOD_parse_string` (`./json_value_module.F90:11080`) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_array` (11003) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_json_parse_file` (9721) ← `__json_file_module_MOD_json_file_load` (`./json_file_module.F90:854`) ← `MAIN__` (`/out/profile.f90:5`) ← `main` (6) ← `(anonymous)` ← `__libc_start_main` ← `_start`                                                                                                                                                                                                                                                                                                                                                                                                          |
| removed |  -234.75 KiB |  0.1% → 0.0% |       235 KiB → 0 B |         939 → 0 | `__json_value_module_MOD_parse_number` (`./json_value_module.F90:11192`) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_parse_array` (10987) ← `__json_value_module_MOD_parse_object` (10882) ← `__json_value_module_MOD_json_parse_file` (9714) ← `__json_file_module_MOD_json_file_load` (`./json_file_module.F90:842`) ← `MAIN__` (`/out/profile.f90:5`) ← `main` (6) ← `(anonymous)` ← `__libc_start_main`                                                                                                               |
|  -83.5% | -213.659 KiB | 0.1% → <0.1% |  256 KiB → 42.2 KiB |           1,878 | `__json_value_module_MOD_parse_string` (`./json_value_module.F90:11080`) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_array` (11003) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_json_parse_file` (9721) ← `__json_file_module_MOD_json_file_load` (`./json_file_module.F90:854`) ← `MAIN__` (`/out/profile.f90:5`) ← `main` (6) ← `(anonymous)` ← `__libc_start_main` ← `_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  -94.6% | -181.355 KiB | 0.1% → <0.1% |  192 KiB → 10.3 KiB |   2,229 → 1,486 | `__json_value_module_MOD_parse_string` (`./json_value_module.F90:11080`) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_array` (11003) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_array` (11003) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_json_parse_file` (9721)                         |
|  -96.0% |  -181.25 KiB | 0.1% → <0.1% |  189 KiB → 7.58 KiB |   2,229 → 1,504 | `__json_value_module_MOD_parse_string` (`./json_value_module.F90:11080`) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_array` (11003) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_array` (11003) ← `__json_value_module_MOD_parse_object` (10889)                           |
|  -36.7% | -163.497 KiB |  0.2% → 0.1% |   446 KiB → 282 KiB |   3,939 → 4,191 | `__json_value_module_MOD_parse_string` (`./json_value_module.F90:11080`) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_array` (11003) ← `__json_value_module_MOD_parse_object` (10889)                          |
|  -25.0% | -163.125 KiB |  0.3% → 0.2% |   653 KiB → 489 KiB |       160 → 120 | `(anonymous)` ← `(anonymous)` ← `(anonymous)` ← `__json_string_utilities_MOD_string_to_integer` (`./json_string_utilities.F90:116`) ← `__json_value_module_MOD_string_to_int` (`./json_value_module.F90:8081`) ← `__json_value_module_MOD_parse_number` (11220) ← `__json_value_module_MOD_parse_array` (11003) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_array` (11003) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889)                                                                                         |
|  -13.4% |  -97.396 KiB |         0.3% |   728 KiB → 630 KiB |   3,078 → 2,325 | `__json_value_module_MOD_parse_string` (`./json_value_module.F90:11080`) ← `__json_value_module_MOD_parse_value` (10124) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_array` (11003) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_json_parse_file` (9721) ← `__json_file_module_MOD_json_file_load` (`./json_file_module.F90:854`) ← `MAIN__` (`/out/profile.f90:5`) ← `main` (6) ← `(anonymous)` ← `__libc_start_main` ← `_start`                                                                                                                                                                                                                                                        |
|  -49.8% |  -88.031 KiB | 0.1% → <0.1% |  177 KiB → 88.8 KiB |     1,879 → 940 | `(anonymous)` ← `(anonymous)` ← `(anonymous)` ← `(anonymous)` ← `(anonymous)` ← `__json_string_utilities_MOD_string_to_integer` (`./json_string_utilities.F90:116`) ← `__json_value_module_MOD_string_to_int` (`./json_value_module.F90:8081`) ← `__json_value_module_MOD_parse_number` (11220) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_array` (11003) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_json_parse_file` (9721) ← `__json_file_module_MOD_json_file_load` (`./json_file_module.F90:854`) ← `MAIN__` (`/out/profile.f90:5`) ← `main` (6) ← `(anonymous)` ← `__libc_start_main` ← `_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  -32.3% |  -77.052 KiB |         0.1% |   238 KiB → 161 KiB |   2,817 → 1,878 | `__json_string_utilities_MOD_unescape_string` (`./json_string_utilities.F90:483`) ← `__json_value_module_MOD_parse_string` (`./json_value_module.F90:11080`) ← `__json_value_module_MOD_parse_value` (10124) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_array` (11003) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_json_parse_file` (9721) ← `__json_file_module_MOD_json_file_load` (`./json_file_module.F90:854`) ← `MAIN__` (`/out/profile.f90:5`) ← `main` (6) ← `(anonymous)` ← `__libc_start_main` ← `_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  -86.1% |   -44.75 KiB |        <0.1% |   52 KiB → 7.25 KiB |        208 → 29 | `__json_value_module_MOD_parse_number` (`./json_value_module.F90:11220`) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_array` (11003) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_json_parse_file` (9721)                        |
|  -92.1% |   -43.75 KiB |        <0.1% | 47.5 KiB → 3.76 KiB |       525 → 350 | `__json_value_module_MOD_parse_string` (`./json_value_module.F90:11080`) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_array` (11003) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_array` (11003) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_json_parse_file` (9721) ← `__json_file_module_MOD_json_file_load` (`./json_file_module.F90:854`) |
|  -15.6% |  -37.312 KiB |         0.1% |   239 KiB → 202 KiB |           2,882 | `(anonymous)` ← `(anonymous)` ← `(anonymous)` ← `(anonymous)` ← `__json_string_utilities_MOD_string_to_integer` (`./json_string_utilities.F90:116`) ← `__json_value_module_MOD_string_to_int` (`./json_value_module.F90:8081`) ← `__json_value_module_MOD_parse_number` (11220) ← `__json_value_module_MOD_parse_array` (11003) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_array` (11003) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889)                                                                                                                          |
|  -50.0% |  -36.703 KiB |        <0.1% | 73.4 KiB → 36.7 KiB |          18 → 9 | `(anonymous)` ← `(anonymous)` ← `(anonymous)` ← `__json_string_utilities_MOD_string_to_integer` (`./json_string_utilities.F90:116`) ← `__json_value_module_MOD_string_to_int` (`./json_value_module.F90:8081`) ← `__json_value_module_MOD_parse_number` (11220) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_json_parse_file` (9721) ← `__json_file_module_MOD_json_file_load` (`./json_file_module.F90:854`) ← `MAIN__` (`/out/profile.f90:5`) ← `main` (6) ← `(anonymous)` ← `__libc_start_main` ← `_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  -20.7% |  -32.812 KiB |         0.1% |   158 KiB → 125 KiB |   1,688 → 1,338 | `(anonymous)` ← `(anonymous)` ← `(anonymous)` ← `(anonymous)` ← `(anonymous)` ← `__json_string_utilities_MOD_string_to_integer` (`./json_string_utilities.F90:116`) ← `__json_value_module_MOD_string_to_int` (`./json_value_module.F90:8081`) ← `__json_value_module_MOD_parse_number` (11220) ← `__json_value_module_MOD_parse_array` (11003) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_array` (11003) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889)                                                                                                                                                           |

# Retained heap profile diff

Retained 894 KiB over 14,825 objects (61.8 B per object).

| Category | Change | Delta |     % |    Size | Objects |
| -------- | -----: | ----: | ----: | ------: | ------: |
| Ours     |   0.0% |   0 B | 85.5% | 765 KiB |  14,818 |
| Unknown  |   0.0% |   0 B | 14.5% | 130 KiB |       6 |
| Native   |   0.0% |   0 B | <0.1% |    18 B |       1 |

Paths starting with `./` or `../` are relative to `/src/json-fortran/src/`.

## Hottest functions

### Self size

No function differed in bytes retained within the function body, excluding callees.

### Total size

No function differed in bytes retained within the function and its callees.

## Hottest call stacks

No call stack differed in bytes retained in its leaf frame.

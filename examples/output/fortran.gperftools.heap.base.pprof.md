# Allocated heap profile

Allocated 39.7 MiB over 480,489 objects (86.7 B per object).

| Category |     % |     Size | Objects |
| -------- | ----: | -------: | ------: |
| Ours     | 73.1% |   29 MiB | 453,990 |
| Native   | 26.9% | 10.7 MiB |  26,499 |

## Hottest functions

### Self size

Functions ranked by bytes allocated directly in the function body, excluding callees.

|     % |     Size | Objects | Function                                          | Location                                           |
| ----: | -------: | ------: | ------------------------------------------------- | -------------------------------------------------- |
| 36.1% | 14.3 MiB | 134,059 | `__json_value_module_MOD_json_value_create`       | `src/json-fortran/src/json_value_module.F90`       |
| 26.5% | 10.5 MiB |  94,143 | `__json_value_module_MOD_parse_string`            | `src/json-fortran/src/json_value_module.F90`       |
| 25.4% | 10.1 MiB |  13,656 | `0x1c1b3`                                         | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`   |
|  4.4% | 1.76 MiB |  41,345 | `__json_value_module_MOD_parse_value`             | `src/json-fortran/src/json_value_module.F90`       |
|  3.6% | 1.44 MiB | 122,497 | `__json_value_module_MOD_parse_object`            | `src/json-fortran/src/json_value_module.F90`       |
|  1.6% |  662 KiB |   2,649 | `__json_value_module_MOD_parse_number`            | `src/json-fortran/src/json_value_module.F90`       |
|  1.4% |  565 KiB |   5,969 | `0x1c24b`                                         | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`   |
|  0.4% |  148 KiB |  18,928 | `__json_value_module_MOD_to_integer`              | `src/json-fortran/src/json_value_module.F90`       |
|  0.3% |  102 KiB |  26,217 | `__json_value_module_MOD_to_logical`              | `src/json-fortran/src/json_value_module.F90`       |
|  0.2% | 82.4 KiB |     796 | `__json_string_utilities_MOD_unescape_string`     | `src/json-fortran/src/json_string_utilities.F90`   |
|  0.1% |   26 KiB |   8,047 | `__json_string_utilities_MOD_string_to_integer`   | `src/json-fortran/src/json_string_utilities.F90`   |
|  0.1% | 24.8 KiB |   5,013 | `0x9980f`                                         | `usr/lib/aarch64-linux-gnu/libc.so.6`              |
| <0.1% | 5.16 KiB |   5,280 | `__json_value_module_MOD_to_string`               | `src/json-fortran/src/json_value_module.F90`       |
| <0.1% |  2.8 KiB |   1,861 | `0x1c1f3`                                         | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`   |
| <0.1% | 2.03 KiB |      10 | `__json_value_module_MOD_json_initialize`         | `src/json-fortran/src/json_value_module.F90`       |
| <0.1% |     85 B |       5 | `__json_value_module_MOD_json_parse_file`         | `src/json-fortran/src/json_value_module.F90`       |
| <0.1% |     12 B |      12 | `__json_value_module_MOD_json_get_string_by_path` | `src/json-fortran/src/json_get_scalar_by_path.inc` |
| <0.1% |      3 B |       1 | `__json_value_module_MOD_json_prepare_parser`     | `src/json-fortran/src/json_value_module.F90`       |
| <0.1% |      1 B |       1 | `__json_value_module_MOD_pop_char.part.0`         | `src/json-fortran/src/json_value_module.F90`       |

#### Categories

##### Ours

|     % |     Size | Objects | Function                                          | Location                                           |
| ----: | -------: | ------: | ------------------------------------------------- | -------------------------------------------------- |
| 36.1% | 14.3 MiB | 134,059 | `__json_value_module_MOD_json_value_create`       | `src/json-fortran/src/json_value_module.F90`       |
| 26.5% | 10.5 MiB |  94,143 | `__json_value_module_MOD_parse_string`            | `src/json-fortran/src/json_value_module.F90`       |
|  4.4% | 1.76 MiB |  41,345 | `__json_value_module_MOD_parse_value`             | `src/json-fortran/src/json_value_module.F90`       |
|  3.6% | 1.44 MiB | 122,497 | `__json_value_module_MOD_parse_object`            | `src/json-fortran/src/json_value_module.F90`       |
|  1.6% |  662 KiB |   2,649 | `__json_value_module_MOD_parse_number`            | `src/json-fortran/src/json_value_module.F90`       |
|  0.4% |  148 KiB |  18,928 | `__json_value_module_MOD_to_integer`              | `src/json-fortran/src/json_value_module.F90`       |
|  0.3% |  102 KiB |  26,217 | `__json_value_module_MOD_to_logical`              | `src/json-fortran/src/json_value_module.F90`       |
|  0.2% | 82.4 KiB |     796 | `__json_string_utilities_MOD_unescape_string`     | `src/json-fortran/src/json_string_utilities.F90`   |
|  0.1% |   26 KiB |   8,047 | `__json_string_utilities_MOD_string_to_integer`   | `src/json-fortran/src/json_string_utilities.F90`   |
| <0.1% | 5.16 KiB |   5,280 | `__json_value_module_MOD_to_string`               | `src/json-fortran/src/json_value_module.F90`       |
| <0.1% | 2.03 KiB |      10 | `__json_value_module_MOD_json_initialize`         | `src/json-fortran/src/json_value_module.F90`       |
| <0.1% |     85 B |       5 | `__json_value_module_MOD_json_parse_file`         | `src/json-fortran/src/json_value_module.F90`       |
| <0.1% |     12 B |      12 | `__json_value_module_MOD_json_get_string_by_path` | `src/json-fortran/src/json_get_scalar_by_path.inc` |
| <0.1% |      3 B |       1 | `__json_value_module_MOD_json_prepare_parser`     | `src/json-fortran/src/json_value_module.F90`       |
| <0.1% |      1 B |       1 | `__json_value_module_MOD_pop_char.part.0`         | `src/json-fortran/src/json_value_module.F90`       |

##### Native

|     % |     Size | Objects | Function  | Location                                         |
| ----: | -------: | ------: | --------- | ------------------------------------------------ |
| 25.4% | 10.1 MiB |  13,656 | `0x1c1b3` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  1.4% |  565 KiB |   5,969 | `0x1c24b` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  0.1% | 24.8 KiB |   5,013 | `0x9980f` | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
| <0.1% |  2.8 KiB |   1,861 | `0x1c1f3` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

#### Lines

Lines ranked by contribution to each function's self size.

##### `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`)

|      % |     Size | Objects | Location                                          |
| -----: | -------: | ------: | ------------------------------------------------- |
| 100.0% | 14.3 MiB | 134,059 | `src/json-fortran/src/json_value_module.F90:2211` |

##### `__json_value_module_MOD_parse_string` (`src/json-fortran/src/json_value_module.F90`)

|     % |     Size | Objects | Location                                           |
| ----: | -------: | ------: | -------------------------------------------------- |
| 83.2% | 8.76 MiB |  35,879 | `src/json-fortran/src/json_value_module.F90:11073` |
| 14.0% | 1.47 MiB |  57,672 | `src/json-fortran/src/json_value_module.F90:11122` |
|  2.7% |  296 KiB |     592 | `src/json-fortran/src/json_value_module.F90:11098` |

##### `__json_value_module_MOD_parse_value` (`src/json-fortran/src/json_value_module.F90`)

|      % |     Size | Objects | Location                                           |
| -----: | -------: | ------: | -------------------------------------------------- |
| 100.0% | 1.76 MiB |  41,345 | `src/json-fortran/src/json_value_module.F90:10185` |

##### `__json_value_module_MOD_parse_object` (`src/json-fortran/src/json_value_module.F90`)

|      % |     Size | Objects | Location                                           |
| -----: | -------: | ------: | -------------------------------------------------- |
| 100.0% | 1.44 MiB | 122,497 | `src/json-fortran/src/json_value_module.F90:10922` |

##### `__json_value_module_MOD_parse_number` (`src/json-fortran/src/json_value_module.F90`)

|      % |    Size | Objects | Location                                           |
| -----: | ------: | ------: | -------------------------------------------------- |
| 100.0% | 662 KiB |   2,649 | `src/json-fortran/src/json_value_module.F90:11216` |

##### `__json_value_module_MOD_to_integer` (`src/json-fortran/src/json_value_module.F90`)

|      % |    Size | Objects | Location                                           |
| -----: | ------: | ------: | -------------------------------------------------- |
| 100.0% | 148 KiB |  18,928 | `src/json-fortran/src/json_value_module.F90:10703` |

##### `__json_value_module_MOD_to_logical` (`src/json-fortran/src/json_value_module.F90`)

|      % |    Size | Objects | Location                                           |
| -----: | ------: | ------: | -------------------------------------------------- |
| 100.0% | 102 KiB |  26,217 | `src/json-fortran/src/json_value_module.F90:10672` |

##### `__json_string_utilities_MOD_unescape_string` (`src/json-fortran/src/json_string_utilities.F90`)

|      % |     Size | Objects | Location                                             |
| -----: | -------: | ------: | ---------------------------------------------------- |
| 100.0% | 82.4 KiB |     796 | `src/json-fortran/src/json_string_utilities.F90:506` |

##### `__json_string_utilities_MOD_string_to_integer` (`src/json-fortran/src/json_string_utilities.F90`)

|     % |     Size | Objects | Location                                             |
| ----: | -------: | ------: | ---------------------------------------------------- |
| 79.7% | 20.7 KiB |   5,527 | `src/json-fortran/src/json_string_utilities.F90:134` |
| 20.3% | 5.28 KiB |   2,520 | `src/json-fortran/src/json_string_utilities.F90:131` |

##### `__json_value_module_MOD_to_string` (`src/json-fortran/src/json_value_module.F90`)

|      % |     Size | Objects | Location                                           |
| -----: | -------: | ------: | -------------------------------------------------- |
| 100.0% | 5.16 KiB |   5,280 | `src/json-fortran/src/json_value_module.F90:10800` |

##### `__json_value_module_MOD_json_initialize` (`src/json-fortran/src/json_value_module.F90`)

|     % |  Size | Objects | Location                                          |
| ----: | ----: | ------: | ------------------------------------------------- |
| 98.7% | 2 KiB |       8 | `src/json-fortran/src/json_value_module.F90:1048` |
|  1.3% |  26 B |       2 | `src/json-fortran/src/json_value_module.F90:1196` |

##### `__json_value_module_MOD_json_parse_file` (`src/json-fortran/src/json_value_module.F90`)

|      % | Size | Objects | Location                                          |
| -----: | ---: | ------: | ------------------------------------------------- |
| 100.0% | 85 B |       5 | `src/json-fortran/src/json_value_module.F90:9786` |

##### `__json_value_module_MOD_json_get_string_by_path` (`src/json-fortran/src/json_get_scalar_by_path.inc`)

|      % | Size | Objects | Location                                             |
| -----: | ---: | ------: | ---------------------------------------------------- |
| 100.0% | 12 B |      12 | `src/json-fortran/src/json_get_scalar_by_path.inc:6` |

##### `__json_value_module_MOD_json_prepare_parser` (`src/json-fortran/src/json_value_module.F90`)

|      % | Size | Objects | Location                                          |
| -----: | ---: | ------: | ------------------------------------------------- |
| 100.0% |  3 B |       1 | `src/json-fortran/src/json_value_module.F90:9680` |

##### `__json_value_module_MOD_pop_char.part.0` (`src/json-fortran/src/json_value_module.F90`)

|      % | Size | Objects | Location                                           |
| -----: | ---: | ------: | -------------------------------------------------- |
| 100.0% |  1 B |       1 | `src/json-fortran/src/json_value_module.F90:11383` |

#### Callers

Callers ranked by contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`)

|     % |     Size | Objects | Caller                                    | Location                                     |
| ----: | -------: | ------: | ----------------------------------------- | -------------------------------------------- |
| 91.8% | 13.1 MiB | 123,035 | `__json_value_module_MOD_parse_object`    | `src/json-fortran/src/json_value_module.F90` |
|  8.2% | 1.18 MiB |  11,021 | `__json_value_module_MOD_parse_array`     | `src/json-fortran/src/json_value_module.F90` |
| <0.1% |    336 B |       3 | `__json_value_module_MOD_json_parse_file` | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_parse_string` (`src/json-fortran/src/json_value_module.F90`)

|     % |     Size | Objects | Caller                                 | Location                                     |
| ----: | -------: | ------: | -------------------------------------- | -------------------------------------------- |
| 79.2% | 8.33 MiB |  79,310 | `__json_value_module_MOD_parse_object` | `src/json-fortran/src/json_value_module.F90` |
| 20.8% | 2.19 MiB |  14,833 | `__json_value_module_MOD_parse_value`  | `src/json-fortran/src/json_value_module.F90` |

##### `0x1c1b3` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|     % |     Size | Objects | Caller     | Location                                         |
| ----: | -------: | ------: | ---------- | ------------------------------------------------ |
| 78.7% | 7.93 MiB |   1,992 | `0xfa6bf`  | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| 12.4% | 1.25 MiB |      10 | `0x10be83` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  7.2% |  745 KiB |   5,962 | `0x112ecb` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  1.7% |  178 KiB |   5,692 | `0x112ebb` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `__json_value_module_MOD_parse_value` (`src/json-fortran/src/json_value_module.F90`)

|      % |     Size | Objects | Caller                                 | Location                                     |
| -----: | -------: | ------: | -------------------------------------- | -------------------------------------------- |
| 100.0% | 1.76 MiB |  41,345 | `__json_value_module_MOD_parse_object` | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_parse_object` (`src/json-fortran/src/json_value_module.F90`)

|     % |     Size | Objects | Caller                                    | Location                                     |
| ----: | -------: | ------: | ----------------------------------------- | -------------------------------------------- |
| 98.8% | 1.42 MiB | 120,167 | `__json_value_module_MOD_parse_object`    | `src/json-fortran/src/json_value_module.F90` |
|  1.2% | 18.1 KiB |   2,329 | `__json_value_module_MOD_parse_array`     | `src/json-fortran/src/json_value_module.F90` |
| <0.1% |      8 B |       1 | `__json_value_module_MOD_json_parse_file` | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_parse_number` (`src/json-fortran/src/json_value_module.F90`)

|      % |    Size | Objects | Caller                                 | Location                                     |
| -----: | ------: | ------: | -------------------------------------- | -------------------------------------------- |
| 100.0% | 662 KiB |   2,649 | `__json_value_module_MOD_parse_object` | `src/json-fortran/src/json_value_module.F90` |

##### `0x1c24b` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|     % |     Size | Objects | Caller     | Location                                         |
| ----: | -------: | ------: | ---------- | ------------------------------------------------ |
| 98.7% |  558 KiB |   5,950 | `0x10c847` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  1.2% | 6.68 KiB |       9 | `0x10a85b` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  0.1% |    864 B |       9 | `0x10bd7b` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| <0.1% |     16 B |       1 | `0x10b1fb` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `__json_value_module_MOD_to_integer` (`src/json-fortran/src/json_value_module.F90`)

|      % |    Size | Objects | Caller                                 | Location                                     |
| -----: | ------: | ------: | -------------------------------------- | -------------------------------------------- |
| 100.0% | 148 KiB |  18,928 | `__json_value_module_MOD_parse_number` | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_to_logical` (`src/json-fortran/src/json_value_module.F90`)

|      % |    Size | Objects | Caller                                 | Location                                     |
| -----: | ------: | ------: | -------------------------------------- | -------------------------------------------- |
| 100.0% | 102 KiB |  26,217 | `__json_value_module_MOD_parse_object` | `src/json-fortran/src/json_value_module.F90` |

##### `__json_string_utilities_MOD_unescape_string` (`src/json-fortran/src/json_string_utilities.F90`)

|      % |     Size | Objects | Caller                                 | Location                                     |
| -----: | -------: | ------: | -------------------------------------- | -------------------------------------------- |
| 100.0% | 82.4 KiB |     796 | `__json_value_module_MOD_parse_string` | `src/json-fortran/src/json_value_module.F90` |

##### `__json_string_utilities_MOD_string_to_integer` (`src/json-fortran/src/json_string_utilities.F90`)

|      % |   Size | Objects | Caller                                  | Location                                     |
| -----: | -----: | ------: | --------------------------------------- | -------------------------------------------- |
| 100.0% | 26 KiB |   8,047 | `__json_value_module_MOD_string_to_int` | `src/json-fortran/src/json_value_module.F90` |

##### `0x9980f` (`usr/lib/aarch64-linux-gnu/libc.so.6`)

|     % |     Size | Objects | Caller    | Location                                         |
| ----: | -------: | ------: | --------- | ------------------------------------------------ |
| 99.1% | 24.6 KiB |   5,001 | `0x1c42b` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  0.9% |    216 B |      12 | `0x1c3fb` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `__json_value_module_MOD_to_string` (`src/json-fortran/src/json_value_module.F90`)

|      % |     Size | Objects | Caller                                | Location                                     |
| -----: | -------: | ------: | ------------------------------------- | -------------------------------------------- |
| 100.0% | 5.16 KiB |   5,280 | `__json_value_module_MOD_parse_value` | `src/json-fortran/src/json_value_module.F90` |

##### `0x1c1f3` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|      % |    Size | Objects | Caller     | Location                                         |
| -----: | ------: | ------: | ---------- | ------------------------------------------------ |
| 100.0% | 2.8 KiB |   1,861 | `0x118783` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `__json_value_module_MOD_json_initialize` (`src/json-fortran/src/json_value_module.F90`)

|      % |     Size | Objects | Caller                                                | Location                                    |
| -----: | -------: | ------: | ----------------------------------------------------- | ------------------------------------------- |
| 100.0% | 2.03 KiB |      10 | `__json_file_module_MOD_initialize_json_core_in_file` | `src/json-fortran/src/json_file_module.F90` |

##### `__json_value_module_MOD_json_parse_file` (`src/json-fortran/src/json_value_module.F90`)

|      % | Size | Objects | Caller                                  | Location                                    |
| -----: | ---: | ------: | --------------------------------------- | ------------------------------------------- |
| 100.0% | 85 B |       5 | `__json_file_module_MOD_json_file_load` | `src/json-fortran/src/json_file_module.F90` |

##### `__json_value_module_MOD_json_get_string_by_path` (`src/json-fortran/src/json_get_scalar_by_path.inc`)

|      % | Size | Objects | Caller                                        | Location                                    |
| -----: | ---: | ------: | --------------------------------------------- | ------------------------------------------- |
| 100.0% | 12 B |      12 | `__json_file_module_MOD_json_file_get_string` | `src/json-fortran/src/json_file_module.F90` |

##### `__json_value_module_MOD_json_prepare_parser` (`src/json-fortran/src/json_value_module.F90`)

|      % | Size | Objects | Caller                                    | Location                                     |
| -----: | ---: | ------: | ----------------------------------------- | -------------------------------------------- |
| 100.0% |  3 B |       1 | `__json_value_module_MOD_json_parse_file` | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_pop_char.part.0` (`src/json-fortran/src/json_value_module.F90`)

|      % | Size | Objects | Caller                                   | Location                                     |
| -----: | ---: | ------: | ---------------------------------------- | -------------------------------------------- |
| 100.0% |  1 B |       1 | `__json_value_module_MOD_json_parse_end` | `src/json-fortran/src/json_value_module.F90` |

### Total size

Functions ranked by total bytes allocated in the function and all its callees.

|     % |     Size | Objects | Function                                        | Location                                         |
| ----: | -------: | ------: | ----------------------------------------------- | ------------------------------------------------ |
| 94.5% | 37.5 MiB | 477,898 | `__json_value_module_MOD_parse_object`          | `src/json-fortran/src/json_value_module.F90`     |
| 46.6% | 18.5 MiB | 232,052 | `__json_value_module_MOD_parse_array`           | `src/json-fortran/src/json_value_module.F90`     |
| 36.1% | 14.3 MiB | 134,059 | `__json_value_module_MOD_json_value_create`     | `src/json-fortran/src/json_value_module.F90`     |
| 35.9% | 14.3 MiB | 173,325 | `MAIN__`                                        | `out/profile.f90`                                |
| 35.4% |   14 MiB | 186,584 | `__json_value_module_MOD_json_parse_file`       | `src/json-fortran/src/json_value_module.F90`     |
| 34.4% | 13.7 MiB | 177,395 | `__json_file_module_MOD_json_file_load`         | `src/json-fortran/src/json_file_module.F90`      |
| 34.3% | 13.6 MiB | 163,103 | `main`                                          | `out/profile.f90`                                |
| 32.3% | 12.8 MiB | 152,764 | `0x27743`                                       | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
| 28.9% | 11.5 MiB | 138,759 | `0x27817`                                       | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
| 27.3% | 10.8 MiB |  99,717 | `__json_value_module_MOD_parse_string`          | `src/json-fortran/src/json_value_module.F90`     |
| 26.2% | 10.4 MiB | 124,114 | `_start`                                        | `<unknown>`                                      |
| 25.4% | 10.1 MiB |  13,656 | `0x1c1b3`                                       | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| 23.8% | 9.43 MiB |  34,566 | `__json_string_utilities_MOD_string_to_integer` | `src/json-fortran/src/json_string_utilities.F90` |
| 23.4% | 9.29 MiB |  53,556 | `__json_value_module_MOD_parse_number`          | `src/json-fortran/src/json_value_module.F90`     |
| 21.4% |  8.5 MiB |  31,979 | `__json_value_module_MOD_string_to_int`         | `src/json-fortran/src/json_value_module.F90`     |
| 20.0% | 7.96 MiB |   6,993 | `0x109623`                                      | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| 20.0% | 7.93 MiB |   1,992 | `0xfa6bf`                                       | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| 10.6% | 4.22 MiB |  63,922 | `__json_value_module_MOD_parse_value`           | `src/json-fortran/src/json_value_module.F90`     |
|  3.7% | 1.45 MiB |  17,614 | `0x1093fb`                                      | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  3.4% | 1.33 MiB |     340 | `0x4`                                           | `<unknown>`                                      |

#### Categories

##### Ours

|     % |     Size | Objects | Function                                           | Location                                                                       |
| ----: | -------: | ------: | -------------------------------------------------- | ------------------------------------------------------------------------------ |
| 94.5% | 37.5 MiB | 477,898 | `__json_value_module_MOD_parse_object`             | `src/json-fortran/src/json_value_module.F90`                                   |
| 46.6% | 18.5 MiB | 232,052 | `__json_value_module_MOD_parse_array`              | `src/json-fortran/src/json_value_module.F90`                                   |
| 36.1% | 14.3 MiB | 134,059 | `__json_value_module_MOD_json_value_create`        | `src/json-fortran/src/json_value_module.F90`                                   |
| 35.9% | 14.3 MiB | 173,325 | `MAIN__`                                           | `out/profile.f90`                                                              |
| 35.4% |   14 MiB | 186,584 | `__json_value_module_MOD_json_parse_file`          | `src/json-fortran/src/json_value_module.F90`                                   |
| 34.4% | 13.7 MiB | 177,395 | `__json_file_module_MOD_json_file_load`            | `src/json-fortran/src/json_file_module.F90`                                    |
| 34.3% | 13.6 MiB | 163,103 | `main`                                             | `out/profile.f90`                                                              |
| 27.3% | 10.8 MiB |  99,717 | `__json_value_module_MOD_parse_string`             | `src/json-fortran/src/json_value_module.F90`                                   |
| 23.8% | 9.43 MiB |  34,566 | `__json_string_utilities_MOD_string_to_integer`    | `src/json-fortran/src/json_string_utilities.F90`                               |
| 23.4% | 9.29 MiB |  53,556 | `__json_value_module_MOD_parse_number`             | `src/json-fortran/src/json_value_module.F90`                                   |
| 21.4% |  8.5 MiB |  31,979 | `__json_value_module_MOD_string_to_int`            | `src/json-fortran/src/json_value_module.F90`                                   |
| 10.6% | 4.22 MiB |  63,922 | `__json_value_module_MOD_parse_value`              | `src/json-fortran/src/json_value_module.F90`                                   |
|  2.9% | 1.15 MiB |   9,495 | `0x228cf`                                          | `tmp/nix-shell.NcwiQ3/profiler-md-input-generation.fqUYfr/fortran-base/binary` |
|  2.4% |  958 KiB |   2,534 | `__json_value_module_MOD_json_get_string_by_path`  | `src/json-fortran/src/json_get_scalar_by_path.inc`                             |
|  2.4% |  958 KiB |   2,534 | `__json_file_module_MOD_json_file_get_string`      | `src/json-fortran/src/json_file_module.F90`                                    |
|  2.4% |  958 KiB |   2,522 | `__json_value_module_MOD_json_get_by_path_default` | `src/json-fortran/src/json_value_module.F90`                                   |
|  2.4% |  958 KiB |   2,522 | `__json_value_module_MOD_json_get_by_path`         | `src/json-fortran/src/json_value_module.F90`                                   |
|  2.3% |  921 KiB |   7,343 | `0x1f22f`                                          | `[stack]`                                                                      |
|  1.7% |  711 KiB |   6,726 | `0x1f47f`                                          | `[stack]`                                                                      |
|  0.6% |  235 KiB |     939 | `0x1f237`                                          | `tmp/nix-shell.NcwiQ3/profiler-md-input-generation.fqUYfr/fortran-base/binary` |

##### Native

|     % |     Size | Objects | Function             | Location                                         |
| ----: | -------: | ------: | -------------------- | ------------------------------------------------ |
| 32.3% | 12.8 MiB | 152,764 | `0x27743`            | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
| 28.9% | 11.5 MiB | 138,759 | `0x27817`            | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
| 26.2% | 10.4 MiB | 124,114 | `_start`             | `<unknown>`                                      |
| 25.4% | 10.1 MiB |  13,656 | `0x1c1b3`            | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| 20.0% | 7.96 MiB |   6,993 | `0x109623`           | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| 20.0% | 7.93 MiB |   1,992 | `0xfa6bf`            | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  3.7% | 1.45 MiB |  17,614 | `0x1093fb`           | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  3.4% | 1.33 MiB |     340 | `0x4`                | `<unknown>`                                      |
|  3.2% | 1.25 MiB |      31 | `0x10324b`           | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  3.1% | 1.25 MiB |      21 | `0x1029eb`           | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  3.1% | 1.25 MiB |      10 | `0x10be83`           | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  2.3% |  923 KiB |  11,654 | `0x10b28f`           | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  2.2% |  903 KiB |  15,157 | `0xffffffffffffffff` | `<unknown>`                                      |
|  1.8% |  745 KiB |   5,962 | `0x112ecb`           | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  1.4% |  565 KiB |   5,969 | `0x1c24b`            | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  1.4% |  558 KiB |   5,950 | `0x10c847`           | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  1.4% |  558 KiB |   5,950 | `0x10ab63`           | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  1.4% |  558 KiB |   5,950 | `0x10b283`           | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  1.3% |  510 KiB |     149 | `0x5`                | `<unknown>`                                      |
|  1.0% |  415 KiB |     201 | `0xaaaab89e4197`     | `<unknown>`                                      |

#### Callees

Callees ranked by contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `__json_value_module_MOD_parse_object` (`src/json-fortran/src/json_value_module.F90`)

|     % |     Size | Objects | Callee                                      | Location                                     |
| ----: | -------: | ------: | ------------------------------------------- | -------------------------------------------- |
| 99.3% | 37.3 MiB | 474,148 | `__json_value_module_MOD_parse_object`      | `src/json-fortran/src/json_value_module.F90` |
| 48.5% | 18.2 MiB | 225,746 | `__json_value_module_MOD_parse_array`       | `src/json-fortran/src/json_value_module.F90` |
| 35.0% | 13.1 MiB | 123,035 | `__json_value_module_MOD_json_value_create` | `src/json-fortran/src/json_value_module.F90` |
| 22.2% | 8.33 MiB |  80,249 | `__json_value_module_MOD_parse_string`      | `src/json-fortran/src/json_value_module.F90` |
| 18.2% | 6.84 MiB |  47,498 | `__json_value_module_MOD_parse_number`      | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_parse_array` (`src/json-fortran/src/json_value_module.F90`)

|     % |     Size | Objects | Callee                                      | Location                                     |
| ----: | -------: | ------: | ------------------------------------------- | -------------------------------------------- |
| 97.4% |   18 MiB | 227,547 | `__json_value_module_MOD_parse_object`      | `src/json-fortran/src/json_value_module.F90` |
| 13.3% | 2.45 MiB |   6,058 | `__json_value_module_MOD_parse_number`      | `src/json-fortran/src/json_value_module.F90` |
|  6.4% | 1.18 MiB |  11,021 | `__json_value_module_MOD_json_value_create` | `src/json-fortran/src/json_value_module.F90` |
| <0.1% | 5.49 KiB |   2,109 | `_start`                                    | `<unknown>`                                  |
| <0.1% | 5.36 KiB |     686 | `0xffffa2a19d67`                            | `<unknown>`                                  |

##### `MAIN__` (`out/profile.f90`)

|     % |     Size | Objects | Callee                                                | Location                                         |
| ----: | -------: | ------: | ----------------------------------------------------- | ------------------------------------------------ |
| 93.4% | 13.3 MiB | 170,767 | `__json_file_module_MOD_json_file_load`               | `src/json-fortran/src/json_file_module.F90`      |
|  6.6% |  958 KiB |   2,534 | `__json_file_module_MOD_json_file_get_string`         | `src/json-fortran/src/json_file_module.F90`      |
| <0.1% | 5.95 KiB |       9 | `0x1093fb`                                            | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| <0.1% | 2.12 KiB |      11 | `__json_file_module_MOD_initialize_json_core_in_file` | `src/json-fortran/src/json_file_module.F90`      |
| <0.1% |    864 B |       9 | `_start`                                              | `<unknown>`                                      |

##### `__json_value_module_MOD_json_parse_file` (`src/json-fortran/src/json_value_module.F90`)

|     % |     Size | Objects | Callee                                        | Location                                         |
| ----: | -------: | ------: | --------------------------------------------- | ------------------------------------------------ |
| 91.1% | 12.8 MiB | 186,543 | `__json_value_module_MOD_parse_object`        | `src/json-fortran/src/json_value_module.F90`     |
|  8.9% | 1.25 MiB |      31 | `0x10324b`                                    | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  1.5% |  217 KiB |   1,611 | `_start`                                      | `<unknown>`                                      |
| <0.1% |    336 B |       3 | `__json_value_module_MOD_json_value_create`   | `src/json-fortran/src/json_value_module.F90`     |
| <0.1% |      3 B |       1 | `__json_value_module_MOD_json_prepare_parser` | `src/json-fortran/src/json_value_module.F90`     |

##### `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`)

|      % |     Size | Objects | Callee                                    | Location                                     |
| -----: | -------: | ------: | ----------------------------------------- | -------------------------------------------- |
| 100.0% | 13.7 MiB | 177,395 | `__json_value_module_MOD_json_parse_file` | `src/json-fortran/src/json_value_module.F90` |
|   0.7% |  102 KiB |     929 | `_start`                                  | `<unknown>`                                  |

##### `main` (`out/profile.f90`)

|      % |     Size | Objects | Callee   | Location          |
| -----: | -------: | ------: | -------- | ----------------- |
| 100.0% | 13.6 MiB | 163,103 | `MAIN__` | `out/profile.f90` |
|   1.5% |  203 KiB |   1,856 | `_start` | `<unknown>`       |

##### `0x27743` (`usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |     Size | Objects | Callee   | Location          |
| -----: | -------: | ------: | -------- | ----------------- |
| 100.0% | 12.8 MiB | 152,764 | `main`   | `out/profile.f90` |
|  <0.1% | 2.05 KiB |     102 | `_start` | `<unknown>`       |

##### `0x27817` (`usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |     Size | Objects | Callee           | Location                              |
| -----: | -------: | ------: | ---------------- | ------------------------------------- |
| 100.0% | 11.5 MiB | 138,759 | `0x27743`        | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|  10.9% | 1.25 MiB |     926 | `_start`         | `<unknown>`                           |
|  <0.1% |      2 B |       1 | `0xffffa219001f` | `<unknown>`                           |

##### `__json_value_module_MOD_parse_string` (`src/json-fortran/src/json_value_module.F90`)

|    % |     Size | Objects | Callee                                        | Location                                         |
| ---: | -------: | ------: | --------------------------------------------- | ------------------------------------------------ |
| 1.9% |  211 KiB |   2,815 | `_start`                                      | `<unknown>`                                      |
| 0.7% | 82.4 KiB |     796 | `__json_string_utilities_MOD_unescape_string` | `src/json-fortran/src/json_string_utilities.F90` |
| 0.2% | 18.3 KiB |   1,963 | `0xffffffffffffffff`                          | `<unknown>`                                      |

##### `_start` (`<unknown>`)

|      % |     Size | Objects | Callee    | Location                              |
| -----: | -------: | ------: | --------- | ------------------------------------- |
| 100.0% | 10.4 MiB | 124,114 | `0x27817` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|   0.2% | 18.4 KiB |   1,438 | `_start`  | `<unknown>`                           |

##### `__json_string_utilities_MOD_string_to_integer` (`src/json-fortran/src/json_string_utilities.F90`)

|     % |     Size | Objects | Callee     | Location                                         |
| ----: | -------: | ------: | ---------- | ------------------------------------------------ |
| 84.4% | 7.96 MiB |   6,993 | `0x109623` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| 15.3% | 1.45 MiB |  17,604 | `0x1093fb` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| <0.1% | 2.73 KiB |   1,857 | `0x118783` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| <0.1% |    520 B |      65 | `_start`   | `<unknown>`                                      |

##### `__json_value_module_MOD_parse_number` (`src/json-fortran/src/json_value_module.F90`)

|     % |    Size | Objects | Callee                                  | Location                                     |
| ----: | ------: | ------: | --------------------------------------- | -------------------------------------------- |
| 91.5% | 8.5 MiB |  31,979 | `__json_value_module_MOD_string_to_int` | `src/json-fortran/src/json_value_module.F90` |
|  1.6% | 148 KiB |  18,928 | `__json_value_module_MOD_to_integer`    | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_string_to_int` (`src/json-fortran/src/json_value_module.F90`)

|      % |    Size | Objects | Callee                                          | Location                                         |
| -----: | ------: | ------: | ----------------------------------------------- | ------------------------------------------------ |
| 100.0% | 8.5 MiB |  31,979 | `__json_string_utilities_MOD_string_to_integer` | `src/json-fortran/src/json_string_utilities.F90` |

##### `0x109623` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|     % |     Size | Objects | Callee    | Location                                         |
| ----: | -------: | ------: | --------- | ------------------------------------------------ |
| 99.7% | 7.93 MiB |   1,992 | `0xfa6bf` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  0.3% | 24.6 KiB |   5,001 | `0xfa6b3` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `0xfa6bf` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|      % |     Size | Objects | Callee    | Location                                         |
| -----: | -------: | ------: | --------- | ------------------------------------------------ |
| 100.0% | 7.93 MiB |   1,992 | `0x1c1b3` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `__json_value_module_MOD_parse_value` (`src/json-fortran/src/json_value_module.F90`)

|     % |     Size | Objects | Callee                                 | Location                                     |
| ----: | -------: | ------: | -------------------------------------- | -------------------------------------------- |
| 53.9% | 2.27 MiB |  15,629 | `__json_value_module_MOD_parse_string` | `src/json-fortran/src/json_value_module.F90` |
|  2.1% | 92.3 KiB |     844 | `_start`                               | `<unknown>`                                  |
|  2.1% | 90.1 KiB |     824 | `0x1e39f`                              | `[stack]`                                    |
|  0.1% | 5.16 KiB |   5,280 | `__json_value_module_MOD_to_string`    | `src/json-fortran/src/json_value_module.F90` |

##### `0x1093fb` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|     % |     Size | Objects | Callee     | Location                                         |
| ----: | -------: | ------: | ---------- | ------------------------------------------------ |
| 62.1% |  923 KiB |  11,654 | `0x10b28f` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| 37.5% |  558 KiB |   5,950 | `0x10b283` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  0.4% | 6.68 KiB |       9 | `0x10b26f` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| <0.1% |     16 B |       1 | `0x10b263` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `0x4` (`<unknown>`)

|     % |     Size | Objects | Callee           | Location    |
| ----: | -------: | ------: | ---------------- | ----------- |
| 30.1% |  412 KiB |     101 | `0xaaaab89e413f` | `<unknown>` |
| 30.1% |  412 KiB |     101 | `0xaaaab89e4197` | `<unknown>` |
|  2.7% | 36.7 KiB |       9 | `0xffffa218003f` | `<unknown>` |
|  2.4% | 32.6 KiB |       8 | `_start`         | `<unknown>` |
|  0.6% | 8.16 KiB |       2 | `0xaaaab88491c7` | `<unknown>` |

##### `0x10324b` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|      % |     Size | Objects | Callee     | Location                                         |
| -----: | -------: | ------: | ---------- | ------------------------------------------------ |
| 100.0% | 1.25 MiB |      21 | `0x1029eb` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  <0.1% |    180 B |      10 | `0x102ac7` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `0x1029eb` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|     % |     Size | Objects | Callee     | Location                                         |
| ----: | -------: | ------: | ---------- | ------------------------------------------------ |
| 99.9% | 1.25 MiB |      10 | `0x10be83` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  0.1% |    864 B |       9 | `0x10bd7b` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| <0.1% |     36 B |       2 | `0x10c933` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `0x10be83` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|      % |     Size | Objects | Callee    | Location                                         |
| -----: | -------: | ------: | --------- | ------------------------------------------------ |
| 100.0% | 1.25 MiB |      10 | `0x1c1b3` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `0x228cf` (`tmp/nix-shell.NcwiQ3/profiler-md-input-generation.fqUYfr/fortran-base/binary`)

|     % |     Size | Objects | Callee    | Location    |
| ----: | -------: | ------: | --------- | ----------- |
| 58.5% |  690 KiB |   5,101 | `_start`  | `<unknown>` |
| 23.8% |  280 KiB |   2,564 | `0x1f22f` | `[stack]`   |
|  8.3% | 97.8 KiB |     894 | `0x1e337` | `[stack]`   |
|  8.2% | 96.3 KiB |     880 | `0x1f47f` | `[stack]`   |
|  1.2% |   14 KiB |      56 | `0x1e70f` | `[stack]`   |

##### `__json_value_module_MOD_json_get_string_by_path` (`src/json-fortran/src/json_get_scalar_by_path.inc`)

|      % |    Size | Objects | Callee                                     | Location                                     |
| -----: | ------: | ------: | ------------------------------------------ | -------------------------------------------- |
| 100.0% | 958 KiB |   2,522 | `__json_value_module_MOD_json_get_by_path` | `src/json-fortran/src/json_value_module.F90` |

##### `__json_file_module_MOD_json_file_get_string` (`src/json-fortran/src/json_file_module.F90`)

|      % |    Size | Objects | Callee                                            | Location                                           |
| -----: | ------: | ------: | ------------------------------------------------- | -------------------------------------------------- |
| 100.0% | 958 KiB |   2,534 | `__json_value_module_MOD_json_get_string_by_path` | `src/json-fortran/src/json_get_scalar_by_path.inc` |

##### `__json_value_module_MOD_json_get_by_path_default` (`src/json-fortran/src/json_value_module.F90`)

|      % |    Size | Objects | Callee                                          | Location                                         |
| -----: | ------: | ------: | ----------------------------------------------- | ------------------------------------------------ |
| 100.0% | 958 KiB |   2,522 | `__json_string_utilities_MOD_string_to_integer` | `src/json-fortran/src/json_string_utilities.F90` |

##### `__json_value_module_MOD_json_get_by_path` (`src/json-fortran/src/json_value_module.F90`)

|      % |    Size | Objects | Callee                                             | Location                                     |
| -----: | ------: | ------: | -------------------------------------------------- | -------------------------------------------- |
| 100.0% | 958 KiB |   2,522 | `__json_value_module_MOD_json_get_by_path_default` | `src/json-fortran/src/json_value_module.F90` |

##### `0x10b28f` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|     % |    Size | Objects | Callee     | Location                                         |
| ----: | ------: | ------: | ---------- | ------------------------------------------------ |
| 80.7% | 745 KiB |   5,962 | `0x112ecb` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| 19.3% | 178 KiB |   5,692 | `0x112ebb` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `0x1f22f` (`[stack]`)

|     % |     Size | Objects | Callee    | Location                                                                       |
| ----: | -------: | ------: | --------- | ------------------------------------------------------------------------------ |
| 34.0% |  313 KiB |   2,866 | `0x1f47f` | `[stack]`                                                                      |
| 31.0% |  286 KiB |   2,611 | `_start`  | `<unknown>`                                                                    |
| 25.5% |  235 KiB |     939 | `0x228cf` | `tmp/nix-shell.NcwiQ3/profiler-md-input-generation.fqUYfr/fortran-base/binary` |
|  9.4% | 86.9 KiB |     927 | `0x0`     | `<unknown>`                                                                    |

##### `0xffffffffffffffff` (`<unknown>`)

|     % |     Size | Objects | Callee    | Location                                                                       |
| ----: | -------: | ------: | --------- | ------------------------------------------------------------------------------ |
| 56.2% |  507 KiB |   7,997 | `_start`  | `<unknown>`                                                                    |
| 39.4% |  356 KiB |   3,251 | `0x228cf` | `tmp/nix-shell.NcwiQ3/profiler-md-input-generation.fqUYfr/fortran-base/binary` |
|  2.2% |   20 KiB |   1,963 | `0xc3d2`  | `<unknown>`                                                                    |
|  1.3% | 12.2 KiB |     938 | `0x1dd47` | `[stack]`                                                                      |
|  0.8% | 7.33 KiB |     938 | `0xff`    | `<unknown>`                                                                    |

##### `0x112ecb` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|      % |    Size | Objects | Callee    | Location                                         |
| -----: | ------: | ------: | --------- | ------------------------------------------------ |
| 100.0% | 745 KiB |   5,962 | `0x1c1b3` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `0x1f47f` (`[stack]`)

|     % |     Size | Objects | Callee                                    | Location                                     |
| ----: | -------: | ------: | ----------------------------------------- | -------------------------------------------- |
| 57.6% |  410 KiB |   3,746 | `_start`                                  | `<unknown>`                                  |
| 28.9% |  205 KiB |   1,878 | `__json_value_module_MOD_parse_object`    | `src/json-fortran/src/json_value_module.F90` |
| 13.0% | 92.3 KiB |     844 | `__json_value_module_MOD_parse_value`     | `src/json-fortran/src/json_value_module.F90` |
|  0.3% | 2.08 KiB |      19 | `__json_value_module_MOD_pop_char.part.0` | `src/json-fortran/src/json_value_module.F90` |
|  0.3% | 1.87 KiB |     239 | `0xaaaab87a67ff`                          | `<unknown>`                                  |

##### `0x10c847` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|      % |    Size | Objects | Callee    | Location                                         |
| -----: | ------: | ------: | --------- | ------------------------------------------------ |
| 100.0% | 558 KiB |   5,950 | `0x1c24b` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `0x10ab63` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|      % |    Size | Objects | Callee     | Location                                         |
| -----: | ------: | ------: | ---------- | ------------------------------------------------ |
| 100.0% | 558 KiB |   5,950 | `0x10c847` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `0x10b283` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|      % |    Size | Objects | Callee     | Location                                         |
| -----: | ------: | ------: | ---------- | ------------------------------------------------ |
| 100.0% | 558 KiB |   5,950 | `0x10ab63` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `0x5` (`<unknown>`)

|    % |     Size | Objects | Callee           | Location    |
| ---: | -------: | ------: | ---------------- | ----------- |
| 4.8% | 24.6 KiB |      26 | `_start`         | `<unknown>` |
| 1.6% | 8.16 KiB |       2 | `0xaaaab884885f` | `<unknown>` |
| 1.6% | 8.16 KiB |       2 | `0xaaaab89894bf` | `<unknown>` |
| 1.6% | 8.16 KiB |       2 | `0xaaaab88a5dbf` | `<unknown>` |
| 1.6% | 8.16 KiB |       2 | `0xaaaab87a1e17` | `<unknown>` |

##### `0xaaaab89e4197` (`<unknown>`)

|      % |    Size | Objects | Callee   | Location    |
| -----: | ------: | ------: | -------- | ----------- |
| 100.0% | 415 KiB |     201 | `_start` | `<unknown>` |

##### `0x1f237` (`tmp/nix-shell.NcwiQ3/profiler-md-input-generation.fqUYfr/fortran-base/binary`)

|      % |    Size | Objects | Callee   | Location    |
| -----: | ------: | ------: | -------- | ----------- |
| 100.0% | 235 KiB |     939 | `_start` | `<unknown>` |

## Hottest call stacks

Call stacks ranked by bytes allocated in their leaf frame.

|     % |     Size | Objects | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ----: | -------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 16.4% |  6.5 MiB |  60,816 | `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`                      |
| 15.3% |  6.1 MiB |  51,946 | `__json_value_module_MOD_parse_string` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`                           |
|  7.1% | 2.81 MiB |     705 | `0x1c1b3` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`) ← `0xfa6bf` ← `0x109623` ← `__json_string_utilities_MOD_string_to_integer` (`src/json-fortran/src/json_string_utilities.F90`) ← `__json_value_module_MOD_string_to_int` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_number` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` |
|  3.5% | 1.39 MiB |     350 | `0x1c1b3` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`) ← `0xfa6bf` ← `0x109623` ← `__json_string_utilities_MOD_string_to_integer` (`src/json-fortran/src/json_string_utilities.F90`) ← `__json_value_module_MOD_string_to_int` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_number` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`   |
|  3.1% | 1.25 MiB |      10 | `0x1c1b3` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`) ← `0x10be83` ← `0x1029eb` ← `0x10324b` ← `__json_value_module_MOD_json_parse_file` (`src/json-fortran/src/json_value_module.F90`) ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`) ← `main` ← `0x27743` (`usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `0x27817` (`usr/lib/aarch64-linux-gnu/libc.so.6`) ← `_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  2.2% |  891 KiB |  59,189 | `__json_value_module_MOD_parse_object` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`                           |
|  2.1% |  853 KiB |   5,340 | `__json_value_module_MOD_parse_string` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_value` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`                            |
|  1.9% |  791 KiB |   1,966 | `__json_value_module_MOD_parse_string` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_value` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`) ← `main` ← `0x27743` (`usr/lib/aarch64-linux-gnu/libc.so.6`)          |
|  1.9% |  783 KiB |     192 | `0x1c1b3` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`) ← `0xfa6bf` ← `0x109623` ← `__json_string_utilities_MOD_string_to_integer` (`src/json-fortran/src/json_string_utilities.F90`) ← `__json_value_module_MOD_string_to_int` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_number` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`  |
|  1.9% |  783 KiB |     192 | `0x1c1b3` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`) ← `0xfa6bf` ← `0x109623` ← `__json_string_utilities_MOD_string_to_integer` (`src/json-fortran/src/json_string_utilities.F90`) ← `__json_value_module_MOD_string_to_int` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_number` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`   |
|  1.8% |  743 KiB |  22,123 | `__json_value_module_MOD_parse_value` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`                            |
|  1.2% |  497 KiB |   4,544 | `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`) ← `main` ← `0x27743` (`usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817`                                 |
|  1.2% |  486 KiB |   4,441 | `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`) ← `main` ← `0x27743` (`usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start`                                                               |
|  1.0% |  412 KiB |     101 | `0x1c1b3` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`) ← `0xfa6bf` ← `0x109623` ← `__json_string_utilities_MOD_string_to_integer` (`src/json-fortran/src/json_string_utilities.F90`) ← `__json_value_module_MOD_json_get_by_path_default` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_json_get_by_path` ← `__json_value_module_MOD_json_get_string_by_path` (`src/json-fortran/src/json_get_scalar_by_path.inc`) ← `__json_file_module_MOD_json_file_get_string` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`) ← `main` ← `0x27743` (`usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `0xaaaab89e413f` ← `0x4`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  1.0% |  412 KiB |     101 | `0x1c1b3` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`) ← `0xfa6bf` ← `0x109623` ← `__json_string_utilities_MOD_string_to_integer` (`src/json-fortran/src/json_string_utilities.F90`) ← `__json_value_module_MOD_json_get_by_path_default` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_json_get_by_path` ← `__json_value_module_MOD_json_get_string_by_path` (`src/json-fortran/src/json_get_scalar_by_path.inc`) ← `__json_file_module_MOD_json_file_get_string` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`) ← `main` ← `0x27743` (`usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `0xaaaab89e4197` ← `0x4`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|  1.0% |  411 KiB |   3,284 | `0x1c1b3` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`) ← `0x112ecb` ← `0x10b28f` ← `0x1093fb` ← `__json_string_utilities_MOD_string_to_integer` (`src/json-fortran/src/json_string_utilities.F90`) ← `__json_value_module_MOD_string_to_int` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_number` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`                            |
|  1.0% |  390 KiB |   3,566 | `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`                       |
|  0.9% |  383 KiB |   3,503 | `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`) ← `main` ← `0x27743` (`usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `0xffffffffffffffff`                                                                                 |
|  0.9% |  374 KiB |   3,416 | `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`) ← `main` ← `0x27743` (`usr/lib/aarch64-linux-gnu/libc.so.6`)    |
|  0.9% |  356 KiB |   3,251 | `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`) ← `main` ← `0x27743` (`usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `0x228cf` (`tmp/nix-shell.NcwiQ3/profiler-md-input-generation.fqUYfr/fortran-base/binary`) ← `0xffffffffffffffff`                             |

# Retained heap profile

Retained 894 KiB over 14,825 objects (61.8 B per object).

| Category |     % |    Size | Objects |
| -------- | ----: | ------: | ------: |
| Ours     | 85.5% | 765 KiB |  14,818 |
| Native   | 14.5% | 130 KiB |       7 |

## Hottest functions

### Self size

Functions ranked by bytes retained directly in the function body, excluding callees.

|     % |     Size | Objects | Function                                          | Location                                           |
| ----: | -------: | ------: | ------------------------------------------------- | -------------------------------------------------- |
| 68.3% |  611 KiB |   5,584 | `__json_value_module_MOD_json_value_create`       | `src/json-fortran/src/json_value_module.F90`       |
| 14.3% |  128 KiB |       1 | `0x1c1b3`                                         | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`   |
|  8.7% | 77.5 KiB |   1,865 | `__json_value_module_MOD_parse_value`             | `src/json-fortran/src/json_value_module.F90`       |
|  7.2% | 64.8 KiB |   5,342 | `__json_value_module_MOD_parse_object`            | `src/json-fortran/src/json_value_module.F90`       |
|  0.8% |  6.8 KiB |     871 | `__json_value_module_MOD_to_integer`              | `src/json-fortran/src/json_value_module.F90`       |
|  0.5% | 4.29 KiB |   1,098 | `__json_value_module_MOD_to_logical`              | `src/json-fortran/src/json_value_module.F90`       |
|  0.2% | 1.59 KiB |       4 | `0x1c24b`                                         | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`   |
| <0.1% |    269 B |       2 | `__json_value_module_MOD_json_initialize`         | `src/json-fortran/src/json_value_module.F90`       |
| <0.1% |    256 B |       1 | `__json_value_module_MOD_parse_string`            | `src/json-fortran/src/json_value_module.F90`       |
| <0.1% |     52 B |      52 | `__json_value_module_MOD_to_string`               | `src/json-fortran/src/json_value_module.F90`       |
| <0.1% |     18 B |       1 | `0x9980f`                                         | `usr/lib/aarch64-linux-gnu/libc.so.6`              |
| <0.1% |     17 B |       1 | `__json_value_module_MOD_json_parse_file`         | `src/json-fortran/src/json_value_module.F90`       |
| <0.1% |     17 B |       1 | `0x1c1f3`                                         | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`   |
| <0.1% |      3 B |       1 | `__json_value_module_MOD_json_prepare_parser`     | `src/json-fortran/src/json_value_module.F90`       |
| <0.1% |      1 B |       1 | `__json_value_module_MOD_json_get_string_by_path` | `src/json-fortran/src/json_get_scalar_by_path.inc` |

#### Categories

##### Ours

|     % |     Size | Objects | Function                                          | Location                                           |
| ----: | -------: | ------: | ------------------------------------------------- | -------------------------------------------------- |
| 68.3% |  611 KiB |   5,584 | `__json_value_module_MOD_json_value_create`       | `src/json-fortran/src/json_value_module.F90`       |
|  8.7% | 77.5 KiB |   1,865 | `__json_value_module_MOD_parse_value`             | `src/json-fortran/src/json_value_module.F90`       |
|  7.2% | 64.8 KiB |   5,342 | `__json_value_module_MOD_parse_object`            | `src/json-fortran/src/json_value_module.F90`       |
|  0.8% |  6.8 KiB |     871 | `__json_value_module_MOD_to_integer`              | `src/json-fortran/src/json_value_module.F90`       |
|  0.5% | 4.29 KiB |   1,098 | `__json_value_module_MOD_to_logical`              | `src/json-fortran/src/json_value_module.F90`       |
| <0.1% |    269 B |       2 | `__json_value_module_MOD_json_initialize`         | `src/json-fortran/src/json_value_module.F90`       |
| <0.1% |    256 B |       1 | `__json_value_module_MOD_parse_string`            | `src/json-fortran/src/json_value_module.F90`       |
| <0.1% |     52 B |      52 | `__json_value_module_MOD_to_string`               | `src/json-fortran/src/json_value_module.F90`       |
| <0.1% |     17 B |       1 | `__json_value_module_MOD_json_parse_file`         | `src/json-fortran/src/json_value_module.F90`       |
| <0.1% |      3 B |       1 | `__json_value_module_MOD_json_prepare_parser`     | `src/json-fortran/src/json_value_module.F90`       |
| <0.1% |      1 B |       1 | `__json_value_module_MOD_json_get_string_by_path` | `src/json-fortran/src/json_get_scalar_by_path.inc` |

##### Native

|     % |     Size | Objects | Function  | Location                                         |
| ----: | -------: | ------: | --------- | ------------------------------------------------ |
| 14.3% |  128 KiB |       1 | `0x1c1b3` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  0.2% | 1.59 KiB |       4 | `0x1c24b` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| <0.1% |     18 B |       1 | `0x9980f` | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
| <0.1% |     17 B |       1 | `0x1c1f3` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

#### Lines

Lines ranked by contribution to each function's self size.

##### `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`)

|      % |    Size | Objects | Location                                          |
| -----: | ------: | ------: | ------------------------------------------------- |
| 100.0% | 611 KiB |   5,584 | `src/json-fortran/src/json_value_module.F90:2211` |

##### `__json_value_module_MOD_parse_value` (`src/json-fortran/src/json_value_module.F90`)

|      % |     Size | Objects | Location                                           |
| -----: | -------: | ------: | -------------------------------------------------- |
| 100.0% | 77.5 KiB |   1,865 | `src/json-fortran/src/json_value_module.F90:10185` |

##### `__json_value_module_MOD_parse_object` (`src/json-fortran/src/json_value_module.F90`)

|      % |     Size | Objects | Location                                           |
| -----: | -------: | ------: | -------------------------------------------------- |
| 100.0% | 64.8 KiB |   5,342 | `src/json-fortran/src/json_value_module.F90:10922` |

##### `__json_value_module_MOD_to_integer` (`src/json-fortran/src/json_value_module.F90`)

|      % |    Size | Objects | Location                                           |
| -----: | ------: | ------: | -------------------------------------------------- |
| 100.0% | 6.8 KiB |     871 | `src/json-fortran/src/json_value_module.F90:10703` |

##### `__json_value_module_MOD_to_logical` (`src/json-fortran/src/json_value_module.F90`)

|      % |     Size | Objects | Location                                           |
| -----: | -------: | ------: | -------------------------------------------------- |
| 100.0% | 4.29 KiB |   1,098 | `src/json-fortran/src/json_value_module.F90:10672` |

##### `__json_value_module_MOD_json_initialize` (`src/json-fortran/src/json_value_module.F90`)

|     % |  Size | Objects | Location                                          |
| ----: | ----: | ------: | ------------------------------------------------- |
| 95.2% | 256 B |       1 | `src/json-fortran/src/json_value_module.F90:1048` |
|  4.8% |  13 B |       1 | `src/json-fortran/src/json_value_module.F90:1196` |

##### `__json_value_module_MOD_parse_string` (`src/json-fortran/src/json_value_module.F90`)

|      % |  Size | Objects | Location                                           |
| -----: | ----: | ------: | -------------------------------------------------- |
| 100.0% | 256 B |       1 | `src/json-fortran/src/json_value_module.F90:11073` |

##### `__json_value_module_MOD_to_string` (`src/json-fortran/src/json_value_module.F90`)

|      % | Size | Objects | Location                                           |
| -----: | ---: | ------: | -------------------------------------------------- |
| 100.0% | 52 B |      52 | `src/json-fortran/src/json_value_module.F90:10800` |

##### `__json_value_module_MOD_json_parse_file` (`src/json-fortran/src/json_value_module.F90`)

|      % | Size | Objects | Location                                          |
| -----: | ---: | ------: | ------------------------------------------------- |
| 100.0% | 17 B |       1 | `src/json-fortran/src/json_value_module.F90:9786` |

##### `__json_value_module_MOD_json_prepare_parser` (`src/json-fortran/src/json_value_module.F90`)

|      % | Size | Objects | Location                                          |
| -----: | ---: | ------: | ------------------------------------------------- |
| 100.0% |  3 B |       1 | `src/json-fortran/src/json_value_module.F90:9680` |

##### `__json_value_module_MOD_json_get_string_by_path` (`src/json-fortran/src/json_get_scalar_by_path.inc`)

|      % | Size | Objects | Location                                             |
| -----: | ---: | ------: | ---------------------------------------------------- |
| 100.0% |  1 B |       1 | `src/json-fortran/src/json_get_scalar_by_path.inc:6` |

#### Callers

Callers ranked by contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`)

|     % |     Size | Objects | Caller                                    | Location                                     |
| ----: | -------: | ------: | ----------------------------------------- | -------------------------------------------- |
| 95.7% |  584 KiB |   5,343 | `__json_value_module_MOD_parse_object`    | `src/json-fortran/src/json_value_module.F90` |
|  4.3% | 26.3 KiB |     240 | `__json_value_module_MOD_parse_array`     | `src/json-fortran/src/json_value_module.F90` |
| <0.1% |    112 B |       1 | `__json_value_module_MOD_json_parse_file` | `src/json-fortran/src/json_value_module.F90` |

##### `0x1c1b3` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|      % |    Size | Objects | Caller     | Location                                         |
| -----: | ------: | ------: | ---------- | ------------------------------------------------ |
| 100.0% | 128 KiB |       1 | `0x10be83` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `__json_value_module_MOD_parse_value` (`src/json-fortran/src/json_value_module.F90`)

|      % |     Size | Objects | Caller                                 | Location                                     |
| -----: | -------: | ------: | -------------------------------------- | -------------------------------------------- |
| 100.0% | 77.5 KiB |   1,865 | `__json_value_module_MOD_parse_object` | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_parse_object` (`src/json-fortran/src/json_value_module.F90`)

|     % |   Size | Objects | Caller                                    | Location                                     |
| ----: | -----: | ------: | ----------------------------------------- | -------------------------------------------- |
| 98.7% | 64 KiB |   5,235 | `__json_value_module_MOD_parse_object`    | `src/json-fortran/src/json_value_module.F90` |
|  1.2% |  824 B |     106 | `__json_value_module_MOD_parse_array`     | `src/json-fortran/src/json_value_module.F90` |
| <0.1% |    8 B |       1 | `__json_value_module_MOD_json_parse_file` | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_to_integer` (`src/json-fortran/src/json_value_module.F90`)

|      % |    Size | Objects | Caller                                 | Location                                     |
| -----: | ------: | ------: | -------------------------------------- | -------------------------------------------- |
| 100.0% | 6.8 KiB |     871 | `__json_value_module_MOD_parse_number` | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_to_logical` (`src/json-fortran/src/json_value_module.F90`)

|      % |     Size | Objects | Caller                                 | Location                                     |
| -----: | -------: | ------: | -------------------------------------- | -------------------------------------------- |
| 100.0% | 4.29 KiB |   1,098 | `__json_value_module_MOD_parse_object` | `src/json-fortran/src/json_value_module.F90` |

##### `0x1c24b` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|     % |     Size | Objects | Caller     | Location                                         |
| ----: | -------: | ------: | ---------- | ------------------------------------------------ |
| 93.1% | 1.48 KiB |       2 | `0x10a85b` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  5.9% |     96 B |       1 | `0x10bd7b` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  1.0% |     16 B |       1 | `0x10b1fb` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `__json_value_module_MOD_json_initialize` (`src/json-fortran/src/json_value_module.F90`)

|      % |  Size | Objects | Caller                                                | Location                                    |
| -----: | ----: | ------: | ----------------------------------------------------- | ------------------------------------------- |
| 100.0% | 269 B |       2 | `__json_file_module_MOD_initialize_json_core_in_file` | `src/json-fortran/src/json_file_module.F90` |

##### `__json_value_module_MOD_parse_string` (`src/json-fortran/src/json_value_module.F90`)

|      % |  Size | Objects | Caller                                 | Location                                     |
| -----: | ----: | ------: | -------------------------------------- | -------------------------------------------- |
| 100.0% | 256 B |       1 | `__json_value_module_MOD_parse_object` | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_to_string` (`src/json-fortran/src/json_value_module.F90`)

|      % | Size | Objects | Caller                                | Location                                     |
| -----: | ---: | ------: | ------------------------------------- | -------------------------------------------- |
| 100.0% | 52 B |      52 | `__json_value_module_MOD_parse_value` | `src/json-fortran/src/json_value_module.F90` |

##### `0x9980f` (`usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % | Size | Objects | Caller    | Location                                         |
| -----: | ---: | ------: | --------- | ------------------------------------------------ |
| 100.0% | 18 B |       1 | `0x1c3fb` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `__json_value_module_MOD_json_parse_file` (`src/json-fortran/src/json_value_module.F90`)

|      % | Size | Objects | Caller                                  | Location                                    |
| -----: | ---: | ------: | --------------------------------------- | ------------------------------------------- |
| 100.0% | 17 B |       1 | `__json_file_module_MOD_json_file_load` | `src/json-fortran/src/json_file_module.F90` |

##### `0x1c1f3` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|      % | Size | Objects | Caller     | Location                                         |
| -----: | ---: | ------: | ---------- | ------------------------------------------------ |
| 100.0% | 17 B |       1 | `0x118783` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `__json_value_module_MOD_json_prepare_parser` (`src/json-fortran/src/json_value_module.F90`)

|      % | Size | Objects | Caller                                    | Location                                     |
| -----: | ---: | ------: | ----------------------------------------- | -------------------------------------------- |
| 100.0% |  3 B |       1 | `__json_value_module_MOD_json_parse_file` | `src/json-fortran/src/json_value_module.F90` |

##### `__json_value_module_MOD_json_get_string_by_path` (`src/json-fortran/src/json_get_scalar_by_path.inc`)

|      % | Size | Objects | Caller                                        | Location                                    |
| -----: | ---: | ------: | --------------------------------------------- | ------------------------------------------- |
| 100.0% |  1 B |       1 | `__json_file_module_MOD_json_file_get_string` | `src/json-fortran/src/json_file_module.F90` |

### Total size

Functions ranked by total bytes retained in the function and all its callees.

|     % |     Size | Objects | Function                                    | Location                                                                       |
| ----: | -------: | ------: | ------------------------------------------- | ------------------------------------------------------------------------------ |
| 85.6% |  766 KiB |  14,814 | `__json_value_module_MOD_parse_object`      | `src/json-fortran/src/json_value_module.F90`                                   |
| 68.3% |  611 KiB |   5,584 | `__json_value_module_MOD_json_value_create` | `src/json-fortran/src/json_value_module.F90`                                   |
| 51.6% |  462 KiB |   6,153 | `__json_value_module_MOD_json_parse_file`   | `src/json-fortran/src/json_value_module.F90`                                   |
| 50.0% |  447 KiB |   5,853 | `__json_file_module_MOD_json_file_load`     | `src/json-fortran/src/json_file_module.F90`                                    |
| 48.5% |  433 KiB |   5,580 | `MAIN__`                                    | `out/profile.f90`                                                              |
| 46.6% |  417 KiB |   5,258 | `main`                                      | `out/profile.f90`                                                              |
| 45.6% |  408 KiB |   7,612 | `__json_value_module_MOD_parse_array`       | `src/json-fortran/src/json_value_module.F90`                                   |
| 45.0% |  402 KiB |   4,979 | `0x27743`                                   | `usr/lib/aarch64-linux-gnu/libc.so.6`                                          |
| 42.8% |  382 KiB |   4,623 | `0x27817`                                   | `usr/lib/aarch64-linux-gnu/libc.so.6`                                          |
| 39.1% |  350 KiB |   4,220 | `_start`                                    | `<unknown>`                                                                    |
| 14.3% |  128 KiB |       3 | `0x10324b`                                  | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`                               |
| 14.3% |  128 KiB |       2 | `0x1029eb`                                  | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`                               |
| 14.3% |  128 KiB |       1 | `0x1c1b3`                                   | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`                               |
| 14.3% |  128 KiB |       1 | `0x10be83`                                  | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`                               |
|  9.5% | 84.8 KiB |   1,983 | `__json_value_module_MOD_parse_value`       | `src/json-fortran/src/json_value_module.F90`                                   |
|  4.3% | 38.8 KiB |     355 | `0x228cf`                                   | `tmp/nix-shell.NcwiQ3/profiler-md-input-generation.fqUYfr/fortran-base/binary` |
|  4.3% |   38 KiB |     584 | `0xffffffffffffffff`                        | `<unknown>`                                                                    |
|  3.3% | 29.6 KiB |     307 | `0x1f47f`                                   | `[stack]`                                                                      |
|  2.8% | 25.2 KiB |     230 | `0x1f22f`                                   | `[stack]`                                                                      |
|  1.5% | 13.6 KiB |      99 | `0x1`                                       | `<unknown>`                                                                    |

#### Categories

##### Ours

|     % |     Size | Objects | Function                                    | Location                                                                       |
| ----: | -------: | ------: | ------------------------------------------- | ------------------------------------------------------------------------------ |
| 85.6% |  766 KiB |  14,814 | `__json_value_module_MOD_parse_object`      | `src/json-fortran/src/json_value_module.F90`                                   |
| 68.3% |  611 KiB |   5,584 | `__json_value_module_MOD_json_value_create` | `src/json-fortran/src/json_value_module.F90`                                   |
| 51.6% |  462 KiB |   6,153 | `__json_value_module_MOD_json_parse_file`   | `src/json-fortran/src/json_value_module.F90`                                   |
| 50.0% |  447 KiB |   5,853 | `__json_file_module_MOD_json_file_load`     | `src/json-fortran/src/json_file_module.F90`                                    |
| 48.5% |  433 KiB |   5,580 | `MAIN__`                                    | `out/profile.f90`                                                              |
| 46.6% |  417 KiB |   5,258 | `main`                                      | `out/profile.f90`                                                              |
| 45.6% |  408 KiB |   7,612 | `__json_value_module_MOD_parse_array`       | `src/json-fortran/src/json_value_module.F90`                                   |
|  9.5% | 84.8 KiB |   1,983 | `__json_value_module_MOD_parse_value`       | `src/json-fortran/src/json_value_module.F90`                                   |
|  4.3% | 38.8 KiB |     355 | `0x228cf`                                   | `tmp/nix-shell.NcwiQ3/profiler-md-input-generation.fqUYfr/fortran-base/binary` |
|  3.3% | 29.6 KiB |     307 | `0x1f47f`                                   | `[stack]`                                                                      |
|  2.8% | 25.2 KiB |     230 | `0x1f22f`                                   | `[stack]`                                                                      |
|  1.1% | 9.78 KiB |     200 | `__json_value_module_MOD_parse_string`      | `src/json-fortran/src/json_value_module.F90`                                   |
|  1.0% | 8.53 KiB |      78 | `0x1e9ef`                                   | `[stack]`                                                                      |
|  1.0% | 8.53 KiB |      78 | `0x1dfbf`                                   | `[stack]`                                                                      |
|  1.0% | 8.53 KiB |      78 | `0x1e0bf`                                   | `[stack]`                                                                      |
|  0.8% | 7.55 KiB |     872 | `__json_value_module_MOD_parse_number`      | `src/json-fortran/src/json_value_module.F90`                                   |
|  0.8% |  6.8 KiB |     871 | `__json_value_module_MOD_to_integer`        | `src/json-fortran/src/json_value_module.F90`                                   |
|  0.5% | 4.29 KiB |   1,098 | `__json_value_module_MOD_to_logical`        | `src/json-fortran/src/json_value_module.F90`                                   |
|  0.5% | 4.27 KiB |      39 | `0x1e337`                                   | `[stack]`                                                                      |
|  0.5% | 4.05 KiB |      37 | `0x1e7cf`                                   | `[stack]`                                                                      |

##### Native

|     % |     Size | Objects | Function             | Location                                          |
| ----: | -------: | ------: | -------------------- | ------------------------------------------------- |
| 45.0% |  402 KiB |   4,979 | `0x27743`            | `usr/lib/aarch64-linux-gnu/libc.so.6`             |
| 42.8% |  382 KiB |   4,623 | `0x27817`            | `usr/lib/aarch64-linux-gnu/libc.so.6`             |
| 39.1% |  350 KiB |   4,220 | `_start`             | `<unknown>`                                       |
| 14.3% |  128 KiB |       3 | `0x10324b`           | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`  |
| 14.3% |  128 KiB |       2 | `0x1029eb`           | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`  |
| 14.3% |  128 KiB |       1 | `0x1c1b3`            | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`  |
| 14.3% |  128 KiB |       1 | `0x10be83`           | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`  |
|  4.3% |   38 KiB |     584 | `0xffffffffffffffff` | `<unknown>`                                       |
|  1.5% | 13.6 KiB |      99 | `0x1`                | `<unknown>`                                       |
|  1.1% | 10.3 KiB |      72 | `0x2b167`            | `usr/lib/aarch64-linux-gnu/libtcmalloc.so.4.5.10` |
|  0.9% | 8.31 KiB |      76 | `0xffffa218003f`     | `<unknown>`                                       |
|  0.9% | 7.77 KiB |      71 | `0x397ff`            | `usr/lib/aarch64-linux-gnu/libtcmalloc.so.4.5.10` |
|  0.6% | 5.63 KiB |     307 | `0xaaaab87a67ff`     | `<unknown>`                                       |
|  0.5% | 4.27 KiB |      39 | `0x2f9e7`            | `usr/lib/aarch64-linux-gnu/libtcmalloc.so.4.5.10` |
|  0.5% | 4.27 KiB |      39 | `0x7c`               | `<unknown>`                                       |
|  0.4% | 3.94 KiB |      36 | `0x17`               | `<unknown>`                                       |
|  0.4% | 3.72 KiB |      34 | `0x18`               | `<unknown>`                                       |
|  0.4% | 3.19 KiB |     136 | `0xffffa2a18fff`     | `<unknown>`                                       |
|  0.3% | 3.09 KiB |     148 | `0xffffa2a19d67`     | `<unknown>`                                       |
|  0.3% | 2.35 KiB |     156 | `0x3131f`            | `usr/lib/aarch64-linux-gnu/libtcmalloc.so.4.5.10` |

#### Callees

Callees ranked by contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `__json_value_module_MOD_parse_object` (`src/json-fortran/src/json_value_module.F90`)

|     % |     Size | Objects | Callee                                      | Location                                     |
| ----: | -------: | ------: | ------------------------------------------- | -------------------------------------------- |
| 98.7% |  756 KiB |  14,694 | `__json_value_module_MOD_parse_object`      | `src/json-fortran/src/json_value_module.F90` |
| 76.3% |  584 KiB |   5,343 | `__json_value_module_MOD_json_value_create` | `src/json-fortran/src/json_value_module.F90` |
| 52.2% |  400 KiB |   7,433 | `__json_value_module_MOD_parse_array`       | `src/json-fortran/src/json_value_module.F90` |
| 10.1% | 77.5 KiB |   1,917 | `__json_value_module_MOD_parse_value`       | `src/json-fortran/src/json_value_module.F90` |
|  2.7% | 20.9 KiB |   1,213 | `_start`                                    | `<unknown>`                                  |

##### `__json_value_module_MOD_json_parse_file` (`src/json-fortran/src/json_value_module.F90`)

|     % |     Size | Objects | Callee                                        | Location                                         |
| ----: | -------: | ------: | --------------------------------------------- | ------------------------------------------------ |
| 72.2% |  333 KiB |   6,147 | `__json_value_module_MOD_parse_object`        | `src/json-fortran/src/json_value_module.F90`     |
| 27.8% |  128 KiB |       3 | `0x10324b`                                    | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  1.8% | 8.27 KiB |      63 | `_start`                                      | `<unknown>`                                      |
| <0.1% |    112 B |       1 | `__json_value_module_MOD_json_value_create`   | `src/json-fortran/src/json_value_module.F90`     |
| <0.1% |      3 B |       1 | `__json_value_module_MOD_json_prepare_parser` | `src/json-fortran/src/json_value_module.F90`     |

##### `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`)

|      % |     Size | Objects | Callee                                    | Location                                     |
| -----: | -------: | ------: | ----------------------------------------- | -------------------------------------------- |
| 100.0% |  447 KiB |   5,853 | `__json_value_module_MOD_json_parse_file` | `src/json-fortran/src/json_value_module.F90` |
|   1.0% | 4.27 KiB |      39 | `_start`                                  | `<unknown>`                                  |

##### `MAIN__` (`out/profile.f90`)

|     % |    Size | Objects | Callee                                                | Location                                         |
| ----: | ------: | ------: | ----------------------------------------------------- | ------------------------------------------------ |
| 99.8% | 432 KiB |   5,574 | `__json_file_module_MOD_json_file_load`               | `src/json-fortran/src/json_file_module.F90`      |
|  0.2% |   776 B |       2 | `0x1093fb`                                            | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  0.1% |   269 B |       2 | `__json_file_module_MOD_initialize_json_core_in_file` | `src/json-fortran/src/json_file_module.F90`      |
| <0.1% |    96 B |       1 | `_start`                                              | `<unknown>`                                      |
| <0.1% |    17 B |       1 | `0x118783`                                            | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `main` (`out/profile.f90`)

|      % |     Size | Objects | Callee   | Location          |
| -----: | -------: | ------: | -------- | ----------------- |
| 100.0% |  417 KiB |   5,258 | `MAIN__` | `out/profile.f90` |
|   2.0% | 8.42 KiB |      77 | `_start` | `<unknown>`       |

##### `__json_value_module_MOD_parse_array` (`src/json-fortran/src/json_value_module.F90`)

|     % |     Size | Objects | Callee                                      | Location                                     |
| ----: | -------: | ------: | ------------------------------------------- | -------------------------------------------- |
| 98.5% |  402 KiB |   7,555 | `__json_value_module_MOD_parse_object`      | `src/json-fortran/src/json_value_module.F90` |
|  6.4% | 26.3 KiB |     240 | `__json_value_module_MOD_json_value_create` | `src/json-fortran/src/json_value_module.F90` |
|  0.3% | 1.05 KiB |     134 | `__json_value_module_MOD_parse_number`      | `src/json-fortran/src/json_value_module.F90` |
| <0.1% |    188 B |      47 | `_start`                                    | `<unknown>`                                  |

##### `0x27743` (`usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |    Size | Objects | Callee   | Location          |
| -----: | ------: | ------: | -------- | ----------------- |
| 100.0% | 402 KiB |   4,979 | `main`   | `out/profile.f90` |
|   0.1% |   224 B |       2 | `_start` | `<unknown>`       |

##### `0x27817` (`usr/lib/aarch64-linux-gnu/libc.so.6`)

|      % |    Size | Objects | Callee    | Location                              |
| -----: | ------: | ------: | --------- | ------------------------------------- |
| 100.0% | 382 KiB |   4,623 | `0x27743` | `usr/lib/aarch64-linux-gnu/libc.so.6` |
|  33.5% | 128 KiB |       1 | `_start`  | `<unknown>`                           |

##### `_start` (`<unknown>`)

|      % |    Size | Objects | Callee    | Location                              |
| -----: | ------: | ------: | --------- | ------------------------------------- |
| 100.0% | 350 KiB |   4,220 | `0x27817` | `usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x10324b` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|      % |    Size | Objects | Callee     | Location                                         |
| -----: | ------: | ------: | ---------- | ------------------------------------------------ |
| 100.0% | 128 KiB |       2 | `0x1029eb` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  <0.1% |    18 B |       1 | `0x102ac7` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `0x1029eb` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|     % |    Size | Objects | Callee     | Location                                         |
| ----: | ------: | ------: | ---------- | ------------------------------------------------ |
| 99.9% | 128 KiB |       1 | `0x10be83` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  0.1% |    96 B |       1 | `0x10bd7b` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `0x10be83` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|      % |    Size | Objects | Callee    | Location                                         |
| -----: | ------: | ------: | --------- | ------------------------------------------------ |
| 100.0% | 128 KiB |       1 | `0x1c1b3` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `__json_value_module_MOD_parse_value` (`src/json-fortran/src/json_value_module.F90`)

|    % |     Size | Objects | Callee                              | Location                                     |
| ---: | -------: | ------: | ----------------------------------- | -------------------------------------------- |
| 4.4% | 3.72 KiB |      34 | `_start`                            | `<unknown>`                                  |
| 4.1% |  3.5 KiB |      32 | `0x1e39f`                           | `[stack]`                                    |
| 0.1% |     52 B |      52 | `__json_value_module_MOD_to_string` | `src/json-fortran/src/json_value_module.F90` |

##### `0x228cf` (`tmp/nix-shell.NcwiQ3/profiler-md-input-generation.fqUYfr/fortran-base/binary`)

|     % |     Size | Objects | Callee    | Location    |
| ----: | -------: | ------: | --------- | ----------- |
| 49.3% | 19.1 KiB |     175 | `_start`  | `<unknown>` |
| 30.1% | 11.7 KiB |     107 | `0x1f22f` | `[stack]`   |
| 11.0% | 4.27 KiB |      39 | `0x1e337` | `[stack]`   |
|  9.6% | 3.72 KiB |      34 | `0x1f47f` | `[stack]`   |

##### `0xffffffffffffffff` (`<unknown>`)

|     % |     Size | Objects | Callee               | Location                                                                       |
| ----: | -------: | ------: | -------------------- | ------------------------------------------------------------------------------ |
| 57.6% | 21.9 KiB |     325 | `_start`             | `<unknown>`                                                                    |
| 39.4% |   15 KiB |     137 | `0x228cf`            | `tmp/nix-shell.NcwiQ3/profiler-md-input-generation.fqUYfr/fortran-base/binary` |
|  2.2% |    856 B |      82 | `0xc3d2`             | `<unknown>`                                                                    |
|  2.0% |    764 B |       2 | `0xffffffffffffffff` | `<unknown>`                                                                    |
|  0.8% |    304 B |      38 | `0xff`               | `<unknown>`                                                                    |

##### `0x1f47f` (`[stack]`)

|     % |     Size | Objects | Callee                                    | Location                                     |
| ----: | -------: | ------: | ----------------------------------------- | -------------------------------------------- |
| 57.2% |   17 KiB |     155 | `_start`                                  | `<unknown>`                                  |
| 28.8% | 8.53 KiB |      78 | `__json_value_module_MOD_parse_object`    | `src/json-fortran/src/json_value_module.F90` |
| 12.6% | 3.72 KiB |      34 | `__json_value_module_MOD_parse_value`     | `src/json-fortran/src/json_value_module.F90` |
|  1.0% |    312 B |      39 | `0xaaaab87a67ff`                          | `<unknown>`                                  |
|  0.4% |    112 B |       1 | `__json_value_module_MOD_pop_char.part.0` | `src/json-fortran/src/json_value_module.F90` |

##### `0x1f22f` (`[stack]`)

|     % |     Size | Objects | Callee    | Location    |
| ----: | -------: | ------: | --------- | ----------- |
| 52.6% | 13.2 KiB |     121 | `0x1f47f` | `[stack]`   |
| 47.4% | 11.9 KiB |     109 | `_start`  | `<unknown>` |

##### `0x1` (`<unknown>`)

|     % |     Size | Objects | Callee               | Location                                          |
| ----: | -------: | ------: | -------------------- | ------------------------------------------------- |
| 68.5% | 9.33 KiB |      32 | `0x2b167`            | `usr/lib/aarch64-linux-gnu/libtcmalloc.so.4.5.10` |
| 29.9% | 4.07 KiB |      64 | `0xffffffffffffffff` | `<unknown>`                                       |
|  0.8% |    112 B |       1 | `0xe3b383e3a983e391` | `<unknown>`                                       |
|  0.8% |    112 B |       1 | `0x27743`            | `usr/lib/aarch64-linux-gnu/libc.so.6`             |
| <0.1% |      1 B |       1 | `_start`             | `<unknown>`                                       |

##### `0x2b167` (`usr/lib/aarch64-linux-gnu/libtcmalloc.so.4.5.10`)

|     % |     Size | Objects | Callee    | Location                                          |
| ----: | -------: | ------: | --------- | ------------------------------------------------- |
| 90.9% | 9.33 KiB |      32 | `_start`  | `<unknown>`                                       |
|  6.7% |    702 B |      39 | `0x1e89f` | `[stack]`                                         |
|  2.4% |    256 B |       1 | `0x313ef` | `usr/lib/aarch64-linux-gnu/libtcmalloc.so.4.5.10` |

##### `__json_value_module_MOD_parse_string` (`src/json-fortran/src/json_value_module.F90`)

|     % |     Size | Objects | Callee               | Location    |
| ----: | -------: | ------: | -------------------- | ----------- |
| 89.6% | 8.76 KiB |     117 | `_start`             | `<unknown>` |
|  7.8% |    784 B |      82 | `0xffffffffffffffff` | `<unknown>` |

##### `0x1e9ef` (`[stack]`)

|      % |     Size | Objects | Callee                                 | Location                                     |
| -----: | -------: | ------: | -------------------------------------- | -------------------------------------------- |
| 100.0% | 8.53 KiB |      78 | `__json_value_module_MOD_parse_string` | `src/json-fortran/src/json_value_module.F90` |

##### `0x1dfbf` (`[stack]`)

|      % |     Size | Objects | Callee   | Location    |
| -----: | -------: | ------: | -------- | ----------- |
| 100.0% | 8.53 KiB |      78 | `_start` | `<unknown>` |

##### `0x1e0bf` (`[stack]`)

|     % |     Size | Objects | Callee    | Location                                                                       |
| ----: | -------: | ------: | --------- | ------------------------------------------------------------------------------ |
| 48.7% | 4.16 KiB |      38 | `main`    | `out/profile.f90`                                                              |
| 48.7% | 4.16 KiB |      38 | `0x228cf` | `tmp/nix-shell.NcwiQ3/profiler-md-input-generation.fqUYfr/fortran-base/binary` |
|  2.6% |    224 B |       2 | `0x1f22f` | `[stack]`                                                                      |

##### `0xffffa218003f` (`<unknown>`)

|     % |     Size | Objects | Callee    | Location                                          |
| ----: | -------: | ------: | --------- | ------------------------------------------------- |
| 50.0% | 4.16 KiB |      38 | `0x2f9e7` | `usr/lib/aarch64-linux-gnu/libtcmalloc.so.4.5.10` |
| 50.0% | 4.16 KiB |      38 | `_start`  | `<unknown>`                                       |

##### `0x397ff` (`usr/lib/aarch64-linux-gnu/libtcmalloc.so.4.5.10`)

|      % |     Size | Objects | Callee    | Location                                          |
| -----: | -------: | ------: | --------- | ------------------------------------------------- |
| 100.0% | 7.77 KiB |      71 | `_start`  | `<unknown>`                                       |
|  49.3% | 3.83 KiB |      35 | `0x397ff` | `usr/lib/aarch64-linux-gnu/libtcmalloc.so.4.5.10` |

##### `__json_value_module_MOD_parse_number` (`src/json-fortran/src/json_value_module.F90`)

|     % |    Size | Objects | Callee                                  | Location                                     |
| ----: | ------: | ------: | --------------------------------------- | -------------------------------------------- |
| 90.2% | 6.8 KiB |     871 | `__json_value_module_MOD_to_integer`    | `src/json-fortran/src/json_value_module.F90` |
|  9.8% |   760 B |       1 | `__json_value_module_MOD_string_to_int` | `src/json-fortran/src/json_value_module.F90` |

##### `0xaaaab87a67ff` (`<unknown>`)

|     % |     Size | Objects | Callee           | Location    |
| ----: | -------: | ------: | ---------------- | ----------- |
| 41.1% | 2.31 KiB |     153 | `_start`         | `<unknown>` |
| 35.9% | 2.02 KiB |     103 | `0xffffa2a19d67` | `<unknown>` |
| 23.0% | 1.29 KiB |      51 | `0xffffa2a18fff` | `<unknown>` |

##### `0x1e337` (`[stack]`)

|      % |     Size | Objects | Callee   | Location    |
| -----: | -------: | ------: | -------- | ----------- |
| 100.0% | 4.27 KiB |      39 | `_start` | `<unknown>` |

##### `0x2f9e7` (`usr/lib/aarch64-linux-gnu/libtcmalloc.so.4.5.10`)

|      % |     Size | Objects | Callee   | Location    |
| -----: | -------: | ------: | -------- | ----------- |
| 100.0% | 4.27 KiB |      39 | `_start` | `<unknown>` |

##### `0x7c` (`<unknown>`)

|    % |  Size | Objects | Callee           | Location    |
| ---: | ----: | ------: | ---------------- | ----------- |
| 2.6% | 112 B |       1 | `0xaaaab8849377` | `<unknown>` |
| 2.6% | 112 B |       1 | `0xaaaab89bac9f` | `<unknown>` |
| 2.6% | 112 B |       1 | `0xaaaab89311bf` | `<unknown>` |
| 2.6% | 112 B |       1 | `0xaaaab881808f` | `<unknown>` |
| 2.6% | 112 B |       1 | `0xaaaab893094f` | `<unknown>` |

##### `0x1e7cf` (`[stack]`)

|      % |     Size | Objects | Callee   | Location    |
| -----: | -------: | ------: | -------- | ----------- |
| 100.0% | 4.05 KiB |      37 | `_start` | `<unknown>` |

##### `0x17` (`<unknown>`)

|      % |     Size | Objects | Callee    | Location                                          |
| -----: | -------: | ------: | --------- | ------------------------------------------------- |
| 100.0% | 3.94 KiB |      36 | `0x397ff` | `usr/lib/aarch64-linux-gnu/libtcmalloc.so.4.5.10` |

##### `0x18` (`<unknown>`)

|      % |     Size | Objects | Callee   | Location    |
| -----: | -------: | ------: | -------- | ----------- |
| 100.0% | 3.72 KiB |      34 | `_start` | `<unknown>` |

##### `0xffffa2a18fff` (`<unknown>`)

|     % |     Size | Objects | Callee    | Location                                          |
| ----: | -------: | ------: | --------- | ------------------------------------------------- |
| 54.3% | 1.73 KiB |      55 | `_start`  | `<unknown>`                                       |
| 38.3% | 1.22 KiB |      78 | `0x3131f` | `usr/lib/aarch64-linux-gnu/libtcmalloc.so.4.5.10` |
|  6.9% |    224 B |       2 | `0x3143b` | `usr/lib/aarch64-linux-gnu/libtcmalloc.so.4.5.10` |
|  0.6% |     18 B |       1 | `0x3142b` | `usr/lib/aarch64-linux-gnu/libtcmalloc.so.4.5.10` |

##### `0xffffa2a19d67` (`<unknown>`)

|     % |     Size | Objects | Callee           | Location    |
| ----: | -------: | ------: | ---------------- | ----------- |
| 65.2% | 2.02 KiB |     103 | `_start`         | `<unknown>` |
| 34.8% | 1.08 KiB |      45 | `0xaaaab87a67ff` | `<unknown>` |

##### `0x3131f` (`usr/lib/aarch64-linux-gnu/libtcmalloc.so.4.5.10`)

|     % |     Size | Objects | Callee    | Location    |
| ----: | -------: | ------: | --------- | ----------- |
| 51.9% | 1.22 KiB |      78 | `_start`  | `<unknown>` |
| 33.5% |    808 B |      39 | `0x1dc7f` | `[stack]`   |
| 14.6% |    351 B |      39 | `0x1e69f` | `[stack]`   |

## Hottest call stacks

Call stacks ranked by bytes retained in their leaf frame.

|     % |     Size | Objects | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ----: | -------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 31.5% |  282 KiB |   2,577 | `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`                                        |
| 14.3% |  128 KiB |       1 | `0x1c1b3` (`usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`) ← `0x10be83` ← `0x1029eb` ← `0x10324b` ← `__json_value_module_MOD_json_parse_file` (`src/json-fortran/src/json_value_module.F90`) ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`) ← `main` ← `0x27743` (`usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `0x27817` (`usr/lib/aarch64-linux-gnu/libc.so.6`) ← `_start`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  4.2% | 37.6 KiB |   2,507 | `__json_value_module_MOD_parse_object` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`                                             |
|  3.5% | 31.6 KiB |     937 | `__json_value_module_MOD_parse_value` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`                                              |
|  2.3% | 20.6 KiB |     188 | `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`) ← `main` ← `0x27743` (`usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817`                                                   |
|  2.3% | 20.1 KiB |     184 | `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`) ← `main` ← `0x27743` (`usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start`                                                                                 |
|  1.8% |   16 KiB |     146 | `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`) ← `main` ← `0x27743` (`usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `0xffffffffffffffff`                                                                                                   |
|  1.7% | 15.3 KiB |     140 | `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`) ← `main` ← `0x27743` (`usr/lib/aarch64-linux-gnu/libc.so.6`)                      |
|  1.7% |   15 KiB |     137 | `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`) ← `main` ← `0x27743` (`usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `0x228cf` (`tmp/nix-shell.NcwiQ3/profiler-md-input-generation.fqUYfr/fortran-base/binary`) ← `0xffffffffffffffff`                                               |
|  1.3% | 11.7 KiB |     107 | `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`) ← `main` ← `0x27743` (`usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `0x1f22f` (`[stack]`) ← `0x228cf` (`tmp/nix-shell.NcwiQ3/profiler-md-input-generation.fqUYfr/fortran-base/binary`)                                                                                       |
|  1.3% | 11.3 KiB |     103 | `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`) ← `main`                                 |
|  1.2% | 10.5 KiB |      39 | `__json_value_module_MOD_parse_value` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`) ← `main` ← `0x27743` (`usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817`                                                         |
|  1.0% | 9.33 KiB |      32 | `__json_value_module_MOD_parse_value` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`) ← `main` ← `0x27743` (`usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `0x2b167` (`usr/lib/aarch64-linux-gnu/libtcmalloc.so.4.5.10`) ← `0x1`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  1.0% | 8.53 KiB |      78 | `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object`                                          |
|  1.0% | 8.53 KiB |      78 | `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`) ← `main` ← `0x27743` (`usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `__json_value_module_MOD_parse_string` (`src/json-fortran/src/json_value_module.F90`) ← `0x1e9ef` (`[stack]`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  1.0% | 8.53 KiB |      78 | `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`) ← `main` ← `0x27743` (`usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `0x1f47f` (`[stack]`) ← `0x1f22f`                                                                                                                                                                                                                 |
|  1.0% | 8.53 KiB |      78 | `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`) ← `main` ← `0x27743` (`usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `0x1dfbf` (`[stack]`) ← `__json_value_module_MOD_parse_object` (`src/json-fortran/src/json_value_module.F90`)                                                                                                                                                                                                                       |
|  1.0% | 8.53 KiB |      78 | `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`) ← `main` ← `0x27743` (`usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x27817` ← `_start` ← `__json_value_module_MOD_parse_object` (`src/json-fortran/src/json_value_module.F90`) ← `0x1f47f` (`[stack]`)                                                                                                                                                                              |
|  0.9% | 7.88 KiB |      72 | `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_json_parse_file` ← `__json_file_module_MOD_json_file_load` (`src/json-fortran/src/json_file_module.F90`) ← `MAIN__` (`out/profile.f90`) |
|  0.8% | 7.55 KiB |      69 | `__json_value_module_MOD_json_value_create` (`src/json-fortran/src/json_value_module.F90`) ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_object` ← `__json_value_module_MOD_parse_array` ← `__json_value_module_MOD_parse_object`                                         |

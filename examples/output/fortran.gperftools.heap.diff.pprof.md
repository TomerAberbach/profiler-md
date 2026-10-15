# Allocated heap profile diff

Allocated 39.7 MiB → 70.5 MiB (+30.805 MiB, +77.6%) over 480,489 objects → 439,557 objects (86.7 B → 168 B per object).

| Category |  Change |       Delta |             % |                Size |           Objects |
| -------- | ------: | ----------: | ------------: | ------------------: | ----------------: |
| Native   | +337.2% | +35.961 MiB | 26.9% → 66.1% | 10.7 MiB → 46.6 MiB |   26,499 → 25,721 |
| Ours     |  -17.8% |  -5.156 MiB | 73.1% → 33.9% |   29 MiB → 23.9 MiB | 453,990 → 413,836 |

Paths starting with `./` or `../` are relative to `/src/json-fortran/src/`.

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated within the function body, excluding callees. Categories account for at least 1.0% of self size on the base or the current side.

|   Change |        Delta |             % |                Size |         Objects | Function                                          | Location                                          |
| -------: | -----------: | ------------: | ------------------: | --------------: | ------------------------------------------------- | ------------------------------------------------- |
|  +359.1% |  +36.218 MiB | 25.4% → 65.7% | 10.1 MiB → 46.3 MiB | 13,656 → 17,633 | `0x1c1b3`                                         | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  +209.4% | +172.528 KiB |   0.2% → 0.4% |  82.4 KiB → 255 KiB |     796 → 2,071 | `__json_string_utilities_MOD_unescape_string`     | `./json_string_utilities.F90`                     |
|    +2.7% |      +18 KiB |   1.6% → 0.9% |   662 KiB → 680 KiB |   2,649 → 2,721 | `__json_value_module_MOD_parse_number`            | `./json_value_module.F90`                         |
|      new |  +15.029 KiB |  0.0% → <0.1% |        0 B → 15 KiB |         0 → 909 | `MAIN__`                                          | `/out/profile.f90`                                |
|   +54.4% |  +14.141 KiB |          0.1% |   26 KiB → 40.1 KiB |  8,047 → 10,506 | `__json_string_utilities_MOD_string_to_integer`   | `./json_string_utilities.F90`                     |
|    +1.1% |   +1.632 KiB |   0.4% → 0.2% |   148 KiB → 150 KiB | 18,928 → 19,137 | `__json_value_module_MOD_to_integer`              | `./json_value_module.F90`                         |
| +7083.3% |       +850 B |         <0.1% |        12 B → 862 B |        12 → 862 | `__json_value_module_MOD_json_get_string_by_path` | `./json_get_scalar_by_path.inc`                   |

##### Ours

|   Change |        Delta |            % |               Size |         Objects | Function                                          | Location                        |
| -------: | -----------: | -----------: | -----------------: | --------------: | ------------------------------------------------- | ------------------------------- |
|  +209.4% | +172.528 KiB |  0.2% → 0.4% | 82.4 KiB → 255 KiB |     796 → 2,071 | `__json_string_utilities_MOD_unescape_string`     | `./json_string_utilities.F90`   |
|    +2.7% |      +18 KiB |  1.6% → 0.9% |  662 KiB → 680 KiB |   2,649 → 2,721 | `__json_value_module_MOD_parse_number`            | `./json_value_module.F90`       |
|      new |  +15.029 KiB | 0.0% → <0.1% |       0 B → 15 KiB |         0 → 909 | `MAIN__`                                          | `/out/profile.f90`              |
|   +54.4% |  +14.141 KiB |         0.1% |  26 KiB → 40.1 KiB |  8,047 → 10,506 | `__json_string_utilities_MOD_string_to_integer`   | `./json_string_utilities.F90`   |
|    +1.1% |   +1.632 KiB |  0.4% → 0.2% |  148 KiB → 150 KiB | 18,928 → 19,137 | `__json_value_module_MOD_to_integer`              | `./json_value_module.F90`       |
| +7083.3% |       +850 B |        <0.1% |       12 B → 862 B |        12 → 862 | `__json_value_module_MOD_json_get_string_by_path` | `./json_get_scalar_by_path.inc` |

##### Native

|  Change |       Delta |             % |                Size |         Objects | Function  | Location                                          |
| ------: | ----------: | ------------: | ------------------: | --------------: | --------- | ------------------------------------------------- |
| +359.1% | +36.218 MiB | 25.4% → 65.7% | 10.1 MiB → 46.3 MiB | 13,656 → 17,633 | `0x1c1b3` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

#### Improvements

Functions with the largest decrease in bytes allocated within the function body, excluding callees. Categories account for at least 1.0% of self size on the base or the current side.

|  Change |        Delta |             % |                Size |           Objects | Function                                    | Location                                          |
| ------: | -----------: | ------------: | ------------------: | ----------------: | ------------------------------------------- | ------------------------------------------------- |
|  -50.3% |   -5.294 MiB |  26.5% → 7.4% | 10.5 MiB → 5.23 MiB |   94,143 → 49,759 | `__json_value_module_MOD_parse_string`      | `./json_value_module.F90`                         |
|  -45.3% | -256.312 KiB |   1.4% → 0.4% |   565 KiB → 309 KiB |     5,969 → 3,235 | `0x1c24b`                                   | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|   -0.5% |  -74.265 KiB | 36.1% → 20.2% | 14.3 MiB → 14.2 MiB | 134,059 → 133,380 | `__json_value_module_MOD_json_value_create` | `./json_value_module.F90`                         |
|  -24.8% |   -6.151 KiB |  0.1% → <0.1% | 24.8 KiB → 18.6 KiB |     5,013 → 3,749 | `0x9980f`                                   | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
|   -0.4% |   -5.634 KiB |   3.6% → 2.0% |            1.44 MiB | 122,497 → 122,226 | `__json_value_module_MOD_parse_object`      | `./json_value_module.F90`                         |
|  -12.8% |       -677 B |         <0.1% |  5.16 KiB → 4.5 KiB |     5,280 → 4,603 | `__json_value_module_MOD_to_string`         | `./json_value_module.F90`                         |
|  -23.6% |       -677 B |         <0.1% |  2.8 KiB → 2.14 KiB |     1,861 → 1,104 | `0x1c1f3`                                   | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|     ~0% |       -110 B |   4.4% → 2.5% |            1.76 MiB |   41,345 → 41,430 | `__json_value_module_MOD_parse_value`       | `./json_value_module.F90`                         |
|   -0.3% |         -6 B |         <0.1% | 2.03 KiB → 2.02 KiB |                10 | `__json_value_module_MOD_json_initialize`   | `./json_value_module.F90`                         |
|     ~0% |         -4 B |   0.3% → 0.1% |             102 KiB |   26,217 → 26,216 | `__json_value_module_MOD_to_logical`        | `./json_value_module.F90`                         |
| removed |         -1 B |  <0.1% → 0.0% |           1 B → 0 B |             1 → 0 | `__json_value_module_MOD_pop_char.part.0`   | `./json_value_module.F90`                         |

##### Ours

|  Change |       Delta |             % |                Size |           Objects | Function                                    | Location                  |
| ------: | ----------: | ------------: | ------------------: | ----------------: | ------------------------------------------- | ------------------------- |
|  -50.3% |  -5.294 MiB |  26.5% → 7.4% | 10.5 MiB → 5.23 MiB |   94,143 → 49,759 | `__json_value_module_MOD_parse_string`      | `./json_value_module.F90` |
|   -0.5% | -74.265 KiB | 36.1% → 20.2% | 14.3 MiB → 14.2 MiB | 134,059 → 133,380 | `__json_value_module_MOD_json_value_create` | `./json_value_module.F90` |
|   -0.4% |  -5.634 KiB |   3.6% → 2.0% |            1.44 MiB | 122,497 → 122,226 | `__json_value_module_MOD_parse_object`      | `./json_value_module.F90` |
|  -12.8% |      -677 B |         <0.1% |  5.16 KiB → 4.5 KiB |     5,280 → 4,603 | `__json_value_module_MOD_to_string`         | `./json_value_module.F90` |
|     ~0% |      -110 B |   4.4% → 2.5% |            1.76 MiB |   41,345 → 41,430 | `__json_value_module_MOD_parse_value`       | `./json_value_module.F90` |
|   -0.3% |        -6 B |         <0.1% | 2.03 KiB → 2.02 KiB |                10 | `__json_value_module_MOD_json_initialize`   | `./json_value_module.F90` |
|     ~0% |        -4 B |   0.3% → 0.1% |             102 KiB |   26,217 → 26,216 | `__json_value_module_MOD_to_logical`        | `./json_value_module.F90` |
| removed |        -1 B |  <0.1% → 0.0% |           1 B → 0 B |             1 → 0 | `__json_value_module_MOD_pop_char.part.0`   | `./json_value_module.F90` |

##### Native

| Change |        Delta |            % |                Size |       Objects | Function  | Location                                          |
| -----: | -----------: | -----------: | ------------------: | ------------: | --------- | ------------------------------------------------- |
| -45.3% | -256.312 KiB |  1.4% → 0.4% |   565 KiB → 309 KiB | 5,969 → 3,235 | `0x1c24b` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| -24.8% |   -6.151 KiB | 0.1% → <0.1% | 24.8 KiB → 18.6 KiB | 5,013 → 3,749 | `0x9980f` | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
| -23.6% |       -677 B |        <0.1% |  2.8 KiB → 2.14 KiB | 1,861 → 1,104 | `0x1c1f3` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

#### Lines

Lines with the largest change in contribution to each function's self size.

##### `__json_string_utilities_MOD_unescape_string` (`./json_string_utilities.F90`)

|  Change |        Delta |              % |               Size |     Objects | Location                          |
| ------: | -----------: | -------------: | -----------------: | ----------: | --------------------------------- |
| +121.8% | +100.331 KiB | 100.0% → 71.7% | 82.4 KiB → 183 KiB | 796 → 1,316 | `./json_string_utilities.F90:506` |
|     new |  +72.197 KiB |   0.0% → 28.3% |     0 B → 72.2 KiB |     0 → 755 | `./json_string_utilities.F90:611` |

##### `__json_value_module_MOD_parse_number` (`./json_value_module.F90`)

| Change |   Delta |      % |              Size |       Objects | Location                                |
| -----: | ------: | -----: | ----------------: | ------------: | --------------------------------------- |
|  +2.7% | +18 KiB | 100.0% | 662 KiB → 680 KiB | 2,649 → 2,721 | `./json_value_module.F90:11216 → 11244` |

##### `MAIN__` (`/out/profile.f90`)

| Change |       Delta |             % |         Size | Objects | Location              |
| -----: | ----------: | ------------: | -----------: | ------: | --------------------- |
|    new | +15.029 KiB | 0.0% → 100.0% | 0 B → 15 KiB | 0 → 909 | `/out/profile.f90:32` |

##### `__json_string_utilities_MOD_string_to_integer` (`./json_string_utilities.F90`)

| Change |       Delta |             % |                Size |       Objects | Location                          |
| -----: | ----------: | ------------: | ------------------: | ------------: | --------------------------------- |
| +81.3% | +16.846 KiB | 79.7% → 93.6% | 20.7 KiB → 37.6 KiB | 5,527 → 9,131 | `./json_string_utilities.F90:134` |
| -51.2% |  -2.705 KiB |  20.3% → 6.4% | 5.28 KiB → 2.57 KiB | 2,520 → 1,375 | `./json_string_utilities.F90:131` |

##### `__json_value_module_MOD_to_integer` (`./json_value_module.F90`)

| Change |      Delta |      % |              Size |         Objects | Location                                |
| -----: | ---------: | -----: | ----------------: | --------------: | --------------------------------------- |
|  +1.1% | +1.632 KiB | 100.0% | 148 KiB → 150 KiB | 18,928 → 19,137 | `./json_value_module.F90:10703 → 10710` |

##### `__json_value_module_MOD_json_get_string_by_path` (`./json_get_scalar_by_path.inc`)

|   Change |  Delta |      % |         Size |  Objects | Location                          |
| -------: | -----: | -----: | -----------: | -------: | --------------------------------- |
| +7083.3% | +850 B | 100.0% | 12 B → 862 B | 12 → 862 | `./json_get_scalar_by_path.inc:6` |

##### `__json_value_module_MOD_parse_string` (`./json_value_module.F90`)

| Change |        Delta |             % |                Size |         Objects | Location                                |
| -----: | -----------: | ------------: | ------------------: | --------------: | --------------------------------------- |
| -46.9% |   -4.112 MiB | 83.2% → 88.9% | 8.76 MiB → 4.65 MiB | 35,879 → 19,035 | `./json_value_module.F90:11073 → 11101` |
| -65.5% | -988.675 KiB |  14.0% → 9.7% |  1.47 MiB → 520 KiB | 57,672 → 30,498 | `./json_value_module.F90:11122 → 11150` |
| -75.0% |     -222 KiB |   2.7% → 1.4% |    296 KiB → 74 KiB |       592 → 148 | `./json_value_module.F90:11098 → 11126` |
|    new |        +78 B |  0.0% → <0.1% |          0 B → 78 B |          0 → 78 | `./json_value_module.F90:11148`         |

##### `__json_value_module_MOD_json_value_create` (`./json_value_module.F90`)

| Change |       Delta |      % |                Size |           Objects | Location                              |
| -----: | ----------: | -----: | ------------------: | ----------------: | ------------------------------------- |
|  -0.5% | -74.265 KiB | 100.0% | 14.3 MiB → 14.2 MiB | 134,059 → 133,380 | `./json_value_module.F90:2211 → 2218` |

##### `__json_value_module_MOD_parse_object` (`./json_value_module.F90`)

|  Change |      Delta |             % |           Size |     Objects | Location                        |
| ------: | ---------: | ------------: | -------------: | ----------: | ------------------------------- |
| removed |  -1.44 MiB | 100.0% → 0.0% | 1.44 MiB → 0 B | 122,497 → 0 | `./json_value_module.F90:10922` |
|     new | +1.435 MiB | 0.0% → 100.0% | 0 B → 1.44 MiB | 0 → 122,226 | `./json_value_module.F90:10937` |

##### `__json_value_module_MOD_to_string` (`./json_value_module.F90`)

| Change |  Delta |      % |               Size |       Objects | Location                                |
| -----: | -----: | -----: | -----------------: | ------------: | --------------------------------------- |
| -12.8% | -677 B | 100.0% | 5.16 KiB → 4.5 KiB | 5,280 → 4,603 | `./json_value_module.F90:10800 → 10807` |

##### `__json_value_module_MOD_parse_value` (`./json_value_module.F90`)

| Change |  Delta |      % |     Size |         Objects | Location                                |
| -----: | -----: | -----: | -------: | --------------: | --------------------------------------- |
|    ~0% | -110 B | 100.0% | 1.76 MiB | 41,345 → 41,430 | `./json_value_module.F90:10185 → 10192` |

##### `__json_value_module_MOD_json_initialize` (`./json_value_module.F90`)

|  Change |  Delta |            % |        Size | Objects | Location                              |
| ------: | -----: | -----------: | ----------: | ------: | ------------------------------------- |
| removed | -2 KiB | 98.7% → 0.0% | 2 KiB → 0 B |   8 → 0 | `./json_value_module.F90:1048`        |
|     new | +2 KiB | 0.0% → 99.0% | 0 B → 2 KiB |   0 → 8 | `./json_value_module.F90:1051`        |
|  -23.1% |   -6 B |  1.3% → 1.0% | 26 B → 20 B |       2 | `./json_value_module.F90:1196 → 1203` |

##### `__json_value_module_MOD_to_logical` (`./json_value_module.F90`)

| Change | Delta |      % |    Size |         Objects | Location                                |
| -----: | ----: | -----: | ------: | --------------: | --------------------------------------- |
|    ~0% |  -4 B | 100.0% | 102 KiB | 26,217 → 26,216 | `./json_value_module.F90:10672 → 10679` |

##### `__json_value_module_MOD_pop_char.part.0` (`./json_value_module.F90`)

|  Change | Delta |             % |      Size | Objects | Location                        |
| ------: | ----: | ------------: | --------: | ------: | ------------------------------- |
| removed |  -1 B | 100.0% → 0.0% | 1 B → 0 B |   1 → 0 | `./json_value_module.F90:11383` |

#### Callers

Callers with the largest change in contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `0x1c1b3` (`/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|  Change |       Delta |             % |                Size |        Objects | Caller     | Location                                          |
| ------: | ----------: | ------------: | ------------------: | -------------: | ---------- | ------------------------------------------------- |
| +463.1% | +36.734 MiB | 78.7% → 96.5% | 7.93 MiB → 44.7 MiB | 1,992 → 11,216 | `0xfa6bf`  | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  -65.2% |    -486 KiB |   7.2% → 0.5% |   745 KiB → 259 KiB |  5,962 → 2,074 | `0x112ecb` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  -23.9% | -42.468 KiB |   1.7% → 0.3% |   178 KiB → 135 KiB |  5,692 → 4,333 | `0x112ebb` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `__json_string_utilities_MOD_unescape_string` (`./json_string_utilities.F90`)

|  Change |        Delta |      % |               Size |     Objects | Caller                                 | Location                  |
| ------: | -----------: | -----: | -----------------: | ----------: | -------------------------------------- | ------------------------- |
| +209.4% | +172.528 KiB | 100.0% | 82.4 KiB → 255 KiB | 796 → 2,071 | `__json_value_module_MOD_parse_string` | `./json_value_module.F90` |

##### `__json_value_module_MOD_parse_number` (`./json_value_module.F90`)

| Change |   Delta |              % |              Size |       Objects | Caller                                 | Location                  |
| -----: | ------: | -------------: | ----------------: | ------------: | -------------------------------------- | ------------------------- |
|    new | +10 KiB |    0.0% → 1.5% |      0 B → 10 KiB |        0 → 40 | `__json_value_module_MOD_parse_array`  | `./json_value_module.F90` |
|  +1.2% |  +8 KiB | 100.0% → 98.5% | 662 KiB → 670 KiB | 2,649 → 2,681 | `__json_value_module_MOD_parse_object` | `./json_value_module.F90` |

##### `MAIN__` (`/out/profile.f90`)

| Change |       Delta |             % |         Size | Objects | Caller | Location           |
| -----: | ----------: | ------------: | -----------: | ------: | ------ | ------------------ |
|    new | +15.029 KiB | 0.0% → 100.0% | 0 B → 15 KiB | 0 → 909 | `main` | `/out/profile.f90` |

##### `__json_string_utilities_MOD_string_to_integer` (`./json_string_utilities.F90`)

| Change |       Delta |      % |              Size |        Objects | Caller                                  | Location                  |
| -----: | ----------: | -----: | ----------------: | -------------: | --------------------------------------- | ------------------------- |
| +54.4% | +14.141 KiB | 100.0% | 26 KiB → 40.1 KiB | 8,047 → 10,506 | `__json_value_module_MOD_string_to_int` | `./json_value_module.F90` |

##### `__json_value_module_MOD_to_integer` (`./json_value_module.F90`)

| Change |      Delta |      % |              Size |         Objects | Caller                                 | Location                  |
| -----: | ---------: | -----: | ----------------: | --------------: | -------------------------------------- | ------------------------- |
|  +1.1% | +1.632 KiB | 100.0% | 148 KiB → 150 KiB | 18,928 → 19,137 | `__json_value_module_MOD_parse_number` | `./json_value_module.F90` |

##### `__json_value_module_MOD_json_get_string_by_path` (`./json_get_scalar_by_path.inc`)

|   Change |  Delta |      % |         Size |  Objects | Caller                                        | Location                 |
| -------: | -----: | -----: | -----------: | -------: | --------------------------------------------- | ------------------------ |
| +7083.3% | +850 B | 100.0% | 12 B → 862 B | 12 → 862 | `__json_file_module_MOD_json_file_get_string` | `./json_file_module.F90` |

##### `__json_value_module_MOD_parse_string` (`./json_value_module.F90`)

| Change |        Delta |             % |                Size |         Objects | Caller                                 | Location                  |
| -----: | -----------: | ------------: | ------------------: | --------------: | -------------------------------------- | ------------------------- |
| -72.4% |   -6.032 MiB | 79.2% → 43.9% |  8.33 MiB → 2.3 MiB | 79,310 → 32,619 | `__json_value_module_MOD_parse_object` | `./json_value_module.F90` |
| +33.7% | +755.868 KiB | 20.8% → 56.1% | 2.19 MiB → 2.93 MiB | 14,833 → 17,140 | `__json_value_module_MOD_parse_value`  | `./json_value_module.F90` |

##### `0x1c24b` (`/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

| Change |        Delta |             % |              Size |       Objects | Caller     | Location                                          |
| -----: | -----------: | ------------: | ----------------: | ------------: | ---------- | ------------------------------------------------- |
| -45.9% | -256.312 KiB | 98.7% → 97.6% | 558 KiB → 302 KiB | 5,950 → 3,216 | `0x10c847` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `__json_value_module_MOD_json_value_create` (`./json_value_module.F90`)

| Change |       Delta |             % |               Size |           Objects | Caller                                 | Location                  |
| -----: | ----------: | ------------: | -----------------: | ----------------: | -------------------------------------- | ------------------------- |
|  -6.6% | -78.968 KiB |   8.2% → 7.7% | 1.18 MiB → 1.1 MiB |   11,021 → 10,299 | `__json_value_module_MOD_parse_array`  | `./json_value_module.F90` |
|    ~0% |  +4.703 KiB | 91.8% → 92.3% |           13.1 MiB | 123,035 → 123,078 | `__json_value_module_MOD_parse_object` | `./json_value_module.F90` |

##### `0x9980f` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change |      Delta |     % |                Size |       Objects | Caller    | Location                                          |
| -----: | ---------: | ----: | ------------------: | ------------: | --------- | ------------------------------------------------- |
| -24.9% | -6.116 KiB | 99.1% | 24.6 KiB → 18.5 KiB | 5,001 → 3,739 | `0x1c42b` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| -16.7% |      -36 B |  0.9% |       216 B → 180 B |       12 → 10 | `0x1c3fb` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `__json_value_module_MOD_parse_object` (`./json_value_module.F90`)

|  Change |      Delta |     % |       Size |           Objects | Caller                                    | Location                  |
| ------: | ---------: | ----: | ---------: | ----------------: | ----------------------------------------- | ------------------------- |
|   -0.4% | -5.642 KiB | 98.8% |   1.42 MiB | 120,167 → 119,895 | `__json_value_module_MOD_parse_object`    | `./json_value_module.F90` |
| +100.0% |       +8 B | <0.1% | 8 B → 16 B |             1 → 2 | `__json_value_module_MOD_json_parse_file` | `./json_value_module.F90` |

##### `__json_value_module_MOD_to_string` (`./json_value_module.F90`)

| Change |  Delta |      % |               Size |       Objects | Caller                                | Location                  |
| -----: | -----: | -----: | -----------------: | ------------: | ------------------------------------- | ------------------------- |
| -12.8% | -677 B | 100.0% | 5.16 KiB → 4.5 KiB | 5,280 → 4,603 | `__json_value_module_MOD_parse_value` | `./json_value_module.F90` |

##### `0x1c1f3` (`/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

| Change |  Delta |      % |               Size |       Objects | Caller     | Location                                          |
| -----: | -----: | -----: | -----------------: | ------------: | ---------- | ------------------------------------------------- |
| -23.6% | -677 B | 100.0% | 2.8 KiB → 2.14 KiB | 1,861 → 1,104 | `0x118783` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `__json_value_module_MOD_parse_value` (`./json_value_module.F90`)

| Change |  Delta |      % |     Size |         Objects | Caller                                 | Location                  |
| -----: | -----: | -----: | -------: | --------------: | -------------------------------------- | ------------------------- |
|    ~0% | -110 B | 100.0% | 1.76 MiB | 41,345 → 41,430 | `__json_value_module_MOD_parse_object` | `./json_value_module.F90` |

##### `__json_value_module_MOD_json_initialize` (`./json_value_module.F90`)

| Change | Delta |      % |                Size | Objects | Caller                                                | Location                 |
| -----: | ----: | -----: | ------------------: | ------: | ----------------------------------------------------- | ------------------------ |
|  -0.3% |  -6 B | 100.0% | 2.03 KiB → 2.02 KiB |      10 | `__json_file_module_MOD_initialize_json_core_in_file` | `./json_file_module.F90` |

##### `__json_value_module_MOD_to_logical` (`./json_value_module.F90`)

| Change | Delta |      % |    Size |         Objects | Caller                                 | Location                  |
| -----: | ----: | -----: | ------: | --------------: | -------------------------------------- | ------------------------- |
|    ~0% |  -4 B | 100.0% | 102 KiB | 26,217 → 26,216 | `__json_value_module_MOD_parse_object` | `./json_value_module.F90` |

##### `__json_value_module_MOD_pop_char.part.0` (`./json_value_module.F90`)

|  Change | Delta |             % |      Size | Objects | Caller                                   | Location                  |
| ------: | ----: | ------------: | --------: | ------: | ---------------------------------------- | ------------------------- |
| removed |  -1 B | 100.0% → 0.0% | 1 B → 0 B |   1 → 0 | `__json_value_module_MOD_json_parse_end` | `./json_value_module.F90` |

### Total size

#### Regressions

Functions with the largest increase in bytes allocated within the function and its callees. Categories account for at least 1.0% of self size on the base or the current side.

|  Change |        Delta |             % |                Size |           Objects | Function                                        | Location                                                                           |
| ------: | -----------: | ------------: | ------------------: | ----------------: | ----------------------------------------------- | ---------------------------------------------------------------------------------- |
| +463.1% |  +36.734 MiB | 20.0% → 63.3% | 7.93 MiB → 44.7 MiB |    1,992 → 11,216 | `0xfa6bf`                                       | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`                                  |
| +461.6% |  +36.729 MiB | 20.0% → 63.4% | 7.96 MiB → 44.7 MiB |    6,993 → 14,955 | `0x109623`                                      | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`                                  |
| +392.0% |  +36.413 MiB | 23.4% → 64.8% | 9.29 MiB → 45.7 MiB |   53,556 → 56,930 | `__json_value_module_MOD_parse_number`          | `./json_value_module.F90`                                                          |
| +428.3% |  +36.394 MiB | 21.4% → 63.7% |  8.5 MiB → 44.9 MiB |   31,979 → 35,064 | `__json_value_module_MOD_string_to_int`         | `./json_value_module.F90`                                                          |
| +359.1% |  +36.218 MiB | 25.4% → 65.7% | 10.1 MiB → 46.3 MiB |   13,656 → 17,633 | `0x1c1b3`                                       | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`                                  |
| +380.2% |  +35.864 MiB | 23.8% → 64.2% | 9.43 MiB → 45.3 MiB |   34,566 → 35,323 | `__json_string_utilities_MOD_string_to_integer` | `./json_string_utilities.F90`                                                      |
|  +83.2% |  +31.208 MiB | 94.5% → 97.5% | 37.5 MiB → 68.7 MiB | 477,898 → 436,620 | `__json_value_module_MOD_parse_object`          | `./json_value_module.F90`                                                          |
|  +59.0% |   +10.92 MiB | 46.6% → 41.7% | 18.5 MiB → 29.4 MiB | 232,052 → 220,300 | `__json_value_module_MOD_parse_array`           | `./json_value_module.F90`                                                          |
|  +13.2% |   +1.851 MiB | 35.4% → 22.5% |   14 MiB → 15.9 MiB | 186,584 → 172,869 | `__json_value_module_MOD_json_parse_file`       | `./json_value_module.F90`                                                          |
|  +13.5% |   +1.845 MiB | 34.4% → 22.0% | 13.7 MiB → 15.5 MiB | 177,395 → 165,407 | `__json_file_module_MOD_json_file_load`         | `./json_file_module.F90`                                                           |
|   +9.9% |   +1.412 MiB | 35.9% → 22.2% | 14.3 MiB → 15.7 MiB | 173,325 → 160,528 | `MAIN__`                                        | `/out/profile.f90`                                                                 |
|  +10.2% |   +1.387 MiB | 34.3% → 21.3% |   13.6 MiB → 15 MiB | 163,103 → 149,886 | `main`                                          | `/out/profile.f90`                                                                 |
|  +21.5% | +927.627 KiB |  10.6% → 7.3% | 4.22 MiB → 5.13 MiB |   63,922 → 66,912 | `__json_value_module_MOD_parse_value`           | `./json_value_module.F90`                                                          |
|     new | +837.843 KiB |   0.0% → 1.2% |       0 B → 838 KiB |         0 → 7,614 | `0x22aaf`                                       | `/tmp/nix-shell.NcwiQ3/profiler-md-input-generation.fqUYfr/fortran-current/binary` |
|     new | +772.932 KiB |   0.0% → 1.1% |       0 B → 773 KiB |         0 → 3,556 | `0xffff8a179d67`                                | `<unknown>`                                                                        |
|     new | +712.164 KiB |   0.0% → 1.0% |       0 B → 712 KiB |         0 → 6,826 | `0x1e85f`                                       | `[stack]`                                                                          |
|     new | +693.281 KiB |   0.0% → 1.0% |       0 B → 693 KiB |           0 → 170 | `0x1d11f`                                       | `[stack]`                                                                          |
|     new |  +600.14 KiB |   0.0% → 0.8% |       0 B → 600 KiB |         0 → 5,487 | `0x1e5ef`                                       | `[stack]`                                                                          |
|     new | +415.968 KiB |   0.0% → 0.6% |       0 B → 416 KiB |           0 → 102 | `0xaaaad7bfa0df`                                | `<unknown>`                                                                        |
|     new |  +234.75 KiB |   0.0% → 0.3% |       0 B → 235 KiB |           0 → 939 | `0x1f397`                                       | `/tmp/nix-shell.NcwiQ3/profiler-md-input-generation.fqUYfr/fortran-current/binary` |

##### Ours

|  Change |        Delta |             % |                Size |           Objects | Function                                        | Location                                                                           |
| ------: | -----------: | ------------: | ------------------: | ----------------: | ----------------------------------------------- | ---------------------------------------------------------------------------------- |
| +392.0% |  +36.413 MiB | 23.4% → 64.8% | 9.29 MiB → 45.7 MiB |   53,556 → 56,930 | `__json_value_module_MOD_parse_number`          | `./json_value_module.F90`                                                          |
| +428.3% |  +36.394 MiB | 21.4% → 63.7% |  8.5 MiB → 44.9 MiB |   31,979 → 35,064 | `__json_value_module_MOD_string_to_int`         | `./json_value_module.F90`                                                          |
| +380.2% |  +35.864 MiB | 23.8% → 64.2% | 9.43 MiB → 45.3 MiB |   34,566 → 35,323 | `__json_string_utilities_MOD_string_to_integer` | `./json_string_utilities.F90`                                                      |
|  +83.2% |  +31.208 MiB | 94.5% → 97.5% | 37.5 MiB → 68.7 MiB | 477,898 → 436,620 | `__json_value_module_MOD_parse_object`          | `./json_value_module.F90`                                                          |
|  +59.0% |   +10.92 MiB | 46.6% → 41.7% | 18.5 MiB → 29.4 MiB | 232,052 → 220,300 | `__json_value_module_MOD_parse_array`           | `./json_value_module.F90`                                                          |
|  +13.2% |   +1.851 MiB | 35.4% → 22.5% |   14 MiB → 15.9 MiB | 186,584 → 172,869 | `__json_value_module_MOD_json_parse_file`       | `./json_value_module.F90`                                                          |
|  +13.5% |   +1.845 MiB | 34.4% → 22.0% | 13.7 MiB → 15.5 MiB | 177,395 → 165,407 | `__json_file_module_MOD_json_file_load`         | `./json_file_module.F90`                                                           |
|   +9.9% |   +1.412 MiB | 35.9% → 22.2% | 14.3 MiB → 15.7 MiB | 173,325 → 160,528 | `MAIN__`                                        | `/out/profile.f90`                                                                 |
|  +10.2% |   +1.387 MiB | 34.3% → 21.3% |   13.6 MiB → 15 MiB | 163,103 → 149,886 | `main`                                          | `/out/profile.f90`                                                                 |
|  +21.5% | +927.627 KiB |  10.6% → 7.3% | 4.22 MiB → 5.13 MiB |   63,922 → 66,912 | `__json_value_module_MOD_parse_value`           | `./json_value_module.F90`                                                          |
|     new | +837.843 KiB |   0.0% → 1.2% |       0 B → 838 KiB |         0 → 7,614 | `0x22aaf`                                       | `/tmp/nix-shell.NcwiQ3/profiler-md-input-generation.fqUYfr/fortran-current/binary` |
|     new | +712.164 KiB |   0.0% → 1.0% |       0 B → 712 KiB |         0 → 6,826 | `0x1e85f`                                       | `[stack]`                                                                          |
|     new | +693.281 KiB |   0.0% → 1.0% |       0 B → 693 KiB |           0 → 170 | `0x1d11f`                                       | `[stack]`                                                                          |
|     new |  +600.14 KiB |   0.0% → 0.8% |       0 B → 600 KiB |         0 → 5,487 | `0x1e5ef`                                       | `[stack]`                                                                          |
|     new |  +234.75 KiB |   0.0% → 0.3% |       0 B → 235 KiB |           0 → 939 | `0x1f397`                                       | `/tmp/nix-shell.NcwiQ3/profiler-md-input-generation.fqUYfr/fortran-current/binary` |
|     new |   +234.5 KiB |   0.0% → 0.3% |       0 B → 235 KiB |           0 → 938 | `0x1deaf`                                       | `[stack]`                                                                          |
|     new |   +234.5 KiB |   0.0% → 0.3% |       0 B → 235 KiB |           0 → 938 | `0x1dd67`                                       | `[stack]`                                                                          |
|     new | +205.406 KiB |   0.0% → 0.3% |       0 B → 205 KiB |         0 → 1,878 | `0x1d36f`                                       | `[stack]`                                                                          |
|     new | +205.296 KiB |   0.0% → 0.3% |       0 B → 205 KiB |         0 → 1,877 | `0x1dd9f`                                       | `[stack]`                                                                          |
|     new | +205.078 KiB |   0.0% → 0.3% |       0 B → 205 KiB |         0 → 1,875 | `0x1d46f`                                       | `[stack]`                                                                          |

##### Native

|   Change |        Delta |             % |                Size |         Objects | Function             | Location                                           |
| -------: | -----------: | ------------: | ------------------: | --------------: | -------------------- | -------------------------------------------------- |
|  +463.1% |  +36.734 MiB | 20.0% → 63.3% | 7.93 MiB → 44.7 MiB |  1,992 → 11,216 | `0xfa6bf`            | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`  |
|  +461.6% |  +36.729 MiB | 20.0% → 63.4% | 7.96 MiB → 44.7 MiB |  6,993 → 14,955 | `0x109623`           | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`  |
|  +359.1% |  +36.218 MiB | 25.4% → 65.7% | 10.1 MiB → 46.3 MiB | 13,656 → 17,633 | `0x1c1b3`            | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`  |
|      new | +772.932 KiB |   0.0% → 1.1% |       0 B → 773 KiB |       0 → 3,556 | `0xffff8a179d67`     | `<unknown>`                                        |
|      new | +415.968 KiB |   0.0% → 0.6% |       0 B → 416 KiB |         0 → 102 | `0xaaaad7bfa0df`     | `<unknown>`                                        |
|      new | +193.076 KiB |   0.0% → 0.3% |       0 B → 193 KiB |       0 → 3,763 | `0xffff8a178fff`     | `<unknown>`                                        |
|      new | +184.178 KiB |   0.0% → 0.3% |       0 B → 184 KiB |       0 → 2,581 | `0xffff898e003f`     | `<unknown>`                                        |
| +1551.2% |  +97.736 KiB |  <0.1% → 0.1% |   6.3 KiB → 104 KiB |        66 → 645 | `0x3142b`            | `/usr/lib/aarch64-linux-gnu/libtcmalloc.so.4.5.10` |
|      new |  +45.283 KiB |   0.0% → 0.1% |      0 B → 45.3 KiB |       0 → 1,984 | `0xaaaad7a9e7ff`     | `<unknown>`                                        |
|      new |  +34.845 KiB |  0.0% → <0.1% |      0 B → 34.8 KiB |       0 → 2,817 | `0xe95906d9111bd8ff` | `<unknown>`                                        |
|      new |  +33.011 KiB |  0.0% → <0.1% |        0 B → 33 KiB |       0 → 1,878 | `0x55555ffff`        | `<unknown>`                                        |
|      new |  +27.472 KiB |  0.0% → <0.1% |      0 B → 27.5 KiB |       0 → 2,911 | `0xbd4e`             | `<unknown>`                                        |
|    +3.2% |  +16.207 KiB |   1.3% → 0.7% |   510 KiB → 526 KiB |       149 → 135 | `0x5`                | `<unknown>`                                        |
|    +3.5% |  +11.865 KiB |   0.8% → 0.5% |   339 KiB → 351 KiB |   3,547 → 4,330 | `0x1`                | `<unknown>`                                        |
|      new |   +8.164 KiB |  0.0% → <0.1% |      0 B → 8.16 KiB |           0 → 4 | `0xaaaad7b41617`     | `<unknown>`                                        |
|      new |   +8.164 KiB |  0.0% → <0.1% |      0 B → 8.16 KiB |           0 → 4 | `0xaaaad7b4152f`     | `<unknown>`                                        |
|      new |   +8.156 KiB |  0.0% → <0.1% |      0 B → 8.16 KiB |           0 → 2 | `0xaaaad7c56267`     | `<unknown>`                                        |
|      new |   +8.156 KiB |  0.0% → <0.1% |      0 B → 8.16 KiB |           0 → 2 | `0xaaaad7bfbbbf`     | `<unknown>`                                        |
|      new |   +8.156 KiB |  0.0% → <0.1% |      0 B → 8.16 KiB |           0 → 2 | `0xaaaad7b9ddd7`     | `<unknown>`                                        |
|      new |   +8.156 KiB |  0.0% → <0.1% |      0 B → 8.16 KiB |           0 → 2 | `0xaaaad7c288ff`     | `<unknown>`                                        |

#### Improvements

Functions with the largest decrease in bytes allocated within the function and its callees. Categories account for at least 1.0% of self size on the base or the current side.

|  Change |        Delta |             % |                Size |           Objects | Function                                           | Location                                                                        |
| ------: | -----------: | ------------: | ------------------: | ----------------: | -------------------------------------------------- | ------------------------------------------------------------------------------- |
|  -47.3% |   -5.126 MiB |  27.3% → 8.1% |  10.8 MiB → 5.7 MiB |   99,717 → 56,608 | `__json_value_module_MOD_parse_string`             | `./json_value_module.F90`                                                       |
|   -9.8% |   -1.252 MiB | 32.3% → 16.4% | 12.8 MiB → 11.6 MiB | 152,764 → 140,613 | `0x27743`                                          | `/usr/lib/aarch64-linux-gnu/libc.so.6`                                          |
| removed |    -1.15 MiB |   2.9% → 0.0% |      1.15 MiB → 0 B |         9,495 → 0 | `0x228cf`                                          | `/tmp/nix-shell.NcwiQ3/profiler-md-input-generation.fqUYfr/fortran-base/binary` |
| removed | -920.703 KiB |   2.3% → 0.0% |       921 KiB → 0 B |         7,343 → 0 | `0x1f22f`                                          | `[stack]`                                                                       |
|  -52.8% | -784.781 KiB |   3.7% → 1.0% |  1.45 MiB → 703 KiB |    17,614 → 9,633 | `0x1093fb`                                         | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`                               |
| removed | -711.382 KiB |   1.7% → 0.0% |       711 KiB → 0 B |         6,726 → 0 | `0x1f47f`                                          | `[stack]`                                                                       |
|   -5.5% | -649.707 KiB | 28.9% → 15.4% | 11.5 MiB → 10.8 MiB | 138,759 → 129,594 | `0x27817`                                          | `/usr/lib/aarch64-linux-gnu/libc.so.6`                                          |
|  -56.7% | -542.454 KiB |   2.4% → 0.6% |   958 KiB → 415 KiB |       2,522 → 203 | `__json_value_module_MOD_json_get_by_path_default` | `./json_value_module.F90`                                                       |
|  -56.7% | -542.454 KiB |   2.4% → 0.6% |   958 KiB → 415 KiB |       2,522 → 203 | `__json_value_module_MOD_json_get_by_path`         | `./json_value_module.F90`                                                       |
|  -56.6% | -541.624 KiB |   2.4% → 0.6% |   958 KiB → 416 KiB |     2,534 → 1,065 | `__json_value_module_MOD_json_get_string_by_path`  | `./json_get_scalar_by_path.inc`                                                 |
|  -56.6% | -541.624 KiB |   2.4% → 0.6% |   958 KiB → 416 KiB |     2,534 → 1,065 | `__json_file_module_MOD_json_file_get_string`      | `./json_file_module.F90`                                                        |
|  -57.2% | -528.468 KiB |   2.3% → 0.5% |   923 KiB → 395 KiB |    11,654 → 6,407 | `0x10b28f`                                         | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`                               |
|  -65.2% |     -486 KiB |   1.8% → 0.4% |   745 KiB → 259 KiB |     5,962 → 2,074 | `0x112ecb`                                         | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`                               |
|  -35.2% | -481.233 KiB |   3.4% → 1.2% |  1.33 MiB → 885 KiB |         340 → 219 | `0x4`                                              | `<unknown>`                                                                     |
|   -4.3% | -454.053 KiB | 26.2% → 14.1% | 10.4 MiB → 9.95 MiB | 124,114 → 118,144 | `_start`                                           | `<unknown>`                                                                     |
| removed | -415.015 KiB |   1.0% → 0.0% |       415 KiB → 0 B |           201 → 0 | `0xaaaab89e4197`                                   | `<unknown>`                                                                     |
| removed |  -411.89 KiB |   1.0% → 0.0% |       412 KiB → 0 B |           101 → 0 | `0xaaaab89e413f`                                   | `<unknown>`                                                                     |
| removed | -397.061 KiB |   1.0% → 0.0% |       397 KiB → 0 B |         2,122 → 0 | `0xffffa218003f`                                   | `<unknown>`                                                                     |
| removed |  -280.39 KiB |   0.7% → 0.0% |       280 KiB → 0 B |         2,844 → 0 | `0xffffa2a19d67`                                   | `<unknown>`                                                                     |
|  -45.3% | -256.312 KiB |   1.4% → 0.4% |   565 KiB → 309 KiB |     5,969 → 3,235 | `0x1c24b`                                          | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`                               |

##### Ours

|  Change |        Delta |            % |               Size |         Objects | Function                                           | Location                                                                        |
| ------: | -----------: | -----------: | -----------------: | --------------: | -------------------------------------------------- | ------------------------------------------------------------------------------- |
|  -47.3% |   -5.126 MiB | 27.3% → 8.1% | 10.8 MiB → 5.7 MiB | 99,717 → 56,608 | `__json_value_module_MOD_parse_string`             | `./json_value_module.F90`                                                       |
| removed |    -1.15 MiB |  2.9% → 0.0% |     1.15 MiB → 0 B |       9,495 → 0 | `0x228cf`                                          | `/tmp/nix-shell.NcwiQ3/profiler-md-input-generation.fqUYfr/fortran-base/binary` |
| removed | -920.703 KiB |  2.3% → 0.0% |      921 KiB → 0 B |       7,343 → 0 | `0x1f22f`                                          | `[stack]`                                                                       |
| removed | -711.382 KiB |  1.7% → 0.0% |      711 KiB → 0 B |       6,726 → 0 | `0x1f47f`                                          | `[stack]`                                                                       |
|  -56.7% | -542.454 KiB |  2.4% → 0.6% |  958 KiB → 415 KiB |     2,522 → 203 | `__json_value_module_MOD_json_get_by_path_default` | `./json_value_module.F90`                                                       |
|  -56.7% | -542.454 KiB |  2.4% → 0.6% |  958 KiB → 415 KiB |     2,522 → 203 | `__json_value_module_MOD_json_get_by_path`         | `./json_value_module.F90`                                                       |
|  -56.6% | -541.624 KiB |  2.4% → 0.6% |  958 KiB → 416 KiB |   2,534 → 1,065 | `__json_value_module_MOD_json_get_string_by_path`  | `./json_get_scalar_by_path.inc`                                                 |
|  -56.6% | -541.624 KiB |  2.4% → 0.6% |  958 KiB → 416 KiB |   2,534 → 1,065 | `__json_file_module_MOD_json_file_get_string`      | `./json_file_module.F90`                                                        |
| removed |  -234.75 KiB |  0.6% → 0.0% |      235 KiB → 0 B |         939 → 0 | `0x1f237`                                          | `/tmp/nix-shell.NcwiQ3/profiler-md-input-generation.fqUYfr/fortran-base/binary` |
| removed |   -234.5 KiB |  0.6% → 0.0% |      235 KiB → 0 B |         938 → 0 | `0x1eaff`                                          | `[stack]`                                                                       |
| removed |   -234.5 KiB |  0.6% → 0.0% |      235 KiB → 0 B |         938 → 0 | `0x1e9b7`                                          | `[stack]`                                                                       |
| removed |  -234.25 KiB |  0.6% → 0.0% |      234 KiB → 0 B |         937 → 0 | `0x1ebff`                                          | `[stack]`                                                                       |
| removed | -205.406 KiB |  0.5% → 0.0% |      205 KiB → 0 B |       1,878 → 0 | `0x1dfbf`                                          | `[stack]`                                                                       |
| removed | -205.406 KiB |  0.5% → 0.0% |      205 KiB → 0 B |       1,878 → 0 | `0x1e0bf`                                          | `[stack]`                                                                       |
| removed | -205.187 KiB |  0.5% → 0.0% |      205 KiB → 0 B |       1,876 → 0 | `0x1e9ef`                                          | `[stack]`                                                                       |
| removed | -113.625 KiB |  0.3% → 0.0% |      114 KiB → 0 B |         909 → 0 | `0x1eb1f`                                          | `[stack]`                                                                       |
| removed |  -99.421 KiB |  0.2% → 0.0% |     99.4 KiB → 0 B |         909 → 0 | `0x1e7cf`                                          | `[stack]`                                                                       |
| removed |  -99.421 KiB |  0.2% → 0.0% |     99.4 KiB → 0 B |         909 → 0 | `0x1e687`                                          | `[stack]`                                                                       |
| removed |  -97.781 KiB |  0.2% → 0.0% |     97.8 KiB → 0 B |         894 → 0 | `0x1e337`                                          | `[stack]`                                                                       |
| removed |  -91.984 KiB |  0.2% → 0.0% |       92 KiB → 0 B |         841 → 0 | `0x1e49f`                                          | `[stack]`                                                                       |

##### Native

|  Change |        Delta |             % |                Size |           Objects | Function         | Location                                          |
| ------: | -----------: | ------------: | ------------------: | ----------------: | ---------------- | ------------------------------------------------- |
|   -9.8% |   -1.252 MiB | 32.3% → 16.4% | 12.8 MiB → 11.6 MiB | 152,764 → 140,613 | `0x27743`        | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  -52.8% | -784.781 KiB |   3.7% → 1.0% |  1.45 MiB → 703 KiB |    17,614 → 9,633 | `0x1093fb`       | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|   -5.5% | -649.707 KiB | 28.9% → 15.4% | 11.5 MiB → 10.8 MiB | 138,759 → 129,594 | `0x27817`        | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  -57.2% | -528.468 KiB |   2.3% → 0.5% |   923 KiB → 395 KiB |    11,654 → 6,407 | `0x10b28f`       | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  -65.2% |     -486 KiB |   1.8% → 0.4% |   745 KiB → 259 KiB |     5,962 → 2,074 | `0x112ecb`       | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  -35.2% | -481.233 KiB |   3.4% → 1.2% |  1.33 MiB → 885 KiB |         340 → 219 | `0x4`            | `<unknown>`                                       |
|   -4.3% | -454.053 KiB | 26.2% → 14.1% | 10.4 MiB → 9.95 MiB | 124,114 → 118,144 | `_start`         | `<unknown>`                                       |
| removed | -415.015 KiB |   1.0% → 0.0% |       415 KiB → 0 B |           201 → 0 | `0xaaaab89e4197` | `<unknown>`                                       |
| removed |  -411.89 KiB |   1.0% → 0.0% |       412 KiB → 0 B |           101 → 0 | `0xaaaab89e413f` | `<unknown>`                                       |
| removed | -397.061 KiB |   1.0% → 0.0% |       397 KiB → 0 B |         2,122 → 0 | `0xffffa218003f` | `<unknown>`                                       |
| removed |  -280.39 KiB |   0.7% → 0.0% |       280 KiB → 0 B |         2,844 → 0 | `0xffffa2a19d67` | `<unknown>`                                       |
|  -45.3% | -256.312 KiB |   1.4% → 0.4% |   565 KiB → 309 KiB |     5,969 → 3,235 | `0x1c24b`        | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  -45.9% | -256.312 KiB |   1.4% → 0.4% |   558 KiB → 302 KiB |     5,950 → 3,216 | `0x10c847`       | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  -45.9% | -256.312 KiB |   1.4% → 0.4% |   558 KiB → 302 KiB |     5,950 → 3,216 | `0x10ab63`       | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  -45.9% | -256.312 KiB |   1.4% → 0.4% |   558 KiB → 302 KiB |     5,950 → 3,216 | `0x10b283`       | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| removed | -163.767 KiB |   0.4% → 0.0% |       164 KiB → 0 B |           671 → 0 | `0xffffa2190027` | `<unknown>`                                       |
| removed | -163.467 KiB |   0.4% → 0.0% |       163 KiB → 0 B |           458 → 0 | `0x1ff`          | `<unknown>`                                       |
|  -71.7% |  -96.975 KiB |   0.3% → 0.1% |  135 KiB → 38.2 KiB |       2,338 → 528 | `0x0`            | `<unknown>`                                       |
| removed |  -83.404 KiB |   0.2% → 0.0% |      83.4 KiB → 0 B |         3,799 → 0 | `0xffffa2a18fff` | `<unknown>`                                       |
|  -23.9% |  -42.468 KiB |   0.4% → 0.2% |   178 KiB → 135 KiB |     5,692 → 4,333 | `0x112ebb`       | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

#### Callees

Callees with the largest change in contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `0xfa6bf` (`/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|  Change |       Delta |      % |                Size |        Objects | Callee    | Location                                          |
| ------: | ----------: | -----: | ------------------: | -------------: | --------- | ------------------------------------------------- |
| +463.1% | +36.734 MiB | 100.0% | 7.93 MiB → 44.7 MiB | 1,992 → 11,216 | `0x1c1b3` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `0x109623` (`/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|  Change |       Delta |              % |                Size |        Objects | Callee    | Location                                          |
| ------: | ----------: | -------------: | ------------------: | -------------: | --------- | ------------------------------------------------- |
| +463.1% | +36.734 MiB | 99.7% → 100.0% | 7.93 MiB → 44.7 MiB | 1,992 → 11,216 | `0xfa6bf` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  -24.9% |  -6.116 KiB |   0.3% → <0.1% | 24.6 KiB → 18.5 KiB |  5,001 → 3,739 | `0xfa6b3` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `__json_value_module_MOD_parse_number` (`./json_value_module.F90`)

|  Change |       Delta |             % |               Size |         Objects | Callee                                   | Location                  |
| ------: | ----------: | ------------: | -----------------: | --------------: | ---------------------------------------- | ------------------------- |
| +428.3% | +36.394 MiB | 91.5% → 98.2% | 8.5 MiB → 44.9 MiB | 31,979 → 35,064 | `__json_value_module_MOD_string_to_int`  | `./json_value_module.F90` |
|   +1.1% |  +1.632 KiB |   1.6% → 0.3% |  148 KiB → 150 KiB | 18,928 → 19,137 | `__json_value_module_MOD_to_integer`     | `./json_value_module.F90` |
|     new |      +256 B |  0.0% → <0.1% |        0 B → 256 B |           0 → 8 | `__json_value_module_MOD_string_to_dble` | `./json_value_module.F90` |

##### `__json_value_module_MOD_string_to_int` (`./json_value_module.F90`)

|  Change |       Delta |      % |               Size |         Objects | Callee                                          | Location                      |
| ------: | ----------: | -----: | -----------------: | --------------: | ----------------------------------------------- | ----------------------------- |
| +428.3% | +36.394 MiB | 100.0% | 8.5 MiB → 44.9 MiB | 31,979 → 35,064 | `__json_string_utilities_MOD_string_to_integer` | `./json_string_utilities.F90` |

##### `__json_string_utilities_MOD_string_to_integer` (`./json_string_utilities.F90`)

|  Change |        Delta |             % |                Size |        Objects | Callee     | Location                                          |
| ------: | -----------: | ------------: | ------------------: | -------------: | ---------- | ------------------------------------------------- |
| +461.6% |  +36.729 MiB | 84.4% → 98.7% | 7.96 MiB → 44.7 MiB | 6,993 → 14,955 | `0x109623` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  -60.6% | -898.562 KiB |  15.3% → 1.3% |  1.45 MiB → 583 KiB | 17,604 → 8,707 | `0x1093fb` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  -24.8% |       -694 B |         <0.1% | 2.73 KiB → 2.05 KiB |  1,857 → 1,099 | `0x118783` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  -13.8% |        -72 B |         <0.1% |       520 B → 448 B |        65 → 56 | `_start`   | `<unknown>`                                       |

##### `__json_value_module_MOD_parse_object` (`./json_value_module.F90`)

|  Change |        Delta |             % |                Size |           Objects | Callee                                 | Location                  |
| ------: | -----------: | ------------: | ------------------: | ----------------: | -------------------------------------- | ------------------------- |
|  +83.7% |  +31.218 MiB | 99.3% → 99.7% | 37.3 MiB → 68.5 MiB | 474,148 → 433,577 | `__json_value_module_MOD_parse_object` | `./json_value_module.F90` |
| +453.4% |  +30.994 MiB | 18.2% → 55.0% | 6.84 MiB → 37.8 MiB |   47,498 → 47,652 | `__json_value_module_MOD_parse_number` | `./json_value_module.F90` |
|  +60.6% |  +11.024 MiB | 48.5% → 42.5% | 18.2 MiB → 29.2 MiB | 225,746 → 214,962 | `__json_value_module_MOD_parse_array`  | `./json_value_module.F90` |
|  -72.4% |   -6.032 MiB |  22.2% → 3.3% |  8.33 MiB → 2.3 MiB |   80,249 → 33,558 | `__json_value_module_MOD_parse_string` | `./json_value_module.F90` |
|  +22.4% | +927.627 KiB |  10.8% → 7.2% | 4.04 MiB → 4.95 MiB |   62,254 → 65,244 | `__json_value_module_MOD_parse_value`  | `./json_value_module.F90` |

##### `__json_value_module_MOD_parse_array` (`./json_value_module.F90`)

|  Change |       Delta |             % |                Size |           Objects | Callee                                      | Location                  |
| ------: | ----------: | ------------: | ------------------: | ----------------: | ------------------------------------------- | ------------------------- |
|  +61.0% | +10.993 MiB | 97.4% → 98.6% |     18 MiB → 29 MiB | 227,547 → 216,481 | `__json_value_module_MOD_parse_object`      | `./json_value_module.F90` |
| +221.0% |  +5.419 MiB | 13.3% → 26.8% | 2.45 MiB → 7.87 MiB |     6,058 → 9,278 | `__json_value_module_MOD_parse_number`      | `./json_value_module.F90` |
|   -6.6% | -78.968 KiB |   6.4% → 3.7% |  1.18 MiB → 1.1 MiB |   11,021 → 10,299 | `__json_value_module_MOD_json_value_create` | `./json_value_module.F90` |
|     new | +12.216 KiB |  0.0% → <0.1% |      0 B → 12.2 KiB |         0 → 1,015 | `0xffff8a179d67`                            | `<unknown>`               |
| removed |  -5.359 KiB |  <0.1% → 0.0% |      5.36 KiB → 0 B |           686 → 0 | `0xffffa2a19d67`                            | `<unknown>`               |

##### `__json_value_module_MOD_json_parse_file` (`./json_value_module.F90`)

|  Change |      Delta |             % |                Size |           Objects | Callee                                   | Location                                          |
| ------: | ---------: | ------------: | ------------------: | ----------------: | ---------------------------------------- | ------------------------------------------------- |
|  +14.5% | +1.851 MiB | 91.1% → 92.1% | 12.8 MiB → 14.6 MiB | 186,543 → 172,831 | `__json_value_module_MOD_parse_object`   | `./json_value_module.F90`                         |
|   +0.1% |     +288 B |   1.5% → 1.3% |   217 KiB → 218 KiB |     1,611 → 1,614 | `_start`                                 | `<unknown>`                                       |
|     ~0% |      -36 B |   8.9% → 7.9% |            1.25 MiB |           31 → 29 | `0x10324b`                               | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| removed |       -1 B |  <0.1% → 0.0% |           1 B → 0 B |             1 → 0 | `__json_value_module_MOD_json_parse_end` | `./json_value_module.F90`                         |

##### `__json_file_module_MOD_json_file_load` (`./json_file_module.F90`)

| Change |      Delta |           % |                Size |           Objects | Callee                                    | Location                  |
| -----: | ---------: | ----------: | ------------------: | ----------------: | ----------------------------------------- | ------------------------- |
| +13.5% | +1.845 MiB |      100.0% | 13.7 MiB → 15.5 MiB | 177,395 → 165,407 | `__json_value_module_MOD_json_parse_file` | `./json_value_module.F90` |
|  +0.6% |     +672 B | 0.7% → 0.6% |             102 KiB |         929 → 936 | `_start`                                  | `<unknown>`               |

##### `MAIN__` (`/out/profile.f90`)

|   Change |        Delta |             % |                Size |           Objects | Callee                                                | Location                                          |
| -------: | -----------: | ------------: | ------------------: | ----------------: | ----------------------------------------------------- | ------------------------------------------------- |
|   +13.6% |   +1.815 MiB | 93.4% → 96.6% | 13.3 MiB → 15.1 MiB | 170,767 → 157,621 | `__json_file_module_MOD_json_file_load`               | `./json_file_module.F90`                          |
|   -56.6% | -541.624 KiB |   6.6% → 2.6% |   958 KiB → 416 KiB |     2,534 → 1,065 | `__json_file_module_MOD_json_file_get_string`         | `./json_file_module.F90`                          |
| +1908.7% | +113.625 KiB |  <0.1% → 0.7% |  5.95 KiB → 120 KiB |           9 → 918 | `0x1093fb`                                            | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  +100.9% |       +872 B |         <0.1% |     864 B → 1.7 KiB |           9 → 881 | `_start`                                              | `<unknown>`                                       |
|    -4.6% |        -99 B |         <0.1% | 2.12 KiB → 2.02 KiB |                11 | `__json_file_module_MOD_initialize_json_core_in_file` | `./json_file_module.F90`                          |

##### `main` (`/out/profile.f90`)

| Change |      Delta |           % |              Size |           Objects | Callee   | Location           |
| -----: | ---------: | ----------: | ----------------: | ----------------: | -------- | ------------------ |
| +10.2% | +1.387 MiB |      100.0% | 13.6 MiB → 15 MiB | 163,103 → 149,886 | `MAIN__` | `/out/profile.f90` |
|    ~0% |       +1 B | 1.5% → 1.3% |           203 KiB |     1,856 → 1,857 | `_start` | `<unknown>`        |

##### `__json_value_module_MOD_parse_value` (`./json_value_module.F90`)

|  Change |        Delta |             % |                Size |         Objects | Callee                                 | Location                  |
| ------: | -----------: | ------------: | ------------------: | --------------: | -------------------------------------- | ------------------------- |
|  +39.9% | +928.396 KiB | 53.9% → 62.0% | 2.27 MiB → 3.18 MiB | 15,629 → 19,211 | `__json_value_module_MOD_parse_string` | `./json_value_module.F90` |
| removed |  -90.125 KiB |   2.1% → 0.0% |      90.1 KiB → 0 B |         824 → 0 | `0x1e39f`                              | `[stack]`                 |
|     new |  +90.125 KiB |   0.0% → 1.7% |      0 B → 90.1 KiB |         0 → 824 | `0x1d74f`                              | `[stack]`                 |
|  -12.8% |       -677 B |          0.1% |  5.16 KiB → 4.5 KiB |   5,280 → 4,603 | `__json_value_module_MOD_to_string`    | `./json_value_module.F90` |

##### `0x22aaf` (`/tmp/nix-shell.NcwiQ3/profiler-md-input-generation.fqUYfr/fortran-current/binary`)

| Change |        Delta |            % |           Size |   Objects | Callee    | Location    |
| -----: | -----------: | -----------: | -------------: | --------: | --------- | ----------- |
|    new | +461.156 KiB | 0.0% → 55.0% |  0 B → 461 KiB | 0 → 4,170 | `_start`  | `<unknown>` |
|    new | +280.437 KiB | 0.0% → 33.5% |  0 B → 280 KiB | 0 → 2,564 | `0x1e5ef` | `[stack]`   |
|    new |   +96.25 KiB | 0.0% → 11.5% | 0 B → 96.3 KiB |   0 → 880 | `0x1e85f` | `[stack]`   |

##### `0xffff8a179d67` (`<unknown>`)

| Change |        Delta |            % |           Size |   Objects | Callee           | Location    |
| -----: | -----------: | -----------: | -------------: | --------: | ---------------- | ----------- |
|    new | +758.759 KiB | 0.0% → 98.2% |  0 B → 759 KiB | 0 → 2,827 | `_start`         | `<unknown>` |
|    new |   +6.213 KiB |  0.0% → 0.8% | 0 B → 6.21 KiB |   0 → 273 | `0xaaaad7a9e7ff` | `<unknown>` |
|    new |   +3.488 KiB |  0.0% → 0.5% | 0 B → 3.49 KiB |    0 → 38 | `0x5d`           | `<unknown>` |
|    new |   +1.121 KiB |  0.0% → 0.1% | 0 B → 1.12 KiB |    0 → 82 | `0xd`            | `<unknown>` |
|    new |       +870 B |  0.0% → 0.1% |    0 B → 870 B |    0 → 10 | `0x56`           | `<unknown>` |

##### `0x1e85f` (`[stack]`)

| Change |        Delta |            % |           Size |   Objects | Callee                                    | Location                  |
| -----: | -----------: | -----------: | -------------: | --------: | ----------------------------------------- | ------------------------- |
|    new | +409.718 KiB | 0.0% → 57.5% |  0 B → 410 KiB | 0 → 3,746 | `_start`                                  | `<unknown>`               |
|    new | +205.406 KiB | 0.0% → 28.8% |  0 B → 205 KiB | 0 → 1,878 | `__json_value_module_MOD_parse_object`    | `./json_value_module.F90` |
|    new |  +92.312 KiB | 0.0% → 13.0% | 0 B → 92.3 KiB |   0 → 844 | `__json_value_module_MOD_parse_value`     | `./json_value_module.F90` |
|    new |   +2.078 KiB |  0.0% → 0.3% | 0 B → 2.08 KiB |    0 → 19 | `__json_value_module_MOD_pop_char.part.0` | `./json_value_module.F90` |
|    new |   +1.867 KiB |  0.0% → 0.3% | 0 B → 1.87 KiB |   0 → 239 | `0xaaaad7a9e7ff`                          | `<unknown>`               |

##### `0x1d11f` (`[stack]`)

| Change |        Delta |             % |          Size | Objects | Callee           | Location    |
| -----: | -----------: | ------------: | ------------: | ------: | ---------------- | ----------- |
|    new | +693.281 KiB | 0.0% → 100.0% | 0 B → 693 KiB | 0 → 170 | `0xffff8a179d67` | `<unknown>` |

##### `0x1e5ef` (`[stack]`)

| Change |        Delta |            % |          Size |   Objects | Callee    | Location    |
| -----: | -----------: | -----------: | ------------: | --------: | --------- | ----------- |
|    new | +313.468 KiB | 0.0% → 52.2% | 0 B → 313 KiB | 0 → 2,866 | `0x1e85f` | `[stack]`   |
|    new | +286.671 KiB | 0.0% → 47.8% | 0 B → 287 KiB | 0 → 2,621 | `_start`  | `<unknown>` |

##### `0xaaaad7bfa0df` (`<unknown>`)

| Change |        Delta |             % |          Size | Objects | Callee   | Location    |
| -----: | -----------: | ------------: | ------------: | ------: | -------- | ----------- |
|    new | +415.968 KiB | 0.0% → 100.0% | 0 B → 416 KiB | 0 → 102 | `_start` | `<unknown>` |

##### `0x1f397` (`/tmp/nix-shell.NcwiQ3/profiler-md-input-generation.fqUYfr/fortran-current/binary`)

| Change |       Delta |             % |          Size | Objects | Callee   | Location    |
| -----: | ----------: | ------------: | ------------: | ------: | -------- | ----------- |
|    new | +234.75 KiB | 0.0% → 100.0% | 0 B → 235 KiB | 0 → 939 | `_start` | `<unknown>` |

##### `0x1deaf` (`[stack]`)

| Change |      Delta |             % |          Size | Objects | Callee   | Location    |
| -----: | ---------: | ------------: | ------------: | ------: | -------- | ----------- |
|    new | +234.5 KiB | 0.0% → 100.0% | 0 B → 235 KiB | 0 → 938 | `_start` | `<unknown>` |

##### `0x1dd67` (`[stack]`)

| Change |      Delta |             % |          Size | Objects | Callee    | Location  |
| -----: | ---------: | ------------: | ------------: | ------: | --------- | --------- |
|    new | +234.5 KiB | 0.0% → 100.0% | 0 B → 235 KiB | 0 → 938 | `0x1deaf` | `[stack]` |

##### `0x1d36f` (`[stack]`)

| Change |        Delta |             % |          Size |   Objects | Callee   | Location    |
| -----: | -----------: | ------------: | ------------: | --------: | -------- | ----------- |
|    new | +205.406 KiB | 0.0% → 100.0% | 0 B → 205 KiB | 0 → 1,878 | `_start` | `<unknown>` |

##### `0x1dd9f` (`[stack]`)

| Change |        Delta |            % |          Size |   Objects | Callee                                 | Location                  |
| -----: | -----------: | -----------: | ------------: | --------: | -------------------------------------- | ------------------------- |
|    new | +205.187 KiB | 0.0% → 99.9% | 0 B → 205 KiB | 0 → 1,876 | `__json_value_module_MOD_parse_string` | `./json_value_module.F90` |
|    new |       +112 B |  0.0% → 0.1% |   0 B → 112 B |     0 → 1 | `0x9b6e1dd8a732948d`                   | `<unknown>`               |

##### `0x1d46f` (`[stack]`)

| Change |        Delta |            % |           Size | Objects | Callee    | Location                                                                           |
| -----: | -----------: | -----------: | -------------: | ------: | --------- | ---------------------------------------------------------------------------------- |
|    new | +100.296 KiB | 0.0% → 48.9% |  0 B → 100 KiB | 0 → 917 | `main`    | `/out/profile.f90`                                                                 |
|    new |   +99.64 KiB | 0.0% → 48.6% | 0 B → 99.6 KiB | 0 → 911 | `0x22aaf` | `/tmp/nix-shell.NcwiQ3/profiler-md-input-generation.fqUYfr/fortran-current/binary` |
|    new |    +5.14 KiB |  0.0% → 2.5% | 0 B → 5.14 KiB |  0 → 47 | `0x1e5ef` | `[stack]`                                                                          |

##### `0xffff8a178fff` (`<unknown>`)

| Change |       Delta |            % |           Size |   Objects | Callee    | Location                                           |
| -----: | ----------: | -----------: | -------------: | --------: | --------- | -------------------------------------------------- |
|    new | +119.75 KiB | 0.0% → 62.0% |  0 B → 120 KiB |   0 → 965 | `0x3143b` | `/usr/lib/aarch64-linux-gnu/libtcmalloc.so.4.5.10` |
|    new |  +43.33 KiB | 0.0% → 22.4% | 0 B → 43.3 KiB |   0 → 910 | `_start`  | `<unknown>`                                        |
|    new |  +29.82 KiB | 0.0% → 15.4% | 0 B → 29.8 KiB | 0 → 1,878 | `0x3131f` | `/usr/lib/aarch64-linux-gnu/libtcmalloc.so.4.5.10` |
|    new |      +180 B |  0.0% → 0.1% |    0 B → 180 B |    0 → 10 | `0x3142b` | `/usr/lib/aarch64-linux-gnu/libtcmalloc.so.4.5.10` |

##### `0xffff898e003f` (`<unknown>`)

| Change |       Delta |            % |           Size |   Objects | Callee    | Location                                           |
| -----: | ----------: | -----------: | -------------: | --------: | --------- | -------------------------------------------------- |
|    new | +97.671 KiB | 0.0% → 53.0% | 0 B → 97.7 KiB |   0 → 893 | `0x2f9e7` | `/usr/lib/aarch64-linux-gnu/libtcmalloc.so.4.5.10` |
|    new | +86.506 KiB | 0.0% → 47.0% | 0 B → 86.5 KiB | 0 → 1,688 | `_start`  | `<unknown>`                                        |

##### `0x3142b` (`/usr/lib/aarch64-linux-gnu/libtcmalloc.so.4.5.10`)

|    Change |       Delta |            % |             Size |  Objects | Callee    | Location    |
| --------: | ----------: | -----------: | ---------------: | -------: | --------- | ----------- |
| +55252.2% | +97.123 KiB | 2.8% → 93.5% | 180 B → 97.3 KiB | 10 → 495 | `_start`  | `<unknown>` |
|   removed |  -6.125 KiB | 97.2% → 0.0% |   6.13 KiB → 0 B |   56 → 0 | `0x1e31f` | `[stack]`   |
|       new |  +6.125 KiB |  0.0% → 5.9% |   0 B → 6.13 KiB |   0 → 56 | `0x1d6cf` | `[stack]`   |
|       new |      +340 B |  0.0% → 0.3% |      0 B → 340 B |   0 → 85 | `0x1d34f` | `[stack]`   |
|       new |      +288 B |  0.0% → 0.3% |      0 B → 288 B |    0 → 9 | `0x1d27f` | `[stack]`   |

##### `0xaaaad7a9e7ff` (`<unknown>`)

| Change |       Delta |            % |           Size |   Objects | Callee           | Location    |
| -----: | ----------: | -----------: | -------------: | --------: | ---------------- | ----------- |
|    new | +25.816 KiB | 0.0% → 57.0% | 0 B → 25.8 KiB | 0 → 1,070 | `_start`         | `<unknown>` |
|    new | +12.116 KiB | 0.0% → 26.8% | 0 B → 12.1 KiB |   0 → 617 | `0xffff8a179d67` | `<unknown>` |
|    new |   +7.35 KiB | 0.0% → 16.2% | 0 B → 7.35 KiB |   0 → 297 | `0xffff8a178fff` | `<unknown>` |

##### `0xe95906d9111bd8ff` (`<unknown>`)

| Change |       Delta |            % |           Size |   Objects | Callee        | Location    |
| -----: | ----------: | -----------: | -------------: | --------: | ------------- | ----------- |
|    new | +33.011 KiB | 0.0% → 94.7% |   0 B → 33 KiB | 0 → 1,878 | `0x55555ffff` | `<unknown>` |
|    new |  +1.833 KiB |  0.0% → 5.3% | 0 B → 1.83 KiB |   0 → 939 | `_start`      | `<unknown>` |

##### `0x55555ffff` (`<unknown>`)

| Change |       Delta |             % |         Size |   Objects | Callee   | Location    |
| -----: | ----------: | ------------: | -----------: | --------: | -------- | ----------- |
|    new | +33.011 KiB | 0.0% → 100.0% | 0 B → 33 KiB | 0 → 1,878 | `_start` | `<unknown>` |

##### `0xbd4e` (`<unknown>`)

| Change |       Delta |            % |           Size |   Objects | Callee    | Location    |
| -----: | ----------: | -----------: | -------------: | --------: | --------- | ----------- |
|    new | +20.031 KiB | 0.0% → 72.9% |   0 B → 20 KiB | 0 → 1,963 | `_start`  | `<unknown>` |
|    new |  +7.335 KiB | 0.0% → 26.7% | 0 B → 7.34 KiB |   0 → 939 | `0x1e0af` | `[stack]`   |
|    new |      +108 B |  0.0% → 0.4% |    0 B → 108 B |     0 → 9 | `0x1e02f` | `[stack]`   |

##### `0x5` (`<unknown>`)

|  Change |       Delta |           % |                Size | Objects | Callee           | Location    |
| ------: | ----------: | ----------: | ------------------: | ------: | ---------------- | ----------- |
|  +65.9% | +16.195 KiB | 4.8% → 7.8% | 24.6 KiB → 40.8 KiB | 26 → 10 | `_start`         | `<unknown>` |
| removed |  -8.156 KiB | 1.6% → 0.0% |      8.16 KiB → 0 B |   2 → 0 | `0xaaaab884885f` | `<unknown>` |
| removed |  -8.156 KiB | 1.6% → 0.0% |      8.16 KiB → 0 B |   2 → 0 | `0xaaaab89894bf` | `<unknown>` |
| removed |  -8.156 KiB | 1.6% → 0.0% |      8.16 KiB → 0 B |   2 → 0 | `0xaaaab88a5dbf` | `<unknown>` |
| removed |  -8.156 KiB | 1.6% → 0.0% |      8.16 KiB → 0 B |   2 → 0 | `0xaaaab87a1e17` | `<unknown>` |

##### `0x1` (`<unknown>`)

|  Change |       Delta |             % |                Size |     Objects | Callee               | Location                                           |
| ------: | ----------: | ------------: | ------------------: | ----------: | -------------------- | -------------------------------------------------- |
| +906.8% | +12.928 KiB |   0.4% → 4.1% | 1.43 KiB → 14.4 KiB | 938 → 1,739 | `_start`             | `<unknown>`                                        |
| removed |    -1,008 B |   0.3% → 0.0% |       1,008 B → 0 B |       9 → 0 | `0x3361613763343436` | `<unknown>`                                        |
| removed |      -531 B |   0.2% → 0.0% |         531 B → 0 B |       9 → 0 | `0x1`                | `<unknown>`                                        |
|     ~0% |       -81 B | 69.4% → 67.0% |             235 KiB |   761 → 752 | `0x2b167`            | `/usr/lib/aarch64-linux-gnu/libtcmalloc.so.4.5.10` |

##### `0xaaaad7b41617` (`<unknown>`)

| Change |      Delta |            % |           Size | Objects | Callee           | Location    |
| -----: | ---------: | -----------: | -------------: | ------: | ---------------- | ----------- |
|    new | +8.156 KiB | 0.0% → 99.9% | 0 B → 8.16 KiB |   0 → 2 | `_start`         | `<unknown>` |
|    new |       +8 B |  0.0% → 0.1% |      0 B → 8 B |   0 → 2 | `0xffff8a178fff` | `<unknown>` |

##### `0xaaaad7b4152f` (`<unknown>`)

| Change |      Delta |            % |           Size | Objects | Callee           | Location    |
| -----: | ---------: | -----------: | -------------: | ------: | ---------------- | ----------- |
|    new | +8.156 KiB | 0.0% → 99.9% | 0 B → 8.16 KiB |   0 → 2 | `_start`         | `<unknown>` |
|    new |       +8 B |  0.0% → 0.1% |      0 B → 8 B |   0 → 2 | `0xffff8a178fff` | `<unknown>` |

##### `0xaaaad7c56267` (`<unknown>`)

| Change |      Delta |             % |           Size | Objects | Callee   | Location    |
| -----: | ---------: | ------------: | -------------: | ------: | -------- | ----------- |
|    new | +8.156 KiB | 0.0% → 100.0% | 0 B → 8.16 KiB |   0 → 2 | `_start` | `<unknown>` |

##### `0xaaaad7bfbbbf` (`<unknown>`)

| Change |      Delta |             % |           Size | Objects | Callee   | Location    |
| -----: | ---------: | ------------: | -------------: | ------: | -------- | ----------- |
|    new | +8.156 KiB | 0.0% → 100.0% | 0 B → 8.16 KiB |   0 → 2 | `_start` | `<unknown>` |

##### `0xaaaad7b9ddd7` (`<unknown>`)

| Change |      Delta |             % |           Size | Objects | Callee   | Location    |
| -----: | ---------: | ------------: | -------------: | ------: | -------- | ----------- |
|    new | +8.156 KiB | 0.0% → 100.0% | 0 B → 8.16 KiB |   0 → 2 | `_start` | `<unknown>` |

##### `0xaaaad7c288ff` (`<unknown>`)

| Change |      Delta |             % |           Size | Objects | Callee   | Location    |
| -----: | ---------: | ------------: | -------------: | ------: | -------- | ----------- |
|    new | +8.156 KiB | 0.0% → 100.0% | 0 B → 8.16 KiB |   0 → 2 | `_start` | `<unknown>` |

##### `__json_value_module_MOD_parse_string` (`./json_value_module.F90`)

|  Change |        Delta |            % |               Size |     Objects | Callee                                        | Location                                           |
| ------: | -----------: | -----------: | -----------------: | ----------: | --------------------------------------------- | -------------------------------------------------- |
| +209.4% | +172.528 KiB |  0.7% → 4.4% | 82.4 KiB → 255 KiB | 796 → 2,071 | `__json_string_utilities_MOD_unescape_string` | `./json_string_utilities.F90`                      |
|     new |        +72 B | 0.0% → <0.1% |         0 B → 72 B |       0 → 9 | `0x39387`                                     | `/usr/lib/aarch64-linux-gnu/libtcmalloc.so.4.5.10` |

##### `0x27743` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change |      Delta |      % |                Size |           Objects | Callee   | Location           |
| -----: | ---------: | -----: | ------------------: | ----------------: | -------- | ------------------ |
|  -9.8% | -1.252 MiB | 100.0% | 12.8 MiB → 11.6 MiB | 152,764 → 140,613 | `main`   | `/out/profile.f90` |
|  -4.0% |      -84 B |  <0.1% | 2.05 KiB → 1.97 KiB |          102 → 18 | `_start` | `<unknown>`        |

##### `0x228cf` (`/tmp/nix-shell.NcwiQ3/profiler-md-input-generation.fqUYfr/fortran-base/binary`)

|  Change |        Delta |            % |           Size |   Objects | Callee    | Location    |
| ------: | -----------: | -----------: | -------------: | --------: | --------- | ----------- |
| removed | -689.968 KiB | 58.5% → 0.0% |  690 KiB → 0 B | 5,101 → 0 | `_start`  | `<unknown>` |
| removed | -280.437 KiB | 23.8% → 0.0% |  280 KiB → 0 B | 2,564 → 0 | `0x1f22f` | `[stack]`   |
| removed |  -97.781 KiB |  8.3% → 0.0% | 97.8 KiB → 0 B |   894 → 0 | `0x1e337` | `[stack]`   |
| removed |   -96.25 KiB |  8.2% → 0.0% | 96.3 KiB → 0 B |   880 → 0 | `0x1f47f` | `[stack]`   |
| removed |      -14 KiB |  1.2% → 0.0% |   14 KiB → 0 B |    56 → 0 | `0x1e70f` | `[stack]`   |

##### `0x1f22f` (`[stack]`)

|  Change |        Delta |            % |           Size |   Objects | Callee    | Location                                                                        |
| ------: | -----------: | -----------: | -------------: | --------: | --------- | ------------------------------------------------------------------------------- |
| removed | -313.468 KiB | 34.0% → 0.0% |  313 KiB → 0 B | 2,866 → 0 | `0x1f47f` | `[stack]`                                                                       |
| removed | -285.578 KiB | 31.0% → 0.0% |  286 KiB → 0 B | 2,611 → 0 | `_start`  | `<unknown>`                                                                     |
| removed |  -234.75 KiB | 25.5% → 0.0% |  235 KiB → 0 B |   939 → 0 | `0x228cf` | `/tmp/nix-shell.NcwiQ3/profiler-md-input-generation.fqUYfr/fortran-base/binary` |
| removed |  -86.906 KiB |  9.4% → 0.0% | 86.9 KiB → 0 B |   927 → 0 | `0x0`     | `<unknown>`                                                                     |

##### `0x1093fb` (`/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

| Change |        Delta |             % |              Size |        Objects | Callee     | Location                                          |
| -----: | -----------: | ------------: | ----------------: | -------------: | ---------- | ------------------------------------------------- |
| -57.2% | -528.468 KiB | 62.1% → 56.2% | 923 KiB → 395 KiB | 11,654 → 6,407 | `0x10b28f` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| -45.9% | -256.312 KiB | 37.5% → 42.9% | 558 KiB → 302 KiB |  5,950 → 3,216 | `0x10b283` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `0x1f47f` (`[stack]`)

|  Change |        Delta |            % |           Size |   Objects | Callee                                    | Location                  |
| ------: | -----------: | -----------: | -------------: | --------: | ----------------------------------------- | ------------------------- |
| removed | -409.718 KiB | 57.6% → 0.0% |  410 KiB → 0 B | 3,746 → 0 | `_start`                                  | `<unknown>`               |
| removed | -205.406 KiB | 28.9% → 0.0% |  205 KiB → 0 B | 1,878 → 0 | `__json_value_module_MOD_parse_object`    | `./json_value_module.F90` |
| removed |  -92.312 KiB | 13.0% → 0.0% | 92.3 KiB → 0 B |   844 → 0 | `__json_value_module_MOD_parse_value`     | `./json_value_module.F90` |
| removed |   -2.078 KiB |  0.3% → 0.0% | 2.08 KiB → 0 B |    19 → 0 | `__json_value_module_MOD_pop_char.part.0` | `./json_value_module.F90` |
| removed |   -1.867 KiB |  0.3% → 0.0% | 1.87 KiB → 0 B |   239 → 0 | `0xaaaab87a67ff`                          | `<unknown>`               |

##### `0x27817` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |        Delta |             % |                Size |           Objects | Callee           | Location                               |
| ------: | -----------: | ------------: | ------------------: | ----------------: | ---------------- | -------------------------------------- |
|   -5.5% | -649.707 KiB |        100.0% | 11.5 MiB → 10.8 MiB | 138,759 → 129,594 | `0x27743`        | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|   -0.3% |   -4.204 KiB | 10.9% → 11.5% |            1.25 MiB |          926 → 65 | `_start`         | `<unknown>`                            |
| removed |         -2 B |  <0.1% → 0.0% |           2 B → 0 B |             1 → 0 | `0xffffa219001f` | `<unknown>`                            |

##### `__json_value_module_MOD_json_get_by_path_default` (`./json_value_module.F90`)

| Change |        Delta |      % |              Size |     Objects | Callee                                          | Location                      |
| -----: | -----------: | -----: | ----------------: | ----------: | ----------------------------------------------- | ----------------------------- |
| -56.7% | -542.454 KiB | 100.0% | 958 KiB → 415 KiB | 2,522 → 203 | `__json_string_utilities_MOD_string_to_integer` | `./json_string_utilities.F90` |

##### `__json_value_module_MOD_json_get_by_path` (`./json_value_module.F90`)

| Change |        Delta |      % |              Size |     Objects | Callee                                             | Location                  |
| -----: | -----------: | -----: | ----------------: | ----------: | -------------------------------------------------- | ------------------------- |
| -56.7% | -542.454 KiB | 100.0% | 958 KiB → 415 KiB | 2,522 → 203 | `__json_value_module_MOD_json_get_by_path_default` | `./json_value_module.F90` |

##### `__json_value_module_MOD_json_get_string_by_path` (`./json_get_scalar_by_path.inc`)

| Change |        Delta |              % |              Size |     Objects | Callee                                     | Location                  |
| -----: | -----------: | -------------: | ----------------: | ----------: | ------------------------------------------ | ------------------------- |
| -56.7% | -542.454 KiB | 100.0% → 99.8% | 958 KiB → 415 KiB | 2,522 → 203 | `__json_value_module_MOD_json_get_by_path` | `./json_value_module.F90` |

##### `__json_file_module_MOD_json_file_get_string` (`./json_file_module.F90`)

| Change |        Delta |      % |              Size |       Objects | Callee                                            | Location                        |
| -----: | -----------: | -----: | ----------------: | ------------: | ------------------------------------------------- | ------------------------------- |
| -56.6% | -541.624 KiB | 100.0% | 958 KiB → 416 KiB | 2,534 → 1,065 | `__json_value_module_MOD_json_get_string_by_path` | `./json_get_scalar_by_path.inc` |

##### `0x10b28f` (`/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

| Change |       Delta |             % |              Size |       Objects | Callee     | Location                                          |
| -----: | ----------: | ------------: | ----------------: | ------------: | ---------- | ------------------------------------------------- |
| -65.2% |    -486 KiB | 80.7% → 65.7% | 745 KiB → 259 KiB | 5,962 → 2,074 | `0x112ecb` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| -23.9% | -42.468 KiB | 19.3% → 34.3% | 178 KiB → 135 KiB | 5,692 → 4,333 | `0x112ebb` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `0x112ecb` (`/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

| Change |    Delta |      % |              Size |       Objects | Callee    | Location                                          |
| -----: | -------: | -----: | ----------------: | ------------: | --------- | ------------------------------------------------- |
| -65.2% | -486 KiB | 100.0% | 745 KiB → 259 KiB | 5,962 → 2,074 | `0x1c1b3` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `0x4` (`<unknown>`)

|  Change |       Delta |            % |                Size | Objects | Callee           | Location    |
| ------: | ----------: | -----------: | ------------------: | ------: | ---------------- | ----------- |
| removed | -411.89 KiB | 30.1% → 0.0% |       412 KiB → 0 B | 101 → 0 | `0xaaaab89e413f` | `<unknown>` |
| removed | -411.89 KiB | 30.1% → 0.0% |       412 KiB → 0 B | 101 → 0 | `0xaaaab89e4197` | `<unknown>` |
|     new | +411.89 KiB | 0.0% → 46.5% |       0 B → 412 KiB | 0 → 101 | `0xaaaad7bfa0df` | `<unknown>` |
| removed | -36.703 KiB |  2.7% → 0.0% |      36.7 KiB → 0 B |   9 → 0 | `0xffffa218003f` | `<unknown>` |
|  +25.0% |  +8.156 KiB |  2.4% → 4.6% | 32.6 KiB → 40.8 KiB |  8 → 10 | `_start`         | `<unknown>` |

##### `_start` (`<unknown>`)

| Change |        Delta |            % |                Size |           Objects | Callee    | Location                               |
| -----: | -----------: | -----------: | ------------------: | ----------------: | --------- | -------------------------------------- |
|  -4.3% | -454.053 KiB |       100.0% | 10.4 MiB → 9.95 MiB | 124,114 → 118,144 | `0x27817` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| -82.9% |  -15.273 KiB | 0.2% → <0.1% | 18.4 KiB → 3.16 KiB |       1,438 → 101 | `_start`  | `<unknown>`                            |

##### `0xaaaab89e4197` (`<unknown>`)

|  Change |        Delta |             % |          Size | Objects | Callee   | Location    |
| ------: | -----------: | ------------: | ------------: | ------: | -------- | ----------- |
| removed | -415.015 KiB | 100.0% → 0.0% | 415 KiB → 0 B | 201 → 0 | `_start` | `<unknown>` |

##### `0xaaaab89e413f` (`<unknown>`)

|  Change |       Delta |             % |          Size | Objects | Callee   | Location    |
| ------: | ----------: | ------------: | ------------: | ------: | -------- | ----------- |
| removed | -411.89 KiB | 100.0% → 0.0% | 412 KiB → 0 B | 101 → 0 | `_start` | `<unknown>` |

##### `0xffffa218003f` (`<unknown>`)

|  Change |        Delta |            % |           Size |   Objects | Callee           | Location                                           |
| ------: | -----------: | -----------: | -------------: | --------: | ---------------- | -------------------------------------------------- |
| removed | -283.077 KiB | 71.3% → 0.0% |  283 KiB → 0 B | 1,225 → 0 | `_start`         | `<unknown>`                                        |
| removed |  -97.671 KiB | 24.6% → 0.0% | 97.7 KiB → 0 B |   893 → 0 | `0x2f9e7`        | `/usr/lib/aarch64-linux-gnu/libtcmalloc.so.4.5.10` |
| removed |  -16.312 KiB |  4.1% → 0.0% | 16.3 KiB → 0 B |     4 → 0 | `0xffffa2a19d67` | `<unknown>`                                        |

##### `0xffffa2a19d67` (`<unknown>`)

|  Change |        Delta |            % |           Size |   Objects | Callee           | Location    |
| ------: | -----------: | -----------: | -------------: | --------: | ---------------- | ----------- |
| removed | -270.562 KiB | 96.5% → 0.0% |  271 KiB → 0 B | 2,362 → 0 | `_start`         | `<unknown>` |
| removed |   -6.213 KiB |  2.2% → 0.0% | 6.21 KiB → 0 B |   273 → 0 | `0xaaaab87a67ff` | `<unknown>` |
| removed |       -972 B |  0.3% → 0.0% |    972 B → 0 B |     9 → 0 | `0x6b`           | `<unknown>` |
| removed |       -915 B |  0.3% → 0.0% |    915 B → 0 B |    18 → 0 | `0xaaaab87a65ff` | `<unknown>` |
| removed |       -820 B |  0.3% → 0.0% |    820 B → 0 B |    10 → 0 | `0x51`           | `<unknown>` |

##### `0x1f237` (`/tmp/nix-shell.NcwiQ3/profiler-md-input-generation.fqUYfr/fortran-base/binary`)

|  Change |       Delta |             % |          Size | Objects | Callee   | Location    |
| ------: | ----------: | ------------: | ------------: | ------: | -------- | ----------- |
| removed | -234.75 KiB | 100.0% → 0.0% | 235 KiB → 0 B | 939 → 0 | `_start` | `<unknown>` |

##### `0x1eaff` (`[stack]`)

|  Change |      Delta |             % |          Size | Objects | Callee   | Location    |
| ------: | ---------: | ------------: | ------------: | ------: | -------- | ----------- |
| removed | -234.5 KiB | 100.0% → 0.0% | 235 KiB → 0 B | 938 → 0 | `_start` | `<unknown>` |

##### `0x1e9b7` (`[stack]`)

|  Change |      Delta |             % |          Size | Objects | Callee    | Location  |
| ------: | ---------: | ------------: | ------------: | ------: | --------- | --------- |
| removed | -234.5 KiB | 100.0% → 0.0% | 235 KiB → 0 B | 938 → 0 | `0x1eaff` | `[stack]` |

##### `0x1ebff` (`[stack]`)

|  Change |       Delta |             % |          Size | Objects | Callee           | Location    |
| ------: | ----------: | ------------: | ------------: | ------: | ---------------- | ----------- |
| removed | -234.25 KiB | 100.0% → 0.0% | 234 KiB → 0 B | 937 → 0 | `0xffffa2a19d67` | `<unknown>` |

##### `0x1dfbf` (`[stack]`)

|  Change |        Delta |             % |          Size |   Objects | Callee   | Location    |
| ------: | -----------: | ------------: | ------------: | --------: | -------- | ----------- |
| removed | -205.406 KiB | 100.0% → 0.0% | 205 KiB → 0 B | 1,878 → 0 | `_start` | `<unknown>` |

##### `0x1e0bf` (`[stack]`)

|  Change |        Delta |            % |           Size | Objects | Callee    | Location                                                                        |
| ------: | -----------: | -----------: | -------------: | ------: | --------- | ------------------------------------------------------------------------------- |
| removed | -100.296 KiB | 48.8% → 0.0% |  100 KiB → 0 B | 917 → 0 | `main`    | `/out/profile.f90`                                                              |
| removed |   -99.64 KiB | 48.5% → 0.0% | 99.6 KiB → 0 B | 911 → 0 | `0x228cf` | `/tmp/nix-shell.NcwiQ3/profiler-md-input-generation.fqUYfr/fortran-base/binary` |
| removed |    -5.14 KiB |  2.5% → 0.0% | 5.14 KiB → 0 B |  47 → 0 | `0x1f22f` | `[stack]`                                                                       |
| removed |       -336 B |  0.2% → 0.0% |    336 B → 0 B |   3 → 0 | `0x2eaff` | `/usr/lib/aarch64-linux-gnu/libtcmalloc.so.4.5.10`                              |

##### `0x1e9ef` (`[stack]`)

|  Change |        Delta |             % |          Size |   Objects | Callee                                 | Location                  |
| ------: | -----------: | ------------: | ------------: | --------: | -------------------------------------- | ------------------------- |
| removed | -205.187 KiB | 100.0% → 0.0% | 205 KiB → 0 B | 1,876 → 0 | `__json_value_module_MOD_parse_string` | `./json_value_module.F90` |

##### `0x1eb1f` (`[stack]`)

|  Change |        Delta |             % |          Size | Objects | Callee   | Location    |
| ------: | -----------: | ------------: | ------------: | ------: | -------- | ----------- |
| removed | -113.625 KiB | 100.0% → 0.0% | 114 KiB → 0 B | 909 → 0 | `_start` | `<unknown>` |

##### `0x1e7cf` (`[stack]`)

|  Change |       Delta |             % |           Size | Objects | Callee   | Location    |
| ------: | ----------: | ------------: | -------------: | ------: | -------- | ----------- |
| removed | -99.421 KiB | 100.0% → 0.0% | 99.4 KiB → 0 B | 909 → 0 | `_start` | `<unknown>` |

##### `0x1e687` (`[stack]`)

|  Change |       Delta |             % |           Size | Objects | Callee    | Location  |
| ------: | ----------: | ------------: | -------------: | ------: | --------- | --------- |
| removed | -99.421 KiB | 100.0% → 0.0% | 99.4 KiB → 0 B | 909 → 0 | `0x1e7cf` | `[stack]` |

##### `0x1e337` (`[stack]`)

|  Change |       Delta |             % |           Size | Objects | Callee   | Location    |
| ------: | ----------: | ------------: | -------------: | ------: | -------- | ----------- |
| removed | -97.781 KiB | 100.0% → 0.0% | 97.8 KiB → 0 B | 894 → 0 | `_start` | `<unknown>` |

##### `0x1e49f` (`[stack]`)

|  Change |       Delta |             % |         Size | Objects | Callee | Location    |
| ------: | ----------: | ------------: | -----------: | ------: | ------ | ----------- |
| removed | -91.984 KiB | 100.0% → 0.0% | 92 KiB → 0 B | 841 → 0 | `0x18` | `<unknown>` |

##### `0x10c847` (`/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

| Change |        Delta |      % |              Size |       Objects | Callee    | Location                                          |
| -----: | -----------: | -----: | ----------------: | ------------: | --------- | ------------------------------------------------- |
| -45.9% | -256.312 KiB | 100.0% | 558 KiB → 302 KiB | 5,950 → 3,216 | `0x1c24b` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `0x10ab63` (`/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

| Change |        Delta |      % |              Size |       Objects | Callee     | Location                                          |
| -----: | -----------: | -----: | ----------------: | ------------: | ---------- | ------------------------------------------------- |
| -45.9% | -256.312 KiB | 100.0% | 558 KiB → 302 KiB | 5,950 → 3,216 | `0x10c847` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `0x10b283` (`/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

| Change |        Delta |      % |              Size |       Objects | Callee     | Location                                          |
| -----: | -----------: | -----: | ----------------: | ------------: | ---------- | ------------------------------------------------- |
| -45.9% | -256.312 KiB | 100.0% | 558 KiB → 302 KiB | 5,950 → 3,216 | `0x10ab63` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `0xffffa2190027` (`<unknown>`)

|  Change |        Delta |             % |          Size | Objects | Callee           | Location    |
| ------: | -----------: | ------------: | ------------: | ------: | ---------------- | ----------- |
| removed | -163.752 KiB | 100.0% → 0.0% | 164 KiB → 0 B | 670 → 0 | `_start`         | `<unknown>` |
| removed | -161.909 KiB |  98.9% → 0.0% | 162 KiB → 0 B | 662 → 0 | `0xffffa2190027` | `<unknown>` |
| removed |        -15 B |  <0.1% → 0.0% |    15 B → 0 B |   1 → 0 | `0xffffa2a18fff` | `<unknown>` |

##### `0x1ff` (`<unknown>`)

|  Change |        Delta |             % |          Size | Objects | Callee           | Location    |
| ------: | -----------: | ------------: | ------------: | ------: | ---------------- | ----------- |
| removed | -163.467 KiB | 100.0% → 0.0% | 163 KiB → 0 B | 458 → 0 | `0xffffa218003f` | `<unknown>` |

##### `0x0` (`<unknown>`)

|  Change |       Delta |             % |              Size |     Objects | Callee           | Location    |
| ------: | ----------: | ------------: | ----------------: | ----------: | ---------------- | ----------- |
|  -92.6% | -93.224 KiB | 74.5% → 19.6% | 101 KiB → 7.5 KiB | 2,166 → 372 | `_start`         | `<unknown>` |
| removed |  -3.171 KiB |   2.3% → 0.0% |    3.17 KiB → 0 B |      29 → 0 | `0x1e59f`        | `[stack]`   |
|     new |  +3.171 KiB |   0.0% → 8.3% |    0 B → 3.17 KiB |      0 → 29 | `0x1d94f`        | `[stack]`   |
| removed |  -3.062 KiB |   2.3% → 0.0% |    3.06 KiB → 0 B |      28 → 0 | `0xaaaab611fb07` | `<unknown>` |
|     new |  +3.062 KiB |   0.0% → 8.0% |    0 B → 3.06 KiB |      0 → 28 | `0xaaaad41cfb07` | `<unknown>` |

##### `0xffffa2a18fff` (`<unknown>`)

|  Change |       Delta |            % |           Size |   Objects | Callee    | Location                                           |
| ------: | ----------: | -----------: | -------------: | --------: | --------- | -------------------------------------------------- |
| removed | -40.796 KiB | 48.9% → 0.0% | 40.8 KiB → 0 B |   907 → 0 | `_start`  | `<unknown>`                                        |
| removed |  -29.82 KiB | 35.8% → 0.0% | 29.8 KiB → 0 B | 1,878 → 0 | `0x3131f` | `/usr/lib/aarch64-linux-gnu/libtcmalloc.so.4.5.10` |
| removed | -12.611 KiB | 15.1% → 0.0% | 12.6 KiB → 0 B | 1,004 → 0 | `0x3143b` | `/usr/lib/aarch64-linux-gnu/libtcmalloc.so.4.5.10` |
| removed |      -180 B |  0.2% → 0.0% |    180 B → 0 B |    10 → 0 | `0x3142b` | `/usr/lib/aarch64-linux-gnu/libtcmalloc.so.4.5.10` |

##### `0x112ebb` (`/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

| Change |       Delta |      % |              Size |       Objects | Callee    | Location                                          |
| -----: | ----------: | -----: | ----------------: | ------------: | --------- | ------------------------------------------------- |
| -23.9% | -42.468 KiB | 100.0% | 178 KiB → 135 KiB | 5,692 → 4,333 | `0x1c1b3` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

# Retained heap profile diff

Retained 894 KiB over 14,825 objects (61.8 B per object).

| Category | Change | Delta |     % |    Size | Objects |
| -------- | -----: | ----: | ----: | ------: | ------: |
| Ours     |   0.0% |   0 B | 85.5% | 765 KiB |  14,818 |
| Native   |   0.0% |   0 B | 14.5% | 130 KiB |       7 |

Paths starting with `./` or `../` are relative to `/src/json-fortran/src/`.

## Hottest functions

### Self size

No function differed in bytes retained within the function body, excluding callees.

### Total size

#### Regressions

Functions with the largest increase in bytes retained within the function and its callees. Categories account for at least 1.0% of self size on the base or the current side.

| Change |       Delta |           % |           Size | Objects | Function             | Location                                                                           |
| -----: | ----------: | ----------: | -------------: | ------: | -------------------- | ---------------------------------------------------------------------------------- |
|    new | +35.304 KiB | 0.0% → 3.9% | 0 B → 35.3 KiB | 0 → 317 | `0x22aaf`            | `/tmp/nix-shell.NcwiQ3/profiler-md-input-generation.fqUYfr/fortran-current/binary` |
|    new | +29.617 KiB | 0.0% → 3.3% | 0 B → 29.6 KiB | 0 → 307 | `0x1e85f`            | `[stack]`                                                                          |
|    new | +25.265 KiB | 0.0% → 2.8% | 0 B → 25.3 KiB | 0 → 231 | `0x1e5ef`            | `[stack]`                                                                          |
|    new |  +8.531 KiB | 0.0% → 1.0% | 0 B → 8.53 KiB |  0 → 78 | `0x1dd9f`            | `[stack]`                                                                          |
|    new |  +8.531 KiB | 0.0% → 1.0% | 0 B → 8.53 KiB |  0 → 78 | `0x1d36f`            | `[stack]`                                                                          |
|    new |  +8.531 KiB | 0.0% → 1.0% | 0 B → 8.53 KiB |  0 → 78 | `0x1d46f`            | `[stack]`                                                                          |
|    new |  +8.312 KiB | 0.0% → 0.9% | 0 B → 8.31 KiB |  0 → 76 | `0xffff898e003f`     | `<unknown>`                                                                        |
|    new |  +5.625 KiB | 0.0% → 0.6% | 0 B → 5.63 KiB | 0 → 307 | `0xaaaad7a9e7ff`     | `<unknown>`                                                                        |
|    new |  +4.265 KiB | 0.0% → 0.5% | 0 B → 4.27 KiB |  0 → 39 | `0x1d6e7`            | `[stack]`                                                                          |
|    new |  +4.265 KiB | 0.0% → 0.5% | 0 B → 4.27 KiB |  0 → 39 | `0x1d3e7`            | `[stack]`                                                                          |
|    new |  +4.046 KiB | 0.0% → 0.5% | 0 B → 4.05 KiB |  0 → 37 | `0x1db7f`            | `[stack]`                                                                          |
|    new |  +4.046 KiB | 0.0% → 0.5% | 0 B → 4.05 KiB |  0 → 37 | `0x1da37`            | `[stack]`                                                                          |
|    new |  +3.718 KiB | 0.0% → 0.4% | 0 B → 3.72 KiB |  0 → 34 | `0x1d84f`            | `[stack]`                                                                          |
|    new |    +3.5 KiB | 0.0% → 0.4% |  0 B → 3.5 KiB |  0 → 32 | `0x1d74f`            | `[stack]`                                                                          |
|    new |  +3.188 KiB | 0.0% → 0.4% | 0 B → 3.19 KiB | 0 → 136 | `0xffff8a178fff`     | `<unknown>`                                                                        |
|    new |  +3.091 KiB | 0.0% → 0.3% | 0 B → 3.09 KiB | 0 → 148 | `0xffff8a179d67`     | `<unknown>`                                                                        |
|    new |  +1.447 KiB | 0.0% → 0.2% | 0 B → 1.45 KiB | 0 → 117 | `0xe95906d9111bd8ff` | `<unknown>`                                                                        |
|    new |  +1.371 KiB | 0.0% → 0.2% | 0 B → 1.37 KiB |  0 → 78 | `0x55555ffff`        | `<unknown>`                                                                        |
|    new |   +1.14 KiB | 0.0% → 0.1% | 0 B → 1.14 KiB | 0 → 121 | `0xbd4e`             | `<unknown>`                                                                        |
|    new |      +808 B | 0.0% → 0.1% |    0 B → 808 B |  0 → 39 | `0x1d02f`            | `[stack]`                                                                          |

##### Ours

| Change |       Delta |            % |           Size | Objects | Function  | Location                                                                           |
| -----: | ----------: | -----------: | -------------: | ------: | --------- | ---------------------------------------------------------------------------------- |
|    new | +35.304 KiB |  0.0% → 3.9% | 0 B → 35.3 KiB | 0 → 317 | `0x22aaf` | `/tmp/nix-shell.NcwiQ3/profiler-md-input-generation.fqUYfr/fortran-current/binary` |
|    new | +29.617 KiB |  0.0% → 3.3% | 0 B → 29.6 KiB | 0 → 307 | `0x1e85f` | `[stack]`                                                                          |
|    new | +25.265 KiB |  0.0% → 2.8% | 0 B → 25.3 KiB | 0 → 231 | `0x1e5ef` | `[stack]`                                                                          |
|    new |  +8.531 KiB |  0.0% → 1.0% | 0 B → 8.53 KiB |  0 → 78 | `0x1dd9f` | `[stack]`                                                                          |
|    new |  +8.531 KiB |  0.0% → 1.0% | 0 B → 8.53 KiB |  0 → 78 | `0x1d36f` | `[stack]`                                                                          |
|    new |  +8.531 KiB |  0.0% → 1.0% | 0 B → 8.53 KiB |  0 → 78 | `0x1d46f` | `[stack]`                                                                          |
|    new |  +4.265 KiB |  0.0% → 0.5% | 0 B → 4.27 KiB |  0 → 39 | `0x1d6e7` | `[stack]`                                                                          |
|    new |  +4.265 KiB |  0.0% → 0.5% | 0 B → 4.27 KiB |  0 → 39 | `0x1d3e7` | `[stack]`                                                                          |
|    new |  +4.046 KiB |  0.0% → 0.5% | 0 B → 4.05 KiB |  0 → 37 | `0x1db7f` | `[stack]`                                                                          |
|    new |  +4.046 KiB |  0.0% → 0.5% | 0 B → 4.05 KiB |  0 → 37 | `0x1da37` | `[stack]`                                                                          |
|    new |  +3.718 KiB |  0.0% → 0.4% | 0 B → 3.72 KiB |  0 → 34 | `0x1d84f` | `[stack]`                                                                          |
|    new |    +3.5 KiB |  0.0% → 0.4% |  0 B → 3.5 KiB |  0 → 32 | `0x1d74f` | `[stack]`                                                                          |
|    new |      +808 B |  0.0% → 0.1% |    0 B → 808 B |  0 → 39 | `0x1d02f` | `[stack]`                                                                          |
|    new |      +702 B |  0.0% → 0.1% |    0 B → 702 B |  0 → 39 | `0x1dc4f` | `[stack]`                                                                          |
|    new |      +463 B |  0.0% → 0.1% |    0 B → 463 B |  0 → 40 | `0x1da4f` | `[stack]`                                                                          |
|    new |      +383 B | 0.0% → <0.1% |    0 B → 383 B |  0 → 39 | `0x1d12f` | `[stack]`                                                                          |
|    new |      +336 B | 0.0% → <0.1% |    0 B → 336 B |   0 → 3 | `0x1d4af` | `[stack]`                                                                          |
|    new |      +312 B | 0.0% → <0.1% |    0 B → 312 B |  0 → 39 | `0x1dd2f` | `[stack]`                                                                          |
|    new |      +312 B | 0.0% → <0.1% |    0 B → 312 B |  0 → 39 | `0x1e0af` | `[stack]`                                                                          |
|    new |      +234 B | 0.0% → <0.1% |    0 B → 234 B |  0 → 39 | `0x1db4f` | `[stack]`                                                                          |

##### Native

| Change |      Delta |            % |              Size |   Objects | Function             | Location    |
| -----: | ---------: | -----------: | ----------------: | --------: | -------------------- | ----------- |
|    new | +8.312 KiB |  0.0% → 0.9% |    0 B → 8.31 KiB |    0 → 76 | `0xffff898e003f`     | `<unknown>` |
|    new | +5.625 KiB |  0.0% → 0.6% |    0 B → 5.63 KiB |   0 → 307 | `0xaaaad7a9e7ff`     | `<unknown>` |
|    new | +3.188 KiB |  0.0% → 0.4% |    0 B → 3.19 KiB |   0 → 136 | `0xffff8a178fff`     | `<unknown>` |
|    new | +3.091 KiB |  0.0% → 0.3% |    0 B → 3.09 KiB |   0 → 148 | `0xffff8a179d67`     | `<unknown>` |
|    new | +1.447 KiB |  0.0% → 0.2% |    0 B → 1.45 KiB |   0 → 117 | `0xe95906d9111bd8ff` | `<unknown>` |
|    new | +1.371 KiB |  0.0% → 0.2% |    0 B → 1.37 KiB |    0 → 78 | `0x55555ffff`        | `<unknown>` |
|    new |  +1.14 KiB |  0.0% → 0.1% |    0 B → 1.14 KiB |   0 → 121 | `0xbd4e`             | `<unknown>` |
|    new |     +224 B | 0.0% → <0.1% |       0 B → 224 B |     0 → 2 | `0xaaaad41cfb07`     | `<unknown>` |
|    new |     +120 B | 0.0% → <0.1% |       0 B → 120 B |     0 → 2 | `0xaaaad7c57677`     | `<unknown>` |
|  +0.3% |     +112 B |         4.3% | 38 KiB → 38.1 KiB | 584 → 585 | `0xffffffffffffffff` | `<unknown>` |
|    new |     +112 B | 0.0% → <0.1% |       0 B → 112 B |     0 → 1 | `0xaaaad7a96a7f`     | `<unknown>` |
|    new |     +112 B | 0.0% → <0.1% |       0 B → 112 B |     0 → 1 | `0xaaaad7b89c4f`     | `<unknown>` |
|    new |     +112 B | 0.0% → <0.1% |       0 B → 112 B |     0 → 1 | `0xaaaad7b417cf`     | `<unknown>` |
|    new |     +112 B | 0.0% → <0.1% |       0 B → 112 B |     0 → 1 | `0xaaaad7b6d7a7`     | `<unknown>` |
|    new |     +112 B | 0.0% → <0.1% |       0 B → 112 B |     0 → 1 | `0xaaaad7bcf73f`     | `<unknown>` |
|    new |     +112 B | 0.0% → <0.1% |       0 B → 112 B |     0 → 1 | `0xaaaad7c31b6f`     | `<unknown>` |
|    new |     +112 B | 0.0% → <0.1% |       0 B → 112 B |     0 → 1 | `0xaaaad7ba598f`     | `<unknown>` |
|    new |     +112 B | 0.0% → <0.1% |       0 B → 112 B |     0 → 1 | `0xaaaad7bcfc7f`     | `<unknown>` |
|    new |     +112 B | 0.0% → <0.1% |       0 B → 112 B |     0 → 1 | `0xaaaad7c4bf0f`     | `<unknown>` |
|    new |     +112 B | 0.0% → <0.1% |       0 B → 112 B |     0 → 1 | `0xaaaad7ae0e3f`     | `<unknown>` |

#### Improvements

Functions with the largest decrease in bytes retained within the function and its callees. Categories account for at least 1.0% of self size on the base or the current side.

|  Change |       Delta |           % |           Size | Objects | Function             | Location                                                                        |
| ------: | ----------: | ----------: | -------------: | ------: | -------------------- | ------------------------------------------------------------------------------- |
| removed | -38.828 KiB | 4.3% → 0.0% | 38.8 KiB → 0 B | 355 → 0 | `0x228cf`            | `/tmp/nix-shell.NcwiQ3/profiler-md-input-generation.fqUYfr/fortran-base/binary` |
| removed | -29.617 KiB | 3.3% → 0.0% | 29.6 KiB → 0 B | 307 → 0 | `0x1f47f`            | `[stack]`                                                                       |
| removed | -25.156 KiB | 2.8% → 0.0% | 25.2 KiB → 0 B | 230 → 0 | `0x1f22f`            | `[stack]`                                                                       |
| removed |  -8.531 KiB | 1.0% → 0.0% | 8.53 KiB → 0 B |  78 → 0 | `0x1e9ef`            | `[stack]`                                                                       |
| removed |  -8.531 KiB | 1.0% → 0.0% | 8.53 KiB → 0 B |  78 → 0 | `0x1dfbf`            | `[stack]`                                                                       |
| removed |  -8.531 KiB | 1.0% → 0.0% | 8.53 KiB → 0 B |  78 → 0 | `0x1e0bf`            | `[stack]`                                                                       |
| removed |  -8.312 KiB | 0.9% → 0.0% | 8.31 KiB → 0 B |  76 → 0 | `0xffffa218003f`     | `<unknown>`                                                                     |
| removed |  -5.625 KiB | 0.6% → 0.0% | 5.63 KiB → 0 B | 307 → 0 | `0xaaaab87a67ff`     | `<unknown>`                                                                     |
| removed |  -4.265 KiB | 0.5% → 0.0% | 4.27 KiB → 0 B |  39 → 0 | `0x1e337`            | `[stack]`                                                                       |
| removed |  -4.046 KiB | 0.5% → 0.0% | 4.05 KiB → 0 B |  37 → 0 | `0x1e7cf`            | `[stack]`                                                                       |
| removed |  -4.046 KiB | 0.5% → 0.0% | 4.05 KiB → 0 B |  37 → 0 | `0x1e687`            | `[stack]`                                                                       |
| removed |  -3.718 KiB | 0.4% → 0.0% | 3.72 KiB → 0 B |  34 → 0 | `0x1e49f`            | `[stack]`                                                                       |
| removed |    -3.5 KiB | 0.4% → 0.0% |  3.5 KiB → 0 B |  32 → 0 | `0x1e39f`            | `[stack]`                                                                       |
| removed |  -3.188 KiB | 0.4% → 0.0% | 3.19 KiB → 0 B | 136 → 0 | `0xffffa2a18fff`     | `<unknown>`                                                                     |
| removed |  -3.091 KiB | 0.3% → 0.0% | 3.09 KiB → 0 B | 148 → 0 | `0xffffa2a19d67`     | `<unknown>`                                                                     |
| removed |  -1.447 KiB | 0.2% → 0.0% | 1.45 KiB → 0 B | 117 → 0 | `0x9a971f3bf4c75dff` | `<unknown>`                                                                     |
| removed |  -1.371 KiB | 0.2% → 0.0% | 1.37 KiB → 0 B |  78 → 0 | `0x55554ffff`        | `<unknown>`                                                                     |
| removed |   -1.14 KiB | 0.1% → 0.0% | 1.14 KiB → 0 B | 121 → 0 | `0xc3d2`             | `<unknown>`                                                                     |
| removed |      -808 B | 0.1% → 0.0% |    808 B → 0 B |  39 → 0 | `0x1dc7f`            | `[stack]`                                                                       |
| removed |      -760 B | 0.1% → 0.0% |    760 B → 0 B |   1 → 0 | `0x1ef2f`            | `[stack]`                                                                       |

##### Ours

|  Change |       Delta |            % |           Size | Objects | Function  | Location                                                                        |
| ------: | ----------: | -----------: | -------------: | ------: | --------- | ------------------------------------------------------------------------------- |
| removed | -38.828 KiB |  4.3% → 0.0% | 38.8 KiB → 0 B | 355 → 0 | `0x228cf` | `/tmp/nix-shell.NcwiQ3/profiler-md-input-generation.fqUYfr/fortran-base/binary` |
| removed | -29.617 KiB |  3.3% → 0.0% | 29.6 KiB → 0 B | 307 → 0 | `0x1f47f` | `[stack]`                                                                       |
| removed | -25.156 KiB |  2.8% → 0.0% | 25.2 KiB → 0 B | 230 → 0 | `0x1f22f` | `[stack]`                                                                       |
| removed |  -8.531 KiB |  1.0% → 0.0% | 8.53 KiB → 0 B |  78 → 0 | `0x1e9ef` | `[stack]`                                                                       |
| removed |  -8.531 KiB |  1.0% → 0.0% | 8.53 KiB → 0 B |  78 → 0 | `0x1dfbf` | `[stack]`                                                                       |
| removed |  -8.531 KiB |  1.0% → 0.0% | 8.53 KiB → 0 B |  78 → 0 | `0x1e0bf` | `[stack]`                                                                       |
| removed |  -4.265 KiB |  0.5% → 0.0% | 4.27 KiB → 0 B |  39 → 0 | `0x1e337` | `[stack]`                                                                       |
| removed |  -4.046 KiB |  0.5% → 0.0% | 4.05 KiB → 0 B |  37 → 0 | `0x1e7cf` | `[stack]`                                                                       |
| removed |  -4.046 KiB |  0.5% → 0.0% | 4.05 KiB → 0 B |  37 → 0 | `0x1e687` | `[stack]`                                                                       |
| removed |  -3.718 KiB |  0.4% → 0.0% | 3.72 KiB → 0 B |  34 → 0 | `0x1e49f` | `[stack]`                                                                       |
| removed |    -3.5 KiB |  0.4% → 0.0% |  3.5 KiB → 0 B |  32 → 0 | `0x1e39f` | `[stack]`                                                                       |
| removed |      -808 B |  0.1% → 0.0% |    808 B → 0 B |  39 → 0 | `0x1dc7f` | `[stack]`                                                                       |
| removed |      -760 B |  0.1% → 0.0% |    760 B → 0 B |   1 → 0 | `0x1ef2f` | `[stack]`                                                                       |
| removed |      -702 B |  0.1% → 0.0% |    702 B → 0 B |  39 → 0 | `0x1e89f` | `[stack]`                                                                       |
| removed |      -463 B |  0.1% → 0.0% |    463 B → 0 B |  40 → 0 | `0x1e69f` | `[stack]`                                                                       |
| removed |      -383 B | <0.1% → 0.0% |    383 B → 0 B |  39 → 0 | `0x1dd7f` | `[stack]`                                                                       |
| removed |      -336 B | <0.1% → 0.0% |    336 B → 0 B |   3 → 0 | `0x1e0ff` | `[stack]`                                                                       |
| removed |      -312 B | <0.1% → 0.0% |    312 B → 0 B |  39 → 0 | `0x1e97f` | `[stack]`                                                                       |
| removed |      -312 B | <0.1% → 0.0% |    312 B → 0 B |  39 → 0 | `0x1ecff` | `[stack]`                                                                       |
| removed |      -234 B | <0.1% → 0.0% |    234 B → 0 B |  39 → 0 | `0x1e79f` | `[stack]`                                                                       |

##### Native

|  Change |      Delta |            % |           Size | Objects | Function             | Location    |
| ------: | ---------: | -----------: | -------------: | ------: | -------------------- | ----------- |
| removed | -8.312 KiB |  0.9% → 0.0% | 8.31 KiB → 0 B |  76 → 0 | `0xffffa218003f`     | `<unknown>` |
| removed | -5.625 KiB |  0.6% → 0.0% | 5.63 KiB → 0 B | 307 → 0 | `0xaaaab87a67ff`     | `<unknown>` |
| removed | -3.188 KiB |  0.4% → 0.0% | 3.19 KiB → 0 B | 136 → 0 | `0xffffa2a18fff`     | `<unknown>` |
| removed | -3.091 KiB |  0.3% → 0.0% | 3.09 KiB → 0 B | 148 → 0 | `0xffffa2a19d67`     | `<unknown>` |
| removed | -1.447 KiB |  0.2% → 0.0% | 1.45 KiB → 0 B | 117 → 0 | `0x9a971f3bf4c75dff` | `<unknown>` |
| removed | -1.371 KiB |  0.2% → 0.0% | 1.37 KiB → 0 B |  78 → 0 | `0x55554ffff`        | `<unknown>` |
| removed |  -1.14 KiB |  0.1% → 0.0% | 1.14 KiB → 0 B | 121 → 0 | `0xc3d2`             | `<unknown>` |
| removed |     -224 B | <0.1% → 0.0% |    224 B → 0 B |   2 → 0 | `0xaaaab611fb07`     | `<unknown>` |
| removed |     -120 B | <0.1% → 0.0% |    120 B → 0 B |   2 → 0 | `0xaaaab895f677`     | `<unknown>` |
| removed |     -112 B | <0.1% → 0.0% |    112 B → 0 B |   1 → 0 | `0xaaaab8849377`     | `<unknown>` |
| removed |     -112 B | <0.1% → 0.0% |    112 B → 0 B |   1 → 0 | `0xaaaab88d7a3f`     | `<unknown>` |
| removed |     -112 B | <0.1% → 0.0% |    112 B → 0 B |   1 → 0 | `0xaaaab88d6bff`     | `<unknown>` |
| removed |     -112 B | <0.1% → 0.0% |    112 B → 0 B |   1 → 0 | `0xaaaab89bac9f`     | `<unknown>` |
| removed |     -112 B | <0.1% → 0.0% |    112 B → 0 B |   1 → 0 | `0xaaaab879f73f`     | `<unknown>` |
| removed |     -112 B | <0.1% → 0.0% |    112 B → 0 B |   1 → 0 | `0xaaaab88d67df`     | `<unknown>` |
| removed |     -112 B | <0.1% → 0.0% |    112 B → 0 B |   1 → 0 | `0xaaaab8939b6f`     | `<unknown>` |
| removed |     -112 B | <0.1% → 0.0% |    112 B → 0 B |   1 → 0 | `0xaaaab879e89f`     | `<unknown>` |
| removed |     -112 B | <0.1% → 0.0% |    112 B → 0 B |   1 → 0 | `0xaaaab879f97f`     | `<unknown>` |
| removed |     -112 B | <0.1% → 0.0% |    112 B → 0 B |   1 → 0 | `0xaaaab89311bf`     | `<unknown>` |
| removed |     -112 B | <0.1% → 0.0% |    112 B → 0 B |   1 → 0 | `0xaaaab881808f`     | `<unknown>` |

#### Callees

Callees with the largest change in contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `0x22aaf` (`/tmp/nix-shell.NcwiQ3/profiler-md-input-generation.fqUYfr/fortran-current/binary`)

| Change |       Delta |            % |           Size | Objects | Callee    | Location    |
| -----: | ----------: | -----------: | -------------: | ------: | --------- | ----------- |
|    new | +19.882 KiB | 0.0% → 56.3% | 0 B → 19.9 KiB | 0 → 176 | `_start`  | `<unknown>` |
|    new | +11.703 KiB | 0.0% → 33.1% | 0 B → 11.7 KiB | 0 → 107 | `0x1e5ef` | `[stack]`   |
|    new |  +3.718 KiB | 0.0% → 10.5% | 0 B → 3.72 KiB |  0 → 34 | `0x1e85f` | `[stack]`   |

##### `0x1e85f` (`[stack]`)

| Change |       Delta |            % |           Size | Objects | Callee                                    | Location                  |
| -----: | ----------: | -----------: | -------------: | ------: | ----------------------------------------- | ------------------------- |
|    new | +16.953 KiB | 0.0% → 57.2% |   0 B → 17 KiB | 0 → 155 | `_start`                                  | `<unknown>`               |
|    new |  +8.531 KiB | 0.0% → 28.8% | 0 B → 8.53 KiB |  0 → 78 | `__json_value_module_MOD_parse_object`    | `./json_value_module.F90` |
|    new |  +3.718 KiB | 0.0% → 12.6% | 0 B → 3.72 KiB |  0 → 34 | `__json_value_module_MOD_parse_value`     | `./json_value_module.F90` |
|    new |      +312 B |  0.0% → 1.0% |    0 B → 312 B |  0 → 39 | `0xaaaad7a9e7ff`                          | `<unknown>`               |
|    new |      +112 B |  0.0% → 0.4% |    0 B → 112 B |   0 → 1 | `__json_value_module_MOD_pop_char.part.0` | `./json_value_module.F90` |

##### `0x1e5ef` (`[stack]`)

| Change |       Delta |            % |           Size | Objects | Callee    | Location    |
| -----: | ----------: | -----------: | -------------: | ------: | --------- | ----------- |
|    new | +13.234 KiB | 0.0% → 52.4% | 0 B → 13.2 KiB | 0 → 121 | `0x1e85f` | `[stack]`   |
|    new | +12.031 KiB | 0.0% → 47.6% |   0 B → 12 KiB | 0 → 110 | `_start`  | `<unknown>` |

##### `0x1dd9f` (`[stack]`)

| Change |      Delta |             % |           Size | Objects | Callee                                 | Location                  |
| -----: | ---------: | ------------: | -------------: | ------: | -------------------------------------- | ------------------------- |
|    new | +8.531 KiB | 0.0% → 100.0% | 0 B → 8.53 KiB |  0 → 78 | `__json_value_module_MOD_parse_string` | `./json_value_module.F90` |

##### `0x1d36f` (`[stack]`)

| Change |      Delta |             % |           Size | Objects | Callee   | Location    |
| -----: | ---------: | ------------: | -------------: | ------: | -------- | ----------- |
|    new | +8.531 KiB | 0.0% → 100.0% | 0 B → 8.53 KiB |  0 → 78 | `_start` | `<unknown>` |

##### `0x1d46f` (`[stack]`)

| Change |      Delta |            % |           Size | Objects | Callee    | Location                                                                           |
| -----: | ---------: | -----------: | -------------: | ------: | --------- | ---------------------------------------------------------------------------------- |
|    new | +4.156 KiB | 0.0% → 48.7% | 0 B → 4.16 KiB |  0 → 38 | `0x22aaf` | `/tmp/nix-shell.NcwiQ3/profiler-md-input-generation.fqUYfr/fortran-current/binary` |
|    new | +4.156 KiB | 0.0% → 48.7% | 0 B → 4.16 KiB |  0 → 38 | `main`    | `/out/profile.f90`                                                                 |
|    new |     +224 B |  0.0% → 2.6% |    0 B → 224 B |   0 → 2 | `0x1e5ef` | `[stack]`                                                                          |

##### `0xffff898e003f` (`<unknown>`)

| Change |      Delta |            % |           Size | Objects | Callee    | Location                                           |
| -----: | ---------: | -----------: | -------------: | ------: | --------- | -------------------------------------------------- |
|    new | +4.156 KiB | 0.0% → 50.0% | 0 B → 4.16 KiB |  0 → 38 | `0x2f9e7` | `/usr/lib/aarch64-linux-gnu/libtcmalloc.so.4.5.10` |
|    new | +4.156 KiB | 0.0% → 50.0% | 0 B → 4.16 KiB |  0 → 38 | `_start`  | `<unknown>`                                        |

##### `0xaaaad7a9e7ff` (`<unknown>`)

| Change |      Delta |            % |           Size | Objects | Callee           | Location    |
| -----: | ---------: | -----------: | -------------: | ------: | ---------------- | ----------- |
|    new | +2.314 KiB | 0.0% → 41.1% | 0 B → 2.31 KiB | 0 → 153 | `_start`         | `<unknown>` |
|    new | +2.016 KiB | 0.0% → 35.9% | 0 B → 2.02 KiB | 0 → 103 | `0xffff8a179d67` | `<unknown>` |
|    new | +1.293 KiB | 0.0% → 23.0% | 0 B → 1.29 KiB |  0 → 51 | `0xffff8a178fff` | `<unknown>` |

##### `0x1d6e7` (`[stack]`)

| Change |      Delta |             % |           Size | Objects | Callee   | Location    |
| -----: | ---------: | ------------: | -------------: | ------: | -------- | ----------- |
|    new | +4.265 KiB | 0.0% → 100.0% | 0 B → 4.27 KiB |  0 → 39 | `_start` | `<unknown>` |

##### `0x1d3e7` (`[stack]`)

| Change |      Delta |             % |           Size | Objects | Callee    | Location  |
| -----: | ---------: | ------------: | -------------: | ------: | --------- | --------- |
|    new | +4.265 KiB | 0.0% → 100.0% | 0 B → 4.27 KiB |  0 → 39 | `0x1d6e7` | `[stack]` |

##### `0x1db7f` (`[stack]`)

| Change |      Delta |             % |           Size | Objects | Callee   | Location    |
| -----: | ---------: | ------------: | -------------: | ------: | -------- | ----------- |
|    new | +4.046 KiB | 0.0% → 100.0% | 0 B → 4.05 KiB |  0 → 37 | `_start` | `<unknown>` |

##### `0x1da37` (`[stack]`)

| Change |      Delta |             % |           Size | Objects | Callee    | Location  |
| -----: | ---------: | ------------: | -------------: | ------: | --------- | --------- |
|    new | +4.046 KiB | 0.0% → 100.0% | 0 B → 4.05 KiB |  0 → 37 | `0x1db7f` | `[stack]` |

##### `0x1d84f` (`[stack]`)

| Change |      Delta |             % |           Size | Objects | Callee | Location    |
| -----: | ---------: | ------------: | -------------: | ------: | ------ | ----------- |
|    new | +3.718 KiB | 0.0% → 100.0% | 0 B → 3.72 KiB |  0 → 34 | `0x18` | `<unknown>` |

##### `0x1d74f` (`[stack]`)

| Change |    Delta |             % |          Size | Objects | Callee   | Location    |
| -----: | -------: | ------------: | ------------: | ------: | -------- | ----------- |
|    new | +3.5 KiB | 0.0% → 100.0% | 0 B → 3.5 KiB |  0 → 32 | `_start` | `<unknown>` |

##### `0xffff8a178fff` (`<unknown>`)

| Change |      Delta |            % |           Size | Objects | Callee    | Location                                           |
| -----: | ---------: | -----------: | -------------: | ------: | --------- | -------------------------------------------------- |
|    new | +1.731 KiB | 0.0% → 54.3% | 0 B → 1.73 KiB |  0 → 55 | `_start`  | `<unknown>`                                        |
|    new |  +1.22 KiB | 0.0% → 38.3% | 0 B → 1.22 KiB |  0 → 78 | `0x3131f` | `/usr/lib/aarch64-linux-gnu/libtcmalloc.so.4.5.10` |
|    new |     +224 B |  0.0% → 6.9% |    0 B → 224 B |   0 → 2 | `0x3143b` | `/usr/lib/aarch64-linux-gnu/libtcmalloc.so.4.5.10` |
|    new |      +18 B |  0.0% → 0.6% |     0 B → 18 B |   0 → 1 | `0x3142b` | `/usr/lib/aarch64-linux-gnu/libtcmalloc.so.4.5.10` |

##### `0xffff8a179d67` (`<unknown>`)

| Change |      Delta |            % |           Size | Objects | Callee           | Location    |
| -----: | ---------: | -----------: | -------------: | ------: | ---------------- | ----------- |
|    new | +2.016 KiB | 0.0% → 65.2% | 0 B → 2.02 KiB | 0 → 103 | `_start`         | `<unknown>` |
|    new | +1.075 KiB | 0.0% → 34.8% | 0 B → 1.08 KiB |  0 → 45 | `0xaaaad7a9e7ff` | `<unknown>` |

##### `0xe95906d9111bd8ff` (`<unknown>`)

| Change |      Delta |            % |           Size | Objects | Callee        | Location    |
| -----: | ---------: | -----------: | -------------: | ------: | ------------- | ----------- |
|    new | +1.371 KiB | 0.0% → 94.7% | 0 B → 1.37 KiB |  0 → 78 | `0x55555ffff` | `<unknown>` |
|    new |      +78 B |  0.0% → 5.3% |     0 B → 78 B |  0 → 39 | `_start`      | `<unknown>` |

##### `0x55555ffff` (`<unknown>`)

| Change |      Delta |             % |           Size | Objects | Callee   | Location    |
| -----: | ---------: | ------------: | -------------: | ------: | -------- | ----------- |
|    new | +1.371 KiB | 0.0% → 100.0% | 0 B → 1.37 KiB |  0 → 78 | `_start` | `<unknown>` |

##### `0xbd4e` (`<unknown>`)

| Change |  Delta |            % |        Size | Objects | Callee    | Location    |
| -----: | -----: | -----------: | ----------: | ------: | --------- | ----------- |
|    new | +856 B | 0.0% → 73.3% | 0 B → 856 B |  0 → 82 | `_start`  | `<unknown>` |
|    new | +312 B | 0.0% → 26.7% | 0 B → 312 B |  0 → 39 | `0x1e0af` | `[stack]`   |

##### `0x1d02f` (`[stack]`)

| Change |  Delta |             % |        Size | Objects | Callee   | Location    |
| -----: | -----: | ------------: | ----------: | ------: | -------- | ----------- |
|    new | +808 B | 0.0% → 100.0% | 0 B → 808 B |  0 → 39 | `_start` | `<unknown>` |

##### `0x1dc4f` (`[stack]`)

| Change |  Delta |             % |        Size | Objects | Callee   | Location    |
| -----: | -----: | ------------: | ----------: | ------: | -------- | ----------- |
|    new | +702 B | 0.0% → 100.0% | 0 B → 702 B |  0 → 39 | `_start` | `<unknown>` |

##### `0x1da4f` (`[stack]`)

| Change |  Delta |            % |        Size | Objects | Callee     | Location                                          |
| -----: | -----: | -----------: | ----------: | ------: | ---------- | ------------------------------------------------- |
|    new | +351 B | 0.0% → 75.8% | 0 B → 351 B |  0 → 39 | `_start`   | `<unknown>`                                       |
|    new | +112 B | 0.0% → 24.2% | 0 B → 112 B |   0 → 1 | `0x109f1f` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `0x1d12f` (`[stack]`)

| Change |  Delta |             % |        Size | Objects | Callee                                 | Location                  |
| -----: | -----: | ------------: | ----------: | ------: | -------------------------------------- | ------------------------- |
|    new | +383 B | 0.0% → 100.0% | 0 B → 383 B |  0 → 39 | `__json_value_module_MOD_parse_object` | `./json_value_module.F90` |

##### `0x1d4af` (`[stack]`)

| Change |  Delta |             % |        Size | Objects | Callee   | Location    |
| -----: | -----: | ------------: | ----------: | ------: | -------- | ----------- |
|    new | +336 B | 0.0% → 100.0% | 0 B → 336 B |   0 → 3 | `_start` | `<unknown>` |

##### `0x1dd2f` (`[stack]`)

| Change |  Delta |             % |        Size | Objects | Callee   | Location    |
| -----: | -----: | ------------: | ----------: | ------: | -------- | ----------- |
|    new | +312 B | 0.0% → 100.0% | 0 B → 312 B |  0 → 39 | `_start` | `<unknown>` |

##### `0x1e0af` (`[stack]`)

| Change |  Delta |             % |        Size | Objects | Callee   | Location    |
| -----: | -----: | ------------: | ----------: | ------: | -------- | ----------- |
|    new | +312 B | 0.0% → 100.0% | 0 B → 312 B |  0 → 39 | `_start` | `<unknown>` |

##### `0x1db4f` (`[stack]`)

| Change |  Delta |             % |        Size | Objects | Callee                                 | Location                  |
| -----: | -----: | ------------: | ----------: | ------: | -------------------------------------- | ------------------------- |
|    new | +234 B | 0.0% → 100.0% | 0 B → 234 B |  0 → 39 | `__json_value_module_MOD_parse_object` | `./json_value_module.F90` |

##### `0xaaaad41cfb07` (`<unknown>`)

| Change |  Delta |            % |        Size | Objects | Callee   | Location    |
| -----: | -----: | -----------: | ----------: | ------: | -------- | ----------- |
|    new | +112 B | 0.0% → 50.0% | 0 B → 112 B |   0 → 1 | `_start` | `<unknown>` |
|    new | +112 B | 0.0% → 50.0% | 0 B → 112 B |   0 → 1 | `0x0`    | `<unknown>` |

##### `0xaaaad7c57677` (`<unknown>`)

| Change |  Delta |             % |        Size | Objects | Callee   | Location    |
| -----: | -----: | ------------: | ----------: | ------: | -------- | ----------- |
|    new | +120 B | 0.0% → 100.0% | 0 B → 120 B |   0 → 2 | `_start` | `<unknown>` |

##### `0xffffffffffffffff` (`<unknown>`)

|  Change |       Delta |            % |         Size | Objects | Callee    | Location                                                                           |
| ------: | ----------: | -----------: | -----------: | ------: | --------- | ---------------------------------------------------------------------------------- |
| removed | -14.984 KiB | 39.4% → 0.0% | 15 KiB → 0 B | 137 → 0 | `0x228cf` | `/tmp/nix-shell.NcwiQ3/profiler-md-input-generation.fqUYfr/fortran-base/binary`    |
|     new | +14.984 KiB | 0.0% → 39.3% | 0 B → 15 KiB | 0 → 137 | `0x22aaf` | `/tmp/nix-shell.NcwiQ3/profiler-md-input-generation.fqUYfr/fortran-current/binary` |
| removed |      -856 B |  2.2% → 0.0% |  856 B → 0 B |  82 → 0 | `0xc3d2`  | `<unknown>`                                                                        |
|     new |      +856 B |  0.0% → 2.2% |  0 B → 856 B |  0 → 82 | `0xbd4e`  | `<unknown>`                                                                        |
|     new |      +112 B |  0.0% → 0.3% |  0 B → 112 B |   0 → 1 | `0x1e5ef` | `[stack]`                                                                          |

##### `0xaaaad7a96a7f` (`<unknown>`)

| Change |  Delta |             % |        Size | Objects | Callee | Location    |
| -----: | -----: | ------------: | ----------: | ------: | ------ | ----------- |
|    new | +112 B | 0.0% → 100.0% | 0 B → 112 B |   0 → 1 | `0x53` | `<unknown>` |

##### `0xaaaad7b89c4f` (`<unknown>`)

| Change |  Delta |             % |        Size | Objects | Callee           | Location    |
| -----: | -----: | ------------: | ----------: | ------: | ---------------- | ----------- |
|    new | +112 B | 0.0% → 100.0% | 0 B → 112 B |   0 → 1 | `0xffff8a178fff` | `<unknown>` |

##### `0xaaaad7b417cf` (`<unknown>`)

| Change |  Delta |             % |        Size | Objects | Callee   | Location    |
| -----: | -----: | ------------: | ----------: | ------: | -------- | ----------- |
|    new | +112 B | 0.0% → 100.0% | 0 B → 112 B |   0 → 1 | `_start` | `<unknown>` |

##### `0xaaaad7b6d7a7` (`<unknown>`)

| Change |  Delta |             % |        Size | Objects | Callee   | Location    |
| -----: | -----: | ------------: | ----------: | ------: | -------- | ----------- |
|    new | +112 B | 0.0% → 100.0% | 0 B → 112 B |   0 → 1 | `_start` | `<unknown>` |

##### `0xaaaad7bcf73f` (`<unknown>`)

| Change |  Delta |             % |        Size | Objects | Callee | Location    |
| -----: | -----: | ------------: | ----------: | ------: | ------ | ----------- |
|    new | +112 B | 0.0% → 100.0% | 0 B → 112 B |   0 → 1 | `0x5c` | `<unknown>` |

##### `0xaaaad7c31b6f` (`<unknown>`)

| Change |  Delta |             % |        Size | Objects | Callee   | Location    |
| -----: | -----: | ------------: | ----------: | ------: | -------- | ----------- |
|    new | +112 B | 0.0% → 100.0% | 0 B → 112 B |   0 → 1 | `_start` | `<unknown>` |

##### `0xaaaad7ba598f` (`<unknown>`)

| Change |  Delta |             % |        Size | Objects | Callee   | Location    |
| -----: | -----: | ------------: | ----------: | ------: | -------- | ----------- |
|    new | +112 B | 0.0% → 100.0% | 0 B → 112 B |   0 → 1 | `_start` | `<unknown>` |

##### `0xaaaad7bcfc7f` (`<unknown>`)

| Change |  Delta |             % |        Size | Objects | Callee | Location    |
| -----: | -----: | ------------: | ----------: | ------: | ------ | ----------- |
|    new | +112 B | 0.0% → 100.0% | 0 B → 112 B |   0 → 1 | `0x58` | `<unknown>` |

##### `0xaaaad7c4bf0f` (`<unknown>`)

| Change |  Delta |             % |        Size | Objects | Callee | Location    |
| -----: | -----: | ------------: | ----------: | ------: | ------ | ----------- |
|    new | +112 B | 0.0% → 100.0% | 0 B → 112 B |   0 → 1 | `0x61` | `<unknown>` |

##### `0xaaaad7ae0e3f` (`<unknown>`)

| Change |  Delta |             % |        Size | Objects | Callee | Location    |
| -----: | -----: | ------------: | ----------: | ------: | ------ | ----------- |
|    new | +112 B | 0.0% → 100.0% | 0 B → 112 B |   0 → 1 | `0x3d` | `<unknown>` |

##### `0x228cf` (`/tmp/nix-shell.NcwiQ3/profiler-md-input-generation.fqUYfr/fortran-base/binary`)

|  Change |       Delta |            % |           Size | Objects | Callee    | Location    |
| ------: | ----------: | -----------: | -------------: | ------: | --------- | ----------- |
| removed |  -19.14 KiB | 49.3% → 0.0% | 19.1 KiB → 0 B | 175 → 0 | `_start`  | `<unknown>` |
| removed | -11.703 KiB | 30.1% → 0.0% | 11.7 KiB → 0 B | 107 → 0 | `0x1f22f` | `[stack]`   |
| removed |  -4.265 KiB | 11.0% → 0.0% | 4.27 KiB → 0 B |  39 → 0 | `0x1e337` | `[stack]`   |
| removed |  -3.718 KiB |  9.6% → 0.0% | 3.72 KiB → 0 B |  34 → 0 | `0x1f47f` | `[stack]`   |

##### `0x1f47f` (`[stack]`)

|  Change |       Delta |            % |           Size | Objects | Callee                                    | Location                  |
| ------: | ----------: | -----------: | -------------: | ------: | ----------------------------------------- | ------------------------- |
| removed | -16.953 KiB | 57.2% → 0.0% |   17 KiB → 0 B | 155 → 0 | `_start`                                  | `<unknown>`               |
| removed |  -8.531 KiB | 28.8% → 0.0% | 8.53 KiB → 0 B |  78 → 0 | `__json_value_module_MOD_parse_object`    | `./json_value_module.F90` |
| removed |  -3.718 KiB | 12.6% → 0.0% | 3.72 KiB → 0 B |  34 → 0 | `__json_value_module_MOD_parse_value`     | `./json_value_module.F90` |
| removed |      -312 B |  1.0% → 0.0% |    312 B → 0 B |  39 → 0 | `0xaaaab87a67ff`                          | `<unknown>`               |
| removed |      -112 B |  0.4% → 0.0% |    112 B → 0 B |   1 → 0 | `__json_value_module_MOD_pop_char.part.0` | `./json_value_module.F90` |

##### `0x1f22f` (`[stack]`)

|  Change |       Delta |            % |           Size | Objects | Callee    | Location    |
| ------: | ----------: | -----------: | -------------: | ------: | --------- | ----------- |
| removed | -13.234 KiB | 52.6% → 0.0% | 13.2 KiB → 0 B | 121 → 0 | `0x1f47f` | `[stack]`   |
| removed | -11.921 KiB | 47.4% → 0.0% | 11.9 KiB → 0 B | 109 → 0 | `_start`  | `<unknown>` |

##### `0x1e9ef` (`[stack]`)

|  Change |      Delta |             % |           Size | Objects | Callee                                 | Location                  |
| ------: | ---------: | ------------: | -------------: | ------: | -------------------------------------- | ------------------------- |
| removed | -8.531 KiB | 100.0% → 0.0% | 8.53 KiB → 0 B |  78 → 0 | `__json_value_module_MOD_parse_string` | `./json_value_module.F90` |

##### `0x1dfbf` (`[stack]`)

|  Change |      Delta |             % |           Size | Objects | Callee   | Location    |
| ------: | ---------: | ------------: | -------------: | ------: | -------- | ----------- |
| removed | -8.531 KiB | 100.0% → 0.0% | 8.53 KiB → 0 B |  78 → 0 | `_start` | `<unknown>` |

##### `0x1e0bf` (`[stack]`)

|  Change |      Delta |            % |           Size | Objects | Callee    | Location                                                                        |
| ------: | ---------: | -----------: | -------------: | ------: | --------- | ------------------------------------------------------------------------------- |
| removed | -4.156 KiB | 48.7% → 0.0% | 4.16 KiB → 0 B |  38 → 0 | `main`    | `/out/profile.f90`                                                              |
| removed | -4.156 KiB | 48.7% → 0.0% | 4.16 KiB → 0 B |  38 → 0 | `0x228cf` | `/tmp/nix-shell.NcwiQ3/profiler-md-input-generation.fqUYfr/fortran-base/binary` |
| removed |     -224 B |  2.6% → 0.0% |    224 B → 0 B |   2 → 0 | `0x1f22f` | `[stack]`                                                                       |

##### `0xffffa218003f` (`<unknown>`)

|  Change |      Delta |            % |           Size | Objects | Callee    | Location                                           |
| ------: | ---------: | -----------: | -------------: | ------: | --------- | -------------------------------------------------- |
| removed | -4.156 KiB | 50.0% → 0.0% | 4.16 KiB → 0 B |  38 → 0 | `0x2f9e7` | `/usr/lib/aarch64-linux-gnu/libtcmalloc.so.4.5.10` |
| removed | -4.156 KiB | 50.0% → 0.0% | 4.16 KiB → 0 B |  38 → 0 | `_start`  | `<unknown>`                                        |

##### `0xaaaab87a67ff` (`<unknown>`)

|  Change |      Delta |            % |           Size | Objects | Callee           | Location    |
| ------: | ---------: | -----------: | -------------: | ------: | ---------------- | ----------- |
| removed | -2.314 KiB | 41.1% → 0.0% | 2.31 KiB → 0 B | 153 → 0 | `_start`         | `<unknown>` |
| removed | -2.016 KiB | 35.9% → 0.0% | 2.02 KiB → 0 B | 103 → 0 | `0xffffa2a19d67` | `<unknown>` |
| removed | -1.293 KiB | 23.0% → 0.0% | 1.29 KiB → 0 B |  51 → 0 | `0xffffa2a18fff` | `<unknown>` |

##### `0x1e337` (`[stack]`)

|  Change |      Delta |             % |           Size | Objects | Callee   | Location    |
| ------: | ---------: | ------------: | -------------: | ------: | -------- | ----------- |
| removed | -4.265 KiB | 100.0% → 0.0% | 4.27 KiB → 0 B |  39 → 0 | `_start` | `<unknown>` |

##### `0x1e7cf` (`[stack]`)

|  Change |      Delta |             % |           Size | Objects | Callee   | Location    |
| ------: | ---------: | ------------: | -------------: | ------: | -------- | ----------- |
| removed | -4.046 KiB | 100.0% → 0.0% | 4.05 KiB → 0 B |  37 → 0 | `_start` | `<unknown>` |

##### `0x1e687` (`[stack]`)

|  Change |      Delta |             % |           Size | Objects | Callee    | Location  |
| ------: | ---------: | ------------: | -------------: | ------: | --------- | --------- |
| removed | -4.046 KiB | 100.0% → 0.0% | 4.05 KiB → 0 B |  37 → 0 | `0x1e7cf` | `[stack]` |

##### `0x1e49f` (`[stack]`)

|  Change |      Delta |             % |           Size | Objects | Callee | Location    |
| ------: | ---------: | ------------: | -------------: | ------: | ------ | ----------- |
| removed | -3.718 KiB | 100.0% → 0.0% | 3.72 KiB → 0 B |  34 → 0 | `0x18` | `<unknown>` |

##### `0x1e39f` (`[stack]`)

|  Change |    Delta |             % |          Size | Objects | Callee   | Location    |
| ------: | -------: | ------------: | ------------: | ------: | -------- | ----------- |
| removed | -3.5 KiB | 100.0% → 0.0% | 3.5 KiB → 0 B |  32 → 0 | `_start` | `<unknown>` |

##### `0xffffa2a18fff` (`<unknown>`)

|  Change |      Delta |            % |           Size | Objects | Callee    | Location                                           |
| ------: | ---------: | -----------: | -------------: | ------: | --------- | -------------------------------------------------- |
| removed | -1.731 KiB | 54.3% → 0.0% | 1.73 KiB → 0 B |  55 → 0 | `_start`  | `<unknown>`                                        |
| removed |  -1.22 KiB | 38.3% → 0.0% | 1.22 KiB → 0 B |  78 → 0 | `0x3131f` | `/usr/lib/aarch64-linux-gnu/libtcmalloc.so.4.5.10` |
| removed |     -224 B |  6.9% → 0.0% |    224 B → 0 B |   2 → 0 | `0x3143b` | `/usr/lib/aarch64-linux-gnu/libtcmalloc.so.4.5.10` |
| removed |      -18 B |  0.6% → 0.0% |     18 B → 0 B |   1 → 0 | `0x3142b` | `/usr/lib/aarch64-linux-gnu/libtcmalloc.so.4.5.10` |

##### `0xffffa2a19d67` (`<unknown>`)

|  Change |      Delta |            % |           Size | Objects | Callee           | Location    |
| ------: | ---------: | -----------: | -------------: | ------: | ---------------- | ----------- |
| removed | -2.016 KiB | 65.2% → 0.0% | 2.02 KiB → 0 B | 103 → 0 | `_start`         | `<unknown>` |
| removed | -1.075 KiB | 34.8% → 0.0% | 1.08 KiB → 0 B |  45 → 0 | `0xaaaab87a67ff` | `<unknown>` |

##### `0x9a971f3bf4c75dff` (`<unknown>`)

|  Change |      Delta |            % |           Size | Objects | Callee        | Location    |
| ------: | ---------: | -----------: | -------------: | ------: | ------------- | ----------- |
| removed | -1.371 KiB | 94.7% → 0.0% | 1.37 KiB → 0 B |  78 → 0 | `0x55554ffff` | `<unknown>` |
| removed |      -78 B |  5.3% → 0.0% |     78 B → 0 B |  39 → 0 | `_start`      | `<unknown>` |

##### `0x55554ffff` (`<unknown>`)

|  Change |      Delta |             % |           Size | Objects | Callee   | Location    |
| ------: | ---------: | ------------: | -------------: | ------: | -------- | ----------- |
| removed | -1.371 KiB | 100.0% → 0.0% | 1.37 KiB → 0 B |  78 → 0 | `_start` | `<unknown>` |

##### `0xc3d2` (`<unknown>`)

|  Change |  Delta |            % |        Size | Objects | Callee    | Location    |
| ------: | -----: | -----------: | ----------: | ------: | --------- | ----------- |
| removed | -856 B | 73.3% → 0.0% | 856 B → 0 B |  82 → 0 | `_start`  | `<unknown>` |
| removed | -312 B | 26.7% → 0.0% | 312 B → 0 B |  39 → 0 | `0x1ecff` | `[stack]`   |

##### `0x1dc7f` (`[stack]`)

|  Change |  Delta |             % |        Size | Objects | Callee   | Location    |
| ------: | -----: | ------------: | ----------: | ------: | -------- | ----------- |
| removed | -808 B | 100.0% → 0.0% | 808 B → 0 B |  39 → 0 | `_start` | `<unknown>` |

##### `0x1ef2f` (`[stack]`)

|  Change |  Delta |             % |        Size | Objects | Callee   | Location    |
| ------: | -----: | ------------: | ----------: | ------: | -------- | ----------- |
| removed | -760 B | 100.0% → 0.0% | 760 B → 0 B |   1 → 0 | `_start` | `<unknown>` |

##### `0x1e89f` (`[stack]`)

|  Change |  Delta |             % |        Size | Objects | Callee   | Location    |
| ------: | -----: | ------------: | ----------: | ------: | -------- | ----------- |
| removed | -702 B | 100.0% → 0.0% | 702 B → 0 B |  39 → 0 | `_start` | `<unknown>` |

##### `0x1e69f` (`[stack]`)

|  Change |  Delta |            % |        Size | Objects | Callee     | Location                                          |
| ------: | -----: | -----------: | ----------: | ------: | ---------- | ------------------------------------------------- |
| removed | -351 B | 75.8% → 0.0% | 351 B → 0 B |  39 → 0 | `_start`   | `<unknown>`                                       |
| removed | -112 B | 24.2% → 0.0% | 112 B → 0 B |   1 → 0 | `0x109f1f` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `0x1dd7f` (`[stack]`)

|  Change |  Delta |             % |        Size | Objects | Callee                                 | Location                  |
| ------: | -----: | ------------: | ----------: | ------: | -------------------------------------- | ------------------------- |
| removed | -383 B | 100.0% → 0.0% | 383 B → 0 B |  39 → 0 | `__json_value_module_MOD_parse_object` | `./json_value_module.F90` |

##### `0x1e0ff` (`[stack]`)

|  Change |  Delta |             % |        Size | Objects | Callee   | Location    |
| ------: | -----: | ------------: | ----------: | ------: | -------- | ----------- |
| removed | -336 B | 100.0% → 0.0% | 336 B → 0 B |   3 → 0 | `_start` | `<unknown>` |

##### `0x1e97f` (`[stack]`)

|  Change |  Delta |             % |        Size | Objects | Callee   | Location    |
| ------: | -----: | ------------: | ----------: | ------: | -------- | ----------- |
| removed | -312 B | 100.0% → 0.0% | 312 B → 0 B |  39 → 0 | `_start` | `<unknown>` |

##### `0x1ecff` (`[stack]`)

|  Change |  Delta |             % |        Size | Objects | Callee   | Location    |
| ------: | -----: | ------------: | ----------: | ------: | -------- | ----------- |
| removed | -312 B | 100.0% → 0.0% | 312 B → 0 B |  39 → 0 | `_start` | `<unknown>` |

##### `0x1e79f` (`[stack]`)

|  Change |  Delta |             % |        Size | Objects | Callee                                 | Location                  |
| ------: | -----: | ------------: | ----------: | ------: | -------------------------------------- | ------------------------- |
| removed | -234 B | 100.0% → 0.0% | 234 B → 0 B |  39 → 0 | `__json_value_module_MOD_parse_object` | `./json_value_module.F90` |

##### `0xaaaab611fb07` (`<unknown>`)

|  Change |  Delta |            % |        Size | Objects | Callee   | Location    |
| ------: | -----: | -----------: | ----------: | ------: | -------- | ----------- |
| removed | -112 B | 50.0% → 0.0% | 112 B → 0 B |   1 → 0 | `0x0`    | `<unknown>` |
| removed | -112 B | 50.0% → 0.0% | 112 B → 0 B |   1 → 0 | `_start` | `<unknown>` |

##### `0xaaaab895f677` (`<unknown>`)

|  Change |  Delta |             % |        Size | Objects | Callee   | Location    |
| ------: | -----: | ------------: | ----------: | ------: | -------- | ----------- |
| removed | -120 B | 100.0% → 0.0% | 120 B → 0 B |   2 → 0 | `_start` | `<unknown>` |

##### `0xaaaab8849377` (`<unknown>`)

|  Change |  Delta |             % |        Size | Objects | Callee   | Location    |
| ------: | -----: | ------------: | ----------: | ------: | -------- | ----------- |
| removed | -112 B | 100.0% → 0.0% | 112 B → 0 B |   1 → 0 | `_start` | `<unknown>` |

##### `0xaaaab88d7a3f` (`<unknown>`)

|  Change |  Delta |             % |        Size | Objects | Callee | Location    |
| ------: | -----: | ------------: | ----------: | ------: | ------ | ----------- |
| removed | -112 B | 100.0% → 0.0% | 112 B → 0 B |   1 → 0 | `0x55` | `<unknown>` |

##### `0xaaaab88d6bff` (`<unknown>`)

|  Change |  Delta |             % |        Size | Objects | Callee | Location    |
| ------: | -----: | ------------: | ----------: | ------: | ------ | ----------- |
| removed | -112 B | 100.0% → 0.0% | 112 B → 0 B |   1 → 0 | `0x51` | `<unknown>` |

##### `0xaaaab89bac9f` (`<unknown>`)

|  Change |  Delta |             % |        Size | Objects | Callee   | Location    |
| ------: | -----: | ------------: | ----------: | ------: | -------- | ----------- |
| removed | -112 B | 100.0% → 0.0% | 112 B → 0 B |   1 → 0 | `_start` | `<unknown>` |

##### `0xaaaab879f73f` (`<unknown>`)

|  Change |  Delta |             % |        Size | Objects | Callee | Location    |
| ------: | -----: | ------------: | ----------: | ------: | ------ | ----------- |
| removed | -112 B | 100.0% → 0.0% | 112 B → 0 B |   1 → 0 | `0x51` | `<unknown>` |

##### `0xaaaab88d67df` (`<unknown>`)

|  Change |  Delta |             % |        Size | Objects | Callee | Location    |
| ------: | -----: | ------------: | ----------: | ------: | ------ | ----------- |
| removed | -112 B | 100.0% → 0.0% | 112 B → 0 B |   1 → 0 | `0x59` | `<unknown>` |

##### `0xaaaab8939b6f` (`<unknown>`)

|  Change |  Delta |             % |        Size | Objects | Callee   | Location    |
| ------: | -----: | ------------: | ----------: | ------: | -------- | ----------- |
| removed | -112 B | 100.0% → 0.0% | 112 B → 0 B |   1 → 0 | `_start` | `<unknown>` |

##### `0xaaaab879e89f` (`<unknown>`)

|  Change |  Delta |             % |        Size | Objects | Callee | Location    |
| ------: | -----: | ------------: | ----------: | ------: | ------ | ----------- |
| removed | -112 B | 100.0% → 0.0% | 112 B → 0 B |   1 → 0 | `0x5e` | `<unknown>` |

##### `0xaaaab879f97f` (`<unknown>`)

|  Change |  Delta |             % |        Size | Objects | Callee | Location    |
| ------: | -----: | ------------: | ----------: | ------: | ------ | ----------- |
| removed | -112 B | 100.0% → 0.0% | 112 B → 0 B |   1 → 0 | `0x53` | `<unknown>` |

##### `0xaaaab89311bf` (`<unknown>`)

|  Change |  Delta |             % |        Size | Objects | Callee   | Location    |
| ------: | -----: | ------------: | ----------: | ------: | -------- | ----------- |
| removed | -112 B | 100.0% → 0.0% | 112 B → 0 B |   1 → 0 | `_start` | `<unknown>` |

##### `0xaaaab881808f` (`<unknown>`)

|  Change |  Delta |             % |        Size | Objects | Callee   | Location    |
| ------: | -----: | ------------: | ----------: | ------: | -------- | ----------- |
| removed | -112 B | 100.0% → 0.0% | 112 B → 0 B |   1 → 0 | `_start` | `<unknown>` |

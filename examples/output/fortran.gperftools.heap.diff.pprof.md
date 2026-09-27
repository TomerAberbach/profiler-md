# Allocated heap profile diff

Allocated 47.7 MiB → 41.2 MiB (-6.472 MiB, -13.6%) over 450,137 objects → 434,604 objects (111 B → 99.4 B per object).

| Category | Change |        Delta |             % |                Size |           Objects |
| -------- | -----: | -----------: | ------------: | ------------------: | ----------------: |
| Ours     |  +1.9% | +456.819 KiB | 48.2% → 56.9% |   23 MiB → 23.4 MiB | 423,756 → 410,084 |
| Native   | -28.0% |   -6.918 MiB | 51.8% → 43.1% | 24.7 MiB → 17.8 MiB |   26,381 → 24,520 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated directly in the function body, excluding callees.

|   Change |        Delta |             % |                Size |           Objects | Function                                      | Location                                         |
| -------: | -----------: | ------------: | ------------------: | ----------------: | --------------------------------------------- | ------------------------------------------------ |
|  +672.2% |     +605 KiB |   0.2% → 1.6% |    90 KiB → 695 KiB |       360 → 2,780 | `__json_value_module_MOD_parse_number`        | `src/json-fortran/src/json_value_module.F90`     |
|  +110.9% | +312.476 KiB |   0.6% → 1.4% |   282 KiB → 594 KiB |     2,937 → 6,277 | `0x1c24b`                                     | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| +1462.4% | +279.541 KiB |  <0.1% → 0.7% |  19.1 KiB → 299 KiB |       178 → 2,037 | `__json_string_utilities_MOD_unescape_string` | `src/json-fortran/src/json_string_utilities.F90` |
|    +0.7% |   +9.885 KiB |   3.0% → 3.5% | 1.44 MiB → 1.45 MiB | 122,261 → 122,682 | `__json_value_module_MOD_parse_object`        | `src/json-fortran/src/json_value_module.F90`     |
|    +0.1% |   +7.328 KiB | 29.9% → 34.6% | 14.2 MiB → 14.3 MiB | 133,404 → 133,471 | `__json_value_module_MOD_json_value_create`   | `src/json-fortran/src/json_value_module.F90`     |
|  +160.0% |   +1.265 KiB |         <0.1% |    810 B → 2.06 KiB |          81 → 162 | `MAIN__`                                      | `out/profile.f90`                                |
|      ~0% |        +72 B |   0.3% → 0.4% |             149 KiB |   19,115 → 19,124 | `__json_value_module_MOD_to_integer`          | `src/json-fortran/src/json_value_module.F90`     |

##### Ours

|   Change |        Delta |             % |                Size |           Objects | Function                                      | Location                                         |
| -------: | -----------: | ------------: | ------------------: | ----------------: | --------------------------------------------- | ------------------------------------------------ |
|  +672.2% |     +605 KiB |   0.2% → 1.6% |    90 KiB → 695 KiB |       360 → 2,780 | `__json_value_module_MOD_parse_number`        | `src/json-fortran/src/json_value_module.F90`     |
| +1462.4% | +279.541 KiB |  <0.1% → 0.7% |  19.1 KiB → 299 KiB |       178 → 2,037 | `__json_string_utilities_MOD_unescape_string` | `src/json-fortran/src/json_string_utilities.F90` |
|    +0.7% |   +9.885 KiB |   3.0% → 3.5% | 1.44 MiB → 1.45 MiB | 122,261 → 122,682 | `__json_value_module_MOD_parse_object`        | `src/json-fortran/src/json_value_module.F90`     |
|    +0.1% |   +7.328 KiB | 29.9% → 34.6% | 14.2 MiB → 14.3 MiB | 133,404 → 133,471 | `__json_value_module_MOD_json_value_create`   | `src/json-fortran/src/json_value_module.F90`     |
|  +160.0% |   +1.265 KiB |         <0.1% |    810 B → 2.06 KiB |          81 → 162 | `MAIN__`                                      | `out/profile.f90`                                |
|      ~0% |        +72 B |   0.3% → 0.4% |             149 KiB |   19,115 → 19,124 | `__json_value_module_MOD_to_integer`          | `src/json-fortran/src/json_value_module.F90`     |

##### Native

|  Change |        Delta |           % |              Size |       Objects | Function  | Location                                         |
| ------: | -----------: | ----------: | ----------------: | ------------: | --------- | ------------------------------------------------ |
| +110.9% | +312.476 KiB | 0.6% → 1.4% | 282 KiB → 594 KiB | 2,937 → 6,277 | `0x1c24b` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

#### Improvements

Functions with the largest decrease in bytes allocated directly in the function body, excluding callees.

|  Change |        Delta |             % |                Size |         Objects | Function                                        | Location                                         |
| ------: | -----------: | ------------: | ------------------: | --------------: | ----------------------------------------------- | ------------------------------------------------ |
|  -29.6% |   -7.223 MiB | 51.2% → 41.7% | 24.4 MiB → 17.2 MiB | 16,403 → 12,051 | `0x1c1b3`                                       | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| removed | -268.562 KiB |   0.6% → 0.0% |       269 KiB → 0 B |         897 → 0 | `__json_value_module_MOD_json_get_string`       | `src/json-fortran/src/json_value_module.F90`     |
|   -3.1% | -155.226 KiB | 10.2% → 11.5% | 4.88 MiB → 4.73 MiB | 64,240 → 52,270 | `__json_value_module_MOD_parse_string`          | `src/json-fortran/src/json_value_module.F90`     |
|  -64.0% |  -16.119 KiB |  0.1% → <0.1% | 25.2 KiB → 9.07 KiB |   7,763 → 3,637 | `__json_string_utilities_MOD_string_to_integer` | `src/json-fortran/src/json_string_utilities.F90` |
|   -0.3% |    -4.74 KiB |   3.7% → 4.3% | 1.77 MiB → 1.76 MiB | 41,437 → 41,310 | `__json_value_module_MOD_parse_value`           | `src/json-fortran/src/json_value_module.F90`     |
|  -18.2% |   -1.381 KiB |         <0.1% | 7.59 KiB → 6.21 KiB |   7,769 → 6,354 | `__json_value_module_MOD_to_string`             | `src/json-fortran/src/json_value_module.F90`     |
|  -19.6% |       -546 B |         <0.1% | 2.72 KiB → 2.19 KiB |   2,705 → 2,076 | `0x1c1f3`                                       | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|   -2.4% |       -536 B |         <0.1% | 21.4 KiB → 20.9 KiB |   4,336 → 4,116 | `0x9980f`                                       | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  -96.7% |       -237 B |         <0.1% |         245 B → 8 B |           1 → 8 | `__json_value_module_MOD_pop_char.part.0`       | `src/json-fortran/src/json_value_module.F90`     |
|   -0.5% |        -11 B |         <0.1% | 2.02 KiB → 2.01 KiB |          10 → 9 | `__json_value_module_MOD_json_initialize`       | `src/json-fortran/src/json_value_module.F90`     |

##### Ours

|  Change |        Delta |             % |                Size |         Objects | Function                                        | Location                                         |
| ------: | -----------: | ------------: | ------------------: | --------------: | ----------------------------------------------- | ------------------------------------------------ |
| removed | -268.562 KiB |   0.6% → 0.0% |       269 KiB → 0 B |         897 → 0 | `__json_value_module_MOD_json_get_string`       | `src/json-fortran/src/json_value_module.F90`     |
|   -3.1% | -155.226 KiB | 10.2% → 11.5% | 4.88 MiB → 4.73 MiB | 64,240 → 52,270 | `__json_value_module_MOD_parse_string`          | `src/json-fortran/src/json_value_module.F90`     |
|  -64.0% |  -16.119 KiB |  0.1% → <0.1% | 25.2 KiB → 9.07 KiB |   7,763 → 3,637 | `__json_string_utilities_MOD_string_to_integer` | `src/json-fortran/src/json_string_utilities.F90` |
|   -0.3% |    -4.74 KiB |   3.7% → 4.3% | 1.77 MiB → 1.76 MiB | 41,437 → 41,310 | `__json_value_module_MOD_parse_value`           | `src/json-fortran/src/json_value_module.F90`     |
|  -18.2% |   -1.381 KiB |         <0.1% | 7.59 KiB → 6.21 KiB |   7,769 → 6,354 | `__json_value_module_MOD_to_string`             | `src/json-fortran/src/json_value_module.F90`     |
|  -96.7% |       -237 B |         <0.1% |         245 B → 8 B |           1 → 8 | `__json_value_module_MOD_pop_char.part.0`       | `src/json-fortran/src/json_value_module.F90`     |
|   -0.5% |        -11 B |         <0.1% | 2.02 KiB → 2.01 KiB |          10 → 9 | `__json_value_module_MOD_json_initialize`       | `src/json-fortran/src/json_value_module.F90`     |

##### Native

| Change |      Delta |             % |                Size |         Objects | Function  | Location                                         |
| -----: | ---------: | ------------: | ------------------: | --------------: | --------- | ------------------------------------------------ |
| -29.6% | -7.223 MiB | 51.2% → 41.7% | 24.4 MiB → 17.2 MiB | 16,403 → 12,051 | `0x1c1b3` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| -19.6% |     -546 B |         <0.1% | 2.72 KiB → 2.19 KiB |   2,705 → 2,076 | `0x1c1f3` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  -2.4% |     -536 B |         <0.1% | 21.4 KiB → 20.9 KiB |   4,336 → 4,116 | `0x9980f` | `usr/lib/aarch64-linux-gnu/libc.so.6`            |

### Total size

#### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

|   Change |        Delta |             % |                Size |           Objects | Function                                      | Location                                                                          |
| -------: | -----------: | ------------: | ------------------: | ----------------: | --------------------------------------------- | --------------------------------------------------------------------------------- |
|   +33.9% |   +5.694 MiB | 35.2% → 54.6% | 16.8 MiB → 22.5 MiB | 238,054 → 231,808 | `__json_value_module_MOD_parse_array`         | `src/json-fortran/src/json_value_module.F90`                                      |
|      new | +932.182 KiB |   0.0% → 2.2% |       0 B → 932 KiB |         0 → 8,760 | `0x228cf`                                     | `tmp/nix-shell.eMJcEj/profiler-md-input-generation.40bx0a/fortran-current/binary` |
|      new | +730.352 KiB |   0.0% → 1.7% |       0 B → 730 KiB |         0 → 7,938 | `0x1eddf`                                     | `[stack]`                                                                         |
|    +5.6% |  +644.99 KiB | 23.6% → 28.9% | 11.3 MiB → 11.9 MiB | 138,003 → 135,682 | `0x27817`                                     | `usr/lib/aarch64-linux-gnu/libc.so.6`                                             |
|      new | +606.025 KiB |   0.0% → 1.4% |       0 B → 606 KiB |         0 → 5,684 | `0x1eb8f`                                     | `[stack]`                                                                         |
|      new | +486.593 KiB |   0.0% → 1.2% |       0 B → 487 KiB |         0 → 3,133 | `0xffffbbc48fff`                              | `<unknown>`                                                                       |
|    +3.3% | +451.263 KiB | 27.9% → 33.3% | 13.3 MiB → 13.7 MiB | 184,850 → 185,235 | `__json_value_module_MOD_json_parse_file`     | `src/json-fortran/src/json_value_module.F90`                                      |
|    +3.1% | +417.529 KiB | 27.2% → 32.4% | 12.9 MiB → 13.4 MiB | 177,529 → 175,450 | `__json_file_module_MOD_json_file_load`       | `src/json-fortran/src/json_file_module.F90`                                       |
|      new |  +411.89 KiB |   0.0% → 1.0% |       0 B → 412 KiB |           0 → 101 | `0xaaab03f7a177`                              | `<unknown>`                                                                       |
|      new | +403.734 KiB |   0.0% → 1.0% |       0 B → 404 KiB |            0 → 99 | `0xaaab03e6de5f`                              | `<unknown>`                                                                       |
|    +2.7% | +375.509 KiB | 28.1% → 33.5% | 13.4 MiB → 13.8 MiB | 169,249 → 168,318 | `MAIN__`                                      | `out/profile.f90`                                                                 |
|  +114.5% | +313.218 KiB |   0.6% → 1.4% |   273 KiB → 587 KiB |     2,917 → 6,258 | `0x10c847`                                    | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`                                  |
|  +114.5% | +313.218 KiB |   0.6% → 1.4% |   273 KiB → 587 KiB |     2,917 → 6,258 | `0x10ab63`                                    | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`                                  |
|  +114.5% | +313.218 KiB |   0.6% → 1.4% |   273 KiB → 587 KiB |     2,917 → 6,258 | `0x10b283`                                    | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`                                  |
|  +110.9% | +312.476 KiB |   0.6% → 1.4% |   282 KiB → 594 KiB |     2,937 → 6,277 | `0x1c24b`                                     | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`                                  |
| +1462.4% | +279.541 KiB |  <0.1% → 0.7% |  19.1 KiB → 299 KiB |       178 → 2,037 | `__json_string_utilities_MOD_unescape_string` | `src/json-fortran/src/json_string_utilities.F90`                                  |
|      new |     +234 KiB |   0.0% → 0.6% |       0 B → 234 KiB |           0 → 936 | `0x1e217`                                     | `[stack]`                                                                         |
|    +1.8% | +222.166 KiB | 25.8% → 30.4% | 12.3 MiB → 12.5 MiB | 149,037 → 146,846 | `0x27743`                                     | `usr/lib/aarch64-linux-gnu/libc.so.6`                                             |
|      new |  +211.89 KiB |   0.0% → 0.5% |       0 B → 212 KiB |         0 → 2,608 | `0xffffbb3b003f`                              | `<unknown>`                                                                       |
|      new | +210.074 KiB |   0.0% → 0.5% |       0 B → 210 KiB |         0 → 2,825 | `0x1d91f`                                     | `[stack]`                                                                         |

##### Ours

|   Change |        Delta |             % |                Size |           Objects | Function                                      | Location                                                                          |
| -------: | -----------: | ------------: | ------------------: | ----------------: | --------------------------------------------- | --------------------------------------------------------------------------------- |
|   +33.9% |   +5.694 MiB | 35.2% → 54.6% | 16.8 MiB → 22.5 MiB | 238,054 → 231,808 | `__json_value_module_MOD_parse_array`         | `src/json-fortran/src/json_value_module.F90`                                      |
|      new | +932.182 KiB |   0.0% → 2.2% |       0 B → 932 KiB |         0 → 8,760 | `0x228cf`                                     | `tmp/nix-shell.eMJcEj/profiler-md-input-generation.40bx0a/fortran-current/binary` |
|      new | +730.352 KiB |   0.0% → 1.7% |       0 B → 730 KiB |         0 → 7,938 | `0x1eddf`                                     | `[stack]`                                                                         |
|      new | +606.025 KiB |   0.0% → 1.4% |       0 B → 606 KiB |         0 → 5,684 | `0x1eb8f`                                     | `[stack]`                                                                         |
|    +3.3% | +451.263 KiB | 27.9% → 33.3% | 13.3 MiB → 13.7 MiB | 184,850 → 185,235 | `__json_value_module_MOD_json_parse_file`     | `src/json-fortran/src/json_value_module.F90`                                      |
|    +3.1% | +417.529 KiB | 27.2% → 32.4% | 12.9 MiB → 13.4 MiB | 177,529 → 175,450 | `__json_file_module_MOD_json_file_load`       | `src/json-fortran/src/json_file_module.F90`                                       |
|    +2.7% | +375.509 KiB | 28.1% → 33.5% | 13.4 MiB → 13.8 MiB | 169,249 → 168,318 | `MAIN__`                                      | `out/profile.f90`                                                                 |
| +1462.4% | +279.541 KiB |  <0.1% → 0.7% |  19.1 KiB → 299 KiB |       178 → 2,037 | `__json_string_utilities_MOD_unescape_string` | `src/json-fortran/src/json_string_utilities.F90`                                  |
|      new |     +234 KiB |   0.0% → 0.6% |       0 B → 234 KiB |           0 → 936 | `0x1e217`                                     | `[stack]`                                                                         |
|      new | +210.074 KiB |   0.0% → 0.5% |       0 B → 210 KiB |         0 → 2,825 | `0x1d91f`                                     | `[stack]`                                                                         |
|      new | +205.187 KiB |   0.0% → 0.5% |       0 B → 205 KiB |         0 → 1,876 | `0x1e34f`                                     | `[stack]`                                                                         |
|      new | +205.078 KiB |   0.0% → 0.5% |       0 B → 205 KiB |         0 → 1,875 | `0x1da1f`                                     | `[stack]`                                                                         |
|    +2.3% | +123.058 KiB | 10.7% → 12.7% | 5.12 MiB → 5.24 MiB |   70,140 → 59,085 | `__json_value_module_MOD_parse_string`        | `src/json-fortran/src/json_value_module.F90`                                      |
|      new |  +99.421 KiB |   0.0% → 0.2% |      0 B → 99.4 KiB |           0 → 909 | `0x1e12f`                                     | `[stack]`                                                                         |
|      new |  +99.421 KiB |   0.0% → 0.2% |      0 B → 99.4 KiB |           0 → 909 | `0x1dfe7`                                     | `[stack]`                                                                         |
|      new |  +97.781 KiB |   0.0% → 0.2% |      0 B → 97.8 KiB |           0 → 894 | `0x1dc97`                                     | `[stack]`                                                                         |
|      new |  +91.984 KiB |   0.0% → 0.2% |        0 B → 92 KiB |           0 → 841 | `0x1ddff`                                     | `[stack]`                                                                         |
|      new |  +90.125 KiB |   0.0% → 0.2% |      0 B → 90.1 KiB |           0 → 824 | `0x1dcff`                                     | `[stack]`                                                                         |
|      new |  +21.664 KiB |   0.0% → 0.1% |      0 B → 21.7 KiB |           0 → 949 | `0x1d5df`                                     | `[stack]`                                                                         |
|      new |   +21.25 KiB |   0.0% → 0.1% |      0 B → 21.3 KiB |            0 → 85 | `0x1df97`                                     | `[stack]`                                                                         |

##### Native

|  Change |        Delta |             % |                Size |           Objects | Function            | Location                                          |
| ------: | -----------: | ------------: | ------------------: | ----------------: | ------------------- | ------------------------------------------------- |
|   +5.6% |  +644.99 KiB | 23.6% → 28.9% | 11.3 MiB → 11.9 MiB | 138,003 → 135,682 | `0x27817`           | `usr/lib/aarch64-linux-gnu/libc.so.6`             |
|     new | +486.593 KiB |   0.0% → 1.2% |       0 B → 487 KiB |         0 → 3,133 | `0xffffbbc48fff`    | `<unknown>`                                       |
|     new |  +411.89 KiB |   0.0% → 1.0% |       0 B → 412 KiB |           0 → 101 | `0xaaab03f7a177`    | `<unknown>`                                       |
|     new | +403.734 KiB |   0.0% → 1.0% |       0 B → 404 KiB |            0 → 99 | `0xaaab03e6de5f`    | `<unknown>`                                       |
| +114.5% | +313.218 KiB |   0.6% → 1.4% |   273 KiB → 587 KiB |     2,917 → 6,258 | `0x10c847`          | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`  |
| +114.5% | +313.218 KiB |   0.6% → 1.4% |   273 KiB → 587 KiB |     2,917 → 6,258 | `0x10ab63`          | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`  |
| +114.5% | +313.218 KiB |   0.6% → 1.4% |   273 KiB → 587 KiB |     2,917 → 6,258 | `0x10b283`          | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`  |
| +110.9% | +312.476 KiB |   0.6% → 1.4% |   282 KiB → 594 KiB |     2,937 → 6,277 | `0x1c24b`           | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`  |
|   +1.8% | +222.166 KiB | 25.8% → 30.4% | 12.3 MiB → 12.5 MiB | 149,037 → 146,846 | `0x27743`           | `usr/lib/aarch64-linux-gnu/libc.so.6`             |
|     new |  +211.89 KiB |   0.0% → 0.5% |       0 B → 212 KiB |         0 → 2,608 | `0xffffbb3b003f`    | `<unknown>`                                       |
|     new | +177.506 KiB |   0.0% → 0.4% |       0 B → 178 KiB |         0 → 1,524 | `0xffffbb3c0027`    | `<unknown>`                                       |
|  +11.9% | +134.382 KiB |   2.3% → 3.0% | 1.11 MiB → 1.24 MiB |   13,719 → 14,477 | `0x1093fb`          | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`  |
|     new |   +50.22 KiB |   0.0% → 0.1% |      0 B → 50.2 KiB |         0 → 2,530 | `0xffffbbc49d67`    | `<unknown>`                                       |
|   +8.8% |  +40.781 KiB |   1.0% → 1.2% |   465 KiB → 506 KiB |         119 → 129 | `0x5`               | `<unknown>`                                       |
|     new |  +34.845 KiB |   0.0% → 0.1% |      0 B → 34.8 KiB |         0 → 2,817 | `0x15c8fe76549bfff` | `<unknown>`                                       |
|     new |  +34.613 KiB |   0.0% → 0.1% |      0 B → 34.6 KiB |         0 → 2,070 | `0xaaab03d3c7ff`    | `<unknown>`                                       |
|  +28.0% |  +28.218 KiB |   0.2% → 0.3% |   101 KiB → 129 KiB |       921 → 1,851 | `0x2f9e7`           | `usr/lib/aarch64-linux-gnu/libtcmalloc.so.4.5.10` |
|     new |  +27.419 KiB |   0.0% → 0.1% |      0 B → 27.4 KiB |         0 → 2,911 | `0x1e9d`            | `<unknown>`                                       |
|  +28.3% |  +22.904 KiB |          0.2% |  80.8 KiB → 104 KiB |         215 → 560 | `0x3142b`           | `usr/lib/aarch64-linux-gnu/libtcmalloc.so.4.5.10` |
|   +4.5% |   +13.01 KiB |   0.6% → 0.7% |   289 KiB → 302 KiB |     2,438 → 2,592 | `0x0`               | `<unknown>`                                       |

#### Improvements

Functions with the largest decrease in total bytes allocated in the function and all its callees.

|  Change |        Delta |             % |                Size |           Objects | Function                                           | Location                                                                       |
| ------: | -----------: | ------------: | ------------------: | ----------------: | -------------------------------------------------- | ------------------------------------------------------------------------------ |
|  -31.2% |   -7.315 MiB | 49.2% → 39.1% | 23.4 MiB → 16.1 MiB |   34,143 → 28,063 | `__json_string_utilities_MOD_string_to_integer`    | `src/json-fortran/src/json_string_utilities.F90`                               |
|  -29.6% |   -7.223 MiB | 51.2% → 41.7% | 24.4 MiB → 17.2 MiB |   16,403 → 12,051 | `0x1c1b3`                                          | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`                               |
|  -31.6% |   -7.049 MiB | 46.8% → 37.1% | 22.3 MiB → 15.3 MiB |     9,928 → 7,938 | `0x109623`                                         | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`                               |
|  -31.6% |   -7.049 MiB | 46.8% → 37.0% | 22.3 MiB → 15.3 MiB |     5,602 → 3,832 | `0xfa6bf`                                          | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`                               |
|  -30.5% |   -6.904 MiB | 47.5% → 38.2% | 22.6 MiB → 15.7 MiB |   32,572 → 26,893 | `__json_value_module_MOD_string_to_int`            | `src/json-fortran/src/json_value_module.F90`                                   |
|  -27.6% |   -6.314 MiB | 47.9% → 40.2% | 22.9 MiB → 16.5 MiB |   52,056 → 48,798 | `__json_value_module_MOD_parse_number`             | `src/json-fortran/src/json_value_module.F90`                                   |
|  -13.6% |   -6.182 MiB | 95.1% → 95.0% | 45.3 MiB → 39.1 MiB | 447,567 → 433,143 | `__json_value_module_MOD_parse_object`             | `src/json-fortran/src/json_value_module.F90`                                   |
| removed | -931.937 KiB |   1.9% → 0.0% |       932 KiB → 0 B |         8,509 → 0 | `0x228cf`                                          | `tmp/nix-shell.eMJcEj/profiler-md-input-generation.40bx0a/fortran-base/binary` |
| removed | -718.026 KiB |   1.5% → 0.0% |       718 KiB → 0 B |         7,072 → 0 | `0x1ed2f`                                          | `[stack]`                                                                      |
|  -16.1% | -710.896 KiB |   9.1% → 8.8% | 4.32 MiB → 3.63 MiB |   77,828 → 62,332 | `__json_value_module_MOD_parse_value`              | `src/json-fortran/src/json_value_module.F90`                                   |
|  -62.4% | -689.797 KiB |   2.3% → 1.0% |  1.08 MiB → 416 KiB |     2,430 → 1,132 | `__json_value_module_MOD_json_get_string_by_path`  | `src/json-fortran/src/json_get_scalar_by_path.inc`                             |
|  -62.4% | -689.797 KiB |   2.3% → 1.0% |  1.08 MiB → 416 KiB |     2,430 → 1,132 | `__json_file_module_MOD_json_file_get_string`      | `src/json-fortran/src/json_file_module.F90`                                    |
| removed | -600.728 KiB |   1.2% → 0.0% |       601 KiB → 0 B |         5,606 → 0 | `0x1eadf`                                          | `[stack]`                                                                      |
|   -5.0% | -532.817 KiB | 21.8% → 24.0% | 10.4 MiB → 9.88 MiB | 125,670 → 124,287 | `_start`                                           | `<unknown>`                                                                    |
|  -66.4% | -500.651 KiB |   1.5% → 0.6% |   755 KiB → 254 KiB |     3,531 → 1,699 | `0x2b167`                                          | `usr/lib/aarch64-linux-gnu/libtcmalloc.so.4.5.10`                              |
|  -99.8% | -499.947 KiB |  1.0% → <0.1% |  501 KiB → 1.11 KiB |     2,846 → 1,042 | `0x39387`                                          | `usr/lib/aarch64-linux-gnu/libtcmalloc.so.4.5.10`                              |
| removed | -477.608 KiB |   1.0% → 0.0% |       478 KiB → 0 B |         3,051 → 0 | `0xffffac67003f`                                   | `<unknown>`                                                                    |
|  -97.7% | -469.769 KiB |  1.0% → <0.1% |  481 KiB → 11.2 KiB |        2,844 → 66 | `0x3143b`                                          | `usr/lib/aarch64-linux-gnu/libtcmalloc.so.4.5.10`                              |
|  -50.3% | -421.235 KiB |   1.7% → 1.0% |   837 KiB → 416 KiB |     1,515 → 1,114 | `__json_value_module_MOD_json_get_by_path_default` | `src/json-fortran/src/json_value_module.F90`                                   |
|  -50.3% | -421.235 KiB |   1.7% → 1.0% |   837 KiB → 416 KiB |     1,515 → 1,114 | `__json_value_module_MOD_json_get_by_path`         | `src/json-fortran/src/json_value_module.F90`                                   |

##### Ours

|  Change |        Delta |             % |                Size |           Objects | Function                                           | Location                                                                       |
| ------: | -----------: | ------------: | ------------------: | ----------------: | -------------------------------------------------- | ------------------------------------------------------------------------------ |
|  -31.2% |   -7.315 MiB | 49.2% → 39.1% | 23.4 MiB → 16.1 MiB |   34,143 → 28,063 | `__json_string_utilities_MOD_string_to_integer`    | `src/json-fortran/src/json_string_utilities.F90`                               |
|  -30.5% |   -6.904 MiB | 47.5% → 38.2% | 22.6 MiB → 15.7 MiB |   32,572 → 26,893 | `__json_value_module_MOD_string_to_int`            | `src/json-fortran/src/json_value_module.F90`                                   |
|  -27.6% |   -6.314 MiB | 47.9% → 40.2% | 22.9 MiB → 16.5 MiB |   52,056 → 48,798 | `__json_value_module_MOD_parse_number`             | `src/json-fortran/src/json_value_module.F90`                                   |
|  -13.6% |   -6.182 MiB | 95.1% → 95.0% | 45.3 MiB → 39.1 MiB | 447,567 → 433,143 | `__json_value_module_MOD_parse_object`             | `src/json-fortran/src/json_value_module.F90`                                   |
| removed | -931.937 KiB |   1.9% → 0.0% |       932 KiB → 0 B |         8,509 → 0 | `0x228cf`                                          | `tmp/nix-shell.eMJcEj/profiler-md-input-generation.40bx0a/fortran-base/binary` |
| removed | -718.026 KiB |   1.5% → 0.0% |       718 KiB → 0 B |         7,072 → 0 | `0x1ed2f`                                          | `[stack]`                                                                      |
|  -16.1% | -710.896 KiB |   9.1% → 8.8% | 4.32 MiB → 3.63 MiB |   77,828 → 62,332 | `__json_value_module_MOD_parse_value`              | `src/json-fortran/src/json_value_module.F90`                                   |
|  -62.4% | -689.797 KiB |   2.3% → 1.0% |  1.08 MiB → 416 KiB |     2,430 → 1,132 | `__json_value_module_MOD_json_get_string_by_path`  | `src/json-fortran/src/json_get_scalar_by_path.inc`                             |
|  -62.4% | -689.797 KiB |   2.3% → 1.0% |  1.08 MiB → 416 KiB |     2,430 → 1,132 | `__json_file_module_MOD_json_file_get_string`      | `src/json-fortran/src/json_file_module.F90`                                    |
| removed | -600.728 KiB |   1.2% → 0.0% |       601 KiB → 0 B |         5,606 → 0 | `0x1eadf`                                          | `[stack]`                                                                      |
|  -50.3% | -421.235 KiB |   1.7% → 1.0% |   837 KiB → 416 KiB |     1,515 → 1,114 | `__json_value_module_MOD_json_get_by_path_default` | `src/json-fortran/src/json_value_module.F90`                                   |
|  -50.3% | -421.235 KiB |   1.7% → 1.0% |   837 KiB → 416 KiB |     1,515 → 1,114 | `__json_value_module_MOD_json_get_by_path`         | `src/json-fortran/src/json_value_module.F90`                                   |
| removed | -268.562 KiB |   0.6% → 0.0% |       269 KiB → 0 B |           897 → 0 | `__json_value_module_MOD_json_get_string`          | `src/json-fortran/src/json_value_module.F90`                                   |
| removed |  -234.75 KiB |   0.5% → 0.0% |       235 KiB → 0 B |           939 → 0 | `0x1d5af`                                          | `[stack]`                                                                      |
| removed | -209.074 KiB |   0.4% → 0.0% |       209 KiB → 0 B |         2,817 → 0 | `0x1d86f`                                          | `[stack]`                                                                      |
| removed | -205.296 KiB |   0.4% → 0.0% |       205 KiB → 0 B |         1,877 → 0 | `0x1e29f`                                          | `[stack]`                                                                      |
| removed | -205.078 KiB |   0.4% → 0.0% |       205 KiB → 0 B |         1,875 → 0 | `0x1d96f`                                          | `[stack]`                                                                      |
| removed |  -99.421 KiB |   0.2% → 0.0% |      99.4 KiB → 0 B |           909 → 0 | `0x1e07f`                                          | `[stack]`                                                                      |
| removed |  -99.421 KiB |   0.2% → 0.0% |      99.4 KiB → 0 B |           909 → 0 | `0x1df37`                                          | `[stack]`                                                                      |
| removed |  -97.781 KiB |   0.2% → 0.0% |      97.8 KiB → 0 B |           894 → 0 | `0x1dbe7`                                          | `[stack]`                                                                      |

##### Native

|  Change |        Delta |             % |                Size |           Objects | Function             | Location                                          |
| ------: | -----------: | ------------: | ------------------: | ----------------: | -------------------- | ------------------------------------------------- |
|  -29.6% |   -7.223 MiB | 51.2% → 41.7% | 24.4 MiB → 17.2 MiB |   16,403 → 12,051 | `0x1c1b3`            | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`  |
|  -31.6% |   -7.049 MiB | 46.8% → 37.1% | 22.3 MiB → 15.3 MiB |     9,928 → 7,938 | `0x109623`           | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`  |
|  -31.6% |   -7.049 MiB | 46.8% → 37.0% | 22.3 MiB → 15.3 MiB |     5,602 → 3,832 | `0xfa6bf`            | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`  |
|   -5.0% | -532.817 KiB | 21.8% → 24.0% | 10.4 MiB → 9.88 MiB | 125,670 → 124,287 | `_start`             | `<unknown>`                                       |
|  -66.4% | -500.651 KiB |   1.5% → 0.6% |   755 KiB → 254 KiB |     3,531 → 1,699 | `0x2b167`            | `usr/lib/aarch64-linux-gnu/libtcmalloc.so.4.5.10` |
|  -99.8% | -499.947 KiB |  1.0% → <0.1% |  501 KiB → 1.11 KiB |     2,846 → 1,042 | `0x39387`            | `usr/lib/aarch64-linux-gnu/libtcmalloc.so.4.5.10` |
| removed | -477.608 KiB |   1.0% → 0.0% |       478 KiB → 0 B |         3,051 → 0 | `0xffffac67003f`     | `<unknown>`                                       |
|  -97.7% | -469.769 KiB |  1.0% → <0.1% |  481 KiB → 11.2 KiB |        2,844 → 66 | `0x3143b`            | `usr/lib/aarch64-linux-gnu/libtcmalloc.so.4.5.10` |
| removed |  -411.89 KiB |   0.8% → 0.0% |       412 KiB → 0 B |           101 → 0 | `0xaaab08154ba7`     | `<unknown>`                                       |
| removed |  -411.89 KiB |   0.8% → 0.0% |       412 KiB → 0 B |           101 → 0 | `0xaaab0832014f`     | `<unknown>`                                       |
|  -26.6% | -338.508 KiB |   2.6% → 2.2% |  1.24 MiB → 934 KiB |         323 → 235 | `0x4`                | `<unknown>`                                       |
| removed | -327.271 KiB |   0.7% → 0.0% |       327 KiB → 0 B |         3,883 → 0 | `0xffffacf08fff`     | `<unknown>`                                       |
|  -20.9% | -178.093 KiB |   1.7% → 1.6% |   851 KiB → 673 KiB |    10,791 → 8,209 | `0x10b28f`           | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`  |
| removed | -170.627 KiB |   0.3% → 0.0% |       171 KiB → 0 B |         2,248 → 0 | `0xffffacf09d67`     | `<unknown>`                                       |
| removed | -163.467 KiB |   0.3% → 0.0% |       163 KiB → 0 B |           458 → 0 | `0x1ff`              | `<unknown>`                                       |
|  -19.0% | -129.875 KiB |   1.4% → 1.3% |   685 KiB → 555 KiB |     5,480 → 4,441 | `0x112ecb`           | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`  |
|  -29.1% |  -48.218 KiB |          0.3% |   166 KiB → 118 KiB |     5,311 → 3,768 | `0x112ebb`           | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`  |
| removed |  -45.306 KiB |   0.1% → 0.0% |      45.3 KiB → 0 B |         1,986 → 0 | `0xaaab080e27ff`     | `<unknown>`                                       |
| removed |  -35.867 KiB |   0.1% → 0.0% |      35.9 KiB → 0 B |         3,752 → 0 | `0x4d4486b92e59c3ff` | `<unknown>`                                       |
| removed |  -27.525 KiB |   0.1% → 0.0% |      27.5 KiB → 0 B |         2,920 → 0 | `0x4070`             | `<unknown>`                                       |

# Retained heap profile diff

Retained 894 KiB over 14,825 objects (61.8 B per object).

| Category | Change | Delta |     % |    Size | Objects |
| -------- | -----: | ----: | ----: | ------: | ------: |
| Ours     |   0.0% |   0 B | 85.5% | 765 KiB |  14,818 |
| Native   |   0.0% |   0 B | 14.5% | 130 KiB |       7 |

## Hottest functions

### Self size

No function differed in bytes retained directly in the function body, excluding callees.

### Total size

#### Regressions

Functions with the largest increase in total bytes retained in the function and all its callees.

| Change |       Delta |           % |           Size | Objects | Function            | Location                                                                          |
| -----: | ----------: | ----------: | -------------: | ------: | ------------------- | --------------------------------------------------------------------------------- |
|    new | +38.828 KiB | 0.0% → 4.3% | 0 B → 38.8 KiB | 0 → 355 | `0x228cf`           | `tmp/nix-shell.eMJcEj/profiler-md-input-generation.40bx0a/fortran-current/binary` |
|    new | +29.617 KiB | 0.0% → 3.3% | 0 B → 29.6 KiB | 0 → 307 | `0x1eddf`           | `[stack]`                                                                         |
|    new | +25.156 KiB | 0.0% → 2.8% | 0 B → 25.2 KiB | 0 → 230 | `0x1eb8f`           | `[stack]`                                                                         |
|    new |  +8.531 KiB | 0.0% → 1.0% | 0 B → 8.53 KiB |  0 → 78 | `0x1e34f`           | `[stack]`                                                                         |
|    new |  +8.531 KiB | 0.0% → 1.0% | 0 B → 8.53 KiB |  0 → 78 | `0x1d91f`           | `[stack]`                                                                         |
|    new |  +8.531 KiB | 0.0% → 1.0% | 0 B → 8.53 KiB |  0 → 78 | `0x1da1f`           | `[stack]`                                                                         |
|    new |  +8.312 KiB | 0.0% → 0.9% | 0 B → 8.31 KiB |  0 → 76 | `0xffffbb3b003f`    | `<unknown>`                                                                       |
|    new |  +5.625 KiB | 0.0% → 0.6% | 0 B → 5.63 KiB | 0 → 307 | `0xaaab03d3c7ff`    | `<unknown>`                                                                       |
|    new |  +4.265 KiB | 0.0% → 0.5% | 0 B → 4.27 KiB |  0 → 39 | `0x1dc97`           | `[stack]`                                                                         |
|    new |  +4.046 KiB | 0.0% → 0.5% | 0 B → 4.05 KiB |  0 → 37 | `0x1e12f`           | `[stack]`                                                                         |
|    new |  +4.046 KiB | 0.0% → 0.5% | 0 B → 4.05 KiB |  0 → 37 | `0x1dfe7`           | `[stack]`                                                                         |
|    new |  +3.718 KiB | 0.0% → 0.4% | 0 B → 3.72 KiB |  0 → 34 | `0x1ddff`           | `[stack]`                                                                         |
|    new |    +3.5 KiB | 0.0% → 0.4% |  0 B → 3.5 KiB |  0 → 32 | `0x1dcff`           | `[stack]`                                                                         |
|    new |  +3.188 KiB | 0.0% → 0.4% | 0 B → 3.19 KiB | 0 → 136 | `0xffffbbc48fff`    | `<unknown>`                                                                       |
|    new |  +3.091 KiB | 0.0% → 0.3% | 0 B → 3.09 KiB | 0 → 148 | `0xffffbbc49d67`    | `<unknown>`                                                                       |
|    new |  +1.447 KiB | 0.0% → 0.2% | 0 B → 1.45 KiB | 0 → 117 | `0x15c8fe76549bfff` | `<unknown>`                                                                       |
|    new |   +1.14 KiB | 0.0% → 0.1% | 0 B → 1.14 KiB | 0 → 121 | `0x1e9d`            | `<unknown>`                                                                       |
|    new |      +808 B | 0.0% → 0.1% |    0 B → 808 B |  0 → 39 | `0x1d5df`           | `[stack]`                                                                         |
|    new |      +760 B | 0.0% → 0.1% |    0 B → 760 B |   0 → 1 | `0x1e88f`           | `[stack]`                                                                         |
|    new |      +702 B | 0.0% → 0.1% |    0 B → 702 B |  0 → 39 | `0x1e1ff`           | `[stack]`                                                                         |

##### Ours

| Change |       Delta |            % |           Size | Objects | Function  | Location                                                                          |
| -----: | ----------: | -----------: | -------------: | ------: | --------- | --------------------------------------------------------------------------------- |
|    new | +38.828 KiB |  0.0% → 4.3% | 0 B → 38.8 KiB | 0 → 355 | `0x228cf` | `tmp/nix-shell.eMJcEj/profiler-md-input-generation.40bx0a/fortran-current/binary` |
|    new | +29.617 KiB |  0.0% → 3.3% | 0 B → 29.6 KiB | 0 → 307 | `0x1eddf` | `[stack]`                                                                         |
|    new | +25.156 KiB |  0.0% → 2.8% | 0 B → 25.2 KiB | 0 → 230 | `0x1eb8f` | `[stack]`                                                                         |
|    new |  +8.531 KiB |  0.0% → 1.0% | 0 B → 8.53 KiB |  0 → 78 | `0x1e34f` | `[stack]`                                                                         |
|    new |  +8.531 KiB |  0.0% → 1.0% | 0 B → 8.53 KiB |  0 → 78 | `0x1d91f` | `[stack]`                                                                         |
|    new |  +8.531 KiB |  0.0% → 1.0% | 0 B → 8.53 KiB |  0 → 78 | `0x1da1f` | `[stack]`                                                                         |
|    new |  +4.265 KiB |  0.0% → 0.5% | 0 B → 4.27 KiB |  0 → 39 | `0x1dc97` | `[stack]`                                                                         |
|    new |  +4.046 KiB |  0.0% → 0.5% | 0 B → 4.05 KiB |  0 → 37 | `0x1e12f` | `[stack]`                                                                         |
|    new |  +4.046 KiB |  0.0% → 0.5% | 0 B → 4.05 KiB |  0 → 37 | `0x1dfe7` | `[stack]`                                                                         |
|    new |  +3.718 KiB |  0.0% → 0.4% | 0 B → 3.72 KiB |  0 → 34 | `0x1ddff` | `[stack]`                                                                         |
|    new |    +3.5 KiB |  0.0% → 0.4% |  0 B → 3.5 KiB |  0 → 32 | `0x1dcff` | `[stack]`                                                                         |
|    new |      +808 B |  0.0% → 0.1% |    0 B → 808 B |  0 → 39 | `0x1d5df` | `[stack]`                                                                         |
|    new |      +760 B |  0.0% → 0.1% |    0 B → 760 B |   0 → 1 | `0x1e88f` | `[stack]`                                                                         |
|    new |      +702 B |  0.0% → 0.1% |    0 B → 702 B |  0 → 39 | `0x1e1ff` | `[stack]`                                                                         |
|    new |      +463 B |  0.0% → 0.1% |    0 B → 463 B |  0 → 40 | `0x1dfff` | `[stack]`                                                                         |
|    new |      +383 B | 0.0% → <0.1% |    0 B → 383 B |  0 → 39 | `0x1d6df` | `[stack]`                                                                         |
|    new |      +336 B | 0.0% → <0.1% |    0 B → 336 B |   0 → 3 | `0x1da5f` | `[stack]`                                                                         |
|    new |      +312 B | 0.0% → <0.1% |    0 B → 312 B |  0 → 39 | `0x1e2df` | `[stack]`                                                                         |
|    new |      +312 B | 0.0% → <0.1% |    0 B → 312 B |  0 → 39 | `0x1e65f` | `[stack]`                                                                         |
|    new |      +234 B | 0.0% → <0.1% |    0 B → 234 B |  0 → 39 | `0x1e0ff` | `[stack]`                                                                         |

##### Native

| Change |      Delta |            % |           Size | Objects | Function            | Location    |
| -----: | ---------: | -----------: | -------------: | ------: | ------------------- | ----------- |
|    new | +8.312 KiB |  0.0% → 0.9% | 0 B → 8.31 KiB |  0 → 76 | `0xffffbb3b003f`    | `<unknown>` |
|    new | +5.625 KiB |  0.0% → 0.6% | 0 B → 5.63 KiB | 0 → 307 | `0xaaab03d3c7ff`    | `<unknown>` |
|    new | +3.188 KiB |  0.0% → 0.4% | 0 B → 3.19 KiB | 0 → 136 | `0xffffbbc48fff`    | `<unknown>` |
|    new | +3.091 KiB |  0.0% → 0.3% | 0 B → 3.09 KiB | 0 → 148 | `0xffffbbc49d67`    | `<unknown>` |
|    new | +1.447 KiB |  0.0% → 0.2% | 0 B → 1.45 KiB | 0 → 117 | `0x15c8fe76549bfff` | `<unknown>` |
|    new |  +1.14 KiB |  0.0% → 0.1% | 0 B → 1.14 KiB | 0 → 121 | `0x1e9d`            | `<unknown>` |
|    new |     +224 B | 0.0% → <0.1% |    0 B → 224 B |   0 → 2 | `0xaaaace24fb07`    | `<unknown>` |
|    new |     +120 B | 0.0% → <0.1% |    0 B → 120 B |   0 → 2 | `0xaaab03ef5677`    | `<unknown>` |
|    new |     +112 B | 0.0% → <0.1% |    0 B → 112 B |   0 → 1 | `0xaaab03f50c9f`    | `<unknown>` |
|    new |     +112 B | 0.0% → <0.1% |    0 B → 112 B |   0 → 1 | `0xaaab03ec672f`    | `<unknown>` |
|    new |     +112 B | 0.0% → <0.1% |    0 B → 112 B |   0 → 1 | `0xaaab03e6d67f`    | `<unknown>` |
|    new |     +112 B | 0.0% → <0.1% |    0 B → 112 B |   0 → 1 | `0xaaab03e3b39f`    | `<unknown>` |
|    new |     +112 B | 0.0% → <0.1% |    0 B → 112 B |   0 → 1 | `0xaaab03d7d80f`    | `<unknown>` |
|    new |     +112 B | 0.0% → <0.1% |    0 B → 112 B |   0 → 1 | `0xaaab03ea2dbf`    | `<unknown>` |
|    new |     +112 B | 0.0% → <0.1% |    0 B → 112 B |   0 → 1 | `0xaaab03f7a15f`    | `<unknown>` |
|    new |     +112 B | 0.0% → <0.1% |    0 B → 112 B |   0 → 1 | `0xaaab03e3bb2f`    | `<unknown>` |
|    new |     +112 B | 0.0% → <0.1% |    0 B → 112 B |   0 → 1 | `0xaaab03ee9f0f`    | `<unknown>` |
|    new |     +112 B | 0.0% → <0.1% |    0 B → 112 B |   0 → 1 | `0xaaab03ea2c7f`    | `<unknown>` |
|    new |     +112 B | 0.0% → <0.1% |    0 B → 112 B |   0 → 1 | `0xaaab03e69f3f`    | `<unknown>` |
|    new |     +112 B | 0.0% → <0.1% |    0 B → 112 B |   0 → 1 | `0xaaab03e6dc7f`    | `<unknown>` |

#### Improvements

Functions with the largest decrease in total bytes retained in the function and all its callees.

|  Change |       Delta |           % |           Size | Objects | Function             | Location                                                                       |
| ------: | ----------: | ----------: | -------------: | ------: | -------------------- | ------------------------------------------------------------------------------ |
| removed | -38.828 KiB | 4.3% → 0.0% | 38.8 KiB → 0 B | 355 → 0 | `0x228cf`            | `tmp/nix-shell.eMJcEj/profiler-md-input-generation.40bx0a/fortran-base/binary` |
| removed | -29.617 KiB | 3.3% → 0.0% | 29.6 KiB → 0 B | 307 → 0 | `0x1ed2f`            | `[stack]`                                                                      |
| removed | -25.156 KiB | 2.8% → 0.0% | 25.2 KiB → 0 B | 230 → 0 | `0x1eadf`            | `[stack]`                                                                      |
| removed |  -8.531 KiB | 1.0% → 0.0% | 8.53 KiB → 0 B |  78 → 0 | `0x1e29f`            | `[stack]`                                                                      |
| removed |  -8.531 KiB | 1.0% → 0.0% | 8.53 KiB → 0 B |  78 → 0 | `0x1d86f`            | `[stack]`                                                                      |
| removed |  -8.531 KiB | 1.0% → 0.0% | 8.53 KiB → 0 B |  78 → 0 | `0x1d96f`            | `[stack]`                                                                      |
| removed |  -8.312 KiB | 0.9% → 0.0% | 8.31 KiB → 0 B |  76 → 0 | `0xffffac67003f`     | `<unknown>`                                                                    |
| removed |  -5.625 KiB | 0.6% → 0.0% | 5.63 KiB → 0 B | 307 → 0 | `0xaaab080e27ff`     | `<unknown>`                                                                    |
| removed |  -4.265 KiB | 0.5% → 0.0% | 4.27 KiB → 0 B |  39 → 0 | `0x1dbe7`            | `[stack]`                                                                      |
| removed |  -4.046 KiB | 0.5% → 0.0% | 4.05 KiB → 0 B |  37 → 0 | `0x1e07f`            | `[stack]`                                                                      |
| removed |  -4.046 KiB | 0.5% → 0.0% | 4.05 KiB → 0 B |  37 → 0 | `0x1df37`            | `[stack]`                                                                      |
| removed |  -3.718 KiB | 0.4% → 0.0% | 3.72 KiB → 0 B |  34 → 0 | `0x1dd4f`            | `[stack]`                                                                      |
| removed |    -3.5 KiB | 0.4% → 0.0% |  3.5 KiB → 0 B |  32 → 0 | `0x1dc4f`            | `[stack]`                                                                      |
| removed |  -3.188 KiB | 0.4% → 0.0% | 3.19 KiB → 0 B | 136 → 0 | `0xffffacf08fff`     | `<unknown>`                                                                    |
| removed |  -3.091 KiB | 0.3% → 0.0% | 3.09 KiB → 0 B | 148 → 0 | `0xffffacf09d67`     | `<unknown>`                                                                    |
| removed |  -1.447 KiB | 0.2% → 0.0% | 1.45 KiB → 0 B | 117 → 0 | `0x4d4486b92e59c3ff` | `<unknown>`                                                                    |
| removed |   -1.14 KiB | 0.1% → 0.0% | 1.14 KiB → 0 B | 121 → 0 | `0x4070`             | `<unknown>`                                                                    |
| removed |      -808 B | 0.1% → 0.0% |    808 B → 0 B |  39 → 0 | `0x1d52f`            | `[stack]`                                                                      |
| removed |      -760 B | 0.1% → 0.0% |    760 B → 0 B |   1 → 0 | `0x1e7df`            | `[stack]`                                                                      |
| removed |      -702 B | 0.1% → 0.0% |    702 B → 0 B |  39 → 0 | `0x1e14f`            | `[stack]`                                                                      |

##### Ours

|  Change |       Delta |            % |           Size | Objects | Function  | Location                                                                       |
| ------: | ----------: | -----------: | -------------: | ------: | --------- | ------------------------------------------------------------------------------ |
| removed | -38.828 KiB |  4.3% → 0.0% | 38.8 KiB → 0 B | 355 → 0 | `0x228cf` | `tmp/nix-shell.eMJcEj/profiler-md-input-generation.40bx0a/fortran-base/binary` |
| removed | -29.617 KiB |  3.3% → 0.0% | 29.6 KiB → 0 B | 307 → 0 | `0x1ed2f` | `[stack]`                                                                      |
| removed | -25.156 KiB |  2.8% → 0.0% | 25.2 KiB → 0 B | 230 → 0 | `0x1eadf` | `[stack]`                                                                      |
| removed |  -8.531 KiB |  1.0% → 0.0% | 8.53 KiB → 0 B |  78 → 0 | `0x1e29f` | `[stack]`                                                                      |
| removed |  -8.531 KiB |  1.0% → 0.0% | 8.53 KiB → 0 B |  78 → 0 | `0x1d86f` | `[stack]`                                                                      |
| removed |  -8.531 KiB |  1.0% → 0.0% | 8.53 KiB → 0 B |  78 → 0 | `0x1d96f` | `[stack]`                                                                      |
| removed |  -4.265 KiB |  0.5% → 0.0% | 4.27 KiB → 0 B |  39 → 0 | `0x1dbe7` | `[stack]`                                                                      |
| removed |  -4.046 KiB |  0.5% → 0.0% | 4.05 KiB → 0 B |  37 → 0 | `0x1e07f` | `[stack]`                                                                      |
| removed |  -4.046 KiB |  0.5% → 0.0% | 4.05 KiB → 0 B |  37 → 0 | `0x1df37` | `[stack]`                                                                      |
| removed |  -3.718 KiB |  0.4% → 0.0% | 3.72 KiB → 0 B |  34 → 0 | `0x1dd4f` | `[stack]`                                                                      |
| removed |    -3.5 KiB |  0.4% → 0.0% |  3.5 KiB → 0 B |  32 → 0 | `0x1dc4f` | `[stack]`                                                                      |
| removed |      -808 B |  0.1% → 0.0% |    808 B → 0 B |  39 → 0 | `0x1d52f` | `[stack]`                                                                      |
| removed |      -760 B |  0.1% → 0.0% |    760 B → 0 B |   1 → 0 | `0x1e7df` | `[stack]`                                                                      |
| removed |      -702 B |  0.1% → 0.0% |    702 B → 0 B |  39 → 0 | `0x1e14f` | `[stack]`                                                                      |
| removed |      -463 B |  0.1% → 0.0% |    463 B → 0 B |  40 → 0 | `0x1df4f` | `[stack]`                                                                      |
| removed |      -383 B | <0.1% → 0.0% |    383 B → 0 B |  39 → 0 | `0x1d62f` | `[stack]`                                                                      |
| removed |      -336 B | <0.1% → 0.0% |    336 B → 0 B |   3 → 0 | `0x1d9af` | `[stack]`                                                                      |
| removed |      -312 B | <0.1% → 0.0% |    312 B → 0 B |  39 → 0 | `0x1e22f` | `[stack]`                                                                      |
| removed |      -312 B | <0.1% → 0.0% |    312 B → 0 B |  39 → 0 | `0x1e5af` | `[stack]`                                                                      |
| removed |      -234 B | <0.1% → 0.0% |    234 B → 0 B |  39 → 0 | `0x1e04f` | `[stack]`                                                                      |

##### Native

|  Change |      Delta |            % |           Size | Objects | Function             | Location    |
| ------: | ---------: | -----------: | -------------: | ------: | -------------------- | ----------- |
| removed | -8.312 KiB |  0.9% → 0.0% | 8.31 KiB → 0 B |  76 → 0 | `0xffffac67003f`     | `<unknown>` |
| removed | -5.625 KiB |  0.6% → 0.0% | 5.63 KiB → 0 B | 307 → 0 | `0xaaab080e27ff`     | `<unknown>` |
| removed | -3.188 KiB |  0.4% → 0.0% | 3.19 KiB → 0 B | 136 → 0 | `0xffffacf08fff`     | `<unknown>` |
| removed | -3.091 KiB |  0.3% → 0.0% | 3.09 KiB → 0 B | 148 → 0 | `0xffffacf09d67`     | `<unknown>` |
| removed | -1.447 KiB |  0.2% → 0.0% | 1.45 KiB → 0 B | 117 → 0 | `0x4d4486b92e59c3ff` | `<unknown>` |
| removed |  -1.14 KiB |  0.1% → 0.0% | 1.14 KiB → 0 B | 121 → 0 | `0x4070`             | `<unknown>` |
| removed |     -224 B | <0.1% → 0.0% |    224 B → 0 B |   2 → 0 | `0xaaaad560fb07`     | `<unknown>` |
| removed |     -120 B | <0.1% → 0.0% |    120 B → 0 B |   2 → 0 | `0xaaab0829b677`     | `<unknown>` |
| removed |     -112 B | <0.1% → 0.0% |    112 B → 0 B |   1 → 0 | `0xaaab080dde67`     | `<unknown>` |
| removed |     -112 B | <0.1% → 0.0% |    112 B → 0 B |   1 → 0 | `0xaaab0821247f`     | `<unknown>` |
| removed |     -112 B | <0.1% → 0.0% |    112 B → 0 B |   1 → 0 | `0xaaab08212fbf`     | `<unknown>` |
| removed |     -112 B | <0.1% → 0.0% |    112 B → 0 B |   1 → 0 | `0xaaab0820f40f`     | `<unknown>` |
| removed |     -112 B | <0.1% → 0.0% |    112 B → 0 B |   1 → 0 | `0xaaab081e0fdf`     | `<unknown>` |
| removed |     -112 B | <0.1% → 0.0% |    112 B → 0 B |   1 → 0 | `0xaaab0820e177`     | `<unknown>` |
| removed |     -112 B | <0.1% → 0.0% |    112 B → 0 B |   1 → 0 | `0xaaab08213a3f`     | `<unknown>` |
| removed |     -112 B | <0.1% → 0.0% |    112 B → 0 B |   1 → 0 | `0xaaab0826c74f`     | `<unknown>` |
| removed |     -112 B | <0.1% → 0.0% |    112 B → 0 B |   1 → 0 | `0xaaab0821259f`     | `<unknown>` |
| removed |     -112 B | <0.1% → 0.0% |    112 B → 0 B |   1 → 0 | `0xaaab081e28bf`     | `<unknown>` |
| removed |     -112 B | <0.1% → 0.0% |    112 B → 0 B |   1 → 0 | `0xaaab081bb44f`     | `<unknown>` |
| removed |     -112 B | <0.1% → 0.0% |    112 B → 0 B |   1 → 0 | `0xaaab0818425f`     | `<unknown>` |

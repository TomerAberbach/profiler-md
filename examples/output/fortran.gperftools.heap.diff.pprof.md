# Allocated heap profile diff

Allocated 39.7 MiB → 70.5 MiB (+30.805 MiB, +77.6%) over 480,489 objects → 439,557 objects (86.7 B → 168 B per object).

| Category |  Change |       Delta |             % |                Size |           Objects |
| -------- | ------: | ----------: | ------------: | ------------------: | ----------------: |
| Native   | +337.2% | +35.961 MiB | 26.9% → 66.1% | 10.7 MiB → 46.6 MiB |   26,499 → 25,721 |
| Ours     |  -17.8% |  -5.156 MiB | 73.1% → 33.9% |   29 MiB → 23.9 MiB | 453,990 → 413,836 |

## Hottest functions

### Self size

#### Regressions

Functions with the largest increase in bytes allocated directly in the function body, excluding callees.

|   Change |        Delta |             % |                Size |         Objects | Function                                          | Location                                           |
| -------: | -----------: | ------------: | ------------------: | --------------: | ------------------------------------------------- | -------------------------------------------------- |
|  +359.1% |  +36.218 MiB | 25.4% → 65.7% | 10.1 MiB → 46.3 MiB | 13,656 → 17,633 | `0x1c1b3`                                         | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`   |
|  +209.4% | +172.528 KiB |   0.2% → 0.4% |  82.4 KiB → 255 KiB |     796 → 2,071 | `__json_string_utilities_MOD_unescape_string`     | `src/json-fortran/src/json_string_utilities.F90`   |
|    +2.7% |      +18 KiB |   1.6% → 0.9% |   662 KiB → 680 KiB |   2,649 → 2,721 | `__json_value_module_MOD_parse_number`            | `src/json-fortran/src/json_value_module.F90`       |
|      new |  +15.029 KiB |  0.0% → <0.1% |        0 B → 15 KiB |         0 → 909 | `MAIN__`                                          | `out/profile.f90`                                  |
|   +54.4% |  +14.141 KiB |          0.1% |   26 KiB → 40.1 KiB |  8,047 → 10,506 | `__json_string_utilities_MOD_string_to_integer`   | `src/json-fortran/src/json_string_utilities.F90`   |
|    +1.1% |   +1.632 KiB |   0.4% → 0.2% |   148 KiB → 150 KiB | 18,928 → 19,137 | `__json_value_module_MOD_to_integer`              | `src/json-fortran/src/json_value_module.F90`       |
| +7083.3% |       +850 B |         <0.1% |        12 B → 862 B |        12 → 862 | `__json_value_module_MOD_json_get_string_by_path` | `src/json-fortran/src/json_get_scalar_by_path.inc` |

##### Ours

|   Change |        Delta |            % |               Size |         Objects | Function                                          | Location                                           |
| -------: | -----------: | -----------: | -----------------: | --------------: | ------------------------------------------------- | -------------------------------------------------- |
|  +209.4% | +172.528 KiB |  0.2% → 0.4% | 82.4 KiB → 255 KiB |     796 → 2,071 | `__json_string_utilities_MOD_unescape_string`     | `src/json-fortran/src/json_string_utilities.F90`   |
|    +2.7% |      +18 KiB |  1.6% → 0.9% |  662 KiB → 680 KiB |   2,649 → 2,721 | `__json_value_module_MOD_parse_number`            | `src/json-fortran/src/json_value_module.F90`       |
|      new |  +15.029 KiB | 0.0% → <0.1% |       0 B → 15 KiB |         0 → 909 | `MAIN__`                                          | `out/profile.f90`                                  |
|   +54.4% |  +14.141 KiB |         0.1% |  26 KiB → 40.1 KiB |  8,047 → 10,506 | `__json_string_utilities_MOD_string_to_integer`   | `src/json-fortran/src/json_string_utilities.F90`   |
|    +1.1% |   +1.632 KiB |  0.4% → 0.2% |  148 KiB → 150 KiB | 18,928 → 19,137 | `__json_value_module_MOD_to_integer`              | `src/json-fortran/src/json_value_module.F90`       |
| +7083.3% |       +850 B |        <0.1% |       12 B → 862 B |        12 → 862 | `__json_value_module_MOD_json_get_string_by_path` | `src/json-fortran/src/json_get_scalar_by_path.inc` |

##### Native

|  Change |       Delta |             % |                Size |         Objects | Function  | Location                                         |
| ------: | ----------: | ------------: | ------------------: | --------------: | --------- | ------------------------------------------------ |
| +359.1% | +36.218 MiB | 25.4% → 65.7% | 10.1 MiB → 46.3 MiB | 13,656 → 17,633 | `0x1c1b3` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

#### Improvements

Functions with the largest decrease in bytes allocated directly in the function body, excluding callees.

|  Change |        Delta |             % |                Size |           Objects | Function                                    | Location                                         |
| ------: | -----------: | ------------: | ------------------: | ----------------: | ------------------------------------------- | ------------------------------------------------ |
|  -50.3% |   -5.294 MiB |  26.5% → 7.4% | 10.5 MiB → 5.23 MiB |   94,143 → 49,759 | `__json_value_module_MOD_parse_string`      | `src/json-fortran/src/json_value_module.F90`     |
|  -45.3% | -256.312 KiB |   1.4% → 0.4% |   565 KiB → 309 KiB |     5,969 → 3,235 | `0x1c24b`                                   | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|   -0.5% |  -74.265 KiB | 36.1% → 20.2% | 14.3 MiB → 14.2 MiB | 134,059 → 133,380 | `__json_value_module_MOD_json_value_create` | `src/json-fortran/src/json_value_module.F90`     |
|  -24.8% |   -6.151 KiB |  0.1% → <0.1% | 24.8 KiB → 18.6 KiB |     5,013 → 3,749 | `0x9980f`                                   | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|   -0.4% |   -5.634 KiB |   3.6% → 2.0% |            1.44 MiB | 122,497 → 122,226 | `__json_value_module_MOD_parse_object`      | `src/json-fortran/src/json_value_module.F90`     |
|  -12.8% |       -677 B |         <0.1% |  5.16 KiB → 4.5 KiB |     5,280 → 4,603 | `__json_value_module_MOD_to_string`         | `src/json-fortran/src/json_value_module.F90`     |
|  -23.6% |       -677 B |         <0.1% |  2.8 KiB → 2.14 KiB |     1,861 → 1,104 | `0x1c1f3`                                   | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|     ~0% |       -110 B |   4.4% → 2.5% |            1.76 MiB |   41,345 → 41,430 | `__json_value_module_MOD_parse_value`       | `src/json-fortran/src/json_value_module.F90`     |
|   -0.3% |         -6 B |         <0.1% | 2.03 KiB → 2.02 KiB |                10 | `__json_value_module_MOD_json_initialize`   | `src/json-fortran/src/json_value_module.F90`     |
|     ~0% |         -4 B |   0.3% → 0.1% |             102 KiB |   26,217 → 26,216 | `__json_value_module_MOD_to_logical`        | `src/json-fortran/src/json_value_module.F90`     |
| removed |         -1 B |  <0.1% → 0.0% |           1 B → 0 B |             1 → 0 | `__json_value_module_MOD_pop_char.part.0`   | `src/json-fortran/src/json_value_module.F90`     |

##### Ours

|  Change |       Delta |             % |                Size |           Objects | Function                                    | Location                                     |
| ------: | ----------: | ------------: | ------------------: | ----------------: | ------------------------------------------- | -------------------------------------------- |
|  -50.3% |  -5.294 MiB |  26.5% → 7.4% | 10.5 MiB → 5.23 MiB |   94,143 → 49,759 | `__json_value_module_MOD_parse_string`      | `src/json-fortran/src/json_value_module.F90` |
|   -0.5% | -74.265 KiB | 36.1% → 20.2% | 14.3 MiB → 14.2 MiB | 134,059 → 133,380 | `__json_value_module_MOD_json_value_create` | `src/json-fortran/src/json_value_module.F90` |
|   -0.4% |  -5.634 KiB |   3.6% → 2.0% |            1.44 MiB | 122,497 → 122,226 | `__json_value_module_MOD_parse_object`      | `src/json-fortran/src/json_value_module.F90` |
|  -12.8% |      -677 B |         <0.1% |  5.16 KiB → 4.5 KiB |     5,280 → 4,603 | `__json_value_module_MOD_to_string`         | `src/json-fortran/src/json_value_module.F90` |
|     ~0% |      -110 B |   4.4% → 2.5% |            1.76 MiB |   41,345 → 41,430 | `__json_value_module_MOD_parse_value`       | `src/json-fortran/src/json_value_module.F90` |
|   -0.3% |        -6 B |         <0.1% | 2.03 KiB → 2.02 KiB |                10 | `__json_value_module_MOD_json_initialize`   | `src/json-fortran/src/json_value_module.F90` |
|     ~0% |        -4 B |   0.3% → 0.1% |             102 KiB |   26,217 → 26,216 | `__json_value_module_MOD_to_logical`        | `src/json-fortran/src/json_value_module.F90` |
| removed |        -1 B |  <0.1% → 0.0% |           1 B → 0 B |             1 → 0 | `__json_value_module_MOD_pop_char.part.0`   | `src/json-fortran/src/json_value_module.F90` |

##### Native

| Change |        Delta |            % |                Size |       Objects | Function  | Location                                         |
| -----: | -----------: | -----------: | ------------------: | ------------: | --------- | ------------------------------------------------ |
| -45.3% | -256.312 KiB |  1.4% → 0.4% |   565 KiB → 309 KiB | 5,969 → 3,235 | `0x1c24b` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| -24.8% |   -6.151 KiB | 0.1% → <0.1% | 24.8 KiB → 18.6 KiB | 5,013 → 3,749 | `0x9980f` | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
| -23.6% |       -677 B |        <0.1% |  2.8 KiB → 2.14 KiB | 1,861 → 1,104 | `0x1c1f3` | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

### Total size

#### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

|  Change |        Delta |             % |                Size |           Objects | Function                                        | Location                                                                          |
| ------: | -----------: | ------------: | ------------------: | ----------------: | ----------------------------------------------- | --------------------------------------------------------------------------------- |
| +463.1% |  +36.734 MiB | 20.0% → 63.3% | 7.93 MiB → 44.7 MiB |    1,992 → 11,216 | `0xfa6bf`                                       | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`                                  |
| +461.6% |  +36.729 MiB | 20.0% → 63.4% | 7.96 MiB → 44.7 MiB |    6,993 → 14,955 | `0x109623`                                      | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`                                  |
| +392.0% |  +36.413 MiB | 23.4% → 64.8% | 9.29 MiB → 45.7 MiB |   53,556 → 56,930 | `__json_value_module_MOD_parse_number`          | `src/json-fortran/src/json_value_module.F90`                                      |
| +428.3% |  +36.394 MiB | 21.4% → 63.7% |  8.5 MiB → 44.9 MiB |   31,979 → 35,064 | `__json_value_module_MOD_string_to_int`         | `src/json-fortran/src/json_value_module.F90`                                      |
| +359.1% |  +36.218 MiB | 25.4% → 65.7% | 10.1 MiB → 46.3 MiB |   13,656 → 17,633 | `0x1c1b3`                                       | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`                                  |
| +380.2% |  +35.864 MiB | 23.8% → 64.2% | 9.43 MiB → 45.3 MiB |   34,566 → 35,323 | `__json_string_utilities_MOD_string_to_integer` | `src/json-fortran/src/json_string_utilities.F90`                                  |
|  +83.2% |  +31.208 MiB | 94.5% → 97.5% | 37.5 MiB → 68.7 MiB | 477,898 → 436,620 | `__json_value_module_MOD_parse_object`          | `src/json-fortran/src/json_value_module.F90`                                      |
|  +59.0% |   +10.92 MiB | 46.6% → 41.7% | 18.5 MiB → 29.4 MiB | 232,052 → 220,300 | `__json_value_module_MOD_parse_array`           | `src/json-fortran/src/json_value_module.F90`                                      |
|  +13.2% |   +1.851 MiB | 35.4% → 22.5% |   14 MiB → 15.9 MiB | 186,584 → 172,869 | `__json_value_module_MOD_json_parse_file`       | `src/json-fortran/src/json_value_module.F90`                                      |
|  +13.5% |   +1.845 MiB | 34.4% → 22.0% | 13.7 MiB → 15.5 MiB | 177,395 → 165,407 | `__json_file_module_MOD_json_file_load`         | `src/json-fortran/src/json_file_module.F90`                                       |
|   +9.9% |   +1.412 MiB | 35.9% → 22.2% | 14.3 MiB → 15.7 MiB | 173,325 → 160,528 | `MAIN__`                                        | `out/profile.f90`                                                                 |
|  +10.2% |   +1.387 MiB | 34.3% → 21.3% |   13.6 MiB → 15 MiB | 163,103 → 149,886 | `main`                                          | `out/profile.f90`                                                                 |
|  +21.5% | +927.627 KiB |  10.6% → 7.3% | 4.22 MiB → 5.13 MiB |   63,922 → 66,912 | `__json_value_module_MOD_parse_value`           | `src/json-fortran/src/json_value_module.F90`                                      |
|     new | +837.843 KiB |   0.0% → 1.2% |       0 B → 838 KiB |         0 → 7,614 | `0x22aaf`                                       | `tmp/nix-shell.NcwiQ3/profiler-md-input-generation.fqUYfr/fortran-current/binary` |
|     new | +772.932 KiB |   0.0% → 1.1% |       0 B → 773 KiB |         0 → 3,556 | `0xffff8a179d67`                                | `<unknown>`                                                                       |
|     new | +712.164 KiB |   0.0% → 1.0% |       0 B → 712 KiB |         0 → 6,826 | `0x1e85f`                                       | `[stack]`                                                                         |
|     new | +693.281 KiB |   0.0% → 1.0% |       0 B → 693 KiB |           0 → 170 | `0x1d11f`                                       | `[stack]`                                                                         |
|     new |  +600.14 KiB |   0.0% → 0.8% |       0 B → 600 KiB |         0 → 5,487 | `0x1e5ef`                                       | `[stack]`                                                                         |
|     new | +415.968 KiB |   0.0% → 0.6% |       0 B → 416 KiB |           0 → 102 | `0xaaaad7bfa0df`                                | `<unknown>`                                                                       |
|     new |  +234.75 KiB |   0.0% → 0.3% |       0 B → 235 KiB |           0 → 939 | `0x1f397`                                       | `tmp/nix-shell.NcwiQ3/profiler-md-input-generation.fqUYfr/fortran-current/binary` |

##### Ours

|  Change |        Delta |             % |                Size |           Objects | Function                                        | Location                                                                          |
| ------: | -----------: | ------------: | ------------------: | ----------------: | ----------------------------------------------- | --------------------------------------------------------------------------------- |
| +392.0% |  +36.413 MiB | 23.4% → 64.8% | 9.29 MiB → 45.7 MiB |   53,556 → 56,930 | `__json_value_module_MOD_parse_number`          | `src/json-fortran/src/json_value_module.F90`                                      |
| +428.3% |  +36.394 MiB | 21.4% → 63.7% |  8.5 MiB → 44.9 MiB |   31,979 → 35,064 | `__json_value_module_MOD_string_to_int`         | `src/json-fortran/src/json_value_module.F90`                                      |
| +380.2% |  +35.864 MiB | 23.8% → 64.2% | 9.43 MiB → 45.3 MiB |   34,566 → 35,323 | `__json_string_utilities_MOD_string_to_integer` | `src/json-fortran/src/json_string_utilities.F90`                                  |
|  +83.2% |  +31.208 MiB | 94.5% → 97.5% | 37.5 MiB → 68.7 MiB | 477,898 → 436,620 | `__json_value_module_MOD_parse_object`          | `src/json-fortran/src/json_value_module.F90`                                      |
|  +59.0% |   +10.92 MiB | 46.6% → 41.7% | 18.5 MiB → 29.4 MiB | 232,052 → 220,300 | `__json_value_module_MOD_parse_array`           | `src/json-fortran/src/json_value_module.F90`                                      |
|  +13.2% |   +1.851 MiB | 35.4% → 22.5% |   14 MiB → 15.9 MiB | 186,584 → 172,869 | `__json_value_module_MOD_json_parse_file`       | `src/json-fortran/src/json_value_module.F90`                                      |
|  +13.5% |   +1.845 MiB | 34.4% → 22.0% | 13.7 MiB → 15.5 MiB | 177,395 → 165,407 | `__json_file_module_MOD_json_file_load`         | `src/json-fortran/src/json_file_module.F90`                                       |
|   +9.9% |   +1.412 MiB | 35.9% → 22.2% | 14.3 MiB → 15.7 MiB | 173,325 → 160,528 | `MAIN__`                                        | `out/profile.f90`                                                                 |
|  +10.2% |   +1.387 MiB | 34.3% → 21.3% |   13.6 MiB → 15 MiB | 163,103 → 149,886 | `main`                                          | `out/profile.f90`                                                                 |
|  +21.5% | +927.627 KiB |  10.6% → 7.3% | 4.22 MiB → 5.13 MiB |   63,922 → 66,912 | `__json_value_module_MOD_parse_value`           | `src/json-fortran/src/json_value_module.F90`                                      |
|     new | +837.843 KiB |   0.0% → 1.2% |       0 B → 838 KiB |         0 → 7,614 | `0x22aaf`                                       | `tmp/nix-shell.NcwiQ3/profiler-md-input-generation.fqUYfr/fortran-current/binary` |
|     new | +712.164 KiB |   0.0% → 1.0% |       0 B → 712 KiB |         0 → 6,826 | `0x1e85f`                                       | `[stack]`                                                                         |
|     new | +693.281 KiB |   0.0% → 1.0% |       0 B → 693 KiB |           0 → 170 | `0x1d11f`                                       | `[stack]`                                                                         |
|     new |  +600.14 KiB |   0.0% → 0.8% |       0 B → 600 KiB |         0 → 5,487 | `0x1e5ef`                                       | `[stack]`                                                                         |
|     new |  +234.75 KiB |   0.0% → 0.3% |       0 B → 235 KiB |           0 → 939 | `0x1f397`                                       | `tmp/nix-shell.NcwiQ3/profiler-md-input-generation.fqUYfr/fortran-current/binary` |
|     new |   +234.5 KiB |   0.0% → 0.3% |       0 B → 235 KiB |           0 → 938 | `0x1deaf`                                       | `[stack]`                                                                         |
|     new |   +234.5 KiB |   0.0% → 0.3% |       0 B → 235 KiB |           0 → 938 | `0x1dd67`                                       | `[stack]`                                                                         |
|     new | +205.406 KiB |   0.0% → 0.3% |       0 B → 205 KiB |         0 → 1,878 | `0x1d36f`                                       | `[stack]`                                                                         |
|     new | +205.296 KiB |   0.0% → 0.3% |       0 B → 205 KiB |         0 → 1,877 | `0x1dd9f`                                       | `[stack]`                                                                         |
|     new | +205.078 KiB |   0.0% → 0.3% |       0 B → 205 KiB |         0 → 1,875 | `0x1d46f`                                       | `[stack]`                                                                         |

##### Native

|   Change |        Delta |             % |                Size |         Objects | Function             | Location                                          |
| -------: | -----------: | ------------: | ------------------: | --------------: | -------------------- | ------------------------------------------------- |
|  +463.1% |  +36.734 MiB | 20.0% → 63.3% | 7.93 MiB → 44.7 MiB |  1,992 → 11,216 | `0xfa6bf`            | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`  |
|  +461.6% |  +36.729 MiB | 20.0% → 63.4% | 7.96 MiB → 44.7 MiB |  6,993 → 14,955 | `0x109623`           | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`  |
|  +359.1% |  +36.218 MiB | 25.4% → 65.7% | 10.1 MiB → 46.3 MiB | 13,656 → 17,633 | `0x1c1b3`            | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`  |
|      new | +772.932 KiB |   0.0% → 1.1% |       0 B → 773 KiB |       0 → 3,556 | `0xffff8a179d67`     | `<unknown>`                                       |
|      new | +415.968 KiB |   0.0% → 0.6% |       0 B → 416 KiB |         0 → 102 | `0xaaaad7bfa0df`     | `<unknown>`                                       |
|      new | +193.076 KiB |   0.0% → 0.3% |       0 B → 193 KiB |       0 → 3,763 | `0xffff8a178fff`     | `<unknown>`                                       |
|      new | +184.178 KiB |   0.0% → 0.3% |       0 B → 184 KiB |       0 → 2,581 | `0xffff898e003f`     | `<unknown>`                                       |
| +1551.2% |  +97.736 KiB |  <0.1% → 0.1% |   6.3 KiB → 104 KiB |        66 → 645 | `0x3142b`            | `usr/lib/aarch64-linux-gnu/libtcmalloc.so.4.5.10` |
|      new |  +45.283 KiB |   0.0% → 0.1% |      0 B → 45.3 KiB |       0 → 1,984 | `0xaaaad7a9e7ff`     | `<unknown>`                                       |
|      new |  +34.845 KiB |  0.0% → <0.1% |      0 B → 34.8 KiB |       0 → 2,817 | `0xe95906d9111bd8ff` | `<unknown>`                                       |
|      new |  +33.011 KiB |  0.0% → <0.1% |        0 B → 33 KiB |       0 → 1,878 | `0x55555ffff`        | `<unknown>`                                       |
|      new |  +27.472 KiB |  0.0% → <0.1% |      0 B → 27.5 KiB |       0 → 2,911 | `0xbd4e`             | `<unknown>`                                       |
|    +3.2% |  +16.207 KiB |   1.3% → 0.7% |   510 KiB → 526 KiB |       149 → 135 | `0x5`                | `<unknown>`                                       |
|    +3.5% |  +11.865 KiB |   0.8% → 0.5% |   339 KiB → 351 KiB |   3,547 → 4,330 | `0x1`                | `<unknown>`                                       |
|      new |   +8.164 KiB |  0.0% → <0.1% |      0 B → 8.16 KiB |           0 → 4 | `0xaaaad7b41617`     | `<unknown>`                                       |
|      new |   +8.164 KiB |  0.0% → <0.1% |      0 B → 8.16 KiB |           0 → 4 | `0xaaaad7b4152f`     | `<unknown>`                                       |
|      new |   +8.156 KiB |  0.0% → <0.1% |      0 B → 8.16 KiB |           0 → 2 | `0xaaaad7c56267`     | `<unknown>`                                       |
|      new |   +8.156 KiB |  0.0% → <0.1% |      0 B → 8.16 KiB |           0 → 2 | `0xaaaad7bfbbbf`     | `<unknown>`                                       |
|      new |   +8.156 KiB |  0.0% → <0.1% |      0 B → 8.16 KiB |           0 → 2 | `0xaaaad7b9ddd7`     | `<unknown>`                                       |
|      new |   +8.156 KiB |  0.0% → <0.1% |      0 B → 8.16 KiB |           0 → 2 | `0xaaaad7c288ff`     | `<unknown>`                                       |

#### Improvements

Functions with the largest decrease in total bytes allocated in the function and all its callees.

|  Change |        Delta |             % |                Size |           Objects | Function                                           | Location                                                                       |
| ------: | -----------: | ------------: | ------------------: | ----------------: | -------------------------------------------------- | ------------------------------------------------------------------------------ |
|  -47.3% |   -5.126 MiB |  27.3% → 8.1% |  10.8 MiB → 5.7 MiB |   99,717 → 56,608 | `__json_value_module_MOD_parse_string`             | `src/json-fortran/src/json_value_module.F90`                                   |
|   -9.8% |   -1.252 MiB | 32.3% → 16.4% | 12.8 MiB → 11.6 MiB | 152,764 → 140,613 | `0x27743`                                          | `usr/lib/aarch64-linux-gnu/libc.so.6`                                          |
| removed |    -1.15 MiB |   2.9% → 0.0% |      1.15 MiB → 0 B |         9,495 → 0 | `0x228cf`                                          | `tmp/nix-shell.NcwiQ3/profiler-md-input-generation.fqUYfr/fortran-base/binary` |
| removed | -920.703 KiB |   2.3% → 0.0% |       921 KiB → 0 B |         7,343 → 0 | `0x1f22f`                                          | `[stack]`                                                                      |
|  -52.8% | -784.781 KiB |   3.7% → 1.0% |  1.45 MiB → 703 KiB |    17,614 → 9,633 | `0x1093fb`                                         | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`                               |
| removed | -711.382 KiB |   1.7% → 0.0% |       711 KiB → 0 B |         6,726 → 0 | `0x1f47f`                                          | `[stack]`                                                                      |
|   -5.5% | -649.707 KiB | 28.9% → 15.4% | 11.5 MiB → 10.8 MiB | 138,759 → 129,594 | `0x27817`                                          | `usr/lib/aarch64-linux-gnu/libc.so.6`                                          |
|  -56.7% | -542.454 KiB |   2.4% → 0.6% |   958 KiB → 415 KiB |       2,522 → 203 | `__json_value_module_MOD_json_get_by_path_default` | `src/json-fortran/src/json_value_module.F90`                                   |
|  -56.7% | -542.454 KiB |   2.4% → 0.6% |   958 KiB → 415 KiB |       2,522 → 203 | `__json_value_module_MOD_json_get_by_path`         | `src/json-fortran/src/json_value_module.F90`                                   |
|  -56.6% | -541.624 KiB |   2.4% → 0.6% |   958 KiB → 416 KiB |     2,534 → 1,065 | `__json_value_module_MOD_json_get_string_by_path`  | `src/json-fortran/src/json_get_scalar_by_path.inc`                             |
|  -56.6% | -541.624 KiB |   2.4% → 0.6% |   958 KiB → 416 KiB |     2,534 → 1,065 | `__json_file_module_MOD_json_file_get_string`      | `src/json-fortran/src/json_file_module.F90`                                    |
|  -57.2% | -528.468 KiB |   2.3% → 0.5% |   923 KiB → 395 KiB |    11,654 → 6,407 | `0x10b28f`                                         | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`                               |
|  -65.2% |     -486 KiB |   1.8% → 0.4% |   745 KiB → 259 KiB |     5,962 → 2,074 | `0x112ecb`                                         | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`                               |
|  -35.2% | -481.233 KiB |   3.4% → 1.2% |  1.33 MiB → 885 KiB |         340 → 219 | `0x4`                                              | `<unknown>`                                                                    |
|   -4.3% | -454.053 KiB | 26.2% → 14.1% | 10.4 MiB → 9.95 MiB | 124,114 → 118,144 | `_start`                                           | `<unknown>`                                                                    |
| removed | -415.015 KiB |   1.0% → 0.0% |       415 KiB → 0 B |           201 → 0 | `0xaaaab89e4197`                                   | `<unknown>`                                                                    |
| removed |  -411.89 KiB |   1.0% → 0.0% |       412 KiB → 0 B |           101 → 0 | `0xaaaab89e413f`                                   | `<unknown>`                                                                    |
| removed | -397.061 KiB |   1.0% → 0.0% |       397 KiB → 0 B |         2,122 → 0 | `0xffffa218003f`                                   | `<unknown>`                                                                    |
| removed |  -280.39 KiB |   0.7% → 0.0% |       280 KiB → 0 B |         2,844 → 0 | `0xffffa2a19d67`                                   | `<unknown>`                                                                    |
|  -45.3% | -256.312 KiB |   1.4% → 0.4% |   565 KiB → 309 KiB |     5,969 → 3,235 | `0x1c24b`                                          | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`                               |

##### Ours

|  Change |        Delta |            % |               Size |         Objects | Function                                           | Location                                                                       |
| ------: | -----------: | -----------: | -----------------: | --------------: | -------------------------------------------------- | ------------------------------------------------------------------------------ |
|  -47.3% |   -5.126 MiB | 27.3% → 8.1% | 10.8 MiB → 5.7 MiB | 99,717 → 56,608 | `__json_value_module_MOD_parse_string`             | `src/json-fortran/src/json_value_module.F90`                                   |
| removed |    -1.15 MiB |  2.9% → 0.0% |     1.15 MiB → 0 B |       9,495 → 0 | `0x228cf`                                          | `tmp/nix-shell.NcwiQ3/profiler-md-input-generation.fqUYfr/fortran-base/binary` |
| removed | -920.703 KiB |  2.3% → 0.0% |      921 KiB → 0 B |       7,343 → 0 | `0x1f22f`                                          | `[stack]`                                                                      |
| removed | -711.382 KiB |  1.7% → 0.0% |      711 KiB → 0 B |       6,726 → 0 | `0x1f47f`                                          | `[stack]`                                                                      |
|  -56.7% | -542.454 KiB |  2.4% → 0.6% |  958 KiB → 415 KiB |     2,522 → 203 | `__json_value_module_MOD_json_get_by_path_default` | `src/json-fortran/src/json_value_module.F90`                                   |
|  -56.7% | -542.454 KiB |  2.4% → 0.6% |  958 KiB → 415 KiB |     2,522 → 203 | `__json_value_module_MOD_json_get_by_path`         | `src/json-fortran/src/json_value_module.F90`                                   |
|  -56.6% | -541.624 KiB |  2.4% → 0.6% |  958 KiB → 416 KiB |   2,534 → 1,065 | `__json_value_module_MOD_json_get_string_by_path`  | `src/json-fortran/src/json_get_scalar_by_path.inc`                             |
|  -56.6% | -541.624 KiB |  2.4% → 0.6% |  958 KiB → 416 KiB |   2,534 → 1,065 | `__json_file_module_MOD_json_file_get_string`      | `src/json-fortran/src/json_file_module.F90`                                    |
| removed |  -234.75 KiB |  0.6% → 0.0% |      235 KiB → 0 B |         939 → 0 | `0x1f237`                                          | `tmp/nix-shell.NcwiQ3/profiler-md-input-generation.fqUYfr/fortran-base/binary` |
| removed |   -234.5 KiB |  0.6% → 0.0% |      235 KiB → 0 B |         938 → 0 | `0x1eaff`                                          | `[stack]`                                                                      |
| removed |   -234.5 KiB |  0.6% → 0.0% |      235 KiB → 0 B |         938 → 0 | `0x1e9b7`                                          | `[stack]`                                                                      |
| removed |  -234.25 KiB |  0.6% → 0.0% |      234 KiB → 0 B |         937 → 0 | `0x1ebff`                                          | `[stack]`                                                                      |
| removed | -205.406 KiB |  0.5% → 0.0% |      205 KiB → 0 B |       1,878 → 0 | `0x1dfbf`                                          | `[stack]`                                                                      |
| removed | -205.406 KiB |  0.5% → 0.0% |      205 KiB → 0 B |       1,878 → 0 | `0x1e0bf`                                          | `[stack]`                                                                      |
| removed | -205.187 KiB |  0.5% → 0.0% |      205 KiB → 0 B |       1,876 → 0 | `0x1e9ef`                                          | `[stack]`                                                                      |
| removed | -113.625 KiB |  0.3% → 0.0% |      114 KiB → 0 B |         909 → 0 | `0x1eb1f`                                          | `[stack]`                                                                      |
| removed |  -99.421 KiB |  0.2% → 0.0% |     99.4 KiB → 0 B |         909 → 0 | `0x1e7cf`                                          | `[stack]`                                                                      |
| removed |  -99.421 KiB |  0.2% → 0.0% |     99.4 KiB → 0 B |         909 → 0 | `0x1e687`                                          | `[stack]`                                                                      |
| removed |  -97.781 KiB |  0.2% → 0.0% |     97.8 KiB → 0 B |         894 → 0 | `0x1e337`                                          | `[stack]`                                                                      |
| removed |  -91.984 KiB |  0.2% → 0.0% |       92 KiB → 0 B |         841 → 0 | `0x1e49f`                                          | `[stack]`                                                                      |

##### Native

|  Change |        Delta |             % |                Size |           Objects | Function         | Location                                         |
| ------: | -----------: | ------------: | ------------------: | ----------------: | ---------------- | ------------------------------------------------ |
|   -9.8% |   -1.252 MiB | 32.3% → 16.4% | 12.8 MiB → 11.6 MiB | 152,764 → 140,613 | `0x27743`        | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  -52.8% | -784.781 KiB |   3.7% → 1.0% |  1.45 MiB → 703 KiB |    17,614 → 9,633 | `0x1093fb`       | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|   -5.5% | -649.707 KiB | 28.9% → 15.4% | 11.5 MiB → 10.8 MiB | 138,759 → 129,594 | `0x27817`        | `usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  -57.2% | -528.468 KiB |   2.3% → 0.5% |   923 KiB → 395 KiB |    11,654 → 6,407 | `0x10b28f`       | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  -65.2% |     -486 KiB |   1.8% → 0.4% |   745 KiB → 259 KiB |     5,962 → 2,074 | `0x112ecb`       | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  -35.2% | -481.233 KiB |   3.4% → 1.2% |  1.33 MiB → 885 KiB |         340 → 219 | `0x4`            | `<unknown>`                                      |
|   -4.3% | -454.053 KiB | 26.2% → 14.1% | 10.4 MiB → 9.95 MiB | 124,114 → 118,144 | `_start`         | `<unknown>`                                      |
| removed | -415.015 KiB |   1.0% → 0.0% |       415 KiB → 0 B |           201 → 0 | `0xaaaab89e4197` | `<unknown>`                                      |
| removed |  -411.89 KiB |   1.0% → 0.0% |       412 KiB → 0 B |           101 → 0 | `0xaaaab89e413f` | `<unknown>`                                      |
| removed | -397.061 KiB |   1.0% → 0.0% |       397 KiB → 0 B |         2,122 → 0 | `0xffffa218003f` | `<unknown>`                                      |
| removed |  -280.39 KiB |   0.7% → 0.0% |       280 KiB → 0 B |         2,844 → 0 | `0xffffa2a19d67` | `<unknown>`                                      |
|  -45.3% | -256.312 KiB |   1.4% → 0.4% |   565 KiB → 309 KiB |     5,969 → 3,235 | `0x1c24b`        | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  -45.9% | -256.312 KiB |   1.4% → 0.4% |   558 KiB → 302 KiB |     5,950 → 3,216 | `0x10c847`       | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  -45.9% | -256.312 KiB |   1.4% → 0.4% |   558 KiB → 302 KiB |     5,950 → 3,216 | `0x10ab63`       | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  -45.9% | -256.312 KiB |   1.4% → 0.4% |   558 KiB → 302 KiB |     5,950 → 3,216 | `0x10b283`       | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| removed | -163.767 KiB |   0.4% → 0.0% |       164 KiB → 0 B |           671 → 0 | `0xffffa2190027` | `<unknown>`                                      |
| removed | -163.467 KiB |   0.4% → 0.0% |       163 KiB → 0 B |           458 → 0 | `0x1ff`          | `<unknown>`                                      |
|  -71.7% |  -96.975 KiB |   0.3% → 0.1% |  135 KiB → 38.2 KiB |       2,338 → 528 | `0x0`            | `<unknown>`                                      |
| removed |  -83.404 KiB |   0.2% → 0.0% |      83.4 KiB → 0 B |         3,799 → 0 | `0xffffa2a18fff` | `<unknown>`                                      |
|  -23.9% |  -42.468 KiB |   0.4% → 0.2% |   178 KiB → 135 KiB |     5,692 → 4,333 | `0x112ebb`       | `usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

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

| Change |       Delta |           % |           Size | Objects | Function             | Location                                                                          |
| -----: | ----------: | ----------: | -------------: | ------: | -------------------- | --------------------------------------------------------------------------------- |
|    new | +35.304 KiB | 0.0% → 3.9% | 0 B → 35.3 KiB | 0 → 317 | `0x22aaf`            | `tmp/nix-shell.NcwiQ3/profiler-md-input-generation.fqUYfr/fortran-current/binary` |
|    new | +29.617 KiB | 0.0% → 3.3% | 0 B → 29.6 KiB | 0 → 307 | `0x1e85f`            | `[stack]`                                                                         |
|    new | +25.265 KiB | 0.0% → 2.8% | 0 B → 25.3 KiB | 0 → 231 | `0x1e5ef`            | `[stack]`                                                                         |
|    new |  +8.531 KiB | 0.0% → 1.0% | 0 B → 8.53 KiB |  0 → 78 | `0x1dd9f`            | `[stack]`                                                                         |
|    new |  +8.531 KiB | 0.0% → 1.0% | 0 B → 8.53 KiB |  0 → 78 | `0x1d36f`            | `[stack]`                                                                         |
|    new |  +8.531 KiB | 0.0% → 1.0% | 0 B → 8.53 KiB |  0 → 78 | `0x1d46f`            | `[stack]`                                                                         |
|    new |  +8.312 KiB | 0.0% → 0.9% | 0 B → 8.31 KiB |  0 → 76 | `0xffff898e003f`     | `<unknown>`                                                                       |
|    new |  +5.625 KiB | 0.0% → 0.6% | 0 B → 5.63 KiB | 0 → 307 | `0xaaaad7a9e7ff`     | `<unknown>`                                                                       |
|    new |  +4.265 KiB | 0.0% → 0.5% | 0 B → 4.27 KiB |  0 → 39 | `0x1d6e7`            | `[stack]`                                                                         |
|    new |  +4.265 KiB | 0.0% → 0.5% | 0 B → 4.27 KiB |  0 → 39 | `0x1d3e7`            | `[stack]`                                                                         |
|    new |  +4.046 KiB | 0.0% → 0.5% | 0 B → 4.05 KiB |  0 → 37 | `0x1db7f`            | `[stack]`                                                                         |
|    new |  +4.046 KiB | 0.0% → 0.5% | 0 B → 4.05 KiB |  0 → 37 | `0x1da37`            | `[stack]`                                                                         |
|    new |  +3.718 KiB | 0.0% → 0.4% | 0 B → 3.72 KiB |  0 → 34 | `0x1d84f`            | `[stack]`                                                                         |
|    new |    +3.5 KiB | 0.0% → 0.4% |  0 B → 3.5 KiB |  0 → 32 | `0x1d74f`            | `[stack]`                                                                         |
|    new |  +3.188 KiB | 0.0% → 0.4% | 0 B → 3.19 KiB | 0 → 136 | `0xffff8a178fff`     | `<unknown>`                                                                       |
|    new |  +3.091 KiB | 0.0% → 0.3% | 0 B → 3.09 KiB | 0 → 148 | `0xffff8a179d67`     | `<unknown>`                                                                       |
|    new |  +1.447 KiB | 0.0% → 0.2% | 0 B → 1.45 KiB | 0 → 117 | `0xe95906d9111bd8ff` | `<unknown>`                                                                       |
|    new |  +1.371 KiB | 0.0% → 0.2% | 0 B → 1.37 KiB |  0 → 78 | `0x55555ffff`        | `<unknown>`                                                                       |
|    new |   +1.14 KiB | 0.0% → 0.1% | 0 B → 1.14 KiB | 0 → 121 | `0xbd4e`             | `<unknown>`                                                                       |
|    new |      +808 B | 0.0% → 0.1% |    0 B → 808 B |  0 → 39 | `0x1d02f`            | `[stack]`                                                                         |

##### Ours

| Change |       Delta |            % |           Size | Objects | Function  | Location                                                                          |
| -----: | ----------: | -----------: | -------------: | ------: | --------- | --------------------------------------------------------------------------------- |
|    new | +35.304 KiB |  0.0% → 3.9% | 0 B → 35.3 KiB | 0 → 317 | `0x22aaf` | `tmp/nix-shell.NcwiQ3/profiler-md-input-generation.fqUYfr/fortran-current/binary` |
|    new | +29.617 KiB |  0.0% → 3.3% | 0 B → 29.6 KiB | 0 → 307 | `0x1e85f` | `[stack]`                                                                         |
|    new | +25.265 KiB |  0.0% → 2.8% | 0 B → 25.3 KiB | 0 → 231 | `0x1e5ef` | `[stack]`                                                                         |
|    new |  +8.531 KiB |  0.0% → 1.0% | 0 B → 8.53 KiB |  0 → 78 | `0x1dd9f` | `[stack]`                                                                         |
|    new |  +8.531 KiB |  0.0% → 1.0% | 0 B → 8.53 KiB |  0 → 78 | `0x1d36f` | `[stack]`                                                                         |
|    new |  +8.531 KiB |  0.0% → 1.0% | 0 B → 8.53 KiB |  0 → 78 | `0x1d46f` | `[stack]`                                                                         |
|    new |  +4.265 KiB |  0.0% → 0.5% | 0 B → 4.27 KiB |  0 → 39 | `0x1d6e7` | `[stack]`                                                                         |
|    new |  +4.265 KiB |  0.0% → 0.5% | 0 B → 4.27 KiB |  0 → 39 | `0x1d3e7` | `[stack]`                                                                         |
|    new |  +4.046 KiB |  0.0% → 0.5% | 0 B → 4.05 KiB |  0 → 37 | `0x1db7f` | `[stack]`                                                                         |
|    new |  +4.046 KiB |  0.0% → 0.5% | 0 B → 4.05 KiB |  0 → 37 | `0x1da37` | `[stack]`                                                                         |
|    new |  +3.718 KiB |  0.0% → 0.4% | 0 B → 3.72 KiB |  0 → 34 | `0x1d84f` | `[stack]`                                                                         |
|    new |    +3.5 KiB |  0.0% → 0.4% |  0 B → 3.5 KiB |  0 → 32 | `0x1d74f` | `[stack]`                                                                         |
|    new |      +808 B |  0.0% → 0.1% |    0 B → 808 B |  0 → 39 | `0x1d02f` | `[stack]`                                                                         |
|    new |      +702 B |  0.0% → 0.1% |    0 B → 702 B |  0 → 39 | `0x1dc4f` | `[stack]`                                                                         |
|    new |      +463 B |  0.0% → 0.1% |    0 B → 463 B |  0 → 40 | `0x1da4f` | `[stack]`                                                                         |
|    new |      +383 B | 0.0% → <0.1% |    0 B → 383 B |  0 → 39 | `0x1d12f` | `[stack]`                                                                         |
|    new |      +336 B | 0.0% → <0.1% |    0 B → 336 B |   0 → 3 | `0x1d4af` | `[stack]`                                                                         |
|    new |      +312 B | 0.0% → <0.1% |    0 B → 312 B |  0 → 39 | `0x1dd2f` | `[stack]`                                                                         |
|    new |      +312 B | 0.0% → <0.1% |    0 B → 312 B |  0 → 39 | `0x1e0af` | `[stack]`                                                                         |
|    new |      +234 B | 0.0% → <0.1% |    0 B → 234 B |  0 → 39 | `0x1db4f` | `[stack]`                                                                         |

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

Functions with the largest decrease in total bytes retained in the function and all its callees.

|  Change |       Delta |           % |           Size | Objects | Function             | Location                                                                       |
| ------: | ----------: | ----------: | -------------: | ------: | -------------------- | ------------------------------------------------------------------------------ |
| removed | -38.828 KiB | 4.3% → 0.0% | 38.8 KiB → 0 B | 355 → 0 | `0x228cf`            | `tmp/nix-shell.NcwiQ3/profiler-md-input-generation.fqUYfr/fortran-base/binary` |
| removed | -29.617 KiB | 3.3% → 0.0% | 29.6 KiB → 0 B | 307 → 0 | `0x1f47f`            | `[stack]`                                                                      |
| removed | -25.156 KiB | 2.8% → 0.0% | 25.2 KiB → 0 B | 230 → 0 | `0x1f22f`            | `[stack]`                                                                      |
| removed |  -8.531 KiB | 1.0% → 0.0% | 8.53 KiB → 0 B |  78 → 0 | `0x1e9ef`            | `[stack]`                                                                      |
| removed |  -8.531 KiB | 1.0% → 0.0% | 8.53 KiB → 0 B |  78 → 0 | `0x1dfbf`            | `[stack]`                                                                      |
| removed |  -8.531 KiB | 1.0% → 0.0% | 8.53 KiB → 0 B |  78 → 0 | `0x1e0bf`            | `[stack]`                                                                      |
| removed |  -8.312 KiB | 0.9% → 0.0% | 8.31 KiB → 0 B |  76 → 0 | `0xffffa218003f`     | `<unknown>`                                                                    |
| removed |  -5.625 KiB | 0.6% → 0.0% | 5.63 KiB → 0 B | 307 → 0 | `0xaaaab87a67ff`     | `<unknown>`                                                                    |
| removed |  -4.265 KiB | 0.5% → 0.0% | 4.27 KiB → 0 B |  39 → 0 | `0x1e337`            | `[stack]`                                                                      |
| removed |  -4.046 KiB | 0.5% → 0.0% | 4.05 KiB → 0 B |  37 → 0 | `0x1e7cf`            | `[stack]`                                                                      |
| removed |  -4.046 KiB | 0.5% → 0.0% | 4.05 KiB → 0 B |  37 → 0 | `0x1e687`            | `[stack]`                                                                      |
| removed |  -3.718 KiB | 0.4% → 0.0% | 3.72 KiB → 0 B |  34 → 0 | `0x1e49f`            | `[stack]`                                                                      |
| removed |    -3.5 KiB | 0.4% → 0.0% |  3.5 KiB → 0 B |  32 → 0 | `0x1e39f`            | `[stack]`                                                                      |
| removed |  -3.188 KiB | 0.4% → 0.0% | 3.19 KiB → 0 B | 136 → 0 | `0xffffa2a18fff`     | `<unknown>`                                                                    |
| removed |  -3.091 KiB | 0.3% → 0.0% | 3.09 KiB → 0 B | 148 → 0 | `0xffffa2a19d67`     | `<unknown>`                                                                    |
| removed |  -1.447 KiB | 0.2% → 0.0% | 1.45 KiB → 0 B | 117 → 0 | `0x9a971f3bf4c75dff` | `<unknown>`                                                                    |
| removed |  -1.371 KiB | 0.2% → 0.0% | 1.37 KiB → 0 B |  78 → 0 | `0x55554ffff`        | `<unknown>`                                                                    |
| removed |   -1.14 KiB | 0.1% → 0.0% | 1.14 KiB → 0 B | 121 → 0 | `0xc3d2`             | `<unknown>`                                                                    |
| removed |      -808 B | 0.1% → 0.0% |    808 B → 0 B |  39 → 0 | `0x1dc7f`            | `[stack]`                                                                      |
| removed |      -760 B | 0.1% → 0.0% |    760 B → 0 B |   1 → 0 | `0x1ef2f`            | `[stack]`                                                                      |

##### Ours

|  Change |       Delta |            % |           Size | Objects | Function  | Location                                                                       |
| ------: | ----------: | -----------: | -------------: | ------: | --------- | ------------------------------------------------------------------------------ |
| removed | -38.828 KiB |  4.3% → 0.0% | 38.8 KiB → 0 B | 355 → 0 | `0x228cf` | `tmp/nix-shell.NcwiQ3/profiler-md-input-generation.fqUYfr/fortran-base/binary` |
| removed | -29.617 KiB |  3.3% → 0.0% | 29.6 KiB → 0 B | 307 → 0 | `0x1f47f` | `[stack]`                                                                      |
| removed | -25.156 KiB |  2.8% → 0.0% | 25.2 KiB → 0 B | 230 → 0 | `0x1f22f` | `[stack]`                                                                      |
| removed |  -8.531 KiB |  1.0% → 0.0% | 8.53 KiB → 0 B |  78 → 0 | `0x1e9ef` | `[stack]`                                                                      |
| removed |  -8.531 KiB |  1.0% → 0.0% | 8.53 KiB → 0 B |  78 → 0 | `0x1dfbf` | `[stack]`                                                                      |
| removed |  -8.531 KiB |  1.0% → 0.0% | 8.53 KiB → 0 B |  78 → 0 | `0x1e0bf` | `[stack]`                                                                      |
| removed |  -4.265 KiB |  0.5% → 0.0% | 4.27 KiB → 0 B |  39 → 0 | `0x1e337` | `[stack]`                                                                      |
| removed |  -4.046 KiB |  0.5% → 0.0% | 4.05 KiB → 0 B |  37 → 0 | `0x1e7cf` | `[stack]`                                                                      |
| removed |  -4.046 KiB |  0.5% → 0.0% | 4.05 KiB → 0 B |  37 → 0 | `0x1e687` | `[stack]`                                                                      |
| removed |  -3.718 KiB |  0.4% → 0.0% | 3.72 KiB → 0 B |  34 → 0 | `0x1e49f` | `[stack]`                                                                      |
| removed |    -3.5 KiB |  0.4% → 0.0% |  3.5 KiB → 0 B |  32 → 0 | `0x1e39f` | `[stack]`                                                                      |
| removed |      -808 B |  0.1% → 0.0% |    808 B → 0 B |  39 → 0 | `0x1dc7f` | `[stack]`                                                                      |
| removed |      -760 B |  0.1% → 0.0% |    760 B → 0 B |   1 → 0 | `0x1ef2f` | `[stack]`                                                                      |
| removed |      -702 B |  0.1% → 0.0% |    702 B → 0 B |  39 → 0 | `0x1e89f` | `[stack]`                                                                      |
| removed |      -463 B |  0.1% → 0.0% |    463 B → 0 B |  40 → 0 | `0x1e69f` | `[stack]`                                                                      |
| removed |      -383 B | <0.1% → 0.0% |    383 B → 0 B |  39 → 0 | `0x1dd7f` | `[stack]`                                                                      |
| removed |      -336 B | <0.1% → 0.0% |    336 B → 0 B |   3 → 0 | `0x1e0ff` | `[stack]`                                                                      |
| removed |      -312 B | <0.1% → 0.0% |    312 B → 0 B |  39 → 0 | `0x1e97f` | `[stack]`                                                                      |
| removed |      -312 B | <0.1% → 0.0% |    312 B → 0 B |  39 → 0 | `0x1ecff` | `[stack]`                                                                      |
| removed |      -234 B | <0.1% → 0.0% |    234 B → 0 B |  39 → 0 | `0x1e79f` | `[stack]`                                                                      |

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

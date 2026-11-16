# CPU profile diff

Took 4.04s → 3.86s (-188.00ms, -4.7%) over 4,043 → 3,855 samples (1.0ms per sample).

| Category | Change |     Delta |             % |          Time |       Samples |
| -------- | -----: | --------: | ------------: | ------------: | ------------: |
| Ours     |  -6.3% | -152.00ms | 59.2% → 58.2% | 2.39s → 2.24s | 2,394 → 2,242 |
| Native   |  -2.2% |  -36.00ms | 40.8% → 41.8% | 1.65s → 1.61s | 1,649 → 1,613 |

Paths starting with `./` or `../` are relative to `/src/json-fortran/src/`.

`…` stands for omitted frames.

## Call tree

Call paths to the hottest and most changed functions.

```
└── … 4.04s → 3.86s (100.0%) MAIN__ at /out/profile.f90:5
    ├── 3.93s → 3.74s (97.1%) __json_file_module_MOD_json_file_load at ./json_file_module.F90:842 → 854
    │   └── 3.93s → 3.74s (97.1%) __json_value_module_MOD_json_parse_file at ./json_value_module.F90:9714 → 9721
    │       ├── 3.82s → 3.66s (94.4% → 94.9%, self 0.5% → 0.7%) __json_value_module_MOD_parse_object at 10882 → 10889
    │       │   ├── … 1.21s → 1.07s (29.9% → 27.9%, self 0.6% → 0.7%) __json_value_module_MOD_parse_value at ./json_value_module.F90:10117 → 10124
    │       │   │   ├── 862.0ms → 764.0ms (21.3% → 19.8%, self 1.9% → 1.6%) __json_value_module_MOD_parse_string at 11052 → 11080
    │       │   │   │   ├── 656.0ms → 574.0ms (16.2% → 14.9%, self 15.3% → 14.2%) __json_value_module_MOD_pop_char.part.0 at 11318 → 11346
    │       │   │   │   │   └── … 23.0ms → 13.0ms (0.6% → 0.3%, self 1.1% → 0.8% globally) __read
    │       │   │   │   ├── 46.0ms → 61.0ms (1.1% → 1.6%, self 7.0% → 7.7% globally) _gfortran_string_scan
    │       │   │   │   └── 83.0ms → 66.0ms (2.1% → 1.7%) 11 more callees, led by (0.9% → 0.7%) __libc_malloc
    │       │   │   ├── 25.0ms → 13.0ms (0.6% → 0.3%, self 1.4% → 0.8% globally) __libc_realloc
    │       │   │   ├── 17.0ms → 13.0ms (0.4% → 0.3%, self 2.2% → 2.0% globally) _init
    │       │   │   └── 283.0ms → 257.0ms (7.0% → 6.7%) 25 more callees, led by (3.2%) __json_value_module_MOD_pop_char.part.0 at 11318 → 11346
    │       │   ├── … 888.0ms → 923.0ms (22.0% → 23.9%, self 1.9% → 2.5%, self 3.8% → 4.1% globally) __json_value_module_MOD_parse_string at ./json_value_module.F90:11052 → 11080
    │       │   │   ├── 623.0ms → 616.0ms (15.4% → 16.0%, self 15.0% → 15.6%, self 51.7% → 50.2% globally) __json_value_module_MOD_pop_char.part.0 at 11318 → 11346
    │       │   │   ├── 62.0ms → 67.0ms (1.5% → 1.7%, self 0.6% → 0.7%, self 3.4% → 3.9% globally) __libc_malloc
    │       │   │   │   ├── 5.0ms → 10.0ms (0.1% → 0.3%) 0x90dc0 at /usr/lib/aarch64-linux-gnu/libc.so.6
    │       │   │   │   ├── 1.0ms → 4.0ms (<0.1% → 0.1%) 0x91234 at /usr/lib/aarch64-linux-gnu/libc.so.6
    │       │   │   │   └── 31.0ms → 26.0ms (0.8% → 0.7%) 22 more callees, led by (0.2%) 0x91228 at /usr/lib/aarch64-linux-gnu/libc.so.6
    │       │   │   └── 125.0ms → 145.0ms (3.1% → 3.8%) 7 more callees, led by (1.9% → 2.2%) _gfortran_string_scan
    │       │   ├── … 604.0ms → 559.0ms (14.9% → 14.5%, self 14.4% → 14.1%) __json_value_module_MOD_pop_char.part.0 at ./json_value_module.F90:11318 → 11346
    │       │   │   └── 16.0ms → 10.0ms (0.4% → 0.3%) 0x10a47b at /usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0
    │       │   ├── … 420.0ms → 405.0ms (10.4% → 10.5%) __json_value_module_MOD_parse_number at ./json_value_module.F90:11192 → 11220
    │       │   │   └── 410.0ms → 396.0ms (10.1% → 10.3%) 8 more callees, led by (8.1% → 8.8%) __json_value_module_MOD_string_to_int at 8074 → 8081
    │       │   ├── … 78.0ms → 89.0ms (1.9% → 2.3%, self 3.2% → 3.7% globally) _gfortran_string_len_trim
    │       │   ├── … 81.0ms → 72.0ms (2.0% → 1.9%) __json_value_module_MOD_json_value_create at ./json_value_module.F90:2204 → 2211
    │       │   │   └── 78.0ms → 71.0ms (1.9% → 1.8%) __libc_malloc
    │       │   │       ├── 9.0ms → 5.0ms (0.2% → 0.1%) 0x9123c at /usr/lib/aarch64-linux-gnu/libc.so.6
    │       │   │       └── 56.0ms → 53.0ms (1.4%) 33 more callees, led by (0.2% → 0.3%) 0x91228 at /usr/lib/aarch64-linux-gnu/libc.so.6
    │       │   └── 514.0ms → 508.0ms (12.7% → 13.2%) 24 more callees, led by (3.3% → 3.6%) __json_value_module_MOD_parse_array at ./json_value_module.F90:10987 → 11003
    │       └── … 78.0ms → 58.0ms (1.9% → 1.5%) __libc_malloc
    │           └── 77.0ms → 57.0ms (1.9% → 1.5%) 0x9102b at /usr/lib/aarch64-linux-gnu/libc.so.6
    │               ├── 15.0ms → 5.0ms (0.4% → 0.1%) 0x8ea9c
    │               ├── 7.0ms → 2.0ms (0.2% → 0.1%) 0x8eb04
    │               └── 55.0ms → 50.0ms (1.4% → 1.3%) 14 more callees, led by (0.5%) 0x8eb7f
    ├── 74.0ms → 78.0ms (1.8% → 2.0%) __json_file_module_MOD_json_file_destroy at ./json_file_module.F90:769 → 781
    │   └── 74.0ms → 78.0ms (1.8% → 2.0%) __json_value_module_MOD_json_value_destroy at ./json_value_module.F90:2237 → 2244
    │       ├── … 20.0ms → 23.0ms (0.5% → 0.6%) __json_value_module_MOD_destroy_json_data at ./json_value_module.F90:1387 → 1394
    │       └── 39.0ms → 45.0ms (1.0% → 1.2%) 3 more callees, led by (0.9% → 1.1%) cfree
    └── 43.0ms → 35.0ms (1.1% → 0.9%) 9 more callees, led by (0.8% → 0.6%) __json_file_module_MOD_json_file_get_string at ./json_file_module.F90:1837 → 1863
```

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time spent within the function body, excluding callees. Categories account for at least 1.0% of self time on the base or the current side.

|  Change |    Delta |            % |              Time |   Samples | Function                                      | Location                                          |
| ------: | -------: | -----------: | ----------------: | --------: | --------------------------------------------- | ------------------------------------------------- |
|   +6.0% | +17.00ms |  7.0% → 7.7% | 281.0ms → 298.0ms | 281 → 298 | `_gfortran_string_scan`                       | `<unknown>`                                       |
|  +11.6% | +15.00ms |  3.2% → 3.7% | 129.0ms → 144.0ms | 129 → 144 | `_gfortran_string_len_trim`                   | `<unknown>`                                       |
|   +9.4% | +13.00ms |  3.4% → 3.9% | 138.0ms → 151.0ms | 138 → 151 | `__libc_malloc`                               | `<unknown>`                                       |
|  +76.9% | +10.00ms |  0.3% → 0.6% |   13.0ms → 23.0ms |   13 → 23 | `0x90dc0`                                     | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
| +100.0% |  +8.00ms |  0.2% → 0.4% |    8.0ms → 16.0ms |    8 → 16 | `0x91234`                                     | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
| +266.7% |  +8.00ms |  0.1% → 0.3% |    3.0ms → 11.0ms |    3 → 11 | `_gfortran_concat_string`                     | `<unknown>`                                       |
|  +28.6% |  +6.00ms |  0.5% → 0.7% |   21.0ms → 27.0ms |   21 → 27 | `__json_value_module_MOD_parse_object`        | `./json_value_module.F90:10882 → 10889`           |
|  +23.8% |  +5.00ms |  0.5% → 0.7% |   21.0ms → 26.0ms |   21 → 26 | `__json_string_utilities_MOD_unescape_string` | `./json_string_utilities.F90:483`                 |
|  +26.3% |  +5.00ms |  0.5% → 0.6% |   19.0ms → 24.0ms |   19 → 24 | `0x9d100`                                     | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
| +166.7% |  +5.00ms |  0.1% → 0.2% |     3.0ms → 8.0ms |     3 → 8 | `0x90e74`                                     | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
|     new |  +5.00ms |  0.0% → 0.1% |       0ms → 5.0ms |     0 → 5 | `0x9d11c`                                     | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
| +200.0% |  +4.00ms | <0.1% → 0.2% |     2.0ms → 6.0ms |     2 → 6 | `0x8fad8`                                     | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
| +133.3% |  +4.00ms |  0.1% → 0.2% |     3.0ms → 7.0ms |     3 → 7 | `0xf8da4`                                     | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|     new |  +4.00ms |  0.0% → 0.1% |       0ms → 4.0ms |     0 → 4 | `0x1093f0`                                    | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|     new |  +4.00ms |  0.0% → 0.1% |       0ms → 4.0ms |     0 → 4 | `0x9d168`                                     | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
|   +1.9% |  +3.00ms |  3.8% → 4.1% | 155.0ms → 158.0ms | 155 → 158 | `__json_value_module_MOD_parse_string`        | `./json_value_module.F90:11052 → 11080`           |
|  +12.0% |  +3.00ms |  0.6% → 0.7% |   25.0ms → 28.0ms |   25 → 28 | `__json_value_module_MOD_parse_value`         | `./json_value_module.F90:10117 → 10124`           |
| +100.0% |  +3.00ms |  0.1% → 0.2% |     3.0ms → 6.0ms |     3 → 6 | `0x9d150`                                     | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
| +150.0% |  +3.00ms | <0.1% → 0.1% |     2.0ms → 5.0ms |     2 → 5 | `0x8fbc8`                                     | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
| +300.0% |  +3.00ms | <0.1% → 0.1% |     1.0ms → 4.0ms |     1 → 4 | `0xf97c8`                                     | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### Ours

|  Change |   Delta |            % |              Time |   Samples | Function                                                | Location                                |
| ------: | ------: | -----------: | ----------------: | --------: | ------------------------------------------------------- | --------------------------------------- |
|  +28.6% | +6.00ms |  0.5% → 0.7% |   21.0ms → 27.0ms |   21 → 27 | `__json_value_module_MOD_parse_object`                  | `./json_value_module.F90:10882 → 10889` |
|  +23.8% | +5.00ms |  0.5% → 0.7% |   21.0ms → 26.0ms |   21 → 26 | `__json_string_utilities_MOD_unescape_string`           | `./json_string_utilities.F90:483`       |
|   +1.9% | +3.00ms |  3.8% → 4.1% | 155.0ms → 158.0ms | 155 → 158 | `__json_value_module_MOD_parse_string`                  | `./json_value_module.F90:11052 → 11080` |
|  +12.0% | +3.00ms |  0.6% → 0.7% |   25.0ms → 28.0ms |   25 → 28 | `__json_value_module_MOD_parse_value`                   | `./json_value_module.F90:10117 → 10124` |
| +200.0% | +2.00ms | <0.1% → 0.1% |     1.0ms → 3.0ms |     1 → 3 | `__json_value_module_MOD_parse_array`                   | `./json_value_module.F90:10987 → 11003` |
| +100.0% | +2.00ms | <0.1% → 0.1% |     2.0ms → 4.0ms |     2 → 4 | `__json_string_utilities_MOD_string_to_integer`         | `./json_string_utilities.F90:116`       |
|  +10.0% | +1.00ms |  0.2% → 0.3% |   10.0ms → 11.0ms |   10 → 11 | `__json_value_module_MOD_parse_number`                  | `./json_value_module.F90:11192 → 11220` |
|  +50.0% | +1.00ms | <0.1% → 0.1% |     2.0ms → 3.0ms |     2 → 3 | `__json_value_module_MOD_to_string`                     | `./json_value_module.F90:10755 → 10762` |
|  +25.0% | +1.00ms |         0.1% |     4.0ms → 5.0ms |     4 → 5 | `__json_value_module_MOD_pop_char`                      | `./json_value_module.F90:11318 → 11346` |
|     new | +1.00ms | 0.0% → <0.1% |       0ms → 1.0ms |     0 → 1 | `__json_value_module_MOD_push_char`                     | `./json_value_module.F90:11510`         |
|     new | +1.00ms | 0.0% → <0.1% |       0ms → 1.0ms |     0 → 1 | `__json_value_module_MOD_json_value_get_child_by_index` | `./json_value_module.F90:5446`          |

##### Native

|  Change |    Delta |            % |              Time |   Samples | Function                    | Location                                          |
| ------: | -------: | -----------: | ----------------: | --------: | --------------------------- | ------------------------------------------------- |
|   +6.0% | +17.00ms |  7.0% → 7.7% | 281.0ms → 298.0ms | 281 → 298 | `_gfortran_string_scan`     | `<unknown>`                                       |
|  +11.6% | +15.00ms |  3.2% → 3.7% | 129.0ms → 144.0ms | 129 → 144 | `_gfortran_string_len_trim` | `<unknown>`                                       |
|   +9.4% | +13.00ms |  3.4% → 3.9% | 138.0ms → 151.0ms | 138 → 151 | `__libc_malloc`             | `<unknown>`                                       |
|  +76.9% | +10.00ms |  0.3% → 0.6% |   13.0ms → 23.0ms |   13 → 23 | `0x90dc0`                   | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
| +100.0% |  +8.00ms |  0.2% → 0.4% |    8.0ms → 16.0ms |    8 → 16 | `0x91234`                   | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
| +266.7% |  +8.00ms |  0.1% → 0.3% |    3.0ms → 11.0ms |    3 → 11 | `_gfortran_concat_string`   | `<unknown>`                                       |
|  +26.3% |  +5.00ms |  0.5% → 0.6% |   19.0ms → 24.0ms |   19 → 24 | `0x9d100`                   | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
| +166.7% |  +5.00ms |  0.1% → 0.2% |     3.0ms → 8.0ms |     3 → 8 | `0x90e74`                   | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
|     new |  +5.00ms |  0.0% → 0.1% |       0ms → 5.0ms |     0 → 5 | `0x9d11c`                   | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
| +200.0% |  +4.00ms | <0.1% → 0.2% |     2.0ms → 6.0ms |     2 → 6 | `0x8fad8`                   | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
| +133.3% |  +4.00ms |  0.1% → 0.2% |     3.0ms → 7.0ms |     3 → 7 | `0xf8da4`                   | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|     new |  +4.00ms |  0.0% → 0.1% |       0ms → 4.0ms |     0 → 4 | `0x1093f0`                  | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|     new |  +4.00ms |  0.0% → 0.1% |       0ms → 4.0ms |     0 → 4 | `0x9d168`                   | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
| +100.0% |  +3.00ms |  0.1% → 0.2% |     3.0ms → 6.0ms |     3 → 6 | `0x9d150`                   | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
| +150.0% |  +3.00ms | <0.1% → 0.1% |     2.0ms → 5.0ms |     2 → 5 | `0x8fbc8`                   | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
| +300.0% |  +3.00ms | <0.1% → 0.1% |     1.0ms → 4.0ms |     1 → 4 | `0xf97c8`                   | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| +150.0% |  +3.00ms | <0.1% → 0.1% |     2.0ms → 5.0ms |     2 → 5 | `0x90e68`                   | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
| +150.0% |  +3.00ms | <0.1% → 0.1% |     2.0ms → 5.0ms |     2 → 5 | `__pthread_mutex_trylock`   | `<unknown>`                                       |
| +300.0% |  +3.00ms | <0.1% → 0.1% |     1.0ms → 4.0ms |     1 → 4 | `0xf9378`                   | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|     new |  +3.00ms |  0.0% → 0.1% |       0ms → 3.0ms |     0 → 3 | `0x8fccc`                   | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |

#### Improvements

Functions with the largest decrease in time spent within the function body, excluding callees. Categories account for at least 1.0% of self time on the base or the current side.

| Change |     Delta |             % |            Time |       Samples | Function                                     | Location                                          |
| -----: | --------: | ------------: | --------------: | ------------: | -------------------------------------------- | ------------------------------------------------- |
|  -7.4% | -154.00ms | 51.7% → 50.2% |   2.09s → 1.94s | 2,091 → 1,937 | `__json_value_module_MOD_pop_char.part.0`    | `./json_value_module.F90:11318 → 11346`           |
| -46.4% |  -26.00ms |   1.4% → 0.8% | 56.0ms → 30.0ms |       56 → 30 | `__libc_realloc`                             | `<unknown>`                                       |
| -31.8% |  -14.00ms |   1.1% → 0.8% | 44.0ms → 30.0ms |       44 → 30 | `__read`                                     | `<unknown>`                                       |
| -13.6% |  -12.00ms |   2.2% → 2.0% | 88.0ms → 76.0ms |       88 → 76 | `_init`                                      | `<unknown>`                                       |
| -66.7% |  -10.00ms |   0.4% → 0.1% |  15.0ms → 5.0ms |        15 → 5 | `0x8ea9c`                                    | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
| -43.5% |  -10.00ms |   0.6% → 0.3% | 23.0ms → 13.0ms |       23 → 13 | `0x9123c`                                    | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
| -47.1% |   -8.00ms |   0.4% → 0.2% |  17.0ms → 9.0ms |        17 → 9 | `__json_value_module_MOD_destroy_json_data`  | `./json_value_module.F90:1387 → 1394`             |
| -88.9% |   -8.00ms |  0.2% → <0.1% |   9.0ms → 1.0ms |         9 → 1 | `_gfortran_st_write_done`                    | `<unknown>`                                       |
| -30.8% |   -8.00ms |   0.6% → 0.5% | 26.0ms → 18.0ms |       26 → 18 | `0x10c300`                                   | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| -41.2% |   -7.00ms |   0.4% → 0.3% | 17.0ms → 10.0ms |       17 → 10 | `__open`                                     | `<unknown>`                                       |
| -77.8% |   -7.00ms |   0.2% → 0.1% |   9.0ms → 2.0ms |         9 → 2 | `0x1376f4`                                   | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
| -77.8% |   -7.00ms |   0.2% → 0.1% |   9.0ms → 2.0ms |         9 → 2 | `0x8e960`                                    | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
| -33.3% |   -5.00ms |   0.4% → 0.3% | 15.0ms → 10.0ms |       15 → 10 | `__json_value_module_MOD_json_value_destroy` | `./json_value_module.F90:2237 → 2244`             |
| -71.4% |   -5.00ms |   0.2% → 0.1% |   7.0ms → 2.0ms |         7 → 2 | `0x8eb04`                                    | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
| -45.5% |   -5.00ms |   0.3% → 0.2% |  11.0ms → 6.0ms |        11 → 6 | `calloc`                                     | `<unknown>`                                       |
| -50.0% |   -4.00ms |   0.2% → 0.1% |   8.0ms → 4.0ms |         8 → 4 | `0x8eaa4`                                    | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
| -50.0% |   -4.00ms |   0.2% → 0.1% |   8.0ms → 4.0ms |         8 → 4 | `0x910a0`                                    | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
| -66.7% |   -4.00ms |          0.1% |   6.0ms → 2.0ms |         6 → 2 | `log10f32`                                   | `<unknown>`                                       |
| -20.0% |   -4.00ms |   0.5% → 0.4% | 20.0ms → 16.0ms |       20 → 16 | `0x9e658`                                    | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
| -60.0% |   -3.00ms |          0.1% |   5.0ms → 2.0ms |         5 → 2 | `0x8eb74`                                    | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |

##### Ours

|  Change |     Delta |             % |            Time |       Samples | Function                                          | Location                                    |
| ------: | --------: | ------------: | --------------: | ------------: | ------------------------------------------------- | ------------------------------------------- |
|   -7.4% | -154.00ms | 51.7% → 50.2% |   2.09s → 1.94s | 2,091 → 1,937 | `__json_value_module_MOD_pop_char.part.0`         | `./json_value_module.F90:11318 → 11346`     |
|  -47.1% |   -8.00ms |   0.4% → 0.2% |  17.0ms → 9.0ms |        17 → 9 | `__json_value_module_MOD_destroy_json_data`       | `./json_value_module.F90:1387 → 1394`       |
|  -33.3% |   -5.00ms |   0.4% → 0.3% | 15.0ms → 10.0ms |       15 → 10 | `__json_value_module_MOD_json_value_destroy`      | `./json_value_module.F90:2237 → 2244`       |
|  -66.7% |   -2.00ms |  0.1% → <0.1% |   3.0ms → 1.0ms |         3 → 1 | `__json_value_module_MOD_json_value_create`       | `./json_value_module.F90:2204 → 2211`       |
| removed |   -2.00ms |  <0.1% → 0.0% |     2.0ms → 0ms |         2 → 0 | `__json_value_module_MOD_to_logical`              | `./json_value_module.F90:10659 → 10666`     |
|  -12.5% |   -1.00ms |          0.2% |   8.0ms → 7.0ms |         8 → 7 | `__json_value_module_MOD_json_value_add_member`   | `./json_value_module.F90:3394 → 3401`       |
| removed |   -1.00ms |  <0.1% → 0.0% |     1.0ms → 0ms |         1 → 0 | `__json_value_module_MOD_json_get_string_by_path` | `./json_value_module.F90:9182`              |
| removed |   -1.00ms |  <0.1% → 0.0% |     1.0ms → 0ms |         1 → 0 | `__json_value_module_MOD_json_get_by_path`        | `./json_value_module.F90:6495 → 6502`       |
| removed |   -1.00ms |  <0.1% → 0.0% |     1.0ms → 0ms |         1 → 0 | `__json_value_module_MOD_json_get_string_by_path` | `./json_get_scalar_by_path.inc:9182 → 9189` |
|  -33.3% |   -1.00ms |          0.1% |   3.0ms → 2.0ms |         3 → 2 | `__json_value_module_MOD_json_info`               | `./json_value_module.F90:1409 → 1416`       |
| removed |   -1.00ms |  <0.1% → 0.0% |     1.0ms → 0ms |         1 → 0 | `__json_value_module_MOD_to_integer`              | `./json_value_module.F90:10690`             |
| removed |   -1.00ms |  <0.1% → 0.0% |     1.0ms → 0ms |         1 → 0 | `__json_value_module_MOD_name_strings_equal`      | `./json_value_module.F90:1244`              |

##### Native

| Change |    Delta |            % |            Time | Samples | Function                  | Location                                          |
| -----: | -------: | -----------: | --------------: | ------: | ------------------------- | ------------------------------------------------- |
| -46.4% | -26.00ms |  1.4% → 0.8% | 56.0ms → 30.0ms | 56 → 30 | `__libc_realloc`          | `<unknown>`                                       |
| -31.8% | -14.00ms |  1.1% → 0.8% | 44.0ms → 30.0ms | 44 → 30 | `__read`                  | `<unknown>`                                       |
| -13.6% | -12.00ms |  2.2% → 2.0% | 88.0ms → 76.0ms | 88 → 76 | `_init`                   | `<unknown>`                                       |
| -66.7% | -10.00ms |  0.4% → 0.1% |  15.0ms → 5.0ms |  15 → 5 | `0x8ea9c`                 | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
| -43.5% | -10.00ms |  0.6% → 0.3% | 23.0ms → 13.0ms | 23 → 13 | `0x9123c`                 | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
| -88.9% |  -8.00ms | 0.2% → <0.1% |   9.0ms → 1.0ms |   9 → 1 | `_gfortran_st_write_done` | `<unknown>`                                       |
| -30.8% |  -8.00ms |  0.6% → 0.5% | 26.0ms → 18.0ms | 26 → 18 | `0x10c300`                | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| -41.2% |  -7.00ms |  0.4% → 0.3% | 17.0ms → 10.0ms | 17 → 10 | `__open`                  | `<unknown>`                                       |
| -77.8% |  -7.00ms |  0.2% → 0.1% |   9.0ms → 2.0ms |   9 → 2 | `0x1376f4`                | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
| -77.8% |  -7.00ms |  0.2% → 0.1% |   9.0ms → 2.0ms |   9 → 2 | `0x8e960`                 | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
| -71.4% |  -5.00ms |  0.2% → 0.1% |   7.0ms → 2.0ms |   7 → 2 | `0x8eb04`                 | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
| -45.5% |  -5.00ms |  0.3% → 0.2% |  11.0ms → 6.0ms |  11 → 6 | `calloc`                  | `<unknown>`                                       |
| -50.0% |  -4.00ms |  0.2% → 0.1% |   8.0ms → 4.0ms |   8 → 4 | `0x8eaa4`                 | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
| -50.0% |  -4.00ms |  0.2% → 0.1% |   8.0ms → 4.0ms |   8 → 4 | `0x910a0`                 | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
| -66.7% |  -4.00ms |         0.1% |   6.0ms → 2.0ms |   6 → 2 | `log10f32`                | `<unknown>`                                       |
| -20.0% |  -4.00ms |  0.5% → 0.4% | 20.0ms → 16.0ms | 20 → 16 | `0x9e658`                 | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
| -60.0% |  -3.00ms |         0.1% |   5.0ms → 2.0ms |   5 → 2 | `0x8eb74`                 | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
| -50.0% |  -3.00ms |         0.1% |   6.0ms → 3.0ms |   6 → 3 | `0x8eb44`                 | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
| -50.0% |  -3.00ms |         0.1% |   6.0ms → 3.0ms |   6 → 3 | `0x9117c`                 | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
| -75.0% |  -3.00ms | 0.1% → <0.1% |   4.0ms → 1.0ms |   4 → 1 | `0x90ea4`                 | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |

#### Lines

Lines with the largest change in contribution to each function's self time.

##### `__json_value_module_MOD_parse_object` (`./json_value_module.F90:10889`)

|  Change |   Delta |             % |          Time | Samples | Location                                |
| ------: | ------: | ------------: | ------------: | ------: | --------------------------------------- |
| +100.0% | +4.00ms | 19.0% → 29.6% | 4.0ms → 8.0ms |   4 → 8 | `./json_value_module.F90:10969 → 10985` |
| +300.0% | +3.00ms |  4.8% → 14.8% | 1.0ms → 4.0ms |   1 → 4 | `./json_value_module.F90:10938 → 10954` |
| removed | -2.00ms |   9.5% → 0.0% |   2.0ms → 0ms |   2 → 0 | `./json_value_module.F90:10910`         |
| removed | -2.00ms |   9.5% → 0.0% |   2.0ms → 0ms |   2 → 0 | `./json_value_module.F90:10948`         |
| removed | -2.00ms |   9.5% → 0.0% |   2.0ms → 0ms |   2 → 0 | `./json_value_module.F90:10962`         |

##### `__json_string_utilities_MOD_unescape_string` (`./json_string_utilities.F90:483`)

|  Change |   Delta |            % |          Time | Samples | Location                          |
| ------: | ------: | -----------: | ------------: | ------: | --------------------------------- |
| +150.0% | +3.00ms | 9.5% → 19.2% | 2.0ms → 5.0ms |   2 → 5 | `./json_string_utilities.F90:483` |
|  -50.0% | -2.00ms | 19.0% → 7.7% | 4.0ms → 2.0ms |   4 → 2 | `./json_string_utilities.F90:514` |
|     new | +2.00ms |  0.0% → 7.7% |   0ms → 2.0ms |   0 → 2 | `./json_string_utilities.F90:611` |
|  +50.0% | +1.00ms | 9.5% → 11.5% | 2.0ms → 3.0ms |   2 → 3 | `./json_string_utilities.F90:506` |
| removed | -1.00ms |  4.8% → 0.0% |   1.0ms → 0ms |   1 → 0 | `./json_string_utilities.F90:512` |

##### `__json_value_module_MOD_parse_string` (`./json_value_module.F90:11080`)

|  Change |   Delta |             % |            Time | Samples | Location                                |
| ------: | ------: | ------------: | --------------: | ------: | --------------------------------------- |
|  -23.3% | -7.00ms | 19.4% → 14.6% | 30.0ms → 23.0ms | 30 → 23 | `./json_value_module.F90:11086 → 11114` |
| +125.0% | +5.00ms |   2.6% → 5.7% |   4.0ms → 9.0ms |   4 → 9 | `./json_value_module.F90:11075 → 11103` |
|  +19.0% | +4.00ms | 13.5% → 15.8% | 21.0ms → 25.0ms | 21 → 25 | `./json_value_module.F90:11091 → 11119` |
|  +19.0% | +4.00ms | 13.5% → 15.8% | 21.0ms → 25.0ms | 21 → 25 | `./json_value_module.F90:11098 → 11126` |
| removed | -2.00ms |   1.3% → 0.0% |     2.0ms → 0ms |   2 → 0 | `./json_value_module.F90:11052`         |

##### `__json_value_module_MOD_parse_value` (`./json_value_module.F90:10124`)

|  Change |   Delta |             % |          Time | Samples | Location                                |
| ------: | ------: | ------------: | ------------: | ------: | --------------------------------------- |
| +200.0% | +2.00ms |  4.0% → 10.7% | 1.0ms → 3.0ms |   1 → 3 | `./json_value_module.F90:10185 → 10192` |
|  +66.7% | +2.00ms | 12.0% → 17.9% | 3.0ms → 5.0ms |   3 → 5 | `./json_value_module.F90:10202 → 10209` |
|     new | +2.00ms |   0.0% → 7.1% |   0ms → 2.0ms |   0 → 2 | `./json_value_module.F90:10164`         |
| removed | -1.00ms |   4.0% → 0.0% |   1.0ms → 0ms |   1 → 0 | `./json_value_module.F90:10117`         |
| removed | -1.00ms |   4.0% → 0.0% |   1.0ms → 0ms |   1 → 0 | `./json_value_module.F90:10135`         |

##### `__json_value_module_MOD_parse_array` (`./json_value_module.F90:11003`)

|  Change |   Delta |             % |        Time | Samples | Location                        |
| ------: | ------: | ------------: | ----------: | ------: | ------------------------------- |
|     new | +2.00ms |  0.0% → 66.7% | 0ms → 2.0ms |   0 → 2 | `./json_value_module.F90:11003` |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `./json_value_module.F90:11039` |
|     new | +1.00ms |  0.0% → 33.3% | 0ms → 1.0ms |   0 → 1 | `./json_value_module.F90:11067` |

##### `__json_string_utilities_MOD_string_to_integer` (`./json_string_utilities.F90:116`)

| Change |   Delta |              % |          Time | Samples | Location                          |
| -----: | ------: | -------------: | ------------: | ------: | --------------------------------- |
|    new | +2.00ms |   0.0% → 50.0% |   0ms → 2.0ms |   0 → 2 | `./json_string_utilities.F90:128` |
| -50.0% | -1.00ms | 100.0% → 25.0% | 2.0ms → 1.0ms |   2 → 1 | `./json_string_utilities.F90:134` |
|    new | +1.00ms |   0.0% → 25.0% |   0ms → 1.0ms |   0 → 1 | `./json_string_utilities.F90:116` |

##### `__json_value_module_MOD_parse_number` (`./json_value_module.F90:11220`)

|  Change |   Delta |             % |          Time | Samples | Location                                |
| ------: | ------: | ------------: | ------------: | ------: | --------------------------------------- |
|  +40.0% | +2.00ms | 50.0% → 63.6% | 5.0ms → 7.0ms |   5 → 7 | `./json_value_module.F90:11292 → 11320` |
|  -50.0% | -1.00ms |  20.0% → 9.1% | 2.0ms → 1.0ms |   2 → 1 | `./json_value_module.F90:11252 → 11280` |
| removed | -1.00ms |  10.0% → 0.0% |   1.0ms → 0ms |   1 → 0 | `./json_value_module.F90:11266`         |
|     new | +1.00ms |   0.0% → 9.1% |   0ms → 1.0ms |   0 → 1 | `./json_value_module.F90:11287`         |

##### `__json_value_module_MOD_to_string` (`./json_value_module.F90:10762`)

| Change |   Delta |              % |          Time | Samples | Location                                |
| -----: | ------: | -------------: | ------------: | ------: | --------------------------------------- |
| -50.0% | -1.00ms | 100.0% → 33.3% | 2.0ms → 1.0ms |   2 → 1 | `./json_value_module.F90:10800 → 10807` |
|    new | +1.00ms |   0.0% → 33.3% |   0ms → 1.0ms |   0 → 1 | `./json_value_module.F90:10762`         |
|    new | +1.00ms |   0.0% → 33.3% |   0ms → 1.0ms |   0 → 1 | `./json_value_module.F90:10783`         |

##### `__json_value_module_MOD_pop_char` (`./json_value_module.F90:11346`)

| Change |   Delta |      % |          Time | Samples | Location                                |
| -----: | ------: | -----: | ------------: | ------: | --------------------------------------- |
| +25.0% | +1.00ms | 100.0% | 4.0ms → 5.0ms |   4 → 5 | `./json_value_module.F90:11341 → 11369` |

##### `__json_value_module_MOD_push_char` (`./json_value_module.F90:11510`)

| Change |   Delta |             % |        Time | Samples | Location                        |
| -----: | ------: | ------------: | ----------: | ------: | ------------------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `./json_value_module.F90:11526` |

##### `__json_value_module_MOD_json_value_get_child_by_index` (`./json_value_module.F90:5446`)

| Change |   Delta |             % |        Time | Samples | Location                       |
| -----: | ------: | ------------: | ----------: | ------: | ------------------------------ |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `./json_value_module.F90:5498` |

##### `__json_value_module_MOD_pop_char.part.0` (`./json_value_module.F90:11346`)

| Change |    Delta |             % |            Time |       Samples | Location                                |
| -----: | -------: | ------------: | --------------: | ------------: | --------------------------------------- |
|  -4.4% | -66.00ms | 72.3% → 74.6% |   1.51s → 1.45s | 1,511 → 1,445 | `./json_value_module.F90:11447 → 11475` |
| -28.9% | -26.00ms |   4.3% → 3.3% | 90.0ms → 64.0ms |       90 → 64 | `./json_value_module.F90:11395 → 11423` |
| -30.0% | -21.00ms |   3.3% → 2.5% | 70.0ms → 49.0ms |       70 → 49 | `./json_value_module.F90:11318 → 11346` |
| -16.8% | -16.00ms |   4.5% → 4.1% | 95.0ms → 79.0ms |       95 → 79 | `./json_value_module.F90:11469 → 11497` |
| -34.4% | -11.00ms |   1.5% → 1.1% | 32.0ms → 21.0ms |       32 → 21 | `./json_value_module.F90:11441 → 11469` |

##### `__json_value_module_MOD_destroy_json_data` (`./json_value_module.F90:1394`)

|  Change |   Delta |             % |          Time | Samples | Location                              |
| ------: | ------: | ------------: | ------------: | ------: | ------------------------------------- |
|  -62.5% | -5.00ms | 47.1% → 33.3% | 8.0ms → 3.0ms |   8 → 3 | `./json_value_module.F90:1396 → 1403` |
| removed | -2.00ms |  11.8% → 0.0% |   2.0ms → 0ms |   2 → 0 | `./json_value_module.F90:1395`        |
| removed | -2.00ms |  11.8% → 0.0% |   2.0ms → 0ms |   2 → 0 | `./json_value_module.F90:1398`        |
| +100.0% | +1.00ms |  5.9% → 22.2% | 1.0ms → 2.0ms |   1 → 2 | `./json_value_module.F90:1393 → 1400` |
|  -50.0% | -1.00ms | 11.8% → 11.1% | 2.0ms → 1.0ms |   2 → 1 | `./json_value_module.F90:1397 → 1404` |

##### `__json_value_module_MOD_json_value_destroy` (`./json_value_module.F90:2244`)

|  Change |   Delta |             % |          Time | Samples | Location                              |
| ------: | ------: | ------------: | ------------: | ------: | ------------------------------------- |
|  -60.0% | -3.00ms | 33.3% → 20.0% | 5.0ms → 2.0ms |   5 → 2 | `./json_value_module.F90:2296 → 2303` |
| +100.0% | +1.00ms |  6.7% → 20.0% | 1.0ms → 2.0ms |   1 → 2 | `./json_value_module.F90:2251 → 2258` |
| removed | -1.00ms |   6.7% → 0.0% |   1.0ms → 0ms |   1 → 0 | `./json_value_module.F90:2259`        |
| removed | -1.00ms |   6.7% → 0.0% |   1.0ms → 0ms |   1 → 0 | `./json_value_module.F90:2263`        |
| removed | -1.00ms |   6.7% → 0.0% |   1.0ms → 0ms |   1 → 0 | `./json_value_module.F90:2270`        |

##### `__json_value_module_MOD_json_value_create` (`./json_value_module.F90:2211`)

|  Change |   Delta |            % |        Time | Samples | Location                       |
| ------: | ------: | -----------: | ----------: | ------: | ------------------------------ |
| removed | -2.00ms | 66.7% → 0.0% | 2.0ms → 0ms |   2 → 0 | `./json_value_module.F90:2211` |

##### `__json_value_module_MOD_to_logical` (`./json_value_module.F90:10666`)

|  Change |   Delta |            % |        Time | Samples | Location                        |
| ------: | ------: | -----------: | ----------: | ------: | ------------------------------- |
| removed | -1.00ms | 50.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `./json_value_module.F90:10659` |
| removed | -1.00ms | 50.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `./json_value_module.F90:10672` |

##### `__json_value_module_MOD_json_value_add_member` (`./json_value_module.F90:3401`)

|  Change |   Delta |             % |          Time | Samples | Location                              |
| ------: | ------: | ------------: | ------------: | ------: | ------------------------------------- |
| removed | -2.00ms |  25.0% → 0.0% |   2.0ms → 0ms |   2 → 0 | `./json_value_module.F90:3443`        |
|     new | +2.00ms |  0.0% → 28.6% |   0ms → 2.0ms |   0 → 2 | `./json_value_module.F90:3417`        |
|  -50.0% | -1.00ms | 25.0% → 14.3% | 2.0ms → 1.0ms |   2 → 1 | `./json_value_module.F90:3423 → 3430` |
| removed | -1.00ms |  12.5% → 0.0% |   1.0ms → 0ms |   1 → 0 | `./json_value_module.F90:3429`        |
|     new | +1.00ms |  0.0% → 14.3% |   0ms → 1.0ms |   0 → 1 | `./json_value_module.F90:3428`        |

##### `__json_value_module_MOD_json_get_string_by_path` (`./json_value_module.F90:9182`)

|  Change |   Delta |             % |        Time | Samples | Location                       |
| ------: | ------: | ------------: | ----------: | ------: | ------------------------------ |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `./json_value_module.F90:9198` |

##### `__json_value_module_MOD_json_get_by_path` (`./json_value_module.F90:6502`)

|  Change |   Delta |             % |        Time | Samples | Location                       |
| ------: | ------: | ------------: | ----------: | ------: | ------------------------------ |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `./json_value_module.F90:6495` |

##### `__json_value_module_MOD_json_get_string_by_path` (`./json_get_scalar_by_path.inc:9189`)

|  Change |   Delta |             % |        Time | Samples | Location                           |
| ------: | ------: | ------------: | ----------: | ------: | ---------------------------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `./json_get_scalar_by_path.inc:31` |

##### `__json_value_module_MOD_json_info` (`./json_value_module.F90:1416`)

|  Change |   Delta |            % |        Time | Samples | Location                       |
| ------: | ------: | -----------: | ----------: | ------: | ------------------------------ |
| removed | -1.00ms | 33.3% → 0.0% | 1.0ms → 0ms |   1 → 0 | `./json_value_module.F90:1423` |

##### `__json_value_module_MOD_to_integer` (`./json_value_module.F90:10690`)

|  Change |   Delta |             % |        Time | Samples | Location                        |
| ------: | ------: | ------------: | ----------: | ------: | ------------------------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `./json_value_module.F90:10690` |

##### `__json_value_module_MOD_name_strings_equal` (`./json_value_module.F90:1244`)

|  Change |   Delta |             % |        Time | Samples | Location                       |
| ------: | ------: | ------------: | ----------: | ------: | ------------------------------ |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `./json_value_module.F90:1268` |

#### Callers

Callers with the largest change in contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `_gfortran_string_scan` (`<unknown>`)

| Change |    Delta |             % |              Time |   Samples | Caller                                 | Location                                |
| -----: | -------: | ------------: | ----------------: | --------: | -------------------------------------- | --------------------------------------- |
| +17.7% | +22.00ms | 44.1% → 49.0% | 124.0ms → 146.0ms | 124 → 146 | `__json_value_module_MOD_parse_string` | `./json_value_module.F90:11052 → 11080` |
|  -2.3% |  -3.00ms | 46.3% → 42.6% | 130.0ms → 127.0ms | 130 → 127 | `__json_value_module_MOD_parse_object` | `./json_value_module.F90:10882 → 10889` |
|  -4.5% |  -1.00ms |   7.8% → 7.0% |   22.0ms → 21.0ms |   22 → 21 | `__json_value_module_MOD_parse_value`  | `./json_value_module.F90:10117 → 10124` |
| -20.0% |  -1.00ms |   1.8% → 1.3% |     5.0ms → 4.0ms |     5 → 4 | `__json_value_module_MOD_parse_array`  | `./json_value_module.F90:10987 → 11003` |

##### `_gfortran_string_len_trim` (`<unknown>`)

|  Change |    Delta |             % |            Time | Samples | Caller                                     | Location                                          |
| ------: | -------: | ------------: | --------------: | ------: | ------------------------------------------ | ------------------------------------------------- |
|  +14.1% | +11.00ms | 60.5% → 61.8% | 78.0ms → 89.0ms | 78 → 89 | `__json_value_module_MOD_parse_object`     | `./json_value_module.F90:10882 → 10889`           |
|  +66.7% |  +4.00ms |   4.7% → 6.9% |  6.0ms → 10.0ms |  6 → 10 | `0x10b283`                                 | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| +400.0% |  +4.00ms |   0.8% → 3.5% |   1.0ms → 5.0ms |   1 → 5 | `__json_value_module_MOD_parse_array`      | `./json_value_module.F90:10987 → 11003`           |
|   -6.7% |  -2.00ms | 23.3% → 19.4% | 30.0ms → 28.0ms | 30 → 28 | `__json_value_module_MOD_parse_value`      | `./json_value_module.F90:10117 → 10124`           |
| removed |  -1.00ms |   0.8% → 0.0% |     1.0ms → 0ms |   1 → 0 | `__json_value_module_MOD_json_get_by_path` | `./json_value_module.F90:6495`                    |

##### `__libc_malloc` (`<unknown>`)

|  Change |   Delta |             % |            Time | Samples | Caller                                      | Location                                |
| ------: | ------: | ------------: | --------------: | ------: | ------------------------------------------- | --------------------------------------- |
|  +28.6% | +4.00ms | 10.1% → 11.9% | 14.0ms → 18.0ms | 14 → 18 | `__json_value_module_MOD_json_value_create` | `./json_value_module.F90:2204 → 2211`   |
| +200.0% | +4.00ms |   1.4% → 4.0% |   2.0ms → 6.0ms |   2 → 6 | `__json_value_module_MOD_parse_number`      | `./json_value_module.F90:11192 → 11220` |
|  -66.7% | -4.00ms |   4.3% → 1.3% |   6.0ms → 2.0ms |   6 → 2 | `__json_value_module_MOD_to_string`         | `./json_value_module.F90:10755 → 10762` |
|     new | +4.00ms |   0.0% → 2.6% |     0ms → 4.0ms |   0 → 4 | `__json_value_module_MOD_to_logical`        | `./json_value_module.F90:10666`         |
|   -6.7% | -3.00ms | 32.6% → 27.8% | 45.0ms → 42.0ms | 45 → 42 | `__json_value_module_MOD_parse_object`      | `./json_value_module.F90:10882 → 10889` |

##### `0x90dc0` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |    Delta |              % |            Time | Samples | Caller          | Location                               |
| ------: | -------: | -------------: | --------------: | ------: | --------------- | -------------------------------------- |
| +109.1% | +12.00ms | 84.6% → 100.0% | 11.0ms → 23.0ms | 11 → 23 | `__libc_malloc` | `<unknown>`                            |
| removed |  -2.00ms |   15.4% → 0.0% |     2.0ms → 0ms |   2 → 0 | `0x91b93`       | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x91234` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |   Delta |      % |           Time | Samples | Caller          | Location    |
| ------: | ------: | -----: | -------------: | ------: | --------------- | ----------- |
| +100.0% | +8.00ms | 100.0% | 8.0ms → 16.0ms |  8 → 16 | `__libc_malloc` | `<unknown>` |

##### `_gfortran_concat_string` (`<unknown>`)

|  Change |   Delta |             % |           Time | Samples | Caller                                             | Location                              |
| ------: | ------: | ------------: | -------------: | ------: | -------------------------------------------------- | ------------------------------------- |
| +900.0% | +9.00ms | 33.3% → 90.9% | 1.0ms → 10.0ms |  1 → 10 | `__json_value_module_MOD_string_to_int`            | `./json_value_module.F90:8074 → 8081` |
| removed | -2.00ms |  66.7% → 0.0% |    2.0ms → 0ms |   2 → 0 | `__json_string_utilities_MOD_string_to_integer`    | `./json_string_utilities.F90:116`     |
|     new | +1.00ms |   0.0% → 9.1% |    0ms → 1.0ms |   0 → 1 | `__json_value_module_MOD_json_get_by_path_default` | `./json_value_module.F90:6794`        |

##### `__json_value_module_MOD_parse_object` (`./json_value_module.F90:10889`)

| Change |   Delta |      % |            Time | Samples | Caller                                 | Location                                |
| -----: | ------: | -----: | --------------: | ------: | -------------------------------------- | --------------------------------------- |
| +28.6% | +6.00ms | 100.0% | 21.0ms → 27.0ms | 21 → 27 | `__json_value_module_MOD_parse_object` | `./json_value_module.F90:10882 → 10889` |

##### `__json_string_utilities_MOD_unescape_string` (`./json_string_utilities.F90:483`)

| Change |   Delta |      % |            Time | Samples | Caller                                 | Location                                |
| -----: | ------: | -----: | --------------: | ------: | -------------------------------------- | --------------------------------------- |
| +23.8% | +5.00ms | 100.0% | 21.0ms → 26.0ms | 21 → 26 | `__json_value_module_MOD_parse_string` | `./json_value_module.F90:11052 → 11080` |

##### `0x9d100` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |   Delta |             % |            Time | Samples | Caller                                 | Location                                |
| ------: | ------: | ------------: | --------------: | ------: | -------------------------------------- | --------------------------------------- |
| +100.0% | +4.00ms | 21.1% → 33.3% |   4.0ms → 8.0ms |   4 → 8 | `__json_value_module_MOD_parse_value`  | `./json_value_module.F90:10117 → 10124` |
|  +23.1% | +3.00ms | 68.4% → 66.7% | 13.0ms → 16.0ms | 13 → 16 | `__json_value_module_MOD_parse_object` | `./json_value_module.F90:10882 → 10889` |
| removed | -2.00ms |  10.5% → 0.0% |     2.0ms → 0ms |   2 → 0 | `__json_value_module_MOD_parse_string` | `./json_value_module.F90:11052`         |

##### `0x90e74` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |   Delta |      % |          Time | Samples | Caller          | Location    |
| ------: | ------: | -----: | ------------: | ------: | --------------- | ----------- |
| +166.7% | +5.00ms | 100.0% | 3.0ms → 8.0ms |   3 → 8 | `__libc_malloc` | `<unknown>` |

##### `0x9d11c` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change |   Delta |            % |        Time | Samples | Caller                                  | Location                                          |
| -----: | ------: | -----------: | ----------: | ------: | --------------------------------------- | ------------------------------------------------- |
|    new | +2.00ms | 0.0% → 40.0% | 0ms → 2.0ms |   0 → 2 | `__json_value_module_MOD_parse_object`  | `./json_value_module.F90:10889`                   |
|    new | +2.00ms | 0.0% → 40.0% | 0ms → 2.0ms |   0 → 2 | `__json_value_module_MOD_string_to_int` | `./json_value_module.F90:8081`                    |
|    new | +1.00ms | 0.0% → 20.0% | 0ms → 1.0ms |   0 → 1 | `0xfa6b3`                               | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `0x8fad8` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |   Delta |             % |          Time | Samples | Caller    | Location                               |
| ------: | ------: | ------------: | ------------: | ------: | --------- | -------------------------------------- |
| +300.0% | +3.00ms | 50.0% → 66.7% | 1.0ms → 4.0ms |   1 → 4 | `cfree`   | `<unknown>`                            |
| +100.0% | +1.00ms | 50.0% → 33.3% | 1.0ms → 2.0ms |   1 → 2 | `0x91c5f` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0xf8da4` (`/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|  Change |   Delta |             % |          Time | Samples | Caller    | Location                                          |
| ------: | ------: | ------------: | ------------: | ------: | --------- | ------------------------------------------------- |
| +100.0% | +2.00ms | 66.7% → 57.1% | 2.0ms → 4.0ms |   2 → 4 | `0xf8df3` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| +100.0% | +1.00ms | 33.3% → 28.6% | 1.0ms → 2.0ms |   1 → 2 | `0xfa887` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|     new | +1.00ms |  0.0% → 14.3% |   0ms → 1.0ms |   0 → 1 | `0xfa8db` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `0x1093f0` (`/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

| Change |   Delta |            % |        Time | Samples | Caller                                          | Location                          |
| -----: | ------: | -----------: | ----------: | ------: | ----------------------------------------------- | --------------------------------- |
|    new | +3.00ms | 0.0% → 75.0% | 0ms → 3.0ms |   0 → 3 | `__json_string_utilities_MOD_string_to_integer` | `./json_string_utilities.F90:116` |
|    new | +1.00ms | 0.0% → 25.0% | 0ms → 1.0ms |   0 → 1 | `__json_value_module_MOD_pop_char.part.0`       | `./json_value_module.F90:11346`   |

##### `0x9d168` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change |   Delta |            % |        Time | Samples | Caller                                          | Location                                          |
| -----: | ------: | -----------: | ----------: | ------: | ----------------------------------------------- | ------------------------------------------------- |
|    new | +2.00ms | 0.0% → 50.0% | 0ms → 2.0ms |   0 → 2 | `0x10890b`                                      | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|    new | +1.00ms | 0.0% → 25.0% | 0ms → 1.0ms |   0 → 1 | `__json_string_utilities_MOD_string_to_integer` | `./json_string_utilities.F90:116`                 |
|    new | +1.00ms | 0.0% → 25.0% | 0ms → 1.0ms |   0 → 1 | `__json_value_module_MOD_string_to_int`         | `./json_value_module.F90:8081`                    |

##### `__json_value_module_MOD_parse_string` (`./json_value_module.F90:11080`)

| Change |    Delta |             % |            Time | Samples | Caller                                 | Location                                |
| -----: | -------: | ------------: | --------------: | ------: | -------------------------------------- | --------------------------------------- |
| +21.8% | +17.00ms | 50.3% → 60.1% | 78.0ms → 95.0ms | 78 → 95 | `__json_value_module_MOD_parse_object` | `./json_value_module.F90:10882 → 10889` |
| -18.2% | -14.00ms | 49.7% → 39.9% | 77.0ms → 63.0ms | 77 → 63 | `__json_value_module_MOD_parse_value`  | `./json_value_module.F90:10117 → 10124` |

##### `__json_value_module_MOD_parse_value` (`./json_value_module.F90:10124`)

| Change |   Delta |             % |            Time | Samples | Caller                                 | Location                                |
| -----: | ------: | ------------: | --------------: | ------: | -------------------------------------- | --------------------------------------- |
| +17.4% | +4.00ms | 92.0% → 96.4% | 23.0ms → 27.0ms | 23 → 27 | `__json_value_module_MOD_parse_object` | `./json_value_module.F90:10882 → 10889` |
| -50.0% | -1.00ms |   8.0% → 3.6% |   2.0ms → 1.0ms |   2 → 1 | `__json_value_module_MOD_parse_array`  | `./json_value_module.F90:10987 → 11003` |

##### `0x9d150` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |   Delta |            % |          Time | Samples | Caller                                 | Location                                          |
| ------: | ------: | -----------: | ------------: | ------: | -------------------------------------- | ------------------------------------------------- |
| +100.0% | +2.00ms |        66.7% | 2.0ms → 4.0ms |   2 → 4 | `__json_value_module_MOD_parse_object` | `./json_value_module.F90:10882 → 10889`           |
| removed | -1.00ms | 33.3% → 0.0% |   1.0ms → 0ms |   1 → 0 | `__json_value_module_MOD_parse_value`  | `./json_value_module.F90:10117`                   |
|     new | +1.00ms | 0.0% → 16.7% |   0ms → 1.0ms |   0 → 1 | `0xfa6b3`                              | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|     new | +1.00ms | 0.0% → 16.7% |   0ms → 1.0ms |   0 → 1 | `0x10890b`                             | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `0x8fbc8` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |   Delta |      % |          Time | Samples | Caller  | Location    |
| ------: | ------: | -----: | ------------: | ------: | ------- | ----------- |
| +150.0% | +3.00ms | 100.0% | 2.0ms → 5.0ms |   2 → 5 | `cfree` | `<unknown>` |

##### `0xf97c8` (`/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|  Change |   Delta |      % |          Time | Samples | Caller    | Location                                          |
| ------: | ------: | -----: | ------------: | ------: | --------- | ------------------------------------------------- |
| +300.0% | +3.00ms | 100.0% | 1.0ms → 4.0ms |   1 → 4 | `0xfa7fb` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `__json_value_module_MOD_parse_array` (`./json_value_module.F90:11003`)

|  Change |   Delta |      % |          Time | Samples | Caller                                 | Location                                |
| ------: | ------: | -----: | ------------: | ------: | -------------------------------------- | --------------------------------------- |
| +200.0% | +2.00ms | 100.0% | 1.0ms → 3.0ms |   1 → 3 | `__json_value_module_MOD_parse_object` | `./json_value_module.F90:10882 → 10889` |

##### `__json_string_utilities_MOD_string_to_integer` (`./json_string_utilities.F90:116`)

|  Change |   Delta |      % |          Time | Samples | Caller                                  | Location                              |
| ------: | ------: | -----: | ------------: | ------: | --------------------------------------- | ------------------------------------- |
| +100.0% | +2.00ms | 100.0% | 2.0ms → 4.0ms |   2 → 4 | `__json_value_module_MOD_string_to_int` | `./json_value_module.F90:8074 → 8081` |

##### `__json_value_module_MOD_parse_number` (`./json_value_module.F90:11220`)

| Change |   Delta |              % |           Time | Samples | Caller                                 | Location                                |
| -----: | ------: | -------------: | -------------: | ------: | -------------------------------------- | --------------------------------------- |
|    new | +2.00ms |   0.0% → 18.2% |    0ms → 2.0ms |   0 → 2 | `__json_value_module_MOD_parse_array`  | `./json_value_module.F90:10987 → 11003` |
| -10.0% | -1.00ms | 100.0% → 81.8% | 10.0ms → 9.0ms |  10 → 9 | `__json_value_module_MOD_parse_object` | `./json_value_module.F90:10882 → 10889` |

##### `__json_value_module_MOD_to_string` (`./json_value_module.F90:10762`)

| Change |   Delta |      % |          Time | Samples | Caller                                | Location                                |
| -----: | ------: | -----: | ------------: | ------: | ------------------------------------- | --------------------------------------- |
| +50.0% | +1.00ms | 100.0% | 2.0ms → 3.0ms |   2 → 3 | `__json_value_module_MOD_parse_value` | `./json_value_module.F90:10117 → 10124` |

##### `__json_value_module_MOD_pop_char` (`./json_value_module.F90:11346`)

|  Change |   Delta |             % |          Time | Samples | Caller                                 | Location                                |
| ------: | ------: | ------------: | ------------: | ------: | -------------------------------------- | --------------------------------------- |
| +300.0% | +3.00ms | 25.0% → 80.0% | 1.0ms → 4.0ms |   1 → 4 | `__json_value_module_MOD_parse_object` | `./json_value_module.F90:10882 → 10889` |
|  -66.7% | -2.00ms | 75.0% → 20.0% | 3.0ms → 1.0ms |   3 → 1 | `__json_value_module_MOD_parse_value`  | `./json_value_module.F90:10117 → 10124` |

##### `__json_value_module_MOD_push_char` (`./json_value_module.F90:11510`)

| Change |   Delta |             % |        Time | Samples | Caller                                | Location                        |
| -----: | ------: | ------------: | ----------: | ------: | ------------------------------------- | ------------------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `__json_value_module_MOD_parse_array` | `./json_value_module.F90:11003` |

##### `__json_value_module_MOD_json_value_get_child_by_index` (`./json_value_module.F90:5446`)

| Change |   Delta |             % |        Time | Samples | Caller                                                  | Location                       |
| -----: | ------: | ------------: | ----------: | ------: | ------------------------------------------------------- | ------------------------------ |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `__json_value_module_MOD_json_value_get_child_by_index` | `./json_value_module.F90:5446` |

##### `0x90e68` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |   Delta |      % |          Time | Samples | Caller          | Location    |
| ------: | ------: | -----: | ------------: | ------: | --------------- | ----------- |
| +150.0% | +3.00ms | 100.0% | 2.0ms → 5.0ms |   2 → 5 | `__libc_malloc` | `<unknown>` |

##### `__pthread_mutex_trylock` (`<unknown>`)

|  Change |   Delta |      % |          Time | Samples | Caller     | Location                                          |
| ------: | ------: | -----: | ------------: | ------: | ---------- | ------------------------------------------------- |
| +150.0% | +3.00ms | 100.0% | 2.0ms → 5.0ms |   2 → 5 | `0x10aa5b` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `0xf9378` (`/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|  Change |   Delta |      % |          Time | Samples | Caller    | Location                                          |
| ------: | ------: | -----: | ------------: | ------: | --------- | ------------------------------------------------- |
| +300.0% | +3.00ms | 100.0% | 1.0ms → 4.0ms |   1 → 4 | `0xf97ab` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `0x8fccc` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change |   Delta |             % |        Time | Samples | Caller    | Location                               |
| -----: | ------: | ------------: | ----------: | ------: | --------- | -------------------------------------- |
|    new | +3.00ms | 0.0% → 100.0% | 0ms → 3.0ms |   0 → 3 | `0x91c5f` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `__json_value_module_MOD_pop_char.part.0` (`./json_value_module.F90:11346`)

| Change |    Delta |             % |              Time |       Samples | Caller                                    | Location                                |
| -----: | -------: | ------------: | ----------------: | ------------: | ----------------------------------------- | --------------------------------------- |
|  -6.0% | -74.00ms | 58.6% → 59.4% |     1.23s → 1.15s | 1,225 → 1,151 | `__json_value_module_MOD_parse_string`    | `./json_value_module.F90:11052 → 11080` |
|  -6.5% | -38.00ms | 27.8% → 28.1% | 582.0ms → 544.0ms |     582 → 544 | `__json_value_module_MOD_parse_object`    | `./json_value_module.F90:10882 → 10889` |
|  -7.5% | -12.00ms |   7.7% → 7.6% | 160.0ms → 148.0ms |     160 → 148 | `__json_value_module_MOD_parse_value`     | `./json_value_module.F90:10117 → 10124` |
| -17.5% | -11.00ms |   3.0% → 2.7% |   63.0ms → 52.0ms |       63 → 52 | `__json_value_module_MOD_parse_number`    | `./json_value_module.F90:11192 → 11220` |
| -20.8% | -10.00ms |   2.3% → 2.0% |   48.0ms → 38.0ms |       48 → 38 | `__json_value_module_MOD_parse_for_chars` | `./json_value_module.F90:11145 → 11173` |

##### `__libc_realloc` (`<unknown>`)

|  Change |    Delta |             % |            Time | Samples | Caller                                        | Location                                |
| ------: | -------: | ------------: | --------------: | ------: | --------------------------------------------- | --------------------------------------- |
|  -68.2% | -15.00ms | 39.3% → 23.3% |  22.0ms → 7.0ms |  22 → 7 | `__json_value_module_MOD_parse_string`        | `./json_value_module.F90:11052 → 11080` |
|  -46.2% |  -6.00ms | 23.2% → 23.3% |  13.0ms → 7.0ms |  13 → 7 | `__json_value_module_MOD_parse_value`         | `./json_value_module.F90:10117 → 10124` |
|  -20.0% |  -4.00ms | 35.7% → 53.3% | 20.0ms → 16.0ms | 20 → 16 | `__json_value_module_MOD_parse_object`        | `./json_value_module.F90:10882 → 10889` |
| removed |  -1.00ms |   1.8% → 0.0% |     1.0ms → 0ms |   1 → 0 | `__json_string_utilities_MOD_unescape_string` | `./json_string_utilities.F90:483`       |

##### `__read` (`<unknown>`)

| Change |    Delta |      % |            Time | Samples | Caller     | Location                                          |
| -----: | -------: | -----: | --------------: | ------: | ---------- | ------------------------------------------------- |
| -31.8% | -14.00ms | 100.0% | 44.0ms → 30.0ms | 44 → 30 | `0x10bd0b` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `_init` (`<unknown>`)

|  Change |   Delta |             % |            Time | Samples | Caller                                       | Location                                |
| ------: | ------: | ------------: | --------------: | ------: | -------------------------------------------- | --------------------------------------- |
|  -83.3% | -5.00ms |   6.8% → 1.3% |   6.0ms → 1.0ms |   6 → 1 | `__json_value_module_MOD_string_to_int`      | `./json_value_module.F90:8074 → 8081`   |
|  -22.2% | -4.00ms | 20.5% → 18.4% | 18.0ms → 14.0ms | 18 → 14 | `__json_value_module_MOD_parse_value`        | `./json_value_module.F90:10117 → 10124` |
|  -33.3% | -1.00ms |   3.4% → 2.6% |   3.0ms → 2.0ms |   3 → 2 | `__json_value_module_MOD_json_value_destroy` | `./json_value_module.F90:2237 → 2244`   |
| removed | -1.00ms |   1.1% → 0.0% |     1.0ms → 0ms |   1 → 0 | `__json_value_module_MOD_parse_number`       | `./json_value_module.F90:11192`         |
|  -50.0% | -1.00ms |   2.3% → 1.3% |   2.0ms → 1.0ms |   2 → 1 | `__json_value_module_MOD_parse_string`       | `./json_value_module.F90:11052 → 11080` |

##### `0x8ea9c` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change |    Delta |      % |           Time | Samples | Caller    | Location                               |
| -----: | -------: | -----: | -------------: | ------: | --------- | -------------------------------------- |
| -66.7% | -10.00ms | 100.0% | 15.0ms → 5.0ms |  15 → 5 | `0x9102b` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x9123c` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change |    Delta |      % |            Time | Samples | Caller          | Location    |
| -----: | -------: | -----: | --------------: | ------: | --------------- | ----------- |
| -43.5% | -10.00ms | 100.0% | 23.0ms → 13.0ms | 23 → 13 | `__libc_malloc` | `<unknown>` |

##### `__json_value_module_MOD_destroy_json_data` (`./json_value_module.F90:1394`)

|  Change |   Delta |             % |           Time | Samples | Caller                                       | Location                                |
| ------: | ------: | ------------: | -------------: | ------: | -------------------------------------------- | --------------------------------------- |
|  -36.4% | -4.00ms | 64.7% → 77.8% | 11.0ms → 7.0ms |  11 → 7 | `__json_value_module_MOD_json_value_destroy` | `./json_value_module.F90:2237 → 2244`   |
|  -66.7% | -2.00ms | 17.6% → 11.1% |  3.0ms → 1.0ms |   3 → 1 | `__json_value_module_MOD_to_logical`         | `./json_value_module.F90:10659 → 10666` |
| removed | -2.00ms |  11.8% → 0.0% |    2.0ms → 0ms |   2 → 0 | `__json_value_module_MOD_to_string`          | `./json_value_module.F90:10755`         |
| removed | -1.00ms |   5.9% → 0.0% |    1.0ms → 0ms |   1 → 0 | `__json_value_module_MOD_to_null`            | `./json_value_module.F90:10814`         |
|     new | +1.00ms |  0.0% → 11.1% |    0ms → 1.0ms |   0 → 1 | `__json_value_module_MOD_to_array`           | `./json_value_module.F90:10867`         |

##### `_gfortran_st_write_done` (`<unknown>`)

|  Change |   Delta |             % |        Time | Samples | Caller                                             | Location                       |
| ------: | ------: | ------------: | ----------: | ------: | -------------------------------------------------- | ------------------------------ |
| removed | -8.00ms |  88.9% → 0.0% | 8.0ms → 0ms |   8 → 0 | `__json_value_module_MOD_string_to_int`            | `./json_value_module.F90:8074` |
| removed | -1.00ms |  11.1% → 0.0% | 1.0ms → 0ms |   1 → 0 | `main`                                             | `/out/profile.f90:6`           |
|     new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `__json_value_module_MOD_json_get_by_path_default` | `./json_value_module.F90:6794` |

##### `0x10c300` (`/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

| Change |   Delta |      % |            Time | Samples | Caller     | Location                                          |
| -----: | ------: | -----: | --------------: | ------: | ---------- | ------------------------------------------------- |
| -30.8% | -8.00ms | 100.0% | 26.0ms → 18.0ms | 26 → 18 | `0x10a47b` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `__open` (`<unknown>`)

| Change |   Delta |      % |            Time | Samples | Caller     | Location                                          |
| -----: | ------: | -----: | --------------: | ------: | ---------- | ------------------------------------------------- |
| -41.2% | -7.00ms | 100.0% | 17.0ms → 10.0ms | 17 → 10 | `0x10c997` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `0x1376f4` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change |   Delta |             % |          Time | Samples | Caller    | Location                               |
| -----: | ------: | ------------: | ------------: | ------: | --------- | -------------------------------------- |
| -87.5% | -7.00ms | 88.9% → 50.0% | 8.0ms → 1.0ms |   8 → 1 | `0x9102b` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x8e960` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |   Delta |             % |          Time | Samples | Caller    | Location                               |
| ------: | ------: | ------------: | ------------: | ------: | --------- | -------------------------------------- |
| removed | -6.00ms |  66.7% → 0.0% |   6.0ms → 0ms |   6 → 0 | `0x9155f` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|  -66.7% | -2.00ms | 33.3% → 50.0% | 3.0ms → 1.0ms |   3 → 1 | `0x8eb7f` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|     new | +1.00ms |  0.0% → 50.0% |   0ms → 1.0ms |   0 → 1 | `0x900bf` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `__json_value_module_MOD_json_value_destroy` (`./json_value_module.F90:2244`)

| Change |   Delta |      % |            Time | Samples | Caller                                       | Location                              |
| -----: | ------: | -----: | --------------: | ------: | -------------------------------------------- | ------------------------------------- |
| -33.3% | -5.00ms | 100.0% | 15.0ms → 10.0ms | 15 → 10 | `__json_value_module_MOD_json_value_destroy` | `./json_value_module.F90:2237 → 2244` |

##### `0x8eb04` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change |   Delta |      % |          Time | Samples | Caller    | Location                               |
| -----: | ------: | -----: | ------------: | ------: | --------- | -------------------------------------- |
| -71.4% | -5.00ms | 100.0% | 7.0ms → 2.0ms |   7 → 2 | `0x9102b` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `calloc` (`<unknown>`)

| Change |   Delta |      % |           Time | Samples | Caller    | Location                                          |
| -----: | ------: | -----: | -------------: | ------: | --------- | ------------------------------------------------- |
| -45.5% | -5.00ms | 100.0% | 11.0ms → 6.0ms |  11 → 6 | `0x1c24b` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `0x8eaa4` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change |   Delta |      % |          Time | Samples | Caller    | Location                               |
| -----: | ------: | -----: | ------------: | ------: | --------- | -------------------------------------- |
| -50.0% | -4.00ms | 100.0% | 8.0ms → 4.0ms |   8 → 4 | `0x9102b` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x910a0` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change |   Delta |      % |          Time | Samples | Caller          | Location    |
| -----: | ------: | -----: | ------------: | ------: | --------------- | ----------- |
| -50.0% | -4.00ms | 100.0% | 8.0ms → 4.0ms |   8 → 4 | `__libc_malloc` | `<unknown>` |

##### `log10f32` (`<unknown>`)

| Change |   Delta |      % |          Time | Samples | Caller                                  | Location                              |
| -----: | ------: | -----: | ------------: | ------: | --------------------------------------- | ------------------------------------- |
| -66.7% | -4.00ms | 100.0% | 6.0ms → 2.0ms |   6 → 2 | `__json_value_module_MOD_string_to_int` | `./json_value_module.F90:8074 → 8081` |

##### `0x9e658` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change |   Delta |      % |            Time | Samples | Caller     | Location                                          |
| -----: | ------: | -----: | --------------: | ------: | ---------- | ------------------------------------------------- |
| -20.0% | -4.00ms | 100.0% | 20.0ms → 16.0ms | 20 → 16 | `0x109623` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `0x8eb74` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change |   Delta |      % |          Time | Samples | Caller    | Location                               |
| -----: | ------: | -----: | ------------: | ------: | --------- | -------------------------------------- |
| -60.0% | -3.00ms | 100.0% | 5.0ms → 2.0ms |   5 → 2 | `0x9102b` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `__json_value_module_MOD_json_value_create` (`./json_value_module.F90:2211`)

| Change |   Delta |      % |          Time | Samples | Caller                                 | Location                                |
| -----: | ------: | -----: | ------------: | ------: | -------------------------------------- | --------------------------------------- |
| -66.7% | -2.00ms | 100.0% | 3.0ms → 1.0ms |   3 → 1 | `__json_value_module_MOD_parse_object` | `./json_value_module.F90:10882 → 10889` |

##### `__json_value_module_MOD_to_logical` (`./json_value_module.F90:10666`)

|  Change |   Delta |             % |        Time | Samples | Caller                                 | Location                                |
| ------: | ------: | ------------: | ----------: | ------: | -------------------------------------- | --------------------------------------- |
| removed | -2.00ms | 100.0% → 0.0% | 2.0ms → 0ms |   2 → 0 | `__json_value_module_MOD_parse_object` | `./json_value_module.F90:10882 → 10889` |

##### `__json_value_module_MOD_json_value_add_member` (`./json_value_module.F90:3401`)

| Change |   Delta |             % |          Time | Samples | Caller                                          | Location                                |
| -----: | ------: | ------------: | ------------: | ------: | ----------------------------------------------- | --------------------------------------- |
| -66.7% | -2.00ms | 37.5% → 14.3% | 3.0ms → 1.0ms |   3 → 1 | `__json_value_module_MOD_parse_object`          | `./json_value_module.F90:10882 → 10889` |
| +20.0% | +1.00ms | 62.5% → 85.7% | 5.0ms → 6.0ms |   5 → 6 | `__json_value_module_MOD_json_value_add_member` | `./json_value_module.F90:3394 → 3401`   |

##### `__json_value_module_MOD_json_get_string_by_path` (`./json_value_module.F90:9182`)

|  Change |   Delta |             % |        Time | Samples | Caller                                        | Location                      |
| ------: | ------: | ------------: | ----------: | ------: | --------------------------------------------- | ----------------------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `__json_file_module_MOD_json_file_get_string` | `./json_file_module.F90:1837` |

##### `__json_value_module_MOD_json_get_by_path` (`./json_value_module.F90:6502`)

|  Change |   Delta |             % |        Time | Samples | Caller                                        | Location                      |
| ------: | ------: | ------------: | ----------: | ------: | --------------------------------------------- | ----------------------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `__json_file_module_MOD_json_file_get_string` | `./json_file_module.F90:1837` |

##### `__json_value_module_MOD_json_get_string_by_path` (`./json_get_scalar_by_path.inc:9189`)

|  Change |   Delta |             % |        Time | Samples | Caller                                        | Location                             |
| ------: | ------: | ------------: | ----------: | ------: | --------------------------------------------- | ------------------------------------ |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `__json_file_module_MOD_json_file_get_string` | `./json_file_module.F90:1837 → 1863` |

##### `__json_value_module_MOD_json_info` (`./json_value_module.F90:1416`)

| Change |   Delta |      % |          Time | Samples | Caller                                          | Location                              |
| -----: | ------: | -----: | ------------: | ------: | ----------------------------------------------- | ------------------------------------- |
| -33.3% | -1.00ms | 100.0% | 3.0ms → 2.0ms |   3 → 2 | `__json_value_module_MOD_json_value_add_member` | `./json_value_module.F90:3394 → 3401` |

##### `__json_value_module_MOD_to_integer` (`./json_value_module.F90:10690`)

|  Change |   Delta |             % |        Time | Samples | Caller                                 | Location                        |
| ------: | ------: | ------------: | ----------: | ------: | -------------------------------------- | ------------------------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `__json_value_module_MOD_parse_number` | `./json_value_module.F90:11192` |

##### `__json_value_module_MOD_name_strings_equal` (`./json_value_module.F90:1244`)

|  Change |   Delta |             % |        Time | Samples | Caller                                                 | Location                       |
| ------: | ------: | ------------: | ----------: | ------: | ------------------------------------------------------ | ------------------------------ |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `__json_value_module_MOD_json_value_get_child_by_name` | `./json_value_module.F90:5584` |

##### `0x8eb44` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change |   Delta |      % |          Time | Samples | Caller    | Location                               |
| -----: | ------: | -----: | ------------: | ------: | --------- | -------------------------------------- |
| -50.0% | -3.00ms | 100.0% | 6.0ms → 3.0ms |   6 → 3 | `0x9102b` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x9117c` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change |   Delta |      % |          Time | Samples | Caller          | Location    |
| -----: | ------: | -----: | ------------: | ------: | --------------- | ----------- |
| -50.0% | -3.00ms | 100.0% | 6.0ms → 3.0ms |   6 → 3 | `__libc_malloc` | `<unknown>` |

##### `0x90ea4` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |   Delta |              % |          Time | Samples | Caller          | Location                               |
| ------: | ------: | -------------: | ------------: | ------: | --------------- | -------------------------------------- |
|  -66.7% | -2.00ms | 75.0% → 100.0% | 3.0ms → 1.0ms |   3 → 1 | `__libc_malloc` | `<unknown>`                            |
| removed | -1.00ms |   25.0% → 0.0% |   1.0ms → 0ms |   1 → 0 | `0x91b93`       | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

### Total time

#### Regressions

Functions with the largest increase in time spent within the function and its callees. Categories account for at least 1.0% of self time on the base or the current side.

|  Change |    Delta |            % |              Time |   Samples | Function                                      | Location                                          |
| ------: | -------: | -----------: | ----------------: | --------: | --------------------------------------------- | ------------------------------------------------- |
|  +15.7% | +29.00ms |  4.6% → 5.6% | 185.0ms → 214.0ms | 185 → 214 | `cfree`                                       | `<unknown>`                                       |
|   +6.0% | +17.00ms |  7.0% → 7.7% | 281.0ms → 298.0ms | 281 → 298 | `_gfortran_string_scan`                       | `<unknown>`                                       |
|  +11.6% | +15.00ms |  3.2% → 3.7% | 129.0ms → 144.0ms | 129 → 144 | `_gfortran_string_len_trim`                   | `<unknown>`                                       |
| +130.0% | +13.00ms |  0.2% → 0.6% |   10.0ms → 23.0ms |   10 → 23 | `0x108f53`                                    | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  +76.9% | +10.00ms |  0.3% → 0.6% |   13.0ms → 23.0ms |   13 → 23 | `0x90dc0`                                     | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  +45.5% | +10.00ms |  0.5% → 0.8% |   22.0ms → 32.0ms |   22 → 32 | `0x91c5f`                                     | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
| +100.0% |  +8.00ms |  0.2% → 0.4% |    8.0ms → 16.0ms |    8 → 16 | `0x91234`                                     | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
| +266.7% |  +8.00ms |  0.1% → 0.3% |    3.0ms → 11.0ms |    3 → 11 | `_gfortran_concat_string`                     | `<unknown>`                                       |
|   +1.9% |  +7.00ms | 9.3% → 10.0% | 378.0ms → 385.0ms | 378 → 385 | `__json_value_module_MOD_string_to_int`       | `./json_value_module.F90:8074 → 8081`             |
|  +75.0% |  +6.00ms |  0.2% → 0.4% |    8.0ms → 14.0ms |    8 → 14 | `0x107d13`                                    | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| +300.0% |  +6.00ms | <0.1% → 0.2% |     2.0ms → 8.0ms |     2 → 8 | `0x8eb3f`                                     | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
| +300.0% |  +6.00ms | <0.1% → 0.2% |     2.0ms → 8.0ms |     2 → 8 | `0x112ebb`                                    | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  +26.3% |  +5.00ms |  0.5% → 0.6% |   19.0ms → 24.0ms |   19 → 24 | `0x9d100`                                     | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
| +166.7% |  +5.00ms |  0.1% → 0.2% |     3.0ms → 8.0ms |     3 → 8 | `0x90e74`                                     | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  +83.3% |  +5.00ms |  0.1% → 0.3% |    6.0ms → 11.0ms |    6 → 11 | `0x107fa7`                                    | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  +41.7% |  +5.00ms |  0.3% → 0.4% |   12.0ms → 17.0ms |   12 → 17 | `0xfa6b3`                                     | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|     new |  +5.00ms |  0.0% → 0.1% |       0ms → 5.0ms |     0 → 5 | `0x9d11c`                                     | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
|   +5.4% |  +4.00ms |  1.8% → 2.0% |   74.0ms → 78.0ms |   74 → 78 | `__json_value_module_MOD_json_value_destroy`  | `./json_value_module.F90:2237 → 2244`             |
|   +5.4% |  +4.00ms |  1.8% → 2.0% |   74.0ms → 78.0ms |   74 → 78 | `__json_file_module_MOD_json_file_destroy`    | `./json_file_module.F90:769 → 781`                |
|  +18.2% |  +4.00ms |  0.5% → 0.7% |   22.0ms → 26.0ms |   22 → 26 | `__json_string_utilities_MOD_unescape_string` | `./json_string_utilities.F90:483`                 |

##### Ours

| Change |   Delta |            % |              Time |   Samples | Function                                                | Location                                |
| -----: | ------: | -----------: | ----------------: | --------: | ------------------------------------------------------- | --------------------------------------- |
|  +1.9% | +7.00ms | 9.3% → 10.0% | 378.0ms → 385.0ms | 378 → 385 | `__json_value_module_MOD_string_to_int`                 | `./json_value_module.F90:8074 → 8081`   |
|  +5.4% | +4.00ms |  1.8% → 2.0% |   74.0ms → 78.0ms |   74 → 78 | `__json_value_module_MOD_json_value_destroy`            | `./json_value_module.F90:2237 → 2244`   |
|  +5.4% | +4.00ms |  1.8% → 2.0% |   74.0ms → 78.0ms |   74 → 78 | `__json_file_module_MOD_json_file_destroy`              | `./json_file_module.F90:769 → 781`      |
| +18.2% | +4.00ms |  0.5% → 0.7% |   22.0ms → 26.0ms |   22 → 26 | `__json_string_utilities_MOD_unescape_string`           | `./json_string_utilities.F90:483`       |
| +25.0% | +1.00ms |         0.1% |     4.0ms → 5.0ms |     4 → 5 | `__json_value_module_MOD_pop_char`                      | `./json_value_module.F90:11318 → 11346` |
|    new | +1.00ms | 0.0% → <0.1% |       0ms → 1.0ms |     0 → 1 | `__json_value_module_MOD_to_array`                      | `./json_value_module.F90:10867`         |
|    new | +1.00ms | 0.0% → <0.1% |       0ms → 1.0ms |     0 → 1 | `__json_value_module_MOD_push_char`                     | `./json_value_module.F90:11510`         |
|    new | +1.00ms | 0.0% → <0.1% |       0ms → 1.0ms |     0 → 1 | `__json_value_module_MOD_json_value_get_child_by_index` | `./json_value_module.F90:5446`          |

##### Native

|  Change |    Delta |            % |              Time |   Samples | Function                    | Location                                          |
| ------: | -------: | -----------: | ----------------: | --------: | --------------------------- | ------------------------------------------------- |
|  +15.7% | +29.00ms |  4.6% → 5.6% | 185.0ms → 214.0ms | 185 → 214 | `cfree`                     | `<unknown>`                                       |
|   +6.0% | +17.00ms |  7.0% → 7.7% | 281.0ms → 298.0ms | 281 → 298 | `_gfortran_string_scan`     | `<unknown>`                                       |
|  +11.6% | +15.00ms |  3.2% → 3.7% | 129.0ms → 144.0ms | 129 → 144 | `_gfortran_string_len_trim` | `<unknown>`                                       |
| +130.0% | +13.00ms |  0.2% → 0.6% |   10.0ms → 23.0ms |   10 → 23 | `0x108f53`                  | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  +76.9% | +10.00ms |  0.3% → 0.6% |   13.0ms → 23.0ms |   13 → 23 | `0x90dc0`                   | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  +45.5% | +10.00ms |  0.5% → 0.8% |   22.0ms → 32.0ms |   22 → 32 | `0x91c5f`                   | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
| +100.0% |  +8.00ms |  0.2% → 0.4% |    8.0ms → 16.0ms |    8 → 16 | `0x91234`                   | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
| +266.7% |  +8.00ms |  0.1% → 0.3% |    3.0ms → 11.0ms |    3 → 11 | `_gfortran_concat_string`   | `<unknown>`                                       |
|  +75.0% |  +6.00ms |  0.2% → 0.4% |    8.0ms → 14.0ms |    8 → 14 | `0x107d13`                  | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| +300.0% |  +6.00ms | <0.1% → 0.2% |     2.0ms → 8.0ms |     2 → 8 | `0x8eb3f`                   | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
| +300.0% |  +6.00ms | <0.1% → 0.2% |     2.0ms → 8.0ms |     2 → 8 | `0x112ebb`                  | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  +26.3% |  +5.00ms |  0.5% → 0.6% |   19.0ms → 24.0ms |   19 → 24 | `0x9d100`                   | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
| +166.7% |  +5.00ms |  0.1% → 0.2% |     3.0ms → 8.0ms |     3 → 8 | `0x90e74`                   | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  +83.3% |  +5.00ms |  0.1% → 0.3% |    6.0ms → 11.0ms |    6 → 11 | `0x107fa7`                  | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  +41.7% |  +5.00ms |  0.3% → 0.4% |   12.0ms → 17.0ms |   12 → 17 | `0xfa6b3`                   | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|     new |  +5.00ms |  0.0% → 0.1% |       0ms → 5.0ms |     0 → 5 | `0x9d11c`                   | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  +57.1% |  +4.00ms |  0.2% → 0.3% |    7.0ms → 11.0ms |    7 → 11 | `0x10b28f`                  | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  +20.0% |  +4.00ms |  0.5% → 0.6% |   20.0ms → 24.0ms |   20 → 24 | `0x1098bf`                  | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| +200.0% |  +4.00ms | <0.1% → 0.2% |     2.0ms → 6.0ms |     2 → 6 | `0x8fad8`                   | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  +36.4% |  +4.00ms |  0.3% → 0.4% |   11.0ms → 15.0ms |   11 → 15 | `0x1c42b`                   | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

#### Improvements

Functions with the largest decrease in time spent within the function and its callees. Categories account for at least 1.0% of self time on the base or the current side.

| Change |     Delta |             % |              Time |       Samples | Function                                  | Location                                          |
| -----: | --------: | ------------: | ----------------: | ------------: | ----------------------------------------- | ------------------------------------------------- |
|  -4.7% | -188.00ms |        100.0% |     4.04s → 3.86s | 4,043 → 3,855 | `main`                                    | `/out/profile.f90:6`                              |
|  -4.7% | -188.00ms |        100.0% |     4.04s → 3.86s | 4,043 → 3,855 | `0x27743`                                 | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  -4.7% | -188.00ms |        100.0% |     4.04s → 3.86s | 4,043 → 3,855 | `__libc_start_main`                       | `<unknown>`                                       |
|  -4.7% | -188.00ms |        100.0% |     4.04s → 3.86s | 4,043 → 3,855 | `_start`                                  | `<unknown>`                                       |
|  -4.6% | -187.00ms |        100.0% |     4.04s → 3.86s | 4,042 → 3,855 | `MAIN__`                                  | `/out/profile.f90:5`                              |
|  -4.7% | -183.00ms |         97.1% |     3.93s → 3.74s | 3,925 → 3,742 | `__json_value_module_MOD_json_parse_file` | `./json_value_module.F90:9714 → 9721`             |
|  -4.7% | -183.00ms |         97.1% |     3.93s → 3.74s | 3,925 → 3,742 | `__json_file_module_MOD_json_file_load`   | `./json_file_module.F90:842 → 854`                |
|  -7.7% | -169.00ms | 54.0% → 52.2% |     2.18s → 2.01s | 2,182 → 2,013 | `__json_value_module_MOD_pop_char.part.0` | `./json_value_module.F90:11318 → 11346`           |
|  -4.2% | -159.00ms | 94.4% → 94.9% |     3.82s → 3.66s | 3,816 → 3,657 | `__json_value_module_MOD_parse_object`    | `./json_value_module.F90:10882 → 10889`           |
|  -4.0% | -154.00ms | 94.2% → 94.8% |     3.81s → 3.65s | 3,808 → 3,654 | `__json_value_module_MOD_parse_array`     | `./json_value_module.F90:10987 → 11003`           |
| -10.8% | -136.00ms | 31.1% → 29.1% |     1.26s → 1.12s | 1,257 → 1,121 | `__json_value_module_MOD_parse_value`     | `./json_value_module.F90:10117 → 10124`           |
|  -3.6% |  -63.00ms | 43.3% → 43.8% |     1.75s → 1.69s | 1,750 → 1,687 | `__json_value_module_MOD_parse_string`    | `./json_value_module.F90:11052 → 11080`           |
|  -8.4% |  -35.00ms |  10.3% → 9.9% | 416.0ms → 381.0ms |     416 → 381 | `__libc_malloc`                           | `<unknown>`                                       |
| -24.2% |  -32.00ms |   3.3% → 2.6% | 132.0ms → 100.0ms |     132 → 100 | `0x1c1b3`                                 | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| -33.0% |  -31.00ms |   2.3% → 1.6% |   94.0ms → 63.0ms |       94 → 63 | `0x9102b`                                 | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
| -28.4% |  -27.00ms |   2.3% → 1.8% |   95.0ms → 68.0ms |       95 → 68 | `0x1029eb`                                | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| -28.4% |  -27.00ms |   2.3% → 1.8% |   95.0ms → 68.0ms |       95 → 68 | `_gfortran_st_open`                       | `<unknown>`                                       |
| -25.6% |  -20.00ms |   1.9% → 1.5% |   78.0ms → 58.0ms |       78 → 58 | `0x10be83`                                | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| -20.6% |  -20.00ms |   2.4% → 2.0% |   97.0ms → 77.0ms |       97 → 77 | `__libc_realloc`                          | `<unknown>`                                       |
| -25.4% |  -18.00ms |   1.8% → 1.4% |   71.0ms → 53.0ms |       71 → 53 | `0x10a47b`                                | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### Ours

|  Change |     Delta |             % |              Time |       Samples | Function                                               | Location                                    |
| ------: | --------: | ------------: | ----------------: | ------------: | ------------------------------------------------------ | ------------------------------------------- |
|   -4.7% | -188.00ms |        100.0% |     4.04s → 3.86s | 4,043 → 3,855 | `main`                                                 | `/out/profile.f90:6`                        |
|   -4.6% | -187.00ms |        100.0% |     4.04s → 3.86s | 4,042 → 3,855 | `MAIN__`                                               | `/out/profile.f90:5`                        |
|   -4.7% | -183.00ms |         97.1% |     3.93s → 3.74s | 3,925 → 3,742 | `__json_value_module_MOD_json_parse_file`              | `./json_value_module.F90:9714 → 9721`       |
|   -4.7% | -183.00ms |         97.1% |     3.93s → 3.74s | 3,925 → 3,742 | `__json_file_module_MOD_json_file_load`                | `./json_file_module.F90:842 → 854`          |
|   -7.7% | -169.00ms | 54.0% → 52.2% |     2.18s → 2.01s | 2,182 → 2,013 | `__json_value_module_MOD_pop_char.part.0`              | `./json_value_module.F90:11318 → 11346`     |
|   -4.2% | -159.00ms | 94.4% → 94.9% |     3.82s → 3.66s | 3,816 → 3,657 | `__json_value_module_MOD_parse_object`                 | `./json_value_module.F90:10882 → 10889`     |
|   -4.0% | -154.00ms | 94.2% → 94.8% |     3.81s → 3.65s | 3,808 → 3,654 | `__json_value_module_MOD_parse_array`                  | `./json_value_module.F90:10987 → 11003`     |
|  -10.8% | -136.00ms | 31.1% → 29.1% |     1.26s → 1.12s | 1,257 → 1,121 | `__json_value_module_MOD_parse_value`                  | `./json_value_module.F90:10117 → 10124`     |
|   -3.6% |  -63.00ms | 43.3% → 43.8% |     1.75s → 1.69s | 1,750 → 1,687 | `__json_value_module_MOD_parse_string`                 | `./json_value_module.F90:11052 → 11080`     |
|   -1.9% |   -9.00ms | 11.8% → 12.2% | 479.0ms → 470.0ms |     479 → 470 | `__json_value_module_MOD_parse_number`                 | `./json_value_module.F90:11192 → 11220`     |
|  -13.6% |   -8.00ms |   1.5% → 1.3% |   59.0ms → 51.0ms |       59 → 51 | `__json_value_module_MOD_parse_for_chars`              | `./json_value_module.F90:11145 → 11173`     |
|  -19.4% |   -6.00ms |   0.8% → 0.6% |   31.0ms → 25.0ms |       31 → 25 | `__json_file_module_MOD_json_file_get_string`          | `./json_file_module.F90:1837 → 1863`        |
|  -50.0% |   -5.00ms |   0.2% → 0.1% |    10.0ms → 5.0ms |        10 → 5 | `__json_value_module_MOD_to_string`                    | `./json_value_module.F90:10755 → 10762`     |
|  -17.2% |   -5.00ms |   0.7% → 0.6% |   29.0ms → 24.0ms |       29 → 24 | `__json_value_module_MOD_json_get_string_by_path`      | `./json_get_scalar_by_path.inc:9182 → 9189` |
|   -4.5% |   -4.00ms |          2.2% |   89.0ms → 85.0ms |       89 → 85 | `__json_value_module_MOD_json_value_create`            | `./json_value_module.F90:2204 → 2211`       |
| removed |   -4.00ms |   0.1% → 0.0% |       4.0ms → 0ms |         4 → 0 | `__json_value_module_MOD_name_strings_equal`           | `./json_value_module.F90:1244`              |
| removed |   -4.00ms |   0.1% → 0.0% |       4.0ms → 0ms |         4 → 0 | `__json_value_module_MOD_json_value_get_child_by_name` | `./json_value_module.F90:5584`              |
| removed |   -4.00ms |   0.1% → 0.0% |       4.0ms → 0ms |         4 → 0 | `__json_string_utilities_MOD_string_to_real`           | `./json_string_utilities.F90:224`           |
| removed |   -4.00ms |   0.1% → 0.0% |       4.0ms → 0ms |         4 → 0 | `__json_value_module_MOD_string_to_dble`               | `./json_value_module.F90:8101`              |
|  -11.5% |   -3.00ms |          0.6% |   26.0ms → 23.0ms |       26 → 23 | `__json_value_module_MOD_json_get_by_path`             | `./json_value_module.F90:6495 → 6502`       |

##### Native

| Change |     Delta |            % |              Time |       Samples | Function            | Location                                          |
| -----: | --------: | -----------: | ----------------: | ------------: | ------------------- | ------------------------------------------------- |
|  -4.7% | -188.00ms |       100.0% |     4.04s → 3.86s | 4,043 → 3,855 | `0x27743`           | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  -4.7% | -188.00ms |       100.0% |     4.04s → 3.86s | 4,043 → 3,855 | `__libc_start_main` | `<unknown>`                                       |
|  -4.7% | -188.00ms |       100.0% |     4.04s → 3.86s | 4,043 → 3,855 | `_start`            | `<unknown>`                                       |
|  -8.4% |  -35.00ms | 10.3% → 9.9% | 416.0ms → 381.0ms |     416 → 381 | `__libc_malloc`     | `<unknown>`                                       |
| -24.2% |  -32.00ms |  3.3% → 2.6% | 132.0ms → 100.0ms |     132 → 100 | `0x1c1b3`           | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| -33.0% |  -31.00ms |  2.3% → 1.6% |   94.0ms → 63.0ms |       94 → 63 | `0x9102b`           | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
| -28.4% |  -27.00ms |  2.3% → 1.8% |   95.0ms → 68.0ms |       95 → 68 | `0x1029eb`          | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| -28.4% |  -27.00ms |  2.3% → 1.8% |   95.0ms → 68.0ms |       95 → 68 | `_gfortran_st_open` | `<unknown>`                                       |
| -25.6% |  -20.00ms |  1.9% → 1.5% |   78.0ms → 58.0ms |       78 → 58 | `0x10be83`          | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| -20.6% |  -20.00ms |  2.4% → 2.0% |   97.0ms → 77.0ms |       97 → 77 | `__libc_realloc`    | `<unknown>`                                       |
| -25.4% |  -18.00ms |  1.8% → 1.4% |   71.0ms → 53.0ms |       71 → 53 | `0x10a47b`          | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| -12.3% |  -16.00ms |  3.2% → 3.0% | 130.0ms → 114.0ms |     130 → 114 | `0x109623`          | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| -31.8% |  -14.00ms |  1.1% → 0.8% |   44.0ms → 30.0ms |       44 → 30 | `__read`            | `<unknown>`                                       |
| -31.8% |  -14.00ms |  1.1% → 0.8% |   44.0ms → 30.0ms |       44 → 30 | `0x10bd0b`          | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| -31.8% |  -14.00ms |  1.1% → 0.8% |   44.0ms → 30.0ms |       44 → 30 | `0x10c353`          | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| -26.5% |  -13.00ms |  1.2% → 0.9% |   49.0ms → 36.0ms |       49 → 36 | `0xfa6bf`           | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| -81.3% |  -13.00ms |  0.4% → 0.1% |    16.0ms → 3.0ms |        16 → 3 | `0x9155f`           | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
| -13.6% |  -12.00ms |  2.2% → 2.0% |   88.0ms → 76.0ms |       88 → 76 | `_init`             | `<unknown>`                                       |
| -26.8% |  -11.00ms |  1.0% → 0.8% |   41.0ms → 30.0ms |       41 → 30 | `0x10b283`          | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| -13.6% |  -11.00ms |  2.0% → 1.8% |   81.0ms → 70.0ms |       81 → 70 | `0x1093fb`          | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

#### Callers

Callers with the largest change in contribution to each function's total time. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `cfree` (`<unknown>`)

|  Change |    Delta |             % |            Time | Samples | Caller                                          | Location                                |
| ------: | -------: | ------------: | --------------: | ------: | ----------------------------------------------- | --------------------------------------- |
| +220.0% | +11.00ms |   2.7% → 7.5% |  5.0ms → 16.0ms |  5 → 16 | `__json_value_module_MOD_string_to_int`         | `./json_value_module.F90:8074 → 8081`   |
|  -15.2% | -10.00ms | 35.7% → 26.2% | 66.0ms → 56.0ms | 66 → 56 | `__json_value_module_MOD_parse_object`          | `./json_value_module.F90:10882 → 10889` |
| +266.7% |  +8.00ms |   1.6% → 5.1% |  3.0ms → 11.0ms |  3 → 11 | `__json_string_utilities_MOD_string_to_integer` | `./json_string_utilities.F90:116`       |
|  +20.0% |  +7.00ms | 18.9% → 19.6% | 35.0ms → 42.0ms | 35 → 42 | `__json_value_module_MOD_json_value_destroy`    | `./json_value_module.F90:2237 → 2244`   |
|  +77.8% |  +7.00ms |   4.9% → 7.5% |  9.0ms → 16.0ms |  9 → 16 | `__json_value_module_MOD_destroy_json_data`     | `./json_value_module.F90:1387 → 1394`   |

##### `_gfortran_string_scan` (`<unknown>`)

| Change |    Delta |             % |              Time |   Samples | Caller                                 | Location                                |
| -----: | -------: | ------------: | ----------------: | --------: | -------------------------------------- | --------------------------------------- |
| +17.7% | +22.00ms | 44.1% → 49.0% | 124.0ms → 146.0ms | 124 → 146 | `__json_value_module_MOD_parse_string` | `./json_value_module.F90:11052 → 11080` |
|  -2.3% |  -3.00ms | 46.3% → 42.6% | 130.0ms → 127.0ms | 130 → 127 | `__json_value_module_MOD_parse_object` | `./json_value_module.F90:10882 → 10889` |
|  -4.5% |  -1.00ms |   7.8% → 7.0% |   22.0ms → 21.0ms |   22 → 21 | `__json_value_module_MOD_parse_value`  | `./json_value_module.F90:10117 → 10124` |
| -20.0% |  -1.00ms |   1.8% → 1.3% |     5.0ms → 4.0ms |     5 → 4 | `__json_value_module_MOD_parse_array`  | `./json_value_module.F90:10987 → 11003` |

##### `_gfortran_string_len_trim` (`<unknown>`)

|  Change |    Delta |             % |            Time | Samples | Caller                                     | Location                                          |
| ------: | -------: | ------------: | --------------: | ------: | ------------------------------------------ | ------------------------------------------------- |
|  +14.1% | +11.00ms | 60.5% → 61.8% | 78.0ms → 89.0ms | 78 → 89 | `__json_value_module_MOD_parse_object`     | `./json_value_module.F90:10882 → 10889`           |
|  +66.7% |  +4.00ms |   4.7% → 6.9% |  6.0ms → 10.0ms |  6 → 10 | `0x10b283`                                 | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| +400.0% |  +4.00ms |   0.8% → 3.5% |   1.0ms → 5.0ms |   1 → 5 | `__json_value_module_MOD_parse_array`      | `./json_value_module.F90:10987 → 11003`           |
|   -6.7% |  -2.00ms | 23.3% → 19.4% | 30.0ms → 28.0ms | 30 → 28 | `__json_value_module_MOD_parse_value`      | `./json_value_module.F90:10117 → 10124`           |
| removed |  -1.00ms |   0.8% → 0.0% |     1.0ms → 0ms |   1 → 0 | `__json_value_module_MOD_json_get_by_path` | `./json_value_module.F90:6495`                    |

##### `0x108f53` (`/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|  Change |    Delta |      % |            Time | Samples | Caller                                          | Location                          |
| ------: | -------: | -----: | --------------: | ------: | ----------------------------------------------- | --------------------------------- |
| +130.0% | +13.00ms | 100.0% | 10.0ms → 23.0ms | 10 → 23 | `__json_string_utilities_MOD_string_to_integer` | `./json_string_utilities.F90:116` |

##### `0x90dc0` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |    Delta |              % |            Time | Samples | Caller          | Location                               |
| ------: | -------: | -------------: | --------------: | ------: | --------------- | -------------------------------------- |
| +109.1% | +12.00ms | 84.6% → 100.0% | 11.0ms → 23.0ms | 11 → 23 | `__libc_malloc` | `<unknown>`                            |
| removed |  -2.00ms |   15.4% → 0.0% |     2.0ms → 0ms |   2 → 0 | `0x91b93`       | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x91c5f` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change |    Delta |      % |            Time | Samples | Caller           | Location    |
| -----: | -------: | -----: | --------------: | ------: | ---------------- | ----------- |
| +45.5% | +10.00ms | 100.0% | 22.0ms → 32.0ms | 22 → 32 | `__libc_realloc` | `<unknown>` |

##### `0x91234` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |   Delta |      % |           Time | Samples | Caller          | Location    |
| ------: | ------: | -----: | -------------: | ------: | --------------- | ----------- |
| +100.0% | +8.00ms | 100.0% | 8.0ms → 16.0ms |  8 → 16 | `__libc_malloc` | `<unknown>` |

##### `_gfortran_concat_string` (`<unknown>`)

|  Change |   Delta |             % |           Time | Samples | Caller                                             | Location                              |
| ------: | ------: | ------------: | -------------: | ------: | -------------------------------------------------- | ------------------------------------- |
| +900.0% | +9.00ms | 33.3% → 90.9% | 1.0ms → 10.0ms |  1 → 10 | `__json_value_module_MOD_string_to_int`            | `./json_value_module.F90:8074 → 8081` |
| removed | -2.00ms |  66.7% → 0.0% |    2.0ms → 0ms |   2 → 0 | `__json_string_utilities_MOD_string_to_integer`    | `./json_string_utilities.F90:116`     |
|     new | +1.00ms |   0.0% → 9.1% |    0ms → 1.0ms |   0 → 1 | `__json_value_module_MOD_json_get_by_path_default` | `./json_value_module.F90:6794`        |

##### `__json_value_module_MOD_string_to_int` (`./json_value_module.F90:8081`)

| Change |   Delta |      % |              Time |   Samples | Caller                                 | Location                                |
| -----: | ------: | -----: | ----------------: | --------: | -------------------------------------- | --------------------------------------- |
|  +1.9% | +7.00ms | 100.0% | 378.0ms → 385.0ms | 378 → 385 | `__json_value_module_MOD_parse_number` | `./json_value_module.F90:11192 → 11220` |

##### `0x107d13` (`/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

| Change |   Delta |     % |          Time | Samples | Caller     | Location                                          |
| -----: | ------: | ----: | ------------: | ------: | ---------- | ------------------------------------------------- |
| +75.0% | +3.00ms | 50.0% | 4.0ms → 7.0ms |   4 → 7 | `0x108f53` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| +75.0% | +3.00ms | 50.0% | 4.0ms → 7.0ms |   4 → 7 | `0x1098bf` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `0x8eb3f` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |   Delta |      % |          Time | Samples | Caller    | Location                               |
| ------: | ------: | -----: | ------------: | ------: | --------- | -------------------------------------- |
| +300.0% | +6.00ms | 100.0% | 2.0ms → 8.0ms |   2 → 8 | `0x9102b` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x112ebb` (`/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|  Change |   Delta |      % |          Time | Samples | Caller     | Location                                          |
| ------: | ------: | -----: | ------------: | ------: | ---------- | ------------------------------------------------- |
| +300.0% | +6.00ms | 100.0% | 2.0ms → 8.0ms |   2 → 8 | `0x10b28f` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `0x9d100` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |   Delta |             % |            Time | Samples | Caller                                 | Location                                |
| ------: | ------: | ------------: | --------------: | ------: | -------------------------------------- | --------------------------------------- |
| +100.0% | +4.00ms | 21.1% → 33.3% |   4.0ms → 8.0ms |   4 → 8 | `__json_value_module_MOD_parse_value`  | `./json_value_module.F90:10117 → 10124` |
|  +23.1% | +3.00ms | 68.4% → 66.7% | 13.0ms → 16.0ms | 13 → 16 | `__json_value_module_MOD_parse_object` | `./json_value_module.F90:10882 → 10889` |
| removed | -2.00ms |  10.5% → 0.0% |     2.0ms → 0ms |   2 → 0 | `__json_value_module_MOD_parse_string` | `./json_value_module.F90:11052`         |

##### `0x90e74` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |   Delta |      % |          Time | Samples | Caller          | Location    |
| ------: | ------: | -----: | ------------: | ------: | --------------- | ----------- |
| +166.7% | +5.00ms | 100.0% | 3.0ms → 8.0ms |   3 → 8 | `__libc_malloc` | `<unknown>` |

##### `0x107fa7` (`/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

| Change |   Delta |      % |           Time | Samples | Caller     | Location                                          |
| -----: | ------: | -----: | -------------: | ------: | ---------- | ------------------------------------------------- |
| +83.3% | +5.00ms | 100.0% | 6.0ms → 11.0ms |  6 → 11 | `0x108f53` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `0xfa6b3` (`/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

| Change |   Delta |      % |            Time | Samples | Caller     | Location                                          |
| -----: | ------: | -----: | --------------: | ------: | ---------- | ------------------------------------------------- |
| +41.7% | +5.00ms | 100.0% | 12.0ms → 17.0ms | 12 → 17 | `0x109623` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `0x9d11c` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change |   Delta |            % |        Time | Samples | Caller                                  | Location                                          |
| -----: | ------: | -----------: | ----------: | ------: | --------------------------------------- | ------------------------------------------------- |
|    new | +2.00ms | 0.0% → 40.0% | 0ms → 2.0ms |   0 → 2 | `__json_value_module_MOD_parse_object`  | `./json_value_module.F90:10889`                   |
|    new | +2.00ms | 0.0% → 40.0% | 0ms → 2.0ms |   0 → 2 | `__json_value_module_MOD_string_to_int` | `./json_value_module.F90:8081`                    |
|    new | +1.00ms | 0.0% → 20.0% | 0ms → 1.0ms |   0 → 1 | `0xfa6b3`                               | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `__json_value_module_MOD_json_value_destroy` (`./json_value_module.F90:2244`)

| Change |   Delta |      % |            Time | Samples | Caller                                       | Location                              |
| -----: | ------: | -----: | --------------: | ------: | -------------------------------------------- | ------------------------------------- |
|  +5.4% | +4.00ms | 100.0% | 74.0ms → 78.0ms | 74 → 78 | `__json_value_module_MOD_json_value_destroy` | `./json_value_module.F90:2237 → 2244` |
|  +5.4% | +4.00ms | 100.0% | 74.0ms → 78.0ms | 74 → 78 | `__json_file_module_MOD_json_file_destroy`   | `./json_file_module.F90:769 → 781`    |

##### `__json_file_module_MOD_json_file_destroy` (`./json_file_module.F90:781`)

| Change |   Delta |      % |            Time | Samples | Caller   | Location             |
| -----: | ------: | -----: | --------------: | ------: | -------- | -------------------- |
|  +5.4% | +4.00ms | 100.0% | 74.0ms → 78.0ms | 74 → 78 | `MAIN__` | `/out/profile.f90:5` |

##### `__json_string_utilities_MOD_unescape_string` (`./json_string_utilities.F90:483`)

| Change |   Delta |      % |            Time | Samples | Caller                                 | Location                                |
| -----: | ------: | -----: | --------------: | ------: | -------------------------------------- | --------------------------------------- |
| +18.2% | +4.00ms | 100.0% | 22.0ms → 26.0ms | 22 → 26 | `__json_value_module_MOD_parse_string` | `./json_value_module.F90:11052 → 11080` |

##### `__json_value_module_MOD_pop_char` (`./json_value_module.F90:11346`)

|  Change |   Delta |             % |          Time | Samples | Caller                                 | Location                                |
| ------: | ------: | ------------: | ------------: | ------: | -------------------------------------- | --------------------------------------- |
| +300.0% | +3.00ms | 25.0% → 80.0% | 1.0ms → 4.0ms |   1 → 4 | `__json_value_module_MOD_parse_object` | `./json_value_module.F90:10882 → 10889` |
|  -66.7% | -2.00ms | 75.0% → 20.0% | 3.0ms → 1.0ms |   3 → 1 | `__json_value_module_MOD_parse_value`  | `./json_value_module.F90:10117 → 10124` |

##### `__json_value_module_MOD_to_array` (`./json_value_module.F90:10867`)

| Change |   Delta |             % |        Time | Samples | Caller                                | Location                        |
| -----: | ------: | ------------: | ----------: | ------: | ------------------------------------- | ------------------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `__json_value_module_MOD_parse_value` | `./json_value_module.F90:10124` |

##### `__json_value_module_MOD_push_char` (`./json_value_module.F90:11510`)

| Change |   Delta |             % |        Time | Samples | Caller                                | Location                        |
| -----: | ------: | ------------: | ----------: | ------: | ------------------------------------- | ------------------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `__json_value_module_MOD_parse_array` | `./json_value_module.F90:11003` |

##### `__json_value_module_MOD_json_value_get_child_by_index` (`./json_value_module.F90:5446`)

| Change |   Delta |             % |        Time | Samples | Caller                                                  | Location                       |
| -----: | ------: | ------------: | ----------: | ------: | ------------------------------------------------------- | ------------------------------ |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `__json_value_module_MOD_json_value_get_child_by_index` | `./json_value_module.F90:5446` |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `__json_value_module_MOD_json_get_by_path_default`      | `./json_value_module.F90:6794` |

##### `0x10b28f` (`/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

| Change |   Delta |      % |           Time | Samples | Caller     | Location                                          |
| -----: | ------: | -----: | -------------: | ------: | ---------- | ------------------------------------------------- |
| +57.1% | +4.00ms | 100.0% | 7.0ms → 11.0ms |  7 → 11 | `0x1093fb` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `0x1098bf` (`/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

| Change |   Delta |             % |            Time | Samples | Caller                                          | Location                                |
| -----: | ------: | ------------: | --------------: | ------: | ----------------------------------------------- | --------------------------------------- |
| +31.3% | +5.00ms | 80.0% → 87.5% | 16.0ms → 21.0ms | 16 → 21 | `__json_string_utilities_MOD_string_to_integer` | `./json_string_utilities.F90:116`       |
| -50.0% | -2.00ms |  20.0% → 8.3% |   4.0ms → 2.0ms |   4 → 2 | `__json_value_module_MOD_pop_char.part.0`       | `./json_value_module.F90:11318 → 11346` |
|    new | +1.00ms |   0.0% → 4.2% |     0ms → 1.0ms |   0 → 1 | `MAIN__`                                        | `/out/profile.f90:5`                    |

##### `0x8fad8` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |   Delta |             % |          Time | Samples | Caller    | Location                               |
| ------: | ------: | ------------: | ------------: | ------: | --------- | -------------------------------------- |
| +300.0% | +3.00ms | 50.0% → 66.7% | 1.0ms → 4.0ms |   1 → 4 | `cfree`   | `<unknown>`                            |
| +100.0% | +1.00ms | 50.0% → 33.3% | 1.0ms → 2.0ms |   1 → 2 | `0x91c5f` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x1c42b` (`/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

| Change |   Delta |      % |            Time | Samples | Caller    | Location                                          |
| -----: | ------: | -----: | --------------: | ------: | --------- | ------------------------------------------------- |
| +36.4% | +4.00ms | 100.0% | 11.0ms → 15.0ms | 11 → 15 | `0xfa6b3` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `main` (`/out/profile.f90:6`)

| Change |     Delta |      % |          Time |       Samples | Caller    | Location                               |
| -----: | --------: | -----: | ------------: | ------------: | --------- | -------------------------------------- |
|  -4.7% | -188.00ms | 100.0% | 4.04s → 3.86s | 4,043 → 3,855 | `0x27743` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x27743` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change |     Delta |      % |          Time |       Samples | Caller              | Location    |
| -----: | --------: | -----: | ------------: | ------------: | ------------------- | ----------- |
|  -4.7% | -188.00ms | 100.0% | 4.04s → 3.86s | 4,043 → 3,855 | `__libc_start_main` | `<unknown>` |

##### `__libc_start_main` (`<unknown>`)

| Change |     Delta |      % |          Time |       Samples | Caller   | Location    |
| -----: | --------: | -----: | ------------: | ------------: | -------- | ----------- |
|  -4.7% | -188.00ms | 100.0% | 4.04s → 3.86s | 4,043 → 3,855 | `_start` | `<unknown>` |

##### `MAIN__` (`/out/profile.f90:5`)

| Change |     Delta |      % |          Time |       Samples | Caller | Location             |
| -----: | --------: | -----: | ------------: | ------------: | ------ | -------------------- |
|  -4.6% | -187.00ms | 100.0% | 4.04s → 3.86s | 4,042 → 3,855 | `main` | `/out/profile.f90:6` |

##### `__json_value_module_MOD_json_parse_file` (`./json_value_module.F90:9721`)

| Change |     Delta |      % |          Time |       Samples | Caller                                  | Location                           |
| -----: | --------: | -----: | ------------: | ------------: | --------------------------------------- | ---------------------------------- |
|  -4.7% | -183.00ms | 100.0% | 3.93s → 3.74s | 3,925 → 3,742 | `__json_file_module_MOD_json_file_load` | `./json_file_module.F90:842 → 854` |

##### `__json_file_module_MOD_json_file_load` (`./json_file_module.F90:854`)

| Change |     Delta |      % |          Time |       Samples | Caller   | Location             |
| -----: | --------: | -----: | ------------: | ------------: | -------- | -------------------- |
|  -4.7% | -183.00ms | 100.0% | 3.93s → 3.74s | 3,925 → 3,742 | `MAIN__` | `/out/profile.f90:5` |

##### `__json_value_module_MOD_pop_char.part.0` (`./json_value_module.F90:11346`)

| Change |    Delta |             % |              Time |       Samples | Caller                                    | Location                                |
| -----: | -------: | ------------: | ----------------: | ------------: | ----------------------------------------- | --------------------------------------- |
|  -7.0% | -89.00ms | 58.6% → 59.1% |     1.28s → 1.19s | 1,279 → 1,190 | `__json_value_module_MOD_parse_string`    | `./json_value_module.F90:11052 → 11080` |
|  -7.5% | -45.00ms | 27.7% → 27.8% | 604.0ms → 559.0ms |     604 → 559 | `__json_value_module_MOD_parse_object`    | `./json_value_module.F90:10882 → 10889` |
| -18.8% | -12.00ms |   2.9% → 2.6% |   64.0ms → 52.0ms |       64 → 52 | `__json_value_module_MOD_parse_number`    | `./json_value_module.F90:11192 → 11220` |
| -15.4% |  -8.00ms |   2.4% → 2.2% |   52.0ms → 44.0ms |       52 → 44 | `__json_value_module_MOD_parse_for_chars` | `./json_value_module.F90:11145 → 11173` |
| -61.5% |  -8.00ms |   0.6% → 0.2% |    13.0ms → 5.0ms |        13 → 5 | `__json_value_module_MOD_parse_array`     | `./json_value_module.F90:10987 → 11003` |

##### `__json_value_module_MOD_parse_object` (`./json_value_module.F90:10889`)

| Change |     Delta |             % |          Time |       Samples | Caller                                    | Location                                |
| -----: | --------: | ------------: | ------------: | ------------: | ----------------------------------------- | --------------------------------------- |
|  -4.2% | -159.00ms |        100.0% | 3.82s → 3.66s | 3,816 → 3,657 | `__json_value_module_MOD_json_parse_file` | `./json_value_module.F90:9714 → 9721`   |
|  -4.1% | -156.00ms |         99.5% | 3.80s → 3.64s | 3,796 → 3,640 | `__json_value_module_MOD_parse_object`    | `./json_value_module.F90:10882 → 10889` |
|  -4.0% | -151.00ms | 99.7% → 99.9% | 3.80s → 3.65s | 3,803 → 3,652 | `__json_value_module_MOD_parse_array`     | `./json_value_module.F90:10987 → 11003` |

##### `__json_value_module_MOD_parse_array` (`./json_value_module.F90:11003`)

| Change |     Delta |      % |          Time |       Samples | Caller                                 | Location                                |
| -----: | --------: | -----: | ------------: | ------------: | -------------------------------------- | --------------------------------------- |
|  -4.0% | -154.00ms | 100.0% | 3.81s → 3.65s | 3,808 → 3,654 | `__json_value_module_MOD_parse_object` | `./json_value_module.F90:10882 → 10889` |

##### `__json_value_module_MOD_parse_value` (`./json_value_module.F90:10124`)

| Change |     Delta |             % |            Time |       Samples | Caller                                    | Location                                |
| -----: | --------: | ------------: | --------------: | ------------: | ----------------------------------------- | --------------------------------------- |
| -11.2% | -136.00ms | 96.3% → 95.8% |   1.21s → 1.07s | 1,210 → 1,074 | `__json_value_module_MOD_parse_object`    | `./json_value_module.F90:10882 → 10889` |
|  -8.1% |   -3.00ms |   2.9% → 3.0% | 37.0ms → 34.0ms |       37 → 34 | `__json_value_module_MOD_parse_array`     | `./json_value_module.F90:10987 → 11003` |
| +30.0% |   +3.00ms |   0.8% → 1.2% | 10.0ms → 13.0ms |       10 → 13 | `__json_value_module_MOD_json_parse_file` | `./json_value_module.F90:9714 → 9721`   |

##### `__json_value_module_MOD_parse_string` (`./json_value_module.F90:11080`)

| Change |    Delta |             % |              Time |   Samples | Caller                                 | Location                                |
| -----: | -------: | ------------: | ----------------: | --------: | -------------------------------------- | --------------------------------------- |
| -11.4% | -98.00ms | 49.3% → 45.3% | 862.0ms → 764.0ms | 862 → 764 | `__json_value_module_MOD_parse_value`  | `./json_value_module.F90:10117 → 10124` |
|  +3.9% | +35.00ms | 50.7% → 54.7% | 888.0ms → 923.0ms | 888 → 923 | `__json_value_module_MOD_parse_object` | `./json_value_module.F90:10882 → 10889` |

##### `__libc_malloc` (`<unknown>`)

| Change |    Delta |             % |              Time |   Samples | Caller                                 | Location                                          |
| -----: | -------: | ------------: | ----------------: | --------: | -------------------------------------- | ------------------------------------------------- |
| -24.2% | -32.00ms | 31.7% → 26.2% | 132.0ms → 100.0ms | 132 → 100 | `0x1c1b3`                              | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  -4.1% |  -4.00ms | 23.6% → 24.7% |   98.0ms → 94.0ms |   98 → 94 | `__json_value_module_MOD_parse_string` | `./json_value_module.F90:11052 → 11080`           |
| -66.7% |  -4.00ms |   1.4% → 0.5% |     6.0ms → 2.0ms |     6 → 2 | `__json_value_module_MOD_to_string`    | `./json_value_module.F90:10755 → 10762`           |
|    new |  +4.00ms |   0.0% → 1.0% |       0ms → 4.0ms |     0 → 4 | `__json_value_module_MOD_to_logical`   | `./json_value_module.F90:10666`                   |
|  -6.7% |  -3.00ms | 10.8% → 11.0% |   45.0ms → 42.0ms |   45 → 42 | `__json_value_module_MOD_parse_object` | `./json_value_module.F90:10882 → 10889`           |

##### `0x1c1b3` (`/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|  Change |    Delta |             % |            Time | Samples | Caller     | Location                                          |
| ------: | -------: | ------------: | --------------: | ------: | ---------- | ------------------------------------------------- |
|  -25.6% | -20.00ms | 59.1% → 58.0% | 78.0ms → 58.0ms | 78 → 58 | `0x10be83` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  -32.7% | -16.00ms | 37.1% → 33.0% | 49.0ms → 33.0ms | 49 → 33 | `0xfa6bf`  | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| +250.0% |  +5.00ms |   1.5% → 7.0% |   2.0ms → 7.0ms |   2 → 7 | `0x112ebb` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  -33.3% |  -1.00ms |   2.3% → 2.0% |   3.0ms → 2.0ms |   3 → 2 | `0x112ecb` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `0x9102b` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change |    Delta |      % |            Time | Samples | Caller          | Location    |
| -----: | -------: | -----: | --------------: | ------: | --------------- | ----------- |
| -33.0% | -31.00ms | 100.0% | 94.0ms → 63.0ms | 94 → 63 | `__libc_malloc` | `<unknown>` |

##### `0x1029eb` (`/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

| Change |    Delta |      % |            Time | Samples | Caller              | Location    |
| -----: | -------: | -----: | --------------: | ------: | ------------------- | ----------- |
| -28.4% | -27.00ms | 100.0% | 95.0ms → 68.0ms | 95 → 68 | `_gfortran_st_open` | `<unknown>` |

##### `_gfortran_st_open` (`<unknown>`)

| Change |    Delta |      % |            Time | Samples | Caller                                    | Location                              |
| -----: | -------: | -----: | --------------: | ------: | ----------------------------------------- | ------------------------------------- |
| -28.4% | -27.00ms | 100.0% | 95.0ms → 68.0ms | 95 → 68 | `__json_value_module_MOD_json_parse_file` | `./json_value_module.F90:9714 → 9721` |

##### `0x10be83` (`/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

| Change |    Delta |      % |            Time | Samples | Caller     | Location                                          |
| -----: | -------: | -----: | --------------: | ------: | ---------- | ------------------------------------------------- |
| -25.6% | -20.00ms | 100.0% | 78.0ms → 58.0ms | 78 → 58 | `0x1029eb` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `__libc_realloc` (`<unknown>`)

|  Change |    Delta |             % |            Time | Samples | Caller                                        | Location                                |
| ------: | -------: | ------------: | --------------: | ------: | --------------------------------------------- | --------------------------------------- |
|  -48.0% | -12.00ms | 25.8% → 16.9% | 25.0ms → 13.0ms | 25 → 13 | `__json_value_module_MOD_parse_value`         | `./json_value_module.F90:10117 → 10124` |
|  -20.0% |  -4.00ms | 20.6% → 20.8% | 20.0ms → 16.0ms | 20 → 16 | `__json_value_module_MOD_parse_object`        | `./json_value_module.F90:10882 → 10889` |
|   -4.0% |  -2.00ms | 51.5% → 62.3% | 50.0ms → 48.0ms | 50 → 48 | `__json_value_module_MOD_parse_string`        | `./json_value_module.F90:11052 → 11080` |
| removed |  -1.00ms |   1.0% → 0.0% |     1.0ms → 0ms |   1 → 0 | `__json_value_module_MOD_json_get_string`     | `./json_value_module.F90:9078`          |
| removed |  -1.00ms |   1.0% → 0.0% |     1.0ms → 0ms |   1 → 0 | `__json_string_utilities_MOD_unescape_string` | `./json_string_utilities.F90:483`       |

##### `0x10a47b` (`/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

| Change |    Delta |      % |            Time | Samples | Caller                                    | Location                                |
| -----: | -------: | -----: | --------------: | ------: | ----------------------------------------- | --------------------------------------- |
| -25.4% | -18.00ms | 100.0% | 71.0ms → 53.0ms | 71 → 53 | `__json_value_module_MOD_pop_char.part.0` | `./json_value_module.F90:11318 → 11346` |

##### `__json_value_module_MOD_parse_number` (`./json_value_module.F90:11220`)

| Change |    Delta |             % |              Time |   Samples | Caller                                 | Location                                |
| -----: | -------: | ------------: | ----------------: | --------: | -------------------------------------- | --------------------------------------- |
|  -3.6% | -15.00ms | 87.7% → 86.2% | 420.0ms → 405.0ms | 420 → 405 | `__json_value_module_MOD_parse_object` | `./json_value_module.F90:10882 → 10889` |
| +10.2% |  +6.00ms | 12.3% → 13.8% |   59.0ms → 65.0ms |   59 → 65 | `__json_value_module_MOD_parse_array`  | `./json_value_module.F90:10987 → 11003` |

##### `__json_value_module_MOD_parse_for_chars` (`./json_value_module.F90:11173`)

| Change |   Delta |      % |            Time | Samples | Caller                                | Location                                |
| -----: | ------: | -----: | --------------: | ------: | ------------------------------------- | --------------------------------------- |
| -13.6% | -8.00ms | 100.0% | 59.0ms → 51.0ms | 59 → 51 | `__json_value_module_MOD_parse_value` | `./json_value_module.F90:10117 → 10124` |

##### `__json_file_module_MOD_json_file_get_string` (`./json_file_module.F90:1863`)

| Change |   Delta |      % |            Time | Samples | Caller   | Location             |
| -----: | ------: | -----: | --------------: | ------: | -------- | -------------------- |
| -19.4% | -6.00ms | 100.0% | 31.0ms → 25.0ms | 31 → 25 | `MAIN__` | `/out/profile.f90:5` |

##### `__json_value_module_MOD_to_string` (`./json_value_module.F90:10762`)

| Change |   Delta |      % |           Time | Samples | Caller                                | Location                                |
| -----: | ------: | -----: | -------------: | ------: | ------------------------------------- | --------------------------------------- |
| -50.0% | -5.00ms | 100.0% | 10.0ms → 5.0ms |  10 → 5 | `__json_value_module_MOD_parse_value` | `./json_value_module.F90:10117 → 10124` |

##### `__json_value_module_MOD_json_get_string_by_path` (`./json_get_scalar_by_path.inc:9189`)

| Change |   Delta |      % |            Time | Samples | Caller                                        | Location                             |
| -----: | ------: | -----: | --------------: | ------: | --------------------------------------------- | ------------------------------------ |
| -17.2% | -5.00ms | 100.0% | 29.0ms → 24.0ms | 29 → 24 | `__json_file_module_MOD_json_file_get_string` | `./json_file_module.F90:1837 → 1863` |

##### `__json_value_module_MOD_json_value_create` (`./json_value_module.F90:2211`)

| Change |   Delta |             % |            Time | Samples | Caller                                 | Location                                |
| -----: | ------: | ------------: | --------------: | ------: | -------------------------------------- | --------------------------------------- |
| -11.1% | -9.00ms | 91.0% → 84.7% | 81.0ms → 72.0ms | 81 → 72 | `__json_value_module_MOD_parse_object` | `./json_value_module.F90:10882 → 10889` |
| +62.5% | +5.00ms |  9.0% → 15.3% |  8.0ms → 13.0ms |  8 → 13 | `__json_value_module_MOD_parse_array`  | `./json_value_module.F90:10987 → 11003` |

##### `__json_value_module_MOD_name_strings_equal` (`./json_value_module.F90:1244`)

|  Change |   Delta |             % |        Time | Samples | Caller                                                 | Location                       |
| ------: | ------: | ------------: | ----------: | ------: | ------------------------------------------------------ | ------------------------------ |
| removed | -4.00ms | 100.0% → 0.0% | 4.0ms → 0ms |   4 → 0 | `__json_value_module_MOD_json_value_get_child_by_name` | `./json_value_module.F90:5584` |

##### `__json_value_module_MOD_json_value_get_child_by_name` (`./json_value_module.F90:5584`)

|  Change |   Delta |             % |        Time | Samples | Caller                                                 | Location                       |
| ------: | ------: | ------------: | ----------: | ------: | ------------------------------------------------------ | ------------------------------ |
| removed | -4.00ms | 100.0% → 0.0% | 4.0ms → 0ms |   4 → 0 | `__json_value_module_MOD_json_value_get_child_by_name` | `./json_value_module.F90:5584` |
| removed | -4.00ms | 100.0% → 0.0% | 4.0ms → 0ms |   4 → 0 | `__json_value_module_MOD_json_get_by_path_default`     | `./json_value_module.F90:6787` |

##### `__json_string_utilities_MOD_string_to_real` (`./json_string_utilities.F90:224`)

|  Change |   Delta |             % |        Time | Samples | Caller                                   | Location                       |
| ------: | ------: | ------------: | ----------: | ------: | ---------------------------------------- | ------------------------------ |
| removed | -4.00ms | 100.0% → 0.0% | 4.0ms → 0ms |   4 → 0 | `__json_value_module_MOD_string_to_dble` | `./json_value_module.F90:8101` |

##### `__json_value_module_MOD_string_to_dble` (`./json_value_module.F90:8101`)

|  Change |   Delta |             % |        Time | Samples | Caller                                 | Location                        |
| ------: | ------: | ------------: | ----------: | ------: | -------------------------------------- | ------------------------------- |
| removed | -4.00ms | 100.0% → 0.0% | 4.0ms → 0ms |   4 → 0 | `__json_value_module_MOD_parse_number` | `./json_value_module.F90:11192` |

##### `__json_value_module_MOD_json_get_by_path` (`./json_value_module.F90:6502`)

|  Change |   Delta |              % |            Time | Samples | Caller                                            | Location                                    |
| ------: | ------: | -------------: | --------------: | ------: | ------------------------------------------------- | ------------------------------------------- |
|   -8.0% | -2.00ms | 96.2% → 100.0% | 25.0ms → 23.0ms | 25 → 23 | `__json_value_module_MOD_json_get_string_by_path` | `./json_get_scalar_by_path.inc:9182 → 9189` |
| removed | -1.00ms |    3.8% → 0.0% |     1.0ms → 0ms |   1 → 0 | `__json_file_module_MOD_json_file_get_string`     | `./json_file_module.F90:1837`               |

##### `0x109623` (`/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

| Change |    Delta |             % |              Time |   Samples | Caller                                          | Location                          |
| -----: | -------: | ------------: | ----------------: | --------: | ----------------------------------------------- | --------------------------------- |
| -12.0% | -15.00ms | 96.2% → 96.5% | 125.0ms → 110.0ms | 125 → 110 | `__json_string_utilities_MOD_string_to_integer` | `./json_string_utilities.F90:116` |
| -20.0% |  -1.00ms |   3.8% → 3.5% |     5.0ms → 4.0ms |     5 → 4 | `MAIN__`                                        | `/out/profile.f90:5`              |

##### `__read` (`<unknown>`)

| Change |    Delta |      % |            Time | Samples | Caller     | Location                                          |
| -----: | -------: | -----: | --------------: | ------: | ---------- | ------------------------------------------------- |
| -31.8% | -14.00ms | 100.0% | 44.0ms → 30.0ms | 44 → 30 | `0x10bd0b` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `0x10bd0b` (`/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

| Change |    Delta |      % |            Time | Samples | Caller     | Location                                          |
| -----: | -------: | -----: | --------------: | ------: | ---------- | ------------------------------------------------- |
| -31.8% | -14.00ms | 100.0% | 44.0ms → 30.0ms | 44 → 30 | `0x10c353` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `0x10c353` (`/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

| Change |    Delta |      % |            Time | Samples | Caller     | Location                                          |
| -----: | -------: | -----: | --------------: | ------: | ---------- | ------------------------------------------------- |
| -31.8% | -14.00ms | 100.0% | 44.0ms → 30.0ms | 44 → 30 | `0x10a47b` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `0xfa6bf` (`/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

| Change |    Delta |      % |            Time | Samples | Caller     | Location                                          |
| -----: | -------: | -----: | --------------: | ------: | ---------- | ------------------------------------------------- |
| -26.5% | -13.00ms | 100.0% | 49.0ms → 36.0ms | 49 → 36 | `0x109623` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `0x9155f` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change |    Delta |      % |           Time | Samples | Caller          | Location    |
| -----: | -------: | -----: | -------------: | ------: | --------------- | ----------- |
| -81.3% | -13.00ms | 100.0% | 16.0ms → 3.0ms |  16 → 3 | `__libc_malloc` | `<unknown>` |

##### `_init` (`<unknown>`)

|  Change |   Delta |             % |            Time | Samples | Caller                                       | Location                                |
| ------: | ------: | ------------: | --------------: | ------: | -------------------------------------------- | --------------------------------------- |
|  -83.3% | -5.00ms |   6.8% → 1.3% |   6.0ms → 1.0ms |   6 → 1 | `__json_value_module_MOD_string_to_int`      | `./json_value_module.F90:8074 → 8081`   |
|  -22.2% | -4.00ms | 20.5% → 18.4% | 18.0ms → 14.0ms | 18 → 14 | `__json_value_module_MOD_parse_value`        | `./json_value_module.F90:10117 → 10124` |
|  -33.3% | -1.00ms |   3.4% → 2.6% |   3.0ms → 2.0ms |   3 → 2 | `__json_value_module_MOD_json_value_destroy` | `./json_value_module.F90:2237 → 2244`   |
| removed | -1.00ms |   1.1% → 0.0% |     1.0ms → 0ms |   1 → 0 | `__json_value_module_MOD_parse_number`       | `./json_value_module.F90:11192`         |
|  -50.0% | -1.00ms |   2.3% → 1.3% |   2.0ms → 1.0ms |   2 → 1 | `__json_value_module_MOD_parse_string`       | `./json_value_module.F90:11052 → 11080` |

##### `0x10b283` (`/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

| Change |    Delta |      % |            Time | Samples | Caller     | Location                                          |
| -----: | -------: | -----: | --------------: | ------: | ---------- | ------------------------------------------------- |
| -26.8% | -11.00ms | 100.0% | 41.0ms → 30.0ms | 41 → 30 | `0x1093fb` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `0x1093fb` (`/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

| Change |    Delta |             % |            Time | Samples | Caller                                          | Location                                |
| -----: | -------: | ------------: | --------------: | ------: | ----------------------------------------------- | --------------------------------------- |
| -17.1% | -12.00ms | 86.4% → 82.9% | 70.0ms → 58.0ms | 70 → 58 | `__json_string_utilities_MOD_string_to_integer` | `./json_string_utilities.F90:116`       |
| +66.7% |  +4.00ms |  7.4% → 14.3% |  6.0ms → 10.0ms |  6 → 10 | `__json_value_module_MOD_pop_char.part.0`       | `./json_value_module.F90:11318 → 11346` |
| -60.0% |  -3.00ms |   6.2% → 2.9% |   5.0ms → 2.0ms |   5 → 2 | `MAIN__`                                        | `/out/profile.f90:5`                    |

#### Callees

Callees with the largest change in contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `cfree` (`<unknown>`)

|  Change |   Delta |             % |            Time | Samples | Callee    | Location                               |
| ------: | ------: | ------------: | --------------: | ------: | --------- | -------------------------------------- |
|  +20.0% | +5.00ms | 13.5% → 14.0% | 25.0ms → 30.0ms | 25 → 30 | `0x8faf4` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|     new | +4.00ms |   0.0% → 1.9% |     0ms → 4.0ms |   0 → 4 | `0x90213` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| +150.0% | +3.00ms |   1.1% → 2.3% |   2.0ms → 5.0ms |   2 → 5 | `0x8fbc8` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| +300.0% | +3.00ms |   0.5% → 1.9% |   1.0ms → 4.0ms |   1 → 4 | `0x8fad8` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|  -28.6% | -2.00ms |   3.8% → 2.3% |   7.0ms → 5.0ms |   7 → 5 | `0x8faa0` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x108f53` (`/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

| Change |   Delta |             % |           Time | Samples | Callee     | Location                                          |
| -----: | ------: | ------------: | -------------: | ------: | ---------- | ------------------------------------------------- |
| +83.3% | +5.00ms | 60.0% → 47.8% | 6.0ms → 11.0ms |  6 → 11 | `0x107fa7` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| +75.0% | +3.00ms | 40.0% → 30.4% |  4.0ms → 7.0ms |   4 → 7 | `0x107d13` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|    new | +1.00ms |   0.0% → 4.3% |    0ms → 1.0ms |   0 → 1 | `0x107d58` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|    new | +1.00ms |   0.0% → 4.3% |    0ms → 1.0ms |   0 → 1 | `0x107d30` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|    new | +1.00ms |   0.0% → 4.3% |    0ms → 1.0ms |   0 → 1 | `0x107f74` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `0x91c5f` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |   Delta |             % |          Time | Samples | Callee    | Location                               |
| ------: | ------: | ------------: | ------------: | ------: | --------- | -------------------------------------- |
|     new | +3.00ms |   0.0% → 9.4% |   0ms → 3.0ms |   0 → 3 | `0x8fccc` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|     new | +3.00ms |   0.0% → 9.4% |   0ms → 3.0ms |   0 → 3 | `0x8fce0` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|  -28.6% | -2.00ms | 31.8% → 15.6% | 7.0ms → 5.0ms |   7 → 5 | `0x8faf4` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| +100.0% | +2.00ms |  9.1% → 12.5% | 2.0ms → 4.0ms |   2 → 4 | `0x8ffd0` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| +200.0% | +2.00ms |   4.5% → 9.4% | 1.0ms → 3.0ms |   1 → 3 | `0x8fcc4` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `__json_value_module_MOD_string_to_int` (`./json_value_module.F90:8081`)

|  Change |    Delta |           % |           Time | Samples | Callee                    | Location    |
| ------: | -------: | ----------: | -------------: | ------: | ------------------------- | ----------- |
| +220.0% | +11.00ms | 1.3% → 4.2% | 5.0ms → 16.0ms |  5 → 16 | `cfree`                   | `<unknown>` |
| +900.0% |  +9.00ms | 0.3% → 2.6% | 1.0ms → 10.0ms |  1 → 10 | `_gfortran_concat_string` | `<unknown>` |
| removed |  -8.00ms | 2.1% → 0.0% |    8.0ms → 0ms |   8 → 0 | `_gfortran_st_write_done` | `<unknown>` |
|  -83.3% |  -5.00ms | 1.6% → 0.3% |  6.0ms → 1.0ms |   6 → 1 | `_init`                   | `<unknown>` |
|  -66.7% |  -4.00ms | 1.6% → 0.5% |  6.0ms → 2.0ms |   6 → 2 | `log10f32`                | `<unknown>` |

##### `0x107d13` (`/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|  Change |   Delta |             % |          Time | Samples | Callee    | Location                                          |
| ------: | ------: | ------------: | ------------: | ------: | --------- | ------------------------------------------------- |
|     new | +3.00ms |  0.0% → 21.4% |   0ms → 3.0ms |   0 → 3 | `0xfa888` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| removed | -1.00ms |  12.5% → 0.0% |   1.0ms → 0ms |   1 → 0 | `0xfa8dc` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  +33.3% | +1.00ms | 37.5% → 28.6% | 3.0ms → 4.0ms |   3 → 4 | `0xfa887` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| removed | -1.00ms |  12.5% → 0.0% |   1.0ms → 0ms |   1 → 0 | `0xfa858` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|     new | +1.00ms |   0.0% → 7.1% |   0ms → 1.0ms |   0 → 1 | `0xfa820` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `0x8eb3f` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change |   Delta |            % |        Time | Samples | Callee    | Location                               |
| -----: | ------: | -----------: | ----------: | ------: | --------- | -------------------------------------- |
|    new | +2.00ms | 0.0% → 25.0% | 0ms → 2.0ms |   0 → 2 | `0x8e98c` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|    new | +1.00ms | 0.0% → 12.5% | 0ms → 1.0ms |   0 → 1 | `0x8e988` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|    new | +1.00ms | 0.0% → 12.5% | 0ms → 1.0ms |   0 → 1 | `0x8e970` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|    new | +1.00ms | 0.0% → 12.5% | 0ms → 1.0ms |   0 → 1 | `0x8e994` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|    new | +1.00ms | 0.0% → 12.5% | 0ms → 1.0ms |   0 → 1 | `0x8e998` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x112ebb` (`/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|  Change |   Delta |              % |          Time | Samples | Callee    | Location                                          |
| ------: | ------: | -------------: | ------------: | ------: | --------- | ------------------------------------------------- |
| +250.0% | +5.00ms | 100.0% → 87.5% | 2.0ms → 7.0ms |   2 → 7 | `0x1c1b3` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|     new | +1.00ms |   0.0% → 12.5% |   0ms → 1.0ms |   0 → 1 | `0x1c1b8` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `0x107fa7` (`/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|  Change |   Delta |             % |          Time | Samples | Callee     | Location                                          |
| ------: | ------: | ------------: | ------------: | ------: | ---------- | ------------------------------------------------- |
| removed | -2.00ms |  33.3% → 0.0% |   2.0ms → 0ms |   2 → 0 | `0x104184` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| +200.0% | +2.00ms | 16.7% → 27.3% | 1.0ms → 3.0ms |   1 → 3 | `0x10408b` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|     new | +2.00ms |  0.0% → 18.2% |   0ms → 2.0ms |   0 → 2 | `0x104190` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| removed | -1.00ms |  16.7% → 0.0% |   1.0ms → 0ms |   1 → 0 | `0x103608` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| removed | -1.00ms |  16.7% → 0.0% |   1.0ms → 0ms |   1 → 0 | `0x104064` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `0xfa6b3` (`/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|  Change |   Delta |             % |            Time | Samples | Callee    | Location                                          |
| ------: | ------: | ------------: | --------------: | ------: | --------- | ------------------------------------------------- |
|  +36.4% | +4.00ms | 91.7% → 88.2% | 11.0ms → 15.0ms | 11 → 15 | `0x1c42b` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| removed | -1.00ms |   8.3% → 0.0% |     1.0ms → 0ms |   1 → 0 | `0x1a934` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|     new | +1.00ms |   0.0% → 5.9% |     0ms → 1.0ms |   0 → 1 | `0x9d11c` | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
|     new | +1.00ms |   0.0% → 5.9% |     0ms → 1.0ms |   0 → 1 | `0x9d150` | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |

##### `__json_value_module_MOD_json_value_destroy` (`./json_value_module.F90:2244`)

| Change |   Delta |             % |            Time | Samples | Callee                                       | Location                              |
| -----: | ------: | ------------: | --------------: | ------: | -------------------------------------------- | ------------------------------------- |
| +20.0% | +7.00ms | 47.3% → 53.8% | 35.0ms → 42.0ms | 35 → 42 | `cfree`                                      | `<unknown>`                           |
|  +5.4% | +4.00ms |        100.0% | 74.0ms → 78.0ms | 74 → 78 | `__json_value_module_MOD_json_value_destroy` | `./json_value_module.F90:2237 → 2244` |
| +15.0% | +3.00ms | 27.0% → 29.5% | 20.0ms → 23.0ms | 20 → 23 | `__json_value_module_MOD_destroy_json_data`  | `./json_value_module.F90:1387 → 1394` |
| -33.3% | -1.00ms |   4.1% → 2.6% |   3.0ms → 2.0ms |   3 → 2 | `_init`                                      | `<unknown>`                           |

##### `__json_file_module_MOD_json_file_destroy` (`./json_file_module.F90:781`)

| Change |   Delta |      % |            Time | Samples | Callee                                       | Location                              |
| -----: | ------: | -----: | --------------: | ------: | -------------------------------------------- | ------------------------------------- |
|  +5.4% | +4.00ms | 100.0% | 74.0ms → 78.0ms | 74 → 78 | `__json_value_module_MOD_json_value_destroy` | `./json_value_module.F90:2237 → 2244` |

##### `__json_string_utilities_MOD_unescape_string` (`./json_string_utilities.F90:483`)

|  Change |   Delta |           % |        Time | Samples | Callee           | Location    |
| ------: | ------: | ----------: | ----------: | ------: | ---------------- | ----------- |
| removed | -1.00ms | 4.5% → 0.0% | 1.0ms → 0ms |   1 → 0 | `__libc_realloc` | `<unknown>` |

##### `__json_value_module_MOD_to_array` (`./json_value_module.F90:10867`)

| Change |   Delta |             % |        Time | Samples | Callee                                      | Location                       |
| -----: | ------: | ------------: | ----------: | ------: | ------------------------------------------- | ------------------------------ |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `__json_value_module_MOD_destroy_json_data` | `./json_value_module.F90:1394` |

##### `__json_value_module_MOD_json_value_get_child_by_index` (`./json_value_module.F90:5446`)

| Change |   Delta |             % |        Time | Samples | Callee                                                  | Location                       |
| -----: | ------: | ------------: | ----------: | ------: | ------------------------------------------------------- | ------------------------------ |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `__json_value_module_MOD_json_value_get_child_by_index` | `./json_value_module.F90:5446` |

##### `0x10b28f` (`/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|  Change |   Delta |             % |          Time | Samples | Callee     | Location                                          |
| ------: | ------: | ------------: | ------------: | ------: | ---------- | ------------------------------------------------- |
| +300.0% | +6.00ms | 28.6% → 72.7% | 2.0ms → 8.0ms |   2 → 8 | `0x112ebb` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  -33.3% | -1.00ms | 42.9% → 18.2% | 3.0ms → 2.0ms |   3 → 2 | `0x112ecb` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| removed | -1.00ms |  14.3% → 0.0% |   1.0ms → 0ms |   1 → 0 | `0x1c1a4`  | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `0x1098bf` (`/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|  Change |   Delta |             % |          Time | Samples | Callee     | Location                                          |
| ------: | ------: | ------------: | ------------: | ------: | ---------- | ------------------------------------------------- |
|  +75.0% | +3.00ms | 20.0% → 29.2% | 4.0ms → 7.0ms |   4 → 7 | `0x107d13` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| removed | -1.00ms |   5.0% → 0.0% |   1.0ms → 0ms |   1 → 0 | `0x1a650`  | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| removed | -1.00ms |   5.0% → 0.0% |   1.0ms → 0ms |   1 → 0 | `0x109150` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| removed | -1.00ms |   5.0% → 0.0% |   1.0ms → 0ms |   1 → 0 | `0x109164` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| removed | -1.00ms |   5.0% → 0.0% |   1.0ms → 0ms |   1 → 0 | `0x10c6a0` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `0x1c42b` (`/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

| Change |   Delta |              % |            Time | Samples | Callee    | Location                               |
| -----: | ------: | -------------: | --------------: | ------: | --------- | -------------------------------------- |
|    new | +2.00ms |   0.0% → 13.3% |     0ms → 2.0ms |   0 → 2 | `strnlen` | `<unknown>`                            |
|  +9.1% | +1.00ms | 100.0% → 80.0% | 11.0ms → 12.0ms | 11 → 12 | `strndup` | `<unknown>`                            |
|    new | +1.00ms |    0.0% → 6.7% |     0ms → 1.0ms |   0 → 1 | `0x27310` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `main` (`/out/profile.f90:6`)

|  Change |     Delta |            % |          Time |       Samples | Callee                    | Location             |
| ------: | --------: | -----------: | ------------: | ------------: | ------------------------- | -------------------- |
|   -4.6% | -187.00ms |       100.0% | 4.04s → 3.86s | 4,042 → 3,855 | `MAIN__`                  | `/out/profile.f90:5` |
| removed |   -1.00ms | <0.1% → 0.0% |   1.0ms → 0ms |         1 → 0 | `_gfortran_st_write_done` | `<unknown>`          |

##### `0x27743` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change |     Delta |      % |          Time |       Samples | Callee | Location             |
| -----: | --------: | -----: | ------------: | ------------: | ------ | -------------------- |
|  -4.7% | -188.00ms | 100.0% | 4.04s → 3.86s | 4,043 → 3,855 | `main` | `/out/profile.f90:6` |

##### `__libc_start_main` (`<unknown>`)

| Change |     Delta |      % |          Time |       Samples | Callee    | Location                               |
| -----: | --------: | -----: | ------------: | ------------: | --------- | -------------------------------------- |
|  -4.7% | -188.00ms | 100.0% | 4.04s → 3.86s | 4,043 → 3,855 | `0x27743` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `_start` (`<unknown>`)

| Change |     Delta |      % |          Time |       Samples | Callee              | Location    |
| -----: | --------: | -----: | ------------: | ------------: | ------------------- | ----------- |
|  -4.7% | -188.00ms | 100.0% | 4.04s → 3.86s | 4,043 → 3,855 | `__libc_start_main` | `<unknown>` |

##### `MAIN__` (`/out/profile.f90:5`)

| Change |     Delta |           % |            Time |       Samples | Callee                                        | Location                                          |
| -----: | --------: | ----------: | --------------: | ------------: | --------------------------------------------- | ------------------------------------------------- |
|  -4.7% | -183.00ms |       97.1% |   3.93s → 3.74s | 3,925 → 3,742 | `__json_file_module_MOD_json_file_load`       | `./json_file_module.F90:842 → 854`                |
| -19.4% |   -6.00ms | 0.8% → 0.6% | 31.0ms → 25.0ms |       31 → 25 | `__json_file_module_MOD_json_file_get_string` | `./json_file_module.F90:1837 → 1863`              |
|  +5.4% |   +4.00ms | 1.8% → 2.0% | 74.0ms → 78.0ms |       74 → 78 | `__json_file_module_MOD_json_file_destroy`    | `./json_file_module.F90:769 → 781`                |
| -60.0% |   -3.00ms |        0.1% |   5.0ms → 2.0ms |         5 → 2 | `0x1093fb`                                    | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| -20.0% |   -1.00ms |        0.1% |   5.0ms → 4.0ms |         5 → 4 | `0x109623`                                    | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `__json_value_module_MOD_json_parse_file` (`./json_value_module.F90:9721`)

| Change |     Delta |             % |            Time |       Samples | Callee                                 | Location                                |
| -----: | --------: | ------------: | --------------: | ------------: | -------------------------------------- | --------------------------------------- |
|  -4.2% | -159.00ms | 97.2% → 97.7% |   3.82s → 3.66s | 3,816 → 3,657 | `__json_value_module_MOD_parse_object` | `./json_value_module.F90:10882 → 10889` |
| -28.4% |  -27.00ms |   2.4% → 1.8% | 95.0ms → 68.0ms |       95 → 68 | `_gfortran_st_open`                    | `<unknown>`                             |
| +30.0% |   +3.00ms |          0.3% | 10.0ms → 13.0ms |       10 → 13 | `__json_value_module_MOD_parse_value`  | `./json_value_module.F90:10117 → 10124` |

##### `__json_file_module_MOD_json_file_load` (`./json_file_module.F90:854`)

| Change |     Delta |      % |          Time |       Samples | Callee                                    | Location                              |
| -----: | --------: | -----: | ------------: | ------------: | ----------------------------------------- | ------------------------------------- |
|  -4.7% | -183.00ms | 100.0% | 3.93s → 3.74s | 3,925 → 3,742 | `__json_value_module_MOD_json_parse_file` | `./json_value_module.F90:9714 → 9721` |

##### `__json_value_module_MOD_pop_char.part.0` (`./json_value_module.F90:11346`)

|  Change |    Delta |            % |            Time | Samples | Callee     | Location                                          |
| ------: | -------: | -----------: | --------------: | ------: | ---------- | ------------------------------------------------- |
|  -25.4% | -18.00ms |  3.3% → 2.6% | 71.0ms → 53.0ms | 71 → 53 | `0x10a47b` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  +66.7% |  +4.00ms |  0.3% → 0.5% |  6.0ms → 10.0ms |  6 → 10 | `0x1093fb` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| removed |  -2.00ms |  0.1% → 0.0% |     2.0ms → 0ms |   2 → 0 | `0x109f9c` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  -50.0% |  -2.00ms |  0.2% → 0.1% |   4.0ms → 2.0ms |   4 → 2 | `0x1098bf` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| +100.0% |  +1.00ms | <0.1% → 0.1% |   1.0ms → 2.0ms |   1 → 2 | `0x109f17` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `__json_value_module_MOD_parse_object` (`./json_value_module.F90:10889`)

| Change |     Delta |             % |              Time |       Samples | Callee                                    | Location                                |
| -----: | --------: | ------------: | ----------------: | ------------: | ----------------------------------------- | --------------------------------------- |
|  -4.1% | -156.00ms |         99.5% |     3.80s → 3.64s | 3,796 → 3,640 | `__json_value_module_MOD_parse_object`    | `./json_value_module.F90:10882 → 10889` |
|  -4.0% | -154.00ms | 99.8% → 99.9% |     3.81s → 3.65s | 3,808 → 3,654 | `__json_value_module_MOD_parse_array`     | `./json_value_module.F90:10987 → 11003` |
| -11.2% | -136.00ms | 31.7% → 29.4% |     1.21s → 1.07s | 1,210 → 1,074 | `__json_value_module_MOD_parse_value`     | `./json_value_module.F90:10117 → 10124` |
|  -7.5% |  -45.00ms | 15.8% → 15.3% | 604.0ms → 559.0ms |     604 → 559 | `__json_value_module_MOD_pop_char.part.0` | `./json_value_module.F90:11318 → 11346` |
|  +3.9% |  +35.00ms | 23.3% → 25.2% | 888.0ms → 923.0ms |     888 → 923 | `__json_value_module_MOD_parse_string`    | `./json_value_module.F90:11052 → 11080` |

##### `__json_value_module_MOD_parse_array` (`./json_value_module.F90:11003`)

|  Change |     Delta |            % |            Time |       Samples | Callee                                      | Location                                |
| ------: | --------: | -----------: | --------------: | ------------: | ------------------------------------------- | --------------------------------------- |
|   -4.0% | -151.00ms |        99.9% |   3.80s → 3.65s | 3,803 → 3,652 | `__json_value_module_MOD_parse_object`      | `./json_value_module.F90:10882 → 10889` |
|  -61.5% |   -8.00ms |  0.3% → 0.1% |  13.0ms → 5.0ms |        13 → 5 | `__json_value_module_MOD_pop_char.part.0`   | `./json_value_module.F90:11318 → 11346` |
|  +10.2% |   +6.00ms |  1.5% → 1.8% | 59.0ms → 65.0ms |       59 → 65 | `__json_value_module_MOD_parse_number`      | `./json_value_module.F90:11192 → 11220` |
|  +62.5% |   +5.00ms |  0.2% → 0.4% |  8.0ms → 13.0ms |        8 → 13 | `__json_value_module_MOD_json_value_create` | `./json_value_module.F90:2204 → 2211`   |
| +400.0% |   +4.00ms | <0.1% → 0.1% |   1.0ms → 5.0ms |         1 → 5 | `_gfortran_string_len_trim`                 | `<unknown>`                             |

##### `__json_value_module_MOD_parse_value` (`./json_value_module.F90:10124`)

| Change |    Delta |             % |              Time |   Samples | Callee                                    | Location                                |
| -----: | -------: | ------------: | ----------------: | --------: | ----------------------------------------- | --------------------------------------- |
| -11.4% | -98.00ms | 68.6% → 68.2% | 862.0ms → 764.0ms | 862 → 764 | `__json_value_module_MOD_parse_string`    | `./json_value_module.F90:11052 → 11080` |
| -48.0% | -12.00ms |   2.0% → 1.2% |   25.0ms → 13.0ms |   25 → 13 | `__libc_realloc`                          | `<unknown>`                             |
| -13.6% |  -8.00ms |   4.7% → 4.5% |   59.0ms → 51.0ms |   59 → 51 | `__json_value_module_MOD_parse_for_chars` | `./json_value_module.F90:11145 → 11173` |
|  -4.1% |  -7.00ms | 13.5% → 14.5% | 170.0ms → 163.0ms | 170 → 163 | `__json_value_module_MOD_pop_char.part.0` | `./json_value_module.F90:11318 → 11346` |
| -50.0% |  -5.00ms |   0.8% → 0.4% |    10.0ms → 5.0ms |    10 → 5 | `__json_value_module_MOD_to_string`       | `./json_value_module.F90:10755 → 10762` |

##### `__json_value_module_MOD_parse_string` (`./json_value_module.F90:11080`)

| Change |    Delta |             % |              Time |       Samples | Callee                                        | Location                                |
| -----: | -------: | ------------: | ----------------: | ------------: | --------------------------------------------- | --------------------------------------- |
|  -7.0% | -89.00ms | 73.1% → 70.5% |     1.28s → 1.19s | 1,279 → 1,190 | `__json_value_module_MOD_pop_char.part.0`     | `./json_value_module.F90:11318 → 11346` |
| +17.7% | +22.00ms |   7.1% → 8.7% | 124.0ms → 146.0ms |     124 → 146 | `_gfortran_string_scan`                       | `<unknown>`                             |
| +18.2% |  +4.00ms |   1.3% → 1.5% |   22.0ms → 26.0ms |       22 → 26 | `__json_string_utilities_MOD_unescape_string` | `./json_string_utilities.F90:483`       |
|  -4.1% |  -4.00ms |          5.6% |   98.0ms → 94.0ms |       98 → 94 | `__libc_malloc`                               | `<unknown>`                             |
| +28.6% |  +4.00ms |   0.8% → 1.1% |   14.0ms → 18.0ms |       14 → 18 | `cfree`                                       | `<unknown>`                             |

##### `__libc_malloc` (`<unknown>`)

|  Change |    Delta |             % |            Time | Samples | Callee    | Location                               |
| ------: | -------: | ------------: | --------------: | ------: | --------- | -------------------------------------- |
|  -33.0% | -31.00ms | 22.6% → 16.5% | 94.0ms → 63.0ms | 94 → 63 | `0x9102b` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|  -81.3% | -13.00ms |   3.8% → 0.8% |  16.0ms → 3.0ms |  16 → 3 | `0x9155f` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| +109.1% | +12.00ms |   2.6% → 6.0% | 11.0ms → 23.0ms | 11 → 23 | `0x90dc0` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|  -43.5% | -10.00ms |   5.5% → 3.4% | 23.0ms → 13.0ms | 23 → 13 | `0x9123c` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| +100.0% |  +8.00ms |   1.9% → 4.2% |  8.0ms → 16.0ms |  8 → 16 | `0x91234` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x1c1b3` (`/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

| Change |    Delta |      % |              Time |   Samples | Callee          | Location    |
| -----: | -------: | -----: | ----------------: | --------: | --------------- | ----------- |
| -24.2% | -32.00ms | 100.0% | 132.0ms → 100.0ms | 132 → 100 | `__libc_malloc` | `<unknown>` |

##### `0x9102b` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |    Delta |            % |           Time | Samples | Callee     | Location                               |
| ------: | -------: | -----------: | -------------: | ------: | ---------- | -------------------------------------- |
|  -66.7% | -10.00ms | 16.0% → 7.9% | 15.0ms → 5.0ms |  15 → 5 | `0x8ea9c`  | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|  -87.5% |  -7.00ms |  8.5% → 1.6% |  8.0ms → 1.0ms |   8 → 1 | `0x1376f4` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| +300.0% |  +6.00ms | 2.1% → 12.7% |  2.0ms → 8.0ms |   2 → 8 | `0x8eb3f`  | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|  -71.4% |  -5.00ms |  7.4% → 3.2% |  7.0ms → 2.0ms |   7 → 2 | `0x8eb04`  | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|  -50.0% |  -4.00ms |  8.5% → 6.3% |  8.0ms → 4.0ms |   8 → 4 | `0x8eaa4`  | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x1029eb` (`/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

| Change |    Delta |             % |            Time | Samples | Callee     | Location                                          |
| -----: | -------: | ------------: | --------------: | ------: | ---------- | ------------------------------------------------- |
| -25.6% | -20.00ms | 82.1% → 85.3% | 78.0ms → 58.0ms | 78 → 58 | `0x10be83` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| -41.2% |  -7.00ms | 17.9% → 14.7% | 17.0ms → 10.0ms | 17 → 10 | `0x10c997` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `_gfortran_st_open` (`<unknown>`)

| Change |    Delta |      % |            Time | Samples | Callee     | Location                                          |
| -----: | -------: | -----: | --------------: | ------: | ---------- | ------------------------------------------------- |
| -28.4% | -27.00ms | 100.0% | 95.0ms → 68.0ms | 95 → 68 | `0x1029eb` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `0x10be83` (`/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

| Change |    Delta |      % |            Time | Samples | Callee    | Location                                          |
| -----: | -------: | -----: | --------------: | ------: | --------- | ------------------------------------------------- |
| -25.6% | -20.00ms | 100.0% | 78.0ms → 58.0ms | 78 → 58 | `0x1c1b3` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `__libc_realloc` (`<unknown>`)

|  Change |    Delta |             % |            Time | Samples | Callee    | Location                               |
| ------: | -------: | ------------: | --------------: | ------: | --------- | -------------------------------------- |
|  +45.5% | +10.00ms | 22.7% → 41.6% | 22.0ms → 32.0ms | 22 → 32 | `0x91c5f` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|  -57.1% |  -4.00ms |   7.2% → 3.9% |   7.0ms → 3.0ms |   7 → 3 | `0x91b93` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed |  -3.00ms |   3.1% → 0.0% |     3.0ms → 0ms |   3 → 0 | `0x91aa4` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed |  -2.00ms |   2.1% → 0.0% |     2.0ms → 0ms |   2 → 0 | `0x91bfb` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| +200.0% |  +2.00ms |   1.0% → 3.9% |   1.0ms → 3.0ms |   1 → 3 | `0x91b10` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x10a47b` (`/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

| Change |    Delta |             % |            Time | Samples | Callee     | Location                                          |
| -----: | -------: | ------------: | --------------: | ------: | ---------- | ------------------------------------------------- |
| -31.8% | -14.00ms | 62.0% → 56.6% | 44.0ms → 30.0ms | 44 → 30 | `0x10c353` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| -30.8% |  -8.00ms | 36.6% → 34.0% | 26.0ms → 18.0ms | 26 → 18 | `0x10c300` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|    new |  +1.00ms |   0.0% → 1.9% |     0ms → 1.0ms |   0 → 1 | `0x10c2c4` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|    new |  +1.00ms |   0.0% → 1.9% |     0ms → 1.0ms |   0 → 1 | `0x19fd4`  | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|    new |  +1.00ms |   0.0% → 1.9% |     0ms → 1.0ms |   0 → 1 | `0x9d200`  | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |

##### `__json_value_module_MOD_parse_number` (`./json_value_module.F90:11220`)

|  Change |    Delta |             % |              Time |   Samples | Callee                                    | Location                                |
| ------: | -------: | ------------: | ----------------: | --------: | ----------------------------------------- | --------------------------------------- |
|  -18.8% | -12.00ms | 13.4% → 11.1% |   64.0ms → 52.0ms |   64 → 52 | `__json_value_module_MOD_pop_char.part.0` | `./json_value_module.F90:11318 → 11346` |
|   +1.9% |  +7.00ms | 78.9% → 81.9% | 378.0ms → 385.0ms | 378 → 385 | `__json_value_module_MOD_string_to_int`   | `./json_value_module.F90:8074 → 8081`   |
| removed |  -4.00ms |   0.8% → 0.0% |       4.0ms → 0ms |     4 → 0 | `__json_value_module_MOD_string_to_dble`  | `./json_value_module.F90:8101`          |
|  +12.5% |  +2.00ms |   3.3% → 3.8% |   16.0ms → 18.0ms |   16 → 18 | `__libc_malloc`                           | `<unknown>`                             |
| removed |  -2.00ms |   0.4% → 0.0% |       2.0ms → 0ms |     2 → 0 | `__json_value_module_MOD_to_integer`      | `./json_value_module.F90:10690`         |

##### `__json_value_module_MOD_parse_for_chars` (`./json_value_module.F90:11173`)

| Change |   Delta |             % |            Time | Samples | Callee                                    | Location                                |
| -----: | ------: | ------------: | --------------: | ------: | ----------------------------------------- | --------------------------------------- |
| -15.4% | -8.00ms | 88.1% → 86.3% | 52.0ms → 44.0ms | 52 → 44 | `__json_value_module_MOD_pop_char.part.0` | `./json_value_module.F90:11318 → 11346` |

##### `__json_file_module_MOD_json_file_get_string` (`./json_file_module.F90:1863`)

|  Change |   Delta |             % |            Time | Samples | Callee                                            | Location                                    |
| ------: | ------: | ------------: | --------------: | ------: | ------------------------------------------------- | ------------------------------------------- |
|  -17.2% | -5.00ms | 93.5% → 96.0% | 29.0ms → 24.0ms | 29 → 24 | `__json_value_module_MOD_json_get_string_by_path` | `./json_get_scalar_by_path.inc:9182 → 9189` |
| removed | -1.00ms |   3.2% → 0.0% |     1.0ms → 0ms |   1 → 0 | `__json_value_module_MOD_json_get_string_by_path` | `./json_value_module.F90:9182`              |
| removed | -1.00ms |   3.2% → 0.0% |     1.0ms → 0ms |   1 → 0 | `__json_value_module_MOD_json_get_by_path`        | `./json_value_module.F90:6495`              |
|     new | +1.00ms |   0.0% → 4.0% |     0ms → 1.0ms |   0 → 1 | `__libc_malloc`                                   | `<unknown>`                                 |

##### `__json_value_module_MOD_to_string` (`./json_value_module.F90:10762`)

|  Change |   Delta |             % |          Time | Samples | Callee                                      | Location                       |
| ------: | ------: | ------------: | ------------: | ------: | ------------------------------------------- | ------------------------------ |
|  -66.7% | -4.00ms | 60.0% → 40.0% | 6.0ms → 2.0ms |   6 → 2 | `__libc_malloc`                             | `<unknown>`                    |
| removed | -2.00ms |  20.0% → 0.0% |   2.0ms → 0ms |   2 → 0 | `__json_value_module_MOD_destroy_json_data` | `./json_value_module.F90:1387` |

##### `__json_value_module_MOD_json_get_string_by_path` (`./json_get_scalar_by_path.inc:9189`)

|  Change |   Delta |             % |            Time | Samples | Callee                                     | Location                              |
| ------: | ------: | ------------: | --------------: | ------: | ------------------------------------------ | ------------------------------------- |
|   -8.0% | -2.00ms | 86.2% → 95.8% | 25.0ms → 23.0ms | 25 → 23 | `__json_value_module_MOD_json_get_by_path` | `./json_value_module.F90:6495 → 6502` |
| removed | -1.00ms |   3.4% → 0.0% |     1.0ms → 0ms |   1 → 0 | `__json_value_module_MOD_json_get_string`  | `./json_value_module.F90:9078`        |
| removed | -1.00ms |   3.4% → 0.0% |     1.0ms → 0ms |   1 → 0 | `cfree`                                    | `<unknown>`                           |

##### `__json_value_module_MOD_json_value_create` (`./json_value_module.F90:2211`)

| Change |   Delta |             % |            Time | Samples | Callee          | Location    |
| -----: | ------: | ------------: | --------------: | ------: | --------------- | ----------- |
|  -2.3% | -2.00ms | 96.6% → 98.8% | 86.0ms → 84.0ms | 86 → 84 | `__libc_malloc` | `<unknown>` |

##### `__json_value_module_MOD_name_strings_equal` (`./json_value_module.F90:1244`)

|  Change |   Delta |            % |        Time | Samples | Callee                     | Location                                          |
| ------: | ------: | -----------: | ----------: | ------: | -------------------------- | ------------------------------------------------- |
| removed | -1.00ms | 25.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `_gfortran_compare_string` | `<unknown>`                                       |
| removed | -1.00ms | 25.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `0x1ac04`                  | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| removed | -1.00ms | 25.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `memcmp`                   | `<unknown>`                                       |

##### `__json_value_module_MOD_json_value_get_child_by_name` (`./json_value_module.F90:5584`)

|  Change |   Delta |             % |        Time | Samples | Callee                                                 | Location                       |
| ------: | ------: | ------------: | ----------: | ------: | ------------------------------------------------------ | ------------------------------ |
| removed | -4.00ms | 100.0% → 0.0% | 4.0ms → 0ms |   4 → 0 | `__json_value_module_MOD_name_strings_equal`           | `./json_value_module.F90:1244` |
| removed | -4.00ms | 100.0% → 0.0% | 4.0ms → 0ms |   4 → 0 | `__json_value_module_MOD_json_value_get_child_by_name` | `./json_value_module.F90:5584` |

##### `__json_string_utilities_MOD_string_to_real` (`./json_string_utilities.F90:224`)

|  Change |   Delta |             % |        Time | Samples | Callee     | Location                                          |
| ------: | ------: | ------------: | ----------: | ------: | ---------- | ------------------------------------------------- |
| removed | -4.00ms | 100.0% → 0.0% | 4.0ms → 0ms |   4 → 0 | `0x10168f` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `__json_value_module_MOD_string_to_dble` (`./json_value_module.F90:8101`)

|  Change |   Delta |             % |        Time | Samples | Callee                                       | Location                          |
| ------: | ------: | ------------: | ----------: | ------: | -------------------------------------------- | --------------------------------- |
| removed | -4.00ms | 100.0% → 0.0% | 4.0ms → 0ms |   4 → 0 | `__json_string_utilities_MOD_string_to_real` | `./json_string_utilities.F90:224` |

##### `__json_value_module_MOD_json_get_by_path` (`./json_value_module.F90:6502`)

|  Change |   Delta |              % |            Time | Samples | Callee                                             | Location                              |
| ------: | ------: | -------------: | --------------: | ------: | -------------------------------------------------- | ------------------------------------- |
|   -4.2% | -1.00ms | 92.3% → 100.0% | 24.0ms → 23.0ms | 24 → 23 | `__json_value_module_MOD_json_get_by_path_default` | `./json_value_module.F90:6787 → 6794` |
| removed | -1.00ms |    3.8% → 0.0% |     1.0ms → 0ms |   1 → 0 | `_gfortran_string_len_trim`                        | `<unknown>`                           |

##### `0x109623` (`/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

| Change |    Delta |             % |            Time | Samples | Callee    | Location                                          |
| -----: | -------: | ------------: | --------------: | ------: | --------- | ------------------------------------------------- |
| -26.5% | -13.00ms | 37.7% → 31.6% | 49.0ms → 36.0ms | 49 → 36 | `0xfa6bf` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| +41.7% |  +5.00ms |  9.2% → 14.9% | 12.0ms → 17.0ms | 12 → 17 | `0xfa6b3` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| -40.0% |  -4.00ms |   7.7% → 5.3% |  10.0ms → 6.0ms |  10 → 6 | `0xfa727` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| -20.0% |  -4.00ms | 15.4% → 14.0% | 20.0ms → 16.0ms | 20 → 16 | `0x9e658` | `/usr/lib/aarch64-linux-gnu/libc.so.6`            |
|  -6.3% |  -2.00ms | 24.6% → 26.3% | 32.0ms → 30.0ms | 32 → 30 | `0xfa7fb` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `0x10bd0b` (`/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

| Change |    Delta |      % |            Time | Samples | Callee   | Location    |
| -----: | -------: | -----: | --------------: | ------: | -------- | ----------- |
| -31.8% | -14.00ms | 100.0% | 44.0ms → 30.0ms | 44 → 30 | `__read` | `<unknown>` |

##### `0x10c353` (`/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

| Change |    Delta |      % |            Time | Samples | Callee     | Location                                          |
| -----: | -------: | -----: | --------------: | ------: | ---------- | ------------------------------------------------- |
| -31.8% | -14.00ms | 100.0% | 44.0ms → 30.0ms | 44 → 30 | `0x10bd0b` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `0xfa6bf` (`/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

| Change |    Delta |              % |            Time | Samples | Callee    | Location                                          |
| -----: | -------: | -------------: | --------------: | ------: | --------- | ------------------------------------------------- |
| -32.7% | -16.00ms | 100.0% → 91.7% | 49.0ms → 33.0ms | 49 → 33 | `0x1c1b3` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|    new |  +1.00ms |    0.0% → 2.8% |     0ms → 1.0ms |   0 → 1 | `0x1ac94` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|    new |  +1.00ms |    0.0% → 2.8% |     0ms → 1.0ms |   0 → 1 | `0x1c1b8` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|    new |  +1.00ms |    0.0% → 2.8% |     0ms → 1.0ms |   0 → 1 | `0x1c1b4` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `0x9155f` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |   Delta |             % |          Time | Samples | Callee    | Location                               |
| ------: | ------: | ------------: | ------------: | ------: | --------- | -------------------------------------- |
| removed | -6.00ms |  37.5% → 0.0% |   6.0ms → 0ms |   6 → 0 | `0x8e960` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|  -75.0% | -3.00ms | 25.0% → 33.3% | 4.0ms → 1.0ms |   4 → 1 | `0x8e970` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|  -66.7% | -2.00ms | 18.8% → 33.3% | 3.0ms → 1.0ms |   3 → 1 | `0x8e98c` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|  -50.0% | -1.00ms | 12.5% → 33.3% | 2.0ms → 1.0ms |   2 → 1 | `0x8e9cc` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed | -1.00ms |   6.3% → 0.0% |   1.0ms → 0ms |   1 → 0 | `0x8e9a0` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x10b283` (`/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

|  Change |   Delta |             % |            Time | Samples | Callee                      | Location                                          |
| ------: | ------: | ------------: | --------------: | ------: | --------------------------- | ------------------------------------------------- |
|  -30.4% | -7.00ms | 56.1% → 53.3% | 23.0ms → 16.0ms | 23 → 16 | `0x10ab63`                  | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|  +66.7% | +4.00ms | 14.6% → 33.3% |  6.0ms → 10.0ms |  6 → 10 | `_gfortran_string_len_trim` | `<unknown>`                                       |
| removed | -2.00ms |   4.9% → 0.0% |     2.0ms → 0ms |   2 → 0 | `0x10abf4`                  | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| removed | -1.00ms |   2.4% → 0.0% |     1.0ms → 0ms |   1 → 0 | `0x10aad8`                  | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| removed | -1.00ms |   2.4% → 0.0% |     1.0ms → 0ms |   1 → 0 | `0x10ac78`                  | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

##### `0x1093fb` (`/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`)

| Change |    Delta |             % |            Time | Samples | Callee     | Location                                          |
| -----: | -------: | ------------: | --------------: | ------: | ---------- | ------------------------------------------------- |
| -26.8% | -11.00ms | 50.6% → 42.9% | 41.0ms → 30.0ms | 41 → 30 | `0x10b283` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| -66.7% |  -8.00ms |  14.8% → 5.7% |  12.0ms → 4.0ms |  12 → 4 | `0x10b263` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| +57.1% |  +4.00ms |  8.6% → 15.7% |  7.0ms → 11.0ms |  7 → 11 | `0x10b28f` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
| +27.3% |  +3.00ms | 13.6% → 20.0% | 11.0ms → 14.0ms | 11 → 14 | `0x10b26f` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |
|    new |  +3.00ms |   0.0% → 4.3% |     0ms → 3.0ms |   0 → 3 | `0x10a92b` | `/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0` |

## Hottest call stacks

### Regressions

Call stacks with the largest increase in time spent in their leaf frame.

Common call stack: `__json_value_module_MOD_parse_object` (`./json_value_module.F90:10889`) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_array` (11003) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_json_parse_file` (9721) ← `__json_file_module_MOD_json_file_load` (`./json_file_module.F90:854`) ← `MAIN__` (`/out/profile.f90:5`) ← `main` (6) ← `0x27743` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `__libc_start_main` ← `_start`

|  Change |    Delta |            % |            Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ------: | -------: | -----------: | --------------: | ------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  +55.6% | +10.00ms |  0.4% → 0.7% | 18.0ms → 28.0ms | 18 → 28 | `__json_value_module_MOD_pop_char.part.0` (`./json_value_module.F90:11346`) ← `__json_value_module_MOD_parse_string` (11080) ← `__json_value_module_MOD_parse_value` (10124) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| +128.6% |  +9.00ms |  0.2% → 0.4% |  7.0ms → 16.0ms |  7 → 16 | `__json_value_module_MOD_pop_char.part.0` (`./json_value_module.F90:11346`) ← `__json_value_module_MOD_parse_string` (11080) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  +72.7% |  +8.00ms |  0.3% → 0.5% | 11.0ms → 19.0ms | 11 → 19 | `__json_value_module_MOD_pop_char.part.0` (`./json_value_module.F90:11346`) ← `__json_value_module_MOD_parse_string` (11080) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| +160.0% |  +8.00ms |  0.1% → 0.3% |  5.0ms → 13.0ms |  5 → 13 | `_gfortran_string_scan` ← `__json_value_module_MOD_parse_string` (`./json_value_module.F90:11080`) ← `__json_value_module_MOD_parse_value` (10124) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| +133.3% |  +8.00ms |  0.1% → 0.4% |  6.0ms → 14.0ms |  6 → 14 | `__json_value_module_MOD_pop_char.part.0` (`./json_value_module.F90:11346`) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  +77.8% |  +7.00ms |  0.2% → 0.4% |  9.0ms → 16.0ms |  9 → 16 | `__json_value_module_MOD_pop_char.part.0` (`./json_value_module.F90:11346`) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  +66.7% |  +6.00ms |  0.2% → 0.4% |  9.0ms → 15.0ms |  9 → 15 | `__json_value_module_MOD_pop_char.part.0` (`./json_value_module.F90:11346`) ← `__json_value_module_MOD_parse_string` (11080) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889)                                                                                                                                                                                                                                                                                                                             |
|  +33.3% |  +6.00ms |  0.4% → 0.6% | 18.0ms → 24.0ms | 18 → 24 | `__json_value_module_MOD_pop_char.part.0` (`./json_value_module.F90:11346`) ← `__json_value_module_MOD_parse_string` (11080) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|     new |  +6.00ms |  0.0% → 0.2% |     0ms → 6.0ms |   0 → 6 | `_gfortran_string_scan` ← `__json_value_module_MOD_parse_string` (`./json_value_module.F90:11080`) ← `__json_value_module_MOD_parse_value` (10124) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) |
| +100.0% |  +5.00ms |  0.1% → 0.3% |  5.0ms → 10.0ms |  5 → 10 | `__json_value_module_MOD_pop_char.part.0` (`./json_value_module.F90:11346`) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  +45.5% |  +5.00ms |  0.3% → 0.4% | 11.0ms → 16.0ms | 11 → 16 | `__json_value_module_MOD_pop_char.part.0` (`./json_value_module.F90:11346`) ← `__json_value_module_MOD_parse_string` (11080) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| +125.0% |  +5.00ms |  0.1% → 0.2% |   4.0ms → 9.0ms |   4 → 9 | `__json_value_module_MOD_pop_char.part.0` (`./json_value_module.F90:11346`) ← `__json_value_module_MOD_parse_string` (11080) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  +83.3% |  +5.00ms |  0.1% → 0.3% |  6.0ms → 11.0ms |  6 → 11 | `__json_value_module_MOD_pop_char.part.0` (`./json_value_module.F90:11346`) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889)                                                                                                                                                                                                                           |
| +500.0% |  +5.00ms | <0.1% → 0.2% |   1.0ms → 6.0ms |   1 → 6 | `__json_value_module_MOD_pop_char.part.0` (`./json_value_module.F90:11346`) ← `__json_value_module_MOD_parse_string` (11080) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| +166.7% |  +5.00ms |  0.1% → 0.2% |   3.0ms → 8.0ms |   3 → 8 | `__json_string_utilities_MOD_unescape_string` (`./json_string_utilities.F90:483`) ← `__json_value_module_MOD_parse_string` (`./json_value_module.F90:11080`) ← `__json_value_module_MOD_parse_value` (10124) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  +83.3% |  +5.00ms |  0.1% → 0.3% |  6.0ms → 11.0ms |  6 → 11 | `__json_value_module_MOD_pop_char.part.0` (`./json_value_module.F90:11346`) ← `__json_value_module_MOD_parse_string` (11080) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889)                                                                                                                         |
|  +26.7% |  +4.00ms |  0.4% → 0.5% | 15.0ms → 19.0ms | 15 → 19 | `__json_value_module_MOD_pop_char.part.0` (`./json_value_module.F90:11346`) ← `__json_value_module_MOD_parse_string` (11080) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  +66.7% |  +4.00ms |  0.1% → 0.3% |  6.0ms → 10.0ms |  6 → 10 | `__json_value_module_MOD_pop_char.part.0` (`./json_value_module.F90:11346`) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  +21.1% |  +4.00ms |  0.5% → 0.6% | 19.0ms → 23.0ms | 19 → 23 | `__json_value_module_MOD_pop_char.part.0` (`./json_value_module.F90:11346`) ← `__json_value_module_MOD_parse_string` (11080) ← `__json_value_module_MOD_parse_value` (10124) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| +400.0% |  +4.00ms | <0.1% → 0.1% |   1.0ms → 5.0ms |   1 → 5 | `__json_value_module_MOD_parse_string` (`./json_value_module.F90:11080`) ← `__json_value_module_MOD_parse_value` (10124)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |

### Improvements

Call stacks with the largest decrease in time spent in their leaf frame.

Common call stack: `__json_value_module_MOD_json_parse_file` (`./json_value_module.F90:9721`) ← `__json_file_module_MOD_json_file_load` (`./json_file_module.F90:854`) ← `MAIN__` (`/out/profile.f90:5`) ← `main` (6) ← `0x27743` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `__libc_start_main` ← `_start`

| Change |    Delta |           % |            Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| -----: | -------: | ----------: | --------------: | ------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| -18.5% | -17.00ms | 2.3% → 1.9% | 92.0ms → 75.0ms | 92 → 75 | `__json_value_module_MOD_pop_char.part.0` (`./json_value_module.F90:11346`) ← `__json_value_module_MOD_parse_string` (11080) ← `__json_value_module_MOD_parse_value` (10124) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_array` (11003) ← `__json_value_module_MOD_parse_object` (10889)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| -55.0% | -11.00ms | 0.5% → 0.2% |  20.0ms → 9.0ms |  20 → 9 | `__json_value_module_MOD_pop_char.part.0` (`./json_value_module.F90:11346`) ← `__json_value_module_MOD_parse_string` (11080) ← `__json_value_module_MOD_parse_value` (10124) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_array` (11003) ← `__json_value_module_MOD_parse_object` (10889) |
| -73.3% | -11.00ms | 0.4% → 0.1% |  15.0ms → 4.0ms |  15 → 4 | `__read` ← `0x10bd0b` (`/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`) ← `0x10c353` ← `0x10a47b` ← `__json_value_module_MOD_pop_char.part.0` (`./json_value_module.F90:11346`) ← `__json_value_module_MOD_parse_string` (11080) ← `__json_value_module_MOD_parse_value` (10124) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_array` (11003) ← `__json_value_module_MOD_parse_object` (10889)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| -66.7% | -10.00ms | 0.4% → 0.1% |  15.0ms → 5.0ms |  15 → 5 | `0x8ea9c` (`/usr/lib/aarch64-linux-gnu/libc.so.6`) ← `0x9102b` ← `__libc_malloc` ← `0x1c1b3` (`/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`) ← `0x10be83` ← `0x1029eb` ← `_gfortran_st_open`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| -16.1% |  -9.00ms | 1.4% → 1.2% | 56.0ms → 47.0ms | 56 → 47 | `__json_value_module_MOD_pop_char.part.0` (`./json_value_module.F90:11346`) ← `__json_value_module_MOD_parse_string` (11080) ← `__json_value_module_MOD_parse_value` (10124) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_array` (11003) ← `__json_value_module_MOD_parse_object` (10889)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| -81.8% |  -9.00ms | 0.3% → 0.1% |  11.0ms → 2.0ms |  11 → 2 | `__json_value_module_MOD_pop_char.part.0` (`./json_value_module.F90:11346`) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_array` (11003) ← `__json_value_module_MOD_parse_object` (10889)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| -69.2% |  -9.00ms | 0.3% → 0.1% |  13.0ms → 4.0ms |  13 → 4 | `_gfortran_string_scan` ← `__json_value_module_MOD_parse_string` (`./json_value_module.F90:11080`) ← `__json_value_module_MOD_parse_value` (10124) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_array` (11003) ← `__json_value_module_MOD_parse_object` (10889)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| -72.7% |  -8.00ms | 0.3% → 0.1% |  11.0ms → 3.0ms |  11 → 3 | `__json_value_module_MOD_pop_char.part.0` (`./json_value_module.F90:11346`) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_array` (11003) ← `__json_value_module_MOD_parse_object` (10889)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| -53.3% |  -8.00ms | 0.4% → 0.2% |  15.0ms → 7.0ms |  15 → 7 | `__json_value_module_MOD_pop_char.part.0` (`./json_value_module.F90:11346`) ← `__json_value_module_MOD_parse_string` (11080) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_array` (11003) ← `__json_value_module_MOD_parse_object` (10889)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| -14.0% |  -8.00ms | 1.4% → 1.3% | 57.0ms → 49.0ms | 57 → 49 | `__json_value_module_MOD_pop_char.part.0` (`./json_value_module.F90:11346`) ← `__json_value_module_MOD_parse_string` (11080) ← `__json_value_module_MOD_parse_value` (10124) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_array` (11003) ← `__json_value_module_MOD_parse_object` (10889)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| -80.0% |  -8.00ms | 0.2% → 0.1% |  10.0ms → 2.0ms |  10 → 2 | `__read` ← `0x10bd0b` (`/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`) ← `0x10c353` ← `0x10a47b` ← `__json_value_module_MOD_pop_char.part.0` (`./json_value_module.F90:11346`) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_array` (11003) ← `__json_value_module_MOD_parse_object` (10889)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| -41.2% |  -7.00ms | 0.4% → 0.3% | 17.0ms → 10.0ms | 17 → 10 | `__open` ← `0x10c997` (`/usr/lib/aarch64-linux-gnu/libgfortran.so.5.0.0`) ← `0x1029eb` ← `_gfortran_st_open`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| -43.8% |  -7.00ms | 0.4% → 0.2% |  16.0ms → 9.0ms |  16 → 9 | `__json_value_module_MOD_pop_char.part.0` (`./json_value_module.F90:11346`) ← `__json_value_module_MOD_parse_string` (11080) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_array` (11003) ← `__json_value_module_MOD_parse_object` (10889)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| -70.0% |  -7.00ms | 0.2% → 0.1% |  10.0ms → 3.0ms |  10 → 3 | `__json_value_module_MOD_parse_string` (`./json_value_module.F90:11080`) ← `__json_value_module_MOD_parse_value` (10124) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_array` (11003) ← `__json_value_module_MOD_parse_object` (10889)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| -53.8% |  -7.00ms | 0.3% → 0.2% |  13.0ms → 6.0ms |  13 → 6 | `__json_value_module_MOD_pop_char.part.0` (`./json_value_module.F90:11346`) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_array` (11003) ← `__json_value_module_MOD_parse_object` (10889)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| -77.8% |  -7.00ms | 0.2% → 0.1% |   9.0ms → 2.0ms |   9 → 2 | `__json_value_module_MOD_pop_char.part.0` (`./json_value_module.F90:11346`) ← `__json_value_module_MOD_parse_value` (10124) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_array` (11003) ← `__json_value_module_MOD_parse_object` (10889)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| -58.3% |  -7.00ms | 0.3% → 0.1% |  12.0ms → 5.0ms |  12 → 5 | `__json_value_module_MOD_pop_char.part.0` (`./json_value_module.F90:11346`) ← `__json_value_module_MOD_parse_string` (11080) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_array` (11003) ← `__json_value_module_MOD_parse_object` (10889)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| -42.9% |  -6.00ms | 0.3% → 0.2% |  14.0ms → 8.0ms |  14 → 8 | `__json_value_module_MOD_pop_char.part.0` (`./json_value_module.F90:11346`) ← `__json_value_module_MOD_parse_string` (11080) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_array` (11003) ← `__json_value_module_MOD_parse_object` (10889)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| -35.3% |  -6.00ms | 0.4% → 0.3% | 17.0ms → 11.0ms | 17 → 11 | `__json_value_module_MOD_pop_char.part.0` (`./json_value_module.F90:11346`) ← `__json_value_module_MOD_parse_string` (11080) ← `__json_value_module_MOD_parse_value` (10124) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_array` (11003) ← `__json_value_module_MOD_parse_object` (10889)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| -50.0% |  -6.00ms | 0.3% → 0.2% |  12.0ms → 6.0ms |  12 → 6 | `__json_value_module_MOD_pop_char.part.0` (`./json_value_module.F90:11346`) ← `__json_value_module_MOD_parse_string` (11080) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_object` (10889) ← `__json_value_module_MOD_parse_array` (11003) ← `__json_value_module_MOD_parse_object` (10889)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |

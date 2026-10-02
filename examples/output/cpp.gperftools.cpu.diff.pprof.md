# CPU profile diff

Took 508.0ms → 537.0ms (+29.00ms, +5.7%) over 508 samples → 537 samples (1.0ms per sample).

| Category         | Change |    Delta |             % |              Time |   Samples |
| ---------------- | -----: | -------: | ------------: | ----------------: | --------: |
| Ours             |  +7.8% | +32.00ms | 80.5% → 82.1% | 409.0ms → 441.0ms | 409 → 441 |
| Native           |  -5.3% |  -5.00ms | 18.7% → 16.8% |   95.0ms → 90.0ms |   95 → 90 |
| Standard library | +50.0% |  +2.00ms |   0.8% → 1.1% |     4.0ms → 6.0ms |     4 → 6 |

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time spent directly in the function body, excluding callees.

##### Ours

| Change |    Delta |           % |         Time | Samples | Function                                                                                       | Location                        |
| -----: | -------: | ----------: | -----------: | ------: | ---------------------------------------------------------------------------------------------- | ------------------------------- |
|    new | +45.00ms | 0.0% → 8.4% | 0ms → 45.0ms |  0 → 45 | `fmt::v12::detail::buffer::append`                                                             | `/src/fmt/include/fmt/base.h`   |
|    new | +42.00ms | 0.0% → 7.8% | 0ms → 42.0ms |  0 → 42 | `fmt::v12::detail::utf8_decode`                                                                | `/src/fmt/include/fmt/format.h` |
|    new | +31.00ms | 0.0% → 5.8% | 0ms → 31.0ms |  0 → 31 | `fmt::v12::detail::parse_format_specs`                                                         | `/src/fmt/include/fmt/base.h`   |
|    new | +25.00ms | 0.0% → 4.7% | 0ms → 25.0ms |  0 → 25 | `fmt::v12::detail::copy_noinline`                                                              | `/src/fmt/include/fmt/format.h` |
|    new | +19.00ms | 0.0% → 3.5% | 0ms → 19.0ms |  0 → 19 | `fmt::v12::detail::parse_format_string`                                                        | `/src/fmt/include/fmt/base.h`   |
|    new | +18.00ms | 0.0% → 3.4% | 0ms → 18.0ms |  0 → 18 | `fmt::v12::detail::write`                                                                      | `/src/fmt/include/fmt/format.h` |
|    new | +16.00ms | 0.0% → 3.0% | 0ms → 16.0ms |  0 → 16 | `fmt::v12::basic_format_arg::visit`                                                            | `/src/fmt/include/fmt/base.h`   |
|    new | +14.00ms | 0.0% → 2.6% | 0ms → 14.0ms |  0 → 14 | `fmt::v12::detail::parse_dynamic_spec`                                                         | `/src/fmt/include/fmt/base.h`   |
|    new | +13.00ms | 0.0% → 2.4% | 0ms → 13.0ms |  0 → 13 | `fmt::v12::detail::parse_replacement_field`                                                    | `/src/fmt/include/fmt/base.h`   |
|    new | +12.00ms | 0.0% → 2.2% | 0ms → 12.0ms |  0 → 12 | `fmt::v12::detail::write_int`                                                                  | `/src/fmt/include/fmt/format.h` |
|    new | +12.00ms | 0.0% → 2.2% | 0ms → 12.0ms |  0 → 12 | `fmt::v12::detail::format_float`                                                               | `/src/fmt/include/fmt/format.h` |
|    new | +12.00ms | 0.0% → 2.2% | 0ms → 12.0ms |  0 → 12 | `fmt::v12::detail::parse_nonnegative_int`                                                      | `/src/fmt/include/fmt/base.h`   |
|    new | +11.00ms | 0.0% → 2.0% | 0ms → 11.0ms |  0 → 11 | `fmt::v12::detail::write2digits`                                                               | `/src/fmt/include/fmt/format.h` |
|    new | +11.00ms | 0.0% → 2.0% | 0ms → 11.0ms |  0 → 11 | `fmt::v12::detail::write()::{lambda(unsigned int, fmt::v12::basic_string_view)#1}::operator()` | `/src/fmt/include/fmt/format.h` |
|    new | +10.00ms | 0.0% → 1.9% | 0ms → 10.0ms |  0 → 10 | `fmt::v12::detail::format_handler::on_format_specs`                                            | `/src/fmt/include/fmt/format.h` |
|    new | +10.00ms | 0.0% → 1.9% | 0ms → 10.0ms |  0 → 10 | `fmt::v12::detail::for_each_codepoint()::{lambda(char const*, char const*)#1}::operator()`     | `/src/fmt/include/fmt/format.h` |
|    new |  +9.00ms | 0.0% → 1.7% |  0ms → 9.0ms |   0 → 9 | `fmt::v12::basic_format_args::get`                                                             | `/src/fmt/include/fmt/base.h`   |
|    new |  +9.00ms | 0.0% → 1.7% |  0ms → 9.0ms |   0 → 9 | `fmt::v12::detail::write_fixed`                                                                | `/src/fmt/include/fmt/format.h` |
|    new |  +8.00ms | 0.0% → 1.5% |  0ms → 8.0ms |   0 → 8 | `fmt::v12::detail::buffer::try_reserve`                                                        | `/src/fmt/include/fmt/base.h`   |
|    new |  +8.00ms | 0.0% → 1.5% |  0ms → 8.0ms |   0 → 8 | `fmt::v12::detail::buffer::push_back`                                                          | `/src/fmt/include/fmt/base.h`   |

##### Native

|  Change |   Delta |           % |            Time | Samples | Function   | Location                                         |
| ------: | ------: | ----------: | --------------: | ------: | ---------- | ------------------------------------------------ |
| +100.0% | +6.00ms | 1.2% → 2.2% |  6.0ms → 12.0ms |  6 → 12 | `0x9e6c0`  | `/usr/lib/aarch64-linux-gnu/libc.so.6`           |
| +125.0% | +5.00ms | 0.8% → 1.7% |   4.0ms → 9.0ms |   4 → 9 | `0xa0cb0`  | `/usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
|  +16.7% | +2.00ms | 2.4% → 2.6% | 12.0ms → 14.0ms | 12 → 14 | `0x9d100`  | `/usr/lib/aarch64-linux-gnu/libc.so.6`           |
|  +33.3% | +1.00ms | 0.6% → 0.7% |   3.0ms → 4.0ms |   3 → 4 | `0x8faf4`  | `/usr/lib/aarch64-linux-gnu/libc.so.6`           |
| +100.0% | +1.00ms | 0.2% → 0.4% |   1.0ms → 2.0ms |   1 → 2 | `0x9d11c`  | `/usr/lib/aarch64-linux-gnu/libc.so.6`           |
| +100.0% | +1.00ms | 0.2% → 0.4% |   1.0ms → 2.0ms |   1 → 2 | `0x92aa0`  | `/usr/lib/aarch64-linux-gnu/libc.so.6`           |
|     new | +1.00ms | 0.0% → 0.2% |     0ms → 1.0ms |   0 → 1 | `0x9d1b0`  | `/usr/lib/aarch64-linux-gnu/libc.so.6`           |
|     new | +1.00ms | 0.0% → 0.2% |     0ms → 1.0ms |   0 → 1 | `0x9d168`  | `/usr/lib/aarch64-linux-gnu/libc.so.6`           |
|     new | +1.00ms | 0.0% → 0.2% |     0ms → 1.0ms |   0 → 1 | `0x9d184`  | `/usr/lib/aarch64-linux-gnu/libc.so.6`           |
|     new | +1.00ms | 0.0% → 0.2% |     0ms → 1.0ms |   0 → 1 | `0x137f3c` | `/usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |

##### Standard library

| Change |   Delta |           % |        Time | Samples | Function                                   | Location                                    |
| -----: | ------: | ----------: | ----------: | ------: | ------------------------------------------ | ------------------------------------------- |
|    new | +2.00ms | 0.0% → 0.4% | 0ms → 2.0ms |   0 → 2 | `std::__cxx11::basic_string::_M_construct` | `/usr/include/c++/12/bits/basic_string.tcc` |
|    new | +1.00ms | 0.0% → 0.2% | 0ms → 1.0ms |   0 → 1 | `std::char_traits::copy`                   | `/usr/include/c++/12/bits/char_traits.h`    |
|    new | +1.00ms | 0.0% → 0.2% | 0ms → 1.0ms |   0 → 1 | `std::__cxx11::basic_string::size`         | `/usr/include/c++/12/bits/basic_string.h`   |

#### Improvements

Functions with the largest decrease in time spent directly in the function body, excluding callees.

##### Ours

|  Change |    Delta |           % |         Time | Samples | Function                                                               | Location                            |
| ------: | -------: | ----------: | -----------: | ------: | ---------------------------------------------------------------------- | ----------------------------------- |
| removed | -47.00ms | 9.3% → 0.0% | 47.0ms → 0ms |  47 → 0 | `fmt::v11::detail::buffer::append`                                     | `/src/fmt/include/fmt/base.h`       |
| removed | -31.00ms | 6.1% → 0.0% | 31.0ms → 0ms |  31 → 0 | `fmt::v11::detail::utf8_decode`                                        | `/src/fmt/include/fmt/format.h`     |
| removed | -28.00ms | 5.5% → 0.0% | 28.0ms → 0ms |  28 → 0 | `fmt::v11::detail::parse_format_string`                                | `/src/fmt/include/fmt/base.h`       |
| removed | -26.00ms | 5.1% → 0.0% | 26.0ms → 0ms |  26 → 0 | `fmt::v11::detail::parse_format_specs`                                 | `/src/fmt/include/fmt/base.h`       |
| removed | -21.00ms | 4.1% → 0.0% | 21.0ms → 0ms |  21 → 0 | `fmt::v11::detail::copy_noinline`                                      | `/src/fmt/include/fmt/format.h`     |
| removed | -19.00ms | 3.7% → 0.0% | 19.0ms → 0ms |  19 → 0 | `fmt::v11::detail::parse_replacement_field`                            | `/src/fmt/include/fmt/base.h`       |
| removed | -16.00ms | 3.1% → 0.0% | 16.0ms → 0ms |  16 → 0 | `fmt::v11::detail::parse_dynamic_spec`                                 | `/src/fmt/include/fmt/base.h`       |
| removed | -13.00ms | 2.6% → 0.0% | 13.0ms → 0ms |  13 → 0 | `fmt::v11::detail::write_float`                                        | `/src/fmt/include/fmt/format.h`     |
| removed | -12.00ms | 2.4% → 0.0% | 12.0ms → 0ms |  12 → 0 | `fmt::v11::detail::do_format_decimal`                                  | `/src/fmt/include/fmt/format.h`     |
| removed | -12.00ms | 2.4% → 0.0% | 12.0ms → 0ms |  12 → 0 | `fmt::v11::basic_format_arg::visit`                                    | `/src/fmt/include/fmt/base.h`       |
| removed | -11.00ms | 2.2% → 0.0% | 11.0ms → 0ms |  11 → 0 | `fmt::v11::detail::parse_format_specs()::{unnamed type#1}::operator()` | `/src/fmt/include/fmt/base.h`       |
| removed | -10.00ms | 2.0% → 0.0% | 10.0ms → 0ms |  10 → 0 | `fmt::v11::detail::format_handler::on_format_specs`                    | `/src/fmt/include/fmt/format.h`     |
| removed | -10.00ms | 2.0% → 0.0% | 10.0ms → 0ms |  10 → 0 | `fmt::v11::detail::parse_nonnegative_int`                              | `/src/fmt/include/fmt/base.h`       |
| removed |  -8.00ms | 1.6% → 0.0% |  8.0ms → 0ms |   8 → 0 | `fmt::v11::detail::write_int`                                          | `/src/fmt/include/fmt/format.h`     |
| removed |  -8.00ms | 1.6% → 0.0% |  8.0ms → 0ms |   8 → 0 | `fmt::v11::detail::compute_width()::count_code_points::operator()`     | `/src/fmt/include/fmt/format.h`     |
| removed |  -7.00ms | 1.4% → 0.0% |  7.0ms → 0ms |   7 → 0 | `fmt::v11::parse_context::next_arg_id`                                 | `/src/fmt/include/fmt/base.h`       |
| removed |  -7.00ms | 1.4% → 0.0% |  7.0ms → 0ms |   7 → 0 | `fmt::v11::detail::format_float`                                       | `/src/fmt/include/fmt/format.h`     |
| removed |  -7.00ms | 1.4% → 0.0% |  7.0ms → 0ms |   7 → 0 | `fmt::v11::detail::write_padded`                                       | `/src/fmt/include/fmt/format.h`     |
| removed |  -7.00ms | 1.4% → 0.0% |  7.0ms → 0ms |   7 → 0 | `fmt::v11::detail::buffer::push_back`                                  | `/src/fmt/include/fmt/base.h`       |
| removed |  -5.00ms | 1.0% → 0.0% |  5.0ms → 0ms |   5 → 0 | `fmt::v11::detail::dragonbox::cache_accessor::get_cached_power`        | `/src/fmt/include/fmt/format-inl.h` |

##### Native

|  Change |   Delta |           % |            Time | Samples | Function   | Location                                         |
| ------: | ------: | ----------: | --------------: | ------: | ---------- | ------------------------------------------------ |
|  -33.3% | -5.00ms | 3.0% → 1.9% | 15.0ms → 10.0ms | 15 → 10 | `0x137f20` | `/usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
|  -60.0% | -3.00ms | 1.0% → 0.4% |   5.0ms → 2.0ms |   5 → 2 | `0x137f84` | `/usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
|  -50.0% | -3.00ms | 1.2% → 0.6% |   6.0ms → 3.0ms |   6 → 3 | `0x92284`  | `/usr/lib/aarch64-linux-gnu/libc.so.6`           |
| removed | -2.00ms | 0.4% → 0.0% |     2.0ms → 0ms |   2 → 0 | `0x137f94` | `/usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
| removed | -2.00ms | 0.4% → 0.0% |     2.0ms → 0ms |   2 → 0 | `0x8fae0`  | `/usr/lib/aarch64-linux-gnu/libc.so.6`           |
| removed | -1.00ms | 0.2% → 0.0% |     1.0ms → 0ms |   1 → 0 | `0x8faa0`  | `/usr/lib/aarch64-linux-gnu/libc.so.6`           |
| removed | -1.00ms | 0.2% → 0.0% |     1.0ms → 0ms |   1 → 0 | `0x92aa4`  | `/usr/lib/aarch64-linux-gnu/libc.so.6`           |
| removed | -1.00ms | 0.2% → 0.0% |     1.0ms → 0ms |   1 → 0 | `0x92260`  | `/usr/lib/aarch64-linux-gnu/libc.so.6`           |
|  -50.0% | -1.00ms | 0.4% → 0.2% |   2.0ms → 1.0ms |   2 → 1 | `0x9d138`  | `/usr/lib/aarch64-linux-gnu/libc.so.6`           |
| removed | -1.00ms | 0.2% → 0.0% |     1.0ms → 0ms |   1 → 0 | `0x9a8f0`  | `/usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
| removed | -1.00ms | 0.2% → 0.0% |     1.0ms → 0ms |   1 → 0 | `0x929c4`  | `/usr/lib/aarch64-linux-gnu/libc.so.6`           |
| removed | -1.00ms | 0.2% → 0.0% |     1.0ms → 0ms |   1 → 0 | `0x8fb44`  | `/usr/lib/aarch64-linux-gnu/libc.so.6`           |
|  -50.0% | -1.00ms | 0.4% → 0.2% |   2.0ms → 1.0ms |   2 → 1 | `0x9c2e4`  | `/usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
| removed | -1.00ms | 0.2% → 0.0% |     1.0ms → 0ms |   1 → 0 | `0xa2c9c`  | `/usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
| removed | -1.00ms | 0.2% → 0.0% |     1.0ms → 0ms |   1 → 0 | `0x92a58`  | `/usr/lib/aarch64-linux-gnu/libc.so.6`           |

##### Standard library

|  Change |   Delta |           % |        Time | Samples | Function                              | Location                                  |
| ------: | ------: | ----------: | ----------: | ------: | ------------------------------------- | ----------------------------------------- |
| removed | -2.00ms | 0.4% → 0.0% | 2.0ms → 0ms |   2 → 0 | `std::__cxx11::basic_string::_M_data` | `/usr/include/c++/12/bits/basic_string.h` |

#### Lines

Lines with the largest change in contribution to each function's self time.

##### `fmt::v12::detail::buffer::append` (`/src/fmt/include/fmt/base.h`)

| Change |    Delta |            % |         Time | Samples | Location                           |
| -----: | -------: | -----------: | -----------: | ------: | ---------------------------------- |
|    new | +24.00ms | 0.0% → 53.3% | 0ms → 24.0ms |  0 → 24 | `/src/fmt/include/fmt/base.h:1853` |
|    new | +10.00ms | 0.0% → 22.2% | 0ms → 10.0ms |  0 → 10 | `/src/fmt/include/fmt/base.h:1854` |
|    new |  +6.00ms | 0.0% → 13.3% |  0ms → 6.0ms |   0 → 6 | `/src/fmt/include/fmt/base.h:1852` |
|    new |  +4.00ms |  0.0% → 8.9% |  0ms → 4.0ms |   0 → 4 | `/src/fmt/include/fmt/base.h:1846` |
|    new |  +1.00ms |  0.0% → 2.2% |  0ms → 1.0ms |   0 → 1 | `/src/fmt/include/fmt/base.h:1845` |

##### `fmt::v12::detail::utf8_decode` (`/src/fmt/include/fmt/format.h`)

| Change |    Delta |            % |         Time | Samples | Location                            |
| -----: | -------: | -----------: | -----------: | ------: | ----------------------------------- |
|    new | +13.00ms | 0.0% → 31.0% | 0ms → 13.0ms |  0 → 13 | `/src/fmt/include/fmt/format.h:595` |
|    new |  +7.00ms | 0.0% → 16.7% |  0ms → 7.0ms |   0 → 7 | `/src/fmt/include/fmt/format.h:622` |
|    new |  +6.00ms | 0.0% → 14.3% |  0ms → 6.0ms |   0 → 6 | `/src/fmt/include/fmt/format.h:598` |
|    new |  +4.00ms |  0.0% → 9.5% |  0ms → 4.0ms |   0 → 4 | `/src/fmt/include/fmt/format.h:621` |
|    new |  +3.00ms |  0.0% → 7.1% |  0ms → 3.0ms |   0 → 3 | `/src/fmt/include/fmt/format.h:592` |

##### `fmt::v12::detail::parse_format_specs` (`/src/fmt/include/fmt/base.h`)

| Change |    Delta |            % |         Time | Samples | Location                           |
| -----: | -------: | -----------: | -----------: | ------: | ---------------------------------- |
|    new | +14.00ms | 0.0% → 45.2% | 0ms → 14.0ms |  0 → 14 | `/src/fmt/include/fmt/base.h:1498` |
|    new | +10.00ms | 0.0% → 32.3% | 0ms → 10.0ms |  0 → 10 | `/src/fmt/include/fmt/base.h:1596` |
|    new |  +5.00ms | 0.0% → 16.1% |  0ms → 5.0ms |   0 → 5 | `/src/fmt/include/fmt/base.h:1461` |
|    new |  +2.00ms |  0.0% → 6.5% |  0ms → 2.0ms |   0 → 2 | `/src/fmt/include/fmt/base.h:1593` |

##### `fmt::v12::detail::copy_noinline` (`/src/fmt/include/fmt/format.h`)

| Change |    Delta |            % |         Time | Samples | Location                            |
| -----: | -------: | -----------: | -----------: | ------: | ----------------------------------- |
|    new | +17.00ms | 0.0% → 68.0% | 0ms → 17.0ms |  0 → 17 | `/src/fmt/include/fmt/format.h:571` |
|    new |  +8.00ms | 0.0% → 32.0% |  0ms → 8.0ms |   0 → 8 | `/src/fmt/include/fmt/format.h:568` |

##### `fmt::v12::detail::parse_format_string` (`/src/fmt/include/fmt/base.h`)

| Change |   Delta |            % |        Time | Samples | Location                           |
| -----: | ------: | -----------: | ----------: | ------: | ---------------------------------- |
|    new | +9.00ms | 0.0% → 47.4% | 0ms → 9.0ms |   0 → 9 | `/src/fmt/include/fmt/base.h:1651` |
|    new | +6.00ms | 0.0% → 31.6% | 0ms → 6.0ms |   0 → 6 | `/src/fmt/include/fmt/base.h:1655` |
|    new | +4.00ms | 0.0% → 21.1% | 0ms → 4.0ms |   0 → 4 | `/src/fmt/include/fmt/base.h:1650` |

##### `fmt::v12::detail::write` (`/src/fmt/include/fmt/format.h`)

| Change |   Delta |            % |        Time | Samples | Location                             |
| -----: | ------: | -----------: | ----------: | ------: | ------------------------------------ |
|    new | +4.00ms | 0.0% → 22.2% | 0ms → 4.0ms |   0 → 4 | `/src/fmt/include/fmt/format.h:3434` |
|    new | +2.00ms | 0.0% → 11.1% | 0ms → 2.0ms |   0 → 2 | `/src/fmt/include/fmt/format.h:2239` |
|    new | +2.00ms | 0.0% → 11.1% | 0ms → 2.0ms |   0 → 2 | `/src/fmt/include/fmt/format.h:2284` |
|    new | +1.00ms |  0.0% → 5.6% | 0ms → 1.0ms |   0 → 1 | `/src/fmt/include/fmt/format.h:1688` |
|    new | +1.00ms |  0.0% → 5.6% | 0ms → 1.0ms |   0 → 1 | `/src/fmt/include/fmt/format.h:2161` |

##### `fmt::v12::basic_format_arg::visit` (`/src/fmt/include/fmt/base.h`)

| Change |    Delta |            % |         Time | Samples | Location                           |
| -----: | -------: | -----------: | -----------: | ------: | ---------------------------------- |
|    new | +15.00ms | 0.0% → 93.8% | 0ms → 15.0ms |  0 → 15 | `/src/fmt/include/fmt/base.h:2531` |
|    new |  +1.00ms |  0.0% → 6.3% |  0ms → 1.0ms |   0 → 1 | `/src/fmt/include/fmt/base.h:2550` |

##### `fmt::v12::detail::parse_dynamic_spec` (`/src/fmt/include/fmt/base.h`)

| Change |   Delta |            % |        Time | Samples | Location                           |
| -----: | ------: | -----------: | ----------: | ------: | ---------------------------------- |
|    new | +8.00ms | 0.0% → 57.1% | 0ms → 8.0ms |   0 → 8 | `/src/fmt/include/fmt/base.h:1400` |
|    new | +2.00ms | 0.0% → 14.3% | 0ms → 2.0ms |   0 → 2 | `/src/fmt/include/fmt/base.h:1406` |
|    new | +2.00ms | 0.0% → 14.3% | 0ms → 2.0ms |   0 → 2 | `/src/fmt/include/fmt/base.h:1408` |
|    new | +2.00ms | 0.0% → 14.3% | 0ms → 2.0ms |   0 → 2 | `/src/fmt/include/fmt/base.h:1430` |

##### `fmt::v12::detail::parse_replacement_field` (`/src/fmt/include/fmt/base.h`)

| Change |   Delta |            % |        Time | Samples | Location                           |
| -----: | ------: | -----------: | ----------: | ------: | ---------------------------------- |
|    new | +4.00ms | 0.0% → 30.8% | 0ms → 4.0ms |   0 → 4 | `/src/fmt/include/fmt/base.h:1609` |
|    new | +4.00ms | 0.0% → 30.8% | 0ms → 4.0ms |   0 → 4 | `/src/fmt/include/fmt/base.h:1643` |
|    new | +3.00ms | 0.0% → 23.1% | 0ms → 3.0ms |   0 → 3 | `/src/fmt/include/fmt/base.h:1603` |
|    new | +2.00ms | 0.0% → 15.4% | 0ms → 2.0ms |   0 → 2 | `/src/fmt/include/fmt/base.h:1640` |

##### `fmt::v12::detail::write_int` (`/src/fmt/include/fmt/format.h`)

| Change |   Delta |            % |        Time | Samples | Location                             |
| -----: | ------: | -----------: | ----------: | ------: | ------------------------------------ |
|    new | +8.00ms | 0.0% → 66.7% | 0ms → 8.0ms |   0 → 8 | `/src/fmt/include/fmt/format.h:2050` |
|    new | +2.00ms | 0.0% → 16.7% | 0ms → 2.0ms |   0 → 2 | `/src/fmt/include/fmt/format.h:2096` |
|    new | +1.00ms |  0.0% → 8.3% | 0ms → 1.0ms |   0 → 1 | `/src/fmt/include/fmt/format.h:2062` |
|    new | +1.00ms |  0.0% → 8.3% | 0ms → 1.0ms |   0 → 1 | `/src/fmt/include/fmt/format.h:2111` |

##### `fmt::v12::detail::format_float` (`/src/fmt/include/fmt/format.h`)

| Change |   Delta |            % |        Time | Samples | Location                             |
| -----: | ------: | -----------: | ----------: | ------: | ------------------------------------ |
|    new | +3.00ms | 0.0% → 25.0% | 0ms → 3.0ms |   0 → 3 | `/src/fmt/include/fmt/format.h:3208` |
|    new | +2.00ms | 0.0% → 16.7% | 0ms → 2.0ms |   0 → 2 | `/src/fmt/include/fmt/format.h:3152` |
|    new | +2.00ms | 0.0% → 16.7% | 0ms → 2.0ms |   0 → 2 | `/src/fmt/include/fmt/format.h:3199` |
|    new | +1.00ms |  0.0% → 8.3% | 0ms → 1.0ms |   0 → 1 | `/src/fmt/include/fmt/format.h:3222` |
|    new | +1.00ms |  0.0% → 8.3% | 0ms → 1.0ms |   0 → 1 | `/src/fmt/include/fmt/format.h:3325` |

##### `fmt::v12::detail::parse_nonnegative_int` (`/src/fmt/include/fmt/base.h`)

| Change |   Delta |            % |        Time | Samples | Location                           |
| -----: | ------: | -----------: | ----------: | ------: | ---------------------------------- |
|    new | +9.00ms | 0.0% → 75.0% | 0ms → 9.0ms |   0 → 9 | `/src/fmt/include/fmt/base.h:1321` |
|    new | +1.00ms |  0.0% → 8.3% | 0ms → 1.0ms |   0 → 1 | `/src/fmt/include/fmt/base.h:1319` |
|    new | +1.00ms |  0.0% → 8.3% | 0ms → 1.0ms |   0 → 1 | `/src/fmt/include/fmt/base.h:1322` |
|    new | +1.00ms |  0.0% → 8.3% | 0ms → 1.0ms |   0 → 1 | `/src/fmt/include/fmt/base.h:1325` |

##### `fmt::v12::detail::write2digits` (`/src/fmt/include/fmt/format.h`)

| Change |    Delta |             % |         Time | Samples | Location                             |
| -----: | -------: | ------------: | -----------: | ------: | ------------------------------------ |
|    new | +11.00ms | 0.0% → 100.0% | 0ms → 11.0ms |  0 → 11 | `/src/fmt/include/fmt/format.h:1197` |

##### `fmt::v12::detail::write()::{lambda(unsigned int, fmt::v12::basic_string_view)#1}::operator()` (`/src/fmt/include/fmt/format.h`)

| Change |   Delta |            % |        Time | Samples | Location                             |
| -----: | ------: | -----------: | ----------: | ------: | ------------------------------------ |
|    new | +4.00ms | 0.0% → 36.4% | 0ms → 4.0ms |   0 → 4 | `/src/fmt/include/fmt/format.h:2197` |
|    new | +3.00ms | 0.0% → 27.3% | 0ms → 3.0ms |   0 → 3 | `/src/fmt/include/fmt/format.h:2172` |
|    new | +2.00ms | 0.0% → 18.2% | 0ms → 2.0ms |   0 → 2 | `/src/fmt/include/fmt/format.h:2173` |
|    new | +2.00ms | 0.0% → 18.2% | 0ms → 2.0ms |   0 → 2 | `/src/fmt/include/fmt/format.h:2199` |

##### `fmt::v12::detail::format_handler::on_format_specs` (`/src/fmt/include/fmt/format.h`)

| Change |   Delta |            % |        Time | Samples | Location                             |
| -----: | ------: | -----------: | ----------: | ------: | ------------------------------------ |
|    new | +6.00ms | 0.0% → 60.0% | 0ms → 6.0ms |   0 → 6 | `/src/fmt/include/fmt/format.h:3779` |
|    new | +4.00ms | 0.0% → 40.0% | 0ms → 4.0ms |   0 → 4 | `/src/fmt/include/fmt/format.h:3788` |

##### `fmt::v12::detail::for_each_codepoint()::{lambda(char const*, char const*)#1}::operator()` (`/src/fmt/include/fmt/format.h`)

| Change |   Delta |            % |        Time | Samples | Location                            |
| -----: | ------: | -----------: | ----------: | ------: | ----------------------------------- |
|    new | +8.00ms | 0.0% → 80.0% | 0ms → 8.0ms |   0 → 8 | `/src/fmt/include/fmt/format.h:637` |
|    new | +2.00ms | 0.0% → 20.0% | 0ms → 2.0ms |   0 → 2 | `/src/fmt/include/fmt/format.h:639` |

##### `fmt::v12::basic_format_args::get` (`/src/fmt/include/fmt/base.h`)

| Change |   Delta |            % |        Time | Samples | Location                           |
| -----: | ------: | -----------: | ----------: | ------: | ---------------------------------- |
|    new | +4.00ms | 0.0% → 44.4% | 0ms → 4.0ms |   0 → 4 | `/src/fmt/include/fmt/base.h:2639` |
|    new | +2.00ms | 0.0% → 22.2% | 0ms → 2.0ms |   0 → 2 | `/src/fmt/include/fmt/base.h:2633` |
|    new | +2.00ms | 0.0% → 22.2% | 0ms → 2.0ms |   0 → 2 | `/src/fmt/include/fmt/base.h:2637` |
|    new | +1.00ms | 0.0% → 11.1% | 0ms → 1.0ms |   0 → 1 | `/src/fmt/include/fmt/base.h:2638` |

##### `fmt::v12::detail::write_fixed` (`/src/fmt/include/fmt/format.h`)

| Change |   Delta |            % |        Time | Samples | Location                             |
| -----: | ------: | -----------: | ----------: | ------: | ------------------------------------ |
|    new | +4.00ms | 0.0% → 44.4% | 0ms → 4.0ms |   0 → 4 | `/src/fmt/include/fmt/format.h:2487` |
|    new | +2.00ms | 0.0% → 22.2% | 0ms → 2.0ms |   0 → 2 | `/src/fmt/include/fmt/format.h:2522` |
|    new | +2.00ms | 0.0% → 22.2% | 0ms → 2.0ms |   0 → 2 | `/src/fmt/include/fmt/format.h:2549` |
|    new | +1.00ms | 0.0% → 11.1% | 0ms → 1.0ms |   0 → 1 | `/src/fmt/include/fmt/format.h:2539` |

##### `fmt::v12::detail::buffer::try_reserve` (`/src/fmt/include/fmt/base.h`)

| Change |   Delta |             % |        Time | Samples | Location                           |
| -----: | ------: | ------------: | ----------: | ------: | ---------------------------------- |
|    new | +8.00ms | 0.0% → 100.0% | 0ms → 8.0ms |   0 → 8 | `/src/fmt/include/fmt/base.h:1829` |

##### `fmt::v12::detail::buffer::push_back` (`/src/fmt/include/fmt/base.h`)

| Change |   Delta |            % |        Time | Samples | Location                           |
| -----: | ------: | -----------: | ----------: | ------: | ---------------------------------- |
|    new | +4.00ms | 0.0% → 50.0% | 0ms → 4.0ms |   0 → 4 | `/src/fmt/include/fmt/base.h:1834` |
|    new | +3.00ms | 0.0% → 37.5% | 0ms → 3.0ms |   0 → 3 | `/src/fmt/include/fmt/base.h:1835` |
|    new | +1.00ms | 0.0% → 12.5% | 0ms → 1.0ms |   0 → 1 | `/src/fmt/include/fmt/base.h:1832` |

##### `std::__cxx11::basic_string::_M_construct` (`/usr/include/c++/12/bits/basic_string.tcc`)

| Change |   Delta |             % |        Time | Samples | Location                                        |
| -----: | ------: | ------------: | ----------: | ------: | ----------------------------------------------- |
|    new | +2.00ms | 0.0% → 100.0% | 0ms → 2.0ms |   0 → 2 | `/usr/include/c++/12/bits/basic_string.tcc:221` |

##### `std::char_traits::copy` (`/usr/include/c++/12/bits/char_traits.h`)

| Change |   Delta |             % |        Time | Samples | Location                                     |
| -----: | ------: | ------------: | ----------: | ------: | -------------------------------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `/usr/include/c++/12/bits/char_traits.h:431` |

##### `std::__cxx11::basic_string::size` (`/usr/include/c++/12/bits/basic_string.h`)

| Change |   Delta |             % |        Time | Samples | Location                                       |
| -----: | ------: | ------------: | ----------: | ------: | ---------------------------------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `/usr/include/c++/12/bits/basic_string.h:1064` |

##### `fmt::v11::detail::buffer::append` (`/src/fmt/include/fmt/base.h`)

|  Change |    Delta |            % |         Time | Samples | Location                           |
| ------: | -------: | -----------: | -----------: | ------: | ---------------------------------- |
| removed | -31.00ms | 66.0% → 0.0% | 31.0ms → 0ms |  31 → 0 | `/src/fmt/include/fmt/base.h:1837` |
| removed |  -7.00ms | 14.9% → 0.0% |  7.0ms → 0ms |   7 → 0 | `/src/fmt/include/fmt/base.h:1836` |
| removed |  -6.00ms | 12.8% → 0.0% |  6.0ms → 0ms |   6 → 0 | `/src/fmt/include/fmt/base.h:1838` |
| removed |  -3.00ms |  6.4% → 0.0% |  3.0ms → 0ms |   3 → 0 | `/src/fmt/include/fmt/base.h:1830` |

##### `fmt::v11::detail::utf8_decode` (`/src/fmt/include/fmt/format.h`)

|  Change |    Delta |            % |         Time | Samples | Location                            |
| ------: | -------: | -----------: | -----------: | ------: | ----------------------------------- |
| removed | -14.00ms | 45.2% → 0.0% | 14.0ms → 0ms |  14 → 0 | `/src/fmt/include/fmt/format.h:561` |
| removed |  -6.00ms | 19.4% → 0.0% |  6.0ms → 0ms |   6 → 0 | `/src/fmt/include/fmt/format.h:560` |
| removed |  -2.00ms |  6.5% → 0.0% |  2.0ms → 0ms |   2 → 0 | `/src/fmt/include/fmt/format.h:564` |
| removed |  -2.00ms |  6.5% → 0.0% |  2.0ms → 0ms |   2 → 0 | `/src/fmt/include/fmt/format.h:581` |
| removed |  -2.00ms |  6.5% → 0.0% |  2.0ms → 0ms |   2 → 0 | `/src/fmt/include/fmt/format.h:588` |

##### `fmt::v11::detail::parse_format_string` (`/src/fmt/include/fmt/base.h`)

|  Change |    Delta |            % |         Time | Samples | Location                           |
| ------: | -------: | -----------: | -----------: | ------: | ---------------------------------- |
| removed | -19.00ms | 67.9% → 0.0% | 19.0ms → 0ms |  19 → 0 | `/src/fmt/include/fmt/base.h:1635` |
| removed |  -5.00ms | 17.9% → 0.0% |  5.0ms → 0ms |   5 → 0 | `/src/fmt/include/fmt/base.h:1639` |
| removed |  -4.00ms | 14.3% → 0.0% |  4.0ms → 0ms |   4 → 0 | `/src/fmt/include/fmt/base.h:1634` |

##### `fmt::v11::detail::parse_format_specs` (`/src/fmt/include/fmt/base.h`)

|  Change |    Delta |            % |         Time | Samples | Location                           |
| ------: | -------: | -----------: | -----------: | ------: | ---------------------------------- |
| removed | -16.00ms | 61.5% → 0.0% | 16.0ms → 0ms |  16 → 0 | `/src/fmt/include/fmt/base.h:1482` |
| removed |  -4.00ms | 15.4% → 0.0% |  4.0ms → 0ms |   4 → 0 | `/src/fmt/include/fmt/base.h:1445` |
| removed |  -4.00ms | 15.4% → 0.0% |  4.0ms → 0ms |   4 → 0 | `/src/fmt/include/fmt/base.h:1580` |
| removed |  -2.00ms |  7.7% → 0.0% |  2.0ms → 0ms |   2 → 0 | `/src/fmt/include/fmt/base.h:1577` |

##### `fmt::v11::detail::copy_noinline` (`/src/fmt/include/fmt/format.h`)

|  Change |    Delta |            % |         Time | Samples | Location                            |
| ------: | -------: | -----------: | -----------: | ------: | ----------------------------------- |
| removed | -16.00ms | 76.2% → 0.0% | 16.0ms → 0ms |  16 → 0 | `/src/fmt/include/fmt/format.h:537` |
| removed |  -5.00ms | 23.8% → 0.0% |  5.0ms → 0ms |   5 → 0 | `/src/fmt/include/fmt/format.h:534` |

##### `fmt::v11::detail::parse_replacement_field` (`/src/fmt/include/fmt/base.h`)

|  Change |   Delta |            % |        Time | Samples | Location                           |
| ------: | ------: | -----------: | ----------: | ------: | ---------------------------------- |
| removed | -6.00ms | 31.6% → 0.0% | 6.0ms → 0ms |   6 → 0 | `/src/fmt/include/fmt/base.h:1593` |
| removed | -5.00ms | 26.3% → 0.0% | 5.0ms → 0ms |   5 → 0 | `/src/fmt/include/fmt/base.h:1624` |
| removed | -5.00ms | 26.3% → 0.0% | 5.0ms → 0ms |   5 → 0 | `/src/fmt/include/fmt/base.h:1627` |
| removed | -3.00ms | 15.8% → 0.0% | 3.0ms → 0ms |   3 → 0 | `/src/fmt/include/fmt/base.h:1583` |

##### `fmt::v11::detail::parse_dynamic_spec` (`/src/fmt/include/fmt/base.h`)

|  Change |   Delta |            % |        Time | Samples | Location                           |
| ------: | ------: | -----------: | ----------: | ------: | ---------------------------------- |
| removed | -7.00ms | 43.8% → 0.0% | 7.0ms → 0ms |   7 → 0 | `/src/fmt/include/fmt/base.h:1384` |
| removed | -4.00ms | 25.0% → 0.0% | 4.0ms → 0ms |   4 → 0 | `/src/fmt/include/fmt/base.h:1392` |
| removed | -3.00ms | 18.8% → 0.0% | 3.0ms → 0ms |   3 → 0 | `/src/fmt/include/fmt/base.h:1390` |
| removed | -2.00ms | 12.5% → 0.0% | 2.0ms → 0ms |   2 → 0 | `/src/fmt/include/fmt/base.h:1414` |

##### `fmt::v11::detail::write_float` (`/src/fmt/include/fmt/format.h`)

|  Change |   Delta |            % |        Time | Samples | Location                             |
| ------: | ------: | -----------: | ----------: | ------: | ------------------------------------ |
| removed | -7.00ms | 53.8% → 0.0% | 7.0ms → 0ms |   7 → 0 | `/src/fmt/include/fmt/format.h:3301` |
| removed | -2.00ms | 15.4% → 0.0% | 2.0ms → 0ms |   2 → 0 | `/src/fmt/include/fmt/format.h:3353` |
| removed | -1.00ms |  7.7% → 0.0% | 1.0ms → 0ms |   1 → 0 | `/src/fmt/include/fmt/format.h:3306` |
| removed | -1.00ms |  7.7% → 0.0% | 1.0ms → 0ms |   1 → 0 | `/src/fmt/include/fmt/format.h:3316` |
| removed | -1.00ms |  7.7% → 0.0% | 1.0ms → 0ms |   1 → 0 | `/src/fmt/include/fmt/format.h:3336` |

##### `fmt::v11::detail::do_format_decimal` (`/src/fmt/include/fmt/format.h`)

|  Change |   Delta |            % |        Time | Samples | Location                             |
| ------: | ------: | -----------: | ----------: | ------: | ------------------------------------ |
| removed | -9.00ms | 75.0% → 0.0% | 9.0ms → 0ms |   9 → 0 | `/src/fmt/include/fmt/format.h:1191` |
| removed | -2.00ms | 16.7% → 0.0% | 2.0ms → 0ms |   2 → 0 | `/src/fmt/include/fmt/format.h:1198` |
| removed | -1.00ms |  8.3% → 0.0% | 1.0ms → 0ms |   1 → 0 | `/src/fmt/include/fmt/format.h:1195` |

##### `fmt::v11::basic_format_arg::visit` (`/src/fmt/include/fmt/base.h`)

|  Change |    Delta |            % |         Time | Samples | Location                           |
| ------: | -------: | -----------: | -----------: | ------: | ---------------------------------- |
| removed | -11.00ms | 91.7% → 0.0% | 11.0ms → 0ms |  11 → 0 | `/src/fmt/include/fmt/base.h:2518` |
| removed |  -1.00ms |  8.3% → 0.0% |  1.0ms → 0ms |   1 → 0 | `/src/fmt/include/fmt/base.h:2537` |

##### `fmt::v11::detail::parse_format_specs()::{unnamed type#1}::operator()` (`/src/fmt/include/fmt/base.h`)

|  Change |    Delta |             % |         Time | Samples | Location                           |
| ------: | -------: | ------------: | -----------: | ------: | ---------------------------------- |
| removed | -11.00ms | 100.0% → 0.0% | 11.0ms → 0ms |  11 → 0 | `/src/fmt/include/fmt/base.h:1461` |

##### `fmt::v11::detail::format_handler::on_format_specs` (`/src/fmt/include/fmt/format.h`)

|  Change |   Delta |            % |        Time | Samples | Location                             |
| ------: | ------: | -----------: | ----------: | ------: | ------------------------------------ |
| removed | -4.00ms | 40.0% → 0.0% | 4.0ms → 0ms |   4 → 0 | `/src/fmt/include/fmt/format.h:3630` |
| removed | -2.00ms | 20.0% → 0.0% | 2.0ms → 0ms |   2 → 0 | `/src/fmt/include/fmt/format.h:3619` |
| removed | -2.00ms | 20.0% → 0.0% | 2.0ms → 0ms |   2 → 0 | `/src/fmt/include/fmt/format.h:3620` |
| removed | -2.00ms | 20.0% → 0.0% | 2.0ms → 0ms |   2 → 0 | `/src/fmt/include/fmt/format.h:3628` |

##### `fmt::v11::detail::parse_nonnegative_int` (`/src/fmt/include/fmt/base.h`)

|  Change |   Delta |            % |        Time | Samples | Location                           |
| ------: | ------: | -----------: | ----------: | ------: | ---------------------------------- |
| removed | -7.00ms | 70.0% → 0.0% | 7.0ms → 0ms |   7 → 0 | `/src/fmt/include/fmt/base.h:1305` |
| removed | -2.00ms | 20.0% → 0.0% | 2.0ms → 0ms |   2 → 0 | `/src/fmt/include/fmt/base.h:1303` |
| removed | -1.00ms | 10.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `/src/fmt/include/fmt/base.h:1306` |

##### `fmt::v11::detail::write_int` (`/src/fmt/include/fmt/format.h`)

|  Change |   Delta |            % |        Time | Samples | Location                             |
| ------: | ------: | -----------: | ----------: | ------: | ------------------------------------ |
| removed | -3.00ms | 37.5% → 0.0% | 3.0ms → 0ms |   3 → 0 | `/src/fmt/include/fmt/format.h:2017` |
| removed | -3.00ms | 37.5% → 0.0% | 3.0ms → 0ms |   3 → 0 | `/src/fmt/include/fmt/format.h:2063` |
| removed | -1.00ms | 12.5% → 0.0% | 1.0ms → 0ms |   1 → 0 | `/src/fmt/include/fmt/format.h:2029` |
| removed | -1.00ms | 12.5% → 0.0% | 1.0ms → 0ms |   1 → 0 | `/src/fmt/include/fmt/format.h:2078` |

##### `fmt::v11::detail::compute_width()::count_code_points::operator()` (`/src/fmt/include/fmt/format.h`)

|  Change |   Delta |            % |        Time | Samples | Location                            |
| ------: | ------: | -----------: | ----------: | ------: | ----------------------------------- |
| removed | -6.00ms | 75.0% → 0.0% | 6.0ms → 0ms |   6 → 0 | `/src/fmt/include/fmt/format.h:644` |
| removed | -2.00ms | 25.0% → 0.0% | 2.0ms → 0ms |   2 → 0 | `/src/fmt/include/fmt/format.h:648` |

##### `fmt::v11::parse_context::next_arg_id` (`/src/fmt/include/fmt/base.h`)

|  Change |   Delta |            % |        Time | Samples | Location                          |
| ------: | ------: | -----------: | ----------: | ------: | --------------------------------- |
| removed | -5.00ms | 71.4% → 0.0% | 5.0ms → 0ms |   5 → 0 | `/src/fmt/include/fmt/base.h:899` |
| removed | -2.00ms | 28.6% → 0.0% | 2.0ms → 0ms |   2 → 0 | `/src/fmt/include/fmt/base.h:903` |

##### `fmt::v11::detail::format_float` (`/src/fmt/include/fmt/format.h`)

|  Change |   Delta |            % |        Time | Samples | Location                             |
| ------: | ------: | -----------: | ----------: | ------: | ------------------------------------ |
| removed | -2.00ms | 28.6% → 0.0% | 2.0ms → 0ms |   2 → 0 | `/src/fmt/include/fmt/format.h:3189` |
| removed | -1.00ms | 14.3% → 0.0% | 1.0ms → 0ms |   1 → 0 | `/src/fmt/include/fmt/format.h:3071` |
| removed | -1.00ms | 14.3% → 0.0% | 1.0ms → 0ms |   1 → 0 | `/src/fmt/include/fmt/format.h:3072` |
| removed | -1.00ms | 14.3% → 0.0% | 1.0ms → 0ms |   1 → 0 | `/src/fmt/include/fmt/format.h:3231` |
| removed | -1.00ms | 14.3% → 0.0% | 1.0ms → 0ms |   1 → 0 | `/src/fmt/include/fmt/format.h:3280` |

##### `fmt::v11::detail::write_padded` (`/src/fmt/include/fmt/format.h`)

|  Change |   Delta |            % |        Time | Samples | Location                             |
| ------: | ------: | -----------: | ----------: | ------: | ------------------------------------ |
| removed | -3.00ms | 42.9% → 0.0% | 3.0ms → 0ms |   3 → 0 | `/src/fmt/include/fmt/format.h:1641` |
| removed | -1.00ms | 14.3% → 0.0% | 1.0ms → 0ms |   1 → 0 | `/src/fmt/include/fmt/format.h:1636` |
| removed | -1.00ms | 14.3% → 0.0% | 1.0ms → 0ms |   1 → 0 | `/src/fmt/include/fmt/format.h:1643` |
| removed | -1.00ms | 14.3% → 0.0% | 1.0ms → 0ms |   1 → 0 | `/src/fmt/include/fmt/format.h:1646` |
| removed | -1.00ms | 14.3% → 0.0% | 1.0ms → 0ms |   1 → 0 | `/src/fmt/include/fmt/format.h:1648` |

##### `fmt::v11::detail::buffer::push_back` (`/src/fmt/include/fmt/base.h`)

|  Change |   Delta |            % |        Time | Samples | Location                           |
| ------: | ------: | -----------: | ----------: | ------: | ---------------------------------- |
| removed | -6.00ms | 85.7% → 0.0% | 6.0ms → 0ms |   6 → 0 | `/src/fmt/include/fmt/base.h:1818` |
| removed | -1.00ms | 14.3% → 0.0% | 1.0ms → 0ms |   1 → 0 | `/src/fmt/include/fmt/base.h:1816` |

##### `fmt::v11::detail::dragonbox::cache_accessor::get_cached_power` (`/src/fmt/include/fmt/format-inl.h`)

|  Change |   Delta |            % |        Time | Samples | Location                                 |
| ------: | ------: | -----------: | ----------: | ------: | ---------------------------------------- |
| removed | -3.00ms | 60.0% → 0.0% | 3.0ms → 0ms |   3 → 0 | `/src/fmt/include/fmt/format-inl.h:1059` |
| removed | -1.00ms | 20.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `/src/fmt/include/fmt/format-inl.h:1054` |
| removed | -1.00ms | 20.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `/src/fmt/include/fmt/format-inl.h:1055` |

##### `std::__cxx11::basic_string::_M_data` (`/usr/include/c++/12/bits/basic_string.h`)

|  Change |   Delta |             % |        Time | Samples | Location                                      |
| ------: | ------: | ------------: | ----------: | ------: | --------------------------------------------- |
| removed | -2.00ms | 100.0% → 0.0% | 2.0ms → 0ms |   2 → 0 | `/usr/include/c++/12/bits/basic_string.h:234` |

#### Callers

Callers with the largest change in contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `fmt::v12::detail::buffer::append` (`/src/fmt/include/fmt/base.h`)

| Change |    Delta |             % |         Time | Samples | Caller                   | Location                      |
| -----: | -------: | ------------: | -----------: | ------: | ------------------------ | ----------------------------- |
|    new | +45.00ms | 0.0% → 100.0% | 0ms → 45.0ms |  0 → 45 | `fmt::v12::detail::copy` | `/src/fmt/include/fmt/base.h` |

##### `fmt::v12::detail::utf8_decode` (`/src/fmt/include/fmt/format.h`)

| Change |    Delta |             % |         Time | Samples | Caller                                                                                     | Location                        |
| -----: | -------: | ------------: | -----------: | ------: | ------------------------------------------------------------------------------------------ | ------------------------------- |
|    new | +42.00ms | 0.0% → 100.0% | 0ms → 42.0ms |  0 → 42 | `fmt::v12::detail::for_each_codepoint()::{lambda(char const*, char const*)#1}::operator()` | `/src/fmt/include/fmt/format.h` |

##### `fmt::v12::detail::parse_format_specs` (`/src/fmt/include/fmt/base.h`)

| Change |    Delta |             % |         Time | Samples | Caller                                              | Location                        |
| -----: | -------: | ------------: | -----------: | ------: | --------------------------------------------------- | ------------------------------- |
|    new | +31.00ms | 0.0% → 100.0% | 0ms → 31.0ms |  0 → 31 | `fmt::v12::detail::format_handler::on_format_specs` | `/src/fmt/include/fmt/format.h` |

##### `fmt::v12::detail::copy_noinline` (`/src/fmt/include/fmt/format.h`)

| Change |    Delta |            % |         Time | Samples | Caller                                                   | Location                        |
| -----: | -------: | -----------: | -----------: | ------: | -------------------------------------------------------- | ------------------------------- |
|    new | +15.00ms | 0.0% → 60.0% | 0ms → 15.0ms |  0 → 15 | `fmt::v12::detail::format_handler::on_text`              | `/src/fmt/include/fmt/format.h` |
|    new |  +7.00ms | 0.0% → 28.0% |  0ms → 7.0ms |   0 → 7 | `fmt::v12::detail::format_handler::on_replacement_field` | `/src/fmt/include/fmt/format.h` |
|    new |  +3.00ms | 0.0% → 12.0% |  0ms → 3.0ms |   0 → 3 | `fmt::v12::detail::write_significand`                    | `/src/fmt/include/fmt/format.h` |

##### `fmt::v12::detail::parse_format_string` (`/src/fmt/include/fmt/base.h`)

| Change |    Delta |             % |         Time | Samples | Caller                         | Location                            |
| -----: | -------: | ------------: | -----------: | ------: | ------------------------------ | ----------------------------------- |
|    new | +19.00ms | 0.0% → 100.0% | 0ms → 19.0ms |  0 → 19 | `fmt::v12::detail::vformat_to` | `/src/fmt/include/fmt/format-inl.h` |

##### `fmt::v12::detail::write` (`/src/fmt/include/fmt/format.h`)

| Change |    Delta |            % |         Time | Samples | Caller                                                | Location                        |
| -----: | -------: | -----------: | -----------: | ------: | ----------------------------------------------------- | ------------------------------- |
|    new | +12.00ms | 0.0% → 66.7% | 0ms → 12.0ms |  0 → 12 | `fmt::v12::detail::format_handler::on_format_specs`   | `/src/fmt/include/fmt/format.h` |
|    new |  +4.00ms | 0.0% → 22.2% |  0ms → 4.0ms |   0 → 4 | `fmt::v12::detail::parse_format_string`               | `/src/fmt/include/fmt/base.h`   |
|    new |  +2.00ms | 0.0% → 11.1% |  0ms → 2.0ms |   0 → 2 | `fmt::v12::detail::default_arg_formatter::operator()` | `/src/fmt/include/fmt/format.h` |

##### `fmt::v12::basic_format_arg::visit` (`/src/fmt/include/fmt/base.h`)

| Change |    Delta |            % |         Time | Samples | Caller                                                   | Location                        |
| -----: | -------: | -----------: | -----------: | ------: | -------------------------------------------------------- | ------------------------------- |
|    new | +12.00ms | 0.0% → 75.0% | 0ms → 12.0ms |  0 → 12 | `fmt::v12::detail::format_handler::on_format_specs`      | `/src/fmt/include/fmt/format.h` |
|    new |  +4.00ms | 0.0% → 25.0% |  0ms → 4.0ms |   0 → 4 | `fmt::v12::detail::format_handler::on_replacement_field` | `/src/fmt/include/fmt/format.h` |

##### `fmt::v12::detail::parse_dynamic_spec` (`/src/fmt/include/fmt/base.h`)

| Change |   Delta |            % |        Time | Samples | Caller                                              | Location                        |
| -----: | ------: | -----------: | ----------: | ------: | --------------------------------------------------- | ------------------------------- |
|    new | +8.00ms | 0.0% → 57.1% | 0ms → 8.0ms |   0 → 8 | `fmt::v12::detail::format_handler::on_format_specs` | `/src/fmt/include/fmt/format.h` |
|    new | +3.00ms | 0.0% → 21.4% | 0ms → 3.0ms |   0 → 3 | `fmt::v12::detail::parse_precision`                 | `/src/fmt/include/fmt/base.h`   |
|    new | +3.00ms | 0.0% → 21.4% | 0ms → 3.0ms |   0 → 3 | `fmt::v12::detail::parse_width`                     | `/src/fmt/include/fmt/base.h`   |

##### `fmt::v12::detail::parse_replacement_field` (`/src/fmt/include/fmt/base.h`)

| Change |    Delta |             % |         Time | Samples | Caller                                  | Location                      |
| -----: | -------: | ------------: | -----------: | ------: | --------------------------------------- | ----------------------------- |
|    new | +13.00ms | 0.0% → 100.0% | 0ms → 13.0ms |  0 → 13 | `fmt::v12::detail::parse_format_string` | `/src/fmt/include/fmt/base.h` |

##### `fmt::v12::detail::write_int` (`/src/fmt/include/fmt/format.h`)

| Change |   Delta |            % |        Time | Samples | Caller                                              | Location                        |
| -----: | ------: | -----------: | ----------: | ------: | --------------------------------------------------- | ------------------------------- |
|    new | +8.00ms | 0.0% → 66.7% | 0ms → 8.0ms |   0 → 8 | `fmt::v12::detail::format_handler::on_format_specs` | `/src/fmt/include/fmt/format.h` |
|    new | +4.00ms | 0.0% → 33.3% | 0ms → 4.0ms |   0 → 4 | `fmt::v12::detail::parse_format_string`             | `/src/fmt/include/fmt/base.h`   |

##### `fmt::v12::detail::format_float` (`/src/fmt/include/fmt/format.h`)

| Change |    Delta |             % |         Time | Samples | Caller                    | Location                        |
| -----: | -------: | ------------: | -----------: | ------: | ------------------------- | ------------------------------- |
|    new | +12.00ms | 0.0% → 100.0% | 0ms → 12.0ms |  0 → 12 | `fmt::v12::detail::write` | `/src/fmt/include/fmt/format.h` |

##### `fmt::v12::detail::parse_nonnegative_int` (`/src/fmt/include/fmt/base.h`)

| Change |    Delta |             % |         Time | Samples | Caller                                 | Location                      |
| -----: | -------: | ------------: | -----------: | ------: | -------------------------------------- | ----------------------------- |
|    new | +12.00ms | 0.0% → 100.0% | 0ms → 12.0ms |  0 → 12 | `fmt::v12::detail::parse_dynamic_spec` | `/src/fmt/include/fmt/base.h` |

##### `fmt::v12::detail::write2digits` (`/src/fmt/include/fmt/format.h`)

| Change |   Delta |            % |        Time | Samples | Caller                                                                          | Location                        |
| -----: | ------: | -----------: | ----------: | ------: | ------------------------------------------------------------------------------- | ------------------------------- |
|    new | +8.00ms | 0.0% → 72.7% | 0ms → 8.0ms |   0 → 8 | `fmt::v12::detail::do_format_decimal`                                           | `/src/fmt/include/fmt/format.h` |
|    new | +3.00ms | 0.0% → 27.3% | 0ms → 3.0ms |   0 → 3 | `fmt::v12::detail::format_float()::{lambda(unsigned int, char*)#1}::operator()` | `/src/fmt/include/fmt/format.h` |

##### `fmt::v12::detail::write()::{lambda(unsigned int, fmt::v12::basic_string_view)#1}::operator()` (`/src/fmt/include/fmt/format.h`)

| Change |    Delta |             % |         Time | Samples | Caller                                                                                     | Location                        |
| -----: | -------: | ------------: | -----------: | ------: | ------------------------------------------------------------------------------------------ | ------------------------------- |
|    new | +11.00ms | 0.0% → 100.0% | 0ms → 11.0ms |  0 → 11 | `fmt::v12::detail::for_each_codepoint()::{lambda(char const*, char const*)#1}::operator()` | `/src/fmt/include/fmt/format.h` |

##### `fmt::v12::detail::format_handler::on_format_specs` (`/src/fmt/include/fmt/format.h`)

| Change |    Delta |             % |         Time | Samples | Caller                                      | Location                      |
| -----: | -------: | ------------: | -----------: | ------: | ------------------------------------------- | ----------------------------- |
|    new | +10.00ms | 0.0% → 100.0% | 0ms → 10.0ms |  0 → 10 | `fmt::v12::detail::parse_replacement_field` | `/src/fmt/include/fmt/base.h` |

##### `fmt::v12::detail::for_each_codepoint()::{lambda(char const*, char const*)#1}::operator()` (`/src/fmt/include/fmt/format.h`)

| Change |    Delta |             % |         Time | Samples | Caller                                 | Location                        |
| -----: | -------: | ------------: | -----------: | ------: | -------------------------------------- | ------------------------------- |
|    new | +10.00ms | 0.0% → 100.0% | 0ms → 10.0ms |  0 → 10 | `fmt::v12::detail::for_each_codepoint` | `/src/fmt/include/fmt/format.h` |

##### `fmt::v12::basic_format_args::get` (`/src/fmt/include/fmt/base.h`)

| Change |   Delta |             % |        Time | Samples | Caller                   | Location                      |
| -----: | ------: | ------------: | ----------: | ------: | ------------------------ | ----------------------------- |
|    new | +9.00ms | 0.0% → 100.0% | 0ms → 9.0ms |   0 → 9 | `fmt::v12::context::arg` | `/src/fmt/include/fmt/base.h` |

##### `fmt::v12::detail::write_fixed` (`/src/fmt/include/fmt/format.h`)

| Change |   Delta |            % |        Time | Samples | Caller                                              | Location                        |
| -----: | ------: | -----------: | ----------: | ------: | --------------------------------------------------- | ------------------------------- |
|    new | +6.00ms | 0.0% → 66.7% | 0ms → 6.0ms |   0 → 6 | `fmt::v12::detail::write_float`                     | `/src/fmt/include/fmt/format.h` |
|    new | +3.00ms | 0.0% → 33.3% | 0ms → 3.0ms |   0 → 3 | `fmt::v12::detail::format_handler::on_format_specs` | `/src/fmt/include/fmt/format.h` |

##### `fmt::v12::detail::buffer::try_reserve` (`/src/fmt/include/fmt/base.h`)

| Change |   Delta |            % |        Time | Samples | Caller                                 | Location                      |
| -----: | ------: | -----------: | ----------: | ------: | -------------------------------------- | ----------------------------- |
|    new | +5.00ms | 0.0% → 62.5% | 0ms → 5.0ms |   0 → 5 | `fmt::v12::detail::buffer::append`     | `/src/fmt/include/fmt/base.h` |
|    new | +2.00ms | 0.0% → 25.0% | 0ms → 2.0ms |   0 → 2 | `fmt::v12::detail::buffer::push_back`  | `/src/fmt/include/fmt/base.h` |
|    new | +1.00ms | 0.0% → 12.5% | 0ms → 1.0ms |   0 → 1 | `fmt::v12::detail::buffer::try_resize` | `/src/fmt/include/fmt/base.h` |

##### `fmt::v12::detail::buffer::push_back` (`/src/fmt/include/fmt/base.h`)

| Change |   Delta |             % |        Time | Samples | Caller                                | Location                      |
| -----: | ------: | ------------: | ----------: | ------: | ------------------------------------- | ----------------------------- |
|    new | +8.00ms | 0.0% → 100.0% | 0ms → 8.0ms |   0 → 8 | `fmt::v12::basic_appender::operator=` | `/src/fmt/include/fmt/base.h` |

##### `0x9e6c0` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |   Delta |            % |        Time | Samples | Caller                                                   | Location                        |
| ------: | ------: | -----------: | ----------: | ------: | -------------------------------------------------------- | ------------------------------- |
|     new | +6.00ms | 0.0% → 50.0% | 0ms → 6.0ms |   0 → 6 | `fmt::v12::detail::format_handler::on_format_specs`      | `/src/fmt/include/fmt/format.h` |
|     new | +6.00ms | 0.0% → 50.0% | 0ms → 6.0ms |   0 → 6 | `fmt::v12::detail::format_handler::on_replacement_field` | `/src/fmt/include/fmt/format.h` |
| removed | -4.00ms | 66.7% → 0.0% | 4.0ms → 0ms |   4 → 0 | `fmt::v11::detail::format_handler::on_replacement_field` | `/src/fmt/include/fmt/format.h` |
| removed | -2.00ms | 33.3% → 0.0% | 2.0ms → 0ms |   2 → 0 | `fmt::v11::detail::format_handler::on_format_specs`      | `/src/fmt/include/fmt/format.h` |

##### `0xa0cb0` (`/usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30`)

|  Change |   Delta |      % |          Time | Samples | Caller    | Location                               |
| ------: | ------: | -----: | ------------: | ------: | --------- | -------------------------------------- |
| +125.0% | +5.00ms | 100.0% | 4.0ms → 9.0ms |   4 → 9 | `0x27743` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x9d100` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |    Delta |             % |         Time | Samples | Caller                         | Location                            |
| ------: | -------: | ------------: | -----------: | ------: | ------------------------------ | ----------------------------------- |
|     new | +14.00ms | 0.0% → 100.0% | 0ms → 14.0ms |  0 → 14 | `fmt::v12::vformat[abi:cxx11]` | `/src/fmt/include/fmt/format-inl.h` |
| removed | -12.00ms | 100.0% → 0.0% | 12.0ms → 0ms |  12 → 0 | `fmt::v11::vformat[abi:cxx11]` | `/src/fmt/include/fmt/format-inl.h` |

##### `0x8faf4` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change |   Delta |      % |          Time | Samples | Caller    | Location                               |
| -----: | ------: | -----: | ------------: | ------: | --------- | -------------------------------------- |
| +33.3% | +1.00ms | 100.0% | 3.0ms → 4.0ms |   3 → 4 | `0x92a9b` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x9d11c` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |   Delta |             % |        Time | Samples | Caller                                              | Location                            |
| ------: | ------: | ------------: | ----------: | ------: | --------------------------------------------------- | ----------------------------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `fmt::v11::vformat[abi:cxx11]`                      | `/src/fmt/include/fmt/format-inl.h` |
|     new | +1.00ms |  0.0% → 50.0% | 0ms → 1.0ms |   0 → 1 | `fmt::v12::detail::format_handler::on_format_specs` | `/src/fmt/include/fmt/format.h`     |
|     new | +1.00ms |  0.0% → 50.0% | 0ms → 1.0ms |   0 → 1 | `fmt::v12::vformat[abi:cxx11]`                      | `/src/fmt/include/fmt/format-inl.h` |

##### `0x92aa0` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |   Delta |      % |          Time | Samples | Caller                             | Location                                   |
| ------: | ------: | -----: | ------------: | ------: | ---------------------------------- | ------------------------------------------ |
| +100.0% | +1.00ms | 100.0% | 1.0ms → 2.0ms |   1 → 2 | `std::__new_allocator::deallocate` | `/usr/include/c++/12/bits/new_allocator.h` |

##### `0x9d1b0` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change |   Delta |             % |        Time | Samples | Caller                         | Location                            |
| -----: | ------: | ------------: | ----------: | ------: | ------------------------------ | ----------------------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `fmt::v12::vformat[abi:cxx11]` | `/src/fmt/include/fmt/format-inl.h` |

##### `0x9d168` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change |   Delta |             % |        Time | Samples | Caller                                              | Location                        |
| -----: | ------: | ------------: | ----------: | ------: | --------------------------------------------------- | ------------------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `fmt::v12::detail::format_handler::on_format_specs` | `/src/fmt/include/fmt/format.h` |

##### `0x9d184` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change |   Delta |             % |        Time | Samples | Caller                                              | Location                        |
| -----: | ------: | ------------: | ----------: | ------: | --------------------------------------------------- | ------------------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `fmt::v12::detail::format_handler::on_format_specs` | `/src/fmt/include/fmt/format.h` |

##### `0x137f3c` (`/usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30`)

| Change |   Delta |             % |        Time | Samples | Caller                         | Location                            |
| -----: | ------: | ------------: | ----------: | ------: | ------------------------------ | ----------------------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `fmt::v12::vformat[abi:cxx11]` | `/src/fmt/include/fmt/format-inl.h` |

##### `std::__cxx11::basic_string::_M_construct` (`/usr/include/c++/12/bits/basic_string.tcc`)

| Change |   Delta |             % |        Time | Samples | Caller                                     | Location                                  |
| -----: | ------: | ------------: | ----------: | ------: | ------------------------------------------ | ----------------------------------------- |
|    new | +2.00ms | 0.0% → 100.0% | 0ms → 2.0ms |   0 → 2 | `std::__cxx11::basic_string::basic_string` | `/usr/include/c++/12/bits/basic_string.h` |

##### `std::char_traits::copy` (`/usr/include/c++/12/bits/char_traits.h`)

| Change |   Delta |             % |        Time | Samples | Caller                                | Location                                  |
| -----: | ------: | ------------: | ----------: | ------: | ------------------------------------- | ----------------------------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `std::__cxx11::basic_string::_S_copy` | `/usr/include/c++/12/bits/basic_string.h` |

##### `std::__cxx11::basic_string::size` (`/usr/include/c++/12/bits/basic_string.h`)

| Change |   Delta |             % |        Time | Samples | Caller | Location           |
| -----: | ------: | ------------: | ----------: | ------: | ------ | ------------------ |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `main` | `/out/profile.cpp` |

##### `fmt::v11::detail::buffer::append` (`/src/fmt/include/fmt/base.h`)

|  Change |    Delta |             % |         Time | Samples | Caller                   | Location                      |
| ------: | -------: | ------------: | -----------: | ------: | ------------------------ | ----------------------------- |
| removed | -47.00ms | 100.0% → 0.0% | 47.0ms → 0ms |  47 → 0 | `fmt::v11::detail::copy` | `/src/fmt/include/fmt/base.h` |

##### `fmt::v11::detail::utf8_decode` (`/src/fmt/include/fmt/format.h`)

|  Change |    Delta |             % |         Time | Samples | Caller                                                                                     | Location                        |
| ------: | -------: | ------------: | -----------: | ------: | ------------------------------------------------------------------------------------------ | ------------------------------- |
| removed | -31.00ms | 100.0% → 0.0% | 31.0ms → 0ms |  31 → 0 | `fmt::v11::detail::for_each_codepoint()::{lambda(char const*, char const*)#1}::operator()` | `/src/fmt/include/fmt/format.h` |

##### `fmt::v11::detail::parse_format_string` (`/src/fmt/include/fmt/base.h`)

|  Change |    Delta |             % |         Time | Samples | Caller                         | Location                            |
| ------: | -------: | ------------: | -----------: | ------: | ------------------------------ | ----------------------------------- |
| removed | -28.00ms | 100.0% → 0.0% | 28.0ms → 0ms |  28 → 0 | `fmt::v11::detail::vformat_to` | `/src/fmt/include/fmt/format-inl.h` |

##### `fmt::v11::detail::parse_format_specs` (`/src/fmt/include/fmt/base.h`)

|  Change |    Delta |             % |         Time | Samples | Caller                                              | Location                        |
| ------: | -------: | ------------: | -----------: | ------: | --------------------------------------------------- | ------------------------------- |
| removed | -26.00ms | 100.0% → 0.0% | 26.0ms → 0ms |  26 → 0 | `fmt::v11::detail::format_handler::on_format_specs` | `/src/fmt/include/fmt/format.h` |

##### `fmt::v11::detail::copy_noinline` (`/src/fmt/include/fmt/format.h`)

|  Change |    Delta |            % |         Time | Samples | Caller                                                   | Location                        |
| ------: | -------: | -----------: | -----------: | ------: | -------------------------------------------------------- | ------------------------------- |
| removed | -14.00ms | 66.7% → 0.0% | 14.0ms → 0ms |  14 → 0 | `fmt::v11::detail::format_handler::on_text`              | `/src/fmt/include/fmt/format.h` |
| removed |  -5.00ms | 23.8% → 0.0% |  5.0ms → 0ms |   5 → 0 | `fmt::v11::detail::format_handler::on_replacement_field` | `/src/fmt/include/fmt/format.h` |
| removed |  -1.00ms |  4.8% → 0.0% |  1.0ms → 0ms |   1 → 0 | `fmt::v11::detail::write_significand`                    | `/src/fmt/include/fmt/format.h` |
| removed |  -1.00ms |  4.8% → 0.0% |  1.0ms → 0ms |   1 → 0 | `fmt::v11::format`                                       | `/src/fmt/include/fmt/format.h` |

##### `fmt::v11::detail::parse_replacement_field` (`/src/fmt/include/fmt/base.h`)

|  Change |    Delta |             % |         Time | Samples | Caller                                  | Location                      |
| ------: | -------: | ------------: | -----------: | ------: | --------------------------------------- | ----------------------------- |
| removed | -19.00ms | 100.0% → 0.0% | 19.0ms → 0ms |  19 → 0 | `fmt::v11::detail::parse_format_string` | `/src/fmt/include/fmt/base.h` |

##### `fmt::v11::detail::parse_dynamic_spec` (`/src/fmt/include/fmt/base.h`)

|  Change |   Delta |            % |        Time | Samples | Caller                                              | Location                        |
| ------: | ------: | -----------: | ----------: | ------: | --------------------------------------------------- | ------------------------------- |
| removed | -7.00ms | 43.8% → 0.0% | 7.0ms → 0ms |   7 → 0 | `fmt::v11::detail::parse_width`                     | `/src/fmt/include/fmt/base.h`   |
| removed | -7.00ms | 43.8% → 0.0% | 7.0ms → 0ms |   7 → 0 | `fmt::v11::detail::format_handler::on_format_specs` | `/src/fmt/include/fmt/format.h` |
| removed | -2.00ms | 12.5% → 0.0% | 2.0ms → 0ms |   2 → 0 | `fmt::v11::detail::parse_precision`                 | `/src/fmt/include/fmt/base.h`   |

##### `fmt::v11::detail::write_float` (`/src/fmt/include/fmt/format.h`)

|  Change |    Delta |            % |         Time | Samples | Caller                                              | Location                        |
| ------: | -------: | -----------: | -----------: | ------: | --------------------------------------------------- | ------------------------------- |
| removed | -11.00ms | 84.6% → 0.0% | 11.0ms → 0ms |  11 → 0 | `fmt::v11::detail::write`                           | `/src/fmt/include/fmt/format.h` |
| removed |  -2.00ms | 15.4% → 0.0% |  2.0ms → 0ms |   2 → 0 | `fmt::v11::detail::format_handler::on_format_specs` | `/src/fmt/include/fmt/format.h` |

##### `fmt::v11::detail::do_format_decimal` (`/src/fmt/include/fmt/format.h`)

|  Change |    Delta |            % |         Time | Samples | Caller                                                   | Location                        |
| ------: | -------: | -----------: | -----------: | ------: | -------------------------------------------------------- | ------------------------------- |
| removed | -11.00ms | 91.7% → 0.0% | 11.0ms → 0ms |  11 → 0 | `fmt::v11::detail::write_int`                            | `/src/fmt/include/fmt/format.h` |
| removed |  -1.00ms |  8.3% → 0.0% |  1.0ms → 0ms |   1 → 0 | `fmt::v11::detail::format_handler::on_replacement_field` | `/src/fmt/include/fmt/format.h` |

##### `fmt::v11::basic_format_arg::visit` (`/src/fmt/include/fmt/base.h`)

|  Change |    Delta |            % |         Time | Samples | Caller                                                   | Location                        |
| ------: | -------: | -----------: | -----------: | ------: | -------------------------------------------------------- | ------------------------------- |
| removed | -10.00ms | 83.3% → 0.0% | 10.0ms → 0ms |  10 → 0 | `fmt::v11::detail::format_handler::on_format_specs`      | `/src/fmt/include/fmt/format.h` |
| removed |  -2.00ms | 16.7% → 0.0% |  2.0ms → 0ms |   2 → 0 | `fmt::v11::detail::format_handler::on_replacement_field` | `/src/fmt/include/fmt/format.h` |

##### `fmt::v11::detail::parse_format_specs()::{unnamed type#1}::operator()` (`/src/fmt/include/fmt/base.h`)

|  Change |    Delta |             % |         Time | Samples | Caller                                 | Location                      |
| ------: | -------: | ------------: | -----------: | ------: | -------------------------------------- | ----------------------------- |
| removed | -11.00ms | 100.0% → 0.0% | 11.0ms → 0ms |  11 → 0 | `fmt::v11::detail::parse_format_specs` | `/src/fmt/include/fmt/base.h` |

##### `fmt::v11::detail::format_handler::on_format_specs` (`/src/fmt/include/fmt/format.h`)

|  Change |   Delta |            % |        Time | Samples | Caller                                      | Location                      |
| ------: | ------: | -----------: | ----------: | ------: | ------------------------------------------- | ----------------------------- |
| removed | -9.00ms | 90.0% → 0.0% | 9.0ms → 0ms |   9 → 0 | `fmt::v11::detail::parse_replacement_field` | `/src/fmt/include/fmt/base.h` |
| removed | -1.00ms | 10.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `fmt::v11::detail::parse_format_string`     | `/src/fmt/include/fmt/base.h` |

##### `fmt::v11::detail::parse_nonnegative_int` (`/src/fmt/include/fmt/base.h`)

|  Change |    Delta |             % |         Time | Samples | Caller                                 | Location                      |
| ------: | -------: | ------------: | -----------: | ------: | -------------------------------------- | ----------------------------- |
| removed | -10.00ms | 100.0% → 0.0% | 10.0ms → 0ms |  10 → 0 | `fmt::v11::detail::parse_dynamic_spec` | `/src/fmt/include/fmt/base.h` |

##### `fmt::v11::detail::write_int` (`/src/fmt/include/fmt/format.h`)

|  Change |   Delta |            % |        Time | Samples | Caller                                              | Location                        |
| ------: | ------: | -----------: | ----------: | ------: | --------------------------------------------------- | ------------------------------- |
| removed | -7.00ms | 87.5% → 0.0% | 7.0ms → 0ms |   7 → 0 | `fmt::v11::detail::format_handler::on_format_specs` | `/src/fmt/include/fmt/format.h` |
| removed | -1.00ms | 12.5% → 0.0% | 1.0ms → 0ms |   1 → 0 | `fmt::v11::detail::parse_replacement_field`         | `/src/fmt/include/fmt/base.h`   |

##### `fmt::v11::detail::compute_width()::count_code_points::operator()` (`/src/fmt/include/fmt/format.h`)

|  Change |   Delta |             % |        Time | Samples | Caller                                                                                     | Location                        |
| ------: | ------: | ------------: | ----------: | ------: | ------------------------------------------------------------------------------------------ | ------------------------------- |
| removed | -8.00ms | 100.0% → 0.0% | 8.0ms → 0ms |   8 → 0 | `fmt::v11::detail::for_each_codepoint()::{lambda(char const*, char const*)#1}::operator()` | `/src/fmt/include/fmt/format.h` |

##### `fmt::v11::parse_context::next_arg_id` (`/src/fmt/include/fmt/base.h`)

|  Change |   Delta |             % |        Time | Samples | Caller                                        | Location                        |
| ------: | ------: | ------------: | ----------: | ------: | --------------------------------------------- | ------------------------------- |
| removed | -7.00ms | 100.0% → 0.0% | 7.0ms → 0ms |   7 → 0 | `fmt::v11::detail::format_handler::on_arg_id` | `/src/fmt/include/fmt/format.h` |

##### `fmt::v11::detail::format_float` (`/src/fmt/include/fmt/format.h`)

|  Change |   Delta |             % |        Time | Samples | Caller                          | Location                        |
| ------: | ------: | ------------: | ----------: | ------: | ------------------------------- | ------------------------------- |
| removed | -7.00ms | 100.0% → 0.0% | 7.0ms → 0ms |   7 → 0 | `fmt::v11::detail::write_float` | `/src/fmt/include/fmt/format.h` |

##### `fmt::v11::detail::write_padded` (`/src/fmt/include/fmt/format.h`)

|  Change |   Delta |            % |        Time | Samples | Caller                           | Location                        |
| ------: | ------: | -----------: | ----------: | ------: | -------------------------------- | ------------------------------- |
| removed | -5.00ms | 71.4% → 0.0% | 5.0ms → 0ms |   5 → 0 | `fmt::v11::detail::write_padded` | `/src/fmt/include/fmt/format.h` |
| removed | -2.00ms | 28.6% → 0.0% | 2.0ms → 0ms |   2 → 0 | `fmt::v11::detail::write`        | `/src/fmt/include/fmt/format.h` |

##### `fmt::v11::detail::buffer::push_back` (`/src/fmt/include/fmt/base.h`)

|  Change |   Delta |             % |        Time | Samples | Caller                                | Location                      |
| ------: | ------: | ------------: | ----------: | ------: | ------------------------------------- | ----------------------------- |
| removed | -7.00ms | 100.0% → 0.0% | 7.0ms → 0ms |   7 → 0 | `fmt::v11::basic_appender::operator=` | `/src/fmt/include/fmt/base.h` |

##### `fmt::v11::detail::dragonbox::cache_accessor::get_cached_power` (`/src/fmt/include/fmt/format-inl.h`)

|  Change |   Delta |             % |        Time | Samples | Caller                                          | Location                            |
| ------: | ------: | ------------: | ----------: | ------: | ----------------------------------------------- | ----------------------------------- |
| removed | -5.00ms | 100.0% → 0.0% | 5.0ms → 0ms |   5 → 0 | `fmt::v11::detail::dragonbox::get_cached_power` | `/src/fmt/include/fmt/format-inl.h` |

##### `0x137f20` (`/usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30`)

|  Change |    Delta |             % |         Time | Samples | Caller                         | Location                            |
| ------: | -------: | ------------: | -----------: | ------: | ------------------------------ | ----------------------------------- |
| removed | -15.00ms | 100.0% → 0.0% | 15.0ms → 0ms |  15 → 0 | `fmt::v11::vformat[abi:cxx11]` | `/src/fmt/include/fmt/format-inl.h` |
|     new | +10.00ms | 0.0% → 100.0% | 0ms → 10.0ms |  0 → 10 | `fmt::v12::vformat[abi:cxx11]` | `/src/fmt/include/fmt/format-inl.h` |

##### `0x137f84` (`/usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30`)

|  Change |   Delta |             % |        Time | Samples | Caller                          | Location                        |
| ------: | ------: | ------------: | ----------: | ------: | ------------------------------- | ------------------------------- |
| removed | -5.00ms | 100.0% → 0.0% | 5.0ms → 0ms |   5 → 0 | `fmt::v11::detail::write_float` | `/src/fmt/include/fmt/format.h` |
|     new | +2.00ms | 0.0% → 100.0% | 0ms → 2.0ms |   0 → 2 | `fmt::v12::detail::write_float` | `/src/fmt/include/fmt/format.h` |

##### `0x92284` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change |   Delta |      % |          Time | Samples | Caller    | Location                                         |
| -----: | ------: | -----: | ------------: | ------: | --------- | ------------------------------------------------ |
| -50.0% | -3.00ms | 100.0% | 6.0ms → 3.0ms |   6 → 3 | `0xa2cab` | `/usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |

##### `0x137f94` (`/usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30`)

|  Change |   Delta |             % |        Time | Samples | Caller                          | Location                        |
| ------: | ------: | ------------: | ----------: | ------: | ------------------------------- | ------------------------------- |
| removed | -2.00ms | 100.0% → 0.0% | 2.0ms → 0ms |   2 → 0 | `fmt::v11::detail::write_float` | `/src/fmt/include/fmt/format.h` |

##### `0x8fae0` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |   Delta |             % |        Time | Samples | Caller    | Location                               |
| ------: | ------: | ------------: | ----------: | ------: | --------- | -------------------------------------- |
| removed | -2.00ms | 100.0% → 0.0% | 2.0ms → 0ms |   2 → 0 | `0x92a9b` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x8faa0` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |   Delta |             % |        Time | Samples | Caller    | Location                               |
| ------: | ------: | ------------: | ----------: | ------: | --------- | -------------------------------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `0x92a9b` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x92aa4` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |   Delta |             % |        Time | Samples | Caller                             | Location                                   |
| ------: | ------: | ------------: | ----------: | ------: | ---------------------------------- | ------------------------------------------ |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `std::__new_allocator::deallocate` | `/usr/include/c++/12/bits/new_allocator.h` |

##### `0x92260` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |   Delta |             % |        Time | Samples | Caller    | Location                                         |
| ------: | ------: | ------------: | ----------: | ------: | --------- | ------------------------------------------------ |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `0xa2cab` | `/usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |

##### `0x9d138` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |   Delta |             % |        Time | Samples | Caller                                              | Location                            |
| ------: | ------: | ------------: | ----------: | ------: | --------------------------------------------------- | ----------------------------------- |
| removed | -2.00ms | 100.0% → 0.0% | 2.0ms → 0ms |   2 → 0 | `fmt::v11::detail::format_handler::on_format_specs` | `/src/fmt/include/fmt/format.h`     |
|     new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `fmt::v12::vformat[abi:cxx11]`                      | `/src/fmt/include/fmt/format-inl.h` |

##### `0x9a8f0` (`/usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30`)

|  Change |   Delta |             % |        Time | Samples | Caller    | Location                               |
| ------: | ------: | ------------: | ----------: | ------: | --------- | -------------------------------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `0x27743` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x929c4` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |   Delta |             % |        Time | Samples | Caller    | Location                               |
| ------: | ------: | ------------: | ----------: | ------: | --------- | -------------------------------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `0x27743` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x8fb44` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |   Delta |             % |        Time | Samples | Caller    | Location                               |
| ------: | ------: | ------------: | ----------: | ------: | --------- | -------------------------------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `0x92a9b` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x9c2e4` (`/usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30`)

| Change |   Delta |      % |          Time | Samples | Caller                                     | Location                                    |
| -----: | ------: | -----: | ------------: | ------: | ------------------------------------------ | ------------------------------------------- |
| -50.0% | -1.00ms | 100.0% | 2.0ms → 1.0ms |   2 → 1 | `std::__cxx11::basic_string::_M_construct` | `/usr/include/c++/12/bits/basic_string.tcc` |

##### `0xa2c9c` (`/usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30`)

|  Change |   Delta |             % |        Time | Samples | Caller                                     | Location                                    |
| ------: | ------: | ------------: | ----------: | ------: | ------------------------------------------ | ------------------------------------------- |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `std::__cxx11::basic_string::_M_construct` | `/usr/include/c++/12/bits/basic_string.tcc` |

##### `0x92a58` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |   Delta |             % |        Time | Samples | Caller                             | Location                                   |
| ------: | ------: | ------------: | ----------: | ------: | ---------------------------------- | ------------------------------------------ |
| removed | -1.00ms | 100.0% → 0.0% | 1.0ms → 0ms |   1 → 0 | `std::__new_allocator::deallocate` | `/usr/include/c++/12/bits/new_allocator.h` |

##### `std::__cxx11::basic_string::_M_data` (`/usr/include/c++/12/bits/basic_string.h`)

|  Change |   Delta |             % |        Time | Samples | Caller                                      | Location                                  |
| ------: | ------: | ------------: | ----------: | ------: | ------------------------------------------- | ----------------------------------------- |
| removed | -2.00ms | 100.0% → 0.0% | 2.0ms → 0ms |   2 → 0 | `std::__cxx11::basic_string::_M_set_length` | `/usr/include/c++/12/bits/basic_string.h` |

### Total time

#### Regressions

Functions with the largest increase in total time spent in the function and all its callees.

##### Ours

| Change |     Delta |            % |          Time | Samples | Function                                                                                   | Location                            |
| -----: | --------: | -----------: | ------------: | ------: | ------------------------------------------------------------------------------------------ | ----------------------------------- |
|    new | +515.00ms | 0.0% → 95.9% | 0ms → 515.0ms | 0 → 515 | `fmt::v12::vformat[abi:cxx11]`                                                             | `/src/fmt/include/fmt/format-inl.h` |
|    new | +512.00ms | 0.0% → 95.3% | 0ms → 512.0ms | 0 → 512 | `fmt::v12::format`                                                                         | `/src/fmt/include/fmt/format.h`     |
|    new | +470.00ms | 0.0% → 87.5% | 0ms → 470.0ms | 0 → 470 | `fmt::v12::detail::vformat_to`                                                             | `/src/fmt/include/fmt/format-inl.h` |
|    new | +468.00ms | 0.0% → 87.2% | 0ms → 468.0ms | 0 → 468 | `fmt::v12::detail::parse_format_string`                                                    | `/src/fmt/include/fmt/base.h`       |
|    new | +405.00ms | 0.0% → 75.4% | 0ms → 405.0ms | 0 → 405 | `fmt::v12::detail::parse_replacement_field`                                                | `/src/fmt/include/fmt/base.h`       |
|    new | +340.00ms | 0.0% → 63.3% | 0ms → 340.0ms | 0 → 340 | `fmt::v12::detail::format_handler::on_format_specs`                                        | `/src/fmt/include/fmt/format.h`     |
|    new | +189.00ms | 0.0% → 35.2% | 0ms → 189.0ms | 0 → 189 | `fmt::v12::detail::write`                                                                  | `/src/fmt/include/fmt/format.h`     |
|    new |  +71.00ms | 0.0% → 13.2% |  0ms → 71.0ms |  0 → 71 | `fmt::v12::detail::for_each_codepoint`                                                     | `/src/fmt/include/fmt/format.h`     |
|    new |  +66.00ms | 0.0% → 12.3% |  0ms → 66.0ms |  0 → 66 | `fmt::v12::detail::for_each_codepoint()::{lambda(char const*, char const*)#1}::operator()` | `/src/fmt/include/fmt/format.h`     |
|    new |  +64.00ms | 0.0% → 11.9% |  0ms → 64.0ms |  0 → 64 | `fmt::v12::detail::copy_noinline`                                                          | `/src/fmt/include/fmt/format.h`     |
|    new |  +64.00ms | 0.0% → 11.9% |  0ms → 64.0ms |  0 → 64 | `fmt::v12::detail::write_padded`                                                           | `/src/fmt/include/fmt/format.h`     |
|    new |  +57.00ms | 0.0% → 10.6% |  0ms → 57.0ms |  0 → 57 | `fmt::v12::detail::parse_format_specs`                                                     | `/src/fmt/include/fmt/base.h`       |
|    new |  +53.00ms |  0.0% → 9.9% |  0ms → 53.0ms |  0 → 53 | `fmt::v12::detail::copy`                                                                   | `/src/fmt/include/fmt/base.h`       |
|    new |  +52.00ms |  0.0% → 9.7% |  0ms → 52.0ms |  0 → 52 | `fmt::v12::detail::buffer::append`                                                         | `/src/fmt/include/fmt/base.h`       |
|    new |  +47.00ms |  0.0% → 8.8% |  0ms → 47.0ms |  0 → 47 | `fmt::v12::detail::write_int`                                                              | `/src/fmt/include/fmt/format.h`     |
|    new |  +47.00ms |  0.0% → 8.8% |  0ms → 47.0ms |  0 → 47 | `fmt::v12::detail::format_handler::on_replacement_field`                                   | `/src/fmt/include/fmt/format.h`     |
|    new |  +47.00ms |  0.0% → 8.8% |  0ms → 47.0ms |  0 → 47 | `fmt::v12::detail::write_float`                                                            | `/src/fmt/include/fmt/format.h`     |
|    new |  +42.00ms |  0.0% → 7.8% |  0ms → 42.0ms |  0 → 42 | `fmt::v12::detail::utf8_decode`                                                            | `/src/fmt/include/fmt/format.h`     |
|    new |  +36.00ms |  0.0% → 6.7% |  0ms → 36.0ms |  0 → 36 | `fmt::v12::detail::format_handler::on_text`                                                | `/src/fmt/include/fmt/format.h`     |
|    new |  +36.00ms |  0.0% → 6.7% |  0ms → 36.0ms |  0 → 36 | `fmt::v12::detail::write_fixed`                                                            | `/src/fmt/include/fmt/format.h`     |

##### Native

|  Change |    Delta |           % |              Time |   Samples | Function   | Location                                         |
| ------: | -------: | ----------: | ----------------: | --------: | ---------- | ------------------------------------------------ |
|   +5.7% | +29.00ms |      100.0% | 508.0ms → 537.0ms | 508 → 537 | `0x27743`  | `/usr/lib/aarch64-linux-gnu/libc.so.6`           |
|   +5.7% | +29.00ms |      100.0% | 508.0ms → 537.0ms | 508 → 537 | `0x27817`  | `/usr/lib/aarch64-linux-gnu/libc.so.6`           |
|   +5.7% | +29.00ms |      100.0% | 508.0ms → 537.0ms | 508 → 537 | `_start`   | `<unknown>`                                      |
| +100.0% |  +6.00ms | 1.2% → 2.2% |    6.0ms → 12.0ms |    6 → 12 | `0x9e6c0`  | `/usr/lib/aarch64-linux-gnu/libc.so.6`           |
| +125.0% |  +5.00ms | 0.8% → 1.7% |     4.0ms → 9.0ms |     4 → 9 | `0xa0cb0`  | `/usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
|  +16.7% |  +2.00ms | 2.4% → 2.6% |   12.0ms → 14.0ms |   12 → 14 | `0x9d100`  | `/usr/lib/aarch64-linux-gnu/libc.so.6`           |
|  +33.3% |  +1.00ms | 0.6% → 0.7% |     3.0ms → 4.0ms |     3 → 4 | `0x8faf4`  | `/usr/lib/aarch64-linux-gnu/libc.so.6`           |
| +100.0% |  +1.00ms | 0.2% → 0.4% |     1.0ms → 2.0ms |     1 → 2 | `0x9d11c`  | `/usr/lib/aarch64-linux-gnu/libc.so.6`           |
| +100.0% |  +1.00ms | 0.2% → 0.4% |     1.0ms → 2.0ms |     1 → 2 | `0x92aa0`  | `/usr/lib/aarch64-linux-gnu/libc.so.6`           |
|     new |  +1.00ms | 0.0% → 0.2% |       0ms → 1.0ms |     0 → 1 | `0x9d1b0`  | `/usr/lib/aarch64-linux-gnu/libc.so.6`           |
|     new |  +1.00ms | 0.0% → 0.2% |       0ms → 1.0ms |     0 → 1 | `0x9d168`  | `/usr/lib/aarch64-linux-gnu/libc.so.6`           |
|     new |  +1.00ms | 0.0% → 0.2% |       0ms → 1.0ms |     0 → 1 | `0x9d184`  | `/usr/lib/aarch64-linux-gnu/libc.so.6`           |
|     new |  +1.00ms | 0.0% → 0.2% |       0ms → 1.0ms |     0 → 1 | `0x137f3c` | `/usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |

##### Standard library

| Change |   Delta |           % |        Time | Samples | Function                                    | Location                                  |
| -----: | ------: | ----------: | ----------: | ------: | ------------------------------------------- | ----------------------------------------- |
|    new | +1.00ms | 0.0% → 0.2% | 0ms → 1.0ms |   0 → 1 | `std::char_traits::copy`                    | `/usr/include/c++/12/bits/char_traits.h`  |
|    new | +1.00ms | 0.0% → 0.2% | 0ms → 1.0ms |   0 → 1 | `std::__cxx11::basic_string::_S_copy`       | `/usr/include/c++/12/bits/basic_string.h` |
|    new | +1.00ms | 0.0% → 0.2% | 0ms → 1.0ms |   0 → 1 | `std::__cxx11::basic_string::_S_copy_chars` | `/usr/include/c++/12/bits/basic_string.h` |
|    new | +1.00ms | 0.0% → 0.2% | 0ms → 1.0ms |   0 → 1 | `std::__cxx11::basic_string::size`          | `/usr/include/c++/12/bits/basic_string.h` |

#### Improvements

Functions with the largest decrease in total time spent in the function and all its callees.

##### Ours

|  Change |     Delta |            % |          Time | Samples | Function                                                 | Location                            |
| ------: | --------: | -----------: | ------------: | ------: | -------------------------------------------------------- | ----------------------------------- |
| removed | -484.00ms | 95.3% → 0.0% | 484.0ms → 0ms | 484 → 0 | `fmt::v11::vformat[abi:cxx11]`                           | `/src/fmt/include/fmt/format-inl.h` |
| removed | -484.00ms | 95.3% → 0.0% | 484.0ms → 0ms | 484 → 0 | `fmt::v11::format`                                       | `/src/fmt/include/fmt/format.h`     |
| removed | -430.00ms | 84.6% → 0.0% | 430.0ms → 0ms | 430 → 0 | `fmt::v11::detail::vformat_to`                           | `/src/fmt/include/fmt/format-inl.h` |
| removed | -429.00ms | 84.4% → 0.0% | 429.0ms → 0ms | 429 → 0 | `fmt::v11::detail::parse_format_string`                  | `/src/fmt/include/fmt/base.h`       |
| removed | -370.00ms | 72.8% → 0.0% | 370.0ms → 0ms | 370 → 0 | `fmt::v11::detail::parse_replacement_field`              | `/src/fmt/include/fmt/base.h`       |
| removed | -301.00ms | 59.3% → 0.0% | 301.0ms → 0ms | 301 → 0 | `fmt::v11::detail::format_handler::on_format_specs`      | `/src/fmt/include/fmt/format.h`     |
| removed | -149.00ms | 29.3% → 0.0% | 149.0ms → 0ms | 149 → 0 | `fmt::v11::detail::write`                                | `/src/fmt/include/fmt/format.h`     |
| removed | -119.00ms | 23.4% → 0.0% | 119.0ms → 0ms | 119 → 0 | `fmt::v11::basic_format_arg::visit`                      | `/src/fmt/include/fmt/base.h`       |
| removed | -103.00ms | 20.3% → 0.0% | 103.0ms → 0ms | 103 → 0 | `fmt::v11::detail::arg_formatter::operator()`            | `/src/fmt/include/fmt/format.h`     |
| removed |  -96.00ms | 18.9% → 0.0% |  96.0ms → 0ms |  96 → 0 | `fmt::v11::detail::write_float`                          | `/src/fmt/include/fmt/format.h`     |
| removed |  -65.00ms | 12.8% → 0.0% |  65.0ms → 0ms |  65 → 0 | `fmt::v11::detail::parse_format_specs`                   | `/src/fmt/include/fmt/base.h`       |
| removed |  -60.00ms | 11.8% → 0.0% |  60.0ms → 0ms |  60 → 0 | `fmt::v11::detail::copy_noinline`                        | `/src/fmt/include/fmt/format.h`     |
| removed |  -55.00ms | 10.8% → 0.0% |  55.0ms → 0ms |  55 → 0 | `fmt::v11::detail::write_padded`                         | `/src/fmt/include/fmt/format.h`     |
| removed |  -49.00ms |  9.6% → 0.0% |  49.0ms → 0ms |  49 → 0 | `fmt::v11::detail::buffer::append`                       | `/src/fmt/include/fmt/base.h`       |
| removed |  -49.00ms |  9.6% → 0.0% |  49.0ms → 0ms |  49 → 0 | `fmt::v11::detail::copy`                                 | `/src/fmt/include/fmt/base.h`       |
| removed |  -43.00ms |  8.5% → 0.0% |  43.0ms → 0ms |  43 → 0 | `fmt::v11::detail::format_handler::on_replacement_field` | `/src/fmt/include/fmt/format.h`     |
| removed |  -42.00ms |  8.3% → 0.0% |  42.0ms → 0ms |  42 → 0 | `fmt::v11::detail::write_int`                            | `/src/fmt/include/fmt/format.h`     |
| removed |  -40.00ms |  7.9% → 0.0% |  40.0ms → 0ms |  40 → 0 | `fmt::v11::detail::for_each_codepoint`                   | `/src/fmt/include/fmt/format.h`     |
| removed |  -40.00ms |  7.9% → 0.0% |  40.0ms → 0ms |  40 → 0 | `fmt::v11::detail::compute_width`                        | `/src/fmt/include/fmt/format.h`     |
| removed |  -39.00ms |  7.7% → 0.0% |  39.0ms → 0ms |  39 → 0 | `fmt::v11::detail::do_write_float`                       | `/src/fmt/include/fmt/format.h`     |

##### Native

|  Change |   Delta |           % |            Time | Samples | Function   | Location                                         |
| ------: | ------: | ----------: | --------------: | ------: | ---------- | ------------------------------------------------ |
|  -33.3% | -5.00ms | 3.0% → 1.9% | 15.0ms → 10.0ms | 15 → 10 | `0x137f20` | `/usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
|  -44.4% | -4.00ms | 1.8% → 0.9% |   9.0ms → 5.0ms |   9 → 5 | `0xa2cab`  | `/usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
|  -37.5% | -3.00ms | 1.6% → 0.9% |   8.0ms → 5.0ms |   8 → 5 | `0x92a9b`  | `/usr/lib/aarch64-linux-gnu/libc.so.6`           |
|  -60.0% | -3.00ms | 1.0% → 0.4% |   5.0ms → 2.0ms |   5 → 2 | `0x137f84` | `/usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
|  -50.0% | -3.00ms | 1.2% → 0.6% |   6.0ms → 3.0ms |   6 → 3 | `0x92284`  | `/usr/lib/aarch64-linux-gnu/libc.so.6`           |
| removed | -2.00ms | 0.4% → 0.0% |     2.0ms → 0ms |   2 → 0 | `0x137f94` | `/usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
| removed | -2.00ms | 0.4% → 0.0% |     2.0ms → 0ms |   2 → 0 | `0x8fae0`  | `/usr/lib/aarch64-linux-gnu/libc.so.6`           |
| removed | -1.00ms | 0.2% → 0.0% |     1.0ms → 0ms |   1 → 0 | `0x8faa0`  | `/usr/lib/aarch64-linux-gnu/libc.so.6`           |
| removed | -1.00ms | 0.2% → 0.0% |     1.0ms → 0ms |   1 → 0 | `0x92aa4`  | `/usr/lib/aarch64-linux-gnu/libc.so.6`           |
| removed | -1.00ms | 0.2% → 0.0% |     1.0ms → 0ms |   1 → 0 | `0x92260`  | `/usr/lib/aarch64-linux-gnu/libc.so.6`           |
|  -50.0% | -1.00ms | 0.4% → 0.2% |   2.0ms → 1.0ms |   2 → 1 | `0x9d138`  | `/usr/lib/aarch64-linux-gnu/libc.so.6`           |
| removed | -1.00ms | 0.2% → 0.0% |     1.0ms → 0ms |   1 → 0 | `0x9a8f0`  | `/usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
| removed | -1.00ms | 0.2% → 0.0% |     1.0ms → 0ms |   1 → 0 | `0x929c4`  | `/usr/lib/aarch64-linux-gnu/libc.so.6`           |
| removed | -1.00ms | 0.2% → 0.0% |     1.0ms → 0ms |   1 → 0 | `0x8fb44`  | `/usr/lib/aarch64-linux-gnu/libc.so.6`           |
|  -50.0% | -1.00ms | 0.4% → 0.2% |   2.0ms → 1.0ms |   2 → 1 | `0x9c2e4`  | `/usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
| removed | -1.00ms | 0.2% → 0.0% |     1.0ms → 0ms |   1 → 0 | `0xa2c9c`  | `/usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
| removed | -1.00ms | 0.2% → 0.0% |     1.0ms → 0ms |   1 → 0 | `0x92a58`  | `/usr/lib/aarch64-linux-gnu/libc.so.6`           |

##### Standard library

|  Change |   Delta |           % |            Time | Samples | Function                                    | Location                                    |
| ------: | ------: | ----------: | --------------: | ------: | ------------------------------------------- | ------------------------------------------- |
|  -35.7% | -5.00ms | 2.8% → 1.7% |  14.0ms → 9.0ms |  14 → 9 | `std::__cxx11::basic_string::_M_construct`  | `/usr/include/c++/12/bits/basic_string.tcc` |
|  -33.3% | -5.00ms | 3.0% → 1.9% | 15.0ms → 10.0ms | 15 → 10 | `std::__cxx11::basic_string::basic_string`  | `/usr/include/c++/12/bits/basic_string.h`   |
|  -26.7% | -4.00ms | 3.0% → 2.0% | 15.0ms → 11.0ms | 15 → 11 | `std::__cxx11::basic_string::~basic_string` | `/usr/include/c++/12/bits/basic_string.h`   |
|  -28.6% | -4.00ms | 2.8% → 1.9% | 14.0ms → 10.0ms | 14 → 10 | `std::__new_allocator::deallocate`          | `/usr/include/c++/12/bits/new_allocator.h`  |
|  -28.6% | -4.00ms | 2.8% → 1.9% | 14.0ms → 10.0ms | 14 → 10 | `std::allocator_traits::deallocate`         | `/usr/include/c++/12/bits/alloc_traits.h`   |
|  -28.6% | -4.00ms | 2.8% → 1.9% | 14.0ms → 10.0ms | 14 → 10 | `std::__cxx11::basic_string::_M_destroy`    | `/usr/include/c++/12/bits/basic_string.h`   |
|  -28.6% | -4.00ms | 2.8% → 1.9% | 14.0ms → 10.0ms | 14 → 10 | `std::__cxx11::basic_string::_M_dispose`    | `/usr/include/c++/12/bits/basic_string.h`   |
| removed | -2.00ms | 0.4% → 0.0% |     2.0ms → 0ms |   2 → 0 | `std::__cxx11::basic_string::_M_data`       | `/usr/include/c++/12/bits/basic_string.h`   |
| removed | -2.00ms | 0.4% → 0.0% |     2.0ms → 0ms |   2 → 0 | `std::__cxx11::basic_string::_M_set_length` | `/usr/include/c++/12/bits/basic_string.h`   |

#### Callees

Callees with the largest change in contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `fmt::v12::vformat[abi:cxx11]` (`/src/fmt/include/fmt/format-inl.h`)

| Change |     Delta |            % |          Time | Samples | Callee                         | Location                                         |
| -----: | --------: | -----------: | ------------: | ------: | ------------------------------ | ------------------------------------------------ |
|    new | +470.00ms | 0.0% → 91.3% | 0ms → 470.0ms | 0 → 470 | `fmt::v12::detail::vformat_to` | `/src/fmt/include/fmt/format-inl.h`              |
|    new |  +14.00ms |  0.0% → 2.7% |  0ms → 14.0ms |  0 → 14 | `0x9d100`                      | `/usr/lib/aarch64-linux-gnu/libc.so.6`           |
|    new |  +11.00ms |  0.0% → 2.1% |  0ms → 11.0ms |  0 → 11 | `fmt::v12::to_string`          | `/src/fmt/include/fmt/format.h`                  |
|    new |  +10.00ms |  0.0% → 1.9% |  0ms → 10.0ms |  0 → 10 | `0x137f20`                     | `/usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
|    new |   +2.00ms |  0.0% → 0.4% |   0ms → 2.0ms |   0 → 2 | `0x9a104`                      | `/usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |

##### `fmt::v12::format` (`/src/fmt/include/fmt/format.h`)

| Change |     Delta |             % |          Time | Samples | Callee                         | Location                            |
| -----: | --------: | ------------: | ------------: | ------: | ------------------------------ | ----------------------------------- |
|    new | +512.00ms | 0.0% → 100.0% | 0ms → 512.0ms | 0 → 512 | `fmt::v12::vformat[abi:cxx11]` | `/src/fmt/include/fmt/format-inl.h` |

##### `fmt::v12::detail::vformat_to` (`/src/fmt/include/fmt/format-inl.h`)

| Change |     Delta |            % |          Time | Samples | Callee                                  | Location                      |
| -----: | --------: | -----------: | ------------: | ------: | --------------------------------------- | ----------------------------- |
|    new | +468.00ms | 0.0% → 99.6% | 0ms → 468.0ms | 0 → 468 | `fmt::v12::detail::parse_format_string` | `/src/fmt/include/fmt/base.h` |
|    new |   +2.00ms |  0.0% → 0.4% |   0ms → 2.0ms |   0 → 2 | `fmt::v12::context::context`            | `/src/fmt/include/fmt/base.h` |

##### `fmt::v12::detail::parse_format_string` (`/src/fmt/include/fmt/base.h`)

| Change |     Delta |            % |          Time | Samples | Callee                                      | Location                        |
| -----: | --------: | -----------: | ------------: | ------: | ------------------------------------------- | ------------------------------- |
|    new | +405.00ms | 0.0% → 86.5% | 0ms → 405.0ms | 0 → 405 | `fmt::v12::detail::parse_replacement_field` | `/src/fmt/include/fmt/base.h`   |
|    new |  +36.00ms |  0.0% → 7.7% |  0ms → 36.0ms |  0 → 36 | `fmt::v12::detail::format_handler::on_text` | `/src/fmt/include/fmt/format.h` |
|    new |   +4.00ms |  0.0% → 0.9% |   0ms → 4.0ms |   0 → 4 | `fmt::v12::detail::write`                   | `/src/fmt/include/fmt/format.h` |
|    new |   +4.00ms |  0.0% → 0.9% |   0ms → 4.0ms |   0 → 4 | `fmt::v12::detail::write_int`               | `/src/fmt/include/fmt/format.h` |

##### `fmt::v12::detail::parse_replacement_field` (`/src/fmt/include/fmt/base.h`)

| Change |     Delta |            % |          Time | Samples | Callee                                                   | Location                        |
| -----: | --------: | -----------: | ------------: | ------: | -------------------------------------------------------- | ------------------------------- |
|    new | +340.00ms | 0.0% → 84.0% | 0ms → 340.0ms | 0 → 340 | `fmt::v12::detail::format_handler::on_format_specs`      | `/src/fmt/include/fmt/format.h` |
|    new |  +47.00ms | 0.0% → 11.6% |  0ms → 47.0ms |  0 → 47 | `fmt::v12::detail::format_handler::on_replacement_field` | `/src/fmt/include/fmt/format.h` |
|    new |   +5.00ms |  0.0% → 1.2% |   0ms → 5.0ms |   0 → 5 | `fmt::v12::detail::format_handler::on_arg_id`            | `/src/fmt/include/fmt/format.h` |

##### `fmt::v12::detail::format_handler::on_format_specs` (`/src/fmt/include/fmt/format.h`)

| Change |     Delta |            % |          Time | Samples | Callee                                 | Location                        |
| -----: | --------: | -----------: | ------------: | ------: | -------------------------------------- | ------------------------------- |
|    new | +178.00ms | 0.0% → 52.4% | 0ms → 178.0ms | 0 → 178 | `fmt::v12::detail::write`              | `/src/fmt/include/fmt/format.h` |
|    new |  +57.00ms | 0.0% → 16.8% |  0ms → 57.0ms |  0 → 57 | `fmt::v12::detail::parse_format_specs` | `/src/fmt/include/fmt/base.h`   |
|    new |  +43.00ms | 0.0% → 12.6% |  0ms → 43.0ms |  0 → 43 | `fmt::v12::detail::write_int`          | `/src/fmt/include/fmt/format.h` |
|    new |  +20.00ms |  0.0% → 5.9% |  0ms → 20.0ms |  0 → 20 | `fmt::v12::basic_format_arg::visit`    | `/src/fmt/include/fmt/base.h`   |
|    new |   +8.00ms |  0.0% → 2.4% |   0ms → 8.0ms |   0 → 8 | `fmt::v12::detail::parse_dynamic_spec` | `/src/fmt/include/fmt/base.h`   |

##### `fmt::v12::detail::write` (`/src/fmt/include/fmt/format.h`)

| Change |    Delta |            % |         Time | Samples | Callee                                 | Location                        |
| -----: | -------: | -----------: | -----------: | ------: | -------------------------------------- | ------------------------------- |
|    new | +71.00ms | 0.0% → 37.6% | 0ms → 71.0ms |  0 → 71 | `fmt::v12::detail::for_each_codepoint` | `/src/fmt/include/fmt/format.h` |
|    new | +47.00ms | 0.0% → 24.9% | 0ms → 47.0ms |  0 → 47 | `fmt::v12::detail::write_float`        | `/src/fmt/include/fmt/format.h` |
|    new | +26.00ms | 0.0% → 13.8% | 0ms → 26.0ms |  0 → 26 | `fmt::v12::detail::format_float`       | `/src/fmt/include/fmt/format.h` |
|    new | +15.00ms |  0.0% → 7.9% | 0ms → 15.0ms |  0 → 15 | `fmt::v12::detail::write_padded`       | `/src/fmt/include/fmt/format.h` |
|    new |  +2.00ms |  0.0% → 1.1% |  0ms → 2.0ms |   0 → 2 | `fmt::v12::basic_specs::align`         | `/src/fmt/include/fmt/base.h`   |

##### `fmt::v12::detail::for_each_codepoint` (`/src/fmt/include/fmt/format.h`)

| Change |    Delta |            % |         Time | Samples | Callee                                                                                     | Location                        |
| -----: | -------: | -----------: | -----------: | ------: | ------------------------------------------------------------------------------------------ | ------------------------------- |
|    new | +66.00ms | 0.0% → 93.0% | 0ms → 66.0ms |  0 → 66 | `fmt::v12::detail::for_each_codepoint()::{lambda(char const*, char const*)#1}::operator()` | `/src/fmt/include/fmt/format.h` |
|    new |  +1.00ms |  0.0% → 1.4% |  0ms → 1.0ms |   0 → 1 | `fmt::v12::detail::copy`                                                                   | `/src/fmt/include/fmt/base.h`   |

##### `fmt::v12::detail::for_each_codepoint()::{lambda(char const*, char const*)#1}::operator()` (`/src/fmt/include/fmt/format.h`)

| Change |    Delta |            % |         Time | Samples | Callee                                                                                         | Location                        |
| -----: | -------: | -----------: | -----------: | ------: | ---------------------------------------------------------------------------------------------- | ------------------------------- |
|    new | +42.00ms | 0.0% → 63.6% | 0ms → 42.0ms |  0 → 42 | `fmt::v12::detail::utf8_decode`                                                                | `/src/fmt/include/fmt/format.h` |
|    new | +14.00ms | 0.0% → 21.2% | 0ms → 14.0ms |  0 → 14 | `fmt::v12::detail::write()::{lambda(unsigned int, fmt::v12::basic_string_view)#1}::operator()` | `/src/fmt/include/fmt/format.h` |

##### `fmt::v12::detail::copy_noinline` (`/src/fmt/include/fmt/format.h`)

| Change |    Delta |            % |         Time | Samples | Callee                   | Location                      |
| -----: | -------: | -----------: | -----------: | ------: | ------------------------ | ----------------------------- |
|    new | +39.00ms | 0.0% → 60.9% | 0ms → 39.0ms |  0 → 39 | `fmt::v12::detail::copy` | `/src/fmt/include/fmt/base.h` |

##### `fmt::v12::detail::write_padded` (`/src/fmt/include/fmt/format.h`)

| Change |    Delta |            % |         Time | Samples | Callee                                                                              | Location                        |
| -----: | -------: | -----------: | -----------: | ------: | ----------------------------------------------------------------------------------- | ------------------------------- |
|    new | +49.00ms | 0.0% → 76.6% | 0ms → 49.0ms |  0 → 49 | `fmt::v12::detail::write_padded`                                                    | `/src/fmt/include/fmt/format.h` |
|    new | +22.00ms | 0.0% → 34.4% | 0ms → 22.0ms |  0 → 22 | `fmt::v12::detail::write_fixed()::{lambda(fmt::v12::basic_appender)#2}::operator()` | `/src/fmt/include/fmt/format.h` |
|    new | +11.00ms | 0.0% → 17.2% | 0ms → 11.0ms |  0 → 11 | `fmt::v12::detail::write_int()::{lambda(fmt::v12::basic_appender)#1}::operator()`   | `/src/fmt/include/fmt/format.h` |
|    new | +10.00ms | 0.0% → 15.6% | 0ms → 10.0ms |  0 → 10 | `fmt::v12::detail::fill`                                                            | `/src/fmt/include/fmt/format.h` |
|    new |  +5.00ms |  0.0% → 7.8% |  0ms → 5.0ms |   0 → 5 | `fmt::v12::detail::write()::{lambda(fmt::v12::basic_appender)#2}::operator()`       | `/src/fmt/include/fmt/format.h` |

##### `fmt::v12::detail::parse_format_specs` (`/src/fmt/include/fmt/base.h`)

| Change |    Delta |            % |         Time | Samples | Callee                                                                 | Location                      |
| -----: | -------: | -----------: | -----------: | ------: | ---------------------------------------------------------------------- | ----------------------------- |
|    new | +11.00ms | 0.0% → 19.3% | 0ms → 11.0ms |  0 → 11 | `fmt::v12::detail::parse_width`                                        | `/src/fmt/include/fmt/base.h` |
|    new |  +7.00ms | 0.0% → 12.3% |  0ms → 7.0ms |   0 → 7 | `fmt::v12::detail::parse_precision`                                    | `/src/fmt/include/fmt/base.h` |
|    new |  +4.00ms |  0.0% → 7.0% |  0ms → 4.0ms |   0 → 4 | `fmt::v12::detail::parse_format_specs()::{unnamed type#1}::operator()` | `/src/fmt/include/fmt/base.h` |
|    new |  +2.00ms |  0.0% → 3.5% |  0ms → 2.0ms |   0 → 2 | `fmt::v12::detail::parse_format_specs()::{unnamed type#2}::operator()` | `/src/fmt/include/fmt/base.h` |
|    new |  +1.00ms |  0.0% → 1.8% |  0ms → 1.0ms |   0 → 1 | `fmt::v12::basic_specs::set_sign`                                      | `/src/fmt/include/fmt/base.h` |

##### `fmt::v12::detail::copy` (`/src/fmt/include/fmt/base.h`)

| Change |    Delta |            % |         Time | Samples | Callee                             | Location                      |
| -----: | -------: | -----------: | -----------: | ------: | ---------------------------------- | ----------------------------- |
|    new | +52.00ms | 0.0% → 98.1% | 0ms → 52.0ms |  0 → 52 | `fmt::v12::detail::buffer::append` | `/src/fmt/include/fmt/base.h` |

##### `fmt::v12::detail::buffer::append` (`/src/fmt/include/fmt/base.h`)

| Change |   Delta |           % |        Time | Samples | Callee                                  | Location                      |
| -----: | ------: | ----------: | ----------: | ------: | --------------------------------------- | ----------------------------- |
|    new | +5.00ms | 0.0% → 9.6% | 0ms → 5.0ms |   0 → 5 | `fmt::v12::detail::buffer::try_reserve` | `/src/fmt/include/fmt/base.h` |
|    new | +2.00ms | 0.0% → 3.8% | 0ms → 2.0ms |   0 → 2 | `fmt::v12::detail::to_unsigned`         | `/src/fmt/include/fmt/base.h` |

##### `fmt::v12::detail::write_int` (`/src/fmt/include/fmt/format.h`)

| Change |    Delta |            % |         Time | Samples | Callee                                         | Location                        |
| -----: | -------: | -----------: | -----------: | ------: | ---------------------------------------------- | ------------------------------- |
|    new | +23.00ms | 0.0% → 48.9% | 0ms → 23.0ms |  0 → 23 | `fmt::v12::detail::write_padded`               | `/src/fmt/include/fmt/format.h` |
|    new |  +7.00ms | 0.0% → 14.9% |  0ms → 7.0ms |   0 → 7 | `fmt::v12::detail::do_format_decimal`          | `/src/fmt/include/fmt/format.h` |
|    new |  +3.00ms |  0.0% → 6.4% |  0ms → 3.0ms |   0 → 3 | `fmt::v12::detail::do_format_base2e`           | `/src/fmt/include/fmt/format.h` |
|    new |  +2.00ms |  0.0% → 4.3% |  0ms → 2.0ms |   0 → 2 | `fmt::v12::detail::size_padding::size_padding` | `/src/fmt/include/fmt/format.h` |

##### `fmt::v12::detail::format_handler::on_replacement_field` (`/src/fmt/include/fmt/format.h`)

| Change |    Delta |            % |         Time | Samples | Callee                                | Location                               |
| -----: | -------: | -----------: | -----------: | ------: | ------------------------------------- | -------------------------------------- |
|    new | +18.00ms | 0.0% → 38.3% | 0ms → 18.0ms |  0 → 18 | `fmt::v12::detail::copy_noinline`     | `/src/fmt/include/fmt/format.h`        |
|    new |  +7.00ms | 0.0% → 14.9% |  0ms → 7.0ms |   0 → 7 | `fmt::v12::detail::do_format_decimal` | `/src/fmt/include/fmt/format.h`        |
|    new |  +7.00ms | 0.0% → 14.9% |  0ms → 7.0ms |   0 → 7 | `fmt::v12::basic_format_arg::visit`   | `/src/fmt/include/fmt/base.h`          |
|    new |  +6.00ms | 0.0% → 12.8% |  0ms → 6.0ms |   0 → 6 | `0x9e6c0`                             | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|    new |  +3.00ms |  0.0% → 6.4% |  0ms → 3.0ms |   0 → 3 | `fmt::v12::context::arg`              | `/src/fmt/include/fmt/base.h`          |

##### `fmt::v12::detail::write_float` (`/src/fmt/include/fmt/format.h`)

| Change |    Delta |            % |         Time | Samples | Callee                             | Location                                         |
| -----: | -------: | -----------: | -----------: | ------: | ---------------------------------- | ------------------------------------------------ |
|    new | +33.00ms | 0.0% → 70.2% | 0ms → 33.0ms |  0 → 33 | `fmt::v12::detail::write_fixed`    | `/src/fmt/include/fmt/format.h`                  |
|    new | +10.00ms | 0.0% → 21.3% | 0ms → 10.0ms |  0 → 10 | `0x137f80`                         | `/usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
|    new |  +2.00ms |  0.0% → 4.3% |  0ms → 2.0ms |   0 → 2 | `0x137f84`                         | `/usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
|    new |  +1.00ms |  0.0% → 2.1% |  0ms → 1.0ms |   0 → 1 | `fmt::v12::detail::do_write_float` | `/src/fmt/include/fmt/format.h`                  |

##### `fmt::v12::detail::format_handler::on_text` (`/src/fmt/include/fmt/format.h`)

| Change |    Delta |            % |         Time | Samples | Callee                            | Location                        |
| -----: | -------: | -----------: | -----------: | ------: | --------------------------------- | ------------------------------- |
|    new | +31.00ms | 0.0% → 86.1% | 0ms → 31.0ms |  0 → 31 | `fmt::v12::detail::copy_noinline` | `/src/fmt/include/fmt/format.h` |
|    new |  +3.00ms |  0.0% → 8.3% |  0ms → 3.0ms |   0 → 3 | `fmt::v12::context::out`          | `/src/fmt/include/fmt/base.h`   |

##### `fmt::v12::detail::write_fixed` (`/src/fmt/include/fmt/format.h`)

| Change |    Delta |            % |         Time | Samples | Callee                                              | Location                        |
| -----: | -------: | -----------: | -----------: | ------: | --------------------------------------------------- | ------------------------------- |
|    new | +26.00ms | 0.0% → 72.2% | 0ms → 26.0ms |  0 → 26 | `fmt::v12::detail::write_padded`                    | `/src/fmt/include/fmt/format.h` |
|    new |  +1.00ms |  0.0% → 2.8% |  0ms → 1.0ms |   0 → 1 | `fmt::v12::detail::digit_grouping::~digit_grouping` | `/src/fmt/include/fmt/format.h` |

##### `0x27743` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |    Delta |             % |              Time |   Samples | Callee                         | Location                                         |
| ------: | -------: | ------------: | ----------------: | --------: | ------------------------------ | ------------------------------------------------ |
|   +5.0% | +25.00ms | 98.0% → 97.4% | 498.0ms → 523.0ms | 498 → 523 | `main`                         | `/out/profile.cpp`                               |
| +125.0% |  +5.00ms |   0.8% → 1.7% |     4.0ms → 9.0ms |     4 → 9 | `0xa0cb0`                      | `/usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
|     new |  +3.00ms |   0.0% → 0.6% |       0ms → 3.0ms |     0 → 3 | `fmt::v12::vformat[abi:cxx11]` | `/src/fmt/include/fmt/format-inl.h`              |
| removed |  -2.00ms |   0.4% → 0.0% |       2.0ms → 0ms |     2 → 0 | `fmt::v11::vformat[abi:cxx11]` | `/src/fmt/include/fmt/format-inl.h`              |
| removed |  -1.00ms |   0.2% → 0.0% |       1.0ms → 0ms |     1 → 0 | `0x9a8f0`                      | `/usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |

##### `0x27817` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

| Change |    Delta |      % |              Time |   Samples | Callee    | Location                               |
| -----: | -------: | -----: | ----------------: | --------: | --------- | -------------------------------------- |
|  +5.7% | +29.00ms | 100.0% | 508.0ms → 537.0ms | 508 → 537 | `0x27743` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `_start` (`<unknown>`)

| Change |    Delta |      % |              Time |   Samples | Callee    | Location                               |
| -----: | -------: | -----: | ----------------: | --------: | --------- | -------------------------------------- |
|  +5.7% | +29.00ms | 100.0% | 508.0ms → 537.0ms | 508 → 537 | `0x27817` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `std::__cxx11::basic_string::_S_copy` (`/usr/include/c++/12/bits/basic_string.h`)

| Change |   Delta |             % |        Time | Samples | Callee                                | Location                                  |
| -----: | ------: | ------------: | ----------: | ------: | ------------------------------------- | ----------------------------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `std::char_traits::copy`              | `/usr/include/c++/12/bits/char_traits.h`  |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `std::__cxx11::basic_string::_S_copy` | `/usr/include/c++/12/bits/basic_string.h` |

##### `std::__cxx11::basic_string::_S_copy_chars` (`/usr/include/c++/12/bits/basic_string.h`)

| Change |   Delta |             % |        Time | Samples | Callee                                | Location                                  |
| -----: | ------: | ------------: | ----------: | ------: | ------------------------------------- | ----------------------------------------- |
|    new | +1.00ms | 0.0% → 100.0% | 0ms → 1.0ms |   0 → 1 | `std::__cxx11::basic_string::_S_copy` | `/usr/include/c++/12/bits/basic_string.h` |

##### `fmt::v11::vformat[abi:cxx11]` (`/src/fmt/include/fmt/format-inl.h`)

|  Change |     Delta |            % |          Time | Samples | Callee                                               | Location                                         |
| ------: | --------: | -----------: | ------------: | ------: | ---------------------------------------------------- | ------------------------------------------------ |
| removed | -430.00ms | 88.8% → 0.0% | 430.0ms → 0ms | 430 → 0 | `fmt::v11::detail::vformat_to`                       | `/src/fmt/include/fmt/format-inl.h`              |
| removed |  -18.00ms |  3.7% → 0.0% |  18.0ms → 0ms |  18 → 0 | `fmt::v11::to_string`                                | `/src/fmt/include/fmt/format.h`                  |
| removed |  -15.00ms |  3.1% → 0.0% |  15.0ms → 0ms |  15 → 0 | `0x137f20`                                           | `/usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
| removed |  -12.00ms |  2.5% → 0.0% |  12.0ms → 0ms |  12 → 0 | `0x9d100`                                            | `/usr/lib/aarch64-linux-gnu/libc.so.6`           |
| removed |   -2.00ms |  0.4% → 0.0% |   2.0ms → 0ms |   2 → 0 | `fmt::v11::basic_memory_buffer::basic_memory_buffer` | `/src/fmt/include/fmt/format.h`                  |

##### `fmt::v11::format` (`/src/fmt/include/fmt/format.h`)

|  Change |     Delta |            % |          Time | Samples | Callee                            | Location                            |
| ------: | --------: | -----------: | ------------: | ------: | --------------------------------- | ----------------------------------- |
| removed | -482.00ms | 99.6% → 0.0% | 482.0ms → 0ms | 482 → 0 | `fmt::v11::vformat[abi:cxx11]`    | `/src/fmt/include/fmt/format-inl.h` |
| removed |   -1.00ms |  0.2% → 0.0% |   1.0ms → 0ms |   1 → 0 | `fmt::v11::detail::copy_noinline` | `/src/fmt/include/fmt/format.h`     |
| removed |   -1.00ms |  0.2% → 0.0% |   1.0ms → 0ms |   1 → 0 | `fmt::v11::detail::value::value`  | `/src/fmt/include/fmt/base.h`       |

##### `fmt::v11::detail::vformat_to` (`/src/fmt/include/fmt/format-inl.h`)

|  Change |     Delta |            % |          Time | Samples | Callee                                  | Location                      |
| ------: | --------: | -----------: | ------------: | ------: | --------------------------------------- | ----------------------------- |
| removed | -429.00ms | 99.8% → 0.0% | 429.0ms → 0ms | 429 → 0 | `fmt::v11::detail::parse_format_string` | `/src/fmt/include/fmt/base.h` |
| removed |   -1.00ms |  0.2% → 0.0% |   1.0ms → 0ms |   1 → 0 | `fmt::v11::context::context`            | `/src/fmt/include/fmt/base.h` |

##### `fmt::v11::detail::parse_format_string` (`/src/fmt/include/fmt/base.h`)

|  Change |     Delta |            % |          Time | Samples | Callee                                              | Location                        |
| ------: | --------: | -----------: | ------------: | ------: | --------------------------------------------------- | ------------------------------- |
| removed | -370.00ms | 86.2% → 0.0% | 370.0ms → 0ms | 370 → 0 | `fmt::v11::detail::parse_replacement_field`         | `/src/fmt/include/fmt/base.h`   |
| removed |  -30.00ms |  7.0% → 0.0% |  30.0ms → 0ms |  30 → 0 | `fmt::v11::detail::format_handler::on_text`         | `/src/fmt/include/fmt/format.h` |
| removed |   -1.00ms |  0.2% → 0.0% |   1.0ms → 0ms |   1 → 0 | `fmt::v11::detail::format_handler::on_format_specs` | `/src/fmt/include/fmt/format.h` |

##### `fmt::v11::detail::parse_replacement_field` (`/src/fmt/include/fmt/base.h`)

|  Change |     Delta |            % |          Time | Samples | Callee                                                   | Location                        |
| ------: | --------: | -----------: | ------------: | ------: | -------------------------------------------------------- | ------------------------------- |
| removed | -300.00ms | 81.1% → 0.0% | 300.0ms → 0ms | 300 → 0 | `fmt::v11::detail::format_handler::on_format_specs`      | `/src/fmt/include/fmt/format.h` |
| removed |  -43.00ms | 11.6% → 0.0% |  43.0ms → 0ms |  43 → 0 | `fmt::v11::detail::format_handler::on_replacement_field` | `/src/fmt/include/fmt/format.h` |
| removed |   -7.00ms |  1.9% → 0.0% |   7.0ms → 0ms |   7 → 0 | `fmt::v11::detail::format_handler::on_arg_id`            | `/src/fmt/include/fmt/format.h` |
| removed |   -1.00ms |  0.3% → 0.0% |   1.0ms → 0ms |   1 → 0 | `fmt::v11::detail::write_int`                            | `/src/fmt/include/fmt/format.h` |

##### `fmt::v11::detail::format_handler::on_format_specs` (`/src/fmt/include/fmt/format.h`)

|  Change |     Delta |            % |          Time | Samples | Callee                                 | Location                        |
| ------: | --------: | -----------: | ------------: | ------: | -------------------------------------- | ------------------------------- |
| removed | -113.00ms | 37.5% → 0.0% | 113.0ms → 0ms | 113 → 0 | `fmt::v11::basic_format_arg::visit`    | `/src/fmt/include/fmt/base.h`   |
| removed |  -65.00ms | 21.6% → 0.0% |  65.0ms → 0ms |  65 → 0 | `fmt::v11::detail::parse_format_specs` | `/src/fmt/include/fmt/base.h`   |
| removed |  -48.00ms | 15.9% → 0.0% |  48.0ms → 0ms |  48 → 0 | `fmt::v11::detail::write`              | `/src/fmt/include/fmt/format.h` |
| removed |  -41.00ms | 13.6% → 0.0% |  41.0ms → 0ms |  41 → 0 | `fmt::v11::detail::write_int`          | `/src/fmt/include/fmt/format.h` |
| removed |   -7.00ms |  2.3% → 0.0% |   7.0ms → 0ms |   7 → 0 | `fmt::v11::detail::parse_dynamic_spec` | `/src/fmt/include/fmt/base.h`   |

##### `fmt::v11::detail::write` (`/src/fmt/include/fmt/format.h`)

|  Change |    Delta |            % |         Time | Samples | Callee                             | Location                        |
| ------: | -------: | -----------: | -----------: | ------: | ---------------------------------- | ------------------------------- |
| removed | -94.00ms | 63.1% → 0.0% | 94.0ms → 0ms |  94 → 0 | `fmt::v11::detail::write_float`    | `/src/fmt/include/fmt/format.h` |
| removed | -40.00ms | 26.8% → 0.0% | 40.0ms → 0ms |  40 → 0 | `fmt::v11::detail::compute_width`  | `/src/fmt/include/fmt/format.h` |
| removed |  -8.00ms |  5.4% → 0.0% |  8.0ms → 0ms |   8 → 0 | `fmt::v11::detail::write_padded`   | `/src/fmt/include/fmt/format.h` |
| removed |  -2.00ms |  1.3% → 0.0% |  2.0ms → 0ms |   2 → 0 | `fmt::v11::detail::do_write_float` | `/src/fmt/include/fmt/format.h` |
| removed |  -1.00ms |  0.7% → 0.0% |  1.0ms → 0ms |   1 → 0 | `fmt::v11::detail::count_digits`   | `/src/fmt/include/fmt/format.h` |

##### `fmt::v11::basic_format_arg::visit` (`/src/fmt/include/fmt/base.h`)

|  Change |     Delta |            % |          Time | Samples | Callee                                                | Location                        |
| ------: | --------: | -----------: | ------------: | ------: | ----------------------------------------------------- | ------------------------------- |
| removed | -103.00ms | 86.6% → 0.0% | 103.0ms → 0ms | 103 → 0 | `fmt::v11::detail::arg_formatter::operator()`         | `/src/fmt/include/fmt/format.h` |
| removed |   -4.00ms |  3.4% → 0.0% |   4.0ms → 0ms |   4 → 0 | `fmt::v11::detail::default_arg_formatter::operator()` | `/src/fmt/include/fmt/format.h` |

##### `fmt::v11::detail::arg_formatter::operator()` (`/src/fmt/include/fmt/format.h`)

|  Change |    Delta |            % |         Time | Samples | Callee                    | Location                        |
| ------: | -------: | -----------: | -----------: | ------: | ------------------------- | ------------------------------- |
| removed | -98.00ms | 95.1% → 0.0% | 98.0ms → 0ms |  98 → 0 | `fmt::v11::detail::write` | `/src/fmt/include/fmt/format.h` |

##### `fmt::v11::detail::write_float` (`/src/fmt/include/fmt/format.h`)

|  Change |    Delta |            % |         Time | Samples | Callee                             | Location                                         |
| ------: | -------: | -----------: | -----------: | ------: | ---------------------------------- | ------------------------------------------------ |
| removed | -56.00ms | 58.3% → 0.0% | 56.0ms → 0ms |  56 → 0 | `fmt::v11::detail::write_float`    | `/src/fmt/include/fmt/format.h`                  |
| removed | -37.00ms | 38.5% → 0.0% | 37.0ms → 0ms |  37 → 0 | `fmt::v11::detail::do_write_float` | `/src/fmt/include/fmt/format.h`                  |
| removed | -25.00ms | 26.0% → 0.0% | 25.0ms → 0ms |  25 → 0 | `fmt::v11::detail::format_float`   | `/src/fmt/include/fmt/format.h`                  |
| removed | -10.00ms | 10.4% → 0.0% | 10.0ms → 0ms |  10 → 0 | `0x137f80`                         | `/usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
| removed |  -5.00ms |  5.2% → 0.0% |  5.0ms → 0ms |   5 → 0 | `0x137f84`                         | `/usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |

##### `fmt::v11::detail::parse_format_specs` (`/src/fmt/include/fmt/base.h`)

|  Change |    Delta |            % |         Time | Samples | Callee                                                                 | Location                      |
| ------: | -------: | -----------: | -----------: | ------: | ---------------------------------------------------------------------- | ----------------------------- |
| removed | -13.00ms | 20.0% → 0.0% | 13.0ms → 0ms |  13 → 0 | `fmt::v11::detail::parse_width`                                        | `/src/fmt/include/fmt/base.h` |
| removed | -11.00ms | 16.9% → 0.0% | 11.0ms → 0ms |  11 → 0 | `fmt::v11::detail::parse_format_specs()::{unnamed type#1}::operator()` | `/src/fmt/include/fmt/base.h` |
| removed |  -7.00ms | 10.8% → 0.0% |  7.0ms → 0ms |   7 → 0 | `fmt::v11::detail::parse_precision`                                    | `/src/fmt/include/fmt/base.h` |
| removed |  -5.00ms |  7.7% → 0.0% |  5.0ms → 0ms |   5 → 0 | `fmt::v11::detail::parse_align`                                        | `/src/fmt/include/fmt/base.h` |
| removed |  -1.00ms |  1.5% → 0.0% |  1.0ms → 0ms |   1 → 0 | `fmt::v11::basic_specs::set_sign`                                      | `/src/fmt/include/fmt/base.h` |

##### `fmt::v11::detail::copy_noinline` (`/src/fmt/include/fmt/format.h`)

|  Change |    Delta |            % |         Time | Samples | Callee                   | Location                      |
| ------: | -------: | -----------: | -----------: | ------: | ------------------------ | ----------------------------- |
| removed | -39.00ms | 65.0% → 0.0% | 39.0ms → 0ms |  39 → 0 | `fmt::v11::detail::copy` | `/src/fmt/include/fmt/base.h` |

##### `fmt::v11::detail::write_padded` (`/src/fmt/include/fmt/format.h`)

|  Change |    Delta |            % |         Time | Samples | Callee                                                                                 | Location                        |
| ------: | -------: | -----------: | -----------: | ------: | -------------------------------------------------------------------------------------- | ------------------------------- |
| removed | -47.00ms | 85.5% → 0.0% | 47.0ms → 0ms |  47 → 0 | `fmt::v11::detail::write_padded`                                                       | `/src/fmt/include/fmt/format.h` |
| removed | -21.00ms | 38.2% → 0.0% | 21.0ms → 0ms |  21 → 0 | `fmt::v11::detail::do_write_float()::{lambda(fmt::v11::basic_appender)#4}::operator()` | `/src/fmt/include/fmt/format.h` |
| removed | -11.00ms | 20.0% → 0.0% | 11.0ms → 0ms |  11 → 0 | `fmt::v11::detail::fill`                                                               | `/src/fmt/include/fmt/format.h` |
| removed |  -9.00ms | 16.4% → 0.0% |  9.0ms → 0ms |   9 → 0 | `fmt::v11::detail::write_int()::{lambda(fmt::v11::basic_appender)#1}::operator()`      | `/src/fmt/include/fmt/format.h` |
| removed |  -4.00ms |  7.3% → 0.0% |  4.0ms → 0ms |   4 → 0 | `fmt::v11::detail::write()::{lambda(fmt::v11::basic_appender)#1}::operator()`          | `/src/fmt/include/fmt/format.h` |

##### `fmt::v11::detail::buffer::append` (`/src/fmt/include/fmt/base.h`)

|  Change |   Delta |           % |        Time | Samples | Callee                                  | Location                      |
| ------: | ------: | ----------: | ----------: | ------: | --------------------------------------- | ----------------------------- |
| removed | -2.00ms | 4.1% → 0.0% | 2.0ms → 0ms |   2 → 0 | `fmt::v11::detail::buffer::try_reserve` | `/src/fmt/include/fmt/base.h` |

##### `fmt::v11::detail::copy` (`/src/fmt/include/fmt/base.h`)

|  Change |    Delta |             % |         Time | Samples | Callee                             | Location                      |
| ------: | -------: | ------------: | -----------: | ------: | ---------------------------------- | ----------------------------- |
| removed | -49.00ms | 100.0% → 0.0% | 49.0ms → 0ms |  49 → 0 | `fmt::v11::detail::buffer::append` | `/src/fmt/include/fmt/base.h` |

##### `fmt::v11::detail::format_handler::on_replacement_field` (`/src/fmt/include/fmt/format.h`)

|  Change |    Delta |            % |         Time | Samples | Callee                                | Location                               |
| ------: | -------: | -----------: | -----------: | ------: | ------------------------------------- | -------------------------------------- |
| removed | -22.00ms | 51.2% → 0.0% | 22.0ms → 0ms |  22 → 0 | `fmt::v11::detail::copy_noinline`     | `/src/fmt/include/fmt/format.h`        |
| removed |  -6.00ms | 14.0% → 0.0% |  6.0ms → 0ms |   6 → 0 | `fmt::v11::detail::do_format_decimal` | `/src/fmt/include/fmt/format.h`        |
| removed |  -6.00ms | 14.0% → 0.0% |  6.0ms → 0ms |   6 → 0 | `fmt::v11::basic_format_arg::visit`   | `/src/fmt/include/fmt/base.h`          |
| removed |  -4.00ms |  9.3% → 0.0% |  4.0ms → 0ms |   4 → 0 | `0x9e6c0`                             | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed |  -2.00ms |  4.7% → 0.0% |  2.0ms → 0ms |   2 → 0 | `0x9e6e8`                             | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `fmt::v11::detail::write_int` (`/src/fmt/include/fmt/format.h`)

|  Change |    Delta |            % |         Time | Samples | Callee                                | Location                        |
| ------: | -------: | -----------: | -----------: | ------: | ------------------------------------- | ------------------------------- |
| removed | -17.00ms | 40.5% → 0.0% | 17.0ms → 0ms |  17 → 0 | `fmt::v11::detail::write_padded`      | `/src/fmt/include/fmt/format.h` |
| removed | -12.00ms | 28.6% → 0.0% | 12.0ms → 0ms |  12 → 0 | `fmt::v11::detail::do_format_decimal` | `/src/fmt/include/fmt/format.h` |
| removed |  -5.00ms | 11.9% → 0.0% |  5.0ms → 0ms |   5 → 0 | `fmt::v11::detail::do_format_base2e`  | `/src/fmt/include/fmt/format.h` |

##### `fmt::v11::detail::for_each_codepoint` (`/src/fmt/include/fmt/format.h`)

|  Change |    Delta |            % |         Time | Samples | Callee                                                                                     | Location                        |
| ------: | -------: | -----------: | -----------: | ------: | ------------------------------------------------------------------------------------------ | ------------------------------- |
| removed | -39.00ms | 97.5% → 0.0% | 39.0ms → 0ms |  39 → 0 | `fmt::v11::detail::for_each_codepoint()::{lambda(char const*, char const*)#1}::operator()` | `/src/fmt/include/fmt/format.h` |

##### `fmt::v11::detail::compute_width` (`/src/fmt/include/fmt/format.h`)

|  Change |    Delta |             % |         Time | Samples | Callee                                 | Location                        |
| ------: | -------: | ------------: | -----------: | ------: | -------------------------------------- | ------------------------------- |
| removed | -40.00ms | 100.0% → 0.0% | 40.0ms → 0ms |  40 → 0 | `fmt::v11::detail::for_each_codepoint` | `/src/fmt/include/fmt/format.h` |

##### `fmt::v11::detail::do_write_float` (`/src/fmt/include/fmt/format.h`)

|  Change |    Delta |            % |         Time | Samples | Callee                                              | Location                        |
| ------: | -------: | -----------: | -----------: | ------: | --------------------------------------------------- | ------------------------------- |
| removed | -30.00ms | 76.9% → 0.0% | 30.0ms → 0ms |  30 → 0 | `fmt::v11::detail::write_padded`                    | `/src/fmt/include/fmt/format.h` |
| removed |  -2.00ms |  5.1% → 0.0% |  2.0ms → 0ms |   2 → 0 | `fmt::v11::detail::digit_grouping::digit_grouping`  | `/src/fmt/include/fmt/format.h` |
| removed |  -1.00ms |  2.6% → 0.0% |  1.0ms → 0ms |   1 → 0 | `fmt::v11::detail::get_significand_size`            | `/src/fmt/include/fmt/format.h` |
| removed |  -1.00ms |  2.6% → 0.0% |  1.0ms → 0ms |   1 → 0 | `fmt::v11::detail::digit_grouping::~digit_grouping` | `/src/fmt/include/fmt/format.h` |

##### `0xa2cab` (`/usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30`)

|  Change |   Delta |             % |          Time | Samples | Callee    | Location                               |
| ------: | ------: | ------------: | ------------: | ------: | --------- | -------------------------------------- |
|  -50.0% | -3.00ms | 66.7% → 60.0% | 6.0ms → 3.0ms |   6 → 3 | `0x92284` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed | -1.00ms |  11.1% → 0.0% |   1.0ms → 0ms |   1 → 0 | `0x92260` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `0x92a9b` (`/usr/lib/aarch64-linux-gnu/libc.so.6`)

|  Change |   Delta |             % |          Time | Samples | Callee    | Location                               |
| ------: | ------: | ------------: | ------------: | ------: | --------- | -------------------------------------- |
| removed | -2.00ms |  25.0% → 0.0% |   2.0ms → 0ms |   2 → 0 | `0x8fae0` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed | -1.00ms |  12.5% → 0.0% |   1.0ms → 0ms |   1 → 0 | `0x8faa0` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
|  +33.3% | +1.00ms | 37.5% → 80.0% | 3.0ms → 4.0ms |   3 → 4 | `0x8faf4` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed | -1.00ms |  12.5% → 0.0% |   1.0ms → 0ms |   1 → 0 | `0x8fb44` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `std::__cxx11::basic_string::_M_construct` (`/usr/include/c++/12/bits/basic_string.tcc`)

|  Change |   Delta |             % |          Time | Samples | Callee                                      | Location                                         |
| ------: | ------: | ------------: | ------------: | ------: | ------------------------------------------- | ------------------------------------------------ |
|  -44.4% | -4.00ms | 64.3% → 55.6% | 9.0ms → 5.0ms |   9 → 5 | `0xa2cab`                                   | `/usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
| removed | -2.00ms |  14.3% → 0.0% |   2.0ms → 0ms |   2 → 0 | `std::__cxx11::basic_string::_M_set_length` | `/usr/include/c++/12/bits/basic_string.h`        |
|  -50.0% | -1.00ms | 14.3% → 11.1% | 2.0ms → 1.0ms |   2 → 1 | `0x9c2e4`                                   | `/usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
| removed | -1.00ms |   7.1% → 0.0% |   1.0ms → 0ms |   1 → 0 | `0xa2c9c`                                   | `/usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
|     new | +1.00ms |  0.0% → 11.1% |   0ms → 1.0ms |   0 → 1 | `std::__cxx11::basic_string::_S_copy_chars` | `/usr/include/c++/12/bits/basic_string.h`        |

##### `std::__cxx11::basic_string::basic_string` (`/usr/include/c++/12/bits/basic_string.h`)

| Change |   Delta |             % |           Time | Samples | Callee                                     | Location                                    |
| -----: | ------: | ------------: | -------------: | ------: | ------------------------------------------ | ------------------------------------------- |
| -35.7% | -5.00ms | 93.3% → 90.0% | 14.0ms → 9.0ms |  14 → 9 | `std::__cxx11::basic_string::_M_construct` | `/usr/include/c++/12/bits/basic_string.tcc` |

##### `std::__cxx11::basic_string::~basic_string` (`/usr/include/c++/12/bits/basic_string.h`)

| Change |   Delta |             % |            Time | Samples | Callee                                   | Location                                  |
| -----: | ------: | ------------: | --------------: | ------: | ---------------------------------------- | ----------------------------------------- |
| -28.6% | -4.00ms | 93.3% → 90.9% | 14.0ms → 10.0ms | 14 → 10 | `std::__cxx11::basic_string::_M_dispose` | `/usr/include/c++/12/bits/basic_string.h` |

##### `std::__new_allocator::deallocate` (`/usr/include/c++/12/bits/new_allocator.h`)

|  Change |   Delta |             % |          Time | Samples | Callee    | Location                               |
| ------: | ------: | ------------: | ------------: | ------: | --------- | -------------------------------------- |
|  -37.5% | -3.00ms | 57.1% → 50.0% | 8.0ms → 5.0ms |   8 → 5 | `0x92a9b` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed | -1.00ms |   7.1% → 0.0% |   1.0ms → 0ms |   1 → 0 | `0x92aa4` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| removed | -1.00ms |   7.1% → 0.0% |   1.0ms → 0ms |   1 → 0 | `0x92a58` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |
| +100.0% | +1.00ms |  7.1% → 20.0% | 1.0ms → 2.0ms |   1 → 2 | `0x92aa0` | `/usr/lib/aarch64-linux-gnu/libc.so.6` |

##### `std::allocator_traits::deallocate` (`/usr/include/c++/12/bits/alloc_traits.h`)

| Change |   Delta |      % |            Time | Samples | Callee                             | Location                                   |
| -----: | ------: | -----: | --------------: | ------: | ---------------------------------- | ------------------------------------------ |
| -28.6% | -4.00ms | 100.0% | 14.0ms → 10.0ms | 14 → 10 | `std::__new_allocator::deallocate` | `/usr/include/c++/12/bits/new_allocator.h` |

##### `std::__cxx11::basic_string::_M_destroy` (`/usr/include/c++/12/bits/basic_string.h`)

| Change |   Delta |      % |            Time | Samples | Callee                              | Location                                  |
| -----: | ------: | -----: | --------------: | ------: | ----------------------------------- | ----------------------------------------- |
| -28.6% | -4.00ms | 100.0% | 14.0ms → 10.0ms | 14 → 10 | `std::allocator_traits::deallocate` | `/usr/include/c++/12/bits/alloc_traits.h` |

##### `std::__cxx11::basic_string::_M_dispose` (`/usr/include/c++/12/bits/basic_string.h`)

| Change |   Delta |      % |            Time | Samples | Callee                                   | Location                                  |
| -----: | ------: | -----: | --------------: | ------: | ---------------------------------------- | ----------------------------------------- |
| -28.6% | -4.00ms | 100.0% | 14.0ms → 10.0ms | 14 → 10 | `std::__cxx11::basic_string::_M_destroy` | `/usr/include/c++/12/bits/basic_string.h` |

##### `std::__cxx11::basic_string::_M_set_length` (`/usr/include/c++/12/bits/basic_string.h`)

|  Change |   Delta |             % |        Time | Samples | Callee                                | Location                                  |
| ------: | ------: | ------------: | ----------: | ------: | ------------------------------------- | ----------------------------------------- |
| removed | -2.00ms | 100.0% → 0.0% | 2.0ms → 0ms |   2 → 0 | `std::__cxx11::basic_string::_M_data` | `/usr/include/c++/12/bits/basic_string.h` |

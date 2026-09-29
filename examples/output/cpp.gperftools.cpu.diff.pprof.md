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

| Change |    Delta |           % |         Time | Samples | Function                                                                                       | Location                       |
| -----: | -------: | ----------: | -----------: | ------: | ---------------------------------------------------------------------------------------------- | ------------------------------ |
|    new | +45.00ms | 0.0% → 8.4% | 0ms → 45.0ms |  0 → 45 | `fmt::v12::detail::buffer::append`                                                             | `src/fmt/include/fmt/base.h`   |
|    new | +42.00ms | 0.0% → 7.8% | 0ms → 42.0ms |  0 → 42 | `fmt::v12::detail::utf8_decode`                                                                | `src/fmt/include/fmt/format.h` |
|    new | +31.00ms | 0.0% → 5.8% | 0ms → 31.0ms |  0 → 31 | `fmt::v12::detail::parse_format_specs`                                                         | `src/fmt/include/fmt/base.h`   |
|    new | +25.00ms | 0.0% → 4.7% | 0ms → 25.0ms |  0 → 25 | `fmt::v12::detail::copy_noinline`                                                              | `src/fmt/include/fmt/format.h` |
|    new | +19.00ms | 0.0% → 3.5% | 0ms → 19.0ms |  0 → 19 | `fmt::v12::detail::parse_format_string`                                                        | `src/fmt/include/fmt/base.h`   |
|    new | +18.00ms | 0.0% → 3.4% | 0ms → 18.0ms |  0 → 18 | `fmt::v12::detail::write`                                                                      | `src/fmt/include/fmt/format.h` |
|    new | +16.00ms | 0.0% → 3.0% | 0ms → 16.0ms |  0 → 16 | `fmt::v12::basic_format_arg::visit`                                                            | `src/fmt/include/fmt/base.h`   |
|    new | +14.00ms | 0.0% → 2.6% | 0ms → 14.0ms |  0 → 14 | `fmt::v12::detail::parse_dynamic_spec`                                                         | `src/fmt/include/fmt/base.h`   |
|    new | +13.00ms | 0.0% → 2.4% | 0ms → 13.0ms |  0 → 13 | `fmt::v12::detail::parse_replacement_field`                                                    | `src/fmt/include/fmt/base.h`   |
|    new | +12.00ms | 0.0% → 2.2% | 0ms → 12.0ms |  0 → 12 | `fmt::v12::detail::write_int`                                                                  | `src/fmt/include/fmt/format.h` |
|    new | +12.00ms | 0.0% → 2.2% | 0ms → 12.0ms |  0 → 12 | `fmt::v12::detail::format_float`                                                               | `src/fmt/include/fmt/format.h` |
|    new | +12.00ms | 0.0% → 2.2% | 0ms → 12.0ms |  0 → 12 | `fmt::v12::detail::parse_nonnegative_int`                                                      | `src/fmt/include/fmt/base.h`   |
|    new | +11.00ms | 0.0% → 2.0% | 0ms → 11.0ms |  0 → 11 | `fmt::v12::detail::write2digits`                                                               | `src/fmt/include/fmt/format.h` |
|    new | +11.00ms | 0.0% → 2.0% | 0ms → 11.0ms |  0 → 11 | `fmt::v12::detail::write()::{lambda(unsigned int, fmt::v12::basic_string_view)#1}::operator()` | `src/fmt/include/fmt/format.h` |
|    new | +10.00ms | 0.0% → 1.9% | 0ms → 10.0ms |  0 → 10 | `fmt::v12::detail::format_handler::on_format_specs`                                            | `src/fmt/include/fmt/format.h` |
|    new | +10.00ms | 0.0% → 1.9% | 0ms → 10.0ms |  0 → 10 | `fmt::v12::detail::for_each_codepoint()::{lambda(char const*, char const*)#1}::operator()`     | `src/fmt/include/fmt/format.h` |
|    new |  +9.00ms | 0.0% → 1.7% |  0ms → 9.0ms |   0 → 9 | `fmt::v12::basic_format_args::get`                                                             | `src/fmt/include/fmt/base.h`   |
|    new |  +9.00ms | 0.0% → 1.7% |  0ms → 9.0ms |   0 → 9 | `fmt::v12::detail::write_fixed`                                                                | `src/fmt/include/fmt/format.h` |
|    new |  +8.00ms | 0.0% → 1.5% |  0ms → 8.0ms |   0 → 8 | `fmt::v12::detail::buffer::try_reserve`                                                        | `src/fmt/include/fmt/base.h`   |
|    new |  +8.00ms | 0.0% → 1.5% |  0ms → 8.0ms |   0 → 8 | `fmt::v12::detail::buffer::push_back`                                                          | `src/fmt/include/fmt/base.h`   |

##### Native

|  Change |   Delta |           % |            Time | Samples | Function   | Location                                        |
| ------: | ------: | ----------: | --------------: | ------: | ---------- | ----------------------------------------------- |
| +100.0% | +6.00ms | 1.2% → 2.2% |  6.0ms → 12.0ms |  6 → 12 | `0x9e6c0`  | `usr/lib/aarch64-linux-gnu/libc.so.6`           |
| +125.0% | +5.00ms | 0.8% → 1.7% |   4.0ms → 9.0ms |   4 → 9 | `0xa0cb0`  | `usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
|  +16.7% | +2.00ms | 2.4% → 2.6% | 12.0ms → 14.0ms | 12 → 14 | `0x9d100`  | `usr/lib/aarch64-linux-gnu/libc.so.6`           |
|  +33.3% | +1.00ms | 0.6% → 0.7% |   3.0ms → 4.0ms |   3 → 4 | `0x8faf4`  | `usr/lib/aarch64-linux-gnu/libc.so.6`           |
| +100.0% | +1.00ms | 0.2% → 0.4% |   1.0ms → 2.0ms |   1 → 2 | `0x9d11c`  | `usr/lib/aarch64-linux-gnu/libc.so.6`           |
| +100.0% | +1.00ms | 0.2% → 0.4% |   1.0ms → 2.0ms |   1 → 2 | `0x92aa0`  | `usr/lib/aarch64-linux-gnu/libc.so.6`           |
|     new | +1.00ms | 0.0% → 0.2% |     0ms → 1.0ms |   0 → 1 | `0x9d1b0`  | `usr/lib/aarch64-linux-gnu/libc.so.6`           |
|     new | +1.00ms | 0.0% → 0.2% |     0ms → 1.0ms |   0 → 1 | `0x9d168`  | `usr/lib/aarch64-linux-gnu/libc.so.6`           |
|     new | +1.00ms | 0.0% → 0.2% |     0ms → 1.0ms |   0 → 1 | `0x9d184`  | `usr/lib/aarch64-linux-gnu/libc.so.6`           |
|     new | +1.00ms | 0.0% → 0.2% |     0ms → 1.0ms |   0 → 1 | `0x137f3c` | `usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |

##### Standard library

| Change |   Delta |           % |        Time | Samples | Function                                   | Location                                   |
| -----: | ------: | ----------: | ----------: | ------: | ------------------------------------------ | ------------------------------------------ |
|    new | +2.00ms | 0.0% → 0.4% | 0ms → 2.0ms |   0 → 2 | `std::__cxx11::basic_string::_M_construct` | `usr/include/c++/12/bits/basic_string.tcc` |
|    new | +1.00ms | 0.0% → 0.2% | 0ms → 1.0ms |   0 → 1 | `std::char_traits::copy`                   | `usr/include/c++/12/bits/char_traits.h`    |
|    new | +1.00ms | 0.0% → 0.2% | 0ms → 1.0ms |   0 → 1 | `std::__cxx11::basic_string::size`         | `usr/include/c++/12/bits/basic_string.h`   |

#### Improvements

Functions with the largest decrease in time spent directly in the function body, excluding callees.

##### Ours

|  Change |    Delta |           % |         Time | Samples | Function                                                               | Location                           |
| ------: | -------: | ----------: | -----------: | ------: | ---------------------------------------------------------------------- | ---------------------------------- |
| removed | -47.00ms | 9.3% → 0.0% | 47.0ms → 0ms |  47 → 0 | `fmt::v11::detail::buffer::append`                                     | `src/fmt/include/fmt/base.h`       |
| removed | -31.00ms | 6.1% → 0.0% | 31.0ms → 0ms |  31 → 0 | `fmt::v11::detail::utf8_decode`                                        | `src/fmt/include/fmt/format.h`     |
| removed | -28.00ms | 5.5% → 0.0% | 28.0ms → 0ms |  28 → 0 | `fmt::v11::detail::parse_format_string`                                | `src/fmt/include/fmt/base.h`       |
| removed | -26.00ms | 5.1% → 0.0% | 26.0ms → 0ms |  26 → 0 | `fmt::v11::detail::parse_format_specs`                                 | `src/fmt/include/fmt/base.h`       |
| removed | -21.00ms | 4.1% → 0.0% | 21.0ms → 0ms |  21 → 0 | `fmt::v11::detail::copy_noinline`                                      | `src/fmt/include/fmt/format.h`     |
| removed | -19.00ms | 3.7% → 0.0% | 19.0ms → 0ms |  19 → 0 | `fmt::v11::detail::parse_replacement_field`                            | `src/fmt/include/fmt/base.h`       |
| removed | -16.00ms | 3.1% → 0.0% | 16.0ms → 0ms |  16 → 0 | `fmt::v11::detail::parse_dynamic_spec`                                 | `src/fmt/include/fmt/base.h`       |
| removed | -13.00ms | 2.6% → 0.0% | 13.0ms → 0ms |  13 → 0 | `fmt::v11::detail::write_float`                                        | `src/fmt/include/fmt/format.h`     |
| removed | -12.00ms | 2.4% → 0.0% | 12.0ms → 0ms |  12 → 0 | `fmt::v11::detail::do_format_decimal`                                  | `src/fmt/include/fmt/format.h`     |
| removed | -12.00ms | 2.4% → 0.0% | 12.0ms → 0ms |  12 → 0 | `fmt::v11::basic_format_arg::visit`                                    | `src/fmt/include/fmt/base.h`       |
| removed | -11.00ms | 2.2% → 0.0% | 11.0ms → 0ms |  11 → 0 | `fmt::v11::detail::parse_format_specs()::{unnamed type#1}::operator()` | `src/fmt/include/fmt/base.h`       |
| removed | -10.00ms | 2.0% → 0.0% | 10.0ms → 0ms |  10 → 0 | `fmt::v11::detail::format_handler::on_format_specs`                    | `src/fmt/include/fmt/format.h`     |
| removed | -10.00ms | 2.0% → 0.0% | 10.0ms → 0ms |  10 → 0 | `fmt::v11::detail::parse_nonnegative_int`                              | `src/fmt/include/fmt/base.h`       |
| removed |  -8.00ms | 1.6% → 0.0% |  8.0ms → 0ms |   8 → 0 | `fmt::v11::detail::write_int`                                          | `src/fmt/include/fmt/format.h`     |
| removed |  -8.00ms | 1.6% → 0.0% |  8.0ms → 0ms |   8 → 0 | `fmt::v11::detail::compute_width()::count_code_points::operator()`     | `src/fmt/include/fmt/format.h`     |
| removed |  -7.00ms | 1.4% → 0.0% |  7.0ms → 0ms |   7 → 0 | `fmt::v11::parse_context::next_arg_id`                                 | `src/fmt/include/fmt/base.h`       |
| removed |  -7.00ms | 1.4% → 0.0% |  7.0ms → 0ms |   7 → 0 | `fmt::v11::detail::format_float`                                       | `src/fmt/include/fmt/format.h`     |
| removed |  -7.00ms | 1.4% → 0.0% |  7.0ms → 0ms |   7 → 0 | `fmt::v11::detail::write_padded`                                       | `src/fmt/include/fmt/format.h`     |
| removed |  -7.00ms | 1.4% → 0.0% |  7.0ms → 0ms |   7 → 0 | `fmt::v11::detail::buffer::push_back`                                  | `src/fmt/include/fmt/base.h`       |
| removed |  -5.00ms | 1.0% → 0.0% |  5.0ms → 0ms |   5 → 0 | `fmt::v11::detail::dragonbox::cache_accessor::get_cached_power`        | `src/fmt/include/fmt/format-inl.h` |

##### Native

|  Change |   Delta |           % |            Time | Samples | Function   | Location                                        |
| ------: | ------: | ----------: | --------------: | ------: | ---------- | ----------------------------------------------- |
|  -33.3% | -5.00ms | 3.0% → 1.9% | 15.0ms → 10.0ms | 15 → 10 | `0x137f20` | `usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
|  -60.0% | -3.00ms | 1.0% → 0.4% |   5.0ms → 2.0ms |   5 → 2 | `0x137f84` | `usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
|  -50.0% | -3.00ms | 1.2% → 0.6% |   6.0ms → 3.0ms |   6 → 3 | `0x92284`  | `usr/lib/aarch64-linux-gnu/libc.so.6`           |
| removed | -2.00ms | 0.4% → 0.0% |     2.0ms → 0ms |   2 → 0 | `0x137f94` | `usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
| removed | -2.00ms | 0.4% → 0.0% |     2.0ms → 0ms |   2 → 0 | `0x8fae0`  | `usr/lib/aarch64-linux-gnu/libc.so.6`           |
| removed | -1.00ms | 0.2% → 0.0% |     1.0ms → 0ms |   1 → 0 | `0x8faa0`  | `usr/lib/aarch64-linux-gnu/libc.so.6`           |
| removed | -1.00ms | 0.2% → 0.0% |     1.0ms → 0ms |   1 → 0 | `0x92aa4`  | `usr/lib/aarch64-linux-gnu/libc.so.6`           |
| removed | -1.00ms | 0.2% → 0.0% |     1.0ms → 0ms |   1 → 0 | `0x92260`  | `usr/lib/aarch64-linux-gnu/libc.so.6`           |
|  -50.0% | -1.00ms | 0.4% → 0.2% |   2.0ms → 1.0ms |   2 → 1 | `0x9d138`  | `usr/lib/aarch64-linux-gnu/libc.so.6`           |
| removed | -1.00ms | 0.2% → 0.0% |     1.0ms → 0ms |   1 → 0 | `0x9a8f0`  | `usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
| removed | -1.00ms | 0.2% → 0.0% |     1.0ms → 0ms |   1 → 0 | `0x929c4`  | `usr/lib/aarch64-linux-gnu/libc.so.6`           |
| removed | -1.00ms | 0.2% → 0.0% |     1.0ms → 0ms |   1 → 0 | `0x8fb44`  | `usr/lib/aarch64-linux-gnu/libc.so.6`           |
|  -50.0% | -1.00ms | 0.4% → 0.2% |   2.0ms → 1.0ms |   2 → 1 | `0x9c2e4`  | `usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
| removed | -1.00ms | 0.2% → 0.0% |     1.0ms → 0ms |   1 → 0 | `0xa2c9c`  | `usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
| removed | -1.00ms | 0.2% → 0.0% |     1.0ms → 0ms |   1 → 0 | `0x92a58`  | `usr/lib/aarch64-linux-gnu/libc.so.6`           |

##### Standard library

|  Change |   Delta |           % |        Time | Samples | Function                              | Location                                 |
| ------: | ------: | ----------: | ----------: | ------: | ------------------------------------- | ---------------------------------------- |
| removed | -2.00ms | 0.4% → 0.0% | 2.0ms → 0ms |   2 → 0 | `std::__cxx11::basic_string::_M_data` | `usr/include/c++/12/bits/basic_string.h` |

### Total time

#### Regressions

Functions with the largest increase in total time spent in the function and all its callees.

##### Ours

| Change |     Delta |            % |          Time | Samples | Function                                                                                   | Location                           |
| -----: | --------: | -----------: | ------------: | ------: | ------------------------------------------------------------------------------------------ | ---------------------------------- |
|    new | +515.00ms | 0.0% → 95.9% | 0ms → 515.0ms | 0 → 515 | `fmt::v12::vformat[abi:cxx11]`                                                             | `src/fmt/include/fmt/format-inl.h` |
|    new | +512.00ms | 0.0% → 95.3% | 0ms → 512.0ms | 0 → 512 | `fmt::v12::format`                                                                         | `src/fmt/include/fmt/format.h`     |
|    new | +470.00ms | 0.0% → 87.5% | 0ms → 470.0ms | 0 → 470 | `fmt::v12::detail::vformat_to`                                                             | `src/fmt/include/fmt/format-inl.h` |
|    new | +468.00ms | 0.0% → 87.2% | 0ms → 468.0ms | 0 → 468 | `fmt::v12::detail::parse_format_string`                                                    | `src/fmt/include/fmt/base.h`       |
|    new | +405.00ms | 0.0% → 75.4% | 0ms → 405.0ms | 0 → 405 | `fmt::v12::detail::parse_replacement_field`                                                | `src/fmt/include/fmt/base.h`       |
|    new | +340.00ms | 0.0% → 63.3% | 0ms → 340.0ms | 0 → 340 | `fmt::v12::detail::format_handler::on_format_specs`                                        | `src/fmt/include/fmt/format.h`     |
|    new | +189.00ms | 0.0% → 35.2% | 0ms → 189.0ms | 0 → 189 | `fmt::v12::detail::write`                                                                  | `src/fmt/include/fmt/format.h`     |
|    new |  +71.00ms | 0.0% → 13.2% |  0ms → 71.0ms |  0 → 71 | `fmt::v12::detail::for_each_codepoint`                                                     | `src/fmt/include/fmt/format.h`     |
|    new |  +66.00ms | 0.0% → 12.3% |  0ms → 66.0ms |  0 → 66 | `fmt::v12::detail::for_each_codepoint()::{lambda(char const*, char const*)#1}::operator()` | `src/fmt/include/fmt/format.h`     |
|    new |  +64.00ms | 0.0% → 11.9% |  0ms → 64.0ms |  0 → 64 | `fmt::v12::detail::copy_noinline`                                                          | `src/fmt/include/fmt/format.h`     |
|    new |  +64.00ms | 0.0% → 11.9% |  0ms → 64.0ms |  0 → 64 | `fmt::v12::detail::write_padded`                                                           | `src/fmt/include/fmt/format.h`     |
|    new |  +57.00ms | 0.0% → 10.6% |  0ms → 57.0ms |  0 → 57 | `fmt::v12::detail::parse_format_specs`                                                     | `src/fmt/include/fmt/base.h`       |
|    new |  +53.00ms |  0.0% → 9.9% |  0ms → 53.0ms |  0 → 53 | `fmt::v12::detail::copy`                                                                   | `src/fmt/include/fmt/base.h`       |
|    new |  +52.00ms |  0.0% → 9.7% |  0ms → 52.0ms |  0 → 52 | `fmt::v12::detail::buffer::append`                                                         | `src/fmt/include/fmt/base.h`       |
|    new |  +47.00ms |  0.0% → 8.8% |  0ms → 47.0ms |  0 → 47 | `fmt::v12::detail::write_int`                                                              | `src/fmt/include/fmt/format.h`     |
|    new |  +47.00ms |  0.0% → 8.8% |  0ms → 47.0ms |  0 → 47 | `fmt::v12::detail::format_handler::on_replacement_field`                                   | `src/fmt/include/fmt/format.h`     |
|    new |  +47.00ms |  0.0% → 8.8% |  0ms → 47.0ms |  0 → 47 | `fmt::v12::detail::write_float`                                                            | `src/fmt/include/fmt/format.h`     |
|    new |  +42.00ms |  0.0% → 7.8% |  0ms → 42.0ms |  0 → 42 | `fmt::v12::detail::utf8_decode`                                                            | `src/fmt/include/fmt/format.h`     |
|    new |  +36.00ms |  0.0% → 6.7% |  0ms → 36.0ms |  0 → 36 | `fmt::v12::detail::format_handler::on_text`                                                | `src/fmt/include/fmt/format.h`     |
|    new |  +36.00ms |  0.0% → 6.7% |  0ms → 36.0ms |  0 → 36 | `fmt::v12::detail::write_fixed`                                                            | `src/fmt/include/fmt/format.h`     |

##### Native

|  Change |    Delta |           % |              Time |   Samples | Function   | Location                                        |
| ------: | -------: | ----------: | ----------------: | --------: | ---------- | ----------------------------------------------- |
|   +5.7% | +29.00ms |      100.0% | 508.0ms → 537.0ms | 508 → 537 | `0x27743`  | `usr/lib/aarch64-linux-gnu/libc.so.6`           |
|   +5.7% | +29.00ms |      100.0% | 508.0ms → 537.0ms | 508 → 537 | `0x27817`  | `usr/lib/aarch64-linux-gnu/libc.so.6`           |
|   +5.7% | +29.00ms |      100.0% | 508.0ms → 537.0ms | 508 → 537 | `_start`   | `<unknown>`                                     |
| +100.0% |  +6.00ms | 1.2% → 2.2% |    6.0ms → 12.0ms |    6 → 12 | `0x9e6c0`  | `usr/lib/aarch64-linux-gnu/libc.so.6`           |
| +125.0% |  +5.00ms | 0.8% → 1.7% |     4.0ms → 9.0ms |     4 → 9 | `0xa0cb0`  | `usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
|  +16.7% |  +2.00ms | 2.4% → 2.6% |   12.0ms → 14.0ms |   12 → 14 | `0x9d100`  | `usr/lib/aarch64-linux-gnu/libc.so.6`           |
|  +33.3% |  +1.00ms | 0.6% → 0.7% |     3.0ms → 4.0ms |     3 → 4 | `0x8faf4`  | `usr/lib/aarch64-linux-gnu/libc.so.6`           |
| +100.0% |  +1.00ms | 0.2% → 0.4% |     1.0ms → 2.0ms |     1 → 2 | `0x9d11c`  | `usr/lib/aarch64-linux-gnu/libc.so.6`           |
| +100.0% |  +1.00ms | 0.2% → 0.4% |     1.0ms → 2.0ms |     1 → 2 | `0x92aa0`  | `usr/lib/aarch64-linux-gnu/libc.so.6`           |
|     new |  +1.00ms | 0.0% → 0.2% |       0ms → 1.0ms |     0 → 1 | `0x9d1b0`  | `usr/lib/aarch64-linux-gnu/libc.so.6`           |
|     new |  +1.00ms | 0.0% → 0.2% |       0ms → 1.0ms |     0 → 1 | `0x9d168`  | `usr/lib/aarch64-linux-gnu/libc.so.6`           |
|     new |  +1.00ms | 0.0% → 0.2% |       0ms → 1.0ms |     0 → 1 | `0x9d184`  | `usr/lib/aarch64-linux-gnu/libc.so.6`           |
|     new |  +1.00ms | 0.0% → 0.2% |       0ms → 1.0ms |     0 → 1 | `0x137f3c` | `usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |

##### Standard library

| Change |   Delta |           % |        Time | Samples | Function                                    | Location                                 |
| -----: | ------: | ----------: | ----------: | ------: | ------------------------------------------- | ---------------------------------------- |
|    new | +1.00ms | 0.0% → 0.2% | 0ms → 1.0ms |   0 → 1 | `std::char_traits::copy`                    | `usr/include/c++/12/bits/char_traits.h`  |
|    new | +1.00ms | 0.0% → 0.2% | 0ms → 1.0ms |   0 → 1 | `std::__cxx11::basic_string::_S_copy`       | `usr/include/c++/12/bits/basic_string.h` |
|    new | +1.00ms | 0.0% → 0.2% | 0ms → 1.0ms |   0 → 1 | `std::__cxx11::basic_string::_S_copy_chars` | `usr/include/c++/12/bits/basic_string.h` |
|    new | +1.00ms | 0.0% → 0.2% | 0ms → 1.0ms |   0 → 1 | `std::__cxx11::basic_string::size`          | `usr/include/c++/12/bits/basic_string.h` |

#### Improvements

Functions with the largest decrease in total time spent in the function and all its callees.

##### Ours

|  Change |     Delta |            % |          Time | Samples | Function                                                 | Location                           |
| ------: | --------: | -----------: | ------------: | ------: | -------------------------------------------------------- | ---------------------------------- |
| removed | -484.00ms | 95.3% → 0.0% | 484.0ms → 0ms | 484 → 0 | `fmt::v11::vformat[abi:cxx11]`                           | `src/fmt/include/fmt/format-inl.h` |
| removed | -484.00ms | 95.3% → 0.0% | 484.0ms → 0ms | 484 → 0 | `fmt::v11::format`                                       | `src/fmt/include/fmt/format.h`     |
| removed | -430.00ms | 84.6% → 0.0% | 430.0ms → 0ms | 430 → 0 | `fmt::v11::detail::vformat_to`                           | `src/fmt/include/fmt/format-inl.h` |
| removed | -429.00ms | 84.4% → 0.0% | 429.0ms → 0ms | 429 → 0 | `fmt::v11::detail::parse_format_string`                  | `src/fmt/include/fmt/base.h`       |
| removed | -370.00ms | 72.8% → 0.0% | 370.0ms → 0ms | 370 → 0 | `fmt::v11::detail::parse_replacement_field`              | `src/fmt/include/fmt/base.h`       |
| removed | -301.00ms | 59.3% → 0.0% | 301.0ms → 0ms | 301 → 0 | `fmt::v11::detail::format_handler::on_format_specs`      | `src/fmt/include/fmt/format.h`     |
| removed | -149.00ms | 29.3% → 0.0% | 149.0ms → 0ms | 149 → 0 | `fmt::v11::detail::write`                                | `src/fmt/include/fmt/format.h`     |
| removed | -119.00ms | 23.4% → 0.0% | 119.0ms → 0ms | 119 → 0 | `fmt::v11::basic_format_arg::visit`                      | `src/fmt/include/fmt/base.h`       |
| removed | -103.00ms | 20.3% → 0.0% | 103.0ms → 0ms | 103 → 0 | `fmt::v11::detail::arg_formatter::operator()`            | `src/fmt/include/fmt/format.h`     |
| removed |  -96.00ms | 18.9% → 0.0% |  96.0ms → 0ms |  96 → 0 | `fmt::v11::detail::write_float`                          | `src/fmt/include/fmt/format.h`     |
| removed |  -65.00ms | 12.8% → 0.0% |  65.0ms → 0ms |  65 → 0 | `fmt::v11::detail::parse_format_specs`                   | `src/fmt/include/fmt/base.h`       |
| removed |  -60.00ms | 11.8% → 0.0% |  60.0ms → 0ms |  60 → 0 | `fmt::v11::detail::copy_noinline`                        | `src/fmt/include/fmt/format.h`     |
| removed |  -55.00ms | 10.8% → 0.0% |  55.0ms → 0ms |  55 → 0 | `fmt::v11::detail::write_padded`                         | `src/fmt/include/fmt/format.h`     |
| removed |  -49.00ms |  9.6% → 0.0% |  49.0ms → 0ms |  49 → 0 | `fmt::v11::detail::buffer::append`                       | `src/fmt/include/fmt/base.h`       |
| removed |  -49.00ms |  9.6% → 0.0% |  49.0ms → 0ms |  49 → 0 | `fmt::v11::detail::copy`                                 | `src/fmt/include/fmt/base.h`       |
| removed |  -43.00ms |  8.5% → 0.0% |  43.0ms → 0ms |  43 → 0 | `fmt::v11::detail::format_handler::on_replacement_field` | `src/fmt/include/fmt/format.h`     |
| removed |  -42.00ms |  8.3% → 0.0% |  42.0ms → 0ms |  42 → 0 | `fmt::v11::detail::write_int`                            | `src/fmt/include/fmt/format.h`     |
| removed |  -40.00ms |  7.9% → 0.0% |  40.0ms → 0ms |  40 → 0 | `fmt::v11::detail::for_each_codepoint`                   | `src/fmt/include/fmt/format.h`     |
| removed |  -40.00ms |  7.9% → 0.0% |  40.0ms → 0ms |  40 → 0 | `fmt::v11::detail::compute_width`                        | `src/fmt/include/fmt/format.h`     |
| removed |  -39.00ms |  7.7% → 0.0% |  39.0ms → 0ms |  39 → 0 | `fmt::v11::detail::do_write_float`                       | `src/fmt/include/fmt/format.h`     |

##### Native

|  Change |   Delta |           % |            Time | Samples | Function   | Location                                        |
| ------: | ------: | ----------: | --------------: | ------: | ---------- | ----------------------------------------------- |
|  -33.3% | -5.00ms | 3.0% → 1.9% | 15.0ms → 10.0ms | 15 → 10 | `0x137f20` | `usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
|  -44.4% | -4.00ms | 1.8% → 0.9% |   9.0ms → 5.0ms |   9 → 5 | `0xa2cab`  | `usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
|  -37.5% | -3.00ms | 1.6% → 0.9% |   8.0ms → 5.0ms |   8 → 5 | `0x92a9b`  | `usr/lib/aarch64-linux-gnu/libc.so.6`           |
|  -60.0% | -3.00ms | 1.0% → 0.4% |   5.0ms → 2.0ms |   5 → 2 | `0x137f84` | `usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
|  -50.0% | -3.00ms | 1.2% → 0.6% |   6.0ms → 3.0ms |   6 → 3 | `0x92284`  | `usr/lib/aarch64-linux-gnu/libc.so.6`           |
| removed | -2.00ms | 0.4% → 0.0% |     2.0ms → 0ms |   2 → 0 | `0x137f94` | `usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
| removed | -2.00ms | 0.4% → 0.0% |     2.0ms → 0ms |   2 → 0 | `0x8fae0`  | `usr/lib/aarch64-linux-gnu/libc.so.6`           |
| removed | -1.00ms | 0.2% → 0.0% |     1.0ms → 0ms |   1 → 0 | `0x8faa0`  | `usr/lib/aarch64-linux-gnu/libc.so.6`           |
| removed | -1.00ms | 0.2% → 0.0% |     1.0ms → 0ms |   1 → 0 | `0x92aa4`  | `usr/lib/aarch64-linux-gnu/libc.so.6`           |
| removed | -1.00ms | 0.2% → 0.0% |     1.0ms → 0ms |   1 → 0 | `0x92260`  | `usr/lib/aarch64-linux-gnu/libc.so.6`           |
|  -50.0% | -1.00ms | 0.4% → 0.2% |   2.0ms → 1.0ms |   2 → 1 | `0x9d138`  | `usr/lib/aarch64-linux-gnu/libc.so.6`           |
| removed | -1.00ms | 0.2% → 0.0% |     1.0ms → 0ms |   1 → 0 | `0x9a8f0`  | `usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
| removed | -1.00ms | 0.2% → 0.0% |     1.0ms → 0ms |   1 → 0 | `0x929c4`  | `usr/lib/aarch64-linux-gnu/libc.so.6`           |
| removed | -1.00ms | 0.2% → 0.0% |     1.0ms → 0ms |   1 → 0 | `0x8fb44`  | `usr/lib/aarch64-linux-gnu/libc.so.6`           |
|  -50.0% | -1.00ms | 0.4% → 0.2% |   2.0ms → 1.0ms |   2 → 1 | `0x9c2e4`  | `usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
| removed | -1.00ms | 0.2% → 0.0% |     1.0ms → 0ms |   1 → 0 | `0xa2c9c`  | `usr/lib/aarch64-linux-gnu/libstdc++.so.6.0.30` |
| removed | -1.00ms | 0.2% → 0.0% |     1.0ms → 0ms |   1 → 0 | `0x92a58`  | `usr/lib/aarch64-linux-gnu/libc.so.6`           |

##### Standard library

|  Change |   Delta |           % |            Time | Samples | Function                                    | Location                                   |
| ------: | ------: | ----------: | --------------: | ------: | ------------------------------------------- | ------------------------------------------ |
|  -35.7% | -5.00ms | 2.8% → 1.7% |  14.0ms → 9.0ms |  14 → 9 | `std::__cxx11::basic_string::_M_construct`  | `usr/include/c++/12/bits/basic_string.tcc` |
|  -33.3% | -5.00ms | 3.0% → 1.9% | 15.0ms → 10.0ms | 15 → 10 | `std::__cxx11::basic_string::basic_string`  | `usr/include/c++/12/bits/basic_string.h`   |
|  -26.7% | -4.00ms | 3.0% → 2.0% | 15.0ms → 11.0ms | 15 → 11 | `std::__cxx11::basic_string::~basic_string` | `usr/include/c++/12/bits/basic_string.h`   |
|  -28.6% | -4.00ms | 2.8% → 1.9% | 14.0ms → 10.0ms | 14 → 10 | `std::__new_allocator::deallocate`          | `usr/include/c++/12/bits/new_allocator.h`  |
|  -28.6% | -4.00ms | 2.8% → 1.9% | 14.0ms → 10.0ms | 14 → 10 | `std::allocator_traits::deallocate`         | `usr/include/c++/12/bits/alloc_traits.h`   |
|  -28.6% | -4.00ms | 2.8% → 1.9% | 14.0ms → 10.0ms | 14 → 10 | `std::__cxx11::basic_string::_M_destroy`    | `usr/include/c++/12/bits/basic_string.h`   |
|  -28.6% | -4.00ms | 2.8% → 1.9% | 14.0ms → 10.0ms | 14 → 10 | `std::__cxx11::basic_string::_M_dispose`    | `usr/include/c++/12/bits/basic_string.h`   |
| removed | -2.00ms | 0.4% → 0.0% |     2.0ms → 0ms |   2 → 0 | `std::__cxx11::basic_string::_M_data`       | `usr/include/c++/12/bits/basic_string.h`   |
| removed | -2.00ms | 0.4% → 0.0% |     2.0ms → 0ms |   2 → 0 | `std::__cxx11::basic_string::_M_set_length` | `usr/include/c++/12/bits/basic_string.h`   |

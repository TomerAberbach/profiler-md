# CPU profile diff

Took 499.0ms → 517.0ms (+18.0ms, +3.6%) over 292 samples → 303 samples (1.7ms per sample).

| Category | Change |   Delta |             % |              Time |   Samples |
| -------- | -----: | ------: | ------------: | ----------------: | --------: |
| ours     |  +3.3% | +16.0ms | 97.0% → 96.7% | 484.0ms → 500.0ms | 284 → 298 |
| stdlib   | +13.3% |  +2.0ms |   3.0% → 3.3% |   15.0ms → 17.0ms |     8 → 5 |

## Hottest functions

### Self time

#### Regressions

Functions with the largest increase in time spent directly in the function body, excluding callees.

|  Change |   Delta |           % |            Time | Samples | Function                                                                               | Location                                                |
| ------: | ------: | ----------: | --------------: | ------: | -------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| +154.5% | +17.0ms | 2.2% → 5.4% | 11.0ms → 28.0ms | 10 → 18 | `fmt::v11::detail::parse_replacement_field`                                            | ../../../../../../src/fmt/include/fmt/base.h            |
| +600.0% |  +6.0ms | 0.2% → 1.4% |   1.0ms → 7.0ms |   1 → 2 | `fmt::v11::detail::do_format_base2e`                                                   | ../../../../../../src/fmt/include/fmt/format.h          |
|  +71.4% |  +5.0ms | 1.4% → 2.3% |  7.0ms → 12.0ms |   4 → 6 | `fmt::v11::detail::parse_dynamic_spec`                                                 | ../../../../../../src/fmt/include/fmt/base.h            |
| +200.0% |  +4.0ms | 0.4% → 1.2% |   2.0ms → 6.0ms |   2 → 4 | `fmt::v11::detail::write_float`                                                        | ../../../../../../src/fmt/include/fmt/format.h          |
| +400.0% |  +4.0ms | 0.2% → 1.0% |   1.0ms → 5.0ms |   1 → 3 | `fmt::v11::detail::parse_align`                                                        | ../../../../../../src/fmt/include/fmt/base.h            |
|  +57.1% |  +4.0ms | 1.4% → 2.1% |  7.0ms → 11.0ms |   5 → 7 | `fmt::v11::detail::compute_width()::count_code_points::operator()`                     | ../../../../../../src/fmt/include/fmt/format.h          |
|  +25.0% |  +3.0ms | 2.4% → 2.9% | 12.0ms → 15.0ms | 11 → 15 | `fmt::v11::detail::copy_noinline`                                                      | ../../../../../../src/fmt/include/fmt/format.h          |
|     new |  +3.0ms | 0.0% → 0.6% |     0ms → 3.0ms |   0 → 3 | `fmt::v11::detail::do_write_float()::{lambda(fmt::v11::basic_appender)#5}::operator()` | ../../../../../../src/fmt/include/fmt/format.h          |
|     new |  +3.0ms | 0.0% → 0.6% |     0ms → 3.0ms |   0 → 3 | `fmt::v11::detail::reserve`                                                            | ../../../../../../src/fmt/include/fmt/format.h          |
|     new |  +3.0ms | 0.0% → 0.6% |     0ms → 3.0ms |   0 → 2 | `fmt::v11::detail::to_pointer`                                                         | ../../../../../../src/fmt/include/fmt/format.h          |
| +200.0% |  +2.0ms | 0.2% → 0.6% |   1.0ms → 3.0ms |   1 → 3 | `fmt::v11::detail::do_write_float()::{lambda(fmt::v11::basic_appender)#4}::operator()` | ../../../../../../src/fmt/include/fmt/format.h          |
|  +33.3% |  +2.0ms | 1.2% → 1.5% |   6.0ms → 8.0ms |   4 → 2 | `fmt::v11::detail::dragonbox::cache_accessor::get_cached_power`                        | ../../../../../../src/fmt/include/fmt/format-inl.h      |
| +100.0% |  +2.0ms | 0.4% → 0.8% |   2.0ms → 4.0ms |   1 → 2 | `fmt::v11::detail::in`                                                                 | ../../../../../../src/fmt/include/fmt/base.h            |
|     new |  +2.0ms | 0.0% → 0.4% |     0ms → 2.0ms |   0 → 2 | `fmt::v11::detail::dragonbox::floor_log2_pow10`                                        | ../../../../../../src/fmt/include/fmt/format.h          |
|     new |  +2.0ms | 0.0% → 0.4% |     0ms → 2.0ms |   0 → 2 | `std::char_traits::assign`                                                             | ../../../../../../usr/include/c++/12/bits/char_traits.h |
|     new |  +2.0ms | 0.0% → 0.4% |     0ms → 2.0ms |   0 → 1 | `fmt::v11::basic_string_view::basic_string_view`                                       | ../../../../../../src/fmt/include/fmt/base.h            |
|  +33.3% |  +1.0ms | 0.6% → 0.8% |   3.0ms → 4.0ms |   3 → 4 | `fmt::v11::basic_format_args::get`                                                     | ../../../../../../src/fmt/include/fmt/base.h            |
|  +20.0% |  +1.0ms | 1.0% → 1.2% |   5.0ms → 6.0ms |   4 → 5 | `fmt::v11::detail::buffer::data`                                                       | ../../../../../../src/fmt/include/fmt/base.h            |
|  +20.0% |  +1.0ms | 1.0% → 1.2% |   5.0ms → 6.0ms |   5 → 3 | `fmt::v11::detail::write2digits`                                                       | ../../../../../../src/fmt/include/fmt/format.h          |
|  +14.3% |  +1.0ms | 1.4% → 1.5% |   7.0ms → 8.0ms |       5 | `fmt::v11::detail::buffer::push_back`                                                  | ../../../../../../src/fmt/include/fmt/base.h            |

#### Progressions

Functions with the largest decrease in time spent directly in the function body, excluding callees.

|  Change |  Delta |           % |            Time | Samples | Function                                                                                   | Location                                                   |
| ------: | -----: | ----------: | --------------: | ------: | ------------------------------------------------------------------------------------------ | ---------------------------------------------------------- |
|  -53.8% | -7.0ms | 2.6% → 1.2% |  13.0ms → 6.0ms |   5 → 4 | `fmt::v11::detail::format_handler::on_replacement_field`                                   | ../../../../../../src/fmt/include/fmt/format.h             |
|  -17.5% | -7.0ms | 8.0% → 6.4% | 40.0ms → 33.0ms |       9 | `fmt::v11::detail::parse_format_specs`                                                     | ../../../../../../src/fmt/include/fmt/base.h               |
|  -60.0% | -6.0ms | 2.0% → 0.8% |  10.0ms → 4.0ms |   5 → 3 | `std::__new_allocator::deallocate`                                                         | ../../../../../../usr/include/c++/12/bits/new_allocator.h  |
|  -26.3% | -5.0ms | 3.8% → 2.7% | 19.0ms → 14.0ms |  8 → 10 | `fmt::v11::detail::parse_format_string`                                                    | ../../../../../../src/fmt/include/fmt/base.h               |
|  -38.5% | -5.0ms | 2.6% → 1.5% |  13.0ms → 8.0ms |   9 → 6 | `fmt::v11::detail::do_write_float`                                                         | ../../../../../../src/fmt/include/fmt/format.h             |
|  -30.8% | -4.0ms | 2.6% → 1.7% |  13.0ms → 9.0ms |  11 → 9 | `fmt::v11::detail::format_float`                                                           | ../../../../../../src/fmt/include/fmt/format.h             |
| removed | -4.0ms | 0.8% → 0.0% |     4.0ms → 0ms |   4 → 0 | `fmt::v11::to_string`                                                                      | ../../../../../../src/fmt/include/fmt/format.h             |
|  -80.0% | -4.0ms | 1.0% → 0.2% |   5.0ms → 1.0ms |   3 → 1 | `fmt::v11::detail::do_count_digits`                                                        | ../../../../../../src/fmt/include/fmt/format.h             |
|  -80.0% | -4.0ms | 1.0% → 0.2% |   5.0ms → 1.0ms |   3 → 1 | `fmt::v11::detail::to_unsigned`                                                            | ../../../../../../src/fmt/include/fmt/base.h               |
|  -25.0% | -3.0ms | 2.4% → 1.7% |  12.0ms → 9.0ms |  11 → 7 | `fmt::v11::detail::buffer::try_reserve`                                                    | ../../../../../../src/fmt/include/fmt/base.h               |
|  -75.0% | -3.0ms | 0.8% → 0.2% |   4.0ms → 1.0ms |   4 → 1 | `_init`                                                                                    | `<unknown>`                                                |
|  -75.0% | -3.0ms | 0.8% → 0.2% |   4.0ms → 1.0ms |       1 | `fmt::v11::detail::for_each_codepoint()::{lambda(char const*, char const*)#1}::operator()` | ../../../../../../src/fmt/include/fmt/format.h             |
|  -25.0% | -3.0ms | 2.4% → 1.7% |  12.0ms → 9.0ms |   5 → 6 | `fmt::v11::detail::parse_nonnegative_int`                                                  | ../../../../../../src/fmt/include/fmt/base.h               |
|  -40.0% | -2.0ms | 1.0% → 0.6% |   5.0ms → 3.0ms |   5 → 2 | `fmt::v11::detail::format_handler::on_text`                                                | ../../../../../../src/fmt/include/fmt/format.h             |
|   -5.0% | -2.0ms | 8.0% → 7.4% | 40.0ms → 38.0ms |   7 → 9 | `fmt::v11::vformat[abi:cxx11]`                                                             | ../../../../../../src/fmt/include/fmt/format-inl.h         |
| removed | -2.0ms | 0.4% → 0.0% |     2.0ms → 0ms |   1 → 0 | `fmt::v11::detail::arg_formatter::operator()`                                              | ../../../../../../src/fmt/include/fmt/format.h             |
|   -8.0% | -2.0ms | 5.0% → 4.4% | 25.0ms → 23.0ms |  11 → 9 | `fmt::v11::detail::format_handler::on_format_specs`                                        | ../../../../../../src/fmt/include/fmt/format.h             |
|  -16.7% | -2.0ms | 2.4% → 1.9% | 12.0ms → 10.0ms |   8 → 7 | `std::__cxx11::basic_string::_M_construct`                                                 | ../../../../../../usr/include/c++/12/bits/basic_string.tcc |
|  -66.7% | -2.0ms | 0.6% → 0.2% |   3.0ms → 1.0ms |   3 → 1 | `fmt::v11::detail::buffer::buffer`                                                         | ../../../../../../src/fmt/include/fmt/base.h               |
|  -28.6% | -2.0ms | 1.4% → 1.0% |   7.0ms → 5.0ms |       2 | `fmt::v11::basic_specs::localized`                                                         | ../../../../../../src/fmt/include/fmt/base.h               |

### Total time

#### Regressions

Functions with the largest increase in total time spent in the function and all its callees.

|  Change |   Delta |             % |              Time |   Samples | Function                                                                               | Location                                           |
| ------: | ------: | ------------: | ----------------: | --------: | -------------------------------------------------------------------------------------- | -------------------------------------------------- |
|  +10.2% | +37.0ms | 72.7% → 77.4% | 363.0ms → 400.0ms | 220 → 238 | `fmt::v11::detail::parse_replacement_field`                                            | ../../../../../../src/fmt/include/fmt/base.h       |
|   +7.9% | +32.0ms | 81.4% → 84.7% | 406.0ms → 438.0ms | 249 → 270 | `fmt::v11::detail::parse_format_string`                                                | ../../../../../../src/fmt/include/fmt/base.h       |
|   +7.6% | +31.0ms | 81.8% → 84.9% | 408.0ms → 439.0ms | 251 → 271 | `fmt::v11::detail::vformat_to`                                                         | ../../../../../../src/fmt/include/fmt/format-inl.h |
|   +8.0% | +24.0ms | 60.1% → 62.7% | 300.0ms → 324.0ms | 173 → 185 | `fmt::v11::detail::format_handler::on_format_specs`                                    | ../../../../../../src/fmt/include/fmt/format.h     |
|   +4.4% | +21.0ms | 94.6% → 95.4% | 472.0ms → 493.0ms | 277 → 293 | `fmt::v11::vformat[abi:cxx11]`                                                         | ../../../../../../src/fmt/include/fmt/format-inl.h |
|   +3.3% | +16.0ms | 97.0% → 96.7% | 484.0ms → 500.0ms | 286 → 298 | `main`                                                                                 | ../../../../../../out/profile.cpp                  |
|  +19.7% | +15.0ms | 15.2% → 17.6% |   76.0ms → 91.0ms |   59 → 70 | `fmt::v11::detail::write_float`                                                        | ../../../../../../src/fmt/include/fmt/format.h     |
|  +17.9% |  +7.0ms |   7.8% → 8.9% |   39.0ms → 46.0ms |   29 → 42 | `fmt::v11::detail::do_write_float`                                                     | ../../../../../../src/fmt/include/fmt/format.h     |
| +600.0% |  +6.0ms |   0.2% → 1.4% |     1.0ms → 7.0ms |     1 → 2 | `fmt::v11::detail::do_format_base2e`                                                   | ../../../../../../src/fmt/include/fmt/format.h     |
|  +71.4% |  +5.0ms |   1.4% → 2.3% |    7.0ms → 12.0ms |     5 → 8 | `fmt::v11::basic_format_arg::visit`                                                    | ../../../../../../src/fmt/include/fmt/base.h       |
|  +62.5% |  +5.0ms |   1.6% → 2.5% |    8.0ms → 13.0ms |    6 → 10 | `fmt::v11::detail::write_padded`                                                       | ../../../../../../src/fmt/include/fmt/format.h     |
| +500.0% |  +5.0ms |   0.2% → 1.2% |     1.0ms → 6.0ms |     1 → 3 | `fmt::v11::detail::fill_n`                                                             | ../../../../../../src/fmt/include/fmt/format.h     |
| +400.0% |  +4.0ms |   0.2% → 1.0% |     1.0ms → 5.0ms |     1 → 5 | `fmt::v11::detail::do_write_float()::{lambda(fmt::v11::basic_appender)#5}::operator()` | ../../../../../../src/fmt/include/fmt/format.h     |
|   +9.3% |  +4.0ms |   8.6% → 9.1% |   43.0ms → 47.0ms |   28 → 26 | `fmt::v11::detail::write_int`                                                          | ../../../../../../src/fmt/include/fmt/format.h     |
| +100.0% |  +4.0ms |   0.8% → 1.5% |     4.0ms → 8.0ms |     2 → 5 | `fmt::v11::detail::write()::{lambda(fmt::v11::basic_appender)#1}::operator()`          | ../../../../../../src/fmt/include/fmt/format.h     |
| +400.0% |  +4.0ms |   0.2% → 1.0% |     1.0ms → 5.0ms |     1 → 3 | `fmt::v11::detail::parse_align`                                                        | ../../../../../../src/fmt/include/fmt/base.h       |
|  +57.1% |  +4.0ms |   1.4% → 2.1% |    7.0ms → 11.0ms |     5 → 7 | `fmt::v11::detail::compute_width()::count_code_points::operator()`                     | ../../../../../../src/fmt/include/fmt/format.h     |
|  +50.0% |  +3.0ms |   1.2% → 1.7% |     6.0ms → 9.0ms |     4 → 3 | `fmt::v11::detail::dragonbox::cache_accessor::get_cached_power`                        | ../../../../../../src/fmt/include/fmt/format-inl.h |
|  +50.0% |  +3.0ms |   1.2% → 1.7% |     6.0ms → 9.0ms |     4 → 3 | `fmt::v11::detail::dragonbox::get_cached_power`                                        | ../../../../../../src/fmt/include/fmt/format-inl.h |
|     new |  +3.0ms |   0.0% → 0.6% |       0ms → 3.0ms |     0 → 3 | `fmt::v11::detail::reserve`                                                            | ../../../../../../src/fmt/include/fmt/format.h     |

#### Progressions

Functions with the largest decrease in total time spent in the function and all its callees.

| Change |   Delta |            % |            Time | Samples | Function                                                                        | Location                                                   |
| -----: | ------: | -----------: | --------------: | ------: | ------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| -85.7% | -12.0ms |  2.8% → 0.4% |  14.0ms → 2.0ms |  10 → 2 | `std::__cxx11::basic_string::basic_string`                                      | ../../../../../../usr/include/c++/12/bits/basic_string.h   |
| -12.0% |  -6.0ms | 10.0% → 8.5% | 50.0ms → 44.0ms | 35 → 31 | `fmt::v11::detail::format_handler::on_replacement_field`                        | ../../../../../../src/fmt/include/fmt/format.h             |
| -33.3% |  -6.0ms |  3.6% → 2.3% | 18.0ms → 12.0ms |  14 → 9 | `fmt::v11::to_string`                                                           | ../../../../../../src/fmt/include/fmt/format.h             |
| -60.0% |  -6.0ms |  2.0% → 0.8% |  10.0ms → 4.0ms |   5 → 3 | `std::__new_allocator::deallocate`                                              | ../../../../../../usr/include/c++/12/bits/new_allocator.h  |
| -60.0% |  -6.0ms |  2.0% → 0.8% |  10.0ms → 4.0ms |   5 → 3 | `std::allocator_traits::deallocate`                                             | ../../../../../../usr/include/c++/12/bits/alloc_traits.h   |
| -41.7% |  -5.0ms |  2.4% → 1.4% |  12.0ms → 7.0ms |   7 → 6 | `std::__cxx11::basic_string::~basic_string`                                     | ../../../../../../usr/include/c++/12/bits/basic_string.h   |
| -45.5% |  -5.0ms |  2.2% → 1.2% |  11.0ms → 6.0ms |   6 → 5 | `std::__cxx11::basic_string::_M_destroy`                                        | ../../../../../../usr/include/c++/12/bits/basic_string.h   |
| -45.5% |  -5.0ms |  2.2% → 1.2% |  11.0ms → 6.0ms |   6 → 5 | `std::__cxx11::basic_string::_M_dispose`                                        | ../../../../../../usr/include/c++/12/bits/basic_string.h   |
| -80.0% |  -4.0ms |  1.0% → 0.2% |   5.0ms → 1.0ms |   5 → 1 | `fmt::v11::detail::format_float()::{lambda(unsigned int, char*)#1}::operator()` | ../../../../../../src/fmt/include/fmt/format.h             |
| -80.0% |  -4.0ms |  1.0% → 0.2% |   5.0ms → 1.0ms |   3 → 1 | `fmt::v11::detail::do_count_digits`                                             | ../../../../../../src/fmt/include/fmt/format.h             |
| -80.0% |  -4.0ms |  1.0% → 0.2% |   5.0ms → 1.0ms |   3 → 1 | `fmt::v11::detail::count_digits`                                                | ../../../../../../src/fmt/include/fmt/format.h             |
| -80.0% |  -4.0ms |  1.0% → 0.2% |   5.0ms → 1.0ms |   3 → 1 | `fmt::v11::detail::to_unsigned`                                                 | ../../../../../../src/fmt/include/fmt/base.h               |
|  -6.0% |  -3.0ms | 10.0% → 9.1% | 50.0ms → 47.0ms | 38 → 36 | `fmt::v11::detail::buffer::append`                                              | ../../../../../../src/fmt/include/fmt/base.h               |
| -75.0% |  -3.0ms |  0.8% → 0.2% |   4.0ms → 1.0ms |   3 → 1 | `fmt::v11::detail::arg_formatter::operator()`                                   | ../../../../../../src/fmt/include/fmt/format.h             |
| -10.7% |  -3.0ms |  5.6% → 4.8% | 28.0ms → 25.0ms | 24 → 19 | `fmt::v11::detail::format_float`                                                | ../../../../../../src/fmt/include/fmt/format.h             |
| -25.0% |  -3.0ms |  2.4% → 1.7% |  12.0ms → 9.0ms |  11 → 7 | `fmt::v11::detail::buffer::try_reserve`                                         | ../../../../../../src/fmt/include/fmt/base.h               |
| -75.0% |  -3.0ms |  0.8% → 0.2% |   4.0ms → 1.0ms |   4 → 1 | `_init`                                                                         | `<unknown>`                                                |
| -23.1% |  -3.0ms |  2.6% → 1.9% | 13.0ms → 10.0ms |   9 → 7 | `std::__cxx11::basic_string::_M_construct`                                      | ../../../../../../usr/include/c++/12/bits/basic_string.tcc |
| -60.0% |  -3.0ms |  1.0% → 0.4% |   5.0ms → 2.0ms |   3 → 2 | `fmt::v11::detail::size_padding::size_padding`                                  | ../../../../../../src/fmt/include/fmt/format.h             |
| -25.0% |  -3.0ms |  2.4% → 1.7% |  12.0ms → 9.0ms |   5 → 6 | `fmt::v11::detail::parse_nonnegative_int`                                       | ../../../../../../src/fmt/include/fmt/base.h               |

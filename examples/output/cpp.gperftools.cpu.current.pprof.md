# CPU profile

Took 598.0ms over 598 samples (1.0ms per sample).

| Category         |     % |    Time | Samples |
| ---------------- | ----: | ------: | ------: |
| Ours             | 79.6% | 476.0ms |     476 |
| Unknown          | 10.4% |  62.0ms |      62 |
| Native           |  8.7% |  52.0ms |      52 |
| Standard library |  1.3% |   8.0ms |       8 |

Paths starting with `./` or `../` are relative to `/src/fmt/include/fmt/`.

## Hottest functions

### Self time

Functions with the most time spent within the function body, excluding callees.

|     % |   Time | Samples | Function                                                                                       | Location          |
| ----: | -----: | ------: | ---------------------------------------------------------------------------------------------- | ----------------- |
| 10.4% | 62.0ms |      62 | `(anonymous)`                                                                                  | `<unknown>`       |
|  8.2% | 49.0ms |      49 | `fmt::v12::detail::buffer::append`                                                             | `./base.h:1845`   |
|  6.9% | 41.0ms |      41 | `fmt::v12::detail::parse_format_specs`                                                         | `./base.h:1461`   |
|  4.7% | 28.0ms |      28 | `fmt::v12::detail::utf8_decode`                                                                | `./format.h:590`  |
|  4.7% | 28.0ms |      28 | `fmt::v12::detail::copy_noinline`                                                              | `./format.h:568`  |
|  4.2% | 25.0ms |      25 | `fmt::v12::detail::parse_format_string`                                                        | `./base.h:1646`   |
|  3.0% | 18.0ms |      18 | `fmt::v12::detail::format_float`                                                               | `./format.h:3134` |
|  2.7% | 16.0ms |      16 | `std::__cxx11::basic_string::_M_dispose`                                                       | `<unknown>`       |
|  2.5% | 15.0ms |      15 | `fmt::v12::detail::parse_replacement_field`                                                    | `./base.h:1599`   |
|  2.5% | 15.0ms |      15 | `fmt::v12::detail::buffer::push_back`                                                          | `./base.h:1832`   |
|  2.3% | 14.0ms |      14 | `fmt::v12::detail::buffer::try_reserve`                                                        | `./base.h:1828`   |
|  2.0% | 12.0ms |      12 | `fmt::v12::detail::parse_dynamic_spec`                                                         | `./base.h:1400`   |
|  2.0% | 12.0ms |      12 | `operator delete`                                                                              | `<unknown>`       |
|  1.8% | 11.0ms |      11 | `fmt::v12::detail::for_each_codepoint()::{lambda(char const*, char const*)#1}::operator()`     | `./format.h`      |
|  1.8% | 11.0ms |      11 | `fmt::v12::detail::for_each_codepoint`                                                         | `./format.h:632`  |
|  1.8% | 11.0ms |      11 | `fmt::v12::detail::do_format_decimal`                                                          | `./format.h:1207` |
|  1.8% | 11.0ms |      11 | `fmt::v12::detail::write()::{lambda(unsigned int, fmt::v12::basic_string_view)#1}::operator()` | `./format.h`      |
|  1.7% | 10.0ms |      10 | `fmt::v12::detail::parse_nonnegative_int`                                                      | `./base.h:1312`   |
|  1.7% | 10.0ms |      10 | `std::__cxx11::basic_string::_M_create`                                                        | `<unknown>`       |
|  1.5% |  9.0ms |       9 | `fmt::v12::detail::write_int`                                                                  | `./format.h:2050` |

#### Categories

Categories accounting for at least 1.0% of self time.

##### Ours

|    % |   Time | Samples | Function                                                                                       | Location             |
| ---: | -----: | ------: | ---------------------------------------------------------------------------------------------- | -------------------- |
| 8.2% | 49.0ms |      49 | `fmt::v12::detail::buffer::append`                                                             | `./base.h:1845`      |
| 6.9% | 41.0ms |      41 | `fmt::v12::detail::parse_format_specs`                                                         | `./base.h:1461`      |
| 4.7% | 28.0ms |      28 | `fmt::v12::detail::utf8_decode`                                                                | `./format.h:590`     |
| 4.7% | 28.0ms |      28 | `fmt::v12::detail::copy_noinline`                                                              | `./format.h:568`     |
| 4.2% | 25.0ms |      25 | `fmt::v12::detail::parse_format_string`                                                        | `./base.h:1646`      |
| 3.0% | 18.0ms |      18 | `fmt::v12::detail::format_float`                                                               | `./format.h:3134`    |
| 2.5% | 15.0ms |      15 | `fmt::v12::detail::parse_replacement_field`                                                    | `./base.h:1599`      |
| 2.5% | 15.0ms |      15 | `fmt::v12::detail::buffer::push_back`                                                          | `./base.h:1832`      |
| 2.3% | 14.0ms |      14 | `fmt::v12::detail::buffer::try_reserve`                                                        | `./base.h:1828`      |
| 2.0% | 12.0ms |      12 | `fmt::v12::detail::parse_dynamic_spec`                                                         | `./base.h:1400`      |
| 1.8% | 11.0ms |      11 | `fmt::v12::detail::for_each_codepoint()::{lambda(char const*, char const*)#1}::operator()`     | `./format.h`         |
| 1.8% | 11.0ms |      11 | `fmt::v12::detail::for_each_codepoint`                                                         | `./format.h:632`     |
| 1.8% | 11.0ms |      11 | `fmt::v12::detail::do_format_decimal`                                                          | `./format.h:1207`    |
| 1.8% | 11.0ms |      11 | `fmt::v12::detail::write()::{lambda(unsigned int, fmt::v12::basic_string_view)#1}::operator()` | `./format.h`         |
| 1.7% | 10.0ms |      10 | `fmt::v12::detail::parse_nonnegative_int`                                                      | `./base.h:1312`      |
| 1.5% |  9.0ms |       9 | `fmt::v12::detail::write_int`                                                                  | `./format.h:2050`    |
| 1.3% |  8.0ms |       8 | `fmt::v12::detail::write_padded`                                                               | `./format.h:1675`    |
| 1.3% |  8.0ms |       8 | `fmt::v12::detail::parse_format_specs()::{unnamed type#1}::operator()`                         | `./base.h:1476`      |
| 1.3% |  8.0ms |       8 | `fmt::v12::detail::write_fixed`                                                                | `./format.h:2487`    |
| 1.3% |  8.0ms |       8 | `fmt::v12::detail::dragonbox::cache_accessor::get_cached_power`                                | `./format-inl.h:376` |

##### Unknown

|     % |   Time | Samples | Function      | Location    |
| ----: | -----: | ------: | ------------- | ----------- |
| 10.4% | 62.0ms |      62 | `(anonymous)` | `<unknown>` |

##### Native

|    % |   Time | Samples | Function                                 | Location    |
| ---: | -----: | ------: | ---------------------------------------- | ----------- |
| 2.7% | 16.0ms |      16 | `std::__cxx11::basic_string::_M_dispose` | `<unknown>` |
| 2.0% | 12.0ms |      12 | `operator delete`                        | `<unknown>` |
| 1.7% | 10.0ms |      10 | `std::__cxx11::basic_string::_M_create`  | `<unknown>` |
| 1.0% |  6.0ms |       6 | `_init`                                  | `<unknown>` |
| 0.8% |  5.0ms |       5 | `__libc_malloc`                          | `<unknown>` |
| 0.3% |  2.0ms |       2 | `operator new`                           | `<unknown>` |
| 0.2% |  1.0ms |       1 | `cfree`                                  | `<unknown>` |

##### Standard library

|    % |  Time | Samples | Function                                                 | Location                                      |
| ---: | ----: | ------: | -------------------------------------------------------- | --------------------------------------------- |
| 0.5% | 3.0ms |       3 | `std::char_traits::assign`                               | `/usr/include/c++/12/bits/char_traits.h:347`  |
| 0.3% | 2.0ms |       2 | `std::char_traits::copy`                                 | `/usr/include/c++/12/bits/char_traits.h:423`  |
| 0.2% | 1.0ms |       1 | `std::__cxx11::basic_string::_Alloc_hider::_Alloc_hider` | `/usr/include/c++/12/bits/basic_string.h:199` |
| 0.2% | 1.0ms |       1 | `std::__cxx11::basic_string::_M_destroy`                 | `/usr/include/c++/12/bits/basic_string.h:291` |
| 0.2% | 1.0ms |       1 | `std::__cxx11::basic_string::~basic_string`              | `/usr/include/c++/12/bits/basic_string.h:794` |

#### Lines

Lines with the largest contribution to each function's self time.

##### `fmt::v12::detail::buffer::append` (`./base.h:1845`)

|     % |   Time | Samples | Location        |
| ----: | -----: | ------: | --------------- |
| 51.0% | 25.0ms |      25 | `./base.h:1853` |
| 22.4% | 11.0ms |      11 | `./base.h:1854` |
| 10.2% |  5.0ms |       5 | `./base.h:1852` |
| 10.2% |  5.0ms |       5 | `./base.h:1846` |
|  4.1% |  2.0ms |       2 | `./base.h:1857` |

##### `fmt::v12::detail::parse_format_specs` (`./base.h:1461`)

|     % |   Time | Samples | Location        |
| ----: | -----: | ------: | --------------- |
| 53.7% | 22.0ms |      22 | `./base.h:1498` |
| 14.6% |  6.0ms |       6 | `./base.h:1593` |
| 12.2% |  5.0ms |       5 | `./base.h:1461` |
|  9.8% |  4.0ms |       4 | `./base.h:1596` |
|  7.3% |  3.0ms |       3 | `./base.h:1471` |

##### `fmt::v12::detail::utf8_decode` (`./format.h:590`)

|     % |  Time | Samples | Location         |
| ----: | ----: | ------: | ---------------- |
| 28.6% | 8.0ms |       8 | `./format.h:595` |
| 21.4% | 6.0ms |       6 | `./format.h:622` |
| 10.7% | 3.0ms |       3 | `./format.h:621` |
| 10.7% | 3.0ms |       3 | `./format.h:593` |
|  7.1% | 2.0ms |       2 | `./format.h:592` |

##### `fmt::v12::detail::copy_noinline` (`./format.h:568`)

|     % |   Time | Samples | Location         |
| ----: | -----: | ------: | ---------------- |
| 60.7% | 17.0ms |      17 | `./format.h:571` |
| 39.3% | 11.0ms |      11 | `./format.h:568` |

##### `fmt::v12::detail::parse_format_string` (`./base.h:1646`)

|     % |   Time | Samples | Location        |
| ----: | -----: | ------: | --------------- |
| 44.0% | 11.0ms |      11 | `./base.h:1655` |
| 32.0% |  8.0ms |       8 | `./base.h:1651` |
| 12.0% |  3.0ms |       3 | `./base.h:1654` |
|  8.0% |  2.0ms |       2 | `./base.h:1650` |
|  4.0% |  1.0ms |       1 | `./base.h:1652` |

##### `fmt::v12::detail::format_float` (`./format.h:3134`)

|     % |  Time | Samples | Location          |
| ----: | ----: | ------: | ----------------- |
| 16.7% | 3.0ms |       3 | `./format.h:3152` |
| 16.7% | 3.0ms |       3 | `./format.h:3199` |
| 16.7% | 3.0ms |       3 | `./format.h:3205` |
|  5.6% | 1.0ms |       1 | `./format.h:3217` |
|  5.6% | 1.0ms |       1 | `./format.h:3208` |

##### `fmt::v12::detail::parse_replacement_field` (`./base.h:1599`)

|     % |  Time | Samples | Location        |
| ----: | ----: | ------: | --------------- |
| 46.7% | 7.0ms |       7 | `./base.h:1609` |
| 33.3% | 5.0ms |       5 | `./base.h:1643` |
| 20.0% | 3.0ms |       3 | `./base.h:1640` |

##### `fmt::v12::detail::buffer::push_back` (`./base.h:1832`)

|     % |   Time | Samples | Location        |
| ----: | -----: | ------: | --------------- |
| 73.3% | 11.0ms |      11 | `./base.h:1834` |
| 20.0% |  3.0ms |       3 | `./base.h:1832` |
|  6.7% |  1.0ms |       1 | `./base.h:1835` |

##### `fmt::v12::detail::buffer::try_reserve` (`./base.h:1828`)

|      % |   Time | Samples | Location        |
| -----: | -----: | ------: | --------------- |
| 100.0% | 14.0ms |      14 | `./base.h:1829` |

##### `fmt::v12::detail::parse_dynamic_spec` (`./base.h:1400`)

|     % |  Time | Samples | Location        |
| ----: | ----: | ------: | --------------- |
| 41.7% | 5.0ms |       5 | `./base.h:1406` |
| 33.3% | 4.0ms |       4 | `./base.h:1400` |
| 25.0% | 3.0ms |       3 | `./base.h:1408` |

##### `fmt::v12::detail::for_each_codepoint()::{lambda(char const*, char const*)#1}::operator()` (`./format.h`)

|     % |   Time | Samples | Location         |
| ----: | -----: | ------: | ---------------- |
| 90.9% | 10.0ms |      10 | `./format.h:637` |
|  9.1% |  1.0ms |       1 | `./format.h:639` |

##### `fmt::v12::detail::for_each_codepoint` (`./format.h:632`)

|     % |  Time | Samples | Location         |
| ----: | ----: | ------: | ---------------- |
| 54.5% | 6.0ms |       6 | `./format.h:645` |
| 18.2% | 2.0ms |       2 | `./format.h:655` |
| 18.2% | 2.0ms |       2 | `./format.h:633` |
|  9.1% | 1.0ms |       1 | `./format.h:663` |

##### `fmt::v12::detail::do_format_decimal` (`./format.h:1207`)

|     % |  Time | Samples | Location          |
| ----: | ----: | ------: | ----------------- |
| 63.6% | 7.0ms |       7 | `./format.h:1219` |
| 36.4% | 4.0ms |       4 | `./format.h:1223` |

##### `fmt::v12::detail::write()::{lambda(unsigned int, fmt::v12::basic_string_view)#1}::operator()` (`./format.h`)

|     % |  Time | Samples | Location          |
| ----: | ----: | ------: | ----------------- |
| 45.5% | 5.0ms |       5 | `./format.h:2199` |
| 27.3% | 3.0ms |       3 | `./format.h:2172` |
| 18.2% | 2.0ms |       2 | `./format.h:2173` |
|  9.1% | 1.0ms |       1 | `./format.h:2197` |

##### `fmt::v12::detail::parse_nonnegative_int` (`./base.h:1312`)

|     % |  Time | Samples | Location        |
| ----: | ----: | ------: | --------------- |
| 80.0% | 8.0ms |       8 | `./base.h:1321` |
| 20.0% | 2.0ms |       2 | `./base.h:1319` |

##### `fmt::v12::detail::write_int` (`./format.h:2050`)

|     % |  Time | Samples | Location          |
| ----: | ----: | ------: | ----------------- |
| 33.3% | 3.0ms |       3 | `./format.h:2096` |
| 22.2% | 2.0ms |       2 | `./format.h:2050` |
| 22.2% | 2.0ms |       2 | `./format.h:2111` |
| 11.1% | 1.0ms |       1 | `./format.h:2062` |
| 11.1% | 1.0ms |       1 | `./format.h:2104` |

##### `fmt::v12::detail::write_padded` (`./format.h:1675`)

|     % |  Time | Samples | Location          |
| ----: | ----: | ------: | ----------------- |
| 37.5% | 3.0ms |       3 | `./format.h:1688` |
| 37.5% | 3.0ms |       3 | `./format.h:1685` |
| 25.0% | 2.0ms |       2 | `./format.h:1692` |

##### `fmt::v12::detail::parse_format_specs()::{unnamed type#1}::operator()` (`./base.h:1476`)

|      % |  Time | Samples | Location        |
| -----: | ----: | ------: | --------------- |
| 100.0% | 8.0ms |       8 | `./base.h:1477` |

##### `fmt::v12::detail::write_fixed` (`./format.h:2487`)

|     % |  Time | Samples | Location          |
| ----: | ----: | ------: | ----------------- |
| 37.5% | 3.0ms |       3 | `./format.h:2487` |
| 37.5% | 3.0ms |       3 | `./format.h:2549` |
| 12.5% | 1.0ms |       1 | `./format.h:2522` |
| 12.5% | 1.0ms |       1 | `./format.h:2539` |

##### `fmt::v12::detail::dragonbox::cache_accessor::get_cached_power` (`./format-inl.h:376`)

|     % |  Time | Samples | Location              |
| ----: | ----: | ------: | --------------------- |
| 62.5% | 5.0ms |       5 | `./format-inl.h:1086` |
| 25.0% | 2.0ms |       2 | `./format-inl.h:376`  |
| 12.5% | 1.0ms |       1 | `./format-inl.h:1066` |

##### `std::char_traits::assign` (`/usr/include/c++/12/bits/char_traits.h:347`)

|      % |  Time | Samples | Location                                     |
| -----: | ----: | ------: | -------------------------------------------- |
| 100.0% | 3.0ms |       3 | `/usr/include/c++/12/bits/char_traits.h:354` |

##### `std::char_traits::copy` (`/usr/include/c++/12/bits/char_traits.h:423`)

|     % |  Time | Samples | Location                                     |
| ----: | ----: | ------: | -------------------------------------------- |
| 50.0% | 1.0ms |       1 | `/usr/include/c++/12/bits/char_traits.h:431` |
| 50.0% | 1.0ms |       1 | `/usr/include/c++/12/bits/char_traits.h:425` |

##### `std::__cxx11::basic_string::_Alloc_hider::_Alloc_hider` (`/usr/include/c++/12/bits/basic_string.h:199`)

|      % |  Time | Samples | Location                                      |
| -----: | ----: | ------: | --------------------------------------------- |
| 100.0% | 1.0ms |       1 | `/usr/include/c++/12/bits/basic_string.h:200` |

##### `std::__cxx11::basic_string::_M_destroy` (`/usr/include/c++/12/bits/basic_string.h:291`)

|      % |  Time | Samples | Location                                      |
| -----: | ----: | ------: | --------------------------------------------- |
| 100.0% | 1.0ms |       1 | `/usr/include/c++/12/bits/basic_string.h:292` |

##### `std::__cxx11::basic_string::~basic_string` (`/usr/include/c++/12/bits/basic_string.h:794`)

|      % |  Time | Samples | Location                                      |
| -----: | ----: | ------: | --------------------------------------------- |
| 100.0% | 1.0ms |       1 | `/usr/include/c++/12/bits/basic_string.h:795` |

#### Callers

Callers with the largest contribution to each function's self time. Inlining can make caller attribution imprecise.

##### `(anonymous)` (`<unknown>`)

|     % |   Time | Samples | Caller                                                   | Location              |
| ----: | -----: | ------: | -------------------------------------------------------- | --------------------- |
| 37.1% | 23.0ms |      23 | `fmt::v12::vformat[abi:cxx11]`                           | `./format-inl.h:1446` |
| 22.6% | 14.0ms |      14 | `fmt::v12::detail::format_handler::on_format_specs`      | `./format.h:3772`     |
| 21.0% | 13.0ms |      13 | `fmt::v12::detail::format_handler::on_replacement_field` | `./format.h:3768`     |
|  9.7% |  6.0ms |       6 | `cfree`                                                  | `<unknown>`           |
|  9.7% |  6.0ms |       6 | `(anonymous)`                                            | `<unknown>`           |

##### `fmt::v12::detail::buffer::append` (`./base.h:1845`)

|      % |   Time | Samples | Caller                   | Location        |
| -----: | -----: | ------: | ------------------------ | --------------- |
| 100.0% | 49.0ms |      49 | `fmt::v12::detail::copy` | `./base.h:2068` |

##### `fmt::v12::detail::parse_format_specs` (`./base.h:1461`)

|      % |   Time | Samples | Caller                                              | Location          |
| -----: | -----: | ------: | --------------------------------------------------- | ----------------- |
| 100.0% | 41.0ms |      41 | `fmt::v12::detail::format_handler::on_format_specs` | `./format.h:3772` |

##### `fmt::v12::detail::utf8_decode` (`./format.h:590`)

|      % |   Time | Samples | Caller                                                                                     | Location     |
| -----: | -----: | ------: | ------------------------------------------------------------------------------------------ | ------------ |
| 100.0% | 28.0ms |      28 | `fmt::v12::detail::for_each_codepoint()::{lambda(char const*, char const*)#1}::operator()` | `./format.h` |

##### `fmt::v12::detail::copy_noinline` (`./format.h:568`)

|     % |   Time | Samples | Caller                                                   | Location          |
| ----: | -----: | ------: | -------------------------------------------------------- | ----------------- |
| 71.4% | 20.0ms |      20 | `fmt::v12::detail::format_handler::on_text`              | `./format.h:3752` |
| 21.4% |  6.0ms |       6 | `fmt::v12::detail::format_handler::on_replacement_field` | `./format.h:3768` |
|  7.1% |  2.0ms |       2 | `fmt::v12::detail::write_significand`                    | `./format.h:2428` |

##### `fmt::v12::detail::parse_format_string` (`./base.h:1646`)

|      % |   Time | Samples | Caller                         | Location              |
| -----: | -----: | ------: | ------------------------------ | --------------------- |
| 100.0% | 25.0ms |      25 | `fmt::v12::detail::vformat_to` | `./format-inl.h:1456` |

##### `fmt::v12::detail::format_float` (`./format.h:3134`)

|      % |   Time | Samples | Caller                    | Location          |
| -----: | -----: | ------: | ------------------------- | ----------------- |
| 100.0% | 18.0ms |      18 | `fmt::v12::detail::write` | `./format.h:3434` |

##### `std::__cxx11::basic_string::_M_dispose` (`<unknown>`)

|      % |   Time | Samples | Caller                          | Location          |
| -----: | -----: | ------: | ------------------------------- | ----------------- |
| 100.0% | 16.0ms |      16 | `fmt::v12::detail::write_float` | `./format.h:2592` |

##### `fmt::v12::detail::parse_replacement_field` (`./base.h:1599`)

|      % |   Time | Samples | Caller                                  | Location        |
| -----: | -----: | ------: | --------------------------------------- | --------------- |
| 100.0% | 15.0ms |      15 | `fmt::v12::detail::parse_format_string` | `./base.h:1646` |

##### `fmt::v12::detail::buffer::push_back` (`./base.h:1832`)

|      % |   Time | Samples | Caller                                | Location        |
| -----: | -----: | ------: | ------------------------------------- | --------------- |
| 100.0% | 15.0ms |      15 | `fmt::v12::basic_appender::operator=` | `./base.h:2478` |

##### `fmt::v12::detail::buffer::try_reserve` (`./base.h:1828`)

|     % |  Time | Samples | Caller                                | Location         |
| ----: | ----: | ------: | ------------------------------------- | ---------------- |
| 64.3% | 9.0ms |       9 | `fmt::v12::detail::buffer::append`    | `./base.h:1845`  |
| 28.6% | 4.0ms |       4 | `fmt::v12::detail::buffer::push_back` | `./base.h:1832`  |
|  7.1% | 1.0ms |       1 | `fmt::v12::detail::reserve`           | `./format.h:501` |

##### `fmt::v12::detail::parse_dynamic_spec` (`./base.h:1400`)

|     % |  Time | Samples | Caller                                              | Location          |
| ----: | ----: | ------: | --------------------------------------------------- | ----------------- |
| 41.7% | 5.0ms |       5 | `fmt::v12::detail::parse_width`                     | `./base.h:1433`   |
| 33.3% | 4.0ms |       4 | `fmt::v12::detail::format_handler::on_format_specs` | `./format.h:3772` |
| 25.0% | 3.0ms |       3 | `fmt::v12::detail::parse_precision`                 | `./base.h:1442`   |

##### `operator delete` (`<unknown>`)

|      % |   Time | Samples | Caller        | Location    |
| -----: | -----: | ------: | ------------- | ----------- |
| 100.0% | 12.0ms |      12 | `(anonymous)` | `<unknown>` |

##### `fmt::v12::detail::for_each_codepoint()::{lambda(char const*, char const*)#1}::operator()` (`./format.h`)

|      % |   Time | Samples | Caller                                 | Location         |
| -----: | -----: | ------: | -------------------------------------- | ---------------- |
| 100.0% | 11.0ms |      11 | `fmt::v12::detail::for_each_codepoint` | `./format.h:632` |

##### `fmt::v12::detail::for_each_codepoint` (`./format.h:632`)

|      % |   Time | Samples | Caller                    | Location          |
| -----: | -----: | ------: | ------------------------- | ----------------- |
| 100.0% | 11.0ms |      11 | `fmt::v12::detail::write` | `./format.h:2159` |

##### `fmt::v12::detail::do_format_decimal` (`./format.h:1207`)

|      % |   Time | Samples | Caller                        | Location          |
| -----: | -----: | ------: | ----------------------------- | ----------------- |
| 100.0% | 11.0ms |      11 | `fmt::v12::detail::write_int` | `./format.h:2050` |

##### `fmt::v12::detail::write()::{lambda(unsigned int, fmt::v12::basic_string_view)#1}::operator()` (`./format.h`)

|      % |   Time | Samples | Caller                                                                                     | Location     |
| -----: | -----: | ------: | ------------------------------------------------------------------------------------------ | ------------ |
| 100.0% | 11.0ms |      11 | `fmt::v12::detail::for_each_codepoint()::{lambda(char const*, char const*)#1}::operator()` | `./format.h` |

##### `fmt::v12::detail::parse_nonnegative_int` (`./base.h:1312`)

|      % |   Time | Samples | Caller                                 | Location        |
| -----: | -----: | ------: | -------------------------------------- | --------------- |
| 100.0% | 10.0ms |      10 | `fmt::v12::detail::parse_dynamic_spec` | `./base.h:1400` |

##### `std::__cxx11::basic_string::_M_create` (`<unknown>`)

|      % |   Time | Samples | Caller                         | Location              |
| -----: | -----: | ------: | ------------------------------ | --------------------- |
| 100.0% | 10.0ms |      10 | `fmt::v12::vformat[abi:cxx11]` | `./format-inl.h:1446` |

##### `fmt::v12::detail::write_int` (`./format.h:2050`)

|      % |  Time | Samples | Caller                                              | Location          |
| -----: | ----: | ------: | --------------------------------------------------- | ----------------- |
| 100.0% | 9.0ms |       9 | `fmt::v12::detail::format_handler::on_format_specs` | `./format.h:3772` |

##### `fmt::v12::detail::write_padded` (`./format.h:1675`)

|     % |  Time | Samples | Caller                           | Location          |
| ----: | ----: | ------: | -------------------------------- | ----------------- |
| 75.0% | 6.0ms |       6 | `fmt::v12::detail::write_padded` | `./format.h:1696` |
| 25.0% | 2.0ms |       2 | `fmt::v12::detail::write`        | `./format.h:2159` |

##### `fmt::v12::detail::parse_format_specs()::{unnamed type#1}::operator()` (`./base.h:1476`)

|      % |  Time | Samples | Caller                                 | Location        |
| -----: | ----: | ------: | -------------------------------------- | --------------- |
| 100.0% | 8.0ms |       8 | `fmt::v12::detail::parse_format_specs` | `./base.h:1461` |

##### `fmt::v12::detail::write_fixed` (`./format.h:2487`)

|     % |  Time | Samples | Caller                                              | Location          |
| ----: | ----: | ------: | --------------------------------------------------- | ----------------- |
| 75.0% | 6.0ms |       6 | `fmt::v12::detail::write_float`                     | `./format.h:2592` |
| 25.0% | 2.0ms |       2 | `fmt::v12::detail::format_handler::on_format_specs` | `./format.h:3772` |

##### `fmt::v12::detail::dragonbox::cache_accessor::get_cached_power` (`./format-inl.h:376`)

|     % |  Time | Samples | Caller                                          | Location              |
| ----: | ----: | ------: | ----------------------------------------------- | --------------------- |
| 75.0% | 6.0ms |       6 | `fmt::v12::detail::dragonbox::get_cached_power` | `./format-inl.h:1146` |
| 25.0% | 2.0ms |       2 | `fmt::v12::detail::write`                       | `./format.h:3434`     |

##### `_init` (`<unknown>`)

|     % |  Time | Samples | Caller                                                   | Location              |
| ----: | ----: | ------: | -------------------------------------------------------- | --------------------- |
| 33.3% | 2.0ms |       2 | `fmt::v12::detail::write_float`                          | `./format.h:2592`     |
| 16.7% | 1.0ms |       1 | `fmt::v12::vformat[abi:cxx11]`                           | `./format-inl.h:1446` |
| 16.7% | 1.0ms |       1 | `(anonymous)`                                            | `<unknown>`           |
| 16.7% | 1.0ms |       1 | `fmt::v12::detail::format_handler::on_replacement_field` | `./format.h:3768`     |
| 16.7% | 1.0ms |       1 | `fmt::v12::detail::format_handler::on_format_specs`      | `./format.h:3772`     |

##### `__libc_malloc` (`<unknown>`)

|      % |  Time | Samples | Caller         | Location    |
| -----: | ----: | ------: | -------------- | ----------- |
| 100.0% | 5.0ms |       5 | `operator new` | `<unknown>` |

##### `std::char_traits::assign` (`/usr/include/c++/12/bits/char_traits.h:347`)

|      % |  Time | Samples | Caller                                      | Location                                      |
| -----: | ----: | ------: | ------------------------------------------- | --------------------------------------------- |
| 100.0% | 3.0ms |       3 | `std::__cxx11::basic_string::_M_set_length` | `/usr/include/c++/12/bits/basic_string.h:265` |

##### `operator new` (`<unknown>`)

|      % |  Time | Samples | Caller                                     | Location                                        |
| -----: | ----: | ------: | ------------------------------------------ | ----------------------------------------------- |
| 100.0% | 2.0ms |       2 | `std::__cxx11::basic_string::_M_construct` | `/usr/include/c++/12/bits/basic_string.tcc:217` |

##### `std::char_traits::copy` (`/usr/include/c++/12/bits/char_traits.h:423`)

|      % |  Time | Samples | Caller                                | Location                                      |
| -----: | ----: | ------: | ------------------------------------- | --------------------------------------------- |
| 100.0% | 2.0ms |       2 | `std::__cxx11::basic_string::_S_copy` | `/usr/include/c++/12/bits/basic_string.h:418` |

##### `cfree` (`<unknown>`)

|      % |  Time | Samples | Caller                             | Location                                       |
| -----: | ----: | ------: | ---------------------------------- | ---------------------------------------------- |
| 100.0% | 1.0ms |       1 | `std::__new_allocator::deallocate` | `/usr/include/c++/12/bits/new_allocator.h:142` |

##### `std::__cxx11::basic_string::_Alloc_hider::_Alloc_hider` (`/usr/include/c++/12/bits/basic_string.h:199`)

|      % |  Time | Samples | Caller                                     | Location                                      |
| -----: | ----: | ------: | ------------------------------------------ | --------------------------------------------- |
| 100.0% | 1.0ms |       1 | `std::__cxx11::basic_string::basic_string` | `/usr/include/c++/12/bits/basic_string.h:612` |

##### `std::__cxx11::basic_string::_M_destroy` (`/usr/include/c++/12/bits/basic_string.h:291`)

|      % |  Time | Samples | Caller                                   | Location                                      |
| -----: | ----: | ------: | ---------------------------------------- | --------------------------------------------- |
| 100.0% | 1.0ms |       1 | `std::__cxx11::basic_string::_M_dispose` | `/usr/include/c++/12/bits/basic_string.h:283` |

##### `std::__cxx11::basic_string::~basic_string` (`/usr/include/c++/12/bits/basic_string.h:794`)

|      % |  Time | Samples | Caller                                              | Location          |
| -----: | ----: | ------: | --------------------------------------------------- | ----------------- |
| 100.0% | 1.0ms |       1 | `fmt::v12::detail::digit_grouping::~digit_grouping` | `./format.h:1856` |

### Total time

Functions with the most time spent within the function and its callees.

|      % |    Time | Samples | Function                                            | Location              |
| -----: | ------: | ------: | --------------------------------------------------- | --------------------- |
| 100.0% | 598.0ms |     598 | `(anonymous)`                                       | `<unknown>`           |
| 100.0% | 598.0ms |     598 | `__libc_start_main`                                 | `<unknown>`           |
| 100.0% | 598.0ms |     598 | `_start`                                            | `<unknown>`           |
|  96.8% | 579.0ms |     579 | `main`                                              | `/out/profile.cpp:8`  |
|  95.3% | 570.0ms |     570 | `fmt::v12::format`                                  | `./format.h:4335`     |
|  94.8% | 567.0ms |     567 | `fmt::v12::vformat[abi:cxx11]`                      | `./format-inl.h:1446` |
|  86.0% | 514.0ms |     514 | `fmt::v12::detail::parse_format_string`             | `./base.h:1646`       |
|  86.0% | 514.0ms |     514 | `fmt::v12::detail::vformat_to`                      | `./format-inl.h:1456` |
|  74.2% | 444.0ms |     444 | `fmt::v12::detail::parse_replacement_field`         | `./base.h:1599`       |
|  63.9% | 382.0ms |     382 | `fmt::v12::detail::format_handler::on_format_specs` | `./format.h:3772`     |
|  18.9% | 113.0ms |     113 | `fmt::v12::detail::write`                           | `./format.h:3434`     |
|  15.1% |  90.0ms |      90 | `fmt::v12::detail::write`                           | `./format.h:2159`     |
|  13.2% |  79.0ms |      79 | `fmt::v12::detail::write_padded`                    | `./format.h:1675`     |
|  12.2% |  73.0ms |      73 | `fmt::v12::detail::parse_format_specs`              | `./base.h:1461`       |
|  11.9% |  71.0ms |      71 | `fmt::v12::detail::copy_noinline`                   | `./format.h:568`      |
|  11.0% |  66.0ms |      66 | `fmt::v12::detail::write_float`                     | `./format.h:2592`     |
|  10.9% |  65.0ms |      65 | `fmt::v12::detail::for_each_codepoint`              | `./format.h:632`      |
|  10.4% |  62.0ms |      62 | `fmt::v12::detail::copy`                            | `./base.h:2068`       |
|  10.0% |  60.0ms |      60 | `fmt::v12::detail::buffer::append`                  | `./base.h:1845`       |
|   9.9% |  59.0ms |      59 | `fmt::v12::detail::write_padded`                    | `./format.h:1696`     |

#### Categories

Categories accounting for at least 1.0% of self time.

##### Ours

|     % |    Time | Samples | Function                                                                                   | Location              |
| ----: | ------: | ------: | ------------------------------------------------------------------------------------------ | --------------------- |
| 96.8% | 579.0ms |     579 | `main`                                                                                     | `/out/profile.cpp:8`  |
| 95.3% | 570.0ms |     570 | `fmt::v12::format`                                                                         | `./format.h:4335`     |
| 94.8% | 567.0ms |     567 | `fmt::v12::vformat[abi:cxx11]`                                                             | `./format-inl.h:1446` |
| 86.0% | 514.0ms |     514 | `fmt::v12::detail::parse_format_string`                                                    | `./base.h:1646`       |
| 86.0% | 514.0ms |     514 | `fmt::v12::detail::vformat_to`                                                             | `./format-inl.h:1456` |
| 74.2% | 444.0ms |     444 | `fmt::v12::detail::parse_replacement_field`                                                | `./base.h:1599`       |
| 63.9% | 382.0ms |     382 | `fmt::v12::detail::format_handler::on_format_specs`                                        | `./format.h:3772`     |
| 18.9% | 113.0ms |     113 | `fmt::v12::detail::write`                                                                  | `./format.h:3434`     |
| 15.1% |  90.0ms |      90 | `fmt::v12::detail::write`                                                                  | `./format.h:2159`     |
| 13.2% |  79.0ms |      79 | `fmt::v12::detail::write_padded`                                                           | `./format.h:1675`     |
| 12.2% |  73.0ms |      73 | `fmt::v12::detail::parse_format_specs`                                                     | `./base.h:1461`       |
| 11.9% |  71.0ms |      71 | `fmt::v12::detail::copy_noinline`                                                          | `./format.h:568`      |
| 11.0% |  66.0ms |      66 | `fmt::v12::detail::write_float`                                                            | `./format.h:2592`     |
| 10.9% |  65.0ms |      65 | `fmt::v12::detail::for_each_codepoint`                                                     | `./format.h:632`      |
| 10.4% |  62.0ms |      62 | `fmt::v12::detail::copy`                                                                   | `./base.h:2068`       |
| 10.0% |  60.0ms |      60 | `fmt::v12::detail::buffer::append`                                                         | `./base.h:1845`       |
|  9.9% |  59.0ms |      59 | `fmt::v12::detail::write_padded`                                                           | `./format.h:1696`     |
|  9.2% |  55.0ms |      55 | `fmt::v12::detail::write_int`                                                              | `./format.h:2050`     |
|  8.9% |  53.0ms |      53 | `fmt::v12::detail::for_each_codepoint()::{lambda(char const*, char const*)#1}::operator()` | `./format.h`          |
|  7.5% |  45.0ms |      45 | `fmt::v12::detail::write_fixed`                                                            | `./format.h:2487`     |

##### Unknown

|      % |    Time | Samples | Function      | Location    |
| -----: | ------: | ------: | ------------- | ----------- |
| 100.0% | 598.0ms |     598 | `(anonymous)` | `<unknown>` |

##### Native

|      % |    Time | Samples | Function                                 | Location    |
| -----: | ------: | ------: | ---------------------------------------- | ----------- |
| 100.0% | 598.0ms |     598 | `__libc_start_main`                      | `<unknown>` |
| 100.0% | 598.0ms |     598 | `_start`                                 | `<unknown>` |
|   2.7% |  16.0ms |      16 | `std::__cxx11::basic_string::_M_dispose` | `<unknown>` |
|   2.0% |  12.0ms |      12 | `operator delete`                        | `<unknown>` |
|   1.7% |  10.0ms |      10 | `std::__cxx11::basic_string::_M_create`  | `<unknown>` |
|   1.2% |   7.0ms |       7 | `operator new`                           | `<unknown>` |
|   1.2% |   7.0ms |       7 | `cfree`                                  | `<unknown>` |
|   1.0% |   6.0ms |       6 | `_init`                                  | `<unknown>` |
|   0.8% |   5.0ms |       5 | `__libc_malloc`                          | `<unknown>` |

##### Standard library

|    % |   Time | Samples | Function                                                 | Location                                        |
| ---: | -----: | ------: | -------------------------------------------------------- | ----------------------------------------------- |
| 1.8% | 11.0ms |      11 | `std::__cxx11::basic_string::basic_string`               | `/usr/include/c++/12/bits/basic_string.h:612`   |
| 1.7% | 10.0ms |      10 | `std::__cxx11::basic_string::_M_construct`               | `/usr/include/c++/12/bits/basic_string.tcc:217` |
| 1.5% |  9.0ms |       9 | `std::__cxx11::basic_string::~basic_string`              | `/usr/include/c++/12/bits/basic_string.h:794`   |
| 1.3% |  8.0ms |       8 | `std::__cxx11::basic_string::_M_destroy`                 | `/usr/include/c++/12/bits/basic_string.h:291`   |
| 1.3% |  8.0ms |       8 | `std::__cxx11::basic_string::_M_dispose`                 | `/usr/include/c++/12/bits/basic_string.h:283`   |
| 1.2% |  7.0ms |       7 | `std::__new_allocator::deallocate`                       | `/usr/include/c++/12/bits/new_allocator.h:142`  |
| 1.2% |  7.0ms |       7 | `std::allocator_traits::deallocate`                      | `/usr/include/c++/12/bits/alloc_traits.h:495`   |
| 0.5% |  3.0ms |       3 | `std::char_traits::assign`                               | `/usr/include/c++/12/bits/char_traits.h:347`    |
| 0.5% |  3.0ms |       3 | `std::__cxx11::basic_string::_M_set_length`              | `/usr/include/c++/12/bits/basic_string.h:265`   |
| 0.3% |  2.0ms |       2 | `std::char_traits::copy`                                 | `/usr/include/c++/12/bits/char_traits.h:423`    |
| 0.3% |  2.0ms |       2 | `std::__cxx11::basic_string::_S_copy`                    | `/usr/include/c++/12/bits/basic_string.h:418`   |
| 0.3% |  2.0ms |       2 | `std::__cxx11::basic_string::_S_copy_chars`              | `/usr/include/c++/12/bits/basic_string.h:475`   |
| 0.3% |  2.0ms |       2 | `std::__cxx11::basic_string::basic_string`               | `/usr/include/c++/12/bits/basic_string.h:515`   |
| 0.2% |  1.0ms |       1 | `std::__cxx11::basic_string::_Alloc_hider::_Alloc_hider` | `/usr/include/c++/12/bits/basic_string.h:199`   |

#### Callers

Callers with the largest contribution to each function's total time. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `(anonymous)` (`<unknown>`)

|      % |    Time | Samples | Caller                                                   | Location              |
| -----: | ------: | ------: | -------------------------------------------------------- | --------------------- |
| 100.0% | 598.0ms |     598 | `__libc_start_main`                                      | `<unknown>`           |
|   3.8% |  23.0ms |      23 | `fmt::v12::vformat[abi:cxx11]`                           | `./format-inl.h:1446` |
|   2.3% |  14.0ms |      14 | `fmt::v12::detail::format_handler::on_format_specs`      | `./format.h:3772`     |
|   2.2% |  13.0ms |      13 | `fmt::v12::detail::format_handler::on_replacement_field` | `./format.h:3768`     |
|   1.0% |   6.0ms |       6 | `cfree`                                                  | `<unknown>`           |

##### `__libc_start_main` (`<unknown>`)

|      % |    Time | Samples | Caller   | Location    |
| -----: | ------: | ------: | -------- | ----------- |
| 100.0% | 598.0ms |     598 | `_start` | `<unknown>` |

##### `main` (`/out/profile.cpp:8`)

|      % |    Time | Samples | Caller        | Location    |
| -----: | ------: | ------: | ------------- | ----------- |
| 100.0% | 579.0ms |     579 | `(anonymous)` | `<unknown>` |

##### `fmt::v12::format` (`./format.h:4335`)

|      % |    Time | Samples | Caller | Location             |
| -----: | ------: | ------: | ------ | -------------------- |
| 100.0% | 570.0ms |     570 | `main` | `/out/profile.cpp:8` |

##### `fmt::v12::vformat[abi:cxx11]` (`./format-inl.h:1446`)

|      % |    Time | Samples | Caller             | Location          |
| -----: | ------: | ------: | ------------------ | ----------------- |
| 100.0% | 567.0ms |     567 | `fmt::v12::format` | `./format.h:4335` |

##### `fmt::v12::detail::parse_format_string` (`./base.h:1646`)

|      % |    Time | Samples | Caller                         | Location              |
| -----: | ------: | ------: | ------------------------------ | --------------------- |
| 100.0% | 514.0ms |     514 | `fmt::v12::detail::vformat_to` | `./format-inl.h:1456` |

##### `fmt::v12::detail::vformat_to` (`./format-inl.h:1456`)

|      % |    Time | Samples | Caller                         | Location              |
| -----: | ------: | ------: | ------------------------------ | --------------------- |
| 100.0% | 514.0ms |     514 | `fmt::v12::vformat[abi:cxx11]` | `./format-inl.h:1446` |

##### `fmt::v12::detail::parse_replacement_field` (`./base.h:1599`)

|      % |    Time | Samples | Caller                                  | Location        |
| -----: | ------: | ------: | --------------------------------------- | --------------- |
| 100.0% | 444.0ms |     444 | `fmt::v12::detail::parse_format_string` | `./base.h:1646` |

##### `fmt::v12::detail::format_handler::on_format_specs` (`./format.h:3772`)

|      % |    Time | Samples | Caller                                      | Location        |
| -----: | ------: | ------: | ------------------------------------------- | --------------- |
| 100.0% | 382.0ms |     382 | `fmt::v12::detail::parse_replacement_field` | `./base.h:1599` |

##### `fmt::v12::detail::write` (`./format.h:3434`)

|     % |    Time | Samples | Caller                                              | Location          |
| ----: | ------: | ------: | --------------------------------------------------- | ----------------- |
| 98.2% | 111.0ms |     111 | `fmt::v12::detail::format_handler::on_format_specs` | `./format.h:3772` |
|  1.8% |   2.0ms |       2 | `fmt::v12::detail::parse_format_string`             | `./base.h:1646`   |

##### `fmt::v12::detail::write` (`./format.h:2159`)

|      % |   Time | Samples | Caller                                              | Location          |
| -----: | -----: | ------: | --------------------------------------------------- | ----------------- |
| 100.0% | 90.0ms |      90 | `fmt::v12::detail::format_handler::on_format_specs` | `./format.h:3772` |

##### `fmt::v12::detail::write_padded` (`./format.h:1675`)

|     % |   Time | Samples | Caller                           | Location          |
| ----: | -----: | ------: | -------------------------------- | ----------------- |
| 74.7% | 59.0ms |      59 | `fmt::v12::detail::write_padded` | `./format.h:1696` |
| 25.3% | 20.0ms |      20 | `fmt::v12::detail::write`        | `./format.h:2159` |

##### `fmt::v12::detail::parse_format_specs` (`./base.h:1461`)

|      % |   Time | Samples | Caller                                              | Location          |
| -----: | -----: | ------: | --------------------------------------------------- | ----------------- |
| 100.0% | 73.0ms |      73 | `fmt::v12::detail::format_handler::on_format_specs` | `./format.h:3772` |

##### `fmt::v12::detail::copy_noinline` (`./format.h:568`)

|     % |   Time | Samples | Caller                                                   | Location          |
| ----: | -----: | ------: | -------------------------------------------------------- | ----------------- |
| 59.2% | 42.0ms |      42 | `fmt::v12::detail::format_handler::on_text`              | `./format.h:3752` |
| 28.2% | 20.0ms |      20 | `fmt::v12::detail::format_handler::on_replacement_field` | `./format.h:3768` |
| 12.7% |  9.0ms |       9 | `fmt::v12::detail::write_significand`                    | `./format.h:2428` |

##### `fmt::v12::detail::write_float` (`./format.h:2592`)

|      % |   Time | Samples | Caller                    | Location          |
| -----: | -----: | ------: | ------------------------- | ----------------- |
| 100.0% | 66.0ms |      66 | `fmt::v12::detail::write` | `./format.h:3434` |

##### `fmt::v12::detail::for_each_codepoint` (`./format.h:632`)

|      % |   Time | Samples | Caller                    | Location          |
| -----: | -----: | ------: | ------------------------- | ----------------- |
| 100.0% | 65.0ms |      65 | `fmt::v12::detail::write` | `./format.h:2159` |

##### `fmt::v12::detail::copy` (`./base.h:2068`)

|     % |   Time | Samples | Caller                                                                            | Location          |
| ----: | -----: | ------: | --------------------------------------------------------------------------------- | ----------------- |
| 69.4% | 43.0ms |      43 | `fmt::v12::detail::copy_noinline`                                                 | `./format.h:568`  |
| 14.5% |  9.0ms |       9 | `fmt::v12::detail::write()::{lambda(fmt::v12::basic_appender)#2}::operator()`     | `./format.h`      |
| 14.5% |  9.0ms |       9 | `fmt::v12::detail::write_int()::{lambda(fmt::v12::basic_appender)#1}::operator()` | `./format.h`      |
|  1.6% |  1.0ms |       1 | `fmt::v12::detail::write_significand`                                             | `./format.h:2370` |

##### `fmt::v12::detail::buffer::append` (`./base.h:1845`)

|      % |   Time | Samples | Caller                   | Location        |
| -----: | -----: | ------: | ------------------------ | --------------- |
| 100.0% | 60.0ms |      60 | `fmt::v12::detail::copy` | `./base.h:2068` |

##### `fmt::v12::detail::write_padded` (`./format.h:1696`)

|     % |   Time | Samples | Caller                          | Location          |
| ----: | -----: | ------: | ------------------------------- | ----------------- |
| 55.9% | 33.0ms |      33 | `fmt::v12::detail::write_fixed` | `./format.h:2487` |
| 44.1% | 26.0ms |      26 | `fmt::v12::detail::write_int`   | `./format.h:2050` |

##### `fmt::v12::detail::write_int` (`./format.h:2050`)

|      % |   Time | Samples | Caller                                              | Location          |
| -----: | -----: | ------: | --------------------------------------------------- | ----------------- |
| 100.0% | 55.0ms |      55 | `fmt::v12::detail::format_handler::on_format_specs` | `./format.h:3772` |

##### `fmt::v12::detail::for_each_codepoint()::{lambda(char const*, char const*)#1}::operator()` (`./format.h`)

|      % |   Time | Samples | Caller                                 | Location         |
| -----: | -----: | ------: | -------------------------------------- | ---------------- |
| 100.0% | 53.0ms |      53 | `fmt::v12::detail::for_each_codepoint` | `./format.h:632` |

##### `fmt::v12::detail::write_fixed` (`./format.h:2487`)

|     % |   Time | Samples | Caller                                              | Location          |
| ----: | -----: | ------: | --------------------------------------------------- | ----------------- |
| 95.6% | 43.0ms |      43 | `fmt::v12::detail::write_float`                     | `./format.h:2592` |
|  4.4% |  2.0ms |       2 | `fmt::v12::detail::format_handler::on_format_specs` | `./format.h:3772` |

##### `std::__cxx11::basic_string::_M_dispose` (`<unknown>`)

|      % |   Time | Samples | Caller                          | Location          |
| -----: | -----: | ------: | ------------------------------- | ----------------- |
| 100.0% | 16.0ms |      16 | `fmt::v12::detail::write_float` | `./format.h:2592` |

##### `operator delete` (`<unknown>`)

|      % |   Time | Samples | Caller        | Location    |
| -----: | -----: | ------: | ------------- | ----------- |
| 100.0% | 12.0ms |      12 | `(anonymous)` | `<unknown>` |

##### `std::__cxx11::basic_string::basic_string` (`/usr/include/c++/12/bits/basic_string.h:612`)

|      % |   Time | Samples | Caller                | Location         |
| -----: | -----: | ------: | --------------------- | ---------------- |
| 100.0% | 11.0ms |      11 | `fmt::v12::to_string` | `./format.h:910` |

##### `std::__cxx11::basic_string::_M_create` (`<unknown>`)

|      % |   Time | Samples | Caller                         | Location              |
| -----: | -----: | ------: | ------------------------------ | --------------------- |
| 100.0% | 10.0ms |      10 | `fmt::v12::vformat[abi:cxx11]` | `./format-inl.h:1446` |

##### `std::__cxx11::basic_string::_M_construct` (`/usr/include/c++/12/bits/basic_string.tcc:217`)

|      % |   Time | Samples | Caller                                     | Location                                      |
| -----: | -----: | ------: | ------------------------------------------ | --------------------------------------------- |
| 100.0% | 10.0ms |      10 | `std::__cxx11::basic_string::basic_string` | `/usr/include/c++/12/bits/basic_string.h:612` |

##### `std::__cxx11::basic_string::~basic_string` (`/usr/include/c++/12/bits/basic_string.h:794`)

|     % |  Time | Samples | Caller                                              | Location             |
| ----: | ----: | ------: | --------------------------------------------------- | -------------------- |
| 88.9% | 8.0ms |       8 | `main`                                              | `/out/profile.cpp:8` |
| 11.1% | 1.0ms |       1 | `fmt::v12::detail::digit_grouping::~digit_grouping` | `./format.h:1856`    |

##### `std::__cxx11::basic_string::_M_destroy` (`/usr/include/c++/12/bits/basic_string.h:291`)

|      % |  Time | Samples | Caller                                   | Location                                      |
| -----: | ----: | ------: | ---------------------------------------- | --------------------------------------------- |
| 100.0% | 8.0ms |       8 | `std::__cxx11::basic_string::_M_dispose` | `/usr/include/c++/12/bits/basic_string.h:283` |

##### `std::__cxx11::basic_string::_M_dispose` (`/usr/include/c++/12/bits/basic_string.h:283`)

|      % |  Time | Samples | Caller                                      | Location                                      |
| -----: | ----: | ------: | ------------------------------------------- | --------------------------------------------- |
| 100.0% | 8.0ms |       8 | `std::__cxx11::basic_string::~basic_string` | `/usr/include/c++/12/bits/basic_string.h:794` |

##### `operator new` (`<unknown>`)

|      % |  Time | Samples | Caller                                     | Location                                        |
| -----: | ----: | ------: | ------------------------------------------ | ----------------------------------------------- |
| 100.0% | 7.0ms |       7 | `std::__cxx11::basic_string::_M_construct` | `/usr/include/c++/12/bits/basic_string.tcc:217` |

##### `cfree` (`<unknown>`)

|      % |  Time | Samples | Caller                             | Location                                       |
| -----: | ----: | ------: | ---------------------------------- | ---------------------------------------------- |
| 100.0% | 7.0ms |       7 | `std::__new_allocator::deallocate` | `/usr/include/c++/12/bits/new_allocator.h:142` |

##### `std::__new_allocator::deallocate` (`/usr/include/c++/12/bits/new_allocator.h:142`)

|      % |  Time | Samples | Caller                              | Location                                      |
| -----: | ----: | ------: | ----------------------------------- | --------------------------------------------- |
| 100.0% | 7.0ms |       7 | `std::allocator_traits::deallocate` | `/usr/include/c++/12/bits/alloc_traits.h:495` |

##### `std::allocator_traits::deallocate` (`/usr/include/c++/12/bits/alloc_traits.h:495`)

|      % |  Time | Samples | Caller                                   | Location                                      |
| -----: | ----: | ------: | ---------------------------------------- | --------------------------------------------- |
| 100.0% | 7.0ms |       7 | `std::__cxx11::basic_string::_M_destroy` | `/usr/include/c++/12/bits/basic_string.h:291` |

##### `_init` (`<unknown>`)

|     % |  Time | Samples | Caller                                                   | Location              |
| ----: | ----: | ------: | -------------------------------------------------------- | --------------------- |
| 33.3% | 2.0ms |       2 | `fmt::v12::detail::write_float`                          | `./format.h:2592`     |
| 16.7% | 1.0ms |       1 | `fmt::v12::vformat[abi:cxx11]`                           | `./format-inl.h:1446` |
| 16.7% | 1.0ms |       1 | `(anonymous)`                                            | `<unknown>`           |
| 16.7% | 1.0ms |       1 | `fmt::v12::detail::format_handler::on_replacement_field` | `./format.h:3768`     |
| 16.7% | 1.0ms |       1 | `fmt::v12::detail::format_handler::on_format_specs`      | `./format.h:3772`     |

##### `__libc_malloc` (`<unknown>`)

|      % |  Time | Samples | Caller         | Location    |
| -----: | ----: | ------: | -------------- | ----------- |
| 100.0% | 5.0ms |       5 | `operator new` | `<unknown>` |

##### `std::char_traits::assign` (`/usr/include/c++/12/bits/char_traits.h:347`)

|      % |  Time | Samples | Caller                                      | Location                                      |
| -----: | ----: | ------: | ------------------------------------------- | --------------------------------------------- |
| 100.0% | 3.0ms |       3 | `std::__cxx11::basic_string::_M_set_length` | `/usr/include/c++/12/bits/basic_string.h:265` |

##### `std::__cxx11::basic_string::_M_set_length` (`/usr/include/c++/12/bits/basic_string.h:265`)

|     % |  Time | Samples | Caller                                     | Location                                        |
| ----: | ----: | ------: | ------------------------------------------ | ----------------------------------------------- |
| 66.7% | 2.0ms |       2 | `std::__cxx11::basic_string::basic_string` | `/usr/include/c++/12/bits/basic_string.h:515`   |
| 33.3% | 1.0ms |       1 | `std::__cxx11::basic_string::_M_construct` | `/usr/include/c++/12/bits/basic_string.tcc:217` |

##### `std::char_traits::copy` (`/usr/include/c++/12/bits/char_traits.h:423`)

|      % |  Time | Samples | Caller                                | Location                                      |
| -----: | ----: | ------: | ------------------------------------- | --------------------------------------------- |
| 100.0% | 2.0ms |       2 | `std::__cxx11::basic_string::_S_copy` | `/usr/include/c++/12/bits/basic_string.h:418` |

##### `std::__cxx11::basic_string::_S_copy` (`/usr/include/c++/12/bits/basic_string.h:418`)

|      % |  Time | Samples | Caller                                      | Location                                      |
| -----: | ----: | ------: | ------------------------------------------- | --------------------------------------------- |
| 100.0% | 2.0ms |       2 | `std::__cxx11::basic_string::_S_copy`       | `/usr/include/c++/12/bits/basic_string.h:418` |
| 100.0% | 2.0ms |       2 | `std::__cxx11::basic_string::_S_copy_chars` | `/usr/include/c++/12/bits/basic_string.h:475` |

##### `std::__cxx11::basic_string::_S_copy_chars` (`/usr/include/c++/12/bits/basic_string.h:475`)

|      % |  Time | Samples | Caller                                     | Location                                        |
| -----: | ----: | ------: | ------------------------------------------ | ----------------------------------------------- |
| 100.0% | 2.0ms |       2 | `std::__cxx11::basic_string::_M_construct` | `/usr/include/c++/12/bits/basic_string.tcc:217` |

##### `std::__cxx11::basic_string::basic_string` (`/usr/include/c++/12/bits/basic_string.h:515`)

|      % |  Time | Samples | Caller                                             | Location          |
| -----: | ----: | ------: | -------------------------------------------------- | ----------------- |
| 100.0% | 2.0ms |       2 | `fmt::v12::detail::digit_grouping::digit_grouping` | `./format.h:1878` |

##### `std::__cxx11::basic_string::_Alloc_hider::_Alloc_hider` (`/usr/include/c++/12/bits/basic_string.h:199`)

|      % |  Time | Samples | Caller                                     | Location                                      |
| -----: | ----: | ------: | ------------------------------------------ | --------------------------------------------- |
| 100.0% | 1.0ms |       1 | `std::__cxx11::basic_string::basic_string` | `/usr/include/c++/12/bits/basic_string.h:612` |

#### Callees

Callees with the largest contribution to each function's total time. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `(anonymous)` (`<unknown>`)

|     % |    Time | Samples | Callee            | Location             |
| ----: | ------: | ------: | ----------------- | -------------------- |
| 96.8% | 579.0ms |     579 | `main`            | `/out/profile.cpp:8` |
|  2.0% |  12.0ms |      12 | `operator delete` | `<unknown>`          |
|  1.0% |   6.0ms |       6 | `(anonymous)`     | `<unknown>`          |
|  0.2% |   1.0ms |       1 | `_init`           | `<unknown>`          |

##### `__libc_start_main` (`<unknown>`)

|      % |    Time | Samples | Callee        | Location    |
| -----: | ------: | ------: | ------------- | ----------- |
| 100.0% | 598.0ms |     598 | `(anonymous)` | `<unknown>` |

##### `_start` (`<unknown>`)

|      % |    Time | Samples | Callee              | Location    |
| -----: | ------: | ------: | ------------------- | ----------- |
| 100.0% | 598.0ms |     598 | `__libc_start_main` | `<unknown>` |

##### `main` (`/out/profile.cpp:8`)

|     % |    Time | Samples | Callee                                      | Location                                      |
| ----: | ------: | ------: | ------------------------------------------- | --------------------------------------------- |
| 98.4% | 570.0ms |     570 | `fmt::v12::format`                          | `./format.h:4335`                             |
|  1.4% |   8.0ms |       8 | `std::__cxx11::basic_string::~basic_string` | `/usr/include/c++/12/bits/basic_string.h:794` |

##### `fmt::v12::format` (`./format.h:4335`)

|     % |    Time | Samples | Callee                           | Location              |
| ----: | ------: | ------: | -------------------------------- | --------------------- |
| 99.5% | 567.0ms |     567 | `fmt::v12::vformat[abi:cxx11]`   | `./format-inl.h:1446` |
|  0.4% |   2.0ms |       2 | `fmt::v12::detail::value::value` | `./base.h:2220`       |
|  0.2% |   1.0ms |       1 | `fmt::v12::detail::value::value` | `./base.h:2233`       |

##### `fmt::v12::vformat[abi:cxx11]` (`./format-inl.h:1446`)

|     % |    Time | Samples | Callee                                               | Location              |
| ----: | ------: | ------: | ---------------------------------------------------- | --------------------- |
| 90.7% | 514.0ms |     514 | `fmt::v12::detail::vformat_to`                       | `./format-inl.h:1456` |
|  4.1% |  23.0ms |      23 | `(anonymous)`                                        | `<unknown>`           |
|  2.3% |  13.0ms |      13 | `fmt::v12::to_string`                                | `./format.h:910`      |
|  1.8% |  10.0ms |      10 | `std::__cxx11::basic_string::_M_create`              | `<unknown>`           |
|  0.7% |   4.0ms |       4 | `fmt::v12::basic_memory_buffer::basic_memory_buffer` | `./format.h:826`      |

##### `fmt::v12::detail::parse_format_string` (`./base.h:1646`)

|     % |    Time | Samples | Callee                                      | Location          |
| ----: | ------: | ------: | ------------------------------------------- | ----------------- |
| 86.4% | 444.0ms |     444 | `fmt::v12::detail::parse_replacement_field` | `./base.h:1599`   |
|  8.4% |  43.0ms |      43 | `fmt::v12::detail::format_handler::on_text` | `./format.h:3752` |
|  0.4% |   2.0ms |       2 | `fmt::v12::detail::write`                   | `./format.h:3434` |

##### `fmt::v12::detail::vformat_to` (`./format-inl.h:1456`)

|      % |    Time | Samples | Callee                                  | Location        |
| -----: | ------: | ------: | --------------------------------------- | --------------- |
| 100.0% | 514.0ms |     514 | `fmt::v12::detail::parse_format_string` | `./base.h:1646` |

##### `fmt::v12::detail::parse_replacement_field` (`./base.h:1599`)

|     % |    Time | Samples | Callee                                                   | Location          |
| ----: | ------: | ------: | -------------------------------------------------------- | ----------------- |
| 86.0% | 382.0ms |     382 | `fmt::v12::detail::format_handler::on_format_specs`      | `./format.h:3772` |
|  9.2% |  41.0ms |      41 | `fmt::v12::detail::format_handler::on_replacement_field` | `./format.h:3768` |
|  1.4% |   6.0ms |       6 | `fmt::v12::detail::format_handler::on_arg_id`            | `./format.h:3756` |

##### `fmt::v12::detail::format_handler::on_format_specs` (`./format.h:3772`)

|     % |    Time | Samples | Callee                                 | Location          |
| ----: | ------: | ------: | -------------------------------------- | ----------------- |
| 29.1% | 111.0ms |     111 | `fmt::v12::detail::write`              | `./format.h:3434` |
| 23.6% |  90.0ms |      90 | `fmt::v12::detail::write`              | `./format.h:2159` |
| 19.1% |  73.0ms |      73 | `fmt::v12::detail::parse_format_specs` | `./base.h:1461`   |
| 14.4% |  55.0ms |      55 | `fmt::v12::detail::write_int`          | `./format.h:2050` |
|  5.2% |  20.0ms |      20 | `fmt::v12::basic_format_arg::visit`    | `./base.h:2529`   |

##### `fmt::v12::detail::write` (`./format.h:3434`)

|     % |   Time | Samples | Callee                                                          | Location             |
| ----: | -----: | ------: | --------------------------------------------------------------- | -------------------- |
| 58.4% | 66.0ms |      66 | `fmt::v12::detail::write_float`                                 | `./format.h:2592`    |
| 30.1% | 34.0ms |      34 | `fmt::v12::detail::format_float`                                | `./format.h:3134`    |
|  1.8% |  2.0ms |       2 | `fmt::v12::basic_memory_buffer::basic_memory_buffer`            | `./format.h:826`     |
|  1.8% |  2.0ms |       2 | `fmt::v12::detail::dragonbox::cache_accessor::get_cached_power` | `./format-inl.h:376` |
|  0.9% |  1.0ms |       1 | `fmt::v12::basic_specs::align`                                  | `./base.h:744`       |

##### `fmt::v12::detail::write` (`./format.h:2159`)

|     % |   Time | Samples | Callee                                 | Location          |
| ----: | -----: | ------: | -------------------------------------- | ----------------- |
| 72.2% | 65.0ms |      65 | `fmt::v12::detail::for_each_codepoint` | `./format.h:632`  |
| 22.2% | 20.0ms |      20 | `fmt::v12::detail::write_padded`       | `./format.h:1675` |

##### `fmt::v12::detail::write_padded` (`./format.h:1675`)

|     % |   Time | Samples | Callee                                                                              | Location          |
| ----: | -----: | ------: | ----------------------------------------------------------------------------------- | ----------------- |
| 24.1% | 19.0ms |      19 | `fmt::v12::detail::write_fixed()::{lambda(fmt::v12::basic_appender)#2}::operator()` | `./format.h`      |
| 19.0% | 15.0ms |      15 | `fmt::v12::detail::fill`                                                            | `./format.h:1660` |
| 17.7% | 14.0ms |      14 | `fmt::v12::detail::write_int()::{lambda(fmt::v12::basic_appender)#1}::operator()`   | `./format.h`      |
| 11.4% |  9.0ms |       9 | `fmt::v12::detail::write()::{lambda(fmt::v12::basic_appender)#2}::operator()`       | `./format.h`      |
|  8.9% |  7.0ms |       7 | `fmt::v12::detail::reserve`                                                         | `./format.h:501`  |

##### `fmt::v12::detail::parse_format_specs` (`./base.h:1461`)

|     % |   Time | Samples | Callee                                                                 | Location        |
| ----: | -----: | ------: | ---------------------------------------------------------------------- | --------------- |
| 16.4% | 12.0ms |      12 | `fmt::v12::detail::parse_width`                                        | `./base.h:1433` |
| 11.0% |  8.0ms |       8 | `fmt::v12::detail::parse_format_specs()::{unnamed type#1}::operator()` | `./base.h:1476` |
|  9.6% |  7.0ms |       7 | `fmt::v12::detail::parse_precision`                                    | `./base.h:1442` |
|  4.1% |  3.0ms |       3 | `fmt::v12::detail::parse_align`                                        | `./base.h:1334` |
|  1.4% |  1.0ms |       1 | `fmt::v12::basic_specs::set_sign`                                      | `./base.h:774`  |

##### `fmt::v12::detail::copy_noinline` (`./format.h:568`)

|     % |   Time | Samples | Callee                   | Location        |
| ----: | -----: | ------: | ------------------------ | --------------- |
| 60.6% | 43.0ms |      43 | `fmt::v12::detail::copy` | `./base.h:2068` |

##### `fmt::v12::detail::write_float` (`./format.h:2592`)

|     % |   Time | Samples | Callee                                   | Location          |
| ----: | -----: | ------: | ---------------------------------------- | ----------------- |
| 65.2% | 43.0ms |      43 | `fmt::v12::detail::write_fixed`          | `./format.h:2487` |
| 24.2% | 16.0ms |      16 | `std::__cxx11::basic_string::_M_dispose` | `<unknown>`       |
|  6.1% |  4.0ms |       4 | `fmt::v12::detail::do_write_float`       | `./format.h:2553` |
|  3.0% |  2.0ms |       2 | `_init`                                  | `<unknown>`       |
|  1.5% |  1.0ms |       1 | `fmt::v12::detail::reserve`              | `./format.h:501`  |

##### `fmt::v12::detail::for_each_codepoint` (`./format.h:632`)

|     % |   Time | Samples | Callee                                                                                     | Location        |
| ----: | -----: | ------: | ------------------------------------------------------------------------------------------ | --------------- |
| 81.5% | 53.0ms |      53 | `fmt::v12::detail::for_each_codepoint()::{lambda(char const*, char const*)#1}::operator()` | `./format.h`    |
|  1.5% |  1.0ms |       1 | `fmt::v12::detail::copy`                                                                   | `./base.h:2093` |

##### `fmt::v12::detail::copy` (`./base.h:2068`)

|     % |   Time | Samples | Callee                             | Location        |
| ----: | -----: | ------: | ---------------------------------- | --------------- |
| 96.8% | 60.0ms |      60 | `fmt::v12::detail::buffer::append` | `./base.h:1845` |

##### `fmt::v12::detail::buffer::append` (`./base.h:1845`)

|     % |  Time | Samples | Callee                                  | Location        |
| ----: | ----: | ------: | --------------------------------------- | --------------- |
| 15.0% | 9.0ms |       9 | `fmt::v12::detail::buffer::try_reserve` | `./base.h:1828` |
|  3.3% | 2.0ms |       2 | `fmt::v12::detail::to_unsigned`         | `./base.h:432`  |

##### `fmt::v12::detail::write_padded` (`./format.h:1696`)

|      % |   Time | Samples | Callee                           | Location          |
| -----: | -----: | ------: | -------------------------------- | ----------------- |
| 100.0% | 59.0ms |      59 | `fmt::v12::detail::write_padded` | `./format.h:1675` |

##### `fmt::v12::detail::write_int` (`./format.h:2050`)

|     % |   Time | Samples | Callee                                         | Location          |
| ----: | -----: | ------: | ---------------------------------------------- | ----------------- |
| 47.3% | 26.0ms |      26 | `fmt::v12::detail::write_padded`               | `./format.h:1696` |
| 27.3% | 15.0ms |      15 | `fmt::v12::detail::do_format_decimal`          | `./format.h:1207` |
|  5.5% |  3.0ms |       3 | `fmt::v12::detail::size_padding::size_padding` | `./format.h:2033` |
|  3.6% |  2.0ms |       2 | `fmt::v12::detail::do_format_base2e`           | `./format.h:1251` |

##### `fmt::v12::detail::for_each_codepoint()::{lambda(char const*, char const*)#1}::operator()` (`./format.h`)

|     % |   Time | Samples | Callee                                                                                         | Location         |
| ----: | -----: | ------: | ---------------------------------------------------------------------------------------------- | ---------------- |
| 52.8% | 28.0ms |      28 | `fmt::v12::detail::utf8_decode`                                                                | `./format.h:590` |
| 26.4% | 14.0ms |      14 | `fmt::v12::detail::write()::{lambda(unsigned int, fmt::v12::basic_string_view)#1}::operator()` | `./format.h`     |

##### `fmt::v12::detail::write_fixed` (`./format.h:2487`)

|     % |   Time | Samples | Callee                                              | Location          |
| ----: | -----: | ------: | --------------------------------------------------- | ----------------- |
| 73.3% | 33.0ms |      33 | `fmt::v12::detail::write_padded`                    | `./format.h:1696` |
|  4.4% |  2.0ms |       2 | `fmt::v12::detail::digit_grouping::digit_grouping`  | `./format.h:1878` |
|  2.2% |  1.0ms |       1 | `fmt::v12::detail::to_unsigned`                     | `./base.h:432`    |
|  2.2% |  1.0ms |       1 | `fmt::v12::detail::digit_grouping::~digit_grouping` | `./format.h:1856` |

##### `std::__cxx11::basic_string::basic_string` (`/usr/include/c++/12/bits/basic_string.h:612`)

|     % |   Time | Samples | Callee                                                   | Location                                        |
| ----: | -----: | ------: | -------------------------------------------------------- | ----------------------------------------------- |
| 90.9% | 10.0ms |      10 | `std::__cxx11::basic_string::_M_construct`               | `/usr/include/c++/12/bits/basic_string.tcc:217` |
|  9.1% |  1.0ms |       1 | `std::__cxx11::basic_string::_Alloc_hider::_Alloc_hider` | `/usr/include/c++/12/bits/basic_string.h:199`   |

##### `std::__cxx11::basic_string::_M_construct` (`/usr/include/c++/12/bits/basic_string.tcc:217`)

|     % |  Time | Samples | Callee                                      | Location                                      |
| ----: | ----: | ------: | ------------------------------------------- | --------------------------------------------- |
| 70.0% | 7.0ms |       7 | `operator new`                              | `<unknown>`                                   |
| 20.0% | 2.0ms |       2 | `std::__cxx11::basic_string::_S_copy_chars` | `/usr/include/c++/12/bits/basic_string.h:475` |
| 10.0% | 1.0ms |       1 | `std::__cxx11::basic_string::_M_set_length` | `/usr/include/c++/12/bits/basic_string.h:265` |

##### `std::__cxx11::basic_string::~basic_string` (`/usr/include/c++/12/bits/basic_string.h:794`)

|     % |  Time | Samples | Callee                                   | Location                                      |
| ----: | ----: | ------: | ---------------------------------------- | --------------------------------------------- |
| 88.9% | 8.0ms |       8 | `std::__cxx11::basic_string::_M_dispose` | `/usr/include/c++/12/bits/basic_string.h:283` |

##### `std::__cxx11::basic_string::_M_destroy` (`/usr/include/c++/12/bits/basic_string.h:291`)

|     % |  Time | Samples | Callee                              | Location                                      |
| ----: | ----: | ------: | ----------------------------------- | --------------------------------------------- |
| 87.5% | 7.0ms |       7 | `std::allocator_traits::deallocate` | `/usr/include/c++/12/bits/alloc_traits.h:495` |

##### `std::__cxx11::basic_string::_M_dispose` (`/usr/include/c++/12/bits/basic_string.h:283`)

|      % |  Time | Samples | Callee                                   | Location                                      |
| -----: | ----: | ------: | ---------------------------------------- | --------------------------------------------- |
| 100.0% | 8.0ms |       8 | `std::__cxx11::basic_string::_M_destroy` | `/usr/include/c++/12/bits/basic_string.h:291` |

##### `operator new` (`<unknown>`)

|     % |  Time | Samples | Callee          | Location    |
| ----: | ----: | ------: | --------------- | ----------- |
| 71.4% | 5.0ms |       5 | `__libc_malloc` | `<unknown>` |

##### `cfree` (`<unknown>`)

|     % |  Time | Samples | Callee        | Location    |
| ----: | ----: | ------: | ------------- | ----------- |
| 85.7% | 6.0ms |       6 | `(anonymous)` | `<unknown>` |

##### `std::__new_allocator::deallocate` (`/usr/include/c++/12/bits/new_allocator.h:142`)

|      % |  Time | Samples | Callee  | Location    |
| -----: | ----: | ------: | ------- | ----------- |
| 100.0% | 7.0ms |       7 | `cfree` | `<unknown>` |

##### `std::allocator_traits::deallocate` (`/usr/include/c++/12/bits/alloc_traits.h:495`)

|      % |  Time | Samples | Callee                             | Location                                       |
| -----: | ----: | ------: | ---------------------------------- | ---------------------------------------------- |
| 100.0% | 7.0ms |       7 | `std::__new_allocator::deallocate` | `/usr/include/c++/12/bits/new_allocator.h:142` |

##### `std::__cxx11::basic_string::_M_set_length` (`/usr/include/c++/12/bits/basic_string.h:265`)

|      % |  Time | Samples | Callee                     | Location                                     |
| -----: | ----: | ------: | -------------------------- | -------------------------------------------- |
| 100.0% | 3.0ms |       3 | `std::char_traits::assign` | `/usr/include/c++/12/bits/char_traits.h:347` |

##### `std::__cxx11::basic_string::_S_copy` (`/usr/include/c++/12/bits/basic_string.h:418`)

|      % |  Time | Samples | Callee                                | Location                                      |
| -----: | ----: | ------: | ------------------------------------- | --------------------------------------------- |
| 100.0% | 2.0ms |       2 | `std::char_traits::copy`              | `/usr/include/c++/12/bits/char_traits.h:423`  |
| 100.0% | 2.0ms |       2 | `std::__cxx11::basic_string::_S_copy` | `/usr/include/c++/12/bits/basic_string.h:418` |

##### `std::__cxx11::basic_string::_S_copy_chars` (`/usr/include/c++/12/bits/basic_string.h:475`)

|      % |  Time | Samples | Callee                                | Location                                      |
| -----: | ----: | ------: | ------------------------------------- | --------------------------------------------- |
| 100.0% | 2.0ms |       2 | `std::__cxx11::basic_string::_S_copy` | `/usr/include/c++/12/bits/basic_string.h:418` |

##### `std::__cxx11::basic_string::basic_string` (`/usr/include/c++/12/bits/basic_string.h:515`)

|      % |  Time | Samples | Callee                                      | Location                                      |
| -----: | ----: | ------: | ------------------------------------------- | --------------------------------------------- |
| 100.0% | 2.0ms |       2 | `std::__cxx11::basic_string::_M_set_length` | `/usr/include/c++/12/bits/basic_string.h:265` |

## Hottest call stacks

Call stacks with the most time spent in their leaf frame.

Common call stack: `(anonymous)` ← `__libc_start_main` ← `_start`

|    % |   Time | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ---: | -----: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 6.9% | 41.0ms |      41 | `fmt::v12::detail::parse_format_specs` (`./base.h:1461`) ← `fmt::v12::detail::format_handler::on_format_specs` (`./format.h:3772`) ← `fmt::v12::detail::parse_replacement_field` (`./base.h:1599`) ← `fmt::v12::detail::parse_format_string` (1646) ← `fmt::v12::detail::vformat_to` (`./format-inl.h:1456`) ← `fmt::v12::vformat[abi:cxx11]` (1446) ← `fmt::v12::format` (`./format.h:4335`) ← `main` (`/out/profile.cpp:8`)                                                                                                                                                                                                                        |
| 4.7% | 28.0ms |      28 | `fmt::v12::detail::utf8_decode` (`./format.h:590`) ← `fmt::v12::detail::for_each_codepoint()::{lambda(char const*, char const*)#1}::operator()` ← `fmt::v12::detail::for_each_codepoint` (632) ← `fmt::v12::detail::write` (2159) ← `fmt::v12::detail::format_handler::on_format_specs` (3772) ← `fmt::v12::detail::parse_replacement_field` (`./base.h:1599`) ← `fmt::v12::detail::parse_format_string` (1646) ← `fmt::v12::detail::vformat_to` (`./format-inl.h:1456`) ← `fmt::v12::vformat[abi:cxx11]` (1446) ← `fmt::v12::format` (`./format.h:4335`) ← `main` (`/out/profile.cpp:8`)                                                            |
| 4.2% | 25.0ms |      25 | `fmt::v12::detail::parse_format_string` (`./base.h:1646`) ← `fmt::v12::detail::vformat_to` (`./format-inl.h:1456`) ← `fmt::v12::vformat[abi:cxx11]` (1446) ← `fmt::v12::format` (`./format.h:4335`) ← `main` (`/out/profile.cpp:8`)                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 3.8% | 23.0ms |      23 | `(anonymous)` ← `fmt::v12::vformat[abi:cxx11]` (`./format-inl.h:1446`) ← `fmt::v12::format` (`./format.h:4335`) ← `main` (`/out/profile.cpp:8`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 3.3% | 20.0ms |      20 | `fmt::v12::detail::copy_noinline` (`./format.h:568`) ← `fmt::v12::detail::format_handler::on_text` (3752) ← `fmt::v12::detail::parse_format_string` (`./base.h:1646`) ← `fmt::v12::detail::vformat_to` (`./format-inl.h:1456`) ← `fmt::v12::vformat[abi:cxx11]` (1446) ← `fmt::v12::format` (`./format.h:4335`) ← `main` (`/out/profile.cpp:8`)                                                                                                                                                                                                                                                                                                      |
| 3.0% | 18.0ms |      18 | `fmt::v12::detail::format_float` (`./format.h:3134`) ← `fmt::v12::detail::write` (3434) ← `fmt::v12::detail::format_handler::on_format_specs` (3772) ← `fmt::v12::detail::parse_replacement_field` (`./base.h:1599`) ← `fmt::v12::detail::parse_format_string` (1646) ← `fmt::v12::detail::vformat_to` (`./format-inl.h:1456`) ← `fmt::v12::vformat[abi:cxx11]` (1446) ← `fmt::v12::format` (`./format.h:4335`) ← `main` (`/out/profile.cpp:8`)                                                                                                                                                                                                      |
| 2.8% | 17.0ms |      17 | `fmt::v12::detail::buffer::append` (`./base.h:1845`) ← `fmt::v12::detail::copy` (2068) ← `fmt::v12::detail::copy_noinline` (`./format.h:568`) ← `fmt::v12::detail::format_handler::on_text` (3752) ← `fmt::v12::detail::parse_format_string` (`./base.h:1646`) ← `fmt::v12::detail::vformat_to` (`./format-inl.h:1456`) ← `fmt::v12::vformat[abi:cxx11]` (1446) ← `fmt::v12::format` (`./format.h:4335`) ← `main` (`/out/profile.cpp:8`)                                                                                                                                                                                                             |
| 2.7% | 16.0ms |      16 | `std::__cxx11::basic_string::_M_dispose` ← `fmt::v12::detail::write_float` (`./format.h:2592`) ← `fmt::v12::detail::write` (3434) ← `fmt::v12::detail::format_handler::on_format_specs` (3772) ← `fmt::v12::detail::parse_replacement_field` (`./base.h:1599`) ← `fmt::v12::detail::parse_format_string` (1646) ← `fmt::v12::detail::vformat_to` (`./format-inl.h:1456`) ← `fmt::v12::vformat[abi:cxx11]` (1446) ← `fmt::v12::format` (`./format.h:4335`) ← `main` (`/out/profile.cpp:8`)                                                                                                                                                            |
| 2.5% | 15.0ms |      15 | `fmt::v12::detail::parse_replacement_field` (`./base.h:1599`) ← `fmt::v12::detail::parse_format_string` (1646) ← `fmt::v12::detail::vformat_to` (`./format-inl.h:1456`) ← `fmt::v12::vformat[abi:cxx11]` (1446) ← `fmt::v12::format` (`./format.h:4335`) ← `main` (`/out/profile.cpp:8`)                                                                                                                                                                                                                                                                                                                                                             |
| 2.3% | 14.0ms |      14 | `(anonymous)` ← `fmt::v12::detail::format_handler::on_format_specs` (`./format.h:3772`) ← `fmt::v12::detail::parse_replacement_field` (`./base.h:1599`) ← `fmt::v12::detail::parse_format_string` (1646) ← `fmt::v12::detail::vformat_to` (`./format-inl.h:1456`) ← `fmt::v12::vformat[abi:cxx11]` (1446) ← `fmt::v12::format` (`./format.h:4335`) ← `main` (`/out/profile.cpp:8`)                                                                                                                                                                                                                                                                   |
| 2.2% | 13.0ms |      13 | `fmt::v12::detail::buffer::append` (`./base.h:1845`) ← `fmt::v12::detail::copy` (2068) ← `fmt::v12::detail::copy_noinline` (`./format.h:568`) ← `fmt::v12::detail::format_handler::on_replacement_field` (3768) ← `fmt::v12::detail::parse_replacement_field` (`./base.h:1599`) ← `fmt::v12::detail::parse_format_string` (1646) ← `fmt::v12::detail::vformat_to` (`./format-inl.h:1456`) ← `fmt::v12::vformat[abi:cxx11]` (1446) ← `fmt::v12::format` (`./format.h:4335`) ← `main` (`/out/profile.cpp:8`)                                                                                                                                           |
| 2.2% | 13.0ms |      13 | `(anonymous)` ← `fmt::v12::detail::format_handler::on_replacement_field` (`./format.h:3768`) ← `fmt::v12::detail::parse_replacement_field` (`./base.h:1599`) ← `fmt::v12::detail::parse_format_string` (1646) ← `fmt::v12::detail::vformat_to` (`./format-inl.h:1456`) ← `fmt::v12::vformat[abi:cxx11]` (1446) ← `fmt::v12::format` (`./format.h:4335`) ← `main` (`/out/profile.cpp:8`)                                                                                                                                                                                                                                                              |
| 2.0% | 12.0ms |      12 | `operator delete`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 1.8% | 11.0ms |      11 | `fmt::v12::detail::for_each_codepoint` (`./format.h:632`) ← `fmt::v12::detail::write` (2159) ← `fmt::v12::detail::format_handler::on_format_specs` (3772) ← `fmt::v12::detail::parse_replacement_field` (`./base.h:1599`) ← `fmt::v12::detail::parse_format_string` (1646) ← `fmt::v12::detail::vformat_to` (`./format-inl.h:1456`) ← `fmt::v12::vformat[abi:cxx11]` (1446) ← `fmt::v12::format` (`./format.h:4335`) ← `main` (`/out/profile.cpp:8`)                                                                                                                                                                                                 |
| 1.8% | 11.0ms |      11 | `fmt::v12::detail::for_each_codepoint()::{lambda(char const*, char const*)#1}::operator()` (`./format.h`) ← `fmt::v12::detail::for_each_codepoint` (632) ← `fmt::v12::detail::write` (2159) ← `fmt::v12::detail::format_handler::on_format_specs` (3772) ← `fmt::v12::detail::parse_replacement_field` (`./base.h:1599`) ← `fmt::v12::detail::parse_format_string` (1646) ← `fmt::v12::detail::vformat_to` (`./format-inl.h:1456`) ← `fmt::v12::vformat[abi:cxx11]` (1446) ← `fmt::v12::format` (`./format.h:4335`) ← `main` (`/out/profile.cpp:8`)                                                                                                  |
| 1.8% | 11.0ms |      11 | `fmt::v12::detail::do_format_decimal` (`./format.h:1207`) ← `fmt::v12::detail::write_int` (2050) ← `fmt::v12::detail::format_handler::on_format_specs` (3772) ← `fmt::v12::detail::parse_replacement_field` (`./base.h:1599`) ← `fmt::v12::detail::parse_format_string` (1646) ← `fmt::v12::detail::vformat_to` (`./format-inl.h:1456`) ← `fmt::v12::vformat[abi:cxx11]` (1446) ← `fmt::v12::format` (`./format.h:4335`) ← `main` (`/out/profile.cpp:8`)                                                                                                                                                                                             |
| 1.8% | 11.0ms |      11 | `fmt::v12::detail::write()::{lambda(unsigned int, fmt::v12::basic_string_view)#1}::operator()` (`./format.h`) ← `fmt::v12::detail::for_each_codepoint()::{lambda(char const*, char const*)#1}::operator()` ← `fmt::v12::detail::for_each_codepoint` (632) ← `fmt::v12::detail::write` (2159) ← `fmt::v12::detail::format_handler::on_format_specs` (3772) ← `fmt::v12::detail::parse_replacement_field` (`./base.h:1599`) ← `fmt::v12::detail::parse_format_string` (1646) ← `fmt::v12::detail::vformat_to` (`./format-inl.h:1456`) ← `fmt::v12::vformat[abi:cxx11]` (1446) ← `fmt::v12::format` (`./format.h:4335`) ← `main` (`/out/profile.cpp:8`) |
| 1.7% | 10.0ms |      10 | `std::__cxx11::basic_string::_M_create` ← `fmt::v12::vformat[abi:cxx11]` (`./format-inl.h:1446`) ← `fmt::v12::format` (`./format.h:4335`) ← `main` (`/out/profile.cpp:8`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 1.5% |  9.0ms |       9 | `fmt::v12::detail::write_int` (`./format.h:2050`) ← `fmt::v12::detail::format_handler::on_format_specs` (3772) ← `fmt::v12::detail::parse_replacement_field` (`./base.h:1599`) ← `fmt::v12::detail::parse_format_string` (1646) ← `fmt::v12::detail::vformat_to` (`./format-inl.h:1456`) ← `fmt::v12::vformat[abi:cxx11]` (1446) ← `fmt::v12::format` (`./format.h:4335`) ← `main` (`/out/profile.cpp:8`)                                                                                                                                                                                                                                            |
| 1.3% |  8.0ms |       8 | `fmt::v12::detail::parse_format_specs()::{unnamed type#1}::operator()` (`./base.h:1476`) ← `fmt::v12::detail::parse_format_specs` (1461) ← `fmt::v12::detail::format_handler::on_format_specs` (`./format.h:3772`) ← `fmt::v12::detail::parse_replacement_field` (`./base.h:1599`) ← `fmt::v12::detail::parse_format_string` (1646) ← `fmt::v12::detail::vformat_to` (`./format-inl.h:1456`) ← `fmt::v12::vformat[abi:cxx11]` (1446) ← `fmt::v12::format` (`./format.h:4335`) ← `main` (`/out/profile.cpp:8`)                                                                                                                                        |

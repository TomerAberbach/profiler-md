# Allocated heap and retained heap profile

Allocated 120 MiB and retained 0 B over 1,998,001 samples (62.9 B and 0 B per sample).

| Category |      % | Allocated | Retained |   Samples |
| -------- | -----: | --------: | -------: | --------: |
| stdlib   | 100.0% |   120 MiB |      0 B | 1,998,001 |

## Allocated heap

### Hottest functions

#### Total size

Functions ranked by total bytes allocated in the function and all its callees.

|      % |    Size |   Samples | Function                                   | Location                                 |
| -----: | ------: | --------: | ------------------------------------------ | ---------------------------------------- |
| 100.0% | 120 MiB | 1,998,001 | `main`                                     | `out/profile.cpp`                        |
| 100.0% | 120 MiB | 1,998,000 | `std::__cxx11::basic_string::basic_string` | `usr/include/c++/12/bits/basic_string.h` |
| 100.0% | 120 MiB | 1,998,000 | `fmt::v11::to_string`                      | `src/fmt/include/fmt/format.h`           |
| 100.0% | 120 MiB | 1,998,000 | `fmt::v11::vformat[abi:cxx11]`             | `src/fmt/include/fmt/format-inl.h`       |
| 100.0% | 120 MiB | 1,998,000 | `fmt::v11::format`                         | `src/fmt/include/fmt/format.h`           |
|  <0.1% |   8 KiB |         1 | `std::vector::reserve`                     | `usr/include/c++/12/bits/vector.tcc`     |

##### Callees

Callees ranked by contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

###### `main` (`out/profile.cpp`)

|      % |    Size |   Samples | Callee                 | Location                             |
| -----: | ------: | --------: | ---------------------- | ------------------------------------ |
| 100.0% | 120 MiB | 1,998,000 | `fmt::v11::format`     | `src/fmt/include/fmt/format.h`       |
|  <0.1% |   8 KiB |         1 | `std::vector::reserve` | `usr/include/c++/12/bits/vector.tcc` |

###### `fmt::v11::to_string` (`src/fmt/include/fmt/format.h`)

|      % |    Size |   Samples | Callee                                     | Location                                 |
| -----: | ------: | --------: | ------------------------------------------ | ---------------------------------------- |
| 100.0% | 120 MiB | 1,998,000 | `std::__cxx11::basic_string::basic_string` | `usr/include/c++/12/bits/basic_string.h` |

###### `fmt::v11::vformat[abi:cxx11]` (`src/fmt/include/fmt/format-inl.h`)

|      % |    Size |   Samples | Callee                | Location                       |
| -----: | ------: | --------: | --------------------- | ------------------------------ |
| 100.0% | 120 MiB | 1,998,000 | `fmt::v11::to_string` | `src/fmt/include/fmt/format.h` |

###### `fmt::v11::format` (`src/fmt/include/fmt/format.h`)

|      % |    Size |   Samples | Callee                         | Location                           |
| -----: | ------: | --------: | ------------------------------ | ---------------------------------- |
| 100.0% | 120 MiB | 1,998,000 | `fmt::v11::vformat[abi:cxx11]` | `src/fmt/include/fmt/format-inl.h` |

### Hottest call stacks

Call stacks ranked by bytes allocated in their leaf frame. `…` stands for frames the entry filter hides.

|     % |     Size |   Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ----: | -------: | --------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 99.2% |  119 MiB | 1,983,720 | `std::__cxx11::basic_string::basic_string` (`usr/include/c++/12/bits/basic_string.h`) ← `fmt::v11::to_string` (`src/fmt/include/fmt/format.h`) ← `fmt::v11::vformat[abi:cxx11]` (`src/fmt/include/fmt/format-inl.h`) ← `fmt::v11::format` (`src/fmt/include/fmt/format.h`) ← `main` (`out/profile.cpp`)                                                                                                                                                                                                                            |
|  0.8% | 1016 KiB |    14,280 | `std::__cxx11::basic_string::basic_string` (`usr/include/c++/12/bits/basic_string.h`) ← `fmt::v11::to_string` (`src/fmt/include/fmt/format.h`) ← `fmt::v11::vformat[abi:cxx11]` (`src/fmt/include/fmt/format-inl.h`) ← `fmt::v11::format` (`src/fmt/include/fmt/format.h`) ← `main` (`out/profile.cpp`) ← … ← `std::__cxx11::basic_string::basic_string` (`usr/include/c++/12/bits/basic_string.h`) ← `fmt::v11::to_string` (`src/fmt/include/fmt/format.h`) ← `fmt::v11::vformat[abi:cxx11]` (`src/fmt/include/fmt/format-inl.h`) |
| <0.1% |    8 KiB |         1 | `std::vector::reserve` (`usr/include/c++/12/bits/vector.tcc`) ← `main` (`out/profile.cpp`)                                                                                                                                                                                                                                                                                                                                                                                                                                         |

## Retained heap

No bytes retained in any sample.

# Allocated heap and retained heap profile

Allocated 126 MB and retained 0 B over 1,998,001 samples (62.9 B and 0 B per sample).

| Category |      % | Allocated | Retained |   Samples |
| -------- | -----: | --------: | -------: | --------: |
| stdlib   | 100.0% |    126 MB |      0 B | 1,998,001 |

## Allocated heap

### Hottest functions

#### Total size

Functions ranked by total bytes allocated in the function and all its callees.

|      % |    Size |   Samples | Function                                   | Location                               |
| -----: | ------: | --------: | ------------------------------------------ | -------------------------------------- |
| 100.0% |  126 MB | 1,998,001 | `main`                                     | out/profile.cpp                        |
| 100.0% |  126 MB | 1,998,000 | `std::__cxx11::basic_string::basic_string` | usr/include/c++/12/bits/basic_string.h |
| 100.0% |  126 MB | 1,998,000 | `fmt::v11::to_string`                      | src/fmt/include/fmt/format.h           |
| 100.0% |  126 MB | 1,998,000 | `fmt::v11::vformat[abi:cxx11]`             | src/fmt/include/fmt/format-inl.h       |
| 100.0% |  126 MB | 1,998,000 | `fmt::v11::format`                         | src/fmt/include/fmt/format.h           |
|  <0.1% | 8.19 kB |         1 | `std::vector::reserve`                     | usr/include/c++/12/bits/vector.tcc     |

##### Callees

Callees ranked by contribution to each function's total size. Callee attribution may be imprecise due to inlining.

###### `main` (out/profile.cpp)

|      % |    Size |   Samples | Callee                 | Location                           |
| -----: | ------: | --------: | ---------------------- | ---------------------------------- |
| 100.0% |  126 MB | 1,998,000 | `fmt::v11::format`     | src/fmt/include/fmt/format.h       |
|  <0.1% | 8.19 kB |         1 | `std::vector::reserve` | usr/include/c++/12/bits/vector.tcc |

###### `fmt::v11::to_string` (src/fmt/include/fmt/format.h)

|      % |   Size |   Samples | Callee                                     | Location                               |
| -----: | -----: | --------: | ------------------------------------------ | -------------------------------------- |
| 100.0% | 126 MB | 1,998,000 | `std::__cxx11::basic_string::basic_string` | usr/include/c++/12/bits/basic_string.h |

###### `fmt::v11::vformat[abi:cxx11]` (src/fmt/include/fmt/format-inl.h)

|      % |   Size |   Samples | Callee                | Location                     |
| -----: | -----: | --------: | --------------------- | ---------------------------- |
| 100.0% | 126 MB | 1,998,000 | `fmt::v11::to_string` | src/fmt/include/fmt/format.h |

###### `fmt::v11::format` (src/fmt/include/fmt/format.h)

|      % |   Size |   Samples | Callee                         | Location                         |
| -----: | -----: | --------: | ------------------------------ | -------------------------------- |
| 100.0% | 126 MB | 1,998,000 | `fmt::v11::vformat[abi:cxx11]` | src/fmt/include/fmt/format-inl.h |

### Hottest call stacks

Call stacks ranked by bytes allocated in their leaf frame.

|     % |    Size |   Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ----: | ------: | --------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 99.2% |  125 MB | 1,983,720 | `std::__cxx11::basic_string::basic_string` (usr/include/c++/12/bits/basic_string.h) ← `fmt::v11::to_string` (src/fmt/include/fmt/format.h) ← `fmt::v11::vformat[abi:cxx11]` (src/fmt/include/fmt/format-inl.h) ← `fmt::v11::format` (src/fmt/include/fmt/format.h) ← `main` (out/profile.cpp)                                                                                                                                                                                                                  |
|  0.8% | 1.04 MB |    14,280 | `std::__cxx11::basic_string::basic_string` (usr/include/c++/12/bits/basic_string.h) ← `fmt::v11::to_string` (src/fmt/include/fmt/format.h) ← `fmt::v11::vformat[abi:cxx11]` (src/fmt/include/fmt/format-inl.h) ← `fmt::v11::format` (src/fmt/include/fmt/format.h) ← `main` (out/profile.cpp) ← `std::__cxx11::basic_string::basic_string` (usr/include/c++/12/bits/basic_string.h) ← `fmt::v11::to_string` (src/fmt/include/fmt/format.h) ← `fmt::v11::vformat[abi:cxx11]` (src/fmt/include/fmt/format-inl.h) |
| <0.1% | 8.19 kB |         1 | `std::vector::reserve` (usr/include/c++/12/bits/vector.tcc) ← `main` (out/profile.cpp)                                                                                                                                                                                                                                                                                                                                                                                                                         |

## Retained heap

No bytes retained in any sample.

# Allocated heap and retained heap profile

Allocated 126 MB and retained 0 B over 12 samples (10.5 MB and 0 B per sample).

| Category |      % |   Size | Size | Samples |
| -------- | -----: | -----: | ---: | ------: |
| ours     | 100.0% | 126 MB |  0 B |      12 |

## Allocated heap

### Hottest functions

#### Self size

Functions ranked by bytes allocated directly in the function body, excluding callees.

|      % |    Size | Samples | Function                                   | Location                                                   |
| -----: | ------: | ------: | ------------------------------------------ | ---------------------------------------------------------- |
| 100.0% |  126 MB |      11 | `std::__cxx11::basic_string::_M_construct` | ../../../../../../usr/include/c++/12/bits/basic_string.tcc |
|   0.0% | 8.19 kB |       1 | `std::__new_allocator::allocate`           | ../../../../../../usr/include/c++/12/bits/new_allocator.h  |

##### Lines

Lines ranked by contribution to each function's self size.

###### `std::__cxx11::basic_string::_M_construct` (../../../../../../usr/include/c++/12/bits/basic_string.tcc)

|      % |   Size | Samples | Location                                                       |
| -----: | -----: | ------: | -------------------------------------------------------------- |
| 100.0% | 126 MB |      11 | ../../../../../../usr/include/c++/12/bits/basic_string.tcc:225 |

###### `std::__new_allocator::allocate` (../../../../../../usr/include/c++/12/bits/new_allocator.h)

|      % |    Size | Samples | Location                                                      |
| -----: | ------: | ------: | ------------------------------------------------------------- |
| 100.0% | 8.19 kB |       1 | ../../../../../../usr/include/c++/12/bits/new_allocator.h:137 |

##### Callers

Callers ranked by contribution to each function's self size. Caller attribution may be imprecise due to inlining.

###### `std::__cxx11::basic_string::_M_construct` (../../../../../../usr/include/c++/12/bits/basic_string.tcc)

|      % |   Size | Samples | Caller                                     | Location                                                 |
| -----: | -----: | ------: | ------------------------------------------ | -------------------------------------------------------- |
| 100.0% | 126 MB |      11 | `std::__cxx11::basic_string::basic_string` | ../../../../../../usr/include/c++/12/bits/basic_string.h |

###### `std::__new_allocator::allocate` (../../../../../../usr/include/c++/12/bits/new_allocator.h)

|      % |    Size | Samples | Caller                            | Location                                                 |
| -----: | ------: | ------: | --------------------------------- | -------------------------------------------------------- |
| 100.0% | 8.19 kB |       1 | `std::allocator_traits::allocate` | ../../../../../../usr/include/c++/12/bits/alloc_traits.h |

#### Total size

Functions ranked by total bytes allocated in the function and all its callees.

|      % |    Size | Samples | Function                                   | Location                                                   |
| -----: | ------: | ------: | ------------------------------------------ | ---------------------------------------------------------- |
| 100.0% |  126 MB |      12 | `main`                                     | ../../../../../../out/profile.cpp                          |
| 100.0% |  126 MB |      11 | `std::__cxx11::basic_string::_M_construct` | ../../../../../../usr/include/c++/12/bits/basic_string.tcc |
| 100.0% |  126 MB |      11 | `std::__cxx11::basic_string::basic_string` | ../../../../../../usr/include/c++/12/bits/basic_string.h   |
| 100.0% |  126 MB |      11 | `fmt::v11::to_string`                      | ../../../../../../src/fmt/include/fmt/format.h             |
| 100.0% |  126 MB |      11 | `fmt::v11::vformat[abi:cxx11]`             | ../../../../../../src/fmt/include/fmt/format-inl.h         |
|  93.0% |  117 MB |       6 | `fmt::v11::format`                         | ../../../../../../src/fmt/include/fmt/format.h             |
|   7.0% | 8.85 MB |       5 | `fmt::v11::format`                         | ../../../../../../src/fmt/include/fmt/format.h             |
|   0.0% | 8.19 kB |       1 | `std::__new_allocator::allocate`           | ../../../../../../usr/include/c++/12/bits/new_allocator.h  |
|   0.0% | 8.19 kB |       1 | `std::allocator_traits::allocate`          | ../../../../../../usr/include/c++/12/bits/alloc_traits.h   |
|   0.0% | 8.19 kB |       1 | `std::_Vector_base::_M_allocate`           | ../../../../../../usr/include/c++/12/bits/stl_vector.h     |
|   0.0% | 8.19 kB |       1 | `std::vector::reserve`                     | ../../../../../../usr/include/c++/12/bits/vector.tcc       |

##### Callees

Callees ranked by contribution to each function's total size. Callee attribution may be imprecise due to inlining.

###### `main` (../../../../../../out/profile.cpp)

|     % |    Size | Samples | Callee                 | Location                                             |
| ----: | ------: | ------: | ---------------------- | ---------------------------------------------------- |
| 93.0% |  117 MB |       6 | `fmt::v11::format`     | ../../../../../../src/fmt/include/fmt/format.h       |
|  7.0% | 8.85 MB |       5 | `fmt::v11::format`     | ../../../../../../src/fmt/include/fmt/format.h       |
|  0.0% | 8.19 kB |       1 | `std::vector::reserve` | ../../../../../../usr/include/c++/12/bits/vector.tcc |

###### `std::__cxx11::basic_string::basic_string` (../../../../../../usr/include/c++/12/bits/basic_string.h)

|      % |   Size | Samples | Callee                                     | Location                                                   |
| -----: | -----: | ------: | ------------------------------------------ | ---------------------------------------------------------- |
| 100.0% | 126 MB |      11 | `std::__cxx11::basic_string::_M_construct` | ../../../../../../usr/include/c++/12/bits/basic_string.tcc |

###### `fmt::v11::to_string` (../../../../../../src/fmt/include/fmt/format.h)

|      % |   Size | Samples | Callee                                     | Location                                                 |
| -----: | -----: | ------: | ------------------------------------------ | -------------------------------------------------------- |
| 100.0% | 126 MB |      11 | `std::__cxx11::basic_string::basic_string` | ../../../../../../usr/include/c++/12/bits/basic_string.h |

###### `fmt::v11::vformat[abi:cxx11]` (../../../../../../src/fmt/include/fmt/format-inl.h)

|      % |   Size | Samples | Callee                | Location                                       |
| -----: | -----: | ------: | --------------------- | ---------------------------------------------- |
| 100.0% | 126 MB |      11 | `fmt::v11::to_string` | ../../../../../../src/fmt/include/fmt/format.h |

###### `fmt::v11::format` (../../../../../../src/fmt/include/fmt/format.h)

|      % |   Size | Samples | Callee                         | Location                                           |
| -----: | -----: | ------: | ------------------------------ | -------------------------------------------------- |
| 100.0% | 117 MB |       6 | `fmt::v11::vformat[abi:cxx11]` | ../../../../../../src/fmt/include/fmt/format-inl.h |

###### `fmt::v11::format` (../../../../../../src/fmt/include/fmt/format.h)

|      % |    Size | Samples | Callee                         | Location                                           |
| -----: | ------: | ------: | ------------------------------ | -------------------------------------------------- |
| 100.0% | 8.85 MB |       5 | `fmt::v11::vformat[abi:cxx11]` | ../../../../../../src/fmt/include/fmt/format-inl.h |

###### `std::allocator_traits::allocate` (../../../../../../usr/include/c++/12/bits/alloc_traits.h)

|      % |    Size | Samples | Callee                           | Location                                                  |
| -----: | ------: | ------: | -------------------------------- | --------------------------------------------------------- |
| 100.0% | 8.19 kB |       1 | `std::__new_allocator::allocate` | ../../../../../../usr/include/c++/12/bits/new_allocator.h |

###### `std::_Vector_base::_M_allocate` (../../../../../../usr/include/c++/12/bits/stl_vector.h)

|      % |    Size | Samples | Callee                            | Location                                                 |
| -----: | ------: | ------: | --------------------------------- | -------------------------------------------------------- |
| 100.0% | 8.19 kB |       1 | `std::allocator_traits::allocate` | ../../../../../../usr/include/c++/12/bits/alloc_traits.h |

###### `std::vector::reserve` (../../../../../../usr/include/c++/12/bits/vector.tcc)

|      % |    Size | Samples | Callee                           | Location                                               |
| -----: | ------: | ------: | -------------------------------- | ------------------------------------------------------ |
| 100.0% | 8.19 kB |       1 | `std::_Vector_base::_M_allocate` | ../../../../../../usr/include/c++/12/bits/stl_vector.h |

### Hottest call stacks

Call stacks ranked by bytes allocated in their leaf frame.

|     % |    Size | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ----: | ------: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 92.1% |  116 MB |       5 | `std::__cxx11::basic_string::_M_construct` (../../../../../../usr/include/c++/12/bits/basic_string.tcc) ← `std::__cxx11::basic_string::basic_string` (../../../../../../usr/include/c++/12/bits/basic_string.h) ← `fmt::v11::to_string` (../../../../../../src/fmt/include/fmt/format.h) ← `fmt::v11::vformat[abi:cxx11]` (../../../../../../src/fmt/include/fmt/format-inl.h) ← `fmt::v11::format` (../../../../../../src/fmt/include/fmt/format.h) ← `main` (../../../../../../out/profile.cpp)                                                                                                                                                                                                                                                                                                                                                                                  |
|  7.0% | 8.83 MB |       4 | `std::__cxx11::basic_string::_M_construct` (../../../../../../usr/include/c++/12/bits/basic_string.tcc) ← `std::__cxx11::basic_string::basic_string` (../../../../../../usr/include/c++/12/bits/basic_string.h) ← `fmt::v11::to_string` (../../../../../../src/fmt/include/fmt/format.h) ← `fmt::v11::vformat[abi:cxx11]` (../../../../../../src/fmt/include/fmt/format-inl.h) ← `fmt::v11::format` (../../../../../../src/fmt/include/fmt/format.h) ← `main` (../../../../../../out/profile.cpp)                                                                                                                                                                                                                                                                                                                                                                                  |
|  0.8% | 1.03 MB |       1 | `std::__cxx11::basic_string::_M_construct` (../../../../../../usr/include/c++/12/bits/basic_string.tcc) ← `std::__cxx11::basic_string::basic_string` (../../../../../../usr/include/c++/12/bits/basic_string.h) ← `fmt::v11::to_string` (../../../../../../src/fmt/include/fmt/format.h) ← `fmt::v11::vformat[abi:cxx11]` (../../../../../../src/fmt/include/fmt/format-inl.h) ← `fmt::v11::format` (../../../../../../src/fmt/include/fmt/format.h) ← `main` (../../../../../../out/profile.cpp) ← `std::__cxx11::basic_string::_M_construct` (../../../../../../usr/include/c++/12/bits/basic_string.tcc) ← `std::__cxx11::basic_string::basic_string` (../../../../../../usr/include/c++/12/bits/basic_string.h) ← `fmt::v11::to_string` (../../../../../../src/fmt/include/fmt/format.h) ← `fmt::v11::vformat[abi:cxx11]` (../../../../../../src/fmt/include/fmt/format-inl.h) |
|  0.0% | 12.1 kB |       1 | `std::__cxx11::basic_string::_M_construct` (../../../../../../usr/include/c++/12/bits/basic_string.tcc) ← `std::__cxx11::basic_string::basic_string` (../../../../../../usr/include/c++/12/bits/basic_string.h) ← `fmt::v11::to_string` (../../../../../../src/fmt/include/fmt/format.h) ← `fmt::v11::vformat[abi:cxx11]` (../../../../../../src/fmt/include/fmt/format-inl.h) ← `fmt::v11::format` (../../../../../../src/fmt/include/fmt/format.h) ← `main` (../../../../../../out/profile.cpp) ← `std::__cxx11::basic_string::_M_construct` (../../../../../../usr/include/c++/12/bits/basic_string.tcc) ← `std::__cxx11::basic_string::basic_string` (../../../../../../usr/include/c++/12/bits/basic_string.h) ← `fmt::v11::to_string` (../../../../../../src/fmt/include/fmt/format.h) ← `fmt::v11::vformat[abi:cxx11]` (../../../../../../src/fmt/include/fmt/format-inl.h) |
|  0.0% | 8.19 kB |       1 | `std::__new_allocator::allocate` (../../../../../../usr/include/c++/12/bits/new_allocator.h) ← `std::allocator_traits::allocate` (../../../../../../usr/include/c++/12/bits/alloc_traits.h) ← `std::_Vector_base::_M_allocate` (../../../../../../usr/include/c++/12/bits/stl_vector.h) ← `std::vector::reserve` (../../../../../../usr/include/c++/12/bits/vector.tcc) ← `main` (../../../../../../out/profile.cpp)                                                                                                                                                                                                                                                                                                                                                                                                                                                               |

## Retained heap

### Hottest call stacks

Call stacks ranked by bytes retained in their leaf frame.

|    % | Size | Samples | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ---: | ---: | ------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0.0% |  0 B |       4 | `std::__cxx11::basic_string::_M_construct` (../../../../../../usr/include/c++/12/bits/basic_string.tcc) ← `std::__cxx11::basic_string::basic_string` (../../../../../../usr/include/c++/12/bits/basic_string.h) ← `fmt::v11::to_string` (../../../../../../src/fmt/include/fmt/format.h) ← `fmt::v11::vformat[abi:cxx11]` (../../../../../../src/fmt/include/fmt/format-inl.h) ← `fmt::v11::format` (../../../../../../src/fmt/include/fmt/format.h) ← `main` (../../../../../../out/profile.cpp)                                                                                                                                                                                                                                                                                                                                                                                  |
| 0.0% |  0 B |       5 | `std::__cxx11::basic_string::_M_construct` (../../../../../../usr/include/c++/12/bits/basic_string.tcc) ← `std::__cxx11::basic_string::basic_string` (../../../../../../usr/include/c++/12/bits/basic_string.h) ← `fmt::v11::to_string` (../../../../../../src/fmt/include/fmt/format.h) ← `fmt::v11::vformat[abi:cxx11]` (../../../../../../src/fmt/include/fmt/format-inl.h) ← `fmt::v11::format` (../../../../../../src/fmt/include/fmt/format.h) ← `main` (../../../../../../out/profile.cpp)                                                                                                                                                                                                                                                                                                                                                                                  |
| 0.0% |  0 B |       1 | `std::__new_allocator::allocate` (../../../../../../usr/include/c++/12/bits/new_allocator.h) ← `std::allocator_traits::allocate` (../../../../../../usr/include/c++/12/bits/alloc_traits.h) ← `std::_Vector_base::_M_allocate` (../../../../../../usr/include/c++/12/bits/stl_vector.h) ← `std::vector::reserve` (../../../../../../usr/include/c++/12/bits/vector.tcc) ← `main` (../../../../../../out/profile.cpp)                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 0.0% |  0 B |       1 | `std::__cxx11::basic_string::_M_construct` (../../../../../../usr/include/c++/12/bits/basic_string.tcc) ← `std::__cxx11::basic_string::basic_string` (../../../../../../usr/include/c++/12/bits/basic_string.h) ← `fmt::v11::to_string` (../../../../../../src/fmt/include/fmt/format.h) ← `fmt::v11::vformat[abi:cxx11]` (../../../../../../src/fmt/include/fmt/format-inl.h) ← `fmt::v11::format` (../../../../../../src/fmt/include/fmt/format.h) ← `main` (../../../../../../out/profile.cpp) ← `std::__cxx11::basic_string::_M_construct` (../../../../../../usr/include/c++/12/bits/basic_string.tcc) ← `std::__cxx11::basic_string::basic_string` (../../../../../../usr/include/c++/12/bits/basic_string.h) ← `fmt::v11::to_string` (../../../../../../src/fmt/include/fmt/format.h) ← `fmt::v11::vformat[abi:cxx11]` (../../../../../../src/fmt/include/fmt/format-inl.h) |
| 0.0% |  0 B |       1 | `std::__cxx11::basic_string::_M_construct` (../../../../../../usr/include/c++/12/bits/basic_string.tcc) ← `std::__cxx11::basic_string::basic_string` (../../../../../../usr/include/c++/12/bits/basic_string.h) ← `fmt::v11::to_string` (../../../../../../src/fmt/include/fmt/format.h) ← `fmt::v11::vformat[abi:cxx11]` (../../../../../../src/fmt/include/fmt/format-inl.h) ← `fmt::v11::format` (../../../../../../src/fmt/include/fmt/format.h) ← `main` (../../../../../../out/profile.cpp) ← `std::__cxx11::basic_string::_M_construct` (../../../../../../usr/include/c++/12/bits/basic_string.tcc) ← `std::__cxx11::basic_string::basic_string` (../../../../../../usr/include/c++/12/bits/basic_string.h) ← `fmt::v11::to_string` (../../../../../../src/fmt/include/fmt/format.h) ← `fmt::v11::vformat[abi:cxx11]` (../../../../../../src/fmt/include/fmt/format-inl.h) |

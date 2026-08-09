# Allocated heap profile

Allocated 120 MiB over 1,998,001 objects (62.9 B per object).

| Category         |      % |    Size |   Objects |
| ---------------- | -----: | ------: | --------: |
| Standard library | 100.0% | 120 MiB | 1,998,001 |

## Hottest functions

### Self size

Functions ranked by bytes allocated directly in the function body, excluding callees.

#### Categories

##### Standard library

|      % |    Size |   Objects | Function                                   | Location                                   |
| -----: | ------: | --------: | ------------------------------------------ | ------------------------------------------ |
| 100.0% | 120 MiB | 1,998,000 | `std::__cxx11::basic_string::_M_construct` | `usr/include/c++/12/bits/basic_string.tcc` |
|  <0.1% |   8 KiB |         1 | `std::__new_allocator::allocate`           | `usr/include/c++/12/bits/new_allocator.h`  |

#### Lines

Lines ranked by contribution to each function's self size.

##### `std::__cxx11::basic_string::_M_construct` (`usr/include/c++/12/bits/basic_string.tcc`)

|      % |    Size |   Objects | Location                                       |
| -----: | ------: | --------: | ---------------------------------------------- |
| 100.0% | 120 MiB | 1,998,000 | `usr/include/c++/12/bits/basic_string.tcc:225` |

##### `std::__new_allocator::allocate` (`usr/include/c++/12/bits/new_allocator.h`)

|      % |  Size | Objects | Location                                      |
| -----: | ----: | ------: | --------------------------------------------- |
| 100.0% | 8 KiB |       1 | `usr/include/c++/12/bits/new_allocator.h:137` |

#### Callers

Callers ranked by contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `std::__cxx11::basic_string::_M_construct` (`usr/include/c++/12/bits/basic_string.tcc`)

|      % |    Size |   Objects | Caller                                     | Location                                 |
| -----: | ------: | --------: | ------------------------------------------ | ---------------------------------------- |
| 100.0% | 120 MiB | 1,998,000 | `std::__cxx11::basic_string::basic_string` | `usr/include/c++/12/bits/basic_string.h` |

##### `std::__new_allocator::allocate` (`usr/include/c++/12/bits/new_allocator.h`)

|      % |  Size | Objects | Caller                            | Location                                 |
| -----: | ----: | ------: | --------------------------------- | ---------------------------------------- |
| 100.0% | 8 KiB |       1 | `std::allocator_traits::allocate` | `usr/include/c++/12/bits/alloc_traits.h` |

### Total size

Functions ranked by total bytes allocated in the function and all its callees.

|      % |    Size |   Objects | Function                                   | Location                                   |
| -----: | ------: | --------: | ------------------------------------------ | ------------------------------------------ |
| 100.0% | 120 MiB | 1,998,001 | `main`                                     | `out/profile.cpp`                          |
| 100.0% | 120 MiB | 1,998,001 | `_start`                                   | `<unknown>`                                |
| 100.0% | 120 MiB | 1,998,000 | `std::__cxx11::basic_string::_M_construct` | `usr/include/c++/12/bits/basic_string.tcc` |
| 100.0% | 120 MiB | 1,998,000 | `std::__cxx11::basic_string::basic_string` | `usr/include/c++/12/bits/basic_string.h`   |
| 100.0% | 120 MiB | 1,998,000 | `fmt::v11::to_string`                      | `src/fmt/include/fmt/format.h`             |
| 100.0% | 120 MiB | 1,998,000 | `fmt::v11::vformat[abi:cxx11]`             | `src/fmt/include/fmt/format-inl.h`         |
| 100.0% | 120 MiB | 1,998,000 | `fmt::v11::format`                         | `src/fmt/include/fmt/format.h`             |
|  <0.1% |   8 KiB |         1 | `std::__new_allocator::allocate`           | `usr/include/c++/12/bits/new_allocator.h`  |
|  <0.1% |   8 KiB |         1 | `std::allocator_traits::allocate`          | `usr/include/c++/12/bits/alloc_traits.h`   |
|  <0.1% |   8 KiB |         1 | `std::_Vector_base::_M_allocate`           | `usr/include/c++/12/bits/stl_vector.h`     |
|  <0.1% |   8 KiB |         1 | `std::vector::reserve`                     | `usr/include/c++/12/bits/vector.tcc`       |

#### Categories

##### Standard library

|      % |    Size |   Objects | Function                                   | Location                                   |
| -----: | ------: | --------: | ------------------------------------------ | ------------------------------------------ |
| 100.0% | 120 MiB | 1,998,000 | `std::__cxx11::basic_string::_M_construct` | `usr/include/c++/12/bits/basic_string.tcc` |
| 100.0% | 120 MiB | 1,998,000 | `std::__cxx11::basic_string::basic_string` | `usr/include/c++/12/bits/basic_string.h`   |
|  <0.1% |   8 KiB |         1 | `std::__new_allocator::allocate`           | `usr/include/c++/12/bits/new_allocator.h`  |
|  <0.1% |   8 KiB |         1 | `std::allocator_traits::allocate`          | `usr/include/c++/12/bits/alloc_traits.h`   |
|  <0.1% |   8 KiB |         1 | `std::_Vector_base::_M_allocate`           | `usr/include/c++/12/bits/stl_vector.h`     |
|  <0.1% |   8 KiB |         1 | `std::vector::reserve`                     | `usr/include/c++/12/bits/vector.tcc`       |

#### Callees

Callees ranked by contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `main` (`out/profile.cpp`)

|      % |    Size |   Objects | Callee                 | Location                             |
| -----: | ------: | --------: | ---------------------- | ------------------------------------ |
| 100.0% | 120 MiB | 1,998,000 | `fmt::v11::format`     | `src/fmt/include/fmt/format.h`       |
|  <0.1% |   8 KiB |         1 | `std::vector::reserve` | `usr/include/c++/12/bits/vector.tcc` |

##### `_start` (`<unknown>`)

|      % |    Size |   Objects | Callee | Location          |
| -----: | ------: | --------: | ------ | ----------------- |
| 100.0% | 120 MiB | 1,998,001 | `main` | `out/profile.cpp` |

##### `std::__cxx11::basic_string::_M_construct` (`usr/include/c++/12/bits/basic_string.tcc`)

|    % |     Size | Objects | Callee   | Location    |
| ---: | -------: | ------: | -------- | ----------- |
| 0.8% | 1016 KiB |  14,280 | `_start` | `<unknown>` |

##### `std::__cxx11::basic_string::basic_string` (`usr/include/c++/12/bits/basic_string.h`)

|      % |    Size |   Objects | Callee                                     | Location                                   |
| -----: | ------: | --------: | ------------------------------------------ | ------------------------------------------ |
| 100.0% | 120 MiB | 1,998,000 | `std::__cxx11::basic_string::_M_construct` | `usr/include/c++/12/bits/basic_string.tcc` |

##### `fmt::v11::to_string` (`src/fmt/include/fmt/format.h`)

|      % |    Size |   Objects | Callee                                     | Location                                 |
| -----: | ------: | --------: | ------------------------------------------ | ---------------------------------------- |
| 100.0% | 120 MiB | 1,998,000 | `std::__cxx11::basic_string::basic_string` | `usr/include/c++/12/bits/basic_string.h` |

##### `fmt::v11::vformat[abi:cxx11]` (`src/fmt/include/fmt/format-inl.h`)

|      % |    Size |   Objects | Callee                | Location                       |
| -----: | ------: | --------: | --------------------- | ------------------------------ |
| 100.0% | 120 MiB | 1,998,000 | `fmt::v11::to_string` | `src/fmt/include/fmt/format.h` |

##### `fmt::v11::format` (`src/fmt/include/fmt/format.h`)

|      % |    Size |   Objects | Callee                         | Location                           |
| -----: | ------: | --------: | ------------------------------ | ---------------------------------- |
| 100.0% | 120 MiB | 1,998,000 | `fmt::v11::vformat[abi:cxx11]` | `src/fmt/include/fmt/format-inl.h` |

##### `std::allocator_traits::allocate` (`usr/include/c++/12/bits/alloc_traits.h`)

|      % |  Size | Objects | Callee                           | Location                                  |
| -----: | ----: | ------: | -------------------------------- | ----------------------------------------- |
| 100.0% | 8 KiB |       1 | `std::__new_allocator::allocate` | `usr/include/c++/12/bits/new_allocator.h` |

##### `std::_Vector_base::_M_allocate` (`usr/include/c++/12/bits/stl_vector.h`)

|      % |  Size | Objects | Callee                            | Location                                 |
| -----: | ----: | ------: | --------------------------------- | ---------------------------------------- |
| 100.0% | 8 KiB |       1 | `std::allocator_traits::allocate` | `usr/include/c++/12/bits/alloc_traits.h` |

##### `std::vector::reserve` (`usr/include/c++/12/bits/vector.tcc`)

|      % |  Size | Objects | Callee                           | Location                               |
| -----: | ----: | ------: | -------------------------------- | -------------------------------------- |
| 100.0% | 8 KiB |       1 | `std::_Vector_base::_M_allocate` | `usr/include/c++/12/bits/stl_vector.h` |

## Hottest call stacks

Call stacks ranked by bytes allocated in their leaf frame.

|     % |     Size |   Objects | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ----: | -------: | --------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 99.2% |  119 MiB | 1,983,720 | `std::__cxx11::basic_string::_M_construct` (`usr/include/c++/12/bits/basic_string.tcc`) ← `std::__cxx11::basic_string::basic_string` (`usr/include/c++/12/bits/basic_string.h`) ← `fmt::v11::to_string` (`src/fmt/include/fmt/format.h`) ← `fmt::v11::vformat[abi:cxx11]` (`src/fmt/include/fmt/format-inl.h`) ← `fmt::v11::format` (`src/fmt/include/fmt/format.h`) ← `main` (`out/profile.cpp`) ← `_start`                                                                                                                                                                                                                                                                                                                  |
|  0.8% | 1016 KiB |    14,280 | `std::__cxx11::basic_string::_M_construct` (`usr/include/c++/12/bits/basic_string.tcc`) ← `std::__cxx11::basic_string::basic_string` (`usr/include/c++/12/bits/basic_string.h`) ← `fmt::v11::to_string` (`src/fmt/include/fmt/format.h`) ← `fmt::v11::vformat[abi:cxx11]` (`src/fmt/include/fmt/format-inl.h`) ← `fmt::v11::format` (`src/fmt/include/fmt/format.h`) ← `main` (`out/profile.cpp`) ← `_start` ← `std::__cxx11::basic_string::_M_construct` (`usr/include/c++/12/bits/basic_string.tcc`) ← `std::__cxx11::basic_string::basic_string` (`usr/include/c++/12/bits/basic_string.h`) ← `fmt::v11::to_string` (`src/fmt/include/fmt/format.h`) ← `fmt::v11::vformat[abi:cxx11]` (`src/fmt/include/fmt/format-inl.h`) |
| <0.1% |    8 KiB |         1 | `std::__new_allocator::allocate` (`usr/include/c++/12/bits/new_allocator.h`) ← `std::allocator_traits::allocate` (`usr/include/c++/12/bits/alloc_traits.h`) ← `std::_Vector_base::_M_allocate` (`usr/include/c++/12/bits/stl_vector.h`) ← `std::vector::reserve` (`usr/include/c++/12/bits/vector.tcc`) ← `main` (`out/profile.cpp`) ← `_start`                                                                                                                                                                                                                                                                                                                                                                               |

# Retained heap profile

Retained 0 B over 0 objects.

No bytes retained in any object.

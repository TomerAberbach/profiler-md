# Allocated heap profile

Allocated 120 MiB over 1,998,001 objects (62.9 B per object).

| Category         |      % |    Size |   Objects |
| ---------------- | -----: | ------: | --------: |
| Standard library | 100.0% | 120 MiB | 1,998,001 |

Paths starting with `./` or `../` are relative to `/src/fmt/include/fmt/`.

## Call tree

Call paths to the hottest functions.

```
└── 120 MiB (100.0%) [[via 8 frames]] std::__cxx11::basic_string::_M_construct  /usr/include/c++/12/bits/basic_string.tcc:217
```

## Hottest functions

### Self size

Functions with the most bytes allocated within the function body, excluding callees.

#### Categories

Categories accounting for at least 1.0% of self size.

##### Standard library

|      % |    Size |   Objects | Function                                   | Location                                        |
| -----: | ------: | --------: | ------------------------------------------ | ----------------------------------------------- |
| 100.0% | 120 MiB | 1,998,000 | `std::__cxx11::basic_string::_M_construct` | `/usr/include/c++/12/bits/basic_string.tcc:217` |
|  <0.1% |   8 KiB |         1 | `std::__new_allocator::allocate`           | `/usr/include/c++/12/bits/new_allocator.h:112`  |

#### Lines

Lines with the largest contribution to each function's self size.

##### `std::__cxx11::basic_string::_M_construct` (`/usr/include/c++/12/bits/basic_string.tcc:217`)

|      % |    Size |   Objects | Location                                        |
| -----: | ------: | --------: | ----------------------------------------------- |
| 100.0% | 120 MiB | 1,998,000 | `/usr/include/c++/12/bits/basic_string.tcc:225` |

##### `std::__new_allocator::allocate` (`/usr/include/c++/12/bits/new_allocator.h:112`)

|      % |  Size | Objects | Location                                       |
| -----: | ----: | ------: | ---------------------------------------------- |
| 100.0% | 8 KiB |       1 | `/usr/include/c++/12/bits/new_allocator.h:137` |

#### Callers

Callers with the largest contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `std::__cxx11::basic_string::_M_construct` (`/usr/include/c++/12/bits/basic_string.tcc:217`)

|      % |    Size |   Objects | Caller                                     | Location                                      |
| -----: | ------: | --------: | ------------------------------------------ | --------------------------------------------- |
| 100.0% | 120 MiB | 1,998,000 | `std::__cxx11::basic_string::basic_string` | `/usr/include/c++/12/bits/basic_string.h:612` |

##### `std::__new_allocator::allocate` (`/usr/include/c++/12/bits/new_allocator.h:112`)

|      % |  Size | Objects | Caller                            | Location                                      |
| -----: | ----: | ------: | --------------------------------- | --------------------------------------------- |
| 100.0% | 8 KiB |       1 | `std::allocator_traits::allocate` | `/usr/include/c++/12/bits/alloc_traits.h:463` |

### Total size

Functions with the most bytes allocated within the function and its callees.

|      % |    Size |   Objects | Function                                   | Location                                        |
| -----: | ------: | --------: | ------------------------------------------ | ----------------------------------------------- |
| 100.0% | 120 MiB | 1,998,001 | `main`                                     | `/out/profile.cpp:8`                            |
| 100.0% | 120 MiB | 1,998,001 | `(anonymous)`                              | `<unknown>`                                     |
| 100.0% | 120 MiB | 1,998,001 | `__libc_start_main`                        | `<unknown>`                                     |
| 100.0% | 120 MiB | 1,998,001 | `_start`                                   | `<unknown>`                                     |
| 100.0% | 120 MiB | 1,998,000 | `std::__cxx11::basic_string::_M_construct` | `/usr/include/c++/12/bits/basic_string.tcc:217` |
| 100.0% | 120 MiB | 1,998,000 | `std::__cxx11::basic_string::basic_string` | `/usr/include/c++/12/bits/basic_string.h:612`   |
| 100.0% | 120 MiB | 1,998,000 | `fmt::v11::to_string`                      | `./format.h:882`                                |
| 100.0% | 120 MiB | 1,998,000 | `fmt::v11::vformat[abi:cxx11]`             | `./format-inl.h:1442`                           |
| 100.0% | 120 MiB | 1,998,000 | `fmt::v11::format`                         | `./format.h:4198`                               |
|  <0.1% |   8 KiB |         1 | `std::__new_allocator::allocate`           | `/usr/include/c++/12/bits/new_allocator.h:112`  |
|  <0.1% |   8 KiB |         1 | `std::allocator_traits::allocate`          | `/usr/include/c++/12/bits/alloc_traits.h:463`   |
|  <0.1% |   8 KiB |         1 | `std::_Vector_base::_M_allocate`           | `/usr/include/c++/12/bits/stl_vector.h:375`     |
|  <0.1% |   8 KiB |         1 | `std::vector::reserve`                     | `/usr/include/c++/12/bits/vector.tcc:67`        |

#### Categories

Categories accounting for at least 1.0% of self size.

##### Standard library

|      % |    Size |   Objects | Function                                   | Location                                        |
| -----: | ------: | --------: | ------------------------------------------ | ----------------------------------------------- |
| 100.0% | 120 MiB | 1,998,000 | `std::__cxx11::basic_string::_M_construct` | `/usr/include/c++/12/bits/basic_string.tcc:217` |
| 100.0% | 120 MiB | 1,998,000 | `std::__cxx11::basic_string::basic_string` | `/usr/include/c++/12/bits/basic_string.h:612`   |
|  <0.1% |   8 KiB |         1 | `std::__new_allocator::allocate`           | `/usr/include/c++/12/bits/new_allocator.h:112`  |
|  <0.1% |   8 KiB |         1 | `std::allocator_traits::allocate`          | `/usr/include/c++/12/bits/alloc_traits.h:463`   |
|  <0.1% |   8 KiB |         1 | `std::_Vector_base::_M_allocate`           | `/usr/include/c++/12/bits/stl_vector.h:375`     |
|  <0.1% |   8 KiB |         1 | `std::vector::reserve`                     | `/usr/include/c++/12/bits/vector.tcc:67`        |

#### Callers

Callers with the largest contribution to each function's total size. Inlining can make caller attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `main` (`/out/profile.cpp:8`)

|      % |    Size |   Objects | Caller        | Location    |
| -----: | ------: | --------: | ------------- | ----------- |
| 100.0% | 120 MiB | 1,998,001 | `(anonymous)` | `<unknown>` |

##### `(anonymous)` (`<unknown>`)

|      % |    Size |   Objects | Caller              | Location    |
| -----: | ------: | --------: | ------------------- | ----------- |
| 100.0% | 120 MiB | 1,998,001 | `__libc_start_main` | `<unknown>` |

##### `__libc_start_main` (`<unknown>`)

|      % |    Size |   Objects | Caller   | Location    |
| -----: | ------: | --------: | -------- | ----------- |
| 100.0% | 120 MiB | 1,998,001 | `_start` | `<unknown>` |

##### `std::__cxx11::basic_string::_M_construct` (`/usr/include/c++/12/bits/basic_string.tcc:217`)

|      % |    Size |   Objects | Caller                                     | Location                                      |
| -----: | ------: | --------: | ------------------------------------------ | --------------------------------------------- |
| 100.0% | 120 MiB | 1,998,000 | `std::__cxx11::basic_string::basic_string` | `/usr/include/c++/12/bits/basic_string.h:612` |

##### `std::__cxx11::basic_string::basic_string` (`/usr/include/c++/12/bits/basic_string.h:612`)

|      % |    Size |   Objects | Caller                | Location         |
| -----: | ------: | --------: | --------------------- | ---------------- |
| 100.0% | 120 MiB | 1,998,000 | `fmt::v11::to_string` | `./format.h:882` |

##### `fmt::v11::to_string` (`./format.h:882`)

|      % |    Size |   Objects | Caller                         | Location              |
| -----: | ------: | --------: | ------------------------------ | --------------------- |
| 100.0% | 120 MiB | 1,998,000 | `fmt::v11::vformat[abi:cxx11]` | `./format-inl.h:1442` |

##### `fmt::v11::vformat[abi:cxx11]` (`./format-inl.h:1442`)

|      % |    Size |   Objects | Caller             | Location          |
| -----: | ------: | --------: | ------------------ | ----------------- |
| 100.0% | 120 MiB | 1,998,000 | `fmt::v11::format` | `./format.h:4198` |

##### `fmt::v11::format` (`./format.h:4198`)

|      % |    Size |   Objects | Caller | Location             |
| -----: | ------: | --------: | ------ | -------------------- |
| 100.0% | 120 MiB | 1,998,000 | `main` | `/out/profile.cpp:8` |

##### `std::__new_allocator::allocate` (`/usr/include/c++/12/bits/new_allocator.h:112`)

|      % |  Size | Objects | Caller                            | Location                                      |
| -----: | ----: | ------: | --------------------------------- | --------------------------------------------- |
| 100.0% | 8 KiB |       1 | `std::allocator_traits::allocate` | `/usr/include/c++/12/bits/alloc_traits.h:463` |

##### `std::allocator_traits::allocate` (`/usr/include/c++/12/bits/alloc_traits.h:463`)

|      % |  Size | Objects | Caller                           | Location                                    |
| -----: | ----: | ------: | -------------------------------- | ------------------------------------------- |
| 100.0% | 8 KiB |       1 | `std::_Vector_base::_M_allocate` | `/usr/include/c++/12/bits/stl_vector.h:375` |

##### `std::_Vector_base::_M_allocate` (`/usr/include/c++/12/bits/stl_vector.h:375`)

|      % |  Size | Objects | Caller                 | Location                                 |
| -----: | ----: | ------: | ---------------------- | ---------------------------------------- |
| 100.0% | 8 KiB |       1 | `std::vector::reserve` | `/usr/include/c++/12/bits/vector.tcc:67` |

##### `std::vector::reserve` (`/usr/include/c++/12/bits/vector.tcc:67`)

|      % |  Size | Objects | Caller | Location             |
| -----: | ----: | ------: | ------ | -------------------- |
| 100.0% | 8 KiB |       1 | `main` | `/out/profile.cpp:8` |

#### Callees

Callees with the largest contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum to more than 100% for recursive calls.

##### `main` (`/out/profile.cpp:8`)

|      % |    Size |   Objects | Callee                 | Location                                 |
| -----: | ------: | --------: | ---------------------- | ---------------------------------------- |
| 100.0% | 120 MiB | 1,998,000 | `fmt::v11::format`     | `./format.h:4198`                        |
|  <0.1% |   8 KiB |         1 | `std::vector::reserve` | `/usr/include/c++/12/bits/vector.tcc:67` |

##### `(anonymous)` (`<unknown>`)

|      % |    Size |   Objects | Callee | Location             |
| -----: | ------: | --------: | ------ | -------------------- |
| 100.0% | 120 MiB | 1,998,001 | `main` | `/out/profile.cpp:8` |

##### `__libc_start_main` (`<unknown>`)

|      % |    Size |   Objects | Callee        | Location    |
| -----: | ------: | --------: | ------------- | ----------- |
| 100.0% | 120 MiB | 1,998,001 | `(anonymous)` | `<unknown>` |

##### `_start` (`<unknown>`)

|      % |    Size |   Objects | Callee              | Location    |
| -----: | ------: | --------: | ------------------- | ----------- |
| 100.0% | 120 MiB | 1,998,001 | `__libc_start_main` | `<unknown>` |

##### `std::__cxx11::basic_string::basic_string` (`/usr/include/c++/12/bits/basic_string.h:612`)

|      % |    Size |   Objects | Callee                                     | Location                                        |
| -----: | ------: | --------: | ------------------------------------------ | ----------------------------------------------- |
| 100.0% | 120 MiB | 1,998,000 | `std::__cxx11::basic_string::_M_construct` | `/usr/include/c++/12/bits/basic_string.tcc:217` |

##### `fmt::v11::to_string` (`./format.h:882`)

|      % |    Size |   Objects | Callee                                     | Location                                      |
| -----: | ------: | --------: | ------------------------------------------ | --------------------------------------------- |
| 100.0% | 120 MiB | 1,998,000 | `std::__cxx11::basic_string::basic_string` | `/usr/include/c++/12/bits/basic_string.h:612` |

##### `fmt::v11::vformat[abi:cxx11]` (`./format-inl.h:1442`)

|      % |    Size |   Objects | Callee                | Location         |
| -----: | ------: | --------: | --------------------- | ---------------- |
| 100.0% | 120 MiB | 1,998,000 | `fmt::v11::to_string` | `./format.h:882` |

##### `fmt::v11::format` (`./format.h:4198`)

|      % |    Size |   Objects | Callee                         | Location              |
| -----: | ------: | --------: | ------------------------------ | --------------------- |
| 100.0% | 120 MiB | 1,998,000 | `fmt::v11::vformat[abi:cxx11]` | `./format-inl.h:1442` |

##### `std::allocator_traits::allocate` (`/usr/include/c++/12/bits/alloc_traits.h:463`)

|      % |  Size | Objects | Callee                           | Location                                       |
| -----: | ----: | ------: | -------------------------------- | ---------------------------------------------- |
| 100.0% | 8 KiB |       1 | `std::__new_allocator::allocate` | `/usr/include/c++/12/bits/new_allocator.h:112` |

##### `std::_Vector_base::_M_allocate` (`/usr/include/c++/12/bits/stl_vector.h:375`)

|      % |  Size | Objects | Callee                            | Location                                      |
| -----: | ----: | ------: | --------------------------------- | --------------------------------------------- |
| 100.0% | 8 KiB |       1 | `std::allocator_traits::allocate` | `/usr/include/c++/12/bits/alloc_traits.h:463` |

##### `std::vector::reserve` (`/usr/include/c++/12/bits/vector.tcc:67`)

|      % |  Size | Objects | Callee                           | Location                                    |
| -----: | ----: | ------: | -------------------------------- | ------------------------------------------- |
| 100.0% | 8 KiB |       1 | `std::_Vector_base::_M_allocate` | `/usr/include/c++/12/bits/stl_vector.h:375` |

## Hottest call stacks

Call stacks with the most bytes allocated in their leaf frame.

Common call stack: `main` (`/out/profile.cpp:8`) ← `(anonymous)` ← `__libc_start_main` ← `_start`

|      % |    Size |   Objects | Call stack                                                                                                                                                                                                                                                                                                                             |
| -----: | ------: | --------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 100.0% | 120 MiB | 1,998,000 | `std::__cxx11::basic_string::_M_construct` (`/usr/include/c++/12/bits/basic_string.tcc:217`) ← `std::__cxx11::basic_string::basic_string` (`/usr/include/c++/12/bits/basic_string.h:612`) ← `fmt::v11::to_string` (`./format.h:882`) ← `fmt::v11::vformat[abi:cxx11]` (`./format-inl.h:1442`) ← `fmt::v11::format` (`./format.h:4198`) |
|  <0.1% |   8 KiB |         1 | `std::__new_allocator::allocate` (`/usr/include/c++/12/bits/new_allocator.h:112`) ← `std::allocator_traits::allocate` (`/usr/include/c++/12/bits/alloc_traits.h:463`) ← `std::_Vector_base::_M_allocate` (`/usr/include/c++/12/bits/stl_vector.h:375`) ← `std::vector::reserve` (`/usr/include/c++/12/bits/vector.tcc:67`)             |

# Retained heap profile

Retained 0 B over 0 objects.

Paths starting with `./` or `../` are relative to `/src/fmt/include/fmt/`.

No bytes retained in any object.

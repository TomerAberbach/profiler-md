# Heap snapshot

Held 136 MiB over 1,716,926 nodes and 5,832,237 edges.

| Category           |     % |     Size |   Nodes |
| ------------------ | ----: | -------: | ------: |
| String             | 35.0% | 47.7 MiB | 294,016 |
| Array              | 27.9% | 38.1 MiB | 578,379 |
| Code               | 22.6% | 30.8 MiB | 450,216 |
| Internal           | 10.7% | 14.6 MiB | 256,755 |
| Object             |  3.2% | 4.35 MiB |  97,465 |
| Symbol             |  0.4% |  619 KiB |  28,696 |
| Function           | <0.1% |   66 KiB |   8,396 |
| Number             | <0.1% | 42.6 KiB |   2,938 |
| Regular expression | <0.1% | 1.34 KiB |      43 |
| Native             | <0.1% |     48 B |       3 |
| Synthetic          | <0.1% |     16 B |      19 |

## Largest constructors

### Self size

Constructors with the most instance bytes, excluding referenced nodes.

#### Categories

Categories accounting for at least 1.0% of self size.

##### Object

|    % |    Size | Instances | Constructor                 |
| ---: | ------: | --------: | --------------------------- |
| 0.6% | 885 KiB |    14,864 | `<foreign memory - malloc>` |

#### Retainer paths

Retainer paths with the largest contribution to each constructor's self size.

##### `<foreign memory - malloc>`

|     % |     Size | Instances | Path                                                                                                                             |
| ----: | -------: | --------: | -------------------------------------------------------------------------------------------------------------------------------- |
| 20.9% |  185 KiB |         2 | `<foreign memory - malloc> ←.<native>– Memory{Tuple{UInt64, UInt64, UInt64}} ←.ref.mem– Array{Tuple{UInt64, UInt64, UInt64}, 1}` |
| 19.8% |  175 KiB |     4,715 | `<foreign memory - malloc> ←.<native>– Memory{UInt8} ←.speckeyset– Method`                                                       |
|  8.4% |   74 KiB |        17 | `<foreign memory - malloc> ←.<native>– Memory{UInt16} ←.speckeyset– Method`                                                      |
|  7.2% |   64 KiB |         1 | `<foreign memory - malloc> ←.<native>– Memory{UInt16} ←.bindingkeyset– Base`                                                     |
|  2.8% | 24.9 KiB |       796 | `<foreign memory - malloc> ←.<native>– Memory{UInt64} ←.ref.mem– Array{UInt64, 1} ←.root_blocks– Method`                         |

### Retained size

Constructors with the most instance bytes, including nodes only the instances keep alive.

#### Categories

Categories accounting for at least 1.0% of self size.

##### Object

|    % |    Size | Instances | Constructor                 |
| ---: | ------: | --------: | --------------------------- |
| 0.6% | 885 KiB |    14,864 | `<foreign memory - malloc>` |

#### Retainer paths

Retainer paths with the largest contribution to each constructor's retained size.

##### `<foreign memory - malloc>`

|     % |     Size | Instances | Path                                                                                                                             |
| ----: | -------: | --------: | -------------------------------------------------------------------------------------------------------------------------------- |
| 20.9% |  185 KiB |         2 | `<foreign memory - malloc> ←.<native>– Memory{Tuple{UInt64, UInt64, UInt64}} ←.ref.mem– Array{Tuple{UInt64, UInt64, UInt64}, 1}` |
| 19.8% |  175 KiB |     4,715 | `<foreign memory - malloc> ←.<native>– Memory{UInt8} ←.speckeyset– Method`                                                       |
|  8.4% |   74 KiB |        17 | `<foreign memory - malloc> ←.<native>– Memory{UInt16} ←.speckeyset– Method`                                                      |
|  7.2% |   64 KiB |         1 | `<foreign memory - malloc> ←.<native>– Memory{UInt16} ←.bindingkeyset– Base`                                                     |
|  2.8% | 24.9 KiB |       796 | `<foreign memory - malloc> ←.<native>– Memory{UInt64} ←.ref.mem– Array{UInt64, 1} ←.root_blocks– Method`                         |

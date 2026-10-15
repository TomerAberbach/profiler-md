# Heap snapshot

Held 136 MiB over 1,715,213 nodes and 5,824,332 edges.

| Category           |     % |     Size |   Nodes |
| ------------------ | ----: | -------: | ------: |
| String             | 34.9% | 47.5 MiB | 293,772 |
| Array              | 28.0% |   38 MiB | 577,617 |
| Code               | 22.6% | 30.8 MiB | 449,739 |
| Internal           | 10.7% | 14.6 MiB | 256,532 |
| Object             |  3.2% | 4.34 MiB |  97,459 |
| Symbol             |  0.4% |  619 KiB |  28,695 |
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
| 0.6% | 883 KiB |    14,860 | `<foreign memory - malloc>` |

#### Retainer paths

Retainer paths with the largest contribution to each constructor's self size.

##### `<foreign memory - malloc>`

|     % |    Size | Instances | Path                                                                                                                             |
| ----: | ------: | --------: | -------------------------------------------------------------------------------------------------------------------------------- |
| 21.0% | 185 KiB |         2 | `<foreign memory - malloc> ←.<native>– Memory{Tuple{UInt64, UInt64, UInt64}} ←.ref.mem– Array{Tuple{UInt64, UInt64, UInt64}, 1}` |
|  7.2% |  64 KiB |         1 | `<foreign memory - malloc> ←.<native>– Memory{UInt16} ←.bindingkeyset– Base`                                                     |
|  1.8% |  16 KiB |         1 | `<foreign memory - malloc> ←.<native>– Memory{UInt16}`                                                                           |
|  1.8% |  16 KiB |         1 | `<foreign memory - malloc> ←.<native>– Memory{UInt16} ←.speckeyset– Method`                                                      |
|  1.8% |  16 KiB |         1 | `<foreign memory - malloc> ←.<native>– Memory{UInt16} ←.bindingkeyset– LinearAlgebra`                                            |

### Retained size

Constructors with the most instance bytes, including nodes only the instances keep alive.

#### Categories

Categories accounting for at least 1.0% of self size.

##### Object

|    % |    Size | Instances | Constructor                 |
| ---: | ------: | --------: | --------------------------- |
| 0.6% | 883 KiB |    14,860 | `<foreign memory - malloc>` |

#### Retainer paths

Retainer paths with the largest contribution to each constructor's retained size.

##### `<foreign memory - malloc>`

|     % |    Size | Instances | Path                                                                                                                             |
| ----: | ------: | --------: | -------------------------------------------------------------------------------------------------------------------------------- |
| 21.0% | 185 KiB |         2 | `<foreign memory - malloc> ←.<native>– Memory{Tuple{UInt64, UInt64, UInt64}} ←.ref.mem– Array{Tuple{UInt64, UInt64, UInt64}, 1}` |
|  7.2% |  64 KiB |         1 | `<foreign memory - malloc> ←.<native>– Memory{UInt16} ←.bindingkeyset– Base`                                                     |
|  1.8% |  16 KiB |         1 | `<foreign memory - malloc> ←.<native>– Memory{UInt16}`                                                                           |
|  1.8% |  16 KiB |         1 | `<foreign memory - malloc> ←.<native>– Memory{UInt16} ←.speckeyset– Method`                                                      |
|  1.8% |  16 KiB |         1 | `<foreign memory - malloc> ←.<native>– Memory{UInt16} ←.bindingkeyset– LinearAlgebra`                                            |

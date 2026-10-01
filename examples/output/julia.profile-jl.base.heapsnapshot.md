# Heap snapshot

Allocated 136 MiB across 1,716,926 nodes and 5,832,237 edges.

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

Constructors ranked by bytes allocated for their instances, excluding nodes kept reachable by them.

#### Categories

##### Object

|    % |    Size | Instances | Constructor                 |
| ---: | ------: | --------: | --------------------------- |
| 0.6% | 885 KiB |    14,864 | `<foreign memory - malloc>` |

#### Instances

Instances ranked by contribution to each constructor's self size.

##### `<foreign memory - malloc>`

|     % |    Size | Instances | Path                                                                                                 |
| ----: | ------: | --------: | ---------------------------------------------------------------------------------------------------- |
| 20.9% | 185 KiB |         2 | `.<native> Memory{Tuple{UInt64, UInt64, UInt64}} ← .ref.mem Array{Tuple{UInt64, UInt64, UInt64}, 1}` |
|  7.2% |  64 KiB |         1 | `.<native> Memory{UInt16} ← .bindingkeyset Base`                                                     |
|  1.8% |  16 KiB |         1 | `.<native> Memory{UInt16}`                                                                           |
|  1.8% |  16 KiB |         1 | `.<native> Memory{UInt16} ← .speckeyset Method`                                                      |
|  1.8% |  16 KiB |         1 | `.<native> Memory{UInt16} ← .bindingkeyset LinearAlgebra`                                            |

### Retained size

Constructors ranked by bytes allocated for their instances and all nodes that would be freed if their instances were garbage collected.

#### Categories

##### Object

|    % |    Size | Instances | Constructor                 |
| ---: | ------: | --------: | --------------------------- |
| 0.6% | 885 KiB |    14,864 | `<foreign memory - malloc>` |

#### Instances

Instances ranked by contribution to each constructor's retained size.

##### `<foreign memory - malloc>`

|     % |    Size | Instances | Path                                                                                                 |
| ----: | ------: | --------: | ---------------------------------------------------------------------------------------------------- |
| 20.9% | 185 KiB |         2 | `.<native> Memory{Tuple{UInt64, UInt64, UInt64}} ← .ref.mem Array{Tuple{UInt64, UInt64, UInt64}, 1}` |
|  7.2% |  64 KiB |         1 | `.<native> Memory{UInt16} ← .bindingkeyset Base`                                                     |
|  1.8% |  16 KiB |         1 | `.<native> Memory{UInt16}`                                                                           |
|  1.8% |  16 KiB |         1 | `.<native> Memory{UInt16} ← .speckeyset Method`                                                      |
|  1.8% |  16 KiB |         1 | `.<native> Memory{UInt16} ← .bindingkeyset LinearAlgebra`                                            |

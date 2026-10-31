# Heap snapshot diff

Held 135 MiB → 136 MiB (+1.2 MiB, +0.9%) over 1,716,917 → 1,715,213 nodes and 5,635,607 → 5,824,331 edges.

| Category           | Change |        Delta |             % |                Size |             Nodes |
| ------------------ | -----: | -----------: | ------------: | ------------------: | ----------------: |
| String             |  -0.4% | -211.859 KiB | 35.4% → 35.0% | 47.7 MiB → 47.5 MiB | 294,016 → 293,772 |
| Array              |  +4.0% |   +1.454 MiB | 27.1% → 28.0% |   36.5 MiB → 38 MiB | 578,376 → 577,614 |
| Code               |  -0.1% |  -34.617 KiB | 22.9% → 22.7% |            30.8 MiB | 450,216 → 449,739 |
| Internal           |  -0.1% |  -13.281 KiB | 10.8% → 10.7% |            14.6 MiB | 256,752 → 256,531 |
| Object             |    ~0% |       -260 B |          3.2% |            4.34 MiB |   97,462 → 97,463 |
| Symbol             |    ~0% |        -34 B |          0.4% |             618 KiB |   28,696 → 28,695 |
| Function           |   0.0% |          0 B |         <0.1% |              66 KiB |             8,396 |
| Number             |   0.0% |          0 B |         <0.1% |            42.6 KiB |             2,938 |
| Regular expression |   0.0% |          0 B |         <0.1% |            1.34 KiB |                43 |
| Native             |   0.0% |          0 B |         <0.1% |                48 B |                 3 |
| Synthetic          |   0.0% |          0 B |         <0.1% |                16 B |                19 |

`B ←(several paths)– A` means `A` retains `B` only through other nodes, and `(several C paths)` means every path passes through an instance of `C`, though no single instance retains `B`.

## Largest constructors

### Self size

#### Improvements

Constructors with the largest decrease in instance bytes, excluding referenced nodes. Categories account for at least 1.0% of self size on the base or the current side.

##### Object

| Change |  Delta |    % |    Size |       Instances | Constructor                 |
| -----: | -----: | ---: | ------: | --------------: | --------------------------- |
|    ~0% | -164 B | 0.6% | 884 KiB | 14,861 → 14,864 | `<foreign memory - malloc>` |

#### Retainer paths

Retainer paths with the largest change in contribution to each constructor's self size.

##### `<foreign memory - malloc>`

|  Change |  Delta |             % |       Size |     Instances | Path                                                                                                                                                                                                                                                                                                                                                           |
| ------: | -----: | ------------: | ---------: | ------------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|   -0.1% | -160 B | 19.8% → 19.7% |    175 KiB | 4,712 → 4,716 | `<foreign memory - malloc> ←.<native>– Memory{UInt8} ←.speckeyset– Method`                                                                                                                                                                                                                                                                                     |
| removed |  -96 B |  <0.1% → 0.0% | 96 B → 0 B |         3 → 0 | `<foreign memory - malloc> ←.<native>– Memory{UInt64} ←.ref.mem– Array{UInt64, 1} ←.root_blocks– Method ←(several paths)– Core.TypeMapEntry ←[1]– Memory{Any} ←.arg1– Core.TypeMapLevel ←[1387]– Memory{Any} ←.arg1– Core.TypeMapLevel ←[15]– Memory{Any} ←.name1– Core.TypeMapLevel ←[14543]– Memory{Any} ←.arg1– Core.TypeMapLevel ←.defs– Core.MethodTable` |
|     new |  +96 B |  0.0% → <0.1% | 0 B → 96 B |         0 → 3 | `<foreign memory - malloc> ←.<native>– Memory{UInt64} ←.ref.mem– Array{UInt64, 1} ←.root_blocks– Method ←(several paths)– Core.TypeMapEntry ←[1]– Memory{Any} ←.arg1– Core.TypeMapLevel ←[1483]– Memory{Any} ←.arg1– Core.TypeMapLevel ←[15]– Memory{Any} ←.name1– Core.TypeMapLevel ←[14543]– Memory{Any} ←.arg1– Core.TypeMapLevel ←.defs– Core.MethodTable` |
| removed |  -64 B |  <0.1% → 0.0% | 64 B → 0 B |         2 → 0 | `<foreign memory - malloc> ←.<native>– Memory{UInt64} ←.ref.mem– Array{UInt64, 1} ←.root_blocks– Method ←(several paths)– Memory{Any} ←.tname– Core.TypeMapLevel ←[27717]– Memory{Any} ←.arg1– Core.TypeMapLevel ←.defs– Core.MethodTable`                                                                                                                     |
| removed |  -64 B |  <0.1% → 0.0% | 64 B → 0 B |         2 → 0 | `<foreign memory - malloc> ←.<native>– Memory{UInt64} ←.ref.mem– Array{UInt64, 1} ←.root_blocks– Method ←(several paths)– Core.TypeMapLevel ←[11]– Memory{Any} ←.name1– Core.TypeMapLevel ←[27189]– Memory{Any} ←.arg1– Core.TypeMapLevel ←.defs– Core.MethodTable`                                                                                            |

### Retained size

#### Improvements

Constructors with the largest decrease in instance bytes, including nodes only the instances keep alive. Categories account for at least 1.0% of self size on the base or the current side.

##### Object

| Change |  Delta |    % |    Size |       Instances | Constructor                 |
| -----: | -----: | ---: | ------: | --------------: | --------------------------- |
|    ~0% | -164 B | 0.6% | 884 KiB | 14,861 → 14,864 | `<foreign memory - malloc>` |

#### Retainer paths

Retainer paths with the largest change in contribution to each constructor's retained size.

##### `<foreign memory - malloc>`

|  Change |  Delta |             % |       Size |     Instances | Path                                                                                                                                                                                                                                                                                                                                                           |
| ------: | -----: | ------------: | ---------: | ------------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|   -0.1% | -160 B | 19.8% → 19.7% |    175 KiB | 4,712 → 4,716 | `<foreign memory - malloc> ←.<native>– Memory{UInt8} ←.speckeyset– Method`                                                                                                                                                                                                                                                                                     |
| removed |  -96 B |  <0.1% → 0.0% | 96 B → 0 B |         3 → 0 | `<foreign memory - malloc> ←.<native>– Memory{UInt64} ←.ref.mem– Array{UInt64, 1} ←.root_blocks– Method ←(several paths)– Core.TypeMapEntry ←[1]– Memory{Any} ←.arg1– Core.TypeMapLevel ←[1387]– Memory{Any} ←.arg1– Core.TypeMapLevel ←[15]– Memory{Any} ←.name1– Core.TypeMapLevel ←[14543]– Memory{Any} ←.arg1– Core.TypeMapLevel ←.defs– Core.MethodTable` |
|     new |  +96 B |  0.0% → <0.1% | 0 B → 96 B |         0 → 3 | `<foreign memory - malloc> ←.<native>– Memory{UInt64} ←.ref.mem– Array{UInt64, 1} ←.root_blocks– Method ←(several paths)– Core.TypeMapEntry ←[1]– Memory{Any} ←.arg1– Core.TypeMapLevel ←[1483]– Memory{Any} ←.arg1– Core.TypeMapLevel ←[15]– Memory{Any} ←.name1– Core.TypeMapLevel ←[14543]– Memory{Any} ←.arg1– Core.TypeMapLevel ←.defs– Core.MethodTable` |
| removed |  -64 B |  <0.1% → 0.0% | 64 B → 0 B |         2 → 0 | `<foreign memory - malloc> ←.<native>– Memory{UInt64} ←.ref.mem– Array{UInt64, 1} ←.root_blocks– Method ←(several paths)– Memory{Any} ←.tname– Core.TypeMapLevel ←[27717]– Memory{Any} ←.arg1– Core.TypeMapLevel ←.defs– Core.MethodTable`                                                                                                                     |
| removed |  -64 B |  <0.1% → 0.0% | 64 B → 0 B |         2 → 0 | `<foreign memory - malloc> ←.<native>– Memory{UInt64} ←.ref.mem– Array{UInt64, 1} ←.root_blocks– Method ←(several paths)– Core.TypeMapLevel ←[11]– Memory{Any} ←.name1– Core.TypeMapLevel ←[27189]– Memory{Any} ←.arg1– Core.TypeMapLevel ←.defs– Core.MethodTable`                                                                                            |

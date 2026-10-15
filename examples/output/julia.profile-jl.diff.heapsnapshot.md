# Heap snapshot diff

Allocated 136 MiB (-303.768 KiB, -0.2%) across 1,716,926 → 1,715,213 nodes and 5,832,237 → 5,824,332 edges.

| Category           | Change |        Delta |             % |                Size |             Nodes |
| ------------------ | -----: | -----------: | ------------: | ------------------: | ----------------: |
| String             |  -0.4% | -211.864 KiB | 35.0% → 34.9% | 47.7 MiB → 47.5 MiB | 294,016 → 293,772 |
| Array              |  -0.1% |   -42.64 KiB | 27.9% → 28.0% |   38.1 MiB → 38 MiB | 578,379 → 577,617 |
| Code               |  -0.1% |  -34.617 KiB |         22.6% |            30.8 MiB | 450,216 → 449,739 |
| Internal           |  -0.1% |  -13.421 KiB |         10.7% |            14.6 MiB | 256,755 → 256,532 |
| Object             |    ~0% |   -1.191 KiB |          3.2% | 4.35 MiB → 4.34 MiB |   97,465 → 97,459 |
| Symbol             |    ~0% |        -34 B |          0.4% |             619 KiB |   28,696 → 28,695 |
| Function           |   0.0% |          0 B |         <0.1% |              66 KiB |             8,396 |
| Number             |   0.0% |          0 B |         <0.1% |            42.6 KiB |             2,938 |
| Regular expression |   0.0% |          0 B |         <0.1% |            1.34 KiB |                43 |
| Native             |   0.0% |          0 B |         <0.1% |                48 B |                 3 |
| Synthetic          |   0.0% |          0 B |         <0.1% |                16 B |                19 |

## Largest constructors

### Self size

Constructors ranked by bytes allocated for their instances, excluding nodes kept reachable by them.

#### Improvements

Constructors with the largest decrease in self size.

##### Object

| Change |      Delta |    % |              Size |       Instances | Constructor                 |
| -----: | ---------: | ---: | ----------------: | --------------: | --------------------------- |
|  -0.1% | -1.097 KiB | 0.6% | 885 KiB → 883 KiB | 14,864 → 14,860 | `<foreign memory - malloc>` |

#### Instances

Instances with the largest change in contribution to each constructor's self size. `B ←(several paths)– A` means `A` holds `B` only through other nodes, along several paths.

##### `<foreign memory - malloc>`

|  Change |  Delta |            % |            Size |     Instances | Path                                                                                                                                                                                                                                                                                                                                         |
| ------: | -----: | -----------: | --------------: | ------------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|   -1.4% | -1 KiB |  8.4% → 8.3% | 74 KiB → 73 KiB |       17 → 16 | `<foreign memory - malloc> ←.<native>– Memory{UInt16} ←.speckeyset– Method`                                                                                                                                                                                                                                                                  |
|   -0.1% |  -96 B |        19.8% |         175 KiB | 4,715 → 4,713 | `<foreign memory - malloc> ←.<native>– Memory{UInt8} ←.speckeyset– Method`                                                                                                                                                                                                                                                                   |
| removed |  -64 B | <0.1% → 0.0% |      64 B → 0 B |         2 → 0 | `<foreign memory - malloc> ←.<native>– Memory{UInt64} ←.ref.mem– Array{UInt64, 1} ←.root_blocks– Method ←(several paths)– Core.TypeMapLevel ←[22079]– Memory{Any} ←.arg1– Core.TypeMapLevel ←.defs– Core.MethodTable`                                                                                                                        |
| removed |  -64 B | <0.1% → 0.0% |      64 B → 0 B |         2 → 0 | `<foreign memory - malloc> ←.<native>– Memory{UInt64} ←.ref.mem– Array{UInt64, 1} ←.root_blocks– Method ←(several paths)– Core.TypeMapEntry ←.next– Core.TypeMapEntry ←[1965]– Memory{Any} ←.arg1– Core.TypeMapLevel ←[15]– Memory{Any} ←.name1– Core.TypeMapLevel ←[14543]– Memory{Any} ←.arg1– Core.TypeMapLevel ←.defs– Core.MethodTable` |
| removed |  -64 B | <0.1% → 0.0% |      64 B → 0 B |         2 → 0 | `<foreign memory - malloc> ←.<native>– Memory{UInt64} ←.ref.mem– Array{UInt64, 1} ←.root_blocks– Method ←(several paths)– Core.TypeMapLevel ←[1601]– Memory{Any} ←.arg1– Core.TypeMapLevel ←[15]– Memory{Any} ←.name1– Core.TypeMapLevel ←[14543]– Memory{Any} ←.arg1– Core.TypeMapLevel ←.defs– Core.MethodTable`                           |

### Retained size

Constructors ranked by bytes allocated for their instances and all nodes that would be freed if their instances were garbage collected.

#### Improvements

Constructors with the largest decrease in retained size.

##### Object

| Change |      Delta |    % |              Size |       Instances | Constructor                 |
| -----: | ---------: | ---: | ----------------: | --------------: | --------------------------- |
|  -0.1% | -1.097 KiB | 0.6% | 885 KiB → 883 KiB | 14,864 → 14,860 | `<foreign memory - malloc>` |

#### Instances

Instances with the largest change in contribution to each constructor's retained size. `B ←(several paths)– A` means `A` holds `B` only through other nodes, along several paths.

##### `<foreign memory - malloc>`

|  Change |  Delta |            % |            Size |     Instances | Path                                                                                                                                                                                                                                                                                                                                         |
| ------: | -----: | -----------: | --------------: | ------------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|   -1.4% | -1 KiB |  8.4% → 8.3% | 74 KiB → 73 KiB |       17 → 16 | `<foreign memory - malloc> ←.<native>– Memory{UInt16} ←.speckeyset– Method`                                                                                                                                                                                                                                                                  |
|   -0.1% |  -96 B |        19.8% |         175 KiB | 4,715 → 4,713 | `<foreign memory - malloc> ←.<native>– Memory{UInt8} ←.speckeyset– Method`                                                                                                                                                                                                                                                                   |
| removed |  -64 B | <0.1% → 0.0% |      64 B → 0 B |         2 → 0 | `<foreign memory - malloc> ←.<native>– Memory{UInt64} ←.ref.mem– Array{UInt64, 1} ←.root_blocks– Method ←(several paths)– Core.TypeMapLevel ←[22079]– Memory{Any} ←.arg1– Core.TypeMapLevel ←.defs– Core.MethodTable`                                                                                                                        |
| removed |  -64 B | <0.1% → 0.0% |      64 B → 0 B |         2 → 0 | `<foreign memory - malloc> ←.<native>– Memory{UInt64} ←.ref.mem– Array{UInt64, 1} ←.root_blocks– Method ←(several paths)– Core.TypeMapEntry ←.next– Core.TypeMapEntry ←[1965]– Memory{Any} ←.arg1– Core.TypeMapLevel ←[15]– Memory{Any} ←.name1– Core.TypeMapLevel ←[14543]– Memory{Any} ←.arg1– Core.TypeMapLevel ←.defs– Core.MethodTable` |
| removed |  -64 B | <0.1% → 0.0% |      64 B → 0 B |         2 → 0 | `<foreign memory - malloc> ←.<native>– Memory{UInt64} ←.ref.mem– Array{UInt64, 1} ←.root_blocks– Method ←(several paths)– Core.TypeMapLevel ←[1601]– Memory{Any} ←.arg1– Core.TypeMapLevel ←[15]– Memory{Any} ←.name1– Core.TypeMapLevel ←[14543]– Memory{Any} ←.arg1– Core.TypeMapLevel ←.defs– Core.MethodTable`                           |

# Heap snapshot diff

Held 1.49 MiB (+1.515 KiB, +0.1%) over 16,733 → 16,748 nodes and 44,795 → 44,856 edges.

| Category           | Change |      Delta |             % |                Size |         Nodes |
| ------------------ | -----: | ---------: | ------------: | ------------------: | ------------: |
| Code               |   0.0% |        0 B | 45.4% → 45.3% |             693 KiB |         3,192 |
| String             |   0.0% |        0 B | 23.4% → 23.3% |             356 KiB |         6,272 |
| Object shape       |  +0.7% | +1.421 KiB | 13.4% → 13.5% |   205 KiB → 206 KiB | 1,870 → 1,883 |
| Object             |   0.0% |        0 B |          7.4% |             114 KiB |         1,471 |
| Internal           |  +0.1% |      +96 B |          4.9% | 75.4 KiB → 75.5 KiB |     960 → 962 |
| Function           |   0.0% |        0 B |          4.3% |              65 KiB |         1,811 |
| Array              |   0.0% |        0 B |          1.1% |            16.8 KiB |         1,073 |
| Symbol             |   0.0% |        0 B |          0.1% |             1.2 KiB |            77 |
| Native             |   0.0% |        0 B |         <0.1% |               387 B |             3 |
| Regular expression |   0.0% |        0 B |         <0.1% |                64 B |             2 |
| Big number         |   0.0% |        0 B |         <0.1% |                32 B |             1 |
| Synthetic          |      — |        0 B |          0.0% |                 0 B |             1 |

`B ←(several paths)– A` means `A` retains `B` only through other nodes, along several paths.

## Largest constructors

### Self size

No constructor differed in instance bytes, excluding referenced nodes.

### Retained size

#### Regressions

Constructors with the largest increase in instance bytes, including nodes only the instances keep alive. Categories account for at least 1.0% of self size on the base or the current side.

##### Object

|   Change |       Delta |             % |                Size | Instances | Constructor           |
| -------: | ----------: | ------------: | ------------------: | --------: | --------------------- |
|    +6.6% | +84.572 KiB | 83.9% → 89.3% | 1.25 MiB → 1.33 MiB |         1 | `GlobalObject`        |
| +1375.0% |      +880 B |  <0.1% → 0.1% |        64 B → 944 B |         1 | `FixedCircularBuffer` |
|  +916.7% |      +880 B |  <0.1% → 0.1% |        96 B → 976 B |         1 | `FixedQueue`          |
|    +0.1% |      +608 B |         40.8% |   622 KiB → 623 KiB |     1,367 | `Object`              |
|    +0.5% |      +272 B |          3.4% | 51.9 KiB → 52.1 KiB |         1 | `url `                |

#### Retainer paths

Retainer paths with the largest change in contribution to each constructor's retained size.

##### `GlobalObject`

| Change |       Delta |      % |                Size | Instances | Path                       |
| -----: | ----------: | -----: | ------------------: | --------: | -------------------------- |
|  +6.6% | +84.572 KiB | 100.0% | 1.25 MiB → 1.33 MiB |         1 | `GlobalObject ← (GC root)` |

##### `FixedCircularBuffer`

|   Change |  Delta |      % |         Size | Instances | Path                                                                    |
| -------: | -----: | -----: | -----------: | --------: | ----------------------------------------------------------------------- |
| +1375.0% | +880 B | 100.0% | 64 B → 944 B |         1 | `FixedCircularBuffer ←.head– FixedQueue ←(several paths)– GlobalObject` |

##### `FixedQueue`

|  Change |  Delta |      % |         Size | Instances | Path                                        |
| ------: | -----: | -----: | -----------: | --------: | ------------------------------------------- |
| +916.7% | +880 B | 100.0% | 96 B → 976 B |         1 | `FixedQueue ←(several paths)– GlobalObject` |

##### `Object`

|  Change |       Delta |            % |                Size | Instances | Path                                                                                                                      |
| ------: | ----------: | -----------: | ------------------: | --------: | ------------------------------------------------------------------------------------------------------------------------- |
|  +21.6% | +13.291 KiB | 9.9% → 12.0% | 61.6 KiB → 74.9 KiB |   23 → 26 | `Object ←(several paths)– GlobalObject`                                                                                   |
|  -87.2% | -12.698 KiB |  2.3% → 0.3% | 14.6 KiB → 1.87 KiB |     8 → 5 | `Object ← (GC root)`                                                                                                      |
| removed |      -401 B |  0.1% → 0.0% |         401 B → 0 B |     1 → 0 | `Object ←.homeObject– EventEmitterAsyncResource ←.EventEmitterAsyncResource– EventEmitter`                                |
|     new |      +401 B |  0.0% → 0.1% |         0 B → 401 B |     0 → 1 | `Object ←.homeObject– EventEmitterAsyncResource ←.EventEmitterAsyncResource– EventEmitter ←(several paths)– GlobalObject` |
|  -81.0% |      -272 B | 0.1% → <0.1% |        336 B → 64 B |         1 | `Object ←.scheduler– Object ← InternalModuleRegistry ←.internalModuleRegistry– GlobalObject`                              |

##### `url `

| Change |  Delta |      % |                Size | Instances | Path                           |
| -----: | -----: | -----: | ------------------: | --------: | ------------------------------ |
|  +0.5% | +272 B | 100.0% | 51.9 KiB → 52.1 KiB |         1 | `url  ←.process– GlobalObject` |

## Largest functions

No function differed in instance bytes, including nodes only the instances keep alive.

## Largest strings

No string differed in bytes.

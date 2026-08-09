# Heap snapshot diff

Allocated 155 MiB (-119 B, ~0%) across 1,797,991 nodes and 5,735,164 → 5,735,169 edges.

| Category           | Change |  Delta |     % |     Size |   Nodes |
| ------------------ | -----: | -----: | ----: | -------: | ------: |
| String             |    ~0% |   +9 B | 45.1% |   70 MiB | 295,592 |
| Code               |   0.0% |    0 B | 18.4% | 28.6 MiB | 402,515 |
| Array              |   0.0% |    0 B | 15.7% | 24.4 MiB | 631,413 |
| Object             |    ~0% | -128 B | 10.8% | 16.8 MiB | 164,867 |
| Internal           |   0.0% |    0 B |  9.5% | 14.8 MiB | 269,102 |
| Symbol             |   0.0% |    0 B |  0.4% |  592 KiB |  27,476 |
| Function           |   0.0% |    0 B |  0.1% |   81 KiB |   3,510 |
| Number             |   0.0% |    0 B | <0.1% | 40.9 KiB |   2,766 |
| Native             |   0.0% |    0 B | <0.1% | 11.4 KiB |     515 |
| Regular expression |   0.0% |    0 B | <0.1% | 4.48 KiB |     174 |
| Synthetic          |   0.0% |    0 B | <0.1% |    384 B |      61 |

## Largest constructors

### Self size

Constructors ranked by bytes allocated for their instances, excluding nodes kept reachable by them.

#### Improvements

Constructors with the largest decrease in self size.

| Change |  Delta |    % |     Size | Instances | Constructor                       |
| -----: | -----: | ---: | -------: | --------: | --------------------------------- |
|    ~0% | -128 B | 6.4% | 9.88 MiB |   120,343 | `<generic memory - inline alloc>` |

### Retained size

Constructors ranked by bytes allocated for their instances and all nodes that would be freed if their instances were garbage collected.

#### Improvements

Constructors with the largest decrease in retained size.

| Change |  Delta |    % |     Size | Instances | Constructor                       |
| -----: | -----: | ---: | -------: | --------: | --------------------------------- |
|    ~0% | -128 B | 6.4% | 9.88 MiB |   120,343 | `<generic memory - inline alloc>` |

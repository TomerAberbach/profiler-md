# Allocated heap profile diff

Allocated 132 MiB over 78 objects (1.69 MiB per object).

| Category | Change | Delta |     % |     Size | Objects |
| -------- | -----: | ----: | ----: | -------: | ------: |
| Ours     |   0.0% |   0 B | 51.3% | 67.8 MiB |      49 |
| Native   |   0.0% |   0 B | 48.7% | 64.3 MiB |      29 |

## Hottest functions

### Self size

No function differed in bytes allocated directly in the function body, excluding callees.

### Total size

#### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

##### Native

| Change |        Delta |            % |           Size | Objects | Function             | Location    |
| -----: | -----------: | -----------: | -------------: | ------: | -------------------- | ----------- |
|    new |  +49.245 MiB | 0.0% → 37.3% | 0 B → 49.2 MiB |   0 → 1 | `0xffff95eee377`     | `<unknown>` |
|    new | +384.187 KiB |  0.0% → 0.3% |  0 B → 384 KiB |   0 → 7 | `0xffff978e8077`     | `<unknown>` |
|    new | +384.187 KiB |  0.0% → 0.3% |  0 B → 384 KiB |   0 → 7 | `0xffffc4ff3767`     | `<unknown>` |
|    new | +384.093 KiB |  0.0% → 0.3% |  0 B → 384 KiB |   0 → 5 | `0xffffc4ff36df`     | `<unknown>` |
|    new |     +256 KiB |  0.0% → 0.2% |  0 B → 256 KiB |   0 → 1 | `0xaaaae86f0327`     | `<unknown>` |
|    new |     +256 KiB |  0.0% → 0.2% |  0 B → 256 KiB |   0 → 1 | `0xffffc4ff371f`     | `<unknown>` |
|    new |   +128.6 KiB |  0.0% → 0.1% |  0 B → 129 KiB |   0 → 3 | `0xffffc4ff376f`     | `<unknown>` |
|    new |   +9.046 KiB | 0.0% → <0.1% | 0 B → 9.05 KiB |  0 → 13 | `0xffff97200027`     | `<unknown>` |
|    new |       +4 KiB | 0.0% → <0.1% |    0 B → 4 KiB |   0 → 1 | `0xffff95f002ff`     | `<unknown>` |
|    new |       +4 KiB | 0.0% → <0.1% |    0 B → 4 KiB |   0 → 1 | `0xffffc4ff3bef`     | `<unknown>` |
|    new |       +784 B | 0.0% → <0.1% |    0 B → 784 B |   0 → 4 | `0x99f0aa7b63e0a0ff` | `<unknown>` |
|    new |       +776 B | 0.0% → <0.1% |    0 B → 776 B |   0 → 4 | `0xffff97908fff`     | `<unknown>` |
|    new |       +472 B | 0.0% → <0.1% |    0 B → 472 B |   0 → 1 | `0xffffc4ff3513`     | `<unknown>` |
|    new |       +472 B | 0.0% → <0.1% |    0 B → 472 B |   0 → 1 | `0xffff97950fff`     | `<unknown>` |
|    new |       +472 B | 0.0% → <0.1% |    0 B → 472 B |   0 → 1 | `0xffffc4ff35a3`     | `<unknown>` |
|    new |       +392 B | 0.0% → <0.1% |    0 B → 392 B |   0 → 2 | `0xffffc4ff3837`     | `<unknown>` |
|    new |       +304 B | 0.0% → <0.1% |    0 B → 304 B |   0 → 1 | `0xffff9794a7bf`     | `<unknown>` |
|    new |       +192 B | 0.0% → <0.1% |    0 B → 192 B |   0 → 1 | `0xffffc4ff381f`     | `<unknown>` |
|    new |       +192 B | 0.0% → <0.1% |    0 B → 192 B |   0 → 1 | `0xffffc4ff3817`     | `<unknown>` |
|    new |       +176 B | 0.0% → <0.1% |    0 B → 176 B |   0 → 4 | `0xffffc4ff3b3f`     | `<unknown>` |

#### Improvements

Functions with the largest decrease in total bytes allocated in the function and all its callees.

##### Native

|  Change |        Delta |            % |           Size | Objects | Function             | Location    |
| ------: | -----------: | -----------: | -------------: | ------: | -------------------- | ----------- |
| removed |  -49.245 MiB | 37.3% → 0.0% | 49.2 MiB → 0 B |   1 → 0 | `0xffffae9be377`     | `<unknown>` |
| removed | -384.187 KiB |  0.3% → 0.0% |  384 KiB → 0 B |   7 → 0 | `0xffffb03b8077`     | `<unknown>` |
| removed | -384.187 KiB |  0.3% → 0.0% |  384 KiB → 0 B |   7 → 0 | `0xffffe10e9117`     | `<unknown>` |
| removed | -384.093 KiB |  0.3% → 0.0% |  384 KiB → 0 B |   5 → 0 | `0xffffe10e908f`     | `<unknown>` |
| removed |     -256 KiB |  0.2% → 0.0% |  256 KiB → 0 B |   1 → 0 | `0xaaaaea478327`     | `<unknown>` |
| removed |     -256 KiB |  0.2% → 0.0% |  256 KiB → 0 B |   1 → 0 | `0xffffe10e90cf`     | `<unknown>` |
| removed |   -128.6 KiB |  0.1% → 0.0% |  129 KiB → 0 B |   3 → 0 | `0xffffe10e911f`     | `<unknown>` |
| removed |   -9.429 KiB | <0.1% → 0.0% | 9.43 KiB → 0 B |  15 → 0 | `0xffffafcd0027`     | `<unknown>` |
| removed |       -4 KiB | <0.1% → 0.0% |    4 KiB → 0 B |   1 → 0 | `0xffffae9d02ff`     | `<unknown>` |
| removed |       -4 KiB | <0.1% → 0.0% |    4 KiB → 0 B |   1 → 0 | `0xffffe10e959f`     | `<unknown>` |
| removed |       -784 B | <0.1% → 0.0% |    784 B → 0 B |   4 → 0 | `0xccba22524c5860ff` | `<unknown>` |
| removed |       -776 B | <0.1% → 0.0% |    776 B → 0 B |   4 → 0 | `0xffffb03d8fff`     | `<unknown>` |
| removed |       -472 B | <0.1% → 0.0% |    472 B → 0 B |   1 → 0 | `0xffffe10e8f53`     | `<unknown>` |
| removed |       -472 B | <0.1% → 0.0% |    472 B → 0 B |   1 → 0 | `0xffffe10e8ec3`     | `<unknown>` |
| removed |       -472 B | <0.1% → 0.0% |    472 B → 0 B |   1 → 0 | `0xffffb0424fff`     | `<unknown>` |
| removed |       -304 B | <0.1% → 0.0% |    304 B → 0 B |   1 → 0 | `0xffffb041e7bf`     | `<unknown>` |
| removed |       -192 B | <0.1% → 0.0% |    192 B → 0 B |   1 → 0 | `0xffffe10e91cf`     | `<unknown>` |
| removed |       -192 B | <0.1% → 0.0% |    192 B → 0 B |   1 → 0 | `0xffffe10e91c7`     | `<unknown>` |
| removed |       -176 B | <0.1% → 0.0% |    176 B → 0 B |   4 → 0 | `0xffffe10e94ef`     | `<unknown>` |
| removed |         -8 B | <0.1% → 0.0% |      8 B → 0 B |   1 → 0 | `0xffffe10e916f`     | `<unknown>` |

# Retained heap profile diff

Retained 912 B over 3 objects (304 B per object).

| Category | Change | Delta |      % |  Size | Objects |
| -------- | -----: | ----: | -----: | ----: | ------: |
| Native   |   0.0% |   0 B | 100.0% | 912 B |       3 |

## Hottest functions

### Self size

No function differed in bytes retained directly in the function body, excluding callees.

### Total size

#### Regressions

Functions with the largest increase in total bytes retained in the function and all its callees.

##### Native

| Change |  Delta |            % |        Size | Objects | Function             | Location    |
| -----: | -----: | -----------: | ----------: | ------: | -------------------- | ----------- |
|    new | +608 B | 0.0% → 66.7% | 0 B → 608 B |   0 → 2 | `0x99f0aa7b63e0a0ff` | `<unknown>` |
|    new | +304 B | 0.0% → 33.3% | 0 B → 304 B |   0 → 1 | `0xffff9794a7bf`     | `<unknown>` |

#### Improvements

Functions with the largest decrease in total bytes retained in the function and all its callees.

##### Native

|  Change |  Delta |            % |        Size | Objects | Function             | Location    |
| ------: | -----: | -----------: | ----------: | ------: | -------------------- | ----------- |
| removed | -608 B | 66.7% → 0.0% | 608 B → 0 B |   2 → 0 | `0xccba22524c5860ff` | `<unknown>` |
| removed | -304 B | 33.3% → 0.0% | 304 B → 0 B |   1 → 0 | `0xffffb041e7bf`     | `<unknown>` |

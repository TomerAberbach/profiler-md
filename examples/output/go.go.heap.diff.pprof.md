# Allocated heap and retained heap profile diff

Allocated 1.67 GiB (-2.123 MiB, -0.1%) and retained 2.09 MiB → 1.59 MiB (-516.607 KiB, -24.1%) over 21,825,387 samples → 21,882,356 samples (82.4 B → 82.1 B and 0.101 B → 0.0761 B per sample).

| Category | Change |      Delta |      % |         Allocated |            Retained |                 Samples |
| -------- | -----: | ---------: | -----: | ----------------: | ------------------: | ----------------------: |
| stdlib   |  -0.1% | -2.115 MiB | 100.0% |          1.67 GiB | 2.09 MiB → 1.59 MiB | 21,824,618 → 21,882,100 |
| ours     | -66.7% | -8.015 KiB |  <0.1% | 12 KiB → 4.01 KiB |                 0 B |               769 → 256 |

## Allocated heap

Hidden functions account for 89.4% of bytes allocated, so the hottest are also shown.

### Hottest functions

#### Self size

##### Regressions

Functions with the largest increase in bytes allocated directly in the function body, excluding callees.

| Change |       Delta |     % |                Size |   Samples | Function                  | Location                                                                                         |
| -----: | ----------: | ----: | ------------------: | --------: | ------------------------- | ------------------------------------------------------------------------------------------------ |
| +18.8% | +12.212 KiB | <0.1% | 65.1 KiB → 77.3 KiB | 463 → 550 | `encoding/json.Unmarshal` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102` |

##### Improvements

Functions with the largest decrease in bytes allocated directly in the function body, excluding callees.

| Change |        Delta |             % |              Size |               Samples | Function                                       | Location                                                                                          |
| -----: | -----------: | ------------: | ----------------: | --------------------: | ---------------------------------------------- | ------------------------------------------------------------------------------------------------- |
|  -0.4% |   -2.119 MiB | 32.6% → 32.5% | 558 MiB → 556 MiB | 1,846,099 → 1,839,235 | `encoding/json.(*decodeState).objectInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078` |
|  -0.3% | -916.634 KiB |         20.3% | 349 MiB → 348 MiB |         4,660 → 4,364 | `bytes.growSlice`                              | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247`          |
| -66.7% |   -8.015 KiB |         <0.1% | 12 KiB → 4.01 KiB |             769 → 256 | `main.workload.func1`                          | `profile.go:25`                                                                                   |

#### Total size

##### Regressions

Functions with the largest increase in total bytes allocated in the function and all its callees.

| Change |        Delta |             % |    Size |                 Samples | Function                | Location                                                                                         |
| -----: | -----------: | ------------: | ------: | ----------------------: | ----------------------- | ------------------------------------------------------------------------------------------------ |
|  +0.1% | +528.409 KiB | 53.5% → 53.6% | 917 MiB | 11,200,763 → 11,225,798 | `encoding/json.Marshal` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205` |

##### Improvements

Functions with the largest decrease in total bytes allocated in the function and all its callees.

|  Change |        Delta |            % |                Size |                 Samples | Function                                       | Location                                                                                          |
| ------: | -----------: | -----------: | ------------------: | ----------------------: | ---------------------------------------------- | ------------------------------------------------------------------------------------------------- |
|   -0.3% |   -2.072 MiB |        46.3% |   794 MiB → 792 MiB | 10,619,361 → 10,652,231 | `encoding/json.(*decodeState).objectInterface` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:1078` |
|   -0.3% |   -2.072 MiB |        46.3% |   795 MiB → 793 MiB | 10,621,980 → 10,654,295 | `encoding/json.Unmarshal`                      | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102`  |
|   -0.1% |   -1.564 MiB |        99.8% |            1.67 GiB | 21,823,512 → 21,880,349 | `main.workload.func1`                          | `profile.go:25`                                                                                   |
|   -0.3% | -916.634 KiB |        20.3% |   349 MiB → 348 MiB |           4,660 → 4,364 | `bytes.growSlice`                              | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247`          |
|  -35.1% |     -624 KiB |         0.1% | 1.74 MiB → 1.13 MiB |                      55 | `main.main`                                    | `profile.go:61`                                                                                   |
| removed |     -624 KiB | <0.1% → 0.0% |       624 KiB → 0 B |                   1 → 0 | `os.ReadFile`                                  | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/os/file.go:864`               |

## Retained heap

Hidden functions account for 100.0% of bytes retained, so the hottest are also shown.

### Hottest functions

#### Self size

##### Improvements

Functions with the largest decrease in bytes retained directly in the function body, excluding callees.

| Change |    Delta |             % |            Size |       Samples | Function          | Location                                                                                 |
| -----: | -------: | ------------: | --------------: | ------------: | ----------------- | ---------------------------------------------------------------------------------------- |
| -25.0% | -512 KiB | 95.6% → 94.5% | 2 MiB → 1.5 MiB | 4,660 → 4,364 | `bytes.growSlice` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247` |

#### Total size

##### Improvements

Functions with the largest decrease in total bytes retained in the function and all its callees.

|  Change |        Delta |             % |             Size |                 Samples | Function                  | Location                                                                                         |
| ------: | -----------: | ------------: | ---------------: | ----------------------: | ------------------------- | ------------------------------------------------------------------------------------------------ |
|  -25.0% |     -512 KiB | 95.6% → 94.5% |  2 MiB → 1.5 MiB |           4,660 → 4,364 | `bytes.growSlice`         | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/bytes/buffer.go:247`         |
|  -24.6% | -503.898 KiB | 95.8% → 95.2% | 2 MiB → 1.51 MiB | 21,823,512 → 21,880,349 | `main.workload.func1`     | `profile.go:25`                                                                                  |
|  -24.4% | -499.843 KiB | 95.6% → 95.2% | 2 MiB → 1.51 MiB | 11,200,763 → 11,225,798 | `encoding/json.Marshal`   | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/encode.go:205` |
| removed |   -4.054 KiB |   0.2% → 0.0% |   4.05 KiB → 0 B | 10,621,980 → 10,654,295 | `encoding/json.Unmarshal` | `/nix/store/7ycp8j45iay38g9mjaxmy4jhwdsrb47y-go-1.26.3/share/go/src/encoding/json/decode.go:102` |

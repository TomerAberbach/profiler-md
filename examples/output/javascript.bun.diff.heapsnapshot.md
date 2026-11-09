# Heap snapshot diff

Held 1.5 MiB → 1.91 MiB (+424.347 KiB, +27.7%) over 16,751 → 23,701 nodes and 44,867 → 58,968 edges.

| Category           | Change |        Delta |             % |                Size |          Nodes |
| ------------------ | -----: | -----------: | ------------: | ------------------: | -------------: |
| Code               |   0.0% |          0 B | 45.6% → 35.7% |             698 KiB |          3,206 |
| String             | +89.0% | +317.367 KiB | 23.3% → 34.5% |   356 KiB → 674 KiB | 6,276 → 10,885 |
| Object shape       |  +1.3% |   +2.734 KiB | 13.3% → 10.5% |   204 KiB → 206 KiB |  1,861 → 1,886 |
| Object             | +77.2% |  +87.746 KiB |  7.4% → 10.3% |   114 KiB → 201 KiB |  1,471 → 2,735 |
| Internal           |  +0.1% |        +96 B |   4.9% → 3.9% | 75.7 KiB → 75.8 KiB |      963 → 965 |
| Function           |   0.0% |          0 B |   4.3% → 3.3% |            65.1 KiB |          1,816 |
| Array              | +97.5% |  +16.406 KiB |   1.1% → 1.7% | 16.8 KiB → 33.2 KiB |  1,074 → 2,124 |
| Symbol             |   0.0% |          0 B |          0.1% |             1.2 KiB |             77 |
| Native             |   0.0% |          0 B |         <0.1% |               387 B |              3 |
| Regular expression |   0.0% |          0 B |         <0.1% |                64 B |              2 |
| Big number         |   0.0% |          0 B |         <0.1% |                32 B |              1 |
| Synthetic          |      — |          0 B |          0.0% |                 0 B |              1 |

`B ←(several paths)– A` means `A` retains `B` only through other nodes, along several paths.

## Largest constructors

### Self size

#### Regressions

Constructors with the largest increase in instance bytes, excluding referenced nodes. Categories account for at least 1.0% of self size on the base or the current side.

##### Object

| Change |       Delta |           % |               Size |     Instances | Constructor |
| -----: | ----------: | ----------: | -----------------: | ------------: | ----------- |
| +90.8% | +87.746 KiB | 6.3% → 9.4% | 96.7 KiB → 184 KiB | 1,367 → 2,631 | `Object`    |

#### Retainer paths

Retainer paths with the largest change in contribution to each constructor's self size.

##### `Object`

|  Change |  Delta |           % |                Size | Instances | Path                                                                                                                         |
| ------: | -----: | ----------: | ------------------: | --------: | ---------------------------------------------------------------------------------------------------------------------------- |
|  -44.8% | -543 B | 1.2% → 0.4% |    1.18 KiB → 668 B |     8 → 5 | `Object ← (GC root)`                                                                                                         |
|  +22.7% | +543 B | 2.4% → 1.6% | 2.33 KiB → 2.86 KiB |   23 → 26 | `Object ←(several paths)– GlobalObject`                                                                                      |
| removed |  -98 B | 0.1% → 0.0% |          98 B → 0 B |     1 → 0 | `Object ←.user– Object ←[99]– Array (100) ←.statuses– Object ←[0]– Array (1) ←.documents– Object ←.__retained– GlobalObject` |
| removed |  -98 B | 0.1% → 0.0% |          98 B → 0 B |     1 → 0 | `Object ←.user– Object ←[49]– Array (100) ←.statuses– Object ←[0]– Array (1) ←.documents– Object ←.__retained– GlobalObject` |
| removed |  -98 B | 0.1% → 0.0% |          98 B → 0 B |     1 → 0 | `Object ←.user– Object ←[55]– Array (100) ←.statuses– Object ←[0]– Array (1) ←.documents– Object ←.__retained– GlobalObject` |

### Retained size

#### Regressions

Constructors with the largest increase in instance bytes, including nodes only the instances keep alive. Categories account for at least 1.0% of self size on the base or the current side.

##### Object

| Change |        Delta |             % |                Size |     Instances | Constructor              |
| -----: | -----------: | ------------: | ------------------: | ------------: | ------------------------ |
| +40.1% | +512.377 KiB | 83.4% → 91.5% | 1.25 MiB → 1.75 MiB |             1 | `GlobalObject`           |
| +63.8% | +423.535 KiB | 43.4% → 55.6% |  664 KiB → 1.06 MiB | 1,367 → 2,631 | `Object`                 |
|  +5.7% |   +2.828 KiB |   3.2% → 2.7% | 49.5 KiB → 52.3 KiB |             1 | `InternalModuleRegistry` |
|  +0.1% |        +48 B |   3.4% → 2.7% |            52.4 KiB |             1 | `url `                   |
|  +0.3% |        +48 B |   1.2% → 0.9% | 18.3 KiB → 18.4 KiB |             2 | `WriteStream`            |

#### Improvements

Constructors with the largest decrease in instance bytes, including nodes only the instances keep alive. Categories account for at least 1.0% of self size on the base or the current side.

##### Object

| Change |  Delta |     % |         Size | Instances | Constructor  |
| -----: | -----: | ----: | -----------: | --------: | ------------ |
| -82.9% | -464 B | <0.1% | 560 B → 96 B |         1 | `FixedQueue` |

#### Retainer paths

Retainer paths with the largest change in contribution to each constructor's retained size.

##### `GlobalObject`

| Change |        Delta |      % |                Size | Instances | Path                       |
| -----: | -----------: | -----: | ------------------: | --------: | -------------------------- |
| +40.1% | +512.377 KiB | 100.0% | 1.25 MiB → 1.75 MiB |         1 | `GlobalObject ← (GC root)` |

##### `Object`

|  Change |        Delta |             % |                Size | Instances | Path                                                                    |
| ------: | -----------: | ------------: | ------------------: | --------: | ----------------------------------------------------------------------- |
| removed | -441.566 KiB |  66.5% → 0.0% |       442 KiB → 0 B |     1 → 0 | `Object ←[0]– Array (1) ←.documents– Object ←.__retained– GlobalObject` |
|     new | +422.866 KiB |  0.0% → 38.9% |       0 B → 423 KiB |     0 → 1 | `Object ←[1]– Array (2) ←.documents– Object ←.__retained– GlobalObject` |
|     new | +422.866 KiB |  0.0% → 38.9% |       0 B → 423 KiB |     0 → 1 | `Object ←[0]– Array (2) ←.documents– Object ←.__retained– GlobalObject` |
|  +92.0% | +421.519 KiB | 69.0% → 80.9% |   458 KiB → 880 KiB |         1 | `Object ←.__retained– GlobalObject`                                     |
|  -87.2% |  -12.698 KiB |   2.2% → 0.2% | 14.6 KiB → 1.87 KiB |     8 → 5 | `Object ← (GC root)`                                                    |

##### `InternalModuleRegistry`

| Change |      Delta |      % |                Size | Instances | Path                                                            |
| -----: | ---------: | -----: | ------------------: | --------: | --------------------------------------------------------------- |
|  +5.7% | +2.828 KiB | 100.0% | 49.5 KiB → 52.3 KiB |         1 | `InternalModuleRegistry ←.internalModuleRegistry– GlobalObject` |

##### `url `

| Change | Delta |      % |     Size | Instances | Path                           |
| -----: | ----: | -----: | -------: | --------: | ------------------------------ |
|  +0.1% | +48 B | 100.0% | 52.4 KiB |         1 | `url  ←.process– GlobalObject` |

##### `FixedQueue`

| Change |  Delta |      % |         Size | Instances | Path                                        |
| -----: | -----: | -----: | -----------: | --------: | ------------------------------------------- |
| -82.9% | -464 B | 100.0% | 560 B → 96 B |         1 | `FixedQueue ←(several paths)– GlobalObject` |

## Largest functions

### Improvements

Functions with the largest decrease in instance bytes, including nodes only the instances keep alive.

| Change |  Delta |     % |      Retained | Instances | Paths | Name     | Example path                            |
| -----: | -----: | ----: | ------------: | --------: | ----: | -------- | --------------------------------------- |
| -37.2% | -240 B | <0.1% | 645 B → 405 B |         1 |     1 | `Duplex` | `Duplex ←(several paths)– GlobalObject` |

### Retained nodes

Retained nodes with the largest change in contribution to each function's retained size.

#### `Duplex`

|  Change |  Delta |            % |        Self | Name        | Path to function                                         |
| ------: | -----: | -----------: | ----------: | ----------- | -------------------------------------------------------- |
| removed | -112 B | 17.4% → 0.0% | 112 B → 0 B | `Structure` | `Structure ← Structure ← Structure ← Duplex`             |
| removed | -112 B | 17.4% → 0.0% | 112 B → 0 B | `Structure` | `Structure ← Structure ← Structure ← Structure ← Duplex` |

## Largest strings

### Regressions

Strings with the largest increase in bytes. Categories account for at least 1.0% of self size on the base or the current side.

#### String

|  Change |       Delta |           % |                Size | Value                                                 | Path                                                                                                                                                                                                                                  |
| ------: | ----------: | ----------: | ------------------: | ----------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| +100.0% | +17.033 KiB | 1.1% → 1.7% |   17 KiB → 34.1 KiB | `https://abs.twimg.com/images/themes/theme1/bg.png`   | `https://abs.twimg.com/images/themes/theme1/bg.png ←.profile_background_image_url_https– Object ←.user– Object ←[98]– Array (100) ←.statuses– Object ←[1]– Array (2) ←.documents– Object ←.__retained– GlobalObject`                  |
| +100.0% | +16.765 KiB | 1.1% → 1.7% | 16.8 KiB → 33.5 KiB | `RT @shiawaseomamori: 一に止まると書いて、正しいという意味だなんて、この年にな…`  | `RT @shiawaseomamori: 一に止まると書いて、正しいという意味だなんて、この年にな… ←.text– Object ←[93]– Array (100) ←.statuses– Object ←[1]– Array (2) ←.documents– Object ←.__retained– GlobalObject`                                                              |
| +100.0% | +16.765 KiB | 1.1% → 1.7% | 16.8 KiB → 33.5 KiB | `一に止まると書いて、正しいという意味だなんて、この年になるまで知りませんでした。 人は生きていると…`  | `一に止まると書いて、正しいという意味だなんて、この年になるまで知りませんでした。 人は生きていると… ←.text– Object ←.retweeted_status– Object ←[93]– Array (100) ←.statuses– Object ←[1]– Array (2) ←.documents– Object ←.__retained– GlobalObject`                                   |
| +100.0% | +16.734 KiB | 1.1% → 1.7% | 16.7 KiB → 33.5 KiB | `http://abs.twimg.com/images/themes/theme1/bg.png`    | `http://abs.twimg.com/images/themes/theme1/bg.png ←.profile_background_image_url– Object ←.user– Object ←[98]– Array (100) ←.statuses– Object ←[1]– Array (2) ←.documents– Object ←.__retained– GlobalObject`                         |
| +100.0% |  +9.968 KiB | 0.7% → 1.0% | 9.97 KiB → 19.9 KiB | `自分が幸せだと周りも幸せにできる！  \nそんな人生を精一杯生きるために必要な言葉をお届けします♪ …` | `自分が幸せだと周りも幸せにできる！  \nそんな人生を精一杯生きるために必要な言葉をお届けします♪ … ←.description– Object ←.user– Object ←.retweeted_status– Object ←[93]– Array (100) ←.statuses– Object ←[1]– Array (2) ←.documents– Object ←.__retained– GlobalObject`            |
| +100.0% |  +9.515 KiB | 0.6% → 1.0% |   9.52 KiB → 19 KiB | `https://pbs.twimg.com/profile_images/501742437606…`  | `https://pbs.twimg.com/profile_images/501742437606… ←.profile_image_url_https– Object ←.user– Object ←.retweeted_status– Object ←[93]– Array (100) ←.statuses– Object ←[1]– Array (2) ←.documents– Object ←.__retained– GlobalObject` |
| +100.0% |  +9.402 KiB | 0.6% → 1.0% |  9.4 KiB → 18.8 KiB | `http://pbs.twimg.com/profile_images/5017424376062…`  | `http://pbs.twimg.com/profile_images/5017424376062… ←.profile_image_url– Object ←.user– Object ←.retweeted_status– Object ←[93]– Array (100) ←.statuses– Object ←[1]– Array (2) ←.documents– Object ←.__retained– GlobalObject`       |
| +100.0% |  +9.062 KiB | 0.6% → 0.9% | 9.06 KiB → 18.1 KiB | `<a href="https://twitter.com/shiawaseomamori" rel…`  | `<a href="https://twitter.com/shiawaseomamori" rel… ←.source– Object ←.retweeted_status– Object ←[93]– Array (100) ←.statuses– Object ←[1]– Array (2) ←.documents– Object ←.__retained– GlobalObject`                                 |
| +100.0% |   +8.35 KiB | 0.5% → 0.9% | 8.35 KiB → 16.7 KiB | `ja`                                                  | `ja ←.iso_language_code– Object ←.metadata– Object ←[99]– Array (100) ←.statuses– Object ←[1]– Array (2) ←.documents– Object ←.__retained– GlobalObject`                                                                              |
| +100.0% |  +7.589 KiB | 0.5% → 0.8% | 7.59 KiB → 15.2 KiB | `https://pbs.twimg.com/profile_banners/2745121514/…`  | `https://pbs.twimg.com/profile_banners/2745121514/… ←.profile_banner_url– Object ←.user– Object ←.retweeted_status– Object ←[93]– Array (100) ←.statuses– Object ←[1]– Array (2) ←.documents– Object ←.__retained– GlobalObject`      |
| +100.0% |   +5.21 KiB | 0.3% → 0.5% | 5.21 KiB → 10.4 KiB | `shiawaseomamori`                                     | `shiawaseomamori ←.screen_name– Object ←.user– Object ←.retweeted_status– Object ←[93]– Array (100) ←.statuses– Object ←[1]– Array (2) ←.documents– Object ←.__retained– GlobalObject`                                                |
| +100.0% |  +5.179 KiB | 0.3% → 0.5% | 5.18 KiB → 10.4 KiB | `C0DEED`                                              | `C0DEED ←.profile_background_color– Object ←.user– Object ←[98]– Array (100) ←.statuses– Object ←[1]– Array (2) ←.documents– Object ←.__retained– GlobalObject`                                                                       |
| +100.0% |  +4.304 KiB | 0.3% → 0.4% |  4.3 KiB → 8.61 KiB | `Sun Aug 31 00:16:06 +0000 2014`                      | `Sun Aug 31 00:16:06 +0000 2014 ←.created_at– Object ←.retweeted_status– Object ←[93]– Array (100) ←.statuses– Object ←[1]– Array (2) ←.documents– Object ←.__retained– GlobalObject`                                                 |
| +100.0% |  +4.304 KiB | 0.3% → 0.4% |  4.3 KiB → 8.61 KiB | `Tue Aug 19 14:45:19 +0000 2014`                      | `Tue Aug 19 14:45:19 +0000 2014 ←.created_at– Object ←.user– Object ←.retweeted_status– Object ←[93]– Array (100) ←.statuses– Object ←[1]– Array (2) ←.documents– Object ←.__retained– GlobalObject`                                  |
| +100.0% |  +3.515 KiB | 0.2% → 0.4% | 3.52 KiB → 7.03 KiB | `<a href="http://twitter.com/download/iphone" rel=…`  | `<a href="http://twitter.com/download/iphone" rel=… ←.source– Object ←[98]– Array (100) ←.statuses– Object ←[1]– Array (2) ←.documents– Object ←.__retained– GlobalObject`                                                            |
| +100.0% |  +2.945 KiB | 0.2% → 0.3% | 2.95 KiB → 5.89 KiB | `505871615125491712`                                  | `505871615125491712 ←.id_str– Object ←.retweeted_status– Object ←[93]– Array (100) ←.statuses– Object ←[1]– Array (2) ←.documents– Object ←.__retained– GlobalObject`                                                                 |
| +100.0% |  +2.872 KiB | 0.2% → 0.3% | 2.87 KiB → 5.74 KiB | `recent`                                              | `recent ←.result_type– Object ←.metadata– Object ←[99]– Array (100) ←.statuses– Object ←[1]– Array (2) ←.documents– Object ←.__retained– GlobalObject`                                                                                |
| +100.0% |  +2.739 KiB | 0.2% → 0.3% | 2.74 KiB → 5.48 KiB | `333333`                                              | `333333 ←.profile_text_color– Object ←.user– Object ←[99]– Array (100) ←.statuses– Object ←[1]– Array (2) ←.documents– Object ←.__retained– GlobalObject`                                                                             |
| +100.0% |  +2.656 KiB | 0.2% → 0.3% | 2.66 KiB → 5.31 KiB | `DDEEF6`                                              | `DDEEF6 ←.profile_sidebar_fill_color– Object ←.user– Object ←[99]– Array (100) ←.statuses– Object ←[1]– Array (2) ←.documents– Object ←.__retained– GlobalObject`                                                                     |
| +100.0% |  +2.606 KiB | 0.2% → 0.3% | 2.61 KiB → 5.21 KiB | `0084B4`                                              | `0084B4 ←.profile_link_color– Object ←.user– Object ←[98]– Array (100) ←.statuses– Object ←[1]– Array (2) ←.documents– Object ←.__retained– GlobalObject`                                                                             |

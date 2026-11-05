# Heap snapshot diff

Held 5.13 MiB → 5.57 MiB (+449.875 KiB, +8.6%) over 68,532 → 76,227 nodes and 285,572 → 308,335 edges.

| Category            | Change |        Delta |             % |                Size |           Nodes |
| ------------------- | -----: | -----------: | ------------: | ------------------: | --------------: |
| Code                |    ~0% |       +136 B | 41.4% → 38.1% |            2.12 MiB | 22,352 → 22,353 |
| String              | +37.2% | +265.585 KiB | 13.6% → 17.2% |   714 KiB → 980 KiB | 17,054 → 21,665 |
| Array               |  +5.2% |  +42.679 KiB | 15.5% → 15.0% |   814 KiB → 857 KiB |   2,940 → 4,294 |
| Object shape        |   0.0% |          0 B |  10.1% → 9.3% |             528 KiB |           5,807 |
| Object              | +43.6% |  +134.21 KiB |   5.9% → 7.8% |   308 KiB → 442 KiB |   4,013 → 5,277 |
| Function            |   0.0% |          0 B |   6.8% → 6.3% |             358 KiB |           6,180 |
| Internal            |   0.0% |          0 B |   5.4% → 5.0% |             286 KiB |           8,249 |
| Concatenated string |   0.0% |          0 B |          0.4% |            20.8 KiB |             666 |
| Native              |   0.0% |          0 B |          0.4% |            20.3 KiB |             124 |
| Number              | +85.6% |   +7.265 KiB |   0.2% → 0.3% | 8.48 KiB → 15.8 KiB |     543 → 1,008 |
| Sliced string       |   0.0% |          0 B |          0.1% |            6.63 KiB |             212 |
| Symbol              |   0.0% |          0 B |          0.1% |            6.52 KiB |             278 |
| Synthetic           |   0.0% |          0 B |          0.1% |            2.99 KiB |              34 |
| Regular expression  |   0.0% |          0 B |  0.1% → <0.1% |            2.79 KiB |              51 |
| Big number          |   0.0% |          0 B |         <0.1% |               672 B |              29 |

Paths starting with `./` or `../` are relative to `/private/tmp/profiler-md-node-heap-snapshot/`.

## Largest constructors

### Self size

#### Regressions

Constructors with the largest increase in instance bytes, excluding referenced nodes. Categories account for at least 1.0% of self size on the base or the current side.

| Change |       Delta |           % |                Size |     Instances | Constructor | Location    |
| -----: | ----------: | ----------: | ------------------: | ------------: | ----------- | ----------- |
| +75.4% | +134.21 KiB | 3.4% → 5.5% |   178 KiB → 312 KiB | 2,174 → 3,438 | `Object`    | `<unknown>` |
| +85.1% | +32.812 KiB | 0.7% → 1.3% | 38.6 KiB → 71.4 KiB | 1,231 → 2,281 | `Array`     | `<unknown>` |

##### Object

| Change |       Delta |           % |              Size |     Instances | Constructor | Location    |
| -----: | ----------: | ----------: | ----------------: | ------------: | ----------- | ----------- |
| +75.4% | +134.21 KiB | 3.4% → 5.5% | 178 KiB → 312 KiB | 2,174 → 3,438 | `Object`    | `<unknown>` |

##### Array

| Change |       Delta |           % |                Size |     Instances | Constructor | Location    |
| -----: | ----------: | ----------: | ------------------: | ------------: | ----------- | ----------- |
| +85.1% | +32.812 KiB | 0.7% → 1.3% | 38.6 KiB → 71.4 KiB | 1,231 → 2,281 | `Array`     | `<unknown>` |

#### Retainer paths

Retainer paths with the largest change in contribution to each constructor's self size.

##### `Object` (`<unknown>`)

|  Change |       Delta |             % |                Size | Instances | Path                                               |
| ------: | ----------: | ------------: | ------------------: | --------: | -------------------------------------------------- |
| +100.0% | +33.484 KiB | 18.8% → 21.5% |   33.5 KiB → 67 KiB | 100 → 200 | `Object ←.user– Object`                            |
| +100.0% | +24.507 KiB | 13.8% → 15.7% |   24.5 KiB → 49 KiB |  73 → 146 | `Object ←.user– Object ←.retweeted_status– Object` |
|  +76.5% | +21.328 KiB | 15.7% → 15.8% | 27.9 KiB → 49.2 KiB | 223 → 323 | `Object ← (GC root)`                               |
| +100.0% |  +14.89 KiB |   8.4% → 9.5% | 14.9 KiB → 29.8 KiB |  73 → 146 | `Object ←.retweeted_status– Object`                |
| +100.0% |  +5.515 KiB |   3.1% → 3.5% |   5.52 KiB → 11 KiB | 100 → 200 | `Object ←.entities– Object`                        |

##### `Array` (`<unknown>`)

|  Change |      Delta |           % |                Size | Instances | Path                                                                           |
| ------: | ---------: | ----------: | ------------------: | --------: | ------------------------------------------------------------------------------ |
| +101.0% | +3.125 KiB | 8.0% → 8.7% | 3.09 KiB → 6.22 KiB |  99 → 199 | `Array ←.hashtags– Object ←.entities– Object`                                  |
| +100.0% | +3.125 KiB | 8.1% → 8.8% | 3.13 KiB → 6.25 KiB | 100 → 200 | `Array ←.symbols– Object ←.entities– Object`                                   |
| +100.0% | +3.125 KiB | 8.1% → 8.8% | 3.13 KiB → 6.25 KiB | 100 → 200 | `Array ←.urls– Object ←.entities– Object`                                      |
| +100.0% | +3.125 KiB | 8.1% → 8.8% | 3.13 KiB → 6.25 KiB | 100 → 200 | `Array ←.user_mentions– Object ←.entities– Object`                             |
| +100.0% | +3.125 KiB | 8.1% → 8.8% | 3.13 KiB → 6.25 KiB | 100 → 200 | `Array ←.urls– Object ←.description– Object ←.entities– Object ←.user– Object` |

### Retained size

#### Regressions

Constructors with the largest increase in instance bytes, including nodes only the instances keep alive. Categories account for at least 1.0% of self size on the base or the current side.

|  Change |        Delta |             % |                Size |     Instances | Constructor | Location    |
| ------: | -----------: | ------------: | ------------------: | ------------: | ----------- | ----------- |
| +300.7% | +453.171 KiB |  2.9% → 10.6% |   151 KiB → 604 KiB | 1,231 → 2,281 | `Array`     | `<unknown>` |
|  +32.4% | +448.796 KiB | 26.4% → 32.2% | 1.35 MiB → 1.79 MiB | 2,174 → 3,438 | `Object`    | `<unknown>` |

##### Object

| Change |        Delta |             % |                Size |     Instances | Constructor | Location    |
| -----: | -----------: | ------------: | ------------------: | ------------: | ----------- | ----------- |
| +32.4% | +448.796 KiB | 26.4% → 32.2% | 1.35 MiB → 1.79 MiB | 2,174 → 3,438 | `Object`    | `<unknown>` |

##### Array

|  Change |        Delta |            % |              Size |     Instances | Constructor | Location    |
| ------: | -----------: | -----------: | ----------------: | ------------: | ----------- | ----------- |
| +300.7% | +453.171 KiB | 2.9% → 10.6% | 151 KiB → 604 KiB | 1,231 → 2,281 | `Array`     | `<unknown>` |

#### Retainer paths

Retainer paths with the largest change in contribution to each constructor's retained size.

##### `Array` (`<unknown>`)

|  Change |      Delta |            % |                Size | Instances | Path                                                                             |
| ------: | ---------: | -----------: | ------------------: | --------: | -------------------------------------------------------------------------------- |
| +100.4% | +25.39 KiB | 16.8% → 8.4% | 25.3 KiB → 50.7 KiB | 100 → 200 | `Array ←.user_mentions– Object ←.entities– Object`                               |
| +100.0% | +6.914 KiB |  4.6% → 2.3% | 6.91 KiB → 13.8 KiB | 100 → 200 | `Array ←.urls– Object ←.entities– Object`                                        |
|  +87.2% | +5.429 KiB |  4.1% → 1.9% | 6.23 KiB → 11.7 KiB |    6 → 12 | `Array ←.media– Object ←.entities– Object`                                       |
| +100.0% | +5.187 KiB |  3.4% → 1.7% | 5.19 KiB → 10.4 KiB |  83 → 166 | `Array ←.indices– Object ←[0]– Array ←.user_mentions– Object ←.entities– Object` |
| +100.0% | +4.156 KiB |  2.8% → 1.4% | 4.16 KiB → 8.31 KiB | 100 → 200 | `Array ←.urls– Object ←.description– Object ←.entities– Object ←.user– Object`   |

##### `Object` (`<unknown>`)

|  Change |        Delta |             % |               Size | Instances | Path                                               |
| ------: | -----------: | ------------: | -----------------: | --------: | -------------------------------------------------- |
|  +50.0% | +446.281 KiB | 64.3% → 72.9% | 892 KiB → 1.31 MiB | 223 → 323 | `Object ← (GC root)`                               |
| +100.0% |  +179.96 KiB | 13.0% → 19.6% |  180 KiB → 360 KiB |  73 → 146 | `Object ←.retweeted_status– Object`                |
| +100.1% | +135.015 KiB |  9.7% → 14.7% |  135 KiB → 270 KiB | 100 → 200 | `Object ←.user– Object`                            |
| +100.1% |  +99.359 KiB |  7.2% → 10.8% | 99.3 KiB → 199 KiB |  73 → 146 | `Object ←.user– Object ←.retweeted_status– Object` |
|  +98.9% |  +50.484 KiB |   3.7% → 5.5% |   51 KiB → 102 KiB | 100 → 200 | `Object ←.entities– Object`                        |

## Largest functions

### Regressions

Functions with the largest increase in instance bytes, including nodes only the instances keep alive.

|  Change |  Delta |     % |     Retained | Instances | Paths | Name    | Location                   | Example path        |
| ------: | -----: | ----: | -----------: | --------: | ----: | ------- | -------------------------- | ------------------- |
| +154.5% | +136 B | <0.1% | 88 B → 224 B |         1 |     1 | `isURL` | `node:internal/url:770:15` | `isURL ← (GC root)` |

### Retained nodes

Retained nodes with the largest change in contribution to each function's retained size.

#### `isURL` (`node:internal/url:770:15`)

| Change |  Delta |            % |        Self | Name                      | Location    | Path to function                                                                                           |
| -----: | -----: | -----------: | ----------: | ------------------------- | ----------- | ---------------------------------------------------------------------------------------------------------- |
|    new | +136 B | 0.0% → 60.7% | 0 B → 136 B | `system / FeedbackVector` | `<unknown>` | `system / FeedbackVector ←.value– system / FeedbackCell ←.feedback_cell– isURL (node:internal/url:770:15)` |

## Largest strings

### Regressions

Strings with the largest increase in bytes. Categories account for at least 1.0% of self size on the base or the current side.

#### String

|  Change |       Delta |           % |                Size | Value                                                 | Path                                                                                                                                       |
| ------: | ----------: | ----------: | ------------------: | ----------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| +100.0% | +16.765 KiB | 0.3% → 0.6% | 16.8 KiB → 33.5 KiB | `RT @shiawaseomamori: 一に止まると書いて、正しいという意味だなんて、この年にな…`  | `RT @shiawaseomamori: 一に止まると書いて、正しいという意味だなんて、この年にな… ←.text– Object`                                                                        |
| +100.0% | +16.765 KiB | 0.3% → 0.6% | 16.8 KiB → 33.5 KiB | `一に止まると書いて、正しいという意味だなんて、この年になるまで知りませんでした。 人は生きていると…`  | `一に止まると書いて、正しいという意味だなんて、この年になるまで知りませんでした。 人は生きていると… ←.text– Object ←.retweeted_status– Object`                                             |
| +100.0% | +11.789 KiB | 0.2% → 0.4% | 11.8 KiB → 23.6 KiB | `ja`                                                  | `ja ←.lang– Object`                                                                                                                        |
| +100.0% | +10.757 KiB | 0.2% → 0.4% | 10.8 KiB → 21.5 KiB | `https://abs.twimg.com/images/themes/theme1/bg.png`   | `https://abs.twimg.com/images/themes/theme1/bg.png ←.profile_background_image_url_https– Object ←.user– Object ←.retweeted_status– Object` |
| +100.0% |  +9.968 KiB | 0.2% → 0.3% | 9.97 KiB → 19.9 KiB | `自分が幸せだと周りも幸せにできる！  \nそんな人生を精一杯生きるために必要な言葉をお届けします♪ …` | `自分が幸せだと周りも幸せにできる！  \nそんな人生を精一杯生きるために必要な言葉をお届けします♪ … ←.description– Object ←.user– Object ←.retweeted_status– Object`                      |
| +100.0% |  +9.562 KiB | 0.2% → 0.3% | 9.56 KiB → 19.1 KiB | `http://abs.twimg.com/images/themes/theme1/bg.png`    | `http://abs.twimg.com/images/themes/theme1/bg.png ←.profile_background_image_url– Object ←.user– Object ←.retweeted_status– Object`        |
| +100.0% |  +9.062 KiB | 0.2% → 0.3% | 9.06 KiB → 18.1 KiB | `<a href="https://twitter.com/shiawaseomamori" rel…`  | `<a href="https://twitter.com/shiawaseomamori" rel… ←.source– Object ←.retweeted_status– Object`                                           |
| +100.0% |  +7.312 KiB | 0.1% → 0.3% | 7.31 KiB → 14.6 KiB | `C0DEED`                                              | `C0DEED ←.profile_sidebar_border_color– Object ←.user– Object ←.retweeted_status– Object`                                                  |
| +100.0% |  +5.437 KiB | 0.1% → 0.2% | 5.44 KiB → 10.9 KiB | `http://pbs.twimg.com/profile_images/5017424376062…`  | `http://pbs.twimg.com/profile_images/5017424376062… ←.profile_image_url– Object ←.user– Object ←.retweeted_status– Object`                 |
| +100.0% |  +5.437 KiB | 0.1% → 0.2% | 5.44 KiB → 10.9 KiB | `https://pbs.twimg.com/profile_images/501742437606…`  | `https://pbs.twimg.com/profile_images/501742437606… ←.profile_image_url_https– Object ←.user– Object ←.retweeted_status– Object`           |
| +100.0% |  +4.531 KiB | 0.1% → 0.2% | 4.53 KiB → 9.06 KiB | `https://pbs.twimg.com/profile_banners/2745121514/…`  | `https://pbs.twimg.com/profile_banners/2745121514/… ←.profile_banner_url– Object ←.user– Object ←.retweeted_status– Object`                |
| +100.0% |  +4.054 KiB |        0.1% | 4.05 KiB → 8.11 KiB | `recent`                                              | `recent ←.result_type– Object ←.metadata– Object`                                                                                          |
| +100.0% |  +3.867 KiB |        0.1% | 3.87 KiB → 7.73 KiB | `333333`                                              | `333333 ←.profile_text_color– Object ←.user– Object ←.retweeted_status– Object`                                                            |
| +100.0% |   +3.75 KiB |        0.1% |  3.75 KiB → 7.5 KiB | `DDEEF6`                                              | `DDEEF6 ←.profile_sidebar_fill_color– Object ←.user– Object ←.retweeted_status– Object`                                                    |
| +100.0% |  +3.679 KiB |        0.1% | 3.68 KiB → 7.36 KiB | `0084B4`                                              | `0084B4 ←.profile_link_color– Object ←.user– Object`                                                                                       |
| +100.0% |  +3.625 KiB |        0.1% | 3.63 KiB → 7.25 KiB | `2745121514`                                          | `2745121514 ←.id_str– Object ←.user– Object ←.retweeted_status– Object`                                                                    |
| +100.0% |  +3.625 KiB |        0.1% | 3.63 KiB → 7.25 KiB | `幸せの☆お守り`                                             | `幸せの☆お守り ←.name– Object ←.user– Object ←.retweeted_status– Object`                                                                         |
| +100.0% |  +3.625 KiB |        0.1% | 3.63 KiB → 7.25 KiB | `shiawaseomamori`                                     | `shiawaseomamori ←.screen_name– Object ←.user– Object ←.retweeted_status– Object`                                                          |
| +100.0% |  +2.718 KiB |        0.1% | 2.72 KiB → 5.44 KiB | `Sun Aug 31 00:16:06 +0000 2014`                      | `Sun Aug 31 00:16:06 +0000 2014 ←.created_at– Object ←.retweeted_status– Object`                                                           |
| +100.0% |  +2.718 KiB |        0.1% | 2.72 KiB → 5.44 KiB | `Tue Aug 19 14:45:19 +0000 2014`                      | `Tue Aug 19 14:45:19 +0000 2014 ←.created_at– Object ←.user– Object ←.retweeted_status– Object`                                            |

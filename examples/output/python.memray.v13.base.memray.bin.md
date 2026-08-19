# Peak memory profile

Held 78.6 MiB over 22,667 allocations (3.55 KiB per allocation).

| Category         |     % |     Size | Allocations |
| ---------------- | ----: | -------: | ----------: |
| Ours             | 82.9% | 65.2 MiB |      21,440 |
| Standard library | 16.7% | 13.1 MiB |         994 |
| Third-party      |  0.3% |  276 KiB |         233 |

## Hottest functions

### Self size

Functions ranked by bytes held at peak memory directly in the function body, excluding callees.

|     % |     Size | Allocations | Function              | Location                                     |
| ----: | -------: | ----------: | --------------------- | -------------------------------------------- |
| 21.9% | 17.2 MiB |      20,789 | `mark`                | `black/brackets.py:70`                       |
| 11.6% | 9.12 MiB |         142 | `parse`               | `/usr/lib/python3.11/ast.py:33`              |
|  9.0% |  7.1 MiB |           4 | `assert_equivalent`   | `black/__init__.py:1524`                     |
|  8.9% |    7 MiB |           8 | `visit_power`         | `black/linegen.py:341`                       |
|  7.6% |    6 MiB |           6 | `changed`             | `blib2to3/pytree.py:171`                     |
|  6.5% | 5.14 MiB |         200 | `update_sibling_maps` | `blib2to3/pytree.py:369`                     |
|  6.4% | 5.05 MiB |          61 | `_stringify_ast`      | `black/parsing.py:174`                       |
|  6.4% |    5 MiB |           5 | `__new__`             | `blib2to3/pytree.py:81`                      |
|  3.2% | 2.53 MiB |         593 | `_compile_bytecode`   | `<frozen importlib._bootstrap_external>:727` |
|  2.6% | 2.01 MiB |          13 | `parse_tokens`        | `blib2to3/pgen2/driver.py:114`               |
|  2.5% |    2 MiB |           2 | `convert`             | `blib2to3/pytree.py:486`                     |
|  1.3% |    1 MiB |           5 | `__init__`            | `blib2to3/pytree.py:248`                     |
|  1.3% |    1 MiB |           1 | `prev_sibling`        | `blib2to3/pytree.py:207`                     |
|  1.3% |    1 MiB |           1 | `prefix`              | `blib2to3/pytree.py:480`                     |
|  1.3% |    1 MiB |           1 | `__init__`            | `<string>:2`                                 |
|  1.3% |    1 MiB |           1 | `<listcomp>`          | `black/parsing.py:154`                       |
|  1.3% |    1 MiB |           1 | `__str__`             | `blib2to3/pytree.py:440`                     |
|  1.3% |    1 MiB |           1 | `push`                | `blib2to3/pgen2/parse.py:386`                |
|  1.3% |    1 MiB |           1 | `generate_tokens`     | `blib2to3/pgen2/tokenize.py:565`             |
|  1.3% |    1 MiB |           1 | `__getitem__`         | `/usr/lib/python3.11/typing.py:1531`         |

#### Categories

##### Ours

|     % |     Size | Allocations | Function                  | Location                         |
| ----: | -------: | ----------: | ------------------------- | -------------------------------- |
| 21.9% | 17.2 MiB |      20,789 | `mark`                    | `black/brackets.py:70`           |
|  9.0% |  7.1 MiB |           4 | `assert_equivalent`       | `black/__init__.py:1524`         |
|  8.9% |    7 MiB |           8 | `visit_power`             | `black/linegen.py:341`           |
|  7.6% |    6 MiB |           6 | `changed`                 | `blib2to3/pytree.py:171`         |
|  6.5% | 5.14 MiB |         200 | `update_sibling_maps`     | `blib2to3/pytree.py:369`         |
|  6.4% | 5.05 MiB |          61 | `_stringify_ast`          | `black/parsing.py:174`           |
|  6.4% |    5 MiB |           5 | `__new__`                 | `blib2to3/pytree.py:81`          |
|  2.6% | 2.01 MiB |          13 | `parse_tokens`            | `blib2to3/pgen2/driver.py:114`   |
|  2.5% |    2 MiB |           2 | `convert`                 | `blib2to3/pytree.py:486`         |
|  1.3% |    1 MiB |           5 | `__init__`                | `blib2to3/pytree.py:248`         |
|  1.3% |    1 MiB |           1 | `prev_sibling`            | `blib2to3/pytree.py:207`         |
|  1.3% |    1 MiB |           1 | `prefix`                  | `blib2to3/pytree.py:480`         |
|  1.3% |    1 MiB |           1 | `__init__`                | `<string>:2`                     |
|  1.3% |    1 MiB |           1 | `<listcomp>`              | `black/parsing.py:154`           |
|  1.3% |    1 MiB |           1 | `__str__`                 | `blib2to3/pytree.py:440`         |
|  1.3% |    1 MiB |           1 | `push`                    | `blib2to3/pgen2/parse.py:386`    |
|  1.3% |    1 MiB |           1 | `generate_tokens`         | `blib2to3/pgen2/tokenize.py:565` |
|  0.3% |  225 KiB |           5 | `_format_str_once`        | `black/__init__.py:1236`         |
|  0.1% | 57.2 KiB |          65 | `normalize_string_prefix` | `black/strings.py:143`           |
|  0.1% | 46.7 KiB |          49 | `load`                    | `blib2to3/pgen2/grammar.py:121`  |

##### Standard library

|     % |     Size | Allocations | Function                   | Location                                          |
| ----: | -------: | ----------: | -------------------------- | ------------------------------------------------- |
| 11.6% | 9.12 MiB |         142 | `parse`                    | `/usr/lib/python3.11/ast.py:33`                   |
|  3.2% | 2.53 MiB |         593 | `_compile_bytecode`        | `<frozen importlib._bootstrap_external>:727`      |
|  1.3% |    1 MiB |           1 | `__getitem__`              | `/usr/lib/python3.11/typing.py:1531`              |
|  0.3% |  222 KiB |           1 | `decode`                   | `<frozen codecs>:319`                             |
|  0.1% | 75.7 KiB |          79 | `__new__`                  | `<frozen abc>:105`                                |
| <0.1% |   23 KiB |          26 | `__new__`                  | `/usr/lib/python3.11/enum.py:488`                 |
| <0.1% | 22.6 KiB |          12 | `compile`                  | `/usr/lib/python3.11/re/_compiler.py:738`         |
| <0.1% | 19.8 KiB |          12 | `<module>`                 | `/usr/lib/python3.11/tomllib/_parser.py:1`        |
| <0.1% | 17.4 KiB |          21 | `__new__`                  | `/usr/lib/python3.11/typing.py:2891`              |
| <0.1% |   12 KiB |           3 | `inner`                    | `/usr/lib/python3.11/typing.py:338`               |
| <0.1% |    8 KiB |           4 | `_fill_cache`              | `<frozen importlib._bootstrap_external>:1655`     |
| <0.1% | 7.97 KiB |           1 | `_parse_sub`               | `/usr/lib/python3.11/re/_parser.py:447`           |
| <0.1% | 6.73 KiB |           8 | `__setattr__`              | `/usr/lib/python3.11/enum.py:831`                 |
| <0.1% | 5.63 KiB |           6 | `namedtuple`               | `/usr/lib/python3.11/collections/__init__.py:348` |
| <0.1% | 5.61 KiB |           3 | `_parse`                   | `/usr/lib/python3.11/re/_parser.py:507`           |
| <0.1% | 5.32 KiB |           2 | `_code`                    | `/usr/lib/python3.11/re/_compiler.py:571`         |
| <0.1% | 4.73 KiB |           6 | `<module>`                 | `/usr/lib/python3.11/pkgutil.py:1`                |
| <0.1% | 2.85 KiB |           1 | `wrap`                     | `/usr/lib/python3.11/dataclasses.py:1209`         |
| <0.1% | 2.85 KiB |           4 | `_process_class`           | `/usr/lib/python3.11/dataclasses.py:884`          |
| <0.1% | 2.56 KiB |           3 | `_signature_from_function` | `/usr/lib/python3.11/inspect.py:2331`             |

#### Lines

Lines ranked by contribution to each function's self size.

##### `mark` (`black/brackets.py:70`)

|     % |     Size | Allocations | Location                |
| ----: | -------: | ----------: | ----------------------- |
| 94.2% | 16.2 MiB |      20,787 | `black/brackets.py:112` |
|  5.8% |    1 MiB |           1 | `black/brackets.py:118` |
| <0.1% | 1.49 KiB |           1 | `black/brackets.py:114` |

##### `parse` (`/usr/lib/python3.11/ast.py:33`)

|      % |     Size | Allocations | Location                        |
| -----: | -------: | ----------: | ------------------------------- |
| 100.0% | 9.12 MiB |         142 | `/usr/lib/python3.11/ast.py:50` |

##### `assert_equivalent` (`black/__init__.py:1524`)

|     % |     Size | Allocations | Location                 |
| ----: | -------: | ----------: | ------------------------ |
| 55.4% | 3.93 MiB |           2 | `black/__init__.py:1547` |
| 44.6% | 3.17 MiB |           2 | `black/__init__.py:1546` |

##### `visit_power` (`black/linegen.py:341`)

|     % |  Size | Allocations | Location               |
| ----: | ----: | ----------: | ---------------------- |
| 85.7% | 6 MiB |           6 | `black/linegen.py:342` |
| 14.3% | 1 MiB |           1 | `black/linegen.py:348` |
| <0.1% | 904 B |           1 | `black/linegen.py:361` |

##### `changed` (`blib2to3/pytree.py:171`)

|     % |  Size | Allocations | Location                 |
| ----: | ----: | ----------: | ------------------------ |
| 66.7% | 4 MiB |           4 | `blib2to3/pytree.py:175` |
| 33.3% | 2 MiB |           2 | `blib2to3/pytree.py:176` |

##### `update_sibling_maps` (`blib2to3/pytree.py:369`)

|     % |     Size | Allocations | Location                 |
| ----: | -------: | ----------: | ------------------------ |
| 40.2% | 2.07 MiB |          95 | `blib2to3/pytree.py:376` |
| 38.9% |    2 MiB |           2 | `blib2to3/pytree.py:371` |
| 20.8% | 1.07 MiB |          94 | `blib2to3/pytree.py:377` |
|  0.1% | 4.99 KiB |           9 | `blib2to3/pytree.py:379` |

##### `_stringify_ast` (`black/parsing.py:174`)

|     % |     Size | Allocations | Location               |
| ----: | -------: | ----------: | ---------------------- |
| 39.6% |    2 MiB |           2 | `black/parsing.py:244` |
| 39.6% |    2 MiB |           2 | `black/parsing.py:197` |
| 19.8% |    1 MiB |           1 | `black/parsing.py:185` |
|  0.9% | 46.8 KiB |          56 | `black/parsing.py:240` |

##### `__new__` (`blib2to3/pytree.py:81`)

|      % |  Size | Allocations | Location                |
| -----: | ----: | ----------: | ----------------------- |
| 100.0% | 5 MiB |           5 | `blib2to3/pytree.py:84` |

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>:727`)

|      % |     Size | Allocations | Location                                     |
| -----: | -------: | ----------: | -------------------------------------------- |
| 100.0% | 2.53 MiB |         593 | `<frozen importlib._bootstrap_external>:729` |

##### `parse_tokens` (`blib2to3/pgen2/driver.py:114`)

|     % |     Size | Allocations | Location                       |
| ----: | -------: | ----------: | ------------------------------ |
| 49.8% |    1 MiB |           3 | `blib2to3/pgen2/driver.py:141` |
| 49.8% |    1 MiB |           1 | `blib2to3/pgen2/driver.py:172` |
|  0.4% | 8.13 KiB |           8 | `blib2to3/pgen2/driver.py:138` |
| <0.1% |    886 B |           1 | `blib2to3/pgen2/driver.py:162` |

##### `convert` (`blib2to3/pytree.py:486`)

|      % |  Size | Allocations | Location                 |
| -----: | ----: | ----------: | ------------------------ |
| 100.0% | 2 MiB |           2 | `blib2to3/pytree.py:501` |

##### `__init__` (`blib2to3/pytree.py:248`)

|      % |  Size | Allocations | Location                 |
| -----: | ----: | ----------: | ------------------------ |
| 100.0% | 1 MiB |           5 | `blib2to3/pytree.py:266` |

##### `prev_sibling` (`blib2to3/pytree.py:207`)

|      % |  Size | Allocations | Location                 |
| -----: | ----: | ----------: | ------------------------ |
| 100.0% | 1 MiB |           1 | `blib2to3/pytree.py:219` |

##### `prefix` (`blib2to3/pytree.py:480`)

|      % |  Size | Allocations | Location                 |
| -----: | ----: | ----------: | ------------------------ |
| 100.0% | 1 MiB |           1 | `blib2to3/pytree.py:482` |

##### `__init__` (`<string>:2`)

|      % |  Size | Allocations | Location     |
| -----: | ----: | ----------: | ------------ |
| 100.0% | 1 MiB |           1 | `<string>:4` |

##### `<listcomp>` (`black/parsing.py:154`)

|      % |  Size | Allocations | Location               |
| -----: | ----: | ----------: | ---------------------- |
| 100.0% | 1 MiB |           1 | `black/parsing.py:154` |

##### `__str__` (`blib2to3/pytree.py:440`)

|      % |  Size | Allocations | Location                 |
| -----: | ----: | ----------: | ------------------------ |
| 100.0% | 1 MiB |           1 | `blib2to3/pytree.py:446` |

##### `push` (`blib2to3/pgen2/parse.py:386`)

|      % |  Size | Allocations | Location                      |
| -----: | ----: | ----------: | ----------------------------- |
| 100.0% | 1 MiB |           1 | `blib2to3/pgen2/parse.py:394` |

##### `generate_tokens` (`blib2to3/pgen2/tokenize.py:565`)

|      % |  Size | Allocations | Location                         |
| -----: | ----: | ----------: | -------------------------------- |
| 100.0% | 1 MiB |           1 | `blib2to3/pgen2/tokenize.py:972` |

##### `__getitem__` (`/usr/lib/python3.11/typing.py:1531`)

|      % |  Size | Allocations | Location                             |
| -----: | ----: | ----------: | ------------------------------------ |
| 100.0% | 1 MiB |           1 | `/usr/lib/python3.11/typing.py:1536` |

##### `_format_str_once` (`black/__init__.py:1236`)

|     % |     Size | Allocations | Location                 |
| ----: | -------: | ----------: | ------------------------ |
| 98.6% |  222 KiB |           1 | `black/__init__.py:1287` |
|  0.5% | 1.07 KiB |           1 | `black/__init__.py:1271` |
|  0.3% |    800 B |           1 | `black/__init__.py:1239` |
|  0.3% |    644 B |           1 | `black/__init__.py:1269` |
|  0.3% |    638 B |           1 | `black/__init__.py:1244` |

##### `decode` (`<frozen codecs>:319`)

|      % |    Size | Allocations | Location              |
| -----: | ------: | ----------: | --------------------- |
| 100.0% | 222 KiB |           1 | `<frozen codecs>:322` |

##### `__new__` (`<frozen abc>:105`)

|      % |     Size | Allocations | Location           |
| -----: | -------: | ----------: | ------------------ |
| 100.0% | 75.7 KiB |          79 | `<frozen abc>:106` |

##### `normalize_string_prefix` (`black/strings.py:143`)

|      % |     Size | Allocations | Location               |
| -----: | -------: | ----------: | ---------------------- |
| 100.0% | 57.2 KiB |          65 | `black/strings.py:158` |

##### `load` (`blib2to3/pgen2/grammar.py:121`)

|      % |     Size | Allocations | Location                        |
| -----: | -------: | ----------: | ------------------------------- |
| 100.0% | 46.7 KiB |          49 | `blib2to3/pgen2/grammar.py:124` |

##### `__new__` (`/usr/lib/python3.11/enum.py:488`)

|      % |   Size | Allocations | Location                          |
| -----: | -----: | ----------: | --------------------------------- |
| 100.0% | 23 KiB |          26 | `/usr/lib/python3.11/enum.py:554` |

##### `compile` (`/usr/lib/python3.11/re/_compiler.py:738`)

|      % |     Size | Allocations | Location                                  |
| -----: | -------: | ----------: | ----------------------------------------- |
| 100.0% | 22.6 KiB |          12 | `/usr/lib/python3.11/re/_compiler.py:759` |

##### `<module>` (`/usr/lib/python3.11/tomllib/_parser.py:1`)

|     % |  Size | Allocations | Location                                    |
| ----: | ----: | ----------: | ------------------------------------------- |
| 20.2% | 4 KiB |           1 | `/usr/lib/python3.11/tomllib/_parser.py:37` |
| 10.1% | 2 KiB |           1 | `/usr/lib/python3.11/tomllib/_parser.py:26` |
| 10.1% | 2 KiB |           1 | `/usr/lib/python3.11/tomllib/_parser.py:22` |
| 10.1% | 2 KiB |           1 | `/usr/lib/python3.11/tomllib/_parser.py:38` |
| 10.1% | 2 KiB |           1 | `/usr/lib/python3.11/tomllib/_parser.py:27` |

##### `__new__` (`/usr/lib/python3.11/typing.py:2891`)

|      % |     Size | Allocations | Location                             |
| -----: | -------: | ----------: | ------------------------------------ |
| 100.0% | 17.4 KiB |          21 | `/usr/lib/python3.11/typing.py:2909` |

##### `inner` (`/usr/lib/python3.11/typing.py:338`)

|      % |   Size | Allocations | Location                            |
| -----: | -----: | ----------: | ----------------------------------- |
| 100.0% | 12 KiB |           3 | `/usr/lib/python3.11/typing.py:341` |

##### `_fill_cache` (`<frozen importlib._bootstrap_external>:1655`)

|      % |  Size | Allocations | Location                                      |
| -----: | ----: | ----------: | --------------------------------------------- |
| 100.0% | 8 KiB |           4 | `<frozen importlib._bootstrap_external>:1667` |

##### `_parse_sub` (`/usr/lib/python3.11/re/_parser.py:447`)

|      % |     Size | Allocations | Location                                |
| -----: | -------: | ----------: | --------------------------------------- |
| 100.0% | 7.97 KiB |           1 | `/usr/lib/python3.11/re/_parser.py:455` |

##### `__setattr__` (`/usr/lib/python3.11/enum.py:831`)

|      % |     Size | Allocations | Location                          |
| -----: | -------: | ----------: | --------------------------------- |
| 100.0% | 6.73 KiB |           8 | `/usr/lib/python3.11/enum.py:842` |

##### `namedtuple` (`/usr/lib/python3.11/collections/__init__.py:348`)

|      % |     Size | Allocations | Location                                          |
| -----: | -------: | ----------: | ------------------------------------------------- |
| 100.0% | 5.63 KiB |           6 | `/usr/lib/python3.11/collections/__init__.py:501` |

##### `_parse` (`/usr/lib/python3.11/re/_parser.py:507`)

|     % |     Size | Allocations | Location                                |
| ----: | -------: | ----------: | --------------------------------------- |
| 43.4% | 2.43 KiB |           1 | `/usr/lib/python3.11/re/_parser.py:539` |
| 33.9% |  1.9 KiB |           1 | `/usr/lib/python3.11/re/_parser.py:568` |
| 22.7% | 1.28 KiB |           1 | `/usr/lib/python3.11/re/_parser.py:838` |

##### `_code` (`/usr/lib/python3.11/re/_compiler.py:571`)

|     % |     Size | Allocations | Location                                  |
| ----: | -------: | ----------: | ----------------------------------------- |
| 81.6% | 4.34 KiB |           1 | `/usr/lib/python3.11/re/_compiler.py:580` |
| 18.4% |   1002 B |           1 | `/usr/lib/python3.11/re/_compiler.py:577` |

##### `<module>` (`/usr/lib/python3.11/pkgutil.py:1`)

|     % |     Size | Allocations | Location                             |
| ----: | -------: | ----------: | ------------------------------------ |
| 35.7% | 1.69 KiB |           2 | `/usr/lib/python3.11/pkgutil.py:269` |
| 35.7% | 1.69 KiB |           2 | `/usr/lib/python3.11/pkgutil.py:194` |
| 15.9% |    768 B |           1 | `/usr/lib/python3.11/pkgutil.py:137` |
| 12.8% |    620 B |           1 | `/usr/lib/python3.11/pkgutil.py:184` |

##### `wrap` (`/usr/lib/python3.11/dataclasses.py:1209`)

|      % |     Size | Allocations | Location                                  |
| -----: | -------: | ----------: | ----------------------------------------- |
| 100.0% | 2.85 KiB |           1 | `/usr/lib/python3.11/dataclasses.py:1210` |

##### `_process_class` (`/usr/lib/python3.11/dataclasses.py:884`)

|     % |     Size | Allocations | Location                                  |
| ----: | -------: | ----------: | ----------------------------------------- |
| 41.3% | 1.18 KiB |           1 | `/usr/lib/python3.11/dataclasses.py:958`  |
| 21.0% |    612 B |           1 | `/usr/lib/python3.11/dataclasses.py:1027` |
| 19.9% |    580 B |           1 | `/usr/lib/python3.11/dataclasses.py:1096` |
| 17.8% |    518 B |           1 | `/usr/lib/python3.11/dataclasses.py:947`  |

##### `_signature_from_function` (`/usr/lib/python3.11/inspect.py:2331`)

|     % |     Size | Allocations | Location                              |
| ----: | -------: | ----------: | ------------------------------------- |
| 41.4% | 1.06 KiB |           1 | `/usr/lib/python3.11/inspect.py:2358` |
| 37.0% |    972 B |           1 | `/usr/lib/python3.11/inspect.py:2376` |
| 21.6% |    568 B |           1 | `/usr/lib/python3.11/inspect.py:2421` |

#### Callers

Callers ranked by contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `mark` (`black/brackets.py:70`)

|      % |     Size | Allocations | Caller   | Location            |
| -----: | -------: | ----------: | -------- | ------------------- |
| 100.0% | 17.2 MiB |      20,789 | `append` | `black/lines.py:63` |

##### `parse` (`/usr/lib/python3.11/ast.py:33`)

|      % |     Size | Allocations | Caller                  | Location               |
| -----: | -------: | ----------: | ----------------------- | ---------------------- |
| 100.0% | 9.12 MiB |         142 | `_parse_single_version` | `black/parsing.py:117` |

##### `assert_equivalent` (`black/__init__.py:1524`)

|      % |    Size | Allocations | Caller                            | Location                 |
| -----: | ------: | ----------: | --------------------------------- | ------------------------ |
| 100.0% | 7.1 MiB |           4 | `check_stability_and_equivalence` | `black/__init__.py:1037` |

##### `visit_power` (`black/linegen.py:341`)

|      % |  Size | Allocations | Caller  | Location             |
| -----: | ----: | ----------: | ------- | -------------------- |
| 100.0% | 7 MiB |           8 | `visit` | `black/nodes.py:163` |

##### `changed` (`blib2to3/pytree.py:171`)

|     % |  Size | Allocations | Caller    | Location                 |
| ----: | ----: | ----------: | --------- | ------------------------ |
| 83.3% | 5 MiB |           5 | `changed` | `blib2to3/pytree.py:171` |
| 16.7% | 1 MiB |           1 | `prefix`  | `blib2to3/pytree.py:480` |

##### `update_sibling_maps` (`blib2to3/pytree.py:369`)

|      % |     Size | Allocations | Caller         | Location                 |
| -----: | -------: | ----------: | -------------- | ------------------------ |
| 100.0% | 5.14 MiB |         200 | `prev_sibling` | `blib2to3/pytree.py:207` |

##### `_stringify_ast` (`black/parsing.py:174`)

|      % |     Size | Allocations | Caller                           | Location               |
| -----: | -------: | ----------: | -------------------------------- | ---------------------- |
| 100.0% | 5.05 MiB |          61 | `_stringify_ast_with_new_parent` | `black/parsing.py:166` |

##### `__new__` (`blib2to3/pytree.py:81`)

|      % |  Size | Allocations | Caller    | Location                 |
| -----: | ----: | ----------: | --------- | ------------------------ |
| 100.0% | 5 MiB |           5 | `convert` | `blib2to3/pytree.py:486` |

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>:727`)

|      % |     Size | Allocations | Caller     | Location                                      |
| -----: | -------: | ----------: | ---------- | --------------------------------------------- |
| 100.0% | 2.53 MiB |         593 | `get_code` | `<frozen importlib._bootstrap_external>:1007` |

##### `parse_tokens` (`blib2to3/pgen2/driver.py:114`)

|      % |     Size | Allocations | Caller         | Location                       |
| -----: | -------: | ----------: | -------------- | ------------------------------ |
| 100.0% | 2.01 MiB |          13 | `parse_string` | `blib2to3/pgen2/driver.py:198` |

##### `convert` (`blib2to3/pytree.py:486`)

|      % |  Size | Allocations | Caller | Location                      |
| -----: | ----: | ----------: | ------ | ----------------------------- |
| 100.0% | 2 MiB |           2 | `pop`  | `blib2to3/pgen2/parse.py:398` |

##### `__init__` (`blib2to3/pytree.py:248`)

|      % |  Size | Allocations | Caller    | Location                 |
| -----: | ----: | ----------: | --------- | ------------------------ |
| 100.0% | 1 MiB |           5 | `convert` | `blib2to3/pytree.py:486` |

##### `prev_sibling` (`blib2to3/pytree.py:207`)

|      % |  Size | Allocations | Caller       | Location             |
| -----: | ----: | ----------: | ------------ | -------------------- |
| 100.0% | 1 MiB |           1 | `whitespace` | `black/nodes.py:194` |

##### `prefix` (`blib2to3/pytree.py:480`)

|      % |  Size | Allocations | Caller   | Location            |
| -----: | ----: | ----------: | -------- | ------------------- |
| 100.0% | 1 MiB |           1 | `append` | `black/lines.py:63` |

##### `__init__` (`<string>:2`)

|      % |  Size | Allocations | Caller     | Location     |
| -----: | ----: | ----------: | ---------- | ------------ |
| 100.0% | 1 MiB |           1 | `__init__` | `<string>:2` |

##### `<listcomp>` (`black/parsing.py:154`)

|      % |  Size | Allocations | Caller       | Location               |
| -----: | ----: | ----------: | ------------ | ---------------------- |
| 100.0% | 1 MiB |           1 | `_normalize` | `black/parsing.py:151` |

##### `__str__` (`blib2to3/pytree.py:440`)

|      % |  Size | Allocations | Caller    | Location             |
| -----: | ----: | ----------: | --------- | -------------------- |
| 100.0% | 1 MiB |           1 | `__str__` | `black/lines.py:490` |

##### `push` (`blib2to3/pgen2/parse.py:386`)

|      % |  Size | Allocations | Caller      | Location                      |
| -----: | ----: | ----------: | ----------- | ----------------------------- |
| 100.0% | 1 MiB |           1 | `_addtoken` | `blib2to3/pgen2/parse.py:290` |

##### `generate_tokens` (`blib2to3/pgen2/tokenize.py:565`)

|      % |  Size | Allocations | Caller     | Location                      |
| -----: | ----: | ----------: | ---------- | ----------------------------- |
| 100.0% | 1 MiB |           1 | `__next__` | `blib2to3/pgen2/driver.py:80` |

##### `__getitem__` (`/usr/lib/python3.11/typing.py:1531`)

|      % |  Size | Allocations | Caller  | Location                            |
| -----: | ----: | ----------: | ------- | ----------------------------------- |
| 100.0% | 1 MiB |           1 | `inner` | `/usr/lib/python3.11/typing.py:338` |

##### `_format_str_once` (`black/__init__.py:1236`)

|      % |    Size | Allocations | Caller       | Location                 |
| -----: | ------: | ----------: | ------------ | ------------------------ |
| 100.0% | 225 KiB |           5 | `format_str` | `black/__init__.py:1189` |

##### `decode` (`<frozen codecs>:319`)

|      % |    Size | Allocations | Caller         | Location                 |
| -----: | ------: | ----------: | -------------- | ------------------------ |
| 100.0% | 222 KiB |           1 | `decode_bytes` | `black/__init__.py:1290` |

##### `__new__` (`<frozen abc>:105`)

|     % |     Size | Allocations | Caller     | Location                                                         |
| ----: | -------: | ----------: | ---------- | ---------------------------------------------------------------- |
| 50.5% | 38.2 KiB |          45 | `<module>` | `/venv13/lib/python3.11/site-packages/click/types.py:1`          |
| 23.1% | 17.5 KiB |          18 | `<module>` | `black/trans.py:1`                                               |
| 18.3% | 13.9 KiB |           9 | `<module>` | `/venv13/lib/python3.11/site-packages/click/core.py:1`           |
|  8.0% | 6.07 KiB |           7 | `<module>` | `/venv13/lib/python3.11/site-packages/packaging/specifiers.py:1` |

##### `normalize_string_prefix` (`black/strings.py:143`)

|      % |     Size | Allocations | Caller         | Location               |
| -----: | -------: | ----------: | -------------- | ---------------------- |
| 100.0% | 57.2 KiB |          65 | `visit_STRING` | `black/linegen.py:413` |

##### `load` (`blib2to3/pgen2/grammar.py:121`)

|      % |     Size | Allocations | Caller         | Location                       |
| -----: | -------: | ----------: | -------------- | ------------------------------ |
| 100.0% | 46.7 KiB |          49 | `load_grammar` | `blib2to3/pgen2/driver.py:246` |

##### `__new__` (`/usr/lib/python3.11/enum.py:488`)

|     % |     Size | Allocations | Caller     | Location                                                       |
| ----: | -------: | ----------: | ---------- | -------------------------------------------------------------- |
| 33.2% | 7.64 KiB |           9 | `<module>` | `black/mode.py:1`                                              |
| 14.4% |  3.3 KiB |           3 | `<module>` | `/venv13/lib/python3.11/site-packages/click/_utils.py:1`       |
| 12.2% | 2.81 KiB |           3 | `<module>` | `/venv13/lib/python3.11/site-packages/packaging/_elffile.py:1` |
| 10.6% | 2.44 KiB |           3 | `<module>` | `black/__init__.py:1`                                          |
|  7.6% | 1.74 KiB |           2 | `<module>` | `/venv13/lib/python3.11/site-packages/click/core.py:1`         |

##### `compile` (`/usr/lib/python3.11/re/_compiler.py:738`)

|      % |     Size | Allocations | Caller     | Location                                 |
| -----: | -------: | ----------: | ---------- | ---------------------------------------- |
| 100.0% | 22.6 KiB |          12 | `_compile` | `/usr/lib/python3.11/re/__init__.py:272` |

##### `<module>` (`/usr/lib/python3.11/tomllib/_parser.py:1`)

|      % |     Size | Allocations | Caller                      | Location                            |
| -----: | -------: | ----------: | --------------------------- | ----------------------------------- |
| 100.0% | 19.8 KiB |          12 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

##### `__new__` (`/usr/lib/python3.11/typing.py:2891`)

|     % |     Size | Allocations | Caller     | Location                                                      |
| ----: | -------: | ----------: | ---------- | ------------------------------------------------------------- |
| 90.3% | 15.7 KiB |          19 | `<module>` | `/venv13/lib/python3.11/site-packages/click/types.py:1`       |
|  9.7% | 1.69 KiB |           2 | `<module>` | `/venv13/lib/python3.11/site-packages/packaging/version.py:1` |

##### `inner` (`/usr/lib/python3.11/typing.py:338`)

|     % |     Size | Allocations | Caller        | Location                                                |
| ----: | -------: | ----------: | ------------- | ------------------------------------------------------- |
| 75.3% | 9.02 KiB |           1 | `<module>`    | `black/files.py:1`                                      |
| 17.9% | 2.15 KiB |           1 | `__getitem__` | `/usr/lib/python3.11/typing.py:467`                     |
|  6.7% |    826 B |           1 | `<module>`    | `/venv13/lib/python3.11/site-packages/click/types.py:1` |

##### `_fill_cache` (`<frozen importlib._bootstrap_external>:1655`)

|      % |  Size | Allocations | Caller      | Location                                      |
| -----: | ----: | ----------: | ----------- | --------------------------------------------- |
| 100.0% | 8 KiB |           4 | `find_spec` | `<frozen importlib._bootstrap_external>:1604` |

##### `_parse_sub` (`/usr/lib/python3.11/re/_parser.py:447`)

|      % |     Size | Allocations | Caller  | Location                                |
| -----: | -------: | ----------: | ------- | --------------------------------------- |
| 100.0% | 7.97 KiB |           1 | `parse` | `/usr/lib/python3.11/re/_parser.py:970` |

##### `__setattr__` (`/usr/lib/python3.11/enum.py:831`)

|     % |     Size | Allocations | Caller         | Location                          |
| ----: | -------: | ----------: | -------------- | --------------------------------- |
| 66.6% | 4.48 KiB |           5 | `__set_name__` | `/usr/lib/python3.11/enum.py:237` |
| 33.4% | 2.25 KiB |           3 | `__new__`      | `/usr/lib/python3.11/enum.py:488` |

##### `namedtuple` (`/usr/lib/python3.11/collections/__init__.py:348`)

|     % |     Size | Allocations | Caller          | Location                             |
| ----: | -------: | ----------: | --------------- | ------------------------------------ |
| 83.3% | 4.69 KiB |           5 | `_make_nmtuple` | `/usr/lib/python3.11/typing.py:2795` |
| 16.7% |    960 B |           1 | `<module>`      | `/usr/lib/python3.11/pkgutil.py:1`   |

##### `_parse` (`/usr/lib/python3.11/re/_parser.py:507`)

|      % |     Size | Allocations | Caller       | Location                                |
| -----: | -------: | ----------: | ------------ | --------------------------------------- |
| 100.0% | 5.61 KiB |           3 | `_parse_sub` | `/usr/lib/python3.11/re/_parser.py:447` |

##### `_code` (`/usr/lib/python3.11/re/_compiler.py:571`)

|      % |     Size | Allocations | Caller    | Location                                  |
| -----: | -------: | ----------: | --------- | ----------------------------------------- |
| 100.0% | 5.32 KiB |           2 | `compile` | `/usr/lib/python3.11/re/_compiler.py:738` |

##### `<module>` (`/usr/lib/python3.11/pkgutil.py:1`)

|      % |     Size | Allocations | Caller                      | Location                            |
| -----: | -------: | ----------: | --------------------------- | ----------------------------------- |
| 100.0% | 4.73 KiB |           6 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

##### `wrap` (`/usr/lib/python3.11/dataclasses.py:1209`)

|      % |     Size | Allocations | Caller     | Location                                                     |
| -----: | -------: | ----------: | ---------- | ------------------------------------------------------------ |
| 100.0% | 2.85 KiB |           1 | `<module>` | `/venv13/lib/python3.11/site-packages/pathspec/pattern.py:1` |

##### `_process_class` (`/usr/lib/python3.11/dataclasses.py:884`)

|      % |     Size | Allocations | Caller | Location                                  |
| -----: | -------: | ----------: | ------ | ----------------------------------------- |
| 100.0% | 2.85 KiB |           4 | `wrap` | `/usr/lib/python3.11/dataclasses.py:1209` |

##### `_signature_from_function` (`/usr/lib/python3.11/inspect.py:2331`)

|      % |     Size | Allocations | Caller                     | Location                              |
| -----: | -------: | ----------: | -------------------------- | ------------------------------------- |
| 100.0% | 2.56 KiB |           3 | `_signature_from_callable` | `/usr/lib/python3.11/inspect.py:2426` |

### Total size

Functions ranked by total bytes held at peak memory in the function and all its callees.

|      % |     Size | Allocations | Function               | Location                                                         |
| -----: | -------: | ----------: | ---------------------- | ---------------------------------------------------------------- |
| 100.0% | 78.6 MiB |      22,667 | `_run_tracker`         | `/venv13/lib/python3.11/site-packages/memray/commands/run.py:40` |
| 100.0% | 78.6 MiB |      22,666 | `run_module`           | `<frozen runpy>:201`                                             |
|  94.5% | 74.3 MiB |      21,395 | `__call__`             | `/venv13/lib/python3.11/site-packages/click/core.py:1567`        |
|  94.5% | 74.3 MiB |      21,395 | `patched_main`         | `black/__init__.py:1594`                                         |
|  94.5% | 74.3 MiB |      21,395 | `<module>`             | `black/__main__.py:1`                                            |
|  94.5% | 74.3 MiB |      21,395 | `_run_code`            | `<frozen runpy>:65`                                              |
|  94.5% | 74.3 MiB |      21,395 | `_run_module_code`     | `<frozen runpy>:91`                                              |
|  94.5% | 74.3 MiB |      21,394 | `main`                 | `/venv13/lib/python3.11/site-packages/click/core.py:1422`        |
|  94.5% | 74.3 MiB |      21,374 | `invoke`               | `/venv13/lib/python3.11/site-packages/click/core.py:1339`        |
|  94.5% | 74.3 MiB |      21,371 | `invoke`               | `/venv13/lib/python3.11/site-packages/click/core.py:853`         |
|  94.5% | 74.3 MiB |      21,369 | `new_func`             | `/venv13/lib/python3.11/site-packages/click/decorators.py:33`    |
|  94.5% | 74.2 MiB |      21,366 | `main`                 | `black/__init__.py:244`                                          |
|  94.5% | 74.2 MiB |      21,362 | `reformat_one`         | `black/__init__.py:860`                                          |
|  94.5% | 74.2 MiB |      21,359 | `format_file_in_place` | `black/__init__.py:917`                                          |
|  94.2% |   74 MiB |      21,356 | `format_file_contents` | `black/__init__.py:1054`                                         |
|  65.9% | 51.8 MiB |      21,147 | `format_str`           | `black/__init__.py:1189`                                         |
|  65.9% | 51.8 MiB |      21,146 | `_format_str_once`     | `black/__init__.py:1236`                                         |
|  47.7% | 37.4 MiB |      21,088 | `visit`                | `black/nodes.py:163`                                             |
|  47.7% | 37.4 MiB |      21,086 | `visit_default`        | `black/linegen.py:134`                                           |
|  47.7% | 37.4 MiB |      21,086 | `visit_default`        | `black/nodes.py:187`                                             |

#### Categories

##### Ours

|     % |     Size | Allocations | Function                          | Location                 |
| ----: | -------: | ----------: | --------------------------------- | ------------------------ |
| 94.5% | 74.3 MiB |      21,395 | `patched_main`                    | `black/__init__.py:1594` |
| 94.5% | 74.3 MiB |      21,395 | `<module>`                        | `black/__main__.py:1`    |
| 94.5% | 74.2 MiB |      21,366 | `main`                            | `black/__init__.py:244`  |
| 94.5% | 74.2 MiB |      21,362 | `reformat_one`                    | `black/__init__.py:860`  |
| 94.5% | 74.2 MiB |      21,359 | `format_file_in_place`            | `black/__init__.py:917`  |
| 94.2% |   74 MiB |      21,356 | `format_file_contents`            | `black/__init__.py:1054` |
| 65.9% | 51.8 MiB |      21,147 | `format_str`                      | `black/__init__.py:1189` |
| 65.9% | 51.8 MiB |      21,146 | `_format_str_once`                | `black/__init__.py:1236` |
| 47.7% | 37.4 MiB |      21,088 | `visit`                           | `black/nodes.py:163`     |
| 47.7% | 37.4 MiB |      21,086 | `visit_default`                   | `black/linegen.py:134`   |
| 47.7% | 37.4 MiB |      21,086 | `visit_default`                   | `black/nodes.py:187`     |
| 47.3% | 37.2 MiB |      20,715 | `visit_stmt`                      | `black/linegen.py:199`   |
| 46.8% | 36.7 MiB |      20,148 | `visit_suite`                     | `black/linegen.py:288`   |
| 45.6% | 35.8 MiB |      20,273 | `visit_funcdef`                   | `black/linegen.py:254`   |
| 30.9% | 24.3 MiB |      20,889 | `append`                          | `black/lines.py:63`      |
| 30.3% | 23.8 MiB |      13,402 | `visit_simple_stmt`               | `black/linegen.py:295`   |
| 28.3% | 22.3 MiB |         209 | `check_stability_and_equivalence` | `black/__init__.py:1037` |
| 28.3% | 22.3 MiB |         208 | `assert_equivalent`               | `black/__init__.py:1524` |
| 25.3% | 19.9 MiB |      10,811 | `visit_power`                     | `black/linegen.py:341`   |
| 21.9% | 17.2 MiB |      20,789 | `mark`                            | `black/brackets.py:70`   |

##### Standard library

|      % |     Size | Allocations | Function                    | Location                                      |
| -----: | -------: | ----------: | --------------------------- | --------------------------------------------- |
| 100.0% | 78.6 MiB |      22,666 | `run_module`                | `<frozen runpy>:201`                          |
|  94.5% | 74.3 MiB |      21,395 | `_run_code`                 | `<frozen runpy>:65`                           |
|  94.5% | 74.3 MiB |      21,395 | `_run_module_code`          | `<frozen runpy>:91`                           |
|  11.6% | 9.12 MiB |         142 | `parse`                     | `/usr/lib/python3.11/ast.py:33`               |
|   5.5% | 4.28 MiB |       1,270 | `_get_module_details`       | `<frozen runpy>:105`                          |
|   5.4% | 4.28 MiB |       1,263 | `_find_and_load`            | `<frozen importlib._bootstrap>:1167`          |
|   5.4% | 4.28 MiB |       1,261 | `_find_and_load_unlocked`   | `<frozen importlib._bootstrap>:1122`          |
|   5.4% | 4.28 MiB |       1,260 | `_load_unlocked`            | `<frozen importlib._bootstrap>:666`           |
|   5.4% | 4.27 MiB |       1,258 | `exec_module`               | `<frozen importlib._bootstrap_external>:934`  |
|   5.4% | 4.24 MiB |       1,228 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233`           |
|   3.2% | 2.53 MiB |         593 | `_compile_bytecode`         | `<frozen importlib._bootstrap_external>:727`  |
|   3.2% | 2.53 MiB |         593 | `get_code`                  | `<frozen importlib._bootstrap_external>:1007` |
|   1.7% |  1.3 MiB |         317 | `_handle_fromlist`          | `<frozen importlib._bootstrap>:1209`          |
|   1.3% | 1.03 MiB |          33 | `<module>`                  | `/usr/lib/python3.11/tomllib/__init__.py:1`   |
|   1.3% | 1.01 MiB |           6 | `inner`                     | `/usr/lib/python3.11/typing.py:338`           |
|   1.3% |    1 MiB |           1 | `__getitem__`               | `/usr/lib/python3.11/typing.py:1531`          |
|   0.3% |  222 KiB |           1 | `decode`                    | `<frozen codecs>:319`                         |
|   0.1% | 75.7 KiB |          79 | `__new__`                   | `<frozen abc>:105`                            |
|   0.1% | 47.8 KiB |          25 | `compile`                   | `/usr/lib/python3.11/re/__init__.py:225`      |
|   0.1% | 47.1 KiB |          24 | `_compile`                  | `/usr/lib/python3.11/re/__init__.py:272`      |

#### Callees

Callees ranked by contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `_run_tracker` (`/venv13/lib/python3.11/site-packages/memray/commands/run.py:40`)

|      % |     Size | Allocations | Callee       | Location             |
| -----: | -------: | ----------: | ------------ | -------------------- |
| 100.0% | 78.6 MiB |      22,666 | `run_module` | `<frozen runpy>:201` |

##### `run_module` (`<frozen runpy>:201`)

|     % |     Size | Allocations | Callee                | Location             |
| ----: | -------: | ----------: | --------------------- | -------------------- |
| 94.5% | 74.3 MiB |      21,395 | `_run_module_code`    | `<frozen runpy>:91`  |
|  5.5% | 4.28 MiB |       1,270 | `_get_module_details` | `<frozen runpy>:105` |

##### `__call__` (`/venv13/lib/python3.11/site-packages/click/core.py:1567`)

|      % |     Size | Allocations | Callee | Location                                                  |
| -----: | -------: | ----------: | ------ | --------------------------------------------------------- |
| 100.0% | 74.3 MiB |      21,394 | `main` | `/venv13/lib/python3.11/site-packages/click/core.py:1422` |

##### `patched_main` (`black/__init__.py:1594`)

|      % |     Size | Allocations | Callee     | Location                                                  |
| -----: | -------: | ----------: | ---------- | --------------------------------------------------------- |
| 100.0% | 74.3 MiB |      21,395 | `__call__` | `/venv13/lib/python3.11/site-packages/click/core.py:1567` |

##### `<module>` (`black/__main__.py:1`)

|      % |     Size | Allocations | Callee         | Location                 |
| -----: | -------: | ----------: | -------------- | ------------------------ |
| 100.0% | 74.3 MiB |      21,395 | `patched_main` | `black/__init__.py:1594` |

##### `_run_code` (`<frozen runpy>:65`)

|      % |     Size | Allocations | Callee     | Location              |
| -----: | -------: | ----------: | ---------- | --------------------- |
| 100.0% | 74.3 MiB |      21,395 | `<module>` | `black/__main__.py:1` |

##### `_run_module_code` (`<frozen runpy>:91`)

|      % |     Size | Allocations | Callee      | Location            |
| -----: | -------: | ----------: | ----------- | ------------------- |
| 100.0% | 74.3 MiB |      21,395 | `_run_code` | `<frozen runpy>:65` |

##### `main` (`/venv13/lib/python3.11/site-packages/click/core.py:1422`)

|      % |     Size | Allocations | Callee         | Location                                                  |
| -----: | -------: | ----------: | -------------- | --------------------------------------------------------- |
| 100.0% | 74.3 MiB |      21,374 | `invoke`       | `/venv13/lib/python3.11/site-packages/click/core.py:1339` |
|  <0.1% | 14.8 KiB |          18 | `make_context` | `/venv13/lib/python3.11/site-packages/click/core.py:1266` |
|  <0.1% |     32 B |           1 | `__enter__`    | `/venv13/lib/python3.11/site-packages/click/core.py:545`  |

##### `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:1339`)

|      % |     Size | Allocations | Callee   | Location                                                 |
| -----: | -------: | ----------: | -------- | -------------------------------------------------------- |
| 100.0% | 74.3 MiB |      21,371 | `invoke` | `/venv13/lib/python3.11/site-packages/click/core.py:853` |

##### `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:853`)

|      % |     Size | Allocations | Callee     | Location                                                      |
| -----: | -------: | ----------: | ---------- | ------------------------------------------------------------- |
| 100.0% | 74.3 MiB |      21,369 | `new_func` | `/venv13/lib/python3.11/site-packages/click/decorators.py:33` |

##### `new_func` (`/venv13/lib/python3.11/site-packages/click/decorators.py:33`)

|      % |     Size | Allocations | Callee | Location                |
| -----: | -------: | ----------: | ------ | ----------------------- |
| 100.0% | 74.2 MiB |      21,366 | `main` | `black/__init__.py:244` |

##### `main` (`black/__init__.py:244`)

|      % |     Size | Allocations | Callee         | Location                |
| -----: | -------: | ----------: | -------------- | ----------------------- |
| 100.0% | 74.2 MiB |      21,362 | `reformat_one` | `black/__init__.py:860` |
|  <0.1% | 2.06 KiB |           2 | `get_sources`  | `black/__init__.py:724` |

##### `reformat_one` (`black/__init__.py:860`)

|      % |     Size | Allocations | Callee                 | Location                |
| -----: | -------: | ----------: | ---------------------- | ----------------------- |
| 100.0% | 74.2 MiB |      21,359 | `format_file_in_place` | `black/__init__.py:917` |
|  <0.1% | 1.13 KiB |           1 | `read`                 | `black/cache.py:60`     |

##### `format_file_in_place` (`black/__init__.py:917`)

|     % |    Size | Allocations | Callee                 | Location                 |
| ----: | ------: | ----------: | ---------------------- | ------------------------ |
| 99.7% |  74 MiB |      21,356 | `format_file_contents` | `black/__init__.py:1054` |
|  0.3% | 223 KiB |           2 | `decode_bytes`         | `black/__init__.py:1290` |

##### `format_file_contents` (`black/__init__.py:1054`)

|     % |     Size | Allocations | Callee                            | Location                 |
| ----: | -------: | ----------: | --------------------------------- | ------------------------ |
| 69.9% | 51.8 MiB |      21,147 | `format_str`                      | `black/__init__.py:1189` |
| 30.1% | 22.3 MiB |         209 | `check_stability_and_equivalence` | `black/__init__.py:1037` |

##### `format_str` (`black/__init__.py:1189`)

|      % |     Size | Allocations | Callee             | Location                 |
| -----: | -------: | ----------: | ------------------ | ------------------------ |
| 100.0% | 51.8 MiB |      21,146 | `_format_str_once` | `black/__init__.py:1236` |

##### `_format_str_once` (`black/__init__.py:1236`)

|     % |     Size | Allocations | Callee                   | Location                 |
| ----: | -------: | ----------: | ------------------------ | ------------------------ |
| 72.3% | 37.4 MiB |      21,088 | `visit`                  | `black/nodes.py:163`     |
| 23.3% | 12.1 MiB |          32 | `lib2to3_parse`          | `black/parsing.py:55`    |
|  3.9% | 2.01 MiB |          14 | `transform_line`         | `black/linegen.py:601`   |
| <0.1% | 19.9 KiB |           3 | `normalize_fmt_off`      | `black/comments.py:168`  |
| <0.1% | 3.49 KiB |           1 | `detect_target_versions` | `black/__init__.py:1464` |

##### `visit` (`black/nodes.py:163`)

|      % |     Size | Allocations | Callee              | Location               |
| -----: | -------: | ----------: | ------------------- | ---------------------- |
| 100.0% | 37.4 MiB |      21,086 | `visit_default`     | `black/linegen.py:134` |
|  99.2% | 37.2 MiB |      20,715 | `visit_stmt`        | `black/linegen.py:199` |
|  98.1% | 36.7 MiB |      20,148 | `visit_suite`       | `black/linegen.py:288` |
|  95.7% | 35.8 MiB |      20,273 | `visit_funcdef`     | `black/linegen.py:254` |
|  63.6% | 23.8 MiB |      13,402 | `visit_simple_stmt` | `black/linegen.py:295` |

##### `visit_default` (`black/linegen.py:134`)

|      % |     Size | Allocations | Callee              | Location               |
| -----: | -------: | ----------: | ------------------- | ---------------------- |
| 100.0% | 37.4 MiB |      21,086 | `visit_default`     | `black/nodes.py:187`   |
|  64.9% | 24.3 MiB |      20,889 | `append`            | `black/lines.py:63`    |
|  10.7% |    4 MiB |           4 | `generate_comments` | `black/comments.py:52` |

##### `visit_default` (`black/nodes.py:187`)

|      % |     Size | Allocations | Callee  | Location             |
| -----: | -------: | ----------: | ------- | -------------------- |
| 100.0% | 37.4 MiB |      21,086 | `visit` | `black/nodes.py:163` |

##### `visit_stmt` (`black/linegen.py:199`)

|      % |     Size | Allocations | Callee                       | Location                |
| -----: | -------: | ----------: | ---------------------------- | ----------------------- |
| 100.0% | 37.2 MiB |      20,713 | `visit`                      | `black/nodes.py:163`    |
|   5.4% |    2 MiB |           3 | `normalize_invisible_parens` | `black/linegen.py:1328` |

##### `visit_suite` (`black/linegen.py:288`)

|      % |     Size | Allocations | Callee          | Location               |
| -----: | -------: | ----------: | --------------- | ---------------------- |
| 100.0% | 36.7 MiB |      20,148 | `visit_default` | `black/linegen.py:134` |

##### `visit_funcdef` (`black/linegen.py:254`)

|      % |     Size | Allocations | Callee  | Location             |
| -----: | -------: | ----------: | ------- | -------------------- |
| 100.0% | 35.8 MiB |      20,273 | `visit` | `black/nodes.py:163` |

##### `append` (`black/lines.py:63`)

|     % |     Size | Allocations | Callee       | Location                 |
| ----: | -------: | ----------: | ------------ | ------------------------ |
| 70.9% | 17.2 MiB |      20,789 | `mark`       | `black/brackets.py:70`   |
| 24.9% | 6.05 MiB |          95 | `whitespace` | `black/nodes.py:194`     |
|  4.1% |    1 MiB |           1 | `prefix`     | `blib2to3/pytree.py:480` |

##### `visit_simple_stmt` (`black/linegen.py:295`)

|      % |     Size | Allocations | Callee          | Location               |
| -----: | -------: | ----------: | --------------- | ---------------------- |
| 100.0% | 23.8 MiB |      13,402 | `visit_default` | `black/linegen.py:134` |

##### `check_stability_and_equivalence` (`black/__init__.py:1037`)

|      % |     Size | Allocations | Callee              | Location                 |
| -----: | -------: | ----------: | ------------------- | ------------------------ |
| 100.0% | 22.3 MiB |         208 | `assert_equivalent` | `black/__init__.py:1524` |

##### `assert_equivalent` (`black/__init__.py:1524`)

|     % |     Size | Allocations | Callee           | Location               |
| ----: | -------: | ----------: | ---------------- | ---------------------- |
| 41.0% | 9.12 MiB |         142 | `parse_ast`      | `black/parsing.py:129` |
| 27.2% | 6.05 MiB |          62 | `_stringify_ast` | `black/parsing.py:174` |

##### `visit_power` (`black/linegen.py:341`)

|     % |     Size | Allocations | Callee          | Location               |
| ----: | -------: | ----------: | --------------- | ---------------------- |
| 69.9% | 13.9 MiB |      10,804 | `visit_default` | `black/linegen.py:134` |

##### `_get_module_details` (`<frozen runpy>:105`)

|     % |     Size | Allocations | Callee                | Location                             |
| ----: | -------: | ----------: | --------------------- | ------------------------------------ |
| 99.9% | 4.28 MiB |       1,263 | `_find_and_load`      | `<frozen importlib._bootstrap>:1167` |
| 99.9% | 4.28 MiB |       1,263 | `_get_module_details` | `<frozen runpy>:105`                 |
|  0.1% | 5.66 KiB |           6 | `find_spec`           | `<frozen importlib.util>:73`         |

##### `_find_and_load` (`<frozen importlib._bootstrap>:1167`)

|      % |     Size | Allocations | Callee                    | Location                             |
| -----: | -------: | ----------: | ------------------------- | ------------------------------------ |
| 100.0% | 4.28 MiB |       1,261 | `_find_and_load_unlocked` | `<frozen importlib._bootstrap>:1122` |
|  <0.1% |    560 B |           1 | `__enter__`               | `<frozen importlib._bootstrap>:169`  |

##### `_find_and_load_unlocked` (`<frozen importlib._bootstrap>:1122`)

|      % |     Size | Allocations | Callee                      | Location                             |
| -----: | -------: | ----------: | --------------------------- | ------------------------------------ |
| 100.0% | 4.28 MiB |       1,260 | `_load_unlocked`            | `<frozen importlib._bootstrap>:666`  |
|   0.8% | 37.2 KiB |          47 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233`  |
|   0.2% | 7.48 KiB |           4 | `_find_spec`                | `<frozen importlib._bootstrap>:1056` |

##### `_load_unlocked` (`<frozen importlib._bootstrap>:666`)

|      % |     Size | Allocations | Callee             | Location                                     |
| -----: | -------: | ----------: | ------------------ | -------------------------------------------- |
| 100.0% | 4.27 MiB |       1,258 | `exec_module`      | `<frozen importlib._bootstrap_external>:934` |
|  <0.1% | 1.83 KiB |           2 | `module_from_spec` | `<frozen importlib._bootstrap>:566`          |

##### `exec_module` (`<frozen importlib._bootstrap_external>:934`)

|     % |     Size | Allocations | Callee                      | Location                                      |
| ----: | -------: | ----------: | --------------------------- | --------------------------------------------- |
| 99.3% | 4.24 MiB |       1,228 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233`           |
| 59.3% | 2.53 MiB |         593 | `get_code`                  | `<frozen importlib._bootstrap_external>:1007` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`)

|      % |     Size | Allocations | Callee           | Location                                                   |
| -----: | -------: | ----------: | ---------------- | ---------------------------------------------------------- |
| 100.0% | 4.24 MiB |       1,228 | `<module>`       | `black/__init__.py:1`                                      |
|  30.9% | 1.31 MiB |         328 | `_find_and_load` | `<frozen importlib._bootstrap>:1167`                       |
|  30.8% | 1.31 MiB |         304 | `<module>`       | `/venv13/lib/python3.11/site-packages/click/__init__.py:1` |
|  30.3% | 1.28 MiB |         258 | `<module>`       | `black/comments.py:1`                                      |
|  29.9% | 1.27 MiB |         244 | `<module>`       | `black/nodes.py:1`                                         |

##### `get_code` (`<frozen importlib._bootstrap_external>:1007`)

|      % |     Size | Allocations | Callee              | Location                                     |
| -----: | -------: | ----------: | ------------------- | -------------------------------------------- |
| 100.0% | 2.53 MiB |         593 | `_compile_bytecode` | `<frozen importlib._bootstrap_external>:727` |

##### `_handle_fromlist` (`<frozen importlib._bootstrap>:1209`)

|      % |    Size | Allocations | Callee                      | Location                            |
| -----: | ------: | ----------: | --------------------------- | ----------------------------------- |
| 100.0% | 1.3 MiB |         317 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

##### `<module>` (`/usr/lib/python3.11/tomllib/__init__.py:1`)

|      % |     Size | Allocations | Callee           | Location                             |
| -----: | -------: | ----------: | ---------------- | ------------------------------------ |
| 100.0% | 1.03 MiB |          33 | `_find_and_load` | `<frozen importlib._bootstrap>:1167` |

##### `inner` (`/usr/lib/python3.11/typing.py:338`)

|     % |   Size | Allocations | Callee              | Location                             |
| ----: | -----: | ----------: | ------------------- | ------------------------------------ |
| 98.7% |  1 MiB |           1 | `__getitem__`       | `/usr/lib/python3.11/typing.py:1531` |
|  0.1% | 1016 B |           1 | `__getitem__`       | `/usr/lib/python3.11/typing.py:1360` |
|  0.1% |  632 B |           1 | `__class_getitem__` | `/usr/lib/python3.11/typing.py:1773` |

##### `compile` (`/usr/lib/python3.11/re/__init__.py:225`)

|     % |     Size | Allocations | Callee     | Location                                 |
| ----: | -------: | ----------: | ---------- | ---------------------------------------- |
| 98.6% | 47.1 KiB |          24 | `_compile` | `/usr/lib/python3.11/re/__init__.py:272` |

##### `_compile` (`/usr/lib/python3.11/re/__init__.py:272`)

|     % |     Size | Allocations | Callee    | Location                                  |
| ----: | -------: | ----------: | --------- | ----------------------------------------- |
| 98.6% | 46.5 KiB |          23 | `compile` | `/usr/lib/python3.11/re/_compiler.py:738` |
|  1.4% |    698 B |           1 | `__and__` | `/usr/lib/python3.11/enum.py:1504`        |

## Hottest call stacks

Call stacks ranked by bytes held at peak memory in their leaf frame.

Common call stack: `run_module` (`<frozen runpy>:201`) ← `_run_tracker` (`/venv13/lib/python3.11/site-packages/memray/commands/run.py:40`)

|     % |     Size | Allocations | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ----: | -------: | ----------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 11.6% | 9.12 MiB |         142 | `parse` (`/usr/lib/python3.11/ast.py:33`) ← `_parse_single_version` (`black/parsing.py:117`) ← `parse_ast` (129) ← `assert_equivalent` (`black/__init__.py:1524`) ← `check_stability_and_equivalence` (1037) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv13/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:853`) ← `invoke` (1339) ← `main` (1422) ← `__call__` (1567) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  9.0% |  7.1 MiB |           4 | `assert_equivalent` (`black/__init__.py:1524`) ← `check_stability_and_equivalence` (1037) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv13/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:853`) ← `invoke` (1339) ← `main` (1422) ← `__call__` (1567) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  6.4% |    5 MiB |           5 | `__new__` (`blib2to3/pytree.py:81`) ← `convert` (486) ← `shift` (`blib2to3/pgen2/parse.py:373`) ← `_addtoken` (290) ← `addtoken` (242) ← `parse_tokens` (`blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`black/parsing.py:55`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv13/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:853`) ← `invoke` (1339) ← `main` (1422) ← `__call__` (1567) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  3.8% |    3 MiB |           3 | `visit_power` (`black/linegen.py:341`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv13/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:853`) ← `invoke` (1339) ← `main` (1422) ← `__call__` (1567) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  2.6% | 2.01 MiB |          13 | `parse_tokens` (`blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`black/parsing.py:55`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv13/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:853`) ← `invoke` (1339) ← `main` (1422) ← `__call__` (1567) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  2.5% |    2 MiB |           2 | `_stringify_ast` (`black/parsing.py:174`) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `assert_equivalent` (`black/__init__.py:1524`) ← `check_stability_and_equivalence` (1037) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv13/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:853`) ← `invoke` (1339) ← `main` (1422) ← `__call__` (1567) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  2.5% |    2 MiB |           2 | `_stringify_ast` (`black/parsing.py:174`) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `assert_equivalent` (`black/__init__.py:1524`) ← `check_stability_and_equivalence` (1037) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv13/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:853`) ← `invoke` (1339) ← `main` (1422) ← `__call__` (1567) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  2.5% |    2 MiB |           2 | `convert` (`blib2to3/pytree.py:486`) ← `pop` (`blib2to3/pgen2/parse.py:398`) ← `_addtoken` (290) ← `addtoken` (242) ← `parse_tokens` (`blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`black/parsing.py:55`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv13/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:853`) ← `invoke` (1339) ← `main` (1422) ← `__call__` (1567) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  1.3% | 1.04 MiB |          49 | `mark` (`black/brackets.py:70`) ← `append` (`black/lines.py:63`) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv13/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:853`) ← `invoke` (1339) ← `main` (1422) ← `__call__` (1567) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  1.3% | 1.03 MiB |          36 | `mark` (`black/brackets.py:70`) ← `append` (`black/lines.py:63`) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv13/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:853`) ← `invoke` (1339) ← `main` (1422) ← `__call__` (1567) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  1.3% | 1.01 MiB |          15 | `_compile_bytecode` (`<frozen importlib._bootstrap_external>:727`) ← `get_code` (1007) ← `exec_module` (934) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`/venv13/lib/python3.11/site-packages/click/exceptions.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`/venv13/lib/python3.11/site-packages/click/types.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `_call_with_frames_removed` (233) ← `_handle_fromlist` (1209) ← `<module>` (`/venv13/lib/python3.11/site-packages/click/core.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`/venv13/lib/python3.11/site-packages/click/__init__.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`black/__init__.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `_get_module_details` (`<frozen runpy>:105`) ← `_get_module_details` (105)                                                                                                                                                |
|  1.3% | 1.01 MiB |          16 | `_stringify_ast` (`black/parsing.py:174`) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `assert_equivalent` (`black/__init__.py:1524`) ← `check_stability_and_equivalence` (1037) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv13/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:853`) ← `invoke` (1339) ← `main` (1422) ← `__call__` (1567) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  1.3% | 1.01 MiB |          14 | `_compile_bytecode` (`<frozen importlib._bootstrap_external>:727`) ← `get_code` (1007) ← `exec_module` (934) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`/usr/lib/python3.11/tomllib/__init__.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`black/files.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`black/__init__.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `_get_module_details` (`<frozen runpy>:105`) ← `_get_module_details` (105)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  1.3% | 1.01 MiB |          10 | `update_sibling_maps` (`blib2to3/pytree.py:369`) ← `prev_sibling` (207) ← `whitespace` (`black/nodes.py:194`) ← `append` (`black/lines.py:63`) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv13/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:853`) ← `invoke` (1339) ← `main` (1422) ← `__call__` (1567) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  1.3% |    1 MiB |           5 | `__init__` (`blib2to3/pytree.py:248`) ← `convert` (486) ← `pop` (`blib2to3/pgen2/parse.py:398`) ← `_addtoken` (290) ← `addtoken` (242) ← `parse_tokens` (`blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`black/parsing.py:55`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv13/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:853`) ← `invoke` (1339) ← `main` (1422) ← `__call__` (1567) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  1.3% |    1 MiB |           1 | `changed` (`blib2to3/pytree.py:171`) ← `changed` (171) ← `prefix` (480) ← `wrap_in_parentheses` (`black/nodes.py:935`) ← `normalize_invisible_parens` (`black/linegen.py:1328`) ← `visit_stmt` (199) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv13/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:853`) ← `invoke` (1339) ← `main` (1422) ← `__call__` (1567) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  1.3% |    1 MiB |           1 | `__init__` (`<string>:2`) ← `__init__` (2) ← `delimiter_split` (`black/linegen.py:1203`) ← `split_wrapper` (1162) ← `run_transformer` (1755) ← `transform_line` (601) ← `run_transformer` (1755) ← `transform_line` (601) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv13/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:853`) ← `invoke` (1339) ← `main` (1422) ← `__call__` (1567) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  1.3% |    1 MiB |           1 | `changed` (`blib2to3/pytree.py:171`) ← `changed` (171) ← `prefix` (480) ← `normalize_trailing_prefix` (`black/comments.py:127`) ← `generate_comments` (52) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv13/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:853`) ← `invoke` (1339) ← `main` (1422) ← `__call__` (1567) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91) |
|  1.3% |    1 MiB |           1 | `update_sibling_maps` (`blib2to3/pytree.py:369`) ← `prev_sibling` (207) ← `whitespace` (`black/nodes.py:194`) ← `append` (`black/lines.py:63`) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv13/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:853`) ← `invoke` (1339) ← `main` (1422) ← `__call__` (1567) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                           |
|  1.3% |    1 MiB |           1 | `<listcomp>` (`black/parsing.py:154`) ← `_normalize` (151) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `assert_equivalent` (`black/__init__.py:1524`) ← `check_stability_and_equivalence` (1037) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv13/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:853`) ← `invoke` (1339) ← `main` (1422) ← `__call__` (1567) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |

# Leaked memory profile

Leaked 58.9 MiB over 22,470 allocations (2.68 KiB per allocation).

| Category         |     % |     Size | Allocations |
| ---------------- | ----: | -------: | ----------: |
| Ours             | 88.0% | 51.9 MiB |      21,382 |
| Standard library | 11.6% | 6.81 MiB |         859 |
| Third-party      |  0.4% |  237 KiB |         229 |

## Hottest functions

### Self size

Functions ranked by bytes never freed directly in the function body, excluding callees.

|     % |     Size | Allocations | Function              | Location                                     |
| ----: | -------: | ----------: | --------------------- | -------------------------------------------- |
| 29.2% | 17.2 MiB |      20,789 | `mark`                | `black/brackets.py:70`                       |
| 10.2% |    6 MiB |           7 | `visit_power`         | `black/linegen.py:341`                       |
| 10.2% |    6 MiB |           6 | `changed`             | `blib2to3/pytree.py:171`                     |
|  8.7% | 5.14 MiB |         200 | `update_sibling_maps` | `blib2to3/pytree.py:369`                     |
|  8.5% |    5 MiB |           5 | `__new__`             | `blib2to3/pytree.py:81`                      |
|  5.1% | 3.01 MiB |           4 | `parse`               | `/usr/lib/python3.11/ast.py:33`              |
|  4.3% | 2.53 MiB |         593 | `_compile_bytecode`   | `<frozen importlib._bootstrap_external>:727` |
|  3.4% | 2.01 MiB |          13 | `parse_tokens`        | `blib2to3/pgen2/driver.py:114`               |
|  3.4% |    2 MiB |           2 | `convert`             | `blib2to3/pytree.py:486`                     |
|  1.7% |    1 MiB |           5 | `__init__`            | `blib2to3/pytree.py:248`                     |
|  1.7% |    1 MiB |           1 | `prefix`              | `blib2to3/pytree.py:480`                     |
|  1.7% |    1 MiB |           1 | `__init__`            | `<string>:2`                                 |
|  1.7% |    1 MiB |           1 | `prev_sibling`        | `blib2to3/pytree.py:207`                     |
|  1.7% |    1 MiB |           1 | `_stringify_ast`      | `black/parsing.py:174`                       |
|  1.7% |    1 MiB |           1 | `__str__`             | `blib2to3/pytree.py:440`                     |
|  1.7% |    1 MiB |           1 | `push`                | `blib2to3/pgen2/parse.py:386`                |
|  1.7% |    1 MiB |           1 | `generate_tokens`     | `blib2to3/pgen2/tokenize.py:565`             |
|  1.7% |    1 MiB |           1 | `__getitem__`         | `/usr/lib/python3.11/typing.py:1531`         |
|  0.1% | 76.5 KiB |           6 | `transform_line`      | `black/linegen.py:601`                       |
|  0.1% | 75.7 KiB |          79 | `__new__`             | `<frozen abc>:105`                           |

#### Categories

##### Ours

|     % |     Size | Allocations | Function                  | Location                         |
| ----: | -------: | ----------: | ------------------------- | -------------------------------- |
| 29.2% | 17.2 MiB |      20,789 | `mark`                    | `black/brackets.py:70`           |
| 10.2% |    6 MiB |           7 | `visit_power`             | `black/linegen.py:341`           |
| 10.2% |    6 MiB |           6 | `changed`                 | `blib2to3/pytree.py:171`         |
|  8.7% | 5.14 MiB |         200 | `update_sibling_maps`     | `blib2to3/pytree.py:369`         |
|  8.5% |    5 MiB |           5 | `__new__`                 | `blib2to3/pytree.py:81`          |
|  3.4% | 2.01 MiB |          13 | `parse_tokens`            | `blib2to3/pgen2/driver.py:114`   |
|  3.4% |    2 MiB |           2 | `convert`                 | `blib2to3/pytree.py:486`         |
|  1.7% |    1 MiB |           5 | `__init__`                | `blib2to3/pytree.py:248`         |
|  1.7% |    1 MiB |           1 | `prefix`                  | `blib2to3/pytree.py:480`         |
|  1.7% |    1 MiB |           1 | `__init__`                | `<string>:2`                     |
|  1.7% |    1 MiB |           1 | `prev_sibling`            | `blib2to3/pytree.py:207`         |
|  1.7% |    1 MiB |           1 | `_stringify_ast`          | `black/parsing.py:174`           |
|  1.7% |    1 MiB |           1 | `__str__`                 | `blib2to3/pytree.py:440`         |
|  1.7% |    1 MiB |           1 | `push`                    | `blib2to3/pgen2/parse.py:386`    |
|  1.7% |    1 MiB |           1 | `generate_tokens`         | `blib2to3/pgen2/tokenize.py:565` |
|  0.1% | 76.5 KiB |           6 | `transform_line`          | `black/linegen.py:601`           |
|  0.1% | 57.2 KiB |          65 | `normalize_string_prefix` | `black/strings.py:143`           |
|  0.1% | 46.7 KiB |          49 | `load`                    | `blib2to3/pgen2/grammar.py:121`  |
|  0.1% | 41.5 KiB |          16 | `copy`                    | `blib2to3/pgen2/grammar.py:131`  |
|  0.1% |   32 KiB |           1 | `classify`                | `blib2to3/pgen2/parse.py:336`    |

##### Standard library

|     % |     Size | Allocations | Function                   | Location                                          |
| ----: | -------: | ----------: | -------------------------- | ------------------------------------------------- |
|  5.1% | 3.01 MiB |           4 | `parse`                    | `/usr/lib/python3.11/ast.py:33`                   |
|  4.3% | 2.53 MiB |         593 | `_compile_bytecode`        | `<frozen importlib._bootstrap_external>:727`      |
|  1.7% |    1 MiB |           1 | `__getitem__`              | `/usr/lib/python3.11/typing.py:1531`              |
|  0.1% | 75.7 KiB |          79 | `__new__`                  | `<frozen abc>:105`                                |
| <0.1% |   23 KiB |          26 | `__new__`                  | `/usr/lib/python3.11/enum.py:488`                 |
| <0.1% | 22.6 KiB |          12 | `compile`                  | `/usr/lib/python3.11/re/_compiler.py:738`         |
| <0.1% | 19.8 KiB |          12 | `<module>`                 | `/usr/lib/python3.11/tomllib/_parser.py:1`        |
| <0.1% | 17.4 KiB |          21 | `__new__`                  | `/usr/lib/python3.11/typing.py:2891`              |
| <0.1% |   12 KiB |           3 | `inner`                    | `/usr/lib/python3.11/typing.py:338`               |
| <0.1% |    8 KiB |           4 | `_fill_cache`              | `<frozen importlib._bootstrap_external>:1655`     |
| <0.1% | 7.97 KiB |           1 | `_parse_sub`               | `/usr/lib/python3.11/re/_parser.py:447`           |
| <0.1% | 6.73 KiB |           8 | `__setattr__`              | `/usr/lib/python3.11/enum.py:831`                 |
| <0.1% | 5.63 KiB |           6 | `namedtuple`               | `/usr/lib/python3.11/collections/__init__.py:348` |
| <0.1% | 5.61 KiB |           3 | `_parse`                   | `/usr/lib/python3.11/re/_parser.py:507`           |
| <0.1% | 5.32 KiB |           2 | `_code`                    | `/usr/lib/python3.11/re/_compiler.py:571`         |
| <0.1% | 4.73 KiB |           6 | `<module>`                 | `/usr/lib/python3.11/pkgutil.py:1`                |
| <0.1% | 2.85 KiB |           1 | `wrap`                     | `/usr/lib/python3.11/dataclasses.py:1209`         |
| <0.1% | 2.85 KiB |           4 | `_process_class`           | `/usr/lib/python3.11/dataclasses.py:884`          |
| <0.1% | 2.56 KiB |           3 | `_signature_from_function` | `/usr/lib/python3.11/inspect.py:2331`             |
| <0.1% |  2.5 KiB |           1 | `<module>`                 | `/usr/lib/python3.11/secrets.py:1`                |

#### Lines

Lines ranked by contribution to each function's self size.

##### `mark` (`black/brackets.py:70`)

|     % |     Size | Allocations | Location                |
| ----: | -------: | ----------: | ----------------------- |
| 94.2% | 16.2 MiB |      20,787 | `black/brackets.py:112` |
|  5.8% |    1 MiB |           1 | `black/brackets.py:118` |
| <0.1% | 1.49 KiB |           1 | `black/brackets.py:114` |

##### `visit_power` (`black/linegen.py:341`)

|     % |  Size | Allocations | Location               |
| ----: | ----: | ----------: | ---------------------- |
| 83.3% | 5 MiB |           5 | `black/linegen.py:342` |
| 16.7% | 1 MiB |           1 | `black/linegen.py:348` |
| <0.1% | 904 B |           1 | `black/linegen.py:361` |

##### `changed` (`blib2to3/pytree.py:171`)

|     % |  Size | Allocations | Location                 |
| ----: | ----: | ----------: | ------------------------ |
| 66.7% | 4 MiB |           4 | `blib2to3/pytree.py:175` |
| 33.3% | 2 MiB |           2 | `blib2to3/pytree.py:176` |

##### `update_sibling_maps` (`blib2to3/pytree.py:369`)

|     % |     Size | Allocations | Location                 |
| ----: | -------: | ----------: | ------------------------ |
| 40.2% | 2.07 MiB |          95 | `blib2to3/pytree.py:376` |
| 38.9% |    2 MiB |           2 | `blib2to3/pytree.py:371` |
| 20.8% | 1.07 MiB |          94 | `blib2to3/pytree.py:377` |
|  0.1% | 4.99 KiB |           9 | `blib2to3/pytree.py:379` |

##### `__new__` (`blib2to3/pytree.py:81`)

|      % |  Size | Allocations | Location                |
| -----: | ----: | ----------: | ----------------------- |
| 100.0% | 5 MiB |           5 | `blib2to3/pytree.py:84` |

##### `parse` (`/usr/lib/python3.11/ast.py:33`)

|      % |     Size | Allocations | Location                        |
| -----: | -------: | ----------: | ------------------------------- |
| 100.0% | 3.01 MiB |           4 | `/usr/lib/python3.11/ast.py:50` |

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>:727`)

|      % |     Size | Allocations | Location                                     |
| -----: | -------: | ----------: | -------------------------------------------- |
| 100.0% | 2.53 MiB |         593 | `<frozen importlib._bootstrap_external>:729` |

##### `parse_tokens` (`blib2to3/pgen2/driver.py:114`)

|     % |     Size | Allocations | Location                       |
| ----: | -------: | ----------: | ------------------------------ |
| 49.8% |    1 MiB |           3 | `blib2to3/pgen2/driver.py:141` |
| 49.8% |    1 MiB |           1 | `blib2to3/pgen2/driver.py:172` |
|  0.4% | 8.13 KiB |           8 | `blib2to3/pgen2/driver.py:138` |
| <0.1% |    886 B |           1 | `blib2to3/pgen2/driver.py:162` |

##### `convert` (`blib2to3/pytree.py:486`)

|      % |  Size | Allocations | Location                 |
| -----: | ----: | ----------: | ------------------------ |
| 100.0% | 2 MiB |           2 | `blib2to3/pytree.py:501` |

##### `__init__` (`blib2to3/pytree.py:248`)

|      % |  Size | Allocations | Location                 |
| -----: | ----: | ----------: | ------------------------ |
| 100.0% | 1 MiB |           5 | `blib2to3/pytree.py:266` |

##### `prefix` (`blib2to3/pytree.py:480`)

|      % |  Size | Allocations | Location                 |
| -----: | ----: | ----------: | ------------------------ |
| 100.0% | 1 MiB |           1 | `blib2to3/pytree.py:482` |

##### `__init__` (`<string>:2`)

|      % |  Size | Allocations | Location     |
| -----: | ----: | ----------: | ------------ |
| 100.0% | 1 MiB |           1 | `<string>:4` |

##### `prev_sibling` (`blib2to3/pytree.py:207`)

|      % |  Size | Allocations | Location                 |
| -----: | ----: | ----------: | ------------------------ |
| 100.0% | 1 MiB |           1 | `blib2to3/pytree.py:219` |

##### `_stringify_ast` (`black/parsing.py:174`)

|      % |  Size | Allocations | Location               |
| -----: | ----: | ----------: | ---------------------- |
| 100.0% | 1 MiB |           1 | `black/parsing.py:244` |

##### `__str__` (`blib2to3/pytree.py:440`)

|      % |  Size | Allocations | Location                 |
| -----: | ----: | ----------: | ------------------------ |
| 100.0% | 1 MiB |           1 | `blib2to3/pytree.py:446` |

##### `push` (`blib2to3/pgen2/parse.py:386`)

|      % |  Size | Allocations | Location                      |
| -----: | ----: | ----------: | ----------------------------- |
| 100.0% | 1 MiB |           1 | `blib2to3/pgen2/parse.py:394` |

##### `generate_tokens` (`blib2to3/pgen2/tokenize.py:565`)

|      % |  Size | Allocations | Location                         |
| -----: | ----: | ----------: | -------------------------------- |
| 100.0% | 1 MiB |           1 | `blib2to3/pgen2/tokenize.py:972` |

##### `__getitem__` (`/usr/lib/python3.11/typing.py:1531`)

|      % |  Size | Allocations | Location                             |
| -----: | ----: | ----------: | ------------------------------------ |
| 100.0% | 1 MiB |           1 | `/usr/lib/python3.11/typing.py:1536` |

##### `transform_line` (`black/linegen.py:601`)

|     % |     Size | Allocations | Location               |
| ----: | -------: | ----------: | ---------------------- |
| 96.4% | 73.7 KiB |           3 | `black/linegen.py:679` |
|  1.8% | 1.39 KiB |           1 | `black/linegen.py:635` |
|  1.2% |    910 B |           1 | `black/linegen.py:714` |
|  0.7% |    518 B |           1 | `black/linegen.py:631` |

##### `__new__` (`<frozen abc>:105`)

|      % |     Size | Allocations | Location           |
| -----: | -------: | ----------: | ------------------ |
| 100.0% | 75.7 KiB |          79 | `<frozen abc>:106` |

##### `normalize_string_prefix` (`black/strings.py:143`)

|      % |     Size | Allocations | Location               |
| -----: | -------: | ----------: | ---------------------- |
| 100.0% | 57.2 KiB |          65 | `black/strings.py:158` |

##### `load` (`blib2to3/pgen2/grammar.py:121`)

|      % |     Size | Allocations | Location                        |
| -----: | -------: | ----------: | ------------------------------- |
| 100.0% | 46.7 KiB |          49 | `blib2to3/pgen2/grammar.py:124` |

##### `copy` (`blib2to3/pgen2/grammar.py:131`)

|     % |     Size | Allocations | Location                        |
| ----: | -------: | ----------: | ------------------------------- |
| 88.2% | 36.6 KiB |          12 | `blib2to3/pgen2/grammar.py:145` |
|  7.6% | 3.16 KiB |           2 | `blib2to3/pgen2/grammar.py:146` |
|  4.2% | 1.75 KiB |           2 | `blib2to3/pgen2/grammar.py:147` |

##### `classify` (`blib2to3/pgen2/parse.py:336`)

|      % |   Size | Allocations | Location                      |
| -----: | -----: | ----------: | ----------------------------- |
| 100.0% | 32 KiB |           1 | `blib2to3/pgen2/parse.py:343` |

##### `__new__` (`/usr/lib/python3.11/enum.py:488`)

|      % |   Size | Allocations | Location                          |
| -----: | -----: | ----------: | --------------------------------- |
| 100.0% | 23 KiB |          26 | `/usr/lib/python3.11/enum.py:554` |

##### `compile` (`/usr/lib/python3.11/re/_compiler.py:738`)

|      % |     Size | Allocations | Location                                  |
| -----: | -------: | ----------: | ----------------------------------------- |
| 100.0% | 22.6 KiB |          12 | `/usr/lib/python3.11/re/_compiler.py:759` |

##### `<module>` (`/usr/lib/python3.11/tomllib/_parser.py:1`)

|     % |  Size | Allocations | Location                                    |
| ----: | ----: | ----------: | ------------------------------------------- |
| 20.2% | 4 KiB |           1 | `/usr/lib/python3.11/tomllib/_parser.py:37` |
| 10.1% | 2 KiB |           1 | `/usr/lib/python3.11/tomllib/_parser.py:26` |
| 10.1% | 2 KiB |           1 | `/usr/lib/python3.11/tomllib/_parser.py:22` |
| 10.1% | 2 KiB |           1 | `/usr/lib/python3.11/tomllib/_parser.py:38` |
| 10.1% | 2 KiB |           1 | `/usr/lib/python3.11/tomllib/_parser.py:27` |

##### `__new__` (`/usr/lib/python3.11/typing.py:2891`)

|      % |     Size | Allocations | Location                             |
| -----: | -------: | ----------: | ------------------------------------ |
| 100.0% | 17.4 KiB |          21 | `/usr/lib/python3.11/typing.py:2909` |

##### `inner` (`/usr/lib/python3.11/typing.py:338`)

|      % |   Size | Allocations | Location                            |
| -----: | -----: | ----------: | ----------------------------------- |
| 100.0% | 12 KiB |           3 | `/usr/lib/python3.11/typing.py:341` |

##### `_fill_cache` (`<frozen importlib._bootstrap_external>:1655`)

|      % |  Size | Allocations | Location                                      |
| -----: | ----: | ----------: | --------------------------------------------- |
| 100.0% | 8 KiB |           4 | `<frozen importlib._bootstrap_external>:1667` |

##### `_parse_sub` (`/usr/lib/python3.11/re/_parser.py:447`)

|      % |     Size | Allocations | Location                                |
| -----: | -------: | ----------: | --------------------------------------- |
| 100.0% | 7.97 KiB |           1 | `/usr/lib/python3.11/re/_parser.py:455` |

##### `__setattr__` (`/usr/lib/python3.11/enum.py:831`)

|      % |     Size | Allocations | Location                          |
| -----: | -------: | ----------: | --------------------------------- |
| 100.0% | 6.73 KiB |           8 | `/usr/lib/python3.11/enum.py:842` |

##### `namedtuple` (`/usr/lib/python3.11/collections/__init__.py:348`)

|      % |     Size | Allocations | Location                                          |
| -----: | -------: | ----------: | ------------------------------------------------- |
| 100.0% | 5.63 KiB |           6 | `/usr/lib/python3.11/collections/__init__.py:501` |

##### `_parse` (`/usr/lib/python3.11/re/_parser.py:507`)

|     % |     Size | Allocations | Location                                |
| ----: | -------: | ----------: | --------------------------------------- |
| 43.4% | 2.43 KiB |           1 | `/usr/lib/python3.11/re/_parser.py:539` |
| 33.9% |  1.9 KiB |           1 | `/usr/lib/python3.11/re/_parser.py:568` |
| 22.7% | 1.28 KiB |           1 | `/usr/lib/python3.11/re/_parser.py:838` |

##### `_code` (`/usr/lib/python3.11/re/_compiler.py:571`)

|     % |     Size | Allocations | Location                                  |
| ----: | -------: | ----------: | ----------------------------------------- |
| 81.6% | 4.34 KiB |           1 | `/usr/lib/python3.11/re/_compiler.py:580` |
| 18.4% |   1002 B |           1 | `/usr/lib/python3.11/re/_compiler.py:577` |

##### `<module>` (`/usr/lib/python3.11/pkgutil.py:1`)

|     % |     Size | Allocations | Location                             |
| ----: | -------: | ----------: | ------------------------------------ |
| 35.7% | 1.69 KiB |           2 | `/usr/lib/python3.11/pkgutil.py:269` |
| 35.7% | 1.69 KiB |           2 | `/usr/lib/python3.11/pkgutil.py:194` |
| 15.9% |    768 B |           1 | `/usr/lib/python3.11/pkgutil.py:137` |
| 12.8% |    620 B |           1 | `/usr/lib/python3.11/pkgutil.py:184` |

##### `wrap` (`/usr/lib/python3.11/dataclasses.py:1209`)

|      % |     Size | Allocations | Location                                  |
| -----: | -------: | ----------: | ----------------------------------------- |
| 100.0% | 2.85 KiB |           1 | `/usr/lib/python3.11/dataclasses.py:1210` |

##### `_process_class` (`/usr/lib/python3.11/dataclasses.py:884`)

|     % |     Size | Allocations | Location                                  |
| ----: | -------: | ----------: | ----------------------------------------- |
| 41.3% | 1.18 KiB |           1 | `/usr/lib/python3.11/dataclasses.py:958`  |
| 21.0% |    612 B |           1 | `/usr/lib/python3.11/dataclasses.py:1027` |
| 19.9% |    580 B |           1 | `/usr/lib/python3.11/dataclasses.py:1096` |
| 17.8% |    518 B |           1 | `/usr/lib/python3.11/dataclasses.py:947`  |

##### `_signature_from_function` (`/usr/lib/python3.11/inspect.py:2331`)

|     % |     Size | Allocations | Location                              |
| ----: | -------: | ----------: | ------------------------------------- |
| 41.4% | 1.06 KiB |           1 | `/usr/lib/python3.11/inspect.py:2358` |
| 37.0% |    972 B |           1 | `/usr/lib/python3.11/inspect.py:2376` |
| 21.6% |    568 B |           1 | `/usr/lib/python3.11/inspect.py:2421` |

##### `<module>` (`/usr/lib/python3.11/secrets.py:1`)

|      % |    Size | Allocations | Location                            |
| -----: | ------: | ----------: | ----------------------------------- |
| 100.0% | 2.5 KiB |           1 | `/usr/lib/python3.11/secrets.py:21` |

#### Callers

Callers ranked by contribution to each function's self size. Inlining can make caller attribution imprecise.

##### `mark` (`black/brackets.py:70`)

|      % |     Size | Allocations | Caller   | Location            |
| -----: | -------: | ----------: | -------- | ------------------- |
| 100.0% | 17.2 MiB |      20,789 | `append` | `black/lines.py:63` |

##### `visit_power` (`black/linegen.py:341`)

|      % |  Size | Allocations | Caller  | Location             |
| -----: | ----: | ----------: | ------- | -------------------- |
| 100.0% | 6 MiB |           7 | `visit` | `black/nodes.py:163` |

##### `changed` (`blib2to3/pytree.py:171`)

|     % |  Size | Allocations | Caller    | Location                 |
| ----: | ----: | ----------: | --------- | ------------------------ |
| 83.3% | 5 MiB |           5 | `changed` | `blib2to3/pytree.py:171` |
| 16.7% | 1 MiB |           1 | `prefix`  | `blib2to3/pytree.py:480` |

##### `update_sibling_maps` (`blib2to3/pytree.py:369`)

|      % |     Size | Allocations | Caller         | Location                 |
| -----: | -------: | ----------: | -------------- | ------------------------ |
| 100.0% | 5.14 MiB |         200 | `prev_sibling` | `blib2to3/pytree.py:207` |

##### `__new__` (`blib2to3/pytree.py:81`)

|      % |  Size | Allocations | Caller    | Location                 |
| -----: | ----: | ----------: | --------- | ------------------------ |
| 100.0% | 5 MiB |           5 | `convert` | `blib2to3/pytree.py:486` |

##### `parse` (`/usr/lib/python3.11/ast.py:33`)

|      % |     Size | Allocations | Caller                  | Location               |
| -----: | -------: | ----------: | ----------------------- | ---------------------- |
| 100.0% | 3.01 MiB |           4 | `_parse_single_version` | `black/parsing.py:117` |

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>:727`)

|      % |     Size | Allocations | Caller     | Location                                      |
| -----: | -------: | ----------: | ---------- | --------------------------------------------- |
| 100.0% | 2.53 MiB |         593 | `get_code` | `<frozen importlib._bootstrap_external>:1007` |

##### `parse_tokens` (`blib2to3/pgen2/driver.py:114`)

|      % |     Size | Allocations | Caller         | Location                       |
| -----: | -------: | ----------: | -------------- | ------------------------------ |
| 100.0% | 2.01 MiB |          13 | `parse_string` | `blib2to3/pgen2/driver.py:198` |

##### `convert` (`blib2to3/pytree.py:486`)

|      % |  Size | Allocations | Caller | Location                      |
| -----: | ----: | ----------: | ------ | ----------------------------- |
| 100.0% | 2 MiB |           2 | `pop`  | `blib2to3/pgen2/parse.py:398` |

##### `__init__` (`blib2to3/pytree.py:248`)

|      % |  Size | Allocations | Caller    | Location                 |
| -----: | ----: | ----------: | --------- | ------------------------ |
| 100.0% | 1 MiB |           5 | `convert` | `blib2to3/pytree.py:486` |

##### `prefix` (`blib2to3/pytree.py:480`)

|      % |  Size | Allocations | Caller   | Location            |
| -----: | ----: | ----------: | -------- | ------------------- |
| 100.0% | 1 MiB |           1 | `append` | `black/lines.py:63` |

##### `__init__` (`<string>:2`)

|      % |  Size | Allocations | Caller     | Location     |
| -----: | ----: | ----------: | ---------- | ------------ |
| 100.0% | 1 MiB |           1 | `__init__` | `<string>:2` |

##### `prev_sibling` (`blib2to3/pytree.py:207`)

|      % |  Size | Allocations | Caller       | Location             |
| -----: | ----: | ----------: | ------------ | -------------------- |
| 100.0% | 1 MiB |           1 | `whitespace` | `black/nodes.py:194` |

##### `_stringify_ast` (`black/parsing.py:174`)

|      % |  Size | Allocations | Caller                           | Location               |
| -----: | ----: | ----------: | -------------------------------- | ---------------------- |
| 100.0% | 1 MiB |           1 | `_stringify_ast_with_new_parent` | `black/parsing.py:166` |

##### `__str__` (`blib2to3/pytree.py:440`)

|      % |  Size | Allocations | Caller    | Location             |
| -----: | ----: | ----------: | --------- | -------------------- |
| 100.0% | 1 MiB |           1 | `__str__` | `black/lines.py:490` |

##### `push` (`blib2to3/pgen2/parse.py:386`)

|      % |  Size | Allocations | Caller      | Location                      |
| -----: | ----: | ----------: | ----------- | ----------------------------- |
| 100.0% | 1 MiB |           1 | `_addtoken` | `blib2to3/pgen2/parse.py:290` |

##### `generate_tokens` (`blib2to3/pgen2/tokenize.py:565`)

|      % |  Size | Allocations | Caller     | Location                      |
| -----: | ----: | ----------: | ---------- | ----------------------------- |
| 100.0% | 1 MiB |           1 | `__next__` | `blib2to3/pgen2/driver.py:80` |

##### `__getitem__` (`/usr/lib/python3.11/typing.py:1531`)

|      % |  Size | Allocations | Caller  | Location                            |
| -----: | ----: | ----------: | ------- | ----------------------------------- |
| 100.0% | 1 MiB |           1 | `inner` | `/usr/lib/python3.11/typing.py:338` |

##### `transform_line` (`black/linegen.py:601`)

|      % |     Size | Allocations | Caller             | Location                 |
| -----: | -------: | ----------: | ------------------ | ------------------------ |
| 100.0% | 76.5 KiB |           6 | `_format_str_once` | `black/__init__.py:1236` |

##### `__new__` (`<frozen abc>:105`)

|     % |     Size | Allocations | Caller     | Location                                                         |
| ----: | -------: | ----------: | ---------- | ---------------------------------------------------------------- |
| 50.5% | 38.2 KiB |          45 | `<module>` | `/venv13/lib/python3.11/site-packages/click/types.py:1`          |
| 23.1% | 17.5 KiB |          18 | `<module>` | `black/trans.py:1`                                               |
| 18.3% | 13.9 KiB |           9 | `<module>` | `/venv13/lib/python3.11/site-packages/click/core.py:1`           |
|  8.0% | 6.07 KiB |           7 | `<module>` | `/venv13/lib/python3.11/site-packages/packaging/specifiers.py:1` |

##### `normalize_string_prefix` (`black/strings.py:143`)

|      % |     Size | Allocations | Caller         | Location               |
| -----: | -------: | ----------: | -------------- | ---------------------- |
| 100.0% | 57.2 KiB |          65 | `visit_STRING` | `black/linegen.py:413` |

##### `load` (`blib2to3/pgen2/grammar.py:121`)

|      % |     Size | Allocations | Caller         | Location                       |
| -----: | -------: | ----------: | -------------- | ------------------------------ |
| 100.0% | 46.7 KiB |          49 | `load_grammar` | `blib2to3/pgen2/driver.py:246` |

##### `copy` (`blib2to3/pgen2/grammar.py:131`)

|      % |     Size | Allocations | Caller       | Location                 |
| -----: | -------: | ----------: | ------------ | ------------------------ |
| 100.0% | 41.5 KiB |          16 | `initialize` | `blib2to3/pygram.py:165` |

##### `classify` (`blib2to3/pgen2/parse.py:336`)

|      % |   Size | Allocations | Caller     | Location                      |
| -----: | -----: | ----------: | ---------- | ----------------------------- |
| 100.0% | 32 KiB |           1 | `addtoken` | `blib2to3/pgen2/parse.py:242` |

##### `__new__` (`/usr/lib/python3.11/enum.py:488`)

|     % |     Size | Allocations | Caller     | Location                                                       |
| ----: | -------: | ----------: | ---------- | -------------------------------------------------------------- |
| 33.2% | 7.64 KiB |           9 | `<module>` | `black/mode.py:1`                                              |
| 14.4% |  3.3 KiB |           3 | `<module>` | `/venv13/lib/python3.11/site-packages/click/_utils.py:1`       |
| 12.2% | 2.81 KiB |           3 | `<module>` | `/venv13/lib/python3.11/site-packages/packaging/_elffile.py:1` |
| 10.6% | 2.44 KiB |           3 | `<module>` | `black/__init__.py:1`                                          |
|  7.6% | 1.74 KiB |           2 | `<module>` | `/venv13/lib/python3.11/site-packages/click/core.py:1`         |

##### `compile` (`/usr/lib/python3.11/re/_compiler.py:738`)

|      % |     Size | Allocations | Caller     | Location                                 |
| -----: | -------: | ----------: | ---------- | ---------------------------------------- |
| 100.0% | 22.6 KiB |          12 | `_compile` | `/usr/lib/python3.11/re/__init__.py:272` |

##### `<module>` (`/usr/lib/python3.11/tomllib/_parser.py:1`)

|      % |     Size | Allocations | Caller                      | Location                            |
| -----: | -------: | ----------: | --------------------------- | ----------------------------------- |
| 100.0% | 19.8 KiB |          12 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

##### `__new__` (`/usr/lib/python3.11/typing.py:2891`)

|     % |     Size | Allocations | Caller     | Location                                                      |
| ----: | -------: | ----------: | ---------- | ------------------------------------------------------------- |
| 90.3% | 15.7 KiB |          19 | `<module>` | `/venv13/lib/python3.11/site-packages/click/types.py:1`       |
|  9.7% | 1.69 KiB |           2 | `<module>` | `/venv13/lib/python3.11/site-packages/packaging/version.py:1` |

##### `inner` (`/usr/lib/python3.11/typing.py:338`)

|     % |     Size | Allocations | Caller        | Location                                                |
| ----: | -------: | ----------: | ------------- | ------------------------------------------------------- |
| 75.3% | 9.02 KiB |           1 | `<module>`    | `black/files.py:1`                                      |
| 17.9% | 2.15 KiB |           1 | `__getitem__` | `/usr/lib/python3.11/typing.py:467`                     |
|  6.7% |    826 B |           1 | `<module>`    | `/venv13/lib/python3.11/site-packages/click/types.py:1` |

##### `_fill_cache` (`<frozen importlib._bootstrap_external>:1655`)

|      % |  Size | Allocations | Caller      | Location                                      |
| -----: | ----: | ----------: | ----------- | --------------------------------------------- |
| 100.0% | 8 KiB |           4 | `find_spec` | `<frozen importlib._bootstrap_external>:1604` |

##### `_parse_sub` (`/usr/lib/python3.11/re/_parser.py:447`)

|      % |     Size | Allocations | Caller  | Location                                |
| -----: | -------: | ----------: | ------- | --------------------------------------- |
| 100.0% | 7.97 KiB |           1 | `parse` | `/usr/lib/python3.11/re/_parser.py:970` |

##### `__setattr__` (`/usr/lib/python3.11/enum.py:831`)

|     % |     Size | Allocations | Caller         | Location                          |
| ----: | -------: | ----------: | -------------- | --------------------------------- |
| 66.6% | 4.48 KiB |           5 | `__set_name__` | `/usr/lib/python3.11/enum.py:237` |
| 33.4% | 2.25 KiB |           3 | `__new__`      | `/usr/lib/python3.11/enum.py:488` |

##### `namedtuple` (`/usr/lib/python3.11/collections/__init__.py:348`)

|     % |     Size | Allocations | Caller          | Location                             |
| ----: | -------: | ----------: | --------------- | ------------------------------------ |
| 83.3% | 4.69 KiB |           5 | `_make_nmtuple` | `/usr/lib/python3.11/typing.py:2795` |
| 16.7% |    960 B |           1 | `<module>`      | `/usr/lib/python3.11/pkgutil.py:1`   |

##### `_parse` (`/usr/lib/python3.11/re/_parser.py:507`)

|      % |     Size | Allocations | Caller       | Location                                |
| -----: | -------: | ----------: | ------------ | --------------------------------------- |
| 100.0% | 5.61 KiB |           3 | `_parse_sub` | `/usr/lib/python3.11/re/_parser.py:447` |

##### `_code` (`/usr/lib/python3.11/re/_compiler.py:571`)

|      % |     Size | Allocations | Caller    | Location                                  |
| -----: | -------: | ----------: | --------- | ----------------------------------------- |
| 100.0% | 5.32 KiB |           2 | `compile` | `/usr/lib/python3.11/re/_compiler.py:738` |

##### `<module>` (`/usr/lib/python3.11/pkgutil.py:1`)

|      % |     Size | Allocations | Caller                      | Location                            |
| -----: | -------: | ----------: | --------------------------- | ----------------------------------- |
| 100.0% | 4.73 KiB |           6 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

##### `wrap` (`/usr/lib/python3.11/dataclasses.py:1209`)

|      % |     Size | Allocations | Caller     | Location                                                     |
| -----: | -------: | ----------: | ---------- | ------------------------------------------------------------ |
| 100.0% | 2.85 KiB |           1 | `<module>` | `/venv13/lib/python3.11/site-packages/pathspec/pattern.py:1` |

##### `_process_class` (`/usr/lib/python3.11/dataclasses.py:884`)

|      % |     Size | Allocations | Caller | Location                                  |
| -----: | -------: | ----------: | ------ | ----------------------------------------- |
| 100.0% | 2.85 KiB |           4 | `wrap` | `/usr/lib/python3.11/dataclasses.py:1209` |

##### `_signature_from_function` (`/usr/lib/python3.11/inspect.py:2331`)

|      % |     Size | Allocations | Caller                     | Location                              |
| -----: | -------: | ----------: | -------------------------- | ------------------------------------- |
| 100.0% | 2.56 KiB |           3 | `_signature_from_callable` | `/usr/lib/python3.11/inspect.py:2426` |

##### `<module>` (`/usr/lib/python3.11/secrets.py:1`)

|      % |    Size | Allocations | Caller                      | Location                            |
| -----: | ------: | ----------: | --------------------------- | ----------------------------------- |
| 100.0% | 2.5 KiB |           1 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

### Total size

Functions ranked by total bytes never freed in the function and all its callees.

|      % |     Size | Allocations | Function               | Location                                                         |
| -----: | -------: | ----------: | ---------------------- | ---------------------------------------------------------------- |
| 100.0% | 58.9 MiB |      22,470 | `_run_tracker`         | `/venv13/lib/python3.11/site-packages/memray/commands/run.py:40` |
| 100.0% | 58.9 MiB |      22,469 | `run_module`           | `<frozen runpy>:201`                                             |
|  92.8% | 54.7 MiB |      21,199 | `__call__`             | `/venv13/lib/python3.11/site-packages/click/core.py:1567`        |
|  92.8% | 54.7 MiB |      21,199 | `patched_main`         | `black/__init__.py:1594`                                         |
|  92.8% | 54.7 MiB |      21,199 | `<module>`             | `black/__main__.py:1`                                            |
|  92.8% | 54.7 MiB |      21,199 | `_run_code`            | `<frozen runpy>:65`                                              |
|  92.8% | 54.7 MiB |      21,199 | `_run_module_code`     | `<frozen runpy>:91`                                              |
|  92.8% | 54.7 MiB |      21,198 | `main`                 | `/venv13/lib/python3.11/site-packages/click/core.py:1422`        |
|  92.8% | 54.6 MiB |      21,178 | `invoke`               | `/venv13/lib/python3.11/site-packages/click/core.py:1339`        |
|  92.8% | 54.6 MiB |      21,176 | `invoke`               | `/venv13/lib/python3.11/site-packages/click/core.py:853`         |
|  92.8% | 54.6 MiB |      21,175 | `new_func`             | `/venv13/lib/python3.11/site-packages/click/decorators.py:33`    |
|  92.7% | 54.6 MiB |      21,173 | `main`                 | `black/__init__.py:244`                                          |
|  92.7% | 54.6 MiB |      21,168 | `reformat_one`         | `black/__init__.py:860`                                          |
|  92.7% | 54.6 MiB |      21,156 | `format_file_in_place` | `black/__init__.py:917`                                          |
|  92.7% | 54.6 MiB |      21,155 | `format_file_contents` | `black/__init__.py:1054`                                         |
|  85.9% | 50.6 MiB |      21,147 | `_format_str_once`     | `black/__init__.py:1236`                                         |
|  61.9% | 36.4 MiB |      21,087 | `visit`                | `black/nodes.py:163`                                             |
|  61.9% | 36.4 MiB |      21,085 | `visit_default`        | `black/nodes.py:187`                                             |
|  61.9% | 36.4 MiB |      21,085 | `visit_default`        | `black/linegen.py:134`                                           |
|  61.4% | 36.2 MiB |      20,714 | `visit_stmt`           | `black/linegen.py:199`                                           |

#### Categories

##### Ours

|     % |     Size | Allocations | Function                          | Location                 |
| ----: | -------: | ----------: | --------------------------------- | ------------------------ |
| 92.8% | 54.7 MiB |      21,199 | `patched_main`                    | `black/__init__.py:1594` |
| 92.8% | 54.7 MiB |      21,199 | `<module>`                        | `black/__main__.py:1`    |
| 92.7% | 54.6 MiB |      21,173 | `main`                            | `black/__init__.py:244`  |
| 92.7% | 54.6 MiB |      21,168 | `reformat_one`                    | `black/__init__.py:860`  |
| 92.7% | 54.6 MiB |      21,156 | `format_file_in_place`            | `black/__init__.py:917`  |
| 92.7% | 54.6 MiB |      21,155 | `format_file_contents`            | `black/__init__.py:1054` |
| 85.9% | 50.6 MiB |      21,147 | `_format_str_once`                | `black/__init__.py:1236` |
| 61.9% | 36.4 MiB |      21,087 | `visit`                           | `black/nodes.py:163`     |
| 61.9% | 36.4 MiB |      21,085 | `visit_default`                   | `black/nodes.py:187`     |
| 61.9% | 36.4 MiB |      21,085 | `visit_default`                   | `black/linegen.py:134`   |
| 61.4% | 36.2 MiB |      20,714 | `visit_stmt`                      | `black/linegen.py:199`   |
| 60.7% | 35.7 MiB |      20,147 | `visit_suite`                     | `black/linegen.py:288`   |
| 59.6% | 35.1 MiB |          94 | `format_str`                      | `black/__init__.py:1189` |
| 59.1% | 34.8 MiB |      20,272 | `visit_funcdef`                   | `black/linegen.py:254`   |
| 41.2% | 24.3 MiB |      20,889 | `append`                          | `black/lines.py:63`      |
| 40.4% | 23.8 MiB |      13,402 | `visit_simple_stmt`               | `black/linegen.py:295`   |
| 33.2% | 19.5 MiB |      21,061 | `check_stability_and_equivalence` | `black/__init__.py:1037` |
| 32.1% | 18.9 MiB |      10,810 | `visit_power`                     | `black/linegen.py:341`   |
| 29.2% | 17.2 MiB |      20,789 | `mark`                            | `black/brackets.py:70`   |
| 26.4% | 15.5 MiB |      21,054 | `assert_stable`                   | `black/__init__.py:1557` |

##### Standard library

|      % |     Size | Allocations | Function                    | Location                                      |
| -----: | -------: | ----------: | --------------------------- | --------------------------------------------- |
| 100.0% | 58.9 MiB |      22,469 | `run_module`                | `<frozen runpy>:201`                          |
|  92.8% | 54.7 MiB |      21,199 | `_run_code`                 | `<frozen runpy>:65`                           |
|  92.8% | 54.7 MiB |      21,199 | `_run_module_code`          | `<frozen runpy>:91`                           |
|   7.2% | 4.25 MiB |       1,269 | `_get_module_details`       | `<frozen runpy>:105`                          |
|   7.2% | 4.24 MiB |       1,262 | `_find_and_load`            | `<frozen importlib._bootstrap>:1167`          |
|   7.2% | 4.24 MiB |       1,260 | `_find_and_load_unlocked`   | `<frozen importlib._bootstrap>:1122`          |
|   7.2% | 4.24 MiB |       1,259 | `_load_unlocked`            | `<frozen importlib._bootstrap>:666`           |
|   7.2% | 4.24 MiB |       1,257 | `exec_module`               | `<frozen importlib._bootstrap_external>:934`  |
|   7.1% | 4.21 MiB |       1,227 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233`           |
|   5.1% | 3.01 MiB |           4 | `parse`                     | `/usr/lib/python3.11/ast.py:33`               |
|   4.3% | 2.53 MiB |         593 | `_compile_bytecode`         | `<frozen importlib._bootstrap_external>:727`  |
|   4.3% | 2.53 MiB |         593 | `get_code`                  | `<frozen importlib._bootstrap_external>:1007` |
|   2.2% |  1.3 MiB |         317 | `_handle_fromlist`          | `<frozen importlib._bootstrap>:1209`          |
|   1.8% | 1.03 MiB |          33 | `<module>`                  | `/usr/lib/python3.11/tomllib/__init__.py:1`   |
|   1.7% | 1.01 MiB |           6 | `inner`                     | `/usr/lib/python3.11/typing.py:338`           |
|   1.7% |    1 MiB |           1 | `__getitem__`               | `/usr/lib/python3.11/typing.py:1531`          |
|   0.1% | 75.7 KiB |          79 | `__new__`                   | `<frozen abc>:105`                            |
|   0.1% | 47.8 KiB |          25 | `compile`                   | `/usr/lib/python3.11/re/__init__.py:225`      |
|   0.1% | 47.1 KiB |          24 | `_compile`                  | `/usr/lib/python3.11/re/__init__.py:272`      |
|   0.1% | 46.5 KiB |          23 | `compile`                   | `/usr/lib/python3.11/re/_compiler.py:738`     |

#### Callees

Callees ranked by contribution to each function's total size. Inlining can make callee attribution imprecise, and percentages can sum past 100% when callees recurse.

##### `_run_tracker` (`/venv13/lib/python3.11/site-packages/memray/commands/run.py:40`)

|      % |     Size | Allocations | Callee       | Location             |
| -----: | -------: | ----------: | ------------ | -------------------- |
| 100.0% | 58.9 MiB |      22,469 | `run_module` | `<frozen runpy>:201` |

##### `run_module` (`<frozen runpy>:201`)

|     % |     Size | Allocations | Callee                | Location             |
| ----: | -------: | ----------: | --------------------- | -------------------- |
| 92.8% | 54.7 MiB |      21,199 | `_run_module_code`    | `<frozen runpy>:91`  |
|  7.2% | 4.25 MiB |       1,269 | `_get_module_details` | `<frozen runpy>:105` |

##### `__call__` (`/venv13/lib/python3.11/site-packages/click/core.py:1567`)

|      % |     Size | Allocations | Callee | Location                                                  |
| -----: | -------: | ----------: | ------ | --------------------------------------------------------- |
| 100.0% | 54.7 MiB |      21,198 | `main` | `/venv13/lib/python3.11/site-packages/click/core.py:1422` |

##### `patched_main` (`black/__init__.py:1594`)

|      % |     Size | Allocations | Callee     | Location                                                  |
| -----: | -------: | ----------: | ---------- | --------------------------------------------------------- |
| 100.0% | 54.7 MiB |      21,199 | `__call__` | `/venv13/lib/python3.11/site-packages/click/core.py:1567` |

##### `<module>` (`black/__main__.py:1`)

|      % |     Size | Allocations | Callee         | Location                 |
| -----: | -------: | ----------: | -------------- | ------------------------ |
| 100.0% | 54.7 MiB |      21,199 | `patched_main` | `black/__init__.py:1594` |

##### `_run_code` (`<frozen runpy>:65`)

|      % |     Size | Allocations | Callee     | Location              |
| -----: | -------: | ----------: | ---------- | --------------------- |
| 100.0% | 54.7 MiB |      21,199 | `<module>` | `black/__main__.py:1` |

##### `_run_module_code` (`<frozen runpy>:91`)

|      % |     Size | Allocations | Callee      | Location            |
| -----: | -------: | ----------: | ----------- | ------------------- |
| 100.0% | 54.7 MiB |      21,199 | `_run_code` | `<frozen runpy>:65` |

##### `main` (`/venv13/lib/python3.11/site-packages/click/core.py:1422`)

|      % |     Size | Allocations | Callee         | Location                                                  |
| -----: | -------: | ----------: | -------------- | --------------------------------------------------------- |
| 100.0% | 54.6 MiB |      21,178 | `invoke`       | `/venv13/lib/python3.11/site-packages/click/core.py:1339` |
|  <0.1% | 14.3 KiB |          17 | `make_context` | `/venv13/lib/python3.11/site-packages/click/core.py:1266` |
|  <0.1% |    529 B |           2 | `__exit__`     | `/venv13/lib/python3.11/site-packages/click/core.py:550`  |

##### `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:1339`)

|      % |     Size | Allocations | Callee   | Location                                                 |
| -----: | -------: | ----------: | -------- | -------------------------------------------------------- |
| 100.0% | 54.6 MiB |      21,176 | `invoke` | `/venv13/lib/python3.11/site-packages/click/core.py:853` |

##### `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:853`)

|      % |     Size | Allocations | Callee     | Location                                                      |
| -----: | -------: | ----------: | ---------- | ------------------------------------------------------------- |
| 100.0% | 54.6 MiB |      21,175 | `new_func` | `/venv13/lib/python3.11/site-packages/click/decorators.py:33` |

##### `new_func` (`/venv13/lib/python3.11/site-packages/click/decorators.py:33`)

|      % |     Size | Allocations | Callee | Location                |
| -----: | -------: | ----------: | ------ | ----------------------- |
| 100.0% | 54.6 MiB |      21,173 | `main` | `black/__init__.py:244` |

##### `main` (`black/__init__.py:244`)

|      % |     Size | Allocations | Callee         | Location                |
| -----: | -------: | ----------: | -------------- | ----------------------- |
| 100.0% | 54.6 MiB |      21,168 | `reformat_one` | `black/__init__.py:860` |
|  <0.1% | 2.06 KiB |           2 | `get_sources`  | `black/__init__.py:724` |

##### `reformat_one` (`black/__init__.py:860`)

|      % |     Size | Allocations | Callee                 | Location                |
| -----: | -------: | ----------: | ---------------------- | ----------------------- |
| 100.0% | 54.6 MiB |      21,156 | `format_file_in_place` | `black/__init__.py:917` |
|  <0.1% | 5.22 KiB |           7 | `write`                | `black/cache.py:132`    |
|  <0.1% | 1.92 KiB |           2 | `done`                 | `black/report.py:36`    |
|  <0.1% | 1.13 KiB |           1 | `read`                 | `black/cache.py:60`     |

##### `format_file_in_place` (`black/__init__.py:917`)

|      % |     Size | Allocations | Callee                 | Location                 |
| -----: | -------: | ----------: | ---------------------- | ------------------------ |
| 100.0% | 54.6 MiB |      21,155 | `format_file_contents` | `black/__init__.py:1054` |
|  <0.1% |    552 B |           1 | `decode_bytes`         | `black/__init__.py:1290` |

##### `format_file_contents` (`black/__init__.py:1054`)

|     % |     Size | Allocations | Callee                            | Location                 |
| ----: | -------: | ----------: | --------------------------------- | ------------------------ |
| 64.2% | 35.1 MiB |          94 | `format_str`                      | `black/__init__.py:1189` |
| 35.8% | 19.5 MiB |      21,061 | `check_stability_and_equivalence` | `black/__init__.py:1037` |

##### `_format_str_once` (`black/__init__.py:1236`)

|     % |     Size | Allocations | Callee                   | Location                 |
| ----: | -------: | ----------: | ------------------------ | ------------------------ |
| 72.0% | 36.4 MiB |      21,087 | `visit`                  | `black/nodes.py:163`     |
| 23.8% | 12.1 MiB |          32 | `lib2to3_parse`          | `black/parsing.py:55`    |
|  4.1% | 2.08 MiB |          17 | `transform_line`         | `black/linegen.py:601`   |
| <0.1% | 19.9 KiB |           3 | `normalize_fmt_off`      | `black/comments.py:168`  |
| <0.1% | 3.49 KiB |           1 | `detect_target_versions` | `black/__init__.py:1464` |

##### `visit` (`black/nodes.py:163`)

|      % |     Size | Allocations | Callee              | Location               |
| -----: | -------: | ----------: | ------------------- | ---------------------- |
| 100.0% | 36.4 MiB |      21,085 | `visit_default`     | `black/linegen.py:134` |
|  99.2% | 36.2 MiB |      20,714 | `visit_stmt`        | `black/linegen.py:199` |
|  98.1% | 35.7 MiB |      20,147 | `visit_suite`       | `black/linegen.py:288` |
|  95.5% | 34.8 MiB |      20,272 | `visit_funcdef`     | `black/linegen.py:254` |
|  65.4% | 23.8 MiB |      13,402 | `visit_simple_stmt` | `black/linegen.py:295` |

##### `visit_default` (`black/nodes.py:187`)

|      % |     Size | Allocations | Callee  | Location             |
| -----: | -------: | ----------: | ------- | -------------------- |
| 100.0% | 36.4 MiB |      21,085 | `visit` | `black/nodes.py:163` |

##### `visit_default` (`black/linegen.py:134`)

|      % |     Size | Allocations | Callee              | Location               |
| -----: | -------: | ----------: | ------------------- | ---------------------- |
| 100.0% | 36.4 MiB |      21,085 | `visit_default`     | `black/nodes.py:187`   |
|  66.6% | 24.3 MiB |      20,889 | `append`            | `black/lines.py:63`    |
|  11.0% |    4 MiB |           4 | `generate_comments` | `black/comments.py:52` |

##### `visit_stmt` (`black/linegen.py:199`)

|      % |     Size | Allocations | Callee                       | Location                |
| -----: | -------: | ----------: | ---------------------------- | ----------------------- |
| 100.0% | 36.2 MiB |      20,712 | `visit`                      | `black/nodes.py:163`    |
|   5.5% |    2 MiB |           3 | `normalize_invisible_parens` | `black/linegen.py:1328` |

##### `visit_suite` (`black/linegen.py:288`)

|      % |     Size | Allocations | Callee          | Location               |
| -----: | -------: | ----------: | --------------- | ---------------------- |
| 100.0% | 35.7 MiB |      20,147 | `visit_default` | `black/linegen.py:134` |

##### `format_str` (`black/__init__.py:1189`)

|      % |     Size | Allocations | Callee             | Location                 |
| -----: | -------: | ----------: | ------------------ | ------------------------ |
| 100.0% | 35.1 MiB |          93 | `_format_str_once` | `black/__init__.py:1236` |

##### `visit_funcdef` (`black/linegen.py:254`)

|      % |     Size | Allocations | Callee  | Location             |
| -----: | -------: | ----------: | ------- | -------------------- |
| 100.0% | 34.8 MiB |      20,272 | `visit` | `black/nodes.py:163` |

##### `append` (`black/lines.py:63`)

|     % |     Size | Allocations | Callee       | Location                 |
| ----: | -------: | ----------: | ------------ | ------------------------ |
| 70.9% | 17.2 MiB |      20,789 | `mark`       | `black/brackets.py:70`   |
| 24.9% | 6.05 MiB |          95 | `whitespace` | `black/nodes.py:194`     |
|  4.1% |    1 MiB |           1 | `prefix`     | `blib2to3/pytree.py:480` |

##### `visit_simple_stmt` (`black/linegen.py:295`)

|      % |     Size | Allocations | Callee          | Location               |
| -----: | -------: | ----------: | --------------- | ---------------------- |
| 100.0% | 23.8 MiB |      13,402 | `visit_default` | `black/linegen.py:134` |

##### `check_stability_and_equivalence` (`black/__init__.py:1037`)

|     % |     Size | Allocations | Callee              | Location                 |
| ----: | -------: | ----------: | ------------------- | ------------------------ |
| 79.5% | 15.5 MiB |      21,054 | `assert_stable`     | `black/__init__.py:1557` |
| 20.5% | 4.01 MiB |           6 | `assert_equivalent` | `black/__init__.py:1524` |

##### `visit_power` (`black/linegen.py:341`)

|     % |     Size | Allocations | Callee          | Location               |
| ----: | -------: | ----------: | --------------- | ---------------------- |
| 73.5% | 13.9 MiB |      10,804 | `visit_default` | `black/linegen.py:134` |

##### `assert_stable` (`black/__init__.py:1557`)

|      % |     Size | Allocations | Callee             | Location                 |
| -----: | -------: | ----------: | ------------------ | ------------------------ |
| 100.0% | 15.5 MiB |      21,054 | `_format_str_once` | `black/__init__.py:1236` |

##### `_get_module_details` (`<frozen runpy>:105`)

|     % |     Size | Allocations | Callee                | Location                             |
| ----: | -------: | ----------: | --------------------- | ------------------------------------ |
| 99.9% | 4.24 MiB |       1,262 | `_find_and_load`      | `<frozen importlib._bootstrap>:1167` |
| 99.9% | 4.24 MiB |       1,262 | `_get_module_details` | `<frozen runpy>:105`                 |
|  0.1% | 5.66 KiB |           6 | `find_spec`           | `<frozen importlib.util>:73`         |

##### `_find_and_load` (`<frozen importlib._bootstrap>:1167`)

|      % |     Size | Allocations | Callee                    | Location                             |
| -----: | -------: | ----------: | ------------------------- | ------------------------------------ |
| 100.0% | 4.24 MiB |       1,260 | `_find_and_load_unlocked` | `<frozen importlib._bootstrap>:1122` |
|  <0.1% |    560 B |           1 | `__enter__`               | `<frozen importlib._bootstrap>:169`  |

##### `_find_and_load_unlocked` (`<frozen importlib._bootstrap>:1122`)

|      % |     Size | Allocations | Callee                      | Location                             |
| -----: | -------: | ----------: | --------------------------- | ------------------------------------ |
| 100.0% | 4.24 MiB |       1,259 | `_load_unlocked`            | `<frozen importlib._bootstrap>:666`  |
|   0.9% | 37.2 KiB |          47 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233`  |
|   0.2% | 7.48 KiB |           4 | `_find_spec`                | `<frozen importlib._bootstrap>:1056` |

##### `_load_unlocked` (`<frozen importlib._bootstrap>:666`)

|      % |     Size | Allocations | Callee             | Location                                     |
| -----: | -------: | ----------: | ------------------ | -------------------------------------------- |
| 100.0% | 4.24 MiB |       1,257 | `exec_module`      | `<frozen importlib._bootstrap_external>:934` |
|  <0.1% | 1.83 KiB |           2 | `module_from_spec` | `<frozen importlib._bootstrap>:566`          |

##### `exec_module` (`<frozen importlib._bootstrap_external>:934`)

|     % |     Size | Allocations | Callee                      | Location                                      |
| ----: | -------: | ----------: | --------------------------- | --------------------------------------------- |
| 99.3% | 4.21 MiB |       1,227 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233`           |
| 59.7% | 2.53 MiB |         593 | `get_code`                  | `<frozen importlib._bootstrap_external>:1007` |

##### `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`)

|      % |     Size | Allocations | Callee           | Location                                                   |
| -----: | -------: | ----------: | ---------------- | ---------------------------------------------------------- |
| 100.0% | 4.21 MiB |       1,227 | `<module>`       | `black/__init__.py:1`                                      |
|  31.2% | 1.31 MiB |         328 | `_find_and_load` | `<frozen importlib._bootstrap>:1167`                       |
|  31.1% | 1.31 MiB |         304 | `<module>`       | `/venv13/lib/python3.11/site-packages/click/__init__.py:1` |
|  30.5% | 1.28 MiB |         258 | `<module>`       | `black/comments.py:1`                                      |
|  30.2% | 1.27 MiB |         244 | `<module>`       | `black/nodes.py:1`                                         |

##### `get_code` (`<frozen importlib._bootstrap_external>:1007`)

|      % |     Size | Allocations | Callee              | Location                                     |
| -----: | -------: | ----------: | ------------------- | -------------------------------------------- |
| 100.0% | 2.53 MiB |         593 | `_compile_bytecode` | `<frozen importlib._bootstrap_external>:727` |

##### `_handle_fromlist` (`<frozen importlib._bootstrap>:1209`)

|      % |    Size | Allocations | Callee                      | Location                            |
| -----: | ------: | ----------: | --------------------------- | ----------------------------------- |
| 100.0% | 1.3 MiB |         317 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233` |

##### `<module>` (`/usr/lib/python3.11/tomllib/__init__.py:1`)

|      % |     Size | Allocations | Callee           | Location                             |
| -----: | -------: | ----------: | ---------------- | ------------------------------------ |
| 100.0% | 1.03 MiB |          33 | `_find_and_load` | `<frozen importlib._bootstrap>:1167` |

##### `inner` (`/usr/lib/python3.11/typing.py:338`)

|     % |   Size | Allocations | Callee              | Location                             |
| ----: | -----: | ----------: | ------------------- | ------------------------------------ |
| 98.7% |  1 MiB |           1 | `__getitem__`       | `/usr/lib/python3.11/typing.py:1531` |
|  0.1% | 1016 B |           1 | `__getitem__`       | `/usr/lib/python3.11/typing.py:1360` |
|  0.1% |  632 B |           1 | `__class_getitem__` | `/usr/lib/python3.11/typing.py:1773` |

##### `compile` (`/usr/lib/python3.11/re/__init__.py:225`)

|     % |     Size | Allocations | Callee     | Location                                 |
| ----: | -------: | ----------: | ---------- | ---------------------------------------- |
| 98.6% | 47.1 KiB |          24 | `_compile` | `/usr/lib/python3.11/re/__init__.py:272` |

##### `_compile` (`/usr/lib/python3.11/re/__init__.py:272`)

|     % |     Size | Allocations | Callee    | Location                                  |
| ----: | -------: | ----------: | --------- | ----------------------------------------- |
| 98.6% | 46.5 KiB |          23 | `compile` | `/usr/lib/python3.11/re/_compiler.py:738` |
|  1.4% |    698 B |           1 | `__and__` | `/usr/lib/python3.11/enum.py:1504`        |

##### `compile` (`/usr/lib/python3.11/re/_compiler.py:738`)

|     % |     Size | Allocations | Callee  | Location                                  |
| ----: | -------: | ----------: | ------- | ----------------------------------------- |
| 31.0% | 14.4 KiB |           5 | `parse` | `/usr/lib/python3.11/re/_parser.py:970`   |
| 20.4% |  9.5 KiB |           6 | `_code` | `/usr/lib/python3.11/re/_compiler.py:571` |

## Hottest call stacks

Call stacks ranked by bytes never freed in their leaf frame.

Common call stack: `run_module` (`<frozen runpy>:201`) ← `_run_tracker` (`/venv13/lib/python3.11/site-packages/memray/commands/run.py:40`)

|    % |     Size | Allocations | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ---: | -------: | ----------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 8.5% |    5 MiB |           5 | `__new__` (`blib2to3/pytree.py:81`) ← `convert` (486) ← `shift` (`blib2to3/pgen2/parse.py:373`) ← `_addtoken` (290) ← `addtoken` (242) ← `parse_tokens` (`blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`black/parsing.py:55`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv13/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:853`) ← `invoke` (1339) ← `main` (1422) ← `__call__` (1567) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 5.1% | 3.01 MiB |           4 | `parse` (`/usr/lib/python3.11/ast.py:33`) ← `_parse_single_version` (`black/parsing.py:117`) ← `parse_ast` (129) ← `assert_equivalent` (`black/__init__.py:1524`) ← `check_stability_and_equivalence` (1037) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv13/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:853`) ← `invoke` (1339) ← `main` (1422) ← `__call__` (1567) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 5.1% |    3 MiB |           3 | `visit_power` (`black/linegen.py:341`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv13/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:853`) ← `invoke` (1339) ← `main` (1422) ← `__call__` (1567) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 3.4% | 2.01 MiB |          13 | `parse_tokens` (`blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`black/parsing.py:55`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv13/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:853`) ← `invoke` (1339) ← `main` (1422) ← `__call__` (1567) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 3.4% |    2 MiB |           2 | `convert` (`blib2to3/pytree.py:486`) ← `pop` (`blib2to3/pgen2/parse.py:398`) ← `_addtoken` (290) ← `addtoken` (242) ← `parse_tokens` (`blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`black/parsing.py:55`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv13/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:853`) ← `invoke` (1339) ← `main` (1422) ← `__call__` (1567) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 1.7% | 1.01 MiB |          15 | `_compile_bytecode` (`<frozen importlib._bootstrap_external>:727`) ← `get_code` (1007) ← `exec_module` (934) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`/venv13/lib/python3.11/site-packages/click/exceptions.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`/venv13/lib/python3.11/site-packages/click/types.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `_call_with_frames_removed` (233) ← `_handle_fromlist` (1209) ← `<module>` (`/venv13/lib/python3.11/site-packages/click/core.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`/venv13/lib/python3.11/site-packages/click/__init__.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`black/__init__.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `_get_module_details` (`<frozen runpy>:105`) ← `_get_module_details` (105)                                                                                                                                                                                                                                                    |
| 1.7% | 1.01 MiB |          14 | `_compile_bytecode` (`<frozen importlib._bootstrap_external>:727`) ← `get_code` (1007) ← `exec_module` (934) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`/usr/lib/python3.11/tomllib/__init__.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`black/files.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`black/__init__.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `_get_module_details` (`<frozen runpy>:105`) ← `_get_module_details` (105)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 1.7% |    1 MiB |           1 | `changed` (`blib2to3/pytree.py:171`) ← `changed` (171) ← `prefix` (480) ← `wrap_in_parentheses` (`black/nodes.py:935`) ← `normalize_invisible_parens` (`black/linegen.py:1328`) ← `visit_stmt` (199) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv13/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:853`) ← `invoke` (1339) ← `main` (1422) ← `__call__` (1567) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 1.7% |    1 MiB |           1 | `__init__` (`<string>:2`) ← `__init__` (2) ← `delimiter_split` (`black/linegen.py:1203`) ← `split_wrapper` (1162) ← `run_transformer` (1755) ← `transform_line` (601) ← `run_transformer` (1755) ← `transform_line` (601) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv13/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:853`) ← `invoke` (1339) ← `main` (1422) ← `__call__` (1567) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 1.7% |    1 MiB |           1 | `changed` (`blib2to3/pytree.py:171`) ← `changed` (171) ← `prefix` (480) ← `normalize_trailing_prefix` (`black/comments.py:127`) ← `generate_comments` (52) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv13/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:853`) ← `invoke` (1339) ← `main` (1422) ← `__call__` (1567) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                     |
| 1.7% |    1 MiB |           1 | `update_sibling_maps` (`blib2to3/pytree.py:369`) ← `prev_sibling` (207) ← `whitespace` (`black/nodes.py:194`) ← `append` (`black/lines.py:63`) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv13/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:853`) ← `invoke` (1339) ← `main` (1422) ← `__call__` (1567) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                               |
| 1.7% |    1 MiB |           1 | `mark` (`black/brackets.py:70`) ← `append` (`black/lines.py:63`) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv13/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:853`) ← `invoke` (1339) ← `main` (1422) ← `__call__` (1567) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 1.7% |    1 MiB |           1 | `_stringify_ast` (`black/parsing.py:174`) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `assert_equivalent` (`black/__init__.py:1524`) ← `check_stability_and_equivalence` (1037) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv13/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:853`) ← `invoke` (1339) ← `main` (1422) ← `__call__` (1567) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 1.7% |    1 MiB |           1 | `visit_power` (`black/linegen.py:341`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv13/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:853`) ← `invoke` (1339) ← `main` (1422) ← `__call__` (1567) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 1.7% |    1 MiB |           1 | `__str__` (`blib2to3/pytree.py:440`) ← `__str__` (`black/lines.py:490`) ← `line_to_string` (1073) ← `transform_line` (`black/linegen.py:601`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv13/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:853`) ← `invoke` (1339) ← `main` (1422) ← `__call__` (1567) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 1.7% |    1 MiB |           1 | `update_sibling_maps` (`blib2to3/pytree.py:369`) ← `prev_sibling` (207) ← `whitespace` (`black/nodes.py:194`) ← `append` (`black/lines.py:63`) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv13/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:853`) ← `invoke` (1339) ← `main` (1422) ← `__call__` (1567) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 1.7% |    1 MiB |           1 | `changed` (`blib2to3/pytree.py:171`) ← `changed` (171) ← `changed` (171) ← `prefix` (480) ← `prefix` (329) ← `wrap_in_parentheses` (`black/nodes.py:935`) ← `normalize_invisible_parens` (`black/linegen.py:1328`) ← `visit_stmt` (199) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv13/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:853`) ← `invoke` (1339) ← `main` (1422) ← `__call__` (1567) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 1.7% |    1 MiB |           1 | `update_sibling_maps` (`blib2to3/pytree.py:369`) ← `prev_sibling` (207) ← `whitespace` (`black/nodes.py:194`) ← `append` (`black/lines.py:63`) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_test` (160) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv13/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:853`) ← `invoke` (1339) ← `main` (1422) ← `__call__` (1567) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                |
| 1.7% |    1 MiB |           1 | `changed` (`blib2to3/pytree.py:171`) ← `changed` (171) ← `prefix` (480) ← `normalize_trailing_prefix` (`black/comments.py:127`) ← `generate_comments` (52) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv13/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:853`) ← `invoke` (1339) ← `main` (1422) ← `__call__` (1567) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91) |
| 1.7% |    1 MiB |           1 | `visit_power` (`black/linegen.py:341`) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv13/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:853`) ← `invoke` (1339) ← `main` (1422) ← `__call__` (1567) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |

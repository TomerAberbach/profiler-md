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

|     % |     Size | Allocations | Function                     | Location                                     |
| ----: | -------: | ----------: | ---------------------------- | -------------------------------------------- |
| 20.7% | 16.2 MiB |      20,788 | `mark`                       | `black/brackets.py:70`                       |
| 11.6% | 9.12 MiB |         142 | `parse`                      | `/usr/lib/python3.11/ast.py:33`              |
|  9.0% |  7.1 MiB |           4 | `assert_equivalent`          | `black/__init__.py:1524`                     |
|  7.6% |    6 MiB |           6 | `__new__`                    | `blib2to3/pytree.py:81`                      |
|  6.4% | 5.05 MiB |          61 | `_stringify_ast`             | `black/parsing.py:174`                       |
|  6.4% |    5 MiB |           6 | `visit_power`                | `black/linegen.py:341`                       |
|  6.4% |    5 MiB |           5 | `changed`                    | `blib2to3/pytree.py:171`                     |
|  3.2% | 2.53 MiB |         593 | `_compile_bytecode`          | `<frozen importlib._bootstrap_external>:727` |
|  2.7% | 2.14 MiB |         197 | `update_sibling_maps`        | `blib2to3/pytree.py:369`                     |
|  2.5% |    2 MiB |           3 | `normalize_invisible_parens` | `black/linegen.py:1328`                      |
|  2.5% |    2 MiB |           3 | `visit_default`              | `black/linegen.py:134`                       |
|  2.5% |    2 MiB |           2 | `generate_comments`          | `black/comments.py:52`                       |
|  1.3% | 1.01 MiB |          12 | `parse_tokens`               | `blib2to3/pgen2/driver.py:114`               |
|  1.3% |    1 MiB |           5 | `__init__`                   | `blib2to3/pytree.py:248`                     |
|  1.3% |    1 MiB |           4 | `transform_line`             | `black/linegen.py:601`                       |
|  1.3% |    1 MiB |           1 | `prev_sibling`               | `blib2to3/pytree.py:207`                     |
|  1.3% |    1 MiB |           1 | `convert`                    | `blib2to3/pytree.py:486`                     |
|  1.3% |    1 MiB |           1 | `prefix`                     | `blib2to3/pytree.py:480`                     |
|  1.3% |    1 MiB |           1 | `<listcomp>`                 | `black/parsing.py:154`                       |
|  1.3% |    1 MiB |           1 | `__init__`                   | `<string>:2`                                 |

#### Categories

##### Ours

|     % |     Size | Allocations | Function                     | Location                         |
| ----: | -------: | ----------: | ---------------------------- | -------------------------------- |
| 20.7% | 16.2 MiB |      20,788 | `mark`                       | `black/brackets.py:70`           |
|  9.0% |  7.1 MiB |           4 | `assert_equivalent`          | `black/__init__.py:1524`         |
|  7.6% |    6 MiB |           6 | `__new__`                    | `blib2to3/pytree.py:81`          |
|  6.4% | 5.05 MiB |          61 | `_stringify_ast`             | `black/parsing.py:174`           |
|  6.4% |    5 MiB |           6 | `visit_power`                | `black/linegen.py:341`           |
|  6.4% |    5 MiB |           5 | `changed`                    | `blib2to3/pytree.py:171`         |
|  2.7% | 2.14 MiB |         197 | `update_sibling_maps`        | `blib2to3/pytree.py:369`         |
|  2.5% |    2 MiB |           3 | `normalize_invisible_parens` | `black/linegen.py:1328`          |
|  2.5% |    2 MiB |           3 | `visit_default`              | `black/linegen.py:134`           |
|  2.5% |    2 MiB |           2 | `generate_comments`          | `black/comments.py:52`           |
|  1.3% | 1.01 MiB |          12 | `parse_tokens`               | `blib2to3/pgen2/driver.py:114`   |
|  1.3% |    1 MiB |           5 | `__init__`                   | `blib2to3/pytree.py:248`         |
|  1.3% |    1 MiB |           4 | `transform_line`             | `black/linegen.py:601`           |
|  1.3% |    1 MiB |           1 | `prev_sibling`               | `blib2to3/pytree.py:207`         |
|  1.3% |    1 MiB |           1 | `convert`                    | `blib2to3/pytree.py:486`         |
|  1.3% |    1 MiB |           1 | `prefix`                     | `blib2to3/pytree.py:480`         |
|  1.3% |    1 MiB |           1 | `<listcomp>`                 | `black/parsing.py:154`           |
|  1.3% |    1 MiB |           1 | `__init__`                   | `<string>:2`                     |
|  1.3% |    1 MiB |           1 | `is_def`                     | `black/lines.py:160`             |
|  1.3% |    1 MiB |           1 | `generate_tokens`            | `blib2to3/pgen2/tokenize.py:565` |

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
| 93.8% | 15.2 MiB |      20,786 | `black/brackets.py:112` |
|  6.2% |    1 MiB |           1 | `black/brackets.py:118` |
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

##### `__new__` (`blib2to3/pytree.py:81`)

|      % |  Size | Allocations | Location                |
| -----: | ----: | ----------: | ----------------------- |
| 100.0% | 6 MiB |           6 | `blib2to3/pytree.py:84` |

##### `_stringify_ast` (`black/parsing.py:174`)

|     % |     Size | Allocations | Location               |
| ----: | -------: | ----------: | ---------------------- |
| 40.5% | 2.05 MiB |          58 | `black/parsing.py:240` |
| 39.6% |    2 MiB |           2 | `black/parsing.py:244` |
| 19.8% |    1 MiB |           1 | `black/parsing.py:197` |

##### `visit_power` (`black/linegen.py:341`)

|      % |  Size | Allocations | Location               |
| -----: | ----: | ----------: | ---------------------- |
| 100.0% | 5 MiB |           5 | `black/linegen.py:342` |
|  <0.1% | 904 B |           1 | `black/linegen.py:361` |

##### `changed` (`blib2to3/pytree.py:171`)

|     % |  Size | Allocations | Location                 |
| ----: | ----: | ----------: | ------------------------ |
| 80.0% | 4 MiB |           4 | `blib2to3/pytree.py:175` |
| 20.0% | 1 MiB |           1 | `blib2to3/pytree.py:176` |

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>:727`)

|      % |     Size | Allocations | Location                                     |
| -----: | -------: | ----------: | -------------------------------------------- |
| 100.0% | 2.53 MiB |         593 | `<frozen importlib._bootstrap_external>:729` |

##### `update_sibling_maps` (`blib2to3/pytree.py:369`)

|     % |     Size | Allocations | Location                 |
| ----: | -------: | ----------: | ------------------------ |
| 96.6% | 2.07 MiB |          95 | `blib2to3/pytree.py:376` |
|  3.2% | 70.3 KiB |          93 | `blib2to3/pytree.py:377` |
|  0.2% | 4.99 KiB |           9 | `blib2to3/pytree.py:379` |

##### `normalize_invisible_parens` (`black/linegen.py:1328`)

|     % |     Size | Allocations | Location                |
| ----: | -------: | ----------: | ----------------------- |
| 99.9% |    2 MiB |           2 | `black/linegen.py:1351` |
|  0.1% | 1.15 KiB |           1 | `black/linegen.py:1401` |

##### `visit_default` (`black/linegen.py:134`)

|      % |  Size | Allocations | Location               |
| -----: | ----: | ----------: | ---------------------- |
| 100.0% | 2 MiB |           2 | `black/linegen.py:158` |
|  <0.1% | 702 B |           1 | `black/linegen.py:144` |

##### `generate_comments` (`black/comments.py:52`)

|      % |  Size | Allocations | Location               |
| -----: | ----: | ----------: | ---------------------- |
| 100.0% | 2 MiB |           2 | `black/comments.py:76` |

##### `parse_tokens` (`blib2to3/pgen2/driver.py:114`)

|     % |     Size | Allocations | Location                       |
| ----: | -------: | ----------: | ------------------------------ |
| 99.1% |    1 MiB |           3 | `blib2to3/pgen2/driver.py:141` |
|  0.8% | 8.13 KiB |           8 | `blib2to3/pgen2/driver.py:138` |
|  0.1% |    886 B |           1 | `blib2to3/pgen2/driver.py:162` |

##### `__init__` (`blib2to3/pytree.py:248`)

|      % |  Size | Allocations | Location                 |
| -----: | ----: | ----------: | ------------------------ |
| 100.0% | 1 MiB |           5 | `blib2to3/pytree.py:266` |

##### `transform_line` (`black/linegen.py:601`)

|     % |     Size | Allocations | Location               |
| ----: | -------: | ----------: | ---------------------- |
| 99.7% |    1 MiB |           1 | `black/linegen.py:679` |
|  0.1% | 1.39 KiB |           1 | `black/linegen.py:635` |
|  0.1% |    910 B |           1 | `black/linegen.py:714` |
| <0.1% |    518 B |           1 | `black/linegen.py:631` |

##### `prev_sibling` (`blib2to3/pytree.py:207`)

|      % |  Size | Allocations | Location                 |
| -----: | ----: | ----------: | ------------------------ |
| 100.0% | 1 MiB |           1 | `blib2to3/pytree.py:219` |

##### `convert` (`blib2to3/pytree.py:486`)

|      % |  Size | Allocations | Location                 |
| -----: | ----: | ----------: | ------------------------ |
| 100.0% | 1 MiB |           1 | `blib2to3/pytree.py:501` |

##### `prefix` (`blib2to3/pytree.py:480`)

|      % |  Size | Allocations | Location                 |
| -----: | ----: | ----------: | ------------------------ |
| 100.0% | 1 MiB |           1 | `blib2to3/pytree.py:482` |

##### `<listcomp>` (`black/parsing.py:154`)

|      % |  Size | Allocations | Location               |
| -----: | ----: | ----------: | ---------------------- |
| 100.0% | 1 MiB |           1 | `black/parsing.py:154` |

##### `__init__` (`<string>:2`)

|      % |  Size | Allocations | Location     |
| -----: | ----: | ----------: | ------------ |
| 100.0% | 1 MiB |           1 | `<string>:9` |

##### `is_def` (`black/lines.py:160`)

|      % |  Size | Allocations | Location             |
| -----: | ----: | ----------: | -------------------- |
| 100.0% | 1 MiB |           1 | `black/lines.py:169` |

##### `generate_tokens` (`blib2to3/pgen2/tokenize.py:565`)

|      % |  Size | Allocations | Location                         |
| -----: | ----: | ----------: | -------------------------------- |
| 100.0% | 1 MiB |           1 | `blib2to3/pgen2/tokenize.py:614` |

##### `__getitem__` (`/usr/lib/python3.11/typing.py:1531`)

|      % |  Size | Allocations | Location                             |
| -----: | ----: | ----------: | ------------------------------------ |
| 100.0% | 1 MiB |           1 | `/usr/lib/python3.11/typing.py:1536` |

##### `decode` (`<frozen codecs>:319`)

|      % |    Size | Allocations | Location              |
| -----: | ------: | ----------: | --------------------- |
| 100.0% | 222 KiB |           1 | `<frozen codecs>:322` |

##### `__new__` (`<frozen abc>:105`)

|      % |     Size | Allocations | Location           |
| -----: | -------: | ----------: | ------------------ |
| 100.0% | 75.7 KiB |          79 | `<frozen abc>:106` |

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
| 35.7% | 1.69 KiB |           2 | `/usr/lib/python3.11/pkgutil.py:194` |
| 35.7% | 1.69 KiB |           2 | `/usr/lib/python3.11/pkgutil.py:269` |
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
| 100.0% | 16.2 MiB |      20,788 | `append` | `black/lines.py:63` |

##### `parse` (`/usr/lib/python3.11/ast.py:33`)

|      % |     Size | Allocations | Caller                  | Location               |
| -----: | -------: | ----------: | ----------------------- | ---------------------- |
| 100.0% | 9.12 MiB |         142 | `_parse_single_version` | `black/parsing.py:117` |

##### `assert_equivalent` (`black/__init__.py:1524`)

|      % |    Size | Allocations | Caller                            | Location                 |
| -----: | ------: | ----------: | --------------------------------- | ------------------------ |
| 100.0% | 7.1 MiB |           4 | `check_stability_and_equivalence` | `black/__init__.py:1037` |

##### `__new__` (`blib2to3/pytree.py:81`)

|      % |  Size | Allocations | Caller    | Location                 |
| -----: | ----: | ----------: | --------- | ------------------------ |
| 100.0% | 6 MiB |           6 | `convert` | `blib2to3/pytree.py:486` |

##### `_stringify_ast` (`black/parsing.py:174`)

|      % |     Size | Allocations | Caller                           | Location               |
| -----: | -------: | ----------: | -------------------------------- | ---------------------- |
| 100.0% | 5.05 MiB |          61 | `_stringify_ast_with_new_parent` | `black/parsing.py:166` |

##### `visit_power` (`black/linegen.py:341`)

|      % |  Size | Allocations | Caller  | Location             |
| -----: | ----: | ----------: | ------- | -------------------- |
| 100.0% | 5 MiB |           6 | `visit` | `black/nodes.py:163` |

##### `changed` (`blib2to3/pytree.py:171`)

|     % |  Size | Allocations | Caller    | Location                 |
| ----: | ----: | ----------: | --------- | ------------------------ |
| 80.0% | 4 MiB |           4 | `changed` | `blib2to3/pytree.py:171` |
| 20.0% | 1 MiB |           1 | `prefix`  | `blib2to3/pytree.py:480` |

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>:727`)

|      % |     Size | Allocations | Caller     | Location                                      |
| -----: | -------: | ----------: | ---------- | --------------------------------------------- |
| 100.0% | 2.53 MiB |         593 | `get_code` | `<frozen importlib._bootstrap_external>:1007` |

##### `update_sibling_maps` (`blib2to3/pytree.py:369`)

|      % |     Size | Allocations | Caller         | Location                 |
| -----: | -------: | ----------: | -------------- | ------------------------ |
| 100.0% | 2.14 MiB |         197 | `prev_sibling` | `blib2to3/pytree.py:207` |

##### `normalize_invisible_parens` (`black/linegen.py:1328`)

|      % |  Size | Allocations | Caller       | Location               |
| -----: | ----: | ----------: | ------------ | ---------------------- |
| 100.0% | 2 MiB |           3 | `visit_stmt` | `black/linegen.py:199` |

##### `visit_default` (`black/linegen.py:134`)

|      % |  Size | Allocations | Caller         | Location               |
| -----: | ----: | ----------: | -------------- | ---------------------- |
| 100.0% | 2 MiB |           2 | `visit`        | `black/nodes.py:163`   |
|  <0.1% | 702 B |           1 | `visit_STRING` | `black/linegen.py:413` |

##### `generate_comments` (`black/comments.py:52`)

|      % |  Size | Allocations | Caller          | Location               |
| -----: | ----: | ----------: | --------------- | ---------------------- |
| 100.0% | 2 MiB |           2 | `visit_default` | `black/linegen.py:134` |

##### `parse_tokens` (`blib2to3/pgen2/driver.py:114`)

|      % |     Size | Allocations | Caller         | Location                       |
| -----: | -------: | ----------: | -------------- | ------------------------------ |
| 100.0% | 1.01 MiB |          12 | `parse_string` | `blib2to3/pgen2/driver.py:198` |

##### `__init__` (`blib2to3/pytree.py:248`)

|      % |  Size | Allocations | Caller    | Location                 |
| -----: | ----: | ----------: | --------- | ------------------------ |
| 100.0% | 1 MiB |           5 | `convert` | `blib2to3/pytree.py:486` |

##### `transform_line` (`black/linegen.py:601`)

|      % |  Size | Allocations | Caller             | Location                 |
| -----: | ----: | ----------: | ------------------ | ------------------------ |
| 100.0% | 1 MiB |           4 | `_format_str_once` | `black/__init__.py:1236` |

##### `prev_sibling` (`blib2to3/pytree.py:207`)

|      % |  Size | Allocations | Caller       | Location             |
| -----: | ----: | ----------: | ------------ | -------------------- |
| 100.0% | 1 MiB |           1 | `whitespace` | `black/nodes.py:194` |

##### `convert` (`blib2to3/pytree.py:486`)

|      % |  Size | Allocations | Caller | Location                      |
| -----: | ----: | ----------: | ------ | ----------------------------- |
| 100.0% | 1 MiB |           1 | `pop`  | `blib2to3/pgen2/parse.py:398` |

##### `prefix` (`blib2to3/pytree.py:480`)

|      % |  Size | Allocations | Caller   | Location            |
| -----: | ----: | ----------: | -------- | ------------------- |
| 100.0% | 1 MiB |           1 | `append` | `black/lines.py:63` |

##### `<listcomp>` (`black/parsing.py:154`)

|      % |  Size | Allocations | Caller       | Location               |
| -----: | ----: | ----------: | ------------ | ---------------------- |
| 100.0% | 1 MiB |           1 | `_normalize` | `black/parsing.py:151` |

##### `__init__` (`<string>:2`)

|      % |  Size | Allocations | Caller     | Location     |
| -----: | ----: | ----------: | ---------- | ------------ |
| 100.0% | 1 MiB |           1 | `__init__` | `<string>:2` |

##### `is_def` (`black/lines.py:160`)

|      % |  Size | Allocations | Caller               | Location             |
| -----: | ----: | ----------: | -------------------- | -------------------- |
| 100.0% | 1 MiB |           1 | `_maybe_empty_lines` | `black/lines.py:610` |

##### `generate_tokens` (`blib2to3/pgen2/tokenize.py:565`)

|      % |  Size | Allocations | Caller     | Location                      |
| -----: | ----: | ----------: | ---------- | ----------------------------- |
| 100.0% | 1 MiB |           1 | `__next__` | `blib2to3/pgen2/driver.py:80` |

##### `__getitem__` (`/usr/lib/python3.11/typing.py:1531`)

|      % |  Size | Allocations | Caller  | Location                            |
| -----: | ----: | ----------: | ------- | ----------------------------------- |
| 100.0% | 1 MiB |           1 | `inner` | `/usr/lib/python3.11/typing.py:338` |

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
| 31.6% | 24.8 MiB |      13,403 | `visit_simple_stmt`               | `black/linegen.py:295`   |
| 28.3% | 22.3 MiB |         209 | `check_stability_and_equivalence` | `black/__init__.py:1037` |
| 28.3% | 22.3 MiB |         208 | `assert_equivalent`               | `black/__init__.py:1524` |
| 25.8% | 20.3 MiB |      20,885 | `append`                          | `black/lines.py:63`      |
| 21.5% | 16.9 MiB |      10,808 | `visit_power`                     | `black/linegen.py:341`   |
| 20.7% | 16.2 MiB |      20,788 | `mark`                            | `black/brackets.py:70`   |

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

|     % |     Size | Allocations | Callee              | Location                |
| ----: | -------: | ----------: | ------------------- | ----------------------- |
| 72.3% | 37.4 MiB |      21,088 | `visit`             | `black/nodes.py:163`    |
| 23.3% | 12.1 MiB |          32 | `lib2to3_parse`     | `black/parsing.py:55`   |
|  2.0% | 1.01 MiB |          13 | `transform_line`    | `black/linegen.py:601`  |
|  1.9% |    1 MiB |           3 | `maybe_empty_lines` | `black/lines.py:560`    |
| <0.1% | 19.9 KiB |           3 | `normalize_fmt_off` | `black/comments.py:168` |

##### `visit` (`black/nodes.py:163`)

|      % |     Size | Allocations | Callee              | Location               |
| -----: | -------: | ----------: | ------------------- | ---------------------- |
| 100.0% | 37.4 MiB |      21,086 | `visit_default`     | `black/linegen.py:134` |
|  99.2% | 37.2 MiB |      20,715 | `visit_stmt`        | `black/linegen.py:199` |
|  98.1% | 36.7 MiB |      20,148 | `visit_suite`       | `black/linegen.py:288` |
|  95.7% | 35.8 MiB |      20,273 | `visit_funcdef`     | `black/linegen.py:254` |
|  66.3% | 24.8 MiB |      13,403 | `visit_simple_stmt` | `black/linegen.py:295` |

##### `visit_default` (`black/linegen.py:134`)

|      % |     Size | Allocations | Callee              | Location               |
| -----: | -------: | ----------: | ------------------- | ---------------------- |
| 100.0% | 37.4 MiB |      21,086 | `visit_default`     | `black/nodes.py:187`   |
|  54.2% | 20.3 MiB |      20,885 | `append`            | `black/lines.py:63`    |
|  13.4% |    5 MiB |           5 | `generate_comments` | `black/comments.py:52` |

##### `visit_default` (`black/nodes.py:187`)

|      % |     Size | Allocations | Callee  | Location             |
| -----: | -------: | ----------: | ------- | -------------------- |
| 100.0% | 37.4 MiB |      21,086 | `visit` | `black/nodes.py:163` |

##### `visit_stmt` (`black/linegen.py:199`)

|      % |     Size | Allocations | Callee                       | Location                |
| -----: | -------: | ----------: | ---------------------------- | ----------------------- |
| 100.0% | 37.2 MiB |      20,713 | `visit`                      | `black/nodes.py:163`    |
|  10.8% |    4 MiB |           5 | `normalize_invisible_parens` | `black/linegen.py:1328` |
|   2.7% |    1 MiB |           1 | `line`                       | `black/linegen.py:109`  |

##### `visit_suite` (`black/linegen.py:288`)

|      % |     Size | Allocations | Callee          | Location               |
| -----: | -------: | ----------: | --------------- | ---------------------- |
| 100.0% | 36.7 MiB |      20,148 | `visit_default` | `black/linegen.py:134` |

##### `visit_funcdef` (`black/linegen.py:254`)

|      % |     Size | Allocations | Callee  | Location             |
| -----: | -------: | ----------: | ------- | -------------------- |
| 100.0% | 35.8 MiB |      20,273 | `visit` | `black/nodes.py:163` |

##### `visit_simple_stmt` (`black/linegen.py:295`)

|      % |     Size | Allocations | Callee          | Location               |
| -----: | -------: | ----------: | --------------- | ---------------------- |
| 100.0% | 24.8 MiB |      13,403 | `visit_default` | `black/linegen.py:134` |

##### `check_stability_and_equivalence` (`black/__init__.py:1037`)

|      % |     Size | Allocations | Callee              | Location                 |
| -----: | -------: | ----------: | ------------------- | ------------------------ |
| 100.0% | 22.3 MiB |         208 | `assert_equivalent` | `black/__init__.py:1524` |

##### `assert_equivalent` (`black/__init__.py:1524`)

|     % |     Size | Allocations | Callee           | Location               |
| ----: | -------: | ----------: | ---------------- | ---------------------- |
| 41.0% | 9.12 MiB |         142 | `parse_ast`      | `black/parsing.py:129` |
| 27.2% | 6.05 MiB |          62 | `_stringify_ast` | `black/parsing.py:174` |

##### `append` (`black/lines.py:63`)

|     % |     Size | Allocations | Callee       | Location                 |
| ----: | -------: | ----------: | ------------ | ------------------------ |
| 80.0% | 16.2 MiB |      20,788 | `mark`       | `black/brackets.py:70`   |
| 15.1% | 3.05 MiB |          92 | `whitespace` | `black/nodes.py:194`     |
|  4.9% |    1 MiB |           1 | `prefix`     | `blib2to3/pytree.py:480` |

##### `visit_power` (`black/linegen.py:341`)

|     % |     Size | Allocations | Callee          | Location               |
| ----: | -------: | ----------: | --------------- | ---------------------- |
| 70.4% | 11.9 MiB |      10,802 | `visit_default` | `black/linegen.py:134` |

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
|  7.6% |    6 MiB |           6 | `__new__` (`blib2to3/pytree.py:81`) ← `convert` (486) ← `shift` (`blib2to3/pgen2/parse.py:373`) ← `_addtoken` (290) ← `addtoken` (242) ← `parse_tokens` (`blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`black/parsing.py:55`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv13/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:853`) ← `invoke` (1339) ← `main` (1422) ← `__call__` (1567) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  3.8% |    3 MiB |           3 | `_stringify_ast` (`black/parsing.py:174`) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `assert_equivalent` (`black/__init__.py:1524`) ← `check_stability_and_equivalence` (1037) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv13/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:853`) ← `invoke` (1339) ← `main` (1422) ← `__call__` (1567) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  2.5% |    2 MiB |           2 | `visit_power` (`black/linegen.py:341`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv13/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:853`) ← `invoke` (1339) ← `main` (1422) ← `__call__` (1567) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  2.5% |    2 MiB |           2 | `normalize_invisible_parens` (`black/linegen.py:1328`) ← `visit_stmt` (199) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv13/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:853`) ← `invoke` (1339) ← `main` (1422) ← `__call__` (1567) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  1.3% | 1.04 MiB |          42 | `_stringify_ast` (`black/parsing.py:174`) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `assert_equivalent` (`black/__init__.py:1524`) ← `check_stability_and_equivalence` (1037) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv13/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:853`) ← `invoke` (1339) ← `main` (1422) ← `__call__` (1567) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|  1.3% | 1.03 MiB |          36 | `mark` (`black/brackets.py:70`) ← `append` (`black/lines.py:63`) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv13/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:853`) ← `invoke` (1339) ← `main` (1422) ← `__call__` (1567) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  1.3% | 1.01 MiB |          15 | `_compile_bytecode` (`<frozen importlib._bootstrap_external>:727`) ← `get_code` (1007) ← `exec_module` (934) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`/venv13/lib/python3.11/site-packages/click/exceptions.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`/venv13/lib/python3.11/site-packages/click/types.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `_call_with_frames_removed` (233) ← `_handle_fromlist` (1209) ← `<module>` (`/venv13/lib/python3.11/site-packages/click/core.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`/venv13/lib/python3.11/site-packages/click/__init__.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`black/__init__.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `_get_module_details` (`<frozen runpy>:105`) ← `_get_module_details` (105)                                                                                                                                                |
|  1.3% | 1.01 MiB |          12 | `parse_tokens` (`blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`black/parsing.py:55`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv13/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:853`) ← `invoke` (1339) ← `main` (1422) ← `__call__` (1567) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  1.3% | 1.01 MiB |          14 | `_compile_bytecode` (`<frozen importlib._bootstrap_external>:727`) ← `get_code` (1007) ← `exec_module` (934) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`/usr/lib/python3.11/tomllib/__init__.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`black/files.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`black/__init__.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `_get_module_details` (`<frozen runpy>:105`) ← `_get_module_details` (105)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  1.3% |    1 MiB |           5 | `__init__` (`blib2to3/pytree.py:248`) ← `convert` (486) ← `pop` (`blib2to3/pgen2/parse.py:398`) ← `_addtoken` (290) ← `addtoken` (242) ← `parse_tokens` (`blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`black/parsing.py:55`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv13/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:853`) ← `invoke` (1339) ← `main` (1422) ← `__call__` (1567) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  1.3% |    1 MiB |           4 | `transform_line` (`black/linegen.py:601`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv13/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:853`) ← `invoke` (1339) ← `main` (1422) ← `__call__` (1567) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  1.3% |    1 MiB |           1 | `generate_comments` (`black/comments.py:52`) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv13/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:853`) ← `invoke` (1339) ← `main` (1422) ← `__call__` (1567) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                             |
|  1.3% |    1 MiB |           1 | `changed` (`blib2to3/pytree.py:171`) ← `changed` (171) ← `prefix` (480) ← `normalize_trailing_prefix` (`black/comments.py:127`) ← `generate_comments` (52) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv13/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:853`) ← `invoke` (1339) ← `main` (1422) ← `__call__` (1567) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91) |
|  1.3% |    1 MiB |           1 | `update_sibling_maps` (`blib2to3/pytree.py:369`) ← `prev_sibling` (207) ← `whitespace` (`black/nodes.py:194`) ← `append` (`black/lines.py:63`) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv13/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:853`) ← `invoke` (1339) ← `main` (1422) ← `__call__` (1567) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                           |
|  1.3% |    1 MiB |           1 | `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv13/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:853`) ← `invoke` (1339) ← `main` (1422) ← `__call__` (1567) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  1.3% |    1 MiB |           1 | `<listcomp>` (`black/parsing.py:154`) ← `_normalize` (151) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `assert_equivalent` (`black/__init__.py:1524`) ← `check_stability_and_equivalence` (1037) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv13/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:853`) ← `invoke` (1339) ← `main` (1422) ← `__call__` (1567) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  1.3% |    1 MiB |           1 | `_stringify_ast` (`black/parsing.py:174`) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `assert_equivalent` (`black/__init__.py:1524`) ← `check_stability_and_equivalence` (1037) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv13/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:853`) ← `invoke` (1339) ← `main` (1422) ← `__call__` (1567) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  1.3% |    1 MiB |           1 | `changed` (`blib2to3/pytree.py:171`) ← `changed` (171) ← `changed` (171) ← `changed` (171) ← `prefix` (480) ← `prefix` (329) ← `prefix` (329) ← `wrap_in_parentheses` (`black/nodes.py:935`) ← `normalize_invisible_parens` (`black/linegen.py:1328`) ← `visit_stmt` (199) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv13/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:853`) ← `invoke` (1339) ← `main` (1422) ← `__call__` (1567) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |

# Leaked memory profile

Leaked 59.9 MiB over 22,471 allocations (2.73 KiB per allocation).

| Category         |     % |     Size | Allocations |
| ---------------- | ----: | -------: | ----------: |
| Ours             | 88.2% | 52.9 MiB |      21,383 |
| Standard library | 11.4% | 6.81 MiB |         859 |
| Third-party      |  0.4% |  237 KiB |         229 |

## Hottest functions

### Self size

Functions ranked by bytes never freed directly in the function body, excluding callees.

|     % |     Size | Allocations | Function                     | Location                                     |
| ----: | -------: | ----------: | ---------------------------- | -------------------------------------------- |
| 27.1% | 16.2 MiB |      20,788 | `mark`                       | `black/brackets.py:70`                       |
| 10.0% |    6 MiB |           6 | `__new__`                    | `blib2to3/pytree.py:81`                      |
|  8.3% |    5 MiB |           6 | `visit_power`                | `black/linegen.py:341`                       |
|  8.3% |    5 MiB |           5 | `changed`                    | `blib2to3/pytree.py:171`                     |
|  5.0% | 3.01 MiB |           4 | `parse`                      | `/usr/lib/python3.11/ast.py:33`              |
|  4.2% | 2.53 MiB |         593 | `_compile_bytecode`          | `<frozen importlib._bootstrap_external>:727` |
|  3.6% | 2.14 MiB |         197 | `update_sibling_maps`        | `blib2to3/pytree.py:369`                     |
|  3.3% |    2 MiB |           3 | `normalize_invisible_parens` | `black/linegen.py:1328`                      |
|  3.3% |    2 MiB |           3 | `visit_default`              | `black/linegen.py:134`                       |
|  3.3% |    2 MiB |           2 | `generate_comments`          | `black/comments.py:52`                       |
|  1.8% | 1.07 MiB |           7 | `transform_line`             | `black/linegen.py:601`                       |
|  1.7% | 1.01 MiB |          12 | `parse_tokens`               | `blib2to3/pgen2/driver.py:114`               |
|  1.7% |    1 MiB |           5 | `__init__`                   | `blib2to3/pytree.py:248`                     |
|  1.7% |    1 MiB |           1 | `prefix`                     | `blib2to3/pytree.py:480`                     |
|  1.7% |    1 MiB |           1 | `prev_sibling`               | `blib2to3/pytree.py:207`                     |
|  1.7% |    1 MiB |           1 | `_stringify_ast`             | `black/parsing.py:174`                       |
|  1.7% |    1 MiB |           1 | `__init__`                   | `<string>:2`                                 |
|  1.7% |    1 MiB |           1 | `is_def`                     | `black/lines.py:160`                         |
|  1.7% |    1 MiB |           1 | `generate_tokens`            | `blib2to3/pgen2/tokenize.py:565`             |
|  1.7% |    1 MiB |           1 | `convert`                    | `blib2to3/pytree.py:486`                     |

#### Categories

##### Ours

|     % |     Size | Allocations | Function                     | Location                         |
| ----: | -------: | ----------: | ---------------------------- | -------------------------------- |
| 27.1% | 16.2 MiB |      20,788 | `mark`                       | `black/brackets.py:70`           |
| 10.0% |    6 MiB |           6 | `__new__`                    | `blib2to3/pytree.py:81`          |
|  8.3% |    5 MiB |           6 | `visit_power`                | `black/linegen.py:341`           |
|  8.3% |    5 MiB |           5 | `changed`                    | `blib2to3/pytree.py:171`         |
|  3.6% | 2.14 MiB |         197 | `update_sibling_maps`        | `blib2to3/pytree.py:369`         |
|  3.3% |    2 MiB |           3 | `normalize_invisible_parens` | `black/linegen.py:1328`          |
|  3.3% |    2 MiB |           3 | `visit_default`              | `black/linegen.py:134`           |
|  3.3% |    2 MiB |           2 | `generate_comments`          | `black/comments.py:52`           |
|  1.8% | 1.07 MiB |           7 | `transform_line`             | `black/linegen.py:601`           |
|  1.7% | 1.01 MiB |          12 | `parse_tokens`               | `blib2to3/pgen2/driver.py:114`   |
|  1.7% |    1 MiB |           5 | `__init__`                   | `blib2to3/pytree.py:248`         |
|  1.7% |    1 MiB |           1 | `prefix`                     | `blib2to3/pytree.py:480`         |
|  1.7% |    1 MiB |           1 | `prev_sibling`               | `blib2to3/pytree.py:207`         |
|  1.7% |    1 MiB |           1 | `_stringify_ast`             | `black/parsing.py:174`           |
|  1.7% |    1 MiB |           1 | `__init__`                   | `<string>:2`                     |
|  1.7% |    1 MiB |           1 | `is_def`                     | `black/lines.py:160`             |
|  1.7% |    1 MiB |           1 | `generate_tokens`            | `blib2to3/pgen2/tokenize.py:565` |
|  1.7% |    1 MiB |           1 | `convert`                    | `blib2to3/pytree.py:486`         |
|  1.7% |    1 MiB |           1 | `push`                       | `blib2to3/pgen2/parse.py:386`    |
|  1.7% |    1 MiB |           1 | `__init__`                   | `blib2to3/pytree.py:400`         |

##### Standard library

|     % |     Size | Allocations | Function                   | Location                                          |
| ----: | -------: | ----------: | -------------------------- | ------------------------------------------------- |
|  5.0% | 3.01 MiB |           4 | `parse`                    | `/usr/lib/python3.11/ast.py:33`                   |
|  4.2% | 2.53 MiB |         593 | `_compile_bytecode`        | `<frozen importlib._bootstrap_external>:727`      |
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
| 93.8% | 15.2 MiB |      20,786 | `black/brackets.py:112` |
|  6.2% |    1 MiB |           1 | `black/brackets.py:118` |
| <0.1% | 1.49 KiB |           1 | `black/brackets.py:114` |

##### `__new__` (`blib2to3/pytree.py:81`)

|      % |  Size | Allocations | Location                |
| -----: | ----: | ----------: | ----------------------- |
| 100.0% | 6 MiB |           6 | `blib2to3/pytree.py:84` |

##### `visit_power` (`black/linegen.py:341`)

|      % |  Size | Allocations | Location               |
| -----: | ----: | ----------: | ---------------------- |
| 100.0% | 5 MiB |           5 | `black/linegen.py:342` |
|  <0.1% | 904 B |           1 | `black/linegen.py:361` |

##### `changed` (`blib2to3/pytree.py:171`)

|     % |  Size | Allocations | Location                 |
| ----: | ----: | ----------: | ------------------------ |
| 80.0% | 4 MiB |           4 | `blib2to3/pytree.py:175` |
| 20.0% | 1 MiB |           1 | `blib2to3/pytree.py:176` |

##### `parse` (`/usr/lib/python3.11/ast.py:33`)

|      % |     Size | Allocations | Location                        |
| -----: | -------: | ----------: | ------------------------------- |
| 100.0% | 3.01 MiB |           4 | `/usr/lib/python3.11/ast.py:50` |

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>:727`)

|      % |     Size | Allocations | Location                                     |
| -----: | -------: | ----------: | -------------------------------------------- |
| 100.0% | 2.53 MiB |         593 | `<frozen importlib._bootstrap_external>:729` |

##### `update_sibling_maps` (`blib2to3/pytree.py:369`)

|     % |     Size | Allocations | Location                 |
| ----: | -------: | ----------: | ------------------------ |
| 96.6% | 2.07 MiB |          95 | `blib2to3/pytree.py:376` |
|  3.2% | 70.3 KiB |          93 | `blib2to3/pytree.py:377` |
|  0.2% | 4.99 KiB |           9 | `blib2to3/pytree.py:379` |

##### `normalize_invisible_parens` (`black/linegen.py:1328`)

|     % |     Size | Allocations | Location                |
| ----: | -------: | ----------: | ----------------------- |
| 99.9% |    2 MiB |           2 | `black/linegen.py:1351` |
|  0.1% | 1.15 KiB |           1 | `black/linegen.py:1401` |

##### `visit_default` (`black/linegen.py:134`)

|      % |  Size | Allocations | Location               |
| -----: | ----: | ----------: | ---------------------- |
| 100.0% | 2 MiB |           2 | `black/linegen.py:158` |
|  <0.1% | 702 B |           1 | `black/linegen.py:144` |

##### `generate_comments` (`black/comments.py:52`)

|      % |  Size | Allocations | Location               |
| -----: | ----: | ----------: | ---------------------- |
| 100.0% | 2 MiB |           2 | `black/comments.py:76` |

##### `transform_line` (`black/linegen.py:601`)

|     % |     Size | Allocations | Location               |
| ----: | -------: | ----------: | ---------------------- |
| 99.7% | 1.07 MiB |           4 | `black/linegen.py:679` |
|  0.1% | 1.39 KiB |           1 | `black/linegen.py:635` |
|  0.1% |    910 B |           1 | `black/linegen.py:714` |
| <0.1% |    518 B |           1 | `black/linegen.py:631` |

##### `parse_tokens` (`blib2to3/pgen2/driver.py:114`)

|     % |     Size | Allocations | Location                       |
| ----: | -------: | ----------: | ------------------------------ |
| 99.1% |    1 MiB |           3 | `blib2to3/pgen2/driver.py:141` |
|  0.8% | 8.13 KiB |           8 | `blib2to3/pgen2/driver.py:138` |
|  0.1% |    886 B |           1 | `blib2to3/pgen2/driver.py:162` |

##### `__init__` (`blib2to3/pytree.py:248`)

|      % |  Size | Allocations | Location                 |
| -----: | ----: | ----------: | ------------------------ |
| 100.0% | 1 MiB |           5 | `blib2to3/pytree.py:266` |

##### `prefix` (`blib2to3/pytree.py:480`)

|      % |  Size | Allocations | Location                 |
| -----: | ----: | ----------: | ------------------------ |
| 100.0% | 1 MiB |           1 | `blib2to3/pytree.py:482` |

##### `prev_sibling` (`blib2to3/pytree.py:207`)

|      % |  Size | Allocations | Location                 |
| -----: | ----: | ----------: | ------------------------ |
| 100.0% | 1 MiB |           1 | `blib2to3/pytree.py:219` |

##### `_stringify_ast` (`black/parsing.py:174`)

|      % |  Size | Allocations | Location               |
| -----: | ----: | ----------: | ---------------------- |
| 100.0% | 1 MiB |           1 | `black/parsing.py:240` |

##### `__init__` (`<string>:2`)

|      % |  Size | Allocations | Location     |
| -----: | ----: | ----------: | ------------ |
| 100.0% | 1 MiB |           1 | `<string>:9` |

##### `is_def` (`black/lines.py:160`)

|      % |  Size | Allocations | Location             |
| -----: | ----: | ----------: | -------------------- |
| 100.0% | 1 MiB |           1 | `black/lines.py:169` |

##### `generate_tokens` (`blib2to3/pgen2/tokenize.py:565`)

|      % |  Size | Allocations | Location                         |
| -----: | ----: | ----------: | -------------------------------- |
| 100.0% | 1 MiB |           1 | `blib2to3/pgen2/tokenize.py:614` |

##### `convert` (`blib2to3/pytree.py:486`)

|      % |  Size | Allocations | Location                 |
| -----: | ----: | ----------: | ------------------------ |
| 100.0% | 1 MiB |           1 | `blib2to3/pytree.py:501` |

##### `push` (`blib2to3/pgen2/parse.py:386`)

|      % |  Size | Allocations | Location                      |
| -----: | ----: | ----------: | ----------------------------- |
| 100.0% | 1 MiB |           1 | `blib2to3/pgen2/parse.py:394` |

##### `__init__` (`blib2to3/pytree.py:400`)

|      % |  Size | Allocations | Location                 |
| -----: | ----: | ----------: | ------------------------ |
| 100.0% | 1 MiB |           1 | `blib2to3/pytree.py:425` |

##### `__getitem__` (`/usr/lib/python3.11/typing.py:1531`)

|      % |  Size | Allocations | Location                             |
| -----: | ----: | ----------: | ------------------------------------ |
| 100.0% | 1 MiB |           1 | `/usr/lib/python3.11/typing.py:1536` |

##### `__new__` (`<frozen abc>:105`)

|      % |     Size | Allocations | Location           |
| -----: | -------: | ----------: | ------------------ |
| 100.0% | 75.7 KiB |          79 | `<frozen abc>:106` |

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
| 35.7% | 1.69 KiB |           2 | `/usr/lib/python3.11/pkgutil.py:194` |
| 35.7% | 1.69 KiB |           2 | `/usr/lib/python3.11/pkgutil.py:269` |
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
| 100.0% | 16.2 MiB |      20,788 | `append` | `black/lines.py:63` |

##### `__new__` (`blib2to3/pytree.py:81`)

|      % |  Size | Allocations | Caller    | Location                 |
| -----: | ----: | ----------: | --------- | ------------------------ |
| 100.0% | 6 MiB |           6 | `convert` | `blib2to3/pytree.py:486` |

##### `visit_power` (`black/linegen.py:341`)

|      % |  Size | Allocations | Caller  | Location             |
| -----: | ----: | ----------: | ------- | -------------------- |
| 100.0% | 5 MiB |           6 | `visit` | `black/nodes.py:163` |

##### `changed` (`blib2to3/pytree.py:171`)

|     % |  Size | Allocations | Caller    | Location                 |
| ----: | ----: | ----------: | --------- | ------------------------ |
| 80.0% | 4 MiB |           4 | `changed` | `blib2to3/pytree.py:171` |
| 20.0% | 1 MiB |           1 | `prefix`  | `blib2to3/pytree.py:480` |

##### `parse` (`/usr/lib/python3.11/ast.py:33`)

|      % |     Size | Allocations | Caller                  | Location               |
| -----: | -------: | ----------: | ----------------------- | ---------------------- |
| 100.0% | 3.01 MiB |           4 | `_parse_single_version` | `black/parsing.py:117` |

##### `_compile_bytecode` (`<frozen importlib._bootstrap_external>:727`)

|      % |     Size | Allocations | Caller     | Location                                      |
| -----: | -------: | ----------: | ---------- | --------------------------------------------- |
| 100.0% | 2.53 MiB |         593 | `get_code` | `<frozen importlib._bootstrap_external>:1007` |

##### `update_sibling_maps` (`blib2to3/pytree.py:369`)

|      % |     Size | Allocations | Caller         | Location                 |
| -----: | -------: | ----------: | -------------- | ------------------------ |
| 100.0% | 2.14 MiB |         197 | `prev_sibling` | `blib2to3/pytree.py:207` |

##### `normalize_invisible_parens` (`black/linegen.py:1328`)

|      % |  Size | Allocations | Caller       | Location               |
| -----: | ----: | ----------: | ------------ | ---------------------- |
| 100.0% | 2 MiB |           3 | `visit_stmt` | `black/linegen.py:199` |

##### `visit_default` (`black/linegen.py:134`)

|      % |  Size | Allocations | Caller         | Location               |
| -----: | ----: | ----------: | -------------- | ---------------------- |
| 100.0% | 2 MiB |           2 | `visit`        | `black/nodes.py:163`   |
|  <0.1% | 702 B |           1 | `visit_STRING` | `black/linegen.py:413` |

##### `generate_comments` (`black/comments.py:52`)

|      % |  Size | Allocations | Caller          | Location               |
| -----: | ----: | ----------: | --------------- | ---------------------- |
| 100.0% | 2 MiB |           2 | `visit_default` | `black/linegen.py:134` |

##### `transform_line` (`black/linegen.py:601`)

|      % |     Size | Allocations | Caller             | Location                 |
| -----: | -------: | ----------: | ------------------ | ------------------------ |
| 100.0% | 1.07 MiB |           7 | `_format_str_once` | `black/__init__.py:1236` |

##### `parse_tokens` (`blib2to3/pgen2/driver.py:114`)

|      % |     Size | Allocations | Caller         | Location                       |
| -----: | -------: | ----------: | -------------- | ------------------------------ |
| 100.0% | 1.01 MiB |          12 | `parse_string` | `blib2to3/pgen2/driver.py:198` |

##### `__init__` (`blib2to3/pytree.py:248`)

|      % |  Size | Allocations | Caller    | Location                 |
| -----: | ----: | ----------: | --------- | ------------------------ |
| 100.0% | 1 MiB |           5 | `convert` | `blib2to3/pytree.py:486` |

##### `prefix` (`blib2to3/pytree.py:480`)

|      % |  Size | Allocations | Caller   | Location            |
| -----: | ----: | ----------: | -------- | ------------------- |
| 100.0% | 1 MiB |           1 | `append` | `black/lines.py:63` |

##### `prev_sibling` (`blib2to3/pytree.py:207`)

|      % |  Size | Allocations | Caller       | Location             |
| -----: | ----: | ----------: | ------------ | -------------------- |
| 100.0% | 1 MiB |           1 | `whitespace` | `black/nodes.py:194` |

##### `_stringify_ast` (`black/parsing.py:174`)

|      % |  Size | Allocations | Caller                           | Location               |
| -----: | ----: | ----------: | -------------------------------- | ---------------------- |
| 100.0% | 1 MiB |           1 | `_stringify_ast_with_new_parent` | `black/parsing.py:166` |

##### `__init__` (`<string>:2`)

|      % |  Size | Allocations | Caller     | Location     |
| -----: | ----: | ----------: | ---------- | ------------ |
| 100.0% | 1 MiB |           1 | `__init__` | `<string>:2` |

##### `is_def` (`black/lines.py:160`)

|      % |  Size | Allocations | Caller               | Location             |
| -----: | ----: | ----------: | -------------------- | -------------------- |
| 100.0% | 1 MiB |           1 | `_maybe_empty_lines` | `black/lines.py:610` |

##### `generate_tokens` (`blib2to3/pgen2/tokenize.py:565`)

|      % |  Size | Allocations | Caller     | Location                      |
| -----: | ----: | ----------: | ---------- | ----------------------------- |
| 100.0% | 1 MiB |           1 | `__next__` | `blib2to3/pgen2/driver.py:80` |

##### `convert` (`blib2to3/pytree.py:486`)

|      % |  Size | Allocations | Caller | Location                      |
| -----: | ----: | ----------: | ------ | ----------------------------- |
| 100.0% | 1 MiB |           1 | `pop`  | `blib2to3/pgen2/parse.py:398` |

##### `push` (`blib2to3/pgen2/parse.py:386`)

|      % |  Size | Allocations | Caller      | Location                      |
| -----: | ----: | ----------: | ----------- | ----------------------------- |
| 100.0% | 1 MiB |           1 | `_addtoken` | `blib2to3/pgen2/parse.py:290` |

##### `__init__` (`blib2to3/pytree.py:400`)

|      % |  Size | Allocations | Caller    | Location                 |
| -----: | ----: | ----------: | --------- | ------------------------ |
| 100.0% | 1 MiB |           1 | `convert` | `blib2to3/pytree.py:486` |

##### `__getitem__` (`/usr/lib/python3.11/typing.py:1531`)

|      % |  Size | Allocations | Caller  | Location                            |
| -----: | ----: | ----------: | ------- | ----------------------------------- |
| 100.0% | 1 MiB |           1 | `inner` | `/usr/lib/python3.11/typing.py:338` |

##### `__new__` (`<frozen abc>:105`)

|     % |     Size | Allocations | Caller     | Location                                                         |
| ----: | -------: | ----------: | ---------- | ---------------------------------------------------------------- |
| 50.5% | 38.2 KiB |          45 | `<module>` | `/venv13/lib/python3.11/site-packages/click/types.py:1`          |
| 23.1% | 17.5 KiB |          18 | `<module>` | `black/trans.py:1`                                               |
| 18.3% | 13.9 KiB |           9 | `<module>` | `/venv13/lib/python3.11/site-packages/click/core.py:1`           |
|  8.0% | 6.07 KiB |           7 | `<module>` | `/venv13/lib/python3.11/site-packages/packaging/specifiers.py:1` |

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
| 100.0% | 59.9 MiB |      22,471 | `_run_tracker`         | `/venv13/lib/python3.11/site-packages/memray/commands/run.py:40` |
| 100.0% | 59.9 MiB |      22,470 | `run_module`           | `<frozen runpy>:201`                                             |
|  92.9% | 55.7 MiB |      21,200 | `__call__`             | `/venv13/lib/python3.11/site-packages/click/core.py:1567`        |
|  92.9% | 55.7 MiB |      21,200 | `patched_main`         | `black/__init__.py:1594`                                         |
|  92.9% | 55.7 MiB |      21,200 | `<module>`             | `black/__main__.py:1`                                            |
|  92.9% | 55.7 MiB |      21,200 | `_run_code`            | `<frozen runpy>:65`                                              |
|  92.9% | 55.7 MiB |      21,200 | `_run_module_code`     | `<frozen runpy>:91`                                              |
|  92.9% | 55.7 MiB |      21,199 | `main`                 | `/venv13/lib/python3.11/site-packages/click/core.py:1422`        |
|  92.9% | 55.6 MiB |      21,179 | `invoke`               | `/venv13/lib/python3.11/site-packages/click/core.py:1339`        |
|  92.9% | 55.6 MiB |      21,177 | `invoke`               | `/venv13/lib/python3.11/site-packages/click/core.py:853`         |
|  92.9% | 55.6 MiB |      21,176 | `new_func`             | `/venv13/lib/python3.11/site-packages/click/decorators.py:33`    |
|  92.9% | 55.6 MiB |      21,174 | `main`                 | `black/__init__.py:244`                                          |
|  92.9% | 55.6 MiB |      21,169 | `reformat_one`         | `black/__init__.py:860`                                          |
|  92.8% | 55.6 MiB |      21,157 | `format_file_in_place` | `black/__init__.py:917`                                          |
|  92.8% | 55.6 MiB |      21,156 | `format_file_contents` | `black/__init__.py:1054`                                         |
|  86.2% | 51.6 MiB |      21,148 | `_format_str_once`     | `black/__init__.py:1236`                                         |
|  62.5% | 37.4 MiB |      21,088 | `visit`                | `black/nodes.py:163`                                             |
|  62.5% | 37.4 MiB |      21,086 | `visit_default`        | `black/nodes.py:187`                                             |
|  62.5% | 37.4 MiB |      21,086 | `visit_default`        | `black/linegen.py:134`                                           |
|  62.0% | 37.2 MiB |      20,715 | `visit_stmt`           | `black/linegen.py:199`                                           |

#### Categories

##### Ours

|     % |     Size | Allocations | Function                          | Location                 |
| ----: | -------: | ----------: | --------------------------------- | ------------------------ |
| 92.9% | 55.7 MiB |      21,200 | `patched_main`                    | `black/__init__.py:1594` |
| 92.9% | 55.7 MiB |      21,200 | `<module>`                        | `black/__main__.py:1`    |
| 92.9% | 55.6 MiB |      21,174 | `main`                            | `black/__init__.py:244`  |
| 92.9% | 55.6 MiB |      21,169 | `reformat_one`                    | `black/__init__.py:860`  |
| 92.8% | 55.6 MiB |      21,157 | `format_file_in_place`            | `black/__init__.py:917`  |
| 92.8% | 55.6 MiB |      21,156 | `format_file_contents`            | `black/__init__.py:1054` |
| 86.2% | 51.6 MiB |      21,148 | `_format_str_once`                | `black/__init__.py:1236` |
| 62.5% | 37.4 MiB |      21,088 | `visit`                           | `black/nodes.py:163`     |
| 62.5% | 37.4 MiB |      21,086 | `visit_default`                   | `black/nodes.py:187`     |
| 62.5% | 37.4 MiB |      21,086 | `visit_default`                   | `black/linegen.py:134`   |
| 62.0% | 37.2 MiB |      20,715 | `visit_stmt`                      | `black/linegen.py:199`   |
| 61.3% | 36.7 MiB |      20,148 | `visit_suite`                     | `black/linegen.py:288`   |
| 60.2% | 36.1 MiB |          95 | `format_str`                      | `black/__init__.py:1189` |
| 59.8% | 35.8 MiB |      20,273 | `visit_funcdef`                   | `black/linegen.py:254`   |
| 41.4% | 24.8 MiB |      13,403 | `visit_simple_stmt`               | `black/linegen.py:295`   |
| 33.9% | 20.3 MiB |      20,885 | `append`                          | `black/lines.py:63`      |
| 32.6% | 19.5 MiB |      21,061 | `check_stability_and_equivalence` | `black/__init__.py:1037` |
| 28.2% | 16.9 MiB |      10,808 | `visit_power`                     | `black/linegen.py:341`   |
| 27.1% | 16.2 MiB |      20,788 | `mark`                            | `black/brackets.py:70`   |
| 25.9% | 15.5 MiB |      21,054 | `assert_stable`                   | `black/__init__.py:1557` |

##### Standard library

|      % |     Size | Allocations | Function                    | Location                                      |
| -----: | -------: | ----------: | --------------------------- | --------------------------------------------- |
| 100.0% | 59.9 MiB |      22,470 | `run_module`                | `<frozen runpy>:201`                          |
|  92.9% | 55.7 MiB |      21,200 | `_run_code`                 | `<frozen runpy>:65`                           |
|  92.9% | 55.7 MiB |      21,200 | `_run_module_code`          | `<frozen runpy>:91`                           |
|   7.1% | 4.25 MiB |       1,269 | `_get_module_details`       | `<frozen runpy>:105`                          |
|   7.1% | 4.24 MiB |       1,262 | `_find_and_load`            | `<frozen importlib._bootstrap>:1167`          |
|   7.1% | 4.24 MiB |       1,260 | `_find_and_load_unlocked`   | `<frozen importlib._bootstrap>:1122`          |
|   7.1% | 4.24 MiB |       1,259 | `_load_unlocked`            | `<frozen importlib._bootstrap>:666`           |
|   7.1% | 4.24 MiB |       1,257 | `exec_module`               | `<frozen importlib._bootstrap_external>:934`  |
|   7.0% | 4.21 MiB |       1,227 | `_call_with_frames_removed` | `<frozen importlib._bootstrap>:233`           |
|   5.0% | 3.01 MiB |           4 | `parse`                     | `/usr/lib/python3.11/ast.py:33`               |
|   4.2% | 2.53 MiB |         593 | `_compile_bytecode`         | `<frozen importlib._bootstrap_external>:727`  |
|   4.2% | 2.53 MiB |         593 | `get_code`                  | `<frozen importlib._bootstrap_external>:1007` |
|   2.2% |  1.3 MiB |         317 | `_handle_fromlist`          | `<frozen importlib._bootstrap>:1209`          |
|   1.7% | 1.03 MiB |          33 | `<module>`                  | `/usr/lib/python3.11/tomllib/__init__.py:1`   |
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
| 100.0% | 59.9 MiB |      22,470 | `run_module` | `<frozen runpy>:201` |

##### `run_module` (`<frozen runpy>:201`)

|     % |     Size | Allocations | Callee                | Location             |
| ----: | -------: | ----------: | --------------------- | -------------------- |
| 92.9% | 55.7 MiB |      21,200 | `_run_module_code`    | `<frozen runpy>:91`  |
|  7.1% | 4.25 MiB |       1,269 | `_get_module_details` | `<frozen runpy>:105` |

##### `__call__` (`/venv13/lib/python3.11/site-packages/click/core.py:1567`)

|      % |     Size | Allocations | Callee | Location                                                  |
| -----: | -------: | ----------: | ------ | --------------------------------------------------------- |
| 100.0% | 55.7 MiB |      21,199 | `main` | `/venv13/lib/python3.11/site-packages/click/core.py:1422` |

##### `patched_main` (`black/__init__.py:1594`)

|      % |     Size | Allocations | Callee     | Location                                                  |
| -----: | -------: | ----------: | ---------- | --------------------------------------------------------- |
| 100.0% | 55.7 MiB |      21,200 | `__call__` | `/venv13/lib/python3.11/site-packages/click/core.py:1567` |

##### `<module>` (`black/__main__.py:1`)

|      % |     Size | Allocations | Callee         | Location                 |
| -----: | -------: | ----------: | -------------- | ------------------------ |
| 100.0% | 55.7 MiB |      21,200 | `patched_main` | `black/__init__.py:1594` |

##### `_run_code` (`<frozen runpy>:65`)

|      % |     Size | Allocations | Callee     | Location              |
| -----: | -------: | ----------: | ---------- | --------------------- |
| 100.0% | 55.7 MiB |      21,200 | `<module>` | `black/__main__.py:1` |

##### `_run_module_code` (`<frozen runpy>:91`)

|      % |     Size | Allocations | Callee      | Location            |
| -----: | -------: | ----------: | ----------- | ------------------- |
| 100.0% | 55.7 MiB |      21,200 | `_run_code` | `<frozen runpy>:65` |

##### `main` (`/venv13/lib/python3.11/site-packages/click/core.py:1422`)

|      % |     Size | Allocations | Callee         | Location                                                  |
| -----: | -------: | ----------: | -------------- | --------------------------------------------------------- |
| 100.0% | 55.6 MiB |      21,179 | `invoke`       | `/venv13/lib/python3.11/site-packages/click/core.py:1339` |
|  <0.1% | 14.3 KiB |          17 | `make_context` | `/venv13/lib/python3.11/site-packages/click/core.py:1266` |
|  <0.1% |    529 B |           2 | `__exit__`     | `/venv13/lib/python3.11/site-packages/click/core.py:550`  |

##### `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:1339`)

|      % |     Size | Allocations | Callee   | Location                                                 |
| -----: | -------: | ----------: | -------- | -------------------------------------------------------- |
| 100.0% | 55.6 MiB |      21,177 | `invoke` | `/venv13/lib/python3.11/site-packages/click/core.py:853` |

##### `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:853`)

|      % |     Size | Allocations | Callee     | Location                                                      |
| -----: | -------: | ----------: | ---------- | ------------------------------------------------------------- |
| 100.0% | 55.6 MiB |      21,176 | `new_func` | `/venv13/lib/python3.11/site-packages/click/decorators.py:33` |

##### `new_func` (`/venv13/lib/python3.11/site-packages/click/decorators.py:33`)

|      % |     Size | Allocations | Callee | Location                |
| -----: | -------: | ----------: | ------ | ----------------------- |
| 100.0% | 55.6 MiB |      21,174 | `main` | `black/__init__.py:244` |

##### `main` (`black/__init__.py:244`)

|      % |     Size | Allocations | Callee         | Location                |
| -----: | -------: | ----------: | -------------- | ----------------------- |
| 100.0% | 55.6 MiB |      21,169 | `reformat_one` | `black/__init__.py:860` |
|  <0.1% | 2.06 KiB |           2 | `get_sources`  | `black/__init__.py:724` |

##### `reformat_one` (`black/__init__.py:860`)

|      % |     Size | Allocations | Callee                 | Location                |
| -----: | -------: | ----------: | ---------------------- | ----------------------- |
| 100.0% | 55.6 MiB |      21,157 | `format_file_in_place` | `black/__init__.py:917` |
|  <0.1% | 5.22 KiB |           7 | `write`                | `black/cache.py:132`    |
|  <0.1% | 1.92 KiB |           2 | `done`                 | `black/report.py:36`    |
|  <0.1% | 1.13 KiB |           1 | `read`                 | `black/cache.py:60`     |

##### `format_file_in_place` (`black/__init__.py:917`)

|      % |     Size | Allocations | Callee                 | Location                 |
| -----: | -------: | ----------: | ---------------------- | ------------------------ |
| 100.0% | 55.6 MiB |      21,156 | `format_file_contents` | `black/__init__.py:1054` |
|  <0.1% |    552 B |           1 | `decode_bytes`         | `black/__init__.py:1290` |

##### `format_file_contents` (`black/__init__.py:1054`)

|     % |     Size | Allocations | Callee                            | Location                 |
| ----: | -------: | ----------: | --------------------------------- | ------------------------ |
| 64.9% | 36.1 MiB |          95 | `format_str`                      | `black/__init__.py:1189` |
| 35.1% | 19.5 MiB |      21,061 | `check_stability_and_equivalence` | `black/__init__.py:1037` |

##### `_format_str_once` (`black/__init__.py:1236`)

|     % |     Size | Allocations | Callee              | Location                |
| ----: | -------: | ----------: | ------------------- | ----------------------- |
| 72.6% | 37.4 MiB |      21,088 | `visit`             | `black/nodes.py:163`    |
| 23.4% | 12.1 MiB |          32 | `lib2to3_parse`     | `black/parsing.py:55`   |
|  2.1% | 1.08 MiB |          16 | `transform_line`    | `black/linegen.py:601`  |
|  1.9% |    1 MiB |           3 | `maybe_empty_lines` | `black/lines.py:560`    |
| <0.1% | 19.9 KiB |           3 | `normalize_fmt_off` | `black/comments.py:168` |

##### `visit` (`black/nodes.py:163`)

|      % |     Size | Allocations | Callee              | Location               |
| -----: | -------: | ----------: | ------------------- | ---------------------- |
| 100.0% | 37.4 MiB |      21,086 | `visit_default`     | `black/linegen.py:134` |
|  99.2% | 37.2 MiB |      20,715 | `visit_stmt`        | `black/linegen.py:199` |
|  98.1% | 36.7 MiB |      20,148 | `visit_suite`       | `black/linegen.py:288` |
|  95.7% | 35.8 MiB |      20,273 | `visit_funcdef`     | `black/linegen.py:254` |
|  66.3% | 24.8 MiB |      13,403 | `visit_simple_stmt` | `black/linegen.py:295` |

##### `visit_default` (`black/nodes.py:187`)

|      % |     Size | Allocations | Callee  | Location             |
| -----: | -------: | ----------: | ------- | -------------------- |
| 100.0% | 37.4 MiB |      21,086 | `visit` | `black/nodes.py:163` |

##### `visit_default` (`black/linegen.py:134`)

|      % |     Size | Allocations | Callee              | Location               |
| -----: | -------: | ----------: | ------------------- | ---------------------- |
| 100.0% | 37.4 MiB |      21,086 | `visit_default`     | `black/nodes.py:187`   |
|  54.2% | 20.3 MiB |      20,885 | `append`            | `black/lines.py:63`    |
|  13.4% |    5 MiB |           5 | `generate_comments` | `black/comments.py:52` |

##### `visit_stmt` (`black/linegen.py:199`)

|      % |     Size | Allocations | Callee                       | Location                |
| -----: | -------: | ----------: | ---------------------------- | ----------------------- |
| 100.0% | 37.2 MiB |      20,713 | `visit`                      | `black/nodes.py:163`    |
|  10.8% |    4 MiB |           5 | `normalize_invisible_parens` | `black/linegen.py:1328` |
|   2.7% |    1 MiB |           1 | `line`                       | `black/linegen.py:109`  |

##### `visit_suite` (`black/linegen.py:288`)

|      % |     Size | Allocations | Callee          | Location               |
| -----: | -------: | ----------: | --------------- | ---------------------- |
| 100.0% | 36.7 MiB |      20,148 | `visit_default` | `black/linegen.py:134` |

##### `format_str` (`black/__init__.py:1189`)

|      % |     Size | Allocations | Callee             | Location                 |
| -----: | -------: | ----------: | ------------------ | ------------------------ |
| 100.0% | 36.1 MiB |          94 | `_format_str_once` | `black/__init__.py:1236` |

##### `visit_funcdef` (`black/linegen.py:254`)

|      % |     Size | Allocations | Callee  | Location             |
| -----: | -------: | ----------: | ------- | -------------------- |
| 100.0% | 35.8 MiB |      20,273 | `visit` | `black/nodes.py:163` |

##### `visit_simple_stmt` (`black/linegen.py:295`)

|      % |     Size | Allocations | Callee          | Location               |
| -----: | -------: | ----------: | --------------- | ---------------------- |
| 100.0% | 24.8 MiB |      13,403 | `visit_default` | `black/linegen.py:134` |

##### `append` (`black/lines.py:63`)

|     % |     Size | Allocations | Callee       | Location                 |
| ----: | -------: | ----------: | ------------ | ------------------------ |
| 80.0% | 16.2 MiB |      20,788 | `mark`       | `black/brackets.py:70`   |
| 15.1% | 3.05 MiB |          92 | `whitespace` | `black/nodes.py:194`     |
|  4.9% |    1 MiB |           1 | `prefix`     | `blib2to3/pytree.py:480` |

##### `check_stability_and_equivalence` (`black/__init__.py:1037`)

|     % |     Size | Allocations | Callee              | Location                 |
| ----: | -------: | ----------: | ------------------- | ------------------------ |
| 79.5% | 15.5 MiB |      21,054 | `assert_stable`     | `black/__init__.py:1557` |
| 20.5% | 4.01 MiB |           6 | `assert_equivalent` | `black/__init__.py:1524` |

##### `visit_power` (`black/linegen.py:341`)

|     % |     Size | Allocations | Callee          | Location               |
| ----: | -------: | ----------: | --------------- | ---------------------- |
| 70.4% | 11.9 MiB |      10,802 | `visit_default` | `black/linegen.py:134` |

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

|     % |     Size | Allocations | Call stack                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ----: | -------: | ----------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 10.0% |    6 MiB |           6 | `__new__` (`blib2to3/pytree.py:81`) ← `convert` (486) ← `shift` (`blib2to3/pgen2/parse.py:373`) ← `_addtoken` (290) ← `addtoken` (242) ← `parse_tokens` (`blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`black/parsing.py:55`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv13/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:853`) ← `invoke` (1339) ← `main` (1422) ← `__call__` (1567) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  5.0% | 3.01 MiB |           4 | `parse` (`/usr/lib/python3.11/ast.py:33`) ← `_parse_single_version` (`black/parsing.py:117`) ← `parse_ast` (129) ← `assert_equivalent` (`black/__init__.py:1524`) ← `check_stability_and_equivalence` (1037) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv13/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:853`) ← `invoke` (1339) ← `main` (1422) ← `__call__` (1567) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|  3.3% |    2 MiB |           2 | `visit_power` (`black/linegen.py:341`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv13/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:853`) ← `invoke` (1339) ← `main` (1422) ← `__call__` (1567) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|  3.3% |    2 MiB |           2 | `normalize_invisible_parens` (`black/linegen.py:1328`) ← `visit_stmt` (199) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv13/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:853`) ← `invoke` (1339) ← `main` (1422) ← `__call__` (1567) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  1.7% | 1.01 MiB |          15 | `_compile_bytecode` (`<frozen importlib._bootstrap_external>:727`) ← `get_code` (1007) ← `exec_module` (934) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`/venv13/lib/python3.11/site-packages/click/exceptions.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`/venv13/lib/python3.11/site-packages/click/types.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `_call_with_frames_removed` (233) ← `_handle_fromlist` (1209) ← `<module>` (`/venv13/lib/python3.11/site-packages/click/core.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`/venv13/lib/python3.11/site-packages/click/__init__.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`black/__init__.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `_get_module_details` (`<frozen runpy>:105`) ← `_get_module_details` (105)                                                                                                                                                |
|  1.7% | 1.01 MiB |          12 | `parse_tokens` (`blib2to3/pgen2/driver.py:114`) ← `parse_string` (198) ← `lib2to3_parse` (`black/parsing.py:55`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv13/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:853`) ← `invoke` (1339) ← `main` (1422) ← `__call__` (1567) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|  1.7% | 1.01 MiB |          14 | `_compile_bytecode` (`<frozen importlib._bootstrap_external>:727`) ← `get_code` (1007) ← `exec_module` (934) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`/usr/lib/python3.11/tomllib/__init__.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`black/files.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `<module>` (`black/__init__.py:1`) ← `_call_with_frames_removed` (`<frozen importlib._bootstrap>:233`) ← `exec_module` (`<frozen importlib._bootstrap_external>:934`) ← `_load_unlocked` (`<frozen importlib._bootstrap>:666`) ← `_find_and_load_unlocked` (1122) ← `_find_and_load` (1167) ← `_get_module_details` (`<frozen runpy>:105`) ← `_get_module_details` (105)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  1.7% |    1 MiB |           4 | `transform_line` (`black/linegen.py:601`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv13/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:853`) ← `invoke` (1339) ← `main` (1422) ← `__call__` (1567) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|  1.7% |    1 MiB |           1 | `generate_comments` (`black/comments.py:52`) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv13/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:853`) ← `invoke` (1339) ← `main` (1422) ← `__call__` (1567) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                             |
|  1.7% |    1 MiB |           1 | `changed` (`blib2to3/pytree.py:171`) ← `changed` (171) ← `prefix` (480) ← `normalize_trailing_prefix` (`black/comments.py:127`) ← `generate_comments` (52) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv13/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:853`) ← `invoke` (1339) ← `main` (1422) ← `__call__` (1567) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91) |
|  1.7% |    1 MiB |           1 | `update_sibling_maps` (`blib2to3/pytree.py:369`) ← `prev_sibling` (207) ← `whitespace` (`black/nodes.py:194`) ← `append` (`black/lines.py:63`) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_power` (341) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv13/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:853`) ← `invoke` (1339) ← `main` (1422) ← `__call__` (1567) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                           |
|  1.7% |    1 MiB |           1 | `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv13/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:853`) ← `invoke` (1339) ← `main` (1422) ← `__call__` (1567) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|  1.7% |    1 MiB |           1 | `_stringify_ast` (`black/parsing.py:174`) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `_stringify_ast_with_new_parent` (166) ← `_stringify_ast` (174) ← `assert_equivalent` (`black/__init__.py:1524`) ← `check_stability_and_equivalence` (1037) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv13/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:853`) ← `invoke` (1339) ← `main` (1422) ← `__call__` (1567) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  1.7% |    1 MiB |           1 | `changed` (`blib2to3/pytree.py:171`) ← `changed` (171) ← `changed` (171) ← `changed` (171) ← `prefix` (480) ← `prefix` (329) ← `prefix` (329) ← `wrap_in_parentheses` (`black/nodes.py:935`) ← `normalize_invisible_parens` (`black/linegen.py:1328`) ← `visit_stmt` (199) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv13/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:853`) ← `invoke` (1339) ← `main` (1422) ← `__call__` (1567) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  1.7% |    1 MiB |           1 | `__init__` (`<string>:2`) ← `__init__` (2) ← `line` (`black/linegen.py:109`) ← `visit_stmt` (199) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv13/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:853`) ← `invoke` (1339) ← `main` (1422) ← `__call__` (1567) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|  1.7% |    1 MiB |           1 | `update_sibling_maps` (`blib2to3/pytree.py:369`) ← `prev_sibling` (207) ← `whitespace` (`black/nodes.py:194`) ← `append` (`black/lines.py:63`) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv13/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:853`) ← `invoke` (1339) ← `main` (1422) ← `__call__` (1567) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  1.7% |    1 MiB |           1 | `changed` (`blib2to3/pytree.py:171`) ← `changed` (171) ← `changed` (171) ← `prefix` (480) ← `prefix` (329) ← `wrap_in_parentheses` (`black/nodes.py:935`) ← `normalize_invisible_parens` (`black/linegen.py:1328`) ← `visit_stmt` (199) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv13/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:853`) ← `invoke` (1339) ← `main` (1422) ← `__call__` (1567) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  1.7% |    1 MiB |           1 | `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv13/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:853`) ← `invoke` (1339) ← `main` (1422) ← `__call__` (1567) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|  1.7% |    1 MiB |           1 | `visit_power` (`black/linegen.py:341`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv13/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:853`) ← `invoke` (1339) ← `main` (1422) ← `__call__` (1567) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  1.7% |    1 MiB |           1 | `generate_comments` (`black/comments.py:52`) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_simple_stmt` (295) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_funcdef` (`black/linegen.py:254`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit_suite` (288) ← `visit` (`black/nodes.py:163`) ← `visit_stmt` (`black/linegen.py:199`) ← `visit` (`black/nodes.py:163`) ← `visit_default` (187) ← `visit_default` (`black/linegen.py:134`) ← `visit` (`black/nodes.py:163`) ← `_format_str_once` (`black/__init__.py:1236`) ← `format_str` (1189) ← `format_file_contents` (1054) ← `format_file_in_place` (917) ← `reformat_one` (860) ← `main` (244) ← `new_func` (`/venv13/lib/python3.11/site-packages/click/decorators.py:33`) ← `invoke` (`/venv13/lib/python3.11/site-packages/click/core.py:853`) ← `invoke` (1339) ← `main` (1422) ← `__call__` (1567) ← `patched_main` (`black/__init__.py:1594`) ← `<module>` (`black/__main__.py:1`) ← `_run_code` (`<frozen runpy>:65`) ← `_run_module_code` (91)                                                                                                                                                                                                                                                                         |
